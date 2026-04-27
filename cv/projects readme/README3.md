# Safety Equipment Detection with YOLOv8

This project uses Ultralytics YOLOv8 to detect safety helmets and reflective jackets in images and videos. It is designed for workplace safety monitoring, providing real-time feedback on missing equipment for each person detected.

## Project Structure
```
├── 01_Safety_Training.ipynb         # Notebook for training the YOLOv8 model
├── 02_Safety_Testing.ipynb          # Notebook for testing and visualization
├── run_video_safety.py              # Real-time video safety detection script
├── requirements.txt                 # Python dependencies
├── models/                          # YOLOv8 model weights
├── safety-Helmet-Reflective-Jacket/ # Dataset and output folders
│   ├── train/valid/test/            # Data splits
│   └── output/                      # Results, predictions, reports
└── videos/                          # Input videos for detection
```

## How Learning is Done
1. **Dataset Preparation**
   - Images are organized into `train`, `valid`, and `test` folders with corresponding labels for helmet and jacket.
   - The dataset follows YOLO format, with bounding box annotations for each object.

2. **Model Training** (`01_Safety_Training.ipynb`)
   - The notebook loads the dataset and configures YOLOv8 for two classes: Safety-Helmet and Reflective-Jacket.
   - Training is performed using Ultralytics YOLOv8, saving the best weights to `models/yolov8n_safety_best.pt`.
   - Training metrics and sample predictions are visualized in the notebook.

3. **Model Testing** (`02_Safety_Testing.ipynb`)
   - The notebook loads the trained model and runs detection on test images.
   - Results are saved to the output folder, including annotated images, JSON results, and performance metrics.
   - Sample results and performance analysis are displayed for review.

## How the Script Works (`run_video_safety.py`)
- The script loads the trained YOLOv8 model (`models/yolov8n_safety_best.pt`).
- It processes video files from the `videos/` folder, frame by frame.
- For each frame:
  1. **Detection**: Runs YOLOv8 to detect persons, helmets, and jackets.
  2. **Association**: Matches detected helmets and jackets to each person using bounding box overlap (IoU).
  3. **Visualization**: Draws thin borders around all detected objects. For each person, if a helmet or jacket is missing, a warning is displayed above the person.
  4. **Display**: Shows the video in a large window (1280x720). Press `q` to quit.
- The script provides real-time feedback, highlighting missing safety equipment per person.

## Requirements
- Python 3.8+
- Ultralytics YOLOv8
- OpenCV
- numpy
- torch (with CUDA for GPU acceleration)

Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage
**Train the model:**
- Open `01_Safety_Training.ipynb` and run all cells to train on your dataset.

**Test the model:**
- Open `02_Safety_Testing.ipynb` to evaluate and visualize results.

**Run real-time detection:**
```bash
python run_video_safety.py
```
- The script will process videos in the `videos/` folder and display annotated frames with safety warnings.

## Output
- Annotated images, detection results, performance metrics, and summary reports are saved in `safety-Helmet-Reflective-Jacket/output/`.

## Notes
- Adjust model paths and video folder as needed for your environment.
- For best results, use high-quality annotated data and retrain the model for your specific use case.

---
**Author:** Your Name
**Date:** October 2025
