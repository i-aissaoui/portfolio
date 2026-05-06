# PhD Position: Visualization of the Plausibility and Bias for Data Resources (PC5)

**Rank**: 16
**Location**: gif-sur-yvette, france
**Expected Start**: spring 2026
**Link**: https://edtlab.fr/en/join-us/phd-pc5-phd2-estimatingbiases

## 📬 Contacts
- tobias.isenberg@inria.fr
- maria-jesus.lobo-gunther@ign.fr

## 📋 Requirements
- master degree in computer science or related field
- interest in interactive data visualization and analysis
- excellent programming skills; in particular, with experiences in computer graphics, visualization (e.g., d3, altair, plotly, ...)
- good written and spoken communication in english
- past experience in data visualization
- past publications preferred but not required

## 🚀 Application Process
Check the website link for details.

## 📝 Description Snippet
in this phd research project we will investigate how to automatically classify the plausibility in datasets collected for a geographic or otherwise spatial data, and how to visualize it. we will rely on past results that detected data biases and data errors based on a manual analysis, and will investigate how to use machine learning models to automate this process. in addition, we will investigate how best to depict the different types and degrees of data bias, data imprecision, and data error.

## 📄 Full Scraped Content
## context

digital twins [[6](#timjlg-ref6)] are virtual representations of real-world products, systems, or processes, enabling simulation, integration, testing, monitoring, and maintenance. they play a pivotal role in optimizing complex systems across a wide range of domains, from industrial manufacturing and energy to environmental monitoring and healthcare.

the engineering digital twin [edt program](https://edtlab.fr/en/), funded by the france 2030 investment plan, is a national initiative aimed at advancing the scientific and technical foundations of digital twin engineering in france and europe. by bringing together leading academic and industrial partners, edt seeks to strengthen the bases for the design, use, and deployment of digital twins, addressing key open challenges in model hybridization, composability, development methodologies, digital coupling, and human–twin interaction.

in the field of visualization, questions on the visualization of data uncertainty have been a core part of the research to date [e.g., [1](#timjlg-ref1)]. yet past work largely often silently considered data uncertainty to arise (primarily) from measurement uncertainty or as connected to some statistical analysis of captured data values. only relatively recently have questions of implicit notions of error [[4](#timjlg-ref4)] or data hunches [[3](#timjlg-ref3)] entered the discussions of this general problem—these cover aspects of data imprecision that can arise from various sources: e.g., different forms of measurement or data recording, biases in how people access data, and even intentionally introduced errors. for example, spatial geographic data may not only come from systematically controlled sources but also from, for instance, from multiple sets of data that come from different institutions with different data collection policies, from contributions from the general public, or even by sourcing data from social media. naturally, this introduces a variety of different levels of data quality and plausibility for spatial data. sometimes experts are aware of these data caveats (that exist even for professionally collected datasets) and we can try to visualize them [[3](#timjlg-ref3)–[5](#timjlg-ref5)], yet in other cases the data collection happens in a way that this knowledge is not available—e.g., when data is retro-actively collected from sources that were not (primarily) created for recording this data in the first place—and we have to find ways of recovering such information retroactively and without access to the ground truth [[2](#timjlg-ref2)]. for instance, image collection sites such as flickr partially show geo-located images, from which locations of certain points of interest can be extracted. in this specific example we ourselves recovered species distribution data from images posted on photo sharing platforms, and found that such geographic data is subject to many biases and errors. yet this data analysis so far [[2](#timjlg-ref2)] has been a manual process and also only recovers anecdotal information about the existence of data errors and biases. in this phd research project we will investigate if those results generalize to other kinds of spatial data (e.g., automatically detected features in remote sensing imagery, other volunteered geographic information, other forms of 2d and 3d spatial data). then we will investigate ways to automate the error and bias identification process as well as to quantify the existence of such biases and errors in some form of plausibility measure, to be visualized in the digital twin [[6](#timjlg-ref6)].

## thesis objectives

### main objective and method

the main objective is to generalize the mentioned past approaches for the visualization of data errors and data bias for spatial data, and to find suitable general error/bias identification methods and visualization techniques. based on this generic investigation we will focus on the edt use case “pc10a—geo digital twins research initiatives”. specifically, for a future digital twin of france, we would like to develop one or more application cases that demonstrate the new techniques and explore how we can augment its data with data from social media and other less reliable sources. and as part of this work we also hope to establish the topic of data error and data bias visualization, similar to what exists for uncertainty visualization. a second use case that we would like to investigate is “uc14—digital twin factory” where similar spatial data arises and, thus, questions of data plausibility and accuracy. 

the results of this thesis will directly contribute to the artemis platform, an open-source framework set to become a benchmark in the field.

### specific approach and research questions
based on the different visual and interactive identification strategies we had explored in the past [[2](#timjlg-ref2)], we plan to investigate how we can systematically identify various forms of data error or data bias on the one side or, from a different perspective, establish a form of data plausibility measure. we want to do this in a sustainable way, one that does not (only) rely on manual data classification. for this purpose we may investigate approaches from machine learning that can identify “red flags” for data plausibility automatically. as a starting point we will use the visual patterns we have previously identified that indicate, for instance, data manipulation. for instance, certain patterns we found in our motion plausibility profile representation [[2](#timjlg-ref2)] indicate that geo-location data has been intentionally adjusted by the data authors (fig. 1)—with the likely (understandable) goal to conceal specific locations of where pictures were taken.

this prior success in manual identification proves the viability of using trajectory-based features to detect anomalies. following this approach, we expect to define other plausibility measures that reflect knowledge on data characteristics, data sources, and their creation processes. the logical next step is to automate and scale this data processing. to do so, we first need to determine how to translate the visual, pattern-based insights from a tool like the motion plausibility profile into a quantitative, machine readable format. furthermore, we need to determine which of the many known error types can be reliably detected by an automated system and which machine learning models are most effective for this specific task. finally, understanding the limitations and prerequisites of such an approach—for instance, how much data is required for a model to be effective—is decisive in creating a robust and generalizable methodology. once we have a good understanding of biases and errors, the next question is how to best represent them for the use in the digital twin application, in a way that can make use of the degree to which they can be useful.

we thus aim to address the following research questions in this project:
- which types of data errors and biases for volunteered or even systematically collected geographic information can be reliably identified with the help of machine learning? can we take advantage of different sources for the same data, such as volunteered data (e.g., by citizen scientists or by initiatives such as openstreetmap.org) and professionally curated data, and judge based on their differences to understand data errors and biases? can we take advantage of knowledge about the way of data capture or collection (e.g., the characteristics of lidar hd data, and its different availability)?
- can we, and if so how, make use of existing visual representations (e.g., motion plausibility profiles, neighborhood analyses, etc. [[2](#timjlg-ref2)]) for the machine-learning-based analysis?
- which machine learning approaches can effectively be used for the analysis of data biases and data errors?
- what are the dataset prerequisites (e.g., dataset size, quality of metadata, diversity of data contributors) for a successful analysis?
- how to best visualize the established data plausibility from different sources in a digital twin representation?
- how does the data plausibility change over time? what strategies can help us assess the temporal evolution of the data and how can we ensure accuracy over time?

### expected outcome and impact
the primary outcome of this project will be a scientifically-grounded methodology for automatically quantifying the plausibility of geospatial data, irrespective of its original source. this moves beyond a simple software implementation to establish a new, scalable approach for data validation in this domain. the tangible result of this methodology will be a system capable of processing raw data and assigning each data point a quantitative anomaly score, which effectively flags suspicious data for review, based on the model’s reconstruction error. finally, this work could lead to new techniques of the application of ai models to extract data for a digital twin from social media text and image data. the broader impact of this work lies in its generalizability. the results will:
- validate the effectiveness of translating patterns from a human-centric visual analysis tool into a successful machine learning pipeline,
- provide a clear understanding of which specific types of data errors and biases can be reliably identified using this automated approach, and
- offer a framework that could be adapted to other domains facing similar data quality challenges, providing insights into the necessary prerequisites for this kind of analysis.

## work environment

the phd candidate will be co-supervised by [tobias isenberg](https://tobias.isenberg.cc/), [inria](https://www.inria.fr/en), and [maria jesus lobo-gunther](https://www.umr-lastig.fr/maria-jesus-lobo/), [ign](https://www.umr-lastig.fr/maria-jesus-lobo/www.ign.fr), and will work primarily within inria's [aviz](https://www.aviz.fr/) team but will closely collaborate also with the [geovis](https://umrlastig.github.io/geovis/) team at ign.

## what you will gain from this phd

this phd offers the opportunity to:

- develop highly sought-after skills in system modeling, real-time data processing, and collaborative innovation.
- collaborate with leading partners (inria, cea, cnrs, etc.) and validate your research on real-world industrial use cases.
- join a network of phd candidates within the edt program, fostering collaboration, peer support, and interdisciplinary exchanges.
- contribute to an open-source platform (artemis) and publish in international conferences and journals.
- gain recognition in a rapidly growing field, with career prospects in academic research, industrial r&d, or entrepreneurship.

upon completion, you will be positioned as a recognized expert in a key domain for industry and research, with diverse professional opportunities in france and internationally.

PhD PC5 Visualization of the Plausibility and Bias for Data Resources used in a Geographic Digital Twin - EDT PC 5 Gif-sur-Yvette, France Published: April 1, 2026 Expected Start: Spring 2026 In this PhD research project we will investigate how to automatically classify the plausibility in datasets collected for a geographic or otherwise spatial data, and how to visualize it. We will rely on past results that detected data biases and data errors based on a manual analysis, and will investigate how to use machine learning models to automate this process. In addition, we will investigate how best to depict the different types and degrees of data bias, data imprecision, and data error. Key Requirements Master degree in computer science or related field Interest in interactive data visualization and analysis +4 more requirements
