# Module 6: Disease & Pest Detection Systems

## Module Overview

This module focuses on developing automated disease and pest detection systems using computer vision and machine learning. Students will learn to build image classification models, implement early warning systems, and integrate AI-powered detection with Integrated Pest Management (IPM) strategies.

**Duration:** 8-10 hours
**Level:** Expert (400-level)
**Prerequisites:** Modules 1-3, experience with convolutional neural networks

---

## Learning Objectives

By the end of this module, you will be able to:

1. Identify common diseases and pests in CEA through image analysis
2. Build and train image classification models for disease detection
3. Implement transfer learning with pre-trained models
4. Design early warning systems using anomaly detection
5. Deploy mobile and edge inference solutions
6. Integrate AI detection with IPM strategies
7. Evaluate model performance for production deployment
8. Handle class imbalance and limited training data

---

## Timed Lesson Outline

### Part 1: Plant Disease & Pest Overview (60 minutes)
- Common CEA diseases and pests (20 min)
- Visual symptoms and identification (15 min)
- Economic impact and importance (15 min)
- Traditional vs. AI-based detection (10 min)

### Part 2: Image Classification Fundamentals (120 minutes)
- Convolutional neural networks review (30 min)
- Data collection and annotation (25 min)
- Data augmentation techniques (25 min)
- Training pipeline setup (25 min)
- Hands-on: Basic classifier (15 min)

### Part 3: Transfer Learning (90 minutes)
- Pre-trained models overview (20 min)
- Fine-tuning strategies (25 min)
- Domain adaptation techniques (20 min)
- Implementation examples (25 min)

### Part 4: Advanced Detection Techniques (120 minutes)
- Object detection for pest counting (30 min)
- Semantic segmentation for disease extent (30 min)
- Multi-task learning (25 min)
- Temporal analysis for progression (20 min)
- Case studies (15 min)

### Part 5: Deployment & Integration (120 minutes)
- Mobile deployment strategies (25 min)
- Edge computing and optimization (30 min)
- Early warning system design (25 min)
- IPM integration framework (25 min)
- Production best practices (15 min)

**Total Time:** 510 minutes (8.5 hours)

---

## 1. Common CEA Diseases and Pests

### 1.1 Major Disease Categories

**Fungal Diseases:**
```
┌─────────────────────────────────────────────┐
│         FUNGAL DISEASES IN CEA              │
├─────────────────────────────────────────────┤
│                                             │
│ POWDERY MILDEW                              │
│ ├── Symptoms: White powdery spots on leaves│
│ ├── Conditions: High humidity, poor airflow│
│ └── Crops: Lettuce, cucumbers, tomatoes    │
│                                             │
│ BOTRYTIS (Gray Mold)                        │
│ ├── Symptoms: Gray fuzzy growth on stems   │
│ ├── Conditions: Cool, humid conditions     │
│ └── Crops: Tomatoes, strawberries, lettuce │
│                                             │
│ PYTHIUM (Root Rot)                          │
│ ├── Symptoms: Brown, mushy roots           │
│ ├── Conditions: Waterlogged media          │
│ └── Crops: Most hydroponic crops           │
│                                             │
│ FUSARIUM WILT                               │
│ ├── Symptoms: Yellowing, wilting leaves    │
│ ├── Conditions: Warm temperatures          │
│ └── Crops: Tomatoes, basil, cucumbers      │
│                                             │
└─────────────────────────────────────────────┘
```

**Bacterial Diseases:**
- **Bacterial Leaf Spot:** Dark spots with yellow halos
- **Bacterial Canker:** Wilting and stem lesions
- **Soft Rot:** Tissue breakdown and foul odor

**Viral Diseases:**
- **Tomato Mosaic Virus:** Mottled leaves, stunted growth
- **Cucumber Mosaic Virus:** Yellowing, distorted leaves
- **Lettuce Mosaic Virus:** Leaf mottling and curling

### 1.2 Common Pests

```
PEST IDENTIFICATION CHART
═════════════════════════

APHIDS
├── Size: 1-3mm
├── Color: Green, black, or white
├── Location: Undersides of leaves, new growth
├── Damage: Yellowing, curling leaves, honeydew
└── Detection: Visual clustering, sticky residue

WHITEFLIES
├── Size: 1-2mm
├── Color: White, moth-like
├── Location: Undersides of leaves
├── Damage: Yellowing leaves, sooty mold
└── Detection: Cloud of insects when disturbed

THRIPS
├── Size: 1-2mm
├── Color: Yellow, brown, or black
├── Location: Flowers, new growth
├── Damage: Silvery scarring on leaves
└── Detection: Microscopic examination needed

SPIDER MITES
├── Size: 0.5mm
├── Color: Red, yellow, or green
├── Location: Undersides of leaves
├── Damage: Stippling, webbing, leaf drop
└── Detection: Fine webbing, magnification

FUNGUS GNATS
├── Size: 3-4mm (adults)
├── Color: Dark gray/black
├── Location: Growing media, flying around plants
├── Damage: Root feeding (larvae)
└── Detection: Yellow sticky traps
```

### 1.3 Economic Impact

**Cost of Disease/Pest Damage:**
```
Annual Impact on Commercial CEA Operations:
┌──────────────────────────────────────┐
│ Crop Loss:           15-30% of yield │
│ Quality Reduction:   10-20% of value │
│ Control Costs:       $5-15 per m²    │
│ Labor (monitoring):  $8-12 per m²    │
│ Downtime:            5-10 days/year  │
│                                      │
│ TOTAL ANNUAL COST:   $50-100k        │
│ (per 1,000 m² facility)             │
└──────────────────────────────────────┘

Benefits of AI Detection:
• Early detection: 40-60% reduction in spread
• Reduced chemical use: 30-50% less pesticides
• Labor savings: 60-80% reduction in scouting time
• Yield improvement: 15-25% through earlier intervention
• Data insights: Identify patterns and prevention strategies
```

---

## 2. Image Classification for Disease Detection

### 2.1 Dataset Preparation

**Image Collection Strategy:**
```python
import cv2
import numpy as np
from pathlib import Path

class PlantDiseaseDataset:
    """
    Dataset class for plant disease images.
    """
    def __init__(self, data_dir, transform=None):
        self.data_dir = Path(data_dir)
        self.transform = transform

        # Class structure
        self.classes = {
            0: 'healthy',
            1: 'powdery_mildew',
            2: 'botrytis',
            3: 'bacterial_spot',
            4: 'spider_mites',
            5: 'aphids',
            6: 'thrips'
        }

        self.images = []
        self.labels = []
        self._load_dataset()

    def _load_dataset(self):
        """
        Load images and labels from directory structure.
        """
        for class_id, class_name in self.classes.items():
            class_dir = self.data_dir / class_name
            if not class_dir.exists():
                continue

            for img_path in class_dir.glob('*.jpg'):
                self.images.append(str(img_path))
                self.labels.append(class_id)

    def __len__(self):
        return len(self.images)

    def __getitem__(self, idx):
        # Load image
        img_path = self.images[idx]
        image = cv2.imread(img_path)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

        label = self.labels[idx]

        # Apply transformations
        if self.transform:
            image = self.transform(image)

        return image, label

# Image annotation guidelines
ANNOTATION_GUIDELINES = """
Image Collection Best Practices:
================================

1. LIGHTING
   - Consistent, diffused lighting
   - Avoid harsh shadows
   - Multiple angles for each sample

2. RESOLUTION
   - Minimum 224×224 pixels
   - Recommended 512×512 or higher
   - Ensure disease features visible

3. VARIETY
   - Multiple growth stages
   - Different severity levels
   - Various lighting conditions
   - Different camera angles

4. LABELING
   - Clear, consistent categories
   - Multiple annotators for validation
   - Document edge cases
   - Include confidence scores

5. BALANCE
   - Equal samples per class (if possible)
   - If imbalanced, plan augmentation
   - Collect challenging examples
"""
```

### 2.2 Data Augmentation

**Augmentation Pipeline:**
```python
import albumentations as A
from albumentations.pytorch import ToTensorV2

def get_train_transforms():
    """
    Training augmentations for plant disease images.
    """
    return A.Compose([
        # Geometric transformations
        A.RandomRotate90(p=0.5),
        A.Flip(p=0.5),
        A.Transpose(p=0.5),

        # Color/lighting variations
        A.OneOf([
            A.RandomBrightnessContrast(
                brightness_limit=0.2,
                contrast_limit=0.2,
                p=1
            ),
            A.HueSaturationValue(
                hue_shift_limit=20,
                sat_shift_limit=30,
                val_shift_limit=20,
                p=1
            ),
        ], p=0.5),

        # Blur and noise
        A.OneOf([
            A.MotionBlur(p=1),
            A.GaussianBlur(p=1),
            A.GaussNoise(p=1),
        ], p=0.3),

        # Distortions
        A.ShiftScaleRotate(
            shift_limit=0.1,
            scale_limit=0.1,
            rotate_limit=15,
            p=0.5
        ),

        # Cutout for robustness
        A.CoarseDropout(
            max_holes=8,
            max_height=16,
            max_width=16,
            p=0.3
        ),

        # Normalize and convert to tensor
        A.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        ),
        ToTensorV2()
    ])

def get_val_transforms():
    """
    Validation transformations (no augmentation).
    """
    return A.Compose([
        A.Normalize(
            mean=[0.485, 0.456, 0.406],
            std=[0.229, 0.224, 0.225]
        ),
        ToTensorV2()
    ])
```

### 2.3 CNN Architecture

**Disease Detection Model:**
```python
import torch
import torch.nn as nn
import torchvision.models as models

class DiseaseDetectionCNN(nn.Module):
    """
    Custom CNN for plant disease detection.
    """
    def __init__(self, num_classes=7, pretrained=True):
        super(DiseaseDetectionCNN, self).__init__()

        # Use EfficientNet as backbone
        self.backbone = models.efficientnet_b3(pretrained=pretrained)

        # Get feature dimension
        in_features = self.backbone.classifier[1].in_features

        # Replace classifier
        self.backbone.classifier = nn.Sequential(
            nn.Dropout(p=0.3),
            nn.Linear(in_features, 512),
            nn.ReLU(),
            nn.Dropout(p=0.2),
            nn.Linear(512, num_classes)
        )

    def forward(self, x):
        return self.backbone(x)

# Training function
def train_disease_detector(model, train_loader, val_loader, epochs=50):
    """
    Train disease detection model.
    """
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = model.to(device)

    criterion = nn.CrossEntropyLoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

    # Learning rate scheduler
    scheduler = torch.optim.lr_scheduler.ReduceLROnPlateau(
        optimizer,
        mode='min',
        factor=0.5,
        patience=3
    )

    best_val_acc = 0.0

    for epoch in range(epochs):
        # Training phase
        model.train()
        train_loss = 0.0
        train_correct = 0
        train_total = 0

        for images, labels in train_loader:
            images = images.to(device)
            labels = labels.to(device)

            # Forward pass
            outputs = model(images)
            loss = criterion(outputs, labels)

            # Backward pass
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            # Metrics
            train_loss += loss.item()
            _, predicted = torch.max(outputs.data, 1)
            train_total += labels.size(0)
            train_correct += (predicted == labels).sum().item()

        # Validation phase
        model.eval()
        val_loss = 0.0
        val_correct = 0
        val_total = 0

        with torch.no_grad():
            for images, labels in val_loader:
                images = images.to(device)
                labels = labels.to(device)

                outputs = model(images)
                loss = criterion(outputs, labels)

                val_loss += loss.item()
                _, predicted = torch.max(outputs.data, 1)
                val_total += labels.size(0)
                val_correct += (predicted == labels).sum().item()

        # Calculate metrics
        train_acc = 100 * train_correct / train_total
        val_acc = 100 * val_correct / val_total
        val_loss_avg = val_loss / len(val_loader)

        # Update learning rate
        scheduler.step(val_loss_avg)

        print(f"Epoch {epoch+1}/{epochs}")
        print(f"  Train Loss: {train_loss/len(train_loader):.4f}, Acc: {train_acc:.2f}%")
        print(f"  Val Loss: {val_loss_avg:.4f}, Acc: {val_acc:.2f}%")

        # Save best model
        if val_acc > best_val_acc:
            best_val_acc = val_acc
            torch.save(model.state_dict(), 'best_disease_detector.pth')

    return model
```

---

## 3. Transfer Learning & Pre-trained Models

### 3.1 Popular Architectures

**Model Comparison:**
```
┌──────────────────────────────────────────────────────┐
│         PRE-TRAINED MODEL COMPARISON                 │
├──────────────┬───────────┬──────────┬───────────────┤
│ Model        │ Params    │ Speed    │ Accuracy      │
├──────────────┼───────────┼──────────┼───────────────┤
│ ResNet-50    │ 25M       │ Fast     │ Good          │
│ EfficientB3  │ 12M       │ Medium   │ Excellent     │
│ MobileNetV3  │ 5M        │ Very Fast│ Good          │
│ Vision Trans.│ 86M       │ Slow     │ Excellent     │
│ ConvNeXt     │ 28M       │ Medium   │ Excellent     │
└──────────────┴───────────┴──────────┴───────────────┘

RECOMMENDATION FOR CEA:
• Desktop/Server: EfficientNet-B3 or ConvNeXt
• Mobile/Edge: MobileNetV3 or EfficientNet-B0
• High Accuracy: Vision Transformer (if compute available)
```

### 3.2 Fine-Tuning Strategies

```python
def setup_transfer_learning(model, num_classes, freeze_layers=True):
    """
    Setup model for transfer learning.
    """
    if freeze_layers:
        # Freeze all layers except classifier
        for param in model.parameters():
            param.requires_grad = False

        # Unfreeze classifier
        for param in model.classifier.parameters():
            param.requires_grad = True
    else:
        # Unfreeze all layers (full fine-tuning)
        for param in model.parameters():
            param.requires_grad = True

    return model

# Two-stage training
def two_stage_training(model, train_loader, val_loader):
    """
    Stage 1: Train classifier only
    Stage 2: Fine-tune entire network
    """
    # Stage 1: Frozen backbone
    print("Stage 1: Training classifier...")
    model = setup_transfer_learning(model, freeze_layers=True)
    model = train_disease_detector(model, train_loader, val_loader, epochs=10)

    # Stage 2: Full network
    print("Stage 2: Fine-tuning entire network...")
    model = setup_transfer_learning(model, freeze_layers=False)

    # Lower learning rate for fine-tuning
    optimizer = torch.optim.Adam(model.parameters(), lr=0.0001)
    model = train_disease_detector(model, train_loader, val_loader, epochs=30)

    return model
```

---

## 4. Advanced Detection Techniques

### 4.1 Object Detection for Pest Counting

**YOLO for Pest Detection:**
```python
import torch
from ultralytics import YOLO

class PestCounter:
    """
    Real-time pest detection and counting using YOLO.
    """
    def __init__(self, model_path='yolov8n.pt'):
        self.model = YOLO(model_path)
        self.pest_classes = ['aphid', 'whitefly', 'thrip', 'spider_mite']

    def detect_pests(self, image_path, conf_threshold=0.5):
        """
        Detect and count pests in an image.
        """
        results = self.model(image_path, conf=conf_threshold)

        pest_counts = {pest: 0 for pest in self.pest_classes}

        for result in results:
            boxes = result.boxes
            for box in boxes:
                class_id = int(box.cls[0])
                class_name = result.names[class_id]

                if class_name in self.pest_classes:
                    pest_counts[class_name] += 1

        return pest_counts, results

    def calculate_infestation_level(self, pest_counts, leaf_area_cm2):
        """
        Calculate infestation level (pests per cm²).
        """
        total_pests = sum(pest_counts.values())
        infestation_rate = total_pests / leaf_area_cm2

        # Classify severity
        if infestation_rate < 0.1:
            severity = 'Low'
        elif infestation_rate < 0.5:
            severity = 'Moderate'
        else:
            severity = 'High'

        return {
            'infestation_rate': infestation_rate,
            'severity': severity,
            'action_required': severity != 'Low'
        }
```

### 4.2 Early Warning System

**Anomaly Detection:**
```python
from sklearn.ensemble import IsolationForest
import pandas as pd

class EarlyWarningSystem:
    """
    Detect early signs of disease/pest problems.
    """
    def __init__(self):
        self.anomaly_detector = IsolationForest(
            contamination=0.1,
            random_state=42
        )
        self.baseline_features = None

    def extract_features(self, image):
        """
        Extract statistical features from plant image.
        """
        import cv2

        # Convert to different color spaces
        hsv = cv2.cvtColor(image, cv2.COLOR_RGB2HSV)
        lab = cv2.cvtColor(image, cv2.COLOR_RGB2LAB)

        features = {}

        # Color statistics
        for i, channel in enumerate(['R', 'G', 'B']):
            features[f'{channel}_mean'] = np.mean(image[:,:,i])
            features[f'{channel}_std'] = np.std(image[:,:,i])

        # Texture features (via edge detection)
        gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
        edges = cv2.Canny(gray, 50, 150)
        features['edge_density'] = np.sum(edges > 0) / edges.size

        # Health indicators
        features['greenness'] = np.mean(image[:,:,1]) - np.mean(image[:,:,0])
        features['yellowing'] = (features['R_mean'] + features['G_mean']) / 2 - features['B_mean']

        return features

    def train_baseline(self, healthy_images):
        """
        Train anomaly detector on healthy plant images.
        """
        features_list = []

        for img_path in healthy_images:
            image = cv2.imread(img_path)
            features = self.extract_features(image)
            features_list.append(features)

        self.baseline_features = pd.DataFrame(features_list)
        self.anomaly_detector.fit(self.baseline_features)

    def check_anomaly(self, image):
        """
        Check if image shows anomalous (potentially diseased) features.
        """
        features = self.extract_features(image)
        features_df = pd.DataFrame([features])

        # Predict anomaly (-1 = anomaly, 1 = normal)
        prediction = self.anomaly_detector.predict(features_df)[0]
        anomaly_score = self.anomaly_detector.score_samples(features_df)[0]

        is_anomaly = prediction == -1

        return {
            'is_anomaly': is_anomaly,
            'anomaly_score': anomaly_score,
            'alert_level': 'High' if is_anomaly and anomaly_score < -0.5 else 'Medium' if is_anomaly else 'Normal',
            'features': features
        }
```

---

## 5. Deployment & IPM Integration

### 5.1 Mobile Deployment

**TensorFlow Lite Conversion:**
```python
import tensorflow as tf

def convert_to_tflite(model_path, output_path):
    """
    Convert PyTorch model to TensorFlow Lite for mobile.
    """
    # Load PyTorch model
    model = torch.load(model_path)
    model.eval()

    # Convert to ONNX first
    dummy_input = torch.randn(1, 3, 224, 224)
    torch.onnx.export(
        model,
        dummy_input,
        "model.onnx",
        input_names=['input'],
        output_names=['output']
    )

    # ONNX to TensorFlow
    # Then TensorFlow to TFLite
    converter = tf.lite.TFLiteConverter.from_saved_model('tf_model')

    # Optimizations
    converter.optimizations = [tf.lite.Optimize.DEFAULT]
    converter.target_spec.supported_types = [tf.float16]

    tflite_model = converter.convert()

    # Save
    with open(output_path, 'wb') as f:
        f.write(tflite_model)

    print(f"Model converted and saved to {output_path}")
```

### 5.2 IPM Integration Framework

**Decision Support System:**
```python
class IPMDecisionSupport:
    """
    Integrate AI detection with IPM strategies.
    """
    def __init__(self):
        self.action_thresholds = {
            'aphids': 5,  # per leaf
            'whiteflies': 3,
            'thrips': 2,
            'spider_mites': 10
        }

        self.treatment_options = {
            'biological': {
                'aphids': ['Ladybugs', 'Lacewings', 'Aphidius wasps'],
                'whiteflies': ['Encarsia wasps', 'Delphastus beetles'],
                'thrips': ['Amblyseius swirskii', 'Orius bugs'],
                'spider_mites': ['Phytoseiulus predators', 'Neoseiulus']
            },
            'chemical': {
                'low_toxicity': ['Insecticidal soap', 'Neem oil', 'Pyrethrin'],
                'moderate': ['Spinosad', 'Abamectin'],
                'last_resort': ['Synthetic pyrethroids']
            }
        }

    def analyze_detection(self, detection_results):
        """
        Analyze detection results and recommend actions.
        """
        recommendations = []

        for pest, count in detection_results.items():
            if count > self.action_thresholds.get(pest, 0):
                severity = self.calculate_severity(pest, count)

                recommendation = {
                    'pest': pest,
                    'count': count,
                    'severity': severity,
                    'action': self.recommend_action(pest, severity),
                    'timing': 'Immediate' if severity == 'High' else 'Within 48 hours'
                }
                recommendations.append(recommendation)

        return recommendations

    def recommend_action(self, pest, severity):
        """
        Recommend treatment based on pest and severity.
        """
        if severity == 'Low':
            return {
                'type': 'monitoring',
                'action': 'Increase monitoring frequency',
                'treatment': None
            }
        elif severity == 'Moderate':
            return {
                'type': 'biological',
                'action': 'Release biological control agents',
                'treatment': self.treatment_options['biological'].get(pest, [])
            }
        else:  # High severity
            return {
                'type': 'integrated',
                'action': 'Immediate intervention required',
                'treatment': {
                    'biological': self.treatment_options['biological'].get(pest, []),
                    'chemical': self.treatment_options['chemical']['low_toxicity']
                }
            }

    def calculate_severity(self, pest, count):
        """
        Calculate infestation severity.
        """
        threshold = self.action_thresholds.get(pest, 5)

        ratio = count / threshold

        if ratio < 2:
            return 'Low'
        elif ratio < 5:
            return 'Moderate'
        else:
            return 'High'
```

---

## Summary

This module covered AI-powered disease and pest detection systems:

**Key Takeaways:**
1. Computer vision enables automated, early detection of plant health issues
2. Transfer learning accelerates model development with limited data
3. Data augmentation is critical for robust model performance
4. Object detection and anomaly detection complement classification
5. Mobile and edge deployment enable real-time monitoring
6. Integration with IPM provides actionable recommendations
7. Continuous monitoring creates early warning systems

---

## Discussion Questions

1. How would you handle class imbalance in disease datasets?
2. What are the ethical considerations of automated pest detection?
3. How can AI detection be integrated with existing farm workflows?
4. What metrics best evaluate disease detection system performance?
5. How would you design a data collection strategy for rare diseases?

---

## Vocabulary

- **Transfer Learning:** Using pre-trained models for new tasks
- **Data Augmentation:** Artificially expanding datasets through transformations
- **IoU (Intersection over Union):** Metric for object detection accuracy
- **Anomaly Detection:** Identifying unusual patterns in data
- **IPM (Integrated Pest Management):** Comprehensive pest control approach
- **Action Threshold:** Population level requiring intervention
- **Biological Control:** Using natural predators to manage pests

---

## Activity Reference

**Hands-On Activity 6: Building a Disease Detection App**
- Collect and annotate plant disease images
- Train custom classification model
- Convert model for mobile deployment
- Build simple detection interface

See: `/activities/activity_06_disease_detection.md`

---

## Quiz Preview

Module 6 quiz covers:
- Disease and pest identification (20%)
- CNN architectures and training (25%)
- Transfer learning techniques (20%)
- Deployment strategies (20%)
- IPM integration (15%)

---

## Next Module Preview

**Module 7: Resource Optimization**

Topics include:
- Mathematical optimization techniques
- Water usage optimization
- Nutrient delivery scheduling
- Energy consumption prediction
- Multi-resource constraint optimization

---

## Resources

### Datasets
- PlantVillage Dataset
- PlantDoc Dataset
- IP102 Insect Pest Dataset
- Agricultural Disease Dataset (Kaggle)

### Tools
- LabelImg: Image annotation
- Roboflow: Dataset management
- CVAT: Computer vision annotation
- Weights & Biases: Experiment tracking

---

*End of Module 6*
