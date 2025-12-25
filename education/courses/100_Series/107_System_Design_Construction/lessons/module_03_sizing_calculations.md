# Module 3: Sizing Calculations
## Course 107: System Design & Construction

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 3 of 8 |
| **Duration** | 1 hour |
| **Format** | Lecture + Calculation Workshop |
| **Materials** | Workbook, calculator, sizing worksheets |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Calculate** appropriate system volumes based on production goals
2. **Determine** fish stocking densities for aquaponic systems
3. **Size** grow beds and plant spacing for optimal production
4. **Compute** water flow rates and cycling requirements
5. **Estimate** nutrient and feeding requirements
6. **Optimize** system ratios for balance and efficiency

---

## Module Outline

| Time | Activity | Type |
|------|----------|------|
| 0:00-0:05 | Review & Calculation Overview | Interactive |
| 0:05-0:15 | Lecture: Volume Calculations | Presentation |
| 0:15-0:25 | Lecture: Stocking & Ratios | Presentation |
| 0:25-0:30 | Knowledge Check | Assessment |
| 0:30-0:40 | Activity: Size a System | Hands-on |
| 0:40-0:50 | Workshop: Flow Calculations | Collaborative |
| 0:50-0:55 | Ratio Optimization Exercise | Practice |
| 0:55-1:00 | Summary & Reflection | Wrap-up |

---

## Lesson Content

### 3.1 Foundation: Working Backwards from Goals

#### The Goal-Based Sizing Approach

```
SIZING PROCESS FLOW

START: What's your goal?
    │
    ├─► Weekly Production Target
    │   Example: 100 heads lettuce/week
    │
    ▼
Calculate: Plants Needed
    │   100 heads/week ÷ (35 day cycle ÷ 7 days)
    │   = 100 ÷ 5 = 20 plants harvested per week
    │   = 500 plants total (all stages)
    │
    ▼
Determine: Growing Space
    │   500 plants × 1 sq ft/plant
    │   = 500 sq ft grow area needed
    │
    ▼
Size: System Components
    │   Tanks, beds, pumps, etc.
    │   Based on grow area
    │
    ▼
Verify: Resource Requirements
    │   Water, power, nutrients
    │
    ▼
RESULT: Complete System Specifications
```

#### Production Planning Variables

| Variable | Definition | Typical Values |
|----------|------------|----------------|
| **Cycle Time** | Days from seed to harvest | 28-120 days |
| **Plant Density** | Plants per square foot | 1-16 depending on crop |
| **Yield** | Harvestable product per plant | Varies by crop |
| **Success Rate** | Percentage reaching harvest | 85-95% |
| **Staging** | Multiple planting cycles | 4-8 stages |

---

### 3.2 Volume Calculations

#### Basic Geometry Formulas

```
COMMON CONTAINER VOLUMES

RECTANGULAR TANK/BED:
    Volume = Length × Width × Height

    Example: 4' × 2' × 1' = 8 cubic feet
           = 8 × 7.48 = 59.84 gallons

CIRCULAR TANK:
    Volume = π × (Radius)² × Height

    Example: 4' diameter, 3' tall
           Radius = 2 feet
           Volume = 3.14 × (2)² × 3 = 37.68 cubic feet
                  = 37.68 × 7.48 = 281.8 gallons

CYLINDRICAL (IBC TOTE):
    Standard IBC = 275 gallons
    48" × 40" × 46" = approximately 275 gallons

CONVERSION FACTORS:
    • 1 cubic foot = 7.48 gallons
    • 1 gallon = 3.785 liters
    • 1 cubic meter = 264.2 gallons
```

#### System Volume Examples

| System Component | Dimensions | Volume Calculation | Result |
|------------------|------------|-------------------|--------|
| Fish Tank | 6' diameter × 3' deep | π × 3² × 3 × 7.48 | 636 gallons |
| Grow Bed | 8' × 4' × 1' | 8 × 4 × 1 × 7.48 | 239 gallons |
| Sump Tank | 2' × 2' × 2' | 2 × 2 × 2 × 7.48 | 60 gallons |
| NFT Channel | 4" × 4" × 10' | (0.33 × 0.33 × 10) × 7.48 | 8 gallons |
| **Total System** | - | Sum of all components | 943 gallons |

---

### 3.3 Aquaponic Stocking Calculations

#### Fish Stocking Density Guidelines

```
STOCKING DENSITY APPROACHES

CONSERVATIVE (Beginner)
    1 lb mature fish per 5-10 gallons

MODERATE (Experienced)
    1 lb mature fish per 3-5 gallons

INTENSIVE (Expert, high aeration)
    1 lb mature fish per 1-3 gallons

Example Calculation:
    500 gallon fish tank
    Conservative: 500 ÷ 10 = 50 lbs max fish
    Moderate: 500 ÷ 5 = 100 lbs max fish
    Intensive: 500 ÷ 2 = 250 lbs max fish
```

#### Fish Numbers by Species

| Species | Adult Weight | Tank Size | Stocking Number |
|---------|--------------|-----------|-----------------|
| **Tilapia** | 1-2 lbs | 500 gallons | 50-100 fish |
| **Goldfish** | 0.25-0.5 lbs | 500 gallons | 100-200 fish |
| **Catfish** | 1-3 lbs | 500 gallons | 50-75 fish |
| **Trout** | 1-2 lbs | 500 gallons | 25-50 fish (cold water) |
| **Barramundi** | 1-3 lbs | 500 gallons | 50-75 fish |

#### Growth Calculations

```
FISH GROWTH PROJECTION

Starting Point:
    100 fingerlings × 0.05 lbs = 5 lbs total

After 3 months:
    100 fish × 0.3 lbs = 30 lbs total

After 6 months:
    95 fish × 0.8 lbs = 76 lbs total (5% mortality)

After 9 months (harvest):
    90 fish × 1.5 lbs = 135 lbs total

Stocking Check:
    500 gallon tank ÷ 135 lbs = 3.7 gal/lb ✓ (acceptable)
```

---

### 3.4 Grow Bed Sizing

#### Fish-to-Grow Bed Ratios

```
STANDARD AQUAPONIC RATIOS

1:1 RATIO (Conservative)
    Fish Tank : Grow Bed = 1 : 1 by volume

    500 gal fish tank = 500 gal grow bed volume

    At 12" deep: 500 gal ÷ 7.48 = 66.8 cu ft
                = 66.8 sq ft grow area

1:2 RATIO (More Plants)
    Fish Tank : Grow Bed = 1 : 2 by volume

    500 gal fish tank = 1000 gal grow bed volume
                      = 133.6 sq ft grow area

Example Layout (1:1 ratio):
    4 grow beds, each: 4' × 4' × 1' deep
    4 × (4 × 4 × 1 × 7.48) = 4 × 119.68 = 478.7 gal ✓
```

#### Grow Bed Depth Requirements

| System Type | Recommended Depth | Reasoning |
|-------------|-------------------|-----------|
| **Media Bed** | 12" | Optimal root depth, biofilter volume |
| **DWC/Raft** | 12-18" water | Plant support, thermal mass |
| **NFT Channel** | 3-4" | Thin film requirement |
| **Vertical Tower** | 4-6 feet tall | Space optimization |

#### Plant Spacing and Density

```
PLANTS PER SQUARE FOOT

HIGH DENSITY (Small Plants)
    • Lettuce: 4 plants/sq ft (6" spacing)
    • Small herbs: 4-9 plants/sq ft
    • Microgreens: 16-32 plants/sq ft

MEDIUM DENSITY
    • Large lettuce: 2 plants/sq ft (8" spacing)
    • Basil: 2-4 plants/sq ft
    • Chard, Kale: 1-2 plants/sq ft

LOW DENSITY (Large Plants)
    • Tomatoes: 1 plant per 2-4 sq ft
    • Peppers: 1 plant per 2 sq ft
    • Cucumbers: 1 plant per 3-4 sq ft
    • Squash: 1 plant per 6-9 sq ft

Example Calculation:
    100 sq ft grow bed
    Lettuce at 4 plants/sq ft
    = 400 plants total capacity

    With 35-day cycle and weekly harvest:
    400 ÷ 5 weeks = 80 heads harvested per week
```

---

### 3.5 Water Flow and Cycling

#### Flow Rate Requirements

| System Type | Flow Rate | Cycling Frequency |
|-------------|-----------|-------------------|
| **Media Bed (Flood/Drain)** | Total volume per hour | 1 cycle per hour |
| **Media Bed (Continuous)** | 2× volume per hour | Continuous flow |
| **DWC Aquaponic** | 2-3× tank volume per hour | Continuous |
| **NFT** | 0.5-1 gal/min per channel | Continuous |
| **Drip Hydroponic** | 0.5-2 gal/hr per plant | Continuous |

#### Flow Calculation Example

```
FLOOD AND DRAIN MEDIA BED

System Specifications:
    • 4 grow beds: 4' × 4' × 1' each
    • Total volume: 479 gallons
    • Target: 1 flood/drain cycle per hour

Flow Required:
    479 gallons ÷ 60 minutes = 8 GPM
    Or 479 GPH for continuous slow fill

Pump Selection:
    Need: 479 GPH at system head
    Choose: 600 GPH pump (25% safety margin)

Timer Setting (with faster pump):
    600 GPH pump
    Fill time: 479 gal ÷ 600 GPH = 48 minutes

    Cycle: 48 min ON, 12 min drain = 60 min total ✓
```

#### Sump Tank Sizing

```
SUMP TANK CALCULATION

Purpose: Holds water during drain cycle

Minimum Size = Volume of grow beds above water level

Example:
    4 beds × 4' × 4' × 0.75' (drained depth)
    = 48 cu ft × 7.48 = 359 gallons

    Add 25% buffer: 359 × 1.25 = 449 gallons

    Use: 500 gallon sump tank
```

---

### 3.6 Feeding and Nutrient Calculations

#### Aquaponic Feeding Rates

```
FISH FEEDING CALCULATION

Feed Rate = Body Weight × Feeding Percentage

Temperature-Based Feeding:
    • 50-60°F: 0.5% of body weight/day
    • 60-70°F: 1.0% of body weight/day
    • 70-80°F: 1.5-2.0% of body weight/day
    • 80-85°F: 2.0-3.0% of body weight/day

Example:
    100 lbs of fish
    Water temp: 75°F
    Feed rate: 100 lbs × 1.75% = 1.75 lbs/day

Monthly feed: 1.75 × 30 = 52.5 lbs/month
Annual feed: 1.75 × 365 = 639 lbs/year
```

#### Nutrient Production from Feed

| Input | Conversion | Output |
|-------|------------|--------|
| 1 lb fish feed | → | 0.3 lb fish growth |
| 1 lb fish feed | → | 0.03 lb ammonia (NH₃) |
| 1 lb ammonia | → | 3.6 lb nitrate (NO₃) |

```
PLANT NUTRIENT NEEDS

Based on feeding rate:
    1.75 lbs feed/day
    = 0.0525 lbs ammonia/day
    = 0.189 lbs nitrate/day
    = 86 grams nitrate/day

Plant Consumption:
    • Leafy greens: 150-200 ppm nitrogen
    • Fruiting plants: 200-250 ppm nitrogen

System Balance Check:
    500 gal system producing 86g nitrate/day
    86g ÷ 500 gal ÷ 3.785 L/gal = 45 ppm/day increase

    With plants consuming: System stays balanced ✓
```

#### Hydroponic Nutrient Calculations

```
HYDROPONIC NUTRIENT DOSING

Target EC/PPM:
    • Seedlings: 0.8-1.0 EC (400-500 ppm)
    • Leafy greens: 1.5-2.0 EC (750-1000 ppm)
    • Fruiting: 2.0-3.0 EC (1000-1500 ppm)

Reservoir Size:
    100 plants × 0.5 gal/day × 7 day cycle = 350 gallons

Nutrient Mix:
    350 gallons × target EC
    Follow manufacturer instructions for concentration

    Typical: 2-3 grams dry nutrient per gallon
    350 gal × 2.5 g = 875 grams total
```

---

### 3.7 Surface Area Calculations

#### Biofilter Surface Area

```
BIOFILTER SIZING FORMULA

Surface Area = Feed Rate × Conversion Factor

For Media Beds:
    1 sq ft surface area per 1 lb feed/day

Example:
    Feeding 2 lbs/day
    Need: 2 sq ft minimum biofilter surface

    With 12" deep media:
    2 sq ft × 1 ft deep = 2 cu ft
    = 15 gallons of media

    Recommendation: Add 50% buffer = 22 gallons

Clay Pebbles Surface Area:
    • 1 cubic foot ≈ 250 sq ft surface (porous media)
    • 2 cu ft = 500 sq ft bacterial surface ✓
```

#### Growing Surface Calculations

| Production Goal | Growing Surface Needed | System Footprint |
|-----------------|------------------------|------------------|
| **50 heads lettuce/week** | 250 sq ft | 15' × 17' (includes walkways) |
| **100 heads lettuce/week** | 500 sq ft | 22' × 23' |
| **25 lbs tomatoes/week** | 200 sq ft | 15' × 15' |
| **50 lbs mixed greens/week** | 400 sq ft | 20' × 20' |

---

### 3.8 System Ratio Optimization

#### The Complete Ratio System

```
BALANCED AQUAPONIC SYSTEM RATIOS

FISH TANK : FILTRATION : GROW BEDS

Conservative (1:1:1)
    500 gal : 500 gal : 500 gal

Optimized (1:0.5:2)
    500 gal : 250 gal : 1000 gal
    (More plants, less filtration needed)

Component Breakdown:
┌──────────────────────────────────────────┐
│ Fish Tank (500 gal)                      │
│   • 50-100 lbs fish                      │
│   • 1-2 lbs feed/day                     │
└─────┬────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────┐
│ Mechanical Filter (50 gal)               │
│   • Removes solids                       │
│   • 10% of fish tank volume              │
└─────┬────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────┐
│ Biofilter (200 gal media)                │
│   • Converts ammonia to nitrate          │
│   • 40% of fish tank volume              │
└─────┬────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────┐
│ Grow Beds (1000 gal)                     │
│   • 133 sq ft growing area               │
│   • 400-500 plants                       │
│   • Additional biofiltration             │
└──────────────────────────────────────────┘
```

#### Optimization Worksheet

```
SYSTEM SIZING WORKSHEET

STEP 1: Define Production Goal
    Target production: _____ lbs/week
    Primary crop: _______________

STEP 2: Calculate Plant Numbers
    Harvest cycle: _____ days
    Plants per harvest: _____
    Total plants needed (all stages): _____

STEP 3: Determine Growing Area
    Plants needed: _____
    Spacing: _____ sq ft per plant
    Growing area: _____ sq ft
    Grow bed volume at 12" deep: _____ gallons

STEP 4: Size Fish Tank (Aquaponics)
    Grow bed volume: _____ gallons
    Using 1:2 ratio: _____ ÷ 2 = _____ gal fish tank

STEP 5: Calculate Fish Capacity
    Fish tank: _____ gallons
    At 5 gal/lb: _____ lbs max fish

STEP 6: Feeding Rate
    Fish weight: _____ lbs
    Temperature: _____°F
    Feed rate: _____ % = _____ lbs/day

STEP 7: Verify Biofilter
    Feed rate: _____ lbs/day
    Need: _____ sq ft biofilter surface
    Have: _____ gal media = _____ sq ft ✓

STEP 8: Size Pump
    System volume: _____ gallons
    Flow needed: _____ GPH
    Total head: _____ feet
    Pump required: _____ GPH at _____ feet

STEP 9: Size Air Pump
    Fish tank: _____ gallons
    At 0.5 CFM per 100 gal: _____ CFM

STEP 10: Verify Balance
    □ Fish stocking appropriate for tank size
    □ Feed rate supports plant nutrient needs
    □ Biofilter adequate for waste conversion
    □ Pump adequate for flow requirements
    □ Growing area matches production goals
```

---

### 3.9 Scaling Calculations

#### Small to Large System Comparison

| Component | Small (250 gal) | Medium (1000 gal) | Large (5000 gal) |
|-----------|-----------------|-------------------|------------------|
| **Fish Tank** | 125 gal | 500 gal | 2500 gal |
| **Grow Beds** | 250 gal (33 sq ft) | 1000 gal (133 sq ft) | 5000 gal (668 sq ft) |
| **Max Fish** | 12-25 lbs | 50-100 lbs | 250-500 lbs |
| **Feed/Day** | 0.25-0.5 lbs | 1-2 lbs | 5-10 lbs |
| **Plant Capacity** | 100-130 | 400-530 | 2000-2700 |
| **Weekly Harvest** | 20-25 heads | 80-100 heads | 400-500 heads |
| **Water Pump** | 250-300 GPH | 1000-1200 GPH | 5000-6000 GPH |
| **Air Pump** | 1 CFM | 5 CFM | 25 CFM |
| **Footprint** | 100 sq ft | 400 sq ft | 2000 sq ft |

---

### 3.10 Key Takeaways

```
MODULE 3 KEY POINTS

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. WORK BACKWARDS from production goals to                │
│     determine system size                                  │
│                                                             │
│  2. FISH STOCKING should be conservative (5-10             │
│     gallons per pound) for beginners                       │
│                                                             │
│  3. GROW BED RATIOS of 1:1 or 1:2 (fish tank to           │
│     grow bed) provide good balance                         │
│                                                             │
│  4. FLOW RATES must match system type and                  │
│     maintain proper cycling                                │
│                                                             │
│  5. FEED RATE determines nutrient production               │
│     and plant capacity                                     │
│                                                             │
│  6. ALL COMPONENTS must be sized as a                      │
│     complete balanced system                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Discussion Questions

1. **What happens** if your fish tank is too small for your planned grow bed size?

2. **How would you adjust** system sizing if production needs increase by 50%?

3. **Why is conservative stocking** better for beginners than intensive stocking?

4. **What are the risks** of undersizing pumps or biofilters?

5. **How do seasonal changes** in temperature affect feeding rates and system sizing?

---

## Vocabulary

| Term | Definition |
|------|------------|
| **Stocking Density** | Weight of fish per volume of water |
| **Feed Conversion Ratio** | Pounds of feed needed per pound of fish growth |
| **Cycling** | Complete circulation of water through system |
| **Biofilter Capacity** | Amount of ammonia that can be processed per day |
| **Plant Density** | Number of plants per square foot of growing area |
| **System Volume** | Total water contained in all components |
| **Flow Rate** | Volume of water moved per unit time (GPH, GPM) |
| **Surface Area** | Area available for bacterial colonization or plant growth |

---

## Activity: Size a Complete System

**See: activities/activity_03_system_sizing.md**

In this activity, you will use the sizing formulas to design a complete aquaponic system based on specific production goals.

---

## Quiz Preview

After completing this module, you will take **Quiz 3: Sizing Calculations**

The quiz covers:
- Volume calculations
- Stocking density determination
- Grow bed sizing and ratios
- Flow rate calculations
- System balance verification

**See: quizzes/quiz_03_sizing_calculations.md**

---

## Next Module Preview

**Module 4: Plumbing Fundamentals**

In the next module, we'll learn about pipes, fittings, and plumbing techniques to connect all your sized components together properly.

---

## Additional Resources

- Video: "Aquaponic Ratios Explained" (18 minutes)
- Tool: System Sizing Calculator (Excel)
- Reading: "Aquaponic System Sizing" - UVI Commercial Guidelines
- Worksheet: Complete System Design Template

---

*Module 3 of 8 | Course 107: System Design & Construction*
*EcoFusion Academy*
