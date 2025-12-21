# Lesson 5: Energy Recovery from Agricultural Waste

## Learning Objectives

By the end of this lesson, you will be able to:
1. Characterize agricultural waste streams for energy potential
2. Design and optimize anaerobic digestion systems
3. Evaluate thermochemical conversion technologies
4. Assess biogas upgrading and utilization options
5. Calculate energy balances and system efficiencies
6. Perform techno-economic analysis of waste-to-energy systems
7. Integrate energy recovery with facility operations

---

## 1. Agricultural Waste Characterization

### 1.1 Waste Stream Inventory

**Types of Agricultural Biomass:**
```
┌────────────────────────────────────────────────────────────┐
│          AGRICULTURAL WASTE CATEGORIES                      │
├────────────────────────────────────────────────────────────┤
│                                                             │
│ CROP RESIDUES                                               │
│ ├─ Field residues (straw, stalks, leaves)                 │
│ ├─ Process residues (husks, shells, pomace)               │
│ ├─ Greenhouse plant waste (stems, leaves, culled fruit)   │
│ └─ Prunings and trimmings                                  │
│                                                             │
│ ANIMAL WASTE                                                │
│ ├─ Manure (solid and liquid fractions)                    │
│ ├─ Bedding materials                                       │
│ ├─ Mortalities                                             │
│ └─ Process wastewater                                      │
│                                                             │
│ FOOD PROCESSING WASTE                                       │
│ ├─ Vegetable and fruit waste                              │
│ ├─ Fats, oils, and grease (FOG)                           │
│ ├─ Grains and bakery waste                                │
│ └─ Dairy and meat processing waste                        │
│                                                             │
│ AQUACULTURE WASTE                                           │
│ ├─ Excess feed                                             │
│ ├─ Fish mortalities                                        │
│ ├─ Sludge from biofilters                                 │
│ └─ Algal biomass                                           │
│                                                             │
└────────────────────────────────────────────────────────────┘
```

### 1.2 Energy Content Analysis

**Key Parameters:**
```
PARAMETER           SIGNIFICANCE            TYPICAL RANGE

PROXIMATE ANALYSIS:
Moisture Content    Affects combustion      10-90% (wet basis)
                    Determines AD vs.       <60% combustion
                    combustion suitability  >60% AD favorable

Volatile Matter     Combustible fraction    60-80% (dry basis)
                    Indicates reactivity

Fixed Carbon        Char residue            10-25% (dry basis)
                    Energy content

Ash Content         Inert residue           1-15% (dry basis)
                    Handling requirements

ULTIMATE ANALYSIS (Dry Basis):
Carbon (C)          Primary energy          40-55%
                    element

Hydrogen (H)        High energy density     5-7%

Oxygen (O)          Reduces HHV             30-45%

Nitrogen (N)        NOx formation risk      0.5-5%

Sulfur (S)          SOx formation risk      0.1-0.5%

ENERGY CONTENT:
Higher Heating      Total combustion        15-20 MJ/kg (dry)
Value (HHV)         energy

Lower Heating       Practical usable        13-18 MJ/kg (dry)
Value (LHV)         energy (excludes
                    water vaporization)

BIOCHEMICAL PROPERTIES (for AD):
Total Solids (TS)   Dry matter content      Variable

Volatile Solids     Biodegradable organic   70-90% of TS
(VS)                matter

C/N Ratio           Nutrient balance for    20-30 optimal
                    microbes                for AD

Biodegradability    Methane potential       60-90% VS
                                            conversion
```

### 1.3 Biomass Characterization Example

**Greenhouse Tomato Plant Waste:**
```
WASTE STREAM: Tomato plant residue (stems, leaves, roots)
Annual quantity: 50 tonnes fresh weight

COMPOSITION:
├─ Moisture content: 85% (wet basis)
├─ Dry matter: 15% = 7.5 tonnes/year
└─ Volatile solids: 90% of TS = 6.75 tonnes/year

ULTIMATE ANALYSIS (Dry Basis):
├─ Carbon: 45%
├─ Hydrogen: 6%
├─ Oxygen: 42%
├─ Nitrogen: 3%
├─ Ash: 4%
└─ HHV: 17.5 MJ/kg (calculated from composition)

ENERGY POTENTIAL:

Option 1: Direct Combustion
├─ Energy content: 7.5 tonnes × 17.5 MJ/kg = 131,250 MJ
├─ Moisture penalty: High (85%), requires drying
├─ Net energy (after drying): ~60,000 MJ
└─ Thermal energy @ 75% efficiency: 45,000 MJ = 12.5 MWh

Option 2: Anaerobic Digestion
├─ Methane potential: 350 m³ CH₄/tonne VS (typical for plant waste)
├─ Total CH₄: 6.75 tonnes VS × 350 m³/t = 2,363 m³ CH₄/year
├─ Energy content: 2,363 m³ × 35.8 MJ/m³ = 84,600 MJ = 23.5 MWh
├─ Electricity (40% CHP efficiency): 9.4 MWh
└─ Heat (45% CHP recovery): 10.6 MWh

RECOMMENDATION: Anaerobic digestion preferred
├─ Higher net energy recovery
├─ No drying required
├─ Produces digestate fertilizer
├─ Lower emissions
└─ Combined heat and power generation
```

---

## 2. Anaerobic Digestion Systems

### 2.1 AD Fundamentals

**Biochemical Pathway:**
```
FOUR-STAGE ANAEROBIC DIGESTION PROCESS

STAGE 1: HYDROLYSIS
┌─────────────────────────────────────────────┐
│ Complex Organics (Carbohydrates, Proteins,  │
│ Lipids, Cellulose)                          │
└──────────────┬──────────────────────────────┘
               │ Hydrolytic enzymes
               ↓
┌─────────────────────────────────────────────┐
│ Simple Organics (Sugars, Amino Acids,       │
│ Fatty Acids)                                │
└──────────────┬──────────────────────────────┘

STAGE 2: ACIDOGENESIS
               │ Acidogenic bacteria
               ↓
┌─────────────────────────────────────────────┐
│ Volatile Fatty Acids (VFAs)                 │
│ Acetic acid, Propionic acid, Butyric acid   │
│ + CO₂ + H₂ + NH₃                            │
└──────────────┬──────────────────────────────┘

STAGE 3: ACETOGENESIS
               │ Acetogenic bacteria
               ↓
┌─────────────────────────────────────────────┐
│ Acetic Acid (CH₃COOH)                       │
│ + H₂ + CO₂                                  │
└──────────────┬──────────────────────────────┘

STAGE 4: METHANOGENESIS
               │ Methanogenic archaea
               ↓
┌─────────────────────────────────────────────┐
│ BIOGAS: CH₄ (55-70%) + CO₂ (30-45%)        │
│ + trace H₂S, NH₃, H₂O                      │
└─────────────────────────────────────────────┘

CRITICAL BALANCE:
├─ All stages must proceed at similar rates
├─ Methanogenesis is rate-limiting (slowest)
├─ VFA accumulation indicates imbalance
└─ pH, temperature, and toxins affect stability
```

**Operating Regimes:**
```
TEMPERATURE RANGES

PSYCHROPHILIC (10-25°C)
├─ Advantages: No heating required, low energy
├─ Disadvantages: Slow, large reactor, unstable
├─ HRT: 40-80 days
└─ Applications: Cold climates, ambient lagoons

MESOPHILIC (30-40°C, optimal 35-37°C)
├─ Advantages: Stable, robust, lower energy than thermophilic
├─ Disadvantages: Moderate retention time
├─ HRT: 15-30 days
├─ Applications: Most common, farm-scale digesters
└─ Methane yield: 0.3-0.5 m³/kg VS

THERMOPHILIC (50-60°C, optimal 55°C)
├─ Advantages: Faster, better pathogen kill, higher gas production
├─ Disadvantages: Higher energy input, less stable
├─ HRT: 10-20 days
├─ Applications: Industrial scale, high-value feedstocks
└─ Methane yield: 0.4-0.6 m³/kg VS (10-20% higher)
```

### 2.2 Digester Design Types

**Comparison of Reactor Configurations:**
```
TYPE            DESCRIPTION         ADVANTAGES          DISADVANTAGES

CSTR            Completely Stirred  • Simple design     • Large volume
(Continuous     Tank Reactor        • Continuous feed   • Lower efficiency
Stirred Tank)   Mechanical mixing   • Proven tech       • Requires heating
                Single stage        • Versatile         • Scum formation

                    Biogas ↑
                ┌─────────────┐
        Feed →  │ ░░░░░░░░░░░ │
                │ ░Digester░░ │ → Digestate
                │ ░░░░░░░░░░░ │
                └─────────────┘
                     Heating

PLUG FLOW       Horizontal flow     • Simple            • Limited mixing
                No mixing           • Low energy        • Solid content
                Piston-like         • Compact           • needs >10% TS
                progression         • Low cost          • Temperature
                                                        • gradients
                    Biogas ↑
        Feed → ┌──→──→──→──→──┐ → Digestate
               └──────────────┘
                Slight slope

UASB            Upflow Anaerobic    • High efficiency   • Complex
(Upflow         Sludge Blanket      • Compact           • startup
Anaerobic       Granular sludge     • Low HRT           • Requires low
Sludge Blanket) Self-immobilized    • High loading      • solids feed
                                    • rates             • Temperature
                                                        • control needed
                     Biogas ↑
                ┌─────────────┐
                │     Settler │
                │ ~~~~~~~~~~~~│
                │░░Sludge░░░░░│
        Feed ↑  │░░Blanket░░░░│ → Effluent
                │░░░░░░░░░░░░░│
                └─────────────┘

DRY AD          High solids         • No dilution       • Higher capital
                (20-40% TS)         • Less digestate    • Specialized
                Batch or            • Water savings     • equipment
                continuous          • Stackable         • Longer HRT
                                    • feedstock         • 20-40 days

                    Biogas ↑
                ┌─────────────┐
        Feed →  │ ▓▓▓▓▓▓▓▓▓▓▓ │
                │ ▓Dry AD▓▓▓▓ │ → Solid digestate
                │ ▓▓▓▓▓▓▓▓▓▓▓ │    (composted)
                └─────────────┘
                  Percolate recycle

TWO-STAGE       Separate            • Optimized for     • Higher complexity
                hydrolysis/         • each stage        • Higher cost
                acidogenesis and    • Higher efficiency • Requires skilled
                methanogenesis      • Better stability  • operation
                                    • Faster throughput

        Feed → [Stage 1] → [Stage 2] → Digestate
               Hydrolysis   Methanogen
               pH 5-6       pH 7-8      ↑ Biogas
               2-3 days     10-15 days
```

### 2.3 Design Example: CSTR Mesophilic Digester

**Project Specifications:**
```
FEEDSTOCK: Mixed agricultural waste
├─ Greenhouse plant waste: 30 tonnes/year (85% moisture)
├─ Livestock manure (dairy): 200 tonnes/year (90% moisture)
├─ Food waste (produce): 50 tonnes/year (80% moisture)
└─ Total: 280 tonnes/year fresh weight

FEEDSTOCK CHARACTERIZATION:

Component         Fresh     TS (t/yr)  VS (t/yr)  VS (% TS)
─────────────────────────────────────────────────────────────
Plant waste       30 t      4.5        4.0        89%
Dairy manure      200 t     20.0       16.0       80%
Food waste        50 t      10.0       9.5        95%
─────────────────────────────────────────────────────────────
TOTAL             280 t     34.5       29.5       85%

DESIGN PARAMETERS:

Operating Regime: Mesophilic (37°C)
Hydraulic Retention Time (HRT): 25 days
Organic Loading Rate (OLR): 2.0 kg VS/m³/day (conservative)
Target VS destruction: 55%

REACTOR SIZING:

Daily VS input: 29.5 tonnes/year ÷ 365 days = 80.8 kg VS/day

Required volume (based on OLR):
V = VS input / OLR = 80.8 kg/day ÷ 2.0 kg/m³/day = 40.4 m³

Check based on HRT:
Daily feedstock: 280,000 kg/365 = 767 kg/day
Assume dilution to 10% TS: 767 kg ÷ 0.10 = 7,670 L/day = 7.67 m³/day
Required volume: 7.67 m³/day × 25 days = 191.8 m³

Design volume (HRT governs): 200 m³ (with 5% safety factor)

Actual OLR check: 80.8 kg VS/day ÷ 200 m³ = 0.40 kg VS/m³/day ✓ (conservative)

REACTOR GEOMETRY:

Configuration: Vertical cylinder with conical bottom
Diameter: 7.0 m
Height: 5.2 m (cylindrical section)
Cone height: 1.0 m
Working volume: 200 m³
Freeboard: 10% (20 m³)
Total volume: 220 m³

MIXING SYSTEM:

Type: Mechanical mixer (slow-speed, draft tube)
Power: 0.003 kW/m³ × 200 m³ = 0.6 kW (minimum)
Design power: 1.5 kW (safety factor)
Mixing regime: Intermittent (15 min every hour)
Daily energy: 1.5 kW × 6 hrs = 9 kWh/day

HEATING SYSTEM:

Heat loss calculation:
├─ Surface area: ~150 m²
├─ U-value (insulated): 0.5 W/m²·K
├─ Temperature difference: 37°C - 10°C (winter) = 27°C
├─ Heat loss: 150 × 0.5 × 27 = 2,025 W = 2.0 kW
├─ Daily heating energy: 2.0 kW × 24 hrs = 48 kWh/day
└─ Annual heating: 17,520 kWh/year

Heating method: Hot water jacket (from CHP waste heat)

BIOGAS PRODUCTION ESTIMATE:

Methane potential (weighted average):
├─ Plant waste: 350 m³ CH₄/tonne VS × 4.0 t = 1,400 m³
├─ Dairy manure: 200 m³ CH₄/tonne VS × 16.0 t = 3,200 m³
├─ Food waste: 450 m³ CH₄/tonne VS × 9.5 t = 4,275 m³
└─ Total potential: 8,875 m³ CH₄/year

Actual production (55% VS destruction):
8,875 m³ × 0.55 = 4,881 m³ CH₄/year

Biogas composition: 60% CH₄, 40% CO₂
Total biogas: 4,881 ÷ 0.60 = 8,135 m³ biogas/year
Daily: 22.3 m³/day

Energy content:
4,881 m³ CH₄/year × 35.8 MJ/m³ = 174,740 MJ/year = 48.5 MWh/year

ENERGY BALANCE:

Energy Input:
├─ Heating: 17,520 kWh/year
├─ Mixing: 9 kWh/day × 365 = 3,285 kWh/year
├─ Pumping: ~1,000 kWh/year
└─ Total: 21,805 kWh/year = 21.8 MWh/year

Energy Output:
├─ Biogas energy: 48.5 MWh/year (thermal equivalent)
├─ CHP electricity (35%): 17.0 MWh/year
├─ CHP heat (50%): 24.3 MWh/year
└─ Total useful: 41.3 MWh/year

Net Energy:
├─ Electricity: 17.0 - 4.3 (parasitic) = 12.7 MWh/year export
├─ Heat: 24.3 - 17.5 (digester heating) = 6.8 MWh/year export
└─ Net benefit: 19.5 MWh/year

Energy ratio: 41.3 / 21.8 = 1.89 (positive energy balance ✓)
```

### 2.4 Feedstock Management & Co-Digestion

**Optimizing Feedstock Mix:**
```
CO-DIGESTION BENEFITS:

Nutrient Balance:
├─ C/N ratio optimization (target 20-30)
├─ Macro/micronutrient provision
└─ Toxic compound dilution

Example Mix Design:

Feedstock       C/N    Portion   Weighted C/N
───────────────────────────────────────────────
Crop residue    80     20%       16
Manure          15     50%       7.5
Food waste      18     30%       5.4
───────────────────────────────────────────────
MIXED                            28.9 ✓ (optimal)

Moisture Balance:
├─ Dry feedstocks (straw): Provide structure
├─ Wet feedstocks (manure): Provide moisture
└─ Target: 8-12% TS in digester feed

Synergistic Effects:
├─ Buffering capacity from manure
├─ Easily degradable sugars from food waste
├─ Structural carbon from crop residues
└─ 10-25% higher biogas yield than single feedstocks

FEEDING STRATEGY:

Continuous feeding (preferred for CSTR):
├─ Daily feeding: 1-2 times per day
├─ Volumes: 7-8 m³/day (for 200 m³ digester, 25-day HRT)
├─ Consistency: Pumpable slurry (<12% TS)
└─ Avoid shock loads (VFA accumulation risk)

Pre-treatment (if needed):
├─ Size reduction: <20 mm particles (faster hydrolysis)
├─ Hygienization: 70°C for 1 hour (pathogen reduction)
├─ Homogenization: Mixing tank (uniform feeding)
└─ pH adjustment: Rare, typically not needed

MONITORING PARAMETERS:

Daily:
├─ Feed volume and composition
├─ Biogas production rate
├─ Temperature
└─ Visual inspection (foaming, scum)

Weekly:
├─ pH (target 7.0-8.0)
├─ VFA concentration (<3,000 mg/L)
├─ Alkalinity (>2,500 mg/L as CaCO₃)
├─ VFA/Alkalinity ratio (<0.4 stable, >0.8 warning)
└─ Biogas composition (CH₄ %, CO₂ %, H₂S ppm)

Monthly:
├─ TS, VS analysis (feed and digestate)
├─ Nutrient content (N, P, K)
├─ Heavy metals (if feedstock risk)
└─ VS destruction efficiency
```

---

## 3. Biogas Upgrading & Utilization

### 3.1 Raw Biogas Composition

**Typical Biogas Quality:**
```
COMPONENT       CONCENTRATION        ISSUES

Methane (CH₄)   50-75%              • Fuel gas
                (typically 55-65%)  • Lower than natural gas (95% CH₄)

Carbon Dioxide  25-50%              • Reduces heating value
(CO₂)           (typically 30-40%)  • Lowers flame temperature
                                    • Not combustible

Water Vapor     Saturated           • Condensation in pipes
(H₂O)           (1-5% by volume)    • Corrosion
                                    • Reduces energy density

Hydrogen        10-2,000 ppm        • Highly corrosive
Sulfide (H₂S)   (typically 50-500)  • SO₂ emissions (toxic, acidic)
                                    • Equipment damage
                                    • Odor (rotten eggs)

Ammonia (NH₃)   <100 ppm            • Corrosive
                                    • NOx emissions

Siloxanes       0-50 mg/m³          • SiO₂ deposits (abrasive)
                (high in sewage)    • Engine/turbine damage
                (low in ag waste)   • Catalyst poisoning

Particulates    <100 mg/m³          • Filter/equipment fouling
```

### 3.2 Biogas Cleaning Technologies

**Desulfurization:**
```
METHOD 1: Biological Desulfurization (In-situ)
┌────────────────────────────────────────────────┐
│ Inject small amount of air into biogas headspace│
│ (2-6% of biogas production)                    │
│                                                 │
│ Sulfur-oxidizing bacteria (Thiobacillus):      │
│ H₂S + 0.5 O₂ → S⁰ + H₂O (sulfur deposits)     │
│                                                 │
│ Advantages:                                     │
│ • Low cost, simple                             │
│ • No chemicals                                 │
│ • H₂S reduced to <50 ppm                       │
│                                                 │
│ Disadvantages:                                  │
│ • Dilutes CH₄ with N₂ (from air)              │
│ • Requires careful control (explosion risk)    │
│ • Sulfur accumulates (periodic removal)        │
└────────────────────────────────────────────────┘

METHOD 2: Iron Oxide (Dry Desulfurization)
┌────────────────────────────────────────────────┐
│ Biogas flows through bed of iron oxide/wood    │
│ chips                                           │
│                                                 │
│ Reaction:                                       │
│ Fe₂O₃ + 3 H₂S → Fe₂S₃ + 3 H₂O                 │
│                                                 │
│ Regeneration (with air):                       │
│ Fe₂S₃ + 3 O₂ → Fe₂O₃ + 3 S⁰                   │
│                                                 │
│ Performance:                                    │
│ • Inlet: 50-5,000 ppm H₂S                     │
│ • Outlet: <10 ppm                              │
│ • Capacity: 50-250 g H₂S/kg media              │
│ • Regeneration: 2-5 times before replacement   │
│                                                 │
│ Design:                                         │
│ • Gas velocity: <0.02 m/s (low pressure drop)  │
│ • Bed depth: 1-2 m                             │
│ • Contact time: 2-5 minutes                    │
└────────────────────────────────────────────────┘

METHOD 3: Activated Carbon Adsorption
┌────────────────────────────────────────────────┐
│ Impregnated activated carbon (KOH or NaOH)     │
│                                                 │
│ H₂S + 2 NaOH → Na₂S + 2 H₂O                   │
│                                                 │
│ Performance:                                    │
│ • Very high removal efficiency (>99%)          │
│ • Outlet: <1 ppm H₂S                           │
│ • Also removes siloxanes and halogenated       │
│   compounds                                     │
│                                                 │
│ Economics:                                      │
│ • Higher cost than iron oxide                  │
│ • Spent carbon disposal/regeneration           │
│ • Preferred for biogas upgrading to biomethane │
└────────────────────────────────────────────────┘

SIZING EXAMPLE:
Biogas flow: 22 m³/day (from earlier example)
H₂S concentration: 500 ppm
Iron oxide desulfurization

Daily H₂S load: 22 m³/day × 500 ppm × 1.45 g/m³ = 16 g H₂S/day
Annual load: 5.8 kg H₂S/year

Media capacity: 100 g H₂S/kg media (conservative)
Media required: 5.8 kg ÷ 0.10 kg/kg = 58 kg
With 3 regenerations: 58 ÷ 3 = 19 kg media

Column design:
├─ Diameter: 0.3 m
├─ Bed depth: 1.0 m
├─ Media volume: 0.07 m³
├─ Bulk density: 600 kg/m³
├─ Media mass: 42 kg ✓
└─ Replacement frequency: Annual
```

**Dehumidification:**
```
WATER REMOVAL METHODS

Passive Cooling & Condensation:
┌────────────────────────────────┐
│    Biogas → [Cooling]          │
│                ↓                │
│           [Separator]           │
│                ↓                │
│         Condensate              │
│         (to drain)              │
└────────────────────────────────┘

Design:
├─ Cool biogas to 4-10°C
├─ Condensate collection sump
├─ Automatic drain trap
└─ Removes 70-90% moisture

Refrigerated Dryer:
├─ Cools to 2-4°C
├─ Removes 95-99% moisture
├─ Dew point: -5 to -10°C
├─ Energy: 0.02-0.05 kWh/m³ biogas
└─ For critical applications (engines, fuel cells)

Adsorption (Silica Gel, Molecular Sieves):
├─ Ultra-low dew point (<-40°C)
├─ Required for biomethane pipeline injection
├─ Regenerable adsorbent
└─ Higher capital and operating cost
```

### 3.3 Biogas Upgrading to Biomethane

**CO₂ Separation Technologies:**
```
TECHNOLOGY      PRINCIPLE           CH₄ LOSS  ENERGY    CAPEX

Water Scrubbing Physical absorption 2-4%      0.2-0.3   $$
                in water column               kWh/m³

Chemical        Chemical reaction   <1%       0.1-0.2   $$$
Scrubbing       with amines                   kWh/m³

Pressure Swing  Adsorption on      1-2%      0.2-0.25  $$$
Adsorption(PSA) molecular sieves              kWh/m³

Membrane        Selective           4-10%     0.15-0.25 $$$$
Separation      permeation

Cryogenic       Liquefaction &     <1%       0.5-0.8   $$$$$
Separation      separation at                 kWh/m³
                low temp

PRODUCT QUALITY: >95% CH₄ (pipeline grid standard)
                 <3% CO₂
                 <5 ppm H₂S
                 Dew point: <-10°C
```

**Water Scrubbing System Design:**
```
PROCESS FLOW:

Raw Biogas (60% CH₄, 40% CO₂, 22 m³/day from earlier example)
       ↓
[Desulfurization] → H₂S <10 ppm
       ↓
[Dehumidification] → Dry gas
       ↓
[Compressor] → 8-10 bar
       ↓
[Absorption Column] ← Pressurized water (recirculated)
   (CO₂ dissolves)
       ↓
[Flash Tank] → Releases CO₂ (off-gas, some CH₄ loss)
       ↓
Biomethane (95%+ CH₄)
       ↓
[Drying] → Final polishing
       ↓
BIOMETHANE PRODUCT: 13 m³/day (95% CH₄)
Storage or injection to grid

PERFORMANCE:
├─ CH₄ input: 22 × 0.60 = 13.2 m³ CH₄/day
├─ CH₄ recovery: 96%
├─ CH₄ output: 13.2 × 0.96 = 12.7 m³/day
├─ Biomethane (95%): 12.7 ÷ 0.95 = 13.4 m³/day
└─ Annual: 4,891 m³/year

ECONOMICS (Small-scale, 22 m³/day raw biogas):
├─ Capital cost: $150,000-250,000 (turnkey system)
├─ Operating cost: $0.15-0.25/m³ biomethane
├─ Biomethane value: $0.60-0.90/m³ (as natural gas substitute)
├─ Additional value: Renewable fuel credits, carbon credits
└─ Payback: 5-8 years (depends on incentives)

Note: Economics improve significantly at larger scales (>100 m³/hr)
```

### 3.4 Biogas Utilization Options

**Application Comparison:**
```
UTILIZATION    EFFICIENCY  OUTPUTS           BEST FOR          SCALE

Direct heating 85-95%      Heat              • Space heating   Any
Boiler                                       • Process heat
                                             • Greenhouse
                                             heating

Combined Heat  35-45% elec Heat + electricity• Distributed     >50 kW
& Power (CHP)  40-50% heat                   generation
Engine-based                                 • On-site use
                                             • Grid export

Combined Heat  40-50% elec Heat + electricity• High efficiency  >250 kW
& Power (CHP)  35-45% heat                   • Industrial
Gas turbine                                  • scale

Fuel Cell CHP  45-60% elec Heat + electricity• High electrical >5 kW
               30-40% heat                   efficiency
                                             • Premium power
                                             • quality

Vehicle Fuel   N/A         Biomethane       • Fleet vehicles   Any
(upgraded)                 (CNG equivalent)  • Grid injection
                                             • Revenue from
                                             fuel sales

Grid Injection N/A         Biomethane       • Remote location  Large
(pipeline)                 to nat gas grid   • Lack of heat    (>500
                                             demand nearby     m³/day)
                                             • Max revenue

SELECTION CRITERIA:
1. Biogas production rate (determines feasible scale)
2. On-site heat demand (CHP requires thermal load)
3. Electrical demand and grid connection
4. Economic incentives (feed-in tariffs, renewable credits)
5. Maintenance capabilities
6. Distance to gas grid (for injection)
```

---

## 4. Combined Heat & Power (CHP) Systems

### 4.1 Engine Selection & Sizing

**CHP Engine Specifications:**
```
BIOGAS ENGINE (Spark Ignition, Lean-Burn)

Capacity: 30 kW electrical (based on 22 m³/day biogas)

Biogas consumption: 0.65 m³/kWh (LHV basis)
├─ Daily: 30 kW × 24 hrs × 0.65 = 468 m³/day
├─ Available: 22 m³/day
└─ Capacity factor: 22/468 = 4.7% (engine oversized)

CORRECTLY SIZED ENGINE: 2 kW electrical
├─ Biogas consumption: 2 kW × 24 × 0.65 = 31.2 m³/day
├─ Available: 22 m³/day
├─ Capacity factor: 70% (better match)
└─ Hours of operation: 22/31.2 × 24 = 16.9 hrs/day

PERFORMANCE (2 kW engine):
┌────────────────────────────────────────┐
│ Electrical output:     2.0 kW (35%)    │
│ Thermal output:        2.5 kW (44%)    │
│ Exhaust losses:        0.8 kW (14%)    │
│ Radiation losses:      0.4 kW (7%)     │
│ ────────────────────────────────────   │
│ Total input (biogas):  5.7 kW (100%)   │
│                                        │
│ Overall efficiency:    79% (elec+heat) │
└────────────────────────────────────────┘

ANNUAL PRODUCTION:
├─ Operating hours: 16.9 hrs/day × 365 = 6,169 hrs/year
├─ Electricity: 2.0 kW × 6,169 = 12,338 kWh/year
├─ Heat: 2.5 kW × 6,169 = 15,423 kWh/year
└─ Biogas consumed: 8,020 m³/year (matches production ✓)

COMPARISON TO EARLIER CHP ESTIMATE:
Earlier simplified estimate (35% elec, 50% heat):
├─ Electricity: 17.0 MWh/year
├─ Heat: 24.3 MWh/year

Detailed engine sizing:
├─ Electricity: 12.3 MWh/year (closer to reality)
├─ Heat: 15.4 MWh/year

Note: Oversizing engines leads to poor efficiency and maintenance
```

**Heat Recovery System:**
```
THERMAL OUTPUT RECOVERY POINTS:

1. ENGINE COOLING JACKET (50% of thermal output)
   ├─ Water-cooled engine block
   ├─ Temperature: 80-90°C
   ├─ Heat exchanger to facility hot water loop
   └─ Application: Space heating, greenhouse heating

2. EXHAUST GAS (40% of thermal output)
   ├─ Exhaust temperature: 400-500°C
   ├─ Exhaust gas heat exchanger
   ├─ Output temperature: 80-120°C
   └─ Application: High-temp process heat, absorption chiller

3. OIL COOLING (5% of thermal output)
   ├─ Lubrication oil cooling
   ├─ Lower-grade heat
   └─ Often integrated with jacket cooling

4. INTERCOOLER (5% of thermal output, if turbocharged)
   ├─ Charge air cooling
   └─ Low-grade heat

HEAT DISTRIBUTION:

Hot Water Loop (90°C supply, 70°C return):
                ┌──────────────┐
    ┌───────────┤ CHP Engine   ├──────────┐
    │           └──────────────┘          │
    │                                     │
    ↓                                     ↓
[Heat Exchanger]                    [Heat Exchanger]
 Jacket cooling                      Exhaust gas
    │                                     │
    └────────→ [Buffer Tank] ←───────────┘
                500 L, 90°C
                    │
    ┌───────────────┼────────────────┐
    ↓               ↓                ↓
[Greenhouse    [Building       [Digester
 heating]       heating]        heating]

THERMAL LOAD MATCHING:
├─ Summer: Low heating demand, CHP heat may exceed needs
│   → Cooling via heat dump radiator (wasteful)
│   → Consider absorption chiller (use heat for cooling)
│
├─ Winter: High heating demand, CHP heat fully utilized
│   → Backup boiler for peak loads
│
└─ Optimal: Match CHP to base heat load (run continuously)
           Use backup for peaks
```

### 4.2 Electrical Integration

**Grid Connection Options:**
```
OPTION 1: ISLANDED (Off-Grid)
┌──────────────────────────────────────────┐
│  CHP → [Inverter] → Facility electrical  │
│                                          │
│  + Battery storage (optional)            │
│  + Load following control                │
│                                          │
│ Advantages:                              │
│ • Energy independence                    │
│ • No utility charges                     │
│                                          │
│ Disadvantages:                           │
│ • Requires storage for load balancing   │
│ • Higher capital cost                    │
│ • Less reliable (single source)          │
└──────────────────────────────────────────┘

OPTION 2: GRID-CONNECTED (Net Metering)
┌──────────────────────────────────────────┐
│  CHP → [Grid-tie Inverter] ←→ Grid      │
│                    ↓                     │
│              Facility Load               │
│                                          │
│ • Excess power exported to grid          │
│ • Deficit power imported from grid       │
│ • Bidirectional meter tracks net         │
│                                          │
│ Advantages:                              │
│ • No storage needed                      │
│ • Grid as "virtual battery"              │
│ • Revenue from exports                   │
│                                          │
│ Disadvantages:                           │
│ • Requires utility agreement             │
│ • Export rates often lower than import   │
└──────────────────────────────────────────┘

OPTION 3: GRID-CONNECTED (Self-Consumption Priority)
┌──────────────────────────────────────────┐
│  CHP → [Controller] → Facility Load      │
│            ↕                             │
│          Grid                            │
│                                          │
│ Control logic:                           │
│ 1. CHP supplies facility load first      │
│ 2. Import from grid if CHP insufficient  │
│ 3. Rarely export (curtail if excess)     │
│                                          │
│ Preferred when:                          │
│ • High import rates, low export rates    │
│ • Self-sufficiency is goal               │
└──────────────────────────────────────────┘

INTERCONNECTION REQUIREMENTS:
├─ IEEE 1547 compliance (US)
├─ Anti-islanding protection
├─ Voltage and frequency controls
├─ Utility agreement and inspection
├─ Liability insurance
└─ Utility fees (may apply)
```

---

## 5. Thermochemical Conversion

### 5.1 Pyrolysis

**Process Overview:**
```
SLOW PYROLYSIS (Biochar Production)

Biomass → [Pyrolysis Reactor] → Products
          300-700°C
          Oxygen-limited
          0.5-12 hours

PRODUCTS:
├─ Biochar: 30-40% (mass basis, dry)
├─ Bio-oil: 20-40%
└─ Syngas: 20-40%

FAST PYROLYSIS (Bio-oil Production)

Biomass → [Pyrolysis Reactor] → Products
          400-600°C
          Rapid heating
          <2 seconds

PRODUCTS:
├─ Bio-oil: 50-75% (liquid fuel)
├─ Biochar: 10-20%
└─ Syngas: 15-30%

ENERGY BALANCE (Slow Pyrolysis Example):

Input: 1,000 kg dry biomass (17 MJ/kg HHV)
Total energy: 17,000 MJ

Products:
├─ Biochar (350 kg): 30 MJ/kg × 350 = 10,500 MJ (62%)
├─ Bio-oil (300 kg): 17 MJ/kg × 300 = 5,100 MJ (30%)
├─ Syngas (200 Nm³): 5 MJ/Nm³ × 200 = 1,000 MJ (6%)
└─ Losses (heat): 400 MJ (2%)

Energy distribution:
├─ Solid fraction (biochar): 62% (for soil amendment, carbon sequestration)
├─ Liquid (bio-oil): 30% (fuel or chemicals)
├─ Gas (syngas): 6% (fuel for process heat)
└─ Process is exothermic; syngas sufficient for heating needs
```

### 5.2 Gasification

**Gasification Process:**
```
PRINCIPLE:
Partial oxidation of biomass at high temperature (700-1,000°C)
to produce synthesis gas (syngas: CO + H₂)

STAGES:
1. Drying (100-200°C): Evaporate moisture
2. Pyrolysis (200-700°C): Volatilize organics
3. Gasification (700-1,000°C): Char + steam/O₂ → syngas
4. Oxidation (800-1,000°C): Exothermic combustion

GASIFYING AGENTS:
├─ Air: Produces low-BTU syngas (4-6 MJ/Nm³) due to N₂ dilution
├─ Oxygen: Produces medium-BTU syngas (10-15 MJ/Nm³)
├─ Steam: Produces high-BTU syngas (15-20 MJ/Nm³)
└─ Mixtures: Optimize for specific applications

SYNGAS COMPOSITION (Air Gasification, Typical):
├─ H₂: 15-20%
├─ CO: 15-20%
├─ CO₂: 10-15%
├─ CH₄: 2-5%
├─ N₂: 45-55%
└─ LHV: 4-6 MJ/Nm³

REACTOR TYPES:
┌─────────────────────────────────────────────┐
│ Fixed Bed (Updraft):                        │
│ • Simple, robust                            │
│ • High tar content in syngas                │
│ • Small scale (<1 MW)                       │
│                                             │
│ Fixed Bed (Downdraft):                      │
│ • Lower tar (thermal cracking)              │
│ • Clean syngas                              │
│ • Small-medium scale (<5 MW)                │
│ • Most common for engine/turbine            │
│                                             │
│ Fluidized Bed:                              │
│ • Excellent heat/mass transfer              │
│ • Flexible feedstock                        │
│ • Medium-large scale (>5 MW)                │
│ • Higher capital cost                       │
└─────────────────────────────────────────────┘

APPLICATIONS:
├─ Syngas → Engine/turbine → Electricity + heat
├─ Syngas → Fischer-Tropsch → Liquid fuels
├─ Syngas → Methanol/ethanol synthesis
└─ Syngas → Hydrogen production (with shift reaction)

EFFICIENCY:
├─ Cold gas efficiency: 65-80% (energy in syngas / energy in biomass)
├─ Overall CHP efficiency: 60-85% (including heat recovery)
└─ Electrical efficiency: 20-35% (with engine/turbine)

CHALLENGES:
├─ Tar formation (requires cleanup for engines)
├─ Ash handling and disposal
├─ Corrosion from alkali metals
├─ Scale-up complexity
└─ Higher O&M compared to AD
```

### 5.3 Direct Combustion

**Biomass Boiler System:**
```
APPLICATION: Greenhouse heating

Feedstock: Wood chips from tree prunings + crop residues
Moisture content: 20-30% (air-dried)
Heating value: 12-15 MJ/kg (as-received)

BOILER SPECIFICATIONS:
├─ Type: Moving grate, automatic feed
├─ Capacity: 500 kW thermal
├─ Efficiency: 85% (HHV basis)
├─ Emissions control: Cyclone + bag filter (particulates)
└─ Automation: Fully automated, minimal supervision

FUEL CONSUMPTION:
Heat demand: 500 kW × 8,760 hrs/year × 0.40 capacity factor
          = 1,752,000 kWh/year = 6,307 GJ/year

Fuel required: 6,307 GJ ÷ 0.85 ÷ 13.5 MJ/kg = 550 tonnes/year
Daily average: 1.5 tonnes/day

COMPARISON TO FOSSIL FUEL:
Natural gas alternative: 6,307 GJ ÷ 0.90 ÷ 35.8 MJ/m³ = 196,000 m³/year
Savings (at $0.40/m³): $78,400/year

ECONOMICS:
├─ Boiler capital cost: $150,000
├─ Fuel handling system: $50,000
├─ Installation: $40,000
├─ Total CAPEX: $240,000
│
├─ Fuel cost: $30/tonne × 550 = $16,500/year
├─ Maintenance: $8,000/year
├─ Labor (part-time): $12,000/year
├─ Total OPEX: $36,500/year
│
├─ Natural gas cost (baseline): $78,400/year
├─ Operating savings: $41,900/year
├─ Simple payback: 5.7 years
└─ NPV (15 years, 6%): $186,000

EMISSIONS:
├─ CO₂ (biogenic): Carbon neutral (if sustainably sourced)
├─ Particulates: <50 mg/Nm³ (with bag filter)
├─ NOx: 150-300 mg/Nm³ (low-NOx burner)
├─ SOx: Minimal (low sulfur in agricultural biomass)
└─ Ash: 1-5% of fuel input (→ fertilizer or disposal)
```

---

## 6. Integration with Facility Operations

### 6.1 Energy System Design

**Integrated Energy System - Greenhouse Complex:**
```
┌──────────────────────────────────────────────────────────┐
│              CIRCULAR ENERGY SYSTEM                       │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  WASTE INPUTS                                             │
│  ├─ Plant waste → Anaerobic Digester → Biogas           │
│  ├─ Manure      ↗                       │                │
│  └─ Food waste ↗                        ↓                │
│                                    ┌─────────┐           │
│                                    │CHP Unit │           │
│                                    └─────────┘           │
│                                      ↓     ↓             │
│                              Electricity  Heat           │
│                                      │       │           │
│  ┌───────────────────────────────────┼───────┼────────┐  │
│  │                                   ↓       ↓        │  │
│  │  GREENHOUSE FACILITY                               │  │
│  │  ├─ Lighting ←────────────── Electricity          │  │
│  │  ├─ Climate control ←────────── Electricity+Heat  │  │
│  │  ├─ Pumps/fans ←────────────── Electricity        │  │
│  │  ├─ CO₂ enrichment ←───────── Biogas (purified)   │  │
│  │  └─ Space heating ←────────────── Heat            │  │
│  │                                                     │  │
│  │  DIGESTATE → Nutrient recovery → Fertilizer       │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                           │
│  GRID CONNECTION (Backup/Export)                          │
│  ├─ Import power during CHP maintenance                  │
│  └─ Export excess power (if economical)                  │
│                                                           │
└──────────────────────────────────────────────────────────┘

ENERGY FLOW SANKEY DIAGRAM:

Waste (280 t/yr) ══════════════════════╗
48.5 MWh/yr                            ║
                                       ↓
                              ┌──────────────┐
                              │ AD + CHP     │
                              └──────────────┘
                                   ║    ║
                     Electricity ══╝    ╚══ Heat
                     17.0 MWh          24.3 MWh
                          ║                 ║
        ┌─────────────────╬─────┐          ║
        ↓                 ↓     ↓          ↓
    Lighting        Ventilation  Pumps   Heating
    (40% of total)  (30%)       (10%)   (20%)
        ↓                 ↓       ↓        ↓
    Crop Growth       Climate   Water   Thermal
    Optimization      Control   Mgmt    Comfort
```

### 6.2 Load Management

**Electrical Load Profile & CHP Matching:**
```
TYPICAL GREENHOUSE DAILY LOAD PROFILE (10,000 m²):

Hour    Load (kW)   CHP (kW)   Grid (kW)   Notes
────────────────────────────────────────────────────────
00-06   8-12        2.0        6-10        Baseline load
06-08   15-20       2.0        13-18       Lights on
08-12   25-30       2.0        23-28       Peak (all systems)
12-14   30-35       2.0        28-33       Maximum demand
14-18   25-30       2.0        23-28       Afternoon
18-20   20-25       2.0        18-23       Evening
20-24   12-15       2.0        10-13       Night mode

CHP STRATEGY:
├─ CHP runs continuously (baseload)
├─ Displaces 2 kW continuously = 17.5 MWh/year
├─ Grid import for peak demands
├─ Self-consumption: ~25% of total electrical demand
└─ Heat fully utilized (greenhouse heating Sep-May)

OPTIMIZATION OPPORTUNITIES:
├─ Shift flexible loads to CHP generation (battery buffering)
├─ Thermal storage to decouple heat generation from demand
├─ Demand response (curtail non-essential loads during peaks)
└─ Future: Integrate solar PV for daytime peak shaving
```

---

## 7. Economic Analysis

### 7.1 Levelized Cost of Energy (LCOE)

**AD-CHP System (from earlier 200 m³ digester example):**
```
CAPITAL COSTS:
├─ Anaerobic digester (200 m³): $180,000
├─ Feedstock handling (mixer, pump): $25,000
├─ CHP unit (2 kW electrical): $18,000
├─ Biogas conditioning: $12,000
├─ Heat recovery system: $15,000
├─ Electrical interconnection: $8,000
├─ Engineering & contingency (15%): $39,000
└─ TOTAL CAPEX: $297,000

ANNUAL OPERATING COSTS:
├─ Maintenance (digester): $6,000
├─ Maintenance (CHP): $3,500
├─ Parasitic electricity: $650
├─ Labor (part-time monitoring): $10,000
├─ Testing & compliance: $2,000
└─ TOTAL OPEX: $22,150/year

ENERGY PRODUCTION:
├─ Electricity: 12,338 kWh/year
├─ Heat: 15,423 kWh/year
└─ Total: 27,761 kWh/year

LCOE CALCULATION:

LCOE = (CAPEX × CRF + OPEX) / Annual Energy

Capital Recovery Factor (20-year life, 6% discount rate):
CRF = 0.06 × (1+0.06)²⁰ / [(1+0.06)²⁰ - 1] = 0.0872

LCOE = (297,000 × 0.0872 + 22,150) / 27,761
     = (25,898 + 22,150) / 27,761
     = $1.73/kWh

COMPARISON:
├─ Grid electricity: $0.12-0.18/kWh
├─ Natural gas heating: $0.08-0.12/kWh equivalent
├─ Weighted average baseline: $0.14/kWh

LCOE ($1.73) > Baseline ($0.14)
→ NOT economically viable without incentives

SENSITIVITY - WITH INCENTIVES:
├─ Capital grant (40%): Reduces CAPEX to $178,200
├─ Feed-in tariff: $0.15/kWh for electricity
├─ Renewable heat incentive: $0.05/kWh for heat
├─ Avoided waste disposal: $4,000/year

Adjusted revenues:
├─ Electricity: 12,338 × 0.15 = $1,851
├─ Heat: 15,423 × 0.05 = $771
├─ Waste disposal: $4,000
└─ Total: $6,622/year

Adjusted LCOE with 40% grant:
LCOE = (178,200 × 0.0872 + 22,150) / 27,761 = $1.36/kWh

Revenue per kWh: $6,622 / 27,761 = $0.24/kWh

NET: $0.24 revenue > $1.36 LCOE (Still not viable)

CONCLUSION:
Small-scale AD-CHP (at this size) requires substantial subsidies
or must be justified on non-energy benefits:
├─ Waste management solution
├─ Nutrient recovery value
├─ Carbon reduction goals
├─ Energy resilience
└─ Integrated system benefits

Economics improve significantly at larger scales (>100 kW CHP)
```

### 7.2 Break-Even Analysis

**Sensitivity to Scale:**
```
SCENARIO COMPARISON:

Small Scale (current): 2 kW CHP, 280 t waste/year
Medium Scale: 20 kW CHP, 2,800 t waste/year (10x)
Large Scale: 200 kW CHP, 28,000 t waste/year (100x)

                    SMALL     MEDIUM    LARGE
────────────────────────────────────────────────────
CAPEX               $297k     $1.8M     $12M
CAPEX per kW        $149k/kW  $90k/kW   $60k/kW

Annual elec (MWh)   12        124       1,236
Annual heat (MWh)   15        154       1,545

OPEX ($/year)       $22k      $95k      $450k
OPEX per kWh        $0.81     $0.35     $0.16

LCOE ($/kWh)        $1.73     $0.92     $0.54

Baseline energy     $0.14     $0.14     $0.13
cost ($/kWh)                            (bulk rate)

Economically viable? NO       MAYBE     YES
                              (with     (even without
                              incentives) incentives)

KEY INSIGHT: Economies of scale are critical for biogas projects
            Consolidation of waste from multiple farms may be necessary
```

---

## Summary

Energy recovery from agricultural waste transforms liability into asset, providing renewable energy, reducing emissions, and closing nutrient loops. Anaerobic digestion with CHP is the most mature technology for wet biomass, while thermochemical processes suit dry materials. Success requires careful system design, appropriate scale, and integration with facility energy demands.

**Key Takeaways:**
1. Waste characterization determines optimal conversion pathway
2. Anaerobic digestion suits wet, organic-rich feedstocks
3. Co-digestion optimizes C/N ratio and biogas yields
4. CHP provides highest value when heat demand matches production
5. Biogas upgrading enables pipeline injection or vehicle fuel
6. Thermochemical processes suit dry biomass (gasification, combustion)
7. Economics strongly favor larger scales (>50 kW)
8. Integration with facility operations maximizes value capture

**Decision Framework:**
1. Quantify waste streams (quantity, quality, moisture, energy potential)
2. Assess on-site energy demands (thermal and electrical)
3. Evaluate technology options (AD, gasification, combustion)
4. Size systems to match base loads (avoid over-sizing)
5. Analyze economics including all value streams (energy, waste disposal, nutrients)
6. Secure incentives and favorable policies
7. Plan for integration and O&M capabilities

---

## Further Reading

1. Deublein, D. & Steinhauser, A. (2011). "Biogas from Waste and Renewable Resources"
2. IEA Bioenergy. (2020). "Biomass Upgrading Technologies"
3. Knoef, H. (2012). "Handbook Biomass Gasification"
4. Murphy, J.D., et al. (2011). "Technical/Economic/Environmental Analysis of Biogas Utilization"
5. Weiland, P. (2010). "Biogas Production: Current State and Perspectives"

---

*End of Lesson 5*
