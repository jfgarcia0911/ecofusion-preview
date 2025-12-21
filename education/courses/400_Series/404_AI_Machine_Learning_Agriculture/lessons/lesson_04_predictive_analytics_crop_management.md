# Lesson 4: Predictive Analytics for Crop Management

## Learning Objectives

- Master time-series forecasting methods for agriculture
- Develop growth stage prediction models
- Build harvest timing optimization systems
- Create nutrient demand forecasting models
- Implement environmental condition prediction

---

## 1. Time-Series Forecasting Fundamentals

### Agricultural Time-Series Characteristics

```
Time-Series Patterns in CEA Data
=================================

TREND: Long-term increase/decrease
Example: Plant height over growing season
    │                                    ╱
  H │                              ╱╱╱╱╱
  e │                      ╱╱╱╱╱╱
  i │             ╱╱╱╱╱╱╱
  g │    ╱╱╱╱╱╱╱
  h │╱╱╱
  t └──────────────────────────────────► Time

SEASONALITY: Regular patterns
Example: Temperature daily cycle
    │     ╱╲       ╱╲       ╱╲       ╱╲
  T │    ╱  ╲     ╱  ╲     ╱  ╲     ╱  ╲
  e │   ╱    ╲   ╱    ╲   ╱    ╲   ╱    ╲
  m │  ╱      ╲ ╱      ╲ ╱      ╲ ╱      ╲
  p │ ╱        ╲        ╲        ╲
    └─────────────────────────────────────► Time
      Day 1    Day 2    Day 3    Day 4

CYCLICAL: Irregular patterns
Example: Market demand fluctuations

NOISE: Random variations
Example: Sensor measurement errors
```

### Classical Forecasting Methods

```python
"""
Time-series forecasting for agricultural data
Implementing ARIMA, SARIMA, and Prophet
"""

import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
from statsmodels.tsa.statespace.sarimax import SARIMAX
from prophet import Prophet
import matplotlib.pyplot as plt
from sklearn.metrics import mean_absolute_error, mean_squared_error

class AgriculturalForecaster:
    """Time-series forecasting for CEA"""

    def __init__(self, data, date_column, value_column):
        self.df = data.copy()
        self.df[date_column] = pd.to_datetime(self.df[date_column])
        self.df = self.df.set_index(date_column)
        self.value_column = value_column
        self.models = {}

    def train_arima(self, order=(1, 1, 1)):
        """Train ARIMA model"""
        model = ARIMA(
            self.df[self.value_column],
            order=order
        )
        fitted = model.fit()
        self.models['arima'] = fitted
        return fitted

    def train_sarima(self, order=(1, 1, 1), seasonal_order=(1, 1, 1, 24)):
        """Train SARIMA model with seasonality"""
        model = SARIMAX(
            self.df[self.value_column],
            order=order,
            seasonal_order=seasonal_order
        )
        fitted = model.fit(disp=False)
        self.models['sarima'] = fitted
        return fitted

    def train_prophet(self):
        """Train Facebook Prophet model"""
        # Prepare data for Prophet
        prophet_df = self.df.reset_index()
        prophet_df.columns = ['ds', 'y']

        model = Prophet(
            daily_seasonality=True,
            weekly_seasonality=True,
            yearly_seasonality=False,
            changepoint_prior_scale=0.05
        )
        model.fit(prophet_df)
        self.models['prophet'] = model
        return model

    def forecast(self, model_name, periods=24):
        """Generate forecast"""
        model = self.models.get(model_name)

        if model_name in ['arima', 'sarima']:
            forecast = model.forecast(steps=periods)
            conf_int = model.get_forecast(steps=periods).conf_int()
            return forecast, conf_int

        elif model_name == 'prophet':
            future = model.make_future_dataframe(periods=periods, freq='H')
            forecast = model.predict(future)
            return forecast

    def evaluate(self, test_data, model_name):
        """Evaluate model performance"""
        predictions = self.forecast(model_name, len(test_data))[0]

        mae = mean_absolute_error(test_data, predictions)
        rmse = np.sqrt(mean_squared_error(test_data, predictions))
        mape = np.mean(np.abs((test_data - predictions) / test_data)) * 100

        return {
            'MAE': mae,
            'RMSE': rmse,
            'MAPE': mape
        }

# Example: Temperature forecasting
data = {
    'timestamp': pd.date_range('2024-01-01', periods=1000, freq='H'),
    'temperature': 22 + 3*np.sin(np.arange(1000)*2*np.pi/24) + np.random.normal(0, 0.5, 1000)
}
df = pd.DataFrame(data)

forecaster = AgriculturalForecaster(df, 'timestamp', 'temperature')
forecaster.train_arima(order=(2, 1, 2))
forecast, conf_int = forecaster.forecast('arima', periods=48)
```

---

## 2. Growth Stage Prediction

### Deep Learning for Growth Prediction

```python
"""
LSTM-based growth stage prediction
Predicts plant growth stages from environmental and image data
"""

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

class GrowthStagePredictor:
    """Predict plant growth stages using LSTM"""

    def __init__(self, sequence_length=168, n_features=10):
        """
        sequence_length: Hours of historical data (default: 1 week)
        n_features: Number of input features
        """
        self.sequence_length = sequence_length
        self.n_features = n_features
        self.model = None

        # Growth stages
        self.stages = [
            'germination',
            'seedling',
            'vegetative',
            'budding',
            'flowering',
            'fruiting',
            'ripening',
            'harvest_ready'
        ]

    def build_model(self):
        """Build LSTM model"""
        model = keras.Sequential([
            # Input layer
            layers.Input(shape=(self.sequence_length, self.n_features)),

            # LSTM layers
            layers.LSTM(128, return_sequences=True),
            layers.Dropout(0.3),

            layers.LSTM(64, return_sequences=True),
            layers.Dropout(0.3),

            layers.LSTM(32),
            layers.Dropout(0.2),

            # Dense layers
            layers.Dense(64, activation='relu'),
            layers.Dropout(0.2),

            layers.Dense(32, activation='relu'),

            # Output layer
            layers.Dense(len(self.stages), activation='softmax')
        ])

        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )

        self.model = model
        return model

    def prepare_sequences(self, df, target_column='stage'):
        """Prepare sequences for training"""
        # Features
        feature_columns = [col for col in df.columns if col != target_column]
        X = df[feature_columns].values

        # Normalize
        from sklearn.preprocessing import StandardScaler
        scaler = StandardScaler()
        X_scaled = scaler.fit_transform(X)

        # Create sequences
        X_seq = []
        y_seq = []

        for i in range(len(X_scaled) - self.sequence_length):
            X_seq.append(X_scaled[i:i+self.sequence_length])

            # Target (growth stage at end of sequence)
            stage = df[target_column].iloc[i+self.sequence_length]
            y_seq.append(stage)

        return np.array(X_seq), np.array(y_seq), scaler

    def train(self, X_train, y_train, X_val, y_val, epochs=100):
        """Train the model"""
        # Convert labels to categorical
        from tensorflow.keras.utils import to_categorical

        y_train_cat = to_categorical(y_train, num_classes=len(self.stages))
        y_val_cat = to_categorical(y_val, num_classes=len(self.stages))

        # Callbacks
        callbacks = [
            keras.callbacks.EarlyStopping(
                patience=15,
                restore_best_weights=True
            ),
            keras.callbacks.ReduceLROnPlateau(
                factor=0.5,
                patience=7,
                min_lr=1e-6
            )
        ]

        # Train
        history = self.model.fit(
            X_train, y_train_cat,
            validation_data=(X_val, y_val_cat),
            epochs=epochs,
            batch_size=32,
            callbacks=callbacks,
            verbose=1
        )

        return history

    def predict_stage(self, sequence):
        """Predict growth stage from sequence"""
        prediction = self.model.predict(sequence.reshape(1, self.sequence_length, self.n_features))
        stage_idx = np.argmax(prediction)
        confidence = prediction[0][stage_idx]

        return {
            'stage': self.stages[stage_idx],
            'confidence': float(confidence),
            'all_probabilities': {
                stage: float(prob)
                for stage, prob in zip(self.stages, prediction[0])
            }
        }

    def predict_days_to_harvest(self, current_stage, current_day):
        """Estimate days to harvest based on current stage"""
        # Typical days per stage (example for tomatoes)
        stage_durations = {
            'germination': 7,
            'seedling': 14,
            'vegetative': 21,
            'budding': 14,
            'flowering': 7,
            'fruiting': 21,
            'ripening': 14,
            'harvest_ready': 0
        }

        current_idx = self.stages.index(current_stage)
        remaining_stages = self.stages[current_idx+1:]

        days_remaining = sum(stage_durations[stage] for stage in remaining_stages)

        return {
            'current_stage': current_stage,
            'current_day': current_day,
            'estimated_harvest_day': current_day + days_remaining,
            'days_remaining': days_remaining,
            'remaining_stages': remaining_stages
        }
```

---

## 3. Yield Prediction Models

### Ensemble Methods for Yield Forecasting

```python
"""
Advanced yield prediction using ensemble methods
Combines multiple models for robust predictions
"""

from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
from sklearn.linear_model import Ridge
from xgboost import XGBRegressor
from sklearn.preprocessing import StandardScaler
import numpy as np

class YieldPredictor:
    """Ensemble yield prediction system"""

    def __init__(self):
        self.models = {
            'rf': RandomForestRegressor(
                n_estimators=200,
                max_depth=15,
                min_samples_split=5,
                random_state=42
            ),
            'gbm': GradientBoostingRegressor(
                n_estimators=200,
                learning_rate=0.05,
                max_depth=7,
                random_state=42
            ),
            'xgb': XGBRegressor(
                n_estimators=200,
                learning_rate=0.05,
                max_depth=7,
                random_state=42
            ),
            'ridge': Ridge(alpha=1.0)
        }

        self.scaler = StandardScaler()
        self.feature_importance = None

    def engineer_features(self, df):
        """Create features for yield prediction"""
        features = df.copy()

        # Cumulative features
        features['cumulative_light'] = df['daily_light_integral'].cumsum()
        features['cumulative_heat'] = (df['temperature'] - 10).clip(0).cumsum()

        # Rolling averages
        features['temp_7d_avg'] = df['temperature'].rolling(7).mean()
        features['humidity_7d_avg'] = df['humidity'].rolling(7).mean()
        features['vpd_7d_avg'] = df['vpd'].rolling(7).mean()

        # Stress indicators
        features['temp_stress'] = ((df['temperature'] < 18) | (df['temperature'] > 28)).astype(int)
        features['light_stress'] = (df['daily_light_integral'] < 15).astype(int)

        # Growth degree days
        features['gdd'] = ((df['temperature'].clip(10, 30) - 10)).cumsum()

        # Interaction features
        features['temp_humidity_interaction'] = df['temperature'] * df['humidity']
        features['light_co2_interaction'] = df['daily_light_integral'] * df['co2']

        return features.fillna(0)

    def train_ensemble(self, X_train, y_train):
        """Train all models in ensemble"""
        # Scale features
        X_scaled = self.scaler.fit_transform(X_train)

        # Train each model
        for name, model in self.models.items():
            print(f"Training {name}...")
            model.fit(X_scaled, y_train)

        # Calculate feature importance (from RF)
        self.feature_importance = pd.DataFrame({
            'feature': X_train.columns,
            'importance': self.models['rf'].feature_importances_
        }).sort_values('importance', ascending=False)

    def predict_ensemble(self, X):
        """Ensemble prediction with weighted average"""
        X_scaled = self.scaler.transform(X)

        # Get predictions from each model
        predictions = {}
        for name, model in self.models.items():
            predictions[name] = model.predict(X_scaled)

        # Weighted average (weights based on validation performance)
        weights = {
            'rf': 0.25,
            'gbm': 0.25,
            'xgb': 0.35,
            'ridge': 0.15
        }

        ensemble_pred = sum(
            predictions[name] * weight
            for name, weight in weights.items()
        )

        # Calculate prediction intervals
        pred_std = np.std([predictions[name] for name in predictions.keys()], axis=0)

        return {
            'prediction': ensemble_pred,
            'lower_bound': ensemble_pred - 1.96 * pred_std,
            'upper_bound': ensemble_pred + 1.96 * pred_std,
            'individual_predictions': predictions
        }

    def predict_by_variety(self, X, variety_encoder):
        """Make variety-specific predictions"""
        results = {}

        for variety in variety_encoder.classes_:
            # Filter data for variety
            variety_mask = X['variety'] == variety
            X_variety = X[variety_mask]

            if len(X_variety) > 0:
                pred = self.predict_ensemble(X_variety)
                results[variety] = {
                    'avg_yield': np.mean(pred['prediction']),
                    'total_yield': np.sum(pred['prediction']),
                    'num_plants': len(X_variety)
                }

        return results
```

---

## 4. Environmental Prediction

### Multi-step Ahead Forecasting

```python
"""
Multi-step environmental condition forecasting
Predicts temperature, humidity, light for next 24-48 hours
"""

import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers

class EnvironmentalForecaster:
    """Multi-output LSTM for environmental prediction"""

    def __init__(self, lookback=168, forecast_horizon=48):
        """
        lookback: Hours of history to use (default: 1 week)
        forecast_horizon: Hours to forecast ahead (default: 2 days)
        """
        self.lookback = lookback
        self.horizon = forecast_horizon
        self.output_features = ['temperature', 'humidity', 'vpd', 'co2']
        self.model = None

    def build_model(self, n_features):
        """Build multi-output LSTM"""
        model = keras.Sequential([
            layers.LSTM(128, return_sequences=True,
                       input_shape=(self.lookback, n_features)),
            layers.Dropout(0.2),

            layers.LSTM(64, return_sequences=False),
            layers.Dropout(0.2),

            layers.Dense(128, activation='relu'),
            layers.Dropout(0.2),

            layers.Dense(self.horizon * len(self.output_features)),

            # Reshape to (horizon, n_outputs)
            layers.Reshape((self.horizon, len(self.output_features)))
        ])

        model.compile(
            optimizer='adam',
            loss='mse',
            metrics=['mae']
        )

        self.model = model
        return model

    def create_sequences(self, data):
        """Create input-output sequences"""
        X, y = [], []

        for i in range(len(data) - self.lookback - self.horizon):
            # Input: lookback hours of data
            X.append(data[i:i+self.lookback])

            # Output: next horizon hours of target features
            y.append(data[i+self.lookback:i+self.lookback+self.horizon,
                         :len(self.output_features)])

        return np.array(X), np.array(y)

    def predict_conditions(self, recent_data):
        """Predict environmental conditions"""
        prediction = self.model.predict(recent_data)

        # Format results
        forecast_df = pd.DataFrame(
            prediction[0],
            columns=self.output_features
        )

        forecast_df['hour_ahead'] = range(1, self.horizon + 1)

        return forecast_df
```

---

## 5. Harvest Optimization

### Dynamic Harvest Scheduling

```python
"""
Intelligent harvest scheduling system
Optimizes harvest timing based on predictions and constraints
"""

import numpy as np
from scipy.optimize import linear_sum_assignment

class HarvestOptimizer:
    """Optimize harvest scheduling"""

    def __init__(self, yield_predictor, market_prices):
        self.yield_predictor = yield_predictor
        self.market_prices = market_prices

    def calculate_harvest_value(self, plant_data, harvest_day):
        """Calculate expected value of harvesting on specific day"""

        # Predict yield if harvested on that day
        predicted_yield = self.yield_predictor.predict(plant_data, harvest_day)

        # Get market price for that day
        market_price = self.market_prices.get(harvest_day, 0)

        # Quality degradation factor
        optimal_harvest_day = plant_data['optimal_day']
        days_from_optimal = abs(harvest_day - optimal_harvest_day)
        quality_factor = 1.0 - (0.05 * days_from_optimal)  # 5% loss per day
        quality_factor = max(0, quality_factor)

        # Calculate value
        value = predicted_yield * market_price * quality_factor

        return value

    def optimize_schedule(self, plants_df, available_labor_hours,
                         harvest_rate=10, planning_horizon=14):
        """
        Optimize harvest schedule given labor constraints

        plants_df: DataFrame with plant information
        available_labor_hours: Dict of {day: hours available}
        harvest_rate: Plants per labor-hour
        planning_horizon: Days to plan ahead
        """

        n_plants = len(plants_df)
        n_days = planning_horizon

        # Calculate value matrix [plant, day]
        value_matrix = np.zeros((n_plants, n_days))

        for i, plant in plants_df.iterrows():
            for day in range(n_days):
                value_matrix[i, day] = self.calculate_harvest_value(
                    plant,
                    day
                )

        # Solve assignment problem
        # Using Hungarian algorithm
        plant_indices, day_indices = linear_sum_assignment(-value_matrix)

        # Create schedule
        schedule = []
        for plant_idx, day_idx in zip(plant_indices, day_indices):
            schedule.append({
                'plant_id': plants_df.iloc[plant_idx]['plant_id'],
                'harvest_day': day_idx,
                'expected_yield': plants_df.iloc[plant_idx]['predicted_yield'],
                'expected_value': value_matrix[plant_idx, day_idx]
            })

        # Check labor constraints
        schedule_df = pd.DataFrame(schedule)
        daily_plants = schedule_df.groupby('harvest_day').size()

        for day, n_plants in daily_plants.items():
            required_hours = n_plants / harvest_rate
            available_hours = available_labor_hours.get(day, 0)

            if required_hours > available_hours:
                print(f"Warning: Day {day} requires {required_hours:.1f}h "
                      f"but only {available_hours:.1f}h available")

        return schedule_df

    def calculate_total_value(self, schedule_df):
        """Calculate total expected value from schedule"""
        return schedule_df['expected_value'].sum()
```

---

## 6. Summary

Key topics covered:
- Time-series forecasting (ARIMA, SARIMA, Prophet, LSTM)
- Growth stage prediction with deep learning
- Yield prediction using ensemble methods
- Environmental condition forecasting
- Harvest optimization algorithms

### Practical Applications

1. **Production Planning:** Use yield forecasts for inventory management
2. **Resource Allocation:** Predict nutrient and water demands
3. **Labor Scheduling:** Optimize harvest timing and staffing
4. **Market Timing:** Align harvest with price forecasts
5. **Risk Management:** Predict and mitigate environmental stresses

---

## Practical Exercise

**Build a Complete Predictive System:**

1. Collect historical environmental and yield data
2. Train LSTM model for growth stage prediction
3. Develop ensemble yield forecasting model
4. Create harvest optimization scheduler
5. Validate predictions against actual outcomes
6. Deploy real-time prediction dashboard

---

## Next Lesson Preview

**Lesson 5: Climate Control Optimization Algorithms**
- Reinforcement learning fundamentals
- Deep Q-Networks for HVAC control
- Multi-objective optimization
- Energy efficiency through AI

---

*End of Lesson 4*
