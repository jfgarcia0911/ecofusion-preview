# Data Analytics Glossary

## Course 304: Precision Agriculture & Data Analytics

---

## A

**Accuracy (Sensor)**
The closeness of a sensor reading to the true value. Expressed as ± units or ± percentage.
*Example: pH sensor with ±0.05 accuracy means reading of 7.00 could actually be 6.95-7.05*

**Accuracy (Model)**
In classification, the proportion of correct predictions out of total predictions.
*Formula: (TP + TN) / (TP + TN + FP + FN)*

**Alert**
Automated notification triggered when a parameter exceeds defined thresholds.
*Example: SMS sent when DO drops below 5.5 mg/L*

**Anomaly Detection**
Identification of data points or patterns that deviate significantly from normal behavior.
*Methods: Z-score, IQR, Isolation Forest*

**API (Application Programming Interface)**
Interface allowing software applications to communicate and exchange data.
*Example: REST API to fetch sensor data from InfluxDB*

**ARIMA**
AutoRegressive Integrated Moving Average - time series forecasting method.
*Used for: Predicting yields, temperature trends*

---

## B

**Bias (Statistical)**
Systematic error in one direction, causing consistent over- or under-estimation.
*Example: Uncalibrated pH sensor consistently reads 0.2 units high*

**Bias (Machine Learning)**
Model's tendency to make assumptions about data, potentially missing patterns (underfitting).
*High bias = too simple model*

**Bias-Variance Tradeoff**
Balance between model complexity (variance) and simplification (bias) for optimal generalization.

---

## C

**Calibration**
Process of adjusting sensor to match known standard references.
*Example: pH calibration using pH 4.01, 7.01, and 10.01 buffer solutions*

**Classification**
ML task of predicting categorical outcomes.
*Example: Predicting disease status (healthy/diseased) from leaf images*

**Coefficient of Determination (R²)**
Proportion of variance in dependent variable explained by independent variable(s).
*Range: 0 to 1; R²=0.85 means model explains 85% of variation*

**Coefficient of Variation (CV)**
Standard deviation expressed as percentage of mean, allowing comparison across different units.
*Formula: CV = (SD / Mean) × 100%*

**Correlation**
Statistical relationship between two variables that change together.
*Important: Correlation ≠ Causation*

**Cross-Validation**
Technique to evaluate model by training on subsets and validating on held-out data.
*Common: k-fold cross-validation (k=5 or 10)*

---

## D

**Dashboard**
Visual display consolidating key metrics and data for monitoring and decision-making.
*Best practice: Critical info prominent, color-coded status*

**Data Lake**
Storage repository holding vast amounts of raw data in native format.
*Contrast to: Data Warehouse (structured, processed data)*

**Decision Tree**
ML algorithm creating tree-like model of decisions and outcomes.
*Use: Classification, regression, interpretable rules*

**Dissolved Oxygen (DO)**
Amount of oxygen dissolved in water, critical for fish and beneficial bacteria.
*Unit: mg/L; Target: >6 mg/L for most fish species*

**DLI (Daily Light Integral)**
Total photosynthetically active radiation received per day.
*Unit: mol/m²/day; Calculation: Average PPFD × photoperiod × 0.0036*

---

## E

**EC (Electrical Conductivity)**
Measure of water's ability to conduct electricity, indicating dissolved salts/nutrients.
*Unit: µS/cm or mS/cm; Aquaponics range: 1,200-1,800 µS/cm typically*

**Edge Computing**
Processing data locally (near source) rather than sending to cloud.
*Benefit: Low latency, works offline, reduced bandwidth*

**Ensemble Learning**
Combining multiple ML models to improve predictions.
*Methods: Voting, stacking, boosting*

**ETL (Extract, Transform, Load)**
Process of extracting data from sources, transforming it, and loading into destination database.

---

## F

**F1-Score**
Harmonic mean of precision and recall, balanced classification metric.
*Formula: 2 × (Precision × Recall) / (Precision + Recall)*

**False Negative (FN)**
Actual positive incorrectly predicted as negative.
*Example: Diseased plant classified as healthy - dangerous miss!*

**False Positive (FP)**
Actual negative incorrectly predicted as positive.
*Example: Healthy plant classified as diseased - unnecessary action*

**FCR (Feed Conversion Ratio)**
Efficiency of converting feed into fish biomass.
*Formula: Feed Given (kg) / Weight Gain (kg); Lower is better; Good: 1.5-1.8 for tilapia*

**Feature Engineering**
Creating new input variables from existing data to improve model performance.
*Example: Creating VPD from temperature and humidity*

**Feature Importance**
Measure of how much each input variable contributes to model predictions.
*Common in: Random Forest, Gradient Boosting*

---

## G

**Gradient Boosting**
Ensemble ML technique building models sequentially, each correcting errors of previous.
*Popular implementations: XGBoost, LightGBM, CatBoost*

**Grafana**
Open-source platform for monitoring and visualization, commonly used with InfluxDB.

---

## H

**Hyperparameter**
Configuration setting for ML algorithm (not learned from data).
*Examples: Learning rate, max depth, number of trees*

**Hyperparameter Tuning**
Systematic search for optimal hyperparameter values.
*Methods: Grid Search, Random Search, Bayesian Optimization*

**Hypothesis Testing**
Statistical method to determine if observed difference is likely due to chance.
*Components: Null hypothesis (H₀), alternative (H₁), p-value, significance level (α)*

---

## I

**InfluxDB**
Time-series database optimized for sensor data and metrics.
*Features: Automatic downsampling, retention policies, continuous queries*

**IoT (Internet of Things)**
Network of physical devices with sensors, software, and connectivity to exchange data.

**IQR (Interquartile Range)**
Difference between 75th and 25th percentiles, measure of statistical dispersion.
*Use: Outlier detection (values beyond Q1-1.5×IQR or Q3+1.5×IQR)*

---

## K

**KPI (Key Performance Indicator)**
Measurable value demonstrating how effectively objectives are being achieved.
*Examples: Yield/sqft/year, FCR, uptime %, cost per pound*

**K-Means Clustering**
Unsupervised ML algorithm grouping data into k clusters based on similarity.

---

## L

**LightGBM**
Gradient boosting framework using tree-based learning, fast and efficient.

**Linear Regression**
Statistical method modeling relationship between dependent variable and one or more independents.
*Formula: y = β₀ + β₁x₁ + β₂x₂ + ... + ε*

---

## M

**MAE (Mean Absolute Error)**
Average absolute difference between predicted and actual values.
*Formula: Σ|yᵢ - ŷᵢ| / n; Same units as target variable*

**MAPE (Mean Absolute Percentage Error)**
MAE expressed as percentage, easy to interpret.
*Formula: (100/n) × Σ|(yᵢ - ŷᵢ) / yᵢ|; Issues when yᵢ near zero*

**Machine Learning (ML)**
Algorithms that learn patterns from data without being explicitly programmed.
*Types: Supervised (labeled data), Unsupervised (unlabeled), Reinforcement (reward-based)*

**MQTT (Message Queuing Telemetry Transport)**
Lightweight messaging protocol ideal for IoT sensor data.
*Features: Publish/subscribe, QoS levels, last will & testament*

---

## N

**NDIR (Non-Dispersive Infrared)**
CO₂ sensor technology using infrared light absorption.
*Advantages: Accurate (±30-50 ppm), stable, minimal drift*

**Neural Network**
ML model inspired by biological neurons, composed of interconnected layers.
*Types: Feedforward, Convolutional (CNN), Recurrent (RNN)*

**Normalization**
Scaling data to standard range, often 0-1.
*Method: MinMaxScaler; Formula: (x - min) / (max - min)*

**NPV (Net Present Value)**
Present value of future cash flows minus initial investment.
*Use: Evaluating long-term ROI of precision agriculture investments*

**NUE (Nutrient Use Efficiency)**
Efficiency of converting applied nutrients into harvested biomass.
*Formula: Harvest (kg) / Fertilizer Applied (kg); Good for leafy greens: 30-50*

---

## O

**Overfitting**
Model performs well on training data but poorly on new data (memorized noise).
*Solutions: Regularization, simpler model, more training data, cross-validation*

---

## P

**P-value**
Probability of observing results if null hypothesis is true.
*Interpretation: p<0.05 typically considered statistically significant*

**PAR (Photosynthetically Active Radiation)**
Light wavelengths (400-700 nm) plants use for photosynthesis.

**PCA (Principal Component Analysis)**
Dimensionality reduction technique finding directions of maximum variance.
*Use: Simplifying correlated environmental variables*

**Pearson Correlation Coefficient (r)**
Measure of linear relationship between two variables.
*Range: -1 (perfect negative) to +1 (perfect positive); 0 = no linear relationship*

**pH**
Measure of acidity/alkalinity on logarithmic scale.
*Range: 0-14; 7=neutral; <7=acidic; >7=alkaline; Target for aquaponics: 6.0-7.5*

**PID Controller**
Proportional-Integral-Derivative feedback control system.
*Use: Maintaining temperature, pH at setpoint*

**PPFD (Photosynthetic Photon Flux Density)**
Number of photons hitting surface per second.
*Unit: µmol/m²/s; Typical for leafy greens: 200-400 µmol/m²/s*

**Precision (Sensor)**
Repeatability of measurements (consistency), independent of accuracy.

**Precision (ML)**
In classification, proportion of positive predictions that are correct.
*Formula: TP / (TP + FP); "Of predicted positives, how many are actually positive?"*

**Predictive Analytics**
Using historical data and ML to forecast future outcomes.
*Example: Predicting next week's harvest based on environmental conditions*

**Prescriptive Analytics**
Recommending actions to achieve desired outcomes through optimization.
*Example: Optimal temperature and light setpoints for maximum yield*

---

## Q

**QoS (Quality of Service)**
MQTT message delivery guarantee levels.
*0 = At most once; 1 = At least once; 2 = Exactly once*

---

## R

**R² → See Coefficient of Determination**

**Random Forest**
Ensemble ML method using multiple decision trees.
*Advantages: Handles non-linearity, provides feature importance, robust to outliers*

**Recall (Sensitivity)**
In classification, proportion of actual positives correctly identified.
*Formula: TP / (TP + FN); "Of actual positives, how many did we catch?"*

**Regression**
ML task predicting continuous numerical outcomes.
*Example: Predicting harvest yield (pounds) from environmental data*

**Regularization**
Technique to prevent overfitting by penalizing model complexity.
*Types: L1 (Lasso), L2 (Ridge)*

**Resolution (Sensor)**
Smallest change sensor can detect.
*Example: pH sensor with 0.01 resolution can distinguish 7.00 from 7.01*

**RMSE (Root Mean Squared Error)**
Square root of average squared differences between predicted and actual.
*Formula: √[Σ(yᵢ - ŷᵢ)² / n]; Penalizes large errors more than MAE*

**ROI (Return on Investment)**
Financial return relative to investment cost.
*Formula: (Net Benefit / Investment) × 100%*

**RTD (Resistance Temperature Detector)**
High-precision temperature sensor (e.g., Pt100).
*Accuracy: ±0.05°C; Use: Critical water temperature monitoring*

---

## S

**Scaler → See Normalization, Standardization**

**Sensor**
Device detecting and measuring physical properties.
*Types: Temperature, pH, DO, EC, light, etc.*

**Sensor Drift**
Gradual change in sensor output over time without calibration.

**SPC (Statistical Process Control)**
Using statistical methods to monitor and control processes.
*Tool: Control charts with UCL, LCL, warning limits*

**Standardization**
Scaling data to mean=0, standard deviation=1.
*Method: StandardScaler; Formula: (x - mean) / std*

**Supervised Learning**
ML using labeled training data (input-output pairs).
*Tasks: Classification, regression*

---

## T

**t-Test**
Statistical test comparing means of two groups.
*Use: A/B testing, comparing treatments*

**TDS (Total Dissolved Solids)**
Total dissolved inorganic and organic substances in water.
*Relationship: TDS (ppm) ≈ EC (µS/cm) × 0.5 to 0.7*

**Time Series**
Data points indexed by time, often equally spaced.
*Components: Trend, seasonality, cyclic, irregular*

**True Negative (TN)**
Actual negative correctly predicted as negative.

**True Positive (TP)**
Actual positive correctly predicted as positive.

---

## U

**Underfitting**
Model too simple to capture data patterns (high bias).
*Symptoms: Poor performance on both training and test data*

**Unsupervised Learning**
ML using unlabeled data to find patterns.
*Tasks: Clustering, dimensionality reduction*

---

## V

**Validation Set**
Data held out from training used to tune hyperparameters.
*Typical split: 60% train, 20% validation, 20% test*

**Variance (Statistical)**
Average squared deviation from mean, measure of spread.
*Formula: s² = Σ(x - x̄)² / (n-1)*

**Variance (ML)**
Model's sensitivity to fluctuations in training data.
*High variance = overfitting*

**VPD (Vapor Pressure Deficit)**
Difference between saturation and actual vapor pressure, driving transpiration.
*Formula: VPD = SVP - AVP; Unit: kPa; Optimal for most crops: 0.8-1.2 kPa*

---

## X

**XGBoost**
Extreme Gradient Boosting - popular, high-performance ML algorithm.
*Common in: Kaggle competitions, production systems*

---

## Z

**Z-Score**
Number of standard deviations a value is from the mean.
*Formula: z = (x - mean) / std; |z| > 3 often considered outlier*

---

## Acronyms Quick Reference

| Acronym | Full Name | Description |
|---------|-----------|-------------|
| AI | Artificial Intelligence | Machines simulating human intelligence |
| ANOVA | Analysis of Variance | Statistical test comparing multiple groups |
| API | Application Programming Interface | Software communication interface |
| ARIMA | AutoRegressive Integrated Moving Average | Time series forecasting method |
| CEA | Controlled Environment Agriculture | Indoor/greenhouse farming |
| CNN | Convolutional Neural Network | Deep learning for images |
| CPU | Central Processing Unit | Computer processor |
| CSV | Comma-Separated Values | Common data file format |
| CV | Cross-Validation | Model evaluation technique |
| DB | Database | Organized data storage |
| DLI | Daily Light Integral | Total daily light (mol/m²/day) |
| DO | Dissolved Oxygen | Oxygen in water (mg/L) |
| EC | Electrical Conductivity | Dissolved salts (µS/cm) |
| ETL | Extract, Transform, Load | Data pipeline process |
| FCR | Feed Conversion Ratio | Feed efficiency metric |
| GPU | Graphics Processing Unit | Accelerator for ML training |
| HTTP | Hypertext Transfer Protocol | Web communication protocol |
| IoT | Internet of Things | Connected sensor devices |
| IQR | Interquartile Range | Q3 - Q1, spread measure |
| JSON | JavaScript Object Notation | Data interchange format |
| KPI | Key Performance Indicator | Performance metric |
| MAE | Mean Absolute Error | Average prediction error |
| MAPE | Mean Absolute Percentage Error | Percentage prediction error |
| ML | Machine Learning | Algorithms learning from data |
| MQTT | Message Queuing Telemetry Transport | IoT messaging protocol |
| NDIR | Non-Dispersive Infrared | CO₂ sensor technology |
| NPV | Net Present Value | Investment evaluation metric |
| NUE | Nutrient Use Efficiency | Fertilizer efficiency metric |
| PAR | Photosynthetically Active Radiation | Plant-usable light |
| PCA | Principal Component Analysis | Dimensionality reduction |
| PDF | Probability Density Function | Statistical distribution |
| PID | Proportional-Integral-Derivative | Feedback control system |
| PPFD | Photosynthetic Photon Flux Density | Light intensity (µmol/m²/s) |
| RDBMS | Relational Database Management System | SQL database |
| REST | Representational State Transfer | API architectural style |
| RH | Relative Humidity | Moisture in air (%) |
| RMSE | Root Mean Squared Error | Prediction error metric |
| ROI | Return on Investment | Financial return % |
| RTD | Resistance Temperature Detector | Precision temp sensor |
| SCADA | Supervisory Control and Data Acquisition | Industrial control system |
| SD | Standard Deviation | Spread measure |
| SQL | Structured Query Language | Database query language |
| TDS | Total Dissolved Solids | Dissolved substances (ppm) |
| TSDB | Time-Series Database | Database for sensor data |
| VPD | Vapor Pressure Deficit | Transpiration driver (kPa) |

---

*EcoFusion Academy - Course 304*
*Data Analytics Glossary - Keep for reference!*
