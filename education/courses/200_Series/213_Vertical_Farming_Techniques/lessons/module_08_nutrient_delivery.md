# Module 8: Nutrient Delivery Systems
## Course 213: Vertical Farming Techniques

---

## Module Overview

| Field | Details |
|-------|---------|
| **Module Number** | 8 of 12 |
| **Duration** | 60 minutes |
| **Format** | Lecture + Lab Exercise |
| **Materials** | Nutrient formulations, EC/pH meters |

---

## Learning Objectives

1. **Formulate** hydroponic nutrient solutions for different crops
2. **Monitor** and adjust pH and EC levels
3. **Design** fertigation systems for vertical farms
4. **Troubleshoot** nutrient deficiencies and toxicities
5. **Optimize** nutrient delivery for maximum efficiency

---

## Lesson Content

### 8.1 Hydroponic Nutrition Fundamentals

#### Essential Elements

```
PLANT NUTRIENT REQUIREMENTS

MACRONUTRIENTS (Large quantities):
Primary:
├─ Nitrogen (N): 150-250 ppm - Vegetative growth, chlorophyll
├─ Phosphorus (P): 30-50 ppm - Roots, flowering, energy
└─ Potassium (K): 150-300 ppm - Overall health, disease resistance

Secondary:
├─ Calcium (Ca): 150-200 ppm - Cell walls, structural
├─ Magnesium (Mg): 40-75 ppm - Chlorophyll center
└─ Sulfur (S): 50-100 ppm - Proteins, amino acids

MICRONUTRIENTS (Trace amounts):
├─ Iron (Fe): 2-5 ppm - Chlorophyll synthesis
├─ Manganese (Mn): 0.5-1 ppm - Enzyme activation
├─ Boron (B): 0.3-0.5 ppm - Cell division, flowering
├─ Zinc (Zn): 0.3-0.5 ppm - Growth hormones
├─ Copper (Cu): 0.05-0.2 ppm - Photosynthesis
├─ Molybdenum (Mo): 0.05-0.1 ppm - Nitrogen metabolism
└─ Chlorine (Cl): 0.5-1 ppm - Osmosis, photosynthesis
```

#### Nutrient Solution Formulation

**Two-Part Concentrate System (Most Common):**

```
PART A (Calcium-based):
├─ Calcium Nitrate: 60-70%
├─ Iron DTPA: 5-10%
└─ Micronutrients: 1-5%

PART B (Phosphate/Sulfate-based):
├─ Potassium Nitrate: 20-30%
├─ Monopotassium Phosphate: 10-15%
├─ Magnesium Sulfate: 20-25%
├─ Manganese Sulfate: 2-3%
├─ Boric Acid: 1-2%
├─ Zinc Sulfate: 1-2%
└─ Other micronutrients: <1%

WHY SEPARATE?
- Prevents precipitation (Ca + Sulfate/Phosphate = solid)
- Mix separately into main reservoir
- Typical dilution: 100:1 (concentrate to water)
```

### 8.2 Crop-Specific Formulations

#### Lettuce Formula Example

```
LETTUCE NUTRIENT RECIPE (ppm in final solution)

VEGETATIVE STAGE (Days 1-21):
├─ N: 180 ppm (higher for leaf growth)
├─ P: 40 ppm
├─ K: 200 ppm
├─ Ca: 170 ppm
├─ Mg: 50 ppm
├─ S: 65 ppm
├─ Fe: 3.0 ppm
├─ Mn: 0.8 ppm
├─ B: 0.4 ppm
├─ Zn: 0.3 ppm
├─ Cu: 0.1 ppm
└─ Mo: 0.05 ppm

EC Target: 1.8-2.2 mS/cm
pH Target: 5.8-6.2

FINISHING STAGE (Days 22-28):
├─ Reduce N to 150 ppm (less leafy, more compact)
├─ Increase K to 230 ppm (quality, shelf life)
├─ Maintain others
└─ EC: 1.6-2.0 mS/cm (slightly lower)
```

#### Herb Formulations

```
BASIL (High Nutrition for Flavor):
├─ N: 200-220 ppm
├─ K: 250-280 ppm (flavor compounds)
├─ Ca: 180 ppm
├─ EC: 2.0-2.5 mS/cm
└─ pH: 5.8-6.3

CILANTRO (Moderate Nutrition):
├─ N: 150-180 ppm
├─ K: 180-220 ppm
├─ EC: 1.6-2.0 mS/cm
└─ pH: 6.0-6.5

STRAWBERRIES (Fruiting Focus):
├─ N: 120-150 ppm (lower for fruiting)
├─ P: 50-70 ppm (higher for flowers/fruit)
├─ K: 200-250 ppm (fruit quality)
├─ Ca: 160-200 ppm (prevent deficiencies)
├─ EC: 1.8-2.2 mS/cm
└─ pH: 5.8-6.2
```

---

### 8.3 pH Management

#### pH Importance

```
pH EFFECTS ON NUTRIENT AVAILABILITY

pH   3    4    5    6    7    8    9
     │    │    │    │    │    │    │
N    ░░░░░░░░░░████████████░░░░░░░░
P    ░░░░░░░████████░░░░░░░░░░░░░░░
K    ░░░░░░░░████████████████░░░░░░
Ca   ░░░░░░░░░░░░████████████████░░
Mg   ░░░░░░░░░░░████████████████░░░
Fe   ████████████░░░░░░░░░░░░░░░░░░
Mn   ██████████████░░░░░░░░░░░░░░░░
B    ░░░░░░░░████████████░░░░░░░░░░
Zn   ████████████░░░░░░░░░░░░░░░░░░
Cu   ████████████░░░░░░░░░░░░░░░░░░

     │    │    │    │    │    │    │
OPTIMAL ZONE: 5.5-6.5 for most crops
             (All nutrients available)

Below 5.0: Micronutrient toxicity risk (Fe, Mn, Zn)
Above 7.0: Micronutrient deficiencies (Fe especially)
```

#### pH Adjustment

**pH Too High (>6.5):**
- Add acid (pH Down)
- Options: Phosphoric acid, Nitric acid, Sulfuric acid
- Phosphoric acid most common (adds P)
- Dosage: ~0.5-2 mL/gallon to drop 1 pH unit

**pH Too Low (<5.5):**
- Add base (pH Up)
- Options: Potassium hydroxide, Potassium carbonate
- Dosage: ~0.5-1.5 mL/gallon to raise 1 pH unit

**Automated pH Control:**
```
pH CONTROL SYSTEM

pH Sensor → Controller → Dosing Pumps
                          ├─ Acid Pump (pH too high)
                          └─ Base Pump (pH too low)

Control Logic:
IF pH > 6.3 THEN dose acid (0.1 mL increments)
IF pH < 5.7 THEN dose base (0.1 mL increments)
WAIT 5 minutes, remeasure, repeat if needed

Target: pH 5.8-6.2 (±0.2 tolerance)
```

---

### 8.4 EC/TDS Management

#### Understanding EC

```
ELECTRICAL CONDUCTIVITY (EC)

EC measures dissolved salts (nutrients) in water

Units:
├─ mS/cm (milliSiemens per centimeter)
├─ μS/cm (microSiemens) = mS/cm × 1000
└─ TDS (ppm) = EC × 500-700 (conversion factor)

EC Ranges by Crop:
├─ Microgreens: 0.8-1.2 mS/cm (low nutrition)
├─ Lettuce: 1.6-2.2 mS/cm (moderate)
├─ Herbs (basil): 2.0-2.5 mS/cm (moderate-high)
├─ Tomatoes: 2.5-3.5 mS/cm (high)
└─ Strawberries: 1.8-2.2 mS/cm (moderate)

BASELINE (Water Supply):
- Well water: 0.2-0.8 mS/cm
- City water: 0.1-0.4 mS/cm
- RO water: 0.0-0.1 mS/cm
- Add nutrients on top of baseline
```

#### EC Adjustment

**EC Too Low:**
- Add more nutrient concentrate
- Maintain A:B ratio (usually 1:1)
- Example: Add 10 mL each of Part A and Part B per 10 gallons

**EC Too High:**
- Dilute with fresh water
- Or drain and refill reservoir
- Risk of nutrient imbalance if too high

**Automated EC Control:**
```
Target EC: 2.0 mS/cm (lettuce)
Actual EC: 1.7 mS/cm

Controller:
├─ Calculate deficit: 0.3 mS/cm
├─ Dose nutrients (both A & B simultaneously)
├─ Typical: 1 mL A+B per gallon raises EC by ~0.1 mS/cm
├─ Dose: 3 mL A+B per gallon
└─ Verify after 15 minutes
```

---

### 8.5 Fertigation System Design

#### Reservoir Sizing

```
RESERVOIR CAPACITY CALCULATION

Growing Area: 10,000 sq ft
System Type: NFT
Solution Depth: 5 mm (0.2 inches)
Channel Area: 7,000 sq ft (70% of floor)

Active Solution Volume:
7,000 sq ft × 0.2 in × 0.0833 ft/in = 117 cubic ft
117 cu ft × 7.48 gal/cu ft = 875 gallons

Recommended Reservoir Size:
Active volume + 50% buffer = 1,300 gallons
Round up: 1,500-gallon tank

General Rule: 0.1-0.2 gallons per sq ft growing area
```

#### Injection Systems

**Venturi Injector (Simple, Low-Cost):**
```
Main Water Line → Venturi Injector → Growing System
                       ↑
                 Concentrate Tank
                 (suction via pressure differential)

Pros: No power, reliable, simple
Cons: Fixed ratio, less precise
Cost: $50-200
Best for: Small systems (<2,000 sq ft)
```

**Dosing Pumps (Professional):**
```
Reservoir → Sensor (pH/EC) → Controller
                                  ↓
                        Dosing Pumps (A, B, pH Up, pH Down)
                                  ↓
                            Mix Tank → Growing System

Pros: Precise, automated, flexible
Cons: Higher cost, requires programming
Cost: $2,000-10,000
Best for: Commercial operations (>2,000 sq ft)
```

---

### 8.6 Monitoring and Maintenance

#### Daily Monitoring Schedule

```
DAILY NUTRIENT MANAGEMENT TASKS

MORNING (Before lights on):
├─ Check reservoir level (top off if needed)
├─ Measure pH (handheld meter)
├─ Measure EC
├─ Visual inspection (color, smell, debris)
└─ Record data (spreadsheet or software)

AFTERNOON (Mid-day):
├─ Re-check pH/EC if morning was out of range
├─ Adjust if needed
└─ Monitor automated system alerts

WEEKLY:
├─ Reservoir change (complete or partial)
├─ Clean filters
├─ Calibrate pH/EC meters
├─ Inspect pumps, lines for clogs
└─ Send sample for lab analysis (optional)

MONTHLY:
├─ Deep clean reservoir (scrub, sanitize)
├─ Replace filters
├─ Verify sensor calibration with standards
└─ Review nutrient costs and usage
```

#### Sensor Calibration

```
pH METER CALIBRATION (Weekly)

Equipment:
├─ pH 4.0 buffer solution
├─ pH 7.0 buffer solution
└─ pH 10.0 buffer solution (optional)

Process:
1. Rinse electrode with distilled water
2. Place in pH 7.0 buffer → calibrate to 7.0
3. Rinse thoroughly
4. Place in pH 4.0 buffer → calibrate to 4.0
5. Rinse and store in storage solution

Frequency: Weekly (daily use), Monthly (occasional)

EC METER CALIBRATION (Weekly)

Equipment:
├─ Calibration solution (e.g., 1.413 mS/cm)

Process:
1. Rinse electrode
2. Place in calibration solution
3. Adjust meter to match solution value
4. Rinse and ready for use

Both: Replace electrodes annually or when calibration drifts
```

---

### 8.7 Troubleshooting Deficiencies

#### Visual Diagnosis

```
COMMON NUTRIENT DEFICIENCIES

NITROGEN (N) DEFICIENCY:
├─ Symptoms: Yellowing of older leaves, stunted growth
├─ Progression: Starts at bottom, moves up
├─ Fix: Increase overall nutrient concentration
└─ Prevention: Maintain EC in range

PHOSPHORUS (P) DEFICIENCY:
├─ Symptoms: Purple/red tints, dark green leaves, slow growth
├─ Progression: Older leaves first
├─ Fix: Check pH (must be 5.5-6.5), increase P
└─ Note: Often pH-related, not actual deficiency

POTASSIUM (K) DEFICIENCY:
├─ Symptoms: Brown edges on leaves, weak stems
├─ Progression: Older leaves, edges curl
├─ Fix: Increase K (often add potassium sulfate)
└─ Prevention: Balanced formulation

CALCIUM (Ca) DEFICIENCY:
├─ Symptoms: Tip burn (lettuce), blossom end rot (tomatoes)
├─ Progression: New growth affected (immobile nutrient)
├─ Fix: Increase Ca, ensure good airflow, maintain moisture
└─ Prevention: Proper Ca levels + environment

MAGNESIUM (Mg) DEFICIENCY:
├─ Symptoms: Interveinal chlorosis (yellow between veins)
├─ Progression: Older leaves first
├─ Fix: Add Epsom salts (magnesium sulfate)
└─ Prevention: Balanced formula

IRON (Fe) DEFICIENCY:
├─ Symptoms: Yellowing of new growth, veins stay green
├─ Progression: Upper leaves first
├─ Fix: Lower pH to 5.5-6.0, add chelated iron
└─ Prevention: Maintain proper pH
```

---

### 8.8 Organic and Alternative Nutrients

#### Organic Hydroponics

```
ORGANIC-APPROVED NUTRIENT SOURCES

Challenges:
├─ Organic materials (fish emulsion, compost tea)
├─ Contain complex compounds, not pure ions
├─ Can clog systems, promote microbial growth
├─ Difficult to control EC precisely
└─ Certification path complex (USDA Organic)

Common Organic Inputs:
├─ Fish hydrolysate (N, trace elements)
├─ Kelp extract (K, micronutrients, growth hormones)
├─ Bone meal (P, Ca)
├─ Rock phosphate (P)
└─ Composted manure tea (broad spectrum)

System Requirements:
├─ Larger filters (clogging prevention)
├─ Beneficial bacteria addition (break down organics)
├─ More frequent reservoir changes
├─ Monitoring for pathogens
└─ Often used in hybrid systems (some media bed)

Commercial Viability:
├─ Growing interest but limited adoption
├─ Premium pricing potential (organic label)
├─ Technical challenges remain
└─ Research ongoing
```

---

### 8.9 Water Quality Considerations

#### Source Water Testing

```
CRITICAL WATER PARAMETERS

MEASURE BEFORE STARTING:
├─ EC/TDS: Baseline salts (want <0.4 mS/cm)
├─ pH: Starting point (adjust as needed)
├─ Hardness (Ca, Mg): May need RO if >200 ppm
├─ Alkalinity: Affects pH stability
├─ Chlorine/Chloramine: Toxic to plants (>0.5 ppm)
├─ Iron: Can stain, precipitate (want <0.3 ppm)
├─ Sodium: Toxic in excess (want <50 ppm)
└─ Pathogens: Test if using well water

WATER TREATMENT OPTIONS:
├─ Carbon Filter: Remove chlorine, organics ($500-2K)
├─ Reverse Osmosis: Remove all dissolved solids ($2-10K)
├─ UV Sterilization: Kill pathogens ($1-5K)
└─ Water Softener: Remove Ca/Mg (usually NOT recommended)

RO Water (Pros/Cons):
✓ Clean slate, precise nutrient control
✓ Eliminate unpredictable elements
✗ Expensive (equipment + waste water)
✗ Removes beneficial minerals
✗ Requires complete remineralization
```

---

### 8.10 Key Takeaways

```
MODULE 8 SUMMARY

┌────────────────────────────────────────────┐
│                                            │
│ NUTRIENT FORMULATION: Two-part system     │
│ standard (Part A = Ca, Part B = P/S/K)    │
│                                            │
│ pH RANGE: 5.8-6.2 for most crops          │
│ (Critical for nutrient availability)      │
│                                            │
│ EC TARGETS: 1.6-2.2 mS/cm for lettuce,    │
│ 2.0-2.5 for herbs, adjust by crop         │
│                                            │
│ MONITORING: Daily pH/EC checks essential  │
│ Weekly reservoir changes recommended       │
│                                            │
│ AUTOMATION: pH/EC dosing pumps save       │
│ labor and improve consistency              │
│                                            │
└────────────────────────────────────────────┘
```

---

## Vocabulary

| Term | Definition |
|------|------------|
| **EC** | Electrical Conductivity - measure of dissolved nutrients |
| **TDS** | Total Dissolved Solids (ppm) |
| **ppm** | Parts per million - nutrient concentration |
| **Chelated** | Nutrient bound to organic molecule (stays available) |
| **Fertigation** | Fertilizer delivery through irrigation |
| **Macronutrient** | Required in large amounts (N, P, K, Ca, Mg, S) |
| **Micronutrient** | Required in trace amounts (Fe, Mn, B, Zn, Cu, Mo) |
| **Buffer** | Solution resisting pH change |
| **Interveinal Chlorosis** | Yellowing between leaf veins |
| **Tip Burn** | Brown, dead tissue at leaf tips (often Ca deficiency) |

---

## Quiz Preview

**Quiz 8: Nutrient Delivery** covers formulation, pH/EC management, and troubleshooting.

**See: quizzes/quiz_08.md**

---

## Next Module Preview

**Module 9: Workflow and Labor Optimization**

We'll explore efficient facility layouts, task management, and labor productivity strategies.

---

*Module 8 of 12 | Course 213: Vertical Farming Techniques*
*EcoFusion Academy*
