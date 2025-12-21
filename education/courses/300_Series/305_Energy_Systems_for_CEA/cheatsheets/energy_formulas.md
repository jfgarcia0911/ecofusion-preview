# Energy Formulas Cheatsheet

**Course 305: Energy Systems for CEA**
**Quick Reference Guide**

---

## General Energy Calculations

### Power and Energy
```
Power (W) = Voltage (V) × Current (A)
Energy (kWh) = Power (kW) × Time (hours)
Cost ($) = Energy (kWh) × Rate ($/kWh)

Conversions:
  1 HP = 0.746 kW
  1 kW = 3,412 Btu/hr
  1 therm = 100,000 Btu
  1 kWh = 3,412 Btu
```

### Energy Intensity Metrics
```
EUI (Energy Use Intensity) = Annual kWh ÷ Square Feet
Energy per Production = Annual kWh ÷ Annual lbs produced
Energy Cost % = Annual Energy Cost ÷ Annual Revenue × 100%
```

---

## Lighting Calculations

### Light Output
```
DLI (mol/m²/day) = PPFD (µmol/m²/s) × Hours × 3.6 ÷ 1,000

PPFD Required = DLI Target ÷ (Photoperiod × 3.6)

Total System Power = Required PPFD × Area (m²) ÷ Efficacy (µmol/J)
```

### LED Retrofit Savings
```
Energy Savings = (Old Watts - New Watts) × Hours × Days ÷ 1,000

Annual Cost Savings = Energy Savings × $/kWh + Maintenance Savings

Simple Payback = Net Investment ÷ Annual Savings
```

---

## HVAC Calculations

### Heat Loss
```
Q (Btu/hr) = U-value × Area × ΔT

Where:
  U = Heat transfer coefficient (Btu/hr-sq ft-°F)
  Area = Surface area (sq ft)
  ΔT = Temperature difference (°F)

Infiltration Heat Loss = CFM × 1.08 × ΔT
```

### Heating Energy
```
Annual Heating (Btu) = Heat Load × Hours

Fuel Required (therms) = Btu Needed ÷ 100,000 ÷ Efficiency

Cost = Fuel Required × $/therm
```

### Thermal Curtain Savings
```
Heat Saved = Area × (U_before - U_after) × ΔT × Hours

Example: 50% U-value reduction = 50% heat savings (when deployed)
```

---

## Pumping Calculations

### Pump Power
```
HP = (GPM × Head (ft) × Specific Gravity) ÷ (3,960 × Efficiency)

kW = HP × 0.746

Annual Energy = kW × Operating Hours
```

### Affinity Laws (VFD)
```
When speed changes from N₁ to N₂:

Flow: Q₂ = Q₁ × (N₂ ÷ N₁)
Head: H₂ = H₁ × (N₂ ÷ N₁)²
Power: P₂ = P₁ × (N₂ ÷ N₁)³ ← CUBIC relationship!

Example: 80% speed = 51% power
```

### Friction Loss
```
Pipe Friction = f(Diameter, Flow Rate, Length, Material)

Use friction loss charts or:
  Larger pipe = Much lower loss
  Each fitting adds equivalent straight pipe length
```

---

## Solar PV Calculations

### System Sizing
```
Annual Production = System Size (kW) × Sun Hours × 365 × Derate

Derate Factor (typical): 0.75-0.85

Required Size = Target kWh/year ÷ (Sun Hours × 365 × Derate)

Panel Count = System Size (W) ÷ Panel Watts
```

### Financial Analysis
```
Gross Cost = System Size (W) × $/Watt

Federal ITC (30%) = Gross Cost × 0.30

Annual Savings = kWh Produced × $/kWh

Simple Payback = Net Cost ÷ Annual Savings
```

---

## Demand Charges

### Understanding Your Bill
```
Total Bill = Energy Charges + Demand Charges + Fixed Charges

Energy Charges = Σ(kWh × Rate for each TOU period)

Demand Charges = Peak kW × $/kW

Blended Rate = Total Bill ÷ Total kWh
```

### Demand Reduction Value
```
Monthly Savings = kW Reduced × $/kW Demand Rate

Annual Savings = Monthly × 12

Battery/Storage Sizing = kW × Hours Duration
```

---

## Economic Analysis

### Financial Metrics
```
Simple Payback = Investment ÷ Annual Savings

NPV = -Investment + Σ[Cash Flow ÷ (1 + r)^year]
  Where r = discount rate (typically 5%)

IRR = Discount rate where NPV = 0

Benefit-Cost Ratio = PV of Benefits ÷ PV of Costs
```

### Levelized Cost
```
LCOE = (Capital + PV of O&M) ÷ Lifetime kWh Production

Use to compare different technologies or grid rates
```

---

## CHP Calculations

### System Performance
```
Electrical Efficiency = kW Output ÷ Fuel Input (kW)

Heat-to-Power Ratio = kW Thermal ÷ kW Electric

Overall CHP Efficiency = (kW Electric + kW Heat) ÷ Fuel Input
  Typical: 70-90%

Compare to:
  Grid + Boiler: ~45% effective
```

---

## Storage Calculations

### Battery Sizing
```
Energy Capacity (kWh) = Power (kW) × Duration (hrs) ÷ DOD

Where DOD = Depth of Discharge (typically 0.90 for lithium)

Power Rating (kW) = Energy (kWh) ÷ Discharge Time (hrs)
```

### Thermal Storage
```
Water Storage:
  Q (Btu) = Volume (gal) × 8.34 × ΔT

  Volume (gal) = Q ÷ (8.34 × ΔT)

Ice Storage:
  Ice needed (lbs) = Cooling Load (Btu) ÷ 144 Btu/lb
```

---

## Quick Reference Tables

### Typical Efficiencies
| Equipment | Efficiency |
|-----------|------------|
| LED lighting | 2.5-3.5 µmol/J |
| HPS lighting | 1.7-2.0 µmol/J |
| Condensing boiler | 92-98% |
| Standard boiler | 78-85% |
| Heat pump (heating) | COP 2.5-4.0 |
| Solar PV | 18-22% |
| Pumps | 50-85% |

### Energy Content
| Fuel | Energy Content |
|------|----------------|
| Electricity | 3,412 Btu/kWh |
| Natural gas | 100,000 Btu/therm |
| Propane | 91,300 Btu/gallon |
| Fuel oil | 140,000 Btu/gallon |
| Wood pellets | 16 MMBtu/ton |

### Common Conversions
```
Temperature: °F = (°C × 1.8) + 32
Area: 1 m² = 10.76 sq ft
Volume: 1 gallon = 3.785 liters
Pressure: 1 PSI = 2.31 feet of head
Power: 1 ton cooling = 12,000 Btu/hr
```

---

## Pro Tips

### Quick Estimates
- **Lighting**: ~30W/sq ft for indoor farms, 5-10W for greenhouses
- **HVAC**: ~30-50 Btu/sq ft-°F-day for heating
- **Every 1°F setpoint reduction**: 3-5% heating savings
- **LED vs HPS**: ~50-60% energy savings
- **VFD on pumps**: 20-50% savings (variable loads)
- **Thermal curtains**: 30-60% night heating savings

### Rules of Thumb
- Payback <3 years: Excellent project
- Payback 3-7 years: Good project
- Payback >10 years: Strategic only
- NPV >0: Financially viable
- IRR >hurdle rate (10-15% typical): Invest

---

**Keep this cheatsheet handy for quick calculations!**

*Course 305: Energy Systems for CEA | EcoFusion Academy*
