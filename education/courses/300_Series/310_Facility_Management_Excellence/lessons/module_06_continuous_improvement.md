# Module 6: Continuous Improvement

**Duration:** 60 minutes
**Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Implement PDCA and A3 problem-solving methodologies
2. Facilitate root cause analysis sessions
3. Design and run improvement experiments
4. Build a continuous improvement culture
5. Manage improvement projects effectively
6. Sustain improvements long-term

---

## Continuous Improvement Philosophy

### What is Continuous Improvement?

**Continuous Improvement (Kaizen):** An ongoing effort to enhance products, services, or processes through incremental and breakthrough improvements

**Key Principles:**
- **Everyone involved** - Not just management or engineers
- **Small steps** - Incremental changes add up
- **Data-driven** - Measure, analyze, improve
- **Standardize gains** - Lock in improvements
- **Never-ending** - Always a better way

### Types of Improvement

**1. Incremental (Kaizen)**
- Small, continuous improvements
- Low cost, low risk
- Employee-driven
- Daily/weekly cadence
- Example: Reduce transplant time by 30 seconds

**2. Breakthrough (Kaikaku)**
- Large, transformational changes
- Higher investment
- Management-led
- Project-based (months)
- Example: Implement full automation system

**Both are necessary:**
```
                    Performance
                         ↑
                         │      ┌─ Kaikaku (big jump)
                         │    ┌─┘
                         │  ┌─┘ ← Kaizen (small steps)
                         │┌─┘
                         ├┘ ← Kaizen
                        ─┼────────────────────→ Time
                         │
                      Start

Kaikaku creates step-change
Kaizen sustains and builds on it
```

---

## PDCA Cycle

### The Plan-Do-Check-Act Method

**PDCA** (Deming Cycle): Iterative four-step management method for continuous improvement

```
┌──────────────────────────────────────┐
│                                      │
│     1. PLAN                          │
│     Define problem                   │
│     Analyze root cause               │
│     Develop countermeasures          │
│            ↓                         │
│     2. DO                            │
│     Implement on small scale         │
│     Test the solution                │
│     Collect data                     │
│            ↓                         │
│     3. CHECK                         │
│     Analyze results                  │
│     Compare to goal                  │
│     Identify learnings               │
│            ↓                         │
│     4. ACT                           │
│     Standardize if successful        │
│     Expand to larger scale           │
│     Or adjust and repeat cycle       │
│            ↓                         │
│     [Next Improvement] ←─────────────┤
│                                      │
└──────────────────────────────────────┘
```

### PDCA in Action - CEA Example

**Problem:** High tip burn rate in lettuce (15% of crop)

**PLAN:**
```
Problem Definition:
- 15% of lettuce shows tip burn
- Reduces grade from A to B
- Lost revenue: ~$3,000/month

Root Cause Analysis (5 Whys):
Why tip burn? → Calcium deficiency in tips
Why deficiency? → Not reaching leaf margins
Why not reaching? → Low transpiration
Why low transpiration? → High humidity
Why high humidity? → Dehumidifier undersized

Root Cause: Insufficient dehumidification capacity

Countermeasure:
Add supplemental dehumidifier in Zone A (pilot test)
Target: Reduce humidity from 75% → 60%
Hypothesis: Tip burn will decrease to <5%

Success Metrics:
- Humidity: Maintain 60% ±5%
- Tip burn rate: <5%
- Timeline: 2 crop cycles (10 weeks)
```

**DO:**
```
Week 1:
- Installed supplemental dehumidifier
- Calibrated controls
- Trained operators on monitoring

Weeks 2-10:
- Monitored humidity 3x daily
- Tracked tip burn rate weekly
- Documented observations
- Adjusted settings as needed

Data Collection:
- Environmental data logs
- Quality inspection records
- Photos of crop development
```

**CHECK:**
```
Results After 2 Cycles:

Humidity Control:
Before: 75% average (range 70-82%)
After: 60% average (range 58-63%) ✓

Tip Burn Rate:
Before: 15% affected
After: 4% affected ✓

Quality Impact:
Grade A rate: 80% → 93%
Revenue increase: $2,800/month

Energy Cost:
Additional dehumidifier: +$150/month electricity

Net Benefit: $2,650/month = $31,800/year

Conclusion: Countermeasure successful!
```

**ACT:**
```
Standardize:
✓ Update SOP for humidity targets (60% ±5%)
✓ Add dehumidifier to PM schedule
✓ Train all shifts on importance of humidity control
✓ Add humidity to daily checklist

Expand:
✓ Install dehumidifiers in Zones B and C
✓ Monitor for similar results

Next PDCA:
Investigate other quality improvements
- Shelf life extension
- Color consistency
- Weight uniformity
```

---

## A3 Problem Solving

### What is A3 Thinking?

**A3:** One-page (11"×17") structured problem-solving and planning tool

**Purpose:**
- Concise documentation
- Logical thinking process
- Visual communication
- Hoshin kanri (policy deployment)

### A3 Structure

```
╔══════════════════════════════════════════════════════════════════════╗
║                         A3 PROBLEM SOLVING                           ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║ Title: ________________    Owner: ___________  Date: __________     ║
║                                                                      ║
║ ┌─────────────────────────────────┬────────────────────────────────┐║
║ │ 1. BACKGROUND / PROBLEM         │ 2. CURRENT CONDITION           │║
║ │                                 │                                ││
║ │ Context and reason for A3       │ Data showing current state     │║
║ │ Why this problem matters        │ Charts, graphs, metrics        │║
║ │ Impact on business/customers    │ Evidence of the gap            │║
║ │                                 │                                ││
║ │                                 │                                ││
║ │                                 │                                ││
║ ├─────────────────────────────────┼────────────────────────────────┤║
║ │ 3. GOAL / TARGET                │ 4. ROOT CAUSE ANALYSIS         │║
║ │                                 │                                ││
║ │ Specific, measurable target     │ 5 Whys, Fishbone, etc.         │║
║ │ Timeline for achievement        │ Data-driven investigation      │║
║ │ Success metrics defined         │ Root cause identified          │║
║ │                                 │                                ││
║ │                                 │                                ││
║ │                                 │                                ││
║ ├─────────────────────────────────┼────────────────────────────────┤║
║ │ 5. COUNTERMEASURES              │ 6. IMPLEMENTATION PLAN         │║
║ │                                 │                                ││
║ │ Actions to address root cause   │ Who, What, When table          │║
║ │ Why these will work             │ Milestones and timeline        │║
║ │ Resources required              │ Risk mitigation                │║
║ │                                 │                                ││
║ │                                 │                                ││
║ │                                 │                                ││
║ ├─────────────────────────────────┴────────────────────────────────┤║
║ │ 7. FOLLOW-UP / RESULTS                                           │║
║ │                                                                  │║
║ │ Results vs. target (with data)                                   │║
║ │ What worked / what didn't                                        │║
║ │ Standardization actions taken                                    │║
║ │ Lessons learned                                                  │║
║ │ Next steps / remaining issues                                    │║
║ │                                                                  │║
║ └──────────────────────────────────────────────────────────────────┘║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

### Completed A3 Example - Harvest Efficiency

```
╔══════════════════════════════════════════════════════════════════════╗
║                    HARVEST EFFICIENCY IMPROVEMENT                    ║
╠══════════════════════════════════════════════════════════════════════╣
║ Owner: Maria Lopez, Harvest Lead          Date: December 10, 2025   ║
║ ┌─────────────────────────────────┬────────────────────────────────┐║
║ │ 1. BACKGROUND                   │ 2. CURRENT CONDITION           │║
║ │                                 │                                ││
║ │ Harvest operation unable to     │ Current: 45 min per 100 lbs    │║
║ │ keep pace with demand           │ Target: 30 min per 100 lbs     │║
║ │                                 │ Gap: 50% too slow              │║
║ │ Impact:                         │                                ││
║ │ - Delayed shipments             │ Time Breakdown:                │║
║ │ - Overtime costs ($1,200/mo)    │ ├─ Cutting: 15 min             │║
║ │ - Customer complaints (3/month) │ ├─ Collecting: 12 min          │║
║ │ - Limited growth capacity       │ ├─ Transport: 10 min           │║
║ │                                 │ └─ Sorting: 8 min              │║
║ ├─────────────────────────────────┼────────────────────────────────┤║
║ │ 3. GOAL                         │ 4. ROOT CAUSE ANALYSIS         │║
║ │                                 │                                ││
║ │ Reduce harvest time from 45 min │ 5 Whys (Transport):            │║
║ │ to 30 min per 100 lbs           │ Why slow? Walking to packing   │║
║ │                                 │ Why walk? No staging area      │║
║ │ Timeline: 8 weeks               │ Why no staging? Not designed   │║
║ │                                 │ Root: Poor layout              │║
║ │ Success = Sustain 30 min for    │                                ││
║ │ 4 consecutive weeks             │ 5 Whys (Collecting):           │║
║ │                                 │ Why slow? Searching for bins   │║
║ │                                 │ Root: Disorganized workspace   │║
║ ├─────────────────────────────────┼────────────────────────────────┤║
║ │ 5. COUNTERMEASURES              │ 6. PLAN                        │║
║ │                                 │                                ││
║ │ 1. Create staging area near     │ Week 1: Design staging area    │║
║ │    grow zone (eliminate walk)   │ Week 2: Install staging area   │║
║ │                                 │ Week 3: 5S harvest tools       │║
║ │ 2. Organize tools with shadow   │ Week 4: Train team on changes  │║
║ │    boards (eliminate search)    │ Week 5-8: Measure and refine   │║
║ │                                 │                                ││
║ │ 3. Standard work for sequence   │ Budget: $800 (staging)         │║
║ │    (reduce variation)           │ Labor: 40 hrs (team project)   │║
║ ├─────────────────────────────────┴────────────────────────────────┤║
║ │ 7. RESULTS (Week 8)                                              │║
║ │                                                                  │║
║ │ ✓ ACHIEVED: 32 min per 100 lbs (29% improvement)                 │║
║ │ ✓ Sustained for 4 weeks                                          │║
║ │ ✓ Overtime reduced to $200/month (saved $1,000/mo = $12K/year)   │║
║ │ ✓ Zero customer complaints                                       │║
║ │                                                                  │║
║ │ Time Breakdown (New):                                            │║
║ │ ├─ Cutting: 14 min (improved technique)                          │║
║ │ ├─ Collecting: 8 min (organized tools)                           │║
║ │ ├─ Transport: 4 min (staging area!)                              │║
║ │ └─ Sorting: 6 min (better workflow)                              │║
║ │                                                                  │║
║ │ Standardized: New SOP-015 Rev 2.0, Team trained                  │║
║ │ Next: Apply same approach to packaging operation                 │║
║ └──────────────────────────────────────────────────────────────────┘║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## Root Cause Analysis Tools

### 1. Five Whys

**Method:** Ask "why" repeatedly to drill down to root cause

**Rules:**
- Ask "why" at least 5 times (may be more or less)
- Base answers on facts, not assumptions
- Stop when asking why no longer yields useful information
- May have multiple root causes (multiple paths)

**Example:**
```
Problem: Plants are wilting

Why? → Insufficient water
Why? → Pump not running
Why? → Circuit breaker tripped
Why? → Electrical overload
Why? → Too many devices on one circuit

Root Cause: Inadequate electrical capacity

Countermeasure: Install dedicated circuit for pump
Prevention: Electrical load analysis for all critical equipment
```

### 2. Fishbone Diagram (Ishikawa)

**Method:** Organize potential causes by category

**Standard Categories (6M's):**
- Man (People)
- Machine (Equipment)
- Material (Inputs)
- Method (Process)
- Measurement (Data)
- Mother Nature (Environment)

**Example - Quality Issue:**
```
                                Inconsistent
                                Lettuce Weight
                                      ↑
         People          Materials    │    Methods
              ↓               ↓       │       ↓
    Inadequate training   Seed variety│  No standard work
    High turnover        Nutrient var.│  Poor procedures
    Inconsistent skill   Media quality│  No verification
              ↓               ↓       │       ↓
         ─────┴───────────────┴───────┴───────┴─────
              ↑               ↑       │       ↑
    Equipment failure    Sensor drift │  High humidity
    Poor calibration    No validation │  Temp swings
    Lighting variance   Infreq. check │  CO2 fluctuation
              ↑               ↑       │       ↑
         Machines       Measurement   │   Environment

Analysis reveals:
Primary: Poor environmental control (Mother Nature)
Secondary: Inadequate sensor validation (Measurement)
Tertiary: Lack of standard work (Methods)
```

### 3. Pareto Analysis

**Principle:** 80/20 rule - Focus on the "vital few" vs "trivial many"

**Method:**
1. Collect data on problems/defects
2. Sort by frequency (highest to lowest)
3. Calculate cumulative percentage
4. Create chart showing bars + cumulative line
5. Focus on issues representing 80% of impact

**Example - Quality Defects:**
```
Defect Type          │ Count │ % of Total │ Cumulative %
─────────────────────┼───────┼────────────┼─────────────
Tip burn             │  145  │    48%     │    48%  ◄─┐
Mechanical damage    │   78  │    26%     │    74%  ◄─┤ Focus here
Small size           │   35  │    12%     │    86%  ◄─┘ (86% of defects)
Yellowing            │   22  │     7%     │    93%
Pest damage          │   12  │     4%     │    97%
Other                │    8  │     3%     │   100%
─────────────────────┴───────┴────────────┴─────────────
Total                  300

Bar Chart:
     │
 150 ├─ █
     │  █
 100 ├─ █    █
     │  █    █
  50 ├─ █    █    █
     │  █    █    █ █ █ █
   0 ├──┴────┴────┴─┴─┴─┴─
        TB   MD   SS  Y  P  O

Action: Focus improvement on tip burn and mechanical damage
These two issues = 74% of all quality problems
```

### 4. Is/Is Not Analysis

**Method:** Define problem precisely by what it is and isn't

**Matrix:**
```
╔═══════════════════════════════════════════════════════════════╗
║                    IS / IS NOT MATRIX                         ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║ Problem: Excessive tip burn in lettuce                        ║
║                                                               ║
║ ┌─────────────┬──────────────────┬──────────────────────────┐ ║
║ │ Dimension   │ IS (Problem)     │ IS NOT (No Problem)      │ ║
║ ├─────────────┼──────────────────┼──────────────────────────┤ ║
║ │ WHAT        │ Romaine lettuce  │ Other varieties          │ ║
║ │             │ Leaf tip burn    │ Other defects            │ ║
║ ├─────────────┼──────────────────┼──────────────────────────┤ ║
║ │ WHERE       │ Zone A           │ Zones B, C, D            │ ║
║ │             │ Upper shelves    │ Lower shelves            │ ║
║ ├─────────────┼──────────────────┼──────────────────────────┤ ║
║ │ WHEN        │ Week 4-5 of grow │ Weeks 1-3                │ ║
║ │             │ Summer months    │ Winter months            │ ║
║ ├─────────────┼──────────────────┼──────────────────────────┤ ║
║ │ HOW MUCH    │ 15% affected     │ 85% unaffected           │ ║
║ │             │ Severe (>30%)    │ Mild (<30%)              │ ║
║ └─────────────┴──────────────────┴──────────────────────────┘ ║
║                                                               ║
║ CLUES FROM DIFFERENCES:                                       ║
║ - Only Zone A → Check Zone A environmental controls           ║
║ - Only upper shelves → Check airflow, light intensity higher  ║
║ - Only summer → Related to outside temperature/humidity       ║
║ - Week 4-5 → Critical growth period, max nutrient demand      ║
║                                                               ║
║ HYPOTHESIS:                                                   ║
║ Zone A dehumidifier inadequate during summer, worse on        ║
║ upper shelves due to heat stratification, coincides with      ║
║ peak calcium demand period.                                   ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

## Running Improvement Experiments

### Scientific Method for Improvement

**Steps:**
1. **Observe** - Identify problem or opportunity
2. **Hypothesize** - Propose explanation and solution
3. **Predict** - Expected outcome of solution
4. **Test** - Run controlled experiment
5. **Analyze** - Evaluate results
6. **Conclude** - Confirm or reject hypothesis
7. **Standardize** - If successful, make permanent

### Experimental Design

**Key Elements:**
- **Control group:** Baseline for comparison
- **Test group:** Receives the change
- **Variables:** Change only ONE thing at a time
- **Measurement:** Objective data collection
- **Duration:** Long enough to be meaningful

**Example Experiment - Lighting Duration:**
```
EXPERIMENT PLAN

Hypothesis: Increasing daily light from 16 to 18 hours
           will increase lettuce yield without quality loss

Test Setup:
├─ Control Group: Zone B (16 hours light/day, current standard)
│  - 500 plants
│  - Current light schedule: 6am-10pm
│  - Measure: Weight, quality, energy use
│
└─ Test Group: Zone A (18 hours light/day)
   - 500 plants (same variety, same age)
   - New light schedule: 6am-12am
   - Measure: Weight, quality, energy use

Duration: 2 complete crop cycles (10 weeks)

Success Criteria:
- Yield increase: >10% (to justify energy cost)
- Quality: No decrease (maintain Grade A rate)
- ROI: Positive (yield value > energy cost)

Data Collection:
┌──────────┬─────────────┬─────────────┬──────────────┐
│ Metric   │ Control     │ Test        │ Difference   │
├──────────┼─────────────┼─────────────┼──────────────┤
│ Avg wt   │ 11.8 oz     │ 12.9 oz     │ +9.3% ✓      │
│ Grade A  │ 94%         │ 93%         │ -1% ✓        │
│ Cycle    │ 35 days     │ 33 days     │ -2 days ✓    │
│ kWh/lb   │ 3.2 kWh     │ 3.5 kWh     │ +9.4%        │
│ Cost/lb  │ $0.38       │ $0.42       │ +$0.04       │
│ Price/lb │ $2.50       │ $2.50       │ --           │
└──────────┴─────────────┴─────────────┴──────────────┘

Results:
✓ Yield increased 9.3% (close to 10% target)
✓ Quality maintained
✓ Faster cycle time (bonus!)
✗ Energy cost increased $0.04/lb

ROI Analysis:
Additional revenue: $2.50/lb × 9.3% = $0.23/lb
Additional cost: $0.04/lb
Net benefit: $0.19/lb
ROI: 475% (for every $1 energy, gain $4.75 value)

Conclusion: ADOPT - Standardize 18-hour photoperiod

Next Experiment: Test 20-hour photoperiod to find optimum
```

---

## Building an Improvement Culture

### Cultural Elements

**1. Leadership Commitment**
- Leaders participate in improvement activities
- Resources allocated (time, money, training)
- Improvements recognized and celebrated
- Failures seen as learning opportunities

**2. Employee Engagement**
- Everyone expected to contribute ideas
- Easy idea submission process
- Quick review and feedback
- Implementation support

**3. Systematic Approach**
- Structured problem-solving methods
- Data-driven decisions
- Standard formats (A3, PDCA)
- Documentation and knowledge sharing

**4. Time Allocation**
- Dedicated time for improvement (10% of work time)
- Regular improvement meetings
- Kaizen events scheduled
- Training opportunities

### Idea Management System

**Continuous Improvement Idea Process:**

```
Employee Idea
      ↓
[Idea Submission Form]
      ↓
Manager Review (within 3 days)
      ↓
   ┌──┴───┐
   ↓      ↓
Approve  Need More Info → Return to Employee
   ↓
Add to Improvement Backlog
   ↓
Prioritize (Impact × Feasibility)
   ↓
Assign Owner & Resources
   ↓
Implement (PDCA cycle)
   ↓
   ┌──┴───┐
   ↓      ↓
Success  Learn & Adjust
   ↓      ↓
Standardize ← ─┘
   ↓
Recognize & Share
   ↓
Next Idea
```

**Idea Submission Form:**
```
╔══════════════════════════════════════════════════════════╗
║          CONTINUOUS IMPROVEMENT IDEA                     ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║ Submitted by: ________________  Date: __________        ║
║ Department: ______________      ID#: __________         ║
║                                                          ║
║ CURRENT SITUATION (What's the problem/opportunity?):     ║
║ ____________________________________________________     ║
║ ____________________________________________________     ║
║                                                          ║
║ PROPOSED SOLUTION (What should we do?):                  ║
║ ____________________________________________________     ║
║ ____________________________________________________     ║
║                                                          ║
║ EXPECTED BENEFITS:                                       ║
║ □ Time savings: ______ hours/week                        ║
║ □ Cost savings: $______ /month                           ║
║ □ Quality improvement: ______                            ║
║ □ Safety improvement: ______                             ║
║ □ Customer satisfaction: ______                          ║
║ □ Other: ________________                                ║
║                                                          ║
║ RESOURCES NEEDED TO TEST:                                ║
║ ____________________________________________________     ║
║                                                          ║
║ ──────────────────────────────────────────────────       ║
║ MANAGER REVIEW:                                          ║
║ □ Approved - Move to implementation                      ║
║ □ Need more information (see notes)                      ║
║ □ Not feasible (see explanation)                         ║
║                                                          ║
║ Priority: □ High  □ Medium  □ Low                        ║
║                                                          ║
║ Notes: _____________________________________________     ║
║ ____________________________________________________     ║
║                                                          ║
║ Reviewed by: ______________ Date: __________            ║
║                                                          ║
║ ──────────────────────────────────────────────────       ║
║ IMPLEMENTATION RESULTS:                                  ║
║ Status: □ Completed  □ In Progress  □ On Hold           ║
║ Actual benefits: ________________________________        ║
║ Lessons learned: ________________________________        ║
║ Standardized: □ Yes  □ No                                ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

### Recognition and Rewards

**Recognition Strategies:**
- Public acknowledgment (team meetings, newsletters)
- Improvement boards with photos
- Awards (Improver of the Month)
- Tangible rewards (gift cards, bonuses)
- Career development opportunities
- Participation in problem-solving teams

---

## Sustaining Improvements

### Why Improvements Don't Stick

**Common Reasons:**
1. No standardization (everyone reverts to old way)
2. No training (new people don't know new way)
3. No accountability (no one checks compliance)
4. No measurement (can't tell if still working)
5. Leadership changes priorities
6. Improvement champions leave

### Sustainment Strategies

**1. Standardization**
- Update SOPs immediately
- Revise visual standards
- Communicate changes clearly
- Remove old standards to avoid confusion

**2. Training**
- Train all current staff
- Include in new hire training
- Refresher training periodically
- Verify understanding

**3. Verification**
- Regular audits (daily/weekly)
- Metrics tracking and display
- Gemba walks by leaders
- Peer accountability

**4. Continuous Monitoring**
```
╔══════════════════════════════════════════════════════════╗
║        IMPROVEMENT SUSTAINABILITY SCORECARD              ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║ Improvement: Harvest Time Reduction (A3-2024-015)       ║
║ Target: Sustain 32 min per 100 lbs                      ║
║                                                          ║
║ Week │ Actual  │ Target │ Status │ Issues              ║
║ ─────┼─────────┼────────┼────────┼──────────────────── ║
║  1   │ 32 min  │ 32 min │   ✓    │ None                ║
║  2   │ 33 min  │ 32 min │   ○    │ Training new person ║
║  3   │ 31 min  │ 32 min │   ✓    │ None                ║
║  4   │ 35 min  │ 32 min │   ✗    │ Tool not replaced   ║
║      │         │        │        │ → Action taken      ║
║  5   │ 32 min  │ 32 min │   ✓    │ None                ║
║  6   │ 31 min  │ 32 min │   ✓    │ None                ║
║                                                          ║
║ Status Key: ✓ On target  ○ Caution  ✗ Action required   ║
║                                                          ║
║ Sustainment Health: GOOD                                 ║
║ - Standardized: Yes ✓                                    ║
║ - Training current: Yes ✓                                ║
║ - Audits conducted: Weekly ✓                             ║
║ - Metrics visible: Yes ✓                                 ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

## Key Takeaways

1. **PDCA is foundational** - Structured approach to improvement
2. **A3 thinking** - Concise, complete problem solving
3. **Root cause analysis** - Don't treat symptoms, fix causes
4. **Experiment scientifically** - Test changes before full implementation
5. **Culture matters most** - Systems and tools are enablers
6. **Everyone improves** - Engage all levels
7. **Sustain gains** - Standardize, train, verify
8. **Never done** - Continuous means forever

---

## Practical Exercise

### Complete a Full PDCA Cycle

**Select a problem in your facility:**
1. Define problem with data
2. Conduct root cause analysis
3. Develop countermeasure
4. Test on small scale
5. Measure results
6. Standardize if successful
7. Document in A3 format

**Timeline: 4 weeks**

---

## Resources & Tools

### Templates
- A3 Problem Solving Template
- PDCA Worksheet
- Idea Submission Form
- Sustainability Scorecard
- Fishbone Diagram Template

### References
- "The Improvement Kata" by Mike Rother
- "Managing to Learn" by John Shook
- "The Lean Turnaround" by Art Byrne

### Next Steps
- Complete Module 6 Quiz
- Conduct root cause analysis on one issue
- Complete one A3 problem-solving project
- Implement idea management system

---

**Module 6 Complete**
**Next Module:** Performance Metrics - Measuring What Matters

*EcoFusion Academy - Course 310: Facility Management Excellence*
