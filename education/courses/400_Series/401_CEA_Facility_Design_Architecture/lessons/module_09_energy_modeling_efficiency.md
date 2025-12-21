# Module 9: Energy Modeling and Efficiency Optimization

## Learning Objectives

By the end of this module, you will be able to:
- Apply energy modeling methodologies and software
- Conduct baseline energy consumption analysis
- Develop efficiency improvement strategies
- Integrate renewable energy systems
- Perform economic analysis and payback calculations

## 9.1 Energy Modeling Methodologies

### Energy Modeling Software and Approaches

```
ENERGY MODELING SOFTWARE OPTIONS
=================================

PROFESSIONAL TOOLS:
──────────────────

1. eQUEST (Free, DOE-2 based)
   ├─ Quick energy modeling
   ├─ Schematic design tool
   ├─ LEED compliance
   └─ Good for early-stage analysis

2. EnergyPlus (Free, DOE)
   ├─ Detailed simulation engine
   ├─ Hour-by-hour analysis
   ├─ Research-grade accuracy
   └─ Steep learning curve

3. IES-VE (Commercial)
   ├─ Comprehensive BIM integration
   ├─ Daylighting analysis
   ├─ CFD capabilities
   └─ High cost ($5,000-20,000)

4. TRACE 700 / Trane TRACE 3D Plus (Commercial)
   ├─ HVAC-focused
   ├─ Load calculations + energy
   ├─ Equipment selection
   └─ Trane-specific

5. DesignBuilder (Commercial)
   ├─ EnergyPlus front-end
   ├─ User-friendly interface
   ├─ Good visualization
   └─ Medium cost ($1,500-5,000)

CEA-SPECIFIC CHALLENGES:
════════════════════════

Standard software assumptions may not fit:
├─ Very high internal loads (lighting)
├─ High humidity control requirements
├─ Specialty HVAC systems
├─ Non-standard schedules
└─ Custom equipment

Solution: Hybrid approach
├─ Use software for building envelope
├─ Custom calculations for processes
├─ Validate with metered data
└─ Calibrate models to actual performance
```

### Building an Energy Model

```
ENERGY MODEL INPUTS
===================

1. GEOMETRY AND ENVELOPE
   ├─ Building dimensions and orientation
   ├─ Wall/roof/floor constructions (R-values)
   ├─ Window areas and properties (U-value, SHGC)
   ├─ Infiltration rates (ACH or CFM/sq ft)
   └─ Thermal mass properties

2. OCCUPANCY AND SCHEDULES
   ├─ Operating hours by space
   ├─ Occupant density (people/sq ft)
   ├─ Equipment schedules (on/off times)
   └─ Seasonal variations

3. INTERNAL LOADS
   ├─ Lighting (W/sq ft, schedule)
   ├─ Equipment (W/sq ft or total kW)
   ├─ People (sensible/latent heat)
   └─ Process loads (custom)

4. HVAC SYSTEMS
   ├─ System type (VAV, constant volume, etc.)
   ├─ Equipment efficiencies (EER, COP, AFUE)
   ├─ Control strategies (setpoints, schedules)
   ├─ Fan power (W/CFM)
   └─ Distribution losses

5. DOMESTIC HOT WATER
   ├─ Usage (gallons/day)
   ├─ Heater type and efficiency
   └─ Distribution system

6. RENEWABLE ENERGY (if applicable)
   ├─ Solar PV (kW, orientation, tilt)
   ├─ Solar thermal
   └─ Other renewables

7. UTILITY RATES
   ├─ Electricity ($/kWh, demand charges)
   ├─ Natural gas ($/therm)
   └─ Water/sewer ($/gallon)

8. WEATHER DATA
   ├─ TMY3 (Typical Meteorological Year)
   ├─ Location-specific
   └─ From NOAA, DOE websites
```

**EXAMPLE: VERTICAL FARM ENERGY MODEL SETUP**

```
Facility: 40,000 sq ft vertical farm, Phoenix, AZ
═══════════════════════════════════════════════════

GEOMETRY:
─────────
Dimensions: 200 ft × 200 ft × 20 ft high
Walls: R-25 insulated metal panels
Roof: R-30 + cool roof coating
Floor: Slab on grade, R-10 perimeter
Windows: Minimal (office only), 5% wall area
Infiltration: 0.15 ACH (tight construction)

SCHEDULES:
──────────
Growing areas: 24/7 operation
Lights: 18 hours/day (6am-midnight)
HVAC: 24/7
Offices: M-F, 8am-6pm

INTERNAL LOADS:
───────────────
LED lighting: 2,100 kW (8,400 kW installed × 0.25 use factor)
HVAC fans: 120 kW
Pumps: 30 kW
Computers/controls: 15 kW
People: 20 people × 250 BTU/hr = 5,000 BTU/hr (1.5 kW)

HVAC SYSTEM:
────────────
Type: Custom air handling (model as constant volume)
Cooling: 700 tons, EER = 11.0 (air-cooled chillers)
Heating: Minimal (Phoenix climate)
Dehumidification: 6 units @ 15 kW each = 90 kW
Supply fans: 150,000 CFM @ 0.8 W/CFM = 120 kW
Controls: Temperature + humidity setpoints

UTILITY RATES:
──────────────
Electricity: $0.11/kWh energy
            $15/kW demand (summer)
Natural gas: $0.85/therm
Water: $4.50/1000 gallons

WEATHER:
────────
Location: Phoenix Sky Harbor Airport
TMY3 data: 724830
Design temps: 111°F (summer), 34°F (winter)
```

## 9.2 Baseline Energy Consumption Analysis

### Energy Use Intensity (EUI) Benchmarks

```
TYPICAL EUI FOR CEA FACILITIES
===============================

Energy Use Intensity = Annual energy use (kBTU) / Floor area (sq ft)

GREENHOUSES (by climate):
────────────────────────
┌────────────────┬─────────────┬──────────────┐
│ Climate Zone   │ EUI Range   │ Primary Use  │
├────────────────┼─────────────┼──────────────┤
│ Cold (zones    │ 200-400     │ Heating dom. │
│  6-7)          │ kBTU/sf/yr  │              │
│                │             │              │
│ Mixed (zones   │ 150-300     │ Heating +    │
│  4-5)          │ kBTU/sf/yr  │ cooling      │
│                │             │              │
│ Hot (zones     │ 100-250     │ Cooling dom. │
│  1-3)          │ kBTU/sf/yr  │              │
└────────────────┴─────────────┴──────────────┘

VERTICAL FARMS (indoor):
────────────────────────
┌────────────────┬─────────────┬──────────────┐
│ Crop Type      │ EUI Range   │ Dominated by │
├────────────────┼─────────────┼──────────────┤
│ Leafy greens   │ 500-800     │ Lighting 70% │
│                │ kBTU/sf/yr  │ HVAC 25%     │
│                │             │              │
│ Herbs          │ 400-700     │ Lighting 65% │
│                │ kBTU/sf/yr  │ HVAC 30%     │
│                │             │              │
│ Fruiting crops │ 800-1,500   │ Lighting 75% │
│ (tomato, etc.) │ kBTU/sf/yr  │ HVAC 20%     │
└────────────────┴─────────────┴──────────────┘

ENERGY COST INTENSITY (ECI):
════════════════════════════

ECI = Annual energy cost ($) / Floor area (sq ft)

Typical ranges:
├─ Greenhouse: $3-10/sq ft/yr
├─ Vertical farm (leafy greens): $15-30/sq ft/yr
└─ Vertical farm (fruiting): $25-50/sq ft/yr

For vertical farm example (40,000 sf):
Annual energy use ≈ 25,000,000 kWh
EUI = 25,000,000 kWh × 3,412 BTU/kWh / 40,000 sf
    = 2,132 kBTU/sf/yr (high, but typical for VF)

ECI = 25,000,000 kWh × $0.11/kWh / 40,000 sf
    = $68.75/sq ft/yr
```

### Energy End-Use Breakdown

```
ENERGY END-USE ANALYSIS
=======================

VERTICAL FARM EXAMPLE:
══════════════════════

Total annual energy: 25,000,000 kWh

End-Use Breakdown:
┌──────────────────┬──────────┬─────────┬────────┐
│ End Use          │ kWh/year │ Percent │ $/year │
├──────────────────┼──────────┼─────────┼────────┤
│ LED Lighting     │17,000,000│  68.0%  │$1,870k │
│ Cooling          │ 4,200,000│  16.8%  │$ 462k  │
│ Fans (HVAC)      │ 1,400,000│   5.6%  │$ 154k  │
│ Dehumidification │   750,000│   3.0%  │$  83k  │
│ Pumps            │   650,000│   2.6%  │$  72k  │
│ Refrigeration    │   600,000│   2.4%  │$  66k  │
│ Controls/IT      │   250,000│   1.0%  │$  28k  │
│ Other            │   150,000│   0.6%  │$  17k  │
├──────────────────┼──────────┼─────────┼────────┤
│ TOTAL            │25,000,000│ 100.0%  │$2,750k │
└──────────────────┴──────────┴─────────┴────────┘

Energy Cost: $2.75 million/year

IMPLICATIONS FOR EFFICIENCY:
════════════════════════════

Priority Ranking for Improvement:
1. LIGHTING (68% of load)
   - Highest impact opportunity
   - LED efficacy improvements
   - Spectrum optimization
   - Light distribution

2. COOLING (17% of load)
   - Second priority
   - Equipment efficiency
   - Heat recovery
   - Controls optimization

3. FANS (6% of load)
   - VFD implementation
   - Duct design optimization
   - Demand-based ventilation

4. Other systems (9% combined)
   - Incremental improvements
   - Monitor for issues
```

## 9.3 Efficiency Improvement Strategies

### Envelope Improvements

```
ENVELOPE EFFICIENCY MEASURES
=============================

INSULATION UPGRADES:
────────────────────

Cost-Benefit Analysis Example:

Base case: R-20 walls
Upgrade: R-30 walls
Additional cost: $2.50/sq ft

Energy savings calculation:
Wall area: 8,000 sq ft
Heat transfer reduction:
ΔU = 1/20 - 1/30 = 0.050 - 0.033 = 0.017 BTU/hr·ft²·°F

Annual heating load reduction (example climate):
Heating degree days: 5,000 HDD
Hours: 5,000 × 24 = 120,000 degree-hours
Savings = 0.017 × 8,000 × 120,000 = 16,320,000 BTU/yr
        = 163 therms/yr

Cost savings: 163 therms × $0.85 = $139/year
Additional investment: $2.50 × 8,000 = $20,000
Simple payback: 144 years → NOT JUSTIFIED

Conclusion: For CEA with high internal loads,
envelope insulation beyond code minimum often
not cost-effective. Focus on other measures.

AIR SEALING:
────────────

Often more cost-effective than added insulation

Base: 0.25 ACH (typical construction)
Target: 0.10 ACH (tight construction)
Cost: $5,000 (blower door testing + sealing)

Infiltration reduction:
Volume: 40,000 sf × 20 ft = 800,000 cu ft
ΔInfiltration = (0.25 - 0.10) × 800,000 / 60
              = 2,000 CFM

Heating energy saved:
2,000 CFM × 1.08 × (70°F - outdoor temp) × hours
For 5,000 HDD: ≈ 150,000 kWh or 1,500 therms
Savings: 1,500 × $0.85 = $1,275/year
Payback: 3.9 years → JUSTIFIED
```

### Lighting Efficiency

```
LIGHTING EFFICIENCY STRATEGIES
===============================

1. LED EFFICACY IMPROVEMENTS
   ════════════════════════════

   Current technology: 2.5 μmol/J
   Advanced LED: 3.0 μmol/J (+20% efficiency)
   Emerging: 3.5+ μmol/J (+40% potential)

   For 17,000,000 kWh lighting load:
   20% improvement = 3,400,000 kWh savings
   Value: 3,400,000 × $0.11 = $374,000/year

   Incremental cost: ~$200,000 (better LEDs)
   Payback: 0.5 years → HIGHLY JUSTIFIED

2. SPECTRUM OPTIMIZATION
   ══════════════════════

   Eliminate unused wavelengths (green)
   Focus on photosynthetically active regions
   Potential: 5-10% energy reduction
   While maintaining or improving growth

3. DYNAMIC LIGHTING CONTROL
   ═════════════════════════

   DLI-based control:
   - Integrate outdoor light (greenhouses)
   - Dim to maintain target DLI
   - Potential: 20-40% savings (GH)

   Photoperiod optimization:
   - Match plant requirements exactly
   - Sunrise/sunset ramping
   - Potential: 5-10% savings

4. IMPROVED LIGHT DISTRIBUTION
   ═══════════════════════════

   Reduce spacing, lower mounting height
   - Better uniformity
   - Less total light needed
   - 10-15% reduction potential

   Reflective surfaces:
   - White walls/ceilings
   - Reflective mulch
   - 5-10% reduction potential
```

### HVAC Efficiency

```
HVAC EFFICIENCY MEASURES
========================

1. HIGH-EFFICIENCY EQUIPMENT
   ═════════════════════════

   Chiller upgrade example:
   ────────────────────────
   Existing: 700 tons @ 11 EER
   Upgrade: 700 tons @ 14 EER (+27% efficiency)

   Annual cooling: 4,200,000 kWh
   New consumption: 4,200,000 / 1.27 = 3,307,000 kWh
   Savings: 893,000 kWh/year
   Value: 893,000 × $0.11 = $98,230/year

   Incremental cost: ~$150,000
   Payback: 1.5 years → JUSTIFIED

2. VARIABLE FREQUENCY DRIVES (VFDs)
   ════════════════════════════════

   Fan energy: 1,400,000 kWh/year (constant speed)

   With VFDs and demand-based control:
   Average speed: 80% (typical)
   Power = (0.80)³ = 51% (fan laws)
   New consumption: 714,000 kWh/year
   Savings: 686,000 kWh/year
   Value: $75,460/year

   VFD cost (10 units × $3,000): $30,000
   Controls: $20,000
   Total: $50,000
   Payback: 0.7 years → HIGHLY JUSTIFIED

3. ECONOMIZER OPERATION
   ════════════════════

   Free cooling when outdoor conditions suitable
   Applicable in moderate climates

   Phoenix example: Limited benefit (hot/dry)
   Boston example: 500-1,000 hours/year
   Potential savings: 10-20% of cooling

4. HEAT RECOVERY
   ═════════════

   Exhaust air energy recovery:
   50,000 CFM exhaust, 8,000 hours/year
   Enthalpy difference: 5 BTU/lb average
   Energy recovered: 5 × 50,000 × 0.075 × 8,000
                   = 150,000,000 BTU/year

   ERV cost: $80,000
   Savings: $15,000-20,000/year
   Payback: 4-5 years → JUSTIFIED (marginal)
```

## 9.4 Renewable Energy Integration

### Solar Photovoltaic Systems

```
SOLAR PV DESIGN FOR CEA
=======================

SYSTEM SIZING:
──────────────

Available roof area: 40,000 sq ft
Usable area (accounting for equipment): 30,000 sf
Module efficiency: 20%
System efficiency: 85% (inverter, wiring losses)

Array capacity:
30,000 sf × 0.2 × 0.85 × 0.0929 kW/sf = 474 kW DC
AC capacity: 474 × 0.85 = 403 kW AC

Annual production (Phoenix):
Solar resource: 6.5 kWh/m²/day (excellent)
Capacity factor: ~22% (with tracking better)
Annual: 403 kW × 8,760 hr × 0.22 = 775,000 kWh/yr

Percent of facility load:
775,000 / 25,000,000 = 3.1% (limited roof area!)

ECONOMICS:
──────────

System cost: $2.50/W × 403,000 W = $1,007,500
Federal ITC (30%): -$302,250
Net cost: $705,250

Annual value: 775,000 kWh × $0.11 = $85,250
Simple payback: 8.3 years
With incentives: May improve to 5-7 years

LIMITATIONS FOR VERTICAL FARMS:
═══════════════════════════════

Solar can only provide 3-5% of energy needs
(Roof area << energy consumption)

Strategies:
├─ Off-site solar (community solar, PPAs)
├─ Grid procurement (renewable energy credits)
├─ Focus on efficiency first
└─ Solar as supplemental, not primary solution

GREENHOUSE SOLAR CONSIDERATIONS:
════════════════════════════════

Challenge: Roof needed for light transmission!

Solutions:
├─ Semi-transparent PV modules (10-30% transparent)
│   └─ Reduce total light but provide power
├─ Ground-mount systems (if land available)
├─ Roof-mount on support buildings (headhouse)
└─ Building-integrated PV (BIPV)
```

### Other Renewable Energy Options

```
ALTERNATIVE RENEWABLE ENERGY
============================

WIND POWER:
───────────

Site requirements:
├─ Average wind speed >6 m/s (13 mph)
├─ Minimal obstructions
├─ Suitable zoning
└─ Grid connection

Small turbines (10-100 kW):
├─ Cost: $40,000-300,000
├─ Capacity factor: 15-25% (typical)
├─ Economics: Often not competitive with solar
└─ Permitting challenges

Large turbines (>1 MW):
├─ Better economics (scale)
├─ Requires significant land
├─ May be feasible for large greenhouse sites
└─ Consider off-site PPA instead

GEOTHERMAL (GSHP):
──────────────────

Ground-source heat pumps:
├─ Excellent for heating-dominated greenhouses
├─ COP: 3.5-4.5 (heating), 4.0-5.0 (cooling)
├─ Reduces peak loads
└─ High capital cost, long payback

Greenhouse application:
Bore fields under growing areas
Winter heating, summer cooling
Cost: $15-25 per sq ft greenhouse
Payback: 8-15 years (climate dependent)

Best for: Cold climates, new construction

BIOMASS/BIOGAS:
───────────────

Crop waste to energy:
├─ Anaerobic digestion → biogas → electricity/heat
├─ Direct combustion → heat
└─ Gasification → syngas → power

Feasibility depends on:
├─ Volume of waste generated
├─ Consistent feedstock
├─ Capital investment ($500k-5M)
└─ Operations expertise

More common: Large greenhouse operations
             with significant organic waste

COMBINED HEAT AND POWER (CHP):
═══════════════════════════════

Natural gas → electricity + heat + CO₂

Greenhouse application (previously covered):
├─ 500 kW electrical output
├─ 500 kW thermal recovery
├─ CO₂ for enrichment
└─ Overall efficiency: 75-85%

Economics: 2-4 year payback (good match)
Best for: Large greenhouses, year-round operation
```

## 9.5 Economic Analysis and Payback

### Life Cycle Cost Analysis

```
LIFE CYCLE COST (LCC) METHODOLOGY
==================================

LCC = Initial Cost + PV(Operating Costs) - PV(Salvage)

Where PV = Present Value

EXAMPLE: CHILLER COMPARISON
════════════════════════════

Option A: Standard Efficiency Chiller
──────────────────────────────────────
Initial cost: $350,000
Efficiency: 11 EER
Annual energy: 4,200,000 kWh
Annual cost: 4,200,000 × $0.11 = $462,000
Maintenance: $15,000/year
Life: 20 years
Salvage: $20,000

Option B: High Efficiency Chiller
──────────────────────────────────
Initial cost: $500,000 (+$150,000)
Efficiency: 14 EER
Annual energy: 3,307,000 kWh
Annual cost: 3,307,000 × $0.11 = $363,770
Maintenance: $18,000/year (more complex)
Life: 20 years
Salvage: $30,000

PRESENT VALUE CALCULATION:
═════════════════════════

Assumptions:
Discount rate: 6%
Electricity escalation: 3%/year
Maintenance escalation: 2%/year
Analysis period: 20 years

Operating cost present value:
Option A:
Energy PV = $462,000 × 16.35 (escalating annuity)
         = $7,553,700
Maint PV = $15,000 × 14.53 = $217,950
Total PV operating = $7,771,650

Option B:
Energy PV = $363,770 × 16.35 = $5,947,640
Maint PV = $18,000 × 14.53 = $261,540
Total PV operating = $6,209,180

LIFE CYCLE COST COMPARISON:
═══════════════════════════

Option A LCC:
$350,000 + $7,771,650 - $20,000 × 0.312 (PV factor)
= $350,000 + $7,771,650 - $6,240
= $8,115,410

Option B LCC:
$500,000 + $6,209,180 - $30,000 × 0.312
= $500,000 + $6,209,180 - $9,360
= $6,699,820

SAVINGS WITH OPTION B: $1,415,590 (over 20 years)

NPV of efficiency investment:
$1,415,590 - $150,000 = $1,265,590 → JUSTIFIED

Internal Rate of Return: 62% (excellent)
```

### Energy Efficiency Financing

```
FINANCING MECHANISMS
====================

1. UTILITY INCENTIVE PROGRAMS
   ═══════════════════════════

   Common incentives:
   ├─ Lighting: $0.05-0.15 per kWh saved annually
   ├─ HVAC: $50-150 per ton
   ├─ VFDs: $50-100 per HP
   └─ Comprehensive: Up to $0.30/kWh saved

   Example application:
   VFD savings: 686,000 kWh/year
   Incentive: 686,000 × $0.08 = $54,880
   Project cost: $50,000
   Net cost: -$4,880 (rebate exceeds cost!)

2. ENERGY SERVICE COMPANY (ESCO)
   ══════════════════════════════

   Performance contracting:
   ├─ ESCO finances efficiency upgrades
   ├─ Guarantees energy savings
   ├─ Paid from energy savings
   └─ Transfer ownership after term

   Typical structure:
   ├─ 10-20 year contract
   ├─ ESCO receives 70-90% of savings
   ├─ Facility keeps remainder
   └─ 100% savings after payoff

3. COMMERCIAL PACE (C-PACE)
   ═════════════════════════

   Property Assessed Clean Energy:
   ├─ Long-term financing (15-25 years)
   ├─ Repaid via property tax assessment
   ├─ Transferable to new owner
   ├─ Interest rates: 4-7%
   └─ Available in 37+ states

4. INTERNAL CAPITAL BUDGETING
   ═══════════════════════════

   Typical approval criteria:
   ├─ Simple payback < 3-5 years
   ├─ IRR > hurdle rate (10-15%)
   ├─ Positive NPV
   └─ Strategic alignment

5. GREEN BONDS
   ═══════════

   For large projects/portfolios:
   ├─ Lower interest rates (vs. conventional)
   ├─ Investor appetite for green projects
   ├─ Public companies, large facilities
   └─ Requires certification (Climate Bonds)
```

## Summary

This module covered energy modeling and efficiency optimization:
- Energy modeling methodologies and software tools
- Baseline energy consumption analysis and benchmarks
- Efficiency improvement strategies across all systems
- Renewable energy integration options and limitations
- Economic analysis methods and financing mechanisms

## Key Takeaways

1. **Lighting dominates vertical farm energy use** - 65-75% of total consumption, making it the highest priority for efficiency.

2. **Model calibration is essential** - CEA facilities have unique loads requiring validation against metered data.

3. **Envelope improvements have limited ROI** - High internal loads make additional insulation beyond code minimum rarely cost-effective.

4. **Solar provides limited self-generation** - Roof area constraints limit on-site solar to 3-5% of vertical farm energy needs.

5. **Life cycle cost reveals true value** - Initial cost premiums for efficiency often yield substantial savings over equipment life.

## Next Module

**Module 10: Material Selection and Specification** will cover glazing materials, insulation options, structural materials, finishes for controlled environments, and specification writing.
