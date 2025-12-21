# LED Fixture Anatomy & Components

**Course:** 205 - LED Lighting Science

## Complete LED Fixture Cross-Section

```
TOP VIEW
════════════════════════════════════════════════════════

    ┌────────────────────────────────────────────────┐
    │  [Mounting Brackets]    [Cable Entry]          │
    │         ↓                    ↓                  │
    │   ═════╪═════════════════════╪═════            │
    │         │                                       │
    │   ┌─────┴──────────────────────────────┐      │
    │   │   LED FIXTURE HOUSING (Aluminum)    │      │
    │   │                                     │      │
    │   │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │      │
    │   │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │      │
    │   │  ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │      │
    │   │         ↑ LED Chips on PCB          │      │
    │   │                                     │      │
    │   └─────────────────────────────────────┘      │
    │                                                 │
    └─────────────────────────────────────────────────┘

SIDE CROSS-SECTION
════════════════════════════════════════════════════════

Light Output ↑↑↑↑↑↑↑↑↑↑↑↑↑↑
              ↑↑↑↑↑↑↑↑↑↑
    ┌──[Optional Lens/Optics]──┐
    │                           │
    │   ○ ○ ○ ○ ○ ○ ○ ○ ○ ○   │ ← LED Chips
    ├───────────────────────────┤
    │    [Circuit Board PCB]    │ ← Electrical traces
    ├───────────────────────────┤
    │ [Thermal Interface TIM]   │ ← Heat transfer paste/pad
    ├───────────────────────────┤
    │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
    │ ▓  HEAT SINK (Aluminum) ▓ │ ← Dissipates heat
    │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │
    └─────────┬─────────────────┘
              ↓↓↓↓↓
         Heat Dissipation

    ┌───────────────────────────┐
    │   LED DRIVER (separate    │ ← Power conversion
    │   or integrated)          │   AC→DC, current regulation
    └───────────┬───────────────┘
                │
           AC Power Input
```

## LED Chip Detail

```
SINGLE LED PACKAGE (SMD/Surface Mount)
════════════════════════════════════════

    ┌─────────────────────┐
    │   Encapsulant/Lens  │ ← Protects chip, shapes output
    │   (Silicone/Epoxy)  │
    │         ↓           │
    │    ╔═══════════╗    │
    │    ║           ║    │
    │    ║  LED Die  ║    │ ← Semiconductor chip
    │    ║ (GaN/InGaN)║    │   (~1-3mm)
    │    ║           ║    │
    │    ╚═════╤═════╝    │
    │          │          │
    │   [Phosphor Layer]  │ ← For white LEDs only
    │    (YAG:Ce)         │
    │          │          │
    ├──────────┼──────────┤
    │   Thermal Pad       │ ← Heat conduction
    ├─────┬────┴────┬─────┤
    │  -  │         │  +  │ ← Electrical contacts
    └─────┴─────────┴─────┘
      Cathode    Anode

WHITE LED PROCESS:
Blue LED chip (450nm)
    ↓ emits blue light
Phosphor coating
    ↓ converts some blue→yellow
Output = Blue + Yellow = White appearance
```

## Heat Sink Types

```
PASSIVE HEAT SINK (No Fans)
════════════════════════════════════════

    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ▓                      ▓  ← Aluminum fins
    ▓                      ▓     Large surface area
    ▓                      ▓     Natural convection
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ═══════════════════════  ← Base plate
         [LED Array]
                           Air Flow ↑
                                    ↑
                                    ↑

Advantages: Silent, reliable, no maintenance
Disadvantages: Larger, heavier, lower power density

ACTIVE COOLING (Fan-Assisted)
════════════════════════════════════════

    ┌─────────────────────┐
    │   [Cooling Fans]    │ → Forced air
    └──────────┬──────────┘
               ↓ airflow
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ← Smaller fins
    ▓                      ▓
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
    ═══════════════════════
         [LED Array]

Advantages: Compact, high power density
Disadvantages: Noise, fan maintenance, failure risk
```

## LED Driver Components

```
LED DRIVER BLOCK DIAGRAM
════════════════════════════════════════

AC Input     Rectifier    Filter     DC-DC        Output
(120/240V) → [Bridge]  → [Caps]  → Converter → to LEDs
    │            │          │          │           │
    │            │          │          │           │
    └────────────┴──────────┴──────────┴───────────┘
                          │
                     [Control IC]
                          │
                    [Dimming Input]
                    (0-10V / PWM)

CONSTANT CURRENT DRIVER:
Input: 120-277VAC (varies)
Output: Fixed current (e.g., 1050mA)
        Variable voltage (30-40VDC typical)

Key Features:
├─ Power Factor Correction (PFC) →0.95+ efficiency
├─ Overvoltage Protection (OVP)
├─ Short Circuit Protection (SCP)
├─ Thermal Protection (over-temp shutdown)
└─ Dimming Interface (0-10V, PWM, DALI)
```

## Optical Components

```
LENS/REFLECTOR OPTIONS
════════════════════════════════════════

NO LENS (120-180° beam)
    LED ○
         ╲│╱    Wide, even
          │     distribution
        ╱ │ ╲

NARROW LENS (60-90° beam)
      ╱───╲
     │ LED │   Focused,
     │  ○  │   higher intensity
      ╲───╱    in center
         │
         │

REFLECTOR CUP
    ╱───────╲
   │    ○    │  Directs light
   │   LED   │  downward
    ╲───────╱   Reduces side loss
        │
        │

TIR (Total Internal Reflection)
    ╱═══════╲
   ║    ○    ║  Highly efficient
   ║   LED   ║  Precise beam control
    ╲═══════╱
        │
        │
```

## Circuit Board (PCB) Types

```
METAL CORE PCB (MCPCB)
════════════════════════════════════════

    [Solder Mask Layer]
    [Copper Circuit Layer]    ← Electrical traces
    [Dielectric Layer]         ← Electrical insulation
    [Aluminum Base]            ← Heat conduction
         ↓↓↓
    Heat transfer to sink

Standard PCB:     0.5-1.0 W/m·K thermal conductivity
MCPCB:            1.0-3.0 W/m·K thermal conductivity
High-performance: 3.0-8.0 W/m·K thermal conductivity

Advantages: Better heat dissipation, longer LED life
Cost: 2-3× more expensive than standard PCB
```

## Connection Types

```
ELECTRICAL CONNECTIONS
════════════════════════════════════════

HARDWIRED (Permanent)
    [Fixture] ───┬─── Black (Hot)
                 ├─── White (Neutral)
                 ├─── Green (Ground)
                 └─── 0-10V (Control, if dimming)

PLUG & SOCKET (Removable)
    [Fixture] ═══[Socket]═══[Plug]═══ Power source

    Advantages: Easy replacement
    Disadvantages: Connection point failure risk

DAISY-CHAIN (Series Connection)
    [Fix 1]───[Fix 2]───[Fix 3]───[Power]

    Advantages: Less wiring
    Disadvantages: Total load limits
```

## IP Rating Explained

```
IP RATING SYSTEM
════════════════════════════════════════

Format: IP XY

First Digit (X) = Solid Particle Protection
0 = No protection
1 = >50mm objects
2 = >12.5mm objects
3 = >2.5mm objects
4 = >1mm objects
5 = Dust protected
6 = Dust tight

Second Digit (Y) = Liquid Ingress Protection
0 = No protection
1 = Vertical drips
2 = Drips (15° tilt)
3 = Spray (60° from vertical)
4 = Splash from any direction
5 = Water jets
6 = Powerful water jets
7 = Immersion up to 1m
8 = Immersion >1m

COMMON RATINGS FOR HORTICULTURE:

IP20 = Indoor, dry environments only
IP54 = Indoor, some moisture protection
IP65 = Dust-tight, water jets (greenhouse)
IP66 = Dust-tight, powerful jets (washdown)
IP67 = Dust-tight, temporary immersion
```

## Quality Indicators

```
SIGNS OF QUALITY CONSTRUCTION
════════════════════════════════════════

✓ Thick aluminum heat sink (3-5mm)
✓ Thermal interface material visible
✓ Branded LED chips (Samsung, Osram, Cree, etc.)
✓ Name-brand driver (Meanwell, Inventronics, etc.)
✓ Proper strain relief on cables
✓ Thermal paste/pads between LED board and heat sink
✓ Conformal coating on PCB (moisture protection)
✓ Even solder joints (no cold joints)
✓ Adequate wire gauge (14-18 AWG typical)
✓ UL/ETL/CE certification labels

RED FLAGS:
✗ Very light weight (inadequate heat sink)
✗ No thermal interface material
✗ Generic/"high efficiency" components (not named)
✗ Exposed wiring, poor cable management
✗ Loose connections
✗ Missing safety certifications
✗ Visible solder defects
✗ Plastic housing (poor heat dissipation)
```

---

**Use this guide to evaluate fixture build quality when making purchasing decisions!**
