# Module 8: Environmental Control System Integration

## Learning Objectives

- Design sensor networks for comprehensive monitoring
- Architect control system hierarchies
- Implement multi-zone control strategies
- Design feedback loops and PID control
- Develop alarm and fault detection systems

## 1. Sensor Network Design

### 1.1 Sensor Selection and Placement

**Critical Parameters to Monitor:**

| Parameter | Sensor Type | Accuracy | Range | Cost | Quantity per 1,000m² |
|-----------|-------------|----------|-------|------|---------------------|
| Air Temperature | RTD or Thermistor | ±0.3°C | -20 to 80°C | $30-80 | 15-25 |
| Relative Humidity | Capacitive | ±2% RH | 0-100% RH | $50-150 | 15-25 |
| CO₂ | NDIR | ±40 ppm | 0-5,000 ppm | $200-500 | 4-8 |
| Light Intensity (PPFD) | Quantum sensor | ±5% | 0-2,000 μmol/m²/s | $300-600 | 8-12 |
| pH | Glass electrode | ±0.1 pH | 0-14 | $150-400 | 2-4 |
| EC | Conductivity probe | ±2% | 0-10 mS/cm | $200-500 | 2-4 |
| Water Temperature | RTD | ±0.2°C | 0-50°C | $40-100 | 4-8 |
| Dissolved Oxygen | Optical | ±0.3 mg/L | 0-20 mg/L | $500-1,200 | 2-4 |
| Pressure | Piezoresistive | ±1% | 0-100 psi | $100-250 | 4-6 |
| Flow Rate | Magnetic or turbine | ±1-2% | 0.1-100 GPM | $200-800 | 6-10 |

**Sensor Placement Strategy:**
```
Three-Dimensional Grid:

Vertical Distribution (8-level system):
Level 8: 3 sensors ────────┐
Level 7: 3 sensors         │ Upper zone
Level 6: 3 sensors ────────┤
Level 5: 3 sensors         │ Middle zone
Level 4: 3 sensors ────────┤
Level 3: 3 sensors         │ Lower zone
Level 2: 3 sensors         │
Level 1: 3 sensors ────────┘

Horizontal Distribution (per level):
┌────────────────────────┐
│  *          *          │  * = Sensor
│                        │    location
│         *              │
│                        │
│  *          *          │
└────────────────────────┘

Avoid:
- Direct light exposure (shading required)
- Dead air zones
- Water splash zones
- Near doors/vents (transient conditions)
```

### 1.2 Sensor Calibration and Maintenance

**Calibration Frequency:**
```
Sensor Type          | Frequency     | Method
---------------------|---------------|---------------------------
Temperature          | Annual        | Ice bath, boiling water
Humidity             | Quarterly     | Saturated salt solutions
CO₂                  | Monthly       | Known gas standards
pH                   | Weekly        | pH 4.0, 7.0, 10.0 buffers
EC                   | Bi-weekly     | Known conductivity standards
PAR/PPFD             | Semi-annual   | Calibrated reference sensor
Dissolved Oxygen     | Monthly       | Air-saturated water
Flow meters          | Annual        | Bucket test or flow standard

Calibration log requirements:
- Date and time
- Technician name
- Pre-calibration readings
- Post-calibration readings
- Standards used (lot numbers, expiration)
- Pass/fail criteria
- Corrective actions if needed
```

## 2. Control System Architecture

### 2.1 Hierarchical Control Structure

```
Enterprise Level (Cloud/Server)
    ↓
┌─────────────────────────────────┐
│  Data Analytics & Reporting     │ ← Historical data, KPIs
│  Recipe Management              │ ← Crop-specific setpoints
│  Remote Monitoring              │ ← Mobile/web access
└─────────────────────────────────┘
    ↓ ↑ (Ethernet/WiFi)
Supervisory Level (BMS/SCADA)
    ↓
┌─────────────────────────────────┐
│  Building Management System     │ ← Facility-wide coordination
│  - HVAC control                 │
│  - Lighting schedules           │
│  - Irrigation management        │
│  - Alarm coordination           │
└─────────────────────────────────┘
    ↓ ↑ (Modbus TCP/IP, BACnet)
Field Level (PLCs, Zone Controllers)
    ↓
┌────────────┬────────────┬────────────┐
│  Zone 1    │  Zone 2    │  Zone 3    │ ← Independent control
│  PLC       │  PLC       │  PLC       │
└────────────┴────────────┴────────────┘
    ↓ ↑ (Analog 4-20mA, Digital I/O)
Device Level (Sensors, Actuators)
    ↓
[Sensors] [Valves] [Motors] [Lights]
```

### 2.2 Communication Protocols

**Protocol Comparison:**

| Protocol | Speed | Distance | Topology | Cost | Best Use |
|----------|-------|----------|----------|------|----------|
| Modbus RTU | 9.6-115 kbps | 1,200m | Multi-drop | $ | Simple sensor networks |
| Modbus TCP/IP | 10-100 Mbps | Unlimited (network) | Ethernet | $$ | Facility-wide integration |
| BACnet | Variable | Network-dependent | IP, MSTP | $$$ | HVAC, building systems |
| EtherNet/IP | 10-1,000 Mbps | Unlimited | Ethernet | $$ | Industrial automation |
| 4-20mA Analog | N/A | 300m typical | Point-to-point | $ | Individual sensors |
| Wireless (WiFi, LoRa) | Variable | 10-1,000m | Star, mesh | $$ | Remote or retrofit |

**Recommended Architecture:**
```
Primary: Modbus TCP/IP (facility backbone)
Secondary: Analog 4-20mA (critical sensors)
Tertiary: WiFi (mobile devices, non-critical)

Network Design:
- Gigabit Ethernet backbone
- Managed switches with VLAN segmentation
- Redundant paths for critical systems
- Battery backup (UPS) for network equipment
- Fiber optic for long runs (>100m) or noisy environments
```

## 3. Multi-Zone Control Strategies

### 3.1 Zone Definition

**Zoning Approaches:**
```
Option 1: Physical Zones (by location)
┌─────────┬─────────┬─────────┐
│ Zone 1  │ Zone 2  │ Zone 3  │ North, Center, South
└─────────┴─────────┴─────────┘

Option 2: Functional Zones (by purpose)
┌───────────┬──────────┬──────────┐
│Germination│  Nursery │Production│
└───────────┴──────────┴──────────┘

Option 3: Crop Zones (by variety)
┌────────┬────────┬────────┬────────┐
│Lettuce │ Basil  │  Kale  │ Herbs  │
└────────┴────────┴────────┴────────┘

Option 4: Hybrid (combination)
Recommended for most operations

Example: 1,000 m² facility
- Germination room: 50 m² (1 zone)
- Nursery area: 150 m² (1 zone)
- Production area: 800 m² (4 zones, 200 m² each)
Total: 6 zones

Control granularity vs. cost:
Fewer zones: Lower cost, less precision
More zones: Higher cost, better control
Optimal: 4-8 zones for typical vertical farm
```

### 3.2 Zone Control Logic

**Temperature Control Sequence:**
```
Zone Temperature Control (executed every 60 seconds):

READ current_temp FROM zone_sensor
READ setpoint FROM recipe
READ deadband FROM config (typically ±1°F)

IF current_temp > setpoint + deadband THEN
    // Cooling required
    cooling_demand = (current_temp - setpoint) × gain
    IF cooling_demand > max_cooling THEN
        cooling_demand = max_cooling
    END IF
    OUTPUT cooling_demand TO hvac_valve
    OUTPUT 0 TO heating_valve

ELSE IF current_temp < setpoint - deadband THEN
    // Heating required
    heating_demand = (setpoint - current_temp) × gain
    IF heating_demand > max_heating THEN
        heating_demand = max_heating
    END IF
    OUTPUT heating_demand TO heating_valve
    OUTPUT 0 TO hvac_valve

ELSE
    // Within deadband, maintain current state
    // No change to valve positions
END IF

LOG timestamp, zone, temp, setpoint, demand
```

**Humidity Control Sequence:**
```
Zone Humidity Control (executed every 120 seconds):

READ current_rh FROM zone_sensor
READ setpoint_rh FROM recipe
READ current_temp FROM zone_sensor

CALCULATE current_vpd FROM temp AND rh
CALCULATE setpoint_vpd FROM recipe

IF current_vpd < setpoint_vpd - 0.1 THEN
    // Humidity too high, dehumidify
    dehum_demand = (setpoint_vpd - current_vpd) × 10.0
    ENABLE dehumidifier
    OUTPUT dehum_demand TO dehum_controller

ELSE IF current_vpd > setpoint_vpd + 0.1 THEN
    // Humidity too low, humidify (rare in VF)
    hum_demand = (current_vpd - setpoint_vpd) × 10.0
    ENABLE humidifier
    OUTPUT hum_demand TO hum_controller

ELSE
    // Within range
    MAINTAIN current state
END IF

// Interlock: Don't dehumidify if heating active
IF heating_valve > 0 THEN
    DISABLE dehumidifier
END IF
```

## 4. PID Control Implementation

### 4.1 PID Theory Applied to Vertical Farms

**PID Equation:**
```
Output(t) = Kp × e(t) + Ki × ∫e(t)dt + Kd × de(t)/dt

Where:
e(t) = Error = Setpoint - Process_Variable
Kp = Proportional gain
Ki = Integral gain
Kd = Derivative gain

Proportional: Immediate response proportional to error
Integral: Eliminates steady-state error over time
Derivative: Dampens oscillations, anticipates change
```

**Tuning Example for Temperature Control:**
```
System: Zone HVAC control
Process variable: Air temperature
Control output: Cooling valve position (0-100%)

Initial tuning (Ziegler-Nichols method):
1. Set Ki = 0, Kd = 0
2. Increase Kp until oscillation occurs
3. Note Kp at oscillation (Ku) and period (Tu)
4. Calculate:
   Kp = 0.6 × Ku
   Ki = 2 × Kp / Tu
   Kd = Kp × Tu / 8

Example values:
Ku = 8.0
Tu = 300 seconds (5 minutes)

Calculated tuning:
Kp = 0.6 × 8.0 = 4.8
Ki = 2 × 4.8 / 300 = 0.032
Kd = 4.8 × 300 / 8 = 180

Fine tuning (iterative):
Kp = 4.5 (slightly reduced for stability)
Ki = 0.025 (slightly reduced to avoid overshoot)
Kd = 150 (reduced to minimize noise sensitivity)

Performance with tuned PID:
- Settling time: 10-15 minutes
- Overshoot: <1°F
- Steady-state error: <0.2°F
```

### 4.2 Advanced Control Strategies

**Cascade Control:**
```
Used when intermediate variable can be controlled faster

Example: VPD Control

Primary Loop (slow):
Setpoint: VPD = 1.0 kPa
Measured: Current VPD
Output: Target relative humidity

Secondary Loop (fast):
Setpoint: RH from primary loop
Measured: Current RH
Output: Dehumidifier speed

Advantage: Faster response, better stability

Implementation:
CALCULATE target_rh FROM vpd_setpoint AND current_temp
USE target_rh AS setpoint FOR humidity_controller
HUMIDITY controller outputs TO dehumidifier
```

**Feed forward Control:**
```
Anticipate disturbances before they affect process

Example: Lighting Heat Load

WHEN lights_turn_on:
    CALCULATE expected_heat = light_power × 0.55
    INCREASE cooling_setpoint BY heat_compensation
    cooling_setpoint = base_cooling + (expected_heat / 3.5)
END WHEN

This prevents temperature spike when lights activate

Benefit: Proactive vs. reactive control
```

## 5. Alarm and Fault Detection

### 5.1 Alarm Hierarchy

**Alarm Levels:**
```
Level 1 - Information:
- System state changes
- Scheduled events completed
- Log: Yes, Alert: Dashboard only

Level 2 - Warning:
- Parameter approaching limit
- Non-critical equipment offline
- Log: Yes, Alert: Email

Level 3 - Alarm:
- Parameter exceeded limit
- Equipment failure
- Log: Yes, Alert: Email + SMS

Level 4 - Critical:
- Life safety issue
- Multiple system failures
- Crop loss imminent
- Log: Yes, Alert: Email + SMS + Phone call + On-site alarm

Example Alarm Definitions:
Temperature > Setpoint + 5°F: Warning (Level 2)
Temperature > Setpoint + 8°F: Alarm (Level 3)
HVAC failure + Temperature rising: Critical (Level 4)
```

### 5.2 Fault Detection Logic

**Sensor Validation:**
```
Detect sensor failures before they cause control problems

Range Check:
IF sensor_value < minimum_possible OR sensor_value > maximum_possible THEN
    ALARM "Sensor out of range"
    USE backup_sensor OR default_value
    FLAG sensor_for_maintenance
END IF

Rate of Change Check:
IF ABS(sensor_value - previous_value) > max_rate_of_change THEN
    ALARM "Sensor reading changed too fast"
    INVESTIGATE sensor_or_actual_condition
END IF

Redundancy Check:
IF ABS(sensor_1 - sensor_2) > tolerance THEN
    ALARM "Sensor discrepancy detected"
    USE average_value OR most_recent_calibrated
    SCHEDULE sensor_calibration
END IF

Drift Detection:
TRACK sensor_calibration_adjustments OVER time
IF calibration_drift > threshold THEN
    ALARM "Sensor degradation detected"
    SCHEDULE sensor_replacement
END IF
```

**Predictive Maintenance:**
```
Use data trends to predict failures

Motor Current Monitoring:
TRACK motor_current OVER time
CALCULATE baseline = average(last_30_days)
IF current_draw > baseline × 1.15 THEN
    WARNING "Motor drawing excessive current"
    POSSIBLE_CAUSES: bearing wear, pump cavitation
END IF

Filter Pressure Drop:
TRACK pressure_drop ACROSS filter
WHEN pressure_drop > threshold THEN
    ALERT "Filter replacement needed"
    CALCULATE days_until_failure FROM trend
END WHEN

Pump Performance:
TRACK flow_rate AT constant_pressure
IF flow_rate_degradation > 10% THEN
    WARNING "Pump efficiency declining"
    SCHEDULE maintenance
END IF
```

## 6. Data Logging and Analytics

### 6.1 Data Architecture

**Data Collection:**
```
Hierarchical Data Storage:

Real-Time (PLC memory):
- Sample rate: 1-10 seconds
- Retention: 24 hours
- Purpose: Control decisions

Time-Series Database (on-site server):
- Sample rate: 1 minute averages
- Retention: 1 year
- Purpose: Trending, analysis

Cloud Storage (AWS/Azure):
- Sample rate: 5 minute averages
- Retention: Indefinite
- Purpose: Long-term analytics, ML

Data volume calculation:
Sensors: 80 points
Sample rate: 1 per minute
Data size: 4 bytes per point
Daily: 80 × 1,440 min × 4 bytes = 460 KB/day
Annual: 168 MB/year (small, inexpensive)
```

### 6.2 Key Performance Indicators (KPIs)

**Environmental Control KPIs:**
```
Temperature Control:
- % time within ±2°F of setpoint: Target >95%
- Average deviation: Target <1°F
- Excursion events per week: Target <5

Humidity/VPD Control:
- % time within ±0.2 kPa of target VPD: Target >90%
- Average VPD: Track by crop and stage

Light Delivery:
- Actual DLI vs. target DLI: Target >95%
- Light uniformity (CV): Target <15%
- PPFD stability: Target <5% variation

CO₂ Control:
- % time within ±100 ppm of setpoint: Target >85%
- Average CO₂ during photoperiod: Track

Irrigation:
- EC stability (std dev): Target <0.1 mS/cm
- pH stability (std dev): Target <0.15 pH units
- Flow rate stability: Target <5% variation

Energy Efficiency:
- kWh per kg of production: Track and reduce
- HVAC energy vs. lighting energy ratio: Optimize
- Peak demand vs. average: Minimize for cost

Equipment Reliability:
- Uptime %: Target >99.5%
- Mean time between failures: Maximize
- Mean time to repair: Minimize
```

## 7. Integration Case Study

**2,000 m² Facility Control System Design:**

```
System Architecture:

Central BMS:
- Platform: Siemens Desigo or Tridium Niagara
- Server: Industrial PC, redundant
- Cost: $25,000

Zone Controllers (6 zones):
- PLCs: Allen-Bradley Micro850 or Siemens S7-1200
- I/O capacity: 32 points each
- Cost: $3,500 each × 6 = $21,000

Sensors (per zone average):
- Temperature/RH: 4 @ $80 = $320
- CO₂: 1 @ $400 = $400
- PPFD: 2 @ $450 = $900
- pH/EC: 1 @ $600 = $600
- Flow/pressure: 2 @ $200 = $400
Subtotal per zone: $2,620
Total 6 zones: $15,720

Control Valves & Actuators:
- HVAC zone valves: 12 @ $350 = $4,200
- Nutrient dosing pumps: 12 @ $500 = $6,000
- Irrigation valves: 24 @ $120 = $2,880
Total: $13,080

Networking:
- Managed switches: $3,500
- Cabling and conduit: $8,000
- WiFi access points: $1,200
Total: $12,700

Software & Licenses:
- BMS software: $8,000
- SCADA/HMI: $5,000
- Cloud platform (annual): $2,400
Total: $15,400

Engineering & Programming:
- System design: $15,000
- PLC programming: $20,000
- Commissioning: $10,000
Total: $45,000

Grand Total: $148,900 ($74/m²)

Operating Costs (Annual):
- Sensor calibration: $3,000
- Software licenses/cloud: $2,400
- Maintenance contracts: $8,000
Total: $13,400/year
```

## 8. Key Takeaways

1. **Sensor quality matters** - Cheap sensors cost more in false alarms and poor control
2. **Calibration is not optional** - Drift degrades control; schedule regular calibration
3. **Hierarchical control scales** - Separate supervisory from field-level control
4. **PID tuning takes time** - But properly tuned loops save energy and improve yield
5. **Alarms must be actionable** - Too many alarms lead to alarm fatigue
6. **Data is valuable** - Logging enables continuous improvement
7. **Integration is complex** - Budget adequate engineering time

## 9. Practical Exercise

Design control system for:
- 800 m² facility, 3 crop zones
- 50 sensor points total
- Budget: $75,000

Deliverables:
1. Control architecture diagram
2. Sensor list and placement plan
3. PLC/controller specifications
4. Communication network design
5. Alarm strategy
6. Cost breakdown

## Additional Resources

- ISA Standards (International Society of Automation)
- PID tuning guides and software tools
- BACnet and Modbus protocol specifications
- SCADA/BMS vendor training programs

## Next Module

**Module 9: Energy Systems and Efficiency Optimization** - Design energy systems and strategies for maximum efficiency.

---

**Module 8 Complete** - Proceed to Module 8 Quiz.
