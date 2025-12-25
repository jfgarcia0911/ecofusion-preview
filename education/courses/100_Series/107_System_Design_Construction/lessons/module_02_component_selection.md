# Module 2: Component Selection
## Course 107: System Design & Construction

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 2 of 8 |
| **Duration** | 1 hour |
| **Format** | Lecture + Component Comparison |
| **Materials** | Workbook, component catalogs, calculator |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Identify** essential components for hydroponic and aquaponic systems
2. **Compare** different materials and equipment options for each component
3. **Select** appropriate pumps, tanks, and growing vessels for your design
4. **Evaluate** quality versus cost trade-offs in component selection
5. **Calculate** required capacities for pumps, filters, and other equipment
6. **Create** a comprehensive parts list with specifications

---

## Module Outline

| Time | Activity | Type |
|------|----------|------|
| 0:00-0:05 | Review & Component Overview | Interactive |
| 0:05-0:15 | Lecture: Tanks & Containers | Presentation |
| 0:15-0:25 | Lecture: Pumps & Filtration | Presentation |
| 0:25-0:30 | Knowledge Check | Assessment |
| 0:30-0:40 | Activity: Component Comparison | Hands-on |
| 0:40-0:50 | Pump Sizing Workshop | Collaborative |
| 0:50-0:55 | Parts List Development | Practice |
| 0:55-1:00 | Summary & Reflection | Wrap-up |

---

## Lesson Content

### 2.1 System Components Overview

#### Essential Component Categories

```
COMPLETE SYSTEM COMPONENTS

┌─────────────────────────────────────────────────────┐
│                                                     │
│  CONTAINMENT                                        │
│  • Fish tanks (aquaponics)                          │
│  • Reservoirs (hydroponics)                         │
│  • Grow beds/channels                               │
│  └──────────────────────────────────────────────┐   │
│                                                  │   │
│  CIRCULATION                                     │   │
│  • Water pumps                                   │   │
│  • Air pumps                                     │   │
│  • Plumbing (pipes, fittings)                    │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  FILTRATION (Aquaponics)                             │
│  • Mechanical filters                                │
│  • Biofilters                                        │
│  • Clarifiers                                        │
│  └──────────────────────────────────────────────┐   │
│                                                  │   │
│  AERATION                                        │   │
│  • Air pumps                                     │   │
│  • Air stones/diffusers                          │   │
│  • Venturi injectors                             │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
│  MONITORING & CONTROL                                │
│  • pH/EC meters                                      │
│  • Thermometers                                      │
│  • Timers                                            │
│  • Automation controllers                            │
│  └──────────────────────────────────────────────┐   │
│                                                  │   │
│  GROWING MEDIA (Some Systems)                    │   │
│  • Clay pebbles                                  │   │
│  • Rockwool                                      │   │
│  • Perlite/Vermiculite                           │   │
│  └──────────────────────────────────────────────┘   │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

### 2.2 Tanks and Containers

#### Material Selection

| Material | Pros | Cons | Best Use | Cost |
|----------|------|------|----------|------|
| **IBC Totes** | Inexpensive, readily available | Limited sizes, UV sensitive | Beginner systems, fish tanks | $ |
| **Polyethylene Tanks** | Food-safe, durable, many sizes | Can be expensive | All applications | $-$$$ |
| **Fiberglass** | Extremely durable, custom sizes | Expensive, heavy | Commercial systems | $$$ |
| **Concrete** | Permanent, large capacity | Requires curing, not portable | Large commercial | $$$ |
| **Wood Lined** | DIY-friendly, customizable | Requires liner, maintenance | Custom builds | $-$$ |
| **Stock Tanks** | Durable, available locally | Limited sizes, galvanized issues | Small-medium systems | $$ |

#### Tank Sizing Guidelines

**Aquaponics Fish Tanks:**

| System Scale | Fish Tank Size | Maximum Fish Load | Grow Bed Volume |
|--------------|----------------|-------------------|-----------------|
| Small/Hobby | 50-100 gallons | 10-20 lbs | 50-200 gallons |
| Medium/Market | 200-500 gallons | 40-100 lbs | 200-1000 gallons |
| Commercial | 1000+ gallons | 200+ lbs | 1000+ gallons |

**Hydroponic Reservoirs:**

```
RESERVOIR SIZING FORMULA

Reservoir Volume = (Number of Plants) × (Daily Water Use) × (Days Between Refill)

Example:
    100 lettuce plants × 0.5 gal/day × 7 days = 350 gallons

Minimum Reservoir = 350 gallons
Recommended (with buffer) = 400-450 gallons

Rule of Thumb:
    • Leafy greens: 0.5 gallons per plant
    • Fruiting plants: 2-3 gallons per plant
    • Refill cycle: 5-14 days typical
```

#### Container Specifications Checklist

```
TANK SELECTION CRITERIA

□ Volume capacity: ________________
□ Food-grade material: Yes / No
□ UV resistant: Yes / No
□ Opaque (light blocking): Yes / No
□ Fittings/bulkheads compatible: Yes / No
□ Drain valve location: Bottom / Side / None
□ Lid/cover included: Yes / No
□ Dimensions fit space: Yes / No
□ Weight when full: ________ lbs
□ Floor load capacity adequate: Yes / No
```

---

### 2.3 Water Pumps

#### Pump Types and Applications

| Pump Type | Description | Best For | Efficiency |
|-----------|-------------|----------|------------|
| **Submersible** | Operates underwater | Small-medium systems, quiet | Medium |
| **External/Inline** | Outside water, plumbed in | Large systems, high flow | High |
| **Air-driven** | Uses air to move water | Backup, low flow | Low |
| **Centrifugal** | High flow, low pressure | Circulation, waterfalls | High |
| **Diaphragm** | Steady pressure | Drip systems | Medium |

#### Pump Sizing Calculations

**Step 1: Determine Required Flow Rate**

| System Type | Flow Rate Guideline |
|-------------|---------------------|
| **Aquaponic Media Bed** | Total volume cycled per hour |
| **Aquaponic DWC** | 2-3× tank volume per hour |
| **NFT** | 0.5-1 gallon per minute per channel |
| **Drip System** | 0.5-2 gallons per hour per plant |

**Step 2: Calculate Total Head (Pressure)**

```
HEAD CALCULATION

Total Head = Static Head + Friction Loss + Pressure Requirements

Static Head (vertical lift):
    Floor to highest point = _____ feet

Friction Loss:
    Every 10 feet horizontal pipe ≈ 1 foot head
    Every 90° elbow ≈ 1 foot head
    Every valve ≈ 2 feet head

    Total friction = _____ feet

Pressure Requirements:
    Spray/mist nozzles: 10-30 feet
    Drip emitters: 5-15 feet
    Simple circulation: 0 feet

    Total Head = _____ feet
```

**Step 3: Select Pump**

```
PUMP PERFORMANCE CURVE

Flow Rate (GPH) vs. Head (feet)

High Head (Low Flow)
    │
    │   ╱
    │  ╱
    │ ╱
    │╱_________ Low Head (High Flow)
    └────────────────►
    0   500  1000  1500 GPH

Your Operating Point:
    Required Flow: ______ GPH
    Total Head: ______ feet

    Select pump with curve above this point
    Add 20% safety margin
```

#### Pump Specifications Example

| Specification | Small System | Medium System | Large System |
|---------------|--------------|---------------|--------------|
| **Flow Rate** | 200-400 GPH | 800-1500 GPH | 3000+ GPH |
| **Head Capacity** | 6-8 feet | 8-12 feet | 12-20 feet |
| **Power Draw** | 25-45 watts | 75-150 watts | 300+ watts |
| **Inlet Size** | 1/2" or 3/4" | 3/4" or 1" | 1.5" or 2" |
| **Cost Range** | $30-$80 | $100-$250 | $300-$1000+ |

---

### 2.4 Air Pumps and Aeration

#### Why Aeration Matters

```
DISSOLVED OXYGEN REQUIREMENTS

Fish Requirements:
    • Minimum: 5 ppm
    • Optimal: 6-8 ppm
    • Stressed below: 4 ppm

Root Requirements:
    • Optimal: 6+ ppm
    • Decreased growth: <5 ppm

Bacteria Requirements:
    • Nitrifying bacteria: 4-8 ppm
    • Essential for biofilter
```

#### Air Pump Sizing

| System Type | Air Pump Capacity Needed |
|-------------|--------------------------|
| **Aquaponics** | 0.5-1.0 CFM per 100 gallons fish tank |
| **DWC Hydroponics** | 0.5 CFM per 100 gallons reservoir |
| **Biofilter** | Additional 0.25 CFM per cubic foot media |

**Air Pump Selection Table:**

| Pump Size | Output (LPM) | Output (CFM) | Suitable For | Cost |
|-----------|--------------|--------------|--------------|------|
| Small | 15-30 LPM | 0.5-1.0 CFM | 50-100 gal | $20-$40 |
| Medium | 60-90 LPM | 2.0-3.0 CFM | 200-500 gal | $60-$120 |
| Large | 150+ LPM | 5.0+ CFM | 1000+ gal | $200-$500 |

#### Diffuser Options

| Type | Description | Efficiency | Application |
|------|-------------|------------|-------------|
| **Air Stones** | Porous ceramic/composite | Medium | Small systems, aesthetics |
| **Flexible Diffusers** | Rubber membrane, fine bubbles | High | Fish tanks, large systems |
| **Venturi** | Uses water pump to inject air | Very High | Inline aeration |
| **PVC Pipe Diffusers** | DIY drilled pipe | Low-Medium | Budget builds |

---

### 2.5 Growing Vessels and Media

#### Hydroponic Growing Containers

| Container Type | Description | Best For | Considerations |
|----------------|-------------|----------|----------------|
| **NFT Channels** | PVC or purpose-built | Leafy greens | Slope required, regular cleaning |
| **Raft/Float** | Styrofoam on water | Lettuce, herbs | Need support structure |
| **Dutch Buckets** | Individual 5-gal buckets | Tomatoes, peppers | Scalable, flexible layout |
| **Vertical Towers** | Stacked/vertical growing | Maximum space use | Requires strong pump |
| **Net Pots** | Mesh pots in various sizes | Most systems | Size depends on plant |

#### Aquaponic Grow Bed Options

| Type | Media | Depth | Best For |
|------|-------|-------|----------|
| **Media Bed** | Clay pebbles, gravel | 12" | Diverse crops, filtration |
| **Raft System** | None (floating) | 12-18" water | Leafy greens, high density |
| **NFT Channels** | None | 3-4" water depth | Herbs, lettuce |

#### Growing Media Comparison

```
MEDIA PROPERTIES COMPARISON

Property Scale: ★☆☆☆☆ (Poor) to ★★★★★ (Excellent)

┌─────────────────┬──────────┬─────────┬──────────┬──────────┐
│ Media Type      │Water Hold│Aeration │Stability │Cost      │
├─────────────────┼──────────┼─────────┼──────────┼──────────┤
│ Clay Pebbles    │ ★★☆☆☆   │ ★★★★★  │ ★★★★★   │ $$       │
│ Rockwool        │ ★★★★★   │ ★★★☆☆  │ ★★★☆☆   │ $$       │
│ Coconut Coir    │ ★★★★☆   │ ★★★★☆  │ ★★★★☆   │ $        │
│ Perlite         │ ★★☆☆☆   │ ★★★★★  │ ★★★☆☆   │ $        │
│ Vermiculite     │ ★★★★★   │ ★★☆☆☆  │ ★★★☆☆   │ $        │
│ Gravel (aqua)   │ ★☆☆☆☆   │ ★★★★★  │ ★★★★★   │ $        │
│ Peat Moss       │ ★★★★★   │ ★★☆☆☆  │ ★★★☆☆   │ $        │
└─────────────────┴──────────┴─────────┴──────────┴──────────┘

Aquaponics Requirements:
    • Inert (won't affect pH)
    • Large surface area for bacteria
    • Good drainage and aeration

Recommendation: Expanded clay pebbles or gravel
```

---

### 2.6 Filtration Components (Aquaponics)

#### Filtration System Overview

```
AQUAPONIC FILTRATION FLOW

Fish Tank
    │
    ▼
┌─────────────────┐
│ MECHANICAL      │  Removes solid waste
│ FILTER          │  • Swirl filter
│ (Clarifier)     │  • Radial filter
└────────┬────────┘  • Screen filter
         │
         ▼
┌─────────────────┐
│ BIOFILTER       │  Converts ammonia → nitrite → nitrate
│                 │  • Media bed (dual purpose)
└────────┬────────┘  • Moving bed biofilter
         │           • Trickling filter
         ▼
┌─────────────────┐
│ GROW BEDS       │  Plants consume nitrates
│                 │  Further filtration
└────────┬────────┘
         │
         ▼
    Fish Tank
    (Clean water returns)
```

#### Mechanical Filter Options

| Filter Type | Efficiency | Maintenance | Cost | Best For |
|-------------|------------|-------------|------|----------|
| **Swirl Filter** | High | Weekly cleaning | $$ | Medium-large systems |
| **Radial Filter** | Very High | Weekly cleaning | $$$ | Commercial |
| **Screen Filter** | Medium | Daily cleaning | $ | Small systems |
| **Settling Tank** | Low | Regular cleanout | $ | Budget builds |

#### Biofilter Sizing

```
BIOFILTER SURFACE AREA CALCULATION

Surface Area Needed = Fish Feed Rate × Conversion Factor

Conversion Factor:
    • Media bed: 1 sq ft per 1 lb feed/day
    • Moving bed: 0.5 sq ft per 1 lb feed/day
    • Trickling filter: 1.5 sq ft per 1 lb feed/day

Example:
    Feeding 2 lbs/day of fish food
    Media bed biofilter

    2 lbs/day × 1 sq ft/lb = 2 sq ft minimum

    If media is 12" deep:
    Volume needed = 2 sq ft × 1 ft deep = 2 cubic feet
                  = 15 gallons minimum

Add 50% safety margin = 22 gallons biofilter media
```

---

### 2.7 Monitoring and Control Equipment

#### Essential Monitoring Tools

| Tool | Purpose | Frequency | Cost Range |
|------|---------|-----------|------------|
| **pH Meter** | Monitor acidity/alkalinity | Daily | $50-$300 |
| **EC/TDS Meter** | Nutrient concentration (hydro) | Daily | $30-$200 |
| **Thermometer** | Water temperature | Daily | $10-$50 |
| **Dissolved O2 Meter** | Oxygen levels | Weekly | $100-$500 |
| **Ammonia Test Kit** | Fish waste (aqua) | Weekly | $15-$40 |
| **Nitrite/Nitrate Kit** | Nitrogen cycle (aqua) | Weekly | $20-$50 |

#### Automation Options

```
AUTOMATION LEVELS

LEVEL 1: Manual (No Automation)
    • Physical monitoring
    • Manual adjustments
    Cost: $0
    Time: 30-60 min/day

LEVEL 2: Basic Timers
    • Light timers
    • Pump timers
    Cost: $50-$100
    Time: 20-30 min/day

LEVEL 3: Environmental Monitoring
    • Automatic pH/temp monitoring
    • Alerts only
    Cost: $200-$500
    Time: 15-20 min/day

LEVEL 4: Active Control
    • Automatic pH dosing
    • Temperature control
    • Automated feeding
    Cost: $500-$2000
    Time: 10-15 min/day

LEVEL 5: Full Automation
    • Complete environmental control
    • Data logging
    • Remote monitoring
    Cost: $2000-$10,000+
    Time: 5-10 min/day (monitoring)
```

---

### 2.8 Component Quality Considerations

#### Avoiding Toxic Materials

```
SAFE MATERIAL CHECKLIST

✓ APPROVED:
  • Food-grade plastics (HDPE, PP, PVC)
  • Stainless steel (304 or 316)
  • Approved marine epoxies
  • Silicone sealants (100%)
  • EPDM rubber

✗ AVOID:
  • Copper (toxic to fish/plants)
  • Galvanized metal (zinc leaching)
  • Treated wood (unless liner used)
  • Lead-based paints
  • Rubber with additives
  • Unknown plastics
```

#### Quality vs. Cost Trade-offs

| Component | Economy Option | Professional Option | Recommendation |
|-----------|----------------|---------------------|----------------|
| **Pumps** | $30-50 | $150-300 | Start economy, upgrade later |
| **Tanks** | IBC totes $50-100 | Poly tanks $200-500 | Professional if permanent |
| **pH Meter** | $30-50 | $150-300 | Professional (critical) |
| **Air Pump** | $20-40 | $100-200 | Professional (reliability) |
| **Plumbing** | Standard PVC | Schedule 40 + quality fittings | Professional (leak prevention) |
| **Media** | Gravel $20 | Clay pebbles $100+ | Economy works fine |

---

### 2.9 Creating Your Parts List

#### Parts List Template

```
SYSTEM COMPONENT LIST

PROJECT: _______________________
DATE: _________________________
BUDGET: $_____________________

CONTAINMENT
□ Fish tank/Reservoir: _____ gal | Qty: ___ | $______
□ Grow beds/channels: ________ | Qty: ___ | $______
□ Sump tank (if needed): _____ gal | Qty: ___ | $______

CIRCULATION
□ Water pump: _____ GPH, ___ ft head | Qty: ___ | $______
□ Backup pump (optional): _____ | Qty: ___ | $______
□ Air pump: _____ LPM | Qty: ___ | $______
□ Air stones/diffusers: _______ | Qty: ___ | $______

FILTRATION (Aquaponics)
□ Mechanical filter: __________ | Qty: ___ | $______
□ Biofilter media: _____ cu ft | Qty: ___ | $______

PLUMBING (See Module 4)
□ Pipes, fittings, valves (detailed list)

ELECTRICAL (See Module 5)
□ Wiring, outlets, GFCI (detailed list)

GROWING MEDIA
□ Media type: ____________ | Volume: ___ | $______

MONITORING
□ pH meter: ______________ | Qty: ___ | $______
□ Thermometer: ___________ | Qty: ___ | $______
□ Other: _________________ | Qty: ___ | $______

TOTAL ESTIMATED COST: $_____________
```

---

### 2.10 Key Takeaways

```
MODULE 2 KEY POINTS

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  1. PROPER COMPONENT SELECTION is crucial for              │
│     system performance and longevity                       │
│                                                             │
│  2. PUMP SIZING requires calculating flow rate             │
│     AND total head (pressure)                              │
│                                                             │
│  3. FOOD-SAFE MATERIALS are essential - avoid              │
│     copper, galvanized, and treated wood                   │
│                                                             │
│  4. AERATION is critical for fish, plants, and             │
│     beneficial bacteria health                             │
│                                                             │
│  5. QUALITY MONITORING EQUIPMENT is a worthwhile           │
│     investment for system success                          │
│                                                             │
│  6. CREATE A DETAILED PARTS LIST before                    │
│     purchasing to stay on budget                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Discussion Questions

1. **How do you balance** component quality against budget constraints?

2. **What components** would you upgrade first if budget allows, and why?

3. **Why is proper pump sizing** more important than just "bigger is better"?

4. **How would component selection differ** between a home system and commercial operation?

5. **What role does redundancy** play in component selection for critical systems?

---

## Vocabulary

| Term | Definition |
|------|------------|
| **Head** | Vertical distance and resistance a pump must overcome |
| **GPH/LPH** | Gallons/Liters Per Hour - flow rate measurement |
| **CFM/LPM** | Cubic Feet/Liters Per Minute - air flow measurement |
| **Food-Grade** | Materials safe for contact with food or water for food production |
| **Biofilter** | Component housing beneficial bacteria for waste conversion |
| **Venturi** | Device using water flow to inject air |
| **IBC Tote** | Intermediate Bulk Container - 275-330 gallon plastic tank |
| **Dissolved Oxygen** | Amount of oxygen available in water (measured in ppm or mg/L) |

---

## Activity: Component Comparison Exercise

**See: activities/activity_02_component_comparison.md**

In this activity, you will compare specifications and costs of different pump and tank options to select the best components for a specific system design.

---

## Quiz Preview

After completing this module, you will take **Quiz 2: Component Selection**

The quiz covers:
- Component functions and applications
- Pump and air pump sizing
- Material safety and compatibility
- Quality considerations
- Parts list development

**See: quizzes/quiz_02_component_selection.md**

---

## Next Module Preview

**Module 3: Sizing Calculations**

In the next module, we'll learn detailed calculations for sizing all system components including grow bed volumes, fish stocking densities, and nutrient requirements.

---

## Additional Resources

- Video: "Pump Selection and Sizing" (20 minutes)
- Reading: Component specifications from major suppliers
- Tool: Pump Sizing Calculator
- Tool: Parts List Template (Excel)

---

*Module 2 of 8 | Course 107: System Design & Construction*
*EcoFusion Academy*
