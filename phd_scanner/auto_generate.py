import os
import re
import shutil
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

ai_keywords = ['machine learning', 'artificial intelligence', 'ai ', 'deep learning', 'data science', 
               'computer vision', 'nlp', 'natural language', 'neural network', 'digital twin', 
               'optimization', 'computer science', 'reinforcement learning', 'foundation model']

def analyze_offer(body):
    body_lower = body.lower()
    ai_score = sum(1 for kw in ai_keywords if kw in body_lower)
    
    if ai_score == 0:
        return False, "This offer does not mention any core AI, Machine Learning, or Computer Science keywords. It appears to be entirely outside your specialization."
        
    if 'fisheries' in body_lower or 'women\'s work' in body_lower or 'history' in body_lower:
        if ai_score < 2:
            return False, "This offer seems focused on humanities/social sciences rather than applied AI/Computer Science."
            
    return True, "Valid"

with open('../cv/resume_en.tex', 'r', encoding='utf-8') as f:
    cv_template = f.read()

with open('phd_application_template.tex', 'r', encoding='utf-8') as f:
    letter_template = f.read()

folders = sorted([d for d in os.listdir('.') if os.path.isdir(d) and re.match(r'^\d{2}_', d)])

valid_count = 0
invalid_count = 0

# The exact string to replace in the CV
old_profile = r"""\section{PROFILE}
AI \& Data Science Engineer with a background in Full-Stack Software Engineering. Experienced in building projects across diverse domains, including Industrial Digital Twins, Healthcare, Financial Trading, Computer Vision, and Enterprise Management Systems. My primary interests include Deep Learning, Graph Neural Networks, Reinforcement Learning, and Natural Language Processing (NLP)."""

for folder in folders:
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
    
    contact_match = re.search(r'-\s*Email:\s*(.*?)$', content, re.MULTILINE)
    email = contact_match.group(1).strip() if contact_match else "Hiring Committee"
    
    is_valid, reason = analyze_offer(content)
    
    if not is_valid:
        invalid_count += 1
        with open(os.path.join(folder, 'OUT_OF_SPECIALIZATION.md'), 'w', encoding='utf-8') as f:
            f.write(f"# Out of Specialization\n\n**Reason:** {reason}\n\nI skipped generating a CV and Motivation Letter for this position to ensure you only apply to highly relevant roles matching your profile as an AI & Data Science Engineer.")
        continue
        
    valid_count += 1
    
    # GENERATE CUSTOM CV
    new_profile = r"""\section{PROFILE}
AI \& Data Science Engineer with a background in Full-Stack Software Engineering. Highly motivated to apply my expertise in Machine Learning, Deep Learning, and Mathematical Modeling to the research challenges at """ + clean_latex(uni) + r""". Experienced in Industrial Digital Twins, Healthcare, Financial Trading, and Computer Vision."""
    
    custom_cv = cv_template.replace(old_profile, new_profile)
    
    with open(os.path.join(folder, 'custom_cv.tex'), 'w', encoding='utf-8') as f:
        f.write(custom_cv)
        
    # GENERATE MOTIVATION LETTER
    custom_letter = letter_template
    custom_letter = custom_letter.replace('[Contact Name]', 'Hiring Committee')
    custom_letter = custom_letter.replace('[Contact Last Name]', 'Hiring Committee')
    custom_letter = custom_letter.replace('[University Name]', clean_latex(uni))
    custom_letter = custom_letter.replace('[Department / Faculty]', 'Department of Computer Science')
    custom_letter = custom_letter.replace('[Location]', clean_latex(loc))
    custom_letter = custom_letter.replace('[Insert PhD Title]', clean_latex(title))
    custom_letter = custom_letter.replace('[Insert University Name]', clean_latex(uni))
    
    with open(os.path.join(folder, 'motivation_letter.tex'), 'w', encoding='utf-8') as f:
        f.write(custom_letter)

print(f"Processed {valid_count + invalid_count} offers. Generated documents for {valid_count} valid offers. Skipped {invalid_count} out-of-specialization offers.")
