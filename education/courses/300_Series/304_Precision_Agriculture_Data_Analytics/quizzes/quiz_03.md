# Quiz 3: Data Collection Systems

## Course 304: Precision Agriculture & Data Analytics

**Module:** 3 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
Which communication protocol is most commonly used for IoT sensor networks in agriculture?

A) HTTP
B) MQTT
C) FTP
D) SMTP

**Correct Answer:** B

**Explanation:** MQTT (Message Queuing Telemetry Transport) is designed for IoT applications with low bandwidth, unreliable networks, and battery-powered devices. It uses a publish-subscribe model that's efficient for sensor data collection, unlike HTTP's request-response model which creates unnecessary overhead.

---

### Question 2
What is the recommended data logging frequency for environmental sensors in controlled environment agriculture?

A) Every second
B) Every minute
C) Every 5-15 minutes
D) Every hour

**Correct Answer:** C

**Explanation:** 5-15 minute intervals balance data granularity with storage requirements. Environmental conditions change gradually, making sub-minute logging wasteful. However, hourly logging misses important fluctuations. 10-minute intervals (144 readings/day) is the industry standard, providing 52,560 data points per sensor annually.

---

### Question 3
In an edge gateway architecture, what is the primary advantage over direct-to-cloud data collection?

A) Lower initial cost
B) Simpler setup
C) Continues operating during internet outages
D) No maintenance required

**Correct Answer:** C

**Explanation:** Edge gateways store data locally and can operate autonomously when internet is unavailable. This is critical for agriculture where connectivity may be unreliable. The gateway buffers data and syncs when connection is restored, ensuring no data loss and maintaining local control systems.

---

### Question 4
Which database type is optimal for storing time-series sensor data?

A) Relational database (MySQL/PostgreSQL)
B) NoSQL document database (MongoDB)
C) Time-series database (InfluxDB/TimescaleDB)
D) Graph database (Neo4j)

**Correct Answer:** C

**Explanation:** Time-series databases are optimized for timestamp-indexed data with high write throughput and efficient time-based queries. They offer 10-100x better performance than relational databases for sensor data, with built-in downsampling and retention policies. InfluxDB and TimescaleDB are industry standards.

---

### Question 5
What is the recommended backup strategy for agricultural data systems?

A) No backup needed
B) Weekly manual backup
C) Daily automated backup with off-site storage
D) Monthly backup to external drive

**Correct Answer:** C

**Explanation:** Daily automated backups with off-site (cloud) storage follow the 3-2-1 rule: 3 copies, 2 different media types, 1 off-site. Agricultural data is valuable intellectual property representing months of optimization. Automated daily backups ensure recovery from hardware failure, ransomware, or disasters.

---

### Question 6
Which data quality issue is most critical to detect in real-time sensor systems?

A) Missing data
B) Sensor drift
C) Out-of-range values
D) All of the above

**Correct Answer:** D

**Explanation:** All three issues require real-time detection. Missing data indicates communication or power failures. Sensor drift causes gradual inaccuracy requiring recalibration. Out-of-range values signal sensor malfunction or genuine emergencies. Effective systems implement automated alerts for all three conditions.

---

### Question 7
What sampling rate is appropriate for water flow sensors in aquaponics recirculation systems?

A) Continuous (every second)
B) Every 5 minutes
C) Every hour
D) Once per day

**Correct Answer:** B

**Explanation:** 5-minute intervals detect pump failures and flow reductions before they harm fish or plants. Flow rates are stable under normal conditions, making continuous monitoring wasteful. However, hourly sampling could miss critical failures. 5-minute sampling detects issues within acceptable response time.

---

### Question 8
In MQTT architecture, what is the function of the broker?

A) It stores all historical data
B) It routes messages between publishers and subscribers
C) It performs data analytics
D) It controls sensors directly

**Correct Answer:** B

**Explanation:** The MQTT broker acts as a message router, receiving published data from sensors and distributing to all subscribed clients. It decouples data producers from consumers, enabling multiple systems (logging, alerts, dashboards) to receive the same sensor data without complex point-to-point connections.

---

### Question 9
What is the primary security concern with IoT agricultural systems?

A) Data theft
B) Unauthorized control access
C) Ransomware
D) All of the above

**Correct Answer:** D

**Explanation:** Agricultural systems face all cybersecurity threats: competitors may steal proprietary data, hackers could manipulate controls (causing crop loss), and ransomware can lock operators out. Security measures must include encryption, authentication, network segmentation, and offline backups.

---

### Question 10
How much storage is typically required for one year of data from a 50-sensor aquaponics system logging every 10 minutes?

A) 1 GB
B) 10 GB
C) 100 GB
D) 1 TB

**Correct Answer:** B

**Explanation:** Calculation: 50 sensors × 144 readings/day × 365 days × 50 bytes/reading ≈ 131 MB raw data. With metadata, indexes, and aggregated tables, total storage is approximately 500 MB to 1 GB per year. 10 GB provides comfortable headroom for 5-10 years, making it the practical choice.

---

**End of Quiz 3**
