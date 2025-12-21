# Module 5: Work Breakdown Structures & Project Organization

## Learning Objectives

By the end of this module, you will be able to:
- Create comprehensive work breakdown structures for CEA projects
- Develop work package definitions with clear deliverables
- Create responsibility assignment matrices (RACI charts)
- Organize project teams effectively
- Define clear roles and responsibilities
- Establish work authorization and control systems

---

## 1. Advanced WBS Development

### The 100% Rule

**Principle:** The WBS must include 100% of the work defined by project scope. No more, no less.

```
100% RULE VALIDATION
+===================================================================+
|                                                                   |
| PARENT ELEMENT = SUM OF CHILD ELEMENTS                            |
|                                                                   |
| Example:                                                          |
| 1.6 MEP SYSTEMS = 1.6.1 HVAC                                      |
|                 + 1.6.2 Electrical                                |
|                 + 1.6.3 Plumbing                                  |
|                 + 1.6.4 Fire Protection                           |
|                                                                   |
| Each child must be:                                               |
| ✓ Mutually exclusive (no overlap)                                 |
| ✓ Collectively exhaustive (no gaps)                               |
| ✓ At appropriate level of detail                                  |
|                                                                   |
+===================================================================+
```

### Decomposition Guidelines

**When to stop decomposing:**
- Work package can be estimated reliably (cost and duration)
- Work package has clear deliverable(s)
- Work package can be assigned to one responsible party
- Work package duration is appropriate for control period (typically 2-4 weeks)
- Further decomposition doesn't add value

**Level-by-Level Breakdown:**

```
LEVEL 1: PROJECT
"GreenLeaf Vertical Farm Project"
↓
LEVEL 2: MAJOR DELIVERABLES/PHASES
"Design & Engineering", "Construction", "Commissioning"
↓
LEVEL 3: SUB-DELIVERABLES/SYSTEMS
"HVAC Systems", "Electrical Systems", "Lighting Systems"
↓
LEVEL 4: WORK PACKAGES
"Chiller Installation", "LED Fixture Installation"
↓
LEVEL 5: ACTIVITIES (in schedule, not WBS)
"Rig chiller", "Set on pad", "Connect piping"
```

### WBS Coding Structure

```
HIERARCHICAL CODING SYSTEM
+===================================================================+
| LEVEL | CODE   | EXAMPLE        | DESCRIPTION                     |
+=======+========+================+=================================+
| 1     | X      | 1              | Project                         |
| 2     | X.X    | 1.6            | Major Deliverable               |
| 3     | X.X.X  | 1.6.1          | Sub-deliverable                 |
| 4     | X.X.X.X| 1.6.1.1        | Work Package                    |
+===================================================================+

ALTERNATIVE: OUTLINE NUMBERING WITH LETTERS
1.0 Project
  1.A Design
    1.A.1 Architectural
    1.A.2 MEP Engineering
      1.A.2.a HVAC
      1.A.2.b Electrical
      1.A.2.c Plumbing

BEST PRACTICE: Use numeric system (easier for software integration)
```

---

## 2. Responsibility Assignment Matrix (RAM)

### RACI Matrix Development

**RACI Definitions:**
- **R = Responsible:** Does the work to complete the task
- **A = Accountable:** Ultimately answerable for correct completion (only ONE per task)
- **C = Consulted:** Provides input, two-way communication
- **I = Informed:** Kept up-to-date, one-way communication

```
RACI MATRIX - GREENLEAF VERTICAL FARM (Sample)
+=======================================================================================+
|                      | Sponsor | PM  | Design | Const. | Grower | CFO  | Comm.  |
| WORK PACKAGE         |         |     | Lead   | Mgr    |        |      | Agent  |
+======================+=========+=====+========+========+========+======+========+
| 1.1 Project Mgmt     |    A    |  R  |   C    |   C    |   I    |  C   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.2.1 Arch. Design   |    I    |  A  |   R    |   C    |   C    |  I   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.2.3.1 HVAC Design  |    I    |  A  |   R    |   C    |   C    |  I   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.3 Permitting       |    C    |  A  |   C    |   I    |   I    |  I   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.5 Building Const.  |    I    |  A  |   C    |   R    |   I    |  I   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.6.1.1 Chiller      |    I    |  A  |   C    |   R    |   C    |  I   |   C    |
| Installation         |         |     |        |        |        |      |        |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.7 Growing Systems  |    C    |  A  |   C    |   R    |   C    |  I   |   I    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.11.3 Systems       |    I    |  A  |   C    |   C    |   C    |  I   |   R    |
| Integration Test     |         |     |        |        |        |      |        |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.11.5 Training      |    I    |  A  |   I    |   I    |   C    |  I   |   R    |
+----------------------+---------+-----+--------+--------+--------+------+--------+
| 1.12 Handover        |    A    |  R  |   C    |   C    |   C    |  C   |   C    |
+=======================================================================================+

VALIDATION RULES:
✓ Each work package has exactly ONE "A" (Accountable)
✓ Each work package has at least one "R" (Responsible)
✓ Minimize number of "C" entries (too many slows decision-making)
✓ Review with team to ensure agreement
```

### Alternative: Responsibility Matrix with Details

```
DETAILED RESPONSIBILITY ASSIGNMENT
+===================================================================+
| WORK PACKAGE: 1.6.1.1 Chiller Installation                        |
| WBS REFERENCE: See WBS Dictionary                                 |
+===================================================================+

ACCOUNTABLE: Sarah Johnson, Project Manager
- Overall accountability for work package completion
- Approval authority for work package deliverables
- Budget and schedule responsibility
- Escalation point for issues

RESPONSIBLE (Primary): ABC Mechanical Corp
- John Smith, Mechanical Superintendent
- Performs the actual installation work
- Coordinates subcontractors and vendors
- Daily progress reporting
- Quality control and safety management

CONSULTED:
- Anderson Engineering (Design verification)
- Trane (Vendor technical support)
- Maria Garcia, Head Grower (Operational input)
- CEA Systems Inc., Commissioning Agent (FAT/SAT requirements)

INFORMED:
- Executive Sponsor (Monthly summary)
- CFO (Cost tracking)
- Building Inspector (Schedule for inspections)
- Utility Company (Electrical tie-in coordination)

DECISION RIGHTS:
+-------------------------------------------------------------------+
| DECISION                     | AUTHORITY           | APPROVAL   |
+==============================+=====================+============+
| Work methods                 | ABC Mechanical      | N/A        |
| Submittal approvals          | Anderson Eng.       | PM review  |
| Minor field changes (<$5K)   | PM                  | N/A        |
| Major changes (>$5K)         | Steering Committee  | Sponsor    |
| Vendor substitutions         | Design Lead         | PM approval|
| Schedule adjustments         | PM                  | Sponsor    |
|                              |                     | (if CP)    |
+-------------------------------------------------------------------+

COMMUNICATION REQUIREMENTS:
- Daily: Foreman to PM (progress, issues)
- Weekly: Superintendent to team meeting (status, lookahead)
- Monthly: PM to Sponsor (milestone status, cost)
- As-needed: Technical issues to design team

+===================================================================+
```

---

## 3. Organizational Breakdown Structure (OBS)

### OBS Development

```
ORGANIZATIONAL BREAKDOWN STRUCTURE
+===================================================================+
|                                                                   |
|                      PROJECT SPONSOR                              |
|                      (Michael Chen, CEO)                          |
|                             |                                     |
|              +--------------+--------------+                      |
|              |                             |                      |
|       STEERING COMMITTEE          PROJECT MANAGER                |
|       - CEO                       (Sarah Johnson, PE, PMP)        |
|       - CFO                              |                        |
|       - COO                              |                        |
|       - Board Rep               +--------+--------+               |
|                                 |                 |               |
|                          DESIGN TEAM      CONSTRUCTION TEAM       |
|                                 |                 |               |
|          +----------------------+        +--------+--------+      |
|          |          |           |        |        |        |      |
|      Architect   MEP Eng.   Civil    Gen.     Spec.    Comm.     |
|      (Anderson)  (Systems)  (Land)  Contractor Systems  Agent    |
|                   Design    Solutions (BuildRight) (Vendors) (CEA)|
|                     |                    |                        |
|              +------+------+      +------+------+                 |
|              |      |      |      |      |      |                 |
|           HVAC  Elec. Plumb.  Site  MEP   Growing                |
|           Eng.  Eng.  Eng.   Work  Trades Systems                |
|                                                                   |
+===================================================================+

INTEGRATION WITH WBS:
- WBS elements assigned to OBS units
- Creates accountability structure
- Enables cost rollup by organization
- Facilitates resource planning
```

### WBS-OBS Integration Matrix

```
WBS-OBS RESPONSIBILITY MATRIX
+==================================================================================+
| WBS Element           | Responsible Org.    | Accountable  | Budget    | Duration|
+=======================+=====================+==============+===========+=========+
| 1.2.1 Arch. Design    | Anderson Architects | PM           | $180K     | 12 wks  |
| 1.2.3.1 HVAC Design   | Systems Design Grp  | Design Lead  | $250K     | 14 wks  |
| 1.3 Permitting        | Internal (PM)       | PM           | $120K     | 20 wks  |
| 1.5 Building Const.   | BuildRight Const.   | PM           | $7,500K   | 32 wks  |
| 1.6.1 HVAC Install    | ABC Mechanical      | Const. Mgr   | $6,000K   | 18 wks  |
| 1.7 Growing Systems   | VerticalHarvest Inc | PM           | $4,500K   | 12 wks  |
| 1.8 Lighting          | AgriLight Tech      | PM           | $5,500K   | 10 wks  |
| 1.9 Automation        | SmartGrow Systems   | PM           | $2,000K   | 14 wks  |
| 1.11 Commissioning    | CEA Systems Inc     | PM           | $450K     | 8 wks   |
+==================================================================================+

This matrix enables:
✓ Clear accountability
✓ Cost tracking by organization
✓ Resource loading
✓ Contract alignment
✓ Performance measurement
```

---

## 4. Resource Breakdown Structure (RBS)

### RBS for CEA Projects

```
RESOURCE BREAKDOWN STRUCTURE
+===================================================================+
|                                                                   |
| 1.0 PROJECT RESOURCES                                             |
|     |                                                             |
|     +-- 1.1 LABOR                                                 |
|     |       +-- 1.1.1 Project Management                          |
|     |       +-- 1.1.2 Design Professionals                        |
|     |       |       +-- 1.1.2.1 Architects                         |
|     |       |       +-- 1.1.2.2 Engineers (PE)                     |
|     |       |       +-- 1.1.2.3 Designers/Drafters                 |
|     |       +-- 1.1.3 Construction Trades                          |
|     |       |       +-- 1.1.3.1 General Laborers                   |
|     |       |       +-- 1.1.3.2 Carpenters                         |
|     |       |       +-- 1.1.3.3 Electricians                       |
|     |       |       +-- 1.1.3.4 HVAC Technicians                   |
|     |       |       +-- 1.1.3.5 Plumbers/Pipefitters               |
|     |       +-- 1.1.4 Specialists                                  |
|     |               +-- 1.1.4.1 Commissioning Agents               |
|     |               +-- 1.1.4.2 Controls Programmers               |
|     |               +-- 1.1.4.3 Agronomists                        |
|     |                                                             |
|     +-- 1.2 EQUIPMENT                                             |
|     |       +-- 1.2.1 Construction Equipment                      |
|     |       |       +-- 1.2.1.1 Excavators                         |
|     |       |       +-- 1.2.1.2 Cranes                             |
|     |       |       +-- 1.2.1.3 Lifts/Scaffolding                  |
|     |       +-- 1.2.2 Permanent Equipment                          |
|     |               +-- 1.2.2.1 HVAC Equipment                     |
|     |               +-- 1.2.2.2 Electrical Equipment               |
|     |               +-- 1.2.2.3 Growing Systems                    |
|     |               +-- 1.2.2.4 Lighting Systems                   |
|     |                                                             |
|     +-- 1.3 MATERIALS                                             |
|     |       +-- 1.3.1 Concrete & Masonry                          |
|     |       +-- 1.3.2 Structural Steel                             |
|     |       +-- 1.3.3 Piping & Fittings                            |
|     |       +-- 1.3.4 Electrical Materials                         |
|     |       +-- 1.3.5 Finishes                                     |
|     |                                                             |
|     +-- 1.4 FACILITIES & SERVICES                                 |
|             +-- 1.4.1 Office Space                                |
|             +-- 1.4.2 Temporary Utilities                         |
|             +-- 1.4.3 IT/Communications                           |
|                                                                   |
+===================================================================+
```

### Resource Dictionary Example

```
RESOURCE DEFINITION
+===================================================================+
| RESOURCE CODE: 1.1.3.4                                            |
| RESOURCE NAME: HVAC Technicians                                   |
| CATEGORY: Labor - Construction Trades                             |
+===================================================================+

DESCRIPTION:
Skilled HVAC technicians for installation, testing, and startup of
heating, ventilation, air conditioning, and dehumidification systems.

QUALIFICATIONS:
- Journeyman HVAC certification or equivalent
- Minimum 5 years commercial/industrial experience
- EPA Section 608 Universal Certification (refrigerant handling)
- Experience with large chiller systems preferred
- Controls troubleshooting capability
- OSHA 30-hour construction safety training

TYPICAL TASKS:
- Equipment installation (chillers, air handlers, ductwork)
- Piping installation (refrigerant, chilled water, condenser water)
- Controls wiring and programming assistance
- System startup and balancing
- Performance testing
- Troubleshooting and commissioning support

STANDARD RATES:
- Foreman: $75/hour (loaded)
- Journeyman: $65/hour (loaded)
- Apprentice: $45/hour (loaded)
- Overtime: 1.5x regular rate
- Double-time: Sundays and holidays

AVAILABILITY:
- Lead time: 2 weeks notice for crew mobilization
- Typical crew size: 1 foreman + 3-6 journeymen + 2 apprentices
- Source: Local HVAC contractors, union hall

PRODUCTIVITY FACTORS:
- New construction: 1.0 (baseline)
- Occupied space: 0.75 (reduced productivity)
- Complex integration: 0.85
- Overtime work: 0.90 (fatigue factor)

ALLOCATION TO WBS:
- 1.6.1.1 Cooling Equipment: 800 hours
- 1.6.1.2 Dehumidification: 400 hours
- 1.6.1.3 Distribution System: 1200 hours
- 1.11.2 SAT Testing: 200 hours
- Total: 2600 hours over 18 weeks

+===================================================================+
```

---

## 5. Team Organization Models

### Projectized Team Structure

```
PROJECTIZED ORGANIZATION (Dedicated Project Team)
+===================================================================+
|                                                                   |
|                     PROJECT MANAGER                               |
|                     (Full authority)                              |
|                           |                                       |
|        +------------------+------------------+                    |
|        |                  |                  |                    |
|   DESIGN MANAGER    CONSTRUCTION       COMMISSIONING              |
|        |              MANAGER              MANAGER                |
|        |                  |                  |                    |
|   +----+----+        +----+----+        +----+----+               |
|   |    |    |        |    |    |        |         |               |
| Arch MEP Civil    Site MEP  QC      Testing  Training            |
|                                                                   |
| CHARACTERISTICS:                                                  |
| + Strong PM authority                                             |
| + Clear reporting lines                                           |
| + Fast communication                                              |
| + Team loyalty to project                                         |
| - Inefficient use of resources                                    |
| - Limited functional expertise sharing                            |
| - Difficult to redeploy after project                             |
|                                                                   |
| BEST FOR:                                                         |
| - Large, complex projects                                         |
| - Projects requiring rapid decision-making                        |
| - When specialized focus is critical                              |
|                                                                   |
+===================================================================+
```

### Matrix Team Structure

```
MATRIX ORGANIZATION (Most Common for CEA)
+===================================================================+
|                                                                   |
|          FUNCTIONAL MANAGERS                                      |
|     Engineering    Construction    Operations                    |
|          |              |              |                          |
| PM ------+------+-------+------+-------+------+                   |
| (Project |      |       |      |       |      |                   |
|  Authority) HVAC Elec. Site  MEP   Grower  Maint.               |
|             Eng. Eng.  Super. Super. Staff  Tech.                |
|              |    |      |      |      |      |                   |
|          Shared resources report to both                          |
|          functional manager and PM                                |
|                                                                   |
| WEAK MATRIX:                                                      |
| - PM has limited authority (coordinator role)                     |
| - Functional managers control resources                           |
| - PM influence through persuasion                                 |
|                                                                   |
| BALANCED MATRIX:                                                  |
| - PM and functional managers share authority                      |
| - PM controls project decisions                                   |
| - Functional managers control resource allocation                 |
|                                                                   |
| STRONG MATRIX:                                                    |
| - PM has significant authority                                    |
| - PM controls budget and schedule                                 |
| - Functional managers provide resources                           |
|                                                                   |
| CHARACTERISTICS:                                                  |
| + Efficient resource utilization                                  |
| + Functional expertise maintained                                 |
| + Flexibility to redeploy resources                               |
| - Dual reporting can cause confusion                              |
| - Requires strong PM interpersonal skills                         |
| - Potential for conflicting priorities                            |
|                                                                   |
| SUCCESS FACTORS:                                                  |
| ✓ Clear roles and responsibilities (RACI)                         |
| ✓ Strong communication protocols                                  |
| ✓ Senior management support for PM authority                      |
| ✓ Conflict resolution processes                                   |
|                                                                   |
+===================================================================+
```

### Hybrid Structure for Large CEA Projects

```
HYBRID ORGANIZATION EXAMPLE
+===================================================================+
|                     STEERING COMMITTEE                            |
|                (Executive Governance)                             |
|                           |                                       |
|                    PROJECT MANAGER                                |
|                  (Overall accountability)                         |
|                           |                                       |
|        +------------------+------------------+                    |
|        |                                     |                    |
|   INTERNAL TEAM                      EXTERNAL PARTNERS            |
|   (Projectized)                      (Contracted)                 |
|        |                                     |                    |
|   +----+----+                      +---------+---------+          |
|   |         |                      |         |         |          |
| Owner's  Ops        Design-Build   Equipment Comm.               |
|   Rep    Readiness  Contractor     Vendors   Agent                |
|          Team       (Integrated    (Multiple) (CEA Inc.)          |
|                     delivery)                                     |
|                                                                   |
| RATIONALE:                                                        |
| - Owner's rep and operations team dedicated (core functions)      |
| - Design-build reduces interfaces, transfers risk                 |
| - Equipment vendors managed through D-B contractor                |
| - Independent commissioning agent ensures quality                 |
|                                                                   |
| ADVANTAGES:                                                       |
| + Single point of accountability (D-B contractor)                 |
| + Reduced owner management burden                                 |
| + Faster delivery (design-build parallelism)                      |
| + Operations team can focus on readiness                          |
|                                                                   |
+===================================================================+
```

---

## 6. Roles & Responsibilities Definitions

### Key Project Roles

**Project Sponsor**
- **Primary Responsibility:** Business outcome and strategic alignment
- **Authority:** Final decision-making on major project issues
- **Key Activities:**
  - Provide resources and funding
  - Remove organizational barriers
  - Resolve escalated issues
  - Review and approve major milestones
  - Champion project within organization

**Project Manager**
- **Primary Responsibility:** Deliver project on time, budget, scope, quality
- **Authority:** Day-to-day project decisions within delegated limits
- **Key Activities:**
  - Develop and maintain project plan
  - Lead project team
  - Manage stakeholder communications
  - Monitor and control performance
  - Manage risks and issues
  - Report to sponsor and steering committee

**Design Manager**
- **Primary Responsibility:** Technical design quality and coordination
- **Authority:** Design decisions within project requirements
- **Key Activities:**
  - Lead design team
  - Coordinate multidisciplinary design
  - Review and approve design submittals
  - Manage design schedule and budget
  - Support construction with RFI responses

**Construction Manager**
- **Primary Responsibility:** Safe, quality construction on schedule
- **Authority:** Field execution decisions, subcontractor management
- **Key Activities:**
  - Plan and coordinate construction activities
  - Manage subcontractors and suppliers
  - Ensure safety and quality compliance
  - Track and report progress
  - Manage field changes and RFIs

**Commissioning Agent**
- **Primary Responsibility:** Verify systems meet performance requirements
- **Authority:** Acceptance testing approval
- **Key Activities:**
  - Develop commissioning plan
  - Witness factory acceptance tests
  - Conduct site acceptance tests
  - Document system performance
  - Train operations staff

---

## Key Takeaways

1. **WBS is the project skeleton** - Everything else (schedule, budget, resources) hangs on it.

2. **Decompose to the right level** - Too high = poor control. Too low = excessive overhead.

3. **RACI clarifies accountability** - Eliminates "I thought you were doing that" situations.

4. **One Accountable per task** - Shared accountability = no accountability.

5. **Organization structure affects authority** - PM role must match organizational model.

6. **Integration is key** - WBS, OBS, and RBS must align for effective control.

7. **Clarity prevents conflict** - Time invested in defining roles pays dividends throughout project.

---

## Practical Exercise

**WBS and RACI Development**

For your project (from previous modules or new scenario):

1. **Create WBS:**
   - Develop to Level 3 minimum (Level 4 for critical work)
   - Ensure 100% rule compliance
   - Assign WBS codes

2. **WBS Dictionary:**
   - Select 3 critical work packages
   - Complete full WBS dictionary entries

3. **RACI Matrix:**
   - Identify key project roles (8-10)
   - Create RACI for all Level 3 WBS elements
   - Validate one "A" per row

4. **Organization Structure:**
   - Design organization chart
   - Map WBS to responsible organizations
   - Identify reporting relationships

---

## Next Module

In **Module 6: Schedule Development & Management**, we will learn to build integrated project schedules using critical path methodology, manage resources, and control schedule performance.

---

*Module 5 of 14 - CEA Project Management*
