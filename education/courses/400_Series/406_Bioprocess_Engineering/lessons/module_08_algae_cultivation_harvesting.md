# Module 8: Algae Cultivation and Harvesting

## Learning Objectives

By the end of this module, you will be able to:
- Understand algae biology and growth requirements
- Design photobioreactors for microalgae cultivation
- Calculate light delivery and CO₂ mass transfer requirements
- Optimize nutrient supply for algae production
- Select and design harvesting technologies
- Integrate algae systems in CEA facilities for multiple functions

## 8.1 Algae Fundamentals

### Types and Classification

**Microalgae (Unicellular):**

```
Group            Example Species       Characteristics            Applications
Chlorophyta      Chlorella vulgaris    High protein (50-60%)     Feed, supplements
(Green algae)    Haematococcus         Astaxanthin production    Nutraceuticals
                 Dunaliella salina     β-carotene production     Food coloring

Cyanobacteria    Spirulina platensis   High protein (60-70%)     Human food
(Blue-green)     Arthrospira           Phycocyanin              Food coloring
                 Anabaena              Nitrogen fixation         Biofertilizer

Bacillariophyta  Phaeodactylum         High lipids (20-50%)     Biodiesel
(Diatoms)        Cyclotella            Silica frustules         Aquaculture feed

Rhodophyta       Porphyridium          EPS production           Cosmetics
(Red algae)      Rhodella              Phycoerythrin           Food coloring
```

**Macroalgae (Multicellular Seaweeds):**

```
Type             Example                Application in CEA
Green (Ulva)     Sea lettuce           Biofilter, feed supplement
Brown (Laminaria) Kelp                 Biostimulant source
Red (Gracilaria)  Agar producer        Agar extraction, feed
```

### Growth Requirements

**Light:**

```
Photosynthesis equation:
6CO₂ + 6H₂O + Light energy → C₆H₁₂O₆ + 6O₂

Light parameters:
- Photosynthetically Active Radiation (PAR): 400-700 nm
- Light intensity: 50-300 μmol photons/m²/s (optimal)
- Photoperiod: 12-24 hours light/day
- Light saturation point: 200-400 μmol/m²/s (species dependent)

Light limitation factors:
- Self-shading at high cell density
- Pigment adaptation
- Photoinhibition (>500 μmol/m²/s)
```

**Carbon:**

```
CO₂ as carbon source:
- Requirement: ~1.8 kg CO₂ per kg biomass
- Dissolved CO₂: 50-150 mg/L optimal
- pH buffering: CO₂/HCO₃⁻/CO₃²⁻ system
- Can use flue gas CO₂ (5-15% CO₂)

Mass transfer challenge:
- Low CO₂ solubility in water
- pH rise as CO₂ consumed
- Need efficient gas transfer
```

**Nutrients:**

```
Macronutrients (mg/L):
- Nitrogen: 50-300 (as NO₃⁻, NH₄⁺, or urea)
- Phosphorus: 5-50 (as PO₄³⁻)
- Sulfur: 10-50
- Potassium: 10-50
- Magnesium: 5-20
- Calcium: 10-50

Micronutrients (μg/L):
- Iron: 500-5000
- Manganese: 50-500
- Zinc: 10-100
- Copper: 5-50
- Molybdenum: 1-10
- Boron: 50-500

N:P ratio typically 7-16:1 (by weight)
Redfield ratio C:N:P = 106:16:1 (molar)
```

### Growth Kinetics

**Specific Growth Rate:**

```
μ = (1/X) × (dX/dt)

Exponential phase:
X(t) = X₀ × e^(μt)

Doubling time: td = ln(2)/μ

Typical μmax values (day⁻¹):
- Chlorella: 0.8-1.5
- Spirulina: 0.4-0.8
- Nannochloropsis: 0.6-1.0
- Haematococcus: 0.2-0.5

Much faster than heterotrophs in optimal conditions
```

**Light-Limited Growth (Monod-Type):**

```
μ = μmax × (I / (KI + I))

Where:
I = light intensity (μmol/m²/s)
KI = saturation constant (typically 50-150 μmol/m²/s)

At high density, average light becomes limiting
```

**Productivity Metrics:**

```
Areal productivity: g/m²/day
- Outdoor open ponds: 10-25 g/m²/day
- Outdoor closed PBRs: 20-40 g/m²/day
- Indoor LED systems: 5-15 g/m²/day

Volumetric productivity: g/L/day
- Open ponds: 0.05-0.2 g/L/day
- Tubular PBRs: 0.2-0.8 g/L/day
- Flat panel PBRs: 0.5-2.0 g/L/day

Photosynthetic efficiency: (Energy in biomass / Light energy) × 100%
- Theoretical maximum: ~10-12%
- Practical outdoor: 3-6%
- Indoor controlled: 5-8%
```

## 8.2 Photobioreactor Design

### Open Pond Systems

**Raceway Pond:**

```
Top view:
     ╔═════════════════════╗
     ║  → → → → → → → →  ║
     ║                   ║
     ║  ← ← ← ← ← ← ← ←  ║
     ╚═══════╦═══════════╝
             ║
         Paddle wheel

Dimensions:
- Depth: 0.15-0.4 m
- Width: 5-30 m
- Length: 50-500 m
- Velocity: 0.2-0.5 m/s (paddle wheel)

Advantages:
- Low capital cost ($50-150/m²)
- Large-scale suitable
- Simple operation

Disadvantages:
- Poor light utilization (depth >30 cm wasteful)
- Contamination risk
- Temperature control difficult
- Large land requirement
- Low volumetric productivity
```

### Tubular Photobioreactors

**Configuration:**

```
Horizontal tubes:

     ╔═══════════════════╗
     ║ →→→→→→→→→→→→→→→ ║
  CO₂║                   ║Air/CO₂
     ║ ←←←←←←←←←←←←←←← ║out
     ╚═══════╦═══════════╝
             ↓
         Degassing
         + Pump

Tube diameter: 0.02-0.10 m
Tube length: 50-200 m per loop
Material: Transparent plastic (PMMA, polycarbonate)
Flow velocity: 0.3-0.7 m/s (prevent settling, enhance mixing)

Design criteria:
Surface area/volume ratio: 20-80 m²/m³
Light path: <10 cm (for high density culture)
Gas exchange: Periodic degassing required
```

**Advantages and Limitations:**

```
Advantages:
- High surface area for light capture
- Good productivity (25-40 g/m²/day)
- Better contamination control than ponds
- Suitable for outdoor installation

Limitations:
- Temperature management (overheating)
- O₂ accumulation (photoinhibition)
- Hydrodynamic stress (shear)
- Biofouling on walls
- Higher cost than open ponds ($200-500/m²)
```

### Flat Panel Photobioreactors

**Configuration:**

```
Side view:

     ┌─────────────┐
     │ ╱╱╱╱╱╱╱╱╱╱╱│ ← Transparent panel
     │             │    (2-10 cm thick)
  Gas│↑  ↑  ↑  ↑  │
     │             │
     │↑  ↑  ↑  ↑  │ ← Air/CO₂ bubbles
     └──────┬──────┘
            ↓
        Gas input

Advantages:
- High surface/volume ratio (20-100 m²/m³)
- Excellent light distribution
- Good gas exchange
- Modular, scalable
- Easy temperature control

Typical productivity:
- Outdoor: 30-50 g/m²/day
- Indoor (LED): 10-20 g/m²/day

Cost: $300-800/m²
```

### Design Calculations

**Light Penetration (Beer-Lambert Law):**

```
I(z) = I₀ × e^(-k × X × z)

Where:
I(z) = light intensity at depth z
I₀ = incident light intensity
k = specific light extinction coefficient (0.02-0.10 m²/g)
X = biomass concentration (g/L)
z = depth (m)

Example:
I₀ = 200 μmol/m²/s
X = 2 g/L
k = 0.05 m²/g

At z = 0.05 m (5 cm):
I = 200 × e^(-0.05 × 2 × 0.05) = 200 × e^(-0.005) = 199 μmol/m²/s

At z = 0.10 m (10 cm):
I = 200 × e^(-0.05 × 2 × 0.10) = 200 × e^(-0.01) = 198 μmol/m²/s

At z = 0.20 m (20 cm):
I = 200 × e^(-0.05 × 2 × 0.20) = 200 × e^(-0.02) = 196 μmol/m²/s

Conclusion: At 2 g/L, light penetrates well to 20 cm
At higher densities (>5 g/L), limit depth to <10 cm
```

**CO₂ Mass Transfer:**

```
CO₂ transfer rate:
OTR_CO₂ = KLa × (C* - C)

Where:
KLa = volumetric mass transfer coefficient (h⁻¹)
C* = saturation CO₂ concentration
C = actual dissolved CO₂

CO₂ requirement:
Based on productivity (P, g/L/day):
CO₂ uptake = P × 1.8 kg CO₂/kg biomass

Example:
Target productivity: 1 g/L/day
CO₂ requirement: 1.8 g/L/day

In continuous operation (24 hours):
CO₂ uptake rate = 1.8 g/L/day / 24 h = 0.075 g/L/h

If C maintained at 50 mg/L and C* = 100 mg/L:
KLa required = 0.075 / (0.100 - 0.050) = 1.5 h⁻¹

Achieve with gas sparging at 0.1-0.5 VVM (volume gas/volume medium/minute)
```

## 8.3 Process Operation and Optimization

### Cultivation Modes

**Batch Culture:**

```
Timeline:
Day 0-2: Lag phase (acclimation)
Day 2-7: Exponential growth (μ = μmax)
Day 7-10: Linear growth (light-limited)
Day 10-14: Stationary phase (nutrient depletion)

Harvest at day 7-10 (before stationary phase)

Typical cycle:
Inoculation: 10-20% of final volume
Growth: 7-14 days
Harvest: 80-90% of volume
Refill and restart

Productivity: Moderate (downtime for cleaning)
```

**Semi-Continuous (Semi-Batch):**

```
Daily dilution:
Remove 20-30% of culture volume daily
Replace with fresh medium
Maintain culture in exponential/linear phase

Advantages:
- Consistent productivity
- Simplified operation
- Reduced contamination risk (no empty period)

Dilution rate (D) = Harvest volume / Total volume / day
D = 0.2-0.3 day⁻¹ typical

Steady-state biomass:
X_ss = (μ / D) × X₀ (if μ > D)
```

**Continuous Culture:**

```
Chemostat operation:
Continuous feed of fresh medium
Continuous harvest of culture
Maintain constant volume

At steady state:
μ = D (dilution rate)
X_ss = Y × (S₀ - S_ss)

Advantages:
- Maximum productivity
- Stable operation
- No downtime

Challenges:
- Contamination risk (long operation)
- Requires precise control
- Wall growth issues
```

### Nutrient Management

**Medium Formulation:**

```
Modified BG-11 medium (for freshwater microalgae):

Macronutrients (g/L):
- NaNO₃: 1.5
- K₂HPO₄: 0.04
- MgSO₄·7H₂O: 0.075
- CaCl₂·2H₂O: 0.036
- Na₂CO₃: 0.02

Micronutrients (mg/L):
- Ferric citrate: 6.0
- EDTA: 1.0
- MnCl₂·4H₂O: 1.81
- ZnSO₄·7H₂O: 0.222
- CuSO₄·5H₂O: 0.079
- Others: trace amounts

Cost: $0.50-2.00 per liter (technical grade)

For CEA integration:
Use nutrient-rich wastewater as base
Supplement with deficient nutrients
Reduce cost to $0.05-0.20 per liter
```

**Wastewater Nutrient Recovery:**

```
Algae as biofilter:

Aquaculture effluent typical composition:
- TAN: 20-50 mg N/L
- Nitrate: 50-150 mg N/L
- Phosphate: 10-30 mg P/L

Algae uptake:
- N: 5-10% of dry biomass
- P: 0.5-1.5% of dry biomass

Example calculation:
50 mg N/L removal target
At 7% N content:
Biomass production = 50 / 0.07 = 714 mg/L = 0.71 g/L

Over 7 days batch: 0.71 / 7 = 0.10 g/L/day productivity
(Achievable with simple pond system)

Advantages:
- Nutrient removal + biomass production
- Reduced fertilizer cost
- Wastewater treatment
```

## 8.4 Harvesting Technologies

### Harvesting Challenges

```
Challenge: Small cell size (2-20 μm)
         Low concentration (0.5-5 g/L)
         Need to concentrate 200-500× for drying

Energy-efficient harvesting critical:
Poor harvesting can consume >50% of production energy
Target: <0.3 kWh/kg dry biomass
```

### Harvesting Methods

**1. Flocculation + Sedimentation:**

```
Chemical flocculants:
- Aluminum sulfate (alum): 50-200 mg/L
- Ferric chloride: 50-150 mg/L
- Cationic polymers: 5-50 mg/L

Bioflocculation:
- Chitosan: 10-100 mg/L
- Auto-flocculation (pH >10)

Process:
1. Add flocculant
2. Rapid mix (1-3 min)
3. Slow flocculation (15-30 min)
4. Settle (2-6 hours)
5. Decant supernatant
6. Collect concentrated slurry (2-6% solids)

Efficiency: 80-95% biomass recovery
Energy: 0.1-0.3 kWh/kg
Cost: $0.10-0.50/kg (flocculant cost)
```

**2. Dissolved Air Flotation (DAF):**

```
Process:
1. Pressurize water with air (4-6 bar)
2. Inject into algae culture
3. Microbubbles attach to cells
4. Float to surface
5. Skim concentrated foam (3-8% solids)

Advantages:
- Fast (15-30 minutes)
- High recovery (>90%)
- Works for small cells

Disadvantages:
- Higher energy (0.2-0.5 kWh/kg)
- Equipment cost
- May need flocculant pre-treatment

Capital cost: $50,000-200,000 (100-500 m³/day capacity)
```

**3. Centrifugation:**

```
Types:
- Disc-stack centrifuge
- Decanter centrifuge
- Hydrocyclone (low efficiency)

Performance:
- Solids concentration: 15-25%
- Recovery: >95%
- Throughput: 1-20 m³/hour

Energy: 0.5-2.0 kWh/kg dry biomass
(High, but produces concentrated paste)

Best for high-value products
Too expensive for commodity applications

Capital cost: $100,000-500,000
```

**4. Membrane Filtration:**

```
Types:
- Microfiltration (0.1-10 μm pores)
- Ultrafiltration (<0.1 μm pores)
- Vacuum belt filter

Cross-flow configuration preferred (reduces fouling)

Performance:
- Concentration: 5-15% solids
- Recovery: >95%
- Flux: 20-100 L/m²/h

Energy: 0.3-1.0 kWh/kg

Challenges:
- Membrane fouling
- Backwashing required
- Membrane replacement cost

Good for high-value, low-volume production
```

**5. Auto-Flocculation (pH Swing):**

```
Method:
1. Increase pH to >10 (add NaOH or lime)
2. Ca²⁺ and Mg²⁺ precipitate as carbonates/hydroxides
3. Cells enmeshed in precipitate
4. Settle naturally

Advantages:
- No synthetic chemicals
- Can use wastewater lime
- Low cost

Disadvantages:
- Species-dependent
- High pH may damage cells
- Mineral contamination

Energy: <0.1 kWh/kg
Recovery: 70-90%
```

### Integrated Harvesting Strategy

```
Two-stage approach (cost-effective):

Stage 1: Pre-concentration
- Flocculation + settling
- Or auto-flocculation
- Or dissolved air flotation
- Achieve 2-6% solids
- Low energy cost

Stage 2: Final concentration
- Centrifuge or membrane filtration
- Achieve 15-25% solids (paste)
- Ready for drying or extraction

Total energy: 0.3-0.8 kWh/kg
Total cost: $0.20-0.80/kg
```

## 8.5 Applications in CEA

### Functions in Integrated Systems

**1. CO₂ Sequestration:**

```
Greenhouse CO₂ enrichment exhaust:
- Capture and redirect to algae PBR
- Convert CO₂ to biomass
- Reduce atmospheric emissions

CO₂ capture efficiency: 50-80%
Biomass yield: 1.8 kg biomass per kg CO₂
```

**2. Nutrient Recovery from Wastewater:**

```
Aquaponic or hydroponic drain water:
- High NO₃⁻, PO₄³⁻ from crop uptake inefficiency
- Algae polish water before discharge/reuse
- Biomass contains recovered nutrients

Nutrient removal efficiency:
- N: 70-95%
- P: 60-90%
```

**3. Oxygen Production:**

```
Photosynthetic O₂ for aquaculture:
- 1.2-1.5 kg O₂ per kg biomass produced
- Daytime O₂ supplementation
- Reduces aeration energy

Challenge: Night-time respiration (O₂ consumption)
Solution: Separate O₂ collection or biomass harvest before night
```

**4. Biomass Applications:**

```
Fish/shrimp feed supplement:
- Protein: 40-70% (species dependent)
- Omega-3 fatty acids (EPA, DHA in some species)
- Pigments (astaxanthin, lutein)
- Replace 10-30% of formulated feed

Biostimulant production:
- Extract growth hormones (cytokinins, auxins)
- Apply to crops as foliar spray
- Improve stress tolerance and yield

Biofertilizer:
- Apply dried or fresh algae to soil/substrate
- Slow-release nutrients
- Improve soil biology
```

## 8.6 Economic Considerations

**Production Costs:**

```
Capital cost (outdoor tubular PBR):
- Equipment: $200-400/m²
- Installation: $50-100/m²
- Total: $250-500/m²

Operating costs (per kg dry biomass):
- Nutrients: $0.10-0.40
- CO₂: $0.05-0.20
- Energy (mixing, harvesting): $0.30-0.80
- Labor: $0.20-0.60
- Maintenance: $0.10-0.30
- Total: $0.75-2.30/kg

Revenue (depends on application):
- Commodity biomass: $2-5/kg
- Feed supplement: $5-15/kg
- Astaxanthin extract: $2000-5000/kg
- Phycocyanin: $200-800/kg
```

**Integration Economics:**

```
Value in CEA context:
- CO₂ mitigation credit: $10-30/ton CO₂
- Wastewater treatment credit: $0.50-2.00/m³
- Feed cost savings: $3-8/kg algae
- Fertilizer value: $1-3/kg algae

Integrated system payback: 3-8 years
Standalone algae production: 8-15 years (unless high-value products)
```

## Summary

Algae cultivation offers multiple benefits for CEA systems including CO₂ sequestration, nutrient recovery, and production of valuable biomass. Successful implementation requires appropriate photobioreactor design, efficient light and CO₂ delivery, and cost-effective harvesting. Integration with existing CEA infrastructure improves economics through waste valorization and resource cycling.

## Key Takeaways

1. Microalgae have high growth rates and nutrient requirements
2. Light penetration limits culture density and reactor geometry
3. Tubular and flat-panel PBRs offer best productivity for controlled systems
4. CO₂ mass transfer often limiting; design for KLa >1 h⁻¹
5. Harvesting is energy-intensive; two-stage approach most economical
6. Integration with CEA for CO₂ and nutrient cycling improves economics
7. Biomass applications include feed, biostimulants, and high-value extracts
8. Production costs $0.75-2.30/kg; economic at commodity scale only with integration

## Further Reading

- Richmond, A. & Hu, Q. (2013). *Handbook of Microalgal Culture*, 2nd ed. Wiley-Blackwell.
- Borowitzka, M.A. & Moheimani, N.R. (2013). *Algae for Biofuels and Energy*. Springer.
- Barsanti, L. & Gualtieri, P. (2014). *Algae: Anatomy, Biochemistry, and Biotechnology*, 3rd ed.
- Acién, F.G. et al. (2017). "Photobioreactors for the Production of Microalgae." *Reviews in Environmental Science and Bio/Technology*.

## Review Questions

1. Compare microalgae and macroalgae for CEA applications.
2. Calculate light intensity at 10 cm depth with X=3 g/L, k=0.06 m²/g, I₀=250 μmol/m²/s.
3. What is the theoretical CO₂ requirement per kg algae biomass?
4. Design a flat-panel PBR for 1 kg/day productivity (10 cm depth, 1 g/L/day volumetric).
5. Compare raceway ponds vs. tubular PBRs for productivity and cost.
6. Why is harvesting energy-intensive for microalgae?
7. Describe a two-stage harvesting strategy and benefits.
8. How can algae improve nutrient cycling in aquaponic systems?
9. Calculate biomass production from 50 mg N/L removal at 6% N content.
10. What are the main cost components for algae production?

---

**Next Module:** Module 9 - Fermentation for Agricultural Applications
