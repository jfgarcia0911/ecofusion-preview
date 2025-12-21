# Module 12: Economic Analysis for Energy Projects

## Learning Objectives

- Calculate simple payback, NPV, and IRR
- Perform life-cycle cost analysis
- Evaluate multiple energy projects
- Account for incentives and financing
- Make data-driven investment decisions

---

## 12.1 Financial Metrics Overview

### Key Performance Indicators

```
FINANCIAL ANALYSIS TOOLKIT
═══════════════════════════════════════════════════════════════════

1. SIMPLE PAYBACK PERIOD
────────────────────────────────────────────────────────────────
Formula: Investment ÷ Annual Savings

Pro: Easy to calculate and understand
Con: Ignores time value of money, cash flows after payback

Example: $50,000 investment, $12,000/year savings
Payback = $50,000 ÷ $12,000 = 4.2 years

Decision criteria:
  < 2 years: Excellent
  2-5 years: Good
  5-10 years: Acceptable (long-term assets)
  > 10 years: Poor (unless strategic)

2. NET PRESENT VALUE (NPV)
────────────────────────────────────────────────────────────────
Formula: NPV = Σ [Cash Flow ÷ (1 + discount rate)^year] - Investment

Accounts for time value of money
Pro: Considers all cash flows, mathematically correct
Con: Requires discount rate assumption

Example: Same project, 5% discount rate, 10 years

Year 0: -$50,000
Year 1: $12,000 ÷ 1.05¹ = $11,429
Year 2: $12,000 ÷ 1.05² = $10,884
...
Year 10: $12,000 ÷ 1.05¹⁰ = $7,364

NPV = -$50,000 + $92,676 = $42,676

Decision: NPV > 0 → Invest
         NPV < 0 → Don't invest

3. INTERNAL RATE OF RETURN (IRR)
────────────────────────────────────────────────────────────────
The discount rate at which NPV = 0

Pro: Easy to compare to other investments
Con: Can be misleading with unusual cash flows

Example: Same project
IRR = 21.4%

Decision: If IRR > hurdle rate (e.g., 10%) → Invest

4. BENEFIT-COST RATIO (BCR)
────────────────────────────────────────────────────────────────
Formula: Present Value of Benefits ÷ Present Value of Costs

Example: $92,676 ÷ $50,000 = 1.85

Decision: BCR > 1.0 → Invest
         Higher BCR = better project

5. LEVELIZED COST
────────────────────────────────────────────────────────────────
Average cost per unit over project life

For energy: LCOE = Total lifetime costs ÷ Total lifetime energy

Example: Solar PV
  Capital: $125,000
  O&M: $1,000/year for 25 years (PV = $14,094)
  Total costs: $139,094
  Lifetime production: 1,568,250 kWh
  LCOE = $139,094 ÷ 1,568,250 = $0.089/kWh

Compare to grid rate ($0.14/kWh) to justify project
```

---

## 12.2 Cash Flow Analysis

### Comprehensive Project Evaluation

```
DETAILED CASH FLOW MODEL
═══════════════════════════════════════════════════════════════════

Project: LED Lighting Retrofit
  Capital: $75,000
  Annual energy savings: $18,000
  Annual maintenance savings: $3,000
  Lifespan: 15 years
  Salvage value: $5,000
  Discount rate: 5%

Year-by-Year Cash Flow:
────────────────────────────────────────────────────────────────

Year  Investment  Energy   Maint   Total    Discount  Present
                  Savings  Savings Cash Flow Factor   Value
─────────────────────────────────────────────────────────────────
0     -$75,000                     -$75,000  1.0000   -$75,000
1                 $18,000  $3,000  $21,000   0.9524   $20,000
2                 $18,540  $3,000  $21,540   0.9070   $19,535
3                 $19,096  $3,000  $22,096   0.8638   $19,086
4                 $19,669  $3,000  $22,669   0.8227   $18,651
5                 $20,259  $3,000  $23,259   0.7835   $18,229
6                 $20,867  $3,000  $23,867   0.7462   $17,810
7                 $21,493  $3,000  $24,493   0.7107   $17,404
8                 $22,138  $3,000  $25,138   0.6768   $17,011
9                 $22,802  $3,000  $25,802   0.6446   $16,632
10                $23,486  $3,000  $26,486   0.6139   $16,262
11                $24,191  $3,000  $27,191   0.5847   $15,899
12                $24,917  $3,000  $27,917   0.5568   $15,547
13                $25,664  $3,000  $28,664   0.5303   $15,201
14                $26,434  $3,000  $29,434   0.5051   $14,869
15                $27,227  $3,000  $35,227*  0.4810   $16,944
                                                       ─────────
                                              NPV =    $183,080

*Year 15 includes $5,000 salvage value

Notes:
  • Energy savings escalate at 3%/year (electricity inflation)
  • Maintenance savings remain constant
  • All values discounted to present value

Financial Metrics:
────────────────────────────────────────────────────────────────
  Simple payback: 3.6 years
  NPV (5%): $183,080
  IRR: 29.7%
  BCR: 3.44
  LCOE equivalent: $0.029/kWh saved (vs. $0.14 paid)

Decision: Excellent investment!
```

---

## 12.3 Comparing Multiple Projects

### Capital Budgeting

```
PROJECT PORTFOLIO OPTIMIZATION
═══════════════════════════════════════════════════════════════════

Available budget: $150,000
Multiple potential projects:

Project             Investment  Annual    NPV       IRR   Payback
                               Savings   (10-yr)
─────────────────────────────────────────────────────────────────
A. LED Retrofit     $75,000    $21,000   $58,145   27%   3.6 yr
B. Thermal Curtain  $40,000    $12,000   $32,760   28%   3.3 yr
C. VFD on Pumps     $8,000     $2,800    $9,160    32%   2.9 yr
D. Solar PV (50kW)  $125,000   $18,000   $14,250   11%   6.9 yr
E. Boiler Upgrade   $35,000    $6,500    $15,085   16%   5.4 yr
F. Battery Storage  $100,000   $15,000   $16,850   13%   6.7 yr

Ranking Methods:
────────────────────────────────────────────────────────────────

By NPV (maximize total value):
  1. LED: $58,145
  2. Thermal: $32,760
  3. Battery: $16,850
  4. Boiler: $15,085
  5. Solar: $14,250
  6. VFD: $9,160

  Total (top 3 within budget): $107,755 NPV

By IRR (maximize return rate):
  1. VFD: 32%
  2. Thermal: 28%
  3. LED: 27%
  4. Boiler: 16%
  5. Battery: 13%
  6. Solar: 11%

By Payback (maximize speed):
  1. VFD: 2.9 yr
  2. Thermal: 3.3 yr
  3. LED: 3.6 yr
  4. Boiler: 5.4 yr
  5. Battery: 6.7 yr
  6. Solar: 6.9 yr

OPTIMAL PORTFOLIO (budget constraint):
────────────────────────────────────────────────────────────────

Strategy: Maximize NPV within budget

Selected projects:
  • VFD ($8,000) → NPV $9,160
  • Thermal ($40,000) → NPV $32,760
  • LED ($75,000) → NPV $58,145
  • Remaining budget: $27,000 (save for next year)

Total investment: $123,000
Total NPV: $100,065
Average IRR: 29%
Avg payback: 3.3 years

Alternative if must spend all:
  • Add Boiler upgrade ($35,000) → NPV $15,085
  • Total: $158,000 (over budget by $8,000)
  • Could reduce Solar from $125k to $100k version

Key Insight: Don't force spending; best projects may not fill budget
```

---

## 12.4 Sensitivity Analysis

### Risk Assessment

```
SENSITIVITY ANALYSIS EXAMPLE
═══════════════════════════════════════════════════════════════════

Base Case: LED Retrofit
  Investment: $75,000
  Savings: $21,000/year
  NPV: $58,145
  IRR: 27%

Test Key Variables ±20%:
────────────────────────────────────────────────────────────────

Variable         -20%        Base       +20%       Impact
─────────────────────────────────────────────────────────────────
Capital Cost
  Value          $60,000     $75,000    $90,000
  NPV            $73,145     $58,145    $43,145    ★★★ High
  IRR            33%         27%        22%

Energy Savings
  Value          $16,800     $21,000    $25,200
  NPV            $28,572     $58,145    $87,718    ★★★★ Very High
  IRR            19%         27%        35%

Electricity Rate
  Value          $0.112      $0.14      $0.168
  NPV            $28,572     $58,145    $87,718    ★★★★ Very High
  IRR            19%         27%        35%

Equipment Life
  Value          12 yrs      15 yrs     18 yrs
  NPV            $45,230     $58,145    $69,185    ★★ Medium
  IRR            27%         27%        27%*       (*not affected)

Discount Rate
  Value          4%          5%         6%
  NPV            $67,890     $58,145    $49,650    ★★ Medium
  IRR            27%         27%        27%        (n/a)

Tornado Diagram (ranked by NPV impact):
────────────────────────────────────────────────────────────────

Energy savings   ████████████████████████████░░░░ ±$29,573
Electricity rate ████████████████████████████░░░░ ±$29,573
Capital cost     ███████████████░░░░░░░░░░░░░░░░░ ±$15,000
Equipment life   ███████████░░░░░░░░░░░░░░░░░░░░░ ±$11,040
Discount rate    ███████░░░░░░░░░░░░░░░░░░░░░░░░░ ±$9,240

Risk Assessment:
────────────────────────────────────────────────────────────────

Most sensitive to: Energy savings and electricity rates
  • Mitigate: Verify savings through audit/monitoring
  • Consider: Sign long-term energy purchase agreement

Least sensitive to: Equipment lifespan, discount rate
  • Lower risk: Project robust to these assumptions

Scenario Analysis:
────────────────────────────────────────────────────────────────

Best case (capital -10%, savings +15%, long life):
  NPV: $95,320
  IRR: 36%
  Payback: 2.9 years

Worst case (capital +15%, savings -15%, short life):
  NPV: $12,850
  IRR: 14%
  Payback: 5.2 years

Even worst case: NPV > 0, IRR > hurdle rate → Still viable!

Decision: Proceed with confidence; robust to variations
```

---

## 12.5 Incentives and Financing

### Incorporating Incentives

```
INCENTIVE IMPACT ANALYSIS
═══════════════════════════════════════════════════════════════════

Project: 50 kW Solar PV System
  Gross cost: $125,000
  Annual production: 62,730 kWh
  Annual savings: $8,782

Available Incentives:
────────────────────────────────────────────────────────────────

1. Federal Investment Tax Credit (ITC): 30%
   Credit: $125,000 × 0.30 = $37,500
   Applied: Year 1 (reduces taxes owed)
   Effective cost: $87,500

2. State/Utility Rebate: $0.40/W
   Rebate: 50,000W × $0.40 = $20,000
   Applied: Upfront (reduces initial cost)
   Effective cost: $67,500

3. Accelerated Depreciation (MACRS): 5-year
   Basis: $87,500 (after ITC, before rebate)
   Tax benefit: ~$21,875 (assuming 25% tax rate)
   PV of benefit (discounted): ~$19,500

Net Investment Analysis:
────────────────────────────────────────────────────────────────

Gross cost:                    $125,000
Less: State rebate (upfront):  -$20,000
                               ────────
Initial outlay:                $105,000

Year 1:
  Savings:                     $8,782
  ITC (tax reduction):         $37,500
  Depreciation tax benefit:    $4,375
                               ────────
  Net Year 1 benefit:          $50,657

Effective net cost: $105,000 - $50,657 = $54,343

Financial Metrics:
────────────────────────────────────────────────────────────────

Without incentives:
  Investment: $125,000
  Payback: 14.2 years
  NPV (25-yr): $15,380
  IRR: 6.8%
  Decision: Marginal

With incentives:
  Net investment: $54,343
  Payback: 6.2 years
  NPV (25-yr): $86,037
  IRR: 16.2%
  Decision: Good investment

INCENTIVES MAKE THE DIFFERENCE!
```

### Financing Options

```
FINANCING COMPARISON
═══════════════════════════════════════════════════════════════════

Project: $75,000 LED retrofit, $21,000/year savings

Option A: CASH PURCHASE
────────────────────────────────────────────────────────────────
  Upfront: $75,000
  Year 1 cash flow: +$21,000
  Payback: 3.6 years
  NPV: $58,145

  Pros: Maximum NPV, no interest
  Cons: Requires capital

Option B: LOAN (5 years, 6% interest)
────────────────────────────────────────────────────────────────
  Down payment: $0
  Monthly payment: $1,449
  Annual debt service: $17,388

  Year 1 cash flow: $21,000 - $17,388 = +$3,612
  Years 1-5: Positive cash flow
  Years 6+: Full $21,000 savings

  Total interest paid: $11,940
  NPV (including financing): $46,205

  Pros: No upfront capital, immediate positive cash flow
  Cons: Lower NPV, interest cost

Option C: LEASE (operating, 7 years)
────────────────────────────────────────────────────────────────
  Monthly payment: $1,050
  Annual: $12,600
  At end: Return equipment or buyout

  Year 1 cash flow: $21,000 - $12,600 = +$8,400
  NPV (lease term): $29,450

  Pros: Off balance sheet, easy, maintenance included
  Cons: Don't own asset, higher lifetime cost

Option D: ENERGY SAVINGS PERFORMANCE CONTRACT (ESPC)
────────────────────────────────────────────────────────────────
  Contractor installs, guarantees savings
  Payment: % of savings (typically 70-80%) for 7-10 years
  After term: Keep 100% of savings

  Annual payment: $21,000 × 0.75 = $15,750
  Cash flow (years 1-7): $5,250/year
  Cash flow (years 8+): $21,000/year

  Pros: No capital, no risk, guaranteed savings
  Cons: Share savings, longer term

COMPARISON SUMMARY
────────────────────────────────────────────────────────────────

Method          Upfront   NPV       Best When...
────────────────────────────────────────────────────────────────
Cash            $75,000   $58,145   Cash available, max return
Loan            $0        $46,205   Limited capital, good credit
Lease           $0        $29,450   Off balance sheet needed
ESPC            $0        $35,280   Risk averse, no capital

Decision factors:
  • Capital availability
  • Balance sheet impact
  • Risk tolerance
  • Return requirements
  • Tax situation
```

---

## 12.6 Life-Cycle Cost Analysis

### Total Cost of Ownership

```
LIFE-CYCLE COST COMPARISON
═══════════════════════════════════════════════════════════════════

Lighting Systems: 10,000 sq ft greenhouse, 15-year analysis

Option A: HPS (Traditional)
────────────────────────────────────────────────────────────────

Initial Costs:
  Fixtures (30 × $400):          $12,000
  Installation:                   $4,500
  Total initial:                 $16,500

Annual Operating Costs:
  Energy (118,260 kWh × $0.14):  $16,556
  Lamp replacement (annual):      $3,600
  Ballast replacement (5yr):        $900 (annual avg)
  Labor for maintenance:          $1,200
  Total annual:                  $22,256

15-Year Life-Cycle Cost:
  Initial:                       $16,500
  15 years operating (PV):      $232,905
  Total LCC:                    $249,405

Option B: LED (Modern)
────────────────────────────────────────────────────────────────

Initial Costs:
  Fixtures (30 × $800):          $24,000
  Installation:                   $5,000
  Controls/dimming:               $4,500
  Total initial:                 $33,500

Annual Operating Costs:
  Energy (51,246 kWh × $0.14):   $7,174
  Maintenance (minimal):            $400
  Total annual:                   $7,574

15-Year Life-Cycle Cost:
  Initial:                       $33,500
  15 years operating (PV):       $79,230
  Total LCC:                    $112,730

COMPARISON
────────────────────────────────────────────────────────────────

Metric                HPS         LED         Advantage
────────────────────────────────────────────────────────────────
Initial cost          $16,500     $33,500     HPS by $17,000
Annual cost           $22,256     $7,574      LED by $14,682
15-yr LCC             $249,405    $112,730    LED by $136,675
NPV of LED (vs HPS)   -           -           $103,175
Payback (incremental) -           -           1.2 years

Additional LED Benefits (not monetized):
  • Better spectrum for plants
  • Reduced cooling load
  • Longer lifespan (less disruption)
  • Dimming capability
  • Higher light quality

Decision: LED is clear winner on LCC basis
```

---

## 12.7 Case Study: Comprehensive Energy Project

```
MULTI-PROJECT ECONOMIC ANALYSIS
═══════════════════════════════════════════════════════════════════

Facility: 15,000 sq ft greenhouse
Current energy cost: $72,000/year
Budget available: $200,000

Proposed Projects:

1. LED Lighting: $85,000
   Savings: $28,000/year
   NPV: $105,230

2. Thermal Curtains: $45,000
   Savings: $18,000/year
   NPV: $71,450

3. Air Sealing: $8,000
   Savings: $6,500/year
   NPV: $34,180

4. Solar PV (40 kW): $100,000
   Savings: $7,200/year
   NPV: $8,450

5. VFD on Pumps: $12,000
   Savings: $3,800/year
   NPV: $17,230

Total if all projects: $250,000 (exceeds budget)
Total savings: $63,500/year (88% reduction!)
Total NPV: $236,540

OPTIMIZATION APPROACH
────────────────────────────────────────────────────────────────

Phase 1 (Year 1): High-ROI, Low-Cost
  • Air sealing: $8,000
  • VFD: $12,000
  • Thermal curtains: $45,000
  Investment: $65,000
  Savings: $28,300/year
  Remaining budget: $135,000

Phase 2 (Year 1): Major Efficiency
  • LED lighting: $85,000
  Investment: $85,000
  Savings: $28,000/year
  Remaining budget: $50,000

Phase 3 (Year 2): Wait for better solar economics
  • Solar PV: Defer (poor NPV, may improve with incentives)
  • Save remaining $50,000 for O&M, future projects

RESULTS
────────────────────────────────────────────────────────────────

Year 1 Investment: $150,000
Year 1 Savings: $56,300/year (78% reduction!)
NPV (combined): $228,090
Payback: 2.7 years

New annual energy cost: $15,700 (vs. $72,000)

5-Year Financial Summary:
────────────────────────────────────────────────────────────────

Year  Investment  Savings    Cash Flow  Cumulative
─────────────────────────────────────────────────────────────
0     -$150,000              -$150,000  -$150,000
1                 $56,300    $56,300    -$93,700
2                 $58,000    $58,000    -$35,700
3                 $59,740    $59,740    +$24,040
4                 $61,532    $61,532    +$85,572
5                 $63,378    $63,378    +$148,950

Break-even: Year 3
5-year ROI: 99%
IRR: 38%

Non-Financial Benefits:
  • Improved crop quality (better light spectrum)
  • More consistent environment
  • Reduced maintenance burden
  • Enhanced sustainability image
  • Future-proofed facility
```

---

## Key Takeaways

1. **Use multiple metrics** - NPV, IRR, payback each tell part of story
2. **Account for time value of money** - Future dollars worth less
3. **Include all costs** - Initial, operating, maintenance, end-of-life
4. **Incorporate incentives** - Can transform project economics
5. **Perform sensitivity analysis** - Understand risks and key drivers
6. **Consider financing options** - Align with cash flow and goals
7. **Think life-cycle** - Lowest initial cost rarely lowest total cost

---

## Practice Exercise

Conduct economic analysis:
1. Define project scope and costs
2. Estimate annual savings and O&M
3. Calculate payback, NPV, IRR
4. Identify available incentives
5. Perform sensitivity analysis
6. Make investment recommendation with justification

---

**Next Module**: Module 13 - Financing & Incentives

---

*Course 305: Energy Systems for CEA | Module 12 | EcoFusion Academy*
