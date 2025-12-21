# Lesson 7: Water Harvesting and Conservation

## Learning Objectives

By the end of this lesson, you will be able to:
1. Design rainwater harvesting systems for agricultural operations
2. Implement greywater treatment and reuse systems
3. Create constructed wetlands for water purification
4. Develop aquifer recharge strategies
5. Calculate water footprints and identify reduction opportunities
6. Integrate water management across CEA and outdoor systems

## Introduction

Water is increasingly the limiting resource for agriculture globally. Regenerative systems prioritize water conservation, harvesting, and reuse to build resilience, reduce costs, and protect water resources. This lesson explores comprehensive water management strategies that integrate rainwater harvesting, greywater recycling, constructed wetlands, and conservation techniques across integrated farming operations.

## 1. Rainwater Harvesting System Design

### Rainfall Analysis and Potential

**Annual Harvest Calculation:**
```
Harvestable Water = Catchment Area × Annual Rainfall × Collection Efficiency

Example:
Greenhouse: 10,000 sq ft (929 m²)
Annual rainfall: 40 inches (1,016 mm or 1.016 m)
Collection efficiency: 85%

Harvest = 929 m² × 1.016 m × 0.85 = 802 m³ (211,000 gallons)

Monthly average: 67 m³ (17,600 gallons)
```

**Collection Efficiency Factors:**
- Metal roof: 90-95%
- Asphalt shingles: 75-85%
- Green roof: 40-60%
- Losses: Evaporation, first-flush, leaks

### System Components

```
Rainwater Harvesting System

[ROOF CATCHMENT]
    ↓
[GUTTERS & DOWNSPOUTS]
    ↓
[FIRST-FLUSH DIVERTER] → [Waste]
    ↓
[FILTRATION]
- Screen (mesh: 1-2 mm)
- Sediment filter
    ↓
[STORAGE TANKS]
- Above ground or below ground
- Sized for demand and rainfall pattern
    ↓
[PUMP & DISTRIBUTION]
    ↓
[USE]
- Irrigation
- Washdown
- (Potable with treatment)
```

### Storage Sizing

**Method 1: Supply vs. Demand**
```
Storage = Monthly Demand - Monthly Rainfall

Example (dry month):
Irrigation demand: 100 m³
Rainfall harvest: 30 m³
Storage needed: 70 m³

Add safety factor (20-30%): 85-90 m³
```

**Method 2: Drought Period**
```
Storage = Daily Demand × Longest Dry Period

Example:
Daily use: 3 m³
Longest dry spell: 30 days
Storage: 90 m³
```

**Practical Sizing:**
- Small operations (<1 acre): 1,000-5,000 gallons
- Medium (1-5 acres): 5,000-25,000 gallons
- Large (5+ acres): 25,000-100,000+ gallons

### Water Quality Management

**First-Flush Diversion:**
- Diverts initial roof runoff (most contaminated)
- Volume: 10-25 gallons per 1,000 sq ft catchment
- Automatic or manual reset

**Filtration:**
- Pre-filtration: Screen (remove leaves, debris)
- Primary: Sand or cartridge filter
- Secondary: Carbon filter (for irrigation)
- UV or chlorination (if potable use)

**Storage Tank Management:**
- Opaque or buried (prevent algae growth)
- Sealed (prevent contamination, mosquitoes)
- Overflow connection to swale or infiltration
- Cleanout access
- Water level indicator

## 2. Greywater Treatment and Reuse

### Greywater Sources and Characteristics

**Definition:** Wastewater from sinks, showers, laundry (excludes toilet water = blackwater)

```
Greywater Quality by Source

SOURCE          Volume    BOD    TSS    Nutrients    Pathogens    Reuse Suitability
======          ======    ===    ===    =========    =========    =================
Shower/bath     High      Low    Low    Very low     Low          Excellent
Bathroom sink   Low       Med    Med    Low          Medium       Good
Kitchen sink    Med       High   High   Medium       Medium       Fair (treat first)
Laundry         High      Med    Med    Medium       Low-Med      Good
Dishwasher      Low       High   Med    Medium       Medium       Fair (treat first)

BOD = Biological Oxygen Demand (mg/L)
TSS = Total Suspended Solids (mg/L)
```

### Greywater Treatment Systems

**Level 1: Minimal Treatment (Direct Irrigation)**
```
[Greywater Source]
    ↓
[Coarse Filter (mesh)]
    ↓
[Mulch Basin or Subsurface Irrigation]

Suitable for: Shower/bath, bathroom sink
Not suitable for: Kitchen, laundry with harsh detergents
```

**Level 2: Basic Treatment**
```
[Greywater Collection]
    ↓
[Settling Tank (24-48 hr)]
    ↓
[Sand Filter or Gravel Filter]
    ↓
[Subsurface Irrigation or Constructed Wetland]

Suitable for: All greywater sources
Removes: 50-70% BOD, 60-80% TSS
```

**Level 3: Advanced Treatment**
```
[Greywater Collection]
    ↓
[Screening & Settling]
    ↓
[Biofiltration (trickling filter or MBR)]
    ↓
[Disinfection (UV or chlorine)]
    ↓
[Storage for reuse]
    ↓
[Irrigation or Non-potable uses]

Suitable for: All greywater, high reuse standards
Removes: >90% BOD, >95% TSS, most pathogens
```

### Greywater Irrigation Design

**Branched Drain System:**
- Gravity-fed (no pump)
- Splits water among multiple outlets
- Self-regulating (equal distribution)
- Mulch basins at each outlet

**Subsurface Drip:**
- Filtered greywater
- Dripline buried 6-12 inches deep
- No surface contact
- Suitable for all plant types

**Design Guidelines:**
- Application rate: Match soil infiltration rate
- Rotation: Allow soil rest periods
- Plant selection: Salt-tolerant if using high-detergent water
- Setbacks: 5 ft from buildings, 100 ft from wells
- Avoid: Root vegetables with direct contact

## 3. Constructed Wetlands for Water Treatment

### Types of Constructed Wetlands

**1. Free Water Surface (FWS) Wetlands**
```
Cross-Section View:

[Inlet] → [Water Level] → [Outlet]
          [Emergent Plants]
          [Water Column]
          [Substrate/Soil]

Characteristics:
- Visible water surface
- 6-18 inch water depth
- Emergent plants (cattails, bulrush)
- Aerobic and anaerobic zones
- Wildlife habitat value
```

**2. Subsurface Flow (SSF) Wetlands**
```
Cross-Section View:

[Inlet] → [Gravel Media] → [Outlet]
          [Plant Roots Throughout]
          [Water Level (Below Surface)]
          [Impermeable Liner]

Types:
- Horizontal Flow (HSSF)
- Vertical Flow (VSSF)

Characteristics:
- No exposed water (no mosquitoes)
- Gravel or sand media
- Plants rooted in media
- High treatment efficiency
- Less land area required
```

### Design Parameters

**Sizing:**
```
Surface Area = (Q × ln(C₀/C_out)) / (k_T × d)

Where:
Q = Flow rate (m³/day)
C₀ = Inlet concentration (mg/L)
C_out = Target outlet concentration (mg/L)
k_T = Temperature-dependent rate constant
d = Depth (m)

Simplified Rule of Thumb:
- FWS: 10-20 m² per person equivalent
- HSSF: 5-10 m² per person equivalent
- VSSF: 2-5 m² per person equivalent

Agricultural application:
- FWS: 1:100 to 1:200 ratio (wetland:production area)
- HSSF: 1:50 to 1:100 ratio
```

**Plant Selection:**

| Plant | Type | Tolerance | Treatment Benefit |
|-------|------|-----------|-------------------|
| Cattails (Typha spp.) | Emergent | High | BOD, N, metals |
| Bulrush (Schoenoplectus) | Emergent | High | N, P, pathogens |
| Reed (Phragmites) | Emergent | Very high | BOD, metals |
| Water iris (Iris pseudacorus) | Emergent | Medium | Aesthetics, N, P |
| Sedges (Carex spp.) | Emergent | Medium-High | Fine particulates |
| Watercress (Nasturtium) | Emergent/floating | Medium | N, P (edible) |

**Treatment Performance:**

| Parameter | Inlet (typical) | Outlet (achievable) | Removal % |
|-----------|-----------------|---------------------|-----------|
| BOD | 100-300 mg/L | 10-30 mg/L | 80-95% |
| TSS | 100-250 mg/L | 5-20 mg/L | 85-98% |
| Total N | 30-70 mg/L | 10-25 mg/L | 40-70% |
| Total P | 5-15 mg/L | 2-8 mg/L | 30-60% |
| Pathogens | High | Low-Medium | 90-99% |

### Integration with Agricultural Systems

```
Integrated Water Treatment Flow

[CEA Drainage Water]
    ↓
[Settling Tank] → [Solids to compost]
    ↓
[Constructed Wetland Treatment]
    ↓
[Treated Water Testing]
    ↓
    +→ [Outdoor Irrigation] (if suitable)
    +→ [Aquifer Recharge] (if very clean)
    +→ [Further Treatment] → [CEA Reuse]
```

## 4. Aquifer Recharge Strategies

### Infiltration Basins

```
Infiltration Basin Design

[Runoff/Treated Water Input]
    ↓
[Vegetated Basin]
- 2-4 feet deep
- Flat bottom
- Native grasses/sedges
    ↓
[Infiltration Through Soil]
    ↓
[GROUNDWATER]

Design Criteria:
- Infiltration rate: >0.5 inches/hour
- Soil type: Sandy or loamy preferred
- Depth to groundwater: >4 feet
- Area: Based on volume and infiltration rate

Example:
Volume to infiltrate: 100 m³/month
Infiltration rate: 25 mm/hr
Operating hours: 100 hr/month
Area needed = 100 m³ / (0.025 m/hr × 100 hr) = 40 m²
```

### Swales and Keyline Design

**Swales:**
- On-contour ditches
- Slow water, allow infiltration
- Planted with deep-rooted vegetation
- Overflow connects to next swale downslope

**Keyline Pattern:**
- Strategic water distribution across landscape
- Based on topography analysis
- Maximizes infiltration
- Reduces erosion

## 5. Water Footprint Reduction

### Water Footprint Assessment

```
Water Footprint Components

BLUE WATER (Surface & Groundwater)
- Irrigation
- Washdown
- Processing
- Climate control (evaporative cooling)

GREEN WATER (Rainfall)
- Directly used by plants
- Soil moisture

GREY WATER (Pollution Footprint)
- Dilution water needed for pollutants
- Nutrient runoff
- Pesticide runoff

Total Water Footprint = Blue + Green + Grey
```

**Calculation Example:**
```
Lettuce Production Comparison

CONVENTIONAL FIELD (1 ton lettuce)
Blue water: 200 m³ (irrigation)
Green water: 100 m³ (rainfall)
Grey water: 50 m³ (runoff dilution)
Total: 350 m³/ton

CEA HYDROPONIC (1 ton lettuce)
Blue water: 20 m³ (90% recirculation)
Green water: 0 m³ (no rainfall dependency)
Grey water: 2 m³ (minimal discharge)
Total: 22 m³/ton

Reduction: 94%
```

### Conservation Strategies

**1. Production System Selection**
- Hydroponics/Aquaponics: 90-95% reduction vs. field
- Drip irrigation: 30-60% reduction vs. flood/furrow
- Mulching: 20-40% reduction in evaporation

**2. Irrigation Optimization**
- Soil moisture sensors
- Weather-based scheduling
- Precision application
- Deficit irrigation strategies

**3. Crop Selection**
- Choose climate-appropriate crops
- Select drought-tolerant varieties
- Match crops to water availability

**4. Infrastructure**
- Fix leaks promptly
- Insulate pipes (reduce condensation loss)
- Use efficient fixtures
- Recirculate where possible

## 6. Integrated Water Management

### Whole-System Water Design

```
Integrated Water Flow (10-Acre Farm)

INPUTS
======
[Rainfall] → 400,000 gallons/year (example)
[Municipal/Well] → 100,000 gallons/year

CAPTURE & STORAGE
=================
[Roof Catchment] → 200,000 gal → [Storage Tanks]
[Swales/Ponds] → 150,000 gal → [Groundwater Recharge]
[Losses] → 50,000 gal → [Evaporation]

PRODUCTION USE
==============
[CEA] → 80,000 gal/year (95% recirculation)
    ↓ (5% discharge)
[Constructed Wetland] → 4,000 gal/year treated
    ↓
[Outdoor Irrigation] → 180,000 gal/year
    ↓ (50% evapotranspiration, 40% infiltration, 10% runoff)
[Runoff Collection] → 18,000 gal → [Ponds/Infiltration]

WATER REUSE
===========
[Greywater] → 30,000 gal/year → [Treatment] → [Irrigation]

Total Water Input: 500,000 gal
Total Water Reuse: 230,000 gal
Reuse Rate: 46%
External Dependency: 20% (100,000 gal purchased)
```

### Drought Resilience Planning

**Multi-Year Storage:**
- Size storage for 2-3 year drought
- Prioritize critical crops/systems
- Develop drought action plan

**Drought Response Levels:**
```
Level 1: Watch (80% of normal rainfall)
- Monitor closely
- Optimize irrigation
- Delay non-essential water use

Level 2: Warning (60% of normal)
- Reduce irrigated acreage
- Focus on highest-value crops
- Implement strict conservation

Level 3: Emergency (40% of normal)
- CEA only (highest efficiency)
- Perennials only (outdoor)
- Consider water purchase/trucking

Level 4: Crisis (<40% of normal)
- Survival mode
- Protect infrastructure
- Maintain breeding stock only
- Temporary shutdown possible
```

## Practical Application: Water Management Plan

**5-Acre Integrated Farm Water Budget:**

```
ANNUAL WATER NEEDS
==================
CEA (0.5 acre):        20,000 gallons
Outdoor (2 acres):     400,000 gallons
Processing:            10,000 gallons
Domestic:              30,000 gallons
Total:                 460,000 gallons

WATER SOURCES
=============
Rainwater harvest:     180,000 gallons (roof + catchment)
Greywater reuse:       25,000 gallons
Well/municipal:        255,000 gallons

CONSERVATION MEASURES
=====================
- CEA recirculation: Saves 360,000 gallons/year
- Drip irrigation (outdoor): Saves 200,000 gallons/year
- Mulching: Saves 50,000 gallons/year
- Greywater reuse: Saves 25,000 gallons/year
Total savings: 635,000 gallons/year vs. conventional

INFRASTRUCTURE INVESTMENT
=========================
Rainwater system: $15,000
Greywater system: $8,000
Constructed wetland: $12,000
Drip irrigation: $6,000
Total: $41,000

Annual savings (@$3/1,000 gal): $1,900
Payback period: 22 years

Additional benefits (non-monetary):
- Drought resilience
- Regulatory compliance
- Environmental stewardship
- Soil health (infiltration)
```

## Key Takeaways

1. **Rainwater harvesting** can provide 30-80% of agricultural water needs depending on rainfall and storage
2. **Greywater reuse** safely recycles 60-90% of domestic water for irrigation with appropriate treatment
3. **Constructed wetlands** provide effective, low-cost water treatment while creating habitat
4. **Aquifer recharge** builds long-term water security and supports groundwater-dependent ecosystems
5. **Water footprint reduction** through system design (CEA) and conservation can reduce water use by 50-95%
6. **Integrated water management** optimizes capture, use, treatment, and reuse across all farm systems

## Further Reading

- Lancaster, B. (2013). "Rainwater Harvesting for Drylands and Beyond"
- Ludwig, A. (2015). "Create an Oasis with Greywater"
- Yeomans, P.A. (1993). "Water for Every Farm"
- USDA (2012). "Agricultural Waste Management Field Handbook"

---

**Next Lesson**: Biodiversity Enhancement
