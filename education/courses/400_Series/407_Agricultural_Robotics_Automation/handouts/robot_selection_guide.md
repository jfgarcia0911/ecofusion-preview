# Handout: Robot Selection Guide for Agricultural Applications

## Decision Framework

Use this guide to select the appropriate robot type for your CEA operation.

---

## Application Decision Tree

```
START: What is your primary task?

├─ Material Transport & Logistics
│  ├─ Fixed path, high payload (>500 kg)
│  │  └─→ AGV with Magnetic Guidance
│  │       Cost: $15k-40k
│  │       Example: Custom guided cart
│  │
│  ├─ Flexible routing, moderate payload (<500 kg)
│  │  └─→ Autonomous Mobile Robot (AMR)
│  │       Cost: $25k-100k each
│  │       Example: MiR100, Fetch Robotics
│  │
│  └─ Overhead transport
│     └─→ Conveyor or Gantry System
│          Cost: $50k-200k installed
│          Example: Custom integration
│
├─ Manipulation (Picking, Placing, Sorting)
│  ├─ High-speed, simple motion (<1s cycle)
│  │  └─→ Delta Robot
│  │       Cost: $40k-80k
│  │       Speed: 120-180 picks/min
│  │       Example: ABB FlexPicker
│  │
│  ├─ Flexible positioning, moderate speed
│  │  └─→ SCARA Robot
│  │       Cost: $20k-60k
│  │       Reach: 400-1000mm
│  │       Example: Epson T-series, Yamaha YK-X
│  │
│  └─ Complex 3D motion, dexterous
│     └─→ 6-Axis Articulated Arm
│          Cost: $30k-150k
│          Payload: 3-25kg
│          Example: FANUC LR Mate, UR10e
│
├─ Harvesting
│  ├─ Leafy greens (lettuce, herbs)
│  │  └─→ Gantry-mounted gripper + cutter
│  │       Cost: $100k-300k
│  │       Speed: 60-100 heads/hr
│  │       Example: Custom integration
│  │
│  ├─ Fruiting crops (tomato, pepper, cucumber)
│  │  └─→ Multi-arm vision-guided system
│  │       Cost: $200k-500k
│  │       Speed: 20-40 fruit/hr per arm
│  │       Example: Root AI, FFRobotics
│  │
│  └─ Berries (strawberry)
│     └─→ Specialized berry harvester
│          Cost: $250k-600k (research stage)
│          Speed: Target 30-50 berries/hr
│          Example: Advanced Farm Technologies
│
├─ Seeding & Transplanting
│  ├─ High-volume nursery (>500k plants/year)
│  │  └─→ Automated Transplanting Line
│  │       Cost: $150k-400k
│  │       Speed: 4,000-12,000 plants/hr
│  │       Example: Visser, ISO Group
│  │
│  └─ Small-medium scale (<500k/year)
│     └─→ Semi-automated or Manual
│          Cost: <$50k
│          ROI often not favorable
│
└─ Inspection & Monitoring
   ├─ Row-based patrol
   │  └─→ AMR with sensor payload
   │       Cost: $30k-80k
   │       Sensors: RGB, thermal, hyperspectral
   │       Example: Custom integration
   │
   ├─ Fixed-position monitoring
   │  └─→ Static camera arrays
   │       Cost: $10k-30k
   │       Coverage: Zone-based
   │
   └─ Large greenhouse overhead
      └─→ Gantry or Drone system
           Cost: $50k-150k
           Coverage: Facility-wide
```

---

## Selection Matrix by Application

### Material Handling

| Task | Volume | Robot Type | Throughput | Investment | ROI Period |
|------|--------|------------|------------|------------|------------|
| Tray transport | Low (<50/hr) | Manual carts | 20-30/hr | $2k | N/A |
| Tray transport | Medium (50-200/hr) | AGV | 40-80/hr | $30k | 3-5 yr |
| Tray transport | High (>200/hr) | AMR fleet | 100-300/hr | $150k | 2-3 yr |
| Bin handling | Any | AMR + gripper | 20-40/hr | $80k | 2-4 yr |
| Palletizing | High | Robotic arm | 200-400/hr | $120k | 2-3 yr |

### Transplanting

| Scale | Throughput Need | Robot Type | Speed | Investment | ROI Period |
|-------|-----------------|------------|-------|------------|------------|
| Hobby | <10k/yr | Manual | 60-100/hr | $0 | N/A |
| Small commercial | 10k-100k/yr | Semi-auto | 500-1000/hr | $20k-50k | 5-10 yr |
| Medium | 100k-500k/yr | Automated | 2,000-4,000/hr | $100k-200k | 3-5 yr |
| Large | >500k/yr | High-speed auto | 8,000-12,000/hr | $200k-400k | 2-3 yr |

### Harvesting

| Crop | Difficulty | Robot Maturity | Current Success | Investment | Status |
|------|------------|----------------|-----------------|------------|--------|
| Lettuce (head) | Medium | TRL 6-7 | 85-90% | $150k-300k | Limited commercial |
| Microgreens | Low | TRL 7-8 | >95% | $100k-200k | Commercial |
| Tomato | High | TRL 5-6 | 80-85% | $300k-500k | Early deployment |
| Pepper | High | TRL 4-5 | 60-75% | $300k+ | Development |
| Strawberry | Very high | TRL 3-4 | 40-60% | $400k+ | Research |
| Cucumber | Medium-high | TRL 5-6 | 70-80% | $250k-400k | Prototype |

---

## Gripper Selection Guide

### By Crop Characteristics

```
CROP PROPERTIES → GRIPPER TYPE

Smooth, round, firm surface (tomato, apple, cucumber)
├─ Primary: Vacuum/suction gripper
│  • Pros: Gentle, distributed force, fast
│  • Cons: Requires smooth surface
│  • Cost: $2k-8k
│
└─ Alternative: Soft pneumatic gripper
   • Pros: Conforms to shape, very gentle
   • Cons: Slower, complex control
   • Cost: $5k-15k

Irregular, delicate (leafy greens, herbs)
└─ Soft parallel jaw with compliance
   • Pros: Adjusts to size variation
   • Cons: May need vision alignment
   • Cost: $3k-10k

Stemmed crops (peppers on plant)
├─ Three-finger adaptive gripper
│  • Pros: Self-centering, stable
│  • Cons: Complex mechanism
│  • Cost: $8k-20k
│
└─ Parallel jaw + integrated cutter
   • Pros: Combined grasp and cut
   • Cons: Requires precise alignment
   • Cost: $10k-25k

Small, clustered (berries, cherry tomatoes)
└─ Gentle suction array or soft fingers
   • Pros: Handles delicacy
   • Cons: Slow, vision-intensive
   • Cost: $15k-40k
```

### Gripper Force Calculator

```
Required Grip Force (minimum):

F_grip = (m × g × SF) / (n × μ)

Where:
m = object mass (kg)
g = 9.81 m/s²
SF = safety factor (2-4 typical for agriculture)
n = number of contact points
μ = coefficient of friction (0.3-0.8 for food surfaces)

Example: Tomato (200g), parallel jaw (n=2), μ=0.5, SF=3
F_grip = (0.2 × 9.81 × 3) / (2 × 0.5) = 5.9 N

Add acceleration forces:
F_total = F_grip + m × a_max

With a_max = 2 m/s²:
F_total = 5.9 + 0.2 × 2 = 6.3 N

Select gripper rated for >6.3 N (typically choose 2× = 12-15 N)
```

---

## Camera Selection Guide

### By Application

| Application | Resolution | FPS | Depth | Type | Cost | Example |
|-------------|-----------|-----|-------|------|------|---------|
| Navigation | VGA (640×480) | 30 | Yes | Stereo/ToF | $200-500 | RealSense T265 |
| Fruit detection | 2-5 MP | 15-30 | Optional | RGB or RGB-D | $200-1000 | Basler ace, RealSense D435 |
| Quality inspection | 5-12 MP | 10-20 | No | RGB GigE | $800-2000 | Basler, JAI |
| Harvesting guidance | 1-2 MP | 30-60 | Yes | RGB-D | $300-800 | RealSense D435i |
| Phenotyping | 12-20 MP | 5-10 | Yes | High-res RGB-D | $2k-5k | Custom stereo rig |
| Disease detection | Multispectral | 5-15 | No | 4-12 bands | $3k-10k | MicaSense, Sentera |
| Research | Hyperspectral | 1-10 | No | 100+ bands | $10k-50k | Specim, Resonon |

### Lens Selection

```
Field of View (FOV) Calculation:

FOV = 2 × arctan(sensor_size / (2 × focal_length))

Horizontal sensor size common values:
- 1/4": 3.2 mm
- 1/3": 4.8 mm
- 1/2": 6.4 mm
- 1": 12.8 mm

Working Distance (WD) vs. FOV:

For sensor width S, focal length f, FOV width W:
WD = (S × W) / (2 × S × tan(FOV/2))

Example: Detect tomatoes at 1m distance
Tomato size: ~60 mm
Desired image coverage: 400 mm × 300 mm
Sensor: 1/2" (6.4 mm wide)

Required focal length:
f = (sensor_width × distance) / FOV_width
f = (6.4 mm × 1000 mm) / 400 mm = 16 mm lens

Common agricultural robot lens: 12-16 mm (wide coverage, close range)
```

---

## ROI Calculator

### Quick Estimation Tool

```python
def calculate_robot_roi(robot_cost, annual_labor_savings,
                        annual_operating_cost, useful_life=10):
    """
    Quick ROI calculation for robot investment

    Returns: payback_period, npv, irr
    """
    net_annual_benefit = annual_labor_savings - annual_operating_cost
    payback_period = robot_cost / net_annual_benefit

    # NPV at 10% discount rate
    discount_rate = 0.10
    npv = -robot_cost
    for year in range(1, useful_life + 1):
        npv += net_annual_benefit / (1 + discount_rate)**year

    # Simplified IRR approximation
    irr_estimate = (net_annual_benefit / robot_cost) - (1 / useful_life)

    return {
        'payback_years': payback_period,
        'npv': npv,
        'irr_estimate': irr_estimate * 100  # as percentage
    }

# Example: Transplanting robot
result = calculate_robot_roi(
    robot_cost=180_000,
    annual_labor_savings=75_000,  # Displaced 2 FTE @ $37.5k each
    annual_operating_cost=18_000,  # Maintenance, energy, consumables
    useful_life=10
)

print(f"Payback period: {result['payback_years']:.1f} years")
print(f"NPV (10% discount): ${result['npv']:,.0f}")
print(f"IRR estimate: {result['irr_estimate']:.1f}%")
```

### Breakeven Analysis

```
Labor cost to justify robot investment:

Annual Labor Savings Required =
    (Robot Cost / Payback Target) + Annual Operating Cost

For 3-year payback target:
Robot: $200k
Operating: $20k/yr
Required labor savings: ($200k / 3) + $20k = $86,667/yr

At $40k/FTE (with benefits): Needs to displace 2.2 FTE

Rule of Thumb:
• Small robots (<$50k): 1-2 year payback, displace 0.5-1 FTE
• Medium robots ($100-200k): 2-3 year payback, displace 2-3 FTE
• Large systems (>$300k): 3-4 year payback, displace 5+ FTE or
  enable significant throughput increase
```

---

## Vendor Evaluation Checklist

```
☐ Technical Capability
  ☐ Meets performance specifications (speed, accuracy, payload)
  ☐ Proven in similar agricultural applications
  ☐ Appropriate environmental rating (IP65+ for CEA)
  ☐ Integration flexibility (APIs, standard protocols)

☐ Commercial Viability
  ☐ Company financially stable (5+ years projected)
  ☐ Multiple installations (>10 preferred)
  ☐ Positive customer references
  ☐ Clear product roadmap

☐ Support & Service
  ☐ Local service availability (<4 hour response target)
  ☐ Spare parts stock and lead times
  ☐ Training included or available
  ☐ Documentation quality (manuals, API docs)
  ☐ Software update policy

☐ Financial
  ☐ Total cost of ownership (TCO) calculated
  ☐ Warranty terms (min 1 year, prefer 2-3)
  ☐ Payment terms (milestone-based preferred)
  ☐ Performance guarantees in contract

☐ Integration
  ☐ Compatible with existing systems
  ☐ Integrator identified (if not in-house)
  ☐ Integration cost estimated
  ☐ Facility modifications identified

☐ Scalability
  ☐ Can expand capacity incrementally
  ☐ Technology refresh path clear
  ☐ Not locked into proprietary ecosystem
```

---

## Summary Decision Criteria

### Choose Automation When:
✓ Labor cost >$50k/year for the task
✓ High-volume repetitive operation
✓ Consistent product specifications
✓ Predictable production schedule
✓ 3-5 year operation horizon
✓ Management commitment to technology
✓ In-house or outsourced technical support available

### Avoid or Delay When:
✗ Highly variable products/processes
✗ Low volume (<100k units/year for transplanting, <50k kg/year for harvesting)
✗ Unstable financial situation
✗ Lack of technical expertise
✗ Unproven technology for your specific crop
✗ Short-term operation (<2 years)

---

*Use this guide as starting point; consult with integrators and vendors for specific recommendations.*

**EcoFusion Academy - Course 407: Agricultural Robotics & Automation**
