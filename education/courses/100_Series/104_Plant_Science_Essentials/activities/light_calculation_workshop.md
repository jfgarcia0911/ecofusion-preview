# Workshop: Light Calculations for Growers
## Course 104: Plant Science Essentials

---

## Workshop Overview

| Field | Details |
|-------|---------|
| **Duration** | 30-45 minutes |
| **Difficulty** | Beginner-Intermediate |
| **Points** | 10 |
| **Materials** | Calculator, this worksheet |

---

## Learning Objectives

By completing this workshop, you will:
- Calculate Daily Light Integral (DLI) from PPFD and photoperiod
- Determine required PPFD to meet crop DLI targets
- Apply the inverse square law to predict light intensity changes
- Make data-driven decisions about lighting

---

## Part 1: DLI Fundamentals

### The DLI Formula

```
    DLI = PPFD × Hours × 0.0036

    Where:
    DLI = Daily Light Integral (mol/m²/day)
    PPFD = Photosynthetic Photon Flux Density (μmol/m²/s)
    Hours = Photoperiod (hours of light per day)
    0.0036 = Conversion factor
```

### Practice Calculations

**Problem 1:** Calculate the DLI for each scenario:

| Scenario | PPFD | Hours | Your DLI Calculation |
|----------|------|-------|----------------------|
| A | 200 μmol/m²/s | 16 hours | DLI = |
| B | 400 μmol/m²/s | 12 hours | DLI = |
| C | 350 μmol/m²/s | 18 hours | DLI = |
| D | 600 μmol/m²/s | 14 hours | DLI = |

**Show your work for Problem A:**

DLI = _____ × _____ × 0.0036 = _____ mol/m²/day

---

### Check Your Answers

| Scenario | Answer |
|----------|--------|
| A | 11.52 mol/m²/day |
| B | 17.28 mol/m²/day |
| C | 22.68 mol/m²/day |
| D | 30.24 mol/m²/day |

---

## Part 2: Matching DLI to Crop Requirements

### Crop DLI Reference

| Crop | Minimum DLI | Optimal DLI |
|------|-------------|-------------|
| Lettuce | 10 | 12-17 |
| Basil | 12 | 15-20 |
| Tomatoes | 20 | 25-35 |
| Peppers | 18 | 20-30 |
| Strawberries | 12 | 15-25 |

### Problem Set

**Problem 2:** Is each lighting setup adequate for the crop?

| Setup | PPFD | Hours | DLI | Crop | Adequate? (Y/N) |
|-------|------|-------|-----|------|-----------------|
| A | 250 | 16 | ___ | Lettuce | ___ |
| B | 300 | 14 | ___ | Tomatoes | ___ |
| C | 400 | 18 | ___ | Basil | ___ |
| D | 350 | 12 | ___ | Peppers | ___ |

**Your calculations:**

Setup A: DLI = _________ (Lettuce needs 12-17) → ___

Setup B: DLI = _________ (Tomatoes need 25-35) → ___

Setup C: DLI = _________ (Basil needs 15-20) → ___

Setup D: DLI = _________ (Peppers need 20-30) → ___

---

## Part 3: Reverse Calculations

### Finding Required PPFD

Sometimes you know your target DLI and photoperiod, and need to find the required PPFD.

```
    Rearranged formula:

    PPFD = DLI ÷ (Hours × 0.0036)
```

**Problem 3:** Calculate the required PPFD for each scenario:

| Crop | Target DLI | Photoperiod | Required PPFD |
|------|------------|-------------|---------------|
| Lettuce | 15 | 16 hours | ___ μmol/m²/s |
| Tomatoes | 30 | 14 hours | ___ μmol/m²/s |
| Basil | 18 | 18 hours | ___ μmol/m²/s |

**Show your work:**

Lettuce: PPFD = 15 ÷ (16 × 0.0036) = 15 ÷ _____ = _____ μmol/m²/s

Tomatoes: PPFD = 30 ÷ (14 × 0.0036) = 30 ÷ _____ = _____ μmol/m²/s

Basil: PPFD = 18 ÷ (18 × 0.0036) = 18 ÷ _____ = _____ μmol/m²/s

---

## Part 4: The Inverse Square Law

### Concept

Light intensity decreases with the SQUARE of the distance from the source.

```
    Inverse Square Law:

    Intensity at new distance   (Original distance)²
    ───────────────────────── = ──────────────────────
    Intensity at original       (New distance)²


    Or simplified:

    New PPFD = Original PPFD × (D₁/D₂)²

    Where D₁ = original distance, D₂ = new distance
```

### Practical Examples

**Problem 4:** A light provides 600 PPFD at 12 inches from the canopy. Calculate the PPFD at different heights:

| Distance | Calculation | PPFD |
|----------|-------------|------|
| 12 inches (original) | Given | 600 |
| 18 inches | 600 × (12/18)² = 600 × ___ = | ___ |
| 24 inches | 600 × (12/24)² = 600 × ___ = | ___ |
| 6 inches | 600 × (12/6)² = 600 × ___ = | ___ |

**Key insight:** Doubling the distance quarters the intensity!

---

**Problem 5:** Your light is currently at 24 inches, providing 400 PPFD. You want 600 PPFD. How close should the light be?

This requires working backwards:

Ratio needed: 600/400 = 1.5

Distance factor: √1.5 = 1.22

New distance: 24 ÷ 1.22 = _____ inches

---

## Part 5: Real-World Application Problems

**Problem 6: The New Grow Room**

You're setting up a lettuce production room:
- Canopy area: 4m × 3m = 12 m²
- Target DLI: 15 mol/m²/day
- Desired photoperiod: 16 hours

**Questions:**

a) What PPFD do you need at canopy level?

PPFD = _____ ÷ (_____ × 0.0036) = _____ μmol/m²/s

b) If you're choosing lights rated at 2.5 μmol/J efficiency and you need this PPFD uniformly over 12m², what's the minimum PPF (total output) required from your lighting system?

Total PPF needed = _____ μmol/m²/s × _____ m² = _____ μmol/s

c) Each light fixture produces 800 μmol/s PPF. How many fixtures minimum?

Number of fixtures = _____ ÷ _____ = _____ fixtures

---

**Problem 7: Optimizing Existing Setup**

A tomato grower has these current conditions:
- PPFD at canopy: 450 μmol/m²/s
- Photoperiod: 14 hours
- Current DLI: _____ mol/m²/day (calculate)
- Target DLI: 30 mol/m²/day

**Questions:**

a) Calculate the current DLI:

DLI = _____ × _____ × 0.0036 = _____ mol/m²/day

b) The grower can either increase PPFD OR increase photoperiod. Calculate both options:

**Option 1:** Keep 14-hour photoperiod, increase PPFD
Required PPFD = 30 ÷ (14 × 0.0036) = _____ μmol/m²/s

**Option 2:** Keep 450 PPFD, increase photoperiod
Required hours = 30 ÷ (450 × 0.0036) = _____ hours

c) Which option would you recommend and why?

________________________________________________
________________________________________________

---

**Problem 8: Light Uniformity**

You measure PPFD at 9 points in your grow area:

```
    ┌───────┬───────┬───────┐
    │  350  │  500  │  360  │
    ├───────┼───────┼───────┤
    │  480  │  600  │  490  │
    ├───────┼───────┼───────┤
    │  340  │  520  │  350  │
    └───────┴───────┴───────┘
```

a) Calculate the average PPFD:

Sum: _____ ÷ 9 = _____ μmol/m²/s

b) What is the range (highest - lowest)?

Range: _____ - _____ = _____ μmol/m²/s

c) Calculate uniformity percentage:

Uniformity = (Lowest ÷ Highest) × 100 = (___ ÷ ___) × 100 = ____%

d) Is this acceptable uniformity? (Target: >75%)

_______________________________________________

e) What could improve uniformity?

_______________________________________________

---

## Part 6: Synthesis Questions

**Question 1:** A grower says: "I'll just run my lights 24 hours to maximize growth." Using your knowledge of photosynthesis and DLI, explain the problems with this approach.

________________________________________________
________________________________________________
________________________________________________
________________________________________________

**Question 2:** Why might a grower choose to use higher PPFD with a shorter photoperiod rather than lower PPFD with a longer photoperiod to achieve the same DLI?

________________________________________________
________________________________________________
________________________________________________

**Question 3:** Your plants are stretching despite adequate DLI. What spectrum-related factor might be causing this, and what would you adjust?

________________________________________________
________________________________________________

---

## Answer Key

### Part 1
| Scenario | DLI |
|----------|-----|
| A | 11.52 |
| B | 17.28 |
| C | 22.68 |
| D | 30.24 |

### Part 2
| Setup | DLI | Adequate? |
|-------|-----|-----------|
| A | 14.4 | Yes |
| B | 15.1 | No (needs 25-35) |
| C | 25.9 | Yes (exceeds need) |
| D | 15.1 | No (needs 20-30) |

### Part 3
- Lettuce: 260 μmol/m²/s
- Tomatoes: 595 μmol/m²/s
- Basil: 278 μmol/m²/s

### Part 4
| Distance | PPFD |
|----------|------|
| 18" | 267 |
| 24" | 150 |
| 6" | 2400 |

### Part 5
New distance: 19.6 inches (≈20")

### Part 6
- PPFD needed: 260 μmol/m²/s
- Total PPF: 3120 μmol/s
- Fixtures: 4 (minimum)

### Part 7
- Current DLI: 22.7
- Option 1: 595 PPFD
- Option 2: 18.5 hours

### Part 8
- Average: 443 μmol/m²/s
- Range: 260
- Uniformity: 56.7% (Not acceptable)

---

## Grading Rubric

| Section | Points |
|---------|--------|
| Part 1: Basic DLI calculations | 2 |
| Part 2: Crop matching | 2 |
| Part 3: Reverse calculations | 2 |
| Part 4: Inverse square law | 2 |
| Parts 5-6: Application & synthesis | 2 |
| **Total** | **10** |

---

*EcoFusion Academy - Course 104: Plant Science Essentials*
*Workshop: Light Calculations for Growers*
