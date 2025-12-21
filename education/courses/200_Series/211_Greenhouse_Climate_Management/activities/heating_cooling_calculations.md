# Heating & Cooling Calculations
## Course 211: Greenhouse Climate Management

---

## Exercise 1: Heat Loss Calculation

### Scenario

You are designing the heating system for a new greenhouse with the following specifications:

```
GREENHOUSE SPECS:
─────────────────
Dimensions: 40' wide × 120' long × 14' high (at peak)
Location: Zone 6 (design outdoor temp: 0°F)
Target indoor temp: 65°F
Covering: Double-layer polyethylene
North wall: Insulated (R-19)
```

### Part A: Calculate Surface Areas

**1. Calculate the surface area of each component:**

```
Glazed Surfaces (double poly, U = 0.70):
────────────────────────────────────────
East wall: Height ___ × Length ___ = ________ ft²
West wall: Height ___ × Length ___ = ________ ft²
South wall: Width ___ × Height ___ = ________ ft²
Roof: Width ___ × Length ___ × 1.15 (slope factor) = ________ ft²

Total glazed area: ________ ft²

Insulated North Wall (R-19, U = 0.05):
───────────────────────────────────────
Width ___ × Height ___ = ________ ft²
```

### Part B: Calculate Heat Loss

**2. Calculate heat loss through each surface using Q = U × A × ΔT:**

```
Temperature difference (ΔT): 65°F - 0°F = 65°F

Glazed surfaces:
Q = 0.70 × ________ ft² × 65°F = ________ BTU/hr

Insulated wall:
Q = 0.05 × ________ ft² × 65°F = ________ BTU/hr

Subtotal: ________ BTU/hr
```

**3. Add infiltration (10%):**

```
Infiltration loss: ________ × 0.10 = ________ BTU/hr
Total with infiltration: ________ BTU/hr
```

**4. Add safety factor (20%):**

```
Final heating requirement: ________ × 1.20 = ________ BTU/hr
```

### Part C: Equipment Selection

**5. Select appropriate heating equipment:**

```
Total capacity needed: ____________ BTU/hr

Option 1: Unit Heaters
─────────────────────
Available sizes: 200,000 / 300,000 / 400,000 BTU/hr
Number and size needed: ___________________________

Option 2: Boiler with Hot Water Distribution
─────────────────────────────────────────────
Boiler capacity: ____________ BTU/hr input
Efficiency: 85%
Actual output: ____________ BTU/hr

Which system would you recommend and why?
_________________________________________________
_________________________________________________
```

---

## Exercise 2: Ventilation Capacity Calculation

### Scenario

Same greenhouse (40' × 120'), need to size summer ventilation.

### Part A: Calculate Required CFM

**1. Floor area method:**

```
Floor area: 40' × 120' = ________ ft²
CFM per ft²: 10 (moderate) to 12 (aggressive)

Conservative (10 CFM/ft²): ________ CFM
Aggressive (12 CFM/ft²): ________ CFM
```

**2. Air changes method:**

```
Volume: 40' × 120' × 14' × 0.8 (volume factor) = ________ ft³
Target ACH: 90 (summer cooling)

CFM = (Volume × ACH) / 60
CFM = (________ × 90) / 60 = ________ CFM
```

**3. Design CFM (use larger value):**

```
Required ventilation capacity: ________ CFM
```

### Part B: Fan Selection

**4. Select exhaust fans:**

```
Available fan sizes:
─────────────────────
36" fan: 5,500 CFM @ 0.1" static pressure
48" fan: 10,000 CFM @ 0.1" static pressure

Option 1: All 48" fans
Number needed: ________ CFM ÷ 10,000 = ________ fans

Option 2: Mix of sizes
48" fans: ________ @ 10,000 = ________ CFM
36" fans: ________ @ 5,500 = ________ CFM
Total: ________ CFM

Which configuration would you choose and why?
_________________________________________________
_________________________________________________
```

### Part C: Intake Area

**5. Calculate required intake area:**

```
Rule: Intake area should be at least 125% of fan discharge area

48" fan area: 3.14 × (2')² = 12.6 ft² per fan
Number of 48" fans: ________
Total discharge area: ________ ft²

Required intake area: ________ ft² × 1.25 = ________ ft²

If using motorized sidewall vents 4' × 8' (32 ft² each):
Number of vents needed: ________ ft² ÷ 32 = ________
```

---

## Exercise 3: VPD Management

### Scenario

Current greenhouse conditions are causing plant stress.

```
CURRENT CONDITIONS:
───────────────────
Temperature: 80°F (27°C)
Relative Humidity: 35%
SVP at 80°F = 3.56 kPa
```

### Part A: Calculate Current VPD

**1. Calculate VPD:**

```
VPD = SVP × (1 - RH/100)
VPD = 3.56 × (1 - 35/100)
VPD = 3.56 × ________ = ________ kPa

Is this in the optimal range (0.8-1.2 kPa)? □ Yes  □ No
Problem: □ Too low (humid)  □ Too high (dry)
```

### Part B: Develop Solutions

**2. Option 1 - Reduce temperature:**

```
Target VPD: 1.1 kPa
Keep RH at 35%

Rearrange formula to solve for temperature:
VPD = SVP × (1 - RH/100)
SVP needed = VPD / (1 - RH/100)
SVP = 1.1 / 0.65 = ________ kPa

Using SVP table, this corresponds to approximately ____°F

Temperature reduction needed: 80°F - ____°F = ____°F
```

**3. Option 2 - Increase humidity:**

```
Keep temperature at 80°F (SVP = 3.56 kPa)
Target VPD: 1.1 kPa

Rearrange to solve for RH:
1.1 = 3.56 × (1 - RH/100)
1 - RH/100 = 1.1 / 3.56 = ________
RH/100 = 1 - ________ = ________
RH = ________%

Humidity increase needed: ____% - 35% = ____%
```

**4. Option 3 - Combination approach:**

```
Moderate temperature reduction to ____°F (SVP = ____ kPa)
Moderate humidity increase to ____%

VPD = ____ × (1 - ____/100) = ____ kPa

This option: □ Achieves target  □ Needs adjustment
```

**5. Which solution would you implement and why?**

```
Chosen solution: ____________________________________

Equipment needed: ___________________________________

Implementation steps:
1. ________________________________________________
2. ________________________________________________
3. ________________________________________________
```

---

## Exercise 4: Energy Cost Comparison

### Scenario

Evaluate night setback strategy for energy savings.

```
GREENHOUSE DATA:
────────────────
Heat loss rate: 400,000 BTU/hr @ ΔT of 65°F
Heating season: 180 nights
Fuel: Natural gas @ $15 per million BTU
Boiler efficiency: 85%
```

### Part A: Constant Temperature Strategy

**1. Calculate cost with constant 70°F:**

```
Assume average outdoor temp: 25°F
ΔT = 70 - 25 = 45°F

Heat loss = 400,000 × (45/65) = ________ BTU/hr

Night length average: 12 hours
BTU per night = ________ × 12 = ________ BTU

Season total = ________ × 180 nights = ________ BTU
Millions of BTU = ________ / 1,000,000 = ________

Cost = ________ million BTU × $15 = $________

Accounting for efficiency (÷ 0.85):
Actual cost = $________ / 0.85 = $________
```

### Part B: Night Setback Strategy

**2. Calculate cost with night setback to 60°F:**

```
ΔT = 60 - 25 = 35°F

Heat loss = 400,000 × (35/65) = ________ BTU/hr

BTU per night = ________ × 12 = ________ BTU
Season total = ________ BTU
Millions = ________

Cost before efficiency = $________
Actual cost = $________
```

### Part C: Savings Analysis

**3. Calculate savings:**

```
Savings = $________ - $________ = $________
Percentage reduction = (________ / ________) × 100 = ____%

Setback amount: 10°F
Rule of thumb: 2-3% savings per degree
Expected savings: 10 × 2.5% = 25%
Actual savings: ____%

Does this match expectations? ____________________
```

---

## Exercise 5: Integrated System Design

### Challenge

Design a complete climate system for optimal crop production.

```
REQUIREMENTS:
─────────────
Greenhouse: 30' × 96'
Crop: Tomatoes
Location: Your climate zone
Budget: $25,000 for climate equipment
```

### Your Design:

**1. Heating:**
- System type: ____________________________________
- Capacity: ________________ BTU/hr
- Estimated cost: $____________

**2. Cooling/Ventilation:**
- Exhaust fans: ________ @ ________ CFM
- Shade system: ____________________________________
- Estimated cost: $____________

**3. Humidity Control:**
- Humidification: __________________________________
- Dehumidification: ________________________________
- Estimated cost: $____________

**4. Air Circulation:**
- HAF fans: ________
- Placement strategy: ______________________________
- Estimated cost: $____________

**5. Controls:**
- Controller: ______________________________________
- Sensors: _________________________________________
- Estimated cost: $____________

**Total Equipment Cost: $____________**

**Justification:**
Why did you make these choices?
____________________________________________________
____________________________________________________
____________________________________________________

---

*EcoFusion Academy - Course 211 Activity*
