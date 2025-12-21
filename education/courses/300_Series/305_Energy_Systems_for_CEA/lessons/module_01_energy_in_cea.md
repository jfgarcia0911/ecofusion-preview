# Module 1: Energy in CEA - Consumption & Costs

## Learning Objectives

By the end of this module, you will be able to:
- Understand energy consumption patterns in CEA facilities
- Calculate energy costs and benchmark performance
- Identify major energy consumers in different CEA systems
- Analyze energy intensity metrics for production optimization

---

## 1.1 Energy's Role in CEA Economics

### The Energy Challenge

Energy represents **15-40% of operating costs** in CEA facilities, making it the single largest or second-largest expense after labor.

**Key Statistics:**
- Greenhouse (minimal lighting): $0.05-0.20 per pound of produce
- Greenhouse (supplemental lighting): $0.20-0.50 per pound
- Indoor/Vertical farms: $0.50-1.50 per pound

```
╔════════════════════════════════════════════════════════════════════╗
║              CEA OPERATING COST BREAKDOWN (TYPICAL)                ║
╠════════════════════════════════════════════════════════════════════╣
║                                                                    ║
║  Labor         ████████████████████████████░░░░░░░░░░░ 30-40%    ║
║  Energy        ████████████████████████░░░░░░░░░░░░░░░ 25-35%    ║
║  Inputs        ████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░ 15-20%    ║
║  Facilities    ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 10-15%    ║
║  Other         ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  5-10%    ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝
```

### Why Energy Management Matters

1. **Profitability**: 20-40% energy cost reduction = 5-15% profit increase
2. **Competitiveness**: Lower costs = competitive pricing
3. **Sustainability**: Reduced carbon footprint
4. **Resilience**: Energy independence through renewables
5. **Scalability**: Efficient operations enable growth

---

## 1.2 Energy Consumption by Facility Type

### Greenhouse Operations

**Total Energy Use: 150-400 kWh/m²/year**

#### With Minimal Supplemental Lighting
```
Annual Energy Breakdown (10,000 sq ft greenhouse):

Heating:        180,000 kWh/year    (45%)  ████████████████████
Ventilation:     60,000 kWh/year    (15%)  ███████
Lighting:        80,000 kWh/year    (20%)  █████████
Irrigation:      40,000 kWh/year    (10%)  █████
Controls:        20,000 kWh/year     (5%)  ██
Misc:            20,000 kWh/year     (5%)  ██
────────────────────────────────────────────────────────
TOTAL:          400,000 kWh/year
```

#### With Full Supplemental Lighting
```
Annual Energy Breakdown (10,000 sq ft greenhouse):

Lighting:       350,000 kWh/year    (50%)  █████████████████████████
Heating:        175,000 kWh/year    (25%)  ████████████
HVAC:           105,000 kWh/year    (15%)  ███████
Irrigation:      35,000 kWh/year     (5%)  ██
Other:           35,000 kWh/year     (5%)  ██
────────────────────────────────────────────────────────
TOTAL:          700,000 kWh/year
```

### Indoor/Vertical Farms

**Total Energy Use: 800-2,000 kWh/m²/year**

```
Annual Energy Breakdown (5,000 sq ft vertical farm):

Lighting:       600,000 kWh/year    (60%)  ██████████████████████████████
HVAC:           250,000 kWh/year    (25%)  ████████████
Dehumidification: 80,000 kWh/year    (8%)  ████
Water/Pumps:     40,000 kWh/year     (4%)  ██
Controls:        20,000 kWh/year     (2%)  █
Misc:            10,000 kWh/year     (1%)  █
────────────────────────────────────────────────────────
TOTAL:        1,000,000 kWh/year
```

### Aquaponics Systems (Additional Load)

```
Additional Energy Requirements:

Water Heating:   120,000 kWh/year    (40%)  ████████████████████
Aeration:         90,000 kWh/year    (30%)  ███████████████
Recirculation:    60,000 kWh/year    (20%)  ██████████
Monitoring:       30,000 kWh/year    (10%)  █████
────────────────────────────────────────────────────────
TOTAL:           300,000 kWh/year
```

---

## 1.3 Energy Cost Calculations

### Understanding Your Energy Bill

**Commercial electricity rates typically include:**

1. **Energy Charge**: $/kWh consumed
2. **Demand Charge**: $/kW peak demand
3. **Time-of-Use (TOU) Rates**: Variable pricing by time
4. **Fees & Taxes**: Fixed charges

#### Sample Rate Structure

```
╔══════════════════════════════════════════════════════════════════╗
║                    COMMERCIAL RATE EXAMPLE                       ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Energy Charges:                                                 ║
║    Summer (May-Oct)                                              ║
║      On-Peak (12pm-6pm)        $0.18/kWh                        ║
║      Mid-Peak (8am-12pm, 6-10pm) $0.14/kWh                      ║
║      Off-Peak (10pm-8am)       $0.08/kWh                        ║
║                                                                  ║
║    Winter (Nov-Apr)                                              ║
║      On-Peak (6am-9am, 5-8pm)  $0.16/kWh                        ║
║      Off-Peak (all other)      $0.10/kWh                        ║
║                                                                  ║
║  Demand Charges:                                                 ║
║    Peak Demand                 $15.00/kW                         ║
║                                                                  ║
║  Fixed Charges:                                                  ║
║    Customer Charge             $45.00/month                      ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### Energy Cost Formula

```
Monthly Bill = (Energy Charges) + (Demand Charges) + (Fixed Charges)

Where:
  Energy Charges = Σ(kWh × Rate for each period)
  Demand Charges = Peak kW × Demand Rate
  Fixed Charges = Monthly customer fees
```

### Example Calculation

**Scenario**: 10,000 sq ft greenhouse, January operation

```
Energy Consumption:
  Off-Peak: 25,000 kWh × $0.10 = $2,500
  On-Peak:   8,000 kWh × $0.16 = $1,280
  Subtotal Energy:                $3,780

Demand:
  Peak Demand: 85 kW × $15 =      $1,275

Fixed:
  Customer Charge:                   $45

────────────────────────────────────────────
TOTAL MONTHLY COST:               $5,100
────────────────────────────────────────────

Average Cost per kWh: $5,100 ÷ 33,000 kWh = $0.155/kWh
```

---

## 1.4 Energy Intensity Metrics

### Key Performance Indicators

#### 1. Energy Use Intensity (EUI)

```
EUI = Annual Energy Use (kWh) ÷ Facility Area (sq ft or m²)

Units: kWh/sq ft/year or kWh/m²/year

Benchmarks:
  Greenhouse (minimal lighting):  15-40 kWh/sq ft/year
  Greenhouse (supplemental):      40-80 kWh/sq ft/year
  Indoor/Vertical Farm:          80-200 kWh/sq ft/year
```

#### 2. Energy per Unit Production

```
Energy Intensity = Annual Energy Use (kWh) ÷ Annual Production (lbs or kg)

Units: kWh/lb or kWh/kg

Benchmarks:
  Greenhouse Lettuce:   0.5-2 kWh/lb
  Greenhouse Tomatoes:  1-3 kWh/lb
  Indoor Lettuce:       5-15 kWh/lb
  Indoor Herbs:         8-20 kWh/lb
```

#### 3. Energy Cost as % Revenue

```
Energy Cost Ratio = Annual Energy Cost ÷ Annual Revenue × 100%

Benchmarks:
  Profitable Operations:  10-25%
  Marginal Operations:    25-35%
  Struggling Operations:   >35%
```

### Calculation Example

**Facility**: 5,000 sq ft indoor farm
**Production**: 50,000 lbs/year lettuce
**Energy Use**: 500,000 kWh/year
**Energy Cost**: $60,000/year
**Revenue**: $250,000/year

```
Calculations:

EUI = 500,000 kWh ÷ 5,000 sq ft = 100 kWh/sq ft/year
  → Average for indoor farms

Energy Intensity = 500,000 kWh ÷ 50,000 lbs = 10 kWh/lb
  → Typical for indoor lettuce

Energy Cost Ratio = $60,000 ÷ $250,000 × 100 = 24%
  → Profitable range

Energy Cost per lb = $60,000 ÷ 50,000 lbs = $1.20/lb
  → Need to maintain wholesale price >$5/lb for profitability
```

---

## 1.5 Load Profiling

### Understanding Your Load Pattern

**Load Profile**: How energy demand varies over time

#### Daily Load Profile (Typical Indoor Farm)

```
kW Demand by Hour:

100 kW│        ███████████████████████
       │        ███████████████████████
    80 │        ███████████████████████
       │        ███████████████████████
    60 │        ███████████████████████
       │     ██████████████████████████████
    40 │     ██████████████████████████████
       │     ██████████████████████████████
    20 │  ████████████████████████████████████
       │  ████████████████████████████████████
     0 └─────────────────────────────────────────
       12a  4a   8a  12p  4p   8p  12a

       Lighting: 6am-10pm (16 hours)
       Base Load (HVAC, etc): 24/7
       Peak Demand: 95 kW (lights on + HVAC)
       Off-Peak: 25 kW (HVAC only)
```

#### Seasonal Variations (Greenhouse)

```
Monthly Average Demand:

kW
60 │     ██           ██
   │     ██           ██
50 │  ██ ██           ██ ██
   │  ██ ██           ██ ██
40 │  ██ ██        ██ ██ ██
   │  ██ ██     ██ ██ ██ ██
30 │  ██ ██  ██ ██ ██ ██ ██
   │  ██ ██  ██ ██ ██ ██ ██
20 │  ██ ██  ██ ██ ██ ██ ██  ██
   │  ██ ██  ██ ██ ██ ██ ██  ██
10 │  ██ ██  ██ ██ ██ ██ ██  ██
   └──────────────────────────────
     J  F  M  A  M  J  J  A  S  O  N  D

     Winter: High heating demand
     Summer: High cooling demand
     Spring/Fall: Moderate loads
```

### Load Factor

```
Load Factor = Average Demand ÷ Peak Demand × 100%

Higher is better (more efficient use of capacity)

Example:
  Average Demand: 45 kW
  Peak Demand: 95 kW
  Load Factor = 45 ÷ 95 = 47%

Interpretation:
  < 50%: Poor utilization, high demand charges
  50-70%: Average
  > 70%: Excellent, optimized operation
```

---

## 1.6 Energy Cost Benchmarking

### Comparative Analysis

| Facility Type | Size | Annual kWh | Annual Cost | Cost/sq ft | kWh/lb |
|---------------|------|------------|-------------|------------|--------|
| **Greenhouses** |
| Low-tech | 10,000 sq ft | 150,000 | $18,000 | $1.80 | 0.5 |
| Supplemental light | 10,000 sq ft | 400,000 | $48,000 | $4.80 | 2.0 |
| Full control | 10,000 sq ft | 700,000 | $84,000 | $8.40 | 3.5 |
| **Indoor Farms** |
| Vertical farm | 5,000 sq ft | 500,000 | $60,000 | $12.00 | 10.0 |
| Container farm | 320 sq ft | 35,000 | $4,200 | $13.13 | 12.0 |
| Warehouse farm | 20,000 sq ft | 2,000,000 | $240,000 | $12.00 | 8.0 |
| **Aquaponics** |
| GH + Aquaponics | 8,000 sq ft | 600,000 | $72,000 | $9.00 | 4.0 |
| Indoor + Aquaponics | 5,000 sq ft | 800,000 | $96,000 | $19.20 | 15.0 |

### Regional Variations

**Average Commercial Electricity Rates (2025)**

```
╔══════════════════════════════════════════════════════════════════╗
║              U.S. REGIONAL ELECTRICITY RATES                     ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  Hawaii          ████████████████████████████  $0.28/kWh        ║
║  California      ████████████████████          $0.22/kWh        ║
║  Northeast       ███████████████████           $0.20/kWh        ║
║  Mid-Atlantic    ██████████████                $0.15/kWh        ║
║  Northwest       █████████████                 $0.13/kWh        ║
║  Southeast       ████████████                  $0.12/kWh        ║
║  Midwest         ███████████                   $0.11/kWh        ║
║  Mountain        ██████████                    $0.10/kWh        ║
║                                                                  ║
║  National Average: $0.14/kWh                                    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

**Impact on Operation Costs**

Same facility (500,000 kWh/year) in different regions:
- Hawaii: $140,000/year
- California: $110,000/year
- Midwest: $55,000/year

**Difference**: $85,000/year = $1.70/lb for 50,000 lb production

---

## 1.7 Quick Assessment Tool

### Energy Cost Calculator

Use this worksheet to estimate your facility's energy costs:

```
FACILITY INFORMATION
────────────────────────────────────────────────────────────
Facility Type: ________________  Size: ________ sq ft

MONTHLY ENERGY DATA
────────────────────────────────────────────────────────────
Total kWh Used:           __________ kWh
Peak Demand:              __________ kW
Average Rate:             $ ________ /kWh
Demand Charge Rate:       $ ________ /kW
Fixed Charges:            $ ________

CALCULATED METRICS
────────────────────────────────────────────────────────────
Energy Charges:           $ ________ (kWh × Rate)
Demand Charges:           $ ________ (kW × Rate)
Total Monthly Bill:       $ ________
Annual Projected:         $ ________ (× 12)

Energy Use Intensity:     ________ kWh/sq ft/year
  (Annual kWh ÷ sq ft)

Monthly Production:       ________ lbs
Energy per lb:            ________ kWh/lb
Energy Cost per lb:       $ ________ /lb

BENCHMARK COMPARISON
────────────────────────────────────────────────────────────
Your EUI: _______ kWh/sq ft     Industry Range: _______
Your kWh/lb: _______ kWh/lb     Industry Range: _______

Performance: □ Excellent  □ Good  □ Average  □ Needs Improvement
```

---

## 1.8 Case Study: Energy Cost Impact

### Scenario: Two Competing Farms

**Farm A: Standard Efficiency**
- Location: California (high rates)
- Technology: Older HPS lighting
- Energy cost: $1.20/lb
- Wholesale price needed: $5.50/lb for 20% margin

**Farm B: High Efficiency**
- Location: California (same rates)
- Technology: LED lighting, heat recovery
- Energy cost: $0.50/lb
- Wholesale price needed: $4.20/lb for 20% margin

**Market Impact:**
- Farm B can price 24% lower
- Farm B has $0.70/lb cost advantage
- At same price, Farm B has 14% higher profit margin

### Return on Efficiency Investment

**Farm B's Upgrades:**
- LED retrofit: $150,000
- Heat recovery: $75,000
- Total investment: $225,000

**Annual Savings:**
- Energy: $35,000/year
- Simple payback: 6.4 years
- 20-year NPV (5% discount): $212,000

---

## Key Takeaways

1. **Energy is a major cost** - Typically 15-40% of operating expenses
2. **Wide variation by system** - Indoor farms use 10-40x more than basic greenhouses
3. **Rate structure matters** - Demand charges can be 20-40% of bill
4. **Benchmarking is critical** - Know your metrics: EUI, kWh/lb, % revenue
5. **Regional differences** - Electricity rates vary 3x across the country
6. **Efficiency = competitiveness** - Lower energy costs enable lower prices

---

## Practice Problems

### Problem 1: Energy Bill Analysis

Your 8,000 sq ft greenhouse used 35,000 kWh last month with a 65 kW peak demand. Calculate your bill using these rates:
- Energy: $0.12/kWh
- Demand: $18/kW
- Fixed: $50/month

**Solution:**
```
Energy: 35,000 kWh × $0.12 = $4,200
Demand: 65 kW × $18 = $1,170
Fixed: $50
Total: $5,420
Average rate: $5,420 ÷ 35,000 = $0.155/kWh
```

### Problem 2: Production Intensity

Your facility produces 12,000 lbs of lettuce annually using 180,000 kWh. What is your energy intensity, and how does it compare to the benchmark of 10 kWh/lb?

**Solution:**
```
Energy Intensity = 180,000 kWh ÷ 12,000 lbs = 15 kWh/lb
Comparison: 50% higher than benchmark
Improvement opportunity: 5 kWh/lb × 12,000 lbs = 60,000 kWh/year potential savings
```

### Problem 3: Load Factor

Your facility has these characteristics:
- Peak demand: 120 kW
- Monthly energy use: 72,000 kWh
- Operating hours: 730 hours/month (24/7)

Calculate the load factor.

**Solution:**
```
Average Demand = 72,000 kWh ÷ 730 hours = 98.6 kW
Load Factor = 98.6 kW ÷ 120 kW = 82%
Interpretation: Excellent - very consistent operation
```

---

## Additional Resources

- **Energy Information Administration**: www.eia.gov
- **ENERGY STAR for Agriculture**: www.energystar.gov
- **CEA Energy Benchmarking Database**: [Course resource library]
- **Utility Rate Database**: www.openei.org

---

**Next Module**: Module 2 - Energy Auditing Methods

---

*Course 305: Energy Systems for CEA | Module 1 | EcoFusion Academy*
