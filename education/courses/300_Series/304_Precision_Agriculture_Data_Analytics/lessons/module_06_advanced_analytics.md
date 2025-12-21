# Module 6: Advanced Analytics Methods

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Perform time series analysis and forecasting
2. Apply clustering techniques to segment data
3. Use principal component analysis (PCA) for dimensionality reduction
4. Implement anomaly detection algorithms
5. Conduct multi-variate optimization

---

## 1. Time Series Analysis

### Components of Time Series

```
Time Series = Trend + Seasonality + Cyclic + Irregular

┌────────────────────────────────────────────────────────┐
│  TREND: Long-term direction (up/down/flat)             │
│  ───────╱───────────                                   │
│        ╱                                               │
│  ─────╱                                                │
│                                                        │
│  SEASONALITY: Regular pattern (daily, weekly, annual)  │
│    ╱╲    ╱╲    ╱╲    ╱╲                                │
│   ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲                               │
│  ╱    ╲╱    ╲╱    ╲╱    ╲                              │
│                                                        │
│  CYCLIC: Non-regular fluctuations (business cycles)    │
│        ╱────╲                                          │
│   ────╱      ╲────╱────                                │
│                                                        │
│  IRREGULAR: Random noise                               │
│  ──•─•──•─────•─•───•──                                │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Decomposition and Forecasting

```python
import pandas as pd
from statsmodels.tsa.seasonal import seasonal_decompose
from statsmodels.tsa.holtwinters import ExponentialSmoothing

# Example: Daily temperature data
dates = pd.date_range('2025-01-01', periods=365, freq='D')
np.random.seed(42)
trend = np.linspace(15, 25, 365)
seasonal = 5 * np.sin(np.arange(365) * 2 * np.pi / 365)
noise = np.random.normal(0, 1, 365)
temp = trend + seasonal + noise

df = pd.DataFrame({'temperature': temp}, index=dates)

# Decompose time series
decomposition = seasonal_decompose(df['temperature'], model='additive', period=30)

# Plot components
decomposition.plot()
plt.tight_layout()
plt.show()

# Exponential Smoothing Forecast
model = ExponentialSmoothing(df['temperature'],
                              seasonal='add',
                              seasonal_periods=30)
fit = model.fit()

# Forecast next 30 days
forecast = fit.forecast(steps=30)

plt.figure(figsize=(12, 6))
plt.plot(df.index, df['temperature'], label='Historical')
plt.plot(forecast.index, forecast, label='Forecast', color='red')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.legend()
plt.title('Temperature Forecast')
plt.show()
```

### ARIMA Modeling

```python
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf

# Auto-correlation analysis
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 8))
plot_acf(df['temperature'], lags=50, ax=ax1)
plot_pacf(df['temperature'], lags=50, ax=ax2)
plt.tight_layout()
plt.show()

# Fit ARIMA model (p, d, q)
# p = AR order, d = differencing, q = MA order
model = ARIMA(df['temperature'], order=(5, 1, 2))
fit = model.fit()

print(fit.summary())

# Forecast
forecast = fit.forecast(steps=30)
```

---

## 2. Clustering and Segmentation

### K-Means Clustering

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler

# Example: Cluster growing zones by environmental conditions
data = pd.DataFrame({
    'avg_temp': [22, 23, 18, 19, 24, 25, 20, 21],
    'avg_humidity': [65, 68, 55, 58, 70, 72, 60, 62],
    'avg_vpd': [1.2, 1.1, 1.5, 1.4, 1.0, 0.9, 1.3, 1.2],
    'avg_light': [18, 20, 16, 17, 22, 24, 18, 19]
})

# Standardize features
scaler = StandardScaler()
data_scaled = scaler.fit_transform(data)

# Determine optimal k (elbow method)
inertias = []
K_range = range(1, 6)
for k in K_range:
    kmeans = KMeans(n_clusters=k, random_state=42)
    kmeans.fit(data_scaled)
    inertias.append(kmeans.inertia_)

plt.plot(K_range, inertias, 'bo-')
plt.xlabel('Number of Clusters (k)')
plt.ylabel('Inertia')
plt.title('Elbow Method')
plt.show()

# Apply K-Means (k=3)
kmeans = KMeans(n_clusters=3, random_state=42)
data['cluster'] = kmeans.fit_predict(data_scaled)

# Visualize clusters
plt.scatter(data['avg_temp'], data['avg_humidity'],
            c=data['cluster'], cmap='viridis', s=100)
plt.xlabel('Average Temperature (°C)')
plt.ylabel('Average Humidity (%)')
plt.title('Zone Clusters')
plt.colorbar(label='Cluster')
plt.show()

# Cluster centers (original scale)
centers = scaler.inverse_transform(kmeans.cluster_centers_)
print("Cluster Centers:")
print(pd.DataFrame(centers, columns=data.columns[:-1]))
```

### Hierarchical Clustering

```python
from scipy.cluster.hierarchy import dendrogram, linkage

# Create linkage matrix
linkage_matrix = linkage(data_scaled, method='ward')

# Plot dendrogram
plt.figure(figsize=(12, 6))
dendrogram(linkage_matrix, labels=data.index)
plt.xlabel('Zone')
plt.ylabel('Distance')
plt.title('Hierarchical Clustering Dendrogram')
plt.show()
```

---

## 3. Principal Component Analysis (PCA)

### Dimensionality Reduction

```python
from sklearn.decomposition import PCA

# Example: Many correlated environmental variables
multi_data = pd.DataFrame({
    'temp': np.random.normal(23, 2, 100),
    'humidity': np.random.normal(65, 5, 100),
    'vpd': np.random.normal(1.2, 0.3, 100),
    'co2': np.random.normal(800, 100, 100),
    'light_ppfd': np.random.normal(400, 50, 100),
    'dli': np.random.normal(18, 2, 100)
})

# Standardize
scaler = StandardScaler()
data_scaled = scaler.fit_transform(multi_data)

# Apply PCA
pca = PCA()
pca.fit(data_scaled)

# Explained variance
explained_var = pca.explained_variance_ratio_
cumsum_var = np.cumsum(explained_var)

plt.figure(figsize=(10, 5))
plt.bar(range(1, len(explained_var)+1), explained_var, alpha=0.6,
        label='Individual')
plt.plot(range(1, len(explained_var)+1), cumsum_var, 'ro-',
         label='Cumulative')
plt.xlabel('Principal Component')
plt.ylabel('Variance Explained')
plt.legend()
plt.title('PCA Scree Plot')
plt.axhline(y=0.95, color='k', linestyle='--', label='95% threshold')
plt.show()

print(f"First 2 PCs explain {cumsum_var[1]:.1%} of variance")

# Transform to 2 components
pca_2d = PCA(n_components=2)
transformed = pca_2d.fit_transform(data_scaled)

plt.scatter(transformed[:, 0], transformed[:, 1])
plt.xlabel('PC1')
plt.ylabel('PC2')
plt.title('Data in 2D Principal Component Space')
plt.show()

# Component loadings
loadings = pd.DataFrame(
    pca_2d.components_.T,
    columns=['PC1', 'PC2'],
    index=multi_data.columns
)
print("\nComponent Loadings:")
print(loadings)
```

---

## 4. Anomaly Detection

### Statistical Methods

```python
# Z-Score Method
def detect_anomalies_zscore(data, threshold=3):
    """Detect anomalies using z-score method."""
    mean = np.mean(data)
    std = np.std(data)
    z_scores = [(x - mean) / std for x in data]
    anomalies = [i for i, z in enumerate(z_scores) if abs(z) > threshold]
    return anomalies

# IQR Method
def detect_anomalies_iqr(data):
    """Detect anomalies using IQR method."""
    q1, q3 = np.percentile(data, [25, 75])
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    anomalies = [i for i, x in enumerate(data) if x < lower or x > upper]
    return anomalies

# Example: pH readings
ph_readings = [6.8, 6.9, 6.7, 4.2, 6.8, 6.9, 6.7, 6.8, 9.1, 6.9]

anomalies_z = detect_anomalies_zscore(ph_readings)
anomalies_iqr = detect_anomalies_iqr(ph_readings)

print(f"Z-score anomalies at indices: {anomalies_z}")
print(f"IQR anomalies at indices: {anomalies_iqr}")
```

### Isolation Forest

```python
from sklearn.ensemble import IsolationForest

# Multivariate anomaly detection
normal_data = np.random.normal([23, 65, 7.0], [2, 5, 0.2], (100, 3))
anomalies = np.array([[30, 45, 8.5], [15, 85, 5.5]])  # Outliers
all_data = np.vstack([normal_data, anomalies])

# Fit Isolation Forest
iso_forest = IsolationForest(contamination=0.1, random_state=42)
predictions = iso_forest.fit_predict(all_data)

# -1 = anomaly, 1 = normal
anomaly_indices = np.where(predictions == -1)[0]
print(f"Detected anomalies at indices: {anomaly_indices}")

# Visualize (2D projection)
plt.scatter(all_data[predictions == 1, 0], all_data[predictions == 1, 1],
            c='blue', label='Normal', alpha=0.6)
plt.scatter(all_data[predictions == -1, 0], all_data[predictions == -1, 1],
            c='red', label='Anomaly', s=100, marker='x')
plt.xlabel('Temperature')
plt.ylabel('Humidity')
plt.legend()
plt.title('Isolation Forest Anomaly Detection')
plt.show()
```

---

## 5. Multi-Variate Optimization

### Optimization Problem Formulation

```
Objective: Maximize Yield

Subject to:
  • 18 ≤ Temperature ≤ 28°C
  • 50 ≤ Humidity ≤ 80%
  • 400 ≤ CO₂ ≤ 1200 ppm
  • 15 ≤ DLI ≤ 25 mol/m²/day
  • 6.0 ≤ pH ≤ 7.0
  • Budget ≤ $X
```

### Scipy Optimization

```python
from scipy.optimize import minimize

# Response surface (yield as function of temp and humidity)
def yield_function(x):
    """
    Negative yield (we minimize negative = maximize positive)
    x[0] = temperature
    x[1] = humidity
    """
    temp = x[0]
    humidity = x[1]

    # Example: Quadratic response surface with optimum at (24, 65)
    yield_val = -(-(temp - 24)**2 - 0.05*(humidity - 65)**2 + 50)
    return yield_val

# Constraints
bounds = [(18, 28),  # Temperature range
          (50, 80)]  # Humidity range

# Initial guess
x0 = [22, 60]

# Optimize
result = minimize(yield_function, x0, bounds=bounds, method='L-BFGS-B')

print(f"Optimal temperature: {result.x[0]:.2f}°C")
print(f"Optimal humidity: {result.x[1]:.2f}%")
print(f"Maximum yield: {-result.fun:.2f}")

# Visualize response surface
temp_range = np.linspace(18, 28, 50)
hum_range = np.linspace(50, 80, 50)
T, H = np.meshgrid(temp_range, hum_range)
Y = np.zeros_like(T)

for i in range(len(temp_range)):
    for j in range(len(hum_range)):
        Y[j, i] = -yield_function([T[j, i], H[j, i]])

plt.contourf(T, H, Y, levels=20, cmap='viridis')
plt.colorbar(label='Yield')
plt.plot(result.x[0], result.x[1], 'r*', markersize=20, label='Optimum')
plt.xlabel('Temperature (°C)')
plt.ylabel('Humidity (%)')
plt.title('Yield Response Surface')
plt.legend()
plt.show()
```

### Multi-Objective Optimization (Pareto Front)

```python
from scipy.optimize import differential_evolution

def multi_objective(x):
    """
    Minimize: -yield, energy_cost
    x[0] = temperature setpoint
    x[1] = light intensity
    """
    temp = x[0]
    light = x[1]

    # Yield increases with temp and light
    yield_val = (temp - 15) * (light / 100) * 2

    # Energy cost increases with temp and light
    heating_cost = max(0, temp - 20) * 0.5
    lighting_cost = light * 0.1
    energy_cost = heating_cost + lighting_cost

    # Weighted sum (can adjust weights)
    return -yield_val + 0.5 * energy_cost

bounds = [(18, 28), (200, 800)]

result = differential_evolution(multi_objective, bounds)

print(f"Optimal temperature: {result.x[0]:.2f}°C")
print(f"Optimal light: {result.x[1]:.0f} PPFD")
```

---

## Key Applications Summary

| Method | Use Case | Example |
|--------|----------|---------|
| **Time Series** | Forecasting | Predict next week's yields |
| **Clustering** | Segmentation | Group similar growing zones |
| **PCA** | Data reduction | Simplify multi-sensor data |
| **Anomaly Detection** | Quality control | Detect sensor failures |
| **Optimization** | Setpoint tuning | Find ideal climate settings |

---

## Key Takeaways

1. **Time series methods capture temporal patterns** - Essential for forecasting and scheduling
2. **Clustering reveals hidden structure** - Group similar conditions or performance levels
3. **PCA reduces complexity** - Handle many correlated variables efficiently
4. **Anomaly detection catches problems early** - Automated quality control
5. **Optimization finds best settings** - Data-driven climate and nutrient control

---

## Practical Exercise

1. **Time series**: Analyze 90 days of temperature data, forecast next 7 days
2. **Clustering**: Segment your growing zones by performance
3. **PCA**: Reduce 10 environmental variables to 2-3 principal components
4. **Anomaly detection**: Build detector for pH sensor failures
5. **Optimization**: Find optimal temp/humidity for your crop

---

## Next Module Preview

**Module 7: Introduction to Machine Learning** covers:
- Supervised vs. unsupervised learning
- Training, validation, testing splits
- Model evaluation metrics
- Overfitting and regularization
- Feature engineering

---

*EcoFusion Academy - Course 304 - Module 6*
