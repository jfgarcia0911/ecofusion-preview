# Module 7: Introduction to Machine Learning

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Understand supervised vs. unsupervised learning
2. Split data into training, validation, and test sets
3. Evaluate model performance with appropriate metrics
4. Recognize and prevent overfitting
5. Apply feature engineering techniques

---

## 1. Machine Learning Overview

### Types of Machine Learning

```
┌──────────────────────────────────────────────────────────┐
│           MACHINE LEARNING TAXONOMY                      │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  SUPERVISED LEARNING (Labeled Data)                      │
│  ├─ Regression: Predict continuous values                │
│  │  • Yield prediction                                  │
│  │  • Growth rate forecasting                           │
│  │  • Energy consumption                                │
│  │                                                      │
│  └─ Classification: Predict categories                   │
│     • Disease detection (healthy/diseased)              │
│     • Quality grading (A/B/C)                           │
│     • Ripeness classification                           │
│                                                          │
│  UNSUPERVISED LEARNING (Unlabeled Data)                  │
│  ├─ Clustering: Group similar data                       │
│  │  • Customer segmentation                             │
│  │  • Growing zone grouping                             │
│  │                                                      │
│  └─ Dimensionality Reduction                             │
│     • PCA (covered in Module 6)                         │
│     • Feature compression                               │
│                                                          │
│  REINFORCEMENT LEARNING (Reward-Based)                   │
│  └─ Agent learns through trial and error                 │
│     • Climate control optimization                      │
│     • Resource allocation                               │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Data Splitting Strategy

### Train / Validation / Test Split

```
┌──────────────────────────────────────────────────────────┐
│              DATA SPLITTING                              │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  All Data (100%)                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░▒▒▒                             │  │
│  └────────────────────────────────────────────────────┘  │
│   │            │        │                                │
│   ↓            ↓        ↓                                │
│  Training    Validation Test                             │
│  (60-70%)    (15-20%)  (15-20%)                         │
│                                                          │
│  TRAINING SET                                            │
│  • Build model                                           │
│  • Learn patterns                                        │
│  • Fit parameters                                        │
│                                                          │
│  VALIDATION SET                                          │
│  • Tune hyperparameters                                  │
│  • Model selection                                       │
│  • Prevent overfitting                                   │
│                                                          │
│  TEST SET                                                │
│  • Final performance evaluation                          │
│  • Never used during training                            │
│  • Represents real-world performance                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

```python
from sklearn.model_selection import train_test_split

# Example: Predicting lettuce yield from environmental data
X = data[['temperature', 'humidity', 'co2', 'dli']]  # Features
y = data['yield_lbs']  # Target

# First split: separate test set (20%)
X_temp, X_test, y_temp, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Second split: separate validation from training (20% of remaining 80%)
X_train, X_val, y_train, y_val = train_test_split(
    X_temp, y_temp, test_size=0.25, random_state=42
)

print(f"Training set: {len(X_train)} samples ({len(X_train)/len(X)*100:.0f}%)")
print(f"Validation set: {len(X_val)} samples ({len(X_val)/len(X)*100:.0f}%)")
print(f"Test set: {len(X_test)} samples ({len(X_test)/len(X)*100:.0f}%)")
```

### Cross-Validation

```python
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestRegressor

# K-Fold Cross-Validation (k=5)
model = RandomForestRegressor(n_estimators=100, random_state=42)

scores = cross_val_score(model, X_train, y_train, cv=5,
                          scoring='neg_mean_squared_error')

rmse_scores = np.sqrt(-scores)

print(f"RMSE per fold: {rmse_scores}")
print(f"Mean RMSE: {rmse_scores.mean():.2f} ± {rmse_scores.std():.2f}")
```

---

## 3. Regression Models

### Linear Regression

```python
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score

# Train model
lr_model = LinearRegression()
lr_model.fit(X_train, y_train)

# Predict on validation set
y_pred = lr_model.predict(X_val)

# Evaluate
rmse = np.sqrt(mean_squared_error(y_val, y_pred))
r2 = r2_score(y_val, y_pred)

print(f"RMSE: {rmse:.2f} lbs")
print(f"R²: {r2:.3f}")

# Feature importance (coefficients)
coef_df = pd.DataFrame({
    'feature': X.columns,
    'coefficient': lr_model.coef_
}).sort_values('coefficient', ascending=False)

print("\nFeature Coefficients:")
print(coef_df)
```

### Random Forest Regression

```python
from sklearn.ensemble import RandomForestRegressor

# Train Random Forest
rf_model = RandomForestRegressor(n_estimators=100, max_depth=10,
                                  min_samples_split=5, random_state=42)
rf_model.fit(X_train, y_train)

# Predict
y_pred_rf = rf_model.predict(X_val)

# Evaluate
rmse_rf = np.sqrt(mean_squared_error(y_val, y_pred_rf))
r2_rf = r2_score(y_val, y_pred_rf)

print(f"Random Forest RMSE: {rmse_rf:.2f} lbs")
print(f"Random Forest R²: {r2_rf:.3f}")

# Feature importance
feature_importance = pd.DataFrame({
    'feature': X.columns,
    'importance': rf_model.feature_importances_
}).sort_values('importance', ascending=False)

print("\nFeature Importance:")
print(feature_importance)

# Visualize
plt.barh(feature_importance['feature'], feature_importance['importance'])
plt.xlabel('Importance')
plt.title('Feature Importance - Random Forest')
plt.show()
```

---

## 4. Classification Models

### Binary Classification Example

```python
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score
from sklearn.metrics import confusion_matrix, classification_report

# Example: Classify quality (Good/Bad based on yield threshold)
y_class = (y > y.median()).astype(int)  # 1=Good, 0=Bad

X_train_c, X_test_c, y_train_c, y_test_c = train_test_split(
    X, y_class, test_size=0.2, random_state=42
)

# Train Logistic Regression
log_model = LogisticRegression(random_state=42)
log_model.fit(X_train_c, y_train_c)

# Predict
y_pred_c = log_model.predict(X_test_c)

# Evaluate
print("Classification Metrics:")
print(f"Accuracy: {accuracy_score(y_test_c, y_pred_c):.3f}")
print(f"Precision: {precision_score(y_test_c, y_pred_c):.3f}")
print(f"Recall: {recall_score(y_test_c, y_pred_c):.3f}")
print(f"F1-Score: {f1_score(y_test_c, y_pred_c):.3f}")

# Confusion Matrix
cm = confusion_matrix(y_test_c, y_pred_c)
print("\nConfusion Matrix:")
print(cm)

# Detailed report
print("\nClassification Report:")
print(classification_report(y_test_c, y_pred_c, target_names=['Bad', 'Good']))
```

### Multi-Class Classification

```python
from sklearn.ensemble import RandomForestClassifier

# Example: Quality grades (A, B, C)
bins = [0, 40, 50, 100]
labels = ['C', 'B', 'A']
y_multiclass = pd.cut(y, bins=bins, labels=labels)

X_train_m, X_test_m, y_train_m, y_test_m = train_test_split(
    X, y_multiclass, test_size=0.2, random_state=42
)

# Train Random Forest Classifier
rf_classifier = RandomForestClassifier(n_estimators=100, random_state=42)
rf_classifier.fit(X_train_m, y_train_m)

# Predict
y_pred_m = rf_classifier.predict(X_test_m)

# Evaluate
print(f"Accuracy: {accuracy_score(y_test_m, y_pred_m):.3f}")
print("\nClassification Report:")
print(classification_report(y_test_m, y_pred_m))
```

---

## 5. Model Evaluation Metrics

### Regression Metrics

```
┌──────────────────────────────────────────────────────────┐
│           REGRESSION METRICS                             │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  MAE (Mean Absolute Error)                               │
│  MAE = Σ|yᵢ - ŷᵢ| / n                                   │
│  • Average absolute difference                           │
│  • Same units as target                                  │
│  • Less sensitive to outliers                            │
│                                                          │
│  RMSE (Root Mean Squared Error)                          │
│  RMSE = √[Σ(yᵢ - ŷᵢ)² / n]                              │
│  • Penalizes large errors more                           │
│  • Same units as target                                  │
│  • Most common metric                                    │
│                                                          │
│  R² (Coefficient of Determination)                       │
│  R² = 1 - (SS_res / SS_tot)                             │
│  • Proportion of variance explained                      │
│  • Range: 0 to 1 (higher is better)                      │
│  • Can be negative for very poor models                  │
│                                                          │
│  MAPE (Mean Absolute Percentage Error)                   │
│  MAPE = 100 × Σ|yᵢ - ŷᵢ| / |yᵢ| / n                     │
│  • Percentage error                                      │
│  • Easy to interpret                                     │
│  • Issues when actual values near zero                   │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Classification Metrics

```
┌──────────────────────────────────────────────────────────┐
│        CLASSIFICATION METRICS                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  Confusion Matrix:                                       │
│                 Predicted                                │
│               Neg    Pos                                 │
│  Actual  Neg   TN     FP                                 │
│          Pos   FN     TP                                 │
│                                                          │
│  Accuracy = (TP + TN) / Total                            │
│  • Overall correctness                                   │
│  • Can be misleading with imbalanced classes             │
│                                                          │
│  Precision = TP / (TP + FP)                              │
│  • Of predicted positives, how many are correct?         │
│  • Important when false positives are costly             │
│                                                          │
│  Recall = TP / (TP + FN)                                 │
│  • Of actual positives, how many did we catch?           │
│  • Important when false negatives are costly             │
│                                                          │
│  F1-Score = 2 × (Precision × Recall) / (Precision + Recall)│
│  • Harmonic mean of precision and recall                 │
│  • Balanced metric                                       │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 6. Overfitting and Underfitting

```
┌──────────────────────────────────────────────────────────┐
│        BIAS-VARIANCE TRADEOFF                            │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  UNDERFITTING (High Bias)                                │
│  • Model too simple                                      │
│  • Poor performance on training AND test data            │
│  • Solution: More complex model, more features           │
│                                                          │
│  GOOD FIT                                                │
│  • Model captures true patterns                          │
│  • Good performance on training AND test data            │
│  • Training error ≈ Test error                           │
│                                                          │
│  OVERFITTING (High Variance)                             │
│  • Model too complex                                     │
│  • Excellent on training, poor on test data              │
│  • Memorizes noise instead of patterns                   │
│  • Solution: Regularization, simpler model, more data    │
│                                                          │
│  Learning Curves:                                        │
│  Error                                                   │
│    ↑                                                     │
│    │    ─────── Test Error                               │
│    │   ╱                                                 │
│    │  ╱                                                  │
│    │ ╱_________ Training Error                           │
│    └──────────────────→ Training Set Size                │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Regularization

```python
from sklearn.linear_model import Ridge, Lasso

# Ridge Regression (L2 regularization)
ridge_model = Ridge(alpha=1.0)
ridge_model.fit(X_train, y_train)
y_pred_ridge = ridge_model.predict(X_val)
rmse_ridge = np.sqrt(mean_squared_error(y_val, y_pred_ridge))
print(f"Ridge RMSE: {rmse_ridge:.2f}")

# Lasso Regression (L1 regularization, can zero out features)
lasso_model = Lasso(alpha=0.1)
lasso_model.fit(X_train, y_train)
y_pred_lasso = lasso_model.predict(X_val)
rmse_lasso = np.sqrt(mean_squared_error(y_val, y_pred_lasso))
print(f"Lasso RMSE: {rmse_lasso:.2f}")

# Features selected by Lasso (non-zero coefficients)
selected_features = X.columns[lasso_model.coef_ != 0]
print(f"Lasso selected {len(selected_features)} features: {list(selected_features)}")
```

---

## 7. Feature Engineering

### Creating New Features

```python
# Interaction features
data['temp_x_humidity'] = data['temperature'] * data['humidity']
data['vpd'] = calculate_vpd(data['temperature'], data['humidity'])

# Polynomial features
from sklearn.preprocessing import PolynomialFeatures

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)
feature_names = poly.get_feature_names_out(X.columns)

print(f"Original features: {X.shape[1]}")
print(f"Polynomial features: {X_poly.shape[1]}")

# Time-based features
data['day_of_week'] = pd.to_datetime(data['date']).dt.dayofweek
data['month'] = pd.to_datetime(data['date']).dt.month
data['is_weekend'] = (data['day_of_week'] >= 5).astype(int)

# Lag features (previous values)
data['temp_lag_1'] = data['temperature'].shift(1)
data['temp_lag_24'] = data['temperature'].shift(24)  # 24 hours ago

# Rolling statistics
data['temp_rolling_mean_24h'] = data['temperature'].rolling(window=24).mean()
data['temp_rolling_std_24h'] = data['temperature'].rolling(window=24).std()
```

### Feature Scaling

```python
from sklearn.preprocessing import StandardScaler, MinMaxScaler

# Standardization (mean=0, std=1)
scaler_standard = StandardScaler()
X_scaled = scaler_standard.fit_transform(X_train)

# Normalization (range 0-1)
scaler_minmax = MinMaxScaler()
X_normalized = scaler_minmax.fit_transform(X_train)

# Apply same transformation to validation/test
X_val_scaled = scaler_standard.transform(X_val)
X_test_scaled = scaler_standard.transform(X_test)
```

---

## Key Takeaways

1. **Choose appropriate ML type** - Regression for continuous, classification for categories
2. **Always split your data** - Train/validate/test to evaluate properly
3. **Select metrics carefully** - RMSE for regression, F1-score for imbalanced classification
4. **Watch for overfitting** - Validation performance is what matters
5. **Engineer features** - Domain knowledge creates powerful predictors
6. **Scale features** - Many algorithms require normalized inputs

---

## Practical Exercise

1. **Build regression model** to predict yield from environmental data
2. **Create classification model** for quality grading
3. **Compare 3 algorithms** (Linear, Random Forest, Gradient Boosting)
4. **Engineer 5 new features** from existing data
5. **Tune hyperparameters** using validation set
6. **Evaluate on test set** and interpret results

---

## Next Module Preview

**Module 8: Predictive Modeling** covers:
- Gradient boosting (XGBoost, LightGBM)
- Neural networks basics
- Hyperparameter tuning (Grid Search, Random Search)
- Model ensembling
- Production deployment considerations

---

*EcoFusion Academy - Course 304 - Module 7*
