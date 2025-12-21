# Module 4: Financial Modeling for CEA

## Learning Objectives

By the end of this module, you will be able to:
- Build comprehensive financial models for CEA operations
- Structure integrated three-statement models
- Develop scenario and sensitivity analyses
- Create investor-ready financial projections
- Apply best practices in model design and documentation
- Perform valuation using model outputs

---

## 4.1 Financial Modeling Fundamentals

### Purpose of Financial Models

**Key Applications:**
- **Investment Decisions**: Evaluate project viability and returns
- **Fundraising**: Demonstrate business potential to investors
- **Operations Planning**: Set budgets and targets
- **Scenario Testing**: Assess risks and opportunities
- **Valuation**: Determine business or project value
- **Refinancing**: Support debt restructuring

### Model Design Principles

**Best Practices:**

1. **Structure and Flow**
   - Inputs → Calculations → Outputs
   - Clear separation of components
   - Logical flow from left to right, top to bottom

2. **Clarity and Transparency**
   - One formula per cell when possible
   - Consistent formatting and structure
   - Clear labeling and headers
   - Color coding for cell types

3. **Flexibility and Scalability**
   - Assumption-driven (not hard-coded)
   - Easy to update and modify
   - Scalable to different scenarios
   - Version control

4. **Accuracy and Error-Checking**
   - Balance checks and validations
   - Circular reference avoidance
   - Unit consistency
   - Cross-checks and reconciliations

### Model Architecture

```
FINANCIAL MODEL STRUCTURE

TAB 1: INSTRUCTIONS & SUMMARY
├── Model purpose and scope
├── User guide
├── Key assumptions summary
├── Executive dashboard
└── Sensitivity analysis results

TAB 2: ASSUMPTIONS
├── Production assumptions
├── Revenue assumptions
├── Cost assumptions
├── CapEx schedule
├── Financing assumptions
└── General parameters

TAB 3: REVENUE MODEL
├── Production volume calculations
├── Pricing by product/channel
├── Revenue by month/quarter/year
├── Growth rates and seasonality
└── Revenue drivers analysis

TAB 4: OPERATING COSTS
├── Cost of Goods Sold detail
├── Operating expenses
├── Labor model
├── Energy costs
└── Cost inflation

TAB 5: CAPITAL EXPENDITURES
├── Initial CapEx schedule
├── Expansion CapEx
├── Maintenance CapEx
├── Depreciation schedule
└── Asset register

TAB 6: WORKING CAPITAL
├── Accounts Receivable
├── Inventory
├── Accounts Payable
├── Other working capital items
└── Working capital requirements

TAB 7: DEBT SCHEDULE
├── Debt drawdowns
├── Amortization
├── Interest calculations
├── Debt covenants
└── Refinancing assumptions

TAB 8: INCOME STATEMENT
├── Monthly/quarterly detail
├── Annual summary
├── Year-over-year analysis
└── Common-size statements

TAB 9: BALANCE SHEET
├── Assets schedule
├── Liabilities schedule
├── Shareholders' equity
└── Balance checks

TAB 10: CASH FLOW STATEMENT
├── Operating cash flow
├── Investing cash flow
├── Financing cash flow
└── Free cash flow calculations

TAB 11: RETURNS ANALYSIS
├── NPV calculations
├── IRR calculations
├── Payback analysis
├── Multiple scenarios
└── Equity vs. project returns

TAB 12: SENSITIVITY & SCENARIOS
├── One-way sensitivity tables
├── Two-way sensitivity analysis
├── Scenario comparisons
├── Monte Carlo simulation (advanced)
└── Break-even analysis

TAB 13: VALUATION
├── DCF valuation
├── Comparable company analysis
├── Precedent transaction
├── Terminal value calculations
└── Valuation summary

TAB 14: OUTPUTS & CHARTS
├── Key metrics dashboard
├── Financial charts
├── Covenant compliance
├── Investor presentation charts
└── Export-ready summaries
```

---

## 4.2 Building the Revenue Model

### Production Volume Calculations

```
PRODUCTION MODEL - VERTICAL FARM EXAMPLE

FACILITY SPECIFICATIONS:
├── Total building space: 60,000 sq ft
├── Production space: 50,000 sq ft (83% of total)
├── Growing levels: 10
├── Net growing area: 500,000 sq ft (10 × 50,000)
└── Support space: 10,000 sq ft (17%)

CROP MIX & CYCLES:

Product        % of Area   Area (sq ft)  Cycle (days)  Cycles/Yr
───────────────────────────────────────────────────────────────
Butterhead        40%       200,000         28          13.0
Romaine           25%       125,000         32          11.4
Arugula           15%        75,000         25          14.6
Baby Kale         12%        60,000         30          12.2
Specialty Mix      8%        40,000         28          13.0
───────────────────────────────────────────────────────────────
TOTAL            100%       500,000

YIELD ASSUMPTIONS:

Product        Density     Yield/Cycle    Annual Yield    Weight/Unit
            (units/sq ft)   (units/sq ft)  (units/sq ft)      (lbs)
─────────────────────────────────────────────────────────────────────
Butterhead       4.5          4.3            55.9           0.40
Romaine          3.8          3.6            41.0           0.65
Arugula          6.0          5.7            83.2           0.20
Baby Kale        5.5          5.2            63.4           0.25
Specialty Mix    5.0          4.8            62.4           0.30

ANNUAL PRODUCTION CALCULATION:

Product        Area      Annual Yield    Total Units    Total Lbs
────────────────────────────────────────────────────────────────
Butterhead    200,000      55.9         11,180,000      4,472,000
Romaine       125,000      41.0          5,125,000      3,331,250
Arugula        75,000      83.2          6,240,000      1,248,000
Baby Kale      60,000      63.4          3,804,000        951,000
Specialty Mix  40,000      62.4          2,496,000        748,800
────────────────────────────────────────────────────────────────
TOTAL         500,000                   28,845,000     10,751,050

SHRINK & WASTE ADJUSTMENTS:
├── Production waste: 5% (quality, testing)
├── Distribution shrink: 3% (damage, returns)
└── Net saleable: 92%

NET ANNUAL PRODUCTION: 9,890,966 lbs
```

### Revenue Modeling

```
REVENUE MODEL

PRICING STRUCTURE (Year 1):

Product          Wholesale    Retail      DTC        Avg Price
                (70% of mix) (25%)      (5%)       (Blended)
─────────────────────────────────────────────────────────────
Butterhead         $1.85      $2.95      $3.50        $2.13
Romaine            $1.75      $2.75      $3.25        $2.02
Arugula            $3.25      $4.95      $5.95        $3.74
Baby Kale          $3.50      $5.25      $6.50        $4.03
Specialty Mix      $4.00      $6.00      $7.50        $4.61

CHANNEL MIX:
├── Wholesale (grocery chains): 70%
├── Retail (direct to stores): 25%
└── Direct-to-consumer: 5%

ANNUAL REVENUE BY PRODUCT:

Product          Saleable Lbs   Blended Price   Revenue        %
───────────────────────────────────────────────────────────────
Butterhead        4,114,240        $2.13       $8,763,331    40.8%
Romaine           3,064,750        $2.02       $6,190,795    28.8%
Arugula           1,148,160        $3.74       $4,294,118    20.0%
Baby Kale           874,920        $4.03       $3,525,928    16.4%
Specialty Mix       688,896        $4.61       $3,175,811    14.8%
───────────────────────────────────────────────────────────────
TOTAL             9,890,966        $2.17      $21,469,983   100.0%

PRICING ESCALATION:
├── Year 1-3: 2.0% annually (market inflation)
├── Year 4+: 1.5% annually (mature market)
└── Premium products: +0.5% additional

RAMP-UP SCHEDULE:
├── Month 1-3:   25% capacity (startup)
├── Month 4-6:   50% capacity
├── Month 7-9:   70% capacity
├── Month 10-12: 85% capacity
├── Year 2:      95% capacity
└── Year 3+:    100% capacity

SEASONALITY FACTORS (if applicable):
├── Q1: 0.95× (winter, lower demand)
├── Q2: 1.05× (spring, higher demand)
├── Q3: 0.98× (summer competition)
└── Q4: 1.02× (holiday demand)
```

---

## 4.3 Cost Modeling

### Cost of Goods Sold (COGS) Model

```
VARIABLE COGS - PER LB PRODUCTION

DIRECT MATERIALS:                    $/lb      % of COGS
─────────────────────────────────────────────────────────
Seeds & propagation                 $0.085       8.3%
Growing media (if used)             $0.025       2.4%
Nutrients & fertilizers             $0.055       5.4%
pH adjusters & additives            $0.015       1.5%
Pesticides (organic, minimal)       $0.008       0.8%
Packaging materials                 $0.165      16.1%
Labels & marketing materials        $0.022       2.1%
                                   ───────     ──────
SUBTOTAL MATERIALS:                 $0.375      36.6%

DIRECT LABOR:
Harvest labor                       $0.185      18.0%
Packing labor                       $0.145      14.1%
Quality control                     $0.045       4.4%
                                   ───────     ──────
SUBTOTAL LABOR:                     $0.375      36.6%

UTILITIES (Variable):
Electricity - growing               $0.215      21.0%
Water consumption                   $0.012       1.2%
Natural gas (heating, variable)     $0.045       4.4%
                                   ───────     ──────
SUBTOTAL UTILITIES:                 $0.272      26.5%

OTHER VARIABLE:
Distribution & freight              $0.004       0.4%
                                   ───────     ──────
TOTAL VARIABLE COGS:                $1.026     100.0%

VOLUME SENSITIVITY:
At 9,890,966 lbs annual production:
Total Variable COGS = $10,148,151

FIXED COGS COMPONENTS:               Annual     $/lb
─────────────────────────────────────────────────────
Base facility utilities             $425,000   $0.043
Facility maintenance                $285,000   $0.029
Base growing labor (supervisory)    $650,000   $0.066
Quality/food safety salaries        $245,000   $0.025
Equipment maintenance               $175,000   $0.018
Facility supplies                   $125,000   $0.013
Other fixed production              $95,000    $0.010
                                   ─────────  ───────
TOTAL FIXED COGS:                  $2,000,000  $0.204

TOTAL COGS (at full capacity):
Variable: $10,148,151 (47.3% of revenue)
Fixed:     $2,000,000 (9.3% of revenue)
                      ──────────  ──────
TOTAL:    $12,148,151 (56.6% of revenue)

GROSS PROFIT: $9,321,832 (43.4% margin)
```

### Operating Expense Model

```
OPERATING EXPENSES (OPEX)

PERSONNEL:                          Headcount   Annual Cost
──────────────────────────────────────────────────────────
Executive Team:
├── CEO/General Manager                1        $185,000
├── CFO/Finance Director               1        $145,000
├── Head of Operations                 1        $135,000
└── Head of Sales                      1        $125,000

Management:
├── Facility managers                  2        $210,000
├── Growing managers                   3        $270,000
├── Post-harvest manager               1         $85,000
└── Maintenance manager                1         $75,000

Administration:
├── Accounting/finance staff           2        $145,000
├── HR/admin coordinator               1         $65,000
├── Receptionist/admin support         1         $45,000

Sales & Marketing:
├── Sales representatives              3        $225,000
├── Marketing manager                  1         $85,000
└── Customer service                   2        $95,000
                                      ──        ─────────
TOTAL PERSONNEL:                      21       $1,895,000

PAYROLL TAXES & BENEFITS (35%):                  $663,250
                                                ─────────
TOTAL LABOR COST:                              $2,558,250

FACILITY COSTS:                                    Annual
──────────────────────────────────────────────────────────
Rent/lease (or debt service if owned)          $1,200,000
Property insurance                               $185,000
Property taxes                                   $145,000
Security                                          $65,000
Office utilities                                  $45,000
                                                ──────────
TOTAL FACILITY:                                $1,640,000

SALES & MARKETING:
Marketing programs                               $285,000
Trade shows & events                              $65,000
Sales commissions (2% of revenue)                $429,400
Samples and demos                                 $45,000
Website and digital marketing                     $35,000
                                                ──────────
TOTAL SALES & MARKETING:                         $859,400

GENERAL & ADMINISTRATIVE:
Professional services (legal, accounting)        $125,000
Software and technology                           $95,000
Office supplies and expenses                      $45,000
Travel and entertainment                          $75,000
Training and development                          $35,000
Recruitment                                       $25,000
Insurance (general liability, D&O)               $145,000
Bank fees and merchant services                   $25,000
Other G&A                                         $55,000
                                                ──────────
TOTAL G&A:                                       $625,000

TOTAL OPERATING EXPENSES:                      $5,682,650
As % of Revenue:                                    26.5%

OPEX SCALING ASSUMPTIONS:
├── Fixed component: 60% ($3,410,000)
├── Variable with revenue: 40% ($2,273,000)
└── Annual inflation: 2.5%
```

---

## 4.4 Capital Expenditures and Depreciation

### CapEx Schedule

```
CAPITAL EXPENDITURES SCHEDULE

INITIAL CAPEX (Year 0):                          Amount
──────────────────────────────────────────────────────
Development & Pre-Construction              $1,850,000
Building & Structure                        $8,500,000
Growing Systems                             $6,250,000
Climate Control & HVAC                      $3,450,000
Electrical & Lighting                       $2,850,000
Water & Irrigation Systems                    $925,000
Post-Harvest Equipment                      $1,475,000
IT & Software Systems                         $425,000
Furniture & Fixtures                          $185,000
Vehicles & Equipment                          $145,000
Working Capital Reserve                       $945,000
Contingency (5%)                            $1,350,000
                                           ───────────
TOTAL INITIAL CAPEX:                       $28,350,000

MAINTENANCE CAPEX (Annual, Years 1-10):
├── Routine maintenance: 2% of depreciable assets
├── Annual amount: ~$520,000
└── Escalation: 2.5% annually

REPLACEMENT CAPEX:
Year 5:  LED lighting replacement            $1,250,000
Year 8:  Growing system refurbishment          $875,000
Year 10: Climate control upgrades              $650,000
Year 10: Post-harvest equipment refresh        $425,000

EXPANSION CAPEX (if applicable):
Year 4: Phase 2 facility expansion          $15,000,000
Year 7: Phase 3 facility expansion          $15,000,000

DEPRECIATION SCHEDULE:

Asset Category         Initial Cost   Useful Life   Annual Depreciation
─────────────────────────────────────────────────────────────────────
Land                    $1,200,000      N/A              $0
Building                $8,500,000     30 years       $283,333
Growing Systems         $6,250,000     12 years       $520,833
HVAC Equipment          $3,450,000     15 years       $230,000
Electrical Systems      $2,850,000     20 years       $142,500
LED Lighting            $1,250,000      8 years       $156,250
Irrigation Systems        $925,000     15 years        $61,667
Post-Harvest Equip      $1,475,000     10 years       $147,500
IT Systems                $425,000      5 years        $85,000
Furniture & Fixtures      $185,000      7 years        $26,429
Vehicles                  $145,000      5 years        $29,000
                       ───────────                  ──────────
TOTAL DEPRECIABLE:     $25,200,000                  $1,682,512

DEPRECIATION METHOD: Straight-line
TAX DEPRECIATION: May differ (MACRS allowed)
```

---

## 4.5 Integrated Three-Statement Model

### Income Statement Integration

```
INCOME STATEMENT (Annual, Years 1-5)
All figures in $000s

                              Year 1    Year 2    Year 3    Year 4    Year 5
                             ────────  ────────  ────────  ────────  ────────
REVENUE
Produce Sales                 18,249    20,405    21,470    36,652    38,929
Other Income                     125       145       165       285       315
                             ────────  ────────  ────────  ────────  ────────
Total Revenue                 18,374    20,550    21,635    36,937    39,244

COST OF GOODS SOLD
Variable COGS                  8,626     9,644    10,148    17,327    18,399
Fixed COGS                     2,000     2,050     2,101     3,204     3,284
                             ────────  ────────  ────────  ────────  ────────
Total COGS                    10,626    11,694    12,249    20,531    21,683
                             ────────  ────────  ────────  ────────  ────────
GROSS PROFIT                   7,748     8,856     9,386    16,406    17,561
Gross Margin %                  42.2%     43.1%     43.4%     44.4%     44.8%

OPERATING EXPENSES
Labor                          2,558     2,622     2,688     4,102     4,205
Facility Costs                 1,640     1,681     1,723     2,550     2,614
Sales & Marketing                859       904       950     1,624     1,724
General & Administrative         625       641       657       982     1,006
                             ────────  ────────  ────────  ────────  ────────
Total Operating Expenses       5,682     5,848     6,018     9,258     9,549
                             ────────  ────────  ────────  ────────  ────────
EBITDA                         2,066     3,008     3,368     7,148     8,012
EBITDA Margin %                 11.2%     14.6%     15.6%     19.4%     20.4%

Depreciation & Amortization    1,683     1,683     1,683     2,865     2,865
                             ────────  ────────  ────────  ────────  ────────
EBIT (Operating Income)          383     1,325     1,685     4,283     5,147
Operating Margin %               2.1%      6.4%      7.8%     11.6%     13.1%

Interest Expense               1,558     1,475     1,385     2,145     2,025
Interest Income                   12        18        25        42        58
                             ────────  ────────  ────────  ────────  ────────
EBT (Pre-Tax Income)          (1,163)     (132)      325     2,180     3,180

Income Tax Expense/(Benefit)    (291)      (33)       81       545       795
Effective Tax Rate               25%       25%       25%       25%       25%
                             ────────  ────────  ────────  ────────  ────────
NET INCOME                      (872)      (99)      244     1,635     2,385
Net Margin %                    -4.7%     -0.5%      1.1%      4.4%      6.1%
                             ════════  ════════  ════════  ════════  ════════
```

### Balance Sheet Integration

```
BALANCE SHEET (End of Year)
All figures in $000s

                              Year 0    Year 1    Year 2    Year 3    Year 4
                             ────────  ────────  ────────  ────────  ────────
ASSETS

CURRENT ASSETS
Cash                           1,000     1,245     1,658     2,385     3,826
Accounts Receivable                -     1,531     1,713     1,803     3,078
Inventory                          -       225       245       258       425
Prepaid Expenses                  75        85        92        95       145
                             ────────  ────────  ────────  ────────  ────────
Total Current Assets           1,075     3,086     3,708     4,541     7,474

PROPERTY, PLANT & EQUIPMENT
PP&E (at cost)                28,350    28,870    29,415    29,990    45,640
Less: Accumulated Depreciation     -    (1,683)   (3,366)   (5,049)   (7,914)
                             ────────  ────────  ────────  ────────  ────────
Net PP&E                      28,350    27,187    26,049    24,941    37,726

OTHER ASSETS
Intangible Assets                425       403       381       359       337
Deferred Tax Asset                 -       291       324       243         -
                             ────────  ────────  ────────  ────────  ────────
Total Other Assets               425       694       705       602       337
                             ────────  ────────  ────────  ────────  ────────
TOTAL ASSETS                  29,850    30,967    30,462    30,084    45,537
                             ════════  ════════  ════════  ════════  ════════

LIABILITIES

CURRENT LIABILITIES
Accounts Payable                 245       485       521       548       825
Accrued Expenses                 125       285       305       315       485
Current Portion LT Debt          850       850       850       850     1,250
Deferred Revenue                   -        65        75        85       125
                             ────────  ────────  ────────  ────────  ────────
Total Current Liabilities      1,220     1,685     1,751     1,798     2,685

LONG-TERM LIABILITIES
Long-term Debt                17,000    16,150    15,300    14,450    27,200
Deferred Tax Liability             -         -         -         -       125
                             ────────  ────────  ────────  ────────  ────────
Total Long-term Liabilities   17,000    16,150    15,300    14,450    27,325
                             ────────  ────────  ────────  ────────  ────────
TOTAL LIABILITIES             18,220    17,835    17,051    16,248    30,010

SHAREHOLDERS' EQUITY
Common Stock                     100       100       100       100       100
Additional Paid-in Capital    11,530    11,530    11,530    11,530    11,530
Retained Earnings                  -      (872)     (971)     (727)      923
Accumulated OCI                    -       374       752     2,933     2,974
                             ────────  ────────  ────────  ────────  ────────
Total Equity                  11,630    11,132    11,411    13,836    15,527
                             ────────  ────────  ────────  ────────  ────────
TOTAL LIAB & EQUITY           29,850    30,967    30,462    30,084    45,537
                             ════════  ════════  ════════  ════════  ════════

BALANCE CHECK:                     ✓         ✓         ✓         ✓         ✓
```

### Cash Flow Statement Integration

```
CASH FLOW STATEMENT
All figures in $000s

                              Year 1    Year 2    Year 3    Year 4    Year 5
                             ────────  ────────  ────────  ────────  ────────
OPERATING ACTIVITIES
Net Income                      (872)      (99)      244     1,635     2,385
Adjustments:
  Depreciation & Amortization  1,683     1,683     1,683     2,865     2,865
  Deferred Taxes                (291)      (33)       81       545       795
  Changes in Working Capital:
    Accounts Receivable       (1,531)     (182)      (90)   (1,275)     (324)
    Inventory                   (225)      (20)      (13)     (167)      (42)
    Prepaid Expenses             (10)       (7)       (3)      (50)      (12)
    Accounts Payable             240        36        27       277        68
    Accrued Expenses             160        20        10       170        42
    Deferred Revenue              65        10        10        40        12
                             ────────  ────────  ────────  ────────  ────────
Net Cash from Operations        (781)    1,408     1,949     4,040     5,789

INVESTING ACTIVITIES
Capital Expenditures            (520)     (545)     (575)  (15,650)     (825)
Proceeds from Asset Sales          -         -         -         -         -
                             ────────  ────────  ────────  ────────  ────────
Net Cash from Investing         (520)     (545)     (575)  (15,650)     (825)

FINANCING ACTIVITIES
Proceeds from Debt                 -         -         -    14,000         -
Debt Repayment                  (850)     (850)     (850)     (850)   (1,250)
Equity Issuance                    -         -         -         -     3,500
Distributions to Shareholders      -         -         -         -         -
                             ────────  ────────  ────────  ────────  ────────
Net Cash from Financing         (850)     (850)     (850)   13,150     2,250
                             ────────  ────────  ────────  ────────  ────────

NET CHANGE IN CASH            (2,151)       13       524     1,540     7,214
Cash at Beginning              1,000     1,245     1,258     1,782     3,322
                             ────────  ────────  ────────  ────────  ────────
CASH AT END OF PERIOD          1,245     1,658     2,306     3,322    10,536
                             ════════  ════════  ════════  ════════  ════════

FREE CASH FLOW:
Operating Cash Flow              (781)    1,408     1,949     4,040     5,789
Less: CapEx                      (520)     (545)     (575)  (15,650)     (825)
                             ────────  ────────  ────────  ────────  ────────
Free Cash Flow                (1,301)      863     1,374   (11,610)    4,964
                             ════════  ════════  ════════  ════════  ════════
```

---

## 4.6 Scenario and Sensitivity Analysis

### Scenario Planning

```
SCENARIO ANALYSIS - NPV @ 12% DISCOUNT RATE

                        BASE CASE    OPTIMISTIC    PESSIMISTIC    STRESS
                        ─────────    ──────────    ───────────    ──────
ASSUMPTIONS:
Revenue Growth            Baseline       +20%          -15%         -30%
Gross Margin              43.4%         48.0%          38.0%        33.0%
CapEx                     Baseline       -10%          +15%         +30%
Ramp-up Period            18 mo          12 mo         24 mo        30 mo

OUTPUTS:
Year 3 Revenue            $21,635       $25,962       $18,390      $15,145
Year 3 EBITDA Margin       15.6%         22.4%          9.8%         3.2%
Peak Funding Need         $2,800        $2,200        $3,850       $5,250
NPV (10-year)             $4,285        $9,450        ($425)      ($3,850)
IRR                        16.8%         24.5%          10.2%        5.4%
Payback Period            7.2 yrs       5.8 yrs        9.5 yrs     12.8 yrs

PROBABILITY WEIGHTS:        50%           25%            20%          5%

EXPECTED NPV = (0.50 × $4,285) + (0.25 × $9,450) + (0.20 × -$425) + (0.05 × -$3,850)
             = $2,143 + $2,363 - $85 - $193
             = $4,228
```

### One-Way Sensitivity Analysis

```
SENSITIVITY TO REVENUE PRICE (Holding all else constant)

Price/lb      Revenue     EBITDA    EBITDA %    NPV @ 12%    IRR
─────────────────────────────────────────────────────────────────
$1.85         $18,300     $1,200      6.6%      ($1,250)    9.2%
$2.00         $19,780     $2,325     11.8%        $1,485    13.5%
$2.17 (BASE)  $21,470     $3,368     15.7%        $4,285    16.8%
$2.35         $23,250     $4,585     19.7%        $7,425    20.4%
$2.50         $24,725     $5,650     22.9%       $10,185    23.2%

Interpretation: $0.10/lb price change = ~$1.2M NPV impact
```

### Two-Way Sensitivity Table

```
NPV SENSITIVITY ANALYSIS ($000s)
(Revenue Price vs. Production Yield)

                        YIELD ACHIEVEMENT
PRICE      85%        90%        95%       100%       105%       110%
─────────────────────────────────────────────────────────────────────
$1.85    ($3,245)   ($2,450)   ($1,650)    ($850)      ($50)      $750
$2.00    ($1,125)     ($250)      $625     $1,500     $2,375     $3,250
$2.17        $485    $1,485     $2,485     $4,285     $5,285     $6,285
$2.35      $2,350    $3,500     $4,650     $7,425     $8,825    $10,225
$2.50      $4,025    $5,325     $6,625    $10,185    $11,885    $13,585

Color coding:
├── Red (NPV < 0): Fail
├── Yellow ($0-$2M): Marginal
└── Green (>$2M): Acceptable
```

### Break-Even Analysis

```
BREAK-EVEN CALCULATIONS

OPERATING BREAK-EVEN (EBITDA = 0):
Fixed Costs (annual):                           $7,683,000
├── Fixed COGS:                                 $2,101,000
└── Operating Expenses:                         $5,582,000

Contribution Margin per lb:
├── Revenue per lb:                                  $2.17
└── Variable COGS per lb:                           ($1.03)
                                                    ──────
Contribution Margin:                                 $1.14

Break-even Volume = Fixed Costs / Contribution Margin
                  = $7,683,000 / $1.14
                  = 6,740,351 lbs (68% of capacity)

CASH BREAK-EVEN (Operating CF = 0):
Fixed Costs:                                    $7,683,000
Add: Interest Expense:                          $1,385,000
Add: Debt Principal:                              $850,000
Less: Depreciation (non-cash):                 ($1,683,000)
                                                ───────────
Cash Fixed Costs:                               $8,235,000

Cash Break-even Volume = $8,235,000 / $1.14
                       = 7,224,561 lbs (73% of capacity)

PROJECT BREAK-EVEN (NPV = 0):
At 12% discount rate:
Break-even conditions:
├── Average annual EBITDA: $3,150,000
├── Implied revenue: $20,200,000
├── Production volume: 9,310,000 lbs
└── Capacity utilization: 94%
```

---

## 4.7 Model Documentation and Best Practices

### Model Formatting Standards

**Color Coding:**
- **Blue text**: Hard-coded inputs/assumptions
- **Black text**: Formulas and calculations
- **Green text**: Links to other worksheets
- **Red text**: Important notes or warnings
- **Yellow fill**: User inputs required
- **Grey fill**: No user input (protected)

**Formula Best Practices:**

```
GOOD PRACTICES:

1. Reference assumptions, don't hard-code:
   ✓ =Revenue * Assumptions!$B$15
   ✗ =Revenue * 0.434

2. Use named ranges for clarity:
   ✓ =GrossRevenue - COGS
   ✗ ='Income Statement'!$C$25 - 'Income Statement'!$C$47

3. Consistent time periods:
   ✓ Use same row for same period across all sheets
   ✗ Year 1 in different rows on different tabs

4. One formula per cell (when possible):
   ✓ =SUM(B5:B20)
   ✗ =(B5+B6+B7... long formula)

5. Error checks and validations:
   ✓ =IF(Assets=Liabilities+Equity,"✓","ERROR")
   Include balance checks prominently
```

### Documentation Requirements

```
MODEL DOCUMENTATION CHECKLIST

□ Executive Summary
  ├── Model purpose and scope
  ├── Key assumptions summary
  ├── Base case results
  └── Scenario comparison

□ Assumptions Documentation
  ├── Source for each major assumption
  ├── Date of data/assumptions
  ├── Rationale for key choices
  └── Sensitivity items identified

□ Model Structure Guide
  ├── Tab-by-tab description
  ├── Flow chart of calculations
  ├── Key formula explanations
  └── Links and dependencies mapped

□ Instructions for Use
  ├── How to update assumptions
  ├── How to run scenarios
  ├── Where to find key outputs
  └── Common user errors to avoid

□ Version Control
  ├── Version number and date
  ├── Change log (what changed)
  ├── Author/modifier
  └── Review/approval status

□ Validation and Testing
  ├── Balance checks (all periods)
  ├── Calculation verification
  ├── Sensitivity testing results
  └── Independent review completed
```

### Error Checking

```
MODEL VALIDATION CHECKS

BALANCE SHEET CHECKS:
=IF(Assets = Liabilities + Equity, "✓ BALANCED", "✗ ERROR")
Check each period

CASH FLOW CHECKS:
Beginning Cash + Net Change = Ending Cash
=IF(B5 + B50 = B51, "✓", "✗")

INCOME STATEMENT CHECKS:
Revenue - All Costs = Net Income
Verify calculation flow

DEBT SCHEDULE CHECKS:
Beginning Balance - Principal Payment = Ending Balance
=IF(BeginDebt - Principal = EndDebt, "✓", "✗")

CIRCULAR REFERENCE CHECKS:
Look for cells that reference themselves
Excel: Formulas > Error Checking > Circular References

REASONABLENESS CHECKS:
├── Margins within expected ranges
├── Growth rates plausible
├── Working capital ratios reasonable
└── Debt covenants not violated
```

---

## Key Takeaways

1. **Model Structure**: Well-organized models with clear separation of inputs, calculations, and outputs improve usability and reduce errors

2. **Integrated Statements**: Three financial statements must reconcile and flow together logically

3. **Production Modeling**: CEA models require detailed production calculations based on facility size, crop mix, cycles, and yields

4. **Cost Structure**: Separate variable and fixed costs; understand cost behavior at different production levels

5. **Scenario Analysis**: Test multiple scenarios and sensitivities to understand risk and key value drivers

6. **Break-Even**: Calculate operating, cash, and project break-even to understand required performance levels

7. **Documentation**: Thorough documentation and error-checking are essential for model credibility and usefulness

---

## Additional Resources

**Excel Financial Modeling:**
- "Financial Modeling" by Simon Benninga
- "Best Practice Modelling Standards" by BPM
- Wall Street Prep modeling courses

**CEA-Specific Tools:**
- Production planning templates
- Crop scheduling software
- Energy modeling tools

**Practice Exercises:**
- Build mini-model for small facility
- Perform sensitivity analysis
- Create scenario comparisons

---

*Module 4 of Course 314: Investment & Finance for CEA*
*Next Module: Investment Analysis Methods*
