# Module 9: Asset Management and Maintenance

## Master Level - Course 502: Advanced Facility Operations

### Module Overview

Comprehensive coverage of asset lifecycle management, preventive and predictive maintenance programs, Total Productive Maintenance (TPM), and Computerized Maintenance Management Systems (CMMS) for CEA operations.

**Duration:** 5 hours

### Learning Objectives

1. Implement Total Productive Maintenance (TPM) programs
2. Design preventive and predictive maintenance strategies
3. Select and implement CMMS platforms
4. Optimize asset lifecycle management
5. Develop maintenance KPIs and reliability metrics
6. Build maintenance team capability
7. Manage spare parts inventory effectively

### Key Concepts

#### Total Productive Maintenance (TPM)

```
TPM EIGHT PILLARS
=================

1. Autonomous Maintenance
├── Operators perform basic maintenance
├── Daily cleaning and inspection
├── Lubrication and adjustments
├── Early problem detection
└── Benefits: Uptime, ownership

2. Planned Maintenance
├── Preventive maintenance schedules
├── Predictive maintenance programs
├── Maintenance planning and scheduling
├── Work order management
└── Goal: Zero breakdowns

3. Quality Maintenance
├── Maintenance impact on product quality
├── Equipment precision and accuracy
├── Calibration programs
├── Defect prevention
└── Goal: Zero defects

4. Focused Improvement
├── Cross-functional improvement teams
├── Equipment loss reduction
├── Root cause analysis
├── Kaizen for equipment
└── Goal: Eliminate losses

5. Early Equipment Management
├── Design for maintainability
├── Equipment commissioning
├── Supplier partnerships
├── Lifecycle cost optimization
└── Goal: Quick stabilization

6. Training and Education
├── Operator skill development
├── Maintenance technician training
├── Equipment expertise
├── Problem-solving capability
└── Goal: Competent workforce

7. Safety, Health, Environment
├── Safe equipment design
├── Safety procedures
├── Environmental compliance
├── Hazard elimination
└── Goal: Zero accidents

8. TPM in Administration
├── Office efficiency
├── Administrative processes
├── Support function improvement
├── Information systems
└── Goal: Efficient support

OEE (Overall Equipment Effectiveness):
OEE = Availability × Performance × Quality

Target: World-class OEE = 85%+
├── Availability: 90%+
├── Performance: 95%+
└── Quality: 99%+
```

#### Maintenance Strategies

```
MAINTENANCE HIERARCHY
=====================

Reactive Maintenance (Run-to-Failure)
├── Repair after breakdown
├── Appropriate for: Low-cost, non-critical items
├── Cost: Lowest planned, highest total
├── Downtime: Unpredictable, often extended
└── Example: Light bulbs, hand tools

Preventive Maintenance (Time-Based)
├── Scheduled at fixed intervals
├── Based on: Time, cycles, or production volume
├── Activities: Inspections, cleaning, lubrication, parts replacement
├── Cost: Moderate
├── Downtime: Planned, predictable
└── Example: Filter changes, belt replacements

Predictive Maintenance (Condition-Based)
├── Monitor equipment condition
├── Techniques:
│   ├── Vibration analysis
│   ├── Thermography (IR cameras)
│   ├── Oil analysis
│   ├── Ultrasound
│   └── Motor current analysis
├── Intervene before failure
├── Cost: Higher upfront, lower total
└── Example: HVAC compressor monitoring

Prescriptive Maintenance (AI-Enabled)
├── Advanced analytics and ML
├── Predicts failure timing
├── Recommends specific actions
├── Optimizes maintenance timing
└── Emerging for CEA

Maintenance Strategy Selection:
┌─────────────────────────────────────┐
│          │ Critical │ Important │ Basic│
│ ─────────┼──────────┼───────────┼─────│
│ High $   │ Predict  │ Prevent   │Prevent│
│ Medium $ │ Prevent  │ Prevent   │Reactive│
│ Low $    │ Prevent  │ Reactive  │Reactive│
└─────────────────────────────────────┘

CEA Equipment Classification:
├── Critical (Predictive + Preventive)
│   ├── HVAC chillers/boilers
│   ├── Lighting systems
│   ├── Irrigation pumps
│   └── Environmental controls
│
├── Important (Preventive)
│   ├── Fans and air handlers
│   ├── CO2 systems
│   ├── Water treatment
│   └── Packaging equipment
│
└── Basic (Reactive acceptable)
    ├── Hand tools
    ├── Small pumps
    ├── Bins and carts
    └── Office equipment
```

#### CMMS Implementation

```
CMMS FUNCTIONALITY
==================

Core Modules:

Asset Management
├── Equipment registry
├── Hierarchy and relationships
├── Specifications and documentation
├── Warranty tracking
├── Depreciation and value
└── Location tracking

Work Order Management
├── Work order creation
├── Priority assignment
├── Resource allocation
├── Scheduling
├── Time and cost tracking
├── Parts usage
└── Completion documentation

Preventive Maintenance
├── PM schedule templates
├── Automated work order generation
├── Checklist management
├── Compliance tracking
└── Schedule optimization

Inventory Management
├── Spare parts catalog
├── Stock levels and reorder points
├── Purchase requisitions
├── Receiving and issuing
├── Inventory valuation
└── Obsolescence management

Reporting and Analytics
├── Maintenance metrics/KPIs
├── Cost analysis
├── Equipment reliability
├── Labor productivity
├── Compliance reports
└── Custom dashboards

Mobile Access
├── Mobile work orders
├── Offline capability
├── Barcode/QR scanning
├── Photo/video capture
└── Real-time updates

CMMS Selection Criteria:
├── Industry fit (agriculture/manufacturing)
├── Scalability (multi-facility)
├── Integration (ERP, IoT)
├── Mobile capability
├── Ease of use
├── Cost (subscription vs. perpetual)
├── Vendor support
└── Implementation services

Implementation Timeline:
Month 1-2: Requirements and selection
Month 3-4: System configuration
Month 5: Data migration
Month 6: Training and pilot
Month 7-8: Full rollout
Month 9-12: Optimization

ROI Expectations:
├── Reduce downtime: 20-40%
├── Extend asset life: 10-20%
├── Reduce labor costs: 10-25%
├── Optimize inventory: 15-30%
└── Payback: 12-24 months
```

#### Maintenance KPIs

```
MAINTENANCE METRICS
===================

Equipment Reliability:
├── MTBF (Mean Time Between Failures)
│   └── Total uptime / Number of failures
├── MTTR (Mean Time To Repair)
│   └── Total repair time / Number of repairs
├── Availability %
│   └── Uptime / (Uptime + Downtime)
└── OEE (Overall Equipment Effectiveness)
    └── Availability × Performance × Quality

Maintenance Efficiency:
├── Schedule compliance %
│   └── PM completed on time / PM scheduled
├── Planned maintenance %
│   └── Planned hours / Total maintenance hours
├── Emergency maintenance %
│   └── Emergency work orders / Total WOs
├── Wrench time %
│   └── Actual work time / Total labor time
└── Backlog (weeks of work)
    └── Open work orders / Weekly capacity

Cost Metrics:
├── Maintenance cost per unit produced
├── Maintenance cost % of asset value
├── Labor cost vs. parts cost
├── Cost per work order
└── Budget variance %

Inventory Metrics:
├── Inventory turnover
├── Stock-out rate %
├── Obsolete inventory value
└── Parts availability %

Example Dashboard:
┌─────────────────────────────────────┐
│ Maintenance KPIs - December 2025    │
├─────────────────────────────────────┤
│ MTBF: 720 hours    (↑ Target: 500)  │
│ MTTR: 3.2 hours    (↓ Target: 4)    │
│ Availability: 94%  (↑ Target: 92%)  │
│ Schedule Compl: 87% (↓ Target: 90%) │
│ PM %: 68%          (↑ Target: 75%)  │
│ Emergency %: 15%   (↓ Target: 10%)  │
│ Wrench Time: 42%   (↓ Target: 55%)  │
│ Maint Cost/lb: $0.12 (✓ Target: $0.12)│
└─────────────────────────────────────┘
```

#### Spare Parts Management

```
SPARE PARTS STRATEGY
====================

Parts Classification:
├── Critical (High cost of downtime)
│   ├── Stock: Yes, min 1-2 units
│   ├── Suppliers: 2+ sources identified
│   └── Examples: HVAC compressor, control boards
│
├── Essential (Frequent use)
│   ├── Stock: Yes, based on usage rate
│   ├── Min/max inventory levels
│   └── Examples: Filters, belts, fuses
│
├── Standard (Available quickly)
│   ├── Stock: Selective
│   ├── Supplier agreements for fast delivery
│   └── Examples: Common fasteners, lubricants
│
└── Non-critical (Low impact)
    ├── Stock: No, order as needed
    └── Examples: Cosmetic parts, accessories

Criticality Matrix:
                High Downtime Impact
                    ↑
    Stock 2+    |   Stock 1+
    units       |   Fast supplier
    ────────────┼────────────
    Stock by    |   Order
    usage       |   as needed
                ↓
                Low Downtime Impact
        ←Low Lead Time    High Lead Time→

Inventory Optimization:
├── ABC analysis (Pareto principle)
├── EOQ for high-volume items
├── Safety stock for critical items
├── Kitting for PM jobs
├── Consignment for high-value items
└── Vendor-managed inventory (VMI)

Storeroom Management:
├── Organized layout (by equipment/type)
├── Clear labeling and identification
├── Barcode/RFID tracking
├── Min/max levels visible
├── Restricted access (control)
├── Cycle counting (accuracy)
└── 5S principles applied
```

### Practical Application

**Preventive Maintenance Program Design:**

```
PM PROGRAM EXAMPLE: HVAC SYSTEM
================================

Equipment: 200-ton chiller
Criticality: Critical (production depends on it)
Strategy: Predictive + Preventive

Daily (Autonomous by operator):
├── Visual inspection (leaks, unusual sounds)
├── Check gauges (pressure, temperature)
├── Verify operation
└── Log readings (5 min)

Weekly (Operator or technician):
├── Check refrigerant levels
├── Inspect electrical connections
├── Clean condenser coils
├── Test safety controls
└── Document (30 min)

Monthly (Technician):
├── Lubricate bearings
├── Check oil level and quality
├── Inspect belts and tighten
├── Calibrate sensors
├── Test alarms
└── Record (2 hours)

Quarterly (Technician):
├── Vibration analysis
├── Motor current analysis
├── Thermographic scan
├── Water treatment check
├── Performance test
└── Report (4 hours)

Annual (Specialist):
├── Full disassembly and inspection
├── Replace wear parts
├── Recalibrate all controls
├── Pressure test
├── Efficiency test
└── Certification (16 hours + downtime)

Condition Monitoring (Continuous):
├── Vibration sensors
├── Temperature sensors
├── Power monitoring
├── Run hours meter
└── Alert thresholds set in CMMS/BMS

Expected Results:
├── Availability: 98%+
├── MTBF: 3,000+ hours
├── Asset life: 20+ years
├── Energy efficiency maintained
└── Unplanned downtime: <2%
```

### Assessment Questions

1. What are the eight pillars of Total Productive Maintenance?
2. Describe the four maintenance strategies and when each is appropriate
3. How do you calculate OEE, and what are world-class targets?
4. What are the core modules of a CMMS, and what are implementation best practices?
5. How should spare parts be classified and managed?

### Key Takeaways

1. **Prevent, Don't React:** Shift from reactive to preventive/predictive maintenance
2. **Measure Reliability:** Track MTBF, MTTR, availability, and OEE
3. **Empower Operators:** Autonomous maintenance improves ownership and early detection
4. **Invest in CMMS:** Technology enables effective maintenance management
5. **Optimize Parts Inventory:** Balance availability with working capital
6. **Build Capability:** Training is essential for maintenance excellence
7. **Continuous Improvement:** Apply Lean and TPM principles to maintenance

---

**Next Module:** Module 10 - Safety and Compliance Programs
