# Module 3: Data Collection Systems

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design data collection architectures for agricultural systems
2. Implement communication protocols (MQTT, Modbus, HTTP)
3. Select and configure IoT platforms
4. Optimize data sampling strategies
5. Implement error handling and data quality controls
6. Ensure data security and reliability

---

## 1. Data Collection Architecture

### System Architecture Layers

```
┌────────────────────────────────────────────────────────────────┐
│              DATA COLLECTION ARCHITECTURE                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────────────────────────────────────────────┐     │
│  │  PRESENTATION LAYER                                  │     │
│  │  Web Apps | Mobile Apps | Dashboards | Reports       │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ HTTPS/WebSocket                       │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  APPLICATION LAYER                                   │     │
│  │  API Gateway | Authentication | Business Logic       │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ REST API / GraphQL                    │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  DATA PROCESSING LAYER                               │     │
│  │  Stream Processing | ETL | Aggregation | Alerts      │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ Internal messaging                    │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  DATA STORAGE LAYER                                  │     │
│  │  Time-Series DB | Relational DB | Object Storage     │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ Database protocols                    │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  INTEGRATION LAYER (Message Broker)                  │     │
│  │  MQTT Broker | Message Queue | Event Bus             │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ MQTT/AMQP/Kafka                       │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  COLLECTION LAYER (Edge Devices)                     │     │
│  │  Gateways | Controllers | Data Loggers               │     │
│  └────────────────────┬─────────────────────────────────┘     │
│                       │ Serial/I2C/Modbus/Analog              │
│  ┌────────────────────┴─────────────────────────────────┐     │
│  │  SENSOR LAYER                                        │     │
│  │  Environmental | Water Quality | Equipment           │     │
│  └──────────────────────────────────────────────────────┘     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### Three Common Patterns

**Pattern 1: Direct-to-Cloud (Simple)**
```
Sensors → WiFi-Enabled → Cloud Platform → Dashboard
            Logger         (Ubidots, etc.)

Pros:
• Simple setup
• Low infrastructure cost
• Quick deployment

Cons:
• Internet dependency
• Vendor lock-in
• Limited customization
• Recurring cloud costs
```

**Pattern 2: Edge Gateway (Recommended)**
```
Sensors → Local → Edge → Cloud/Local → Dashboard
           Logger  Gateway  Storage

Pros:
• Works offline
• Local processing
• Scalable
• Flexible storage

Cons:
• More complex
• Higher initial cost
• Requires maintenance
```

**Pattern 3: Hybrid (Enterprise)**
```
Sensors → Controllers → Local → Cloud → Multi-tenant
           (Multiple)   Server  Sync    Applications

Pros:
• Highly reliable
• Full control
• Advanced features
• Multi-site support

Cons:
• Expensive
• Complex setup
• IT expertise needed
```

---

## 2. Communication Protocols

### Protocol Comparison

| Protocol | Speed | Range | Complexity | Power | Best For |
|----------|-------|-------|------------|-------|----------|
| **I2C** | 100-400 kbps | <2m | Low | Low | On-board sensors |
| **SPI** | 10+ Mbps | <3m | Low | Low | High-speed local |
| **1-Wire** | 16 kbps | 100m | Low | Very low | Temp sensors |
| **RS-485/Modbus** | 10-115 kbps | 1200m | Medium | Low | Industrial sensors |
| **UART/Serial** | 9600-115200 bps | 15m | Low | Low | Sensor modules |
| **WiFi** | 54-600 Mbps | 50m | High | High | Wireless loggers |
| **LoRa** | 0.3-50 kbps | 2-15 km | Medium | Very low | Remote sensors |
| **Ethernet** | 10-1000 Mbps | 100m | Medium | Medium | Controllers |
| **MQTT** | N/A (over TCP/IP) | Internet | Medium | Medium | IoT messaging |

### MQTT Deep Dive

**MQTT (Message Queuing Telemetry Transport)** is the de facto standard for IoT data collection.

```
┌────────────────────────────────────────────────────────────┐
│                  MQTT ARCHITECTURE                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                    ┌─────────────┐                         │
│                    │    MQTT     │                         │
│                    │   BROKER    │                         │
│                    └──────┬──────┘                         │
│                           │                                │
│          ┌────────────────┼────────────────┐               │
│          │                │                │               │
│    ┌─────▼─────┐    ┌────▼─────┐    ┌────▼─────┐         │
│    │ Publisher │    │Publisher │    │Subscriber│         │
│    │ (Sensor)  │    │(Sensor)  │    │(Database)│         │
│    └───────────┘    └──────────┘    └──────────┘         │
│                                                            │
│  Topic Structure:                                          │
│  facility/zone/device/parameter                            │
│                                                            │
│  Example:                                                  │
│  greenhouse1/zone_a/temp_sensor_01/value                   │
│  greenhouse1/zone_a/temp_sensor_01/battery                 │
│  greenhouse1/zone_a/temp_sensor_01/status                  │
│                                                            │
│  QoS Levels:                                               │
│  0 = At most once (fire and forget)                        │
│  1 = At least once (acknowledged)                          │
│  2 = Exactly once (guaranteed)                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**MQTT Topic Design Best Practices:**

```
Hierarchical Structure:
{facility}/{system}/{location}/{device}/{parameter}/{metric}

Examples:
farm_north/aquaponics/fish_tank_1/do_sensor/value
farm_north/aquaponics/fish_tank_1/do_sensor/timestamp
farm_north/aquaponics/fish_tank_1/do_sensor/battery
farm_north/greenhouse/zone_a/temp_rh_01/temperature
farm_north/greenhouse/zone_a/temp_rh_01/humidity

Wildcards:
+ = single level wildcard
# = multi-level wildcard

Subscribe examples:
farm_north/aquaponics/+/do_sensor/value  (all tanks)
farm_north/#  (everything at farm_north)
```

**MQTT Message Format (JSON):**

```json
{
  "device_id": "temp_sensor_01",
  "timestamp": "2025-12-10T14:23:45Z",
  "location": "greenhouse_zone_a",
  "readings": {
    "temperature": 23.5,
    "humidity": 65.2
  },
  "metadata": {
    "battery": 3.7,
    "signal_strength": -45,
    "firmware": "1.2.3"
  }
}
```

### Modbus Protocol

**Modbus RTU/TCP** is common for industrial sensors and equipment.

```
┌────────────────────────────────────────────────────────────┐
│                  MODBUS ARCHITECTURE                       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Modbus RTU (Serial):                                      │
│                                                            │
│  Master ──RS-485──┬── Slave 1 (pH sensor, addr 1)         │
│  (Controller)     ├── Slave 2 (EC sensor, addr 2)         │
│                   ├── Slave 3 (DO sensor, addr 3)         │
│                   └── Slave 4 (Pump VFD, addr 4)          │
│                                                            │
│  Modbus TCP (Ethernet):                                    │
│                                                            │
│  Client ──Ethernet──┬── Server 1 (192.168.1.10)           │
│  (SCADA)            ├── Server 2 (192.168.1.11)           │
│                     └── Server 3 (192.168.1.12)           │
│                                                            │
│  Function Codes (common):                                  │
│  01 = Read Coils (digital outputs)                         │
│  02 = Read Discrete Inputs (digital inputs)                │
│  03 = Read Holding Registers (analog outputs)              │
│  04 = Read Input Registers (analog inputs)                 │
│  05 = Write Single Coil                                    │
│  06 = Write Single Register                                │
│  16 = Write Multiple Registers                             │
│                                                            │
│  Register Example:                                         │
│  Address  Parameter      Scale   Range                     │
│  30001    Temperature    0.1     -200 to 850 (×0.1°C)     │
│  30002    pH             0.01    0 to 1400 (×0.01)        │
│  30003    EC             1       0 to 65535 µS/cm         │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**Python Example: Reading Modbus Sensor**

```python
from pymodbus.client import ModbusTcpClient

# Connect to Modbus TCP device
client = ModbusTcpClient('192.168.1.10', port=502)
client.connect()

# Read holding registers (function code 03)
# Starting address 30001, read 3 registers
result = client.read_holding_registers(address=0, count=3, slave=1)

if not result.isError():
    temperature = result.registers[0] * 0.1  # Scale by 0.1
    ph = result.registers[1] * 0.01          # Scale by 0.01
    ec = result.registers[2]                 # No scaling

    print(f"Temperature: {temperature}°C")
    print(f"pH: {ph}")
    print(f"EC: {ec} µS/cm")

client.close()
```

---

## 3. IoT Platforms and Cloud Services

### Platform Comparison

| Platform | Hosting | Complexity | Cost | Best For |
|----------|---------|------------|------|----------|
| **Ubidots** | Cloud | Low | $$-$$$ | Quick prototypes |
| **ThingSpeak** | Cloud | Low | Free-$ | Education, simple projects |
| **AWS IoT Core** | Cloud | High | $$ | Enterprise, scalable |
| **Azure IoT Hub** | Cloud | High | $$ | Microsoft ecosystem |
| **Blynk** | Cloud | Low | $-$$ | Mobile-first apps |
| **Node-RED** | Self-hosted | Medium | Free | Custom workflows |
| **InfluxDB + Grafana** | Self-hosted | Medium | Free | Time-series + viz |
| **Home Assistant** | Self-hosted | Medium | Free | Unified control |

### Recommended Stack: InfluxDB + Grafana + MQTT

**Architecture:**

```
┌────────────────────────────────────────────────────────────┐
│           OPEN-SOURCE DATA STACK                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Sensors                                                   │
│     ↓                                                      │
│  [MQTT Publishers]                                         │
│     ↓                                                      │
│  Mosquitto MQTT Broker (port 1883)                         │
│     ↓                                                      │
│  Telegraf (MQTT Consumer + InfluxDB Writer)                │
│     ↓                                                      │
│  InfluxDB (Time-Series Database, port 8086)                │
│     ↓                                                      │
│  Grafana (Visualization, port 3000)                        │
│     ↓                                                      │
│  Users (Web Browser)                                       │
│                                                            │
│  Optional additions:                                       │
│  • Node-RED (automation, port 1880)                        │
│  • PostgreSQL (relational data)                            │
│  • Python scripts (analytics)                              │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**InfluxDB Data Model:**

```
Measurement: water_quality
Tags (indexed):
  - location=fish_tank_1
  - sensor_id=do_001
  - facility=farm_north

Fields (not indexed):
  - value=7.2
  - battery=3.8

Timestamp: 2025-12-10T14:23:45.123Z

Example query (InfluxQL):
SELECT mean("value")
FROM "water_quality"
WHERE "location" = 'fish_tank_1'
  AND time > now() - 24h
GROUP BY time(1h)
```

---

## 4. Data Sampling Strategies

### Sampling Rate Guidelines

```
┌────────────────────────────────────────────────────────────┐
│              SAMPLING RATE RECOMMENDATIONS                 │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  CRITICAL PARAMETERS (Life-Safety)                         │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Dissolved Oxygen (fish tanks)    Every 15-30 sec │     │
│  │ Water temperature (fish)          Every 1 min    │     │
│  │ pH (critical systems)             Every 1 min    │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  IMPORTANT PARAMETERS (Quality)                            │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Air temperature                   Every 5 min    │     │
│  │ Relative humidity                 Every 5 min    │     │
│  │ EC/TDS                            Every 5 min    │     │
│  │ CO₂                               Every 5 min    │     │
│  │ pH (non-critical)                 Every 5 min    │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  MONITORING PARAMETERS                                     │
│  ┌──────────────────────────────────────────────────┐     │
│  │ PAR/PPFD                          Every 15 min   │     │
│  │ Water flow rate                   Every 15 min   │     │
│  │ Pump status                       Every 15 min   │     │
│  │ Power consumption                 Every 15 min   │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  SLOW-CHANGING PARAMETERS                                  │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Ammonia                           Every 1 hour   │     │
│  │ Nitrite                           Every 1 hour   │     │
│  │ Nitrate                           Every 1 hour   │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  EVENT-DRIVEN (Change-Based)                               │
│  │ Equipment faults                  Immediate       │     │
│  │ Alarms                            Immediate       │     │
│  │ Door sensors                      On change       │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Nyquist Sampling Theorem

To accurately capture a signal, sample at **at least 2× the highest frequency** of interest.

**Example:**
- Temperature in greenhouse changes significantly over ~30 minutes
- Highest frequency: 1/(30 min) = 0.033 cycles/min
- Nyquist rate: 2 × 0.033 = 0.066 cycles/min
- Minimum sampling: 1 sample per 15 minutes
- Recommended: 5-10× Nyquist = Every 1.5-3 minutes

**Practical: Sample every 5 minutes for air temperature**

### Adaptive Sampling

Save bandwidth and storage by sampling more when data is changing:

```python
class AdaptiveSampler:
    def __init__(self, min_interval=60, max_interval=900, threshold=0.5):
        self.min_interval = min_interval  # 1 minute
        self.max_interval = max_interval  # 15 minutes
        self.threshold = threshold        # Change threshold
        self.last_value = None
        self.last_sample_time = 0

    def should_sample(self, current_value, current_time):
        # Always sample at max interval
        if current_time - self.last_sample_time >= self.max_interval:
            return True

        # Don't sample before min interval
        if current_time - self.last_sample_time < self.min_interval:
            return False

        # Sample if significant change
        if self.last_value is not None:
            change = abs(current_value - self.last_value)
            if change >= self.threshold:
                return True

        return False

    def record_sample(self, value, timestamp):
        self.last_value = value
        self.last_sample_time = timestamp

# Usage
sampler = AdaptiveSampler(min_interval=60, max_interval=900, threshold=0.5)

# In sensor loop
if sampler.should_sample(temperature, time.time()):
    publish_to_mqtt(temperature)
    sampler.record_sample(temperature, time.time())
```

---

## 5. Error Handling and Data Quality

### Data Quality Dimensions

```
┌────────────────────────────────────────────────────────────┐
│                DATA QUALITY FRAMEWORK                      │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. ACCURACY                                               │
│     How close to true value?                               │
│     ├─ Sensor calibration                                  │
│     ├─ Measurement error                                   │
│     └─ Systematic bias                                     │
│                                                            │
│  2. COMPLETENESS                                           │
│     Are all expected data points present?                  │
│     ├─ Missing readings                                    │
│     ├─ Communication failures                              │
│     └─ Sensor faults                                       │
│                                                            │
│  3. CONSISTENCY                                            │
│     Do values agree with each other?                       │
│     ├─ Cross-sensor validation                             │
│     ├─ Physical constraints                                │
│     └─ Temporal coherence                                  │
│                                                            │
│  4. TIMELINESS                                             │
│     Is data received when expected?                        │
│     ├─ Sampling interval adherence                         │
│     ├─ Latency                                             │
│     └─ Timestamp accuracy                                  │
│                                                            │
│  5. VALIDITY                                               │
│     Does data conform to expected format/range?            │
│     ├─ Range checking                                      │
│     ├─ Type validation                                     │
│     └─ Format compliance                                   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Validation Rules

**Range Validation:**

```python
VALIDATION_RANGES = {
    'temperature': {'min': -10, 'max': 50, 'unit': 'C'},
    'humidity': {'min': 0, 'max': 100, 'unit': '%'},
    'ph': {'min': 0, 'max': 14, 'unit': 'pH'},
    'ec': {'min': 0, 'max': 5000, 'unit': 'µS/cm'},
    'do': {'min': 0, 'max': 20, 'unit': 'mg/L'},
    'co2': {'min': 200, 'max': 2000, 'unit': 'ppm'},
}

def validate_reading(parameter, value):
    """Validate sensor reading against expected ranges."""
    if parameter not in VALIDATION_RANGES:
        return True, "Unknown parameter"

    ranges = VALIDATION_RANGES[parameter]

    if value < ranges['min'] or value > ranges['max']:
        return False, f"Out of range: {value} {ranges['unit']} " \
                      f"(expected {ranges['min']}-{ranges['max']})"

    return True, "Valid"

# Usage
is_valid, message = validate_reading('temperature', 25.3)
if not is_valid:
    log_error(message)
    # Don't save to database or trigger alert
```

**Rate of Change Validation:**

```python
def validate_rate_of_change(parameter, current, previous, time_delta):
    """Check if rate of change is physically possible."""

    MAX_RATES = {
        'temperature': 5.0,  # °C per minute (very fast)
        'humidity': 10.0,    # % per minute
        'ph': 0.5,           # pH units per minute
        'ec': 100,           # µS/cm per minute
        'do': 2.0,           # mg/L per minute
    }

    if parameter not in MAX_RATES:
        return True, "No rate limit defined"

    rate = abs(current - previous) / (time_delta / 60.0)  # per minute

    if rate > MAX_RATES[parameter]:
        return False, f"Rate of change too high: {rate:.2f}/min " \
                      f"(max {MAX_RATES[parameter]})"

    return True, "Valid"
```

**Cross-Validation:**

```python
def validate_vpd(temperature, humidity):
    """Calculate VPD and check for consistency."""
    # Saturation vapor pressure (kPa)
    svp = 0.6108 * math.exp((17.27 * temperature) / (temperature + 237.3))

    # Actual vapor pressure
    avp = svp * (humidity / 100.0)

    # VPD
    vpd = svp - avp

    # VPD should be between 0.4-1.6 kPa for most crops
    if vpd < 0.2 or vpd > 2.5:
        return False, f"VPD out of normal range: {vpd:.2f} kPa " \
                      f"(check temp/RH sensors)"

    return True, f"VPD: {vpd:.2f} kPa"
```

### Handling Missing Data

**Strategy 1: Forward Fill (Last Value)**
```python
# Use last known good value for short gaps (<5 minutes)
if current_reading is None and time_since_last < 300:
    current_reading = last_valid_reading
```

**Strategy 2: Interpolation**
```python
# Linear interpolation for gaps <30 minutes
if gap_duration < 1800:
    interpolated = previous_value + \
                   (next_value - previous_value) * \
                   (current_time - previous_time) / \
                   (next_time - previous_time)
```

**Strategy 3: Flag as Missing**
```python
# For gaps >30 minutes, mark as null and flag
if gap_duration > 1800:
    current_reading = None
    data_quality_flag = "MISSING_DATA"
```

---

## 6. Data Security and Reliability

### Security Best Practices

```
┌────────────────────────────────────────────────────────────┐
│              SECURITY LAYERS                               │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  1. NETWORK SECURITY                                       │
│     ├─ Separate IoT network (VLAN)                         │
│     ├─ Firewall rules (whitelist only)                     │
│     ├─ VPN for remote access                               │
│     └─ No direct internet exposure                         │
│                                                            │
│  2. AUTHENTICATION                                         │
│     ├─ Strong passwords (16+ chars)                        │
│     ├─ API keys for services                               │
│     ├─ Certificate-based auth (MQTT TLS)                   │
│     └─ Multi-factor authentication (MFA)                   │
│                                                            │
│  3. ENCRYPTION                                             │
│     ├─ TLS for all network traffic                         │
│     ├─ Encrypted storage (database)                        │
│     ├─ HTTPS for web interfaces                            │
│     └─ SSH for remote access                               │
│                                                            │
│  4. ACCESS CONTROL                                         │
│     ├─ Role-based permissions                              │
│     ├─ Principle of least privilege                        │
│     ├─ Audit logging                                       │
│     └─ Regular access reviews                              │
│                                                            │
│  5. DATA INTEGRITY                                         │
│     ├─ Checksums for data transmission                     │
│     ├─ Database constraints                                │
│     ├─ Backup verification                                 │
│     └─ Audit trails                                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Backup and Disaster Recovery

**3-2-1 Backup Rule:**
- **3** copies of data
- **2** different media types
- **1** off-site copy

**Implementation:**
```
Primary Storage:    InfluxDB on local server
Backup 1:          Daily snapshots to NAS
Backup 2:          Weekly snapshots to external drive
Backup 3:          Monthly cloud backup (encrypted)

Retention:
  - Hourly: 7 days
  - Daily: 30 days
  - Weekly: 6 months
  - Monthly: 3 years
```

**Automated Backup Script:**

```bash
#!/bin/bash
# Daily InfluxDB backup script

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/mnt/nas/influxdb_backups"
DATABASE="farm_data"

# Create backup
influxd backup -portable -database $DATABASE \
    $BACKUP_DIR/backup_$DATE

# Compress
tar -czf $BACKUP_DIR/backup_$DATE.tar.gz \
    $BACKUP_DIR/backup_$DATE
rm -rf $BACKUP_DIR/backup_$DATE

# Remove backups older than 30 days
find $BACKUP_DIR -name "backup_*.tar.gz" -mtime +30 -delete

# Verify backup
if [ -f "$BACKUP_DIR/backup_$DATE.tar.gz" ]; then
    echo "Backup successful: backup_$DATE.tar.gz"
else
    echo "ERROR: Backup failed!" | mail -s "Backup Alert" admin@farm.com
fi
```

---

## 7. Edge Computing and Local Processing

### Why Process at the Edge?

```
┌────────────────────────────────────────────────────────────┐
│          EDGE VS. CLOUD PROCESSING                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  EDGE PROCESSING                                           │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Pros:                                            │     │
│  │ • Low latency (milliseconds)                     │     │
│  │ • Works offline                                  │     │
│  │ • Reduced bandwidth                              │     │
│  │ • Local control loops                            │     │
│  │ • Data privacy                                   │     │
│  │                                                  │     │
│  │ Cons:                                            │     │
│  │ • Limited computing power                        │     │
│  │ • Harder to update                               │     │
│  │ • No shared learning                             │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  CLOUD PROCESSING                                          │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Pros:                                            │     │
│  │ • Unlimited computing                            │     │
│  │ • Easy updates                                   │     │
│  │ • Multi-site aggregation                         │     │
│  │ • Advanced ML models                             │     │
│  │                                                  │     │
│  │ Cons:                                            │     │
│  │ • Latency (seconds)                              │     │
│  │ • Internet required                              │     │
│  │ • Bandwidth costs                                │     │
│  │ • Privacy concerns                               │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  HYBRID APPROACH (Recommended):                            │
│  • Critical control loops: Edge                            │
│  • Data logging: Edge → Cloud sync                         │
│  • Analytics: Cloud                                        │
│  • ML inference: Edge (models trained in cloud)            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Edge Device Selection

| Device | CPU | RAM | Storage | GPIO | Price | Best For |
|--------|-----|-----|---------|------|-------|----------|
| **Raspberry Pi 4** | 1.5 GHz quad | 2-8 GB | SD card | 40 pins | $35-75 | General purpose |
| **Arduino Mega** | 16 MHz | 8 KB | 256 KB | 54 pins | $40 | Sensor interfacing |
| **ESP32** | 240 MHz dual | 520 KB | 4 MB | 34 pins | $5-10 | WiFi sensors |
| **BeagleBone** | 1 GHz | 512 MB | 4 GB | 65 pins | $60 | Industrial |
| **Intel NUC** | 2+ GHz multi | 8+ GB | SSD | USB | $300+ | Edge server |

---

## Key Takeaways

1. **Architecture matters** - Plan your data flow from sensors to storage to visualization from the start.

2. **MQTT is your friend** - Lightweight, reliable, and perfect for IoT data collection.

3. **Sample appropriately** - Too fast wastes resources, too slow misses events. Match sampling to parameter dynamics.

4. **Validate everything** - Implement range checks, rate limits, and cross-validation to ensure data quality.

5. **Security is not optional** - Protect your systems with network segmentation, encryption, and access controls.

6. **Process at the edge when it matters** - Critical control loops should work without internet connectivity.

7. **Backup religiously** - Data loss is catastrophic. Implement automated backups with off-site copies.

---

## Practical Exercise

### Design Your Data Collection System

1. **Draw system architecture** (sensors → storage → viz)
2. **Select communication protocols** for each layer
3. **Design MQTT topic structure** (at least 10 topics)
4. **Define sampling rates** for 8 parameters
5. **Create validation rules** (ranges, rates of change)
6. **Plan backup strategy** (frequency, retention, locations)
7. **Estimate data volume:**
   - Sensors × sampling rate × data size = bytes/hour
   - Project daily, monthly, annual storage needs

---

## Next Module Preview

**Module 4: Database Design** will cover:
- Time-series vs. relational databases
- Schema design for agricultural data
- Indexing and query optimization
- Data retention policies
- Database scaling strategies

---

*EcoFusion Academy - Course 304 - Module 3*
*Precision Agriculture & Data Analytics*
