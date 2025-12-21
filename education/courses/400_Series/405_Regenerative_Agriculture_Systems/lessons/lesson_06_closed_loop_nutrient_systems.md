# Lesson 6: Closed-Loop Nutrient Systems

## Learning Objectives

By the end of this lesson, you will be able to:
1. Design closed-loop nutrient cycling systems for integrated operations
2. Conduct comprehensive nutrient mass balance analyses
3. Implement waste stream valorization technologies
4. Apply nutrient recovery technologies to agricultural systems
5. Develop zero-waste system architecture
6. Calculate nutrient cycling efficiency and optimization opportunities

## Introduction

Closed-loop nutrient management transforms linear "take-make-waste" agricultural systems into circular systems where waste from one process becomes input for another. This approach minimizes external inputs, reduces environmental impact, and creates economic value from materials traditionally considered waste. This lesson explores the principles, technologies, and design strategies for creating highly efficient, regenerative nutrient cycling systems.

## 1. Nutrient Cycling Principles

### The Circular Nutrient Economy

```
Linear vs. Circular Nutrient Systems

LINEAR SYSTEM (Conventional)
============================
[Inputs] → [Production] → [Products] → [Consumption]
 (purchased)                              ↓
                                      [Waste]
                                          ↓
                                   [Disposal/Loss]

Problems: High costs, depletion, pollution, inefficiency

CIRCULAR SYSTEM (Regenerative)
==============================
        +--→ [Production] --+
        |                   |
        |                   ↓
   [Recycling] ←-- [Products] → [Consumption]
        ↑                              ↓
        |                        [Waste Stream]
        |                              ↓
        +------← [Recovery/Processing]

Benefits: Low costs, conservation, pollution prevention, efficiency
```

### Nutrient Cycling Metrics

**1. Nutrient Use Efficiency (NUE)**
```
NUE = (Nutrients in Products / Nutrients Input) × 100%

Example:
Input: 200 kg N/year
Output (sold products): 140 kg N/year
NUE = (140 / 200) × 100% = 70%

Targets:
- Conventional systems: 30-50%
- Sustainable systems: 50-70%
- Regenerative closed-loop: 80-95%
```

**2. Recycling Efficiency**
```
RE = (Nutrients Recycled / Total Available for Recycling) × 100%

Example:
Plant waste: 50 kg N
Composted and reused: 42 kg N
Lost in process: 8 kg N
RE = (42 / 50) × 100% = 84%
```

**3. System Closure**
```
Closure = (Internal Cycling / Total System Throughput) × 100%

Example:
Total N throughput: 300 kg/year
External inputs: 60 kg/year
Internal cycling: 240 kg/year
Closure = (240 / 300) × 100% = 80%

Target: >75% for highly regenerative systems
```

## 2. System Mass Balance Analysis

### Mass Balance Methodology

**Step 1: Define System Boundaries**

```
Example: 5-Acre Integrated Farm

INCLUDED:
- All production areas (CEA + outdoor)
- Processing facilities
- Composting systems
- Animal production (if present)

EXCLUDED:
- Off-farm transportation
- Consumer use
- Retail operations
```

**Step 2: Identify All Inputs and Outputs**

```
Annual Nitrogen Balance Template

INPUTS (kg N/year)
==================
Purchased fertilizers:        _____
Feed (animal/fish):           _____
Seeds/transplants:            _____
Atmospheric fixation:         _____
Precipitation:                _____
Irrigation water:             _____
                    TOTAL:    _____

OUTPUTS (kg N/year)
===================
Products sold:                _____
Ammonia volatilization:       _____
Denitrification:              _____
Leaching:                     _____
Runoff:                       _____
                    TOTAL:    _____

CHANGE IN STORAGE
=================
Soil organic matter change:   _____
Biomass accumulation:         _____

BALANCE CHECK:
Inputs - Outputs - ΔStorage = 0 (ideally)
If not balanced, identify missing flows
```

**Step 3: Quantify Internal Flows**

```
Internal Nitrogen Flows (Example)

[Atmospheric N2]
    ↓ (fixation by cover crops: 80 kg N/yr)
[Cover Crop Biomass: 120 kg N]
    ↓ (composting, 15% loss)
[Compost: 102 kg N]
    ↓
    +→ [CEA media: 30 kg N]
    |       ↓ (crop uptake: 85%)
    |   [CEA harvest: 25.5 kg N] → Market
    |       ↓ (waste: 15%)
    |   [Waste: 4.5 kg N]
    |
    +→ [Field application: 72 kg N]
            ↓ (crop uptake: 60%, loss: 20%)
        [Field harvest: 43 kg N] → Market
            ↓ (residue: 20%)
        [Residue: 14.4 kg N] → Compost

Material returned to compost: 18.9 kg N
Additional input needed: 101 kg N
Total internal cycling: 35% of throughput
```

**Step 4: Identify Losses and Inefficiencies**

Major loss pathways:
1. **Ammonia volatilization** (5-30% of applied N)
   - Sources: Manure, compost, urea fertilizers
   - Mitigation: Cover, incorporate, acidify, use stabilizers

2. **Denitrification** (10-40% in wet conditions)
   - Sources: Saturated soils, anaerobic conditions
   - Mitigation: Drainage, timing, nitrification inhibitors

3. **Leaching** (10-30% in sandy soils, high rainfall)
   - Sources: Excess application, high rainfall, light soils
   - Mitigation: Timing, cover crops, organic matter

4. **Runoff** (2-10% on slopes)
   - Sources: Surface application, rainfall events, bare soil
   - Mitigation: Perennial cover, buffer strips, infiltration

**Step 5: Optimization**

Strategies to improve closure:
- Reduce losses at each step
- Capture and recycle more waste streams
- Improve nutrient uptake efficiency
- Add internal cycling loops
- Right-size system components

## 3. Waste Stream Valorization

### Comprehensive Waste Inventory

```
Waste Stream Characterization

WASTE TYPE         Volume    N%   P%   K%   Current Fate       Opportunity
==========         ======   ===  ===  ===  ============       ===========

Plant trimming      500 kg  2.5  0.4  2.0  Compost           Compost, BSFL
Culled plants       200 kg  3.0  0.5  2.5  Discard           Compost, biogas
Root balls          150 kg  1.5  0.3  1.0  Discard           Compost
Spent media         2000 L  0.8  0.2  0.5  Discard           Amend, reuse
Aquaponics solids   300 kg  4.0  2.5  0.8  Fish waste        Compost, vermi
Greywater          10000 L  0.01 0.003 0.01 Discharge        Treatment, reuse
Packaging           100 kg   -    -    -   Landfill          Recycle, reduce
Food waste (staff)  400 kg  2.0  0.3  1.5  Landfill          BSFL, compost

NUTRIENT TOTALS:
N: 35.5 kg/year
P: 10.7 kg/year
K: 23.6 kg/year

VALUE if recovered @ $2/kg N, $3/kg P, $1/kg K:
$71 + $32 + $24 = $127/year from waste
```

### Valorization Technologies

**1. Composting (Covered in Lesson 4)**
- Inputs: Plant waste, food waste, manure, spent media
- Outputs: Soil amendment, growing media component
- Nutrient retention: 70-90%
- Value: $0.30-1.00 per kg finished compost

**2. Vermicomposting**
- Inputs: Pre-composted materials, food waste
- Outputs: Premium vermicompost, worm castings
- Nutrient retention: 80-95%
- Value: $2-5 per kg

**3. Black Soldier Fly Larvae (BSFL)**
- Inputs: Food waste, manure, plant waste
- Outputs: Protein (larvae), frass (fertilizer)
- Nutrient capture: Larvae 15-25%, Frass 60-70%
- Value: Larvae $4-8/kg, Frass $0.50-1.50/kg

**4. Anaerobic Digestion**
- Inputs: High-moisture wastes, manure, food waste
- Outputs: Biogas (energy), digestate (fertilizer)
- Nutrient retention: >95% (in digestate)
- Value: Energy + fertilizer value

**5. Nutrient Extraction Technologies**

**Struvite Precipitation:**
```
Struvite Recovery from Wastewater

Process:
Mg²⁺ + NH₄⁺ + PO₄³⁻ → MgNH₄PO₄·6H₂O (Struvite)

Optimal Conditions:
- pH: 8.5-9.5
- Mg:N:P ratio: 1:1:1
- Mixing and residence time

Recovery Efficiency:
- P: 70-95%
- N: 5-15% (as ammonium)

Product:
- Slow-release fertilizer
- 5.7% N, 12.6% P, 9.9% Mg
- Market value: $400-800 per ton
```

**Ion Exchange:**
- Selective capture of NH₄⁺ or NO₃⁻
- Zeolites or synthetic resins
- Regeneration with salt solutions
- Concentrated nutrient solutions for reuse

**Reverse Osmosis:**
- Membrane filtration
- Concentrates nutrients in reject stream
- Clean water for reuse
- Energy intensive

**6. Biochar Production**

```
Biochar from Agricultural Waste

Process: Pyrolysis (thermal decomposition without oxygen)

Inputs:
- Woody plant waste
- Nutshells
- Corn stover
- Rice hulls

Conditions:
- Temperature: 400-700°C
- Oxygen exclusion
- 1-4 hour residence time

Outputs:
- Biochar: 25-40% of input mass
- Bio-oil: Can be used for energy
- Syngas: Can power the process

Biochar Properties:
- 80-90% carbon (stable, resistant to decomposition)
- High surface area (200-400 m²/g)
- Cation exchange capacity: 10-80 meq/100g
- Nutrient holding capacity
- Soil amendment benefits

Applications:
- Soil amendment (carbon sequestration)
- Growing media component
- Water filtration
- Nutrient capture from liquid waste

Carbon Sequestration:
- 1 ton biochar = ~2-3 tons CO₂ eq. removed from atmosphere
- Stable for 100-1000+ years in soil
```

## 4. Nutrient Recovery Technologies

### Integrated Nutrient Recovery System

```
Multi-Technology Nutrient Recovery

[WASTE STREAMS]
    ↓
    +→ [Solid-Liquid Separation]
         ↓                ↓
    [Solids]          [Liquids]
         ↓                ↓
    [Composting]     [Anaerobic Digestion]
         ↓                ↓
    [Compost]        [Biogas] + [Digestate]
         ↓                        ↓
         |              [Struvite Precipitation]
         |                ↓            ↓
         |           [Struvite]  [Treated Water]
         |                ↓            ↓
         +-------------→ [Nutrient Products]
                                      ↓
                              [Reuse in Production]
```

### Case Study: Aquaponics Waste Recovery

```
Aquaponics Nutrient Recovery System

[Fish Tank]
    ↓ (fish waste, uneaten feed)
[Solids Filter]
    ↓             ↓
[Solids]      [Dissolved Nutrients]
    ↓             ↓
[Vermicompost] [Biofilter] → [Plant Growing Beds]
    ↓             ↓                    ↓
[Premium     [NO₃⁻, PO₄³⁻]      [Plant Uptake 60-80%]
 Amendment]      ↓                    ↓
              [Drainage]          [Harvest]
                  ↓
          [Nutrient Analysis]
                  ↓
          [Supplementation if needed]
                  ↓
          [Return to System]

System Efficiency:
- N recovery: 85-95%
- P recovery: 70-85%
- Water reuse: 95-99%
- External inputs: <10% of conventional
```

## 5. Zero-Waste System Architecture

### Design Principles

**1. Cascade Design**
Each output becomes input for next process at appropriate quality level:

```
Nutrient Quality Cascade

HIGH QUALITY
    ↓
[Finished Vermicompost] → CEA potting mix
    ↓
[Finished Compost] → Field soil amendment
    ↓
[Partially Composted Material] → Mulch, paths
    ↓
[Raw Organic Matter] → Sheet mulching, erosion control
    ↓
LOW QUALITY
[Biochar/Woody Material] → Long-term soil carbon
```

**2. Redundancy**
Multiple pathways for each waste stream:

```
Plant Waste Routing Options

[Leafy Plant Waste]
    ↓
    +→ Option 1: BSFL processing (summer)
    +→ Option 2: Vermicomposting (year-round)
    +→ Option 3: Aerobic composting (high volume)
    +→ Option 4: Anaerobic digestion (if digester available)
    +→ Option 5: On-farm animal feed (chickens, rabbits)

Choose based on:
- Seasonal capacity
- Material characteristics
- Highest value use
- Processing capacity availability
```

**3. Scale Matching**

```
Waste Generation vs. Processing Capacity

Daily Waste Generation: 50 kg plant waste

Processing Options:
- BSFL: 2 m² bed @ 15 kg/m²/day = 30 kg capacity (UNDERSIZE)
- Compost: 0.5 m³ daily addition @ 100 kg/m³ = 50 kg capacity (MATCH)
- Vermicompost: 10 m² @ 2 kg/m²/day = 20 kg capacity (UNDERSIZE)

Solution: Combine systems
- Compost: 30 kg/day (60%)
- BSFL: 10 kg/day (20%)
- Vermicompost: 10 kg/day (20%)

Provides redundancy, balances capacity, diversifies products
```

### Zero-Waste Farm Design

```
Integrated Zero-Waste System (10-Acre Example)

PRODUCTION AREAS
================
[CEA - 1 acre]
    ↓ (plant waste, spent media)
[Outdoor Vegetables - 4 acres]
    ↓ (crop residue, culls)
[Pasture/Animals - 3 acres]
    ↓ (manure, bedding)
[Orchard - 2 acres]
    ↓ (prunings, drops)

WASTE PROCESSING HUB (Centralized)
===================================
[Receiving/Sorting Area]
    ↓
    +→ [Composting Bays] (woody, high-carbon, mixed)
    +→ [Vermicomposting Beds] (food waste, fine materials)
    +→ [BSFL Reactor] (food waste, fresh manure)
    +→ [Anaerobic Digester] (liquid waste, high-moisture)
    +→ [Biochar Kiln] (woody waste)

PRODUCTS
========
- Finished compost → Field application, sales
- Vermicompost → CEA media, high-value sales
- BSFL → Animal feed (on-farm or sales)
- Frass → Fertilizer (on-farm or sales)
- Biogas → Energy (heat, electricity)
- Digestate → Liquid fertilizer
- Biochar → Soil amendment, sales

WATER MANAGEMENT
================
[Rainwater Harvest] + [Well/Municipal]
    ↓
[Storage Tanks]
    ↓
[Distribution to Production]
    ↓
[Drainage/Runoff Collection]
    ↓
[Constructed Wetland Treatment]
    ↓
[Reuse in Irrigation]

Material Flow Metrics:
- Total organic waste generated: 50 tons/year
- Waste to landfill: 0.5 tons/year (<1%)
- Nutrient recovery: 90%+
- Water reuse: 85%+
- Energy production: 30% of farm needs
```

## 6. Practical Application

### Nutrient Flow Optimization Exercise

**Scenario:**
- 0.5-acre CEA facility + 2-acre outdoor market garden
- Annual waste: 10 tons plant material, 500 kg food waste, 2000 L spent media

**Task:** Design nutrient recovery system

**Solution Framework:**

1. **Characterize Waste**
   - Test nutrient content (N, P, K)
   - Assess C:N ratios
   - Identify contaminants (if any)

2. **Select Processing Methods**
   - Plant waste: Composting (primary)
   - Food waste: BSFL or vermicomposting
   - Spent media: Amendment or compost ingredient

3. **Size Infrastructure**
   - Compost area: 10 tons/year ÷ 0.3 tons/m³ ÷ 3 turns/year = 11 m³ total volume
   - Actual footprint: 3 windrows, 3m long × 1.5m wide × 1m high = 13.5 m³

4. **Calculate Nutrient Recovery**
   - Input N: 250 kg (estimated)
   - Composting retention: 80% = 200 kg N
   - Application to production: 200 kg N
   - External input reduction: ~70%

5. **Economic Analysis**
   - Compost value (on-farm use): $50/ton × 6 tons finished = $300
   - Fertilizer cost avoided: $200 kg N × $1.50/kg = $300
   - Waste disposal cost avoided: $50/ton × 10 tons = $500
   - Total annual value: $1,100
   - Infrastructure investment: $3,000
   - Payback: ~3 years

## Key Takeaways

1. **Closed-loop systems** dramatically reduce external inputs, environmental impact, and operating costs while building soil health
2. **Mass balance analysis** is essential for identifying nutrient flows, losses, and optimization opportunities
3. **Waste stream valorization** transforms "waste" into valuable products including compost, animal feed, energy, and fertilizers
4. **Multiple technologies** should be integrated to handle diverse waste streams and provide redundancy
5. **Zero-waste architecture** requires careful planning of scale, processing capacity, and cascading quality levels
6. **Economic returns** from nutrient recovery systems typically provide 2-5 year payback periods plus ongoing benefits

## Further Reading

- Converse, J.C. & Verhagen, A.M.W. (1997). "On-Farm Treatment of Agricultural Waste"
- Cordell, D. & White, S. (2014). "Life's Bottleneck: Sustaining the World's Phosphorus"
- Ellen MacArthur Foundation (2013). "Towards the Circular Economy"

---

**Next Lesson**: Water Harvesting and Conservation
