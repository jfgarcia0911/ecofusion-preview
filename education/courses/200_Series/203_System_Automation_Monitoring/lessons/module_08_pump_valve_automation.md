# Module 8: Pump & Valve Automation
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design automated pump control systems with level sensors
2. Select and install solenoid valves for water control
3. Implement automated dosing systems for nutrients and pH
4. Design backup and failsafe systems for critical pumps
5. Understand variable frequency drives (VFDs) for pump speed control
6. Troubleshoot common pump and valve automation problems

---

## 8.1 Float Switches and Level Sensors

### Types of Level Sensors

#### 1. Mechanical Float Switches

```
╔═══════════════════════════════════════════════════════════════╗
║                  MECHANICAL FLOAT SWITCH                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║          ┌──────┐  ← Electrical connection                    ║
║          │      │                                             ║
║          └───┬──┘                                             ║
║              │                                                ║
║         ┌────▼────┐  ← Mounting bracket                       ║
║         │         │                                           ║
║         │  ╱█╲    │  ← Internal switch                        ║
║         │ ╱   ╲   │                                           ║
║    ═════╪═══════╪═════  Water level HIGH                      ║
║         │       │                                             ║
║         │   ○   │  ← Float (buoyant)                          ║
║         │       │                                             ║
║    ─────┴───────┴─────  Water level LOW                       ║
║                                                               ║
║   When water rises, float rises, activating switch            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Types:**
- **Normally Open (NO):** Closes when float rises
- **Normally Closed (NC):** Opens when float rises

**Typical Uses:**
- Sump tank level control
- Reservoir refill automation
- Overflow prevention

**Cost:** $10-50
**Reliability:** Good, but mechanical parts can stick or fail
**Lifespan:** 2-5 years in water applications

#### 2. Ultrasonic Level Sensors

```
How it works:
  • Emits ultrasonic pulse
  • Measures echo return time
  • Calculates distance to water surface
  • Non-contact (doesn't touch water)

Cost: $30-150
Accuracy: ±1-5mm
Range: 0.3m to 10m+

Advantages:
  • No mechanical parts
  • Continuous level reading (not just on/off)
  • Works with any liquid

Disadvantages:
  • More expensive
  • Requires clear path (foam can interfere)
  • Temperature affects accuracy
```

#### 3. Pressure/Submersible Sensors

```
How it works:
  • Measures water pressure at bottom of tank
  • Pressure = depth × density
  • More water = more pressure

Cost: $50-300
Accuracy: ±0.5-2% full scale

Advantages:
  • Very accurate
  • Continuous reading
  • Not affected by foam or splashing

Disadvantages:
  • Must be submerged
  • Can clog or foul
  • More expensive than float switches
```

#### 4. Optical Sensors

```
How it works:
  • LED shines into prism
  • In air: Light reflects back (detected)
  • In water: Light refracts away (not detected)

Cost: $20-80
Compact and reliable

Best for: Small tanks, precise level detection
```

### Level Control Applications

**Example 1: Sump Tank Auto-Refill**

```
╔═══════════════════════════════════════════════════════════════╗
║              SUMP TANK AUTO-REFILL SYSTEM                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Main Reservoir]                                            ║
║         │                                                     ║
║         │ gravity or pump                                     ║
║         ▼                                                     ║
║   [Solenoid Valve] ← Controlled by float switch               ║
║         │                                                     ║
║         ▼                                                     ║
║   ┌─────────────┐                                             ║
║   │             │  ← Float Switch HIGH (stop fill)            ║
║   │   Sump      │  ─ ─ ─ ─ ─ ─ ─ ─                           ║
║   │   Tank      │  ← Float Switch LOW (start fill)            ║
║   │             │  ─ ─ ─ ─ ─ ─ ─ ─                           ║
║   └─────────────┘                                             ║
║                                                               ║
║   Logic:                                                      ║
║   IF Float_Low = TRUE THEN Valve = OPEN                       ║
║   IF Float_High = TRUE THEN Valve = CLOSED                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Two-Float Control (Hysteresis):**
- **Low float:** Opens valve when tripped
- **High float:** Closes valve when tripped
- Prevents rapid on/off cycling

**Example 2: Overflow Prevention**

```
High-level float switch as safety:
  • Main control: Pressure sensor
  • Backup: High-level float switch
  • If float trips, shut off all inflow immediately
  • Sound alarm
```

---

## 8.2 Automated Pump Control

### Pump Control Strategies

#### 1. Simple On/Off Control

```
Application: Circulation pump

Components:
  • Timer or controller
  • Relay (sized for pump current)
  • Pump

Schedule:
  ON for 15 minutes every hour
  or
  Continuous during day, off at night
```

**Ladder Logic Example:**
```
   ───┤ ├────────────( )──
      Timer_ON      Pump_Relay

   Timer_ON = TRUE during scheduled on-time
```

#### 2. Level-Based Control

```
Application: Transfer pump from sump to grow beds

Components:
  • Float switches (low and high)
  • Relay
  • Pump

Logic:
  Start pump when high level reached
  Stop pump when low level reached

Ladder Logic:
   ───┤ ├────┤/├───────( )──
    Float_   Float_    Pump
    High     Low

   Pump turns ON when Float_High is TRUE
   Pump turns OFF when Float_Low is TRUE
```

#### 3. Timed Fill/Drain Cycles

```
Application: Ebb-and-flow (flood-and-drain) hydroponics

Sequence:
  1. Pump ON for 15 minutes (flood)
  2. Pump OFF for 5 minutes (soak)
  3. Drain valve opens for 10 minutes
  4. Wait 30 minutes
  5. Repeat

Implementation:
  • Programmable timer relay ($30-100)
  • OR PLC with timer functions
  • OR Arduino with timed sequences
```

### Pump Anti-Short-Cycle Protection

**Why It Matters:**
Pumps shouldn't start/stop more than ~6-10 times per hour. Excessive cycling causes:
- Motor overheating
- Reduced lifespan
- High electrical demand (inrush current)

**Implementation:**

```
Minimum Off-Time Timer:

Ladder Logic:
   ───┤ ├────┤/├────────────( )──
    Start   Timer_        Pump
    Signal  MinOff

   ───┤ ├─────[TON 300s]───
     Pump    Timer_MinOff

   When Pump turns ON, start 5-minute timer
   Pump cannot restart until timer completes
```

**Typical Minimum Off-Times:**
- Small pumps (<1HP): 2-3 minutes
- Medium pumps (1-3HP): 5 minutes
- Large pumps (>3HP): 10 minutes

### Pump Failure Detection

**Methods:**

#### 1. Flow Switch

```
Device: Paddle or turbine in pipe
Signals: "Flow detected" or "No flow"

Logic:
  IF Pump_ON AND (No_Flow for 30 seconds) THEN
    Alarm = TRUE
    "Pump running but no flow detected"
```

**Causes of No-Flow:**
- Pump failure
- Clogged intake
- Air lock
- Closed valve

#### 2. Current Sensor

```
Measure pump electrical current

Normal operation: 5-10 amps
Pump failure (motor burned out): 0 amps or very high (short circuit)
Dry running: Lower than normal current

Implement over/under current alarms
```

---

## 8.3 Solenoid Valve Systems

### Solenoid Valve Basics

```
╔═══════════════════════════════════════════════════════════════╗
║                  SOLENOID VALVE OPERATION                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   De-Energized (No power):                                    ║
║   ┌──────────────┐                                            ║
║   │ Normally     │                                            ║
║   │ Closed (NC)  │  Water BLOCKED                             ║
║   │ [valve shut] │  ─────║─────→                              ║
║   └──────────────┘                                            ║
║                                                               ║
║   Energized (Power applied):                                  ║
║   ┌──────────────┐                                            ║
║   │ Solenoid     │                                            ║
║   │ pulls open   │  Water FLOWS                               ║
║   │ [valve open] │  ──────────→                               ║
║   └──────────────┘                                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Types:**

**Normally Closed (NC):**
- Valve CLOSED when no power
- Opens when energized
- **Most common for CEA** (fail-safe: no power = no water waste)

**Normally Open (NO):**
- Valve OPEN when no power
- Closes when energized
- Use for critical flows (ensures flow even if power lost)

**Voltage Options:**
- 12VDC: Low voltage, safe, common with Arduino
- 24VAC: Common in irrigation systems
- 120VAC: Requires isolation, less common in DIY

**Sizing:**
- **Flow rate:** Match valve size to pipe size and required GPM
- **Pressure rating:** Must handle your system pressure (PSI)
- **Normally:** 1/2" to 1" valves for most CEA irrigation

**Cost:** $15-80 depending on size and quality

### Multi-Zone Irrigation Control

```
╔═══════════════════════════════════════════════════════════════╗
║              MULTI-ZONE IRRIGATION SYSTEM                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Water Source]                                              ║
║         │                                                     ║
║         ├──[Valve 1]──→ Zone 1 (Lettuce)                      ║
║         │                                                     ║
║         ├──[Valve 2]──→ Zone 2 (Tomatoes)                     ║
║         │                                                     ║
║         ├──[Valve 3]──→ Zone 3 (Herbs)                        ║
║         │                                                     ║
║         └──[Valve 4]──→ Zone 4 (Reserve)                      ║
║                                                               ║
║   Controller activates valves sequentially or by schedule     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Sequencing Logic:**

```
Zone 1: 6:00 AM for 10 minutes
Zone 2: 6:15 AM for 15 minutes (more water needed)
Zone 3: 6:35 AM for 8 minutes
Repeat at 2:00 PM

Advantage: All zones share one pump
  Only one valve open at a time
  Pump sized for one zone's demand
```

---

## 8.4 Automated Dosing Systems

### Nutrient Dosing Architecture

```
╔═══════════════════════════════════════════════════════════════╗
║              AUTOMATED NUTRIENT DOSING SYSTEM                 ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Nutrient Tank A]  [Nutrient Tank B]  [pH Down]            ║
║          │                  │                │                ║
║     [Pump A]           [Pump B]          [Pump C]             ║
║          │                  │                │                ║
║          └──────────┬────────┴────────────────┘               ║
║                     ▼                                         ║
║              [Mixing Reservoir]                               ║
║                     │                                         ║
║                [pH Sensor]                                    ║
║                [EC Sensor]                                    ║
║                     │                                         ║
║                 [Controller]                                  ║
║                                                               ║
║   Logic:                                                      ║
║   IF EC < Target THEN dose Nutrient A and B                   ║
║   IF pH > Target THEN dose pH Down                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Peristaltic Dosing Pumps

**Why Peristaltic?**
- Pump doesn't contact liquid (tubing does)
- Accurate, repeatable dosing
- Self-priming
- Easy to calibrate

**Specifications:**
- Flow rate: 0.1-10 L/hour typical
- Tubing: Silicone or chemically resistant
- Control: On/off or PWM for variable flow

**Cost:** $30-200 depending on quality

**Calibration:**
```
1. Fill graduated cylinder or container
2. Run pump for exactly 60 seconds
3. Measure volume dispensed (mL)
4. Calculate: mL/minute flow rate
5. Adjust controller timing based on actual flow
```

### Dosing Control Logic

#### Simple On/Off Dosing

```
IF pH > 6.5 THEN
  Turn ON pH down pump for 5 seconds
  Wait 2 minutes for mixing
  Re-check pH
  Repeat if necessary
END IF

Risks:
  • Can overshoot (too much acid)
  • Needs conservative dosing time
```

#### Proportional Dosing (Better)

```
Calculate dose based on error magnitude:

pH Error = Measured_pH - Target_pH

IF pH_Error > 0 THEN
  Dose_Time = pH_Error × 10 seconds
  (Larger error = longer dosing)
  Max_Dose_Time = 30 seconds (safety limit)
END IF

Wait for mixing (5 minutes)
Re-evaluate

Advantages:
  • Faster correction for large errors
  • Less overshoot
  • More stable control
```

### Safety Interlocks for Dosing

**Essential Safeguards:**

1. **Maximum Dose Limit**
   ```
   IF total doses in 1 hour > 10 THEN
     Stop dosing
     Alarm = "Excessive dosing - check system"
   ```

2. **Sensor Validation**
   ```
   IF pH sensor reads < 3 or > 11 THEN
     Alarm = "pH sensor error"
     Disable pH dosing
   ```

3. **Dose Verification**
   ```
   After dosing, wait for mixing, then:
   IF pH changed in expected direction THEN
     Good
   ELSE
     Alarm = "Dosing ineffective - check pump/solution"
   ```

---

## 8.5 Backup and Failsafe Design

### Redundant Pump Systems

**Critical Application: Fish Tank Aeration**

```
╔═══════════════════════════════════════════════════════════════╗
║              REDUNDANT AERATION SYSTEM                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Primary: Electric Air Pump                                  ║
║         ├──────→ [Air Stones in Tank]                         ║
║         │                                                     ║
║         │  [Power Monitor]                                    ║
║         │        │                                            ║
║         │        ▼ (power loss detected)                      ║
║         │                                                     ║
║   Backup: Battery-Powered Air Pump                            ║
║         └──────→ [Air Stones in Tank]                         ║
║              (auto-starts on power failure)                   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Implementation:**
- Primary pump on main power
- Backup pump on battery bank or UPS
- Relay switches to backup if main power fails
- Alarm notifies of power outage

### Fail-Safe Valve Configuration

**Example: Freshwater Makeup**

```
Scenario: City water solenoid valve adds freshwater to system

GOOD: Normally CLOSED valve
  • Power loss → Valve closes → No flooding
  • Controller failure → Valve closes → No flooding

BAD: Normally OPEN valve
  • Power loss → Valve stays open → Floods greenhouse!

Always choose NC for makeup water.
```

**Example: Critical Drain**

```
Scenario: Overflow drain valve

GOOD: Normally OPEN valve
  • Power loss → Valve opens → Tank can drain (prevents overflow)
  • Keeps system safe even without power

Use NO valves sparingly, only where fail-open is safe.
```

---

## 8.6 Variable Frequency Drives (VFDs)

### What is a VFD?

**Variable Frequency Drive:** Controls AC motor speed by varying frequency and voltage.

**Benefits:**
- Precise speed control (0-100%)
- Energy savings (run pump at 50% = ~12% power)
- Soft start (reduces electrical demand surge)
- Extends equipment life (less mechanical stress)

**Applications in CEA:**
- Variable-speed circulation fans
- Adjustable pump flow rates
- Modulating ventilation

### VFD Basics

**Cost:** $150-500 for small VFDs (1-3 HP)

**Control Methods:**
- **Manual potentiometer:** Turn knob to adjust speed
- **0-10V analog input:** Controller sends voltage signal
- **4-20mA current loop:** Industrial standard
- **Modbus/digital:** Network communication

**Example: Variable Fan Speed**

```
Controller reads temperature:
  70°F → 0% fan speed (off)
  75°F → 25% fan speed
  80°F → 50% fan speed
  85°F → 75% fan speed
  90°F → 100% fan speed (max)

Controller outputs 0-10V signal to VFD
VFD adjusts motor speed proportionally
```

**Energy Savings Example:**

```
Pump running at 50% speed:
  Flow rate: ~50% of maximum
  Power consumption: ~12% of maximum
  (Cube law: Power ∝ Speed³)

Annual savings:
  Full speed: 1 HP × 0.746 kW × 8760 hrs × $0.12/kWh = $784
  Half speed: 0.12 HP × 0.746 kW × 8760 hrs × $0.12/kWh = $94
  Savings: $690/year

VFD cost: $200
Payback: ~4 months!
```

---

## 8.7 Troubleshooting Common Problems

### Pump Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **Pump won't start** | No power, tripped breaker | Check power, reset breaker |
| | Bad relay | Test/replace relay |
| | Seized impeller | Clean or replace pump |
| **Pump runs but no flow** | Air lock | Prime pump, bleed air |
| | Clogged intake | Clean strainer/filter |
| | Broken impeller | Replace impeller |
| **Pump short-cycles** | No anti-cycle timer | Add minimum off-time logic |
| | Float switch stuck | Clean/replace float |
| **Pump overheats** | Too frequent cycling | Increase off-time |
| | Low voltage | Check electrical supply |
| | Running dry | Add low-level cutoff |

### Valve Issues

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **Valve won't open** | No power to solenoid | Check wiring, voltage |
| | Solenoid burned out | Replace solenoid coil |
| | Debris blocking valve | Disassemble and clean |
| | Low water pressure | Check upstream pressure |
| **Valve won't close** | Solenoid stuck | Tap gently, may free it |
| | Debris in seat | Clean valve internals |
| | Wrong voltage | Verify voltage matches |
| **Valve leaks** | Worn diaphragm/seal | Replace diaphragm |
| | High pressure | Add pressure regulator |

---

## Summary

Automated pumps and valves are the "muscles" of CEA systems:

**Key Takeaways:**

1. **Level Control:** Float switches are simple and reliable for most applications
2. **Pump Protection:** Anti-short-cycle timers extend pump life
3. **Failsafe Design:** Choose valve types (NC/NO) based on safe failure mode
4. **Dosing Systems:** Conservative dosing with verification prevents disasters
5. **Redundancy:** Critical systems (aeration) need backup power/pumps
6. **VFDs:** Energy savings and precise control justify cost
7. **Maintenance:** Clean filters, check valves, test failsafes regularly

**Implementation Checklist:**
- [ ] Size pumps appropriately (GPH/GPM needed)
- [ ] Add minimum off-time protection
- [ ] Choose fail-safe valve configurations
- [ ] Test backup systems monthly
- [ ] Monitor flow (switches or current sensors)
- [ ] Log pump run-times for maintenance scheduling
- [ ] Keep spare relays, valves, and pump parts on hand

---

## Review Questions

1. What is the difference between normally open and normally closed valves?
2. Why shouldn't pumps short-cycle, and how do you prevent it?
3. How does a two-float level control system provide hysteresis?
4. What are the advantages of peristaltic pumps for nutrient dosing?
5. What safety interlocks should be included in automated dosing?
6. How does a VFD save energy when operating pumps at reduced speed?
7. What is the benefit of redundant pump systems for critical applications?
8. How can you detect pump failure automatically?

---

## Practical Exercise

**Exercise: Design an Automated Irrigation System**

Design a complete automated irrigation system for four hydroponic grow beds:

**Requirements:**
- Nutrient reservoir with automated dosing (pH and EC)
- Four zones (grow beds) with independent control
- Level control to refill reservoir
- Overflow prevention

**Your tasks:**

1. **Draw system diagram** showing:
   - Reservoir, pumps, valves, sensors
   - Wiring/plumbing connections
   - Control logic flow

2. **Select components:**
   - Pumps (specify GPH)
   - Solenoid valves (size, voltage)
   - Level sensors (type)
   - pH/EC sensors
   - Dosing pumps
   - Controller

3. **Write control logic** (pseudocode or ladder logic):
   - Irrigation scheduling
   - Dosing sequences
   - Level control
   - Safety interlocks

4. **Create parts list with budget**

5. **Identify potential failure modes and mitigations**

**Deliverable:** Complete system design with diagrams, logic, parts list, and failsafe analysis.

---

*End of Module 8*
