# Hands-On Activity: Build an Arduino Monitoring Station
**Course 203: System Automation & Monitoring**

---

## Project Overview

**Goal:** Build a functional temperature and humidity monitoring station using Arduino that logs data to SD card and displays current readings.

**Duration:** 3-4 hours

**Difficulty:** Intermediate

**Prerequisites:**
- Module 6 (Arduino/Raspberry Pi Projects) completed
- Basic soldering skills helpful but not required
- Computer with Arduino IDE installed

---

## Learning Objectives

By completing this project, you will:
1. Wire sensors to an Arduino microcontroller
2. Write and upload Arduino code to read sensor data
3. Implement SD card data logging
4. Display real-time sensor readings
5. Troubleshoot hardware and software issues
6. Create a functional monitoring system you can actually use

---

## Materials Needed

### Required Components

| Item | Quantity | Estimated Cost | Notes |
|------|----------|----------------|-------|
| **Arduino Uno** | 1 | $25 | Rev3 or compatible |
| **DHT22 Sensor** | 1 | $10 | Temp + humidity |
| **SD Card Module** | 1 | $5-8 | Micro SD adapter |
| **MicroSD Card** | 1 | $5 | 8-16GB, formatted FAT32 |
| **Breadboard** | 1 | $5 | Half-size or full |
| **Jumper Wires** | 10+ | $5 | Male-to-male |
| **10kΩ Resistor** | 1 | $0.10 | For DHT22 pull-up |
| **USB Cable** | 1 | Included | USB A to B for Arduino |
| **Power Supply** | 1 | $8 | 9V 1A wall adapter (optional) |
| **Enclosure** (optional) | 1 | $10 | Project box |
| **TOTAL** | | **$68-83** | |

### Tools Required

- Computer with USB port
- Arduino IDE (free download: arduino.cc)
- Wire strippers (if using solid core wire)
- Multimeter (helpful for troubleshooting)

---

## Part 1: Hardware Assembly (45 minutes)

### Step 1: Prepare Your Workspace

1. Clear a clean, dry workspace
2. Install Arduino IDE on your computer if not already installed
3. Organize all components
4. Download required libraries (see code section)

### Step 2: Wire the DHT22 Sensor

**Wiring Diagram:**

```
DHT22 Sensor Pinout (facing front, left to right):
Pin 1: VCC (3.3-5V power)
Pin 2: DATA (signal)
Pin 3: Not Connected
Pin 4: GND (ground)

Connections:
DHT22 Pin 1 (VCC)  →  Arduino 5V
DHT22 Pin 2 (DATA) →  Arduino Digital Pin 4
DHT22 Pin 4 (GND)  →  Arduino GND

10kΩ Resistor between DHT22 Pin 1 and Pin 2 (pull-up resistor)
```

**Assembly:**

1. Insert DHT22 sensor into breadboard
2. Use jumper wires to connect:
   - Red wire: DHT22 Pin 1 to Arduino 5V
   - Yellow wire: DHT22 Pin 2 to Arduino D4
   - Black wire: DHT22 Pin 4 to Arduino GND
3. Add 10kΩ resistor across DHT22 Pins 1 and 2 on breadboard

### Step 3: Wire the SD Card Module

**SD Module Pinout:**
```
VCC  → Arduino 5V
GND  → Arduino GND
MISO → Arduino Pin 12
MOSI → Arduino Pin 11
SCK  → Arduino Pin 13
CS   → Arduino Pin 10
```

**Assembly:**

1. Insert SD card module into breadboard (separate area from DHT22)
2. Connect wires as specified above
3. Double-check all connections (incorrect wiring can damage SD module)

### Step 4: Insert SD Card

1. Format MicroSD card as FAT32 on your computer if not already formatted
2. Eject safely
3. Insert into SD card module

### Step 5: Connect Arduino to Computer

1. Plug USB cable into Arduino
2. Connect other end to computer
3. Arduino power LED should light up

---

## Part 2: Software Setup (30 minutes)

### Step 1: Install Required Libraries

In Arduino IDE:

1. Go to **Sketch → Include Library → Manage Libraries**
2. Search for and install:
   - "DHT sensor library" by Adafruit
   - "Adafruit Unified Sensor" (dependency)
   - "SD" library (built-in, may already be installed)

### Step 2: Upload Test Code (DHT22 Only)

**Purpose:** Verify DHT22 sensor is working before adding SD card complexity.

```cpp
#include <DHT.h>

#define DHTPIN 4      // Digital pin connected to DHT22
#define DHTTYPE DHT22 // DHT 22 (AM2302)

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  Serial.println("DHT22 Test");
  dht.begin();
}

void loop() {
  delay(2000); // Wait 2 seconds between readings

  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();
  float tempF = dht.readTemperature(true); // Fahrenheit

  // Check if readings failed
  if (isnan(humidity) || isnan(tempC)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // Print to Serial Monitor
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.print("%  Temperature: ");
  Serial.print(tempF);
  Serial.println("°F");
}
```

**Testing:**

1. Select correct board: **Tools → Board → Arduino Uno**
2. Select correct port: **Tools → Port → (your Arduino port)**
3. Click **Upload** (arrow button)
4. Open **Serial Monitor** (magnifying glass icon or Ctrl+Shift+M)
5. Set baud rate to **9600**
6. You should see temperature and humidity readings every 2 seconds

**Troubleshooting:**
- "Failed to read" → Check wiring, resistor, sensor orientation
- No output → Check Serial Monitor baud rate (9600)
- Incorrect values → Verify 10kΩ resistor, check for shorts

---

### Step 3: Complete Code with SD Logging

Once DHT22 works, upload the full version with SD card logging:

```cpp
#include <SPI.h>
#include <SD.h>
#include <DHT.h>

#define DHTPIN 4
#define DHTTYPE DHT22
#define SD_CS_PIN 10

DHT dht(DHTPIN, DHTTYPE);
File dataFile;

void setup() {
  Serial.begin(9600);
  Serial.println("Monitoring Station Starting...");

  // Initialize DHT sensor
  dht.begin();

  // Initialize SD card
  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("SD card initialization failed!");
    return;
  }
  Serial.println("SD card initialized.");

  // Create header in CSV file if new
  if (!SD.exists("data.csv")) {
    dataFile = SD.open("data.csv", FILE_WRITE);
    if (dataFile) {
      dataFile.println("Timestamp_Millis,Temperature_F,Humidity_%");
      dataFile.close();
      Serial.println("Created new data.csv");
    }
  }

  Serial.println("Monitoring station ready!");
  Serial.println("Timestamp,Temp(F),Humidity(%)");
}

void loop() {
  delay(60000); // Log every 1 minute (60000 ms)

  // Read sensors
  float humidity = dht.readHumidity();
  float tempC = dht.readTemperature();
  float tempF = dht.readTemperature(true);

  // Check for errors
  if (isnan(humidity) || isnan(tempF)) {
    Serial.println("Sensor read error");
    return;
  }

  // Get timestamp (milliseconds since start)
  unsigned long timestamp = millis();

  // Log to SD card
  dataFile = SD.open("data.csv", FILE_WRITE);
  if (dataFile) {
    dataFile.print(timestamp);
    dataFile.print(",");
    dataFile.print(tempF);
    dataFile.print(",");
    dataFile.println(humidity);
    dataFile.close();

    // Print to Serial Monitor
    Serial.print(timestamp);
    Serial.print(",");
    Serial.print(tempF);
    Serial.print(",");
    Serial.println(humidity);
  } else {
    Serial.println("Error opening data.csv");
  }
}
```

**Upload and Test:**

1. Upload code to Arduino
2. Open Serial Monitor
3. Verify messages: "SD card initialized" and "Monitoring station ready!"
4. Wait at least 2 minutes
5. Remove SD card (power off Arduino first!)
6. Insert SD card into computer
7. Open data.csv file - you should see logged data!

---

## Part 3: Enhancements (Optional, 1-2 hours)

### Enhancement 1: Add LCD Display

**Materials:**
- 16x2 LCD with I2C adapter ($8-12)

**Wiring:**
```
LCD I2C:
SDA → Arduino A4
SCL → Arduino A5
VCC → Arduino 5V
GND → Arduino GND
```

**Code modification:** Add LiquidCrystal_I2C library and display current readings on LCD.

### Enhancement 2: Add LED Alerts

**Materials:**
- Red LED, green LED, 220Ω resistors (< $1)

**Logic:**
- Green LED: Normal operation
- Red LED: Temperature out of range (< 60°F or > 85°F)

### Enhancement 3: Real-Time Clock (RTC)

**Materials:**
- DS3231 RTC module ($5-10)

**Benefit:** Timestamps with actual date/time instead of milliseconds since startup.

---

## Part 4: Data Analysis (30 minutes)

### Analyzing Your Data

1. **Retrieve SD card:** Power off Arduino, remove SD card
2. **Import to spreadsheet:**
   - Open Excel or Google Sheets
   - Import data.csv
   - Convert timestamp (milliseconds) to hours or use as-is

3. **Create graphs:**
   - Line chart: Time (X-axis) vs. Temperature (Y-axis)
   - Line chart: Time (X-axis) vs. Humidity (Y-axis)

4. **Analyze patterns:**
   - What is the daily temperature variation?
   - Does humidity correlate with temperature?
   - What time of day is hottest/coldest?

### Example Questions to Answer

- Min/max temperature over 24 hours?
- Average humidity?
- How quickly does temperature change?
- Are there any unexpected spikes or drops?

---

## Troubleshooting Guide

| Problem | Possible Cause | Solution |
|---------|---------------|----------|
| **No Serial output** | Wrong baud rate | Set to 9600 in Serial Monitor |
| | Wrong port selected | Check Tools → Port |
| **"Failed to read sensor"** | Wiring error | Double-check connections |
| | No pull-up resistor | Add 10kΩ resistor |
| | Bad sensor | Try different DHT22 |
| **SD init failed** | SD card not formatted | Format as FAT32 |
| | Wiring error | Verify SPI pins (10, 11, 12, 13) |
| | Bad SD module | Try different module/card |
| **Incorrect readings** | Sensor in sunlight | Shield from direct light |
| | Sensor near heat source | Move away from heat |
| **File won't write** | SD card full | Use smaller card or clear files |
| | File permissions | Reformat SD card |

---

## Success Criteria

Your project is successful when:

- [ ] DHT22 sensor reads temperature and humidity accurately
- [ ] Readings display on Serial Monitor every minute
- [ ] Data logs to SD card in CSV format
- [ ] You can retrieve and open the data file on computer
- [ ] Data looks reasonable (temp 50-100°F, humidity 20-80%)
- [ ] System runs for at least 24 hours continuously
- [ ] You can create graphs from the logged data

---

## Extension Challenges

1. **Add a second DHT22 sensor** in a different location and compare readings
2. **Implement alert thresholds** (Serial message if temp > 80°F)
3. **Calculate and display daily averages** on LCD
4. **Add a button** to manually trigger a reading
5. **Wireless upload:** Add Wi-Fi module to send data to cloud
6. **Power optimization:** Make it run on batteries for outdoor use

---

## Deliverables

**Submit the following (if taking for credit):**

1. **Photo of completed hardware setup** (clear, well-lit)
2. **Screenshot of Serial Monitor** showing successful operation
3. **data.csv file** with at least 24 hours of logged data
4. **Graph** of temperature and humidity over time (Excel/Sheets)
5. **Brief report** (1-2 pages):
   - What you built
   - Any problems encountered and solutions
   - What patterns you observed in the data
   - Ideas for improvement or future enhancements

---

## Learning Reflection

After completing this project, reflect on:

- What was the most challenging part?
- What surprised you about the data you collected?
- How could this be applied to a real CEA operation?
- What additional sensors would be useful?
- What did you learn about troubleshooting hardware/software issues?

---

**Congratulations on building your monitoring station!**

This hands-on experience demonstrates the core concepts of automation: sensing, data logging, and analysis. You've built a foundation that can be expanded into a complete automation system.

---

*Arduino Monitoring Project - Course 203 Activity*
