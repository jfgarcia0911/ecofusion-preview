# Module 8: AI Implementation & Deployment

## Module Overview

Learn production-grade ML deployment strategies, MLOps practices, continuous integration/delivery for ML systems, and scaling AI infrastructure for commercial CEA operations.

**Duration:** 8-10 hours | **Level:** Expert (400-level)

---

## Learning Objectives

1. Design production ML deployment architectures
2. Implement CI/CD pipelines for ML models
3. Build model monitoring and observability systems
4. Apply MLOps best practices
5. Scale ML infrastructure for commercial operations
6. Handle model versioning and rollback strategies
7. Ensure reliability and performance in production
8. Integrate AI systems with existing farm management platforms

---

## Timed Lesson Outline

### Part 1: Production ML Architecture (120 min)
### Part 2: MLOps & CI/CD (120 min)
### Part 3: Model Monitoring & Observability (90 min)
### Part 4: Scaling & Performance (90 min)
### Part 5: Integration & Best Practices (120 min)

---

## 1. Production ML Architecture

### 1.1 Deployment Patterns

```
COMMON ML DEPLOYMENT PATTERNS FOR CEA
======================================

┌─────────────────────────────────────────┐
│  1. BATCH PREDICTION                    │
│  ├─> Scheduled predictions             │
│  ├─> Daily yield forecasts             │
│  └─> Non-real-time analytics           │
│                                         │
│  2. ONLINE PREDICTION API               │
│  ├─> Real-time inference               │
│  ├─> Climate control decisions         │
│  └─> Disease detection on-demand       │
│                                         │
│  3. STREAMING PREDICTION                │
│  ├─> Continuous data streams            │
│  ├─> Sensor data processing             │
│  └─> Anomaly detection                  │
│                                         │
│  4. EDGE DEPLOYMENT                     │
│  ├─> On-device inference                │
│  ├─> Mobile apps                        │
│  └─> Embedded systems                   │
│                                         │
│  5. HYBRID ARCHITECTURE                 │
│  ├─> Edge + Cloud                       │
│  ├─> Offline capability                 │
│  └─> Sync when connected                │
└─────────────────────────────────────────┘
```

### 1.2 Model Serving Infrastructure

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import torch
import numpy as np
from typing import List, Optional
import mlflow
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(
    title="CEA ML Prediction API",
    description="Production ML serving for controlled environment agriculture",
    version="1.0.0"
)

class PredictionRequest(BaseModel):
    """Request schema for predictions."""
    temperature: float
    humidity: float
    co2: float
    light_intensity: float
    plant_age_days: int
    timestamp: Optional[str] = None

class PredictionResponse(BaseModel):
    """Response schema for predictions."""
    yield_prediction_kg: float
    confidence_interval: List[float]
    model_version: str
    prediction_timestamp: str

class ModelManager:
    """
    Manage multiple model versions and routing.
    """
    def __init__(self, mlflow_uri="http://localhost:5000"):
        self.mlflow_uri = mlflow_uri
        mlflow.set_tracking_uri(mlflow_uri)

        self.models = {}
        self.current_model = None

    def load_model(self, model_name, version="latest"):
        """
        Load model from MLflow registry.
        """
        try:
            if version == "latest":
                model_uri = f"models:/{model_name}/Production"
            else:
                model_uri = f"models:/{model_name}/{version}"

            logger.info(f"Loading model: {model_uri}")
            model = mlflow.pytorch.load_model(model_uri)

            self.models[version] = {
                'model': model,
                'metadata': self.get_model_metadata(model_name, version)
            }

            self.current_model = version
            logger.info(f"Model loaded successfully: {model_name} v{version}")

        except Exception as e:
            logger.error(f"Error loading model: {str(e)}")
            raise

    def get_model_metadata(self, model_name, version):
        """
        Retrieve model metadata from MLflow.
        """
        client = mlflow.tracking.MlflowClient()
        model_version = client.get_model_version(model_name, version)

        return {
            'version': version,
            'run_id': model_version.run_id,
            'created': model_version.creation_timestamp,
            'status': model_version.status
        }

    def predict(self, features, version=None):
        """
        Make prediction using specified model version.
        """
        if version is None:
            version = self.current_model

        if version not in self.models:
            raise ValueError(f"Model version {version} not loaded")

        model = self.models[version]['model']
        model.eval()

        with torch.no_grad():
            features_tensor = torch.FloatTensor(features).unsqueeze(0)
            prediction = model(features_tensor).item()

        return prediction

# Initialize model manager
model_manager = ModelManager()

@app.on_event("startup")
async def startup_event():
    """
    Load models on startup.
    """
    logger.info("Starting up ML API...")
    model_manager.load_model("yield_predictor", version="latest")
    logger.info("Models loaded and ready")

@app.post("/predict", response_model=PredictionResponse)
async def predict(request: PredictionRequest):
    """
    Make yield prediction.
    """
    try:
        # Prepare features
        features = [
            request.temperature,
            request.humidity,
            request.co2,
            request.light_intensity,
            request.plant_age_days
        ]

        # Make prediction
        prediction = model_manager.predict(features)

        # Calculate confidence interval (simplified)
        std_dev = prediction * 0.1  # 10% uncertainty
        ci = [prediction - 1.96*std_dev, prediction + 1.96*std_dev]

        response = PredictionResponse(
            yield_prediction_kg=round(prediction, 2),
            confidence_interval=[round(ci[0], 2), round(ci[1], 2)],
            model_version=model_manager.current_model,
            prediction_timestamp=datetime.now().isoformat()
        )

        logger.info(f"Prediction made: {prediction:.2f} kg")
        return response

    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    """
    Health check endpoint.
    """
    return {
        "status": "healthy",
        "model_loaded": model_manager.current_model is not None,
        "model_version": model_manager.current_model
    }

@app.post("/reload-model")
async def reload_model(model_name: str, version: str = "latest"):
    """
    Hot-reload model without restarting service.
    """
    try:
        model_manager.load_model(model_name, version)
        return {"status": "success", "message": f"Model {model_name} v{version} loaded"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
```

### 1.3 Docker Containerization

```dockerfile
# Dockerfile for ML model serving
FROM python:3.9-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code
COPY . .

# Expose API port
EXPOSE 8000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:8000/health || exit 1

# Run application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "4"]
```

```yaml
# docker-compose.yml
version: '3.8'

services:
  ml-api:
    build: .
    ports:
      - "8000:8000"
    environment:
      - MLFLOW_TRACKING_URI=http://mlflow:5000
      - MODEL_NAME=yield_predictor
      - MODEL_VERSION=latest
    depends_on:
      - mlflow
    restart: unless-stopped

  mlflow:
    image: mlflow/mlflow:latest
    ports:
      - "5000:5000"
    command: >
      mlflow server
      --host 0.0.0.0
      --port 5000
      --backend-store-uri postgresql://mlflow:mlflow@postgres/mlflow
      --default-artifact-root s3://mlflow-artifacts
    environment:
      - AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
      - AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
    depends_on:
      - postgres

  postgres:
    image: postgres:13
    environment:
      - POSTGRES_USER=mlflow
      - POSTGRES_PASSWORD=mlflow
      - POSTGRES_DB=mlflow
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

---

## 2. MLOps & CI/CD

### 2.1 Continuous Integration Pipeline

```yaml
# .github/workflows/ml-ci-cd.yml
name: ML CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.9

    - name: Install dependencies
      run: |
        pip install -r requirements.txt
        pip install pytest pytest-cov

    - name: Run unit tests
      run: |
        pytest tests/ --cov=src --cov-report=xml

    - name: Upload coverage
      uses: codecov/codecov-action@v2
      with:
        files: ./coverage.xml

  train-model:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v2

    - name: Set up Python
      uses: actions/setup-python@v2
      with:
        python-version: 3.9

    - name: Install dependencies
      run: pip install -r requirements.txt

    - name: Train model
      env:
        MLFLOW_TRACKING_URI: ${{ secrets.MLFLOW_TRACKING_URI }}
      run: |
        python src/train.py --config configs/production.yaml

    - name: Run model tests
      run: |
        python tests/test_model_performance.py

  deploy:
    needs: train-model
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - uses: actions/checkout@v2

    - name: Configure AWS credentials
      uses: aws-actions/configure-aws-credentials@v1
      with:
        aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
        aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        aws-region: us-west-2

    - name: Login to Amazon ECR
      id: login-ecr
      uses: aws-actions/amazon-ecr-login@v1

    - name: Build and push Docker image
      env:
        ECR_REGISTRY: ${{ steps.login-ecr.outputs.registry }}
        ECR_REPOSITORY: cea-ml-api
        IMAGE_TAG: ${{ github.sha }}
      run: |
        docker build -t $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG .
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG
        docker tag $ECR_REGISTRY/$ECR_REPOSITORY:$IMAGE_TAG $ECR_REGISTRY/$ECR_REPOSITORY:latest
        docker push $ECR_REGISTRY/$ECR_REPOSITORY:latest

    - name: Deploy to ECS
      run: |
        aws ecs update-service \
          --cluster cea-ml-cluster \
          --service ml-api-service \
          --force-new-deployment
```

### 2.2 Model Training Pipeline

```python
import mlflow
import mlflow.pytorch
from dataclasses import dataclass
import yaml

@dataclass
class TrainingConfig:
    """Training configuration."""
    model_name: str
    epochs: int
    batch_size: int
    learning_rate: float
    data_path: str
    validation_split: float
    random_seed: int

class MLPipeline:
    """
    End-to-end ML training pipeline with tracking.
    """
    def __init__(self, config: TrainingConfig):
        self.config = config

        # Set up MLflow
        mlflow.set_experiment(config.model_name)

    def run(self):
        """
        Execute complete training pipeline.
        """
        with mlflow.start_run() as run:
            # Log parameters
            mlflow.log_params({
                'epochs': self.config.epochs,
                'batch_size': self.config.batch_size,
                'learning_rate': self.config.learning_rate,
                'validation_split': self.config.validation_split
            })

            # Load and prepare data
            train_loader, val_loader = self.prepare_data()

            # Initialize model
            model = self.create_model()

            # Train
            best_model, metrics = self.train(model, train_loader, val_loader)

            # Evaluate
            test_metrics = self.evaluate(best_model, val_loader)

            # Log metrics
            mlflow.log_metrics(test_metrics)

            # Log model
            mlflow.pytorch.log_model(
                best_model,
                "model",
                registered_model_name=self.config.model_name
            )

            # Log artifacts
            self.log_artifacts(best_model, metrics)

            return run.info.run_id

    def prepare_data(self):
        """Load and prepare datasets."""
        # Implementation here
        pass

    def train(self, model, train_loader, val_loader):
        """Train model with monitoring."""
        # Implementation here
        pass

    def evaluate(self, model, test_loader):
        """Comprehensive model evaluation."""
        # Implementation here
        pass

    def log_artifacts(self, model, metrics):
        """Log additional artifacts."""
        # Save plots, reports, etc.
        pass

if __name__ == "__main__":
    # Load configuration
    with open('configs/production.yaml') as f:
        config_dict = yaml.safe_load(f)

    config = TrainingConfig(**config_dict)

    # Run pipeline
    pipeline = MLPipeline(config)
    run_id = pipeline.run()

    print(f"Training completed. Run ID: {run_id}")
```

---

## 3. Model Monitoring & Observability

### 3.1 Performance Monitoring

```python
from prometheus_client import Counter, Histogram, Gauge, start_http_server
import time
import numpy as np

# Metrics definitions
prediction_counter = Counter(
    'model_predictions_total',
    'Total number of predictions made',
    ['model_version']
)

prediction_latency = Histogram(
    'model_prediction_latency_seconds',
    'Time taken for predictions',
    ['model_version']
)

prediction_value = Histogram(
    'model_prediction_value',
    'Distribution of predicted values',
    ['model_version']
)

model_accuracy = Gauge(
    'model_accuracy',
    'Current model accuracy',
    ['model_version', 'metric']
)

error_counter = Counter(
    'model_errors_total',
    'Total number of prediction errors',
    ['model_version', 'error_type']
)

class ModelMonitor:
    """
    Monitor ML model performance in production.
    """
    def __init__(self, model_version):
        self.model_version = model_version
        self.predictions = []
        self.actuals = []

    def record_prediction(self, prediction, latency, error=None):
        """
        Record prediction metrics.
        """
        # Increment counter
        prediction_counter.labels(model_version=self.model_version).inc()

        # Record latency
        prediction_latency.labels(model_version=self.model_version).observe(latency)

        # Record prediction value
        if not error:
            prediction_value.labels(model_version=self.model_version).observe(prediction)
            self.predictions.append(prediction)
        else:
            error_counter.labels(
                model_version=self.model_version,
                error_type=type(error).__name__
            ).inc()

    def record_actual(self, actual_value):
        """
        Record actual outcome for accuracy tracking.
        """
        self.actuals.append(actual_value)

        # Update accuracy metrics if we have pairs
        if len(self.actuals) == len(self.predictions):
            self.update_accuracy_metrics()

    def update_accuracy_metrics(self):
        """
        Calculate and update accuracy metrics.
        """
        predictions = np.array(self.predictions)
        actuals = np.array(self.actuals)

        # MAE
        mae = np.mean(np.abs(predictions - actuals))
        model_accuracy.labels(
            model_version=self.model_version,
            metric='mae'
        ).set(mae)

        # RMSE
        rmse = np.sqrt(np.mean((predictions - actuals)**2))
        model_accuracy.labels(
            model_version=self.model_version,
            metric='rmse'
        ).set(rmse)

        # R²
        ss_res = np.sum((actuals - predictions)**2)
        ss_tot = np.sum((actuals - np.mean(actuals))**2)
        r2 = 1 - (ss_res / ss_tot)
        model_accuracy.labels(
            model_version=self.model_version,
            metric='r2'
        ).set(r2)

# Start Prometheus metrics server
start_http_server(8001)
```

### 3.2 Data Drift Detection

```python
from scipy import stats
import pandas as pd
from datetime import datetime, timedelta

class DriftDetector:
    """
    Detect data drift in production inputs.
    """
    def __init__(self, reference_data, alpha=0.05):
        """
        Args:
            reference_data: Training data statistics
            alpha: Significance level for tests
        """
        self.reference_stats = self.calculate_statistics(reference_data)
        self.alpha = alpha
        self.drift_history = []

    def calculate_statistics(self, data):
        """
        Calculate reference statistics.
        """
        stats_dict = {}

        for column in data.columns:
            stats_dict[column] = {
                'mean': data[column].mean(),
                'std': data[column].std(),
                'min': data[column].min(),
                'max': data[column].max(),
                'quantiles': data[column].quantile([0.25, 0.5, 0.75]).to_dict()
            }

        return stats_dict

    def detect_drift(self, production_data):
        """
        Test for distribution drift using Kolmogorov-Smirnov test.
        """
        drift_detected = {}

        for column in production_data.columns:
            if column not in self.reference_stats:
                continue

            # KS test
            ref_data = self.reference_stats[column]
            prod_values = production_data[column].values

            # Compare with reference distribution
            # (Simplified - in practice, use actual reference data)
            _, p_value = stats.kstest(
                prod_values,
                'norm',
                args=(ref_data['mean'], ref_data['std'])
            )

            drift_detected[column] = {
                'p_value': p_value,
                'drift': p_value < self.alpha,
                'severity': self.calculate_severity(p_value)
            }

        # Log drift detection
        self.drift_history.append({
            'timestamp': datetime.now(),
            'results': drift_detected
        })

        return drift_detected

    def calculate_severity(self, p_value):
        """
        Categorize drift severity.
        """
        if p_value >= self.alpha:
            return 'None'
        elif p_value >= self.alpha / 2:
            return 'Low'
        elif p_value >= self.alpha / 10:
            return 'Medium'
        else:
            return 'High'

    def should_retrain(self):
        """
        Determine if model retraining is needed.
        """
        if not self.drift_history:
            return False

        recent_drift = self.drift_history[-1]['results']

        # Check if significant drift in multiple features
        high_drift_count = sum(
            1 for feature in recent_drift.values()
            if feature['severity'] in ['Medium', 'High']
        )

        return high_drift_count >= 3  # Threshold
```

---

## 4. Scaling & Performance Optimization

### 4.1 Model Optimization

```python
import torch
import torch.quantization as quantization

def optimize_model_for_production(model, example_input):
    """
    Apply optimizations for production deployment.
    """
    # 1. Convert to eval mode
    model.eval()

    # 2. Fuse operations
    model = torch.quantization.fuse_modules(
        model,
        [['conv', 'bn', 'relu']]  # Fuse common patterns
    )

    # 3. Quantization
    model.qconfig = quantization.get_default_qconfig('fbgemm')
    quantization.prepare(model, inplace=True)

    # Calibrate with example data
    with torch.no_grad():
        model(example_input)

    # Convert to quantized model
    quantized_model = quantization.convert(model, inplace=False)

    # 4. TorchScript compilation
    scripted_model = torch.jit.script(quantized_model)

    # 5. Optimize for inference
    optimized_model = torch.jit.optimize_for_inference(scripted_model)

    return optimized_model

# Benchmark comparison
def benchmark_models(original, optimized, input_data, iterations=1000):
    """
    Compare original vs optimized model performance.
    """
    import time

    # Original model
    start = time.time()
    for _ in range(iterations):
        with torch.no_grad():
            _ = original(input_data)
    original_time = time.time() - start

    # Optimized model
    start = time.time()
    for _ in range(iterations):
        with torch.no_grad():
            _ = optimized(input_data)
    optimized_time = time.time() - start

    print(f"Original model: {original_time:.3f}s")
    print(f"Optimized model: {optimized_time:.3f}s")
    print(f"Speedup: {original_time / optimized_time:.2f}x")

    # Size comparison
    original_size = sum(p.numel() * p.element_size() for p in original.parameters()) / 1024**2
    optimized_size = sum(p.numel() * p.element_size() for p in optimized.parameters()) / 1024**2

    print(f"Original size: {original_size:.2f} MB")
    print(f"Optimized size: {optimized_size:.2f} MB")
    print(f"Size reduction: {(1 - optimized_size/original_size)*100:.1f}%")
```

### 4.2 Load Balancing & Auto-Scaling

```yaml
# kubernetes-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ml-api-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ml-api
  template:
    metadata:
      labels:
        app: ml-api
    spec:
      containers:
      - name: ml-api
        image: your-registry/cea-ml-api:latest
        ports:
        - containerPort: 8000
        resources:
          requests:
            memory: "2Gi"
            cpu: "1000m"
          limits:
            memory: "4Gi"
            cpu: "2000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5
---
apiVersion: v1
kind: Service
metadata:
  name: ml-api-service
spec:
  selector:
    app: ml-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 8000
  type: LoadBalancer
---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: ml-api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: ml-api-deployment
  minReplicas: 2
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80
```

---

## 5. Integration & Best Practices

### 5.1 Farm Management System Integration

```python
from typing import Dict, Any
import requests
from datetime import datetime

class FarmManagementIntegration:
    """
    Integrate ML predictions with farm management systems.
    """
    def __init__(self, fms_api_url, api_key):
        self.fms_api_url = fms_api_url
        self.api_key = api_key
        self.headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }

    def send_prediction(self, zone_id: str, prediction_data: Dict[str, Any]):
        """
        Send ML predictions to FMS.
        """
        payload = {
            'zone_id': zone_id,
            'timestamp': datetime.now().isoformat(),
            'prediction_type': prediction_data['type'],
            'value': prediction_data['value'],
            'confidence': prediction_data.get('confidence', 0.95),
            'metadata': prediction_data.get('metadata', {})
        }

        response = requests.post(
            f"{self.fms_api_url}/predictions",
            json=payload,
            headers=self.headers
        )

        return response.json()

    def get_environmental_data(self, zone_id: str, hours=24):
        """
        Retrieve environmental data from FMS for predictions.
        """
        params = {
            'zone_id': zone_id,
            'hours': hours
        }

        response = requests.get(
            f"{self.fms_api_url}/environmental-data",
            params=params,
            headers=self.headers
        )

        return response.json()

    def trigger_action(self, zone_id: str, action: Dict[str, Any]):
        """
        Trigger automated action based on prediction.
        """
        payload = {
            'zone_id': zone_id,
            'action_type': action['type'],
            'parameters': action['parameters'],
            'timestamp': datetime.now().isoformat(),
            'triggered_by': 'ml_prediction',
            'confidence': action.get('confidence', 0.95)
        }

        response = requests.post(
            f"{self.fms_api_url}/actions",
            json=payload,
            headers=self.headers
        )

        return response.json()
```

### 5.2 Production Best Practices

```python
PRODUCTION_ML_CHECKLIST = """
┌─────────────────────────────────────────────────────┐
│        PRODUCTION ML DEPLOYMENT CHECKLIST           │
├─────────────────────────────────────────────────────┤
│                                                     │
│ □ MODEL VALIDATION                                  │
│   ├─ Comprehensive testing on held-out data        │
│   ├─ Performance meets acceptance criteria         │
│   ├─ Edge cases identified and handled             │
│   └─ Model bias analysis completed                 │
│                                                     │
│ □ INFRASTRUCTURE                                    │
│   ├─ Scalable deployment architecture              │
│   ├─ Load balancing configured                     │
│   ├─ Auto-scaling policies defined                 │
│   ├─ Redundancy and failover in place              │
│   └─ Disaster recovery plan documented             │
│                                                     │
│ □ MONITORING                                        │
│   ├─ Metrics collection implemented                │
│   ├─ Alerting rules configured                     │
│   ├─ Dashboards created                            │
│   ├─ Drift detection active                        │
│   └─ Performance tracking automated                │
│                                                     │
│ □ SECURITY                                          │
│   ├─ API authentication/authorization              │
│   ├─ Data encryption (at rest and in transit)      │
│   ├─ Input validation and sanitization             │
│   ├─ Rate limiting implemented                     │
│   └─ Security audit completed                      │
│                                                     │
│ □ OPERATIONAL                                       │
│   ├─ Rollback procedure documented                 │
│   ├─ Incident response plan defined                │
│   ├─ On-call rotation established                  │
│   ├─ Documentation complete                        │
│   └─ Training provided to operators                │
│                                                     │
│ □ COMPLIANCE                                        │
│   ├─ Data privacy requirements met                 │
│   ├─ Model explainability documented               │
│   ├─ Audit trail implemented                       │
│   └─ Regulatory requirements satisfied             │
│                                                     │
└─────────────────────────────────────────────────────┘
"""
```

---

## Summary

Production ML deployment requires:
1. Robust infrastructure and architecture
2. Automated CI/CD pipelines
3. Comprehensive monitoring and observability
4. Performance optimization strategies
5. Integration with existing systems
6. Adherence to best practices and checklists

**Key Technologies:**
- FastAPI, Docker, Kubernetes
- MLflow, Prometheus, Grafana
- CI/CD tools (GitHub Actions, Jenkins)
- Cloud platforms (AWS, GCP, Azure)

---

## Discussion Questions

1. What are the main challenges in deploying ML to production agriculture?
2. How would you handle model versioning in a production environment?
3. What metrics are most important for monitoring ML systems in CEA?
4. How can you ensure ML systems remain reliable during network outages?
5. What role should human oversight play in automated ML systems?

---

## Vocabulary

- **MLOps:** Machine Learning Operations (DevOps for ML)
- **CI/CD:** Continuous Integration/Continuous Deployment
- **Model Registry:** Central repository for ML models
- **A/B Testing:** Comparing two model versions in production
- **Canary Deployment:** Gradual rollout to subset of users
- **Model Drift:** Degradation in model performance over time
- **Observability:** Ability to understand system internal state

---

## Course Completion

**Congratulations!** You have completed Course 404: AI & Machine Learning in Agriculture.

**You've learned:**
- ML fundamentals and agricultural applications
- Data collection and sensor integration
- Computer vision for plant monitoring
- Predictive analytics and forecasting
- Reinforcement learning for climate control
- Disease and pest detection systems
- Resource optimization techniques
- Production deployment and MLOps

**Next Steps:**
- Apply these techniques to real-world projects
- Contribute to open-source agricultural AI projects
- Stay current with latest research and developments
- Consider advanced specializations in specific areas
- Share your knowledge with the community

---

## Final Project

**Capstone: End-to-End ML System for CEA**

Design and implement a complete ML system including:
1. Data collection pipeline
2. Multiple ML models (vision, prediction, control)
3. Production deployment architecture
4. Monitoring and alerting
5. Integration with farm management
6. Documentation and presentation

See: `/projects/capstone_ml_system.md`

---

## Resources

### Books
- "Designing Machine Learning Systems" by Chip Huyen
- "ML Engineering" by Andriy Burkov
- "Building Machine Learning Powered Applications" by Emmanuel Ameisen

### Platforms
- MLflow: mlflow.org
- Kubeflow: kubeflow.org
- Weights & Biases: wandb.ai

### Communities
- MLOps Community
- AI in Agriculture Forums
- CEA Technology Groups

---

*End of Module 8 - Course Complete!*
