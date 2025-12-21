# Module 6: Hydroponic Formulation & Mixing

**Duration:** 1 hour
**Level:** Intermediate

---

## Learning Objectives

By the end of this module, you will be able to:

1. Formulate custom nutrient solutions from raw salts
2. Calculate stock solution concentrations
3. Mix two-part and three-part formulations safely
4. Convert between different concentration units
5. Troubleshoot mixing and precipitation problems

---

## Introduction

While pre-mixed fertilizers are convenient, understanding formulation allows you to customize nutrition for specific crops, reduce costs, and troubleshoot problems. This module teaches the chemistry and mathematics of creating nutrient solutions from scratch.

---

## 1. Fertilizer Salt Chemistry

### Common Fertilizer Salts

**Nitrogen Sources:**

| Salt Name | Formula | N % | Notes |
|-----------|---------|-----|-------|
| Calcium Nitrate | Ca(NO₃)₂·4H₂O | 11.9 | Also provides 17% Ca, Part A |
| Potassium Nitrate | KNO₃ | 13.8 | Also provides 38.7% K, either part |
| Ammonium Nitrate | NH₄NO₃ | 35.0 | High N, can acidify, use sparingly |
| Urea | CO(NH₂)₂ | 46.0 | Not recommended for hydroponics |

**Phosphorus Sources:**

| Salt Name | Formula | P % | P₂O₅ % | Notes |
|-----------|---------|-----|---------|-------|
| Monopotassium Phosphate | KH₂PO₄ | 22.7 | 52.0 | Also 28.7% K, Part B |
| Monoammonium Phosphate | NH₄H₂PO₄ | 26.9 | 61.7 | Also 12% N, acidifying |
| Phosphoric Acid | H₃PO₄ | 31.6 | 72.4 | 85% solution, pH down |

**Potassium Sources:**

| Salt Name | Formula | K % | Notes |
|-----------|---------|-----|-------|
| Potassium Nitrate | KNO₃ | 38.7 | Also 13.8% N |
| Potassium Sulfate | K₂SO₄ | 44.9 | Also 18.4% S |
| Monopotassium Phosphate | KH₂PO₄ | 28.7 | Also 22.7% P |

**Calcium & Magnesium Sources:**

| Salt Name | Formula | Element % | Notes |
|-----------|---------|-----------|-------|
| Calcium Nitrate | Ca(NO₃)₂·4H₂O | 17.0 Ca | Part A, cannot mix with sulfates/phosphates |
| Calcium Chloride | CaCl₂·2H₂O | 27.2 Ca | Fast-acting, adds Cl |
| Magnesium Sulfate | MgSO₄·7H₂O | 9.8 Mg | Epsom salt, also 13% S |
| Magnesium Nitrate | Mg(NO₃)₂·6H₂O | 9.5 Mg | Also provides N |

**Sulfur Sources:**

| Salt Name | Formula | S % | Notes |
|-----------|---------|-----|-------|
| Potassium Sulfate | K₂SO₄ | 18.4 | Preferred K source |
| Magnesium Sulfate | MgSO₄·7H₂O | 13.0 | Epsom salt |
| Sulfuric Acid | H₂SO₄ | 32.7 | pH down, use cautiously |

---

## 2. Formulation Principles

### Target Nutrient Concentrations

**General Purpose Vegetative Growth (ppm):**
```
N:  180
P:  50
K:  280
Ca: 160
Mg: 50
S:  80
Fe: 3.0
Mn: 0.8
Zn: 0.4
Cu: 0.1
B:  0.4
Mo: 0.05
```

### Salt Selection Strategy

**Two-Part System:**
- **Part A:** Calcium-containing salts (calcium nitrate)
- **Part B:** Phosphate and sulfate salts (everything else)
- **Reason:** Prevents calcium precipitation

**Three-Part System:**
- **Part A:** Calcium nitrate
- **Part B:** Trace elements and chelates
- **Part C:** Everything else (phosphates, sulfates, other macros)
- **Reason:** Better stability, separates iron chelates

### The Two-Part Approach

**Why Separate Parts?**

```
PRECIPITATION REACTIONS TO AVOID

Ca(NO₃)₂ + K₂SO₄ → CaSO₄↓ (gypsum precipitate)
Ca(NO₃)₂ + MgSO₄ → CaSO₄↓ + Mg(NO₃)₂
Ca(NO₃)₂ + KH₂PO₄ → Ca₃(PO₄)₂↓ (calcium phosphate precipitate)

↓ = precipitate (solid, unavailable to plants)

Solution: Keep calcium separate from phosphates and sulfates
until final mixing in reservoir
```

---

## 3. Formulation Calculations

### Basic Calculation Method

**Goal:** Create 100 liters of solution with 180 ppm N

**Step 1: Determine total mg needed**
- 180 ppm = 180 mg per liter
- 180 mg/L × 100 L = 18,000 mg N = 18 g N

**Step 2: Choose salt and calculate amount**
- Using Calcium Nitrate Ca(NO₃)₂·4H₂O (11.9% N)
- Need 18 g N
- Salt amount = 18 g ÷ 0.119 = 151.3 g calcium nitrate

**Step 3: Check what else this provides**
- Calcium nitrate is 17% Ca
- Ca provided = 151.3 g × 0.17 = 25.7 g Ca
- 25.7 g Ca ÷ 100 L = 257 mg/L = 257 ppm Ca

### Sample Formulation Calculation

**Target (per liter):**
- N: 180 ppm
- P: 50 ppm
- K: 280 ppm
- Ca: 160 ppm
- Mg: 50 ppm

**Step-by-Step:**

**1. Calcium & Part of Nitrogen (Part A)**
- Target: 160 ppm Ca, which also provides N
- Using Ca(NO₃)₂·4H₂O (17% Ca, 11.9% N)
- Need: 160 mg Ca per liter
- Salt: 160 ÷ 0.17 = 941 mg Ca(NO₃)₂·4H₂O per liter
- N provided: 941 × 0.119 = 112 mg N per liter
- N remaining needed: 180 - 112 = 68 mg N per liter

**2. Phosphorus (Part B)**
- Target: 50 ppm P
- Using KH₂PO₄ (22.7% P, 28.7% K)
- Need: 50 mg P per liter
- Salt: 50 ÷ 0.227 = 220 mg KH₂PO₄ per liter
- K provided: 220 × 0.287 = 63 mg K per liter
- K remaining needed: 280 - 63 = 217 mg K per liter

**3. Remaining Potassium & Nitrogen (Part B)**
- Need: 217 ppm K and 68 ppm N
- Using KNO₃ (38.7% K, 13.8% N)
- Strategy: Base calculation on K (usually limiting)
- Salt: 217 ÷ 0.387 = 561 mg KNO₃ per liter
- N provided: 561 × 0.138 = 77 mg N per liter
- Total N now: 112 + 77 = 189 ppm (slightly over, acceptable)

**4. Magnesium (Part B)**
- Target: 50 ppm Mg
- Using MgSO₄·7H₂O (9.8% Mg, 13% S)
- Salt: 50 ÷ 0.098 = 510 mg MgSO₄·7H₂O per liter
- S provided: 510 × 0.13 = 66 mg S (bonus)

**Summary per Liter:**

| Salt | Amount (g/L) | Part |
|------|--------------|------|
| Ca(NO₃)₂·4H₂O | 0.941 | A |
| KNO₃ | 0.561 | B |
| KH₂PO₄ | 0.220 | B |
| MgSO₄·7H₂O | 0.510 | B |
| Micronutrients | See below | B |

---

## 4. Stock Solution Preparation

### Concentration Factors

**Common Concentrations:**
- **100x:** 1 ml stock per 1 L final = 100 ml stock per 100 L final
- **200x:** 1 ml stock per 2 L final = 50 ml stock per 100 L final
- **500x:** 1 ml stock per 5 L final = 20 ml stock per 100 L final

**Choosing Concentration:**
- Higher concentration = less storage space
- Too high = solubility problems, measuring errors magnified
- 100x common for small operations
- 200x good compromise
- 500x for large operations

### Example: 100x Stock Solution

**Making 10 Liters of 100x Part A:**

From previous calculation, need 0.941 g Ca(NO₃)₂·4H₂O per liter final solution

For 100x stock:
- 0.941 g/L × 100 = 94.1 g per liter of stock
- For 10 L stock: 94.1 × 10 = 941 g calcium nitrate

**Procedure:**
1. Measure 941 g calcium nitrate
2. Add to bucket with 5-6 L warm water
3. Stir until completely dissolved
4. Add water to bring to 10 L total
5. Label: "PART A - 100x - Calcium Nitrate"
6. Store in cool, dark place

**Making 10 Liters of 100x Part B:**

| Salt | Amount per L final | Amount per L stock (100x) | Amount for 10 L stock |
|------|-------------------|---------------------------|----------------------|
| KNO₃ | 0.561 g | 56.1 g | 561 g |
| KH₂PO₄ | 0.220 g | 22.0 g | 220 g |
| MgSO₄·7H₂O | 0.510 g | 51.0 g | 510 g |

Total for 10 L Part B stock: 1,291 g salts

**Procedure:**
1. Add salts to 5-6 L warm water
2. Stir until dissolved
3. Add micronutrient stock (see below)
4. Bring to 10 L total
5. Label: "PART B - 100x - Macro & Micro"

### Micronutrient Stock

**Separate Micronutrient Stock (1000x):**

Per liter of final solution need:
- Fe-EDTA: 3.0 ppm Fe → 12 mg Fe-EDTA (25% Fe)
- Mn-EDTA: 0.8 ppm Mn → 4 mg Mn-EDTA (20% Mn)
- Zn-EDTA: 0.4 ppm Zn → 2 mg Zn-EDTA (20% Zn)
- Cu-EDTA: 0.1 ppm Cu → 0.7 mg Cu-EDTA (14% Cu)
- H₃BO₃: 0.4 ppm B → 2.3 mg (17.5% B)
- Na₂MoO₄: 0.05 ppm Mo → 0.12 mg (39.7% Mo)

**For 1 Liter of 1000x Micro Stock:**

| Compound | Amount |
|----------|--------|
| Fe-EDTA (25% Fe) | 12 g |
| Mn-EDTA (20% Mn) | 4 g |
| Zn-EDTA (20% Zn) | 2 g |
| Cu-EDTA (14% Cu) | 0.7 g |
| Boric Acid | 2.3 g |
| Sodium Molybdate | 0.12 g |

**Mixing:**
1. Add chelates to 500 ml warm water
2. Stir until dissolved
3. Add boric acid and molybdate
4. Bring to 1 L
5. Store in dark bottle (iron chelates light-sensitive)
6. Add 100 ml per 10 L of Part B stock (to make 100x micro in Part B)

---

## 5. Mixing Procedures

### Safety First

**Personal Protection:**
- Wear gloves (some salts irritating)
- Safety glasses (prevent splashing)
- Dust mask when handling powders
- Work in ventilated area
- No eating/drinking in mixing area

**Chemical Safety:**
- Never mix acids with bases directly
- Always add acid to water (not water to acid)
- Store acids separately from bases
- Keep calcium separate from phosphates/sulfates
- Have MSDS sheets available

### Mixing Protocol for Two-Part System

**Making Final Solution (100 Liters):**

**Equipment Needed:**
- 100 L reservoir
- Measuring container (1 L graduated)
- Stir stick or pump for mixing
- pH/EC meters

**Procedure:**

1. **Fill reservoir with water**
   - Use 80-90 L initially
   - Leave room for stock solutions
   - Temperature: 18-22°C ideal

2. **Add Part A**
   - Measure 1000 ml Part A stock (for 100x)
   - Add to reservoir
   - Mix thoroughly
   - Wait 5 minutes

3. **Add Part B**
   - Measure 1000 ml Part B stock
   - Add to reservoir
   - Mix thoroughly
   - Wait 5 minutes

4. **Bring to final volume**
   - Add water to 100 L mark
   - Mix thoroughly

5. **Check and adjust**
   - Test EC (should be 1.8-2.2 for general purpose)
   - Test pH (will likely be 5.5-6.5)
   - Adjust pH if needed
   - Final check after 30 minutes (allows equilibration)

**Never:** Mix Part A and Part B concentrates directly together!

---

## 6. pH Adjustment

### pH Adjusters

**To Lower pH:**

| Product | Formula | Notes |
|---------|---------|-------|
| Phosphoric Acid | H₃PO₄ | Also adds P, preferred |
| Nitric Acid | HNO₃ | Also adds N, use 50-67% solution |
| Sulfuric Acid | H₂SO₄ | Also adds S, very strong, use carefully |
| Citric Acid | C₆H₈O₇ | Organic option, less stable |

**To Raise pH:**

| Product | Formula | Notes |
|---------|---------|-------|
| Potassium Hydroxide | KOH | Also adds K, preferred |
| Potassium Carbonate | K₂CO₃ | Also adds K, gentler |
| Calcium Hydroxide | Ca(OH)₂ | Adds Ca, can precipitate |

### Adjustment Procedure

**Always Add Gradually:**

1. Test current pH
2. Calculate needed change
3. Start with small addition (1-2 ml per 100 L)
4. Mix thoroughly
5. Wait 15-30 minutes
6. Retest
7. Repeat if needed

**Buffering:**
- Solutions will drift initially
- Stabilizes after 24-48 hours
- Recheck and adjust after stabilization
- Regular use trains you on amounts needed

---

## 7. Recipe Modification

### Adapting for Different Crops

**Leafy Greens - Reduce EC, Lower K:**
```
N:  150 ppm (reduce from 180)
P:  40 ppm (reduce from 50)
K:  200 ppm (reduce from 280)
Ca: 150 ppm
Mg: 45 ppm
```

**Fruiting Crops - Increase K, P:**
```
N:  180 ppm (vegetative) → 150 ppm (fruiting)
P:  60 ppm (increase from 50)
K:  350 ppm (increase from 280)
Ca: 200 ppm (increase from 160)
Mg: 60 ppm (increase from 50)
```

**Strategy:**
- Calculate new amounts for changed elements
- Adjust stock solution concentrations
- Or: Use different dilution rates of existing stocks
- Or: Make supplemental additions to reservoir

---

## 8. EC and PPM Calculations

### Understanding Measurements

**EC (Electrical Conductivity):**
- Measured in mS/cm or μS/cm
- 1 mS/cm = 1000 μS/cm
- Measures total dissolved salts
- Does not identify specific nutrients

**TDS (Total Dissolved Solids):**
- Measured in ppm
- Calculated from EC
- Conversion factor varies (0.5, 0.64, or 0.7)

**Conversions:**
```
TDS (ppm) = EC (μS/cm) × conversion factor

Example with EC = 2000 μS/cm (2.0 mS/cm):
- 0.5 factor: 2000 × 0.5 = 1000 ppm
- 0.64 factor: 2000 × 0.64 = 1280 ppm
- 0.7 factor: 2000 × 0.7 = 1400 ppm

Know your meter's conversion factor!
```

### Target EC by Crop

| Crop Type | EC Range (mS/cm) |
|-----------|------------------|
| Lettuce | 1.0-1.4 |
| Herbs (most) | 1.2-1.8 |
| Leafy Greens | 1.4-2.0 |
| Tomatoes (veg) | 2.0-3.0 |
| Tomatoes (fruit) | 3.0-5.0 |
| Peppers | 2.0-3.5 |
| Cucumbers | 1.8-2.5 |

---

## 9. Troubleshooting

### Problem: Precipitate Forming

**Cause:** Calcium mixed with phosphate or sulfate

**Visual:** Cloudy solution, white sediment

**Solution:**
- Filter out if possible
- Discard and remix (if severe)
- Ensure proper two-part separation

**Prevention:**
- Always keep Part A and Part B separate until final mix
- Never add calcium to Part B
- Add stocks to dilute solution, not to each other

### Problem: pH Won't Stabilize

**Cause:** Insufficient buffering, alkaline water

**Solution:**
- Add pH down incrementally
- Test source water alkalinity
- May need more frequent adjustment initially
- Consider RO water for difficult source water

### Problem: EC Too High

**Cause:** Too much stock added, water evaporation

**Solution:**
- Dilute with water
- Calculate new EC: EC₁V₁ = EC₂V₂

**Example:**
- Current: 3.0 mS/cm at 100 L
- Target: 2.0 mS/cm
- 3.0 × 100 = 2.0 × V₂
- V₂ = 150 L
- Add 50 L water

### Problem: EC Too Low

**Cause:** Insufficient stock added, calculation error

**Solution:**
- Add more stock proportionally
- Or: Add individual salts to adjust
- Recheck calculations

### Problem: Micronutrient Deficiency Despite Formula

**Cause:** pH wrong, chelate breakdown, precipitation

**Solution:**
- Check pH first (most common)
- Verify chelate type appropriate for pH
- Check stock solution age
- Mix fresh micronutrient stock

---

## 10. Commercial Formulations

### Understanding Pre-Mix Fertilizers

**Advantages:**
- Convenient
- Pre-balanced
- Quality controlled
- Less error-prone
- No precipitation concerns

**Disadvantages:**
- More expensive
- Less customizable
- Unknown exact composition
- May include unnecessary additives

**Common Brands:**
- MasterBlend
- General Hydroponics Flora Series
- Dyna-Gro
- Jack's Nutrients
- Chem-Gro

### Supplementing Commercial Formulas

**Common Needs:**
- Extra CalMag for RO water
- Additional iron
- Crop-specific K boost
- pH adjusters

**Approach:**
- Use commercial as base
- Test to identify gaps
- Add individual salts as needed
- More cost-effective than buying different formulas

---

## 11. Cost Analysis

### Ingredient Cost Comparison

**Example: 1000 Liters of Nutrient Solution**

**DIY Formulation:**
- Calcium Nitrate: 1 kg @ $3/kg = $3.00
- Potassium Nitrate: 0.6 kg @ $4/kg = $2.40
- MKP: 0.2 kg @ $5/kg = $1.00
- Epsom Salt: 0.5 kg @ $2/kg = $1.00
- Micronutrient blend: $2.00
- **Total: ~$9.40 per 1000 L**

**Commercial Pre-Mix:**
- Typical cost: $25-50 per 1000 L

**Savings:** 50-80% with DIY formulation

**Trade-off:** Time and knowledge required

---

## 12. Key Takeaways

1. **Two-part systems prevent precipitation**
   - Keep calcium separate
   - Mix stocks into water, not together

2. **Accurate calculations are essential**
   - Know salt composition
   - Account for all nutrients provided
   - Double-check math

3. **Stock solutions save time**
   - 100x good for small systems
   - Proper storage extends life
   - Dark bottles for micronutrients

4. **Safety matters**
   - Proper PPE
   - Ventilation
   - Chemical storage
   - Emergency procedures

5. **Customize for crops**
   - Base formulations are starting points
   - Adjust based on crop and stage
   - Monitor and refine

6. **pH and EC go hand-in-hand**
   - Both affect nutrient availability
   - Both need regular monitoring
   - Adjust gradually

7. **Quality ingredients matter**
   - Food/agriculture grade
   - Proper purity
   - Appropriate chelates

---

## Next Module

**Module 7: pH Management & Nutrient Availability** - Deep dive into pH's critical role in nutrient availability, buffering systems, and maintaining optimal ranges.

---

*EcoFusion Academy - Course 202: Advanced Nutrient Management - Module 6*
