# Activity 2: Train a Crop Detection System

## Objective
Build and train a YOLO-based object detection system to identify ripe tomatoes in greenhouse images.

**Duration:** 4-5 hours
**Difficulty:** Advanced
**Prerequisites:** Python, basic machine learning concepts, GPU recommended

---

## Part 1: Dataset Preparation (90 minutes)

### Task 1.1: Collect Images

**Option A: Use Public Dataset**
- Download tomato dataset from Roboflow Universe or Kaggle
- Search: "tomato detection dataset" or "greenhouse crop dataset"
- Minimum 200 images preferred

**Option B: Capture Your Own**
- Use smartphone or webcam
- Capture 100+ images of tomatoes (real or printed photos)
- Vary: lighting, angles, distances, backgrounds

### Task 1.2: Annotate Images

Install LabelImg annotation tool:
```bash
pip install labelImg
labelImg
```

**Annotation Guidelines:**
1. Open each image
2. Draw bounding box around each tomato
3. Label classes:
   - `tomato_ripe` (red)
   - `tomato_unripe` (green)
   - `tomato_breaker` (turning yellow/orange)
4. Save in YOLO format
5. Annotate all 100+ images (time-consuming but critical!)

**Directory Structure:**
```
tomato_dataset/
├── images/
│   ├── train/  (70%)
│   │   ├── img001.jpg
│   │   ├── img002.jpg
│   │   └── ...
│   └── val/  (30%)
│       ├── img080.jpg
│       └── ...
└── labels/
    ├── train/
    │   ├── img001.txt
    │   ├── img002.txt
    │   └── ...
    └── val/
        └── ...
```

**Label Format (YOLO):**
Each .txt file contains one line per object:
```
<class_id> <x_center> <y_center> <width> <height>
```
All values normalized to [0, 1]

Example `img001.txt`:
```
0 0.512 0.345 0.125 0.180
2 0.723 0.556 0.098 0.142
```
(Class 0=ripe, 1=unripe, 2=breaker)

---

## Part 2: Model Training (60 minutes)

### Task 2.1: Install Dependencies

```bash
pip install ultralytics opencv-python matplotlib
```

### Task 2.2: Create Configuration File

`tomato_data.yaml`:
```yaml
# Dataset paths
train: tomato_dataset/images/train
val: tomato_dataset/images/val

# Classes
nc: 3  # number of classes
names: ['tomato_ripe', 'tomato_unripe', 'tomato_breaker']
```

### Task 2.3: Train Model

```python
from ultralytics import YOLO
import matplotlib.pyplot as plt

# Load pretrained YOLOv8 nano model (fastest)
model = YOLO('yolov8n.pt')

# Train
results = model.train(
    data='tomato_data.yaml',
    epochs=50,              # Start with 50, increase if needed
    imgsz=640,              # Image size
    batch=16,               # Adjust based on GPU memory
    device=0,               # 0 for GPU, 'cpu' for CPU
    workers=4,
    patience=10,            # Early stopping
    save=True,
    plots=True,
    name='tomato_detector'
)

# Results saved to: runs/detect/tomato_detector/
print(f"Training complete! Best model: {results.best}")
```

Training time:
- GPU (NVIDIA RTX 3060): ~10-20 minutes
- CPU: ~2-4 hours

### Task 2.4: Evaluate Performance

```python
# Validate model
metrics = model.val()

print(f"mAP@50: {metrics.box.map50:.3f}")
print(f"mAP@50-95: {metrics.box.map:.3f}")
print(f"Precision: {metrics.box.mp:.3f}")
print(f"Recall: {metrics.box.mr:.3f}")

# Per-class metrics
for i, name in enumerate(['ripe', 'unripe', 'breaker']):
    print(f"{name}: AP@50 = {metrics.box.maps[i]:.3f}")
```

**Target Performance:**
- mAP@50 > 0.80 (80%)
- mAP@50-95 > 0.50
- Precision > 0.75
- Recall > 0.70

If below targets:
- Collect more training data
- Increase epochs
- Check annotation quality
- Try data augmentation

---

## Part 3: Inference and Deployment (45 minutes)

### Task 3.1: Test on New Images

```python
# Load best model
model = YOLO('runs/detect/tomato_detector/weights/best.pt')

# Run inference on test images
results = model.predict(
    source='test_images/',
    conf=0.5,  # Confidence threshold
    save=True,
    show_labels=True,
    show_conf=True
)

# Process results
for result in results:
    boxes = result.boxes
    print(f"Image: {result.path}")
    print(f"Detected {len(boxes)} tomatoes")

    for box in boxes:
        cls = int(box.cls[0])
        conf = box.conf[0]
        class_name = result.names[cls]
        print(f"  - {class_name}: {conf:.2f}")
```

### Task 3.2: Real-Time Detection (Webcam)

```python
import cv2

# Load model
model = YOLO('runs/detect/tomato_detector/weights/best.pt')

# Open webcam
cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    # Run detection
    results = model(frame, conf=0.5, verbose=False)

    # Visualize
    annotated_frame = results[0].plot()
    cv2.imshow('Tomato Detector', annotated_frame)

    # FPS counter
    fps = 1.0 / (time.time() - t0)
    cv2.putText(annotated_frame, f"FPS: {fps:.1f}", (10, 30),
                cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### Task 3.3: Export for Deployment

```python
# Export to ONNX (CPU/GPU inference)
model.export(format='onnx')

# Export to TensorRT (NVIDIA GPU, faster)
model.export(format='engine')  # Requires TensorRT installed

# Export to TFLite (mobile/edge devices)
model.export(format='tflite')

print("Exported models:")
print("  - best.onnx")
print("  - best.engine")
print("  - best.tflite")
```

---

## Part 4: Application Integration (30 minutes)

### Task 4.1: Ripeness Assessment

```python
class TomatoRipenessDetector:
    def __init__(self, model_path):
        self.model = YOLO(model_path)
        self.class_names = ['ripe', 'unripe', 'breaker']

    def assess_ripeness(self, image_path):
        """
        Analyze image and report ripeness statistics

        Returns:
            dict: Counts and percentages for each ripeness stage
        """
        results = self.model(image_path, conf=0.5, verbose=False)

        counts = {'ripe': 0, 'unripe': 0, 'breaker': 0}

        for result in results:
            for box in result.boxes:
                cls = int(box.cls[0])
                counts[self.class_names[cls]] += 1

        total = sum(counts.values())

        report = {
            'total_tomatoes': total,
            'counts': counts,
            'percentages': {k: v/total*100 if total > 0 else 0
                           for k, v in counts.items()},
            'ready_to_harvest': counts['ripe']
        }

        return report

# Usage
detector = TomatoRipenessDetector('runs/detect/tomato_detector/weights/best.pt')
report = detector.assess_ripeness('greenhouse_row.jpg')

print(f"Total tomatoes: {report['total_tomatoes']}")
print(f"Ripe: {report['percentages']['ripe']:.1f}%")
print(f"Unripe: {report['percentages']['unripe']:.1f}%")
print(f"Breaker: {report['percentages']['breaker']:.1f}%")
print(f"Ready to harvest: {report['ready_to_harvest']}")
```

### Task 4.2: Harvest Planning

```python
def plan_harvest_route(image_path, model):
    """
    Detect ripe tomatoes and sort by proximity for efficient picking
    """
    results = model(image_path, conf=0.6)

    ripe_tomatoes = []
    for result in results:
        for box in result.boxes:
            if int(box.cls[0]) == 0:  # Class 0 = ripe
                x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                center_x = (x1 + x2) / 2
                center_y = (y1 + y2) / 2
                ripe_tomatoes.append({
                    'position': (center_x, center_y),
                    'bbox': (x1, y1, x2, y2),
                    'confidence': float(box.conf[0])
                })

    # Sort by vertical position (top to bottom harvest)
    ripe_tomatoes.sort(key=lambda t: t['position'][1])

    print(f"Harvest route (top to bottom):")
    for i, tomato in enumerate(ripe_tomatoes, 1):
        x, y = tomato['position']
        conf = tomato['confidence']
        print(f"  {i}. Position: ({x:.0f}, {y:.0f}), Confidence: {conf:.2f}")

    return ripe_tomatoes
```

---

## Part 5: Analysis and Reporting (30 minutes)

### Task 5.1: Error Analysis

Review false positives and false negatives:

```python
# Visualize predictions with low confidence (uncertain detections)
results = model.predict('val_images/', conf=0.3, save=True)

low_conf_detections = []
for result in results:
    for box in result.boxes:
        if box.conf[0] < 0.6:
            low_conf_detections.append({
                'image': result.path,
                'class': result.names[int(box.cls[0])],
                'confidence': float(box.conf[0])
            })

print("Low confidence detections (review these):")
for det in low_conf_detections[:10]:
    print(f"  {det['image']}: {det['class']} ({det['confidence']:.2f})")
```

**Common Issues:**
- Occlusion (leaves blocking tomatoes)
- Lighting variations
- Similar colors (ripe vs. breaker)
- Small/far tomatoes

**Solutions:**
- Collect more diverse training data
- Adjust confidence threshold
- Use data augmentation
- Multi-stage detection (coarse then fine)

---

## Deliverables

Submit:

1. **Dataset:**
   - Annotated images (zip file)
   - Train/val split documentation

2. **Trained Model:**
   - best.pt file
   - Training metrics (plots from runs/detect/)

3. **Code:**
   - Training script
   - Inference/application code

4. **Report (2-3 pages):**
   - Dataset description (sources, size, distribution)
   - Training process (hyperparameters, duration)
   - Performance metrics (mAP, precision, recall)
   - Error analysis (common failure modes)
   - Application scenarios (how would this be used in production?)

---

## Bonus Challenges

1. **Multi-Model Ensemble:** Train 3 models with different architectures (YOLOv8n, YOLOv8s, YOLOv8m) and combine predictions
2. **Instance Segmentation:** Use YOLO-Seg for pixel-perfect masks
3. **Disease Detection:** Add classes for disease symptoms (e.g., blossom end rot)
4. **3D Localization:** Integrate depth camera to get 3D positions
5. **Edge Deployment:** Deploy to Raspberry Pi or Jetson Nano

---

**Good luck training your detector!**
