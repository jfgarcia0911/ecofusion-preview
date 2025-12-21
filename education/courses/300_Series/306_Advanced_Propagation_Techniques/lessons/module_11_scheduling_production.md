# Module 11: Scheduling and Production Planning

**Course:** 306 - Advanced Propagation Techniques
**Duration:** 1 hour
**Level:** Advanced

## Learning Objectives
1. Develop production schedules for continuous supply
2. Calculate lead times and production cycles
3. Forecast demand and plan capacity
4. Manage inventory and minimize waste
5. Optimize profitability through strategic planning

## 1. Production Timing

### Crop Timing Chart

| Crop | Germ Time | Growing Time | Total Weeks | Transplant Window |
|------|-----------|--------------|-------------|-------------------|
| Lettuce | 3-5 days | 3-4 weeks | 4 weeks | 2-3 weeks |
| Tomato | 5-7 days | 5-7 weeks | 6-8 weeks | 1 week |
| Basil | 7-10 days | 4-5 weeks | 5-6 weeks | 2 weeks |
| Pepper | 10-14 days | 6-8 weeks | 8-10 weeks | 1 week |
| Cucumber | 3-5 days | 3-4 weeks | 4 weeks | 3-5 days |

### Backward Scheduling from Transplant Date

```
EXAMPLE: Tomato Transplants for May 15 Planting
═══════════════════════════════════════════════════════════════════════════

Transplant date needed: May 15
Working backward:
├─ Hardening off: 1 week → Start May 8
├─ Growing on: 5 weeks → Start April 3
├─ Germination: 1 week → Start March 27
└─ SEED DATE: March 27 (7 weeks before transplant)

Add buffer for:
├─ Slow germination (cold weather): +3-5 days
├─ Selection/grading time: +2-3 days
├─ Customer schedule flexibility: Plan ±1 week
└─ ACTUAL SEED DATE RANGE: March 20-27
```

---

## 2. Continuous Production Scheduling

### Rolling Schedule Example

**Goal**: 1,000 lettuce transplants per week, 52 weeks/year

```
WEEKLY PRODUCTION SCHEDULE
═══════════════════════════════════════════════════════════════════════════

Week 1: Seed 1,200 (Batch A) - allows for 15% waste/selection
Week 2: Seed 1,200 (Batch B) - Batch A germinates
Week 3: Seed 1,200 (Batch C) - Batch A to transplant cells, B germinates
Week 4: Seed 1,200 (Batch D) - Batch A ready to ship, B/C growing

STEADY STATE:
• 4-5 batches always in production
• Harvest/ship 1,000 plants every Monday
• Seed 1,200 seeds every Monday
• Predictable workflow and labor

SPACE REQUIRED:
├─ Germination: 1,200 seeds × 4 weeks = 4,800 cells active
├─ Growing: 4,800 cells ÷ 72-cell trays = 67 trays × 1.2 sq ft = 80 sq ft
├─ With aisles/overhead: 125 sq ft total
└─ Annual production: 52,000 plants from 125 sq ft
```

### Managing Multiple Crops

**Spreadsheet-Based Schedule:**

```
┌──────────┬─────────┬─────────┬─────────┬─────────┬─────────┬─────────┐
│ Week of  │ Lettuce │ Basil   │ Tomato  │ Pepper  │ Cucumber│ Total   │
├──────────┼─────────┼─────────┼─────────┼─────────┼─────────┼─────────┤
│ Jan 1    │ Seed    │ Trans   │ Grow    │ Seed    │ -       │ 4 tasks │
│ Jan 8    │ Trans   │ Ship    │ Grow    │ Germ    │ Seed    │ 5 tasks │
│ Jan 15   │ Ship    │ Seed    │ Harden  │ Grow    │ Trans   │ 5 tasks │
│ Jan 22   │ Seed    │ Trans   │ Ship    │ Grow    │ Ship    │ 5 tasks │
└──────────┴─────────┴─────────┴─────────┴─────────┴─────────┴─────────┘

STRATEGIES:
├─ Stagger similar tasks (don't seed everything Monday)
├─ Balance workload across week
├─ Group crops with similar requirements
└─ Plan for seasonal demand changes
```

---

## 3. Capacity Planning

### Calculating Production Capacity

**Bench Space Method:**

Available bench space: 1,000 sq ft
× Plants per sq ft: 100 (72-cell trays)
× Turnovers per year: 12 (4-week crops)
= 1,200,000 plant capacity

**Realistic capacity** (accounting for losses, transitions, maintenance):
= 1,200,000 × 0.70 = 840,000 plants/year

### Bottleneck Analysis

Identify limiting factors:

| Resource | Capacity | Utilization | Is Bottleneck? |
|----------|----------|-------------|----------------|
| Germination space | 50,000 cells | 85% | No |
| Growing space | 40,000 cells | 95% | **YES** |
| Labor hours | 160 hr/week | 70% | No |
| Mist system | 20,000 cuttings | 60% | No |

**Solution**: Expand growing space (most constrained resource) or reduce growing time through environmental optimization

---

## 4. Demand Forecasting

### Seasonal Demand Patterns

```
TYPICAL TRANSPLANT DEMAND CURVE (Northern temperate climate)
═══════════════════════════════════════════════════════════════════════════

Demand %
100├─────────────────────────┐
 90│                    ┌────┤
 80│                ┌───┘    │
 70│            ┌───┘        │
 60│        ┌───┘            │
 50│    ┌───┘                │
 40│┌───┘                    │
 30││                        └───┐
 20││                            └───┐
 10││                                └───┐
  0└┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴
   Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec

PLANNING IMPLICATIONS:
├─ March-May: 60% of annual sales (warm-season crops)
├─ June-July: 15% (succession plantings)
├─ August-Sept: 15% (fall crops)
└─ Oct-Feb: 10% (winter growers, early starts)

STRATEGIES:
├─ Hire seasonal labor for spring rush
├─ Build inventory in Feb-early March
├─ Diversify to year-round customers (greenhouse growers)
└─ Plan maintenance during slow periods
```

### Order Management

**Lead Time Commitment:**
- Standard orders: 4-6 weeks
- Rush orders: 2 weeks (premium price)
- Repeat customers: Standing orders (predictable)

**Inventory Buffer:**
- Maintain 10-20% overproduction
- Allows flexibility for large/rush orders
- Sell extras at farmers market or retail

---

## 5. Cost and Pricing Strategy

### Full Costing Model

```
COST PER TRANSPLANT (Example: Tomato, 4" pot, 6 weeks)
═══════════════════════════════════════════════════════════════════════════

DIRECT MATERIALS:
├─ Seed: $0.18
├─ Growing medium: $0.12
├─ Container (4" pot): $0.15
├─ Fertilizer: $0.03
├─ Pest/disease control: $0.02
└─ Subtotal: $0.50

DIRECT LABOR:
├─ Seeding: $0.08
├─ Transplanting: $0.12
├─ Watering/care: $0.15
├─ Grading/shipping: $0.10
└─ Subtotal: $0.45

OVERHEAD (allocated):
├─ Utilities (heat, power): $0.20
├─ Facility (depreciation, rent): $0.15
├─ Equipment maintenance: $0.05
├─ Insurance, admin: $0.10
└─ Subtotal: $0.50

TOTAL COST PER PLANT: $1.45

PRICING:
├─ Wholesale (to growers): $2.50 (72% markup)
├─ Retail (direct): $3.50-4.00 (140-175% markup)
└─ Margin: $1.05-2.55 per plant

BREAK-EVEN:
├─ Fixed costs (annual): $50,000
├─ Variable cost per plant: $0.95
├─ Selling price: $2.50
├─ Contribution margin: $1.55
└─ Break-even volume: 50,000 ÷ 1.55 = 32,258 plants
```

### Volume Pricing Strategy

| Quantity | Price/Plant | Discount | Reasoning |
|----------|-------------|----------|-----------|
| 1-50 | $3.00 | Base | Retail/small orders |
| 51-200 | $2.50 | 17% | Reduced handling per unit |
| 201-1,000 | $2.00 | 33% | Large order efficiency |
| 1,000+ | $1.75 | 42% | Volume commitment, planned production |

---

## 6. Inventory Management

### Just-In-Time (JIT) Principles

**Minimize Inventory:**
- Produce to order when possible
- Reduce holding costs
- Decrease waste from overproduction

**Challenges in Propagation:**
- Cannot instantly produce plants
- Must forecast and grow in advance
- Balance between availability and waste

**Hybrid Approach:**
- Maintain base production for predictable crops
- Flexible capacity for custom orders
- Build strategic inventory before peak season

### Managing Perishability

**Transplants have limited shelf life:**

| Crop Type | Shelf Life (optimal) | Extend By |
|-----------|---------------------|-----------|
| Lettuce, greens | 1-2 weeks | Cool storage, reduce fertilizer |
| Tomato, pepper | 1-2 weeks | Transplant to larger pot if needed |
| Cucumber, squash | 3-5 days | Very perishable, time exactly |
| Herbs | 2-4 weeks | Cool, prune to manage size |

**Strategies:**
- Accurate demand forecasting critical
- Communicate with customers about timing
- Have backup sales channels (farmers market, retail)
- Donate excess rather than discard (tax benefit, goodwill)

---

## 7. Technology Tools

### Production Management Software

**Features to look for:**
- Production scheduling/calendar
- Inventory tracking by variety and location
- Customer order management
- Labor tracking
- Cost accounting
- Reporting and analytics

**Options:**
- **Spreadsheet-based** (Excel, Google Sheets): Free, flexible, manual
- **Mid-tier** (GrowFlow, Croptracker): $50-200/month, good for small-mid operations
- **Enterprise** (SAP, custom): $500+/month, large operations only

---

## Key Takeaways

1. **Backward schedule** from customer need date, not forward from seeding
2. **Rolling schedules** enable continuous production and predictable workflow
3. **Know your capacity** and bottlenecks to optimize production
4. **Forecast demand** using historical data and customer communication
5. **Full cost accounting** ensures profitable pricing
6. **Balance inventory** between availability and waste
7. **Technology helps** but start simple and scale as needed

---

## Practical Exercise

**Develop Your Production Plan:**

Choose 3 crops and plan 12-week rolling schedule:
1. Define customer demand (units/week)
2. Calculate timing for each crop
3. Create week-by-week seeding and harvest schedule
4. Calculate space requirements
5. Estimate costs and set pricing
6. Identify potential bottlenecks
7. Develop contingency plans for over/under demand

**Deliverable**: Complete production schedule with financial projections

---

*Next Module: [Module 12 - Propagation Practicum](module_12_propagation_practicum.md)*
