# Module 18: Commissioning Protocols

## Introduction

System commissioning is the systematic process of verifying that all components function as designed. Proper commissioning prevents costly failures, ensures safety, and validates performance guarantees. This module covers commissioning procedures for aquaponic systems from pre-startup through operational handoff.

**Duration:** 1 hour

---

## Learning Objectives

1. Develop pre-startup checklists
2. Execute system startup sequences
3. Perform functional testing of all subsystems
4. Calibrate sensors and controls
5. Document baseline performance
6. Train operators and create handoff documentation

---

## 1. Pre-Startup Checklist

### 1.1 Visual Inspection

```
Structural:
☐ All tanks level and properly supported
☐ No cracks or damage to tanks
☐ Support structures adequate and secure
☐ Floor drains clear and functional
☐ Containment berms intact

Plumbing:
☐ All connections tight (hand-check every joint)
☐ Pipe supports installed per specifications
☐ Valves installed in correct orientation
☐ Check valves installed correctly (arrow direction)
☐ No obvious leaks or damage
☐ Drain lines slope correctly (verify with level)
☐ Overflow protection in place

Electrical:
☐ All panels properly labeled
☐ Correct breaker sizes installed
☐ Equipment grounded properly
☐ GFCI outlets tested
☐ Emergency stops functional
☐ Conduit supported and sealed
☐ No exposed wiring

Mechanical:
☐ Pump rotation direction correct (check before plumbing)
☐ Aerators and diffusers installed correctly
☐ Filters accessible for maintenance
☐ Unions installed for equipment removal
```

---

## 2. Leak Testing

### 2.1 Hydrostatic Testing

**Procedure:**
```
1. Fill system with clean water
   - Use dechlorinated water if available
   - Fill slowly to check for obvious leaks
   - Monitor all joints during filling

2. Pressurize to test pressure
   - Test pressure = 1.5× operating pressure
   - For gravity systems: Fill to maximum level
   - For pressurized systems: Use test pump

3. Hold test pressure for minimum 2 hours
   - Mark water level at start
   - Monitor pressure gauge continuously
   - Acceptable loss: <2% over test period

4. Inspect all connections
   - Check every joint, valve, bulkhead
   - Look for drips, wetness, staining
   - Use dry paper towels to detect minor leaks
   - Mark any leaks with tape/marker

5. Document results
   - Record test pressure and duration
   - Photograph any leaks
   - Note repairs required
   - Re-test after repairs

Pass Criteria:
- No visible leaks
- Pressure loss <2% over 2 hours
- All connections dry
```

---

## 3. Equipment Commissioning

### 3.1 Pump Startup

**Initial Startup:**
```
1. Pre-start checks:
   ☐ Pump primed (if external)
   ☐ Suction valve open
   ☐ Discharge valve closed
   ☐ Pressure gauges installed
   ☐ Electrical connections verified

2. First start (no water flow):
   ☐ Start pump for 10 seconds only
   ☐ Verify rotation direction (arrow on motor)
   ☐ Listen for unusual noises
   ☐ Stop immediately if problems

3. Flow startup:
   ☐ Slowly open discharge valve
   ☐ Observe flow and pressure
   ☐ Check for vibration (acceptable: <0.3 in/s)
   ☐ Monitor motor current (should match nameplate)
   ☐ Feel bearings for heat (should be warm, not hot)

4. Performance verification:
   ☐ Measure flow rate (ultrasonic or bucket test)
   ☐ Measure discharge pressure
   ☐ Plot on pump curve
   ☐ Verify within ±10% of design point

5. Run test:
   ☐ Operate continuously for 4 hours
   ☐ Monitor temperature rise
   ☐ Check for leaks at seal
   ☐ Verify no unusual sounds or vibration
```

### 3.2 Aeration System

**Commissioning Steps:**
```
1. Blower startup:
   ☐ Check oil level (if oil-lubricated)
   ☐ Verify outlet valve partially open (prevent deadhead)
   ☐ Start and immediately check rotation
   ☐ Listen for bearing noise
   ☐ Monitor discharge pressure and temperature

2. Diffuser inspection:
   ☐ Verify all diffusers producing bubbles
   ☐ Check bubble size and distribution
   ☐ Look for clogged diffusers (uneven bubbling)
   ☐ Adjust airflow to achieve target DO

3. DO testing:
   ☐ Measure DO at multiple points in tank
   ☐ Map DO distribution (create grid)
   ☐ Identify dead zones
   ☐ Adjust diffuser placement if needed
   ☐ Target: <0.5 mg/L variation across tank
```

---

## 4. Control System Commissioning

### 4.1 Sensor Calibration

**pH Sensor:**
```
1. Remove from system
2. Rinse with DI water
3. Calibrate with buffer solutions:
   - pH 7.0 (first point)
   - pH 4.0 or 10.0 (second point, based on range)
4. Verify readings within ±0.05 pH
5. Install in system
6. Cross-check with handheld meter
7. Record calibration date
```

**DO Sensor:**
```
Optical DO:
1. Perform 100% air calibration (in air)
2. Verify zero point (sodium sulfite solution)
3. Install in system
4. Cross-check with Winkler titration
5. Accuracy target: ±0.2 mg/L

Polarographic DO:
1. Fill membrane cap with electrolyte
2. Install membrane (no bubbles)
3. Polarize for 4-6 hours
4. Calibrate in air-saturated water
5. Verify accuracy with Winkler method
```

**Temperature:**
```
1. Cross-check with NIST-traceable thermometer
2. Verify within ±0.5°F
3. If out of spec, replace or adjust offset
4. RTD sensors typically don't drift (verify wiring)
```

### 4.2 Control Loop Testing

**Temperature Control:**
```
Test Plan:
1. Set setpoint to current temp + 2°F
2. Verify heater activates
3. Monitor temperature rise
4. Observe heater cycling (should not short-cycle)
5. Check for overshoot (<1°F acceptable)
6. Reduce setpoint to current temp - 2°F
7. Verify heater deactivates
8. Document control behavior

PID Tuning (if needed):
- Increase proportional band if oscillating
- Increase integral time if offset persists
- Add derivative if overshooting
```

**pH Control:**
```
Test Plan:
1. Set setpoint to current pH + 0.3
2. Manually dose base, observe controller response
3. Verify controller maintains setpoint ±0.1 pH
4. Test acid dosing similarly
5. Document dose volumes and response times
6. Adjust PID parameters if needed

Safety:
- Set high/low alarms (pH 6.0 and 8.5)
- Test alarm notifications
- Verify dosing pumps cannot run continuously
```

---

## 5. Biofilter Establishment

### 5.1 Startup Procedures

**Fishless Cycling:**
```
Week 1-2: Ammonia Dosing
- Add ammonia to 2-3 ppm daily
- Monitor TAN and NO₂⁻ daily
- DO must stay >5 ppm
- pH 7.0-8.0 (add buffer if needed)

Week 3-4: Nitrite Peak
- Ammonia drops quickly (<24 hrs)
- Nitrite rises to 5-10 ppm
- Continue ammonia dosing
- Be patient (NO₂⁻ oxidizers slower)

Week 5-6: Completion
- Ammonia converts in <24 hours
- Nitrite converts in <24 hours
- Nitrate accumulates (100+ ppm normal)
- System ready for fish

Testing:
- Add 2 ppm ammonia
- Test at 24 hours
- TAN <0.5 ppm and NO₂⁻ <0.5 ppm = Success
```

### 5.2 Performance Validation

**Load Testing:**
```
1. Calculate maximum TAN load (from design)
2. Dose ammonia to simulate max load
3. Monitor TAN and NO₂⁻ every 4 hours for 48 hours
4. Verify TAN <1.0 ppm and NO₂⁻ <0.5 ppm maintained

Document:
- Ammonia dose amount and timing
- Water temperature during test
- pH during test
- Test results (tabulated)
- Photos of test kit results
```

---

## 6. System Documentation

### 6.1 As-Built Drawings

**Required Updates:**
```
Mark up drawings with:
- Actual pipe routes (if different from design)
- Actual equipment locations
- Valve locations and numbers
- Sensor locations
- Electrical panel layouts
- Any field changes

Create final as-built set:
- Scan marked-up drawings
- Update CAD drawings
- Include equipment submittals
- Bind in operations manual
```

### 6.2 Operations Manual

**Contents:**
```
Section 1: System Overview
- Design parameters
- Flow diagram (P&ID)
- Equipment list with locations
- Control system description

Section 2: Operating Procedures
- Daily tasks (feeding, monitoring)
- Weekly tasks (testing, cleaning)
- Monthly tasks (maintenance)
- Emergency procedures

Section 3: Equipment Information
- Manufacturer data sheets
- Warranty information
- Parts lists with suppliers
- Service provider contacts

Section 4: Maintenance Schedules
- Pump maintenance intervals
- Filter cleaning procedures
- Sensor calibration schedule
- Media replacement timing

Section 5: Troubleshooting
- Common problems and solutions
- Water quality issues
- Equipment failure protocols
- Emergency contact information

Section 6: Test Data
- Commissioning test results
- Baseline water quality data
- Flow and pressure readings
- Calibration records
```

---

## 7. Operator Training

### 7.1 Training Checklist

```
Basic Operation:
☐ System startup procedure
☐ Normal shutdown procedure
☐ Emergency shutdown procedure
☐ Daily monitoring tasks
☐ Feeding protocols
☐ Water quality testing

Equipment:
☐ Pump operation and troubleshooting
☐ Filter backwashing/cleaning
☐ Aerator maintenance
☐ Heater/chiller operation

Controls:
☐ Setpoint adjustment
☐ Alarm acknowledgment
☐ Sensor calibration
☐ Data logging review

Water Quality:
☐ Test kit use (TAN, NO₂⁻, NO₃⁻, pH, DO)
☐ Interpretation of results
☐ Corrective actions for out-of-range
☐ Record keeping

Maintenance:
☐ Routine maintenance tasks
☐ When to call service
☐ Parts inventory management
☐ Vendor contacts

Emergency:
☐ Power failure response
☐ Low DO emergency
☐ High ammonia emergency
☐ Equipment failure protocols
☐ Emergency contact list
```

---

## Summary

Commissioning ensures system reliability and performance:

1. Complete thorough pre-startup inspections
2. Perform leak testing before operation
3. Commission equipment systematically
4. Calibrate all sensors and test controls
5. Establish and validate biofilter performance
6. Document as-built conditions
7. Train operators comprehensively

Proper commissioning prevents failures and ensures successful operation.

---

## Check Your Understanding

1. Develop a pre-startup checklist for a 10,000-gallon recirculating system with biofilter, pump, and aeration.

2. Write a pump commissioning procedure including pre-start checks, startup sequence, and performance verification.

3. Create a sensor calibration schedule for pH, DO, and temperature sensors. Include frequency and acceptance criteria.

4. Develop a biofilter startup protocol using fishless cycling. Specify ammonia dosing and expected timeline.

5. Design a leak test procedure for a pressurized piping system operating at 25 PSI. Include test pressure, duration, and pass/fail criteria.

6. Create an operator training outline covering daily operations, water quality testing, and emergency procedures.

7. Specify performance acceptance criteria for a biofilter rated at 500 g TAN/day. Include loading test procedure.

8. Develop a control loop test procedure for automated pH control system targeting pH 7.0 ±0.2.

9. Create an as-built drawing requirements list specifying what information must be documented.

10. Design a 4-hour pump run test procedure including temperature monitoring, vibration checks, and performance verification.

---

**Next Module:** Module 19 - Design Review Process
