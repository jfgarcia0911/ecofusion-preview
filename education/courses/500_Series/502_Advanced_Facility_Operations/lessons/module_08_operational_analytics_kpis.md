# Module 8: Operational Analytics and KPIs

## Master Level - Course 502: Advanced Facility Operations

### Module Overview

This module covers the development and implementation of operational analytics and Key Performance Indicator (KPI) systems for CEA operations, enabling data-driven decision-making and performance optimization.

**Duration:** 4 hours
**Difficulty:** Master

### Learning Objectives

1. Design comprehensive KPI frameworks for CEA operations
2. Implement real-time operational dashboards
3. Apply predictive analytics to operations
4. Conduct benchmarking and performance analysis
5. Create data governance and quality programs
6. Use advanced analytics for optimization
7. Communicate insights effectively to stakeholders

### Key Performance Indicators Framework

```
CEA KPI HIERARCHY
=================

Financial KPIs (CFO Dashboard)
├── Revenue
│   ├── Total revenue (monthly/YTD)
│   ├── Revenue per square foot
│   ├── Revenue growth rate
│   └── Revenue by product/customer
│
├── Profitability
│   ├── Gross margin %
│   ├── EBITDA %
│   ├── Operating margin %
│   └── Net profit margin %
│
├── Efficiency
│   ├── Cost per pound produced
│   ├── Labor cost % of revenue
│   ├── Utility cost % of revenue
│   └── Working capital turns
│
└── Investment
    ├── ROI %
    ├── Payback period
    ├── Cash flow
    └── CapEx utilization

Operational KPIs (COO Dashboard)
├── Production
│   ├── Total production (lbs/units)
│   ├── Yield per square foot
│   ├── Cycles per year
│   ├── Capacity utilization %
│   └── Production to plan %
│
├── Quality
│   ├── First pass yield %
│   ├── Defect rate %
│   ├── Customer complaints
│   ├── Quality score
│   └── Food safety incidents
│
├── Efficiency
│   ├── OEE (Overall Equipment Effectiveness)
│   ├── Throughput time
│   ├── Resource utilization %
│   └── Waste/shrinkage %
│
└── Reliability
    ├── Uptime %
    ├── MTBF (Mean Time Between Failures)
    ├── MTTR (Mean Time To Repair)
    └── Planned vs. unplanned downtime

Supply Chain KPIs
├── Inventory
│   ├── Inventory turnover
│   ├── Days of supply
│   ├── Inventory accuracy %
│   └── Obsolete inventory %
│
├── Procurement
│   ├── Purchase price variance
│   ├── Supplier on-time delivery %
│   ├── Supplier quality rating
│   └── Cost savings achieved
│
└── Logistics
    ├── On-time delivery %
    ├── Order fill rate %
    ├── Transportation cost per unit
    └── Damage rate %

People KPIs
├── Productivity
│   ├── Revenue per FTE
│   ├── Units per labor hour
│   ├── Labor efficiency %
│   └── Overtime %
│
├── Engagement
│   ├── Employee satisfaction score
│   ├── Turnover rate %
│   ├── Absenteeism rate %
│   └── Training hours per employee
│
└── Safety
    ├── Lost time injury rate
    ├── Days since last incident
    ├── Near miss reports
    └── Safety audit score

Customer KPIs
├── Satisfaction
│   ├── Net Promoter Score (NPS)
│   ├── Customer satisfaction (CSAT)
│   ├── Customer retention rate
│   └── Customer lifetime value
│
└── Service
    ├── Order accuracy %
    ├── On-time delivery %
    ├── Response time (inquiries)
    └── Complaint resolution time
```

### Real-Time Dashboard Design

```
EXECUTIVE DASHBOARD EXAMPLE
============================

┌─────────────────────────────────────────────────────────┐
│ Operations Dashboard - December 11, 2025                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ TODAY'S SNAPSHOT              │  MTD PERFORMANCE        │
│ ─────────────────────────     │  ─────────────────      │
│ Production: 2,450 lbs  ✓      │  Revenue: $485K  ✓     │
│ Quality: 97.2%        ✓      │  Margin: 42%     ✓     │
│ Orders Shipped: 45    ✓      │  Production: 98% ⚠     │
│ Safety: 142 days      ✓      │  Safety: 0 LTI   ✓     │
│                               │                         │
├───────────────────────────────┴─────────────────────────┤
│                                                         │
│ KEY METRICS TREND (Last 12 Months)                      │
│                                                         │
│ Revenue/sq ft:  ████████████████░░  $165 (Target: $180)│
│ Gross Margin:   ████████████████████  41% (Target: 40%)│
│ Yield:          ███████████████████░  2.8 (Target: 3.0)│
│ OEE:            ████████████████░░░░  78% (Target: 85%)│
│ Fill Rate:      ███████████████████░  96% (Target: 98%)│
│                                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ALERTS & EXCEPTIONS          │  TOP INITIATIVES        │
│ ─────────────────────────    │  ─────────────────      │
│ ⚠ Zone 3 temp variance high  │  1. LED upgrade (75%)   │
│ ⚠ Packaging material low     │  2. ERP Phase 2 (60%)   │
│ ⚠ Delivery delay (Route 4)   │  3. SQF cert (40%)      │
│                               │                         │
└─────────────────────────────────────────────────────────┘

Dashboard Design Principles:
├── At-a-glance status (red/yellow/green)
├── Drill-down capability
├── Real-time or near real-time updates
├── Mobile-responsive
├── Role-based views
├── Historical trends
├── Benchmarks and targets
└── Exception-based alerts
```

### Predictive Analytics

```
PREDICTIVE MODELS FOR CEA
==========================

Demand Forecasting
├── Time series analysis
├── Seasonality adjustment
├── External factors (weather, events)
├── Machine learning models
└── Forecast accuracy: MAPE <15%

Yield Prediction
├── Input variables:
│   ├── Crop variety
│   ├── Environmental parameters
│   ├── Nutrient regime
│   ├── Plant density
│   └── Growth stage
├── Model: Random forest, neural network
├── Accuracy: R² > 0.85
└── Use: Production planning, customer commitments

Predictive Maintenance
├── Equipment sensor data
├── Failure pattern recognition
├── Remaining useful life (RUL) estimation
├── Maintenance scheduling optimization
└── Reduce unplanned downtime by 30-50%

Quality Prediction
├── In-process quality indicators
├── Real-time defect prediction
├── Early warning system
├── Corrective action triggering
└── Reduce defects by 20-40%

Optimization Models
├── Crop mix optimization
├── Resource allocation
├── Scheduling optimization
├── Energy consumption forecasting
└── Pricing optimization

Example: Predictive Maintenance Model
─────────────────────────────────────
Equipment: HVAC chiller unit
Sensors: Vibration, temperature, pressure, current
Data: 2 years historical (hourly readings)
Model: Gradient boosting classifier
Prediction: Probability of failure (next 7 days)
Alert threshold: >30% probability
Action: Schedule preventive maintenance
Result: 60% reduction in unplanned downtime
```

### Benchmarking Framework

```
BENCHMARKING METHODOLOGY
========================

Internal Benchmarking
├── Compare facilities/lines/shifts
├── Identify best performers
├── Share best practices
├── Set improvement targets
└── Example:
    Facility A: 2.9 lbs/sq ft (best)
    Facility B: 2.5 lbs/sq ft
    Facility C: 2.3 lbs/sq ft
    Target: All facilities to 2.8+ within 6 months

Competitive Benchmarking
├── Industry data sources
│   ├── Trade associations
│   ├── Industry reports
│   ├── Academic research
│   └── Consultant data
├── Key metrics to benchmark
│   ├── Yield per sq ft
│   ├── Cost per pound
│   ├── Labor productivity
│   ├── Energy efficiency
│   └── Quality levels
└── Position: Top quartile or better

Functional Benchmarking
├── Learn from other industries
│   ├── Manufacturing (Lean, Six Sigma)
│   ├── Food processing (food safety)
│   ├── Logistics (distribution)
│   └── Tech (automation)
├── Adapt best practices
└── Innovate and differentiate

Benchmark Gaps:
┌─────────────────────────────────────┐
│ Metric          Our   Best  Gap     │
│ ───────────────────────────────     │
│ Yield/sq ft     2.6   3.2   -19%    │
│ Labor $/lb      $0.85 $0.65 +31%    │
│ Energy kWh/lb   2.1   1.6   +31%    │
│ Quality yield   94%   98%   -4 pts  │
│ OEE             78%   87%   -9 pts  │
└─────────────────────────────────────┘

Improvement Roadmap:
├── Priority 1: Labor productivity (highest gap, high impact)
├── Priority 2: Yield optimization (moderate gap, high value)
├── Priority 3: Energy efficiency (high gap, moderate impact)
```

### Data Governance

```
DATA QUALITY FRAMEWORK
======================

Data Governance Structure:
├── Data Governance Council (executive level)
│   ├── Define strategy and policies
│   ├── Approve standards
│   └── Resolve escalations
│
├── Data Stewards (functional leads)
│   ├── Define data requirements
│   ├── Ensure data quality
│   ├── Manage master data
│   └── Support users
│
└── Data Users (all employees)
    ├── Follow data standards
    ├── Enter accurate data
    ├── Report data issues
    └── Use data responsibly

Data Quality Dimensions:
├── Accuracy: Data is correct
├── Completeness: All required data present
├── Consistency: Data aligns across systems
├── Timeliness: Data is current
├── Validity: Data meets business rules
└── Uniqueness: No duplicates

Data Quality Metrics:
├── % of records with missing critical fields
├── % of records failing validation rules
├── Duplicate record rate
├── Time lag (transaction to reporting)
├── User-reported data issues
└── Target: >99% quality for critical data

Master Data Management:
├── Customers (single customer database)
├── Products (item master)
├── Suppliers (vendor master)
├── Employees (HR master)
├── Locations (facility/zone hierarchy)
└── Golden record approach
```

### Analytics Tools and Techniques

```
ANALYTICS TECHNOLOGY STACK
===========================

Data Collection
├── IoT sensors (environmental, equipment)
├── ERP system (transactions)
├── MES (Manufacturing Execution System)
├── Quality management system
├── Time tracking systems
└── Customer systems (orders, feedback)

Data Storage
├── Relational database (transactional)
├── Data warehouse (historical, aggregated)
├── Data lake (raw, unstructured)
├── Cloud storage (scalable)
└── Backup and archival

Data Processing
├── ETL (Extract, Transform, Load) tools
├── Data integration platforms
├── Real-time streaming (Apache Kafka)
├── Batch processing (scheduled jobs)
└── Data quality tools

Analytics & BI
├── Business intelligence platforms
│   ├── Tableau
│   ├── Power BI
│   ├── Qlik
│   └── Looker
├── Statistical analysis (R, Python, SAS)
├── Machine learning (TensorFlow, Scikit-learn)
├── Spreadsheets (Excel, Google Sheets)
└── Custom applications

Reporting & Visualization
├── Executive dashboards
├── Operational reports
├── Ad hoc analysis
├── Mobile access
└── Automated distribution

Advanced Analytics Techniques:
├── Regression analysis
├── Cluster analysis
├── Time series forecasting
├── Optimization (linear programming)
├── Simulation (Monte Carlo)
├── Neural networks
├── Decision trees
└── Ensemble methods
```

### Practical Application

**KPI Implementation Roadmap:**

```
90-DAY KPI ROLLOUT
==================

Days 1-30: Foundation
├── Define strategic objectives
├── Identify critical KPIs (15-20)
├── Establish baseline metrics
├── Assess data availability
├── Design dashboard mockups
├── Gain stakeholder buy-in
└── Deliverable: KPI framework document

Days 31-60: Build
├── Configure data connections
├── Build dashboards
├── Validate data accuracy
├── Develop reporting procedures
├── Train dashboard users
├── Pilot with select users
└── Deliverable: Functional dashboards

Days 61-90: Launch
├── Full rollout to organization
├── Daily/weekly review cadence
├── Troubleshoot issues
├── Gather user feedback
├── Refine and optimize
├── Establish governance
└── Deliverable: Operational KPI system

Ongoing:
├── Monthly KPI review meetings
├── Quarterly dashboard enhancements
├── Annual KPI framework review
└── Continuous improvement
```

### Assessment Questions

1. What are the five categories of KPIs for CEA operations, and provide three examples of each?

2. Describe the key principles of effective dashboard design.

3. How do predictive analytics differ from descriptive and diagnostic analytics?

4. What is benchmarking, and how do you conduct internal vs. external benchmarking?

5. What are the six dimensions of data quality, and why do they matter?

### Key Takeaways

1. **Focus on What Matters:** Select KPIs aligned to strategic objectives; avoid metric overload

2. **Make Data Visible:** Dashboards drive accountability and action

3. **Predict, Don't Just Report:** Use analytics to anticipate and prevent problems

4. **Benchmark Continuously:** Know where you stand relative to best-in-class

5. **Govern Data:** Data quality is essential for reliable insights

6. **Tell Stories with Data:** Communicate insights effectively to drive decisions

7. **Invest in Tools:** Modern analytics platforms enable better decision-making

---

**Next Module:** Module 9 - Asset Management and Maintenance

*Prepare by reviewing your current maintenance programs and asset inventory.*
