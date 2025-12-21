# Module 3 Quiz: Water Quality Sensors
**Course 203: System Automation & Monitoring**

**Instructions:** Select the best answer for each question. Passing score: 70% (7/10 correct)

---

## Questions

**1. How does a glass electrode pH sensor work?**
- A) It measures electrical resistance of the solution
- B) It measures light absorption through the solution
- C) It generates voltage proportional to H+ ion concentration across a glass membrane
- D) It counts individual hydrogen atoms

**2. What is the proper storage method for a pH probe when not in use?**
- A) Dry storage in a sealed bag
- B) Distilled water
- C) Tap water
- D) pH 4.0 buffer or dedicated storage solution

**3. How often should a pH sensor be calibrated in a commercial aquaponics operation?**
- A) Daily
- B) Weekly
- C) Monthly
- D) Annually

**4. What is the difference between EC and TDS?**
- A) They are identical measurements
- B) EC measures electrical conductivity; TDS estimates total dissolved solids mass
- C) EC is for water; TDS is for air
- D) TDS is more accurate than EC

**5. What is the advantage of an optical (luminescent) DO probe over a galvanic probe?**
- A) Lower cost
- B) Faster response time
- C) No membrane replacement needed, longer lifespan
- D) Works without calibration

**6. What type of temperature sensor is best for DIY Arduino projects?**
- A) Thermocouple
- B) DS18B20 digital temperature sensor
- C) RTD (Pt100)
- D) Infrared sensor

**7. What calibration method is used for dissolved oxygen sensors?**
- A) Using pH buffers
- B) 100% air saturation or zero-DO solution
- C) Distilled water
- D) Salt water

**8. A pH probe reads 7.00 constantly, even when acid is added. What is the likely problem?**
- A) The probe is perfectly calibrated
- B) The solution really is pH 7.00
- C) The probe has failed (broken glass or internal short)
- D) The meter needs new batteries

**9. What causes EC sensor readings to drift low over time?**
- A) Sensor degradation or fouling on electrodes
- B) Temperature changes
- C) Too much calibration
- D) Water evaporation

**10. Why use a 4-20mA output instead of 0-20mA for industrial sensors?**
- A) It's cheaper
- B) 4mA baseline distinguishes sensor working at 0% from broken wire (0mA)
- C) It's faster
- D) It uses less power

---

## Answer Key

1. **C** - It generates voltage proportional to H+ ion concentration across a glass membrane
   - *Explanation:* The glass membrane allows H+ ions to pass, creating a voltage difference that the meter converts to pH reading.

2. **D** - pH 4.0 buffer or dedicated storage solution
   - *Explanation:* Storing in distilled water leaches electrolyte and damages the probe. Always use storage solution or pH 4 buffer.

3. **B** - Weekly
   - *Explanation:* Weekly calibration for commercial operations ensures accuracy. Daily for critical control, monthly for hobbyist systems.

4. **B** - EC measures electrical conductivity; TDS estimates total dissolved solids mass
   - *Explanation:* EC is the actual measurement (mS/cm). TDS (ppm) is derived from EC using a conversion factor (~0.5-0.7).

5. **C** - No membrane replacement needed, longer lifespan
   - *Explanation:* Optical DO probes use fluorescence quenching, no membrane to replace. Longer life but more expensive initially.

6. **B** - DS18B20 digital temperature sensor
   - *Explanation:* DS18B20 is inexpensive ($2-10), pre-calibrated, easy to use with Arduino, and accurate enough for most CEA applications.

7. **B** - 100% air saturation or zero-DO solution
   - *Explanation:* DO sensors calibrate at 100% (aerated water at known temp/altitude) or 0% (sodium sulfite solution).

8. **C** - The probe has failed (broken glass or internal short)
   - *Explanation:* A stuck reading that doesn't respond to changes indicates probe failure, not accurate measurement.

9. **A** - Sensor degradation or fouling on electrodes
   - *Explanation:* Buildup on EC electrodes reduces conductivity reading. Clean electrodes and recalibrate to fix.

10. **B** - 4mA baseline distinguishes sensor working at 0% from broken wire (0mA)
    - *Explanation:* With 4-20mA, 4mA = sensor working at minimum, 0mA = broken wire/power failure. Clear distinction for fault detection.

---

**Scoring:**
- 9-10 correct: Excellent understanding
- 7-8 correct: Good, passing
- 5-6 correct: Review material, retake quiz
- 0-4 correct: Re-study module before retaking

---

*End of Module 3 Quiz*
