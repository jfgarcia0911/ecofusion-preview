# Handouts 2 & 3: Technical References

## Handout 2: Technology Selection Matrices

### Water Treatment Technology Comparison

| Technology | Removal Efficiency | Energy (kWh/m³) | Capital Cost | O&M | Best Application |
|------------|-------------------|-----------------|--------------|-----|------------------|
| **Sand Filtration** | TSS: 80-95% | 0.05-0.10 | $ | Low | Pre-treatment, particle removal |
| **Microfiltration (MF)** | TSS: >99%, Bacteria: 99.9% | 0.15-0.30 | $$ | Med | Turbidity, bacteria |
| **Ultrafiltration (UF)** | Virus: 99.99%, Colloids: 100% | 0.20-0.40 | $$$ | Med | Pathogen removal |
| **Nanofiltration (NF)** | Divalent ions: 90-98% | 0.40-0.80 | $$$$ | Med-High | Hardness, organics |
| **Reverse Osmosis (RO)** | All dissolved solids: >95% | 0.8-2.0 | $$$$$ | High | Desalination, high TDS |
| **UV Disinfection** | Pathogens: 99.99-99.9999% | 0.02-0.08 | $$ | Low | Final disinfection |
| **Ozonation** | Oxidation, disinfection | 0.15-0.30 | $$$$ | High | Micropollutants, color |
| **Activated Carbon** | Organics: 70-95% | 0.05-0.10 | $$$ | Med | Taste, odor, pesticides |
| **Constructed Wetland** | BOD: 70-90%, Nutrients: 40-60% | 0 | $ | Low | Polishing, natural treatment |

**Cost Legend**: $ = <$300/m³ capacity, $$ = $300-800, $$$ = $800-1,500, $$$$ = $1,500-3,000, $$$$$ = >$3,000

---

### Nutrient Recovery Technology Comparison

| Technology | Target Nutrient | Recovery Efficiency | Product | Capital Cost | Energy Use |
|------------|----------------|---------------------|---------|--------------|------------|
| **Struvite Precipitation** | P (+ some N) | 70-90% P | MgNH₄PO₄·6H₂O (slow-release fertilizer) | $$ | Low |
| **Ammonia Stripping** | N (ammonia) | 70-90% N | (NH₄)₂SO₄ or NH₄NO₃ | $$$ | Medium-High |
| **Ion Exchange** | N, P (selective) | 80-95% | Concentrated nutrient solution | $$$$ | Low |
| **Membrane Concentration** | All dissolved | 80-90% | Concentrated liquid fertilizer | $$$$$ | High |
| **Evaporation/Crystallization** | All nutrients | 85-95% | Solid fertilizer salts | $$$$ | High |
| **Biochar Loading** | Slow release all | 60-80% retention | Nutrient-enriched biochar | $ | Low (if using waste heat) |
| **Composting** | Organic matter + nutrients | 50-70% | Compost/soil amendment | $ | Low |

---

### Energy Recovery Technology Comparison

| Technology | Feedstock | Energy Efficiency | Products | Scale Range | Complexity |
|------------|-----------|-------------------|----------|-------------|------------|
| **Anaerobic Digestion + CHP** | Wet biomass (>60% moisture) | 60-80% (total) | Biogas→Elec (35-45%) + Heat (40-50%) | 10 kW - 5 MW | Medium |
| **Gasification + Engine** | Dry biomass (<30% moisture) | 50-70% (total) | Syngas→Elec (20-30%) + Heat (30-40%) | 50 kW - 10 MW | High |
| **Direct Combustion + Boiler** | Dry biomass | 80-90% (thermal) | Heat only | 100 kW - 50 MW | Low-Medium |
| **Pyrolysis** | Dry biomass | 70-85% (total) | Biochar (35%) + Bio-oil (35%) + Gas (25%) | 100 kg/hr - 10 t/hr | Medium-High |
| **Solar PV** | Solar radiation | 15-22% (panel efficiency) | Electricity only | 1 kW - 100+ MW | Low |
| **Solar Thermal** | Solar radiation | 50-70% (thermal) | Heat | 10 kW - 10 MW | Low-Medium |

---

## Handout 3: Process Flow Diagrams

### Complete Circular Greenhouse System

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    INTEGRATED CIRCULAR GREENHOUSE                        │
└─────────────────────────────────────────────────────────────────────────┘

PRODUCTION ZONE
┌──────────────────────────────────────────────────────────┐
│  Hydroponic Greenhouse (10,000 m²)                       │
│  ├─ Crop uptake: 2,500 kg N, 800 kg P, 3,500 kg K/yr   │
│  ├─ Water transpiration: 80,000 m³/yr                   │
│  └─ CO₂ uptake: 500 t/yr                                │
└──────────────────┬───────────────────────────────────────┘
                   │
        ┌──────────┼──────────┐
        │                     │
    [FRUIT]              [PLANT WASTE]
    500 t/yr             75 t/yr fresh
        │                     │
        ↓                     ↓
    TO MARKET       ┌──────────────────┐
                    │  Pre-treatment   │
                    │  • Shredding     │
                    │  • Screening     │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │ ANAEROBIC        │
                    │ DIGESTER         │
                    │ 80 m³, mesophilic│
                    │ HRT: 25 days     │
                    └────┬────────┬────┘
                         │        │
                    Biogas    Digestate
                    12 m³/d   3 m³/d
                         │        │
                         ↓        ↓
                    ┌─────────┐  ┌──────────────┐
                    │  Biogas │  │  Digestate   │
                    │ Cleaning│  │  Processing  │
                    │• H₂S rem│  │              │
                    │• Drying │  │              │
                    └────┬────┘  └──────┬───────┘
                         │              │
                         ↓              ├─> [Solid-Liquid Sep]
                    ┌─────────┐         │         │
                    │   CHP   │         │    ┌────┴─────┐
                    │  Unit   │         │    │          │
                    │  2 kWe  │         │  Solid    Liquid
                    └────┬────┘         │  Fraction  Fraction
                         │              │    │          │
                    ┌────┼────┐         │    ↓          ↓
                    │    │    │         │  Compost   ┌──────────┐
                 Elec  Heat  CO₂        │  60 t/yr   │ Struvite │
                  17    24   40 t/yr    │            │Precipit. │
                 MWh   MWh              │            └────┬─────┘
                  │     │     │         │                 │
                  └─────┼─────┼─────────┘             Struvite
                        │     │                      3 t P/yr
                        ↓     ↓                          │
                    ┌────────────┐                       │
                    │ GREENHOUSE │                       │
                    │  SYSTEMS   │                       │
                    │            │                       │
                    │ • Heating  │←──────────────────────┘
                    │ • Lighting │    (Fertilizer return)
                    │ • CO₂ inj. │
                    └─────┬──────┘
                          │
                    Drainage Water
                    18,000 m³/yr
                          │
                          ↓
                    ┌──────────────────┐
                    │ WATER TREATMENT  │
                    │ • Sand filter    │
                    │ • UF membrane    │
                    │ • UV disinfection│
                    └────────┬─────────┘
                             │
                        Treated Water
                        17,000 m³/yr (95% recovery)
                             │
                             ↓
                    ┌──────────────────┐
                    │  FERTIGATION     │
                    │   SYSTEM         │
                    │ (Nutrient dosing)│
                    └──────────────────┘
                             │
                             └──> Back to Greenhouse

MAKEUP INPUTS (Minimized):
├─ Fresh water: 5,000 m³/yr (vs. 100,000 baseline)
├─ Fertilizer: 40% of baseline
├─ Grid electricity: 30% of baseline
└─ CO₂: 50% of baseline

OUTPUTS (Products & Services):
├─ Fruit: 500 t/yr
├─ Compost: 60 t/yr
├─ Excess electricity: 3 MWh/yr (export)
└─ Carbon credits: 200 t CO₂e/yr
```

---

### Nutrient Recovery Process Detail

```
DIGESTATE PROCESSING FOR MAXIMUM NUTRIENT RECOVERY

Digestate (3 m³/day, 200 m³/year)
Composition: 4% TS, 60% VS of TS
N: 3 kg/m³ (total), P: 0.8 kg/m³, K: 2 kg/m³
│
↓
┌──────────────────────────────────────┐
│  STEP 1: SOLID-LIQUID SEPARATION     │
│  Technology: Screw press             │
│  Energy: 0.5 kWh/m³                  │
└───────────┬──────────────────────────┘
            │
    ┌───────┴────────┐
    │                │
 SOLID (20%)     LIQUID (80%)
 40 m³/yr        160 m³/yr
 P: 65%          P: 35%
 N: 25%          N: 75%
    │                │
    ↓                ↓
┌─────────┐    ┌──────────────────────┐
│COMPOST  │    │  STEP 2: STRUVITE    │
│OPERATION│    │  PRECIPITATION       │
│         │    │  • pH adjust to 9.0  │
│40 m³ →  │    │  • Mg dosing         │
│30 t     │    │  • Reaction: 20 min  │
│compost  │    │  • Settling          │
│         │    └───────┬──────────────┘
│P: 1.2%  │            │
│N: 1.8%  │      ┌─────┴──────┐
└─────────┘      │            │
                 │        Clarified
             Struvite    Liquid
             500 kg/yr   150 m³/yr
             (12.6% P)   N: 2.5 kg/m³
                 │            │
                 ↓            ↓
            [Product]   ┌──────────────────────┐
            Fertilizer  │ STEP 3: AMMONIA      │
                        │ STRIPPING            │
                        │ • pH to 10.5         │
                        │ • Air stripping      │
                        │ • H₂SO₄ absorption   │
                        └─────────┬────────────┘
                                  │
                            ┌─────┴──────┐
                            │            │
                      Amm. Sulfate   Treated Water
                      200 kg/yr      145 m³/yr
                      (21% N)        N: <50 mg/L
                            │              │
                            ↓              ↓
                       [Product]      [Discharge or
                       Fertilizer      irrigation]

MASS BALANCE SUMMARY:
Inputs (in digestate):
├─ N: 600 kg/yr, P: 160 kg/yr, K: 400 kg/yr

Recovered:
├─ N: 360 kg/yr (60%), P: 126 kg/yr (79%), K: 300 kg/yr (75% in compost)

Products:
├─ Compost: 30 t/yr (N: 1.8%, P: 1.2%, K: 1.0%)
├─ Struvite: 500 kg/yr (N: 5.7%, P: 12.6%, Mg: 9.9%)
├─ Ammonium sulfate: 200 kg/yr (N: 21%)

Value (@ market prices):
├─ Compost: $2,400/yr
├─ Struvite: $400/yr
├─ Ammonium sulfate: $120/yr
└─ TOTAL: $2,920/yr

vs. Disposal cost (baseline): $4,000/yr
NET BENEFIT: $6,920/yr

Investment: $95,000
Payback: 13.7 years (challenging—requires subsidy or higher product values)
```

---

### Water Treatment Multi-Barrier System

```
GREENHOUSE DRAINAGE WATER TREATMENT
Flow: 50 m³/day (18,000 m³/year)
Target: 95% recovery to irrigation standard

RAW DRAINAGE WATER
TSS: 35 mg/L, EC: 3.2 dS/m, pH: 6.5
NO₃-N: 180 mg/L, PO₄-P: 45 mg/L
E. coli: 10² CFU/100mL
│
↓
┌──────────────────────────────────────┐
│  BARRIER 1: SCREENING                │
│  100 mesh (150 μm)                   │
│  Removes: Large particles, debris    │
│  Energy: Minimal (gravity)           │
└────────────┬─────────────────────────┘
             │ TSS: 30 mg/L
             ↓
┌──────────────────────────────────────┐
│  BARRIER 2: SETTLING TANK            │
│  Volume: 10 m³ (HRT: 2 hours)        │
│  Removes: Settleable solids          │
│  Sludge: 2% of flow to waste         │
└────────────┬─────────────────────────┘
             │ TSS: 12 mg/L
             ↓
┌──────────────────────────────────────┐
│  BARRIER 3: RAPID SAND FILTER        │
│  Media: Graded sand & anthracite     │
│  Rate: 10 m/hr                       │
│  Backwash: Daily (5% water loss)     │
│  Removes: Fine suspended solids      │
└────────────┬─────────────────────────┘
             │ TSS: <3 mg/L, Turbidity: <2 NTU
             ↓
┌──────────────────────────────────────┐
│  BARRIER 4: ULTRAFILTRATION (opt.)   │
│  Membrane: 0.02 μm hollow fiber      │
│  Recovery: 92%                       │
│  Removes: Colloids, bacteria, viruses│
│  Energy: 0.3 kWh/m³                  │
└────────────┬─────────────────────────┘
             │ TSS: <0.5 mg/L, Turbidity: <0.1 NTU
             │ E. coli: <1 CFU/100mL (3-log removal)
             ↓
┌──────────────────────────────────────┐
│  BARRIER 5: UV DISINFECTION          │
│  Dose: 40 mJ/cm² (validated)         │
│  Lamps: Medium-pressure               │
│  Removes: 4-log pathogen reduction   │
│  Energy: 0.05 kWh/m³                 │
└────────────┬─────────────────────────┘
             │ E. coli: Non-detect
             │ All pathogens: >99.99% inactivation
             ↓
┌──────────────────────────────────────┐
│  BARRIER 6: STORAGE & MONITORING     │
│  Tank: 50 m³ (1-day capacity)        │
│  Monitoring:                         │
│  • Online EC, pH, turbidity          │
│  • Daily E. coli rapid test          │
│  • Weekly lab confirmation           │
│  Fail-safe: Divert to waste if alarm │
└────────────┬─────────────────────────┘
             │
             ↓
        TREATED WATER
        Ready for greenhouse irrigation
        Quality: Exceeds Category A (EU 2020/741)
             │
             ↓
        FERTIGATION SYSTEM
        Nutrients supplemented to crop needs

TREATMENT PERFORMANCE:
├─ Water recovery: 47.5 m³/day (95%)
├─ TSS removal: >98%
├─ Pathogen removal: >99.99% (4-log)
├─ Nutrients retained: >95% (for reuse)
├─ Energy use: 0.4 kWh/m³ total
└─ Operating cost: $0.35/m³

ECONOMICS:
├─ Capital: $180,000
├─ Annual OPEX: $6,300
├─ Water savings: 17,100 m³/yr @ $1.50 = $25,650/yr
├─ Net benefit: $19,350/yr
├─ Payback: 9.3 years
└─ With incentives (40% grant): 5.6 years payback
```

---

*Handouts 2 & 3 - Technical Reference - Course 408*
