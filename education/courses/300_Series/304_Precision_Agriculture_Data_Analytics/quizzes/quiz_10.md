# Quiz 10: Real-Time Decision Support

## Course 304: Precision Agriculture & Data Analytics

**Module:** 10 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
When designing an alert system, what are the three essential severity levels you should implement?

A) Low, Medium, High
B) Info, Warning, Critical
C) Green, Yellow, Red
D) Minor, Major, Catastrophic

**Correct Answer:** B

**Explanation:**
- **Info:** Notifications for monitoring, no immediate action required
- **Warning:** Prompt attention needed within hours
- **Critical:** Immediate action required within minutes (life-safety)
This three-tier system balances responsiveness with alert fatigue prevention.

---

### Question 2
A PID controller for water temperature has parameters Kp=5.0, Ki=0.1, Kd=1.0. The setpoint is 24°C and current temperature is 22°C. What does the "P" term (proportional) output?

A) 2.0 (proportional to error)
B) 10.0 (Kp × error)
C) 0.2 (error ÷ Kp)
D) 5.0 (just Kp)

**Correct Answer:** B

**Explanation:**
- Error = Setpoint - Current = 24 - 22 = 2°C
- P term = Kp × Error = 5.0 × 2 = 10.0
- This output would be used to control heater power (clamped to 0-100%)
- Larger errors produce proportionally larger responses

---

### Question 3
In a human-in-the-loop system, which actions should typically require operator approval rather than full automation?

A) Adjusting fan speed by 10%
B) Adding 500ml of concentrated acid to adjust pH
C) Dimming lights at end of photoperiod
D) Logging sensor data to database

**Correct Answer:** B

**Explanation:**
- High-risk actions (chemical dosing, major equipment changes) should require approval
- Low-risk routine adjustments (fans, lights) can be automated
- Chemical additions are irreversible and potentially dangerous if incorrect
- Human oversight prevents catastrophic errors from automation bugs

---

**End of Quiz 10**
