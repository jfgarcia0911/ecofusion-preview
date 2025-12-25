# Assignment 4: CEA Facility Commissioning Protocol Development
## Course 401: CEA Facility Design & Architecture

---

## Assignment Overview

**Type:** Take-Home Assignment
**Duration:** 1-2 hours
**Points:** 30 points
**Learning Objectives:** Develop comprehensive commissioning protocol for CEA facility systems
**Difficulty Level:** Expert - Professional Documentation

---

## Assignment Context

You are the commissioning manager for a newly constructed 25,000 sq ft greenhouse facility with supplemental LED lighting, automated climate control, and recirculating hydroponics. The facility is complete and ready for systems commissioning before crop production begins.

Your task is to develop a detailed commissioning protocol that will ensure all systems perform according to design specifications and are ready for operational handover.

---

## Facility Systems Overview

**Environmental Control:**
- HVAC: Rooftop unit with dehumidification, heat recovery
- Supplemental heating: Natural gas boiler
- Evaporative cooling pads and HAF fans
- Climate control system: PLC-based with touchscreen HMI
- Sensors: Temperature (12), humidity (12), CO₂ (4), light (8)

**Lighting System:**
- LED fixtures: 600 units, 277V, networked control
- Lighting control: Automated scheduler with dimming
- Light sensors: PAR sensors for feedback control

**Irrigation System:**
- Nutrient injection: 4-channel dosing system
- Irrigation: Drip emitters with zone valves (6 zones)
- Recirculation: Pumps, filters, UV sterilization
- Monitoring: pH, EC, water level, flow meters

**Structural/Utilities:**
- Backup generator: 150 kW diesel
- Water systems: Municipal supply, storage tank, treatment
- Electrical: 800A service, distribution panels, UPS for controls

---

## Deliverable Requirements

Create a **Commissioning Protocol Document** with the following sections:

---

### Section 1: Commissioning Scope and Objectives (5 points)

**1.1 Project Information**
- Facility name and location
- Commissioning team roles and responsibilities
- Schedule and timeline for commissioning activities
- Success criteria for commissioning completion

**1.2 Systems to be Commissioned**
List all major systems with brief description:
- Environmental control systems
- Lighting systems
- Irrigation and fertigation
- Electrical and emergency power
- Monitoring and control systems

**Requirements:**
- Clear statement of commissioning scope
- Identified team members and roles
- Realistic timeline (typically 2-4 weeks)
- Measurable success criteria

---

### Section 2: Pre-Functional Checklists (8 points)

Develop pre-functional verification checklists for THREE of the following systems. Each checklist should include minimum 10 verification items.

**Choose 3 systems:**

**Option A: HVAC System Pre-Functional Checklist**

| Item | Verification Required | Pass/Fail | Notes |
|------|----------------------|-----------|-------|
| 1. Rooftop unit electrical connections verified | Check voltage, phasing, grounding | ☐ P ☐ F | |
| 2. Refrigerant charge verified per nameplate | Check subcooling/superheat | ☐ P ☐ F | |
| 3. Control wiring terminations inspected | Verify at controller and sensors | ☐ P ☐ F | |
| 4. Air filters installed and clean | Visual inspection | ☐ P ☐ F | |
| 5. [Continue for 10+ items] | | | |

**Option B: LED Lighting System Pre-Functional Checklist**

**Option C: Irrigation/Fertigation System Pre-Functional Checklist**

**Option D: Backup Generator System Pre-Functional Checklist**

**Option E: Climate Control System Pre-Functional Checklist**

---

### Section 3: Functional Performance Testing (10 points)

Develop detailed functional test procedures for TWO systems. Each procedure should include:
- Test objectives
- Required instrumentation
- Step-by-step test methodology
- Acceptance criteria
- Data collection forms

**Example Format:**

**Functional Test 1: HVAC System Cooling Capacity Verification**

**Objective:** Verify rooftop unit delivers rated cooling capacity and maintains setpoint.

**Instrumentation Required:**
- Calibrated thermocouples (8)
- Anemometer for airflow measurement
- Power meter for electrical draw
- Psychrometer for humidity

**Test Procedure:**
1. Set facility to maximum cooling load (all lights on, doors closed)
2. Configure control system for 72°F setpoint
3. Monitor temperatures at 8 locations for 2-hour stabilization
4. Record: Supply air temp, return air temp, outside air temp, RH
5. Measure supply air CFM at main supply
6. Calculate: Cooling capacity (BTU/hr) = 1.08 × CFM × ΔT
7. Record electrical power draw and calculate EER

**Acceptance Criteria:**
- Space temperature maintains 72°F ± 2°F at all locations
- Temperature variance between zones < 3°F
- Cooling capacity ≥ 95% of design (XXX MBH)
- EER ≥ manufacturer specification
- Control system responds to setpoint changes within 5 minutes

**Data Collection Form:** [Include sample data table]

---

### Section 4: Integrated Systems Testing (4 points)

Describe the integrated systems test that verifies proper interaction between:
1. Climate control system
2. Lighting control
3. Irrigation control

**Test Scenario:**
Describe a comprehensive 24-hour test cycle that demonstrates:
- Automated day/night climate transitions
- Lighting schedule execution
- Irrigation event triggering
- Alarm and safety systems
- Data logging and trending

**Success Criteria:**
Define specific metrics that demonstrate successful integration.

---

### Section 5: Training and Documentation Requirements (3 points)

**5.1 Operator Training Plan**
Outline training program for facility operators including:
- Topics to be covered
- Duration and format
- Hands-on practice requirements
- Competency verification method

**5.2 Documentation Deliverables**
List all documentation required at commissioning completion:
- As-built drawings
- Equipment manuals
- Control system programming documentation
- Preventive maintenance schedules
- Warranty information
- Test reports and data

---

## Submission Requirements

**Format:**
- Professional document format (Word or PDF)
- Include title page with project information
- Use tables and checklists as shown in examples
- Length: 8-12 pages
- Include page numbers and section headers

**Content Requirements:**
- All 5 sections completed as specified
- Professional technical writing
- Realistic and implementable procedures
- Industry-standard terminology
- Cite relevant standards (ASHRAE, NEC, etc.) where applicable

**Submission:**
- Upload to course platform
- Due: [7 days from assignment date]
- Late penalty: 10% per day up to 3 days

---

## Grading Rubric

### Section 1: Scope and Objectives (5 points)
- **5:** Comprehensive scope, clear roles, realistic timeline, measurable criteria
- **4:** Minor gaps in scope or timeline
- **3:** Basic information present but lacks detail
- **0-2:** Incomplete or unrealistic

### Section 2: Pre-Functional Checklists (8 points)
- **7-8:** Three complete checklists with 10+ relevant items each, professional format
- **5-6:** Checklists complete but with minor gaps or lack of detail
- **3-4:** Checklists incomplete or missing key verification steps
- **0-2:** Inadequate checklists

### Section 3: Functional Testing (10 points)
- **9-10:** Two detailed test procedures with clear methodology, appropriate instrumentation, measurable criteria
- **7-8:** Good procedures with minor gaps
- **5-6:** Basic procedures lacking detail or missing acceptance criteria
- **0-4:** Incomplete or inadequate test procedures

### Section 4: Integrated Testing (4 points)
- **4:** Comprehensive 24-hour test with clear scenario and success criteria
- **3:** Good test description with minor gaps
- **2:** Basic test concept lacking detail
- **0-1:** Inadequate or missing

### Section 5: Training and Documentation (3 points)
- **3:** Complete training plan and documentation list
- **2:** Minor gaps in plan or documentation list
- **1:** Minimal or incomplete
- **0:** Missing

**Professional Presentation and Format:**
- Bonus up to 2 points for exceptional professional quality
- Deduction up to 3 points for poor formatting or unprofessional presentation

---

## Learning Outcomes

Upon completion, students will demonstrate:
- Understanding of commissioning process for CEA facilities
- Ability to develop verification checklists and test procedures
- Knowledge of functional testing methodologies
- Professional technical documentation skills
- Systems integration verification competency

This assignment produces deliverables similar to actual commissioning plans used in industry for facility startup and operational acceptance.

---

## Professional Application

Real commissioning protocols for CEA facilities:
- Are often 50-100 pages for comprehensive facilities
- Include detailed test forms and data sheets
- Reference applicable codes and standards
- Serve as contractual deliverables for project closeout
- Are used for warranty verification and operational training

This assignment develops skills directly applicable to commissioning manager and facility startup roles.

---

## Resources

**Recommended References:**
- ASHRAE Guideline 0: The Commissioning Process
- ASHRAE Guideline 1.1: HVAC&R Technical Requirements
- Building Commissioning Association (BCA) Best Practices
- NEBB Procedural Standards for Testing, Adjusting, and Balancing

---

**Assignment Version:** 1.0
**Last Updated:** December 2025
