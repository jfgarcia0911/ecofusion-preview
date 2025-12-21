# Module 6: Building Envelope Optimization

## Learning Objectives

By the end of this module, you will be able to:
- Assess building envelope thermal performance
- Identify and seal air leaks
- Select optimal glazing and insulation
- Implement thermal curtains and screens
- Calculate ROI for envelope improvements

---

## 6.1 Building Envelope Fundamentals

### Heat Transfer Mechanisms

```
╔══════════════════════════════════════════════════════════════════╗
║              HEAT LOSS PATHWAYS IN CEA FACILITIES                ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  GREENHOUSE (typical distribution)                               ║
║  ═══════════════════════════════                                 ║
║    Glazing conduction    ████████████████████████░░ 60-70%      ║
║    Infiltration         ████████████░░░░░░░░░░░░░░ 20-30%      ║
║    Floor/foundation     ████░░░░░░░░░░░░░░░░░░░░░░  5-10%      ║
║    Vents (when open)    ██░░░░░░░░░░░░░░░░░░░░░░░░  3-5%       ║
║                                                                  ║
║  INSULATED STRUCTURE                                             ║
║  ════════════════════                                            ║
║    Walls/roof           ████████████████████░░░░░░ 40-50%      ║
║    Infiltration         ████████████████░░░░░░░░░░ 30-40%      ║
║    Windows/doors        ████████░░░░░░░░░░░░░░░░░░ 15-20%      ║
║    Floor                ████░░░░░░░░░░░░░░░░░░░░░░  8-12%      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### R-Values and U-Values

```
INSULATION VALUE REFERENCE
═══════════════════════════════════════════════════════════════════

R-Value = Resistance to heat flow (higher is better)
U-Value = Heat transfer coefficient = 1 ÷ R-Value (lower is better)

Units: R-Value (sq ft-°F-hr/Btu), U-Value (Btu/hr-sq ft-°F)

Material                          R-Value    U-Value
─────────────────────────────────────────────────────────────────
AIR SPACES
  Dead air space (3.5")           1.0        1.00
  Moving air (infiltration)       0.2        5.00

GLAZING SYSTEMS
  Single glass                    0.88       1.13
  Double glass (1/4" air)         1.69       0.59
  Double glass (1/2" air)         2.08       0.48
  Double glass (argon fill)       2.27       0.44
  Triple glass                    3.23       0.31
  Single poly film                0.87       1.15
  Double poly (inflated)          1.43       0.70
  Double poly + curtain (night)   2.86       0.35
  Polycarbonate 8mm              1.61       0.62
  Polycarbonate 16mm             2.50       0.40

INSULATION MATERIALS (per inch)
  Fiberglass batts                3.14       -
  Spray foam (closed cell)        6.25       -
  Rigid foam (polyiso)            6.50       -
  Mineral wool                    3.33       -

WALL ASSEMBLIES (typical)
  2×4 wall, R-13 insulation       13         0.077
  2×6 wall, R-20 insulation       20         0.050
  2×6 wall, R-30 insulation       30         0.033
  Insulated concrete (6")         15         0.067
```

---

## 6.2 Air Sealing Strategies

### Infiltration Impact

```
AIR LEAKAGE ANALYSIS
═══════════════════════════════════════════════════════════════════

Greenhouse: 10,000 sq ft × 12 ft high = 120,000 cu ft

Air Change Rate (ACH) Impact:

ACH    CFM      Heat Loss      Annual Cost
       Leakage  (at 50°F ΔT)   (4,320 hrs, $1.20/therm)
─────────────────────────────────────────────────────────────────
0.5    1,000    54,000 Btu/hr  $3,498/year
1.0    2,000    108,000        $6,996
1.5    3,000    162,000        $10,494
2.0    4,000    216,000        $13,992

Formula: Heat Loss = CFM × 1.08 × ΔT (Btu/hr)

Energy Cost = (Heat Loss × Hours × Therms/Btu × $/therm) ÷ Efficiency

Typical ACH by condition:
  New, tight construction:     0.5-0.8 ACH
  Average maintenance:         1.0-1.5 ACH
  Poor maintenance:            1.5-3.0 ACH
  Old, leaky:                  2.0-5.0 ACH

IMPROVEMENT OPPORTUNITY
───────────────────────────────────────────────────────────────────

Reduce from 2.0 ACH to 0.8 ACH:
  Current cost: $13,992/year
  Improved: $5,597/year
  Savings: $8,395/year (60% reduction!)

Air sealing investment: $4,500
Payback: 0.5 years (6 months)
```

### Common Leak Points

```
AIR LEAK PRIORITY AREAS
═══════════════════════════════════════════════════════════════════

High Priority (seal first):
  ✓ Door perimeters and thresholds
  ✓ Ventilation fan shutters
  ✓ Poly attachment points (greenhouse)
  ✓ Roof-to-wall connections
  ✓ Penetrations (electrical, plumbing)
  ✓ Foundation-to-wall joints

Medium Priority:
  ✓ Window frames
  ✓ Louver vents
  ✓ Gable end joints
  ✓ Equipment openings

Lower Priority:
  ✓ Fixture mounting holes
  ✓ Minor cracks in glazing
  ✓ Control panel gaps

SEALING METHODS
───────────────────────────────────────────────────────────────────

Location              Method                Cost/ft    Lifespan
─────────────────────────────────────────────────────────────────
Doors                Weather stripping     $2-5       3-5 yrs
Door bottoms         Door sweeps           $15-30     5-7 yrs
Windows              Caulk/foam tape       $1-3       5-10 yrs
Poly attachment      Poly tape/wiggle wire $0.50-2    2-4 yrs
Penetrations         Expanding foam        $0.25-1    10+ yrs
Foundation           Caulk/sealant         $1-3       10+ yrs
Vents                Magnetic seals        $5-15      7-10 yrs
```

### Blower Door Testing

```
INFILTRATION MEASUREMENT
═══════════════════════════════════════════════════════════════════

Blower Door Test Process:
  1. Install calibrated fan in doorway
  2. Seal all intentional openings
  3. Depressurize building to 50 Pascals
  4. Measure CFM required to maintain pressure
  5. Calculate ACH50 (air changes per hour at 50 Pa)

Interpretation:
  ACH50 < 3.0:  Tight building (excellent)
  ACH50 3-7:    Average building
  ACH50 7-15:   Leaky building (needs work)
  ACH50 > 15:   Very leaky (priority repairs)

Convert ACH50 to Natural ACH:
  Natural ACH ≈ ACH50 ÷ 20 (rule of thumb)

Example Test Results:
  Building volume: 120,000 cu ft
  CFM at 50 Pa: 6,000 CFM
  ACH50 = (6,000 × 60) ÷ 120,000 = 3.0 ACH50
  Natural ACH ≈ 3.0 ÷ 20 = 0.15 ACH (very tight!)

Professional blower door test: $300-600
DIY rental equipment: $50-100/day
Thermal imaging (with test): +$200-400

ROI: One test can identify $5,000-20,000 in annual savings
```

---

## 6.3 Glazing Optimization

### Single vs. Double vs. Triple Glazing

```
GLAZING COMPARISON ANALYSIS
═══════════════════════════════════════════════════════════════════

10,000 sq ft greenhouse, 6-month heating season

SINGLE POLY (U = 1.15)
───────────────────────────────────────────────────────────────────
Heat loss: 10,000 × 1.15 × 50°F × 4,320 hrs = 2,484 MMBtu
Natural gas (80% efficient): 31,050 therms
Cost: $37,260/year
Material cost: $0.25/sq ft = $2,500
Lifespan: 4 years

DOUBLE POLY (U = 0.70)
───────────────────────────────────────────────────────────────────
Heat loss: 10,000 × 0.70 × 50 × 4,320 = 1,512 MMBtu
Natural gas: 18,900 therms
Cost: $22,680/year
Savings vs. single: $14,580/year (39%)
Material cost: $0.50/sq ft = $5,000
Incremental cost: $2,500
Payback: 2 months!
Lifespan: 4 years

POLYCARBONATE 16mm (U = 0.40)
───────────────────────────────────────────────────────────────────
Heat loss: 10,000 × 0.40 × 50 × 4,320 = 864 MMBtu
Natural gas: 10,800 therms
Cost: $12,960/year
Savings vs. single: $24,300/year (65%)
Savings vs. double: $9,720/year (43%)
Material cost: $4.00/sq ft = $40,000
Incremental vs. double: $35,000
Payback vs. double: 3.6 years
Lifespan: 20+ years

RECOMMENDATION MATRIX
───────────────────────────────────────────────────────────────────

Climate             Best Choice              ROI
─────────────────────────────────────────────────────────────────
Mild (minimal heat) Single poly              Good
Moderate            Double poly              Excellent
Cold (<5,000 HDD)   Double poly or PC 8mm    Very good
Very cold (>5,000)  PC 16mm or triple        Good (long-term)
Year-round heat     Rigid insulated panels   Case-by-case

HDD = Heating Degree Days
```

### Thermal Curtains and Screens

```
CURTAIN SYSTEM ANALYSIS
═══════════════════════════════════════════════════════════════════

Types of Curtains:

Type              Purpose          Energy    Light    Cost
                                  Savings   Trans.   ($/sq ft)
─────────────────────────────────────────────────────────────────
Thermal/energy   Heat retention   40-60%    0%       $2.00-3.50
Shade            Light reduction  10-30%    varies   $1.50-2.50
Blackout         Photoperiod      20-40%    0%       $2.50-4.00
Combination      Both             40-60%    0-50%    $3.00-5.00

Deployment Schedule:
  • Winter nights: Maximum thermal savings
  • Summer days: Shading reduces cooling
  • Year-round: Automated based on temp/light

EXAMPLE: 10,000 sq ft Double Poly Greenhouse
───────────────────────────────────────────────────────────────────

Without Curtain:
  Night U-value: 0.70
  Heat loss (14 hrs/night, 180 nights, 50°F ΔT):
    10,000 × 0.70 × 50 × 2,520 hrs = 882 MMBtu
  Cost: 11,025 therms × $1.20 = $13,230/year

With Thermal Curtain (deployed at night):
  Night U-value: 0.35 (50% improvement)
  Heat loss: 441 MMBtu
  Cost: $6,615/year
  Savings: $6,615/year (50%)

Curtain System Investment:
  Material: $2.50/sq ft × 10,000 = $25,000
  Installation: $7,500
  Automation: $5,000
  Total: $37,500

  Payback: $37,500 ÷ $6,615 = 5.7 years

Additional Summer Benefits:
  Shading reduces cooling load
  Value: ~$1,500/year
  Adjusted payback: 4.6 years

Maintenance:
  Annual cleaning: $500
  Motor/drive service: $200/year
  Fabric replacement: Every 10-15 years ($25,000)

Net 20-year value (5% discount): $42,850
```

---

## 6.4 Foundation and Floor Insulation

### Ground Heat Loss

```
FOUNDATION HEAT LOSS ANALYSIS
═══════════════════════════════════════════════════════════════════

Floor area: 10,000 sq ft
Perimeter: 400 linear ft (100 ft × 100 ft building)
Ground temperature: 50°F
Indoor temperature: 70°F
ΔT: 20°F

Uninsulated Slab:
  Center heat loss (U ≈ 0.10): Minimal
  Edge heat loss (U ≈ 0.50 for 4 ft from edge): Significant

  Edge area: 400 ft × 4 ft = 1,600 sq ft
  Edge loss: 1,600 × 0.50 × 20 × 8,760 hrs = 140.2 MMBtu
  Cost: 1,752 therms × $1.20 = $2,103/year

Insulated Perimeter (R-10, 4 ft depth/width):
  Edge U-value: 0.15
  Edge loss: 1,600 × 0.15 × 20 × 8,760 = 42.0 MMBtu
  Cost: $631/year
  Savings: $1,472/year (70%)

Insulation Cost:
  R-10 rigid foam: $1.00/sq ft × 1,600 sq ft = $1,600
  Installation: $1,200
  Drainage consideration: $800
  Total: $3,600

  Payback: 2.4 years

Full Under-Slab Insulation (R-10):
  Additional area: 8,400 sq ft
  Additional savings: ~$800/year
  Cost: $8,400 material + $5,000 install = $13,400
  Incremental payback: 16.8 years (not recommended)

RECOMMENDATION: Perimeter only for existing buildings
                Full insulation for new construction
```

### Condensation Management

```
MOISTURE CONTROL IN ENVELOPES
═══════════════════════════════════════════════════════════════════

Problem: Warm, moist indoor air contacts cold surfaces → condensation

Critical Temperature: Dew Point
  Indoor: 70°F, 70% RH → Dew point: 59°F
  Any surface below 59°F will condense water

Surface Temperatures (20°F outdoor, 70°F indoor):

Glazing Type          Interior Surface Temp    Condensation?
───────────────────────────────────────────────────────────────
Single glass          24°F                     YES (heavy)
Double glass          49°F                     YES (moderate)
Triple glass          57°F                     Minimal
Double + curtain      62°F                     NO

Prevention Strategies:
  1. Improve glazing (reduce cold surfaces)
  2. Reduce indoor humidity (dehumidification)
  3. Increase air circulation (prevent stagnant air)
  4. Perimeter heating (warm cold surfaces)

Energy Impact:
  Condensation → dripping → water damage → envelope degradation
  → increased air leakage → higher energy costs

  Preventing condensation protects energy investment!
```

---

## 6.5 Doors and Vestibules

### Door Infiltration

```
DOOR HEAT LOSS ANALYSIS
═══════════════════════════════════════════════════════════════════

Standard 3 ft × 7 ft Door:
  Area: 21 sq ft
  Perimeter: 20 linear ft

CONDUCTION LOSSES
───────────────────────────────────────────────────────────────────

Door Type            U-Value    Heat Loss (50°F ΔT)
─────────────────────────────────────────────────────────────────
Hollow metal         0.60       630 Btu/hr
Insulated metal      0.20       210 Btu/hr
Solid wood           0.40       420 Btu/hr
Fiberglass insulated 0.15       158 Btu/hr

Annual Impact (door used 500 hrs/year open equivalent):
  Poor door (U=0.60): 315,000 Btu = 3.9 therms → $4.73/year
  Good door (U=0.15): 79,000 Btu = 1.0 therm → $1.18/year

  Not significant compared to infiltration...

INFILTRATION LOSSES (the real problem!)
───────────────────────────────────────────────────────────────────

Each door opening:
  Duration: 30 seconds
  Volume exchanged: ~300 cu ft (3× door volume)
  Heat loss: 300 cu ft × 0.018 Btu/cu ft-°F × 50°F = 270 Btu

Annual door traffic: 2,000 openings/year
  Heat loss: 2,000 × 270 = 540,000 Btu = 6.75 therms
  Cost: $8.10/year per door

10 doors in facility: $81/year (still small)

BUT: Poor door seals = continuous infiltration
  Gap: 1/8" × 20 ft perimeter = 2.5 sq in = 0.017 sq ft
  Infiltration: ~25 CFM
  Heat loss: 25 × 1.08 × 50 = 1,350 Btu/hr
  Annual (8,760 hrs): 11.8 MMBtu = 148 therms
  Cost per door: $178/year

10 poor doors: $1,780/year!

Weather stripping cost: $30/door × 10 = $300
Payback: 2 months
```

### Vestibule Benefits

```
VESTIBULE / AIRLOCK ANALYSIS
═══════════════════════════════════════════════════════════════════

Scenario: Main entrance, 50 entries/day, year-round operation

Without Vestibule (direct entry):
  Each entry: 500 cu ft air exchange
  Daily: 50 × 500 = 25,000 cu ft
  Heat loss: 25,000 × 0.018 × 50°F = 22,500 Btu/day
  Annual (heating season 180 days): 4.05 MMBtu
  Cost: 51 therms × $1.20 = $61/year (winter)

  Plus summer cooling loss: ~$45/year
  Total: $106/year

With Vestibule (reduces exchange by 70%):
  Air exchange: 25,000 × 0.30 = 7,500 cu ft/day
  Annual: 1.22 MMBtu
  Cost: $18/year (winter) + $14 (summer) = $32/year

  Savings: $74/year per entrance

Vestibule Construction:
  6 ft × 6 ft vestibule
  Materials: $2,500
  Labor: $1,500
  Total: $4,000

  Payback: 54 years (doesn't pay on energy alone!)

BUT consider:
  ✓ Dirt/debris control (reduced maintenance)
  ✓ Professional appearance
  ✓ Code compliance (some jurisdictions)
  ✓ Employee comfort
  ✓ Moisture control

Best for: High-traffic entrances in extreme climates
Skip for: Low-traffic doors, mild climates
```

---

## 6.6 Retrofitting Existing Structures

### Envelope Upgrade Priority

```
COST-EFFECTIVE IMPROVEMENT SEQUENCE
═══════════════════════════════════════════════════════════════════

Priority  Improvement            Typical     Typical   Payback
                                Savings     Cost
─────────────────────────────────────────────────────────────────
1         Air sealing           15-30%      $        <1 year
2         Weather stripping     5-10%       $        <1 year
3         Thermal curtains      30-50%      $$       3-6 years
4         Double glazing        30-40%      $$-$$$   2-5 years
5         Perimeter insulation  8-15%       $$       2-4 years
6         Door upgrades         3-8%        $-$$     3-7 years
7         Triple glazing        10-20%*     $$$$     8-15 years
8         Wall insulation       15-25%**    $$$      10-20 years

* Over double glazing
** If walls are uninsulated; less if upgrading existing

PHASED APPROACH EXAMPLE
───────────────────────────────────────────────────────────────────

Greenhouse: 8,000 sq ft, annual heating $45,000

Year 1: Quick Wins ($6,000 investment)
  • Air sealing: $3,500
  • Weather stripping: $800
  • Door sweeps: $500
  • Poly repairs: $1,200
  Savings: $9,000/year (20%)
  Payback: 0.7 years

Year 2: Major Thermal ($32,000 investment)
  • Thermal curtain system: $32,000
  Savings: $18,000/year (40% of original)
  Payback: 1.8 years (on incremental)

Year 3: Glazing ($15,000 investment)
  • Upgrade to polycarbonate (partial): $15,000
  Savings: $5,400/year (12% of original)
  Payback: 2.8 years

Cumulative Results:
  Total investment: $53,000
  Total annual savings: $32,400 (72% reduction!)
  Remaining cost: $12,600/year
  Overall payback: 1.6 years
```

### Partial Retrofits

```
SELECTIVE GLAZING UPGRADES
═══════════════════════════════════════════════════════════════════

Strategy: Upgrade only highest-loss areas

8,000 sq ft greenhouse analysis:
  North wall: 2,000 sq ft (coldest, least sun)
  East/West walls: 3,000 sq ft each
  South wall: 2,000 sq ft (warmest, most sun)
  Roof: 8,000 sq ft

Heat Loss Distribution (50°F ΔT, U=0.70):
  North: 2,000 × 0.70 × 50 = 70,000 Btu/hr (24%)
  East/West: 3,000 × 0.70 × 50 × 2 = 210,000 (48%)
  South: 2,000 × 0.70 × 50 = 70,000 (16%)
  Roof: Offset by solar gain during day

Priority Upgrade: North wall to PC 16mm (U=0.40)
  Current loss: 70,000 Btu/hr
  New loss: 2,000 × 0.40 × 50 = 40,000 Btu/hr
  Savings: 30,000 Btu/hr

  Annual: 30,000 × 4,320 hrs = 129.6 MMBtu
  Natural gas: 1,620 therms
  Value: $1,944/year

  Cost: 2,000 sq ft × $4/sq ft = $8,000
  Payback: 4.1 years

  Result: 24% of heat loss reduced with 25% of full upgrade cost

Next Priority: East/West walls
  Would save $3,888/year
  Cost: $12,000
  Payback: 3.1 years
```

---

## 6.7 New Construction Best Practices

### Optimal Design Strategies

```
ENERGY-EFFICIENT ENVELOPE DESIGN
═══════════════════════════════════════════════════════════════════

Greenhouse Design Principles:

1. ORIENTATION
   • Long axis east-west (maximizes winter sun)
   • South-facing roof slope (optimal solar gain)
   • North wall can be insulated (minimal light loss)

2. GLAZING SELECTION
   Cold climate (>6,000 HDD):
     Roof: Double poly or PC 8mm
     North: Insulated wall (R-20+) or PC 16mm
     East/West: Double poly or PC 8mm
     South: Double glass or PC 8mm

   Moderate climate (3,000-6,000 HDD):
     Roof: Double poly
     All walls: Double poly
     Consider: Thermal curtain system

   Warm climate (<3,000 HDD):
     Roof: Single poly with shade system
     Walls: Single or double poly
     Focus: Cooling and ventilation

3. AIR SEALING
   • Design continuous air barrier
   • Detail all penetrations
   • Specify high-quality seals
   • Plan for maintenance access
   Target: <1.0 ACH natural infiltration

4. INSULATION
   • Perimeter foundation: R-10 minimum
   • North wall: R-20+ (if opaque)
   • Knee walls: R-15 minimum
   • End walls: R-13 minimum

5. THERMAL MASS
   • Concrete floors (4"+ thick)
   • Water barrels (if space allows)
   • Benefits: Temperature buffering, night heat release

INCREMENTAL COST VS. VALUE
───────────────────────────────────────────────────────────────────

8,000 sq ft greenhouse new construction:

Baseline (code minimum):
  Single poly, minimal insulation
  Construction cost: $160,000
  Annual energy: $42,000

Optimized Envelope (+$35,000):
  Double poly, R-20 north wall, R-10 perimeter, air sealing
  Construction cost: $195,000
  Annual energy: $21,000

  Savings: $21,000/year
  Payback: 1.7 years
  30-year NPV: $287,500

Key Insight: Better envelope pays for itself many times over!
```

---

## 6.8 Case Study: Envelope Transformation

### Project Profile

**Sunset Valley Greenhouse**
- Size: 12,000 sq ft
- Age: 15 years
- Current: Single poly, poor sealing
- Location: Cold climate (7,000 HDD)

### Initial Condition

```
EXISTING ENVELOPE PERFORMANCE
═══════════════════════════════════════════════════════════════════

Glazing: Single poly (U = 1.15)
Infiltration: 2.5 ACH (very leaky)
Foundation: Uninsulated
Doors: Poor seals, no weather stripping

Annual Heating Cost: $68,500
  Breakdown:
    Glazing conduction: $41,100 (60%)
    Infiltration: $20,550 (30%)
    Floor/foundation: $6,850 (10%)

Energy intensity: $5.71/sq ft/year (very high)
```

### Comprehensive Retrofit

```
ENVELOPE UPGRADE PACKAGE
═══════════════════════════════════════════════════════════════════

Phase 1: Air Sealing and Weatherization
  • Complete air sealing program: $4,200
  • Weather stripping all doors: $850
  • Repair/replace poly attachment: $2,100
  • Seal all penetrations: $1,200
  Total Phase 1: $8,350

  Result: Reduce infiltration from 2.5 to 0.9 ACH
  Savings: $13,130/year (64% of infiltration loss)
  Payback: 0.6 years

Phase 2: Thermal Curtain System
  • Automated thermal curtain: $42,000
  Coverage: 12,000 sq ft

  Result: Night U-value from 1.15 to 0.45 (60% improvement)
  Savings: $24,660/year
  Payback: 1.7 years

Phase 3: North Wall Upgrade
  • Convert 2,400 sq ft north wall to insulated (R-25): $18,500

  Result: Eliminate 2,400 sq ft × 1.15 U = major loss area
  Savings: $8,220/year
  Payback: 2.3 years

Phase 4: Perimeter Insulation
  • R-10 perimeter insulation (480 LF): $6,400

  Result: Reduce foundation loss by 70%
  Savings: $4,795/year
  Payback: 1.3 years

───────────────────────────────────────────────────────────────────
TOTAL PROJECT RESULTS
───────────────────────────────────────────────────────────────────

Total Investment: $75,250
Annual Savings: $50,805 (74% reduction!)
Simple Payback: 1.5 years
New annual heating: $17,695
Energy intensity: $1.47/sq ft/year

10-Year NPV (5% discount): $317,280
20-Year NPV: $536,950

Non-Energy Benefits:
  ✓ Better temperature control
  ✓ More uniform environment
  ✓ Reduced crop stress
  ✓ Extended growing season
  ✓ Higher yields (estimated +15%)
  ✓ Improved marketability
```

---

## Key Takeaways

1. **Air sealing is the best ROI** - Often pays back in months
2. **Thermal curtains are powerful** - 40-60% heating savings when deployed
3. **Foundation insulation matters** - Especially perimeter in cold climates
4. **Double glazing minimum** - Almost always justified economically
5. **Design holistically** - Envelope interacts with HVAC and lighting
6. **Invest at construction** - Much cheaper than retrofit
7. **Phase strategically** - Quick wins first, major upgrades when ready

---

## Practice Exercise

Evaluate a building envelope:
1. Calculate current heat loss (glazing + infiltration + foundation)
2. Estimate current energy cost
3. Identify top 3 improvement opportunities
4. Calculate savings and payback for each
5. Develop phased implementation plan

---

**Next Module**: Module 7 - Solar PV Systems

---

*Course 305: Energy Systems for CEA | Module 6 | EcoFusion Academy*
