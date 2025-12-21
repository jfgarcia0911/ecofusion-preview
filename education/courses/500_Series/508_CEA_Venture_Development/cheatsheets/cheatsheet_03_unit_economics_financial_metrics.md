# Cheatsheet 3: Unit Economics and Financial Metrics

**Course:** CEA-508 CEA Venture Development
**Quick Reference Guide**

---

## Core Financial Concepts

### Revenue
**Definition:** Total income from sales before any costs

**Calculation Methods:**

**For Production Operations:**
```
Revenue = Volume sold × Price per unit
Example: 10,000 lbs/week × $4.50/lb × 50 weeks = $2,250,000/year
```

**For SaaS/Technology:**
```
Revenue = Customers × Average contract value
Example: 50 customers × $10,000 ACV = $500,000/year
```

---

### Cost of Goods Sold (COGS)
**Definition:** Direct costs to produce product/service

**CEA Production COGS:**
- Seeds and seedlings
- Growing media/substrates
- Nutrients and additives
- Direct labor (harvesting, packing)
- Packaging materials
- Utilities directly tied to production
- Depreciation of production equipment

**Technology/SaaS COGS:**
- Cloud hosting costs
- Customer support staff
- Implementation and onboarding
- Third-party services and APIs

---

### Gross Profit and Gross Margin

**Gross Profit:**
```
Gross Profit = Revenue - COGS
```

**Gross Margin:**
```
Gross Margin % = (Revenue - COGS) / Revenue × 100%
```

**Example:**
```
Revenue: $2,250,000
COGS: $1,125,000
Gross Profit: $1,125,000
Gross Margin: 50%
```

**Benchmarks:**
- CEA Production: 35-50% (target 40%+)
- Technology Hardware: 50-70%
- SaaS Software: 70-85%
- Services: 40-60%

---

### Operating Expenses (OpEx)
**Definition:** Costs to run business, not directly tied to production

**Categories:**
- Salaries (non-production staff)
- Sales and marketing
- General and administrative (G&A)
- Research and development (R&D)
- Facilities (rent, utilities not in COGS)
- Insurance
- Professional services

---

### EBITDA
**Definition:** Earnings Before Interest, Taxes, Depreciation, and Amortization

**Formula:**
```
EBITDA = Revenue - COGS - Operating Expenses
(before interest, taxes, depreciation, amortization)
```

**Purpose:**
- Measures operating profitability
- Removes impact of financing and accounting decisions
- Used for valuation (Enterprise Value / EBITDA multiple)

---

### Net Income
**Definition:** Bottom-line profit after all expenses

**Formula:**
```
Net Income = Revenue - COGS - OpEx - Interest - Taxes - Depreciation - Amortization
```

---

## Unit Economics Framework

### What Are Unit Economics?
**Definition:** Revenue and costs at the individual unit level

**Unit Types by Business:**
- Production operation: Per pound/kg, per facility, per customer order
- SaaS: Per customer, per user seat
- Service: Per project, per customer engagement
- Platform: Per transaction, per seller/buyer

---

### Fixed vs. Variable Costs

**Fixed Costs:**
- Do NOT change with production volume (in relevant range)
- Examples: Rent, salaries, insurance, equipment depreciation
- Total fixed costs stay same whether you produce 100 lbs or 10,000 lbs

**Variable Costs:**
- Change DIRECTLY with production volume
- Examples: Seeds, nutrients, packaging, direct labor, shipping
- Double production = double variable costs

**Semi-Variable Costs:**
- Have both fixed and variable components
- Examples: Utilities (base charge + usage), maintenance, some labor

---

### Contribution Margin

**Definition:** Revenue minus variable costs (what contributes to covering fixed costs)

**Formula:**
```
Contribution Margin $ = Revenue - Variable Costs
Contribution Margin % = (Revenue - Variable Costs) / Revenue × 100%
```

**Example:**
```
Selling price per lb: $5.00
Variable cost per lb: $2.00
Contribution margin per lb: $3.00
Contribution margin %: 60%
```

**Importance:**
- Must be positive to be viable
- Higher is better (more to cover fixed costs)
- Indicates pricing power

---

### Break-Even Analysis

**Break-Even Volume Formula:**
```
Break-Even Units = Total Fixed Costs / (Price - Variable Cost per Unit)
```

**Example for CEA Facility:**
```
Annual fixed costs: $1,200,000
Selling price: $5.00/lb
Variable cost: $2.50/lb
Break-even: $1,200,000 / ($5.00 - $2.50) = 480,000 lbs/year
Weekly break-even: 480,000 / 52 = 9,231 lbs/week
```

**Break-Even Revenue:**
```
Break-Even Revenue = Break-Even Units × Price
Example: 480,000 lbs × $5.00 = $2,400,000/year
```

**Break-Even as % of Capacity:**
```
Facility capacity: 600,000 lbs/year
Break-even: 480,000 lbs/year
Utilization required: 80%
```

---

### Customer Economics (SaaS/Services)

**Customer Acquisition Cost (CAC):**
```
CAC = Total Sales & Marketing Costs / Number of New Customers Acquired
```

**Example:**
```
Sales & marketing spend: $100,000/quarter
New customers acquired: 20
CAC = $100,000 / 20 = $5,000 per customer
```

**Customer Lifetime Value (LTV):**
```
LTV = (Average Revenue per Customer per Year × Gross Margin %) × Average Customer Lifetime

OR

LTV = (Average Contract Value × Gross Margin %) / Churn Rate
```

**Example:**
```
Annual revenue per customer: $10,000
Gross margin: 75%
Average customer lifetime: 5 years
LTV = ($10,000 × 0.75) × 5 = $37,500
```

**LTV:CAC Ratio:**
```
LTV:CAC Ratio = LTV / CAC
Target: 3:1 or better (3x minimum)
```

**Example:**
```
LTV: $37,500
CAC: $5,000
Ratio: 37,500 / 5,000 = 7.5:1 (excellent)
```

**CAC Payback Period:**
```
Payback Months = CAC / (Monthly Revenue per Customer × Gross Margin %)
Target: <12 months
```

**Example:**
```
CAC: $5,000
Monthly revenue per customer: $833 ($10K/12)
Gross margin: 75%
Payback = $5,000 / ($833 × 0.75) = 8 months (good)
```

---

## Key Financial Metrics by Business Type

### For CEA Production Operations

**Production Metrics:**
```
Yield per sq ft per year = Total annual production / Facility sq ft
Revenue per sq ft = Annual revenue / Facility sq ft
Turns per year = 365 days / Days per crop cycle
Uptime % = (Actual production days / Potential production days) × 100%
```

**Example:**
```
Facility: 10,000 sq ft
Annual production: 250,000 lbs
Crop cycle: 35 days
Revenue per lb: $4.50

Yield per sq ft: 250,000 / 10,000 = 25 lbs/sq ft/year
Revenue per sq ft: (25 lbs × $4.50) = $112.50/sq ft/year
Turns per year: 365 / 35 = 10.4 turns
Total annual revenue: 250,000 × $4.50 = $1,125,000
```

**Financial Metrics:**
```
Gross margin % = (Revenue - COGS) / Revenue
EBITDA margin % = EBITDA / Revenue
Cash burn rate = Cash decrease per month (for pre-profitable)
Months of runway = Cash on hand / Monthly burn rate
Capital efficiency = Revenue / Total capital invested
```

### For Technology/SaaS Companies

**Revenue Metrics:**
```
MRR (Monthly Recurring Revenue) = Sum of all monthly subscription revenue
ARR (Annual Recurring Revenue) = MRR × 12
ACV (Average Contract Value) = Total contract value / Number of customers
```

**Growth Metrics:**
```
MRR Growth Rate = (Current MRR - Previous MRR) / Previous MRR × 100%
Net Revenue Retention = (Starting ARR + Expansion - Churn) / Starting ARR × 100%
Target: >100% (negative churn)
```

**Unit Economics:**
```
CAC = Sales & marketing costs / New customers
LTV = (ACV × Gross Margin %) / Churn Rate %
LTV:CAC Ratio (target 3:1+)
CAC Payback Period (target <12 months)
```

**Efficiency Metrics:**
```
Rule of 40 = Revenue Growth Rate % + EBITDA Margin %
Target: >40% (e.g., 30% growth + 15% EBITDA = 45%)

Magic Number = Net New ARR / Sales & Marketing Spend
Target: >0.75 (efficient growth)
```

---

## Comprehensive Unit Economics Example

### CEA Production Facility

**Facility Specifications:**
- Size: 20,000 sq ft
- Capacity: 500,000 lbs/year
- Crop: Leafy greens
- Cycle: 40 days (9 turns/year)

**Revenue:**
```
Production volume: 400,000 lbs/year (80% capacity)
Average selling price: $4.00/lb
Annual revenue: 400,000 × $4.00 = $1,600,000
```

**Variable Costs (per lb):**
```
Seeds: $0.10
Nutrients: $0.25
Growing media: $0.15
Packaging: $0.30
Direct labor: $0.50
Energy (variable): $0.40
Water: $0.05
Other: $0.05
Total variable cost: $1.80/lb
```

**Fixed Costs (annual):**
```
Rent/mortgage: $180,000
Salaries (management, admin): $300,000
Equipment depreciation: $100,000
Insurance: $30,000
Energy (base load): $60,000
Maintenance: $40,000
Marketing & sales: $80,000
G&A: $50,000
Total fixed costs: $840,000/year
```

**Unit Economics Calculation:**
```
Revenue per lb: $4.00
Variable cost per lb: $1.80
Contribution margin per lb: $2.20 (55%)

Total revenue: $1,600,000
Total variable costs: $720,000 (400K lbs × $1.80)
Total contribution margin: $880,000
Total fixed costs: $840,000
EBITDA: $40,000 (2.5% margin)

Break-even volume: $840,000 / $2.20 = 381,818 lbs (76% capacity)
Current volume: 400,000 lbs (80% capacity)
Margin of safety: 18,182 lbs (4.5%)
```

**Profitability at Different Volumes:**
```
At 300,000 lbs (60% capacity):
Revenue: $1,200,000
Variable costs: $540,000
Contribution: $660,000
Fixed costs: $840,000
EBITDA: -$180,000 (LOSS)

At 400,000 lbs (80% capacity):
EBITDA: $40,000 (breakeven)

At 500,000 lbs (100% capacity):
Revenue: $2,000,000
Variable costs: $900,000
Contribution: $1,100,000
Fixed costs: $840,000
EBITDA: $260,000 (13% margin)
```

**Key Insights:**
- Need >76% capacity utilization to be profitable
- Every additional pound above break-even contributes $2.20 to profit
- Doubling from 80% to 100% capacity increases EBITDA by $220K
- High operating leverage (small volume increases = large profit increases)

---

## Financial Model Scenarios

### Scenario Analysis Framework

**Base Case (Most Likely):**
- Use realistic assumptions
- 50% probability

**Upside Case (Optimistic but Achievable):**
- Higher volumes, prices, or growth
- Better efficiency
- 25% probability

**Downside Case (Conservative/Stress Test):**
- Lower volumes, prices, or growth
- Higher costs or delays
- 25% probability

**Example Scenarios for CEA Facility:**

| Metric | Downside | Base | Upside |
|--------|----------|------|--------|
| Capacity utilization | 60% | 80% | 95% |
| Average price | $3.50 | $4.00 | $4.50 |
| Variable cost/lb | $2.00 | $1.80 | $1.65 |
| Fixed costs | $900K | $840K | $800K |
| EBITDA | -$250K | $40K | $385K |

---

## Sensitivity Analysis

### Key Variables to Test

**For Production Operations:**
1. **Yield/volume** (±10%, ±20%)
2. **Selling price** (±5%, ±10%)
3. **Variable costs** (±10%, ±20%)
4. **Fixed costs** (±10%)
5. **Capacity utilization** (60%, 70%, 80%, 90%, 100%)

**Example Sensitivity Table - EBITDA Impact:**

| Variable | -20% | -10% | Base | +10% | +20% |
|----------|------|------|------|------|------|
| Volume | -$400K | -$180K | $40K | $260K | $480K |
| Price | -$280K | -$120K | $40K | $200K | $360K |
| Variable cost | $184K | $112K | $40K | -$32K | -$104K |
| Fixed cost | $208K | $124K | $40K | -$44K | -$128K |

**Insights:**
- Most sensitive to volume and price
- Less sensitive to fixed cost changes
- Variable cost control important but moderate impact

---

## Monthly Financial Dashboard

### Key Metrics to Track

**Revenue Metrics:**
- [ ] Monthly revenue (actual vs. budget)
- [ ] Revenue growth rate (MoM, YoY)
- [ ] Average selling price
- [ ] Volume sold

**Profitability Metrics:**
- [ ] Gross margin %
- [ ] Contribution margin %
- [ ] EBITDA
- [ ] EBITDA margin %
- [ ] Net income

**Efficiency Metrics:**
- [ ] Revenue per sq ft (production)
- [ ] Revenue per employee
- [ ] Cost per unit produced
- [ ] Yield per sq ft
- [ ] Capacity utilization %

**Cash Metrics:**
- [ ] Cash balance
- [ ] Monthly burn rate (if pre-profitable)
- [ ] Months of runway
- [ ] Cash conversion cycle
- [ ] Operating cash flow

**Customer Metrics (if B2B):**
- [ ] Number of customers
- [ ] Customer acquisition cost (CAC)
- [ ] Customer lifetime value (LTV)
- [ ] LTV:CAC ratio
- [ ] Customer churn rate

---

## Quick Decision Tools

### Should We Pursue This Opportunity?

**Unit Economics Checklist:**

☐ **Positive contribution margin?** (Revenue > Variable costs)
☐ **Achievable break-even?** (<80% capacity ideal)
☐ **Acceptable gross margin?** (>40% for production, >70% for SaaS)
☐ **Reasonable payback?** (<3 years for capex, <18 months for CAC)
☐ **Scalable?** (Margins improve with scale)
☐ **Defensible?** (Can maintain pricing and margins over time)

**If 5-6 checkmarks:** Proceed
**If 3-4 checkmarks:** Iterate and improve
**If <3 checkmarks:** Reconsider or pivot

---

### Pricing Decision Framework

**Minimum Price (Cost-Plus):**
```
Minimum Price = Variable Cost + (Fixed Cost / Expected Volume)
```

**Target Price (Margin-Based):**
```
Target Price = Total Cost / (1 - Target Margin %)
Example: $3.00 cost / (1 - 0.40) = $5.00 price for 40% margin
```

**Maximum Price (Value-Based):**
```
Maximum Price = Customer value received × Capture rate %
Example: $10 value × 50% = $5.00 maximum price
```

**Optimal Price:**
```
Should fall between Target and Maximum prices
Test different price points
Optimize for contribution margin × volume
```

---

## Common Mistakes to Avoid

1. **Confusing gross margin with contribution margin**
   - Gross margin = Revenue - COGS
   - Contribution margin = Revenue - Variable costs
   - They're different!

2. **Ignoring fixed costs in unit economics**
   - Must cover fixed costs to be profitable
   - Include in break-even analysis

3. **Underestimating costs**
   - Add 10-20% buffer for unexpected costs
   - Include all costs (don't forget small ones)

4. **Overestimating volumes**
   - Use conservative assumptions
   - Account for ramp-up time

5. **Neglecting cash flow**
   - Profitable ≠ cash-positive
   - Track working capital needs

6. **Forgetting about customer acquisition costs**
   - CAC can kill otherwise good economics
   - Must be <1/3 of LTV

7. **Not stress-testing**
   - Run downside scenarios
   - Ensure survivability in tough conditions

---

## Formulas Quick Reference

```
Gross Margin % = (Revenue - COGS) / Revenue × 100%

Contribution Margin % = (Revenue - Variable Costs) / Revenue × 100%

Break-Even Units = Fixed Costs / (Price - Variable Cost per Unit)

CAC = Sales & Marketing Costs / New Customers Acquired

LTV = (Average Annual Revenue per Customer × Gross Margin %) × Average Lifetime

LTV:CAC Ratio = LTV / CAC (Target: 3:1 or better)

CAC Payback = CAC / (Monthly Revenue per Customer × Gross Margin %)

Rule of 40 = Growth Rate % + EBITDA Margin % (Target: >40%)

Cash Runway = Cash Balance / Monthly Burn Rate
```

---

**Remember:** Unit economics must work at the individual unit level before you can build a successful large-scale business. Get the math right early!

---

*EcoFusion Academy - CEA Venture Development*
