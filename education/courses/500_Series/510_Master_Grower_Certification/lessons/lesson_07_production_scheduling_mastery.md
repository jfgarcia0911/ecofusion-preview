# Lesson 7: Production Scheduling & Planning Mastery

## Learning Objectives

By the end of this lesson, you will be able to:

1. Develop advanced production forecasting models
2. Optimize multi-crop scheduling strategies
3. Implement succession planting for continuous harvests
4. Plan capacity utilization and expansion
5. Manage production risk and develop contingency plans

---

## 1. Production Forecasting

### 1.1 Yield Prediction Modeling

**Baseline Yield Determination**:
```
Historical Data Analysis:
- Collect 6-12 months data (minimum)
- Track yield by variety, season, zone
- Calculate average, standard deviation
- Identify trends and patterns

Example - Butterhead Lettuce:
Spring (Mar-May): 285g avg, SD 25g, 92% marketable
Summer (Jun-Aug): 265g avg, SD 35g, 85% marketable (heat stress)
Fall (Sep-Nov): 295g avg, SD 20g, 94% marketable
Winter (Dec-Feb): 310g avg, SD 18g, 95% marketable (optimal conditions)

Annual Average: 289g, 91.5% marketable
```

**Environmental Impact Factors**:
- Temperature deviation from optimal: ±5°C = ±10-15% yield
- Light (DLI) correlation: R² typically 0.6-0.8 (strong relationship)
- CO₂ concentration: 400 ppm baseline, +30% yield at 1000 ppm
- VPD optimization: Suboptimal VPD = 10-20% yield reduction

**Predictive Formula Example**:
```
Predicted Yield = Baseline × DLI Factor × Temp Factor × CO₂ Factor × Management Factor

Butterhead Lettuce Prediction (Summer):
Baseline: 285g
DLI Factor: 16 mol/m²/day actual ÷ 17 optimal = 0.94
Temp Factor: 24°C avg vs 20°C optimal = 0.90 (heat stress)
CO₂ Factor: 1000 ppm vs 400 ppm = 1.25
Management Factor: Experienced grower = 1.05

Predicted = 285 × 0.94 × 0.90 × 1.25 × 1.05 = 315g

Note: Environmental factors compound (multiply, not add)
```

### 1.2 Cycle Time Management

**Growth Degree Day (GDD) Modeling**:
```
GDD = Σ [(Tmax + Tmin)/2 - Tbase]

Lettuce Example:
Tbase = 5°C (cool-season crop)
Target GDD for harvest = 800 degree-days

Temperature Strategy:
Standard: 20°C avg = 15 GDD/day = 53 days to harvest
Accelerated: 22°C avg = 17 GDD/day = 47 days (13% faster)
Economy: 18°C avg = 13 GDD/day = 62 days (17% slower, energy savings)

Master Grower Decision: Balance speed vs. cost vs. quality
```

**Variability Management**:
- Buffer time: Add 5-10% to predicted cycle (account for variation)
- Environmental contingency: Plan for equipment failures, heat waves
- Quality holds: Option to delay harvest for quality optimization
- Rush capability: Ability to accelerate 10-15% if needed (temperature increase)

### 1.3 Market-Driven Forecasting

**Demand Forecasting**:
```
Historical Sales Data:
- Seasonal patterns (summer salads up 40%, winter down 20%)
- Weekly patterns (weekend restaurant demand, weekday retail)
- Holiday impacts (Thanksgiving herbs +200%, Christmas greens +150%)
- Long-term trends (growth rate: +15% annually for company)

Leading Indicators:
- Customer advance orders (4-8 week visibility)
- Market trends (increasing demand for specific varieties)
- Competitive analysis (new competitor = potential demand shift)
- Economic indicators (recession = shift to value products)
```

**Production-to-Demand Matching**:
```
12-Week Rolling Forecast:

Week 1-2: Firm orders (committed production)
Week 3-4: Forecast with 90% confidence (adjust plantings now)
Week 5-8: Forecast with 70% confidence (trending)
Week 9-12: Forecast with 50% confidence (long-range planning)

Production Decisions:
- Seed order: 8-12 weeks in advance
- Planting adjustments: 4-6 weeks before harvest
- Variety mix: 3-4 weeks before harvest (if applicable)
- Harvest timing: 1-2 weeks flexibility
```

---

## 2. Multi-Crop Scheduling

### 2.1 Succession Planting Systems

**Continuous Harvest Model**:
```
Goal: Same quantity every week (smooth demand)

Example: 2000 lettuce heads/week

Cycle time: 6 weeks (42 days)
Production batches: 6 batches in rotation
Plants per batch: 2000 plants
Total plants in system: 12,000 plants

Schedule:
Week 1: Plant Batch 1 (harvest Week 7)
Week 2: Plant Batch 2 (harvest Week 8)
...
Week 6: Plant Batch 6 (harvest Week 12)
Week 7: Harvest Batch 1, Plant new Batch 1 (harvest Week 13)
Continues indefinitely

Space: 12,000 plants ÷ 25 plants/m² = 480 m² production space
Plus: 20% buffer for spacing transitions, cleaning = 575 m² total
```

**Batch Harvest Model**:
```
Goal: Large harvests for specific delivery days

Example: 8000 heads every 2 weeks (wholesale market days)

Cycle time: 6 weeks
Harvest frequency: Every 2 weeks
Batches per cycle: 3 batches (each 8000 plants)

Schedule:
Week 1: Plant Batch A (8000 plants) - harvest Week 7
Week 3: Plant Batch B (8000 plants) - harvest Week 9
Week 5: Plant Batch C (8000 plants) - harvest Week 11
Week 7: Harvest Batch A, plant new Batch A
Week 9: Harvest Batch B, plant new Batch B
...

Space: 24,000 plants ÷ 25 plants/m² = 960 m²
```

**Master Grower Hybrid Model**:
```
70% Continuous (Base production for regular customers):
- 1400 heads/week, every week
- Predictable, consistent
- 8400 plants in system, 340 m²

30% Batch (Flexibility and growth):
- Variable timing and quantity
- Market opportunities, special orders
- 3600 plants variable, 145 m²

Total: 485 m² + 20% buffer = 580 m²

Benefits:
- Reliability (continuous base load)
- Flexibility (batch production for opportunities)
- Risk management (diversified schedule)
```

### 2.2 Multi-Crop Integration

**Compatible Crop Grouping**:
```
Zone 1 - Cool Season, Short Cycle (18-20°C):
- Lettuce (5-6 weeks)
- Arugula (4-5 weeks)
- Spinach (5-6 weeks)
- Bok choy (5-6 weeks)

Zone 2 - Moderate, Medium Cycle (22-24°C):
- Basil (4-6 weeks, multiple harvests)
- Kale (6-8 weeks)
- Swiss chard (6-8 weeks)
- Pac choi (5-6 weeks)

Zone 3 - Warm, Long Cycle (24-28°C):
- Tomato (10-12 months production)
- Pepper (8-10 months)
- Cucumber (6-8 months)
- Eggplant (8-10 months)

Strategy: Group by environment needs, separate zones
```

**Complementary Scheduling**:
```
Market Diversification:
30% Lettuce (volume, reliable demand)
25% Mixed salad greens (value-added, medium margin)
20% Herbs (high margin, differentiation)
15% Microgreens (premium pricing, fast turnover)
10% Specialty (edible flowers, rare varieties, highest margin)

Labor Smoothing:
Harvest Schedule:
Monday: Lettuce (large volume, full crew)
Tuesday: Herbs (moderate volume)
Wednesday: Microgreens (high frequency, smaller batches)
Thursday: Specialty + Lettuce
Friday: Mixed greens, Herbs
Saturday/Sunday: Minimal/emergency only

Equipment Utilization:
Propagation area: Continuous use (seeds every day)
Vegetative area: 70-80% utilization (flexibility)
Finishing area: 80-90% utilization (peak efficiency)
```

### 2.3 Space Utilization Optimization

**Dynamic Space Allocation**:
```
Growth Stage Area Requirements:

Lettuce Example:
Propagation (0-2 weeks): 100 plants/m² (seedling trays)
Vegetative (2-4 weeks): 50 plants/m² (intermediate spacing)
Finishing (4-6 weeks): 25 plants/m² (final spacing)

2000 plants continuous:

Stage        | Plants | Density | Area
-------------|--------|---------|------
Propagation  | 667    | 100/m²  | 7 m²
Vegetative   | 667    | 50/m²   | 13 m²
Finishing    | 666    | 25/m²   | 27 m²
Total        | 2000   | -       | 47 m²

vs. Single density (25/m²): 80 m² required
Space savings: 41% through dynamic spacing
```

**Vertical Space Utilization**:
```
4-Tier Vertical System:

Tier 1 (Top): Microgreens, propagation (high light availability)
Tier 2-3 (Middle): Lettuce, herbs (supplemental lighting)
Tier 4 (Bottom): Propagation, low-light tolerant (limited light)

Effective Area:
Footprint: 2,500 m²
Tiers: 3.5 average (accounting for access, structure)
Production area: 8,750 m²

Note: Not all tiers equal (top tiers more productive)
Weighted productivity: ~3.0x footprint (more realistic)
```

---

## 3. Capacity Planning

### 3.1 Current Capacity Assessment

**Theoretical Capacity**:
```
Maximum production if:
- All space utilized
- Optimal environmental conditions
- Perfect scheduling (no gaps)
- No crop failures

Example Facility:
Production area: 5,000 m²
Lettuce density: 25 plants/m²
Cycle time: 6 weeks
Turns per year: 52 weeks ÷ 6 = 8.67 turns

Theoretical capacity: 5,000 × 25 × 8.67 = 1,083,750 heads/year
```

**Practical Capacity**:
```
Adjusted for reality:
- Space utilization: 85% (cleaning, transitions, buffer)
- Crop success rate: 92% (losses to pests, quality issues)
- Schedule efficiency: 90% (imperfect timing, market delays)

Practical capacity: 1,083,750 × 0.85 × 0.92 × 0.90 = 761,000 heads/year
70% of theoretical capacity (typical for good operations)
```

**Current Utilization**:
```
Actual production: 580,000 heads/year
Practical capacity: 761,000 heads/year
Capacity utilization: 76%

Analysis:
- Room for 31% growth without expansion
- Optimization opportunities (increase to 85-90% utilization)
- Bottlenecks: Labor (harvesting), market demand (sales)
```

### 3.2 Expansion Planning

**Incremental Expansion Model**:
```
Current: 5,000 m², 580,000 heads/year, $1.2M revenue

Growth Scenario: +20% demand annually

Year 1: 696,000 heads needed
- Solution: Optimize current (increase utilization to 91%)
- Investment: $50K (process improvement, minor equipment)

Year 2: 835,000 heads needed
- Solution: Add 1,500 m² production space (modular expansion)
- Investment: $400K (construction, equipment)
- New capacity: 1.0M heads/year practical

Year 3: 1,002,000 heads needed
- Solution: Optimize expanded facility (94% utilization)
- Investment: $30K (automation, efficiency)

Benefits:
- Incremental investment (manage risk, cash flow)
- Prove market before major expansion
- Learn and optimize before scaling
```

### 3.3 Risk Management

**Production Risk Mitigation**:
```
Environmental Risks:
- Equipment redundancy (backup HVAC, generators)
- Multiple crop varieties (disease resistance, market diversity)
- Insurance (crop insurance, business interruption)
- Climate-resilient design (withstand extreme weather)

Biological Risks:
- IPM program (prevent pest/disease outbreaks)
- Biosecurity protocols
- Variety diversification (not monoculture)
- Contingency crop plans (substitute crops if failure)

Market Risks:
- Customer diversification (not dependent on single buyer)
- Product diversification (multiple crops, value tiers)
- Contract agreements (secure baseline demand)
- Storage capability (buffer for market timing)

Operational Risks:
- Cross-training staff (no single points of failure)
- Documented SOPs (reduce dependence on individuals)
- Maintenance programs (prevent equipment failures)
- Financial reserves (3-6 months operating expenses)
```

**Scenario Planning**:
```
Scenario 1: Major Equipment Failure (HVAC breakdown)
- Impact: 25% of production area unusable for 2 weeks
- Mitigation: Emergency repair (24-48 hours), shift production to other zones
- Contingency: Backup cooling, relationships with repair vendors

Scenario 2: Pest Outbreak (whitefly infestation)
- Impact: 40% crop loss if uncontrolled, 2-4 week production delay
- Mitigation: Preventive IPM (reduce likelihood), early detection, biological control
- Contingency: Crop insurance, substitute varieties

Scenario 3: Market Demand Collapse (major customer lost)
- Impact: 30% revenue loss if no replacement customer
- Mitigation: Customer diversification (no customer >20% of revenue)
- Contingency: Pivot to alternative markets (farmers markets, CSA, retail)

Scenario 4: Energy Cost Spike (+50% electricity price)
- Impact: Profit margin reduction from 18% to 8%
- Mitigation: Energy efficiency improvements (LED upgrade, heat recovery)
- Contingency: Price increase (pass through costs), crop mix shift (lower energy crops)
```

---

## 4. Advanced Scheduling Tools

### 4.1 Software and Digital Tools

**Production Planning Software**:
- Spreadsheet models (Excel, Google Sheets) - custom scheduling
- Farm management software (FarmOS, Agriware, FarmLogic)
- ERP systems (enterprise resource planning for larger operations)
- Custom databases (SQL, Python scripts for complex operations)

**Features to Utilize**:
```
Planting Schedule:
- Automatic calculation of planting dates from harvest targets
- Alerts for seeding, transplanting, harvesting
- Integration with inventory (seed, supplies)

Yield Forecasting:
- Historical data analysis
- Environmental data integration
- Predictive modeling

Labor Planning:
- Harvest volume → labor hours calculation
- Staff scheduling optimization
- Task assignment and tracking

Inventory Management:
- Seed inventory and reorder points
- Substrate, fertilizer, supplies tracking
- Finished goods inventory (cooler stock)
```

### 4.2 Data-Driven Scheduling

**Key Metrics to Track**:
```
Production Metrics:
- Yield per m² per turn
- Cycle time by variety and season
- Crop success rate (% marketable)
- Quality scores

Efficiency Metrics:
- Space utilization (% of available area in production)
- Turn rate (production cycles per year)
- Labor hours per kg produced
- Revenue per m² per year

Planning Metrics:
- Forecast accuracy (predicted vs. actual)
- Schedule adherence (on-time harvest %)
- Customer fill rate (% of orders fulfilled)
- Inventory turnover
```

**Continuous Improvement**:
```
Monthly Review:
- Actual vs. forecast yield analysis
- Schedule variance review (early/late harvests)
- Identify trends and patterns
- Adjust forecasting models

Quarterly Review:
- Capacity utilization analysis
- Profitability by crop/variety
- Market demand trends
- Strategic adjustments (crop mix, capacity, etc.)

Annual Review:
- Full year performance
- Long-term planning (expansion, new crops)
- Technology upgrades
- Market strategy
```

---

## 5. Case Study: Scheduling Optimization

### Background
**Green Valley Farms**: 8,000 m² greenhouse, lettuce and herbs, inconsistent deliveries, frequent shortages and oversupply.

### Problems Identified
- No formal scheduling system (ad-hoc planting decisions)
- Poor yield prediction (25% variance from actual)
- Inefficient space use (55% utilization)
- Labor spikes (some days overstaffed, other days understaffed)
- Customer dissatisfaction (unreliable supply)

### Implementation

**Phase 1: Data Collection (Month 1-2)**
- Historical yield data compilation
- Environmental data correlation
- Current space utilization mapping
- Labor time studies

**Phase 2: Forecasting Model (Month 3)**
- Yield prediction formula developed
- Cycle time by season established
- 12-week rolling forecast process created
- Software tool implemented (Excel-based initially)

**Phase 3: Scheduling System (Month 4-6)**
- Continuous succession planting schedule designed
- Multi-crop integration (lettuce, basil, arugula)
- Dynamic space allocation (3 growth stages)
- Labor planning synchronized with harvest schedule

**Phase 4: Optimization (Month 7-12)**
- Forecast accuracy improvement (weekly review, model refinement)
- Space utilization increase (layout optimization)
- Automation (seeding machine reduced labor 60%)
- Customer communication (advance forecasting shared)

### Results (After 12 Months)

**Production Improvements**:
- Yield forecast accuracy: 25% variance → 8% variance
- Cycle time consistency: SD 4.5 days → 1.8 days
- Space utilization: 55% → 82%
- Production capacity: +49% (same facility)

**Operational Efficiency**:
- Labor productivity: +35% (better scheduling, automation)
- Harvest labor variance: Reduced from 30% to 10% (smoother schedule)
- Crop waste: 12% → 4% (better demand matching)

**Business Outcomes**:
- Revenue: +52% (increased capacity + better fulfillment)
- Customer satisfaction: 68% → 93%
- On-time delivery: 71% → 96%
- Profit margin: 14% → 22% (efficiency gains)

**Investment**: $85K (software, automation, process development)
**ROI**: Additional profit $180K/year = 212% annual return

---

## Summary

Production scheduling mastery enables Master Growers to:

1. **Predict Accurately**: Data-driven yield and cycle time forecasting
2. **Schedule Efficiently**: Succession planting for continuous, reliable supply
3. **Integrate Complexity**: Multi-crop production without chaos
4. **Plan Strategically**: Capacity management and expansion planning
5. **Mitigate Risk**: Contingency planning and scenario analysis

Excellence in scheduling transforms unpredictable production into reliable, efficient, profitable operations.

---

## Key Takeaways

1. Yield forecasting based on environmental data is 2-3x more accurate than historical averages alone
2. Succession planting requires 6-8x crop cycle time in batches for continuous weekly harvest
3. Dynamic spacing (different densities by growth stage) saves 30-40% space
4. Practical capacity typically 65-75% of theoretical capacity
5. Multi-crop scheduling balances revenue, risk, and resource utilization
6. Data-driven scheduling delivers 20-40% improvement in space utilization
7. Risk management through diversification and contingency planning essential
8. Scheduling software/tools scale better than spreadsheets beyond 5,000 m²

---

## Review Questions

1. How do you calculate growing degree days and use them for cycle time prediction?
2. Design a succession planting schedule for continuous weekly lettuce harvest
3. What are the differences between theoretical, practical, and current capacity?
4. How would you optimize space utilization using dynamic spacing strategies?
5. Describe a data-driven approach to yield forecasting
6. What are key production risks and how do you mitigate them?
7. How do you balance multiple crops in a single facility?
8. Calculate the space required for 3000 lettuce heads per week continuous production

---

*Scheduling mastery is the operational foundation of successful commercial CEA, enabling reliable production that meets market demands profitably.*
