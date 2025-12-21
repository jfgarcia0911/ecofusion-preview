# Data Analysis Exercise

## Course 304: Precision Agriculture & Data Analytics

**Activity Type:** Hands-on Data Analysis | **Duration:** 2-3 hours | **Points:** 30

---

## Objective

Apply statistical analysis and visualization techniques to real aquaponics operational data. Identify patterns, correlations, and optimization opportunities.

---

## Dataset Description

You have been provided with 90 days of operational data from a 2,000 sqft aquaponics facility growing lettuce and tilapia.

**Data files:**
- `environmental_data.csv` - Hourly environmental readings
- `water_quality_data.csv` - Water quality measurements (every 30 min)
- `harvest_data.csv` - Weekly harvest records
- `events_log.csv` - System events, maintenance, alerts

**Environmental Data Columns:**
- timestamp
- zone (zone_a, zone_b)
- air_temp_c
- humidity_pct
- co2_ppm
- light_ppfd
- vpd_kpa

**Water Quality Data Columns:**
- timestamp
- location (fish_tank, biofilter, sump)
- ph
- ec_us_cm
- do_mg_l
- water_temp_c
- ammonia_mg_l (weekly manual tests)
- nitrite_mg_l (weekly manual tests)
- nitrate_mg_l (weekly manual tests)

**Harvest Data Columns:**
- date
- zone
- variety
- quantity_lbs
- quality_grade (A, B, C)
- waste_lbs

**Events Log Columns:**
- timestamp
- event_type (alert, maintenance, system_change)
- severity (info, warning, critical)
- parameter
- description

---

## Part 1: Exploratory Data Analysis (10 points)

### Task 1.1: Data Summary (3 points)

Calculate and report:

1. **Environmental Parameters (Zone A):**
   - Mean, median, std dev for temperature, humidity, CO₂
   - Identify any missing data periods

2. **Water Quality (Fish Tank):**
   - Mean, median, std dev for pH, DO, EC
   - Calculate % of time each parameter was out of optimal range:
     - pH: 6.0-7.5
     - DO: >5.5 mg/L
     - EC: 1200-1800 µS/cm

3. **Production Summary:**
   - Total harvest (lbs)
   - Average yield per harvest
   - Waste percentage
   - Distribution of quality grades

**Deliverable:** Summary table with all statistics

---

### Task 1.2: Time Series Visualization (4 points)

Create the following plots:

1. **Multi-line plot:** Temperature and humidity over time (full 90 days)
   - Include VPD as third axis
   - Highlight periods outside optimal VPD range (0.8-1.2 kPa)

2. **Heatmap:** Hour-of-day vs Day-of-week for average temperature
   - Identify daily patterns

3. **Box plots:** Compare pH, DO, and EC across three locations
   - Fish tank, biofilter, sump

4. **Scatter plot with trendline:** Light DLI vs weekly harvest
   - Include correlation coefficient

**Deliverable:** 4 publication-quality plots with titles, labels, legends

---

### Task 1.3: Data Quality Assessment (3 points)

Analyze data quality issues:

1. **Missing Data:**
   - Identify periods with missing sensor data
   - Calculate % completeness for each sensor
   - Propose handling strategy (interpolate, forward-fill, or flag)

2. **Outliers:**
   - Use IQR method to detect outliers in pH, DO, temperature
   - List all outliers with timestamps
   - Classify as likely sensor error vs. real event (cross-reference events log)

3. **Sensor Drift:**
   - Plot pH calibration values over time (from events log)
   - Identify any drift patterns
   - Recommend calibration frequency adjustment if needed

**Deliverable:** Data quality report (1-2 pages)

---

## Part 2: Statistical Analysis (10 points)

### Task 2.1: Correlation Analysis (4 points)

1. **Environmental Correlations:**
   - Calculate correlation matrix for all environmental parameters
   - Create heatmap visualization
   - Identify top 3 strongest correlations
   - Explain if correlations are expected or surprising

2. **Water Quality Relationships:**
   - Test correlation between DO and water temperature
   - Test correlation between ammonia and nitrate levels
   - Explain biological/chemical reasons for relationships

3. **Production Correlations:**
   - Correlate weekly average temperature with harvest yield
   - Correlate weekly average DLI with harvest yield
   - Determine which environmental factor has strongest relationship with yield

**Deliverable:** Correlation matrices, scatterplots, and interpretation (2 pages)

---

### Task 2.2: Hypothesis Testing (3 points)

Test the following hypotheses:

**Hypothesis 1:** Zone A has higher average temperature than Zone B
- Null hypothesis: No difference in temperatures
- Calculate: t-statistic, p-value
- Conclusion: Reject or fail to reject H₀ at α=0.05
- Practical significance: Is the difference meaningful for operations?

**Hypothesis 2:** Quality grade is related to harvest period temperature
- Compare average temperatures during weeks with >80% Grade A vs. <80% Grade A
- Use t-test or Mann-Whitney U test
- Interpret results

**Deliverable:** Hypothesis test results with statistical and practical interpretation

---

### Task 2.3: Trend Analysis (3 points)

1. **pH Stability:**
   - Calculate rolling 7-day mean and standard deviation of pH
   - Plot both over time
   - Identify periods of instability
   - Cross-reference with events log to find causes

2. **DO Trends:**
   - Analyze DO levels before and after aeration system maintenance (check events log)
   - Calculate mean DO 7 days before vs. 7 days after maintenance
   - Test if improvement is statistically significant

3. **Harvest Trends:**
   - Fit linear regression to harvest quantity over time
   - Determine if yields are improving, declining, or stable
   - Calculate yield trend in lbs/week change

**Deliverable:** Trend plots and regression results

---

## Part 3: Advanced Analytics (10 points)

### Task 3.1: Predictive Modeling (5 points)

Build a model to predict weekly harvest yield.

**Requirements:**
1. **Feature selection:**
   - Use weekly averages of environmental parameters
   - Include: temp, humidity, DLI, CO₂, VPD
   - Add: week number, zone
   - Engineer features: temp × humidity interaction, cumulative DLI

2. **Model development:**
   - Split data: 70% train, 30% test (time-ordered, not random)
   - Try at least 2 algorithms: Linear Regression, Random Forest
   - Use cross-validation on training set

3. **Evaluation:**
   - Calculate RMSE and R² on test set
   - Create actual vs. predicted plot
   - Identify worst predictions and analyze why

4. **Feature importance:**
   - Rank features by importance
   - Interpret which factors most influence yield

**Deliverable:** Model code, performance metrics, feature importance plot, interpretation

---

### Task 3.2: Anomaly Detection (3 points)

Implement anomaly detection for water quality.

**Requirements:**
1. **Method selection:**
   - Use either: Isolation Forest, Z-score method, or IQR method
   - Justify your choice

2. **Implementation:**
   - Apply to multivariate water quality data (pH, DO, EC, temp)
   - Identify anomalous time periods

3. **Validation:**
   - Cross-reference detected anomalies with events log
   - Calculate: True positives, false positives, false negatives
   - Discuss if your method is suitable for real-time monitoring

**Deliverable:** Anomaly detection results, validation analysis

---

### Task 3.3: Optimization Recommendation (2 points)

Based on your analysis, recommend optimal setpoints for:

1. **Temperature:** Optimal range for maximum yield
2. **DLI:** Target daily light integral
3. **VPD:** Optimal vapor pressure deficit

**Requirements:**
- Support with data (correlation, regression results)
- Consider tradeoffs (yield vs. energy cost, yield vs. quality)
- Provide specific numeric recommendations
- Estimate expected yield improvement if recommendations implemented

**Deliverable:** Recommendations with data-driven justification (1-2 pages)

---

## Submission Requirements

### Code
- Python scripts or Jupyter notebook (.ipynb)
- Well-commented, organized
- Include all imports and dependencies
- Must run without errors

### Report
- PDF document (10-15 pages)
- Include all required plots, tables, and analyses
- Professional formatting
- Clear interpretations and conclusions

### Supporting Files
- Any intermediate data files generated
- README with instructions to run code

---

## Grading Rubric

| Component | Points | Criteria |
|-----------|--------|----------|
| **Part 1: EDA** | 10 | Completeness of analysis, quality of visualizations |
| **Part 2: Statistics** | 10 | Correct calculations, appropriate tests, interpretation |
| **Part 3: Advanced** | 10 | Model performance, methodology, insights |
| **Code Quality** | 5 | Organization, comments, reproducibility |
| **Report Quality** | 5 | Clarity, formatting, professionalism |
| **Total** | 40 | (30 points max, 10 bonus for exceeding expectations) |

---

## Tips for Success

1. **Start with data exploration** - Understand your data before analysis
2. **Check assumptions** - Verify normality, homoscedasticity for parametric tests
3. **Visualize everything** - Plots reveal patterns statistics might miss
4. **Interpret in context** - Statistical significance ≠ practical significance
5. **Cross-validate findings** - Use multiple methods to confirm insights
6. **Document as you go** - Explain your reasoning and decisions

---

## Bonus Challenges (Optional, +10 points max)

1. **Time series forecasting:** Predict next 2 weeks of harvests using ARIMA or Prophet
2. **Clustering analysis:** Segment days by environmental conditions, compare yield
3. **Interactive dashboard:** Create Dash/Plotly dashboard for data exploration
4. **Cost-benefit analysis:** Calculate ROI of implementing your recommendations

---

*EcoFusion Academy - Course 304*
*Data Analysis Exercise*
