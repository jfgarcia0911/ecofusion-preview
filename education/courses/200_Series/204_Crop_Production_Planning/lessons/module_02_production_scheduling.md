# Module 2: Production Scheduling
## Course 204: Crop Production Planning

---

## Learning Objectives

By the end of this module, you will be able to:
1. Develop succession planting schedules for continuous harvest
2. Calculate seeding requirements with accuracy buffers
3. Create production calendars that coordinate multiple crops
4. Adjust schedules for seasonal growth rate variations
5. Implement buffer strategies to ensure order fulfillment

---

## Introduction

A well-designed production schedule is the difference between feast-or-famine harvests and consistent, reliable output. While crop selection determines what you grow, production scheduling determines when and how much—ensuring you can meet customer demands week after week, month after month.

This module teaches you to create sophisticated production schedules that account for crop cycles, germination rates, losses, and seasonal variations while maintaining the flexibility to respond to market changes.

---

## Understanding Succession Planting

### The Concept

Succession planting means seeding crops at regular intervals (usually weekly) to achieve continuous, staggered harvests rather than a single large harvest.

```
╔════════════════════════════════════════════════════════════════════════╗
║              SUCCESSION PLANTING VS. SINGLE PLANTING                   ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  SINGLE PLANTING (Avoid for commercial)                                ║
║  ═══════════════════════════════════                                   ║
║                                                                        ║
║  Week:  1    2    3    4    5    6    7    8    9    10               ║
║         │    │    │    │    │    │    │    │    │    │                ║
║  [SEED ALL]─────[GROW]─────[HARVEST ALL]                              ║
║                                      │                                 ║
║                                      ↓                                 ║
║                               Too much at once!                        ║
║                               Can't sell it all                        ║
║                               Waste & lost revenue                     ║
║                                                                        ║
║  ────────────────────────────────────────────────────────────────      ║
║                                                                        ║
║  SUCCESSION PLANTING (Best practice)                                   ║
║  ════════════════════════════════                                      ║
║                                                                        ║
║  Week:  1    2    3    4    5    6    7    8    9    10               ║
║         │    │    │    │    │    │    │    │    │    │                ║
║  Batch 1 [S]──────────────[H]                                         ║
║  Batch 2     [S]──────────────[H]                                     ║
║  Batch 3         [S]──────────────[H]                                 ║
║  Batch 4             [S]──────────────[H]                             ║
║  Batch 5                 [S]──────────────[H]                         ║
║                                                                        ║
║  Result: Weekly harvest of consistent quantity!                       ║
║          Steady revenue                                                ║
║          Manageable workload                                           ║
║          Fresh product always available                                ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Key Benefits

**For Revenue:**
- Consistent weekly income vs. boom-bust cycle
- Ability to maintain regular customer relationships
- Reduced waste from over-production

**For Operations:**
- Predictable, manageable daily workload
- Better labor planning and efficiency
- Systematic processes and SOPs

**For Quality:**
- Always harvesting at optimal maturity
- Fresh product continuously available
- Better inventory management

---

## Calculating Seeding Requirements

### The Complete Formula

To determine how many seeds to plant each week, work backwards from your target harvest:

```
╔════════════════════════════════════════════════════════════════════════╗
║                    SEEDING CALCULATION FRAMEWORK                       ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  Step 1: START WITH TARGET HARVEST                                     ║
║  ═══════════════════════════════                                       ║
║  How many units do you need to harvest per week?                       ║
║  (Based on customer orders + retail targets)                           ║
║                                                                        ║
║  Step 2: ACCOUNT FOR CROP LOSS                                         ║
║  ════════════════════════                                              ║
║  Plants needed at transplant = Target ÷ (1 - Crop loss rate)          ║
║  Typical crop loss: 5-10% (disease, pests, quality issues)            ║
║                                                                        ║
║  Step 3: ACCOUNT FOR TRANSPLANT SUCCESS                                ║
║  ════════════════════════════════════                                  ║
║  Seedlings needed = Plants at transplant ÷ (Transplant success rate)  ║
║  Typical transplant success: 90-95%                                    ║
║                                                                        ║
║  Step 4: ACCOUNT FOR GERMINATION RATE                                  ║
║  ═══════════════════════════════════════                               ║
║  Seeds to plant = Seedlings needed ÷ (Germination rate)               ║
║  Germination rates: 85-95% depending on crop and seed quality         ║
║                                                                        ║
║  Step 5: ADD SAFETY BUFFER                                             ║
║  ═══════════════════════                                               ║
║  Final seed quantity = Seeds calculated × Buffer multiplier           ║
║  Recommended buffer: 1.10 (10% extra)                                  ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Worked Example: Butterhead Lettuce

```
TARGET: 300 heads of butterhead lettuce per week

Given data:
• Germination rate: 92%
• Transplant success: 94%
• Crop loss rate: 6%
• Buffer: 10%

CALCULATION:

Step 1: Target harvest
300 heads

Step 2: Account for crop loss (6%)
300 ÷ (1 - 0.06) = 300 ÷ 0.94 = 319 plants at transplant

Step 3: Account for transplant success (94%)
319 ÷ 0.94 = 339 seedlings needed

Step 4: Account for germination (92%)
339 ÷ 0.92 = 368 seeds theoretically needed

Step 5: Add 10% safety buffer
368 × 1.10 = 405 seeds

ANSWER: Plant 405 seeds per week to achieve 300 harvestable heads
```

### Multi-Crop Calculation Template

| Crop | Target/Week | Crop Loss | Transplant % | Germ % | Buffer | Seeds/Week |
|------|-------------|-----------|--------------|--------|--------|------------|
| Butterhead Lettuce | 300 | 6% | 94% | 92% | 10% | 405 |
| Loose Leaf Mix | 200 | 5% | 95% | 90% | 10% | 256 |
| Basil | 50 lbs | 8% | 90% | 88% | 15% | (calc) |
| Arugula | 40 lbs | 7% | 92% | 85% | 10% | (calc) |

---

## Creating Production Calendars

### Calendar Structure

A production calendar tracks every critical date for every crop batch:

```
┌────────────────────────────────────────────────────────────────────────┐
│              WEEKLY PRODUCTION CALENDAR TEMPLATE                       │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  CROP: Butterhead Lettuce                                              │
│  CYCLE: 6 weeks (42 days) - 2 weeks propagation, 4 weeks production   │
│  QUANTITY: 300 heads per week                                          │
│                                                                        │
│  Week │ Seed        │ Transplant  │ Harvest     │ Notes               │
│  ──────────────────────────────────────────────────────────────────   │
│   1   │ Batch 01    │ -           │ -           │ Start cycle         │
│       │ (405 seeds) │             │             │                     │
│   2   │ Batch 02    │ -           │ -           │                     │
│       │ (405 seeds) │             │             │                     │
│   3   │ Batch 03    │ Batch 01    │ -           │                     │
│       │ (405 seeds) │ (380 plugs) │             │                     │
│   4   │ Batch 04    │ Batch 02    │ -           │                     │
│       │ (405 seeds) │ (380 plugs) │             │                     │
│   5   │ Batch 05    │ Batch 03    │ -           │                     │
│       │ (405 seeds) │ (380 plugs) │             │                     │
│   6   │ Batch 06    │ Batch 04    │ -           │                     │
│       │ (405 seeds) │ (380 plugs) │             │                     │
│   7   │ Batch 07    │ Batch 05    │ Batch 01    │ First harvest!      │
│       │ (405 seeds) │ (380 plugs) │ (~315 heads)│                     │
│   8   │ Batch 08    │ Batch 06    │ Batch 02    │ Continuous now      │
│       │ (405 seeds) │ (380 plugs) │ (~315 heads)│                     │
│                                                                        │
│  STEADY STATE: 6 batches always in production                          │
│  • 2 in propagation (weeks 1-2 of cycle)                               │
│  • 4 in grow-out (weeks 3-6 of cycle)                                  │
│  • 1 harvested each week                                               │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Multi-Crop Coordination

Managing multiple crops simultaneously requires careful coordination:

```
╔════════════════════════════════════════════════════════════════════════╗
║           INTEGRATED WEEKLY TASK CALENDAR - Week 15 Example            ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  MONDAY                                                                ║
║  ══════                                                                ║
║  Seeding:                                                              ║
║    □ Butterhead lettuce - Batch 15 (405 seeds)                         ║
║    □ Loose leaf mix - Batch 15 (256 seeds)                             ║
║    □ Arugula - Batch 15 (320 seeds)                                    ║
║  Transplanting:                                                        ║
║    □ Butterhead - Batch 13 to production (380 plants)                  ║
║    □ Basil - Batch 11 to production (95 plants)                        ║
║                                                                        ║
║  TUESDAY                                                               ║
║  ═══════                                                               ║
║  Harvesting:                                                           ║
║    □ Butterhead - Batch 09 (target 300+ heads)                         ║
║    □ Loose leaf - Batch 09 (target 200+ heads)                         ║
║  Post-Harvest:                                                         ║
║    □ Wash, package, cool harvested crops                               ║
║    □ Quality inspection and grading                                    ║
║                                                                        ║
║  WEDNESDAY                                                             ║
║  ═════════                                                             ║
║  Seeding:                                                              ║
║    □ Basil - Batch 15 (105 seeds)                                      ║
║  Harvesting:                                                           ║
║    □ Arugula - Batch 10 (target weight)                                ║
║    □ Basil - Batch 09 (target weight)                                  ║
║  Maintenance:                                                          ║
║    □ Clean/sanitize propagation areas                                  ║
║                                                                        ║
║  THURSDAY                                                              ║
║  ════════                                                              ║
║  Transplanting:                                                        ║
║    □ Loose leaf - Batch 13 to production                               ║
║    □ Arugula - Batch 13 to production                                  ║
║  System Maintenance:                                                   ║
║    □ Water quality testing                                             ║
║    □ Nutrient adjustments                                              ║
║                                                                        ║
║  FRIDAY                                                                ║
║  ══════                                                                ║
║  Harvesting:                                                           ║
║    □ Any special orders                                                ║
║  Planning:                                                             ║
║    □ Review next week's schedule                                       ║
║    □ Order supplies for following week                                 ║
║    □ Update production records                                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

---

## Seasonal Adjustments

### Growth Rate Variations

Even in controlled environments, natural light variations affect growth rates:

```
╔════════════════════════════════════════════════════════════════════════╗
║              SEASONAL CROP CYCLE ADJUSTMENTS                           ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  CROP: Butterhead Lettuce                                              ║
║  BASE CYCLE: 42 days (summer)                                          ║
║                                                                        ║
║  Season        DLI      Temp    Cycle      Adjustment                  ║
║  ══════════════════════════════════════════════════════════════════   ║
║  Summer        18-20    70°F    42 days    Baseline                    ║
║  (Jun-Aug)     High     Ideal                                          ║
║                                                                        ║
║  Spring/Fall   14-16    65°F    48 days    +6 days                     ║
║  (Mar-May,     Medium   Cool              +14% cycle time              ║
║   Sep-Nov)                                                             ║
║                                                                        ║
║  Winter        10-12    68°F*   56 days    +14 days                    ║
║  (Dec-Feb)     Low      Heated            +33% cycle time              ║
║                         *supplemental                                  ║
║                         light needed                                   ║
║                                                                        ║
║  IMPLICATIONS:                                                         ║
║  ─────────────                                                         ║
║  Summer: 8.7 turns/year                                                ║
║  Spring/Fall: 7.6 turns/year  (-13% production)                        ║
║  Winter: 6.5 turns/year  (-25% production)                             ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

### Scheduling Strategies for Seasons

```
OPTION 1: MAINTAIN QUANTITY (Increase Space)
═══════════════════════════════════════════

Winter requires 25% more space for same output
• Allocate additional bays/zones for winter
• Reduce trial crops to maintain core production
• Accept higher cost per unit

OPTION 2: REDUCE QUANTITY (Maintain Space)
══════════════════════════════════════════

Accept 25% lower production in winter
• Adjust customer commitments seasonally
• Price premium for winter production
• Focus on highest-margin crops

OPTION 3: HYBRID APPROACH (Most Common)
═══════════════════════════════════════

Partial space increase + partial quantity reduction
• Add 10-15% space
• Reduce production 10-15%
• Balance cost vs. revenue impact
```

---

## Buffer Strategies

### Types of Buffers

```
┌────────────────────────────────────────────────────────────────────────┐
│                     PRODUCTION BUFFER STRATEGIES                       │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  1. SEEDING BUFFER (10-15%)                                            │
│  ═══════════════════════                                               │
│  Plant more seeds than calculated minimum                              │
│  Accounts for: germination variation, transplant losses                │
│  Implementation: Built into seed calculation                           │
│                                                                        ║
│  2. EXTRA BATCH BUFFER                                                 │
│  ═════════════════════════                                             │
│  Maintain 1-2 extra batches beyond normal rotation                     │
│  Accounts for: emergency orders, quality issues, crop failures         │
│  Space requirement: +15-20% growing area                               │
│                                                                        │
│  3. TIMING BUFFER                                                      │
│  ═══════════════════                                                   │
│  Schedule harvests 1-2 days earlier than needed                        │
│  Accounts for: slower growth, quality grading, delays                  │
│  Implementation: Shift calendar 2-3 days early                         │
│                                                                        │
│  4. REPLACEMENT PLANTING                                               │
│  ═══════════════════════════                                           │
│  Keep fast-growing crops ready for emergency replacement               │
│  Accounts for: catastrophic batch loss, unexpected demand              │
│  Best crops: Arugula (21 days), loose leaf (28 days), microgreens     │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

### Buffer Sizing Guidelines

| Operation Type | Seeding Buffer | Extra Batches | Space Buffer |
|----------------|----------------|---------------|--------------|
| New Operation (<1 year) | 15-20% | 2 batches | 20-25% |
| Established (1-3 years) | 10-15% | 1-2 batches | 15-20% |
| Mature (3+ years) | 10% | 1 batch | 10-15% |

---

## Production Planning Software and Tools

### Spreadsheet-Based System

Basic production calendar can be managed with spreadsheets:

```
EXCEL/GOOGLE SHEETS STRUCTURE
══════════════════════════════

Sheet 1: CROP DATABASE
─────────────────────
Crop name | Germ days | Transplant days | DTM | Germ % | etc.

Sheet 2: SEEDING CALCULATIONS
──────────────────────────────
Crop | Target | Losses | Seeds needed | Actual planted | Date

Sheet 3: WEEKLY CALENDAR
────────────────────────
Week | Seed tasks | Transplant tasks | Harvest tasks | Notes

Sheet 4: BATCH TRACKING
───────────────────────
Batch ID | Crop | Seed date | Trans date | Harvest date | Quantity

Sheet 5: PERFORMANCE METRICS
────────────────────────────
Crop | Planned | Actual | Variance | Issues
```

### Digital Production Tools

```
╔════════════════════════════════════════════════════════════════════════╗
║               PRODUCTION PLANNING SOFTWARE OPTIONS                     ║
╠════════════════════════════════════════════════════════════════════════╣
║                                                                        ║
║  SPREADSHEETS (Excel, Google Sheets)                                   ║
║  Cost: Free-Low  │  Complexity: Medium  │  Best for: Small operations ║
║  ✓ Customizable                                                        ║
║  ✓ Low/no cost                                                         ║
║  ✗ Manual entry                                                        ║
║  ✗ Limited automation                                                  ║
║                                                                        ║
║  FARMLOG / AGRIWARE                                                    ║
║  Cost: $50-200/mo │ Complexity: Medium │ Best for: Mid-size farms     ║
║  ✓ Purpose-built for agriculture                                      ║
║  ✓ Mobile apps                                                         ║
║  ✓ Inventory tracking                                                  ║
║  ✗ Monthly subscription                                                ║
║                                                                        ║
║  CROPTRACKER / FARM MANAGEMENT PRO                                     ║
║  Cost: $100-500/mo │ Complexity: High │ Best for: Large operations    ║
║  ✓ Comprehensive features                                              ║
║  ✓ Integration capabilities                                            ║
║  ✓ Advanced reporting                                                  ║
║  ✗ Higher cost                                                         ║
║  ✗ Steeper learning curve                                              ║
║                                                                        ║
║  CUSTOM DATABASE (Airtable, FileMaker)                                 ║
║  Cost: $20-100/mo │ Complexity: Medium-High │ Best for: Tech-savvy    ║
║  ✓ Highly customizable                                                 ║
║  ✓ Automation possible                                                 ║
║  ✗ Requires setup time                                                 ║
║  ✗ Technical skills needed                                             ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝
```

**Recommendation for Starting:**
1. Begin with spreadsheets (free, flexible)
2. Develop your processes and data needs
3. Evaluate specialized software after 6-12 months
4. Select tools that match your complexity and budget

---

## Practical Scheduling Examples

### Example 1: Small Operation (2,000 sq ft)

```
WEEKLY PRODUCTION SCHEDULE
══════════════════════════

Core Crops:
• Butterhead Lettuce: 150 heads/week (200 seeds, 3 batches in system)
• Loose Leaf Mix: 100 heads/week (135 seeds, 2-3 batches in system)
• Basil: 20 lbs/week (45 seeds, 5 batches in system)

Total space allocation:
• Lettuce (both types): 800 sq ft (40%)
• Basil: 400 sq ft (20%)
• Rotation crops: 600 sq ft (30%)
• Buffer/trials: 200 sq ft (10%)

Weekly labor (seeding/transplanting/harvesting):
Monday: 3 hours (seeding day)
Tuesday: 5 hours (harvesting)
Wednesday: 2 hours (transplanting)
Thursday: 4 hours (harvesting + maintenance)
Friday: 2 hours (planning + cleanup)
```

### Example 2: Medium Operation (5,000 sq ft)

```
MULTI-CROP WEEKLY SCHEDULE
══════════════════════════

Monday:
□ Seed: Butterhead (405), Loose leaf (256), Romaine (180)
□ Transplant: Basil batch 11 (95 plants)
□ Quality checks on all in-system crops

Tuesday:
□ Harvest: Butterhead batch 9 (300 heads target)
□ Harvest: Loose leaf batch 9 (200 heads target)
□ Post-harvest processing and packaging

Wednesday:
□ Seed: Basil (105), Arugula (320), Specialty greens (varies)
□ Transplant: Butterhead batch 13, Loose leaf batch 13
□ System maintenance and water quality

Thursday:
□ Harvest: Arugula batch 10, Basil batch 9
□ Transplant: Arugula batch 13
□ Sanitization of harvest/pack areas

Friday:
□ Specialty crop harvesting
□ Batch tracking updates
□ Next week planning
□ Supply ordering
```

---

## Module Summary

### Key Takeaways

1. **Succession planting is essential** - Weekly seeding creates continuous harvests and stable revenue

2. **Calculate backwards from target** - Start with desired harvest, work back through losses and germination

3. **Include buffers at every stage** - 10-15% seed buffer, extra batches, timing flexibility

4. **Coordinate multiple crops carefully** - Create integrated calendars to manage workload

5. **Account for seasonal variations** - Growth rates change with light and temperature even in controlled environments

6. **Use appropriate tools** - Start simple with spreadsheets, upgrade as complexity increases

7. **Build in flexibility** - Maintain buffer space and fast-growing backup crops

8. **Track performance** - Record actual vs. planned to improve future schedules

### Practical Application

Before proceeding to Module 3:
- [ ] Calculate seeding requirements for your top 3 crops
- [ ] Create a 12-week production calendar for one crop
- [ ] Identify seasonal adjustments needed for your location
- [ ] Design your buffer strategy (seeding %, extra batches, space)
- [ ] Set up a basic spreadsheet for production tracking

---

## Check Your Understanding

1. What is succession planting and why is it important for commercial operations?

2. Calculate: You need 200 heads of lettuce per week. Germination is 90%, transplant success is 95%, and crop loss is 5%. With a 10% buffer, how many seeds should you plant weekly?

3. How many batches of a 6-week crop cycle are in the system during steady-state production?

4. Why do crop cycles lengthen in winter even in controlled environment facilities?

5. What are the four types of production buffers and when is each used?

6. What percentage of your growing space should be reserved as buffer space?

7. At what point should an operation consider moving from spreadsheets to specialized production software?

---

## Next Module Preview

**Module 3: Propagation Systems** will cover:
- Propagation methods and equipment
- Seedling production for succession planting
- Germination optimization
- Transplant protocols
- Propagation space requirements

---

*EcoFusion Academy - Course 204, Module 2*
