# Module 2 Quiz: Sensor Technologies
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is the difference between accuracy and precision in sensor specifications?**
   - a) They are the same thing and can be used interchangeably
   - b) Accuracy is how close to the true value; precision is how consistently the sensor repeats readings
   - c) Precision is how close to the true value; accuracy is how consistently the sensor repeats readings
   - d) Accuracy applies only to digital sensors; precision applies only to analog sensors

**2. A pH sensor has a resolution of 0.01 pH. What does this mean?**
   - a) The sensor can detect changes as small as 0.01 pH units
   - b) The sensor is accurate to within ±0.01 pH
   - c) The sensor must be calibrated every 0.01 hours
   - d) The sensor costs $0.01 per reading

**3. Why is a 4-20mA current loop preferred over 0-20mA in industrial applications?**
   - a) It uses less power
   - b) It's cheaper to implement
   - c) 4mA represents 0% (sensor working), while 0mA indicates a broken wire or power failure
   - d) It works over longer distances

**4. What is the T90 specification for a sensor?**
   - a) The temperature at which the sensor fails
   - b) The time to reach 90% of the final value after a step change
   - c) The sensor must be replaced after 90 days
   - d) The sensor operates at 90% accuracy

**5. Which sensor output type is most immune to electrical noise over long cable runs?**
   - a) 0-5V analog
   - b) 0-10V analog
   - c) Digital (I2C, RS485, Modbus)
   - d) They are all equally susceptible to noise

**6. What is the recommended frequency for calibrating a pH sensor in a commercial operation?**
   - a) Daily
   - b) Weekly
   - c) Monthly
   - d) Annually

**7. In a two-point calibration for a pH sensor, you would typically use:**
   - a) Only a pH 7.0 buffer solution
   - b) pH 4.0 and pH 7.0 buffer solutions
   - c) Tap water and distilled water
   - d) The same solution twice to verify precision

**8. What is the main disadvantage of wireless sensors compared to wired sensors?**
   - a) They cost less initially but more over time
   - b) They require battery replacement and can experience transmission gaps
   - c) They are less accurate than wired sensors
   - d) They cannot measure as many parameters

**9. A temperature sensor reads 25.0°C, 25.1°C, 25.0°C, 25.1°C for the same condition (true value is 27.0°C). This sensor is:**
   - a) Accurate and precise
   - b) Accurate but not precise
   - c) Precise but not accurate
   - d) Neither accurate nor precise

**10. For a fish tank with $2,000 worth of livestock, which sensor investment strategy makes the most sense?**
   - a) Buy the cheapest sensors available ($10-20 range) to minimize costs
   - b) Invest in quality sensors ($100-300 range) as insurance against livestock loss
   - c) Don't use sensors; just check manually
   - d) Use hobby-grade sensors and replace them frequently

---

## Answer Key

1. **b) Accuracy is how close to the true value; precision is how consistently the sensor repeats readings** - Accuracy measures correctness relative to true value. Precision (repeatability) measures consistency of repeated measurements. A sensor can be precise but inaccurate (consistently wrong) or accurate but imprecise (sometimes right but variable).

2. **a) The sensor can detect changes as small as 0.01 pH units** - Resolution is the smallest change a sensor can detect. A 0.01 pH resolution means the sensor can distinguish between 6.50 and 6.51 pH. This is different from accuracy (how correct the reading is).

3. **c) 4mA represents 0% (sensor working), while 0mA indicates a broken wire or power failure** - The 4-20mA standard allows distinguishing between a low reading (4mA) and a system failure (0mA). With 0-20mA, you can't tell if 0mA means the reading is zero or the wire is broken.

4. **b) The time to reach 90% of the final value after a step change** - T90 response time indicates how quickly a sensor responds to changes. A fast response (T90 < 30 seconds) is critical for parameters like dissolved oxygen in fish tanks where rapid changes can be fatal.

5. **c) Digital (I2C, RS485, Modbus)** - Digital sensors transmit data as digital signals that are immune to electrical noise and voltage drop over long distances. Analog voltage signals degrade and pick up noise over long cable runs, especially 0-5V signals.

6. **b) Weekly** - pH sensors drift quickly due to chemical changes in the electrode. Weekly calibration is recommended for commercial operations where pH is critical. Temperature sensors are much more stable and may only need annual calibration.

7. **b) pH 4.0 and pH 7.0 buffer solutions** - Two-point calibration uses two known reference values to correct both offset and slope errors. pH 4.0 and 7.0 are standard buffer values that span the typical growing range for most crops.

8. **b) They require battery replacement and can experience transmission gaps** - Wireless sensors need periodic battery changes and can lose connection due to interference, obstacles, or range limitations. Wired sensors are more reliable for continuous monitoring but require more installation labor.

9. **c) Precise but not accurate** - The sensor gives very consistent readings (25.0-25.1°C), showing high precision/repeatability. However, it's consistently reading 2°C low (true value is 27°C), making it inaccurate. This could be corrected through calibration.

10. **b) Invest in quality sensors ($100-300 range) as insurance against livestock loss** - With $2,000 at risk, a $100-300 sensor that prevents ONE failure event pays for itself many times over. Cheap sensors ($10-20) often have poor accuracy, short lifespan, and higher failure rates, creating false economy for valuable livestock.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 2 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 2 Quiz*
