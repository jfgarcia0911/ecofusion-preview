# Activity: Recirculating Water System Design
## Course 212: Water Conservation & Recirculation

---

## Objective

Design a complete recirculating water system for a specified facility, including component sizing, water quality management, and economic analysis. This activity integrates all course concepts into a practical design project.

**Time Required:** 4-6 hours

**Deliverable:** Complete system design with specifications, diagrams, and economic justification

---

## Design Scenario

You are designing a recirculating water system for **Green Valley Greens**, a new commercial greenhouse operation.

### Facility Specifications

```
GREENHOUSE DETAILS:
• Location: Denver, Colorado
• Growing area: 8,000 sq ft
• Greenhouse roof area: 10,000 sq ft
• System type: Deep Water Culture (DWC/raft)
• Primary crop: Lettuce (year-round)
• Target production: 5,000 lbs/month

ENVIRONMENTAL:
• Annual rainfall: 15 inches (arid climate)
• Municipal water cost: $0.010/gallon ($10/1,000 gal)
• Source water: Municipal (chloramine-treated)
  - pH: 8.2
  - EC: 0.4 mS/cm
  - Hardness: 180 ppm
  - Chloramine: 3 ppm

GOALS:
• Achieve >93% recirculation
• Treat source water for chloramine
• Implement water conservation best practices
• Budget: $25,000 for water system
```

---

## Part 1: System Volume and Flow Calculations

### Calculate System Parameters

**1.1 Estimate System Volume**

```
Growing System Volume:
Area: 8,000 sq ft
Depth: __________ feet (DWC typically 8-12 inches)
Water fill percentage: __________ % (typically 60-70%)

Calculation:
Volume = 8,000 × __________ × 7.48 × __________ = __________ gallons

Reservoir/Sump Volume:
Target: 25% of system volume
Calculation: __________ × 0.25 = __________ gallons

TOTAL SYSTEM VOLUME: __________ gallons
```

**1.2 Calculate Required Flow Rate**

```
Target Turnover Time: __________ hours (2-3 hours typical for DWC)

Flow Rate (GPM) = System Volume ÷ (Turnover Time × 60)

Calculation:
Flow Rate = __________ ÷ (__________ × 60) = __________ GPM

Required Pump Capacity: __________ GPM (add 20% safety factor)
```

**1.3 Estimate Water Consumption**

```
Based on 5,000 lbs/month production:

Target WUE: 2.0 gal/lb (goal)
Monthly water use: 5,000 × 2.0 = 10,000 gallons/month
Daily average: 10,000 ÷ 30 = __________ gallons/day

At 93% recirculation:
Daily recirculated: __________ × System volume
Daily makeup needed: __________ gallons (evapotranspiration + 7% loss)
```

---

## Part 2: Component Selection and Sizing

### 2.1 Source Water Treatment

**Challenge:** Municipal water contains chloramine (harmful to beneficial bacteria and plants)

```
SELECT TREATMENT TECHNOLOGY:

Option A: Activated Carbon Filter
- Catalytic carbon required for chloramine
- Flow rate needed: __________ GPM
- Contact time: 5-10 minutes minimum
- Carbon volume required: __________ cubic feet
- Cost estimate: $__________ (system + installation)
- Annual operating cost: $__________ (carbon replacement)

Option B: Reverse Osmosis
- Removes chloramine + reduces EC and hardness
- Production rate needed: __________ gallons/day
- Recovery rate: 40-50%
- Unit size: __________ GPD system
- Cost estimate: $__________ (system + installation)
- Annual operating cost: $__________ (filters, membrane, waste)

SELECTED: __________
JUSTIFICATION: _____________________________________
```

### 2.2 Recirculation Filtration

**Design multi-stage filtration:**

```
STAGE 1: Pre-filtration
Technology: __________
Micron rating: __________
Capacity: __________ GPM
Cost: $__________

STAGE 2: Primary Filtration
Technology: __________ (bag, sand, drum)
Micron rating: __________
Capacity: __________ GPM
Cost: $__________

STAGE 3: Fine/Polish (optional)
Technology: __________
Micron rating: __________
Capacity: __________ GPM
Cost: $__________

TOTAL FILTRATION COST: $__________
```

### 2.3 Sterilization

```
UV SIZING:
Flow rate: __________ GPM
Target dose: 40 mJ/cm² (standard)
UVT (after filtration): 90%+

UV Unit Selection:
Rated capacity: __________ GPM @ 40 mJ/cm²
Model/Cost: $__________
Lamp replacement: $__________ annually

Optional Ozone:
□ Yes  □ No
If yes, capacity: __________
Cost: $__________
```

### 2.4 Pumping

```
MAIN CIRCULATION PUMP(S):
Flow required: __________ GPM
Total Dynamic Head (TDH):
  - Vertical lift: __________ ft
  - Friction loss: __________ ft
  - Fittings: __________ ft
  - TOTAL TDH: __________ ft

Pump selection:
Quantity: __________
Capacity each: __________ GPM @ __________ ft head
Type: __________ (submersible, inline, VFD)
Cost per pump: $__________
Total pumping cost: $__________
```

### 2.5 Monitoring and Control

```
ESSENTIAL EQUIPMENT:
□ pH meter/probe: $__________
□ EC meter/probe: $__________
□ Temperature sensors: $__________
□ Flow meters: $__________
□ Level sensors: $__________
□ DO meter (optional): $__________

AUTOMATION (optional):
□ Basic controller: $__________
□ Advanced SCADA: $__________

TOTAL MONITORING COST: $__________
```

### 2.6 Rainwater Harvesting (Optional)

```
EVALUATE FEASIBILITY:

Collection Potential:
Roof area: 10,000 sq ft
Annual rainfall: 15 inches
Efficiency: 0.90

Annual yield = 10,000 × 15 × 0.623 × 0.90 = __________ gallons

Compare to need:
Annual water use: 10,000 gal/month × 12 = 120,000 gallons
Rainwater provides: __________ % of needs

COST-BENEFIT:
Storage tank (5,000 gal): $__________
Collection system: $__________
Treatment: $__________
Total cost: $__________

Include in design? □ Yes  □ No
Justification: _____________________________________
```

---

## Part 3: System Design Diagram

### Create a Flow Diagram

Draw or describe the complete water flow path:

```
SYSTEM FLOW DIAGRAM

[Source Water]
      │
      ▼
[Source Treatment: __________]
      │
      ▼
[Storage/Reservoir: __________ gal]
      │
      ▼
[Pump(s): __________ GPM]
      │
      ▼
[Growing System: __________ gal]
      │
      ▼
[Return Flow]
      │
      ▼
[Filtration Stage 1: __________]
      │
      ▼
[Filtration Stage 2: __________]
      │
      ▼
[UV Sterilization: __________ GPM]
      │
      ▼
[Back to Reservoir] ←── 93% Recirculation
      │
      └──→ [Discharge: 7%] (backwash, dumps)

Critical Control Points:
① After source treatment: __________
② After growing system: __________
③ After filtration: __________
④ After UV: __________
⑤ Reservoir (main): __________
```

---

## Part 4: Water Quality Management Plan

### 4.1 Testing Schedule

```
DAILY TESTING:
Parameters: pH, EC, Temperature
Equipment needed: __________
Cost: $__________

WEEKLY TESTING:
Parameters: N, P, K, Fe
Equipment needed: __________
Cost: $__________

MONTHLY:
Comprehensive nutrient panel
Method: □ On-site kits  □ Lab analysis
Cost: $__________ / month

QUARTERLY:
Full laboratory analysis
Cost: $__________ / quarter
```

### 4.2 Target Ranges (for Lettuce)

```
Parameter          Target Range       Action Level
───────────────────────────────────────────────────
pH                 5.8-6.2            <5.5 or >6.5
EC                 1.8-2.2 mS/cm      >2.8
Temperature        65-70°F            <60°F or >75°F
DO                 >6 mg/L            <5 mg/L
Nitrate            150-200 ppm        <100 or >250
```

---

## Part 5: Economic Analysis

### 5.1 Capital Cost Summary

```
RECIRCULATION SYSTEM:
Pumps:                    $__________
Filtration:               $__________
UV sterilization:         $__________
Reservoir:                $__________
Plumbing/piping:          $__________
Monitoring equipment:     $__________
                          ────────────
Subtotal:                 $__________

SOURCE WATER TREATMENT:
Carbon/RO system:         $__________
Installation:             $__________
                          ────────────
Subtotal:                 $__________

RAINWATER (if included):
Tank:                     $__________
Collection system:        $__________
Treatment:                $__________
                          ────────────
Subtotal:                 $__________

INSTALLATION LABOR (20%): $__________
CONTINGENCY (10%):        $__________
                          ════════════
TOTAL CAPITAL COST:       $__________

Budget:                   $25,000
Over/Under:               $__________
```

### 5.2 Annual Operating Costs

```
WATER:
Municipal water use:           __________ gal/year
Cost @ $10/1,000 gal:         $__________

ENERGY:
Pumps (____kW × ____hrs × $0.12/kWh): $__________
UV (____kW × ____hrs × $0.12/kWh):     $__________

CONSUMABLES:
UV lamp replacement:           $__________
Filter media/bags:             $__________
Carbon replacement (if appl):  $__________
RO filters/membrane (if appl): $__________
Testing supplies:              $__________

LABOR (maintenance):           $__________
                               ────────────
TOTAL ANNUAL OPERATING:        $__________
```

### 5.3 Comparison to Baseline

```
WITHOUT RECIRCULATION (baseline):
WUE: 10 gal/lb (conventional greenhouse)
Annual water use: 5,000 lbs/mo × 12 × 10 = 600,000 gallons
Annual cost @ $10/1,000 gal: $6,000

WITH YOUR DESIGN:
WUE: 2.0 gal/lb (target)
Annual water use: __________ gallons
Annual cost: $__________

ANNUAL SAVINGS:
Water volume saved: __________ gallons (_______%)
Cost savings: $__________
Payback period: Capital Cost ÷ Annual Savings = __________ years
```

---

## Part 6: Performance Projections

### Expected System Performance

```
WATER EFFICIENCY METRICS:
Recirculation rate:        __________%
WUE:                       __________ gal/lb
Daily makeup water:        __________ gallons
Water productivity:        $__________ per m³

Compare to Benchmarks:
Recirculation - Target: >90%  Yours: __________%
WUE - Target: <2.5 gal/lb     Yours: __________ gal/lb

Rating: □ Excellent  □ Good  □ Fair  □ Needs Improvement
```

---

## Deliverables Checklist

Submit your complete design including:

```
□ System volume and flow calculations
□ Component selection with justification
□ Complete equipment list with costs
□ System flow diagram
□ Water quality management plan
□ Economic analysis (capital + operating costs)
□ Performance projections
□ Budget reconciliation (vs. $25,000 limit)
□ Implementation recommendations
```

---

## Reflection Questions

1. What was your most difficult design decision and why?
2. How did you balance cost vs. performance?
3. If the budget were increased to $40,000, what would you add/upgrade?
4. What are the top 3 risks in your design and how would you mitigate them?
5. How does your design compare to the benchmarks in the course materials?

---

*EcoFusion Academy - Course 212*
