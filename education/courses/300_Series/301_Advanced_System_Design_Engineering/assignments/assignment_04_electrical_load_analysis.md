# Course 301: Advanced System Design & Engineering
## Assignment 04: Electrical Load Analysis

---

## Assignment Overview

| **Attribute** | **Details** |
|---------------|-------------|
| **Assignment Type** | Take-Home Assignment |
| **Duration** | 1-2 hours |
| **Points** | 25 points |
| **Assigned** | After Module 8: Electrical System Design |
| **Due** | Before Module 11: Safety System Design |
| **Submission** | PDF upload to learning platform |

---

## Learning Objectives

By completing this assignment, you will:
1. Calculate electrical loads for all major equipment
2. Design appropriate electrical circuits with proper sizing
3. Specify an electrical panel that meets code requirements
4. Apply National Electrical Code (NEC) standards
5. Plan for system safety and operational reliability

---

## Project Scenario

You are the electrical engineer for a 5,000 sq ft commercial aquaponics greenhouse with the following equipment:

### Equipment List with Electrical Specifications

#### Lighting Systems
- **LED Grow Lights:** 20 fixtures × 320W each = 6,400W
  - Voltage: 120V
  - Power factor: 0.95
  - Operation: 16 hours/day

#### Pumps and Water Systems
- **Main Circulation Pump:** 3 HP, 230V, single phase
- **Backup Circulation Pump:** 3 HP, 230V, single phase
- **Sump Return Pump:** 1.5 HP, 230V, single phase
- **Dosing Pumps (3):** 100W each, 120V

#### Aeration and Oxygenation
- **Air Blower #1:** 2 HP, 230V, single phase
- **Air Blower #2:** 2 HP, 230V, single phase (backup)
- **Oxygen Concentrator:** 1,200W, 120V

#### HVAC and Climate Control
- **Exhaust Fans (4):** 1/2 HP each, 120V
- **Circulation Fans (6):** 150W each, 120V
- **Evaporative Cooler:** 1.5 HP, 230V, single phase
- **Space Heater (2):** 5,000W each, 240V

#### Monitoring and Control
- **Control System:** 500W, 120V (continuous operation)
- **Computers/Office:** 800W, 120V
- **Security System:** 200W, 120V (continuous)

#### Utilities
- **Lighting (facility):** 1,200W, 120V
- **Outlets (general use):** Assume 2,400W, 120V
- **Water Heater:** 4,500W, 240V

---

## Part 1: Load Calculations (8 points)

### Task 1.1: Calculate Individual Loads

Create a comprehensive load table with the following columns:

| Equipment | Quantity | Power Rating | Voltage | Current (A) | Demand Factor | Design Load (A) |
|-----------|----------|--------------|---------|-------------|---------------|----------------|
| LED Lights | 20 | 320W | 120V | | 1.0 | |
| Main Pump | 1 | 3 HP | 230V | | 1.25* | |
| ... | ... | ... | ... | ... | ... | ... |

**Notes:**
- *Motor loads require 125% factor per NEC 430.24
- Calculate current using: I = P / V (for resistive loads) or use motor tables for HP ratings
- 1 HP ≈ 746W for conversion purposes

### Task 1.2: Categorize Loads

Group loads by:
- **Continuous loads** (>3 hours): Apply 125% factor
- **Non-continuous loads**: Use 100%
- **Motor loads**: Apply NEC motor factors
- **Lighting loads**: Group by circuit

### Task 1.3: Calculate Total Connected Load

```
Total Connected Load = Sum of all design loads
Total Connected Load = _______ Amperes at 120V
                       _______ Amperes at 230/240V

Convert to kW total demand: _______ kW
```

---

## Part 2: Circuit Design (8 points)

### Task 2.1: Design Individual Circuits

Create a circuit schedule showing:

**120V Circuits:**
| Circuit # | Load Description | Load (A) | Wire Size | Breaker Size | Type |
|-----------|-----------------|----------|-----------|--------------|------|
| 1 | LED Lights (Bank 1) | | 12 AWG | 20A | GFCI |
| 2 | | | | | |

**230/240V Circuits:**
| Circuit # | Load Description | Load (A) | Wire Size | Breaker Size | Type |
|-----------|-----------------|----------|-----------|--------------|------|
| 1 | Main Circ. Pump | | 10 AWG | 30A | Standard |
| 2 | | | | | |

### Task 2.2: Apply NEC Sizing Rules

For each circuit:
- **Conductor sizing:** Must handle 125% of continuous loads
- **Breaker sizing:** Next standard size above calculated load
- **Voltage drop:** Limit to 3% for branch circuits
- **GFCI protection:** Required for wet locations

**Standard Breaker Sizes:** 15A, 20A, 30A, 40A, 50A, 60A, 70A, 80A, 100A

**Wire Sizes (Copper, THHN):**
| AWG | Ampacity (75°C) |
|-----|-----------------|
| 14 | 15A |
| 12 | 20A |
| 10 | 30A |
| 8 | 50A |
| 6 | 65A |

---

## Part 3: Main Panel Specification (5 points)

### Task 3.1: Determine Panel Size

Calculate main panel requirements:

```
Total 120V load: _______ A
Total 230/240V load: _______ A

Main Service Size = (Total load with demand factors) × 1.25
Recommended main panel: _______ A service

Main breaker size: _______ A
Panel bus rating: _______ A
```

### Task 3.2: Panel Configuration

Specify:
- **Panel type:** Load center or panelboard
- **Number of spaces:** _______ (count all circuits + spares)
- **Voltage configuration:** 120/240V single phase
- **Main breaker:** Yes/No and size
- **Indoor/outdoor rating:** _______
- **Enclosure type:** NEMA _______

### Task 3.3: Spare Capacity

- **Spare breaker spaces:** Minimum 20% (_____ spaces)
- **Load capacity margin:** _____ A remaining
- **Future expansion notes:**

---

## Part 4: Safety and Code Compliance (4 points)

### Task 4.1: Safety Features Checklist

Indicate which safety features you've incorporated:

- [ ] GFCI protection for all wet locations
- [ ] Proper grounding for all equipment
- [ ] Overcurrent protection for all circuits
- [ ] Disconnects for all motors
- [ ] Emergency shutoff clearly marked
- [ ] Panel located in dry, accessible location
- [ ] Proper working clearances around panel
- [ ] Circuit directory clearly labeled

### Task 4.2: Code Compliance Documentation

For key NEC requirements, cite specific code sections:

| Requirement | NEC Section | Compliance Method |
|-------------|-------------|-------------------|
| Motor circuit sizing | 430.24 | 125% continuous duty factor applied |
| GFCI in wet locations | 210.8 | All pumps and wet area circuits |
| Grounding | 250.xx | |
| Working clearances | 110.26 | |
| Voltage drop limits | 210.19(A) | |

---

## Deliverables

Submit a professional engineering package including:

1. **Cover Sheet** with your name, date, project title
2. **Load Calculation Table** (Task 1.1)
3. **Load Summary** by category (Task 1.2)
4. **Total Load Calculation** (Task 1.3)
5. **Circuit Schedule** - 120V circuits (Task 2.1)
6. **Circuit Schedule** - 230/240V circuits (Task 2.1)
7. **Panel Specification Sheet** (Task 3.1-3.3)
8. **Safety Features Checklist** (Task 4.1)
9. **Code Compliance Summary** (Task 4.2)

### Format Requirements:
- PDF format only
- Typed (Excel/Word acceptable, CAD preferred)
- Professional formatting
- All calculations shown
- Page numbers on all sheets
- Name in footer

---

## Grading Rubric

| Criteria | Excellent (22-25) | Proficient (18-21) | Developing (13-17) | Needs Improvement (0-12) |
|----------|-------------------|-------------------|------------------|------------------------|
| **Load Calculations** | All accurate, well-organized | Minor errors | Several calculation errors | Major errors |
| **Circuit Design** | Proper sizing, code compliant | Minor sizing issues | Some circuits undersized | Unsafe design |
| **Code Compliance** | Meets all NEC requirements | Minor code issues | Several code violations | Significant violations |
| **Panel Specification** | Complete, accurate | Minor omissions | Incomplete | Major gaps |
| **Professional Quality** | Excellent documentation | Good documentation | Basic documentation | Poor quality |

---

## Tips for Success

1. **Start with the load table** - this drives everything else
2. **Use motor conversion charts** - don't guess motor currents
3. **Apply demand factors correctly** - not all loads run simultaneously
4. **Size for the future** - include spare capacity
5. **Check voltage drop** - long runs may need larger wire
6. **Reference NEC** - cite code sections for major decisions
7. **Think safety first** - GFCI, grounding, clearances
8. **Be professional** - this mimics real-world deliverables

---

## Common Mistakes to Avoid

- Forgetting 125% factor for continuous loads
- Undersizing circuits for motor starting current
- Missing GFCI requirements for wet locations
- Inadequate spare capacity in panel
- Poor documentation of calculations
- Not checking voltage drop
- Missing equipment grounding
- Incorrect breaker sizing

---

## Reference Resources

### Provided Materials:
- NEC quick reference guide
- Motor full-load current tables (NEC Table 430.248)
- Conductor ampacity tables (NEC Table 310.16)
- Sample electrical load calculation spreadsheet

### Online Resources:
- Mike Holt NEC Code articles (allowed for reference)
- Calculator tools (must show work even if using calculators)

### Key Formulas:

```
Current (single phase): I = P / V
Current (motors): Use NEC tables
Voltage Drop: VD = 2 × K × I × L / CM
   where K = 12.9 for copper, I = current, L = length (ft), CM = circular mils

Wire sizing: Must handle 125% of continuous loads
Breaker sizing: Next standard size above calculated load
Panel sizing: Sum of loads with appropriate demand factors
```

---

## Real-World Application

This assignment mirrors the first phase of electrical design for any commercial facility. Your electrical package would be submitted to:
- Building department for permits
- Electrical contractors for bidding
- Electricians for installation
- Inspectors for approval

**Quality matters:** Electrical design errors can result in:
- Code violations and failed inspections
- Fire hazards
- Equipment damage
- Operational failures
- Costly redesigns during construction

---

*EcoFusion Academy - Course 301, Assignment 04*
