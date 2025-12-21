# Module 6: Edge Computing and Local Processing

## Overview
Edge computing brings computation and data storage closer to sensors and actuators, enabling real-time control, reduced latency, and offline operation for CEA facilities.

**Duration**: 4 hours | **Level**: Master

## Learning Objectives
- Design edge computing architectures for CEA
- Implement edge-to-cloud continuum patterns
- Design offline-first applications
- Select and manage edge devices
- Optimize edge workload placement

---

## 1. Edge Computing Fundamentals

### Edge Computing Architecture

```
CLOUD LAYER (Centralized)
    - Machine learning training
    - Historical analytics
    - Business intelligence
    - Cross-facility aggregation
           |
           | (Minutes to hours latency acceptable)
           |
EDGE LAYER (Distributed - Per Facility)
    - Local data processing
    - Real-time analytics
    - ML model inference
    - Local dashboards
           |
           | (Seconds latency acceptable)
           |
DEVICE LAYER (Real-time - Per Zone)
    - Sensor data collection
    - Immediate control loops
    - Equipment actuation
    - Alert generation
           |
           | (Milliseconds latency required)
           |
PHYSICAL LAYER
    - Plants, environment
    - HVAC, lighting, irrigation
```

### Why Edge Computing for CEA?

**Latency Requirements**:
```
Operation                    Max Latency    Location
---------                    -----------    --------
Climate control loop         < 100ms        Edge
Irrigation control           < 500ms        Edge
Quality image analysis       < 2 seconds    Edge
Production reporting         < 1 minute     Cloud
Historical analytics         Hours          Cloud
```

**Bandwidth Optimization**:
```
WITHOUT EDGE PROCESSING:
    Camera: 30 MB/s × 100 cameras = 3 GB/s to cloud
    Cost: Prohibitive
    Feasibility: Impractical

WITH EDGE PROCESSING:
    Camera → Edge: Full resolution locally
    Edge → Cloud: Processed results (100 KB/s)
    Cost: Minimal
    Bandwidth: 100× reduction
```

---

## 2. Edge Architecture Patterns

### Pattern 1: Edge-Cloud Continuum

```
     SENSORS
        |
    EDGE GATEWAY
    (Initial processing)
        |
    LOCAL EDGE SERVER
    (Advanced analytics)
        |
    REGIONAL CLOUD
    (Facility aggregation)
        |
    CENTRAL CLOUD
    (Enterprise analytics)
```

**Implementation Example**:
```python
# Edge Gateway (Raspberry Pi, Industrial PC)
class EdgeGateway:
    def process_sensor_data(self, reading):
        # Local filtering
        if self.is_valid(reading):
            # Local storage
            self.local_db.insert(reading)

            # Alert if anomaly
            if self.is_anomaly(reading):
                self.trigger_local_alert(reading)

            # Aggregate and send to edge server (reduce bandwidth)
            if self.should_send_to_cloud(reading):
                self.send_to_edge_server(reading)

# Edge Server (Per Facility)
class EdgeServer:
    def process_aggregated_data(self, data_batch):
        # Run ML inference locally
        predictions = self.ml_model.predict(data_batch)

        # Store locally for dashboards
        self.time_series_db.insert(predictions)

        # Send summaries to cloud (not raw data)
        summary = self.aggregate_hourly(predictions)
        self.send_to_cloud(summary)
```

### Pattern 2: Offline-First Architecture

```
OFFLINE CAPABILITY:

Edge Device
    |
    +-- Local Data Store (SQLite, InfluxDB)
    +-- Local Processing Queue
    +-- Local Control Logic
    +-- Local UI/Dashboard
    |
[Network Disconnection Possible]
    |
    +-- Sync Queue (when connected)
    +-- Conflict Resolution
    +-- Background Sync
    |
Cloud Services
```

**Sync Strategy**:
```javascript
// Offline-first with PouchDB/CouchDB

class OfflineFirstDataSync {
    constructor() {
        this.localDB = new PouchDB('local_sensors');
        this.remoteDB = new PouchDB('https://cloud.example.com/sensors');

        // Bi-directional sync
        this.sync = PouchDB.sync(this.localDB, this.remoteDB, {
            live: true,
            retry: true
        })
        .on('change', (info) => {
            console.log('Sync change:', info);
        })
        .on('error', (err) => {
            console.log('Sync error:', err);
        });
    }

    async addReading(reading) {
        // Always write to local DB first
        await this.localDB.put({
            _id: reading.id,
            timestamp: reading.timestamp,
            temperature: reading.temperature,
            zone_id: reading.zone_id
        });
        // Will sync to cloud when connection available
    }
}
```

---

## 3. Edge Device Selection and Management

### Edge Hardware Options

| Device Type | CPU | RAM | Storage | Use Case | Cost |
|-------------|-----|-----|---------|----------|------|
| Raspberry Pi 4 | 4-core ARM | 8GB | 32GB SD | Simple gateways | $ |
| NVIDIA Jetson Nano | 4-core ARM + GPU | 4GB | 32GB SD | Computer vision | $$ |
| Industrial PC | Intel i5/i7 | 8-32GB | 256GB SSD | Critical control | $$$ |
| AWS Greengrass Core | Varies | Varies | Varies | Hybrid workloads | $$ |

### Edge Device Management

```
DEVICE LIFECYCLE:

PROVISIONING
    +-- Device registration
    +-- Certificate installation
    +-- Configuration deployment
    +-- Connectivity verification

MONITORING
    +-- Health checks
    +-- Resource utilization
    +-- Network connectivity
    +-- Application status

UPDATING
    +-- Firmware updates (OTA)
    +-- Application updates
    +-- Configuration changes
    +-- Rollback capability

DECOMMISSIONING
    +-- Certificate revocation
    +-- Data wiping
    +-- Inventory removal
```

**AWS IoT Greengrass Example**:
```python
# Greengrass Lambda function (runs at edge)

import greengrasssdk
import json
import logging

# Create Greengrass Core SDK client
client = greengrasssdk.client('iot-data')
logger = logging.getLogger(__name__)

def lambda_handler(event, context):
    """
    Process sensor data at the edge
    Publish alerts locally if needed
    """
    sensor_data = json.loads(event)

    # Local processing
    if sensor_data['temperature'] > 35:
        alert = {
            'alert_type': 'HIGH_TEMPERATURE',
            'zone_id': sensor_data['zone_id'],
            'value': sensor_data['temperature'],
            'timestamp': sensor_data['timestamp']
        }

        # Publish to local topic (other edge components can subscribe)
        client.publish(
            topic='local/alerts/temperature',
            payload=json.dumps(alert)
        )

        # Also publish to cloud (if connected)
        try:
            client.publish(
                topic='cloud/alerts/temperature',
                payload=json.dumps(alert)
            )
        except Exception as e:
            logger.warning(f"Cloud publish failed (offline?): {e}")

    return 'Processed successfully'
```

---

## 4. Edge AI and ML Inference

### Model Deployment Strategies

```
TRAINING (Cloud)                INFERENCE (Edge)
----------------                ----------------
Large GPU cluster               Small edge device
Days/weeks                      Milliseconds
High power consumption          Low power
Batch processing                Real-time
Full dataset                    Single observation

WORKFLOW:

1. Train model in cloud (TensorFlow, PyTorch)
2. Optimize model for edge (TFLite, ONNX)
3. Deploy to edge devices
4. Run inference locally
5. Feedback loop to retrain
```

**TensorFlow Lite Example**:
```python
# Convert TensorFlow model to TFLite for edge deployment

import tensorflow as tf

# Load trained model
model = tf.keras.models.load_model('plant_disease_model.h5')

# Convert to TensorFlow Lite
converter = tf.lite.TFLiteConverter.from_keras_model(model)
converter.optimizations = [tf.lite.Optimize.DEFAULT]  # Quantization
tflite_model = converter.convert()

# Save optimized model
with open('plant_disease_model.tflite', 'wb') as f:
    f.write(tflite_model)

# Deploy to edge device (Raspberry Pi, Jetson)
# -----------------------------------------------

import tflite_runtime.interpreter as tflite
import numpy as np
from PIL import Image

class PlantDiseaseDetector:
    def __init__(self, model_path):
        self.interpreter = tflite.Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()

        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()

    def predict(self, image_path):
        # Preprocess image
        image = Image.open(image_path).resize((224, 224))
        input_data = np.array(image, dtype=np.float32)
        input_data = np.expand_dims(input_data, axis=0)
        input_data = input_data / 255.0  # Normalize

        # Run inference
        self.interpreter.set_tensor(self.input_details[0]['index'], input_data)
        self.interpreter.invoke()

        # Get prediction
        output_data = self.interpreter.get_tensor(self.output_details[0]['index'])
        return output_data[0]

# Usage
detector = PlantDiseaseDetector('plant_disease_model.tflite')
prediction = detector.predict('plant_image.jpg')
print(f"Disease probability: {prediction}")
```

---

## 5. Case Study: HydroEdge Farms

### Background
HydroEdge operates 20 facilities. Internet outages caused production losses due to cloud dependency for critical control.

### Solution: Edge-First Architecture

```
BEFORE:
All control logic in cloud → Outage = No control → Crop loss

AFTER:
    EDGE TIER (Per Facility)
        - Local control logic
        - Offline operation
        - Local dashboards
        - Sync when connected

    CLOUD TIER (Central)
        - Historical analytics
        - Cross-facility insights
        - ML model training
        - Business reporting
```

### Results
- 99.99% control availability (vs. 99.5% previously)
- Zero crop losses due to connectivity issues
- 70% reduction in cloud bandwidth costs
- Real-time (<100ms) control responses

---

## Summary

Edge computing is essential for CEA operations requiring real-time control and offline capability. Key takeaways:

1. **Edge for Control**: Keep critical control loops at the edge
2. **Cloud for Analytics**: Use cloud for historical analysis and ML training
3. **Offline-First**: Design for intermittent connectivity
4. **Device Management**: Robust OTA update and monitoring strategy
5. **Edge AI**: Deploy optimized ML models for local inference

---

## Next Module
**Module 7: IoT Platform Architecture** - Design scalable IoT platforms for sensor networks, device management, and time-series data processing.
