# Module 7: Material Handling and Logistics Engineering

## Learning Objectives

- Design vertical transport systems for multi-level facilities
- Engineer automated material handling solutions
- Plan harvesting and packaging workflows
- Design waste management systems
- Optimize facility logistics for efficiency

## 1. Vertical Transport Systems

### 1.1 Elevator and Lift Systems

**Freight Elevator Specifications:**
```
Capacity: 1,000-2,000 kg (2,200-4,400 lbs)
Platform size: 1.5m × 2.0m minimum
Door opening: 1.2m wide × 2.1m high
Speed: 0.5-1.0 m/s
Stops: 6-12 levels typical
Power: 7.5-15 HP motor

Cost: $50,000-100,000 installed

Advantages:
+ High capacity
+ Handles large items
+ Code-compliant for personnel
+ Multiple stops

Disadvantages:
- High capital cost
- Requires shaft and pit
- Maintenance intensive
- Slower than alternatives
```

**Vertical Conveyor Systems:**
```
Continuous Vertical Conveyor:
    ║╔═══╗║   Trays attached
    ║║   ║║   to continuous
    ║╚═══╝║   belt/chain
    ║╔═══╗║   Moves up/down
    ║║   ║║
    ║╚═══╝║
    ║     ║

Specifications:
Capacity: 500-1,500 trays/hour
Tray size: 600×400mm standard
Lift height: 3-15m
Speed: 10-30 m/min
Power: 2-5 HP

Cost: $25,000-60,000

Application: Seedling trays, harvest containers
```

### 1.2 Horizontal Transport

**Roller Conveyor Systems:**
```
Layout (Top View):
[Grow Area]─→[Conveyor]─→[Harvest Area]─→[Pack Area]

Specifications:
Width: 600-900mm
Length: Modular 3m sections
Load: 50-100 kg/m
Speed: 5-20 m/min
Motor: 0.5-1.0 HP per section

Types:
- Gravity: No power, 2-5° slope
- Powered: Motor-driven rollers
- Belt-over-roller: Smooth product movement

Cost: $200-500 per linear meter
```

**Automated Guided Vehicles (AGV):**
```
Navigation Methods:
1. Magnetic tape: Low cost, fixed path
2. Laser/LiDAR: Flexible, expensive
3. Vision-based: Most advanced

Specifications:
Payload: 250-500 kg
Speed: 0.5-1.5 m/s
Battery life: 8-12 hours
Charging: 2-4 hours (auto-docking)
Position accuracy: ±25mm

Cost per AGV: $25,000-75,000

Fleet sizing:
Calculate moves per shift:
- Seeding: 200 trays/shift
- Transplant: 150 trays/shift
- Harvest: 300 trays/shift
Total: 650 moves

AGV capacity: 100 moves/shift each
Required: 7 AGVs (plus 1 spare = 8 total)
Investment: $200,000-600,000
```

## 2. Harvesting Workflow Design

### 2.1 Harvest Process Flow

```
Process Map:

Growing Area
     ↓
[Harvest Level Access]
     ↓
[Cutting/Picking] ← Manual or robotic
     ↓
[Transport Container]
     ↓
[Vertical Transport to Grade Level]
     ↓
[Wash Station]
     ↓
[Inspection/Sorting]
     ↓
[Packaging Line]
     ↓
[Cooling/Cold Storage]
     ↓
[Shipping]

Time Analysis:
Harvest cutting: 2-3 min/m²
Transport to processing: 3-5 min/trip
Washing: 5-8 min/batch
Packaging: 10-15 min/batch
Total cycle: 25-35 minutes per batch

Batch size optimization:
Labor: 4 workers
Harvest rate: 50 m²/hour team
Daily capacity: 400 m²/shift
Annual capacity: 100,000 m²/year
```

### 2.2 Container and Cart Design

**Harvest Containers:**
```
Specifications:
Material: Food-grade HDPE
Size: 600×400×200mm (standard Euro size)
Capacity: 5-8 kg leafy greens
Weight: 1.5 kg empty, 8.5 kg full
Features: Vented sides, drain holes, stack when empty
Washing: Dishwasher safe, automated wash system

Stack height: 1.8m (12 containers)
Cart capacity: 24 containers per cart

Cost: $15-25 per container
Quantity needed: 200-400 containers
Investment: $3,000-10,000
```

**Mobile Carts:**
```
Harvest Cart Design:
Dimensions: 900×600×1,800mm high
Capacity: 24 harvest containers
Load capacity: 250 kg total
Wheels: 4× swivel casters, 2 with brakes
Construction: Stainless steel or aluminum
Shelves: Wire grid, removable

Cost: $300-600 each
Quantity: 15-20 carts for 1,000 m² facility
```

## 3. Automated Systems Integration

### 3.1 Robotic Harvesting

**System Components:**
```
Robotic Harvester:
┌──────────────┐
│   Vision     │ ← Camera, AI recognition
│   System     │
├──────────────┤
│  Manipulator │ ← 6-axis arm
│    Arm       │
├──────────────┤
│   Cutting    │ ← End effector
│   Tool       │
├──────────────┤
│   Mobile     │ ← AGV base
│   Base       │
└──────────────┘

Specifications:
Harvest rate: 500-1,000 plants/hour
Accuracy: ±5mm positioning
Vision: 4K cameras, deep learning
Arm reach: 1.2m radius
Power: Battery or tethered
Cost: $150,000-300,000 per unit

ROI Calculation:
Labor replaced: 2 workers × $15/hr × 2,000 hr/year = $60,000/year
Payback period: 3-5 years
```

### 3.2 Automated Transplanting

**Transplanter Design:**
```
Process Steps:
1. Seedling detection (vision system)
2. Pick from plug tray (vacuum gripper)
3. Orient plant (rotation adjustment)
4. Place in growing channel (precision placement)
5. Cycle time: 1-2 seconds per plant

Performance:
Rate: 1,800-3,600 plants/hour
Accuracy: 98%+ success rate
Changeover: <15 min for different crops

Investment: $75,000-150,000
Labor savings: 1-2 FTE
Payback: 2-4 years
```

## 4. Waste Management Systems

### 4.1 Organic Waste Processing

**Volume Calculations:**
```
Waste Generation:
Trim waste: 5-10% of harvest weight
Root masses: 2-3% of harvest weight
Failed plants: 1-2% of production
Packaging waste: Minimal (reusable containers)

For 100 MT/year production:
Organic waste = 100,000 kg × 0.08 = 8,000 kg/year
Daily: 22 kg/day average
Peak: 50 kg/day

Waste Options:
1. Composting (on-site or off-site)
2. Anaerobic digestion (if volume justifies)
3. Waste-to-energy (large scale)
4. Municipal compost facility
```

**Composting System Design:**
```
In-Vessel Composter:
Capacity: 50-100 kg/day
Cycle time: 14-21 days
Footprint: 2×3m
Power: 2 kW (aeration, mixing)
Output: 15-25 kg compost/day

Cost: $15,000-30,000
Operating cost: $500/year
Compost value: $300-500/year (reuse in potting mix)

Net cost: Minimal, provides growing media
```

### 4.2 Water Waste Management

**Drainage and Treatment:**
```
Waste Water Sources:
- Growing system purge: 5-10% of recirculation
- Cleaning and sanitation: 500-1,000 L/day
- Equipment wash: 200-500 L/day

Treatment Requirements:
pH adjustment: Neutralize before discharge
Nutrient removal: May be required by jurisdiction
Filtration: Remove solids
Monitoring: EC, pH, temperature

Discharge options:
1. Municipal sewer (with treatment)
2. Holding tank and haul-off
3. On-site treatment and reuse
```

## 5. Facility Workflow Optimization

### 5.1 Lean Manufacturing Principles

**Value Stream Mapping:**
```
Current State Analysis:
- Walking distances: 2,500 m/day per worker
- Wait times: 45 min/shift
- Rework: 5% of production
- Inventory: 7 days on average

Future State Goals:
- Walking: Reduce to 1,500 m/day (40% reduction)
- Wait times: Reduce to 15 min/shift
- Rework: Reduce to 2%
- Inventory: Reduce to 3 days

Methods:
- Cellular layout design
- Point-of-use storage
- Pull systems vs. push
- Standard work procedures
```

### 5.2 Layout Optimization

**Efficient Spatial Arrangement:**
```
Facility Zones (1,000 m² example):

Growing Area: 650 m² (65%)
├─ Germination: 50 m²
├─ Nursery: 100 m²
└─ Production: 500 m²

Processing: 150 m² (15%)
├─ Harvest staging: 30 m²
├─ Wash/pack: 80 m²
└─ Cold storage: 40 m²

Support: 200 m² (20%)
├─ Mechanical room: 50 m²
├─ Storage: 60 m²
├─ Office/lab: 40 m²
├─ Restrooms/break: 30 m²
└─ Circulation: 20 m²

Principles:
- Minimize transport distances
- Linear flow (no backtracking)
- Adequate circulation space
- Future expansion capability
```

## 6. Safety and Ergonomics

### 6.1 Manual Handling Guidelines

**Lifting Limits:**
```
NIOSH Lifting Equation:
Recommended Weight Limit (RWL) = LC × HM × VM × DM × AM × FM × CM

Where:
LC = Load constant (23 kg)
HM = Horizontal multiplier
VM = Vertical multiplier
DM = Distance multiplier
AM = Asymmetry multiplier
FM = Frequency multiplier
CM = Coupling multiplier

Example (harvest container):
Container weight: 8 kg
Lift height: 750-1,200 mm
Frequency: 10 lifts/hour
Horizontal distance: 300mm

RWL ≈ 15 kg
Lifting Index = Load/RWL = 8/15 = 0.53 (acceptable, <1.0)
```

### 6.2 Automation Justification

**When to Automate:**
```
Decision Matrix:
                High Volume  Low Volume
High Variability    Manual     Manual
Low Variability    Automate    Mixed

Automation ROI:
Labor cost: $15/hr × 2,080 hr = $31,200/year
Automation cost: $100,000
Payback: 3.2 years

Additional factors:
+ Consistency and quality
+ Scalability
+ Labor shortage mitigation
- Capital requirements
- Maintenance complexity
- Flexibility reduction
```

## 7. Case Study: Complete Logistics System

**Facility: 2,000 m² Leafy Green Operation**

```
Production Flow:
Daily harvest: 1,200 kg
Packages: 240 units (5 kg each)
Labor: 12 workers total

Equipment Investment:
Vertical conveyors: (2) @ $45,000 = $90,000
Horizontal conveyors: 30m @ $350/m = $10,500
Harvest carts: (25) @ $450 = $11,250
AGVs: (4) @ $45,000 = $180,000
Wash system: $35,000
Packaging line: $50,000
Total: $376,750

Performance:
Throughput: 150 kg/hour
Labor productivity: 100 kg/person/shift
Transport efficiency: 85% (target >80%)
Pack-out rate: 97% (high quality)

Annual Operating Costs:
Equipment maintenance: $18,000
Packaging materials: $24,000
Energy (conveyors, AGVs): $8,500
Total: $50,500
```

## 8. Key Takeaways

1. **Vertical transport is critical** - Efficient movement between levels enables scalability
2. **Automate repetitive tasks** - ROI on automation improves with volume and repetition
3. **Design for flow** - Linear workflow reduces handling and wait times
4. **Standardize containers** - Interchangeable containers simplify all processes
5. **Plan for peaks** - Size systems for maximum throughput, not average
6. **Ergonomics reduce injury** - Proper material handling saves workers and compensation costs
7. **Data enables optimization** - Track cycle times and identify bottlenecks

## 9. Practical Exercise

Design material handling system for:
- 1,500 m² vertical farm, 8 levels
- Daily harvest: 800 kg leafy greens
- Labor available: 8 workers
- Budget: $250,000

Deliverables:
1. Process flow diagram
2. Equipment selection and sizing
3. Layout optimization
4. Cost-benefit analysis
5. Labor utilization plan

## Additional Resources

- Material Handling Industry of America (MHIA) standards
- NIOSH Lifting Guidelines
- Lean manufacturing resources
- AGV manufacturer specifications

## Next Module

**Module 8: Environmental Control System Integration** - Integrate sensors, controls, and automation for optimal growing conditions.

---

**Module 7 Complete** - Proceed to Module 7 Quiz.
