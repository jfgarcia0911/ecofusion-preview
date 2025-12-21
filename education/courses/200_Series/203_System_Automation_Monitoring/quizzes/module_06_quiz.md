# Module 6 Quiz: Arduino & Raspberry Pi
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is the primary difference between Arduino and Raspberry Pi platforms?**
   - a) Arduino is more expensive than Raspberry Pi
   - b) Arduino is a microcontroller for hardware control; Raspberry Pi is a full computer with an operating system
   - c) Arduino uses Python; Raspberry Pi uses C++
   - d) Arduino has more processing power than Raspberry Pi

**2. What is the GPIO voltage level for Raspberry Pi, and why does this matter?**
   - a) 5V; it's compatible with all Arduino sensors
   - b) 12V; it can directly control relays
   - c) 3.3V; applying 5V can damage the Pi's GPIO pins
   - d) 24V; it's designed for industrial use

**3. Why use a relay module instead of controlling high-voltage devices directly from Arduino/Raspberry Pi?**
   - a) Relays are cheaper than transistors
   - b) Relays provide electrical isolation and can safely switch high voltages (120/240VAC) that would destroy the microcontroller
   - c) Relays make the project look more professional
   - d) Direct control is actually safer; relays are only for convenience

**4. What library is commonly used to read DHT22 temperature/humidity sensors on Raspberry Pi?**
   - a) OneWire
   - b) DallasTemperature
   - c) Adafruit_DHT
   - d) Flask

**5. In Arduino code, what does the `analogRead()` function return?**
   - a) A voltage value from 0-5V
   - b) A temperature in degrees Celsius
   - c) An integer value from 0-1023 representing the analog voltage
   - d) A boolean true/false value

**6. What is the main advantage of a hybrid Arduino + Raspberry Pi system?**
   - a) It costs less than using either platform alone
   - b) Arduino handles real-time control while Raspberry Pi handles data logging, networking, and dashboards
   - c) It's easier to program than using one platform
   - d) It uses less power than either platform individually

**7. What is the purpose of logging data to an SD card in an automation project?**
   - a) SD cards make the project look more sophisticated
   - b) To create permanent records for analysis, troubleshooting, and compliance
   - c) SD cards are required for Arduino to function
   - d) To increase the processing speed of the controller

**8. When should you use Arduino instead of Raspberry Pi for a CEA project?**
   - a) When you need a web dashboard
   - b) When you need real-time hardware control, low power consumption, or time-critical tasks
   - c) When you need to process large amounts of data
   - d) When you need to run multiple programs simultaneously

**9. What is Flask used for in Raspberry Pi projects?**
   - a) It's a sensor library for reading temperature
   - b) It's a web framework for creating dashboards and web interfaces
   - c) It's a database for storing sensor data
   - d) It's a programming language alternative to Python

**10. What is the most critical safety practice when working with relays and high voltage?**
   - a) Use the cheapest relays to save money
   - b) Test circuits while powered on to save time
   - c) Never mix low voltage (5V, 12V DC) and high voltage (120V AC) on the same breadboard; keep them properly isolated
   - d) Always use wireless connections to avoid cables

---

## Answer Key

1. **b) Arduino is a microcontroller for hardware control; Raspberry Pi is a full computer with an operating system** - Arduino is a simple microcontroller that excels at real-time hardware interfacing, running one program repeatedly. Raspberry Pi is a full Linux computer capable of multitasking, networking, and complex processing but with OS overhead that makes real-time control less reliable.

2. **c) 3.3V; applying 5V can damage the Pi's GPIO pins** - Raspberry Pi GPIO operates at 3.3V logic levels. Connecting 5V signals (like many Arduino sensors) directly to Pi GPIO pins can permanently damage them. Level shifters or 3.3V-compatible sensors must be used. Arduino operates at 5V, making it more compatible with common sensors.

3. **b) Relays provide electrical isolation and can safely switch high voltages (120/240VAC) that would destroy the microcontroller** - Microcontroller outputs are low voltage (3.3-5V) and low current (20-40mA max). Relays create electrical isolation between the control circuit and load circuit, allowing safe switching of high-voltage, high-current devices like heaters, pumps, and lights. Optically-isolated relay modules add extra safety.

4. **c) Adafruit_DHT** - The Adafruit_DHT library provides easy functions to read DHT11, DHT22, and AM2302 temperature/humidity sensors on Raspberry Pi. It handles the timing-critical communication protocol. OneWire and DallasTemperature are used for DS18B20 temperature sensors. Flask is a web framework, not a sensor library.

5. **c) An integer value from 0-1023 representing the analog voltage** - Arduino's analogRead() returns a 10-bit value (0-1023) from the Analog-to-Digital Converter (ADC). 0 represents 0V, 1023 represents 5V (or 3.3V on some boards). You must convert this to engineering units: voltage = analogRead() × (5.0/1023.0), then apply sensor-specific calibration.

6. **b) Arduino handles real-time control while Raspberry Pi handles data logging, networking, and dashboards** - This hybrid approach leverages each platform's strengths: Arduino provides reliable, real-time sensor reading and relay control without OS delays. Raspberry Pi handles data storage, web dashboards, alerts, and analytics. If the Pi crashes, Arduino keeps critical systems running safely.

7. **b) To create permanent records for analysis, troubleshooting, and compliance** - SD card logging preserves data even if power fails, creates records for optimizing growing conditions, helps troubleshoot problems by reviewing historical data, and provides documentation for regulatory compliance or research. Serial monitor data is lost when the system restarts.

8. **b) When you need real-time hardware control, low power consumption, or time-critical tasks** - Arduino excels at real-time control without OS overhead, making it ideal for critical timing (like reading sensors or controlling pumps), battery-powered applications (0.5W vs Pi's 5-10W), and scenarios where reliability trumps features. Pi is better when you need networking, complex processing, or multitasking.

9. **b) It's a web framework for creating dashboards and web interfaces** - Flask is a Python web framework that makes it easy to create web servers and dashboards on Raspberry Pi. With minimal code, you can display sensor data, create control interfaces, and provide mobile/desktop access to your automation system over a network or internet.

10. **c) Never mix low voltage (5V, 12V DC) and high voltage (120V AC) on the same breadboard; keep them properly isolated** - This is the most critical safety rule. High voltage (120/240VAC) should never come near breadboards or low-voltage circuits. Use proper relay modules with screw terminals or terminal blocks for AC wiring, housed in electrical enclosures. Always use fuses, test circuits before applying power, and follow electrical codes.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 6 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 6 Quiz*
