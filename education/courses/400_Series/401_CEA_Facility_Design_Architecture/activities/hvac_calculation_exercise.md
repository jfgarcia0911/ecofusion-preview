# Activity: HVAC Load Calculation Exercise

## Objective
Practice detailed HVAC load calculations for a greenhouse facility using manual methods and industry standards.

## Exercise Overview

### Facility Description
**Gutter-Connected Greenhouse**
- Location: Boston, Massachusetts
- Dimensions: 30 ft wide × 96 ft long × 14 ft eave height × 20 ft peak
- Crop: Tomatoes (year-round production)
- Glazing: Double polycarbonate (16mm)

---

## Part 1: Heating Load Calculation (Winter Design Day)

### Given Information
- Outdoor design temp: -10°F (Boston 99.6% winter design)
- Indoor setpoint: 65°F night, 72°F day
- Design ΔT: 75°F (use conservative night setpoint)

### Tasks

**A. Calculate Surface Areas**
Show all geometry calculations for:
1. Gable roof area (both slopes)
2. End walls (including gable portion)
3. Side walls
4. Total glazing area

*Hint: Roof pitch can be calculated from width and peak height*

**B. Envelope Heat Loss**
Using U-value = 0.44 BTU/hr·ft²·°F for 16mm polycarbonate:
1. Calculate heat loss through each surface
2. Sum total envelope loss

**C. Infiltration Heat Loss**
Assumptions:
- Greenhouse air change rate: 0.5 ACH (tight greenhouse)
- Calculate building volume
- Determine CFM infiltration
- Use formula: Q = 1.08 × CFM × ΔT

**D. Ventilation Heat Loss**
Minimum fresh air: 0.1 CFM/sq ft floor area
Calculate sensible heat load

**E. Total Heating Load**
Sum all components and add 15% safety factor
Size boiler to next standard size

### Deliverable
Complete heating load calculation sheet with:
- All surface area calculations
- Heat loss by component
- Total design heating load
- Recommended boiler size (BTU/hr)

---

## Part 2: Cooling Load Calculation (Summer Design Day)

### Given Information
- Outdoor design temp: 93°F DB, 74°F WB (Boston 0.4% summer design)
- Indoor setpoint: 75°F, 70% RH max
- Design conditions: Partly cloudy (800 W/m² solar radiation peak)

### Tasks

**A. Solar Heat Gain**
1. Calculate glazing area by orientation (south roof, north roof, east/west ends)
2. Use SHGC = 0.65 for polycarbonate
3. Apply solar intensity by orientation:
   - South roof (noon, summer): 700 W/m²
   - North roof: 200 W/m²
   - East/West ends: 400 W/m² (average)
4. Convert W/m² to BTU/hr·ft² (multiply by 0.317)
5. Calculate total solar gain

**B. Conduction Heat Gain**
Using same U-value and areas from heating calculation:
Q = U × A × ΔT (where ΔT = 93°F - 75°F = 18°F)

**C. Internal Heat Gains**
1. LED supplemental lighting: 10 W/sq ft (floor area)
   - Convert to BTU/hr: W × 3.41
2. Workers: 10 people × 300 BTU/hr = 3,000 BTU/hr
3. Evapotranspiration: Assume heat absorbed by plants = 50% of solar gain

**D. Ventilation Load**
1. Calculate required ventilation rate for cooling: 8 CFM/sq ft (tomato greenhouse, summer)
2. Sensible cooling: 1.08 × CFM × ΔT
3. Latent cooling: 0.68 × CFM × ΔW
   - Outdoor: 93°F, 60% RH → W = 89 grains/lb
   - Indoor: 75°F, 70% RH → W = 81 grains/lb
   - ΔW = 8 grains/lb

**E. Total Cooling Load**
Sum all components
Determine:
- Total sensible cooling (BTU/hr)
- Total latent cooling (BTU/hr)
- Total cooling (tons) [12,000 BTU/hr = 1 ton]
- Sensible Heat Ratio (SHR)

### Deliverable
Complete cooling load calculation sheet with:
- Solar gains by surface
- Conduction gains
- Internal gains
- Ventilation loads (sensible + latent)
- Total cooling requirement in tons
- SHR calculation

---

## Part 3: Dehumidification Analysis

### Tasks

**A. Moisture Sources**
Calculate moisture generation:
1. Plant transpiration:
   - Tomato ET rate: 1.5 lbs water/sq ft/day (summer peak)
   - Convert to lbs/hr (assume 16 hour day)
   - Total: floor area × rate

2. Irrigation evaporation:
   - Assume 10% of irrigation water evaporates
   - Irrigation: 0.3 gal/sq ft/day
   - Evaporation: 0.3 × 0.1 × 8.34 lbs/gal × floor area / 16 hours

3. Total moisture generation (lbs/hr)

**B. Moisture Removal**
Calculate removal capacity needed:
1. Ventilation removal:
   - From Part 2: CFM and ΔW
   - Removal = CFM × ΔW × 60 / 7,000 (lbs/hr)

2. Additional dehumidification needed:
   - Generation - Ventilation removal = Dehumidifier capacity
   - Convert to equipment sizing

**C. Dehumidifier Selection**
Based on calculated capacity:
- Specify number and size of units
- Calculate electrical load (kW)
- Determine heat of compression added to space

### Deliverable
Dehumidification analysis with:
- Moisture generation calculation
- Ventilation removal capacity
- Required dehumidifier capacity
- Equipment specification

---

## Part 4: Equipment Selection and Layout

### Tasks

**A. Heating System**
Based on heating load:
1. Select boiler type (condensing gas, propane, electric, etc.)
2. Specify distribution method:
   - Unit heaters (locate on plan)
   - Poly tube distribution
   - Radiant floor
3. Calculate fuel consumption (annual estimate)

**B. Cooling/Ventilation System**
Based on cooling load:
1. Natural ventilation option:
   - Calculate required vent area (15-20% of floor)
   - Specify roof and sidewall vent sizes
   - Estimate performance

2. Mechanical cooling option:
   - Evaporative cooling (PAD system)
   - DX air conditioning
   - Compare options

**C. System Layout Sketch**
Create simple floor plan showing:
- Equipment locations
- Distribution pathways
- Control zones

### Deliverable
Equipment selection summary with:
- Heating equipment specification
- Cooling/ventilation approach
- Layout sketch
- Capital cost estimate

---

## Submission Requirements

**Format:**
- Typed calculation sheets (may be Excel or Word tables)
- Show all work (formulas, values, units)
- Clearly label sections
- Include sketches/diagrams

**Length:** 10-15 pages

**Due Date:** [As specified by instructor]

---

## Grading Rubric (100 points)

| Component | Points |
|-----------|--------|
| Heating load calculation accuracy | 25 |
| Cooling load calculation accuracy | 25 |
| Dehumidification analysis | 20 |
| Equipment selection rationale | 15 |
| Documentation quality | 10 |
| Layout sketch | 5 |

---

## Reference Data

### U-Values (BTU/hr·ft²·°F)
- 16mm polycarbonate: 0.44
- Double polyethylene: 0.70
- Single glass: 1.13
- Double glass: 0.50

### Constants
- Air sensible heat: 1.08 BTU/CFM·°F
- Air latent heat: 0.68 BTU/CFM·grain/lb
- Water: 8.34 lbs/gallon
- Grains: 7,000 grains/lb
- Solar conversion: 1 W/m² = 0.317 BTU/hr·ft²

### Psychrometric Properties (use chart or online calculator)
Recommended tool: www.flycarpet.net/en/psyonline

---

**This exercise reinforces Modules 4 & 5 concepts. Accuracy and clear documentation are essential!**
