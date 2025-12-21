# Module 13 Quiz: Troubleshooting Automation Systems
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What are the six steps of the systematic troubleshooting approach?**
   - a) Observe, guess, fix, test, document, repeat
   - b) Observe/define problem, gather information, develop hypotheses, test hypotheses, implement solution, verify/monitor
   - c) Check power, check sensors, check wiring, replace parts, test, finish
   - d) Call tech support, wait, fix, test, invoice, close ticket

**2. A temperature sensor reads 150°F but the water feels normal. What is the MOST likely cause?**
   - a) The water really is 150°F
   - b) Sensor failure (open circuit or internal damage)
   - c) Controller calibration is wrong
   - d) Ambient temperature interference

**3. What does a pH sensor reading that is "frozen" at one value indicate?**
   - a) The sensor is perfectly calibrated
   - b) The pH is extremely stable
   - c) The sensor has likely failed or has a stuck internal component
   - d) The controller is working perfectly

**4. How do you test whether a sensor or controller is at fault?**
   - a) Replace both simultaneously
   - b) Substitute a known-good sensor; if reading becomes correct, original sensor was bad
   - c) Ignore the problem and hope it resolves
   - d) Recalibrate without testing

**5. What is a sign of pH sensor degradation?**
   - a) Instant response to pH changes
   - b) Drift >0.20 pH units when tested in buffer solution, or slow response time (>5 minutes to stabilize)
   - c) Perfect agreement with buffer solutions
   - d) Lower cost than when purchased

**6. How can you diagnose voltage drop in long cable runs?**
   - a) Measure voltage at the source only
   - b) Measure voltage at the sensor location and compare to specifications
   - c) Use a thermometer
   - d) Check the cable color

**7. What essential diagnostic tool measures voltage, current, resistance, and continuity?**
   - a) Oscilloscope
   - b) Network analyzer
   - c) Multimeter
   - d) pH meter

**8. What should be included in a troubleshooting log entry?**
   - a) Only the date and who fixed it
   - b) Problem description, symptoms, diagnosis process, solution implemented, verification, and prevention steps
   - c) Just the final solution
   - d) Only failed component part numbers

**9. If a system randomly resets and you measure voltage drops when relays activate, what is the likely cause?**
   - a) Software bug
   - b) Sensor failure
   - c) Insufficient power supply capacity (current draw exceeds supply rating)
   - d) Network interference

**10. What is the purpose of maintaining "as-built" diagrams?**
   - a) To satisfy building codes
   - b) To provide accurate documentation of actual wiring, sensor locations, and configurations for troubleshooting and maintenance
   - c) To impress customers
   - d) They serve no real purpose

---

## Answer Key

1. **b) Observe/define problem, gather information, develop hypotheses, test hypotheses, implement solution, verify/monitor** - The systematic scientific approach ensures methodical troubleshooting: clearly define the problem, collect data, develop possible causes, test them systematically, fix the root cause, and verify the solution works.

2. **b) Sensor failure (open circuit or internal damage)** - A reading of 150°F when water feels normal, especially if it's a suspiciously round number, indicates sensor failure. The water would feel scalding hot if actually 150°F. Testing with a multimeter would likely show open circuit.

3. **c) The sensor has likely failed or has a stuck internal component** - A frozen reading that doesn't respond to actual changes (e.g., adding acid doesn't change the value) indicates sensor failure. Removing the sensor should show an error - if it doesn't, the sensor is definitely failed.

4. **b) Substitute a known-good sensor; if reading becomes correct, original sensor was bad** - Substitution testing isolates the problem. If a known-good sensor works properly in the same location with the same wiring/controller, the original sensor was faulty. If the problem persists, the controller or wiring is at fault.

5. **b) Drift >0.20 pH units when tested in buffer solution, or slow response time (>5 minutes to stabilize)** - Normal drift <0.10 requires recalibration; 0.10-0.20 requires close monitoring; >0.20 requires sensor replacement. Slow response (>5 min) indicates glass membrane dried out, reference junction clogged, or aging sensor.

6. **b) Measure voltage at the sensor location and compare to specifications** - Voltage drop occurs over long cable runs due to wire resistance. If a sensor needs 5V but only receives 4.2V at its location, it may malfunction. Measuring at the source doesn't reveal drop along the cable.

7. **c) Multimeter** - A multimeter is essential for automation troubleshooting. It measures DC/AC voltage (verify power supply), current (check 4-20mA signals), resistance (test sensor values), and continuity (verify cable connections). Cost: $20-100.

8. **b) Problem description, symptoms, diagnosis process, solution implemented, verification, and prevention steps** - Complete documentation helps with future similar problems, tracks equipment failure patterns, supports warranty claims, and trains new staff. Include what was wrong, how you figured it out, what you did, and how to prevent recurrence.

9. **c) Insufficient power supply capacity (current draw exceeds supply rating)** - If a 5V 2A supply powers devices drawing 2.2A total, voltage drops under load causing resets. Solution: upgrade to higher capacity supply (e.g., 5V 3A) or use separate supplies for high-current devices like relays.

10. **b) To provide accurate documentation of actual wiring, sensor locations, and configurations for troubleshooting and maintenance** - As-built diagrams show the system as actually installed (not just as designed). They're invaluable for troubleshooting, training new operators, and future modifications. Include wiring, sensor locations, network topology, and plumbing.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 13 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 13 Quiz*
