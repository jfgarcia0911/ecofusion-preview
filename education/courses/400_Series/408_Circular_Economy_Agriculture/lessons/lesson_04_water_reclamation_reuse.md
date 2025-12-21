# Lesson 4: Advanced Water Reclamation & Reuse

## Learning Objectives

By the end of this lesson, you will be able to:
1. Define water quality parameters and treatment objectives for agricultural reuse
2. Design multi-barrier treatment systems for water reclamation
3. Select and specify membrane filtration technologies
4. Apply advanced oxidation processes for contaminant removal
5. Implement real-time monitoring and control systems
6. Ensure regulatory compliance and manage risks
7. Calculate economics and lifecycle impacts of water reuse systems

---

## 1. Water Quality Parameters & Treatment Objectives

### 1.1 Key Water Quality Indicators

**Physical Parameters:**
```
PARAMETER          SIGNIFICANCE            AGRICULTURAL    TREATMENT
                                          TARGET          METHODS
═══════════════════════════════════════════════════════════════════════
Turbidity (NTU)    Suspended solids,      <5 (ideal)      Filtration
                   pathogen carriers      <20 (acceptable) Settling

Total Suspended    Clogging, sediment     <30 mg/L        Filtration
Solids (TSS)                                              Centrifuge

Temperature        Affects plant growth   15-25°C         Heat exchange
                   Pathogen survival      (optimal)

Color              Aesthetics, organics   <15 TCU         Activated carbon
                   Light transmission                     Oxidation

Odor               Indicator of quality   None            Oxidation
                   User acceptance        (threshold)     Aeration
```

**Chemical Parameters:**
```
PARAMETER          CONCERN                LIMIT           MONITORING

pH                 Nutrient availability  5.5-7.5         Continuous
                   Equipment corrosion    (hydroponics)

Electrical         Salt concentration     <2.0 dS/m       Daily
Conductivity (EC)  Plant stress          (sensitive)
                                         <4.0 dS/m
                                         (tolerant)

Dissolved Oxygen   Root health           >5 mg/L         Continuous
(DO)              Pathogen control       (hydroponics)

Nutrients
├─ NO₃-N          Essential, excess      100-250 mg/L    Weekly
├─ NH₄-N          Toxicity at high       <50 mg/L        Weekly
├─ PO₄-P          Essential              30-70 mg/L      Weekly
└─ K⁺             Essential              150-350 mg/L    Weekly

Heavy Metals
├─ Cadmium (Cd)   Toxicity, accumulation <0.01 mg/L      Monthly
├─ Lead (Pb)      Toxicity               <0.05 mg/L      Monthly
├─ Chromium (Cr)  Toxicity               <0.1 mg/L       Monthly
├─ Nickel (Ni)    Toxicity               <0.2 mg/L       Monthly
└─ Copper (Cu)    Essential but toxic    <0.2 mg/L       Monthly
                  at excess              (up to 0.4)

Organic Compounds
├─ COD            Organic load           <100 mg/L       Weekly
├─ BOD            Oxygen demand          <20 mg/L        Weekly
└─ TOC            Total organics         <30 mg/L        Weekly
```

**Biological Parameters:**
```
INDICATOR         SIGNIFICANCE           TARGET          VERIFICATION

Total Coliforms   General contamination  <10 CFU/100 mL  Weekly

E. coli           Fecal contamination    <1 CFU/100 mL   Weekly
                  Pathogen indicator     (Non-detect)

Enterococci       Fecal indicator        <1 CFU/100 mL   Weekly

Salmonella        Direct pathogen        Absent/100 mL   Monthly

Legionella        Aerosol risk           <100 CFU/L      Monthly
                  (mist systems)

Helminth eggs     Parasites              <1 egg/L        Quarterly

Viruses           Direct pathogens       <1 PFU/100 mL   Quarterly
                                         (Risk-based)

Algae/Cyanobacteria System clogging      <10³ cells/mL   Weekly
                    Toxin production
```

### 1.2 Treatment Objectives by Application

**Irrigation Water Quality Targets:**
```
APPLICATION TYPE          TSS      EC        pH      PATHOGENS

Non-food crops          <50mg/L   <4dS/m   6-9     <100 TC/100mL
Processed food crops    <30mg/L   <3dS/m   6-8.5   <10 TC/100mL
Fresh-eaten crops       <10mg/L   <2dS/m   6-8     Non-detect
Hydroponic systems      <5mg/L    <2dS/m   5.5-7   Non-detect
Greenhouse misting      <1mg/L    <1.5dS/m 6-7     Non-detect

TC = Total Coliforms
```

### 1.3 Source Water Characterization

**Agricultural Wastewater Streams:**
```
SOURCE              CHARACTERISTICS           TREATMENT CHALLENGES

Greenhouse drainage ├─ High nutrients (N,P,K)  ├─ Salt accumulation
                    ├─ Variable EC (1-5 dS/m) ├─ Pathogen presence
                    ├─ Low TSS (<50 mg/L)     ├─ Pesticide residues
                    ├─ pH: 5.5-7.5            └─ Biofilm control
                    └─ COD: 50-200 mg/L

Aquaculture         ├─ High organics          ├─ Solid removal
effluent            ├─ Ammonia (10-100 mg/L)  ├─ Nitrification
                    ├─ TSS: 50-500 mg/L       ├─ Disease control
                    ├─ Pathogens present      └─ Odor management
                    └─ COD: 100-500 mg/L

Livestock wash      ├─ Very high organics     ├─ Extensive treatment
water               ├─ High TSS (>1000 mg/L)  ├─ Pathogen reduction
                    ├─ Pathogens, helminth    ├─ Nutrient management
                    ├─ COD: 1000-5000 mg/L    └─ Antibiotics removal
                    └─ Variable pH

Produce wash        ├─ Soil particles         ├─ Filtration needs
water               ├─ Low nutrients          ├─ Minimal treatment
                    ├─ TSS: 100-500 mg/L      ├─ Disinfection
                    └─ Low pathogen risk      └─ Turbidity control
```

---

## 2. Multi-Barrier Treatment Approach

### 2.1 Concept & Philosophy

**Defense in Depth Strategy:**
```
┌───────────────────────────────────────────────────────────┐
│            MULTI-BARRIER TREATMENT SYSTEM                 │
├───────────────────────────────────────────────────────────┤
│                                                            │
│  Barrier 1: SOURCE CONTROL                                │
│  └─> Minimize contamination at source                     │
│                                                            │
│  Barrier 2: PRE-TREATMENT                                 │
│  └─> Remove gross solids and particles                    │
│                                                            │
│  Barrier 3: PRIMARY TREATMENT                             │
│  └─> Remove organics and suspended solids                 │
│                                                            │
│  Barrier 4: SECONDARY TREATMENT                           │
│  └─> Biological treatment, nutrient removal               │
│                                                            │
│  Barrier 5: TERTIARY TREATMENT                            │
│  └─> Advanced filtration, pathogen removal                │
│                                                            │
│  Barrier 6: DISINFECTION                                  │
│  └─> Final pathogen inactivation                          │
│                                                            │
│  Barrier 7: MONITORING & CONTROL                          │
│  └─> Continuous verification, fail-safes                  │
│                                                            │
│  RESULT: 99.9999% (6-log) pathogen reduction             │
│          Multiple redundancies ensure safety              │
│                                                            │
└───────────────────────────────────────────────────────────┘
```

### 2.2 Treatment Train Configuration

**Example: Greenhouse Drainage Reclamation**
```
FLOW: 200 m³/day greenhouse drainage water

┌────────────────┐
│ SOURCE WATER   │ TSS: 40 mg/L, EC: 3.2 dS/m
│ (Drain lines)  │ NO₃-N: 180 mg/L, PO₄-P: 45 mg/L
└────────┬───────┘ Pathogens: 10² CFU/100mL
         │
         ↓
┌────────────────┐
│  SCREENING     │ Remove particles >1mm
│  (100 mesh)    │ ──→ Debris to waste (0.5%)
└────────┬───────┘ TSS: 35 mg/L
         │
         ↓
┌────────────────┐
│ SETTLING TANK  │ Gravity separation
│  (2 hr HRT)    │ ──→ Sludge (2%)
└────────┬───────┘ TSS: 15 mg/L
         │
         ↓
┌────────────────┐
│ SAND FILTER    │ Multi-media filtration
│ (Rapid/Slow)   │ Backwash: 5% volume
└────────┬───────┘ TSS: <5 mg/L
         │
         ↓
┌────────────────┐
│ UV DISINFECTION│ 40 mJ/cm² dose
│ (Medium press) │ 99.9% pathogen reduction
└────────┬───────┘ Pathogens: <1 CFU/100mL
         │
         ↓
┌────────────────┐
│ ACTIVATED      │ Remove residual organics
│ CARBON FILTER  │ Pesticide adsorption
│  (Optional)    │ TOC: <10 mg/L
└────────┬───────┘
         │
         ↓
┌────────────────┐
│ FINAL HOLDING  │ Contact time for UV
│     TANK       │ Quality verification
└────────┬───────┘ Continuous monitoring
         │
         ↓
┌────────────────┐
│ TREATED WATER  │ Ready for irrigation
│  Storage Tank  │ TSS: <5, EC: 3.2 dS/m
└────────────────┘ Pathogens: Non-detect

PERFORMANCE:
├─ Water recovery: 92.5%
├─ Nutrient retention: >95%
├─ Energy: 0.5 kWh/m³
├─ Operating cost: $0.35/m³
└─ Capital cost: $180,000 (200 m³/day capacity)
```

---

## 3. Membrane Filtration Technologies

### 3.1 Membrane Classification

**Separation Spectrum:**
```
PORE SIZE    MEMBRANE TYPE      REMOVES             APPLICATION
(μm)
───────────────────────────────────────────────────────────────────
10-0.1       Microfiltration    Bacteria            Pre-treatment
  (MF)                          Protozoa            Particle removal
                                Suspended solids    Turbidity reduction

0.1-0.01     Ultrafiltration    Viruses             Pathogen removal
  (UF)                          Macromolecules      Protein recovery
                                Colloids            Water clarification

0.01-0.001   Nanofiltration     Divalent ions       Hardness removal
  (NF)                          Small organics      Pesticide removal
                                Color compounds     Partial desalination

<0.001       Reverse Osmosis    Monovalent ions     Desalination
  (RO)                          All dissolved       High-purity water
                                solids

───────────────────────────────────────────────────────────────────

MOLECULAR WEIGHT CUT-OFF (MWCO):
MF: >100,000 Da
UF: 1,000-100,000 Da
NF: 200-1,000 Da
RO: <200 Da
```

### 3.2 Ultrafiltration System Design

**UF Process Configuration:**
```
ULTRAFILTRATION SYSTEM (100 m³/day capacity)

Feed Water ──→ [Pre-filter] ──→ [UF Membranes] ──┬──→ Permeate
               (20 μm)          (0.02 μm MWCO)    │    (Clean water)
                                    ↕              │
                            Crossflow circulation  │
                                    │              │
                                    ↓              │
                            ┌───────────────┐      │
                            │  Backwash     │←─────┘
                            │  & Cleaning   │
                            └───────┬───────┘
                                    │
                                    ↓
                              Concentrate
                              (to disposal/
                               further treatment)

SYSTEM SPECIFICATIONS:
┌─────────────────────────────────────────────────┐
│ Membrane Configuration: Hollow fiber            │
│ Module arrangement: 4 × 25 m³/day units         │
│ Membrane area: 800 m² total                    │
│ Operating pressure: 1-3 bar                    │
│ Crossflow velocity: 1-2 m/s                    │
│ Recovery rate: 90-95%                          │
│ Flux: 50-100 L/m²/hr                           │
│ Backwash frequency: Every 30-60 min            │
│ Chemical cleaning: Weekly (CIP)                │
└─────────────────────────────────────────────────┘

PERFORMANCE:
├─ Turbidity removal: >99.5% (<0.1 NTU)
├─ Bacteria removal: >6-log (99.9999%)
├─ Virus removal: >4-log (99.99%)
├─ Particle removal (>0.02 μm): >99.99%
└─ Organic removal (MWCO dependent): 50-90%

OPERATING PROTOCOL:
1. Normal filtration (30-60 min)
2. Backwash with permeate (3-5 min, 2x flux)
3. Air scouring (optional, 1-2 min)
4. Return to filtration
5. Chemical cleaning (weekly):
   ├─ Caustic (pH 11-12): Remove organics
   ├─ Acid (pH 2-3): Remove scaling
   └─ Chlorine (200 ppm): Disinfection
```

**UF Economics:**
```
CAPITAL COSTS (100 m³/day system):
├─ UF membrane modules: $60,000
├─ Pressure vessels & piping: $25,000
├─ Pumps & controls: $35,000
├─ Pre-filtration: $15,000
├─ Instrumentation: $20,000
├─ Installation & commissioning: $30,000
└─ TOTAL CAPEX: $185,000

OPERATING COSTS (Annual):
├─ Energy (0.3 kWh/m³): $1,800
├─ Membrane replacement (5-yr life): $12,000/yr
├─ Chemicals (cleaning): $3,500
├─ Maintenance & parts: $4,000
├─ Labor (part-time): $8,000
└─ TOTAL OPEX: $29,300/year

UNIT COST: $0.80/m³ treated water
```

### 3.3 Reverse Osmosis for Desalination

**RO System Design:**
```
REVERSE OSMOSIS CONFIGURATION

High-pressure feed ──→ [RO Membrane] ──┬──→ Permeate (low TDS)
(15-60 bar)            (Semi-permeable) │    70-90% recovery
                            │            │
                            │            │
                            ↓            │
                       Concentrate ──────┘
                       (High TDS)        │
                            │            │
                            ↓            ↓
                    ┌──────────────────────┐
                    │  Energy Recovery     │
                    │  (Pressure exchanger)│
                    └──────────────────────┘

STAGING EXAMPLE (200 m³/day, EC reduction 4.0→0.8 dS/m):

Stage 1: Primary RO (75% recovery)
├─ Feed: 200 m³/day, 4.0 dS/m
├─ Permeate: 150 m³/day, 0.3 dS/m
└─ Concentrate: 50 m³/day, 13.0 dS/m

Stage 2: Secondary RO (optional, 50% recovery)
├─ Feed: 50 m³/day concentrate, 13.0 dS/m
├─ Permeate: 25 m³/day, 1.5 dS/m
└─ Concentrate: 25 m³/day, 24.0 dS/m (disposal)

BLENDING:
├─ Stage 1 permeate: 150 m³/day @ 0.3 dS/m
├─ Stage 2 permeate: 25 m³/day @ 1.5 dS/m
├─ Mixed product: 175 m³/day @ 0.5 dS/m
└─ Total recovery: 87.5%

ENERGY CONSUMPTION:
├─ High-pressure pump: 2.5 kWh/m³
├─ Pre-treatment: 0.2 kWh/m³
├─ Energy recovery (40% savings): -1.0 kWh/m³
└─ NET: 1.7 kWh/m³

CONCENTRATE MANAGEMENT:
├─ Volume: 25 m³/day (12.5% of feed)
├─ TDS: 24 dS/m (6x concentration)
├─ Disposal options:
│   ├─ Deep well injection
│   ├─ Evaporation ponds
│   ├─ Crystallization (resource recovery)
│   └─ Discharge to saline sink (if available)
```

---

## 4. Advanced Oxidation Processes (AOPs)

### 4.1 AOP Technologies Overview

**Mechanism:**
```
GENERATION OF HYDROXYL RADICALS (•OH)

•OH radical characteristics:
├─ Oxidation potential: 2.8 V (second only to fluorine)
├─ Non-selective oxidation
├─ Rapid reaction kinetics (k = 10⁶-10⁹ M⁻¹s⁻¹)
└─ Complete mineralization potential

Common AOP Methods:
┌──────────────────────────────────────────────────┐
│ 1. UV/H₂O₂                                       │
│    H₂O₂ + UV → 2•OH                             │
│                                                  │
│ 2. UV/O₃                                         │
│    O₃ + UV + H₂O → •OH + O₂                     │
│                                                  │
│ 3. Fenton/Photo-Fenton                          │
│    Fe²⁺ + H₂O₂ → Fe³⁺ + •OH + OH⁻              │
│    (Enhanced with UV)                            │
│                                                  │
│ 4. O₃/H₂O₂                                       │
│    O₃ + H₂O₂ → •OH + O₂                         │
│                                                  │
│ 5. Photocatalysis (TiO₂/UV)                     │
│    TiO₂ + UV → e⁻ + h⁺ → •OH                   │
└──────────────────────────────────────────────────┘
```

### 4.2 UV/H₂O₂ System Design

**Application: Pesticide Degradation**
```
DESIGN PARAMETERS

Target: Remove 95% of common pesticides
Flow rate: 50 m³/day
Pesticide concentration: 10-100 μg/L (various)

SYSTEM CONFIGURATION:

Feed ──→ [H₂O₂ Dosing] ──→ [UV Reactor] ──→ [Quenching] ──→ Product
            │                    │               │
        H₂O₂ (50 mg/L)      254 nm lamps      Catalase or
                            Medium pressure    Sodium thiosulfate
                            1000 mJ/cm²       (Remove residual H₂O₂)

UV REACTOR DESIGN:
├─ Lamp configuration: 6 × 150W medium-pressure
├─ Reactor volume: 400 L
├─ Hydraulic retention time: 12 minutes
├─ UV dose: 1000 mJ/cm² (effective)
├─ Transmittance requirement: >70%
└─ Lamp replacement: Annual

CHEMISTRY:
H₂O₂ + UV (254 nm) → 2•OH
•OH + Pesticide → Degradation products → CO₂ + H₂O + Minerals

PERFORMANCE:
├─ Glyphosate: >99% removal
├─ Organophosphates: >95% removal
├─ Neonicotinoids: >90% removal
├─ Fungicides (various): 80-95% removal
└─ TOC reduction: 40-60%

ECONOMICS:
├─ Capital cost: $45,000
├─ Energy (lamps + pumping): 0.8 kWh/m³
├─ H₂O₂ consumption: 50 mg/L × 50 m³/d = 2.5 kg/day
├─ H₂O₂ cost: $1.50/kg → $3.75/day → $1,370/year
├─ Electricity: $0.12/kWh × 0.8 × 50 × 365 = $1,750/year
├─ Lamp replacement: $3,000/year
└─ TOTAL OPEX: $6,120/year ($0.33/m³)
```

### 4.3 Ozonation System

**Process Flow:**
```
OZONE GENERATION & CONTACTING

Air or O₂ ──→ [Ozone Generator] ──→ [Contact Chamber] ──→ Off-gas
              (Corona discharge)      (Bubble diffusion)    treatment
              5-12% O₃ (oxygen)           ↑                   │
              1-3% O₃ (air)               │                   ↓
                                          │              [Ozone
                                     Water flow          destruct]
                                          │                   │
                                          ↓                   ↓
                                    Treated water        Safe exhaust

OZONE DOSE CALCULATION:

Target: 2 mg/L residual for 5 min contact time
Water flow: 100 m³/day
COD: 80 mg/L (ozone demand)

Ozone requirement:
├─ COD oxidation: 0.5 × 80 = 40 mg/L
├─ Residual: 2 mg/L
├─ Decomposition: 3 mg/L
└─ TOTAL: 45 mg/L

Daily ozone: 45 mg/L × 100 m³/d = 4.5 kg/day

Generator sizing:
├─ Production rate: 200 g O₃/hr (with safety factor)
├─ Energy efficiency: 10-15 kWh/kg O₃
├─ Power requirement: 2-3 kW continuous
└─ Oxygen source: PSA generator or liquid O₂

CONTACT CHAMBER:
├─ Volume: 8 m³ (5 min HRT)
├─ Depth: 4 m (counter-current flow)
├─ Diffuser: Fine bubble (efficiency >90%)
└─ Material: Stainless steel (ozone-resistant)

SAFETY FEATURES:
├─ Ozone monitoring (ambient air)
├─ Leak detection system
├─ Off-gas destruction (thermal or catalytic)
├─ Automatic shutdown on alarm
└─ Personal protection equipment

ADVANTAGES:
├─ Broad-spectrum disinfection
├─ Oxidizes micro-pollutants
├─ No chemical residuals
├─ Improves biodegradability (COD/BOD ratio)
└─ Flocculation enhancement

LIMITATIONS:
├─ Short half-life in water (20 min)
├─ Bromate formation risk (if bromide present)
├─ High capital and operating costs
├─ Complex operation and maintenance
└─ Safety hazards (toxic gas)
```

---

## 5. Biological Treatment & Constructed Wetlands

### 5.1 Constructed Wetland Design

**Horizontal Subsurface Flow Wetland:**
```
SYSTEM LAYOUT (Plan View)

Inlet ──→ ┌──────────────────────────────────────┐ ──→ Outlet
          │  ╔════════════════════════════════╗  │
          │  ║ Gravel/Sand Media (0.6m deep)  ║  │
          │  ║                                ║  │
          │  ║  Vegetation: Phragmites,       ║  │
          │  ║  Typha, Scirpus                ║  │
          │  ║                                ║  │
          │  ║  Water level: 0.5m below       ║  │
          │  ║  surface (subsurface flow)     ║  │
          │  ╚════════════════════════════════╝  │
          └──────────────────────────────────────┘
          ← ─────── Length (20-40 m) ─────── →
          ↕
        Width (10-20 m)

CROSS-SECTION:

Surface ─────────────────────────────────────────
         ╱╲    ╱╲    ╱╲    ╱╲    ╱╲
        ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲  ╱  ╲  ← Plants
       ╱    ╲╱    ╲╱    ╲╱    ╲╱    ╲
═══════════════════════════════════════════ ← Water level
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ← Gravel (2-5cm)
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ ← Sand (fine)
═══════════════════════════════════════════ ← Liner (HDPE)
         ↑                    ↑
    Root zone          Anaerobic zone

DESIGN PARAMETERS:
┌─────────────────────────────────────────────────┐
│ Hydraulic loading rate: 0.05-0.15 m/day         │
│ Hydraulic retention time: 3-7 days              │
│ Aspect ratio (L:W): 2:1 to 4:1                  │
│ Media depth: 0.5-0.8 m                          │
│ Media porosity: 35-40%                          │
│ Bed slope: 0.5-1%                               │
│ Plant density: 4-8 plants/m²                    │
└─────────────────────────────────────────────────┘

SIZING EXAMPLE (50 m³/day greenhouse drainage):

Area required:
A = Q / (q × efficiency factor)
A = 50 m³/d / (0.10 m/d × 0.8) = 625 m²

Dimensions:
├─ Length: 40 m
├─ Width: 15.6 m
├─ Depth: 0.7 m (0.6 m media + 0.1 m freeboard)
└─ Volume: 437 m³ (media volume)

HRT = Volume × Porosity / Flow
HRT = 437 × 0.38 / 50 = 3.3 days

TREATMENT PERFORMANCE:
├─ BOD removal: 70-90%
├─ TSS removal: 80-95%
├─ Total N removal: 40-60%
├─ Total P removal: 20-40%
├─ Pathogen reduction: 1-2 log
└─ Heavy metal uptake: 30-70%

COSTS:
├─ Excavation: $8,000
├─ Liner (HDPE): $12,000
├─ Media: $15,000
├─ Plants: $3,000
├─ Plumbing & structures: $7,000
├─ TOTAL CAPEX: $45,000
├─ Annual O&M: $2,000 (minimal)
└─ Unit cost: $0.11/m³ (amortized over 20 years)
```

### 5.2 Floating Treatment Wetlands (FTWs)

**Innovative Application:**
```
FLOATING TREATMENT WETLAND

Applicable to existing ponds/lagoons
No excavation required

┌─────────────────────────────────────────┐
│     Water surface                        │
│  ╔══════════════════════════════╗       │
│  ║ Floating Mat (recycled      ║       │
│  ║ plastic, foam, etc.)         ║       │
│  ╚═══════════╤══════════════════╝       │
│     ╱╲      ╱│╲      ╱╲                 │
│    ╱  ╲    ╱ │ ╲    ╱  ╲     ← Plants   │
│   ╱    ╲  ╱  │  ╲  ╱    ╲               │
│  │      │ │  │   ││      │              │
│  │Roots │ │Roots│  │ Roots│             │
│  │ hang │ │ in  │  │ hang │             │
│  │ in   │ │water│  │ in   │             │
│  │water │ │     │  │water │             │
│  └──────┘ └─────┘  └──────┘             │
│                                          │
│  Biofilm forms on roots                  │
│  Microbial treatment occurs              │
│                                          │
└─────────────────────────────────────────┘

ADVANTAGES:
├─ Retrofit existing water bodies
├─ No land required
├─ Aesthetic appeal
├─ Wildlife habitat
├─ Modular and scalable
└─ Low cost

COVERAGE:
├─ Typical: 10-30% of pond surface
├─ For 1000 m² pond: 100-300 m² FTW
├─ Unit cost: $150-250/m²
└─ Expected life: 10-15 years

PLANT SPECIES:
├─ Water hyacinth (warm climates)
├─ Cattails (Typha)
├─ Bulrushes (Scirpus)
├─ Cannas
└─ Native species preferred
```

---

## 6. Disinfection Systems

### 6.1 UV Disinfection

**Medium-Pressure UV System:**
```
UV DOSE-RESPONSE

Target: 4-log (99.99%) inactivation

ORGANISM         UV DOSE (mJ/cm²) for 4-log Inactivation
───────────────────────────────────────────────────────────
E. coli          20-30 mJ/cm²
Total Coliforms  25-35 mJ/cm²
Salmonella       20-30 mJ/cm²
Legionella       15-25 mJ/cm²
Giardia cysts    10-20 mJ/cm²
Cryptosporidium  10-15 mJ/cm² (highly UV-sensitive)
Viruses          50-100 mJ/cm² (varies by type)
Bacterial spores 50-100 mJ/cm² (more resistant)

DESIGN DOSE: 40 mJ/cm² (includes safety factor)

SYSTEM SPECIFICATION (100 m³/day):

Lamp Configuration:
├─ Type: Medium-pressure mercury vapor
├─ Number: 4 lamps
├─ Power: 120W per lamp
├─ Wavelength: Broad spectrum (200-400 nm)
├─ Lamp life: 8,000-12,000 hours (~1-1.5 years)
└─ UV output: 30-35% electrical to UV conversion

Reactor Design:
├─ Configuration: Closed vessel, horizontal flow
├─ Chamber volume: 150 L
├─ Flow velocity: 0.3-0.5 m/s
├─ Hydraulic retention: ~2 minutes
├─ Quartz sleeves: 4 (protect lamps, easy cleaning)
└─ Material: Stainless steel 316

Control System:
├─ UV intensity sensor: Continuous monitoring
├─ Flow meter: Dose calculation (intensity × time)
├─ Alarm: Low UV intensity, lamp failure
├─ Auto-shutoff: If dose falls below setpoint
└─ Data logging: Compliance documentation

OPERATING REQUIREMENTS:
├─ Pre-filtration: <5 NTU turbidity
│   (Particles shield pathogens from UV)
├─ UV transmittance: >75% at 254 nm
│   (Dissolved organics absorb UV)
├─ Lamp cleaning: Monthly (fouling by minerals)
├─ Quartz sleeve cleaning: Monthly
└─ Power consumption: 0.05-0.1 kWh/m³

VALIDATION:
├─ Bioassay testing (challenge with indicators)
├─ Third-party certification (NSF, ÖNORM)
├─ Regular monitoring of UV sensors
└─ Annual calibration

COSTS:
├─ Equipment: $35,000
├─ Installation: $8,000
├─ Annual lamp replacement: $3,000
├─ Energy: $450/year
├─ Maintenance: $1,500/year
└─ TOTAL OPEX: $4,950/year ($0.14/m³)
```

### 6.2 Chlorination

**Sodium Hypochlorite Dosing:**
```
CHLORINE DISINFECTION CHEMISTRY

NaOCl → Na⁺ + OCl⁻
OCl⁻ + H⁺ ⇌ HOCl (hypochlorous acid, primary disinfectant)

At pH 7.5: ~50% HOCl, 50% OCl⁻
At pH 6.5: ~90% HOCl (more effective)

DESIGN CRITERIA:

Free chlorine residual: 1-2 mg/L
Contact time: 30 minutes
CT value: 30-60 mg·min/L (for 4-log virus inactivation)

DOSING SYSTEM:

┌────────────┐
│ NaOCl Tank │ (12.5% concentration)
│  (500 L)   │
└──────┬─────┘
       │
   [Metering Pump] ──→ Injection point
       ↑
  [Flow Signal] ←── Flow meter
       ↑
  [Residual Signal] ←── Chlorine analyzer
                         (feedback control)

SIZING EXAMPLE (50 m³/day):

Chlorine demand:
├─ Demand (oxidize organics): 3 mg/L
├─ Residual: 2 mg/L
└─ TOTAL: 5 mg/L

Daily NaOCl (12.5%):
= 5 mg/L × 50,000 L/day ÷ 125,000 mg/L
= 2.0 L/day

Tank size: 500 L (250 days supply)

CONTACT CHAMBER:
├─ Volume: 1.0 m³ (30 min at 50 m³/day)
├─ Configuration: Serpentine flow (plug flow)
├─ Material: PVC or concrete (chlorine-resistant)
└─ Monitoring: Inlet/outlet Cl₂ residual

DECHLORINATION (if needed for irrigation):
Sodium thiosulfate dosing
Na₂S₂O₃ + 4Cl₂ + 5H₂O → 2NaHSO₄ + 8HCl

Dose: 3 mg Na₂S₂O₃ per 1 mg Cl₂ residual

ADVANTAGES:
├─ Low capital cost
├─ Proven technology
├─ Residual protection
├─ Easy to implement
└─ Effective against most pathogens

DISADVANTAGES:
├─ Disinfection byproducts (THMs, HAAs)
├─ Requires dechlorination for sensitive crops
├─ Corrosive handling
├─ pH dependent effectiveness
└─ Less effective against Cryptosporidium

SAFETY:
├─ Proper ventilation (Cl₂ gas release risk)
├─ Secondary containment for NaOCl storage
├─ Personal protective equipment
├─ Emergency eyewash/shower
└─ Spill response kit
```

---

## 7. Real-Time Monitoring & Control

### 7.1 Critical Control Points

**HACCP-Based Approach for Water Reuse:**
```
HAZARD ANALYSIS & CRITICAL CONTROL POINTS

CCP 1: SOURCE WATER QUALITY
├─ Hazard: Excessive contamination
├─ Monitor: Turbidity, EC, pH
├─ Frequency: Continuous
├─ Critical Limit: Turbidity <50 NTU
├─ Action: Divert to waste if exceeded
└─ Record: Automated data logging

CCP 2: FILTRATION PERFORMANCE
├─ Hazard: Filter breakthrough
├─ Monitor: Effluent turbidity, pressure differential
├─ Frequency: Continuous
├─ Critical Limit: <5 NTU, ΔP <15 psi
├─ Action: Backwash cycle, alarm
└─ Record: Filter run time, backwash events

CCP 3: DISINFECTION EFFICACY
├─ Hazard: Pathogen survival
├─ Monitor: UV dose (intensity × time) OR Cl₂ residual
├─ Frequency: Continuous
├─ Critical Limit: >40 mJ/cm² OR >1 mg/L free Cl₂
├─ Action: Increase dose, reduce flow, alarm
└─ Record: Dose delivered, residual concentration

CCP 4: TREATED WATER QUALITY
├─ Hazard: Non-compliance with targets
├─ Monitor: Online sensors + periodic lab testing
├─ Frequency: Continuous (sensors), Daily (lab)
├─ Critical Limit: EC <2.0 dS/m, pathogens non-detect
├─ Action: Divert to waste, system shutdown
└─ Record: Quality data, lab reports

CCP 5: DISTRIBUTION SYSTEM
├─ Hazard: Recontamination, regrowth
├─ Monitor: Residual disinfectant, biofilm indicators
├─ Frequency: Daily
├─ Critical Limit: Cl₂ residual >0.2 mg/L at endpoints
├─ Action: System flushing, booster disinfection
└─ Record: Residual measurements, flushing logs
```

### 7.2 Sensor Network & SCADA

**Integrated Monitoring System:**
```
SENSOR DEPLOYMENT

┌─────────────────────────────────────────────────────────┐
│                  WATER TREATMENT SYSTEM                  │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  [Raw Water]──(S1)──[Filter]──(S2)──[UV]──(S3)──[Storage]│
│                                                          │
│  Sensor S1 (Inlet):              Sensor S2 (Post-filter):│
│  ├─ Turbidity                    ├─ Turbidity            │
│  ├─ pH                           ├─ Pressure differential│
│  ├─ EC                           ├─ Flow rate            │
│  ├─ Temperature                  └─ Particle counter     │
│  └─ Flow rate                        (optional)          │
│                                                          │
│  Sensor S3 (Post-UV):            Tank Monitoring:        │
│  ├─ UV intensity                 ├─ Level                │
│  ├─ UV transmittance             ├─ Residual Cl₂        │
│  ├─ Calculated dose              ├─ EC                   │
│  └─ Turbidity                    └─ Temperature          │
│                                                          │
└─────────────────────────────────────────────────────────┘
                         ↓
              ┌──────────────────┐
              │   PLC / RTU      │
              │ (Data acquisition│
              │  & control logic)│
              └─────────┬────────┘
                        ↓
              ┌──────────────────┐
              │   SCADA Server   │
              │ • Data historian │
              │ • Visualization  │
              │ • Alarming       │
              │ • Reporting      │
              └─────────┬────────┘
                        ↓
          ┌─────────────┴──────────────┐
          ↓                            ↓
    ┌──────────┐                ┌──────────┐
    │Operator  │                │ Mobile   │
    │ Station  │                │ Alerts   │
    └──────────┘                └──────────┘

COMMUNICATION ARCHITECTURE:
├─ Sensor to PLC: 4-20 mA analog, Modbus RTU
├─ PLC to SCADA: Ethernet/IP, OPC UA
├─ SCADA to Cloud: HTTPS, MQTT
├─ Alert delivery: Email, SMS, push notifications
└─ Redundancy: Dual communication paths (critical)

ALARM MANAGEMENT:
┌──────────────────────────────────────────┐
│ Priority 1 (Critical):                   │
│ ├─ UV dose <40 mJ/cm² → Immediate       │
│ ├─ High turbidity breakthrough          │
│ └─ Action: Auto-shutdown, SMS alert     │
│                                          │
│ Priority 2 (Warning):                    │
│ ├─ UV dose 40-50 mJ/cm² (marginal)      │
│ ├─ Filter ΔP approaching limit          │
│ └─ Action: Email notification           │
│                                          │
│ Priority 3 (Advisory):                   │
│ ├─ Lamp hours approaching replacement   │
│ ├─ Chemical inventory low                │
│ └─ Action: Dashboard flag               │
└──────────────────────────────────────────┘

DATA RETENTION:
├─ Real-time: 1-second resolution, 7 days
├─ Historical: 1-minute averages, 1 year
├─ Aggregated: Hourly/daily summaries, 5 years
├─ Compliance reports: Permanent archive
└─ Storage: Local + cloud backup
```

### 7.3 Automated Control Logic

**Example: UV Dose Control**
```
CONTROL ALGORITHM (Pseudocode)

// Inputs
UVI = UV_Intensity_Sensor.value      // mW/cm²
Flow = Flowmeter.value                // m³/hr
UVT = UV_Transmittance.value          // %

// Calculate required UV dose
Target_Dose = 40                      // mJ/cm²
Safety_Factor = 1.2

// Calculate actual dose delivered
Path_Length = 0.10                    // m (reactor geometry)
Dose_Delivered = (UVI × UVT/100 × Path_Length × 3600) / Flow

// Control logic
IF Dose_Delivered < (Target_Dose × Safety_Factor) THEN
    // Dose too low - take corrective action
    IF Flow > 4.0 m³/hr THEN
        // Reduce flow to increase retention time
        Control_Valve.setpoint = (UVI × UVT/100 × Path_Length × 3600) / (Target_Dose × Safety_Factor)
        Log_Event("Flow reduced to achieve dose")
    ELSE
        // Flow already at minimum, can't reduce further
        Alarm("Critical: UV dose insufficient", Priority=1)
        Divert_Valve.position = "Waste"
        Log_Event("Water diverted - insufficient UV dose")
    END IF

ELSE IF Dose_Delivered > (Target_Dose × 2) THEN
    // Over-dosing - increase flow to maximize throughput
    IF Flow < 8.0 m³/hr THEN
        Control_Valve.setpoint = MIN(8.0, (UVI × UVT/100 × Path_Length × 3600) / (Target_Dose × Safety_Factor))
        Log_Event("Flow increased - excess UV capacity")
    END IF

ELSE
    // Dose within acceptable range
    Divert_Valve.position = "Product"
END IF

// Lamp maintenance prediction
IF Lamp_Hours > 10000 THEN
    Advisory("UV lamp replacement due soon")
END IF

// UVT too low - fouling or high organics
IF UVT < 70 THEN
    Warning("Low UV transmittance - check water quality or clean lamps")
END IF
```

---

## 8. Regulatory Compliance & Risk Management

### 8.1 Water Reuse Regulations

**Regulatory Framework Examples:**
```
┌──────────────────────────────────────────────────────────┐
│           WATER REUSE GUIDELINES & STANDARDS              │
├──────────────────────────────────────────────────────────┤
│                                                           │
│ International:                                            │
│ ├─ WHO Guidelines for Wastewater Use in Agriculture      │
│ ├─ ISO 16075 (Irrigation with treated wastewater)        │
│ └─ FAO Water Quality for Agriculture                     │
│                                                           │
│ Regional:                                                 │
│ ├─ EU Water Framework Directive                          │
│ ├─ EU Minimum Requirements for Water Reuse (2020/741)    │
│ └─ State/Provincial regulations (vary widely)            │
│                                                           │
│ National (Examples):                                      │
│ ├─ USA: EPA Guidelines, State-specific (CA Title 22,     │
│ │        FL, etc.)                                        │
│ ├─ Australia: NRMMC Guidelines                            │
│ ├─ Singapore: NEWater standards                           │
│ └─ Israel: Public Health Regulations                      │
│                                                           │
└──────────────────────────────────────────────────────────┘

EU WATER REUSE CATEGORIES (Regulation 2020/741):

┌────────┬─────────────────┬──────────┬────────────────┐
│Category│ Use             │E. coli   │ Treatment      │
│        │                 │(CFU/100mL│ Required       │
├────────┼─────────────────┼──────────┼────────────────┤
│   A    │All food crops   │≤10       │Secondary +     │
│        │                 │          │Filtration +    │
│        │                 │          │Disinfection    │
├────────┼─────────────────┼──────────┼────────────────┤
│   B    │Food crops       │≤100      │Secondary +     │
│        │(processed, not  │          │Disinfection    │
│        │eaten raw)       │          │                │
├────────┼─────────────────┼──────────┼────────────────┤
│   C    │Industrial &     │≤1,000    │Secondary       │
│        │energy crops     │          │                │
├────────┼─────────────────┼──────────┼────────────────┤
│   D    │Non-food crops   │≤10,000   │Secondary       │
│        │                 │          │                │
└────────┴─────────────────┴──────────┴────────────────┘

Additional requirements:
├─ BOD: ≤10 mg/L (Category A)
├─ TSS: ≤10 mg/L (Category A)
├─ Turbidity: ≤5 NTU (Category A)
└─ Legionella: <1,000 CFU/L (spray/aerosol irrigation)
```

### 8.2 Risk Assessment Framework

**Quantitative Microbial Risk Assessment (QMRA):**
```
QMRA STEPS

1. HAZARD IDENTIFICATION
   ├─ Identify pathogens of concern
   │   ├─ Bacteria: E. coli O157:H7, Salmonella, Campylobacter
   │   ├─ Viruses: Norovirus, Rotavirus, Hepatitis A
   │   └─ Protozoa: Giardia, Cryptosporidium
   └─ Determine presence in source water

2. EXPOSURE ASSESSMENT
   ├─ Pathogen concentration in treated water
   │   C_treated = C_source × (1 - Removal_efficiency)
   ├─ Volume ingested/inhaled per exposure event
   ├─ Frequency of exposure
   └─ Population exposed

3. DOSE-RESPONSE
   ├─ Use published dose-response models
   │   Example (Exponential model):
   │   P(infection) = 1 - exp(-r × Dose)
   │   where r = infectivity parameter
   └─ Organism-specific parameters

4. RISK CHARACTERIZATION
   ├─ Calculate annual infection risk
   │   Risk = P(infection per event) × Events per year
   ├─ Compare to benchmark (e.g., WHO: 10⁻⁴ per year)
   └─ Uncertainty analysis (Monte Carlo simulation)

EXAMPLE CALCULATION:

Scenario: Greenhouse worker, spray irrigation

Input data:
├─ Pathogen: Norovirus
├─ Source concentration: 10⁵ genomic copies/L
├─ Treatment: UV + Chlorination (5-log reduction)
├─ Treated water concentration: 1 genomic copy/L
├─ Exposure: Inhalation of aerosols, 1 mL/event
├─ Frequency: 100 events/year
├─ Dose-response parameter (r): 0.04

Calculation:
Dose per event = 1 copy/L × 0.001 L = 0.001 copies
P(infection per event) = 1 - exp(-0.04 × 0.001) = 4 × 10⁻⁵
Annual risk = 4 × 10⁻⁵ × 100 = 4 × 10⁻³ (0.4%)

Comparison to benchmark:
├─ Calculated risk: 4 × 10⁻³
├─ WHO benchmark: 10⁻⁴
└─ CONCLUSION: Risk EXCEEDS acceptable level

Mitigation options:
├─ Increase treatment (additional log reduction)
├─ Switch to subsurface irrigation (reduce exposure)
├─ Restrict access during/after irrigation
└─ Personal protective equipment
```

### 8.3 Operational Monitoring Plan

**Compliance Monitoring Schedule:**
```
PARAMETER            FREQUENCY    METHOD           LIMIT

CONTINUOUS MONITORING:
├─ Flow rate         Real-time    Flow meter       Per design
├─ UV dose           Real-time    UV sensors       >40 mJ/cm²
├─ Turbidity         Real-time    Turbidimeter     <5 NTU
├─ pH                Real-time    pH probe         5.5-8.0
└─ EC                Real-time    EC probe         <2.0 dS/m

DAILY MONITORING:
├─ E. coli           Daily        Rapid test       <10 CFU/100mL
│                                 (Colilert)
├─ Free chlorine     Daily        DPD colorimetry  >1 mg/L
│   (if used)
└─ Visual inspection Daily        Operator         No issues

WEEKLY MONITORING:
├─ E. coli           Weekly       Lab culture      <10 CFU/100mL
│   (confirmation)                (membrane filter)
├─ Turbidity (lab)   Weekly       Nephelometer     <5 NTU
├─ TSS               Weekly       Gravimetric      <10 mg/L
└─ BOD               Weekly       5-day BOD        <10 mg/L

MONTHLY MONITORING:
├─ Nutrients (N,P,K) Monthly      IC, ICP-OES      Variable
├─ Heavy metals      Monthly      ICP-MS           Regulatory
├─ Total coliforms   Monthly      Lab culture      <100 CFU/100mL
├─ Intestinal        Monthly      Lab culture      <10 CFU/100mL
│   enterococci
└─ Legionella        Monthly      Culture/PCR      <1,000 CFU/L
    (if aerosol risk)

QUARTERLY MONITORING:
├─ Helminth eggs     Quarterly    Microscopy       <1 egg/L
├─ Salmonella        Quarterly    Culture          Absent
├─ Organic micro-    Quarterly    GC-MS, LC-MS     Risk-based
│   pollutants                    (if source risk)
└─ Full chemical     Quarterly    Multiple         Irrigation
    panel                         methods          standards

REPORTING:
├─ Daily logs: Operator records
├─ Monthly reports: Summary to management
├─ Quarterly reports: Regulatory submission (if required)
├─ Annual report: Comprehensive performance review
└─ Immediate reporting: Any exceedances or failures
```

---

## 9. Economics & Lifecycle Assessment

### 9.1 Cost-Benefit Analysis Example

**Medium-Scale Greenhouse (10,000 m²):**
```
BASELINE: Municipal water supply
Annual water use: 30,000 m³
Water cost: $1.50/m³
Annual cost: $45,000

CIRCULAR OPTION: Drainage reclamation
Drainage flow: 20,000 m³/year (67% of water use)
Recovery target: 90%
Treated water: 18,000 m³/year

TREATMENT SYSTEM COSTS:

Capital Expenditure:
├─ Screening & settling: $15,000
├─ Sand filtration: $35,000
├─ UV disinfection: $25,000
├─ Storage tank (100 m³): $18,000
├─ Pumps & controls: $22,000
├─ Installation: $25,000
└─ TOTAL CAPEX: $140,000

Annual Operating Costs:
├─ Energy (0.4 kWh/m³ × 18,000): $1,080
├─ Consumables (filters, UV lamp): $4,200
├─ Maintenance: $3,500
├─ Labor (part-time): $6,000
├─ Monitoring/testing: $2,500
└─ TOTAL OPEX: $17,280/year

BENEFITS:

Water savings:
├─ Recycled water: 18,000 m³/year
├─ Value at municipal rate: $27,000/year
└─ Net savings (after OPEX): $9,720/year

Nutrient savings:
├─ Retained nutrients in recycled water
├─ Fertilizer cost reduction: ~15%
└─ Annual value: $6,000

Wastewater discharge savings:
├─ Avoided discharge fees: $2,500/year
├─ Avoided environmental penalties: $0-5,000/year
└─ Annual value: $2,500/year

Total Annual Benefit: $18,220/year

FINANCIAL METRICS:
├─ Simple payback: 140,000 / 18,220 = 7.7 years
├─ NPV (10 years, 6% discount): $26,850
├─ IRR: 8.2%
└─ Benefit-cost ratio: 1.19

SENSITIVITY ANALYSIS:
High water cost ($2.50/m³):
├─ Annual benefit: $33,220
├─ Payback: 4.2 years
└─ NPV: $115,650

Low recovery (80%):
├─ Annual benefit: $16,000
├─ Payback: 8.8 years
└─ NPV: $12,100
```

### 9.2 Life Cycle Assessment

**Environmental Impact Comparison:**
```
FUNCTIONAL UNIT: 1,000 m³ irrigation water supply

SCENARIO A: Municipal water supply
├─ Groundwater extraction
├─ Treatment (chlorination)
├─ Pumping & distribution

SCENARIO B: Reclaimed drainage water
├─ Collection from greenhouse drains
├─ Treatment (filtration + UV)
├─ Recirculation

IMPACT CATEGORIES:

Climate Change (kg CO₂-eq):
├─ Scenario A: 350 (electricity for pumping + treatment)
├─ Scenario B: 180 (electricity for reclamation system)
└─ Reduction: 49%

Water Depletion (m³):
├─ Scenario A: 1,000 (virgin water withdrawal)
├─ Scenario B: 150 (makeup water only)
└─ Reduction: 85%

Eutrophication Potential (kg PO₄-eq):
├─ Scenario A: 2.5 (discharge of drainage water)
├─ Scenario B: 0.3 (minimal discharge)
└─ Reduction: 88%

Acidification (kg SO₂-eq):
├─ Scenario A: 1.2
├─ Scenario B: 0.8
└─ Reduction: 33%

Cumulative Energy Demand (MJ):
├─ Scenario A: 2,800
├─ Scenario B: 1,600
└─ Reduction: 43%

OVERALL: Reclamation scenario shows significant
environmental benefits across all impact categories.

Caveat: Benefits depend on energy source mix.
With 100% renewable electricity, benefits amplified.
```

---

## Summary

Advanced water reclamation and reuse technologies are essential for circular agricultural systems, offering significant economic and environmental benefits. Success requires careful system design, multi-barrier treatment approaches, rigorous monitoring, and regulatory compliance.

**Key Takeaways:**
1. Multi-barrier treatment ensures water safety through redundancy
2. Membrane filtration provides reliable pathogen and particle removal
3. Advanced oxidation effectively degrades micro-pollutants
4. Biological treatment offers low-cost, sustainable options
5. Real-time monitoring and control enable safe, optimized operations
6. Regulatory compliance requires comprehensive risk assessment
7. Economics favor water reuse, especially in water-scarce regions
8. Life cycle benefits extend beyond direct water savings

**Implementation Checklist:**
- [ ] Characterize source water quality comprehensively
- [ ] Define treatment objectives based on use requirements
- [ ] Design multi-barrier treatment system
- [ ] Implement real-time monitoring at critical control points
- [ ] Establish operational protocols and maintenance schedules
- [ ] Develop risk management and contingency plans
- [ ] Ensure regulatory compliance and documentation
- [ ] Train operators and maintain quality assurance
- [ ] Monitor performance and optimize continuously

---

## Further Reading

1. Asano, T., et al. (2007). "Water Reuse: Issues, Technologies, and Applications"
2. Lazarova, V. & Bahri, A. (2005). "Water Reuse for Irrigation: Agriculture, Landscapes, and Turf Grass"
3. WHO (2006). "Guidelines for the Safe Use of Wastewater, Excreta and Greywater"
4. Metcalf & Eddy (2014). "Wastewater Engineering: Treatment and Resource Recovery"
5. Van der Hoek, J.P., et al. (2018). "Towards a Water-Wise World: Innovations in Water Reuse"

---

*End of Lesson 4*
