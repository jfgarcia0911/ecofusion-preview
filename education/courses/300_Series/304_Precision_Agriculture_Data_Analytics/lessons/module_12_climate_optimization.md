# Module 12: Climate Optimization

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Optimize temperature and humidity setpoints
2. Manage VPD for maximum growth
3. Control CO2 enrichment efficiently
4. Balance energy costs with productivity
5. Implement dynamic climate strategies

---

## 1. VPD-Based Climate Control

### VPD Calculation and Targets

```python
def calculate_vpd(temp_c, rh_percent):
    """Calculate Vapor Pressure Deficit."""
    # Saturation vapor pressure (kPa)
    svp = 0.6108 * np.exp((17.27 * temp_c) / (temp_c + 237.3))
    # Actual vapor pressure
    avp = svp * (rh_percent / 100.0)
    # VPD
    vpd = svp - avp
    return vpd

# Optimal VPD ranges
VPD_RANGES = {
    'seedling': (0.4, 0.8),
    'vegetative': (0.8, 1.2),
    'flowering': (1.0, 1.4)
}

# Control logic
def optimize_climate_for_vpd(current_temp, current_rh, stage):
    """Adjust temp/RH to achieve target VPD."""
    current_vpd = calculate_vpd(current_temp, current_rh)
    target_vpd_min, target_vpd_max = VPD_RANGES[stage]
    target_vpd = (target_vpd_min + target_vpd_max) / 2

    if current_vpd < target_vpd_min:
        # Too humid/cool - increase temp or decrease RH
        return "Increase temperature or decrease humidity"
    elif current_vpd > target_vpd_max:
        # Too dry/hot - decrease temp or increase RH
        return "Decrease temperature or increase humidity"
    else:
        return "VPD optimal"
```

---

## 2. CO2 Enrichment Optimization

### Cost-Benefit Analysis

```python
def co2_enrichment_roi(baseline_yield_kg, co2_cost_per_kg, co2_kg_used,
                        yield_increase_pct, crop_value_per_kg):
    """Calculate ROI of CO2 enrichment."""

    # Increased yield
    additional_yield = baseline_yield_kg * (yield_increase_pct / 100)

    # Revenue from increased yield
    additional_revenue = additional_yield * crop_value_per_kg

    # Cost of CO2
    co2_cost = co2_kg_used * co2_cost_per_kg

    # Net benefit
    net_benefit = additional_revenue - co2_cost

    # ROI
    roi = (net_benefit / co2_cost) * 100 if co2_cost > 0 else 0

    return {
        'additional_yield_kg': additional_yield,
        'additional_revenue': additional_revenue,
        'co2_cost': co2_cost,
        'net_benefit': net_benefit,
        'roi_percent': roi
    }

# Example
result = co2_enrichment_roi(
    baseline_yield_kg=500,
    co2_cost_per_kg=1.50,
    co2_kg_used=50,
    yield_increase_pct=15,
    crop_value_per_kg=4.00
)

print(f"Additional yield: {result['additional_yield_kg']:.1f} kg")
print(f"Additional revenue: ${result['additional_revenue']:.2f}")
print(f"CO2 cost: ${result['co2_cost']:.2f}")
print(f"Net benefit: ${result['net_benefit']:.2f}")
print(f"ROI: {result['roi_percent']:.1f}%")
```

---

## 3. Energy-Aware Climate Control

### Dynamic Setpoints Based on Energy Prices

```python
class EnergyAwareController:
    def __init__(self):
        self.base_temp_setpoint = 24.0
        self.base_light_intensity = 400  # PPFD

    def get_setpoints(self, energy_price, time_of_day):
        """Adjust setpoints based on energy cost."""

        # Off-peak hours (cheap energy)
        if energy_price < 0.10:
            temp_setpoint = self.base_temp_setpoint
            light_intensity = self.base_light_intensity

        # Peak hours (expensive energy)
        elif energy_price > 0.20:
            # Reduce energy use
            temp_setpoint = self.base_temp_setpoint - 2  # Less heating/cooling
            light_intensity = self.base_light_intensity * 0.8  # Dim lights 20%

        else:
            # Normal pricing
            temp_setpoint = self.base_temp_setpoint
            light_intensity = self.base_light_intensity

        return temp_setpoint, light_intensity

controller = EnergyAwareController()
temp, light = controller.get_setpoints(energy_price=0.25, time_of_day=14)
print(f"Setpoints: {temp}°C, {light} PPFD")
```

---

## Key Takeaways

1. **VPD drives transpiration and growth** - More important than temp or RH alone
2. **CO2 enrichment pays off** - 15-30% yield increase typical
3. **Dynamic setpoints save energy** - Adjust for time-of-use rates
4. **Monitor energy per pound produced** - Target <$0.50/lb for leafy greens
5. **Optimize holistically** - Climate affects water use, nutrients, pests

---

*EcoFusion Academy - Course 304 - Module 12*
