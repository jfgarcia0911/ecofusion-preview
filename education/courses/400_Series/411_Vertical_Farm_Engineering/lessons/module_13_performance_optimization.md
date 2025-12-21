# Module 13: Performance Monitoring and Optimization

## Learning Objectives

- Establish key performance indicators for vertical farms
- Implement data analytics for performance tracking
- Apply continuous improvement methodologies
- Design predictive maintenance programs
- Execute retrofit and upgrade projects

## 1. Key Performance Indicators (KPIs)

### 1.1 Production KPIs

**Yield Metrics:**
```
1. Yield per Square Meter:
   Formula: Total harvest weight (kg) / Growing area (m²) / Time period
   Target: 25-35 kg/m²/year for leafy greens
   Benchmark: Track monthly, compare to design predictions

2. Turns per Year:
   Formula: 365 days / (Growing period + Turnover time)
   Target: 12-15 for lettuce (28-30 day cycles)
   Impact: More turns = higher annual production

3. Plant Survival Rate:
   Formula: (Harvested plants / Planted seeds) × 100%
   Target: >95% for mature facilities
   Tracking: By crop type, by zone

4. Crop Quality Score:
   Metrics: Visual appearance, size uniformity, nutrient content
   Scale: 1-10 rating system
   Target: Average >8.0

5. Waste Percentage:
   Formula: (Discarded weight / Total harvest weight) × 100%
   Target: <5% for established operations
   Categories: Disease, pest damage, size, quality
```

### 1.2 Resource Efficiency KPIs

**Energy Efficiency:**
```
1. Energy per Kilogram:
   Formula: Total kWh / Total kg harvested
   Target: <15 kWh/kg for leafy greens
   Best in class: 10-12 kWh/kg

2. Lighting Efficiency:
   Formula: kWh lighting / kg harvested
   Target: <10 kWh/kg
   Optimization: Increase LED efficacy, optimize DLI

3. HVAC Efficiency:
   Formula: kWh HVAC / kg harvested
   Target: <4 kWh/kg
   Optimization: Heat recovery, load management

4. Power Usage Effectiveness (PUE-VF):
   Formula: Total facility power / Growing system power
   Target: <1.4
   Best in class: <1.3

Monthly Energy Dashboard:
┌─────────────────────────────────┐
│ Energy per kg:   12.3 kWh/kg    │ ↓ 8% vs. last month
│ PUE-VF:          1.38            │ ↑ 2% vs. last month
│ Total kWh:       45,280          │ Target: <48,000 ✓
│ Cost:            $5,434          │ Budget: $5,760 ✓
└─────────────────────────────────┘
```

**Water Efficiency:**
```
1. Water per Kilogram:
   Formula: Total liters / kg harvested
   Target: <20 L/kg (vs. 250+ L/kg for field agriculture)
   Components: Evapotranspiration + losses

2. Water Reuse Percentage:
   Formula: (Recirculated water / Total water) × 100%
   Target: >95%
   Tracking: Monitor makeup water additions

3. Nutrient Use Efficiency:
   Formula: kg nutrient input / kg harvest output
   Target: Minimize waste while maintaining crop quality
   Optimization: Precision fertigation, reduce purging

Water Dashboard:
- Daily water use: 2,450 L (Target: <2,600 L) ✓
- Recirculation rate: 96.5% (Target: >95%) ✓
- Water cost: $7.35 (municipal rate)
```

### 1.3 Economic KPIs

**Financial Performance:**
```
1. Operating Cost per Kilogram:
   Components:
   - Labor: $X.XX/kg
   - Energy: $X.XX/kg
   - Seeds/inputs: $X.XX/kg
   - Maintenance: $X.XX/kg
   - Overhead: $X.XX/kg
   Target: <$3.00/kg total

2. Revenue per Square Meter:
   Formula: Total sales revenue / Growing area / Time
   Target: >$500/m²/year
   Drivers: Yield, price, crop mix

3. Contribution Margin:
   Formula: (Revenue - Variable costs) / Revenue × 100%
   Target: >60%
   Improvement: Increase yield, reduce costs, premium pricing

4. Return on Assets (ROA):
   Formula: Net income / Total assets × 100%
   Target: >15% annually
   Benchmark: Compare to industry standards

Economic Dashboard:
┌─────────────────────────────────┐
│ Monthly Production: 3,250 kg    │
│ Revenue:           $22,750       │ ($7/kg average)
│ Operating Cost:    $9,425        │ ($2.90/kg) ✓
│ Contribution:      $13,325       │ (59%)
│ Margin vs. Target: -1% (target 60%)
└─────────────────────────────────┘
```

## 2. Data Analytics and Trending

### 2.1 Data Collection Architecture

**Automated Data Aggregation:**
```
Data Sources:
├─ BMS (Building Management System)
│  ├─ Environmental sensors (60 sec intervals)
│  ├─ Equipment status (5 min intervals)
│  └─ Alarms and events (real-time)
├─ Energy Meters (15 min intervals)
├─ Production Tracking (manual entry + barcode)
│  ├─ Seeding logs
│  ├─ Transplant logs
│  └─ Harvest logs
├─ Water Quality (30 min intervals)
├─ Crop Monitoring (daily photos, weekly measurements)
└─ Financial System (weekly/monthly)

Data Warehouse:
- Time-series database (InfluxDB, TimescaleDB)
- Retention: Raw data 1 year, aggregated indefinitely
- Backup: Daily incremental, weekly full
- Access: API for dashboards and analytics

Analytics Tools:
- Real-time dashboards (Grafana, Power BI)
- Statistical analysis (Python, R)
- Machine learning (TensorFlow for predictive models)
- Reporting (automated weekly/monthly reports)
```

### 2.2 Correlation Analysis

**Identifying Performance Drivers:**
```
Example Analysis: Yield vs. Environmental Conditions

Data Set:
- 52 weeks of production data
- Variables: Avg temp, avg VPD, avg PPFD, avg CO₂, yield

Statistical Methods:
1. Correlation Matrix:
              Yield   Temp    VPD    PPFD    CO₂
   Yield      1.00
   Temp       0.23    1.00
   VPD        0.67    0.45   1.00
   PPFD       0.82    0.15   0.42   1.00
   CO₂        0.41    0.18   0.31   0.28   1.00

Interpretation:
- Strong correlation: PPFD (0.82) - Light is primary driver
- Moderate correlation: VPD (0.67), CO₂ (0.41)
- Weak correlation: Temp (0.23)

2. Multiple Regression:
   Yield = β₀ + β₁(PPFD) + β₂(VPD) + β₃(CO₂) + β₄(Temp)

   Results:
   R² = 0.78 (model explains 78% of yield variation)
   Significant factors: PPFD (p<0.01), VPD (p<0.01)
   Non-significant: Temp (p=0.18)

Actionable Insights:
- Optimize light delivery for maximum yield impact
- Maintain VPD in 0.8-1.2 kPa range
- Temperature can vary slightly without major yield impact
- CO₂ enrichment provides moderate benefit

Implementation:
- Adjust DLI targets based on crop stage
- Tighten VPD control tolerances
- Relax temperature tolerances (save energy)
- Evaluate CO₂ enrichment ROI
```

### 2.3 Predictive Analytics

**Forecasting and Optimization:**
```
Application 1: Harvest Forecasting

Model: Time series + growth curve fitting
Inputs: Planting date, crop type, environmental history
Output: Predicted harvest date ± 2 days

Benefits:
- Better labor scheduling
- Accurate customer commitments
- Optimized harvest sequence

Accuracy: 85-90% within ±2 days

Application 2: Energy Consumption Prediction

Model: Machine learning (Random Forest)
Inputs: Weather forecast, production schedule, historical patterns
Output: Hourly energy forecast for next 7 days

Benefits:
- Demand response participation
- Load shifting optimization
- Budget variance early warning

Accuracy: 92% within ±5%

Application 3: Anomaly Detection

Model: Statistical process control + machine learning
Inputs: Real-time sensor data
Output: Alerts for abnormal conditions

Examples:
- Gradual sensor drift before complete failure
- Developing plant stress before visible symptoms
- Equipment degradation trends

Benefits:
- Prevent crop losses
- Reduce unplanned downtime
- Optimize maintenance timing
```

## 3. Continuous Improvement Methods

### 3.1 Plan-Do-Check-Act (PDCA) Cycle

**Structured Improvement Process:**
```
Example: Reducing Energy Consumption

PLAN:
Problem: Energy cost $52,000/year, target $45,000
Goal: 13% reduction ($7,000 savings)
Analysis: Lighting (62%), HVAC (28%), other (10%)
Hypothesis: LED upgrade and HVAC optimization can achieve goal
Plan:
  1. Upgrade 30% of LEDs to higher efficiency (3.0 vs. 2.5 μmol/J)
  2. Implement night setback for HVAC
  3. Install VFDs on remaining fixed-speed fans
Timeline: 3 months
Budget: $25,000 investment

DO:
Month 1: LED upgrades (10 kW reduction achieved)
Month 2: HVAC programming for night setback (3 kW avg reduction)
Month 3: VFD installation (4 kW avg reduction)
Total reduction: 17 kW average (from 125 kW to 108 kW baseline)

CHECK:
Energy use before: 125 kW × 16 hr/day × 365 days = 730,000 kWh/year
Energy use after: 108 kW × 16 hr/day × 365 days = 631,680 kWh/year
Reduction: 98,320 kWh (13.5%) ✓ Goal achieved
Cost savings: 98,320 × $0.12 = $11,798/year (exceeds $7,000 target)
Payback: $25,000 / $11,798 = 2.1 years

ACT:
Success! Standardize changes:
- Specify high-efficiency LEDs for all future installations
- Add night setback to standard operating procedures
- Budget VFDs on all variable-load motors going forward
- Share results with team, celebrate success

New Plan:
Next target: Water efficiency improvement (reduce by 10%)
```

### 3.2 Six Sigma for Quality Improvement

**DMAIC Methodology:**
```
Example: Reducing Plant Defect Rate

DEFINE:
Problem: 8.5% of plants discarded for quality issues
Goal: Reduce to <5% (industry benchmark)
Impact: 3.5% improvement × 100,000 plants/year = 3,500 plants
Value: 3,500 plants × $2.50 = $8,750/year

MEASURE:
Collect data on defect types:
- Leaf damage: 3.2%
- Undersized: 2.8%
- Disease: 1.5%
- Other: 1.0%
Total: 8.5%

Measurement system analysis: Verify defect classification consistent

ANALYZE:
Root cause analysis:
Leaf damage: Caused by handling during transplant (80% correlation)
Undersized: Occurs in zones with lowest PPFD (statistical significance)
Disease: No clear pattern, random occurrence

Pareto analysis: Leaf damage + undersized = 70% of defects

IMPROVE:
Solutions implemented:
1. Leaf damage: Train operators on gentle handling, redesign gripper
2. Undersized: Increase PPFD in low-light zones by 15%
3. Disease: Improve sanitation, increase air circulation

Pilot test: 10,000 plants with improvements
Results: Defect rate 4.8% (meets goal)

CONTROL:
Standardize improvements:
- Update training materials
- Calibrate lighting annually
- Monitor defect rate weekly
- Control charts to detect drift

Sustain: Defect rate tracked, remains at 4.5-5.0% (stable)
```

## 4. Predictive Maintenance

### 4.1 Condition-Based Monitoring

**Equipment Health Tracking:**
```
Pump Performance Monitoring:

Baseline Establishment:
When new, measure:
- Flow rate at set pressure: 45 GPM @ 35 PSI
- Power consumption: 1.2 kW
- Vibration: 0.15 in/sec RMS
- Temperature: 110°F bearing temp

Ongoing Monitoring (automated):
Weekly trending:
- Flow rate: Still 45 GPM ✓
- Power: Now 1.3 kW (↑ 8%)
- Vibration: 0.22 in/sec (↑ 47%)
- Temperature: 125°F (↑ 15°F)

Analysis:
Power increase + vibration increase + temperature increase =
Likely causes: Bearing wear, misalignment, or cavitation

Recommendation:
- Schedule maintenance within 2 weeks (before failure)
- Order replacement bearings
- Plan for 4-hour downtime
- Prevent unexpected failure and crop impact

Predictive vs. Reactive Maintenance:
Predictive:
- Planned downtime during non-critical period
- Parts on hand ($150)
- Labor: 4 hours × $50/hr = $200
- Total cost: $350

Reactive (if allowed to fail):
- Emergency downtime during harvest (lost revenue: $2,000)
- Rush parts order ($300)
- Overtime labor: 8 hours × $75/hr = $600
- Total cost: $2,900

Savings: $2,550 per incident (7.3× cheaper to be proactive)
```

### 4.2 Predictive Maintenance Program

**Structured Approach:**
```
Asset Inventory:
Critical Equipment (Tier 1): Failure causes crop loss
- Irrigation pumps (redundancy required)
- Main HVAC systems (backup or rapid repair)
- Lighting systems (partial redundancy acceptable)

Important Equipment (Tier 2): Failure causes operational disruption
- Fertigation dosing pumps
- Dehumidifiers
- Automation/controls

Standard Equipment (Tier 3): Failure is inconvenient
- Office equipment
- Non-critical lighting
- Support systems

Monitoring Strategy:

Tier 1 Equipment:
- Continuous automated monitoring
- Weekly manual inspection
- Quarterly preventive maintenance
- Spare parts on-site
- Backup systems active

Tier 2 Equipment:
- Daily automated monitoring
- Monthly manual inspection
- Semi-annual preventive maintenance
- Spare parts available (2-day delivery)

Tier 3 Equipment:
- No active monitoring
- Annual inspection
- Run-to-failure acceptable
- Parts ordered as needed

Maintenance Schedule:
Daily:
- Visual inspection of critical equipment
- Review monitoring dashboards
- Respond to alerts

Weekly:
- Lubrication of pumps/motors
- Filter pressure drop checks
- Sensor calibration spot checks

Monthly:
- Detailed equipment inspection
- Bearing temperature checks
- Electrical connection tightness
- Coil cleaning (HVAC)

Quarterly:
- Comprehensive preventive maintenance
- Refrigerant charge check
- Drive belt replacement
- Full sensor calibration

Annually:
- Major overhauls as needed
- Equipment performance testing
- Thermal imaging survey
- Ultrasonic leak detection

Budget:
Preventive maintenance: $18,000/year
Predictive monitoring: $5,000/year (sensors + software)
Total maintenance: $23,000/year

Avoided costs:
Unplanned downtime: $15,000/year
Emergency repairs: $8,000/year
Extended equipment life: $10,000/year
Total avoided: $33,000/year

Net benefit: $10,000/year (43% savings)
```

## 5. Retrofit and Upgrade Engineering

### 5.1 Upgrade Assessment

**Decision Framework:**
```
Lighting System Upgrade Example:

Current System (5 years old):
- Technology: LED, 2.3 μmol/J efficacy
- Power: 100 kW
- Annual energy: 584,000 kWh
- Annual cost: $70,080
- Remaining useful life: 5-10 years

Proposed Upgrade:
- Technology: New LED, 3.0 μmol/J efficacy
- Power: 76.7 kW (23.3 kW reduction)
- Annual energy: 447,800 kWh
- Annual cost: $53,736
- Expected life: 10+ years

Financial Analysis:
Capital cost: $120,000 (new fixtures)
Trade-in value: -$15,000 (old fixtures)
Net investment: $105,000

Annual savings: $70,080 - $53,736 = $16,344
Simple payback: $105,000 / $16,344 = 6.4 years

NPV analysis (10 year, 8% discount):
Annual savings: $16,344
PV factor (10yr, 8%): 6.71
PV of savings: $16,344 × 6.71 = $109,668
NPV: $109,668 - $105,000 = $4,668

IRR: 8.9%

Decision:
Marginal project (NPV barely positive, payback > 5 years)
Recommendation: Defer upgrade, reassess in 3 years
Alternative: Upgrade opportunistically as failures occur

Sensitivity Analysis:
If energy cost increases to $0.15/kWh:
Annual savings: $20,430
Payback: 5.1 years
NPV: $32,000
Decision: Proceed with upgrade
```

### 5.2 Continuous Improvement Culture

**Organizational Practices:**
```
Monthly Performance Review:
- All staff participate
- Review KPI dashboard
- Identify trends (positive and negative)
- Brainstorm improvement ideas
- Prioritize projects
- Assign ownership and deadlines

Suggestion Program:
- Any employee can submit ideas
- Review within 1 week
- Recognition for implemented suggestions
- Share credit and savings with contributor

Cross-Training:
- Operators learn multiple systems
- Fresh perspectives on processes
- Better problem-solving
- Improved coverage and flexibility

Benchmarking:
- Industry associations
- Peer facility visits
- Technology conferences
- Academic partnerships

Innovation Budget:
- Allocate 2-5% of operating budget
- Fund small-scale trials
- Acceptable failure rate (not all ideas work)
- Document lessons learned

Celebrate Wins:
- Recognize improvement achievements
- Share success stories
- Reward performance
- Build momentum
```

## 6. Case Study: Year-Over-Year Performance Improvement

**3-Year Performance Trajectory:**

```
Facility: 1,500 m² vertical farm

Year 1 (Baseline - First full year of operation):
Production: 37,500 kg (25 kg/m²/year)
Energy: 18.5 kWh/kg
Water: 24 L/kg
Defect rate: 9.5%
Operating cost: $3.45/kg
Revenue: $262,500 ($7/kg average)
Contribution: 51%

Year 2 (After first round of improvements):
Improvements implemented:
- Optimized lighting schedules (DLI by crop stage)
- HVAC night setback
- Improved transplanting technique (training)
- Added beneficial insects (reduced disease)

Production: 45,000 kg (30 kg/m²/year) [+20%]
Energy: 15.2 kWh/kg [-18%]
Water: 21 L/kg [-13%]
Defect rate: 6.5% [-32%]
Operating cost: $2.95/kg [-14%]
Revenue: $315,000 (+$52,500)
Contribution: 58%

Year 3 (Continuous optimization):
Additional improvements:
- LED partial upgrade (25% of fixtures)
- Automated climate optimization (AI-based)
- Harvest forecast system (reduced waste)
- Process improvements (lean manufacturing)

Production: 52,500 kg (35 kg/m²/year) [+17%]
Energy: 13.8 kWh/kg [-9%]
Water: 19 L/kg [-10%]
Defect rate: 4.8% [-26%]
Operating cost: $2.68/kg [-9%]
Revenue: $367,500 (+$52,500)
Contribution: 62%

Three-Year Summary:
Production: +40% (vs. Year 1)
Resource efficiency: Energy -25%, Water -21%
Quality: Defects -49%
Economics: Cost -22%, Revenue +40%, Contribution +11 points
Total improvement value: ~$150,000/year incremental

Investment in improvements: $85,000 total
ROI: 176% annualized return on improvement investments
```

## 7. Key Takeaways

1. **Measure what matters** - KPIs drive focus and accountability
2. **Data enables optimization** - Can't improve what you don't measure
3. **Small improvements compound** - 1% better every month = 13% annual improvement
4. **Predictive beats reactive** - Preventing failures is cheaper than fixing them
5. **Culture matters most** - Continuous improvement requires engaged team
6. **Balance optimization and operation** - Don't sacrifice stability for marginal gains
7. **Share successes** - Celebrate wins and build momentum

## 8. Practical Exercise

Analyze performance data for:
- 1,000 m² facility
- 12 months of operations data (provided)
- Current: 28 kg/m²/year, 16 kWh/kg
- Goal: 33 kg/m²/year, 14 kWh/kg

Deliverables:
1. KPI dashboard design
2. Data analysis and correlations
3. Improvement opportunities (prioritized)
4. Implementation plan
5. Projected ROI

## Additional Resources

- Lean Six Sigma methodologies
- Data analytics platforms (Tableau, Power BI)
- Predictive maintenance software
- Industry benchmarking reports

## Next Module

**Module 14: Case Studies of Successful Vertical Farm Facilities** - Learn from real-world implementations and best practices.

---

**Module 13 Complete** - Proceed to Module 13 Quiz.
