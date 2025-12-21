# Module 5: Investment Analysis Methods

## Learning Objectives

By the end of this module, you will be able to:
- Apply capital budgeting techniques to CEA investments
- Calculate and interpret time value of money
- Evaluate investments using NPV, IRR, and other metrics
- Perform risk-adjusted return analysis
- Compare multiple investment opportunities
- Make sound investment recommendations

---

## 5.1 Time Value of Money Fundamentals

### Core Concepts

**Key Principle**: Money available today is worth more than the same amount in the future due to its earning potential.

**Components:**
- **Present Value (PV)**: Current worth of future cash flows
- **Future Value (FV)**: What today's money will be worth in the future
- **Discount Rate (r)**: Required rate of return or opportunity cost
- **Time Period (n)**: Number of periods

### Present Value Calculations

**Single Cash Flow:**

```
PV = FV / (1 + r)^n

EXAMPLE:
What is the present value of $100,000 received in 5 years at 12% discount rate?

PV = $100,000 / (1.12)^5
PV = $100,000 / 1.7623
PV = $56,743

INTERPRETATION: $100,000 in 5 years is worth $56,743 today at 12% discount rate
```

**Annuity (Equal Periodic Payments):**

```
PV = PMT × [(1 - (1 + r)^-n) / r]

EXAMPLE:
Present value of $50,000 annual payments for 10 years at 10%

PV = $50,000 × [(1 - (1.10)^-10) / 0.10]
PV = $50,000 × 6.1446
PV = $307,230
```

**Perpetuity (Forever):**

```
PV = PMT / r

EXAMPLE:
Present value of $25,000 annual payment in perpetuity at 8%

PV = $25,000 / 0.08
PV = $312,500
```

### Future Value Calculations

```
FV = PV × (1 + r)^n

EXAMPLE:
$250,000 invested today at 15% for 7 years

FV = $250,000 × (1.15)^7
FV = $250,000 × 2.6600
FV = $665,006
```

### Discount Rate Selection

**Components of Discount Rate:**

```
WEIGHTED AVERAGE COST OF CAPITAL (WACC)

WACC = (E/V × Re) + (D/V × Rd × (1-Tc))

Where:
E = Market value of equity
D = Market value of debt
V = E + D (total value)
Re = Cost of equity
Rd = Cost of debt
Tc = Corporate tax rate

EXAMPLE CALCULATION:

Capital Structure:
├── Equity: $10M (60%)
└── Debt: $6.67M (40%)

Cost of Equity (using CAPM):
Re = Rf + β(Rm - Rf)
Re = 4% + 1.5(10% - 4%)
Re = 4% + 9% = 13%

Cost of Debt:
Rd = 7.5% (pre-tax)
Rd (after-tax) = 7.5% × (1 - 0.25) = 5.625%

WACC = (0.60 × 13%) + (0.40 × 5.625%)
WACC = 7.8% + 2.25%
WACC = 10.05%

DISCOUNT RATES BY INVESTOR TYPE:
├── Venture Capital: 25-40% (high risk)
├── Private Equity: 15-25% (moderate risk)
├── Corporate Strategic: 10-15% (strategic value)
├── Real Estate/Infrastructure: 8-12% (asset-backed)
└── Debt Lenders: 6-10% (secured debt)
```

---

## 5.2 Net Present Value (NPV)

### NPV Methodology

**Formula:**

```
NPV = Σ [CFt / (1 + r)^t] - Initial Investment

Where:
CFt = Cash flow in period t
r = Discount rate
t = Time period
```

**Decision Rule:**
- NPV > 0: Accept (creates value)
- NPV = 0: Indifferent (breaks even)
- NPV < 0: Reject (destroys value)

### CEA Project NPV Example

```
GREENHOUSE EXPANSION PROJECT

Initial Investment: $5,000,000
Project Life: 10 years
Discount Rate: 12%
Tax Rate: 25%

ANNUAL CASH FLOWS:

Year  Revenue   EBITDA   D&A     EBIT    Tax     NI      + D&A   - CapEx  = FCF      PV Factor  PV
───────────────────────────────────────────────────────────────────────────────────────────────────
0       -         -       -       -       -       -       -     (5,000)  (5,000)     1.0000  (5,000,000)
1     1,200      425     250     175     (44)    131     250       (50)     331      0.8929     295,550
2     1,650      685     250     435    (109)    326     250       (50)     526      0.7972     419,347
3     2,100      945     250     695    (174)    521     250       (75)     696      0.7118     495,413
4     2,200    1,025     250     775    (194)    581     250       (75)     756      0.6355     480,438
5     2,300    1,105     250     855    (214)    641     250       (75)     816      0.5674     463,003
6     2,400    1,185     250     935    (234)    701     250       (75)     876      0.5066     443,780
7     2,500    1,265     250   1,015    (254)    761     250       (75)     936      0.4523     423,353
8     2,600    1,345     250   1,095    (274)    821     250      (125)     946      0.4039     382,088
9     2,700    1,425     250   1,175    (294)    881     250       (75)   1,056      0.3606     380,794
10    2,800    1,505     250   1,255    (314)    941     250       (75)   1,116      0.3220     359,275

NPV CALCULATION:
Sum of PV of cash flows:                         $4,143,041
Less: Initial investment:                       ($5,000,000)
                                                 ───────────
NET PRESENT VALUE:                                ($856,959)

DECISION: REJECT (NPV < 0)

SENSITIVITY: At what discount rate does NPV = 0?
This is the Internal Rate of Return (IRR) = 10.3%
Since 10.3% < 12% required return, project doesn't meet hurdle.
```

### NPV Advantages and Limitations

**Advantages:**
- Directly measures value creation
- Considers time value of money
- Considers all cash flows
- Additive (can sum NPVs of multiple projects)
- Mathematically sound

**Limitations:**
- Requires accurate discount rate estimate
- Requires reliable cash flow projections
- Difficult to communicate to non-finance audience
- Doesn't show percentage return
- Assumes cash flows reinvested at discount rate

---

## 5.3 Internal Rate of Return (IRR)

### IRR Methodology

**Definition**: The discount rate that makes NPV = 0

**Formula:**
```
0 = Σ [CFt / (1 + IRR)^t] - Initial Investment

Solve for IRR (typically requires iterative calculation or Excel)
```

**Decision Rule:**
- IRR > Required return: Accept
- IRR = Required return: Indifferent
- IRR < Required return: Reject

### IRR Calculation Example

```
VERTICAL FARM INVESTMENT

Initial Investment: $8,000,000
Annual Cash Flows (Years 1-10): $1,450,000

Using Excel: =IRR(cash flow array)

Year    Cash Flow      Cumulative
────────────────────────────────
0      ($8,000,000)   ($8,000,000)
1        1,450,000    ($6,550,000)
2        1,450,000    ($5,100,000)
3        1,450,000    ($3,650,000)
4        1,450,000    ($2,200,000)
5        1,450,000      ($750,000)
6        1,450,000        700,000
7        1,450,000      2,150,000
8        1,450,000      3,600,000
9        1,450,000      5,050,000
10       1,450,000      6,500,000

IRR = 12.4%

If required return is 15%: REJECT (12.4% < 15%)
If required return is 10%: ACCEPT (12.4% > 10%)
```

### Multiple IRRs Problem

**Issue**: Projects with non-conventional cash flows (multiple sign changes) can have multiple IRRs

```
EXAMPLE: R&D PROJECT WITH CLEANUP COSTS

Year    Cash Flow
──────────────────
0      ($5,000,000)    Outflow
1        8,000,000     Inflow
2       (3,500,000)    Outflow (cleanup)

This project has TWO IRRs: 15% and 85%
Which is correct? Neither may be meaningful!

SOLUTION: Use Modified IRR (MIRR) or NPV for such projects
```

### Modified Internal Rate of Return (MIRR)

**Formula:**

```
MIRR = [FV(positive cash flows, reinvestment rate) / PV(negative cash flows, finance rate)]^(1/n) - 1

ADVANTAGES OVER IRR:
├── Single answer (no multiple IRR problem)
├── More realistic reinvestment assumption
├── Better for ranking mutually exclusive projects
└── Addresses timing issues

EXAMPLE:

Project Cash Flows:
Year 0: ($8,000,000)
Years 1-10: $1,450,000

Assumptions:
├── Finance rate: 10% (cost of capital)
└── Reinvestment rate: 10% (conservative)

FV of positive cash flows:
= $1,450,000 × [(1.10^10 - 1) / 0.10]
= $1,450,000 × 15.9374
= $23,109,230

MIRR = [$23,109,230 / $8,000,000]^(1/10) - 1
MIRR = [2.8887]^0.10 - 1
MIRR = 1.1190 - 1
MIRR = 11.9%
```

---

## 5.4 Other Investment Metrics

### Payback Period

**Simple Payback Period:**

```
Time required to recover initial investment (undiscounted)

PROJECT EXAMPLE:
Initial Investment: $3,000,000
Annual Cash Flow: $650,000

Year    Annual CF    Cumulative
─────────────────────────────────
1       $650,000      $650,000
2        650,000     1,300,000
3        650,000     1,950,000
4        650,000     2,600,000
5        650,000     3,250,000

Payback = 4 + ($400,000 / $650,000)
Payback = 4.62 years

DECISION CRITERIA:
Accept if payback < target (e.g., 5 years)
```

**Discounted Payback Period:**

```
Time to recover investment in present value terms

Year    Cash Flow    PV @ 12%    Cumulative PV
────────────────────────────────────────────────
0     ($3,000,000)  ($3,000,000)  ($3,000,000)
1        650,000       580,357    (2,419,643)
2        650,000       518,176    (1,901,467)
3        650,000       462,657    (1,438,810)
4        650,000       413,087      (1,025,723)
5        650,000       368,828       (656,895)
6        650,000       329,311       (327,584)
7        650,000       294,028        (33,556)
8        650,000       262,525        228,969

Discounted Payback = 7 + ($33,556 / $262,525)
                   = 7.13 years

Note: Longer than simple payback due to time value of money
```

**Advantages:**
- Simple to understand and communicate
- Emphasizes liquidity and early cash recovery
- Useful screening tool

**Limitations:**
- Ignores cash flows after payback
- Arbitrary cutoff period
- Doesn't measure profitability
- Simple version ignores time value of money

### Profitability Index (PI)

**Formula:**

```
PI = PV of Future Cash Flows / Initial Investment

Or equivalently:
PI = (NPV + Initial Investment) / Initial Investment
PI = 1 + (NPV / Initial Investment)

DECISION RULE:
PI > 1.0: Accept (NPV is positive)
PI = 1.0: Indifferent (NPV = 0)
PI < 1.0: Reject (NPV is negative)

EXAMPLE:
Project A:
├── Initial Investment: $2,000,000
├── PV of Cash Flows: $2,650,000
├── NPV: $650,000
└── PI = $2,650,000 / $2,000,000 = 1.325

Project B:
├── Initial Investment: $5,000,000
├── PV of Cash Flows: $5,850,000
├── NPV: $850,000
└── PI = $5,850,000 / $5,000,000 = 1.170

CAPITAL RATIONING SCENARIO:
If you can only fund one project and have $2M available:
├── Project A: NPV = $650K, PI = 1.325 ← CHOOSE THIS
└── Project B: NPV = $850K, PI = 1.170 (can't afford)

PI is useful when capital is constrained (bang for the buck)
```

### Accounting Rate of Return (ARR)

**Formula:**

```
ARR = Average Annual Accounting Profit / Initial Investment

EXAMPLE:
Initial Investment: $4,000,000
Annual profits: Year 1: $400K, Year 2: $550K, Year 3: $700K,
                Year 4: $800K, Year 5: $850K

Average Annual Profit = ($400K + $550K + $700K + $800K + $850K) / 5
                      = $660,000

ARR = $660,000 / $4,000,000 = 16.5%

LIMITATIONS:
├── Uses accounting profit, not cash flow
├── Ignores time value of money
├── Doesn't consider project life
└── Generally NOT recommended for investment decisions

Use NPV or IRR instead for capital budgeting decisions.
```

---

## 5.5 Risk-Adjusted Analysis

### Risk-Adjusted Discount Rates

**Concept**: Higher risk projects should use higher discount rates

```
RISK-BASED DISCOUNT RATES FOR CEA

PROJECT TYPE                    BASE RATE    RISK PREMIUM    TOTAL
───────────────────────────────────────────────────────────────────
Expansion of proven facility       10%           0%          10%
New facility, proven technology    10%          +3%          13%
New technology deployment          10%          +5%          15%
International expansion            10%          +7%          17%
R&D / pilot project               10%         +10%          20%
Unproven technology               10%         +15%          25%

EXAMPLE APPLICATION:

Project: Novel growing system deployment
Base Cash Flows (undiscounted):
├── Year 1: $500,000
├── Year 2: $750,000
├── Years 3-10: $1,000,000

NPV @ 10% (standard): $4,285,000 ← Accept
NPV @ 15% (risk-adjusted): $2,450,000 ← Still accept but lower value
NPV @ 25% (high risk): ($350,000) ← Reject

The higher discount rate accounts for technology risk.
```

### Sensitivity Analysis for Risk

```
SENSITIVITY ANALYSIS - KEY VARIABLES

BASE CASE NPV: $3,250,000

Variable        -20%      -10%     Base     +10%     +20%
─────────────────────────────────────────────────────────────
Revenue      ($1,250)    $850    $3,250   $5,650   $8,050
COGS          $5,450    $4,350   $3,250   $2,150   $1,050
CapEx         $4,150    $3,700   $3,250   $2,800   $2,350
Yield         ($850)     $985    $3,250   $5,515   $7,780
Price         ($425)    $1,275   $3,250   $5,225   $7,200

SENSITIVITY RANKING (Most to Least Sensitive):
1. Revenue price (highest impact)
2. Production yield
3. COGS
4. CapEx (lowest impact)

Focus risk mitigation on top variables!
```

### Probability-Weighted Expected Value

```
SCENARIO PROBABILITY ANALYSIS

SCENARIO         PROBABILITY    NPV          WEIGHTED NPV
──────────────────────────────────────────────────────────
Optimistic          25%       $8,500,000      $2,125,000
Base Case           50%       $4,250,000      $2,125,000
Pessimistic         20%       $500,000        $100,000
Worst Case          5%        ($2,000,000)    ($100,000)
                   ────                       ───────────
                   100%                       $4,250,000

EXPECTED NPV = $4,250,000

INTERPRETATION:
├── Even accounting for downside scenarios
├── Expected value is positive
└── But 25% chance of NPV < $1M (risk to consider)

RISK METRICS:
├── Expected NPV: $4,250,000
├── Standard Deviation: $2,845,000
├── Coefficient of Variation: 0.67 (moderate risk)
└── Probability of NPV > 0: 95%
```

### Real Options Analysis

**Types of Real Options in CEA:**

```
1. OPTION TO EXPAND
Initial facility: 50,000 sq ft
Option to add: 50,000 sq ft in Year 3 if successful

Value of expansion option using Black-Scholes framework:
├── Current NPV of expansion: $2.5M
├── Cost to expand (strike): $8M
├── Time to decision: 3 years
├── Volatility: 40%
├── Risk-free rate: 4%

Option Value ≈ $650,000
(Adds to base project NPV)

2. OPTION TO ABANDON
If project underperforms, sell assets

Abandonment value: $6M (equipment resale)
Probability of abandonment: 15%
Timing: End of Year 2

Expected Value = 0.15 × [$6M / (1.12^2)]
               = 0.15 × $4.78M
               = $717,000

3. OPTION TO DELAY
Land option for $200K allows 2-year delay
Wait for market clarity before building

Option to delay worth ~$350K (real options model)
Exceeds $200K cost → Buy the option

TOTAL PROJECT VALUE:
├── Base NPV: $3,250,000
├── Expansion option: +$650,000
├── Abandonment option: +$717,000
├── Delay option: +$150,000
                  ───────────
Total Strategic Value: $4,767,000

Real options add ~47% to base NPV!
```

---

## 5.6 Comparing Investment Alternatives

### Mutually Exclusive Projects

**NPV vs. IRR Conflict:**

```
PROJECT COMPARISON

                    PROJECT A        PROJECT B
────────────────────────────────────────────────
Initial Investment  $2,000,000       $5,000,000
NPV @ 12%           $850,000         $1,200,000
IRR                 24.5%            16.8%
Payback             4.2 years        6.1 years
PI                  1.425            1.240

DECISION CONFLICT:
├── IRR favors Project A (24.5% > 16.8%)
├── NPV favors Project B ($1,200K > $850K)
└── Which to choose?

ANSWER: Choose Project B (higher NPV)
Reasoning:
├── NPV measures absolute value creation
├── IRR doesn't account for scale
├── $1.2M value > $850K value
└── NPV is theoretically superior

However, if capital constrained at $2M:
└── Choose Project A (can't fund Project B)
```

### Incremental Analysis

```
INCREMENTAL IRR METHOD

Project B - Project A (Incremental):
├── Incremental Investment: $3,000,000
├── Incremental NPV: $350,000
└── Incremental IRR: 13.2%

Question: Is 13.2% return on incremental $3M acceptable?
├── If hurdle rate = 12%: YES → Choose Project B
└── If hurdle rate = 15%: NO → Choose Project A

DECISION RULE:
If Incremental IRR > Hurdle Rate → Choose larger project
If Incremental IRR < Hurdle Rate → Choose smaller project
```

### Portfolio Optimization

```
CAPITAL BUDGETING WITH CONSTRAINTS

Available Capital: $10,000,000
Projects under consideration:

Project  Investment    NPV       IRR    PI     Payback
──────────────────────────────────────────────────────
A        $2,000,000   $650,000  18.5%  1.325  4.8 yrs
B        $3,500,000   $980,000  16.2%  1.280  5.5 yrs
C        $4,000,000   $1,100,000 15.8% 1.275  6.2 yrs
D        $2,500,000   $585,000  14.9%  1.234  5.9 yrs
E        $5,000,000   $1,250,000 14.2% 1.250  7.1 yrs

RANKING BY NPV:
1. E: $1,250,000
2. C: $1,100,000
3. B: $980,000
4. A: $650,000
5. D: $585,000

CAPITAL CONSTRAINT APPROACH:
Select E + C = $9M invested, NPV = $2,350,000
Remaining budget: $1M (insufficient for any other project)

PROFITABILITY INDEX APPROACH:
Rank by PI (value per dollar invested):
1. A: PI = 1.325
2. B: PI = 1.280
3. C: PI = 1.275
4. E: PI = 1.250
5. D: PI = 1.234

Select A + B + C = $9.5M invested, NPV = $2,730,000 ← BETTER!

CONCLUSION: With capital rationing, use PI ranking.
```

---

## 5.7 Investment Decision Framework

### Decision Process

```
INVESTMENT ANALYSIS WORKFLOW

STEP 1: SCREENING
├── Strategic fit?
├── Minimum size/scale?
├── Technology risk acceptable?
├── Market opportunity validated?
└── GO / NO-GO

▼

STEP 2: FINANCIAL ANALYSIS
├── Build financial model
├── Calculate base case NPV, IRR
├── Determine payback period
├── Check covenant compliance
└── Acceptable returns?

▼

STEP 3: RISK ANALYSIS
├── Identify key risks
├── Perform sensitivity analysis
├── Model scenarios
├── Calculate risk-adjusted returns
└── Risk level acceptable?

▼

STEP 4: COMPARISON
├── Compare to alternatives
├── Check capital constraints
├── Rank by appropriate metric
├── Consider real options
└── Best use of capital?

▼

STEP 5: RECOMMENDATION
├── Quantitative summary
├── Qualitative factors
├── Risk assessment
├── Implementation plan
└── APPROVE / REJECT

▼

STEP 6: MONITORING
├── Track vs. projections
├── Variance analysis
├── Course corrections
└── Post-investment review
```

### Investment Memo Template

```
INVESTMENT RECOMMENDATION MEMO

EXECUTIVE SUMMARY
├── Project name and description
├── Investment amount requested
├── Key financial metrics (NPV, IRR, Payback)
├── Recommendation: Approve / Reject
└── Strategic rationale (2-3 sentences)

INVESTMENT DETAILS
├── Total project cost and uses
├── Funding structure (debt/equity)
├── Timeline and milestones
└── Key assumptions

FINANCIAL ANALYSIS
├── Base case returns (NPV, IRR)
├── Sensitivity analysis results
├── Scenario comparison table
├── Break-even analysis
└── Comparison to hurdle rates

STRATEGIC RATIONALE
├── Market opportunity
├── Competitive positioning
├── Strategic fit
├── Core competency alignment
└── Long-term value creation

RISK ASSESSMENT
├── Key risks identified
├── Mitigation strategies
├── Residual risk level
├── Downside protection
└── Exit options

ALTERNATIVES CONSIDERED
├── Alternative approaches
├── Do nothing scenario
├── Why chosen option is superior
└── Incremental analysis

RECOMMENDATION
├── Clear approve/reject recommendation
├── Conditions or contingencies
├── Implementation next steps
└── Success metrics and monitoring plan

APPENDICES
├── Detailed financial model
├── Market research
├── Technical specifications
└── Term sheets / proposals
```

---

## Key Takeaways

1. **Time Value of Money**: Foundation of all investment analysis; money today is worth more than money tomorrow

2. **NPV is King**: Net Present Value is the theoretically superior metric for investment decisions as it directly measures value creation

3. **IRR Complements NPV**: Internal Rate of Return provides percentage return metric but can be misleading; use alongside NPV

4. **Multiple Metrics**: Use combination of NPV, IRR, payback, and PI for comprehensive analysis

5. **Risk Adjustment**: Higher risk projects require higher discount rates or probability-weighted scenarios

6. **Sensitivity Matters**: Understand which variables drive value most and focus risk mitigation there

7. **Real Options**: Flexibility has value; consider expansion, abandonment, and timing options when evaluating investments

8. **Capital Rationing**: When capital is limited, use Profitability Index to maximize value per dollar invested

---

## Additional Resources

**Textbooks:**
- "Principles of Corporate Finance" by Brealey, Myers & Allen
- "Investment Valuation" by Aswath Damodaran
- "Capital Budgeting: Theory and Practice" by Vishwanath

**Tools:**
- Excel NPV and IRR functions
- Financial calculator tutorials
- Monte Carlo simulation add-ins

**Practice:**
- Work through end-of-chapter problems
- Build models for real CEA projects
- Compare your analyses to actual investor decisions

---

*Module 5 of Course 314: Investment & Finance for CEA*
*Next Module: Valuation Methods for CEA Businesses*
