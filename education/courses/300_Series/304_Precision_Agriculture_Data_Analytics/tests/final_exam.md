# Final Exam: Precision Agriculture & Data Analytics

## Course 304
**Total Points:** 50 | **Passing Score:** 40/50 (80%) | **Time Limit:** 120 minutes

---

## Section 1: Fundamentals and Sensor Technologies (10 points)

### Question 1 (2 points)
List and briefly describe the five layers of a precision agriculture system stack.

**Answer:**
1. Physical System - Plants, fish, water, environment, equipment
2. Data Collection - Sensors, actuators, controllers, API integrations
3. Data Storage - Time-series DB, relational DB, data warehouse
4. Data Processing - ETL, validation, aggregation, feature engineering
5. Analytics & Presentation - ML models, statistics, dashboards, reports, alerts

---

### Question 2 (2 points)
Match the sensor type with its recommended accuracy for production aquaponics systems:

| Sensor | Accuracy |
|--------|----------|
| pH | A) ±0.1 mg/L |
| DO (Dissolved Oxygen) | B) ±0.1°C |
| Water Temperature | C) ±0.05 pH units |
| EC (Electrical Conductivity) | D) ±1% |

**Correct Answers:**
- pH: C (±0.05 pH units)
- DO: A (±0.1 mg/L)
- Water Temperature: B (±0.1°C)
- EC: D (±1%)

---

### Question 3 (2 points)
Why is NDIR (Non-Dispersive Infrared) the recommended CO₂ sensor technology for production greenhouses, despite higher cost?

**Answer:**
NDIR sensors offer:
- High accuracy (±30-50 ppm vs ±100-200 ppm for chemical sensors)
- Minimal drift (<2% over 10 years)
- Long-term stability without frequent recalibration
- Reliable performance in humid greenhouse environments
- Worth the investment for precise CO₂ enrichment control

---

### Question 4 (2 points)
Calculate the required sample size per group for an A/B test with the following parameters:
- Effect size (Cohen's d): 0.5
- Alpha (significance level): 0.05
- Power: 0.80

Show your work or explain the process.

**Answer:**
Using power analysis formula or statsmodels.stats.power.ttest_power():
- Required sample size ≈ 64 samples per group
- Total samples needed = 128 (64 control + 64 treatment)
- This ensures 80% probability of detecting a medium effect size if it exists

---

### Question 5 (2 points)
A pH sensor shows a slope efficiency of 88% during calibration. What does this indicate, and what action should be taken?

**Answer:**
- Slope efficiency should be 95-105% for healthy sensor
- 88% indicates sensor degradation (worn membrane or contaminated junction)
- Actions:
  1. Clean sensor thoroughly
  2. Recalibrate
  3. If slope doesn't improve to >90%, replace sensor soon
  4. Plan for replacement within 1-2 months

---

## Section 2: Data Collection and Database Design (10 points)

### Question 6 (3 points)
Design an MQTT topic structure for a multi-zone aquaponics facility. Include at least 6 specific topic examples covering environmental sensors, water quality, and equipment status.

**Answer (Example):**
```
Structure: {facility}/{system}/{location}/{device}/{parameter}

Examples:
1. farm_north/aquaponics/fish_tank_1/do_sensor_01/value
2. farm_north/aquaponics/fish_tank_1/do_sensor_01/battery
3. farm_north/greenhouse/zone_a/temp_rh_01/temperature
4. farm_north/greenhouse/zone_a/temp_rh_01/humidity
5. farm_north/aquaponics/sump/ph_sensor_01/value
6. farm_north/aquaponics/biofilter/pump_01/status
7. farm_north/aquaponics/biofilter/pump_01/flow_rate
8. farm_north/greenhouse/zone_b/light_controller/ppfd
```

---

### Question 7 (3 points)
Explain the difference between InfluxDB tags and fields. For a water temperature measurement, which data elements should be tags vs. fields, and why?

**Answer:**
- **Tags:** Indexed, low cardinality, used for filtering/grouping (metadata)
- **Fields:** Not indexed, high cardinality, actual measured values

For water temperature measurement:
- **Tags:** facility (farm_north), location (fish_tank_1), sensor_id (temp_001)
  - Why: Low number of unique values, used to filter queries
- **Fields:** temperature (23.5), battery_voltage (3.7)
  - Why: Continuously changing measured values, used in aggregations

---

### Question 8 (2 points)
What is the purpose of a continuous query in InfluxDB, and provide an example use case.

**Answer:**
- **Purpose:** Automatically downsample high-resolution data into lower-resolution aggregates
- **Benefits:** Reduces storage, improves query performance, implements retention policies

**Example:**
```
Aggregate 10-second sensor data into 1-minute means:
CREATE CONTINUOUS QUERY "cq_1min"
ON "farm_data"
BEGIN
  SELECT mean("temperature") AS "temp_mean"
  INTO "one_month"."environment_1min"
  FROM "environment"
  GROUP BY time(1m), "facility", "zone"
END
```

---

### Question 9 (2 points)
Calculate the daily storage requirement for the following sensor configuration:
- 20 sensors
- Sampling every 30 seconds
- 50 bytes per reading (including timestamp, tags, fields)

**Answer:**
- Readings per sensor per day: (24 hrs × 60 min × 60 sec) / 30 sec = 2,880
- Total readings per day: 20 sensors × 2,880 = 57,600
- Storage per day: 57,600 × 50 bytes = 2,880,000 bytes ≈ 2.88 MB
- Monthly: 2.88 MB × 30 = 86.4 MB
- Annually: 2.88 MB × 365 = 1,051 MB ≈ 1.05 GB (raw data)

---

## Section 3: Statistical Analysis and Machine Learning (12 points)

### Question 10 (3 points)
Given the following yield data (lbs per harvest), calculate:
- Mean
- Standard Deviation
- Coefficient of Variation (CV)

Data: 45, 48, 52, 47, 49, 51, 48, 50, 46, 49

**Answer:**
- Mean: (45+48+52+47+49+51+48+50+46+49) / 10 = 485 / 10 = 48.5 lbs
- Variance: Σ(x - mean)² / (n-1) = 38.5 / 9 = 4.28
- Standard Deviation: √4.28 = 2.07 lbs
- CV: (2.07 / 48.5) × 100% = 4.27%

Interpretation: Low CV indicates consistent production.

---

### Question 11 (3 points)
Explain the difference between correlation and causation. Provide an agricultural example where two variables might be highly correlated but not causally related.

**Answer:**
- **Correlation:** Statistical relationship where variables change together (r coefficient)
- **Causation:** One variable directly causes changes in another

**Example:**
Ice cream sales and lettuce yield might show positive correlation during summer months:
- Both increase in summer (correlated)
- Ice cream sales don't cause higher lettuce yields (not causal)
- True cause: Higher temperatures and more sunlight benefit lettuce growth AND increase ice cream demand
- This is spurious correlation due to confounding variable (season/weather)

---

### Question 12 (3 points)
You're building a yield prediction model. Your results are:
- Training R²: 0.95
- Validation R²: 0.88
- Test R²: 0.87

Is this model performing well? Are there any concerns? Explain.

**Answer:**
**Performance:** Good overall
- Test R² of 0.87 means model explains 87% of yield variance
- Acceptable for agricultural applications (inherent variability)

**Concerns:** Minor overfitting
- Training R² (0.95) notably higher than validation/test (0.87-0.88)
- Gap of ~7-8% suggests model memorizing some training noise
- Not severe, but could improve with:
  - Regularization (Ridge/Lasso)
  - Reducing model complexity
  - More training data
  - Feature selection

**Conclusion:** Deploy with monitoring; retrain as more data collected.

---

### Question 13 (3 points)
Design a control chart for pH monitoring with the following specifications:
- Target pH: 6.8
- Standard deviation: 0.15
- Control limits at 3σ
- Warning limits at 2σ

Calculate UCL, UWL, LWL, and LCL.

**Answer:**
- UCL (Upper Control Limit) = μ + 3σ = 6.8 + (3 × 0.15) = 7.25
- UWL (Upper Warning Limit) = μ + 2σ = 6.8 + (2 × 0.15) = 7.10
- Target = μ = 6.8
- LWL (Lower Warning Limit) = μ - 2σ = 6.8 - (2 × 0.15) = 6.50
- LCL (Lower Control Limit) = μ - 3σ = 6.8 - (3 × 0.15) = 6.35

**Interpretation:**
- pH between 6.50-7.10: Normal operation
- pH between 6.35-6.50 or 7.10-7.25: Warning (investigate)
- pH < 6.35 or > 7.25: Out of control (immediate action)

---

## Section 4: Advanced Analytics and Optimization (8 points)

### Question 14 (2 points)
What is VPD (Vapor Pressure Deficit), and why is it more useful than temperature or humidity alone for plant growth management?

**Answer:**
- **VPD:** Difference between saturation vapor pressure and actual vapor pressure (kPa)
- Represents "drying power" of air

**Why more useful:**
- Directly relates to transpiration rate (nutrient/water uptake)
- Single metric combining temp + humidity effects
- Optimal VPD ranges drive maximum growth:
  - Seedling: 0.4-0.8 kPa
  - Vegetative: 0.8-1.2 kPa
  - Flowering: 1.0-1.4 kPa
- Same VPD can be achieved with different temp/RH combinations
- Controls stomatal opening and gas exchange

---

### Question 15 (3 points)
Calculate the fertilizer dose needed using the following information:
- Current EC: 1,200 µS/cm
- Target EC: 1,500 µS/cm
- System volume: 1,000 liters
- Fertilizer increases EC by 2.5 µS/cm per gram per liter

**Answer:**
```
EC deficit = Target - Current = 1,500 - 1,200 = 300 µS/cm

Dose (grams) = (EC deficit × Volume) / EC per gram
             = (300 × 1,000) / 2.5
             = 300,000 / 2.5
             = 120,000 grams
             = 120 kg

Wait - this seems too high. Let me recalculate:

If fertilizer increases EC by 2.5 µS/cm PER LITER PER GRAM:
For 1000 L system, 1 gram increases total EC by: 2.5/1000 = 0.0025 µS/cm

Dose = 300 / 0.0025 = 120,000 grams = 120 kg

Actually, the spec likely means: 1g in 1L increases EC by 2.5
So for whole system: 1g increases system EC by 2.5/1000 = 0.0025

Better interpretation: "2.5 µS/cm per gram" for the whole system
Dose = 300 / 2.5 = 120 grams

**Answer: Add 120 grams of fertilizer**
```

---

### Question 16 (3 points)
Explain the bias-variance tradeoff in machine learning. How does it relate to overfitting and underfitting?

**Answer:**
**Bias-Variance Tradeoff:**
- **High Bias:** Model too simple, misses patterns (underfitting)
  - Low complexity, high training error, high test error
  - Example: Linear model for complex non-linear relationship

- **High Variance:** Model too complex, memorizes noise (overfitting)
  - High complexity, low training error, high test error
  - Example: Deep neural network with insufficient data

- **Optimal:** Balance bias and variance
  - Moderate complexity, reasonable training error, good test error
  - Generalizes well to new data

**Relationship:**
- Underfitting = High Bias (model assumptions too strong)
- Overfitting = High Variance (model too flexible, follows noise)
- Goal: Find sweet spot through cross-validation, regularization

---

## Section 5: Implementation and Business Application (10 points)

### Question 17 (4 points)
Create a phased implementation plan for a 2,000 sq ft aquaponics facility with a $30,000 budget over 12 months. Include:
- Phase timelines
- Key activities per phase
- Estimated budget allocation
- Success criteria for each phase

**Answer (Example):**

**Phase 1: Foundation (Months 1-3) - $12,000**
- Activities:
  - Install core sensors (DO, pH, temp, EC)
  - Deploy Raspberry Pi data loggers
  - Set up InfluxDB + Grafana
  - Basic dashboard creation
  - Staff training on new systems
- Success Criteria:
  - 95% sensor uptime
  - Daily data review by staff
  - Baseline metrics established

**Phase 2: Analytics (Months 4-6) - $6,000**
- Activities:
  - Implement automated alerts
  - Historical data analysis
  - Identify optimization opportunities
  - Correlation studies
- Success Criteria:
  - <30 min alert response time
  - 3+ optimization insights identified
  - Staff using data for decisions

**Phase 3: Automation (Months 7-9) - $9,000**
- Activities:
  - Automated pH/EC dosing
  - Climate control integration
  - Predictive analytics deployment
  - Advanced dashboard features
- Success Criteria:
  - 50% reduction in manual adjustments
  - Improved parameter stability
  - Measurable yield increase

**Phase 4: Optimization (Months 10-12) - $3,000**
- Activities:
  - ML model refinement
  - System tuning
  - ROI documentation
  - Training refresher
- Success Criteria:
  - 15%+ yield increase
  - Positive ROI demonstrated
  - System self-sustaining

---

### Question 18 (3 points)
Calculate the ROI for the following precision agriculture investment:

**Investment:**
- Hardware: $15,000
- Software: $3,000
- Installation: $4,000
- Training: $2,000
- **Total: $24,000**

**Annual Benefits:**
- Yield increase: 20% on baseline 4,000 lbs @ $4/lb = $3,200
- Labor savings: 10 hrs/week × 52 weeks × $25/hr = $13,000
- Loss reduction: 50% of 10% baseline loss (400 lbs) @ $4/lb = $800
- Energy savings: $2,000
- **Total: $19,000**

Calculate:
a) First-year ROI percentage
b) Payback period in months
c) 3-year NPV (10% discount rate)

**Answer:**
a) ROI = (Annual Benefit / Investment) × 100
   ROI = ($19,000 / $24,000) × 100 = 79.2%

b) Payback = Investment / Annual Benefit × 12 months
   Payback = ($24,000 / $19,000) × 12 = 15.2 months

c) NPV calculation:
   Year 0: -$24,000
   Year 1: $19,000 / 1.1¹ = $17,273
   Year 2: $19,000 / 1.1² = $15,702
   Year 3: $19,000 / 1.1³ = $14,275
   NPV = -$24,000 + $17,273 + $15,702 + $14,275 = $23,250

---

### Question 19 (3 points)
Design an alert escalation matrix for a critical parameter (Dissolved Oxygen in fish tank). Include:
- 3 severity levels
- Specific thresholds for each
- Response time requirements
- Notification methods
- Required actions

**Answer:**

| Severity | Threshold | Response Time | Notification | Actions |
|----------|-----------|---------------|--------------|---------|
| **CRITICAL** | DO < 4.0 mg/L | <15 minutes | SMS + Phone Call + Email + Dashboard | 1. Increase aeration immediately<br>2. Check aerator status<br>3. Stop feeding<br>4. Monitor every 5 min<br>5. Prepare for fish rescue if < 3.0 |
| **WARNING** | DO 4.0-5.5 mg/L | <2 hours | Email + Dashboard Alert | 1. Increase aeration 25%<br>2. Monitor every 15 min<br>3. Check for causes<br>4. Log incident |
| **INFO** | DO 5.5-6.0 mg/L | Next business day | Dashboard Notification | 1. Note trend<br>2. Consider preventive aeration increase<br>3. Review at daily meeting |
| **OPTIMAL** | DO > 6.0 mg/L | N/A | None | Normal monitoring |

---

## Bonus Question (5 points)

### Question 20
Design a complete yield prediction system including:
a) List of input features (minimum 8)
b) Data preprocessing steps
c) Model selection justification
d) Performance evaluation metrics
e) Deployment strategy

**Answer (Example):**

**a) Input Features:**
1. Average temperature (7-day rolling)
2. Average humidity (7-day rolling)
3. Average DLI (7-day rolling)
4. Average EC (7-day rolling)
5. Days since transplant
6. Plant count
7. Crop variety (categorical)
8. Season (categorical)
9. VPD (calculated from temp/humidity)
10. Cumulative DLI since transplant

**b) Preprocessing:**
1. Handle missing values (forward fill for short gaps, interpolate for medium gaps)
2. Remove outliers (IQR method for sensors)
3. Normalize continuous features (StandardScaler)
4. One-hot encode categorical features (crop variety, season)
5. Create lag features (previous week's yield)
6. Feature engineering (VPD, cumulative light)
7. Train/validation/test split (60/20/20)

**c) Model Selection:**
- **Primary:** Random Forest Regressor
  - Handles non-linear relationships
  - Robust to outliers
  - Provides feature importance
  - No assumptions about distribution
  - Good performance with limited data

- **Backup:** XGBoost
  - Often better performance
  - Handles missing values natively
  - Faster training on large datasets

**d) Evaluation Metrics:**
- **RMSE:** <5 lbs (acceptable prediction error)
- **MAPE:** <10% (percentage error)
- **R²:** >0.85 (variance explained)
- **Cross-validation:** 5-fold CV to ensure stability

**e) Deployment:**
1. Save trained model (joblib)
2. Create prediction API (Flask)
3. Integrate with existing dashboard
4. Display predictions with confidence intervals
5. Log actual vs predicted for model monitoring
6. Retrain monthly with new data
7. A/B test predictions against operator estimates
8. Alert if model drift detected (performance degrades)

---

## Exam Scoring Guide

| Section | Points | Your Score |
|---------|--------|------------|
| Section 1: Fundamentals & Sensors | 10 | ____ |
| Section 2: Data & Databases | 10 | ____ |
| Section 3: Statistics & ML | 12 | ____ |
| Section 4: Advanced Analytics | 8 | ____ |
| Section 5: Implementation | 10 | ____ |
| Bonus Question | 5 | ____ |
| **Total** | **55** | ____ |

**Passing Score:** 40/50 (80%) - Note: Bonus points can help!

---

## Exam Policies

1. **Open book/notes** - You may reference course materials
2. **No collaboration** - Individual work only
3. **Show your work** - Partial credit available for calculations
4. **Time limit:** 120 minutes
5. **Submit all work** - Even if incomplete

---

**END OF FINAL EXAM**

*EcoFusion Academy - Course 304: Precision Agriculture & Data Analytics*
