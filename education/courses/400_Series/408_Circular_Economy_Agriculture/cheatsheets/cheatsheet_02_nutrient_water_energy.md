# Cheatsheet 2: Nutrient, Water & Energy Recovery

## Nutrient Recovery Quick Reference

### Struvite Precipitation (Phosphorus Recovery)

**Reaction**: Mg²⁺ + NH₄⁺ + PO₄³⁻ + 6H₂O → MgNH₄PO₄·6H₂O ↓

**Optimal Conditions**:
- pH: 8.5-9.5
- Mg:N:P ratio: 1:1:1 (slight Mg excess)
- Temperature: 20-35°C
- Retention time: 15-30 min

**Product**: 5.7% N, 12.6% P, 9.9% Mg (slow-release fertilizer)

**Performance**: 70-90% P recovery

---

### Ammonia Stripping (Nitrogen Recovery)

**Process**:
1. Raise pH to 10-11 (converts NH₄⁺ → NH₃)
2. Air stripping tower removes gaseous NH₃
3. Absorption in acid (H₂SO₄) → (NH₄)₂SO₄

**Energy**: 2-4 kWh/kg N removed
**Recovery**: 70-90%
**Product**: Ammonium sulfate (21% N)

---

### Biochar for Nutrient Retention

**Production**: Pyrolysis at 300-700°C, oxygen-limited

**Benefits**:
- Reduces N leaching: 15-60%
- Improves P availability: 10-30%
- Increases water holding capacity: 10-50%
- Carbon sequestration: Stable 100-1,000 years

**Application Rate**: 5-20 tonnes/ha (soil) or 10-30% (substrate)

---

## Water Treatment Systems

### Multi-Barrier Approach

```
┌─────────────┐   ┌──────────┐   ┌──────────┐   ┌─────────────┐
│  Screening  │ → │ Filtration│ → │    UV    │ → │   Storage   │
│  (>1mm)     │   │ (<5 NTU)  │   │(40mJ/cm²)│   │ (monitored) │
└─────────────┘   └──────────┘   └──────────┘   └─────────────┘
```

**Key Principle**: Multiple redundant barriers ensure safety

---

### Membrane Filtration Comparison

| Type | Pore Size | Removes | Pressure | Application |
|------|-----------|---------|----------|-------------|
| **MF** | 0.1-10 μm | Bacteria, suspended solids | 0.5-2 bar | Pre-treatment |
| **UF** | 0.01-0.1 μm | Viruses, colloids | 1-3 bar | Pathogen removal |
| **NF** | 0.001-0.01 μm | Divalent ions, organics | 5-15 bar | Hardness, pesticides |
| **RO** | <0.001 μm | All dissolved solids | 15-60 bar | Desalination |

---

### UV Disinfection Dosing

| Target | UV Dose (mJ/cm²) |
|--------|------------------|
| 2-log reduction (99%) | 20-30 |
| 3-log reduction (99.9%) | 30-40 |
| **4-log reduction (99.99%)** | **40-50** ← Standard |
| 5-log reduction (99.999%) | 60-80 |

**Prerequisites**: Turbidity <5 NTU, UV transmittance >70%

---

### Water Quality Targets by Use

| Parameter | Hydroponics | Irrigation (Food Crops) | Non-Food Crops |
|-----------|-------------|------------------------|----------------|
| **TSS** | <5 mg/L | <10 mg/L | <30 mg/L |
| **EC** | <2.0 dS/m | <3.0 dS/m | <4.0 dS/m |
| **E. coli** | Non-detect | <10 CFU/100mL | <100 CFU/100mL |
| **pH** | 5.5-7.0 | 6.0-8.5 | 6.0-9.0 |

---

## Energy Recovery Systems

### Anaerobic Digestion Parameters

**Operating Regimes**:
- **Mesophilic**: 35-37°C, HRT 15-30 days (most common)
- **Thermophilic**: 55°C, HRT 10-20 days (10-20% higher yield)

**Optimal Conditions**:
- C/N ratio: 20-30
- pH: 7.0-8.0
- Organic Loading Rate: 1.5-3.0 kg VS/m³/day
- VFA/Alkalinity: <0.4 (stable), >0.8 (warning)

**Biogas Composition**:
- CH₄: 55-65%
- CO₂: 30-40%
- H₂S: 50-500 ppm (requires removal)
- Trace: NH₃, H₂O vapor, siloxanes

---

### Methane Potential by Feedstock

| Feedstock | CH₄ Yield (m³/tonne VS) |
|-----------|-------------------------|
| Crop residues | 300-400 |
| Livestock manure | 150-250 |
| Food waste | 400-500 |
| Fats/oils/grease | 800-1,200 |
| Mixed agricultural | 250-350 |

**Energy Content**: 1 m³ CH₄ = 35.8 MJ = 9.94 kWh

---

### CHP System Efficiency

**Biogas Engine (typical)**:
- Electrical efficiency: 35-45%
- Thermal efficiency: 40-50%
- Total CHP efficiency: 75-90%

**Energy Distribution Example** (100 kWh biogas input):
- Electricity: 40 kWh (40%)
- Useful heat: 45 kWh (45%)
- Losses: 15 kWh (15%)

**Parasitic loads**: ~10-15% of electricity for pumping, mixing, heating

---

### Biogas Upgrading (to Biomethane)

**Target Quality** (grid injection):
- CH₄: >95%
- CO₂: <3%
- H₂S: <5 ppm
- Water dew point: <-10°C

**Technologies**:
- **Water scrubbing**: Simple, 2-4% CH₄ loss, 0.2-0.3 kWh/m³
- **PSA**: Low loss, higher efficiency, 0.2-0.25 kWh/m³
- **Membrane**: 4-10% loss, compact, 0.15-0.25 kWh/m³

---

## Sizing Calculators

### Struvite Reactor

```
P load (kg/day) × 1,000 / (Target conc. mg/L × Recovery %) = Daily feed (m³)
Required volume = Daily feed (m³) × HRT (hours) / 24
```

**Example**: 10 kg P/day, 100 mg/L, 90% recovery, 20 min HRT
- Feed: 10 × 1,000 / (100 × 0.90) = 111 m³/day
- Volume: 111 × (20/60) / 24 = 1.5 m³

---

### AD Reactor Sizing

```
Volume (m³) = Daily VS input (kg/day) / OLR (kg VS/m³/day)
OR
Volume (m³) = Daily feed (m³/day) × HRT (days)
```

**Use larger of the two calculations**

---

### Water Treatment Capacity

```
Flow rate (m³/hr) = Daily demand (m³) / Operating hours
Design capacity = Flow rate × Safety factor (1.2-1.5)
```

---

## Troubleshooting Quick Guide

### AD Problems & Solutions

| Problem | Possible Cause | Solution |
|---------|----------------|----------|
| Low biogas production | Overloading, low temperature | Reduce feed, increase heat |
| High VFA | Imbalance, shock load | Stop feeding, add alkalinity |
| Foaming | Fats/proteins excess | Anti-foam agent, reduce fat |
| H₂S smell | Sulfate in feed | Reduce sulfate sources, air injection |
| pH drop | Overfeeding | Reduce OLR, add lime |

### Water Treatment Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| High turbidity after filtration | Breakthrough, channeling | Backwash, check media |
| Low UV dose | Lamp aging, fouling | Clean/replace lamps |
| Membrane fouling | Organics, scaling | Chemical cleaning (CIP) |
| High pathogen count | Insufficient treatment | Check all barriers, increase dose |

---

## Economic Quick Estimates

**Typical Costs** (rough order of magnitude):

| System | Capital ($/m³ capacity) | Operating ($/m³ treated) |
|--------|------------------------|--------------------------|
| Sand filtration | $200-500 | $0.05-0.15 |
| UV disinfection | $150-300 | $0.05-0.10 |
| UF membrane | $600-1,200 | $0.20-0.50 |
| RO membrane | $1,500-3,000 | $0.50-1.50 |
| AD (mesophilic) | $800-1,500 per m³ | $15-30 per tonne waste |
| CHP unit | $1,500-3,000 per kW | $0.03-0.08 per kWh |

**Note**: Costs decrease with scale; incentives can reduce net costs 30-50%

---

## Regulatory Compliance

**Key Standards**:
- **Water Reuse (EU)**: Regulation 2020/741
- **Fertilizers (EU)**: Regulation 2019/1009
- **Organic (US)**: USDA NOP
- **Biogas Quality**: Local gas grid specifications

**Monitoring Frequency**:
- Continuous: Flow, pH, temperature, UV dose
- Daily: E. coli (rapid test), turbidity
- Weekly: Nutrients, TSS, BOD
- Monthly: Metals, pathogens (lab confirmation)
- Quarterly: Full panel, compliance reporting

---

*Quick Reference Guide - Course 408 Modules 3-5*
