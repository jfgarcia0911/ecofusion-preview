# Quiz 10: Automation Architecture

**Course:** 301 - Advanced System Design & Engineering
**Module:** 10 - Automation Architecture
**Total Points:** 10 (1 point each)
**Passing Score:** 80% (8/10)

---

## Questions

### 1. What protocol is commonly used for agricultural automation?
a) HTTP
b) Modbus
c) FTP
d) SMTP

### 2. What is the recommended sensor calibration frequency for pH probes?
a) Daily
b) Weekly
c) Monthly
d) Quarterly

### 3. Calculate controller update rate for a 1000-gallon system with 100 GPM flow.
a) 1 second
b) 10 seconds
c) 30 seconds
d) 60 seconds

### 4. What is the accuracy range for quality DO sensors?
a) ±0.1 mg/L
b) ±0.3 mg/L
c) ±0.5 mg/L
d) ±1.0 mg/L

### 5. What voltage is standard for industrial control signals?
a) 0-5 VDC
b) 0-10 VDC
c) 4-20 mA
d) All of the above

### 6. What is the IP rating required for sensors in wet locations?
a) IP44
b) IP55
c) IP67
d) IP68

### 7. Calculate data storage for 10 sensors logging every 60 seconds for 1 year (8 bytes/reading).
a) 4.2 MB
b) 42 MB
c) 420 MB
d) 4.2 GB

### 8. What backup power runtime is recommended for critical monitoring?
a) 1-2 hours
b) 4-8 hours
c) 12-24 hours
d) 48-72 hours

### 9. What is the typical response time for solenoid valves?
a) <1 second
b) 1-5 seconds
c) 5-10 seconds
d) 10-30 seconds

### 10. What communication range is achievable with LoRaWAN?
a) 100 m
b) 500 m
c) 2 km
d) 10 km

---

## Answer Key

### 1. Answer: **b) Modbus**
**Explanation:** Modbus is widely used in agricultural automation for sensor and actuator communication.

### 2. Answer: **b) Weekly**
**Explanation:** pH probes should be calibrated weekly in active aquaponic systems for accuracy.

### 3. Answer: **c) 30 seconds**
**Explanation:** System turnover = 1000 gal ÷ 100 GPM = 10 min; update rate = turnover/20 ≈ 30 sec.

### 4. Answer: **b) ±0.3 mg/L**
**Explanation:** Quality optical DO sensors typically have ±0.3 mg/L accuracy.

### 5. Answer: **d) All of the above**
**Explanation:** 0-5V, 0-10V, and 4-20 mA are all standard industrial control signals.

### 6. Answer: **c) IP67**
**Explanation:** IP67 rating (dust-tight, submersion to 1m) is recommended for wet agricultural environments.

### 7. Answer: **b) 42 MB**
**Explanation:**
- Readings/year = 10 sensors × 525,600 min/year = 5,256,000 readings
- Storage = 5,256,000 × 8 bytes = 42,048,000 bytes ≈ 42 MB

### 8. Answer: **b) 4-8 hours**
**Explanation:** Minimum 4-8 hour UPS runtime allows time for response to power failures.

### 9. Answer: **a) <1 second**
**Explanation:** Solenoid valves typically open/close in <1 second.

### 10. Answer: **d) 10 km**
**Explanation:** LoRaWAN can achieve 10+ km range in rural areas, 2-5 km in urban environments.

---

*EcoFusion Academy - Course 301*
