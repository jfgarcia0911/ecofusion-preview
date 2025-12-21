# Module 10: Scale-Up Research Methodology

## Learning Objectives

- Design pilot systems for scale-up research
- Apply scaling factors and dimensionless numbers
- Develop technology transfer protocols
- Conduct economic validation at scale
- Plan commercial demonstration projects

## 10.1 Pilot System Design

### Scaling Principles

```
SCALE-UP HIERARCHY:

Lab Scale (1-100 L) → Pilot Scale (1,000-10,000 L) → Commercial (>50,000 L)

KEY SCALING RELATIONSHIPS:

LINEAR SCALING:
├── Length: L₂ = L₁ × scale factor
├── Area: A₂ = A₁ × (scale factor)²
└── Volume: V₂ = V₁ × (scale factor)³

SURFACE-TO-VOLUME RATIO:
S/V ratio decreases with scale
Implications:
├── Heat transfer changes
├── Gas exchange differs
├── Biofilm surface per volume decreases
└── Mixing requirements increase

EXAMPLE SCALING:

Lab tank: 100 L (50 cm diameter, 50 cm height)
Pilot tank: 5,000 L

Volume scale factor = 5,000/100 = 50×
Linear scale factor = ∛50 = 3.68×

Pilot dimensions:
Diameter = 50 × 3.68 = 184 cm
Height = 50 × 3.68 = 184 cm

BUT: May want different aspect ratio for practical reasons
```

### Pilot System Configuration

```
REPRESENTATIVE PILOT DESIGN:

FISH PRODUCTION:
┌────────────────────────────────────────┐
│ Tank volume: 5,000 L                   │
│ Stocking density: 20 kg/m³             │
│ Target biomass: 100 kg                 │
│ Flow rate: 2-3 tank volumes/hour      │
│ Aeration: 1-2 LPM/m³                   │
└────────────────────────────────────────┘

SOLIDS REMOVAL:
├── Radial flow settler: 1,000 L
├── Retention time: 20-30 minutes
├── Overflow rate: <30 m³/m²/day
└── Sludge removal: Daily

BIOIFLTRATION:
├── MBBR: 30% fill, 500 m² SA/m³
├── Hydraulic retention: 30-60 min
├── Aeration: 3-5 LPM/m³
└── Target TAN removal: >90%

PLANT PRODUCTION:
├── DWC raft area: 25-50 m²
├── Water depth: 30 cm
├── Plant density: 16-25 plants/m²
└── Crop cycle: 4-6 weeks

SIZING CONSIDERATIONS:
Must be large enough to:
├── Represent commercial conditions
├── Allow multiple treatments/replicates
├── Minimize edge effects
└── Accommodate instrumentation
```

## 10.2 Scaling Factors and Dimensionless Numbers

### Reynolds Number

```
FLUID DYNAMICS SCALING:

REYNOLDS NUMBER:
Re = (ρ × v × L) / μ

Where:
ρ = Density (kg/m³)
v = Velocity (m/s)
L = Characteristic length (m)
μ = Dynamic viscosity (Pa·s)

SIGNIFICANCE:
Re < 2,000: Laminar flow
Re 2,000-4,000: Transitional
Re > 4,000: Turbulent flow

APPLICATION - Pipe Flow:

Lab system: D = 25 mm, v = 0.5 m/s
Re = (1000 × 0.5 × 0.025) / 0.001 = 12,500 (turbulent)

Commercial: D = 100 mm, maintain turbulent flow
Required velocity: v = Re × μ / (ρ × D)
v = 12,500 × 0.001 / (1000 × 0.1) = 0.125 m/s

Flow rate scales with D² × v
```

### Hydraulic Retention Time

```
HRT CONSISTENCY:

HRT = Volume / Flow rate

MAINTAIN CONSTANT HRT ACROSS SCALES:

Lab biofilter:
V = 50 L, Q = 100 L/h
HRT = 50/100 = 0.5 hour (30 min)

Commercial biofilter:
V = 5,000 L, HRT = 0.5 hour
Q = V/HRT = 5,000/0.5 = 10,000 L/h

LOADING RATE (alternative metric):
TAN loading = (TAN concentration × Flow) / Biofilter volume
Units: g TAN/m³/day

Keep loading rate constant for similar performance
```

### Oxygen Transfer

```
AERATION SCALING:

OXYGEN TRANSFER RATE (OTR):
OTR = kLa × (Cs - C)

Where:
kLa = Volumetric mass transfer coefficient (h⁻¹)
Cs = Saturation concentration (mg/L)
C = Actual concentration (mg/L)

kLa DEPENDS ON:
├── Bubble size (smaller better)
├── Airflow rate
├── Water depth
├── Turbulence
└── Salinity, temperature

SCALING CHALLENGE:
kLa typically decreases with scale
Must compensate with:
├── Higher airflow per volume
├── Finer bubble diffusers
├── Multiple aeration points
└── Mechanical agitation

EMPIRICAL RELATIONSHIP:
kLa₂ = kLa₁ × (V₁/V₂)^0.3

Example:
Lab kLa = 10 h⁻¹ at 100 L
Commercial at 10,000 L:
kLa = 10 × (100/10,000)^0.3 = 4.6 h⁻¹

Need ~2× airflow rate per volume to compensate
```

## 10.3 Technology Transfer Protocols

### Phased Scale-Up Approach

```
STAGE-GATE PROCESS:

PHASE 1: PROOF OF CONCEPT (Lab, 3-6 months)
├── Demonstrate technical feasibility
├── Identify critical parameters
├── Preliminary performance data
└── Decision: Go/No-Go to Phase 2

PHASE 2: PILOT DEMONSTRATION (Pilot, 6-12 months)
├── Build representative pilot system
├── Validate performance at scale
├── Optimize operating procedures
├── Generate economic data
└── Decision: Go/No-Go to Phase 3

PHASE 3: COMMERCIAL DEMONSTRATION (Full-scale, 12-24 months)
├── Construct demonstration system
├── Operate under commercial conditions
├── Train staff and users
├── Document ROI and best practices
└── Decision: Commercialization

DECISION CRITERIA:
Technical:
├── Performance meets targets (>90% of goal)
├── Reliability demonstrated (>95% uptime)
└── Scalability confirmed

Economic:
├── Projected ROI > 15%
├── Payback period < 5 years
└── Market demand validated

Regulatory:
├── Permits obtainable
├── Safety standards met
└── Environmental compliance
```

### Risk Mitigation

```
SCALE-UP RISK ASSESSMENT:

┌──────────────────┬────────────┬──────────┬──────────┐
│     Risk         │Probability │  Impact  │Mitigation│
├──────────────────┼────────────┼──────────┼──────────┤
│ Biofilter crash  │   Medium   │   High   │ Backup   │
│                  │            │          │ filters  │
├──────────────────┼────────────┼──────────┼──────────┤
│ Disease outbreak │   Medium   │   High   │ Biosec.  │
│                  │            │          │ protocol │
├──────────────────┼────────────┼──────────┼──────────┤
│ Power outage     │    Low     │   High   │ Generator│
│                  │            │          │ + battery│
├──────────────────┼────────────┼──────────┼──────────┤
│ Feed shortage    │    Low     │  Medium  │ Multiple │
│                  │            │          │ suppliers│
├──────────────────┼────────────┼──────────┼──────────┤
│ Market price     │   High     │  Medium  │ Diverse  │
│ fluctuation      │            │          │ products │
└──────────────────┴────────────┴──────────┴──────────┘

CONTINGENCY PLANNING:
├── Backup life support systems
├── Emergency response procedures
├── Insurance coverage
└── Financial reserves
```

## 10.4 Economic Validation at Scale

### Detailed Cost Analysis

```
CAPITAL EXPENDITURE (CAPEX):

PILOT SYSTEM (20 m² growing area):
┌─────────────────────┬────────────┐
│      Component      │   Cost     │
├─────────────────────┼────────────┤
│ Fish tanks (2×5,000L│   $4,000   │
│ Biofilter (MBBR)    │   $3,500   │
│ Solids removal      │   $2,000   │
│ Rafts & plumbing    │   $2,500   │
│ Aeration system     │   $1,500   │
│ Monitoring/control  │   $3,000   │
│ Greenhouse/cover    │   $8,000   │
│ Electrical/install  │   $5,000   │
├─────────────────────┼────────────┤
│ TOTAL CAPEX         │  $29,500   │
│ Cost per m²         │  $1,475/m² │
└─────────────────────┴────────────┘

OPERATIONAL EXPENDITURE (OPEX) - Annual:
┌─────────────────────┬────────────┐
│      Item           │ Annual Cost│
├─────────────────────┼────────────┤
│ Fish feed           │   $2,400   │
│ Fingerlings         │   $800     │
│ Seeds/transplants   │   $400     │
│ Electricity         │   $1,800   │
│ Water               │   $200     │
│ Labor (part-time)   │   $6,000   │
│ Maintenance         │   $500     │
│ Testing/supplies    │   $400     │
├─────────────────────┼────────────┤
│ TOTAL OPEX          │  $12,500   │
└─────────────────────┴────────────┘

REVENUE PROJECTION:
Fish production: 400 kg/yr × $8/kg = $3,200
Plant production: 960 plants/yr × $3 = $2,880
Total revenue: $6,080/yr

Net operating loss: -$6,420/yr

NOTE: Pilot systems rarely profitable due to
      economy of scale. Extrapolate to commercial.
```

### Break-Even Analysis

```
COMMERCIAL SCALE PROJECTION (500 m²):

ASSUMPTIONS:
├── Linear scaling for most components
├── Labor efficiency improves
├── Bulk purchasing discounts
└── Higher equipment utilization

CAPEX: $350,000 ($700/m²)
Economies of scale: 50% reduction per m²

ANNUAL PRODUCTION:
├── Fish: 10,000 kg @ $8/kg = $80,000
├── Plants: 24,000 @ $3 ea = $72,000
└── Total revenue: $152,000

ANNUAL OPEX: $85,000
├── Feed: $40,000
├── Fingerlings: $8,000
├── Seeds: $10,000
├── Utilities: $12,000
├── Labor (2 FTE): $50,000
├── Other: $5,000

NET INCOME: $67,000/yr

ROI: 67,000/350,000 = 19.1%
Payback: 5.2 years

BREAK-EVEN PRODUCTION:

Fixed costs: $60,000/yr
Variable costs: $25,000 + $0.83/unit
Price: $6.33/unit average

Break-even units = FC/(P - VC)
= 60,000/(6.33 - 0.83) = 10,909 units

Current: 15,000 units (34% above break-even)
```

## 10.5 Commercial Demonstration Projects

### Demonstration Site Selection

```
SITE CRITERIA:

TECHNICAL:
├── Suitable climate (year-round or seasonal)
├── Access to quality water
├── Electrical infrastructure (3-phase preferred)
├── Waste disposal options
└── Expansion potential

MARKET ACCESS:
├── Proximity to customers (<50 miles ideal)
├── Distribution infrastructure
├── Competing suppliers (assess)
└── Local food movement strength

REGULATORY:
├── Zoning allows agricultural use
├── Building codes understood
├── Water discharge permits obtainable
└── Food safety certification available

OPERATIONAL:
├── Skilled labor available
├── Input suppliers accessible
├── Technical support nearby
└── Internet connectivity for monitoring
```

### Performance Monitoring Framework

```
KEY PERFORMANCE INDICATORS (KPIs):

PRODUCTION METRICS:
┌────────────────────────┬──────────┬──────────┐
│        Metric          │  Target  │  Actual  │
├────────────────────────┼──────────┼──────────┤
│ Fish growth rate       │ 4 g/day  │          │
│ Fish FCR               │  <1.5    │          │
│ Fish survival          │  >90%    │          │
│ Plant yield (kg/m²/yr) │  >40     │          │
│ Crop cycles per year   │  8-10    │          │
│ Plant marketability    │  >95%    │          │
└────────────────────────┴──────────┴──────────┘

SYSTEM PERFORMANCE:
├── Water use (L/kg product): <20
├── Energy use (kWh/kg): <5
├── System uptime: >95%
└── Water quality compliance: 100%

ECONOMIC PERFORMANCE:
├── Revenue per m²: >$300/yr
├── Operating margin: >40%
├── Inventory turnover: >10×/yr
└── Cash flow: Positive monthly

DASHBOARD EXAMPLE:

Month: June
┌─────────────────┬────────┬────────┬─────────┐
│   Category      │ Budget │ Actual │ Variance│
├─────────────────┼────────┼────────┼─────────┤
│ Revenue         │ $12,000│ $13,200│  +10%   │
│ COGS            │ $6,500 │ $6,800 │   +5%   │
│ Gross profit    │ $5,500 │ $6,400 │  +16%   │
│ Operating exp.  │ $4,000 │ $3,850 │   -4%   │
│ Net income      │ $1,500 │ $2,550 │  +70%   │
└─────────────────┴────────┴────────┴─────────┘

Performance: Exceeding targets
```

### Technology Adoption Pathway

```
STAKEHOLDER ENGAGEMENT:

EARLY ADOPTERS (First 2.5%):
├── Characteristics: Risk-tolerant innovators
├── Engagement: Direct partnership
├── Value: Testing and feedback
└── Support: High-touch technical assistance

EARLY MAJORITY (Next 34%):
├── Characteristics: Practical, require proof
├── Engagement: Demonstration tours
├── Value: Adoption at scale
└── Support: Training and manuals

TOOLS FOR ADOPTION:

DOCUMENTATION:
├── Standard Operating Procedures (SOPs)
├── Troubleshooting guides
├── Economic models (Excel tools)
└── Video tutorials

TRAINING:
├── Hands-on workshops (3-5 days)
├── Online courses
├── Mentorship programs
└── Peer learning networks

SUPPORT STRUCTURE:
├── Technical hotline
├── Regular site visits
├── Online forum/community
└── Annual conference
```

## Key Takeaways

1. **Strategic Scaling** - Follow phased approach with clear decision gates
2. **Engineering Principles** - Apply dimensionless numbers for accurate scale-up
3. **Economic Validation** - Generate robust financial data at pilot scale
4. **Risk Management** - Identify and mitigate scale-up risks proactively
5. **Adoption Planning** - Build pathways for technology transfer to end users

## Practical Application

Design a scale-up research project:
1. Specify pilot system dimensions and configuration
2. Calculate key scaling factors (Re, HRT, loading rates)
3. Develop detailed CAPEX and OPEX budgets
4. Create 3-year performance monitoring plan
5. Outline stakeholder engagement strategy

## Further Reading

- Love, D.C., et al. (2015). "Commercial aquaponics production and profitability"
- Goddek, S., et al. (2015). "Challenges of sustainable and commercial aquaponics"
- Timmons, M.B., & Ebeling, J.M. (2013). *Recirculating Aquaculture* (3rd ed.)

---

**Next Module:** [Module 11: Publishing and Dissemination](module_11_publishing_dissemination.md)
