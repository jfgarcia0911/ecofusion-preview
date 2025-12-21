# ML Deployment & Production Cheatsheet

## Model Serving Options

```
┌──────────────────────────────────────────────────────────┐
│              Deployment Architecture Options              │
└──────────────────────────────────────────────────────────┘

OPTION 1: REST API (Flask/FastAPI)
────────────────────────────────────
Client → HTTP Request → API Server → Model → Response

Pros: Simple, language-agnostic, easy to test
Cons: Latency for each call, synchronous
Use: Most common, general purpose

OPTION 2: Batch Processing
────────────────────────────
Scheduler → Batch Job → Model → Results → Database

Pros: Efficient for large datasets, scheduled
Cons: Not real-time, delayed results
Use: Daily reports, bulk predictions

OPTION 3: Streaming
────────────────────
Data Stream → Processing Pipeline → Model → Real-time Output

Pros: Real-time, handles continuous data
Cons: Complex setup, resource intensive
Use: Sensor monitoring, live alerts

OPTION 4: Edge Deployment
──────────────────────────
Local Device → Embedded Model → On-device Inference

Pros: Low latency, works offline, privacy
Cons: Limited compute, model size constraints
Use: Cameras, robots, field devices
```

---

## Flask API Implementation

```python
# app.py
from flask import Flask, request, jsonify
import joblib
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load model at startup
model = joblib.load('models/yield_predictor.pkl')
scaler = joblib.load('models/scaler.pkl')

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'model_loaded': model is not None})

@app.route('/predict', methods=['POST'])
def predict():
    """
    Predict yield from input features

    Request body:
    {
        "temperature": 23.5,
        "humidity": 65.0,
        "light_hours": 16,
        "co2": 800
    }
    """
    try:
        # Get JSON data
        data = request.get_json()

        # Extract features
        features = np.array([[
            data['temperature'],
            data['humidity'],
            data['light_hours'],
            data['co2']
        ]])

        # Scale features
        features_scaled = scaler.transform(features)

        # Predict
        prediction = model.predict(features_scaled)[0]

        # Return result
        return jsonify({
            'prediction': float(prediction),
            'units': 'kg',
            'confidence': 0.95  # Add confidence intervals if available
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/batch_predict', methods=['POST'])
def batch_predict():
    """Batch prediction endpoint"""
    try:
        data = request.get_json()
        features_list = data['features']

        # Convert to numpy array
        features = np.array(features_list)
        features_scaled = scaler.transform(features)

        # Batch predict
        predictions = model.predict(features_scaled)

        return jsonify({
            'predictions': predictions.tolist(),
            'count': len(predictions)
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
```

### Test API
```bash
# Health check
curl http://localhost:5000/health

# Single prediction
curl -X POST http://localhost:5000/predict \
  -H "Content-Type: application/json" \
  -d '{
    "temperature": 23.5,
    "humidity": 65.0,
    "light_hours": 16,
    "co2": 800
  }'
```

---

## FastAPI Implementation (Modern Alternative)

```python
# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import numpy as np
from typing import List

app = FastAPI(title="Agricultural ML API", version="1.0")

# Load models
model = joblib.load('models/yield_predictor.pkl')
scaler = joblib.load('models/scaler.pkl')

# Request/Response models
class PredictionInput(BaseModel):
    temperature: float
    humidity: float
    light_hours: float
    co2: float

class PredictionOutput(BaseModel):
    prediction: float
    units: str
    confidence: float

@app.get("/")
def root():
    return {"message": "Agricultural ML API", "version": "1.0"}

@app.post("/predict", response_model=PredictionOutput)
async def predict(input_data: PredictionInput):
    try:
        # Prepare features
        features = np.array([[
            input_data.temperature,
            input_data.humidity,
            input_data.light_hours,
            input_data.co2
        ]])

        # Scale and predict
        features_scaled = scaler.transform(features)
        prediction = model.predict(features_scaled)[0]

        return PredictionOutput(
            prediction=float(prediction),
            units="kg",
            confidence=0.95
        )

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Run with: uvicorn main:app --reload
```

---

## Docker Deployment

### Dockerfile
```dockerfile
# Dockerfile
FROM python:3.9-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Expose port
EXPOSE 5000

# Run application
CMD ["python", "app.py"]
```

### requirements.txt
```
flask==2.3.0
flask-cors==4.0.0
scikit-learn==1.3.0
numpy==1.24.0
pandas==2.0.0
joblib==1.3.0
gunicorn==21.2.0
```

### Build and Run
```bash
# Build image
docker build -t ag-ml-api:v1 .

# Run container
docker run -d -p 5000:5000 --name ag-ml-api ag-ml-api:v1

# Check logs
docker logs ag-ml-api

# Stop container
docker stop ag-ml-api

# Remove container
docker rm ag-ml-api
```

### Docker Compose
```yaml
# docker-compose.yml
version: '3.8'

services:
  api:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MODEL_PATH=/app/models
    volumes:
      - ./models:/app/models
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - api
```

```bash
# Start all services
docker-compose up -d

# Stop all services
docker-compose down
```

---

## Model Monitoring

```python
# monitoring.py
import logging
from datetime import datetime
import json
from prometheus_client import Counter, Histogram, Gauge

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('model_predictions.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

# Prometheus metrics
prediction_counter = Counter('predictions_total', 'Total predictions made')
prediction_latency = Histogram('prediction_latency_seconds', 'Prediction latency')
input_value_gauge = Gauge('input_value', 'Input feature value', ['feature'])

class ModelMonitor:
    """Monitor model performance in production"""

    def __init__(self):
        self.predictions = []
        self.metrics = {
            'total_predictions': 0,
            'average_latency': 0,
            'errors': 0
        }

    def log_prediction(self, input_data, prediction, latency):
        """Log prediction for monitoring"""

        # Increment counter
        prediction_counter.inc()
        prediction_latency.observe(latency)

        # Log to file
        log_entry = {
            'timestamp': datetime.now().isoformat(),
            'input': input_data,
            'prediction': float(prediction),
            'latency_ms': latency * 1000
        }

        logger.info(f"Prediction: {json.dumps(log_entry)}")

        # Store for drift detection
        self.predictions.append(log_entry)

        # Update metrics
        self.metrics['total_predictions'] += 1

    def check_drift(self, recent_window=1000):
        """Check for data drift"""
        if len(self.predictions) < recent_window:
            return None

        recent = self.predictions[-recent_window:]

        # Calculate statistics
        recent_mean = np.mean([p['prediction'] for p in recent])
        recent_std = np.std([p['prediction'] for p in recent])

        # Compare to historical baseline
        baseline_mean = self.baseline_mean
        baseline_std = self.baseline_std

        # Statistical test (simplified)
        z_score = abs(recent_mean - baseline_mean) / baseline_std

        if z_score > 3:
            logger.warning(f"Potential drift detected! Z-score: {z_score:.2f}")
            return True

        return False

    def get_metrics(self):
        """Get current monitoring metrics"""
        return self.metrics

# Usage in Flask
monitor = ModelMonitor()

@app.route('/predict', methods=['POST'])
def predict():
    start_time = time.time()

    data = request.get_json()
    # ... make prediction ...

    latency = time.time() - start_time
    monitor.log_prediction(data, prediction, latency)

    return jsonify({'prediction': prediction})

@app.route('/metrics', methods=['GET'])
def metrics():
    return jsonify(monitor.get_metrics())
```

---

## CI/CD Pipeline

### GitHub Actions Workflow
```yaml
# .github/workflows/ml-pipeline.yml
name: ML Model CI/CD

on:
  push:
    branches: [ main ]
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

    - name: Run tests
      run: |
        pytest tests/ --cov=src --cov-report=xml

    - name: Upload coverage
      uses: codecov/codecov-action@v2

  build:
    needs: test
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2

    - name: Build Docker image
      run: docker build -t ag-ml-api:${{ github.sha }} .

    - name: Push to registry
      run: |
        echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin
        docker push ag-ml-api:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to production
      run: |
        # Deploy commands here
        kubectl set image deployment/ag-ml-api ag-ml-api=ag-ml-api:${{ github.sha }}
```

---

## Model Versioning with MLflow

```python
# train_with_mlflow.py
import mlflow
import mlflow.sklearn
from sklearn.ensemble import RandomForestRegressor

# Start MLflow run
with mlflow.start_run(run_name="yield_prediction_v1"):

    # Log parameters
    mlflow.log_param("n_estimators", 200)
    mlflow.log_param("max_depth", 15)

    # Train model
    model = RandomForestRegressor(n_estimators=200, max_depth=15)
    model.fit(X_train, y_train)

    # Evaluate
    predictions = model.predict(X_test)
    mae = mean_absolute_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)

    # Log metrics
    mlflow.log_metric("mae", mae)
    mlflow.log_metric("r2", r2)

    # Log model
    mlflow.sklearn.log_model(model, "model")

    # Log artifacts
    mlflow.log_artifact("feature_importance.png")

    print(f"Model logged with run_id: {mlflow.active_run().info.run_id}")

# Load model from registry
model_uri = f"runs:/{run_id}/model"
loaded_model = mlflow.sklearn.load_model(model_uri)
```

---

## A/B Testing

```python
# ab_testing.py
import random
from datetime import datetime

class ABTestManager:
    """Manage A/B testing for model versions"""

    def __init__(self, model_a, model_b, split_ratio=0.5):
        self.model_a = model_a  # Control
        self.model_b = model_b  # Treatment
        self.split_ratio = split_ratio

        self.results = {
            'model_a': {'predictions': [], 'feedback': []},
            'model_b': {'predictions': [], 'feedback': []}
        }

    def get_model(self, user_id=None):
        """Assign user to A or B group"""
        if user_id:
            # Consistent assignment based on user_id
            import hashlib
            hash_val = int(hashlib.md5(str(user_id).encode()).hexdigest(), 16)
            in_b = (hash_val % 100) < (self.split_ratio * 100)
        else:
            # Random assignment
            in_b = random.random() < self.split_ratio

        model_version = 'model_b' if in_b else 'model_a'
        model = self.model_b if in_b else self.model_a

        return model, model_version

    def record_prediction(self, model_version, prediction):
        """Record prediction for analysis"""
        self.results[model_version]['predictions'].append({
            'timestamp': datetime.now(),
            'prediction': prediction
        })

    def record_feedback(self, model_version, actual_value):
        """Record actual outcome for comparison"""
        self.results[model_version]['feedback'].append({
            'timestamp': datetime.now(),
            'actual': actual_value
        })

    def analyze_results(self):
        """Compare model performance"""
        a_preds = [p['prediction'] for p in self.results['model_a']['predictions']]
        b_preds = [p['prediction'] for p in self.results['model_b']['predictions']]

        a_actual = [f['actual'] for f in self.results['model_a']['feedback']]
        b_actual = [f['actual'] for f in self.results['model_b']['feedback']]

        if len(a_actual) > 0 and len(b_actual) > 0:
            a_mae = mean_absolute_error(a_actual, a_preds[:len(a_actual)])
            b_mae = mean_absolute_error(b_actual, b_preds[:len(b_actual)])

            return {
                'model_a_mae': a_mae,
                'model_b_mae': b_mae,
                'improvement': (a_mae - b_mae) / a_mae * 100
            }

        return None

# Usage
ab_test = ABTestManager(model_v1, model_v2, split_ratio=0.2)

@app.route('/predict', methods=['POST'])
def predict():
    user_id = request.json.get('user_id')

    # Get model for this user
    model, version = ab_test.get_model(user_id)

    # Make prediction
    prediction = model.predict(features)

    # Record
    ab_test.record_prediction(version, prediction)

    return jsonify({
        'prediction': prediction,
        'model_version': version  # Optional: for debugging
    })
```

---

## Performance Optimization

```python
# Caching predictions
from functools import lru_cache
import hashlib

def hash_input(features):
    """Create hash of input features"""
    return hashlib.md5(str(features).encode()).hexdigest()

# In-memory cache
prediction_cache = {}

def predict_with_cache(features):
    """Predict with caching"""
    cache_key = hash_input(features)

    if cache_key in prediction_cache:
        return prediction_cache[cache_key]

    # Make prediction
    prediction = model.predict(features)

    # Cache result
    prediction_cache[cache_key] = prediction

    return prediction

# Batch prediction
def predict_batch(features_list, batch_size=32):
    """Process predictions in batches"""
    predictions = []

    for i in range(0, len(features_list), batch_size):
        batch = features_list[i:i+batch_size]
        batch_preds = model.predict(batch)
        predictions.extend(batch_preds)

    return predictions

# Async prediction
import asyncio
from concurrent.futures import ThreadPoolExecutor

executor = ThreadPoolExecutor(max_workers=4)

async def predict_async(features):
    """Async prediction"""
    loop = asyncio.get_event_loop()
    prediction = await loop.run_in_executor(
        executor,
        model.predict,
        features
    )
    return prediction
```

---

## Production Checklist

```
┌──────────────────────────────────────────────────────────┐
│          Pre-Production Deployment Checklist              │
└──────────────────────────────────────────────────────────┘

□ Model Performance
  □ Accuracy meets requirements
  □ Tested on diverse datasets
  □ Edge cases handled
  □ Performance benchmarks documented

□ Code Quality
  □ Unit tests written (>80% coverage)
  □ Integration tests passed
  □ Code reviewed
  □ Documentation complete

□ API Design
  □ Endpoints documented (OpenAPI/Swagger)
  □ Error handling implemented
  □ Input validation
  □ Rate limiting configured

□ Security
  □ Authentication implemented
  □ API keys managed securely
  □ HTTPS enabled
  □ Input sanitization
  □ Secrets management (env vars, vault)

□ Monitoring
  □ Logging configured
  □ Metrics tracked (latency, errors)
  □ Alerts set up
  □ Drift detection enabled

□ Scalability
  □ Load testing completed
  □ Auto-scaling configured
  □ Caching implemented
  □ Database optimized

□ Deployment
  □ Docker image built
  □ CI/CD pipeline tested
  □ Rollback plan documented
  □ Health checks configured

□ Documentation
  □ API documentation
  □ Deployment guide
  □ Troubleshooting guide
  □ Monitoring dashboard
```

---

## Kubernetes Deployment

```yaml
# k8s-deployment.yml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: ag-ml-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: ag-ml-api
  template:
    metadata:
      labels:
        app: ag-ml-api
    spec:
      containers:
      - name: api
        image: ag-ml-api:latest
        ports:
        - containerPort: 5000
        env:
        - name: MODEL_PATH
          value: "/models"
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /health
            port: 5000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: ag-ml-api-service
spec:
  selector:
    app: ag-ml-api
  ports:
  - protocol: TCP
    port: 80
    targetPort: 5000
  type: LoadBalancer
```

```bash
# Deploy to Kubernetes
kubectl apply -f k8s-deployment.yml

# Check status
kubectl get pods
kubectl get services

# Scale
kubectl scale deployment ag-ml-api --replicas=5

# Update image
kubectl set image deployment/ag-ml-api api=ag-ml-api:v2
```

---

*ML Deployment & Production Cheatsheet - Course 404*
