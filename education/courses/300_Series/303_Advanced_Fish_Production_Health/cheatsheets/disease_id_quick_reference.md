# Disease Identification Quick Reference

**Course 303:** Advanced Fish Production & Health
**Resource Type:** Cheatsheet

---

## Bacterial Diseases

| Disease | Primary Signs | Location | Diagnosis | Treatment |
|---------|--------------|----------|-----------|-----------|
| **Columnaris** | White-gray patches, gill necrosis, fin rot | External, gills | Wet mount (long rods), Gram- | Copper sulfate, KMnO₄, antibiotics |
| **Aeromonas (MAS)** | Hemorrhages, ulcers, pop-eye, ascites | Internal/external | Culture (TSA), Gram- rods | OTC, florfenicol, salt |
| **Streptococcus** | Exophthalmia, erratic swimming, neurological | Internal, brain | Culture (blood agar), Gram+ cocci | Florfenicol, erythromycin, **VACCINE** |
| **Edwardsiella** | Hole-in-head, hemorrhages, septicemia | Internal | Culture, indole+, H₂S+ | Florfenicol, OTC |
| **Mycobacterium** | Chronic wasting, granulomas, emaciation | Internal organs | Acid-fast stain, histology | **NO TREATMENT - Depopulate** |

---

## Parasitic Diseases

| Parasite | Visual ID | Size | Signs | Treatment |
|----------|-----------|------|-------|-----------|
| **Ich (White Spot)** | White spots 0.5-1mm, raised | 50-1000 μm | Flashing, spots on body/fins | Salt 1-3ppt, formalin, heat |
| **Trichodina** | Disc with denticles, spinning | 50-80 μm | Cloudy skin, flashing | Salt, formalin, KMnO₄ |
| **Ichthyobodo (Costia)** | Small, kidney-shaped, 2 flagella | 10-20 μm | Blue slime, opaque skin | Formalin, salt 3-5ppt |
| **Dactylogyrus (Gill Fluke)** | 4 eyespots, hooks, on gills | 0.5-1 mm | Respiratory distress, pale gills | Praziquantel, formalin |
| **Gyrodactylus (Skin Fluke)** | Embryo visible, live-bearing | 0.3-0.8 mm | Fin erosion, cloudy skin | Praziquantel, salt dip |
| **Lernaea (Anchor Worm)** | Thread-like, visible to eye | 5-15 mm | Visible parasites, ulcers | Manual removal, organophosphates |
| **Argulus (Fish Louse)** | Disc-shaped, 2 large eyes | 5-10 mm | Flashing, jumping, wounds | Organophosphates, KMnO₄ |

---

## Viral Diseases

| Virus | Species | Key Signs | Temperature | Management |
|-------|---------|-----------|-------------|------------|
| **KHV** | Carp/koi | Gill necrosis, mortality 70-100% | 18-27°C | **NO TREATMENT** - Depopulate, PCR confirm |
| **SVC** | Cyprinids | Hemorrhagic septicemia, ascites | 10-17°C (spring) | **NO TREATMENT** - Reportable, depopulate |
| **TiLV** | Tilapia | Exophthalmia, neurological, 10-90% mortality | All temps | **NO TREATMENT** - Biosecurity, selective breeding |
| **VHS** | Salmonids | Hemorrhages, anemia, exophthalmia | 4-18°C | **NO TREATMENT** - Reportable, depopulate |

---

## Diagnostic Decision Tree

```
START: Abnormal fish observed

├─ WHITE SPOTS visible?
│  ├─ YES: Large (0.5-1mm), raised → ICH
│  │       Small patches → COLUMNARIS
│  │       Cottony growth → FUNGUS
│  └─ NO: Continue ↓

├─ HEMORRHAGES/RED AREAS?
│  ├─ YES: Widespread → BACTERIAL SEPTICEMIA (Aeromonas, Streptococcus, Vibrio)
│  │       Localized ulcers → AEROMONAS or injury
│  └─ NO: Continue ↓

├─ EXOPHTHALMIA (Pop-eye)?
│  ├─ YES: + Erratic swimming → STREPTOCOCCUS
│  │       + Hemorrhages → BACTERIAL or VIRAL
│  │       + Gas bubble disease (check TGP)
│  └─ NO: Continue ↓

├─ RESPIRATORY DISTRESS?
│  ├─ YES: Gills pale → ANEMIA (parasites, nutrition)
│  │       Gills dark/swollen → BACTERIAL GILL DISEASE
│  │       Parasites visible → GILL FLUKES
│  │       Check DO! (most common cause)
│  └─ NO: Continue ↓

├─ BEHAVIORAL CHANGES?
│  ├─ Flashing/rubbing → EXTERNAL PARASITES (wet mount!)
│  ├─ Whirling → WHIRLING DISEASE (salmonids) or STREP
│  ├─ Lethargic → CHECK WATER QUALITY FIRST
│  └─ Off-feed → NON-SPECIFIC (many causes)

└─ CHRONIC WASTING?
   └─ Emaciation, slow death → MYCOBACTERIUM (acid-fast stain)
```

---

## Emergency Response Quick Actions

### High Mortality (>5% daily)

1. **STOP** feeding immediately
2. **TEST** water quality (DO, NH₃, NO₂, temp, pH)
3. **EXAMINE** 5-10 fish (external, necropsy, wet mounts)
4. **ISOLATE** affected tanks
5. **SAMPLE** for lab (bacterial culture, PCR if viral suspected)
6. **IMPROVE** water quality (exchange, aeration)
7. **DOCUMENT** everything
8. **NOTIFY** authorities if reportable disease suspected

### Water Quality Crisis

| Problem | Critical Level | Immediate Action |
|---------|---------------|------------------|
| **Low DO** | <4 mg/L | Maximum aeration, water exchange, pure O₂ |
| **High NH₃** | >0.1 mg/L | Stop feed, water exchange 50-100%, add salt 1-3ppt |
| **High NO₂** | >1 mg/L | Salt 1-3ppt, water exchange, check biofilter |
| **pH crash** | <6.0 | Add buffer (sodium bicarbonate), increase aeration |
| **High temp** | >32°C warmwater | Ice, shade, reduce feeding, increase aeration |

---

## Treatment Dosage Quick Reference

### Common Treatments

```
SALT:
  Prolonged: 1-3 g/L (ppt) continuous
  Dip: 30 g/L × 5-10 minutes
  Calculation: kg salt = m³ × g/L

FORMALIN:
  Dose: 15-25 mg/L × 1 hour
  Repeat: Every 2-3 days, minimum 3×
  WARNING: Depletes O₂, increase aeration

POTASSIUM PERMANGANATE:
  Dose: 2-4 mg/L × 30-60 minutes
  CRITICAL: Perform demand test first

PRAZIQUANTEL (Flukes):
  Bath: 5 mg/L × 12 hours
  Oral: 25-50 mg/kg in feed

OXYTETRACYCLINE (Bacterial):
  Oral: 50-75 mg/kg fish/day × 10 days
  Withdrawal: 21 days

FLORFENICOL (Bacterial):
  Oral: 10-15 mg/kg fish/day × 10 days
  Withdrawal: 15 days
```

### Dose Calculation Formula

```
Bath Treatment:
  Amount (g) = Volume (L) × Concentration (mg/L) ÷ 1,000

Medicated Feed:
  Drug per kg feed = (Biomass × Dose) ÷ Feed rate ÷ 1,000

Example:
  1,000 kg fish, 50 mg/kg OTC, 2% feed rate
  OTC/kg feed = (1,000 × 50) ÷ 2 ÷ 1,000 = 2.5 g/kg feed
```

---

## Water Quality Targets (Intensive Systems)

| Parameter | Optimal | Acceptable | Critical Action |
|-----------|---------|------------|-----------------|
| **DO** | >7 mg/L | 6-7 mg/L | <4 mg/L EMERGENCY |
| **Temp** | Species-specific | ±2°C | ±5°C |
| **pH** | 7.0-8.0 | 6.5-8.5 | <6.0 or >9.0 |
| **NH₃** | <0.01 mg/L | 0.01-0.02 mg/L | >0.05 mg/L |
| **NO₂** | <0.1 mg/L | 0.1-0.5 mg/L | >1.0 mg/L |
| **NO₃** | <50 mg/L | 50-200 mg/L | >400 mg/L |
| **Alkalinity** | 100-200 mg/L | 75-100 mg/L | <50 mg/L |

---

## Sampling Protocol Checklist

**For Moribund Fish Examination:**

□ Wear gloves (biosecurity + zoonotic protection)
□ Sample 5-10 moribund fish (NOT dead)
□ External exam first (before killing)
□ Photo documentation
□ Euthanize humanely (clove oil overdose or percussion)
□ Necropsy within 2 hours
□ Gill wet mount (fresh, in saline)
□ Skin scraping (if external signs)
□ Bacterial culture (kidney, brain - ASEPTIC)
□ Fix tissues in 10% formalin (histology)
□ Freeze samples at -80°C (if viral suspected)
□ Document all findings
□ Clean and disinfect equipment

**Laboratory Submission:**
- 5-10 moribund fish (live or fresh <2 hr)
- Packed with oxygen, on ice
- Include water sample
- Completed submission form
- Clinical history
- Water quality data
- Overnight shipping

---

## Biosecurity Quick Checks

**Daily:**
□ Footbaths refreshed (200 ppm chlorine or 1% Virkon)
□ Dead fish removed and disposed
□ Equipment disinfected between tanks
□ Hand washing before/after fish contact

**Weekly:**
□ Visitor log reviewed
□ Equipment inventory and condition
□ Disinfectant supplies adequate
□ Staff compliance observation

**Monthly:**
□ Biosecurity audit
□ Training refresher
□ Protocol review and update

---

## Key Formulas

```
FCR = Total Feed (kg) ÷ Weight Gain (kg)

SGR (%/day) = ((ln(Wf) - ln(Wi)) ÷ days) × 100

Survival (%) = (Final Count ÷ Initial Count) × 100

Density (kg/m³) = Total Biomass (kg) ÷ Volume (m³)

Feed Rate (%BW) = (Daily Feed ÷ Biomass) × 100

Alkalinity Consumed = TAN oxidized (kg) × 7.14 kg CaCO₃

O₂ Demand = Biomass (kg) × Rate (mg/kg/hr) ÷ 1,000
```

---

## Important Reminders

⚠ **ALWAYS** test water quality BEFORE assuming disease

⚠ **NEVER** treat without diagnosis (waste money, cause resistance)

⚠ **MORIBUND** fish are best for diagnosis (not dead, not healthy)

⚠ **VIRAL** diseases have NO treatment - biosecurity is only defense

⚠ **MYCOBACTERIUM** requires depopulation, not treatment

⚠ **STREPTOCOCCUS** is zoonotic - use gloves!

⚠ **WITHDRAWAL** times must be followed for food safety

⚠ **QUARANTINE** all new fish 30-60 days minimum

⚠ **VACCINATION** is cheaper than treatment

⚠ **DOCUMENT** all treatments (legal requirement)

---

*EcoFusion Academy - Course 303*
*Keep this reference handy for quick field diagnosis!*
