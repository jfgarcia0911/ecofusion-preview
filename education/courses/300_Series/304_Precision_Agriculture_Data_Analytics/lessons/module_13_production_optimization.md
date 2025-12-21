# Module 13: Production Optimization

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Calculate and optimize key production metrics
2. Conduct yield gap analysis
3. Implement continuous improvement cycles
4. Balance yield, quality, and resource use
5. Benchmark against industry standards

---

## 1. Key Performance Indicators (KPIs)

### Production KPIs

```python
class ProductionMetrics:
    def __init__(self):
        pass

    def yield_per_sqft_per_year(self, annual_harvest_lbs, growing_area_sqft):
        """Calculate annual yield density."""
        return annual_harvest_lbs / growing_area_sqft

    def crop_cycles_per_year(self, days_per_cycle):
        """How many cycles fit in a year."""
        return 365 / days_per_cycle

    def revenue_per_sqft(self, yield_per_sqft, price_per_lb):
        """Annual revenue per square foot."""
        return yield_per_sqft * price_per_lb

    def labor_hours_per_lb(self, total_labor_hours, total_harvest_lbs):
        """Labor efficiency."""
        return total_labor_hours / total_harvest_lbs

    def water_use_efficiency(self, total_harvest_lbs, total_water_gallons):
        """Pounds produced per gallon of water."""
        return total_harvest_lbs / total_water_gallons

# Example calculation
metrics = ProductionMetrics()

# Data for year
annual_harvest = 5000  # lbs
growing_area = 1000  # sqft
days_per_cycle = 35
price_per_lb = 4.00
labor_hours = 2000
water_used = 50000  # gallons

yield_density = metrics.yield_per_sqft_per_year(annual_harvest, growing_area)
cycles = metrics.crop_cycles_per_year(days_per_cycle)
revenue_density = metrics.revenue_per_sqft(yield_density, price_per_lb)
labor_eff = metrics.labor_hours_per_lb(labor_hours, annual_harvest)
water_eff = metrics.water_use_efficiency(annual_harvest, water_used)

print(f"Yield: {yield_density:.1f} lbs/sqft/year")
print(f"Cycles: {cycles:.1f} per year")
print(f"Revenue: ${revenue_density:.2f}/sqft/year")
print(f"Labor: {labor_eff:.2f} hrs/lb")
print(f"Water efficiency: {water_eff:.2f} lbs/gallon")
```

### Benchmarking

| Metric | Your Farm | Industry Average | Top 25% |
|--------|-----------|------------------|---------|
| Yield (lbs/sqft/yr) | 5.0 | 4.5 | 6.0+ |
| Cycles per year | 10.4 | 9.0 | 11+ |
| Labor (hrs/lb) | 0.4 | 0.5 | 0.3 |
| Revenue ($/sqft/yr) | $20 | $18 | $24+ |

---

## 2. Yield Gap Analysis

### Identifying Limiting Factors

```python
def yield_gap_analysis(actual_yield, potential_yield):
    """
    Identify yield gap and prioritize improvements.

    Potential yield = best possible under perfect management
    """
    yield_gap = potential_yield - actual_yield
    efficiency = (actual_yield / potential_yield) * 100

    print(f"Actual yield: {actual_yield} lbs")
    print(f"Potential yield: {potential_yield} lbs")
    print(f"Yield gap: {yield_gap} lbs ({100-efficiency:.1f}% unrealized)")
    print(f"Efficiency: {efficiency:.1f}%")

    # Estimate causes
    limiting_factors = {
        'Suboptimal climate': yield_gap * 0.30,
        'Nutrient management': yield_gap * 0.25,
        'Pest/disease': yield_gap * 0.20,
        'Genetics/variety': yield_gap * 0.15,
        'Labor/timing': yield_gap * 0.10
    }

    print("\nEstimated yield loss by factor:")
    for factor, loss in sorted(limiting_factors.items(),
                                key=lambda x: x[1], reverse=True):
        print(f"  {factor}: {loss:.1f} lbs")

    return limiting_factors

# Example
yield_gap_analysis(actual_yield=4500, potential_yield=6000)
```

---

## 3. A/B Testing for Improvements

### Experimental Design

```python
import pandas as pd
from scipy.stats import ttest_ind

# Example: Test two fertigation schedules
control_group = [45, 47, 46, 48, 47, 46, 45, 47]  # lbs per harvest
treatment_group = [49, 51, 50, 52, 51, 50, 49, 51]  # new schedule

# Statistical test
t_stat, p_value = ttest_ind(control_group, treatment_group)

control_mean = np.mean(control_group)
treatment_mean = np.mean(treatment_group)
improvement = ((treatment_mean - control_mean) / control_mean) * 100

print(f"Control mean: {control_mean:.1f} lbs")
print(f"Treatment mean: {treatment_mean:.1f} lbs")
print(f"Improvement: {improvement:.1f}%")
print(f"P-value: {p_value:.4f}")

if p_value < 0.05:
    print("Result: SIGNIFICANT improvement")
    print("Recommendation: Implement new schedule facility-wide")
else:
    print("Result: Not statistically significant")
    print("Recommendation: Continue with control or test further")
```

---

## 4. Multi-Objective Optimization

### Balancing Yield, Quality, and Costs

```python
from scipy.optimize import minimize

def objective_function(x):
    """
    Optimize for: max yield, max quality, min cost
    x = [temperature_setpoint, light_intensity, fertilizer_ec]
    """
    temp = x[0]
    light = x[1]
    ec = x[2]

    # Yield model (increases with temp, light, EC)
    yield_score = (temp - 15) * 2 + light * 0.01 + ec * 0.005

    # Quality model (peaks at moderate values)
    quality_score = 100 - abs(temp - 24) * 2 - abs(light - 400) * 0.05

    # Cost model (increases with energy use)
    heating_cost = max(0, temp - 20) * 10
    lighting_cost = light * 0.1
    fert_cost = ec * 0.05
    total_cost = heating_cost + lighting_cost + fert_cost

    # Weighted objective (adjust weights as needed)
    # Minimize negative (= maximize positive)
    objective = -(yield_score * 0.4 + quality_score * 0.4 - total_cost * 0.2)

    return objective

# Constraints
bounds = [(18, 28), (200, 800), (1000, 2000)]  # temp, light, EC

# Optimize
result = minimize(objective_function, x0=[24, 400, 1500], bounds=bounds)

print(f"Optimal settings:")
print(f"  Temperature: {result.x[0]:.1f}°C")
print(f"  Light: {result.x[1]:.0f} PPFD")
print(f"  EC: {result.x[2]:.0f} µS/cm")
```

---

## Key Takeaways

1. **Measure what matters** - Track KPIs that drive profitability
2. **Close yield gaps systematically** - Identify and address limiting factors
3. **Test improvements scientifically** - A/B tests prevent costly mistakes
4. **Optimize holistically** - Consider yield, quality, and costs together
5. **Benchmark continuously** - Compare to industry leaders, improve incrementally

---

*EcoFusion Academy - Course 304 - Module 13*
