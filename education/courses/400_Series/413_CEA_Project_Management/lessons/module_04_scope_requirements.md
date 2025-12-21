# Module 4: Scope Definition & Requirements Management

## Learning Objectives

By the end of this module, you will be able to:
- Gather and document functional and technical requirements for CEA facilities
- Create comprehensive requirements traceability matrices
- Develop detailed project scope statements
- Implement effective change control processes
- Manage scope creep and prevent gold plating
- Balance competing requirements from multiple stakeholders

---

## 1. Requirements Gathering Methodologies

### Requirements Categories for CEA Projects

```
CEA PROJECT REQUIREMENTS HIERARCHY
+===================================================================+
|                                                                   |
| BUSINESS REQUIREMENTS                                             |
| - Market positioning and competitive strategy                     |
| - Financial performance targets (ROI, payback, margins)           |
| - Production capacity and crop mix                                |
| - Quality standards and certifications                            |
| - Timeline and budget constraints                                 |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| FUNCTIONAL REQUIREMENTS                                           |
| - Production system capabilities (what it must do)                |
| - Environmental control performance                               |
| - Automation and data management functions                        |
| - Safety and emergency response capabilities                      |
| - Maintenance and serviceability requirements                     |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| TECHNICAL REQUIREMENTS                                            |
| - Engineering specifications (how it will be built)               |
| - Equipment and material standards                                |
| - Performance parameters (temp range, humidity, lighting levels)  |
| - Integration protocols and interfaces                            |
| - Code compliance and regulatory requirements                     |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| OPERATIONAL REQUIREMENTS                                          |
| - Staffing and workflow considerations                            |
| - Accessibility and ergonomics                                    |
| - Training and documentation needs                                |
| - Spare parts and consumables management                          |
| - Scalability and future expansion                                |
|                                                                   |
+===================================================================+
```

### Requirements Gathering Techniques

**1. Stakeholder Interviews**
```
INTERVIEW GUIDE: HEAD GROWER
+-------------------------------------------------------------------+
| SECTION 1: CURRENT STATE                                          |
| - What production system do you currently use?                    |
| - What works well? What are pain points?                          |
| - What crops do you grow? What would you like to grow?            |
| - What are your biggest operational challenges?                   |
+-------------------------------------------------------------------+
| SECTION 2: DESIRED STATE                                          |
| - What production capacity do you need?                           |
| - What environmental control capabilities are critical?           |
| - What level of automation would be ideal?                        |
| - What data and monitoring capabilities do you need?              |
| - What are your "must-haves" vs. "nice-to-haves"?                 |
+-------------------------------------------------------------------+
| SECTION 3: CONSTRAINTS & PREFERENCES                              |
| - What systems/vendors have you used successfully?                |
| - What should we avoid based on your experience?                  |
| - What training and support will your team need?                  |
| - How do you envision daily operations?                           |
+-------------------------------------------------------------------+
| SECTION 4: SUCCESS CRITERIA                                       |
| - How will you judge if this facility is successful?              |
| - What performance metrics matter most?                           |
| - What would be unacceptable compromises?                         |
+-------------------------------------------------------------------+
```

**2. Workshops & Facilitated Sessions**
- Bring cross-functional team together
- Use structured facilitation techniques:
  - Brainstorming (divergent thinking)
  - Multi-voting (convergent prioritization)
  - Affinity mapping (group similar requirements)
- Document requirements in real-time
- Build consensus and shared understanding

**3. Benchmarking & Site Visits**
- Visit existing CEA facilities
- Interview operators about what works/doesn't work
- Observe actual operations
- Photograph equipment layouts and workflows
- Document lessons learned

**4. Prototyping & Mock-ups**
- Create physical mock-ups of workstations
- Test ergonomics and workflow
- Validate spacing and clearances
- Identify issues before construction

---

## 2. Requirements Documentation

### Requirements Specification Template

```
REQUIREMENT SPECIFICATION
+===================================================================+
| REQ ID: FR-HVAC-001                                               |
| CATEGORY: Functional Requirement - Environmental Control          |
| PRIORITY: High                                                    |
| SOURCE: Head Grower (M. Garcia), Crop Science Team                |
+===================================================================+

REQUIREMENT STATEMENT:
The facility shall maintain growing zone temperature within ±2°F of
setpoint during all operating conditions and all seasons.

RATIONALE:
Temperature stability is critical for consistent crop quality and
predictable harvest cycles. Variations >±2°F can cause stress,
tipburn in lettuce, and extended crop cycles that impact production
planning.

ACCEPTANCE CRITERIA:
1. Growing zone temperature shall be measured at canopy level
2. Measurements shall be taken at minimum 1 per 1000 sf
3. 95% of readings shall be within ±2°F of setpoint
4. System shall maintain setpoint under:
   - Outdoor temp range: -10°F to 105°F
   - Full lighting load (max heat gain)
   - 100% production capacity
5. Recovery time from ±5°F deviation shall be <15 minutes

VERIFICATION METHOD:
- Factory Acceptance Test (FAT): Simulate load conditions
- Site Acceptance Test (SAT): Actual operating conditions, 7-day test
- Commissioning: 30-day performance verification

DEPENDENCIES:
- REQ-HVAC-002: HVAC system sizing
- REQ-ELEC-005: Electrical capacity for cooling
- REQ-AUTO-010: Temperature sensor network
- REQ-BMS-003: Control system response time

RISKS:
- Inadequate HVAC capacity (likelihood: medium, impact: high)
- Sensor accuracy/calibration (likelihood: low, impact: medium)

NOTES:
Consider setpoint ranges by crop type (lettuce 68-72°F, herbs 70-75°F).
Design should accommodate future crop diversification.

APPROVAL:
Stakeholder: M. Garcia, Head Grower    Date: ___________
Reviewer: S. Johnson, Project Manager  Date: ___________
```

### Requirements Traceability Matrix (RTM)

```
REQUIREMENTS TRACEABILITY MATRIX - CEA FACILITY PROJECT
+==============================================================================+
| Req    | Requirement      | Source     | Design    | Test      | Status     |
| ID     | Description      | Document   | Reference | Plan      |            |
+========+==================+============+===========+===========+============+
| BR-001 | Produce 2.4M lbs | Business   | Facility  | SAT-001   | Approved   |
|        | annually         | Case       | Layout    | Production|            |
|        |                  |            | 50K sf    | Validation|            |
+--------+------------------+------------+-----------+-----------+------------+
| BR-002 | Achieve $8/lb    | Business   | Equipment | Commissioning| Approved|
|        | operating cost   | Case       | Selection,| Energy &  |            |
|        |                  |            | HVAC      | Labor     |            |
|        |                  |            | Design    | Tracking  |            |
+--------+------------------+------------+-----------+-----------+------------+
| FR-001 | Temp control     | Head       | HVAC      | SAT-005   | Approved   |
|        | ±2°F setpoint    | Grower     | Spec      | Environmental          |
|        |                  |            | Section   | Performance|            |
|        |                  |            | 23 05 00  |            |            |
+--------+------------------+------------+-----------+-----------+------------+
| FR-002 | Humidity control | Head       | Dehumid.  | SAT-005   | Approved   |
|        | ±5% RH setpoint  | Grower     | Spec      | Environmental          |
|        |                  |            | Section   | Performance|            |
|        |                  |            | 23 72 00  |            |            |
+--------+------------------+------------+-----------+-----------+------------+
| FR-003 | Automated        | Operations | Irrigation| FAT-003   | In Progress|
|        | irrigation with  | Manager    | Control   | SAT-008   |            |
|        | nutrient dosing  |            | Spec      |            |            |
+--------+------------------+------------+-----------+-----------+------------+
| TR-001 | LED lighting     | Energy     | Lighting  | FAT-001   | Approved   |
|        | 18 hours/day at  | Consultant | Design    | SAT-006   |            |
|        | 600 μmol/m²/s    |            | Drawings  |            |            |
+--------+------------------+------------+-----------+-----------+------------+
| TR-002 | BMS integration  | Automation | Controls  | FAT-004   | In Progress|
|        | all MEP systems  | Consultant | Spec      | SAT-010   |            |
|        |                  |            | 25 00 00  | Integration|            |
+--------+------------------+------------+-----------+-----------+------------+
| RR-001 | IBC 2021         | Building   | Structural| Building  | Approved   |
|        | compliance       | Dept.      | Design,   | Permit    |            |
|        |                  |            | All trades| Inspections|            |
+--------+------------------+------------+-----------+-----------+------------+
| RR-002 | USDA GAP         | Quality    | Process   | Operational| Pending   |
|        | certification    | Manager    | Design    | Audit     |            |
+--------+------------------+------------+-----------+-----------+------------+

Status Codes:
- Approved: Requirement finalized and approved
- In Progress: Being developed/designed
- Pending: Not yet addressed
- On Hold: Deferred pending decision
- Rejected: Not included in scope
+==============================================================================+

RTM Statistics:
Total Requirements: 187
Approved: 142 (76%)
In Progress: 38 (20%)
Pending: 7 (4%)
On Hold: 0
Rejected: 0

Coverage Analysis:
✓ All business requirements traced to design
✓ All functional requirements have test plans
✓ All regulatory requirements mapped to compliance verification
⚠ 7 pending requirements need resolution before construction
```

---

## 3. Scope Statement Development

### Project Scope Statement Template

```
PROJECT SCOPE STATEMENT
GreenLeaf Regional Vertical Farm
+===================================================================+

1. PRODUCT SCOPE DESCRIPTION
   The project will deliver a 50,000 square foot vertical farming
   facility producing 2.4 million pounds annually of pesticide-free
   leafy greens and herbs. The facility will include:

   • Site improvements (3-acre site)
   • Building shell (50,000 sf commercial/industrial)
   • Complete environmental control systems (HVAC, dehumidification)
   • 12-tier vertical growing systems with automated irrigation
   • LED lighting system (full-spectrum, programmable)
   • Building Management System with remote monitoring
   • Processing and packaging area with cold storage
   • Support facilities (offices, break rooms, maintenance shop)
   • Electrical infrastructure (3MW service, backup generation)
   • All required permits and regulatory approvals

2. PROJECT DELIVERABLES
   Major deliverables include:

   DESIGN PHASE:
   - Completed construction documents (architectural, structural,
     MEP, civil)
   - Equipment specifications and procurement packages
   - All permit applications and approvals
   - Geotechnical and environmental studies
   - Commissioning plan

   CONSTRUCTION PHASE:
   - Site preparation and utilities
   - Building construction (foundation, structure, envelope, finishes)
   - MEP installation (mechanical, electrical, plumbing)
   - Specialized systems (growing, lighting, irrigation, automation)
   - As-built documentation

   COMMISSIONING PHASE:
   - Factory Acceptance Tests (FAT) for major equipment
   - Site Acceptance Tests (SAT) for installed systems
   - Integrated systems commissioning
   - Performance verification against specifications
   - Training for operations staff
   - Operations & Maintenance (O&M) manuals
   - Warranty documentation

3. ACCEPTANCE CRITERIA
   The project will be considered complete when:
   - All construction is substantially complete per contract
   - All systems pass SAT and perform to specifications
   - Certificate of Occupancy obtained
   - All required permits and approvals in place
   - Staff trained and capable of independent operation
   - 30-day performance validation successful
   - All documentation delivered and accepted
   - Punch list 95% complete

4. PROJECT EXCLUSIONS
   The following are explicitly excluded from scope:
   - Land acquisition (separate transaction)
   - Working capital and initial inventory
   - First year's operational staffing costs
   - Marketing and sales programs
   - Distribution vehicles and logistics
   - Crop R&D beyond commissioning grow-out
   - Office furniture and IT equipment (separate procurement)
   - Ongoing maintenance contracts (negotiated post-completion)

5. CONSTRAINTS
   The project must operate within these constraints:
   - Budget: $30M (+10%/-5%)
   - Schedule: Substantial completion by December 31, 2026
   - Building footprint: 50,000 sf (site allows up to 65,000 sf)
   - Height: 45 feet maximum (zoning restriction)
   - Labor: Union trades (per collective bargaining agreement)
   - Utility capacity: 3MW electrical (verified available)
   - Water: 50,000 gpd maximum (treatment capacity limit)

6. ASSUMPTIONS
   The project plan is based on these assumptions:
   - Zoning variance will be approved within 90 days
   - Equipment lead times will not exceed 24 weeks
   - Construction labor will be available as needed
   - Material costs will not escalate more than 5%/year
   - No major design changes after 50% design milestone
   - Weather delays will not exceed 15 days
   - Utility service extensions will be completed by utility companies
     on schedule
   - No archaeological or environmental issues discovered during
     site prep

7. PROJECT BOUNDARIES
   INCLUDED:
   - All work within property boundaries
   - Utility connections to property line
   - Required off-site improvements per permit conditions
   - All systems needed for production operations
   - Training for operational staff

   NOT INCLUDED:
   - Utility infrastructure beyond property line (utility company
     responsibility)
   - Public road improvements beyond permit requirements
   - Adjacent property improvements
   - Ongoing operations and maintenance
   - Sales and distribution beyond facility loading dock
+===================================================================+

Approved By:

_______________________________  Date: __________
Project Sponsor

_______________________________  Date: __________
Project Manager

_______________________________  Date: __________
Steering Committee Chair
```

---

## 4. Work Breakdown Structure (WBS)

### WBS Development for CEA Projects

```
WBS STRUCTURE - GREENLEAF VERTICAL FARM
Level 1: Project
Level 2: Major Deliverables/Phases
Level 3: Work Packages
Level 4: Activities (not shown for brevity)

1.0 GREENLEAF VERTICAL FARM PROJECT
    |
    +-- 1.1 PROJECT MANAGEMENT
    |       +-- 1.1.1 Project Planning & Controls
    |       +-- 1.1.2 Stakeholder Management
    |       +-- 1.1.3 Procurement Management
    |       +-- 1.1.4 Quality Management
    |       +-- 1.1.5 Risk Management
    |       +-- 1.1.6 Closeout & Handover
    |
    +-- 1.2 DESIGN & ENGINEERING
    |       +-- 1.2.1 Architectural Design
    |       +-- 1.2.2 Structural Engineering
    |       +-- 1.2.3 MEP Engineering
    |       |       +-- 1.2.3.1 HVAC Design
    |       |       +-- 1.2.3.2 Electrical Design
    |       |       +-- 1.2.3.3 Plumbing Design
    |       +-- 1.2.4 Civil Engineering
    |       +-- 1.2.5 Specialized Systems Design
    |       |       +-- 1.2.5.1 Growing Systems
    |       |       +-- 1.2.5.2 Lighting Systems
    |       |       +-- 1.2.5.3 Irrigation/Fertigation
    |       |       +-- 1.2.5.4 Automation & Controls
    |       +-- 1.2.6 Design Reviews & Approvals
    |
    +-- 1.3 PERMITTING & APPROVALS
    |       +-- 1.3.1 Zoning Variance
    |       +-- 1.3.2 Building Permits
    |       +-- 1.3.3 Environmental Permits
    |       +-- 1.3.4 Utility Approvals
    |       +-- 1.3.5 Fire Marshal Approval
    |
    +-- 1.4 SITE WORK & CIVIL
    |       +-- 1.4.1 Site Preparation
    |       +-- 1.4.2 Grading & Drainage
    |       +-- 1.4.3 Utilities Installation
    |       +-- 1.4.4 Paving & Hardscaping
    |       +-- 1.4.5 Landscaping
    |
    +-- 1.5 BUILDING CONSTRUCTION
    |       +-- 1.5.1 Foundation
    |       +-- 1.5.2 Structural Frame
    |       +-- 1.5.3 Building Envelope
    |       |       +-- 1.5.3.1 Roofing
    |       |       +-- 1.5.3.2 Wall Systems
    |       |       +-- 1.5.3.3 Doors & Windows
    |       +-- 1.5.4 Interior Construction
    |       |       +-- 1.5.4.1 Framing & Drywall
    |       |       +-- 1.5.4.2 Flooring
    |       |       +-- 1.5.4.3 Finishes & Paint
    |
    +-- 1.6 MEP SYSTEMS INSTALLATION
    |       +-- 1.6.1 HVAC Systems
    |       |       +-- 1.6.1.1 Cooling Equipment
    |       |       +-- 1.6.1.2 Dehumidification
    |       |       +-- 1.6.1.3 Distribution & Controls
    |       +-- 1.6.2 Electrical Systems
    |       |       +-- 1.6.2.1 Service & Distribution
    |       |       +-- 1.6.2.2 Backup Generation
    |       |       +-- 1.6.2.3 Lighting (facility/safety)
    |       +-- 1.6.3 Plumbing Systems
    |       |       +-- 1.6.3.1 Domestic Water
    |       |       +-- 1.6.3.2 Process Water
    |       |       +-- 1.6.3.3 Sanitary & Drainage
    |       +-- 1.6.4 Fire Protection
    |
    +-- 1.7 GROWING SYSTEMS
    |       +-- 1.7.1 Racking & Shelving
    |       +-- 1.7.2 Growing Channels/Trays
    |       +-- 1.7.3 Irrigation System
    |       +-- 1.7.4 Fertigation System
    |       +-- 1.7.5 Material Handling
    |
    +-- 1.8 LIGHTING SYSTEMS
    |       +-- 1.8.1 LED Fixtures
    |       +-- 1.8.2 Mounting & Suspension
    |       +-- 1.8.3 Controls & Dimming
    |       +-- 1.8.4 Power Distribution (lighting)
    |
    +-- 1.9 AUTOMATION & CONTROLS
    |       +-- 1.9.1 Building Management System
    |       +-- 1.9.2 Sensors & Instrumentation
    |       +-- 1.9.3 Control Panels & PLCs
    |       +-- 1.9.4 Network Infrastructure
    |       +-- 1.9.5 Software & HMI
    |
    +-- 1.10 PROCESSING & SUPPORT FACILITIES
    |       +-- 1.10.1 Harvest Processing Area
    |       +-- 1.10.2 Washing & Packaging Equipment
    |       +-- 1.10.3 Cold Storage
    |       +-- 1.10.4 Maintenance Shop
    |       +-- 1.10.5 Offices & Break Rooms
    |
    +-- 1.11 COMMISSIONING
    |       +-- 1.11.1 Factory Acceptance Tests
    |       +-- 1.11.2 Site Acceptance Tests
    |       +-- 1.11.3 Integrated Systems Testing
    |       +-- 1.11.4 Performance Validation
    |       +-- 1.11.5 Training
    |       +-- 1.11.6 Documentation
    |
    +-- 1.12 STARTUP & HANDOVER
            +-- 1.12.1 Initial Crop Grow-Out
            +-- 1.12.2 System Optimization
            +-- 1.12.3 Punch List Completion
            +-- 1.12.4 Final Inspections
            +-- 1.12.5 Warranty Documentation
            +-- 1.12.6 Operational Transition
```

### WBS Dictionary Sample

```
WBS DICTIONARY
+===================================================================+
| WBS ID: 1.6.1.1                                                   |
| WORK PACKAGE NAME: Cooling Equipment                              |
| PARENT WBS: 1.6.1 HVAC Systems                                    |
+===================================================================+

DESCRIPTION:
Procurement, delivery, installation, and startup of all cooling
equipment required to maintain growing zone temperature setpoints
under all operating conditions.

SCOPE OF WORK:
Included:
• (2) 500-ton water-cooled chillers with variable speed drives
• Chilled water pumps (primary and secondary loops)
• Cooling towers (2 units, redundant)
• Condenser water pumps
• Water treatment system
• Piping, valves, fittings (chiller plant)
• Electrical connections
• Controls integration with BMS
• Rigging and equipment setting
• Startup and commissioning support

Excluded:
• Chilled water distribution to air handlers (see 1.6.1.3)
• Building crane for rigging (general conditions)
• Electrical distribution beyond equipment disconnect (see 1.6.2)

DELIVERABLES:
1. Shop drawings and submittals (approved)
2. Equipment installed and operational
3. Performance test results (certified)
4. O&M manuals and warranty documentation
5. Operator training (documented)
6. As-built drawings

ACCEPTANCE CRITERIA:
• All equipment installed per approved shop drawings
• Chiller performance: 500 tons at 0.55 kW/ton or better
• System maintains 42°F chilled water supply under full load
• All safeties and alarms functional
• Integration with BMS complete and tested
• 72-hour full-load test successful
• O&M manuals and training completed

RESOURCES:
• Mechanical subcontractor: ABC Mechanical
• Chiller vendor: Trane (or approved equal)
• Commissioning agent: CEA Systems Inc.
• Estimated labor: 800 man-hours
• Estimated duration: 6 weeks (delivery to startup)

DEPENDENCIES:
Predecessors:
• 1.5.1 Foundation (chiller pad complete)
• 1.6.2.1 Electrical service (power available)
• 1.9.3 Control panels (BMS ready)

Successors:
• 1.6.1.3 Distribution system (chilled water available)
• 1.11.2 SAT testing (system operational)

COST:
Budget: $1,200,000
- Equipment: $950,000
- Installation: $200,000
- Commissioning: $50,000

SCHEDULE:
Start: Week 38 (equipment delivery)
Finish: Week 44 (startup complete)
Duration: 6 weeks

QUALITY REQUIREMENTS:
• AHRI certified equipment
• Factory run tests witnessed
• Pressure testing of all piping
• Insulation inspection
• Vibration analysis after startup

RISKS:
• Long lead time (28 weeks) - mitigate by early procurement
• Rigging complexity - coordinate crane availability
• Performance validation - ensure proper load for testing

RESPONSIBLE PARTY:
Work Package Manager: John Smith, Mechanical Lead
Contractor: ABC Mechanical Corp.
Phone: (555) 123-4567
Email: jsmith@abcmech.com

APPROVAL:
Project Manager: _________________ Date: _________
```

---

## 5. Change Control Process

### Change Request Workflow

```
CHANGE CONTROL PROCESS FLOW
+===================================================================+
|                                                                   |
| CHANGE INITIATED                                                  |
| - Stakeholder identifies need                                     |
| - Design evolution                                                |
| - Field condition                                                 |
| - Regulatory requirement                                          |
|        |                                                           |
|        v                                                           |
| CHANGE REQUEST FORM SUBMITTED                                     |
| - Requester completes form                                        |
| - Description of change                                           |
| - Justification/rationale                                         |
|        |                                                           |
|        v                                                           |
| PRELIMINARY REVIEW (Project Manager)                              |
| - Is this actually a change to baseline scope?                    |
| - Is it technically feasible?                                     |
| - Does it merit full analysis?                                    |
|        |                                                           |
|        +-----> [Reject: Not a valid change] --> Notify requester  |
|        |                                                           |
|        v                                                           |
| IMPACT ANALYSIS                                                   |
| - Cost impact (direct + indirect)                                 |
| - Schedule impact (critical path?)                                |
| - Technical impact (performance, integration)                     |
| - Risk impact (new risks introduced?)                             |
| - Benefits (what problem does this solve?)                        |
|        |                                                           |
|        v                                                           |
| REVIEW & RECOMMENDATION (Project Manager)                         |
| - Compile analysis                                                |
| - Develop recommendation (approve/reject/defer)                   |
| - Identify alternatives if applicable                             |
|        |                                                           |
|        v                                                           |
| APPROVAL DECISION (Based on Thresholds)                           |
|        |                                                           |
|        +-----> <$25K & No schedule impact                         |
|        |       --> PM approves --> Implement                       |
|        |                                                           |
|        +-----> $25K-$100K OR <1 week delay                        |
|        |       --> Steering Committee --> Decision                 |
|        |                                                           |
|        +-----> >$100K OR >1 week OR scope change                  |
|                --> Sponsor/Board --> Decision                     |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| IF APPROVED:                                                      |
| 1. Issue Change Order                                             |
| 2. Update Project Baseline (scope, schedule, budget)              |
| 3. Communicate to affected parties                                |
| 4. Update documentation (plans, contracts, requirements)          |
| 5. Track in change log                                            |
| 6. Implement change                                               |
|                                                                   |
| IF REJECTED:                                                      |
| 1. Document rationale                                             |
| 2. Communicate decision to requester                              |
| 3. Archive request for future reference                           |
|                                                                   |
+===================================================================+
```

### Change Request Form Template

```
CHANGE REQUEST FORM
+===================================================================+
| CR NUMBER: CR-2025-042                    DATE: March 15, 2025    |
| PROJECT: GreenLeaf Vertical Farm                                  |
+===================================================================+

REQUESTOR INFORMATION:
Name: Maria Garcia
Title: Head Grower
Department: Operations
Contact: (555) 234-5678 / mgarcia@greenleaf.com

CHANGE DESCRIPTION:
Add CO2 enrichment system to growing zones to enhance production.
System would include:
- CO2 storage tank (liquid CO2)
- Distribution manifold and piping to growing zones
- Sensors and controls (integrated with BMS)
- Safety monitoring and ventilation interlocks

JUSTIFICATION:
1. Increase production by 15-20% based on research trials
2. Improve crop quality (larger leaf size, faster growth)
3. Competitive facilities include CO2 enrichment
4. Positive ROI: Additional revenue $3M/year, system cost $250K

ALTERNATIVES CONSIDERED:
1. Do nothing - accept lower production capacity
2. Phase 2 addition - delay benefits, higher retrofit cost
3. Include now during construction - most cost-effective

REQUESTOR RECOMMENDATION: Approve and include in current scope

+-------------------------------------------------------------------+
| IMPACT ANALYSIS (Completed by Project Team)                       |
+-------------------------------------------------------------------+

COST IMPACT:
Equipment & Installation:     $200,000
Engineering/Design Changes:   $ 15,000
Electrical upgrades:          $ 20,000
Commissioning:                $ 10,000
Contingency (10%):            $ 25,000
TOTAL COST:                   $270,000

SCHEDULE IMPACT:
Design changes:               2 weeks (not on critical path)
Procurement lead time:        12 weeks (can parallel with other work)
Installation:                 3 weeks (during MEP phase)
CRITICAL PATH IMPACT:         0 days (if ordered immediately)

TECHNICAL IMPACT:
+ Enhances production capacity (aligns with business case)
+ Requires electrical capacity (800A available, only need 50A)
+ Integration with BMS (vendor confirms compatibility)
+ Safety systems required (included in scope)
+ Operator training needed (include in commissioning)

RISK IMPACT:
+ Technology risk: LOW (proven, widely used)
+ Performance risk: LOW (supplier provides performance guarantee)
+ Safety risk: MEDIUM (requires proper design and training)
  Mitigation: Include safety systems, training, alarms
+ Budget risk: LOW (within contingency)

BENEFITS:
+ 15-20% production increase = +360K-480K lbs/year
+ Revenue impact: +$3.6M - $4.8M annually
+ Simple payback: <2 months
+ Competitive positioning improved
+ Future-proofs facility

+-------------------------------------------------------------------+
| PROJECT MANAGER RECOMMENDATION                                    |
+-------------------------------------------------------------------+

RECOMMENDATION: APPROVE

RATIONALE:
Strong business case with minimal project risk. Cost is well within
contingency budget. No critical path impact if procurement initiated
immediately. Technical risk is low (proven technology). Benefits
significantly outweigh costs (payback <2 months). Addresses
competitive gap identified in market analysis.

CONDITIONS:
1. Vendor must guarantee performance (15% production increase minimum)
2. All safety systems included in scope
3. Operator training mandatory before use
4. Funding source: Project contingency

PROJECT MANAGER: Sarah Johnson, PE, PMP    DATE: March 17, 2025

+-------------------------------------------------------------------+
| APPROVAL DECISION                                                 |
+-------------------------------------------------------------------+

DECISION: ✓ APPROVED  ☐ REJECTED  ☐ DEFERRED

APPROVAL AUTHORITY: Steering Committee (cost >$25K)

COMMENTS:
Approved as recommended. Excellent business case. Proceed with
procurement immediately to avoid schedule impact. CFO to track
post-commissioning performance vs. projections.

APPROVED BY:
Michael Chen, CEO (Sponsor)          DATE: March 19, 2025
Jennifer Lopez, CFO                  DATE: March 19, 2025
David Kim, COO                       DATE: March 19, 2025

+-------------------------------------------------------------------+
| IMPLEMENTATION                                                    |
+-------------------------------------------------------------------+

CHANGE ORDER NUMBER: CO-018
BASELINE UPDATES:
☐ Scope Statement
☐ WBS
☐ Requirements Traceability Matrix
☐ Budget
☐ Schedule
☐ Risk Register
☐ Contracts (Design, MEP Contractor)
☐ Communication to Stakeholders

IMPLEMENTATION STATUS: In Progress
TARGET COMPLETION: Week 52 (September 2025)

+===================================================================+
```

### Change Log

```
CHANGE LOG - GREENLEAF VERTICAL FARM
+==================================================================================+
| CR#  | Date    | Description        | Cost    | Schedule | Status    | Approval|
|      |         |                    | Impact  | Impact   |           | Level   |
+======+=========+====================+=========+==========+===========+=========+
| 001  | 1/15/25 | Site drainage      | $35K    | 0 days   | Approved  | PM      |
|      |         | improvements       |         |          | Complete  |         |
+------+---------+--------------------+---------+----------+-----------+---------+
| 002  | 1/22/25 | Upgrade electrical | $85K    | +3 days  | Approved  | Steering|
|      |         | service to 3.5MW   |         | (not CP) | Complete  |         |
+------+---------+--------------------+---------+----------+-----------+---------+
| 018  | 3/19/25 | Add CO2 enrichment | $270K   | 0 days   | Approved  | Steering|
|      |         | system             |         |          | In Prog.  |         |
+------+---------+--------------------+---------+----------+-----------+---------+
| 023  | 4/02/25 | Enhanced BMS       | $45K    | 0 days   | Approved  | PM      |
|      |         | reporting features |         |          | Pending   |         |
+------+---------+--------------------+---------+----------+-----------+---------+
| 027  | 4/15/25 | Add employee       | $180K   | +2 weeks | Rejected  | Sponsor |
|      |         | fitness center     |         |          |           |         |
+------+---------+--------------------+---------+----------+-----------+---------+

SUMMARY:
Total Change Requests: 27
Approved: 19 (Cost: $1,420,000 | Schedule: +8 days)
Rejected: 6
Pending: 2

Contingency Status:
Original: $2,800,000
Used for Changes: $1,420,000 (51%)
Used for Risks: $280,000 (10%)
Remaining: $1,100,000 (39%)
+==================================================================================+
```

---

## Key Takeaways

1. **Requirements must be comprehensive and specific** - Vague requirements lead to misaligned expectations and rework.

2. **Traceability is essential** - Every requirement should trace from business need through design to testing.

3. **Functional before technical** - Define what the system must do before specifying how it will do it.

4. **Involve end users early** - Growers and operators provide critical input that engineers might miss.

5. **Document scope explicitly** - Both inclusions AND exclusions prevent misunderstandings.

6. **WBS provides project structure** - A well-organized WBS is the foundation for scheduling, budgeting, and control.

7. **Change control is not change prevention** - Good changes add value. The process ensures informed decisions.

8. **Protect contingency** - Use it wisely for changes that improve project outcomes, not gold plating.

---

## Practical Exercise

**Requirements & Scope Definition Workshop**

Develop requirements and scope documentation for a hypothetical CEA expansion project:

**Scenario:** Existing 20,000 sf greenhouse adding 10,000 sf vertical farm module

**Tasks:**
1. Identify 15-20 key requirements (business, functional, technical)
2. Create requirements traceability matrix (simplified)
3. Develop project scope statement (1-2 pages)
4. Create WBS to level 3 (work package level)
5. Define scope boundaries (what's in, what's out)
6. Develop change request for a potential scope addition

---

## Next Module

In **Module 5: Work Breakdown Structures & Project Organization**, we will explore advanced WBS techniques, creating responsibility assignment matrices, and organizing project teams for maximum effectiveness.

---

*Module 4 of 14 - CEA Project Management*
