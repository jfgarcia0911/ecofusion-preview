# Module 2: Energy Auditing Methods

## Learning Objectives

By the end of this module, you will be able to:
- Conduct comprehensive energy audits of CEA facilities
- Use monitoring equipment to gather energy data
- Identify energy waste and efficiency opportunities
- Develop actionable energy improvement recommendations
- Prioritize efficiency measures by ROI

---

## 2.1 Types of Energy Audits

### Level 1: Walk-Through Audit

**Duration**: 2-4 hours
**Cost**: $500-1,500
**Scope**: Visual inspection and utility bill analysis

**Deliverables:**
- Energy consumption summary
- Quick-win opportunities
- Rough savings estimates
- Recommended next steps

**When to Use:**
- Initial facility assessment
- Pre-purchase evaluation
- Annual energy reviews
- Quick opportunity identification

### Level 2: Detailed Energy Audit

**Duration**: 1-3 days
**Cost**: $3,000-10,000
**Scope**: Comprehensive measurements and analysis

**Deliverables:**
- Detailed energy balance
- Equipment inventory and performance
- Measured savings calculations
- Prioritized recommendations
- Implementation costs and paybacks

**When to Use:**
- Planning major upgrades
- Grant/rebate applications
- Significant energy costs
- Facility optimization

### Level 3: Investment-Grade Audit

**Duration**: 1-2 weeks
**Cost**: $10,000-30,000+
**Scope**: Detailed engineering analysis with guarantees

**Deliverables:**
- Engineered solutions with specifications
- Guaranteed savings calculations
- Detailed financial analysis
- M&V protocols
- Design documents

**When to Use:**
- Large capital projects (>$100K)
- Performance contracts
- Financing requirements
- Risk mitigation needed

---

## 2.2 Energy Audit Process

### Step 1: Pre-Audit Preparation

**Gather Historical Data (12-24 months):**

```
Required Information:
├── Utility Bills
│   ├── Electric bills (all months)
│   ├── Natural gas bills
│   ├── Propane/fuel oil invoices
│   └── Water/sewer bills
│
├── Facility Information
│   ├── Building plans/drawings
│   ├── Equipment specifications
│   ├── Control system documentation
│   └── Previous audit reports
│
├── Operational Data
│   ├── Production records
│   ├── Operating schedules
│   ├── Maintenance logs
│   └── Staff interviews scheduled
│
└── Goals & Constraints
    ├── Budget limitations
    ├── Timeline requirements
    ├── Operational constraints
    └── Sustainability targets
```

**Utility Bill Analysis Template:**

| Month | kWh | Cost | Demand (kW) | $/kWh | Notes |
|-------|-----|------|-------------|-------|-------|
| Jan 2024 | 45,000 | $5,850 | 95 | $0.130 | Cold month |
| Feb 2024 | 42,000 | $5,460 | 90 | $0.130 | |
| Mar 2024 | 38,000 | $4,940 | 85 | $0.130 | Warming |
| ... | | | | | |
| **Annual** | **480,000** | **$62,400** | **95 peak** | **$0.130 avg** | |

### Step 2: Site Visit & Data Collection

**Equipment Inventory Checklist:**

```
LIGHTING SYSTEMS
────────────────────────────────────────────────────────────
Location | Type | Qty | Wattage | Hours/day | Control | Notes
────────────────────────────────────────────────────────────
Grow Zone 1 | LED | 40 | 400W | 16 | Timer | Good
Grow Zone 2 | HPS | 30 | 600W | 18 | Manual | Replace
Propagation | T5 | 60 | 54W | 24 | Timer | OK
Workspace | LED | 20 | 150W | 12 | Switch | Good
────────────────────────────────────────────────────────────

HVAC SYSTEMS
────────────────────────────────────────────────────────────
Equipment | Capacity | Age | Efficiency | Condition | Runtime
────────────────────────────────────────────────────────────
Boiler #1 | 500 MBH | 12 yr | 80% | Fair | High
Heat Pump #1 | 10 ton | 5 yr | SEER 16 | Good | Medium
Dehumidifier #1 | 150 pt/day | 8 yr | Unknown | Fair | Continuous
Exhaust Fan #1 | 5000 CFM | 15 yr | Standard | Poor | Variable
────────────────────────────────────────────────────────────

WATER SYSTEMS
────────────────────────────────────────────────────────────
Pump | HP | GPM | Head | VFD | Hours/day | Notes
────────────────────────────────────────────────────────────
Irrigation #1 | 2 HP | 50 | 40 ft | No | 8 | Add VFD
Circulation #1 | 1.5 HP | 100 | 20 ft | Yes | 24 | Good
Aeration #1 | 3 HP | N/A | N/A | No | 24 | Oversized
────────────────────────────────────────────────────────────
```

### Step 3: Energy Measurements

**Essential Measurements:**

1. **Power Monitoring**
   - Main panel power (kW, kWh, power factor)
   - Individual equipment loads
   - Lighting circuits
   - HVAC equipment
   - Pump motors

2. **Environmental Conditions**
   - Temperature (multiple zones)
   - Humidity (indoor/outdoor)
   - Light levels (PAR/PPFD)
   - CO2 levels

3. **Operating Parameters**
   - Equipment runtime hours
   - Thermostat setpoints
   - Control sequences
   - Production schedules

**Measurement Duration:**

```
Equipment Type          Minimum Duration    Recommended
─────────────────────────────────────────────────────────
Lighting                24 hours            1 week
HVAC                    1 week              1 month
Pumps (continuous)      24 hours            1 week
Pumps (intermittent)    1 week              1 month
Whole facility          1 week              1 month
Seasonal equipment      Full season         Full season
```

---

## 2.3 Monitoring Equipment

### Power Meters

**Types and Applications:**

| Device | Measurement | Accuracy | Cost | Use Case |
|--------|-------------|----------|------|----------|
| **Plug-in meter** | Voltage, current, kWh, PF | ±2% | $25-100 | Single devices |
| **Clamp meter** | Current, voltage | ±3% | $50-300 | Spot checks |
| **Data logger** | Multi-channel power | ±1% | $500-2,000 | Equipment monitoring |
| **Panel meter** | 3-phase power | ±0.5% | $1,500-5,000 | Main panels |
| **Utility-grade** | Revenue accuracy | ±0.2% | $3,000-10,000 | Submetering |

**Example Setup:**

```
FACILITY ENERGY MONITORING CONFIGURATION
────────────────────────────────────────────────────────────

Main Service
    │
    ├─[PANEL METER]──→ Main consumption data
    │
    ├── Lighting Panel
    │   └─[DATA LOGGER]──→ Lighting circuits (channels 1-8)
    │
    ├── HVAC Panel
    │   ├─[CLAMP METER]──→ Boiler
    │   ├─[CLAMP METER]──→ Heat pump
    │   └─[CLAMP METER]──→ Dehumidifiers
    │
    ├── Pumps Panel
    │   └─[DATA LOGGER]──→ All pumps (channels 1-6)
    │
    └── General Loads
        └─[PLUG METERS]──→ Various equipment
```

### Environmental Sensors

**Key Measurements:**

```
Temperature Sensors
  • Indoor air: ±0.5°F accuracy
  • Surface: Infrared thermometer
  • Outdoor: Weather station
  • Recommended: 1 per 1,000 sq ft

Humidity Sensors
  • Indoor RH: ±2% accuracy
  • Dewpoint calculation
  • Recommended: 1 per zone

Light Meters
  • PAR meter: µmol/m²/s
  • Light sensor: Foot-candles
  • DLI calculator
  • Recommended: Multiple positions per zone

Thermal Imaging
  • Detect heat loss
  • Find air leaks
  • Identify hot spots
  • Professional camera: $3,000-20,000
```

---

## 2.4 Energy Balance Analysis

### Creating an Energy Balance

**Concept**: Account for all energy inputs and uses

```
╔══════════════════════════════════════════════════════════════════╗
║                    FACILITY ENERGY BALANCE                       ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  INPUTS (Annual)                                                 ║
║  ════════════════                                                ║
║  Electricity        500,000 kWh   (1,706 MMBtu) ────────┐       ║
║  Natural Gas         50,000 Therms (5,000 MMBtu) ────┐  │       ║
║                                                       │  │       ║
║  TOTAL ENERGY INPUT: 6,706 MMBtu                     │  │       ║
║                                                       ▼  ▼       ║
║  END USES                              ┌──────────────────────┐  ║
║  ═════════                             │                      │  ║
║  Lighting           60%  4,024 MMBtu   │  GREENHOUSE          │  ║
║  Heating            25%  1,677 MMBtu   │  10,000 sq ft        │  ║
║  Cooling/Ventilation 8%    536 MMBtu   │  Annual Production:  │  ║
║  Water/Pumps         4%    268 MMBtu   │  100,000 lbs         │  ║
║  Controls/Other      3%    201 MMBtu   │                      │  ║
║                                        └──────────────────────┘  ║
║  TOTAL:            100%  6,706 MMBtu                             ║
║                                                                  ║
║  ENERGY INTENSITY                                                ║
║  ═════════════════                                               ║
║  Per sq ft:         67.1 kBtu/sq ft/year                        ║
║  Per lb product:    67.1 kBtu/lb                                ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

### End-Use Breakdown Calculation

**Example: Calculating Lighting Energy**

```
Lighting Inventory:
  LED fixtures: 40 × 400W × 16 hrs/day × 365 days = 93,440 kWh/year
  HPS fixtures: 30 × 600W × 18 hrs/day × 365 days = 118,260 kWh/year
  Fluorescent: 60 × 54W × 24 hrs/day × 365 days = 28,382 kWh/year
  ──────────────────────────────────────────────────────────────
  TOTAL LIGHTING: 240,082 kWh/year

Percentage of total: 240,082 ÷ 500,000 = 48%
```

**Example: Calculating Heating Energy**

```
Natural Gas Consumption (winter months):
  Monthly average: 4,500 therms/month
  Heating season: October - April (7 months)
  Annual heating: 4,500 × 7 = 31,500 therms

  Summer baseline (non-heating): 500 therms/month
  Annual baseline: 500 × 12 = 6,000 therms

  Total gas: 37,500 therms/year
  Heating portion: 31,500 therms (84% of gas use)

Energy content: 31,500 therms × 100,000 Btu/therm = 3,150 MMBtu
Percentage of total facility: 47% (mostly heating)
```

---

## 2.5 Identifying Efficiency Opportunities

### The Opportunity Register

**Template for tracking findings:**

| ID | Opportunity | Current | Proposed | Savings | Cost | Payback | Priority |
|----|-------------|---------|----------|---------|------|---------|----------|
| L-1 | Replace HPS with LED | 118,260 kWh | 47,304 kWh | $8,515/yr | $45,000 | 5.3 yr | High |
| H-1 | Install thermal curtain | High heat loss | 30% reduction | $4,200/yr | $18,000 | 4.3 yr | High |
| H-2 | Lower night setpoint | 68°F | 62°F | $1,800/yr | $0 | Immediate | High |
| P-1 | Add VFD to pump | Full speed | Variable | $720/yr | $2,400 | 3.3 yr | Medium |
| C-1 | Seal air leaks | Infiltration | Sealed | $600/yr | $500 | 0.8 yr | High |
| L-2 | Add occupancy sensors | Always on | Auto | $360/yr | $800 | 2.2 yr | Medium |

### Common Opportunities by Category

**Lighting:**
```
┌─────────────────────────────────────────────────────────────────┐
│ LIGHTING EFFICIENCY OPPORTUNITIES                                │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Replace HPS with LED            Savings: 50-60%               │
│ ✓ Replace T5 with LED T8          Savings: 30-40%               │
│ ✓ Optimize photoperiod            Savings: 10-20%               │
│ ✓ Add dimming controls            Savings: 15-25%               │
│ ✓ Improve fixture maintenance     Savings: 5-10%                │
│ ✓ Zone lighting by crop needs     Savings: 10-15%               │
└─────────────────────────────────────────────────────────────────┘
```

**HVAC:**
```
┌─────────────────────────────────────────────────────────────────┐
│ HVAC EFFICIENCY OPPORTUNITIES                                    │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Install thermal curtains        Savings: 20-40% heating       │
│ ✓ Seal building envelope          Savings: 15-30% heating       │
│ ✓ Optimize setpoints              Savings: 10-20% overall       │
│ ✓ Add economizer cycle            Savings: 20-40% cooling       │
│ ✓ Maintain equipment              Savings: 10-20% overall       │
│ ✓ Upgrade to high-efficiency      Savings: 20-30% replaced load │
│ ✓ Install heat recovery           Savings: 15-30% heating       │
│ ✓ Improve distribution            Savings: 10-20% overall       │
└─────────────────────────────────────────────────────────────────┘
```

**Pumps & Motors:**
```
┌─────────────────────────────────────────────────────────────────┐
│ PUMP & MOTOR EFFICIENCY OPPORTUNITIES                            │
├─────────────────────────────────────────────────────────────────┤
│ ✓ Install VFDs                    Savings: 20-50% pumping       │
│ ✓ Right-size pumps                Savings: 20-40% pumping       │
│ ✓ Reduce head losses              Savings: 10-25% pumping       │
│ ✓ Optimize schedules              Savings: 15-30% pumping       │
│ ✓ Premium efficiency motors       Savings: 2-8% motor energy    │
│ ✓ Repair/replace leaks            Savings: 10-20% pumping       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2.6 Calculating Savings

### Energy Savings Calculations

**Example 1: LED Lighting Retrofit**

```
Current System (HPS):
  30 fixtures × 600W = 18,000W = 18 kW
  Operating hours: 18 hrs/day × 365 days = 6,570 hrs/year
  Annual consumption: 18 kW × 6,570 hrs = 118,260 kWh/year
  Annual cost: 118,260 kWh × $0.12/kWh = $14,191

Proposed System (LED):
  30 fixtures × 260W (equivalent output) = 7,800W = 7.8 kW
  Operating hours: Same, 6,570 hrs/year
  Annual consumption: 7.8 kW × 6,570 hrs = 51,246 kWh/year
  Annual cost: 51,246 kWh × $0.12/kWh = $6,150

SAVINGS CALCULATION
────────────────────────────────────────────────────────────
Energy savings: 118,260 - 51,246 = 67,014 kWh/year (57%)
Cost savings: $14,191 - $6,150 = $8,041/year

ADDITIONAL BENEFITS
────────────────────────────────────────────────────────────
Reduced cooling load: 10.2 kW × 2,000 cooling hrs × $0.12
  = $2,448/year additional savings

Total annual savings: $10,489/year

Implementation cost: $45,000
Simple payback: $45,000 ÷ $10,489 = 4.3 years
```

**Example 2: Thermal Curtain Installation**

```
Current Heating Load:
  Heat loss area: 10,000 sq ft glazing
  U-value: 1.0 Btu/hr-sq ft-°F (single poly)
  Average ΔT (winter nights): 30°F
  Night hours (deployed): 14 hrs/day × 180 days = 2,520 hrs

  Heat loss: 10,000 sq ft × 1.0 × 30°F × 2,520 hrs
           = 756,000,000 Btu = 756 MMBtu

With Thermal Curtain:
  New U-value: 0.4 Btu/hr-sq ft-°F (70% reduction)
  Heat loss: 10,000 × 0.4 × 30 × 2,520 = 302.4 MMBtu

SAVINGS CALCULATION
────────────────────────────────────────────────────────────
Heat saved: 756 - 302.4 = 453.6 MMBtu/year (60% reduction)

Natural gas savings: 453.6 MMBtu ÷ 0.8 efficiency ÷ 0.1 MMBtu/therm
                   = 5,670 therms/year

Cost savings: 5,670 therms × $1.20/therm = $6,804/year

Implementation cost: $25,000
Simple payback: $25,000 ÷ $6,804 = 3.7 years
```

**Example 3: VFD on Irrigation Pump**

```
Current Operation (Constant Speed):
  Motor: 5 HP
  Load factor: 70% average
  Operating: 12 hrs/day, 365 days = 4,380 hrs/year

  Power consumption: 5 HP × 0.746 kW/HP × 0.70 = 2.61 kW
  Annual energy: 2.61 kW × 4,380 hrs = 11,432 kWh/year
  Annual cost: 11,432 kWh × $0.12 = $1,372/year

With VFD (Variable Flow):
  Average speed: 60% of full
  Power at reduced speed: (0.60)³ = 0.216 (cube law)
  Effective power: 2.61 kW × 0.216 = 0.56 kW
  Annual energy: 0.56 kW × 4,380 hrs = 2,453 kWh/year
  Annual cost: 2,453 kWh × $0.12 = $294/year

SAVINGS CALCULATION
────────────────────────────────────────────────────────────
Energy savings: 11,432 - 2,453 = 8,979 kWh/year (79%)
Cost savings: $1,372 - $294 = $1,078/year

Implementation cost: $3,500
Simple payback: $3,500 ÷ $1,078 = 3.2 years
```

---

## 2.7 Audit Report Structure

### Executive Summary (1-2 pages)

```
ENERGY AUDIT EXECUTIVE SUMMARY
═══════════════════════════════════════════════════════════

Facility: Green Growth Farms
Address: 123 Farm Road, Anytown, USA
Audit Date: March 15, 2025
Auditor: EcoFusion Energy Services

CURRENT ENERGY PROFILE
───────────────────────────────────────────────────────────
Annual Electricity:     500,000 kWh      $60,000
Annual Natural Gas:      50,000 therms   $60,000
Total Energy Cost:                       $120,000

Energy Intensity:       50 kWh/sq ft/year
Production Intensity:   10 kWh/lb

KEY FINDINGS
───────────────────────────────────────────────────────────
• Lighting: 48% of electric use (opportunity for LED retrofit)
• Heating: 60% of total energy (envelope improvements needed)
• Baseline load: 15 kW (identify phantom loads)
• Peak demand: 95 kW (demand charge optimization possible)

RECOMMENDED MEASURES
───────────────────────────────────────────────────────────
Priority 1 (Immediate):
  • Lower night setpoints         $1,800/year    $0
  • Seal air leaks                $600/year      $500
  • Lighting schedules            $720/year      $0
  Subtotal:                       $3,120/year    $500

Priority 2 (1-2 years):
  • LED lighting retrofit         $10,489/year   $45,000
  • Thermal curtains              $6,804/year    $25,000
  • VFD on pumps                  $1,078/year    $3,500
  Subtotal:                       $18,371/year   $73,500

Priority 3 (2-5 years):
  • High-efficiency boiler        $4,200/year    $35,000
  • Solar PV system (50 kW)       $6,000/year    $125,000
  Subtotal:                       $10,200/year   $160,000

TOTAL OPPORTUNITY
───────────────────────────────────────────────────────────
Annual Savings:                   $31,691 (26% reduction)
Total Investment:                 $234,000
Weighted Payback:                 7.4 years
20-Year NPV (5% discount):        $159,432
```

### Detailed Sections

**Section 1: Facility Overview**
- Building description
- Operations summary
- Energy systems inventory
- Production data

**Section 2: Current Energy Use**
- Utility bill analysis (12-24 months)
- Energy balance diagram
- End-use breakdown
- Benchmarking comparison

**Section 3: Findings & Opportunities**
- Individual measure descriptions
- Calculation methodologies
- Cost estimates
- Implementation considerations

**Section 4: Recommendations**
- Prioritized action plan
- Financial summary
- Implementation timeline
- Maintenance recommendations

**Section 5: Appendices**
- Equipment inventory
- Measurement data
- Utility bills
- Photos and thermal images
- Vendor quotes

---

## 2.8 Prioritization Methods

### Simple Payback Method

```
Ranking by Payback Period:

Measure                     Savings/yr   Cost      Payback   Priority
─────────────────────────────────────────────────────────────────────
Night setpoint reduction    $1,800       $0        0.0 yr    ★★★★★
Seal air leaks              $600         $500      0.8 yr    ★★★★★
Occupancy sensors           $360         $800      2.2 yr    ★★★★
VFD on pump                 $1,078       $3,500    3.2 yr    ★★★★
Thermal curtains            $6,804       $25,000   3.7 yr    ★★★
LED retrofit                $10,489      $45,000   4.3 yr    ★★★
High-efficiency boiler      $4,200       $35,000   8.3 yr    ★★
Solar PV                    $6,000       $125,000  20.8 yr   ★

Criteria:
★★★★★ Excellent: <2 years
★★★★  Good: 2-4 years
★★★   Average: 4-7 years
★★    Fair: 7-10 years
★     Poor: >10 years
```

### Cost-Effectiveness Ratio

```
$ Saved per $ Invested (over 10 years):

Measure                  Investment   10-yr Savings   Ratio
────────────────────────────────────────────────────────────
Night setpoints          $0          $18,000         ∞
Air sealing              $500        $6,000          12.0
Occupancy sensors        $800        $3,600          4.5
VFD                      $3,500      $10,780         3.1
Thermal curtains         $25,000     $68,040         2.7
LED retrofit             $45,000     $104,890        2.3
Boiler upgrade           $35,000     $42,000         1.2
Solar PV                 $125,000    $60,000         0.5*

*Solar typically evaluated over 20-25 years, ratio improves to 1.2
```

### NPV Analysis (Advanced)

```
Net Present Value Calculation (5% discount rate, 10-year analysis):

Measure: LED Lighting Retrofit
  Initial cost: -$45,000
  Annual savings: $10,489/year

Year-by-year NPV:
  Year 0: -$45,000
  Year 1: $10,489 ÷ 1.05¹ = $9,989     NPV: -$35,011
  Year 2: $10,489 ÷ 1.05² = $9,513     NPV: -$25,498
  Year 3: $10,489 ÷ 1.05³ = $9,060     NPV: -$16,438
  Year 4: $10,489 ÷ 1.05⁴ = $8,629     NPV: -$7,809
  Year 5: $10,489 ÷ 1.05⁵ = $8,218     NPV: +$409 ← Breakeven
  ...
  Year 10: $10,489 ÷ 1.05¹⁰ = $6,438   NPV: +$35,962

Interpretation: Positive NPV = Good investment
                Higher NPV = Better investment
```

---

## 2.9 Practical Audit Tips

### Common Mistakes to Avoid

```
❌ MISTAKE                          ✓ BETTER APPROACH
─────────────────────────────────────────────────────────────────
Measuring too briefly               Measure full week minimum
Ignoring production variations      Normalize by production
Using nameplate ratings             Measure actual power draw
Forgetting demand charges           Include in all calculations
Overlooking maintenance             Factor ongoing costs
Assuming constant operation         Check actual schedules
Using average rates                 Apply actual rate structure
Ignoring implementation costs       Get real contractor quotes
Skipping simple measures            Start with low-hanging fruit
No measurement & verification       Include M&V plan
```

### Quick Assessment Checklist

```
□ LIGHTING
  □ Type and age of all fixtures documented
  □ Operating hours measured or verified
  □ Light levels measured (PAR/PPFD)
  □ Controls assessed (timers, sensors, dimmers)
  □ Maintenance practices reviewed

□ HVAC
  □ All equipment inventoried with specifications
  □ Setpoints documented and verified
  □ Runtime monitored
  □ Thermostat locations assessed
  □ Distribution system inspected
  □ Maintenance records reviewed

□ BUILDING ENVELOPE
  □ Insulation levels verified
  □ Air leaks identified (visual and thermal imaging)
  □ Thermal curtains/screens assessed
  □ Windows/glazing condition noted
  □ Door seals checked

□ WATER/PUMPS
  □ All pumps inventoried
  □ Flow rates and pressures measured
  □ VFD presence noted
  □ Piping system assessed for losses
  □ Operating schedules documented

□ CONTROLS
  □ Control system capabilities documented
  □ Actual vs. intended operation compared
  □ Override frequency noted
  □ Optimization opportunities identified

□ OPERATIONS
  □ Staff interviewed about practices
  □ Production schedules obtained
  □ Maintenance practices documented
  □ Training needs identified
```

---

## 2.10 Case Study: Complete Audit

### Facility Profile

**Blue Sky Greenhouse**
- Size: 12,000 sq ft
- Crops: Lettuce, herbs
- Production: 80,000 lbs/year
- Location: Pacific Northwest

### Audit Findings

**Energy Profile:**
```
Annual Energy Use:
  Electricity: 360,000 kWh ($43,200)
  Natural Gas: 40,000 therms ($48,000)
  Total: $91,200/year

Current Metrics:
  EUI: 30 kWh/sq ft
  Energy/lb: 4.5 kWh/lb
  Energy cost: $1.14/lb (22% of revenue)
```

**Key Opportunities Identified:**

```
OPPORTUNITY SUMMARY
═══════════════════════════════════════════════════════════════════

1. LED Lighting Upgrade                                   Priority: ★★★★
   Current: 40 × 400W HPS (6,570 hrs/year)
   Proposed: 40 × 180W LED
   Savings: 57,816 kWh/year, $6,938/year
   Cost: $28,000
   Payback: 4.0 years

2. Thermal Curtains                                       Priority: ★★★★★
   Current: Single poly, high night heat loss
   Proposed: Automated thermal curtain system
   Savings: 8,000 therms/year, $9,600/year
   Cost: $30,000
   Payback: 3.1 years

3. Boiler Tune-up & Maintenance                           Priority: ★★★★★
   Current: 78% efficiency, poor maintenance
   Proposed: Professional tune-up, annual service
   Savings: 2,000 therms/year, $2,400/year
   Cost: $1,500
   Payback: 0.6 years

4. Smart Thermostat Controls                              Priority: ★★★★
   Current: Manual, inconsistent setpoints
   Proposed: Automated control with night setback
   Savings: 3,200 therms/year, $3,840/year
   Cost: $4,500
   Payback: 1.2 years

5. VFD on Circulation Pump                                Priority: ★★★
   Current: 3 HP pump, constant speed
   Proposed: VFD for variable flow
   Savings: 6,570 kWh/year, $788/year
   Cost: $2,800
   Payback: 3.6 years

TOTAL PACKAGE
───────────────────────────────────────────────────────────────────
Total Investment:        $66,800
Annual Savings:          $23,566 (26% reduction)
Simple Payback:          2.8 years
10-Year NPV (5%):        $115,131
```

### Implementation Plan

**Phase 1 (Immediate - Month 1):**
- Boiler tune-up: $1,500
- Annual savings: $2,400

**Phase 2 (Year 1 - Months 2-4):**
- Smart controls: $4,500
- Thermal curtains: $30,000
- Annual savings: $13,440
- Phase total: $36,000

**Phase 3 (Year 2):**
- LED retrofit: $28,000
- VFD installation: $2,800
- Annual savings: $7,726
- Phase total: $30,800

**Results After Full Implementation:**
```
Energy Reduction: 26%
Cost Reduction: $23,566/year
New energy cost: $67,634/year
New cost per lb: $0.85/lb (was $1.14)
Competitive advantage: $0.29/lb cost savings
```

---

## Key Takeaways

1. **Audits are investments** - They pay back through identified savings
2. **Measurement is essential** - Don't rely on assumptions
3. **Start simple** - Low-cost/no-cost measures first
4. **Calculate accurately** - Use real costs and actual operation
5. **Prioritize by ROI** - Limited budgets require smart choices
6. **Plan implementation** - Phased approach reduces risk
7. **Verify savings** - M&V ensures expected results

---

## Practice Exercise

Conduct a mini-audit of your facility or a hypothetical 5,000 sq ft greenhouse:

1. List all major energy-using equipment
2. Estimate annual consumption for each
3. Calculate current energy costs
4. Identify 3 efficiency opportunities
5. Calculate savings and payback for each
6. Create prioritized recommendation list

---

## Additional Resources

- **ASHRAE Audit Guidelines**: Procedures for Commercial Buildings
- **Energy Audit Tools**: [Course resource library]
- **Measurement Equipment Guide**: [Resource section]
- **Audit Report Templates**: [Download from course materials]

---

**Next Module**: Module 3 - Lighting Efficiency

---

*Course 305: Energy Systems for CEA | Module 2 | EcoFusion Academy*
