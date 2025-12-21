# Module 9 Quiz: Climate Control Automation
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is staged heating/cooling control?**
   - a) Using multiple thermostats in different zones
   - b) Gradually increasing control effort (vents, then fans low, then fans high) based on temperature deviation
   - c) Heating and cooling at different times of day
   - d) Using backup systems only when primary fails

**2. When is evaporative (pad-and-fan) cooling most effective?**
   - a) In high humidity climates (>80% RH)
   - b) In low humidity climates (<80% RH)
   - c) Only at night when temperatures are cooler
   - d) It works equally well in all conditions

**3. What is DLI (Daily Light Integral)?**
   - a) The total amount of photosynthetically active light received per day (mol/m²/day)
   - b) The maximum light intensity at noon
   - c) The number of hours lights are on per day
   - d) The electrical cost of running grow lights daily

**4. Which lighting control strategy provides the best energy efficiency?**
   - a) Simple timer control (fixed on/off schedule)
   - b) Light-level based control (on when PAR below target)
   - c) DLI-based control (tracks cumulative light and adjusts intensity throughout day)
   - d) Manual control based on visual observation

**5. What should happen when a rain sensor detects moisture?**
   - a) Continue normal ventilation
   - b) Close all vents immediately and switch to recirculation fans
   - c) Increase ventilation to dry the greenhouse
   - d) Sound an alarm only

**6. What is the primary purpose of energy curtains in greenhouses?**
   - a) Provide shade during hot summer days
   - b) Reduce heat loss at night, trapping warmth near plants
   - c) Block light for photoperiod control
   - d) Protect plants from wind damage

**7. How much energy savings can energy curtains typically provide?**
   - a) 5-10% reduction in heating costs
   - b) 15-20% reduction in heating costs
   - c) 30-60% reduction in heating costs
   - d) 80-90% reduction in heating costs

**8. In a multi-zone greenhouse with different temperature requirements, how should cooling be controlled?**
   - a) Average all zone temperatures and cool based on that
   - b) Cool based on the coldest zone's needs
   - c) Cool based on the hottest zone relative to its target
   - d) Set all zones to the same temperature

**9. What is VPD (Vapor Pressure Deficit) used for?**
   - a) Measuring light intensity
   - b) Calculating water pressure in irrigation lines
   - c) Guiding climate control decisions based on temperature and humidity relationship
   - d) Determining CO₂ levels

**10. Which dimming method is standard in commercial horticultural lighting?**
   - a) PWM (Pulse Width Modulation)
   - b) 0-10V analog dimming
   - c) DALI (Digital Addressable Lighting Interface)
   - d) On/off switching only

---

## Answer Key

1. **b) Gradually increasing control effort (vents, then fans low, then fans high) based on temperature deviation** - Staging provides smooth temperature control by progressively activating cooling/heating as needed. For example: 75°F opens vents 25%, 80°F runs fan at 50%, 85°F runs fan at 100%.

2. **b) In low humidity climates (<80% RH)** - Evaporative cooling works by evaporating water into the air stream, which cools it. This only works effectively when humidity is low enough to allow evaporation. In high humidity, the air is already saturated and little evaporation occurs.

3. **a) The total amount of photosynthetically active light received per day (mol/m²/day)** - DLI represents the cumulative photosynthetic photon flux over a 24-hour period. For example, lettuce typically needs 12-17 mol/m²/day for optimal growth.

4. **c) DLI-based control (tracks cumulative light and adjusts intensity throughout day)** - DLI-based control tracks total light received and adjusts supplemental lighting intensity to meet the target while minimizing energy use. It uses lights only when needed and dims them on sunny days.

5. **b) Close all vents immediately and switch to recirculation fans** - Rain sensors should trigger an immediate safety response to prevent water damage and protect the interior environment. This is a critical interlock for automated vent systems.

6. **b) Reduce heat loss at night, trapping warmth near plants** - Energy curtains (thermal blankets) close at night or when heating demand increases to reduce heat loss through the greenhouse glazing. They can reduce heating costs by 30-60%.

7. **c) 30-60% reduction in heating costs** - Energy curtains are one of the highest ROI investments in greenhouse automation, typically providing 30-60% reduction in heating costs with a payback period of 1-3 years.

8. **c) Cool based on the hottest zone relative to its target** - The zone with the highest temperature deviation from its target should control the cooling system. This ensures all zones are satisfied without overcooling any zone.

9. **c) Guiding climate control decisions based on temperature and humidity relationship** - VPD indicates the driving force for plant transpiration. Ideal VPD is typically 0.8-1.2 kPa. Too high (>1.5) stresses plants; too low (<0.6) increases disease risk.

10. **b) 0-10V analog dimming** - 0-10V dimming is the standard in commercial lighting, providing smooth, continuous dimming control. 0V = off, 10V = full brightness. It's widely compatible with LED drivers and controllers.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 9 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 9 Quiz*
