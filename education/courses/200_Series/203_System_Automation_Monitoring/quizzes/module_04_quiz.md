# Module 4 Quiz: Environmental Sensors
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. Why can't you use a lux meter to accurately measure light for plant growth?**
   - a) Lux meters are too expensive for most growers
   - b) Lux is weighted for human eye sensitivity (green peak), not photosynthetically active radiation
   - c) Lux meters only work with LED lights, not sunlight
   - d) Lux and PAR are the same measurement

**2. What does PPFD stand for and what are its units?**
   - a) Photosynthetic Plant Frequency Distribution, measured in hertz (Hz)
   - b) Photosynthetic Photon Flux Density, measured in µmol/m²/s
   - c) Plant Photon Frequency Differential, measured in watts
   - d) Photo-Period Flux Density, measured in lux

**3. What is the optimal CO₂ concentration for enrichment in a sealed greenhouse?**
   - a) 420 ppm (atmospheric level)
   - b) 800-1200 ppm
   - c) 2000-3000 ppm
   - d) 5000 ppm (OSHA limit)

**4. How does an NDIR (Non-Dispersive Infrared) CO₂ sensor work?**
   - a) It measures the weight of CO₂ molecules in the air
   - b) CO₂ molecules absorb specific infrared wavelengths; more CO₂ means more absorption
   - c) It uses a chemical reaction that changes color based on CO₂ levels
   - d) It counts individual CO₂ molecules passing through a chamber

**5. Where should a temperature/humidity sensor be placed in a greenhouse?**
   - a) At the highest point near the roof where hot air collects
   - b) At ground level where plants are rooted
   - c) At canopy level in an aspirated radiation shield, away from direct sunlight
   - d) Directly next to heating or cooling vents for fastest response

**6. What is Daily Light Integral (DLI) and how is it calculated?**
   - a) The total amount of PAR received per day; calculated as PPFD × photoperiod hours × 3.6
   - b) The maximum light intensity in a 24-hour period
   - c) The difference between day and night light levels
   - d) The average lux reading over 24 hours

**7. What is the target air velocity for good plant growth in a greenhouse?**
   - a) 0 m/s (still air is best)
   - b) 0.2-1.0 m/s (gentle to moderate circulation)
   - c) 2-5 m/s (strong wind for stem strengthening)
   - d) Air velocity doesn't matter for plant growth

**8. What type of soil moisture sensor is best for hydroponic applications?**
   - a) Resistive sensors (gypsum blocks)
   - b) Tensiometers
   - c) Capacitive sensors
   - d) Time Domain Reflectometry (TDR) only

**9. Why must CO₂ sensors be calibrated in fresh outdoor air?**
   - a) Outdoor air has a known CO₂ concentration of approximately 420 ppm
   - b) Indoor air is too contaminated for calibration
   - c) CO₂ sensors only work outdoors
   - d) Outdoor air has 0 ppm CO₂

**10. If tomatoes need a DLI of 25 mol/m²/day and you're providing supplemental lighting for 16 hours, what PPFD do you need?**
   - a) Approximately 100 µmol/m²/s
   - b) Approximately 250 µmol/m²/s
   - c) Approximately 435 µmol/m²/s
   - d) Approximately 1000 µmol/m²/s

---

## Answer Key

1. **b) Lux is weighted for human eye sensitivity (green peak), not photosynthetically active radiation** - Lux meters measure light as humans see it, emphasizing green wavelengths around 550nm. Plants use blue (400-500nm) and red (600-700nm) wavelengths most efficiently. PAR sensors measure photosynthetically active radiation (400-700nm) which is what actually drives photosynthesis.

2. **b) Photosynthetic Photon Flux Density, measured in µmol/m²/s** - PPFD measures the number of photons in the PAR range (400-700nm) hitting a surface per second. Units are micromoles per square meter per second. This is the most useful metric for growers to determine if plants are receiving adequate light.

3. **b) 800-1200 ppm** - Optimal CO₂ enrichment for most crops is 800-1200 ppm, which can increase yields by 20-40% when combined with adequate light. Atmospheric CO₂ is ~420 ppm. Going above 1500 ppm provides minimal additional benefit and approaches human safety limits (5000 ppm OSHA limit).

4. **b) CO₂ molecules absorb specific infrared wavelengths; more CO₂ means more absorption** - NDIR sensors pass infrared light through an air sample. CO₂ molecules absorb specific IR wavelengths. The detector measures how much light is absorbed - more absorption means higher CO₂ concentration. This method is accurate (±50 ppm), specific to CO₂, and long-term stable.

5. **c) At canopy level in an aspirated radiation shield, away from direct sunlight** - Sensors should be at plant height where the microclimate matters most. An aspirated shield with a small fan prevents solar heating of the sensor (which can cause readings 10-20°F too high). Avoid placement near heat sources, vents, or walls that create non-representative conditions.

6. **a) The total amount of PAR received per day; calculated as PPFD × photoperiod hours × 3.6** - DLI measures accumulated photons over a full day in mol/m²/day. The formula accounts for PPFD (instant measurement) multiplied by hours and conversion factors. Example: 400 µmol/m²/s for 16 hours = 400 × 16 × 3.6 = 23 mol/m²/day.

7. **b) 0.2-1.0 m/s (gentle to moderate circulation)** - Gentle air movement (40-200 feet per minute) strengthens stems, improves transpiration and gas exchange, distributes temperature/humidity evenly, and prevents disease. Too little air (stagnant) promotes fungal growth. Too much air (>2 m/s) causes excessive transpiration and can physically damage plants.

8. **c) Capacitive sensors** - Capacitive sensors measure the dielectric constant of the growing media without direct contact, making them resistant to corrosion and suitable for various substrates. They work well in soilless media like rockwool, coco coir, and peat. Resistive sensors corrode over time. Tensiometers are better for field soil. TDR is accurate but expensive.

9. **a) Outdoor air has a known CO₂ concentration of approximately 420 ppm** - Fresh outdoor air (away from buildings and traffic) has a relatively stable CO₂ level around 420 ppm globally. This provides a free, reliable calibration reference point. Many NDIR sensors include Automatic Baseline Correction (ABC) that self-calibrates by assuming the sensor sees outdoor air periodically.

10. **c) Approximately 435 µmol/m²/s** - Using the formula DLI = PPFD × hours × 3.6, rearrange to PPFD = DLI ÷ (hours × 3.6). So: 25 ÷ (16 × 3.6) = 25 ÷ 57.6 = 0.434 mol/m²/s = 434 µmol/m²/s. This assumes the 16 hours provides all the light; if there's natural light, you'd subtract that DLI first.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 4 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 4 Quiz*
