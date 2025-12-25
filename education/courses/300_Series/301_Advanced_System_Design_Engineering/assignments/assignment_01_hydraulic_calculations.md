# Course 301: Advanced System Design & Engineering
## Assignment 01: Hydraulic Calculations Exercise

---

## Assignment Overview

| **Attribute** | **Details** |
|---------------|-------------|
| **Assignment Type** | In-Class Activity |
| **Duration** | 15-20 minutes |
| **Points** | 15 points |
| **Completed During** | Module 2: Hydraulic System Design |
| **Submission** | Hand in completed worksheet before leaving class |

---

## Learning Objectives

By completing this assignment, you will:
1. Apply hydraulic calculation principles to real-world scenarios
2. Calculate Total Dynamic Head (TDH) accurately
3. Size pumps appropriately for system requirements
4. Select proper pipe diameters based on flow rates
5. Account for friction losses in piping systems

---

## Scenario

You are designing the hydraulic system for a commercial aquaponics facility with the following specifications:

### System Parameters
- **Fish tank volume:** 2,000 gallons
- **Target flow rate:** 100 GPM (gallons per minute)
- **System height difference:** Fish tank to highest grow bed = 6 feet vertical lift
- **Pipe length:** 45 feet total (including vertical and horizontal runs)
- **Desired number of turnovers:** 3 times per hour

---

## Part 1: Flow Rate Verification (3 points)

**Calculate the required flow rate to achieve 3 turnovers per hour.**

```
Tank Volume: 2,000 gallons
Desired Turnovers: 3 per hour

Required Flow Rate = _______ GPM

Show your work:
```

**Question:** Does the target flow rate of 100 GPM meet the requirement?

---

## Part 2: Pipe Sizing (4 points)

**Using the provided pipe sizing guidelines, select appropriate pipe diameter.**

### Reference Table:
| Flow Rate (GPM) | Recommended Pipe Size | Max Velocity |
|-----------------|----------------------|--------------|
| 5-15 | 1" | 4-5 ft/s |
| 15-30 | 1.5" | 4-5 ft/s |
| 30-60 | 2" | 5-6 ft/s |
| 60-100 | 3" | 5-6 ft/s |
| 100-200 | 4" | 6-7 ft/s |

**Your Selection:**
- Main circulation line pipe diameter: _______
- Justification:

**Calculate actual velocity in selected pipe:**
```
Pipe diameter: _______ inches
Cross-sectional area: _______ sq in
Velocity: _______ ft/s

Show calculations:
```

---

## Part 3: Total Dynamic Head (TDH) Calculation (5 points)

Calculate the Total Dynamic Head using the formula:
```
TDH = Static Head + Friction Head + Pressure Head
```

### A. Static Head
```
Vertical lift from fish tank to highest point: _______ feet
```

### B. Friction Head
Use the approximation: **2.5 feet of head loss per 100 feet of 4" PVC pipe at 100 GPM**

```
Total pipe length: 45 feet
Friction loss = (45 ft / 100 ft) × 2.5 ft = _______ feet

Add 20% for fittings (elbows, tees, valves): _______ feet

Total friction head: _______ feet
```

### C. Pressure Head
```
Required operating pressure at grow beds: 5 feet (assume 2 PSI)
Pressure head: _______ feet
```

### D. Total Dynamic Head
```
TDH = Static + Friction + Pressure
TDH = _______ + _______ + _______ = _______ feet
```

---

## Part 4: Pump Selection (3 points)

**Using your calculated TDH and required flow rate, select an appropriate pump.**

### Pump Specifications Needed:
- **Flow Rate:** _______ GPM
- **TDH Required:** _______ feet
- **Recommended pump type:** (Circle one)
  - Centrifugal
  - Submersible
  - Inline booster

**Justification for pump type selection:**

---

## Submission Requirements

1. **Show all work** - calculations must be visible for credit
2. **Include units** - all answers must have appropriate units (GPM, feet, ft/s, etc.)
3. **Box final answers** - make key results easy to identify
4. **Professional presentation** - neat, organized work

---

## Grading Rubric

| Criteria | Points | Description |
|----------|--------|-------------|
| **Flow Rate Calculation** | 3 | Correct calculation and verification |
| **Pipe Sizing** | 4 | Appropriate selection with velocity check |
| **TDH Calculation** | 5 | Accurate breakdown of all components |
| **Pump Selection** | 3 | Appropriate pump type and justification |
| **TOTAL** | **15** | |

### Detailed Scoring:
- **Excellent (13-15 pts):** All calculations correct, work clearly shown, professional presentation
- **Proficient (10-12 pts):** Minor calculation errors, work mostly clear, good presentation
- **Developing (7-9 pts):** Some errors, work partially shown, adequate presentation
- **Needs Improvement (0-6 pts):** Major errors, insufficient work shown, poor presentation

---

## Tips for Success

1. **Use the reference tables** - they're there to help you
2. **Write out formulas first** - then plug in numbers
3. **Check your units** - convert when necessary
4. **Round appropriately** - engineering calculations typically use 1-2 decimal places
5. **Consider real-world factors** - add safety margins when appropriate

---

## Common Mistakes to Avoid

- Forgetting to account for friction losses in fittings
- Using incorrect units (mixing gallons/liters or feet/meters)
- Undersizing pipes leading to excessive friction
- Not accounting for vertical lift
- Selecting pumps without considering efficiency curve

---

## Extension Questions (Optional - No Extra Credit)

If you finish early, consider these questions:

1. **What would happen to TDH if you increased flow rate to 150 GPM?**

2. **How would TDH change if you used 3" pipe instead of 4"?**

3. **What is the significance of pump efficiency at the design operating point?**

---

## Real-World Application

This exercise mirrors the first step in designing any recirculating aquaponics system. Professional engineers perform these calculations to:
- Ensure adequate water circulation
- Prevent pump cavitation and failure
- Optimize energy efficiency
- Size electrical circuits appropriately
- Estimate operating costs

**Note:** In practice, you would also consider:
- Pump curves and operating efficiency
- Redundancy requirements
- Variable flow demands
- Energy consumption and costs
- Maintenance access

---

## Resources

### Formulas Provided:
```
Flow Rate (GPM) = Tank Volume (gal) × Turnovers per hour ÷ 60 min

Velocity (ft/s) = (GPM × 0.321) ÷ (Diameter in inches)²

TDH (ft) = Static Head + Friction Head + Pressure Head

Friction Loss (ft/100ft) = Use provided tables or Hazen-Williams equation
```

### Conversion Factors:
- 1 PSI = 2.31 feet of head
- 1 foot of head = 0.433 PSI
- GPM to cubic feet/second: GPM ÷ 448.8

---

*EcoFusion Academy - Course 301, Assignment 01*
