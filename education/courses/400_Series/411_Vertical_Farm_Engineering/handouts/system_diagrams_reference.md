# Vertical Farm System Diagrams - Reference Handout

## 1. Complete Facility System Integration

```
┌─────────────────────────────────────────────────────────────────┐
│                    VERTICAL FARM FACILITY                        │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                   GROWING AREA (Zone 1)                   │  │
│  │                                                            │  │
│  │  Level 8  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 7  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 6  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 5  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 4  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 3  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 2  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │  Level 1  [LED][LED][LED]  ═══NFT Channels═══           │  │
│  │                                                            │  │
│  │  Air Flow: ↑↑↑ (from underfloor plenum)                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│         ↓ Drainage              ↑ Supply                        │
│  ┌──────────────┐        ┌──────────────┐                      │
│  │  Return Tank │←───────│Supply/Dosing │                      │
│  │   2000L      │        │    System    │                      │
│  │              │        │   [Pumps]    │                      │
│  │  [Sensors]   │        │  [A/B Tanks] │                      │
│  └──────────────┘        └──────────────┘                      │
│         ↑                        ↑                              │
│         └────────────┬───────────┘                              │
│                      │                                          │
│              ┌───────┴────────┐                                │
│              │ Water Treatment│                                │
│              │ [Filter][UV]   │                                │
│              └────────────────┘                                │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                   HVAC SYSTEM                             │  │
│  │                                                            │  │
│  │  [Chiller]──→[AHU]──→[Underfloor Plenum]──→↑ To Zones   │  │
│  │     ↓          ↓                             ↑             │  │
│  │  [Dehumid]  [Filters]         Return Air ←──┘             │  │
│  │                                                            │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                ELECTRICAL DISTRIBUTION                     │  │
│  │                                                            │  │
│  │  Utility──→[Main Panel 400A]──→[Lighting Panel 100A]     │  │
│  │    480V        │                 │                        │  │
│  │                ├────→[HVAC Panel 80A]                     │  │
│  │                ├────→[Pumps Panel 30A]                    │  │
│  │                └────→[Controls Panel 20A]                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  CONTROL SYSTEM                           │  │
│  │                                                            │  │
│  │  [BMS Server]←→[Network Switch]←→[Zone Controllers]      │  │
│  │        ↕                ↕               ↕                 │  │
│  │    [Cloud]        [HMI Panel]      [Sensors/Actuators]   │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. NFT System Detail

```
Cross-Section View:

                    [LED Fixture]
                         ║║║  Light ↓↓↓
    ┌────────────────────────────────────────┐
    │         Growing Channel (NFT)          │
    │  🌱    🌱    🌱    🌱    🌱    🌱      │ ← Plants
    ├────────────────────────────────────────┤
    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ ← Nutrient film
    │  ↓ Flow direction (1-2 L/min)          │   (2-5mm deep)
    └────────────────────────────────────────┘
          ↓ Slope 1-2%          ↓
         Drain                 Return

Plan View (Top Down):
    ┌──────────────────────────────────────┐
    │  Supply ────────────────────→  Drain │  Channel 1
    ├──────────────────────────────────────┤
    │  Supply ────────────────────→  Drain │  Channel 2
    ├──────────────────────────────────────┤
    │  Supply ────────────────────→  Drain │  Channel 3
    ├──────────────────────────────────────┤
    │  Supply ────────────────────→  Drain │  Channel 4
    └──────────────────────────────────────┘
         ↑                          ↓
    [Supply Manifold]        [Return Manifold]
         ↑                          ↓
      [Pump]  ← ─ ─ ─ ─ ─  [Return Tank]

Components:
- Channels: 100mm wide × 40mm deep × 12m long
- Spacing: 120mm center-to-center
- Plants: 80-100 per channel (120-150mm spacing)
- Flow: 1.5 L/min per channel
- Slope: 1:100 (1% grade)
```

---

## 3. HVAC Air Distribution System

```
Side View Cross-Section:

Ceiling → [Return Air Plenum]
             ↑  ↑  ↑  ↑  ↑  (collecting warm, humid air)
          ═══╬══╬══╬══╬══╬═══ Level 8
          ═══╬══╬══╬══╬══╬═══ Level 7  ← Growing levels
          ═══╬══╬══╬══╬══╬═══ Level 6     with plants
          ═══╬══╬══╬══╬══╬═══ Level 5
          ═══╬══╬══╬══╬══╬═══ Level 4
          ═══╬══╬══╬══╬══╬═══ Level 3
          ═══╬══╬══╬══╬══╬═══ Level 2
          ═══╬══╬══╬══╬══╬═══ Level 1
             ↑  ↑  ↑  ↑  ↑  (cool air rising through plants)
Floor →  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  Perforated floor/grating
         ┌──────────────────┐
         │  Underfloor       │  ← Supply air plenum
         │  Plenum           │     (pressurized, conditioned air)
         └──────────────────┘
              ↑  ↑  ↑
         [Supply Duct from AHU]

Air Handler Unit (AHU) Detail:
┌────────────────────────────────────────────────┐
│  Return   Pre-    Cooling  Dehum   Supply     │
│   Air  →  Filter→  Coil → Coil  →  Fan  →Out │
│                                       ↕        │
│                                    [VFD]       │
└────────────────────────────────────────────────┘

Airflow Path:
1. Supply fan pushes air into underfloor plenum
2. Air distributed evenly across floor area
3. Air rises through perforations
4. Air flows upward through plant canopy
5. Air collected in return plenum at ceiling
6. Air returns to AHU for conditioning
7. Cycle repeats (15-20 complete air changes/hour)
```

---

## 4. Electrical Single-Line Diagram

```
                    Utility Service
                         ║
                    480V 3-Phase
                         ║
                 ┌───────╨───────┐
                 │  Main Breaker │
                 │     400A      │
                 └───────┬───────┘
                         ║
         ┌───────────────┼───────────────┬──────────────┐
         ║               ║                ║              ║
    ┌────╨────┐     ┌───╨────┐      ┌───╨────┐    ┌───╨────┐
    │Lighting │     │  HVAC  │      │ Pumps/ │    │Controls│
    │ Panel   │     │ Panel  │      │ Water  │    │ Panel  │
    │ 100A    │     │  80A   │      │ Panel  │    │  20A   │
    └────┬────┘     └───┬────┘      │  30A   │    └───┬────┘
         ║              ║            └───┬────┘        ║
         ║              ║                ║             ║
    ┌────╨────┐    ┌───╨────┐      ┌───╨────┐   ┌────╨────┐
    │ Zone 1  │    │Chiller │      │Supply  │   │  BMS    │
    │ 20A 3Ø  │    │40A 3Ø  │      │Pump    │   │  Server │
    ├─────────┤    ├────────┤      │10A 3Ø  │   ├─────────┤
    │ Zone 2  │    │AHU Fan │      ├────────┤   │  HMI    │
    │ 20A 3Ø  │    │30A 3Ø  │      │Dosing  │   │ Panel   │
    ├─────────┤    ├────────┤      │Pumps   │   ├─────────┤
    │ Zone 3  │    │Dehum   │      │5A 1Ø   │   │Network  │
    │ 20A 3Ø  │    │25A 1Ø  │      └────────┘   │ Switch  │
    └─────────┘    └────────┘                    └─────────┘
         ║              ║                ║             ║
         ↓              ↓                ↓             ↓
    [LED Arrays]  [HVAC Equip]    [Pumps/Motors]  [Controls]

Legend:
║ = 3-phase power
─ = Single-phase power
3Ø = 3-phase circuit
1Ø = Single-phase circuit
```

---

## 5. Water/Nutrient Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│              WATER TREATMENT & DISTRIBUTION              │
│                                                          │
│  Municipal ──→ [Sediment] ──→ [Carbon] ──→ [Fine]       │
│   Water        Filter 50μ      Filter      Filter 5μ    │
│                   ↓               ↓            ↓         │
│              ┌────────────────────────────────┐          │
│              │     UV Sterilizer              │          │
│              │     254nm, 40 mJ/cm²           │          │
│              └────────────┬───────────────────┘          │
│                           ↓                              │
│              ┌────────────────────────┐                  │
│              │   Storage Tank 500L    │                  │
│              │   With level control   │                  │
│              └────────────┬───────────┘                  │
│                           ↓                              │
│              ┌────────────────────────┐                  │
│              │    Supply Pump         │                  │
│              │    20 GPM @ 30 PSI     │                  │
│              └────────────┬───────────┘                  │
│                           ↓                              │
│         ┌─────────────────┼─────────────────┐            │
│         ↓                 ↓                 ↓            │
│    [Tank A]          [Tank B]          [Tank C]         │
│    Calcium+          Sulfates+         Acid/Base        │
│    Nitrates          Phosphates        pH Adjust        │
│         ↓                 ↓                 ↓            │
│    [Pump A]          [Pump B]          [Pump C]         │
│    0-1 L/hr          0-1 L/hr          0-0.5L/hr        │
│         ↓                 ↓                 ↓            │
│         └─────────────────┼─────────────────┘            │
│                           ↓                              │
│              ┌────────────────────────┐                  │
│              │   Inline Mixer         │                  │
│              │   [EC Sensor][pH]      │                  │
│              └────────────┬───────────┘                  │
│                           ↓                              │
│              ┌────────────────────────┐                  │
│              │   Distribution         │                  │
│              │   To Growing Zones     │                  │
│              └────────────┬───────────┘                  │
│                           ↓                              │
│         ┌─────────────────┼─────────────────┐            │
│         ↓                 ↓                 ↓            │
│    [Zone 1]          [Zone 2]          [Zone 3]         │
│    NFT System        NFT System        NFT System       │
│         ↓                 ↓                 ↓            │
│         └─────────────────┼─────────────────┘            │
│                           ↓                              │
│              ┌────────────────────────┐                  │
│              │   Return Tank 2000L    │                  │
│              │   [EC][pH][Temp][DO]   │                  │
│              │   Aeration system      │                  │
│              └────────────┬───────────┘                  │
│                           ↓                              │
│                    [Recirculation Pump]                  │
│                           ↓                              │
│                      (Back to supply)                    │
│                                                          │
│  Fresh water makeup: ~5% per day                         │
│  Recirculation rate: 99%+                                │
│  System volume: 4,000L total                             │
└─────────────────────────────────────────────────────────┘

Control Logic:
- EC high → Reduce dosing rate
- EC low → Increase dosing rate
- pH high → Dose acid (Tank C)
- pH low → Dose base (Tank C)
- Level low → Open makeup water valve
- DO low → Increase aeration
```

---

## 6. Control System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    ENTERPRISE LEVEL (Cloud)                  │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Analytics  │  │  Historical  │  │   Remote     │     │
│  │  & Reports   │  │    Data      │  │  Monitoring  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└───────────────────────────┬─────────────────────────────────┘
                            ║ HTTPS/VPN
┌───────────────────────────┴─────────────────────────────────┐
│              SUPERVISORY LEVEL (BMS Server)                  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │        Building Management System (BMS)              │  │
│  │  - Facility-wide coordination                        │  │
│  │  - Alarm management                                  │  │
│  │  - Trending and logging                              │  │
│  │  - Operator interface (HMI)                          │  │
│  └──────────────────────────────────────────────────────┘  │
└───────────────────────────┬─────────────────────────────────┘
                            ║ Modbus TCP/IP or BACnet
┌───────────────────────────┴─────────────────────────────────┐
│                FIELD LEVEL (Zone Controllers)                │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │   Zone 1    │  │   Zone 2    │  │   Zone 3    │        │
│  │     PLC     │  │     PLC     │  │     PLC     │        │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│         ║                 ║                 ║               │
└─────────╬─────────────────╬─────────────────╬───────────────┘
          ║                 ║                 ║ 4-20mA, Digital I/O
┌─────────╨─────────────────╨─────────────────╨───────────────┐
│              DEVICE LEVEL (Sensors & Actuators)              │
│                                                              │
│  [Temp]  [RH]  [CO₂]  [PPFD]  [EC]  [pH]   [Pressure]      │
│    ↕      ↕     ↕      ↕      ↕     ↕        ↕             │
│  Sensors providing feedback to controllers                   │
│                                                              │
│  [Valves] [Pumps] [Fans] [Lights] [Dampers] [Alarms]       │
│    ↕       ↕       ↕       ↕        ↕         ↕            │
│  Actuators receiving commands from controllers               │
└─────────────────────────────────────────────────────────────┘

Data Flow:
Sensors → PLCs → BMS → Cloud → Analytics → Decisions →
    Commands → BMS → PLCs → Actuators

Control Loops:
Local (PLC): Temperature, humidity, lighting (fast response, <1 min)
Supervisory (BMS): Coordination, optimization (slower, 5-15 min)
Enterprise (Cloud): Analytics, reporting (batch, daily/weekly)
```

---

**These diagrams provide visual reference for understanding how vertical farm systems integrate. Use them alongside detailed engineering calculations and specifications when designing facilities.**
