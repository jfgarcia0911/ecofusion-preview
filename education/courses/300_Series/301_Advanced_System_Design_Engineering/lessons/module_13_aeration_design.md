# Module 13: Aeration System Design

## Introduction

Dissolved oxygen (DO) is the most critical parameter in aquaculture. Aeration systems must reliably deliver oxygen while minimizing energy consumption. This module covers aeration engineering: oxygen transfer efficiency, diffuser selection, blower sizing, and backup systems.

**Duration:** 1 hour

---

## Learning Objectives

1. Calculate oxygen requirements from fish metabolism
2. Apply oxygen transfer equations and efficiency factors
3. Select appropriate diffusers and blower types
4. Size aeration systems for various applications
5. Design backup aeration for power failures
6. Optimize energy efficiency

---

## 1. Oxygen Demand Calculations

### 1.1 Fish Oxygen Consumption

```
O₂ Consumption = Fish Biomass × Respiration Rate × Activity Factor

Respiration rates (mg O₂/kg fish/hour):
Tilapia @ 28°C: 200-350 mg/kg/hr
Trout @ 15°C: 150-250 mg/kg/hr
Bass @ 25°C: 250-400 mg/kg/hr

Activity factors:
Resting: 1.0×
Active: 1.5-2.0×
Feeding: 2.0-3.0×
Stressed: 3.0-4.0×

Example:
1,000 kg tilapia, moderate activity
O₂ demand = 1,000 kg × 300 mg/kg/hr × 1.5 = 450,000 mg/hr = 450 g/hr
```

### 1.2 Nitrification Oxygen Demand

```
From Module 4: 4.57 g O₂ per g TAN oxidized

Example:
TAN production: 500 g/day = 20.8 g/hr
O₂ required = 20.8 × 4.57 = 95 g/hr

Total system oxygen demand:
Fish: 450 g/hr
Nitrification: 95 g/hr
Safety factor 1.5×
Total = (450 + 95) × 1.5 = 818 g/hr
```

---

## 2. Oxygen Transfer

### 2.1 Standard Oxygen Transfer Rate (SOTR)

```
SOTR = KₗA₂₀ × Cₛ₂₀ × V

Where:
KₗA₂₀ = Transfer coefficient @ 20°C, clean water (hr⁻¹)
Cₛ₂₀ = Saturation @ 20°C = 9.1 mg/L
V = Water volume (L)

Example: 10,000 L tank with KₗA = 4 hr⁻¹
SOTR = 4 × 9.1 × 10,000 = 364,000 mg/hr = 364 g/hr
```

### 2.2 Actual Oxygen Transfer Rate (AOTR)

```
AOTR = SOTR × α × F × Cₛₜ/Cₛ₂₀ × θ^(T-20) × (Cₛ-C)/Cₛ

Where:
α = Alpha factor (wastewater/cleanwater ratio) = 0.6-0.9
F = Fouling factor = 0.8-0.95
θ = Temperature coefficient = 1.024
Cₛₜ = Saturation at temperature T
C = Operating DO level

Example: 28°C aquaponic water, maintain 6 mg/L
Cₛ₂₈ = 7.8 mg/L (from DO tables)
AOTR = 364 × 0.8 × 0.9 × (7.8/9.1) × 1.024^(28-20) × (7.8-6)/7.8
AOTR = 364 × 0.8 × 0.9 × 0.857 × 1.219 × 0.231
AOTR = 55 g/hr (only 15% of SOTR!)

Required SOTR to meet demand:
SOTR = 818 / 0.15 = 5,453 g/hr

This requires significant aeration!
```

---

## 3. Diffuser Selection

### 3.1 Diffuser Types

| Type | Bubble Size | SAE* | Depth | Cost | Best Use |
|------|-------------|------|-------|------|----------|
| Coarse stone | 5-10 mm | 0.5-1.0 | <6 ft | $ | Mixing |
| Fine bubble (ceramic) | 1-3 mm | 1.5-2.5 | 6-15 ft | $$ | Efficient DO |
| Membrane disc | 1-3 mm | 2.0-3.5 | 8-20 ft | $$$ | High efficiency |
| Venturi | 50-500 μm | 1.0-2.0 | Surface | $$ | Inline |

*SAE = Standard Aeration Efficiency (lb O₂/HP·hr)

### 3.2 Diffuser Spacing and Layout

```
Spacing guidelines:
Circular tanks: Radial pattern from center
Rectangular: Grid 4-6 ft spacing
Depth: 6-12 inches from bottom

Coverage area per diffuser:
Fine bubble disc: 15-25 ft² @ 6-10 ft depth
Coarse stone: 8-12 ft² @ 3-6 ft depth

Example: 12 ft diameter circular tank
Area = π × 6² = 113 ft²
Diffusers required = 113 / 20 = 5.7 → Use 6 diffusers

Radial placement: 6 diffusers on 3 ft radius circle
```

---

## 4. Blower Sizing

### 4.1 Blower Types

**Regenerative Blowers:**
- Flow: 10-500 CFM
- Pressure: 2-15 PSI
- Efficiency: 40-60%
- Best for: Small-medium systems

**Rotary Vane Blowers:**
- Flow: 50-5000 CFM
- Pressure: 3-15 PSI
- Efficiency: 60-75%
- Best for: Medium-large systems

**Rotary Screw:**
- Flow: 100-10,000 CFM
- Pressure: 5-100 PSI
- Efficiency: 75-85%
- Best for: Large commercial systems

### 4.2 Blower Calculation

```
Required airflow = SOTR / (SAE × 1.08)

From previous example:
SOTR = 5,453 g/hr = 12.0 lb/hr
SAE = 2.5 lb O₂/HP·hr (fine bubble diffusers)

Required power = 12.0 / 2.5 = 4.8 HP

Convert to airflow:
Typical: 25-40 CFM per HP for regenerative blowers
Airflow = 4.8 HP × 30 CFM/HP = 144 CFM

Pressure requirement:
Tank depth: 4 ft water = 1.73 PSI
Line losses: 1.0 PSI
Diffuser drop: 2.0 PSI
Total: 4.7 PSI

Select: 5 HP regenerative blower, 150 CFM @ 6 PSI
```

---

## 5. Energy Optimization

### 5.1 Efficiency Comparison

```
Aeration Method | SAE (lb O₂/HP·hr) | Energy Cost
----------------|-------------------|-------------
Surface aerator | 1.0-1.5 | Highest
Coarse bubble | 0.8-1.2 | High
Paddlewheel | 1.5-2.5 | Medium
Fine bubble | 2.0-3.5 | Low
Membrane diffuser | 3.0-4.5 | Lowest
Pure oxygen | 4.0-6.0 | Very low (if O₂ cheap)

Energy cost example (1000 kg fish, 450 g O₂/hr demand):
Surface aerator (1.2 SAE): 450g/hr ÷ 454g/lb = 0.99 lb/hr
  Power = 0.99 / 1.2 = 0.83 HP = 0.62 kW
  Daily: 0.62 × 24 = 14.9 kWh @ $0.12 = $1.79/day

Fine bubble (3.0 SAE): 0.99 / 3.0 = 0.33 HP = 0.25 kW
  Daily: 0.25 × 24 = 6.0 kWh @ $0.12 = $0.72/day
  Annual savings: $391
```

### 5.2 Variable Speed Drives

```
VFD on blowers allows DO control:
- Increase airflow when DO drops
- Decrease airflow when DO adequate
- Typical savings: 20-40% vs. continuous full speed

DO control loop:
Setpoint: 6.5 mg/L
Deadband: ±0.5 mg/L
Action: Increase airflow if DO < 6.0, decrease if > 7.0
Response: Gradual (10-minute averaging to prevent cycling)
```

---

## 6. Backup Systems

### 6.1 Battery Backup for Aeration

```
Critical for fish survival during power outages

Calculation:
Fish: 1,000 kg
Minimum DO: 4 mg/L (survival level)
Reduced activity: 50% of normal consumption
Backup duration: 8 hours

O₂ demand = 1,000 × 300 × 0.5 = 150,000 mg/hr = 150 g/hr

Using battery-powered air pumps (low efficiency):
SAE ≈ 0.5 lb O₂/HP·hr
Power = (150/454) / 0.5 = 0.66 HP = 500W

Battery capacity:
500W × 8 hours × 1.3 (inefficiency) = 5,200 Wh
Using 12V batteries: 5,200 / 12 = 433 Ah

Battery bank: (4) 12V 125Ah deep-cycle batteries (series-parallel)
Inverter: 1,000W pure sine wave
Automatic switchover via UPS system
```

### 6.2 Emergency Oxygen Injection

```
Liquid oxygen (LOX) emergency system:
Pure oxygen injection bypasses aeration efficiency

O₂ requirement: 150 g/hr (from above)
LOX density: 1,141 g/L
Flow rate = 150 / 1,141 = 0.13 L/hr

LOX cylinder: 180 L (typical small cylinder)
Duration = 180 / 0.13 = 1,385 hours = 58 days!

Advantages:
- Extremely long backup duration
- No electrical power required
- High purity oxygen

Disadvantages:
- Requires regulator and diffusion stone
- Safety hazards (pure O₂)
- Periodic refilling
- Cost: $150-300 per fill
```

---

## Summary

Aeration system design requires balancing oxygen delivery, energy efficiency, and reliability:

1. Calculate O₂ demand from fish and nitrification
2. Apply transfer efficiency factors (α, F, θ, temperature)
3. Select diffusers based on depth and efficiency requirements
4. Size blowers for required airflow and pressure
5. Optimize energy with efficient diffusers and VFDs
6. Design robust backup systems for power failures

Proper aeration is the single most critical life-support system.

---

## Check Your Understanding

1. Calculate oxygen demand for 800 kg bass @ 300 mg/kg/hr with 1.8 activity factor plus 400 g/day TAN nitrification.

2. Determine AOTR for a system with SOTR = 500 g/hr, α = 0.75, F = 0.90, T = 26°C, operating DO = 6.5 mg/L.

3. Size diffusers for a 15 ft × 60 ft rectangular tank at 20 ft² coverage per diffuser.

4. Calculate blower power requirement for 300 g/hr O₂ demand using 2.8 SAE diffusers.

5. Specify airflow (CFM) and pressure (PSI) for a blower serving 10 diffusers in a 6 ft deep tank with 1.5 PSI line losses.

6. Compare annual energy cost: surface aerator (1.3 SAE) vs. fine bubble (3.2 SAE) for continuous 2 HP O₂ delivery @ $0.13/kWh.

7. Design a battery backup system for 600 kg fish (250 mg/kg/hr @ 0.5 activity) with 6-hour duration.

8. Calculate LOX consumption rate for emergency system delivering 200 g O₂/hr. How long does a 180 L cylinder last?

9. Specify a VFD-controlled blower system for maintaining DO between 6-7 mg/L with 180 CFM max requirement.

10. Determine SAE for an aeration system: 3 HP blower delivers 450 g O₂/hr. Is this good efficiency?

---

**Next Module:** Module 14 - Lighting System Engineering
