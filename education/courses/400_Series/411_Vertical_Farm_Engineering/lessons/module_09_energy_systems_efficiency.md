# Module 9: Energy Systems and Efficiency Optimization

## Learning Objectives

- Analyze energy consumption patterns in vertical farms
- Design power distribution systems for efficiency
- Integrate renewable energy sources
- Implement demand management strategies
- Calculate ROI for energy efficiency investments

## 1. Energy Consumption Analysis

### 1.1 Energy Load Breakdown

**Typical Vertical Farm Energy Distribution:**
```
Total Energy Consumption (100% = 1,000 kWh/day example):

Lighting: 600 kWh/day (60%)
├─ LED fixtures: 550 kWh
└─ Drivers and controls: 50 kWh

HVAC: 250 kWh/day (25%)
├─ Cooling: 150 kWh
├─ Dehumidification: 80 kWh
└─ Ventilation fans: 20 kWh

Irrigation/Pumps: 50 kWh/day (5%)
Water Treatment: 30 kWh/day (3%)
Automation/Controls: 20 kWh/day (2%)
Other (office, etc.): 50 kWh/day (5%)

Annual Consumption: 365,000 kWh/year
At $0.12/kWh: $43,800/year
Per m² (1,000 m²): $43.80/m²/year
```

### 1.2 Load Profiling

**Daily Load Curve:**
```
Power (kW)
120│         ╔═════════════════╗
100│         ║   Lights On     ║
 80│    ╔════╝                 ╚════╗
 60│    ║                           ║  HVAC varies
 40│    ║                           ║  with load
 20│    ║                           ║
  0└────╨───────────────────────────╨────
    0  6  12  18  24  Hours

Peak demand: 110 kW (when lights on)
Base load: 40 kW (lights off)
Load factor: Average/Peak = 75/110 = 0.68

Demand charges:
Peak demand: 110 kW × $15/kW = $1,650/month
Annual demand cost: $19,800
Plus energy: $43,800
Total: $63,600/year
```

## 2. Power Distribution Design

### 2.1 Service Entrance Sizing

**Main Service Calculation:**
```
Connected Load Summary:
Lighting: 100 kW
HVAC: 60 kW (compressors, fans)
Pumps: 15 kW
Dehumidification: 25 kW
Other: 20 kW
Total Connected: 220 kW

Demand Factors (NEC Article 220):
Lighting: 100% of load (continuous)
HVAC: 100% of largest + 75% of remainder
Pumps: 100% (continuous)
Other: 75%

Calculated Demand:
Lighting: 100 kW × 1.0 = 100 kW
HVAC: 60 kW × 1.0 = 60 kW
Pumps: 15 kW × 1.0 = 15 kW
Dehumidification: 25 kW × 1.0 = 25 kW
Other: 20 kW × 0.75 = 15 kW
Total Demand: 215 kW

Service Size (with 25% future expansion):
215 kW × 1.25 = 269 kW

At 480V, 3-phase:
Current = 269,000 / (480 × √3 × 0.9 PF) = 359A

Select: 400A, 480V, 3-phase service
Cost: $15,000-25,000 installed
```

### 2.2 Power Quality and Correction

**Power Factor Correction:**
```
Uncorrected System:
Real power: 100 kW
Power factor: 0.75 (poor, due to motors)
Apparent power: 100 / 0.75 = 133 kVA
Current: 133,000 / (480 × √3) = 160A

Power Factor Penalty:
Many utilities charge for PF < 0.90
Penalty: 2-5% surcharge

With Power Factor Correction:
Capacitor bank: 40 kVAR
New power factor: 0.95
Apparent power: 100 / 0.95 = 105 kVA
Current: 105,000 / (480 × √3) = 127A

Benefits:
- Reduced current (20% reduction)
- Smaller wire sizes
- Lower losses
- Avoid utility penalties

Capacitor bank cost: $3,000-6,000
Annual savings: $1,200-2,400
Payback: 1.5-3 years
```

## 3. Renewable Energy Integration

### 3.1 Solar PV System Design

**Feasibility Analysis:**
```
Available roof space: 500 m² (if applicable)
Solar irradiance: 5.0 kWh/m²/day (moderate climate)
Panel efficiency: 20%
System efficiency: 85% (inverter, wiring losses)

Power generation:
Panel output: 350W per panel (2 m² each)
Panels that fit: 500 / 2 = 250 panels
Array capacity: 250 × 350W = 87.5 kW DC

Annual production:
Daily: 87.5 kW × 5.0 sun-hours × 0.85 = 372 kWh/day
Annual: 135,780 kWh/year

Offset: 135,780 / 365,000 total = 37% of consumption

Economics:
System cost: 87.5 kW × $2,500/kW = $218,750
Federal tax credit (30%): -$65,625
Net cost: $153,125

Annual savings: 135,780 kWh × $0.12 = $16,294
Simple payback: 153,125 / 16,294 = 9.4 years
25-year savings: $407,350 - $153,125 = $254,225

Challenges:
- Large upfront investment
- Space requirements
- Mismatch: Sun peaks midday, farm peaks during photoperiod
- Battery storage adds $50,000-100,000
```

### 3.2 Battery Energy Storage

**Battery Sizing:**
```
Goal: Shift solar generation to match demand

Solar production: 372 kWh/day
Consumption during solar hours: 250 kWh
Excess to store: 122 kWh
Consumption during non-solar: 115 kWh (evening)

Battery capacity needed: 115 kWh (to shift excess)
Depth of discharge: 80% (lithium)
Required capacity: 115 / 0.80 = 144 kWh

System specification:
Capacity: 150 kWh
Power rating: 50 kW (3-hour discharge)
Technology: Lithium iron phosphate (LiFePO₄)
Cycles: 5,000+ @ 80% DoD
Lifespan: 10-15 years

Cost: 150 kWh × $600/kWh = $90,000
Additional inverter: $15,000
Installation: $10,000
Total: $115,000

Economics:
Daily savings: 115 kWh × $0.12 = $13.80
Plus demand charge reduction: $10/day
Total daily: $23.80
Annual: $8,687

Payback: 115,000 / 8,687 = 13.2 years
(Marginal without incentives or high electricity rates)
```

## 4. Demand Management

### 4.1 Load Shifting Strategies

**Time-of-Use Optimization:**
```
Utility Rate Structure:
On-peak (2pm-8pm): $0.18/kWh, $25/kW demand
Mid-peak (8am-2pm, 8pm-11pm): $0.12/kWh, $15/kW
Off-peak (11pm-8am): $0.08/kWh, $10/kW

Current Operation (lights 6am-10pm):
On-peak: 6 hours × 100 kW = 600 kWh @ $0.18 = $108
Mid-peak: 10 hours × 100 kW = 1,000 kWh @ $0.12 = $120
Off-peak: 0 hours
Daily energy cost: $228

Optimized Operation (lights 11pm-3pm):
On-peak: 2 hours × 100 kW = 200 kWh @ $0.18 = $36
Mid-peak: 4 hours × 100 kW = 400 kWh @ $0.12 = $48
Off-peak: 10 hours × 100 kW = 1,000 kWh @ $0.08 = $80
Daily energy cost: $164

Savings: $228 - $164 = $64/day = $23,360/year

Implementation:
- Adjust lighting schedule (no capital cost)
- Verify crop response acceptable
- Monitor plant response

ROI: Immediate
```

### 4.2 Peak Demand Reduction

**Sequenced Startup:**
```
Problem: All equipment starts simultaneously at 6am
Peak inrush: 140 kW for 5 minutes
Demand charge based on peak: $25/kW

Solution: Stagger equipment startup
6:00 - Lights Zone 1: 25 kW
6:05 - Lights Zone 2: 25 kW
6:10 - Lights Zone 3: 25 kW
6:15 - Lights Zone 4: 25 kW
6:20 - HVAC systems: 30 kW
6:25 - All systems running: 110 kW

Peak inrush reduced to: 110 kW (vs. 140 kW)
Demand reduction: 30 kW

Monthly savings: 30 kW × $25 = $750
Annual savings: $9,000

Implementation cost: Programming only ($1,000)
Payback: Immediate
```

## 5. Energy Efficiency Improvements

### 5.1 LED Lighting Upgrades

**Efficiency Comparison:**
```
Current System:
LED efficacy: 2.5 μmol/J
Required PPFD: 250 μmol/m²/s
Power required: 100 kW
Annual energy: 584,000 kWh
Annual cost: $70,080

Upgraded System:
LED efficacy: 3.0 μmol/J (new generation)
Same PPFD: 250 μmol/m²/s
Power required: 83.3 kW (16.7% reduction)
Annual energy: 486,667 kWh
Annual cost: $58,400

Savings: $11,680/year
Upgrade cost: $180,000 (full replacement)
Payback: 15.4 years (not justified for energy alone)

However, if replacing at end of life:
Incremental cost: $30,000 (20% premium for high efficiency)
Payback: 2.6 years (justified)

Recommendation: Specify high-efficiency for new installs and replacements
```

### 5.2 HVAC Optimization

**Variable Speed Drives:**
```
Current: Fixed-speed fans and pumps
Baseline energy: 100,000 kWh/year
Cost: $12,000/year

With VFDs:
Average load: 65% of full speed
Power at 65%: 0.65³ = 0.275 (27.5% of full power)
New energy: 100,000 × 0.50 (weighted average) = 50,000 kWh/year
Cost: $6,000/year

VFD investment:
5 drives @ $2,500 each = $12,500
Installation: $2,500
Total: $15,000

Savings: $6,000/year
Payback: 2.5 years

Additional benefits:
- Soft starts (reduce electrical stress)
- Better control
- Reduced maintenance
```

**Heat Recovery:**
```
Waste heat available: 55 kW (from LED and HVAC)
Useful heat demand: 30 kW (hot water, space heat in winter)

Heat recovery system:
Heat exchangers: $8,000
Glycol loop and pumps: $6,000
Controls: $2,000
Installation: $4,000
Total: $20,000

Heat recovered: 30 kW × 2,000 hours/year = 60,000 kWh/year
Value: 60,000 kWh × $0.12 = $7,200/year

Payback: 20,000 / 7,200 = 2.8 years
```

## 6. Energy Monitoring and Management

### 6.1 Submetering Strategy

**Meter Placement:**
```
Main Meter (utility-owned)
    ↓
Facility Main Panel
    ↓
┌────────┬───────────┬──────────┬────────┐
│Lighting│   HVAC    │  Pumps   │  Other │
│ Meter  │   Meter   │  Meter   │  Meter │
└────────┴───────────┴──────────┴────────┘

Submeters (4 total):
Cost: $500 each × 4 = $2,000
Installation: $1,000
Annual cost: Minimal (integrated into BMS)

Benefits:
- Identify inefficiencies
- Verify savings from improvements
- Benchmark performance
- Detect equipment failures
- Allocate costs by department
```

### 6.2 Energy KPIs

**Key Metrics:**
```
Primary KPIs:
1. kWh per kg of production
   Target: <15 kWh/kg for leafy greens
   Calculation: Total energy / Total harvest

2. Energy Use Intensity (EUI)
   Target: <350 kWh/m²/year
   Calculation: Annual kWh / Growing area

3. Power Usage Effectiveness (PUE-VF)
   Target: <1.4
   Calculation: Total power / Growing systems power

4. Energy cost per kg
   Target: <$1.80/kg
   Calculation: Energy cost / Harvest weight

Benchmarking:
Track monthly and compare to:
- Historical performance (% improvement)
- Industry averages
- Facility design targets

Monthly Report:
- Energy consumption by system
- Cost by system
- KPIs vs. targets
- Anomalies or concerns
- Recommendations for improvement
```

## 7. Case Study: Comprehensive Energy System

**2,000 m² Vertical Farm Energy Design:**

```
Base System:
Lighting: 200 kW
HVAC: 120 kW
Other: 30 kW
Peak demand: 350 kW
Annual consumption: 1,825,000 kWh
Annual cost: $219,000

Efficiency Improvements:
1. High-efficiency LEDs: -$20,000/year
2. VFDs on HVAC: -$12,000/year
3. Heat recovery: -$14,000/year
4. Load shifting (TOU): -$35,000/year
5. Power factor correction: -$3,000/year
Total annual savings: $84,000/year

Investment Required:
High-efficiency LEDs: $50,000 (incremental)
VFDs: $30,000
Heat recovery: $40,000
Load shifting: $5,000 (programming)
PF correction: $8,000
Total investment: $133,000

Payback: 133,000 / 84,000 = 1.6 years

Renewable Energy Addition:
Solar PV: 150 kW system
Cost: $337,500 (after tax credit)
Production: 200,000 kWh/year
Savings: $24,000/year
Payback: 14.1 years

Final Performance:
Base cost: $219,000/year
After efficiency: $135,000/year (38% reduction)
After solar: $111,000/year (49% total reduction)
Energy per kg: Reduced from 18.3 to 11.5 kWh/kg
```

## 8. Key Takeaways

1. **Lighting dominates consumption** - Focus efficiency efforts here first
2. **Demand charges matter** - Peak reduction saves substantially
3. **Load shifting is often free money** - Adjust schedules to match lower rates
4. **VFDs have fast payback** - Nearly always justified for variable loads
5. **Solar economics vary widely** - Location, rates, and incentives determine viability
6. **Batteries remain expensive** - Only justified with high demand charges or unreliable grid
7. **Monitor to manage** - Submetering enables identification of savings opportunities

## 9. Practical Exercise

Design energy system for:
- 1,200 m² vertical farm
- 120 kW connected load
- Utility rate: $0.14/kWh, $20/kW demand
- Available roof: 300 m² for solar

Deliverables:
1. Energy consumption analysis
2. Power distribution design
3. Solar PV sizing and economics
4. Efficiency improvement recommendations
5. ROI calculations for all measures

## Additional Resources

- ASHRAE Advanced Energy Design Guides
- U.S. DOE Better Buildings Program
- Database of State Incentives for Renewables & Efficiency (DSIRE)
- Energy modeling software (RETScreen, SAM)

## Next Module

**Module 10: Automation and Robotics Integration** - Implement advanced automation for labor efficiency and consistency.

---

**Module 9 Complete** - Proceed to Module 9 Quiz.
