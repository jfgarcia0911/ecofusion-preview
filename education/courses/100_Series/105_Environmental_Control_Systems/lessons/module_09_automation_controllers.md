# Module 9: Automation & Controllers
## Course 105: Environmental Control Systems

---

## Learning Objectives

By the end of this module, you will be able to:
- Compare different levels of automation sophistication
- Select appropriate controllers for your operation
- Program basic environmental control sequences
- Implement remote monitoring and alerts
- Integrate multiple systems for coordinated control

---

## Automation Levels

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    AUTOMATION SOPHISTICATION LEVELS                       ║
║                                                                           ║
║   LEVEL 1: BASIC (Manual + Timers)                                       ║
║   ═════════════════════════════════                                       ║
║   • Mechanical timers for lights                                         ║
║   • Manual adjustment of heaters/AC                                      ║
║   • Analog thermostats                                                   ║
║   Cost: $50-200                                                          ║
║                                                                           ║
║   LEVEL 2: SMART DEVICES                                                 ║
║   ═════════════════════════                                               ║
║   • Smart plugs with schedules                                           ║
║   • WiFi thermostats                                                     ║
║   • Basic environmental monitors                                         ║
║   Cost: $200-500                                                         ║
║                                                                           ║
║   LEVEL 3: DEDICATED GROW CONTROLLERS                                    ║
║   ════════════════════════════════════                                    ║
║   • Integrated multi-function controllers                                ║
║   • Sensor inputs + equipment outputs                                    ║
║   • Data logging and trends                                              ║
║   Cost: $500-2,000                                                       ║
║                                                                           ║
║   LEVEL 4: COMMERCIAL AUTOMATION                                         ║
║   ═══════════════════════════════                                         ║
║   • PLC/SCADA systems                                                    ║
║   • Full integration of all systems                                      ║
║   • Advanced algorithms and AI                                           ║
║   Cost: $5,000-50,000+                                                   ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Controller Selection

```
    ┌─────────────────────────────────────────────────────────────────────────────┐
    │                                                                             │
    │              ENVIRONMENTAL CONTROLLER COMPARISON                           │
    │                                                                             │
    │   ┌───────────────────┬──────────────┬─────────────────────────────────┐   │
    │   │ CONTROLLER TYPE   │ PRICE RANGE  │ FEATURES                        │   │
    │   ├───────────────────┼──────────────┼─────────────────────────────────┤   │
    │   │ Entry Level       │ $200-400     │ • Temp/RH control               │   │
    │   │ (Inkbird, etc.)   │              │ • Basic data logging            │   │
    │   │                   │              │ • 2-4 outlets                   │   │
    │   ├───────────────────┼──────────────┼─────────────────────────────────┤   │
    │   │ Mid-Range         │ $400-1,000   │ • Temp/RH/CO₂ control          │   │
    │   │ (TrolMaster,      │              │ • VPD calculation               │   │
    │   │  AC Infinity)     │              │ • Smartphone app                │   │
    │   │                   │              │ • Multiple zones                │   │
    │   ├───────────────────┼──────────────┼─────────────────────────────────┤   │
    │   │ Professional      │ $1,000-5,000 │ • Full environmental suite      │   │
    │   │ (Argus, Priva,    │              │ • Irrigation integration        │   │
    │   │  Growtronix)      │              │ • Advanced scheduling           │   │
    │   │                   │              │ • API/integration               │   │
    │   └───────────────────┴──────────────┴─────────────────────────────────┘   │
    │                                                                             │
    └─────────────────────────────────────────────────────────────────────────────┘
```

---

## Control Logic

```
╔═══════════════════════════════════════════════════════════════════════════╗
║                                                                           ║
║                    BASIC CONTROL LOGIC EXAMPLE                            ║
║                                                                           ║
║   TEMPERATURE CONTROL WITH STAGING:                                       ║
║   ═════════════════════════════════                                       ║
║                                                                           ║
║   Setpoint: 78°F                                                         ║
║                                                                           ║
║   IF Temperature > 82°F (Setpoint + 4):                                  ║
║       → Turn ON AC Stage 2 (high cooling)                                ║
║       → Turn OFF CO₂ injection                                           ║
║       → Increase dehumidifier if RH high                                 ║
║                                                                           ║
║   ELSE IF Temperature > 80°F (Setpoint + 2):                             ║
║       → Turn ON AC Stage 1 (low cooling)                                 ║
║       → CO₂ can remain on if sealed                                      ║
║                                                                           ║
║   ELSE IF Temperature > 78°F (at setpoint):                              ║
║       → AC OFF                                                           ║
║       → Maintain current conditions                                      ║
║                                                                           ║
║   ELSE IF Temperature < 75°F (Setpoint - 3):                             ║
║       → Turn ON Heater                                                   ║
║       → Continue CO₂ if lights on                                        ║
║                                                                           ║
║   DEADBAND: 2-4°F prevents rapid cycling                                 ║
║                                                                           ║
╚═══════════════════════════════════════════════════════════════════════════╝
```

---

## Module Summary

### Key Takeaways

1. **Match automation level to operation size** and budget
2. **Integrated controllers** simplify management
3. **Control logic** should include staging and deadbands
4. **Remote monitoring** provides peace of mind
5. **Alarms and alerts** catch problems before disasters

---

*EcoFusion Academy - Course 105: Environmental Control Systems - Module 9*

