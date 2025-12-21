# Lesson 10: Automation, Sensors, and Control Systems

## Introduction

Automation transforms NFT systems from labor-intensive operations to precision-managed facilities. Modern sensors, controllers, and data analytics enable real-time monitoring, automated adjustments, and optimization of growing conditions. This lesson explores sensor technologies, control strategies, and integration of automation systems for commercial NFT operations.

## Sensor Technologies

### Essential Monitoring Parameters

```
CORE SENSOR SUITE FOR NFT:

Parameter         Sensor Type           Range         Accuracy    Cost
─────────────────────────────────────────────────────────────────────────
pH                Glass electrode       0-14          ±0.1        $200-500
EC                Conductivity probe    0-10 mS/cm    ±2%         $150-400
Temperature       RTD/Thermistor        -20 to 80°C   ±0.2°C      $50-150
Dissolved O₂      Optical/Galvanic      0-20 mg/L     ±0.2 mg/L   $500-1500
Flow Rate         Paddle/Ultrasonic     0-100 L/min   ±5%         $100-400
Solution Level    Float/Ultrasonic      0-200 cm      ±1cm        $50-200
Light (PAR)       Quantum sensor        0-3000 µmol   ±5%         $300-800
Air Temp          Thermistor            -20 to 60°C   ±0.3°C      $20-80
Humidity          Capacitive            0-100% RH     ±3%         $40-150
CO₂               NDIR                  0-5000 ppm    ±50 ppm     $300-800

Minimum system: pH, EC, Temp, DO, Flow = $1,000-$3,000
Full system with environmental: $2,000-$5,000
```

### Sensor Placement Strategy

```
OPTIMAL SENSOR LOCATIONS:

┌────────────────────────────────────────────────┐
│                                                │
│  (Air T/RH/CO₂)  ← Above canopy                │
│                                                │
│  Channel 1 → [T/DO]inlet ═══════> [T/DO]out   │
│  Channel 2 → [T/DO]inlet ═══════> [T/DO]out   │
│  Channel 3 → [T/DO]inlet ═══════> [T/DO]out   │
│              [Flow meter]                      │
│                    ↓            ↓              │
│         ┌──────────────────────────┐           │
│         │ Main Reservoir           │           │
│         │ [pH] [EC] [T] [DO]       │←Primary   │
│         │ [Level sensor]           │ control   │
│         └──────────────────────────┘           │
│                    ↑                           │
│               [Pump with flow meter]           │
└────────────────────────────────────────────────┘

Rationale:
- Reservoir: Primary control point (all parameters)
- Inlet: Verify delivery conditions
- Outlet: Monitor depletion/consumption
- Ambient: Environmental correlation
- Flow: Early detection of clogs or pump failure
```

## Control System Architecture

### Tiered Control Approach

```
AUTOMATION LEVELS:

Level 1: Manual Monitoring
─────────────────────────
- Handheld meters
- Periodic checks (2-4x daily)
- Manual adjustments
- Data recording on paper/spreadsheet
- Labor: 2-4 hrs/day
- Cost: $500-$1,000
- Suitable: <100 plants, hobby

Level 2: Basic Automation
─────────────────────────
- Fixed sensors (pH, EC, temp)
- Simple timer controls
- Alarm notifications
- Basic data logging
- Manual adjustment with sensor feedback
- Labor: 0.5-1 hr/day
- Cost: $2,000-$5,000
- Suitable: 100-500 plants, small commercial

Level 3: Automated Control
──────────────────────────
- Full sensor suite
- PLC or dedicated controller
- Automated dosing (pH, EC)
- Environmental control integration
- Real-time data logging and alerts
- Labor: 0.25-0.5 hr/day (supervision)
- Cost: $8,000-$20,000
- Suitable: 500-5,000 plants, commercial

Level 4: Smart/AI System
────────────────────────
- Advanced analytics
- Predictive algorithms
- Machine learning optimization
- Remote monitoring and control
- Integrated with business systems
- Labor: 0.1-0.25 hr/day
- Cost: $20,000-$50,000+
- Suitable: >5,000 plants, large commercial
```

### Control Logic Examples

```
pH CONTROL ALGORITHM:

// Read pH sensor
current_pH = read_pH_sensor()
target_pH = 6.0
deadband = 0.2

if (current_pH > target_pH + deadband) {
    // pH too high, add acid
    acid_dose_time = calculate_dose(current_pH, target_pH)
    activate_acid_pump(acid_dose_time)
    wait(300 seconds)  // Allow mixing
    log_event("Acid added", acid_dose_time)
}
else if (current_pH < target_pH - deadband) {
    // pH too low, add base
    base_dose_time = calculate_dose(current_pH, target_pH)
    activate_base_pump(base_dose_time)
    wait(300 seconds)  // Allow mixing
    log_event("Base added", base_dose_time)
}

// Verification
if (abs(current_pH - target_pH) > 0.5) {
    send_alert("pH outside acceptable range")
}

function calculate_dose(current, target) {
    // Empirical dosing model
    pH_diff = abs(current - target)
    reservoir_volume = 200  // Liters
    dose_constant = 5  // mL acid per 0.1 pH per 100L

    dose_ml = pH_diff * 10 * (reservoir_volume / 100) * dose_constant
    dose_time_sec = dose_ml / pump_rate_ml_per_sec

    // Safety limits
    if (dose_time_sec > 30) {
        dose_time_sec = 30  // Maximum 30 sec dose
        send_alert("Large pH correction needed")
    }

    return dose_time_sec
}
```

## Dosing Systems

### Automated Nutrient Injection

```
STOCK SOLUTION DOSING:

Components:
1. Concentrated stock solutions (Tank A, Tank B)
2. Peristaltic dosing pumps (0.1-10 L/hr capacity)
3. EC sensor (feedback)
4. Controller

Configuration:

[Stock A] ────> [Pump A] ───┐
                            ├─> Main Reservoir [EC Sensor]
[Stock B] ────> [Pump B] ───┘

Control algorithm:

target_EC = 2.0 mS/cm
current_EC = read_EC_sensor()
tolerance = 0.1

if (current_EC < target_EC - tolerance) {
    EC_deficit = target_EC - current_EC
    reservoir_volume = read_level_sensor()

    // Calculate required stock volume
    stock_concentration = 100  // 100× concentrate
    stock_volume_A = (EC_deficit * reservoir_volume) / stock_concentration
    stock_volume_B = stock_volume_A  // Equal parts A and B

    // Activate pumps
    pump_A.dispense(stock_volume_A)
    pump_B.dispense(stock_volume_B)

    wait(180 seconds)  // Mixing time

    // Verify
    new_EC = read_EC_sensor()
    if (new_EC < target_EC - tolerance) {
        repeat_dose()
    }

    log_event("Nutrient added", stock_volume_A + stock_volume_B)
}
```

### pH Dosing Configuration

```
ACID/BASE INJECTION SYSTEM:

[Acid reservoir] ─> [Peristaltic pump] ─┐
                                        ├─> Mixing chamber ─> Reservoir
[Base reservoir] ─> [Peristaltic pump] ─┘

Safety features:
- Maximum dose per injection: 30 seconds
- Minimum time between doses: 5 minutes
- pH sensor verification after each dose
- High/low pH alarms
- Acid/base level sensors (prevent dry running)
- Emergency shutoff

Dosing strategy:
- Small, frequent adjustments (better than large corrections)
- Verify after each dose
- Track consumption rates (indicates problems if excessive)
- Alternate between acid/base to avoid oscillation
```

## Environmental Control Integration

### Climate Control Coordination

```
INTEGRATED FACILITY MANAGEMENT:

System components:
1. HVAC (heating, cooling, dehumidification)
2. Lighting (on/off, dimming)
3. CO₂ injection
4. Circulation fans
5. NFT solution management

Coordination example - Temperature management:

if (air_temp > 26°C) {
    // Reduce heat sources first
    dim_lights(80%)  // Reduce to 80% if possible

    // Active cooling
    if (air_temp > 27°C) {
        activate_cooling(100%)
    }

    // Solution cooling
    if (solution_temp > 23°C) {
        activate_chiller()
    }
}

// Humidity + Temperature interaction
if (humidity > 75% AND air_temp > 24°C) {
    // Disease risk - prioritize dehumidification
    activate_dehumidifier()
    // This will raise air temp, so coordinate cooling
    if (air_temp > 26°C) {
        activate_cooling()
    }
}
```

### VPD-Based Control

```
VAPOR PRESSURE DEFICIT OPTIMIZATION:

VPD = optimal for plant growth (0.8-1.2 kPa for leafy greens)

VPD = (1 - RH/100) × SVP(T)

Where SVP(T) = Saturation vapor pressure at temperature T

Calculate SVP (kPa):
SVP = 0.6108 × exp((17.27 × T) / (T + 237.3))

Control algorithm:

target_VPD = 1.0  // kPa
current_temp = read_air_temp()
current_RH = read_humidity()

current_VPD = calculate_VPD(current_temp, current_RH)

if (current_VPD < 0.8) {
    // VPD too low - reduce humidity or increase temp
    if (current_RH > 70%) {
        activate_dehumidifier()
    }
    if (current_temp < 22°C) {
        increase_heating()
    }
}
else if (current_VPD > 1.2) {
    // VPD too high - increase humidity or decrease temp
    if (current_RH < 60%) {
        activate_humidifier()  // Or misting
    }
    if (current_temp > 24°C) {
        increase_cooling()
    }
}
```

## Data Logging and Analytics

### Database Structure

```
DATA COLLECTION SCHEMA:

Table: sensor_readings
─────────────────────────────────────────────
timestamp         DATETIME
sensor_id         VARCHAR(50)
parameter         VARCHAR(20)  (pH, EC, temp, DO, etc.)
value             DECIMAL(10,4)
unit              VARCHAR(10)
location          VARCHAR(50)  (reservoir, channel_1, etc.)
system_id         INT

Table: events
─────────────────────────────────────────────
timestamp         DATETIME
event_type        VARCHAR(50)  (dose, alarm, adjustment)
description       TEXT
value             DECIMAL(10,4)
user_id           INT (if manual)

Table: crop_data
─────────────────────────────────────────────
plant_id          INT
transplant_date   DATE
harvest_date      DATE
weight            DECIMAL(8,2)  (grams)
quality_score     INT (1-10)
channel_id        INT
notes             TEXT

Sample queries:

-- Average daily parameters
SELECT
    DATE(timestamp) as date,
    AVG(value) as avg_pH,
    MIN(value) as min_pH,
    MAX(value) as max_pH
FROM sensor_readings
WHERE parameter = 'pH' AND system_id = 1
GROUP BY DATE(timestamp)

-- Correlation: DO vs. Yield
SELECT
    AVG(s.value) as avg_DO,
    AVG(c.weight) as avg_yield
FROM sensor_readings s
JOIN crop_data c ON DATE(s.timestamp) BETWEEN c.transplant_date AND c.harvest_date
WHERE s.parameter = 'DO'
GROUP BY c.plant_id
```

### Visualization and Dashboards

```
REAL-TIME MONITORING DASHBOARD:

┌─────────────────────────────────────────────────────────────┐
│  NFT System Monitor - System 1                     ⚙  🔔   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  RESERVOIR STATUS                 ENVIRONMENTAL             │
│  ┌──────────────────┐            ┌──────────────────┐      │
│  │ pH: 6.1  ✓       │            │ Air: 22.5°C  ✓   │      │
│  │ EC: 2.0  ✓       │            │ RH: 65%      ✓   │      │
│  │ Temp: 20.2°C ✓   │            │ CO₂: 850 ppm ✓   │      │
│  │ DO: 8.4 mg/L ✓   │            │ Light: 280 µmol ✓│      │
│  │ Level: 85%   ✓   │            └──────────────────┘      │
│  └──────────────────┘                                       │
│                                                             │
│  CHANNELS (1-10)                  ALERTS                    │
│  ┌──────────────────┐            ┌──────────────────┐      │
│  │ Flow: 1.8 L/min ✓│            │ None             │      │
│  │ Inlet DO: 8.2   ✓│            │                  │      │
│  │ Outlet DO: 7.1  ✓│            │                  │      │
│  └──────────────────┘            └──────────────────┘      │
│                                                             │
│  TRENDS (24 hour)                                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ pH  ╱‾‾‾╲_╱‾‾╲_╱‾‾‾╲                                │  │
│  │ EC  ──────╱‾‾‾‾‾╲────                              │  │
│  │ DO  ‾‾‾╲_╱────╲╱‾‾‾‾                               │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                             │
│  [Detailed Reports] [Export Data] [System Settings]        │
└─────────────────────────────────────────────────────────────┘

Accessible via:
- Desktop application
- Web browser
- Mobile app
- Remote access with authentication
```

## Predictive Analytics

### Machine Learning Applications

```
PREDICTIVE MODELS:

1. Yield Prediction:
   Inputs: Historical sensor data, crop variety, growth days
   Output: Expected harvest weight
   Algorithm: Random forest regression
   Accuracy: ±15% (improves with more data)

2. Disease Risk Assessment:
   Inputs: Temperature, humidity, VPD, historical disease occurrence
   Output: Risk score (0-100)
   Algorithm: Logistic regression
   Use: Preventive interventions

3. Optimal Harvest Timing:
   Inputs: Days from transplant, growth rate, market demand
   Output: Recommended harvest date
   Algorithm: Multi-objective optimization
   Benefit: Maximizes quality + market price

4. Nutrient Consumption Forecasting:
   Inputs: Plant density, growth stage, historical consumption
   Output: Predicted EC decline rate
   Algorithm: Time series (ARIMA)
   Use: Proactive nutrient replenishment

5. Energy Optimization:
   Inputs: Weather forecast, crop requirements, electricity pricing
   Output: HVAC/lighting schedule
   Algorithm: Dynamic programming
   Benefit: 10-20% energy cost reduction
```

## Remote Monitoring and Alerts

### Notification System

```
ALERT CONFIGURATION:

Priority levels:

INFO (Log only):
- Normal parameter adjustments
- Scheduled events
- System status updates

WARNING (Notify during business hours):
- Parameter approaching limits
- Sensor calibration due
- Maintenance reminders
- Moderate deviations

CRITICAL (Immediate notification):
- Parameter outside safe range
- Equipment failure
- Power loss
- Communication failure
- Significant deviations requiring intervention

Delivery methods:
- SMS/Text message (critical only)
- Email (warning + critical)
- Push notification to mobile app (all)
- In-app notification (all)
- Audible alarm at facility (critical)

Example alert rules:

if (DO < 5.0 mg/L) {
    send_alert("CRITICAL", "Low dissolved oxygen",
               "DO reading " + DO + " mg/L",
               ["SMS", "Email", "Push", "Audible"])
}

if (pH < 5.0 OR pH > 7.0) {
    send_alert("CRITICAL", "pH out of range",
               "pH reading " + pH,
               ["SMS", "Email", "Push"])
}

if (reservoir_level < 20%) {
    send_alert("WARNING", "Low reservoir level",
               "Level at " + level + "%",
               ["Email", "Push"])
}
```

## Commercial Control Platforms

### Available Systems

```
MARKET OPTIONS:

1. GROWLINK
   Cost: $2,000-$5,000 + $50/month subscription
   Features: Full automation, mobile app, cloud data
   Integration: HVAC, lighting, irrigation
   Best for: Small to medium commercial

2. PRIVA
   Cost: $10,000-$50,000+
   Features: Enterprise-grade, highly customizable
   Integration: Complete facility control
   Best for: Large commercial, research

3. ARGUS
   Cost: $15,000-$60,000+
   Features: Greenhouse industry standard
   Integration: All systems, weather stations
   Best for: Large greenhouse operations

4. DIY (Raspberry Pi / Arduino)
   Cost: $500-$2,000 (hardware + development)
   Features: Fully customizable, open-source
   Integration: Requires programming knowledge
   Best for: Tech-savvy growers, research, proof-of-concept

5. Open-source platforms:
   - Mycodo (Python-based)
   - FarmBot (open-source)
   - OpenAg (MIT initiative)
   Cost: Free software + hardware costs
```

## Implementation Strategy

### Phased Automation Rollout

```
YEAR 1: FOUNDATIONS
─────────────────────
Q1: Install basic sensors (pH, EC, temp, DO)
    Manual monitoring, data logging
    Establish baseline performance

Q2: Implement automated dosing (pH, nutrients)
    Reduce manual interventions
    Refine control algorithms

Q3: Add environmental sensors (air temp, RH, CO₂)
    Integrate climate control
    Optimize growing conditions

Q4: Implement alert system
    Remote monitoring capability
    Review and optimize all systems

YEAR 2: OPTIMIZATION
────────────────────
Q1: Advanced analytics implementation
    Predictive modeling
    Yield forecasting

Q2: Energy optimization
    Dynamic scheduling
    Demand response integration

Q3: Quality control integration
    Vision systems for plant assessment
    Automated grading

Q4: Full AI integration
    Machine learning optimization
    Continuous improvement algorithms

Budget allocation:
Year 1: $8,000-$15,000
Year 2: $5,000-$10,000
Ongoing: $1,000-$2,000/year (maintenance, subscriptions)

ROI expectations:
- Labor reduction: 30-50%
- Yield improvement: 10-15%
- Quality improvement: 5-10% premium
- Energy savings: 10-20%
- Payback: 12-24 months typical
```

## Conclusion

Automation and control systems are essential for modern NFT operations, enabling precision management, labor efficiency, and data-driven optimization. Implementation should be phased, starting with core sensors and basic automation, progressing to advanced analytics and AI-driven control. Success requires appropriate technology selection, proper installation, systematic data utilization, and continuous refinement.

## Key Takeaways

1. Core sensors (pH, EC, DO, temp) essential for NFT automation
2. Control system complexity should match operation scale and budget
3. Automated dosing reduces labor and improves consistency
4. Integration of solution and environmental controls optimizes performance
5. Data logging enables trend analysis and predictive optimization
6. Remote monitoring and alerts prevent crop losses from failures
7. Machine learning can optimize parameters beyond human capability
8. Commercial platforms available from $2,000 to $60,000+
9. DIY automation possible for tech-savvy growers at lower cost
10. Phased implementation recommended with 12-24 month ROI typical

---

*Next Lesson: Module 11 - Scaling Commercial NFT Operations*
