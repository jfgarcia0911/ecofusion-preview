# Vertical Farm System Troubleshooting Guide

## Lighting System Issues

### Problem: LED Fixtures Not Illuminating
**Symptoms:** No light output, completely dark
**Possible Causes:**
- No power to fixture
- Driver failure
- Control signal missing
- Emergency stop activated

**Troubleshooting Steps:**
1. Check breaker/fuse - Reset if tripped
2. Verify voltage at driver input (should be within ±5% of rated)
3. Check control signal (0-10V should show 0-10V range)
4. Inspect driver LED indicators (refer to manufacturer manual)
5. Test with bypass if available
6. Replace driver if other tests pass

---

### Problem: Flickering or Unstable Light Output
**Symptoms:** Visible flicker, inconsistent brightness
**Possible Causes:**
- Loose connections
- Driver overheating
- Voltage fluctuations
- Control signal noise
- Failing LED array

**Troubleshooting:**
1. Tighten all electrical connections
2. Check driver temperature (<60°C optimal)
3. Measure input voltage stability (use oscilloscope if available)
4. Shield control wiring from interference
5. Replace driver if issue persists

---

### Problem: Reduced Light Output (Gradual)
**Symptoms:** PPFD measurements below target over time
**Possible Causes:**
- Normal LED degradation (L70 lifespan)
- Dust accumulation on lenses
- Elevated operating temperature
- Driver under-voltage

**Troubleshooting:**
1. Clean lenses and reflectors
2. Measure PPFD - compare to baseline
3. Check driver output voltage and current
4. Verify adequate cooling/airflow
5. Plan replacement if >30% degradation

---

## HVAC System Issues

### Problem: High Temperature - Cannot Cool
**Symptoms:** Zone temperature above setpoint, cooling maxed out
**Possible Causes:**
- Insufficient cooling capacity
- High refrigerant superheat/low charge
- Dirty coils or filters
- Airflow restriction
- Infiltration of outside air

**Troubleshooting:**
1. Check/replace air filters
2. Inspect coils for dirt/frost
3. Verify refrigerant pressures (requires certified tech)
4. Measure airflow (should meet design CFM)
5. Check for open doors/air leaks
6. Verify all compressors/fans operating

---

### Problem: High Humidity - Condensation Forming
**Symptoms:** RH >80%, water dripping, mold risk
**Possible Causes:**
- Dehumidification capacity exceeded
- Dehumidifier offline
- Transpiration rate higher than expected
- Cool surfaces causing condensation

**Troubleshooting:**
1. Verify dehumidifiers operating
2. Check drain lines not clogged
3. Increase dehumidification setpoint temporarily
4. Reduce transpiration (lower light intensity if possible)
5. Insulate cold surfaces (pipes, ducts)
6. Consider supplemental dehumidification

---

### Problem: Uneven Temperature Distribution
**Symptoms:** Hot and cold spots, >3°F variation between zones
**Possible Causes:**
- Blocked diffusers or returns
- Damper position incorrect
- Sensor placement poor
- Inadequate air mixing

**Troubleshooting:**
1. Check all diffusers clear of obstruction
2. Verify damper positions match control signal
3. Relocate sensors away from direct airflow
4. Balance airflow using dampers
5. Add circulation fans if needed

---

## Irrigation System Issues

### Problem: Low Water Pressure
**Symptoms:** Weak flow, emitters not reaching target
**Possible Causes:**
- Pump failure or cavitation
- Clogged filter
- Line restriction
- Valve partially closed
- Leak in system

**Troubleshooting:**
1. Check pump operation - listen for normal sound
2. Inspect pressure gauges before/after filter
3. Clean or replace filter if ΔP >10 PSI
4. Verify all valves fully open
5. Inspect for visible leaks
6. Check pump impeller for damage

---

### Problem: pH or EC Out of Range
**Symptoms:** Nutrient solution pH or EC drifts from target
**Possible Causes:**
- Dosing pump failure
- Stock solution depleted
- Sensor calibration drift
- Mixing inadequate
- Source water change

**Troubleshooting:**
1. Verify stock solution levels (refill if low)
2. Test dosing pumps manually - check injection
3. Calibrate pH and EC sensors
4. Check mixing - ensure circulation adequate
5. Test source water for changes
6. Inspect tubing for blockages

---

### Problem: Clogged Emitters
**Symptoms:** Uneven plant growth, dry spots
**Possible Causes:**
- Algae growth
- Mineral precipitation
- Inadequate filtration
- Biofilm formation

**Troubleshooting:**
1. Flush system with clean water
2. Inspect and replace filters
3. Treat with acid wash (consult manual)
4. Improve filtration (finer mesh)
5. Add UV treatment to prevent algae
6. Replace severely clogged emitters

---

## Control System Issues

### Problem: Sensor Reading Errors
**Symptoms:** Impossible values, erratic readings, alarms
**Possible Causes:**
- Sensor failure
- Wiring damage
- Calibration drift
- Electrical interference
- Power supply issue

**Troubleshooting:**
1. Visual inspection of sensor and wiring
2. Check sensor power supply voltage
3. Swap with known good sensor (if available)
4. Re-calibrate using standards
5. Shield sensor cable if electrical noise suspected
6. Replace sensor if faulty

---

### Problem: System Not Responding to Control
**Symptoms:** Setpoint changes ignored, equipment doesn't start/stop
**Possible Causes:**
- Control output failure
- Actuator stuck/failed
- Communication loss
- Programming error
- Manual override active

**Troubleshooting:**
1. Check manual/auto mode selector
2. Verify communication status LEDs
3. Test control output with multimeter
4. Manually operate actuator - verify not stuck
5. Review control program logic
6. Reboot controller if necessary

---

### Problem: Frequent Nuisance Alarms
**Symptoms:** Alarms triggering without real issues
**Possible Causes:**
- Deadband too narrow
- Sensor placement poor
- Alarm threshold too tight
- Transient conditions normal
- Control loop oscillating

**Troubleshooting:**
1. Widen alarm deadband (±2°F minimum)
2. Extend alarm delay (30-60 seconds)
3. Relocate sensors away from transients
4. Tune PID loops to reduce oscillation
5. Review alarm philosophy - set appropriately

---

## Electrical Issues

### Problem: Circuit Breaker Tripping
**Symptoms:** Power loss to equipment, breaker open
**Possible Causes:**
- Overload condition
- Short circuit
- Ground fault
- Breaker failure

**Troubleshooting:**
1. DO NOT immediately reset - investigate first
2. Disconnect loads and test circuit
3. Use megohmmeter to check insulation resistance
4. Measure current draw of each load
5. Look for damaged wiring or wet connections
6. Replace breaker if faulty (consult electrician)

---

### Problem: Low Voltage
**Symptoms:** Equipment underperforming, lights dim
**Possible Causes:**
- Undersized wiring
- Poor connections (high resistance)
- Utility supply issue
- Overloaded transformer

**Troubleshooting:**
1. Measure voltage at service entrance
2. Measure voltage at affected equipment
3. Calculate voltage drop
4. Inspect connections for corrosion/looseness
5. Contact utility if supply voltage low
6. Upgrade wiring if undersized

---

## Preventive Actions

### Daily
- Visual inspection of all systems
- Review alarm logs
- Verify key sensors reading normally
- Check for leaks or unusual sounds

### Weekly
- Measure PPFD at multiple locations
- Test pH and EC calibration
- Inspect filters and clean if needed
- Review data trends for anomalies

### Monthly
- Comprehensive sensor calibration
- Clean light fixtures and reflectors
- Inspect electrical connections
- Test emergency systems
- Review performance vs. targets

### Quarterly
- HVAC filter replacement
- Comprehensive system performance test
- Infrared thermography (electrical)
- Update maintenance logs

---

## Emergency Contacts

**Critical Equipment Failures:**
- HVAC: [Contractor name/number]
- Electrical: [Electrician name/number]
- Controls: [Integrator name/number]
- Irrigation: [Supplier name/number]

**Emergency Procedures:**
- Power loss: See emergency response plan
- Water leak: Shut main valve, call plumber
- Fire: Evacuate, call 911, use extinguisher only if safe
- Chemical spill: Contain, ventilate, consult SDS

---

**Remember: Safety First. When in doubt, call a qualified professional.**
