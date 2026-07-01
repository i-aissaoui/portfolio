import os
import glob
import re

def get_status(folder_path):
    if folder_path.endswith('_skipped') or os.path.exists(os.path.join(folder_path, 'OUT_OF_SPECIALIZATION.md')):
        return "❌ Skipped"
    
    if os.path.exists(os.path.join(folder_path, 'motivation_letter.pdf')):
        return "✅ Ready / Applied"
    
    if os.path.exists(os.path.join(folder_path, 'motivation_letter.tex')):
        return "⏳ Pending Compilation"
    
    return "📝 Needs Processing"

def get_details(folder_path):
    offer_file = os.path.join(folder_path, 'offer_details.md')
    uni, deadline = "Unknown", "Unknown"
    
    if os.path.exists(offer_file):
        with open(offer_file, 'r', encoding='utf-8') as f:
            content = f.read()
            uni_match = re.search(r'\*\*University:\*\*\s*(.*)', content)
            deadline_match = re.search(r'\*\*Deadline:\*\*\s*(.*)', content)
            if uni_match: uni = uni_match.group(1).strip()
            if deadline_match: deadline = deadline_match.group(1).strip()
            
    return uni, deadline

def scan_phds():
    tracker_lines = [
        "# 🎓 PhD Applications Tracker\n",
        "This document automatically tracks the status of all PhD applications across the portfolio.\n",
        "| Folder / Position | University | Deadline | Status |",
        "|---|---|---|---|"
    ]
    
    # Define directories to scan
    base_dirs = ['phd_scanner', 'luxemburg_phds', 'phd']
    
    all_folders = []
    for d in base_dirs:
        if os.path.exists(d):
            # Find subdirectories that look like an application (e.g. start with number or contain PhD)
            subdirs = [os.path.join(d, f) for f in os.listdir(d) if os.path.isdir(os.path.join(d, f))]
            for sub in subdirs:
                # Filter out pure code/asset folders
                if sub.endswith('__pycache__') or '.git' in sub:
                    continue
                all_folders.append(sub)
                
    # Sort folders alphabetically
    all_folders.sort()
    
    for folder in all_folders:
        folder_name = os.path.basename(folder)
        # Skip utility folders inside phd_scanner
        if folder_name in ['presentations', 'thesis']:
            continue
            
        status = get_status(folder)
        uni, deadline = get_details(folder)
        
        # Clean folder name for display
        display_name = folder_name.replace('_', ' ')
        if len(display_name) > 50:
            display_name = display_name[:47] + "..."
            
        tracker_lines.append(f"| `{display_name}` | {uni} | {deadline} | {status} |")
        
    with open('PHD_TRACKER.md', 'w', encoding='utf-8') as f:
        f.write('\n'.join(tracker_lines))

if __name__ == "__main__":
    scan_phds()
    print("PHD_TRACKER.md generated successfully.")
