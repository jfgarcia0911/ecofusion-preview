# Module 14: Capstone Project
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design a complete automation system from requirements to implementation
2. Select appropriate components based on budget and performance criteria
3. Create detailed system specifications and documentation
4. Estimate costs for hardware, installation, and ongoing maintenance
5. Develop an implementation plan with timeline and milestones
6. Present and justify your design decisions

---

## 14.1 Project Overview

### Capstone Challenge

Design a **complete automation and monitoring system** for a realistic CEA operation. You'll integrate everything learned in this course into a comprehensive, implementable solution.

**Choose ONE scenario:**

#### Option A: Commercial Aquaponics
```
Operation: 2,000 gallon recirculating aquaponics system
Livestock: Tilapia (300 lbs capacity)
Plants: Lettuce and herbs in NFT channels
Scale: Small commercial, targeting farmers markets
Budget: $3,000-8,000 for automation
```

#### Option B: Greenhouse Hydroponics
```
Operation: 5,000 sq ft greenhouse
Crop: Hydroponic tomatoes
Climate: Temperate with cold winters, hot summers
Scale: Commercial, wholesale to restaurants
Budget: $8,000-15,000 for automation
```

#### Option C: Indoor Vertical Farm
```
Operation: 1,000 sq ft indoor space
Crop: Leafy greens, microgreens
Climate: Fully climate-controlled, no natural light
Scale: Urban farm, direct-to-consumer
Budget: $10,000-20,000 for automation
```

#### Option D: Your Own Operation
```
Design for your actual or planned operation
Specify scale, crops/livestock, environment
Set realistic budget
```

---

## 14.2 Project Requirements

### Deliverables

**1. System Requirements Document** (2-3 pages)
   - Operation description
   - Critical parameters to monitor
   - Control functions needed
   - Constraints (budget, skills, infrastructure)
   - Success criteria

**2. System Design Specification** (5-8 pages)
   - Architecture overview (local, cloud, or hybrid)
   - Sensor selection with justification
   - Controller selection
   - Network/communication design
   - Alert system design
   - Data logging strategy

**3. Technical Diagrams** (3-5 diagrams)
   - System architecture diagram
   - Network topology
   - Sensor placement layout
   - Wiring/connection diagram
   - Control logic flowchart

**4. Implementation Plan** (2-3 pages)
   - Phase-by-phase rollout
   - Timeline with milestones
   - Installation tasks
   - Testing procedures
   - Training plan

**5. Budget and ROI Analysis** (2-3 pages)
   - Itemized component costs
   - Installation labor estimate
   - Annual operating costs
   - Expected benefits (labor savings, loss prevention, yield improvement)
   - Payback period calculation
   - 3-year TCO and ROI

**6. Presentation** (10-15 minutes)
   - Executive summary
   - Key design decisions and justifications
   - Budget and ROI highlights
   - Q&A

---

## 14.3 Design Process

### Phase 1: Requirements Analysis (15 minutes)

**Critical Questions:**

```
1. What parameters are CRITICAL for crop/livestock survival?
   Example (Aquaponics):
     - Water temperature (fish survival)
     - Dissolved oxygen (fish survival)
     - Water level (pump protection)
   → These need monitoring, control, AND redundancy

2. What parameters affect production quality/yield?
   Example (Greenhouse):
     - DLI (daily light integral)
     - VPD (vapor pressure deficit)
     - Nutrient EC
   → These need monitoring and optimization

3. What tasks are repetitive and time-consuming?
   Example:
     - Manual pH/EC testing: 30 min/day
     - Irrigation scheduling: 15 min/day
   → Good automation candidates for labor savings

4. What is at risk financially?
   Example:
     - $5,000 fish stock
     - $12,000 crop value per cycle
   → Justifies investment in reliable automation
```

**Requirements Template:**

```
═══════════════════════════════════════════════════════════════
SYSTEM REQUIREMENTS

OPERATION: [Name and description]
SCALE: [Size, capacity]
ENVIRONMENT: [Indoor/greenhouse/outdoor, climate zone]

CRITICAL PARAMETERS (must monitor and control):
  1. [Parameter] - [Why critical] - [Target range]
  2. ...

IMPORTANT PARAMETERS (should monitor):
  1. [Parameter] - [Why important] - [Target range]
  2. ...

CONTROL FUNCTIONS NEEDED:
  1. [Function] - [Automation level: monitor/alert/control]
  2. ...

CONSTRAINTS:
  Budget: $[min] - $[max]
  Technical skill: [Beginner/Intermediate/Advanced]
  Internet: [Reliable/Unreliable/None]
  Power: [Grid/Solar/Backup generator]

SUCCESS CRITERIA:
  • [Measurable goal 1]
  • [Measurable goal 2]
  • [Measurable goal 3]
═══════════════════════════════════════════════════════════════
```

### Phase 2: Component Selection (20 minutes)

**Decision Framework:**

```
For each parameter, decide:

1. SENSOR:
   □ What to measure? (pH, temp, etc.)
   □ Accuracy needed? (±0.1 pH vs. ±0.5 pH)
   □ Analog or digital?
   □ Wired or wireless?
   □ Specific model/brand?
   □ Cost?
   □ Maintenance requirements?

2. CONTROLLER:
   □ DIY (Arduino/RPi) or Commercial?
   □ If DIY: Which platform and why?
   □ If Commercial: Which brand/model?
   □ Expandability needed?
   □ Cost?

3. ACTUATORS (if controlling):
   □ What physical action? (relay, valve, VFD)
   □ Voltage/current requirements?
   □ Failsafe design?
   □ Cost?

4. COMMUNICATION:
   □ How do sensors connect to controller?
   □ How does controller connect to dashboard?
   □ Local network? Cloud?
   □ Backup communication method?
```

**Example Component Selection:**

```
Parameter: Water Temperature (Aquaponics)

SENSOR:
  Model: DS18B20 digital temperature sensor
  Accuracy: ±0.5°C (sufficient for fish)
  Interface: 1-Wire digital (easy with Arduino/RPi)
  Cost: $8
  Maintenance: None, waterproof
  Justification: Inexpensive, reliable, widely supported

CONTROLLER:
  Platform: Raspberry Pi 4 (2GB)
  Justification:
    - Can read multiple DS18B20 sensors on one pin
    - Supports web dashboard (Flask/Grafana)
    - Data logging to SQLite
    - Wi-Fi for remote monitoring
  Cost: $35 + $20 (accessories) = $55

ACTUATOR:
  Heater Control: 2-channel relay module
  Cost: $8
  Justification: Isolates low-voltage RPi from 120V heater

COMMUNICATION:
  Local: Ethernet to router
  Remote: VPN for secure remote access
  Cost: $0 (existing router)
```

### Phase 3: System Architecture Design (15 minutes)

**Architecture Diagram Template:**

```
╔═══════════════════════════════════════════════════════════════╗
║              SYSTEM ARCHITECTURE DIAGRAM                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   SENSING LAYER                                               ║
║   ─────────────────────────────────────────────────────────   ║
║   [Sensors] → [Sensor 2] → [Sensor 3] → [Sensor N]           ║
║        │           │            │            │                ║
║        └───────────┴────────────┴────────────┘                ║
║                           │                                   ║
║   CONTROL LAYER                                               ║
║   ─────────────────────────────────────────────────────────   ║
║                    [Controller]                               ║
║                  (Arduino / RPi / PLC)                        ║
║                           │                                   ║
║        ┌──────────────────┼──────────────────┐               ║
║        ↓                  ↓                  ↓                ║
║   [Relay 1]          [Relay 2]          [Valve 1]            ║
║   Heater             Pump                Dosing               ║
║                           │                                   ║
║   DATA/INTERFACE LAYER                                        ║
║   ─────────────────────────────────────────────────────────   ║
║                   [Local Database]                            ║
║                           │                                   ║
║        ┌──────────────────┼──────────────────┐               ║
║        ↓                  ↓                  ↓                ║
║   [Dashboard]       [Alert System]    [Cloud Backup]         ║
║   (Grafana)         (Twilio SMS)      (Optional)             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Phase 4: Budget Development (10 minutes)

**Budget Template:**

```
═══════════════════════════════════════════════════════════════
AUTOMATION SYSTEM BUDGET

SENSORS:
  □ Temperature sensors (3) @ $8           $24
  □ pH sensor                              $150
  □ EC sensor                              $120
  □ DO sensor                              $400
  □ Water level float switches (2) @ $15  $30
                                  Subtotal: $724

CONTROLLER:
  □ Raspberry Pi 4 (4GB) kit               $75
  □ SD card (64GB)                         $12
  □ Relay module (8-channel)               $15
  □ Power supply                           $12
  □ Enclosure (weatherproof)               $30
                                  Subtotal: $144

ACTUATORS:
  □ Solenoid valves (2) @ $35              $70
  □ Peristaltic dosing pumps (2) @ $80     $160
  □ Heater (existing, no cost)             $0
                                  Subtotal: $230

NETWORKING:
  □ Ethernet cables (100ft)                $20
  □ Wi-Fi extender (if needed)             $40
                                  Subtotal: $60

INSTALLATION:
  □ Wiring, connectors, terminals          $75
  □ Mounting hardware                      $50
  □ Labor (self-install)                   $0
                                  Subtotal: $125

TOTAL ONE-TIME COST:                       $1,283

ANNUAL RECURRING:
  □ Calibration solutions                  $100
  □ pH probe replacement                   $150
  □ EC probe maintenance                   $50
  □ Cloud service (optional)               $0
                                  Subtotal: $300/year

3-YEAR TOTAL COST OF OWNERSHIP:
  One-time: $1,283
  Recurring: $300 × 3 = $900
  TOTAL: $2,183
═══════════════════════════════════════════════════════════════
```

### Phase 5: ROI Calculation (10 minutes)

**ROI Template:**

```
═══════════════════════════════════════════════════════════════
RETURN ON INVESTMENT ANALYSIS

COSTS:
  One-time investment: $1,283
  Annual recurring: $300
  3-year total cost: $2,183

BENEFITS (Annual):

1. LABOR SAVINGS:
   Current: 1 hour/day manual monitoring @ $20/hr
   Annual: 365 hours × $20/hr = $7,300
   Post-automation: 15 min/day = 91 hours × $20/hr = $1,820
   SAVINGS: $5,480/year

2. LOSS PREVENTION:
   Risk: $5,000 fish stock
   Probability of catastrophic loss without monitoring: 10%/year
   Expected loss: $5,000 × 0.10 = $500/year
   With monitoring: 1% risk
   Expected loss: $5,000 × 0.01 = $50/year
   SAVINGS: $450/year

3. YIELD IMPROVEMENT:
   Optimized pH/EC control improves growth
   Estimated: 8% yield increase
   Current annual production value: $15,000
   Improvement: $15,000 × 0.08 = $1,200/year
   BENEFIT: $1,200/year

TOTAL ANNUAL BENEFIT: $5,480 + $450 + $1,200 = $7,130

NET ANNUAL BENEFIT: $7,130 - $300 = $6,830

PAYBACK PERIOD: $1,283 ÷ $6,830 = 0.19 years = 2.3 months

3-YEAR ROI:
  Net benefit: ($6,830 × 3) - $1,283 = $19,207
  ROI: $19,207 ÷ $1,283 = 1,497%

CONCLUSION: Excellent ROI, highly recommended investment
═══════════════════════════════════════════════════════════════
```

---

## 14.4 Implementation Planning

**Implementation Timeline Template:**

```
╔═══════════════════════════════════════════════════════════════╗
║              IMPLEMENTATION TIMELINE                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║ PHASE 1: PLANNING & PROCUREMENT (Weeks 1-2)                   ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Finalize design and budget                                  ║
║ □ Order all components                                        ║
║ □ Prepare installation site (mounting locations, power)       ║
║ □ Review system documentation                                 ║
║                                                               ║
║ PHASE 2: BENCH TESTING (Week 3)                               ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Receive and inventory components                            ║
║ □ Test each sensor individually on breadboard                 ║
║ □ Configure and test controller                               ║
║ □ Verify communication and logging                            ║
║                                                               ║
║ PHASE 3: INSTALLATION (Week 4)                                ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Install sensors in tanks/greenhouse                         ║
║ □ Run cabling (label everything!)                             ║
║ □ Mount controller and relays                                 ║
║ □ Connect and test each connection                            ║
║                                                               ║
║ PHASE 4: INTEGRATION & TESTING (Week 5)                       ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Integrate all sensors with controller                       ║
║ □ Calibrate all sensors                                       ║
║ □ Test control logic (use manual overrides)                   ║
║ □ Set up dashboard and alerts                                 ║
║ □ Run 48-hour soak test (monitor mode only)                   ║
║                                                               ║
║ PHASE 5: GO-LIVE (Week 6)                                     ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Enable automated control (gradual, one function at a time)  ║
║ □ Monitor closely for first week                              ║
║ □ Fine-tune thresholds and alerts                             ║
║ □ Train staff on system operation                             ║
║                                                               ║
║ PHASE 6: OPTIMIZATION (Weeks 7-12)                            ║
║ ──────────────────────────────────────────────────────────    ║
║ □ Analyze logged data for trends                              ║
║ □ Adjust setpoints based on results                           ║
║ □ Add additional features as needed                           ║
║ □ Document lessons learned                                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 14.5 Presentation Guidelines

### Structure (10-15 minutes total)

**1. Introduction (1 minute)**
- Operation overview
- Problem statement (why automation needed)

**2. Requirements (2 minutes)**
- Critical parameters
- Key constraints (budget, skills, etc.)
- Success criteria

**3. Design Solution (5 minutes)**
- Architecture overview (show diagram)
- Key component selections and justifications
- Control strategy
- Alert and failsafe design

**4. Budget & ROI (3 minutes)**
- Total cost breakdown
- Expected benefits
- Payback period and ROI

**5. Implementation Plan (2 minutes)**
- Timeline overview
- Key milestones
- Risk mitigation

**6. Conclusion & Q&A (2-3 minutes)**
- Summary of key decisions
- Questions from instructor/peers

### Evaluation Criteria

**Design Quality (40 points)**
- [ ] Requirements clearly defined
- [ ] Component selections well-justified
- [ ] System architecture logical and complete
- [ ] Failsafe and redundancy appropriate for risks
- [ ] Practical and implementable

**Budget & ROI (20 points)**
- [ ] Budget detailed and realistic
- [ ] ROI calculation complete and reasonable
- [ ] Cost-benefit analysis supports decisions

**Documentation (20 points)**
- [ ] Diagrams clear and professional
- [ ] Specifications detailed
- [ ] Implementation plan thorough
- [ ] Writing clear and well-organized

**Presentation (20 points)**
- [ ] Clear and confident delivery
- [ ] Effective use of visuals
- [ ] Stays within time limit
- [ ] Handles Q&A well

**TOTAL: 100 points**

---

## 14.6 Example Project Outline

**Example: Small Commercial Aquaponics Automation**

```
═══════════════════════════════════════════════════════════════
PROJECT: AQUAPONICS AUTOMATION SYSTEM
Operation: 2,000 gallon system, 300 lbs tilapia capacity
Budget: $5,000
───────────────────────────────────────────────────────────────

CRITICAL REQUIREMENTS:
1. Water temperature monitoring and control (68-82°F)
2. Dissolved oxygen monitoring (>5 mg/L critical)
3. pH monitoring (6.8-7.2 optimal)
4. Water level monitoring (prevent pump damage)

SYSTEM DESIGN:

Controller: Raspberry Pi 4 (4GB) with touchscreen
  Why: Reliable, supports multiple sensors, web dashboard

Sensors:
  • DS18B20 temperature (3) - redundancy
  • Atlas Scientific DO sensor - critical for fish
  • Atlas Scientific pH sensor - water quality
  • Float switches (high/low) - pump protection
  • Flow meter - verify circulation

Control:
  • Heater relay (2-stage)
  • Backup aerator (auto-start on low DO)
  • pH dosing pumps (acid/base)
  • Solenoid valve for makeup water

Communication:
  • Local Ethernet to router
  • Cloud sync to InfluxDB Cloud (backup)
  • SMS alerts via Twilio

Data:
  • Local SQLite database
  • 1-minute logging for critical (temp, DO)
  • 15-minute for others (pH, EC)
  • 30-day retention full resolution
  • 1-year retention hourly averages

BUDGET: $4,250
  Sensors: $1,200
  Controller: $200
  Actuators: $800
  Installation: $500
  Reserve: $1,550

ROI: 3.2 months payback
  Labor savings: $5,000/year
  Loss prevention: $800/year
  Yield improvement: $1,500/year

IMPLEMENTATION: 6-week rollout (see detailed timeline)

RISKS & MITIGATION:
  • Power failure → UPS backup for controller + aerator
  • Sensor failure → Redundant temperature sensors
  • Internet outage → Local control continues, cloud sync when restored
═══════════════════════════════════════════════════════════════
```

---

## Summary

The capstone project demonstrates your ability to design, justify, and plan a complete automation system:

**Success Checklist:**

- [ ] Selected realistic operation (actual or scenario)
- [ ] Identified critical vs. nice-to-have parameters
- [ ] Chose appropriate sensors and justified selections
- [ ] Designed controller architecture (DIY or commercial)
- [ ] Created clear system diagrams
- [ ] Calculated detailed budget
- [ ] Performed ROI analysis showing payback
- [ ] Developed phase-by-phase implementation plan
- [ ] Identified risks and designed failsafes
- [ ] Prepared professional presentation
- [ ] Ready to answer questions and defend decisions

**This is Your Blueprint:**

Treat this capstone as if you're presenting to investors, your boss, or yourself before spending real money. The discipline of detailed planning will:
- Reveal hidden costs and challenges
- Force you to justify every component
- Create a roadmap for actual implementation
- Build confidence in your automation knowledge

**Good luck on your capstone project!**

---

*End of Module 14 - Course 203 Complete*
