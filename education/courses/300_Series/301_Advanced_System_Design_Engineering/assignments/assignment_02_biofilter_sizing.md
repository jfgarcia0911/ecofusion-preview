# Course 301: Advanced System Design & Engineering
## Assignment 02: Biofilter Sizing Analysis

---

## Assignment Overview

| **Attribute** | **Details** |
|---------------|-------------|
| **Assignment Type** | In-Class Activity |
| **Duration** | 20-30 minutes |
| **Points** | 20 points |
| **Completed During** | Module 4: Biofilter Engineering |
| **Submission** | Submit completed analysis before leaving class |

---

## Learning Objectives

By completing this assignment, you will:
1. Calculate Total Ammonia Nitrogen (TAN) load from fish feeding
2. Determine required nitrification capacity
3. Size biofilter media volume appropriately
4. Apply safety factors for reliable operation
5. Select appropriate biofilter media types

---

## Scenario

You are designing the biofilter for a commercial tilapia aquaponics operation with the following parameters:

### System Specifications
- **Fish species:** Nile Tilapia
- **Total fish biomass at harvest:** 1,200 lbs
- **Feed rate:** 2% of body weight per day
- **Feed protein content:** 32%
- **System temperature:** 78°F (25.5°C)
- **Target water quality:** Ammonia < 0.5 mg/L, Nitrite < 0.5 mg/L

---

## Part 1: Daily Feed Calculation (3 points)

**Calculate the total daily feed amount.**

```
Fish biomass: _______ lbs
Feed rate: _______ % of body weight
Daily feed = _______ lbs/day

Convert to kg (1 lb = 0.453 kg):
Daily feed = _______ kg/day

Show your work:
```

---

## Part 2: TAN Load Calculation (5 points)

**Calculate the daily Total Ammonia Nitrogen (TAN) production.**

Use the formula:
```
TAN (kg/day) = Daily Feed (kg) × Protein % × 0.092
```

The factor 0.092 represents that approximately 9.2% of protein consumed is excreted as TAN.

```
Daily feed: _______ kg/day
Protein content: _______ % (as decimal: _______)
TAN conversion factor: 0.092

Daily TAN production = _______ kg/day

Convert to grams per day:
Daily TAN production = _______ g/day

Show calculations:
```

---

## Part 3: Nitrification Rate Determination (4 points)

**Determine the appropriate nitrification rate for your conditions.**

### Reference Table: Nitrification Rates
| Media Type | Surface Area (m²/m³) | Rate at 77°F (g TAN/m²/day) |
|------------|---------------------|---------------------------|
| K1 Micro Media | 800 | 0.8 |
| BioBalls | 250 | 0.6 |
| Lava Rock | 300 | 0.5 |
| MBBR Media | 650 | 0.75 |
| Matala Mats | 220 | 0.55 |

**Temperature Adjustment:**
Your system is at 78°F (slightly higher than reference 77°F), so rates will be slightly higher. Use reference rates without adjustment for this exercise.

### Your Selection:
```
Selected media type: _______________________

Nitrification rate: _______ g TAN/m²/day

Justification for media selection:




```

---

## Part 4: Required Surface Area Calculation (5 points)

**Calculate the biofilter surface area needed.**

```
Daily TAN load: _______ g/day
Nitrification rate: _______ g TAN/m²/day

Required surface area = TAN load ÷ Nitrification rate
Required surface area = _______ m²

Apply 50% safety factor for reliability:
Safety factor: 1.5
Design surface area = _______ m² × 1.5 = _______ m²

Show calculations:
```

### Safety Factor Justification:
Why is a 50% safety factor important? (Choose all that apply)
- [ ] Temperature fluctuations
- [ ] Biofilm maturation time
- [ ] Peak loading events
- [ ] Maintenance periods
- [ ] Media efficiency variation

---

## Part 5: Media Volume Calculation (3 points)

**Calculate the required volume of biofilter media.**

```
Media type selected: _______________________
Surface area per unit volume: _______ m²/m³
Required surface area: _______ m²

Required media volume = Surface area ÷ (Surface area per m³)
Required media volume = _______ m³

Convert to cubic feet (1 m³ = 35.3 ft³):
Required media volume = _______ ft³

Convert to gallons (1 ft³ = 7.48 gal):
Biofilter volume = _______ gallons

Show calculations:
```

---

## Part 6: Biofilter Design Recommendations (Bonus Analysis)

Based on your calculations, provide design recommendations:

### A. Container Configuration
```
Total volume needed: _______ gallons

Recommended configuration: (Circle one)
- Single large filter
- Two medium filters (parallel)
- Three smaller filters (series/parallel)

Justification:


```

### B. Flow Rate Through Biofilter
```
System turnover target: 2-3 times per hour
Fish tank volume: 2,500 gallons (assume)

Recommended biofilter flow rate: _______ GPM

Reasoning:


```

### C. Media Depth Recommendation
```
If using a cylindrical biofilter with 3 ft diameter:

Area = πr² = 3.14 × (1.5 ft)² = 7.07 ft²

Volume needed: _______ ft³
Depth = Volume ÷ Area = _______ feet

Is this depth practical? _______
Recommended adjustments:


```

---

## Submission Requirements

1. **Complete all calculations** with work shown
2. **Include units** throughout
3. **Box or highlight final answers**
4. **Provide brief justifications** for selections
5. **Professional presentation** - organized and legible

---

## Grading Rubric

| Criteria | Excellent (17-20) | Proficient (14-16) | Developing (10-13) | Needs Improvement (0-9) |
|----------|-------------------|-------------------|------------------|------------------------|
| **TAN Load Calculation** | Accurate with all steps | Minor error | Methodology partially correct | Major errors |
| **Surface Area Determination** | Correct with safety factor | Missing safety factor | Incomplete analysis | Significant errors |
| **Media Selection** | Appropriate with justification | Weak justification | Questionable choice | Inappropriate |
| **Professional Presentation** | Well-organized, clear | Mostly organized | Somewhat disorganized | Poor |

### Point Distribution:
- Feed calculation: 3 points
- TAN calculation: 5 points
- Nitrification rate: 4 points
- Surface area: 5 points
- Volume calculation: 3 points

---

## Tips for Success

1. **Work systematically** through each step
2. **Don't skip the safety factor** - it's critical for real systems
3. **Consider practical constraints** - very deep or very shallow biofilters have issues
4. **Check reasonableness** - if your answer seems extreme, review calculations
5. **Use dimensional analysis** - units should cancel appropriately

---

## Common Mistakes to Avoid

- Forgetting to convert pounds to kilograms
- Omitting the safety factor
- Using wrong nitrification rate for selected media
- Confusing surface area with volume
- Not converting final volume to practical units

---

## Real-World Context

Biofilter sizing is **critical** for aquaponics success. Undersized biofilters lead to:
- Chronic ammonia problems
- Fish stress and mortality
- Stunted plant growth
- System crashes

Properly sized biofilters provide:
- Stable water quality
- Healthy fish growth
- Reliable plant nutrition
- Operational peace of mind

**Professional Practice:** Engineers typically add 50-100% safety factor and design for peak loading conditions, not average. They also consider:
- Startup time (biofilm maturation takes 4-8 weeks)
- Seasonal temperature variations
- Maintenance requirements (cleaning, replacement)
- Redundancy for critical operations

---

## Extension Thinking

If you finish early, consider:

1. **How would biofilter size change if:**
   - Feed protein content was 40% instead of 32%?
   - System temperature dropped to 68°F?
   - You wanted to stock 50% more fish?

2. **What are advantages of using multiple smaller biofilters vs. one large one?**

3. **How might you incorporate both moving bed (MBBR) and fixed media in a design?**

---

## Reference Formulas

```
Daily Feed (kg) = Biomass (kg) × Feed Rate (%)

TAN Load (kg/day) = Daily Feed × Protein % × 0.092

Required Surface Area (m²) = TAN Load ÷ Nitrification Rate

Design Surface Area (m²) = Required Area × Safety Factor

Media Volume (m³) = Surface Area ÷ Media Specific Surface Area

Volume Conversions:
1 m³ = 35.3 ft³ = 264 gallons
1 ft³ = 7.48 gallons
```

---

*EcoFusion Academy - Course 301, Assignment 02*
