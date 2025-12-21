# Recirculating Water System Diagram
## Course 212: Water Conservation & Recirculation

---

## Complete CEA Recirculating Water System

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║                   COMPREHENSIVE RECIRCULATING WATER SYSTEM                    ║
║                        (Typical Commercial CEA Setup)                         ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝


                            WATER SOURCES
                                 │
                    ┌────────────┼────────────┐
                    │            │            │
                    ▼            ▼            ▼
              ┌──────────┐ ┌──────────┐ ┌──────────┐
              │Municipal │ │Rainwater │ │   Well   │
              │  Water   │ │Collection│ │  Water   │
              │          │ │  System  │ │          │
              └────┬─────┘ └────┬─────┘ └────┬─────┘
                   │            │            │
                   │ ┌──────────┼───────────┐│
                   │ │          │           ││
                   ▼ ▼          ▼           ▼▼
              ┌─────────────────────────────────┐
              │    SOURCE WATER TREATMENT       │
              │                                 │
              │  • Carbon filter (chlorine)     │
              │  • Sediment filter (particles)  │
              │  • UV (if contaminated)         │
              │  • RO (if high TDS/EC)          │
              │  • pH adjustment (if needed)    │
              └──────────────┬──────────────────┘
                             │
                             ▼
                   ┌─────────────────────┐
                   │   Treated Fresh     │
                   │   Water Storage     │
                   │   (500-2,000 gal)   │
                   └──────────┬──────────┘
                              │
                              │ Makeup Water (2-10% daily)
                              │
                              ▼
        ╔═══════════════════════════════════════════════════════════════╗
        ║                                                               ║
        ║                    MAIN RECIRCULATION LOOP                    ║
        ║                                                               ║
        ║   ┌──────────────────────────────────────────────────┐        ║
        ║   │                                                  │        ║
        ║   │         CENTRAL RESERVOIR/SUMP                   │        ║
        ║   │         (20-30% of system volume)                │        ║
        ║   │                                                  │        ║
        ║   │  ┌───────────────────────────────────────┐       │        ║
        ║   │  │ NUTRIENT & CHEMISTRY MANAGEMENT       │       │        ║
        ║   │  │ • Nutrient stock tanks (A & B)        │       │        ║
        ║   │  │ • pH adjustment (acid/base)           │       │        ║
        ║   │  │ • EC/pH dosing pumps                  │       │        ║
        ║   │  │ • Mixing/circulation                  │       │        ║
        ║   │  └───────────────────────────────────────┘       │        ║
        ║   │                                                  │        ║
        ║   │  ┌───────────────────────────────────────┐       │        ║
        ║   │  │ MONITORING INSTRUMENTS                │       │        ║
        ║   │  │ • pH probe (continuous)               │       │        ║
        ║   │  │ • EC meter (continuous)               │       │        ║
        ║   │  │ • Temperature sensor                  │       │        ║
        ║   │  │ • Water level sensor                  │       │        ║
        ║   │  │ • DO probe (optional)                 │       │        ║
        ║   │  └───────────────────────────────────────┘       │        ║
        ║   │                                                  │        ║
        ║   └──────────────────┬───────────────────────────────┘        ║
        ║                      │                                        ║
        ║                      ▼                                        ║
        ║            ┌──────────────────┐                               ║
        ║            │   MAIN PUMP(S)   │                               ║
        ║            │                  │                               ║
        ║            │  • Primary pump  │                               ║
        ║            │  • Backup pump   │  Pump Specs:                  ║
        ║            │  • Flow meter    │  • GPM = Volume ÷ Turnover    ║
        ║            │  • Check valve   │  • Sized for TDH              ║
        ║            │  • Isolation     │  • VFD (variable speed)       ║
        ║            │    valves        │  • 20-30% safety margin       ║
        ║            └────────┬─────────┘                               ║
        ║                     │                                         ║
        ║                     ▼                                         ║
        ║   ┌─────────────────────────────────────────────┐             ║
        ║   │          DISTRIBUTION MANIFOLD              │             ║
        ║   │                                             │             ║
        ║   │    ┌──────┬──────┬──────┬──────┬──────┐    │             ║
        ║   │    ▼      ▼      ▼      ▼      ▼      ▼    │             ║
        ║   │  Zone   Zone   Zone   Zone   Zone   Zone   │             ║
        ║   │    1      2      3      4      5      6    │             ║
        ║   └─────────────────────────────────────────────┘             ║
        ║                     │                                         ║
        ║                     ▼                                         ║
        ║   ┌─────────────────────────────────────────────────────┐    ║
        ║   │                                                     │    ║
        ║   │            GROWING ZONES                            │    ║
        ║   │                                                     │    ║
        ║   │   ┌──────────┐  ┌──────────┐  ┌──────────┐         │    ║
        ║   │   │  DWC     │  │  NFT     │  │  Media   │         │    ║
        ║   │   │  Raft    │  │Channels  │  │  Beds    │         │    ║
        ║   │   │          │  │          │  │          │         │    ║
        ║   │   │ • Roots  │  │ • Roots  │  │ • Roots  │         │    ║
        ║   │   │   in     │  │   in     │  │   in     │         │    ║
        ║   │   │   water  │  │   film   │  │   media  │         │    ║
        ║   │   └────┬─────┘  └────┬─────┘  └────┬─────┘         │    ║
        ║   │        │             │             │               │    ║
        ║   │        └─────────────┼─────────────┘               │    ║
        ║   │                      │                             │    ║
        ║   │        ┌─────────────▼─────────────┐               │    ║
        ║   │        │    PLANT PROCESSES        │               │    ║
        ║   │        │                           │               │    ║
        ║   │        │  • Water uptake           │               │    ║
        ║   │        │  • Nutrient absorption    │               │    ║
        ║   │        │  • Root exudates          │               │    ║
        ║   │        │  • Debris generation      │               │    ║
        ║   │        │  • Transpiration ─────────┼──────► EVAPORATION  ║
        ║   │        │                           │       (90-95% loss) ║
        ║   │        └───────────────────────────┘                     ║
        ║   │                                                     │    ║
        ║   └─────────────────────┬───────────────────────────────┘    ║
        ║                         │                                    ║
        ║                         │ Return Flow (gravity drain)        ║
        ║                         │                                    ║
        ║                         ▼                                    ║
        ║   ┌───────────────────────────────────────────────────┐     ║
        ║   │                                                   │     ║
        ║   │        MULTI-STAGE FILTRATION                     │     ║
        ║   │                                                   │     ║
        ║   │   Stage 1: SCREEN FILTER (200-300 µm)            │     ║
        ║   │   │                                               │     ║
        ║   │   │ Purpose: Remove large debris                 │     ║
        ║   │   │ • Root fragments                              │     ║
        ║   │   │ • Algae clumps                                │     ║
        ║   │   │ • Plant material                              │     ║
        ║   │   │                                               │     ║
        ║   │   ▼                                               │     ║
        ║   │   Stage 2: SAND/BAG FILTER (30-50 µm)            │     ║
        ║   │   │                                               │     ║
        ║   │   │ Purpose: Remove fine particles               │     ║
        ║   │   │ • Suspended solids                            │     ║
        ║   │   │ • Biofilm fragments                           │     ║
        ║   │   │ • Automated backwash                          │     ║
        ║   │   │                                               │     ║
        ║   │   ▼                                               │     ║
        ║   │   Stage 3: POLISH FILTER (5-20 µm) [Optional]    │     ║
        ║   │   │                                               │     ║
        ║   │   │ Purpose: Final particle removal              │     ║
        ║   │   │ • Optimize UV efficiency                      │     ║
        ║   │   │ • Cartridge or disc filter                    │     ║
        ║   │   │                                               │     ║
        ║   │   └──────► Backwash/Cleaning ───► DISCHARGE       │     ║
        ║   │            (periodic)              (1-3% daily)   │     ║
        ║   │                                                   │     ║
        ║   └──────────────────┬────────────────────────────────┘     ║
        ║                      │                                      ║
        ║                      ▼                                      ║
        ║   ┌─────────────────────────────────────────────────────┐  ║
        ║   │                                                     │  ║
        ║   │      STERILIZATION/DISINFECTION                     │  ║
        ║   │                                                     │  ║
        ║   │   ┌────────────────────────────────────┐            │  ║
        ║   │   │  UV STERILIZATION                  │            │  ║
        ║   │   │                                    │            │  ║
        ║   │   │  • UV-C lamps (254 nm)             │            │  ║
        ║   │   │  • Dose: 100-200 mJ/cm²            │            │  ║
        ║   │   │  • Chamber flow velocity: 2-4 ft/s │            │  ║
        ║   │   │  • Turbidity < 5 NTU required      │            │  ║
        ║   │   │  • Lamp intensity monitoring       │            │  ║
        ║   │   │  • Automatic wiper system          │            │  ║
        ║   │   │                                    │            │  ║
        ║   │   │  Targets: Bacteria, viruses,       │            │  ║
        ║   │   │           fungi, algae spores      │            │  ║
        ║   │   └────────────────────────────────────┘            │  ║
        ║   │                                                     │  ║
        ║   │   ┌────────────────────────────────────┐            │  ║
        ║   │   │  OZONE TREATMENT (Alternative)     │            │  ║
        ║   │   │                                    │            │  ║
        ║   │   │  • Ozone generator (corona/UV)     │            │  ║
        ║   │   │  • Dose: 0.5-2.0 mg/L              │            │  ║
        ║   │   │  • Contact time: 2-5 minutes       │            │  ║
        ║   │   │  • ORP monitoring: 650-750 mV      │            │  ║
        ║   │   │  • Off-gas destruction             │            │  ║
        ║   │   │                                    │            │  ║
        ║   │   │  Benefits: Oxidizes organics,      │            │  ║
        ║   │   │           flocculation aid         │            │  ║
        ║   │   └────────────────────────────────────┘            │  ║
        ║   │                                                     │  ║
        ║   └──────────────────┬──────────────────────────────────┘  ║
        ║                      │                                     ║
        ║                      │ Clean, Sterilized Water             ║
        ║                      │                                     ║
        ║                      ▼                                     ║
        ║            ┌──────────────────┐                            ║
        ║            │  POST-TREATMENT  │                            ║
        ║            │   MONITORING     │                            ║
        ║            │                  │                            ║
        ║            │  • pH (verify)   │                            ║
        ║            │  • EC (verify)   │                            ║
        ║            │  • ORP/UV dose   │                            ║
        ║            │  • Turbidity     │                            ║
        ║            └────────┬─────────┘                            ║
        ║                     │                                      ║
        ║                     │                                      ║
        ║                     │ 95-98% RECIRCULATION                 ║
        ║                     │                                      ║
        ║                     └──────────────┐                       ║
        ║                                    │                       ║
        ║        ┌───────────────────────────┘                       ║
        ║        │                                                   ║
        ║        └────► Return to RESERVOIR/SUMP                     ║
        ║               (Cycle continues)                            ║
        ║                                                            ║
        ╚════════════════════════════════════════════════════════════╝


═════════════════════════════════════════════════════════════════════
                         ANCILLARY SYSTEMS
═════════════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  TEMPERATURE MANAGEMENT                                          │
│                                                                  │
│    ┌──────────────┐                    ┌──────────────┐         │
│    │   CHILLER    │                    │    HEATER    │         │
│    │              │                    │              │         │
│    │ • Activated  │                    │ • Activated  │         │
│    │   if temp    │                    │   if temp    │         │
│    │   > 75°F     │                    │   < 60°F     │         │
│    │              │                    │              │         │
│    │ Heat         │                    │ Element or   │         │
│    │ Exchanger    │                    │ Heat Pump    │         │
│    └──────────────┘                    └──────────────┘         │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  AERATION/OXYGENATION                                            │
│                                                                  │
│    ┌──────────────────────────────────────────────┐             │
│    │  Air Pump → Diffusers → Growing Zones        │             │
│    │                                               │             │
│    │  Maintains DO levels                         │             │
│    │  Target: 6-9 mg/L                             │             │
│    │                                               │             │
│    │  Options:                                     │             │
│    │  • Air stones (simple)                        │             │
│    │  • Venturi injectors (efficient)              │             │
│    │  • Cone aerators (large scale)                │             │
│    │  • Pure O₂ injection (intensive)              │             │
│    └──────────────────────────────────────────────┘             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  BACKUP & EMERGENCY SYSTEMS                                      │
│                                                                  │
│    • Generator (power backup)                                    │
│    • Battery backup (critical sensors/alarms)                    │
│    • Emergency aeration                                          │
│    • Auto-dialer/SMS alerts                                      │
│    • Manual bypass valves                                        │
│    • Redundant pumps                                             │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘


═════════════════════════════════════════════════════════════════════
                    SYSTEM PERFORMANCE METRICS
═════════════════════════════════════════════════════════════════════

WATER BALANCE (Daily):

  INPUT:                                OUTPUT:
  • Fresh makeup: 5-10%                • Evapotranspiration: 90-95%
  • Rainwater: 0-50%                   • Backwash: 1-3%
  • (of makeup needs)                  • Dump/purge: 2-5%
                                       • Leaks/spray: <1%

RECIRCULATION EFFICIENCY:

  Recirculation Rate = (Total Flow - Discharge) ÷ Total Flow × 100%

  Typical: 95-98%
  Best Practice: >97%

TURNOVER RATE:

  System Volume ÷ Flow Rate = Turnover Time

  DWC: 1-2 hours
  NFT: 15-30 minutes
  Media beds: 2-4 hours

WATER USE EFFICIENCY (WUE):

  WUE = kg crop produced ÷ liters water consumed

  Field lettuce: 1-2 kg/m³
  Hydroponic lettuce: 10-25 kg/m³
  Improvement: 10-20×


═════════════════════════════════════════════════════════════════════
              MAINTENANCE & MONITORING SCHEDULE
═════════════════════════════════════════════════════════════════════

DAILY:
  □ pH and EC (all zones)
  □ Temperature (multiple points)
  □ Visual inspection of all zones
  □ Check pumps and flow rates
  □ Verify UV lamp operation
  □ Water level check

WEEKLY:
  □ Clean screen filters
  □ Nutrient analysis (N-P-K)
  □ Backwash sand filters
  □ Check DO levels
  □ Inspect for leaks
  □ Calibrate pH/EC meters

MONTHLY:
  □ Full water quality panel
  □ Clean UV quartz sleeves
  □ Inspect all pumps/seals
  □ Check all valves
  □ Test backup systems
  □ Review data logs

QUARTERLY:
  □ Laboratory water analysis
  □ Replace UV lamps (if needed)
  □ Deep clean reservoir
  □ Calibrate all sensors
  □ System performance audit
  □ Update SOPs if needed


═════════════════════════════════════════════════════════════════════
```

---

## System Component Details

### 1. Water Sources

**Municipal Water:**
- Most common source
- Chlorine/chloramine treatment required
- Consistent quality
- May have high alkalinity

**Rainwater:**
- Ideal for CEA (low EC, soft)
- Requires collection, filtration, storage
- Quality varies seasonally
- May lack essential minerals

**Well Water:**
- Variable quality
- Test before use (minerals, hardness, contaminants)
- May require RO if high TDS
- Temperature stable

---

### 2. Reservoir Sizing

**Formula:**
```
Reservoir Volume = System Volume × 0.25-0.30

Example:
Growing system: 5,000 gallons
Reservoir: 1,250-1,500 gallons
```

**Functions:**
- Water level buffer
- Nutrient mixing zone
- Primary monitoring point
- Temperature stabilization
- Emergency water supply

---

### 3. Pump Selection

**Flow Rate Calculation:**
```
GPM = System Volume (gal) ÷ Turnover Time (min)

Example:
5,000 gal system
Target turnover: 2 hours (120 min)
Required flow: 5,000 ÷ 120 = 42 GPM
Select pump: 50 GPM (with safety margin)
```

**Total Dynamic Head (TDH):**
```
TDH = Vertical Lift + Friction Loss + Fittings + Pressure

Example:
Vertical: 10 ft
Friction (pipe): 8 ft
Fittings: 5 ft
Pressure head: 2 ft
────────────────
TDH: 25 ft

Select pump rated: 50 GPM @ 30 ft head
```

---

### 4. Filtration Requirements

**Screen Filter:**
- First stage
- 200-300 micron
- Manual or automatic cleaning
- Protects downstream equipment

**Sand/Bag Filter:**
- Primary filtration
- 30-50 micron
- Automated backwash preferred
- Removes 90%+ suspended solids

**Polish Filter:**
- Optional, before UV
- 5-20 micron
- Ensures UV effectiveness
- Cartridge or disc type

---

### 5. UV Sterilization

**Sizing:**
```
Required Dose: 100-200 mJ/cm²

UV Unit Rating ≥ System Flow Rate

Example:
System flow: 50 GPM
Select UV: Rated 60 GPM @ 100 mJ/cm²
(Provides safety margin)
```

**Critical Factors:**
- Water turbidity < 5 NTU
- Lamp intensity monitoring
- Quartz sleeve cleanliness
- Contact time (chamber design)
- Annual lamp replacement

---

### 6. Water Quality Testing Points

**Critical Control Points:**

1. **Source Water** - Before entering system
2. **Reservoir** - After nutrient addition
3. **Post-Growing Zone** - After plant uptake
4. **Post-Filtration** - Verify cleaning effectiveness
5. **Post-UV** - Verify sterilization
6. **End-of-Line** - Verify distribution uniformity

---

## Water Conservation Strategies

### Reduce Evapotranspiration (90-95% of losses)
- Cover exposed water surfaces
- Optimize VPD (vapor pressure deficit)
- Use shade/reflective coverings in summer
- Proper plant spacing
- Nighttime temperature management

### Minimize Discharge (1-5% of losses)
- Optimize filter backwash frequency
- Settle and reuse backwash water
- Extend reservoir dump intervals with good management
- Fix leaks immediately
- Optimize irrigation scheduling

### Maximize Recirculation
- Effective multi-stage filtration
- Reliable UV/ozone sterilization
- Vigilant water quality monitoring
- Prevent pathogen introduction (biosecurity)
- Regular system maintenance

### Alternative Water Sources
- Rainwater harvesting (50-100% of makeup needs possible)
- HVAC condensate recovery
- Greywater (with appropriate treatment)
- Reclaimed water (where permitted)

---

## Common Issues and Solutions

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| High EC buildup | Evaporation concentration | Partial water change, reduce nutrient strength |
| Low DO | High temp, poor aeration | Chill water, increase aeration, reduce biomass |
| pH drift | Nutrient uptake patterns | Adjust dosing, check alkalinity |
| Cloudy water | Filter failure, bacterial bloom | Check/clean filters, verify UV operation |
| Algae growth | Light in reservoir, high nutrients | Eliminate light, reduce nutrients, UV treatment |
| Pathogen outbreak | UV failure, contamination | Verify UV dose, check biosecurity, consider ozone |

---

*EcoFusion Academy - Course 212*
