# Water Treatment Process Flowchart
## Course 212: Water Conservation & Recirculation

---

## Complete Treatment Train Decision Tree

```
START: Source Water Characterization
         │
         ▼
   ┌──────────────────┐
   │ Test Source Water│
   │ • pH             │
   │ • EC/TDS         │
   │ • Chlorine/amine │
   │ • Hardness       │
   │ • Iron/Manganese │
   └────────┬─────────┘
            │
            ▼
      ╔═══════════════════╗
      ║ TREATMENT NEEDED? ║
      ╚═══╤═══════════╤═══╝
          │           │
     YES  │           │  NO → Skip to Recirculation Treatment
          │           │
          ▼           │
    ┌─────────────────┴──────────────┐
    │                                │
    │  SOURCE WATER TREATMENT        │
    │                                │
    └────────────────────────────────┘
```

---

## Part 1: Source Water Treatment Decision Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                  SOURCE WATER TREATMENT SELECTION                        │
└──────────────────────────────────────────────────────────────────────────┘

1. CHLORINE PRESENT?
   │
   ├─► YES (>0.1 ppm) ──► Activated Carbon Filter (GAC)
   │                      • 1-2 GPM per cubic foot
   │                      • Complete chlorine removal
   │                      • Cost: $500-2,000
   │                      │
   │                      └─► Continue to next check
   │
   └─► NO ──────────────► Continue to next check


2. CHLORAMINE PRESENT?
   │
   ├─► YES (>0.1 ppm) ──► Catalytic Carbon Filter
   │                      • 0.5-1 GPM per cubic foot
   │                      • 5-10 min contact time
   │                      • Cost: $800-3,000
   │                      │
   │                      └─► Continue to next check
   │
   └─► NO ──────────────► Continue to next check


3. HIGH TDS/EC?
   │
   ├─► YES (>300 ppm / 0.5 mS/cm) ──┐
   │                                 │
   │   ┌─────────────────────────────┘
   │   │
   │   ├─► VERY HIGH (>600 ppm / 1.0 mS/cm)
   │   │   └─► Reverse Osmosis (RO)
   │   │       • Removes 95-99% TDS
   │   │       • 40-50% recovery rate
   │   │       • Cost: $2,000-10,000
   │   │       • Operating: $2-5 per 1,000 gal
   │   │
   │   └─► MODERATE (300-600 ppm)
   │       └─► OPTIONS:
   │           • Blend with RO water, OR
   │           • Accept and manage in fertigation
   │           • Monitor accumulation
   │
   └─► NO (<300 ppm) ──► Continue to next check


4. HIGH HARDNESS (Ca/Mg)?
   │
   ├─► YES (>200 ppm) ──┐
   │                    │
   │   ┌────────────────┘
   │   │
   │   ├─► EXTREME (>400 ppm)
   │   │   └─► RO Treatment (also reduces TDS)
   │   │       • Softening adds sodium (not recommended for CEA)
   │   │
   │   └─► MODERATE (200-400 ppm)
   │       └─► OPTIONS:
   │           • Use hardness (Ca/Mg are beneficial)
   │           • Blend with RO or rainwater
   │           • Monitor for precipitation at high pH
   │
   └─► NO (<200 ppm) ──► Acceptable - Continue


5. IRON/MANGANESE PRESENT?
   │
   ├─► YES
   │   │
   │   ├─► LOW (Fe <3 ppm, Mn <0.5 ppm)
   │   │   └─► Oxidation + Filtration
   │   │       • Aerate or chlorinate
   │   │       • Sand/greensand filter
   │   │       • Cost: $1,500-4,000
   │   │
   │   └─► HIGH (Fe >3 ppm, Mn >0.5 ppm)
   │       └─► Professional Treatment or RO
   │           • Specialized oxidation system
   │           • Or RO removes all
   │
   └─► NO (<0.3 ppm each) ──► No treatment needed


6. pH EXTREME?
   │
   ├─► YES (pH <6.0 or >8.0)
   │   └─► Chemical Adjustment
   │       • Low pH: Add potassium carbonate
   │       • High pH: Add acid (phosphoric/nitric)
   │       • Adjust to 6.0-7.0 range
   │       • Cost: $100-500 (dosing pump)
   │
   └─► NO (pH 6.0-8.0) ──► Acceptable range


   ▼
┌────────────────────────────────────┐
│ SOURCE WATER TREATMENT COMPLETE    │
│                                    │
│ Water now suitable for            │
│ agricultural use                   │
└────────────────┬───────────────────┘
                 │
                 ▼
        To Growing System
```

---

## Part 2: Recirculation Treatment Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│              RECIRCULATING WATER TREATMENT PROCESS                       │
└──────────────────────────────────────────────────────────────────────────┘

Water from Growing System
         │
         ▼
┌─────────────────────┐
│ STAGE 1:            │
│ Coarse Filtration   │
│                     │
│ Screen Filter       │
│ • 200-500 microns   │
│ • Removes debris    │
│ • Low pressure drop │
│ • Weekly cleaning   │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ STAGE 2:            │
│ Primary Filtration  │
│                     │
│ Select based on     │
│ system type:        │
│                     │
│ DWC/NFT:            │
│ • Bag (50 µm) or    │
│ • Sand (30 µm)      │
│                     │
│ Aquaponics:         │
│ • Drum (100 µm) +   │
│ • Sand (30 µm)      │
└──────┬──────────────┘
       │
       ├──► Backwash ──► To Waste or Recovery
       │                 (1-3% of flow)
       │
       ▼
┌─────────────────────┐
│ CHECK TURBIDITY     │
│                     │
│ Is turbidity <5 NTU?│
│                     │
│ ├─ YES ──► Continue │
│ │                   │
│ └─ NO ───► Add     │
│      Polish Filter  │
│      (5-20 µm)      │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ STAGE 3:            │
│ Sterilization       │
│                     │
│ UV Treatment        │
│ • 30-40 mJ/cm²      │
│ • Continuous        │
│ • 4-10 sec exposure │
│                     │
│ Optional: Ozone     │
│ • 0.5-1.0 ppm       │
│ • Batch/periodic    │
│ • 2-5 min contact   │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ CHECK ORP/UV        │
│                     │
│ UV intensity OK?    │
│ ORP >650 mV?        │
│                     │
│ ├─ YES ──► Continue │
│ │                   │
│ └─ NO ───► Check:  │
│      • UV lamp life │
│      • Quartz clean │
│      • Ozone output │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ RESERVOIR/MIXING    │
│                     │
│ • pH adjustment     │
│ • EC adjustment     │
│ • Nutrient addition │
│ • DO optimization   │
│                     │
│ MONITOR:            │
│ • pH: 5.5-6.5       │
│ • EC: Crop-specific │
│ • Temp: 65-75°F     │
│ • DO: >6 mg/L       │
└──────┬──────────────┘
       │
       ▼
┌─────────────────────┐
│ QUALITY CHECK       │
│                     │
│ All parameters OK?  │
│                     │
│ ├─ YES ──┐          │
│ │        │          │
│ └─ NO ───┼─► Adjust│
│          │   and    │
│          │   Recheck│
└──────────┴──────────┘
       │
       │ Water meets all targets
       │
       ▼
┌─────────────────────┐
│ RETURN TO           │
│ GROWING SYSTEM      │
│                     │
│ 95-98%              │
│ Recirculation Rate  │
└─────────────────────┘
```

---

## Part 3: Troubleshooting Treatment Issues

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                  TREATMENT PROBLEM FLOWCHART                              ║
╚═══════════════════════════════════════════════════════════════════════════╝

PROBLEM IDENTIFIED
      │
      ▼
┌──────────────────────────────────────────────────────────────────────────┐
│ What is the symptom?                                                     │
└──┬───────────────────────────────────────────────────────────────────────┘
   │
   ├─► CHLORINE/CHLORAMINE DETECTED IN SYSTEM
   │   │
   │   └─► Is carbon filter installed?
   │       │
   │       ├─ NO ──► Install activated carbon (or catalytic for chloramine)
   │       │
   │       └─ YES ─► Check:
   │           • Carbon exhausted? → Replace carbon
   │           • Breakthrough? → Increase contact time/bed size
   │           • Bypass leak? → Inspect valves, connections
   │
   │
   ├─► CLOUDY WATER PERSISTS AFTER FILTRATION
   │   │
   │   └─► Check turbidity level:
   │       │
   │       ├─ >20 NTU ──► Primary filter failure
   │       │              • Check backwash function
   │       │              • Replace filter media
   │       │              • Upgrade filter capacity
   │       │
   │       ├─ 10-20 NTU ─► Inadequate filtration
   │       │              • Add polishing stage
   │       │              • Reduce loading rate
   │       │
   │       └─ 5-10 NTU ──► May be bacterial bloom
   │                      • Check UV function
   │                      • Clean UV sleeve
   │                      • Replace UV lamp
   │                      • Consider ozone shock
   │
   │
   ├─► DISEASE OUTBREAK DESPITE UV
   │   │
   │   └─► UV system check:
   │       │
   │       ├─► Lamp hours > 9,000? ──► Replace lamp
   │       │
   │       ├─► Quartz sleeve dirty? ──► Clean sleeve
   │       │
   │       ├─► Turbidity >5 NTU? ──► Improve pre-filtration
   │       │
   │       ├─► Flow rate too high? ──► Reduce flow or add UV capacity
   │       │
   │       └─► Air pockets in chamber? ──► Re-plumb, purge air
   │
   │
   ├─► EC/TDS RISING DESPITE MANAGEMENT
   │   │
   │   └─► Diagnosis:
   │       │
   │       ├─► Source water high TDS?
   │       │   └─► Solution: Install RO or blend with low-TDS source
   │       │
   │       ├─► Evapotranspiration concentration?
   │       │   └─► Solution: More frequent partial water changes
   │       │
   │       └─► Over-fertilization?
   │           └─► Solution: Reduce nutrient concentration
   │
   │
   └─► RAPID FILTER CLOGGING
       │
       └─► Diagnosis:
           │
           ├─► High solids loading?
           │   └─► Solution: Add coarse pre-filter stage
           │
           ├─► Algae growth?
           │   └─► Solution: Eliminate light exposure, improve UV
           │
           ├─► Biofilm buildup?
           │   └─► Solution: Ozone shock treatment, clean system
           │
           └─► Filter undersized?
               └─► Solution: Upgrade filter capacity or add parallel unit
```

---

## Part 4: Maintenance Decision Flow

```
┌──────────────────────────────────────────────────────────────────────────┐
│                    MAINTENANCE SCHEDULE FLOW                             │
└──────────────────────────────────────────────────────────────────────────┘

DAILY
  │
  ├─► Check filter pressure differential
  │   └─► ΔP >10 psi? ──► YES ──► Backwash or clean filter
  │       └─► NO ──► Record and monitor
  │
  └─► Verify UV lamp on
      └─► Not lit? ──► Check power, replace ballast/lamp if needed


WEEKLY
  │
  ├─► Clean screen pre-filters
  │
  ├─► Check UV intensity (if sensor equipped)
  │   └─► <60% of new? ──► Plan lamp replacement
  │
  └─► Inspect system for leaks


MONTHLY
  │
  ├─► Clean UV quartz sleeve
  │   • Remove from housing
  │   • Clean with vinegar or CLR
  │   • Rinse thoroughly
  │   • Reinstall
  │
  ├─► Replace bag filters (if used)
  │
  ├─► Check carbon bed depth (if carbon filter)
  │   └─► Settled >2"? ──► Top off or replace
  │
  └─► Deep clean reservoir


QUARTERLY
  │
  ├─► Replace cartridge filters
  │
  ├─► Inspect sand media (if sand filter)
  │   • Check for channeling
  │   • Look for clumping
  │   • Verify bed depth
  │   └─► Issues? ──► Replace sand
  │
  └─► Professional water quality test


ANNUALLY
  │
  ├─► Replace UV lamp (9,000-14,000 hours)
  │
  ├─► Evaluate carbon media replacement
  │   └─► Chlorine/chloramine breakthrough? ──► Replace
  │
  ├─► Inspect all valves and seals
  │
  └─► System performance audit
      • Water use efficiency
      • Recirculation rate
      • Treatment effectiveness
```

---

*EcoFusion Academy - Course 212*
