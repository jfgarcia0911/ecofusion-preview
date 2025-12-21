# Automation Troubleshooting Flowchart
**Course 203: System Automation & Monitoring**

---

## Sensor Reading Problems

```
╔═══════════════════════════════════════════════════════════════╗
║         SENSOR TROUBLESHOOTING FLOWCHART                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Sensor reading incorrect or missing?                        ║
║             │                                                 ║
║             ▼                                                 ║
║   ┌─────────────────────┐                                     ║
║   │ Is reading present? │                                     ║
║   └─────────┬───────────┘                                     ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌─────────────────────┐                              ║
║      │   │ Check power to      │                              ║
║      │   │ sensor (multimeter) │                              ║
║      │   └─────────┬───────────┘                              ║
║      │             │                                          ║
║      │      ┌──────┴──────┐                                   ║
║      │      ▼             ▼                                   ║
║      │    OK?           NO                                    ║
║      │      │             │                                   ║
║      │      │             ▼                                   ║
║      │      │   [Fix power supply/wiring]                     ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   ┌──────────────────────┐                             ║
║      │   │ Check wiring         │                             ║
║      │   │ (continuity, shorts) │                             ║
║      │   └─────────┬────────────┘                             ║
║      │             │                                          ║
║      │      ┌──────┴──────┐                                   ║
║      │      ▼             ▼                                   ║
║      │    OK?           BAD                                   ║
║      │      │             │                                   ║
║      │      │             ▼                                   ║
║      │      │   [Repair/replace cable]                        ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   ┌──────────────────────┐                             ║
║      │   │ Check sensor with    │                             ║
║      │   │ known reference      │                             ║
║      │   └─────────┬────────────┘                             ║
║      │             │                                          ║
║      │      ┌──────┴──────┐                                   ║
║      │      ▼             ▼                                   ║
║      │    OK?           BAD                                   ║
║      │      │             │                                   ║
║      │      │             ▼                                   ║
║      │      │   [Replace sensor]                              ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   [Check controller input]                             ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   [Review software/logic]                              ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌──────────────────────┐                                    ║
║   │ Reading present but  │                                    ║
║   │ wrong value?         │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║  Constant?     Fluctuating?                                   ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌──────────────────┐                                 ║
║      │   │ Check for:       │                                 ║
║      │   │ - Loose wiring   │                                 ║
║      │   │ - Interference   │                                 ║
║      │   │ - Poor grounding │                                 ║
║      │   └──────────────────┘                                 ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌──────────────────────┐                                    ║
║   │ Needs calibration?   │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      ▼             ▼                                          ║
║ [Calibrate]  [Replace sensor]                                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Control System Not Responding

```
╔═══════════════════════════════════════════════════════════════╗
║         CONTROLLER TROUBLESHOOTING FLOWCHART                  ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Controller not responding or outputs not working?           ║
║             │                                                 ║
║             ▼                                                 ║
║   ┌──────────────────────┐                                    ║
║   │ Is controller ON?    │                                    ║
║   │ (lights, display)    │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌─────────────────┐                                  ║
║      │   │ Check power:    │                                  ║
║      │   │ - Plug in?      │                                  ║
║      │   │ - Breaker OK?   │                                  ║
║      │   │ - Voltage OK?   │                                  ║
║      │   └─────────────────┘                                  ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌──────────────────────┐                                    ║
║   │ Can you access       │                                    ║
║   │ controller? (web,    │                                    ║
║   │ serial, display)     │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌──────────────────┐                                 ║
║      │   │ Network issue?   │                                 ║
║      │   │ - Ping controller│                                 ║
║      │   │ - Check IP       │                                 ║
║      │   │ - Cable OK?      │                                 ║
║      │   └──────────────────┘                                 ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌──────────────────────┐                                    ║
║   │ Are sensors reading  │                                    ║
║   │ correctly?           │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   [See sensor troubleshooting above]                   ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌──────────────────────┐                                    ║
║   │ Are outputs working? │                                    ║
║   │ (relays, valves)     │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌──────────────────────┐                             ║
║      │   │ Test output manually │                             ║
║      │   │ (toggle in software) │                             ║
║      │   └─────────┬────────────┘                             ║
║      │             │                                          ║
║      │      ┌──────┴──────┐                                   ║
║      │      ▼             ▼                                   ║
║      │   Works?      Still doesn't work?                      ║
║      │      │             │                                   ║
║      │      │             ▼                                   ║
║      │      │   ┌────────────────────┐                        ║
║      │      │   │ Check:             │                        ║
║      │      │   │ - Relay connection │                        ║
║      │      │   │ - Relay power      │                        ║
║      │      │   │ - Load wiring      │                        ║
║      │      │   │ - Replace relay    │                        ║
║      │      │   └────────────────────┘                        ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   [Logic/software problem]                             ║
║      │      │                                                 ║
║      │      ▼                                                 ║
║      │   ┌────────────────────┐                               ║
║      │   │ Review control     │                               ║
║      │   │ logic, thresholds  │                               ║
║      │   │ Check for software │                               ║
║      │   │ errors in logs     │                               ║
║      │   └────────────────────┘                               ║
║      │                                                        ║
║      ▼                                                        ║
║   [System working but not as expected]                        ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌────────────────────────┐                                  ║
║   │ Tune setpoints,        │                                  ║
║   │ adjust thresholds,     │                                  ║
║   │ optimize logic         │                                  ║
║   └────────────────────────┘                                  ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Communication/Network Problems

```
╔═══════════════════════════════════════════════════════════════╗
║         NETWORK TROUBLESHOOTING FLOWCHART                     ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Cannot connect to controller or dashboard?                  ║
║             │                                                 ║
║             ▼                                                 ║
║   ┌──────────────────────┐                                    ║
║   │ Wired or Wireless?   │                                    ║
║   └─────────┬────────────┘                                    ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║   WIRED        WIRELESS                                       ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌────────────────────┐                               ║
║      │   │ Check:             │                               ║
║      │   │ - WiFi enabled?    │                               ║
║      │   │ - Correct SSID?    │                               ║
║      │   │ - Password correct?│                               ║
║      │   │ - Signal strength? │                               ║
║      │   └────────────────────┘                               ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌────────────────────┐                                      ║
║   │ Check:             │                                      ║
║   │ - Cable plugged in?│                                      ║
║   │ - Link lights OK?  │                                      ║
║   │ - Cable damaged?   │                                      ║
║   └─────────┬──────────┘                                      ║
║             │                                                 ║
║             ▼                                                 ║
║   ┌────────────────────┐                                      ║
║   │ Ping device IP     │                                      ║
║   │ address            │                                      ║
║   └─────────┬──────────┘                                      ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║  Responds?     No response?                                   ║
║      │             │                                          ║
║      │             ▼                                          ║
║      │   ┌────────────────────┐                               ║
║      │   │ IP address issue?  │                               ║
║      │   │ - Static vs DHCP   │                               ║
║      │   │ - IP conflict?     │                               ║
║      │   │ - Subnet mask OK?  │                               ║
║      │   └────────────────────┘                               ║
║      │                                                        ║
║      ▼                                                        ║
║   ┌────────────────────┐                                      ║
║   │ Can access service?│                                      ║
║   │ (port 80, 5000,etc)│                                      ║
║   └─────────┬──────────┘                                      ║
║             │                                                 ║
║      ┌──────┴──────┐                                          ║
║      ▼             ▼                                          ║
║    YES           NO                                           ║
║      │             │                                          ║
║      ▼             ▼                                          ║
║   [Connected]  ┌────────────────┐                             ║
║                │ Check:         │                             ║
║                │ - Firewall     │                             ║
║                │ - Service      │                             ║
║                │   running?     │                             ║
║                │ - Correct port?│                             ║
║                └────────────────┘                             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Quick Diagnostic Checklist

### Before Calling for Help

- [ ] Power supply connected and voltage OK?
- [ ] All cables securely connected?
- [ ] Sensors clean and not fouled?
- [ ] Calibration up to date?
- [ ] Software/firmware current version?
- [ ] Error messages logged or displayed?
- [ ] Recent changes to system?
- [ ] When did problem start?
- [ ] Is it consistent or intermittent?

### Tools Needed

- Multimeter (voltage, continuity)
- Known-good spare sensor (for swapping)
- Calibration solutions
- Laptop with terminal/serial software
- Network cable (bypass wireless)
- Flashlight
- Notebook for documentation

---

*Troubleshooting Flowchart - Course 203*
