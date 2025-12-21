# Course 411: Vertical Farm Engineering - Final Examination

**Course:** 411 - Vertical Farm Engineering (Expert Level)
**Questions:** 50
**Passing Score:** 80% (40/50 correct)
**Time Limit:** 3 hours
**Format:** Multiple choice, calculations, design problems
**Materials Allowed:** Calculator, reference formulas provided

---

## Section 1: System Architecture and Design (Questions 1-10)

### Question 1
A 2,000 m² facility with 10 growing levels and 55% usable percentage produces 30 kg/m²/year. What is the annual production capacity?

A) 270 MT/year
B) 300 MT/year
C) 330 MT/year
D) 600 MT/year

**Answer:** C (2,000 × 10 × 0.55 × 30 / 1,000 = 330 MT)

### Question 2
Which system configuration provides the highest plant density per unit floor area?

A) NFT channels at 400mm spacing
B) DWC rafts with 200mm plant spacing
C) Vertical towers with 150mm pocket spacing
D) Drip-irrigated grow bags

**Answer:** C

### Question 3
For a facility producing 500 kg/day with 28-day cycles and 2-day turnover, how many m² of growing area is needed at 2.5 kg/m² yield per cycle?

A) 5,000 m²
B) 6,000 m²
C) 7,000 m²
D) 8,000 m²

**Answer:** B (500 kg/day × 30 days = 15,000 kg per cycle; 15,000 / 2.5 = 6,000 m²)

### Question 4
What is the primary engineering consideration when selecting modular vs. custom racking systems?

A) Aesthetic appearance
B) Capital cost vs. optimization potential
C) Color options
D) Shipping logistics only

**Answer:** B

### Question 5
In workflow design, what principle is most critical for preventing cross-contamination?

A) Shortest distance between operations
B) Unidirectional flow from clean to dirty
C) Maximum automation
D) Centralized storage

**Answer:** B

---

## Section 2: Structural Engineering (Questions 6-10)

### Question 6
Calculate the design load per level for a system with 40 kg/m² dead load and 180 kg/m² live load:

A) 220 kg/m²
B) 288 kg/m²
C) 336 kg/m²
D) 440 kg/m²

**Answer:** C ((40 × 1.2) + (180 × 1.6) = 336 kg/m²)

### Question 7
For a post supporting 15,000 kg, what base plate size is required if concrete can support 0.5 MPa?

A) 300mm × 300mm
B) 400mm × 400mm
C) 550mm × 550mm
D) 600mm × 600mm

**Answer:** C (15,000 kg = 150 kN = 0.15 MN; Area = 0.15 MN / 0.5 MPa = 0.30 m² = 550mm × 550mm)

### Question 8
What corrosion protection is minimum standard for structural steel in vertical farms?

A) Paint with primer
B) Powder coating
C) Hot-dip galvanizing 85 microns minimum
D) No protection needed if indoor

**Answer:** C

### Question 9
Seismic lateral bracing should be installed in which locations?

A) End bays only
B) End bays and every 3-4 bays
C) Every bay
D) Not required for agricultural structures

**Answer:** B

### Question 10
Maximum recommended beam deflection for precision growing systems (L = 12m):

A) 100mm (L/120)
B) 67mm (L/180)
C) 50mm (L/240)
D) 33mm (L/360)

**Answer:** C

---

## Section 3: Lighting Engineering (Questions 11-20)

### Question 11
Calculate DLI for 300 μmol/m²/s PPFD over 18-hour photoperiod:

A) 16.2 mol/m²/day
B) 18.4 mol/m²/day
C) 19.4 mol/m²/day
D) 21.6 mol/m²/day

**Answer:** C (300 × 18 × 0.0036 = 19.44)

### Question 12
For 120 kW lighting load at 480V 3-phase, how many 20A circuits are required (with proper safety factors)?

A) 8 circuits
B) 10 circuits
C) 12 circuits
D) 15 circuits

**Answer:** B (Each circuit: ~12.6 kW capacity; 120/12.6 = 9.5, round to 10 for safety)

### Question 13
An LED system has 2.8 μmol/J efficacy at chip, 95% driver efficiency, and 92% optical efficiency. What is system efficacy?

A) 2.31 μmol/J
B) 2.45 μmol/J
C) 2.66 μmol/J
D) 2.80 μmol/J

**Answer: B** (2.8 × 0.95 × 0.92 = 2.45)

### Question 14
What percentage of LED electrical input typically becomes heat in horticultural applications?

A) 25-35%
B) 40-50%
C) 50-60%
D) 70-80%

**Answer:** C

### Question 15
Which light uniformity metric indicates excellent distribution?

A) CV < 25%
B) CV < 15%
C) CV < 10%
D) CV < 5%

**Answer:** C

### Question 16
For a 1,000 m² facility requiring 250 μmol/m²/s PPFD with 2.5 μmol/J system efficacy, what total power is needed?

A) 80 kW
B) 100 kW
C) 120 kW
D) 140 kW

**Answer:** B (1,000 m² × 250 μmol/m²/s = 250,000 μmol/s; 250,000 / 2.5 = 100 kW)

### Question 17
What is the recommended maximum LED junction temperature for long lifespan?

A) 85°C
B) 100°C
C) 120°C
D) 150°C

**Answer:** B

### Question 18
Which dimming protocol allows bidirectional communication and individual fixture addressing?

A) 0-10V analog
B) PWM
C) DALI
D) Triac

**Answer:** C

### Question 19
What PAR wavelength range is photosynthetically active?

A) 350-650 nm
B) 400-700 nm
C) 450-750 nm
D) 500-800 nm

**Answer:** B

### Question 20
For maximum energy savings under time-of-use rates, lighting schedules should:

A) Run during daylight hours
B) Run during overnight off-peak hours
C) Run 24/7 continuously
D) Follow natural photoperiod

**Answer:** B

---

## Section 4: HVAC and Environmental Control (Questions 21-30)

### Question 21
For 100 kW lighting (55% heat) plus 200 kg/hr transpiration, what is total cooling load?

A) 145 kW
B) 212 kW
C) 267 kW
D) 312 kW

**Answer:** B (Sensible: 55 kW; Latent: 200 kg/hr × 2,260 kJ/kg / 3,600 = 157 kW; Total: 212 kW)

### Question 22
What Sensible Heat Ratio (SHR) is typical for vertical farms?

A) 0.75-0.85
B) 0.60-0.70
C) 0.30-0.40
D) 0.15-0.25

**Answer:** C (Low SHR due to high latent load from transpiration)

### Question 23
Recommended air changes per hour (ACH) for leafy green production:

A) 5-10 ACH
B) 10-15 ACH
C) 15-20 ACH
D) 25-30 ACH

**Answer:** C

### Question 24
Calculate supply CFM for 280,000 BTU/hr sensible load with 10°F ΔT:

A) 18,000 CFM
B) 22,000 CFM
C) 26,000 CFM
D) 30,000 CFM

**Answer:** C (280,000 / (1.08 × 10) = 25,926 CFM)

### Question 25
Most energy-efficient dehumidification method for vertical farms:

A) Overcooling and reheating
B) Heat pump dehumidifier with heat recovery
C) Desiccant dehumidification
D) Ventilation with outdoor air

**Answer:** B

### Question 26
Under-floor plenum air distribution provides which primary benefit?

A) Lower installation cost
B) Excellent temperature uniformity
C) Easier maintenance access
D) Higher air velocity

**Answer:** B

### Question 27
Heat recovery from HVAC condensers can offset:

A) Lighting energy costs
B) Pumping energy costs
C) Hot water heating costs
D) Transportation costs

**Answer:** C

### Question 28
Variable Frequency Drives (VFDs) on HVAC fans typically save what percentage of energy?

A) 10-20%
B) 20-30%
C) 40-60%
D) 70-80%

**Answer:** C (Fan power is proportional to speed cubed; significant savings at reduced speeds)

### Question 29
What Power Usage Effectiveness (PUE-VF) indicates excellent efficiency?

A) < 1.3
B) < 1.6
C) < 2.0
D) < 2.5

**Answer:** A

### Question 30
Optimal VPD range for most leafy greens:

A) 0.3-0.6 kPa
B) 0.8-1.2 kPa
C) 1.4-1.8 kPa
D) 2.0-2.5 kPa

**Answer:** B

---

## Section 5: Water Systems and Automation (Questions 31-40)

### Question 31
For 600 L/hr flow rate and 1.2 m/s target velocity, what pipe diameter is required?

A) 10mm
B) 15mm
C) 20mm
D) 25mm

**Answer:** B (Convert units, calculate area from Q/V, then diameter from area)

### Question 32
Pump Total Dynamic Head (TDH) includes:

A) Static head only
B) Static head + friction loss
C) Static head + friction loss + pressure head
D) Pressure head only

**Answer:** C

### Question 33
For A/B fertigation system at 1:200 dilution with 600 L/hr main flow, what is injection rate per channel?

A) 1 L/hr
B) 3 L/hr
C) 6 L/hr
D) 12 L/hr

**Answer:** B (600 / 200 = 3 L/hr per channel)

### Question 34
Minimum filtration level recommended before drip emitters:

A) 1 micron
B) 5 micron
C) 25 micron
D) 50 micron

**Answer:** B

### Question 35
Water recirculation percentage target for vertical farms:

A) >75%
B) >85%
C) >95%
D) >99%

**Answer:** C

### Question 36
Automated seeding system with 98% accuracy planting 3,600 plants/hour replaces how many manual workers at 20 trays/hr (264 plants/tray)?

A) 0.5 workers
B) 0.7 workers
C) 1.0 workers
D) 1.4 workers

**Answer:** B (3,600 plants/hr ÷ 264 plants/tray = 13.6 trays/hr; 13.6 / 20 = 0.68 workers)

### Question 37
Machine vision AI requires what minimum training dataset size?

A) 100-500 images
B) 1,000-5,000 images
C) 10,000-50,000 images
D) 100,000-500,000 images

**Answer:** C

### Question 38
ROI payback period that justifies automation investment:

A) < 2 years
B) < 5 years
C) < 10 years
D) < 15 years

**Answer:** B

### Question 39
Collaborative robots (cobots) are distinguished by:

A) Higher speed than traditional robots
B) Force-limiting and human-safe operation
C) Lower cost
D) Larger payload capacity

**Answer:** B

### Question 40
PID control tuning: Increasing integral gain (Ki) primarily:

A) Speeds initial response
B) Eliminates steady-state error
C) Dampens oscillations
D) Increases proportional band

**Answer:** B

---

## Section 6: Food Safety, Commissioning, and Optimization (Questions 41-50)

### Question 41
FSMA Produce Safety Rule applies to:

A) All vertical farms
B) Farms with >$500,000 annual revenue
C) Farms selling across state lines
D) Varies by size and sales channels

**Answer:** D

### Question 42
ISO Class 8 cleanroom requires how many air changes per hour minimum?

A) 5-10 ACH
B) 10-15 ACH
C) 15-20 ACH
D) 25-30 ACH

**Answer:** C

### Question 43
CIP (Clean-in-Place) cycle for irrigation systems typically includes how many steps?

A) 3 steps
B) 5 steps
C) 7 steps
D) 10 steps

**Answer:** C (Pre-rinse, caustic wash, intermediate rinse, acid wash, final rinse, sanitize, optional final rinse)

### Question 44
Multi-barrier water treatment approach includes all EXCEPT:

A) Filtration
B) UV sterilization
C) Chemical sanitization
D) Boiling

**Answer:** D

### Question 45
Commissioning should begin during which project phase?

A) After construction complete
B) During equipment installation
C) During design phase
D) After first crop harvest

**Answer:** C

### Question 46
Pre-functional checklists verify:

A) Equipment performance under load
B) Installation per specifications
C) Operational procedures
D) Financial performance

**Answer:** B

### Question 47
Target energy use for leafy greens in optimized vertical farms:

A) < 10 kWh/kg
B) < 15 kWh/kg
C) < 20 kWh/kg
D) < 25 kWh/kg

**Answer:** B (Best in class: 10-12 kWh/kg; good: <15 kWh/kg)

### Question 48
Six Sigma DMAIC methodology stands for:

A) Define, Measure, Analyze, Improve, Control
B) Design, Make, Assemble, Inspect, Commission
C) Develop, Monitor, Adjust, Integrate, Complete
D) Diagnose, Modify, Approve, Implement, Check

**Answer:** A

### Question 49
Predictive maintenance provides greatest value for:

A) Tier 3 equipment (non-critical)
B) Tier 2 equipment (important)
C) Tier 1 equipment (critical)
D) All equipment equally

**Answer:** C

### Question 50
Primary success factor across all successful vertical farm case studies:

A) Highest possible automation level
B) Data-driven continuous improvement
C) Largest possible facility size
D) Premium product pricing

**Answer:** B

---

## Answer Key

**Section 1 (Architecture):** 1-C, 2-C, 3-B, 4-B, 5-B

**Section 2 (Structural):** 6-C, 7-C, 8-C, 9-B, 10-C

**Section 3 (Lighting):** 11-C, 12-B, 13-B, 14-C, 15-C, 16-B, 17-B, 18-C, 19-B, 20-B

**Section 4 (HVAC):** 21-B, 22-C, 23-C, 24-C, 25-B, 26-B, 27-C, 28-C, 29-A, 30-B

**Section 5 (Water/Automation):** 31-B, 32-C, 33-B, 34-B, 35-C, 36-B, 37-C, 38-B, 39-B, 40-B

**Section 6 (Food Safety/Optimization):** 41-D, 42-C, 43-C, 44-D, 45-C, 46-B, 47-B, 48-A, 49-C, 50-B

---

## Scoring

- **50/50 (100%):** Outstanding - Expert Level
- **47-49 (94-98%):** Excellent - Mastery Demonstrated
- **44-46 (88-92%):** Very Good - Strong Understanding
- **40-43 (80-86%):** Good - Passing (Certificate Awarded)
- **Below 40 (< 80%):** Review course materials and retake exam

---

**Congratulations on completing the Course 411 Final Examination!**

Students scoring 80% or higher receive the **Certificate of Completion: Vertical Farm Engineering (Expert Level)** from EcoFusion Academy.
