# ML Algorithms Quick Reference for Agriculture

## Algorithm Selection Guide

```
┌──────────────────────────────────────────────────────────────┐
│            When to Use Which Algorithm                        │
└──────────────────────────────────────────────────────────────┘

PROBLEM TYPE          | RECOMMENDED ALGORITHMS
======================|=========================================
Yield Prediction      | Random Forest, XGBoost, LSTM
Disease Classification| CNN (ResNet, EfficientNet), Transfer Learning
Time-Series Forecast  | ARIMA, SARIMA, Prophet, LSTM
Climate Control       | DQN, PPO, A3C (Reinforcement Learning)
Anomaly Detection     | Isolation Forest, Autoencoder, One-Class SVM
Plant Segmentation    | U-Net, Mask R-CNN, DeepLab
Object Detection      | YOLO, Faster R-CNN, SSD
Clustering            | K-Means, DBSCAN, Hierarchical
Resource Optimization | Linear Programming, Genetic Algorithms
```

---

## Supervised Learning Algorithms

### Linear Regression
```python
from sklearn.linear_model import LinearRegression

# Use when:
# - Linear relationship between features and target
# - Need interpretable model
# - Continuous output prediction

model = LinearRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Pros: Fast, interpretable, low complexity
# Cons: Assumes linearity, sensitive to outliers
# Agricultural use: Simple yield prediction, trend analysis
```

### Logistic Regression
```python
from sklearn.linear_model import LogisticRegression

# Use when:
# - Binary classification (disease/healthy)
# - Need probability estimates
# - Linear decision boundary acceptable

model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
probabilities = model.predict_proba(X_test)

# Pros: Fast, outputs probabilities, interpretable
# Cons: Linear boundary, not for complex patterns
# Agricultural use: Binary disease detection, quality grading
```

### Random Forest
```python
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier

# Use when:
# - Non-linear relationships
# - Need feature importance
# - Robust to outliers

model = RandomForestRegressor(
    n_estimators=200,
    max_depth=15,
    min_samples_split=5,
    random_state=42
)
model.fit(X_train, y_train)

# Get feature importance
importance = model.feature_importances_

# Pros: Robust, handles non-linearity, feature importance
# Cons: Can overfit, less interpretable, slower
# Agricultural use: Yield prediction, disease classification
```

### XGBoost
```python
from xgboost import XGBRegressor, XGBClassifier

# Use when:
# - Need high accuracy
# - Have structured/tabular data
# - Can tune hyperparameters

model = XGBRegressor(
    n_estimators=200,
    learning_rate=0.05,
    max_depth=7,
    subsample=0.8,
    colsample_bytree=0.8
)
model.fit(X_train, y_train)

# Pros: High accuracy, fast, handles missing values
# Cons: Requires tuning, can overfit
# Agricultural use: Yield prediction, quality grading
```

### Support Vector Machines (SVM)
```python
from sklearn.svm import SVR, SVC

# Use when:
# - Small to medium datasets
# - Clear margin of separation
# - High-dimensional data

model = SVC(kernel='rbf', C=1.0, gamma='scale')
model.fit(X_train, y_train)

# Pros: Effective in high dimensions, memory efficient
# Cons: Slow on large datasets, sensitive to parameters
# Agricultural use: Disease classification, quality grading
```

---

## Deep Learning Architectures

### Convolutional Neural Networks (CNN)
```python
from tensorflow.keras import layers, models

# Use when:
# - Image data
# - Spatial patterns important
# - Need feature extraction

model = models.Sequential([
    layers.Conv2D(32, (3,3), activation='relu', input_shape=(224,224,3)),
    layers.MaxPooling2D((2,2)),
    layers.Conv2D(64, (3,3), activation='relu'),
    layers.MaxPooling2D((2,2)),
    layers.Flatten(),
    layers.Dense(128, activation='relu'),
    layers.Dense(num_classes, activation='softmax')
])

# Pros: Excellent for images, learns features automatically
# Cons: Needs large datasets, computationally intensive
# Agricultural use: Disease detection, plant classification
```

### LSTM (Long Short-Term Memory)
```python
from tensorflow.keras import layers, models

# Use when:
# - Sequential/time-series data
# - Long-term dependencies
# - Variable-length sequences

model = models.Sequential([
    layers.LSTM(128, return_sequences=True, input_shape=(timesteps, features)),
    layers.Dropout(0.2),
    layers.LSTM(64),
    layers.Dense(32, activation='relu'),
    layers.Dense(output_dim)
])

# Pros: Handles long sequences, captures temporal patterns
# Cons: Slow to train, needs substantial data
# Agricultural use: Growth prediction, environmental forecasting
```

### Autoencoders
```python
from tensorflow.keras import layers, models

# Use when:
# - Anomaly detection
# - Dimensionality reduction
# - Feature learning

# Encoder
encoder = models.Sequential([
    layers.Dense(128, activation='relu', input_shape=(input_dim,)),
    layers.Dense(64, activation='relu'),
    layers.Dense(32, activation='relu')
])

# Decoder
decoder = models.Sequential([
    layers.Dense(64, activation='relu', input_shape=(32,)),
    layers.Dense(128, activation='relu'),
    layers.Dense(input_dim, activation='sigmoid')
])

autoencoder = models.Sequential([encoder, decoder])

# Pros: Unsupervised, finds compressed representations
# Cons: Needs careful tuning, interpretation can be difficult
# Agricultural use: Anomaly detection, sensor failure detection
```

---

## Time-Series Algorithms

### ARIMA
```python
from statsmodels.tsa.arima.model import ARIMA

# Use when:
# - Stationary time-series
# - Single variable forecasting
# - Linear patterns

model = ARIMA(data, order=(p, d, q))
fitted = model.fit()
forecast = fitted.forecast(steps=24)

# Parameters:
# p = autoregressive order
# d = differencing order
# q = moving average order

# Pros: Well-established, interpretable
# Cons: Assumes stationarity, linear relationships
# Agricultural use: Temperature forecasting, demand prediction
```

### Prophet
```python
from prophet import Prophet

# Use when:
# - Strong seasonality
# - Missing data/outliers
# - Easy to use needed

model = Prophet(
    daily_seasonality=True,
    weekly_seasonality=True,
    yearly_seasonality=False
)
model.fit(df)
future = model.make_future_dataframe(periods=48, freq='H')
forecast = model.predict(future)

# Pros: Handles seasonality well, robust to missing data
# Cons: Less flexible than LSTM, additive model
# Agricultural use: Environmental forecasting, demand prediction
```

---

## Reinforcement Learning

### Q-Learning
```python
import numpy as np

# Use when:
# - Discrete state/action spaces
# - Model-free learning
# - Simple environments

Q = np.zeros((state_space, action_space))

for episode in range(num_episodes):
    state = env.reset()
    for step in range(max_steps):
        # Epsilon-greedy action selection
        action = select_action(state, Q, epsilon)
        next_state, reward = env.step(action)

        # Q-learning update
        Q[state, action] += alpha * (
            reward + gamma * np.max(Q[next_state]) - Q[state, action]
        )
        state = next_state

# Pros: Simple, no model needed
# Cons: Doesn't scale to large state spaces
# Agricultural use: Simple irrigation control, discrete decisions
```

### Deep Q-Network (DQN)
```python
from tensorflow.keras import layers, models

# Use when:
# - Large/continuous state spaces
# - Complex decision making
# - Need function approximation

def build_dqn(state_size, action_size):
    model = models.Sequential([
        layers.Dense(256, activation='relu', input_shape=(state_size,)),
        layers.Dense(256, activation='relu'),
        layers.Dense(action_size, activation='linear')
    ])
    return model

# Training with experience replay
for episode in range(num_episodes):
    # Collect experience
    # Store in replay buffer
    # Sample mini-batch
    # Train network

# Pros: Handles complex state spaces, powerful
# Cons: Sample inefficient, unstable without tricks
# Agricultural use: Climate control, resource allocation
```

---

## Clustering Algorithms

### K-Means
```python
from sklearn.cluster import KMeans

# Use when:
# - Know number of clusters
# - Spherical clusters
# - Fast clustering needed

kmeans = KMeans(n_clusters=5, random_state=42)
labels = kmeans.fit_predict(X)
centers = kmeans.cluster_centers_

# Pros: Fast, simple, scalable
# Cons: Need to specify k, sensitive to initialization
# Agricultural use: Plant grouping, zone classification
```

### DBSCAN
```python
from sklearn.cluster import DBSCAN

# Use when:
# - Unknown number of clusters
# - Arbitrary cluster shapes
# - Noise/outliers present

dbscan = DBSCAN(eps=0.5, min_samples=5)
labels = dbscan.fit_predict(X)

# Pros: Finds arbitrary shapes, handles outliers
# Cons: Sensitive to parameters, struggles with varying density
# Agricultural use: Spatial analysis, pest hotspot detection
```

---

## Model Evaluation Metrics

### Regression Metrics
```python
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import numpy as np

# Mean Absolute Error (MAE)
mae = mean_absolute_error(y_true, y_pred)
# Interpretation: Average absolute difference

# Root Mean Squared Error (RMSE)
rmse = np.sqrt(mean_squared_error(y_true, y_pred))
# Interpretation: Penalizes large errors more than MAE

# R² Score
r2 = r2_score(y_true, y_pred)
# Interpretation: Proportion of variance explained (0-1)

# Mean Absolute Percentage Error (MAPE)
mape = np.mean(np.abs((y_true - y_pred) / y_true)) * 100
# Interpretation: Percentage error, scale-independent
```

### Classification Metrics
```python
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report

# Accuracy
acc = accuracy_score(y_true, y_pred)
# When to use: Balanced classes

# Precision
prec = precision_score(y_true, y_pred, average='weighted')
# When to use: Cost of false positives is high

# Recall
rec = recall_score(y_true, y_pred, average='weighted')
# When to use: Cost of false negatives is high (disease detection)

# F1-Score
f1 = f1_score(y_true, y_pred, average='weighted')
# When to use: Balance between precision and recall

# Confusion Matrix
cm = confusion_matrix(y_true, y_pred)
# Shows: True/False Positives/Negatives
```

---

## Hyperparameter Tuning

### Grid Search
```python
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
    scoring='neg_mean_squared_error',
    n_jobs=-1
)

grid_search.fit(X_train, y_train)
best_params = grid_search.best_params_

# Pros: Exhaustive search, finds global optimum in grid
# Cons: Computationally expensive, exponential with parameters
```

### Random Search
```python
from sklearn.model_selection import RandomizedSearchCV
from scipy.stats import randint, uniform

param_distributions = {
    'n_estimators': randint(100, 500),
    'max_depth': randint(5, 30),
    'learning_rate': uniform(0.01, 0.3)
}

random_search = RandomizedSearchCV(
    XGBRegressor(),
    param_distributions,
    n_iter=50,
    cv=5,
    random_state=42,
    n_jobs=-1
)

random_search.fit(X_train, y_train)

# Pros: More efficient than grid search, good for many parameters
# Cons: May miss optimal combination
```

---

## Quick Decision Tree

```
START
  │
  ├─ Labeled data?
  │   ├─ YES → Supervised Learning
  │   │         ├─ Continuous output? → Regression
  │   │         │    ├─ Linear? → Linear Regression
  │   │         │    └─ Non-linear? → Random Forest, XGBoost
  │   │         │
  │   │         └─ Categorical output? → Classification
  │   │              ├─ Images? → CNN
  │   │              └─ Tabular? → Random Forest, XGBoost, SVM
  │   │
  │   └─ NO → Unsupervised Learning
  │            ├─ Find groups? → K-Means, DBSCAN
  │            ├─ Reduce dimensions? → PCA, Autoencoder
  │            └─ Find anomalies? → Isolation Forest, Autoencoder
  │
  ├─ Sequential/Time-series?
  │   └─ YES → ARIMA, Prophet, LSTM
  │
  └─ Interactive environment?
      └─ YES → Reinforcement Learning (Q-Learning, DQN, PPO)
```

---

## Common Pitfalls & Solutions

| Problem | Solution |
|---------|----------|
| Overfitting | Use cross-validation, regularization, more data, simpler model |
| Underfitting | Use more complex model, more features, less regularization |
| Class imbalance | Use weighted loss, SMOTE, stratified sampling |
| Slow training | Reduce model size, use GPU, batch processing, feature selection |
| Poor generalization | More diverse data, data augmentation, ensemble methods |
| Unstable RL | Experience replay, target networks, reward shaping |

---

*Quick Reference for Course 404: AI & ML in Agriculture*
