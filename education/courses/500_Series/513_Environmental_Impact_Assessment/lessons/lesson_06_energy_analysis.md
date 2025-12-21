# Lesson 6: Energy Analysis and Modeling

**Course:** 513 - Environmental Impact Assessment
**Module:** 6 of 14
**Duration:** Week 6
**Learning Time:** 8-10 hours

## Learning Objectives

1. Conduct comprehensive energy audits for CEA facilities
2. Apply energy balance and exergy analysis methods
3. Use energy modeling software (EnergyPlus, OpenStudio)
4. Calculate energy use intensity and performance metrics
5. Design renewable energy integration strategies
6. Optimize energy consumption through system analysis
7. Evaluate energy efficiency improvement opportunities

## 1. Energy Analysis Fundamentals

### 1.1 Energy Balance Equation

```
Energy In = Energy Out + Energy Stored + Energy Losses

For CEA facilities:
Electricity + Natural Gas + Solar = Lighting + HVAC + Equipment + Losses + Storage
```

### 1.2 Energy Use Categories

**Lighting:** Typically 40-60% of total energy in vertical farms
**HVAC:** 20-35% of total energy
**Water Systems:** 5-10% (pumps, treatment)
**Dehumidification:** 10-20%
**Controls and Monitoring:** 2-5%
**Auxiliary Systems:** 5-10%

### 1.3 Energy Intensity Metrics

```
Energy Use Intensity (EUI) = Total energy (kWh) / Floor area (m²) / year
Typical CEA: 500-1,500 kWh/m²/year

Production Intensity = Energy (kWh) / Production (kg)
Vertical farm lettuce: 15-30 kWh/kg
Greenhouse tomato: 5-15 kWh/kg
Field lettuce: 0.5-2 kWh/kg (primarily transportation)

Energy Productivity = Production (kg) / Energy (kWh)
Target: Maximize this ratio
```

## 2. Energy Auditing

### 2.1 Audit Levels

**Level 1 - Walk-Through:**
- Visual inspection
- Utility bill analysis
- Quick wins identification
- Cost: $0.10-0.30/sq ft

**Level 2 - Detailed Survey:**
- Metering and monitoring
- System-by-system analysis
- Energy model development
- ROI calculations
- Cost: $0.30-0.80/sq ft

**Level 3 - Investment-Grade:**
- Comprehensive data logging
- Detailed engineering analysis
- Sub-metering installation
- Uncertainty quantification
- Cost: $0.80-2.00/sq ft

### 2.2 Data Collection

**Utility Data (12+ months):**
- Electricity consumption (kWh) and demand (kW)
- Natural gas consumption (therms or m³)
- Water consumption
- Peak demand charges and time-of-use rates

**Operational Data:**
- Production schedules and quantities
- Climate setpoints and control strategies
- Equipment inventory and specifications
- Maintenance records

**Sub-Metering:**
- Lighting circuits
- HVAC systems
- Critical loads vs. non-critical
- Individual growing zones

## 3. Energy Balance Calculations

### 3.1 Lighting Energy Balance

```
Light energy in = PAR absorbed + Heat generated

Example:
LED input: 600W fixture
Efficacy: 3.0 μmol/J
Photosynthetic efficiency: ~3%

Useful PAR energy = 600W × 0.03 = 18W
Heat to environment = 600W - 18W = 582W

Heat load from lighting = Total LED watts × 0.97
```

### 3.2 HVAC Load Calculations

**Sensible Heat Load:**
```
Q_sensible = Σ(Lighting heat + Equipment heat + Infiltration + Transmission + Solar)

Example calculation:
- Lighting: 200 kW × 0.97 = 194 kW
- Equipment: 20 kW
- Infiltration: 0.5 ACH × Volume × ρ × Cp × ΔT = 15 kW
- Transmission: U × A × ΔT = 25 kW
- Solar (greenhouse): SHGC × Area × Solar radiation = 30 kW
Total sensible: 284 kW
```

**Latent Heat Load:**
```
Q_latent = Evapotranspiration × Latent heat of vaporization

Example:
ET rate: 50 L/hr = 50 kg/hr
Latent heat: 2,260 kJ/kg = 0.628 kWh/kg

Q_latent = 50 × 0.628 = 31.4 kW
```

**Total Cooling Load:** 284 + 31.4 = 315.4 kW

**Dehumidification Energy:**
```
Dehumidification = Latent load / COP_dehumidification

With COP = 3.5:
Dehumidification energy = 31.4 / 3.5 = 9.0 kW
```

### 3.3 Annual Energy Consumption Model

```
Annual energy = Σ(Load × Hours × Efficiency factor)

Example vertical farm (10,000 m²):
- Lighting: 200 kW × 6,000 hr/yr = 1,200,000 kWh/yr
- Cooling: 315 kW × 4,000 hr/yr / 3.5 COP = 360,000 kWh/yr
- Dehumidification: 9 kW × 6,000 hr/yr = 54,000 kWh/yr
- Pumps: 15 kW × 8,000 hr/yr = 120,000 kWh/yr
- Controls: 10 kW × 8,760 hr/yr = 87,600 kWh/yr
- Other: 50,000 kWh/yr

Total: 1,871,600 kWh/yr
EUI: 187 kWh/m²/yr
```

## 4. Exergy Analysis

### 4.1 Exergy Concept

Exergy = Maximum useful work obtainable from system
Unlike energy, exergy is destroyed through irreversibilities

**Exergy Efficiency:**
```
η_exergy = Exergy output / Exergy input

For photosynthesis in CEA:
Light exergy in: ~95% of radiation
Plant biomass exergy: ~3% (stored chemical energy)
Exergy efficiency: ~3%

Remaining 97% destroyed as heat (entropy generation)
```

### 4.2 Second Law Analysis

**Quality of Energy:**
- Electricity: High quality (exergy ≈ energy)
- Heat at 30°C: Low quality (exergy << energy)
- Light (400-700 nm): Very high quality

**CEA Exergy Destruction:**
```
Major sources of exergy destruction:
1. LED conversion (40-50% of total)
2. HVAC heat rejection (20-30%)
3. Photosynthesis (10-15%)
4. Electrical-to-thermal conversion (10-15%)
5. Mixing and friction (5-10%)
```

**Implications:**
- Minimize high-quality electricity use for heating (use waste heat or direct solar)
- Recover and reuse waste heat
- Match energy quality to end-use requirements

## 5. Energy Modeling Software

### 5.1 EnergyPlus

**Applications:**
- Whole-building energy simulation
- Hour-by-hour simulation
- Climate file integration
- HVAC system modeling

**CEA Modeling Approach:**
```
1. Define geometry and zones
2. Set internal loads (lighting, equipment)
3. Configure HVAC systems
4. Set schedules (lighting, climate)
5. Run annual simulation
6. Analyze results (energy by end-use, peak demand)
```

**Key Inputs for CEA:**
- Lighting power density (W/m²)
- Lighting schedule (16/8, 18/6, etc.)
- Cooling/heating setpoints
- Envelope properties (U-values, SHGC)
- Ventilation/infiltration rates
- Equipment loads

### 5.2 OpenStudio

Graphical interface for EnergyPlus

**Workflow:**
1. Create 3D geometry in SketchUp or import
2. Assign space types and loads
3. Configure HVAC systems from library
4. Define control strategies
5. Run simulation
6. Visualize results in ResultsViewer

### 5.3 Validation and Calibration

**Model calibration to measured data:**

```
Normalized Mean Bias Error (NMBE):
NMBE = (Σ(modeled - measured) / measured) / n × 100%

ASHRAE Guideline 14 tolerance:
Monthly calibration: ±5% NMBE
Hourly calibration: ±10% NMBE

Coefficient of Variation of Root Mean Squared Error (CV-RMSE):
CV-RMSE = RMSE / mean_measured × 100%

Tolerance:
Monthly: 15% CV-RMSE
Hourly: 30% CV-RMSE
```

## 6. Renewable Energy Integration

### 6.1 Solar PV Potential

**Sizing calculation:**
```
Annual production (kWh) = System size (kW) × Capacity factor × 8,760 hr

Example:
Roof area: 5,000 m² (50,000 sq ft facility)
Available for PV: 80% = 4,000 m²
Panel efficiency: 20%
Peak sun hours: 4.5/day (location-dependent)
System losses: 15%

System size = 4,000 m² × 0.20 × 1 kW/m² × 0.85 = 680 kW
Annual production = 680 kW × 4.5 hr/day × 365 day/yr = 1,118,700 kWh/yr

Facility consumption: 1,871,600 kWh/yr
Solar coverage: 1,118,700 / 1,871,600 = 60%
```

**Economic Analysis:**
```
Capital cost: 680 kW × $2,000/kW = $1,360,000
Annual savings: 1,118,700 kWh × $0.12/kWh = $134,244
Simple payback: $1,360,000 / $134,244 = 10.1 years
With incentives (30% ITC): 7.1 years
```

### 6.2 Wind Energy

**Feasibility assessment:**
```
Power = 0.5 × ρ × A × V³ × Cp × η

Where:
ρ = Air density (1.225 kg/m³)
A = Rotor swept area (m²)
V = Wind speed (m/s)
Cp = Power coefficient (0.35-0.45)
η = System efficiency (0.85-0.95)

Example:
100 kW turbine, 21m rotor diameter
Area = π × (10.5)² = 346 m²
Average wind speed: 6 m/s
Cp = 0.40, η = 0.90

Power = 0.5 × 1.225 × 346 × 6³ × 0.40 × 0.90 = 33 kW average

Capacity factor = 33 / 100 = 33%
Annual production = 100 kW × 0.33 × 8,760 hr = 289,080 kWh

Economic feasibility depends on local wind resource and turbine costs
```

### 6.3 Combined Heat and Power (CHP)

**For greenhouses with heating needs:**

```
Natural gas input: 1,000 kW (LHV)
Electrical output: 350 kW (35% efficiency)
Heat recovery: 500 kW (50% efficiency)
Total efficiency: 85%

vs. separate production:
Grid electricity: 35% efficiency (power plant)
Boiler heat: 85% efficiency

CHP primary energy savings: ~30%
```

## 7. Energy Optimization Strategies

### 7.1 Lighting Optimization

**LED Efficacy Improvement:**
```
Current: 2.5 μmol/J
Upgraded: 3.5 μmol/J
Savings: (3.5 - 2.5) / 3.5 = 29%

Annual savings = 1,200,000 kWh × 0.29 = 348,000 kWh
Cost savings = 348,000 × $0.12 = $41,760/yr
```

**Light Recipe Optimization:**
```
Reducing Daily Light Integral (DLI) from 17 to 15 mol/m²/day:
Reduction: 12%
Production impact: Minimal for leafy greens if managed properly
Energy savings: 1,200,000 × 0.12 = 144,000 kWh/yr
```

**Dynamic Lighting Control:**
```
Strategies:
- Dim lighting during cooler periods (reduce HVAC load)
- Match instantaneous solar radiation (greenhouse supplemental lighting)
- Adjust spectrum based on growth stage

Potential savings: 10-20%
```

### 7.2 HVAC Optimization

**Variable Frequency Drives (VFD):**
```
Fan affinity laws:
Power ∝ Speed³

Reducing fan speed 20%:
Power reduction = 1 - (0.80)³ = 49%

If HVAC fans represent 50 kW average:
Savings = 50 kW × 0.49 × 4,000 hr/yr = 98,000 kWh/yr
```

**Heat Recovery:**
```
Waste heat from lighting: 194 kW
Heat recovery efficiency: 70%
Recoverable heat: 194 × 0.70 = 136 kW

Heating season hours: 3,000 hr/yr
Heat recovered: 136 kW × 3,000 hr = 408,000 kWh_thermal

If replacing natural gas heating (85% efficient):
Natural gas savings = 408,000 / 0.85 = 480,000 kWh_thermal
= 480,000 / 10.37 kWh/m³ = 46,280 m³ natural gas
Cost savings = 46,280 m³ × $0.50/m³ = $23,140/yr
Carbon savings = 46,280 × 1.91 kg CO₂/m³ = 88,400 kg CO₂/yr
```

**Thermal Energy Storage:**
```
Shift cooling load to off-peak hours:
Peak rate: $0.20/kWh
Off-peak rate: $0.08/kWh
Savings: $0.12/kWh

If 40% of cooling shifted to off-peak:
Annual cooling: 360,000 kWh
Shifted: 144,000 kWh
Cost savings = 144,000 × $0.12 = $17,280/yr
```

### 7.3 System Integration

**Holistic Optimization:**

```
Strategy: Adjust lighting spectrum to reduce heat generation
- Shift from white LEDs (more heat) to red/blue (more PAR per watt)
- Lighting heat reduction: 5%
- Cooling load reduction: 5% × 194 kW = 9.7 kW
- HVAC energy savings: 9.7 kW × 4,000 hr / 3.5 COP = 11,086 kWh/yr

Combined with:
- VFD on HVAC: 98,000 kWh/yr
- Heat recovery: Net positive
- Thermal storage: $17,280/yr cost savings
- LED upgrade: 348,000 kWh/yr

Total savings: >450,000 kWh/yr (24% reduction)
Cost savings: >$54,000/yr
Payback: 3-5 years depending on capital cost
```

## 8. Benchmarking and Performance Tracking

### 8.1 Energy Performance Indicators

```
KPI                              Target              Calculation
─────────────────────────────────────────────────────────────────
Energy Use Intensity (EUI)       <200 kWh/m²/yr     Total kWh / Area
Production Intensity             <20 kWh/kg          Total kWh / Production
Lighting Efficiency              >3.0 μmol/J         LED fixture rating
HVAC COP                         >3.5                Cooling output / Input
Renewable Energy %               >50%                RE kWh / Total kWh
Peak Demand Management           <80% of peak        Avg demand / Peak demand
```

### 8.2 Continuous Monitoring

**Real-Time Dashboards:**
- Total facility power (kW)
- Power by end-use category
- Energy per growing zone
- Comparison to baseline/target
- Anomaly detection

**Monthly Reporting:**
- kWh and kW trends
- Production-normalized metrics
- Cost analysis
- Savings verification

## 9. Case Study: Energy Optimization Project

**Baseline Facility Performance:**
- 50,000 sq ft vertical farm
- Annual energy: 1,871,600 kWh
- EUI: 187 kWh/m²
- Production: 500,000 kg lettuce
- Energy intensity: 3.74 kWh/kg
- Annual cost: $224,592 ($0.12/kWh)

**Optimization Measures Implemented:**

| Measure | Energy Savings (kWh/yr) | Cost Savings ($/yr) | Investment ($) | Payback (yr) |
|---------|-------------------------|---------------------|----------------|--------------|
| LED upgrade | 348,000 | 41,760 | 150,000 | 3.6 |
| VFD on HVAC | 98,000 | 11,760 | 35,000 | 3.0 |
| Heat recovery | 0* | 23,140** | 120,000 | 5.2 |
| Building insulation | 75,000 | 9,000 | 50,000 | 5.6 |
| Controls optimization | 45,000 | 5,400 | 15,000 | 2.8 |
| Solar PV (500 kW) | 821,250*** | 98,550 | 900,000 | 9.1 |

*Heat recovery reduces natural gas, not electricity
**Natural gas cost savings
***Net generation after consumption reduction

**Post-Optimization Performance:**
- Annual energy: 1,305,600 kWh (30% reduction)
- Less solar generation: 484,350 kWh net from grid (74% reduction in grid dependence)
- EUI: 130 kWh/m²
- Energy intensity: 2.61 kWh/kg (30% improvement)
- Annual cost: $58,122 (74% reduction)
- Carbon footprint: Reduced from 281 to 73 tonnes CO₂/yr (74% reduction)

**Total Investment:** $1,270,000
**Annual Savings:** $189,610 (energy + gas)
**Simple Payback:** 6.7 years
**NPV (20-year, 5% discount):** $1,094,000
**IRR:** 11.2%

## Summary

Energy analysis and modeling provide systematic approaches to understanding, predicting, and optimizing CEA facility energy performance. Key strategies include LED efficiency improvements, HVAC optimization, heat recovery, renewable energy integration, and holistic system design. Energy modeling software enables scenario comparison and performance prediction. Continuous monitoring and benchmarking drive ongoing improvement.

## Key Takeaways

1. Lighting typically represents 40-60% of energy use in vertical farms
2. Energy balance calculations quantify all energy flows and losses
3. Exergy analysis reveals thermodynamic efficiency and improvement potential
4. EnergyPlus/OpenStudio enable comprehensive building energy simulation
5. Solar PV can provide 50-100% of energy needs depending on roof area and location
6. LED efficacy improvements offer 20-30% energy savings with short payback
7. Heat recovery from lighting reduces heating costs significantly
8. System integration yields greater savings than individual measures
9. Benchmarking against targets drives continuous improvement
10. Energy optimization typically achieves 25-40% savings with 3-7 year payback

## Review Questions

1. Calculate annual lighting energy for 300 kW LED system operating 16 hr/day, 365 days/year.
2. What is exergy and why is it useful for CEA energy analysis?
3. Explain the fan affinity laws and calculate power savings from 25% speed reduction.
4. Describe the EnergyPlus modeling workflow for a vertical farm facility.
5. Size a rooftop solar PV system for a 10,000 m² facility in your region.
6. Calculate heat recovery potential from 250 kW of LED lighting with 60% recovery efficiency.
7. What are the top 5 energy efficiency measures for CEA and typical paybacks?
8. Compare energy intensity (kWh/kg) for vertical farm lettuce vs. greenhouse tomato. Why different?
9. Explain thermal energy storage and its application to demand management.
10. Develop a comprehensive energy optimization plan targeting 30% reduction.

## Additional Resources

- EnergyPlus: energyplus.net
- OpenStudio: openstudio.net
- ASHRAE Handbook - HVAC Applications (Chapter on Agricultural Facilities)
- DOE Commercial Reference Buildings
- NREL System Advisor Model (SAM) for renewable energy
- ISO 50001 Energy Management Systems

---

**Next Lesson:** Lesson 7 - Waste and Emissions Assessment
