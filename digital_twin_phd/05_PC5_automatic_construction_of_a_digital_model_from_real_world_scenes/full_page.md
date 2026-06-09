1. [Home](/en/)
2. [Join Us](/en/join-us)
3. Automatic construction of a digital model from real-world scenes

[EDT (Engineering of Digital Twins) project](https://edtlab.fr/) is funded by [France 2030](https://www.info.gouv.fr/grand-dossier/france-2030).

[Back to Careers](/en/join-us)

 

PC5  PhD

# Automatic construction of a digital model from real-world scenes

Location

Dijon - Paris, France

Expected Start

Q4 2026

## Context

Digital twins [[6](#timjlg-ref6)] are virtual representations of real-world products, systems, or processes, enabling simulation, integration, testing, monitoring, and maintenance. They play a pivotal role in optimizing complex systems across a wide range of domains, from industrial manufacturing and energy to environmental monitoring and healthcare.

The Engineering Digital Twin [EDT program](https://edtlab.fr/en/), funded by the France 2030 investment plan, is a national initiative aimed at advancing the scientific and technical foundations of digital twin engineering in France and Europe. By bringing together leading academic and industrial partners, EDT seeks to strengthen the bases for the design, use, and deployment of digital twins, addressing key open challenges in model hybridization, composability, development methodologies, digital coupling, and human–twin interaction.

The creation of digital 3D models of real objects is a major challenge in the digital transition. It enables, for example, the development of digital twins and the creation of datasets for learning methods. However, manual creation using computer graphics is time-consuming and costly. The use of automatic methods is therefore essential.

In recent years, acquisition and reconstruction methods have undergone significant developments. First, capture hardware has become accessible, lightweight, and inexpensive, and acquisition procedures have been simplified. In addition, reconstruction methods have made considerable progress. For instance, NeRFs (Neural Radiance Fields [1]), introduced in 2020, made it possible through an implicit representation of the scene using a Multi-Layer Perceptron neural network to generate images from novel viewpoints with unprecedented realism.

More recently, the 3D Gaussian Splatting method [2], introduced in 2023, has enabled through an explicit representation based on sets of Gaussians optimized from captured images the retention of most of the photorealistic qualities of NeRFs while allowing interactive visualization. Finally, starting from video data capturing multiple viewpoints of a dynamic scene, this method has been extended to 4D Gaussian Splatting (4DGS), enabling the generation of volumetric videos [3].

However, these methods represent complex scenes as a single entity without distinguishing, for example, an object from its environment or from the subparts of the object. Likewise, the captured geometry is intertwined with appearance, which itself results from the interaction between illumination and the local material at each point. These different aspects limit the possibilities for interacting with the captured scene.

## Thesis Objectives

This PhD project aims to generate as-built digital models of a single object from a series of photographs or videos. The object will therefore not only be reconstructed in 3D but also segmented into subparts. Its kinematics will be determined along with its physical characteristics. In this study, we will restrict ourselves to solid, multi-articulated, and non-deformable objects, described by coherent closed surfaces and volumes. BRep-type representations will be preferred for industrial objects. The robustness of the process should allow the model to be incrementally enhanced or adapted through additional captures over time. The study will also consider heritage objects in order to increase the variability of the learning methods. Key scientific challenges include:

* Obtaining the most descriptive possible image and video data for real-world cases.
* The necessary disentanglement of geometry and appearance in order to generate images of the object in motion with a consistent appearance.
* The difficulty for 3DGS or 4DGS techniques in representing reflective, transparent, or even refractive objects, potentially with curved surfaces. In such cases, the extracted geometry is often quite far from reality, and this discrepancy may be amplified by capture noise.
* The specific challenges associated with heritage objects. These manufactured objects, produced in small quantities, do not follow contemporary industrial construction rules; their appearance can be complex and also depends on their state of preservation.

The results of this thesis will directly contribute to the Artemis platform, an open-source framework set to become a benchmark in the field.

## Work Environment

The PhD candidate will be co-supervised by Romain Raffin, Universite de Bourgogne, [LIB](https://lib.ube.fr/equipes/modelisation-geometrique/) and Gilles Rougeron and Jeremie Le Garrec CEA LIST within [LSI](https://list.cea.fr/en/).

## What You Will Gain from This PhD

This PhD offers the opportunity to:

* Develop highly sought-after skills in system modeling, real-time data processing, and collaborative innovation.
* Collaborate with leading partners (Inria, CEA, CNRS, etc.) and validate your research on real-world industrial use cases.
* Join a network of PhD candidates within the EDT program, fostering collaboration, peer support, and interdisciplinary exchanges.
* Contribute to an open-source platform (Artemis) and publish in international conferences and journals.
* Gain recognition in a rapidly growing field, with career prospects in academic research, industrial R&D, or entrepreneurship.

Upon completion, you will be positioned as a recognized expert in a key domain for industry and research, with diverse professional opportunities in France and internationally.

### References

[1]

Benoît Combemale, Pascale Vicat-Blanc, Arnaud Blouin, Hind Bril El Haouzi, Jean-Michel Bruel, Julien Deantoni, Thierry Duval, Sébastien Gérard, & Jean-Marc Jézéquel (2025). Engineering Digital Twins: A Research Roadmap. *EDTconf 2025 - 2nd International Conference on Engineering Digital Twins*. <https://inria.hal.science/hal-05223776>

[2]

Mildenhall, P. P., Srinivasan, M., Tancik, J. T., Barron, R., & Ramamoorthi, R. (2020). NeRF: Representing scenes as neural radiance fields for view synthesis. *European Conference on Computer Vision (ECCV)*. <https://doi.org/10.1007/978-3-030-58452-8_24>

[3]

Kerbl, G., Kopanas, T., & Leimkuhler, G. (2023). 3d gaussian splatting for real- time radiance field rendering. *ACM Transactions on Graphics (ToG)*. <https://doi.org/10.1145/3592433>

[4]

Yang, Z., Yang, H., Pan, Z., Zhu, X., & Zhang, L. (2024). Real-Time Photorealistic Dynamic Scene Representation and Rendering with 4D Gaussian Splatting. *CVPR 2024*. <https://doi.org/10.1109/cvpr52733.2024.01920>

[5]

Ackermann, J., Kulhanek, J., Cai, S., Xu, H., Pollefeys, M., Wetzstein, G., & Guibas, L. (2025). CL-Splats: Continual Learning of Gaussian Splatting with Local Optimization. *ICCV*. <https://cl-splats.github.io/>

[6]

Guedon, A. & Lepetit, V. (2024). Sugar: Surface-aligned gaussian splatting for efficient 3d mesh reconstruction and high-quality mesh rendering. *IEEE/CVF Conference on Computer Vision and Pattern Recognition*. <https://doi.org/10.1109/cvpr52733.2024.00512>

[7]

Huang, B., Yu, Z., Chen, A., Geiger, A., & Gao, S. (2024). 2d gaussian splatting for geometrically accurate radiance fields. *ACM SIGGRAPH 2024 conference papers*. <https://doi.org/10.1145/3641519.3657428>

[8]

Guedon, A., Gomez, D., Maruani, N., Gong, B., Drettakis, G., & Ovsjanikov, M. (2025). MILo: Mesh-In-the-Loop Gaussian Splatting for Detailed and Efficient Surface Reconstruction. *ACM Transactions on Graphics*. <https://doi.org/10.1145/3763339>

[9]

Chen, C., Wei, J., Chen, T., Zhang, C., Yang, X., Zhang, S., & Liu, F. (2025). Cadcrafter: Generating computer-aided design models from unconstrained images. <https://doi.org/10.1109/cvpr52734.2025.01034>

[10]

Huang, Z., Sun, B., Delitzas, A., Chen, J., & Pollefeys, M. (2025). REACT3D: Recovering Articulations for Interactive Physical 3D Scenes. <https://doi.org/10.1109/lra.2026.3674028>

[11]

Cao, Z., Chen, Z., & Pan, L. (2025). PhysX-3D: Physical-Grounded 3D Asset Generation. <https://physx-3d.github.io/>

## Requirements

* Master degree in relevant field
* Experience with digital twins
* Programming skills

## Ready to Apply?

Send us your application including CV, cover letter, and relevant documents.

[Apply Now](mailto:romain.raffin@ube.fr?subject=Application%3A%20Automatic%20construction%20of%20a%20digital%20model%20from%20real-world%20scenes)   [View All Positions](/en/join-us)