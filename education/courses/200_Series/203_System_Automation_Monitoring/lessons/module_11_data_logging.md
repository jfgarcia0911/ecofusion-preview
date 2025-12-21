# Module 11: Data Logging & Analysis
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Implement database systems for CEA data storage
2. Structure time-series data efficiently
3. Create visualization dashboards
4. Perform trend analysis and identify correlations
5. Generate automated reports
6. Use data for continuous improvement

---

## 11.1 Database Fundamentals

### Why Log Data?

**Benefits:**
1. **Historical Analysis:** Understand what happened and why
2. **Troubleshooting:** Identify when problems started
3. **Optimization:** Data-driven adjustments improve yields
4. **Compliance:** Documentation for food safety, organic certification
5. **ROI Justification:** Prove automation value

### Database Types for CEA

#### CSV Files (Simple, Good for Starting)

**Structure:**
```
Timestamp,Temperature_F,Humidity_%,pH,EC_mS
2025-12-10 08:00:00,72.3,65.2,6.5,1.8
2025-12-10 08:15:00,72.5,64.8,6.5,1.8
2025-12-10 08:30:00,72.8,64.5,6.4,1.8
```

**Pros:**
- Simple text files
- Easy to create (any language)
- Open in Excel/Google Sheets
- No special software needed

**Cons:**
- Slow with large datasets (millions of rows)
- No querying capabilities
- Risk of corruption
- Limited to one file writer

**Best for:** Small systems, hobbyists, < 1 year of data

#### SQLite (Intermediate)

**What it is:**
- Serverless SQL database
- Single file storage
- Built into Python, many languages

**Example:**
```python
import sqlite3
from datetime import datetime

# Create/connect to database
conn = sqlite3.connect('greenhouse_data.db')
cursor = conn.cursor()

# Create table
cursor.execute('''
CREATE TABLE IF NOT EXISTS sensor_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    timestamp DATETIME,
    temperature REAL,
    humidity REAL,
    pH REAL,
    EC REAL
)
''')

# Insert data
cursor.execute('''
INSERT INTO sensor_data (timestamp, temperature, humidity, pH, EC)
VALUES (?, ?, ?, ?, ?)
''', (datetime.now(), 72.5, 65.0, 6.5, 1.8))

conn.commit()
conn.close()
```

**Querying:**
```sql
-- Get average temperature for last 24 hours
SELECT AVG(temperature) FROM sensor_data
WHERE timestamp > datetime('now', '-1 day');

-- Find max temperature by hour
SELECT strftime('%H', timestamp) as hour, MAX(temperature)
FROM sensor_data
GROUP BY hour;
```

**Pros:**
- Fast queries
- Structured data
- Handles millions of rows
- No server setup needed

**Cons:**
- Single writer (concurrency limits)
- File size can grow large

**Best for:** Raspberry Pi projects, small-medium commercial

#### InfluxDB (Advanced Time-Series)

**What it is:**
- Purpose-built for time-series data
- Extremely fast for sensor data
- Built-in retention policies, downsampling

**Structure:**
```
Measurement: greenhouse_sensors
Tags: location=zone1, sensor_type=temperature
Fields: value=72.5
Timestamp: 2025-12-10T08:00:00Z
```

**Example:**
```python
from influxdb_client import InfluxDBClient, Point
from datetime import datetime

client = InfluxDBClient(url="http://localhost:8086", token="my-token", org="my-org")
write_api = client.write_api()

# Write data point
point = Point("greenhouse_sensors") \
    .tag("location", "zone1") \
    .field("temperature", 72.5) \
    .field("humidity", 65.0) \
    .time(datetime.utcnow())

write_api.write(bucket="greenhouse", record=point)
```

**Query (InfluxQL):**
```sql
SELECT MEAN("temperature")
FROM "greenhouse_sensors"
WHERE time > now() - 24h
GROUP BY time(1h)
```

**Pros:**
- Extremely fast for time-series
- Automatic data retention (delete old data)
- Downsampling (summarize 1-min data to hourly averages)
- Built-in graphing with Chronograf

**Cons:**
- More complex setup
- Requires server (can run on RPi)
- Learning curve

**Best for:** Large commercial, research, big data

### Choosing the Right Database

| Scale | Data Points/Day | Recommendation |
|-------|-----------------|----------------|
| **Hobby** | <1,000 | CSV files |
| **Small** | 1,000-10,000 | SQLite |
| **Medium** | 10,000-100,000 | SQLite or InfluxDB |
| **Large** | >100,000 | InfluxDB or PostgreSQL |

---

## 11.2 Time-Series Data Best Practices

### Sampling Frequency

**How often to log?**

| Parameter | Typical Frequency | Rationale |
|-----------|------------------|-----------|
| **Temperature** | 1-5 minutes | Changes gradually |
| **Humidity** | 5-15 minutes | Slow changes |
| **pH** | 15-30 minutes | Stable in most systems |
| **EC** | 30-60 minutes | Very stable |
| **DO** | 1-2 minutes | Can change rapidly (critical!) |
| **Light (PAR)** | 5-15 minutes | Changes with sun/clouds |
| **CO₂** | 5-15 minutes | Moderate changes |
| **Water level** | On change | Event-driven |
| **Pump status** | On change | Event-driven |

**Storage Calculation:**

```
Example: 4 sensors, 5-minute intervals, 1 year

Data points = 4 sensors × (60/5) × 24 hours × 365 days
            = 4 × 12 × 24 × 365
            = 420,480 data points

Storage (CSV, ~50 bytes per row):
  420,480 × 50 bytes = 21 MB per year

Storage (SQLite, ~30 bytes per row):
  420,480 × 30 bytes = 12.6 MB per year

Very manageable!
```

### Data Retention Policies

**Tiered Retention:**

```
Raw data (high resolution):
  • Keep for 30 days
  • 1-minute intervals

Hourly averages:
  • Keep for 1 year
  • Calculate from raw data before deleting

Daily summaries:
  • Keep forever
  • Min, max, average per day

Benefits:
  • Detailed recent data for troubleshooting
  • Long-term trends without massive storage
```

**InfluxDB Implementation:**
```
CREATE RETENTION POLICY "30_days" ON "greenhouse" DURATION 30d REPLICATION 1
CREATE RETENTION POLICY "1_year_hourly" ON "greenhouse" DURATION 365d REPLICATION 1

-- Continuous query to downsample
CREATE CONTINUOUS QUERY "hourly_average" ON "greenhouse"
BEGIN
  SELECT MEAN(*) INTO "1_year_hourly".:MEASUREMENT FROM "30_days".:MEASUREMENT
  GROUP BY time(1h), *
END
```

---

## 11.3 Visualization and Dashboards

### Grafana (Popular Open-Source Dashboard)

**What it does:**
- Connects to databases (InfluxDB, MySQL, SQLite, etc.)
- Creates beautiful real-time graphs
- Customizable dashboards
- Alert integration

**Example Dashboard Panels:**

1. **Temperature Time-Series Graph**
   - Line chart showing last 24 hours
   - Multiple zones overlaid
   - Min/max thresholds shown

2. **Current Status Panel**
   - Big numbers showing current values
   - Color-coded (green=good, yellow=warning, red=critical)

3. **Heatmap**
   - Hour-of-day vs. day-of-week
   - Color intensity shows temperature
   - Identifies daily patterns

4. **Gauge**
   - Current pH with target range indicator
   - Visual at-a-glance status

**Setup:**
```bash
# Install on Raspberry Pi
sudo apt-get install -y grafana

# Start Grafana
sudo systemctl start grafana-server

# Access at http://localhost:3000
# Default login: admin / admin
```

### Python Matplotlib/Plotly (Custom Graphs)

**Simple Temperature Graph:**

```python
import matplotlib.pyplot as plt
import sqlite3
from datetime import datetime, timedelta

# Get data from database
conn = sqlite3.connect('greenhouse.db')
cursor = conn.cursor()

cursor.execute('''
SELECT timestamp, temperature FROM sensor_data
WHERE timestamp > ?
ORDER BY timestamp
''', (datetime.now() - timedelta(hours=24),))

data = cursor.fetchall()
timestamps = [row[0] for row in data]
temperatures = [row[1] for row in data]

# Plot
plt.figure(figsize=(12, 6))
plt.plot(timestamps, temperatures, label='Temperature')
plt.axhline(y=75, color='g', linestyle='--', label='Target')
plt.axhline(y=80, color='r', linestyle='--', label='High Limit')
plt.xlabel('Time')
plt.ylabel('Temperature (°F)')
plt.title('Greenhouse Temperature - Last 24 Hours')
plt.legend()
plt.grid(True)
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig('temperature_report.png')
plt.show()
```

**Interactive Web Graphs (Plotly):**

```python
import plotly.graph_objects as go

fig = go.Figure()
fig.add_trace(go.Scatter(x=timestamps, y=temperatures,
                         mode='lines', name='Temperature'))
fig.update_layout(title='Real-Time Temperature',
                  xaxis_title='Time',
                  yaxis_title='Temperature (°F)')
fig.write_html('temp_dashboard.html')
```

---

## 11.4 Trend Analysis

### Identifying Patterns

**1. Daily Cycles**

```python
# Group data by hour of day
SELECT strftime('%H', timestamp) as hour,
       AVG(temperature) as avg_temp
FROM sensor_data
GROUP BY hour
ORDER BY hour;

Insights:
- Temperature peaks at 2-3 PM (solar gain)
- Lowest at 5-6 AM (before sunrise)
- Adjust heating/cooling schedules accordingly
```

**2. Day-of-Week Patterns**

```python
# Compare weekdays vs. weekends
SELECT strftime('%w', timestamp) as day_of_week,
       AVG(temperature) as avg_temp
FROM sensor_data
GROUP BY day_of_week;

Insights:
- Temperature more variable on weekends (if you're not there)
- May need better automation for when away
```

**3. Correlation Analysis**

**Question:** Does outside temperature affect inside temperature?

```python
import pandas as pd
from scipy.stats import pearsonr

# Load data
df = pd.read_csv('greenhouse_data.csv')

# Calculate correlation
correlation, p_value = pearsonr(df['outdoor_temp'], df['indoor_temp'])
print(f"Correlation: {correlation:.2f}, p-value: {p_value:.4f}")

If correlation > 0.7:
  Strong relationship - consider better insulation
If correlation < 0.3:
  Weak relationship - heating/cooling working well
```

**4. Lag Analysis**

**Question:** How long after lights turn on does temperature rise?

```python
# Find time lag between events
lights_on_time = '08:00:00'
temperature_rise_detected = '08:17:00'
lag = 17 minutes

Insight: 17-minute lag is reasonable for thermal mass
```

---

## 11.5 Reporting and Documentation

### Automated Daily Reports

**Email Summary Report:**

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta

def generate_daily_report():
    # Query database for yesterday's data
    yesterday = datetime.now() - timedelta(days=1)

    conn = sqlite3.connect('greenhouse.db')
    cursor = conn.cursor()

    cursor.execute('''
    SELECT
        AVG(temperature) as avg_temp,
        MIN(temperature) as min_temp,
        MAX(temperature) as max_temp,
        AVG(humidity) as avg_humidity,
        AVG(pH) as avg_pH,
        AVG(EC) as avg_EC
    FROM sensor_data
    WHERE date(timestamp) = date(?)
    ''', (yesterday,))

    stats = cursor.fetchone()

    # Create report
    report = f"""
    Daily Greenhouse Report - {yesterday.strftime('%Y-%m-%d')}

    TEMPERATURE:
      Average: {stats[0]:.1f}°F
      Minimum: {stats[1]:.1f}°F
      Maximum: {stats[2]:.1f}°F

    HUMIDITY:
      Average: {stats[3]:.1f}%

    WATER QUALITY:
      pH: {stats[4]:.2f}
      EC: {stats[5]:.2f} mS/cm

    ALERTS TRIGGERED: 3
      - Temperature high at 2:15 PM (85.2°F)
      - pH low at 9:30 AM (5.9)
      - pH low at 4:45 PM (5.8)

    SYSTEM STATUS: Normal
    NEXT CALIBRATION DUE: pH sensor on 2025-12-15
    """

    # Send email
    send_email("Daily Greenhouse Report", report)
```

**Weekly Performance Report:**

```
╔═══════════════════════════════════════════════════════════════╗
║           WEEKLY GREENHOUSE PERFORMANCE REPORT                ║
║                  Week of Dec 3-9, 2025                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   ENVIRONMENTAL SUMMARY                                       ║
║   ───────────────────────────────────────────────────────────║
║   Temperature:     Avg 72.3°F  (Target: 72°F)  ✓             ║
║   Humidity:        Avg 63.5%   (Target: 60-70%)  ✓           ║
║   DLI:             Avg 18.2 mol/m²/day  (Target: 17)  ✓      ║
║                                                               ║
║   WATER QUALITY                                               ║
║   ───────────────────────────────────────────────────────────║
║   pH:              Avg 6.52  (Target: 6.5)  ✓                ║
║   EC:              Avg 1.82 mS/cm  (Target: 1.8)  ✓          ║
║                                                               ║
║   SYSTEM UPTIME                                               ║
║   ───────────────────────────────────────────────────────────║
║   Total Hours:     168                                        ║
║   Downtime:        0 hours  (100% uptime)  ✓                 ║
║                                                               ║
║   ALERTS                                                      ║
║   ───────────────────────────────────────────────────────────║
║   Level 1 (Warning):    12 (avg 1.7/day)                     ║
║   Level 2 (Alert):      3  (avg 0.4/day)                     ║
║   Level 3 (Critical):   0                                     ║
║                                                               ║
║   ENERGY USAGE                                                ║
║   ───────────────────────────────────────────────────────────║
║   Lighting:        245 kWh                                    ║
║   Heating:         78 kWh                                     ║
║   Cooling:         12 kWh                                     ║
║   Total:           335 kWh @ $0.12/kWh = $40.20              ║
║                                                               ║
║   RECOMMENDATIONS                                             ║
║   ───────────────────────────────────────────────────────────║
║   • pH sensor calibration due this week                       ║
║   • Consider reducing nighttime temp setpoint 2°F (save $)    ║
║   • Alert frequency normal, no threshold adjustments needed   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## 11.6 Using Data for Optimization

### Controlled Experiments

**Example: Testing Optimal Fertigation Schedule**

```
Hypothesis: Fertigation every 2 hours produces better growth than every 4 hours

Experiment Design:
  Zone A: Fertigation every 2 hours (experimental)
  Zone B: Fertigation every 4 hours (control)
  Duration: 4 weeks
  Crop: Lettuce
  Measure: Harvest weight, days to maturity

Data Collection:
  • EC before and after fertigation
  • Plant height weekly
  • Harvest weight per plant
  • Days from transplant to harvest

Analysis:
  Compare average yield Zone A vs. Zone B
  Statistical test (t-test) to determine significance

Result Example:
  Zone A: 187g average per head, 32 days to harvest
  Zone B: 175g average per head, 35 days to harvest
  Conclusion: 2-hour fertigation increases yield 6.9% and reduces time 8.6%
  Decision: Implement 2-hour schedule across all zones
```

### A/B Testing

**Lighting Intensity Test:**

```
Week 1: Run lights at 400 µmol/m²/s, measure growth
Week 2: Run lights at 300 µmol/m²/s, measure growth
Week 3: Run lights at 500 µmol/m²/s, measure growth

Track:
  • Plant growth rate
  • Energy consumption
  • Crop quality (color, compactness)

Find optimal balance of growth vs. energy cost
```

### Predictive Maintenance

**Use data to predict equipment failures:**

```python
# Track pump runtime
total_runtime = 2,450 hours
manufacturer_spec = "Service every 3,000 hours"

remaining = 3000 - 2450 = 550 hours

At current usage (8 hours/day):
  Days until service = 550 / 8 = 68.75 days
  Service date ≈ Feb 17, 2026

Schedule maintenance BEFORE failure occurs
```

---

## Summary

Data logging transforms automation from reactive to proactive management:

**Key Takeaways:**

1. **Start Simple:** CSV files work for small systems
2. **Upgrade Wisely:** SQLite for medium, InfluxDB for large
3. **Sample Appropriately:** Balance detail vs. storage
4. **Visualize:** Grafana dashboards make data actionable
5. **Analyze Trends:** Identify patterns, optimize schedules
6. **Automate Reports:** Daily/weekly summaries keep you informed
7. **Experiment:** Use data to test and refine practices

**Recommended Data Stack:**

**Beginner:**
- CSV logging (Python/Arduino)
- Excel/Google Sheets for analysis
- Manual graphing

**Intermediate:**
- SQLite database
- Python Matplotlib for graphs
- Automated email reports

**Advanced:**
- InfluxDB + Grafana
- Real-time dashboards
- Automated analysis and optimization

**Data Insights Value:**
- Troubleshooting: Identify when/why problems occurred
- Optimization: Data-driven adjustments improve yields 10-30%
- Compliance: Documentation for certifications
- Automation ROI: Prove value with before/after data

---

## Review Questions

1. What are the advantages of SQLite over CSV files for data logging?
2. How do you determine appropriate sampling frequency for different sensors?
3. What is a data retention policy and why is it useful?
4. What can Grafana do for CEA monitoring?
5. How can correlation analysis help optimize greenhouse climate?
6. What should be included in an automated daily report?
7. How can you use A/B testing to optimize growing conditions?
8. What is predictive maintenance and how does data enable it?

---

## Practical Exercise

**Exercise: Implement Data Logging and Visualization**

Build a complete data logging and visualization system:

**Phase 1: Data Collection (choose your platform)**
- Arduino + SD card OR Raspberry Pi + SQLite
- Log temperature, humidity, and one other parameter
- Run for at least 3 days

**Phase 2: Database**
- If Arduino: Convert CSV to SQLite on computer
- If RPi: Implement SQLite logging directly
- Create database schema with timestamp and sensor values

**Phase 3: Analysis**
- Query database for min, max, average values
- Create hourly averages
- Identify peak temperature time-of-day

**Phase 4: Visualization**
- Graph temperature over 24-hour period
- Create summary statistics table
- Generate a daily report (text or HTML)

**Phase 5: Insights**
- Identify at least 2 patterns in your data
- Propose one optimization based on findings

**Deliverable:**
- Database file with logged data
- Python scripts for analysis and graphing
- Report with graphs and insights

---

*End of Module 11*
