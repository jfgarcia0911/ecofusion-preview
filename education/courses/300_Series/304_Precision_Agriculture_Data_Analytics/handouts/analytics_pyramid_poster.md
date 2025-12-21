# Analytics Pyramid Poster

## Course 304: Precision Agriculture & Data Analytics

**Format:** Large poster (24"×36" or A1) | **Purpose:** Reference guide for data analytics maturity

---

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                                                                              ║
║                        DATA ANALYTICS PYRAMID                                ║
║                  From Data Collection to Prescriptive Action                 ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║                                                                              ║
║                              ┌─────────────────┐                             ║
║                              │   PRESCRIPTIVE  │                             ║
║                              │  "What should   │                             ║
║                              │    we do?"      │                             ║
║                              │                 │                             ║
║                              │  ⚙ Optimization │                             ║
║                              │  ⚙ Automation   │                             ║
║                              │  ⚙ Control      │                             ║
║                              │                 │                             ║
║                              │ VALUE: HIGHEST  │                             ║
║                           ┌──┴─────────────────┴──┐                          ║
║                           │      PREDICTIVE       │                          ║
║                           │    "What will         │                          ║
║                           │     happen?"          │                          ║
║                           │                       │                          ║
║                           │  📈 Forecasting       │                          ║
║                           │  📈 ML Models         │                          ║
║                           │  📈 Risk Analysis     │                          ║
║                           │                       │                          ║
║                           │ VALUE: HIGH           │                          ║
║                        ┌──┴───────────────────────┴──┐                       ║
║                        │        DIAGNOSTIC          │                        ║
║                        │      "Why did it           │                        ║
║                        │        happen?"            │                        ║
║                        │                            │                        ║
║                        │  🔍 Root Cause Analysis    │                        ║
║                        │  🔍 Correlation Studies    │                        ║
║                        │  🔍 Drill-Down             │                        ║
║                        │                            │                        ║
║                        │ VALUE: MEDIUM              │                        ║
║                     ┌──┴────────────────────────────┴──┐                     ║
║                     │           DESCRIPTIVE            │                     ║
║                     │         "What happened?"         │                     ║
║                     │                                  │                     ║
║                     │  📊 Reports & Dashboards         │                     ║
║                     │  📊 KPIs & Metrics               │                     ║
║                     │  📊 Alerts & Summaries           │                     ║
║                     │                                  │                     ║
║                     │ VALUE: BASELINE                  │                     ║
║                  ┌──┴──────────────────────────────────┴──┐                  ║
║                  │              DATA                      │                  ║
║                  │   Collection │ Storage │ Quality       │                  ║
║                  │                                        │                  ║
║                  │  💾 Sensors & Instruments              │                  ║
║                  │  💾 Databases & Data Lakes             │                  ║
║                  │  💾 Validation & Cleaning              │                  ║
║                  │                                        │                  ║
║                  │ VALUE: FOUNDATION                      │                  ║
║                  └────────────────────────────────────────┘                  ║
║                                                                              ║
║   ←─────────────── COMPLEXITY INCREASES ─────────────→                       ║
║   ←─────────────── VALUE INCREASES ─────────────→                            ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  PRECISION AGRICULTURE APPLICATIONS BY LEVEL                                 ║
║                                                                              ║
║  DATA LAYER                                                                  ║
║  ├─ Sensor deployment (temp, pH, DO, EC, etc.)                              ║
║  ├─ Data logging (time-series database)                                     ║
║  ├─ Quality checks (validation, calibration)                                ║
║  └─ Example: "We collect temperature data every 5 minutes"                  ║
║                                                                              ║
║  DESCRIPTIVE LAYER                                                           ║
║  ├─ Real-time dashboards showing current status                             ║
║  ├─ Historical reports (daily, weekly, monthly)                             ║
║  ├─ KPI tracking (yield/sqft, FCR, uptime %)                                ║
║  └─ Example: "Average DO was 6.5 mg/L last week"                            ║
║                                                                              ║
║  DIAGNOSTIC LAYER                                                            ║
║  ├─ Correlation analysis (light vs. yield)                                  ║
║  ├─ Trend identification (pH stability over time)                           ║
║  ├─ Anomaly investigation (what caused DO drop?)                            ║
║  └─ Example: "Low yields correlate with high temperature"                   ║
║                                                                              ║
║  PREDICTIVE LAYER                                                            ║
║  ├─ Yield forecasting (next week's harvest)                                 ║
║  ├─ Equipment failure prediction                                            ║
║  ├─ Resource demand forecasting (fertilizer, energy)                        ║
║  └─ Example: "ML model predicts 520 lbs harvest next week"                  ║
║                                                                              ║
║  PRESCRIPTIVE LAYER                                                          ║
║  ├─ Automated climate control (optimal temp/humidity)                       ║
║  ├─ Fertigation optimization (when/how much to dose)                        ║
║  ├─ Production scheduling (maximize revenue)                                ║
║  └─ Example: "Set temp to 24.2°C and EC to 1,580 µS/cm for optimal yield"  ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  IMPLEMENTATION ROADMAP                                                      ║
║                                                                              ║
║  MONTHS 1-3: Build Data Foundation                                          ║
║  ✓ Deploy core sensors                                                      ║
║  ✓ Set up database (InfluxDB + PostgreSQL)                                  ║
║  ✓ Create basic dashboards                                                  ║
║  ✓ Establish data quality processes                                         ║
║  Investment: $5K-$15K                                                        ║
║                                                                              ║
║  MONTHS 4-6: Enable Descriptive Analytics                                   ║
║  ✓ Automated reporting                                                      ║
║  ✓ KPI tracking                                                             ║
║  ✓ Alert systems                                                            ║
║  ✓ Historical analysis                                                      ║
║  Investment: $3K-$8K                                                         ║
║                                                                              ║
║  MONTHS 7-12: Diagnostic & Predictive                                       ║
║  ✓ Correlation studies                                                      ║
║  ✓ Root cause analysis tools                                                ║
║  ✓ First ML models (yield prediction)                                       ║
║  ✓ Advanced visualizations                                                  ║
║  Investment: $5K-$15K                                                        ║
║                                                                              ║
║  YEAR 2+: Prescriptive & Optimization                                        ║
║  ✓ Automated control systems                                                ║
║  ✓ Multi-objective optimization                                             ║
║  ✓ Reinforcement learning                                                   ║
║  ✓ Continuous improvement                                                   ║
║  Investment: $10K-$30K/year                                                  ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  QUICK WINS BY LEVEL                                                         ║
║                                                                              ║
║  DATA (Week 1):                  DESCRIPTIVE (Week 2):                       ║
║  • Install DO sensor in          • Create pH trend chart                     ║
║    fish tank                     • Set up DO alerts                          ║
║  • Log to database               • Daily production summary                  ║
║                                                                              ║
║  DIAGNOSTIC (Month 2):           PREDICTIVE (Month 6):                       ║
║  • Analyze temp vs. yield        • Build yield forecast model                ║
║  • Identify optimal EC range     • Predict maintenance needs                 ║
║                                                                              ║
║  PRESCRIPTIVE (Month 12):                                                    ║
║  • Automated pH adjustment                                                   ║
║  • Dynamic climate setpoints based on energy cost                            ║
║                                                                              ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  SUCCESS METRICS                                                             ║
║                                                                              ║
║  Level 1 (Data): Sensor uptime >95%, Data completeness >90%                 ║
║  Level 2 (Descriptive): Daily dashboard review, <30 min alert response      ║
║  Level 3 (Diagnostic): 3+ optimization insights per quarter                 ║
║  Level 4 (Predictive): Forecast accuracy >85% (R² or MAPE)                  ║
║  Level 5 (Prescriptive): 15%+ yield increase, 20%+ cost reduction           ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## How to Use This Poster

1. **Print large format** (24"×36" minimum) and display in office/control room
2. **Reference during planning** - Where are we now? Where do we want to be?
3. **Team alignment** - Ensure everyone understands the progression
4. **Investor presentations** - Show ROI growth through analytics maturity
5. **Training tool** - Onboard new team members to analytics strategy

---

## Digital Version

Available in course materials as:
- High-resolution PNG (for printing)
- Editable SVG (for customization)
- PowerPoint slide (for presentations)

---

*EcoFusion Academy - Course 304*
*Analytics Pyramid Poster*
