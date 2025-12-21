# Load Calculations Quick Reference

## Heating Load Calculations

### Envelope Heat Loss
```
Q = U × A × ΔT

Where:
Q = Heat loss (BTU/hr)
U = Overall heat transfer coefficient (BTU/hr·ft²·°F)
A = Surface area (ft²)
ΔT = Temperature difference (°F)
```

### Infiltration Heat Loss
```
Q_sensible = 1.08 × CFM × ΔT
Q_latent = 0.68 × CFM × ΔW

Where:
CFM = Air flow rate (cubic feet per minute)
ΔT = Temperature difference (°F)
ΔW = Humidity ratio difference (grains/lb)
```

## Cooling Load Calculations

### Solar Heat Gain
```
Q_solar = A × SHGC × I_solar

Where:
A = Glazing area (ft²)
SHGC = Solar Heat Gain Coefficient (0-1)
I_solar = Solar irradiance (BTU/hr·ft²)
```

### Internal Heat Gains
```
Lighting: W × 3.41 BTU/W
People: 250-400 BTU/hr per person
Equipment: Nameplate × usage factor
```

## Electrical Load Calculations

### Three-Phase Current
```
I = P / (V × √3 × PF)

Where:
I = Current (Amps)
P = Power (Watts)
V = Voltage (Volts)
PF = Power Factor (0-1)
```

### Voltage Drop
```
VD = (2 × K × I × D) / CM

Where:
VD = Voltage drop (Volts)
K = 12.9 (copper) or 21.2 (aluminum)
I = Current (Amps)
D = One-way distance (feet)
CM = Circular mils (conductor size)
```

## HVAC Psychrometrics

### VPD Calculation
```
VPD = VP_sat × (1 - RH/100)

Where:
VPD = Vapor Pressure Deficit (kPa or mbar)
VP_sat = Saturation vapor pressure
RH = Relative humidity (%)
```

### Dehumidification Capacity
```
CFM = M / (Δω × 60)

Where:
M = Moisture removal (grains/hr)
Δω = Humidity ratio change (grains/lb)
60 = Minutes per hour
```

## Structural Load Combinations (LRFD)

```
1. 1.4D
2. 1.2D + 1.6L + 0.5(Lr or S)
3. 1.2D + 1.6(Lr or S) + (L or 0.5W)
4. 1.2D + 1.0W + L + 0.5(Lr or S)
5. 1.2D + 1.0E + L + 0.2S
6. 0.9D + 1.0W
7. 0.9D + 1.0E

D = Dead, L = Live, S = Snow, W = Wind, E = Seismic
```

## Common Unit Conversions

```
POWER & ENERGY:
1 kW = 3,412 BTU/hr
1 ton cooling = 12,000 BTU/hr
1 kWh = 3,412 BTU
1 therm = 100,000 BTU

FLOW RATES:
1 GPM = 500 lbs/hr (water)
1 CFM = 4.5 lbs/hr (air @ standard)

PRESSURE:
1 PSI = 2.31 ft of water = 27.7 in. w.g.
1 in. w.g. = 0.036 PSI

AREA:
1 acre = 43,560 sq ft
```

---

**Use this reference during design calculations and exam preparation**
