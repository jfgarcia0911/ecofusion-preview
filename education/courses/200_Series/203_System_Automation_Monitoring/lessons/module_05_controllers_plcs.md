# Module 5: Controllers & PLCs Introduction
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Differentiate between controller types (relay, PID, PLC, microcontroller)
2. Understand basic PLC programming concepts
3. Configure digital and analog inputs/outputs
4. Implement safety and failsafe logic
5. Select appropriate controllers for CEA applications
6. Design simple control sequences

---

## 5.1 Controller Types Overview

### What is a Controller?

A **controller** receives input from sensors, processes logic, and activates outputs (relays, valves, motors) to maintain desired conditions.

```
╔═══════════════════════════════════════════════════════════════╗
║                   BASIC CONTROL LOOP                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Sensor] → [Controller] → [Actuator] → [Process]           ║
║       ↑                                          │            ║
║       └──────────── Feedback ───────────────────┘             ║
║                                                               ║
║   Example:                                                    ║
║   [Temp Sensor] → [Thermostat] → [Heater] → [Fish Tank]      ║
║        68°F           <72°F?        ON          Warms up      ║
║        ↑               YES                         │          ║
║        └─────────────────────────────────────────┘            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Controller Categories

#### 1. Simple On/Off Controllers (Relays, Thermostats)

```
Operation:
  IF sensor < setpoint THEN turn ON
  IF sensor > setpoint THEN turn OFF

Example: Basic Aquarium Heater
  Target: 75°F
  Heater ON when temp < 74.5°F
  Heater OFF when temp > 75.5°F
  (Hysteresis prevents rapid cycling)

Cost: $20-100
Best for: Single-function control, simple applications
Limitations: Can only do on/off, no proportional control
```

**Hysteresis Explained:**
```
╔═══════════════════════════════════════════════════════════════╗
║                     HYSTERESIS CONTROL                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Temperature                                                 ║
║      │                                                        ║
║   76°│            ┌───────────────┐   ┌──────                ║
║   75°│ ─ ─ ─ ─ ─ ─│Setpoint       │─ ─│─ ─ ─ Deadband       ║
║   74°│            │               └───┘                       ║
║   73°│            │                                           ║
║      └────────────┴───────────────────────────→ Time          ║
║                                                               ║
║   Heater:  OFF  │  ON  │  OFF  │  ON │  OFF                  ║
║                                                               ║
║   Without hysteresis: Rapid on/off cycling (bad)             ║
║   With hysteresis: Smooth operation, longer cycles (good)    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

#### 2. PID Controllers

**PID = Proportional-Integral-Derivative**

```
Advanced control algorithm that:
  • Proportional: Responds to current error
  • Integral: Corrects accumulated past error
  • Derivative: Anticipates future error (rate of change)

Result: Smooth, stable control without oscillation

Example: Precision temperature control
  Instead of heater 100% ON or 100% OFF,
  PID varies heater power: 20%, 45%, 70%, etc.
  Maintains very tight setpoint (±0.1°F possible)

Cost: $100-500
Best for: Critical parameters needing precision
```

**PID Control Visualization:**
```
╔═══════════════════════════════════════════════════════════════╗
║              ON/OFF vs PID CONTROL COMPARISON                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ON/OFF Control:                                             ║
║      │      ┌──┐      ┌──┐      ┌──┐                         ║
║   76°│      │  │      │  │      │  │    ← Oscillates         ║
║   75°│ ─────┘  └──────┘  └──────┘  └────   around setpoint   ║
║   74°│                                                        ║
║                                                               ║
║   PID Control:                                                ║
║      │        ╱────────────────────────                       ║
║   75°│ ──────╱─────────────────────────  ← Smooth approach   ║
║   74°│   ╱                                  to setpoint       ║
║   73°│──╱                                                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**PID Tuning Parameters:**
- **Kp (Proportional gain):** How aggressively to respond to current error
- **Ki (Integral gain):** How to correct for sustained offset
- **Kd (Derivative gain):** How to dampen oscillations

*Note: PID tuning is beyond this course scope, but commercial controllers often auto-tune.*

#### 3. Programmable Logic Controllers (PLCs)

```
Industrial automation platform:
  • Multiple inputs (sensors)
  • Multiple outputs (relays, valves)
  • Programmed logic sequences
  • Rugged, reliable, designed for 24/7 operation

Example: Greenhouse climate control
  Inputs: Temp, humidity, wind, rain sensors
  Logic: Complex rules for vents, fans, heaters, shade
  Outputs: Motor drives, damper actuators

Cost: $300-5000+
Best for: Complex multi-function automation, commercial
```

**PLC vs. Microcontroller:**

| Feature | PLC | Microcontroller (Arduino/RPi) |
|---------|-----|-------------------------------|
| **Environment** | Industrial, rugged | Hobby/prototyping, delicate |
| **Programming** | Ladder logic, structured text | C/C++, Python |
| **I/O** | Built-in, expandable | Requires additional circuits |
| **Reliability** | Very high (years, 24/7) | Moderate (depends on design) |
| **Cost** | $300-5000+ | $20-200 |
| **Support** | Vendor support, warranty | Community forums |
| **Best for** | Commercial operations | Learning, DIY, prototyping |

#### 4. Microcontrollers (Arduino, Raspberry Pi)

```
Small computers you program yourself:
  • Read sensors via code
  • Execute logic you write
  • Control outputs

Arduino:
  • Simpler, focused on hardware control
  • Real-time operation
  • Cost: $20-50

Raspberry Pi:
  • Full Linux computer
  • Great for data logging, web dashboards
  • Cost: $35-100

Best for: DIY automation, learning, custom solutions
(Covered in detail in Module 6)
```

---

## 5.2 Input/Output (I/O) Configuration

### Digital Inputs

**Digital = Two States: ON or OFF, HIGH or LOW, 1 or 0**

```
Common Digital Inputs:
  • Float switches (water level high/low)
  • Limit switches (door open/closed)
  • Push buttons (start/stop)
  • Digital sensors (motion detector)

Wiring:
  ┌────────┐
  │ Switch │───────┐
  └────────┘       │
                   ├──→ To Controller Input
  ┌────────┐       │
  │  +24V  │───────┘
  └────────┘

Reading:
  Switch OPEN: 0V = LOW = OFF = 0
  Switch CLOSED: 24V = HIGH = ON = 1
```

**Pull-up/Pull-down Resistors:**
- Prevent floating (undefined) inputs when switch open
- Pull-up: Input HIGH when switch open, LOW when closed
- Pull-down: Input LOW when switch open, HIGH when closed

### Analog Inputs

**Analog = Continuous Range of Values**

```
Common Analog Inputs:
  • Temperature sensors (0-10V = 0-100°C)
  • pH sensors (0-5V = 0-14 pH)
  • Pressure sensors (4-20mA = 0-100 psi)
  • Light sensors (0-10V = 0-100% intensity)

Example: 0-10V Temperature Sensor
  0V = 0°C
  2.5V = 25°C
  5.0V = 50°C
  10V = 100°C

Controller must:
  1. Read voltage (Analog-to-Digital Converter)
  2. Scale to engineering units

  Formula: Temp (°C) = Voltage × 10
```

**Analog Input Specifications:**
- **Resolution:** How many steps (bits)
  - 10-bit: 1024 steps (Arduino)
  - 12-bit: 4096 steps (better resolution)
  - 16-bit: 65,536 steps (high precision)
- **Range:** 0-5V, 0-10V, 4-20mA, etc.
- **Accuracy:** How close to true value

### Digital Outputs

**Control On/Off Devices:**

```
Common Digital Outputs:
  • Relays (heaters, pumps, lights ON/OFF)
  • Solenoid valves (water flow ON/OFF)
  • Indicator lights
  • Alarms/buzzers

Relay Example:
  Controller Output → Relay Coil → Relay Contacts → Device

  ┌──────────┐      ┌─────────┐
  │Controller│──→───│ Relay   │
  │ Output   │      │ Coil    │
  └──────────┘      └────┬────┘
                         │ Switches contacts
                    ┌────▼────┐
                    │ Contacts├───→ Heater (120VAC)
                    └─────────┘

Controller Output: 5-24VDC, low current
Relay Contacts: Can switch 120-240VAC, high current
```

**Relay Types:**
- **Electromechanical:** Physical contacts, click sound, wears out
- **Solid-State (SSR):** Electronic switching, silent, longer life
- **Size:** Rated by current capacity (5A, 10A, 30A, etc.)

### Analog Outputs

**Variable Control (0-100%):**

```
Common Analog Outputs:
  • Variable speed drives (VFD) for fans/pumps
  • Proportional valves (0-100% open)
  • Dimming lights
  • Modulating heaters

Example: 0-10V Fan Speed Control
  0V = Fan OFF (0% speed)
  5V = Fan 50% speed
  10V = Fan 100% speed

Controller varies voltage to control fan precisely.
```

### I/O Counts and Sizing

**Estimating I/O Needs:**

```
Example: Small Greenhouse Controller

INPUTS:
  • Air temperature: 1 analog
  • Humidity: 1 analog
  • Rain sensor: 1 digital
  • Wind speed: 1 analog
  TOTAL: 3 analog, 1 digital

OUTPUTS:
  • Exhaust fan: 1 digital (ON/OFF)
  • Circulation fans (2): 2 digital
  • Vent actuator: 1 analog (0-100% open)
  • Heater: 1 digital
  • Evaporative cooling: 1 digital
  TOTAL: 5 digital, 1 analog

Controller needed:
  • 4+ analog inputs
  • 2+ digital inputs (room to grow)
  • 6+ digital outputs
  • 2+ analog outputs

A small PLC with 8 digital I/O and 4 analog I/O would work.
```

**Best Practice:** Size controller for 25-50% expansion.

---

## 5.3 Basic PLC Programming

### Ladder Logic Fundamentals

**Ladder Logic:** Visual programming language resembling electrical ladder diagrams.

```
╔═══════════════════════════════════════════════════════════════╗
║                    LADDER LOGIC BASICS                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Rung 1: Simple Output Control                               ║
║   ───┤ ├──────────( )──                                       ║
║      IN1         OUT1                                         ║
║                                                               ║
║   "If IN1 is TRUE, energize OUT1"                             ║
║                                                               ║
║   Rung 2: AND Logic (Series)                                  ║
║   ───┤ ├────┤ ├──────( )──                                    ║
║      IN1    IN2      OUT2                                     ║
║                                                               ║
║   "If IN1 AND IN2 are TRUE, energize OUT2"                    ║
║                                                               ║
║   Rung 3: OR Logic (Parallel)                                 ║
║   ───┤ ├────────────┬──( )──                                  ║
║      IN1            │ OUT3                                    ║
║   ───┤ ├────────────┘                                         ║
║      IN2                                                      ║
║                                                               ║
║   "If IN1 OR IN2 is TRUE, energize OUT3"                      ║
║                                                               ║
║   Rung 4: NOT Logic (Inverted Contact)                        ║
║   ───┤/├──────────( )──                                       ║
║      IN4         OUT4                                         ║
║                                                               ║
║   "If IN4 is FALSE (NOT TRUE), energize OUT4"                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Symbols:**
- `─┤ ├─` Normally Open contact (TRUE when input is ON)
- `─┤/├─` Normally Closed contact (TRUE when input is OFF)
- `──( )──` Output coil (device to energize)
- `──( / )──` Negated output
- `──[ ]──` Temporary storage (internal relay/bit)

### Example: Temperature Control Logic

```
╔═══════════════════════════════════════════════════════════════╗
║            HEATER CONTROL LADDER LOGIC                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Temp_Low = Temperature < 74°F (digital comparator)          ║
║   Temp_OK = Temperature >= 74°F                               ║
║   Manual_Override = Switch to force heater OFF                ║
║   Heater_Relay = Output to heater                             ║
║                                                               ║
║   Rung 1: Heater Control                                      ║
║   ───┤ ├────────┤/├─────────( )──                             ║
║    Temp_Low  Manual_    Heater_                               ║
║              Override   Relay                                 ║
║                                                               ║
║   Logic: Turn ON heater IF                                    ║
║     • Temperature is low (Temp_Low = TRUE)                    ║
║     AND                                                       ║
║     • Manual override is NOT active (Manual_Override = FALSE) ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Comparators and Math

**Beyond Simple ON/OFF:**

PLCs can compare values and do math:

```
Compare Functions:
  • Greater Than (>)
  • Less Than (<)
  • Equal (=)
  • Greater Than or Equal (>=)
  • Less Than or Equal (<=)
  • Not Equal (!=)

Example:
  IF Temperature > 75.0 THEN
    Heater = OFF
  END IF

Math Functions:
  • Add, Subtract, Multiply, Divide
  • Scaling (convert sensor voltage to engineering units)

Example:
  Temp_C = (Analog_Input_0 * 10.0) - 50.0
  // Scales 0-10V input to -50 to +50°C
```

### Timers and Counters

**Timers:**

```
Types:
  1. TON (Timer ON-delay)
     Wait X seconds after input goes TRUE before acting

  2. TOF (Timer OFF-delay)
     Wait X seconds after input goes FALSE before acting

  3. TP (Pulse timer)
     Create a pulse of fixed duration

Example: Pump Anti-Short-Cycle Timer
  Don't allow pump to start more than once per 5 minutes

  ───┤ ├────┤/├────────────( )──
     Start   Timer_5min    Pump_ON
     Button  (Done bit)

  ───┤ ├─────[TON 300s]──
     Pump_ON  Timer_5min

  Logic:
    • When Start pressed AND timer done, turn ON pump
    • When pump turns ON, start 5-minute timer
    • Pump can't restart until timer expires
```

**Counters:**

```
Count events (up or down):

Example: Track Dosing Pump Cycles
  Count how many times nutrient pump activates
  Alert when count reaches 1000 (time for maintenance)

  ───┤ ├─────[CTU 1000]───┬───( )──
     Dose_    Counter      │  Alert
     Pulse               (DN bit)
```

---

## 5.4 Safety and Failsafe Logic

### Safety-Critical Design Principles

**1. Redundant Sensing**

```
Critical Parameter: Fish tank temperature

Primary Sensor: Digital temp probe → Controller
Backup Sensor: Independent alarm thermometer

Failsafe Logic:
  IF (Primary_Temp > 80°F) OR (Backup_Temp > 80°F) THEN
    Heater = OFF (forced)
    Alarm = ON
  END IF

Rationale: If either sensor detects overheat, shut down.
```

**2. Watchdog Timers**

```
Ensure controller is actively running, not frozen/crashed.

Logic:
  • Controller must "pet the watchdog" every few seconds
  • If watchdog not reset, assume controller failure
  • Watchdog circuit forces safe state (often shuts everything OFF)

Implementation:
  ───┤ ├─────[TON 10s]───┬───( )──
     Heartbeat  Watchdog │  Safe_Mode
     (reset    Timer    (DN)  (kill outputs)
      every 1s)

If Heartbeat stops (controller hung), watchdog timer expires
→ Safe_Mode activates → All outputs disabled
```

**3. Manual Override**

```
Always provide manual shut-off capability.

Example: Emergency Stop Button
  ───┤/├─────( )──
     E-Stop  Master_Enable

  When E-Stop pressed (Normally Closed contact opens),
  Master_Enable goes FALSE → All automation disabled

Physical E-Stop should:
  • Be easily accessible
  • Be clearly labeled (red, large)
  • Latch in OFF position (requires reset)
  • Directly cut power if possible (not just software)
```

**4. Power Failure Safe State**

```
Design system to fail safely when power lost:

Good Designs:
  • Normally-closed valve: Loses power → Stays OPEN (water flows)
  • Heater relay: Loses power → Heater OFF (won't overheat)
  • Alarm: Uses battery backup, sounds on power loss

Bad Designs:
  • Normally-open valve on critical water supply: Power loss → No water
  • Aeration on backup battery: Power loss → Fish suffocate
  (Should have battery or generator backup)

Evaluate each output:
  "What happens if this loses power?"
  "Is that safe for my crop/livestock?"
```

**5. Interlocks**

```
Prevent unsafe combinations.

Example: Don't run heater and chiller simultaneously
  ───┤ ├────┤/├─────( )──
     Temp_Low Chiller Heater
              (running)

  ───┤ ├────┤/├─────( )──
     Temp_High Heater Chiller
               (running)

Each can only turn ON if the other is OFF.
```

### Alarm Hierarchy

**Multi-Level Alerts:**

```
Level 1: WARNING (Informational)
  • Log event
  • No immediate action
  Example: pH drifted to 6.3 (target 6.5, still acceptable)

Level 2: ALERT (Attention needed)
  • Send notification (email/text)
  • Operator should check soon
  Example: pH at 6.0 (outside ideal range)

Level 3: CRITICAL (Urgent)
  • Immediate notification (call, loud alarm)
  • May auto-activate backup systems
  Example: Temperature 80°F (fish in danger)

Level 4: EMERGENCY (Life-threatening)
  • All alarms, all contacts
  • Automated emergency response
  • Physical alarm on-site
  Example: Dissolved oxygen <2 mg/L (fish dying)
```

---

## 5.5 Commercial Controller Options

### Entry-Level Controllers ($100-500)

**Inkbird/Willhi Temperature Controllers**
- Simple on/off thermostat
- Single input, single relay output
- Cost: $30-100
- Best for: Single-function control (heater, chiller)

**Bluelab Guardian Monitor**
- pH, EC, temperature monitoring
- Alarms but limited control
- Cost: $400-600
- Best for: Monitoring with manual dosing

### Mid-Range Controllers ($500-2000)

**Milwaukee MC720 pH/EC Controller**
- pH and EC monitoring
- Relay outputs for dosing pumps
- Cost: $300-600
- Best for: Automated nutrient management

**Growtronix**
- Modular system, expandable
- Web-based interface
- Sensors, relays, data logging
- Cost: $500-1500+
- Best for: Small commercial, tech-savvy growers

**Priva Connext**
- Greenhouse climate control
- Professional-grade
- Cost: $2000-5000+
- Best for: Commercial greenhouses

### Industrial PLCs ($500-5000+)

**Allen-Bradley Micro800 Series**
- Entry-level industrial PLC
- Ladder logic programming
- Cost: $300-800
- Best for: Custom automation, industrial environment

**Siemens Logo!**
- Compact PLC
- Icon-based and ladder programming
- Cost: $200-500
- Best for: Small automation projects

**Automation Direct (Click, Productivity)**
- Budget-friendly PLCs
- Full-featured
- Cost: $200-1000
- Best for: Best value for commercial operations

### Microcontroller-Based (DIY) ($50-500)

**Arduino-based Systems**
- Infinite customization
- Requires programming
- Cost: $50-300 (depends on sensors/relays)
- Best for: Learning, prototyping, unique needs

**Raspberry Pi Systems**
- Full computer, web interfaces
- Python programming
- Cost: $100-500
- Best for: Data-heavy applications, dashboards

*(Module 6 covers in detail)*

---

## 5.6 Controller Selection Guide

### Decision Matrix

| Operation Size | Budget | Recommended Controller | Why |
|----------------|--------|------------------------|-----|
| **Hobbyist** | $50-200 | Arduino + sensors | Learning, DIY, low risk |
| **Small Commercial** | $500-2000 | Growtronix or mid-range climate controller | Expandable, support |
| **Medium Commercial** | $2000-5000 | Priva, Argus, Hoogendoorn | Professional, proven |
| **Large Commercial** | $5000+ | Full PLC system (Siemens, Allen-Bradley) | Industrial reliability |

### Critical Questions

**1. What am I controlling?**
- Single function (heater): Simple controller OK
- Multiple interacting systems: Need PLC or advanced controller

**2. What is at risk?**
- Low value, learning: DIY acceptable
- High value livestock/crops: Commercial controller with warranty

**3. What are my technical skills?**
- Comfortable programming: Arduino/RPi opens doors
- Prefer plug-and-play: Commercial controllers

**4. Do I need support?**
- Yes: Commercial with vendor support
- No: DIY or industrial PLC with community support

**5. How will I expand?**
- Fixed system: All-in-one controller fine
- Growing operation: Modular/PLC better

---

## Summary

Controllers are the "brains" of automated CEA systems:

**Key Takeaways:**

1. **Controller Types:** On/off, PID, PLC, microcontroller - each has its place
2. **I/O Configuration:** Understand digital vs. analog inputs/outputs
3. **PLC Programming:** Ladder logic is visual and intuitive for control sequences
4. **Safety First:** Redundancy, failsafes, manual overrides are critical
5. **Selection:** Match controller to operation size, budget, and technical skill
6. **Start Simple:** Begin with monitoring, add control gradually
7. **Plan for Expansion:** Size controllers for future growth

**Recommended Learning Path:**
1. Start with simple on/off controllers (thermostats, timers)
2. Experiment with Arduino/Raspberry Pi (Module 6)
3. Graduate to commercial controllers as operation grows
4. Consider PLC for large, complex commercial operations

---

## Review Questions

1. What is the difference between a relay controller and a PID controller?
2. Explain the purpose of hysteresis in on/off control.
3. What are the three components of PID (proportional-integral-derivative)?
4. What is the difference between digital and analog I/O?
5. Draw a simple ladder logic rung showing an AND condition.
6. What is a watchdog timer and why is it important?
7. What does "fail-safe" mean in controller design?
8. When should you choose a PLC vs. an Arduino?

---

## Practical Exercise

**Exercise: Design a Control System**

Design a controller system for automated greenhouse ventilation:

**Requirements:**
- Monitor inside temperature and outside temperature
- Control two exhaust fans (stages)
- Control motorized vent (0-100% open)
- Rain sensor (close vents when raining)
- Manual override switch

**Your tasks:**

1. **List all I/O:**
   - Inputs (sensors)
   - Outputs (actuators)
   - Specify digital vs. analog

2. **Write control logic** (in pseudocode or ladder logic):
   - When do fans turn on?
   - How does vent position vary with temperature?
   - How does rain sensor affect operation?
   - How does manual override work?

3. **Safety features:**
   - What failsafes are needed?
   - What alarms?

4. **Select a controller:**
   - Research real products
   - Justify choice based on I/O count, features, cost

**Deliverable:** Complete control system specification with logic, I/O list, and controller selection.

---

*End of Module 5*
