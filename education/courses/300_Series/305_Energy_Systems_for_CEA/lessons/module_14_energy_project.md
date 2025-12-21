# Module 14: Energy Management Project

## Learning Objectives

- Develop comprehensive energy management plan
- Integrate all course concepts into practical project
- Present findings and recommendations
- Create implementation roadmap
- Establish monitoring and verification protocols

---

## 14.1 Project Overview

### Capstone Project Requirements

```
ENERGY MANAGEMENT PLAN DEVELOPMENT
═══════════════════════════════════════════════════════════════════

Your Task: Create a complete energy management plan for a CEA facility

Deliverables:
  1. Facility Energy Assessment (current state)
  2. Energy Improvement Opportunities (identified measures)
  3. Economic Analysis (costs, savings, ROI)
  4. Implementation Plan (phased approach)
  5. Monitoring & Verification Plan (track results)

You may:
  • Use your own facility
  • Analyze a provided case study
  • Create hypothetical but realistic scenario

Minimum Requirements:
  • Evaluate at least 8 different energy measures
  • Include measures from at least 4 categories:
    - Lighting
    - HVAC
    - Pumping/water
    - Envelope
    - Renewable energy
    - Storage
  • Provide detailed financial analysis for all measures
  • Prioritize and phase recommendations
  • Include implementation timeline
```

---

## 14.2 Section 1: Facility Assessment

### Baseline Energy Analysis

```
CURRENT STATE DOCUMENTATION
═══════════════════════════════════════════════════════════════════

A. Facility Description
────────────────────────────────────────────────────────────────

Required Information:
  □ Facility type (greenhouse, indoor, hybrid)
  □ Total square footage
  □ Production area square footage
  □ Crop types and production schedule
  □ Annual production volume (lbs/kg)
  □ Operating schedule (24/7, seasonal, etc.)
  □ Age of facility and major equipment
  □ Location/climate zone

Example:
────────────────────────────────────────────────────────────────

Facility: Green Valley Greenhouse
Type: Glass greenhouse with supplemental lighting
Size: 12,000 sq ft total, 10,500 sq ft production
Crops: Tomatoes (year-round), cucumbers (seasonal)
Production: 85,000 lbs/year tomatoes, 25,000 lbs cucumbers
Schedule: 365 days/year operation
Built: 2015, major equipment original
Location: Midwest (Chicago climate zone)

B. Energy Consumption Analysis
────────────────────────────────────────────────────────────────

Gather 12-24 months of utility data:

Month      Electricity  Natural Gas   Cost      Notes
           (kWh)        (therms)
─────────────────────────────────────────────────────────────────
Jan 2024   28,500       6,250        $7,820    Cold month
Feb 2024   26,200       5,800        $7,290
Mar 2024   24,800       4,200        $6,510    Warming up
...
Dec 2024   29,100       6,800        $8,150    Very cold

Annual     332,400      58,500       $89,450

Benchmark Calculations:
  EUI = 332,400 kWh ÷ 12,000 sq ft = 27.7 kWh/sq ft/year
  Energy/production = 332,400 ÷ 110,000 lbs = 3.0 kWh/lb
  Energy cost/lb = $89,450 ÷ 110,000 = $0.81/lb

Industry Comparison:
  Greenhouse (supplemental light): 40-80 kWh/sq ft typical
  Assessment: BETTER than average (27.7 vs 40-80)

C. End-Use Breakdown
────────────────────────────────────────────────────────────────

Estimated Distribution:
  Lighting (HPS, 16 hrs/day):     45% = $40,253/year
  Heating (natural gas boiler):   30% = $26,835/year
  Ventilation/cooling:            12% = $10,734/year
  Pumps/irrigation:                8% =  $7,156/year
  Controls/other:                  5% =  $4,473/year

D. Equipment Inventory
────────────────────────────────────────────────────────────────

Major Systems:
  • Lighting: 40 × 600W HPS fixtures (15 years old)
  • Heating: 800 MBH natural gas boiler (78% AFUE, 2015)
  • Cooling: Exhaust fans, evaporative pads
  • Irrigation: 3 HP constant-speed pump
  • Controls: Basic programmable thermostats

E. Rate Analysis
────────────────────────────────────────────────────────────────

Electricity:
  Energy charge: $0.13/kWh average
  Demand charge: $16/kW
  Peak demand: 65 kW (when all lights on)

Natural Gas:
  Supply: $0.95/therm
  Delivery: $0.45/therm
  Total: $1.40/therm average

F. Operational Observations
────────────────────────────────────────────────────────────────

  • Lights manually controlled (no automation)
  • Heating setpoint constant 70°F (no nighttime setback)
  • Visible air leaks around doors and vents
  • No thermal curtains
  • Pump runs continuous (could be scheduled)
  • Some after-hours phantom loads observed
```

---

## 14.3 Section 2: Improvement Opportunities

### Identified Energy Conservation Measures (ECMs)

```
ENERGY IMPROVEMENT MEASURES MATRIX
═══════════════════════════════════════════════════════════════════

ECM #  Measure Description         Category  Est. Savings  Est. Cost
─────────────────────────────────────────────────────────────────────
1      LED lighting retrofit       Lighting  $20,127/yr    $52,000
2      Thermal curtain system      Envelope  $16,101/yr    $30,000
3      Heating setpoint optimization HVAC    $2,684/yr     $0
4      VFD on irrigation pump      Pumping   $2,148/yr     $3,200
5      Air sealing program         Envelope  $4,473/yr     $4,200
6      Boiler tune-up & maintenance HVAC     $1,609/yr     $1,200
7      Lighting controls/timers    Lighting  $2,013/yr     $2,800
8      Solar PV (25 kW)           Renewable  $4,758/yr     $62,500
9      High-efficiency boiler      HVAC      $5,367/yr     $28,000
10     Demand management system    Controls  $2,684/yr     $8,500

Individual Measure Details:
────────────────────────────────────────────────────────────────

ECM 1: LED Lighting Retrofit
───────────────────────────────────────────────────────────────

Current System:
  • 40 × 600W HPS fixtures
  • Total power: 24 kW (26.4 kW with ballasts)
  • Operating: 16 hrs/day × 300 days/year = 4,800 hrs
  • Annual energy: 126,720 kWh
  • Annual cost: $16,474
  • Lamp replacement: 40 × $60 × 1.5/year = $3,600
  • Total current cost: $20,074/year

Proposed System:
  • 40 × 270W LED fixtures (equivalent output)
  • Total power: 10.8 kW
  • Annual energy: 51,840 kWh
  • Annual cost: $6,739
  • No lamp replacement needed
  • Maintenance: $200/year

Savings Analysis:
  Energy savings: 74,880 kWh/year
  Energy cost savings: $9,734/year
  Maintenance savings: $3,400/year
  Cooling load reduction: $1,000/year
  Total annual savings: $20,127/year

Implementation:
  Equipment: 40 × $1,200 = $48,000
  Installation: $4,000
  Total cost: $52,000
  Less utility rebate: -$2,000 (40 × $50/fixture)
  Net cost: $50,000

Financial Metrics:
  Simple payback: 2.5 years
  10-year NPV (5%): $105,420
  IRR: 39.1%
  Priority: HIGH

[Continue with detailed analysis for ECMs 2-10...]

ECM 2: Thermal Curtain System
───────────────────────────────────────────────────────────────

Current: Double poly glazing, no curtains
  Night U-value: 0.70 Btu/hr-sq ft-°F
  Heat loss (winter nights): High

Proposed: Automated thermal curtain
  Night U-value with curtain: 0.35
  Deployed: 14 hrs/night, October-April (210 nights)

Savings:
  Heat reduction: 50% on deployed nights
  Natural gas saved: 11,500 therms/year
  Cost savings: $16,101/year

Cost:
  Materials: $2.25/sq ft × 10,500 = $23,625
  Motors/automation: $4,500
  Installation: $1,875
  Total: $30,000

Financial Metrics:
  Simple payback: 1.9 years
  10-year NPV: $94,280
  IRR: 52.6%
  Priority: HIGH

[Continue for all measures...]
```

---

## 14.4 Section 3: Economic Analysis

### Comprehensive Financial Evaluation

```
COMPARATIVE ECONOMIC ANALYSIS
═══════════════════════════════════════════════════════════════════

All Measures Summary:

ECM#  Measure              Cost      Annual    Payback  NPV        IRR
                                    Savings   (years)  (10-yr)
─────────────────────────────────────────────────────────────────────
3     Heating setpoint     $0        $2,684    0.0      $20,730    ∞
6     Boiler tune-up       $1,200    $1,609    0.7      $11,230    131%
4     VFD on pump          $3,200    $2,148    1.5      $13,385    66%
7     Lighting controls    $2,800    $2,013    1.4      $12,745    70%
5     Air sealing          $4,200    $4,473    0.9      $30,330    105%
2     Thermal curtains     $30,000   $16,101   1.9      $94,280    53%
1     LED retrofit         $50,000   $20,127   2.5      $105,420   39%
9     Boiler upgrade       $28,000   $5,367    5.2      $13,460    16%
8     Solar PV             $62,500   $4,758    13.1     -$11,250   5.2%
10    Demand management    $8,500    $2,684    3.2      $12,230    28%

Portfolio Analysis:
────────────────────────────────────────────────────────────────

Scenario A: Quick Wins Only (ECMs 3-7)
  Investment: $11,400
  Annual savings: $12,927
  Payback: 0.9 years
  Total NPV: $88,420

Scenario B: High-Priority Package (ECMs 1-7)
  Investment: $91,400
  Annual savings: $49,155
  Payback: 1.9 years
  Total NPV: $288,120

Scenario C: All Measures (ECMs 1-10)
  Investment: $189,900
  Annual savings: $62,164
  Payback: 3.1 years
  Total NPV: $302,560

Recommended: Scenario B (High-Priority Package)
  Best balance of investment, savings, and risk
  Defer solar until better economics or incentives
  Skip expensive boiler replacement (current adequate)
```

---

## 14.5 Section 4: Implementation Plan

### Phased Rollout Strategy

```
IMPLEMENTATION ROADMAP
═══════════════════════════════════════════════════════════════════

Phase 1: Immediate (Month 1-2) - No/Low Cost
────────────────────────────────────────────────────────────────

Actions:
  • ECM 3: Implement heating setpoint schedule
  • ECM 6: Schedule boiler tune-up
  • Initiate utility rebate pre-approvals

Investment: $1,200
Monthly savings: $357
Payback: Immediate

Milestones:
  Week 1: Adjust thermostats, document settings
  Week 2: Schedule boiler service
  Week 4: Complete boiler tune-up
  Week 6: Begin utility rebate applications

Phase 2: Short-Term (Month 3-5) - Quick Paybacks
────────────────────────────────────────────────────────────────

Actions:
  • ECM 5: Complete air sealing program
  • ECM 4: Install VFD on pump
  • ECM 7: Add lighting controls

Investment: $10,200
Additional monthly savings: $720
Cumulative payback: 1.3 years

Milestones:
  Month 3: Air sealing work (2 weeks)
  Month 4: VFD installation
  Month 5: Lighting controls installation
  Month 6: Verification and commissioning

Phase 3: Major Projects (Month 6-12)
────────────────────────────────────────────────────────────────

Actions:
  • ECM 2: Install thermal curtain system
  • ECM 1: LED lighting retrofit

Investment: $80,000
Additional monthly savings: $3,019
Cumulative savings: $4,096/month

Milestones:
  Month 6: Finalize designs, order equipment
  Month 7-8: Thermal curtain installation
  Month 9-10: LED retrofit (by zones)
  Month 11: System commissioning
  Month 12: Performance verification

Phase 4: Future Consideration (Year 2+)
────────────────────────────────────────────────────────────────

Actions:
  • ECM 10: Demand management system (Year 2)
  • ECM 8: Solar PV (Year 3, if economics improve)
  • ECM 9: Boiler replacement (when current fails)

Investment: TBD based on future conditions

Total 18-Month Implementation:
────────────────────────────────────────────────────────────────

Total investment: $91,400
Annual savings achieved: $49,155
Energy reduction: 55%
Cost reduction: 55%
Payback: 1.9 years

Project Team & Responsibilities:
────────────────────────────────────────────────────────────────

Role                  Responsibility
────────────────────────────────────────────────────────────────
Facility Manager      Overall coordination, approvals
Operations Staff      Daily monitoring, setpoint adjustments
Maintenance Team      Installation support, contractor liaison
Financial Officer     Budget approval, incentive applications
Energy Consultant     Design review, commissioning, M&V
Contractors           Equipment installation, warranty
```

---

## 14.6 Section 5: Monitoring & Verification

### Performance Tracking Plan

```
MEASUREMENT & VERIFICATION PROTOCOL
═══════════════════════════════════════════════════════════════════

Objective: Verify that implemented measures achieve projected savings

M&V Approach: Option B - Retrofit Isolation
────────────────────────────────────────────────────────────────

Baseline Period: 12 months pre-implementation
Reporting Period: Monthly for first year, quarterly thereafter

Key Performance Indicators:
────────────────────────────────────────────────────────────────

1. Total Energy Consumption
   Metric: kWh/month, therms/month
   Target: 55% reduction from baseline
   Measurement: Utility bills

2. Energy Use Intensity
   Metric: kWh/sq ft/year
   Current: 27.7
   Target: <15
   Measurement: Annual total ÷ area

3. Energy Cost
   Metric: $/month total
   Current: $7,454/month
   Target: <$3,350/month
   Measurement: Utility bills

4. Production-Normalized Energy
   Metric: kWh/lb product
   Current: 3.0
   Target: <1.5
   Measurement: Energy ÷ production

5. Individual System Performance
   Measure: Per equipment specifications
   Examples:
     - Lighting: kWh/sq ft
     - Heating: therms/HDD
     - Pumping: kWh/gallon pumped

Monitoring Equipment:
────────────────────────────────────────────────────────────────

Install:
  □ Submeter on lighting circuits ($1,500)
  □ Submeter on HVAC ($1,200)
  □ Submeter on pumps ($800)
  □ Temperature/humidity sensors (6 points, $600)
  □ Data logger and software ($2,000)

Total M&V equipment: $6,100

Reporting Schedule:
────────────────────────────────────────────────────────────────

Monthly (first year):
  • Energy consumption vs. baseline
  • Cost vs. budget
  • Savings to date
  • Issues identified

Quarterly (ongoing):
  • Performance trends
  • Cumulative savings
  • Adjustment recommendations
  • Annual projection update

Annual:
  • Full performance report
  • Actual vs. projected comparison
  • Additional opportunities identified
  • Updated implementation plan

Adjustment Protocol:
────────────────────────────────────────────────────────────────

IF actual savings < 90% of projected:
  THEN conduct detailed investigation:
    1. Verify equipment operation
    2. Check operating schedules
    3. Review setpoints
    4. Inspect for issues
    5. Recalibrate as needed
    6. Document and report

Success Criteria:
────────────────────────────────────────────────────────────────

Project considered successful if:
  ✓ Savings ≥ 90% of projected (year 1)
  ✓ All equipment functioning properly
  ✓ No negative operational impacts
  ✓ Payback on track with projections
  ✓ Stakeholder satisfaction high
```

---

## 14.7 Executive Summary Template

```
ENERGY MANAGEMENT PLAN - EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════════════

Facility: [Name]
Prepared by: [Your Name]
Date: [Date]

Current Situation:
────────────────────────────────────────────────────────────────

• Annual energy cost: $XX,XXX
• Energy intensity: XX kWh/sq ft, XX kWh/lb
• Major opportunities identified: [brief list]
• Overall assessment: [1-2 sentences]

Recommended Actions:
────────────────────────────────────────────────────────────────

Phase 1 (Immediate): $X,XXX investment, $X,XXX/year savings
  • [List 2-3 key measures]

Phase 2 (Year 1): $XX,XXX investment, $XX,XXX/year savings
  • [List 2-3 key measures]

Phase 3 (Future): $XX,XXX investment, $X,XXX/year savings
  • [List 1-2 measures]

Financial Summary:
────────────────────────────────────────────────────────────────

Total Recommended Investment: $XXX,XXX
Annual Energy Savings: XX% reduction
Annual Cost Savings: $XX,XXX/year
Simple Payback: X.X years
10-Year NPV: $XXX,XXX
Internal Rate of Return: XX%

Non-Financial Benefits:
  • [Environmental impact]
  • [Operational improvements]
  • [Risk mitigation]
  • [Competitive advantage]

Next Steps:
────────────────────────────────────────────────────────────────

1. [Approval/funding decision]
2. [Incentive applications]
3. [Contractor selection]
4. [Implementation kickoff]

Recommendation: [PROCEED / DEFER / MODIFY because...]
```

---

## 14.8 Project Presentation Guidelines

```
FINAL PRESENTATION STRUCTURE
═══════════════════════════════════════════════════════════════════

Format: 15-20 minute presentation + 5-10 minutes Q&A

Slide Outline:
────────────────────────────────────────────────────────────────

1. Title & Introduction (1 slide)
   • Facility overview
   • Your role
   • Project scope

2. Current State (2-3 slides)
   • Energy consumption data
   • Cost breakdown
   • Key metrics and benchmarks

3. Improvement Opportunities (3-4 slides)
   • Summary table of all measures
   • Top 3 measures detailed
   • Visual: pie chart of savings by category

4. Financial Analysis (2-3 slides)
   • Investment vs. savings summary
   • Comparison chart (payback, NPV, IRR)
   • Sensitivity analysis (key variables)

5. Implementation Plan (2 slides)
   • Phased timeline with milestones
   • Resource requirements
   • Risk mitigation

6. Expected Results (1-2 slides)
   • Energy reduction (%)
   • Cost savings ($ and %)
   • Environmental benefits
   • Operational improvements

7. Recommendations & Next Steps (1 slide)
   • Clear recommendation
   • Immediate action items
   • Decision needed

Presentation Tips:
────────────────────────────────────────────────────────────────

DO:
  ✓ Use visuals (charts, diagrams)
  ✓ Focus on key findings, not details
  ✓ Explain technical terms
  ✓ Connect to business goals
  ✓ Anticipate questions
  ✓ Practice timing

DON'T:
  ✗ Read slides word-for-word
  ✗ Use tiny fonts
  ✗ Include excessive data tables
  ✗ Skip financial justification
  ✗ Ignore implementation challenges
  ✗ Forget call to action
```

---

## 14.9 Evaluation Rubric

```
PROJECT GRADING CRITERIA (162 points total)
═══════════════════════════════════════════════════════════════════

Section 1: Facility Assessment (30 points)
────────────────────────────────────────────────────────────────

□ Complete facility description (5 pts)
□ 12+ months energy data analyzed (5 pts)
□ End-use breakdown with methodology (5 pts)
□ Equipment inventory comprehensive (5 pts)
□ Benchmark comparison included (5 pts)
□ Operational observations documented (5 pts)

Section 2: Improvement Opportunities (35 points)
────────────────────────────────────────────────────────────────

□ 8+ measures identified (10 pts)
□ 4+ categories represented (5 pts)
□ Detailed technical descriptions (10 pts)
□ Realistic cost estimates (5 pts)
□ Energy savings calculations shown (5 pts)

Section 3: Economic Analysis (30 points)
────────────────────────────────────────────────────────────────

□ Financial metrics for all measures (10 pts)
□ Portfolio/scenario analysis (5 pts)
□ Sensitivity analysis included (5 pts)
□ Incentives researched and applied (5 pts)
□ Comparative ranking methodology (5 pts)

Section 4: Implementation Plan (25 points)
────────────────────────────────────────────────────────────────

□ Phased approach with timeline (10 pts)
□ Resource requirements identified (5 pts)
□ Risk assessment and mitigation (5 pts)
□ Realistic and achievable plan (5 pts)

Section 5: M&V Plan (20 points)
────────────────────────────────────────────────────────────────

□ Clear KPIs defined (5 pts)
□ Measurement approach specified (5 pts)
□ Reporting schedule established (5 pts)
□ Success criteria defined (5 pts)

Section 6: Presentation (22 points)
────────────────────────────────────────────────────────────────

□ Professional quality (5 pts)
□ Clear communication (5 pts)
□ Appropriate visuals (4 pts)
□ Time management (3 pts)
□ Q&A handling (5 pts)

Overall Quality:
────────────────────────────────────────────────────────────────

□ Professional formatting and organization
□ Calculations accurate and documented
□ Assumptions clearly stated and reasonable
□ Recommendations well-justified
□ Actionable and practical

Total: _____ / 162 points

Passing threshold: 130 points (80%)
```

---

## Key Takeaways

1. **Integration is key** - Combine all course concepts into cohesive plan
2. **Data drives decisions** - Base recommendations on solid analysis
3. **Economics matter** - Projects must make financial sense
4. **Phasing reduces risk** - Start with quick wins, build momentum
5. **Verification ensures success** - Monitor performance, adjust as needed
6. **Communication critical** - Present findings clearly to stakeholders
7. **Action-oriented** - Plan must be practical and implementable

---

## Final Course Reflection

You've completed Course 305: Energy Systems for CEA!

You should now be able to:
  ✓ Conduct energy audits
  ✓ Design efficient lighting, HVAC, and pumping systems
  ✓ Evaluate renewable energy options
  ✓ Analyze energy storage applications
  ✓ Optimize grid integration
  ✓ Perform economic analyses
  ✓ Navigate financing and incentives
  ✓ Develop comprehensive energy management plans

Next Steps:
  • Complete final exam
  • Apply concepts to your facility
  • Join EcoFusion Energy Community
  • Consider Course 306: Advanced CEA Technologies

---

**Congratulations on completing the course!**

---

*Course 305: Energy Systems for CEA | Module 14 | EcoFusion Academy*
