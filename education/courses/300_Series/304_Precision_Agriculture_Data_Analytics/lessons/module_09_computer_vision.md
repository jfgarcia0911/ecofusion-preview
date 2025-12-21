# Module 9: Computer Vision Applications

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Understand computer vision fundamentals for agriculture
2. Implement image-based plant health monitoring
3. Apply object detection for crop counting
4. Use semantic segmentation for canopy analysis
5. Build automated quality grading systems

---

## 1. Computer Vision Overview

### Agricultural Applications

```
┌──────────────────────────────────────────────────────────┐
│      COMPUTER VISION IN AGRICULTURE                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  DISEASE DETECTION                                       │
│  • Identify diseased leaves early                        │
│  • Classify disease types                                │
│  • Monitor disease progression                           │
│                                                          │
│  GROWTH MONITORING                                       │
│  • Measure plant height, canopy area                     │
│  • Track growth rates                                    │
│  • Estimate biomass                                      │
│                                                          │
│  QUALITY GRADING                                         │
│  • Size classification                                   │
│  • Color assessment                                      │
│  • Defect detection                                      │
│                                                          │
│  COUNTING & INVENTORY                                    │
│  • Count plants, fruits, fish                            │
│  • Track populations                                     │
│  • Automate inventory                                    │
│                                                          │
│  RIPENESS DETECTION                                      │
│  • Predict harvest timing                                │
│  • Optimize picking schedules                            │
│  • Reduce waste                                          │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Image Preprocessing

### Basic Image Operations

```python
import cv2
import numpy as np
from PIL import Image

# Load image
image = cv2.imread('lettuce.jpg')
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# Resize
image_resized = cv2.resize(image_rgb, (512, 512))

# Convert to grayscale
image_gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)

# Apply Gaussian blur (noise reduction)
image_blurred = cv2.GaussianBlur(image_rgb, (5, 5), 0)

# Edge detection
edges = cv2.Canny(image_gray, threshold1=50, threshold2=150)

# Display
import matplotlib.pyplot as plt

fig, axes = plt.subplots(2, 3, figsize=(15, 10))
axes[0, 0].imshow(image_rgb)
axes[0, 0].set_title('Original')
axes[0, 1].imshow(image_gray, cmap='gray')
axes[0, 1].set_title('Grayscale')
axes[0, 2].imshow(image_blurred)
axes[0, 2].set_title('Blurred')
axes[1, 0].imshow(edges, cmap='gray')
axes[1, 0].set_title('Edges')
plt.tight_layout()
plt.show()
```

### Color Space Analysis

```python
# Convert to HSV (Hue, Saturation, Value)
image_hsv = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2HSV)

# Extract green vegetation (typical range)
lower_green = np.array([35, 40, 40])
upper_green = np.array([85, 255, 255])

# Create mask
mask = cv2.inRange(image_hsv, lower_green, upper_green)

# Apply mask
vegetation_only = cv2.bitwise_and(image_rgb, image_rgb, mask=mask)

# Calculate vegetation percentage
total_pixels = mask.size
green_pixels = cv2.countNonZero(mask)
vegetation_pct = (green_pixels / total_pixels) * 100

print(f"Vegetation coverage: {vegetation_pct:.1f}%")
```

---

## 3. Plant Health Monitoring

### Healthy vs. Diseased Classification

```python
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.preprocessing.image import img_to_array, load_img
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, GlobalAveragePooling2D, Dropout

# Load pre-trained MobileNetV2 (transfer learning)
base_model = MobileNetV2(weights='imagenet', include_top=False,
                          input_shape=(224, 224, 3))
base_model.trainable = False  # Freeze base layers

# Build classification model
model = Sequential([
    base_model,
    GlobalAveragePooling2D(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(2, activation='softmax')  # 2 classes: healthy, diseased
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

# Train (assuming you have image data)
# history = model.fit(train_generator, validation_data=val_generator, epochs=10)

# Predict on new image
def predict_health(image_path):
    img = load_img(image_path, target_size=(224, 224))
    img_array = img_to_array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    prediction = model.predict(img_array)
    classes = ['Healthy', 'Diseased']

    result = classes[np.argmax(prediction)]
    confidence = np.max(prediction) * 100

    return result, confidence

# result, conf = predict_health('test_lettuce.jpg')
# print(f"Prediction: {result} ({conf:.1f}% confidence)")
```

### Disease Type Classification

```python
# Multi-class disease classification
disease_classes = ['Healthy', 'Powdery_Mildew', 'Downy_Mildew',
                   'Bacterial_Spot', 'Nutrient_Deficiency']

# Build model with more classes
model_multiclass = Sequential([
    MobileNetV2(weights='imagenet', include_top=False, input_shape=(224, 224, 3)),
    GlobalAveragePooling2D(),
    Dense(256, activation='relu'),
    Dropout(0.5),
    Dense(len(disease_classes), activation='softmax')
])

model_multiclass.compile(optimizer='adam',
                          loss='categorical_crossentropy',
                          metrics=['accuracy'])
```

---

## 4. Object Detection and Counting

### YOLO for Plant Counting

```python
# Using pre-trained YOLO (You Only Look Once)
# Note: Requires yolov5 package or similar

# Pseudo-code for YOLO-based plant detection
"""
import torch

# Load pre-trained or custom-trained YOLO model
model = torch.hub.load('ultralytics/yolov5', 'custom',
                        path='plant_counter.pt')

# Detect plants
results = model('greenhouse_overhead.jpg')

# Get detections
detections = results.pandas().xyxy[0]  # Bounding boxes

# Count plants
plant_count = len(detections[detections['name'] == 'lettuce'])

print(f"Detected {plant_count} lettuce plants")

# Visualize
results.show()
"""
```

### Contour-Based Counting (Simpler)

```python
# Find contours for counting individual plants
image_gray = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2GRAY)
_, binary = cv2.threshold(image_gray, 127, 255, cv2.THRESH_BINARY)

# Find contours
contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL,
                                cv2.CHAIN_APPROX_SIMPLE)

# Filter by size (remove noise)
min_area = 500  # pixels
valid_contours = [c for c in contours if cv2.contourArea(c) > min_area]

# Draw contours
image_contours = image_rgb.copy()
cv2.drawContours(image_contours, valid_contours, -1, (0, 255, 0), 2)

# Count
plant_count = len(valid_contours)
print(f"Counted {plant_count} plants")

plt.imshow(image_contours)
plt.title(f'Detected {plant_count} Plants')
plt.show()
```

---

## 5. Semantic Segmentation

### Canopy Coverage Analysis

```python
# U-Net style segmentation (simplified)
from tensorflow.keras.layers import Conv2D, MaxPooling2D, UpSampling2D, concatenate, Input
from tensorflow.keras.models import Model

def simple_unet(input_shape=(256, 256, 3)):
    inputs = Input(input_shape)

    # Encoder
    c1 = Conv2D(64, (3, 3), activation='relu', padding='same')(inputs)
    p1 = MaxPooling2D((2, 2))(c1)

    c2 = Conv2D(128, (3, 3), activation='relu', padding='same')(p1)
    p2 = MaxPooling2D((2, 2))(c2)

    # Bottleneck
    c3 = Conv2D(256, (3, 3), activation='relu', padding='same')(p2)

    # Decoder
    u4 = UpSampling2D((2, 2))(c3)
    u4 = concatenate([u4, c2])
    c4 = Conv2D(128, (3, 3), activation='relu', padding='same')(u4)

    u5 = UpSampling2D((2, 2))(c4)
    u5 = concatenate([u5, c1])
    c5 = Conv2D(64, (3, 3), activation='relu', padding='same')(u5)

    # Output: pixel-wise classification
    outputs = Conv2D(1, (1, 1), activation='sigmoid')(c5)

    model = Model(inputs=[inputs], outputs=[outputs])
    return model

# Create model
seg_model = simple_unet()
seg_model.compile(optimizer='adam', loss='binary_crossentropy',
                  metrics=['accuracy'])

# Predict canopy mask
# mask = seg_model.predict(image_array)

# Calculate canopy coverage
def calculate_canopy_coverage(mask):
    """Calculate percentage of image covered by canopy."""
    total_pixels = mask.size
    canopy_pixels = np.sum(mask > 0.5)
    coverage = (canopy_pixels / total_pixels) * 100
    return coverage
```

---

## 6. Quality Grading System

### Size-Based Grading

```python
def grade_lettuce(image_path):
    """Grade lettuce head by size and color."""

    # Load and preprocess
    image = cv2.imread(image_path)
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

    # Convert to HSV for green extraction
    image_hsv = cv2.cvtColor(image_rgb, cv2.COLOR_RGB2HSV)
    lower_green = np.array([35, 40, 40])
    upper_green = np.array([85, 255, 255])
    mask = cv2.inRange(image_hsv, lower_green, upper_green)

    # Find contours
    contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL,
                                    cv2.CHAIN_APPROX_SIMPLE)

    if len(contours) == 0:
        return "No lettuce detected", None

    # Get largest contour (main head)
    largest_contour = max(contours, key=cv2.contourArea)
    area = cv2.contourArea(largest_contour)

    # Calculate equivalent diameter
    diameter = 2 * np.sqrt(area / np.pi)

    # Grade based on size (adjust thresholds as needed)
    if diameter > 150:
        grade = "A"
        price_multiplier = 1.2
    elif diameter > 100:
        grade = "B"
        price_multiplier = 1.0
    else:
        grade = "C"
        price_multiplier = 0.8

    # Check color quality (greenness)
    green_pct = (cv2.countNonZero(mask) / mask.size) * 100

    if green_pct < 30:
        grade = max("C", grade)  # Downgrade if not green enough

    return {
        'grade': grade,
        'diameter_pixels': diameter,
        'green_coverage': green_pct,
        'price_multiplier': price_multiplier
    }

# Example usage
# result = grade_lettuce('lettuce_sample.jpg')
# print(f"Grade: {result['grade']}, Diameter: {result['diameter_pixels']:.0f}px")
```

---

## 7. Automated Monitoring System

### Time-Lapse Growth Tracking

```python
import glob
from datetime import datetime

def analyze_growth_timelapse(image_folder):
    """Analyze plant growth over time from timelapse images."""

    # Get all images sorted by timestamp
    images = sorted(glob.glob(f"{image_folder}/*.jpg"))

    growth_data = []

    for img_path in images:
        # Extract timestamp from filename (format: YYYYMMDD_HHMMSS.jpg)
        filename = os.path.basename(img_path)
        timestamp_str = filename.split('.')[0]
        timestamp = datetime.strptime(timestamp_str, '%Y%m%d_%H%M%S')

        # Load image and measure size
        image = cv2.imread(img_path)
        image_hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        # Extract vegetation
        lower_green = np.array([35, 40, 40])
        upper_green = np.array([85, 255, 255])
        mask = cv2.inRange(image_hsv, lower_green, upper_green)

        # Calculate area
        vegetation_area = cv2.countNonZero(mask)

        growth_data.append({
            'timestamp': timestamp,
            'area_pixels': vegetation_area
        })

    # Create DataFrame
    df = pd.DataFrame(growth_data)
    df['days_from_start'] = (df['timestamp'] - df['timestamp'].min()).dt.total_seconds() / 86400

    # Plot growth curve
    plt.figure(figsize=(12, 6))
    plt.plot(df['days_from_start'], df['area_pixels'], 'bo-')
    plt.xlabel('Days from Start')
    plt.ylabel('Plant Area (pixels)')
    plt.title('Plant Growth Over Time')
    plt.grid(True, alpha=0.3)
    plt.show()

    # Calculate growth rate
    growth_rate = (df['area_pixels'].iloc[-1] - df['area_pixels'].iloc[0]) / df['days_from_start'].iloc[-1]
    print(f"Average growth rate: {growth_rate:.1f} pixels/day")

    return df
```

---

## 8. Real-Time Processing

### Webcam-Based Monitoring

```python
def monitor_realtime(camera_index=0):
    """Real-time plant monitoring from webcam."""

    cap = cv2.VideoCapture(camera_index)

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Convert to HSV
        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

        # Green vegetation mask
        lower_green = np.array([35, 40, 40])
        upper_green = np.array([85, 255, 255])
        mask = cv2.inRange(hsv, lower_green, upper_green)

        # Calculate coverage
        coverage = (cv2.countNonZero(mask) / mask.size) * 100

        # Display
        result = cv2.bitwise_and(frame, frame, mask=mask)
        cv2.putText(result, f"Coverage: {coverage:.1f}%",
                    (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)

        cv2.imshow('Plant Monitor', result)

        # Press 'q' to quit
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

# Run monitoring
# monitor_realtime()
```

---

## Key Takeaways

1. **Computer vision automates visual inspections** - Scale beyond human capacity
2. **Transfer learning accelerates development** - Use pre-trained models
3. **Color spaces matter** - HSV often better than RGB for plants
4. **Start simple, add complexity** - Contours before deep learning
5. **Quality data is essential** - Varied lighting, angles, conditions
6. **Real-time processing is achievable** - Optimize for edge devices

---

## Practical Exercise

1. **Implement green vegetation detector** using HSV masking
2. **Count plants** in overhead image using contours
3. **Build quality grader** for size classification
4. **Create time-lapse analyzer** for growth tracking
5. **Train simple disease classifier** using transfer learning
6. **Design automated monitoring system** for your facility

---

## Next Module Preview

**Module 10: Real-Time Decision Support** covers:
- Alert systems and thresholds
- Automated control logic
- Decision trees for operations
- Rule-based vs. ML-based decisions
- Human-in-the-loop systems

---

*EcoFusion Academy - Course 304 - Module 9*
*Precision Agriculture & Data Analytics*
