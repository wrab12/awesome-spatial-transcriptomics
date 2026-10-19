(() => {
  const D = window.SITE_DATA;
  const $ = (sel) => document.querySelector(sel);
  const groups = D.layout;
  const E = D.entries;
  const secBy = {}, groupOfSec = {}, groupBy = {};
  groups.forEach((g) => {
    g.total = 0;
    groupBy[g.slug] = g;
    g.sections.forEach((s) => { secBy[s.slug] = s; groupOfSec[s.slug] = g; g.total += s.count; });
  });
  // Topics rather than platform names: few descriptions name every platform a tool supports, so a platform search would miss most of them.
  const QUICK = ['segmentation', 'deconvolution', 'niche', 'H&E', 'optimal transport', 'RNA velocity', 'foundation model', 'benchmark'];

  const langKey = (l) => {
    if (!l) return 'other';
    const s = l.toLowerCase();
    const py = s.includes('python');
    const r = /(^|[^a-z])r([^a-z]|$)/.test(s);
    return py && r ? 'both' : py ? 'python' : r ? 'r' : 'other';
  };
  E.forEach((e) => {
    const p = e.paper || {};
    e._hay = [e.name, e.desc, e.lang, e.host, p.venue, p.short, p.first, p.second, secBy[e.section].name, e.kind].filter(Boolean).join(' ').toLowerCase();
    e._lang = langKey(e.lang);
    e._year = p.year ? Number(p.year) : null;
    e._cites = p.cites ?? null;
  });
  const byId = Object.fromEntries(E.map((e) => [e.id, e]));
  let shown = E;   // entries in the current view, for the BibTeX download

  const DEFAULTS = { q: '', step: '', sec: '', lang: 'all', paper: 'all', year: 'all', hideU: false, hideNC: false, sort: 'workflow', flat: false };
  const state = { ...DEFAULTS };

  /* ---------- URL state, so any view can be shared ---------- */
  function readHash() {
    const p = new URLSearchParams(location.hash.slice(1));
    Object.assign(state, DEFAULTS, {
      q: p.get('q') || '', step: p.get('step') || '', sec: p.get('sec') || '',
      lang: p.get('lang') || 'all', paper: p.get('paper') || 'all', year: p.get('year') || 'all',
      hideU: p.get('hideU') === '1', hideNC: p.get('hideNC') === '1', sort: p.get('sort') || 'workflow', flat: p.get('flat') === '1',
    });
    if (state.sec && secBy[state.sec]) state.step = groupOfSec[state.sec].slug; else state.sec = '';
    if (state.step && !groupBy[state.step]) state.step = '';
  }
  function writeHash() {
    const p = new URLSearchParams();
    if (state.q) p.set('q', state.q);
    if (state.sec) p.set('sec', state.sec); else if (state.step) p.set('step', state.step);
    ['lang', 'paper', 'year', 'sort'].forEach((k) => { if (state[k] !== DEFAULTS[k]) p.set(k, state[k]); });
    if (state.hideU) p.set('hideU', '1');
    if (state.hideNC) p.set('hideNC', '1');
    if (state.flat) p.set('flat', '1');
    const h = p.toString();
    history.replaceState(null, '', h ? '#' + h : location.pathname + location.search);
  }

  /* ---------- filtering and ordering ---------- */
  const tokens = () => state.q.toLowerCase().split(/\s+/).filter(Boolean);
  function matches(e, t) {
    if (state.sec && e.section !== state.sec) return false;
    if (!state.sec && state.step && e.group !== state.step) return false;
    if (state.lang === 'python' && !['python', 'both'].includes(e._lang)) return false;
    if (state.lang === 'r' && !['r', 'both'].includes(e._lang)) return false;
    if (state.lang === 'other' && e._lang !== 'other') return false;
    if (state.paper === 'peer' && !(e.paper && !e.paper.preprint)) return false;
    if (state.paper === 'preprint' && !(e.paper && e.paper.preprint)) return false;
    const y = e._year;
    if (state.year === '2024' && !(y >= 2024)) return false;
    if (state.year === '2021' && !(y >= 2021 && y <= 2023)) return false;
    if (state.year === '2020' && !(y && y <= 2020)) return false;
    if (state.hideU && (e.flags.includes('unmaintained') || e.archived)) return false;
    if (state.hideNC && e.flags.includes('noncommercial')) return false;
    return t.every((w) => e._hay.includes(w));
  }
  const relevance = (e, t) => {
    const n = e.name.toLowerCase();
    return t.reduce((s, w) => s + (n === w ? 12 : n.startsWith(w) ? 7 : n.includes(w) ? 5 : 1), 0);
  };
  const byName = (a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
  // A tool inside a host package has no stars of its own (the host's say nothing about the tool), so it sorts after starred tools.
  const byStars = (a, b) => (b.host ? -1 : b.stars ?? -1) - (a.host ? -1 : a.stars ?? -1) || byName(a, b);
  const byYearDesc = (a, b) => (b._year ?? 0) - (a._year ?? 0) || byName(a, b);
  const ORDER = {
    cites: (a, b) => (b._cites ?? -1) - (a._cites ?? -1) || byName(a, b),
    stars: byStars,
    year: byYearDesc,
    pushed: (a, b) => (b.pushed || '').localeCompare(a.pushed || '') || byName(a, b),
    name: byName,
  };
  function curated(sec, items) {   // the README's order, except that hosted tools rank by their own stars
    if (sec.style === 'tech') return items.slice().sort((a, b) => (a.since ?? a._year ?? 9999) - (b.since ?? b._year ?? 9999));
    if (sec.slug === 'key-reviews') return items.slice().sort(byYearDesc);
    if (sec.style === 'bullets') return items;
    return items.slice().sort(byStars);
  }
  function order(sec, items, t) {
    if (state.sort !== 'workflow') return items.slice().sort(ORDER[state.sort]);
    if (t.length) return items.slice().sort((a, b) => relevance(b, t) - relevance(a, t) || byStars(a, b));
    return curated(sec, items);
  }

  /* ---------- rendering helpers ---------- */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const rxEsc = (w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  function hl(text, t) {
    const s = String(text ?? '');
    if (!t.length) return esc(s);
    const re = new RegExp(t.map(rxEsc).join('|'), 'gi');
    let out = '', last = 0;
    s.replace(re, (m, off) => { out += esc(s.slice(last, off)) + '<mark>' + esc(m) + '</mark>'; last = off + m.length; return m; });
    return out + esc(s.slice(last));
  }
  const compact = (n) => (n >= 1000 ? (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace(/\.0$/, '') + 'k' : String(n));
  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthYear = (iso) => MONTHS[Number(iso.slice(5, 7)) - 1] + ' ' + iso.slice(0, 4);
  const builtTime = new Date(D.built + 'T00:00:00').getTime();
  const yearsAgo = (iso) => (builtTime - new Date(iso + 'T00:00:00').getTime()) / (365.25 * 864e5);
  const longDate = (iso) => new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  // "Moses & Pachter" for two authors, "Hao et al." for more, as in an author–year citation.
  const authors = (p) => (p.first ? p.first + (p.second ? ' & ' + p.second : p.etal ? ' et al.' : '') : '');
  function refHTML(e, t) {
    const p = e.paper;
    if (!p) return '';
    const who = p.first ? `${authors(p)}, ` : '';   // hl() escapes
    const journal = p.short && p.short !== 'Paper' ? p.short : p.venue;
    const yr = p.year && !String(journal).includes(String(p.year)) ? ` ${p.year}` : '';
    const bib = p.bibtex ? `<button type="button" class="bib" data-bib="${esc(e.id)}" title="Copy BibTeX">BibTeX</button>` : '';
    return `<span class="ref"><a href="${esc(p.url)}" target="_blank" rel="noopener">${hl(who, t)}<span class="jr">${hl(journal, t)}</span><span class="yr">${yr}</span></a>${bib}</span>`
      + (p.preprint ? '<span class="tags"><span class="tag pre">Preprint</span></span>' : '');
  }
  function tagsHTML(e) {
    const tags = [];
    if (e.archived) tags.push('<span class="tag warn">Archived</span>');
    else if (e.flags.includes('unmaintained')) tags.push('<span class="tag warn">No longer maintained</span>');
    if (e.flags.includes('noncommercial')) tags.push('<span class="tag nc">Non-commercial license</span>');
    return tags.length ? `<span class="tags">${tags.join('')}</span>` : '';
  }
  function updatedHTML(e) {
    if (!e.pushed || e.host) return '';
    return `<span class="${yearsAgo(e.pushed) > 3 ? 'stale' : ''}" title="Last commit to the repository">${monthYear(e.pushed)}</span>`;
  }
  // A hosted tool has no stars of its own, so the cell stays empty and the name line says where it lives.
  const starsHTML = (e) => (e.stars != null && !e.host
    ? `<a href="https://github.com/${esc(e.repo)}" target="_blank" rel="noopener" title="${e.stars.toLocaleString()} stars on GitHub">${compact(e.stars)}</a>` : '');
  function metaHTML(e, withSection) {
    const bits = [];
    if (e.lang) bits.push(`<span class="lg">${esc(e.lang)}</span>`);
    if (e.host && !e.name.includes(e.host)) bits.push(`part of <a href="https://github.com/${esc(e.repo)}" target="_blank" rel="noopener">${esc(e.host)}</a>`);
    const sec = withSection ? `<span class="meta"><button type="button" data-sec="${esc(e.section)}">${esc(secBy[e.section].num)} ${esc(secBy[e.section].name)}</button></span>` : '';
    return (bits.length ? `<span class="meta">${bits.join('<span class="sep"> · </span>')}</span>` : '') + sec;
  }

  function head(key, label, cls = '') {
    const sorted = state.sort === key;
    return `<th class="${cls}" scope="col"${sorted ? ' aria-sort="descending"' : ''}>${key ? `<button type="button" data-sort="${key}">${label}</button>` : label}</th>`;
  }
  function tableHTML(items, t, kind, withSection) {
    if (kind === 'tech') {
      return `<table class="t"><colgroup><col class="c-name"><col><col class="c-ref"><col class="c-cite"></colgroup>
        <thead><tr>${head('name', 'Technology')}${head('', 'Principle')}${head('year', 'Reference')}${head('cites', 'Cited by', 'num')}</tr></thead>
        <tbody>${items.map((e) => `<tr id="e-${esc(e.id)}"><td><a class="nm" href="${esc(e.url)}" target="_blank" rel="noopener">${hl(e.name, t)}</a></td><td>${hl(e.desc, t)}</td><td class="refc">${refHTML(e, t)}</td><td class="num" data-label="Cited by">${e._cites != null ? e._cites.toLocaleString() : ''}</td></tr>`).join('')}</tbody></table>`;
    }
    const resource = kind === 'data';
    return `<table class="t"><colgroup><col class="c-name"><col><col class="c-ref"><col class="c-cite">${resource ? '' : '<col class="c-star"><col class="c-upd">'}</colgroup>
      <thead><tr>${head('name', resource ? 'Resource' : 'Name')}${head('', 'Description')}${head('year', 'Reference')}${head('cites', 'Cited by', 'num')}${resource ? '' : head('stars', 'Stars', 'num') + head('pushed', 'Last commit', 'num upd')}</tr></thead>
      <tbody>${items.map((e) => `<tr id="e-${esc(e.id)}">
        <td class="namec"><a class="nm" href="${esc(e.url)}" target="_blank" rel="noopener">${hl(e.name, t)}</a>${metaHTML(e, withSection)}${tagsHTML(e)}</td>
        <td>${hl(e.desc, t)}</td>
        <td class="refc">${refHTML(e, t)}</td>
        <td class="num" data-label="Cited by">${e._cites != null ? e._cites.toLocaleString() : ''}</td>
        ${resource ? '' : `<td class="num" data-label="Stars">${starsHTML(e)}</td><td class="num upd" data-label="Last commit">${updatedHTML(e)}</td>`}
      </tr>`).join('')}</tbody></table>`;
  }
  function refListHTML(items, t) {
    return `<ol class="refs">${items.map((e) => `<li id="e-${esc(e.id)}"><a class="nm" href="${esc(e.url)}" target="_blank" rel="noopener">${hl(e.name, t)}</a>. <span class="desc">${hl(e.desc, t)}</span> ${refHTML(e, t)}${tagsHTML(e)}</li>`).join('')}</ol>`;
  }
  // "Benchmarks: Yuan et al., Nat Methods 2024; Hu et al., Genome Biol 2024" under sections that have independent comparisons.
  function benchHTML(s) {
    const refs = (s.bench || []).map((id) => byId[id]).filter((e) => e && e.paper);
    if (!refs.length) return '';
    return `<p class="sec-bench"><b>Benchmarks:</b> ${refs.map((e) => {
      const p = e.paper, journal = p.short && p.short !== 'Paper' ? p.short : p.venue;
      const who = p.first ? esc(authors(p)) : esc(e.name);
      const yr = p.year && !String(journal).includes(String(p.year)) ? ` ${p.year}` : '';
      return `<a href="${esc(p.url)}" target="_blank" rel="noopener" title="${esc(e.name)}. ${esc(e.desc)}">${who}, <i>${esc(journal)}</i>${yr}</a>`;
    }).join('; ')}</p>`;
  }
  function sectionHTML(s, items, t) {
    let body;
    if (s.style === 'bullets') body = refListHTML(items, t);
    else if (s.style === 'tech') {
      body = ['Sequencing', 'Imaging'].map((k) => {
        const rows = items.filter((e) => e.kind === k);
        return rows.length ? `<p class="sub-title">${k}-based</p>${tableHTML(rows, t, 'tech')}` : '';
      }).join('');
    } else body = tableHTML(items, t, s.style === 'data' ? 'data' : 'tools');
    return `<section class="sec" id="s-${s.slug}" data-sec-anchor="${s.slug}">
      <header class="sec-head"><span class="sn">${esc(s.num)}</span><h3>${esc(s.name)}</h3><span class="sc">${items.length === s.count ? s.count : items.length + ' of ' + s.count}</span></header>
      ${s.intro && !t.length ? `<p class="sec-intro">${s.intro}</p>` : ''}${t.length ? '' : benchHTML(s)}${body}</section>`;
  }

  /* ---------- page parts ---------- */
  function renderFigure() {
    const flow = $('#flow');
    flow.style.setProperty('--n', groups.length);
    flow.innerHTML = groups.map((g) => `<li><button type="button" data-step="${g.slug}" aria-pressed="${state.step === g.slug}" title="${esc(g.name)}">
      <span class="dot">${esc(g.num)}</span><span class="label">${esc(g.short)}</span><span class="n">${g.total}</span></button></li>`).join('');
    const g = groupBy[state.step], sub = $('#subnav');
    if (g && g.sections.length > 1) {
      sub.hidden = false;
      sub.innerHTML = g.sections.map((s) => `<button type="button" data-sec="${s.slug}" aria-pressed="${state.sec === s.slug}"><span>${esc(s.num)}</span>${esc(s.name)}</button>`).join('');
    } else { sub.hidden = true; sub.innerHTML = ''; }
    const filtered = state.step || state.sec;
    $('#fig-caption').innerHTML = filtered
      ? `Showing ${esc(state.sec ? secBy[state.sec].name : g.name)}. <button type="button" class="link-btn" data-clear-step>Show all steps</button>`
      : 'Sections follow a typical analysis, from data generation to interpretation. Select a step to show only its sections.';
  }
  function renderTOC(visible) {
    $('#toc-list').innerHTML = groups.map((g) => {
      const secs = g.sections.length > 1
        ? `<ol>${g.sections.map((s) => `<li><a href="#s-${s.slug}" data-toc="${s.slug}" class="${visible.has(s.slug) ? '' : 'off'}"><span class="tn">${esc(s.num)}</span><span>${esc(s.name)}</span></a></li>`).join('')}</ol>`
        : '';
      const target = g.sections.length > 1 ? `g-${g.slug}` : `s-${g.sections[0].slug}`;
      const vis = g.sections.some((s) => visible.has(s.slug));
      return `<li class="tg"><a href="#${target}" data-toc="${g.sections.length > 1 ? '' : g.sections[0].slug}" data-toc-group="${g.slug}" class="${vis ? '' : 'off'}"><span class="tn">${esc(g.num)}</span><span>${esc(g.name)}</span></a>${secs}</li>`;
    }).join('');
  }
  function renderControls() {
    $('#q').value === state.q || ($('#q').value = state.q);
    $('#f-lang').value = state.lang;
    $('#f-paper').value = state.paper;
    $('#f-year').value = state.year;
    $('#sort').value = state.sort;
    $('#group').checked = !state.flat;
    $('#hide-unmaintained').checked = state.hideU;
    $('#hide-noncommercial').checked = state.hideNC;
  }

  function render() {
    const t = tokens();
    const list = E.filter((e) => matches(e, t));
    const visible = new Set(list.map((e) => e.section));
    const nSec = visible.size;
    shown = list;
    const nBib = new Set(list.filter((e) => e.paper && e.paper.bibtex).map((e) => e.paper.bibtex)).size;
    $('#export').hidden = !nBib;
    $('#export-csv').hidden = !list.length;
    $('#export').textContent = `Download BibTeX (${nBib})`;
    $('#count').innerHTML = list.length === E.length
      ? `<b>${E.length}</b> entries in ${nSec} sections`
      : `<b>${list.length}</b> of ${E.length} entries, in ${nSec} section${nSec === 1 ? '' : 's'}`;
    let html = '';
    if (!list.length) {
      html = '<div class="empty"><p>Nothing matches these filters.</p><button type="button" class="link-btn" data-reset>Clear search and filters</button></div>';
    } else if (state.flat) {
      const sorted = state.sort === 'workflow'
        ? list.slice().sort((a, b) => (t.length ? relevance(b, t) - relevance(a, t) : 0) || byStars(a, b))
        : list.slice().sort(ORDER[state.sort]);
      html = tableHTML(sorted, t, 'tools', true);
    } else {
      const bySec = {};
      list.forEach((e) => (bySec[e.section] = bySec[e.section] || []).push(e));
      groups.forEach((g) => {
        const secs = g.sections.filter((s) => bySec[s.slug]);
        if (!secs.length) return;
        if (g.sections.length > 1) html += `<h2 class="group-title" id="g-${g.slug}"><span class="gn">${esc(g.num)}</span>${esc(g.name)}</h2>`;
        secs.forEach((s) => { html += sectionHTML(s, order(s, bySec[s.slug], t), t); });
      });
    }
    $('#list').innerHTML = html;
    renderFigure();
    renderTOC(visible);
    renderControls();
    spy();
  }
  function update(changes, scroll) {
    Object.assign(state, changes);
    writeHash();
    render();
    if (scroll) {
      const top = $('.body').getBoundingClientRect().top + window.scrollY - 64;
      if (window.scrollY > top) window.scrollTo({ top, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }

  /* ---------- contents highlighting ---------- */
  let spyObserver;
  function spy() {
    if (spyObserver) spyObserver.disconnect();
    if (!('IntersectionObserver' in window)) return;
    spyObserver = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const slug = en.target.dataset.secAnchor;
        document.querySelectorAll('.toc a.on').forEach((a) => a.classList.remove('on'));
        const link = document.querySelector(`.toc a[data-toc="${slug}"]`);
        if (link) link.classList.add('on');
      });
    }, { rootMargin: '-70px 0px -70% 0px' });
    document.querySelectorAll('[data-sec-anchor]').forEach((el) => spyObserver.observe(el));
  }

  /* ---------- events ---------- */
  let typing;
  $('#q').addEventListener('input', (ev) => { clearTimeout(typing); typing = setTimeout(() => update({ q: ev.target.value.trim() }), 90); });
  document.addEventListener('keydown', (ev) => {
    const inField = /^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement.tagName);
    if (ev.key === '/' && !inField) { ev.preventDefault(); $('#q').focus(); }
    if (ev.key === 'Escape' && document.activeElement === $('#q') && state.q) update({ q: '' });
  });
  [['#f-lang', 'lang'], ['#f-paper', 'paper'], ['#f-year', 'year'], ['#sort', 'sort']].forEach(([sel, key]) =>
    $(sel).addEventListener('change', (ev) => update({ [key]: ev.target.value })));
  $('#group').addEventListener('change', (ev) => update({ flat: !ev.target.checked }));
  $('#hide-unmaintained').addEventListener('change', (ev) => update({ hideU: ev.target.checked }));
  $('#hide-noncommercial').addEventListener('change', (ev) => update({ hideNC: ev.target.checked }));
  $('#reset').addEventListener('click', () => update({ ...DEFAULTS }));
  $('#quick').innerHTML = 'Try: ' + QUICK.map((q) => `<button type="button" data-q="${esc(q)}">${esc(q)}</button>`).join(' · ');

  document.addEventListener('click', async (ev) => {
    const el = (sel) => ev.target.closest(sel);
    if (el('[data-step]')) {
      const step = el('[data-step]').dataset.step;
      update({ step: state.step === step ? '' : step, sec: '' }, true);
    } else if (el('[data-sec]')) {
      ev.preventDefault();
      const s = el('[data-sec]').dataset.sec;
      if (secBy[s]) update(state.sec === s ? { sec: '' } : { sec: s, step: groupOfSec[s].slug }, true);
    } else if (el('[data-clear-step]')) {
      update({ step: '', sec: '' });
    } else if (el('[data-q]')) {
      update({ q: el('[data-q]').dataset.q }, true);
    } else if (el('[data-sort]')) {
      const k = el('[data-sort]').dataset.sort;
      update({ sort: state.sort === k ? 'workflow' : k });
    } else if (el('[data-reset]')) {
      update({ ...DEFAULTS });
    } else if (el('[data-toc], [data-toc-group]')) {
      ev.preventDefault();
      const a = el('[data-toc], [data-toc-group]');
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      else if (a.dataset.toc) update({ ...DEFAULTS, sec: a.dataset.toc, step: groupOfSec[a.dataset.toc].slug }, true);
    } else if (el('[data-bib]')) {
      const btn = el('[data-bib]');
      const e = E.find((x) => x.id === btn.dataset.bib);
      const text = btn.dataset.bib === '__list' ? listBibtex() : e && e.paper && e.paper.bibtex;
      if (!text) return;
      try { await navigator.clipboard.writeText(text); }
      catch (err) {
        const ta = Object.assign(document.createElement('textarea'), { value: text });
        document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }
      btn.textContent = 'Copied'; btn.classList.add('done');
      setTimeout(() => { btn.textContent = 'BibTeX'; btn.classList.remove('done'); }, 1600);
    }
  });
  // One .bib file for everything in the current view; duplicate papers are merged and clashing keys get a suffix.
  $('#export').addEventListener('click', () => {
    const seen = new Set(), keys = {};
    const items = [];
    shown.forEach((e) => {
      const bib = e.paper && e.paper.bibtex;
      if (!bib || seen.has(bib)) return;
      seen.add(bib);
      items.push(bib.replace(/^(\s*@\w+\{)([^,]+),/, (m, open, key) => {
        keys[key] = (keys[key] || 0) + 1;
        return keys[key] === 1 ? m : `${open}${key}${String.fromCharCode(96 + keys[key])},`;
      }));
    });
    download(items.join('\n\n') + '\n', 'bib', 'application/x-bibtex');
  });
  // The same view as a spreadsheet; the byte-order mark makes Excel read accented names as UTF-8.
  $('#export-csv').addEventListener('click', () => {
    const cell = (v) => (v == null ? '' : /[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v));
    const head = ['Name', 'Section', 'Description', 'Language', 'Link', 'Repository', 'Part of', 'GitHub stars', 'Last commit',
      'Authors', 'Journal', 'Year', 'DOI', 'Paper link', 'Cited by (Crossref)', 'Preprint', 'Status'];
    const rows = shown.map((e) => {
      const p = e.paper || {}, s = secBy[e.section];
      const status = [e.archived ? 'archived' : e.flags.includes('unmaintained') ? 'no longer maintained' : '',
        e.flags.includes('noncommercial') ? 'non-commercial license' : ''].filter(Boolean).join('; ');
      return [e.name, `${s.num} ${s.name}`, e.desc, e.lang, e.url, e.repo ? `https://github.com/${e.repo}` : '', e.host,
        e.host ? '' : e.stars, e.host ? '' : e.pushed, authors(p), p.short && p.short !== 'Paper' ? p.short : p.venue,
        p.year, p.doi, p.url, e._cites, p.preprint ? 'yes' : '', status].map(cell).join(',');
    });
    download('\ufeff' + [head.join(','), ...rows].join('\r\n') + '\r\n', 'csv', 'text/csv;charset=utf-8');
  });
  function download(text, ext, type) {
    const view = state.sec || state.step || (state.q ? 'search' : 'all');
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = Object.assign(document.createElement('a'), { href: url, download: `awesome-spatial-transcriptomics-${view}.${ext}` });
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }
  window.addEventListener('hashchange', () => { readHash(); render(); });

  /* ---------- theme ---------- */
  const isDark = () => {
    const th = document.documentElement.dataset.theme;
    return th ? th === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  };
  $('#theme').addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('ast-theme', next); } catch (e) { /* storage may be unavailable */ }
  });

  /* ---------- citing the list itself (Zenodo concept DOI, so it always resolves to the latest version) ---------- */
  const listBibtex = () => `@misc{wang_awesome_spatial_transcriptomics,\n  author = {Wang, Rui},\n  title = {Awesome Spatial Transcriptomics},\n`
    + `  publisher = {Zenodo},\n  year = {${D.cite.year}},\n  doi = {${D.cite.doi}},\n  url = {https://doi.org/${D.cite.doi}}\n}`;
  if (D.cite) {
    $('#cite').innerHTML = `Wang R. <i>Awesome Spatial Transcriptomics</i>. Zenodo, ${D.cite.year}. `
      + `<a href="https://doi.org/${esc(D.cite.doi)}" target="_blank" rel="noopener">doi:${esc(D.cite.doi)}</a>`
      + '<button type="button" class="bib" data-bib="__list" title="Copy BibTeX">BibTeX</button>';
    $('#citing').hidden = false;
  }

  /* ---------- boot ---------- */
  const nSections = groups.reduce((n, g) => n + g.sections.length, 0);
  const sep = '<span class="sep">·</span>';
  $('#colophon').innerHTML = [`<b>${E.length}</b> entries in ${nSections} sections`, `last full check ${longDate(D.lastCheck)}`,
    'free to reuse (CC0)'].join(sep);
  if (D.repoStars != null) $('#repo-stars').textContent = compact(D.repoStars);
  $('#built').textContent = `Stars and citations updated ${longDate(D.built)}.`;
  readHash();
  render();
})();
