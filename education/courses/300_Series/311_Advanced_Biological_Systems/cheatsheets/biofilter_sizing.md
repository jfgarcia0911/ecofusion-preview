# Biofilter Sizing Guide
## Course 311: Advanced Biological Systems

---

## Quick Sizing Formula

```
BASIC BIOFILTER SIZING

Total Ammonia Nitrogen (TAN) Production:
────────────────────────────────────────
TAN (g/day) = Feed (g/day) × Protein% × 0.092

Example: 1,000g feed × 35% protein × 0.092 = 32.2g TAN/day


Biofilter Surface Area Required:
────────────────────────────────────────
Surface Area (m²) = TAN (g/day) ÷ Nitrification Rate (g/m²/day)

Nitrification rates vary by media and conditions:
• Conservative: 0.5-1.0 g TAN/m²/day
• Moderate: 1.0-2.0 g TAN/m²/day
• Optimal: 2.0-4.0 g TAN/m²/day

Example: 32.2g TAN ÷ 1.5 g/m²/day = 21.5 m² surface area needed
```

---

## Media Surface Area

| Media Type | Specific Surface Area (SSA) | Volume for 100 m² |
|------------|----------------------------|-------------------|
| Bio-balls (1.5") | 200-300 m²/m³ | 330-500 L |
| K1 Kaldnes | 500 m²/m³ | 200 L |
| K3 Kaldnes | 800 m²/m³ | 125 L |
| Biocenosis baskets | 150-200 m²/m³ | 500-670 L |
| Lava rock (1-2") | 200-400 m²/m³ | 250-500 L |
| Expanded clay (LECA) | 300-400 m²/m³ | 250-330 L |
| Matala pads | 200-600 m²/m³ | 170-500 L |
| Bead filters | 500-800 m²/m³ | 125-200 L |

---

## Sizing by Fish Biomass

### Quick Reference Table

| Fish Biomass (lbs) | Feed/Day (lbs) | TAN/Day (g) | Min Surface Area (m²) |
|-------------------|----------------|-------------|----------------------|
| 100 | 2-3 | 30-45 | 15-30 |
| 250 | 5-7.5 | 75-115 | 40-75 |
| 500 | 10-15 | 150-230 | 75-150 |
| 1,000 | 20-30 | 300-460 | 150-300 |
| 2,500 | 50-75 | 750-1,150 | 375-750 |
| 5,000 | 100-150 | 1,500-2,300 | 750-1,500 |

*Assumptions: 2-3% body weight feeding rate, 35% protein feed*

---

## MBBR Sizing

```
MOVING BED BIOFILM REACTOR (MBBR) SIZING

Volume Calculation:
───────────────────
MBBR Volume = TAN Load (g/day) ÷ (SSA × Fill% × Nitrification Rate)

Where:
• SSA = Specific Surface Area of media (m²/m³)
• Fill% = Media fill percentage (typically 40-60%)
• Nitrification Rate = 0.5-3.0 g/m²/day

Example:
TAN Load: 100 g/day
K1 Media: 500 m²/m³
Fill: 50%
Nitrification Rate: 1.5 g/m²/day

Volume = 100 ÷ (500 × 0.50 × 1.5) = 0.27 m³ = 71 gallons
```

---

## Flow Rate Requirements

### Minimum Flow Through Biofilter

| Filter Type | Minimum Turnover | Optimal Turnover |
|-------------|-----------------|------------------|
| Trickling filter | 1× per hour | 2-4× per hour |
| Submerged bed | 2× per hour | 4-6× per hour |
| MBBR | 2× per hour | 4-8× per hour |
| Fluidized bed | 4× per hour | 8-12× per hour |

### Flow Calculation

```
Flow Rate (GPH) = System Volume (gal) × Turnover Rate

Example: 1,000 gallon system × 4 turnovers = 4,000 GPH through filter
```

---

## Aeration Requirements

```
OXYGEN DEMAND FOR NITRIFICATION

O2 Required = TAN Oxidized × 4.6 mg O2/mg TAN

Example: 100g TAN × 4.6 = 460g O2 needed per day

Air Flow Rate (CFM):
───────────────────
At standard conditions, air provides ~1.2 mg O2/L/hr per CFM
Account for 5-10% transfer efficiency in typical diffusers

Minimum DO in biofilter: >4 mg/L (preferably >6 mg/L)
```

---

## Design Safety Factors

| Application | Safety Factor | Notes |
|-------------|---------------|-------|
| Home/hobby | 1.5-2× | Extra capacity for errors |
| Commercial | 1.25-1.5× | Balance cost and reliability |
| High-density | 2× | Critical systems |
| Variable feeding | 2× | Handle feeding peaks |

---

## Biofilter Sizing Worksheet

```
BIOFILTER SIZING WORKSHEET

1. FISH LOAD
   Total fish biomass: _________ lbs
   Feeding rate: _________% body weight/day
   Daily feed: _________ lbs = _________ grams

2. TAN PRODUCTION
   Feed protein %: _________%
   TAN = Feed (g) × Protein% × 0.092
   TAN = _________ g/day

3. SURFACE AREA REQUIRED
   Design nitrification rate: _________ g/m²/day
   Safety factor: _________
   Surface area = TAN ÷ Rate × Safety Factor
   Surface area = _________ m²

4. MEDIA SELECTION
   Media type: _________
   SSA: _________ m²/m³
   Volume required = Surface Area ÷ SSA
   Volume = _________ m³ = _________ gallons

5. BIOFILTER SIZING
   Filter dimensions: _________ × _________ × _________
   Filter volume: _________ gallons
   Adequate? YES / NO

6. FLOW REQUIREMENTS
   System volume: _________ gallons
   Turnover rate: _________×/hour
   Flow rate needed: _________ GPH
```

---

*EcoFusion Academy - Course 311 Cheatsheet*
