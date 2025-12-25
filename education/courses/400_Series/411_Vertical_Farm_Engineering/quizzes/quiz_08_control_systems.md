# Quiz 8: Environmental Control System Integration

**Course:** 411 - Vertical Farm Engineering
**Module:** 8 - Environmental Control System Integration
**Questions:** 10
**Passing Score:** 80% (8/10 correct)
**Time Limit:** 20 minutes

---

## Questions

### Question 1
What are the three components of a PID (Proportional-Integral-Derivative) controller?

A) Power, Integration, Direction
B) Proportional band, Integral time, Derivative time
C) Pressure, Input, Discharge
D) Primary, Independent, Dependent

**Correct Answer:** B

**Explanation:** PID controllers use Proportional band (immediate response to error), Integral time (eliminates steady-state error), and Derivative time (anticipates future error) to optimize control.

---

### Question 2
What is the recommended sensor placement strategy for measuring growing zone temperature?

A) Single sensor at facility entrance
B) One sensor per growing level at plant canopy height, shielded from direct light
C) Sensors only in return air ducts
D) Wall-mounted sensors near HVAC units

**Correct Answer:** B

**Explanation:** Sensors should be at canopy height (where plants experience conditions), shielded from direct LED heat/light, with one sensor per zone for representative measurement.

---

### Question 3
Which communication protocol is most commonly used for industrial agricultural control systems due to reliability and standardization?

A) WiFi (802.11)
B) Bluetooth
C) Modbus TCP/IP or BACnet
D) Proprietary wireless

**Correct Answer:** C

**Explanation:** Modbus TCP/IP and BACnet are industrial standards offering reliability, vendor interoperability, and proven performance in agricultural automation systems.

---

### Question 4
What sensor accuracy is typically required for CO₂ measurement in vertical farms?

A) ±10 ppm
B) ±50 ppm
C) ±100 ppm
D) ±500 ppm

**Correct Answer:** B

**Explanation:** ±50 ppm accuracy allows precise CO₂ control around typical setpoints (800-1200 ppm) for photosynthesis enhancement without excessive sensor cost.

---

### Question 5
For a temperature control system, if the PID proportional band is too narrow, what is the likely result?

A) Slow response and large steady-state error
B) Stable control with minimal oscillation
C) Oscillation and hunting around setpoint
D) No response to disturbances

**Correct Answer:** C

**Explanation:** Too narrow a proportional band causes excessive corrective action, leading to oscillation (hunting) around the setpoint as the system overcorrects.

---

### Question 6
What is the typical data logging interval for environmental sensors in vertical farms?

A) 1-5 minutes
B) 15-30 minutes
C) 1-2 hours
D) Once per day

**Correct Answer:** A

**Explanation:** 1-5 minute intervals capture meaningful environmental variations for analytics and troubleshooting without creating excessive data storage requirements (daily = too sparse, seconds = too much data).

---

### Question 7
What alarm priority level should be assigned to complete HVAC system failure in a fully-sealed facility?

A) Low priority (notification only)
B) Medium priority (investigation within hours)
C) High priority (immediate investigation)
D) Critical priority (immediate action required)

**Correct Answer:** D

**Explanation:** HVAC failure in sealed facilities can cause crop loss within hours due to heat buildup and humidity, requiring immediate emergency response.

---

### Question 8
Calculate the data storage requirement for 100 sensors logging every 2 minutes with 8 bytes per reading over 1 year:

A) 21 MB
B) 210 MB
C) 2.1 GB
D) 21 GB

**Correct Answer:** C

**Explanation:** Readings per sensor per year: 525,600 min/year ÷ 2 min = 262,800 readings. Total data: 100 sensors × 262,800 readings × 8 bytes = 210,240,000 bytes ≈ 210 MB. With overhead and metadata ≈ 2.1 GB is more realistic.

---

### Question 9
What is the purpose of a sensor "dead band" in control systems?

A) Disable sensors during maintenance
B) Prevent excessive cycling by ignoring small variations near setpoint
C) Backup sensors for redundancy
D) Filter noise from power lines

**Correct Answer:** B

**Explanation:** Dead bands (e.g., ±0.5°C around setpoint) prevent equipment from cycling on/off constantly due to minor fluctuations, extending equipment life and saving energy.

---

### Question 10
For multi-zone facilities, what control architecture provides the best balance of local control and centralized monitoring?

A) Fully centralized with single controller
B) Fully distributed with no central oversight
C) Hierarchical system with zone controllers reporting to central SCADA/BMS
D) Manual control only

**Correct Answer:** C

**Explanation:** Hierarchical architecture allows zone controllers to operate independently (reliability) while providing centralized monitoring, data collection, and coordination through SCADA/BMS systems.

---

## Answer Key

1. B
2. B
3. C
4. B
5. C
6. A
7. D
8. C
9. B
10. C

**Scoring:**
- 10/10: Excellent - 100%
- 9/10: Very Good - 90%
- 8/10: Good - 80% (Passing)
- 7/10 or below: Review material and retake
