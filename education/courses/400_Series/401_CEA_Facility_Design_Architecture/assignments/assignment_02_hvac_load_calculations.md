# Assignment 2: HVAC Load Calculations for CEA Facility
## Course 401: CEA Facility Design & Architecture

---

## Assignment Overview

**Type:** In-Class Activity
**Duration:** 20-30 minutes
**Points:** 25 points
**Learning Objectives:** Perform heating and cooling load calculations for controlled environment agriculture
**Difficulty Level:** Expert - Engineering Calculations

---

## Scenario

You are designing the HVAC system for a 10,000 sq ft greenhouse section within a larger CEA facility. The greenhouse will produce tomatoes under supplemental LED lighting with the following specifications:

### Facility Specifications:

**Building Envelope:**
- Floor area: 10,000 sq ft (100 ft × 100 ft)
- Wall height: 16 ft
- Roof type: Polycarbonate glazing, double-wall, 16mm thick (U-value = 0.58 Btu/hr-ft²-°F)
- Wall construction: Insulated metal panels (R-19, U-value = 0.053 Btu/hr-ft²-°F)
- Floor: Concrete slab on grade (R-10 perimeter insulation)

**Environmental Conditions:**
- Location: Columbus, Ohio (Climate Zone 5A)
- Outside design temperature (winter): 1°F
- Outside design temperature (summer): 91°F dry bulb, 75°F wet bulb
- Inside setpoint: 72°F day / 68°F night, 70% RH
- Occupancy: 4 workers during day shift

**Production Systems:**
- LED lighting: 40 watts/sq ft installed, 85% efficiency (6.0 watts heat/sq ft)
- Lighting schedule: 16 hours/day
- Plant transpiration: Estimated 0.15 gallons/sq ft/day
- Growing system: Hydroponic, recirculating

---

## Calculation Tasks

### Part 1: Heating Load Calculation (10 points)

Calculate the design heating load in BTU/hr for the worst-case winter conditions.

**Step 1: Roof Heat Loss**
- Roof area: ________ sq ft
- U-value: ________ Btu/hr-ft²-°F
- ΔT (design): ________ °F
- Roof heat loss = ________ BTU/hr

**Step 2: Wall Heat Loss**
- Wall area: ________ sq ft (gross) - ________ sq ft (glazing) = ________ sq ft (net)
- U-value: ________ Btu/hr-ft²-°F
- ΔT (design): ________ °F
- Wall heat loss = ________ BTU/hr

**Step 3: Infiltration Load**
- Air changes per hour (ACH): Estimate 0.5 ACH for well-sealed greenhouse
- Volume: ________ cubic feet
- Infiltration CFM = ________ CFM
- Infiltration load = 1.08 × CFM × ΔT = ________ BTU/hr

**Step 4: Total Heating Load**
- Total heat loss = ________ BTU/hr
- Safety factor (15%) = ________ BTU/hr
- **Design heating capacity = ________ BTU/hr or ________ tons**

---

### Part 2: Cooling Load Calculation (10 points)

Calculate the design cooling load in BTU/hr for peak summer conditions with lights on.

**Step 1: Transmission Gains (Envelope)**
- Roof solar gain: Assume 25 BTU/hr-ft² solar heat gain coefficient (SHGC)
- Roof transmission = ________ BTU/hr
- Wall transmission (use summer ΔT): ________ BTU/hr
- Total transmission = ________ BTU/hr

**Step 2: Internal Heat Gains**
- LED lighting heat: 6.0 watts/sq ft × 3.41 BTU/watt = ________ BTU/hr-sq ft
- Total lighting load = ________ BTU/hr
- Occupancy (4 workers @ 250 BTU/hr sensible each): ________ BTU/hr
- Equipment/pumps (estimate 2 kW): ________ BTU/hr
- Total internal gains = ________ BTU/hr

**Step 3: Plant Transpiration Latent Load**
- Transpiration rate: 0.15 gal/sq ft/day ÷ 16 hours = ________ gal/hr total
- Latent heat of vaporization: 8,100 BTU/gallon
- Latent cooling load = ________ BTU/hr

**Step 4: Total Cooling Load**
- Sensible cooling = ________ BTU/hr
- Latent cooling = ________ BTU/hr
- Total cooling load = ________ BTU/hr
- Safety factor (20%) = ________ BTU/hr
- **Design cooling capacity = ________ BTU/hr or ________ tons**

---

### Part 3: Equipment Selection and Analysis (5 points)

**Based on your calculations:**

1. **What is the heating-to-cooling ratio for this facility?**
   - Heating load: ________ tons
   - Cooling load: ________ tons
   - Ratio: ________ : 1 (cooling:heating)

2. **What type of HVAC system would you recommend and why? (2-3 sentences)**

   _________________________________________________________________
   _________________________________________________________________
   _________________________________________________________________

3. **What is the primary driver of cooling load in this facility?**

   ☐ Solar transmission through envelope
   ☐ LED lighting heat
   ☐ Outside air temperature
   ☐ Plant transpiration

4. **Estimate the dehumidification capacity required (lbs water/hour):**
   - Latent load ÷ 1,050 BTU/lb = ________ lbs/hr

---

## Submission Requirements

- **Format:** Show all work with units clearly labeled
- **Time Limit:** 30 minutes
- **Resources Allowed:** Calculator, psychrometric chart, course notes
- **Submission:** Complete worksheet and submit via course platform

---

## Grading Rubric

### Part 1: Heating Load (10 points)
- **9-10 points:** All calculations correct with proper methodology, units, and safety factors
- **7-8 points:** Minor calculation errors, correct approach
- **5-6 points:** Significant errors but demonstrates understanding
- **0-4 points:** Incorrect methodology or incomplete calculations

### Part 2: Cooling Load (10 points)
- **9-10 points:** Accurate sensible and latent load calculations, all components included
- **7-8 points:** Minor errors, most components correctly calculated
- **5-6 points:** Major components calculated but with errors
- **0-4 points:** Incomplete or fundamentally incorrect approach

### Part 3: Equipment Selection (5 points)
- **5 points:** Correct ratio, appropriate system recommendation with sound justification, accurate dehumidification estimate
- **3-4 points:** Mostly correct with minor gaps in reasoning
- **1-2 points:** Weak justification or incorrect selections
- **0 points:** Incomplete or incorrect

---

## Answer Key (For Instructors)

### Part 1: Heating Load
- Roof area: 10,000 sq ft
- Roof heat loss: 10,000 × 0.58 × (72-1) = 411,800 BTU/hr
- Wall area: (400 ft perimeter × 16 ft) - glazing ≈ 6,400 sq ft
- Wall heat loss: 6,400 × 0.053 × 71 = 24,077 BTU/hr
- Volume: 10,000 × 16 = 160,000 cu ft
- Infiltration: 0.5 ACH = 80,000 CFH ÷ 60 = 1,333 CFM
- Infiltration load: 1.08 × 1,333 × 71 = 102,190 BTU/hr
- Total: 538,067 BTU/hr × 1.15 = **619 MBH or 51.5 tons**

### Part 2: Cooling Load
- Roof solar: 10,000 × 25 = 250,000 BTU/hr
- Wall transmission: 6,400 × 0.053 × 19 = 6,451 BTU/hr
- LED lighting: 6.0 × 3.41 × 10,000 = 204,600 BTU/hr
- Occupancy: 4 × 250 = 1,000 BTU/hr
- Equipment: 2,000 watts × 3.41 = 6,820 BTU/hr
- Sensible total: 468,871 BTU/hr
- Latent (transpiration): (0.15 × 10,000 ÷ 16) × 8,100 = 759,375 BTU/hr
- Total: 1,228,246 × 1.20 = **1,473,895 BTU/hr or 123 tons**
- Dehumidification: 759,375 ÷ 1,050 = **723 lbs/hr**

### Part 3: Analysis
- Ratio: 123:51.5 ≈ **2.4:1 (cooling dominant)**
- Recommended system: **Dedicated outdoor air system (DOAS) with high-efficiency dehumidification and energy recovery** - needed for massive latent loads and energy efficiency
- Primary driver: **LED lighting heat** (though plant transpiration creates largest latent load)

---

## Learning Outcomes

This assignment develops professional competency in:
- Psychrometric analysis for CEA facilities
- Load calculation methodologies per ASHRAE standards
- Understanding unique thermal characteristics of greenhouses
- Equipment sizing for combined sensible and latent loads
- Identifying dehumidification requirements critical to CEA

---

**Assignment Version:** 1.0
**Last Updated:** December 2025
