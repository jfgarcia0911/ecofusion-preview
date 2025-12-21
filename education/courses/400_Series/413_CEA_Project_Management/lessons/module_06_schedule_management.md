# Module 6: Schedule Development & Management

## Learning Objectives

By the end of this module, you will be able to:
- Build integrated project schedules using Critical Path Method (CPM)
- Identify and manage schedule dependencies
- Calculate float and determine critical path
- Perform resource leveling and optimization
- Apply schedule compression techniques
- Monitor and control schedule performance

---

## 1. Schedule Development Process

### From WBS to Schedule

```
SCHEDULE DEVELOPMENT WORKFLOW
+===================================================================+
|                                                                   |
| WBS (Work Packages)                                               |
|        ↓                                                           |
| ACTIVITY DEFINITION                                               |
| - Decompose work packages into activities                         |
| - Define discrete, measurable tasks                               |
|        ↓                                                           |
| ACTIVITY SEQUENCING                                               |
| - Determine dependencies (FS, SS, FF, SF)                         |
| - Identify constraints (must-start, must-finish)                  |
|        ↓                                                           |
| DURATION ESTIMATING                                               |
| - Estimate time for each activity                                 |
| - Consider resources and productivity                             |
|        ↓                                                           |
| SCHEDULE NETWORK DEVELOPMENT                                      |
| - Build logic network                                             |
| - Assign calendar and constraints                                 |
|        ↓                                                           |
| CRITICAL PATH ANALYSIS                                            |
| - Calculate early/late dates                                      |
| - Determine float and critical path                               |
|        ↓                                                           |
| RESOURCE LOADING                                                  |
| - Assign resources to activities                                  |
| - Identify over-allocations                                       |
|        ↓                                                           |
| RESOURCE LEVELING/OPTIMIZATION                                    |
| - Resolve resource conflicts                                      |
| - Smooth resource usage                                           |
|        ↓                                                           |
| SCHEDULE BASELINE                                                 |
| - Finalize and approve schedule                                   |
| - Establish performance measurement baseline                      |
|                                                                   |
+===================================================================+
```

### Activity Definition

**Characteristics of Good Activities:**
- Specific and measurable outcome
- Clear start and end points
- Assignable to a responsible party
- Duration is estimable (2-80 hours typical)
- Dependencies can be identified

**Example Activity List:**

```
ACTIVITY LIST EXCERPT - HVAC INSTALLATION
+====================================================================================+
| Activity | Activity                  | WBS      | Duration | Predecessors | Resources|
| ID       | Description               | Code     | (days)   |              |           |
+==========+===========================+==========+==========+==============+==========+
| A100     | Submit chiller shop dwgs  | 1.6.1.1  | 10       | Design done  | Vendor   |
| A101     | Review shop drawings      | 1.6.1.1  | 5        | A100         | Engineer |
| A102     | Fabricate chiller         | 1.6.1.1  | 90       | A101         | Vendor   |
| A103     | Deliver chiller to site   | 1.6.1.1  | 1        | A102, Pad    | Vendor   |
| A104     | Rig and set chiller       | 1.6.1.1  | 2        | A103         | Rigger   |
| A105     | Install chiller piping    | 1.6.1.1  | 10       | A104         | Pipefitter|
| A106     | Install electrical conn.  | 1.6.1.1  | 3        | A104         | Electrician|
| A107     | Commission chiller        | 1.6.1.1  | 5        | A105, A106   | Comm.Agent|
+====================================================================================+
```

---

## 2. Dependency Types & Relationships

### Four Dependency Types

```
DEPENDENCY RELATIONSHIPS
+===================================================================+
|                                                                   |
| FINISH-TO-START (FS) - Most Common                                |
| Activity B cannot start until Activity A finishes                 |
|                                                                   |
| A: Design HVAC    [========]                                      |
| B: Install HVAC            [==========]                           |
|                                                                   |
| Example: Design must finish before installation starts            |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| START-TO-START (SS)                                               |
| Activity B cannot start until Activity A starts                   |
|                                                                   |
| A: Pour foundation [==============]                               |
| B: Install rebar      [=========]                                 |
|                                                                   |
| Example: Rebar can start after pour begins (but with lag)         |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| FINISH-TO-FINISH (FF)                                             |
| Activity B cannot finish until Activity A finishes                |
|                                                                   |
| A: System testing     [==============]                            |
| B: Create O&M manual  [================]                          |
|                                                                   |
| Example: Manual must be updated until testing complete            |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| START-TO-FINISH (SF) - Rare                                       |
| Activity B cannot finish until Activity A starts                  |
|                                                                   |
| A: New system operational    [======]                             |
| B: Old system running  [=============]                            |
|                                                                   |
| Example: Old system runs until new system starts                  |
|                                                                   |
+===================================================================+
```

### Lead and Lag

```
LEAD AND LAG
+===================================================================+
|                                                                   |
| LAG (Delay after predecessor)                                     |
|                                                                   |
| A: Pour concrete     [====]                                       |
|                            (7-day cure lag)                       |
| B: Strip forms                   [==]                             |
|                                                                   |
| Relationship: A finish-to-start B with 7-day lag                  |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| LEAD (Overlap/acceleration)                                       |
|                                                                   |
| A: Wall framing      [==========]                                 |
| B: Electrical rough      [=======]  (-3 day lead)                 |
|                                                                   |
| Relationship: A finish-to-start B with -3 day lead                |
| (B can start 3 days before A finishes)                            |
|                                                                   |
+===================================================================+
```

---

## 3. Critical Path Method (CPM)

### Forward Pass & Backward Pass

```
CRITICAL PATH CALCULATION
+===================================================================+
|                                                                   |
| FORWARD PASS (Calculate Early Start and Early Finish)             |
| ES = Early Start (earliest an activity can start)                 |
| EF = Early Finish (ES + Duration - 1)                             |
| Rule: ES = Max (EF of all predecessors) + 1                       |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| BACKWARD PASS (Calculate Late Start and Late Finish)              |
| LF = Late Finish (latest an activity can finish)                  |
| LS = Late Start (LF - Duration + 1)                               |
| Rule: LF = Min (LS of all successors) - 1                         |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| FLOAT CALCULATION                                                 |
| Total Float = LS - ES (or LF - EF)                                |
| Free Float = ES(successor) - EF(activity) - 1                     |
|                                                                   |
| CRITICAL PATH = Path where Total Float = 0                        |
|                                                                   |
+===================================================================+

EXAMPLE CALCULATION:
+------------------------------------------------------------------------+
| Activity | Duration | Predecessor | ES  | EF  | LS  | LF  | Float    |
+==========+==========+=============+=====+=====+=====+=====+==========+
| A        | 10       | -           | 1   | 10  | 1   | 10  | 0 CRITICAL|
| B        | 5        | A           | 11  | 15  | 11  | 15  | 0 CRITICAL|
| C        | 8        | A           | 11  | 18  | 13  | 20  | 2         |
| D        | 7        | B           | 16  | 22  | 16  | 22  | 0 CRITICAL|
| E        | 5        | C           | 19  | 23  | 21  | 25  | 2         |
| F        | 3        | D, E        | 23  | 25  | 23  | 25  | 0 CRITICAL|
+------------------------------------------------------------------------+

CRITICAL PATH: A → B → D → F (Total duration: 25 days)
Near-critical path: A → C → E → F (Total duration: 23 days, 2 days float)
```

### CEA Project Schedule Example

```
SIMPLIFIED CEA PROJECT SCHEDULE
+====================================================================================+
| Phase            | Activity              | Duration | ES   | LF   | Float | Critical|
+==================+=======================+==========+======+======+=======+=========+
| DESIGN           | Schematic Design      | 6 wks    | 1    | 6    | 0     | YES     |
|                  | Design Development    | 8 wks    | 7    | 14   | 0     | YES     |
|                  | Construction Docs     | 12 wks   | 15   | 26   | 0     | YES     |
+------------------+-----------------------+----------+------+------+-------+---------+
| PERMITTING       | Submit permits        | 2 wks    | 27   | 28   | 0     | YES     |
|                  | Plan review           | 12 wks   | 29   | 40   | 0     | YES     |
|                  | Permit issued         | 1 wk     | 41   | 41   | 0     | YES     |
+------------------+-----------------------+----------+------+------+-------+---------+
| PROCUREMENT      | Bid MEP package       | 4 wks    | 27   | 34   | 4     | NO      |
|                  | Award MEP contract    | 2 wks    | 35   | 38   | 4     | NO      |
|                  | Order chillers        | 1 wk     | 27   | 27   | 0     | YES     |
|                  | Chiller fabrication   | 24 wks   | 28   | 51   | 0     | YES     |
|                  | Order LED fixtures    | 1 wk     | 32   | 32   | 2     | NO      |
|                  | LED fabrication       | 16 wks   | 33   | 48   | 2     | NO      |
+------------------+-----------------------+----------+------+------+-------+---------+
| CONSTRUCTION     | Site prep             | 4 wks    | 42   | 45   | 0     | YES     |
|                  | Foundation            | 6 wks    | 46   | 51   | 0     | YES     |
|                  | Structural frame      | 8 wks    | 52   | 59   | 0     | YES     |
|                  | Building envelope     | 12 wks   | 60   | 71   | 0     | YES     |
|                  | MEP rough-in          | 14 wks   | 72   | 85   | 0     | YES     |
|                  | Chiller installation  | 3 wks    | 86   | 88   | 0     | YES     |
|                  | Growing systems       | 10 wks   | 86   | 95   | 3     | NO      |
|                  | LED installation      | 8 wks    | 86   | 93   | 5     | NO      |
+------------------+-----------------------+----------+------+------+-------+---------+
| COMMISSIONING    | Systems integration   | 4 wks    | 96   | 99   | 0     | YES     |
|                  | Performance testing   | 3 wks    | 100  | 102  | 0     | YES     |
|                  | Training              | 2 wks    | 100  | 101  | 1     | NO      |
+------------------+-----------------------+----------+------+------+-------+---------+
| STARTUP          | First crop planted    | 1 wk     | 103  | 103  | 0     | YES     |
|                  | 30-day validation     | 4 wks    | 104  | 107  | 0     | YES     |
+====================================================================================+

PROJECT DURATION: 107 weeks (~ 25 months)

CRITICAL PATH (highlighted):
Design → Permits → Chiller procurement → Construction → Commissioning → Startup

NEAR-CRITICAL PATHS (watch closely):
- LED procurement and installation (only 2-5 weeks float)
- Growing systems installation (3 weeks float)
```

---

## 4. Duration Estimating Methods

### Estimation Techniques

**Analogous Estimating (Top-Down)**
- Based on historical data from similar projects
- Quick but less accurate
- Example: "Our last 50K sf facility took 22 months"

**Parametric Estimating**
- Use statistical relationships and productivity rates
- Example: "Duct installation: 40 LF/day per crew"

**Three-Point Estimating**
- Calculate weighted average: (Optimistic + 4×Most Likely + Pessimistic) / 6
- Example:
  ```
  Chiller installation:
  Optimistic:    2 days
  Most Likely:   3 days
  Pessimistic:   6 days

  Estimate = (2 + 4×3 + 6) / 6 = 20/6 = 3.3 days
  ```

**Bottom-Up Estimating**
- Estimate detailed components and aggregate
- Most accurate but time-consuming
- Example:
  ```
  Chiller installation:
  - Rig and move: 4 hours
  - Set on pad: 2 hours
  - Level and anchor: 6 hours
  - Connect piping: 16 hours
  - Connect electrical: 8 hours
  - Test run: 4 hours
  Total: 40 hours = 1 crew × 5 days
  ```

---

## 5. Schedule Compression

### Fast-Tracking

```
FAST-TRACKING (Parallelize sequential activities)
+===================================================================+
|                                                                   |
| ORIGINAL (Sequential):                                            |
| Design [==========]                                               |
|                   Permits [=======]                               |
|                                   Construction [===============]  |
| Duration: 45 weeks                                                |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| FAST-TRACKED (Overlapped):                                        |
| Design [==========]                                               |
|            Permits [=======]                                      |
|                   Construction [===============]                  |
| Duration: 35 weeks (22% reduction)                                |
|                                                                   |
| TRADE-OFFS:                                                       |
| + Reduces total duration                                          |
| + No additional cost (in theory)                                  |
| - Increased risk (working with incomplete information)            |
| - More rework potential                                           |
| - Requires more coordination                                      |
|                                                                   |
+===================================================================+
```

### Crashing

```
CRASHING (Add resources to reduce duration)
+===================================================================+
|                                                                   |
| EXAMPLE: Structural Steel Erection                                |
|                                                                   |
| Normal:           1 crew, 8 weeks, $400K                          |
| Crashed:          2 crews, 5 weeks, $550K                         |
|                                                                   |
| Time saved:       3 weeks                                         |
| Cost increase:    $150K                                           |
| Cost per week:    $50K/week                                       |
|                                                                   |
| CRASHING ANALYSIS:                                                |
| 1. Identify critical path activities                              |
| 2. Determine crash cost per unit time for each                    |
| 3. Crash lowest cost/time ratio activities first                  |
| 4. Continue until deadline met or diminishing returns             |
|                                                                   |
| TRADE-OFFS:                                                       |
| + Reduces duration                                                |
| + Controlled approach (analyze before committing)                 |
| - Increases cost                                                  |
| - May reduce quality (rushed work)                                |
| - Resource availability may limit options                         |
|                                                                   |
+===================================================================+

CRASH TABLE:
+------------------------------------------------------------------------+
| Activity          | Normal | Normal | Crash  | Crash | Max Crash | Cost/|
|                   | Duration| Cost  | Duration| Cost | Weeks     | Week |
+===================+========+========+=========+======+===========+======+
| Structural Frame  | 8 wks  | $400K  | 5 wks   | $550K| 3 weeks   | $50K |
| MEP Rough-in      | 14 wks | $1.2M  | 11 wks  | $1.5M| 3 weeks   | $100K|
| Envelope          | 12 wks | $800K  | 10 wks  | $920K| 2 weeks   | $60K |
| Commissioning     | 4 wks  | $200K  | 3 wks   | $250K| 1 week    | $50K |
+------------------------------------------------------------------------+

To crash 5 weeks total at lowest cost:
1. Crash Structural Frame: 3 weeks @ $50K/wk = $150K
2. Crash Commissioning: 1 week @ $50K/wk = $50K
3. Crash Envelope: 1 week @ $60K/wk = $60K
Total: 5 weeks saved for $260K
```

---

## 6. Resource Management

### Resource Loading

```
RESOURCE HISTOGRAM
+===================================================================+
|                                                                   |
| Electricians Required by Week                                     |
|                                                                   |
| 20 |                                 ████                          |
| 18 |                             ████████                          |
| 16 |                         ████████████                          |
| 14 |                     ████████████████                          |
| 12 |                 ████████████████████                          |
| 10 |             ████████████████████████                          |
|  8 |         ████████████████████████████                          |
|  6 |     ████████████████████████████████                          |
|  4 | ████████████████████████████████████                          |
|  2 |████████████████████████████████████████                       |
|    +-----------------------------------------------------------    |
|     Week: 1  5  10  15  20  25  30  35  40  45  50                |
|                                                                   |
| Available capacity: 12 electricians                               |
| Over-allocation weeks: 22-38 (need 14-20, have 12)                |
|                                                                   |
+===================================================================+

RESOLUTION OPTIONS:
1. RESOURCE LEVELING (within float)
   - Move non-critical activities to smooth demand
   - May extend schedule if no float available

2. RESOURCE SMOOTHING (preserve schedule)
   - Adjust resource allocation
   - Bring in additional resources during peaks

3. WORK OVERTIME
   - Existing crew works longer hours
   - Increases cost, reduces productivity over time

4. HIRE ADDITIONAL RESOURCES
   - Bring in temporary workers
   - Mobilization cost and learning curve
```

### Resource Leveling Example

```
BEFORE LEVELING:
+================================================================+
| Week  | Activity          | Resources | Float | Critical?    |
+=======+===================+===========+=======+==============+
| 20-24 | Electrical rough  | 8 elec.   | 0     | YES          |
| 20-24 | Lighting install  | 6 elec.   | 4 wks | NO           |
| 22-26 | Controls wiring   | 4 elec.   | 2 wks | NO           |
+-------+-------------------+-----------+-------+--------------+
| Total Required Week 20-24: 18 electricians                    |
| Available: 12 electricians                                    |
| OVER-ALLOCATED: 6 electricians                                |
+================================================================+

AFTER LEVELING:
+================================================================+
| Week  | Activity          | Resources | Float | Change       |
+=======+===================+===========+=======+==============+
| 20-24 | Electrical rough  | 8 elec.   | 0     | No change    |
| 25-29 | Lighting install  | 6 elec.   | 0     | Delayed 5 wks|
| 27-31 | Controls wiring   | 4 elec.   | 0     | Delayed 5 wks|
+-------+-------------------+-----------+-------+--------------+
| Week 20-24: 8 electricians (within capacity)                  |
| Week 25-29: 14 electricians (within capacity w/ margin)       |
|                                                               |
| RESULT: All activities within capacity, no schedule extension |
| (because activities had sufficient float)                     |
+================================================================+
```

---

## 7. Schedule Monitoring & Control

### Performance Metrics

```
SCHEDULE PERFORMANCE INDICATORS
+===================================================================+
|                                                                   |
| SCHEDULE VARIANCE (SV)                                            |
| SV = Earned Value - Planned Value                                 |
| Negative = Behind schedule                                        |
| Positive = Ahead of schedule                                      |
|                                                                   |
| SCHEDULE PERFORMANCE INDEX (SPI)                                  |
| SPI = Earned Value / Planned Value                                |
| <1.0 = Behind schedule                                            |
| >1.0 = Ahead of schedule                                          |
| Target: SPI ≥ 0.95                                                |
|                                                                   |
| EXAMPLE:                                                          |
| Planned Value (PV):  $12,000,000 (should have spent)              |
| Earned Value (EV):   $11,500,000 (value of work completed)        |
| Actual Cost (AC):    $11,800,000 (actually spent)                 |
|                                                                   |
| Schedule Variance:   $11.5M - $12.0M = -$500K (behind)            |
| Schedule Performance Index: $11.5M / $12.0M = 0.958 (4.2% behind) |
|                                                                   |
+===================================================================+
```

### Variance Analysis & Corrective Action

```
SCHEDULE VARIANCE ANALYSIS PROCESS
+===================================================================+
| 1. IDENTIFY VARIANCES                                             |
|    - Critical path activities behind schedule                     |
|    - Near-critical paths consuming float                          |
|    - Early warning indicators (upcoming activities at risk)       |
|                                                                   |
| 2. DETERMINE ROOT CAUSES                                          |
|    - Productivity lower than estimated                            |
|    - Resource availability issues                                 |
|    - Weather delays                                               |
|    - Design issues/RFIs delaying work                             |
|    - Material delivery delays                                     |
|    - Scope changes                                                |
|                                                                   |
| 3. ASSESS IMPACT                                                  |
|    - Impact to project completion date                            |
|    - Impact to key milestones                                     |
|    - Risk of additional delays                                    |
|                                                                   |
| 4. DEVELOP RECOVERY PLAN                                          |
|    - Accelerate future activities (crash/fast-track)              |
|    - Increase resources                                           |
|    - Work overtime/weekends                                       |
|    - Re-sequence activities                                       |
|    - Request deadline extension (last resort)                     |
|                                                                   |
| 5. IMPLEMENT & MONITOR                                            |
|    - Execute recovery actions                                     |
|    - Track effectiveness                                          |
|    - Adjust as needed                                             |
|                                                                   |
+===================================================================+

EXAMPLE RECOVERY PLAN:
+-------------------------------------------------------------------+
| ISSUE: Structural steel erection 2 weeks behind schedule          |
| CAUSE: Weather delays (5 days) + crew shortage (5 days)           |
| IMPACT: Critical path delay, affects MEP start date               |
|                                                                   |
| RECOVERY ACTIONS:                                                 |
| 1. Add second steel crew (cost: $50K, saves 1 week)               |
| 2. Pre-fabricate roof panels (cost: $30K, saves 3 days)           |
| 3. Fast-track MEP mobilization (overlap by 1 week)                |
| 4. Authorize weekend work for balance (cost: $25K, saves 2 days)  |
|                                                                   |
| TOTAL RECOVERY: 2 weeks (back on schedule)                        |
| TOTAL COST: $105K (from contingency)                              |
| RISK: Increased coordination complexity, quality monitoring       |
+-------------------------------------------------------------------+
```

---

## Key Takeaways

1. **CPM is essential for complex projects** - Understand dependencies and float to manage effectively.

2. **Critical path drives completion date** - Focus attention on critical path activities.

3. **Float is a resource** - Manage it wisely; once consumed, it's gone.

4. **Resource constraints are real** - Unlimited resources is a myth; level and smooth proactively.

5. **Compression has trade-offs** - Fast-tracking adds risk, crashing adds cost. Choose wisely.

6. **Early warning is key** - Monitor leading indicators, don't wait for delays to materialize.

7. **Recovery requires creativity** - Multiple small improvements often better than one big change.

---

## Practical Exercise

**Build a CEA Project Schedule**

Using project management software (MS Project, Primavera, or Excel):

1. Define 30-40 activities for a simplified CEA project
2. Establish dependencies (FS, SS, FF as appropriate)
3. Estimate durations
4. Calculate critical path
5. Identify float for all activities
6. Create Gantt chart
7. Simulate 2-week delay on critical path activity and develop recovery plan

---

## Next Module

In **Module 7: Budget Development & Cost Control**, we will learn to build detailed project budgets, implement earned value management, and control costs throughout the project lifecycle.

---

*Module 6 of 14 - CEA Project Management*
