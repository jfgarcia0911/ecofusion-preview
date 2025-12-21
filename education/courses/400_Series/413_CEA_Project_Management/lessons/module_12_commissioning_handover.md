# Module 12: Commissioning, Startup & Handover

## Learning Objectives

- Develop comprehensive commissioning plans
- Execute systematic startup and performance validation
- Conduct effective training programs for operations staff
- Manage warranty documentation and operational transition
- Ensure successful handover to operations team

---

## 1. Commissioning Planning

### Commissioning Process Overview

```
COMMISSIONING PHASES FOR CEA FACILITIES
+===================================================================+
| PHASE 1: DESIGN REVIEW (During Design)                           |
| - Review design for operability and maintainability              |
| - Verify design meets owner's requirements                        |
| - Identify potential commissioning issues early                   |
|                                                                   |
| PHASE 2: CONSTRUCTION OVERSIGHT (During Construction)             |
| - Verify installation per drawings and specs                      |
| - Witness factory acceptance tests (FAT)                          |
| - Review contractor startup procedures                            |
| - Develop commissioning test procedures                           |
|                                                                   |
| PHASE 3: PRE-FUNCTIONAL TESTING (Systems Complete)                |
| - Verify systems safe to operate                                  |
| - Check static conditions (no power/fluid)                        |
| - Verify proper installation and connections                      |
| - Document deficiencies                                           |
|                                                                   |
| PHASE 4: FUNCTIONAL TESTING (Systems Operational)                 |
| - Test individual systems under load                              |
| - Verify performance meets specifications                         |
| - Site acceptance testing (SAT)                                   |
| - Document actual performance                                     |
|                                                                   |
| PHASE 5: INTEGRATED SYSTEMS TESTING                               |
| - Test systems working together                                   |
| - Verify control sequences and interlocks                         |
| - Optimize system performance                                     |
| - Validate energy models                                          |
|                                                                   |
| PHASE 6: TRAINING & HANDOVER                                      |
| - Operator training on all systems                                |
| - Document normal operations procedures                           |
| - Transfer O&M manuals and as-builts                              |
| - Warranty documentation                                          |
|                                                                   |
| PHASE 7: OPERATIONAL VERIFICATION (Post-Occupancy)                |
| - Monitor first 6-12 months of operation                          |
| - Seasonal performance validation                                 |
| - Fine-tuning and optimization                                    |
| - Warranty issue resolution                                       |
+===================================================================+
```

### Commissioning Plan Structure

```
TABLE OF CONTENTS - CEA FACILITY COMMISSIONING PLAN
+===================================================================+
| 1.0 EXECUTIVE SUMMARY                                             |
|     1.1 Project overview                                          |
|     1.2 Commissioning scope and objectives                        |
|     1.3 Key personnel and responsibilities                        |
|                                                                   |
| 2.0 COMMISSIONING TEAM ORGANIZATION                               |
|     2.1 Commissioning Authority (CxA)                             |
|     2.2 Design team roles                                         |
|     2.3 Contractor responsibilities                               |
|     2.4 Owner's team participation                                |
|                                                                   |
| 3.0 SYSTEMS TO BE COMMISSIONED                                    |
|     3.1 HVAC systems (chillers, air handlers, dehumidifiers)      |
|     3.2 Electrical systems (power distribution, lighting)         |
|     3.3 Growing systems (irrigation, fertigation, racking)        |
|     3.4 Automation and controls (BMS/SCADA)                       |
|     3.5 Life safety systems (fire alarm, emergency power)         |
|                                                                   |
| 4.0 COMMISSIONING PROCESS AND SCHEDULE                            |
|     4.1 Design review milestones                                  |
|     4.2 Construction oversight activities                         |
|     4.3 Testing schedule and sequence                             |
|     4.4 Training schedule                                         |
|                                                                   |
| 5.0 DOCUMENTATION REQUIREMENTS                                    |
|     5.1 Submittal reviews                                         |
|     5.2 Installation checklists                                   |
|     5.3 Test procedures and forms                                 |
|     5.4 Commissioning reports                                     |
|                                                                   |
| 6.0 TESTING PROCEDURES                                            |
|     6.1 Pre-functional test procedures (by system)                |
|     6.2 Functional test procedures (by system)                    |
|     6.3 Integrated systems test procedures                        |
|     6.4 Performance verification criteria                         |
|                                                                   |
| 7.0 TRAINING PLAN                                                 |
|     7.1 Training requirements by system                           |
|     7.2 Training schedule                                         |
|     7.3 Training documentation                                    |
|                                                                   |
| 8.0 OPERATIONAL READINESS                                         |
|     8.1 O&M manual requirements                                   |
|     8.2 As-built documentation                                    |
|     8.3 Warranty documentation                                    |
|     8.4 Spare parts and special tools                             |
|                                                                   |
| 9.0 HANDOVER AND CLOSEOUT                                         |
|     9.1 Substantial completion requirements                       |
|     9.2 Final acceptance criteria                                 |
|     9.3 Warranty period activities                                |
|                                                                   |
| APPENDICES                                                        |
|     A. Equipment lists and data sheets                            |
|     B. Pre-functional test forms                                  |
|     C. Functional test forms                                      |
|     D. Integrated test forms                                      |
|     E. Training curricula                                         |
|     F. Issue log template                                         |
+===================================================================+
```

---

## 2. Startup Procedures

### System Startup Sequence

```
HVAC SYSTEM STARTUP SEQUENCE (Example)
+===================================================================+
| CHILLER STARTUP - DETAILED PROCEDURE                              |
+===================================================================+

PRE-START SAFETY CHECKS:
☐ Area clear of personnel and obstructions
☐ Lock-out/tag-out removed (authorized personnel only)
☐ Safety guards and panels in place
☐ Emergency stop buttons tested
☐ Fire extinguisher readily available
☐ Personal protective equipment worn

PRE-START MECHANICAL CHECKS:
☐ Oil level correct (per sight glass)
☐ Refrigerant charge verified (per nameplate)
☐ All valves in correct position (verify lineup)
☐ Strainers cleaned
☐ Expansion tank pressure correct
☐ No visible leaks (refrigerant, water, oil)
☐ All gauges operational
☐ Vibration isolators freed from shipping blocks

PRE-START ELECTRICAL CHECKS:
☐ Power available at correct voltage
☐ Phase rotation correct (RMS meter)
☐ Control power energized
☐ All safety interlocks functional
☐ VFD (if equipped) configured correctly
☐ Communication to BMS established

INITIAL STARTUP (No-Load):
1. Start chilled water pumps (verify flow)
2. Start condenser water pumps (verify flow)
3. Verify water temperatures stable
4. Initiate chiller start sequence
5. Monitor compressor amp draw (within range)
6. Check for abnormal noise or vibration
7. Verify oil pressure and temperature
8. Verify refrigerant pressures (suction, discharge)
9. Monitor leaving chilled water temperature
10. Verify capacity control responding

LOAD TESTING:
1. Increase load gradually (25%, 50%, 75%, 100%)
2. At each load step:
   - Verify stable operation (15 min minimum)
   - Record temperatures (entering/leaving, refrigerant)
   - Record pressures (refrigerant, water)
   - Record power consumption (kW, amps, PF)
   - Check vibration and noise
   - Verify no alarms
3. Calculate efficiency (kW/ton) at each load
4. Verify performance vs. specifications

CONTROL VERIFICATION:
☐ Setpoint control accuracy (±1°F)
☐ Staging control (if multiple compressors)
☐ Safeties trigger correctly (simulate faults)
☐ Alarms annunciate to BMS
☐ Remote start/stop from BMS
☐ Data points logging correctly

SHUTDOWN TEST:
1. Normal shutdown sequence
2. Emergency stop test
3. Verify all components stop properly
4. Check for leaks after shutdown
5. Verify restart capability

DOCUMENTATION:
☐ Startup checklist completed and signed
☐ Performance data recorded
☐ Photos of nameplates and settings
☐ Issues documented (if any)
☐ As-left condition documented

SIGN-OFF:
Contractor: _____________________ Date: _______
CxA: ____________________________ Date: _______
Owner: __________________________ Date: _______
```

---

## 3. Training Programs

### Operations Training Plan

```
CEA FACILITY OPERATIONS TRAINING PROGRAM
+===================================================================+
| TRAINING OBJECTIVE: Prepare operations team to safely and         |
| effectively operate and maintain all facility systems             |
+===================================================================+

TRAINING TEAM:
- Commissioning Agent (overall coordination)
- Equipment Vendors (system-specific training)
- Contractors (installation and troubleshooting)
- Owner's Operations Manager (internal procedures)

TRAINING AUDIENCE:
- Facility Manager (1)
- Head Grower (1)
- Maintenance Technicians (2)
- Growers/Operators (6)
- Management/Admin (2)

TRAINING MODULES:

MODULE 1: FACILITY OVERVIEW (4 hours - All staff)
+-------------------------------------------------------------------+
| Content:                                                          |
| - Facility design and capabilities                                |
| - System integration overview                                     |
| - Safety systems and emergency procedures                         |
| - Key performance indicators                                      |
|                                                                   |
| Delivery: Classroom presentation + facility tour                  |
| Assessment: Written quiz (80% passing)                            |
+===================================================================+

MODULE 2: HVAC SYSTEMS (8 hours - Fac Mgr, Maint Tech)
+-------------------------------------------------------------------+
| Content:                                                          |
| - Chiller operation and controls                                  |
| - Air handling and distribution                                   |
| - Dehumidification system                                         |
| - Routine maintenance procedures                                  |
| - Troubleshooting common issues                                   |
|                                                                   |
| Delivery: Classroom (2 hrs) + Hands-on (6 hrs)                    |
| Assessment: Demonstrate startup/shutdown procedure                |
+===================================================================+

MODULE 3: LIGHTING SYSTEMS (4 hours - All growers)
+-------------------------------------------------------------------+
| Content:                                                          |
| - LED system overview and controls                                |
| - Light intensity and spectrum adjustment                         |
| - Photoperiod programming                                         |
| - Fixture maintenance and cleaning                                |
| - Troubleshooting fixture failures                                |
|                                                                   |
| Delivery: Classroom (1 hr) + Hands-on (3 hrs)                     |
| Assessment: Program lighting schedule for crop rotation           |
+===================================================================+

MODULE 4: IRRIGATION & FERTIGATION (6 hours - Head Grower + Growers)
+-------------------------------------------------------------------+
| Content:                                                          |
| - System overview and water treatment                             |
| - Nutrient mixing and dosing                                      |
| - pH and EC control                                               |
| - Irrigation scheduling                                           |
| - System maintenance and cleaning                                 |
| - Water quality testing                                           |
|                                                                   |
| Delivery: Classroom (2 hrs) + Hands-on (4 hrs)                    |
| Assessment: Mix nutrient solution to specification                |
+===================================================================+

MODULE 5: BUILDING MANAGEMENT SYSTEM (8 hours - Fac Mgr, Maint Tech)
+-------------------------------------------------------------------+
| Content:                                                          |
| - BMS architecture and navigation                                 |
| - Monitoring dashboards and data logging                          |
| - Setpoint adjustments                                            |
| - Alarm management and response                                   |
| - Trend analysis                                                  |
| - Generating reports                                              |
| - Basic troubleshooting                                           |
|                                                                   |
| Delivery: Hands-on computer-based training                        |
| Assessment: Respond to simulated alarm scenarios                  |
+===================================================================+

MODULE 6: SAFETY & EMERGENCY RESPONSE (4 hours - All staff)
+-------------------------------------------------------------------+
| Content:                                                          |
| - Fire alarm and evacuation                                       |
| - Emergency power systems                                         |
| - Chemical safety (fertilizers, cleaners)                         |
| - Confined space entry (if applicable)                            |
| - Lock-out/tag-out procedures                                     |
| - First aid and emergency contacts                                |
|                                                                   |
| Delivery: Classroom + drills                                      |
| Assessment: Participate in emergency drill                        |
| Certification: OSHA 10-hour (or equivalent)                       |
+===================================================================+

MODULE 7: PREVENTIVE MAINTENANCE (6 hours - Fac Mgr, Maint Tech)
+-------------------------------------------------------------------+
| Content:                                                          |
| - PM schedule and procedures                                      |
| - Filter changes and cleaning                                     |
| - Calibration procedures                                          |
| - Lubrication schedules                                           |
| - Parts inventory management                                      |
| - Work order system                                               |
|                                                                   |
| Delivery: Classroom (2 hrs) + Hands-on (4 hrs)                    |
| Assessment: Perform sample PM tasks                               |
+===================================================================+

TRAINING SCHEDULE:
Week 1: Modules 1, 6 (All staff)
Week 2: Modules 2, 5, 7 (Technical staff)
Week 3: Modules 3, 4 (Growers + technical)
Week 4: Refresher and assessments

TRAINING DOCUMENTATION:
☐ Attendance records (sign-in sheets)
☐ Training materials (presentations, manuals)
☐ Assessment results
☐ Certifications issued
☐ Training effectiveness evaluation (30-day follow-up)
```

---

## 4. Handover Documentation

### O&M Manual Requirements

```
OPERATIONS & MAINTENANCE MANUAL - TABLE OF CONTENTS
+===================================================================+
| VOLUME 1: GENERAL INFORMATION                                     |
+-------------------------------------------------------------------+
| Section 1: Project Overview and Facility Description              |
| - Facility layout and design basis                                |
| - System descriptions and interconnections                        |
| - Design parameters and performance criteria                      |
|                                                                   |
| Section 2: As-Built Drawings                                      |
| - Architectural plans                                             |
| - Mechanical plans and diagrams                                   |
| - Electrical one-line and panel schedules                         |
| - Plumbing and process flow diagrams                              |
| - Controls network architecture                                   |
| - Equipment locations and access                                  |
|                                                                   |
| Section 3: Emergency Procedures                                   |
| - Emergency shutdown procedures                                   |
| - Fire response                                                   |
| - Utility failure response                                        |
| - Environmental release response                                  |
| - Emergency contacts                                              |
+===================================================================+

VOLUME 2: EQUIPMENT DOCUMENTATION (By System)
+-------------------------------------------------------------------+
| For Each Major Equipment Item:                                    |
| - Equipment schedule and nameplate data                           |
| - Manufacturer's operation manual                                 |
| - Manufacturer's maintenance manual                               |
| - Parts lists and part numbers                                    |
| - Warranty information                                            |
| - Startup and commissioning reports                               |
| - Performance test data                                           |
| - Troubleshooting guide                                           |
| - Vendor contact information                                      |
+===================================================================+

VOLUME 3: OPERATIONS PROCEDURES
+-------------------------------------------------------------------+
| Section 1: Normal Operations                                      |
| - Startup procedures (seasonal, daily)                            |
| - Operating setpoints and adjustments                             |
| - Monitoring and data review                                      |
| - Routine operator tasks                                          |
| - Shutdown procedures                                             |
|                                                                   |
| Section 2: Preventive Maintenance                                 |
| - PM schedule (daily, weekly, monthly, annual)                    |
| - PM procedures (step-by-step)                                    |
| - Inspection checklists                                           |
| - Calibration procedures and schedules                            |
| - Filter replacement schedules                                    |
| - Lubrication schedules                                           |
|                                                                   |
| Section 3: Troubleshooting                                        |
| - Common problems and solutions                                   |
| - Alarm response guides                                           |
| - Diagnostic procedures                                           |
| - When to call for service                                        |
+===================================================================+

VOLUME 4: COMPLIANCE & REFERENCE
+-------------------------------------------------------------------+
| - Building permits and certificates                               |
| - Code compliance documentation                                   |
| - Food safety procedures                                          |
| - Environmental permits                                           |
| - Safety data sheets (SDS)                                        |
| - Training records                                                |
| - Warranty certificates                                           |
| - Service contracts                                               |
| - Spare parts inventory                                           |
+===================================================================+

FORMAT REQUIREMENTS:
- Organized in 3-ring binders by system
- Tabbed dividers for easy navigation
- Plastic sheet protectors for frequently used procedures
- Digital copy provided (searchable PDF)
- Revisions tracked with revision log
- Accessible to all operations staff
```

---

## 5. Operational Transition

### Transition Checklist

```
OPERATIONAL TRANSITION CHECKLIST
+===================================================================+
| SYSTEMS READINESS                                                 |
| ☐ All systems commissioned and performing to spec                 |
| ☐ Punch list 95% complete (Category A items 100%)                 |
| ☐ Certificate of Occupancy obtained                               |
| ☐ Utilities active and metered                                    |
| ☐ BMS operational and monitored                                   |
| ☐ Safety systems tested and operational                           |
|                                                                   |
| DOCUMENTATION COMPLETE                                            |
| ☐ O&M manuals delivered and reviewed                              |
| ☐ As-built drawings updated and approved                          |
| ☐ Warranty documentation organized                                |
| ☐ Equipment service contacts list                                 |
| ☐ Spare parts inventory received                                  |
| ☐ Commissioning reports finalized                                 |
|                                                                   |
| TRAINING COMPLETE                                                 |
| ☐ All staff trained on relevant systems                           |
| ☐ Competency assessments passed                                   |
| ☐ Training records documented                                     |
| ☐ Vendor contact list for technical support                       |
|                                                                   |
| OPERATIONAL PROCEDURES ESTABLISHED                                |
| ☐ Standard operating procedures (SOPs) written                    |
| ☐ PM schedules programmed into CMMS                               |
| ☐ Work order system operational                                   |
| ☐ Inventory management system set up                              |
| ☐ Data logging and reporting automated                            |
|                                                                   |
| OPERATIONAL SUPPORT                                               |
| ☐ Service contracts in place (if required)                        |
| ☐ Monitoring and support during startup period arranged           |
| ☐ Commissioning agent available for 6-month warranty period       |
| ☐ Operations team has 24/7 emergency support contacts             |
|                                                                   |
| FIRST PRODUCTION READINESS                                        |
| ☐ Growing media and supplies on hand                              |
| ☐ Seeds/transplants acquired                                      |
| ☐ Nutrient stock prepared                                         |
| ☐ Packaging materials received                                    |
| ☐ Initial crop plan finalized                                     |
| ☐ Market/customer orders confirmed                                |
|                                                                   |
| FINANCIAL CLOSEOUT                                                |
| ☐ Final payment application approved                              |
| ☐ Retainage release (less punch list holdback)                    |
| ☐ Change orders finalized and paid                                |
| ☐ Lien releases obtained                                          |
| ☐ As-built budget reconciled                                      |
|                                                                   |
| FORMAL HANDOVER                                                   |
| ☐ Handover meeting conducted                                      |
| ☐ Keys and access credentials transferred                         |
| ☐ Facility walk-through with operations team                      |
| ☐ Handover certificate signed                                     |
| ☐ Warranty period start date established                          |
|                                                                   |
+===================================================================+

SIGN-OFF:

Contractor: _______________________ Date: _______
"All work complete per contract, systems operational"

Commissioning Agent: _______________ Date: _______
"Systems commissioned and performing to specification"

Project Manager: ___________________ Date: _______
"Project deliverables complete and accepted"

Operations Manager: ________________ Date: _______
"Facility accepted, operations team ready"

Owner/Sponsor: _____________________ Date: _______
"Project accepted, authorize operational transition"
```

---

## Key Takeaways

1. **Commissioning ensures performance** - Testing validates that money spent delivers promised results.

2. **Training is critical to success** - Best equipment fails without competent operators.

3. **Documentation enables operations** - O&M manuals must be complete, accurate, and accessible.

4. **Systematic handover prevents gaps** - Checklist-driven process ensures nothing forgotten.

5. **Warranty period is not "done"** - Ongoing monitoring catches issues while under warranty.

6. **First crop is part of commissioning** - Real production tests system integration fully.

---

## Next Module

In **Module 13: Post-Project Evaluation & Lessons Learned**, we will explore project performance assessment, stakeholder satisfaction, and capturing knowledge for future projects.

---

*Module 12 of 14 - CEA Project Management*
