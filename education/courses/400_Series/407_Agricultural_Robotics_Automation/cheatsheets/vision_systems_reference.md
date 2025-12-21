# Quick Reference: Computer Vision for Agricultural Robotics

## Camera Selection Guide

| Application | Resolution | FPS | Depth | Type | Cost |
|-------------|-----------|-----|-------|------|------|
| Fruit detection | 2-5MP | 30 | No | USB RGB | $200 |
| Harvesting | VGA-2MP | 60 | Yes | RealSense D435 | $500 |
| Quality inspection | 5-12MP | 15 | Optional | GigE RGB | $1000 |
| Navigation | VGA | 30 | Yes | RealSense T265 | $300 |
| Phenotyping | 12MP+ | 10 | Yes | Hyperspectral | $5000+ |

## Image Processing Pipeline

```
1. Acquisition → Camera capture
2. Preprocessing → Undistort, denoise, enhance
3. Segmentation → Isolate ROI (region of interest)
4. Feature extraction → Detect objects, keypoints
5. Classification → Identify, categorize
6. Decision → Grasp pose, quality grade, etc.
```

## Camera Calibration

```python
import cv2
import numpy as np

# Calibration using checkerboard
def calibrate_camera(images, pattern_size=(9,6), square_size=25):
    objp = np.zeros((pattern_size[0]*pattern_size[1], 3), np.float32)
    objp[:,:2] = np.mgrid[0:pattern_size[0], 0:pattern_size[1]].T.reshape(-1,2)
    objp *= square_size

    objpoints, imgpoints = [], []
    for img_path in images:
        img = cv2.imread(img_path)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        ret, corners = cv2.findChessboardCorners(gray, pattern_size)
        if ret:
            objpoints.append(objp)
            imgpoints.append(corners)

    ret, K, dist, rvecs, tvecs = cv2.calibrateCamera(
        objpoints, imgpoints, gray.shape[::-1], None, None
    )
    return K, dist

# Usage
K, dist = calibrate_camera(['calib1.jpg', 'calib2.jpg', ...])
```

## Color Spaces

| Space | Use Case | Conversion |
|-------|----------|------------|
| RGB | Display, input | Native |
| HSV | Color-based segmentation | cv2.cvtColor(img, cv2.COLOR_BGR2HSV) |
| LAB | Perceptual uniformity | cv2.cvtColor(img, cv2.COLOR_BGR2LAB) |
| Grayscale | Edge detection, features | cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) |

## Common Operations

### Segmentation (Color-Based)
```python
# Segment ripe tomatoes (red color in HSV)
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
lower = np.array([0, 100, 100])
upper = np.array([10, 255, 255])
mask = cv2.inRange(hsv, lower, upper)
```

### Edge Detection
```python
# Canny edge detection
edges = cv2.Canny(gray_image, threshold1=50, threshold2=150)
```

### Contour Detection
```python
# Find fruit contours
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
for cnt in contours:
    area = cv2.contourArea(cnt)
    if area > 1000:  # Filter small noise
        x, y, w, h = cv2.boundingRect(cnt)
        cv2.rectangle(image, (x,y), (x+w,y+h), (0,255,0), 2)
```

## Deep Learning Models

### YOLO (Object Detection)
```python
from ultralytics import YOLO

# Load model
model = YOLO('yolov8n.pt')

# Train
model.train(data='crops.yaml', epochs=100, imgsz=640)

# Inference
results = model('image.jpg')
for r in results:
    boxes = r.boxes
    for box in boxes:
        x1, y1, x2, y2 = box.xyxy[0]
        conf = box.conf[0]
        cls = int(box.cls[0])
```

### Performance Metrics
```
Precision = TP / (TP + FP)
Recall = TP / (TP + FN)
mAP@50 = Mean Average Precision at IoU=0.5
mAP@50-95 = Average of mAP at IoU 0.5 to 0.95
```

## 3D Vision

### Stereo Depth
```
Depth: Z = (f × b) / d

Where:
f = focal length (pixels)
b = baseline (distance between cameras, mm)
d = disparity (pixel difference)
```

### Point Cloud from Depth
```python
def depth_to_pointcloud(depth, K):
    h, w = depth.shape
    fx, fy = K[0,0], K[1,1]
    cx, cy = K[0,2], K[1,2]

    u, v = np.meshgrid(np.arange(w), np.arange(h))
    z = depth
    x = (u - cx) * z / fx
    y = (v - cy) * z / fy

    points = np.stack([x, y, z], axis=-1).reshape(-1, 3)
    return points[points[:,2] > 0]  # Remove invalid
```

## Optimization

### GPU Acceleration
```python
# OpenCV CUDA
gpu_img = cv2.cuda_GpuMat()
gpu_img.upload(cpu_img)
gpu_result = cv2.cuda.cvtColor(gpu_img, cv2.COLOR_BGR2GRAY)
result = gpu_result.download()
```

### Model Optimization
```
TensorRT: 5-10× speedup
- FP16: 2-3× speedup, <1% accuracy loss
- INT8: 3-4× speedup, 1-3% accuracy loss

Pruning: 20-50% size reduction
Quantization: 4-8× size reduction
```

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Blurry images | Out of focus, motion blur | Autofocus, faster shutter, lighting |
| Poor lighting | Shadows, glare | Add diffuse LED lights |
| Low accuracy | Insufficient training data | Collect more diverse images (1000+ per class) |
| Slow inference | Large model, CPU only | Use smaller model, GPU, TensorRT |
| False positives | Similar backgrounds | Train with negative examples, adjust confidence threshold |

## Key Parameters

### Image Acquisition
```
Resolution: Balance quality vs speed
  Low (VGA 640×480): Fast processing
  Medium (1080p): Good balance
  High (4K+): Quality inspection

Frame rate:
  15 FPS: Static inspection
  30 FPS: Standard
  60+ FPS: Fast motion tracking

Exposure:
  Auto: Convenient but inconsistent
  Fixed: Better for consistent lighting
```

### Model Training
```
Batch size: 16-32 typical (limited by GPU memory)
Learning rate: 0.001 initial, decay over time
Epochs: 100-300 (use early stopping)
Augmentation: Essential (rotation, flip, brightness, etc.)
Train/val/test split: 70%/15%/15% or 80%/10%/10%
```

## Quick Conversions

```python
# Pixels to mm (calibrated)
mm_per_pixel = known_object_size_mm / object_size_pixels
real_size_mm = pixel_size * mm_per_pixel

# Depth to 3D position
X_camera = (u - cx) * Z / fx
Y_camera = (v - cy) * Z / fy
Z_camera = depth_value

# Camera to robot frame
P_robot = T_robot_camera @ [X_cam, Y_cam, Z_cam, 1]
```

---

**Pro Tips:**
- Always calibrate cameras monthly or after movement
- Use controlled lighting (LED rings) for consistency
- Train models with data from actual deployment environment
- Start with pretrained models (transfer learning)
- Monitor inference time; optimize if >50ms per frame
- Keep test set completely separate from training
