# Quiz 11: Safety System Design

**Course:** 301 - Advanced System Design & Engineering
**Module:** 11 - Safety System Design
**Total Points:** 10 (1 point each)
**Passing Score:** 80% (8/10)

---

## Questions

### 1. What is the minimum DO level before triggering an emergency alarm?
a) 3 mg/L
b) 4 mg/L
c) 5 mg/L
d) 6 mg/L

### 2. What battery backup duration is required for critical life support?
a) 2-4 hours
b) 8-12 hours
c) 24-48 hours
d) 72-96 hours

### 3. What water level drop should trigger a leak alarm?
a) 1 inch
b) 2 inches
c) 4 inches
d) 6 inches

### 4. What is the recommended alarm escalation sequence?
a) Visual only
b) Visual + Audible
c) Visual + Audible + SMS/Email
d) All levels simultaneously

### 5. Calculate overflow pipe size for a 150 GPM system (safety factor 2×).
a) 2 inches
b) 3 inches
c) 4 inches
d) 6 inches

### 6. What ground fault protection level is required in wet areas?
a) 5 mA
b) 10 mA
c) 20 mA
d) 30 mA

### 7. What is the maximum allowable temperature deviation before alarm?
a) ±1°F
b) ±3°F
c) ±5°F
d) ±10°F

### 8. How often should emergency systems be tested?
a) Daily
b) Weekly
c) Monthly
d) Quarterly

### 9. What redundancy level is required for critical pumps?
a) N (no backup)
b) N+1 (one backup)
c) 2N (full duplicate)
d) N+2 (two backups)

### 10. What pH deviation should trigger an automated alert?
a) ±0.2
b) ±0.5
c) ±1.0
d) ±1.5

---

## Answer Key

### 1. Answer: **b) 4 mg/L**
**Explanation:** Emergency DO alarms should trigger at 4 mg/L to allow intervention before fish stress (<3 mg/L).

### 2. Answer: **b) 8-12 hours**
**Explanation:** Critical life support (aeration) should have 8-12 hour battery backup minimum.

### 3. Answer: **b) 2 inches**
**Explanation:** 2 inch water level drop in typical tanks indicates significant leak requiring investigation.

### 4. Answer: **c) Visual + Audible + SMS/Email**
**Explanation:** Three-tier alarm system ensures notification even when not on-site.

### 5. Answer: **c) 4 inches**
**Explanation:** 150 GPM × 2 safety factor = 300 GPM capacity; 4" gravity drain provides ~250+ GPM at slope.

### 6. Answer: **a) 5 mA**
**Explanation:** Class A GFCI protection (5 mA trip) required for wet locations and personnel safety.

### 7. Answer: **c) ±5°F**
**Explanation:** ±5°F temperature deviation warrants investigation; ±10°F is critical.

### 8. Answer: **c) Monthly**
**Explanation:** Emergency backup systems should be tested monthly to ensure functionality.

### 9. Answer: **b) N+1 (one backup)**
**Explanation:** N+1 redundancy (primary + one backup) is standard for critical water circulation pumps.

### 10. Answer: **b) ±0.5**
**Explanation:** pH deviation of ±0.5 units from setpoint should trigger investigation alert.

---

*EcoFusion Academy - Course 301*
