# Module 6: Arduino/Raspberry Pi Projects
**Course 203: System Automation & Monitoring**
Duration: 1.5 hours

---

## Learning Objectives

By the end of this module, you will be able to:
1. Compare Arduino and Raspberry Pi platforms for CEA applications
2. Set up basic electronics (breadboards, wiring, relays)
3. Read sensor data with code
4. Control outputs (relays, pumps, valves)
5. Implement data logging to SD card
6. Create a basic web dashboard
7. Build a functional monitoring station

---

## 6.1 Platform Comparison and Selection

### Arduino Overview

**What is Arduino?**
- Microcontroller board (computer on a chip)
- Programmed in C/C++ (simplified)
- Designed for hardware interfacing
- Real-time operation (no operating system overhead)

**Arduino Uno Specifications:**
```
Microcontroller: ATmega328P
Operating Voltage: 5V
Digital I/O Pins: 14 (6 PWM)
Analog Input Pins: 6 (10-bit ADC)
Flash Memory: 32 KB
SRAM: 2 KB
Clock Speed: 16 MHz
Cost: $25-30
```

**Strengths:**
- Simple, reliable hardware control
- Huge community and tutorials
- Low power consumption
- Real-time sensing and control (no delays)
- Inexpensive

**Weaknesses:**
- Limited memory and processing
- No built-in networking (requires shields/modules)
- No operating system (harder to do complex tasks)
- One program at a time

**Best For:**
- Direct sensor reading
- Relay control
- Time-critical tasks
- Battery-powered applications
- Beginners learning electronics

### Raspberry Pi Overview

**What is Raspberry Pi?**
- Single-board computer (like a tiny PC)
- Runs Linux operating system
- Programmed in Python (or other languages)
- Has USB, HDMI, Ethernet, Wi-Fi

**Raspberry Pi 4 Specifications:**
```
CPU: Quad-core ARM Cortex-A72 @ 1.5 GHz
RAM: 2/4/8 GB
GPIO Pins: 40 (26 usable, 3.3V)
USB Ports: 4 (USB 3.0 and 2.0)
Network: Gigabit Ethernet, Wi-Fi, Bluetooth
Storage: MicroSD card
Cost: $35-75
```

**Strengths:**
- Full computer capabilities
- Easy networking (built-in Wi-Fi/Ethernet)
- Rich software ecosystem (databases, web servers)
- Multiple programs running simultaneously
- Great for data visualization and dashboards

**Weaknesses:**
- Not real-time (OS introduces delays)
- Higher power consumption (~5-10W)
- More complex to set up initially
- More expensive (needs power supply, SD card, case)
- Can corrupt SD card if powered off improperly

**Best For:**
- Data logging and analysis
- Web dashboards
- Camera integration
- Complex logic and algorithms
- Network-based monitoring

### Direct Comparison

| Feature | Arduino Uno | Raspberry Pi 4 |
|---------|-------------|----------------|
| **Type** | Microcontroller | Computer |
| **Cost** | $25 | $35-75 + accessories |
| **Programming** | C/C++ (Arduino IDE) | Python, others |
| **Real-time** | Yes | No (OS overhead) |
| **GPIO Voltage** | 5V | 3.3V (caution!) |
| **Networking** | Requires add-on | Built-in Wi-Fi/Ethernet |
| **Power** | 0.5W | 5-10W |
| **Storage** | 32 KB | Unlimited (SD card) |
| **Multi-tasking** | No | Yes |
| **Best for** | Hardware control | Data processing, web |

### Hybrid Approach (Best of Both Worlds)

```
╔═══════════════════════════════════════════════════════════════╗
║              ARDUINO + RASPBERRY PI SYSTEM                    ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Sensors] ──→ [Arduino] ──(Serial/USB)──→ [Raspberry Pi]   ║
║                     ↓                              ↓          ║
║                 [Relays,                     [Web Dashboard]  ║
║                  Pumps]                      [Data Logging]   ║
║                                              [Alerts]         ║
║                                                               ║
║   Arduino: Real-time sensing and control                      ║
║   Raspberry Pi: Data processing, networking, visualization    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Benefits:**
- Arduino handles time-critical control
- Raspberry Pi handles data and user interface
- If RPi crashes, Arduino keeps system running
- Best reliability and features

---

## 6.2 Basic Electronics and Wiring

### Essential Components

**1. Breadboard**
```
Solderless prototyping board
Allows temporary connections

Structure:
  • Power rails (+ and - strips)
  • Terminal strips (5-hole groups connected)

Cost: $5-10
```

**2. Jumper Wires**
```
Types:
  • Male-to-male (breadboard to breadboard)
  • Male-to-female (board to sensor)
  • Female-to-female (sensor to sensor)

Cost: $5-10 for assorted pack
```

**3. Resistors**
```
Common values needed:
  • 220Ω, 1kΩ, 10kΩ
  • Pull-up/pull-down resistors
  • LED current limiting

Cost: $5 for assortment
```

**4. LEDs**
```
Visual indicators (great for testing)
Require current-limiting resistor (220Ω typical)

Cost: $5 for pack
```

**5. Relay Module**
```
Allows Arduino/RPi to control high-voltage devices

Specifications:
  • Input: 5V or 3.3V logic
  • Output: 120/240VAC, 10-30A
  • Optically isolated (safety)

Cost: $5-15 per relay

Wiring:
  ┌────────────────────┐
  │   RELAY MODULE     │
  ├────────────────────┤
  │ VCC  IN   GND      │ ← Control side (Arduino)
  ├────────────────────┤
  │ COM  NC   NO       │ ← Switch side (load)
  └────────────────────┘

  COM: Common (input power)
  NC: Normally Closed (connected when relay OFF)
  NO: Normally Open (connected when relay ON)
```

### Safety Practices

**NEVER Mix Low and High Voltage:**
```
✓ SAFE:
  Low voltage (5V, 12V DC) on breadboard
  High voltage (120V AC) in proper enclosure with relay

✗ DANGEROUS:
  120V AC anywhere near breadboard
  Exposed high-voltage connections
```

**Use Fuses:**
- Always fuse high-current circuits
- Match fuse to wire gauge and load

**Insulate Connections:**
- Heat shrink tubing
- Electrical tape
- Proper terminal blocks

**Test Before Powering:**
- Check connections with multimeter
- Verify polarity (+ and -)
- Start with low voltage

---

## 6.3 Reading Sensors with Code

### Arduino: Reading a Temperature Sensor

**Hardware: DS18B20 Digital Temperature Sensor**

```cpp
// Include OneWire library (install via Library Manager)
#include <OneWire.h>
#include <DallasTemperature.h>

// Data wire plugged into pin 2
#define ONE_WIRE_BUS 2

// Setup OneWire instance
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
  Serial.println("Temperature Monitor Started");
}

void loop() {
  // Request temperature reading
  sensors.requestTemperatures();

  // Get temperature in Celsius
  float tempC = sensors.getTempCByIndex(0);

  // Convert to Fahrenheit
  float tempF = tempC * 9.0 / 5.0 + 32.0;

  // Print to serial monitor
  Serial.print("Temperature: ");
  Serial.print(tempF);
  Serial.println(" °F");

  // Wait 5 seconds
  delay(5000);
}
```

**Wiring:**
```
DS18B20 Sensor:
  VCC (red) → 5V
  GND (black) → GND
  Data (yellow) → Pin 2
  4.7kΩ resistor between VCC and Data (pull-up)
```

### Arduino: Reading Analog Sensor (pH)

```cpp
#define PH_PIN A0  // pH sensor connected to analog pin A0

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Read analog value (0-1023)
  int rawValue = analogRead(PH_PIN);

  // Convert to voltage (0-5V)
  float voltage = rawValue * (5.0 / 1023.0);

  // Convert to pH (depends on sensor calibration)
  // This is example calibration - adjust for your sensor
  float pH = 7.0 - ((voltage - 2.5) / 0.18);

  // Print results
  Serial.print("Raw: ");
  Serial.print(rawValue);
  Serial.print(" | Voltage: ");
  Serial.print(voltage);
  Serial.print("V | pH: ");
  Serial.println(pH);

  delay(1000);
}
```

### Raspberry Pi: Reading Sensors with Python

**Using GPIO Library:**

```python
import Adafruit_DHT
import time

# Sensor type and GPIO pin
sensor = Adafruit_DHT.DHT22
pin = 4

print("Temperature and Humidity Monitor")

while True:
    # Read sensor
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

    if humidity is not None and temperature is not None:
        # Convert to Fahrenheit
        temp_f = temperature * 9/5 + 32

        print(f'Temperature: {temp_f:.1f}°F  Humidity: {humidity:.1f}%')
    else:
        print('Failed to read sensor')

    # Wait 5 seconds
    time.sleep(5)
```

**Installation:**
```bash
sudo pip3 install Adafruit_DHT
```

---

## 6.4 Controlling Outputs (Relays, Pumps)

### Arduino: Relay Control

```cpp
#define RELAY_PIN 7
#define TEMP_SETPOINT 75.0  // °F

#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);  // Relay OFF initially

  sensors.begin();
  Serial.begin(9600);
}

void loop() {
  sensors.requestTemperatures();
  float tempF = sensors.getTempCByIndex(0) * 9.0 / 5.0 + 32.0;

  // Simple thermostat logic
  if (tempF < TEMP_SETPOINT - 1.0) {
    digitalWrite(RELAY_PIN, HIGH);  // Turn ON heater
    Serial.print("HEATER ON | ");
  } else if (tempF > TEMP_SETPOINT + 1.0) {
    digitalWrite(RELAY_PIN, LOW);   // Turn OFF heater
    Serial.print("HEATER OFF | ");
  }

  Serial.print("Temp: ");
  Serial.print(tempF);
  Serial.println("°F");

  delay(2000);
}
```

### Multiple Relays (Staged Control)

```cpp
#define RELAY1_PIN 7  // Fan stage 1
#define RELAY2_PIN 8  // Fan stage 2

float temperature = readTemperature();

// Stage 1: Turn on first fan at 80°F
if (temperature > 80.0) {
  digitalWrite(RELAY1_PIN, HIGH);
} else {
  digitalWrite(RELAY1_PIN, LOW);
}

// Stage 2: Turn on second fan at 85°F
if (temperature > 85.0) {
  digitalWrite(RELAY2_PIN, HIGH);
} else {
  digitalWrite(RELAY2_PIN, LOW);
}
```

---

## 6.5 Data Logging to SD Card

### Arduino SD Card Logging

**Hardware: SD Card Module**

```cpp
#include <SPI.h>
#include <SD.h>
#include <OneWire.h>
#include <DallasTemperature.h>

#define SD_CS_PIN 10
#define ONE_WIRE_BUS 2

OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

File dataFile;

void setup() {
  Serial.begin(9600);
  sensors.begin();

  // Initialize SD card
  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("SD card failed!");
    while (1);
  }
  Serial.println("SD card ready.");

  // Create/open log file
  dataFile = SD.open("templog.csv", FILE_WRITE);
  if (dataFile) {
    dataFile.println("Timestamp,Temperature_F");
    dataFile.close();
  }
}

void loop() {
  sensors.requestTemperatures();
  float tempF = sensors.getTempCByIndex(0) * 9.0 / 5.0 + 32.0;

  // Get uptime as timestamp (milliseconds since start)
  unsigned long timestamp = millis();

  // Log to SD card
  dataFile = SD.open("templog.csv", FILE_WRITE);
  if (dataFile) {
    dataFile.print(timestamp);
    dataFile.print(",");
    dataFile.println(tempF);
    dataFile.close();

    Serial.print("Logged: ");
    Serial.println(tempF);
  } else {
    Serial.println("Error opening file!");
  }

  delay(60000);  // Log every 1 minute
}
```

**SD Card Wiring:**
```
SD Module → Arduino
  CS  → Pin 10
  SCK → Pin 13
  MOSI → Pin 11
  MISO → Pin 12
  VCC → 5V
  GND → GND
```

### Raspberry Pi Data Logging

**Python CSV Logging:**

```python
import csv
import time
from datetime import datetime
import Adafruit_DHT

sensor = Adafruit_DHT.DHT22
pin = 4

log_file = '/home/pi/greenhouse_data.csv'

# Create CSV file with headers
with open(log_file, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(['Timestamp', 'Temperature_F', 'Humidity_%'])

print("Data logging started...")

while True:
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

    if humidity is not None and temperature is not None:
        temp_f = temperature * 9/5 + 32
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

        # Append to CSV
        with open(log_file, 'a', newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow([timestamp, f'{temp_f:.1f}', f'{humidity:.1f}'])

        print(f'{timestamp} - Temp: {temp_f:.1f}°F, Humidity: {humidity:.1f}%')

    time.sleep(300)  # Log every 5 minutes
```

---

## 6.6 Web Dashboard Basics

### Raspberry Pi Web Server (Flask)

**Install Flask:**
```bash
sudo pip3 install flask
```

**Simple Dashboard (app.py):**

```python
from flask import Flask, render_template
import Adafruit_DHT
from datetime import datetime

app = Flask(__name__)

sensor = Adafruit_DHT.DHT22
pin = 4

@app.route('/')
def index():
    # Read current sensor data
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)

    if humidity is not None and temperature is not None:
        temp_f = temperature * 9/5 + 32
        status = "Online"
    else:
        temp_f = None
        humidity = None
        status = "Sensor Error"

    # Render HTML template with data
    return render_template('index.html',
                         temperature=temp_f,
                         humidity=humidity,
                         status=status,
                         timestamp=datetime.now().strftime('%Y-%m-%d %H:%M:%S'))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
```

**HTML Template (templates/index.html):**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Greenhouse Monitor</title>
    <meta http-equiv="refresh" content="30">
    <style>
        body { font-family: Arial; background: #f0f0f0; padding: 20px; }
        .container { background: white; padding: 30px; border-radius: 10px; max-width: 600px; margin: auto; }
        .reading { font-size: 48px; color: #007bff; text-align: center; margin: 20px 0; }
        .label { font-size: 18px; color: #666; text-align: center; }
        .status { text-align: center; color: green; font-weight: bold; }
    </style>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center;">Greenhouse Monitor</h1>

        <div class="label">Temperature</div>
        <div class="reading">
            {% if temperature %}
                {{ "%.1f"|format(temperature) }}°F
            {% else %}
                --
            {% endif %}
        </div>

        <div class="label">Humidity</div>
        <div class="reading">
            {% if humidity %}
                {{ "%.1f"|format(humidity) }}%
            {% else %}
                --
            {% endif %}
        </div>

        <div class="status">Status: {{ status }}</div>
        <div style="text-align: center; color: #999; margin-top: 20px;">
            Last update: {{ timestamp }}
        </div>
    </div>
</body>
</html>
```

**Run the server:**
```bash
python3 app.py
```

**Access dashboard:**
```
Open browser to: http://[raspberry-pi-ip]:5000
```

---

## 6.7 Capstone Project: Build a Monitoring Station

### Project Goal

Build a complete monitoring station that:
1. Reads temperature and humidity
2. Controls a heater via relay
3. Logs data to SD card or file
4. Displays data on web dashboard (RPi) or serial (Arduino)
5. Sends alerts when out of range

### Bill of Materials

**Arduino Version:**
```
• Arduino Uno: $25
• DHT22 temp/humidity sensor: $10
• Relay module (1-channel): $5
• SD card module: $8
• SD card (8GB): $5
• Breadboard and wires: $10
• 5V power supply: $8
• Enclosure: $10
TOTAL: ~$81
```

**Raspberry Pi Version:**
```
• Raspberry Pi 4 (2GB): $35
• MicroSD card (16GB): $8
• Power supply (USB-C): $8
• DHT22 sensor: $10
• Relay module: $5
• Case: $10
• Breadboard and wires: $10
TOTAL: ~$86
```

### Project Steps

**Phase 1: Test Sensors** (30 minutes)
1. Connect temperature/humidity sensor
2. Write code to read and display values
3. Verify accuracy with known thermometer

**Phase 2: Test Control** (30 minutes)
1. Connect relay module
2. Write thermostat logic
3. Test relay switching (use LED for safety)

**Phase 3: Data Logging** (30 minutes)
1. Implement SD card or file logging
2. Log timestamp, temperature, humidity, relay state
3. Verify log file creation

**Phase 4: Dashboard/Display** (30 minutes)
- Arduino: Enhance serial output with status
- Raspberry Pi: Create web dashboard

**Phase 5: Alerts** (30 minutes)
- Arduino: Flash LED or buzzer for alarm
- Raspberry Pi: Email or SMS alerts (requires setup)

**Phase 6: Testing and Refinement** (optional)
- Run for 24 hours
- Analyze logged data
- Adjust thresholds

### Success Criteria

- [ ] Sensor reads accurately (within ±1°F, ±5% RH)
- [ ] Relay controls based on temperature setpoint
- [ ] Data logs correctly with timestamps
- [ ] Dashboard/display shows current status
- [ ] System runs reliably for 24+ hours
- [ ] Clean, organized wiring (no loose connections)
- [ ] Documented code (comments explaining logic)

---

## Summary

Arduino and Raspberry Pi open endless possibilities for custom CEA automation:

**Key Takeaways:**

1. **Arduino:** Best for real-time control, sensors, relays
2. **Raspberry Pi:** Best for data logging, networking, dashboards
3. **Hybrid Systems:** Combine both for optimal performance
4. **Safety:** Always isolate high voltage, use proper relays
5. **Start Simple:** Test each component individually before integrating
6. **Document:** Comment code, label wires, keep notes
7. **Community:** Huge resources online for troubleshooting

**Next Steps:**
- Complete the hands-on project
- Experiment with additional sensors
- Explore advanced features (PID control, machine learning)
- Share your project with the community

**Resources:**
- Arduino.cc - Official documentation
- RaspberryPi.org - Getting started guides
- GitHub - Thousands of CEA automation projects
- YouTube - Video tutorials for specific sensors

---

## Review Questions

1. What is the main difference between Arduino and Raspberry Pi?
2. Why use a relay module instead of controlling devices directly?
3. How do you read an analog sensor value on Arduino?
4. What library is commonly used for DHT22 sensors on Raspberry Pi?
5. What are the advantages of logging data to SD card vs. serial monitor?
6. What safety precautions should you take when working with relays?
7. What is the benefit of a hybrid Arduino + Raspberry Pi system?
8. How can you create a web dashboard on Raspberry Pi?

---

## Practical Exercise

**Exercise: Build Your Monitoring Station**

Following the capstone project guide:

1. **Gather materials** (Arduino or Raspberry Pi version)
2. **Wire and test sensors**
3. **Implement basic control logic**
4. **Add data logging**
5. **Create dashboard/display**
6. **Run 24-hour test**

**Deliverables:**
- Photo of completed hardware
- Code (well-commented)
- Sample of logged data (CSV file)
- Screenshot of dashboard (if RPi) or serial output (if Arduino)
- Brief writeup of challenges and solutions

---

*End of Module 6*
