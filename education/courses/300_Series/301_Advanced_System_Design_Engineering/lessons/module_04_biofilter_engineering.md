# Module 4: Biofilter Engineering

## Introduction

Biofiltration is the heart of recirculating aquaculture and aquaponic systems. Without effective nitrification, toxic ammonia accumulates and kills fish within hours. Biofilter design is both an art and a science—requiring knowledge of microbiology, hydraulics, mass transfer, and environmental engineering.

This module provides rigorous engineering methods for designing biofilters that reliably convert ammonia to nitrate. We'll cover nitrification kinetics, media selection, sizing calculations, and performance optimization. You'll learn to design biofilters that handle peak loads with safety margins for real-world reliability.

**Duration:** 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:

1. Calculate total ammonia nitrogen (TAN) loading from feed input
2. Apply nitrification kinetics to determine biofilter requirements
3. Select appropriate biofilter media based on application
4. Size biofilters using multiple methods and verify with safety factors
5. Design for hydraulic performance and oxygen delivery
6. Specify backwashing and maintenance requirements
7. Troubleshoot biofilter performance issues

---

## 1. Nitrification Fundamentals

### 1.1 The Nitrogen Cycle in Aquaculture

```
Fish Feed (Protein)
        ↓
    Fish Metabolism
        ↓
Ammonia (NH₃/NH₄⁺) ← Toxic to fish (LC₅₀ = 0.2-2.0 mg/L)
        ↓
  Nitrosomonas (AOB)
        ↓ + O₂
Nitrite (NO₂⁻) ← Toxic to fish (LC₅₀ = 5-50 mg/L)
        ↓
   Nitrobacter (NOB)
        ↓ + O₂
 Nitrate (NO₃⁻) ← Low toxicity (LC₅₀ = 100-300 mg/L)
        ↓
Plant Uptake or Water Exchange
```

### 1.2 Nitrification Stoichiometry

**Step 1: Ammonia Oxidation (Nitrosomonas)**
```
NH₄⁺ + 1.5 O₂ → NO₂⁻ + 2H⁺ + H₂O

Oxygen requirement: 3.43 g O₂ / g NH₄⁺-N
Alkalinity consumption: 7.14 g CaCO₃ / g NH₄⁺-N
```

**Step 2: Nitrite Oxidation (Nitrobacter)**
```
NO₂⁻ + 0.5 O₂ → NO₃⁻

Oxygen requirement: 1.14 g O₂ / g NO₂⁻-N
```

**Combined Nitrification:**
```
NH₄⁺ + 2 O₂ → NO₃⁻ + 2H⁺ + H₂O

Total oxygen: 4.57 g O₂ / g TAN oxidized
Total alkalinity: 7.14 g CaCO₃ / g TAN
```

### 1.3 Environmental Factors

**Temperature:**
```
Nitrification Rate ∝ Temperature

Q₁₀ = 2.0 (rate doubles every 10°C)

Rate(T) = Rate(20°C) × 2^((T-20)/10)

Example:
At 20°C: 1.0 g TAN/m²/day
At 25°C: 1.0 × 2^((25-20)/10) = 1.41 g/m²/day
At 15°C: 1.0 × 2^((15-20)/10) = 0.71 g/m²/day
```

**pH Effect:**
```
Optimal pH: 7.5-8.5
Acceptable: 6.5-9.0

Rate Multiplier:
pH 6.5: 0.50×
pH 7.0: 0.75×
pH 7.5: 1.00×
pH 8.0: 1.00×
pH 8.5: 0.90×
pH 9.0: 0.60×
```

**Dissolved Oxygen:**
```
Minimum: 2.0 mg/L (nitrification continues)
Optimal: >4.0 mg/L (maximum rate)

Michaelis-Menten Kinetics:
Rate = Rₘₐₓ × [DO] / (Kₛ + [DO])

Where:
Kₛ ≈ 0.5-1.0 mg/L for ammonia oxidizers
```

**Salinity:**
```
Freshwater bacteria: 0-5 ppt
Brackish bacteria: 5-20 ppt
Marine bacteria: 20-35 ppt

Allow 4-6 weeks for acclimation when changing salinity
```

---

## 2. TAN Loading Calculations

### 2.1 Feed-Based Estimation

```
TAN Production = Feed × Protein% × TAN Factor

Standard TAN Factor: 0.092 kg TAN / kg protein fed

Conservative TAN Factor: 0.10 kg TAN / kg protein

Example:
100 kg feed/day @ 40% protein
TAN = 100 × 0.40 × 0.092 = 3.68 kg TAN/day
```

**Protein Content by Species:**

| Feed Type | Protein % | Typical FCR | TAN per kg Feed |
|-----------|-----------|-------------|-----------------|
| Tilapia grower | 32% | 1.5 | 29.4 g |
| Trout grower | 42% | 1.2 | 38.6 g |
| Bass grower | 45% | 1.3 | 41.4 g |
| Catfish grower | 36% | 1.8 | 33.1 g |

### 2.2 Biomass-Based Estimation

```
TAN = Biomass × Feed Rate% × Protein% × 0.092

Feed Rate by Species:
Tilapia: 1.5-2.0% body weight per day @ 25-30°C
Trout: 1.0-1.5% body weight per day @ 15-18°C
Bass: 1.2-1.8% body weight per day @ 22-26°C

Example:
1000 kg tilapia @ 1.8% feed rate, 35% protein
Daily feed = 1000 × 0.018 = 18 kg
TAN = 18 × 0.35 × 0.092 = 0.58 kg/day
```

### 2.3 Direct Measurement

```
TAN Accumulation Rate = (TAN_final - TAN_initial) × Volume / Time

Measure in system without biofiltration:
Example:
1000 L tank, 50 kg fish
TAN increases from 0 to 3.0 mg/L in 12 hours

TAN rate = (3.0 - 0) × 1000 L × 12 hr
         = 3000 mg/12 hr = 250 mg/hr = 6.0 g/day

This accounts for actual fish excretion rates
```

---

## 3. Biofilter Sizing Methods

### 3.1 Surface Area Method

```
Required Area = TAN Load / Specific Nitrification Rate

Specific Nitrification Rates (conservative):
Moving bed: 0.5-1.0 g TAN/m²/day
Trickling filter: 0.3-0.6 g TAN/m²/day
Submerged media: 0.4-0.8 g TAN/m²/day
Fluidized bed: 1.0-3.0 g TAN/m²/day

Always use conservative rates for design!
```

**Example: Moving Bed Biofilter**
```
TAN load: 500 g/day
Specific rate: 0.6 g/m²/day (conservative)
Safety factor: 2.0

Required area = (500 / 0.6) × 2.0 = 1,667 m²

Media: Kaldnes K1, specific surface = 500 m²/m³
Required volume = 1,667 / 500 = 3.33 m³

Biofilter fill: 50% (allows movement)
Tank volume = 3.33 / 0.50 = 6.66 m³ = 1,760 gallons

Select: 2000-gallon MBBR tank
```

### 3.2 Volumetric Loading Method

```
Required Volume = TAN Load / Volumetric Loading Rate

Typical Rates (g TAN/m³/day):
Moving bed: 200-500
Trickling filter: 50-150
Submerged media: 100-300
Fluidized sand: 500-2000

Example:
TAN load: 500 g/day
Volumetric rate: 250 g/m³/day
Safety factor: 1.5

Required volume = (500 / 250) × 1.5 = 3.0 m³ = 793 gallons
```

### 3.3 Hydraulic Loading Method

```
Required Flow = TAN Load / (TAN_in - TAN_out)

Design criteria:
TAN_in: Expected input concentration
TAN_out: Target output concentration (usually <1.0 mg/L)

Example:
TAN load: 500 g/day = 20.8 g/hr
Target removal: 2.0 mg/L → 0.5 mg/L
Removal rate: 1.5 mg/L

Required flow = 20.8 g/hr / (1.5 g/m³) = 13.9 m³/hr = 61 GPM

Biofilter volume = Flow × Retention Time
With 20-minute retention: V = 61 gal/min × 20 min = 1,220 gallons
```

---

## 4. Media Selection

### 4.1 Media Characteristics

**Key Properties:**
- Specific surface area (m²/m³)
- Void fraction (%)
- Density (relative to water)
- Durability
- Cost

**Media Comparison Table:**

| Media Type | Surface Area | Void % | Density | Cost | Best Use |
|------------|--------------|--------|---------|------|----------|
| Kaldnes K1 | 500 m²/m³ | 65% | 0.95 | $$$ | MBBR |
| Kaldnes K3 | 500 m²/m³ | 60% | 0.95 | $$$ | MBBR |
| Bio-Balls | 200 m²/m³ | 85% | 0.92 | $$ | Trickle |
| Lava Rock | 300 m²/m³ | 50% | 2.5 | $ | Submerged |
| Expanded Clay | 300 m²/m³ | 40% | 0.4 | $$ | Submerged |
| Plastic Pall Rings | 350 m²/m³ | 90% | 0.95 | $$ | Trickle |
| Sand (0.5-2mm) | 3000 m²/m³ | 40% | 2.6 | $ | Fluidized |
| Sponge Cubes | 100 m²/m³ | 80% | 0.05 | $ | Submerged |

### 4.2 Media Depth and Hydraulics

**Submerged Fixed Media:**
```
Minimum depth: 12 inches
Recommended: 18-24 inches
Maximum: 36 inches (pressure drop limits)

Pressure drop ≈ 0.1-0.3 psi per foot of media depth

Upflow velocity: 1-5 m/hr (prevents channeling)
Downflow velocity: 5-15 m/hr (risk of channeling)
```

**Trickling Filter:**
```
Media depth: 4-6 feet
Hydraulic loading: 1-4 GPM/ft²
Recirculation ratio: 1:1 to 5:1

Example:
Filter area: 20 ft²
Loading: 2 GPM/ft²
Required flow: 20 × 2 = 40 GPM
System flow: 10 GPM
Recirculation: 40 - 10 = 30 GPM
Ratio: 30/10 = 3:1
```

**Moving Bed:**
```
Media fill: 40-60% of tank volume
Aeration: 2-5 CFM per ft³ of media
Retention time: 15-30 minutes

Mixing energy ensures:
- Media stays suspended
- Oxygen transfer
- Biofilm shearing (prevents excessive growth)
```

---

## 5. Oxygen and Alkalinity

### 5.1 Oxygen Requirements

```
O₂ Requirement = TAN Load × 4.57 g O₂/g TAN

Example:
500 g TAN/day × 4.57 = 2,285 g O₂/day = 95 g/hr

Must provide this O₂ to biofilter via:
1. Dissolved oxygen in incoming water
2. Aeration within biofilter
3. Cascading/splashing

Safety factor: 1.5-2.0× theoretical
Actual O₂ needed: 95 × 1.5 = 143 g/hr
```

**Oxygen Transfer Calculation:**
```
OTR = KₗA × (Cₛ - C) × V

Where:
KₗA = Volumetric transfer coefficient (hr⁻¹)
Cₛ = Saturation concentration (mg/L)
C = Actual concentration (mg/L)
V = Volume (L)

Example:
KₗA = 3 hr⁻¹ (moderate aeration)
Cₛ = 9.1 mg/L (20°C, sea level)
C = 6.0 mg/L (operating level)
V = 2000 L

OTR = 3 × (9.1 - 6.0) × 2000 = 18,600 mg/hr = 18.6 g/hr

This is insufficient! Need higher aeration rate or larger volume.
```

### 5.2 Alkalinity Management

```
Alkalinity Consumption = TAN Oxidized × 7.14 g CaCO₃/g TAN

Example:
500 g TAN/day × 7.14 = 3,570 g CaCO₃/day = 3.57 kg/day

Alkalinity Sources:
1. Feed (some buffering)
2. Base addition (calcium hydroxide, potassium carbonate)
3. Calcium carbonate (CaCO₃) media
4. Sodium bicarbonate (baking soda)

Target alkalinity: 100-150 mg/L as CaCO₃
Minimum: 50 mg/L (nitrification impaired below this)
```

**Alkalinity Addition:**
```
Chemical Options:
- Calcium hydroxide (Ca(OH)₂): 1.35 g/g CaCO₃ equivalent
- Potassium carbonate (K₂CO₃): 1.38 g/g CaCO₃ equivalent
- Sodium bicarbonate (NaHCO₃): 1.68 g/g CaCO₃ equivalent
- Calcium carbonate (CaCO₃): 1.00 g/g (slow dissolution)

Example:
Need 3.57 kg CaCO₃ equivalent per day
Using potassium carbonate:
Actual chemical = 3.57 × 1.38 = 4.93 kg K₂CO₃ per day
```

---

## 6. Biofilter Types and Design

### 6.1 Moving Bed Biofilm Reactor (MBBR)

**Design Schematic:**
```
    ┌──────────────────────────┐
    │ ~~~~ Water level ~~~~~~~ │
    │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │  Media (50-60% fill)
    │ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○  │
    │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │
  In├────→                     ├──→ Out
    │   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑   │
    │    Air diffusers         │
    └──────────────────────────┘

Components:
- Tank: 2:1 to 3:1 diameter-to-depth ratio
- Media: 40-60% fill (allows circulation)
- Aeration: 3-5 CFM per ft³ media
- Screen: 2-3mm mesh at outlet
- Hydraulic retention: 20-30 minutes
```

**Design Example:**
```
Given:
- TAN load: 1000 g/day
- Media: K1 (500 m²/m³)
- Rate: 0.7 g/m²/day
- Temperature: 25°C

Step 1: Surface area
Required area = (1000 / 0.7) × 2.0 SF = 2,857 m²

Step 2: Media volume
Media volume = 2,857 / 500 = 5.71 m³

Step 3: Tank volume
Tank volume = 5.71 / 0.55 = 10.4 m³ = 2,747 gallons

Step 4: Tank dimensions
Use 10 ft diameter × 4 ft deep
Actual volume = π × 5² × 4 × 7.48 = 2,350 gallons
(Add 20%, use next size: 3,000 gallons)

Step 5: Aeration
Media volume = 5.71 m³ = 202 ft³
Aeration = 202 × 4 CFM/ft³ = 808 CFM
Use (8) 100 CFM diffusers

Step 6: Hydraulics
System flow = 200 GPM
Retention time = 3,000 gal / 200 GPM = 15 min ✓
```

### 6.2 Trickling Filter

**Design Schematic:**
```
    Rotary Distributor
         │││││
    ┌────┴┴┴┴┴────┐
    │ ╱╲  ╱╲  ╱╲  │  Media (4-6 ft deep)
    │╱  ╲╱  ╲╱  ╲ │  Biofilm on surface
    │ ╲  ╱╲  ╱╲  ╱│  Air flows through
    │  ╲╱  ╲╱  ╲╱ │
    ├─────────────┤
    │   Air →     │  Perforated floor
    └──────┬──────┘
           ↓
       Collection

Advantages:
- Excellent oxygenation
- Low power use
- Simple maintenance
- Reliable

Disadvantages:
- Large footprint
- Media clogging
- Temperature sensitive
```

**Sizing:**
```
Hydraulic loading: 1-4 GPM/ft² surface area
Media depth: 4-6 feet
Recirculation: 1:1 to 5:1

Example:
System flow: 100 GPM
Recirculation: 3:1
Total flow: 100 + (3 × 100) = 400 GPM

Loading rate: 2 GPM/ft²
Required area = 400 / 2 = 200 ft²

Circular filter: A = πr²
200 = πr² → r = 7.98 ft
Diameter = 16 ft

Media volume: 200 ft² × 5 ft = 1,000 ft³
Use 6" bio-balls (200 m²/m³)
Surface area = 1,000 ft³ × 28.3 L/ft³ × 200 m²/m³ / 1000 = 5,660 m²
```

### 6.3 Fluidized Sand Biofilter

**Design Schematic:**
```
    ┌───────────────┐
    │    Outlet     │  Clean water
    ├───────────────┤
    │               │  Expansion zone (30%)
    │   ○ ○ ○ ○ ○   │
    │  ○ ○ ○ ○ ○ ○  │  Fluidized sand bed
    │ ○ ○ ○ ○ ○ ○ ○ │
    │  ○ ○ ○ ○ ○ ○  │
    ├───────────────┤
    │ ↑ ↑ ↑ ↑ ↑ ↑ ↑ │  Distribution plate
    └───────────────┘
          Inlet

Parameters:
- Sand size: 0.5-2.0 mm
- Upflow velocity: 15-30 m/hr
- Bed expansion: 20-30%
- Backwash: Daily, 40-50 m/hr for 5-10 min
```

**Advantages:**
- Highest nitrification rate
- Compact
- High surface area

**Disadvantages:**
- Requires backwashing
- High pressure drop
- Complex operation
- Expensive

---

## 7. Performance Monitoring

### 7.1 Key Parameters

**Daily Monitoring:**
```
Parameter          | Target Range | Action if Outside
-------------------|--------------|-------------------
Inlet TAN          | <3.0 mg/L    | Reduce feeding
Outlet TAN         | <1.0 mg/L    | Investigate biofilter
Outlet NO₂⁻        | <0.5 mg/L    | Check NOB activity
DO (biofilter)     | >4.0 mg/L    | Increase aeration
pH                 | 7.0-8.0      | Add alkalinity
Alkalinity         | >100 mg/L    | Add buffer
Temperature        | Species dep. | Adjust/insulate
```

### 7.2 Nitrification Rate Testing

**Procedure:**
```
1. Measure biofilter volume accurately
2. Turn off flow (isolate biofilter)
3. Add ammonia to 2-3 mg/L TAN
4. Measure TAN at 0, 2, 4, 6 hours
5. Calculate removal rate

Example:
Time 0: 2.5 mg/L TAN
Time 6: 0.5 mg/L TAN
Removal: 2.0 mg/L in 6 hours = 0.33 mg/L/hr

Biofilter volume: 2000 L
Removal rate: 0.33 mg/L/hr × 2000 L = 660 mg/hr = 15.8 g/day

If TAN load is 20 g/day → Underperforming
Need to identify and correct limiting factor
```

### 7.3 Troubleshooting

**High Effluent TAN:**

| Possible Cause | Diagnostic | Solution |
|----------------|------------|----------|
| Low DO | Measure DO in biofilter | Increase aeration |
| Low pH | Measure pH | Add alkalinity |
| Low temp | Measure temp | Insulate, heat |
| Overloaded | Calculate loading rate | Reduce feed or add media |
| New filter | Age of biofilter | Wait 4-6 weeks for maturation |
| Toxic shock | Recent chemical additions | Water exchange, reduce dosing |

**High Nitrite:**

Indicates Nitrobacter (NOB) inhibition:
- More sensitive to DO than Nitrosomonas
- More sensitive to pH changes
- Slower growing (longer startup)

Solution: Increase DO to >6 mg/L, maintain pH 7.5-8.0

---

## Summary

Biofilter engineering requires integration of microbiology, hydraulics, and chemistry:

1. **Calculate TAN Load**: Use feed-based or biomass-based methods with conservative assumptions
2. **Select Nitrification Rate**: Use proven rates for media type and conditions
3. **Apply Safety Factors**: 1.5-2.0× for reliable performance
4. **Choose Appropriate Media**: Balance surface area, cost, and hydraulics
5. **Provide Adequate Oxygen**: 4.57 g O₂ per g TAN with transfer efficiency
6. **Manage Alkalinity**: Supply 7.14 g CaCO₃ per g TAN
7. **Monitor Performance**: Regular testing and adjustment

Professional biofilter specifications include:
- TAN loading calculations
- Nitrification rate assumptions
- Media specifications
- Hydraulic design
- Aeration requirements
- Alkalinity management plan
- Performance testing protocols

---

## Check Your Understanding

1. Calculate the daily TAN production from 50 kg/day of 38% protein feed using the standard factor.

2. Size an MBBR using K1 media (500 m²/m³) for 750 g TAN/day at 0.6 g/m²/day with a safety factor of 2.0. Specify media volume and tank volume.

3. Calculate the daily oxygen requirement for nitrifying 400 g TAN. Include safety factor of 1.5×.

4. How much potassium carbonate is needed daily to maintain alkalinity for a system producing 600 g TAN/day?

5. Design a trickling filter for 150 GPM system flow with 3:1 recirculation at 2 GPM/ft² hydraulic loading. Specify diameter and media volume (5 ft deep).

6. A 3000 L biofilter with KₗA = 4 hr⁻¹ operates at 6.5 mg/L DO (Cₛ = 9.1 mg/L at 20°C). Calculate oxygen transfer rate in g/hr.

7. A biofilter test shows TAN drops from 2.8 to 0.6 mg/L in 4 hours in a 1500 L volume. Calculate the nitrification rate in g/day.

8. Size a fluidized sand bed (3000 m²/m³ specific surface area) for 300 g TAN/day at 1.5 g/m²/day. Include 30% expansion space.

9. A system produces 1.2 kg TAN/day. Using the volumetric method with 300 g/m³/day and safety factor 1.5, specify required biofilter volume in gallons.

10. Troubleshoot this scenario: Biofilter outlet shows TAN = 0.3 mg/L but NO₂⁻ = 5.0 mg/L. DO = 3.5 mg/L, pH = 7.8, temp = 24°C. What is the likely problem and solution?

---

**Next Module:** Module 5 - Environmental Systems Integration

*"Biofilters don't fail, they're just temporarily exceeding their design capacity."* - Every aquaculture engineer
