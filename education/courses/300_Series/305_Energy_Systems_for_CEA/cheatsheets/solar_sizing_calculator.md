# Solar PV System Sizing Calculator

**Course 305: Energy Systems for CEA**
**Quick Reference Guide**

---

## Solar System Sizing Process

### Step 1: Determine Energy Offset Goal

**Annual Energy Consumption:** _______ kWh/year (from utility bills)

**Target Offset Percentage:** _______ %

**Target Solar Production:**
```
Target Production = Annual Consumption × Offset %
                  = _______ kWh × _______
                  = _______ kWh/year
```

**Common Offset Targets:**
- 25-40% = Offset daytime consumption
- 50-75% = Significant reduction with some grid dependence
- 80-100% = Near or full offset (requires storage or net metering)

---

## Step 2: Determine Solar Resource

### Find Your Peak Sun Hours

**Location:** _______________________

**Peak Sun Hours (PSH):** _______ hours/day

**Find your location's solar resource:**
- Online: www.nrel.gov/gis/solar.html or pvwatts.nrel.gov
- Lookup by region (see table below)

### Regional Solar Resource Guide

| Region | Annual Avg PSH | Summer | Winter |
|--------|---------------|--------|--------|
| Southwest (AZ, NM, NV) | 6.5-7.5 | 8.0-9.0 | 4.5-5.5 |
| California | 5.5-6.5 | 7.0-8.0 | 3.5-4.5 |
| Southeast | 4.5-5.5 | 6.0-7.0 | 3.0-4.0 |
| Mid-Atlantic | 4.0-5.0 | 5.5-6.5 | 2.5-3.5 |
| Midwest | 4.0-4.5 | 5.5-6.0 | 2.0-3.0 |
| Northeast | 3.5-4.5 | 5.0-6.0 | 2.0-3.0 |
| Northwest | 3.5-4.5 | 5.5-6.5 | 1.5-2.5 |

---

## Step 3: Calculate Derate Factor

**System Losses to Account For:**

| Loss Type | Typical Value | Your Value |
|-----------|--------------|------------|
| Inverter efficiency | 0.96-0.98 | _______ |
| DC wiring losses | 0.98 | _______ |
| AC wiring losses | 0.99 | _______ |
| Soiling (dirt on panels) | 0.95-0.98 | _______ |
| Shading | 0.90-1.00 | _______ |
| Temperature | 0.96-0.98 | _______ |
| Mismatch losses | 0.98 | _______ |
| Age/degradation | 0.99 (year 1) | _______ |

**Combined Derate Factor:**
```
Derate Factor = Loss₁ × Loss₂ × Loss₃ × ... × Lossₙ
```

**Typical Combined Derate Factors:**
- Excellent conditions (minimal shading, clean): 0.85
- Good conditions: 0.80-0.82
- Average conditions: 0.75-0.78
- Poor conditions (partial shade, soiling): 0.70-0.73

**Your Derate Factor:** _______

---

## Step 4: Calculate Required System Size

### Formula:
```
System Size (kW) = Target Annual Production (kWh)
                   ÷ (PSH × 365 days × Derate Factor)
```

### Example Calculation:
```
Target Production: 100,000 kWh/year
Peak Sun Hours: 5.0 hours/day
Derate Factor: 0.80

System Size = 100,000 kWh ÷ (5.0 × 365 × 0.80)
            = 100,000 ÷ 1,460
            = 68.5 kW DC
```

### Your Calculation:
```
System Size = _______ kWh ÷ (_______ × 365 × _______)
            = _______  ÷ _______
            = _______ kW DC
```

---

## Step 5: Convert to Panel Quantity

**Panel Specifications:**
- Panel wattage: _______ W (typical: 350-450W)
- Panel efficiency: _______ % (typical: 18-22%)
- Panel dimensions: _______ ft × _______ ft

**Number of Panels:**
```
Number of Panels = System Size (kW) × 1,000 ÷ Panel Wattage (W)
```

### Example:
```
System Size: 68.5 kW = 68,500 W
Panel Wattage: 400 W

Number of Panels = 68,500 ÷ 400 = 171 panels
```

### Your Calculation:
```
Number of Panels = _______ kW × 1,000 ÷ _______ W
                 = _______ panels
```

---

## Step 6: Determine Space Requirements

**Panel Area:**
```
Single panel area = Length × Width
Total array area = Panel area × Number of panels × 1.5*

*Factor of 1.5 accounts for spacing, access, and tilt
```

### Example:
```
Panel size: 3.5 ft × 6.5 ft = 22.75 sq ft
Number of panels: 171
Total area needed: 22.75 × 171 × 1.5 = 5,835 sq ft
```

### Your Calculation:
```
Panel size: _______ ft × _______ ft = _______ sq ft
Total area needed: _______ × _______ × 1.5 = _______ sq ft
```

**Available Space:**
- Roof area available: _______ sq ft
- Ground area available: _______ sq ft
- Sufficient space? (Y/N): _______

---

## Step 7: Estimate System Cost

### Current Pricing (2025)

**Total System Cost:**
```
System Cost = System Size (kW) × Cost per Watt ($/W)

Typical costs: $2.00 - $3.00/W installed
```

### Example:
```
System Size: 68.5 kW = 68,500 W
Cost: $2.50/W

System Cost = 68,500 × $2.50 = $171,250
```

### Your Calculation:
```
System Cost = _______ W × $_______/W = $_______
```

---

## Step 8: Calculate Incentives

### Federal Investment Tax Credit (ITC)
```
ITC (30%) = System Cost × 0.30
Net Cost after ITC = System Cost - ITC
```

**Your Calculation:**
- System cost: $_______
- ITC (30%): $_______
- Net cost after ITC: $_______

### MACRS Depreciation (for businesses)

**5-year MACRS schedule:**
- Year 1: 20% × (System Cost - ITC/2)
- Year 2: 32%
- Year 3: 19.2%
- Year 4: 11.52%
- Year 5: 11.52%
- Year 6: 5.76%

**Depreciation value at 25% tax rate:**
```
Total tax savings ≈ System Cost × 0.85 × 0.25 = System Cost × 0.21
```

### State/Utility Rebates
- State incentive: $_______
- Utility rebate: $_______
- Other incentives: $_______

### Total Net Cost:
```
Net Cost = System Cost - ITC - Depreciation Value - Rebates
         = $_______ - $_______ - $_______ - $_______
         = $_______
```

---

## Step 9: Calculate Financial Returns

### Annual Energy Production
```
Annual Production = System Size × PSH × 365 × Derate Factor
                  = _______ kW × _______ × 365 × _______
                  = _______ kWh/year
```

### Annual Savings
```
Annual Savings = Annual Production × Electricity Rate
               = _______ kWh × $_______/kWh
               = $_______ /year
```

### Simple Payback
```
Payback = Net Cost ÷ Annual Savings
        = $_______ ÷ $_______
        = _______ years
```

### 25-Year Savings (3% annual rate escalation)
```
Total Savings ≈ Annual Savings × 33*
              = $_______ × 33
              = $_______

*Multiplier accounts for escalating electricity rates
```

### Return on Investment (ROI)
```
25-Year ROI = (Total Savings - Net Cost) ÷ Net Cost × 100%
            = ($_______ - $_______) ÷ $_______ × 100%
            = _______%
```

---

## Step 10: Additional Considerations

### Net Metering
- [ ] Net metering available in your area?
- [ ] Net metering compensation rate: $_______/kWh
- [ ] Annual net metering cap: _______ kWh

### System Orientation & Tilt

**Optimal Tilt Angle:**
```
Tilt ≈ Latitude ± 15°

- Latitude angle: Year-round optimization
- Latitude + 15°: Winter optimization
- Latitude - 15°: Summer optimization
```

**Your latitude:** _______°
**Recommended tilt:** _______°

**Orientation:**
- Optimal: South-facing (180° azimuth)
- Acceptable: Southeast (135°) to Southwest (225°)
- Production loss for East/West: 15-20%

### Battery Storage Addition (Optional)

**Battery sizing for backup:**
```
Battery Size (kWh) = Critical Load (kW) × Backup Hours

Example: 10 kW × 4 hours = 40 kWh battery
```

**Battery cost:** ~$500-800/kWh installed

**Your battery needs:**
- Critical load: _______ kW
- Desired backup hours: _______
- Battery size needed: _______ kWh
- Estimated cost: $_______

---

## Quick Reference Formulas

### System Sizing:
```
kW Required = Target kWh/year ÷ (PSH × 365 × Derate)
```

### Annual Production:
```
kWh/year = kW × PSH × 365 × Derate
```

### Space Required:
```
Area = (kW × 1,000 ÷ Panel Watts) × Panel Area × 1.5
```

### Simple Payback:
```
Years = Net Cost ÷ Annual Savings
```

### Monthly Production:
```
kWh/month = kW × PSH × Days in Month × Derate
```

---

## Solar PV Sizing Worksheet

| Parameter | Value |
|-----------|-------|
| **Energy & Location** | |
| Annual consumption (kWh) | |
| Target offset (%) | |
| Target production (kWh) | |
| Location | |
| Peak sun hours (PSH) | |
| Derate factor | |
| **System Sizing** | |
| Required system size (kW) | |
| Panel wattage (W) | |
| Number of panels | |
| Total array area (sq ft) | |
| **Cost & Incentives** | |
| Gross system cost ($) | |
| Federal ITC 30% ($) | |
| State/utility rebates ($) | |
| MACRS depreciation value ($) | |
| Net cost ($) | |
| **Performance** | |
| Annual production (kWh) | |
| Electricity rate ($/kWh) | |
| Annual savings ($) | |
| Simple payback (years) | |
| 25-year ROI (%) | |

---

**EcoFusion Academy - Course 305**
