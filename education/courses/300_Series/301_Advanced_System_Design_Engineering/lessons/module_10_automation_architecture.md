# Module 10: Automation Architecture

## Introduction

Automation is essential for commercial aquaponic operations. Sensors, controllers, and actuators work together to maintain optimal conditions 24/7. This module covers control system design, sensor selection, data logging, and remote monitoring.

**Duration:** 1 hour

---

## Learning Objectives

1. Design control loops for temperature, pH, DO, and EC
2. Select appropriate sensors and transmitters
3. Specify programmable logic controllers (PLCs) or microcontrollers
4. Design alarm systems and emergency protocols
5. Implement data logging and remote monitoring
6. Create control system documentation

---

## 1. Control System Architecture

### 1.1 System Hierarchy

```
Level 3: SCADA/HMI (Human Machine Interface)
         - Data visualization
         - Remote access
         - Trend analysis
         ↕
Level 2: PLC/Controller
         - Logic execution
         - Setpoint management
         - Alarm handling
         ↕
Level 1: I/O Devices
         - Sensors (temperature, pH, DO, level)
         - Actuators (pumps, valves, heaters)
         - Safety interlocks
```

### 1.2 Control Loop Design

**PID Control Basics:**
```
Output = Kp×Error + Ki×∫Error + Kd×(dError/dt)

Where:
Kp = Proportional gain
Ki = Integral gain
Kd = Derivative gain

Example: Temperature Control
Setpoint: 78°F
Actual: 75°F
Error: 3°F

P term: Kp × 3 (immediate response)
I term: Ki × accumulated error (eliminates offset)
D term: Kd × rate of change (prevents overshoot)
```

---

## 2. Sensor Selection

### 2.1 Water Quality Sensors

| Parameter | Sensor Type | Range | Accuracy | Cost |
|-----------|-------------|-------|----------|------|
| Temperature | RTD Pt100 | 0-50°C | ±0.1°C | $$ |
| pH | Combination electrode | 0-14 | ±0.02 | $$ |
| DO | Optical | 0-20 mg/L | ±0.1 | $$$ |
| EC | Conductivity cell | 0-5000 μS | ±2% | $$ |
| ORP | Platinum electrode | ±2000 mV | ±10 mV | $ |

### 2.2 Sensor Placement

**Strategic Locations:**
- Post-biofilter (monitor treatment efficiency)
- Fish tank inlet (verify water quality)
- Grow bed inlet (plant nutrition monitoring)
- Sump (system health baseline)

---

## 3. Programmable Controllers

### 3.1 PLC vs. Microcontroller

**PLC Advantages:**
- Industrial reliability
- Standardized programming (ladder logic)
- Built-in I/O
- Safety certified

**Arduino/Raspberry Pi Advantages:**
- Low cost
- Flexibility
- Large community
- IoT integration

**Recommendation:**
- Systems <$50K: Microcontroller acceptable
- Systems >$50K: PLC recommended
- Life-safety systems: PLC required

---

## 4. Alarm Systems

### 4.1 Critical Alarms

**Tier 1 (Emergency):**
- Low DO (<3 mg/L)
- High ammonia (>3 mg/L)
- Power failure
- High water temperature (>85°F)

**Response:** Immediate notification (SMS, email, phone call)

**Tier 2 (Warning):**
- pH out of range
- Low water level
- Equipment fault

**Response:** Log and notify within 1 hour

---

## Summary

Automation architecture ensures reliable monitoring and control of critical parameters. Proper sensor selection, controller configuration, and alarm design prevent system failures.

---

## Check Your Understanding

1. Design a control loop for maintaining DO at 6.5 mg/L using an aerator with variable speed drive.
2. Select sensors for a 5,000-gallon fish tank monitoring temperature, pH, DO, and ammonia.
3. Specify alarm setpoints for a tilapia system (temperature, DO, ammonia, pH).

---

**Next Module:** Module 11 - Safety System Design
