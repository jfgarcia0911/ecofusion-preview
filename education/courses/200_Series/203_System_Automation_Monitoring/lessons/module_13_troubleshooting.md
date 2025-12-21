# Module 13: Troubleshooting Automation
**Course 203: System Automation & Monitoring**
Duration: 0.5 hours

---

## Learning Objectives

By the end of this module, you will be able to:
1. Apply a systematic troubleshooting methodology
2. Identify common automation failure points
3. Diagnose sensor drift and degradation
4. Resolve communication and network problems
5. Troubleshoot power-related issues
6. Maintain documentation for future reference

---

## 13.1 Systematic Troubleshooting Approach

### The Scientific Method for Troubleshooting

**Step 1: Observe and Define the Problem**
```
Ask:
- What is the symptom?
- When did it start?
- What changed recently?
- Is it consistent or intermittent?

Example:
Problem: "Temperature reading shows 150°F"
Observations:
  - Started this morning
  - Water feels normal (not hot)
  - No changes to system yesterday
  - Reading is constant, not fluctuating
```

**Step 2: Gather Information**
```
Check:
- Historical data (when did it last read correctly?)
- Other sensors (are they working?)
- System logs (any error messages?)
- Visual inspection (damaged wires, loose connections?)

Data Review:
Yesterday 11:00 PM: 75°F (normal)
Today 6:00 AM: 150°F (abnormal)
Event log: No alerts or errors logged
```

**Step 3: Develop Hypotheses**
```
Possible causes (ranked by likelihood):
1. Sensor failure (most common)
2. Wiring issue (short circuit, corrosion)
3. Controller input failure
4. Calibration corrupted

WHY NOT actual high temperature?
  - Water feels normal
  - No other heat indicators
  - Reading exactly 150°F (suspiciously round number)
```

**Step 4: Test Hypotheses**
```
Test 1: Disconnect sensor, check resistance
  Normal DS18B20 at room temp: ~10kΩ
  Actual reading: Open circuit (infinite resistance)
  Conclusion: Sensor failed

Test 2: Connect known-good sensor
  Reading: 72°F
  Conclusion: Controller input OK, original sensor bad

Decision: Replace sensor
```

**Step 5: Implement Solution**
```
Action: Replace temperature sensor
Test: New sensor reads 72°F, matches manual thermometer
Monitor: Check readings for 24 hours to ensure stability
Document: Log sensor replacement and failure mode
```

**Step 6: Verify and Monitor**
```
24 hours later: Temperature readings stable and accurate
Log entry: "Sensor #1 replaced 2025-12-10. Old sensor showed open circuit failure."
Update: Schedule all sensors for replacement at 2-year intervals (preventive maintenance)
```

---

## 13.2 Common Failure Points

### Sensor Failures

| Symptom | Likely Cause | Diagnosis | Solution |
|---------|--------------|-----------|----------|
| **Constant value (frozen)** | Sensor failed, stuck | Tap sensor, check wiring | Replace sensor |
| **Reading way out of range** | Open circuit, short circuit | Check resistance | Replace sensor/cable |
| **Erratic, jumping values** | Loose connection, interference | Wiggle wires, check shielding | Re-secure, add shielding |
| **Slow drift over time** | Sensor degradation, fouling | Compare to known standard | Clean, recalibrate, or replace |
| **Error code** | Communication failure | Check protocol, wiring | Verify settings, replace cable |

### Controller Failures

**Arduino/Raspberry Pi:**
```
Symptom: Unresponsive, frozen
Diagnosis: Power cycle, check SD card corruption
Solution: Restart, reflash if needed

Symptom: Outputs not working
Diagnosis: Burned out pin, relay failure
Solution: Test with LED, replace relay module

Symptom: Incorrect readings
Diagnosis: Software bug, calibration issue
Solution: Review code, re-calibrate
```

**PLC:**
```
Symptom: Red error light
Diagnosis: Check error code in manual
Solution: Address specific error (I/O fault, program error, etc.)

Symptom: Program not running
Diagnosis: PLC in STOP mode
Solution: Switch to RUN mode
```

### Communication Issues

**Wired (Ethernet, RS485):**
```
Problem: No communication

Checks:
  1. Cable connected? (physical inspection)
  2. Cable pinout correct? (crossover vs. straight-through)
  3. Baud rate match? (9600 vs. 115200)
  4. Address conflict? (two devices with same ID)
  5. Termination resistors? (RS485 needs them)

Diagnostic tool: Multimeter (check continuity, voltage)
```

**Wireless (Wi-Fi, LoRa):**
```
Problem: Connection drops

Checks:
  1. Signal strength (too far? obstacles?)
  2. Interference (other 2.4GHz devices, microwave ovens)
  3. IP address conflict
  4. Router issues (reboot router)
  5. Antenna orientation

Diagnostic tool: WiFi analyzer app (signal strength, channel overlap)
```

---

## 13.3 Sensor Drift and Degradation

### pH Sensor Drift

**Normal Drift:**
```
New sensor: Reads pH 7.00 in buffer ± 0.02
After 6 months: Reads pH 7.08 in buffer (0.08 drift)
After 12 months: Reads pH 7.15 in buffer (0.15 drift)

Action:
  < 0.10 drift: Recalibrate
  0.10-0.20 drift: Recalibrate, monitor closely
  > 0.20 drift: Replace sensor
```

**Troubleshooting Slow Response:**
```
Problem: pH probe takes 5+ minutes to stabilize

Causes:
  • Glass membrane dried out
  • Reference junction clogged
  • Aging sensor

Solutions:
  1. Soak in storage solution overnight
  2. Clean with electrode cleaning solution
  3. Check electrolyte level (if refillable)
  4. Replace if old (>1 year in continuous use)
```

### EC Sensor Drift

**Diagnosing Fouling:**
```
Test:
  1. Measure EC of 1413 µS/cm standard
  2. Expected: 1413 ± 20 µS/cm
  3. Actual: 1350 µS/cm (low)

Diagnosis: Fouling or calibration drift

Solution:
  1. Clean electrodes (vinegar soak, soft brush)
  2. Rinse thoroughly
  3. Recalibrate
  4. Retest standard
     - If now accurate: Fouling was the issue
     - If still off: Sensor degraded, replace
```

### Temperature Sensor Validation

**Quick Accuracy Check:**
```
Ice Bath Test:
  1. Fill cup with crushed ice + water
  2. Stir well
  3. Insert sensor
  4. Wait 2 minutes
  5. Reading should be 32°F ± 1°F

If out of range:
  - Digital sensor: Usually can't calibrate, replace
  - Analog sensor: Adjust offset in controller
```

---

## 13.4 Power Issues

### Symptoms and Causes

**System Randomly Resets:**
```
Likely cause: Insufficient power supply

Diagnosis:
  • Measure voltage under load (multimeter)
  • Check for voltage drop when relays activate
  • Calculate total current draw vs. supply capacity

Example:
  Supply: 5V 2A power adapter
  Draw: Raspberry Pi (1.5A) + Relay (0.5A) + Sensors (0.2A) = 2.2A
  Problem: Exceeds supply capacity!

Solution:
  • Upgrade to 5V 3A supply
  • OR use separate supplies for relays
```

**Intermittent Sensor Failures:**
```
Symptom: Sensors work sometimes, fail others

Diagnosis: Voltage drop over long cables

Test:
  • Measure voltage at sensor location (not just at source)
  • Compare to spec (sensor needs 5V, measures 4.2V → too low)

Solution:
  • Shorten cable
  • Use thicker wire (lower resistance)
  • Local power regulation (buck converter at sensor)
  • Switch to 12V or 24V system (less voltage drop)
```

**Power Outage Recovery:**
```
Problem: System doesn't resume after power restored

Checks:
  1. Did program save state? (check EEPROM or SD)
  2. Clock/time reset? (RTC battery dead?)
  3. Network configuration lost? (DHCP vs. static IP)

Best practice:
  • Design for clean startup from power loss
  • Use UPS (uninterruptible power supply) for critical systems
  • Test monthly by pulling plug
```

---

## 13.5 Diagnostic Tools

### Essential Tools

**1. Multimeter**
```
Measures:
  • Voltage (DC and AC)
  • Current
  • Resistance
  • Continuity (beep test)

Uses:
  • Verify power supply voltage
  • Check sensor resistance
  • Test cable continuity
  • Measure 4-20mA signals

Cost: $20-100
```

**2. Serial Monitor (Arduino IDE, PuTTY)**
```
Purpose: View debug messages from microcontroller

Example debug output:
  "Temperature: 72.5F"
  "pH sensor reading: 1023 (raw ADC)"
  "Relay 1: ON"

Use to diagnose:
  • Is sensor being read?
  • What values is controller seeing?
  • Is logic executing correctly?
```

**3. Network Diagnostic Tools**
```
ping: Test if device reachable
  ping 192.168.1.20

nmap: Scan network for devices
  nmap 192.168.1.0/24

Wireshark: Capture network traffic (advanced)
```

**4. Modbus Poll Software**
```
Purpose: Read Modbus devices without controller

Uses:
  • Test if sensor responds to Modbus
  • Read raw register values
  • Diagnose communication issues

Software: QModMaster (free), Modbus Poll (paid)
```

---

## 13.6 Documentation and Knowledge Base

### Maintain a Troubleshooting Log

**Format:**
```
═══════════════════════════════════════════════════════════════
TROUBLESHOOTING LOG ENTRY

Date: 2025-12-10
Operator: J. Smith
System: Greenhouse Zone 1

PROBLEM:
  pH reading stuck at 7.0, not responding to changes

SYMPTOMS:
  • pH displays 7.00 constantly
  • Adding acid does not change reading
  • Sensor was working yesterday

DIAGNOSIS:
  • Checked wiring: OK
  • Tested with multimeter: Probe shows constant voltage (not changing)
  • Removed probe from solution: Reading unchanged (should show error)
  • Conclusion: Probe failed (likely broken glass or internal short)

SOLUTION:
  • Replaced pH probe with spare (Serial# PH-2025-02)
  • Calibrated new probe (pH 4 and 7 buffers)
  • Verified response to acid addition: OK

VERIFICATION:
  • Readings stable and responsive for 2 hours
  • Matches manual pH test strips

PREVENTION:
  • Old probe was 14 months old (expected life 12 months)
  • Updated preventive maintenance schedule
  • Ordered replacement probe for inventory

FOLLOW-UP:
  • Monitor closely for 48 hours
  • Recalibrate in 1 week
═══════════════════════════════════════════════════════════════
```

### Create System Documentation

**Essential Documents:**

1. **As-Built Diagrams**
   - Wiring diagrams
   - Sensor locations
   - Network topology
   - Plumbing/irrigation layout

2. **Component Inventory**
   ```
   Component: pH Probe
   Model: Atlas Scientific PT-1000
   Location: Nutrient Tank A
   Installation Date: 2024-11-15
   Expected Life: 12-18 months
   Replacement Due: 2025-11-15
   Spare Part#: PT-1000-SPARE
   ```

3. **Configuration Settings**
   - IP addresses
   - Calibration values
   - Setpoints and thresholds
   - Password list (secure storage!)

4. **Vendor Contact Information**
   - Tech support phone numbers
   - Warranty details
   - Order history

### Quick Reference Cheat Sheet

```
╔═══════════════════════════════════════════════════════════════╗
║           QUICK TROUBLESHOOTING FLOWCHART                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Sensor reading incorrect or missing?                        ║
║             │                                                 ║
║             ├──→ Check power: Multimeter voltage at sensor    ║
║             │    OK? → Continue                               ║
║             │    Low? → Fix power supply/wiring               ║
║             │                                                 ║
║             ├──→ Check wiring: Visual inspection, continuity  ║
║             │    OK? → Continue                               ║
║             │    Bad? → Repair/replace cable                  ║
║             │                                                 ║
║             ├──→ Check sensor: Test with known reference      ║
║             │    OK? → Check controller                       ║
║             │    Bad? → Replace sensor                        ║
║             │                                                 ║
║             └──→ Check controller: Substitute input, review logic ║
║                  OK? → Rare, may be software bug              ║
║                  Bad? → Replace controller module             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Summary

Systematic troubleshooting minimizes downtime and maintains reliable automation:

**Key Takeaways:**

1. **Methodical Approach:** Observe, gather data, hypothesize, test, solve, verify
2. **Common Failures:** Sensors fail most often (plan for replacement)
3. **Drift is Normal:** Calibrate regularly, replace when drift excessive
4. **Power Matters:** Voltage drops and insufficient current cause mysterious issues
5. **Document Everything:** Future-you will thank present-you
6. **Keep Spares:** Critical sensors, relays, cables
7. **Test Regularly:** Monthly tests catch problems before they're critical

**Troubleshooting Priorities:**

1. **Life-threatening issues:** DO sensor failure in fish tank → IMMEDIATE
2. **Production-impacting:** Climate control failure → Hours
3. **Degraded performance:** Sensor drift → Days
4. **Annoyances:** Dashboard slow → When convenient

**Prevention is Better Than Repair:**
- Regular calibration schedules
- Preventive sensor replacement (before failure)
- Monthly system tests
- Spare parts inventory
- Good documentation

---

## Review Questions

1. What are the six steps of the systematic troubleshooting approach?
2. What are the most common causes of "frozen" sensor readings?
3. How can you diagnose whether a sensor or controller is at fault?
4. What are signs of pH sensor degradation?
5. How do you test for voltage drop in long cable runs?
6. What diagnostic tools are essential for troubleshooting?
7. What information should be included in a troubleshooting log entry?
8. Why maintain an as-built diagram of your system?

---

## Practical Exercise

**Exercise: Troubleshooting Scenarios**

For each scenario, apply the systematic approach and document your process:

**Scenario 1:**
Your aquaponics pH controller shows pH 12.5 (impossible in your system). The fish and plants look healthy. What do you do?

**Scenario 2:**
Your Raspberry Pi monitoring system stops logging data every few hours. When you check it, it's running normally. Logs show no errors. What do you investigate?

**Scenario 3:**
Your automated dosing pump has been adding nutrient solution, but EC is not increasing. Manual EC testing confirms it's not rising. What's wrong?

**For each scenario, document:**
1. Initial observations
2. Data you would gather
3. Hypotheses (at least 3)
4. Tests to perform
5. Likely solution
6. Verification steps

**Deliverable:** Completed troubleshooting worksheets for all three scenarios using the systematic approach.

---

*End of Module 13*
