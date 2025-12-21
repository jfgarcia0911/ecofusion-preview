# Final Exam: Course 301 - Advanced System Design & Engineering

**Duration:** 3 hours
**Total Points:** 100 points
**Passing Score:** 80/100 (80%)
**Materials Allowed:** Calculator, engineering reference sheets, course notes
**Instructions:** Show all work. Partial credit awarded for correct methodology.

---

## Section 1: Hydraulic Engineering (20 points)

### Problem 1.1 (10 points)

Design a complete hydraulic system for a recirculating aquaponic facility with the following requirements:

**Given:**
- Fish tank: 8,000 gallons, elevation 0 ft
- Biofilter: 3,000 gallons, elevation 8 ft
- Grow beds: Return to sump at elevation 0 ft
- Total pipe run: 120 ft (2" PVC, C=150)
- Fittings: (8) 90° elbows (K=0.9 each), (4) ball valves (K=0.05 each), (1) swing check valve (K=2.0)
- Target flow rate: 150 GPM
- Required discharge pressure: 5 PSI

**Required:**
a) Calculate total dynamic head (TDH)
b) Select an appropriate pump (specify GPM, head, and HP)
c) Calculate actual power consumption if pump efficiency is 68%
d) Estimate annual electricity cost at $0.13/kWh (24/7 operation)

**Show all calculations with units.**

---

### Problem 1.2 (10 points)

A distribution manifold serves six DWC channels, each requiring 25 GPM.

**Required:**
a) Design the manifold using the stepped diameter method. Specify pipe sizes for each section.
b) Calculate flow velocity in each section (target 4-6 ft/s).
c) Sketch the manifold layout showing pipe sizes and flow directions.
d) Calculate total pressure drop through the manifold (use Hazen-Williams, C=150).

---

## Section 2: Biofilter Engineering (15 points)

### Problem 2.1 (8 points)

Size a moving bed biofilm reactor (MBBR) for a commercial system:

**Given:**
- Feed rate: 80 kg/day @ 38% protein
- TAN factor: 0.092 kg TAN/kg protein
- Water temperature: 26°C
- Media: Kaldnes K1 (500 m²/m³ specific surface area)
- Design nitrification rate: 0.7 g TAN/m²/day (conservative)
- Safety factor: 2.0
- Tank fill percentage: 55% media

**Required:**
a) Calculate daily TAN production
b) Calculate required biofilter surface area
c) Calculate required media volume
d) Calculate total tank volume
e) Specify tank dimensions (diameter and depth, use 2:1 D:H ratio)

---

### Problem 2.2 (7 points)

For the biofilter in Problem 2.1:

**Required:**
a) Calculate daily oxygen requirement for nitrification (use 4.57 g O₂/g TAN)
b) Calculate required aeration rate assuming:
   - Standard Aeration Efficiency (SAE) = 2.8 lb O₂/HP·hr
   - Correction factors result in 18% actual efficiency vs. standard
c) Specify blower horsepower
d) Calculate monthly aeration electricity cost ($0.13/kWh, continuous operation)

---

## Section 3: Structural Engineering (15 points)

### Problem 3.1 (8 points)

Design structural support for a fish tank:

**Given:**
- Tank: 10,000 gallons, circular, 12 ft diameter
- HDPE tank weight: 1,200 lb
- Support structure weight (estimated): 600 lb
- Live load (maintenance access): 150 lb/ft² × tank footprint area
- Beam span: 16 ft (simple supported both ends)
- Steel allowable stress: 24,000 PSI
- Deflection limit: L/240

**Required:**
a) Calculate total dead load
b) Calculate live load
c) Calculate total load (D + L)
d) Calculate maximum bending moment for uniformly distributed load
e) Calculate required section modulus
f) Select an appropriate wide flange beam (W-shape)
g) Verify deflection is acceptable

---

### Problem 3.2 (7 points)

Foundation design for the tank in Problem 3.1:

**Given:**
- Soil bearing capacity: 2,500 PSF
- Safety factor: 1.5

**Required:**
a) Calculate allowable soil bearing pressure
b) Calculate required footing area
c) Design a square spread footing (specify dimensions)
d) Calculate actual bearing pressure
e) Calculate footing thickness using cantilever method (overhang distance = thickness)

---

## Section 4: Electrical Systems (15 points)

### Problem 4.1 (8 points)

Design electrical service for an aquaponic facility:

**Connected Loads:**
- (2) Main pumps: 2 HP each, 230V, continuous
- (4) Aerator pumps: 1/2 HP each, 115V, continuous
- (30) LED fixtures: 400W each, 277V, continuous
- (1) Dehumidifier: 3,000W, 230V, non-continuous
- (1) Heater: 8,000W, 230V, non-continuous
- Controls: 800W, 115V, continuous

**Required:**
a) Calculate total connected load (kW)
b) Apply NEC demand factors (125% for continuous loads)
c) Calculate total demand load
d) Size main service (amperes at 240V, include 25% growth margin)
e) Specify main breaker size (next standard size up)

---

### Problem 4.2 (7 points)

Wire sizing for lighting circuit:

**Given:**
- (10) LED fixtures per circuit: 400W each @ 277V
- Circuit run: 180 ft one-way
- Maximum voltage drop: 3%
- Copper wire at 75°C

**Required:**
a) Calculate circuit current
b) Calculate maximum allowable voltage drop (volts)
c) Calculate required wire size using voltage drop formula
d) Select wire gauge (use NEC ampacity table, show you checked)
e) Calculate actual voltage drop with selected wire
f) Specify circuit breaker size
g) How many complete circuits needed for 30 total fixtures?

---

## Section 5: Environmental Systems (10 points)

### Problem 5.1 (10 points)

HVAC design for indoor farm:

**Given:**
- Growing area: 3,000 ft²
- Ceiling height: 12 ft
- Lighting: 20 kW LED (55% heat output)
- Equipment: 5 kW total (100% heat)
- Plant transpiration: 75 gal/day per 1000 ft²
- Design temperature: Indoor 75°F, Outdoor 95°F (summer)
- Wall construction: R-19 insulated, 4,000 ft² total wall area
- Infiltration: 1.0 air changes per hour

**Required:**
a) Calculate conduction heat gain through walls (BTU/hr)
b) Calculate infiltration heat gain (use 0.018 × CFM × ΔT)
c) Calculate heat gain from lighting (BTU/hr)
d) Calculate heat gain from equipment (BTU/hr)
e) Calculate cooling effect from transpiration (1,040 BTU/lb water)
f) Calculate net cooling load (BTU/hr)
g) Size air conditioning (tons of cooling)
h) Calculate daily electricity cost for AC (assume 12 EER, operate 14 hrs/day, $0.13/kWh)

---

## Section 6: System Integration (15 points)

### Problem 6.1 (15 points)

Integrated system design problem:

You are designing a 5,000 ft² indoor aquaponic facility for year-round production.

**Design Requirements:**
- Fish: 2,000 kg tilapia standing biomass
- Feed rate: 2% body weight per day
- Feed protein: 35%
- Plants: 1,500 ft² lettuce (DWC)
- Target water temperature: 78°F
- Target pH: 7.0
- Target DO: 6.5 mg/L

**Required Subsystem Designs:**

a) **Biofilter Sizing** (4 points)
   - Calculate TAN production
   - Size MBBR (show all assumptions)
   - Calculate oxygen requirement for nitrification

b) **Hydraulic System** (4 points)
   - Specify system turnover rate (cycles/hour)
   - Calculate required flow rate
   - Estimate TDH for pump selection (make reasonable assumptions)
   - Specify pump size

c) **Lighting System** (3 points)
   - Calculate required PPFD for lettuce (assume 300 μmol/m²/s target)
   - Select LED fixtures (assume 2.6 μmol/J efficacy)
   - Calculate total power requirement

d) **Economic Analysis** (4 points)
   - Estimate total capital cost (major equipment only, use industry benchmarks)
   - Calculate monthly operating costs (power, labor at 1 FTE × $3,500/month)
   - Estimate gross revenue (lettuce: 4,800 heads/month @ $2.50/head; fish: 170 kg/month @ $6/kg)
   - Calculate monthly net cash flow
   - Estimate simple payback period (capital ÷ annual net cash flow)

**Show all work, state all assumptions clearly.**

---

## Section 7: Professional Practice (10 points)

### Problem 7.1 (5 points)

**Case Study:** A contractor installed a biofilter according to your specifications, but performance testing shows it only removes 60% of the specified TAN load. During commissioning, you discover:
- Media volume is correct
- Aeration is adequate (DO > 6 mg/L)
- Temperature is 25°C (within range)
- pH is 6.2 (below optimal 7.0-8.0)
- Alkalinity is 30 mg/L as CaCO₃ (very low)

**Questions:**
a) Identify the most likely cause of poor biofilter performance (2 points)
b) Explain the biochemical reason for this failure (1 point)
c) Propose a solution with specific actions and expected results (2 points)

---

### Problem 7.2 (5 points)

**Specifications Question:** You are writing a performance specification for a recirculating pump.

Write a complete specification section (CSI format) for the main recirculation pump with these requirements:
- Flow: 200 GPM ± 5%
- Head: 30 ft TDH
- Efficiency: >70% at design point
- Materials: Corrosion-resistant, food-safe
- Motor: 230V, single-phase

Your specification should include:
- Section number and title
- Scope
- Performance requirements
- Material requirements
- Acceptable manufacturers (name at least 3)
- Installation requirements
- Testing requirements

---

## Bonus Question (5 points)

### Advanced Design Challenge

A client wants to reduce electricity costs for their aquaponic operation. Current monthly electricity consumption:
- Pumps: 4,500 kWh
- Aeration: 3,200 kWh
- Lighting: 8,000 kWh
- HVAC: 6,500 kWh
- Total: 22,200 kWh/month @ $0.13/kWh = $2,886/month

Propose THREE specific energy efficiency improvements, one each from different categories. For each improvement:
a) Describe the modification
b) Estimate the energy savings (kWh/month)
c) Estimate the implementation cost
d) Calculate simple payback period (months)

**Be realistic and show calculations for energy savings.**

---

## End of Exam

**Total Points: 100 (105 with bonus)**

**Grading Scale:**
- 90-100: A (Excellent)
- 80-89: B (Good)
- 70-79: C (Satisfactory)
- 60-69: D (Needs improvement)
- <60: F (Fail)

**Passing requires 80/100 (80%)**

---

## Submission Instructions

1. Write or type all answers clearly
2. Show ALL work for calculation problems
3. Include units on all numerical answers
4. Box or highlight final answers
5. Number all pages
6. Include your name on every page
7. Staple all pages together

**Time management suggestion:**
- Section 1: 35 minutes
- Section 2: 25 minutes
- Section 3: 25 minutes
- Section 4: 25 minutes
- Section 5: 20 minutes
- Section 6: 35 minutes
- Section 7: 20 minutes
- Review: 15 minutes

Good luck! This exam tests your mastery of advanced aquaponic system engineering.

---

*This exam is the culmination of Course 301. Your performance demonstrates your readiness for professional engineering work in aquaponics.*
