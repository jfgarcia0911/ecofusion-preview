# Module 9: Quality Management & Technical Assurance

## Learning Objectives

By the end of this module, you will be able to:
- Develop quality management plans for CEA projects
- Create inspection and test plans (ITP) for critical systems
- Implement Factory Acceptance Testing (FAT) procedures
- Conduct Site Acceptance Testing (SAT) effectively
- Manage non-conformances and corrective actions
- Ensure technical performance meets specifications

---

## 1. Quality Planning

### Quality Management Framework

```
QUALITY MANAGEMENT SYSTEM FOR CEA PROJECTS
+===================================================================+
|                                                                   |
| QUALITY PLANNING                                                  |
| - Define quality standards and requirements                       |
| - Identify inspection/test points                                 |
| - Develop quality management plan                                 |
| - Create inspection and test plans (ITP)                          |
|         ↓                                                          |
| QUALITY ASSURANCE (QA)                                            |
| - Process-focused prevention activities                           |
| - Design reviews and audits                                       |
| - Contractor qualification                                        |
| - Training and certification verification                         |
|         ↓                                                          |
| QUALITY CONTROL (QC)                                              |
| - Product-focused detection activities                            |
| - Inspections and testing                                         |
| - Measurements and verification                                   |
| - Non-conformance management                                      |
|         ↓                                                          |
| CONTINUOUS IMPROVEMENT                                            |
| - Root cause analysis                                             |
| - Lessons learned                                                 |
| - Process optimization                                            |
|                                                                   |
+===================================================================+
```

### Quality Standards for CEA Facilities

```
APPLICABLE STANDARDS & CODES
+===================================================================+
| BUILDING & SAFETY:                                                |
| - International Building Code (IBC 2021)                          |
| - International Mechanical Code (IMC)                             |
| - National Electrical Code (NEC/NFPA 70)                          |
| - International Fire Code (IFC)                                   |
| - ASHRAE 90.1 (Energy efficiency)                                 |
|                                                                   |
| FOOD SAFETY:                                                      |
| - FDA Food Safety Modernization Act (FSMA)                        |
| - Good Agricultural Practices (GAP)                               |
| - HACCP principles                                                |
| - Global Food Safety Initiative (GFSI) standards                  |
|                                                                   |
| INDUSTRY-SPECIFIC:                                                |
| - ASABE standards for agricultural structures                     |
| - CEA equipment manufacturer standards                            |
| - ANSI/ASHRAE Standard 169 (Climate data)                         |
|                                                                   |
| QUALITY MANAGEMENT:                                               |
| - ISO 9001 (Quality management systems)                           |
| - ASTM standards (materials and testing)                          |
| - AWS (Welding standards)                                         |
| - SMACNA (Sheet metal standards)                                  |
|                                                                   |
+===================================================================+
```

---

## 2. Inspection & Test Plans (ITP)

### ITP Development

```
INSPECTION AND TEST PLAN STRUCTURE
+====================================================================================+
| System/    | Inspection/  | Reference  | Acceptance | Method | Frequency | Hold  |
| Component  | Test Point   | Standard   | Criteria   |        |           | Point |
+============+==============+============+============+========+===========+=======+
| HVAC SYSTEM - CHILLER INSTALLATION                                                |
+------------------------------------------------------------------------------------+
| Chiller    | Equipment    | Vendor     | Match      | Visual | On        | Yes   |
| Unit       | receipt      | submittals | nameplate, | review,| delivery  | (PM)  |
|            | inspection   |            | no damage  | photos |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Foundation | Concrete pad | ACI 318    | ±1/4" level| Level  | After     | Yes   |
| Pad        | level check  |            | 3000 psi   | survey | pour,     | (Eng) |
|            |              |            | min strength| Core  | 28-day    |       |
|            |              |            |            | test   |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Rigging &  | Equipment    | Mfr manual | Anchor     | Visual,| After     | No    |
| Setting    | placement    | OSHA regs  | bolts per  | torque | setting   |       |
|            |              |            | spec, level| wrench |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Piping     | Pressure     | ASME B31.1 | Hold 150   | Pressure| After    | Yes   |
|            | test         |            | psig for   | gauge, | install,  | (Eng) |
|            |              |            | 4 hours,   | chart  | before    |       |
|            |              |            | <3% drop   | recorder| insulation|       |
+------------+--------------+------------+--------+--------+-----------+-------+
| Electrical | Wiring       | NEC        | Continuity,| Megger,| Before    | Yes   |
| Connection | verification | Article 430| no grounds,| multi- | energize  | (Elec)|
|            |              |            | proper size| meter  |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Controls   | Integration  | BMS Spec   | Sensor     | BMS    | After     | No    |
|            | test         |            | accuracy   | display| wiring    |       |
|            |              |            | ±1%, comm. | test   | complete  |       |
|            |              |            | established|        |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Initial    | No-load      | Mfr specs  | Amperage   | Clamp  | At first  | No    |
| Startup    | startup      |            | within     | meter, | energize  |       |
|            |              |            | range, no  | visual |           |       |
|            |              |            | abnormal   | temp   |           |       |
|            |              |            | vibration  | scan   |           |       |
+------------+--------------+------------+------------+--------+-----------+-------+
| Performance| Full-load    | Design     | 500 tons   | Flow   | FAT or    | Yes   |
| Test       | test         | spec       | @ 0.55     | meters,| SAT       | (PM,  |
|            |              |            | kW/ton or  | power  |           | Comm) |
|            |              |            | better     | meter  |           |       |
+====================================================================================+

HOLD POINTS:
- WITNESS POINT: Inspector must be present, work cannot proceed until verified
- HOLD POINT: Work cannot proceed until formal release/approval received
- REVIEW POINT: Documentation reviewed, but doesn't stop work

INSPECTION RESPONSIBILITY:
- Contractor: Self-inspection and documentation
- Owner's QC: Independent verification inspections
- Third-party: Specialized testing (geotech, structural, commissioning)
- AHJ: Building inspector required inspections
```

### Sample ITP - LED Lighting System

```
INSPECTION & TEST PLAN: LED LIGHTING SYSTEM
+===================================================================+
| PROJECT: GreenLeaf Vertical Farm                                  |
| SYSTEM: WBS 1.8 - LED Grow Lighting                               |
| PREPARED BY: Lighting Consultant                   DATE: 3/1/25   |
| APPROVED BY: Project Manager                       DATE: 3/5/25   |
+===================================================================+

1. SUBMITTAL REVIEW (QA Activity)
+-------------------------------------------------------------------+
| Deliverable: Shop drawings, product data, photometric calcs       |
| Standard: Contract specifications Section 26 51 00               |
| Acceptance Criteria:                                              |
| - Fixtures meet PPF output (±5%)                                  |
| - Spectrum matches spec (R:B ratio, wavelength distribution)      |
| - Efficacy ≥2.7 μmol/J                                            |
| - Thermal management per spec                                     |
| - Dimming capability 0-100% in 1% increments                      |
| Hold Point: Design Engineer approval before ordering              |
+-------------------------------------------------------------------+

2. PRE-INSTALLATION MEETING (QA)
+-------------------------------------------------------------------+
| Participants: Installer, PM, Electrical contractor, Grower        |
| Agenda:                                                           |
| - Review installation sequence                                    |
| - Verify fixture layout and mounting heights                      |
| - Clarify acceptance criteria                                     |
| - Discuss safety procedures (elevated work, electrical)           |
| Hold Point: Meeting held before work begins                       |
+-------------------------------------------------------------------+

3. FACTORY INSPECTION (QA/QC)
+-------------------------------------------------------------------+
| Activity: Witness manufacturing of first 10% of fixtures          |
| Location: Vendor factory (or video conference)                    |
| Inspections:                                                      |
| - Component quality (LEDs, drivers, heat sinks)                   |
| - Assembly procedures                                             |
| - Burn-in testing (minimum 24 hours)                              |
| - Performance testing sample (PPF, spectrum, power)               |
| Acceptance: PM or delegate signs off on manufacturing process     |
| Hold Point: If issues found, resolve before full production       |
+-------------------------------------------------------------------+

4. RECEIVING INSPECTION (QC)
+-------------------------------------------------------------------+
| Activity: Inspect fixtures upon delivery to site                  |
| Frequency: 100% visual, 10% detailed inspection                   |
| Criteria:                                                         |
| - Packaging intact, no shipping damage                            |
| - Nameplate matches order                                         |
| - Accessories included (hanging hardware, power cords)            |
| - Documentation included (O&M manuals, test reports)              |
| Documentation: Receiving log with photos of any damage            |
+-------------------------------------------------------------------+

5. INSTALLATION INSPECTION (QC)
+-------------------------------------------------------------------+
| Activity: Inspect mounting and installation                       |
| Frequency: Daily inspection during installation phase             |
| Criteria:                                                         |
| - Hanging hardware per manufacturer instructions                  |
| - Mounting heights ±2" of design (measured at 4 corners)          |
| - Spacing per layout (±3")                                        |
| - Power connections per NEC (strain relief, grounding)            |
| - DMX/control wiring per spec (shielded, proper termination)      |
| Hold Point: 100% inspection before energizing circuits            |
+-------------------------------------------------------------------+

6. PRE-ENERGIZATION TESTING (QC)
+-------------------------------------------------------------------+
| Activity: Electrical safety checks before power-on                |
| Tests:                                                            |
| - Continuity test (fixture ground to panel ground)                |
| - Insulation resistance (megohm meter) >10MΩ                      |
| - Voltage verification at fixture (correct voltage, phase)        |
| - Polarity check                                                  |
| Acceptance: Licensed electrician signs off                        |
| Hold Point: Cannot energize until complete and approved           |
+-------------------------------------------------------------------+

7. FUNCTIONAL TESTING (QC)
+-------------------------------------------------------------------+
| Activity: Verify basic operation of each fixture                  |
| Frequency: 100% of fixtures                                       |
| Tests:                                                            |
| - Fixture powers on (no flicker, full brightness)                 |
| - Dimming function works (0-100%)                                 |
| - Spectrum control functions (if applicable)                      |
| - DMX/control response                                            |
| - No abnormal heat or noise                                       |
| Documentation: Fixture test log (pass/fail per fixture ID)        |
| Defects: Red-tag and quarantine failed fixtures                   |
+-------------------------------------------------------------------+

8. PERFORMANCE TESTING (QC - Sample Basis)
+-------------------------------------------------------------------+
| Activity: Detailed performance verification                       |
| Frequency: 5% of fixtures (randomly selected)                     |
| Tests:                                                            |
| - PPF output (μmol/s) using quantum sensor                        |
| - Spectral distribution (using spectrometer)                      |
| - Power consumption (watts) vs. nameplate                         |
| - Efficacy calculation (μmol/J)                                   |
| - Light distribution (PPFD mapping at canopy level)               |
| Acceptance:                                                       |
| - PPF within ±5% of specified                                     |
| - Spectrum within tolerance                                       |
| - Efficacy ≥2.7 μmol/J                                            |
| - PPFD uniformity CV <10%                                         |
| Equipment: Calibrated light meter, spectrometer, power meter      |
| Hold Point: Commissioning Agent approval                          |
+-------------------------------------------------------------------+

9. INTEGRATED SYSTEMS TEST (QC)
+-------------------------------------------------------------------+
| Activity: Verify integration with BMS and controls                |
| Tests:                                                            |
| - Scheduled on/off per programmed photoperiod                     |
| - Dimming schedules execute correctly                             |
| - Alarms trigger appropriately (fixture failure, over-temp)       |
| - Data logging accurate (energy consumption, runtime)             |
| - Manual overrides function                                       |
| Duration: 7-day continuous monitoring                             |
| Acceptance: All control functions operate as designed             |
| Hold Point: SAT approval before handover                          |
+-------------------------------------------------------------------+

10. FINAL DOCUMENTATION (QA)
+-------------------------------------------------------------------+
| Required Documentation:                                           |
| - As-built drawings (fixture locations, circuiting)               |
| - Test reports (all inspections and performance tests)            |
| - Calibration certificates (test equipment)                       |
| - Warranty certificates                                           |
| - O&M manuals                                                     |
| - Spare parts list and location                                   |
| - Training records (operators trained on system)                  |
| Hold Point: Final payment contingent on complete documentation    |
+-------------------------------------------------------------------+
```

---

## 3. Factory Acceptance Testing (FAT)

### FAT Process

```
FACTORY ACCEPTANCE TEST PROCEDURE
+===================================================================+
| EQUIPMENT: 500-Ton Water-Cooled Chiller                           |
| VENDOR: Trane (or approved equal)                                 |
| FAT LOCATION: Vendor factory, La Crosse, WI                       |
| FAT DATE: July 15-16, 2025                                        |
+===================================================================+

OBJECTIVES:
1. Verify equipment meets specifications
2. Witness factory testing and quality control
3. Identify and resolve issues before shipment
4. Training for operations/maintenance staff

ATTENDEES:
- Owner's Representative
- Project Manager
- Mechanical Engineer
- Commissioning Agent
- Facility Manager (for training)
- Maintenance Technician (for training)
- Vendor Technical Representative

PRE-FAT REQUIREMENTS (Vendor):
☐ Complete manufacturing
☐ Equipment assembled and tested per QC procedures
☐ Test setup representative of field conditions
☐ All instrumentation calibrated (certs available)
☐ O&M manuals and documentation prepared
☐ Training materials ready

DAY 1 - INSPECTION & DOCUMENTATION REVIEW:
+-------------------------------------------------------------------+
| 8:00-9:00    Welcome, safety briefing, agenda review             |
| 9:00-10:30   Equipment inspection                                |
|              - Visual inspection (workmanship, finish)            |
|              - Verify nameplate data vs. submittal                |
|              - Check components (compressor, condenser, etc.)     |
|              - Inspect control panel and wiring                   |
| 10:30-12:00  Documentation review                                |
|              - Shop drawings vs. as-built                         |
|              - Bill of materials                                  |
|              - Factory test reports (insulation, leak, run test)  |
|              - Calibration certificates                           |
| 12:00-1:00   Lunch                                               |
| 1:00-3:00    Controls review                                     |
|              - Control logic walkthrough                          |
|              - HMI demonstration                                  |
|              - Alarm configuration                                |
|              - Integration points with BMS                        |
| 3:00-5:00    O&M training (Part 1)                               |
|              - Equipment overview                                 |
|              - Startup/shutdown procedures                        |
|              - Routine maintenance requirements                   |
+-------------------------------------------------------------------+

DAY 2 - PERFORMANCE TESTING:
+-------------------------------------------------------------------+
| 8:00-9:00    Pre-test briefing, safety check                     |
| 9:00-11:00   Startup sequence                                    |
|              - Verify pre-start checks                            |
|              - Initial startup                                    |
|              - Observe sequence, listen for abnormalities         |
|              - Check for leaks, vibration, noise                  |
| 11:00-12:00  Capacity test (at design conditions)                |
|              - Stabilize at 500-ton load                          |
|              - Verify leaving water temp (42°F ±1°F)              |
|              - Measure power consumption                          |
|              - Calculate efficiency (kW/ton)                      |
| 12:00-1:00   Lunch                                               |
| 1:00-3:00    Part-load testing                                   |
|              - Test at 75%, 50%, 25% load                         |
|              - Verify capacity turndown                           |
|              - Check efficiency at part-load                      |
|              - Test staging controls                              |
| 3:00-4:00    Safety and control testing                          |
|              - Simulate fault conditions (high pressure, etc.)    |
|              - Verify alarm and shutdown functions                |
|              - Test emergency stop                                |
|              - Verify safeties reset properly                     |
| 4:00-5:00    O&M training (Part 2)                               |
|              - Troubleshooting                                    |
|              - Preventive maintenance schedule                    |
|              - Spare parts recommendations                        |
+-------------------------------------------------------------------+

ACCEPTANCE CRITERIA:
+-------------------------------------------------------------------+
| Parameter                | Specification    | Acceptance Range  |
+==========================+==================+===================+
| Cooling Capacity         | 500 tons         | 490-510 tons      |
| Leaving Water Temp       | 42°F             | 41-43°F           |
| Efficiency               | 0.55 kW/ton max  | ≤0.57 kW/ton*     |
| Sound Level              | 85 dBA @ 10 ft   | ≤87 dBA           |
| Vibration                | Per ASHRAE       | <0.2 in/sec       |
| Refrigerant Charge       | Per nameplate    | Within 5%         |
| Oil Level                | Per sight glass  | Mid-range         |
| Control Accuracy         | ±1°F setpoint    | Pass/Fail         |
| Safety Functions         | All operate      | Pass/Fail         |
+-------------------------------------------------------------------+
* Tolerance: ≤3% above specified

TESTING INSTRUMENTS (Vendor-provided, calibrated):
- Flow meters (chilled water, condenser water)
- Temperature sensors (RTDs, ±0.5°F accuracy)
- Power meter (±1% accuracy)
- Sound level meter
- Vibration meter
- Refrigerant pressure gauges
- Infrared temperature scanner

DOCUMENTATION:
☐ FAT test report (signed by all parties)
☐ Performance data sheets (actual vs. specified)
☐ Photos/videos of testing
☐ Updated O&M manual with as-built info
☐ Training attendance sign-in sheet
☐ Punch list (if any deficiencies found)

CONDITIONAL ACCEPTANCE:
If minor deficiencies found (cosmetic, documentation gaps):
- Create punch list with resolution dates
- Vendor provides corrective action plan
- Owner may grant conditional acceptance
- Final acceptance after punch list complete

REJECTION CRITERIA:
- Capacity <490 tons
- Efficiency >0.57 kW/ton
- Safety functions fail
- Major quality defects
- Unable to meet spec despite adjustments

SHIPPING:
☐ Verify shipping preparation (crating, securing)
☐ Review shipping schedule and logistics
☐ Confirm receiving procedures at site
☐ Obtain shipping documents and insurance
```

---

## 4. Site Acceptance Testing (SAT)

### SAT vs. FAT

```
FAT vs. SAT COMPARISON
+===================================================================+
| ASPECT             | FAT                    | SAT                |
+====================+========================+====================+
| Location           | Factory/shop           | Project site       |
| Conditions         | Simulated/controlled   | Actual field       |
| Timing             | Before shipment        | After installation |
| Equipment State    | Stand-alone unit       | Integrated system  |
| Purpose            | Verify mfg quality     | Verify installed   |
|                    | & performance          | performance        |
| Attendees          | Small group            | Full project team  |
| Load               | Simulated load         | Actual or simulated|
| Integration        | Not tested             | Full integration   |
| Duration           | 1-2 days typical       | Days to weeks      |
+===================================================================+

RELATIONSHIP:
FAT focuses on individual equipment
SAT focuses on integrated systems performance
Both are critical for complex CEA projects
```

### SAT Example - Environmental Control System

```
SITE ACCEPTANCE TEST PLAN
SYSTEM: Environmental Control System (HVAC + Dehumidification + Controls)
+===================================================================+

SCOPE:
Verify integrated performance of all environmental control systems
under actual operating conditions, meeting design specifications.

PREREQUISITES:
☐ All equipment installed and commissioned individually
☐ BMS programmed and operational
☐ Sensors calibrated and verified
☐ Power, water, drainage available
☐ Safety systems operational
☐ Temporary instrumentation installed
☐ Test plan reviewed and approved
☐ All parties notified of test schedule

TEST CONDITIONS:
- Growing zone: Empty (no crops) for baseline testing
- Lighting: 100% load (all fixtures on)
- Irrigation: Not running (minimal latent load)
- Outdoor conditions: Record actual ambient temp, humidity
- Duration: 7-day continuous test

PERFORMANCE SPECIFICATIONS:
+-------------------------------------------------------------------+
| Parameter              | Setpoint   | Tolerance  | Duration      |
+========================+============+============+===============+
| Air Temperature        | 72°F       | ±2°F       | 95% of time   |
| Relative Humidity      | 65%        | ±5%        | 95% of time   |
| CO2 Concentration      | 1000 ppm   | ±50 ppm    | 90% of time   |
| Air Velocity           | 30 fpm avg | 10-50 fpm  | All zones     |
| Temperature Uniformity | 72°F       | ±3°F       | Zone-to-zone  |
| Recovery Time          | N/A        | <15 min    | From ±5°F dev.|
| Energy Consumption     | TBD model  | <110% model| Per day avg   |
+-------------------------------------------------------------------+

INSTRUMENTATION:
- Temperature: 50 locations (grid pattern, canopy level)
- Humidity: 20 locations
- CO2: 10 locations
- Airflow: 25 locations (anemometer)
- Power: Main electrical panel (kWh meter)
- Data logging: 5-minute intervals minimum

TEST SEQUENCE:
+-------------------------------------------------------------------+
| Day 1-2: STEADY-STATE PERFORMANCE                                 |
| - Establish setpoints                                             |
| - Allow 24 hours to stabilize                                     |
| - Monitor all parameters for 24 hours steady-state                |
| - Calculate statistics (mean, min, max, std dev)                  |
| - Verify meets acceptance criteria                                |
+-------------------------------------------------------------------+
| Day 3: SETPOINT CHANGE RESPONSE                                   |
| - Change temperature setpoint +5°F                                |
| - Monitor recovery time                                           |
| - Change humidity setpoint +10%                                   |
| - Monitor recovery time                                           |
| - Return to baseline setpoints                                    |
| - Verify system response and stability                            |
+-------------------------------------------------------------------+
| Day 4: EXTREME CONDITIONS SIMULATION                              |
| - Test on hottest day available (or wait for hot weather)         |
| - Verify performance under peak load                              |
| - Monitor for any capacity shortfall                              |
+-------------------------------------------------------------------+
| Day 5: FAILURE MODE TESTING                                       |
| - Simulate sensor failures (disconnect, out of range)             |
| - Verify alarm and failsafe response                              |
| - Simulate equipment failures (disable chiller, dehumidifier)     |
| - Verify redundancy and alarm functions                           |
| - Restore all systems and verify normal operation                 |
+-------------------------------------------------------------------+
| Day 6-7: LONG-TERM STABILITY                                      |
| - 48-hour continuous monitoring                                   |
| - Verify no drift in performance                                  |
| - Assess control stability (oscillation, hunting)                 |
| - Energy consumption analysis                                     |
+-------------------------------------------------------------------+

DATA ANALYSIS:
+-------------------------------------------------------------------+
| Temperature Performance:                                          |
| - Time within ±2°F of setpoint: 97.3% ✓ (target: 95%)             |
| - Average: 71.8°F (setpoint: 72°F)                                |
| - Standard deviation: 1.1°F                                       |
| - Max excursion: +3.2°F (during recovery test)                    |
| - Zone uniformity: 70.5°F to 73.2°F (2.7°F range) ✓               |
| PASS                                                              |
|                                                                   |
| Humidity Performance:                                             |
| - Time within ±5% RH: 94.8% ✗ (target: 95%)                       |
| - Average: 65.3% RH                                               |
| - Standard deviation: 3.8%                                        |
| - Issue identified: Short-cycling during low outdoor humidity     |
| ACTION REQUIRED: Tune dehumidifier control logic                  |
|                                                                   |
| CO2 Performance:                                                  |
| - Time within ±50ppm: 92.1% ✓ (target: 90%)                       |
| PASS                                                              |
|                                                                   |
| Recovery Time:                                                    |
| - From +5°F: 12 minutes ✓ (target: <15 min)                       |
| - From +10% RH: 18 minutes ✗ (target: <15 min)                    |
| ACTION REQUIRED: Increase dehumidification capacity or adjust     |
|                  control parameters                               |
|                                                                   |
| Energy Consumption:                                               |
| - Average: 18,500 kWh/day                                         |
| - Model prediction: 17,200 kWh/day                                |
| - Variance: +7.6% (within 110% tolerance) ✓                       |
| PASS                                                              |
+-------------------------------------------------------------------+

PUNCH LIST:
+-------------------------------------------------------------------+
| Item | Description           | Responsible | Due Date | Status    |
+======+=======================+=============+==========+===========+
| 1    | Tune dehumidifier     | Controls    | 8/15/25  | Open      |
|      | control (reduce       | programmer  |          |           |
|      | short-cycling)        |             |          |           |
+------+-----------------------+-------------+----------+-----------+
| 2    | Adjust humidity       | Comm. Agent | 8/15/25  | Open      |
|      | control parameters    |             |          |           |
|      | (deadband, staging)   |             |          |           |
+------+-----------------------+-------------+----------+-----------+
| 3    | Re-test humidity      | Comm. Agent | 8/20/25  | Pending   |
|      | performance (48-hr)   |             |          |           |
+------+-----------------------+-------------+----------+-----------+

CONCLUSION:
CONDITIONAL ACCEPTANCE pending resolution of humidity control issues.
Re-test required after control adjustments. All other systems meet
or exceed performance specifications.

SIGNATURES:
__________________  __________________  __________________
Owner's Rep         Commissioning Agent  Contractor

DATE: ____________
```

---

## Key Takeaways

1. **Quality must be planned, not inspected in** - Define requirements and processes upfront.

2. **Inspection and test plans are essential** - They ensure nothing is missed and everyone knows expectations.

3. **Hold points prevent costly rework** - Don't proceed until critical work is verified.

4. **FAT catches problems early** - Much cheaper to fix in factory than in field.

5. **SAT verifies integrated performance** - Individual equipment may work, but system integration is critical.

6. **Documentation is part of quality** - Incomplete documentation = incomplete project.

7. **Non-conformances must be managed systematically** - Track, resolve, verify closure.

---

## Next Module

In **Module 10: Procurement Strategy & Vendor Management**, we will explore procurement planning, vendor selection, contract types, and managing vendor performance.

---

*Module 9 of 14 - CEA Project Management*
