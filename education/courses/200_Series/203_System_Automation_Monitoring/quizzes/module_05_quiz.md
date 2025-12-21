# Module 5 Quiz: Controllers & PLCs
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is the primary difference between on/off control and PID control?**
   - a) On/off is digital, PID is analog
   - b) On/off switches fully on or off; PID provides proportional control for smoother operation
   - c) PID is always more expensive
   - d) On/off requires a PLC; PID works with simple controllers

**2. What is hysteresis (deadband) in on/off control?**
   - a) The delay between sensor reading and control action
   - b) A type of sensor failure mode
   - c) The difference between on and off setpoints to prevent rapid cycling
   - d) The accuracy specification of the controller

**3. What do the three components of PID stand for?**
   - a) Proportional, Integral, Derivative
   - b) Power, Input, Display
   - c) Pressure, Intensity, Duration
   - d) Primary, Independent, Differential

**4. What is the difference between a digital input and an analog input?**
   - a) Digital is more accurate than analog
   - b) Digital has two states (on/off); analog has a continuous range of values
   - c) Digital is cheaper than analog
   - d) Digital requires calibration; analog does not

**5. In ladder logic, what does this symbol represent: ─┤/├─**
   - a) Normally open contact
   - b) Normally closed contact (inverted)
   - c) Output coil
   - d) Timer function

**6. What is a watchdog timer and why is it important?**
   - a) A timer that tracks system uptime for maintenance scheduling
   - b) A safety feature that detects controller failures by requiring periodic resets
   - c) A timer that controls feeding schedules
   - d) A backup battery monitor

**7. What does "fail-safe" design mean in automation?**
   - a) The system has redundant backup controllers
   - b) The system is designed so failures default to a safe state
   - c) The system has a warranty that covers all failures
   - d) The system never fails

**8. Why is a 4-20mA analog output preferred over 0-10V for long-distance signal transmission?**
   - a) Current loops are less susceptible to voltage drop and noise over long cables
   - b) 4-20mA is cheaper to implement
   - c) 4-20mA uses less power
   - d) 4-20mA works with more devices

**9. When sizing a controller, how much extra I/O capacity should you plan for future expansion?**
   - a) Exactly what you need now; you can always add another controller
   - b) 10% extra
   - c) 25-50% extra capacity
   - d) 200% extra (double what you need)

**10. For a commercial greenhouse operation with $50,000 in annual crop value, which controller type is most appropriate?**
   - a) DIY Arduino setup ($100-300)
   - b) Simple on/off thermostats ($50-100 each)
   - c) Mid-range commercial controller with support ($2,000-5,000)
   - d) Industrial PLC system ($10,000+)

---

## Answer Key

1. **b) On/off switches fully on or off; PID provides proportional control for smoother operation** - On/off control operates equipment at 100% or 0% (like a typical thermostat), causing temperature oscillation. PID control varies output (e.g., 30%, 60%, 85% power) based on current error, accumulated error, and rate of change, resulting in smooth, stable control without oscillation.

2. **c) The difference between on and off setpoints to prevent rapid cycling** - Hysteresis creates a "deadband" between turn-on and turn-off points. For example, a heater might turn ON at 74°F and OFF at 76°F (2°F deadband). Without hysteresis, the system would rapidly cycle on/off as temperature oscillates around the setpoint, wearing out equipment and wasting energy.

3. **a) Proportional, Integral, Derivative** - PID has three components: Proportional (responds to current error), Integral (corrects accumulated past error to eliminate steady-state offset), and Derivative (anticipates future error based on rate of change to dampen oscillations). Together they provide smooth, accurate control.

4. **b) Digital has two states (on/off); analog has a continuous range of values** - Digital inputs/outputs are binary: HIGH/LOW, ON/OFF, 1/0 (e.g., a switch or relay). Analog inputs/outputs have continuous ranges (e.g., 0-10V representing 0-100°C, or 4-20mA for 0-100% flow). Both types have important applications in control systems.

5. **b) Normally closed contact (inverted)** - The ─┤/├─ symbol represents a normally closed (N.C.) contact. It passes logic when the input is FALSE/OFF. The standard ─┤ ├─ (without the slash) is normally open and passes logic when TRUE/ON. These are fundamental building blocks in ladder logic programming.

6. **b) A safety feature that detects controller failures by requiring periodic resets** - A watchdog timer must be "petted" (reset) regularly by the running program. If the controller freezes or crashes, the watchdog isn't reset, causing the timer to expire and force the system into a safe mode. This prevents a hung controller from maintaining dangerous conditions.

7. **b) The system is designed so failures default to a safe state** - Fail-safe design ensures that when power is lost or components fail, the system defaults to a safe condition. Examples: normally-closed valve fails to safe position, heater relay fails OFF (can't overheat), emergency stop directly cuts power. This is critical for life-support systems.

8. **a) Current loops are less susceptible to voltage drop and noise over long cables** - Current (mA) signals maintain their value over long distances because current is constant throughout a series circuit, unlike voltage which drops over cable resistance. 4-20mA can work reliably over 300+ meters, while 0-10V signals degrade significantly beyond 10 meters. The 4mA baseline also allows detecting broken wires.

9. **c) 25-50% extra capacity** - Controllers should have room to grow. Planning for 25-50% expansion allows adding sensors, zones, or features without replacing the entire system. Sizing exactly to current needs forces expensive upgrades later. 200% is wasteful; 10% is usually too tight for evolving operations.

10. **c) Mid-range commercial controller with support ($2,000-5,000)** - For $50,000 annual revenue, a single crop failure could be $10,000-20,000 in losses. A commercial controller with warranty, technical support, and proven reliability is appropriate insurance. DIY systems ($100-300) are too risky for this value. Industrial PLCs ($10,000+) are overkill unless the operation is much larger or more complex.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 5 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 5 Quiz*
