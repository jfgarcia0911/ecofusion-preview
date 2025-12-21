# Climate Control System Diagram
## Course 211: Greenhouse Climate Management

---

## Complete Integrated Climate Control System

```
╔═══════════════════════════════════════════════════════════════════════════════════════╗
║                                                                                       ║
║                      GREENHOUSE CLIMATE CONTROL SYSTEM                                ║
║                                                                                       ║
║                                    ╱╲      ╱╲      ╱╲                                 ║
║                                   ╱  ╲    ╱  ╲    ╱  ╲                                ║
║         ☀️ SOLAR RADIATION ─────►╱    ╲  ╱    ╲  ╱    ╲                               ║
║                                 │                      │                              ║
║                                 │  [THERMAL CURTAIN]   │ ← Retractable                ║
║    ┌────────────────────────────┼──────────────────────┼─────────────────────────┐   ║
║    │                            │                      │                         │   ║
║    │  SENSORS:                  │   🌡️  💧  ☀️  💨     │                         │   ║
║    │  • Temperature (×3)        │   Temp RH Light CO₂  │                         │   ║
║    │  • Humidity (×2)           │                      │                         │   ║
║    │  • Light (PAR)             │                      │  [EXHAUST FAN] ────────►│   ║
║    │  • CO₂                     │                      │  ◄◄◄◄◄◄◄◄◄               │   ║
║    │                            │                      │                         │   ║
║    │                            │   🌱  🌱  🌱  🌱  🌱   │  [HAF FAN]             │   ║
║    │  ┌─────────────────┐       │   🌱  🌱  🌱  🌱  🌱   │   ↻ ───────►           │   ║
║    │  │   CONTROLLER    │       │                      │                         │   ║
║    │  │   (Computer)    │       │                      │  [EVAP PAD]            │   ║
║    │  │                 │       │                      │  ░░░░░░░░░             │   ║
║    │  │  Setpoints:     │       │   ════════════════   │  Water ↓               │   ║
║    │  │  Temp: 72°F     │       │   [HEATING PIPES]    │                         │   ║
║    │  │  RH: 65%        │       │   (Hot water)        │  INTAKE ───────────────►│   ║
║    │  │  VPD: 1.0 kPa   │       │                      │  ▼ ▼ ▼                 │   ║
║    │  └─────────────────┘       │                      │  Outside Air            │   ║
║    │           │                │   [MIST NOZZLES]     │                         │   ║
║    │           ▼                │   💧💧💧💧💧💧         │  ┌──────────────┐      │   ║
║    │  ┌─────────────────┐       │                      │  │   BOILER/    │      │   ║
║    │  │   ACTUATORS     │       │   🌱  🌱  🌱  🌱  🌱   │  │   HEATER     │      │   ║
║    │  │                 │       │                      │  │   🔥         │      │   ║
║    │  │ • Heater        │       └──────────────────────┘  └──────────────┘      │   ║
║    │  │ • Vent fans     │                                                       │   ║
║    │  │ • Evap pump     │       ┌──────────────┐                                │   ║
║    │  │ • Fog system    │       │  CO₂         │                                │   ║
║    │  │ • Curtain motor │       │  GENERATOR   │                                │   ║
║    │  │ • Lights        │       │  🔥→ CO₂     │                                │   ║
║    │  └─────────────────┘       └──────────────┘                                │   ║
║    │                                                                             │   ║
║    └─────────────────────────────────────────────────────────────────────────────┘   ║
║                                                                                       ║
║                                 CONTROL LOGIC FLOW                                    ║
║                                                                                       ║
║    ┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐              ║
║    │  SENSE   │ ───► │ COMPARE  │ ───► │ DECIDE   │ ───► │ ACTUATE  │              ║
║    │          │      │          │      │          │      │          │              ║
║    │ Current  │      │ Actual   │      │ Which    │      │ Turn on/ │              ║
║    │ temp, RH │      │ vs       │      │ equipment│      │ off      │              ║
║    │ light    │      │ Setpoint │      │ needed   │      │ equipment│              ║
║    └──────────┘      └──────────┘      └──────────┘      └──────────┘              ║
║         │                                                      │                     ║
║         └──────────────────────── FEEDBACK LOOP ◄──────────────┘                     ║
║                                                                                       ║
╚═══════════════════════════════════════════════════════════════════════════════════════╝
```

---

## System Components Detail

### Input Devices (Sensors)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  SENSOR TYPE        MEASURES           LOCATION        ACCURACY    │
│  ══════════════════════════════════════════════════════════════    │
│                                                                    │
│  Temperature        Air temp           Canopy height   ±0.5°F     │
│  (Thermistor)       (°F or °C)         Multiple zones             │
│                                                                    │
│  RH Sensor          Relative           Canopy height   ±2-3%      │
│  (Capacitive)       humidity (%)       Shielded                   │
│                                                                    │
│  PAR Sensor         Light intensity    Above canopy    ±5%        │
│  (Quantum)          (μmol/m²/s)        Not shaded                 │
│                                                                    │
│  CO₂ Sensor         Carbon dioxide     Canopy height   ±50 ppm    │
│  (NDIR)             (ppm)              Representative             │
│                                                                    │
│  Soil/Media Temp    Root zone temp     In substrate    ±0.5°F     │
│  (Thermistor)       (°F)               Multiple points            │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### Output Devices (Actuators)

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  EQUIPMENT          FUNCTION           CONTROL TYPE   CAPACITY     │
│  ══════════════════════════════════════════════════════════════    │
│                                                                    │
│  Heater/Boiler      Adds heat          Staged or      Sized to    │
│                                         Modulating     heat loss   │
│                                                                    │
│  Exhaust Fans       Removes air        Variable       8-12 CFM/   │
│                     (cooling/vent)     speed          ft² floor   │
│                                                                    │
│  Evap Cooling       Cools via          On/Off or      Climate     │
│                     evaporation        Variable       dependent   │
│                                                                    │
│  Fog/Mist           Adds humidity      Pulse width    2-5 gal/hr  │
│                                         modulation                 │
│                                                                    │
│  Dehumidifier       Removes            On/Off or      50-200      │
│                     moisture           Variable       pints/day   │
│                                                                    │
│  HAF Fans           Air circulation    Continuous     1 CFM/ft²   │
│                                         or staged                  │
│                                                                    │
│  Thermal Curtain    Insulation/        Open/Close     Motorized   │
│                     shade                                          │
│                                                                    │
│  Grow Lights        Supplemental       Dimming or     Match DLI   │
│                     photons            On/Off         needs       │
│                                                                    │
│  CO₂ Generator      Enrichment         Modulating     0.1-0.2 lb  │
│                                                        /ft²/day    │
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

---

## Control Strategies

### Temperature Control Hierarchy

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║                    TEMPERATURE CONTROL SEQUENCE                       ║
║                                                                       ║
║   COOLING STAGES (when temp exceeds setpoint):                       ║
║   ═══════════════════════════════════════════                         ║
║                                                                       ║
║   Stage 1: +2°F over setpoint                                         ║
║   → Open vents slightly / Start fans at 25% speed                     ║
║                                                                       ║
║   Stage 2: +4°F over setpoint                                         ║
║   → Increase ventilation to 50% / Deploy shade 50%                    ║
║                                                                       ║
║   Stage 3: +6°F over setpoint                                         ║
║   → Full ventilation / Full shade                                     ║
║                                                                       ║
║   Stage 4: +8°F over setpoint                                         ║
║   → Activate evaporative cooling                                      ║
║                                                                       ║
║   ─────────────────────────────────────────────────────────────────   ║
║                                                                       ║
║   HEATING STAGES (when temp below setpoint):                          ║
║   ═══════════════════════════════════════════                         ║
║                                                                       ║
║   Stage 1: -2°F below setpoint                                        ║
║   → Close vents / Reduce ventilation to minimum                       ║
║                                                                       ║
║   Stage 2: -4°F below setpoint                                        ║
║   → Deploy thermal curtain / Start heater Stage 1                     ║
║                                                                       ║
║   Stage 3: -6°F below setpoint                                        ║
║   → Heater Stage 2 (higher fire)                                      ║
║                                                                       ║
║   Stage 4: -8°F below setpoint                                        ║
║   → Full heating capacity / All heat sources                          ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

### VPD-Based Humidity Control

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│                    VPD MANAGEMENT LOGIC                             │
│                                                                     │
│   IF VPD < 0.4 kPa (TOO HUMID):                                    │
│   ──────────────────────────────                                    │
│   1. Check if can ventilate (outside air drier)                    │
│      → YES: Increase ventilation                                   │
│      → NO: Proceed to step 2                                       │
│   2. Increase temperature (if within acceptable range)             │
│   3. Activate dehumidifier                                         │
│   4. Increase air circulation (HAF fans to max)                    │
│                                                                     │
│   IF VPD > 1.6 kPa (TOO DRY):                                      │
│   ────────────────────────                                          │
│   1. Check if can reduce temperature safely                        │
│      → Reduce heating / Increase shade                             │
│   2. Activate humidification (fog/mist)                            │
│   3. Reduce ventilation to minimum needed                          │
│                                                                     │
│   IF VPD = 0.8-1.2 kPa (OPTIMAL):                                  │
│   ───────────────────────────────                                   │
│   1. Maintain current strategy                                     │
│   2. Make only small adjustments                                   │
│   3. Monitor and log for future reference                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Daily Control Schedule Example

```
TIME    TEMP SETPOINT   VPD TARGET   VENTILATION   LIGHTS   CO₂
──────────────────────────────────────────────────────────────────
00:00   65°F (night)    0.8-1.0      Minimum       OFF      OFF
02:00   65°F            0.8-1.0      Minimum       OFF      OFF
04:00   65°F            0.8-1.0      Minimum       OFF      OFF

06:00   68°F (ramp up)  0.9-1.1      Increase      ON       Enrich
        Sunrise start                 (purge humid
                                      night air)

08:00   72°F (day)      1.0-1.2      As needed     ON       Enrich
10:00   72°F            1.0-1.2      As needed     ON       Enrich
12:00   72°F            1.0-1.2      Maximum if    ON       Reduce
        Solar peak                    hot                    (venting)

14:00   72°F            1.0-1.2      As needed     ON       Enrich
16:00   72°F            1.0-1.2      As needed     ON       Enrich

18:00   70°F (ramp     0.9-1.1      Reduce        Dim      Stop
        down)

20:00   65°F (night)    0.8-1.0      Minimum       OFF      OFF
22:00   65°F            0.8-1.0      Minimum       OFF      OFF
```

---

## Troubleshooting Decision Tree

```
PROBLEM: Temperature not at setpoint

TOO HOT?
│
├─ Daytime?
│  ├─ YES → Ventilation running?
│  │        ├─ NO → Check fan power, controller
│  │        └─ YES → Increase capacity / Add evap cooling
│  │
│  └─ NO (Nighttime) → Unusual - check heater malfunction
│
TOO COLD?
│
├─ Heating on?
│  ├─ NO → Check controller, thermostat, power
│  └─ YES → Insufficient capacity / Heat loss too high
│            → Add insulation / thermal curtain
│            → Check for air leaks
│            → Verify heater output

═══════════════════════════════════════════════════════════════

PROBLEM: Humidity not in range / VPD incorrect

TOO HUMID (Low VPD)?
│
├─ Can ventilate?
│  ├─ YES → Increase air exchange
│  └─ NO → Heat + dehumidify
│
└─ Night or day?
   ├─ NIGHT → Increase temperature / dehumidify
   └─ DAY → Check humidification not overactive

TOO DRY (High VPD)?
│
├─ Temperature too high?
│  ├─ YES → Reduce temperature (shade/cool)
│  └─ NO → Activate humidification
│
└─ Check: Is it actually problem for current crop stage?
```

---

*EcoFusion Academy - Course 211 Handout*
