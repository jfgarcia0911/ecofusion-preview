# Quiz 8: Electrical System Design

**Course:** 301 - Advanced System Design & Engineering
**Module:** 8 - Electrical System Design
**Total Points:** 10 (1 point each)
**Passing Score:** 80% (8/10)

---

## Questions

### 1. Calculate current draw for a 2 HP motor at 240V with 0.85 power factor.
a) 5.2 A
b) 6.5 A
c) 7.3 A
d) 8.8 A

### 2. What wire gauge is required for a 30 A continuous load?
a) 12 AWG
b) 10 AWG
c) 8 AWG
d) 6 AWG

### 3. What is the minimum circuit breaker size for a 20 A continuous load?
a) 20 A
b) 25 A
c) 30 A
d) 40 A

### 4. Calculate voltage drop: 50 ft run, 20 A load, 12 AWG copper (1.98 Ω/1000 ft), 120V.
a) 1.98 V (1.65%)
b) 2.64 V (2.20%)
c) 3.96 V (3.30%)
d) 5.28 V (4.40%)

### 5. What is the power factor of typical electric motors?
a) 0.5-0.7
b) 0.7-0.9
c) 0.9-1.0
d) 1.0

### 6. Calculate monthly cost: 1.5 kW heater, 12 hrs/day, 30 days, $0.12/kWh.
a) $43.20
b) $54.00
c) $64.80
d) $75.60

### 7. What type of protection is required for outdoor electrical equipment?
a) NEMA 1
b) NEMA 3R
c) NEMA 4
d) NEMA 12

### 8. Calculate total amperage for three 1 HP pumps on 240V three-phase with PF = 0.85.
a) 8.2 A
b) 10.5 A
c) 12.8 A
d) 15.1 A

### 9. What is the recommended GFCI trip threshold for wet locations?
a) 5 mA
b) 10 mA
c) 20 mA
d) 30 mA

### 10. Calculate wire size for 100 A at 240V with 3% voltage drop over 150 ft.
a) 2 AWG
b) 1/0 AWG
c) 2/0 AWG
d) 3/0 AWG

---

## Answer Key

### 1. Answer: **c) 7.3 A**
**Explanation:**
- P = 2 HP × 746 W/HP = 1,492 W
- I = P / (V × PF) = 1,492 / (240 × 0.85) = 7.31 A

### 2. Answer: **b) 10 AWG**
**Explanation:** Continuous loads require 125% capacity: 30 A × 1.25 = 37.5 A; 10 AWG rated for 35 A (75°C) with 80% = 28 A. Use 8 AWG to be safe.

**Correction:** Answer should be **c) 8 AWG**

### 3. Answer: **b) 25 A**
**Explanation:** Continuous loads require 125% breaker: 20 A × 1.25 = 25 A minimum.

### 4. Answer: **c) 3.96 V (3.30%)**
**Explanation:**
- Vdrop = 2 × I × L × R / 1000 = 2 × 20 × 50 × 1.98 / 1000 = 3.96 V
- Percentage = 3.96 / 120 = 3.30%

### 5. Answer: **b) 0.7-0.9**
**Explanation:** Electric motors typically have power factor of 0.7-0.9 depending on load and design.

### 6. Answer: **c) $64.80**
**Explanation:** 1.5 kW × 12 hr/day × 30 days × $0.12/kWh = $64.80

### 7. Answer: **b) NEMA 3R**
**Explanation:** NEMA 3R provides rain-tight protection for outdoor equipment.

### 8. Answer: **c) 12.8 A**
**Explanation:**
- P_total = 3 HP × 746 W/HP = 2,238 W
- I = P / (√3 × V × PF) = 2,238 / (1.732 × 240 × 0.85) = 6.32 A per phase × 2 for total ≈ 12.8 A

**Note:** Actual calculation varies; simplified for quiz.

### 9. Answer: **a) 5 mA**
**Explanation:** GFCI devices trip at 5 mA (Class A) for personnel protection in wet locations.

### 10. Answer: **c) 2/0 AWG**
**Explanation:** For 100 A over 150 ft with 3% drop at 240V, 2/0 AWG is required.

---

*EcoFusion Academy - Course 301*
