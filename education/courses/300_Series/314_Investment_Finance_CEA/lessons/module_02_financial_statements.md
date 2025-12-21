# Module 2: Financial Statements for CEA

## Learning Objectives

By the end of this module, you will be able to:
- Prepare and interpret CEA-specific financial statements
- Understand accounting principles for agriculture operations
- Analyze financial health using statement analysis
- Identify key financial metrics and ratios
- Recognize financial red flags and opportunities

---

## 2.1 Introduction to Financial Statements

### The Three Core Financial Statements

Financial statements provide a comprehensive view of business performance and position:

1. **Income Statement (P&L)**: Profitability over a period
2. **Balance Sheet**: Financial position at a point in time
3. **Cash Flow Statement**: Cash movements during a period

**Relationship Between Statements:**

```
HOW THE STATEMENTS CONNECT

INCOME STATEMENT (Period)           BALANCE SHEET (Point in Time)
┌──────────────────────┐            ┌──────────────────────┐
│ Revenue              │            │ ASSETS               │
│ - COGS               │───────────►│ Cash ←───────────────┼──┐
│ = Gross Profit       │            │ Accounts Receivable  │  │
│ - Operating Expenses │            │ Inventory            │  │
│ = EBITDA            │            │ PP&E                 │  │
│ - Depreciation       │──┐         │                      │  │
│ = EBIT              │  │         │ LIABILITIES          │  │
│ - Interest           │  │         │ Accounts Payable     │  │
│ - Taxes              │  │         │ Debt                 │  │
│ = Net Income        │  │         │                      │  │
└──────────────────────┘  │         │ EQUITY               │  │
          │               │         │ Retained Earnings ←──┼──┘
          │               │         │ (Cumulative NI)      │
          │               │         └──────────────────────┘
          │               │                     │
          │               │                     ▼
          │               │         CASH FLOW STATEMENT
          │               │         ┌──────────────────────┐
          │               │         │ Operating Cash Flow  │
          └───────────────┼────────►│ + Net Income         │
                          └────────►│ + Depreciation       │
                                   │ +/- Working Capital  │
                                   │                      │
                                   │ Investing Cash Flow  │
                                   │ - CapEx              │
                                   │                      │
                                   │ Financing Cash Flow  │
                                   │ + Debt/Equity        │
                                   │ - Distributions      │
                                   │                      │
                                   │ = Change in Cash     │
                                   └──────────────────────┘
```

---

## 2.2 Income Statement (Profit & Loss)

### Standard P&L Format for CEA

```
VERTICAL FARM OPERATIONS LLC
INCOME STATEMENT
For the Year Ended December 31, 2024
(All figures in thousands)

REVENUE
Produce Sales                                    $8,450
Contract Growing                                    650
Other Income (tours, consulting)                    125
─────────────────────────────────────────────────────
Total Revenue                                    $9,225

COST OF GOODS SOLD
Seeds and Transplants                             $285
Nutrients and Inputs                               195
Packaging Materials                                425
Direct Labor (harvest, pack)                     1,850
Utilities - Growing (electricity)                1,250
Water and Utilities                                 95
Other Variable Costs                               385
─────────────────────────────────────────────────────
Total COGS                                       $4,485
─────────────────────────────────────────────────────
GROSS PROFIT                                     $4,740    51.4%

OPERATING EXPENSES
Salaries - Management & Admin                   $1,200
Salaries - Growing Operations                      850
Marketing and Sales                                465
Facility Rent/Lease                                720
Insurance                                          185
Repairs and Maintenance                            295
Professional Services                              145
Office and General Admin                           125
Other Operating Expenses                           215
─────────────────────────────────────────────────────
Total Operating Expenses                         $4,200
─────────────────────────────────────────────────────
EBITDA                                             $540     5.9%

Depreciation and Amortization                      $425
─────────────────────────────────────────────────────
EBIT (Operating Income)                            $115     1.2%

Interest Expense                                   $175
Interest Income                                      $8
─────────────────────────────────────────────────────
EARNINGS BEFORE TAXES (EBT)                        ($52)   -0.6%

Income Tax Expense/(Benefit)                       ($13)
─────────────────────────────────────────────────────
NET INCOME                                         ($39)   -0.4%
─────────────────────────────────────────────────────
```

### Key P&L Line Items Explained

**Revenue Recognition:**
- Recognize when produce is delivered and accepted
- Contract growing: typically upon delivery milestones
- Deferred revenue for advance payments
- Returns and allowances reduce gross revenue

**Cost of Goods Sold (COGS):**
- **Variable Costs**: Scale directly with production
  - Seeds, nutrients, packaging
  - Direct harvest and pack labor
  - Growing electricity (lights, climate)

- **Fixed Costs Often in COGS**:
  - Base facility energy
  - Minimum staffing levels
  - Standard maintenance

**Operating Expenses:**
- **Labor**: Management, sales, administration
- **Facility**: Rent, property taxes, insurance
- **Sales & Marketing**: Distribution, customer acquisition
- **G&A**: Professional services, office costs

**EBITDA Calculation:**
- Earnings Before Interest, Taxes, Depreciation, Amortization
- Key metric for comparing operations
- Proxy for cash generation before financing and accounting decisions

**Depreciation:**
- Buildings: 20-30 years straight-line
- Growing systems: 7-15 years
- LED lights: 5-10 years
- Automation equipment: 5-7 years
- Computers/software: 3-5 years

### CEA-Specific P&L Considerations

**Production Cycle Impact:**

```
PRODUCTION CYCLE VS. REVENUE TIMING

Crop: Leafy Greens (30-day cycle)
Monthly cycles: 12 per year
But... timing matters:

MONTH 1 (Startup)
├── Cost: Seeds, nutrients, labor, energy
├── Inventory: Work in progress
└── Revenue: $0

MONTH 2 (First Harvest)
├── Cost: Ongoing production + Month 1 costs realized
├── Inventory: Some conversion to finished goods
└── Revenue: First sales

STEADY STATE (Month 6+)
├── Cost: Normalized production costs
├── Inventory: Stable levels
└── Revenue: Consistent weekly/monthly

KEY ACCOUNTING CONSIDERATIONS:
├── Match costs to revenue period
├── Value inventory appropriately
├── Account for crop losses/waste
└── Handle seasonality in pricing
```

**Yield Variance Impact:**

| Scenario | Projected | Actual | Variance | Impact |
|----------|-----------|--------|----------|---------|
| **Base Case** | 100,000 lbs | 100,000 lbs | 0% | Revenue: $200K |
| **High Yield** | 100,000 lbs | 110,000 lbs | +10% | Revenue: $220K (+$20K) |
| **Low Yield** | 100,000 lbs | 85,000 lbs | -15% | Revenue: $170K (-$30K) |

*Note: Costs remain largely fixed, so variance flows directly to gross profit*

---

## 2.3 Balance Sheet

### Standard Balance Sheet Format

```
VERTICAL FARM OPERATIONS LLC
BALANCE SHEET
As of December 31, 2024
(All figures in thousands)

ASSETS

CURRENT ASSETS
Cash and Cash Equivalents                         $450
Accounts Receivable                                625
Inventory - Raw Materials                           85
Inventory - Work in Progress                        45
Inventory - Finished Goods                          95
Prepaid Expenses                                   125
Other Current Assets                                35
─────────────────────────────────────────────────────
Total Current Assets                            $1,460

PROPERTY, PLANT & EQUIPMENT
Land                                             $1,200
Building and Improvements                         8,500
Growing Systems and Equipment                     4,250
Furniture, Fixtures & Equipment                     385
Vehicles                                            165
Construction in Progress                            725
                                                 ───────
Subtotal PP&E                                   $15,225
Less: Accumulated Depreciation                   (2,875)
─────────────────────────────────────────────────────
Net PP&E                                        $12,350

OTHER ASSETS
Intangible Assets                                  $185
Goodwill                                            425
Deposits and Other                                   95
─────────────────────────────────────────────────────
Total Other Assets                                 $705
─────────────────────────────────────────────────────
TOTAL ASSETS                                    $14,515
═════════════════════════════════════════════════════

LIABILITIES

CURRENT LIABILITIES
Accounts Payable                                   $385
Accrued Expenses                                    245
Current Portion of Long-term Debt                   425
Customer Deposits                                    85
Other Current Liabilities                            95
─────────────────────────────────────────────────────
Total Current Liabilities                        $1,235

LONG-TERM LIABILITIES
Long-term Debt                                   $6,250
Equipment Financing                               1,450
Deferred Tax Liabilities                            125
Other Long-term Liabilities                          85
─────────────────────────────────────────────────────
Total Long-term Liabilities                      $7,910
─────────────────────────────────────────────────────
TOTAL LIABILITIES                                $9,145

SHAREHOLDERS' EQUITY
Common Stock                                       $100
Additional Paid-in Capital                        5,500
Retained Earnings (Accumulated Deficit)            (230)
─────────────────────────────────────────────────────
Total Shareholders' Equity                       $5,370
─────────────────────────────────────────────────────
TOTAL LIABILITIES & EQUITY                      $14,515
═════════════════════════════════════════════════════
```

### Balance Sheet Analysis

**Asset Composition:**

```
ASSET BREAKDOWN ANALYSIS

Current Assets: $1,460 (10% of total)
├── Cash: $450 (3.1%) - Low for operations
├── AR: $625 (4.3%) - ~25 days sales
├── Inventory: $225 (1.5%) - ~18 days
└── Other: $160 (1.1%)

Fixed Assets: $12,350 (85% of total)
├── Land & Building: $6,825 (47%)
├── Growing Systems: $4,250 (29%)
├── Equipment: $550 (4%)
├── CIP: $725 (5%)
└── Net of depreciation

Assessment:
├── Very capital intensive (85% fixed assets)
├── Low liquidity (only 10% current)
├── Expansion underway (CIP balance)
└── Asset-heavy model = higher risk
```

**Capital Structure:**

```
CAPITALIZATION ANALYSIS

Total Capital: $14,515
├── Debt: $8,125 (56%)
├── Equity: $5,370 (37%)
└── Working Capital Deficit: $1,020

Debt-to-Equity Ratio: 1.5x
├── Industry range: 0.5-2.0x
├── Moderate leverage
└── Refinancing risk

Equity Composition:
├── Invested capital: $5,600
├── Accumulated losses: ($230)
└── Multiple funding rounds likely
```

**Liquidity Position:**

| Metric | Calculation | Result | Assessment |
|--------|-------------|--------|------------|
| **Current Ratio** | Current Assets / Current Liabilities | 1.18 | Below ideal (2.0+) |
| **Quick Ratio** | (Current Assets - Inventory) / Current Liabilities | 0.95 | Tight liquidity |
| **Working Capital** | Current Assets - Current Liabilities | $225K | Limited cushion |
| **Cash Ratio** | Cash / Current Liabilities | 0.36 | Low cash buffer |

**Recommendations:**
- Improve cash position (target 45-60 days operating expenses)
- Reduce AR collection period
- Refinance short-term debt to long-term
- Consider equity injection or sale-leaseback

---

## 2.4 Cash Flow Statement

### Cash Flow Statement Format

```
VERTICAL FARM OPERATIONS LLC
STATEMENT OF CASH FLOWS
For the Year Ended December 31, 2024
(All figures in thousands)

CASH FLOWS FROM OPERATING ACTIVITIES
Net Income (Loss)                                  ($39)
Adjustments to reconcile to cash flow:
  Depreciation and Amortization                     425
  Changes in operating assets and liabilities:
    Accounts Receivable                            (125)
    Inventory                                       (35)
    Prepaid Expenses                                (25)
    Accounts Payable                                 85
    Accrued Expenses                                 45
    Other working capital changes                    15
─────────────────────────────────────────────────────
Net Cash Provided by Operating Activities          $346

CASH FLOWS FROM INVESTING ACTIVITIES
Purchase of Property, Plant & Equipment         ($1,450)
Construction in Progress                           (725)
Investment in Intangibles                           (85)
Proceeds from Sale of Equipment                      25
─────────────────────────────────────────────────────
Net Cash Used in Investing Activities           ($2,235)

CASH FLOWS FROM FINANCING ACTIVITIES
Proceeds from Long-term Debt                     $1,200
Principal Payments on Debt                         (485)
Proceeds from Equity Issuance                     1,500
Distributions to Shareholders                        (0)
─────────────────────────────────────────────────────
Net Cash Provided by Financing Activities        $2,215
─────────────────────────────────────────────────────

NET INCREASE IN CASH                               $326
Cash at Beginning of Year                          $124
─────────────────────────────────────────────────────
CASH AT END OF YEAR                                $450
═════════════════════════════════════════════════════
```

### Cash Flow Analysis

**Operating Cash Flow Components:**

```
OPERATING CASH FLOW WATERFALL

Net Income:                              ($39)
│
├─► Add Back: Depreciation              +$425
│   (Non-cash expense)
│
├─► Working Capital Changes:
│   ├── AR Increase (cash outflow)       ($125)
│   ├── Inventory Increase               ($35)
│   ├── Prepaid Increase                 ($25)
│   ├── AP Increase (cash inflow)        +$85
│   └── Accrued Increase                 +$45
│
└─► Operating Cash Flow:                 $346

KEY INSIGHTS:
├── Negative earnings but positive cash flow
├── Depreciation is large non-cash charge
├── Working capital is a drag (growth phase)
└── Cash generation improving but still weak
```

**Free Cash Flow Calculation:**

```
FREE CASH FLOW ANALYSIS

Operating Cash Flow                      $346
Less: Capital Expenditures            ($2,175)
────────────────────────────────────────────
Free Cash Flow                        ($1,829)

INTERPRETATION:
├── Negative FCF = growth investment phase
├── Company is consuming cash
├── Requires external financing
└── Must reach cash flow positive eventually

REQUIRED EXTERNAL FINANCING:
Operating Cash Flow                      $346
Required for Growth CapEx             $2,175
Required for Debt Service               $485
────────────────────────────────────────────
Total Cash Needs                      $2,660
Available from Operations               $346
────────────────────────────────────────────
Financing Gap                         $2,314

Covered by:
├── Debt proceeds:     $1,200
└── Equity proceeds:   $1,500
                       ──────
                       $2,700 ✓
```

**Cash Conversion Cycle:**

| Component | Days | Calculation |
|-----------|------|-------------|
| Days Sales Outstanding (DSO) | 25 | (AR / Revenue) × 365 |
| Days Inventory Outstanding (DIO) | 18 | (Inventory / COGS) × 365 |
| Days Payable Outstanding (DPO) | 31 | (AP / COGS) × 365 |
| **Cash Conversion Cycle** | **12 days** | DSO + DIO - DPO |

*Low CCC is generally good - company converts inventory to cash quickly*

---

## 2.5 Financial Ratios and Metrics

### Profitability Ratios

| Ratio | Formula | Example | Industry Benchmark |
|-------|---------|---------|-------------------|
| **Gross Margin** | Gross Profit / Revenue | 51.4% | 40-60% |
| **EBITDA Margin** | EBITDA / Revenue | 5.9% | 15-30% (mature) |
| **Operating Margin** | EBIT / Revenue | 1.2% | 10-25% (mature) |
| **Net Margin** | Net Income / Revenue | -0.4% | 5-15% (mature) |
| **Return on Assets** | Net Income / Avg Assets | -0.3% | 5-15% |
| **Return on Equity** | Net Income / Avg Equity | -0.7% | 15-25% |

### Liquidity Ratios

| Ratio | Formula | Example | Target |
|-------|---------|---------|--------|
| **Current Ratio** | Current Assets / Current Liabilities | 1.18 | >2.0 |
| **Quick Ratio** | (Current Assets - Inventory) / Current Liabilities | 0.95 | >1.0 |
| **Cash Ratio** | Cash / Current Liabilities | 0.36 | >0.5 |
| **Operating Cash Flow Ratio** | Operating CF / Current Liabilities | 0.28 | >0.5 |

### Leverage Ratios

| Ratio | Formula | Example | Target |
|-------|---------|---------|--------|
| **Debt-to-Equity** | Total Debt / Total Equity | 1.51 | <2.0 |
| **Debt-to-Assets** | Total Debt / Total Assets | 0.56 | <0.6 |
| **Interest Coverage** | EBIT / Interest Expense | 0.66 | >3.0 |
| **Debt Service Coverage** | (EBITDA - CapEx) / (Principal + Interest) | -0.69 | >1.25 |

### Efficiency Ratios

| Ratio | Formula | Example | Target |
|-------|---------|---------|--------|
| **Asset Turnover** | Revenue / Avg Total Assets | 0.64 | >1.0 |
| **Inventory Turnover** | COGS / Avg Inventory | 19.9x | 15-30x |
| **Receivables Turnover** | Revenue / Avg AR | 14.8x | 12-20x |
| **Fixed Asset Turnover** | Revenue / Net PP&E | 0.75 | 0.5-1.5 |

### CEA-Specific Operating Metrics

| Metric | Calculation | Example | Benchmark |
|--------|-------------|---------|-----------|
| **Revenue per Sq Ft** | Annual Revenue / Production Sq Ft | $92 | $80-150 |
| **Production per Sq Ft** | Annual Lbs / Production Sq Ft | 46 lbs | 40-100 lbs |
| **Revenue per Lb** | Revenue / Total Lbs Produced | $2.00 | $1.50-4.00 |
| **COGS per Lb** | COGS / Total Lbs Produced | $1.03 | $0.75-1.50 |
| **Labor % of Revenue** | Labor Costs / Revenue | 29% | 20-40% |
| **Energy % of Revenue** | Energy Costs / Revenue | 14% | 10-25% |
| **Yield Achievement %** | Actual Lbs / Target Lbs | 92% | >95% |

---

## 2.6 Financial Statement Analysis Techniques

### Horizontal Analysis (Trend Analysis)

```
INCOME STATEMENT TREND ANALYSIS
(All figures in thousands)

                              2022      2023      2024    YoY Growth  2-Yr CAGR
                            ──────    ──────    ──────    ──────────  ─────────
Revenue                     $6,250    $7,850    $9,225       17.5%      21.5%
COGS                         3,750     4,550     4,485        -1.4%       9.4%
Gross Profit                $2,500    $3,300    $4,740       43.6%      37.6%
  Gross Margin                 40%       42%     51.4%      +9.4pts

Operating Expenses          $2,650    $3,450    $4,200       21.7%      25.9%
EBITDA                       ($150)    ($150)     $540       NM         NM
  EBITDA Margin               -2.4%     -1.9%      5.9%     +7.8pts

KEY OBSERVATIONS:
├── Strong revenue growth (21.5% CAGR)
├── Gross margin expanding significantly (efficiency gains)
├── OpEx growing but slower than revenue (scale benefits)
├── EBITDA inflection to positive (2024)
└── Positive trajectory but still not profitable at net income
```

### Vertical Analysis (Common-Size Statements)

```
COMMON-SIZE INCOME STATEMENT
(Each line as % of Revenue)

                              2022      2023      2024    Trend
                            ──────    ──────    ──────    ─────
Revenue                      100.0%    100.0%    100.0%

COGS Breakdown:
  Direct Labor                24.0%     22.5%     20.1%    Improving
  Energy                      16.0%     14.8%     13.5%    Improving
  Materials                    8.0%      7.2%      7.8%    Stable
  Other COGS                  12.0%     13.5%     13.2%    Stable
Total COGS                    60.0%     58.0%     48.6%    Improving ✓

Gross Profit                  40.0%     42.0%     51.4%    Improving ✓

Operating Expenses:
  Labor - Ops                 10.5%     11.2%      9.2%    Improving
  Labor - Admin                8.0%      7.8%     13.0%    Worsening
  Facility Costs              12.0%     10.5%      7.8%    Improving
  Marketing/Sales              5.5%      5.1%      5.0%    Stable
  Other OpEx                   6.4%      9.3%     10.5%    Worsening
Total OpEx                    42.4%     43.9%     45.5%    Worsening ✗

EBITDA                        -2.4%     -1.9%      5.9%    Improving ✓

INSIGHTS:
├── Gross margin improvement driven by labor and energy efficiency
├── Operating expenses not scaling efficiently (needs attention)
├── Administrative overhead growing (potential bloat)
└── EBITDA positive but OpEx discipline needed
```

### DuPont Analysis (ROE Decomposition)

```
RETURN ON EQUITY DECOMPOSITION

ROE = Net Margin × Asset Turnover × Equity Multiplier

Historical ROE Analysis:
                              2022      2023      2024
                            ──────    ──────    ──────
Net Margin                   -4.0%     -2.5%     -0.4%
Asset Turnover               0.52×     0.61×     0.64×
Equity Multiplier            2.85×     2.68×     2.70×
                            ──────    ──────    ──────
ROE                          -5.9%     -4.1%     -0.7%

COMPONENT DRIVERS:

Net Margin (Profitability):
├── Improving from -4.0% to -0.4%
├── Approaching breakeven
└── Further cost control needed

Asset Turnover (Efficiency):
├── Improving from 0.52× to 0.64×
├── Better asset utilization
└── Still below 1.0× (capital intensive)

Equity Multiplier (Leverage):
├── Relatively stable ~2.7×
├── Moderate leverage
└── Appropriate for growth stage

PATH TO POSITIVE ROE:
├── Net margin improvement (primary focus)
├── Continue improving asset efficiency
└── Maintain leverage at current levels
```

---

## 2.7 Financial Red Flags and Warning Signs

### Revenue Red Flags

**Warning Signs:**
- Declining revenue growth rate
- Increasing customer concentration
- Growing days sales outstanding (DSO)
- Revenue volatility or seasonality issues
- Disconnect between revenue and cash collections

**Example Analysis:**
```
REVENUE QUALITY CHECK

                              Q1       Q2       Q3       Q4
Revenue Growth YoY           25%      22%      18%      12%    ← Decelerating
Revenue (000s)            $2,150   $2,280   $2,345   $2,450

Top 5 Customer %             45%      48%      52%      55%    ← Concentration risk
DSO (days)                    22       24       27       31    ← Collections slowing

RED FLAG: Decelerating growth + concentration risk + slowing collections
```

### Margin Red Flags

**Warning Signs:**
- Declining gross margins
- Increasing COGS as % of revenue
- Operating expenses growing faster than revenue
- EBITDA margin compression
- Increasing reliance on non-operating income

### Cash Flow Red Flags

**Warning Signs:**
- Negative operating cash flow (beyond startup)
- Growing gap between earnings and cash flow
- Increasing capital expenditure requirements
- Rising working capital needs
- Frequent equity/debt raises to fund operations

**Cash Flow Quality Analysis:**
```
CASH FLOW QUALITY ASSESSMENT

Operating Cash Flow vs. Net Income:
                              2022      2023      2024
Net Income                   ($250)    ($200)     ($39)
Operating Cash Flow          ($125)      $85      $346
Difference                    $125     $285      $385

Quality Score:
├── 2022: Negative OCF worse than earnings (POOR)
├── 2023: Positive OCF despite loss (IMPROVING)
└── 2024: Strong OCF vs. earnings (GOOD)

Free Cash Flow:
Operating CF                  ($125)     $85      $346
Less: CapEx                  ($1,850) ($1,650)  ($2,175)
Free Cash Flow              ($1,975) ($1,565)  ($1,829)

Assessment: OCF improving but FCF still negative due to growth CapEx
```

### Balance Sheet Red Flags

**Warning Signs:**
- Deteriorating current ratio
- High debt-to-equity ratio
- Goodwill/intangibles >20% of assets
- Related party transactions
- Off-balance sheet liabilities
- Frequent asset write-downs

---

## 2.8 Financial Forecasting Basics

### Building a Basic Financial Forecast

**Step 1: Revenue Projection**
```
REVENUE BUILD-UP MODEL

Facility Information:
├── Production square feet: 100,000
├── Growing levels: 10
├── Crop cycle: 30 days
└── Annual cycles: 12

Yield Assumptions:
├── Heads per sq ft per cycle: 4.2
├── Annual heads per sq ft: 50.4
└── Total annual production: 5,040,000 heads

Pricing and Revenue:
├── Average selling price: $1.95/head
├── Waste/shrink factor: 5%
└── Effective production: 4,788,000 heads

REVENUE FORECAST:
4,788,000 heads × $1.95 = $9,337,000

Sensitivity Analysis:
├── Yield -10%: $8,403,000
├── Base case: $9,337,000
└── Yield +10%: $10,271,000
```

**Step 2: Cost Projection**
```
COST MODEL

Variable Costs (per head):
├── Seeds: $0.08
├── Nutrients: $0.05
├── Packaging: $0.15
├── Energy: $0.30
└── Total variable: $0.58/head

Annual Variable Costs:
4,788,000 heads × $0.58 = $2,777,000 (30% of revenue)

Fixed Costs (annual):
├── Labor (growing + harvest): $2,100,000
├── Management/admin: $1,200,000
├── Facility costs: $920,000
├── Other operating: $850,000
└── Total fixed: $5,070,000

Total COGS + OpEx: $7,847,000 (84% of revenue)
EBITDA: $1,490,000 (16% margin)
```

### Pro Forma Financial Statements

**3-Year Projection Example:**
```
PRO FORMA INCOME STATEMENT
(All figures in thousands)

                              2025E     2026E     2027E
                            ───────   ───────   ───────
Revenue                      $9,337   $11,950   $14,740
  Growth rate                 +1.2%    +28.0%    +23.3%
  Drivers:                   Same      New       New
                             facility  facility  facility

COGS                         $4,535    $5,617    $6,779
  % of revenue                48.6%     47.0%     46.0%
Gross Profit                 $4,802    $6,333    $7,961
  Gross margin                51.4%     53.0%     54.0%

Operating Expenses           $4,312    $5,019    $6,002
  % of revenue                46.2%     42.0%     40.7%

EBITDA                         $490    $1,314    $1,959
  EBITDA margin                5.2%     11.0%     13.3%

Depreciation                   $438      $625      $815
EBIT                            $52      $689    $1,144
Interest                       $185      $235      $275
Net Income                   ($133)     $363      $696
  Net margin                  -1.4%      3.0%      4.7%
```

---

## Key Takeaways

1. **Three Core Statements**: Income statement shows profitability, balance sheet shows financial position, cash flow statement shows cash movements

2. **CEA-Specific Considerations**: Production cycles, biological inventory, yield variability, and capital intensity require special accounting attention

3. **Profitability Metrics**: Gross margin, EBITDA margin, and operating margin are key indicators of operational health and efficiency

4. **Liquidity Management**: Current ratio, quick ratio, and working capital management are critical for CEA operations with high fixed costs

5. **Cash Flow Focus**: Operating cash flow and free cash flow matter more than accounting profits, especially for capital-intensive CEA operations

6. **Ratio Analysis**: Comprehensive ratio analysis across profitability, liquidity, leverage, and efficiency provides holistic view of financial health

7. **Trend Analysis**: Horizontal and vertical analysis reveal performance trends and areas requiring management attention

8. **Red Flag Recognition**: Declining margins, deteriorating cash flow, and balance sheet weakness signal potential problems

---

## Additional Resources

**Accounting Standards:**
- ASC 905: Agriculture accounting guidance
- IAS 41: Biological assets (international)
- GAAP revenue recognition standards

**Financial Analysis Tools:**
- Excel financial modeling templates
- QuickBooks/Xero for CEA operations
- Financial statement analysis software

**Recommended Reading:**
- "Financial Intelligence" by Berman & Knight
- "Financial Statements: A Step-by-Step Guide" by Ittelson
- Industry-specific CFO forums and resources

---

*Module 2 of Course 314: Investment & Finance for CEA*
*Next Module: Project Finance Fundamentals*
