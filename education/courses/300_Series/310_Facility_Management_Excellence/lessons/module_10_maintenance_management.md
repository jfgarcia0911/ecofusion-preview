# Module 10: Maintenance Management

**Duration:** 60 minutes
**Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Implement Total Productive Maintenance (TPM) programs
2. Design preventive and predictive maintenance schedules
3. Manage maintenance workflows and work orders
4. Calculate and improve equipment reliability metrics
5. Build autonomous maintenance capability
6. Optimize spare parts inventory

---

## Maintenance Strategy Hierarchy

### Types of Maintenance

```
REACTIVE (Breakdown)
↓ Unplanned, expensive, disruptive
├─ Run to failure
└─ Emergency repairs

PREVENTIVE (Time-Based)
↓ Scheduled, planned, consistent
├─ Calendar-based PM
├─ Usage-based PM
└─ Condition-based monitoring

PREDICTIVE (Condition-Based)
↓ Data-driven, optimized, proactive
├─ Vibration analysis
├─ Thermal imaging
├─ Oil analysis
└─ Sensor monitoring

PROACTIVE (Continuous Improvement)
↓ Eliminate root causes
├─ Reliability engineering
├─ Design improvements
└─ Total Productive Maintenance
```

**Cost Comparison:**
- Reactive: $100 (baseline)
- Preventive: $30-40 (60-70% savings)
- Predictive: $15-25 (75-85% savings)

**Goal: Minimize reactive, maximize preventive/predictive**

---

## Total Productive Maintenance (TPM)

### The Eight Pillars of TPM

**1. Autonomous Maintenance**
- Operators maintain their own equipment
- Daily cleaning, inspection, lubrication
- Early problem detection
- Ownership and pride

**2. Planned Maintenance**
- Scheduled preventive work
- Based on manufacturer recommendations
- Tracked and optimized over time
- Zero unplanned downtime goal

**3. Quality Maintenance**
- Prevent defects at source
- Equipment capability studies
- Calibration and verification
- Quality built into process

**4. Focused Improvement**
- Eliminate chronic losses
- Cross-functional teams
- Data-driven analysis
- Continuous optimization

**5. Early Equipment Management**
- Design for maintainability
- Specify reliability requirements
- Commissioning procedures
- Lessons learned applied

**6. Training and Education**
- Skills development
- Certification programs
- Cross-training
- Knowledge sharing

**7. Safety, Health, Environment**
- Zero accidents
- Clean and organized
- Environmental compliance
- Sustainable practices

**8. Office TPM**
- Administrative efficiency
- Process improvement
- Support function optimization
- Paperwork reduction

---

## Preventive Maintenance Program

### PM Schedule Development

**Step 1: Equipment Inventory**
```
╔═══════════════════════════════════════════════════════════╗
║              CRITICAL EQUIPMENT REGISTER                  ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ Equipment ID│ Description    │ Criticality│ PM Frequency ║
║ ────────────┼────────────────┼────────────┼────────────  ║
║ PUMP-001    │ Main circ pump │ Critical   │ Weekly      ║
║ HVAC-001    │ Climate unit #1│ Critical   │ Monthly     ║
║ LED-BANK-01 │ Zone A lighting│ High       │ Quarterly   ║
║ SENSOR-EC-01│ EC probe #1    │ High       │ Monthly     ║
║ DOSING-01   │ Nutrient pump A│ Critical   │ Bi-weekly   ║
║                                                           ║
║ Criticality Levels:                                       ║
║ - Critical: Failure = crop loss, safety risk              ║
║ - High: Failure = reduced capacity, quality impact        ║
║ - Medium: Failure = inconvenience, workaround available   ║
║ - Low: Failure = minor disruption                         ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

**Step 2: Define PM Tasks**

**Example: Circulation Pump PM**
```
Equipment: Main Circulation Pump (PUMP-001)
Frequency: Weekly
Duration: 30 minutes
Technician: Level 2 or higher

WEEKLY PM CHECKLIST:
□ Visual inspection (leaks, damage)
□ Check mounting bolts (tighten if loose)
□ Listen for unusual noise
□ Verify flow rate (target: 500 GPM ±25)
□ Check motor temperature (should be warm, not hot)
□ Inspect electrical connections
□ Verify auto-start function
□ Clean strainer (if needed)
□ Record all readings on form

MONTHLY PM (in addition to weekly):
□ Check impeller for wear
□ Lubricate motor bearings
□ Measure vibration (baseline: <0.5 in/sec)
□ Test emergency shutdown
□ Verify backup pump switches on

ANNUAL PM (in addition to above):
□ Disassemble and inspect
□ Replace wear parts (seals, bearings)
□ Full cleaning and painting
□ Electrical system check
□ Update equipment record
```

### PM Schedule Format

**Monthly Calendar View:**
```
╔═══════════════════════════════════════════════════════════╗
║            DECEMBER 2025 PM SCHEDULE                      ║
╠═══════════════════════════════════════════════════════════╣
║                                                           ║
║ Week 1 (Dec 1-7):                                         ║
║ Mon: Pump-001 (weekly), Sensor calibration (monthly)     ║
║ Wed: HVAC-001 (monthly), LED inspection (quarterly)      ║
║ Fri: Pump-001 (weekly)                                    ║
║                                                           ║
║ Week 2 (Dec 8-14):                                        ║
║ Mon: Pump-001 (weekly), Dosing pump (bi-weekly)          ║
║ Thu: Water quality test (monthly)                         ║
║ Fri: Pump-001 (weekly)                                    ║
║                                                           ║
║ Week 3 (Dec 15-21):                                       ║
║ Mon: Pump-001 (weekly)                                    ║
║ Wed: Generator test (monthly)                             ║
║ Fri: Pump-001 (weekly), Dosing pump (bi-weekly)          ║
║                                                           ║
║ Week 4 (Dec 22-28):                                       ║
║ Mon: Pump-001 (weekly)                                    ║
║ Fri: Pump-001 (weekly), Year-end inventory               ║
║                                                           ║
║ Holiday shutdown: Dec 24-26 (no PM scheduled)            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
```

---

## Work Order System

### Work Order Types

| Type | Priority | Response Time | Example |
|------|----------|---------------|---------|
| **Emergency** | P1 | Immediate | Pump failure, no water flow |
| **Urgent** | P2 | Same day | Sensor drift, environmental issue |
| **Scheduled PM** | P3 | As scheduled | Weekly pump inspection |
| **Project** | P4 | As planned | New equipment installation |
| **Improvement** | P5 | When capacity | Upgrade to more efficient system |

### Work Order Workflow

```
1. REQUEST SUBMITTED
   ├─ Operator identifies need
   ├─ Creates work order (digital or paper)
   └─ Provides details and priority

2. REVIEW & APPROVE
   ├─ Maintenance supervisor reviews
   ├─ Assigns priority
   ├─ Estimates resources needed
   └─ Approves or requests more info

3. PLAN & SCHEDULE
   ├─ Identify parts needed
   ├─ Assign technician
   ├─ Schedule time slot
   └─ Coordinate with operations

4. EXECUTE
   ├─ Technician performs work
   ├─ Documents steps taken
   ├─ Tests and verifies fix
   └─ Cleans up work area

5. CLOSE
   ├─ Operations verifies completion
   ├─ Updates equipment history
   ├─ Analyzes for trends
   └─ Archives work order
```

### Work Order Template

```
╔══════════════════════════════════════════════════════╗
║              WORK ORDER #WO-2025-1234                ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║ Date Created: 12/10/2025        Priority: P2 (Urgent)║
║ Requested by: Maria Lopez       Dept: Production    ║
║ Equipment: HVAC-001             Location: Zone A    ║
║                                                      ║
║ PROBLEM DESCRIPTION:                                 ║
║ Temperature in Zone A reading 78°F, target is 72°F.  ║
║ Plants showing heat stress. Noticed around 9am today.║
║                                                      ║
║ ASSIGNED TO: John Smith (Tech Level 3)               ║
║ SCHEDULED: 12/10/2025 @ 1:00 PM                      ║
║ ESTIMATED DURATION: 2 hours                          ║
║                                                      ║
║ PARTS REQUIRED:                                      ║
║ □ Refrigerant (if needed)                            ║
║ □ Filters (spare on hand)                            ║
║                                                      ║
║ ─────────────────────────────────────────────        ║
║ WORK PERFORMED:                                      ║
║ 1. Checked refrigerant levels - OK                   ║
║ 2. Inspected evaporator coils - heavily clogged      ║
║ 3. Cleaned coils thoroughly                          ║
║ 4. Replaced air filter (overdue)                     ║
║ 5. Tested system - cooling restored                  ║
║ 6. Verified zone temp returned to 72°F               ║
║                                                      ║
║ ROOT CAUSE: Dirty coils reducing heat exchange       ║
║ PREVENTION: Increase coil cleaning frequency from    ║
║             quarterly to monthly                     ║
║                                                      ║
║ TIME: 1.5 hours    COST: $45 labor + $15 filter      ║
║                                                      ║
║ Completed by: John Smith      Date: 12/10/2025      ║
║ Verified by: Maria Lopez      Date: 12/10/2025      ║
║                                                      ║
║ Status: CLOSED                                       ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## Equipment Reliability Metrics

### Key Maintenance KPIs

**1. Mean Time Between Failures (MTBF)**
```
MTBF = Operating Time / Number of Failures

Example:
Equipment operated: 700 hours
Failures: 2
MTBF = 700 / 2 = 350 hours

Target: Increase MTBF over time
```

**2. Mean Time To Repair (MTTR)**
```
MTTR = Total Repair Time / Number of Repairs

Example:
Total repair time: 12 hours
Number of repairs: 4
MTTR = 12 / 4 = 3 hours

Target: Decrease MTTR (faster repairs)
```

**3. Equipment Uptime/Availability**
```
Availability = (Operating Time / Planned Time) × 100

Example:
Planned operating time: 168 hours/week
Downtime: 5 hours
Operating time: 163 hours
Availability = (163 / 168) × 100 = 97%

Target: >95% for critical equipment
```

**4. PM Compliance**
```
PM Compliance = (Completed PM / Scheduled PM) × 100

Example:
Scheduled PMs this month: 50
Completed on time: 47
PM Compliance = (47 / 50) × 100 = 94%

Target: 100% (all PM completed as scheduled)
```

**5. Emergency vs. Planned Work**
```
% Emergency = (Emergency Hours / Total Maint Hours) × 100

Example:
Total maintenance hours: 160
Emergency work: 25 hours
% Emergency = (25 / 160) × 100 = 16%

Target: <10% (most work planned, not reactive)
```

---

## Autonomous Maintenance

### Training Operators

**Step 1: Initial Cleaning**
- Teach proper cleaning
- Equipment structure and function
- Identify abnormalities

**Step 2: Countermeasures**
- Address sources of contamination
- Improve accessibility
- Reduce cleaning time

**Step 3: Standards**
- Create cleaning standards
- Define lubrication points
- Set inspection criteria

**Step 4: General Inspection**
- Train on components
- Teach inspection techniques
- Detect early failures

**Step 5: Autonomous Inspection**
- Operators perform routine checks
- Document findings
- Escalate issues promptly

**Step 6: Workplace Organization**
- Standardize and organize
- 5S implementation
- Visual management

**Step 7: Full Autonomous Maintenance**
- Independent operation
- Continuous improvement
- Pride in equipment

### Operator Daily Checks

**Example: Daily Equipment Checklist**
```
╔══════════════════════════════════════════════════════╗
║       OPERATOR DAILY EQUIPMENT CHECK                 ║
╠══════════════════════════════════════════════════════╣
║                                                      ║
║ Date: __________  Shift: ______  Operator: ______   ║
║                                                      ║
║ CIRCULATION PUMP (PUMP-001):                         ║
║ □ Visual: No leaks, clean                            ║
║ □ Sound: Normal (no grinding/squealing)              ║
║ □ Vibration: Low (touch test)                        ║
║ □ Temperature: Warm, not hot                         ║
║ □ Flow rate: 500 GPM ±25 (check gauge)               ║
║ □ Pressure: 35 PSI ±5 (check gauge)                  ║
║                                                      ║
║ LIGHTING SYSTEM (LED-BANK-01):                       ║
║ □ All fixtures lit                                   ║
║ □ No flickering                                      ║
║ □ Fixtures clean (no dust buildup)                   ║
║ □ No unusual heat                                    ║
║                                                      ║
║ CLIMATE CONTROL (HVAC-001):                          ║
║ □ Unit running per schedule                          ║
║ □ No unusual noise                                   ║
║ □ Air flow normal                                    ║
║ □ Temperature on target                              ║
║ □ Condensate draining                                ║
║                                                      ║
║ ISSUES FOUND (if any):                               ║
║ _________________________________________________    ║
║ _________________________________________________    ║
║                                                      ║
║ Actions taken:                                       ║
║ □ Created work order #______                         ║
║ □ Notified supervisor                                ║
║ □ No issues                                          ║
║                                                      ║
║ Operator Signature: _____________ Time: ______       ║
║                                                      ║
╚══════════════════════════════════════════════════════╝
```

---

## Predictive Maintenance

### Condition Monitoring Techniques

**1. Vibration Analysis**
- Detects bearing wear, imbalance, misalignment
- Handheld meters or permanent sensors
- Trend analysis over time
- Example: Motor vibration increasing → Schedule bearing replacement

**2. Thermal Imaging**
- Identifies hot spots (electrical issues, friction)
- Non-contact infrared cameras
- Regular scans of electrical panels, motors
- Example: Hot connection → Tighten before failure

**3. Ultrasonic Testing**
- Detects leaks, electrical arcing
- High-frequency sound detection
- Useful for air leaks, steam traps
- Example: Air leak detection in compressed air system

**4. Oil Analysis**
- Wear particles indicate component degradation
- Regular sampling and lab testing
- Trending for failure prediction
- Example: Increasing metal particles → Plan overhaul

**5. Sensor Data Analytics**
- Continuous monitoring of operating parameters
- Automated alerts for out-of-range conditions
- Trend analysis and prediction
- Example: EC sensor drift → Schedule calibration

### Implementing Predictive Maintenance

**Start Small:**
1. Identify most critical equipment
2. Select appropriate monitoring technique
3. Establish baseline data
4. Set alert thresholds
5. Train team to respond
6. Expand program over time

---

## Spare Parts Management

### Criticality-Based Stocking

**A Items (Critical):**
- Long lead time + critical equipment
- Keep in stock
- Example: Circulation pump impeller

**B Items (Important):**
- Shorter lead time or less critical
- Stock fast-moving items
- Example: HVAC filters

**C Items (Low Priority):**
- Readily available or non-critical
- Order as needed
- Example: General fasteners

### Inventory Optimization

**Min-Max System:**
```
Reorder Point = (Lead Time × Usage Rate) + Safety Stock

Example: LED Grow Light Fixture
Lead time: 2 weeks
Usage rate: 1 per month (0.25 per week)
Safety stock: 1 unit

Reorder point = (2 × 0.25) + 1 = 1.5 ≈ 2 units

Stock levels:
- Minimum: 2 units
- Maximum: 4 units (3-month supply)
- When inventory hits 2, order 2 more
```

**Kitting:**
- Pre-package common PM parts
- Reduces downtime finding parts
- Example: "Monthly pump PM kit" with filter, seals, lubricant

---

## Maintenance Planning Best Practices

### Weekly Planning Meeting

**Agenda:**
```
1. Review upcoming week schedule
2. Identify resource conflicts
3. Confirm parts availability
4. Coordinate with operations (downtime)
5. Assign work orders
6. Review backlog priorities
```

### Maintenance Backlog Management

**Target:**
- 2-4 weeks of planned work in backlog
- Too little: Idle technicians
- Too much: Work never gets done

**Prioritization:**
- Safety issues first
- Critical equipment next
- Improvement projects last

---

## Key Takeaways

1. **Preventive over reactive** - Schedule maintenance before failures
2. **TPM engages everyone** - Operators maintain, technicians improve
3. **Plan and schedule** - Organized maintenance is efficient maintenance
4. **Measure reliability** - Track MTBF, MTTR, availability
5. **Autonomous maintenance** - Empower operators to care for equipment
6. **Predictive when possible** - Condition monitoring prevents failures
7. **Manage spare parts** - Right parts available when needed
8. **Continuous improvement** - Always optimizing maintenance strategy

---

## Practical Exercise

### Develop a PM Program

**For one critical piece of equipment:**
1. List all components
2. Define PM tasks (daily, weekly, monthly, annual)
3. Create PM checklist
4. Establish spare parts requirements
5. Calculate current MTBF and availability
6. Set improvement targets
7. Train operators on daily checks

---

## Resources & Tools

### Templates
- PM Schedule Template
- Work Order Form
- Equipment History Card
- Spare Parts Inventory Log

### Software
- CMMS (Computerized Maintenance Management Systems)
- Equipment monitoring platforms
- Inventory management tools

### References
- "TPM: Total Productive Maintenance" by JIPM
- "Maintenance Planning and Scheduling" by Doc Palmer
- "Reliability Centered Maintenance" by Moubray

### Next Steps
- Complete Module 10 Quiz
- Create PM schedule for critical equipment
- Implement operator daily checks
- Track one maintenance KPI for one month

---

**Module 10 Complete**
**Next Module:** Safety Management - Creating a Zero-Incident Culture

*EcoFusion Academy - Course 310: Facility Management Excellence*
