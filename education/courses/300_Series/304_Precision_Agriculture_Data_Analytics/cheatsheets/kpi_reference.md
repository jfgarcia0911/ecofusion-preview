# KPI Reference Guide

## Course 304: Precision Agriculture & Data Analytics

**Purpose:** Quick reference for calculating and interpreting key performance indicators in precision agriculture

---

## Production KPIs

### Yield Metrics

**Yield per Square Foot per Year**
```
Formula: Total Annual Harvest (lbs) / Growing Area (sqft)

Industry Benchmarks (Leafy Greens):
  • Below Average: <4 lbs/sqft/year
  • Average: 4-6 lbs/sqft/year
  • Good: 6-8 lbs/sqft/year
  • Excellent: 8-12 lbs/sqft/year
  • World Class: >12 lbs/sqft/year

Example:
  Annual harvest: 10,000 lbs
  Growing area: 2,000 sqft
  Yield = 10,000 / 2,000 = 5 lbs/sqft/year (Average)
```

**Crop Cycles per Year**
```
Formula: 365 / Average Days per Cycle

Example:
  Lettuce: 35 days seed-to-harvest
  Cycles = 365 / 35 = 10.4 cycles/year
```

**Yield per Cycle**
```
Formula: Total Yield / Plant Count

Example:
  Harvest: 450 lbs
  Plants: 1,000
  Yield = 0.45 lbs/plant
```

---

## Quality Metrics

**Quality Grade Distribution**
```
Target Mix (Leafy Greens):
  Grade A: >80%
  Grade B: 10-15%
  Grade C: <5%
  Waste: <5%

Calculation:
  Grade A % = (Grade A Count / Total Count) × 100
```

**Waste Percentage**
```
Formula: (Waste lbs / Total Harvest lbs) × 100%

Benchmarks:
  • Excellent: <3%
  • Good: 3-5%
  • Acceptable: 5-10%
  • Poor: >10%

Example:
  Harvest: 500 lbs
  Waste: 25 lbs
  Waste % = (25 / 500) × 100 = 5% (Good)
```

---

## Fish Production KPIs

**Feed Conversion Ratio (FCR)**
```
Formula: Total Feed Given (kg) / Net Weight Gain (kg)

Interpretation: Lower is better (more efficient)

Benchmarks (Tilapia):
  • Excellent: <1.5
  • Good: 1.5-1.8
  • Acceptable: 1.8-2.2
  • Poor: >2.2

Example:
  Feed: 100 kg
  Weight gain: 65 kg
  FCR = 100 / 65 = 1.54 (Good)
```

**Survival Rate**
```
Formula: (Final Count / Initial Count) × 100%

Benchmarks:
  • Excellent: >95%
  • Good: 90-95%
  • Acceptable: 85-90%
  • Poor: <85%
```

**Specific Growth Rate (SGR)**
```
Formula: [(ln(Final Weight) - ln(Initial Weight)) / Days] × 100

Example:
  Initial: 50g average
  Final: 200g average
  Days: 90
  SGR = [(ln(200) - ln(50)) / 90] × 100 = 1.54% per day
```

---

## Resource Efficiency KPIs

**Water Use Efficiency**
```
Formula: Total Harvest (lbs) / Total Water Used (gallons)

Benchmarks:
  • Traditional agriculture: 0.001-0.01 lbs/gal
  • Hydro/Aquaponics: 0.05-0.15 lbs/gal (50-150× more efficient)

Example:
  Harvest: 5,000 lbs
  Water: 50,000 gallons
  WUE = 5,000 / 50,000 = 0.10 lbs/gal (Good)
```

**Energy per Pound**
```
Formula: Total kWh / Total Harvest (lbs)

Benchmarks (Indoor CEA):
  • Excellent: <3 kWh/lb
  • Good: 3-5 kWh/lb
  • Acceptable: 5-8 kWh/lb
  • High: >8 kWh/lb

Example:
  Energy: 20,000 kWh/month
  Harvest: 4,000 lbs/month
  Energy/lb = 20,000 / 4,000 = 5 kWh/lb (Good)
```

**Nutrient Use Efficiency (NUE)**
```
Formula: Total Harvest (kg) / Total Fertilizer Applied (kg)

Benchmarks:
  • Leafy greens: 30-50
  • Fruiting crops: 20-35
  • Traditional agriculture: 10-20

Example:
  Harvest: 500 kg
  Fertilizer: 12 kg
  NUE = 500 / 12 = 41.7 (Good for leafy greens)
```

---

## Labor Efficiency KPIs

**Labor Hours per Pound**
```
Formula: Total Labor Hours / Total Harvest (lbs)

Benchmarks:
  • Highly automated: 0.1-0.3 hrs/lb
  • Moderate automation: 0.3-0.5 hrs/lb
  • Manual operations: 0.5-1.0 hrs/lb

Example:
  Labor: 2,000 hrs/month
  Harvest: 5,000 lbs/month
  Labor/lb = 2,000 / 5,000 = 0.4 hrs/lb (Moderate automation)
```

**Revenue per Labor Hour**
```
Formula: Total Revenue / Total Labor Hours

Example:
  Revenue: $20,000/month
  Labor: 2,000 hrs/month
  Rev/hr = $20,000 / 2,000 = $10/hr

Compare to labor cost to determine profitability
```

---

## Financial KPIs

**Revenue per Square Foot**
```
Formula: Total Revenue / Growing Area (sqft)

Calculation:
  = (Yield/sqft/year) × (Price per lb)

Benchmarks (Leafy Greens):
  • Below Average: <$15/sqft/year
  • Average: $15-25/sqft/year
  • Good: $25-35/sqft/year
  • Excellent: >$35/sqft/year

Example:
  Yield: 8 lbs/sqft/year
  Price: $4/lb
  Revenue = 8 × $4 = $32/sqft/year (Good)
```

**Gross Margin**
```
Formula: (Revenue - Direct Costs) / Revenue × 100%

Direct Costs: Seeds, nutrients, fish feed, utilities

Benchmarks:
  • Excellent: >60%
  • Good: 50-60%
  • Acceptable: 40-50%
  • Poor: <40%
```

**Break-Even Point**
```
Formula: Fixed Costs / (Price per lb - Variable Cost per lb)

Example:
  Fixed costs: $10,000/month
  Price: $4/lb
  Variable cost: $1.50/lb
  Break-even = $10,000 / ($4 - $1.50) = 4,000 lbs/month
```

---

## System Health KPIs

**System Uptime**
```
Formula: (Total Time - Downtime) / Total Time × 100%

Benchmarks:
  • Excellent: >99% (< 7 hrs/month downtime)
  • Good: 97-99% (7-22 hrs/month)
  • Acceptable: 95-97% (22-36 hrs/month)
  • Poor: <95%

Example:
  Month: 720 hours
  Downtime: 5 hours
  Uptime = (720 - 5) / 720 × 100 = 99.3% (Excellent)
```

**Parameter Stability (Control Performance)**
```
Formula: Time Within Target Range / Total Time × 100%

Benchmarks:
  • Critical parameters (DO, pH): >95%
  • Important parameters (temp, EC): >90%
  • Optimization parameters: >85%

Example:
  pH target: 6.2-7.2
  Time in range: 680 hrs/month
  Total time: 720 hrs/month
  Stability = 680 / 720 × 100 = 94.4% (Good)
```

**Mean Time Between Failures (MTBF)**
```
Formula: Total Operating Time / Number of Failures

Example:
  Operating time: 8,760 hrs/year
  Failures: 4
  MTBF = 8,760 / 4 = 2,190 hours (91 days average)
```

**Alert Response Time**
```
Formula: Average Time from Alert to Resolution

Benchmarks:
  • Critical alerts: <30 minutes
  • Warning alerts: <2 hours
  • Info alerts: <24 hours

Track: Median and 95th percentile response times
```

---

## Data Quality KPIs

**Data Completeness**
```
Formula: Valid Data Points / Expected Data Points × 100%

Target: >95% for critical sensors

Example:
  Expected: 2,880 readings/day (every 30 sec)
  Actual valid: 2,750
  Completeness = 2,750 / 2,880 × 100 = 95.5% (Good)
```

**Sensor Calibration Compliance**
```
Formula: Calibrations Done on Schedule / Total Due × 100%

Target: 100%

Track: Overdue calibrations by sensor type
```

---

## Benchmarking Scorecard Template

```
┌─────────────────────────────────────────────────────────────┐
│           FACILITY PERFORMANCE SCORECARD                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Metric                    Your Value    Benchmark   Score  │
│  ──────────────────────────────────────────────────────────│
│  PRODUCTION                                                 │
│  Yield/sqft/year           7.2           6-8         ★★★★  │
│  Quality A %               85%           >80%        ★★★★★ │
│  Waste %                   4%            <5%         ★★★★★ │
│                                                             │
│  EFFICIENCY                                                 │
│  Energy/lb                 4.2 kWh       3-5         ★★★★  │
│  Water/lb                  0.12 gal      0.05-0.15   ★★★★  │
│  Labor/lb                  0.35 hrs      0.3-0.5     ★★★★  │
│                                                             │
│  FINANCIAL                                                  │
│  Revenue/sqft              $29           $25-35      ★★★★  │
│  Gross Margin              55%           50-60%      ★★★★  │
│                                                             │
│  RELIABILITY                                                │
│  Uptime %                  98.5%         >99%        ★★★★  │
│  DO Stability %            96%           >95%        ★★★★★ │
│                                                             │
│  OVERALL SCORE:            35/40 Stars = 88% (GOOD)        │
│                                                             │
│  ★★★★★ = Excellent (Top 10%)                               │
│  ★★★★  = Good (Top 25%)                                    │
│  ★★★   = Average (Top 50%)                                 │
│  ★★    = Below Average                                     │
│  ★     = Poor (Bottom 25%)                                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## KPI Dashboard Organization

### Tier 1: Critical (Check Hourly)
- DO levels (all tanks)
- pH status
- Temperature (fish & air)
- Active critical alerts

### Tier 2: Important (Daily Review)
- Yesterday's harvest
- System uptime
- Parameter stability
- Resource consumption

### Tier 3: Strategic (Weekly/Monthly)
- Revenue/sqft
- Yield trends
- Cost analysis
- Quality distribution
- Labor efficiency

---

## Calculating Composite Scores

**Overall Equipment Effectiveness (OEE)**
```
OEE = Availability × Performance × Quality

Availability = Uptime %
Performance = Actual Output / Theoretical Max Output
Quality = Good Units / Total Units

Example:
  Availability = 98%
  Performance = 85% (actual 1,700 lbs vs. max 2,000 lbs)
  Quality = 95% (Grade A+B)
  OEE = 0.98 × 0.85 × 0.95 = 0.79 = 79%

World Class OEE: >85%
```

---

## Quick Calculation Tools

**Smartphone Calculator Formulas:**

```
Yield/sqft/year:
  [Annual lbs] ÷ [sqft] = ___

FCR:
  [Feed kg] ÷ [Gain kg] = ___

Energy/lb:
  [kWh] ÷ [lbs] = ___

Waste %:
  [Waste lbs] ÷ [Total lbs] × 100 = ___%

Revenue/sqft:
  [Yield/sqft] × [Price/lb] = $___

Break-even lbs:
  [Fixed $] ÷ ([Price/lb] - [Variable $/lb]) = ___ lbs
```

---

*EcoFusion Academy - Course 304*
*KPI Reference Guide - Track these metrics weekly!*
