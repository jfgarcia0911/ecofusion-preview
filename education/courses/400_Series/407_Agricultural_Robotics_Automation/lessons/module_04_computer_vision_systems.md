# Module 4: Computer Vision Systems

## Overview

Computer vision enables robots to perceive and interpret their environment, locate crops, assess quality, and guide manipulation tasks. This module covers image acquisition, processing algorithms, deep learning models, and practical implementation for agricultural robotics.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

By the end of this module, you will be able to:

1. Select and configure appropriate camera systems for agricultural applications
2. Implement image preprocessing and enhancement techniques
3. Apply classical computer vision algorithms (edge detection, segmentation, feature extraction)
4. Train and deploy deep learning models for crop detection and classification
5. Perform 3D reconstruction using stereo vision and depth sensors
6. Optimize vision systems for real-time performance on embedded platforms
7. Integrate vision feedback with robot control systems

---

## 1. Camera Systems and Image Acquisition

### Camera Types

**A. RGB Cameras**
```
Specifications:
- Resolution: 0.3 MP (VGA) to 12+ MP
- Frame rate: 30-120 fps
- Interface: USB 3.0, GigE, MIPI
- Sensor size: 1/4" to 1" typical
- Cost: $50-$2,000

Agricultural Use Cases:
✓ Color-based ripeness detection
✓ Disease/pest identification (color changes)
✓ General object detection
✗ Poor depth information
✗ Lighting sensitive
```

**B. Depth Cameras**
```
Technology Comparison:

Stereo Vision:
- Principle: Triangulation from two cameras
- Range: 0.5-10m
- Accuracy: ±1-10mm (decreases with distance)
- Outdoor: Good (passive, uses ambient light)
- Cost: $100-$1,000
- Example: ZED, RealSense D435

Time-of-Flight (ToF):
- Principle: Measure light travel time
- Range: 0.1-8m
- Accuracy: ±1-10mm
- Outdoor: Fair (affected by sunlight)
- Cost: $200-$5,000
- Example: Kinect Azure, pmd CamBoard

Structured Light:
- Principle: Project pattern, measure distortion
- Range: 0.3-3m
- Accuracy: ±0.5-5mm (best close range)
- Outdoor: Poor (pattern visibility)
- Cost: $150-$3,000
- Example: RealSense SR305, Orbbec Astra
```

**C. Hyperspectral/Multispectral Cameras**
```
Spectral Bands:
RGB:          3 bands (R, G, B)
Multispectral: 4-12 bands (visible + NIR)
Hyperspectral: 100-1000 bands (continuous spectrum)

Applications:
- Nutrient deficiency detection (chlorophyll fluorescence)
- Disease early detection (spectral signatures)
- Ripeness assessment (beyond visible spectrum)
- Water stress monitoring

Challenges:
- Large data volumes (GB/s)
- Expensive ($5,000-$50,000+)
- Complex calibration
- Slower frame rates (1-30 fps)
```

### Lighting Considerations

**LED Lighting for Vision:**
```
    Fixed Overhead Lighting          Robot-Mounted Lighting
         │││││                              │││
         │││││                           ┌──┴──┐
         vvvvv                           │Light│
    ┌────────────┐                      └──┬──┘
    │   Crop     │                         │
    │            │                      ┌──┴──┐
    └────────────┘                      │Robot│
         │                              └─────┘
      Camera                             Camera

Comparison:
Fixed: Consistent, but shadows from plants
Robot: Controlled, but adds weight/power
```

**Spectral Selection:**
```
Application           Wavelengths (nm)      Rationale
=======================================================================
Ripeness (tomato)     630-680 (red)        Lycopene absorption
                      700-750 (NIR)         Chlorophyll

Chlorophyll content   550 (green)          Reflectance changes
                      680 (red)             Absorption peak

Disease detection     400-450 (blue)       Fluorescence excitation
                      680-750 (red/NIR)    Stress indicators

General RGB          450, 550, 630         Human-visible spectrum
```

### Camera Selection Matrix

```
Application          Resolution  FPS   Depth   Cost      Recommended
========================================================================
Fruit detection      2MP         30    No      $200      USB RGB
Harvesting guidance  VGA         60    Yes     $500      RealSense D435
Quality inspection   5MP+        15    No      $1000     GigE RGB
Facility navigation  VGA         30    Yes     $300      RealSense T265
Phenotyping         12MP        10    Yes     $5000     Hyperspectral
```

---

## 2. Image Preprocessing

### Calibration

**Camera Intrinsic Parameters:**
```
Pinhole Camera Model:

    ┌          ┐   ┌            ┐
    │ u │       │ fx  0   cx │   ┌   ┐
    │ v │ = K × │ 0   fy  cy │ × │ X │
    │ 1 │       │ 0   0   1  │   │ Y │
    └   ┘       └            ┘   │ Z │
                                 └   ┘
Where:
K = intrinsic matrix
(fx, fy) = focal lengths (pixels)
(cx, cy) = principal point (pixels)
(u, v) = image coordinates
(X, Y, Z) = 3D point in camera frame
```

**Lens Distortion Correction:**
```
Radial distortion: r' = r(1 + k₁r² + k₂r⁴ + k₃r⁶)
Tangential distortion: dx = p₁(r² + 2x²) + 2p₂xy
                       dy = p₂(r² + 2y²) + 2p₁xy

Calibration using checkerboard pattern:
1. Capture 20-50 images from various angles
2. Detect corners automatically
3. Solve for K, k₁-k₃, p₁-p₂
4. Validate on test images
```

**Python Implementation:**
```python
import cv2
import numpy as np

def calibrate_camera(checkerboard_images, pattern_size=(9, 6), square_size=25):
    """
    Calibrate camera using checkerboard pattern

    Args:
        checkerboard_images: List of image paths
        pattern_size: (width, height) in corners
        square_size: Size of squares in mm

    Returns:
        camera_matrix, dist_coeffs, rvecs, tvecs
    """
    # Prepare object points
    objp = np.zeros((pattern_size[0] * pattern_size[1], 3), np.float32)
    objp[:, :2] = np.mgrid[0:pattern_size[0], 0:pattern_size[1]].T.reshape(-1, 2)
    objp *= square_size

    obj_points = []  # 3D points
    img_points = []  # 2D points

    for image_path in checkerboard_images:
        img = cv2.imread(image_path)
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

        # Find checkerboard corners
        ret, corners = cv2.findChessboardCorners(gray, pattern_size, None)

        if ret:
            # Refine corner locations
            criteria = (cv2.TERM_CRITERIA_EPS + cv2.TERM_CRITERIA_MAX_ITER, 30, 0.001)
            corners_refined = cv2.cornerSubPix(gray, corners, (11, 11), (-1, -1), criteria)

            obj_points.append(objp)
            img_points.append(corners_refined)

    # Calibrate camera
    ret, mtx, dist, rvecs, tvecs = cv2.calibrateCamera(
        obj_points, img_points, gray.shape[::-1], None, None
    )

    print(f"Calibration RMS error: {ret:.3f} pixels")
    print(f"Camera matrix:\n{mtx}")
    print(f"Distortion coefficients: {dist.ravel()}")

    return mtx, dist, rvecs, tvecs

# Usage
images = ['calib_01.jpg', 'calib_02.jpg', ..., 'calib_20.jpg']
K, dist, _, _ = calibrate_camera(images)

# Save calibration
np.savez('camera_calib.npz', camera_matrix=K, dist_coeffs=dist)
```

### Color Space Conversion

**RGB to HSV for Color-Based Segmentation:**
```python
def segment_ripe_tomatoes(image):
    """
    Segment ripe tomatoes based on red color

    Args:
        image: RGB image (numpy array)

    Returns:
        mask: Binary mask of ripe tomatoes
    """
    # Convert to HSV
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

    # Define red color range in HSV
    # Red wraps around H=0/180, so need two ranges
    lower_red1 = np.array([0, 100, 100])
    upper_red1 = np.array([10, 255, 255])
    lower_red2 = np.array([160, 100, 100])
    upper_red2 = np.array([180, 255, 255])

    # Create masks
    mask1 = cv2.inRange(hsv, lower_red1, upper_red1)
    mask2 = cv2.inRange(hsv, lower_red2, upper_red2)
    mask = cv2.bitwise_or(mask1, mask2)

    # Morphological operations to clean up
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
    mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

    return mask
```

### Illumination Normalization

**CLAHE (Contrast Limited Adaptive Histogram Equalization):**
```python
def enhance_image(image):
    """
    Improve image quality for variable lighting

    Args:
        image: RGB image

    Returns:
        enhanced: Enhanced RGB image
    """
    # Convert to LAB color space
    lab = cv2.cvtColor(image, cv2.COLOR_BGR2LAB)

    # Apply CLAHE to L channel
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    lab[:, :, 0] = clahe.apply(lab[:, :, 0])

    # Convert back to RGB
    enhanced = cv2.cvtColor(lab, cv2.COLOR_LAB2BGR)

    return enhanced
```

---

## 3. Object Detection and Segmentation

### Classical Methods

**Edge Detection:**
```python
def detect_leaf_edges(image):
    """
    Detect plant leaf boundaries using Canny edge detection

    Args:
        image: Grayscale image

    Returns:
        edges: Binary edge map
    """
    # Gaussian blur to reduce noise
    blurred = cv2.GaussianBlur(image, (5, 5), 1.0)

    # Canny edge detection
    edges = cv2.Canny(blurred, threshold1=50, threshold2=150)

    return edges
```

**Contour-Based Segmentation:**
```python
def find_fruits(image):
    """
    Detect and measure fruits using contours

    Args:
        image: RGB image

    Returns:
        detections: List of (bbox, area, centroid) tuples
    """
    # Segment fruits (e.g., using color)
    mask = segment_ripe_tomatoes(image)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    detections = []
    for contour in contours:
        # Filter by size
        area = cv2.contourArea(contour)
        if area < 1000 or area > 50000:  # Pixels
            continue

        # Bounding box
        x, y, w, h = cv2.boundingRect(contour)

        # Centroid
        M = cv2.moments(contour)
        if M['m00'] != 0:
            cx = int(M['m10'] / M['m00'])
            cy = int(M['m01'] / M['m00'])
        else:
            cx, cy = x + w//2, y + h//2

        detections.append({
            'bbox': (x, y, w, h),
            'area': area,
            'centroid': (cx, cy),
            'contour': contour
        })

    return detections
```

### Deep Learning for Detection

**YOLO (You Only Look Once):**
```
Architecture:
    Input Image (608×608)
         ↓
    ┌─────────┐
    │Backbone │  Feature extraction (Darknet-53, ResNet, etc.)
    │ Network │
    └────┬────┘
         ↓
    ┌─────────┐
    │  Neck   │  Feature pyramid network (FPN)
    └────┬────┘
         ↓
    ┌─────────┐
    │  Head   │  Detection heads (3 scales)
    └────┬────┘
         ↓
    Predictions: [class, confidence, bbox] × N objects
```

**Training Custom Crop Detector:**
```python
# Using YOLOv8 with ultralytics
from ultralytics import YOLO

# 1. Prepare dataset in YOLO format
# dataset/
#   ├── images/
#   │   ├── train/
#   │   └── val/
#   └── labels/
#       ├── train/
#       └── val/

# Each label file (txt):
# <class_id> <x_center> <y_center> <width> <height>
# All values normalized to [0, 1]

# 2. Create config file (data.yaml)
data_config = """
train: dataset/images/train
val: dataset/images/val

nc: 4  # Number of classes
names: ['tomato_ripe', 'tomato_unripe', 'leaf', 'stem']
"""

with open('tomato_data.yaml', 'w') as f:
    f.write(data_config)

# 3. Train model
model = YOLO('yolov8n.pt')  # Start from pretrained weights

results = model.train(
    data='tomato_data.yaml',
    epochs=100,
    imgsz=640,
    batch=16,
    device=0,  # GPU
    workers=4,
    patience=20,  # Early stopping
    save=True
)

# 4. Validate
metrics = model.val()
print(f"mAP@50: {metrics.box.map50:.3f}")
print(f"mAP@50-95: {metrics.box.map:.3f}")

# 5. Export for deployment
model.export(format='onnx')  # For CPU/GPU inference
model.export(format='engine')  # For NVIDIA TensorRT
```

**Inference Pipeline:**
```python
import cv2
from ultralytics import YOLO

class FruitDetector:
    def __init__(self, model_path, conf_thresh=0.5):
        self.model = YOLO(model_path)
        self.conf_thresh = conf_thresh

    def detect(self, image):
        """
        Detect fruits in image

        Args:
            image: RGB image (numpy array)

        Returns:
            detections: List of Detection objects
        """
        # Run inference
        results = self.model(image, conf=self.conf_thresh, verbose=False)

        detections = []
        for r in results:
            boxes = r.boxes
            for box in boxes:
                x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                conf = box.conf[0].item()
                cls = int(box.cls[0].item())

                detections.append({
                    'bbox': (int(x1), int(y1), int(x2-x1), int(y2-y1)),
                    'confidence': conf,
                    'class': cls,
                    'class_name': r.names[cls]
                })

        return detections

    def visualize(self, image, detections):
        """Draw detection results on image"""
        result_img = image.copy()

        for det in detections:
            x, y, w, h = det['bbox']
            cv2.rectangle(result_img, (x, y), (x+w, y+h), (0, 255, 0), 2)

            label = f"{det['class_name']} {det['confidence']:.2f}"
            cv2.putText(result_img, label, (x, y-10),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

        return result_img

# Usage
detector = FruitDetector('best.pt', conf_thresh=0.6)

cap = cv2.VideoCapture(0)
while True:
    ret, frame = cap.read()
    if not ret:
        break

    detections = detector.detect(frame)
    result = detector.visualize(frame, detections)

    cv2.imshow('Fruit Detection', result)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
```

### Instance Segmentation

**Mask R-CNN for Precise Boundaries:**
```
Applications:
- Overlapping fruit detection
- Precise leaf area measurement
- Robotic grasp planning (exact contours)

Output:
- Bounding boxes
- Class labels
- Pixel-level masks

Training Requirements:
- Polygon annotations (not just bboxes)
- More compute than object detection
- Tools: LabelMe, CVAT, Supervisely
```

---

## 4. 3D Vision and Depth Sensing

### Stereo Vision

**Principle:**
```
    Left Camera              Right Camera
         │                        │
         └────────b───────────────┘
              (baseline)
               │
               ↓
         ┌─────────┐
         │ Point P │
         └─────────┘

Depth calculation:
Z = (f × b) / d

Where:
f = focal length
b = baseline (distance between cameras)
d = disparity (pixel difference between left/right)
```

**Implementation:**
```python
import cv2
import numpy as np

class StereoDepthEstimator:
    def __init__(self, left_calib, right_calib, stereo_calib):
        """
        Initialize stereo depth estimator

        Args:
            left_calib: {'K': camera matrix, 'dist': distortion coeffs}
            right_calib: {'K': camera matrix, 'dist': distortion coeffs}
            stereo_calib: {'R': rotation, 'T': translation, 'E': essential, 'F': fundamental}
        """
        self.K_left = left_calib['K']
        self.K_right = right_calib['K']
        self.dist_left = left_calib['dist']
        self.dist_right = right_calib['dist']

        # Compute rectification transforms
        img_size = (640, 480)  # Adjust to your camera
        self.R1, self.R2, self.P1, self.P2, self.Q, _, _ = cv2.stereoRectify(
            self.K_left, self.dist_left,
            self.K_right, self.dist_right,
            img_size,
            stereo_calib['R'], stereo_calib['T'],
            flags=cv2.CALIB_ZERO_DISPARITY,
            alpha=0
        )

        # Precompute rectification maps
        self.map_left = cv2.initUndistortRectifyMap(
            self.K_left, self.dist_left, self.R1, self.P1, img_size, cv2.CV_32FC1
        )
        self.map_right = cv2.initUndistortRectifyMap(
            self.K_right, self.dist_right, self.R2, self.P2, img_size, cv2.CV_32FC1
        )

        # Stereo matcher
        self.stereo = cv2.StereoSGBM_create(
            minDisparity=0,
            numDisparities=128,  # Must be divisible by 16
            blockSize=5,
            P1=8 * 3 * 5**2,
            P2=32 * 3 * 5**2,
            disp12MaxDiff=1,
            uniquenessRatio=10,
            speckleWindowSize=100,
            speckleRange=32
        )

    def compute_depth(self, img_left, img_right):
        """
        Compute depth map from stereo pair

        Args:
            img_left, img_right: Grayscale images

        Returns:
            depth_map: Depth in mm (same size as input)
        """
        # Rectify images
        rect_left = cv2.remap(img_left, *self.map_left, cv2.INTER_LINEAR)
        rect_right = cv2.remap(img_right, *self.map_right, cv2.INTER_LINEAR)

        # Compute disparity
        disparity = self.stereo.compute(rect_left, rect_right).astype(np.float32) / 16.0

        # Convert to depth using Q matrix
        points_3d = cv2.reprojectImageTo3D(disparity, self.Q)
        depth_map = points_3d[:, :, 2]

        # Filter invalid depths
        depth_map[depth_map < 0] = 0
        depth_map[depth_map > 10000] = 0  # Limit to 10m

        return depth_map
```

### Point Cloud Processing

**From Depth Map to 3D Points:**
```python
def depth_to_pointcloud(depth_map, K, color_image=None):
    """
    Convert depth map to 3D point cloud

    Args:
        depth_map: Depth in mm (H×W)
        K: Camera intrinsic matrix (3×3)
        color_image: Optional RGB image (H×W×3)

    Returns:
        points: N×3 array of (x, y, z) coordinates
        colors: N×3 array of (r, g, b) if color_image provided
    """
    h, w = depth_map.shape
    fx, fy = K[0, 0], K[1, 1]
    cx, cy = K[0, 2], K[1, 2]

    # Create pixel coordinate grid
    u, v = np.meshgrid(np.arange(w), np.arange(h))

    # Back-project to 3D
    z = depth_map
    x = (u - cx) * z / fx
    y = (v - cy) * z / fy

    # Stack coordinates
    points = np.stack([x, y, z], axis=-1).reshape(-1, 3)

    # Remove invalid points (zero depth)
    valid = points[:, 2] > 0
    points = points[valid]

    colors = None
    if color_image is not None:
        colors = color_image.reshape(-1, 3)[valid]

    return points, colors

# Visualization with Open3D
import open3d as o3d

points, colors = depth_to_pointcloud(depth_map, K, rgb_image)

pcd = o3d.geometry.PointCloud()
pcd.points = o3d.utility.Vector3dVector(points / 1000.0)  # Convert mm to m
if colors is not None:
    pcd.colors = o3d.utility.Vector3dVector(colors / 255.0)

o3d.visualization.draw_geometries([pcd])
```

---

## 5. Real-Time Performance Optimization

### Hardware Acceleration

**GPU Acceleration with CUDA:**
```python
import cv2

# Upload to GPU
gpu_image = cv2.cuda_GpuMat()
gpu_image.upload(cpu_image)

# Process on GPU
gpu_gray = cv2.cuda.cvtColor(gpu_image, cv2.COLOR_BGR2GRAY)
gpu_blurred = cv2.cuda.createGaussianFilter(
    cv2.CV_8UC1, cv2.CV_8UC1, (5, 5), 1.0
).apply(gpu_gray)

# Download result
result = gpu_blurred.download()
```

**TensorRT Optimization for Deep Learning:**
```python
# Convert ONNX model to TensorRT engine
import tensorrt as trt

def build_engine(onnx_file, engine_file, precision='fp16'):
    """
    Build TensorRT engine from ONNX model

    Args:
        onnx_file: Input ONNX model path
        engine_file: Output TensorRT engine path
        precision: 'fp32', 'fp16', or 'int8'

    Typical speedup: 2-5× over ONNX, 5-10× over PyTorch
    """
    logger = trt.Logger(trt.Logger.WARNING)
    builder = trt.Builder(logger)
    config = builder.create_builder_config()
    config.max_workspace_size = 1 << 30  # 1GB

    if precision == 'fp16':
        config.set_flag(trt.BuilderFlag.FP16)
    elif precision == 'int8':
        config.set_flag(trt.BuilderFlag.INT8)
        # Requires calibration data

    network = builder.create_network(1 << int(trt.NetworkDefinitionCreationFlag.EXPLICIT_BATCH))
    parser = trt.OnnxParser(network, logger)

    with open(onnx_file, 'rb') as model:
        if not parser.parse(model.read()):
            print("ERROR: Failed to parse ONNX file")
            for error in range(parser.num_errors):
                print(parser.get_error(error))
            return None

    engine = builder.build_engine(network, config)

    with open(engine_file, 'wb') as f:
        f.write(engine.serialize())

    print(f"TensorRT engine saved to {engine_file}")
    return engine
```

### Model Quantization

**INT8 Quantization (8× smaller, 2-4× faster):**
```
Original (FP32):  4 bytes per weight
Quantized (INT8): 1 byte per weight

Accuracy loss: typically <1% mAP with calibration

Suitable for:
✓ Embedded deployment (Jetson Nano/Xavier)
✓ High throughput requirements
✓ Battery-powered robots
```

---

## Summary

Computer vision is the sensory foundation of agricultural robotics, enabling perception, localization, and quality assessment. Modern systems combine classical image processing with deep learning for robust crop detection and segmentation. 3D vision provides essential depth information for manipulation tasks. Real-time performance on embedded platforms requires careful optimization through hardware acceleration, model compression, and efficient algorithms.

---

## Key Takeaways

1. Camera selection depends on application: RGB for color, depth cameras for 3D, hyperspectral for advanced analysis
2. Image preprocessing (calibration, color correction, enhancement) is critical for robust performance
3. Deep learning (YOLO, Mask R-CNN) outperforms classical methods for complex detection tasks
4. 3D vision (stereo, ToF, structured light) enables precise robot guidance
5. Real-time performance requires GPU acceleration and model optimization (TensorRT, quantization)
6. Lighting control is essential for consistent vision performance in agricultural environments
7. Custom dataset creation and training is necessary for crop-specific applications

---

*Continue to Module 5: Navigation and Localization*
