# Module 5: Water Sterilization Methods
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Compare UV, ozone, and other sterilization technologies
2. Size and install UV sterilization systems
3. Implement ozone treatment safely and effectively
4. Integrate sterilization into recirculation design
5. Maintain sterilization equipment for optimal performance

---

## Introduction

In recirculating systems, pathogens can persist and multiply without proper sterilization. While filtration removes particles, sterilization kills or inactivates microorganisms—bacteria, viruses, fungi, and algae. Effective sterilization is essential for disease prevention and successful long-term recirculation.

---

## Why Sterilization Matters

### Pathogen Dynamics in Recirculation

```
WITHOUT STERILIZATION:
Day 1    Day 3    Day 7    Day 14   Day 21
  │        │        │        │        │
  ▼        ▼        ▼        ▼        ▼
 100 ──► 1,000 ──► 10,000 ──► 100K ──► DISEASE OUTBREAK
Pathogens multiply in warm, nutrient-rich water

WITH STERILIZATION:
Day 1    Day 3    Day 7    Day 14   Day 21
  │        │        │        │        │
  ▼        ▼        ▼        ▼        ▼
 100 ──►  50  ──►  25  ──►  10  ──►  <5
Continuous reduction prevents establishment
```

### Target Organisms

```
╔════════════════════════════════════════════════════════════╗
║          ORGANISMS CONTROLLED BY STERILIZATION             ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ BACTERIA                                                   ║
║ • Pythium (root rot)                    High priority     ║
║ • Erwinia (soft rot)                    High priority     ║
║ • Pseudomonas (leaf spots)              Moderate          ║
║ • E. coli (food safety)                 High priority     ║
║                                                            ║
║ FUNGI                                                      ║
║ • Fusarium (wilt)                       High priority     ║
║ • Phytophthora (root rot)               High priority     ║
║ • Algae/cyanobacteria                   Moderate          ║
║                                                            ║
║ VIRUSES                                                    ║
║ • Tobacco mosaic virus (TMV)            Moderate          ║
║ • Tomato spotted wilt                   Moderate          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## UV Sterilization

### How UV Works

**UV-C light (254 nm wavelength) damages DNA/RNA, preventing reproduction**

```
UV STERILIZATION PROCESS

    Influent Water
         │
         ▼
    ┌─────────────────────────────────┐
    │  ════════════════════════════   │
    │  ║                          ║   │
    │  ║   ╔════════════════╗    ║   │
    │  ║   ║  UV-C Lamp     ║←───╫───┼─ Power Supply
    │  ║   ║  (254 nm)      ║    ║   │
    │  ║   ╚════════════════╝    ║   │
    │  ║                          ║   │
    │  ════════════════════════════   │
    │         │                       │
    │         │ UV exposure           │
    │         │ damages DNA           │
    │         ▼                       │
    └─────────────────────────────────┘
         │
         ▼
    Sterilized Water

Quartz Sleeve: Protects lamp, allows UV transmission
Flow Pattern: Turbulent to ensure exposure
Contact Time: 4-10 seconds typical
```

### UV Dose Requirements

**UV Dose = Intensity × Time (measured in mJ/cm² or µWs/cm²)**

| Organism Type | 90% Reduction | 99% Reduction | 99.9% Reduction |
|---------------|---------------|---------------|-----------------|
| **Bacteria** | 2-6 mJ/cm² | 6-15 mJ/cm² | 15-30 mJ/cm² |
| **Viruses** | 8-15 mJ/cm² | 15-30 mJ/cm² | 30-60 mJ/cm² |
| **Algae** | 12-22 mJ/cm² | 22-40 mJ/cm² | 40-60 mJ/cm² |
| **Protozoa** | 5-8 mJ/cm² | 8-15 mJ/cm² | 15-30 mJ/cm² |

**Standard Recommendation: 30-40 mJ/cm² for general sterilization**

### UV System Sizing

```
Sizing Calculation:

1. Determine Required Flow Rate (GPM)
2. Select Target UV Dose (30-40 mJ/cm²)
3. Account for Water Quality Factors

UV Transmittance (UVT):
• Clean water: 95%+ UVT
• Moderate clarity: 85-95% UVT
• Cloudy water: <85% UVT (filter first!)

Example Sizing:
Flow rate: 20 GPM
Target dose: 40 mJ/cm²
UVT: 90%
Required unit: 25 GPM rated @ 40 mJ/cm² (safety factor)

Cost Range:
• Residential units (10-20 GPM): $400-1,200
• Commercial units (20-100 GPM): $1,500-5,000
• Industrial units (>100 GPM): $5,000-25,000+
```

### UV Installation Best Practices

```
┌────────────────────────────────────────────────────────┐
│        PROPER UV INSTALLATION                          │
├────────────────────────────────────────────────────────┤
│                                                        │
│ LOCATION                                               │
│ • After all filtration (turbidity <5 NTU)              │
│ • Before plant distribution                            │
│ • Horizontal or vertical (check manufacturer specs)    │
│ • Protected from direct sunlight                       │
│                                                        │
│ PLUMBING                                               │
│ • Straight pipe 5× diameter upstream                   │
│ • Straight pipe 2× diameter downstream                 │
│ • No air pockets (mount at high point or use de-gas)   │
│ • Isolation valves for maintenance                     │
│                                                        │
│ ELECTRICAL                                             │
│ • Dedicated circuit recommended                        │
│ • GFCI protection required                             │
│ • Alarm/indicator light for lamp failure               │
│                                                        │
│ SAFETY                                                 │
│ • UV-C is harmful to eyes/skin                         │
│ • Interlocked power cutoff when accessing lamp         │
│ • Warning labels                                       │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### UV Maintenance

**Maintenance Schedule:**

| Task | Frequency | Importance |
|------|-----------|------------|
| **Clean quartz sleeve** | Monthly | Critical |
| **Check UV intensity** | Monthly | High |
| **Replace lamp** | Annually (9,000-14,000 hrs) | Critical |
| **Replace quartz sleeve** | Every 2-3 years | Moderate |
| **Inspect seals/gaskets** | Annually | High |

**Lamp Degradation:**
```
UV OUTPUT OVER TIME

100% ─┐
      │╲
 90%  │ ╲___
      │     ╲___
 80%  │         ╲___
      │             ╲___
 70%  │                 ╲___
      │                     ╲_____ Replace at 60-70%
 60%  │
      └─────────────────────────────────────────
       0    3    6    9   12   15   18 months

Most manufacturers recommend replacement at 12 months
even if lamp still lights (UV output degrades)
```

---

## Ozone Sterilization

### How Ozone Works

**O₃ (ozone) is a powerful oxidizer that destroys cell walls**

```
OZONE GENERATION AND APPLICATION

AIR IN          CORONA DISCHARGE
  │                    │
  ▼                    ▼
┌───────────────────────────┐
│   Ozone Generator         │
│   O₂ → O₃                 │
└───────┬───────────────────┘
        │
        │ O₃ Gas
        ▼
┌───────────────────────────┐
│   Venturi Injector        │    Water Flow
│        or                 │         →
│   Diffusion Chamber       │         →
└───────┬───────────────────┘         →
        │
        │ Dissolved O₃
        ▼
┌───────────────────────────┐
│   Contact Chamber         │
│   (2-5 min retention)     │
│                           │
│   O₃ + Pathogens →        │
│   CO₂ + H₂O + O₂          │
└───────┬───────────────────┘
        │
        ▼
┌───────────────────────────┐
│   Degassing               │
│   (Remove residual O₃)    │
└───────┬───────────────────┘
        │
        ▼
    Sterilized Water
```

### Ozone Dosing

**Typical Concentrations:**
- Standard treatment: 0.5-1.0 ppm O₃
- Heavy contamination: 1.0-2.0 ppm O₃
- Continuous low-dose: 0.1-0.3 ppm O₃

**Contact Time:**
- Minimum: 2 minutes
- Recommended: 3-5 minutes
- Heavy treatment: 5-10 minutes

### Ozone vs. UV Comparison

```
╔════════════════════════════════════════════════════════════════════════════╗
║                        OZONE VS. UV COMPARISON                             ║
╠════════════════════════════════════════════════════════════════════════════╣
║                                                                            ║
║ Feature           UV Sterilization        Ozone Sterilization             ║
║ ═══════════════════════════════════════════════════════════════════════    ║
║                                                                            ║
║ Effectiveness     Good (95-99%)           Excellent (99.9%+)              ║
║ Residual          None                    Brief (2-20 min)                ║
║ Capital Cost      $500-5,000              $2,000-15,000                   ║
║ Operating Cost    Low (electricity)       Moderate (power + oxygen)       ║
║ Maintenance       Low (annual lamp)       Moderate (generator service)    ║
║ Installation      Simple                  Complex (contact chamber)       ║
║ Safety            Low risk (contained)    Moderate (toxic gas)            ║
║ Water Impact      None                    Oxidizes organics, Fe, Mn       ║
║ Best For          Continuous treatment    Shock treatment, biofilm        ║
║                                                                            ║
╚════════════════════════════════════════════════════════════════════════════╝
```

### Ozone Safety

**CRITICAL SAFETY REQUIREMENTS:**

```
⚠ DANGER: Ozone is toxic to humans, fish, and plants

□ Proper ventilation (ozone off-gassing area)
□ Ozone monitor/detector with alarm
□ Degassing before water returns to system
□ No direct plant/fish exposure
□ Personal protective equipment (respirator if needed)
□ Emergency shutdown procedures
□ Warning signs and labels

OSHA Limits:
• 0.1 ppm (8-hour exposure)
• 0.3 ppm (15-minute exposure)

Symptoms of exposure:
• Coughing, throat irritation
• Chest pain
• Shortness of breath
• Eye irritation
```

---

## Other Sterilization Methods

### Hydrogen Peroxide

**Dosing: 50-100 ppm for shock treatment**

**Advantages:**
- Breaks down to water and oxygen
- No harmful residues
- Effective against biofilm

**Disadvantages:**
- Can stress plants at high doses
- Expensive for continuous use
- Requires careful handling

### Chlorine/Bleach

**Generally NOT recommended for recirculating systems**

**Issues:**
- Harmful to plants even at low concentrations
- Phytotoxic residues
- Better alternatives available (UV, ozone)

**Limited use:** Cleaning/sterilizing equipment between cycles

### Heat Pasteurization

**Temperature: 203°F (95°C) for 30 seconds**

**Advantages:**
- No chemicals or equipment
- Effective sterilization

**Disadvantages:**
- Energy-intensive
- Cools slowly (heat loss)
- Impractical for continuous recirculation
- Best for batch treatment between crops

---

## Integrated Sterilization Design

### Combining Methods

**Best Practice: UV + Optional Ozone**

```
INTEGRATED TREATMENT TRAIN

Growing System
     │
     ▼
Filtration (Stage 1-3)
     │
     ▼
UV Sterilization ←─────┐ Continuous pathogen control
     │                 │
     ▼                 │
Reservoir/Holding      │
     │                 │
     ├─────────────────┘ Recirculation loop
     │
     │ (Optional periodic treatment)
     ▼
Ozone Shock Treatment ←─ Weekly or as needed
     │                   • Biofilm control
     ▼                   • Deep sterilization
Back to UV/reservoir     • System reset
```

### Monitoring Effectiveness

```
┌──────────────────────────────────────────────────────┐
│    STERILIZATION PERFORMANCE MONITORING              │
├──────────────────────────────────────────────────────┤
│                                                      │
│ PHYSICAL MEASUREMENTS                                │
│ • UV intensity (measured with sensor)                │
│ • ORP (for ozone, 650-750 mV indicates activity)    │
│ • Lamp hours tracking                                │
│                                                      │
│ BIOLOGICAL INDICATORS                                │
│ • Plant health (no root disease)                     │
│ • Water clarity (no algae growth)                    │
│ • Biofilm assessment (clean surfaces)                │
│                                                      │
│ LABORATORY TESTING (Periodic)                        │
│ • Total plate count (bacteria)                       │
│ • Specific pathogen testing                          │
│ • Before/after sterilization samples                 │
│                                                      │
│ Target: >99% reduction in microbial counts           │
│                                                      │
└──────────────────────────────────────────────────────┘
```

---

## Troubleshooting Sterilization Issues

```
╔════════════════════════════════════════════════════════════╗
║         STERILIZATION TROUBLESHOOTING                      ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ PROBLEM: Disease outbreak despite UV                      ║
║ ────────────────────────────────                           ║
║ Causes:                                                    ║
║ • Lamp past service life                                   ║
║ • Dirty quartz sleeve (blocked UV)                         ║
║ • Flow rate too high (insufficient exposure)               ║
║ • Air pockets in chamber                                   ║
║ Solutions:                                                 ║
║ • Replace lamp                                             ║
║ • Clean sleeve monthly                                     ║
║ • Verify flow rate vs. rating                              ║
║ • Ensure proper mounting/venting                           ║
║                                                            ║
║ PROBLEM: Algae growth persists                             ║
║ ────────────────────────────────                           ║
║ Causes:                                                    ║
║ • Light leaks in system                                    ║
║ • UV undersized for algae                                  ║
║ • Algae in dead zones (not recirculating)                  ║
║ Solutions:                                                 ║
║ • Shield all water from light                              ║
║ • Increase UV dose (40-60 mJ/cm²)                          ║
║ • Eliminate dead flow zones                                ║
║ • Consider ozone treatment                                 ║
║                                                            ║
║ PROBLEM: Ozone residual too high                           ║
║ ────────────────────────────────────                       ║
║ Causes:                                                    ║
║ • Insufficient contact/degassing time                      ║
║ • Over-dosing                                              ║
║ Solutions:                                                 ║
║ • Increase degassing time                                  ║
║ • Reduce ozone generation rate                             ║
║ • Add carbon filter for residual removal                   ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Module Summary

### Key Takeaways

1. **Sterilization is essential for recirculation** - prevents pathogen buildup and disease outbreaks

2. **UV is the workhorse technology** - reliable, cost-effective, simple to operate for continuous treatment

3. **Proper sizing and maintenance are critical** - undersized or poorly maintained UV systems fail to protect

4. **Ozone offers advanced capabilities** - excellent for shock treatment and biofilm control, but requires careful safety protocols

5. **Filtration must precede sterilization** - turbid water blocks UV and wastes ozone; filter first, then sterilize

### Action Items

Before proceeding to Module 6:
- [ ] Determine sterilization method(s) for your system
- [ ] Size UV unit based on flow rate and dose requirements
- [ ] Plan UV installation location and plumbing
- [ ] Create maintenance schedule for sterilization equipment
- [ ] Consider whether ozone is appropriate for your application

---

*EcoFusion Academy - Course 212, Module 5*
