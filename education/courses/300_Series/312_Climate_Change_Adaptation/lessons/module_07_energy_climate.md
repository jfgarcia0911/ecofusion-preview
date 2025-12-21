# Module 7: Energy & Climate

## Learning Objectives
By the end of this module, you will be able to:
- Optimize energy efficiency in CEA operations
- Design and integrate renewable energy systems
- Manage energy costs and carbon footprint
- Plan for grid resilience and power security
- Access energy incentives and financing

---

## 7.1 Energy in CEA Operations

### Energy Use Breakdown

```
╔══════════════════════════════════════════════════════════════════════════════╗
║         TYPICAL ENERGY DISTRIBUTION IN CEA SYSTEMS                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PASSIVE GREENHOUSE (Natural light, some climate control)                   ║
║  ────────────────────────────────────────────────────────────────────────    ║
║  Heating (winter):        ████████████████████████ (45%)                    ║
║  Cooling (summer):        ████████████ (25%)                                ║
║  Fans/circulation:        ████ (10%)                                        ║
║  Pumps/irrigation:        ████ (10%)                                        ║
║  Lighting (supplemental): ████ (10%)                                        ║
║                                                                              ║
║  ACTIVE GREENHOUSE (Climate controlled, supplemental light)                 ║
║  ────────────────────────────────────────────────────────────────────────    ║
║  Lighting:                ████████████████ (35%)                            ║
║  Heating:                 ██████████████ (30%)                              ║
║  Cooling/dehumidification:████████ (20%)                                    ║
║  Fans/circulation:        ████ (8%)                                         ║
║  Pumps/controls:          ██ (7%)                                           ║
║                                                                              ║
║  INDOOR VERTICAL FARM (Full artificial lighting)                            ║
║  ────────────────────────────────────────────────────────────────────────    ║
║  Lighting:                ████████████████████████████ (60%)                ║
║  HVAC (cooling):          ████████████ (25%)                                ║
║  Dehumidification:        ████ (8%)                                         ║
║  Pumps/controls:          ██ (5%)                                           ║
║  Other:                   █ (2%)                                            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### Energy Intensity by System

| System Type | Energy Use (kWh/lb produce) | Annual Cost (10K sq ft) | Carbon Footprint (kg CO2e/lb) |
|-------------|---------------------------|----------------------|---------------------------|
| **Passive greenhouse** | 0.5-1.5 | $5,000-15,000 | 0.3-0.9 (grid-dependent) |
| **Active greenhouse** | 2-5 | $20,000-50,000 | 1.2-3.0 |
| **Indoor farm (LED)** | 8-20 | $80,000-200,000 | 4.8-12.0 (fossil grid) |
| **Indoor farm (LED + renewable)** | 8-20 | $40,000-100,000 | 0.5-1.5 (clean energy) |

**Key Insight:** Energy source matters as much as efficiency

---

## 7.2 Energy Efficiency Strategies

### Lighting Efficiency

**LED vs Traditional Lighting:**

```
LIGHTING TECHNOLOGY COMPARISON
═══════════════════════════════════════════════════════════════

HIGH-PRESSURE SODIUM (HPS) - Legacy Technology:
├─► Efficiency: 1.0-1.7 μmol/J (PAR photons per watt)
├─► Lifespan: 10,000-15,000 hours
├─► Heat output: VERY HIGH (85% energy as heat)
├─► Spectrum: Fixed (poor for many crops)
├─► Cost: Low upfront, high operating
└─► Use case: Being phased out

LED (Current Best Practice):
├─► Efficiency: 2.5-3.5 μmol/J (150-200% better)
├─► Lifespan: 50,000-100,000 hours
├─► Heat output: LOW (30% energy as heat)
├─► Spectrum: Tunable (optimize for crop)
├─► Cost: Higher upfront, much lower operating
└─► Use case: Standard for all new installations

────────────────────────────────────────────────────────────────

Example: 10,000 sq ft facility, 18-hour photoperiod

HPS System:
• 400W fixtures × 100 units = 40,000W = 40 kW
• 40 kW × 18 hrs/day × 365 days = 262,800 kWh/year
• At $0.12/kWh: $31,536/year
• Heat load: 34 kW to remove (cooling cost)

LED System:
• 600W fixtures × 50 units = 30,000W = 30 kW
  (fewer fixtures, better coverage, more efficient)
• 30 kW × 18 hrs/day × 365 days = 197,100 kWh/year
• At $0.12/kWh: $23,652/year
• Heat load: 9 kW to remove (70% less cooling)

SAVINGS: $7,884/year electricity + $3,000-6,000 cooling
        = $10,000-14,000/year total
PAYBACK: 2-4 years (depending on LED premium)
```

**LED Optimization Strategies:**
- Adjust spectrum for crop type and growth stage
- Dim lighting during cloudy days (if supplemental)
- Use occupancy sensors in work areas
- Regular cleaning (maintain light output)
- Match light intensity to crop needs (don't over-light)

### HVAC Efficiency

**High-Efficiency Climate Control:**

| Technology | Efficiency | Cost Premium | Best Application |
|-----------|-----------|--------------|-----------------|
| **Heat pumps** (air-source) | COP 2.5-4.0 | Medium | Moderate climates |
| **Heat pumps** (ground-source/geothermal) | COP 3.5-5.0 | High | All climates, new construction |
| **Evaporative cooling** | Very high (water evaporation) | Low | Dry climates only |
| **Thermal curtains** | Reduces heat loss 30-60% | Medium | All greenhouses |
| **Heat recovery** ventilation | Captures 60-80% of exhaust heat | Medium-High | Cold climates |

**HVAC Optimization:**

```
GREENHOUSE CLIMATE CONTROL HIERARCHY
═══════════════════════════════════════════════════════════════

TIER 1: Passive Strategies (Free)
├─► Thermal mass (water barrels, concrete floor)
├─► Proper orientation (south-facing in N. hemisphere)
├─► Natural ventilation (roof vents, side vents)
├─► Shading (movable screens, whitewash)
└─► Insulation (double-wall poly, thermal curtains)

TIER 2: Low-Energy Active (Minimal cost)
├─► Fans for air circulation (< 1 kW)
├─► Evaporative cooling (in dry climates)
├─► Automatic vent openers (solar-powered)
└─► Sensor-driven controls (optimize efficiency)

TIER 3: High-Efficiency Active (Moderate cost)
├─► Heat pumps (2.5-4x more efficient than resistance)
├─► Variable-speed drives (match load to need)
├─► Heat recovery systems
└─► Thermal energy storage

TIER 4: Conventional Active (Higher cost)
├─► Resistance heating (last resort, 100% efficient but expensive)
├─► Gas heaters (efficient but fossil fuel)
└─► Standard AC (less efficient than heat pumps)

STRATEGY: Maximize Tier 1-2, use Tier 3 when needed, avoid Tier 4
```

### Insulation and Design

**Greenhouse Envelope Efficiency:**

| Covering Material | R-value | Light Transmission | Cost | Best Use |
|------------------|---------|-------------------|------|----------|
| **Single poly** | 0.8 | 85-90% | Low | Mild climates |
| **Double poly** | 1.5 | 80-85% | Medium | Most climates |
| **Polycarbonate (twin-wall)** | 1.6 | 80-82% | Medium-High | Durable, hail-prone |
| **Polycarbonate (triple-wall)** | 2.3 | 75-78% | High | Cold climates |
| **Glass (single)** | 0.9 | 90% | High | Permanent structures |
| **Glass (double, low-E)** | 3.0 | 75-80% | Very High | Premium, cold climates |

**Thermal Curtains:**
- Deploy at night to reduce heat loss
- Reduce heating load 30-60%
- Automated deployment based on temperature/light
- Payback: 2-5 years in cold climates

---

## 7.3 Renewable Energy Integration

### Solar PV Systems

**Solar Potential by Region:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║              SOLAR ENERGY POTENTIAL FOR CEA (U.S. Regions)                   ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Region             Solar Resource    % Greenhouse    % Indoor Farm         ║
║                     (kWh/m²/day)      Needs Met       Needs Met             ║
║  ═══════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  SOUTHWEST          6.0-7.0           ████████████    ████████              ║
║  (AZ, NM, NV)       Excellent         90-120%         40-60%                ║
║                                                                              ║
║  CALIFORNIA         5.5-6.5           ██████████      ███████               ║
║  (South)            Excellent         80-110%         35-55%                ║
║                                                                              ║
║  SOUTHEAST          4.5-5.5           ████████        █████                 ║
║  (FL, GA, TX)       Good              70-90%          25-40%                ║
║                                                                              ║
║  MIDWEST            4.0-5.0           ███████         ████                  ║
║                     Good              60-80%          20-35%                ║
║                                                                              ║
║  CALIFORNIA         4.0-5.0           ███████         ████                  ║
║  (North)            Good              60-80%          22-35%                ║
║                                                                              ║
║  NORTHEAST          3.5-4.5           ██████          ███                   ║
║                     Moderate          50-70%          15-28%                ║
║                                                                              ║
║  NORTHWEST          3.0-4.0           █████           ███                   ║
║  (WA, OR)           Moderate          40-60%          12-22%                ║
║                                                                              ║
║  Note: % based on annual average; summer surplus, winter deficit            ║
║        Greenhouse needs much lower than indoor due to natural light         ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**Solar System Design Options:**

**Option 1: Rooftop Solar (Partial Coverage)**
- Cover 30-50% of greenhouse roof
- Minimal shading impact
- Meets 25-60% of electrical needs
- Cost: $2-4/watt installed
- ROI: 5-10 years with incentives

**Option 2: Adjacent Ground-Mount**
- Full solar array on adjacent land
- No greenhouse shading
- Can meet 100%+ needs (net metering)
- Cost: $1.50-3/watt installed
- ROI: 6-10 years

**Option 3: Agrivoltaics (Elevated over crops)**
- Solar panels on frames above outdoor/tunnel crops
- Partial shading can benefit some crops
- Dual use of land
- Cost: $2.50-4/watt (structure premium)
- ROI: 8-12 years

### Energy Storage (Batteries)

**Battery Economics:**

| System Size | Cost | Daily Storage | Best Use Case |
|------------|------|--------------|---------------|
| **Small (10-20 kWh)** | $10,000-20,000 | Critical loads only | Backup for fish, monitoring |
| **Medium (50-100 kWh)** | $40,000-80,000 | Partial operation | Peak shaving, backup |
| **Large (200+ kWh)** | $120,000-300,000 | Full operation | Off-grid, demand management |

**Applications:**
1. **Backup power** - Keep critical systems running during outages
2. **Peak shaving** - Discharge during expensive peak hours
3. **Time-of-use arbitrage** - Charge at night (cheap), use during day (expensive)
4. **Solar smoothing** - Store excess solar, use when sun is down
5. **Grid services** - Participate in demand response programs (revenue)

**Current Status:** High cost, declining; viable when:
- High electricity prices (>$0.20/kWh)
- Large peak/off-peak differential
- Frequent outages (backup value)
- Off-grid necessity
- Incentive programs available

### Other Renewable Options

**Geothermal Heat Pumps:**
- Use stable ground temperature (50-60°F year-round)
- Highly efficient heating and cooling (COP 3.5-5.0)
- High upfront cost ($20-40K for 10K sq ft)
- Long payback (10-20 years) but excellent for new builds
- Best for: Temperature climates, new construction

**Wind Energy:**
- Site-specific (need consistent winds >12 mph average)
- Small-scale turbines (5-100 kW) possible
- Permitting can be challenging
- Complements solar (wind at night/winter)
- Best for: Rural locations, open areas

**Biogas/Biomass:**
- Convert organic waste to energy
- Provides heat and/or electricity (CHP)
- CO2 byproduct for crop enrichment
- Requires feedstock supply
- Best for: Operations with waste streams, livestock integration

---

## 7.4 Grid Resilience

### Power Outage Preparedness

**Critical Load Identification:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    POWER OUTAGE CRITICALITY LEVELS                           ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Priority  System             Time to Crisis    Backup Strategy              ║
║  ═══════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  CRITICAL  Fish aeration       <2 hours         Battery UPS (8-24 hrs) +     ║
║  (Life/death)                  (oxygen depletion)generator (indefinite)      ║
║                                                                              ║
║  CRITICAL  Monitoring/alarms   <4 hours         Battery backup               ║
║                                (awareness lost)  (24-48 hrs)                 ║
║                                                                              ║
║  HIGH      Water circulation   <8 hours         Generator                    ║
║                                (stagnation)      (72+ hrs fuel)              ║
║                                                                              ║
║  HIGH      Climate control     <12 hours        Generator + manual           ║
║            (extreme weather)   (temp extremes)   vents/fans                  ║
║                                                                              ║
║  MEDIUM    Lighting            <24 hours        Generator (or tolerate       ║
║            (if supplemental)   (growth delay)    short gaps)                 ║
║                                                                              ║
║  LOW       Non-essential       >24 hours        Accept downtime              ║
║            (offices, etc.)                                                   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**Backup Power Sizing:**

```
BACKUP GENERATOR SIZING (Example: 10,000 sq ft facility)

CRITICAL LOADS (Must-run):
├─► Fish aeration pumps: 2 kW
├─► Monitoring/controls: 0.5 kW
├─► Security lights: 0.3 kW
└─► SUBTOTAL: 2.8 kW

HIGH-PRIORITY LOADS (Should-run):
├─► Water circulation pumps: 3 kW
├─► Climate control (fans, vents): 5 kW
├─► Lighting (reduced): 10 kW
└─► SUBTOTAL: 18 kW

FULL OPERATIONAL LOAD:
└─► Total facility: 50-80 kW

GENERATOR SIZING OPTIONS:

Minimum (Critical only): 5 kW (20% margin)
├─► Cost: $3,000-5,000
├─► Keeps fish alive, awareness maintained
└─► Cannot operate production

Recommended (Critical + High): 25 kW (25% margin)
├─► Cost: $8,000-15,000
├─► Maintains most operations
└─► Reduced production during outage

Full Capacity (All loads): 75 kW
├─► Cost: $25,000-40,000
├─► Normal operations continue
└─► Expensive, may be overkill

FUEL STORAGE:
├─► 72-hour minimum (most outages <48 hrs)
├─► Example: 25 kW × 24 hrs × 3 days × 0.75 gal/hr/kW load
│   = ~1,350 gallons propane or 270 gallons diesel
└─► Cost: $2,000-4,000 for tank + initial fuel
```

### Microgrid Opportunities

**Community Microgrid Participation:**
- CEA facility as microgrid anchor
- Solar + storage + generator
- Can island from main grid during disruptions
- Provide power to neighbors (revenue/goodwill)
- Growing trend in climate adaptation

---

## 7.5 Energy Cost Management

### Rate Structures and Strategies

**Electricity Rate Types:**

| Rate Type | Description | Best Strategy |
|-----------|-------------|---------------|
| **Flat rate** | Same price 24/7 | Maximize efficiency, no time optimization |
| **Time-of-Use (TOU)** | Varies by time of day | Shift loads to off-peak, use storage |
| **Demand charges** | Fee based on peak kW draw | Reduce peak demand, smooth loads |
| **Real-time pricing** | Varies hourly based on grid | Automated load shifting, storage |
| **Seasonal rates** | Summer vs. winter pricing | Adjust operations seasonally |

**Example TOU Optimization:**

```
TIME-OF-USE RATE OPTIMIZATION
═══════════════════════════════════════════════════════════════

Typical TOU Rate Structure:
├─► Off-peak (10pm-6am):    $0.08/kWh  ████
├─► Mid-peak (6am-4pm):     $0.14/kWh  ███████
└─► Peak (4pm-10pm):        $0.28/kWh  ██████████████

Without Optimization:
├─► Lighting runs 6am-midnight (18 hrs)
├─► Peak hours consumption: 30 kW × 6 hrs = 180 kWh/day
└─► Cost: 180 kWh × $0.28 = $50.40/day × 365 = $18,396/year

With Optimization (if growing greens, flexible schedule):
├─► Shift 4 hours of lighting to off-peak (2am-6am)
├─► Run mid-peak and off-peak only
├─► Peak consumption reduced to 10 kW × 6 hrs = 60 kWh/day
└─► Cost: (60 × $0.28) + (120 × $0.08) = $26.40/day × 365 = $9,636/year

SAVINGS: $8,760/year (48% reduction)

Alternative with battery storage:
├─► Charge battery at night: 150 kWh × $0.08 = $12/night
├─► Discharge during peak: 150 kWh avoids $0.28 rate
└─► Savings: (150 kWh × $0.20 spread) × 365 = $10,950/year
    (Minus battery cost and efficiency losses)
```

### Energy Monitoring and Analytics

**Smart Metering Benefits:**

| Metric | Monitoring Frequency | Use Case |
|--------|---------------------|----------|
| **Total consumption** | Real-time | Identify anomalies, track trends |
| **By end-use** (lighting, HVAC, etc.) | 15-minute intervals | Optimize specific systems |
| **Power factor** | Continuous | Avoid utility penalties, improve efficiency |
| **Peak demand** | Monthly | Manage demand charges |
| **Cost per pound** | Weekly | Track production efficiency |

**Energy Management System (EMS):**
- Automated controls based on price signals
- Predictive algorithms (weather, crop needs)
- Alert notifications (unusual consumption)
- Reporting and analytics
- ROI: 10-25% energy savings typical

---

## 7.6 Incentives and Financing

### Federal Incentives (U.S.)

**Investment Tax Credit (ITC) - Solar:**
- 30% tax credit (2022-2032, then phase down)
- Applies to solar PV and solar thermal
- Commercial projects fully eligible
- Example: $100K solar system → $30K tax credit

**Modified Accelerated Cost Recovery System (MACRS):**
- Accelerated depreciation for renewable energy
- Solar, wind, geothermal qualify
- 5-year depreciation schedule
- Significant tax benefit for profitable businesses

**USDA REAP (Rural Energy for America Program):**
- Grants (25-50% of project cost) and/or loan guarantees
- Renewable energy and energy efficiency projects
- Rural areas only
- Competitive application
- Example: $50K solar → $12.5-25K grant

### State and Local Incentives

**Common State Programs:**

| Incentive Type | Typical Benefit | Availability |
|---------------|----------------|--------------|
| **State tax credits** | 10-30% of cost | Varies by state |
| **Rebates** | $0.50-2/watt (solar) | Many states |
| **Renewable Energy Credits (RECs)** | $1-50/MWh | States with RPS |
| **Property tax exemption** | 100% of RE value | Many states |
| **Sales tax exemption** | 100% of sales tax | Some states |
| **Low-interest loans** | <3% interest | Green banks, some states |

**Example Stack (Best-case scenario, e.g., California):**
- $100K solar system
- Federal ITC: $30K (30%)
- State rebate: $10K (varies)
- Accelerated depreciation value: $15K (present value)
- **Net cost: ~$45K (55% reduction)**
- Payback: 4-6 years

### Utility Programs

**Demand Response:**
- Paid to reduce consumption during peak events
- Typical payment: $50-200/kW-year
- May receive event notifications (2-4 hours notice)
- Reduce non-critical loads temporarily
- Can be significant revenue stream

**Net Metering:**
- Sell excess solar to grid at retail rate
- Ideal for solar systems slightly oversized
- Regulations vary by state (some limiting/eliminating)
- Annual true-up or monthly billing

---

## 7.7 Carbon Accounting

### Calculating Your Carbon Footprint

**Energy Carbon Intensity by Source:**

| Electricity Source | kg CO2e per kWh | Notes |
|-------------------|----------------|-------|
| **Coal** | 0.90-1.00 | Highest emissions |
| **Natural gas** | 0.40-0.50 | Half of coal |
| **Grid average (U.S.)** | 0.40-0.45 | Varies by region |
| **Nuclear** | 0.01-0.02 | Very low |
| **Wind** | 0.01-0.02 | Very low |
| **Solar PV** | 0.03-0.05 | Lifecycle emissions |
| **Hydro** | 0.01-0.03 | Very low (but location-dependent) |

**Regional Grid Mix (U.S. Examples):**

| Region | Avg Emissions (kg CO2e/kWh) | Primary Sources |
|--------|---------------------------|-----------------|
| **West Virginia** | 0.75 | Coal-heavy |
| **Wyoming** | 0.70 | Coal-heavy |
| **California** | 0.20 | Natural gas, renewables, hydro |
| **Vermont** | 0.001 | Hydro, nuclear, renewables |
| **New York** | 0.25 | Natural gas, nuclear, renewables |
| **Texas** | 0.40 | Natural gas, coal, growing renewables |

**Calculation Example:**
- 10,000 sq ft greenhouse, 200,000 kWh/year
- Grid average: 0.42 kg CO2e/kWh
- Annual emissions: 84,000 kg CO2e (84 tons)
- Per pound of produce (20,000 lbs/year): 4.2 kg CO2e/lb

**With 100% solar:**
- Same consumption: 200,000 kWh/year
- Solar: 0.04 kg CO2e/kWh (lifecycle)
- Annual emissions: 8,000 kg CO2e (8 tons)
- Per pound: 0.4 kg CO2e/lb
- **Reduction: 90% lower carbon footprint**

### Carbon Reduction Targets

**Setting Goals:**

| Target | Ambition Level | Actions Required |
|--------|---------------|-----------------|
| **25% reduction** | Baseline | LED lighting, HVAC tune-ups, controls |
| **50% reduction** | Moderate | Above + renewable energy (solar), efficiency upgrades |
| **75% reduction** | Aggressive | Above + 75%+ renewable, heat pumps, thermal storage |
| **Net-zero** | Transformational | 100% renewable, maximum efficiency, offset residual |
| **Carbon-positive** | Leading | Above + carbon sequestration (biochar, forestry offsets) |

---

## 7.8 Key Takeaways

### Energy is the Largest Climate Lever for CEA

1. **Efficiency First, Always**
   - LED lighting: 40-60% savings vs. HPS
   - Heat pumps: 50-75% savings vs. resistance heat
   - Insulation/curtains: 30-60% heating savings
   - Smart controls: 10-20% overall savings

2. **Renewable Energy Transforms Carbon Footprint**
   - Solar PV can meet 60-120% of greenhouse needs (regionally)
   - 80-90% carbon reduction with clean energy
   - Federal + state incentives make solar attractive (4-10 year ROI)
   - Energy storage declining in cost, increasingly viable

3. **Grid Resilience is Risk Management**
   - Backup power is essential (especially aquaponics)
   - Generator (25-50 kW) + fuel (72+ hours)
   - Battery backup for critical loads
   - Microgrids emerging as climate adaptation strategy

4. **Rate Optimization Saves Money**
   - Time-of-use: Shift loads to off-peak
   - Demand charges: Reduce peak loads
   - Net metering: Size solar appropriately
   - Demand response: Revenue for flexibility

5. **Monitor to Manage**
   - Sub-metering reveals opportunities
   - Energy management systems automate savings
   - Track kWh per pound produced
   - Continuous improvement mindset

6. **Incentives Make Investment Attractive**
   - Federal ITC (30%) + MACRS depreciation
   - State rebates and tax credits
   - USDA REAP grants (rural)
   - Utility programs
   - Stack incentives for 40-60% cost reduction

### Action Items

- [ ] Conduct energy audit (by end-use)
- [ ] Calculate current carbon footprint
- [ ] Assess solar potential (resource, roof space, economics)
- [ ] Upgrade to LED if not already
- [ ] Size and spec backup generator
- [ ] Research applicable incentives (federal, state, utility)
- [ ] Set energy reduction and renewable energy targets
- [ ] Implement energy monitoring system
- [ ] Develop grid outage response plan

---

## Additional Resources

### Tools and Calculators
- PVWatts (NREL) - Solar potential calculator
- ENERGY STAR Portfolio Manager
- EPA eGRID - Grid emissions data
- DSIRE - Incentive database

### Programs
- USDA REAP
- DOE Better Buildings
- EPA ENERGY STAR for plants
- State energy offices

### Information
- NREL (National Renewable Energy Laboratory)
- SEIA (Solar Energy Industries Association)
- CEA energy benchmarking studies
- Utility energy efficiency programs

---

## Next Module
**Module 8: Extreme Weather Preparation** - Prepare your CEA operation for hurricanes, floods, wildfires, heat waves, and other climate-driven extreme events.

---

*Module 7 | Course 312: Climate Change Adaptation | EcoFusion Academy*
