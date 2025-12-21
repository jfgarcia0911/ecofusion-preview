# Nutrient Formulation Calculator & Reference

**Course 202: Advanced Nutrient Management**

---

## Fertilizer Salt Composition Reference

### Macronutrient Sources

| Salt Name | Formula | Element % | Provides | Use |
|-----------|---------|-----------|----------|-----|
| **Calcium Nitrate** | Ca(NO₃)₂·4H₂O | 11.9% N, 17.0% Ca | Calcium + Nitrogen | Part A |
| **Potassium Nitrate** | KNO₃ | 13.8% N, 38.7% K | Potassium + Nitrogen | Either part |
| **Monopotassium Phosphate (MKP)** | KH₂PO₄ | 22.7% P, 28.7% K | Phosphorus + Potassium | Part B |
| **Magnesium Sulfate (Epsom)** | MgSO₄·7H₂O | 9.8% Mg, 13.0% S | Magnesium + Sulfur | Part B |
| **Potassium Sulfate** | K₂SO₄ | 44.9% K, 18.4% S | Potassium + Sulfur | Part B |
| **Ammonium Nitrate** | NH₄NO₃ | 35.0% N | Nitrogen only | Caution - acidifying |

### Micronutrient Sources (Chelated)

| Chelate | % Element | Stable pH Range | Best For |
|---------|-----------|-----------------|----------|
| Fe-EDTA (25% Fe) | 25% Fe | 4.0-6.5 | Hydroponics |
| Fe-DTPA (10% Fe) | 10% Fe | 4.0-7.5 | Aquaponics, higher pH |
| Fe-EDDHA (6% Fe) | 6% Fe | 4.0-9.0 | High pH, aquaponics |
| Mn-EDTA (20% Mn) | 20% Mn | 4.0-6.5 | Standard |
| Zn-EDTA (20% Zn) | 20% Zn | 4.0-7.0 | Standard |
| Cu-EDTA (14% Cu) | 14% Cu | 4.0-7.0 | Standard |
| Boric Acid | 17.5% B | Wide range | All systems |
| Sodium Molybdate | 39.7% Mo | Wide range | All systems |

---

## Basic Formulation Math

### Formula: Calculate Salt Amount

```
Salt Amount (g/L) = Desired Element (mg/L) ÷ Element Fraction in Salt

Where:
- Desired Element = Target ppm (mg/L)
- Element Fraction = % composition as decimal (e.g., 17% = 0.17)
```

### Example Calculations

**Example 1: How much calcium nitrate to get 160 ppm Ca?**

```
Given:
- Target Ca: 160 ppm (mg/L)
- Calcium Nitrate: 17% Ca

Calculation:
Salt needed = 160 ÷ 0.17 = 941 mg/L = 0.941 g/L

Also provides:
- Nitrogen: 941 mg × 0.119 = 112 mg/L N (bonus!)
```

**Example 2: How much Epsom salt for 50 ppm Mg?**

```
Given:
- Target Mg: 50 ppm
- Epsom Salt (MgSO₄·7H₂O): 9.8% Mg

Calculation:
Salt needed = 50 ÷ 0.098 = 510 mg/L = 0.51 g/L

Also provides:
- Sulfur: 510 mg × 0.13 = 66 mg/L S (bonus!)
```

---

## Stock Solution Calculations

### Concentration Factor

**100x Stock:** 1 ml stock in 1 L final solution
**200x Stock:** 1 ml stock in 2 L final solution (or 0.5 ml/L)
**500x Stock:** 1 ml stock in 5 L final solution (or 0.2 ml/L)

### Making Stock Solutions

**Formula:**
```
Stock Concentration = Final Concentration × Concentration Factor

Example for 100x Part A (Calcium Nitrate):
- Final solution needs: 0.941 g/L calcium nitrate
- For 100x stock: 0.941 × 100 = 94.1 g/L of stock

For 10 L stock solution:
94.1 g/L × 10 L = 941 g calcium nitrate
```

### Dilution Calculations

**Formula:**
```
C₁V₁ = C₂V₂

Where:
C₁ = Initial concentration
V₁ = Initial volume
C₂ = Final concentration
V₂ = Final volume
```

**Example: Dilute 100x stock to make 100 L final solution**

```
Given:
- Stock is 100x concentration
- Want 100 L final solution

Calculation:
100x × V₁ = 1x × 100 L
V₁ = 100 L ÷ 100 = 1 L

Add 1 L of stock + 99 L water = 100 L final solution
```

---

## Complete Formulation Worksheet

### Target Nutrient Levels (General Purpose)

| Nutrient | Target (ppm) |
|----------|--------------|
| N | 180 |
| P | 50 |
| K | 280 |
| Ca | 160 |
| Mg | 50 |
| S | 80 |
| Fe | 3.0 |
| Mn | 0.8 |
| Zn | 0.4 |
| Cu | 0.1 |
| B | 0.4 |
| Mo | 0.05 |

### Step-by-Step Formulation

**PART A (Calcium):**

1. **Calcium Nitrate for Ca:**
   - Target: 160 ppm Ca
   - Ca(NO₃)₂·4H₂O = 17% Ca, 11.9% N
   - Amount: 160 ÷ 0.17 = **941 mg/L (0.941 g/L)**
   - Provides: 112 ppm N (941 × 0.119)
   - N remaining: 180 - 112 = 68 ppm

**PART B (Everything Else):**

2. **MKP for Phosphorus:**
   - Target: 50 ppm P
   - KH₂PO₄ = 22.7% P, 28.7% K
   - Amount: 50 ÷ 0.227 = **220 mg/L (0.22 g/L)**
   - Provides: 63 ppm K (220 × 0.287)
   - K remaining: 280 - 63 = 217 ppm

3. **Potassium Nitrate for K + remaining N:**
   - Need: 217 ppm K, 68 ppm N
   - KNO₃ = 38.7% K, 13.8% N
   - Based on K: 217 ÷ 0.387 = **561 mg/L (0.561 g/L)**
   - Provides: 77 ppm N (561 × 0.138)
   - Total N: 112 + 77 = 189 ppm ✓

4. **Epsom Salt for Magnesium:**
   - Target: 50 ppm Mg
   - MgSO₄·7H₂O = 9.8% Mg, 13% S
   - Amount: 50 ÷ 0.098 = **510 mg/L (0.51 g/L)**
   - Provides: 66 ppm S (510 × 0.13)

5. **Micronutrients (add to Part B):**
   - Fe-EDTA (25% Fe): 3.0 ÷ 0.25 = **12 mg/L**
   - Mn-EDTA (20% Mn): 0.8 ÷ 0.20 = **4 mg/L**
   - Zn-EDTA (20% Zn): 0.4 ÷ 0.20 = **2 mg/L**
   - Cu-EDTA (14% Cu): 0.1 ÷ 0.14 = **0.7 mg/L**
   - Boric Acid (17.5% B): 0.4 ÷ 0.175 = **2.3 mg/L**
   - Sodium Molybdate (39.7% Mo): 0.05 ÷ 0.397 = **0.12 mg/L**

### Final Recipe Summary (per liter)

**PART A:**
- Calcium Nitrate: 0.941 g

**PART B:**
- Potassium Nitrate: 0.561 g
- MKP: 0.220 g
- Epsom Salt: 0.510 g
- Fe-EDTA: 0.012 g
- Mn-EDTA: 0.004 g
- Zn-EDTA: 0.002 g
- Cu-EDTA: 0.0007 g
- Boric Acid: 0.0023 g
- Sodium Molybdate: 0.00012 g

---

## Scaling Recipes

### For 100 Liters Final Solution (1x)

**PART A:**
- Calcium Nitrate: 94.1 g

**PART B:**
- Potassium Nitrate: 56.1 g
- MKP: 22.0 g
- Epsom Salt: 51.0 g
- Micronutrients: (see above) × 100

### For 10 Liters of 100x Stock

**PART A Stock (10 L):**
- Calcium Nitrate: 941 g
- Dissolve in ~5 L water, bring to 10 L total

**PART B Stock (10 L):**
- Potassium Nitrate: 561 g
- MKP: 220 g
- Epsom Salt: 510 g
- Micronutrients: × 1000 (make separate 1000x micro stock)
- Dissolve in ~5 L water, bring to 10 L total

**Usage:** Add 10 ml Part A + 10 ml Part B per liter final solution

---

## Adjustment Formulas

### Increase Single Element

```
Amount to Add (g) = (Target ppm - Current ppm) × System Volume (L) ÷ (Element % in Salt × 1000)

Example: Increase K by 50 ppm in 1000 L system using K₂SO₄ (44.9% K)
Amount = (50 × 1000) ÷ (0.449 × 1000) = 111 g K₂SO₄
```

### EC Adjustment

**To Reduce EC by Dilution:**
```
Water to Add = Current Volume × [(Current EC ÷ Target EC) - 1]

Example: 100 L at 3.0 mS/cm, target 2.0 mS/cm
Water = 100 × [(3.0 ÷ 2.0) - 1] = 100 × 0.5 = 50 L
```

**To Increase EC:**
```
Add concentrated stock solution incrementally
Retest after each addition
Target increase of 0.2-0.3 mS/cm per addition
```

---

## Common Modifications

### Leafy Greens Formula

Reduce from general purpose:
- N: 150 ppm (↓)
- K: 200 ppm (↓)
- EC target: 1.2-1.6 mS/cm

### Fruiting Crops Formula

Increase from general purpose:
- P: 60 ppm (↑)
- K: 350 ppm (↑)
- Ca: 200 ppm (↑)
- EC target: 2.5-4.0 mS/cm

### Aquaponic Supplementation

Start with fish-provided base, add:
- Fe: 2-3 ppm weekly (Fe-DTPA or Fe-EDDHA)
- K: 50-100 ppm weekly (K₂SO₄ or K₂CO₃)
- Ca: 30-50 ppm bi-weekly (Ca(OH)₂)
- Mg: 20-30 ppm monthly (MgSO₄)

---

## Safety Notes

- **Always add acid to water, never water to acid**
- **Wear gloves and eye protection**
- **Mix Part A and Part B separately**
- **Store in labeled, sealed containers**
- **Keep records of all formulations**

---

*Use this calculator for custom formulations and adjustments!*

*EcoFusion Academy - Course 202: Advanced Nutrient Management*
