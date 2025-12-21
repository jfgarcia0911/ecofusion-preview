# Lesson 3: Computer Vision for Plant Monitoring

## Learning Objectives

By the end of this lesson, you will be able to:
- Design and deploy image acquisition systems for plant monitoring
- Implement convolutional neural networks (CNNs) for plant analysis
- Apply object detection and instance segmentation techniques
- Develop automated plant phenotyping systems
- Optimize computer vision models for real-time processing

---

## 1. Image Acquisition Systems

### Camera Types and Selection

```
Agricultural Computer Vision Camera Selection Guide
===================================================

RGB CAMERAS
-----------
Resolution: 1080p to 12MP+
Use Cases: General monitoring, disease detection, quality grading
Pros: Low cost, easy processing, color information
Cons: Limited to visible spectrum
Cost: $50 - $500
Examples: Raspberry Pi Camera, USB webcams, industrial cameras

MULTISPECTRAL CAMERAS
----------------------
Bands: 3-10 discrete bands (NIR, Red Edge, etc.)
Use Cases: Plant health, stress detection, nutrient status
Pros: Captures invisible spectral information
Cons: Expensive, complex calibration, large data
Cost: $3,000 - $15,000
Examples: MicaSense, Sentera, Parrot Sequoia

HYPERSPECTRAL CAMERAS
----------------------
Bands: 100+ continuous bands
Use Cases: Detailed chemical analysis, research
Pros: Comprehensive spectral data
Cons: Very expensive, slow capture, huge data volumes
Cost: $25,000 - $100,000+
Examples: Specim, Headwall, Surface Optics

THERMAL (IR) CAMERAS
--------------------
Resolution: 160x120 to 640x512
Use Cases: Water stress detection, temperature monitoring
Pros: Non-contact temperature measurement
Cons: Lower resolution, expensive
Cost: $1,500 - $10,000
Examples: FLIR, Seek Thermal, DJI thermal

3D/DEPTH CAMERAS
----------------
Technology: Stereo, ToF, Structured Light
Use Cases: Plant structure, height measurement, volume estimation
Pros: Spatial information, precise measurements
Cons: Complex processing, limited range
Cost: $200 - $3,000
Examples: Intel RealSense, Kinect, Zed
```

### Camera Placement Strategy

```
┌──────────────────────────────────────────────────────────┐
│          Camera Placement in CEA Facility                 │
└──────────────────────────────────────────────────────────┘

TOP-DOWN VIEW (Overhead)
                    ▼ Camera
            ┌───────────────────┐
            │                   │
            │   ██  ██  ██  ██  │
            │   ██  ██  ██  ██  │ <- Plants
            │   ██  ██  ██  ██  │
            │                   │
            └───────────────────┘

Pros: Consistent lighting, full canopy view, scalable
Cons: Limited leaf detail, shadows in dense canopy
Best for: Canopy coverage, growth tracking, plant counting

SIDE VIEW (Lateral)
          Camera ►  ┌──────┐
                    │ ██   │
                    │ ██ █ │ <- Plants
                    │ ██ █ │
                    └──────┘

Pros: Vertical growth, leaf detail, fruit visibility
Cons: Occlusion, variable distance, complex processing
Best for: Fruit detection, flowering stage, pest detection

MULTI-ANGLE (Combined)
            ▼ Camera 1 (Top)
        ┌─────────────────┐
Camera 2│ ██  ██  ██      │ Camera 3
(Side)  │ ██  ██  ██      │ (Side)
      ► │ ██  ██  ██      │ ◄
        └─────────────────┘
            ▲ Camera 4 (Angled)

Pros: Complete coverage, 3D reconstruction possible
Cons: Expensive, complex sync, more processing
Best for: Research, high-value crops, detailed analysis
```

### Imaging System Design

```python
"""
Multi-camera imaging system for greenhouse monitoring
Handles synchronized capture, storage, and preprocessing
"""

import cv2
import numpy as np
from datetime import datetime
import threading
import queue
import json

class GreenhouseCameraSystem:
    """Multi-camera monitoring system"""

    def __init__(self, config_file):
        with open(config_file, 'r') as f:
            self.config = json.load(f)

        self.cameras = {}
        self.capture_threads = {}
        self.image_queue = queue.Queue(maxsize=100)
        self.running = False

        # Initialize cameras
        self._initialize_cameras()

    def _initialize_cameras(self):
        """Initialize all cameras from config"""
        for cam_config in self.config['cameras']:
            cam_id = cam_config['id']
            camera = cv2.VideoCapture(cam_config['device_id'])

            # Set camera parameters
            camera.set(cv2.CAP_PROP_FRAME_WIDTH, cam_config['width'])
            camera.set(cv2.CAP_PROP_FRAME_HEIGHT, cam_config['height'])
            camera.set(cv2.CAP_PROP_FPS, cam_config['fps'])

            # Auto-exposure and white balance
            if cam_config.get('auto_exposure', True):
                camera.set(cv2.CAP_PROP_AUTO_EXPOSURE, 1)
            else:
                camera.set(cv2.CAP_PROP_AUTO_EXPOSURE, 0)
                camera.set(cv2.CAP_PROP_EXPOSURE, cam_config['exposure'])

            self.cameras[cam_id] = {
                'camera': camera,
                'config': cam_config,
                'calibration': self._load_calibration(cam_id)
            }

    def _load_calibration(self, cam_id):
        """Load camera calibration parameters"""
        try:
            calib_file = f"calibration/camera_{cam_id}.npz"
            calib_data = np.load(calib_file)
            return {
                'camera_matrix': calib_data['camera_matrix'],
                'dist_coeffs': calib_data['dist_coeffs']
            }
        except:
            return None

    def capture_frame(self, cam_id):
        """Capture single frame from camera"""
        camera_obj = self.cameras[cam_id]['camera']
        ret, frame = camera_obj.read()

        if ret:
            # Apply calibration if available
            calib = self.cameras[cam_id]['calibration']
            if calib is not None:
                frame = cv2.undistort(
                    frame,
                    calib['camera_matrix'],
                    calib['dist_coeffs']
                )

            # Add metadata
            metadata = {
                'camera_id': cam_id,
                'timestamp': datetime.now().isoformat(),
                'location': self.cameras[cam_id]['config']['location'],
                'zone': self.cameras[cam_id]['config']['zone']
            }

            return frame, metadata
        return None, None

    def synchronized_capture(self):
        """Capture from all cameras simultaneously"""
        frames = {}
        threads = []

        # Capture function for threading
        def capture_worker(cam_id, results):
            frame, metadata = self.capture_frame(cam_id)
            results[cam_id] = (frame, metadata)

        # Start capture threads
        results = {}
        for cam_id in self.cameras.keys():
            thread = threading.Thread(
                target=capture_worker,
                args=(cam_id, results)
            )
            thread.start()
            threads.append(thread)

        # Wait for all captures
        for thread in threads:
            thread.join()

        return results

    def continuous_capture(self, interval_seconds=60):
        """Continuous capture at specified interval"""
        self.running = True

        while self.running:
            # Synchronized capture
            frames = self.synchronized_capture()

            # Queue for processing
            self.image_queue.put({
                'timestamp': datetime.now(),
                'frames': frames
            })

            # Wait for next interval
            time.sleep(interval_seconds)

    def preprocess_image(self, image, preprocessing_config):
        """Apply preprocessing pipeline"""
        img = image.copy()

        # Resize if needed
        if 'resize' in preprocessing_config:
            size = preprocessing_config['resize']
            img = cv2.resize(img, (size['width'], size['height']))

        # Color correction
        if preprocessing_config.get('white_balance', False):
            img = self._apply_white_balance(img)

        # Noise reduction
        if preprocessing_config.get('denoise', False):
            img = cv2.fastNlMeansDenoisingColored(img)

        # Contrast enhancement
        if preprocessing_config.get('enhance_contrast', False):
            img = self._enhance_contrast(img)

        # Crop region of interest
        if 'crop_roi' in preprocessing_config:
            roi = preprocessing_config['crop_roi']
            img = img[roi['y']:roi['y']+roi['h'],
                     roi['x']:roi['x']+roi['w']]

        return img

    def _apply_white_balance(self, img):
        """Simple gray world white balance"""
        result = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
        avg_a = np.average(result[:, :, 1])
        avg_b = np.average(result[:, :, 2])
        result[:, :, 1] = result[:, :, 1] - ((avg_a - 128) * (result[:, :, 0] / 255.0) * 1.1)
        result[:, :, 2] = result[:, :, 2] - ((avg_b - 128) * (result[:, :, 0] / 255.0) * 1.1)
        result = cv2.cvtColor(result, cv2.COLOR_LAB2BGR)
        return result

    def _enhance_contrast(self, img):
        """CLAHE contrast enhancement"""
        lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
        l, a, b = cv2.split(lab)
        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8,8))
        l = clahe.apply(l)
        enhanced = cv2.merge([l, a, b])
        return cv2.cvtColor(enhanced, cv2.COLOR_LAB2BGR)

    def save_images(self, frames, output_dir):
        """Save captured images with metadata"""
        timestamp = frames['timestamp'].strftime('%Y%m%d_%H%M%S')

        for cam_id, (frame, metadata) in frames['frames'].items():
            if frame is not None:
                # Save image
                filename = f"{output_dir}/cam_{cam_id}_{timestamp}.jpg"
                cv2.imwrite(filename, frame)

                # Save metadata
                meta_filename = f"{output_dir}/cam_{cam_id}_{timestamp}.json"
                with open(meta_filename, 'w') as f:
                    json.dump(metadata, f, indent=2)

    def shutdown(self):
        """Release all cameras"""
        self.running = False
        for cam_data in self.cameras.values():
            cam_data['camera'].release()

# Configuration example
config = {
    "cameras": [
        {
            "id": "overhead_1",
            "device_id": 0,
            "width": 1920,
            "height": 1080,
            "fps": 30,
            "location": "Zone A - Overhead",
            "zone": "A",
            "auto_exposure": True
        },
        {
            "id": "side_1",
            "device_id": 1,
            "width": 1920,
            "height": 1080,
            "fps": 30,
            "location": "Zone A - Side View",
            "zone": "A",
            "auto_exposure": False,
            "exposure": -6
        }
    ]
}
```

---

## 2. Convolutional Neural Networks for Plant Analysis

### CNN Architecture Fundamentals

```
┌──────────────────────────────────────────────────────────┐
│         CNN Architecture for Image Classification        │
└──────────────────────────────────────────────────────────┘

INPUT IMAGE (224x224x3)
    │
    ▼
┌─────────────┐
│ CONV Layer 1│ ──► Filters: 32, Kernel: 3x3, Stride: 1
│  + ReLU     │     Output: 224x224x32
│  + MaxPool  │     Pool: 2x2 → 112x112x32
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ CONV Layer 2│ ──► Filters: 64, Kernel: 3x3
│  + ReLU     │     Output: 112x112x64
│  + MaxPool  │     Pool: 2x2 → 56x56x64
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ CONV Layer 3│ ──► Filters: 128, Kernel: 3x3
│  + ReLU     │     Output: 56x56x128
│  + MaxPool  │     Pool: 2x2 → 28x28x128
└──────┬──────┘
       │
       ▼
┌─────────────┐
│ CONV Layer 4│ ──► Filters: 256, Kernel: 3x3
│  + ReLU     │     Output: 28x28x256
│  + MaxPool  │     Pool: 2x2 → 14x14x256
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Flatten    │ ──► Output: 50,176 neurons
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Dense 1   │ ──► Units: 512
│  + ReLU     │     Dropout: 0.5
│  + Dropout  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Dense 2   │ ──► Units: 256
│  + ReLU     │     Dropout: 0.3
│  + Dropout  │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Output    │ ──► Units: num_classes
│  (Softmax)  │     Activation: Softmax
└─────────────┘

Total Parameters: ~13M
Training: Adam optimizer, lr=0.001
Loss: Categorical Crossentropy
```

### Plant Disease Classification Model

```python
"""
CNN model for plant disease classification
TensorFlow/Keras implementation
"""

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np
import matplotlib.pyplot as plt

class PlantDiseaseClassifier:
    """CNN-based plant disease classification"""

    def __init__(self, num_classes, input_shape=(224, 224, 3)):
        self.num_classes = num_classes
        self.input_shape = input_shape
        self.model = None
        self.history = None

    def build_model(self, architecture='custom'):
        """Build CNN model"""

        if architecture == 'custom':
            self.model = self._build_custom_cnn()
        elif architecture == 'resnet50':
            self.model = self._build_resnet50()
        elif architecture == 'mobilenet':
            self.model = self._build_mobilenet()
        elif architecture == 'efficientnet':
            self.model = self._build_efficientnet()

        return self.model

    def _build_custom_cnn(self):
        """Build custom CNN architecture"""
        model = models.Sequential([
            # Input layer
            layers.Input(shape=self.input_shape),

            # Block 1
            layers.Conv2D(32, (3, 3), padding='same'),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),

            # Block 2
            layers.Conv2D(64, (3, 3), padding='same'),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),

            # Block 3
            layers.Conv2D(128, (3, 3), padding='same'),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),

            # Block 4
            layers.Conv2D(256, (3, 3), padding='same'),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.MaxPooling2D((2, 2)),
            layers.Dropout(0.25),

            # Dense layers
            layers.Flatten(),
            layers.Dense(512),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.Dropout(0.5),

            layers.Dense(256),
            layers.BatchNormalization(),
            layers.Activation('relu'),
            layers.Dropout(0.3),

            # Output layer
            layers.Dense(self.num_classes, activation='softmax')
        ])

        return model

    def _build_resnet50(self):
        """Build ResNet50-based model with transfer learning"""
        base_model = keras.applications.ResNet50(
            weights='imagenet',
            include_top=False,
            input_shape=self.input_shape
        )

        # Freeze base model layers
        base_model.trainable = False

        model = models.Sequential([
            base_model,
            layers.GlobalAveragePooling2D(),
            layers.Dense(512, activation='relu'),
            layers.Dropout(0.5),
            layers.Dense(self.num_classes, activation='softmax')
        ])

        return model

    def _build_mobilenet(self):
        """Build MobileNetV2 for edge deployment"""
        base_model = keras.applications.MobileNetV2(
            weights='imagenet',
            include_top=False,
            input_shape=self.input_shape
        )

        base_model.trainable = False

        model = models.Sequential([
            base_model,
            layers.GlobalAveragePooling2D(),
            layers.Dense(256, activation='relu'),
            layers.Dropout(0.3),
            layers.Dense(self.num_classes, activation='softmax')
        ])

        return model

    def _build_efficientnet(self):
        """Build EfficientNetB0 for optimal performance"""
        base_model = keras.applications.EfficientNetB0(
            weights='imagenet',
            include_top=False,
            input_shape=self.input_shape
        )

        base_model.trainable = False

        model = models.Sequential([
            base_model,
            layers.GlobalAveragePooling2D(),
            layers.Dense(512, activation='relu'),
            layers.Dropout(0.4),
            layers.Dense(self.num_classes, activation='softmax')
        ])

        return model

    def compile_model(self, learning_rate=0.001):
        """Compile model with optimizer and loss"""
        self.model.compile(
            optimizer=keras.optimizers.Adam(learning_rate=learning_rate),
            loss='categorical_crossentropy',
            metrics=['accuracy',
                    keras.metrics.TopKCategoricalAccuracy(k=3, name='top_3_accuracy'),
                    keras.metrics.Precision(name='precision'),
                    keras.metrics.Recall(name='recall')]
        )

    def create_data_generators(self, train_dir, val_dir, batch_size=32):
        """Create data generators with augmentation"""

        # Training data augmentation
        train_datagen = ImageDataGenerator(
            rescale=1./255,
            rotation_range=40,
            width_shift_range=0.2,
            height_shift_range=0.2,
            shear_range=0.2,
            zoom_range=0.2,
            horizontal_flip=True,
            vertical_flip=True,
            fill_mode='nearest',
            brightness_range=[0.8, 1.2]
        )

        # Validation data (no augmentation, only rescaling)
        val_datagen = ImageDataGenerator(rescale=1./255)

        # Create generators
        train_generator = train_datagen.flow_from_directory(
            train_dir,
            target_size=self.input_shape[:2],
            batch_size=batch_size,
            class_mode='categorical',
            shuffle=True
        )

        val_generator = val_datagen.flow_from_directory(
            val_dir,
            target_size=self.input_shape[:2],
            batch_size=batch_size,
            class_mode='categorical',
            shuffle=False
        )

        return train_generator, val_generator

    def train(self, train_generator, val_generator, epochs=50):
        """Train the model"""

        # Callbacks
        callbacks = [
            # Early stopping
            keras.callbacks.EarlyStopping(
                monitor='val_loss',
                patience=10,
                restore_best_weights=True
            ),

            # Reduce learning rate on plateau
            keras.callbacks.ReduceLROnPlateau(
                monitor='val_loss',
                factor=0.5,
                patience=5,
                min_lr=1e-7
            ),

            # Model checkpoint
            keras.callbacks.ModelCheckpoint(
                'best_model.h5',
                monitor='val_accuracy',
                save_best_only=True,
                mode='max'
            ),

            # TensorBoard logging
            keras.callbacks.TensorBoard(
                log_dir='./logs',
                histogram_freq=1
            )
        ]

        # Train model
        self.history = self.model.fit(
            train_generator,
            epochs=epochs,
            validation_data=val_generator,
            callbacks=callbacks,
            verbose=1
        )

        return self.history

    def fine_tune(self, train_generator, val_generator, epochs=20):
        """Fine-tune pre-trained model"""
        # Unfreeze base model
        self.model.layers[0].trainable = True

        # Recompile with lower learning rate
        self.model.compile(
            optimizer=keras.optimizers.Adam(learning_rate=1e-5),
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )

        # Continue training
        history_fine = self.model.fit(
            train_generator,
            epochs=epochs,
            validation_data=val_generator,
            verbose=1
        )

        return history_fine

    def evaluate(self, test_generator):
        """Evaluate model on test set"""
        results = self.model.evaluate(test_generator, verbose=1)

        metrics = dict(zip(self.model.metrics_names, results))
        return metrics

    def predict(self, image, preprocess=True):
        """Predict on single image"""
        if preprocess:
            # Preprocess image
            img = tf.image.resize(image, self.input_shape[:2])
            img = img / 255.0
            img = tf.expand_dims(img, 0)
        else:
            img = image

        # Predict
        predictions = self.model.predict(img)

        return predictions[0]

    def plot_training_history(self):
        """Plot training metrics"""
        if self.history is None:
            print("No training history available")
            return

        fig, axes = plt.subplots(2, 2, figsize=(15, 10))

        # Accuracy
        axes[0, 0].plot(self.history.history['accuracy'], label='Train')
        axes[0, 0].plot(self.history.history['val_accuracy'], label='Validation')
        axes[0, 0].set_title('Model Accuracy')
        axes[0, 0].set_xlabel('Epoch')
        axes[0, 0].set_ylabel('Accuracy')
        axes[0, 0].legend()
        axes[0, 0].grid(True)

        # Loss
        axes[0, 1].plot(self.history.history['loss'], label='Train')
        axes[0, 1].plot(self.history.history['val_loss'], label='Validation')
        axes[0, 1].set_title('Model Loss')
        axes[0, 1].set_xlabel('Epoch')
        axes[0, 1].set_ylabel('Loss')
        axes[0, 1].legend()
        axes[0, 1].grid(True)

        # Precision
        axes[1, 0].plot(self.history.history['precision'], label='Train')
        axes[1, 0].plot(self.history.history['val_precision'], label='Validation')
        axes[1, 0].set_title('Model Precision')
        axes[1, 0].set_xlabel('Epoch')
        axes[1, 0].set_ylabel('Precision')
        axes[1, 0].legend()
        axes[1, 0].grid(True)

        # Recall
        axes[1, 1].plot(self.history.history['recall'], label='Train')
        axes[1, 1].plot(self.history.history['val_recall'], label='Validation')
        axes[1, 1].set_title('Model Recall')
        axes[1, 1].set_xlabel('Epoch')
        axes[1, 1].set_ylabel('Recall')
        axes[1, 1].legend()
        axes[1, 1].grid(True)

        plt.tight_layout()
        plt.savefig('training_history.png', dpi=300)
        plt.show()

    def export_for_deployment(self, export_path):
        """Export model for production deployment"""

        # Save as TensorFlow SavedModel
        self.model.save(f'{export_path}/saved_model')

        # Convert to TFLite for edge deployment
        converter = tf.lite.TFLiteConverter.from_keras_model(self.model)

        # Optimizations
        converter.optimizations = [tf.lite.Optimize.DEFAULT]

        # Quantization (optional, for smaller model size)
        # converter.target_spec.supported_types = [tf.float16]

        tflite_model = converter.convert()

        # Save TFLite model
        with open(f'{export_path}/model.tflite', 'wb') as f:
            f.write(tflite_model)

        print(f"Models exported to {export_path}")

# Example usage
if __name__ == "__main__":
    # Define classes
    disease_classes = [
        'healthy',
        'bacterial_spot',
        'early_blight',
        'late_blight',
        'leaf_mold',
        'septoria_leaf_spot',
        'spider_mites',
        'target_spot',
        'mosaic_virus',
        'yellow_leaf_curl_virus'
    ]

    # Create classifier
    classifier = PlantDiseaseClassifier(
        num_classes=len(disease_classes),
        input_shape=(224, 224, 3)
    )

    # Build model
    classifier.build_model(architecture='efficientnet')
    classifier.compile_model(learning_rate=0.001)

    # Print model summary
    classifier.model.summary()

    # Create data generators
    train_gen, val_gen = classifier.create_data_generators(
        train_dir='data/train',
        val_dir='data/validation',
        batch_size=32
    )

    # Train model
    classifier.train(train_gen, val_gen, epochs=50)

    # Plot results
    classifier.plot_training_history()

    # Export for deployment
    classifier.export_for_deployment('models/plant_disease_v1')
```

---

## 3. Object Detection and Segmentation

### YOLO for Plant Detection

```python
"""
YOLO-based object detection for plant counting and localization
Using YOLOv8 (Ultralytics)
"""

from ultralytics import YOLO
import cv2
import numpy as np

class PlantDetector:
    """Object detection for plant monitoring"""

    def __init__(self, model_path=None):
        if model_path:
            self.model = YOLO(model_path)
        else:
            # Start with pre-trained model
            self.model = YOLO('yolov8n.pt')

        self.class_names = []

    def train_custom_model(self, data_yaml, epochs=100, imgsz=640):
        """Train custom YOLO model"""

        results = self.model.train(
            data=data_yaml,
            epochs=epochs,
            imgsz=imgsz,
            batch=16,
            name='plant_detector',
            patience=20,
            save=True,
            device=0,  # GPU 0, use 'cpu' for CPU
            workers=8,
            project='models',

            # Augmentation
            hsv_h=0.015,
            hsv_s=0.7,
            hsv_v=0.4,
            degrees=0.0,
            translate=0.1,
            scale=0.5,
            shear=0.0,
            perspective=0.0,
            flipud=0.5,
            fliplr=0.5,
            mosaic=1.0,
            mixup=0.0,
        )

        return results

    def detect_plants(self, image, conf_threshold=0.25):
        """Detect plants in image"""

        # Run inference
        results = self.model(image, conf=conf_threshold)

        detections = []
        for result in results:
            boxes = result.boxes

            for box in boxes:
                # Extract box coordinates
                x1, y1, x2, y2 = box.xyxy[0].cpu().numpy()
                conf = box.conf[0].cpu().numpy()
                cls = int(box.cls[0].cpu().numpy())

                detections.append({
                    'bbox': [int(x1), int(y1), int(x2), int(y2)],
                    'confidence': float(conf),
                    'class': cls,
                    'class_name': self.model.names[cls]
                })

        return detections

    def count_plants(self, image):
        """Count number of plants in image"""
        detections = self.detect_plants(image)
        return len(detections)

    def measure_plant_area(self, image, pixel_to_cm=0.1):
        """Estimate plant canopy area"""
        detections = self.detect_plants(image)

        total_area = 0
        plant_areas = []

        for det in detections:
            x1, y1, x2, y2 = det['bbox']
            width_pixels = x2 - x1
            height_pixels = y2 - y1
            area_pixels = width_pixels * height_pixels

            # Convert to cm²
            area_cm2 = area_pixels * (pixel_to_cm ** 2)

            plant_areas.append(area_cm2)
            total_area += area_cm2

        return {
            'total_area_cm2': total_area,
            'individual_areas': plant_areas,
            'average_area_cm2': total_area / len(plant_areas) if plant_areas else 0,
            'num_plants': len(plant_areas)
        }

    def visualize_detections(self, image, detections):
        """Draw bounding boxes on image"""
        vis_image = image.copy()

        for det in detections:
            x1, y1, x2, y2 = det['bbox']
            conf = det['confidence']
            class_name = det['class_name']

            # Draw box
            cv2.rectangle(vis_image, (x1, y1), (x2, y2), (0, 255, 0), 2)

            # Draw label
            label = f"{class_name}: {conf:.2f}"
            cv2.putText(
                vis_image,
                label,
                (x1, y1 - 10),
                cv2.FONT_HERSHEY_SIMPLEX,
                0.5,
                (0, 255, 0),
                2
            )

        return vis_image

# Example data.yaml for training
"""
# Plant Detection Dataset
path: /path/to/dataset
train: images/train
val: images/val
test: images/test

# Classes
names:
  0: tomato_plant
  1: lettuce
  2: pepper
  3: cucumber
  4: herb
"""
```

---

## 4. Plant Phenotyping

### Automated Growth Measurement

```python
"""
Plant phenotyping system for automated growth tracking
Measures height, width, leaf area, and growth rate
"""

import cv2
import numpy as np
from sklearn.cluster import DBSCAN
import pandas as pd
from datetime import datetime

class PlantPhenotyping:
    """Automated plant phenotyping system"""

    def __init__(self, calibration_mm_per_pixel=1.0):
        self.calibration = calibration_mm_per_pixel

    def segment_plant(self, image):
        """Segment plant from background"""

        # Convert to HSV
        hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

        # Define green color range (adjust for your plants)
        lower_green = np.array([35, 40, 40])
        upper_green = np.array([85, 255, 255])

        # Create mask
        mask = cv2.inRange(hsv, lower_green, upper_green)

        # Morphological operations to clean mask
        kernel = np.ones((5, 5), np.uint8)
        mask = cv2.morphologyEx(mask, cv2.MORPH_CLOSE, kernel)
        mask = cv2.morphologyEx(mask, cv2.MORPH_OPEN, kernel)

        # Apply mask
        segmented = cv2.bitwise_and(image, image, mask=mask)

        return segmented, mask

    def measure_height(self, mask):
        """Measure plant height from segmented mask"""

        # Find contours
        contours, _ = cv2.findContours(
            mask,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )

        if not contours:
            return 0

        # Get largest contour (main plant)
        largest_contour = max(contours, key=cv2.contourArea)

        # Get bounding rectangle
        x, y, w, h = cv2.boundingRect(largest_contour)

        # Convert to mm
        height_mm = h * self.calibration

        return height_mm

    def measure_width(self, mask):
        """Measure maximum plant width"""

        contours, _ = cv2.findContours(
            mask,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )

        if not contours:
            return 0

        largest_contour = max(contours, key=cv2.contourArea)
        x, y, w, h = cv2.boundingRect(largest_contour)

        width_mm = w * self.calibration

        return width_mm

    def calculate_leaf_area(self, mask):
        """Calculate total leaf area"""

        # Count green pixels
        green_pixels = np.sum(mask > 0)

        # Convert to mm²
        pixel_area_mm2 = self.calibration ** 2
        leaf_area_mm2 = green_pixels * pixel_area_mm2

        # Convert to cm²
        leaf_area_cm2 = leaf_area_mm2 / 100

        return leaf_area_cm2

    def count_leaves(self, image, mask):
        """Estimate leaf count using watershed algorithm"""

        # Distance transform
        dist_transform = cv2.distanceTransform(mask, cv2.DIST_L2, 5)

        # Threshold to get sure foreground
        _, sure_fg = cv2.threshold(
            dist_transform,
            0.4 * dist_transform.max(),
            255,
            0
        )

        # Find sure background
        sure_fg = np.uint8(sure_fg)
        unknown = cv2.subtract(mask, sure_fg)

        # Marker labeling
        _, markers = cv2.connectedComponents(sure_fg)

        # Add one to all labels so background is not 0
        markers = markers + 1
        markers[unknown == 255] = 0

        # Apply watershed
        markers = cv2.watershed(image, markers)

        # Count unique markers (excluding background and borders)
        num_leaves = len(np.unique(markers)) - 2

        return max(0, num_leaves)

    def measure_compactness(self, mask):
        """Calculate plant compactness (circularity)"""

        contours, _ = cv2.findContours(
            mask,
            cv2.RETR_EXTERNAL,
            cv2.CHAIN_APPROX_SIMPLE
        )

        if not contours:
            return 0

        largest_contour = max(contours, key=cv2.contourArea)

        area = cv2.contourArea(largest_contour)
        perimeter = cv2.arcLength(largest_contour, True)

        if perimeter == 0:
            return 0

        # Compactness = 4π * area / perimeter²
        # Ranges from 0 (line) to 1 (circle)
        compactness = (4 * np.pi * area) / (perimeter ** 2)

        return compactness

    def full_phenotype_analysis(self, image):
        """Complete phenotyping analysis"""

        # Segment plant
        segmented, mask = self.segment_plant(image)

        # Measure all traits
        results = {
            'timestamp': datetime.now().isoformat(),
            'height_mm': self.measure_height(mask),
            'width_mm': self.measure_width(mask),
            'leaf_area_cm2': self.calculate_leaf_area(mask),
            'leaf_count': self.count_leaves(image, mask),
            'compactness': self.measure_compactness(mask)
        }

        # Calculated metrics
        results['aspect_ratio'] = (
            results['height_mm'] / results['width_mm']
            if results['width_mm'] > 0 else 0
        )

        return results

    def track_growth_over_time(self, measurements_df):
        """Calculate growth rates from time-series measurements"""

        # Ensure dataframe has datetime index
        measurements_df['timestamp'] = pd.to_datetime(
            measurements_df['timestamp']
        )
        measurements_df = measurements_df.set_index('timestamp').sort_index()

        # Calculate daily growth rates
        growth_rates = pd.DataFrame()

        for column in ['height_mm', 'width_mm', 'leaf_area_cm2']:
            if column in measurements_df.columns:
                # Daily change
                daily_change = measurements_df[column].diff()

                # Growth rate (% per day)
                growth_rate = (
                    daily_change / measurements_df[column].shift(1) * 100
                )

                growth_rates[f'{column}_daily_change'] = daily_change
                growth_rates[f'{column}_growth_rate_pct'] = growth_rate

        return growth_rates

# Example usage
if __name__ == "__main__":
    # Initialize phenotyping system
    # Calibration: if 1 pixel = 0.5mm
    phenotyping = PlantPhenotyping(calibration_mm_per_pixel=0.5)

    # Load image
    image = cv2.imread('plant_image.jpg')

    # Analyze
    results = phenotyping.full_phenotype_analysis(image)

    print("Phenotyping Results:")
    for key, value in results.items():
        print(f"  {key}: {value:.2f}" if isinstance(value, float) else f"  {key}: {value}")
```

---

## 5. Summary

Key concepts:
- Image acquisition system design
- CNN architectures for plant analysis
- Object detection with YOLO
- Automated phenotyping techniques
- Real-time processing optimization

### Best Practices

1. **Image Quality:** Ensure consistent lighting and camera settings
2. **Data Augmentation:** Use extensive augmentation for robust models
3. **Model Selection:** Balance accuracy with computational requirements
4. **Calibration:** Regular camera and measurement calibration
5. **Validation:** Test models across different growth stages and conditions

---

## Practical Exercise

Build an end-to-end plant monitoring system:
1. Set up multi-camera capture
2. Train custom disease detection model
3. Implement real-time inference
4. Create automated phenotyping pipeline
5. Deploy to edge device

---

## Next Lesson Preview

**Lesson 4: Predictive Analytics for Crop Management**
- Time-series forecasting methods
- Growth prediction models
- Harvest optimization
- Resource demand forecasting

---

*End of Lesson 3*
