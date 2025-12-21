# Succession Planting Calculator
## Course 204: Crop Production Planning

---

## Purpose

This cheatsheet provides quick-reference formulas and tables for calculating seeding requirements, planting intervals, and production schedules for succession planting in CEA operations.

---

## Core Formula: Seeds Needed Per Planting

```
╔════════════════════════════════════════════════════════════════════════╗
║                    MASTER SEEDING CALCULATION                          ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  Seeds to Plant = Target Harvest ÷ [(1 - Crop Loss %) ×               ║
║                   Transplant Success % × Germination %] × Buffer       ║
║                                                                        ║
║  OR step-by-step:                                                      ║
║                                                                        ║
║  Step 1: Plants at harvest = Target Harvest                            ║
║  Step 2: Plants at transplant = Plants at harvest ÷ (1 - Crop Loss %) ║
║  Step 3: Seedlings needed = Plants at transplant ÷ Transplant Success %║
║  Step 4: Seeds needed = Seedlings needed ÷ Germination %              ║
║  Step 5: Final quantity = Seeds needed × Buffer multiplier            ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

---

## Standard Percentages by Experience Level

| Factor | New Operation | Established | Mature Operation |
|--------|---------------|-------------|------------------|
| **Germination Rate** | 85-90% | 90-92% | 92-95% |
| **Transplant Success** | 88-92% | 92-95% | 95-97% |
| **Crop Loss** | 8-12% | 5-8% | 3-5% |
| **Safety Buffer** | 15-20% | 10-15% | 10% |

---

## Quick Reference: Common Crop Calculations

### Butterhead Lettuce

**Standard Parameters:**
- Germination: 92%
- Transplant Success: 94%
- Crop Loss: 6%
- Buffer: 10%

**Seeds per 100 Heads Target:**

| Target Harvest | Seeds to Plant |
|----------------|----------------|
| 50 heads | 68 seeds |
| 100 heads | 135 seeds |
| 150 heads | 203 seeds |
| 200 heads | 270 seeds |
| 250 heads | 338 seeds |
| 300 heads | 405 seeds |
| 400 heads | 540 seeds |
| 500 heads | 675 seeds |

---

### Loose Leaf Lettuce

**Standard Parameters:**
- Germination: 90%
- Transplant Success: 95%
- Crop Loss: 5%
- Buffer: 10%

**Seeds per 100 Heads Target:**

| Target Harvest | Seeds to Plant |
|----------------|----------------|
| 50 heads | 64 seeds |
| 100 heads | 128 seeds |
| 150 heads | 193 seeds |
| 200 heads | 257 seeds |
| 250 heads | 321 seeds |
| 300 heads | 385 seeds |
| 400 heads | 513 seeds |
| 500 heads | 641 seeds |

---

### Basil (by weight)

**Standard Parameters:**
- Germination: 88%
- Transplant Success: 90%
- Crop Loss: 8%
- Buffer: 15%
- Yield per plant: 0.3-0.5 lb per harvest

**Seeds for Target Weekly Harvest:**

| Target (lbs/week) | Plants Needed | Seeds to Plant |
|-------------------|---------------|----------------|
| 10 lbs | 25 plants | 45 seeds |
| 20 lbs | 50 plants | 90 seeds |
| 30 lbs | 75 plants | 135 seeds |
| 40 lbs | 100 plants | 180 seeds |
| 50 lbs | 125 plants | 225 seeds |

*Note: Basil is multi-harvest; plants produce 4-10 harvests over 4-6 months*

---

### Arugula (by weight)

**Standard Parameters:**
- Germination: 85%
- Transplant Success: 92%
- Crop Loss: 7%
- Buffer: 10%
- Yield per plant: 0.08-0.12 lb per head

**Seeds for Target Weekly Harvest:**

| Target (lbs/week) | Plants Needed (avg 0.1 lb/plant) | Seeds to Plant |
|-------------------|----------------------------------|----------------|
| 20 lbs | 200 plants | 320 seeds |
| 30 lbs | 300 plants | 480 seeds |
| 40 lbs | 400 plants | 640 seeds |
| 50 lbs | 500 plants | 800 seeds |

---

## Planting Interval Calculator

### Determining Seeding Frequency

```
Seeding Interval = Desired Harvest Interval

For continuous weekly harvest:
→ Seed every 7 days (weekly)

For continuous bi-weekly harvest:
→ Seed every 14 days (bi-weekly)

For specific days only (e.g., Tuesday/Friday):
→ Seed on same days earlier (crop cycle length ago)
```

---

### Number of Batches in System

```
Batches in System = Crop Cycle (days) ÷ Seeding Interval (days)

Example: 42-day crop with weekly seeding
→ 42 ÷ 7 = 6 batches always in system
```

**Common Batch Counts:**

| Crop Cycle | Weekly Seeding | Bi-Weekly Seeding |
|------------|----------------|-------------------|
| 21 days | 3 batches | 1-2 batches |
| 28 days | 4 batches | 2 batches |
| 35 days | 5 batches | 2-3 batches |
| 42 days | 6 batches | 3 batches |
| 49 days | 7 batches | 3-4 batches |
| 56 days | 8 batches | 4 batches |
| 70 days | 10 batches | 5 batches |

---

## Space Requirements Calculator

### Growing Space Needed

```
Total Space Required = (Weekly Harvest Target × Batches in System)
                       ÷ Plants per Square Foot
```

**Example: Butterhead Lettuce**
- Weekly target: 300 heads
- Crop cycle: 42 days (6 batches)
- Spacing: 8" × 8" (2.25 plants/sq ft)

```
Total plants in system = 300 × 6 = 1,800 plants
Space needed = 1,800 ÷ 2.25 = 800 sq ft
```

---

### Propagation Space Calculator

```
Propagation Space = Production Space × 0.10 to 0.15

Minimum: 10% of production space
Recommended: 12-15% of production space
```

**Quick Reference:**

| Production Space | Min Propagation (10%) | Recommended (12-15%) |
|------------------|-----------------------|----------------------|
| 500 sq ft | 50 sq ft | 60-75 sq ft |
| 1,000 sq ft | 100 sq ft | 120-150 sq ft |
| 2,000 sq ft | 200 sq ft | 240-300 sq ft |
| 5,000 sq ft | 500 sq ft | 600-750 sq ft |
| 10,000 sq ft | 1,000 sq ft | 1,200-1,500 sq ft |

---

## Annual Turns Calculator

```
╔════════════════════════════════════════════════════════════════════════╗
║                        ANNUAL TURNS FORMULA                            ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  Annual Turns = 365 days ÷ Crop Cycle (days)                          ║
║                                                                        ║
║  Annual Production per Square Foot =                                   ║
║      Plants per sq ft × Annual Turns × Harvest per Plant              ║
║                                                                        ║
║  Annual Revenue per Square Foot =                                      ║
║      Annual Production per sq ft × Price per Unit                     ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

---

### Common Crop Cycles & Annual Turns

**Summer Cycles (Optimal Conditions):**

| Crop | Summer Cycle | Annual Turns | Winter Cycle | Annual Turns |
|------|--------------|--------------|--------------|--------------|
| Loose Leaf Lettuce | 35 days | 10.4 | 45 days | 8.1 |
| Butterhead Lettuce | 42 days | 8.7 | 56 days | 6.5 |
| Arugula | 28 days | 13.0 | 35 days | 10.4 |
| Bok Choy | 35 days | 10.4 | 45 days | 8.1 |
| Basil | 60 days* | 6.1* | 75 days* | 4.9* |
| Kale | 45 days | 8.1 | 60 days | 6.1 |

*Basil: First harvest cycle; subsequent harvests every 2-3 weeks

---

## Seasonal Adjustment Factors

### Crop Cycle Multipliers

```
ADJUST CYCLE LENGTH BY SEASON:

Summer (June-Aug):     1.0× (baseline)
Spring/Fall (Mar-May, Sep-Nov):  1.15× (+15%)
Winter (Dec-Feb):      1.30× (+30%)

Example: 40-day summer cycle becomes:
→ Spring/Fall: 40 × 1.15 = 46 days
→ Winter: 40 × 1.30 = 52 days
```

---

### Seeding Adjustment for Seasonal Production

To maintain consistent weekly harvest through seasons:

```
OPTION 1: Increase Space
Winter space needed = Summer space × 1.30

OPTION 2: Reduce Production
Winter harvest = Summer harvest × 0.77 (23% reduction)

OPTION 3: Hybrid (Most Common)
Increase space 15% + Reduce production 15%
```

---

## Succession Planting Schedule Template

### Weekly Seeding Calendar

```
┌────────────────────────────────────────────────────────────────────┐
│  CROP: _______________    CYCLE: _____ days    TARGET: ___/week   │
│  SEEDS/WEEK: _____    BATCHES IN SYSTEM: _____                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                    │
│  Week  │  Seed      │  Transplant │  Harvest    │  Notes          │
│  ───────────────────────────────────────────────────────────────  │
│   1    │ Batch 01   │  -          │  -          │                 │
│   2    │ Batch 02   │  -          │  -          │                 │
│   3    │ Batch 03   │  Batch 01   │  -          │                 │
│   4    │ Batch 04   │  Batch 02   │  -          │                 │
│   5    │ Batch 05   │  Batch 03   │  -          │                 │
│   6    │ Batch 06   │  Batch 04   │  -          │                 │
│   7    │ Batch 07   │  Batch 05   │  Batch 01   │  First harvest! │
│   8    │ Batch 08   │  Batch 06   │  Batch 02   │  Steady state   │
│        │            │             │             │                 │
│  PATTERN REPEATS: Seed-Transplant-Harvest every week              │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Quick Calculation Worksheet

**Use this for any crop:**

```
CROP: _____________________

1. WEEKLY TARGET: __________ units

2. GERMINATION RATE: ________%

3. TRANSPLANT SUCCESS: _______%

4. CROP LOSS: _______%

5. BUFFER MULTIPLIER: _______ (1.10 = 10%)

CALCULATION:
Step A: ________ ÷ (1 - ____) = ________ (adjust for crop loss)
Step B: ________ ÷ ________ = ________ (adjust for transplant)
Step C: ________ ÷ ________ = ________ (adjust for germination)
Step D: ________ × ________ = ________ (add buffer)

FINAL: SEED ________ SEEDS PER WEEK

────────────────────────────────────────────────────────

CROP CYCLE: ________ days

SEEDING INTERVAL: ________ days (usually 7 for weekly)

BATCHES IN SYSTEM: ________ ÷ ________ = ________

SPACE PLANNING:
Plants per sq ft: ________
Total plants: ________ × ________ = ________
Space needed: ________ ÷ ________ = ________ sq ft
```

---

## Common Mistakes to Avoid

### Calculation Errors:

**❌ Mistake:** Forgetting to compound the loss factors
**✓ Correct:** Must divide sequentially through each loss stage

**❌ Mistake:** Using germination rate as a multiplier
**✓ Correct:** Divide by germination rate (90% = 0.90, so divide by 0.90)

**❌ Mistake:** Applying buffer to target instead of final calculation
**✓ Correct:** Buffer is the last step, applied to total seeds needed

---

### Scheduling Errors:

**❌ Mistake:** Seeding irregularly (skipping weeks)
**✓ Correct:** Must seed on exact schedule every single week

**❌ Mistake:** Not adjusting for seasons
**✓ Correct:** Extend crop cycles in winter, adjust seeding quantities

**❌ Mistake:** Undercounting batches in system
**✓ Correct:** Include propagation period in total cycle time

---

## Pro Tips

### Optimization Strategies:

1. **Track your actual percentages** - Generic numbers are starting points; use your real data
2. **Seed on same day/time weekly** - Consistency improves uniformity
3. **Buffer varies by crop** - Use higher buffers for challenging crops
4. **Account for holidays** - Seed extra before vacation periods
5. **Test new varieties small** - Don't commit full production until proven

### Space Efficiency:

1. **Dense propagation** - Pack seedlings tight, spread out after transplant
2. **Rolling harvests** - Don't harvest entire batch at once if possible
3. **Interplanting** - Fast crops between slow crops
4. **Vertical space** - Use height for vining crops

---

*EcoFusion Academy - Course 204 Cheatsheet*
*Laminate and keep this near your seeding station*
