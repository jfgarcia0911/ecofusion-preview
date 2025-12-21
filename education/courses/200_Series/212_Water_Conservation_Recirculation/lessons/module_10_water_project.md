# Module 10: Capstone Water Conservation Project
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design a complete recirculating water system
2. Integrate all course concepts into a cohesive plan
3. Calculate system specifications and costs
4. Present and justify your design decisions
5. Develop an implementation roadmap

---

## Introduction

This capstone module challenges you to apply everything you've learned to design a comprehensive water conservation and recirculation system. You'll work through a realistic scenario, making design decisions, calculating specifications, and developing a complete implementation plan.

---

## Project Scenario

### The Challenge

**GreenLeaf Urban Farms** is expanding their operation and wants to implement best practices in water conservation. They've hired you as a water systems consultant.

**Facility Details:**
```
╔════════════════════════════════════════════════════════════╗
║           GREENLEAF URBAN FARMS                            ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ LOCATION:                                                  ║
║ • Portland, Oregon                                         ║
║ • Annual rainfall: 37 inches                               ║
║                                                            ║
║ FACILITY:                                                  ║
║ • 15,000 sq ft greenhouse (growing area)                   ║
║ • 20,000 sq ft roof (total catchment)                      ║
║ • Deep Water Culture (DWC/raft) system                     ║
║                                                            ║
║ PRODUCTION:                                                ║
║ • Lettuce and herbs (primary)                              ║
║ • Target: 8,000 lbs/month                                  ║
║ • Year-round production                                    ║
║                                                            ║
║ CURRENT WATER USE:                                         ║
║ • Municipal water: $0.006/gallon ($6/1,000 gal)            ║
║ • Current consumption: 50,000 gallons/month                ║
║ • Minimal recirculation (estimated 70%)                    ║
║ • No rainwater harvesting                                  ║
║                                                            ║
║ GOALS:                                                     ║
║ • Achieve >95% recirculation                               ║
║ • Implement rainwater harvesting                           ║
║ • Reduce municipal water by 80%                            ║
║ • Budget: $40,000                                          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Project Requirements

### Deliverables

Your complete project must include:

```
┌──────────────────────────────────────────────────────────────┐
│              PROJECT DELIVERABLES CHECKLIST                  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ □ 1. SYSTEM DESIGN OVERVIEW                                  │
│      • Configuration (centralized/zoned/hybrid)              │
│      • Flow diagram with all components                      │
│      • System volume calculations                            │
│                                                              │
│ □ 2. RECIRCULATION SYSTEM SPECIFICATIONS                     │
│      • Flow rates and pump sizing                            │
│      • Filtration stages and specifications                  │
│      • UV/sterilization sizing                               │
│      • Monitoring and control points                         │
│                                                              │
│ □ 3. RAINWATER HARVESTING DESIGN                             │
│      • Collection potential calculations                     │
│      • Storage tank sizing and justification                 │
│      • Treatment requirements                                │
│      • Integration with main system                          │
│                                                              │
│ □ 4. WATER QUALITY MANAGEMENT PLAN                           │
│      • Testing schedule and parameters                       │
│      • Target ranges for all metrics                         │
│      • Correction procedures                                 │
│      • Equipment calibration schedule                        │
│                                                              │
│ □ 5. ECONOMIC ANALYSIS                                       │
│      • Capital cost breakdown                                │
│      • Operating cost projections                            │
│      • Water savings calculations                            │
│      • ROI and payback period                                │
│                                                              │
│ □ 6. PERFORMANCE METRICS                                     │
│      • Current vs. projected water use                       │
│      • Recirculation rate improvement                        │
│      • Water use efficiency (gal/lb)                         │
│      • Environmental impact (water saved)                    │
│                                                              │
│ □ 7. IMPLEMENTATION ROADMAP                                  │
│      • Phased approach (if applicable)                       │
│      • Timeline with milestones                              │
│      • Risk mitigation strategies                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Design Process

### Step 1: Current State Analysis

**Calculate Current Performance:**

```
CURRENT STATE CALCULATIONS

System Volume:
• Growing beds: 15,000 sf × 1 ft deep × 7.48 = 112,200 gal
• Assume 60% water fill: 67,320 gal working volume

Current Water Use:
• Monthly consumption: 50,000 gallons
• Daily average: 50,000 ÷ 30 = 1,667 gal/day
• As % of system: 1,667 ÷ 67,320 = 2.5% daily

Production:
• Monthly: 8,000 lbs
• Water use efficiency: 50,000 ÷ 8,000 = 6.25 gal/lb

Estimated Recirculation:
• If 70% recirculating: 47,040 gal/day recycled
• Makeup: 2.5% daily = 1,683 gal fresh
• Discharge: ~30% = 500 gal/day
• Evapotranspiration: ~1,183 gal/day

Water Costs:
• Monthly: 50,000 gal × $0.006 = $300/month
• Annual: $3,600/year
```

### Step 2: Design Target State

**Your Goals:**

```
TARGET PERFORMANCE

Recirculation: >95%
• System volume: 67,320 gal
• Daily recirculation: 64,000+ gal
• Fresh makeup: <3,366 gal/day (5%)
• Discharge: <1,683 gal/day

Water Sources:
• Rainwater: Primary makeup
• Municipal: Backup only

Water Use:
• Reduce to 10,000 gal/month (80% reduction)
• WUE target: 1.25 gal/lb (from 6.25)
• Annual savings: 480,000 gallons

Economic:
• Water cost savings: $2,880/year
• Budget: $40,000 total investment
• Target payback: 10-15 years (water cost alone)
• Plus: enhanced sustainability value
```

### Step 3: Design Components

**Use this template for your design:**

```
╔════════════════════════════════════════════════════════════════════════════╗
║                    SYSTEM DESIGN WORKSHEET                                 ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ 1. RECIRCULATION SYSTEM                                                    ║
║ ═══════════════════════                                                    ║
║                                                                            ║
║ Configuration: _____________________________                               ║
║                                                                            ║
║ Flow Requirements:                                                         ║
║ • Target turnover time: _____ hours                                        ║
║ • Required flow rate: _____ GPM                                            ║
║                                                                            ║
║ Pumps:                                                                     ║
║ • Quantity: _____                                                          ║
║ • Capacity: _____ GPM @ _____ ft head                                      ║
║ • Model/Cost: $_____                                                       ║
║                                                                            ║
║ Filtration:                                                                ║
║ Stage 1: _____________ (_____ micron) $______                              ║
║ Stage 2: _____________ (_____ micron) $______                              ║
║ Stage 3: _____________ (_____ micron) $______ (optional)                   ║
║                                                                            ║
║ Sterilization:                                                             ║
║ • Technology: _____________                                                ║
║ • Capacity: _____ GPM @ _____ mJ/cm²                                       ║
║ • Cost: $_____                                                             ║
║                                                                            ║
║ Reservoir:                                                                 ║
║ • Size: _____ gallons (____% of system volume)                             ║
║ • Cost: $_____                                                             ║
║                                                                            ║
║ ════════════════════════════════════════════════════════════════════════   ║
║                                                                            ║
║ 2. RAINWATER HARVESTING                                                    ║
║ ═══════════════════════                                                    ║
║                                                                            ║
║ Collection Potential:                                                      ║
║ • Catchment area: 20,000 sq ft                                             ║
║ • Annual rainfall: 37 inches                                               ║
║ • Efficiency: _____                                                        ║
║ • Annual yield: ____________ gallons                                       ║
║                                                                            ║
║ Storage:                                                                   ║
║ • Strategy: _____________________________                                  ║
║ • Tank size: _____ gallons                                                 ║
║ • Justification: _________________________                                 ║
║ • Cost: $_____                                                             ║
║                                                                            ║
║ Treatment:                                                                 ║
║ • First flush: $______                                                     ║
║ • Pre-filtration: $______                                                  ║
║ • UV sterilization: $______                                                ║
║                                                                            ║
║ Collection System:                                                         ║
║ • Gutters/downspouts: $______                                              ║
║ • Plumbing: $______                                                        ║
║                                                                            ║
║ ════════════════════════════════════════════════════════════════════════   ║
║                                                                            ║
║ 3. MONITORING & CONTROL                                                    ║
║ ═══════════════════════                                                    ║
║                                                                            ║
║ Equipment:                                                                 ║
║ □ pH meter: $_____                                                         ║
║ □ EC meter: $_____                                                         ║
║ □ DO meter: $_____                                                         ║
║ □ Flow meters: $_____ (quantity: ____)                                     ║
║ □ Nutrient test kits: $_____                                               ║
║ □ Automation controller: $_____ (optional)                                 ║
║                                                                            ║
║ ════════════════════════════════════════════════════════════════════════   ║
║                                                                            ║
║ TOTAL CAPITAL COST: $_____________                                         ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

### Step 4: Economic Analysis

**Complete Cost-Benefit Analysis:**

```
┌──────────────────────────────────────────────────────────────┐
│           ECONOMIC ANALYSIS TEMPLATE                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│ CAPITAL COSTS                                                │
│ ─────────────                                                │
│ Recirculation components:        $____________               │
│ Rainwater harvesting:            $____________               │
│ Monitoring equipment:            $____________               │
│ Installation labor (20%):        $____________               │
│ Contingency (10%):               $____________               │
│                                  ─────────────               │
│ TOTAL CAPITAL:                   $____________               │
│                                                              │
│ ANNUAL OPERATING COSTS                                       │
│ ──────────────────────                                       │
│ Electricity (pumps, UV):         $____________               │
│ Consumables (filters, lamps):    $____________               │
│ Testing supplies:                $____________               │
│ Maintenance labor:               $____________               │
│ Residual water costs:            $____________               │
│                                  ─────────────               │
│ TOTAL ANNUAL OPERATING:          $____________               │
│                                                              │
│ ANNUAL SAVINGS                                               │
│ ──────────────                                               │
│ Water cost reduction:            $____________               │
│ Nutrient efficiency gain:        $____________               │
│ Reduced crop losses:             $____________               │
│ Other benefits:                  $____________               │
│                                  ─────────────               │
│ TOTAL ANNUAL SAVINGS:            $____________               │
│                                                              │
│ NET ANNUAL BENEFIT:              $____________               │
│ (Savings - Operating Costs)                                  │
│                                                              │
│ SIMPLE PAYBACK PERIOD:           _____ years                 │
│ (Capital ÷ Net Annual Benefit)                               │
│                                                              │
│ 10-YEAR NPV (5% discount):       $____________               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Sample Solution

### Example Design Overview

**System Configuration: Hybrid Recirculation + Rainwater**

```
SYSTEM FLOW DIAGRAM

                  Rainwater
                     │
                     ▼
              ┌──────────────┐
              │ 10,000 gal   │
              │ Storage Tank │
              └──────┬───────┘
                     │
          Municipal  │
          (backup) ──┤
                     ▼
              ┌──────────────┐
              │ Treatment:   │
              │ • Filter     │
              │ • UV         │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Main Growing │
              │ System       │
              │ (67,320 gal) │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Multi-stage  │
              │ Filtration   │
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ UV           │
              │ Sterilization│
              └──────┬───────┘
                     │
                     ▼
              ┌──────────────┐
              │ Reservoir    │
              │ (15,000 gal) │
              └──────┬───────┘
                     │
                     └──► Back to Growing System (95%+ recirculation)
```

**Key Specifications:**

| Component | Specification | Cost |
|-----------|--------------|------|
| **Recirculation Pumps** | (2) 60 GPM @ 25 ft head, VFD | $3,000 |
| **Sand Filter** | 36" diameter, auto-backwash | $4,500 |
| **UV System** | 80 GPM @ 40 mJ/cm² | $2,500 |
| **Reservoir** | 15,000 gal polyethylene | $8,000 |
| **Rainwater Tank** | 10,000 gal above-ground | $5,000 |
| **Rainwater Collection** | Gutters, diverter, plumbing | $3,500 |
| **Rainwater Treatment** | Filter + UV | $2,000 |
| **Monitoring Equipment** | pH, EC, DO, flow meters | $2,500 |
| **Controls/Automation** | PLC controller, sensors | $4,000 |
| **Installation** | Labor and materials | $6,000 |
| **TOTAL** | | **$41,000** |

**Projected Performance:**
- Recirculation rate: 97%
- Rainwater provides: 70% of annual makeup
- Municipal water: 15,000 gal/month (70% reduction)
- WUE: 1.9 gal/lb (70% improvement)
- Annual water savings: 420,000 gallons
- Annual cost savings: $2,520
- Simple payback: 16.3 years (water only)

---

## Implementation Roadmap

### Phased Approach

```
PHASE 1: RECIRCULATION UPGRADE (Months 1-2)
────────────────────────────────────────────
□ Install filtration system
□ Add UV sterilization
□ Upgrade pumping capacity
□ Install monitoring equipment
□ Test and commission

Investment: $22,000
Savings: Achieve 90% recirculation

PHASE 2: RAINWATER HARVESTING (Months 3-4)
────────────────────────────────────────────
□ Install gutters and collection system
□ Place storage tank
□ Install treatment system
□ Connect to main system
□ Test and verify quality

Investment: $13,000
Additional savings: 60-70% municipal water reduction

PHASE 3: OPTIMIZATION (Months 5-6)
────────────────────────────────────────────
□ Install automation and controls
□ Fine-tune all systems
□ Staff training
□ Establish monitoring protocols
□ Performance verification

Investment: $6,000
Maximize efficiency and reliability
```

---

## Module Summary

### Key Takeaways

1. **Integrated design is essential** - recirculation, source water, treatment, and monitoring must work together seamlessly

2. **Calculate everything** - assumptions lead to undersizing or overspending; precise calculations drive optimal design

3. **Economics tell the full story** - water savings alone may show long payback, but full value includes crop quality, sustainability credentials, and operational resilience

4. **Implementation strategy matters** - phased approach reduces risk and allows learning between stages

5. **Your design reflects your priorities** - balance between budget, performance, complexity, and sustainability

### Congratulations!

You've completed Course 212: Water Conservation & Recirculation. You now have the knowledge and tools to:
- Design efficient recirculating water systems
- Implement water conservation strategies
- Monitor and optimize water use
- Achieve industry-leading water efficiency

Apply these skills to build more sustainable, efficient, and profitable CEA operations.

---

*EcoFusion Academy - Course 212, Module 10*
