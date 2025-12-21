# Module 6: Valuation Methods for CEA

## Learning Objectives

By the end of this module, you will be able to:
- Apply multiple valuation methodologies to CEA businesses
- Perform discounted cash flow (DCF) analysis
- Use comparable company and transaction multiples
- Conduct asset-based valuations
- Synthesize multiple approaches into valuation range
- Understand industry-specific valuation considerations

---

## 6.1 Valuation Overview

### Purpose of Valuation

**Common Situations:**
- Fundraising (equity or debt)
- Mergers and acquisitions
- Strategic partnerships
- Financial reporting
- Estate planning / ownership transfers
- Litigation / disputes

### Valuation Approaches

```
THREE MAIN VALUATION APPROACHES

1. INCOME APPROACH
   └── Discounted Cash Flow (DCF)
       ├── Most theoretically sound
       ├── Based on future cash generation
       └── Requires detailed projections

2. MARKET APPROACH
   ├── Comparable Companies (Public comps)
   │   ├── Uses trading multiples
   │   └── Requires similar public companies
   │
   └── Precedent Transactions
       ├── Uses M&A deal multiples
       └── Includes control premium

3. ASSET APPROACH
   └── Asset-Based Valuation
       ├── Book value
       ├── Replacement cost
       └── Liquidation value

BEST PRACTICE: Use multiple approaches and triangulate
```

---

## 6.2 Discounted Cash Flow (DCF) Valuation

### DCF Methodology

**Formula:**

```
Enterprise Value = PV of Projected Cash Flows + Terminal Value

STEPS:
1. Project free cash flows (5-10 years)
2. Calculate terminal value
3. Discount all cash flows to present
4. Sum to get Enterprise Value
5. Adjust for debt/cash to get Equity Value
```

### Detailed DCF Example

```
CEA OPERATING COMPANY DCF VALUATION

STEP 1: PROJECT FREE CASH FLOWS (Years 1-10)

                     Year 1   Year 2   Year 3   Year 4   Year 5
                     ──────   ──────   ──────   ──────   ──────
Revenue              $15,250  $18,450  $22,140  $26,568  $29,225
Growth Rate            25%      21%      20%      20%      10%

EBITDA               $2,288   $3,506   $4,650   $6,115   $7,015
  Margin               15%      19%      21%      23%      24%

Less: D&A            ($950)   ($1,125) ($1,285) ($1,485) ($1,625)
EBIT                 $1,338   $2,381   $3,365   $4,630   $5,390

Less: Taxes @ 25%    ($335)   ($595)   ($841)   ($1,158) ($1,348)
NOPAT                $1,004   $1,786   $2,524   $3,473   $4,043

Add back: D&A        $950     $1,125   $1,285   $1,485   $1,625
Less: CapEx          ($1,525) ($1,845) ($2,214) ($2,657) ($1,461)
Less: Δ NWC          ($305)   ($320)   ($369)   ($443)   ($266)
                     ──────   ──────   ──────   ──────   ──────
FREE CASH FLOW       $124     $746     $1,226   $1,858   $3,941

                     Year 6   Year 7   Year 8   Year 9   Year 10
                     ──────   ──────   ──────   ──────   ──────
Revenue              $31,392  $33,351  $35,043  $36,294  $37,383
Growth Rate            7.4%     6.2%     5.1%     3.6%     3.0%

EBITDA               $7,835   $8,505   $9,111   $9,437   $9,720
  Margin               25%      25.5%    26%      26%      26%

EBIT                 $5,990   $6,630   $7,186   $7,487   $7,720
NOPAT                $4,493   $4,973   $5,390   $5,615   $5,790
FCF                  $4,485   $5,058   $5,515   $5,740   $5,915

STEP 2: CALCULATE TERMINAL VALUE

Method 1: Perpetuity Growth
Terminal FCF (Year 11) = Year 10 FCF × (1 + g)
                       = $5,915K × 1.025
                       = $6,063K

Terminal Value = Terminal FCF / (WACC - g)
               = $6,063 / (0.12 - 0.025)
               = $63,821K

Method 2: Exit Multiple
Terminal EBITDA (Year 10) = $9,720K
Exit Multiple = 8.0x (conservative)
Terminal Value = $9,720 × 8.0 = $77,760K

Use average: ($63,821 + $77,760) / 2 = $70,791K

STEP 3: DISCOUNT TO PRESENT VALUE

WACC = 12.0%

Year   FCF      PV Factor   Present Value
────────────────────────────────────────
1      $124     0.8929      $111
2      $746     0.7972      $595
3      $1,226   0.7118      $872
4      $1,858   0.6355      $1,181
5      $3,941   0.5674      $2,236
6      $4,485   0.5066      $2,272
7      $5,058   0.4523      $2,288
8      $5,515   0.4039      $2,228
9      $5,740   0.3606      $2,070
10     $5,915   0.3220      $1,905
                            ───────
PV of Projected FCF:        $15,758

Terminal Value:             $70,791
PV Factor (Year 10):        0.3220
PV of Terminal Value:       $22,795
                            ───────

ENTERPRISE VALUE:           $38,553K

STEP 4: BRIDGE TO EQUITY VALUE

Enterprise Value            $38,553
Add: Cash                   $1,250
Less: Debt                  ($12,000)
Less: Preferred Stock       ($3,500)
                            ───────
EQUITY VALUE                $24,303K

Shares Outstanding:         2,500,000
VALUE PER SHARE:            $9.72

SENSITIVITY ANALYSIS:

                    Terminal Growth Rate
WACC        2.0%      2.5%      3.0%      3.5%
────────────────────────────────────────────────
10.0%      $31.25    $33.18    $35.47    $38.21
11.0%      $25.84    $27.19    $28.78    $30.67
12.0%      $21.73    $22.68    $23.78    $25.04
13.0%      $18.45    $19.18    $19.99    $20.89
14.0%      $15.78    $16.34    $16.95    $17.62

Current assumption (12%, 2.5%) = $22.68/share
Range: $15.78 - $38.21
```

### DCF Best Practices for CEA

**Projection Period:**
- Minimum 5 years (early stage)
- 10+ years for capital-intensive projects
- Through stabilization to maturity

**Key Assumptions:**
- Revenue growth tied to capacity additions
- Margin improvement from scale and efficiency
- Realistic CapEx for maintenance and growth
- Working capital needs (inventory, receivables)
- Terminal value assumes stable, mature growth

**Common Pitfalls:**
- Overly optimistic growth projections
- Ignoring competitive pressures on margins
- Underestimating ongoing CapEx needs
- Inappropriate terminal growth rates (>GDP growth)
- Mismatched discount rates

---

## 6.3 Market Approach - Comparable Companies

### Identifying Comparable Companies

**Criteria for CEA Comps:**
- Similar business model (greenhouse vs. vertical farm)
- Similar stage (startup vs. mature)
- Similar products (leafy greens vs. tomatoes)
- Similar geography (climate, market access)
- Publicly traded or disclosed financials

**Current Public CEA Companies (as of 2024):**

| Company | Ticker | Business | Revenue | Market Cap |
|---------|--------|----------|---------|------------|
| AppHarvest | APPH (delisted) | Greenhouses | $40M | N/A |
| Local Bounti | LOCL | Hybrid greenhouses | $15M | $85M |
| Village Farms | VFF | Greenhouses (multi) | $250M | $175M |
| Hydrofarm Holdings | HYFM | Equipment/supplies | $315M | $42M |

**Challenge**: Limited pure-play public CEA companies

**Solution**: Use broader comparables
- Specialty agriculture companies
- Food production/processing
- AgTech companies
- Adjust multiples for differences

### Calculating Trading Multiples

```
COMPARABLE COMPANY ANALYSIS

                                                        Trading Multiples
Company          Revenue   EBITDA    Mkt Cap    EV      EV/Rev  EV/EBITDA
──────────────────────────────────────────────────────────────────────────
Local Bounti     $18M      ($8M)     $95M       $110M   6.1x    NM
Village Farms    $245M     $32M      $180M      $265M   1.1x    8.3x
Hydrofarm        $320M     $18M      $45M       $125M   0.4x    6.9x
                                                        ────    ────
                                                Mean:   2.5x    7.6x
                                                Median: 1.1x    7.6x

BrightFarms (Private, est.)  $85M   $12M       N/A     N/A     N/A    N/A
Gotham Greens (Private)      $60M   $8M        N/A     N/A     N/A    N/A

APPLYING TO SUBJECT COMPANY:

Subject Company Metrics:
├── Revenue (LTM): $28,500K
├── EBITDA (LTM): $6,840K
└── Net Debt: $8,250K

EV/Revenue Approach:
Median Multiple: 1.1x (conservative given limited comps)
Subject Revenue: $28,500K
Implied EV: $28,500 × 1.1 = $31,350K
Less: Net Debt: ($8,250K)
Implied Equity Value: $23,100K

EV/EBITDA Approach:
Median Multiple: 7.6x
Subject EBITDA: $6,840K
Implied EV: $6,840 × 7.6 = $51,984K
Less: Net Debt: ($8,250K)
Implied Equity Value: $43,734K

ADJUSTMENTS NEEDED:
├── Subject is private: -20% discount
├── Subject is smaller: -10% discount
├── Subject is profitable: +5% premium
└── Net adjustment: -25%

Adjusted Valuation Range:
EV/Revenue: $23,100 × 0.75 = $17,325K
EV/EBITDA: $43,734 × 0.75 = $32,801K

Blended: $25,063K ($25.1M)
```

### CEA-Specific Multiples

```
OPERATIONAL MULTIPLES FOR CEA

Metric                  Formula                 Typical Range
──────────────────────────────────────────────────────────────
Price per Sq Ft         EV / Production Sq Ft   $150 - $400
Price per Lb Capacity   EV / Annual Lbs         $3 - $12
Revenue Multiple        EV / Annual Revenue     0.8x - 3.5x
EBITDA Multiple         EV / EBITDA             6x - 12x

EXAMPLE APPLICATION:

Subject Company:
├── Production area: 100,000 sq ft
├── Annual capacity: 4,500,000 lbs
├── Revenue: $9,450,000
└── EBITDA: $1,890,000

Price per Sq Ft Method:
Benchmark: $225/sq ft (mid-range for vertical farm)
Implied EV: 100,000 × $225 = $22,500,000

Price per Lb Method:
Benchmark: $5.50/lb capacity
Implied EV: 4,500,000 × $5.50 = $24,750,000

Revenue Multiple Method:
Benchmark: 2.2x
Implied EV: $9,450,000 × 2.2 = $20,790,000

EBITDA Multiple Method:
Benchmark: 9.5x
Implied EV: $1,890,000 × 9.5 = $17,955,000

Range: $17,955,000 - $24,750,000
Midpoint: $21,350,000
```

---

## 6.4 Market Approach - Precedent Transactions

### Transaction Comparables Analysis

```
RECENT CEA M&A TRANSACTIONS (2020-2024)

Target          Acquirer         Year  Type        Value    Revenue  EV/Rev
─────────────────────────────────────────────────────────────────────────
BrightFarms     Cox Enterprises  2020  Majority    $100M    $45M     2.2x
80 Acres        Creadev          2021  Growth      $160M    $65M     2.5x
Little Leaf     Greenheart       2022  Strategic   $32M     $18M     1.8x
Farms, LLC
AeroFarms       SPAC Merger      2021  Public      $1.2B    $12M     100x*
                                       (deal failed)
AppHarvest      SPAC Merger      2021  Public      $1.0B    $9M      111x*
                                       (reorg'd)

* SPAC valuations proved unsustainable

PRIVATE M&A MULTIPLES (normalized):
├── Revenue Multiple: 1.5x - 2.5x
├── EBITDA Multiple: 8x - 12x
└── Control Premium: 25-40% over trading value

APPLYING TO VALUATION:

Subject Company:
├── Revenue: $28,500K
└── EBITDA: $6,840K

Transaction Revenue Multiple:
Median: 2.0x
Implied EV: $28,500 × 2.0 = $57,000K

Transaction EBITDA Multiple:
Median: 10.0x
Implied EV: $6,840 × 10.0 = $68,400K

Adjustments:
├── Market correction post-2022: -30%
├── Strategic buyer premium: +15%
└── Net adjustment: -15%

Adjusted Range:
Revenue: $57,000 × 0.85 = $48,450K
EBITDA: $68,400 × 0.85 = $58,140K

Transaction-based Value: $48M - $58M
```

---

## 6.5 Asset-Based Valuation

### Net Asset Value (NAV)

```
ASSET-BASED VALUATION

BOOK VALUE METHOD:

Total Assets (at cost)              $42,500,000
Less: Accumulated Depreciation      ($8,250,000)
                                    ────────────
Net Assets                          $34,250,000
Less: Total Liabilities             ($18,450,000)
                                    ────────────
Book Value of Equity                $15,800,000

Issues with Book Value:
├── Historical cost, not market value
├── Depreciation may not reflect reality
├── Ignores goodwill and intangibles
└── Usually undervalues going concern

ADJUSTED NET ASSET VALUE:

Assets at Fair Market Value:
├── Land                            $2,500,000
├── Building                        $12,000,000
├── Growing systems (depreciated)   $5,250,000
├── Equipment                       $3,850,000
├── Technology/IP                   $1,200,000
├── Current assets                  $4,150,000
                                    ────────────
Total FMV of Assets                 $28,950,000

Less: Liabilities                   ($18,450,000)
                                    ────────────
Adjusted NAV                        $10,500,000

Appropriate when:
├── Considering liquidation
├── Distressed situations
├── Real estate heavy businesses
└── Asset acquisition vs. equity

REPLACEMENT COST METHOD:

Cost to build equivalent facility today:
├── Land                            $2,500,000
├── Building                        $15,000,000
├── Growing systems                 $8,500,000
├── Equipment                       $5,250,000
├── Technology setup                $1,850,000
├── Working capital                 $2,100,000
                                    ────────────
Gross Replacement Cost              $35,200,000

Less: Depreciation (20%)            ($7,040,000)
Less: Economic obsolescence (10%)   ($3,520,000)
                                    ────────────
Net Replacement Value               $24,640,000

Less: Liabilities                   ($18,450,000)
                                    ────────────
Replacement Value NAV               $6,190,000

LIQUIDATION VALUE:

Orderly Liquidation (6-12 months):
├── Land                            $2,200,000  (88%)
├── Building                        $8,500,000  (71%)
├── Equipment                       $2,750,000  (50%)
├── Inventory                       $185,000    (82%)
├── Other                           $425,000    (40%)
                                    ────────────
Gross Liquidation                   $14,060,000

Less: Liquidation costs (15%)       ($2,109,000)
Less: Liabilities                   ($18,450,000)
                                    ────────────
Net Liquidation Value               ($6,499,000)

Forced Liquidation (3 months):      ($9,850,000)

Asset-based provides floor value for going concern
```

---

## 6.6 Valuation Synthesis and Range

### Reconciling Multiple Approaches

```
VALUATION SUMMARY - SUBJECT CEA COMPANY

METHOD                          LOW         MID         HIGH        WEIGHT
──────────────────────────────────────────────────────────────────────────
DCF Analysis                    $20.5M      $24.3M      $28.8M      40%
Comparable Companies            $17.3M      $25.1M      $32.8M      25%
Precedent Transactions          $48.5M      $53.3M      $58.1M      20%
Asset-Based (Replacement)       $6.2M       $10.5M      $14.8M      5%
Operational Metrics             $18.0M      $21.4M      $24.8M      10%
                                                                    ────
                                                                    100%

WEIGHTED AVERAGE VALUATION:

DCF:            $24.3M × 40% = $9.72M
Comps:          $25.1M × 25% = $6.28M
Transactions:   $53.3M × 20% = $10.66M
Asset-Based:    $10.5M × 5%  = $0.53M
Operational:    $21.4M × 10% = $2.14M
                              ───────
Weighted Value:               $29.33M

VALUATION RANGE:

Conservative (25th percentile):     $21.5M
Mid-Point (weighted/median):        $28.0M
Optimistic (75th percentile):       $35.2M

RECOMMENDATION:

Fair Market Value Range: $26M - $32M
Most Likely Value: $28.5M

Rationale:
├── DCF reflects fundamental value creation
├── Market comps limited but supportive
├── Transaction multiples elevated (adjust down)
├── Asset value provides floor
└── Operating metrics confirm reasonableness
```

### Valuation Discounts and Premiums

```
ADJUSTMENTS TO BASE VALUATION

DISCOUNTS (Reduce Value):

Discount                        Range       Applied
──────────────────────────────────────────────────────
Lack of Marketability (DLOM)   20-35%      25%
├── Private company
├── No ready market
└── Restricted stock

Lack of Control (DLOC)         15-30%      20%
├── Minority interest
├── No board influence
└── No control over decisions

Key Person Dependency           10-25%      15%
├── Reliant on founder
├── Limited management depth
└── Succession risk

Technology Risk                 10-20%      12%
├── Unproven at scale
├── Rapid obsolescence risk
└── Heavy R&D requirements

Market/Customer Concentration   10-20%      15%
├── Top 3 customers >50%
├── Geographic concentration
└── Limited diversification

PREMIUMS (Increase Value):

Premium                         Range       Applied
──────────────────────────────────────────────────────
Control Premium                 25-40%      30%
├── Ability to direct company
├── Strategic decisions
└── Typically in M&A context

Strategic Value                 20-50%      35%
├── Synergies with acquirer
├── Technology access
├── Market position
└── Vertical integration

Scarcity Premium               10-25%      15%
├── Limited assets available
├── Unique technology
└── Strategic location

EXAMPLE APPLICATION:

Base Fair Value: $28,500,000

Minority Interest Sale:
├── Base value:                 $28,500,000
├── DLOM (25%):                 ($7,125,000)
├── DLOC (20%):                 ($5,700,000)
                                ────────────
Minority Value:                 $15,675,000

Control Transaction:
├── Base value:                 $28,500,000
├── Control premium (30%):      $8,550,000
├── Strategic premium (15%):    $4,275,000
                                ────────────
Control Value:                  $41,325,000

The same company can have vastly different values depending on context!
```

---

## 6.7 Stage-Based Valuation

### Valuation by Company Stage

```
VALUATION APPROACHES BY STAGE

SEED/CONCEPT STAGE
Primary Method: Cost Approach
├── Money invested to date
├── Comparable seed rounds
├── Option pricing models
└── Typical Range: $2M - $8M pre-money

Characteristics:
├── No revenue
├── Concept/pilot only
├── Technology unproven
└── High risk, high return potential

STARTUP/EARLY STAGE
Primary Method: Multiples (Forward)
├── Comparable early-stage transactions
├── Revenue multiples (if any revenue)
├── Platform valuation ($/sq ft buildout)
└── Typical Range: $8M - $35M

Characteristics:
├── First facility operating or under construction
├── Limited revenue (<$5M)
├── Losses expected
└── Path to profitability unclear

GROWTH STAGE
Primary Method: DCF + Multiples
├── Discounted cash flow to profitability
├── Revenue/EBITDA multiples
├── Operational metrics ($/sq ft, $/lb)
└── Typical Range: $25M - $150M

Characteristics:
├── Revenue >$10M, growing rapidly
├── Approaching or at EBITDA positive
├── Proven unit economics
└── Expansion plans funded

MATURE/PROFITABLE
Primary Method: DCF, Public Comps
├── Full DCF analysis
├── Public company multiples
├── Precedent transactions
└── Typical Range: $100M - $500M+

Characteristics:
├── Consistent profitability
├── Multiple facilities
├── Stable market position
└── Predictable cash flows

DISTRESSED
Primary Method: Asset-Based
├── Liquidation analysis
├── Restructuring value
├── Asset sales
└── Typical: Below replacement cost

Characteristics:
├── Covenant violations
├── Liquidity crisis
├── Operating losses
└── Survival in question
```

---

## Key Takeaways

1. **Multiple Methods**: Use DCF, market comparables, and asset-based approaches to triangulate value

2. **DCF Foundation**: Discounted cash flow is theoretically sound but requires accurate projections and appropriate discount rate

3. **Limited Comps**: Public CEA comparables are scarce; adjust broader ag/food company multiples appropriately

4. **Transaction Evidence**: M&A multiples provide market validation but require adjustment for market conditions and deal specifics

5. **Asset Floor**: Asset-based valuation provides floor value, especially important for capital-intensive CEA operations

6. **Context Matters**: Valuation varies significantly based on purpose (minority vs. control, strategic vs. financial buyer)

7. **Stage Appropriate**: Use valuation methods appropriate for company stage; early-stage relies more on comparables, mature on DCF

8. **Discounts/Premiums**: Apply appropriate discounts (DLOM, DLOC) or premiums (control, strategic) based on context

---

## Additional Resources

**Valuation Texts:**
- "Valuation: Measuring and Managing the Value of Companies" by McKinsey
- "Investment Valuation" by Aswath Damodaran
- "Business Valuation: An Integrated Theory" by Luehrman

**Data Sources:**
- PitchBook (private company transactions)
- Capital IQ (public company data)
- BizComps (small business sales)
- Industry-specific transaction databases

**Professional Organizations:**
- American Society of Appraisers
- National Association of Certified Valuators and Analysts
- CFA Institute

---

*Module 6 of Course 314: Investment & Finance for CEA*
*Next Module: Debt Financing Structures*
