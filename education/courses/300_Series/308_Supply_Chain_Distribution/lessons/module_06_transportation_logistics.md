# Module 6: Transportation & Logistics

## Learning Objectives

By the end of this module, you will be able to:
- Design efficient delivery routes
- Select and maintain delivery vehicles
- Calculate transportation costs
- Optimize logistics operations
- Implement delivery tracking systems

---

## Transportation Planning

### Delivery Route Optimization

**Route Planning Fundamentals:**

```
ROUTE OPTIMIZATION FACTORS

1. GEOGRAPHIC CLUSTERING
   ┌──────────────────────────┐
   │    Your Farm             │
   │        ★                 │
   │                          │
   │   Zone A    Zone B       │
   │   ● ● ●     ● ● ●        │
   │   Mon/Thu   Tue/Fri      │
   │                          │
   │   Zone C                 │
   │   ● ● ●                  │
   │   Wed/Sat                │
   └──────────────────────────┘

   Strategy: Group customers by area
   Frequency: Serve each zone 1-2x/week

2. TIME WINDOWS
   Restaurant A: 7-9 AM (before lunch prep)
   Restaurant B: 7-9 AM (before lunch prep)
   Retail Store: 10-12 PM (after receiving opens)
   CSA Pickup: 4-6 PM (after work hours)

   Strategy: Group compatible time windows

3. ORDER SIZE
   Large orders (>50 lbs): Direct delivery
   Small orders (<25 lbs): Combine with route

   Strategy: Minimum delivery thresholds
```

**Route Design Example:**

```
TUESDAY ROUTE - DOWNTOWN ZONE

Depart Farm: 6:00 AM
├─ Stop 1: Restaurant A (6:45 AM)
│  └─ 75 lbs, 15 min delivery
├─ Stop 2: Restaurant B (7:15 AM)
│  └─ 120 lbs, 20 min delivery
├─ Stop 3: Cafe C (7:50 AM)
│  └─ 35 lbs, 10 min delivery
├─ Stop 4: Restaurant D (8:15 AM)
│  └─ 90 lbs, 15 min delivery
├─ Stop 5: Retail Store E (9:00 AM)
│  └─ 150 lbs, 25 min delivery
└─ Return to Farm: 10:00 AM

Route Efficiency:
Total distance: 45 miles
Total delivery time: 4 hours
Deliveries: 5 stops
Volume: 470 lbs
Cost per delivery: $8 (total $40)
Cost per lb: $0.085
```

### Routing Software Tools

**Options:**

1. **Free/Low-Cost:**
```
Google Maps Route Planning
├─ Cost: Free
├─ Features: Basic routing, 10 stops
├─ Pros: Easy, familiar interface
├─ Cons: Manual planning, no optimization
└─ Best for: <5 stops, simple routes

Circuit Route Planner
├─ Cost: Free to $50/month
├─ Features: Route optimization, 500 stops
├─ Pros: Easy to use, delivery tracking
├─ Cons: Limited customization
└─ Best for: 5-20 daily stops
```

2. **Professional:**
```
Route4Me
├─ Cost: $199-499/month
├─ Features: Advanced optimization, analytics
├─ Pros: Large route capacity, reporting
├─ Cons: Higher cost, learning curve
└─ Best for: 20+ stops, multiple vehicles

Onfleet
├─ Cost: $500+/month
├─ Features: Dispatch, driver apps, customer notifications
├─ Pros: Complete delivery management
├─ Cons: Expensive, may be overkill for small operations
└─ Best for: Large operations, multiple drivers
```

3. **DIY Spreadsheet:**
```
Custom Route Planner (Excel/Google Sheets)
├─ Cost: Free
├─ Features: Customer database, route templates
├─ Pros: Customizable, low cost
├─ Cons: Manual, time-consuming
└─ Template includes:
    - Customer addresses
    - Delivery days/times
    - Order history
    - Route mapping
```

**ROI Calculation:**

```
ROUTING SOFTWARE ROI

Current State (Manual Planning):
├─ Time planning routes: 2 hours/week
├─ Inefficient routing: +15 miles/day
├─ Extra fuel cost: $25/week
├─ Opportunity cost of time: $50/week
└─ Total weekly cost: $75

With Route Optimization Software ($50/month):
├─ Time planning: 30 min/week (saves 1.5 hrs)
├─ Optimized routing: Baseline miles
├─ Fuel savings: $25/week
├─ Time savings value: $37.50/week
├─ Total weekly savings: $62.50
└─ Monthly savings: $250

Software cost: $50/month
Net monthly benefit: $200
ROI: 400%
Payback: Immediate
```

---

## Vehicle Selection & Management

### Vehicle Options

**Small Van (e.g., Ford Transit Connect, Ram ProMaster City):**
```
COMPACT VAN SPECIFICATIONS

Capacity: 800-1,200 lbs
Cargo Space: 130-150 cubic feet
Fuel Economy: 22-28 MPG

Cost:
├─ New: $28,000-35,000
├─ Used (3-5 yrs): $15,000-22,000
└─ Operating: $0.45-0.60/mile

Pros:
├─ Excellent fuel economy
├─ Easy to drive and park
├─ Lower purchase price
└─ Adequate for most small farm deliveries

Cons:
├─ Limited capacity for growth
├─ May need multiple trips for large days
└─ Refrigeration options limited

Best For:
└─ 500-2,000 lbs/week delivery volume
```

**Large Van (e.g., Ford Transit, Mercedes Sprinter):**
```
FULL-SIZE VAN SPECIFICATIONS

Capacity: 2,000-4,500 lbs
Cargo Space: 250-500 cubic feet
Fuel Economy: 14-18 MPG

Cost:
├─ New: $40,000-55,000 (insulated/refrigerated: +$15K-30K)
├─ Used (3-5 yrs): $25,000-38,000
└─ Operating: $0.65-0.85/mile

Pros:
├─ Large capacity for growth
├─ Available with refrigeration
├─ Professional appearance
└─ Long wheelbase options

Cons:
├─ Higher purchase cost
├─ Lower fuel economy
├─ Larger, harder to maneuver
└─ Higher maintenance costs

Best For:
└─ 2,000-10,000 lbs/week delivery volume
```

**Box Truck (e.g., Isuzu NPR, Hino):**
```
BOX TRUCK SPECIFICATIONS

Capacity: 6,000-12,000 lbs
Cargo Space: 600-1,000 cubic feet
Fuel Economy: 10-13 MPG

Cost:
├─ New: $50,000-90,000 (with refrigeration)
├─ Used (3-5 yrs): $30,000-55,000
└─ Operating: $1.00-1.50/mile

Pros:
├─ Maximum capacity
├─ Walk-in convenience
├─ Refrigeration standard
└─ Commercial-grade durability

Cons:
├─ High purchase and operating cost
├─ Requires commercial license (often)
├─ Poor fuel economy
└─ Overkill for most small-medium farms

Best For:
└─ 10,000+ lbs/week, wholesale focus
```

### Refrigerated vs. Insulated

**Decision Matrix:**

| Climate/Season | Delivery Duration | Distance | Recommendation |
|----------------|------------------|----------|----------------|
| Cool (<60°F) | <2 hours | <30 miles | Insulated OK |
| Cool (<60°F) | 2-4 hours | 30-60 miles | Insulated + Ice packs |
| Moderate (60-75°F) | <2 hours | <30 miles | Insulated + Ice packs |
| Moderate (60-75°F) | 2-4 hours | 30-60 miles | Refrigerated preferred |
| Hot (>75°F) | Any | Any | Refrigerated required |

**Insulated Van Conversion:**

```
DIY INSULATION PROJECT

Materials (for cargo van):
├─ Reflectix radiant barrier: $150
├─ 1" foam board insulation (R-5): $200
├─ Spray foam for gaps: $50
├─ Plywood interior panels: $150
├─ Fasteners, adhesive: $50
├─ Ventilation fans (2): $100
└─ TOTAL COST: $700

Installation: 2-3 days DIY or $500-1,000 professional

Performance:
├─ Maintains product temp 2-4 hours (with ice packs)
├─ Suitable for cool weather, short routes
└─ 95% less cost than refrigeration unit

Limitations:
├─ No active cooling (hot weather issues)
├─ Requires ice pack management
└─ Temperature rise over time
```

**Refrigeration Unit:**

```
VEHICLE REFRIGERATION OPTIONS

Roof-Mounted Unit (e.g., Thermo King, Carrier):
├─ Cost: $8,000-15,000 installed
├─ Power: Vehicle engine (PTO) or electric standby
├─ Temp range: -20°F to 60°F
├─ Fuel penalty: 10-20% worse MPG
├─ Maintenance: $500-1,000/year
└─ Lifespan: 10-15 years

Pros:
├─ Active temperature control
├─ All-season, all-weather capability
├─ Professional presentation
└─ Compliance with cold chain requirements

Cons:
├─ High upfront cost
├─ Fuel and maintenance costs
├─ Complex installation
└─ Overkill for some operations

Best For:
├─ Hot climates
├─ Long delivery routes (>2 hours)
├─ Year-round operation
├─ Volume justifies investment
```

### Vehicle Maintenance

**Preventive Maintenance Schedule:**

```
DELIVERY VEHICLE MAINTENANCE

DAILY (Before Route):
□ Check tire pressure
□ Inspect for leaks (oil, coolant)
□ Test refrigeration unit (if equipped)
□ Clean cargo area
□ Verify fuel level

WEEKLY:
□ Deep clean cargo area (sanitize)
□ Check all lights and signals
□ Inspect cargo tie-downs
□ Review mileage and fuel logs
□ Check fluid levels

MONTHLY:
□ Oil change (or per manufacturer)
□ Tire rotation
□ Brake inspection
□ Battery check
□ Refrigeration system check

ANNUALLY:
□ Comprehensive inspection
□ Replace air filter, cabin filter
□ Coolant flush
□ Transmission service
□ Refrigeration system service
□ Safety inspection (if required)

Estimated Annual Maintenance:
├─ Regular maintenance: $1,200-2,000
├─ Refrigeration service: $500-1,000
├─ Unexpected repairs: $500-1,500
└─ TOTAL: $2,200-4,500/year
```

**Breakdown Protocol:**

```
VEHICLE BREAKDOWN RESPONSE

IMMEDIATE (Within 15 minutes):
□ Assess situation and safety
□ Call roadside assistance/tow service
□ Alert customers of potential delay
□ Check product temperature

BACKUP PLAN:
□ Option A: Backup vehicle retrieves product
□ Option B: Transfer to personal vehicle for critical deliveries
□ Option C: Rent truck (U-Haul, Enterprise)
□ Option D: Postpone non-critical deliveries

CUSTOMER COMMUNICATION:
□ Notify all affected customers
□ Provide realistic updated ETA
□ Offer credit/discount for inconvenience
□ Follow up after situation resolved

PREVENTION:
□ Maintain preventive maintenance schedule
□ Keep backup vehicle available (if possible)
□ Roadside assistance membership (AAA, commercial)
□ Relationship with local rental company
□ Emergency fund for repairs
```

---

## Transportation Costs

### Cost Calculation

**Total Cost of Ownership:**

```
ANNUAL VEHICLE OPERATING COST

Vehicle: Refrigerated van (example)

FIXED COSTS (Annual):
├─ Depreciation: $4,000
│  (Purchase $35,000, 5-year life, $15,000 residual)
├─ Insurance: $2,500
├─ Registration/taxes: $300
├─ Loan interest (if financed): $1,500
└─ TOTAL FIXED: $8,300/year

VARIABLE COSTS (Annual, 20,000 miles):
├─ Fuel: $3,200
│  (20,000 miles ÷ 15 MPG × $2.40/gal)
├─ Maintenance: $2,000
├─ Tires: $600 (amortized)
├─ Repairs: $1,000
└─ TOTAL VARIABLE: $6,800/year

TOTAL ANNUAL COST: $15,100
Cost per mile: $0.76
Cost per delivery (100/year): $151
Cost per lb delivered (80,000 lbs/year): $0.19
```

**Reducing Transportation Costs:**

1. **Route Optimization** (10-20% reduction)
   - Minimize total miles
   - Reduce deadhead miles
   - Cluster deliveries

2. **Fuel Efficiency** (5-15% reduction)
   - Maintain tire pressure
   - Reduce idle time
   - Smooth driving (no hard acceleration)
   - Remove excess weight

3. **Maintenance** (10-20% reduction)
   - Preventive maintenance prevents costly repairs
   - Extend vehicle life
   - Reduce downtime

4. **Delivery Efficiency** (15-25% reduction)
   - Minimize delivery time per stop
   - Combine orders for same area
   - Offer pickup options to reduce deliveries

**Example Cost Reduction:**

```
LOGISTICS OPTIMIZATION RESULTS

Before Optimization:
├─ Routes: Ad-hoc, daily planning
├─ Miles per week: 300
├─ Deliveries: 25
├─ Weekly cost: $228 (300 mi × $0.76)
├─ Cost per delivery: $9.12
└─ Annual cost: $11,856

After Optimization:
├─ Routes: Planned, geographic clustering
├─ Miles per week: 225 (-25%)
├─ Deliveries: 25 (same)
├─ Weekly cost: $171 (225 mi × $0.76)
├─ Cost per delivery: $6.84
└─ Annual cost: $8,892

SAVINGS:
├─ Weekly: $57
├─ Annual: $2,964
├─ ROI on route planning time: High
└─ Also: Reduced emissions, vehicle wear
```

### Pricing Delivery Fees

**Delivery Fee Strategies:**

```
STRATEGY OPTIONS

1. FREE DELIVERY (Minimum Order)
   ├─ Fee: $0 with $50+ order
   ├─ Pros: Encourages larger orders
   ├─ Cons: Farm absorbs delivery cost
   └─ Best for: Building customer loyalty

2. FLAT FEE
   ├─ Fee: $10 per delivery
   ├─ Pros: Simple, predictable
   ├─ Cons: May discourage small orders
   └─ Best for: Consistent route density

3. TIERED BY ORDER SIZE
   ├─ $0-25: $15 delivery fee
   ├─ $25-50: $10 delivery fee
   ├─ $50-100: $5 delivery fee
   ├─ $100+: Free delivery
   └─ Pros: Incentivizes larger orders

4. ZONE-BASED
   ├─ Zone 1 (0-10 mi): $5
   ├─ Zone 2 (10-20 mi): $10
   ├─ Zone 3 (20-30 mi): $15
   └─ Pros: Fair based on distance

5. INCLUDED IN PRODUCT PRICE
   ├─ Fee: $0 (delivery built into pricing)
   ├─ Pros: Seamless customer experience
   ├─ Cons: Less transparent
   └─ Product priced +10-15% vs. pickup
```

**Breakeven Analysis:**

```
DELIVERY FEE CALCULATION

Route Example:
├─ 6 stops, 40 miles, 3.5 hours
├─ Vehicle cost: $0.76/mile × 40 = $30
├─ Labor cost: 3.5 hrs × $20/hr = $70
├─ Total route cost: $100

Breakeven per delivery: $100 ÷ 6 = $16.67

Options:
├─ Charge $15-20 delivery fee (cover cost)
├─ Charge $10 fee, absorb $6.67 (marketing expense)
├─ Charge $0 fee with $75 minimum (order value justifies cost)
└─ Build into pricing (+$0.50/lb = $37.50 on 75lb order)
```

---

## Delivery Operations

### Standard Operating Procedure

```
DELIVERY SOP

PRE-DELIVERY (Day Before):
□ Confirm all orders and quantities
□ Prepare invoices/delivery receipts
□ Plan route and print/load in GPS
□ Pre-cool vehicle overnight
□ Charge data logger/temperature monitor
□ Prepare ice packs (if needed)

MORNING OF DELIVERY:
□ Vehicle safety check (tires, lights, fluids)
□ Start refrigeration unit, verify temperature
□ Load products in delivery sequence (last stop in first)
□ Secure products (prevent shifting)
□ Place temperature monitor
□ Load invoices, cash box, payment terminal
□ Verify delivery addresses and contact info

DURING DELIVERY:
□ Follow planned route
□ Minimize door-open time (<2 min per stop)
□ Verify product and quantity with customer
□ Obtain signature on delivery receipt
□ Collect payment (if not on account)
□ Note any issues (shortages, rejections, quality concerns)
□ Check cargo temperature periodically
□ Update customers if delays occur

AT DELIVERY STOP:
□ Greet customer professionally
□ Unload order quickly
□ Verify items and pricing
□ Address any questions/concerns
□ Leave invoice/receipt
□ Obtain signature
□ Thank customer
□ Depart promptly

AFTER DELIVERIES:
□ Return to farm
□ Unload any returns or unsold product
□ Clean vehicle cargo area
□ Download temperature data
□ Complete delivery logs
□ Process payments
□ Update customer records
□ Report any issues to management

WEEKLY:
□ Deep clean and sanitize vehicle
□ Review delivery metrics
□ Maintain vehicle
□ Restock supplies
```

### Driver Training

**Essential Training Topics:**

```
DRIVER TRAINING CHECKLIST

□ Vehicle Operation
  ├─ Driving and parking techniques
  ├─ Refrigeration system operation
  ├─ Pre-trip inspection
  └─ Emergency procedures

□ Cold Chain Management
  ├─ Temperature monitoring
  ├─ Proper product handling
  ├─ Minimizing temperature exposure
  └─ Ice pack management

□ Customer Service
  ├─ Professional communication
  ├─ Problem resolution
  ├─ Upselling techniques
  └─ Representing farm brand

□ Product Knowledge
  ├─ Product varieties and uses
  ├─ Storage recommendations
  ├─ Organic certification
  └─ Farm story and values

□ Safety
  ├─ Lifting techniques
  ├─ Slip/trip/fall prevention
  ├─ Road safety
  └─ Emergency contact procedures

□ Documentation
  ├─ Delivery receipts
  ├─ Temperature logs
  ├─ Payment processing
  └─ Issue reporting

□ Technology
  ├─ GPS/routing software
  ├─ Payment terminal
  ├─ Customer communication
  └─ Data logger operation
```

### Delivery Tracking

**System Components:**

```
DELIVERY TRACKING TECHNOLOGY

GPS Tracking:
├─ Device: Smartphone or dedicated GPS
├─ Apps: Onfleet, Route4Me, Circuit
├─ Benefits: Real-time location, route proof
└─ Cost: $0-50/month

Customer Notifications:
├─ Automated delivery window notifications
├─ "Driver on the way" alerts
├─ Delivery confirmation
└─ Tools: Onfleet, custom SMS system

Temperature Monitoring:
├─ Data logger in cargo area
├─ Continuous recording
├─ Alert if out of range
├─ Downloadable records
└─ Cost: $100-300 per logger

Proof of Delivery:
├─ Electronic signature capture (tablet/phone)
├─ Photo documentation
├─ Timestamp
└─ Cloud storage

Analytics:
├─ Delivery time per stop
├─ Route efficiency
├─ On-time performance
├─ Customer satisfaction
└─ Cost per delivery
```

---

## Logistics Metrics & KPIs

### Key Performance Indicators

```
LOGISTICS KPI DASHBOARD

EFFICIENCY METRICS:
┌─────────────────────────────────────────┐
│ Deliveries per Route:  8               │
│ Target: >6                              │
│ Status: ✓ Exceeds                       │
├─────────────────────────────────────────┤
│ Cost per Delivery:  $8.50              │
│ Target: <$10                            │
│ Status: ✓ Meets                         │
├─────────────────────────────────────────┤
│ Miles per Delivery:  5.2 mi             │
│ Target: <6 mi                           │
│ Status: ✓ Meets                         │
├─────────────────────────────────────────┤
│ Cost per Pound Delivered:  $0.17       │
│ Target: <$0.20                          │
│ Status: ✓ Meets                         │
└─────────────────────────────────────────┘

QUALITY METRICS:
┌─────────────────────────────────────────┐
│ On-Time Delivery Rate:  96%            │
│ Target: >95%                            │
│ Status: ✓ Exceeds                       │
├─────────────────────────────────────────┤
│ Order Accuracy:  99%                   │
│ Target: >98%                            │
│ Status: ✓ Exceeds                       │
├─────────────────────────────────────────┤
│ Temperature Compliance:  100%          │
│ Target: 100%                            │
│ Status: ✓ Meets                         │
├─────────────────────────────────────────┤
│ Customer Satisfaction:  4.7/5          │
│ Target: >4.5                            │
│ Status: ✓ Exceeds                       │
└─────────────────────────────────────────┘

UTILIZATION METRICS:
┌─────────────────────────────────────────┐
│ Vehicle Capacity Used:  78%            │
│ Target: >70%                            │
│ Status: ✓ Meets                         │
├─────────────────────────────────────────┤
│ Delivery Days per Week:  4             │
│ (Consolidated from 5)                   │
│ Efficiency gain: 20%                    │
└─────────────────────────────────────────┘
```

### Performance Improvement

**Common Issues & Solutions:**

| Issue | Cause | Solution |
|-------|-------|----------|
| High cost per delivery | Too many stops, inefficient routing | Cluster customers, optimize routes, delivery minimums |
| Late deliveries | Traffic, poor planning, too many stops | Earlier start, route planning, realistic schedules |
| Temperature failures | Equipment malfunction, door open time | Preventive maintenance, driver training, backup systems |
| Customer complaints | Communication gaps, quality issues | Proactive notifications, quality control, feedback loops |
| Vehicle breakdowns | Deferred maintenance | Preventive maintenance schedule, backup vehicle |

---

## Summary

Effective transportation and logistics:

1. **Plan routes strategically**: Cluster deliveries by geography and time
2. **Right-size vehicles**: Match capacity to volume, balance cost vs. capability
3. **Maintain cold chain**: Temperature integrity throughout transport
4. **Track and measure**: KPIs drive continuous improvement
5. **Train drivers**: Professional, knowledgeable team represents your brand

**Key Takeaways:**
- Route optimization can reduce costs 20-30%
- Cold chain compliance is non-negotiable
- Technology investments pay off quickly
- Driver quality impacts customer experience
- Logistics efficiency improves profitability

Professional logistics separates successful operations from struggling ones.

---

**Next Module**: [Module 7: Inventory Management](module_07_inventory_management.md)

---

*EcoFusion Academy - Course 308: Supply Chain & Distribution*
