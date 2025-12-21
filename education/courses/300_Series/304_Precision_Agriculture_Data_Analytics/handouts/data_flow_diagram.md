# Data Flow Diagram

## Course 304: Precision Agriculture & Data Analytics

**Purpose:** Visual reference for complete data pipeline from sensors to action

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                    PRECISION AGRICULTURE DATA FLOW                           ║
║                         Sensor to Action Pipeline                            ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  LAYER 1: PHYSICAL SENSORS                                                   ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Environmental               Water Quality           Production    │     ║
║  │  ┌─────────────┐             ┌──────────────┐       ┌──────────┐  │     ║
║  │  │ Temp: 23.5°C│             │ pH: 6.8      │       │ Camera   │  │     ║
║  │  │ RH: 65%     │             │ DO: 7.2 mg/L │       │ Flow     │  │     ║
║  │  │ CO₂: 800ppm │             │ EC: 1,450µS  │       │ Power    │  │     ║
║  │  │ PAR: 400µmol│             │ Temp: 24.1°C │       │          │  │     ║
║  │  └─────────────┘             └──────────────┘       └──────────┘  │     ║
║  │        ↓                            ↓                      ↓       │     ║
║  │   [Every 30s]                  [Every 30s]           [Every 5min]  │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                           I2C / Modbus / Analog                              ║
║                                   ↓                                          ║
║  LAYER 2: EDGE DEVICES (Data Collection)                                     ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Raspberry Pi 4 (x2)          Arduino Mega           ESP32 (x4)   │     ║
║  │  ┌─────────────────┐          ┌────────────┐         ┌─────────┐ │     ║
║  │  │ Aggregates:     │          │ Analog     │         │ WiFi    │ │     ║
║  │  │ • 8 sensors     │          │ sensors    │         │ Sensors │ │     ║
║  │  │ • Local buffer  │          │ (voltage)  │         │         │ │     ║
║  │  │ • Edge analytics│          └────────────┘         └─────────┘ │     ║
║  │  └─────────────────┘                                             │     ║
║  │        ↓ Publish                   ↓ Publish             ↓ Publish│     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                            MQTT Protocol                                     ║
║                    Topic: facility/zone/device/parameter                     ║
║                                   ↓                                          ║
║  LAYER 3: MESSAGE BROKER                                                     ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                   Mosquitto MQTT Broker                            │     ║
║  │                   (Local Server, Port 1883)                        │     ║
║  │                                                                    │     ║
║  │   ┌──────────────┐      ┌──────────────┐      ┌──────────────┐   │     ║
║  │   │  Publisher   │      │  Publisher   │      │ Subscriber   │   │     ║
║  │   │  (Sensors)   │  →   │   (Broker)   │  →   │ (Storage)    │   │     ║
║  │   └──────────────┘      └──────────────┘      └──────────────┘   │     ║
║  │                                                                    │     ║
║  │   QoS Level 1 (At least once delivery)                            │     ║
║  │   Retain last message for new subscribers                         │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                          Subscribe / Consume                                 ║
║                                   ↓                                          ║
║  LAYER 4: DATA INGESTION & PROCESSING                                        ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Telegraf (MQTT Consumer)                                         │     ║
║  │  ┌───────────────────────────────────────────────────────┐        │     ║
║  │  │ 1. Subscribe to all sensor topics                    │        │     ║
║  │  │ 2. Parse JSON messages                                │        │     ║
║  │  │ 3. Validate data (range checks, rate limits)         │        │     ║
║  │  │ 4. Enrich with metadata (location, calibration)      │        │     ║
║  │  │ 5. Route to appropriate storage                      │        │     ║
║  │  └───────────────────────────────────────────────────────┘        │     ║
║  │        ↓                          ↓                                │     ║
║  │   Time-series data          Operational data                      │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                ↓                                    ↓                        ║
║                                                                              ║
║  LAYER 5: DATA STORAGE                                                       ║
║  ┌─────────────────────────────────┐  ┌──────────────────────────────┐     ║
║  │      InfluxDB (Time-Series)     │  │   PostgreSQL (Relational)    │     ║
║  │  ┌───────────────────────────┐  │  │  ┌────────────────────────┐  │     ║
║  │  │ Measurements:             │  │  │  │ Tables:                │  │     ║
║  │  │ • environment             │  │  │  │ • facilities           │  │     ║
║  │  │ • water_quality           │  │  │  │ • crop_cycles          │  │     ║
║  │  │ • equipment_status        │  │  │  │ • harvests             │  │     ║
║  │  │                           │  │  │  │ • fish_batches         │  │     ║
║  │  │ Retention Policies:       │  │  │  │ • maintenance_logs     │  │     ║
║  │  │ • Raw: 7 days             │  │  │  │ • alerts               │  │     ║
║  │  │ • 1-min agg: 30 days      │  │  │  │ • users                │  │     ║
║  │  │ • 15-min agg: 1 year      │  │  │  │                        │  │     ║
║  │  │ • Hourly agg: Forever     │  │  │  │ Backup: Daily to NAS   │  │     ║
║  │  └───────────────────────────┘  │  │  └────────────────────────┘  │     ║
║  └─────────────────────────────────┘  └──────────────────────────────┘     ║
║                ↓                                    ↓                        ║
║           Query via InfluxQL                   Query via SQL                ║
║                ↓                                    ↓                        ║
║                                                                              ║
║  LAYER 6: ANALYTICS & PROCESSING                                             ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Real-Time Analytics          Batch Analytics       ML Models     │     ║
║  │  ┌────────────────┐           ┌──────────────┐      ┌─────────┐  │     ║
║  │  │ Alert rules    │           │ Daily reports│      │ Yield   │  │     ║
║  │  │ SPC charts     │           │ KPI calcs    │      │ Predict │  │     ║
║  │  │ Anomaly detect │           │ Trend analysis│     │         │  │     ║
║  │  │ Threshold check│           │ Correlations │      │ Disease │  │     ║
║  │  └────────────────┘           └──────────────┘      │ Detect  │  │     ║
║  │         ↓                            ↓               └─────────┘  │     ║
║  │    [Every 30s]                  [Daily 2am]          [On demand]  │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                    Generate insights, predictions, alerts                    ║
║                                   ↓                                          ║
║                                                                              ║
║  LAYER 7: VISUALIZATION & PRESENTATION                                       ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Grafana Dashboards      Mobile App          Reports (PDF)        │     ║
║  │  ┌──────────────────┐    ┌──────────┐        ┌────────────┐      │     ║
║  │  │ • Real-time gauges│    │ Alerts   │        │ Weekly     │      │     ║
║  │  │ • Trend charts    │    │ Status   │        │ Monthly    │      │     ║
║  │  │ • Heatmaps        │    │ Quick    │        │ Annual     │      │     ║
║  │  │ • Tables          │    │ actions  │        │            │      │     ║
║  │  └──────────────────┘    └──────────┘        └────────────┘      │     ║
║  │         ↓                      ↓                      ↓            │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║           Desktop              Mobile              Email                    ║
║              ↓                    ↓                   ↓                      ║
║                                                                              ║
║  LAYER 8: USERS & ACTIONS                                                    ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Operators              Managers              Automated Control   │     ║
║  │  ┌──────────┐           ┌──────────┐          ┌───────────────┐  │     ║
║  │  │ Monitor  │           │ Analyze  │          │ PID Controller│  │     ║
║  │  │ Respond  │           │ Optimize │          │ Rule engine   │  │     ║
║  │  │ Adjust   │           │ Plan     │          │ Auto-dose     │  │     ║
║  │  └──────────┘           └──────────┘          └───────────────┘  │     ║
║  │       ↓                       ↓                        ↓          │     ║
║  │   Manual                  Strategic              Automated        │     ║
║  │   actions                 decisions              actions          │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                            Control Commands                                  ║
║                                   ↓                                          ║
║                                                                              ║
║  LAYER 9: CONTROL & ACTUATION                                                ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  MQTT Publish (Control Topics)                                    │     ║
║  │  facility/zone/actuator/command                                   │     ║
║  │                                                                    │     ║
║  │  Climate Control      Fertigation          Lighting               │     ║
║  │  ┌────────────┐       ┌────────────┐        ┌─────────────┐      │     ║
║  │  │ Heater ON  │       │ Dose 50ml  │        │ Dim to 80%  │      │     ║
║  │  │ Fan 60%    │       │ pH down    │        │             │      │     ║
║  │  │ Vent OPEN  │       └────────────┘        └─────────────┘      │     ║
║  │  └────────────┘                                                   │     ║
║  │       ↓                    ↓                        ↓             │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↓                                          ║
║                          Physical Actuation                                  ║
║                                   ↓                                          ║
║                                                                              ║
║  LAYER 10: PHYSICAL SYSTEM (THE LOOP CLOSES)                                 ║
║  ┌────────────────────────────────────────────────────────────────────┐     ║
║  │                                                                    │     ║
║  │  Plants grow | Fish thrive | Environment changes                  │     ║
║  │                                                                    │     ║
║  │  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐   │     ║
║  │  │ 🌱 Plants│    │ 🐟 Fish  │    │ 💨 Air   │    │ 💧 Water │   │     ║
║  │  └──────────┘    └──────────┘    └──────────┘    └──────────┘   │     ║
║  │       ↑               ↑                ↑                ↑         │     ║
║  │       └───────────────┴────────────────┴────────────────┘         │     ║
║  │                  Changes detected by sensors                      │     ║
║  │                          (Loop repeats)                           │     ║
║  └────────────────────────────────────────────────────────────────────┘     ║
║                                   ↑                                          ║
║                                   │                                          ║
║                          Back to Layer 1 (Sensors)                           ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  DATA FLOW METRICS                                                           ║
║                                                                              ║
║  Latency:                                                                    ║
║  • Sensor → Database: <5 seconds                                             ║
║  • Database → Dashboard: <1 second                                           ║
║  • Alert → Notification: <30 seconds                                         ║
║  • Control command → Actuation: <2 seconds                                   ║
║                                                                              ║
║  Volume (Example 2,000 sqft facility):                                       ║
║  • 30 sensors × 2 readings/min × 1,440 min/day = 86,400 readings/day        ║
║  • ~50 bytes/reading = 4.3 MB/day raw data                                   ║
║  • With aggregation/retention: ~50 GB/year total storage                     ║
║                                                                              ║
║  Reliability:                                                                ║
║  • Target uptime: >99.5% (< 4 hours downtime/month)                          ║
║  • Data completeness: >95%                                                   ║
║  • Alert delivery: >99.9%                                                    ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## Key Takeaways from Data Flow

1. **Sensors are the foundation** - Quality data in = quality decisions out
2. **Edge processing reduces latency** - Critical for real-time control
3. **MQTT enables scalability** - Add sensors without redesigning
4. **Dual storage strategy** - Time-series for sensors, relational for operations
5. **Analytics at multiple layers** - Real-time + batch + on-demand
6. **Visualization for different users** - Operators, managers, owners
7. **Closed-loop control** - Actions affect environment, sensors detect, repeat
8. **Backup and redundancy** - Critical for production systems

---

*EcoFusion Academy - Course 304*
*Data Flow Diagram - Understand the complete pipeline!*
