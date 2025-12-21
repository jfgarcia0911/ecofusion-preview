# Module 12: Water Treatment Systems

## Introduction

Water treatment ensures incoming water quality meets system requirements and treated effluent meets discharge standards. This module covers filtration, disinfection, dechlorination, and water quality polishing for aquaponic operations.

**Duration:** 1 hour

---

## Learning Objectives

1. Design mechanical filtration systems (screens, filters, settling)
2. Specify UV sterilization for pathogen control
3. Design dechlorination systems for municipal water
4. Calculate ozone dosing for advanced oxidation
5. Design solids dewatering and disposal systems
6. Ensure regulatory compliance for water discharge

---

## 1. Mechanical Filtration

### 1.1 Filtration Hierarchy

```
Coarse (>1 mm) → Fine (100-500 μm) → Polishing (<100 μm)

Screen Filter → Sand Filter → Cartridge Filter
     ↓              ↓              ↓
   Solids       Suspended       Dissolved
  >1000 μm      50-500 μm       organics
```

### 1.2 Screen Filters

**Drum Filters:**
```
Applications: Primary solids removal (RAS)
Screen size: 60-200 micron
Flow capacity: 50-1000 GPM
Backwash: Automatic spray jets

Sizing Example:
System flow: 200 GPM
Solids load: 50 mg/L TSS
Screen size: 100 micron
Drum filter capacity: 250 GPM @ 100 μm

Model: 250 GPM drum filter with auto-backwash
Power: 0.5 HP motor for rotation
Backwash: High-pressure spray (60 PSI)
```

### 1.3 Settling Tanks

**Radial Flow Clarifier:**
```
Design Parameters:
Surface loading rate: 400-800 gal/day/ft²
Depth: 6-10 feet
Retention time: 1-3 hours

Sizing Example:
Flow: 150 GPM = 216,000 gal/day
Loading rate: 600 gal/day/ft²
Area = 216,000 / 600 = 360 ft²
Diameter = √(360 × 4 / π) = 21.4 ft → Use 22 ft

Volume: π × 11² × 8 ft = 3,040 ft³ = 22,750 gallons
Retention: 22,750 / 150 = 152 min = 2.5 hours ✓
```

---

## 2. Disinfection Systems

### 2.1 UV Sterilization

**UV Dose Calculation:**
```
Dose (mJ/cm²) = Intensity × Time

Required doses for aquaculture:
Bacteria reduction (99%): 30-40 mJ/cm²
Virus inactivation: 60-90 mJ/cm²
Algae/protozoa: 100-200 mJ/cm²

UV Unit Sizing:
Flow: 200 GPM
Required dose: 60 mJ/cm² (virus control)
UVT (transmittance): 85% (typical for aquaponics)

From manufacturer charts:
Select: 300 GPM rated unit @ 60 mJ/cm² with 85% UVT

Power: 2-4 kW (lamp + ballast)
Lamp life: 9,000-12,000 hours (annual replacement)
```

### 2.2 Ozone Systems

**Ozone Dosing:**
```
Target: 0.05-0.15 mg O₃/L in contact chamber
Contact time: 3-10 minutes
Off-gas must be destroyed (ozone is toxic)

Example:
Flow: 100 GPM = 378.5 L/min
Target concentration: 0.10 mg/L
Required ozone = 378.5 × 0.10 = 37.85 mg/min = 2.27 g/hr

Ozone generator: 3 g/hr capacity
Feed gas: Oxygen (5% O₃ generation) or air (1-2%)
Power: 100-150 W per g/hr production

Advantages: Oxidizes organics, increases DO
Disadvantages: Expensive, requires off-gas destruction
```

---

## 3. Dechlorination

### 3.1 Municipal Water Treatment

**Chlorine/Chloramine Removal:**
```
Chlorine: 0.5-2.0 mg/L typical in municipal water
Chloramine: 1.0-4.0 mg/L (harder to remove)

Methods:
1. Carbon filtration (best for chlorine)
2. Sodium thiosulfate dosing (emergency)
3. UV + catalytic carbon (chloramines)
4. Aeration (slow, chlorine only)
```

**Activated Carbon Filters:**
```
Contact time: 5-10 minutes (EBCT)
Loading rate: 2-5 GPM/ft² bed area
Bed depth: 24-36 inches

Sizing:
Flow: 50 GPM
Contact time: 7 minutes = 0.117 hours
Volume = 50 GPM × 0.117 hr × 60 min/hr = 350 gallons

Bed volume: 350 / 7.48 = 46.8 ft³

Using 36" (3 ft) bed depth:
Area = 46.8 / 3 = 15.6 ft²
Diameter = √(15.6 × 4 / π) = 4.5 ft

Use 5 ft diameter × 3 ft deep carbon vessel
Media: 60 ft³ activated carbon (GAC)
Replacement: Annual (chlorine) or 2-3 years (chloramine)
```

---

## 4. Solids Management

### 4.1 Sludge Dewatering

**Belt Filter Press:**
```
Capacity: 10-100 GPM sludge
Inlet solids: 0.5-3% TSS
Output cake: 15-25% TSS
Polymer dosing: 2-8 lb/ton dry solids

Example:
Sludge production: 500 lb/day (dry basis)
Inlet concentration: 1% = 50,000 lb total (500 lb solids)
= 6,000 gallons/day input

Output cake: 20% = 2,500 lb wet (500 lb dry)
Water removed: 47,500 lb = 5,700 gallons

Belt press size: 1-2 GPM capacity
Runtime: 6,000 gal / (1.5 GPM × 60 min/hr) = 67 hours/week
```

### 4.2 Composting

**Solids Disposal:**
```
Fish waste solids: High nitrogen, excellent fertilizer
Composting ratio: 3:1 carbon:nitrogen

Mix with:
- Sawdust
- Wood chips
- Straw
- Cardboard

Composting process:
Week 1-2: Thermophilic phase (130-150°F)
Week 3-4: Mesophilic phase (100-120°F)
Week 5-8: Curing phase (80-100°F)

Output: High-quality compost for gardens/landscaping
```

---

## 5. Effluent Treatment

### 5.1 Discharge Standards

**NPDES Permit Limits (Example):**

| Parameter | Typical Limit | Aquaponic Effluent |
|-----------|---------------|---------------------|
| BOD₅ | <30 mg/L | 10-50 mg/L |
| TSS | <30 mg/L | 10-60 mg/L |
| Ammonia-N | <10 mg/L | <1 mg/L (if biofiltered) |
| Nitrate-N | <10 mg/L | 50-200 mg/L (high!) |
| pH | 6-9 | 6.5-8.0 |

**Challenge:** Nitrate is typically high in aquaponics
**Solution:** Denitrification or water reuse (minimize discharge)

### 5.2 Denitrification

**Anoxic Denitrification:**
```
NO₃⁻ → NO₂⁻ → NO → N₂O → N₂ (gas)

Requirements:
- Anoxic conditions (DO < 0.5 mg/L)
- Carbon source (methanol, ethanol, acetate)
- Denitrifying bacteria
- Retention time: 2-6 hours

Carbon requirement:
2.5 g COD per 1 g NO₃⁻-N removed

Example:
Remove 100 mg/L NO₃⁻-N from 10,000 gal/day
Daily NO₃⁻-N = 100 mg/L × 10,000 gal × 3.785 L/gal / 1000
              = 3,785 g/day = 8.3 lb/day

Carbon (COD) = 8.3 × 2.5 = 20.8 lb COD/day

Using methanol (1.5 lb COD/lb methanol):
Methanol = 20.8 / 1.5 = 13.9 lb/day = 1.7 gallons/day

Reactor volume:
10,000 gal/day with 4-hour retention
V = 10,000 / (24/4) = 1,667 gallons
```

---

## Summary

Water treatment systems ensure quality for fish and plants while meeting environmental regulations:

1. Mechanical filtration removes suspended solids
2. UV disinfection controls pathogens
3. Dechlorination treats municipal water
4. Ozone provides advanced oxidation
5. Solids dewatering enables composting
6. Denitrification reduces nitrate for discharge compliance

Proper water treatment is essential for biosecurity and regulatory compliance.

---

## Check Your Understanding

1. Size a radial flow clarifier for 250 GPM at 600 gal/day/ft² loading rate with 2-hour retention.

2. Specify a UV unit for 300 GPM requiring 60 mJ/cm² dose with 80% UVT water.

3. Size an activated carbon vessel for dechlorinating 75 GPM with 8-minute contact time.

4. Calculate ozone dosing rate for 150 GPM at target concentration of 0.12 mg/L.

5. Design a belt filter press system for dewatering 800 lb/day (dry basis) sludge from 1.5% to 18% solids.

6. Calculate methanol dosing for denitrification reactor treating 15,000 gal/day with 120 mg/L NO₃⁻-N.

7. Specify a drum filter for 400 GPM with 80 mg/L TSS, targeting 100-micron filtration.

8. Determine compost recipe for 200 lb/day fish solids (assume 3:1 C:N ratio, 25% carbon in amendments).

9. Design an effluent treatment system to reduce nitrate from 150 mg/L to <10 mg/L in 20,000 gal/day discharge.

10. Calculate annual replacement cost for: UV lamps ($300 each, 3 units, annual), carbon media (8,000 lb @ $2/lb, every 2 years), drum filter screens ($500, every 6 months).

---

**Next Module:** Module 13 - Aeration System Design
