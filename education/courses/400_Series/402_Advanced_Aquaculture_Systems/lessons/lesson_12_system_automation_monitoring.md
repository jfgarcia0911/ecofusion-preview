# Lesson 12: System Automation & Monitoring

## Course 402: Advanced Aquaculture Systems | Week 12

---

## Learning Objectives

1. Design automated control systems for RAS
2. Implement SCADA and IoT monitoring
3. Configure alarms and backup systems
4. Analyze data for system optimization
5. Implement predictive maintenance
6. Integrate automated feeding systems

---

## Automation Architecture

### System Levels

```
┌────────────────────────────────────────────────────┐
│      RAS AUTOMATION PYRAMID                        │
├────────────────────────────────────────────────────┤
│                                                     │
│              ┌──────────────┐                      │
│              │  MANAGEMENT  │  ← Cloud/ERP        │
│              │    LEVEL     │    Business data    │
│              └──────┬───────┘                      │
│                     │                              │
│            ┌────────┴────────┐                     │
│            │    SCADA/HMI    │  ← Supervisory     │
│            │  Visualization  │    control         │
│            └────────┬────────┘                     │
│                     │                              │
│          ┌──────────┴──────────┐                   │
│          │   CONTROL LEVEL     │  ← PLCs          │
│          │   (Logic/Decisions) │    Controllers   │
│          └──────────┬──────────┘                   │
│                     │                              │
│        ┌────────────┴────────────┐                 │
│        │    FIELD DEVICES        │  ← Sensors     │
│        │  (Sensors/Actuators)    │    Pumps       │
│        └─────────────────────────┘    Valves      │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Sensor Technology

### Critical Sensors

**Water Quality Probes:**

| Sensor | Measurement | Range | Accuracy | Maintenance |
|--------|-------------|-------|----------|-------------|
| Dissolved Oxygen | DO (mg/L) | 0-20 mg/L | ±0.1 mg/L | Weekly cal, monthly clean |
| pH | Acidity | 0-14 pH | ±0.05 pH | Weekly cal, monthly replace |
| ORP | Redox potential | -1000 to +1000 mV | ±10 mV | Monthly cal |
| Temperature | °C or °F | -5 to 50°C | ±0.1°C | Annual cal |
| Conductivity | Salinity/TDS | 0-100 mS/cm | ±1% | Quarterly cal |
| Turbidity | Water clarity | 0-1000 NTU | ±2% | Monthly clean |
| Ammonia | TAN | 0-100 mg/L | ±5% | Bi-weekly cal |

**Flow Measurement:**

```
Types:
1. Electromagnetic (mag meters)
   - Accuracy: ±0.5%
   - No moving parts
   - Cost: $$$

2. Ultrasonic
   - Non-invasive
   - Clamp-on installation
   - Cost: $$$$

3. Paddle wheel
   - Simple, reliable
   - Accuracy: ±2%
   - Cost: $

Placement: Main recirculation lines, each tank inlet
Frequency: Continuous
```

**Level Sensors:**

```
Critical Points:
- Sump low level (emergency shutdown)
- Sump high level (overflow alarm)
- Tank levels (backup detection)
- Reservoir levels

Types:
- Float switches (simple, reliable)
- Ultrasonic (non-contact)
- Pressure transducers (continuous)

Alarms: Low and high level
```

---

## Programmable Logic Controllers (PLCs)

### PLC Functions

```
┌────────────────────────────────────────────────────┐
│              PLC CONTROL LOGIC                     │
├────────────────────────────────────────────────────┤
│                                                     │
│  INPUT READING:                                    │
│  - Read all sensor values (scan cycle: 100ms)     │
│  - DO, pH, temperature, flow, level               │
│                                                     │
│  LOGIC PROCESSING:                                 │
│  IF DO < 6.0 mg/L THEN                            │
│    Increase oxygen injection (0-10V signal)       │
│    IF DO < 4.0 mg/L THEN                          │
│      Activate backup aeration                     │
│      Send alarm to operator                       │
│    END IF                                          │
│  END IF                                            │
│                                                     │
│  IF pH < 7.0 THEN                                  │
│    Activate buffer dosing pump                    │
│    Log event                                       │
│  END IF                                            │
│                                                     │
│  OUTPUT CONTROL:                                   │
│  - Activate/deactivate pumps                      │
│  - Modulate valve positions                       │
│  - Control feed dispensers                        │
│  - Trigger alarms                                 │
│                                                     │
│  DATA LOGGING:                                     │
│  - Record all parameters every 1-5 minutes        │
│  - Store locally and to cloud                     │
│  - Generate reports                               │
│                                                     │
└────────────────────────────────────────────────────┘
```

### PLC Programming Example

**Dissolved Oxygen Control:**

```
LADDER LOGIC (Conceptual):

├──┤ DO_Sensor < 6.5 mg/L ├──────( O2_Valve_Open )────┤

├──┤ DO_Sensor > 9.0 mg/L ├──────( O2_Valve_Close )───┤

├──┤ DO_Sensor < 4.0 mg/L ├──────( Emergency_Aeration )─┤
│                                                         │
└─────────────────────────────( Alarm_Low_DO )──────────┘

PID Control for Fine Tuning:
- Proportional: Adjust O₂ flow based on error magnitude
- Integral: Correct persistent offset
- Derivative: Anticipate rate of change

Setpoint: 7.5 mg/L
PID output: 0-100% valve position
Update rate: Every 5 seconds
```

---

## SCADA Systems

### SCADA Components

```
┌────────────────────────────────────────────────────┐
│         SCADA SYSTEM ARCHITECTURE                  │
├────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────────────────────────┐         │
│  │      SCADA SERVER (Computer)         │         │
│  │  - Data historian                    │         │
│  │  - Alarm management                  │         │
│  │  - Trend analysis                    │         │
│  │  - Report generation                 │         │
│  └─────────────┬────────────────────────┘         │
│                │                                    │
│                │ Ethernet/Modbus/OPC               │
│                │                                    │
│      ┌─────────┼─────────┬─────────┐              │
│      │         │         │         │              │
│   ┌──▼──┐   ┌─▼───┐  ┌──▼──┐   ┌─▼───┐          │
│   │PLC 1│   │PLC 2│  │PLC 3│   │PLC 4│          │
│   │Tank │   │Bio- │  │O₂   │   │Feed │          │
│   │ Mgmt│   │filter│  │System│  │System│        │
│   └─────┘   └─────┘  └─────┘   └─────┘          │
│                                                     │
│  ┌──────────────────────────────────────┐         │
│  │      OPERATOR INTERFACE (HMI)        │         │
│  │  - Real-time display                 │         │
│  │  - Touch screen controls             │         │
│  │  - Alarm acknowledgment              │         │
│  │  - Manual overrides                  │         │
│  └──────────────────────────────────────┘         │
│                                                     │
└────────────────────────────────────────────────────┘
```

### HMI (Human-Machine Interface) Design

**Dashboard Example:**

```
┌────────────────────────────────────────────────────┐
│     FACILITY OVERVIEW - REAL-TIME DISPLAY          │
├────────────────────────────────────────────────────┤
│                                                     │
│  TANK STATUS:                    ALARMS:           │
│  ┌─────┐ ┌─────┐ ┌─────┐        [!] None Active   │
│  │ T-1 │ │ T-2 │ │ T-3 │                           │
│  │ ● OK│ │ ● OK│ │ ● OK│        SYSTEM STATUS:     │
│  └─────┘ └─────┘ └─────┘        • All pumps: ON   │
│                                  • Biofilter: OK   │
│  WATER QUALITY SUMMARY:          • O₂ system: OK   │
│  DO:     7.2 mg/L   ✓                              │
│  pH:     7.6        ✓            PRODUCTION:       │
│  Temp:   27.8°C     ✓            Biomass: 42,500kg │
│  TAN:    0.4 mg/L   ✓            Feed today: 850kg │
│                                                     │
│  ┌────────────────────────────────────────┐       │
│  │     DO TREND (Last 24 Hours)            │       │
│  │ 9.0 ┤                  ╱─╲               │       │
│  │ 8.0 ┤       ╱─╲      ╱   ╲              │       │
│  │ 7.0 ┤─────╱   ╲────╱     ╲─────        │       │
│  │ 6.0 ┤                                    │       │
│  │     └────────────────────────────────   │       │
│  │     00:00  06:00  12:00  18:00  24:00   │       │
│  └────────────────────────────────────────┘       │
│                                                     │
│  [Manual Override] [Reports] [Settings] [Logout]  │
└────────────────────────────────────────────────────┘
```

---

## Automated Feeding Systems

### Feeder Types

**1. Belt Feeders:**

```
┌────────────────────────────────────────────────────┐
│           BELT FEEDER SYSTEM                       │
├────────────────────────────────────────────────────┤
│                                                     │
│   Feed Hopper                                      │
│       │                                            │
│       ↓                                            │
│   ┌─────────┐                                      │
│   │▓▓▓▓▓▓▓▓▓│  ← Vibrating belt                   │
│   │→→→→→→→→→│    Speed variable                   │
│   └────┬────┘                                      │
│        ↓                                            │
│   Drop tube to tank                                │
│                                                     │
│  Features:                                         │
│  - Continuous delivery                             │
│  - Precise control                                 │
│  - Multiple outputs                                │
│                                                     │
│  Capacity: 1-100 kg/hour                          │
│  Accuracy: ±2%                                     │
│  Cost: $2,000-10,000 per unit                     │
└────────────────────────────────────────────────────┘
```

**2. Demand Feeders:**

```
Fish-activated:
- Trigger rod hangs in water
- Fish bump rod → feed dispenses
- Self-regulating based on appetite

Advantages:
- Reduces overfeeding
- Fish feed when hungry
- Lower labor

Disadvantages:
- Dominant fish may overfeed
- Difficult to track consumption
- Not suitable for all species
```

**3. Programmable Blower Feeders:**

```
Pneumatic delivery:
- Feed stored in hopper
- Air pressure delivers feed through pipes
- Multiple drop points per hopper
- Computer-controlled timing and quantity

Programming:
Time 1: 06:00 - 50g
Time 2: 09:00 - 50g
Time 3: 12:00 - 50g
Time 4: 15:00 - 50g
Time 5: 18:00 - 50g
Total: 250g daily

Can adjust per tank based on biomass
```

### Feed Management Software

```
Integration with production system:

Input Data:
- Tank biomass (from inventory system)
- Water temperature (from sensors)
- Fish size (from grading records)
- Feed type and size

Calculation:
Daily feed = Biomass × Feeding rate (from tables)
Adjusted for temperature, growth stage

Output:
- Feed amount per tank
- Feed timing schedule
- Send commands to feeders
- Track actual vs planned feeding
- Alert if consumption abnormal
```

---

## Alarm Management

### Alarm Priority Levels

```
┌────────────────────────────────────────────────────┐
│              ALARM HIERARCHY                       │
├────────────────────────────────────────────────────┤
│                                                     │
│  CRITICAL (RED):                                   │
│  - DO < 4.0 mg/L                                   │
│  - Sump low level (pump failure imminent)         │
│  - Power failure                                   │
│  - Main pump failure                               │
│  → Immediate action required                       │
│  → SMS + Phone call + Audible alarm                │
│                                                     │
│  HIGH (ORANGE):                                    │
│  - DO < 5.0 mg/L                                   │
│  - pH < 6.5 or > 8.5                               │
│  - Temperature ±3°C from setpoint                  │
│  - TAN > 2.0 mg/L                                  │
│  → Action needed within 1 hour                     │
│  → SMS + Email notification                        │
│                                                     │
│  MEDIUM (YELLOW):                                  │
│  - DO < 6.0 mg/L                                   │
│  - pH < 7.0 or > 8.0                               │
│  - Temperature ±2°C from setpoint                  │
│  - TAN > 1.0 mg/L                                  │
│  → Monitor closely, action within 4 hours          │
│  → Email notification                              │
│                                                     │
│  LOW (BLUE):                                       │
│  - Sensor calibration due                          │
│  - Maintenance reminder                            │
│  - Weekly report ready                             │
│  → Informational, no urgency                       │
│  → Log entry only                                  │
│                                                     │
└────────────────────────────────────────────────────┘
```

### Multi-Channel Notification

```
Notification Methods:

1. On-site audible alarm
   - Klaxon for critical alarms
   - Speaker announcements

2. SMS text message
   - To on-call personnel
   - Multiple recipients for critical

3. Phone call (auto-dialer)
   - Critical alarms only
   - Escalation if no acknowledgment

4. Email
   - Detailed alarm information
   - Trend data attached
   - Action recommendations

5. Mobile app push notification
   - Real-time facility status
   - Acknowledge alarms remotely

6. SCADA screen pop-up
   - For operators at facility
   - Force acknowledgment
```

---

## Remote Monitoring and IoT

### IoT Architecture

```
┌────────────────────────────────────────────────────┐
│        IOT-ENABLED RAS MONITORING                  │
├────────────────────────────────────────────────────┤
│                                                     │
│  ON-SITE:                                          │
│  ┌─────────────────────────────────┐              │
│  │ Sensors → Gateway → Router      │              │
│  │           (Edge computing)       │              │
│  └──────────────┬──────────────────┘              │
│                 │                                   │
│                 │ Internet/4G/5G                   │
│                 ↓                                   │
│  CLOUD:                                            │
│  ┌─────────────────────────────────┐              │
│  │ Cloud Server                     │              │
│  │ - Data storage                   │              │
│  │ - Analytics                      │              │
│  │ - Machine learning               │              │
│  │ - Alerts                         │              │
│  └──────────────┬──────────────────┘              │
│                 │                                   │
│                 ↓                                   │
│  USER ACCESS:                                      │
│  ┌──────┐  ┌────────┐  ┌────────┐                │
│  │Mobile│  │ Tablet │  │Computer│                │
│  │ App  │  │  App   │  │Web dash│                │
│  └──────┘  └────────┘  └────────┘                │
│                                                     │
│  Access from anywhere, anytime                     │
│  View real-time data, historical trends            │
│  Receive alerts                                    │
│  Remote control (with security)                    │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Data Analytics and Optimization

### Predictive Analytics

**Example: Oxygen Demand Forecasting**

```
Machine Learning Model:

Inputs:
- Historical DO consumption
- Biomass
- Feeding rate
- Water temperature
- Time of day
- Day of week

Output:
- Predicted O₂ demand for next 24 hours

Application:
- Pre-adjust oxygen supply
- Schedule oxygen deliveries
- Prevent shortages
- Optimize energy use
```

**Equipment Failure Prediction:**

```
Monitor equipment performance:

Pump 1:
- Current draw trending up (+15% over 3 months)
- Vibration increasing
- Temperature +5°C higher than normal

Prediction: Bearing failure likely within 2-4 weeks
Action: Schedule preventive maintenance
Result: Avoid catastrophic failure and fish loss
```

### Performance Benchmarking

```
┌────────────────────────────────────────────────────┐
│         FACILITY PERFORMANCE ANALYTICS             │
├────────────────────────────────────────────────────┤
│                                                     │
│  CURRENT MONTH vs LAST MONTH:                      │
│                                                     │
│  FCR: 1.18 vs 1.25 (-5.6% improvement) ✓          │
│  Survival: 96% vs 94% (+2% improvement) ✓         │
│  Growth rate: 2.3%/day vs 2.1%/day (+9.5%) ✓      │
│  DO variance: ±0.3 mg/L vs ±0.8 mg/L (better) ✓   │
│  Water exchange: 4.2% vs 5.1% (reduced) ✓         │
│                                                     │
│  INSIGHTS:                                         │
│  • Improved DO stability correlated with better FCR│
│  • Temperature consistency key to survival         │
│  • Weekend feeding schedule optimization working   │
│                                                     │
│  RECOMMENDATIONS:                                  │
│  • Continue current DO management                  │
│  • Investigate Thursday DO dips                    │
│  • Consider upgrading Tank 12 aeration             │
│                                                     │
└────────────────────────────────────────────────────┘
```

---

## Backup and Redundancy

### Critical Systems Backup

```
OXYGEN DELIVERY:
Primary: Pure O₂ injection system
Backup 1: LHO with blower
Backup 2: Emergency battery-powered aerators
Backup 3: Portable generator + air stones

POWER:
Primary: Grid electricity
Backup 1: Automatic transfer switch → Generator
Backup 2: UPS (uninterruptible power supply) for controls
Backup 3: Manual generator start procedure

PUMPING:
Primary: Main recirculation pumps (2× 50% capacity)
Backup: Either pump can maintain minimum flow
Emergency: Portable backup pump

MONITORING:
Primary: PLC system
Backup 1: Secondary PLC (redundant)
Backup 2: Battery-powered sensor alarms
Backup 3: Manual checks every 4 hours during power loss
```

---

## Implementation Roadmap

### Phase 1: Basic Automation (Months 1-3)

```
Install:
- DO sensors (continuous in sump + 3 tanks)
- Temperature sensors (all tanks)
- Level sensors (sump high/low)
- Basic PLC for pump control
- Alarm system (SMS + audible)

Cost: $15,000-25,000
ROI: 1-2 years (labor reduction + loss prevention)
```

### Phase 2: Expanded Monitoring (Months 4-6)

```
Add:
- pH sensors
- Flow meters
- More comprehensive PLC logic
- SCADA system with HMI
- Data logging and trending

Cost: $25,000-40,000
Benefits: Better control, data for optimization
```

### Phase 3: Full Integration (Months 7-12)

```
Implement:
- Automated feeding system
- IoT remote monitoring
- Cloud data analytics
- Predictive maintenance
- Mobile app access

Cost: $30,000-60,000
Benefits: Optimized production, reduced labor, predictive insights
```

---

## Key Takeaways

1. **Automate critical parameters** - DO, temperature, level minimum
2. **Redundancy saves lives** - backup all critical systems
3. **Data drives decisions** - log everything, analyze trends
4. **Alarms must be actionable** - too many = alarm fatigue
5. **Remote monitoring essential** - 24/7 access needed
6. **Phase implementation** - start simple, expand over time
7. **ROI is proven** - automation pays for itself quickly
8. **Predictive > Reactive** - use data to prevent problems

---

*Next Lesson: Module 13 - Economic Analysis & Feasibility*

*EcoFusion Academy - Course 402: Advanced Aquaculture Systems*
