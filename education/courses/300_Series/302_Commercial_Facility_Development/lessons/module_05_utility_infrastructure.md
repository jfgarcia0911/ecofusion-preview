# Module 5: Utility Infrastructure

**Duration:** 1 hour
**Learning Objectives:**
- Design adequate electrical service for CEA operations
- Plan water supply and treatment systems
- Understand utility interconnection processes
- Optimize utility costs through proper design
- Incorporate backup systems for reliability

---

## 1. Electrical Service Planning

### Power Requirements by Facility Size

```
ELECTRICAL DEMAND ESTIMATES

Facility Size  | Lighting  | HVAC    | Other   | Total Peak | Annual Use
──────────────────────────────────────────────────────────────────────────
5,000 sf LED   | 40 kW    | 30 kW   | 10 kW   | 80 kW     | 35-50 MWh
10,000 sf LED  | 80 kW    | 60 kW   | 15 kW   | 155 kW    | 70-100 MWh
20,000 sf LED  | 160 kW   | 120 kW  | 25 kW   | 305 kW    | 140-200 MWh
50,000 sf LED  | 400 kW   | 300 kW  | 50 kW   | 750 kW    | 350-500 MWh

Notes:
- LED lighting: 20-25 W/sf growing area
- HVAC: 15-20 W/sf in moderate climates
- Other: pumps, fans, controls, processing, office
- Demand factor: 0.8-0.9 (not all loads peak simultaneously)
- Size service for peak + 20% growth capacity
```

### Service Size Selection

```
ELECTRICAL SERVICE REQUIREMENTS

Total Peak Load  | Service Size    | Panel          | Service Type
─────────────────────────────────────────────────────────────────────
Up to 100 kW     | 400A @ 208V 3ph | 400A panel     | Overhead/buried
100-200 kW       | 800A @ 208V 3ph | 800A panel     | Usually buried
200-400 kW       | 1200A @ 480V 3ph| 1200A panel    | Buried/padmount
400-800 kW       | 2000A @ 480V 3ph| 2000A panel    | Padmount transformer
800-1500 kW      | 4000A @ 480V 3ph| Multiple panels| Dedicated transformer
>1500 kW         | Custom substation | Custom      | Utility substation

Service Voltage Selection:
208V 3-phase: Up to ~400A (most small-medium facilities)
480V 3-phase: 600A+ (medium-large facilities, more efficient)
277/480V: Large facilities (also supports 277V lighting directly)

Recommended: 480V 3-phase for facilities >10,000 sf
Benefits: Lower current, smaller wire, less voltage drop, lower losses
```

### Utility Interconnection Process

```
ELECTRICAL SERVICE CONNECTION TIMELINE

Week 1-2: Initial Contact
│
├─ Contact utility customer service
├─ Describe project load requirements
├─ Request service availability at address
├─ Ask about rates and incentives
└─ Get application forms

Week 3-4: Formal Application
│
├─ Complete service application
├─ Provide electrical plans (stamped)
├─ Provide site plan
├─ Pay application fee ($200-2,000)
└─ Submit load calculations

Week 5-8: Utility Engineering Review
│
├─ Utility engineer reviews request
├─ Determines available capacity
├─ Designs service extension (if needed)
├─ Calculates connection costs
└─ Prepares cost estimate

Week 9-10: Cost Estimate & Agreement
│
├─ Receive connection cost estimate
├─ Review charges (may be $0-$100K+)
├─ Negotiate if costs are high
├─ Sign interconnection agreement
└─ Pay connection fees

Week 11-16: Construction & Installation
│
├─ Utility constructs service extension
├─ Customer completes electrical rough-in
├─ Utility installs meter/transformer
├─ Final electrical inspection
└─ Utility energizes service

TOTAL TIME: 3-6 months typical
Express service may be available (fee)
Rural areas may take 6-12 months
Urban areas with capacity: 2-4 months
```

---

## 2. Electrical Rate Optimization

### Understanding Rate Structures

```
COMMON ELECTRIC RATE COMPONENTS

1. ENERGY CHARGE ($/kWh)
   Cost per kilowatt-hour consumed
   May vary by time of use (TOU)

   Example: $0.10/kWh × 100,000 kWh = $10,000

2. DEMAND CHARGE ($/kW)
   Cost per peak kilowatt demand in billing period
   Based on highest 15-minute average
   Critical to manage for CEA

   Example: $15/kW × 300 kW peak = $4,500

3. CUSTOMER CHARGE ($/month)
   Fixed monthly fee for service
   Typically $50-500 depending on service size

4. POWER FACTOR PENALTY
   Charge if power factor <0.90-0.95
   CEA lighting often creates poor power factor
   Correctable with capacitors

   Penalty: 1-5% of bill

5. TIME-OF-USE (TOU) CHARGES
   Higher rates during peak hours (typically 12pm-8pm)
   Lower rates at night
   May save 20-40% if you can shift load

6. TAXES AND FEES
   Sales tax, franchise fees, etc.
   Typically 5-12% of bill
```

### Demand Charge Management

```
STRATEGIES TO REDUCE DEMAND CHARGES

Problem: Demand charges can be 30-50% of CEA electric bill

Strategy 1: Stagger Equipment Startup
□ Don't turn on all lights at once
□ Stage HVAC startup
□ Use sequenced controls
□ Potential savings: 10-20% of peak demand

Strategy 2: Load Shifting
□ Run heavy equipment at night
□ Process/pack during off-peak
□ Harvest during low-demand periods
□ Potential savings: 20-30% on TOU rates

Strategy 3: Energy Storage
□ Battery system for peak shaving
□ Charge during off-peak, discharge at peak
□ Cost: $300-700/kWh installed
□ Payback: 5-10 years with high demand charges

Strategy 4: Generator Peak Shaving
□ Run generator during peak periods
□ Reduce grid demand
□ Cost: $500-1,000/kW installed
□ Consider emissions regulations

Strategy 5: Demand Response Programs
□ Participate in utility programs
□ Reduce load during grid emergencies
□ Get paid for availability
□ Typical: $50-200/kW/year

Example: 20,000 sf facility
Base peak demand: 350 kW @ $15/kW = $5,250/month
With demand management: 280 kW @ $15/kW = $4,200/month
Monthly savings: $1,050
Annual savings: $12,600
```

---

## 3. Backup Power Systems

### Backup Power Sizing

```
BACKUP POWER REQUIREMENTS

Critical Loads Only:
□ Circulation pumps (prevent root death)
□ Basic ventilation (prevent overheating)
□ Monitoring systems
□ Security systems
□ Size: 10-20% of total facility load
□ Runtime: 12-24 hours
□ Cost: $15-30K for 20-40 kW

Essential Loads:
□ Critical loads plus:
□ Partial lighting (50% intensity)
□ Climate control (setback mode)
□ Processing refrigeration
□ Size: 30-50% of total facility load
□ Runtime: 8-24 hours
□ Cost: $50-100K for 75-150 kW

Full Facility Backup:
□ All loads including:
□ Full lighting
□ Full HVAC
□ All processing
□ Size: 100% of peak load + 20%
□ Runtime: Unlimited with fuel delivery
□ Cost: $150-300K+ for 300-500 kW

Recommendation:
Essential loads backup minimum
Full backup if product value >$500K in grow space
```

### Generator Selection

```
GENERATOR TYPES

Portable Generators (5-20 kW)
Pros: Low cost ($1-3K), movable
Cons: Manual start, limited capacity, need fuel storage
Best for: Emergency use only, very small facilities

Standby Generators (20-150 kW)
Pros: Automatic transfer, integrated, many sizes
Cons: Fixed location, moderate cost ($10-40K)
Fuels: Natural gas (preferred), propane, diesel
Best for: Most CEA facilities

Industrial Generators (150 kW+)
Pros: High capacity, continuous duty, long life
Cons: Expensive ($50-200K+), need containment, loud
Fuels: Diesel, natural gas
Best for: Large facilities, critical operations

Generator Fuel Comparison:
Fuel          | Availability | Storage     | Emissions | Cost/kWh
──────────────────────────────────────────────────────────────────
Natural Gas   | Best         | Unlimited   | Cleanest  | $0.08
Propane       | Good         | Tank on-site| Clean     | $0.12
Diesel        | Good         | Tank on-site| Moderate  | $0.15
Gasoline      | Best         | Limited     | Highest   | $0.18

Recommended: Natural gas if available (unlimited fuel, clean, low cost)
```

### Uninterruptible Power Supply (UPS)

```
UPS FOR CRITICAL SYSTEMS

Applications:
□ Control systems (prevent crashes)
□ Monitoring computers
□ Network equipment
□ Security systems

Sizing:
Control system: 1-3 kVA
Office computers: 2-5 kVA
Runtime: 15-60 minutes (until generator starts)

Cost: $500-3,000 per UPS

Benefit: Seamless transition, protects against:
• Brief outages
• Voltage sags
• Surges
• Frequency variations
```

---

## 4. Water Supply Systems

### Water Demand Calculation

```
WATER REQUIREMENTS

System Type          | Use Rate           | 10K sf Annual | 20K sf Annual
───────────────────────────────────────────────────────────────────────
Hydroponic          | 10-15 gal/sf/year  | 100-150K gal  | 200-300K gal
Aquaponic           | 20-30 gal/sf/year  | 200-300K gal  | 400-600K gal
Aeroponic           | 5-10 gal/sf/year   | 50-100K gal   | 100-200K gal

Additional Uses:
Cleaning/sanitation | 2-5 gal/sf/year    | 20-50K gal    | 40-100K gal
Processing          | 1-3 gal/sf/year    | 10-30K gal    | 20-60K gal
Restrooms           | 5-10K gal/year     | 5-10K gal     | 10-20K gal
Landscaping         | Variable           | 0-50K gal     | 0-100K gal

Peak Day Demand (summer):
Average daily × 1.5-2.0
Size water service and treatment for peak day

Example: 10K sf hydroponic
Average daily: 350 gal/day
Peak day: 525 gal/day
Peak flow rate: ~1-2 gpm
```

### Water Source Options

```
WATER SOURCE COMPARISON

Municipal Water
Pros:
+ Reliable supply
+ Consistent quality
+ No treatment (usually)
+ No well drilling
Cons:
- Monthly cost ($3-10/1000 gal)
- Connection fees ($2-20K)
- Chlorine/chloramine must be removed
Best for: Urban/suburban locations

Well Water
Pros:
+ No ongoing cost
+ No chlorine
+ Consistent temperature
Cons:
- Drilling cost ($15-50K)
- Variable quality (may need treatment)
- Pump maintenance
- Yield may limit capacity
- Permit required
Best for: Rural locations, high water use

Rainwater Harvesting
Pros:
+ Free water
+ Sustainable
+ No treatment (minimal)
Cons:
- Inconsistent supply
- Requires backup source
- Collection/storage infrastructure ($10-50K)
- Limited by roof area
Best for: Supplemental source only

Reclaimed/Recycled
Pros:
+ Lower cost
+ Sustainable
Cons:
- Limited availability
- May require special permit
- Quality varies
- Stigma concerns
Best for: Non-crop uses (cleaning, landscaping)
```

### Water Quality & Treatment

```
WATER QUALITY REQUIREMENTS FOR CEA

Parameter         | Ideal Range    | Treatment if Outside Range
─────────────────────────────────────────────────────────────────────
TDS/EC           | <200 ppm       | Reverse osmosis (RO)
pH               | 6.0-7.5        | Acid/base injection
Hardness         | <120 ppm       | Water softener, RO
Alkalinity       | 40-120 ppm     | Acid injection, RO
Chlorine         | 0 ppm          | Carbon filter, UV degassing
Chloramine       | 0 ppm          | Catalytic carbon filter
Iron             | <0.3 ppm       | Iron filter, RO
Manganese        | <0.05 ppm      | Oxidation, filtration
Sulfur           | <1.0 ppm       | Oxidation, filtration
Bacteria         | <100 CFU/ml    | UV sterilization, chlorination
Pesticides       | 0              | RO, activated carbon
Heavy metals     | <0.01 ppm      | RO

Common Treatment Systems:

Carbon Filter ($1-3K)
□ Removes chlorine, odors, VOCs
□ Replace media every 6-12 months
□ Maintenance: $200-500/year

Water Softener ($2-5K)
□ Removes hardness (calcium, magnesium)
□ Uses salt for regeneration
□ Maintenance: $200-400/year + salt

Reverse Osmosis ($10-50K for commercial)
□ Removes >95% of dissolved solids
□ Produces waste water (1:1 to 4:1 ratio)
□ Maintenance: $1-3K/year (membranes)

UV Sterilization ($1-5K)
□ Kills bacteria, viruses
□ No chemicals
□ Maintenance: $200-500/year (bulbs)
```

---

## 5. Natural Gas Service

### Gas Requirements

```
GAS DEMAND CALCULATION

Applications in CEA:
1. Space Heating (main use)
   Load: 30-60 BTU/sf in cold climates
   Example: 20,000 sf × 50 BTU/sf = 1,000,000 BTU/hr peak

2. CO2 Generation
   Burner: 20,000-40,000 BTU/hr per unit
   May need 2-4 units for 10-20K sf

3. Backup Generator (if gas-fired)
   Generator: ~7,000-10,000 BTU/kWh
   100 kW unit: ~800,000 BTU/hr at full load

Total Peak Demand Example:
Heating: 1,000,000 BTU/hr
CO2: 80,000 BTU/hr
Generator: 0 (not running with heating)
Total: 1,080,000 BTU/hr = ~1,100 CFH @ 1,000 BTU/cf

Service Size:
Small (up to 500K BTU/hr): 1-2" service
Medium (500K-2M BTU/hr): 2-3" service
Large (>2M BTU/hr): 4"+ service, may need pressure regulation

Availability:
Urban: Usually available
Suburban: Often available
Rural: May not be available (use propane alternative)
```

### Propane Alternative

```
PROPANE VS NATURAL GAS

When Propane is Needed:
□ Natural gas not available at site
□ Natural gas capacity inadequate
□ Want fuel backup option
□ Construction temporary heat

Propane Considerations:
Cost: 2-3× natural gas per BTU
Storage: 500-1,000 gal tank typical ($2-5K lease or $4-10K purchase)
Delivery: Truck delivery, 2-7 day lead time
Safety: Heavier than air, requires proper ventilation
Conversion: Equipment must be converted or dual-fuel

Example Cost Comparison (20,000 sf facility, cold climate):
Natural gas: 5,000 therms/year @ $1.00/therm = $5,000
Propane: 5,500 gallons/year @ $2.50/gal = $13,750
Extra cost: $8,750/year

Recommendation:
Use natural gas if available
Propane for backup or if NG unavailable
All-electric if both unavailable (heat pump HVAC)
```

---

## 6. Telecommunications & Data

### Network Infrastructure

```
NETWORK REQUIREMENTS FOR CEA

Bandwidth Needs:
Basic monitoring: 5-10 Mbps
IP cameras (4-8 cameras): 10-20 Mbps
Cloud-based controls: 5-10 Mbps
Office use: 10-20 Mbps
Total recommended: 50-100 Mbps minimum

Connection Types:
Fiber optic: Best (1-10 Gbps), $100-300/mo
Cable/DSL: Good (50-500 Mbps), $50-150/mo
Fixed wireless: Fair (25-100 Mbps), $75-200/mo
Satellite: Last resort (25 Mbps), $100-200/mo, high latency

Internal Network:
□ Structured cabling (Cat6 or Cat6a)
□ Network switches (managed, PoE for cameras)
□ Wireless access points (2-4 for 10-20K sf)
□ Firewall/router
□ UPS for network equipment

Budget: $5-15K for network infrastructure
```

---

## 7. Utility Cost Analysis

### Complete Utility Budget

```
ANNUAL UTILITY COST ESTIMATE

20,000 SF FACILITY EXAMPLE

Electricity:
Annual use: 175,000 kWh @ $0.11/kWh = $19,250
Demand: 310 kW avg × 12 mo @ $14/kW = $52,080
Customer charge: 12 mo @ $200/mo = $2,400
Total electricity: $73,730/year ($3.69/sf)

Natural Gas (cold climate):
Annual use: 4,000 therms @ $1.00/therm = $4,000
Customer charge: 12 mo @ $30/mo = $360
Total gas: $4,360/year ($0.22/sf)

Water/Sewer:
Annual use: 250,000 gal @ $6.00/1000 gal = $1,500
Sewer: 200,000 gal @ $8.00/1000 gal = $1,600
Total water: $3,100/year ($0.16/sf)

Internet:
Business plan: $150/mo × 12 = $1,800/year

Phone:
VoIP service: $50/mo × 12 = $600/year

TOTAL ANNUAL UTILITIES: $83,590 ($4.18/sf)

This is 15-25% of total operating costs
Varies significantly by climate, rates, efficiency
```

### Utility Cost Reduction Strategies

```
REDUCING UTILITY EXPENSES

Electricity (70-90% of utility costs):
□ LED lighting (vs HPS: save 30-40%)
□ Efficient HVAC (high SEER/EER)
□ Variable frequency drives (VFDs on pumps, fans)
□ Demand management (shift loads, stagger startup)
□ Power factor correction (avoid penalties)
□ Solar panels (if economics favorable)
□ Energy monitoring (identify waste)
Potential savings: 20-40%

Natural Gas:
□ High-efficiency boilers/heaters (>90% vs 80%)
□ Envelope insulation (reduce losses)
□ Heat recovery (exhaust air)
□ Setback temperatures (during unoccupied periods)
Potential savings: 15-30%

Water:
□ Closed-loop systems (minimize makeup)
□ Rainwater harvesting (supplement)
□ Drip irrigation (vs spray)
□ Monitor for leaks (automated alerts)
Potential savings: 20-50%

Monitoring & Controls:
□ Real-time monitoring (identify issues quickly)
□ Automated controls (optimize usage)
□ Trend analysis (continuous improvement)
Investment: $5-20K
ROI: <2 years typically
```

---

## 8. Renewable Energy Integration

### Solar Photovoltaic (PV)

```
SOLAR PV FEASIBILITY

Typical CEA Solar Scenarios:
Scenario 1: Small Offset (20-30% of use)
System size: 50-100 kW
Annual production: 65-150 MWh
Cost: $100-200K
Payback: 6-12 years (with incentives)

Scenario 2: Significant Offset (50-70% of use)
System size: 150-300 kW
Annual production: 200-450 MWh
Cost: $300-600K
Payback: 8-15 years

Economics Depend On:
□ Utility rates (higher = better economics)
□ Incentives (federal ITC 30%, state/local varies)
□ Net metering (full retail credit for excess?)
□ Solar resource (sunny locations better)
□ Roof/land availability (need ~100 sf/kW)
□ Roof condition (must last 25+ years)

Recommendation:
Pencil out solar carefully
Often marginal for CEA due to:
• High nighttime demand (solar produces during day)
• High demand charges (solar doesn't reduce peak)
• Lower electricity rates in many areas
Better for CEA if:
• Very high electric rates (>$0.15/kWh)
• Good incentives available
• Load can shift to daytime
• Battery storage included (expensive)
```

---

## 9. Utility Emergency Planning

### Emergency Response Plan

```
UTILITY OUTAGE RESPONSE

Power Outage:
Immediate (0-15 minutes):
□ Backup generator starts (automatic)
□ UPS maintains control systems
□ Alert manager on-call

Short-term (15 min - 4 hours):
□ Monitor generator operation
□ Check fuel level
□ Reduce non-critical loads
□ Monitor crop environment

Extended (4-24 hours):
□ Arrange fuel delivery if needed
□ Implement load shedding plan
□ Monitor crop stress
□ Communicate with utility

Critical (>24 hours):
□ Harvest valuable crops
□ Emergency cooling (if summer)
□ Consider evacuation plan for fish (aqua)
□ Document for insurance

Water Outage:
Immediate:
□ Switch to backup water source
□ Check storage tank levels

Short-term (1-8 hours):
□ Ration stored water
□ Prioritize crop irrigation
□ Minimize cleaning/processing

Extended (>8 hours):
□ Arrange water delivery
□ Implement emergency rationing

Gas Outage:
Immediate:
□ Switch heating to backup (electric, propane)
□ Monitor temperatures

Extended:
□ Harvest if freezing risk
□ Temporary heating if needed
```

---

## Summary

Successful utility infrastructure requires:

1. **Adequate electrical service** sized for peak load + growth
2. **Reliable water supply** with proper treatment
3. **Backup power** for critical loads minimum
4. **Natural gas** if available for cost-effective heating
5. **Rate optimization** through demand management
6. **Quality telecommunications** for controls and monitoring
7. **Comprehensive budgeting** for utility costs
8. **Emergency planning** for outages
9. **Renewable integration** where economics support
10. **Continuous monitoring** to identify issues and optimize

Utilities are the lifeblood of your CEA operation. Design systems properly from the start to ensure reliable, cost-effective operations.

---

## Module Quiz

Test your understanding in Quiz 5.

## Next Module

[Module 6: Project Budgeting](module_06_project_budgeting.md)

---

*Course 302: Commercial Facility Development | EcoFusion Academy*
