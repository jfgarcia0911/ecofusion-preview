# Module 8 Quiz: Pump & Valve Automation
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is the primary difference between normally open (NO) and normally closed (NC) solenoid valves?**
   - a) NO valves are cheaper than NC valves
   - b) NC valves are closed when de-energized, NO valves are open when de-energized
   - c) NO valves handle higher pressure than NC valves
   - d) NC valves require AC power, NO valves require DC power

**2. Why is anti-short-cycle protection important for pumps?**
   - a) It saves water by reducing flow rates
   - b) It prevents pump overheating and extends equipment life by limiting start/stop frequency
   - c) It reduces electricity costs by keeping pumps off longer
   - d) It is required by electrical code for all pumps

**3. What is the purpose of using two float switches (high and low) instead of one?**
   - a) Provides redundancy in case one fails
   - b) Creates hysteresis to prevent rapid on/off cycling
   - c) Allows for faster fill times
   - d) Reduces installation costs

**4. Which level sensor type is best for continuous level measurement without contact with the water?**
   - a) Mechanical float switch
   - b) Optical sensor
   - c) Ultrasonic level sensor
   - d) Pressure/submersible sensor

**5. Why are peristaltic pumps preferred for automated nutrient dosing?**
   - a) They are the cheapest dosing pump option
   - b) The pump mechanism doesn't contact the liquid, providing accurate and repeatable dosing
   - c) They can handle higher flow rates than other pump types
   - d) They never need calibration

**6. What is a critical safety interlock for automated pH dosing systems?**
   - a) Maximum dose limit per time period to prevent over-dosing
   - b) Automatic backup power supply
   - c) Temperature compensation
   - d) Flow rate monitoring

**7. For a freshwater makeup system, which valve configuration is fail-safe?**
   - a) Normally open valve (prevents flooding if power fails)
   - b) Normally closed valve (prevents flooding if power fails)
   - c) Either type works equally well
   - d) Manual valve only (automated valves aren't safe)

**8. According to the cube law for VFD energy savings, if a pump runs at 50% speed, approximately what percentage of maximum power does it consume?**
   - a) 50%
   - b) 25%
   - c) 12%
   - d) 5%

**9. What is the recommended minimum off-time for a medium-sized pump (1-3 HP) to prevent short-cycling?**
   - a) 30 seconds
   - b) 2-3 minutes
   - c) 5 minutes
   - d) 10 minutes

**10. How can you automatically detect pump failure?**
   - a) Install a flow switch to verify flow when pump is running
   - b) Monitor pump electrical current for over/under current conditions
   - c) Use a timer to track run hours
   - d) Both A and B

---

## Answer Key

1. **b) NC valves are closed when de-energized, NO valves are open when de-energized** - Normally closed valves close when power is lost (fail-safe for water control), while normally open valves open when power is lost. Most CEA applications use NC valves to prevent flooding.

2. **b) It prevents pump overheating and extends equipment life by limiting start/stop frequency** - Pumps shouldn't start/stop more than 6-10 times per hour. Excessive cycling causes motor overheating, reduced lifespan, and high electrical demand from inrush current.

3. **b) Creates hysteresis to prevent rapid on/off cycling** - The low float opens the valve when tripped, the high float closes it. This prevents the system from rapidly cycling on and off if the level bounces around a single setpoint.

4. **c) Ultrasonic level sensor** - Ultrasonic sensors emit pulses and measure echo return time to calculate distance to water surface without touching the water. They provide continuous readings rather than just on/off signals.

5. **b) The pump mechanism doesn't contact the liquid, providing accurate and repeatable dosing** - Peristaltic pumps use tubing that contains the liquid while rollers compress it externally. This makes them accurate, self-priming, and easy to calibrate.

6. **a) Maximum dose limit per time period to prevent over-dosing** - Safety interlocks should include maximum doses per hour, sensor validation (reject impossible readings), and dose verification (confirm pH moved in expected direction).

7. **b) Normally closed valve (prevents flooding if power fails)** - For makeup water, always choose NC valves. If power is lost, the valve closes automatically, preventing continuous flow and flooding. This is the fail-safe configuration.

8. **c) 12%** - According to the cube law, power consumption is proportional to speed cubed. At 50% speed: 0.5³ = 0.125 or 12.5% of maximum power. This represents significant energy savings.

9. **c) 5 minutes** - Small pumps (<1HP) need 2-3 minutes, medium pumps (1-3HP) need 5 minutes, and large pumps (>3HP) need 10 minutes minimum off-time between starts.

10. **d) Both A and B** - Flow switches detect when a pump is running but not producing flow (failure, clog, or airlock). Current sensors detect abnormal electrical draw indicating motor failure, dry running, or short circuits. Using both provides comprehensive monitoring.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 8 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 8 Quiz*
