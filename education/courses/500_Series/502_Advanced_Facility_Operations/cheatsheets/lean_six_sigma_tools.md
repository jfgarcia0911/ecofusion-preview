# Lean Six Sigma Tools Cheatsheet

**Course 502: Advanced Facility Operations**

---

## Lean Tools

### 8 Wastes (DOWNTIME)

```
D - DEFECTS
Product not meeting specs, rework, scrap
└─ CEA Example: Diseased plants, damaged packaging

O - OVERPRODUCTION
Making more than needed, too early
└─ CEA Example: Harvesting before customer orders

W - WAITING
Idle time, delays, queues
└─ CEA Example: Product waiting for packaging

N - NON-UTILIZED TALENT
Skills, ideas, improvements not leveraged
└─ CEA Example: Workers not empowered to solve problems

T - TRANSPORTATION
Unnecessary movement of materials
└─ CEA Example: Excessive handling between harvest and package

I - INVENTORY
Excess raw materials, WIP, finished goods
└─ CEA Example: 90 days of growing media on hand

M - MOTION
Unnecessary people movement
└─ CEA Example: Walking long distances for tools

E - EXTRA PROCESSING
Steps that don't add value
└─ CEA Example: Redundant quality checks
```

### 5S Workplace Organization

```
1. SORT (Seiri) - Separate needed from unneeded
   ├─ Red tag campaign
   ├─ Keep only what's used daily/weekly
   └─ Remove clutter

2. SET IN ORDER (Seiton) - A place for everything
   ├─ Shadow boards for tools
   ├─ Labeled locations
   ├─ Visual controls
   └─ Point-of-use storage

3. SHINE (Seiso) - Clean and inspect
   ├─ Daily cleaning schedule
   ├─ Clean as you go
   ├─ Identify abnormalities
   └─ Standard cleaning procedures

4. STANDARDIZE (Seiketsu) - Make it visual and easy
   ├─ Standard work
   ├─ Visual management
   ├─ Photos of correct state
   └─ Checklists and audits

5. SUSTAIN (Shitsuke) - Maintain and improve
   ├─ Regular audits
   ├─ Training and reinforcement
   ├─ Recognition
   └─ Continuous improvement

5S Audit Score: Target 4.5+/5.0
```

### Value Stream Mapping Symbols

```
Process Box          Customer/Supplier      Data Box
┌────────────┐       ┌────────────┐        ┌──────────┐
│  PROCESS   │       │  CUSTOMER  │        │  C/T=30s │
└────────────┘       └────────────┘        │  C/O=5m  │
                                           └──────────┘

Inventory            Push Arrow             Pull Arrow
    △               ────────────►           ◄────────────
   500 pc                                   PULL

Timeline
├──────┬──────┬──────┬──────┬──────┬──────┐
   VA      NVA    VA    NVA    VA    NVA
 1 hr    5 days  30m  2 days  20m   1 day

Lead Time: 8.1 days
Value-Add Time: 1.8 hours
VA Ratio: 0.9%
```

### Kaizen Event Structure

```
Day 1: UNDERSTAND
├─ Gemba walk (observe actual process)
├─ Current state mapping
├─ Waste identification
└─ Baseline metrics

Day 2: ANALYZE
├─ Root cause analysis (5 Whys, Fishbone)
├─ Brainstorm solutions
├─ Prioritize improvements
└─ Plan implementation

Day 3: IMPLEMENT
├─ Execute improvements
├─ 5S activities
├─ Layout changes
└─ Test and refine

Day 4: VALIDATE
├─ Run improved process
├─ Collect data
├─ Standardize (update SOPs)
└─ Control plan

Day 5: REPORT
├─ Document results
├─ Report-out presentation
├─ Celebration
└─ 30-60-90 day follow-up plan

Typical Results: 20-40% improvement
```

---

## Six Sigma Tools

### DMAIC Process

```
DEFINE (What is the problem?)
├─ Project charter
├─ VOC (Voice of Customer)
├─ CTQ (Critical to Quality)
├─ Process map (SIPOC)
└─ Goal statement

MEASURE (How are we doing?)
├─ Identify Y (output) and X's (inputs)
├─ Data collection plan
├─ Measurement system analysis (MSA)
├─ Baseline capability
└─ Process sigma level

ANALYZE (Why are we having problems?)
├─ Graphical analysis
├─ Statistical tests (t-test, ANOVA)
├─ Correlation and regression
├─ Root cause analysis
└─ Identify vital few X's

IMPROVE (How do we fix it?)
├─ Generate solutions
├─ Pilot testing
├─ Design of Experiments (DOE)
├─ Implement solutions
└─ Verify improvement

CONTROL (How do we sustain?)
├─ Control plan
├─ Statistical Process Control (SPC)
├─ Update SOPs
├─ Training
└─ Hand off to process owner

Timeline: 3-6 months typical
```

### Process Capability

```
Cp = (USL - LSL) / (6σ)
Cpk = min[(USL - μ)/(3σ), (μ - LSL)/(3σ)]

Where:
USL = Upper Specification Limit
LSL = Lower Specification Limit
μ = Process Mean
σ = Process Standard Deviation

Interpretation:
Cpk < 1.0  = Poor (significant defects)
Cpk = 1.0  = Marginal (2700 PPM defects)
Cpk = 1.33 = Adequate (64 PPM defects)
Cpk = 1.67 = Good (0.6 PPM defects)
Cpk ≥ 2.0  = Excellent (virtually zero defects)

Target: Cpk ≥ 1.33
```

### Control Charts

```
X-bar and R Chart (for variable data)

X-bar Chart (monitors process mean):
UCL = X̄ + A₂R̄
CL = X̄
LCL = X̄ - A₂R̄

R Chart (monitors process variation):
UCL = D₄R̄
CL = R̄
LCL = D₃R̄

Out of Control Signals:
1. Point beyond control limits
2. Run of 7+ points one side of center
3. Trend of 7+ points up or down
4. Pattern (cyclic, systematic)

P Chart (for attribute data - proportion defective):
UCL = p̄ + 3√[p̄(1-p̄)/n]
CL = p̄
LCL = p̄ - 3√[p̄(1-p̄)/n]
```

### Root Cause Analysis Tools

```
5 WHYS
Problem: Lettuce heads are too small

Why? Plants not getting enough nutrients
 Why? Nutrient concentration is low
  Why? Dosing pump not calibrated correctly
   Why? Calibration schedule not followed
    Why? No standard procedure for calibration

Root Cause: Missing SOP for pump calibration
Solution: Create calibration SOP and schedule

FISHBONE DIAGRAM (Ishikawa)

                Material    Method    Machine
                   │           │          │
                   ├───────────┼──────────┤
                   │                      │
Problem ◄──────────┼──────────────────────┤
                   │                      │
                   ├───────────┼──────────┤
                   │           │          │
                  Man      Measurement  Environment

Categories: 6M's or 8P's
- Man (People)
- Machine (Equipment)
- Material (Inputs)
- Method (Process)
- Measurement (Data)
- Mother Nature (Environment)
- Management (Policies)
- Maintenance (Upkeep)
```

### Design of Experiments (DOE)

```
Full Factorial Design (2³ example)

Factors:
A: Light intensity (200, 300 µmol/m²/s)
B: Temperature (70, 75°F)
C: Nutrient EC (1.8, 2.2 mS/cm)

8 Treatment Combinations:
1. A⁻ B⁻ C⁻  (200, 70, 1.8)
2. A⁺ B⁻ C⁻  (300, 70, 1.8)
3. A⁻ B⁺ C⁻  (200, 75, 1.8)
4. A⁺ B⁺ C⁻  (300, 75, 1.8)
5. A⁻ B⁻ C⁺  (200, 70, 2.2)
6. A⁺ B⁻ C⁺  (300, 70, 2.2)
7. A⁻ B⁺ C⁺  (200, 75, 2.2)
8. A⁺ B⁺ C⁺  (300, 75, 2.2)

Analysis: ANOVA to identify significant factors
Result: Optimal combination for maximum yield
```

---

## Problem-Solving Frameworks

### A3 Thinking (One-Page Report)

```
┌─────────────────────────────────────────────┐
│ TITLE: Problem Statement                   │
├─────────────────────────────────────────────┤
│ 1. BACKGROUND                               │
│    Context and importance                   │
│                                             │
│ 2. CURRENT CONDITION                        │
│    Data showing the problem                 │
│                                             │
│ 3. GOAL/TARGET                              │
│    Specific, measurable objective           │
│                                             │
│ 4. ROOT CAUSE ANALYSIS                      │
│    5 Whys, Fishbone, data analysis          │
│                                             │
│ 5. COUNTERMEASURES                          │
│    Solutions to address root causes         │
│                                             │
│ 6. IMPLEMENTATION PLAN                      │
│    Who, what, when, resources               │
│                                             │
│ 7. FOLLOW-UP                                │
│    Results, validation, sustainment         │
│                                             │
│ 8. LESSONS LEARNED                          │
│    Insights for future improvement          │
└─────────────────────────────────────────────┘
```

### 8D Problem Solving

```
D1: Form the Team
D2: Describe the Problem (IS/IS NOT)
D3: Develop Interim Containment Actions
D4: Determine Root Cause (verify)
D5: Choose Permanent Corrective Actions
D6: Implement and Validate Corrective Actions
D7: Prevent Recurrence (systemic changes)
D8: Recognize Team and Celebrate

Use for: Major problems, customer complaints
```

---

## Quick Reference Tables

### Statistical Symbols
```
μ (mu) = Population mean
σ (sigma) = Population standard deviation
X̄ (x-bar) = Sample mean
s = Sample standard deviation
n = Sample size
α (alpha) = Significance level (typically 0.05)
```

### Z-Score for Service Levels
```
Service Level    Z-Score
90%              1.28
95%              1.65
98%              2.05
99%              2.33
99.5%            2.58
99.9%            3.09
```

### Sample Size Guidelines
```
For means: n ≥ 30 (Central Limit Theorem)
For proportions: np ≥ 5 and n(1-p) ≥ 5
For control charts: 20-25 subgroups minimum
For DOE: 3-5 replications per treatment
```

---

## Tips for Success

**Lean:**
1. Go to Gemba (where the work happens)
2. Respect people (involve those doing the work)
3. Eliminate waste relentlessly
4. Standardize the improvement
5. Visual management makes problems visible

**Six Sigma:**
1. Let data drive decisions
2. Verify root cause before solving
3. Pilot before full implementation
4. Control to sustain gains
5. Focus on customer requirements

**Both:**
- Start small, demonstrate success, then scale
- Leadership commitment is essential
- Celebrate wins to build momentum
- Train broadly, certify selectively
- Integrate with daily operations

---

**© EcoFusion Academy - Lean Six Sigma Tools Cheatsheet**
