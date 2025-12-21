# Pipe Sizing Chart

**Course 301: Advanced System Design & Engineering**

---

## PVC Schedule 40 Pipe Specifications

### Dimensions and Properties

| Nominal Size | OD (in) | ID (in) | Wall (in) | Weight (lb/ft) | Area (in²) | Area (ft²) |
|--------------|---------|---------|-----------|----------------|------------|------------|
| 1/2" | 0.840 | 0.622 | 0.109 | 0.115 | 0.304 | 0.0021 |
| 3/4" | 1.050 | 0.824 | 0.113 | 0.169 | 0.533 | 0.0037 |
| 1" | 1.315 | 1.049 | 0.133 | 0.254 | 0.864 | 0.0060 |
| 1-1/4" | 1.660 | 1.380 | 0.140 | 0.346 | 1.495 | 0.0104 |
| 1-1/2" | 1.900 | 1.610 | 0.145 | 0.425 | 2.036 | 0.0141 |
| 2" | 2.375 | 2.067 | 0.154 | 0.568 | 3.355 | 0.0233 |
| 2-1/2" | 2.875 | 2.469 | 0.203 | 0.920 | 4.788 | 0.0333 |
| 3" | 3.500 | 3.068 | 0.216 | 1.214 | 7.393 | 0.0513 |
| 4" | 4.500 | 4.026 | 0.237 | 1.722 | 12.730 | 0.0884 |
| 6" | 6.625 | 6.065 | 0.280 | 3.063 | 28.887 | 0.2006 |
| 8" | 8.625 | 7.981 | 0.322 | 4.634 | 50.020 | 0.3474 |

---

## Flow Capacity at Various Velocities

### Maximum Flow Rates (GPM) by Velocity

| Size | 2 ft/s | 3 ft/s | 4 ft/s | 5 ft/s | 6 ft/s | 7 ft/s | 8 ft/s |
|------|--------|--------|--------|--------|--------|--------|--------|
| 1/2" | 0.9 | 1.3 | 1.8 | 2.2 | 2.7 | 3.1 | 3.5 |
| 3/4" | 1.7 | 2.5 | 3.3 | 4.1 | 5.0 | 5.8 | 6.6 |
| 1" | 2.7 | 4.1 | 5.4 | 6.8 | 8.1 | 9.5 | 10.8 |
| 1-1/4" | 4.8 | 7.1 | 9.5 | 11.9 | 14.3 | 16.6 | 19.0 |
| 1-1/2" | 6.5 | 9.8 | 13.0 | 16.3 | 19.5 | 22.8 | 26.0 |
| 2" | 10.8 | 16.1 | 21.5 | 26.9 | 32.3 | 37.7 | 43.0 |
| 2-1/2" | 15.3 | 22.9 | 30.6 | 38.2 | 45.9 | 53.5 | 61.2 |
| 3" | 24.8 | 37.2 | 49.6 | 62.0 | 74.4 | 86.8 | 99.2 |
| 4" | 43.0 | 64.5 | 86.0 | 107.5 | 129.0 | 150.5 | 172.0 |
| 6" | 103 | 154 | 206 | 257 | 309 | 360 | 412 |
| 8" | 182 | 272 | 363 | 454 | 545 | 635 | 726 |

**Recommended velocities:** 4-6 ft/s for general use, 2-4 ft/s for suction lines

---

## Friction Loss (Hazen-Williams, C=150)

### Head Loss in ft per 100 ft of Pipe

**Flow Rate: 10 GPM**

| Size | Head Loss | Velocity |
|------|-----------|----------|
| 1/2" | 163.0 | 11.3 ft/s |
| 3/4" | 39.2 | 6.0 ft/s |
| 1" | 11.8 | 3.7 ft/s |
| 1-1/2" | 1.8 | 1.5 ft/s |
| 2" | 0.5 | 0.9 ft/s |

**Flow Rate: 25 GPM**

| Size | Head Loss | Velocity |
|------|-----------|----------|
| 1" | 64.0 | 9.3 ft/s |
| 1-1/2" | 9.5 | 3.9 ft/s |
| 2" | 2.7 | 2.3 ft/s |
| 3" | 0.4 | 1.0 ft/s |

**Flow Rate: 50 GPM**

| Size | Head Loss | Velocity |
|------|-----------|----------|
| 1-1/2" | 32.7 | 7.7 ft/s |
| 2" | 9.3 | 4.7 ft/s |
| 2-1/2" | 3.4 | 3.3 ft/s |
| 3" | 1.3 | 2.0 ft/s |
| 4" | 0.3 | 1.2 ft/s |

**Flow Rate: 100 GPM**

| Size | Head Loss | Velocity |
|------|-----------|----------|
| 2" | 32.0 | 9.3 ft/s |
| 2-1/2" | 11.6 | 6.5 ft/s |
| 3" | 4.3 | 4.0 ft/s |
| 4" | 1.2 | 2.3 ft/s |
| 6" | 0.2 | 1.0 ft/s |

**Flow Rate: 200 GPM**

| Size | Head Loss | Velocity |
|------|-----------|----------|
| 3" | 14.9 | 8.1 ft/s |
| 4" | 4.0 | 4.7 ft/s |
| 6" | 0.7 | 1.9 ft/s |
| 8" | 0.2 | 1.1 ft/s |

---

## Pipe Selection Guide

### Step-by-Step Sizing Process

**1. Determine Required Flow Rate (Q)**
- System turnover requirement
- Equipment manufacturer specification
- Design calculation

**2. Select Target Velocity (V)**
- Suction lines: 2-4 ft/s
- Discharge lines: 4-6 ft/s
- Distribution headers: 3-5 ft/s

**3. Calculate Required Area**
```
A [in²] = Q [GPM] / (V [ft/s] × 0.321)
```

**4. Calculate Required Diameter**
```
D [in] = √(4A/π)
```

**5. Select Next Standard Size**
- Round up to next available pipe size
- Verify velocity is acceptable

**6. Check Friction Loss**
- Use table or Hazen-Williams equation
- Verify friction loss is acceptable for system

---

## Quick Selection Table

**For 5 ft/s velocity (common design target):**

| Required Flow | Recommended Size | Actual Velocity |
|---------------|------------------|-----------------|
| 2-4 GPM | 3/4" | 3.7-4.9 ft/s |
| 5-10 GPM | 1" | 3.7-7.4 ft/s |
| 11-18 GPM | 1-1/2" | 4.2-6.9 ft/s |
| 19-35 GPM | 2" | 4.4-8.1 ft/s |
| 36-75 GPM | 3" | 3.6-7.6 ft/s |
| 76-150 GPM | 4" | 4.4-8.7 ft/s |
| 151-350 GPM | 6" | 3.7-8.5 ft/s |

---

## Gravity Drain Sizing

### Drain Capacity (50% Full, Minimum Slopes)

**1/4" per foot slope (2%):**

| Size | Capacity |
|------|----------|
| 2" | 30 GPM |
| 3" | 90 GPM |
| 4" | 180 GPM |
| 6" | 540 GPM |
| 8" | 1,200 GPM |

**1/2" per foot slope (4%):**

| Size | Capacity |
|------|----------|
| 2" | 42 GPM |
| 3" | 127 GPM |
| 4" | 254 GPM |
| 6" | 763 GPM |
| 8" | 1,697 GPM |

**Design Rule:** Use 2× safety factor
- For 100 GPM system: 200 GPM drain capacity needed
- At 1/2" slope: Use 4" drain (254 GPM capacity)

---

## Material Specifications

### PVC Schedule 40 Pressure Ratings

| Temperature | Pressure Rating |
|-------------|-----------------|
| 73°F (23°C) | 280 PSI |
| 80°F (27°C) | 256 PSI |
| 90°F (32°C) | 218 PSI |
| 100°F (38°C) | 182 PSI |

**Note:** Aquaponic systems typically operate <10 PSI. PVC Schedule 40 provides large safety margin.

### PVC Schedule 80 (Higher Pressure)

| Temperature | Pressure Rating |
|-------------|-----------------|
| 73°F (23°C) | 400 PSI |
| 100°F (38°C) | 280 PSI |

**Use Schedule 80 for:**
- High pressure applications (>50 PSI)
- Areas subject to physical damage
- Threaded connections

---

## Installation Guidelines

### Pipe Support Spacing

| Pipe Size | Maximum Spacing |
|-----------|-----------------|
| 1/2" - 1" | 3 ft |
| 1-1/4" - 2" | 4 ft |
| 2-1/2" - 3" | 5 ft |
| 4" | 6 ft |
| 6" | 7 ft |
| 8" | 8 ft |

### Expansion Compensation

**PVC Thermal Expansion:** 3.0 × 10⁻⁵ in/in/°F

**Example:** 50 ft pipe, 30°F temperature change
```
Expansion = 50 ft × 12 in/ft × 3.0×10⁻⁵ × 30°F = 0.54 inches

Provide expansion loop or offset if ΔT > 20°F
```

---

## Common Applications

### Aquaponic System Pipe Sizing

**Main Recirculation:**
- Flow: 100-200 GPM typical
- Size: 3-4" depending on flow
- Velocity: 5-6 ft/s optimal

**Biofilter Inlet:**
- Same as main recirculation
- May need larger if aeration backpressure is concern

**Distribution Headers:**
- Size for uniform distribution
- May need stepped sizing

**Gravity Drains:**
- 2× pump flow capacity minimum
- Slope 1/4" to 1/2" per foot
- Never smaller than discharge pipe!

**Tank Overflows:**
- 1.5× maximum inflow
- Separate from main drain system
- Include air gap to prevent siphon

---

## Troubleshooting

### High Friction Loss?
- ✓ Check pipe size (may be undersized)
- ✓ Count fittings (each adds loss)
- ✓ Verify actual flow rate
- ✓ Consider larger pipe size

### Noisy Pipes?
- ✓ Velocity too high (>8 ft/s)
- ✓ Air in lines
- ✓ Water hammer (sudden valve closure)
- ✓ Cavitation in pump

### Poor Drain Performance?
- ✓ Insufficient slope
- ✓ Pipe too small
- ✓ Clogged or partially blocked
- ✓ Downstream obstruction

---

**Use this chart with hydraulic formulas cheatsheet for complete pipe system design.**

*PVC dimensions per ASTM D1785. Friction loss calculated using Hazen-Williams (C=150).*
