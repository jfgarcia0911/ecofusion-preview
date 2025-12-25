# Module 7: Resource Optimization

## Module Overview

Master mathematical optimization techniques for efficient resource management in CEA, including water, nutrients, energy, and labor optimization using machine learning and operations research methods.

**Duration:** 8-10 hours | **Level:** Expert (400-level)

---

## Learning Objectives

1. Apply mathematical optimization to CEA resource management
2. Build water usage optimization models
3. Design nutrient delivery scheduling algorithms
4. Implement energy consumption prediction systems
5. Solve multi-resource constraint optimization problems
6. Evaluate optimization performance and ROI
7. Deploy optimization systems in production environments

---

## 1. Optimization Fundamentals

### 1.1 Problem Formulation

**General Optimization Framework:**
```
MINIMIZE (or MAXIMIZE):  f(x)    [Objective function]

SUBJECT TO:
  g_i(x) ≤ 0   for i = 1,...,m   [Inequality constraints]
  h_j(x) = 0   for j = 1,...,p   [Equality constraints]
  x_L ≤ x ≤ x_U                  [Variable bounds]

Where:
• x = decision variables (controls, setpoints)
• f(x) = objective (cost, energy, water, etc.)
• g_i, h_j = constraint functions
```

### 1.2 Optimization Categories

```
LINEAR PROGRAMMING (LP)
└─> Linear objective and constraints
    Example: Crop mix optimization

NONLINEAR PROGRAMMING (NLP)
└─> Nonlinear objective or constraints
    Example: Growth rate optimization

INTEGER PROGRAMMING (IP)
└─> Some variables must be integers
    Example: Equipment scheduling

MIXED-INTEGER (MIP)
└─> Combination of continuous and integer
    Example: Facility layout optimization

STOCHASTIC OPTIMIZATION
└─> Uncertainty in parameters
    Example: Risk-aware resource planning
```

---

## 2. Water Usage Optimization

### 2.1 Water Demand Prediction

```python
import numpy as np
from sklearn.ensemble import RandomForestRegressor
import pandas as pd

class WaterDemandPredictor:
    """
    Predict water consumption using environmental and crop data.
    """
    def __init__(self):
        self.model = RandomForestRegressor(
            n_estimators=100,
            max_depth=15,
            random_state=42
        )

    def prepare_features(self, data):
        """
        Engineer features for water demand prediction.
        """
        features = pd.DataFrame()

        # Environmental features
        features['temperature'] = data['temperature']
        features['humidity'] = data['humidity']
        features['vpd'] = data['vpd']
        features['light_intensity'] = data['light_intensity']
        features['co2'] = data['co2']

        # Temporal features
        features['hour'] = data['timestamp'].dt.hour
        features['day_of_week'] = data['timestamp'].dt.dayofweek
        features['day_of_year'] = data['timestamp'].dt.dayofyear

        # Crop features
        features['plant_age_days'] = data['plant_age_days']
        features['leaf_area_index'] = data['leaf_area_index']
        features['crop_type'] = pd.Categorical(data['crop_type']).codes

        # Lag features
        for lag in [1, 24, 168]:  # 1hr, 1day, 1week
            features[f'water_lag_{lag}'] = data['water_consumption'].shift(lag)

        return features

    def train(self, historical_data):
        """
        Train water demand prediction model.
        """
        X = self.prepare_features(historical_data)
        y = historical_data['water_consumption']

        # Remove NaN from lag features
        mask = ~X.isna().any(axis=1)
        X = X[mask]
        y = y[mask]

        self.model.fit(X, y)

        return self.model.score(X, y)

    def predict(self, current_data, horizon=24):
        """
        Predict water demand for next 'horizon' hours.
        """
        predictions = []

        for h in range(horizon):
            X = self.prepare_features(current_data)
            pred = self.model.predict(X)
            predictions.append(pred[0])

        return np.array(predictions)
```

### 2.2 Irrigation Scheduling Optimization

```python
from scipy.optimize import linprog

class IrrigationOptimizer:
    """
    Optimize irrigation schedule to minimize water use
    while meeting crop requirements.
    """
    def __init__(self, zones, time_horizon=24):
        self.zones = zones
        self.time_horizon = time_horizon

    def optimize_schedule(self, water_budget, zone_requirements):
        """
        Solve irrigation scheduling optimization problem.

        Decision variables: x[z,t] = water applied to zone z at time t

        Objective: Minimize total water use

        Constraints:
        - Meet minimum water requirements per zone
        - Don't exceed water budget
        - Respect system capacity limits
        """
        n_zones = len(self.zones)
        n_vars = n_zones * self.time_horizon

        # Objective: minimize water use (with time-of-use pricing)
        c = np.zeros(n_vars)
        for t in range(self.time_horizon):
            water_price = self.get_water_price(t)
            c[t*n_zones:(t+1)*n_zones] = water_price

        # Inequality constraints
        A_ub = []
        b_ub = []

        # Total water budget constraint
        A_ub.append(np.ones(n_vars))
        b_ub.append(water_budget)

        # System capacity constraints (per timestep)
        for t in range(self.time_horizon):
            constraint = np.zeros(n_vars)
            constraint[t*n_zones:(t+1)*n_zones] = 1
            A_ub.append(constraint)
            b_ub.append(self.system_capacity)

        # Equality constraints (meet minimum requirements)
        A_eq = []
        b_eq = []

        for z in range(n_zones):
            constraint = np.zeros(n_vars)
            constraint[z::n_zones] = 1  # Sum across all timesteps for zone z
            A_eq.append(constraint)
            b_eq.append(zone_requirements[z])

        # Variable bounds (non-negative)
        bounds = [(0, None) for _ in range(n_vars)]

        # Solve
        result = linprog(
            c, A_ub=A_ub, b_ub=b_ub,
            A_eq=A_eq, b_eq=b_eq,
            bounds=bounds,
            method='highs'
        )

        if result.success:
            schedule = result.x.reshape((self.time_horizon, n_zones))
            return {
                'schedule': schedule,
                'total_water': result.fun,
                'success': True
            }
        else:
            return {'success': False, 'message': result.message}

    def get_water_price(self, hour):
        """
        Return water/energy cost for a given hour.
        """
        if 2 <= hour < 6:
            return 0.8  # Off-peak
        elif 14 <= hour < 20:
            return 1.5  # Peak
        else:
            return 1.0  # Standard
```

---

## 3. Nutrient Delivery Optimization

### 3.1 Nutrient Recipe Optimization

```python
from scipy.optimize import minimize

class NutrientOptimizer:
    """
    Optimize nutrient recipe for target EC and elemental ratios.
    """
    def __init__(self):
        # Fertilizer compositions (g/L for 1% solution)
        self.fertilizers = {
            'calcium_nitrate': {
                'N': 150, 'Ca': 190, 'cost': 0.50
            },
            'potassium_nitrate': {
                'N': 130, 'K': 380, 'cost': 0.80
            },
            'monopotassium_phosphate': {
                'P': 230, 'K': 280, 'cost': 1.20
            },
            'magnesium_sulfate': {
                'Mg': 100, 'S': 130, 'cost': 0.30
            },
            'iron_chelate': {
                'Fe': 60, 'cost': 5.00
            }
        }

    def optimize_recipe(self, target_ppm, max_cost=None):
        """
        Find optimal fertilizer mix to meet nutrient targets.

        Args:
            target_ppm: dict of target concentrations (ppm)
            max_cost: maximum allowable cost per 1000L

        Returns:
            Optimal fertilizer amounts (g/1000L)
        """
        fert_names = list(self.fertilizers.keys())
        n_ferts = len(fert_names)

        # Objective: minimize cost
        def objective(x):
            cost = sum(x[i] * self.fertilizers[fert_names[i]]['cost']
                      for i in range(n_ferts))
            return cost

        # Constraints: meet nutrient targets (±5% tolerance)
        def constraints_func(x):
            achieved_ppm = self.calculate_ppm(x, fert_names)
            errors = []

            for nutrient, target in target_ppm.items():
                actual = achieved_ppm.get(nutrient, 0)
                # Normalized error
                error = abs(actual - target) / target
                errors.append(0.05 - error)  # Must be >= 0

            return errors

        # Initial guess (equal amounts)
        x0 = np.ones(n_ferts) * 1.0

        # Bounds (0 to 10 g/L)
        bounds = [(0, 10)] * n_ferts

        # Solve
        result = minimize(
            objective,
            x0,
            method='SLSQP',
            bounds=bounds,
            constraints={'type': 'ineq', 'fun': constraints_func}
        )

        if result.success:
            recipe = {
                fert_names[i]: result.x[i]
                for i in range(n_ferts)
            }
            achieved = self.calculate_ppm(result.x, fert_names)

            return {
                'recipe': recipe,
                'cost': result.fun,
                'achieved_ppm': achieved,
                'success': True
            }
        else:
            return {'success': False}

    def calculate_ppm(self, amounts, fert_names):
        """
        Calculate achieved nutrient concentrations.
        """
        ppm = {}

        for i, fert in enumerate(fert_names):
            amount = amounts[i]
            composition = self.fertilizers[fert]

            for nutrient, conc in composition.items():
                if nutrient != 'cost':
                    ppm[nutrient] = ppm.get(nutrient, 0) + amount * conc

        return ppm
```

---

## 4. Energy Optimization

### 4.1 Energy Consumption Prediction

```python
import torch
import torch.nn as nn

class EnergyPredictor(nn.Module):
    """
    LSTM-based energy consumption forecasting.
    """
    def __init__(self, input_dim, hidden_dim=64, num_layers=2):
        super().__init__()

        self.lstm = nn.LSTM(
            input_dim,
            hidden_dim,
            num_layers,
            batch_first=True,
            dropout=0.2
        )

        self.fc = nn.Sequential(
            nn.Linear(hidden_dim, 32),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(32, 1)
        )

    def forward(self, x):
        lstm_out, _ = self.lstm(x)
        # Use last timestep output
        last_out = lstm_out[:, -1, :]
        prediction = self.fc(last_out)
        return prediction

class EnergyOptimizer:
    """
    Optimize energy usage across time-of-use pricing.
    """
    def __init__(self, predictor_model):
        self.predictor = predictor_model

        self.pricing = {
            'super_off_peak': 0.08,  # 12am-6am
            'off_peak': 0.12,        # 6am-2pm, 10pm-12am
            'shoulder': 0.18,        # 2pm-6pm
            'peak': 0.35             # 6pm-10pm
        }

    def get_price(self, hour):
        """Get electricity price for given hour."""
        if 0 <= hour < 6:
            return self.pricing['super_off_peak']
        elif 6 <= hour < 14 or 22 <= hour < 24:
            return self.pricing['off_peak']
        elif 14 <= hour < 18:
            return self.pricing['shoulder']
        else:  # 18-22
            return self.pricing['peak']

    def optimize_load_shifting(self, forecast_demand, flexibility):
        """
        Shift flexible loads to cheaper hours.

        Args:
            forecast_demand: Predicted hourly energy demand (kWh)
            flexibility: Percentage of load that can be shifted (0-1)

        Returns:
            Optimized demand profile
        """
        n_hours = len(forecast_demand)

        # Separate base load and flexible load
        base_load = forecast_demand * (1 - flexibility)
        flexible_load = forecast_demand * flexibility
        total_flexible = np.sum(flexible_load)

        # Get prices for each hour
        prices = np.array([self.get_price(h) for h in range(n_hours)])

        # Optimization: allocate flexible load to minimize cost
        # Simple heuristic: prioritize lowest-cost hours
        sorted_indices = np.argsort(prices)

        optimized_flexible = np.zeros(n_hours)
        remaining = total_flexible
        capacity_limit = np.max(forecast_demand) * 1.2  # 20% over max

        for idx in sorted_indices:
            if remaining <= 0:
                break

            # Allocate as much as possible to this hour
            available = capacity_limit - base_load[idx]
            allocation = min(available, remaining)
            optimized_flexible[idx] = allocation
            remaining -= allocation

        optimized_demand = base_load + optimized_flexible

        # Calculate savings
        original_cost = np.sum(forecast_demand * prices)
        optimized_cost = np.sum(optimized_demand * prices)
        savings = original_cost - optimized_cost

        return {
            'optimized_demand': optimized_demand,
            'original_cost': original_cost,
            'optimized_cost': optimized_cost,
            'savings': savings,
            'savings_percent': (savings / original_cost) * 100
        }
```

---

## 5. Multi-Resource Optimization

### 5.1 Integrated Resource Management

```python
from scipy.optimize import differential_evolution

class IntegratedResourceOptimizer:
    """
    Optimize water, nutrients, energy, and labor simultaneously.
    """
    def __init__(self, facility_config):
        self.config = facility_config

    def objective_function(self, x):
        """
        Multi-objective function combining all resources.

        Decision variables x:
        [temp_setpoint, humidity_setpoint, co2_target,
         light_intensity, irrigation_rate, nutrient_ec]
        """
        temp, humidity, co2, light, irrigation, ec = x

        # Predict outcomes
        growth_rate = self.predict_growth(temp, humidity, co2, light, ec)
        water_use = irrigation * 24  # L/day
        energy_use = self.calculate_energy(temp, humidity, light)
        nutrient_cost = self.calculate_nutrient_cost(ec, irrigation)

        # Resource costs
        water_cost = water_use * 0.001  # $/L
        energy_cost = energy_use * 0.15  # $/kWh
        total_cost = water_cost + energy_cost + nutrient_cost

        # Cost per unit yield
        cost_per_kg = total_cost / max(growth_rate, 0.01)

        # Penalties for constraint violations
        penalty = 0
        if growth_rate < self.config['min_growth_rate']:
            penalty += 100
        if water_use > self.config['water_budget']:
            penalty += 50
        if energy_use > self.config['energy_budget']:
            penalty += 75

        return cost_per_kg + penalty

    def optimize(self):
        """
        Find optimal resource allocation.
        """
        # Variable bounds
        bounds = [
            (18, 28),    # Temperature (°C)
            (50, 85),    # Humidity (%RH)
            (400, 1500), # CO2 (ppm)
            (200, 800),  # Light (μmol/m²/s)
            (1, 10),     # Irrigation (L/m²/hr)
            (1.0, 3.0)   # Nutrient EC (mS/cm)
        ]

        # Solve using differential evolution
        result = differential_evolution(
            self.objective_function,
            bounds,
            strategy='best1bin',
            maxiter=1000,
            popsize=15,
            tol=0.01,
            seed=42
        )

        if result.success:
            optimal_settings = {
                'temperature': result.x[0],
                'humidity': result.x[1],
                'co2': result.x[2],
                'light_intensity': result.x[3],
                'irrigation_rate': result.x[4],
                'nutrient_ec': result.x[5],
                'cost_per_kg': result.fun
            }
            return optimal_settings
        else:
            return None

    def predict_growth(self, temp, humidity, co2, light, ec):
        """
        Simplified growth model (replace with actual model).
        """
        # Optimal ranges for lettuce
        temp_factor = 1 - abs(temp - 22) / 10
        humidity_factor = 1 - abs(humidity - 70) / 30
        co2_factor = min(co2 / 800, 1.5)
        light_factor = min(light / 600, 1.0)
        ec_factor = 1 - abs(ec - 1.8) / 1.0

        base_growth = 0.8  # cm/day
        growth = base_growth * temp_factor * humidity_factor * co2_factor * light_factor * ec_factor

        return max(growth, 0)

    def calculate_energy(self, temp, humidity, light):
        """
        Estimate energy consumption.
        """
        # Simplified model
        hvac_power = abs(temp - 20) * 0.5  # kW
        dehumid_power = max(0, humidity - 60) * 0.1
        light_power = light * 0.001  # Convert to kW

        return (hvac_power + dehumid_power + light_power) * 24  # kWh/day

    def calculate_nutrient_cost(self, ec, irrigation_rate):
        """
        Estimate daily nutrient cost.
        """
        fertilizer_cost_per_liter = ec * 0.002  # $/L
        daily_volume = irrigation_rate * 24
        return fertilizer_cost_per_liter * daily_volume
```

---

## Summary

Resource optimization in CEA requires combining:
1. Predictive models for demand forecasting
2. Mathematical optimization techniques
3. Multi-objective balancing
4. Real-time adaptation
5. Cost-benefit analysis

**Key Algorithms:**
- Linear/nonlinear programming
- Genetic algorithms
- Gradient-based optimization
- Heuristic methods

---

## Discussion Questions

1. How do you balance multiple competing optimization objectives?
2. What are the risks of over-optimizing resource usage?
3. How can uncertainty be incorporated into optimization models?
4. What is the role of human oversight in automated optimization?

---

## Vocabulary

- **Linear Programming:** Optimization with linear objective and constraints
- **Decision Variables:** Parameters we can control
- **Objective Function:** What we're trying to minimize/maximize
- **Constraints:** Limits and requirements
- **Pareto Optimality:** No improvement possible without tradeoff
- **Load Shifting:** Moving energy demand to cheaper times
- **Time-of-Use Pricing:** Variable electricity rates by time

---

## Activity Reference

**Activity 7: Building a Resource Optimizer**
See: `/activities/activity_07_resource_optimization.md`

---

## Next Module Preview

**Module 8: AI Implementation & Deployment**
- Production deployment strategies
- MLOps and CI/CD pipelines
- Monitoring and maintenance
- Scaling ML infrastructure

---

*End of Module 7*
