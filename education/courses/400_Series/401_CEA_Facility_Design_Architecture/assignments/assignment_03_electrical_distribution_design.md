# Assignment 3: Electrical Distribution System Design
## Course 401: CEA Facility Design & Architecture

---

## Assignment Overview

**Type:** In-Class Activity
**Duration:** 30-45 minutes
**Points:** 30 points
**Learning Objectives:** Design electrical distribution system meeting NEC requirements for CEA facility
**Difficulty Level:** Expert - Professional Engineering Design

---

## Scenario

You are the electrical engineer for a 40,000 sq ft vertical farm facility producing leafy greens on 8 growing levels. Design the main electrical distribution system from service entrance to major load panels.

### Facility Electrical Loads:

**LED Lighting Systems:**
- Total installed capacity: 1,600 kW (40 watts/sq ft × 40,000 sq ft)
- Operating schedule: 18 hours/day continuous
- System voltage: 277V/480V, 3-phase
- Power factor: 0.95
- Efficiency: 92%

**HVAC Systems:**
- Cooling: 300 tons (400 kW compressors)
- Air handling units: 200 kW
- Dehumidification: 150 kW
- Total HVAC: 750 kW continuous
- Operating voltage: 480V, 3-phase

**Fertigation and Water Systems:**
- Pumps and controls: 80 kW
- Water treatment: 40 kW
- Total: 120 kW continuous
- Operating voltage: 480V, 3-phase

**General Facilities:**
- Offices, labs, pack house: 60 kW
- Material handling: 40 kW
- IT/controls: 30 kW
- Miscellaneous: 20 kW
- Total: 150 kW
- Operating voltage: 120V/208V, 3-phase

---

## Design Tasks

### Part 1: Total Connected Load and Demand Load (8 points)

**Calculate Total Connected Load:**

| Load Category | Connected Load (kW) | Quantity | Total kW |
|---------------|--------------------:|----------|----------|
| LED Lighting | 1,600 | 1 | _______ |
| HVAC Systems | 750 | 1 | _______ |
| Fertigation/Water | 120 | 1 | _______ |
| General Facilities | 150 | 1 | _______ |
| **Total Connected Load** | | | **_______** kW |

**Apply NEC Demand Factors (Article 220):**

Per NEC 220.56 and applicable demand factors for continuous loads:
- Lighting: 100% demand factor (continuous load)
- HVAC: 100% demand factor (largest motor + 100% others)
- Fertigation: 100% demand factor
- General: 100% first 10 kW + 40% remainder

Calculate Demand Load:
- Lighting demand: _______ kW
- HVAC demand: _______ kW
- Fertigation demand: _______ kW
- General facilities demand: _______ kW
- **Total Demand Load: _______ kW**

**Service Size Calculation:**
- Add 25% for continuous loads per NEC 215.2(A)(1)
- Adjusted demand: _______ kW
- Convert to kVA (÷ power factor 0.95): _______ kVA
- Calculate amperage: kVA × 1,000 ÷ (√3 × 480V) = _______ Amps
- **Required service size (next standard): _______ Amps**

---

### Part 2: Service and Distribution Design (12 points)

**Main Service Equipment:**

1. **Select appropriate service entrance equipment:**
   - Service voltage: 480Y/277V, 3-phase, 4-wire
   - Main breaker size: _______ Amps (next standard size above calculated)
   - Main breaker frame: ☐ 2,000A  ☐ 2,500A  ☐ 3,000A  ☐ 4,000A
   - Short circuit rating required: _______ kA (assume 50 kA available fault current)
   - Service entrance conductor size: _______ AWG or kcmil copper (Table 310.16)

2. **Distribution panel configuration:**

Design the main panel schedule for four distribution panels:

| Panel ID | Served Loads | Voltage | Demand (kW) | Breaker Size (A) | Conductor Size |
|----------|--------------|---------|-------------|------------------|----------------|
| LP-1 | LED Zones 1-2 | 480V 3Ø | _______ | _______ | _______ |
| LP-2 | LED Zones 3-4 | 480V 3Ø | _______ | _______ | _______ |
| HVAC-1 | HVAC Equipment | 480V 3Ø | _______ | _______ | _______ |
| FAC-1 | General/Aux | 208V 3Ø | _______ | _______ | _______ |

3. **Grounding and bonding (select all that apply):**

   Required grounding components:
   ☐ Main bonding jumper at service
   ☐ Equipment grounding conductors to all panels
   ☐ Grounding electrode system (rods, Ufer, etc.)
   ☐ Isolated ground for IT equipment
   ☐ Grounding electrode conductor sized per NEC 250.66

---

### Part 3: Power Quality and Protection (10 points)

**1. Calculate voltage drop for longest LED lighting circuit:**
- Feeder length from main panel to LP-1: 250 feet
- Load current: _______ Amps (400 kW ÷ √3 ÷ 480V ÷ 0.95)
- Conductor size from Part 2: _______ AWG/kcmil
- Resistance: _______ ohms/1000 ft (from NEC Chapter 9, Table 8)
- Voltage drop: (2 × L × R × I) ÷ 1,000 = _______ Volts
- Voltage drop %: _______ % (should be ≤ 3% per NEC 215.2(A)(3))
- **Acceptable?** ☐ Yes  ☐ No (if no, upsize conductor)

**2. Overcurrent protection coordination:**

List the protective devices in order from service entrance to LED fixture (cascade):
1. Main service breaker: _______ A
2. LED panel main breaker: _______ A
3. LED branch circuit breaker: _______ A (assume 20A for 277V circuits)

Ratio between levels should be ≥ 2:1 for selective coordination.
- **Coordination ratio adequate?** ☐ Yes  ☐ No

**3. Power factor correction:**

- Uncorrected power factor: 0.95
- Lighting load at 0.95 PF: _______ kVAR reactive
- If utility requires 0.98 PF, capacitor bank needed: _______ kVAR
- **Recommend power factor correction?** ☐ Yes  ☐ No
- **Justification:** _______________________________________________

---

## Submission Requirements

- **Format:** Complete all calculations with work shown
- **Time Limit:** 45 minutes
- **Resources:** NEC handbook, conductor tables, calculator
- **Units:** Label all values with appropriate units
- **Professional Standard:** Use industry-standard electrical notation

---

## Grading Rubric

### Part 1: Load Calculations (8 points)
- **7-8 points:** Correct connected load, accurate demand factors applied, proper service sizing per NEC
- **5-6 points:** Minor calculation errors, correct methodology
- **3-4 points:** Significant errors but demonstrates understanding of demand calculations
- **0-2 points:** Incorrect methodology or incomplete

### Part 2: Distribution Design (12 points)
- **11-12 points:** Appropriate equipment selection, correct panel schedule, proper conductor sizing, complete grounding
- **8-10 points:** Mostly correct with minor specification errors
- **5-7 points:** Functional design but with multiple errors
- **0-4 points:** Inadequate design or major errors

### Part 3: Power Quality (10 points)
- **9-10 points:** Accurate voltage drop calculation, proper coordination analysis, appropriate PF correction recommendation
- **7-8 points:** Correct calculations with minor interpretation errors
- **5-6 points:** Basic analysis completed but with significant gaps
- **0-4 points:** Incomplete or incorrect analysis

---

## Answer Key (Instructors)

### Part 1:
- Total connected: 2,620 kW
- Demand load (after factors): ~2,485 kW
- Adjusted for continuous: 3,106 kW
- kVA: 3,270 kVA
- Amperage: 3,931 A
- **Service size: 4,000A** (next standard)

### Part 2:
- Main breaker: 4,000A frame
- SCCR: 65 kA minimum
- Service conductors: (4) 750 kcmil per phase (paralleled)
- Panel breakers: LP-1/LP-2: 600A each, HVAC-1: 1,200A, FAC-1: 400A
- Conductors: Size per Table 310.16 with appropriate derating

### Part 3:
- Voltage drop for 250 ft @ 505A with 500 kcmil: ~2.1% (acceptable)
- Coordination: 4,000A → 600A → 20A (acceptable ratios)
- PF correction: Minimal benefit at 0.95, likely not cost-effective

---

## Learning Outcomes

Students demonstrate professional-level competency in:
- NEC-compliant load calculation methodologies
- Service and distribution equipment sizing
- Voltage drop analysis and conductor selection
- Power quality and protection coordination
- Electrical system documentation

This assignment mirrors real-world electrical engineering deliverables for CEA facilities requiring stamped drawings and permit submissions.

---

**Assignment Version:** 1.0
**Last Updated:** December 2025
