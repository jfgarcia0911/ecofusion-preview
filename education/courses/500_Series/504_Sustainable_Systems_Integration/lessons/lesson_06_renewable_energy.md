# Lesson 6: Renewable Energy Integration

## Learning Objectives
- Evaluate renewable energy technologies for CEA applications
- Design on-site generation systems
- Implement energy storage solutions
- Optimize grid integration and microgrids

## Introduction

Renewable energy integration is critical for sustainable CEA operations. With electricity comprising 60-80% of operating costs and representing the largest source of greenhouse gas emissions, transitioning to clean energy is both environmentally and economically strategic.

## 1. Renewable Energy Technologies

### 1.1 Solar Photovoltaic (PV) Systems

```
SOLAR PV FOR CEA
================

SYSTEM CONFIGURATIONS:

1. ROOFTOP MOUNTED
   Capacity: 150-250 W/m² roof
   Advantages: No land use, structural synergy
   Challenges: Load capacity, shading

2. GROUND MOUNTED
   Capacity: 300-400 W/m² land
   Advantages: Optimal tilt/orientation
   Challenges: Land cost, opportunity cost

3. BUILDING-INTEGRATED PV (BIPV)
   Locations: Facades, canopies, glazing
   Advantages: Dual function, aesthetics
   Challenges: Higher cost, efficiency trade-offs

4. AGRIVOLTAICS
   Configuration: Elevated panels over crops
   Advantages: Dual land use, microclimate benefits
   Challenges: Specialized design, crop selection

PERFORMANCE FACTORS:
- Location irradiance: 1000-2500 kWh/kW/year
- System efficiency: 15-20% (module)
- Degradation: 0.5%/year
- Lifespan: 25-30 years
- LCOE: $0.03-0.08/kWh
```

**Sizing and Economics:**

```
SOLAR PV SYSTEM DESIGN
======================

EXAMPLE: 5,000 m² vertical farm
Annual consumption: 2,000 MWh
Peak demand: 400 kW

SCENARIO 1: 50% SOLAR COVERAGE
PV Capacity: 750 kW
Annual generation: 1,000 MWh
Self-consumption: 70% (700 MWh)
Grid export: 30% (300 MWh)
Grid import: 1,300 MWh

Investment: $1,125,000 ($1.50/W)
Annual savings: $84,000
Incentives (30% ITC): -$337,500
Net investment: $787,500
Payback: 9.4 years
25-year NPV (8%): $890,000

SCENARIO 2: 100% + BATTERY
PV Capacity: 1,500 kW
Battery: 2 MWh / 1 MW
Total investment: $3,750,000
Grid independence: 85%
Economic payback: 12-15 years
Energy security: High
Carbon reduction: 95%
```

### 1.2 Wind Energy

```
WIND POWER APPLICATIONS
=======================

SMALL-SCALE WIND (10-100 kW):
Best for: Rural CEA with good wind resource
Typical output: 15,000-150,000 kWh/year
Cost: $3-5/W installed
Considerations:
  - Wind speed >5 m/s average required
  - Zoning and permitting challenges
  - Noise and visual impact
  - Higher O&M than solar

WIND PPA (Large-scale):
Contract with wind farm
No on-site equipment
20-year price certainty
Cost: $0.02-0.05/kWh
Benefits:
  - No capital outlay
  - Price hedge
  - Renewable energy credits
  - Scalable to 100% renewable
```

### 1.3 Geothermal Systems

```
GEOTHERMAL HEATING/COOLING
==========================

GROUND-SOURCE HEAT PUMP (GSHP):
System: Closed-loop ground heat exchanger
Depth: 100-400 feet
Coefficient of Performance (COP):
  - Heating: 3.5-5.0
  - Cooling: 4.0-6.0

ENERGY COMPARISON (for 100 kW heating):
Natural gas furnace:
  - Efficiency: 90%
  - Input: 111 kW
  - Cost: $0.03/kWh equivalent
  - Emissions: 21 kg CO2e/hour

GSHP:
  - COP: 4.0
  - Input: 25 kW electric
  - Cost: $0.025/kWh (with solar)
  - Emissions: 0 kg CO2e (renewable)

Investment: $2,500-3,500/ton capacity
Payback: 5-10 years
Lifespan: 25+ years (loop), 15-20 years (pump)
```

### 1.4 Biomass and Biogas

```
BIOENERGY INTEGRATION
=====================

ANAEROBIC DIGESTION:
Feedstock: Crop waste, fish waste, food scraps
Input: 1 ton organic waste/day
Biogas production: 100-200 m³/day
Energy content: 6-7 kWh/m³

CHP SYSTEM:
Biogas --> Engine generator
Electrical: 35% efficiency --> 210-420 kWh/day
Thermal: 45% efficiency --> 270-540 kWh thermal/day
Total: 80% efficiency

Benefits:
- Waste treatment
- Energy generation
- Digestate fertilizer
- Carbon negative (avoided methane)

Investment: $200,000-500,000
Payback: 5-8 years
Requires: Consistent organic waste supply
```

## 2. Energy Storage Systems

### 2.1 Battery Storage Technologies

```
BATTERY TECHNOLOGY COMPARISON
==============================

LITHIUM-ION (NMC/LFP):
Energy density: 150-250 Wh/kg
Cycle life: 3,000-5,000 cycles
Efficiency: 90-95%
Cost: $200-400/kWh
Lifespan: 10-15 years
Best for: Daily cycling, fast response

FLOW BATTERIES:
Energy density: 20-40 Wh/kg
Cycle life: 10,000+ cycles
Efficiency: 70-80%
Cost: $300-600/kWh
Lifespan: 20+ years
Best for: Long duration (4+ hours)

LEAD-ACID:
Energy density: 30-50 Wh/kg
Cycle life: 500-1,500 cycles
Efficiency: 70-85%
Cost: $100-200/kWh
Lifespan: 5-8 years
Best for: Backup power, budget constraints
```

### 2.2 Storage Applications

```
BATTERY FUNCTIONS IN CEA
========================

1. PEAK SHAVING
   [Solar generation peak] --> [Battery]
         Midday                   |
                                  v
                          [Evening use]
   Savings: $20,000-60,000/year (demand charges)

2. TIME-OF-USE ARBITRAGE
   [Charge] during off-peak ($0.08/kWh)
   [Discharge] during on-peak ($0.25/kWh)
   Savings: $0.17/kWh cycled

3. SELF-CONSUMPTION
   [Solar] --> [Battery] --> [24/7 facility use]
   Increase solar utilization: 70% --> 95%

4. GRID SERVICES
   [Frequency regulation]
   [Demand response]
   Revenue: $50-200/kW/year

5. BACKUP POWER
   [Outage protection]
   [Critical system support]
   Value: Avoided crop loss
```

### 2.3 Sizing and Economics

```
BATTERY SYSTEM DESIGN
=====================

FACILITY: 300 kW average load
Daily consumption: 7,200 kWh
Solar PV: 500 kW

BATTERY CONFIGURATION:
Capacity: 2 MWh (Energy)
Power: 1 MW (Discharge rate)
C-rate: 0.5C (2-hour discharge)

USAGE PATTERN:
00:00-06:00: Discharge 1,000 kWh (off-peak)
06:00-18:00: Solar direct + charge 1,500 kWh
18:00-24:00: Discharge 1,500 kWh (peak)

ECONOMICS:
Investment: $600,000
Annual savings:
  - Demand charge reduction: $36,000
  - Energy arbitrage: $28,000
  - Solar self-consumption: $18,000
Total: $82,000/year
Payback: 7.3 years
IRR: 12.4%
```

## 3. Microgrid Design

### 3.1 Microgrid Architecture

```
MICROGRID COMPONENTS
====================

                [UTILITY GRID]
                       |
                  [POINT OF]
                  [COMMON]
                  [COUPLING]
                       |
          +------------+------------+
          |                         |
    [AUTOMATIC]              [ENERGY]
    [TRANSFER]              [MANAGEMENT]
    [SWITCH]                [SYSTEM]
          |                         |
          v                         v
    [MICROGRID BUS] <-----> [CONTROLS]
          |
    +-----+-----+-----+-----+
    |     |     |     |     |
    v     v     v     v     v
 [Solar][Wind][Bat][Gen][Loads]

OPERATING MODES:
1. Grid-connected: Normal operation
2. Grid-support: Export excess
3. Island mode: Self-sufficient
4. Black-start: Recovery capability
```

### 3.2 Control Strategies

```
MICROGRID CONTROL HIERARCHY
============================

LEVEL 1: PRIMARY CONTROL (milliseconds)
- Voltage/frequency regulation
- Load sharing
- Droop control

LEVEL 2: SECONDARY CONTROL (seconds)
- Voltage/frequency restoration
- Power flow optimization
- Economic dispatch

LEVEL 3: TERTIARY CONTROL (minutes)
- Grid interaction
- Market participation
- Demand response

OPTIMIZATION OBJECTIVE:
Minimize: Operating Cost + Emissions Cost + Degradation Cost
Subject to:
  - Power balance
  - Voltage/frequency limits
  - Equipment constraints
  - Reliability requirements
```

### 3.3 Economic and Resilience Benefits

```
MICROGRID VALUE PROPOSITION
============================

FINANCIAL BENEFITS:
Energy cost savings:        $80,000-200,000/year
Demand charge reduction:    $40,000-100,000/year
Grid service revenue:       $20,000-60,000/year
Incentives/grants:          $100,000-500,000 one-time

RESILIENCE BENEFITS:
Power outage protection:    99.9% --> 99.99% uptime
Avoided crop loss:          $50,000-500,000/event
Business continuity:        Priceless
Insurance premium reduction: 5-15%

INVESTMENT:
Solar + battery + controls: $2-4M
Payback: 8-12 years
Net benefit (20 years):     $3-8M
```

## 4. Grid Integration

### 4.1 Interconnection Process

```
UTILITY INTERCONNECTION STEPS
==============================

PHASE 1: PRE-APPLICATION (1-2 months)
- Feasibility assessment
- Utility consultation
- Site evaluation

PHASE 2: APPLICATION (2-6 months)
- Submit application
- System design review
- Impact studies (if required)

PHASE 3: APPROVAL (3-12 months)
- Interconnection agreement
- Protection requirements
- Metering specifications

PHASE 4: CONSTRUCTION (6-12 months)
- Equipment procurement
- Installation
- Inspection

PHASE 5: COMMISSIONING (1-2 months)
- Testing and verification
- Utility witnessing
- Permission to operate

TOTAL TIMELINE: 12-32 months
Costs: $10,000-200,000 (study fees, equipment)
```

### 4.2 Net Metering and Feed-in Tariffs

```
COMPENSATION MECHANISMS
=======================

NET ENERGY METERING (NEM):
Exports credited at retail rate
Monthly/annual true-up
Best for: High self-consumption
Example:
  Import: 1,000 kWh @ $0.15 = $150
  Export: 400 kWh @ $0.15 = -$60
  Net bill: $90

FEED-IN TARIFF (FiT):
Fixed price for exports
Long-term contract (10-25 years)
Best for: Project finance
Example:
  Export: 400 kWh @ $0.12 = $48
  Import: 1,000 kWh @ $0.15 = $150
  Net bill: $102 (but stable export price)

TIME-OF-USE NET METERING:
Export/import rates vary by time
Incentivizes battery storage
Complex but potentially lucrative
```

### 4.3 Demand Response Participation

```
DEMAND RESPONSE PROGRAMS
=========================

PROGRAM TYPES:

1. CURTAILMENT
   Signal: Reduce load by X kW
   Notice: 30 min to 1 day
   Duration: 1-4 hours
   Compensation: $0.50-2.00/kWh curtailed
   Implementation: Dim lights, adjust HVAC

2. LOAD SHIFTING
   Signal: Time-of-use pricing
   Action: Automated load scheduling
   Benefit: $0.10-0.20/kWh saved

3. ANCILLARY SERVICES
   Service: Frequency regulation
   Response time: <4 seconds
   Requirements: Automated controls
   Revenue: $100-300/kW/year

4. EMERGENCY RESPONSE
   Trigger: Grid emergency
   Payment: $400-800/kW/year (capacity)
   Called: 0-10 times/year
   Penalty: If unavailable when called

CEA IMPLEMENTATION:
- Lighting: Dimmable 10-30%
- HVAC: Shift 2-4 hours with thermal storage
- Processing: Schedule during off-peak
Revenue potential: $30,000-150,000/year
```

## 5. Case Studies

### 5.1 100% Solar Vertical Farm (California)

```
PROJECT OVERVIEW
================

Facility: 10,000 m² vertical farm
Location: Central California
Crop: Leafy greens
Annual production: 500 tons

ENERGY SYSTEM:
Solar PV: 2.5 MW (rooftop + carport)
Battery: 5 MWh / 2.5 MW
Annual generation: 4,000 MWh
Annual consumption: 3,500 MWh
Grid export: 500 MWh

PERFORMANCE:
Self-sufficiency: 94%
Grid import: 6% (winter peaks)
Carbon intensity: 0.02 kg CO2e/kg (near zero)

ECONOMICS:
Total investment: $5.2M
  - Solar: $3.75M
  - Battery: $1.25M
  - Controls: $0.2M
Incentives (ITC): -$1.56M
Net investment: $3.64M

Annual benefits:
  - Avoided electricity: $420,000
  - Demand charges: $120,000
  - Net metering exports: $15,000
Total: $555,000/year

Payback: 6.6 years
25-year NPV: $7.8M
IRR: 16.2%

LESSONS LEARNED:
- Oversized solar for winter self-sufficiency
- Battery essential for evening peak
- Automated controls crucial
- Exceeded production estimates by 8%
```

### 5.2 Biogas-Powered Greenhouse (Netherlands)

```
INTEGRATED SYSTEM
=================

Facility: 5-hectare greenhouse
System: Combined aquaponics + anaerobic digestion

FEEDSTOCK:
- Fish waste: 10 tons/day
- Crop residues: 8 tons/day
- Local food waste: 12 tons/day
Total: 30 tons/day organic matter

BIOGAS PRODUCTION:
Biogas: 4,000 m³/day
Energy content: 24,000 kWh/day

CHP SYSTEM:
Electrical output: 8,400 kWh/day (350 kW average)
Thermal output: 10,800 kWh/day
CO2 capture: 1,500 kg/day

ENERGY BALANCE:
Facility demand:
  - Electrical: 300 kW average
  - Heating: 600 kW average (winter)
  - Cooling: 400 kW (summer)

Biogas CHP: 87% of electrical needs
Solar thermal: 40% of heating needs
Geothermal: Cooling + supplemental heat

Grid independence: 75% annually

CIRCULAR BENEFITS:
- Zero waste disposal costs: $200,000/year savings
- Tipping fees for food waste: $150,000/year revenue
- Digestate fertilizer: $80,000/year value
- Carbon credits: $40,000/year

Total system investment: $2.8M
Annual benefit: $650,000
Payback: 4.3 years
```

## 6. Implementation Planning

### 6.1 Feasibility Assessment

```
RENEWABLE ENERGY FEASIBILITY
============================

STEP 1: RESOURCE ASSESSMENT
Solar: Irradiance data, shading analysis
Wind: Wind speed data, turbulence
Biomass: Feedstock availability, consistency

STEP 2: LOAD ANALYSIS
Historical consumption
Peak demand patterns
Seasonal variations
Growth projections

STEP 3: TECHNOLOGY SELECTION
Match resources to technologies
Consider scalability
Evaluate maturity

STEP 4: PRELIMINARY SIZING
Energy balance modeling
Storage requirements
Grid interaction

STEP 5: ECONOMIC ANALYSIS
Capital costs
Operating costs
Incentives and financing
Payback and NPV

STEP 6: RISK ASSESSMENT
Technical risks
Financial risks
Regulatory risks
Mitigation strategies

DECISION CRITERIA:
- NPV > $0
- IRR > Cost of capital + 3%
- Payback < 10 years
- Carbon reduction > 50%
- Energy security improvement
```

### 6.2 Financing Options

```
RENEWABLE ENERGY FINANCING
==========================

1. CASH PURCHASE
   - Own 100% of system
   - Capture all incentives
   - Best economics long-term
   - High upfront cost

2. LOAN FINANCING
   - Ownership with debt
   - Tax benefits to owner
   - Moderate upfront cost
   - Interest expense

3. POWER PURCHASE AGREEMENT (PPA)
   - Third-party owns system
   - Buy electricity at fixed rate
   - $0 upfront cost
   - 20-25 year contract
   - Typical price: $0.08-0.12/kWh

4. LEASE
   - Third-party owns
   - Fixed monthly payments
   - Maintenance included
   - 15-20 year term

5. ENERGY-AS-A-SERVICE
   - Performance-based contract
   - Guaranteed savings
   - Provider manages all aspects
   - Share savings 50/50 typical

RECOMMENDATION BY SCENARIO:
Strong balance sheet: Cash or loan
Limited capital: PPA or lease
Risk-averse: Energy-as-a-service
```

## Practical Exercise

**Exercise: Renewable Energy System Design**

Design a renewable energy system for your facility:

1. **Energy Audit:**
   - Monthly consumption data (12 months)
   - Peak demand by time of day
   - Identify controllable loads

2. **Resource Assessment:**
   - Solar: Use PVWatts to estimate production
   - Wind: Assess average wind speed
   - Biomass: Quantify organic waste streams

3. **System Design:**
   - Size solar PV for 60-100% generation
   - Calculate battery capacity for peak shifting
   - Design backup/supplemental systems

4. **Economic Analysis:**
   - Capital costs (itemized)
   - Annual operating costs/savings
   - Apply relevant incentives
   - Calculate NPV, IRR, payback

5. **Implementation Plan:**
   - Project timeline
   - Financing strategy
   - Risk mitigation
   - Success metrics

## Key Takeaways

1. **Renewable energy is economically competitive** with grid electricity in most regions, especially with incentives

2. **Solar + battery combinations** provide both cost savings and energy resilience for CEA

3. **Integrated approaches** (combining multiple technologies) optimize performance and economics

4. **Energy storage is increasingly essential** for maximizing renewable energy value

5. **Long-term planning** (20-30 years) reveals strong financial returns from renewable investments

## Further Reading

- NREL. *Distributed Generation Renewable Energy Estimate of Costs*
- IRENA (2021). *Renewable Power Generation Costs*
- DOE. *Solar Energy Technologies Office Resources*
- Microgrid Knowledge. *Microgrid Projects Database*
- Clean Energy States Alliance. *Guide to Community Solar*

## Next Lesson

Lesson 7 explores Water Stewardship Programs, integrating water conservation, quality management, and watershed protection strategies.

---

*Course 504: Sustainable Systems Integration - EcoFusion Academy*
