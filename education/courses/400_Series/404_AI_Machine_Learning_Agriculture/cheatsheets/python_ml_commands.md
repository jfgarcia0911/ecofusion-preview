# Python ML Commands Cheatsheet

## Essential Libraries Import

```python
# Core ML Libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Scikit-learn
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler, MinMaxScaler
from sklearn.metrics import accuracy_score, mean_squared_error, r2_score

# Deep Learning
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers, models

# Time Series
from statsmodels.tsa.arima.model import ARIMA
from prophet import Prophet

# XGBoost
import xgboost as xgb
from xgboost import XGBRegressor, XGBClassifier

# Computer Vision
import cv2
from PIL import Image
```

---

## Data Loading & Exploration

```python
# Load CSV data
df = pd.read_csv('agricultural_data.csv')

# Basic exploration
df.head()                    # First 5 rows
df.tail()                    # Last 5 rows
df.info()                    # Data types and missing values
df.describe()                # Statistical summary
df.shape                     # (rows, columns)
df.columns                   # Column names
df.dtypes                    # Data types

# Check missing values
df.isnull().sum()

# Check unique values
df['crop_type'].unique()
df['crop_type'].value_counts()

# Filter data
filtered = df[df['temperature'] > 25]
filtered = df[(df['temp'] > 20) & (df['humidity'] < 70)]

# Group and aggregate
grouped = df.groupby('zone')['yield'].mean()
pivot = df.pivot_table(values='yield', index='date', columns='variety')
```

---

## Data Preprocessing

```python
# Handle missing values
df.fillna(0)                             # Fill with 0
df.fillna(df.mean())                     # Fill with mean
df.fillna(method='ffill')                # Forward fill
df.dropna()                              # Drop missing

# Encoding categorical variables
from sklearn.preprocessing import LabelEncoder, OneHotEncoder

# Label encoding
le = LabelEncoder()
df['crop_encoded'] = le.fit_transform(df['crop'])

# One-hot encoding
df_encoded = pd.get_dummies(df, columns=['crop_type'])

# Feature scaling
from sklearn.preprocessing import StandardScaler, MinMaxScaler

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# Or MinMax (0-1 range)
scaler = MinMaxScaler()
X_scaled = scaler.fit_transform(X)

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Time-series split (preserve order)
train_size = int(len(df) * 0.8)
train, test = df[:train_size], df[train_size:]
```

---

## Model Training - Scikit-learn

```python
# Linear Regression
from sklearn.linear_model import LinearRegression
model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Random Forest
from sklearn.ensemble import RandomForestRegressor
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# XGBoost
from xgboost import XGBRegressor
model = XGBRegressor(n_estimators=100, learning_rate=0.1)
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Support Vector Machine
from sklearn.svm import SVR
model = SVR(kernel='rbf')
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Save model
import joblib
joblib.dump(model, 'model.pkl')

# Load model
model = joblib.load('model.pkl')
```

---

## Model Training - TensorFlow/Keras

```python
# Build Sequential model
model = keras.Sequential([
    layers.Dense(64, activation='relu', input_shape=(n_features,)),
    layers.Dropout(0.2),
    layers.Dense(32, activation='relu'),
    layers.Dense(1)  # Regression output
])

# Compile
model.compile(
    optimizer='adam',
    loss='mse',
    metrics=['mae']
)

# Train
history = model.fit(
    X_train, y_train,
    validation_split=0.2,
    epochs=50,
    batch_size=32,
    verbose=1
)

# Predict
predictions = model.predict(X_test)

# Save model
model.save('my_model.h5')

# Load model
model = keras.models.load_model('my_model.h5')

# Callbacks
from tensorflow.keras.callbacks import EarlyStopping, ModelCheckpoint

callbacks = [
    EarlyStopping(patience=10, restore_best_weights=True),
    ModelCheckpoint('best_model.h5', save_best_only=True)
]

history = model.fit(X_train, y_train, callbacks=callbacks, epochs=100)
```

---

## CNN for Images

```python
# Build CNN
model = keras.Sequential([
    layers.Conv2D(32, (3,3), activation='relu', input_shape=(224,224,3)),
    layers.MaxPooling2D((2,2)),
    layers.Conv2D(64, (3,3), activation='relu'),
    layers.MaxPooling2D((2,2)),
    layers.Conv2D(128, (3,3), activation='relu'),
    layers.MaxPooling2D((2,2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation='softmax')
])

# Data augmentation
from tensorflow.keras.preprocessing.image import ImageDataGenerator

datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=20,
    width_shift_range=0.2,
    height_shift_range=0.2,
    horizontal_flip=True
)

train_generator = datagen.flow_from_directory(
    'data/train',
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical'
)

# Train on generator
model.fit(train_generator, epochs=50)

# Transfer learning
base_model = keras.applications.ResNet50(
    weights='imagenet',
    include_top=False,
    input_shape=(224,224,3)
)
base_model.trainable = False

model = keras.Sequential([
    base_model,
    layers.GlobalAveragePooling2D(),
    layers.Dense(256, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(num_classes, activation='softmax')
])
```

---

## LSTM for Time Series

```python
# Prepare sequences
def create_sequences(data, lookback=24):
    X, y = [], []
    for i in range(len(data) - lookback):
        X.append(data[i:i+lookback])
        y.append(data[i+lookback])
    return np.array(X), np.array(y)

X, y = create_sequences(scaled_data, lookback=24)
X = X.reshape(X.shape[0], X.shape[1], 1)  # (samples, timesteps, features)

# Build LSTM
model = keras.Sequential([
    layers.LSTM(50, return_sequences=True, input_shape=(24, 1)),
    layers.Dropout(0.2),
    layers.LSTM(50),
    layers.Dropout(0.2),
    layers.Dense(1)
])

model.compile(optimizer='adam', loss='mse')
model.fit(X, y, epochs=50, batch_size=32)

# Predict
predictions = model.predict(X_test)
```

---

## Model Evaluation

```python
# Regression metrics
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

mae = mean_absolute_error(y_test, predictions)
mse = mean_squared_error(y_test, predictions)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, predictions)

print(f"MAE: {mae:.2f}")
print(f"RMSE: {rmse:.2f}")
print(f"R²: {r2:.3f}")

# Classification metrics
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report

acc = accuracy_score(y_test, predictions)
precision = precision_score(y_test, predictions, average='weighted')
recall = recall_score(y_test, predictions, average='weighted')
f1 = f1_score(y_test, predictions, average='weighted')

cm = confusion_matrix(y_test, predictions)
print(classification_report(y_test, predictions))

# Cross-validation
from sklearn.model_selection import cross_val_score

scores = cross_val_score(model, X, y, cv=5, scoring='r2')
print(f"CV scores: {scores}")
print(f"Mean: {scores.mean():.3f} (+/- {scores.std():.3f})")
```

---

## Hyperparameter Tuning

```python
# Grid Search
from sklearn.model_selection import GridSearchCV

param_grid = {
    'n_estimators': [100, 200, 300],
    'max_depth': [10, 15, 20],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(
    RandomForestRegressor(),
    param_grid,
    cv=5,
    scoring='r2',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
best_model = grid_search.best_estimator_
best_params = grid_search.best_params_

# Random Search
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint

param_dist = {
    'n_estimators': randint(100, 500),
    'max_depth': randint(5, 30)
}

random_search = RandomizedSearchCV(
    RandomForestRegressor(),
    param_dist,
    n_iter=20,
    cv=5,
    random_state=42
)

random_search.fit(X_train, y_train)
```

---

## Feature Engineering

```python
# Create polynomial features
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(X)

# Create interaction features
df['temp_humidity'] = df['temperature'] * df['humidity']

# Create lag features for time series
df['lag_1'] = df['value'].shift(1)
df['lag_24'] = df['value'].shift(24)

# Rolling statistics
df['rolling_mean_7d'] = df['value'].rolling(window=7).mean()
df['rolling_std_7d'] = df['value'].rolling(window=7).std()

# Date/time features
df['hour'] = pd.to_datetime(df['timestamp']).dt.hour
df['day_of_week'] = pd.to_datetime(df['timestamp']).dt.dayofweek
df['month'] = pd.to_datetime(df['timestamp']).dt.month

# Binning
df['temp_category'] = pd.cut(df['temperature'],
                              bins=[0, 15, 25, 35],
                              labels=['cold', 'moderate', 'hot'])
```

---

## Visualization

```python
# Line plot
plt.figure(figsize=(12, 6))
plt.plot(df['date'], df['temperature'])
plt.xlabel('Date')
plt.ylabel('Temperature')
plt.title('Temperature Over Time')
plt.show()

# Scatter plot
plt.scatter(df['temperature'], df['yield'])
plt.xlabel('Temperature')
plt.ylabel('Yield')
plt.show()

# Histogram
plt.hist(df['yield'], bins=30)
plt.xlabel('Yield')
plt.ylabel('Frequency')
plt.show()

# Box plot
df.boxplot(column='yield', by='variety')
plt.show()

# Heatmap (correlation)
corr = df.corr()
sns.heatmap(corr, annot=True, cmap='coolwarm')
plt.show()

# Training history
plt.plot(history.history['loss'], label='train')
plt.plot(history.history['val_loss'], label='validation')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.show()

# Confusion matrix
import seaborn as sns
sns.heatmap(cm, annot=True, fmt='d', cmap='Blues')
plt.xlabel('Predicted')
plt.ylabel('Actual')
plt.show()
```

---

## Computer Vision with OpenCV

```python
import cv2

# Read image
img = cv2.imread('plant.jpg')

# Resize
resized = cv2.resize(img, (224, 224))

# Convert color
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

# Threshold
_, binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Blur
blurred = cv2.GaussianBlur(img, (5, 5), 0)

# Edge detection
edges = cv2.Canny(img, 100, 200)

# Find contours
contours, _ = cv2.findContours(binary, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Draw contours
cv2.drawContours(img, contours, -1, (0, 255, 0), 2)

# Save image
cv2.imwrite('output.jpg', img)

# Display (in Jupyter)
from IPython.display import Image, display
display(Image('output.jpg'))
```

---

## Time Series Forecasting

```python
# ARIMA
from statsmodels.tsa.arima.model import ARIMA

model = ARIMA(train_data, order=(1, 1, 1))
fitted = model.fit()
forecast = fitted.forecast(steps=24)

# Prophet
from prophet import Prophet

df_prophet = pd.DataFrame({
    'ds': dates,
    'y': values
})

model = Prophet(daily_seasonality=True)
model.fit(df_prophet)

future = model.make_future_dataframe(periods=24, freq='H')
forecast = model.predict(future)

# Plot
model.plot(forecast)
model.plot_components(forecast)
```

---

## Common Workflows

```python
# Complete ML Pipeline
def ml_pipeline(X, y):
    # 1. Split data
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

    # 2. Scale features
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    # 3. Train model
    model = RandomForestRegressor(n_estimators=100)
    model.fit(X_train_scaled, y_train)

    # 4. Predict
    predictions = model.predict(X_test_scaled)

    # 5. Evaluate
    mae = mean_absolute_error(y_test, predictions)
    r2 = r2_score(y_test, predictions)

    return model, scaler, mae, r2

# Use pipeline
model, scaler, mae, r2 = ml_pipeline(X, y)

# Make new prediction
new_data_scaled = scaler.transform(new_data)
prediction = model.predict(new_data_scaled)
```

---

## Model Deployment

```python
# Save model and scaler
import joblib

joblib.dump(model, 'model.pkl')
joblib.dump(scaler, 'scaler.pkl')

# Load and predict
model = joblib.load('model.pkl')
scaler = joblib.load('scaler.pkl')

new_data_scaled = scaler.transform(new_data)
prediction = model.predict(new_data_scaled)

# Flask API
from flask import Flask, request, jsonify

app = Flask(__name__)
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    prediction = model.predict([data['features']])
    return jsonify({'prediction': float(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
```

---

## Troubleshooting

```python
# Check data types
print(df.dtypes)

# Check for NaN
print(df.isnull().sum())

# Check array shapes
print(f"X shape: {X.shape}")
print(f"y shape: {y.shape}")

# Check value ranges
print(f"Min: {X.min()}, Max: {X.max()}")

# Enable debugging
import logging
logging.basicConfig(level=logging.DEBUG)

# TensorFlow GPU check
print("GPU Available:", tf.config.list_physical_devices('GPU'))

# Memory usage
print(df.memory_usage(deep=True))
```

---

*Python ML Commands Cheatsheet - Course 404*
