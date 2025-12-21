# Lesson 1: Advanced RAS Design Principles

## Course 402: Advanced Aquaculture Systems | Week 1

---

## Learning Objectives

By the end of this lesson, you will be able to:

1. Evaluate different RAS configurations and select appropriate designs for specific applications
2. Calculate system hydraulics including flow rates, retention times, and head losses
3. Design optimal tank geometry for various species and production stages
4. Integrate multiple water treatment components into cohesive systems
5. Determine make-up water requirements and manage discharge strategies
6. Apply scale-up principles from pilot to commercial operations

---

## Introduction to Advanced RAS Design

Recirculating Aquaculture Systems (RAS) represent the most advanced and sustainable approach to intensive fish production. Unlike traditional flow-through or pond systems, RAS facilities reuse 95-99% of system water through continuous treatment and recirculation. This lesson establishes the foundational design principles that underpin all successful commercial RAS operations.

### Why RAS?

**Advantages:**
- Water conservation: <5% daily water replacement
- Location independence: operate anywhere with water and power
- Environmental control: optimize temperature, photoperiod, water quality
- Biosecurity: isolation from wild pathogens and predators
- Minimal discharge: reduced environmental impact
- Year-round production: eliminate seasonal limitations
- High density culture: maximize space utilization

**Challenges:**
- High capital costs: $50-200+ per kg production capacity
- Technical expertise required: complex systems management
- Energy intensive: pumping, oxygenation, temperature control
- Backup systems essential: risk of catastrophic loss
- Water quality management: no dilution effect

---

## RAS System Architecture

### 1. Fundamental Components

Every RAS consists of these core elements:

```
┌─────────────────────────────────────────────────────────────┐
│                    RAS COMPONENT FLOW                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐      ┌──────────┐      ┌──────────────┐      │
│  │ Culture  │ ───> │  Solids  │ ───> │   Biofilter  │      │
│  │  Tanks   │      │ Removal  │      │(Nitrification)│      │
│  └──────────┘      └──────────┘      └──────────────┘      │
│       ^                                       │              │
│       │                                       v              │
│       │            ┌──────────┐      ┌──────────────┐      │
│       └────────────│   Pump   │ <─── │ Oxygenation/ │      │
│                    │  Sump    │      │CO2 Stripping │      │
│                    └──────────┘      └──────────────┘      │
│                                                              │
│  Optional: UV, Ozone, Denitrification, Heating/Cooling      │
└─────────────────────────────────────────────────────────────┘
```

### 2. RAS Configuration Types

#### A. Serial Flow Configuration

```
┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐
│ Tank 1 │──> │ Tank 2 │──> │ Tank 3 │──> │ Tank 4 │
└────────┘    └────────┘    └────────┘    └────────┘
     │             │             │             │
     └─────────────┴─────────────┴─────────────┘
                      │
                      v
              ┌──────────────┐
              │   Treatment  │
              │   System     │
              └──────────────┘
                      │
                      v
               ┌──────────┐
               │   Pump   │
               │   Sump   │
               └──────────┘
```

**Characteristics:**
- Water flows sequentially through tanks
- Efficient use of treatment equipment
- Progressive water quality degradation
- Requires careful sizing of final tanks
- Good for size-grading operations

**Applications:**
- Hatchery and nursery systems
- Progressive grading systems
- Experimental facilities

#### B. Parallel Flow Configuration

```
         ┌──────────────────────────────────┐
         │                                  │
    ┌────v────┐  ┌─────────┐  ┌─────────┐  │
    │ Tank 1  │  │ Tank 2  │  │ Tank 3  │  │
    └────┬────┘  └────┬────┘  └────┬────┘  │
         │            │            │        │
         └────────────┴────────────┘        │
                   │                        │
                   v                        │
           ┌──────────────┐                 │
           │   Treatment  │                 │
           │   System     │                 │
           └──────────────┘                 │
                   │                        │
                   v                        │
            ┌──────────┐                    │
            │   Pump   │────────────────────┘
            │   Sump   │
            └──────────┘
```

**Characteristics:**
- All tanks receive equally treated water
- Uniform water quality across system
- Higher pumping and treatment costs
- Greater operational flexibility
- Better for uniform production

**Applications:**
- Commercial grow-out facilities
- Multi-species systems
- Large-scale production

#### C. Hybrid Configuration

Most commercial systems use hybrid approaches combining serial and parallel elements:

```
┌─────────────────────────────────────────────────┐
│             Parallel Treatment Lines             │
├──────────────────────────┬──────────────────────┤
│   Production Line A      │   Production Line B  │
│  ┌──────┐    ┌──────┐   │  ┌──────┐ ┌──────┐  │
│  │Tank 1│──> │Tank 2│   │  │Tank 3│>│Tank 4│  │
│  └──────┘    └──────┘   │  └──────┘ └──────┘  │
└───────┬──────────────────┴────────┬─────────────┘
        │                           │
        └──────────┬────────────────┘
                   v
          ┌─────────────────┐
          │ Shared Treatment│
          └─────────────────┘
```

**Advantages:**
- Isolate different species or size classes
- Redundancy for biosecurity
- Optimize treatment for specific needs
- Flexibility for production scheduling

---

## Hydraulic Design Principles

### 1. Flow Rate Calculations

#### System Turnover Rate

Flow rate (Q) = System Volume (V) / Retention Time (RT)

**Typical turnover rates:**
- Hatchery/nursery: 1-2 turnovers per hour
- Grow-out systems: 0.5-1 turnover per hour
- High-density culture: 1-3 turnovers per hour

**Example Calculation:**

```
System Parameters:
- Total tank volume: 100 m³
- Target turnover: 1.0 per hour
- Number of tanks: 4

Calculation:
Q = V / RT = 100 m³ / 1 hour = 100 m³/hr

Per tank flow: 100 m³/hr ÷ 4 tanks = 25 m³/hr per tank
             = 25,000 L/hr = 417 L/min = 110 gpm
```

#### Flow Rate Based on Feed Load

More accurate sizing based on metabolic load:

Q (m³/hr) = Feed Rate (kg/day) × K

Where K = species-specific coefficient
- Salmonids: K = 0.5 - 1.0
- Tilapia: K = 0.3 - 0.6
- Marine species: K = 0.8 - 1.2

**Example:**

```
Operation feeding 100 kg/day of tilapia:
Q = 100 kg/day × 0.5 = 50 m³/hr minimum flow
```

### 2. Retention Time Design

#### Tank Retention Time

RT = Tank Volume / Flow Rate

**Optimal ranges:**
- Fingerlings (high activity): 20-30 minutes
- Grow-out fish: 30-60 minutes
- Low-density culture: 60-120 minutes

#### Treatment Component Retention Times

| Component | Retention Time | Purpose |
|-----------|---------------|---------|
| Settling basin | 15-30 minutes | Particle settling |
| Swirl separator | 30-60 seconds | Rapid solids removal |
| Biofilter (MBBR) | 20-45 minutes | Nitrification contact time |
| Trickling filter | Pass-through | Biofilm contact |
| Degassing tower | 2-5 minutes | CO₂ stripping |
| Oxygenation cone | 1-3 minutes | O₂ saturation |
| UV sterilizer | 1-3 seconds | Pathogen exposure |

### 3. Pipe Sizing and Head Loss

#### Velocity Considerations

Optimal flow velocities to prevent settling and minimize head loss:

| Application | Velocity (m/s) | Velocity (ft/s) |
|-------------|---------------|-----------------|
| Gravity drains | 0.6 - 1.0 | 2 - 3.3 |
| Pump suction | 0.9 - 1.5 | 3 - 5 |
| Pump discharge | 1.5 - 2.4 | 5 - 8 |
| Aeration supply | 2.0 - 3.0 | 6.5 - 10 |

#### Pipe Diameter Calculation

D = √(4Q / πV)

Where:
- D = pipe diameter (m)
- Q = flow rate (m³/s)
- V = velocity (m/s)

**Example:**

```
For Q = 25 m³/hr = 0.00694 m³/s
Target velocity = 1.5 m/s

D = √(4 × 0.00694 / (3.14159 × 1.5))
D = √(0.0278 / 4.712)
D = √0.0059
D = 0.077 m = 77 mm

Select: 80mm (3") pipe
```

#### Head Loss Estimation

Use Hazen-Williams equation for friction loss:

hf = 10.67 × Q^1.85 × L / (C^1.85 × D^4.87)

Where:
- hf = head loss (m)
- Q = flow (m³/s)
- L = pipe length (m)
- C = roughness coefficient (PVC = 150, Steel = 120)
- D = diameter (m)

**Typical total head losses:**
- Simple systems: 0.5 - 1.5 m
- Complex systems: 2.0 - 4.0 m
- With UV/ozone: 3.0 - 5.0 m

---

## Culture Tank Design

### 1. Tank Geometry Optimization

#### Circular Tanks (Most Common)

```
         Top View                Side View

    ┌─────────────┐           ┌──────────┐
   ╱               ╲          │  Water   │
  │    ┌─────┐     │         │  Level   │
  │    │ CD  │     │         ├──────────┤
  │    └─────┘     │         │          │
  │                 │         │          │
   ╲               ╱          │          │
    └─────────────┘           └──────────┘
         │                         │
      Diameter                   Depth

  CD = Center Drain
```

**Advantages:**
- Self-cleaning with proper drain design
- Uniform water circulation
- Efficient solids removal
- Reduced dead zones

**Design Ratios:**
- Depth to diameter: 1:3 to 1:6 (typically 1:4)
- Water depth: 0.8 - 1.5 m for most species
- Sidewall angle: 4-8° slope toward center drain

**Sizing Example:**

```
Target volume: 25 m³
Depth: 1.2 m
D:H ratio: 4:1

Depth = 1.2 m
Diameter = 4 × 1.2 = 4.8 m

Volume check:
V = π × r² × h = 3.14159 × 2.4² × 1.2 = 21.7 m³

Increase diameter to 5.0 m:
V = 3.14159 × 2.5² × 1.2 = 23.6 m³ ✓
```

#### Rectangular Tanks

```
        Top View
    ┌─────────────┐
    │    Flow     │
    │     ───>    │
    │             │
    │   Drain     │
    └─────────────┘
```

**Advantages:**
- Efficient space utilization
- Easier construction in buildings
- Good for raceways and serial systems

**Disadvantages:**
- Potential dead zones in corners
- Less efficient solids removal
- Requires careful flow design

**L:W Ratios:**
- Square: 1:1 (least efficient)
- Moderate: 2:1 to 4:1
- Raceway: 8:1 to 20:1

### 2. Water Inlet Design

Proper water distribution is critical for:
- Dissolved oxygen uniformity
- Waste transport to drain
- Fish exercise and health
- Preventing dead zones

#### Radial Inlet (Circular Tanks)

```
          ╔═══════════════╗
          ║   Tank Wall   ║
          ║   ┌───────┐   ║
          ║   │ Inlet │   ║ ──> Flow creates
          ║   │ Pipe  │   ║     circular pattern
          ║   └───┬───┘   ║
          ║       │       ║
          ║       v       ║
          ║   Center      ║
          ║   Drain       ║
          ╚═══════════════╝
```

**Design parameters:**
- Inlet velocity: 0.3 - 0.5 m/s
- Positioned tangentially 10-20 cm below surface
- 1-4 inlets depending on tank size
- Angled 15-30° downward

#### Bottom-Center Inlet

```
          ╔═══════════════╗
          ║               ║
          ║               ║
          ║               ║
          ║       ┌─┐     ║ ──> Upwelling creates
          ║       │░│     ║     circular flow
          ║       └┬┘     ║
          ║════════╪══════║
                   │
              Inlet Pipe
```

**Advantages:**
- Excellent circulation pattern
- Effective solids removal
- Lower inlet velocities

**Design:**
- Diffuser plate 30-50% of tank diameter
- Upward velocity: 0.05 - 0.15 m/s
- Creates dome-shaped flow pattern

### 3. Drain Design

#### Dual Drain System

```
     ╔═══════════════════╗
     ║  Surface Skim     ║
     ║      Drain        ║
     ║      ┌──┐         ║
     ║      │  │         ║
     ║      └──┘         ║
     ║                   ║
     ║        ┌───┐      ║
     ║        │ ● │      ║ ──> Bottom drain
     ║        └───┘      ║     (solids removal)
     ╚═══════════════════╝
```

**Benefits:**
- Surface drain removes floating waste
- Bottom drain removes settled solids
- Adjustable flow split (typically 80% bottom, 20% surface)

**Sizing:**
- Bottom drain: 200-300 mm (8-12")
- Surface drain: 100-150 mm (4-6")
- Total flow: 1-3 tank turnovers per hour

---

## System Sizing and Scale-Up

### 1. Production Density Calculations

#### Maximum Standing Stock

Density limits vary by species, system design, and management:

| Species | kg/m³ | lb/ft³ |
|---------|-------|--------|
| Tilapia | 60-100 | 3.7-6.2 |
| Atlantic salmon | 60-80 | 3.7-5.0 |
| Rainbow trout | 80-120 | 5.0-7.5 |
| Barramundi | 50-80 | 3.1-5.0 |
| Yellowtail | 40-60 | 2.5-3.7 |
| Shrimp | 10-20 | 0.6-1.2 |

**Example System Sizing:**

```
Target production: 100 tonnes/year tilapia
Harvest size: 500g (0.5 kg)
Grow-out period: 6 months
Target density: 80 kg/m³

Fish harvested per batch: 100,000 kg / 2 batches = 50,000 kg
Fish count: 50,000 kg / 0.5 kg = 100,000 fish

Required tank volume: 50,000 kg / 80 kg/m³ = 625 m³

Add 30% for size variation and standing stock:
Total volume: 625 × 1.3 = 813 m³

Suggest: 32 tanks × 25 m³ = 800 m³
```

### 2. Make-Up Water Requirements

#### Daily Water Replacement

Even with excellent recirculation, some water loss occurs:

**Sources of water loss:**
- Backwashing filters: 1-3% daily
- System cleaning: 0.5-1% daily
- Evaporation: 0.5-2% daily (temperature dependent)
- Sludge removal: 0.5-1% daily
- Sampling and testing: <0.1% daily

**Total: 3-7% daily replacement**

**Example:**

```
System volume: 800 m³
Daily replacement: 5%

Make-up water: 800 m³ × 0.05 = 40 m³/day
                              = 1,667 L/hr
                              = 27.8 L/min
                              = 7.3 gpm

Monthly usage: 40 m³/day × 30 days = 1,200 m³
Annual usage: 14,400 m³
```

#### Water Quality Requirements for Make-Up Water

| Parameter | Acceptable Range | Treatment if Exceeded |
|-----------|------------------|----------------------|
| Temperature | 10-25°C | Heat exchanger |
| pH | 6.5-8.5 | Acid/base injection |
| Alkalinity | >50 mg/L | Sodium bicarbonate addition |
| Hardness | >50 mg/L | Calcium addition |
| TDS | <1000 mg/L | Reverse osmosis |
| Iron | <0.3 mg/L | Aeration, filtration |
| Chlorine | <0.01 mg/L | Carbon filtration, aeration |
| Heavy metals | Minimal | Specific treatment |

### 3. Scale-Up Principles

When scaling from pilot to commercial operations:

**Linear Scaling (NOT Recommended):**
- Simply multiply all dimensions
- Ignores hydrodynamic differences
- Often results in poor performance

**Volumetric Scaling (Preferred):**
- Maintain key ratios and residence times
- Adjust surface areas appropriately
- Consider equipment availability

**Key Ratios to Maintain:**

```
┌────────────────────────────────────────────────┐
│ Ratio                    │ Target Range        │
├────────────────────────────────────────────────┤
│ Biofilter:Tank Volume    │ 0.1 - 0.3          │
│ Flow:Feed                │ 0.5 - 1.0 m³/kg/day│
│ Tank Turnover           │ 1 - 3 per hour      │
│ O₂ Transfer:Consumption  │ 1.2 - 1.5 safety   │
│ Solids Removal Capacity  │ 2x peak production │
└────────────────────────────────────────────────┘
```

**Modular Approach:**

Rather than scaling individual tanks:
- Replicate proven modules
- 25-50 m³ tank modules work well
- Easier to manage and troubleshoot
- Better biosecurity isolation

---

## Integration of Treatment Components

### 1. Component Sequencing

Optimal order for water treatment:

```
┌─────────────────────────────────────────────────┐
│                                                  │
│  Culture Tank                                   │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ Solids Removal      │ ──> First Priority     │
│  │ (Swirl, Drum Filter)│     Remove waste ASAP  │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ Biofilter           │ ──> Second Priority    │
│  │ (Nitrification)     │     Convert ammonia    │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ CO₂ Stripping       │ ──> Third Priority     │
│  │ (Degasser)          │     Remove CO₂         │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ Oxygenation         │ ──> Fourth Priority    │
│  │ (LHO, Cone)         │     Saturate O₂        │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ Disinfection        │ ──> Optional           │
│  │ (UV, Ozone)         │     Kill pathogens     │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  ┌─────────────────────┐                        │
│  │ Temperature Control │ ──> As Needed          │
│  │ (Heat/Chill)        │     Maintain setpoint  │
│  └─────────────────────┘                        │
│       │                                          │
│       v                                          │
│  Pump Sump → Back to Tank                       │
│                                                  │
└─────────────────────────────────────────────────┘
```

### 2. Bypass and Redundancy

**Critical systems require backup:**

```
         Main Pathway
    ┌─────────────────────┐
    │   Primary Biofilter │
    └─────────────────────┘
              │
         ┌────┴────┐
         │   OR    │ ──> Valve allows switching
         └────┬────┘
              │
    ┌─────────────────────┐
    │  Backup Biofilter   │
    └─────────────────────┘
```

**Bypass Capabilities:**
- Individual component bypass for maintenance
- Emergency bypass during treatment failure
- Gradual flow switching for new biofilters
- Isolation valves for each major component

### 3. Sump Design

The heart of the recirculating system:

```
    ┌───────────────────────────────┐
    │     Sump Tank                  │
    │                                │
    │  High Level ─────────────      │ ──> Alarm/shutoff
    │                                │
    │  Normal Level ────────         │
    │                                │
    │  Low Level Alarm ─────         │
    │                                │
    │  Critical Low ─────────        │ ──> Emergency shutdown
    │                                │
    │     ┌───────┐                  │
    │     │ Pump  │                  │
    │     │ Intake│                  │
    │     └───────┘                  │
    └───────────────────────────────┘
```

**Sump Sizing:**
- Volume: 10-20% of total system volume
- Retention time: 5-15 minutes at full flow
- Height: Provide adequate suction head
- Access: Easy for cleaning and maintenance

**Functions:**
- Flow buffering and equalization
- Emergency water reserve
- Allows dosing of chemicals (pH, O₂, etc.)
- Houses backup aeration
- Settling for fine solids

---

## Case Study: 100-Tonne Tilapia RAS Design

### System Specifications

**Production Parameters:**
- Annual production: 100 tonnes
- Species: Nile tilapia
- Harvest weight: 500g
- Growth period: 6 months
- Batches per year: 2
- Survival rate: 90%

### System Design

**Culture Tanks:**
- Configuration: Parallel flow
- Number of tanks: 32
- Tank volume: 25 m³ each
- Total volume: 800 m³
- Tank dimensions: 5.0 m diameter × 1.3 m depth
- Stocking density: 60-80 kg/m³

**Hydraulic Design:**
- System flow rate: 400 m³/hr
- Turnover rate: 0.5 per hour
- Individual tank flow: 12.5 m³/hr (208 L/min)
- Retention time per tank: 2 hours

**Solids Removal:**
- Type: Drum filters (60 micron)
- Units: 2 × 200 m³/hr capacity
- Backwash: Automated on pressure differential
- Solids production: 0.3 kg/kg feed

**Biofilration:**
- Type: Moving Bed Bioreactor (MBBR)
- Total volume: 120 m³ (15% of tank volume)
- Media: 4,000 m² surface area per m³
- Total surface area: 480,000 m²
- Loading rate: 0.8 g TAN/m²/day

**Oxygenation:**
- Type: Low Head Oxygenator (LHO)
- Capacity: 100 kg O₂/day
- Oxygen consumption: 0.5 kg O₂/kg feed
- Peak demand: 83 kg O₂/day

**Temperature Control:**
- Type: Heat pump system
- Capacity: 150 kW heating, 100 kW cooling
- Target temperature: 28°C ± 1°C

**Power Requirements:**
- Recirculation pumps: 30 kW
- Blowers: 15 kW
- Heat/cool: 50 kW average
- Lighting: 10 kW
- Total: ~100 kW continuous

**Space Requirements:**
- Culture area: 800 m²
- Treatment systems: 200 m²
- Support areas: 300 m²
- Total building: 1,300 m² (~14,000 ft²)

---

## Practical Exercises

### Exercise 1: Tank Sizing

Design a circular culture tank for 1,000 kg of juvenile Atlantic salmon:

**Given:**
- Target density: 40 kg/m³
- Preferred depth: 1.0 m
- D:H ratio: 4:1

**Calculate:**
1. Required volume
2. Tank diameter
3. Actual volume
4. Flow rate at 1 turnover/hour

### Exercise 2: System Hydraulics

Calculate pipe diameter for the following:

**Given:**
- Flow rate: 100 m³/hr
- Target velocity: 1.8 m/s
- Material: PVC pipe

**Calculate:**
1. Required diameter
2. Select standard pipe size
3. Actual velocity in selected pipe
4. Head loss over 20 meters

### Exercise 3: Scale-Up Planning

You have a successful pilot system with these specifications:
- 4 tanks × 1 m³ = 4 m³
- Flow rate: 8 m³/hr
- Biofilter: 0.5 m³
- Production: 200 kg/batch

**Design a commercial system for:**
- 20 tonnes annual production
- Maintain key ratios
- Use standard 25 m³ tanks

---

## Key Takeaways

1. **RAS design requires integration** of multiple systems, not just individual components

2. **Hydraulics drive performance** - proper flow rates, velocities, and retention times are critical

3. **Tank geometry matters** - circular tanks with proper drain design are most efficient

4. **Redundancy is essential** - backup systems prevent catastrophic losses

5. **Scale-up requires careful planning** - maintain key ratios and use modular approaches

6. **Make-up water is always needed** - typically 3-7% daily replacement

7. **Location independence** - RAS can operate anywhere with water and power

8. **High capital costs** - require careful economic analysis and planning

---

## Further Reading

1. Timmons, M.B. & Ebeling, J.M. (2013). "Recirculating Aquaculture" 3rd Edition
2. Wheaton, F.W. (1977). "Aquaculture Engineering"
3. Masser, M.P. et al. (1999). "Recirculating Aquaculture Tank Production Systems"
4. FAO. (2018). "Small-scale rainbow trout farming"
5. Summerfelt, S.T. et al. (2009). "Survey of large circular and octagonal fish culture tanks in the USA"

---

## Glossary Terms

- **Turnover Rate**: Number of times total system volume passes through treatment per time period
- **Retention Time**: Average time water spends in a particular system component
- **Head Loss**: Energy loss due to friction as water flows through pipes and components
- **Hydraulic Loading**: Volume of water treated per unit of filter area or volume per time
- **Make-up Water**: Fresh water added to replace losses from evaporation, cleaning, and discharge
- **Stocking Density**: Mass of fish per unit of water volume (kg/m³)

---

*Next Lesson: Module 2 - Biofilter Engineering & Optimization*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
