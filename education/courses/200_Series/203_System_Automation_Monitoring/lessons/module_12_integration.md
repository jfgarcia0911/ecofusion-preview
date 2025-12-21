# Module 12: Integration & Networking
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Understand network fundamentals for CEA automation
2. Compare wired vs. wireless communication protocols
3. Implement cloud vs. local system architectures
4. Use APIs for system integration
5. Ensure system interoperability
6. Apply basic cybersecurity principles

---

## 12.1 Network Fundamentals

### Basic Networking Concepts

**IP Address:**
```
Example: 192.168.1.100

Components:
  • Network portion: 192.168.1
  • Host portion: 100

Types:
  • Static IP: Manually assigned, never changes
  • Dynamic IP (DHCP): Automatically assigned, may change

Best Practice for CEA:
  Assign STATIC IPs to:
    - Controllers
    - Sensors with network interfaces
    - Cameras
  Prevents devices becoming unreachable when IP changes
```

**Local Network (LAN):**
```
╔═══════════════════════════════════════════════════════════════╗
║              LOCAL NETWORK TOPOLOGY                           ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║                    [Internet]                                 ║
║                        │                                      ║
║                   [Router/Modem]                              ║
║                   192.168.1.1                                 ║
║                        │                                      ║
║        ┌───────────────┼───────────────┬──────────┐          ║
║        │               │               │          │           ║
║   [Controller]    [Raspberry Pi]   [Computer]  [Phone]       ║
║   192.168.1.10    192.168.1.20    192.168.1.30 (WiFi)        ║
║        │                                                      ║
║   [Sensors via]                                               ║
║   [RS485/Modbus]                                              ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Port Numbers:**
```
Services run on specific ports:

Common Ports:
  HTTP (Web): 80
  HTTPS (Secure Web): 443
  SSH (Remote access): 22
  Modbus TCP: 502
  MQTT: 1883

Example: Accessing Raspberry Pi web dashboard
  URL: http://192.168.1.20:5000
  IP: 192.168.1.20
  Port: 5000 (Flask default)
```

---

## 12.2 Wired vs. Wireless Protocols

### Wired Communication

#### Ethernet (TCP/IP)

```
Standard: CAT5e or CAT6 cable
Speed: 100 Mbps to 1 Gbps
Distance: Up to 100 meters per cable run

Advantages:
  • Very reliable
  • Fast
  • Not affected by interference
  • Secure (physical access required)

Disadvantages:
  • Requires cable installation
  • Less flexible
  • Labor-intensive

Best for:
  • Main controllers
  • Permanent installations
  • High-data applications (cameras)
```

#### RS485 (Serial)

```
Industrial serial communication protocol

Characteristics:
  • Multi-drop: Up to 32 devices on one bus
  • Distance: Up to 1200 meters
  • Speed: 9600-115200 baud (slow but sufficient for sensors)

Wiring:
  • 2-wire (half-duplex) or 4-wire (full-duplex)
  • Twisted pair cable
  • Termination resistors at ends

Common Use: Modbus RTU (sensor protocol over RS485)

Example:
  [Controller] ───RS485 Bus───┬── [pH Sensor]
                              ├── [EC Sensor]
                              ├── [Temp Sensor]
                              └── [Flow Meter]
```

**Modbus RTU:**
```
Request/Response protocol:

Controller asks: "Sensor ID 1, what's your temperature reading?"
Sensor responds: "25.3°C"

Each sensor has unique ID (1-247)
Controller polls sensors sequentially
```

#### 4-20mA Current Loop

```
Analog standard for industrial sensors

How it works:
  • Sensor outputs 4-20mA current
  • 4mA = 0% (minimum reading)
  • 20mA = 100% (maximum reading)

Example: Temperature sensor 0-100°C
  4mA = 0°C
  12mA = 50°C
  20mA = 100°C

Advantages:
  • Noise-immune (current not affected by resistance)
  • Long distances (300+ meters)
  • Simple and reliable

Disadvantages:
  • Only one value per wire pair
  • Requires power
```

### Wireless Communication

#### Wi-Fi (802.11)

```
Standard wireless networking

Range: 30-100 meters indoors
Speed: 50-1000 Mbps
Frequency: 2.4 GHz or 5 GHz

Advantages:
  • Easy to add devices
  • No cable installation
  • Good for dashboards, cameras

Disadvantages:
  • Metal structures interfere (greenhouses!)
  • Can be unreliable
  • Security concerns

Tips for Greenhouses:
  • Use multiple access points for coverage
  • 2.4 GHz penetrates better than 5 GHz
  • External antennas help
```

#### Bluetooth/BLE

```
Short-range wireless

Range: 10-30 meters
Power: Very low (BLE)

Best for:
  • Sensor beacons (temperature, humidity)
  • Nearby device configuration
  • Mobile app connection

NOT ideal for:
  • Long-distance sensor networks
  • Mission-critical control
```

#### LoRa (Long Range)

```
Low-power, long-range wireless

Range: 2-10 km (open area), 1-2 km (obstacles)
Speed: Very slow (< 50 kbps)
Power: Ultra-low (years on batteries)

Use cases:
  • Remote field sensors (soil moisture in distant fields)
  • Weather stations
  • Large farm sensor networks

Example Setup:
  [Field Sensors] ~~~LoRa~~~ [Gateway] ─Ethernet─ [Controller]

Frequency: 915 MHz (US), license-free ISM band
```

#### Zigbee

```
Mesh network protocol

Range: 10-100 meters per hop
Mesh: Devices relay messages (extended range)
Power: Low

Common in:
  • Home automation
  • Wireless sensor networks

Advantages:
  • Self-healing (if one device fails, routes around)
  • Low power
  • Many devices (100+)

Disadvantages:
  • Requires Zigbee coordinator/gateway
  • More complex than Wi-Fi
```

### Protocol Comparison Table

| Protocol | Range | Speed | Power | Cost | Best Use Case |
|----------|-------|-------|-------|------|---------------|
| **Ethernet** | 100m | Very High | N/A | $$ | Controllers, cameras |
| **RS485** | 1200m | Low | N/A | $ | Industrial sensors |
| **Wi-Fi** | 100m | High | Medium | $$ | Dashboards, mobile |
| **Bluetooth** | 30m | Medium | Very Low | $ | Personal devices |
| **LoRa** | 2-10km | Very Low | Ultra Low | $$ | Remote sensors |
| **Zigbee** | 100m+ (mesh) | Low | Low | $$ | Sensor networks |

---

## 12.3 Cloud vs. Local Systems

### Local System Architecture

```
╔═══════════════════════════════════════════════════════════════╗
║                 LOCAL-ONLY SYSTEM                             ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Sensors] → [Controller/RPi] → [Local Database]            ║
║                      ↓                                        ║
║               [Web Dashboard]                                 ║
║              (only on local network)                          ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Advantages:**
- No internet dependency
- Data privacy (not in cloud)
- No subscription fees
- Low latency (fast response)

**Disadvantages:**
- Can't access remotely (unless VPN)
- No automatic backup
- Single point of failure

**Best For:**
- High-security operations
- Unreliable internet locations
- Minimal budget

### Cloud-Connected System

```
╔═══════════════════════════════════════════════════════════════╗
║              CLOUD-CONNECTED SYSTEM                           ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Sensors] → [Controller/RPi] → [Internet] → [Cloud]        ║
║                      ↓                            ↓           ║
║              [Local Dashboard]            [Cloud Dashboard]   ║
║                                                  ↓            ║
║                                          [Mobile App]         ║
║                                          [Anywhere Access]    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Advantages:**
- Remote access from anywhere
- Automatic cloud backup
- Easier multi-site management
- Professional dashboards
- Mobile app support

**Disadvantages:**
- Requires reliable internet
- Subscription costs
- Data privacy concerns
- Latency (control decisions delayed)

**Best For:**
- Multi-site operations
- Remote monitoring needs
- Tech-savvy operations

### Hybrid Approach (Recommended)

```
╔═══════════════════════════════════════════════════════════════╗
║                   HYBRID SYSTEM                               ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Sensors] → [Controller] → [Local Database & Control]      ║
║                      ↓              ↓                         ║
║              [Local Dashboard]  [Internet] (backup/monitoring)║
║                                      ↓                        ║
║                                  [Cloud]                      ║
║                                      ↓                        ║
║                              [Mobile Monitoring]              ║
║                              [Alerts Only]                    ║
║                                                               ║
║   CRITICAL CONTROL: Local (reliable, fast)                    ║
║   MONITORING & ALERTS: Cloud (convenient)                     ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Best of Both Worlds:**
- Control runs locally (reliable, fast)
- Data syncs to cloud (backup, remote viewing)
- Alerts sent via cloud (SMS, email)
- If internet fails, local control continues

---

## 12.4 API Integration

### What is an API?

**Application Programming Interface:** Allows different software systems to communicate.

**REST API Example:**

```
Your dashboard wants current temperature from controller:

Request (HTTP GET):
  GET http://192.168.1.10/api/temperature

Response (JSON):
  {
    "sensor": "greenhouse_temp_1",
    "value": 72.5,
    "unit": "F",
    "timestamp": "2025-12-10T14:30:00Z"
  }

Your dashboard parses JSON and displays: "72.5°F"
```

### Creating a Simple API (Flask Example)

```python
from flask import Flask, jsonify
import Adafruit_DHT

app = Flask(__name__)

sensor = Adafruit_DHT.DHT22
pin = 4

@app.route('/api/temperature')
def get_temperature():
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    temp_f = temperature * 9/5 + 32 if temperature else None

    return jsonify({
        "sensor": "greenhouse_temp",
        "value": temp_f,
        "unit": "F",
        "timestamp": datetime.now().isoformat()
    })

@app.route('/api/all')
def get_all_sensors():
    humidity, temperature = Adafruit_DHT.read_retry(sensor, pin)
    temp_f = temperature * 9/5 + 32 if temperature else None

    return jsonify({
        "temperature": {"value": temp_f, "unit": "F"},
        "humidity": {"value": humidity, "unit": "%"}
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
```

**Accessing from Other Systems:**

```python
# From another Python script
import requests

response = requests.get('http://192.168.1.20:5000/api/temperature')
data = response.json()
print(f"Temperature: {data['value']}°F")
```

```javascript
// From a web page (JavaScript)
fetch('http://192.168.1.20:5000/api/temperature')
  .then(response => response.json())
  .then(data => {
    document.getElementById('temp').innerHTML = data.value + '°F';
  });
```

### MQTT (Message Queuing Telemetry Transport)

**Lightweight publish/subscribe protocol:**

```
╔═══════════════════════════════════════════════════════════════╗
║                  MQTT PUB/SUB PATTERN                         ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   [Temperature Sensor] ──publish──→ [MQTT Broker]             ║
║   Topic: "greenhouse/zone1/temperature"                       ║
║   Message: "72.5"                                             ║
║                                                               ║
║                                  ↓                            ║
║                            [Subscribers]                      ║
║                                  ↓                            ║
║               ┌─────────────┬────────────┐                    ║
║               ↓             ↓            ↓                    ║
║          [Dashboard]   [Data Logger]  [Alert System]          ║
║                                                               ║
║   All subscribers receive the message automatically           ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

**Python MQTT Example:**

```python
import paho.mqtt.client as mqtt

# Publisher (Raspberry Pi with sensor)
client = mqtt.Client()
client.connect("mqtt.broker.com", 1883)

temperature = 72.5
client.publish("greenhouse/zone1/temperature", temperature)

# Subscriber (Dashboard or logger)
def on_message(client, userdata, message):
    print(f"Received: {message.payload.decode()} on {message.topic}")

client = mqtt.Client()
client.connect("mqtt.broker.com", 1883)
client.subscribe("greenhouse/zone1/temperature")
client.on_message = on_message
client.loop_forever()
```

**Advantages of MQTT:**
- Lightweight (low bandwidth)
- Publish once, many subscribers
- Persistent messages (if subscriber offline)
- QoS (Quality of Service) levels

---

## 12.5 System Interoperability

### Standardized Data Formats

**JSON (JavaScript Object Notation):**
```json
{
  "greenhouse": "Zone 1",
  "sensors": [
    {"type": "temperature", "value": 72.5, "unit": "F"},
    {"type": "humidity", "value": 65.0, "unit": "%"},
    {"type": "pH", "value": 6.5, "unit": "pH"}
  ],
  "timestamp": "2025-12-10T14:30:00Z"
}
```

**CSV (Comma-Separated Values):**
```
timestamp,temperature,humidity,pH
2025-12-10 14:30:00,72.5,65.0,6.5
2025-12-10 14:45:00,72.8,64.5,6.5
```

### Integration Scenarios

**Example 1: Arduino + Raspberry Pi**

```
Architecture:
  Arduino reads sensors (real-time, reliable)
  Sends data to Raspberry Pi via USB serial
  Raspberry Pi logs to database, serves web dashboard

Arduino Code:
  // Send JSON over serial
  Serial.print("{\"temp\":");
  Serial.print(temperature);
  Serial.print(",\"humidity\":");
  Serial.print(humidity);
  Serial.println("}");

Raspberry Pi Code:
  import serial
  import json

  ser = serial.Serial('/dev/ttyUSB0', 9600)

  while True:
      line = ser.readline().decode('utf-8')
      data = json.loads(line)
      log_to_database(data['temp'], data['humidity'])
```

**Example 2: Commercial Controller + Custom Dashboard**

```
Scenario: Priva controller (commercial) + custom Grafana dashboard

Priva provides Modbus TCP interface
Custom script polls Modbus, inserts into InfluxDB
Grafana reads from InfluxDB

Integration Code:
  from pymodbus.client.sync import ModbusTcpClient
  from influxdb_client import InfluxDBClient, Point

  # Read from Priva controller
  modbus_client = ModbusTcpClient('192.168.1.50')
  result = modbus_client.read_holding_registers(0, 10)

  temperature = result.registers[0] / 10.0  # Scale factor

  # Write to InfluxDB
  influx_client = InfluxDBClient(url="http://localhost:8086", token="...")
  point = Point("greenhouse").field("temperature", temperature)
  influx_client.write_api().write(bucket="main", record=point)
```

---

## 12.6 Cybersecurity Basics

### Common Vulnerabilities in CEA Automation

**1. Default Passwords**
```
NEVER keep default passwords!

Common defaults:
  Admin / Admin
  admin / password
  root / root

CHANGE IMMEDIATELY upon installation
Use strong passwords: 12+ characters, mix of letters/numbers/symbols
```

**2. Unencrypted Communication**
```
HTTP → HTTPS (encrypted)
Telnet → SSH (encrypted)
Plain MQTT → MQTT over TLS (encrypted)

Use HTTPS for web dashboards:
  • Get SSL certificate (Let's Encrypt - free)
  • Prevents password sniffing on network
```

**3. Exposed Systems**
```
Don't expose controllers directly to internet!

BAD:
  Public IP → Controller (anyone can access)

GOOD:
  Public IP → VPN → Local Network → Controller
  Only authorized users with VPN credentials can access
```

### Security Best Practices

**1. Network Segmentation**
```
Separate networks for different purposes:

VLAN 1: Office/Guest WiFi
VLAN 2: Automation/Sensors (isolated)
VLAN 3: Cameras (isolated)

Benefits:
  • If office WiFi compromised, automation unaffected
  • Limits blast radius of security breach
```

**2. Firewall Rules**
```
Only allow necessary traffic:

Example rules:
  • Allow local network → Controller on port 80 (dashboard)
  • Allow Controller → Internet for cloud sync
  • Block all other inbound connections

Most routers support basic firewall configuration
```

**3. Regular Updates**
```
Keep software updated:

Controllers: Firmware updates (check quarterly)
Raspberry Pi: sudo apt update && sudo apt upgrade
Arduino: Update libraries

Why: Security patches fix vulnerabilities
```

**4. Physical Security**
```
Don't forget physical access:

• Lock server/equipment room
• Secure cabling (prevents tampering)
• Cameras on sensitive areas
• Limit who has access
```

**5. Backup and Recovery**
```
Regular backups protect against:
  • Hardware failure
  • Cyber attack (ransomware)
  • Accidental deletion

Backup strategy:
  • Database: Daily to external drive
  • Configuration files: Weekly
  • Cloud backup: Optional for redundancy
  • Test restore process quarterly
```

---

## Summary

Integration and networking enable powerful, flexible CEA automation:

**Key Takeaways:**

1. **Network Basics:** Understand IP addresses, ports, LAN structure
2. **Wired Reliable:** Ethernet and RS485 for critical control
3. **Wireless Flexible:** Wi-Fi and LoRa for monitoring and remote sensors
4. **Hybrid Architecture:** Local control + cloud monitoring = best reliability
5. **APIs Enable Integration:** REST APIs and MQTT connect disparate systems
6. **Cybersecurity Matters:** Change defaults, encrypt, segment, update
7. **Standardize Data:** JSON and CSV facilitate interoperability

**Implementation Checklist:**
- [ ] Assign static IPs to critical devices
- [ ] Document network topology
- [ ] Change all default passwords
- [ ] Enable HTTPS on dashboards
- [ ] Set up VPN for remote access
- [ ] Implement firewall rules
- [ ] Regular backup schedule
- [ ] Test integrations thoroughly

---

## Review Questions

1. What is the difference between a static and dynamic IP address?
2. What are the advantages of RS485 for sensor communication?
3. When should you choose Wi-Fi vs. LoRa for wireless sensors?
4. What is a hybrid local+cloud architecture and why is it recommended?
5. What is an API and how does it enable integration?
6. What is MQTT and what is it good for?
7. What are three critical cybersecurity practices for CEA automation?
8. Why is network segmentation important?

---

## Practical Exercise

**Exercise: Design an Integrated Automation Network**

Design a complete networking and integration plan for a 5,000 sq ft greenhouse with office:

**Requirements:**
- 3 zones with independent climate control
- 15 wired sensors (temp, humidity, pH, EC)
- 5 wireless soil moisture sensors (distant beds)
- 2 IP cameras
- Raspberry Pi central controller
- Office computer for dashboard
- Remote mobile access

**Your tasks:**

1. **Network topology diagram:**
   - Show all devices, IP addresses
   - Wired vs. wireless connections
   - Network segments (if using VLANs)

2. **Protocol selection:**
   - How will sensors communicate? (RS485, Wi-Fi, LoRa, etc.)
   - Justify choices

3. **Integration architecture:**
   - Local vs. cloud components
   - API design (what endpoints?)
   - Data flow diagram

4. **Security plan:**
   - Password policy
   - Encryption methods
   - Firewall rules
   - Remote access strategy (VPN?)
   - Backup plan

5. **Bill of materials:**
   - Network equipment (router, switches, access points)
   - Cables, antennas
   - Estimated costs

**Deliverable:** Complete network design with diagrams, protocol specifications, security plan, and BOM.

---

*End of Module 12*
