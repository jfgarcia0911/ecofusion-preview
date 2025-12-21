# ML Workflow Diagram for Agricultural Applications

## Complete ML Development Lifecycle

```
┌────────────────────────────────────────────────────────────────────┐
│                    PHASE 1: PROBLEM DEFINITION                      │
└────────────────────────────────────────────────────────────────────┘
                              │
                 ┌────────────┼────────────┐
                 │            │            │
        ┌────────▼───────┐   │   ┌────────▼───────┐
        │  Define Goals  │   │   │  Success       │
        │  & Objectives  │   │   │  Metrics       │
        └────────────────┘   │   └────────────────┘
                             │
                    ┌────────▼────────┐
                    │  Assess         │
                    │  Feasibility    │
                    └────────┬────────┘
                             │
┌────────────────────────────▼────────────────────────────────────────┐
│                    PHASE 2: DATA COLLECTION                          │
└──────────────────────────────────────────────────────────────────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
   ┌────▼─────┐       ┌─────▼──────┐      ┌─────▼──────┐
   │ Sensors  │       │  Manual    │      │  External  │
   │  IoT     │       │  Records   │      │  Sources   │
   └────┬─────┘       └─────┬──────┘      └─────┬──────┘
        │                   │                    │
        └───────────────────┼────────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────────┐
│                    PHASE 3: DATA PREPARATION                         │
└──────────────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼─────┐       ┌─────▼──────┐     ┌─────▼──────┐
   │  Clean   │       │  Explore   │     │  Transform │
   │  Data    │       │  & Analyze │     │  & Engineer│
   └────┬─────┘       └─────┬──────┘     └─────┬──────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                   ┌────────▼────────┐
                   │  Split Data     │
                   │  Train/Val/Test │
                   └────────┬────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────────┐
│                    PHASE 4: MODEL DEVELOPMENT                        │
└──────────────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼─────┐       ┌─────▼──────┐     ┌─────▼──────┐
   │  Select  │       │  Train     │     │  Tune      │
   │Algorithm │       │  Model     │     │  Hyper-    │
   │          │       │            │     │  parameters│
   └────┬─────┘       └─────┬──────┘     └─────┬──────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────────┐
│                    PHASE 5: MODEL EVALUATION                         │
└──────────────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼─────┐       ┌─────▼──────┐     ┌─────▼──────┐
   │  Test    │       │  Cross-    │     │  Compare   │
   │  Set     │       │  Validate  │     │  Models    │
   │Performance│      │            │     │            │
   └────┬─────┘       └─────┬──────┘     └─────┬──────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                     ┌──────▼──────┐
                     │  Meets      │
                     │  Requirements?│
                     └──────┬──────┘
                     Yes │   │ No
                         │   └─────► Return to Phase 4
                         │
┌────────────────────────▼─────────────────────────────────────────────┐
│                    PHASE 6: MODEL DEPLOYMENT                          │
└───────────────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼─────┐       ┌─────▼──────┐     ┌─────▼──────┐
   │  Package │       │  Create    │     │  Deploy    │
   │  Model   │       │  API       │     │  to Prod   │
   └────┬─────┘       └─────┬──────┘     └─────┬──────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
┌───────────────────────────▼─────────────────────────────────────────┐
│                 PHASE 7: MONITORING & MAINTENANCE                    │
└──────────────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┼───────────────────┐
        │                   │                   │
   ┌────▼─────┐       ┌─────▼──────┐     ┌─────▼──────┐
   │  Track   │       │  Detect    │     │  Retrain   │
   │Performance│      │  Drift     │     │  Model     │
   └────┬─────┘       └─────┬──────┘     └─────┬──────┘
        │                   │                   │
        └───────────────────┼───────────────────┘
                            │
                            ▼
                   Continuous Improvement
                   (Return to Phase 2 or 4)
```

---

## Agricultural ML Project Types & Workflows

### 1. Yield Prediction Project

```
Data Sources          Processing            Models              Output
────────────          ──────────            ──────              ──────
Environmental    ──►  Feature          ──►  Ensemble      ──►   Yield
 Sensors              Engineering           (RF, XGB)          Forecast
Historical       ──►  Normalization    ──►  Time-Series   ──►   Planning
 Yields               Time-Series           (LSTM)             Dashboard
Crop Data        ──►  Aggregation
Weather          ──►  Lag Features

Timeline: 3-6 months
Complexity: Medium
ROI: High (15-25% improvement)
```

### 2. Disease Detection Project

```
Data Sources          Processing            Models              Output
────────────          ──────────            ──────              ──────
Leaf Images      ──►  Augmentation     ──►  CNN           ──►   Disease
Symptom Data          Normalization         (ResNet,            Classification
Expert Labels    ──►  Resizing              EfficientNet)  ──►  Confidence
Multi-spectral   ──►  Color Space      ──►  Transfer      ──►   Treatment
 Images               Transforms            Learning            Recommendations

Timeline: 2-4 months
Complexity: Medium-High
ROI: Very High (20-40% loss prevention)
```

### 3. Climate Control Project

```
Data Sources          Processing            Models              Output
────────────          ──────────            ──────              ──────
HVAC Sensors     ──►  State            ──►  RL Agent      ──►   Control
Climate Data          Representation        (DQN, PPO)          Actions
Energy Costs     ──►  Reward           ──►  Policy        ──►   Setpoints
Plant Response   ──►  Normalization         Network        ──►   Optimization
                                                                  Strategy

Timeline: 4-8 months
Complexity: High
ROI: High (10-25% energy savings)
```

### 4. Quality Grading Project

```
Data Sources          Processing            Models              Output
────────────          ──────────            ──────              ──────
Product Images   ──►  Detection        ──►  Object        ──►   Quality
Size/Weight           Segmentation          Detection           Grade
Color Data       ──►  Feature          ──►  Classification ──►  Price
Expert Grades    ──►  Extraction            (CNN + RF)          Category
                                                            ──►  Sorting
                                                                 Instructions

Timeline: 2-3 months
Complexity: Medium
ROI: Medium (5-15% premium pricing)
```

---

## Key Decision Points

### Algorithm Selection Decision Tree

```
START: What type of output?
   │
   ├─► Continuous Number
   │    └─► What type of data?
   │         ├─► Tabular → Random Forest, XGBoost, Neural Net
   │         ├─► Time-Series → ARIMA, LSTM, Prophet
   │         └─► Images → CNN Regression
   │
   ├─► Category/Class
   │    └─► What type of data?
   │         ├─► Tabular → Random Forest, XGBoost, SVM
   │         ├─► Text → BERT, NLP models
   │         └─► Images → CNN (ResNet, EfficientNet)
   │
   ├─► Sequential Decision
   │    └─► Reinforcement Learning (DQN, PPO, A3C)
   │
   └─► Groups/Clusters
        └─► Unsupervised (K-Means, DBSCAN)
```

### Data Size Requirements

```
Problem Type              Minimum Data    Recommended Data    Notes
─────────────            ─────────────   ────────────────    ─────
Simple Regression        100 samples     1,000+ samples       More features = more data needed
Complex Regression       1,000 samples   10,000+ samples      Non-linear relationships
Binary Classification    100 per class   1,000+ per class     Balanced classes important
Multi-class (5 classes)  50 per class    500+ per class       More classes = more data
Image Classification     100 per class   1,000+ per class     Transfer learning helps
Object Detection         500 objects     5,000+ objects       Annotations expensive
Time-Series Forecast     2-3 cycles      10+ cycles           Seasonal patterns need data
Reinforcement Learning   N/A             Million+ steps       Simulation helps
```

---

## Performance Benchmarks

### Expected Model Performance by Application

```
Application              Metric          Good         Excellent    World-Class
───────────              ──────          ────         ─────────    ───────────
Yield Prediction         MAE             < 5%         < 3%         < 2%
                        R²              > 0.80       > 0.90       > 0.95

Disease Detection        Accuracy        > 85%        > 92%        > 97%
                        Precision       > 80%        > 90%        > 95%

Quality Grading          Accuracy        > 85%        > 92%        > 97%
                        Agreement       > 90%        > 95%        > 98%

Climate Forecast         MAE             < 2°C        < 1°C        < 0.5°C
                        RMSE            < 3°C        < 1.5°C      < 1°C

Resource Optimization    Improvement     > 10%        > 20%        > 30%
                        ROI             > 100%       > 300%       > 500%
```

---

## Common Pitfalls & Solutions

```
┌─────────────────────────────────────────────────────────────────┐
│                     PITFALL PREVENTION MATRIX                    │
└─────────────────────────────────────────────────────────────────┘

PITFALL                    WARNING SIGN                 SOLUTION
───────                    ────────────                 ────────
Data Leakage               Perfect training accuracy    Check feature engineering
                          Poor test performance         Time-based split

Overfitting                Large gap: train vs test     Regularization
                          Complex model, small data     More data or simpler model

Underfitting               Poor train & test scores     More complex model
                          High bias                     Better features

Class Imbalance            One class dominates          Resampling, weighted loss
                          Poor minority class perf      Synthetic data (SMOTE)

Scale Differences          Some features dominate       Normalization/Standardization
                          Poor convergence             Feature scaling

Temporal Leakage           Unrealistic performance      Proper time-based validation
                          Future data in training      Sequential splits

Poor Features              Low feature importance       Domain expertise
                          Model can't learn            Feature engineering

Insufficient Data          High variance                Data augmentation
                          Can't generalize             Transfer learning
```

---

## Deployment Architecture Options

```
┌─────────────────────────────────────────────────────────────────┐
│                  DEPLOYMENT PATTERNS                             │
└─────────────────────────────────────────────────────────────────┘

PATTERN 1: Batch Processing
────────────────────────────
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Data    │ ───► │  Batch   │ ───► │  Model   │ ───► │ Results  │
│  Store   │      │  Job     │      │ Inference│      │  to DB   │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                        │
                  Scheduled (daily/weekly)

Use: Yield forecasts, reports, bulk processing
Pros: Simple, efficient for large datasets
Cons: Not real-time, delayed insights


PATTERN 2: Real-Time API
────────────────────────
┌──────────┐      ┌──────────┐      ┌──────────┐
│  Client  │ ───► │   API    │ ───► │  Model   │
│ Request  │ ◄─── │ Server   │ ◄─── │ Response │
└──────────┘      └──────────┘      └──────────┘
                        │
                   Always available

Use: Disease detection, instant predictions
Pros: Real-time, flexible, scalable
Cons: Latency considerations, API management


PATTERN 3: Edge Deployment
───────────────────────────
┌──────────┐                ┌──────────┐
│  Edge    │                │  Cloud   │
│  Device  │ ───────sync──► │  Server  │
│ + Model  │ ◄──updates───  │          │
└──────────┘                └──────────┘
     │
  Local inference

Use: Field devices, cameras, robots
Pros: Low latency, works offline, privacy
Cons: Resource constraints, deployment complexity


PATTERN 4: Streaming
────────────────────
┌──────────┐      ┌──────────┐      ┌──────────┐      ┌──────────┐
│  Data    │ ───► │  Stream  │ ───► │  Model   │ ───► │  Alert   │
│  Stream  │      │ Process  │      │ Inference│      │  System  │
└──────────┘      └──────────┘      └──────────┘      └──────────┘
                        │
                  Continuous flow

Use: Sensor monitoring, anomaly detection
Pros: Real-time insights, handles volume
Cons: Complex infrastructure, cost
```

---

## Resource Requirements Planning

```
PROJECT PHASE          TIME        PERSONNEL           COMPUTE             COST
─────────────          ────        ─────────           ───────             ────
Problem Definition     1-2 weeks   Domain expert       None                Low
                                  Data scientist

Data Collection       2-4 weeks   Data engineer       Minimal             Medium
                                  Operators

Data Preparation      2-3 weeks   Data scientist      Workstation         Low
                                                      (16GB+ RAM)

Model Development     3-6 weeks   ML engineer         GPU recommended     Medium
                                  Data scientist      (Cloud or local)

Model Evaluation      1-2 weeks   ML engineer         CPU sufficient      Low
                                  Domain expert

Deployment           2-4 weeks   DevOps engineer     Production server   High
                                  ML engineer

Monitoring           Ongoing     Operations team     Logging infra       Medium
                                  ML engineer

────────────────────────────────────────────────────────────────────────────
TOTAL                3-6 months  2-4 people          GPU + server        Medium-High
```

---

*ML Workflow Diagram Handout - Course 404*
