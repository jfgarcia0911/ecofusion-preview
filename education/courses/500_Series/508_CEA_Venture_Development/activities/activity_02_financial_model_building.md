# Activity 2: Financial Model Building for CEA Ventures

**Course:** CEA-508 CEA Venture Development
**Type:** Hands-on Exercise
**Duration:** 6-8 hours
**Format:** Individual
**Tools Required:** Microsoft Excel or Google Sheets

---

## Objective

Build a comprehensive three-statement financial model for a CEA venture including income statement, balance sheet, and cash flow statement with integrated assumptions, scenarios, and sensitivity analysis.

---

## Overview

Financial modeling is a critical skill for entrepreneurs raising capital, managing operations, and making strategic decisions. This exercise will guide you through building a complete financial model from scratch for a CEA production operation.

You will create:
1. Assumptions and drivers
2. Revenue model
3. Cost model
4. Three financial statements (linked)
5. Scenario analysis
6. Key metrics dashboard
7. Sensitivity analysis

---

## Part 1: Model Setup and Assumptions

### Create Model Structure

**Worksheet Tabs to Create:**
1. **Instructions** - Overview and navigation
2. **Assumptions** - All key assumptions and drivers
3. **Revenue Model** - Detailed revenue calculations
4. **Cost Model** - Detailed cost calculations
5. **Income Statement** - P&L
6. **Balance Sheet** - Assets, liabilities, equity
7. **Cash Flow** - Cash flow statement
8. **Dashboard** - Key metrics and visualizations
9. **Scenarios** - Scenario analysis (base, upside, downside)
10. **Sensitivity** - Sensitivity analysis tables

### Time Period Setup

**Create monthly projections for:**
- Year 1: Monthly (Months 1-12)
- Year 2: Monthly (Months 13-24)
- Year 3: Monthly (Months 25-36)
- Years 4-5: Quarterly or Annual

**Tips:**
- Use consistent date formatting
- Create a date row at top of each statement
- Use formulas to calculate quarters/years from months

---

## Part 2: Assumptions Worksheet

### Company Profile Assumptions

Create an assumptions section with the following inputs (use your own venture or the example below):

**Facility Specifications:**
```
Facility name: [Your company name]
Facility type: Vertical farm / Greenhouse / Hybrid
Facility size: [e.g., 20,000 sq ft]
Total growing area: [e.g., 60,000 sq ft effective]
Primary crops: [e.g., leafy greens, herbs]
Crop cycle days: [e.g., 35-40 days]
Annual turns: [e.g., 9-10 turns]
Capacity per turn: [e.g., 6,000 lbs per turn]
Annual capacity: [e.g., 540,000 lbs]
```

**Operational Timeline:**
```
Facility construction start: Month 0
Operations launch: Month 1
Ramp-up period: Months 1-12
Target utilization Month 12: 80%
Target utilization Month 24: 90%
Mature utilization: 95%
```

**Revenue Assumptions:**
```
Primary product: Leafy greens (lettuce, kale, arugula, etc.)
Average selling price Year 1: $4.50/lb
Price escalation: 2% annually
Customer mix:
  - Restaurant direct: 40% of sales at $5.50/lb
  - Retail wholesale: 50% of sales at $4.00/lb
  - Direct-to-consumer: 10% of sales at $6.50/lb
Payment terms: Net 30 days
```

**Production Assumptions:**
```
Month 1 production: 30% of capacity (ramp-up)
Production ramp: +5% per month until Month 12
Months 13-24: Gradual improvement to 90%
Steady state: 95% capacity utilization

Quality/yield assumptions:
  - Quality pass rate: 98%
  - Shrinkage/waste: 2%
  - Unsold inventory: 1%
```

**Cost Assumptions:**

**Variable Costs (per lb):**
```
Seeds: $0.12
Growing media: $0.18
Nutrients: $0.28
Packaging: $0.35
Direct labor (harvesting, packing): $0.55
Variable energy (incremental): $0.42
Water: $0.06
Other variable: $0.08
Total variable cost per lb: $2.04
Annual escalation: 3%
```

**Fixed Costs (annual, Month 1):**
```
Salaries and benefits:
  - General manager: $120,000
  - Head grower: $85,000
  - Operations staff (2): $110,000
  - Sales/marketing: $75,000
  - Admin: $50,000
  Total salaries: $440,000

Facility:
  - Rent/mortgage: $180,000
  - Insurance: $36,000
  - Property tax: $24,000
  - Utilities (base): $72,000
  Total facility: $312,000

Equipment & maintenance:
  - Equipment depreciation: $120,000
  - Repairs & maintenance: $48,000
  Total equipment: $168,000

Sales & marketing:
  - Marketing programs: $60,000
  - Trade shows: $24,000
  Total S&M: $84,000

General & administrative:
  - Professional services: $36,000
  - Software/technology: $24,000
  - Office & supplies: $18,000
  - Other G&A: $18,000
  Total G&A: $96,000

Total annual fixed costs: $1,100,000
Monthly fixed costs: $91,667
Annual escalation: 3%
```

**Capital Expenditures:**
```
Initial capex (before Month 1):
  - Facility buildout: $3,000,000
  - Growing equipment: $2,500,000
  - HVAC & utilities: $1,000,000
  - Technology & controls: $500,000
  - Working capital: $500,000
  Total initial capex: $7,500,000

Ongoing capex:
  - Equipment replacement: $50,000/year
  - Technology upgrades: $30,000/year
  - Facility improvements: $40,000/year
```

**Financing Assumptions:**
```
Initial funding:
  - Equity raised: $5,000,000
  - Equipment debt: $3,000,000
  - Personal investment: $500,000
  Total funding: $8,500,000

Debt terms:
  - Interest rate: 7%
  - Term: 7 years
  - Monthly payment: $44,620

Working capital:
  - Inventory days: 7 days
  - Receivables days: 30 days
  - Payables days: 30 days
```

---

## Part 3: Revenue Model Worksheet

### Create detailed revenue calculations

**Structure your revenue model:**

**Row headers:**
- Production capacity (lbs)
- Capacity utilization %
- Actual production (lbs)
- Quality pass rate %
- Saleable production (lbs)
- Sales by channel:
  - Restaurant sales (lbs and $)
  - Retail sales (lbs and $)
  - D2C sales (lbs and $)
- Total revenue
- Average price per lb

**Formulas to build:**

**Month 1 production:**
```
=Assumptions!Annual_Capacity / 12 * Assumptions!Month1_Utilization
```

**Ramp-up logic (Months 1-12):**
```
=IF(Month<=12,
    MIN(30% + (Month-1)*5%, 80%),
    IF(Month<=24,
        80% + (Month-12)*(90%-80%)/12,
        95%))
```

**Revenue by channel:**
```
Restaurant revenue = Production * Restaurant% * Restaurant_Price
Retail revenue = Production * Retail% * Retail_Price
D2C revenue = Production * D2C% * D2C_Price
Total revenue = SUM(all channels)
```

**Price escalation (annually):**
```
=IF(Month<=12, Year1_Price,
    Year1_Price * (1+Price_Escalation)^FLOOR((Month-1)/12))
```

---

## Part 4: Cost Model Worksheet

### Create detailed cost calculations

**Variable Costs Section:**
```
For each cost category (seeds, media, nutrients, etc.):
  Cost per lb (from assumptions)
  × Actual production (from revenue model)
  = Total variable cost

Sum all variable cost categories
```

**Fixed Costs Section:**
```
List each fixed cost category monthly:
  - Salaries (annual / 12)
  - Rent (annual / 12)
  - Insurance (annual / 12)
  - Etc.

Apply annual escalation:
  =IF(Month<=12, Year1_Amount,
      Year1_Amount * (1+Escalation)^FLOOR((Month-1)/12))
```

**Depreciation:**
```
Equipment depreciation:
  Straight-line method over useful life
  = Total equipment cost / Useful life in months

Example: $2,500,000 / 84 months (7 years) = $29,762/month
```

**Interest Expense:**
```
Calculate monthly based on debt balance and interest rate
=Debt_Balance * (Interest_Rate / 12)
```

---

## Part 5: Income Statement

### Build monthly P&L

**Structure:**

```
Revenue
  Product sales (from Revenue Model)
Total Revenue

Cost of Goods Sold
  Variable costs (from Cost Model)
  Direct labor (from Cost Model)
Total COGS

Gross Profit
Gross Margin %

Operating Expenses
  Salaries and benefits
  Sales and marketing
  General and administrative
  Depreciation
Total Operating Expenses

EBITDA
EBITDA Margin %

Depreciation and Amortization (already in OpEx, but shown separately for clarity)

EBIT (Earnings Before Interest and Taxes)

Interest Expense

EBT (Earnings Before Taxes)

Taxes (assume 25% of positive EBT)

Net Income
Net Margin %
```

**Key formulas:**

```
Gross Profit = Revenue - COGS
Gross Margin % = Gross Profit / Revenue

EBITDA = Revenue - COGS - OpEx (excluding D&A)
EBITDA Margin % = EBITDA / Revenue

EBIT = EBITDA - Depreciation

EBT = EBIT - Interest Expense

Taxes = IF(EBT>0, EBT * Tax_Rate, 0)

Net Income = EBT - Taxes
Net Margin % = Net Income / Revenue
```

---

## Part 6: Balance Sheet

### Build monthly balance sheet

**Assets:**
```
Current Assets:
  Cash (from Cash Flow statement)
  Accounts Receivable (Revenue * Receivables_Days / 30)
  Inventory (COGS * Inventory_Days / 30)
  Prepaid Expenses (estimate)
Total Current Assets

Fixed Assets:
  Equipment (at cost)
  Less: Accumulated Depreciation
Net Fixed Assets

Total Assets
```

**Liabilities:**
```
Current Liabilities:
  Accounts Payable (COGS * Payables_Days / 30)
  Accrued Expenses (estimate)
Total Current Liabilities

Long-term Debt:
  Equipment loan (beginning balance - principal payments)

Total Liabilities
```

**Equity:**
```
Shareholders' Equity:
  Common stock (initial investment)
  Retained earnings (cumulative net income)
Total Equity

Total Liabilities + Equity
(Must equal Total Assets)
```

**Key formulas:**

```
Accounts Receivable = Revenue * (Payment_Terms / 30)
Inventory = (COGS / 30) * Inventory_Days
Accounts Payable = (COGS / 30) * Payables_Days

Accumulated Depreciation = SUM(depreciation through current month)
Retained Earnings = SUM(net income through current month)

Check: Total Assets = Total Liabilities + Total Equity
```

---

## Part 7: Cash Flow Statement

### Build monthly cash flow statement

**Structure:**

```
Cash Flow from Operations:
  Net Income
  Add back: Depreciation and Amortization
  Changes in Working Capital:
    Increase in Accounts Receivable (use)
    Increase in Inventory (use)
    Increase in Accounts Payable (source)
Net Cash from Operations

Cash Flow from Investing:
  Capital Expenditures (negative)
Net Cash from Investing

Cash Flow from Financing:
  Equity raised (Month 1 only)
  Debt proceeds (Month 1 only)
  Debt principal payments (monthly)
Net Cash from Financing

Net Change in Cash
Beginning Cash Balance
Ending Cash Balance
```

**Key formulas:**

```
Working capital changes:
  ΔAR = Current month AR - Previous month AR
  ΔInventory = Current month Inventory - Previous month Inventory
  ΔAP = Current month AP - Previous month AP

Beginning Cash = Previous month Ending Cash
Ending Cash = Beginning Cash + Net Change in Cash

Months of Runway = Ending Cash / Average Monthly Burn
(For pre-profitable months)
```

---

## Part 8: Dashboard

### Create visual dashboard

**Key Metrics to Display:**

```
Summary Metrics (Year 1-5 totals):
  - Total Revenue
  - Total EBITDA
  - EBITDA Margin %
  - Total Capex
  - Cumulative Cash Flow
  - IRR
  - Payback Period

Monthly Trending (chart):
  - Revenue (bar chart)
  - EBITDA (line chart on same graph)
  - Cash balance (line chart)

Unit Economics:
  - Production volume
  - Average price per lb
  - Variable cost per lb
  - Contribution margin
  - Break-even volume

Operational KPIs:
  - Capacity utilization %
  - Revenue per sq ft
  - Gross margin %
  - EBITDA margin %

Financial Health:
  - Current ratio (Current Assets / Current Liabilities)
  - Debt-to-equity ratio
  - Months of cash runway
  - Break-even month
```

**Create Charts:**
1. Revenue and EBITDA trend (combo chart)
2. Cash balance over time (line chart)
3. Revenue by channel (stacked area chart)
4. Cost breakdown (pie chart)
5. Capacity utilization (line chart)

---

## Part 9: Scenario Analysis

### Create three scenarios

**Setup:**
- Create three columns: Downside, Base Case, Upside
- Allow key assumptions to vary by scenario
- Link all statements to scenario selection

**Scenario Assumptions:**

| Assumption | Downside | Base Case | Upside |
|------------|----------|-----------|--------|
| Capacity utilization Year 1 | 60% | 75% | 85% |
| Average selling price | $4.00 | $4.50 | $5.00 |
| Variable cost per lb | $2.25 | $2.04 | $1.85 |
| Fixed cost escalation | 4% | 3% | 2% |
| Sales ramp (months to 80%) | 18 | 12 | 9 |

**Scenario Toggle:**
- Create dropdown list to select scenario
- Use INDEX/MATCH or VLOOKUP to pull scenario assumptions
- All calculations update based on selected scenario

**Scenario Comparison Output:**

```
                    Downside    Base Case   Upside
Year 1 Revenue      $1.2M       $1.8M       $2.4M
Year 3 Revenue      $5.5M       $8.5M       $12.0M
Year 5 Revenue      $18M        $25M        $35M

Year 5 EBITDA       $2.0M       $5.0M       $9.0M
EBITDA Margin %     11%         20%         26%

Break-even Month    20          14          10
Payback Period      5.2 years   3.5 years   2.7 years

Cum. Cash Flow (Y5) -$1.5M      $2.5M       $7.0M
```

---

## Part 10: Sensitivity Analysis

### Build sensitivity tables

**Create one-way sensitivity tables:**

**1. Revenue Sensitivity (varying price):**
```
        Price:  $4.00   $4.25   $4.50   $4.75   $5.00
Year 5 EBITDA   $3.0M   $4.0M   $5.0M   $6.0M   $7.0M
```

**2. Cost Sensitivity (varying variable cost):**
```
        Var Cost: $1.85   $2.00   $2.15   $2.30   $2.45
Year 5 EBITDA     $6.5M   $5.5M   $4.5M   $3.5M   $2.5M
```

**Create two-way sensitivity table:**

**EBITDA Sensitivity (Price vs. Volume):**
```
             Volume Utilization
Price      70%     80%     90%     100%
$4.00      $2.0M   $3.0M   $4.0M   $5.0M
$4.25      $2.8M   $3.9M   $5.0M   $6.1M
$4.50      $3.6M   $4.8M   $6.0M   $7.2M
$4.75      $4.4M   $5.7M   $7.0M   $8.3M
$5.00      $5.2M   $6.6M   $8.0M   $9.4M
```

**Use Data Tables:**
- One-way: Data > What-If Analysis > Data Table
- Two-way: Same, but with row and column inputs

---

## Deliverables

Submit your complete financial model including:

**1. Excel/Google Sheets File**
- All worksheets properly labeled
- Clean formatting and professional appearance
- Color coding for inputs (blue) vs. calculations (black) vs. outputs (green)
- No broken links or errors
- Print-friendly formatting

**2. Model Documentation (2-3 pages)**
- Executive summary of financial projections
- Key assumptions and rationale
- Scenario analysis summary
- Sensitivity analysis insights
- Key risks and mitigation strategies

**3. Dashboard Printout**
- One-page summary of key metrics and charts
- Could be sent to investors as overview

**4. Video Walkthrough (5-10 minutes) - Optional**
- Screen recording explaining your model
- Demonstrate how it works
- Discuss key insights and decisions

---

## Evaluation Criteria

**Technical Accuracy (40%):**
- Correct formulas and calculations
- Three statements properly linked
- Balance sheet balances
- Working capital calculations correct
- Depreciation and interest calculated properly

**Completeness (25%):**
- All required worksheets included
- Comprehensive assumptions
- Revenue and cost models detailed
- Scenarios and sensitivity analysis complete
- Dashboard with key metrics

**Usability (20%):**
- Clean, professional formatting
- Easy to navigate and understand
- Clear labeling and organization
- Color coding and consistent style
- Scenario toggle works properly

**Insights and Analysis (15%):**
- Reasonable assumptions
- Thoughtful scenario design
- Meaningful sensitivity analysis
- Key insights documented
- Understanding of business implications

---

## Tips for Success

**1. Start with structure:**
- Set up all worksheets first
- Create date headers consistently
- Establish assumptions before calculations

**2. Build incrementally:**
- Start simple, add complexity gradually
- Test each section before moving on
- Check balance sheet balances each step

**3. Use best practices:**
- Hard-code inputs in blue
- Calculations in black
- Outputs/results in green
- Use named ranges for key inputs
- Document assumptions clearly

**4. Check your work:**
- Does balance sheet balance?
- Do scenarios work properly?
- Are formulas pulling from right cells?
- Does model make logical sense?

**5. Make it user-friendly:**
- Clear labels and headers
- Group related items together
- Use formatting (borders, shading)
- Create navigation (hyperlinks between sheets)
- Include instructions worksheet

---

## Common Mistakes to Avoid

❌ Circular references
❌ Hard-coding values in formulas
❌ Not linking statements properly
❌ Forgetting working capital changes
❌ Balance sheet doesn't balance
❌ Overly complex formulas (keep simple)
❌ Not documenting assumptions
❌ Poor formatting/organization
❌ Not testing scenario switches
❌ Unrealistic projections

---

## Additional Resources

**Templates:**
- Wall Street Prep financial model templates
- Macabacus financial modeling tools
- Corporate Finance Institute (CFI) templates

**Tutorials:**
- YouTube: Financial Modeling for Startups
- Coursera: Financial Modeling courses
- Excel/Sheets help documentation

**References:**
- "Financial Modeling" by Simon Benninga
- "The Vest Pocket Guide to Financial Modeling" by Simon Benninga
- Wall Street Prep Financial Modeling Guide

---

## Submission

**Due Date:** [INSERT DUE DATE]

**Submit:**
1. Excel/Google Sheets file: [LastName]_FinancialModel_CEA508.xlsx
2. Documentation PDF: [LastName]_ModelDoc_CEA508.pdf
3. Dashboard PDF: [LastName]_Dashboard_CEA508.pdf

**File naming:** Use your last name for easy identification

Be prepared to present your model in class and walk through key assumptions, projections, and insights.

---

**Remember:** The model is a tool for decision-making and storytelling to investors. It should be rigorous but also comprehensible and useful. Good luck!

---

*EcoFusion Academy - CEA Venture Development*
