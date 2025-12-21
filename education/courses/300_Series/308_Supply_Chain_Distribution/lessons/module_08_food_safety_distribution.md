# Module 8: Food Safety in Distribution

## Learning Objectives

By the end of this module, you will be able to:
- Implement HACCP principles in distribution
- Maintain traceability throughout the supply chain
- Comply with FSMA regulations
- Prevent contamination during transport and handling
- Respond to food safety incidents

---

## Food Safety Regulations

### FSMA (Food Safety Modernization Act)

**Key Requirements for Produce Distributors:**

```
FSMA PRODUCE SAFETY RULE COVERAGE

Covered Activities:
├─ Growing
├─ Harvesting
├─ Packing
├─ Holding (storage)
└─ Distribution

Critical Areas:
┌────────────────────────────────────────┐
│ 1. PERSONNEL HYGIENE                   │
│    - Handwashing facilities            │
│    - Toilet facilities                 │
│    - Training requirements             │
│    - Health and hygiene                │
├────────────────────────────────────────┤
│ 2. WATER QUALITY                       │
│    - Wash water testing                │
│    - Irrigation water (if applicable)  │
│    - Ice and cooling water             │
├────────────────────────────────────────┤
│ 3. EQUIPMENT & BUILDINGS               │
│    - Sanitary design                   │
│    - Cleanable surfaces                │
│    - Pest control                      │
│    - Maintenance                       │
├────────────────────────────────────────┤
│ 4. ANIMAL CONTROL                      │
│    - Domestic animal exclusion         │
│    - Wildlife intrusion prevention     │
├────────────────────────────────────────┤
│ 5. TRACEABILITY                        │
│    - Lot tracking (one-up, one-back)   │
│    - Recordkeeping (2 years minimum)   │
│    - Rapid recall capability           │
└────────────────────────────────────────┘
```

**Exemptions:**
- Farms with <$25,000 average annual produce sales (last 3 years)
- Farms with >50% direct-to-consumer sales (within 275 miles)
- Products rarely consumed raw

---

## HACCP in Distribution

### Critical Control Points (CCPs)

```
HACCP PLAN FOR FRESH PRODUCE DISTRIBUTION

CCP 1: RECEIVING
Hazard: Contaminated product at receiving
Critical Limit: Visual inspection, no visible contamination
Monitoring: Every delivery batch
Corrective Action: Reject contaminated product
Record: Receiving log

CCP 2: WASHING (if applicable)
Hazard: Cross-contamination, inadequate sanitizer
Critical Limit: Water chlorine 100-150 ppm, pH 6-7.5
Monitoring: Hourly testing
Corrective Action: Adjust chlorine, change water
Record: Wash water log

CCP 3: COLD STORAGE
Hazard: Temperature abuse, bacterial growth
Critical Limit: ≤41°F for most produce
Monitoring: Continuous temperature monitoring
Corrective Action: Equipment repair, product assessment
Record: Temperature logs

CCP 4: TRANSPORTATION
Hazard: Temperature abuse during transport
Critical Limit: ≤41°F throughout delivery
Monitoring: Data logger in vehicle
Corrective Action: Repair refrigeration, reject compromised product
Record: Transport temperature logs

CCP 5: CROSS-CONTAMINATION PREVENTION
Hazard: Contact with contaminants
Critical Limit: Separate raw/ready-to-eat, clean surfaces
Monitoring: Visual inspection, ATP swabs
Corrective Action: Re-clean, retrain staff
Record: Sanitation logs
```

### HACCP Documentation

**Required Records:**

```
HACCP RECORD SYSTEM

Daily Logs:
├─ Temperature monitoring (coolers, vehicles)
├─ Sanitation activities
├─ Employee health screening
├─ Receiving inspections
└─ Pest monitoring

Weekly Logs:
├─ Water testing (if washing)
├─ Equipment calibration
├─ Deep cleaning activities
└─ Training sessions

Monthly Logs:
├─ Preventive maintenance
├─ Supplier audits
├─ Internal audits
└─ Corrective actions

Annual Documentation:
├─ HACCP plan review
├─ Employee training records
├─ Regulatory inspections
└─ Third-party audits

Retention: Minimum 2 years (FSMA requirement)
```

---

## Traceability Systems

### One-Up, One-Back Traceability

```
TRACEABILITY FLOW

ONE-BACK (Where did it come from?):
┌─────────────────────────────────────┐
│ Field/Greenhouse ID: GH-3           │
│ Harvest Date: 12/08/2025            │
│ Harvester: John D.                  │
│ Lot Number: LT120825A               │
│ Quantity: 150 lbs                   │
└─────────────────────────────────────┘
         ↓
YOUR OPERATION:
┌─────────────────────────────────────┐
│ Received: 12/08/2025 10:00 AM       │
│ Cooler Location: Bay 2              │
│ Wash Date: 12/08/2025 11:00 AM      │
│ Pack Date: 12/08/2025 2:00 PM       │
│ Final Lot: LT120825A-P1             │
└─────────────────────────────────────┘
         ↓
ONE-UP (Where did it go?):
┌─────────────────────────────────────┐
│ Customer: Green Bistro              │
│ Ship Date: 12/09/2025               │
│ Quantity: 45 lbs                    │
│ Invoice: INV-2534                   │
│ Lot Delivered: LT120825A-P1         │
└─────────────────────────────────────┘

TRACEABILITY TEST:
Can you trace from customer back to field in <1 hour?
If NO, system needs improvement.
```

### Lot Coding System

**Effective Lot Code Design:**

```
LOT CODE STRUCTURE

Format: [PRODUCT][DATE][BATCH]-[PROCESS]

Example: LT120825A-P1
├─ LT: Lettuce
├─ 120825: December 8, 2025
├─ A: First harvest of day
├─ P1: Pack line 1
└─ Result: Complete traceability

Alternative Format: PPPYYMMDD-BB
├─ PPP: Product code (3 letters)
├─ YY: Year (2 digits)
├─ MM: Month
├─ DD: Day
├─ BB: Batch number
└─ Example: LET251208-01

Barcode Integration:
┌────────────────────┐
│ ▐▬▬▐ ▐▐ ▬▬ ▐▐▬ ▐▐ │
│  LT120825A-P1      │
│  Romaine Lettuce   │
│  Pack: 12/08/25    │
└────────────────────┘

Benefits:
✓ Instant product identification
✓ Harvest date visible
✓ Batch-level recalls (not whole day/week)
✓ FSMA compliance
```

### Traceability in Practice

**Mock Recall Exercise:**

```
RECALL DRILL SCENARIO

9:00 AM: Customer (Green Bistro) reports illness
         associated with lettuce purchased 12/9

9:15 AM: Pull invoice INV-2534
         └─ Lot delivered: LT120825A-P1

9:20 AM: Trace lot backwards
         ├─ Pack date: 12/08/25, 2:00 PM
         ├─ Wash batch: WB-120825-02
         ├─ Harvest: Field GH-3, 12/08 8:00 AM
         └─ Workers: John D., Maria S.

9:25 AM: Trace lot forwards (all customers)
         ├─ Green Bistro: 45 lbs (reported)
         ├─ Corner Cafe: 30 lbs (call to check)
         ├─ Farmers Market: 25 lbs (contact buyers)
         └─ Retail Store A: 50 lbs (request return)

9:30 AM: Isolate remaining inventory
         └─ 10 lbs remaining in cooler → quarantine

9:45 AM: Contact all affected customers
10:00 AM: Complete traceback/traceforward
          Report to health department

TOTAL TIME: 1 hour from report to complete trace

TARGET: <4 hours (FSMA requirement for some products)
BEST PRACTICE: <1 hour
```

---

## Sanitation & Hygiene

### Personnel Hygiene Requirements

```
EMPLOYEE HYGIENE PROTOCOL

Before Starting Work:
□ Clock in and review daily tasks
□ Put on clean uniform/apron
□ Wash hands thoroughly (20 seconds)
□ Put on hairnet and gloves (if required)
□ Remove jewelry and secure loose items

During Work:
□ Wash hands after:
  ├─ Using restroom
  ├─ Eating/drinking/smoking
  ├─ Touching face, hair, or body
  ├─ Handling trash or dirty equipment
  └─ Any contamination event

□ Change gloves:
  ├─ When damaged or soiled
  ├─ After touching non-food surfaces
  ├─ Between tasks
  └─ At least every 2 hours

Illness Policy:
□ Report symptoms before shift:
  ├─ Diarrhea or vomiting
  ├─ Fever
  ├─ Sore throat with fever
  ├─ Jaundice
  └─ Infected wounds/boils

□ Exclusion from work until:
  ├─ Symptom-free for 24 hours, OR
  ├─ Doctor's clearance provided

□ Report to supervisor immediately

Handwashing Stations:
├─ Soap and warm water
├─ Single-use towels
├─ Trash receptacle
├─ Signage with instructions
└─ Located near work areas
```

### Equipment & Facility Sanitation

**Daily Cleaning Schedule:**

```
SANITATION STANDARD OPERATING PROCEDURES (SSOPs)

HARVEST BINS/TOTES:
Frequency: After each use
Procedure:
1. Remove debris and product residue
2. Rinse with potable water
3. Wash with detergent solution
4. Rinse thoroughly
5. Sanitize (200 ppm chlorine, 1 min contact)
6. Air dry completely
7. Store inverted in clean area

WASH/PACK EQUIPMENT:
Frequency: End of each production day
Procedure:
1. Disassemble removable parts
2. Pre-rinse to remove debris
3. Wash all surfaces with detergent
4. Rinse thoroughly
5. Sanitize (quat or chlorine solution)
6. Air dry overnight
7. Reassemble before use

COOLER/COLD STORAGE:
Frequency: Weekly deep clean
Daily: Spot clean spills immediately
Procedure:
1. Remove all products
2. Sweep/vacuum floors
3. Wash walls, floors, shelves with detergent
4. Rinse thoroughly
5. Sanitize with approved solution
6. Squeegee floor, air dry
7. Return products (FIFO)

DELIVERY VEHICLES:
Frequency: After each route
Procedure:
1. Remove all debris and residue
2. Sweep cargo area
3. Wash floor and walls
4. Sanitize contact surfaces
5. Air out and dry
6. Weekly deep clean with pressure washer

VERIFICATION:
├─ ATP swab testing (weekly)
├─ Visual inspection (daily)
├─ Environmental monitoring (monthly)
└─ Third-party audit (annually)
```

**Sanitizer Options:**

| Sanitizer | Concentration | Contact Time | Pros | Cons |
|-----------|--------------|--------------|------|------|
| Chlorine bleach | 100-200 ppm | 1 minute | Inexpensive, effective | Corrosive, odor, degrades |
| Quaternary ammonia | 200-400 ppm | 1 minute | Non-corrosive, stable | More expensive |
| Peroxyacetic acid | 80 ppm | 15 seconds | Fast, food-safe | Expensive, unstable |
| Hydrogen peroxide | 150-200 ppm | 1 minute | Safe, no rinse needed | Less effective on biofilm |

---

## Transportation Food Safety

### Vehicle Sanitation

```
DELIVERY VEHICLE FOOD SAFETY PROTOCOL

PRE-TRIP INSPECTION:
□ Cargo area clean and dry
□ No strong odors present
□ Temperature unit functioning
□ No pest evidence
□ Previous load residue removed
□ Sanitized within 24 hours

LOADING PROCEDURES:
□ Products elevated off floor (pallets/racks)
□ No contact with walls or ceiling
□ Proper stacking (prevent crushing)
□ Incompatible products separated
□ Secure to prevent shifting

DURING TRANSPORT:
□ Maintain temperature (≤41°F or as required)
□ Minimize door openings
□ No unauthorized cargo (chemicals, pets, etc.)
□ No eating/drinking in cargo area
□ Monitor temperature continuously

DELIVERY:
□ Quick unloading (minimize temp exposure)
□ Inspect product before customer acceptance
□ Ensure customer has proper storage
□ Document any issues

POST-DELIVERY:
□ Remove all debris
□ Spot clean any spills
□ Full cleaning if contamination suspected
□ Document cleaning activity
```

### Load Segregation

```
PREVENTING CROSS-CONTAMINATION IN MIXED LOADS

COMPATIBLE GROUPING:
✓ All vegetables together
✓ Same temperature requirements
✓ Similar ethylene sensitivity
✓ Similar moisture needs

INCOMPATIBLE SEPARATION:
✗ Raw meat/seafood (never in same vehicle as produce)
✗ Chemicals (pesticides, cleaners)
✗ Non-food items (tools, equipment)
✗ Allergens (if serving allergy-sensitive customers)

PHYSICAL BARRIERS:
├─ Separate compartments (best)
├─ Plastic sheeting dividers
├─ Different levels (shelving)
└─ Minimum: 6" separation

DELIVERY SEQUENCE:
1. Deliver ready-to-eat products first
2. Deliver raw products after
3. Non-food items last
└─ Prevents contamination from later stops
```

---

## Responding to Food Safety Incidents

### Incident Response Protocol

```
FOOD SAFETY INCIDENT RESPONSE

PHASE 1: IMMEDIATE RESPONSE (0-2 hours)
□ Receive complaint/notification
□ Document all details (who, what, when, where)
□ Isolate suspected product immediately
□ Pull delivery/sales records
□ Notify management
□ Begin preliminary investigation

PHASE 2: INVESTIGATION (2-8 hours)
□ Conduct traceback (one-back)
□ Conduct traceforward (one-up)
□ Identify all affected lots
□ Assess scope of problem
□ Determine root cause
□ Contact suppliers (if applicable)

PHASE 3: CONTAINMENT (8-24 hours)
□ Quarantine all affected product
□ Notify all customers who received product
□ Coordinate returns/recalls
□ Contact health department (if required)
□ Implement corrective actions
□ Document all activities

PHASE 4: CORRECTIVE ACTION (1-7 days)
□ Address root cause
□ Revise procedures as needed
□ Retrain staff
□ Verify effectiveness of changes
□ Update HACCP plan
□ Communicate resolution to stakeholders

PHASE 5: PREVENTION (Ongoing)
□ Implement preventive measures
□ Monitor for recurrence
□ Share learnings with team
□ Update food safety plan
□ Third-party verification
```

### Voluntary Recall Procedure

```
PRODUCT RECALL STEPS

DECISION CRITERIA:
├─ Confirmed foodborne illness
├─ Presence of pathogens (test results)
├─ Allergen mislabeling
├─ Foreign material contamination
└─ Regulatory notification

RECALL EXECUTION:
1. ESTABLISH RECALL TEAM
   ├─ Owner/Manager (leader)
   ├─ Quality/Safety person
   ├─ Sales/Customer contact
   └─ Operations manager

2. DETERMINE SCOPE
   ├─ Product(s) affected
   ├─ Lot code(s)
   ├─ Date range
   ├─ Quantity distributed
   └─ Customer list

3. NOTIFY STAKEHOLDERS
   ├─ Customers (phone + email, within 24 hrs)
   ├─ Health department (if required)
   ├─ Insurance company
   └─ Suppliers (if source issue)

4. EXECUTE RECALL
   ├─ Request immediate product return
   ├─ Provide pickup or disposal instructions
   ├─ Track returned product
   ├─ Document all communications
   └─ Issue credit/refund

5. VERIFY EFFECTIVENESS
   ├─ Confirm all product accounted for
   ├─ No additional product in commerce
   ├─ Customer acknowledgment of recall
   └─ Health department clearance (if involved)

6. DISPOSE & DOCUMENT
   ├─ Destroy recalled product
   ├─ Document destruction (photos, weight)
   ├─ File final recall report
   └─ Review and improve procedures
```

### Communication Templates

**Customer Recall Notification:**

```
URGENT: PRODUCT RECALL NOTIFICATION

Date: ___________
To: [Customer Name]
From: [Your Farm Name]

SUBJECT: Voluntary Recall of [Product Name]

We are voluntarily recalling the following product(s):

Product: [e.g., Organic Spinach]
Lot Code: [e.g., SP120825A]
Delivery Date: [e.g., December 9, 2025]
Quantity: [e.g., 25 lbs]

REASON: [e.g., Potential for contamination]

ACTION REQUIRED:
1. Immediately stop using/selling this product
2. Isolate and hold product separately
3. Contact us at [phone] to arrange pickup
4. Provide verification of product removal

We sincerely apologize for this inconvenience and are taking
immediate corrective action to prevent recurrence.

For questions: [Contact Name], [Phone], [Email]

Thank you for your cooperation.

[Signature]
[Name], [Title]
[Farm Name]
```

---

## Food Safety Culture

### Building a Safety-First Mindset

```
FOOD SAFETY CULTURE ELEMENTS

LEADERSHIP COMMITMENT:
├─ Management visibly prioritizes safety
├─ Resources allocated to safety programs
├─ Safety performance rewarded
└─ Violations addressed consistently

EMPLOYEE EMPOWERMENT:
├─ Staff encouraged to report issues
├─ No retaliation for safety concerns
├─ Authority to stop unsafe practices
└─ Recognition for proactive safety behavior

TRAINING & EDUCATION:
├─ Initial training for all employees
├─ Ongoing refresher training
├─ Job-specific safety procedures
├─ Testing for comprehension
└─ Documentation of all training

COMMUNICATION:
├─ Regular safety meetings
├─ Visible safety reminders (posters, signs)
├─ Open discussion of incidents
├─ Sharing of best practices
└─ Feedback loops

ACCOUNTABILITY:
├─ Clear roles and responsibilities
├─ Performance metrics tracked
├─ Regular audits and inspections
├─ Corrective action follow-through
└─ Continuous improvement focus
```

### Training Program

**Required Training Topics:**

```
FOOD SAFETY TRAINING CURRICULUM

NEW EMPLOYEE ORIENTATION (Day 1):
□ Personal hygiene requirements
□ Handwashing procedure
□ Illness reporting
□ Basics of food safety
□ Tour of facility and safety features

POSITION-SPECIFIC TRAINING (Week 1):
□ Standard operating procedures (SOPs)
□ Critical control points for role
□ Equipment operation and cleaning
□ Proper product handling
□ Documentation requirements

REFRESHER TRAINING (Quarterly):
□ Review of procedures
□ Update on any changes
□ Incident reviews (lessons learned)
□ Q&A and competency check

ANNUAL RECERTIFICATION:
□ Comprehensive review
□ Written or practical exam
□ Update records
□ Identify additional training needs

SPECIALIZED TRAINING (As needed):
□ HACCP principles
□ Traceability systems
□ Sanitation procedures
□ Allergen management
□ Crisis response

DOCUMENTATION:
├─ Training attendance records
├─ Test scores
├─ Competency evaluations
├─ Certificates of completion
└─ Retention: Duration of employment + 2 years
```

---

## Summary

Food safety in distribution requires:

1. **Regulatory compliance**: Understand and follow FSMA requirements
2. **HACCP implementation**: Identify and control critical points
3. **Traceability**: One-up, one-back system for rapid response
4. **Sanitation**: Clean facilities, equipment, and vehicles
5. **Training**: Well-trained, safety-focused team

**Key Takeaways:**
- Food safety is non-negotiable
- Traceability system must enable <4 hour traceback
- Prevention is far better than responding to incidents
- Documentation proves your commitment to safety
- Culture starts at the top and involves everyone

Excellent food safety practices protect consumers, your reputation, and your business.

---

**Next Module**: [Module 9: Third-Party Logistics](module_09_third_party_logistics.md)

---

*EcoFusion Academy - Course 308: Supply Chain & Distribution*
