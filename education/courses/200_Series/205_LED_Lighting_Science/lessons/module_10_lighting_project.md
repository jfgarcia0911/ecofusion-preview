# Module 10: Lighting Project

**Course:** 205 - LED Lighting Science
**Duration:** 120 minutes
**Level:** Intermediate

## Introduction

This capstone module integrates all concepts from the course into a comprehensive lighting system design project. You'll work through a realistic scenario, applying technical knowledge and decision-making skills to create a complete lighting solution including specifications, layouts, calculations, and economic analysis.

## Learning Objectives

By the end of this module, you will be able to:

1. Analyze facility requirements and constraints for lighting design
2. Develop complete lighting specifications and layout drawings
3. Calculate electrical, structural, and economic requirements
4. Create installation-ready documentation
5. Present and justify design decisions
6. Evaluate alternative approaches and trade-offs

## Project Scenario

```
PROJECT BRIEF
=============

Client: Urban Greens Co.
Location: Portland, OR (45.5°N)
Facility Type: Vertical farm expansion

REQUIREMENTS:
┌────────────────────────────────────────────────┐
│ Facility Dimensions: 5,000 sq ft floor space   │
│ Configuration: 4 tiers per rack                 │
│ Growing Area: 20,000 sq ft total (all tiers)   │
│ Tier Height: 24 inches                         │
│ Ceiling Height: 14 feet                        │
│                                                │
│ Primary Crop: Lettuce (various varieties)      │
│ Secondary: Herbs (basil, cilantro)             │
│                                                │
│ Production Goals:                              │
│ - Lettuce: 28-day cycle, continuous harvest    │
│ - Target: 1,500 heads/week                     │
│ - Quality: Premium, bolt-free                  │
│                                                │
│ Constraints:                                   │
│ - Budget: $200,000 for lighting system         │
│ - Electrical: 400A, 208V service available     │
│ - Timeline: Install in 6 weeks                 │
│ - Energy: Minimize operating costs             │
└────────────────────────────────────────────────┘
```

## Phase 1: Requirements Analysis

```
STEP 1: Crop Light Requirements
================================

LETTUCE SPECIFICATIONS:
┌────────────────────────────────────┐
│ Optimal DLI: 14-17 mol/m²/d        │
│ Target: 15 mol/m²/d (conservative) │
│                                    │
│ PPFD Range: 200-300 μmol/m²/s      │
│ Photoperiod: 16 hours              │
│ (Avoids bolting in most varieties) │
│                                    │
│ Spectrum Requirements:             │
│ - Blue: 20-25% (compact growth)    │
│ - Green: 25-35% (quality)          │
│ - Red: 40-50% (productivity)       │
│ - Far-Red: <5% (avoid elongation)  │
│                                    │
│ R:B Ratio: 2.0-2.5 (balanced)      │
└────────────────────────────────────┘

BASIL SPECIFICATIONS:
┌────────────────────────────────────┐
│ Optimal DLI: 16-20 mol/m²/d        │
│ Target: 18 mol/m²/d                │
│                                    │
│ PPFD Range: 250-350 μmol/m²/s      │
│ Photoperiod: 16 hours              │
│                                    │
│ Spectrum: Similar to lettuce       │
│ Higher DLI for flavor development  │
└────────────────────────────────────┘

STEP 2: Calculate PPFD Requirements
====================================

For Lettuce (Primary):
Target DLI: 15 mol/m²/d
Photoperiod: 16 hours

Required PPFD:
PPFD = (DLI × 1000) / (Hours × 3.6)
     = (15 × 1000) / (16 × 3.6)
     = 260 μmol/m²/s average at canopy

Design PPFD: 280 μmol/m²/s
(Margin for degradation and uniformity)

For Basil (Secondary - 20% of area):
Target DLI: 18 mol/m²/d
Photoperiod: 16 hours

Required PPFD:
PPFD = (18 × 1000) / (16 × 3.6)
     = 313 μmol/m²/s

Design PPFD: 330 μmol/m²/s

STEP 3: Total PPF Calculation
==============================

Area Allocation:
- Lettuce: 16,000 sq ft (80%)
- Basil: 4,000 sq ft (20%)

Lettuce PPF:
Area: 16,000 sq ft = 1,486 m²
PPFD: 280 μmol/m²/s
Efficiency: 0.85 (15% losses)

PPF = (1,486 × 280) / 0.85
    = 489,365 μmol/s

Basil PPF:
Area: 4,000 sq ft = 372 m²
PPFD: 330 μmol/m²/s
Efficiency: 0.85

PPF = (372 × 330) / 0.85
    = 144,353 μmol/s

TOTAL PPF NEEDED: 633,718 μmol/s
```

## Phase 2: Fixture Selection

```
FIXTURE EVALUATION
==================

Shortlisted Options:

OPTION A: Linear Bar Fixtures
┌────────────────────────────────────┐
│ Manufacturer: AgriLED Solutions    │
│ Model: AB-600-FS                   │
│                                    │
│ Specifications:                    │
│ - PPF: 1,650 μmol/s                │
│ - Power: 600W                      │
│ - Efficacy: 2.75 μmol/J            │
│ - Length: 48 inches                │
│ - Spectrum: Full spectrum white +  │
│   660nm red                        │
│ - Dimming: 0-10V                   │
│ - Warranty: 5 years                │
│ - IP Rating: IP65                  │
│                                    │
│ Pricing:                           │
│ - Unit cost: $420                  │
│ - Quantity discount (>300): $380   │
└────────────────────────────────────┘

OPTION B: Panel Fixtures
┌────────────────────────────────────┐
│ Manufacturer: HortTech LED         │
│ Model: HP-400-PRO                  │
│                                    │
│ Specifications:                    │
│ - PPF: 1,100 μmol/s                │
│ - Power: 400W                      │
│ - Efficacy: 2.75 μmol/J            │
│ - Size: 24" × 24"                  │
│ - Spectrum: Full spectrum          │
│ - Dimming: 0-10V                   │
│ - Warranty: 5 years                │
│ - IP Rating: IP65                  │
│                                    │
│ Pricing:                           │
│ - Unit cost: $350                  │
│ - Quantity discount (>400): $320   │
└────────────────────────────────────┘

OPTION C: High-Output Linear
┌────────────────────────────────────┐
│ Manufacturer: VertiFarm Lighting   │
│ Model: VF-800-MAX                  │
│                                    │
│ Specifications:                    │
│ - PPF: 2,400 μmol/s                │
│ - Power: 800W                      │
│ - Efficacy: 3.0 μmol/J ★           │
│ - Length: 72 inches                │
│ - Spectrum: White + red + far-red  │
│ - Dimming: DALI                    │
│ - Warranty: 7 years                │
│ - IP Rating: IP66                  │
│                                    │
│ Pricing:                           │
│ - Unit cost: $680                  │
│ - Quantity discount (>200): $620   │
└────────────────────────────────────┘

DECISION MATRIX
===============

Criterion         Weight  Opt A  Opt B  Opt C
────────────      ──────  ─────  ─────  ─────
Efficacy          30%     8      8      10
Initial Cost      25%     7      9      6
Flexibility       15%     9      6      7
Warranty          10%     8      8      10
Install Ease      10%     8      9      7
Lead Time         10%     8      8      7
────────────────────────────────────────────
TOTAL SCORE       100%    8.0    8.2    7.9

SELECTED: OPTION B (Panel Fixtures)
Rationale:
✓ Best balance of cost and performance
✓ Easier installation (larger units, fewer connections)
✓ Adequate efficacy (2.75 μmol/J)
✓ Lowest per-fixture cost
✓ Suitable for tier mounting

QUANTITY CALCULATION
====================

Total PPF Required: 633,718 μmol/s
Fixture PPF: 1,100 μmol/s
Base Quantity: 633,718 / 1,100 = 576 fixtures

Add margin for:
- Uneven distribution: +5%
- Future degradation: +5%
- Spares: +2%

Total Order: 576 × 1.12 = 645 fixtures

Per Tier: 645 / 4 tiers = 161 fixtures per tier
```

## Phase 3: Layout Design

```
TIER LAYOUT
===========

Single Tier Dimensions:
- Length: 100 feet
- Width: 50 feet
- Area: 5,000 sq ft per tier

Fixture Coverage:
24" × 24" panel = 4 sq ft footprint
Effective coverage at 18" height: 6 sq ft
(Accounting for overlap and edge effects)

Fixtures per tier: 5,000 / 6 = 833 sq ft ≈ 161 fixtures ✓
(Matches quantity calculation)

LAYOUT PATTERN (Per Tier):

Grid Layout: 13 rows × 13 columns = 169 positions
Use: 161 fixtures (leave corners open for access)

    0'   10'   20'   30'   40'   50'   60'   70'   80'   90'  100'
0'  ┌────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┬────┐
    │    │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │    │
10' ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
    │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │
20' ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
    │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │
30' ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
    │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │
40' ├────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┼────┤
    │    │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │ ☐  │    │
50' └────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┴────┘

☐ = LED Panel Fixture (24" × 24")
Spacing: 7.7 feet (center-to-center)
Mounting: Direct to rack structure
Height: 18 inches above growing surface

PPFD VERIFICATION
=================

Expected PPFD map (from manufacturer data):

    Center Area (80% of tier):
    Average PPFD: 285 μmol/m²/s ✓ (target: 280)

    Edge Area (20% of tier):
    Average PPFD: 245 μmol/m²/s

    Overall Average: 277 μmol/m²/s
    Uniformity: 245/285 = 86% ✓ (target: >80%)

DLI Achieved:
277 μmol/m²/s × 16 hrs × 3.6 / 1000 = 15.9 mol/m²/d ✓
```

## Phase 4: Electrical Design

```
ELECTRICAL LOAD ANALYSIS
========================

Per-Fixture Load:
- Power: 400W
- Voltage: 208V (line-to-line)
- Current: 400W / 208V = 1.92A

Total Facility Load:
- Fixtures: 645 units
- Total power: 645 × 400W = 258 kW
- Total current: 258,000W / 208V = 1,240A

CIRCUIT DESIGN
==============

Circuit Capacity (208V, 20A breaker):
Max load: 20A × 208V × 0.8 = 3,328W
Fixtures per circuit: 3,328W / 400W = 8 fixtures

Circuits Required:
Total: 645 fixtures / 8 per circuit = 81 circuits

Distribution Strategy:
- 4 tiers
- ~20 circuits per tier
- Group by rows for easier troubleshooting

PANEL SCHEDULE (Example - Tier 1)
┌────────────────────────────────────┐
│ Panel: "TIER 1 LIGHTING"           │
│ Main: 100A, 3-phase                │
├────────────────────────────────────┤
│ Ckt 1-2:   Row 1A (8 fixtures) 20A │
│ Ckt 3-4:   Row 1B (8 fixtures) 20A │
│ Ckt 5-6:   Row 2A (8 fixtures) 20A │
│ Ckt 7-8:   Row 2B (8 fixtures) 20A │
│ ...                                │
│ Ckt 39-40: Row 10B (8 fixtures)20A │
│ Spare circuits: 41-48              │
└────────────────────────────────────┘

Feeder Sizing (Per Tier Panel):
Load: 161 fixtures × 400W = 64.4 kW
Current: 64,400W / 208V = 310A
Conductor: 350 kcmil THWN (380A rated)
Conduit: 3" EMT
Breaker: 350A

Main Service Verification:
Available: 400A at 208V = 144 kW
Required: 258 kW
STATUS: INSUFFICIENT ✗

SOLUTION: Service Upgrade Required
New service: 800A, 208V, 3-phase
Cost: ~$35,000 (included in budget)

Alternative: Staged Startup
- Prevent all 645 fixtures from starting simultaneously
- Stagger by tier (30-second intervals)
- Reduces inrush current
- May allow smaller service upgrade (600A)
- Cost savings: ~$15,000

SELECTED: 600A Service Upgrade + Staged Startup
```

## Phase 5: Control System

```
CONTROL ARCHITECTURE
====================

Requirements:
- Zone control (separate lettuce/basil)
- Programmable schedules
- 0-10V dimming capability
- Monitoring and data logging
- Remote access

SYSTEM DESIGN
=============

┌──────────────────────────────────────────┐
│         [Central Controller]             │
│         (Web-based platform)             │
│                   │                      │
│      ┌────────────┼────────────┐        │
│      │            │            │        │
│ [Zone 1-2]   [Zone 3]     [Zone 4]      │
│ Lettuce      Basil        Propagation    │
│ Tiers 1-3    Tier 4       (future)       │
│   │            │            │            │
│ 0-10V        0-10V        0-10V          │
│   │            │            │            │
│ Fixtures    Fixtures    Fixtures         │
│ (485 pcs)   (160 pcs)   (planned)        │
└──────────────────────────────────────────┘

Component Selection:
┌────────────────────────────────────┐
│ Controller: Titan Controls Helios  │
│ - 4 zones (expandable to 32)      │
│ - Web interface                    │
│ - Data logging                     │
│ - API integration                  │
│ - Cost: $2,500                     │
│                                    │
│ Zone Controllers (4):              │
│ - 0-10V dimming output             │
│ - 200A relay capacity              │
│ - Cost: $400 each × 4 = $1,600     │
│                                    │
│ Installation:                      │
│ - Control wiring: 18/2 cable       │
│ - Separate from power (code)       │
│ - Cost: $3,000                     │
│                                    │
│ Total Control System: $7,100       │
└────────────────────────────────────┘

LIGHT SCHEDULE
==============

Lettuce Zones (1-2):
┌────────────────────────────────────┐
│ Time      Intensity  PPFD          │
│ ────      ─────────  ────          │
│ 00:00-06:00   0%     0             │
│ 06:00-06:15  Ramp    0→280         │
│ 06:15-21:45  100%    280           │
│ 21:45-22:00  Ramp    280→0         │
│ 22:00-24:00   0%     0             │
│                                    │
│ Photoperiod: 16 hours              │
│ DLI: 15.9 mol/m²/d                 │
└────────────────────────────────────┘

Basil Zone (3):
┌────────────────────────────────────┐
│ Time      Intensity  PPFD          │
│ ────      ─────────  ────          │
│ 00:00-06:00   0%     0             │
│ 06:00-06:15  Ramp    0→330         │
│ 06:15-21:45  100%    330           │
│ 21:45-22:00  Ramp    330→0         │
│ 22:00-24:00   0%     0             │
│                                    │
│ Photoperiod: 16 hours              │
│ DLI: 19.0 mol/m²/d                 │
└────────────────────────────────────┘

Energy Management Features:
✓ Staged startup (reduce demand charge)
✓ Programmable dimming by crop stage
✓ Remote monitoring and adjustments
✓ Alert notifications (failures, anomalies)
```

## Phase 6: Economic Analysis

```
PROJECT BUDGET
==============

CAPITAL COSTS
┌────────────────────────────────────┐
│ Item                    Cost       │
│ ────────────            ────       │
│ LED Fixtures            $206,400   │
│  (645 × $320)                      │
│                                    │
│ Electrical Service      $ 25,000   │
│  (600A upgrade)                    │
│                                    │
│ Electrical Distribution $ 45,000   │
│  (Panels, circuits, wire)          │
│                                    │
│ Control System          $  7,100   │
│  (Controllers, wiring)             │
│                                    │
│ Mounting Hardware       $  8,000   │
│  (Brackets, fasteners)             │
│                                    │
│ Installation Labor      $ 32,000   │
│  (4 weeks × 2 electricians)        │
│                                    │
│ Commissioning           $  3,000   │
│  (Testing, verification)           │
│                                    │
│ Contingency (10%)       $ 32,650   │
│ ─────────────────────────────────  │
│ TOTAL CAPITAL           $359,150   │
└────────────────────────────────────┘

STATUS: Over budget by $159,150 ✗

VALUE ENGINEERING
=================

Option 1: Reduce Fixtures
- Cut to 580 fixtures (10% reduction)
- Savings: $20,800
- Impact: Reduced uniformity, lower avg PPFD
- Recommendation: NOT ACCEPTABLE

Option 2: Alternative Fixture (Option A)
- Linear bars: $380 each
- Quantity: 384 fixtures needed (higher PPF)
- Cost: 384 × $380 = $145,920
- Savings: $60,480
- Impact: More installation complexity
- Recommendation: CONSIDER

Option 3: Phased Implementation
- Phase 1: Tiers 1-2 (323 fixtures)
- Phase 2: Tiers 3-4 (6 months later)
- Immediate cost: ~$180,000
- Recommendation: BEST OPTION

REVISED BUDGET (Phase 1: Tiers 1-2)
┌────────────────────────────────────┐
│ LED Fixtures (323)      $103,360   │
│ Electrical Service      $ 18,000   │
│ Electrical Distribution $ 25,000   │
│ Control System          $  5,000   │
│ Mounting & Install      $ 20,000   │
│ Commissioning           $  2,000   │
│ Contingency (10%)       $ 17,336   │
│ ─────────────────────────────────  │
│ PHASE 1 TOTAL           $190,696   │
│                                    │
│ Within Budget: YES ✓               │
└────────────────────────────────────┘

OPERATING COSTS (Annual, Full Facility)
┌────────────────────────────────────┐
│ Energy Consumption:                │
│ - Power: 258 kW                    │
│ - Hours: 16 hrs/day                │
│ - Days: 365                        │
│ - kWh: 1,507,680                   │
│                                    │
│ Energy Cost:                       │
│ - Rate: $0.11/kWh                  │
│ - Annual: $165,845                 │
│                                    │
│ Maintenance:                       │
│ - Replacement rate: 2%/year        │
│ - Cleaning labor: $2,400/year      │
│ - Parts: $1,500/year               │
│ - Total: $3,900/year               │
│ ─────────────────────────────────  │
│ TOTAL ANNUAL OPERATING: $169,745   │
│                                    │
│ Per Head of Lettuce:               │
│ Production: 78,000 heads/year      │
│ Energy cost: $2.13/head            │
└────────────────────────────────────┘

ROI ANALYSIS
============

Revenue (Annual, Full Facility):
- Lettuce: 78,000 heads × $2.50 = $195,000
- Basil: 8,000 units × $3.00 = $24,000
- Total Revenue: $219,000

Operating Profit:
- Revenue: $219,000
- Lighting operating cost: -$169,745
- Other costs (labor, nutrients, etc.): -$65,000
- NET: -$15,745 (before capital recovery)

Capital Recovery (Full Facility):
- Investment: $359,150
- Useful life: 7 years
- Annual depreciation: $51,307

Break-Even Analysis:
Current pricing doesn't support full investment
Options:
1. Increase production (add crops/tiers)
2. Increase pricing ($2.85/head break-even)
3. Reduce energy costs (higher efficacy fixtures)
4. Diversify crops (higher-margin herbs)

RECOMMENDATION:
Proceed with Phase 1 (proves concept)
Optimize operations before Phase 2
Target 15% increase in productivity or pricing
```

## Phase 7: Documentation Package

```
DELIVERABLES
============

1. LIGHTING PLAN DRAWINGS
   ✓ Overall facility layout
   ✓ Per-tier fixture placement
   ✓ Dimensions and spacing
   ✓ Mounting details
   ✓ Scale: 1/4" = 1'-0"

2. ELECTRICAL DRAWINGS
   ✓ Single-line diagram
   ✓ Panel schedules
   ✓ Circuit routing
   ✓ Control wiring diagram

3. SPECIFICATIONS
   ✓ Fixture technical specs
   ✓ Installation requirements
   ✓ Testing and commissioning
   ✓ Acceptance criteria

4. BILL OF MATERIALS
   ✓ Itemized equipment list
   ✓ Quantities and part numbers
   ✓ Pricing (budgetary)
   ✓ Lead times

5. OPERATIONS MANUAL
   ✓ Light schedules
   ✓ Maintenance procedures
   ✓ Troubleshooting guide
   ✓ Safety information

6. PROJECT SCHEDULE
   Week 1-2: Electrical service upgrade
   Week 3-4: Panel installation
   Week 4-5: Fixture installation
   Week 5-6: Control system commissioning
   Week 6: Final testing and handover
```

## Summary

This capstone project demonstrates the integrated application of LED lighting science principles to a real-world facility design. The process encompasses crop requirements analysis, fixture selection, layout optimization, electrical engineering, control integration, and economic evaluation.

**Key Project Outcomes**:

1. Designed system delivering 15.9 mol/m²/d DLI for lettuce production
2. Selected cost-effective fixtures balancing performance and budget
3. Created scalable layout with >85% uniformity across growing area
4. Specified complete electrical system meeting code requirements
5. Integrated zone-based control for crop-specific management
6. Identified phased implementation to meet budget constraints
7. Calculated operational costs and ROI projections

**Critical Decisions Made**:
- Panel fixtures selected over linear (cost and installation efficiency)
- Phased implementation (2 tiers initially) to meet $200K budget
- 600A service upgrade with staged startup (cost savings)
- Zone-based control enabling crop diversity
- 16-hour photoperiod balancing DLI and energy costs

**Lessons Learned**:
- Budget constraints drive design compromises
- Total cost of ownership matters more than initial price
- Flexibility (zones, dimming) enables operational optimization
- Electrical infrastructure often overlooked in initial budgets
- Economic viability requires holistic business model analysis

## Assignment: Your Turn

Apply the concepts from this module to design a lighting system for one of these scenarios:

**Option A: Cannabis Cultivation**
- 2,500 sq ft flowering room
- Target DLI: 40 mol/m²/d
- 12-hour photoperiod
- Budget: $125,000

**Option B: Greenhouse Supplemental**
- 5,000 sq ft greenhouse (40°N latitude)
- Tomato production
- Target DLI: 25 mol/m²/d
- Budget: $75,000

**Option C: Microgreens Operation**
- 1,000 sq ft, 6 tiers
- Mixed crops (sunflower, pea, radish)
- Target DLI: 12-16 mol/m²/d
- Budget: $40,000

Submit:
1. Requirements analysis and calculations
2. Fixture selection justification
3. Layout drawing (hand-drawn acceptable)
4. Electrical load calculation
5. Budget breakdown
6. ROI analysis

## Congratulations!

You have completed Course 205: LED Lighting Science. You now possess the knowledge and skills to design, specify, and manage LED lighting systems for controlled environment agriculture. Apply these principles to optimize your operations, reduce costs, and improve crop quality.

**Your Next Steps**:
1. Apply learnings to your current operation
2. Conduct PPFD measurements and create baseline data
3. Identify efficiency improvement opportunities
4. Consider advanced courses in climate control integration
5. Stay current with LED technology developments

**Additional Resources**:
- Course materials and cheatsheets for reference
- Industry organizations (ASHS, ISHS, CEA community)
- Research literature (HortScience, HortTechnology)
- Manufacturer technical resources
- Peer grower networks and forums

---

**Estimated Time**: 120 minutes
**Difficulty**: Intermediate-Advanced
**Prerequisites**: Modules 1-9 (Complete)
