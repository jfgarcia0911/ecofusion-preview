# Module 11: Fertigation Optimization

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Design data-driven fertigation strategies
2. Optimize EC and pH control systems
3. Calculate fertilizer dosing requirements
4. Implement automated nutrient delivery
5. Analyze nutrient use efficiency

---

## 1. Nutrient Delivery Optimization

### Target EC Based on Growth Stage

| Growth Stage | Target EC (µS/cm) | Rationale |
|--------------|-------------------|-----------|
| Seedling | 800-1,000 | Low salt tolerance |
| Vegetative | 1,200-1,600 | Rapid growth, high demand |
| Fruiting/Flowering | 1,800-2,200 | Maximum production |
| Finishing | 1,400-1,800 | Quality over quantity |

### Dosing Calculation

```python
def calculate_fertilizer_dose(current_ec, target_ec, system_volume, ec_per_gram):
    """
    Calculate fertilizer dose needed.

    Parameters:
    - current_ec: Current EC in µS/cm
    - target_ec: Target EC in µS/cm
    - system_volume: Water volume in liters
    - ec_per_gram: EC increase per gram of fertilizer

    Returns:
    - grams of fertilizer to add
    """
    ec_deficit = target_ec - current_ec

    if ec_deficit <= 0:
        return 0

    fertilizer_grams = (ec_deficit * system_volume) / ec_per_gram

    return fertilizer_grams

# Example
dose = calculate_fertilizer_dose(
    current_ec=1200,
    target_ec=1500,
    system_volume=1000,  # 1000 L system
    ec_per_gram=2.5      # Each gram increases EC by 2.5 µS/cm per liter
)

print(f"Add {dose:.1f} grams of fertilizer")
```

---

## 2. pH Control Automation

### Automated pH Adjustment

```python
class pHController:
    def __init__(self, target_ph=6.5, deadband=0.2):
        self.target_ph = target_ph
        self.deadband = deadband
        self.dose_ml_per_unit = 10  # ml of acid/base per 0.1 pH change

    def calculate_dose(self, current_ph, system_volume):
        """Calculate acid or base dose needed."""

        ph_error = current_ph - self.target_ph

        # Within deadband - no action
        if abs(ph_error) < self.deadband:
            return 0, None

        # Calculate dose
        dose_ml = abs(ph_error) * self.dose_ml_per_unit * (system_volume / 100)

        # Determine acid or base
        if ph_error > 0:
            return dose_ml, 'acid'
        else:
            return dose_ml, 'base'

# Usage
controller = pHController(target_ph=6.5)
dose, chemical = controller.calculate_dose(current_ph=7.2, system_volume=1000)

if dose > 0:
    print(f"Add {dose:.1f} ml of {chemical}")
else:
    print("pH within acceptable range")
```

---

## 3. Nutrient Use Efficiency (NUE)

### Calculating NUE

```python
def calculate_nue(total_harvest_kg, total_fertilizer_kg):
    """
    Nutrient Use Efficiency = Harvest / Fertilizer Applied

    Good NUE for leafy greens: 30-50
    Good NUE for fruiting crops: 20-35
    """
    nue = total_harvest_kg / total_fertilizer_kg
    return nue

# Example: 500 kg lettuce from 15 kg fertilizer
nue = calculate_nue(500, 15)
print(f"NUE: {nue:.1f}")

if nue < 25:
    print("Low efficiency - investigate losses")
elif nue > 50:
    print("High efficiency or underfeeding - check plant health")
else:
    print("Good nutrient use efficiency")
```

### Tracking Fertilizer Application

```python
import pandas as pd

# Log fertilizer applications
fert_log = pd.DataFrame({
    'date': pd.date_range('2025-01-01', periods=30, freq='D'),
    'fertilizer_g': np.random.normal(500, 50, 30),
    'harvest_kg': [0]*25 + [45, 48, 52, 0, 0]  # Harvest days
})

# Cumulative analysis
fert_log['cumulative_fert_kg'] = fert_log['fertilizer_g'].cumsum() / 1000
fert_log['cumulative_harvest_kg'] = fert_log['harvest_kg'].cumsum()

# Calculate NUE over time
fert_log['nue'] = fert_log['cumulative_harvest_kg'] / fert_log['cumulative_fert_kg']
fert_log['nue'] = fert_log['nue'].replace([np.inf, -np.inf], np.nan)

# Plot
plt.figure(figsize=(12, 6))
plt.subplot(2, 1, 1)
plt.plot(fert_log['date'], fert_log['cumulative_fert_kg'], label='Cumulative Fertilizer (kg)')
plt.plot(fert_log['date'], fert_log['cumulative_harvest_kg'], label='Cumulative Harvest (kg)')
plt.legend()
plt.ylabel('kg')

plt.subplot(2, 1, 2)
plt.plot(fert_log['date'], fert_log['nue'])
plt.ylabel('NUE')
plt.xlabel('Date')
plt.axhline(y=30, color='r', linestyle='--', label='Target NUE')
plt.legend()
plt.tight_layout()
plt.show()
```

---

## 4. Predictive Fertigation

### ML-Based Nutrient Demand Forecasting

```python
from sklearn.ensemble import RandomForestRegressor

# Features: day_of_cycle, plant_count, temperature, light_dli, current_ec
# Target: daily_ec_change (how much EC drops per day)

# Training data
X_train = [
    [5, 100, 23, 18, 1400],   # Day 5, 100 plants, 23°C, 18 DLI, 1400 EC
    [10, 100, 24, 19, 1500],
    [15, 100, 25, 20, 1600],
    # ... more data
]

y_train = [50, 80, 120]  # EC drop (µS/cm per day)

# Train model
model = RandomForestRegressor(n_estimators=100)
model.fit(X_train, y_train)

# Predict tomorrow's EC drop
tomorrow_features = [[20, 100, 24, 19, 1550]]
predicted_drop = model.predict(tomorrow_features)[0]

# Calculate preemptive dose
current_ec = 1550
target_ec = 1600
expected_tomorrow = current_ec - predicted_drop

if expected_tomorrow < target_ec:
    dose_needed = calculate_fertilizer_dose(expected_tomorrow, target_ec, 1000, 2.5)
    print(f"Predicted EC drop: {predicted_drop:.0f} µS/cm")
    print(f"Add {dose_needed:.1f}g fertilizer today to maintain target")
```

---

## Key Takeaways

1. **Match EC to growth stage** - Seedlings need less, production stages need more
2. **Automate pH control** - Maintain 6.0-7.0 for optimal nutrient availability
3. **Track NUE** - Target 30-50 for leafy greens, improve efficiency over time
4. **Predictive dosing prevents deficiency** - Forecast demand, dose proactively
5. **Monitor trends, not just snapshots** - Cumulative metrics show true performance

---

## Practical Exercise

1. Calculate optimal EC targets for your crop's growth stages
2. Design automated pH adjustment system
3. Analyze your facility's NUE from past 3 months
4. Build predictive model for daily EC drop
5. Create dosing calculator for your fertilizer formulation

---

*EcoFusion Academy - Course 304 - Module 11*
