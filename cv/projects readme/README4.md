# 🚗 AI Traffic Camera System

A comprehensive computer vision system for intelligent traffic monitoring with **vehicle detection**, **tracking**, **counting**, **speed estimation**, and **license plate recognition (LPR)**.

---

## ✨ Features

### Phase 1: Detection, Tracking & Counting
- ✅ **YOLOv8x** for accurate vehicle detection (cars, motorcycles, buses, trucks)
- ✅ **ByteTrack** for robust multi-object tracking
- ✅ **Line Zone** counting for traffic flow analysis
- ✅ Real-time bounding boxes and unique ID labels

### Phase 2: Speed Estimation
- ✅ **Perspective transformation** for pixel-to-world coordinate mapping
- ✅ Real-time speed calculation in km/h
- ✅ Configurable calibration zone
- ✅ Speed smoothing over multiple frames

### Phase 3: License Plate Recognition (LPR)
- ✅ **EasyOCR** integration for text extraction
- ✅ Image preprocessing for better accuracy
- ✅ Automatic plate caching per vehicle
- ✅ Optional enable/disable via config

---

## 📁 Project Structure

```
traffic_camera/
├── traffic_camera.py          # Main application
├── config.py                  # Configuration settings
├── requirements.txt           # Python dependencies
├── README.md                  # This file
├── utils/
│   ├── __init__.py
│   ├── speed_estimator.py    # Speed calculation module
│   └── license_plate_recognizer.py  # LPR module
├── data/
│   ├── videos/                # Input videos
│   └── output/                # Output videos and screenshots
└── models/
    └── (license plate detector - optional)
```

---

## 🚀 Installation

### Step 1: Install Dependencies

```bash
cd traffic_camera
pip install -r requirements.txt
```

**Dependencies:**
- `ultralytics` - YOLOv8 framework
- `opencv-contrib-python` - Computer vision library
- `supervision` - Detection & tracking utilities
- `easyocr` - Optical Character Recognition
- `numpy` - Numerical operations
- `pandas` - Data handling

### Step 2: Download YOLOv8x Model

The system uses the YOLOv8x model located at `../models/yolov8x.pt` (one directory up).

If you don't have it, it will be auto-downloaded on first run, or download manually:

```bash
wget https://github.com/ultralytics/assets/releases/download/v0.0.0/yolov8x.pt -P ../models/
```

### Step 3: (Optional) License Plate Detector

For better LPR results, train a custom YOLOv8 model on license plate data or download a pre-trained one.

---

## ⚙️ Configuration

**Before running, you MUST calibrate the system!**

Open `config.py` and adjust the following:

### 1. Video Source
```python
VIDEO_SOURCE = 0  # Webcam
# OR
VIDEO_SOURCE = "data/videos/traffic.mp4"  # Video file
```

### 2. Counting Line
Define where vehicles should be counted:
```python
LINE_START = (100, 400)   # Left side of line
LINE_END = (1180, 400)    # Right side of line
```

### 3. **Speed Calibration (CRITICAL!)**

This is the most important step for accurate speed estimation.

#### How to Calibrate:

1. **Identify a known rectangle in your video** (e.g., road marking, lane width)
2. **Measure real-world dimensions** (e.g., 10m wide × 20m long)
3. **Mark 4 corners in pixel coordinates**:

```python
SOURCE_POINTS = [
    [400, 300],   # Top-left corner (pixels)
    [880, 300],   # Top-right corner (pixels)
    [1100, 600],  # Bottom-right corner (pixels)
    [180, 600]    # Bottom-left corner (pixels)
]
```

4. **Set real-world dimensions**:

```python
REAL_WORLD_WIDTH = 10.0   # meters
REAL_WORLD_HEIGHT = 20.0  # meters
```

**Visual Guide:**
```
     TL -------- TR
     |            |
     |  10m wide  |
     |            |
     BL -------- BR
        20m long
```

### 4. Enable/Disable Features
```python
ENABLE_LPR = False  # Set True to enable license plate recognition
SHOW_SPEED = True
SHOW_TRACKING_IDS = True
```

---

## 🎯 Usage

### Basic Usage (Webcam)
```bash
python traffic_camera.py
```

### Using Video File
Edit `config.py`:
```python
VIDEO_SOURCE = "data/videos/traffic.mp4"
```

Then run:
```bash
python traffic_camera.py
```

### Save Output Video
Modify in code or set:
```python
system.run(save_output=True)
```

### Keyboard Controls
- **`q`** - Quit application
- **`s`** - Save screenshot to `data/output/`

---

## 📊 How It Works

### Phase 1: Detection & Tracking

```python
# 1. YOLO detects vehicles in frame
results = vehicle_model(frame, classes=[2, 3, 5, 7])  # car, motorcycle, bus, truck

# 2. Convert to supervision format
detections = sv.Detections.from_ultralytics(results)

# 3. ByteTrack assigns unique IDs
detections = tracker.update_with_detections(detections)

# 4. Line zone counts crossings
line_zone.trigger(detections)
```

**Output:** Bounding boxes with unique tracker IDs

---

### Phase 2: Speed Estimation

The speed estimation uses **perspective transformation** to map pixel movement to real-world distance.

#### Step-by-Step:

**1. Define Calibration Zone**
```python
source_points = [[400, 300], [880, 300], [1100, 600], [180, 600]]  # Pixels
target_points = [[0, 0], [10, 0], [10, 20], [0, 20]]  # Meters
```

**2. Calculate Homography Matrix**
```python
H = cv2.getPerspectiveTransform(source_points, target_points)
```

**3. Convert Pixel to World Coordinates**
```python
world_x, world_y = cv2.perspectiveTransform([[pixel_x, pixel_y]], H)
```

**4. Calculate Distance Traveled**
```python
distance = sqrt((x2 - x1)² + (y2 - y1)²)  # in meters
```

**5. Calculate Speed**
```python
time = frame_diff / fps  # seconds
speed = (distance / time) × 3.6  # km/h
```

#### The Math:

Given:
- Vehicle position at time $t_1$: $(x_1, y_1)$ in pixels
- Vehicle position at time $t_2$: $(x_2, y_2)$ in pixels
- Homography matrix: $H$

Convert to world coordinates:
$$
\begin{bmatrix} X_1 \\ Y_1 \end{bmatrix} = H \cdot \begin{bmatrix} x_1 \\ y_1 \\ 1 \end{bmatrix}
$$

Calculate distance:
$$
D = \sqrt{(X_2 - X_1)^2 + (Y_2 - Y_1)^2} \text{ meters}
$$

Calculate speed:
$$
\text{Speed} = \frac{D}{\Delta t} \times 3.6 \text{ km/h}
$$

---

### Phase 3: License Plate Recognition

**1. Crop Vehicle Region**
```python
vehicle_roi = frame[y1:y2, x1:x2]
```

**2. Preprocess Image**
```python
gray = cv2.cvtColor(vehicle_roi, cv2.COLOR_BGR2GRAY)
denoised = cv2.bilateralFilter(gray, 11, 17, 17)
thresh = cv2.adaptiveThreshold(denoised, 255, ...)
```

**3. Run OCR**
```python
results = easyocr_reader.readtext(thresh)
plate_text = results[0][1]  # Extract text
```

**4. Cache Result**
```python
vehicle_data[tracker_id]['plate'] = plate_text
```

---

## 🎓 Understanding the Code

### Main Processing Loop

```python
while True:
    # Read frame
    ret, frame = cap.read()
    
    # === PHASE 1: DETECTION & TRACKING ===
    results = vehicle_model(frame)
    detections = sv.Detections.from_ultralytics(results)
    detections = tracker.update_with_detections(detections)
    line_zone.trigger(detections)
    
    # === PHASE 2 & 3: Per Vehicle ===
    for bbox, tracker_id in zip(detections.xyxy, detections.tracker_id):
        centroid_x, centroid_y = calculate_centroid(bbox)
        
        # PHASE 2: Speed
        speed = speed_estimator.update(tracker_id, centroid_x, centroid_y, frame_count)
        
        # PHASE 3: LPR
        vehicle_roi = crop(frame, bbox)
        plate = lpr.recognize(vehicle_roi, tracker_id)
    
    # Visualize
    annotated_frame = draw_all(frame, detections, speeds, plates)
    cv2.imshow("Traffic Camera", annotated_frame)
```

---

## 🔧 Calibration Tips

### Finding SOURCE_POINTS

1. **Run the system** with rough initial values
2. **Press `s`** to take a screenshot
3. **Open screenshot** in an image editor (GIMP, Photoshop, Paint)
4. **Find pixel coordinates** of known rectangular features:
   - Road lane markings
   - Painted crosswalk
   - Known building/sign dimensions
5. **Update `config.py`** with exact pixel coordinates

### Measuring Real-World Dimensions

- Use Google Maps to measure road width
- Standard car parking space: ~2.5m × 5m
- Standard highway lane: ~3.5m wide
- Use tape measure for smaller objects

### Verification

To verify calibration works:
1. Uncomment the calibration zone drawing in `traffic_camera.py`:
```python
annotated_frame = self.speed_estimator.draw_calibration_zone(
    annotated_frame, config.SOURCE_POINTS
)
```
2. You should see a yellow quadrilateral matching your road section
3. Test with a known speed (e.g., follow a car with speedometer)

---

## 📈 Performance Optimization

### Speed Up Processing
1. **Use smaller YOLO model**: Replace `yolov8x.pt` with `yolov8n.pt` or `yolov8s.pt`
2. **Reduce frame size**: Resize frames before processing
3. **Lower FPS**: Process every 2nd or 3rd frame
4. **GPU acceleration**: Ensure CUDA is installed for PyTorch

### Improve Accuracy
1. **Higher confidence threshold**: Set `CONFIDENCE_THRESHOLD = 0.5`
2. **More smoothing**: Increase `SPEED_SMOOTHING_FRAMES`
3. **Better calibration**: Use precise measurements
4. **Custom LP detector**: Train YOLOv8 on license plate dataset

---

## 🐛 Troubleshooting

### Issue: Inaccurate Speeds

**Cause:** Poor calibration or wrong FPS
**Solution:**
- Recalibrate SOURCE_POINTS and real-world dimensions
- Verify FPS matches your video: `cap.get(cv2.CAP_PROP_FPS)`

### Issue: License Plates Not Recognized

**Cause:** EasyOCR not installed or disabled
**Solution:**
- Install: `pip install easyocr`
- Enable in config: `ENABLE_LPR = True`
- Note: First run downloads OCR models (~400MB)

### Issue: Vehicles Not Tracked Consistently

**Cause:** Low detection confidence or occlusion
**Solution:**
- Lower `CONFIDENCE_THRESHOLD` in config
- Ensure good lighting and camera angle
- Use higher resolution video

### Issue: Low FPS

**Cause:** Model too large or CPU processing
**Solution:**
- Use smaller model (yolov8n.pt, yolov8s.pt)
- Disable LPR if not needed
- Install CUDA for GPU acceleration

---

## 📚 Key Concepts Explained

### 1. **Homography Matrix**
A 3×3 matrix that maps points from one plane to another. Used here to convert pixel coordinates to real-world meters.

### 2. **ByteTrack**
An advanced tracking algorithm that associates detections across frames using motion prediction and appearance features.

### 3. **Line Zone**
A virtual tripwire that counts objects crossing a defined line, useful for traffic flow analysis.

### 4. **OCR (Optical Character Recognition)**
Technology to extract text from images. EasyOCR uses deep learning for accurate character recognition.

### 5. **Perspective Transform**
Mathematical technique to change the viewpoint of an image, like converting a camera view to a bird's-eye view.

---

## 🎯 Next Steps & Improvements

1. **Train Custom License Plate Detector**
   - Collect dataset of license plates
   - Train YOLOv8 model: `yolo train data=plates.yaml model=yolov8n.pt`
   - Use detector before OCR for better accuracy

2. **Add Database Integration**
   - Store vehicle data (ID, speed, plate, timestamp)
   - Generate traffic reports
   - Alert on speeding violations

3. **Multi-Camera System**
   - Sync multiple cameras
   - Track vehicles across cameras
   - Calculate average speed over distance

4. **Web Dashboard**
   - Real-time monitoring interface
   - Historical data visualization
   - Export reports (CSV, PDF)

5. **Advanced Analytics**
   - Vehicle classification (sedan, SUV, truck)
   - Traffic density heatmaps
   - Anomaly detection (accidents, congestion)

---

## 📝 Example Output

```
==================================================
AI TRAFFIC CAMERA SYSTEM
==================================================

[Phase 1] Initializing Detection and Tracking...
Loading vehicle detection model: ../models/yolov8x.pt
✓ Detection and Tracking initialized

[Phase 2] Initializing Speed Estimation...
✓ Speed Estimation initialized
  - Real-world zone: 10.0m x 20.0m

[Phase 3] Initializing License Plate Recognition...
⚠ License Plate Recognition disabled

==================================================
System initialized successfully!
==================================================

Video Info: 1280x720 @ 30 FPS
Processing video...
Press 'q' to quit
Press 's' to take screenshot
------------------------------------------------------------

==================================================
FINAL STATISTICS
==================================================
Total Frames Processed: 1247
Total Vehicles In: 23
Total Vehicles Out: 19
Unique Vehicles Tracked: 42
==================================================
```

---

## 📄 License

This project is for educational purposes. Ensure compliance with local laws regarding surveillance and privacy.

---

## 🙏 Credits

- **YOLOv8**: Ultralytics (https://github.com/ultralytics/ultralytics)
- **Supervision**: Roboflow (https://github.com/roboflow/supervision)
- **EasyOCR**: JaidedAI (https://github.com/JaidedAI/EasyOCR)

---

## 📧 Support

For issues or questions, refer to:
- YOLOv8 Documentation: https://docs.ultralytics.com
- Supervision Documentation: https://supervision.roboflow.com
- OpenCV Documentation: https://docs.opencv.org

---

**Happy Traffic Monitoring! 🚗📹**
