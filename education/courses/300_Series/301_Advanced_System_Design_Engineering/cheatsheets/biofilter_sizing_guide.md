# Biofilter Sizing Guide

**Course 301: Advanced System Design & Engineering**

---

## Quick Reference: 5-Step Biofilter Sizing

### Step 1: Calculate TAN Load
```
Daily Feed [kg/day] × Protein % × 0.092 = kg TAN/day

Conservative factor: 0.10 instead of 0.092
```

### Step 2: Select Nitrification Rate
```
Use conservative rates for design:

Moving Bed: 0.5-0.7 g TAN/m²/day
Trickling Filter: 0.3-0.5 g TAN/m²/day
Submerged Media: 0.4-0.6 g TAN/m²/day
Fluidized Bed: 1.0-2.0 g TAN/m²/day

Lower end for: cold water, new systems, variable loading
Upper end for: warm water, mature systems, stable loading
```

### Step 3: Calculate Required Surface Area
```
Required Area [m²] = (TAN Load [g/day] / Nitrification Rate [g/m²/day]) × Safety Factor

Safety Factor: 1.5-2.0 (use 2.0 for critical applications)
```

### Step 4: Select Media and Calculate Volume
```
Media Volume [m³] = Required Area [m²] / Media SSA [m²/m³]

SSA = Specific Surface Area (see media table below)
```

### Step 5: Calculate Tank Volume
```
For Moving Bed:
Tank Volume = Media Volume / Fill %
Fill % = 0.50-0.60 (50-60%)

For Fixed Media:
Tank Volume = Media Volume × 1.10 (10% headspace)
```

---

## Biofilter Media Specifications

| Media Type | SSA (m²/m³) | Void (%) | Density | Cost | Application |
|------------|-------------|----------|---------|------|-------------|
| **Moving Bed Media** | | | | | |
| Kaldnes K1 | 500 | 65 | 0.95 | $$$ | MBBR, general purpose |
| Kaldnes K3 | 500 | 60 | 0.95 | $$$ | MBBR, high flow |
| Kaldnes K5 | 800 | 55 | 0.95 | $$$$ | MBBR, compact design |
| **Fixed Media** | | | | | |
| Bio-Balls (4") | 200 | 85 | 0.92 | $$ | Trickling filter |
| Lava Rock (2-3") | 300 | 50 | 2.5 | $ | Submerged, low-tech |
| Expanded Clay | 300 | 40 | 0.4 | $$ | Submerged, good for media beds |
| Plastic Rings (2") | 350 | 90 | 0.95 | $$ | Trickling filter |
| **Specialty Media** | | | | | |
| Sand (0.5-2mm) | 3,000 | 40 | 2.6 | $ | Fluidized bed only |
| Sponge Cubes (4") | 100 | 80 | 0.05 | $ | Backup, low efficiency |
| Matala Matting | 350 | 94 | 0.02 | $$ | Pre-filter, light solids |

---

## Design Examples

### Example 1: Small MBBR System

**Given:**
- Feed: 10 kg/day @ 40% protein
- Temperature: 25°C
- Media: Kaldnes K1

**Solution:**

Step 1: TAN Load
```
TAN = 10 kg × 0.40 × 0.092 = 0.368 kg/day = 368 g/day
```

Step 2: Nitrification Rate
```
Use 0.6 g/m²/day (mid-range, warm water)
```

Step 3: Surface Area
```
Area = (368 / 0.6) × 2.0 = 1,227 m²
```

Step 4: Media Volume
```
Volume = 1,227 / 500 = 2.45 m³
```

Step 5: Tank Volume
```
Tank = 2.45 / 0.55 = 4.45 m³ = 1,176 gallons

Use 1,500-gallon tank (provides growth margin)
```

**Verification:**
- Actual media: 1,500 gal × 3.785 L/gal / 1000 = 5.68 m³ × 0.55 = 3.12 m³
- Actual area: 3.12 × 500 = 1,560 m²
- Actual capacity: 1,560 × 0.6 / 2.0 = 468 g/day
- Safety margin: 468 / 368 = 1.27 (adequate)

---

### Example 2: Large Commercial System

**Given:**
- Fish production: 100 kg feed/day @ 35% protein
- Temperature: 26°C (tilapia)
- Target: High reliability

**Solution:**

Step 1: TAN Load
```
TAN = 100 × 0.35 × 0.092 = 3.22 kg/day = 3,220 g/day
```

Step 2: Select System Type
```
For this scale: MBBR most appropriate
Rate: 0.65 g/m²/day (warm, mature system assumption)
```

Step 3: Surface Area
```
Area = (3,220 / 0.65) × 2.0 = 9,908 m²
```

Step 4: Media Volume
```
Using K1 (500 m²/m³):
Volume = 9,908 / 500 = 19.8 m³ media

Using K5 (800 m²/m³) for more compact design:
Volume = 9,908 / 800 = 12.4 m³ media
```

Step 5: Tank Volume (K1 option)
```
Tank = 19.8 / 0.55 = 36 m³ = 9,511 gallons

Use (2) × 5,000 gallon tanks for redundancy
Total: 10,000 gallons
Actual media: 10,000 × 3.785 / 1000 × 0.55 = 20.8 m³
```

**Aeration Requirements:**
- Aeration rate: 3-5 CFM per ft³ of media
- Media volume: 20.8 m³ = 734 ft³
- Required air: 734 × 4 = 2,936 CFM
- Use (3) 1,000 CFM blowers (one backup)

---

## Sizing by System Type

### Moving Bed Biofilm Reactor (MBBR)

**Sizing Parameters:**
- Nitrification rate: 0.5-0.7 g TAN/m²/day
- Media fill: 50-60% of tank volume
- Retention time: 20-30 minutes
- Aeration: 3-5 CFM per ft³ media
- Screen at outlet: 2-3 mm mesh

**Tank Geometry:**
- Diameter:Depth ratio: 2:1 to 3:1
- Minimum depth: 3 ft (for mixing)
- Maximum depth: 8 ft (aeration efficiency)

**Advantages:**
- High nitrification rate
- Compact footprint
- Self-cleaning (biofilm shearing)
- Easy to expand (add media)

**Disadvantages:**
- Requires continuous aeration
- Screen maintenance
- Higher capital cost

---

### Trickling Filter

**Sizing Parameters:**
- Nitrification rate: 0.3-0.5 g TAN/m²/day
- Hydraulic loading: 1-4 GPM/ft² surface
- Media depth: 4-6 feet
- Recirculation ratio: 1:1 to 5:1
- Natural ventilation or forced air

**Design:**
- Circular preferred (radial distribution)
- Rotating distributor or spray nozzles
- Open bottom for air flow
- Collection sump below

**Advantages:**
- Low energy (no continuous aeration)
- Simple maintenance
- Excellent oxygenation
- Reliable

**Disadvantages:**
- Large footprint
- Media clogging (periodic flushing needed)
- Temperature sensitive (indoor recommended)
- Flies/insects (if poor management)

---

### Fluidized Sand Bed

**Sizing Parameters:**
- Nitrification rate: 1.0-2.0 g TAN/m²/day
- Sand size: 0.5-2.0 mm
- Upflow velocity: 15-30 m/hr
- Bed expansion: 20-30%
- Backwash: Daily, 40-50 m/hr for 10 min

**Design:**
- Cylindrical vessel with distribution plate
- Expansion zone (30% above bed)
- Backwash drain and supply

**Advantages:**
- Highest nitrification rate
- Very compact
- High surface area

**Disadvantages:**
- Complex operation
- Daily backwashing required
- High pressure drop
- Expensive
- Not forgiving of operational errors

---

## Oxygen Requirements

### Nitrification Oxygen Demand

```
O₂ Required = TAN Load [g/day] × 4.57 g O₂/g TAN

Example: 1,000 g TAN/day
O₂ = 1,000 × 4.57 = 4,570 g/day = 191 g/hr
```

### Oxygen Transfer Rate (OTR)

```
OTR = KₗA × (Cₛ - C) × V

Where:
KₗA = Transfer coefficient [hr⁻¹]
Cₛ = Saturation [mg/L]
C = Operating [mg/L]
V = Volume [L]

Typical KₗA values:
Coarse bubble: 1-2 hr⁻¹
Fine bubble: 3-5 hr⁻¹
```

### Aeration Sizing

```
For MBBR:
Airflow = Media Volume [ft³] × 4 CFM/ft³

Blower pressure:
Tank depth [ft] × 0.433 + losses + diffuser drop
Typical: 6-10 PSI
```

---

## Alkalinity Management

### Alkalinity Consumption

```
Alkalinity Used = TAN Oxidized × 7.14 g CaCO₃/g TAN

Example: 1,000 g TAN/day
CaCO₃ = 1,000 × 7.14 = 7,140 g/day = 7.14 kg/day
```

### Buffer Addition

**Potassium Carbonate (K₂CO₃):**
```
K₂CO₃ = CaCO₃ equivalent × 1.38

Example: 7.14 kg CaCO₃/day
K₂CO₃ = 7.14 × 1.38 = 9.85 kg/day
```

**Sodium Bicarbonate (NaHCO₃):**
```
NaHCO₃ = CaCO₃ equivalent × 1.68
```

**Target Alkalinity:** 100-150 mg/L as CaCO₃
**Minimum for Nitrification:** 50 mg/L

---

## Performance Verification

### Testing Protocol

**After 6-8 Weeks Maturation:**

1. Baseline measurement
   - Measure inlet TAN
   - Measure outlet TAN and NO₂⁻
   - Record flow rate, temp, pH, DO

2. Load test
   - Dose ammonia to simulate maximum load
   - Monitor TAN and NO₂⁻ every 4 hours
   - Continue for 48 hours

3. Acceptance criteria
   - Outlet TAN <1.0 mg/L
   - Outlet NO₂⁻ <0.5 mg/L
   - Stable for 7 consecutive days

### Troubleshooting

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| High TAN, Low NO₂⁻ | Immature biofilter | Wait 2-4 more weeks |
| High TAN, High NO₂⁻ | Insufficient capacity | Add media or reduce load |
| Low TAN, High NO₂⁻ | NO₂⁻ oxidizers inhibited | Check DO (>5), increase aeration |
| Variable performance | Temperature swings | Insulate, heat/cool |
| Declining performance | Low alkalinity | Test alk, add buffer |
| Sudden TAN spike | Toxic shock | Check for chemical additions |

---

## Design Checklist

**Before Finalizing Design:**

☐ TAN load calculated conservatively (use 0.10 factor)?
☐ Nitrification rate appropriate for temperature?
☐ Safety factor 1.5-2.0 applied?
☐ Media selection appropriate for system type?
☐ Tank volume includes headspace/expansion?
☐ Aeration adequate for O₂ demand?
☐ Alkalinity supplementation planned?
☐ Backup biofilter capacity considered?
☐ Screen at outlet sized for flow?
☐ Drain for maintenance included?
☐ Temperature control if needed?
☐ DO maintained >5 mg/L in biofilter?
☐ Retention time 20-30 minutes (MBBR)?
☐ Access for media addition/removal?
☐ Monitoring points for TAN, NO₂⁻, NO₃⁻, DO, pH?

---

## Common Design Mistakes

❌ **Undersizing**: Using aggressive nitrification rates without safety factor
✓ **Correct**: Use conservative rates and 2× safety factor

❌ **Insufficient aeration**: Assuming 100% oxygen transfer efficiency
✓ **Correct**: Account for actual transfer efficiency (15-30%)

❌ **No alkalinity plan**: Assuming feed provides enough buffering
✓ **Correct**: Calculate consumption, plan supplementation

❌ **Single biofilter**: No redundancy for maintenance or failure
✓ **Correct**: Split into 2+ units or provide backup media bed

❌ **Poor access**: Cannot add media or clean without draining
✓ **Correct**: Design for easy access and maintenance

---

**Use this guide with Module 4 for complete biofilter engineering.**

*Sizing based on published aquaculture research and commercial system performance data.*
