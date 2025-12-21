# Operations KPIs Quick Reference Guide

**Course 502: Advanced Facility Operations**

---

## Financial KPIs

### Revenue Metrics
```
Revenue per Square Foot = Total Revenue / Total Growing Area
Target: $150-$250/sq ft/year

Revenue Growth Rate = (Current Period - Prior Period) / Prior Period × 100%
Target: 15-25% annually

Revenue per FTE = Total Revenue / Number of Full-Time Employees
Target: $150K-$250K per FTE
```

### Profitability Metrics
```
Gross Margin % = (Revenue - COGS) / Revenue × 100%
Target: 40-50%

EBITDA % = EBITDA / Revenue × 100%
Target: 15-25%

Operating Margin % = Operating Income / Revenue × 100%
Target: 10-20%

Cost per Pound = Total Production Costs / Pounds Produced
Target: Varies by crop ($1.50-$3.50/lb typical)
```

---

## Production KPIs

### Yield Metrics
```
Yield per Square Foot = Pounds Harvested / Growing Area / Time Period
Target: 2.5-4.0 lbs/sq ft/cycle (varies by crop)

Cycles per Year = 365 days / Average Crop Cycle Days
Target: 10-14 cycles (varies by crop)

Annual Yield = Yield per Cycle × Cycles per Year
Target: 25-40+ lbs/sq ft/year

First Pass Yield % = Units Meeting Quality / Total Units Produced × 100%
Target: 95-98%
```

### Efficiency Metrics
```
Capacity Utilization % = Actual Production / Design Capacity × 100%
Target: 88-94%

OEE (Overall Equipment Effectiveness) = Availability × Performance × Quality
Target: 85%+
├── Availability = Uptime / Planned Production Time
├── Performance = Actual Output / Theoretical Output
└── Quality = Good Units / Total Units

Throughput Time = Total Time from Seed to Harvest
Target: Minimize while maintaining quality
```

---

## Quality KPIs

### Quality Performance
```
Defect Rate % = Defective Units / Total Units × 100%
Target: <2%

Quality Yield % = Marketable Product / Total Harvested × 100%
Target: 95-98%

Customer Complaint Rate = Complaints / Total Orders × 100%
Target: <1%

Product Shelf Life = Days from Harvest to End of Freshness
Target: 14-21 days (varies by product)
```

### Food Safety
```
Food Safety Incidents = Number of Contamination Events
Target: Zero

Test Failure Rate % = Failed Tests / Total Tests × 100%
Target: <1%

Traceability Test Time = Time to Complete Mock Recall
Target: <4 hours
```

---

## Supply Chain KPIs

### Inventory Metrics
```
Inventory Turnover = COGS / Average Inventory Value
Target: 12-24x per year

Days of Supply = Average Inventory / Average Daily Usage
Target: 15-30 days (varies by item)

Inventory Accuracy % = Accurate Counts / Total Counts × 100%
Target: 98%+

Fill Rate % = Orders Filled Complete / Total Orders × 100%
Target: 96-99%
```

### Supplier Performance
```
On-Time Delivery % = On-Time Deliveries / Total Deliveries × 100%
Target: 95%+

Supplier Quality Rating = Weighted Score of Quality, Delivery, Price
Target: 90%+ average

Purchase Price Variance = (Actual Price - Standard Price) / Standard Price
Target: Within ±5%
```

---

## People KPIs

### Productivity
```
Labor Efficiency % = Standard Hours / Actual Hours × 100%
Target: 90-105%

Units per Labor Hour = Total Units Produced / Total Labor Hours
Target: Varies by task (benchmark internally)

Labor Cost % of Revenue = Total Labor Costs / Revenue × 100%
Target: 24-32%

Overtime % = Overtime Hours / Total Hours × 100%
Target: <5%
```

### Engagement & Safety
```
Turnover Rate % = Separations / Average Headcount × 100% (annualized)
Target: <25% overall, <15% for key roles

Absenteeism Rate % = Absent Days / Scheduled Work Days × 100%
Target: <3%

Training Hours per Employee = Total Training Hours / Total Employees
Target: 35-50 hours/year

TRIR (Total Recordable Incident Rate) = Incidents × 200,000 / Total Hours
Target: <2.0 (world-class: <1.0)

Days Since Last Lost-Time Injury
Target: Continuous improvement, 365+ days
```

---

## Maintenance KPIs

### Reliability
```
MTBF (Mean Time Between Failures) = Total Uptime / Number of Failures
Target: Maximize (500-1000+ hours depending on equipment)

MTTR (Mean Time To Repair) = Total Repair Time / Number of Repairs
Target: Minimize (<4 hours for critical equipment)

Availability % = Uptime / (Uptime + Downtime) × 100%
Target: 95-98%
```

### Maintenance Efficiency
```
Planned Maintenance % = Planned Maint. Hours / Total Maint. Hours × 100%
Target: 75-85%

Schedule Compliance % = PM Completed on Time / PM Scheduled × 100%
Target: 90%+

Wrench Time % = Actual Work Time / Total Maint. Labor Time × 100%
Target: 45-55%

Maintenance Cost per Unit = Total Maint. Costs / Units Produced
Target: Benchmark and minimize
```

---

## Customer KPIs

### Satisfaction
```
Net Promoter Score (NPS) = % Promoters - % Detractors
Target: 50+ (excellent: 70+)

Customer Satisfaction Score (CSAT) = Satisfied Customers / Total Respondents
Target: 85%+

Customer Retention Rate % = Retained Customers / Total Customers × 100%
Target: 90%+
```

### Service
```
On-Time Delivery % = On-Time Orders / Total Orders × 100%
Target: 96-99%

Order Accuracy % = Accurate Orders / Total Orders × 100%
Target: 98%+

Response Time (Hours) = Time to Respond to Customer Inquiry
Target: <2 hours during business hours
```

---

## Environmental KPIs

### Resource Efficiency
```
Water Use Intensity = Gallons Used / Pounds Produced
Target: <3 gallons/lb (CEA advantage)

Energy Intensity = kWh Used / Pounds Produced
Target: 1.5-2.5 kWh/lb

Waste Diversion Rate % = Waste Diverted / Total Waste × 100%
Target: 90-95%

Carbon Intensity = kg CO2e / Pound Produced
Target: <2.0 kg CO2e/lb (and decreasing)
```

---

## Dashboard Design Tips

### Leading vs. Lagging Indicators
```
Lagging (Results):          Leading (Predictive):
├── Revenue                 ├── Sales pipeline
├── Profit margin           ├── Production plan adherence
├── Customer complaints     ├── Quality inspections
├── Injury rate             ├── Near-miss reports
└── Defect rate             └── Process audits
```

### Visualization Best Practices
- Use color coding (red/yellow/green) for status
- Include trend arrows (↑ ↓ →)
- Show actual vs. target
- Display sparklines for trends
- Update frequency: Real-time to daily
- Keep dashboards focused (5-10 key metrics per view)

---

## Quick Calculation Examples

### Example 1: OEE Calculation
```
Shift: 8 hours = 480 minutes
Planned downtime (breaks, PM): 40 minutes
Actual production time: 400 minutes (breakdown: 40 min)
Target rate: 100 units/hour
Actual production: 650 units (50 defective)

Availability = 400 / 440 = 90.9%
Performance = 650 / (100 × 400/60) = 97.5%
Quality = 600 / 650 = 92.3%

OEE = 90.9% × 97.5% × 92.3% = 81.8%
```

### Example 2: Inventory Turnover
```
COGS (annual): $2,500,000
Average Inventory: $250,000

Inventory Turnover = $2,500,000 / $250,000 = 10x per year
Days of Inventory = 365 / 10 = 36.5 days
```

### Example 3: Labor Efficiency
```
Task: Harvest lettuce
Standard: 50 lbs/hour
Worker A harvested: 400 lbs in 8 hours

Actual rate = 400 / 8 = 50 lbs/hour
Efficiency = 50 / 50 × 100% = 100%
```

---

## Tips for KPI Success

1. **Focus on What Matters:** Select 15-20 KPIs that align with strategy
2. **Make Them Visible:** Dashboards, scoreboards, regular reviews
3. **Set Targets:** Benchmarks from internal data or industry standards
4. **Review Regularly:** Daily huddles (operational), weekly reviews (tactical), monthly reviews (strategic)
5. **Drive Action:** KPIs should trigger decisions and improvements
6. **Evolve Over Time:** Refine as business matures and priorities shift

---

**© EcoFusion Academy - Advanced Facility Operations - Quick Reference Guide**
