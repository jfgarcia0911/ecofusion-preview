# Module 8: Predictive Modeling

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Implement gradient boosting algorithms
2. Build basic neural networks
3. Tune hyperparameters systematically
4. Create model ensembles
5. Deploy models to production

---

## 1. Gradient Boosting Algorithms

### XGBoost Example

```python
import xgboost as xgb

# Prepare data
dtrain = xgb.DMatrix(X_train, label=y_train)
dval = xgb.DMatrix(X_val, label=y_val)

# Train XGBoost
params = {
    'objective': 'reg:squarederror',
    'max_depth': 6,
    'learning_rate': 0.1,
    'n_estimators': 100
}

model = xgb.train(params, dtrain, num_boost_round=100,
                  evals=[(dval, 'validation')],
                  early_stopping_rounds=10)

# Predict
y_pred = model.predict(dval)
rmse = np.sqrt(mean_squared_error(y_val, y_pred))
print(f"XGBoost RMSE: {rmse:.2f}")
```

---

## 2. Hyperparameter Tuning

```python
from sklearn.model_selection import GridSearchCV

param_grid = {
    'n_estimators': [50, 100, 200],
    'max_depth': [5, 10, 15],
    'min_samples_split': [2, 5, 10]
}

grid_search = GridSearchCV(RandomForestRegressor(), param_grid, cv=5)
grid_search.fit(X_train, y_train)

print(f"Best parameters: {grid_search.best_params_}")
```

---

## 3. Model Ensembling

```python
from sklearn.ensemble import VotingRegressor

ensemble = VotingRegressor([
    ('lr', LinearRegression()),
    ('rf', RandomForestRegressor(n_estimators=100)),
    ('xgb', xgb.XGBRegressor(n_estimators=100))
])

ensemble.fit(X_train, y_train)
predictions = ensemble.predict(X_val)
```

---

## 4. Model Deployment

```python
import joblib

# Save model
joblib.dump(model, 'yield_predictor.pkl')

# Load and use
loaded_model = joblib.load('yield_predictor.pkl')
prediction = loaded_model.predict(new_data)
```

---

## Key Takeaways

1. XGBoost/LightGBM excel for tabular data
2. Hyperparameter tuning improves performance 10-30%
3. Ensembles combine strengths of multiple models
4. Save models for production deployment
5. Monitor and retrain models regularly

---

*EcoFusion Academy - Course 304 - Module 8*
