import os
folders = [
    "26_KU_Leuven_PhD_position_on_Causal_Machine_Learning_for_Indust",
    "27_Leiden_Universi_PhD_Candidate_Formal_methods_in_Natural_Language_P",
    "28_Norwegian_Unive_PhD_Candidate_in_Secure_and_Trustworthy_Data_Shari",
    "29_Inria_PhD_Position_FM_PhD_Position_FM_How_does_Reasoning",
    "30_University_of_T_PhD_position_on_Dissecting_Algorithmic_Collusion",
    "31_Cranfield_Unive_Development_and_optimisation_of_ultra-efficient_an",
    "32_University_of_S_AI-enhanced_X-ray_CT_for_defect_detection_in_advan",
    "33_Inria_PhD_Position_FM_PhD_-_Robust_few-shot_learning_for",
    "34_Inria_PhD_Position_FM_PhD_Position_-_Structural_Methods_",
    "35_University_of_L_Doctoral_Researcher_in_Information_Systems_Enginee"
]
for f in folders:
    path = os.path.join(f, "offer_details.md")
    if os.path.exists(path):
        with open(path, "r") as file:
            content = file.read()
            lines = content.split('\n')
            title = lines[0].replace("# ", "").strip()
            print(f"\n--- {f} ---")
            print(f"Title: {title}")
            for l in lines:
                if l.startswith("**University:**") or l.startswith("- Email:") or l.startswith("### Contact"):
                    print(l)
