# Module 6: Ventilation & Airflow
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Distinguish between passive and active ventilation systems
- Calculate air exchange requirements for growing spaces
- Design effective HAF (Horizontal Air Flow) systems
- Size intake and exhaust fans properly
- Implement air filtration for pest and pathogen prevention

---

## Why Airflow Matters

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    FUNCTIONS OF AIRFLOW IN CEA                            ║
║                                                                           ║
║   1. TEMPERATURE MANAGEMENT                                               ║
║      Remove excess heat from lights and equipment                        ║
║                                                                           ║
║   2. HUMIDITY CONTROL                                                     ║
║      Prevent stagnant humid air pockets                                  ║
║                                                                           ║
║   3. CO₂ DISTRIBUTION                                                     ║
║      Move CO₂ throughout the canopy                                      ║
║                                                                           ║
║   4. STEM STRENGTHENING                                                   ║
║      Air movement stimulates stronger stems                              ║
║                                                                           ║
║   5. DISEASE PREVENTION                                                   ║
║      Dry leaf surfaces, prevent fungal growth                            ║
║                                                                           ║
║   6. BOUNDARY LAYER DISRUPTION                                           ║
║      Thin the stagnant air layer around leaves                           ║
║      Improves gas exchange and transpiration                             ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Ventilation Types

### Passive vs Active Ventilation

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    VENTILATION SYSTEM TYPES                                │
    │                                                                             │
    │   PASSIVE VENTILATION                 ACTIVE VENTILATION                   │
    │   ═══════════════════                 ══════════════════                    │
    │                                                                             │
    │         HOT AIR ↑                          EXHAUST FAN                     │
    │            ╱╲                              ┌─────────┐                      │
    │   ┌───────╱  ╲───────┐            ┌───────│ ▶▶▶▶▶▶▶ │───────┐             │
    │   │      ╱    ╲      │            │       └─────────┘       │             │
    │   │     ╱      ╲     │            │           ↑             │             │
    │   │    RIDGE VENT    │            │    forced air out      │             │
    │   │                  │            │                         │             │
    │   │                  │            │    🌱 🌱 🌱 🌱 🌱 🌱     │             │
    │   │   🌱 🌱 🌱 🌱 🌱   │            │                         │             │
    │   │                  │            │           ↑             │             │
    │   │   ↑ COOL AIR     │            │    INTAKE (louver)     │             │
    │   └───│──────────────┘            └───────│─────────────────┘             │
    │       │                                   │                               │
    │     Side vents                    Fans pull air through                   │
    │                                                                             │
    │   PASSIVE:                        ACTIVE:                                  │
    │   • Uses natural convection       • Uses exhaust fans                     │
    │   • Hot air rises, exits top      • Intake can be passive or powered     │
    │   • Cool air enters low           • Precise control possible              │
    │   • Low energy cost               • Works regardless of weather           │
    │   • Weather dependent             • Higher energy use                     │
    │   • Limited control               • Can include filtration                │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Air Exchange Calculations

### CFM Requirements

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    AIR EXCHANGE CALCULATION                               ║
║                                                                           ║
║   CFM = Cubic Feet per Minute (volume of air moved)                      ║
║                                                                           ║
║   FORMULA:                                                               ║
║   ═════════                                                               ║
║   CFM Required = Room Volume × Air Exchanges per Minute                  ║
║                                                                           ║
║   Room Volume = Length × Width × Height (in feet)                        ║
║                                                                           ║
║   TYPICAL AIR EXCHANGE RATES:                                            ║
║   ════════════════════════════                                            ║
║                                                                           ║
║   ┌──────────────────────────────┬─────────────────────────────┐         ║
║   │ APPLICATION                  │ EXCHANGES/MINUTE            │         ║
║   ├──────────────────────────────┼─────────────────────────────┤         ║
║   │ Basic ventilation            │ 1 per minute                │         ║
║   │ Standard grow room           │ 1-2 per minute              │         ║
║   │ High heat load (HPS)         │ 2-3 per minute              │         ║
║   │ CO₂ sealed room (refresh)    │ 0.5 per minute (minimal)    │         ║
║   └──────────────────────────────┴─────────────────────────────┘         ║
║                                                                           ║
║   EXAMPLE:                                                               ║
║   ═════════                                                               ║
║   Room: 10' × 10' × 8' = 800 cubic feet                                  ║
║   Target: 1.5 exchanges per minute                                       ║
║   CFM = 800 × 1.5 = 1,200 CFM exhaust fan needed                        ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Accounting for Restrictions

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              CFM ADJUSTMENT FOR REAL-WORLD CONDITIONS                      │
    │                                                                             │
    │   Rated CFM is at 0" static pressure (no restrictions)                    │
    │   Real installations have restrictions that reduce actual CFM!            │
    │                                                                             │
    │   COMMON RESTRICTIONS:                                                     │
    │   ═════════════════════                                                    │
    │                                                                             │
    │   ITEM                          APPROXIMATE CFM REDUCTION                  │
    │   ────────────────────────────────────────────────────────                 │
    │   Carbon filter                 20-30%                                     │
    │   90° elbow                     10-15% per elbow                          │
    │   Long duct run (>10 ft)        5-10% per 10 ft                           │
    │   Undersized duct               10-20%                                     │
    │   Dirty/restricted filter       30-50%                                     │
    │                                                                             │
    │   SIZING RECOMMENDATION:                                                   │
    │   ══════════════════════                                                   │
    │   Add 25-50% to calculated CFM to account for restrictions               │
    │                                                                             │
    │   Example:                                                                 │
    │   Calculated need: 1,200 CFM                                              │
    │   With carbon filter + duct: 1,200 × 1.4 = 1,680 CFM                     │
    │   Select: 1,700+ CFM rated fan                                           │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## HAF (Horizontal Air Flow) Systems

### HAF Design Principles

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    HAF: HORIZONTAL AIR FLOW                               ║
║                                                                           ║
║   HAF creates a circular airflow pattern within the growing space        ║
║                                                                           ║
║   TOP VIEW OF HAF PATTERN:                                               ║
║   ═════════════════════════                                               ║
║                                                                           ║
║   ┌─────────────────────────────────────────────────────────────────┐    ║
║   │                                                                 │    ║
║   │    ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←                      │    ║
║   │                                              ↑                  │    ║
║   │    ☛ FAN 1                                   │                  │    ║
║   │                                              │                  │    ║
║   │    →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→→    │                  │    ║
║   │    ↓                                                            │    ║
║   │    │                                    ☛ FAN 2                 │    ║
║   │    │                                                            │    ║
║   │    ←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←←                      │    ║
║   │                                                                 │    ║
║   └─────────────────────────────────────────────────────────────────┘    ║
║                                                                           ║
║   KEY PRINCIPLES:                                                        ║
║   ═══════════════                                                        ║
║   • Fans blow WITH the circular pattern (not against)                   ║
║   • Fans on opposite walls, pointing same rotational direction          ║
║   • Air should move 50-100 feet per minute at canopy level              ║
║   • Creates uniform temperature and humidity                             ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### HAF Fan Sizing

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    HAF FAN SIZING GUIDELINES                               │
    │                                                                             │
    │   RULE OF THUMB:                                                           │
    │   ══════════════                                                           │
    │   1 CFM per square foot of floor area                                     │
    │   (For total HAF capacity)                                                │
    │                                                                             │
    │   EXAMPLE:                                                                 │
    │   1,000 sq ft greenhouse                                                  │
    │   Need: 1,000 CFM total HAF                                               │
    │   Use: 4 × 250 CFM fans OR 2 × 500 CFM fans                              │
    │                                                                             │
    │   FAN PLACEMENT:                                                           │
    │   ═══════════════                                                          │
    │   • Mount 7-8 feet above floor                                            │
    │   • Angle slightly downward (toward canopy)                               │
    │   • Space fans 40-50 feet apart                                           │
    │   • First fan 10-15 feet from end wall                                    │
    │                                                                             │
    │   OSCILLATING vs FIXED:                                                    │
    │   ═════════════════════                                                    │
    │   Oscillating fans work well in small spaces                              │
    │   Fixed HAF fans better for large commercial spaces                       │
    │   Goal: gentle breeze, not hurricane!                                     │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Intake and Exhaust Design

### Negative Pressure Systems

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    NEGATIVE PRESSURE SYSTEM                               ║
║                                                                           ║
║   Exhaust fan capacity > Intake = Negative pressure inside               ║
║                                                                           ║
║         OUTSIDE            │         INSIDE                               ║
║                            │                                              ║
║         Higher             │         Lower                                ║
║         Pressure  ──────►  │  ◄──────  Pressure                          ║
║                            │                                              ║
║                            │    ┌──────────────┐                         ║
║                    INTAKE  │    │              │                         ║
║                    ════════╪════│  GROW ROOM   │                         ║
║                    louver  │    │              │                         ║
║                    opens   │    │              │                         ║
║                            │    │   🌱 🌱 🌱    │                         ║
║                            │    │              │                         ║
║                            │    └──────┬───────┘                         ║
║                            │           │                                  ║
║                            │      EXHAUST FAN                            ║
║                            │      ════════════                            ║
║                            │         ▶▶▶▶▶▶▶                             ║
║                                                                           ║
║   BENEFITS:                                                              ║
║   • Air only enters through intake (filtered, controlled)               ║
║   • No random air infiltration through cracks                           ║
║   • Prevents pests/pathogens from entering                              ║
║   • Better odor control (all air exits through one point)               ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

### Intake Sizing

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │                    INTAKE SIZING GUIDELINES                                │
    │                                                                             │
    │   PASSIVE INTAKE:                                                          │
    │   ═══════════════                                                          │
    │   Intake opening should be 2-4× the exhaust duct area                     │
    │   to minimize resistance                                                  │
    │                                                                             │
    │   Example:                                                                 │
    │   8" exhaust duct = 50 sq in area                                         │
    │   Intake needed = 100-200 sq in                                           │
    │   = Two 8" intakes OR one 12"×12" louver                                  │
    │                                                                             │
    │   POWERED INTAKE:                                                          │
    │   ════════════════                                                         │
    │   Intake fan at 80-90% of exhaust fan CFM                                 │
    │   Maintains slight negative pressure                                      │
    │                                                                             │
    │   Example:                                                                 │
    │   Exhaust: 1,000 CFM                                                      │
    │   Intake:    800-900 CFM                                                  │
    │   Difference creates negative pressure                                    │
    │                                                                             │
    │   INTAKE LOCATION:                                                         │
    │   ═════════════════                                                        │
    │   • Low and opposite end from exhaust                                     │
    │   • Away from contamination sources                                       │
    │   • Protected from rain/debris                                            │
    │   • Include bug screen (minimum)                                          │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Air Filtration

### Filtration Options

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    AIR FILTRATION OPTIONS                                 ║
║                                                                           ║
║   INTAKE FILTRATION (What comes IN):                                     ║
║   ══════════════════════════════════                                      ║
║                                                                           ║
║   ┌─────────────────┬─────────────┬────────────────────────────────┐     ║
║   │ FILTER TYPE     │ FILTERS     │ NOTES                          │     ║
║   ├─────────────────┼─────────────┼────────────────────────────────┤     ║
║   │ Bug screen      │ Insects     │ Essential minimum              │     ║
║   │ (1/8" mesh)     │ Debris      │ Low restriction                │     ║
║   ├─────────────────┼─────────────┼────────────────────────────────┤     ║
║   │ Furnace filter  │ Dust        │ MERV 8-11 good balance        │     ║
║   │ (MERV rated)    │ Pollen      │ Replace monthly                │     ║
║   ├─────────────────┼─────────────┼────────────────────────────────┤     ║
║   │ HEPA filter     │ Spores      │ Excellent but high restriction │     ║
║   │                 │ Bacteria    │ Requires powerful fans         │     ║
║   └─────────────────┴─────────────┴────────────────────────────────┘     ║
║                                                                           ║
║   EXHAUST FILTRATION (What goes OUT):                                    ║
║   ═════════════════════════════════════                                   ║
║                                                                           ║
║   ┌─────────────────┬─────────────┬────────────────────────────────┐     ║
║   │ FILTER TYPE     │ REMOVES     │ NOTES                          │     ║
║   ├─────────────────┼─────────────┼────────────────────────────────┤     ║
║   │ Carbon filter   │ Odors       │ Replace every 12-18 months    │     ║
║   │                 │ VOCs        │ Size to match fan CFM          │     ║
║   ├─────────────────┼─────────────┼────────────────────────────────┤     ║
║   │ Ozone generator │ Odors       │ Use with caution               │     ║
║   │                 │             │ Can damage plants if inside    │     ║
║   └─────────────────┴─────────────┴────────────────────────────────┘     ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Module Summary

### Key Takeaways

1. **Ventilation** serves multiple critical functions beyond just cooling
2. **CFM calculations** must account for real-world restrictions
3. **HAF systems** create uniform conditions throughout the space
4. **Negative pressure** prevents uncontrolled air infiltration
5. **Filtration** on intake protects against pests and pathogens
6. **Balance** intake and exhaust for optimal air management

---

## Knowledge Check

1. What are the primary functions of airflow in a growing space?
2. Calculate the CFM needed for a 12'×20'×10' room at 1.5 exchanges/minute.
3. Why should HAF fans all blow in the same rotational direction?
4. What is the benefit of negative pressure in a grow room?
5. Why should intake openings be larger than exhaust ducts?

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 6*

