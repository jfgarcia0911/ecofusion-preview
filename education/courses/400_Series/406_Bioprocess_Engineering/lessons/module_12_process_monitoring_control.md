# Module 12: Process Monitoring and Control

## Learning Objectives

- Identify critical process parameters for bioprocesses
- Select and calibrate sensors and analytical equipment
- Design automated control systems
- Implement Process Analytical Technology (PAT)
- Develop troubleshooting and optimization strategies

## 12.1 Critical Process Variables

### Physical Parameters

```
Parameter        Range          Sensor Type          Importance
Temperature      10-70°C        RTD, Thermocouple   Growth rate, stability
pH               4-9            Glass electrode      Metabolic activity
Dissolved O₂     0-100%         Optical, Clark      Aerobic processes
ORP              -400 to+400mV  Platinum electrode  Redox state
Pressure         0-5 bar        Diaphragm           Aeration, safety
Level            0-100%         Ultrasonic, Float   Volume control
Flow Rate        Variable       Magnetic, Turbine   Feed control
Agitation        0-500 RPM      Tachometer          Mixing intensity
```

### Chemical Parameters

```
Online Measurement:
- Dissolved CO₂ (optical sensor)
- Ammonia (ion-selective electrode)
- Nitrate/Nitrite (ISE, spectrophotometry)
- Volatile Fatty Acids (GC, titration)
- Glucose/Substrate (enzymatic sensor)

Offline Measurement (laboratory):
- Nutrients (ICP-MS, ion chromatography)
- COD/BOD (standard methods)
- Alkalinity (titration)
- Biomass composition (HPLC, GC-MS)
- Product concentration (specific assays)
```

### Biological Parameters

```
Biomass Measurement:
- Optical density (OD₆₀₀) - Real-time
- Dry cell weight - Offline
- Cell count (hemocytometer, flow cytometry)
- Viability (plate count, fluorescence)
- Metabolic activity (respirometry)

Microbial Community:
- qPCR (quantitative PCR) - Population dynamics
- 16S/ITS sequencing - Community structure
- FISH (fluorescence in-situ hybridization)
- Metagenomics - Functional potential
```

## 12.2 Sensor Technology

### Temperature Sensors

```
RTD (Resistance Temperature Detector):
- Accuracy: ±0.1°C
- Range: -200 to +850°C
- Response: Fast (seconds)
- Cost: $$
- Best for: Precision fermentation

Thermocouples:
- Accuracy: ±0.5-2°C
- Range: -200 to +1800°C
- Response: Very fast
- Cost: $
- Best for: Anaerobic digesters, composting

Installation: Sanitary tri-clamp, immersion depth >10 cm
Calibration: Ice point (0°C) + boiling point (100°C) annually
```

### pH Sensors

**Glass Electrode:**

```
Principle: Potential difference across pH-sensitive glass

Advantages:
- Wide range (pH 0-14)
- Good accuracy (±0.02 pH)
- Real-time measurement

Challenges:
- Requires regular calibration (weekly)
- Fragile glass membrane
- Reference junction can clog
- Limited lifespan (6-12 months in bioprocesses)

Calibration:
- 3-point (pH 4.01, 7.00, 10.01 buffers)
- Before each batch or weekly (continuous)
- Temperature compensation essential

Maintenance:
- Daily cleaning (prevent biofilm)
- Storage in pH 4 or KCl solution
- Replace when slope <90% or offset >30 mV
```

### Dissolved Oxygen Sensors

```
Clark Electrode (Polarographic):
Principle: O₂ reduction at cathode generates current
- Accuracy: ±2% of saturation
- Response time: 30-90 seconds
- Requires membrane replacement (monthly)
- Calibration: 0% (N₂ sparging) and 100% (air sparging)

Optical (Luminescence quenching):
Principle: O₂ quenches fluorescence of dye
- Accuracy: ±1% of saturation
- Response time: 10-30 seconds
- No membrane, longer lifetime (1-2 years)
- Calibration: 0% and 100% air saturation
- Preferred for modern applications
```

### Online Analyzers

**NIR Spectroscopy:**

```
Applications:
- Biomass concentration
- Substrate/product concentration
- Moisture content

Advantages:
- Non-invasive (through window)
- Multi-parameter simultaneous
- No sample preparation

Requirements:
- Calibration models (PLS, PCR)
- Minimum 50-100 samples for training
- Periodic recalibration

Cost: $20,000-80,000
```

**Flow Cytometry:**

```
Real-time cell analysis:
- Cell concentration
- Cell size distribution
- Viability (fluorescent staining)
- Population heterogeneity

Automated sampling systems available
Cost: $50,000-150,000
Best for: High-value products, research
```

## 12.3 Control Strategies

### Feedback Control

**PID Controller:**

```
Output = Kp×e(t) + Ki×∫e(t)dt + Kd×de(t)/dt

Where:
e(t) = setpoint - measured value (error)
Kp = proportional gain
Ki = integral gain
Kd = derivative gain

Tuning methods:
1. Ziegler-Nichols
2. Cohen-Coon
3. Auto-tuning algorithms

Applications:
- Temperature control (heating/cooling)
- pH control (acid/base dosing)
- DO control (aeration rate)
- Level control (feed/harvest pumps)
```

**Example: Temperature Control**

```
Fermentation setpoint: 37°C
Measured: 36.5°C
Error: 0.5°C

P-only control (Kp=50):
Output = 50 × 0.5 = 25% heater power
Problem: Steady-state offset

PI control (Kp=50, Ki=5):
Output = 50×0.5 + 5×∫0.5 dt
Integral accumulates → drives error to zero

PID control (Kp=50, Ki=5, Kd=10):
Output = 50×0.5 + 5×∫0.5 dt + 10×d(0.5)/dt
Derivative dampens oscillations

Typical tuning for temperature:
Kp = 20-100
Ki = 0.1-10
Kd = 0-50
```

### Feedforward Control

```
Principle: Anticipate disturbances before they affect process

Example: Substrate feeding in fed-batch
- Measure biomass concentration (X)
- Calculate required feed rate based on growth model
- Adjust feed before substrate depletion
- More stable than waiting for DO spike

F(t) = (μ × X × V) / (YX/S × S_feed)

Advantage: Proactive vs. reactive
Challenge: Requires accurate model
```

### Advanced Control

**Model Predictive Control (MPC):**

```
Uses process model to predict future behavior
Optimizes control actions over prediction horizon

Applications:
- Multi-variable optimization
- Handling constraints (min/max limits)
- Coordinating multiple units

Example: Optimize biogas production
- Predict VFA, pH, biogas from OLR changes
- Optimize feed rate to maximize CH₄
- Subject to constraints (pH >6.5, VFA <2000 mg/L)

Requires: Process model, computational power
Benefit: 10-30% productivity improvement
```

## 12.4 Process Analytical Technology (PAT)

### PAT Framework

```
PAT Goals (FDA guidance, applicable to bioprocessing):
1. Understand the process
2. Control the process based on understanding
3. Design quality into products

Tools:
- Multivariate data analysis
- Process analyzers (online/at-line)
- Process control tools
- Knowledge management

Implementation in bioprocesses:
- Real-time release testing
- Reduced batch failures
- Faster process development
- Continuous improvement
```

### Soft Sensors

```
Definition: Software algorithms estimating hard-to-measure variables

Example: Biomass estimation in opaque broths

Inputs (easily measured):
- Cumulative O₂ consumption
- CO₂ production rate
- Base addition (pH control)
- Temperature
- Agitation power

Model (trained on historical data):
X_est = f(O₂_cum, CO₂, Base, T, P)

Validation:
- Offline samples for calibration
- Adaptive algorithms update parameters
- Confidence intervals provided

Accuracy: ±10-20% typically
Benefit: Continuous estimation without sampling
```

## 12.5 Data Management and SCADA

### SCADA Systems

```
Supervisory Control and Data Acquisition:

Architecture:
┌─────────────────────────────────────┐
│ HMI (Human-Machine Interface)       │ ← Operator interaction
├─────────────────────────────────────┤
│ SCADA Server (Data logging, alarms) │
├─────────────────────────────────────┤
│ PLC/DCS (Control logic)             │ ← Process control
├─────────────────────────────────────┤
│ Field Devices (Sensors, actuators)  │ ← Hardware
└─────────────────────────────────────┘

Features:
- Real-time monitoring (dashboards, trends)
- Alarm management (critical limits)
- Data logging (1-60 second intervals)
- Batch record generation
- Remote access (secure)

Popular platforms:
- Ignition SCADA
- Wonderware
- FactoryTalk
- Open-source: Ignition, SCADA-LTS

Cost: $10,000-100,000 (scale dependent)
```

### Data Analytics

```
Big Data from bioprocesses:
- 100+ parameters
- 1-minute logging
- 100,000+ points per batch
- Multiple batches for comparison

Analysis techniques:

1. Statistical Process Control (SPC)
   - Control charts (Shewhart, CUSUM)
   - Detect process shifts
   - Define normal operating range

2. Principal Component Analysis (PCA)
   - Reduce dimensionality
   - Identify key variables
   - Fault detection

3. Machine Learning
   - Predict yield, quality
   - Optimize setpoints
   - Early failure prediction

Tools:
- Python (pandas, scikit-learn)
- R (statistical analysis)
- MATLAB (process modeling)
- Commercial: SIMCA, AspenTech
```

## 12.6 Troubleshooting and Optimization

### Fault Detection and Diagnosis

```
Multivariate monitoring:

Hotelling's T² statistic:
Measures deviation from normal operation in multi-variable space

Steps:
1. Collect data from successful batches (training set)
2. Calculate covariance matrix and control limits
3. Real-time: Calculate T² for current state
4. If T² > limit: Alarm (process upset)
5. Contribution plots identify problematic variables

Example alarm:
T² = 35.2 (limit = 30.0)
Contributions: pH (40%), VFA (35%), Temperature (15%), Others (10%)
Diagnosis: Likely acidification (pH drop + VFA rise)
Action: Reduce feed rate, add alkalinity
```

### Optimization Strategies

**Design of Experiments (DOE):**

```
Systematic variation to find optimal conditions

Example: Optimize enzyme production

Factors:
- Temperature (25-35°C)
- pH (5-7)
- Agitation (100-300 RPM)
- Substrate concentration (50-150 g/L)

Design: 2⁴ factorial (16 experiments) or fractional factorial

Analysis:
- ANOVA (identify significant factors)
- Response surface methodology
- Determine optimal settings

Result: Temperature=30°C, pH=6, 200 RPM, 100 g/L substrate
Enzyme activity increased 45% vs. baseline
```

**Evolutionary Operation (EVOP):**

```
Continuous improvement during production:

1. Make small changes to setpoints
2. Measure response (productivity, quality)
3. Statistical analysis (is change significant?)
4. Move in direction of improvement
5. Repeat

Advantages:
- No production interruption
- Uses production data
- Gradual, low-risk optimization

Example:
Baseline: 35°C, productivity = 1.5 g/L/day
Test: 35.5°C → productivity = 1.6 g/L/day (significant)
New baseline: 35.5°C
Next test: 36°C...
```

## Summary

Effective process monitoring and control are essential for stable, efficient bioprocess operation. Modern systems integrate multiple sensors, automated control, and data analytics to maintain optimal conditions, detect faults early, and continuously improve performance.

## Key Takeaways

1. Critical parameters: Temperature, pH, DO, substrate, biomass
2. Sensor selection based on accuracy, reliability, cost
3. PID control standard for single-loop applications
4. Advanced control (MPC, soft sensors) for complex processes
5. PAT framework enables real-time quality assurance
6. SCADA systems provide comprehensive monitoring and control
7. Data analytics identify optimization opportunities
8. Troubleshooting requires multivariate analysis

## Further Reading

- Seborg, D.E. et al. (2016). *Process Dynamics and Control*, 4th ed.
- Stephanopoulos, G. (1984). *Chemical Process Control*.
- FDA (2004). *Guidance for Industry: PAT Framework*.

## Review Questions

1. List five critical process parameters for aerobic fermentation.
2. Compare Clark electrode vs. optical DO sensors.
3. Explain PID controller components and tuning.
4. Design a control strategy for pH in anaerobic digester (setpoint 7.0).
5. What is a soft sensor and when is it useful?
6. Describe SCADA system architecture.
7. How can PCA assist in fault detection?
8. Design a DOE for optimizing compost temperature profile.

---

**Next Module:** Module 13 - Scale-up and Economic Analysis
