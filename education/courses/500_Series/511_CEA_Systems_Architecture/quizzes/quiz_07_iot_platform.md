# Quiz 7: IoT Platform Architecture

## Course 511: CEA Systems Architecture

**Module**: 7 - IoT Platform Architecture
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What are the four primary layers in a typical IoT reference architecture?

A) Hardware, Software, Network, User
B) Device, Connectivity, Platform, Application
C) Input, Process, Output, Storage
D) Local, Regional, National, Global

**Correct Answer**: B

**Explanation**: Standard IoT architectures consist of Device layer (sensors/actuators), Connectivity layer (networks), Platform layer (data management/processing), and Application layer (user interfaces/analytics).

---

### Question 2
Which IoT protocol is most suitable for battery-powered sensors requiring low power consumption?

A) HTTP over WiFi
B) LoRaWAN or Zigbee
C) Streaming video protocols
D) FTP

**Correct Answer**: B

**Explanation**: LoRaWAN, Zigbee, and similar low-power protocols are designed for battery-operated devices, providing years of operation from small batteries through efficient communication.

---

### Question 3
What is the primary function of a Device Management platform in IoT architecture?

A) Manufacturing devices
B) Provisioning, monitoring, updating firmware, and managing device lifecycle
C) Selling devices to customers
D) Physical installation of devices

**Correct Answer**: B

**Explanation**: Device management platforms handle the complete device lifecycle: provisioning/registration, monitoring health, pushing firmware updates, and decommissioning—critical for large IoT deployments.

---

### Question 4
Which database type is optimized for storing and querying IoT sensor time-series data?

A) Document database (MongoDB)
B) Graph database (Neo4j)
C) Time-series database (InfluxDB, TimescaleDB)
D) Key-value store (Redis)

**Correct Answer**: C

**Explanation**: Time-series databases are specifically optimized for timestamp-based data, offering efficient storage compression, time-range queries, and aggregations essential for sensor data analytics.

---

### Question 5
What is "sensor fusion" in IoT systems?

A) Physically combining sensors into one unit
B) Integrating data from multiple sensors to derive more accurate or comprehensive insights
C) Replacing all sensors with one type
D) Deleting redundant sensor data

**Correct Answer**: B

**Explanation**: Sensor fusion combines data from multiple sensors (temperature, humidity, CO2, light) to create more accurate environmental models and better decision-making than individual sensors.

---

### Question 6
In IoT platform architecture, what is the purpose of a "Rules Engine"?

A) Managing government regulations
B) Evaluating conditions and triggering automated actions based on sensor data
C) Generating legal documents
D) Formatting data for reports

**Correct Answer**: B

**Explanation**: Rules engines evaluate incoming sensor data against defined conditions (e.g., "if temperature > 85°F, activate cooling") and trigger automated responses without human intervention.

---

### Question 7
What is "digital twin" technology in CEA IoT platforms?

A) Two identical physical facilities
B) Virtual replica of physical system using real-time data for simulation and optimization
C) Backup database server
D) Duplicate sensor installation

**Correct Answer**: B

**Explanation**: Digital twins create virtual models of physical CEA systems, continuously updated with real-time sensor data, enabling simulation, prediction, and optimization without disrupting actual operations.

---

### Question 8
Which IoT security practice is MOST critical for preventing unauthorized device access?

A) Using default passwords on all devices
B) Strong authentication, encrypted communications, and regular security patches
C) Physical locks only
D) No security needed for internal networks

**Correct Answer**: B

**Explanation**: IoT security requires multi-layered approach: strong unique credentials, encrypted communication (TLS/SSL), regular firmware updates, and network segmentation to prevent compromise.

---

### Question 9
What is "over-the-air" (OTA) firmware update capability?

A) Physically replacing devices
B) Remote firmware updates via network without physical access
C) Mailing USB drives with updates
D) Manual programming at device location

**Correct Answer**: B

**Explanation**: OTA updates enable remote firmware deployment across thousands of devices simultaneously, critical for security patches, feature additions, and bug fixes without site visits.

---

### Question 10
In large-scale IoT deployments, what is the primary challenge of "data gravity"?

A) Physical weight of storage hardware
B) Cost and difficulty of moving massive volumes of data from edge to cloud
C) Gravitational effects on sensors
D) Database backup procedures

**Correct Answer**: B

**Explanation**: Data gravity refers to the challenge that large datasets are expensive and slow to move, often making it more practical to bring computation to data rather than moving data to centralized processing.

---

## Answer Key

1. B - Device, Connectivity, Platform, Application
2. B - LoRaWAN or Zigbee
3. B - Provisioning, monitoring, updates, lifecycle management
4. C - Time-series database
5. B - Integrating multiple sensors for better insights
6. B - Evaluating conditions and triggering actions
7. B - Virtual replica using real-time data
8. B - Authentication, encryption, security patches
9. B - Remote network-based firmware updates
10. B - Cost and difficulty of moving massive data volumes

---

## Scoring Guide

- 10/10: Excellent! IoT platform architecture mastery
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 8: Security Architecture and Compliance
3. Complete the IoT platform design exercise
