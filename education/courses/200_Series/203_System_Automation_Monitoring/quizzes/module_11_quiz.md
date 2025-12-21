# Module 11 Quiz: Data Logging & Analytics
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What are the main advantages of SQLite over CSV files for data logging?**
   - a) SQLite files are smaller
   - b) SQLite provides fast querying, handles millions of rows, and supports concurrent reads
   - c) SQLite is easier to set up
   - d) SQLite works on more devices

**2. What is an appropriate sampling frequency for dissolved oxygen (DO) sensors in a fish tank?**
   - a) Once per hour (it changes slowly)
   - b) Once per day (daily average is sufficient)
   - c) 1-2 minutes (it can change rapidly and is critical)
   - d) Continuous real-time monitoring every second

**3. What is a data retention policy?**
   - a) A rule for who can access the data
   - b) A tiered strategy for how long to keep data at different resolutions (e.g., 30 days raw, 1 year hourly averages)
   - c) The maximum database file size allowed
   - d) A backup schedule for data files

**4. What is Grafana used for in CEA automation?**
   - a) Controlling pumps and valves
   - b) Creating beautiful real-time dashboards and visualizations from database data
   - c) Sending SMS alerts
   - d) Programming Arduino controllers

**5. If temperature consistently peaks at 2-3 PM daily, what type of pattern have you identified?**
   - a) A sensor failure
   - b) A daily cycle pattern (likely due to solar gain)
   - c) Random variation
   - d) A control system malfunction

**6. What should be included in an automated daily report?**
   - a) Only the current temperature
   - b) Min, max, and average values for key parameters, alerts triggered, and system status
   - c) Raw data dump from the database
   - d) Just a list of any problems

**7. What is the purpose of correlation analysis in CEA data?**
   - a) To delete old data
   - b) To identify relationships between variables (e.g., outdoor temp vs. indoor temp) to guide optimization
   - c) To calibrate sensors
   - d) To compress database files

**8. For a small hobbyist system with 4 sensors logging every 5 minutes, approximately how much data storage is needed per year?**
   - a) 500 MB
   - b) 100 MB
   - c) 12-21 MB (very manageable)
   - d) 5 GB

**9. What is predictive maintenance enabled by data logging?**
   - a) Predicting future crop yields
   - b) Using tracked equipment runtime to schedule maintenance BEFORE failure occurs
   - c) Forecasting weather patterns
   - d) Estimating future data storage needs

**10. Which database type is purpose-built for time-series sensor data and offers automatic retention policies and downsampling?**
   - a) CSV files
   - b) SQLite
   - c) InfluxDB
   - d) Microsoft Excel

---

## Answer Key

1. **b) SQLite provides fast querying, handles millions of rows, and supports concurrent reads** - SQLite is a structured database that allows complex queries (SELECT, WHERE, GROUP BY), handles large datasets efficiently, and supports multiple simultaneous readers. CSV files become slow and cumbersome with large datasets.

2. **c) 1-2 minutes (it can change rapidly and is critical)** - Dissolved oxygen is critical for fish survival and can drop quickly. It requires frequent monitoring. Temperature changes gradually (5-15 min), but DO needs 1-2 minute sampling.

3. **b) A tiered strategy for how long to keep data at different resolutions (e.g., 30 days raw, 1 year hourly averages)** - Retention policies manage storage by keeping high-resolution data short-term (30 days at 1-min intervals) and summarized data long-term (1 year hourly averages, daily summaries forever).

4. **b) Creating beautiful real-time dashboards and visualizations from database data** - Grafana is a popular open-source dashboard tool that connects to databases (InfluxDB, MySQL, SQLite) and creates customizable graphs, gauges, heatmaps, and real-time visualizations.

5. **b) A daily cycle pattern (likely due to solar gain)** - Temperature peaking in the afternoon (2-3 PM) is a normal daily pattern caused by solar radiation. This insight could guide heating/cooling schedule adjustments to be more efficient.

6. **b) Min, max, and average values for key parameters, alerts triggered, and system status** - Daily reports should provide actionable summary information including statistical summaries, any problems encountered, and overall system health. This helps operators quickly assess performance.

7. **b) To identify relationships between variables (e.g., outdoor temp vs. indoor temp) to guide optimization** - Correlation analysis reveals how parameters relate. High correlation between outdoor and indoor temperature suggests poor insulation. Low correlation means climate control is working well.

8. **c) 12-21 MB (very manageable)** - With 4 sensors at 5-minute intervals for 1 year: 4 × 12 × 24 × 365 = 420,480 data points. At ~30-50 bytes per row in SQLite, this is only 12-21 MB per year.

9. **b) Using tracked equipment runtime to schedule maintenance BEFORE failure occurs** - By logging pump runtime hours, you can schedule maintenance based on manufacturer specifications (e.g., service every 3,000 hours) before failure occurs, preventing unexpected downtime.

10. **c) InfluxDB** - InfluxDB is specifically designed for time-series data with features like automatic data retention policies, continuous queries for downsampling, and extremely fast queries for sensor data. It's ideal for large-scale CEA operations.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 11 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 11 Quiz*
