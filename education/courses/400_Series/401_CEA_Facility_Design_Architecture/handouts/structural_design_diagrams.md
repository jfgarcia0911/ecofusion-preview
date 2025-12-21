# Structural Design Diagrams and Reference

## Greenhouse Structural Systems

### Gable Frame Greenhouse

```
SECTION VIEW - POST AND TRUSS SYSTEM
=====================================

                Ridge
                 ▲
                ╱│╲
     Truss    ╱  │  ╲    Truss
            ╱    │    ╲
          ╱      │      ╲
    Purlin ──────┼────── Purlin
        ╱        │        ╲
      ╱          │          ╲
    ╱            │            ╲
  ╱              │              ╲
▕────────────────┼────────────────▏ Gutter
│                │                │
│     Post       │       Post     │
│                │                │
└────────────────┴────────────────┘
        Foundation

Typical Dimensions:
- Span: 20-30 ft
- Eave height: 10-16 ft
- Peak height: 16-24 ft
- Post spacing: 10-12 ft
- Purlin spacing: 4-6 ft
```

### Gutter-Connected Multi-Bay

```
CROSS SECTION - VENLO GREENHOUSE
=================================

 ╱╲   ╱╲   ╱╲   ╱╲   ╱╲   ╱╲
╱  ╲ ╱  ╲ ╱  ╲ ╱  ╲ ╱  ╲ ╱  ╲
    X    X    X    X    X      ← Gutter support
   │    │    │    │    │
   │    │    │    │    │       ← Columns
───┴────┴────┴────┴────┴───

Bay Width: 12.8 ft (3.9m) or 16 ft (4.8m)
Number of Bays: Variable (3-20 typical)
Total Width: Bay width × # bays
```

## Load Path Diagrams

### Vertical Load Path

```
GRAVITY LOADS (Snow, Dead, Live)
=================================

     [Snow on Roof]
           ↓
     Glazing/Cladding
           ↓
     Purlins/Rafters
           ↓
     Roof Trusses
           ↓
       Columns
           ↓
     Foundations
           ↓
         Soil
```

### Lateral Load Path

```
WIND AND SEISMIC LOADS
======================

Wind →  [Building]
        ╔════════╗
        ║ Bracing║ ← Transfers lateral
        ║   or   ║    load to foundation
        ║ Frames ║
        ╚════╤═══╝
             ↓
        Foundations
             ↓
          Passive soil pressure
```

## Connection Details

### Column Base Plate Connection

```
TYPICAL BASE PLATE DETAIL
=========================

     │ │ ← Steel column (HSS or W-shape)
     │ │
     ╨╨╨
┌─────────────┐ ← Base plate (1/2" - 1" thick)
│ ⊕   ⊕   ⊕  │   (A36 or A572 steel)
└──────┬──────┘
   ════╪════     ← Anchor bolts (4 minimum)
       │         (3/4" - 1-1/4" diameter)
   ────┴────
  [Concrete]     ← Foundation (min 3,000 psi)
   ────────
   [Rebar]       ← Reinforcing as required

Design Considerations:
- Tension uplift (wind, seismic)
- Compression bearing
- Shear transfer
- Moment resistance (if required)
```

### Truss-to-Column Connection

```
PINNED CONNECTION (Typical)
===========================

      ╱│╲ ← Truss chord
     ╱ │ ╲
    ╱  │  ╲
   ╱   │   ╲
  ╱    │    ╲
 ══════╪══════ ← Connection plate
       │       (Gusset or bearing plate)
       ║       Bolted or welded
       ║ ← Column
       ║

Forces Transferred:
- Vertical load (compression/tension)
- Minimal moment (pinned)
```

## Load Diagrams

### Snow Load Distribution

```
BALANCED SNOW LOAD
==================

 ┌─────────────┐
 │ ▓▓▓▓▓▓▓▓▓▓▓│ ← Uniform snow
 │ ▓▓▓▓▓▓▓▓▓▓▓│   (ps = Cs × pf)
  ╲           ╱
   ╲         ╱
    ╲───────╱

UNBALANCED SNOW LOAD
====================

     │ ▓▓▓│ ← Drift
     │ ▓▓▓│
┌────▼────┐
│ ▓▓▓▓    │ ← Reduced on windward
│ ▓▓▓▓    │   Full on leeward
 ╲       ╱
  ╲─────╱

Check both conditions!
```

### Wind Pressure Zones

```
GREENHOUSE WIND PRESSURE
========================

    Wind Direction →

     ╱───────────╲
    ╱ 1 │ 2 │ 3  ╲
   ╱────┼───┼─────╲
  │ (+) │(-) │(±)  │
  │  A  │ B  │  C  │
   ╲────┼───┼─────╱
    ╲ 4 │ 5 │ 6  ╱
     ╲───────────╱

Zone A (Windward): +pressure
Zone B (Sides): -pressure (suction)
Zone C (Leeward): +/- pressure
Zones 2,5 (Ridge): High suction risk

Critical: Check uplift on connections!
```

## Vertical Farm Rack Structure

### Multi-Tier Growing Rack

```
ELEVATION - 6-TIER RACK
=======================

┌─────────────────────┐ ← Level 6
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│   (Lights + plants)
├─────────────────────┤
│                     │ ← Vertical spacing
├─────────────────────┤   (18-30 inches)
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Level 5
├─────────────────────┤
│                     │
├─────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Level 4
├─────────────────────┤
│                     │
├─────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Level 3
├─────────────────────┤
│                     │
├─────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Level 2
├─────────────────────┤
│                     │
├─────────────────────┤
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│ ← Level 1
└┬───────────────────┬┘
 │                   │ ← Posts (4-8 ft spacing)
 └───────────────────┘

Typical Dimensions:
- Rack width: 4-8 ft
- Rack depth: 2-4 ft
- Level spacing: 18-30 in
- Total height: 10-14 ft
- Post size: 3"×3" to 4"×4" HSS
```

### Rack Load Distribution

```
LOAD PATH - VERTICAL RACK
=========================

  [LED + Plants + Medium + Water]
              ↓
        Shelf/Tray
              ↓
    Cross Beams (2-4 per level)
              ↓
    Vertical Posts (4 corners)
              ↓
    Floor Slab (or base frame)
              ↓
        Foundation

Load per level: 30-60 psf typical
Cumulative load on posts = Sum of all levels
Design for: Static load + Impact factor (1.2-1.5×)
```

## Foundation Types

### Spread Footing

```
ISOLATED FOOTING DETAIL
=======================

       Ground Surface
─────────────────────────────
           Backfill
    ┌──────────────────┐
    │   [Column base]  │
    │        │         │
    │        │         │
    │   ┌────┴────┐    │ ← Footing
    │   │  #4 bars│    │   (Concrete pad)
    │   │  @ 12"  │    │
    │   └─────────┘    │
    │                  │
    └──────────────────┘

         Undisturbed Soil

Sizing based on:
- Column load
- Soil bearing capacity
- Frost depth
```

### Continuous Footing

```
CONTINUOUS WALL FOOTING
=======================

       ║ Wall
       ║
───────╨───────── Grade
   ┌───────┐
   │ ▬▬▬▬▬ │ ← Reinforcing
   │       │   (#4 @ 18" typ.)
   └───────┘
     Footing
   ──────────
      Soil

Width: 2-4 × wall thickness
Depth: Below frost line
```

## Structural Calculation Summary Table

| Load Type | Typical Value | Code Reference | Notes |
|-----------|---------------|----------------|-------|
| **Dead Load** | 6-12 psf | IBC 1607 | Glazing + structure |
| **Roof Live** | 20 psf min | IBC 1607.11 | Maintenance access |
| **Snow Load** | Varies by location | ASCE 7 Ch. 7 | pf = 0.7×Ce×Ct×Is×pg |
| **Wind Load** | Varies by location | ASCE 7 Ch. 27-31 | Check uplift! |
| **Seismic** | Varies by zone | ASCE 7 Ch. 11-22 | Light structures = low |
| **Rack Load** | 30-60 psf/level | N/A | CEA-specific |

---

**Use these diagrams for structural design visualization and understanding load paths**
