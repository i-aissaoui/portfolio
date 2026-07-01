import os
import subprocess

letters = {
    "26_KU_Leuven_PhD_position_on_Causal_Machine_Learning_for_Indust": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Prof. Mathias Verbeke \\ KU Leuven \\ Leuven, Belgium}
\opening{Dear Prof. Mathias Verbeke,}

I am writing to express my strong interest in the PhD position focusing on Causal Machine Learning for Industrial Root Cause Analysis. Having reviewed your work at the M-Group, I am extremely motivated by the challenge of moving beyond pure predictive correlations into rigorous causal inference for complex industrial systems.

In my State Engineer thesis, "Gas Turbine Digital Twin," I engineered predictive maintenance architectures using ST-KDFormer and Temporal Convolutional Networks to predict thermodynamic degradation. While these deep learning models effectively captured sequential dependencies, I recognized the critical limitation of non-causal associative learning in high-stakes industrial environments. To address this, my Master's thesis, "Cardiovascular Medical Digital Twin," introduced PI-DeepONet, an architecture that explicitly constrained neural predictions to the causal 0D Windkessel physical equations via PyTorch Autograd. 

I am eager to transition this physics-informed intuition into formal Pearlian causal graphical models and structural causal models (SCMs) to identify root causes of machine failures, rather than just associative symptoms. My strong mathematical background and hands-on experience with industrial telemetry make me an excellent candidate for this causal ML position.

Thank you for your consideration.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "27_Leiden_Universi_PhD_Candidate_Formal_methods_in_Natural_Language_P": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ Leiden University \\ Leiden, Netherlands}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the PhD position focusing on Formal Methods in Natural Language Processing. As an AI \& Data Science Engineer, my research has consistently focused on bridging the gap between highly parameterized neural networks and rigorous, formal mathematical bounds.

In my recent engineering theses, I focused heavily on deterministic continuous-time models. Specifically, I engineered Medical\_MambaTS, leveraging linear-time state-space representations to process complex sequential data with strict mathematical guarantees. Unlike standard transformer attention mechanisms, the state-space formalism allows for exact analytical bounds on sequence generation. Furthermore, my work with Physics-Informed Operator Networks (PI-DeepONet) involved embedding strict formal constraints (differential equations) directly into the neural manifold.

I am highly motivated to apply this background in formal mathematical modeling to the domain of Natural Language Processing. The challenge of integrating formal methods (such as type theory, grammar formalisms, or algebraic structures) with large-scale NLP architectures is exactly the kind of foundational, cross-disciplinary research I wish to pursue at Leiden University.

Thank you for your time and consideration.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "28_Norwegian_Unive_PhD_Candidate_in_Secure_and_Trustworthy_Data_Shari": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ Norwegian University of Science and Technology \\ Trondheim, Norway}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the PhD position focusing on Secure and Trustworthy Data Sharing for Maritime AI Model Development. The maritime industry's shift towards autonomous and AI-driven operations requires exceptionally robust and secure data pipelines, a challenge I am highly prepared to tackle.

As an AI \& Data Science Engineer, I have extensive experience building scalable, secure data ingestion and processing systems. In my engineering theses, I developed the SST-KODA-MultiScale pipeline using PyArrow and Parquet to handle massive, high-frequency multivariate telemetry across distributed nodes. Crucially, my research focuses on the integrity of AI models under constrained conditions. My work on Physics-Informed Operator Networks (PI-DeepONet) and continuous-time state-space models (Medical\_MambaTS) required establishing trustworthy boundaries around deep learning predictions to ensure they remained faithful to underlying physical reality.

I am deeply interested in applying this rigorous approach to maritime AI. I aim to research secure federated learning, differential privacy, and encrypted data-sharing frameworks that allow shipping fleets to collaboratively train foundational AI models without compromising proprietary telemetry or exposing themselves to adversarial data-poisoning. 

I look forward to discussing my technical background with you in an interview.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "29_Inria_PhD_Position_FM_PhD_Position_FM_How_does_Reasoning": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Dr. Yufei Han \\ Inria \\ France}
\opening{Dear Dr. Han,}

I am writing to express my strong interest in the PhD position investigating how reasoning with Large Language Models can help repair vulnerabilities at the repository level. As an AI \& Data Science Engineer, the intersection of cybersecurity, formal code semantics, and neural reasoning is a research vector I am deeply passionate about.

My academic background centers on constraining highly complex neural representations using structural logic. In my Master's thesis, I utilized linear-time state-space models (Medical\_MambaTS) and Physics-Informed Neural Networks to ensure that sequence generation adhered strictly to predefined deterministic laws. I see a direct parallel to repo-level vulnerability repair: LLMs often hallucinate syntactically correct but semantically flawed patches. By framing code repositories as complex graph-based state spaces, we can leverage structured reasoning (such as Tree-of-Thought or symbolic solvers) to bound the LLM's patch generation, ensuring that the repaired code preserves the original semantic invariants while neutralizing the vulnerability.

I am highly motivated to contribute to Inria's research by developing neuro-symbolic reasoning frameworks that scale to entire codebases, ensuring trustworthy and automated security patching. I look forward to the possibility of an interview.

Thank you for your time.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "30_University_of_T_PhD_position_on_Dissecting_Algorithmic_Collusion": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ University of Twente \\ Enschede, Netherlands}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the PhD position focusing on Dissecting Algorithmic Collusion. As AI agents increasingly autonomously optimize pricing and market strategies, the risk of emergent, tacit collusion via reinforcement learning poses a critical regulatory and economic challenge.

As an AI \& Data Science Engineer, my research has focused on understanding and controlling the emergent behaviors of complex multi-agent and dynamic systems. In my engineering theses, I modeled highly chaotic environments using advanced sequence modeling (Medical\_MambaTS, ST-KDFormer) and constrained them using formal mathematical boundaries (Physics-Informed Neural Networks). I possess a strong theoretical background in game theory, state-space exploration, and objective function optimization.

I am eager to apply this technical depth to dissecting the "black box" of pricing algorithms. I intend to research how deep Q-learning and multi-agent reinforcement learning algorithms arrive at collusive Nash equilibria without explicit communication. By utilizing gradient tracing, interpretability methods, and counterfactual simulations, I aim to develop robust mathematical frameworks that can detect and mitigate anti-competitive algorithmic behavior.

I look forward to discussing my technical qualifications and research proposals with you.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "31_Cranfield_Unive_Development_and_optimisation_of_ultra-efficient_an": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ Cranfield University \\ Bedford, UK}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the PhD position regarding the development and optimization of ultra-efficient and power-dense ice protection systems for future aircraft. As an AI \& Data Science Engineer with deep expertise in thermodynamic modeling and aerospace constraints, I am exceptionally well-prepared for this project.

For my State Engineer thesis, I developed a highly complex "Gas Turbine Digital Twin." This required rigorous modeling of thermodynamic degradation, temperature gradients, and fluid dynamics within high-stress mechanical environments. I engineered hybrid neural architectures (ST-KDFormer, Temporal Convolutional Networks) to predict thermal anomalies while strictly adhering to the laws of energy conservation. Furthermore, my work on Physics-Informed Neural Networks (PI-DeepONet) successfully embedded fluid dynamic equations (0D Windkessel) directly into the neural training loop via PyTorch Autograd.

This exact intersection of computational fluid/thermal dynamics and advanced AI optimization is critical for next-generation ice protection systems. I am highly motivated to apply my digital twin architecture experience to optimize power density, simulate thermal distributions, and design ultra-efficient de-icing control systems for aerospace applications.

I would welcome the opportunity to discuss my Gas Turbine Digital Twin research with you in an interview.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "32_University_of_S_AI-enhanced_X-ray_CT_for_defect_detection_in_advan": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ University of Southampton \\ Southampton, UK}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the PhD position focusing on AI-enhanced X-ray CT for defect detection in advanced manufacturing. The challenge of translating high-dimensional, noisy volumetric data into precise, actionable defect intelligence aligns perfectly with my research expertise.

As an AI \& Data Science Engineer, I specialize in the rigorous processing of complex, multi-dimensional signal data. In my Master's thesis, "Cardiovascular Medical Digital Twin," I engineered the SST-KODA-MultiScale pipeline to handle massive, non-uniform telemetry, and deployed Medical\_MambaTS, a linear-time state-space architecture capable of exceptionally rapid inference. Furthermore, my State Engineer thesis ("Gas Turbine Digital Twin") required the detection of structural anomalies and mechanical degradation from high-dimensional sensor arrays.

I am highly motivated to apply these spatial-temporal architectures and anomaly detection frameworks to 3D X-ray CT volumetric data. I aim to research advanced 3D Convolutional and Vision Transformer architectures that can isolate micro-defects in advanced manufactured materials while remaining highly computationally efficient. My strong background in both medical imaging contexts and industrial predictive maintenance provides me with a unique, cross-disciplinary foundation for this project.

I look forward to discussing my technical background with you further.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "33_Inria_PhD_Position_FM_PhD_-_Robust_few-shot_learning_for": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Dr. Emilie Chouzenoux \\ Inria \\ France}
\opening{Dear Dr. Chouzenoux,}

I am writing to express my continued strong interest in joining your team at Inria, specifically for the PhD position focusing on robust few-shot learning for foundational models in CT imaging. Having previously reached out regarding the foundational abdominal CT model, I believe my background makes me an exceptional fit for this specific algorithmic challenge as well.

In my Master's thesis, "Cardiovascular Medical Digital Twin," I tackled the fundamental scarcity of high-quality, annotated medical data by engineering physics-informed architectures. I developed a 0D Windkessel Physics-Informed Operator Network (PI-DeepONet) using PyTorch Autograd, which regularized the neural network using underlying physiological equations rather than relying solely on massive datasets. This physics-guided approach drastically reduced the required sample size for convergence. Furthermore, my engineering of Medical\_MambaTS provided sub-millisecond inference on multi-modal medical signals.

I am highly motivated to apply this structural, constraint-based methodology to the challenge of few-shot learning in CT imaging. By integrating domain-specific priors (anatomical invariants, physical CT reconstruction geometries) into the latent space of foundational models, we can achieve highly robust, generalizable performance even in extreme low-data regimes. 

Thank you again for your time, and I look forward to the possibility of an interview.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "34_Inria_PhD_Position_FM_PhD_Position_-_Structural_Methods_": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Dr. Benoit Caillaud \\ Inria \\ France}
\opening{Dear Dr. Caillaud,}

I am writing to express my strong interest in the PhD position focusing on Structural Methods for Mixed Model/Data Digital Twin Engineering. As an AI \& Data Science Engineer who has successfully architected two distinct digital twins, the challenge of unifying rigorous formal models with data-driven machine learning is the exact focus of my academic career.

My Master's thesis ("Cardiovascular Medical Digital Twin") and State Engineer thesis ("Gas Turbine Digital Twin") both confronted the inherent limitations of purely data-driven black boxes. To solve this, I engineered a Physics-Informed Operator Network (PI-DeepONet) that explicitly embedded structural differential equations (0D Windkessel fluid dynamics) directly into the PyTorch Autograd loop. This allowed the digital twin to learn from highly noisy telemetry while remaining mathematically constrained by the structural laws of physics. Furthermore, I developed Medical\_MambaTS, leveraging structural continuous-time state-space representations for highly efficient sequence modeling.

I am eager to transition this applied experience into deeper theoretical research at Inria. Developing new structural methods, formal semantics, and hybrid modeling languages to seamlessly integrate non-stationary data streams with deterministic models is a critical frontier for digital twin engineering. My hands-on experience uniquely positions me to contribute to this research.

I look forward to discussing my digital twin architectures with you.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}""",

    "35_University_of_L_Doctoral_Researcher_in_Information_Systems_Enginee": r"""\documentclass[11pt, a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\begin{document}
\begin{letter}{Admissions Committee \\ University of Luxembourg \\ Luxembourg}
\opening{Dear Admissions Committee,}

I am writing to express my strong interest in the Doctoral Researcher position in Information Systems Engineering, specifically focusing on the application of Large Language Models. As an AI \& Data Science Engineer, I am highly motivated by the challenge of moving LLMs from generic text generators into rigorous, structured components of complex information systems.

My academic background centers on the engineering of highly scalable, deterministic data pipelines and advanced sequence modeling. In my engineering theses, I architected the SST-KODA-MultiScale framework using PyArrow and Parquet to process immense volumes of non-stationary data. Furthermore, my development of Medical\_MambaTS—a linear-time state-space architecture—demonstrates my deep understanding of sequence processing architectures that scale beyond traditional transformer limitations. 

I intend to leverage this architectural expertise to research the integration of LLMs within enterprise information systems. I am particularly interested in developing neuro-symbolic pipelines, Retrieval-Augmented Generation (RAG) architectures with structured graph databases, and formal verification frameworks that ensure LLM outputs strictly adhere to enterprise constraints and system logic. My engineering background ensures that my research will remain focused on scalable, deployable, and trustworthy system design.

Thank you for your time and consideration.

\closing{Sincerely, \\ Ismail Aissaoui \\ \href{https://ismail-aissaoui.vercel.app}{https://ismail-aissaoui.vercel.app}}
\end{letter}
\end{document}"""
}

for folder, content in letters.items():
    file_path = os.path.join(folder, "motivation_letter.tex")
    with open(file_path, "w") as f:
        f.write(content)
    
    print(f"Compiling {folder}...")
    subprocess.run(["pdflatex", "-interaction=nonstopmode", "motivation_letter.tex"], cwd=folder, stdout=subprocess.DEVNULL)
    
    # clean up logs
    subprocess.run(["rm", "-f", "motivation_letter.aux", "motivation_letter.log", "motivation_letter.out"], cwd=folder)
    
print("All 10 letters fixed and compiled successfully!")
