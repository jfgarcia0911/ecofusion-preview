# Module 5: Water & Pumping Efficiency

## Learning Objectives

By the end of this module, you will be able to:
- Calculate pumping energy requirements
- Right-size pumps for efficiency
- Implement variable frequency drives (VFDs)
- Reduce piping system losses
- Optimize irrigation and recirculation systems

---

## 5.1 Pumping Energy Fundamentals

### Pump Power Formula

```
BASIC PUMP POWER CALCULATION
═══════════════════════════════════════════════════════════════════

Power (HP) = (GPM × Head (ft) × Specific Gravity) ÷ (3,960 × Efficiency)

Where:
  GPM = Gallons per minute flow rate
  Head = Total dynamic head (TDH) in feet
  Specific Gravity = 1.0 for water
  Efficiency = Pump efficiency (0.50-0.85 typical)

Convert HP to kW: HP × 0.746 = kW

Example:
  Flow: 100 GPM
  Head: 40 feet
  Efficiency: 70%

  HP = (100 × 40 × 1.0) ÷ (3,960 × 0.70)
     = 4,000 ÷ 2,772
     = 1.44 HP → Select 2 HP motor

  Power = 2 HP × 0.746 = 1.49 kW
```

### Energy Consumption by Application

```
╔══════════════════════════════════════════════════════════════════╗
║        TYPICAL PUMPING ENERGY IN CEA FACILITIES                  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  GREENHOUSE (soil/soilless)                                      ║
║  ═══════════════════════════                                     ║
║    Irrigation        ████████████████░░░░░░░░░░ 60-70%          ║
║    Fertilizer inject ████████░░░░░░░░░░░░░░░░░░ 20-25%          ║
║    Misting/fogging   ████░░░░░░░░░░░░░░░░░░░░░░ 10-15%          ║
║                                                                  ║
║  HYDROPONICS/NFT                                                 ║
║  ════════════════                                                ║
║    Recirculation     ████████████████████████░░ 75-85%          ║
║    Injection         ████░░░░░░░░░░░░░░░░░░░░░░ 10-15%          ║
║    Transfer          ██░░░░░░░░░░░░░░░░░░░░░░░░  5-10%          ║
║                                                                  ║
║  AQUAPONICS                                                      ║
║  ═══════════                                                     ║
║    Fish tank recirculation ████████████████░░░░ 50-60%          ║
║    Grow bed flood/drain    ████████████░░░░░░░░ 35-40%          ║
║    Solids filtration       ████░░░░░░░░░░░░░░░░ 10-15%          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## 5.2 Pump Selection & Sizing

### Total Dynamic Head (TDH) Calculation

```
TDH COMPONENTS
═══════════════════════════════════════════════════════════════════

TDH = Static Head + Pressure Head + Friction Loss

Component              Calculation
─────────────────────────────────────────────────────────────────
Static Head            Elevation difference (ft)
Pressure Head          (PSI × 2.31) ft
Friction Loss          Piping + fittings + valves (ft)

Example: Irrigation System
───────────────────────────────────────────────────────────────────

1. Static Head:
   Tank elevation: Ground level (0 ft)
   Delivery height: 12 ft
   Static head: 12 ft

2. Pressure Head:
   Required pressure at emitters: 15 PSI
   Pressure head: 15 × 2.31 = 34.7 ft

3. Friction Loss:
   Main line: 100 ft × 2" pipe at 100 GPM = 8.2 ft
   Laterals: 50 ft × 1" pipe at 25 GPM = 12.5 ft
   Fittings & valves: 6 elbows + 2 valves = 8.0 ft
   Filter: 5.0 ft
   Total friction: 33.7 ft

TOTAL TDH: 12 + 34.7 + 33.7 = 80.4 ft ≈ 85 ft (with safety factor)

Pump Selection:
  Flow: 100 GPM
  Head: 85 ft
  Power: (100 × 85 × 1.0) ÷ (3,960 × 0.70) = 3.07 HP
  Select: 3 HP pump motor
```

### Friction Loss Charts

```
PIPE FRICTION LOSS (feet per 100 ft of pipe)
═══════════════════════════════════════════════════════════════════

Schedule 40 PVC Pipe

Flow (GPM)    1/2"    3/4"    1"      1.5"    2"      3"
─────────────────────────────────────────────────────────────────
5             3.2     0.9     0.3     -       -       -
10            11.5    3.1     0.9     0.2     -       -
15            24.0    6.5     1.9     0.4     0.1     -
25            -       16.5    4.8     1.0     0.3     -
50            -       -       17.5    3.6     1.1     0.2
100           -       -       -       13.2    4.0     0.7
150           -       -       -       28.0    8.5     1.5
200           -       -       -       -       14.5    2.6

Key Lesson: Larger pipe = much lower friction loss
  Example: 100 GPM through 100 ft of pipe
    1.5" pipe: 13.2 ft loss
    2.0" pipe: 4.0 ft loss (70% reduction!)
    3.0" pipe: 0.7 ft loss (95% reduction!)

Pump Power Impact (100 GPM, 70% efficient pump):
  1.5" option: 13.2 ft × 100 ÷ 2,772 = 0.48 HP
  2.0" option: 4.0 ft × 100 ÷ 2,772 = 0.14 HP
  3.0" option: 0.7 ft × 100 ÷ 2,772 = 0.03 HP

Annual energy (8 hrs/day, 365 days):
  1.5": 0.48 HP × 0.746 kW/HP × 2,920 hrs = 1,045 kWh ($125/yr)
  2.0": 0.14 HP × 0.746 × 2,920 = 305 kWh ($37/yr)
  3.0": 0.03 HP × 0.746 × 2,920 = 65 kWh ($8/yr)

Pipe Cost Difference (100 ft):
  1.5": $150
  2.0": $220 (+$70)
  3.0": $380 (+$230)

Larger pipe pays back through energy savings!
```

### Oversizing Penalties

```
PUMP OVERSIZING ANALYSIS
═══════════════════════════════════════════════════════════════════

Scenario: System needs 3 HP, operator installs 5 HP "to be safe"

Actual Requirements:
  Flow: 100 GPM
  Head: 85 ft
  Required power: 3 HP

3 HP Pump Operating Point:
  Efficiency at design: 72%
  Power draw: 3 HP × 0.746 = 2.24 kW

5 HP Pump Operating Point:
  Operating off-curve (too far left)
  Efficiency at actual flow: 58% (reduced!)
  Power draw: 3.8 kW (higher than needed)

Energy Waste:
  Excess power: 3.8 - 2.24 = 1.56 kW
  Annual (8 hrs/day): 1.56 kW × 2,920 hrs = 4,555 kWh
  Cost: $547/year wasted

Over 10 years: $5,470 wasted

Additional Issues:
  ✗ Lower efficiency
  ✗ Higher maintenance (wear from throttling)
  ✗ Shortened equipment life
  ✗ Higher capital cost

Key Lesson: Right-sizing is critical!
```

---

## 5.3 Variable Frequency Drives (VFDs)

### Affinity Laws

```
PUMP AFFINITY LAWS
═══════════════════════════════════════════════════════════════════

When pump speed changes:

Flow: Q₂ = Q₁ × (N₂ ÷ N₁)
Head: H₂ = H₁ × (N₂ ÷ N₁)²
Power: P₂ = P₁ × (N₂ ÷ N₁)³  ← CUBIC relationship!

Where:
  Q = Flow rate
  H = Head
  P = Power
  N = Speed (RPM)

Example: Reduce speed to 80%
────────────────────────────────────────────────────────────────
Original (100% speed):
  Flow: 100 GPM
  Head: 85 ft
  Power: 3 HP

At 80% speed:
  Flow: 100 × 0.80 = 80 GPM
  Head: 85 × 0.80² = 54.4 ft
  Power: 3 × 0.80³ = 1.54 HP

Power reduction: 48.6% for only 20% flow reduction!

Annual Energy Savings:
  Full speed: 3 HP × 0.746 × 2,920 hrs = 6,535 kWh
  80% speed: 1.54 HP × 0.746 × 2,920 hrs = 3,353 kWh
  Savings: 3,182 kWh ($382/year at $0.12/kWh)
```

### VFD ROI Analysis

```
VFD IMPLEMENTATION CASE STUDY
═══════════════════════════════════════════════════════════════════

System: NFT hydroponic recirculation
Current: 5 HP pump, constant speed
Flow requirement: Variable 60-100 GPM based on crop stage

Without VFD (throttled with valve):
  Motor: 5 HP constant
  Annual runtime: 8,760 hours (continuous)
  Energy: 5 HP × 0.746 kW/HP × 8,760 hrs = 32,695 kWh
  Cost: $3,923/year

Average Flow Needed: 75 GPM (75% of max)

With VFD (reduced speed):
  Average speed: 75% of full
  Power: 5 HP × 0.75³ = 2.11 HP average
  Energy: 2.11 × 0.746 × 8,760 = 13,794 kWh
  Cost: $1,655/year

Annual Savings:
  Energy: 18,901 kWh (58% reduction)
  Cost: $2,268/year

VFD Investment:
  VFD unit (5 HP): $1,800
  Installation: $500
  Total: $2,300

Simple Payback: $2,300 ÷ $2,268 = 1.0 year

Additional Benefits:
  ✓ Soft start (reduced mechanical stress)
  ✓ Precise flow control
  ✓ Extended pump life
  ✓ Reduced water hammer
  ✓ Lower maintenance costs
```

### VFD Application Guide

```
VFD SUITABILITY MATRIX
═══════════════════════════════════════════════════════════════════

Application              Variable    VFD          Typical
                        Flow?       Payback      Savings
─────────────────────────────────────────────────────────────────
Irrigation (demand)      Yes         1-3 yrs      30-60%
Recirculation (NFT)      Yes         1-2 yrs      40-60%
Cooling tower            Yes         1-3 yrs      30-50%
Aquaponics circulation   Moderate    2-4 yrs      20-40%
Misting/fogging         Yes         1-2 yrs      35-55%
Fixed-pressure system    No          Poor         <10%
Booster pump            Moderate    2-5 yrs      15-30%

Best Applications:
  ✓ Variable demand
  ✓ Long operating hours
  ✓ Large motors (>2 HP)
  ✓ Throttled operation currently

Poor Applications:
  ✗ Constant flow/pressure
  ✗ Short runtime
  ✗ Small motors (<1 HP)
  ✗ Already well-matched
```

---

## 5.4 System Design for Efficiency

### Piping Layout Optimization

```
PIPING BEST PRACTICES
═══════════════════════════════════════════════════════════════════

Minimize Friction Losses:

1. Straight runs when possible
   Each 90° elbow = 2-3 ft of straight pipe equivalent
   Example: 10 elbows = 20-30 ft friction loss

2. Gradual bends instead of elbows
   Long-radius elbows: 30% less loss than standard

3. Larger pipe diameter
   See friction loss table above - dramatic impact

4. Minimize fitting count
   Every fitting adds resistance

5. Use full-port valves
   Standard valve: 5-8 ft equivalent loss
   Full-port valve: 1-2 ft equivalent loss

Example Comparison:
───────────────────────────────────────────────────────────────────

POOR DESIGN:
  • 100 ft of 1.5" pipe
  • 12 standard elbows
  • 3 standard ball valves
  • 100 GPM flow

  Friction loss:
    Pipe: 13.2 ft
    Elbows: 12 × 2.5 ft = 30 ft
    Valves: 3 × 6 ft = 18 ft
    TOTAL: 61.2 ft

OPTIMIZED DESIGN:
  • 100 ft of 2" pipe
  • 6 long-radius elbows
  • 2 full-port valves
  • 100 GPM flow

  Friction loss:
    Pipe: 4.0 ft
    Elbows: 6 × 1.8 ft = 10.8 ft
    Valves: 2 × 1.5 ft = 3.0 ft
    TOTAL: 17.8 ft

Savings: 43.4 ft of head (71% reduction!)

Pump Power Impact:
  Poor: (100 × 61.2) ÷ 2,772 = 2.21 HP
  Good: (100 × 17.8) ÷ 2,772 = 0.64 HP

Annual Energy Savings:
  Difference: 1.57 HP × 0.746 kW/HP × 8,760 hrs = 10,263 kWh
  Value: $1,232/year

Incremental Pipe Cost: ~$200
Payback: 2 months
```

### Multiple Pump Staging

```
STAGED PUMP STRATEGY
═══════════════════════════════════════════════════════════════════

Scenario: Variable flow 20-100 GPM

Single Pump Approach:
  One 5 HP pump with VFD
  Efficiency: Poor at low flows (<30%)
  Cost: $2,800

Staged Pump Approach:
  Pump 1: 2 HP (for 20-40 GPM) with VFD
  Pump 2: 3 HP (for 30-60 GPM) with VFD
  Both: For 60-100 GPM
  Cost: $5,200

Efficiency Comparison:
───────────────────────────────────────────────────────────────────

Flow Demand Profile:
  20-40 GPM: 40% of time (3,504 hrs/year)
  40-70 GPM: 40% of time (3,504 hrs/year)
  70-100 GPM: 20% of time (1,752 hrs/year)

Single Pump Energy:
  Low flow: 5 HP × 0.40³ × 3,504 × 0.746 = 1,681 kWh
  Med flow: 5 HP × 0.70³ × 3,504 × 0.746 = 4,467 kWh
  High flow: 5 HP × 1.00³ × 1,752 × 0.746 = 6,535 kWh
  Total: 12,683 kWh/year ($1,522/year)

Staged Pumps Energy:
  Low flow (Pump 1 only): 2 HP × 0.746 × 3,504 = 5,228 kWh
  Med flow (Pump 2 only): 3 HP × 0.746 × 3,504 = 7,842 kWh
  High flow (both): 5 HP × 0.746 × 1,752 = 6,535 kWh
  Total: 9,605 kWh/year ($1,153/year)

Annual Savings: $369/year
Incremental Cost: $2,400
Payback: 6.5 years

Better for systems with:
  • Wide flow variation
  • Critical reliability needs (backup pump)
  • Long operating hours
```

---

## 5.5 Specific Applications

### Drip Irrigation Efficiency

```
DRIP IRRIGATION OPTIMIZATION
═══════════════════════════════════════════════════════════════════

System: 10,000 sq ft greenhouse, tomatoes
Emitters: 10,000 @ 1 GPH each
Operating pressure: 15 PSI
Runtime: 2 hrs/day (staggered zones)

Current Setup:
  4 zones × 2,500 emitters = 2,500 GPH per zone
  = 41.7 GPM per zone
  Pressure head: 15 PSI × 2.31 = 34.7 ft
  Static head: 10 ft
  Friction loss (poor design): 25 ft
  TDH: 69.7 ft

  Pump: (41.7 × 69.7) ÷ 2,772 = 1.05 HP → 1.5 HP motor
  Power: 1.5 × 0.746 = 1.12 kW
  Daily energy: 1.12 kW × 2 hrs × 4 zones = 8.96 kWh
  Annual: 3,270 kWh ($392/year)

Optimized Setup:
  Larger main line: Reduces friction to 8 ft
  TDH: 52.7 ft (24% reduction)

  Pump: (41.7 × 52.7) ÷ 2,772 = 0.79 HP → 1.0 HP motor
  Power: 1.0 × 0.746 = 0.75 kW
  Daily energy: 0.75 × 2 × 4 = 6.0 kWh
  Annual: 2,190 kWh ($263/year)

  Savings: $129/year
  Pipe upgrade cost: $400
  Payback: 3.1 years

Additional Optimization - Pressure Regulation:
  Use pressure-compensating emitters
  Can reduce operating pressure to 10 PSI
  Further 20% energy savings: $52/year
  Incremental cost: $800
  Payback: 15 years (marginal)
```

### Aquaponics Circulation

```
AQUAPONICS PUMP OPTIMIZATION
═══════════════════════════════════════════════════════════════════

System: 2,000-gallon fish tank
Target: 2× turnover/hour = 4,000 GPH = 66.7 GPM
Continuous operation (24/7)

Head Requirements:
  Static: 6 ft (from tank to grow beds)
  Pressure: 10 PSI = 23.1 ft (for distribution)
  Friction: 12 ft
  TDH: 41.1 ft ≈ 42 ft

Pump Selection:
  (67 × 42) ÷ 2,772 = 1.02 HP → 1.5 HP pump

Current (constant speed):
  Power: 1.5 HP × 0.746 = 1.12 kW
  Annual: 1.12 kW × 8,760 hrs = 9,811 kWh
  Cost: $1,177/year

Optimization Option: VFD with dissolved oxygen control
  Reduce flow during high DO periods (nighttime)
  Average speed: 85%
  Power: 1.5 × 0.85³ = 0.92 HP avg
  Annual: 0.92 × 0.746 × 8,760 = 6,018 kWh
  Cost: $722/year

  Savings: $455/year
  VFD cost: $1,200
  Payback: 2.6 years

Maintenance Considerations:
  ✓ Pump must be fish-safe materials
  ✓ No dead zones (bacterial buildup)
  ✓ Easy cleaning access
  ✓ Backup pump recommended
```

---

## 5.6 Maintenance for Efficiency

### Preventive Maintenance Program

```
PUMP MAINTENANCE SCHEDULE
═══════════════════════════════════════════════════════════════════

Daily:
  □ Visual inspection for leaks
  □ Listen for unusual noises
  □ Check pressure gauges

Weekly:
  □ Check motor temperature
  □ Inspect seals for leaks
  □ Clean inlet screens/filters

Monthly:
  □ Check alignment
  □ Lubricate bearings (if applicable)
  □ Test VFD operation
  □ Measure flow rate
  □ Check pressure at key points

Quarterly:
  □ Vibration analysis
  □ Amp draw measurement
  □ Full system pressure test
  □ Clean impeller if needed

Annually:
  □ Seal replacement
  □ Bearing replacement (as needed)
  □ Efficiency test
  □ VFD calibration

Energy Impact of Poor Maintenance:
───────────────────────────────────────────────────────────────────

Worn impeller (15% efficiency loss):
  Good condition: 70% efficient
  Worn condition: 55% efficient
  Power increase: 27%

  3 HP pump running 4,000 hrs/year:
    Good: 3 × 0.746 × 4,000 = 8,952 kWh
    Worn: 3 × 0.746 × 4,000 ÷ 0.55 × 0.70 = 11,399 kWh
    Waste: 2,447 kWh/year ($293/year)

  Impeller replacement: $250 + $100 labor = $350
  Payback: 1.2 years

  Key lesson: Preventive maintenance pays!
```

---

## 5.7 Case Study: Complete Pumping System Upgrade

### Facility Profile

**Hydro Greens Farm**
- 8,000 sq ft NFT hydroponic
- 24 growing channels
- Current: Oversized, inefficient pumps

### Current System

```
EXISTING PUMPING SETUP
═══════════════════════════════════════════════════════════════════

Main Recirculation:
  Pump: 7.5 HP constant speed
  Flow: Design 150 GPM, actual need 100 GPM
  Head: 55 ft (includes 20 ft excess from oversizing)
  Runtime: 24/7 continuous

  Energy: 7.5 HP × 0.746 kW/HP × 8,760 hrs = 49,041 kWh/year
  Cost: $5,885/year

Irrigation Distribution:
  Pump: 3 HP constant speed
  Throttled with valve (wasteful)
  Runtime: 18 hrs/day

  Energy: 3 × 0.746 × 6,570 hrs = 14,706 kWh/year
  Cost: $1,765/year

Fertilizer Injection:
  Pump: 1 HP constant
  Over-pressurized system
  Runtime: 18 hrs/day

  Energy: 1 × 0.746 × 6,570 = 4,902 kWh/year
  Cost: $588/year

TOTAL ANNUAL COST: $8,238/year
```

### Optimized System

```
PUMPING SYSTEM REDESIGN
═══════════════════════════════════════════════════════════════════

Improvement 1: Right-Size Main Recirculation
  Replace 7.5 HP with 5 HP + VFD
  Optimize piping to reduce head to 40 ft
  Variable speed based on crop stage

  Equipment cost: $3,800
  Piping improvements: $1,200
  Total: $5,000

  New energy consumption:
    Average speed: 70% (variable crop demand)
    Power: 5 × 0.70³ × 0.746 × 8,760 = 11,151 kWh
    Cost: $1,338/year

  Savings: $4,547/year
  Payback: 1.1 years

Improvement 2: VFD on Distribution Pump
  Add VFD to existing 3 HP pump
  Eliminate throttling valve

  VFD cost: $1,200

  New consumption:
    Average speed: 80%
    Power: 3 × 0.80³ × 0.746 × 6,570 = 7,561 kWh
    Cost: $907/year

  Savings: $858/year
  Payback: 1.4 years

Improvement 3: Optimize Injection System
  Replace with 0.5 HP pump (properly sized)
  Add pressure control

  Equipment: $800

  New consumption:
    Power: 0.5 × 0.746 × 6,570 = 2,451 kWh
    Cost: $294/year

  Savings: $294/year
  Payback: 2.7 years

───────────────────────────────────────────────────────────────────
TOTAL SYSTEM UPGRADE
───────────────────────────────────────────────────────────────────

Total Investment: $8,000
Annual Savings: $5,699 (69% reduction)
Simple Payback: 1.4 years
10-Year NPV (5%): $35,990

New Annual Pumping Cost: $2,539 (vs. $8,238)

Additional Benefits:
  ✓ Better flow control
  ✓ Reduced maintenance
  ✓ Extended equipment life
  ✓ Improved crop performance
  ✓ Lower demand charges
```

---

## Key Takeaways

1. **Right-sizing is critical** - Oversized pumps waste significant energy
2. **VFDs offer huge savings** - Especially for variable flow applications
3. **Piping design matters** - Larger pipes = lower friction = less energy
4. **Affinity laws are powerful** - Small speed reductions = big energy savings
5. **Maintenance preserves efficiency** - Worn pumps waste energy
6. **System approach** - Optimize the whole system, not just the pump
7. **Fast paybacks** - Pumping upgrades often pay back in 1-3 years

---

## Practice Exercise

Analyze a pumping system:
1. Calculate TDH for your application
2. Size pump correctly
3. Calculate annual energy consumption
4. Evaluate VFD opportunity
5. Identify piping improvements
6. Calculate ROI for upgrades

---

**Next Module**: Module 6 - Building Envelope Optimization

---

*Course 305: Energy Systems for CEA | Module 5 | EcoFusion Academy*
