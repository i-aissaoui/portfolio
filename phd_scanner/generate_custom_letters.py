import os
import re
import subprocess

def clean_latex(text):
    if not text: return ""
    chars = {
        '&': r'\&', '%': r'\%', '$': r'\$', '#': r'\#', '_': r'\_',
        '{': r'\{', '}': r'\}', '~': r'\textasciitilde{}', '^': r'\textasciicircum{}', '\\': r'\textbackslash{}'
    }
    for k, v in chars.items():
        text = text.replace(k, v)
    return text

def get_custom_paragraph(content_lower):
    # Determine the most relevant domains based on keywords
    domains = []
    if any(k in content_lower for k in ['vision', 'image', 'imaging', 'camera', 'x-ray', 'spad', 'photonic']):
        domains.append('vision')
    if any(k in content_lower for k in ['nlp', 'language', 'speech', 'text', 'translation']):
        domains.append('nlp')
    if any(k in content_lower for k in ['quantum', 'physics', 'mechanics', 'fluid', 'cfd', 'simulation', 'acoustics']):
        domains.append('physics')
    if any(k in content_lower for k in ['optimi', 'control', 'reinforcement', 'decision', 'autonomous']):
        domains.append('optimization')
    if any(k in content_lower for k in ['medic', 'health', 'bio', 'neuro', 'oncology', 'disease', 'patient']):
        domains.append('medical')
    if any(k in content_lower for k in ['secur', 'privac', 'trust', 'robust', 'safe']):
        domains.append('security')

    if not domains:
        domains.append('general')

    # Construct a highly customized paragraph blending their specific experiences
    para = ""
    
    if 'medical' in domains:
        para += r"In my recent work on the ``Cardiovascular Medical Digital Twin,'' I developed the \textbf{SST\_KODA\_MultiScale} architecture and \textbf{Medical\_MambaTS} to process high-frequency 100Hz clinical telemetry data. A critical component of dealing with real-world medical data is handling uncertainty; to address this, I engineered a custom Missingness-Aware Gate to handle sensor dropouts dynamically. "
    elif 'physics' in domains:
        para += r"My engineering background has heavily focused on the intersection of physical systems and deep learning. I developed a 0D Windkessel \textbf{PI\_DeepONet} that utilizes continuous regularization via PyTorch Autograd to enforce physical fluid dynamics directly within the neural network constraints. "
    elif 'vision' in domains:
        para += r"I have extensive experience in high-performance inference and spatial-temporal modeling. I engineered \textbf{Medical\_MambaTS}, an architecture specifically designed for sub-millisecond inference, supported by a zero-copy PyArrow pipeline that prevents GPU starvation. These low-latency optimizations translate perfectly to advanced computer vision and sensor processing tasks. "
    elif 'nlp' in domains:
        para += r"My background includes building complex semantic processing systems. I have utilized SBERT and PyTorch Geometric to generate robust semantic embeddings for text processing, which is highly applicable to advanced language modeling and temporal sequence forecasting. "
    elif 'optimization' in domains or 'security' in domains:
        para += r"My work often addresses complex vulnerabilities and system optimizations. By designing custom architectures like the Missingness-Aware Gate, my models learned to dynamically adapt to sudden failures and unseen states without retraining, ensuring robust and safe inference in edge-case scenarios. "
    else:
        para += r"My dual expertise in physics-informed AI (enforcing dynamic constraints via PI-DeepONet) and systems-level pipeline engineering ensures that I can build models that are not only theoretically sound but also computationally efficient and scalable in real-world scenarios. "

    return para

letter_template = r"""\documentclass[11pt,a4paper]{letter}
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage{lmodern}
\usepackage[margin=1in]{geometry}
\usepackage{hyperref}

\name{Ismail Aissaoui}
\address{Ismail Aissaoui \\ Chlef, Algeria \\ Phone: +213 660 70 77 96 \\ Email: ismail.aissaoui.pro@gmail.com}
\signature{Ismail Aissaoui}

\begin{document}
\begin{letter}{
    [CONTACT_NAME] \\
    [UNIVERSITY] \\
    [LOCATION]
}
\opening{To the Hiring Committee,}

I am writing to express my strong interest in the [TITLE] position at [UNIVERSITY]. As an AI \& Data Science Engineer with a deep foundation in advanced neural network architectures, high-performance data pipelines, and mathematical modeling, I am highly motivated to contribute to your research goals.

[CUSTOM_PARAGRAPH]

I am eager to apply my PyTorch expertise and my passion for cutting-edge AI research to advance the initiatives at [UNIVERSITY]. Enclosed are my CV, university transcripts, and a detailed description of my technical projects.

\closing{Sincerely,}
\end{letter}
\end{document}
"""

folders = sorted([d for d in os.listdir('.') if os.path.isdir(d) and re.match(r'^\d{2}_', d)])
count = 0

for folder in folders:
    num = int(folder.split('_')[0])
    if num <= 10:
        continue # Already done 1 to 10
        
    details_path = os.path.join(folder, 'offer_details.md')
    if not os.path.exists(details_path): continue
    
    with open(details_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    title_match = re.search(r'^#\s*(.*?)$', content, re.MULTILINE)
    title = title_match.group(1).strip() if title_match else "PhD Position"
    
    uni_match = re.search(r'\*\*University:\*\*\s*(.*?)$', content, re.MULTILINE)
    uni = uni_match.group(1).strip() if uni_match else "University"
    
    loc_match = re.search(r'\*\*Location:\*\*\s*(.*?)$', content, re.MULTILINE)
    loc = loc_match.group(1).strip() if loc_match else "Unknown"
    
    custom_para = get_custom_paragraph(content.lower())
    
    custom_letter = letter_template
    custom_letter = custom_letter.replace('[CONTACT_NAME]', 'Hiring Committee')
    custom_letter = custom_letter.replace('[UNIVERSITY]', clean_latex(uni))
    custom_letter = custom_letter.replace('[LOCATION]', clean_latex(loc))
    custom_letter = custom_letter.replace('[TITLE]', clean_latex(title))
    custom_letter = custom_letter.replace('[CUSTOM_PARAGRAPH]', custom_para)
    
    with open(os.path.join(folder, 'motivation_letter.tex'), 'w', encoding='utf-8') as f:
        f.write(custom_letter)
        
    # Compile the latex
    os.chdir(folder)
    subprocess.run(['pdflatex', '-interaction=nonstopmode', 'motivation_letter.tex'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for ext in ['.log', '.aux', '.out']:
        try: os.remove('motivation_letter' + ext)
        except: pass
    os.chdir('..')
    count += 1

print(f"Successfully generated and compiled personalized letters for {count} remaining folders.")
