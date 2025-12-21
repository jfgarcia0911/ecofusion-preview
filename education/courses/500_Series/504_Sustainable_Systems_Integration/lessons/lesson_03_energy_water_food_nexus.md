# Lesson 3: Energy-Water-Food Nexus

## Learning Objectives
- Understand interdependencies between energy, water, and food systems
- Conduct nexus analysis for CEA operations
- Identify optimization opportunities across resource systems
- Develop integrated resource management strategies

## Introduction

The energy-water-food nexus represents the interconnected nature of resource security. In CEA operations, these three systems are inextricably linked: energy powers water treatment and distribution; water is essential for food production and power generation; food production requires both energy and water inputs. Understanding and optimizing these relationships is fundamental to sustainable CEA operations.

## 1. Understanding the Nexus

### 1.1 Nexus Concept Framework

```
ENERGY-WATER-FOOD NEXUS
=======================

                [ENERGY]
                   |
        Energy for    |    Energy from
        water         |    food/biofuel
                   |  |  |
              +----+  |  +----+
              |       |       |
              v       v       v
        [WATER] <----------> [FOOD]
              |               |
        Water for       |    Food requires
        food           |    water
              |        |         |
              +--------+---------+

        Center: [RESOURCE NEXUS]
                [Optimization Zone]
```

### 1.2 CEA-Specific Nexus Dynamics

```
CEA NEXUS FLOWS
===============

ENERGY INPUT:
[Grid/Solar] --> [Lighting] ---------> [Photosynthesis] --> [Food]
             --> [Pumps] ------------> [Water Circulation]
             --> [HVAC] -------------> [Climate Control]
             --> [Controls] ----------> [Monitoring]

WATER INPUT:
[Source] -----> [Treatment] ---------> [Irrigation] -------> [Food]
            --> [Energy Use]
                     |
                     v
            [Cooling] -------> [Energy Systems]
                     |
                     v
            [Humidification] -> [Climate]

FOOD OUTPUT:
[Harvest] ----> [Distribution] ------> [Consumption]
            |
            v
        [Residues] --> [Composting] --> [Nutrients] --> [Production]
                   --> [Biogas] ------> [Energy]
                   --> [Animal Feed] --> [Food System]
```

### 1.3 Nexus Metrics

**Key Indicators:**

1. **Energy-Water:**
   - kWh per m³ water treated
   - L water per kWh generated

2. **Energy-Food:**
   - kWh per kg food produced
   - MJ per nutritional unit

3. **Water-Food:**
   - L water per kg food
   - m³ per nutritional unit

4. **System Efficiency:**
   - Total resource productivity
   - Nexus efficiency index

## 2. Energy-Water Interdependencies

### 2.1 Water for Energy

**Thermoelectric Power Generation:**
- Water for cooling: 2-4 L per kWh
- Evaporative losses significant in arid regions

**Renewable Energy:**
- Solar PV: Minimal water (panel cleaning)
- Wind: No water consumption
- Hydroelectric: Large water requirements
- Biofuels: 100-400 L water per L fuel

**CEA Energy Production:**

```
ON-SITE ENERGY WITH WATER IMPACTS
==================================

Technology          Water Use       Notes
-------------------------------------------------
Solar PV            0.1 L/kWh      Panel cleaning only
Solar Thermal       3.0 L/kWh      Cooling/steam
Biogas Digester     5.0 L/kWh      Feedstock moisture
Fuel Cell           0.5 L/kWh      Humidification
Micro-hydro         0 L/kWh        Pass-through use

Recommendation: Prioritize PV for lowest water impact
```

### 2.2 Energy for Water

**Water Treatment Energy Intensity:**

```
TREATMENT ENERGY REQUIREMENTS
==============================

Process                 Energy (kWh/m³)
----------------------------------------
Groundwater pumping     0.3 - 0.5
Surface water intake    0.1 - 0.3
Filtration             0.2 - 0.4
Reverse osmosis        2.5 - 5.0
UV disinfection        0.05 - 0.1
Ozone treatment        0.1 - 0.2
Biological treatment   0.3 - 0.6
Advanced oxidation     1.0 - 3.0

Total typical CEA:     0.5 - 2.0 kWh/m³
```

**CEA Water System Energy:**

```
WATER-RELATED ENERGY USE
========================

[Pumping] ---------------> 15-25% of total
    - Irrigation pumps
    - Circulation pumps
    - Distribution systems

[Treatment] -------------> 10-20% of total
    - Filtration
    - Sterilization
    - pH adjustment

[Cooling] ---------------> 20-35% of total
    - Evaporative cooling
    - Chiller systems
    - Heat rejection

[Humidification] --------> 5-15% of total
    - Steam generation
    - Atomization
    - Distribution
```

### 2.3 Optimization Strategies

**Strategy 1: Cascading Water Use**

```
WATER CASCADE SYSTEM
====================

High Quality
    |
    v
[Irrigation] (drinking quality)
    |
    v
[Cleaning] (slight nutrient content acceptable)
    |
    v
[Toilet Flushing] (non-potable acceptable)
    |
    v
[Cooling Tower] (makeup water)
    |
    v
[Landscape Irrigation] (treated effluent)
    |
    v
[Discharge/Recharge] (polished water)

Energy Saved: 40-60% by avoiding full treatment for each use
```

**Strategy 2: Right-Sizing Pumps**

- Variable frequency drives (VFD): 20-50% energy savings
- Proper pipe sizing reduces friction losses
- Pressure optimization based on actual need

**Strategy 3: Gravity-Fed Systems**

```
GRAVITY FLOW DESIGN
===================

    [Storage Tank] (elevated)
           |
      Gravity flow
           |
           v
    [Distribution] (no pumping energy)
           |
           v
    [Growing System]
           |
           v
    [Collection] (ground level)
           |
    [Pump once] --> Return to storage

Energy Savings: 60-80% vs. continuous pumping
```

## 3. Energy-Food Interdependencies

### 3.1 Energy for Food Production

**CEA Energy Budget:**

```
ENERGY ALLOCATION IN CEA
========================

Category                % of Total    kWh/kg produce
----------------------------------------------------
Lighting                40-60%        3-8
HVAC (heating/cooling)  20-35%        2-5
Dehumidification       5-15%         0.5-2
Pumps & circulation    5-10%         0.3-1
Control systems        3-5%          0.2-0.5
Processing/packing     2-5%          0.1-0.3
----------------------------------------------------
TOTAL                  100%          6-17 kWh/kg

Compare to field agriculture: 0.5-2 kWh/kg (mostly diesel)
```

**Energy Intensity by Crop:**

```
CROP-SPECIFIC ENERGY USE
=========================

Crop           Light Demand   Total Energy   Notes
                (DLI)         (kWh/kg)
-----------------------------------------------------
Microgreens    Low (10-12)    4-6           Fast cycle
Lettuce        Low (12-14)    5-8           Standard CEA
Herbs          Medium (14-16) 6-10          High value
Tomatoes       High (18-22)   10-15         Long cycle
Strawberries   High (16-20)   12-18         Complex needs
Cannabis       Very High (40) 20-35         Legal markets

Strategy: Match crop energy needs to available resources
```

### 3.2 Food System Energy Efficiency

**Energy Return on Investment (EROI):**

```
EROI COMPARISON
===============

System                  EROI    Notes
----------------------------------------
Field agriculture       3-5:1   Including diesel, fertilizer
Heated greenhouse       1-3:1   High energy input
Vertical farm (grid)    0.5-2:1 Energy intensive
Vertical farm (solar)   3-8:1   Renewable powered
Integrated CEA-energy   5-15:1  Waste heat recovery

Goal: EROI > 3:1 for sustainability
```

### 3.3 Optimization Strategies

**Strategy 1: Spectral Efficiency**

```
LED OPTIMIZATION
================

Traditional HPS:
[Broad Spectrum] ------> [Plants]
                    |
                    +--> [Wasted Energy] (50-60%)

Optimized LED:
[Targeted Spectrum] --> [Plants] (90-95% useful)
    (Blue + Red)
                    |
                    +--> [Wasted Energy] (5-10%)

Energy Savings: 40-60%
Additional benefit: Reduced cooling load
```

**Strategy 2: Daylight Integration**

```
HYBRID LIGHTING
===============

Winter/Night:       [LEDs] -----------> 100% artificial

Spring/Fall:        [Daylight] --+
                    [LEDs] ------+--> 50/50 hybrid

Summer Day:         [Daylight] -------> 90% natural
                    [LED Supplement] -> 10% artificial

Annual Energy Reduction: 30-50% in suitable climates
```

**Strategy 3: Waste Heat Recovery**

```
HEAT RECOVERY SYSTEM
====================

[LED Fixtures] (40% of input becomes heat)
       |
       v
[Heat Exchanger]
       |
       +---------> [Space Heating] (winter)
       |
       +---------> [Water Heating] (year-round)
       |
       +---------> [Dehumidification] (pre-heat air)
       |
       +---------> [CO2 Enrichment] (warm CO2)

Energy Recovered: 20-35% of total electricity
```

## 4. Water-Food Interdependencies

### 4.1 Water for Food Production

**Water Productivity:**

```
WATER USE EFFICIENCY
====================

Growing System      L water/kg produce    Recycling %
------------------------------------------------------
Field agriculture   200-300               0%
Greenhouse soil     50-100                10-20%
Hydroponic NFT      10-20                 85-90%
Deep water culture  8-15                  90-95%
Aeroponics         3-8                   95-98%
Aquaponics         5-12                  95-99%

CEA Advantage: 90-95% water savings vs. field
```

### 4.2 Water Quality Requirements

```
WATER QUALITY BY USE
====================

Application         EC        pH       Treatment
                   (dS/m)             Required
------------------------------------------------------
Seedling           0.5-1.0   5.8-6.2  RO + buffering
Vegetative growth  1.0-2.0   5.8-6.5  Filtration + pH
Fruiting crops     2.0-3.5   6.0-6.8  Filtration + pH
Cleaning           <0.5      6.5-7.5  Basic filtration
Evaporative cool   <1.0      6.0-8.0  Sediment removal

Higher purity = Higher energy for treatment
Balance quality needs with energy cost
```

### 4.3 Optimization Strategies

**Strategy 1: Closed-Loop Recirculation**

```
CLOSED-LOOP SYSTEM
==================

[Fresh Water Input] (5-10% of total use)
         |
         v
[Nutrient Mixing]
         |
         v
[Irrigation] -------> [Plant Uptake] (80-90%)
         |                   |
         v                   v
[Runoff Collection]    [Transpiration]
         |                   |
         v                   v
[Treatment] <--------- [Condensate Recovery]
    |                      |
    +--> [Filtration]      |
    +--> [UV Sterilization]|
    +--> [pH Adjustment]   |
         |                 |
         v                 v
[Recirculation] <----------+
         |
         +--> [Back to Irrigation]

Water Savings: 90-95% vs. open systems
Energy Investment: 0.5-1.0 kWh/m³
```

**Strategy 2: Atmospheric Water Harvesting**

```
DEHUMIDIFICATION WATER RECOVERY
================================

[Growing Area] (70-80% RH)
         |
         v
[Dehumidifier] (removes 50-200 L/day per unit)
         |
         +---------> [Heat Recovery] --> [Space heating]
         |
         v
[Condensate Collection]
         |
         v
[Water Treatment]
         |
         v
[Return to Irrigation]

Benefits:
- Free water source (already paid for cooling)
- Reduces supplemental water needs by 30-60%
- High purity (distilled equivalent)
```

**Strategy 3: Rainwater Harvesting**

```
RAINWATER SYSTEM
================

[Roof Catchment] (1000 m² = 600,000 L annual in moderate climate)
         |
         v
[First Flush Diverter] (removes initial contamination)
         |
         v
[Storage Cistern]
         |
         v
[Basic Filtration]
         |
         v
[Irrigation Use]

Cost: $0.01-0.03/L including infrastructure
Grid water cost: $0.002-0.01/L
Break-even: 3-7 years with water scarcity premium
```

## 5. Nexus Analysis Methodology

### 5.1 Nexus Assessment Framework

```
NEXUS ANALYSIS STEPS
====================

STEP 1: SYSTEM BOUNDARY DEFINITION
    - Temporal scope
    - Spatial extent
    - Included processes

STEP 2: DATA COLLECTION
    - Energy: All sources and uses
    - Water: All sources, uses, and discharge
    - Food: Production, quality, distribution

STEP 3: FLOW QUANTIFICATION
    - Material balance
    - Energy balance
    - Water balance

STEP 4: INTERDEPENDENCY MAPPING
    - Direct relationships
    - Indirect effects
    - Feedback loops

STEP 5: PERFORMANCE METRICS
    - Efficiency indicators
    - Productivity measures
    - Sustainability scores

STEP 6: OPTIMIZATION ANALYSIS
    - Identify bottlenecks
    - Evaluate alternatives
    - Model improvements

STEP 7: IMPLEMENTATION PLANNING
    - Prioritize interventions
    - Economic analysis
    - Risk assessment
```

### 5.2 Nexus Indicators

**Resource Productivity:**

```
NEXUS PRODUCTIVITY METRICS
==========================

1. Energy Productivity (EP):
   EP = kg food produced / kWh consumed
   Target: > 0.15 kg/kWh

2. Water Productivity (WP):
   WP = kg food produced / L water consumed
   Target: > 0.05 kg/L

3. Land Productivity (LP):
   LP = kg food produced / m² / year
   Target: > 40 kg/m²/year

4. Nexus Efficiency Index (NEI):
   NEI = (EP × WP × LP) / (E_ref × W_ref × L_ref)
   Target: > 20 (relative to field agriculture baseline)
```

### 5.3 Trade-Off Analysis

**Multi-Criteria Decision Matrix:**

```
NEXUS OPTIMIZATION TRADE-OFFS
==============================

Scenario        Energy  Water  Food   Cost   Score
                Use     Use    Yield
-----------------------------------------------------
Baseline        100     100    100    100    1.00
LED upgrade     70      100    110    120    1.08
Recirculation   105     20     100    115    1.15
Solar PV        30      100    100    150    1.20
Integrated      40      25     115    140    1.45
-----------------------------------------------------

Scoring: Lower resource use = better
         Higher yield = better
         Normalized to baseline = 100

Integrated approach optimizes across all dimensions
```

## 6. Case Studies

### 6.1 Case Study 1: Desert Vertical Farm

**Context:**
- Location: Phoenix, Arizona
- Climate: Hot, arid (115°F summer, scarce water)
- Crop: Leafy greens
- Scale: 5,000 m² production

**Nexus Challenges:**
1. High cooling energy demand
2. Limited water availability
3. Grid energy carbon-intensive

**Integrated Solution:**

```
DESERT FARM NEXUS STRATEGY
===========================

ENERGY:
[Rooftop Solar] (500 kW) --> 80% of annual needs
[Battery Storage] (2 MWh) --> Peak shaving
[LED Lighting] --> Spectral optimization
[Thermal Storage] --> Load shifting

WATER:
[No external water] --> Atmospheric water generation
[Dehumidification] --> 95% of water needs
[Rainwater] (minimal) --> Supplemental
[Zero discharge] --> 100% recycling

FOOD:
[Vertical systems] --> 200 kg/m²/year
[Controlled environment] --> Year-round production
[Local distribution] --> 50-mile radius

RESULTS:
- Energy: Net-zero annually
- Water: 98% from atmosphere
- Production: 1,000,000 kg/year
- Water productivity: 0.08 kg/L (4x conventional CEA)
- Employment: 45 jobs
- ROI: 7 years
```

### 6.2 Case Study 2: Aquaponic Integration

**Context:**
- Location: Netherlands
- Climate: Temperate, cloudy
- System: Coupled aquaponics
- Scale: 1 hectare greenhouse

**Integration Strategy:**

```
AQUAPONIC NEXUS INTEGRATION
============================

ENERGY FLOWS:
[Biogas Plant] --> [Combined Heat & Power]
                        |
        +---------------+---------------+
        |               |               |
        v               v               v
   [Electricity]   [Heat]          [CO2]
        |               |               |
        v               v               v
    [Pumps]      [Greenhouse]      [Plants]
    [Aeration]   [Fish Tanks]      [Enrichment]
        |               |               |
        +--------> [INTEGRATION] <-----+

WATER & NUTRIENTS:
[Fish Tank] --> [Waste] --> [Biofilter] --> [Nutrients]
                                                 |
                                                 v
                                            [Plants]
                                                 |
                                                 v
                                          [Root Uptake]
                                                 |
                                                 v
                                       [Clean Water Return]
                                                 |
                                                 v
                                          [Fish Tank]

WASTE STREAMS:
[Fish Waste] --> [Solids Separator] --> [Biogas Digester]
                                              |
                                              v
                                        [Energy + CO2]
[Plant Waste] --> [Composting] --> [Fish Feed Supplement]

OUTCOMES:
- Water use: 5 L/kg (fish + vegetables)
- Energy: 80% from biogas
- Waste: Zero to landfill
- Yield: Fish 50 kg/m³, Vegetables 60 kg/m²
- Economic: 15% higher margin than separate systems
```

### 6.3 Case Study 3: Urban Rooftop Farm

**Context:**
- Location: Brooklyn, New York
- Type: Rooftop greenhouse
- Scale: 6,000 m² (65,000 sq ft)
- Crop: Mixed vegetables and herbs

**Nexus Innovation:**

```
URBAN NEXUS INTEGRATION
========================

BUILDING INTEGRATION:
[Rooftop Farm]
      |
      +---> [Insulation] --------> Building cooling load -25%
      |
      +---> [Stormwater] --------> Retention 75%
      |
      +---> [Waste Heat] --------> Building heating +15%

ENERGY:
[Building HVAC waste heat] --> [Greenhouse heating]
[Solar thermal] --> [Hot water]
[LED waste heat] --> [Winter supplemental]
[Grid] (renewable contract) --> [Balance]

WATER:
[Rooftop rainwater] --> 400,000 L annual
[Building condensate] --> 100,000 L annual
[Closed-loop hydroponic] --> 95% recycling
[Excess treated water] --> Building cooling tower

FOOD & COMMUNITY:
[50,000 kg/year production] --> [Local restaurants]
[Employment] --> 15 full-time jobs
[Education] --> 5,000 visitors annually
[Food access] --> Low-income community sales

PERFORMANCE:
- Energy: 40% reduction vs. standalone greenhouse
- Water: Net-positive (provides water to building)
- Economics: $2M annual revenue
- Social: Community food hub
- Environmental: Carbon negative with grid offset
```

## 7. Optimization Tools and Models

### 7.1 Nexus Modeling Software

**Available Tools:**
- WEAP (Water Evaluation and Planning)
- LEAP (Long-range Energy Alternatives Planning)
- CLEWs (Climate, Land, Energy, Water Systems)
- Nexus Quick Scan
- Custom Python/R models

### 7.2 Optimization Algorithms

```
MULTI-OBJECTIVE OPTIMIZATION
=============================

Objective Function:
Minimize: Total_Cost = (Energy_Cost + Water_Cost +
                        Capital_Cost + Operating_Cost)

Subject to:
- Food_Production ≥ Production_Target
- Energy_Use ≤ Available_Energy
- Water_Use ≤ Available_Water
- Quality ≥ Quality_Standards
- Carbon_Emissions ≤ Emissions_Target

Solution Methods:
- Linear programming
- Genetic algorithms
- Particle swarm optimization
- Multi-criteria decision analysis
```

### 7.3 Sensitivity Analysis

Understanding how variations affect outcomes:

```
SENSITIVITY ANALYSIS RESULTS
=============================

Parameter          Impact on Total Cost
-----------------------------------------
Energy price       High (±20% = ±15% cost)
Water price        Medium (±20% = ±5% cost)
Crop yield         High (±10% = ±25% cost)
LED efficiency     High (±10% = ±12% cost)
Recycling rate     Medium (±10% = ±6% cost)

Priority: Focus on energy efficiency and yield optimization
```

## Practical Exercise

**Exercise: Nexus Analysis for Your Facility**

1. **Baseline Assessment:**
   - Energy use by category (kWh/month)
   - Water use by source and application (L/month)
   - Food production (kg/month)

2. **Calculate Indicators:**
   - Energy productivity (kg/kWh)
   - Water productivity (kg/L)
   - Nexus efficiency index

3. **Map Interdependencies:**
   - Create flow diagram showing connections
   - Quantify key relationships

4. **Identify Opportunities:**
   - List 5 optimization strategies
   - Estimate potential improvements
   - Prioritize by cost-effectiveness

5. **Develop Action Plan:**
   - Select top 3 interventions
   - Calculate ROI
   - Create implementation timeline

## Key Takeaways

1. **The nexus perspective reveals opportunities** that are invisible when viewing energy, water, and food systems in isolation

2. **Integration creates synergies** where improvements in one system benefit the others

3. **Trade-offs require careful analysis** to ensure optimization across all dimensions

4. **Context matters** - optimal solutions vary by climate, resources, and constraints

5. **Measurement enables management** - comprehensive monitoring is essential for nexus optimization

## Further Reading

- Hoff, H. (2011). "Understanding the Nexus" - Stockholm Environment Institute
- FAO (2014). "The Water-Energy-Food Nexus: A New Approach in Support of Food Security"
- IEA (2016). "Water-Energy Nexus" - World Energy Outlook Special Report
- Bazilian, M. et al. (2011). "Considering the Energy, Water and Food Nexus"

## Next Lesson

Lesson 4 explores Circular Economy Implementation, applying systems thinking and nexus principles to eliminate waste and create closed-loop CEA operations.

---

*Course 504: Sustainable Systems Integration - EcoFusion Academy*
