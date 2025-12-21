# Module 6: Automation and Monitoring Systems
## Course 213: Vertical Farming Techniques

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 6 of 12 |
| **Duration** | 60 minutes |
| **Format** | Lecture + Software Demo |
| **Materials** | Control system examples, sensor demos |

---

## Learning Objectives

By the end of this module, you will be able to:

1. **Design** integrated automation systems for vertical farms
2. **Select** appropriate sensors and controllers
3. **Implement** data collection and analytics
4. **Evaluate** automation ROI and labor savings
5. **Troubleshoot** common automation issues

---

## Lesson Content

### 6.1 Automation Levels

#### Automation Pyramid

```
VERTICAL FARM AUTOMATION LEVELS

┌─────────────────────────────────────┐
│ LEVEL 5: AI/MACHINE LEARNING        │ Future
│ - Predictive optimization           │
│ - Autonomous decision-making        │
├─────────────────────────────────────┤
│ LEVEL 4: ADVANCED AUTOMATION        │ Cutting Edge
│ - Robotic harvesting                │
│ - Vision-based quality control      │
├─────────────────────────────────────┤
│ LEVEL 3: INTEGRATED AUTOMATION      │ Industry Standard
│ - Climate, irrigation, lighting     │
│ - Centralized control platform      │
├─────────────────────────────────────┤
│ LEVEL 2: BASIC AUTOMATION           │ Entry Level
│ - Timers and simple controllers     │
│ - Manual supervision required       │
├─────────────────────────────────────┤
│ LEVEL 1: MANUAL OPERATION           │ Small Scale
│ - Hand watering, manual monitoring  │
│ - No automated systems              │
└─────────────────────────────────────┘

Most Commercial VF: Level 3
Advanced Operations: Level 4
Research/Experimental: Level 5
```

---

### 6.2 Control System Architecture

#### System Components

```
INTEGRATED CONTROL ARCHITECTURE

┌────────────────────────────────────────────┐
│  CLOUD PLATFORM (Data Storage/Analytics)  │
│  - Historical data                         │
│  - Machine learning models                 │
│  - Remote access                           │
└──────────────┬─────────────────────────────┘
               │ Internet
┌──────────────┴─────────────────────────────┐
│  FACILITY MASTER CONTROLLER (Local Server) │
│  - Real-time control logic                 │
│  - Alarm management                        │
│  - Recipe management                       │
└──────┬────────────┬────────────┬───────────┘
       │            │            │
   ┌───▼───┐    ┌───▼───┐    ┌───▼───┐
   │Climate│    │Light  │    │Irrigation│
   │Controller   │Controller  │Controller
   └───┬───┘    └───┬───┘    └───┬───┘
       │            │            │
   Sensors/     LED         Pumps/
   HVAC         Arrays      Valves
```

#### Communication Protocols

| Protocol | Use Case | Advantages | Limitations |
|----------|----------|------------|-------------|
| **Modbus** | Industrial sensors/PLCs | Robust, widely supported | Slower, limited data |
| **BACnet** | HVAC systems | HVAC industry standard | Complex setup |
| **MQTT** | IoT sensors | Lightweight, scalable | Requires broker |
| **OPC-UA** | System integration | Secure, standardized | Higher cost |
| **WiFi/Ethernet** | General connectivity | Easy, fast | Infrastructure needed |

---

### 6.3 Environmental Sensors

#### Sensor Selection Guide

```
SENSOR TYPES AND SPECIFICATIONS

TEMPERATURE:
├─ Technology: RTD, Thermistor, Thermocouple
├─ Accuracy: ±0.2-0.5°C
├─ Range: -20 to 100°C
├─ Cost: $20-100
└─ Calibration: Annual

HUMIDITY:
├─ Technology: Capacitive
├─ Accuracy: ±2-3% RH
├─ Range: 0-100% RH
├─ Cost: $50-200
└─ Calibration: Bi-annual (drift prone)

CO2:
├─ Technology: NDIR (infrared)
├─ Accuracy: ±50 ppm
├─ Range: 0-5000 ppm
├─ Cost: $200-500
└─ Calibration: Annual recommended

LIGHT (PAR):
├─ Technology: Quantum sensor
├─ Accuracy: ±5%
├─ Range: 0-3000 μmol/m²/s
├─ Cost: $300-800
└─ Calibration: Every 2-3 years

pH/EC:
├─ Technology: Ion-selective electrode
├─ Accuracy: ±0.1 pH, ±2% EC
├─ Range: pH 0-14, EC 0-10 mS/cm
├─ Cost: $200-600
└─ Calibration: Weekly (high maintenance)
```

#### Sensor Placement Strategy

```
10,000 SQ FT FACILITY SENSOR MAP

┌─────────────────────────────────────────┐
│  T/H  Zone 1        T/H  Zone 2        │
│  ●                  ●                   │
│  ████  ████         ████  ████          │
│  Racks Racks        Racks Racks         │
│         CO2●               CO2●         │
│  ████  ████         ████  ████          │
│                                         │
│  T/H               T/H                  │
│  ●    Zone 3       ●    Zone 4         │
│  ████  ████         ████  ████          │
│  Racks Racks        Racks Racks         │
│         CO2●               CO2●         │
│  ████  ████         ████  ████          │
│                                         │
│  T/H = Temperature/Humidity combined    │
│  CO2 = Carbon dioxide sensor            │
└─────────────────────────────────────────┘

Sensor Count (10,000 sq ft):
- Temperature/Humidity: 16-20 (every 500-750 sq ft)
- CO2: 4-6 (every 1,500-2,500 sq ft)
- PAR sensors: 4-8 (calibration/verification)
- pH/EC: 1-4 (per irrigation zone)
```

---

### 6.4 Irrigation Automation

#### Fertigation Control

```
AUTOMATED FERTIGATION SYSTEM

┌────────────────────────────────────┐
│  NUTRIENT CONCENTRATE TANKS        │
│  [A] [B] [Acid] [Base]            │
└──────┬──────────────┬──────────────┘
       │ Dosing       │
       │ Pumps        │
       ↓              ↓
┌────────────────────────────────────┐
│  MIXING TANK                       │
│  - pH/EC sensors                   │
│  - Temperature sensor              │
│  - Mixing pump                     │
└──────┬─────────────────────────────┘
       │ Control logic:
       │ IF pH > setpoint → add acid
       │ IF pH < setpoint → add base
       │ IF EC < setpoint → add nutrients
       ↓
┌────────────────────────────────────┐
│  DISTRIBUTION SYSTEM               │
│  Zone valves (automated)           │
└──────┬─────────────────────────────┘
       │
   ┌───┴────┬────────┬────────┐
   ↓        ↓        ↓        ↓
  Zone 1  Zone 2  Zone 3  Zone 4
  (Lettuce)(Herbs)(Greens)(Microgreens)
```

#### Irrigation Scheduling

**Timer-Based (Level 2):**
- Fixed schedule (e.g., 5 min every 2 hours)
- Simple, reliable
- No adaptation to conditions

**Sensor-Based (Level 3):**
- Moisture sensors or weight-based
- Irrigate when threshold reached
- Adapts to plant needs and environment

**Crop Model-Based (Level 4):**
```
Irrigation = f(Growth Stage, Transpiration Rate, VPD, DLI)

Where:
- Growth Stage: Seedling/Vegetative/Harvest
- Transpiration: Calculated from climate data
- VPD: Vapor Pressure Deficit (driving force)
- DLI: Daily Light Integral (energy available)

Example Lettuce (Day 21):
├─ VPD: 1.2 kPa (moderate demand)
├─ DLI: 16 mol/m²/day (high photosynthesis)
├─ Growth model: 85% of max water need
└─ Irrigation: 3.2 L/m²/day in 8 cycles
```

---

### 6.5 Lighting Automation

#### Dynamic Light Control

```
INTELLIGENT LIGHTING SYSTEM

Time-Based Control:
┌────────────────────────────────────┐
│ 6am:  Sunrise ramp (30 min)        │
│ 6:30am: Full intensity (280 PPFD)  │
│ 12pm: Maintain or slight increase  │
│ 6pm:  Sunset ramp (30 min)         │
│ 6:30pm: Lights off                 │
│ Night: Optional far-red pulse      │
└────────────────────────────────────┘

Adaptive Control (Level 4):
┌────────────────────────────────────┐
│ IF sunny_day:                      │
│   Reduce intensity 10% (save energy)│
│ IF cloudy_day:                     │
│   Maintain full intensity          │
│ IF hot (>75°F):                    │
│   Reduce 15% (less heat)           │
│ IF cool (<65°F):                   │
│   Increase slightly (warmth)       │
└────────────────────────────────────┘
```

#### Spectrum Management

**Multi-Channel Control:**
- Zone 1 (Seedlings): High Blue ratio (30/65/5 B/R/FR)
- Zone 2 (Vegetative): Balanced (20/75/5)
- Zone 3 (Finishing): High Red (15/80/5)
- Zone 4 (Flowering crops): High Far-Red (15/70/15)

**Automation Benefits:**
- Consistent application of light recipes
- Easy experimentation/optimization
- Reduced labor for adjustments
- Data logging for analysis

---

### 6.6 Data Collection and Analytics

#### Data Points to Track

```
DATA COLLECTION FRAMEWORK

ENVIRONMENTAL DATA (every 5-15 min):
├─ Temperature (air, canopy, root zone)
├─ Humidity (RH%)
├─ CO2 concentration
├─ Light intensity (PPFD)
├─ VPD (calculated)
└─ Air velocity (periodic)

SYSTEM DATA (continuous or per event):
├─ Irrigation volume/timing
├─ Nutrient dosing (A, B, pH)
├─ pH/EC readings
├─ Energy consumption (kWh by system)
├─ Water usage
└─ Equipment runtime

CROP DATA (daily or weekly):
├─ Growth measurements (height, leaf count)
├─ Harvest weight
├─ Waste/culls percentage
├─ Days to harvest
├─ Quality scores
└─ Disease incidents

BUSINESS DATA:
├─ Labor hours by task
├─ Input costs
├─ Revenue per crop cycle
├─ Yield per square foot
└─ Energy cost per pound
```

#### Analytics Applications

**1. Yield Optimization:**
```
Correlation Analysis:
├─ DLI vs. Harvest Weight
├─ Average VPD vs. Growth Rate
├─ Night Temperature vs. Quality
└─ Identify optimal parameters

Result: 8-15% yield increase typical
```

**2. Resource Efficiency:**
```
Energy Analysis:
├─ kWh per pound produced
├─ Lighting vs. HVAC breakdown
├─ Peak demand charges
└─ Optimization opportunities

Result: 10-20% energy cost reduction
```

**3. Predictive Maintenance:**
```
Equipment Monitoring:
├─ Pump runtime vs. baseline
├─ Fan motor current draw
├─ LED degradation tracking
└─ Predict failures before occurrence

Result: 30-50% reduction in downtime
```

---

### 6.7 Robotic Automation

#### Current Applications

```
ROBOTIC SYSTEMS IN VERTICAL FARMS

SEEDING ROBOTS:
├─ Function: Automated plug tray filling
├─ Capacity: 1,000-3,000 cells/hour
├─ Accuracy: 95-98% germination placement
├─ Cost: $50K-150K
└─ ROI: 1-2 years (labor savings)

TRANSPLANTING ROBOTS:
├─ Function: Move seedlings to growing positions
├─ Capacity: 500-1,500 plants/hour
├─ Accuracy: 99%+ placement
├─ Cost: $75K-200K
└─ ROI: 2-3 years

HARVESTING ROBOTS (Emerging):
├─ Function: Cut and package mature crops
├─ Capacity: 50-200 heads/hour (lettuce)
├─ Accuracy: 85-95% (improving)
├─ Cost: $200K-500K
└─ ROI: 3-5 years (early adopter premium)

MOBILE INSPECTION (R&D):
├─ Function: Vision-based crop monitoring
├─ Coverage: Entire facility daily
├─ Detection: Disease, pests, deficiencies
├─ Cost: $100K-300K
└─ Status: Limited commercial deployment
```

#### ROI Calculation Example

```
HARVESTING ROBOT ROI

Manual Harvesting Costs:
├─ 4 workers × $15/hr × 8 hr = $480/day
├─ Harvest 2,000 heads/day
├─ Cost per head: $0.24
└─ Annual cost (250 days): $120,000

Robot Harvesting:
├─ Robot cost: $300,000
├─ Maintenance: $15,000/year
├─ 1 operator × $18/hr × 8 hr = $144/day
├─ Harvest 2,500 heads/day (25% faster)
├─ Cost per head: $0.06
└─ Annual operating cost: $51,000/year

Analysis:
├─ Annual savings: $69,000
├─ Payback period: 4.3 years
├─ After payback: $69K/year profit
└─ Additional benefit: 25% more throughput
```

---

### 6.8 Alarm and Alert Systems

#### Critical Alarms

```
ALARM PRIORITY SYSTEM

CRITICAL (Immediate Response):
├─ Temperature >80°F or <55°F
├─ Humidity >90% or <30%
├─ CO2 <200 ppm (growth stops)
├─ Irrigation pump failure
├─ Power outage
└─ Action: SMS + Phone Call + Email

WARNING (Within 1 hour):
├─ Temperature ±5°F from setpoint
├─ Humidity ±15% from setpoint
├─ CO2 ±200 ppm from setpoint
├─ pH/EC out of range
└─ Action: SMS + Email

ADVISORY (Daily Review):
├─ Sensor communication loss
├─ Equipment runtime anomaly
├─ Gradual drift in parameters
├─ Maintenance due
└─ Action: Email + Dashboard flag
```

#### Redundancy and Backup

**Critical Systems Redundancy:**
- Irrigation: Dual pumps (auto-failover)
- Climate: Multiple HVAC units
- Power: Generator or battery backup
- Network: Cellular backup for internet
- Sensors: Dual sensors on critical parameters

**Backup Timelines:**
- UPS (battery): 15-30 minutes (ride through)
- Generator: Hours to days (fuel dependent)
- Manual intervention: <2 hours to facility

---

### 6.9 Software Platforms

#### Commercial VF Management Software

| Platform | Features | Cost | Best For |
|----------|----------|------|----------|
| **AgriCool** | Climate, irrigation, tracking | $500-2K/month | Mid-large farms |
| **Agrilyst** | Analytics, task management | $300-1.5K/month | Data-focused ops |
| **Priva** | Full automation, HVAC integration | $50K-200K | Enterprise |
| **Argus** | Greenhouse/VF control | $10K-50K + service | Established operations |
| **Custom/Open-Source** | Tailored solution | Dev cost | Tech-savvy operators |

#### Key Software Features

```
ESSENTIAL VF SOFTWARE CAPABILITIES

┌────────────────────────────────────────┐
│ CORE FUNCTIONS:                        │
│ ✓ Real-time monitoring dashboard       │
│ ✓ Recipe management (crop protocols)   │
│ ✓ Alarm/alert system                   │
│ ✓ Data logging and export              │
│ ✓ User access control                  │
│                                         │
│ ADVANCED FUNCTIONS:                    │
│ ✓ Predictive analytics                 │
│ ✓ Mobile app access                    │
│ ✓ Inventory/harvest tracking           │
│ ✓ Labor management                     │
│ ✓ Integration with ERP/accounting      │
│                                         │
│ EMERGING FUNCTIONS:                    │
│ ✓ AI-driven optimization               │
│ ✓ Computer vision integration          │
│ ✓ Blockchain traceability              │
│ ✓ Autonomous control                   │
└────────────────────────────────────────┘
```

---

### 6.10 Key Takeaways

```
MODULE 6 SUMMARY

┌──────────────────────────────────────────┐
│                                          │
│ AUTOMATION LEVELS: Most commercial VF    │
│ operate at Level 3 (integrated systems)  │
│                                          │
│ SENSOR DENSITY: 1 temp/RH per 500-750   │
│ sq ft, 1 CO2 per 1,500-2,500 sq ft      │
│                                          │
│ DATA ANALYTICS: Track 50-100+ metrics   │
│ for optimization (8-15% yield gains)     │
│                                          │
│ ROBOTICS: Seeding/transplanting mature,  │
│ harvesting emerging (3-5 year ROI)       │
│                                          │
│ SOFTWARE: $300-2K/month for commercial   │
│ platforms, essential for scale           │
│                                          │
└──────────────────────────────────────────┘
```

---

## Vocabulary

| Term | Definition |
|------|------------|
| **PLC** | Programmable Logic Controller |
| **SCADA** | Supervisory Control and Data Acquisition |
| **IoT** | Internet of Things |
| **API** | Application Programming Interface |
| **NDIR** | Non-Dispersive Infrared (CO2 sensor tech) |
| **VPD** | Vapor Pressure Deficit |
| **UPS** | Uninterruptible Power Supply |
| **Failover** | Automatic switch to backup system |
| **RTD** | Resistance Temperature Detector |
| **Modbus** | Serial communication protocol |

---

## Quiz Preview

**Quiz 6: Automation** covers control systems, sensors, data analytics, and robotics.

**See: quizzes/quiz_06.md**

---

## Next Module Preview

**Module 7: Crop Selection and Optimization**

We'll explore which crops are best suited for vertical farming and how to optimize varieties for indoor production.

---

*Module 6 of 12 | Course 213: Vertical Farming Techniques*
*EcoFusion Academy*
