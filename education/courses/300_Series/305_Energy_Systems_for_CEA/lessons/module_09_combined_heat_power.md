# Module 9: Combined Heat & Power (CHP)

## Learning Objectives

By the end of this module, you will be able to:
- Understand CHP technology and applications
- Size CHP systems for CEA facilities
- Calculate CHP economics and efficiency
- Evaluate fuel options for CHP
- Integrate CHP with existing systems

---

## 9.1 CHP Fundamentals

### What is CHP?

```
COMBINED HEAT & POWER (Cogeneration)
═══════════════════════════════════════════════════════════════════

Concept: Simultaneously generate electricity AND capture waste heat

Traditional Approach (Separate):
────────────────────────────────────────────────────────────────
  Grid Electricity:        35% efficient (power plant + transmission)
  Boiler Heating:          80% efficient
  COMBINED EFFICIENCY:     ~45% of fuel energy utilized

CHP Approach (Combined):
────────────────────────────────────────────────────────────────
  Electricity:             30-40% of fuel → electricity
  Useful heat:             40-50% of fuel → captured heat
  COMBINED EFFICIENCY:     70-90% of fuel energy utilized

Energy Flow Diagram:
═══════════════════════════════════════════════════════════════════

Natural Gas Input (100 units)
        │
        ▼
    ┌────────────────┐
    │  CHP ENGINE    │
    │  (Generator)   │
    └────────────────┘
        │      │
        │      └──→ Electricity: 35 units
        │
        └──→ Exhaust heat: 45 units (captured)
             Jacket water heat: 15 units (captured)
             Losses: 5 units

Total useful output: 95 units (95% efficiency!)
```

### CHP Technologies

```
CHP TECHNOLOGY COMPARISON
═══════════════════════════════════════════════════════════════════

Technology        Size Range  Electric   Fuel Options  Best For
                  (kW)        Efficiency
─────────────────────────────────────────────────────────────────
Reciprocating     5-10,000    30-40%     NG, propane,  Most CEA
 engine                                  biogas        applications

Microturbine      30-500      22-28%     NG, biogas    Continuous
                                                       high heat

Fuel cell         5-5,000     35-50%     NG, H2        Premium apps
                                                       (high cost)

Steam turbine     500-250,000 15-40%     Any fuel      Very large
                                                       operations

FOR TYPICAL CEA (<1 MW): Reciprocating engine is best choice
```

---

## 9.2 System Sizing

### Heat-to-Power Ratio

```
SIZING METHODOLOGY
═══════════════════════════════════════════════════════════════════

Key Principle: Size for thermal load, not electrical

CHP systems have fixed heat-to-power ratio:
  Typical natural gas engine: 1.3:1 to 1.5:1
  (For every 1 kW electric, produces 1.3-1.5 kW thermal)

Example Facility Analysis:
────────────────────────────────────────────────────────────────
  Electric demand: 100 kW average, 150 kW peak
  Heating demand: 500,000 Btu/hr avg (146 kW thermal)
  Operating schedule: 24/7

Heat-to-Power Ratio: 146 kW thermal ÷ 100 kW electric = 1.46:1

This matches CHP perfectly!

Sizing Options:
────────────────────────────────────────────────────────────────

Option A: Size for electrical (not recommended)
  CHP: 100 kW electric
  Heat produced: 100 × 1.4 = 140 kW thermal
  Electric self-sufficiency: 100%
  Thermal match: 140 ÷ 146 = 96% (good)
  Problem: Peaks to 150 kW (need grid import)

Option B: Size for base electrical (recommended)
  CHP: 80 kW electric
  Heat produced: 80 × 1.4 = 112 kW thermal
  Electric self-sufficiency: 80%
  Thermal match: 77%
  Advantage: Always running at full capacity (best efficiency)

Option C: Size for thermal
  CHP: Sized to produce 146 kW thermal
  Electric: 146 ÷ 1.4 = 104 kW
  Problem: Over-sized for electric base load
  May need to export to grid (if allowed)
```

### Annual Production Calculation

```
CHP PERFORMANCE ESTIMATION
═══════════════════════════════════════════════════════════════════

System: 80 kW natural gas CHP
Location: Greenhouse with year-round heating needs

Operating Schedule:
  Full capacity: 8,000 hrs/year (91% runtime)
  Maintenance downtime: 760 hrs/year (9%)

Annual Outputs:
────────────────────────────────────────────────────────────────

Electricity Generated:
  80 kW × 8,000 hrs = 640,000 kWh/year

Heat Generated:
  80 kW × 1.4 × 8,000 hrs × 3,412 Btu/kWh
  = 3,056 MMBtu/year

Fuel Consumption:
  Electrical efficiency: 35%
  Input energy: 640,000 kWh ÷ 0.35 = 1,828,571 kWh
  = 6,240 MMBtu (62,400 therms natural gas)

Operating Costs:
  Natural gas: 62,400 therms × $1.20 = $74,880/year
  Maintenance: $0.015/kWh × 640,000 = $9,600/year
  Total: $84,480/year

Value Generated:
────────────────────────────────────────────────────────────────

Electricity (offset purchases):
  640,000 kWh × $0.14/kWh = $89,600/year

Heat (offset boiler fuel):
  3,056 MMBtu ÷ 0.85 boiler eff = 3,595 MMBtu input offset
  35,950 therms × $1.20 = $43,140/year

Total Annual Value: $132,740/year

NET BENEFIT: $132,740 - $84,480 = $48,260/year
```

---

## 9.3 Economics

### Capital and Operating Costs

```
CHP FINANCIAL ANALYSIS
═══════════════════════════════════════════════════════════════════

80 kW Natural Gas CHP System

Capital Costs:
────────────────────────────────────────────────────────────────
  Generator unit:          $120,000
  Heat recovery equipment: $25,000
  Installation:            $35,000
  Electrical connection:   $15,000
  Gas connection:          $8,000
  Engineering/permits:     $12,000
  ──────────────────────────────────
  TOTAL:                   $215,000

  Cost per kW: $215,000 ÷ 80 = $2,688/kW

Annual Operating Costs:
────────────────────────────────────────────────────────────────
  Fuel (natural gas):      $74,880
  Maintenance contract:    $9,600
  Oil changes (quarterly): $1,200
  Grid connection fee:     $600
  ──────────────────────────────────
  TOTAL:                   $86,280/year

Annual Value:
────────────────────────────────────────────────────────────────
  Electricity savings:     $89,600
  Heat savings:            $43,140
  Demand charge reduction: $8,500
  ──────────────────────────────────
  TOTAL:                   $141,240/year

NET ANNUAL BENEFIT: $54,960/year

Financial Metrics:
────────────────────────────────────────────────────────────────
  Simple payback: $215,000 ÷ $54,960 = 3.9 years
  10-year NPV (5% discount): $209,340
  IRR: 25.1%
  Benefit-cost ratio: 2.5:1

Sensitivity Analysis:
────────────────────────────────────────────────────────────────

Electric Rate Impact:
  At $0.10/kWh: Payback = 6.8 years
  At $0.14/kWh: Payback = 3.9 years (base case)
  At $0.18/kWh: Payback = 2.8 years

Natural Gas Price Impact:
  At $0.80/therm: Payback = 3.2 years
  At $1.20/therm: Payback = 3.9 years (base case)
  At $1.60/therm: Payback = 4.9 years

Key Insight: CHP favors high electricity/low gas price ratio
  "Spark spread" = Electric price - (Gas price ÷ CHP efficiency)
```

---

## 9.4 Integration Strategies

### Heat Recovery Design

```
CHP HEAT RECOVERY CONFIGURATION
═══════════════════════════════════════════════════════════════════

Heat Sources from Engine:

1. Jacket Water (40% of heat)
   Temperature: 180-200°F
   Flow: 50-100 GPM
   Best for: Radiant floor heating, domestic hot water

2. Exhaust Gas (50% of heat)
   Temperature: 900-1200°F (before recovery)
   Best for: Steam generation, high-temp processes

3. Oil Cooler (10% of heat)
   Temperature: 160-180°F
   Best for: Low-grade heat applications

Typical Recovery System:
═══════════════════════════════════════════════════════════════════

                ┌──────────────┐
                │   CHP        │
                │   ENGINE     │
                └──────────────┘
                   │        │
        Jacket ────┘        └──── Exhaust
        water                     gas
          │                         │
          ▼                         ▼
    ┌──────────┐            ┌──────────────┐
    │  Heat    │            │  Exhaust     │
    │Exchanger │            │  Heat        │
    │          │            │  Exchanger   │
    └────┬─────┘            └──────┬───────┘
         │                         │
         └──────────┬──────────────┘
                    │
                    ▼
           ┌─────────────────┐
           │ Hot Water        │
           │ Storage Tank     │
           │ (1,000 gal)      │
           └─────────┬────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
    ┌────────┐              ┌──────────┐
    │Radiant │              │ Backup   │
    │Heating │              │ Boiler   │
    └────────┘              └──────────┘

Control Strategy:
  • CHP runs continuously (baseload)
  • Storage tank buffers heat production/use mismatch
  • Backup boiler covers peaks and CHP downtime
  • Summer: Heat to absorption chiller OR dump to radiator
```

---

## 9.5 Alternative Fuels

### Biogas CHP

```
BIOGAS-POWERED CHP
═══════════════════════════════════════════════════════════════════

Source: Anaerobic digestion of organic waste
  Fish waste, plant waste, food scraps, manure

Biogas Composition:
  Methane (CH₄): 55-70%
  CO₂: 30-45%
  H₂S, H₂O, other: <5%

Energy Content: 600-700 Btu/cu ft (vs. 1,000 for natural gas)

Requirements for CHP Use:
  ✓ Clean to <100 ppm H₂S (corrosive)
  ✓ Remove moisture (prevents freezing)
  ✓ Regulate pressure (5-7" water column)
  ✓ May need CO₂ removal for engines (optional)

Example: Integrated Aquaponics + Anaerobic Digester
────────────────────────────────────────────────────────────────

Fish production: 50,000 lb/year
Fish waste: 5,000 lb/year (10%)
Plant waste: 10,000 lb/year

Biogas Production:
  Organic loading: 15,000 lb/year
  Yield: 10 cu ft/lb (typical)
  Total: 150,000 cu ft biogas/year
  Energy: 150,000 × 650 Btu = 97.5 MMBtu/year

CHP Application:
  Small microturbine: 10 kW electric
  Biogas consumption: 97.5 MMBtu ÷ (8,760 hrs × 0.28 eff)
    = Check if sufficient for continuous operation
  Electricity: 10 kW × 8,760 = 87,600 kWh/year
  Heat: 10 × 1.8 × 8,760 = 157,680 kWh thermal

Economics:
────────────────────────────────────────────────────────────────
  System cost (small scale): $85,000
  Digester cost: $45,000
  Total: $130,000

  Electricity value: 87,600 × $0.14 = $12,264/year
  Heat value: 157,680 × 3,412 ÷ 29,300 ÷ $1.20 = $22,000/year
  Avoided waste disposal: $3,000/year
  Total benefit: $37,264/year

  Payback: $130,000 ÷ $37,264 = 3.5 years

  Plus: Nutrient-rich digestate for crops, carbon credits
```

---

## 9.6 Regulatory and Interconnection

### Grid Connection Requirements

```
INTERCONNECTION CONSIDERATIONS
═══════════════════════════════════════════════════════════════════

Requirements (typical):
  ✓ Utility approval/interconnection agreement
  ✓ IEEE 1547 compliant inverter/controls
  ✓ Anti-islanding protection
  ✓ Automatic disconnect on grid failure
  ✓ Permits (electrical, building, environmental)
  ✓ Liability insurance

Operating Modes:

1. Grid-Parallel (most common)
   • CHP runs, exports excess to grid (if allowed)
   • Imports from grid when CHP insufficient
   • CHP shuts down if grid fails (safety)

2. Grid-Independent (with transfer switch)
   • CHP can run during outage
   • Powers critical loads only
   • Manual or automatic transfer

3. Off-Grid (island mode)
   • CHP + battery storage
   • No utility connection
   • Requires sophisticated controls
   • Higher cost, lower reliability

Demand Charge Considerations:
────────────────────────────────────────────────────────────────
  CHP reduces demand charges IF properly sized

  Scenario: 150 kW peak, 80 kW CHP
    New peak: 150 - 80 = 70 kW
    Demand charge: $18/kW
    Monthly savings: (150-70) × $18 = $1,440
    Annual: $17,280

  BUT: If CHP down during peak event, savings lost!
  Solution: Maintain high reliability (>95% uptime)
```

---

## 9.7 Maintenance Requirements

```
CHP MAINTENANCE PROGRAM
═══════════════════════════════════════════════════════════════════

Reciprocating Engine Maintenance:

Every 500 hours (~monthly at 91% runtime):
  □ Oil and filter change
  □ Visual inspection
  □ Check fluid levels
  □ Test sensors

Every 2,000 hours (quarterly):
  □ Air filter replacement
  □ Fuel filter replacement
  □ Coolant test
  □ Battery check

Every 8,000 hours (annually):
  □ Spark plug replacement
  □ Valve adjustment
  □ Comprehensive inspection
  □ Heat exchanger cleaning
  □ Controls calibration

Every 40,000 hours (5 years):
  □ Major overhaul
  □ Piston rings, bearings
  □ Turbocharger service
  □ Generator inspection

Cost Structure:
────────────────────────────────────────────────────────────────
  Monthly maintenance: $800
  Annual major service: $4,500
  5-year overhaul: $25,000

  Annual budget: $0.015-0.020/kWh generated
  For 640,000 kWh: $9,600-12,800/year

Service Options:
  A) Full-service contract: Covers everything ($0.020/kWh)
  B) Parts + labor contract: Owner monitors ($0.018/kWh)
  C) DIY maintenance: Buy parts, do work ($0.012/kWh)

Recommendation: Full-service contract (peace of mind, warranty)
```

---

## 9.8 Case Study: CHP Implementation

```
GREENHOUSE CHP PROJECT
═══════════════════════════════════════════════════════════════════

Facility: 20,000 sq ft greenhouse, tomatoes
Location: Midwest
Loads:
  Electric: 120 kW avg, 180 kW peak
  Heating: 1,200,000 Btu/hr design, 8-month season

System Selected: 100 kW natural gas CHP

First-Year Results:
────────────────────────────────────────────────────────────────
  Runtime: 8,320 hours (95% availability)
  Electricity generated: 832,000 kWh
  Heat generated: 3,996 MMBtu
  Natural gas consumed: 82,000 therms

Financial Performance:
────────────────────────────────────────────────────────────────
  Electricity savings: $116,480
  Heat savings: $56,340
  Demand charge savings: $18,720
  Total value: $191,540

  Operating costs:
    Fuel: $98,400
    Maintenance: $12,480
    Total: $110,880

  Net annual benefit: $80,660

  System cost: $250,000
  Actual payback: 3.1 years

Lessons Learned:
────────────────────────────────────────────────────────────────
  ✓ Size conservatively (100 kW vs. 120 kW avg load)
  ✓ Invest in quality maintenance (prevented failures)
  ✓ Monitor performance daily (catch issues early)
  ✓ Integrate heat recovery well (captured 90% of heat)
  ✓ Have backup plan (grid + boiler for CHP downtime)

3-Year Update:
  Cumulative savings: $248,000
  Issues: One exhaust manifold replacement ($8,500)
  Overall: Meeting expectations, positive NPV
```

---

## Key Takeaways

1. **CHP is highly efficient** - 70-90% total efficiency vs. 45% separate
2. **Size for thermal load** - Heat drives economics, not electricity
3. **Good for 24/7 operations** - CEA facilities are ideal candidates
4. **Payback typically 3-7 years** - Depends on spark spread
5. **Maintenance is critical** - Budget $0.015-0.020/kWh
6. **Biogas integration possible** - Adds waste-to-energy benefits
7. **Best with high heat loads** - Year-round heating demand ideal

---

## Practice Exercise

Evaluate CHP for a facility:
1. Analyze electrical and thermal loads
2. Determine appropriate CHP size
3. Calculate expected production
4. Estimate capital and operating costs
5. Calculate ROI and payback
6. Recommend implementation or alternatives

---

**Next Module**: Module 10 - Energy Storage

---

*Course 305: Energy Systems for CEA | Module 9 | EcoFusion Academy*
