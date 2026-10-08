# Awesome Spatial Transcriptomics [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated list of tools, foundation models, datasets, tutorials and papers for **spatial transcriptomics** and the **single-cell** methods it builds on, ordered the way an analysis actually goes.

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)
![Last updated](https://img.shields.io/badge/last%20updated-October%202026-blue?style=flat-square)
[![License: CC0-1.0](https://img.shields.io/badge/license-CC0--1.0-lightgrey.svg?style=flat-square)](LICENSE)

Spatial transcriptomics measures gene expression while keeping track of where each cell sits in the tissue. New platforms appear every year, there are hundreds of methods, and foundation models have joined in. This list aims to make the field easy to navigate:

- **Ordered like an analysis.** Sections run from technologies and preprocessing to domains, deconvolution, alignment, cell–cell communication and spatiotemporal modeling.
- **Spatial and single-cell together.** Spatial analysis relies on single-cell tools for annotation, integration and trajectories, so both are covered.
- **Up to date.** Includes work from 2023–2026: tools for subcellular platforms such as Visium HD and Xenium, foundation models, LLM agents and recent benchmarks.
- **Checked.** Every repository and paper link was verified when added, and the star badges update automatically.
- **A place to start.** If you are new to the field, begin with the free books, courses and reviews in [Start Here](#-start-here).

Within each table, tools are sorted by GitHub stars. Stars measure popularity, not quality, so check the [benchmarks](#-benchmarks--evaluation) before picking a method.

## Contents

- [Start Here](#-start-here)
  - [Best-practice guides & books](#best-practice-guides--books)
  - [Courses & hands-on tutorials](#courses--hands-on-tutorials)
  - [Key reviews](#key-reviews)
- [Spatial Technologies](#-spatial-technologies)
- [Spatial Transcriptomics Analysis](#-spatial-transcriptomics-analysis)
  - [Spatial frameworks](#spatial-frameworks)
  - [Cell segmentation & preprocessing](#cell-segmentation--preprocessing)
  - [Spatially variable genes](#spatially-variable-genes)
  - [Spatial domains & clustering](#spatial-domains--clustering)
  - [Deconvolution & single-cell mapping](#deconvolution--single-cell-mapping)
  - [Alignment, integration & 3D reconstruction](#alignment-integration--3d-reconstruction)
  - [Cell–cell communication & niches](#cellcell-communication--niches)
  - [Super-resolution, imputation & histology-to-expression](#super-resolution-imputation--histology-to-expression)
  - [Spatiotemporal & generative modeling](#spatiotemporal--generative-modeling)
  - [Visualization & interactive exploration](#visualization--interactive-exploration)
- [Single-Cell Foundations](#-single-cell-foundations)
  - [Single-cell frameworks & data structures](#single-cell-frameworks--data-structures)
  - [Raw data processing](#raw-data-processing)
  - [Quality control](#quality-control)
  - [Normalization & feature selection](#normalization--feature-selection)
  - [Integration, batch correction & reference mapping](#integration-batch-correction--reference-mapping)
  - [Dimensionality reduction, clustering & visualization](#dimensionality-reduction-clustering--visualization)
  - [Cell type annotation](#cell-type-annotation)
  - [Differential expression & abundance](#differential-expression--abundance)
  - [Trajectory, pseudotime & RNA velocity](#trajectory-pseudotime--rna-velocity)
  - [Gene regulatory networks](#gene-regulatory-networks)
  - [Cell–cell communication](#cellcell-communication)
  - [Multi-omics & multimodal integration](#multi-omics--multimodal-integration)
  - [Perturbation analysis & modeling](#perturbation-analysis--modeling)
  - [Copy number, clonality & immune repertoire](#copy-number-clonality--immune-repertoire)
- [AI & Foundation Models](#-ai--foundation-models)
  - [Single-cell foundation models](#single-cell-foundation-models)
  - [Spatial & multimodal foundation models](#spatial--multimodal-foundation-models)
  - [LLMs & agents](#llms--agents)
- [Benchmarks & Evaluation](#-benchmarks--evaluation)
- [Data](#-data)
  - [Atlases, data portals & databases](#atlases-data-portals--databases)
  - [Simulation](#simulation)
- [Related lists](#related-lists)
- [Contributing](#contributing)

## 🧭 Start Here

### Best-practice guides & books

Free books that walk through a complete analysis.

- [Single-cell Best Practices](https://www.sc-best-practices.org) – Open Jupyter Book on scverse-based analysis of single-cell and spatial omics, from preprocessing to multimodal integration. [Nature Reviews Genetics 2023](https://doi.org/10.1038/s41576-023-00586-w) ![](https://img.shields.io/github/stars/theislab/single-cell-best-practices?style=flat-square&logo=github&label=)
- [Orchestrating Single-Cell Analysis with Bioconductor (OSCA)](https://bioconductor.org/books/release/OSCA/) – Bioconductor online book covering scRNA-seq analysis in R, from data import and QC to multi-sample workflows. [Nature Methods 2020](https://doi.org/10.1038/s41592-019-0654-x) ![](https://img.shields.io/github/stars/OSCA-source/OSCA?style=flat-square&logo=github&label=)
- [Orchestrating Spatial Transcriptomics Analysis with Bioconductor (OSTA)](https://bioconductor.org/books/release/OSTA/) – Bioconductor online book with tested R workflows for sequencing- and imaging-based spatial transcriptomics data. [bioRxiv 2025](https://doi.org/10.1101/2025.11.20.688607) *(preprint)* ![](https://img.shields.io/github/stars/lmweber/OSTA?style=flat-square&logo=github&label=)
- [A Practical Guide to Spatial Transcriptomics: Lessons from over 1000 Samples](https://doi.org/10.20944/preprints202504.1450.v1) – Practical guide for Visium, Visium HD and Xenium projects: experimental design, tissue handling, sequencing and analysis. [Trends in Biotechnology 2026](https://doi.org/10.1016/j.tibtech.2025.08.020)

### Courses & hands-on tutorials

Notebooks and vignettes you can run end to end.

- [scverse tutorials (Scanpy and ecosystem)](https://scverse.org/learn/) – Curated hub of maintained Python tutorials for Scanpy, AnnData, muon, scvi-tools, Squidpy, SpatialData and other scverse packages. [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-023-01733-8) ![](https://img.shields.io/github/stars/scverse/scverse-tutorials?style=flat-square&logo=github&label=)
- [scvi-tools tutorials](https://docs.scvi-tools.org/en/stable/tutorials/index.html) – Notebooks for scvi-tools deep generative models: integration, reference mapping, multimodal analysis and spatial deconvolution. [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01206-w) ![](https://img.shields.io/github/stars/scverse/scvi-tutorials?style=flat-square&logo=github&label=)
- [Squidpy tutorials](https://squidpy.readthedocs.io/en/stable/notebooks/tutorials/index.html) – Spatial analysis tutorials (graphs, neighborhood enrichment, spatial statistics, image features) for Visium, Xenium, MERFISH, Slide-seq and more. [Nature Methods 2022](https://doi.org/10.1038/s41592-021-01358-2) ![](https://img.shields.io/github/stars/scverse/squidpy-tutorials?style=flat-square&logo=github&label=)
- [SpatialData tutorials](https://spatialdata.scverse.org/en/stable/tutorials/notebooks/notebooks.html) – Notebooks for loading, aligning, querying and visualizing multi-technology spatial omics data with the SpatialData framework. [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02212-x) ![](https://img.shields.io/github/stars/scverse/spatialdata-tutorials?style=flat-square&logo=github&label=)
- [Seurat vignettes (incl. spatial)](https://satijalab.org/seurat/articles/get_started_v5_new) – Official R vignettes from guided PBMC clustering to integration, multimodal analysis and sequencing- and imaging-based spatial data. [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01767-y) ![](https://img.shields.io/github/stars/satijalab/seurat?style=flat-square&logo=github&label=Seurat)
- [HBC Introduction to single-cell RNA-seq](https://hbctraining.github.io/Intro-to-scRNAseq/) – Harvard Chan Bioinformatics Core workshop: design, QC, normalization, integration, clustering and marker genes with Seurat or Scanpy. ![](https://img.shields.io/github/stars/hbctraining/Intro-to-scRNAseq?style=flat-square&logo=github&label=)
- [HBC Introduction to Spatial Transcriptomics](https://hbctraining.github.io/Intro-to-spatial-transcriptomics/) – Harvard Chan workshop on Visium HD in Seurat: QC, clustering, RCTD deconvolution, BANKSY domains, Moran's I, CellChat. ![](https://img.shields.io/github/stars/hbctraining/Intro-to-spatial-transcriptomics?style=flat-square&logo=github&label=)
- [Analysis of single cell RNA-seq data (Sanger / Hemberg lab course)](https://www.singlecellcourse.org/) – Classic Cambridge/Sanger course book: scRNA-seq technologies, raw data processing, QC, normalization, clustering and integration in R. ![](https://img.shields.io/github/stars/cellgeni/scRNA.seq.course?style=flat-square&logo=github&label=)
- [Galaxy Training Network: Single Cell](https://training.galaxyproject.org/training-material/topics/single-cell/) – Galaxy Training Network tutorials and learning pathways for single-cell analysis, GUI or notebook based, including spatial transcriptomics. [GigaScience 2020](https://doi.org/10.1093/gigascience/giaa102) ![](https://img.shields.io/github/stars/galaxyproject/training-material?style=flat-square&logo=github&label=)
- [Voyager tutorials](https://pachterlab.github.io/voyager/) – Vignettes applying geospatial statistics (Moran's I, local indicators, Lee's L) to spatial omics via SpatialFeatureExperiment. [bioRxiv 2023](https://doi.org/10.1101/2023.07.20.549945) *(preprint)* ![](https://img.shields.io/github/stars/pachterlab/voyager?style=flat-square&logo=github&label=)
- [Giotto Suite tutorials](https://giottosuite.com/) – Technology-agnostic spatial omics tutorials in R: Visium/HD, Xenium, CosMx, MERFISH, CODEX; domains, deconvolution, multi-sample integration. [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02817-w) ![](https://img.shields.io/github/stars/giotto-suite/Giotto?style=flat-square&logo=github&label=)
- [10x Genomics Analysis Guides](https://www.10xgenomics.com/analysis-guides) – Vendor tutorials and method overviews for Chromium, Visium/Visium HD and Xenium data, with Colab-ready notebooks. ![](https://img.shields.io/github/stars/10XGenomics/analysis_guides?style=flat-square&logo=github&label=)
- [NBIS single-cell RNA-seq workshop](https://nbisweden.github.io/workshop-scRNAseq/) – Regularly updated NBIS course with parallel Seurat, Bioconductor and Scanpy labs from QC to cell typing and trajectories. ![](https://img.shields.io/github/stars/NBISweden/workshop-scRNAseq?style=flat-square&logo=github&label=)
- [SIB Single Cell Transcriptomics course](https://sib-swiss.github.io/single-cell-training/) – SIB three-day course material in R (Seurat, Bioconductor): QC, integration, clustering, annotation, DE, enrichment and trajectories. ![](https://img.shields.io/github/stars/sib-swiss/single-cell-training?style=flat-square&logo=github&label=)

### Key reviews

Reviews worth reading before choosing methods.

- [Spatial architecture of development and disease (Lázár & Lundeberg)](https://doi.org/10.1038/s41576-025-00892-5) – Recent review of how spatial omics reveals tissue organization in development and disease. *Nature Reviews Genetics 2026*
- [Towards multimodal foundation models in molecular cell biology (Cui et al.)](https://doi.org/10.1038/s41586-025-08710-y) – Perspective on foundation models pretrained across genomics, transcriptomics, epigenomics, proteomics, metabolomics and spatial profiling. *Nature 2025*
- [Transformers in single-cell omics: a review and new perspectives (Szałata et al.)](https://doi.org/10.1038/s41592-024-02353-z) – Explains transformer architectures and reviews their single-cell applications, including foundation models, with limitations and future directions. *Nature Methods 2024*
- [How to build the virtual cell with artificial intelligence: Priorities and opportunities (Bunne et al.)](https://doi.org/10.1016/j.cell.2024.11.015) – Perspective on AI virtual cells: multiscale, multimodal neural network models that represent and simulate molecules, cells and tissues. *Cell 2024*
- [Unlocking the power of spatial omics with AI (Coleman, Schroeder & Li)](https://doi.org/10.1038/s41592-024-02363-x) – Short Comment on how AI methods can help analyze and integrate complex spatial omics datasets. *Nature Methods 2024*
- [Best practices for single-cell analysis across modalities (Heumos et al.)](https://doi.org/10.1038/s41576-023-00586-w) – Benchmark-based best-practice workflows for single-cell RNA, chromatin, surface protein, immune repertoire and spatial data. *Nature Reviews Genetics 2023*
- [Methods and applications for single-cell and spatial multi-omics (Vandereyken et al.)](https://doi.org/10.1038/s41576-023-00580-2) – Reviews single-cell and spatial multi-omics technologies, the computational integration strategies they need, and their applications. *Nature Reviews Genetics 2023*
- [The expanding vistas of spatial transcriptomics (Tian, Chen & Macosko)](https://doi.org/10.1038/s41587-022-01448-2) – Reviews how spatial transcriptomics technologies evolved in sensitivity, multiplexing and throughput, and what they enable. *Nature Biotechnology 2023*
- [The dawn of spatial omics (Bressan, Battistoni & Hannon)](https://doi.org/10.1126/science.abq4964) – Systematic catalog of spatial omics technology families, their principles and limitations, and the field's main challenges. *Science 2023*
- [Museum of spatial transcriptomics (Moses & Pachter)](https://doi.org/10.1038/s41592-022-01409-2) – Curated history of spatial transcriptomics since 1987, with trend analysis of technologies, tissues and computational methods. *Nature Methods 2022*
- [Spatial components of molecular tissue biology (Palla et al.)](https://doi.org/10.1038/s41587-021-01182-1) – Groups spatial transcriptomics and proteomics analysis problems and algorithms by tissue length scale, outlining open computational challenges. *Nature Biotechnology 2022*
- [Computational principles and challenges in single-cell data integration (Argelaguet et al.)](https://doi.org/10.1038/s41587-021-00895-7) – Defines horizontal, vertical and diagonal integration of single-cell data and reviews methods, assumptions and open challenges. *Nature Biotechnology 2021*
- [Deciphering cell–cell interactions and communication from gene expression (Armingol et al.)](https://doi.org/10.1038/s41576-020-00292-x) – Reviews how cell–cell communication is inferred from transcriptomic data, mainly ligand–receptor approaches, and the tools used. *Nature Reviews Genetics 2021*
- [Method of the Year: spatially resolved transcriptomics (Marx)](https://doi.org/10.1038/s41592-020-01033-y) – Nature Methods feature naming spatially resolved transcriptomics Method of the Year 2020, surveying its technologies and prospects. *Nature Methods 2021*
- [Exploring tissue architecture using spatial transcriptomics (Rao et al.)](https://doi.org/10.1038/s41586-021-03634-9) – Reviews sequencing- and imaging-based spatial transcriptomics technologies and the range of analyses applied to their data. *Nature 2021*
- [Eleven grand challenges in single-cell data science (Lähnemann et al.)](https://doi.org/10.1186/s13059-020-1926-6) – Community overview of major open computational challenges in single-cell data science and the research needed to address them. *Genome Biology 2020*
- [Current best practices in single-cell RNA-seq analysis: a tutorial (Luecken & Theis)](https://doi.org/10.15252/msb.20188746) – Step-by-step tutorial and recommendations for standard scRNA-seq analysis, from QC and normalization to clustering and trajectories. *Molecular Systems Biology 2019*

**[⬆ back to top](#contents)**

## 🔬 Spatial Technologies

### Spatial technologies

Landmark platforms and their method papers, grouped by how they measure and sorted by year.

**Sequencing-based** (spatially barcoded capture, then sequencing)

| Technology | Description | Paper |
| --- | --- | --- |
| [Spatial Transcriptomics (ST)](https://doi.org/10.1126/science.aaf2403) | Barcoded oligo-dT spot arrays capture mRNA from tissue sections for genome-wide spatial profiling; foundational array method (100 µm spots). | [Science 2016](https://doi.org/10.1126/science.aaf2403) |
| [Slide-seq / Slide-seqV2](https://doi.org/10.1126/science.aaw1219) | Tissue placed on a monolayer of DNA-barcoded 10 µm beads whose positions are decoded by in situ sequencing. | [Science 2019](https://doi.org/10.1126/science.aaw1219) |
| [HDST](https://doi.org/10.1038/s41592-019-0548-y) | High-definition spatial transcriptomics: RNA captured on a dense, spatially barcoded bead array at 2 µm resolution. | [Nature Methods 2019](https://doi.org/10.1038/s41592-019-0548-y) |
| [DBiT-seq](https://doi.org/10.1016/j.cell.2020.10.026) | Microfluidic deterministic barcoding: crossed channel sets create a 2D pixel grid for co-profiling mRNA and proteins in tissue. | [Cell 2020](https://doi.org/10.1016/j.cell.2020.10.026) |
| [Seq-Scope](https://doi.org/10.1016/j.cell.2021.05.010) | Repurposes Illumina flow-cell clusters as barcoded capture arrays; pixels ~0.5–0.8 µm apart for submicrometer spatial transcriptomics. | [Cell 2021](https://doi.org/10.1016/j.cell.2021.05.010) |
| [Stereo-seq](https://doi.org/10.1016/j.cell.2022.04.003) | DNA nanoball-patterned arrays give nanoscale capture spots over centimeter-scale areas; debuted with a mouse organogenesis atlas (MOSTA). | [Cell 2022](https://doi.org/10.1016/j.cell.2022.04.003) |
| [Slide-tags](https://doi.org/10.1038/s41586-023-06837-4) | Spatial barcodes from a bead array tag nuclei in intact tissue, enabling spatially resolved single-nucleus RNA, ATAC and multimodal profiling. | [Nature 2024](https://doi.org/10.1038/s41586-023-06837-4) |
| [Open-ST](https://doi.org/10.1016/j.cell.2024.05.055) | Open-source, low-cost sequencing-based method on patterned Illumina flow cells with subcellular resolution and 3D virtual tissue reconstruction. | [Cell 2024](https://doi.org/10.1016/j.cell.2024.05.055) |
| [Visium / Visium HD (10x Genomics)](https://www.10xgenomics.com/platforms/visium) | 10x Genomics capture arrays: Visium (55 µm spots) and Visium HD (gapless 2 µm barcoded squares, usually binned). | [Nature Genetics 2025](https://doi.org/10.1038/s41588-025-02193-3) |

**Imaging-based** (in situ hybridization or sequencing, read by microscopy)

| Technology | Description | Paper |
| --- | --- | --- |
| [MERFISH](https://doi.org/10.1126/science.aaa6090) | Multiplexed error-robust FISH: combinatorial binary barcodes read over sequential imaging rounds profile hundreds to thousands of RNAs. | [Science 2015](https://doi.org/10.1126/science.aaa6090) |
| [STARmap / STARmap PLUS](https://doi.org/10.1126/science.aat5691) | In situ sequencing of hydrogel-embedded intact tissue in 3D; STARmap PLUS adds protein co-detection at subcellular resolution. | [Science 2018](https://doi.org/10.1126/science.aat5691) |
| [osmFISH](https://doi.org/10.1038/s41592-018-0175-z) | Cyclic, non-barcoded single-molecule FISH (ouroboros smFISH) mapping cell-type markers across mouse somatosensory cortex. | [Nature Methods 2018](https://doi.org/10.1038/s41592-018-0175-z) |
| [seqFISH+](https://doi.org/10.1038/s41586-019-1049-y) | Sequential FISH with 60 pseudocolors images ~10,000 genes at super-resolution in single cells within tissue. | [Nature 2019](https://doi.org/10.1038/s41586-019-1049-y) |
| [CosMx SMI](https://doi.org/10.1038/s41587-022-01483-z) | Spatial molecular imaging: cyclic hybridization of fluorescent barcodes measured 980 RNAs and 108 proteins in FFPE tissue. | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-022-01483-z) |
| [Xenium (10x Genomics)](https://doi.org/10.1038/s41467-023-43458-x) | 10x in situ platform: padlock probes, rolling-circle amplification and cyclic imaging detect targeted gene panels at subcellular resolution. | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43458-x) |
| [EEL FISH](https://doi.org/10.1038/s41587-022-01455-3) | Electrophoretically transfers RNA from tissue onto a capture surface, then decodes it by multiplexed smFISH for fast imaging. | [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-022-01455-3) |

**[⬆ back to top](#contents)**

## 📍 Spatial Transcriptomics Analysis

### Spatial frameworks

General-purpose toolkits and data structures for spatial omics.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Seurat (spatial vignettes)](https://satijalab.org/seurat/articles/spatial_vignette) | Seurat workflows for sequencing- and imaging-based spatial data (Visium, Visium HD, Slide-seq, Xenium, CosMx, MERFISH). | R | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01767-y) | ![](https://img.shields.io/github/stars/satijalab/seurat?style=flat-square&logo=github&label=Seurat) |
| [Squidpy](https://github.com/scverse/squidpy) | scverse toolkit for spatial omics: spatial graphs, neighborhood enrichment, co-occurrence, ligand–receptor analysis and image features. | Python | [Nature Methods 2022](https://doi.org/10.1038/s41592-021-01358-2) | ![](https://img.shields.io/github/stars/scverse/squidpy?style=flat-square&logo=github&label=) |
| [SpatialData](https://github.com/scverse/spatialdata) | Universal data framework (Zarr/OME-NGFF) unifying images, labels, points, shapes and tables across spatial omics technologies. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02212-x) | ![](https://img.shields.io/github/stars/scverse/spatialdata?style=flat-square&logo=github&label=) |
| [Giotto Suite](https://github.com/giotto-suite/Giotto) | Modular R ecosystem for technology-agnostic, multiscale spatial multi-omics analysis, integration and visualization. | R | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02817-w) | ![](https://img.shields.io/github/stars/giotto-suite/Giotto?style=flat-square&logo=github&label=) |
| [stLearn](https://github.com/BiomedicalMachineLearning/stLearn) | Integrates histology images, spatial coordinates and expression for normalization, clustering, spatial trajectories and cell–cell interactions. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43120-6) | ![](https://img.shields.io/github/stars/BiomedicalMachineLearning/stLearn?style=flat-square&logo=github&label=) |
| [SPATA2](https://github.com/theMILOlab/SPATA2) | R framework for spatial transcriptomics emphasizing histology-guided analyses such as spatial gradient screening along tissue axes. | R | [Nature Communications 2024](https://doi.org/10.1038/s41467-024-50904-x) | ![](https://img.shields.io/github/stars/theMILOlab/SPATA2?style=flat-square&logo=github&label=) |
| [Voyager / SpatialFeatureExperiment](https://github.com/pachterlab/voyager) | Brings geospatial exploratory statistics (e.g., Moran's I, local indicators) to spatial omics on SpatialFeatureExperiment geometries. | R | [bioRxiv 2023](https://doi.org/10.1101/2023.07.20.549945) *(preprint)* | ![](https://img.shields.io/github/stars/pachterlab/voyager?style=flat-square&logo=github&label=) |
| [semla](https://github.com/spatial-research/semla) | Seurat-compatible R toolkit for Visium/ST analysis, visualization, image alignment and spatial utilities; successor of STUtility. | R | [Bioinformatics 2023](https://doi.org/10.1093/bioinformatics/btad626) | ![](https://img.shields.io/github/stars/spatial-research/semla?style=flat-square&logo=github&label=) |
| [SpatialExperiment](https://github.com/drighelli/SpatialExperiment) | Bioconductor S4 class extending SingleCellExperiment with spatial coordinates and images; core data structure for R spatial tools. | R | [Bioinformatics 2022](https://doi.org/10.1093/bioinformatics/btac299) | ![](https://img.shields.io/github/stars/drighelli/SpatialExperiment?style=flat-square&logo=github&label=) |
| [MuSpAn](https://www.muspan.co.uk) | Toolbox for multiscale spatial analysis: spatial statistics, networks, topology and region-based methods for imaging and spatial omics. Academic-use licence; access on request. | Python | [Nature Communications 2026](https://doi.org/10.1038/s41467-026-75649-7) | ![](https://img.shields.io/github/stars/MuSpAn-Multiscale-Spatial-Analysis/MuSpAn-Public?style=flat-square&logo=github&label=) |

### Cell segmentation & preprocessing

From images and transcripts or bins to cells.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Cellpose](https://github.com/MouseLand/cellpose) | Generalist deep-learning cell and nucleus segmentation predicting spatial flow fields; supports human-in-the-loop training and 3D. | Python | [Nature Methods 2021](https://doi.org/10.1038/s41592-020-01018-x) | ![](https://img.shields.io/github/stars/MouseLand/cellpose?style=flat-square&logo=github&label=) |
| [StarDist](https://github.com/stardist/stardist) | Deep-learning object detection with star-convex polygons; accurate nucleus segmentation in crowded 2D and 3D images. | Python | [MICCAI 2018 (LNCS)](https://doi.org/10.1007/978-3-030-00934-2_30) | ![](https://img.shields.io/github/stars/stardist/stardist?style=flat-square&logo=github&label=) |
| [Mesmer (DeepCell)](https://github.com/vanvalenlab/deepcell-tf) | Deep-learning whole-cell and nuclear segmentation for multiplexed tissue images, trained on the TissueNet dataset. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01094-0) | ![](https://img.shields.io/github/stars/vanvalenlab/deepcell-tf?style=flat-square&logo=github&label=) |
| [Sopa](https://github.com/prism-oncology/sopa) | Technology-invariant, scalable SpatialData-based pipeline for segmentation, aggregation and annotation across imaging-based spatial omics and Visium HD. | Python | [Nature Communications 2024](https://doi.org/10.1038/s41467-024-48981-z) | ![](https://img.shields.io/github/stars/prism-oncology/sopa?style=flat-square&logo=github&label=) |
| [Baysor](https://github.com/kharchenkolab/Baysor) | Bayesian segmentation of imaging-based ST from molecule positions and gene composition, optionally guided by a prior segmentation. | C++ | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01044-w) | ![](https://img.shields.io/github/stars/kharchenkolab/Baysor?style=flat-square&logo=github&label=) |
| [Proseg](https://github.com/dcjones/proseg) | Probabilistic segmentation that simulates cell shapes (cellular Potts model) to best explain transcript positions; fast, unsupervised. | Rust | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02697-0) | ![](https://img.shields.io/github/stars/dcjones/proseg?style=flat-square&logo=github&label=) |
| [bin2cell](https://github.com/Teichlab/bin2cell) | Reconstructs cells from Visium HD 2 µm bins using StarDist nuclei from H&E and expression images plus label expansion. | Python | [Bioinformatics 2024](https://doi.org/10.1093/bioinformatics/btae546) | ![](https://img.shields.io/github/stars/Teichlab/bin2cell?style=flat-square&logo=github&label=) |
| [ENACT](https://github.com/Sanofi-Public/enact-pipeline) | End-to-end Visium HD pipeline: cell segmentation, bin-to-cell assignment and cell-type annotation across whole tissue sections. | Python | [Bioinformatics 2025](https://doi.org/10.1093/bioinformatics/btaf094) | ![](https://img.shields.io/github/stars/Sanofi-Public/enact-pipeline?style=flat-square&logo=github&label=) |
| [Segger](https://github.com/dpeerlab/segger) | Graph neural network that assigns transcripts to cells via link prediction on a heterogeneous transcript–cell graph. | Python | [bioRxiv 2025](https://doi.org/10.1101/2025.03.14.643160) *(preprint)* | ![](https://img.shields.io/github/stars/dpeerlab/segger?style=flat-square&logo=github&label=) |
| [Space Ranger](https://www.10xgenomics.com/support/software/space-ranger) | Official 10x pipelines for Visium/Visium HD: alignment, image registration, tissue detection, binning; v4+ adds nucleus-based cell segmentation. | Rust |  | ![](https://img.shields.io/github/stars/10XGenomics/spaceranger?style=flat-square&logo=github&label=) |

### Spatially variable genes

Genes whose expression follows tissue structure.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [SpatialDE](https://github.com/Teichlab/SpatialDE) | Gaussian-process regression tests each gene for spatial variance; automatic expression histology groups genes into spatial patterns. | Python | [Nature Methods 2018](https://doi.org/10.1038/nmeth.4636) | ![](https://img.shields.io/github/stars/Teichlab/SpatialDE?style=flat-square&logo=github&label=) |
| [Hotspot](https://github.com/YosefLab/Hotspot) | Local autocorrelation on a cell–cell neighbor graph (spatial or transcriptional) to find informative genes and gene modules. | Python | [Cell Systems 2021](https://doi.org/10.1016/j.cels.2021.04.005) | ![](https://img.shields.io/github/stars/YosefLab/Hotspot?style=flat-square&logo=github&label=) |
| [MERINGUE](https://github.com/JEFworks-Lab/MERINGUE) | Spatial auto- and cross-correlation on Voronoi-based neighbor graphs; robust to non-uniform cell densities. | R | [Genome Research 2021](https://doi.org/10.1101/gr.271288.120) | ![](https://img.shields.io/github/stars/JEFworks-Lab/MERINGUE?style=flat-square&logo=github&label=) |
| [SPARK / SPARK-X](https://github.com/xzhoulab/SPARK) | SPARK: spatial generalized linear mixed model on raw counts; SPARK-X: fast non-parametric covariance test for large datasets. | R | [Nature Methods 2020](https://doi.org/10.1038/s41592-019-0701-7) | ![](https://img.shields.io/github/stars/xzhoulab/SPARK?style=flat-square&logo=github&label=) |
| [nnSVG](https://github.com/lmweber/nnSVG) | Scalable SVG detection using nearest-neighbor Gaussian processes with gene-specific length scales; linear in number of spots. | R | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-39748-z) | ![](https://img.shields.io/github/stars/lmweber/nnSVG?style=flat-square&logo=github&label=) |
| [Celina](https://github.com/pekjoonwu/CELINA) | Spatially varying coefficient model detecting cell type-specific spatially variable genes in spot- or single-cell-resolution data. | R | [Nature Communications 2025](https://doi.org/10.1038/s41467-025-56280-4) | ![](https://img.shields.io/github/stars/pekjoonwu/CELINA?style=flat-square&logo=github&label=) |
| [sepal](https://github.com/almaan/sepal) | Simulates diffusion of each gene's expression; genes slow to reach homogeneity are ranked as spatially structured. | Python | [Bioinformatics 2021](https://doi.org/10.1093/bioinformatics/btab164) | ![](https://img.shields.io/github/stars/almaan/sepal?style=flat-square&logo=github&label=) |
| [SpaGFT](https://github.com/OSU-BMBL/SpaGFT) | Graph Fourier transform of expression on spatial graphs identifies SVGs and tissue modules; enhances downstream ML tasks. | Python | [Nature Communications 2024](https://doi.org/10.1038/s41467-024-51590-5) | ![](https://img.shields.io/github/stars/OSU-BMBL/SpaGFT?style=flat-square&logo=github&label=) |

### Spatial domains & clustering

Tissue regions from expression plus spatial context.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [SpaGCN](https://github.com/jianhuupenn/SpaGCN) | Graph convolutional network combining expression, location and histology to find spatial domains and domain-specific SVGs. | Python | [Nature Methods 2021](https://doi.org/10.1038/s41592-021-01255-8) | ![](https://img.shields.io/github/stars/jianhuupenn/SpaGCN?style=flat-square&logo=github&label=) |
| [CellCharter](https://github.com/CSOgroup/cellcharter) | Aggregates features from multi-hop spatial neighbors and clusters with Gaussian mixtures to find niches across samples. | Python | [Nature Genetics 2024](https://doi.org/10.1038/s41588-023-01588-4) | ![](https://img.shields.io/github/stars/CSOgroup/cellcharter?style=flat-square&logo=github&label=) |
| [BayesSpace](https://github.com/edward130603/BayesSpace) | Bayesian clustering with a Markov random field prior for spatial domains; enhances Visium/ST to sub-spot resolution. | R | [Nature Biotechnology 2021](https://doi.org/10.1038/s41587-021-00935-2) | ![](https://img.shields.io/github/stars/edward130603/BayesSpace?style=flat-square&logo=github&label=) |
| [BANKSY](https://github.com/prabhakarlab/Banksy) | Augments each cell's expression with neighborhood mean and gradient features, unifying cell typing and domain segmentation. | R | [Nature Genetics 2024](https://doi.org/10.1038/s41588-024-01664-3) | ![](https://img.shields.io/github/stars/prabhakarlab/Banksy?style=flat-square&logo=github&label=) |
| [GraphST](https://github.com/JinmiaoChenLab/GraphST) | Graph self-supervised contrastive learning for spatial clustering, multi-section integration and scRNA-seq-to-spatial cell-type deconvolution. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-36796-3) | ![](https://img.shields.io/github/stars/JinmiaoChenLab/GraphST?style=flat-square&logo=github&label=) |
| [DeepST](https://github.com/JiangBioLab/DeepST) | Combines histology morphology features, expression and location with graph and denoising autoencoders to identify spatial domains. | Python | [Nucleic Acids Research 2022](https://doi.org/10.1093/nar/gkac901) | ![](https://img.shields.io/github/stars/JiangBioLab/DeepST?style=flat-square&logo=github&label=) |
| [SEDR](https://github.com/JinmiaoChenLab/SEDR) | Masked graph autoencoder plus deep autoencoder learns spatial embeddings for clustering, denoising and batch integration. | Python | [Genome Medicine 2024](https://doi.org/10.1186/s13073-024-01283-x) | ![](https://img.shields.io/github/stars/JinmiaoChenLab/SEDR?style=flat-square&logo=github&label=) |
| [STAGATE](https://github.com/RucDongLab/STAGATE) | Graph attention autoencoder learning spatially aware embeddings for domain identification and denoising, including 3D tissue. | Python | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-29439-6) | ![](https://img.shields.io/github/stars/RucDongLab/STAGATE?style=flat-square&logo=github&label=) |
| [spaVAE](https://github.com/ttgump/spaVAE) | Gaussian-process VAE capturing spatial correlation for clustering, denoising, imputation and resolution enhancement; ATAC/multi-omics variants. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02257-y) | ![](https://img.shields.io/github/stars/ttgump/spaVAE?style=flat-square&logo=github&label=) |
| [BASS](https://github.com/zhengli09/BASS) | Bayesian hierarchical model jointly performing cell-type clustering and spatial domain detection across multiple tissue sections. | R | [Genome Biology 2022](https://doi.org/10.1186/s13059-022-02734-7) | ![](https://img.shields.io/github/stars/zhengli09/BASS?style=flat-square&logo=github&label=) |
| [SpaceFlow](https://github.com/hongleir/SpaceFlow) | Spatially regularized deep graph network learning embeddings for domains and pseudo-spatiotemporal maps of tissues. | Python | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-31739-w) | ![](https://img.shields.io/github/stars/hongleir/SpaceFlow?style=flat-square&logo=github&label=) |

### Deconvolution & single-cell mapping

Cell-type composition of spots and mapping of single cells onto tissue.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [DestVI (scvi-tools)](https://docs.scvi-tools.org/en/stable/user_guide/models/destvi.html) | Conditional deep generative model inferring cell-type proportions and continuous within-type state variation per spot. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-022-01272-8) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [RCTD (spacexr)](https://github.com/dmcable/spacexr) | Supervised Poisson model with platform-effect normalization decomposing spots into cell types; spacexr also includes C-SIDE DE testing. | R | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-00830-w) | ![](https://img.shields.io/github/stars/dmcable/spacexr?style=flat-square&logo=github&label=) |
| [cell2location](https://github.com/BayraktarLab/cell2location) | Hierarchical Bayesian model mapping fine-grained cell types from scRNA-seq references to spatial data as absolute abundances. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01139-4) | ![](https://img.shields.io/github/stars/BayraktarLab/cell2location?style=flat-square&logo=github&label=) |
| [Tangram](https://github.com/broadinstitute/Tangram) | Deep-learning alignment of scRNA-seq profiles onto spatial data to map cells, project genes and deconvolve spots. | Python | [Nature Methods 2021](https://doi.org/10.1038/s41592-021-01264-7) | ![](https://img.shields.io/github/stars/broadinstitute/Tangram?style=flat-square&logo=github&label=) |
| [SPOTlight](https://github.com/MarcElosua/SPOTlight) | Seeded NMF regression using cell-type marker genes from scRNA-seq to deconvolve spatial spots. | R | [Nucleic Acids Research 2021](https://doi.org/10.1093/nar/gkab043) | ![](https://img.shields.io/github/stars/MarcElosua/SPOTlight?style=flat-square&logo=github&label=) |
| [STdeconvolve](https://github.com/JEFworks-Lab/STdeconvolve) | Reference-free deconvolution using latent Dirichlet allocation topic modeling of multicellular spatial pixels. | R | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-30033-z) | ![](https://img.shields.io/github/stars/JEFworks-Lab/STdeconvolve?style=flat-square&logo=github&label=) |
| [CytoSPACE](https://github.com/digitalcytometry/cytospace) | Assigns individual scRNA-seq cells to spots by convex optimization, respecting estimated cell numbers per spot. | Python | [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-023-01697-9) | ![](https://img.shields.io/github/stars/digitalcytometry/cytospace?style=flat-square&logo=github&label=) |
| [CARD](https://github.com/YMa-lab/CARD) | Deconvolution with a conditional autoregressive prior on spatial composition; builds refined-resolution maps; reference-free mode available. | R | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-022-01273-7) | ![](https://img.shields.io/github/stars/YMa-lab/CARD?style=flat-square&logo=github&label=) |
| [CellTrek](https://github.com/navinlabcode/CellTrek) | Maps single cells to tissue coordinates via scRNA-seq–spatial co-embedding and random-forest similarity learning. | R | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-022-01233-1) | ![](https://img.shields.io/github/stars/navinlabcode/CellTrek?style=flat-square&logo=github&label=) |
| [stereoscope](https://github.com/almaan/stereoscope) | Negative-binomial probabilistic model inferring per-spot cell-type proportions from a single-cell reference. | Python | [Communications Biology 2020](https://doi.org/10.1038/s42003-020-01247-y) | ![](https://img.shields.io/github/stars/almaan/stereoscope?style=flat-square&logo=github&label=) |
| [Redeconve](https://github.com/ZxZhou4150/Redeconve) | Regularized non-negative regression using single cells as reference, deconvolving spots into thousands of fine cell states. | R | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43600-9) | ![](https://img.shields.io/github/stars/ZxZhou4150/Redeconve?style=flat-square&logo=github&label=) |

### Alignment, integration & 3D reconstruction

Registering slices, integrating samples and building 3D tissue.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Spateo](https://github.com/aristoteleo/spateo-release) | 3D spatiotemporal framework: slice alignment, whole-embryo 3D reconstruction, morphometric vector fields, spatial domains and cell–cell interactions. | Python | [Cell 2024](https://doi.org/10.1016/j.cell.2024.10.011) | ![](https://img.shields.io/github/stars/aristoteleo/spateo-release?style=flat-square&logo=github&label=) |
| [STalign](https://github.com/JEFworks-Lab/STalign) | Diffeomorphic metric mapping (LDDMM) aligns single-cell-resolution ST slices to each other or to 3D reference atlases. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43915-7) | ![](https://img.shields.io/github/stars/JEFworks-Lab/STalign?style=flat-square&logo=github&label=) |
| [PASTE](https://github.com/raphael-group/paste) | Fused Gromov–Wasserstein optimal transport for pairwise alignment of adjacent ST slices and integration into a consensus center slice. | Python | [Nature Methods 2022](https://doi.org/10.1038/s41592-022-01459-6) | ![](https://img.shields.io/github/stars/raphael-group/paste?style=flat-square&logo=github&label=) |
| [SLAT](https://github.com/gao-lab/SLAT) | Graph neural network with adversarial matching aligns heterogeneous single-cell spatial slices across technologies and modalities. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43105-5) | ![](https://img.shields.io/github/stars/gao-lab/SLAT?style=flat-square&logo=github&label=) |
| [STitch3D](https://github.com/YangLabHKUST/STitch3D) | Jointly models multiple 2D slices with an scRNA-seq reference to reconstruct 3D tissue regions and cell-type distributions. | Python | [Nature Machine Intelligence 2023](https://doi.org/10.1038/s42256-023-00734-1) | ![](https://img.shields.io/github/stars/YangLabHKUST/STitch3D?style=flat-square&logo=github&label=) |
| [SPACEL](https://github.com/QuKunLab/SPACEL) | Deep-learning toolkit: Spoint deconvolution, Splane multi-slice domains, and Scube alignment and stacking of consecutive slices into 3D. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43220-3) | ![](https://img.shields.io/github/stars/QuKunLab/SPACEL?style=flat-square&logo=github&label=) |
| [STAligner](https://github.com/zhoux85/STAligner) | Graph attention autoencoder with spot-triplet loss integrates slices across conditions, technologies and developmental stages; supports 3D alignment. | Python | [Nature Computational Science 2023](https://doi.org/10.1038/s43588-023-00528-w) | ![](https://img.shields.io/github/stars/zhoux85/STAligner?style=flat-square&logo=github&label=) |
| [PASTE2](https://github.com/raphael-group/paste2) | Partial fused Gromov–Wasserstein OT aligns partially overlapping slices, optionally using histology, enabling 3D stacking. | Python | [Genome Research 2023](https://doi.org/10.1101/gr.277670.123) | ![](https://img.shields.io/github/stars/raphael-group/paste2?style=flat-square&logo=github&label=) |
| [CAST](https://github.com/wanglab-broad/CAST) | Self-supervised graph embeddings plus rigid and free-form alignment to search and match spatial samples at single-cell resolution. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02410-7) | ![](https://img.shields.io/github/stars/wanglab-broad/CAST?style=flat-square&logo=github&label=) |
| [GPSA](https://github.com/andrewcharlesjones/spatial-alignment) | Deep Gaussian process model that maps multiple spatial genomics and histology slices into a common coordinate system. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01972-2) | ![](https://img.shields.io/github/stars/andrewcharlesjones/spatial-alignment?style=flat-square&logo=github&label=) |
| [SpatialZ](https://github.com/senlin-lin/SpatialZ) | Generates virtual single-cell slices between measured sections to build dense 3D cell atlases from planar ST data. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-025-02969-9) | ![](https://img.shields.io/github/stars/senlin-lin/SpatialZ?style=flat-square&logo=github&label=) |
| [SANTO](https://github.com/leihouyeung/SANTO) | Coarse-to-fine alignment and stitching of partially overlapping spatial omics slices, in 2D or 3D and across omics types. | Python | [Nature Communications 2024](https://doi.org/10.1038/s41467-024-50308-x) | ![](https://img.shields.io/github/stars/leihouyeung/SANTO?style=flat-square&logo=github&label=) |

### Cell–cell communication & niches

Spatially aware signaling, interaction and niche analysis.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [LIANA+](https://github.com/scverse/liana) | All-in-one cell–cell communication framework unifying many ligand–receptor methods, with spatially informed bivariate metrics and multi-view (MISTy) modeling. | Python | [Nature Cell Biology 2024](https://doi.org/10.1038/s41556-024-01469-w) | ![](https://img.shields.io/github/stars/scverse/liana?style=flat-square&logo=github&label=) |
| [COMMOT](https://github.com/zcang/COMMOT) | Collective optimal transport infers ligand–receptor signaling and its spatial direction, accounting for competition among ligands and receptors. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-022-01728-4) | ![](https://img.shields.io/github/stars/zcang/COMMOT?style=flat-square&logo=github&label=) |
| [NicheCompass](https://github.com/Lotfollahi-lab/nichecompass) | Interpretable graph deep learning using prior interaction-pathway knowledge to learn signaling-aware embeddings and characterize cell niches at scale. | Python | [Nature Genetics 2025](https://doi.org/10.1038/s41588-025-02120-6) | ![](https://img.shields.io/github/stars/Lotfollahi-lab/nichecompass?style=flat-square&logo=github&label=) |
| [NCEM](https://github.com/theislab/ncem) | Node-centric expression models (linear to graph neural networks) predict a cell's expression from its spatial neighbors to infer communication. | Python | [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-022-01467-z) | ![](https://img.shields.io/github/stars/theislab/ncem?style=flat-square&logo=github&label=) |
| [FlowSig](https://github.com/axelalmet/flowsig) | Graphical causal modeling of intercellular flows linking incoming signals, intracellular gene modules and outgoing signals. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02380-w) | ![](https://img.shields.io/github/stars/axelalmet/flowsig?style=flat-square&logo=github&label=) |
| [SpaTalk](https://github.com/ZJUFanLab/SpaTalk) | Knowledge-graph-based inference of ligand–receptor–target signaling between spatially proximal cells; deconvolves spot data into single cells. | R | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-32111-8) | ![](https://img.shields.io/github/stars/ZJUFanLab/SpaTalk?style=flat-square&logo=github&label=) |
| [MISTy (mistyR)](https://github.com/saezlab/mistyR) | Explainable multiview machine learning that dissects intracellular and neighborhood (juxta-/para-view) relationships among markers in spatial omics. | R | [Genome Biology 2022](https://doi.org/10.1186/s13059-022-02663-5) | ![](https://img.shields.io/github/stars/saezlab/mistyR?style=flat-square&logo=github&label=) |
| [CellNEST](https://github.com/schwartzlab-methods/CellNEST) | Graph attention model that detects cell–cell communication and multi-hop relay networks from spatial transcriptomics. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02721-3) | ![](https://img.shields.io/github/stars/schwartzlab-methods/CellNEST?style=flat-square&logo=github&label=) |
| [SpaOTsc](https://github.com/zcang/SpaOTsc) | Structured optimal transport maps scRNA-seq cells to spatial locations and infers spatially constrained cell–cell signaling. | Python | [Nature Communications 2020](https://doi.org/10.1038/s41467-020-15968-5) | ![](https://img.shields.io/github/stars/zcang/SpaOTsc?style=flat-square&logo=github&label=) |
| [SpatialDM](https://github.com/StatBiomed/SpatialDM) | Bivariate Moran's statistic with an analytical null detects spatially co-expressed ligand–receptor pairs and local interaction hotspots, at scale. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-39608-w) | ![](https://img.shields.io/github/stars/StatBiomed/SpatialDM?style=flat-square&logo=github&label=) |

### Super-resolution, imputation & histology-to-expression

Higher resolution, more genes, or expression predicted from H&E.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [gimVI (scvi-tools)](https://docs.scvi-tools.org/en/stable/user_guide/models/gimvi.html) | Joint generative (VAE) model of scRNA-seq and spatial data that imputes genes missing from targeted spatial panels. | Python | [arXiv 2019](https://doi.org/10.48550/arXiv.1905.02269) *(preprint)* | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [iStar](https://github.com/daviddaiweizhang/istar) | Combines hierarchical histology image features with spot-level ST to predict near-single-cell super-resolution expression and annotate tissue. | Python | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-02019-9) | ![](https://img.shields.io/github/stars/daviddaiweizhang/istar?style=flat-square&logo=github&label=) |
| [ST-Net](https://github.com/bryanhe/ST-Net) | Early CNN model predicting spatially resolved expression of hundreds of genes from breast cancer H&E image patches. | Python | [Nature Biomedical Engineering 2020](https://doi.org/10.1038/s41551-020-0578-x) | ![](https://img.shields.io/github/stars/bryanhe/ST-Net?style=flat-square&logo=github&label=) |
| [BLEEP](https://github.com/bowang-lab/BLEEP) | Bi-modal contrastive learning aligns H&E patch and expression embeddings, then predicts expression by retrieving similar reference spots. | Python | [NeurIPS 2023](https://doi.org/10.48550/arXiv.2306.01859) | ![](https://img.shields.io/github/stars/bowang-lab/BLEEP?style=flat-square&logo=github&label=) |
| [SpatialScope](https://github.com/YangLabHKUST/SpatialScope) | Deep generative model that brings spot-level spatial data to single-cell resolution and imputes transcriptome-wide expression. | Python | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-43629-w) | ![](https://img.shields.io/github/stars/YangLabHKUST/SpatialScope?style=flat-square&logo=github&label=) |
| [XFuse](https://github.com/ludvb/xfuse) | Bayesian deep generative model fusing histology and spot-level ST to infer super-resolved expression, including in unmeasured tissue. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01075-3) | ![](https://img.shields.io/github/stars/ludvb/xfuse?style=flat-square&logo=github&label=) |
| [GHIST](https://github.com/SydneyBioX/GHIST) | Multitask deep learning predicts single-cell-resolution spatial expression from H&E, trained on subcellular-resolution ST data. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02795-z) | ![](https://img.shields.io/github/stars/SydneyBioX/GHIST?style=flat-square&logo=github&label=) |
| [TESLA](https://github.com/jianhuupenn/TESLA) | Integrates histology with spot-level ST to impute pixel-level expression and annotate tumor and immune cell regions. | Python | [Cell Systems 2023](https://doi.org/10.1016/j.cels.2023.03.008) | ![](https://img.shields.io/github/stars/jianhuupenn/TESLA?style=flat-square&logo=github&label=) |
| [ENVI (scENVI)](https://github.com/dpeerlab/ENVI) | Variational model integrating scRNA-seq with spatial data to impute unimaged genes and infer COVET niche context for dissociated cells. | Python | [Nature Biotechnology 2025](https://doi.org/10.1038/s41587-024-02193-4) | ![](https://img.shields.io/github/stars/dpeerlab/ENVI?style=flat-square&logo=github&label=) |
| [iSCALE](https://github.com/amesch441/iSCALE) | Predicts super-resolution expression for tissues larger than ST capture areas, using a large H&E image and several ST captures. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02770-8) | ![](https://img.shields.io/github/stars/amesch441/iSCALE?style=flat-square&logo=github&label=) |
| [TISSUE](https://github.com/sunericd/TISSUE) | Calibrated uncertainty estimates for imputed spatial gene expression, enabling more reliable downstream analyses. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02184-y) | ![](https://img.shields.io/github/stars/sunericd/TISSUE?style=flat-square&logo=github&label=) |
| [SpaGE](https://github.com/tabdelaal/SpaGE) | Aligns scRNA-seq and spatial data with domain adaptation (PRECISE), then predicts unmeasured genes by k-nearest-neighbor regression. | Python | [Nucleic Acids Research 2020](https://doi.org/10.1093/nar/gkaa740) | ![](https://img.shields.io/github/stars/tabdelaal/SpaGE?style=flat-square&logo=github&label=) |

### Spatiotemporal & generative modeling

Dynamics across time points and generation of spatial data.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [moscot](https://github.com/theislab/moscot) | Scalable optimal-transport framework mapping cells across time, space and modalities, including spatial alignment/mapping and spatiotemporal problems. | Python | [Nature 2025](https://doi.org/10.1038/s41586-024-08453-2) | ![](https://img.shields.io/github/stars/theislab/moscot?style=flat-square&logo=github&label=) |
| [stVCR](https://github.com/QiangweiPeng/stVCR) | Reconstructs continuous single-cell differentiation, proliferation, migration and slice alignment from time-series ST via unbalanced dynamical OT. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-026-03010-3) | ![](https://img.shields.io/github/stars/QiangweiPeng/stVCR?style=flat-square&logo=github&label=) |
| [Wasserstein Flow Matching (WFM)](https://github.com/DoronHav/WassersteinFlowMatching) | Flow matching over families of distributions (Gaussians, point clouds); generates high-dimensional cellular microenvironments (niches) from ST data. | Python | [ICML 2025](https://doi.org/10.48550/arXiv.2411.00698) | ![](https://img.shields.io/github/stars/DoronHav/WassersteinFlowMatching?style=flat-square&logo=github&label=) |
| [spaTrack](https://github.com/yzf072/spaTrack) | Optimal-transport trajectory inference combining expression and spatial distance, within single ST slices and across time-series slices. | Python | [Cell Systems 2025](https://doi.org/10.1016/j.cels.2025.101194) | ![](https://img.shields.io/github/stars/yzf072/spaTrack?style=flat-square&logo=github&label=) |
| [STORIES](https://github.com/cantinilab/stories) | Learns a differentiation potential (cell-fate landscape) from spatial transcriptomics time courses using fused Gromov–Wasserstein optimal transport. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-025-02855-4) | ![](https://img.shields.io/github/stars/cantinilab/stories?style=flat-square&logo=github&label=) |
| [NicheFlow](https://github.com/kristiyansakalyan/nicheflow) | Flow-matching generative model predicting how cellular microenvironments (cell states plus coordinates) evolve across time-resolved ST slices. | Python | [NeurIPS 2025](https://doi.org/10.48550/arXiv.2511.00977) | ![](https://img.shields.io/github/stars/kristiyansakalyan/nicheflow?style=flat-square&logo=github&label=) |
| [STT (spatial transition tensor)](https://github.com/cliffzhou92/STT) | Learns a 4D transition tensor from mRNA splicing and spatial data to map multistable attractors and spatial state transitions. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02266-x) | ![](https://img.shields.io/github/stars/cliffzhou92/STT?style=flat-square&logo=github&label=) |
| [DeST-OT](https://github.com/raphael-group/DeST_OT) | Semi-relaxed optimal transport aligns ST slices from developmental timepoints, inferring per-spot growth and migration. | Python | [Cell Systems 2025](https://doi.org/10.1016/j.cels.2024.12.001) | ![](https://img.shields.io/github/stars/raphael-group/DeST_OT?style=flat-square&logo=github&label=) |
| [GenOT](https://github.com/wrab12/GenOT) | Graph contrastive learning plus fused Gromov–Wasserstein barycenter interpolation generates intermediate slices and integrates cross-platform ST data. (Disclosure: by the list maintainer.) | Python | [Genome Biology 2026](https://doi.org/10.1186/s13059-026-04166-z) | ![](https://img.shields.io/github/stars/wrab12/GenOT?style=flat-square&logo=github&label=) |

### Visualization & interactive exploration

Viewers for large spatial and single-cell datasets.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [CZ CELLxGENE (Annotate / Explorer)](https://github.com/chanzuckerberg/cellxgene) | No-code interactive explorer for single-cell datasets: embeddings, gene expression, subsetting and annotation. | Python/JS | [Nucleic Acids Research 2025](https://doi.org/10.1093/nar/gkae1142) | ![](https://img.shields.io/github/stars/chanzuckerberg/cellxgene?style=flat-square&logo=github&label=) |
| [Vitessce](https://github.com/vitessce/vitessce) | Web framework for coordinated multiview visualization of multimodal and spatial single-cell data; usable from Jupyter and R. | JS/TS | [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02436-x) | ![](https://img.shields.io/github/stars/vitessce/vitessce?style=flat-square&logo=github&label=) |
| [iSEE](https://github.com/iSEE/iSEE) | Interactive Shiny explorer for SummarizedExperiment/SingleCellExperiment objects with linked, customizable panels and reproducible code export. | R | [F1000Research 2018](https://doi.org/10.12688/f1000research.14966.1) | ![](https://img.shields.io/github/stars/iSEE/iSEE?style=flat-square&logo=github&label=) |
| [Cirrocumulus](https://github.com/lilab-bcb/cirrocumulus) | Scalable web viewer for embeddings, dot plots, heatmaps and collaborative cell annotation of h5ad, Seurat, 10x and spatial data. | Python/JS | [Nature Methods 2020](https://doi.org/10.1038/s41592-020-0905-x) | ![](https://img.shields.io/github/stars/lilab-bcb/cirrocumulus?style=flat-square&logo=github&label=) |
| [napari-spatialdata](https://github.com/scverse/napari-spatialdata) | napari plugin to interactively view and annotate SpatialData objects: images, labels, points, shapes and tables. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02212-x) | ![](https://img.shields.io/github/stars/scverse/napari-spatialdata?style=flat-square&logo=github&label=) |
| [spatialdata-plot](https://github.com/scverse/spatialdata-plot) | Static matplotlib-based plotting of SpatialData images, labels, points and shapes through a chainable API. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02212-x) | ![](https://img.shields.io/github/stars/scverse/spatialdata-plot?style=flat-square&logo=github&label=) |
| [TissUUmaps](https://github.com/TissUUmaps/TissUUmaps3) | Browser-based viewer, hosted or local, for exploring millions of spatial data points over tissue images and sharing views. | JS/TS | [Heliyon 2023](https://doi.org/10.1016/j.heliyon.2023.e15306) | ![](https://img.shields.io/github/stars/TissUUmaps/TissUUmaps3?style=flat-square&logo=github&label=) |
| [ShinyCell / ShinyCell2](https://github.com/the-ouyang-lab/ShinyCell2) | R packages that turn single-cell objects (ShinyCell2 also spatial, scATAC, CITE-seq) into shareable Shiny web apps. | R | [Bioinformatics 2021](https://doi.org/10.1093/bioinformatics/btab209) | ![](https://img.shields.io/github/stars/the-ouyang-lab/ShinyCell2?style=flat-square&logo=github&label=) |
| [WebAtlas](https://github.com/haniffalab/webatlas-pipeline) | Pipeline that turns single-cell and spatial datasets into interactive, Vitessce-based web atlases. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-024-02371-x) | ![](https://img.shields.io/github/stars/haniffalab/webatlas-pipeline?style=flat-square&logo=github&label=) |
| [Xenium Explorer (10x Genomics)](https://www.10xgenomics.com/support/software/xenium-explorer/latest) | Desktop app for interactively exploring Xenium in situ data: transcripts, cell segmentation, images and clusters. | Desktop app |  |  |
| [Loupe Browser (10x Genomics)](https://www.10xgenomics.com/support/software/loupe-browser/latest) | Desktop app for interactive exploration of 10x Chromium single-cell and Visium/Visium HD spatial data. | Desktop app |  |  |

**[⬆ back to top](#contents)**

## 🧬 Single-Cell Foundations

### Single-cell frameworks & data structures

The ecosystems most spatial tools build on.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Seurat](https://github.com/satijalab/seurat) | Widely used R toolkit for single-cell QC, normalization, clustering, differential expression, integration, multimodal and spatial analysis. | R | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01767-y) | ![](https://img.shields.io/github/stars/satijalab/seurat?style=flat-square&logo=github&label=) |
| [Scanpy](https://github.com/scverse/scanpy) | Scalable Python toolkit for single-cell analysis on AnnData: preprocessing, clustering, embeddings, differential expression, PAGA and plotting. | Python | [Genome Biology 2018](https://doi.org/10.1186/s13059-017-1382-0) | ![](https://img.shields.io/github/stars/scverse/scanpy?style=flat-square&logo=github&label=) |
| [scvi-tools](https://github.com/scverse/scvi-tools) | PyTorch library of probabilistic deep generative models (scVI, scANVI, totalVI and more) for integration, annotation and multimodal analysis. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01206-w) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=) |
| [AnnData](https://github.com/scverse/anndata) | Python annotated data matrix (cells × features with metadata, layers, embeddings); defines the .h5ad/zarr formats used across scverse. | Python | [Journal of Open Source Software 2024](https://doi.org/10.21105/joss.04371) | ![](https://img.shields.io/github/stars/scverse/anndata?style=flat-square&logo=github&label=) |
| [sceasy](https://github.com/cellgeni/sceasy) | Converts between Seurat, SingleCellExperiment, AnnData and Loom objects from R, using reticulate and Python anndata/loompy. | R |  | ![](https://img.shields.io/github/stars/cellgeni/sceasy?style=flat-square&logo=github&label=) |
| [rapids-singlecell](https://github.com/scverse/rapids-singlecell) | GPU-accelerated, largely Scanpy-compatible single-cell analysis on AnnData using CuPy/RAPIDS; includes selected Squidpy, decoupler and pertpy functions. | Python | [arXiv 2026](https://doi.org/10.48550/arXiv.2603.02402) *(preprint)* | ![](https://img.shields.io/github/stars/scverse/rapids-singlecell?style=flat-square&logo=github&label=) |
| [BPCells](https://github.com/bnprks/BPCells) | Bitpacked, disk-backed sparse matrices and streaming algorithms for scalable scRNA-seq and scATAC-seq analysis in R; usable within Seurat v5. | R/C++ | [bioRxiv 2025](https://doi.org/10.1101/2025.03.27.645853) *(preprint)* | ![](https://img.shields.io/github/stars/bnprks/BPCells?style=flat-square&logo=github&label=) |
| [MuData / muon](https://github.com/scverse/muon) | MuData container (.h5mu) for multimodal data plus muon toolkit for ATAC, protein and multi-omic integration (MOFA+, WNN). | Python | [Genome Biology 2022](https://doi.org/10.1186/s13059-021-02577-8) | ![](https://img.shields.io/github/stars/scverse/muon?style=flat-square&logo=github&label=) |
| [zellkonverter](https://github.com/theislab/zellkonverter) | Converts between AnnData/.h5ad files and Bioconductor SingleCellExperiment objects, using a managed Python environment (basilisk) or native R reader. | R |  | ![](https://img.shields.io/github/stars/theislab/zellkonverter?style=flat-square&logo=github&label=) |
| [anndataR](https://github.com/scverse/anndataR) | Native R reading/writing of .h5ad and zarr AnnData files, with conversion to SingleCellExperiment and Seurat; no Python needed. | R | [Bioinformatics 2026](https://doi.org/10.1093/bioinformatics/btag288) | ![](https://img.shields.io/github/stars/scverse/anndataR?style=flat-square&logo=github&label=) |
| [scater](https://bioconductor.org/packages/scater) | Bioconductor toolkit for single-cell QC, visualization and dimensionality reduction on SingleCellExperiment objects. | R | [Bioinformatics 2017](https://doi.org/10.1093/bioinformatics/btw777) | ![](https://img.shields.io/github/stars/alanocallaghan/scater?style=flat-square&logo=github&label=) |
| [SingleCellExperiment](https://bioconductor.org/packages/SingleCellExperiment) | Core Bioconductor S4 container for single-cell data, used by scater, scran, batchelor and most Bioconductor single-cell packages. | R | [Nature Methods 2020](https://doi.org/10.1038/s41592-019-0654-x) | ![](https://img.shields.io/github/stars/drisso/SingleCellExperiment?style=flat-square&logo=github&label=) |

### Raw data processing

From reads to count matrices.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [STARsolo](https://github.com/alexdobin/STAR/blob/master/docs/STARsolo.md) | Single-cell mode of the STAR aligner; Cell Ranger-like barcode/UMI counting for many protocols, with spliced/unspliced (velocity) output. | C++ | [bioRxiv 2021](https://doi.org/10.1101/2021.05.05.442755) *(preprint)* | ![](https://img.shields.io/github/stars/alexdobin/STAR?style=flat-square&logo=github&label=) |
| [Cell Ranger](https://www.10xgenomics.com/support/software/cell-ranger/latest) | Official 10x Genomics pipelines for Chromium data: alignment, barcode/UMI counting, cell calling, Feature Barcode and V(D)J analysis. | Rust | [Nature Communications 2017](https://doi.org/10.1038/ncomms14049) | ![](https://img.shields.io/github/stars/10XGenomics/cellranger?style=flat-square&logo=github&label=) |
| [nf-core/scrnaseq](https://github.com/nf-core/scrnaseq) | Nextflow best-practice pipeline for 10x scRNA-seq: simpleaf, STARsolo, kallisto\|bustools or Cell Ranger, plus CellBender filtering and MultiQC. | Nextflow |  | ![](https://img.shields.io/github/stars/nf-core/scrnaseq?style=flat-square&logo=github&label=) |
| [zUMIs](https://github.com/sdparekh/zUMIs) | Pipeline for UMI and plate-based scRNA-seq (including Smart-seq3): STAR mapping, exon/intron counting, barcode detection and UMI collapsing. | R | [GigaScience 2018](https://doi.org/10.1093/gigascience/giy059) | ![](https://img.shields.io/github/stars/sdparekh/zUMIs?style=flat-square&logo=github&label=) |
| [alevin-fry / simpleaf](https://github.com/COMBINE-lab/alevin-fry) | Fast, memory-frugal scRNA-seq quantification from piscem/salmon mappings, with spliced/unspliced/ambiguous (USA) counting; simpleaf wraps the workflow. | Rust | [Nature Methods 2022](https://doi.org/10.1038/s41592-022-01408-3) | ![](https://img.shields.io/github/stars/COMBINE-lab/alevin-fry?style=flat-square&logo=github&label=) |
| [kallisto \| bustools (kb-python)](https://github.com/pachterlab/kb_python) | Wraps kallisto pseudoalignment and bustools into one-command scRNA-seq preprocessing; supports many technologies, single-nucleus and RNA-velocity workflows. | Python | [Nature Biotechnology 2021](https://doi.org/10.1038/s41587-021-00870-2) | ![](https://img.shields.io/github/stars/pachterlab/kb_python?style=flat-square&logo=github&label=) |

### Quality control

Ambient RNA, doublets and low-quality cells.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [DoubletFinder](https://github.com/chris-mcginnis-ucsf/DoubletFinder) | Seurat-based doublet detection comparing each cell's neighborhood with simulated artificial doublets (pANN score). | R | [Cell Systems 2019](https://doi.org/10.1016/j.cels.2019.03.003) | ![](https://img.shields.io/github/stars/chris-mcginnis-ucsf/DoubletFinder?style=flat-square&logo=github&label=) |
| [CellBender](https://github.com/broadinstitute/CellBender) | Deep generative model that removes ambient RNA and barcode-swapping background from raw droplet count matrices and calls cells. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01943-7) | ![](https://img.shields.io/github/stars/broadinstitute/CellBender?style=flat-square&logo=github&label=) |
| [SoupX](https://github.com/constantAmateur/SoupX) | Estimates the ambient-RNA ('soup') profile from empty droplets and removes the contamination from each cell's counts. | R | [GigaScience 2020](https://doi.org/10.1093/gigascience/giaa151) | ![](https://img.shields.io/github/stars/constantAmateur/SoupX?style=flat-square&logo=github&label=) |
| [scDblFinder](https://github.com/plger/scDblFinder) | Fast doublet detection training gradient-boosted trees on real cells versus simulated doublets; handles multiple samples and scATAC-seq. | R | [F1000Research 2022](https://doi.org/10.12688/f1000research.73600.2) | ![](https://img.shields.io/github/stars/plger/scDblFinder?style=flat-square&logo=github&label=) |
| [Scrublet](https://github.com/swolock/scrublet) | Python doublet detection scoring each cell by k-NN similarity to simulated doublets built from random pairs of observed cells. | Python | [Cell Systems 2019](https://doi.org/10.1016/j.cels.2018.11.005) | ![](https://img.shields.io/github/stars/swolock/scrublet?style=flat-square&logo=github&label=) |
| [Solo](https://docs.scvi-tools.org/en/stable/api/reference/scvi.external.SOLO.html) | Semi-supervised scVI-based classifier separating singlets from simulated doublets. Maintained in scvi-tools (original repo archived). | Python | [Cell Systems 2020](https://doi.org/10.1016/j.cels.2020.05.010) |  |
| [DecontX](https://bioconductor.org/packages/decontX) | Bayesian model that estimates and removes per-cell ambient RNA contamination from cluster-level profiles; no empty droplets required. | R | [Genome Biology 2020](https://doi.org/10.1186/s13059-020-1950-6) | ![](https://img.shields.io/github/stars/campbio/decontX?style=flat-square&logo=github&label=) |
| [DropletUtils (EmptyDrops)](https://bioconductor.org/packages/DropletUtils) | Bioconductor utilities for droplet data: EmptyDrops cell calling, barcode-rank knee detection, swapped-barcode removal and 10x I/O. | R | [Genome Biology 2019](https://doi.org/10.1186/s13059-019-1662-y) | ![](https://img.shields.io/github/stars/MarioniLab/DropletUtils?style=flat-square&logo=github&label=) |
| [miQC](https://github.com/greenelab/miQC) | Mixture model of mitochondrial fraction and genes detected that sets adaptive, data-driven cell-filtering thresholds instead of fixed cutoffs. | R | [PLOS Computational Biology 2021](https://doi.org/10.1371/journal.pcbi.1009290) | ![](https://img.shields.io/github/stars/greenelab/miQC?style=flat-square&logo=github&label=) |

### Normalization & feature selection

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [sctransform](https://github.com/satijalab/sctransform) | Regularized negative binomial regression; Pearson residuals give normalized, variance-stabilized UMI data (Seurat's SCTransform). | R | [Genome Biology 2019](https://doi.org/10.1186/s13059-019-1874-1) | ![](https://img.shields.io/github/stars/satijalab/sctransform?style=flat-square&logo=github&label=) |
| [scran](https://bioconductor.org/packages/scran) | Pooling-based (deconvolution) size factors for normalization, plus variance modeling for HVG selection and marker detection. | R | [Genome Biology 2016](https://doi.org/10.1186/s13059-016-0947-7) | ![](https://img.shields.io/github/stars/MarioniLab/scran?style=flat-square&logo=github&label=) |
| [Analytic Pearson residuals](https://scanpy.readthedocs.io/en/stable/tutorials/experimental/pearson_residuals.html) | Closed-form Pearson residuals from a fixed-overdispersion negative binomial model for UMI normalization and HVG selection; implemented in Scanpy. | Python | [Genome Biology 2021](https://doi.org/10.1186/s13059-021-02451-7) | ![](https://img.shields.io/github/stars/berenslab/umi-normalization?style=flat-square&logo=github&label=) |
| [Feature selection benchmark (Zappia et al.)](https://github.com/theislab/atlas-feature-selection-benchmark) | Benchmark of 20+ feature-selection methods for scRNA-seq integration and query mapping; finds highly variable gene selection effective. | Python/R | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02624-3) | ![](https://img.shields.io/github/stars/theislab/atlas-feature-selection-benchmark?style=flat-square&logo=github&label=) |
| [scry](https://github.com/kstreet13/scry) | Multinomial-model tools: binomial-deviance feature selection, null residuals and GLM-PCA dimensionality reduction on raw UMI counts. | R | [Genome Biology 2019](https://doi.org/10.1186/s13059-019-1861-6) | ![](https://img.shields.io/github/stars/kstreet13/scry?style=flat-square&logo=github&label=) |
| [transformGamPoi](https://github.com/const-ae/transformGamPoi) | Variance-stabilizing transformations for UMI counts: acosh, shifted log, Pearson and randomized-quantile residuals. | R | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01814-1) | ![](https://img.shields.io/github/stars/const-ae/transformGamPoi?style=flat-square&logo=github&label=) |

### Integration, batch correction & reference mapping

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [scVI](https://docs.scvi-tools.org/en/stable/api/reference/scvi.model.SCVI.html) | Variational autoencoder for raw counts conditioned on batch; its latent space is used for integration, normalization and differential expression. Part of scvi-tools. | Python | [Nature Methods 2018](https://doi.org/10.1038/s41592-018-0229-2) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [scANVI](https://docs.scvi-tools.org/en/stable/api/reference/scvi.model.SCANVI.html) | Semi-supervised scVI extension that uses available cell-type labels for label-aware integration and label transfer to unannotated cells. Part of scvi-tools. | Python | [Molecular Systems Biology 2021](https://doi.org/10.15252/msb.20209620) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [sysVI](https://docs.scvi-tools.org/en/stable/api/reference/scvi.external.SysVI.html) | Conditional VAE with VampPrior and cycle-consistency for integrating systems with substantial batch effects (species, organoid vs tissue, cells vs nuclei). Part of scvi-tools. | Python | [BMC Genomics 2025](https://doi.org/10.1186/s12864-025-12126-3) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [Harmony](https://github.com/immunogenomics/harmony) | Iterative soft clustering in PCA space with cluster-specific linear corrections that remove dataset effects; fast and scalable. | R | [Nature Methods 2019](https://doi.org/10.1038/s41592-019-0619-0) | ![](https://img.shields.io/github/stars/immunogenomics/harmony?style=flat-square&logo=github&label=) |
| [LIGER (rliger)](https://github.com/welch-lab/liger) | Integrative non-negative matrix factorization (iNMF) learning shared and dataset-specific factors across samples, modalities and species. | R | [Cell 2019](https://doi.org/10.1016/j.cell.2019.05.006) | ![](https://img.shields.io/github/stars/welch-lab/liger?style=flat-square&logo=github&label=) |
| [scArches](https://github.com/theislab/scarches) | Transfer-learning 'architecture surgery' that maps query datasets onto pretrained reference models (e.g., scVI, scANVI) without sharing raw data. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01001-7) | ![](https://img.shields.io/github/stars/theislab/scarches?style=flat-square&logo=github&label=) |
| [scPoli](https://docs.scarches.org/en/latest/scpoli_surgery_pipeline.html) | Generative model that learns sample embeddings and cell-type prototypes for population-level integration, reference mapping and label transfer. Part of scArches. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-02035-2) | ![](https://img.shields.io/github/stars/theislab/scarches?style=flat-square&logo=github&label=scArches) |
| [Scanorama](https://github.com/brianhie/scanorama) | Panorama-stitching integration that finds mutual nearest neighbors across all dataset pairs; handles heterogeneous collections with partially shared cell types. | Python | [Nature Biotechnology 2019](https://doi.org/10.1038/s41587-019-0113-3) | ![](https://img.shields.io/github/stars/brianhie/scanorama?style=flat-square&logo=github&label=) |
| [BBKNN](https://github.com/Teichlab/bbknn) | Batch-balanced k-nearest-neighbor graph built per batch; fast graph-level correction feeding Scanpy clustering and UMAP. | Python | [Bioinformatics 2020](https://doi.org/10.1093/bioinformatics/btz625) | ![](https://img.shields.io/github/stars/Teichlab/bbknn?style=flat-square&logo=github&label=) |
| [Symphony](https://github.com/immunogenomics/symphony) | Compresses a Harmony-integrated reference so new query cells can be mapped and annotated in seconds without re-integration. | R | [Nature Communications 2021](https://doi.org/10.1038/s41467-021-25957-x) | ![](https://img.shields.io/github/stars/immunogenomics/symphony?style=flat-square&logo=github&label=) |
| [batchelor (MNN / fastMNN)](https://bioconductor.org/packages/batchelor) | Bioconductor batch correction with mutual nearest neighbors (MNN, fastMNN) and related methods for SingleCellExperiment objects. | R | [Nature Biotechnology 2018](https://doi.org/10.1038/nbt.4091) | ![](https://img.shields.io/github/stars/LTLA/batchelor?style=flat-square&logo=github&label=) |

### Dimensionality reduction, clustering & visualization

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [UMAP (umap-learn)](https://github.com/lmcinnes/umap) | Manifold-learning dimensionality reduction (fuzzy topological graph); widely used for 2-D visualization of single-cell data. | Python | [arXiv 2018](https://doi.org/10.48550/arXiv.1802.03426) *(preprint)* | ![](https://img.shields.io/github/stars/lmcinnes/umap?style=flat-square&logo=github&label=) |
| [openTSNE](https://github.com/pavlin-policar/openTSNE) | Fast, extensible t-SNE (FFT interpolation, Barnes-Hut) that can add new points to existing embeddings. | Python | [Journal of Statistical Software 2024](https://doi.org/10.18637/jss.v109.i03) | ![](https://img.shields.io/github/stars/pavlin-policar/openTSNE?style=flat-square&logo=github&label=) |
| [leidenalg](https://github.com/vtraag/leidenalg) | Implementation of Leiden community detection, which guarantees well-connected communities; clustering backend for Scanpy's sc.tl.leiden. | Python | [Scientific Reports 2019](https://doi.org/10.1038/s41598-019-41695-z) | ![](https://img.shields.io/github/stars/vtraag/leidenalg?style=flat-square&logo=github&label=) |
| [PHATE](https://github.com/KrishnaswamyLab/PHATE) | Diffusion-based potential-distance embedding that preserves local and global structure, highlighting continuous transitions and branches. | Python | [Nature Biotechnology 2019](https://doi.org/10.1038/s41587-019-0336-3) | ![](https://img.shields.io/github/stars/KrishnaswamyLab/PHATE?style=flat-square&logo=github&label=) |
| [clustree](https://github.com/lazappi/clustree) | Plots clusterings at several resolutions as a tree, showing how cells move between clusters to guide resolution choice. | R | [GigaScience 2018](https://doi.org/10.1093/gigascience/giy083) | ![](https://img.shields.io/github/stars/lazappi/clustree?style=flat-square&logo=github&label=) |

### Cell type annotation

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [CellTypist](https://github.com/Teichlab/celltypist) | Automated annotation with logistic-regression classifiers and a library of curated pre-trained immune and tissue models. | Python | [Science 2022](https://doi.org/10.1126/science.abl5197) | ![](https://img.shields.io/github/stars/Teichlab/celltypist?style=flat-square&logo=github&label=) |
| [ScType](https://github.com/IanevskiAleksandr/sc-type) | Fast, fully automated marker-based annotation scoring positive and negative markers from the ScType database. | R | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-28803-w) | ![](https://img.shields.io/github/stars/IanevskiAleksandr/sc-type?style=flat-square&logo=github&label=) |
| [CellAssign](https://github.com/Irrationone/cellassign) | Probabilistic model assigning cells to predefined types from known marker genes, without a reference dataset. | R | [Nature Methods 2019](https://doi.org/10.1038/s41592-019-0529-1) | ![](https://img.shields.io/github/stars/Irrationone/cellassign?style=flat-square&logo=github&label=) |
| [SingleR](https://github.com/SingleR-inc/SingleR) | Reference-based annotation correlating each cell with labelled reference profiles, refined by iterative fine-tuning. | R | [Nature Immunology 2019](https://doi.org/10.1038/s41590-018-0276-y) | ![](https://img.shields.io/github/stars/SingleR-inc/SingleR?style=flat-square&logo=github&label=) |
| [Azimuth](https://github.com/satijalab/azimuth) | Web app and R package mapping query cells onto curated Seurat reference atlases to transfer labels. | R | [Cell 2021](https://doi.org/10.1016/j.cell.2021.04.048) | ![](https://img.shields.io/github/stars/satijalab/azimuth?style=flat-square&logo=github&label=) |
| [CellHint](https://github.com/Teichlab/cellhint) | Harmonises cell type labels across independently annotated datasets and uses them to guide integration. | Python | [Cell 2023](https://doi.org/10.1016/j.cell.2023.11.026) | ![](https://img.shields.io/github/stars/Teichlab/cellhint?style=flat-square&logo=github&label=) |
| [popV](https://github.com/YosefLab/popV) | Ensemble of annotation algorithms with ontology-aware voting, giving consensus labels and per-cell certainty scores. | Python | [Nature Genetics 2024](https://doi.org/10.1038/s41588-024-01993-3) | ![](https://img.shields.io/github/stars/YosefLab/popV?style=flat-square&logo=github&label=) |

### Differential expression & abundance

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Milo (miloR)](https://github.com/MarioniLab/miloR) | Differential abundance testing on overlapping kNN-graph neighbourhoods with negative binomial GLMs. | R | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-021-01033-z) | ![](https://img.shields.io/github/stars/MarioniLab/miloR?style=flat-square&logo=github&label=) |
| [MAST](https://github.com/RGLab/MAST) | Hurdle model for single-cell differential expression that adjusts for the cellular detection rate. | R | [Genome Biology 2015](https://doi.org/10.1186/s13059-015-0844-5) | ![](https://img.shields.io/github/stars/RGLab/MAST?style=flat-square&logo=github&label=) |
| [muscat](https://github.com/HelenaLC/muscat) | Multi-sample, multi-condition differential state analysis using pseudobulk (edgeR/DESeq2/limma) and mixed models. | R | [Nature Communications 2020](https://doi.org/10.1038/s41467-020-19894-4) | ![](https://img.shields.io/github/stars/HelenaLC/muscat?style=flat-square&logo=github&label=) |
| [scCODA](https://github.com/theislab/scCODA) | Bayesian compositional model detecting changes in cell type proportions relative to a reference cell type. | Python | [Nature Communications 2021](https://doi.org/10.1038/s41467-021-27150-6) | ![](https://img.shields.io/github/stars/theislab/scCODA?style=flat-square&logo=github&label=) |
| [Libra](https://github.com/neurorestore/Libra) | One-function interface to many single-cell DE methods, including pseudobulk edgeR/DESeq2/limma and mixed models. | R | [Nature Communications 2021](https://doi.org/10.1038/s41467-021-25960-2) | ![](https://img.shields.io/github/stars/neurorestore/Libra?style=flat-square&logo=github&label=) |
| [memento](https://github.com/yelabucsf/scrna-parameter-estimation) | Method-of-moments framework testing differences in mean expression, variability and gene correlation. | Python | [Cell 2024](https://doi.org/10.1016/j.cell.2024.09.044) | ![](https://img.shields.io/github/stars/yelabucsf/scrna-parameter-estimation?style=flat-square&logo=github&label=) |
| [LEMUR](https://github.com/const-ae/lemur) | Latent embedding multivariate regression for cluster-free differential expression in multi-condition data. | R | [Nature Genetics 2025](https://doi.org/10.1038/s41588-024-01996-0) | ![](https://img.shields.io/github/stars/const-ae/lemur?style=flat-square&logo=github&label=) |
| [propeller (speckle)](https://github.com/phipsonlab/speckle) | Tests cell type proportion differences between groups using transformed proportions and linear models. | R | [Bioinformatics 2022](https://doi.org/10.1093/bioinformatics/btac582) | ![](https://img.shields.io/github/stars/phipsonlab/speckle?style=flat-square&logo=github&label=) |

### Trajectory, pseudotime & RNA velocity

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [PAGA](https://scanpy.readthedocs.io/en/stable/generated/scanpy.tl.paga.html) | Graph abstraction of cluster connectivity giving topology-preserving maps for trajectory inference. Part of Scanpy. | Python | [Genome Biology 2019](https://doi.org/10.1186/s13059-019-1663-x) | ![](https://img.shields.io/github/stars/scverse/scanpy?style=flat-square&logo=github&label=Scanpy) |
| [scVelo](https://github.com/theislab/scvelo) | RNA velocity with a dynamical model of transcriptional kinetics, plus latent time and velocity graphs. | Python | [Nature Biotechnology 2020](https://doi.org/10.1038/s41587-020-0591-3) | ![](https://img.shields.io/github/stars/theislab/scvelo?style=flat-square&logo=github&label=) |
| [Dynamo](https://github.com/aristoteleo/dynamo-release) | Reconstructs continuous expression vector fields from RNA velocity (incl. metabolic labeling) for dynamics and in silico perturbation. | Python | [Cell 2022](https://doi.org/10.1016/j.cell.2021.12.045) | ![](https://img.shields.io/github/stars/aristoteleo/dynamo-release?style=flat-square&logo=github&label=) |
| [Monocle 3](https://github.com/cole-trapnell-lab/monocle3) | Learns principal graphs to order cells in pseudotime and find genes varying along trajectories. | R | [Nature 2019](https://doi.org/10.1038/s41586-019-0969-x) | ![](https://img.shields.io/github/stars/cole-trapnell-lab/monocle3?style=flat-square&logo=github&label=) |
| [CellRank](https://github.com/scverse/cellrank) | Markov-chain fate mapping from velocity, pseudotime, real time or other kernels; estimates fate probabilities and drivers. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02303-9) | ![](https://img.shields.io/github/stars/scverse/cellrank?style=flat-square&logo=github&label=) |
| [Slingshot](https://github.com/kstreet13/slingshot) | Infers lineages over clusters and fits simultaneous principal curves to compute per-lineage pseudotime. | R | [BMC Genomics 2018](https://doi.org/10.1186/s12864-018-4772-0) | ![](https://img.shields.io/github/stars/kstreet13/slingshot?style=flat-square&logo=github&label=) |
| [Palantir](https://github.com/dpeerlab/Palantir) | Models differentiation as a Markov chain on diffusion maps to estimate pseudotime and terminal fate probabilities. | Python | [Nature Biotechnology 2019](https://doi.org/10.1038/s41587-019-0068-4) | ![](https://img.shields.io/github/stars/dpeerlab/Palantir?style=flat-square&logo=github&label=) |
| [CytoTRACE 2](https://github.com/digitalcytometry/cytotrace2) | Interpretable deep learning that predicts each cell's absolute developmental potential (potency) from its expression profile. | R/Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02857-2) | ![](https://img.shields.io/github/stars/digitalcytometry/cytotrace2?style=flat-square&logo=github&label=) |
| [RegVelo](https://github.com/theislab/regvelo) | Couples RNA velocity with gene regulatory networks to model cell dynamics and predict effects of regulator perturbations. | Python | [Cell 2026](https://doi.org/10.1016/j.cell.2026.04.022) | ![](https://img.shields.io/github/stars/theislab/regvelo?style=flat-square&logo=github&label=) |
| [dyno (dynverse)](https://github.com/dynverse/dyno) | Uniform interface to ~60 trajectory inference methods with method-selection guidelines, from the large TI benchmark. | R | [Nature Biotechnology 2019](https://doi.org/10.1038/s41587-019-0071-9) | ![](https://img.shields.io/github/stars/dynverse/dyno?style=flat-square&logo=github&label=) |
| [velocyto](https://github.com/velocyto-team/velocyto.py) | Original RNA velocity: counts spliced/unspliced reads and extrapolates future transcriptional states. | Python | [Nature 2018](https://doi.org/10.1038/s41586-018-0414-6) | ![](https://img.shields.io/github/stars/velocyto-team/velocyto.py?style=flat-square&logo=github&label=) |
| [Waddington-OT (wot)](https://github.com/broadinstitute/wot) | Optimal transport over time-course scRNA-seq to infer ancestor–descendant couplings and fate trajectories. | Python | [Cell 2019](https://doi.org/10.1016/j.cell.2019.01.006) | ![](https://img.shields.io/github/stars/broadinstitute/wot?style=flat-square&logo=github&label=) |
| [MultiVelo](https://github.com/welch-lab/MultiVelo) | Extends RNA velocity with chromatin accessibility from single-cell multiome data to model gene regulation dynamics. | Python | [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-022-01476-y) | ![](https://img.shields.io/github/stars/welch-lab/MultiVelo?style=flat-square&logo=github&label=) |
| [veloVI](https://github.com/YosefLab/velovi) | Deep generative model of transcriptional dynamics for RNA velocity with uncertainty quantification. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-023-01994-w) | ![](https://img.shields.io/github/stars/YosefLab/velovi?style=flat-square&logo=github&label=) |

### Gene regulatory networks

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [SCENIC / pySCENIC](https://github.com/aertslab/pySCENIC) | Infers TF regulons from co-expression pruned by cis-regulatory motif enrichment, then scores regulon activity per cell. | Python | [Nature Methods 2017](https://doi.org/10.1038/nmeth.4463) | ![](https://img.shields.io/github/stars/aertslab/pySCENIC?style=flat-square&logo=github&label=) |
| [CellOracle](https://github.com/morris-lab/CellOracle) | Builds cell-state-specific GRNs using an ATAC-derived base network, then simulates TF perturbations in silico. | Python | [Nature 2023](https://doi.org/10.1038/s41586-022-05688-9) | ![](https://img.shields.io/github/stars/morris-lab/CellOracle?style=flat-square&logo=github&label=) |
| [decoupler](https://github.com/scverse/decoupler) | Infers TF and pathway activities from prior-knowledge networks (e.g., CollecTRI, PROGENy) using multiple statistical methods. | Python | [Bioinformatics Advances 2022](https://doi.org/10.1093/bioadv/vbac016) | ![](https://img.shields.io/github/stars/scverse/decoupler?style=flat-square&logo=github&label=) |
| [SCENIC+](https://github.com/aertslab/scenicplus) | Infers enhancer-driven GRNs (eRegulons) from paired or unpaired scRNA-seq and scATAC-seq using motif enrichment. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01938-4) | ![](https://img.shields.io/github/stars/aertslab/scenicplus?style=flat-square&logo=github&label=) |
| [LINGER](https://github.com/Durenlab/LINGER) | Infers gene regulatory networks from single-cell multiome data, using lifelong learning on large external bulk data. | Python | [Nature Biotechnology 2025](https://doi.org/10.1038/s41587-024-02182-7) | ![](https://img.shields.io/github/stars/Durenlab/LINGER?style=flat-square&logo=github&label=) |
| [Dictys](https://github.com/pinellolab/dictys) | Infers cell-type-specific and dynamic GRNs along trajectories from scRNA-seq plus scATAC-seq using TF footprinting. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01971-3) | ![](https://img.shields.io/github/stars/pinellolab/dictys?style=flat-square&logo=github&label=) |
| [Arboreto (GRNBoost2)](https://github.com/aertslab/arboreto) | Scalable Dask-based GRN inference with GRNBoost2 and GENIE3; the co-expression step behind pySCENIC. | Python | [Bioinformatics 2019](https://doi.org/10.1093/bioinformatics/bty916) | ![](https://img.shields.io/github/stars/aertslab/arboreto?style=flat-square&logo=github&label=) |

### Cell–cell communication

Ligand–receptor inference from dissociated cells. For spatial methods, see [Cell–cell communication & niches](#cellcell-communication--niches).

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [NicheNet (nichenetr)](https://github.com/saeyslab/nichenetr) | Prioritises sender ligands by their predicted regulatory effect on receiver-cell target genes using prior knowledge. | R | [Nature Methods 2020](https://doi.org/10.1038/s41592-019-0667-5) | ![](https://img.shields.io/github/stars/saeyslab/nichenetr?style=flat-square&logo=github&label=) |
| [CellChat](https://github.com/jinworks/CellChat) | Ligand–receptor database with cofactors; models communication probabilities and analyses signaling networks and pathways. | R | [Nature Protocols 2025](https://doi.org/10.1038/s41596-024-01045-4) | ![](https://img.shields.io/github/stars/jinworks/CellChat?style=flat-square&logo=github&label=) |
| [CellPhoneDB](https://github.com/ventolab/CellphoneDB) | Curated ligand–receptor database including multi-subunit complexes, with statistical inference of interacting cell type pairs. | Python | [Nature Protocols 2025](https://doi.org/10.1038/s41596-024-01137-1) | ![](https://img.shields.io/github/stars/ventolab/CellphoneDB?style=flat-square&logo=github&label=) |
| [MultiNicheNet](https://github.com/saeyslab/multinichenetr) | Differential cell–cell communication for multi-sample, multi-condition designs, combining pseudobulk DE with NicheNet ligand activities. | R | [bioRxiv 2023](https://doi.org/10.1101/2023.06.13.544751) *(preprint)* | ![](https://img.shields.io/github/stars/saeyslab/multinichenetr?style=flat-square&logo=github&label=) |
| [Scriabin](https://github.com/BlishLab/scriabin) | Single-cell-resolution communication analysis without aggregation, enabling comparisons across samples and conditions. | R | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01782-z) | ![](https://img.shields.io/github/stars/BlishLab/scriabin?style=flat-square&logo=github&label=) |
| [CellCall](https://github.com/ShellyCoder/cellcall) | Infers communication by combining ligand–receptor expression with downstream TF activity in receiving cells. | R | [Nucleic Acids Research 2021](https://doi.org/10.1093/nar/gkab638) | ![](https://img.shields.io/github/stars/ShellyCoder/cellcall?style=flat-square&logo=github&label=) |
| [Tensor-cell2cell](https://github.com/earmingol/cell2cell) | Tensor decomposition of communication scores across samples or conditions to extract context-dependent communication patterns. | Python | [Nature Communications 2022](https://doi.org/10.1038/s41467-022-31369-2) | ![](https://img.shields.io/github/stars/earmingol/cell2cell?style=flat-square&logo=github&label=) |

### Multi-omics & multimodal integration

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Seurat WNN](https://satijalab.org/seurat/articles/weighted_nearest_neighbor_analysis) | Weighted nearest neighbour analysis learning per-cell modality weights to jointly analyse RNA with protein or ATAC. | R | [Cell 2021](https://doi.org/10.1016/j.cell.2021.04.048) | ![](https://img.shields.io/github/stars/satijalab/seurat?style=flat-square&logo=github&label=Seurat) |
| [totalVI](https://docs.scvi-tools.org/en/stable/user_guide/models/totalvi.html) | Deep generative model jointly modelling CITE-seq RNA and protein, with protein background correction and integration. Part of scvi-tools. | Python | [Nature Methods 2021](https://doi.org/10.1038/s41592-020-01050-x) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [MultiVI](https://docs.scvi-tools.org/en/stable/user_guide/models/multivi.html) | Deep generative model integrating paired and unpaired scRNA-seq and scATAC-seq (optionally protein) into one latent space. Part of scvi-tools. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01909-9) | ![](https://img.shields.io/github/stars/scverse/scvi-tools?style=flat-square&logo=github&label=scvi-tools) |
| [scGLUE](https://github.com/gao-lab/GLUE) | Graph-linked unified embedding integrating unpaired multi-omics via prior regulatory graphs; also infers regulatory links. | Python | [Nature Biotechnology 2022](https://doi.org/10.1038/s41587-022-01284-4) | ![](https://img.shields.io/github/stars/gao-lab/GLUE?style=flat-square&logo=github&label=) |
| [ArchR](https://github.com/GreenleafLab/ArchR) | Scalable scATAC-seq analysis: QC, clustering, peak calling, motif deviations, scRNA integration and trajectories. | R | [Nature Genetics 2021](https://doi.org/10.1038/s41588-021-00790-6) | ![](https://img.shields.io/github/stars/GreenleafLab/ArchR?style=flat-square&logo=github&label=) |
| [Signac](https://github.com/stuart-lab/signac) | Seurat extension for single-cell chromatin data: peaks, motifs, footprinting, peak–gene links and RNA integration. | R | [Nature Methods 2021](https://doi.org/10.1038/s41592-021-01282-5) | ![](https://img.shields.io/github/stars/stuart-lab/signac?style=flat-square&logo=github&label=) |
| [MOFA+](https://github.com/bioFAM/MOFA2) | Bayesian group factor analysis inferring interpretable latent factors shared across modalities and sample groups. | R/Python | [Genome Biology 2020](https://doi.org/10.1186/s13059-020-02015-1) | ![](https://img.shields.io/github/stars/bioFAM/MOFA2?style=flat-square&logo=github&label=) |
| [SnapATAC2](https://github.com/scverse/SnapATAC2) | Fast Rust-backed package for scATAC-seq and other single-cell omics using matrix-free spectral embedding. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-023-02139-9) | ![](https://img.shields.io/github/stars/scverse/SnapATAC2?style=flat-square&logo=github&label=) |
| [MaxFuse](https://github.com/shuxiaoc/maxfuse) | Integrates modalities with weakly linked features (e.g., targeted protein vs RNA) via fuzzy-smoothed iterative co-embedding. | Python | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01935-0) | ![](https://img.shields.io/github/stars/shuxiaoc/maxfuse?style=flat-square&logo=github&label=) |

### Perturbation analysis & modeling

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Mixscape (Seurat)](https://satijalab.org/seurat/articles/mixscape_vignette) | Classifies CRISPR-targeted cells as perturbed or escaping, then visualises perturbation-specific responses in pooled screens. | R | [Nature Genetics 2021](https://doi.org/10.1038/s41588-021-00778-2) | ![](https://img.shields.io/github/stars/satijalab/seurat?style=flat-square&logo=github&label=Seurat) |
| [GEARS](https://github.com/snap-stanford/GEARS) | Graph neural network on a gene–gene knowledge graph predicting outcomes of unseen single and multi-gene perturbations. | Python | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01905-6) | ![](https://img.shields.io/github/stars/snap-stanford/GEARS?style=flat-square&logo=github&label=) |
| [scGen](https://github.com/theislab/scgen) | VAE with latent vector arithmetic predicting perturbation responses in unseen cell types or species. | Python | [Nature Methods 2019](https://doi.org/10.1038/s41592-019-0494-8) | ![](https://img.shields.io/github/stars/theislab/scgen?style=flat-square&logo=github&label=) |
| [pertpy](https://github.com/scverse/pertpy) | scverse framework for perturbation studies: Milo, scCODA, Mixscape, perturbation distances, response spaces and dataset loaders. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-025-02909-7) | ![](https://img.shields.io/github/stars/scverse/pertpy?style=flat-square&logo=github&label=) |
| [scPerturb](https://github.com/sanderlab/scPerturb) | Harmonised resource of single-cell perturbation datasets with energy-statistics tools for comparing perturbation effects. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-023-02144-y) | ![](https://img.shields.io/github/stars/sanderlab/scPerturb?style=flat-square&logo=github&label=) |
| [CellOT](https://github.com/bunnech/cellot) | Neural optimal transport learning maps from control to perturbed single-cell states to predict per-cell responses. | Python | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01969-x) | ![](https://img.shields.io/github/stars/bunnech/cellot?style=flat-square&logo=github&label=) |
| [CPA](https://github.com/theislab/cpa) | Compositional perturbation autoencoder disentangling perturbation, dose and covariates to predict unseen combinations. | Python | [Molecular Systems Biology 2023](https://doi.org/10.15252/msb.202211517) | ![](https://img.shields.io/github/stars/theislab/cpa?style=flat-square&logo=github&label=) |
| [SCEPTRE](https://github.com/Katsevich-Lab/sceptre) | Calibrated, resampling-based association testing between perturbations and gene expression in single-cell CRISPR screens. | R | [Genome Biology 2024](https://doi.org/10.1186/s13059-024-03254-2) | ![](https://img.shields.io/github/stars/Katsevich-Lab/sceptre?style=flat-square&logo=github&label=) |

### Copy number, clonality & immune repertoire

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [inferCNV](https://github.com/broadinstitute/infercnv) | Infers large-scale copy number changes in tumour cells by comparing smoothed expression against reference normal cells. | R |  | ![](https://img.shields.io/github/stars/broadinstitute/infercnv?style=flat-square&logo=github&label=) |
| [scRepertoire](https://github.com/BorchLab/scRepertoire) | R toolkit for single-cell TCR/BCR clonotype quantification, diversity and overlap, integrated with Seurat/SingleCellExperiment. | R | [PLOS Computational Biology 2025](https://doi.org/10.1371/journal.pcbi.1012760) | ![](https://img.shields.io/github/stars/BorchLab/scRepertoire?style=flat-square&logo=github&label=) |
| [CopyKAT](https://github.com/navinlabcode/copykat) | Bayesian segmentation of scRNA-seq to infer copy number, separate aneuploid tumour from diploid cells, and find subclones. | R | [Nature Biotechnology 2021](https://doi.org/10.1038/s41587-020-00795-2) | ![](https://img.shields.io/github/stars/navinlabcode/copykat?style=flat-square&logo=github&label=) |
| [scirpy](https://github.com/scverse/scirpy) | scverse toolkit for single-cell TCR/BCR data: clonotype definition, expansion, diversity and integration with transcriptomes. | Python | [Bioinformatics 2020](https://doi.org/10.1093/bioinformatics/btaa611) | ![](https://img.shields.io/github/stars/scverse/scirpy?style=flat-square&logo=github&label=) |
| [Numbat](https://github.com/kharchenkolab/numbat) | Haplotype-aware CNV inference combining allele imbalance and expression, reconstructing tumour clonal phylogenies. | R | [Nature Biotechnology 2023](https://doi.org/10.1038/s41587-022-01468-y) | ![](https://img.shields.io/github/stars/kharchenkolab/numbat?style=flat-square&logo=github&label=) |
| [Dandelion](https://github.com/tuonglab/dandelion) | Single-cell BCR/TCR V(D)J analysis: reannotation, clonotype networks and V(D)J-informed developmental trajectories. | Python | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01734-7) | ![](https://img.shields.io/github/stars/tuonglab/dandelion?style=flat-square&logo=github&label=) |
| [SCEVAN](https://github.com/AntonioDeFalco/SCEVAN) | Variational segmentation of scRNA-seq to call copy number, classify malignant cells and resolve clonal substructure. | R | [Nature Communications 2023](https://doi.org/10.1038/s41467-023-36790-9) | ![](https://img.shields.io/github/stars/AntonioDeFalco/SCEVAN?style=flat-square&logo=github&label=) |

**[⬆ back to top](#contents)**

## 🤖 AI & Foundation Models

### Single-cell foundation models

Large models pretrained on millions of cells.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [scGPT](https://github.com/bowang-lab/scGPT) | Generative pretrained transformer trained on 33M+ human cells; fine-tuned for annotation, batch integration, perturbation prediction and GRN inference. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02201-0) | ![](https://img.shields.io/github/stars/bowang-lab/scGPT?style=flat-square&logo=github&label=) |
| [State](https://github.com/ArcInstitute/state) | Arc Institute virtual-cell model predicting perturbation responses over cell sets; trained on ~170M observational and 100M+ perturbed cells. | Python | [Cell 2026](https://doi.org/10.1016/j.cell.2026.07.052) | ![](https://img.shields.io/github/stars/ArcInstitute/state?style=flat-square&logo=github&label=) |
| [scFoundation](https://github.com/biomap-research/scFoundation) | 100M-parameter asymmetric transformer pretrained on 50M+ human cells covering ~20k genes, using read-depth-aware masked pretraining. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02305-7) | ![](https://img.shields.io/github/stars/biomap-research/scFoundation?style=flat-square&logo=github&label=) |
| [scBERT](https://github.com/TencentAILabHealthcare/scBERT) | BERT-style transformer pretrained on ~1.1M unlabeled PanglaoDB cells, then fine-tuned for cell type annotation. | Python | [Nature Machine Intelligence 2022](https://doi.org/10.1038/s42256-022-00534-z) | ![](https://img.shields.io/github/stars/TencentAILabHealthcare/scBERT?style=flat-square&logo=github&label=) |
| [UCE (Universal Cell Embeddings)](https://github.com/snap-stanford/UCE) | Zero-shot, species-agnostic cell embeddings using protein-language-model gene tokens; built a 36M-cell atlas spanning eight species. | Python | [Nature 2026](https://doi.org/10.1038/s41586-026-10689-z) | ![](https://img.shields.io/github/stars/snap-stanford/UCE?style=flat-square&logo=github&label=) |
| [SCimilarity](https://github.com/Genentech/scimilarity) | Metric-learning model for fast cell-similarity search; queries a 23.4M-cell atlas from 412 human scRNA-seq studies. | Python | [Nature 2025](https://doi.org/10.1038/s41586-024-08411-y) | ![](https://img.shields.io/github/stars/Genentech/scimilarity?style=flat-square&logo=github&label=) |
| [TranscriptFormer](https://github.com/czi-ai/transcriptformer) | Generative cross-species model (CZI) trained on up to 112M cells from 12 species spanning 1.53 billion years of evolution. | Python | [Science 2026](https://doi.org/10.1126/science.aec8514) | ![](https://img.shields.io/github/stars/czi-ai/transcriptformer?style=flat-square&logo=github&label=) |
| [scPRINT](https://github.com/cantinilab/scPRINT) | Transformer pretrained on 50M+ CELLxGENE cells, designed for gene network inference plus denoising, batch correction and label prediction. | Python | [Nature Communications 2025](https://doi.org/10.1038/s41467-025-58699-1) | ![](https://img.shields.io/github/stars/cantinilab/scPRINT?style=flat-square&logo=github&label=) |
| [GeneCompass](https://github.com/xCompass-AI/GeneCompass) | Cross-species model pretrained on ~100M human and mouse cells, integrating prior knowledge such as GRNs and promoter sequences. | Python | [Cell Research 2024](https://doi.org/10.1038/s41422-024-01034-y) | ![](https://img.shields.io/github/stars/xCompass-AI/GeneCompass?style=flat-square&logo=github&label=) |
| [CellFM](https://github.com/biomed-AI/CellFM) | 800M-parameter RetNet-style model pretrained on ~100M human cells using MindSpore; annotation, perturbation and gene-function tasks. | Python | [Nature Communications 2025](https://doi.org/10.1038/s41467-025-59926-5) | ![](https://img.shields.io/github/stars/biomed-AI/CellFM?style=flat-square&logo=github&label=) |
| [CellPLM](https://github.com/OmicsML/CellPLM) | Cell language model treating cells as tokens and tissues as sentences; pretraining includes spatial data to learn cell-cell relations. | Python | [ICLR 2024](https://openreview.net/forum?id=BKXvPDekud) | ![](https://img.shields.io/github/stars/OmicsML/CellPLM?style=flat-square&logo=github&label=) |
| [scMulan](https://github.com/SuperBianC/scMulan) | 368M-parameter generative language model pretrained on 10M cells with metadata; zero-shot annotation, integration and conditional generation. | Python | [RECOMB (LNCS) 2024](https://doi.org/10.1007/978-1-0716-3989-4_57) | ![](https://img.shields.io/github/stars/SuperBianC/scMulan?style=flat-square&logo=github&label=) |
| [scLong](https://github.com/BaiDing1234/scLong) | Billion-parameter model pretrained on 48M cells, attending over all ~28k human genes to capture long-range gene context. | Python | [Nature Communications 2026](https://doi.org/10.1038/s41467-026-69102-y) | ![](https://img.shields.io/github/stars/BaiDing1234/scLong?style=flat-square&logo=github&label=) |
| [Geneformer](https://huggingface.co/ctheodoris/Geneformer) | Transformer using rank-value gene encoding; V1 pretrained on ~30M human cells, V2 on ~104M; supports in silico perturbation. | Python | [Nature 2023](https://doi.org/10.1038/s41586-023-06139-9) |  |

### Spatial & multimodal foundation models

Models that learn from spatial context, histology or several modalities.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Nicheformer](https://github.com/theislab/nicheformer) | Transformer pretrained on SpatialCorpus-110M (dissociated and spatial human/mouse cells); transfers spatial context to scRNA-seq data. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02814-z) | ![](https://img.shields.io/github/stars/theislab/nicheformer?style=flat-square&logo=github&label=) |
| [Novae](https://github.com/prism-oncology/novae) | Self-supervised graph attention model trained on ~30M spatial cells across 18 tissues; zero-shot spatial domains and batch correction. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02899-6) | ![](https://img.shields.io/github/stars/prism-oncology/novae?style=flat-square&logo=github&label=) |
| [Loki (OmiCLIP)](https://github.com/GuangyuWangLab2021/Loki) | Contrastive H&E-transcriptomics model trained on 2.2M Visium image-expression pairs; supports alignment, annotation, deconvolution and expression prediction. | Python | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02707-1) | ![](https://img.shields.io/github/stars/GuangyuWangLab2021/Loki?style=flat-square&logo=github&label=) |
| [scGPT-spatial](https://github.com/bowang-lab/scGPT-spatial) | scGPT continually pretrained on SpatialHuman30M (Visium, Visium HD, MERFISH, Xenium) with mixture-of-experts decoders for spatial tasks. | Python | [bioRxiv 2025](https://doi.org/10.1101/2025.02.05.636714) *(preprint)* | ![](https://img.shields.io/github/stars/bowang-lab/scGPT-spatial?style=flat-square&logo=github&label=) |
| [SToFM](https://github.com/PharMolix/SToFM) | Multi-scale spatial transcriptomics model using an SE(2) Transformer; pretrained on SToCorpus-88M (88M cells, six technologies). | Python | [ICML 2025](https://proceedings.mlr.press/v267/zhao25p.html) | ![](https://img.shields.io/github/stars/PharMolix/SToFM?style=flat-square&logo=github&label=) |
| [STPath](https://github.com/Graph-and-Geometric-Learning/STPath) | Generative model predicting spatial expression of 38,984 genes from whole-slide H&E images; trained on HEST-1k and STimage-1K4M. | Python | [npj Digital Medicine 2025](https://doi.org/10.1038/s41746-025-02020-3) | ![](https://img.shields.io/github/stars/Graph-and-Geometric-Learning/STPath?style=flat-square&logo=github&label=) |
| [CELLama](https://github.com/portrai-io/CELLama) | Turns cell expression and metadata into sentences embedded by a language model; cell typing and spatial-context analysis. | Python | [Advanced Science 2026](https://doi.org/10.1002/advs.202513210) | ![](https://img.shields.io/github/stars/portrai-io/CELLama?style=flat-square&logo=github&label=) |
| [SpatialFormer](https://github.com/TerminatorJ/Spatialformer) | CNN-transformer pretrained on 17M Xenium cells, learning subcellular transcript layout and niche context; annotation, batch correction, co-localization. | Python | [Nature Computational Science 2026](https://doi.org/10.1038/s43588-026-01016-7) | ![](https://img.shields.io/github/stars/TerminatorJ/Spatialformer?style=flat-square&logo=github&label=) |

### LLMs & agents

Language models and agents that annotate cells or run analyses.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Biomni](https://github.com/snap-stanford/Biomni) | General-purpose biomedical agent combining LLM reasoning, retrieval and code execution over curated tools, databases and protocols. | Python | [Science 2026](https://doi.org/10.1126/science.adz4351) | ![](https://img.shields.io/github/stars/snap-stanford/Biomni?style=flat-square&logo=github&label=) |
| [Cell2Sentence (C2S-Scale)](https://github.com/vandijklab/cell2sentence) | Encodes cells as ranked gene-name sentences for LLM training; C2S-Scale extends this to Gemma-2 models up to 27B parameters. | Python | [ICML 2024](https://proceedings.mlr.press/v235/levine24a.html) | ![](https://img.shields.io/github/stars/vandijklab/cell2sentence?style=flat-square&logo=github&label=) |
| [GenePT](https://github.com/yiqunchen/GenePT) | Gene and cell embeddings built from GPT-3.5 text embeddings of gene descriptions, without expression-based pretraining. | Python | [Nature Biomedical Engineering 2025](https://doi.org/10.1038/s41551-024-01284-6) | ![](https://img.shields.io/github/stars/yiqunchen/GenePT?style=flat-square&logo=github&label=) |
| [CellVoyager](https://github.com/zou-group/CellVoyager) | LLM agent that autonomously proposes and runs new scRNA-seq analyses in Jupyter notebooks, re-analyzing published datasets. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-026-03029-6) | ![](https://img.shields.io/github/stars/zou-group/CellVoyager?style=flat-square&logo=github&label=) |
| [GPTCelltype](https://github.com/Winnie09/GPTCelltype) | R package and study showing GPT-4 annotates cell types from marker genes, agreeing well with manual annotations. | R | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02235-4) | ![](https://img.shields.io/github/stars/Winnie09/GPTCelltype?style=flat-square&logo=github&label=) |
| [CellWhisperer](https://github.com/epigen/CellWhisperer) | Contrastive transcriptome-text embedding trained on ~1M RNA-seq profiles plus an LLM for chat-based exploration in CELLxGENE. | Python | [Nature Biotechnology 2025](https://doi.org/10.1038/s41587-025-02857-9) | ![](https://img.shields.io/github/stars/epigen/CellWhisperer?style=flat-square&logo=github&label=) |
| [SpatialAgent](https://github.com/Genentech/SpatialAgent) | LLM agent for spatial biology: gene-panel design, cell annotation, cell-cell communication analysis and hypothesis generation. | Python | [bioRxiv 2025](https://doi.org/10.1101/2025.04.03.646459) *(preprint)* | ![](https://img.shields.io/github/stars/Genentech/SpatialAgent?style=flat-square&logo=github&label=) |
| [CASSIA](https://github.com/ElliotXie/CASSIA) | Multi-agent LLM framework for reference-free, interpretable cell type annotation with validation and quality scoring. | Python | [Nature Communications 2026](https://doi.org/10.1038/s41467-025-67084-x) | ![](https://img.shields.io/github/stars/ElliotXie/CASSIA?style=flat-square&logo=github&label=) |

**[⬆ back to top](#contents)**

## 📊 Benchmarks & Evaluation

### Benchmarks & evaluation

Independent comparisons to consult before picking a method.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Open Problems in Single-Cell Analysis](https://openproblems.bio) | Living, community-guided benchmarking platform with formalized single-cell tasks, datasets, metrics and public leaderboards. | Python/R | [Nature Biotechnology 2025](https://doi.org/10.1038/s41587-025-02694-w) | ![](https://img.shields.io/github/stars/openproblems-bio/openproblems?style=flat-square&logo=github&label=) |
| [scIB](https://github.com/theislab/scib) | Benchmark of 68 method-preprocessing combinations on 13 atlas-level integration tasks with 14 metrics; reusable scib metrics package. | Python | [Nature Methods 2022](https://doi.org/10.1038/s41592-021-01336-8) | ![](https://img.shields.io/github/stars/theislab/scib?style=flat-square&logo=github&label=) |
| [dynbenchmark](https://github.com/dynverse/dynbenchmark) | Comparison of 45 trajectory inference methods on 110 real and 229 synthetic datasets; underlies the dynverse toolkit. | R | [Nature Biotechnology 2019](https://doi.org/10.1038/s41587-019-0071-9) | ![](https://img.shields.io/github/stars/dynverse/dynbenchmark?style=flat-square&logo=github&label=) |
| [BEELINE](https://github.com/Murali-group/Beeline) | Framework benchmarking GRN inference from scRNA-seq using synthetic networks, curated Boolean models and experimental datasets. | Python | [Nature Methods 2020](https://doi.org/10.1038/s41592-019-0690-6) | ![](https://img.shields.io/github/stars/Murali-group/Beeline?style=flat-square&logo=github&label=) |
| [Virtual Cell Challenge](https://virtualcellchallenge.org) | Arc Institute's annual competition predicting CRISPRi perturbation responses; 2026 edition tests zero-shot transfer to unseen cell lines. | Python | [Cell 2025](https://doi.org/10.1016/j.cell.2025.06.008) | ![](https://img.shields.io/github/stars/ArcInstitute/cell-eval?style=flat-square&logo=github&label=) |
| [SpatialBenchmarking (Li et al.)](https://github.com/QuKunLab/SpatialBenchmarking) | Benchmark of 16 methods integrating scRNA-seq with spatial data for gene imputation and spot deconvolution (45 paired datasets). | Python | [Nature Methods 2022](https://doi.org/10.1038/s41592-022-01480-9) | ![](https://img.shields.io/github/stars/QuKunLab/SpatialBenchmarking?style=flat-square&logo=github&label=) |
| [scPerturBench](https://github.com/bm2-lab/scPerturBench) | Benchmark of 27 genetic and chemical perturbation-response methods on 29 datasets, testing generalization to unseen contexts and perturbations. | Python | [Nature Methods 2026](https://doi.org/10.1038/s41592-025-02980-0) | ![](https://img.shields.io/github/stars/bm2-lab/scPerturBench?style=flat-square&logo=github&label=) |
| [Linear baselines for perturbation prediction](https://github.com/const-ae/linear_perturbation_prediction-Paper) | Shows foundation and deep-learning perturbation models do not beat simple linear/additive baselines on single and double perturbations. | R | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02772-6) | ![](https://img.shields.io/github/stars/const-ae/linear_perturbation_prediction-Paper?style=flat-square&logo=github&label=) |
| [Zero-shot evaluation of single-cell foundation models](https://github.com/microsoft/zero-shot-scfoundation) | Shows zero-shot scGPT and Geneformer embeddings can underperform HVG selection and scVI for cell clustering and batch integration. | Python | [Genome Biology 2025](https://doi.org/10.1186/s13059-025-03574-x) | ![](https://img.shields.io/github/stars/microsoft/zero-shot-scfoundation?style=flat-square&logo=github&label=) |
| [Systema](https://github.com/mlbio-epfl/systema) | Evaluation framework separating perturbation-specific effects from systematic control-vs-perturbed variation that inflates standard metrics. | Python | [Nature Biotechnology 2026](https://doi.org/10.1038/s41587-025-02777-8) | ![](https://img.shields.io/github/stars/mlbio-epfl/systema?style=flat-square&logo=github&label=) |
| [SDMBench (spatial clustering benchmark)](https://github.com/zhaofangyuan98/SDMBench) | Benchmark of 13 spatial clustering/domain methods on 34 spatial transcriptomics datasets; accuracy, continuity, marker detection, scalability. | Python | [Nature Methods 2024](https://doi.org/10.1038/s41592-024-02215-8) | ![](https://img.shields.io/github/stars/zhaofangyuan98/SDMBench?style=flat-square&logo=github&label=) |
| [PertEval-scFM](https://github.com/aaronwtr/PertEval) | Standardized framework testing whether zero-shot scFM embeddings improve perturbation-effect prediction; finds limited gains over simple baselines. | Python | [ICML 2025](https://proceedings.mlr.press/v267/wenteler25a.html) | ![](https://img.shields.io/github/stars/aaronwtr/PertEval?style=flat-square&logo=github&label=) |
| [Spotless](https://github.com/saeyslab/spotless-benchmark) | Reproducible Nextflow benchmark of spatial deconvolution methods on simulated and real datasets. | R | [eLife 2024](https://doi.org/10.7554/eLife.88431) | ![](https://img.shields.io/github/stars/saeyslab/spotless-benchmark?style=flat-square&logo=github&label=) |
| [BenchmarkST](https://github.com/maiziezhoulab/BenchmarkST) | Benchmark of clustering, slice alignment and integration methods for spatial transcriptomics across many datasets. | Python | [Genome Biology 2024](https://doi.org/10.1186/s13059-024-03361-0) | ![](https://img.shields.io/github/stars/maiziezhoulab/BenchmarkST?style=flat-square&logo=github&label=) |

**[⬆ back to top](#contents)**

## 📦 Data

### Atlases, data portals & databases

| Resource | Description | Paper |
| --- | --- | --- |
| [HEST-1k](https://github.com/mahmoodlab/HEST) | 1,000+ spatial transcriptomics samples paired with H&E whole-slide images, plus loading library and expression-prediction benchmark. | [NeurIPS 2024](https://doi.org/10.48550/arXiv.2406.16192) |
| [Tabula Muris / Tabula Muris Senis](https://tabula-muris.sf.czbiohub.org/) | Single-cell transcriptomic atlases of 20 mouse organs (Tabula Muris) and of tissue ageing (Tabula Muris Senis). | [Nature 2018](https://doi.org/10.1038/s41586-018-0590-4) |
| [CZ CELLxGENE Discover & Census](https://cellxgene.cziscience.com/) | Curated, standardized single-cell data platform with web exploration and the Census API for programmatic Python/R access. | [Nucleic Acids Research 2025](https://doi.org/10.1093/nar/gkae1142) |
| [Allen Brain Cell Atlas (ABC Atlas)](https://brain-map.org/bkp/explore/abc-atlas) | Allen Institute platform to explore and download brain cell-type atlases: whole mouse brain scRNA-seq/MERFISH, human brain and more. | [Nature 2023](https://doi.org/10.1038/s41586-023-06812-z) |
| [spatialLIBD](https://research.libd.org/spatialLIBD/) | R/Bioconductor package and web apps to access and explore LIBD human brain Visium datasets, such as DLPFC. | [BMC Genomics 2022](https://doi.org/10.1186/s12864-022-08601-w) |
| [Broad Single Cell Portal](https://singlecell.broadinstitute.org/single_cell) | Self-service Broad portal for sharing, visualizing and downloading single-cell and spatial studies with interactive gene views. | [bioRxiv 2023](https://doi.org/10.1101/2023.07.13.548886) *(preprint)* |
| [Tabula Sapiens](https://tabula-sapiens.sf.czbiohub.org/) | Multi-organ human single-cell transcriptomic reference atlas; Tabula Sapiens 2.0 spans ~1.1 million cells from 28 tissues. | [Science 2022](https://doi.org/10.1126/science.abl4896) |
| [UCSC Cell Browser](https://cells.ucsc.edu/) | Web viewer hosting hundreds of published single-cell datasets, plus open-source tools to build your own browser. | [Bioinformatics 2021](https://doi.org/10.1093/bioinformatics/btab503) |
| [Human Cell Atlas Data Portal](https://data.humancellatlas.org/) | Official repository for Human Cell Atlas data: browse and download raw sequencing data, metadata and expression matrices. | [eLife 2017](https://doi.org/10.7554/eLife.27041) |
| [DISCO](https://disco.bii.a-star.edu.sg/) | Database of deeply integrated human single-cell omics data, with harmonized metadata, tissue atlases, and online annotation and integration tools. | [Nucleic Acids Research 2022](https://doi.org/10.1093/nar/gkab1020) |
| [Single Cell Expression Atlas (EMBL-EBI)](https://www.ebi.ac.uk/gxa/sc/home) | EMBL-EBI resource reanalysing public single-cell RNA-seq datasets with standardized pipelines across many species, including marker genes. | [Nucleic Acids Research 2024](https://doi.org/10.1093/nar/gkad1021) |
| [CellMarker 2.0](http://117.50.127.228/CellMarker/) | Manually curated database of human and mouse cell-type markers, with web tools for single-cell data analysis. | [Nucleic Acids Research 2023](https://doi.org/10.1093/nar/gkac947) |
| [PanglaoDB](https://panglaodb.se/) | Database of uniformly processed mouse and human scRNA-seq samples and curated cell-type marker genes. | [Database (Oxford) 2019](https://doi.org/10.1093/database/baz046) |
| [SODB (Spatial Omics DataBase)](https://gene.ai.tencent.com/SpatialOmics/) | Spatial omics database with >2,400 experiments from >25 technologies, unified downloads and interactive analysis modules. | [Nature Methods 2023](https://doi.org/10.1038/s41592-023-01773-7) |
| [STOmicsDB](https://db.cngb.org/stomics/) | CNGB spatial transcriptomics hub for data archiving and sharing, with curated, annotated public datasets and visualization. | [Nucleic Acids Research 2024](https://doi.org/10.1093/nar/gkad933) |
| [HuBMAP Data Portal](https://portal.hubmapconsortium.org/) | NIH Human BioMolecular Atlas Program portal for single-cell, spatial and imaging maps of healthy human tissues. | [Nature 2019](https://doi.org/10.1038/s41586-019-1629-x) |
| [HTAN Data Portal](https://humantumoratlas.org/) | NCI Human Tumor Atlas Network portal with single-cell, spatial and imaging data charting cancer transitions. | [Cell 2020](https://doi.org/10.1016/j.cell.2020.03.053) |
| [10x Genomics Datasets](https://www.10xgenomics.com/datasets) | Free example datasets from 10x Chromium, Visium (including HD) and Xenium platforms, with processed outputs. |  |

### Simulation

Synthetic data with known ground truth for benchmarking.

| Tool | Description | Lang | Paper | Stars |
| --- | --- | --- | --- | --- |
| [Splatter](https://github.com/Oshlack/splatter) | Bioconductor package simulating scRNA-seq counts with groups, paths and batches; offers a common interface to other simulators. | R | [Genome Biology 2017](https://doi.org/10.1186/s13059-017-1305-0) | ![](https://img.shields.io/github/stars/Oshlack/splatter?style=flat-square&logo=github&label=) |
| [scDesign3](https://github.com/SONGDONGYUAN1994/scDesign3) | Fits interpretable statistical models to real data to generate realistic synthetic single-cell and spatial omics data. | R | [Nature Biotechnology 2024](https://doi.org/10.1038/s41587-023-01772-1) | ![](https://img.shields.io/github/stars/SONGDONGYUAN1994/scDesign3?style=flat-square&logo=github&label=) |
| [SERGIO](https://github.com/PayamDiba/SERGIO) | Python simulator generating single-cell expression from user-defined gene regulatory networks, at steady state or along differentiation. | Python | [Cell Systems 2020](https://doi.org/10.1016/j.cels.2020.08.003) | ![](https://img.shields.io/github/stars/PayamDiba/SERGIO?style=flat-square&logo=github&label=) |
| [dyngen](https://github.com/dynverse/dyngen) | Multi-modal simulator of single cells undergoing dynamic processes, driven by gene regulatory networks, for benchmarking methods. | R | [Nature Communications 2021](https://doi.org/10.1038/s41467-021-24152-2) | ![](https://img.shields.io/github/stars/dynverse/dyngen?style=flat-square&logo=github&label=) |
| [scMultiSim](https://github.com/ZhangLabGT/scMultiSim) | Simulates single-cell multi-omics and spatial data guided by gene regulatory networks and cell–cell interactions. | R | [Nature Methods 2025](https://doi.org/10.1038/s41592-025-02651-0) | ![](https://img.shields.io/github/stars/ZhangLabGT/scMultiSim?style=flat-square&logo=github&label=) |
| [scCube](https://github.com/ZJUFanLab/scCube) | Python package for reproducible, platform-diverse simulation of spatial transcriptomics with customizable cell-type spatial patterns. | Python | [Nature Communications 2024](https://doi.org/10.1038/s41467-024-49445-0) | ![](https://img.shields.io/github/stars/ZJUFanLab/scCube?style=flat-square&logo=github&label=) |
| [SymSim](https://github.com/YosefLab/SymSim) | R package simulating scRNA-seq with extrinsic, intrinsic (kinetic) and technical variation, plus tree-based population structure. | R | [Nature Communications 2019](https://doi.org/10.1038/s41467-019-10500-w) | ![](https://img.shields.io/github/stars/YosefLab/SymSim?style=flat-square&logo=github&label=) |
| [SRTsim](https://github.com/xzhoulab/SRTsim) | R framework for reproducible spatially resolved transcriptomics simulation that preserves spatial expression patterns, for benchmarking. | R | [Genome Biology 2023](https://doi.org/10.1186/s13059-023-02879-z) | ![](https://img.shields.io/github/stars/xzhoulab/SRTsim?style=flat-square&logo=github&label=) |

**[⬆ back to top](#contents)**

## Related lists

- [awesome-single-cell](https://github.com/seandavi/awesome-single-cell) – The largest community list of single-cell software and data resources.
- [awesome_spatial_omics](https://github.com/crazyhottommy/awesome_spatial_omics) – Tools and notes for spatial omics.
- [awesome-spatial-omics](https://github.com/drighelli/awesome-spatial-omics) – Spatial omics technologies and methods.
- [awesome-single-cell-foundation](https://github.com/KatarinaYuan/awesome-single-cell-foundation) – Papers on single-cell foundation models.

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) first. If you spot a dead link, an archived repository or a wrong paper, please open an issue.

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=wrab12/awesome-spatial-transcriptomics&type=Date)](https://star-history.com/#wrab12/awesome-spatial-transcriptomics&Date)

---

If this list helps you, please consider giving it a ⭐ **Star**, and feel free to **follow** [@wrab12](https://github.com/wrab12) for updates!

[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://creativecommons.org/publicdomain/zero/1.0/)

To the extent possible under law, the contributors have waived all copyright and related rights to this work.
