import os
import re
import json
import urllib.request
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

def generate_with_ollama(prompt):
    url = "http://localhost:11434/api/generate"
    data = {
        "model": "llama3",
        "prompt": prompt,
        "stream": False
    }
    req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'), headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req) as response:
            result = json.loads(response.read().decode('utf-8'))
            return result['response']
    except Exception as e:
        print(f"Ollama failed: {e}")
        return None

cv_achievements = """
Main achievements from your 'Cardiovascular Medical Digital Twin' project:
- Medical_MambaTS: linear-time state space model for sub-millisecond bedside inference.
- PI_DeepONet: 0D Windkessel Physics-Informed Operator Network using PyTorch Autograd.
- SST_KODA_MultiScale: robust cloud forecasting with 100Hz VitalDB telemetry.
- PyArrow Parquet zero-copy data pipeline to prevent GPU starvation.
- Missingness-Aware Gate to dynamically handle sensor dropouts and missing data.
- NLP embeddings using SBERT and PyTorch Geometric.
"""

folders = sorted([d for d in os.listdir('.') if os.path.isdir(d) and re.match(r'^\d{2}_', d)])

for folder in folders:
    num = int(folder.split('_')[0])
    if num < 14:
        continue # Already done 1-13
        
    details_path = os.path.join(folder, 'offer_details.md')
    if not os.path.exists(details_path): continue
    
    with open(details_path, 'r', encoding='utf-8') as f:
        offer_content = f.read()
        
    # Check if out of spec
    if "women's work" in offer_content.lower() or "fisheries" in offer_content.lower() or "completed doctoral degree" in offer_content.lower():
        with open(os.path.join(folder, 'OUT_OF_SPECIALIZATION.md'), 'w') as f:
            f.write("# Out of Specialization\n\nThis offer is fundamentally outside your domain or requires a Postdoc.")
        continue

    print(f"Generating for {folder}...")

    prompt = f"""You are Ismail Aissaoui, an AI & Data Science Engineer applying for a PhD.
Write a highly customized, professional Motivation Letter in LaTeX format for the following position.
Use the standard LaTeX `letter` class. 

Here is the position description:
{offer_content[:1500]}

{cv_achievements}

Instructions:
1. Extract the University name, Location, and PhD title from the description and use them in the letter.
2. Selectively pick 1 or 2 of your achievements that map PERFECTLY to the specific requirements of this PhD offer. Connect the achievement mathematically or logically to their specific field (e.g. if they do robotics, talk about MambaTS low latency; if they do biology, talk about PI-DeepONet physical constraints; if they do NLP, talk about SBERT).
3. Do NOT just list all achievements. Only the most relevant ones.
4. Output ONLY the raw LaTeX code block. Do NOT wrap it in markdown ticks (```). Start directly with \documentclass.
"""
    
    latex_output = generate_with_ollama(prompt)
    if latex_output:
        # Clean up markdown ticks if Llama3 still outputs them
        latex_output = latex_output.strip()
        if latex_output.startswith("```latex"):
            latex_output = latex_output[8:]
        elif latex_output.startswith("```"):
            latex_output = latex_output[3:]
        if latex_output.endswith("```"):
            latex_output = latex_output[:-3]
            
        with open(os.path.join(folder, 'motivation_letter.tex'), 'w', encoding='utf-8') as f:
            f.write(latex_output)
            
        # Compile
        os.chdir(folder)
        subprocess.run(['pdflatex', '-interaction=nonstopmode', 'motivation_letter.tex'], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        for ext in ['.log', '.aux', '.out']:
            try: os.remove('motivation_letter' + ext)
            except: pass
        os.chdir('..')

print("All done!")
