# Module 7: Inventory Management

## Learning Objectives

By the end of this module, you will be able to:
- Implement effective inventory tracking systems
- Apply FIFO principles to fresh produce
- Forecast demand and plan production
- Minimize waste through inventory control
- Use technology for inventory management

---

## Inventory Fundamentals for Fresh Produce

### The Unique Challenge

Unlike shelf-stable goods, fresh produce inventory:
- **Depreciates daily** (quality loss)
- **Has fixed shelf life** (time-sensitive)
- **Requires specific conditions** (temperature, humidity)
- **Cannot be backlogged** (must sell fresh)
- **Varies seasonally** (supply fluctuations)

```
INVENTORY VALUE DEGRADATION

Day 0 (Harvest): $6.00/lb (100% value)
Day 3: $5.50/lb (92% value) - Slight quality loss
Day 7: $4.50/lb (75% value) - Visible aging
Day 10: $3.00/lb (50% value) - Discount needed
Day 14: $0/lb (0% value) - Unmarketable

IMPLICATION: Fresh produce inventory
is a depreciating asset - turn it quickly!
```

### Inventory Metrics

**Key Performance Indicators:**

```
INVENTORY KPIs

1. INVENTORY TURNOVER
   Formula: Sales (units) / Average Inventory

   Example:
   Weekly sales: 2,000 lbs
   Average inventory: 500 lbs
   Turnover: 4x per week (excellent)

   Targets:
   - High turnover (>4x/week): Excellent
   - Medium turnover (2-4x/week): Good
   - Low turnover (<2x/week): Problem

2. DAYS OF INVENTORY ON HAND
   Formula: Average Inventory / Daily Sales

   Example:
   Average inventory: 500 lbs
   Daily sales: 285 lbs
   Days on hand: 1.75 days (excellent)

   Targets:
   - 1-3 days: Optimal for leafy greens
   - 3-7 days: Acceptable for hardier crops
   - >7 days: Too much, risk of waste

3. SHRINK RATE
   Formula: (Lost/Unsold Inventory / Total Production) × 100

   Example:
   Weekly production: 2,000 lbs
   Waste/spoilage: 60 lbs
   Shrink rate: 3% (acceptable)

   Targets:
   - <3%: Excellent
   - 3-5%: Acceptable
   - >5%: Needs improvement

4. FILL RATE
   Formula: (Orders Fulfilled Completely / Total Orders) × 100

   Example:
   Orders: 50
   Filled completely: 48
   Fill rate: 96% (good)

   Targets:
   - >95%: Excellent
   - 90-95%: Good
   - <90%: Poor, customer satisfaction risk
```

---

## Inventory Tracking Systems

### Manual Systems

**Physical Count Method:**

```
DAILY INVENTORY COUNT SHEET

Date: __________  Operator: __________

Product          On Hand   Harvested   Sold    Spoilage   Remaining
────────────────────────────────────────────────────────────────────
Lettuce (lbs)      150        200       280       10        60
Kale (lbs)          80        150       180        5        45
Spinach (lbs)       40        100       110        5        25
Arugula (lbs)       30         75        85        3        17
Basil (lbs)         20         40        52        2         6
Tomatoes (lbs)     100        150       200        8        42
Cucumbers (lbs)     60        100       130        5        25
────────────────────────────────────────────────────────────────────

TOTALS:            480        815       1,037      38       220

Daily Shrink Rate: 38 / (480 + 815) = 2.9% ✓
Inventory Turnover: 1,037 / ((480 + 220) / 2) = 2.96x ✓

Notes:
- Low fill rate on arugula (high demand)
- Consider increasing next harvest
- 10 lbs lettuce yellowing (discount tomorrow)
```

**Pros:**
- Low cost (paper and pen)
- Simple to understand
- Immediate visibility

**Cons:**
- Time-consuming
- Prone to errors
- No historical analysis
- Difficult to scale

### Spreadsheet Systems

**Inventory Tracking Template:**

```
EXCEL/GOOGLE SHEETS INVENTORY SYSTEM

Sheet 1: Daily Inventory
├─ Date, Product, Beginning Inventory
├─ Harvested, Sold, Wasted, Ending Inventory
├─ Automatic calculations (turnover, shrink)
└─ Conditional formatting (low stock alerts)

Sheet 2: Product Master
├─ Product name, typical shelf life
├─ Storage requirements
├─ Standard package sizes
└─ Pricing by channel

Sheet 3: Sales History
├─ Date, Product, Quantity, Customer, Channel
├─ Automatic aggregation
└─ Trend analysis

Sheet 4: Harvest Planning
├─ Historical demand
├─ Current inventory
├─ Upcoming orders
└─ Recommended harvest quantities

Sheet 5: Analytics Dashboard
├─ Shrink rate by product
├─ Turnover rates
├─ Sales trends
├─ Inventory value
└─ Visual charts
```

**Pros:**
- Low cost ($0-15/month)
- Customizable
- Formulas automate calculations
- Historical data for analysis
- Cloud access (Google Sheets)

**Cons:**
- Requires manual data entry
- Limited automation
- Scaling challenges
- Not real-time

**Template Download:** See course resources for customizable spreadsheet

### Software Systems

**Inventory Management Software Options:**

```
OPTION 1: Farm Management Software

Examples: Farmbrite, Tend, farmOS
Cost: $40-100/month

Features:
├─ Inventory tracking
├─ Harvest logging
├─ Sales/order management
├─ Customer database
├─ Reporting and analytics
├─ Mobile app (field entry)
└─ Integration with accounting

Pros: All-in-one farm solution
Cons: Learning curve, monthly cost

Best For: Diversified farms, 5+ employees


OPTION 2: Specialized Inventory Software

Examples: Fishbowl, Cin7, inFlow
Cost: $100-300/month

Features:
├─ Advanced inventory control
├─ Barcode scanning
├─ Lot tracking and traceability
├─ Multi-location management
├─ Automated reorder points
└─ Integration with QuickBooks, etc.

Pros: Powerful, scalable
Cons: Higher cost, may be overkill

Best For: Large operations, wholesale focus


OPTION 3: Custom/Open Source

Examples: Odoo (open source), custom database
Cost: $0-500 setup, $0-50/month hosting

Features:
├─ Fully customizable
├─ No monthly subscription (self-hosted)
├─ Add modules as needed
└─ Complete control

Pros: Low cost, flexible
Cons: Technical knowledge required

Best For: Tech-savvy farmers, unique needs
```

**ROI Calculation:**

```
INVENTORY SOFTWARE ROI

Manual/Spreadsheet Challenges:
├─ Time on inventory mgmt: 5 hours/week
├─ Shrink rate: 6% (poor visibility)
├─ Stockouts: 2-3 per week (lost sales)
├─ Overproduction: 10% surplus
└─ Total cost: ~$400/week in waste + time

With Software ($100/month):
├─ Time on inventory: 2 hours/week (saves 3 hrs)
├─ Shrink rate: 3% (better tracking)
├─ Stockouts: <1 per week (demand forecasting)
├─ Overproduction: 5% (data-driven planning)
└─ Savings: ~$250/week

Monthly benefit: $1,000
Software cost: $100
Net benefit: $900/month
ROI: 900%
```

---

## FIFO (First In, First Out)

### Why FIFO Matters

```
FIFO PRINCIPLE

Correct (FIFO):
Day 1 harvest → Sell first (oldest)
Day 2 harvest → Sell second
Day 3 harvest → Sell last (newest)

Result: Maximum freshness to customer

Incorrect (Random):
Day 1 harvest → Still in cooler Day 7 (spoilage!)
Day 3 harvest → Sold Day 3
Day 2 harvest → Sold Day 5

Result: Waste, customer complaints
```

### Implementing FIFO

**Physical Organization:**

```
COOLER LAYOUT FOR FIFO

┌────────────────────────────────────────┐
│  WALK-IN COOLER                        │
│                                        │
│  LOADING AREA                          │
│  (New harvests placed here)            │
│  ┌────┐ ┌────┐ ┌────┐                 │
│  │ NEW│ │ NEW│ │ NEW│                 │
│  └──┬─┘ └──┬─┘ └──┬─┘                 │
│     │      │      │                   │
│     ▼      ▼      ▼                   │
│  ┌────┐ ┌────┐ ┌────┐                 │
│  │ OLD│ │ OLD│ │ OLD│ ← PICKING ZONE │
│  │ER  │ │ER  │ │ER  │   (Sell first)│
│  └────┘ └────┘ └────┘                 │
│                                        │
│  FLOW: New in back, pull from front   │
│        Rotate all products forward    │
└────────────────────────────────────────┘

Key Practices:
□ Clearly label all products with harvest date
□ Organize by product type AND date
□ New product goes behind old product
□ Pull from oldest date first
□ Train all staff on FIFO
□ Daily rotation check
```

**Labeling System:**

```
FIFO LABEL REQUIREMENTS

Essential Information:
┌─────────────────────────┐
│ PRODUCT: Romaine Lettuce│
│ HARVEST: 12/08/2025     │
│ LOT: ROM120825-A        │
│ QUANTITY: 50 lbs        │
│ BEST BY: 12/22/2025     │
│ (14 days from harvest)  │
└─────────────────────────┘

Color-Coded System:
├─ Monday: Blue labels
├─ Tuesday: Green labels
├─ Wednesday: Yellow labels
├─ Thursday: Orange labels
├─ Friday: Red labels
├─ Saturday: Purple labels
└─ Sunday: White labels

Visual FIFO: Instantly see oldest products
```

**Staff Training:**

```
FIFO TRAINING CHECKLIST

□ Explain why FIFO matters (freshness, waste reduction)
□ Demonstrate proper labeling
□ Show cooler organization system
□ Practice picking orders (oldest first)
□ Explain consequences of violating FIFO
□ Quiz staff on harvest date interpretation
□ Observe staff during actual operations
□ Provide refresher training quarterly
```

---

## Demand Forecasting

### Historical Data Analysis

```
DEMAND FORECASTING PROCESS

STEP 1: Collect Historical Data
├─ Sales by product, week, channel
├─ At least 3 months, ideally 1 year
└─ Account for seasonality

STEP 2: Calculate Average Demand
├─ Average weekly sales per product
├─ Identify trends (growing/declining)
└─ Adjust for known factors

STEP 3: Adjust for Variables
├─ Holidays and events
├─ Weather forecast
├─ Marketing activities
├─ New accounts or lost accounts
└─ Seasonal changes

STEP 4: Set Production Targets
├─ Forecasted demand
├─ + Safety stock (buffer)
├─ - Current inventory
└─ = Harvest needed

STEP 5: Review and Refine
├─ Compare forecast to actual weekly
├─ Calculate forecast accuracy
├─ Adjust model based on learnings
└─ Continuous improvement
```

**Forecasting Example:**

```
LETTUCE DEMAND FORECAST - Week of 12/15

Historical Average (Last 8 Weeks):
├─ Week 1: 180 lbs
├─ Week 2: 190 lbs
├─ Week 3: 175 lbs
├─ Week 4: 200 lbs
├─ Week 5: 185 lbs
├─ Week 6: 195 lbs
├─ Week 7: 210 lbs
├─ Week 8: 205 lbs
└─ AVERAGE: 192.5 lbs/week

Adjustments for Upcoming Week:
├─ Trend: +5 lbs/week growth = +5 lbs
├─ New restaurant account: +30 lbs
├─ Farmers market holiday break: -40 lbs
├─ Weather (cold snap, soup season): +15 lbs
└─ NET ADJUSTMENTS: +10 lbs

FORECAST: 192.5 + 10 = 202.5 lbs

Production Plan:
├─ Forecasted demand: 203 lbs
├─ Safety stock (10%): +20 lbs
├─ Current inventory: -40 lbs
└─ HARVEST TARGET: 183 lbs

Actual harvest: 185 lbs (close to target)
```

### Advanced Forecasting Methods

**Moving Average:**
```
3-Week Moving Average = (Week1 + Week2 + Week3) / 3

Example:
Week 1: 180 lbs
Week 2: 190 lbs
Week 3: 185 lbs
Forecast for Week 4: (180 + 190 + 185) / 3 = 185 lbs
```

**Weighted Moving Average:**
```
Give more weight to recent weeks

Week 1 (oldest): 180 lbs × 1 = 180
Week 2: 190 lbs × 2 = 380
Week 3 (newest): 185 lbs × 3 = 555
Total: 1,115
Divide by sum of weights (1+2+3=6)
Forecast: 1,115 / 6 = 186 lbs
```

**Exponential Smoothing:**
```
Formula: Forecast = α × Actual + (1-α) × Previous Forecast

α (smoothing factor) = 0.3 (typical)
Previous forecast: 185 lbs
Actual sales: 195 lbs
New forecast: 0.3 × 195 + 0.7 × 185 = 188 lbs
```

---

## Production Planning

### Harvest Scheduling

```
HARVEST PLANNING MATRIX

Product: Baby Kale
Shelf Life: 12 days
Lead Time: Harvest same day as order for CSA, day before for restaurants

MON    TUE    WED    THU    FRI    SAT    SUN
─────────────────────────────────────────────────
CSA    Rest.  Rest.  Rest.  Rest.  Market  OFF
50 lbs 60 lbs 55 lbs 60 lbs 70 lbs 100 lbs

Harvest Schedule:
├─ Monday AM: 50 lbs (CSA pickup PM)
├─ Monday PM: 60 lbs (Tuesday restaurant delivery)
├─ Tuesday PM: 55 lbs (Wednesday restaurants)
├─ Wednesday PM: 60 lbs (Thursday restaurants)
├─ Thursday PM: 70 lbs (Friday restaurants)
├─ Friday PM: 100 lbs (Saturday market)
└─ Total: 395 lbs/week, 6 harvest events

FIFO Concern: Each day's harvest sold within 1-2 days
No inventory aging issues!
```

**Multi-Channel Harvest Allocation:**

```
WEEKLY PRODUCTION ALLOCATION

Total Weekly Production: 2,000 lbs mixed greens

Channel Allocation:
├─ Farmers Markets (30%): 600 lbs
│  └─ Harvest Friday for Saturday market
│      Harvest Saturday for Sunday market
│
├─ Restaurant Direct (40%): 800 lbs
│  └─ Harvest Mon-Thu for Tue-Fri delivery
│      Standing orders, predictable
│
├─ Retail Stores (20%): 400 lbs
│  └─ Harvest Sun & Wed for Mon & Thu delivery
│      Twice-weekly restocking
│
└─ CSA (10%): 200 lbs
   └─ Harvest Tuesday for Wednesday pickup
       Weekly subscription

Overflow (5%): 100 lbs
└─ Safety stock for unexpected orders
    If not sold by Friday, discount at Saturday market
```

### Safety Stock & Buffer Inventory

**Calculating Safety Stock:**

```
SAFETY STOCK FORMULA

Safety Stock = Z-score × σ × √L

Where:
├─ Z-score = Service level (e.g., 1.65 for 95% service)
├─ σ = Standard deviation of demand
└─ L = Lead time (days to replenish)

Fresh Produce Consideration:
For short shelf life products, keep safety stock minimal (5-15%)

Example:
Average weekly demand: 200 lbs
Standard deviation: 30 lbs
Lead time: 1 day (can harvest quickly)
Desired service level: 95% (Z = 1.65)

Safety Stock = 1.65 × 30 × √1 = 49.5 lbs

Practical Application:
- Plan to harvest 200 lbs for demand
- Keep 50 lbs buffer in inventory
- If demand exceeds, emergency harvest available
- If demand lower, sell buffer at farmers market
```

**Buffer Strategy by Product:**

| Product | Shelf Life | Buffer Stock | Rationale |
|---------|------------|--------------|-----------|
| Leafy greens | 10-14 days | 10-15% | Moderate buffer, can push to market |
| Herbs | 5-7 days | 5-10% | Minimal buffer, short shelf life |
| Microgreens | 7-10 days | 10% | Can discount if needed |
| Tomatoes | 14-21 days | 15-20% | Longer shelf life, more flexibility |
| Cucumbers | 10-14 days | 10-15% | Moderate flexibility |

---

## Minimizing Waste

### Waste Reduction Strategies

```
WASTE MINIMIZATION TACTICS

1. DEMAND-DRIVEN PRODUCTION
   ├─ Harvest to order (restaurants, CSA)
   ├─ Pre-selling at farmers markets (email list)
   ├─ Flexible CSA shares (adjust based on harvest)
   └─ Impact: 20-40% reduction in overproduction

2. TIERED PRICING
   ├─ Day 0-3: Full price
   ├─ Day 4-7: 10% discount
   ├─ Day 8-10: 25% discount
   ├─ Day 11+: 50% discount or donations
   └─ Impact: 30-50% reduction in waste

3. MULTI-CHANNEL FLEXIBILITY
   ├─ Overflow to farmers market (higher volume tolerance)
   ├─ Restaurant "daily special" offerings
   ├─ "Seconds" for processing/juicing
   ├─ Food bank donations (tax deduction)
   └─ Impact: 40-60% of potential waste redirected

4. PRODUCT DEVELOPMENT
   ├─ Pesto from excess basil
   ├─ Salad mixes from mixed greens
   ├─ Juice from blemished produce
   ├─ Dehydrated products
   └─ Impact: 20-30% of waste converted to value

5. PRECISE HARVESTING
   ├─ Pick only what's ordered
   ├─ Staggered plantings for continuous supply
   ├─ Succession harvesting (cut-and-come-again)
   └─ Impact: 30-50% reduction in overproduction
```

### Waste Tracking & Analysis

```
WEEKLY WASTE ANALYSIS

Date: __________

Product        Production  Sold   Waste   Waste %   Reason
────────────────────────────────────────────────────────────
Lettuce        300 lbs     285    15      5%        Yellowing
Kale           200 lbs     190    10      5%        Minor damage
Spinach        150 lbs     145    5       3.3%      Normal shrink
Basil          60 lbs      52     8       13.3%     Overproduction
Tomatoes       180 lbs     175    5       2.8%      Cracking
────────────────────────────────────────────────────────────
TOTAL:         890 lbs     847    43      4.8%

ANALYSIS:
✓ Overall waste rate: 4.8% (acceptable, target <5%)
⚠ Basil waste high (13.3%) - reduce next week's harvest by 10 lbs
✓ Spinach waste low (3.3%) - excellent
→ Lettuce yellowing - check storage humidity

ACTION ITEMS:
□ Reduce basil harvest to 50 lbs next week
□ Check cooler humidity for lettuce storage
□ Monitor tomato cracking (field issue?)
```

---

## Inventory Optimization

### ABC Analysis

**Classify inventory by value:**

```
ABC INVENTORY CLASSIFICATION

A Items (High Value): 20% of products, 80% of revenue
├─ Example: Basil, microgreens, specialty lettuce
├─ Management: Tight control, frequent monitoring
├─ Safety stock: Minimal (high value, short shelf life)
└─ Forecasting: Precise, data-driven

B Items (Medium Value): 30% of products, 15% of revenue
├─ Example: Standard lettuce, kale, spinach
├─ Management: Moderate control, weekly monitoring
├─ Safety stock: 10-15%
└─ Forecasting: Historical averages

C Items (Low Value): 50% of products, 5% of revenue
├─ Example: Occasional crops, experimental varieties
├─ Management: Minimal control, as-needed
├─ Safety stock: None or minimal
└─ Forecasting: Simple estimation

Example Farm Inventory:
A Items: Basil ($16/lb), Microgreens ($20/lb), Arugula ($8/lb)
B Items: Lettuce ($5/lb), Kale ($6/lb), Spinach ($6/lb)
C Items: Radishes ($3/lb), Turnips ($2/lb)

Focus effort on A items - highest impact on revenue
```

### Inventory Turnover Optimization

**Strategies to Increase Turnover:**

```
TURNOVER IMPROVEMENT TACTICS

Current: 2.5x per week turnover
Target: 4x per week turnover

1. Reduce Batch Sizes
   ├─ Current: Harvest 3x per week (large batches)
   ├─ New: Harvest 5x per week (smaller batches)
   └─ Impact: Fresher product, less inventory

2. Just-In-Time Harvesting
   ├─ Harvest morning of delivery
   ├─ CSA: Harvest day-of pickup
   └─ Impact: Minimal inventory, maximum freshness

3. Faster Sales Cycles
   ├─ Increase market frequency
   ├─ Add new distribution channels
   └─ Impact: Move product faster

4. Better Demand Forecasting
   ├─ Reduce overproduction
   ├─ Match supply to demand
   └─ Impact: Less excess inventory

Results After Implementation:
├─ Inventory on hand: 500 lbs → 300 lbs (-40%)
├─ Average age at sale: 4.5 days → 2.1 days (-53%)
├─ Shrink rate: 6% → 2.5% (-58%)
└─ Turnover: 2.5x → 4.2x (+68%)
```

---

## Technology Integration

### Barcode & QR Code Systems

```
BARCODE IMPLEMENTATION

Setup:
├─ Barcode label printer ($300-800)
├─ Handheld scanner ($100-300)
├─ Software integration
└─ Label design with product info + barcode

Workflow:
1. Harvest product
2. Print label with:
   ├─ Product name
   ├─ Harvest date
   ├─ Lot code
   ├─ Quantity
   └─ Barcode (encodes lot code)
3. Scan barcode to log into inventory
4. Scan again when sold (automatic FIFO)
5. System tracks everything

Benefits:
├─ Instant inventory updates
├─ Perfect FIFO enforcement
├─ Traceability for food safety
├─ Eliminate manual counting errors
├─ Real-time inventory visibility
└─ Data for analytics

ROI:
Setup cost: $1,000
Time savings: 3 hrs/week @ $20/hr = $60/week
Error reduction: ~$50/week in waste
Payback: 4-5 months
```

### Integration with Sales Channels

```
AUTOMATED INVENTORY SYNC

E-commerce Website:
├─ Real-time inventory display
├─ "Only 3 left!" urgency messaging
├─ Automatic "Sold Out" when inventory = 0
└─ Pre-orders when out of stock

Point-of-Sale (Farmers Market):
├─ Sales instantly deduct from inventory
├─ End-of-day reconciliation automatic
└─ Track bestsellers in real-time

Wholesale Orders:
├─ Check inventory before confirming order
├─ Alert if insufficient stock
└─ Suggest substitutes if out

Result: No overselling, accurate availability
```

---

## Summary

Effective inventory management for fresh produce:

1. **Turn inventory quickly**: 3-5x per week minimizes waste
2. **Track meticulously**: Know what you have, where, and how old
3. **Enforce FIFO**: Oldest product sells first, every time
4. **Forecast demand**: Data-driven production planning
5. **Minimize waste**: Multi-channel flexibility and tiered pricing

**Key Takeaways:**
- Inventory is a depreciating asset - speed is critical
- FIFO is non-negotiable for fresh produce
- Technology investment pays off quickly (ROI 6-12 months)
- Shrink rate <3% is achievable with good systems
- Demand forecasting prevents overproduction

Excellent inventory management is the difference between 60% and 80% margins.

---

**Next Module**: [Module 8: Food Safety in Distribution](module_08_food_safety_distribution.md)

---

*EcoFusion Academy - Course 308: Supply Chain & Distribution*
