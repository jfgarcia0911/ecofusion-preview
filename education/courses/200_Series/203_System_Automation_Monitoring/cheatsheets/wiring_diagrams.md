# Common Wiring Diagrams
**Course 203: System Automation & Monitoring**

---

## Arduino Uno Basic Sensor Wiring

### DS18B20 Temperature Sensor

```
╔═══════════════════════════════════════════════════════════════╗
║           DS18B20 TEMPERATURE SENSOR WIRING                   ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   DS18B20 Sensor          Arduino Uno                         ║
║   ┌──────────┐                                                ║
║   │  ┌───┐   │            ┌─────────────┐                     ║
║   │  │   │   │            │             │                     ║
║   │  └─┬─┘   │            │   ARDUINO   │                     ║
║   │    │     │            │    UNO      │                     ║
║   │  ┌─┴─┐   │            │             │                     ║
║   └──┴───┴───┘            └─────────────┘                     ║
║   RED  YEL BLK             5V  D2  GND                        ║
║    │    │   │               │   │   │                         ║
║    │    │   └───────────────┼───┼───┘                         ║
║    │    └───────────────────┼───┘                             ║
║    │           ┌────────────┘                                 ║
║    │           │   4.7kΩ Resistor                             ║
║    └───────────┴────────────────[====]                        ║
║                                                               ║
║   Connections:                                                ║
║   RED (VCC)   →  5V                                           ║
║   YELLOW (Data) → Digital Pin 2 (with 4.7kΩ pull-up to 5V)   ║
║   BLACK (GND) →  GND                                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### DHT22 Humidity/Temperature Sensor

```
╔═══════════════════════════════════════════════════════════════╗
║              DHT22 SENSOR WIRING                              ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   DHT22 Sensor            Arduino Uno                         ║
║   ┌─────────────┐                                             ║
║   │  ┌───────┐  │        ┌─────────────┐                     ║
║   │  │ DHT22 │  │        │   ARDUINO   │                     ║
║   │  └───────┘  │        │    UNO      │                     ║
║   │   │ │ │ │   │        └─────────────┘                     ║
║   └───┴─┴─┴─┴───┘         5V  D4  NC  GND                    ║
║      1 2 3 4               │   │       │                      ║
║      │ │ │ │               │   │       │                      ║
║      │ │ │ └───────────────┼───┼───────┘                      ║
║      │ │ └─────────────────┼───┘ (not connected)             ║
║      │ └───────────────────┘                                  ║
║      │       10kΩ Resistor                                    ║
║      └───────────────[====]──┐                                ║
║                               │                                ║
║                              5V                                ║
║                                                               ║
║   Pin 1 (VCC)  → 5V                                           ║
║   Pin 2 (Data) → Digital Pin 4 (with 10kΩ pull-up to 5V)     ║
║   Pin 3        → Not Connected                                ║
║   Pin 4 (GND)  → GND                                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Relay Module Wiring

### Single Relay for Heater Control

```
╔═══════════════════════════════════════════════════════════════╗
║              RELAY MODULE WIRING DIAGRAM                      ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Arduino/RPi          Relay Module          120V AC Device   ║
║                                                               ║
║   ┌─────────┐         ┌─────────────┐                         ║
║   │ Ctrl    │         │   RELAY     │       ┌────────────┐    ║
║   │         │         │   ┌───┐     │       │   HEATER   │    ║
║   │ 5V   ───┼─────────┼───┤VCC│     │       │            │    ║
║   │         │         │   └───┘     │       │    [====]  │    ║
║   │ GND  ───┼─────────┼───┤GND│     │       │            │    ║
║   │         │         │   └───┘     │       └──┬─────────┘    ║
║   │ D7   ───┼─────────┼───┤IN │     │          │               ║
║   │         │         │   └───┘     │      120V Hot            ║
║   └─────────┘         │             │          │               ║
║                       │   COM  NC  NO         │               ║
║                       │    │   │   │          │               ║
║              120V ────┼────┘   │   └──────────┘               ║
║              Hot                │                              ║
║                                 │                              ║
║                                 └────[Not used]                ║
║                                                               ║
║   NC = Normally Closed (connected when relay OFF)             ║
║   NO = Normally Open (connected when relay ON)                ║
║   COM = Common (always connected to load)                     ║
║                                                               ║
║   For heater control: Use COM and NO                          ║
║   When relay ON (energized): heater gets power                ║
║   When relay OFF: heater has no power                         ║
║                                                               ║
║   WARNING: 120V AC is dangerous! Use proper enclosure.        ║
║   Ground all metal parts. Use fuses.                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## pH Sensor Analog Connection

### Analog pH Sensor to Arduino

```
╔═══════════════════════════════════════════════════════════════╗
║              ANALOG pH SENSOR WIRING                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   pH Probe      pH Circuit Board      Arduino Uno            ║
║                                                               ║
║   ┌──────┐      ┌────────────┐       ┌─────────────┐        ║
║   │      │      │   pH       │       │   ARDUINO   │        ║
║   │ pH   │      │   Circuit  │       │    UNO      │        ║
║   │Probe ├──BNC─┤            │       │             │        ║
║   │      │      │  VCC  GND  │       │ 5V  GND  A0 │        ║
║   └──────┘      │   │    │   │       │  │   │    │  │        ║
║                 │   │    │   OUT     │  │   │    │  │        ║
║                 └───┼────┼────┼──────┘  │   │    │  │        ║
║                     │    │    │         │   │    │  │        ║
║                     │    │    └─────────┼───┼────┘  │        ║
║                     │    └──────────────┼───┘       │        ║
║                     └───────────────────┘           │        ║
║                                                     │        ║
║   Connections:                                                ║
║   pH Circuit VCC → Arduino 5V                                 ║
║   pH Circuit GND → Arduino GND                                ║
║   pH Circuit OUT → Arduino A0 (analog input)                  ║
║                                                               ║
║   Code reads analog voltage (0-5V) and converts to pH         ║
║   Typical: 0V = pH 0, 2.5V = pH 7, 5V = pH 14               ║
║   (Requires calibration for your specific sensor)             ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Raspberry Pi GPIO Connections

### Basic GPIO Wiring

```
╔═══════════════════════════════════════════════════════════════╗
║              RASPBERRY PI GPIO PINOUT (40-pin)                ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║          3.3V  ●●  5V                                         ║
║    GPIO2 (SDA) ●●  5V                                         ║
║    GPIO3 (SCL) ●●  GND                                        ║
║          GPIO4 ●●  GPIO14 (TXD)                               ║
║            GND ●●  GPIO15 (RXD)                               ║
║         GPIO17 ●●  GPIO18                                     ║
║         GPIO27 ●●  GND                                        ║
║         GPIO22 ●●  GPIO23                                     ║
║           3.3V ●●  GPIO24                                     ║
║    GPIO10 (MOSI) ●● GND                                       ║
║    GPIO9 (MISO) ●●  GPIO25                                    ║
║    GPIO11 (SCLK) ●● GPIO8 (CE0)                               ║
║            GND ●●  GPIO7 (CE1)                                ║
║                ... (continues to 40 pins)                     ║
║                                                               ║
║   IMPORTANT NOTES:                                            ║
║   • RPi GPIO = 3.3V logic (NOT 5V like Arduino!)              ║
║   • Connecting 5V to GPIO pin will damage Raspberry Pi       ║
║   • Use level shifters for 5V devices                         ║
║   • I2C on GPIO2/GPIO3 (SDA/SCL)                              ║
║   • 1-Wire on GPIO4 (default)                                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### DHT22 to Raspberry Pi

```
╔═══════════════════════════════════════════════════════════════╗
║          DHT22 SENSOR TO RASPBERRY PI                         ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   DHT22 Sensor           Raspberry Pi                         ║
║   ┌─────────────┐                                             ║
║   │  ┌───────┐  │        ┌─────────────┐                     ║
║   │  │ DHT22 │  │        │ RASPBERRY   │                     ║
║   │  └───────┘  │        │    PI       │                     ║
║   │   │ │ │ │   │        └─────────────┘                     ║
║   └───┴─┴─┴─┴───┘        3.3V GPIO4 GND                      ║
║      1 2 3 4              │    │     │                        ║
║      │ │ │ │              │    │     │                        ║
║      │ │ │ └──────────────┼────┼─────┘                        ║
║      │ │ └────────────────┼────┘ (NC)                        ║
║      │ └──────────────────┘                                  ║
║      │      10kΩ                                             ║
║      └──────[====]─────┐                                     ║
║                        │                                     ║
║                       3.3V                                   ║
║                                                               ║
║   WARNING: Use 3.3V power, NOT 5V!                            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## RS485 Modbus Network

### Multi-Device RS485 Bus

```
╔═══════════════════════════════════════════════════════════════╗
║                 RS485 MODBUS NETWORK                          ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Controller     Sensor 1     Sensor 2     Sensor 3          ║
║   (Master)       (Slave ID1)  (Slave ID2)  (Slave ID3)       ║
║                                                               ║
║   ┌────────┐    ┌────────┐   ┌────────┐   ┌────────┐        ║
║   │        │    │        │   │        │   │        │        ║
║   │ RS485  │    │ pH     │   │ EC     │   │ Temp   │        ║
║   │ Module │    │ Sensor │   │ Sensor │   │ Sensor │        ║
║   │        │    │        │   │        │   │        │        ║
║   │ A   B  │    │ A   B  │   │ A   B  │   │ A   B  │        ║
║   └─┬───┬──┘    └─┬───┬──┘   └─┬───┬──┘   └─┬───┬──┘        ║
║     │   │         │   │        │   │        │   │           ║
║   [120Ω]          │   │        │   │        │   │ [120Ω]    ║
║     │   │         │   │        │   │        │   │  │        ║
║     ├───┼─────────┼───┼────────┼───┼────────┼───┼──┘        ║
║   A │   │ B     A │   │ B    A │   │ B    A │   │ B         ║
║   ──┴───┴─────────┴───┴────────┴───┴────────┴───┴───        ║
║    Twisted Pair Cable (shielded recommended)                 ║
║                                                               ║
║   IMPORTANT:                                                  ║
║   • 120Ω termination resistors at both ends of bus           ║
║   • Use twisted pair cable (reduces interference)            ║
║   • Maximum distance: ~1200 meters                            ║
║   • Maximum devices: 32 (without repeaters)                  ║
║   • Each sensor needs unique Modbus ID (1-247)               ║
║   • Polarity matters: A to A, B to B                         ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 4-20mA Current Loop

### Industrial Sensor Connection

```
╔═══════════════════════════════════════════════════════════════╗
║              4-20mA CURRENT LOOP WIRING                       ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   Power Supply      4-20mA Sensor      Controller/PLC        ║
║                                                               ║
║   ┌──────────┐      ┌──────────┐      ┌──────────┐          ║
║   │          │      │          │      │          │          ║
║   │  24VDC   │      │  Temp    │      │ Analog   │          ║
║   │  Supply  │      │  Sensor  │      │ Input    │          ║
║   │          │      │ (2-wire) │      │          │          ║
║   │  +   -   │      │  +    -  │      │  +    -  │          ║
║   └──┬───┬───┘      └──┬────┬──┘      └──┬────┬──┘          ║
║      │   │             │    │            │    │             ║
║      │   │             │    │       250Ω │    │             ║
║      │   │             │    │      [====]│    │             ║
║      │   │             │    │            │    │             ║
║      └───┼─────────────┘    └────────────┘    │             ║
║          └───────────────────────────────────┬─┘             ║
║                                              │               ║
║                                             GND              ║
║                                                               ║
║   Current flow: 4-20mA                                        ║
║   • 4mA = 0% (minimum reading)                                ║
║   • 12mA = 50% (mid-scale)                                    ║
║   • 20mA = 100% (maximum reading)                             ║
║                                                               ║
║   250Ω resistor converts current to voltage:                  ║
║   • 4mA × 250Ω = 1.0V                                         ║
║   • 20mA × 250Ω = 5.0V                                        ║
║   Controller reads voltage (1-5V range)                       ║
║                                                               ║
║   Advantages:                                                 ║
║   • Noise immune (current not affected by cable resistance)   ║
║   • Long distances (300+ meters)                              ║
║   • 4mA baseline detects broken wire (0mA = fault)            ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Wiring Best Practices

### General Guidelines

1. **Color Coding:**
   - Red: Positive power (+5V, +12V, +24V)
   - Black: Ground (GND, 0V)
   - Yellow/White: Signal/data
   - Green: Earth ground (safety)

2. **Cable Selection:**
   - Power: 18-22 AWG (higher current = thicker wire)
   - Signals: 22-26 AWG
   - Long runs: Thicker wire to reduce voltage drop
   - Noisy environments: Shielded twisted pair

3. **Strain Relief:**
   - Secure cables near connectors
   - Avoid sharp bends
   - Use cable ties, not too tight

4. **Labeling:**
   - Label both ends of every wire
   - Use waterproof labels
   - Document in wiring diagram

5. **Safety:**
   - NEVER mix low voltage (5V, 12V) and high voltage (120V, 240V) in same conduit
   - Use proper gauge wire for current
   - Fuse all high-current circuits
   - Use GFCI outlets near water
   - Ground all metal enclosures

6. **Testing:**
   - Check continuity before powering up
   - Verify voltage with multimeter
   - Test with LED before connecting expensive components

---

*Wiring Diagrams Reference - Course 203*
