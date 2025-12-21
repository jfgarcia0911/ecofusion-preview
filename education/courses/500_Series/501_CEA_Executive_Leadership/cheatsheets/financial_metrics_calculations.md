# CEA Financial Metrics & Calculations Quick Reference

**Course 501: CEA Executive Leadership**

---

## Unit Economics

### Revenue per Unit
```
Revenue/Unit = Average Selling Price × (1 - Waste %)
```

**Example:** $2.50 ASP × (1 - 0.05 waste) = $2.375/unit actual revenue

### Cost per Unit
```
Variable Cost/Unit = Seeds + Nutrients + Packaging + Direct Labor + Shipping
```

**Example:** $0.08 + $0.12 + $0.15 + $0.25 + $0.10 = $0.70/unit

### Contribution Margin
```
Contribution Margin/Unit = Revenue/Unit - Variable Cost/Unit
Contribution Margin % = (CM/Unit ÷ Revenue/Unit) × 100
```

**Example:** $2.375 - $0.70 = $1.675/unit (71% margin)

---

## Facility Economics

### Annual Revenue Calculation
```
Annual Revenue =
  Capacity (units/year)
  × Utilization Rate %
  × Average Selling Price
  × (1 - Waste %)
```

**Example:**
- 2M heads/year capacity
- 85% utilization
- $2.50 ASP
- 5% waste
- **Revenue = 2M × 0.85 × $2.50 × 0.95 = $4.04M**

### EBITDA Calculation
```
EBITDA = Total Revenue - Variable Costs - Fixed Costs
EBITDA % = (EBITDA ÷ Revenue) × 100
```

**Example:**
- Revenue: $4.04M
- Variable Costs: $1.20M (1.7M units × $0.70)
- Fixed Costs: $2.4M
- **EBITDA = $4.04M - $1.20M - $2.4M = $440K (11%)**

### Revenue per Square Foot
```
Revenue/SF = Annual Revenue ÷ Total Growing Area (SF)
```

**Target:** $50-150/SF annually for leafy greens

---

## Working Capital

### Days Sales Outstanding (DSO)
```
DSO = (Accounts Receivable ÷ Daily Revenue)
Daily Revenue = Annual Revenue ÷ 365
```

**Target:** <40 days for CEA

### Days Inventory Outstanding (DIO)
```
DIO = (Inventory ÷ Daily COGS)
Daily COGS = Annual COGS ÷ 365
```

**Target:** <15 days for CEA (fast crop cycles)

### Days Payable Outstanding (DPO)
```
DPO = (Accounts Payable ÷ Daily COGS)
```

**Target:** 35-45 days

### Cash Conversion Cycle
```
CCC = DSO + DIO - DPO
```

**Example:** 40 + 15 - 40 = 15 days

### Working Capital Requirement
```
WC Need = (Annual Revenue ÷ 365) × CCC
```

**Example:** ($4M ÷ 365) × 15 = $165K

---

## Capital Efficiency

### Capital per Acre
```
Capital/Acre = Total Facility Investment ÷ Growing Acres
```

**Typical Range:** $5-15M per acre (vertical farms high end)

### Revenue per Dollar of Capital
```
Revenue/$ Capital = Annual Revenue ÷ Total Capital Invested
```

**Target:** $0.20-0.40 (means 2.5-5 year payback)

### Return on Invested Capital (ROIC)
```
ROIC = NOPAT ÷ Invested Capital
NOPAT = EBITDA - Taxes (simplified)
```

**Target:** >15% for mature facilities

---

## Valuation Metrics

### Revenue Multiple
```
Enterprise Value = Annual Revenue × Revenue Multiple
```

**CEA Benchmarks:**
- Private, early revenue: 1-2x
- Private, growing profitable: 2-3x
- Public companies: 0.5-2.5x (varies widely)

### EBITDA Multiple
```
Enterprise Value = EBITDA × EBITDA Multiple
```

**CEA Benchmarks:**
- Private, profitable: 6-10x
- Public companies: 8-15x

### Equity Value Calculation
```
Equity Value = Enterprise Value - Net Debt
Net Debt = Total Debt - Cash
```

**Example:**
- Enterprise Value: $30M
- Debt: $5M
- Cash: $2M
- Net Debt: $3M
- **Equity Value = $30M - $3M = $27M**

---

## Investment Returns

### Payback Period
```
Payback = Total Investment ÷ Annual Cash Flow
```

**Example:**
- Investment: $25M
- Annual CF: $4M
- **Payback = 6.25 years**

### Internal Rate of Return (IRR)
```
NPV = Σ [CFt ÷ (1 + IRR)^t] - Initial Investment = 0
```

**Solve for IRR** (use Excel IRR function or financial calculator)

**Target:** >18% for venture, >12% for mature

### Net Present Value (NPV)
```
NPV = Σ [CFt ÷ (1 + r)^t] - Initial Investment
```

Where r = discount rate (hurdle rate)

**Decision:** If NPV > 0, invest

---

## Cash Flow Analysis

### Operating Cash Flow
```
Operating CF = EBITDA - Taxes - Change in Working Capital
```

### Free Cash Flow
```
Free CF = Operating CF - Capital Expenditures
```

**Target:** Positive free cash flow by Year 3-4 for facility

### Cash Runway
```
Cash Runway (months) = Cash Balance ÷ Monthly Burn Rate
```

**Target:** 12+ months minimum

---

## Key Performance Indicators (KPIs)

### Operational KPIs

**Utilization Rate:**
```
Utilization % = Actual Production ÷ Nameplate Capacity
```
**Target:** 85-90%

**Yield Achievement:**
```
Yield % = Actual Yield ÷ Target Yield
```
**Target:** 95%+

**Quality Rate:**
```
Quality % = Marketable Units ÷ Total Units Produced
```
**Target:** 95%+

**On-Time Delivery:**
```
OTD % = Orders Delivered On-Time ÷ Total Orders
```
**Target:** 98%+

### Financial KPIs

**Gross Margin:**
```
Gross Margin % = (Revenue - COGS) ÷ Revenue × 100
```
**Target:** 40-60% for CEA

**EBITDA Margin:**
```
EBITDA % = EBITDA ÷ Revenue × 100
```
**Target:** 15-25% at scale

**Revenue Growth:**
```
Growth % = (Current Revenue - Prior Revenue) ÷ Prior Revenue × 100
```
**Target:** 25-50% annually (growth stage)

---

## Sensitivity Analysis

### Key Variable Impact

**Example: Impact on Annual EBITDA**

| Variable | Base | -10% | +10% | EBITDA Impact |
|----------|------|------|------|---------------|
| **Utilization** | 85% | 75% | 90% | -$280K / +$110K |
| **ASP** | $2.50 | $2.25 | $2.75 | -$425K / +$425K |
| **Energy Cost** | $600K | $750K | $500K | -$150K / +$100K |
| **Yield** | 100% | 90% | 110% | -$284K / +$284K |

**Use:** Identify key value drivers and risks

### Break-Even Analysis
```
Break-Even Volume = Fixed Costs ÷ Contribution Margin per Unit
```

**Example:**
- Fixed Costs: $2.4M/year
- CM/Unit: $1.675
- **Break-Even = 1,433,000 units/year (72% utilization)**

---

## Fundraising Calculations

### Dilution Calculation
```
Post-Money Valuation = Pre-Money + Investment Amount
Investor % = Investment ÷ Post-Money Valuation
Founder Dilution = Investor % × Founder Pre-Investment %
```

**Example:**
- Pre-money: $30M
- Investment: $10M
- Post-money: $40M
- Investor ownership: 25%
- If founder had 30% pre, now has: 30% × 75% = 22.5%

### Venture Capital Method
```
Required % = (Investment × Target Multiple) ÷ Exit Valuation
Post-Money = Investment ÷ Required %
```

**Example:**
- Investment: $20M
- Target: 10x return = $200M
- Expected exit value: $2B
- Required %: $200M ÷ $2B = 10%
- **Post-Money = $20M ÷ 0.10 = $200M**

---

## Benchmarking Ranges

### By Facility Stage

| Metric | Year 1 | Year 2 | Year 3 | Mature |
|--------|--------|--------|--------|--------|
| **Utilization** | 45% | 70% | 85% | 88% |
| **Gross Margin** | 25% | 40% | 50% | 55% |
| **EBITDA %** | -38% | 3% | 11% | 15% |
| **Revenue/SF** | $40 | $90 | $120 | $140 |

### By Crop Type

| Crop | Revenue/SF | Gross Margin | Cycles/Year |
|------|-----------|--------------|-------------|
| **Leafy Greens** | $100-150 | 40-50% | 12-18 |
| **Herbs** | $80-120 | 45-55% | 10-15 |
| **Tomatoes** | $120-180 | 35-45% | 2-3 |
| **Strawberries** | $200-300 | 50-60% | 1-2 |

---

## Quick Calculation Tools

### Rule of 72 (Doubling Time)
```
Years to Double = 72 ÷ Growth Rate %
```

**Example:** 20% growth → 72 ÷ 20 = 3.6 years to double

### Quick Revenue Estimate
```
Monthly Revenue ≈ Annual Revenue ÷ 12
Weekly Revenue ≈ Annual Revenue ÷ 52
Daily Revenue ≈ Annual Revenue ÷ 365
```

### Quick Margin Check
```
If Gross Margin < 40%, very difficult to reach EBITDA profitability
If Gross Margin > 60%, strong path to profitability
```

---

## Excel Formulas

**IRR:** `=IRR(values, [guess])`
**NPV:** `=NPV(rate, value1, value2, ...) + initial_investment`
**PMT (Loan Payment):** `=PMT(rate, nper, pv)`
**FV (Future Value):** `=FV(rate, nper, pmt, [pv])`

---

## Common Mistakes to Avoid

1. **Confusing Revenue with Cash:** Revenue recognized ≠ cash collected
2. **Ignoring Working Capital:** Growing companies need more WC
3. **Forgetting Ramp Periods:** Facilities take 2-3 years to mature
4. **Over-Optimistic Utilization:** 100% is impossible; plan for 85-90%
5. **Underestimating Energy Costs:** Model at higher energy prices for safety
6. **Not Accounting for Waste:** Always include 3-5% waste factor
7. **Missing Seasonality:** Even CEA has some demand variation
8. **Ignoring Cannibalization:** New facilities may cannibalize existing sales

---

**Pro Tips:**
- Build 3 scenarios: Base, Upside, Downside
- Sensitivity test your top 5 assumptions
- Update forecasts monthly vs. actuals
- Track unit economics religiously
- Model at SKU level for accuracy
- Always show your work and assumptions

---

*Cheatsheet 2 of 4 | Course 501: CEA Executive Leadership*
