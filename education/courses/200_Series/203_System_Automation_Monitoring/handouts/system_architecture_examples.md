# System Architecture Examples
**Course 203: System Automation & Monitoring - Visual Reference Handout**

---

## Example 1: Small-Scale Aquaponics Monitoring

**Operation:** 500 gallon system, backyard/hobbyist
**Budget:** $200-500
**Approach:** DIY Arduino-based

```
╔═══════════════════════════════════════════════════════════════╗
║        SMALL AQUAPONICS MONITORING ARCHITECTURE               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   PHYSICAL SYSTEM                                             ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   ┌─────────────┐        ┌─────────────┐                      ║
║   │  Fish Tank  │───────▶│  Grow Beds  │                      ║
║   │  (300 gal)  │  pump  │  (200 gal)  │                      ║
║   │             │◀───────│             │                      ║
║   │  ● DS18B20  │ drain  │             │                      ║
║   │  ● Float SW │        │             │                      ║
║   └─────────────┘        └─────────────┘                      ║
║                                                               ║
║   SENSORS                                                     ║
║   ═══════════════════════════════════════════════════════     ║
║   • DS18B20 Temperature (3) ──┐                               ║
║   • Float switches (2) ────────┼─→ Arduino Uno                ║
║   • DHT22 Air temp/humidity ───┘                              ║
║                                 │                             ║
║   CONTROLLER                    │                             ║
║   ═══════════════════════════════════════════════════════     ║
║                          ┌──────▼──────┐                      ║
║                          │  Arduino    │                      ║
║                          │    Uno      │                      ║
║                          │  + Relay    │                      ║
║                          │    Module   │                      ║
║                          └──────┬──────┘                      ║
║                                 │                             ║
║   OUTPUTS                       │                             ║
║   ═══════════════════════════════════════════════════════     ║
║   ┌────────────┬────────────────┴────────────────┐            ║
║   ▼            ▼                                 ▼            ║
║ [Heater]   [Aerator]                       [LED Alarm]        ║
║ (relay)    (relay)                         (GPIO)             ║
║                                                               ║
║   DATA & INTERFACE                                            ║
║   ═══════════════════════════════════════════════════════     ║
║   • SD Card ─ Local logging (CSV files)                       ║
║   • Serial Monitor ─ Real-time display on computer            ║
║   • (Optional) LCD display ─ On-site readings                 ║
║                                                               ║
║   ALERTS                                                      ║
║   ═══════════════════════════════════════════════════════     ║
║   • LED (red) ─ Local visual alarm                            ║
║   • Buzzer ─ Local audio alarm                                ║
║   • (Future) Wi-Fi module → Email/SMS                         ║
║                                                               ║
║   COST BREAKDOWN                                              ║
║   ═══════════════════════════════════════════════════════     ║
║   Arduino Uno + accessories:  $40                             ║
║   Temperature sensors (3):    $24                             ║
║   Float switches (2):         $30                             ║
║   DHT22:                      $10                             ║
║   Relay module (2-channel):   $8                              ║
║   SD card module + card:      $10                             ║
║   Miscellaneous (wires, etc): $20                             ║
║   TOTAL:                      $142                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Key Features:**
- **Monitoring only** (heater/aerator controlled, but manually set)
- Local data logging for trend analysis
- Basic alarms (LED, buzzer) for on-site awareness
- Expandable (add Wi-Fi module for remote alerts)

---

## Example 2: Mid-Scale Greenhouse Automation

**Operation:** 5,000 sq ft greenhouse, hydroponic lettuce
**Budget:** $5,000-8,000
**Approach:** Commercial controller + hybrid cloud

```
╔═══════════════════════════════════════════════════════════════╗
║         GREENHOUSE CLIMATE AUTOMATION ARCHITECTURE            ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   PHYSICAL ZONES                                              ║
║   ═══════════════════════════════════════════════════════     ║
║   ┌──────────┬──────────┬──────────┐                          ║
║   │  Zone 1  │  Zone 2  │  Zone 3  │                          ║
║   │ Seedlings│ Growing  │ Harvest  │                          ║
║   └──────────┴──────────┴──────────┘                          ║
║        │         │          │                                 ║
║   SENSORS (per zone)                                          ║
║   ═══════════════════════════════════════════════════════     ║
║   • Air temp/humidity (aspirated shield)                      ║
║   • PAR light sensor                                          ║
║   • Nutrient tank: pH, EC, temp                               ║
║        │         │          │                                 ║
║        └─────────┴──────────┘                                 ║
║                  │                                            ║
║   CONTROLLER                                                  ║
║   ═══════════════════════════════════════════════════════     ║
║           ┌──────▼──────────────┐                             ║
║           │  Link4 Controller   │                             ║
║           │  (Commercial)       │                             ║
║           │  • Touchscreen UI   │                             ║
║           │  • Multi-zone       │                             ║
║           │  • Cloud-connected  │                             ║
║           └──────┬──────────────┘                             ║
║                  │                                            ║
║   OUTPUTS (controlled by zones)                               ║
║   ═══════════════════════════════════════════════════════     ║
║      ┌───────────┼───────────┬──────────┐                     ║
║      ▼           ▼           ▼          ▼                     ║
║   [Vents]   [Fans]     [Heaters]  [Lights]                    ║
║   (0-100%)  (staged)   (staged)   (dimming)                   ║
║      │           │           │          │                     ║
║   [Dosing Pumps] [Irrigation Valves]  [Curtains]              ║
║   (pH/EC)        (zones 1-3)          (motor)                 ║
║                                                               ║
║   NETWORK & DATA                                              ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   Controller ─(Ethernet)─→ Router ─(Internet)─→ Cloud         ║
║        │                      │                     │         ║
║        │                      │                     ▼         ║
║        │                      │              [Link4 Cloud]    ║
║        │                      │              • Data backup    ║
║        │                      │              • Remote access  ║
║        │                      │              • Mobile app     ║
║        │                      │                               ║
║        ▼                      ▼                               ║
║   [Local Database]      [Office Computer]                     ║
║   • SQLite/InfluxDB     • Dashboard (Grafana)                 ║
║   • 30-day retention    • Reports                             ║
║                                                               ║
║   ALERTS                                                      ║
║   ═══════════════════════════════════════════════════════     ║
║   Critical (Temp >90°F, <50°F):                               ║
║     → SMS via Twilio                                          ║
║     → Phone call (automated)                                  ║
║     → On-site siren                                           ║
║                                                               ║
║   Standard (pH out of range):                                 ║
║     → Email notification                                      ║
║     → Mobile app push notification                            ║
║                                                               ║
║   Warning (minor deviation):                                  ║
║     → Log only, daily summary email                           ║
║                                                               ║
║   COST BREAKDOWN                                              ║
║   ═══════════════════════════════════════════════════════     ║
║   Link4 controller + sensors:   $4,500                        ║
║   Installation labor:           $1,000                        ║
║   Network equipment:            $200                          ║
║   Twilio (SMS service):         $15/month                     ║
║   TOTAL INITIAL:                $5,700                        ║
║   Annual recurring:             $180 (SMS)                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Key Features:**
- **Full automation** (climate, irrigation, fertigation)
- Multi-zone independent control
- Hybrid local + cloud (reliable control even if internet fails)
- Professional-grade sensors and controllers
- Comprehensive alert system with escalation

---

## Example 3: Large RAS Aquaculture

**Operation:** 20,000 gallon RAS, commercial tilapia
**Budget:** $15,000-25,000
**Approach:** Industrial PLC + SCADA

```
╔═══════════════════════════════════════════════════════════════╗
║          COMMERCIAL RAS AUTOMATION ARCHITECTURE               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   PHYSICAL SYSTEM                                             ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   [Culture Tanks (4)] → [Solids Filter] → [Biofilter]        ║
║          ↑                                        │           ║
║          │                                        │           ║
║          └─────────[Pump]──────[UV]──────────────┘           ║
║                                                               ║
║   SENSORS (Redundant for Critical Parameters)                ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   Water Quality:                                              ║
║   • DO (2 sensors) ─────────┐                                ║
║   • pH (2 sensors) ──────────┤                               ║
║   • Temperature (3 sensors) ─┤                               ║
║   • ORP ──────────────────────┤                               ║
║   • Ammonia (NH3) ────────────┼─→ PLC (Siemens S7-1200)      ║
║   • Nitrite (NO2) ────────────┤                               ║
║   • Turbidity ────────────────┤                               ║
║                               │                               ║
║   Flow & Pressure:            │                               ║
║   • Flow meters (4) ──────────┤                               ║
║   • Pressure sensors (3) ─────┤                               ║
║                               │                               ║
║   Environmental:              │                               ║
║   • Air temp/humidity ────────┘                               ║
║   • Power monitoring                                          ║
║                               │                               ║
║   CONTROLLER (PLC)            │                               ║
║   ═══════════════════════════════════════════════════════     ║
║                      ┌────────▼────────┐                      ║
║                      │   Siemens PLC   │                      ║
║                      │   S7-1200       │                      ║
║                      │   • 24 inputs   │                      ║
║                      │   • 16 outputs  │                      ║
║                      │   • Modbus RTU  │                      ║
║                      │   • Ethernet    │                      ║
║                      └────────┬────────┘                      ║
║                               │                               ║
║   OUTPUTS                     │                               ║
║   ═══════════════════════════════════════════════════════     ║
║      ┌────────────┬───────────┼───────────┬─────────┐        ║
║      ▼            ▼           ▼           ▼         ▼        ║
║   [Aerators]  [Pumps]    [Heaters]   [Feeders] [Backup O2]   ║
║   (VFD speed) (VFD)      (staged)    (auto)    (solenoid)    ║
║      │            │           │           │         │        ║
║   [Alarms]    [Valves]   [UV Units]                          ║
║   (siren)     (solenoid) (on/off)                            ║
║                                                               ║
║   SCADA & NETWORKING                                          ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   PLC ─(Ethernet)─→ SCADA Server ─(LAN)─→ Operator Stations  ║
║    │                    │                       │            ║
║    │                    │                       ▼            ║
║    │                    │                [Control Room PC]   ║
║    │                    │                [Mobile Tablet]     ║
║    │                    ▼                                    ║
║    │              [SQL Database]                             ║
║    │              • All sensor data                          ║
║    │              • 5-year retention                         ║
║    │              • Compliance reports                       ║
║    │                    │                                    ║
║    └─(Modbus)─→ [Remote I/O] ─→ Distant sensors              ║
║                                                               ║
║   FAILSAFE & REDUNDANCY                                       ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   Power:                                                      ║
║   • UPS (20 min runtime)                                      ║
║   • Auto-start generator (activates if >5 min outage)         ║
║   • Battery backup aerator (emergency O2)                     ║
║                                                               ║
║   Sensors:                                                    ║
║   • Dual DO sensors (primary + backup)                        ║
║   • Dual pH sensors (cross-check)                             ║
║   • Triple temperature (redundancy + averaging)               ║
║                                                               ║
║   Control:                                                    ║
║   • Watchdog timer (resets PLC if frozen)                     ║
║   • Manual override panel                                     ║
║   • Emergency stop buttons (multiple locations)               ║
║                                                               ║
║   ALERTS & ESCALATION                                         ║
║   ═══════════════════════════════════════════════════════     ║
║                                                               ║
║   Level 1 (Warning): pH 7.5, DO 5.5 mg/L                      ║
║     → Log event                                               ║
║     → Display on SCADA                                        ║
║                                                               ║
║   Level 2 (Alert): pH 8.0, DO 4.5 mg/L                        ║
║     → Email to farm manager                                   ║
║     → SMS to on-call technician                               ║
║     → Yellow warning light                                    ║
║                                                               ║
║   Level 3 (Critical): pH >8.5, DO <4.0 mg/L                   ║
║     → Automated phone call (all contacts)                     ║
║     → Red alarm light + siren                                 ║
║     → Activate emergency systems (backup O2)                  ║
║     → Lock out non-essential loads                            ║
║                                                               ║
║   Level 4 (Emergency): DO <2.0 mg/L, power failure            ║
║     → All alerts escalated                                    ║
║     → Automated notification to emergency contacts            ║
║     → System enters safe mode (close valves, max aeration)    ║
║                                                               ║
║   COST BREAKDOWN                                              ║
║   ═══════════════════════════════════════════════════════     ║
║   PLC + I/O modules:          $3,500                          ║
║   Sensors (DO, pH, etc):      $8,000                          ║
║   VFDs (pumps, blowers):      $2,500                          ║
║   SCADA software + server:    $5,000                          ║
║   Installation & programming: $4,000                          ║
║   UPS + generator interlock:  $2,000                          ║
║   TOTAL INITIAL:              $25,000                         ║
║   Annual maintenance:         $2,500                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Key Features:**
- **Mission-critical reliability** (fish worth $50,000+)
- Redundant sensors for critical parameters
- Industrial-grade PLC and SCADA
- Comprehensive failsafe and backup systems
- Multi-level alerts with automatic escalation
- Long-term data retention for compliance and analysis

---

## Architecture Comparison Summary

| Feature | Small Aquaponics | Greenhouse | Large RAS |
|---------|-----------------|------------|-----------|
| **Scale** | Hobby/small | Small commercial | Commercial |
| **Budget** | $142 | $5,700 | $25,000 |
| **Controller** | Arduino DIY | Commercial (Link4) | Industrial PLC |
| **Sensors** | Basic | Commercial | Industrial, redundant |
| **Automation** | Monitoring only | Full automation | Full + failsafe |
| **Data Logging** | Local SD card | Local + cloud | SCADA + SQL |
| **Alerts** | Local LED/buzzer | SMS + email + app | Multi-level escalation |
| **Redundancy** | Minimal | Moderate | Extensive |
| **Complexity** | Low | Medium | High |
| **Best For** | Learning, low-risk | Production, profit | High-value, mission-critical |

---

*System Architecture Examples - Course 203 Visual Handout*
