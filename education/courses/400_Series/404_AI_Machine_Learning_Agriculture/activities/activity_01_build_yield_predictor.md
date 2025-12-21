# Activity 1: Build an End-to-End Yield Prediction System

## Objective
Develop a complete machine learning system to predict crop yield based on environmental conditions, from data collection through model deployment.

**Estimated Time:** 8-10 hours
**Difficulty:** Intermediate to Advanced
**Prerequisites:** Lessons 1-6 completed

---

## Learning Outcomes

By completing this activity, you will:
1. Collect and prepare real-world agricultural data
2. Perform exploratory data analysis and feature engineering
3. Train and evaluate multiple ML models
4. Select the best model using cross-validation
5. Deploy a working prediction API
6. Create a simple web interface for predictions

---

## Part 1: Data Collection & Preparation (2 hours)

### Task 1.1: Gather Data

You have three options:

**Option A: Use Provided Dataset**
Download the sample dataset from the course materials:
- `greenhouse_data.csv` - 1 year of environmental data with yield outcomes

**Option B: Simulate Data**
Create synthetic data using the provided script:

```python
# generate_data.py
import pandas as pd
import numpy as np
from datetime import datetime, timedelta

np.random.seed(42)

# Generate dates
start_date = datetime(2023, 1, 1)
dates = [start_date + timedelta(days=i) for i in range(365)]

# Generate environmental data
data = {
    'date': dates,
    'temperature': np.random.normal(23, 3, 365) + 3*np.sin(np.arange(365)*2*np.pi/365),
    'humidity': np.random.normal(65, 8, 365),
    'light_hours': np.random.normal(14, 2, 365),
    'co2': np.random.normal(800, 100, 365),
    'water_ec': np.random.normal(2.0, 0.3, 365),
    'ph': np.random.normal(6.0, 0.5, 365)
}

df = pd.DataFrame(data)

# Generate yield based on conditions (with realistic relationships)
df['yield_kg'] = (
    25 +  # Base yield
    1.5 * (df['temperature'] - 23) +  # Temperature effect
    -0.3 * (df['humidity'] - 65) +    # Humidity effect
    2.0 * (df['light_hours'] - 14) +  # Light effect
    0.02 * (df['co2'] - 800) +        # CO2 effect
    5 * (df['water_ec'] - 2.0) +      # EC effect
    -2 * abs(df['ph'] - 6.0) +        # pH effect (optimal at 6.0)
    np.random.normal(0, 2, 365)       # Random noise
)

# Ensure realistic bounds
df['yield_kg'] = df['yield_kg'].clip(10, 60)

df.to_csv('greenhouse_data.csv', index=False)
print("Data generated successfully!")
print(df.head())
print(f"\nShape: {df.shape}")
print(f"\nYield stats:\n{df['yield_kg'].describe()}")
```

**Option C: Collect Your Own Data**
If you have access to a greenhouse:
- Collect at least 100 data points
- Include: temperature, humidity, light, CO2, water EC, pH
- Record actual yields

### Task 1.2: Exploratory Data Analysis

```python
# eda.py
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Load data
df = pd.read_csv('greenhouse_data.csv')

# Basic info
print("Dataset Info:")
print(df.info())
print("\nStatistical Summary:")
print(df.describe())

# Check missing values
print("\nMissing Values:")
print(df.isnull().sum())

# Visualize distributions
fig, axes = plt.subplots(3, 3, figsize=(15, 12))
fig.suptitle('Feature Distributions', fontsize=16)

columns = ['temperature', 'humidity', 'light_hours', 'co2',
           'water_ec', 'ph', 'yield_kg']

for idx, col in enumerate(columns):
    row = idx // 3
    col_idx = idx % 3

    axes[row, col_idx].hist(df[col], bins=30, edgecolor='black')
    axes[row, col_idx].set_title(col)
    axes[row, col_idx].set_xlabel('Value')
    axes[row, col_idx].set_ylabel('Frequency')

plt.tight_layout()
plt.savefig('distributions.png', dpi=300)
plt.show()

# Correlation analysis
plt.figure(figsize=(10, 8))
corr = df.drop('date', axis=1).corr()
sns.heatmap(corr, annot=True, cmap='coolwarm', center=0)
plt.title('Feature Correlation Matrix')
plt.tight_layout()
plt.savefig('correlations.png', dpi=300)
plt.show()

# Scatter plots with yield
fig, axes = plt.subplots(2, 3, figsize=(15, 10))
fig.suptitle('Relationships with Yield', fontsize=16)

features = ['temperature', 'humidity', 'light_hours', 'co2', 'water_ec', 'ph']

for idx, feature in enumerate(features):
    row = idx // 3
    col = idx % 3

    axes[row, col].scatter(df[feature], df['yield_kg'], alpha=0.5)
    axes[row, col].set_xlabel(feature)
    axes[row, col].set_ylabel('Yield (kg)')
    axes[row, col].set_title(f'Yield vs {feature}')

    # Add trend line
    z = np.polyfit(df[feature], df['yield_kg'], 1)
    p = np.poly1d(z)
    axes[row, col].plot(df[feature], p(df[feature]), "r--", alpha=0.8)

plt.tight_layout()
plt.savefig('yield_relationships.png', dpi=300)
plt.show()

# Time series plot
df['date'] = pd.to_datetime(df['date'])
plt.figure(figsize=(12, 6))
plt.plot(df['date'], df['yield_kg'])
plt.xlabel('Date')
plt.ylabel('Yield (kg)')
plt.title('Yield Over Time')
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('yield_timeseries.png', dpi=300)
plt.show()

print("\nEDA complete! Check generated plots.")
```

**Deliverable 1.2:** Submit EDA report with:
- Data summary statistics
- Distribution plots
- Correlation analysis
- Key insights (3-5 observations)

---

## Part 2: Feature Engineering & Model Training (3 hours)

### Task 2.1: Feature Engineering

```python
# feature_engineering.py
import pandas as pd
import numpy as np

df = pd.read_csv('greenhouse_data.csv')

# Create new features
# 1. VPD (Vapor Pressure Deficit)
def calculate_vpd(temp, rh):
    """Calculate VPD from temperature and humidity"""
    svp = 0.6108 * np.exp(17.27 * temp / (temp + 237.3))
    vpd = svp * (1 - rh / 100)
    return vpd

df['vpd'] = calculate_vpd(df['temperature'], df['humidity'])

# 2. DLI (Daily Light Integral) estimation
df['dli'] = df['light_hours'] * 50  # Simplified: assuming 50 mol/m²/day per hour

# 3. Temperature stress indicator
df['temp_stress'] = ((df['temperature'] < 18) | (df['temperature'] > 28)).astype(int)

# 4. Optimal pH deviation
df['ph_deviation'] = abs(df['ph'] - 6.0)

# 5. Rolling averages (7-day window)
df['temp_7d_avg'] = df['temperature'].rolling(window=7, min_periods=1).mean()
df['humidity_7d_avg'] = df['humidity'].rolling(window=7, min_periods=1).mean()

# 6. Interaction features
df['temp_humidity'] = df['temperature'] * df['humidity']
df['light_co2'] = df['light_hours'] * df['co2']

# Save engineered features
df.to_csv('data_engineered.csv', index=False)

print("Feature engineering complete!")
print(f"Original features: 7")
print(f"Engineered features: {len(df.columns) - 7}")
print(f"Total features: {len(df.columns)}")
```

### Task 2.2: Train Multiple Models

```python
# train_models.py
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import joblib
import matplotlib.pyplot as plt

# Load data
df = pd.read_csv('data_engineered.csv')

# Prepare features and target
feature_columns = [col for col in df.columns if col not in ['date', 'yield_kg']]
X = df[feature_columns]
y = df['yield_kg']

# Split data (80-20)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Scale features
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Define models
models = {
    'Linear Regression': LinearRegression(),
    'Ridge': Ridge(alpha=1.0),
    'Lasso': Lasso(alpha=1.0),
    'Random Forest': RandomForestRegressor(
        n_estimators=200,
        max_depth=15,
        min_samples_split=5,
        random_state=42
    ),
    'Gradient Boosting': GradientBoostingRegressor(
        n_estimators=200,
        learning_rate=0.05,
        max_depth=7,
        random_state=42
    ),
    'XGBoost': XGBRegressor(
        n_estimators=200,
        learning_rate=0.05,
        max_depth=7,
        random_state=42
    )
}

# Train and evaluate
results = {}

print("Training models...\n")

for name, model in models.items():
    print(f"Training {name}...")

    # Train
    model.fit(X_train_scaled, y_train)

    # Predictions
    train_pred = model.predict(X_train_scaled)
    test_pred = model.predict(X_test_scaled)

    # Metrics
    train_mae = mean_absolute_error(y_train, train_pred)
    test_mae = mean_absolute_error(y_test, test_pred)

    train_rmse = np.sqrt(mean_squared_error(y_train, train_pred))
    test_rmse = np.sqrt(mean_squared_error(y_test, test_pred))

    train_r2 = r2_score(y_train, train_pred)
    test_r2 = r2_score(y_test, test_pred)

    # Cross-validation
    cv_scores = cross_val_score(
        model, X_train_scaled, y_train,
        cv=5, scoring='r2'
    )

    results[name] = {
        'train_mae': train_mae,
        'test_mae': test_mae,
        'train_rmse': train_rmse,
        'test_rmse': test_rmse,
        'train_r2': train_r2,
        'test_r2': test_r2,
        'cv_r2_mean': cv_scores.mean(),
        'cv_r2_std': cv_scores.std(),
        'model': model
    }

    print(f"  Test MAE: {test_mae:.2f} kg")
    print(f"  Test R²: {test_r2:.3f}")
    print(f"  CV R² (mean): {cv_scores.mean():.3f} (+/- {cv_scores.std():.3f})")
    print()

# Create comparison table
results_df = pd.DataFrame(results).T
results_df = results_df.drop('model', axis=1)
print("\nModel Comparison:")
print(results_df.round(3))

# Save results
results_df.to_csv('model_comparison.csv')

# Select best model (lowest test MAE)
best_model_name = results_df['test_mae'].idxmin()
best_model = results[best_model_name]['model']

print(f"\nBest model: {best_model_name}")
print(f"Test MAE: {results[best_model_name]['test_mae']:.2f} kg")
print(f"Test R²: {results[best_model_name]['test_r2']:.3f}")

# Save best model and scaler
joblib.dump(best_model, 'best_model.pkl')
joblib.dump(scaler, 'scaler.pkl')
joblib.dump(feature_columns, 'feature_columns.pkl')

print("\nModel and scaler saved!")

# Visualize predictions
plt.figure(figsize=(10, 6))
test_pred = best_model.predict(X_test_scaled)
plt.scatter(y_test, test_pred, alpha=0.5)
plt.plot([y_test.min(), y_test.max()],
         [y_test.min(), y_test.max()], 'r--', lw=2)
plt.xlabel('Actual Yield (kg)')
plt.ylabel('Predicted Yield (kg)')
plt.title(f'{best_model_name} - Predictions vs Actual')
plt.tight_layout()
plt.savefig('predictions_vs_actual.png', dpi=300)
plt.show()

# Feature importance (if applicable)
if hasattr(best_model, 'feature_importances_'):
    importance_df = pd.DataFrame({
        'feature': feature_columns,
        'importance': best_model.feature_importances_
    }).sort_values('importance', ascending=False)

    plt.figure(figsize=(10, 8))
    plt.barh(importance_df['feature'], importance_df['importance'])
    plt.xlabel('Importance')
    plt.title('Feature Importance')
    plt.tight_layout()
    plt.savefig('feature_importance.png', dpi=300)
    plt.show()

    print("\nTop 5 Most Important Features:")
    print(importance_df.head())
```

**Deliverable 2.2:** Submit:
- Model comparison table
- Predictions vs Actual plot
- Feature importance analysis
- Best model files (`.pkl`)

---

## Part 3: API Development & Deployment (3 hours)

### Task 3.1: Create Flask API

```python
# app.py
from flask import Flask, request, jsonify, render_template
import joblib
import numpy as np
import pandas as pd
from datetime import datetime

app = Flask(__name__)

# Load model and scaler
model = joblib.load('best_model.pkl')
scaler = joblib.load('scaler.pkl')
feature_columns = joblib.load('feature_columns.pkl')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/health')
def health():
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Extract features
        input_data = {
            'temperature': data['temperature'],
            'humidity': data['humidity'],
            'light_hours': data['light_hours'],
            'co2': data['co2'],
            'water_ec': data['water_ec'],
            'ph': data['ph']
        }

        # Engineer features (same as training)
        df = pd.DataFrame([input_data])

        # VPD
        svp = 0.6108 * np.exp(17.27 * df['temperature'] / (df['temperature'] + 237.3))
        df['vpd'] = svp * (1 - df['humidity'] / 100)

        # DLI
        df['dli'] = df['light_hours'] * 50

        # Stress indicators
        df['temp_stress'] = ((df['temperature'] < 18) | (df['temperature'] > 28)).astype(int)
        df['ph_deviation'] = abs(df['ph'] - 6.0)

        # Interactions
        df['temp_humidity'] = df['temperature'] * df['humidity']
        df['light_co2'] = df['light_hours'] * df['co2']

        # For rolling features, use input values (no history available)
        df['temp_7d_avg'] = df['temperature']
        df['humidity_7d_avg'] = df['humidity']

        # Ensure all features present
        for col in feature_columns:
            if col not in df.columns:
                df[col] = 0

        # Select and order features
        X = df[feature_columns]

        # Scale
        X_scaled = scaler.transform(X)

        # Predict
        prediction = model.predict(X_scaled)[0]

        return jsonify({
            'prediction': float(prediction),
            'units': 'kg',
            'input': input_data,
            'timestamp': datetime.now().isoformat()
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

### Task 3.2: Create Web Interface

```html
<!-- templates/index.html -->
<!DOCTYPE html>
<html>
<head>
    <title>Yield Predictor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        .form-group {
            margin: 15px 0;
        }
        label {
            display: inline-block;
            width: 150px;
            font-weight: bold;
        }
        input {
            width: 200px;
            padding: 5px;
        }
        button {
            margin-top: 20px;
            padding: 10px 30px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            font-size: 16px;
        }
        button:hover {
            background-color: #45a049;
        }
        #result {
            margin-top: 30px;
            padding: 20px;
            background-color: #f0f0f0;
            border-radius: 5px;
            display: none;
        }
        .prediction {
            font-size: 24px;
            color: #4CAF50;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <h1>Agricultural Yield Predictor</h1>
    <p>Enter environmental conditions to predict crop yield:</p>

    <form id="predictionForm">
        <div class="form-group">
            <label>Temperature (°C):</label>
            <input type="number" step="0.1" id="temperature" required>
        </div>

        <div class="form-group">
            <label>Humidity (%):</label>
            <input type="number" step="0.1" id="humidity" required>
        </div>

        <div class="form-group">
            <label>Light Hours:</label>
            <input type="number" step="0.1" id="light_hours" required>
        </div>

        <div class="form-group">
            <label>CO2 (ppm):</label>
            <input type="number" step="1" id="co2" required>
        </div>

        <div class="form-group">
            <label>Water EC (mS/cm):</label>
            <input type="number" step="0.1" id="water_ec" required>
        </div>

        <div class="form-group">
            <label>pH:</label>
            <input type="number" step="0.1" id="ph" required>
        </div>

        <button type="submit">Predict Yield</button>
    </form>

    <div id="result">
        <h2>Prediction Result:</h2>
        <p class="prediction" id="predictionValue"></p>
    </div>

    <script>
        document.getElementById('predictionForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const data = {
                temperature: parseFloat(document.getElementById('temperature').value),
                humidity: parseFloat(document.getElementById('humidity').value),
                light_hours: parseFloat(document.getElementById('light_hours').value),
                co2: parseFloat(document.getElementById('co2').value),
                water_ec: parseFloat(document.getElementById('water_ec').value),
                ph: parseFloat(document.getElementById('ph').value)
            };

            try {
                const response = await fetch('/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok) {
                    document.getElementById('predictionValue').textContent =
                        `Predicted Yield: ${result.prediction.toFixed(2)} ${result.units}`;
                    document.getElementById('result').style.display = 'block';
                } else {
                    alert('Error: ' + result.error);
                }
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
    </script>
</body>
</html>
```

### Task 3.3: Test the API

```python
# test_api.py
import requests
import json

# Test data
test_cases = [
    {
        "temperature": 23.0,
        "humidity": 65.0,
        "light_hours": 14.0,
        "co2": 800,
        "water_ec": 2.0,
        "ph": 6.0
    },
    {
        "temperature": 27.0,
        "humidity": 70.0,
        "light_hours": 16.0,
        "co2": 1000,
        "water_ec": 2.5,
        "ph": 5.8
    }
]

for i, test_data in enumerate(test_cases, 1):
    print(f"\nTest Case {i}:")
    print(f"Input: {test_data}")

    response = requests.post(
        'http://localhost:5000/predict',
        json=test_data
    )

    if response.status_code == 200:
        result = response.json()
        print(f"Prediction: {result['prediction']:.2f} {result['units']}")
    else:
        print(f"Error: {response.text}")
```

**Deliverable 3.3:** Submit:
- Working Flask application
- Screenshot of web interface
- API test results
- Brief deployment documentation

---

## Part 4: Documentation & Presentation (2 hours)

### Task 4.1: Create Project Report

Write a comprehensive report covering:

1. **Executive Summary** (1 page)
   - Project objectives
   - Key findings
   - Model performance summary

2. **Data Analysis** (2-3 pages)
   - Dataset description
   - EDA insights
   - Feature relationships

3. **Methodology** (2-3 pages)
   - Feature engineering approach
   - Models tested
   - Evaluation metrics
   - Model selection criteria

4. **Results** (2-3 pages)
   - Model comparison
   - Best model performance
   - Feature importance analysis
   - Error analysis

5. **Deployment** (1-2 pages)
   - API design
   - Usage instructions
   - Example predictions

6. **Conclusions & Recommendations** (1 page)
   - Key takeaways
   - Limitations
   - Future improvements

### Task 4.2: Create Presentation

Prepare a 10-minute presentation with:
- Slides summarizing key points
- Live demo of prediction system
- Discussion of results and insights

---

## Submission Requirements

Submit a ZIP file containing:

1. **Code Files:**
   - `generate_data.py` or dataset source
   - `eda.py` and generated plots
   - `feature_engineering.py`
   - `train_models.py`
   - `app.py` and `templates/index.html`
   - `test_api.py`

2. **Model Files:**
   - `best_model.pkl`
   - `scaler.pkl`
   - `feature_columns.pkl`

3. **Documentation:**
   - Project report (PDF)
   - Presentation slides (PDF or PPT)
   - README with setup instructions

4. **Results:**
   - All generated plots (PNG files)
   - `model_comparison.csv`
   - API test results

---

## Evaluation Criteria

| Criterion | Points | Description |
|-----------|--------|-------------|
| Data Preparation | 15 | Clean data, comprehensive EDA |
| Feature Engineering | 15 | Creative and relevant features |
| Model Development | 25 | Multiple models, proper evaluation |
| API Implementation | 20 | Working, well-designed API |
| Documentation | 15 | Clear, comprehensive reporting |
| Presentation | 10 | Effective communication |
| **Total** | **100** | |

**Passing Score:** 70/100

---

## Bonus Challenges (+20 points)

1. **Advanced Features** (+5): Implement automated hyperparameter tuning
2. **Docker Deployment** (+5): Containerize the application
3. **Monitoring** (+5): Add prediction logging and performance tracking
4. **UI Enhancement** (+5): Create advanced web interface with visualizations

---

## Support & Resources

- Office hours: Wednesdays 2-4 PM
- Discussion forum: course-forum.ecofusion.academy
- Code examples: github.com/ecofusion-academy/ml-examples

**Good luck!**
