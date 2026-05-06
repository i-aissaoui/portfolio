# PhD Position: Automatic construction of a digital model from real-world scenes (PC5)

**Rank**: 15
**Location**: dijon - paris, france
**Expected Start**: q4 2026
**Link**: https://edtlab.fr/en/join-us/phd-pc5-phd1-reconstructing3d

## 📬 Contacts
- romain.raffin@ube.fr
- gilles.rougeron@cea.fr
- jeremie.le-garrec@cea.fr

## 📋 Requirements
- master degree in relevant field
- experience with digital twins
- programming skills

## 🚀 Application Process
Check the website link for details.

## 📝 Description Snippet
extraction of the geometry, the kinematics, and the mechanical properties using machine learning of a single object from videos or photos.

## 📄 Full Scraped Content
## context

digital twins [[6](#timjlg-ref6)] are virtual representations of real-world products, systems, or processes, enabling simulation, integration, testing, monitoring, and maintenance. they play a pivotal role in optimizing complex systems across a wide range of domains, from industrial manufacturing and energy to environmental monitoring and healthcare.

the engineering digital twin [edt program](https://edtlab.fr/en/), funded by the france 2030 investment plan, is a national initiative aimed at advancing the scientific and technical foundations of digital twin engineering in france and europe. by bringing together leading academic and industrial partners, edt seeks to strengthen the bases for the design, use, and deployment of digital twins, addressing key open challenges in model hybridization, composability, development methodologies, digital coupling, and human–twin interaction.

the creation of digital 3d models of real objects is a major challenge in the digital transition. it enables, for example, the development of digital twins and the creation of datasets for learning methods. however, manual creation using computer graphics is time-consuming and costly. the use of automatic methods is therefore essential.

in recent years, acquisition and reconstruction methods have undergone significant developments. first, capture hardware has become accessible, lightweight, and inexpensive, and acquisition procedures have been simplified. in addition, reconstruction methods have made considerable progress. for instance, nerfs (neural radiance fields [1]), introduced in 2020, made it possible through an implicit representation of the scene using a multi-layer perceptron neural network to generate images from novel viewpoints with unprecedented realism.

more recently, the 3d gaussian splatting method [2], introduced in 2023, has enabled through an explicit representation based on sets of gaussians optimized from captured images the retention of most of the photorealistic qualities of nerfs while allowing interactive visualization. finally, starting from video data capturing multiple viewpoints of a dynamic scene, this method has been extended to 4d gaussian splatting (4dgs), enabling the generation of volumetric videos [3].

however, these methods represent complex scenes as a single entity without distinguishing, for example, an object from its environment or from the subparts of the object. likewise, the captured geometry is intertwined with appearance, which itself results from the interaction between illumination and the local material at each point. these different aspects limit the possibilities for interacting with the captured scene.

## thesis objectives

this phd project aims to generate as-built digital models of a single object from a series of photographs or videos. the object will therefore not only be reconstructed in 3d but also segmented into subparts. its kinematics will be determined along with its physical characteristics. in this study, we will restrict ourselves to solid, multi-articulated, and non-deformable objects, described by coherent closed surfaces and volumes. brep-type representations will be preferred for industrial objects. the robustness of the process should allow the model to be incrementally enhanced or adapted through additional captures over time. the study will also consider heritage objects in order to increase the variability of the learning methods. key scientific challenges include:

- obtaining the most descriptive possible image and video data for real-world cases.
- the necessary disentanglement of geometry and appearance in order to generate images of the object in motion with a consistent appearance.
- the difficulty for 3dgs or 4dgs techniques in representing reflective, transparent, or even refractive objects, potentially with curved surfaces. in such cases, the extracted geometry is often quite far from reality, and this discrepancy may be amplified by capture noise.
- the specific challenges associated with heritage objects. these manufactured objects, produced in small quantities, do not follow contemporary industrial construction rules; their appearance can be complex and also depends on their state of preservation.

the results of this thesis will directly contribute to the artemis platform, an open-source framework set to become a benchmark in the field.

## work environment

the phd candidate will be co-supervised by romain raffin, universite de bourgogne, [lib](https://lib.ube.fr/equipes/modelisation-geometrique/) and gilles rougeron and jeremie le garrec cea list within [lsi](https://list.cea.fr/en/).

## what you will gain from this phd

this phd offers the opportunity to:

- develop highly sought-after skills in system modeling, real-time data processing, and collaborative innovation.
- collaborate with leading partners (inria, cea, cnrs, etc.) and validate your research on real-world industrial use cases.
- join a network of phd candidates within the edt program, fostering collaboration, peer support, and interdisciplinary exchanges.
- contribute to an open-source platform (artemis) and publish in international conferences and journals.
- gain recognition in a rapidly growing field, with career prospects in academic research, industrial r&d, or entrepreneurship.

upon completion, you will be positioned as a recognized expert in a key domain for industry and research, with diverse professional opportunities in france and internationally.

PhD PC5 Automatic construction of a digital model from real-world scenes - EDT Dijon - Paris, France Published: April 1, 2026 Expected Start: Q4 2026 Extraction of the geometry, the kinematics, and the mechanical properties using machine learning of a single object from videos or photos. Key Requirements Master degree in relevant field Experience with digital twins +1 more requirements
