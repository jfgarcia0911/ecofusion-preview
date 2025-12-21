# Module 14: Agile & Hybrid Approaches for CEA Projects

## Learning Objectives

- Understand agile principles and their application to CEA projects
- Identify when to use agile vs. traditional waterfall approaches
- Implement hybrid methodologies combining best of both approaches
- Apply Scrum framework to R&D and technology development
- Manage changing requirements in dynamic CEA projects
- Integrate agile practices with traditional construction management

---

## 1. Agile Principles in CEA Context

### Agile Manifesto Applied to CEA

```
TRADITIONAL AGILE MANIFESTO VALUES
(Applied to CEA Projects)
+===================================================================+
|                                                                   |
| INDIVIDUALS AND INTERACTIONS over processes and tools             |
| CEA Application:                                                  |
| - Grower input valued over rigid design specifications            |
| - Daily stand-ups with construction team vs. weekly reports only  |
| - Face-to-face problem-solving vs. formal RFI process             |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| WORKING SYSTEMS over comprehensive documentation                  |
| CEA Application:                                                  |
| - Pilot testing before full-scale implementation                  |
| - Iterative prototyping of growing systems                        |
| - Performance validation over theoretical calculations alone      |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| CUSTOMER COLLABORATION over contract negotiation                  |
| CEA Application:                                                  |
| - Partner with growers, not just contract with them               |
| - Flexible design adjustments based on operational feedback       |
| - Shared risk/reward models vs. adversarial contracts             |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| RESPONDING TO CHANGE over following a plan                        |
| CEA Application:                                                  |
| - Adapt to emerging technologies (new LED specs, automation)      |
| - Adjust crop mix based on market feedback during construction    |
| - Iterate on design based on prototype learnings                  |
|                                                                   |
+===================================================================+

NOTE: This doesn't mean processes, documentation, contracts, and
plans are unimportant - they remain critical for capital projects.
It means balancing them with agile values when appropriate.
```

### When to Use Agile in CEA Projects

```
WATERFALL vs. AGILE vs. HYBRID DECISION MATRIX
+====================================================================================+
| Project          | Characteristics         | Best Approach  | Example            |
| Component        |                         |                |                    |
+==================+=========================+================+====================+
| BUILDING SHELL   | - Well-defined          | WATERFALL      | Commercial         |
|                  | - Regulatory compliance | (Traditional)  | building           |
|                  | - Fixed design          |                | construction       |
|                  | - Sequential phases     |                |                    |
+------------------+-------------------------+----------------+--------------------+
| CORE MEP         | - Engineering-driven    | WATERFALL      | HVAC, electrical   |
|                  | - Performance specs     | with some      | distribution       |
|                  | - Code compliance       | flexibility    |                    |
+------------------+-------------------------+----------------+--------------------+
| GROWING          | - Evolving requirements | HYBRID         | Rack layouts,      |
| SYSTEMS DESIGN   | - User feedback critical| (Iterative     | irrigation zones,  |
|                  | - Operational testing   | with gates)    | workflow design    |
|                  | - Optimization needed   |                |                    |
+------------------+-------------------------+----------------+--------------------+
| AUTOMATION &     | - Rapid technology      | AGILE/HYBRID   | BMS programming,   |
| CONTROLS         |   evolution             | (Sprints with  | data dashboards,   |
|                  | - User stories emerge   | deliverables)  | mobile apps        |
|                  | - Integration testing   |                |                    |
+------------------+-------------------------+----------------+--------------------+
| R&D / CROP       | - Highly uncertain      | AGILE          | New crop trials,   |
| TRIALS           | - Experimentation       | (Scrum)        | growing protocol   |
|                  | - Rapid feedback        |                | development        |
+------------------+-------------------------+----------------+--------------------+
| OPERATIONAL      | - Changing requirements | AGILE          | SOPs, training     |
| PROCESSES        | - User-driven           | (Kanban)       | materials,         |
|                  | - Continuous            |                | dashboards         |
|                  |   improvement           |                |                    |
+====================================================================================+

DECISION CRITERIA:
Use WATERFALL when:
✓ Requirements are clear and stable
✓ Regulatory compliance is rigid
✓ Sequential dependencies exist
✓ High cost of change

Use AGILE when:
✓ Requirements will evolve
✓ Rapid feedback is valuable
✓ Innovation is prioritized
✓ Failure is low-cost

Use HYBRID when:
✓ Mix of stable and evolving elements
✓ Need structure but also flexibility
✓ Stakeholders span both cultures
✓ Most CEA capital projects fit here
```

---

## 2. Scrum Framework for CEA R&D

### Scrum Basics

```
SCRUM FRAMEWORK APPLIED TO CEA CROP DEVELOPMENT
+===================================================================+
|                                                                   |
| SCRUM ROLES:                                                      |
| - Product Owner: Head Grower / R&D Director                      |
| - Scrum Master: Project Coordinator / Facilitator                |
| - Development Team: Growers, Data Scientists, Equipment Techs    |
|                                                                   |
| SCRUM ARTIFACTS:                                                  |
| - Product Backlog: List of crop varieties, protocols to develop  |
| - Sprint Backlog: Work committed for current sprint              |
| - Increment: Working knowledge/protocol at end of sprint         |
|                                                                   |
| SCRUM CEREMONIES:                                                 |
| - Sprint Planning: Define what to test this sprint               |
| - Daily Stand-up: Quick sync on progress and blockers            |
| - Sprint Review: Demo results to stakeholders                    |
| - Sprint Retrospective: Improve process                          |
|                                                                   |
| SPRINT: 2-4 week iteration (aligned with crop cycle)             |
|                                                                   |
+===================================================================+
```

### Example: Leafy Greens Protocol Development

```
SCRUM PROJECT: OPTIMIZE LETTUCE GROWING PROTOCOL
+===================================================================+
| GOAL: Reduce crop cycle from 35 to 28 days while maintaining     |
| quality and minimizing energy use                                |
| DURATION: 6 sprints (24 weeks)                                    |
+===================================================================+

PRODUCT BACKLOG (Prioritized):
+-------------------------------------------------------------------+
| Priority | User Story                                    | Estimate|
+==========+===============================================+=========+
| 1        | As a grower, I want to test increased light   | 8 pts   |
|          | intensity (800 μmol vs. 600 μmol baseline)    |         |
|          | to accelerate growth                          |         |
+----------+-----------------------------------------------+---------+
| 2        | As an operations manager, I want to compare   | 5 pts   |
|          | photoperiods (18hr vs. 20hr vs. 24hr) to     |         |
|          | find optimal energy/growth balance            |         |
+----------+-----------------------------------------------+---------+
| 3        | As a grower, I want to test higher nutrient   | 5 pts   |
|          | EC (2.0 vs. 1.6 baseline) to support faster  |         |
|          | growth                                        |         |
+----------+-----------------------------------------------+---------+
| 4        | As a quality manager, I want to validate      | 3 pts   |
|          | shelf life of faster-grown lettuce            |         |
+----------+-----------------------------------------------+---------+
| 5        | As a CFO, I want to calculate ROI of faster   | 2 pts   |
|          | cycles (energy cost vs. production increase)  |         |
+-------------------------------------------------------------------+

SPRINT 1 (Weeks 1-4): BASELINE & LIGHT INTENSITY TEST
+-------------------------------------------------------------------+
| Sprint Goal: Establish baseline and test high-light hypothesis   |
|                                                                   |
| Sprint Backlog:                                                   |
| ☐ Grow baseline crop (600 μmol, 18hr photoperiod) - 5 pts       |
| ☐ Grow test crop (800 μmol, 18hr photoperiod) - 5 pts           |
| ☐ Daily measurements (weight, height, color) - 3 pts             |
| ☐ Energy consumption tracking - 2 pts                             |
| ☐ Quality assessment at harvest - 3 pts                           |
| Total: 18 points (team capacity)                                  |
|                                                                   |
| Daily Stand-up (15 minutes, 9:00 AM daily):                       |
| - Yesterday: What data collected?                                 |
| - Today: What measuring/observing?                                |
| - Blockers: Equipment issues, data gaps?                          |
|                                                                   |
| Sprint Review (End of Week 4):                                    |
| RESULTS:                                                          |
| - Baseline: 35-day cycle, 150g/head avg, 95% Grade A             |
| - High light: 32-day cycle, 155g/head avg, 93% Grade A           |
| - Energy: +20% consumption for high light                         |
| - Conclusion: 3-day reduction achieved, quality acceptable       |
| DECISION: Move forward with high-light protocol, test next var.  |
|                                                                   |
| Sprint Retrospective:                                             |
| What went well: Measurement protocol worked smoothly              |
| What to improve: Need better temperature control in test zone    |
| Action: Install additional monitoring in test area                |
+-------------------------------------------------------------------+

SPRINT 2 (Weeks 5-8): PHOTOPERIOD OPTIMIZATION
[Continue with photoperiod testing...]

SPRINT 3-6: Test remaining variables, refine protocol, validate

FINAL DELIVERABLE (End of Sprint 6):
☑ Optimized growing protocol documented
☑ Target cycle: 28 days achieved (baseline was 35 days)
☑ Quality maintained: 94% Grade A (vs. 95% baseline)
☑ Energy impact: +15% per cycle, but +25% annual production
☑ Financial model: ROI positive, payback 8 months
☑ Protocol ready for full-scale implementation
```

---

## 3. Hybrid Project Management Approach

### Hybrid Framework for CEA Facility Projects

```
HYBRID PM FRAMEWORK - CEA CAPITAL PROJECT
+===================================================================+
|                                                                   |
| PHASE 1-2: CONCEPT & FEASIBILITY (Agile-Inspired)                |
| - Rapid prototyping of concepts                                   |
| - Stakeholder workshops (design sprints)                          |
| - Iterative business case development                             |
| - "Fail fast" on non-viable options                               |
| Deliverable: Approved project charter and baseline                |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| PHASE 3: DESIGN (Hybrid)                                          |
| WATERFALL ELEMENTS:                                               |
| - Architectural design (sequential: SD → DD → CD)                 |
| - Structural engineering (code-driven)                            |
| - MEP engineering (performance specs)                             |
|                                                                   |
| AGILE ELEMENTS:                                                   |
| - Growing system layout (iterative with grower feedback)          |
| - Workflow design (user stories, mockups)                         |
| - Control system UX (sprints with grower testing)                 |
|                                                                   |
| Integration: Design reviews serve as "sprint reviews"             |
| - 30% review: Validate direction with stakeholders                |
| - 60% review: Incorporate feedback, adjust                        |
| - 90% review: Final refinements                                   |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| PHASE 4: CONSTRUCTION (Waterfall with Agile Practices)            |
| WATERFALL STRUCTURE:                                              |
| - Sequential construction phases (can't build roof before walls)  |
| - Contractual milestones and payments                             |
| - Formal change order process                                     |
|                                                                   |
| AGILE PRACTICES:                                                  |
| - Daily stand-ups (15-min safety/coordination huddles)            |
| - 2-week lookahead planning (mini sprints)                        |
| - Retrospectives after major milestones                           |
| - Collaborative problem-solving (RFIs as "spikes")                |
| - Visual management (boards, dashboards)                          |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| PHASE 5: COMMISSIONING & STARTUP (Agile)                          |
| - Iterative testing and optimization                              |
| - Sprint-based commissioning (system by system)                   |
| - Daily feedback loops during startup                             |
| - Continuous improvement as crops introduced                      |
| - Flexible adaptation to performance findings                     |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| PHASE 6: OPERATIONS (Agile - Continuous Improvement)              |
| - Kanban for ongoing improvements                                 |
| - Regular retrospectives (monthly)                                |
| - Backlog of optimization ideas                                   |
| - Data-driven experimentation                                     |
|                                                                   |
+===================================================================+
```

### Agile Practices for Traditional PM

```
AGILE PRACTICES THAT ENHANCE TRADITIONAL PM
+===================================================================+
| PRACTICE                 | TRADITIONAL PM          | AGILE BENEFIT|
+==========================+=========================+==============+
| DAILY STAND-UPS          | Weekly progress meeting | - Faster issue|
| (15 minutes, same time/  |                         |   resolution  |
| place, 3 questions)      |                         | - Better coord|
|                          |                         | - Team cohesion|
+--------------------------+-------------------------+--------------+
| VISUAL MANAGEMENT        | Gantt charts, reports   | - Transparency|
| (Kanban boards, burn-    |                         | - Engagement  |
| down charts, dashboards) |                         | - Motivation  |
+--------------------------+-------------------------+--------------+
| 2-WEEK ITERATIONS        | Phases/milestones       | - Regular     |
| (Planning, execution,    |                         |   delivery    |
| review, adapt)           |                         | - Adaptation  |
|                          |                         | - Momentum    |
+--------------------------+-------------------------+--------------+
| RETROSPECTIVES           | Lessons learned (at end)| - Continuous  |
| (After each milestone    |                         |   improvement |
| or sprint)               |                         | - Team learning|
|                          |                         | - Process opt.|
+--------------------------+-------------------------+--------------+
| CO-LOCATION              | Distributed team        | - Communication|
| (War room, big room      |                         | - Decisions   |
| planning)                |                         | - Collaboration|
+--------------------------+-------------------------+--------------+
| DEFINITION OF DONE       | Acceptance criteria     | - Clarity     |
| (Clear, testable         |                         | - Quality     |
| completion criteria)     |                         | - Prevents    |
|                          |                         |   rework      |
+--------------------------+-------------------------+--------------+
| TIMEBOXING               | Deadline-driven         | - Focus       |
| (Fixed time, flex scope  |                         | - Prioritization|
| within)                  |                         | - Prevents    |
|                          |                         |   perfection  |
|                          |                         |   paralysis   |
+==========================+=========================+==============+
```

---

## 4. Managing Changing Requirements

### Change Management in Agile Context

```
AGILE CHANGE MANAGEMENT vs. TRADITIONAL
+===================================================================+
| TRADITIONAL CHANGE CONTROL:                                       |
| - Baseline established                                            |
| - Changes require formal approval                                 |
| - Cost and schedule impact assessed                               |
| - Change orders documented                                        |
| Goal: Minimize changes, protect baseline                          |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| AGILE CHANGE EMBRACE:                                             |
| - Product backlog is dynamic                                      |
| - Priorities adjusted each sprint                                 |
| - Scope flexibility within timeboxes                              |
| - Continuous stakeholder feedback                                 |
| Goal: Maximize value, embrace learning                            |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| HYBRID APPROACH FOR CEA:                                          |
| - Fixed elements: Building, core MEP (traditional control)        |
| - Flexible elements: Growing system details, automation features  |
|   (agile adaptation)                                              |
| - Change tiers:                                                   |
|   • Tier 1: Major (cost/schedule impact) - Formal approval needed |
|   • Tier 2: Minor (within float/contingency) - PM approval        |
|   • Tier 3: Refinements (no cost/schedule) - Team adjusts         |
|                                                                   |
+===================================================================+

EXAMPLE: Lighting Control Changes During Project

TRADITIONAL APPROACH:
Week 10: Grower requests dimming capability
         → Submit change request
         → Assess cost impact (+$50K)
         → Get approval (2 weeks)
         → Issue change order
         → Implement
Result: Change approved but delayed, costly

HYBRID APPROACH:
Sprint Planning (Week 8): Include "dimming capability" in backlog
                          Prioritize based on value
                          Budget contingency allows addition
Sprint 3 (Week 10-12): Implement dimming in next sprint
                       Grower tests and provides feedback
                       Refine based on actual use
Result: Change implemented faster, refined through use
```

---

## 5. Integration Strategies

### Integrating Agile with Construction

```
AGILE-CONSTRUCTION INTEGRATION TECHNIQUES
+===================================================================+
| CHALLENGE: Construction is inherently sequential, while agile     |
| is iterative. How to integrate?                                   |
+===================================================================+

TECHNIQUE 1: PULL PLANNING (Lean Construction)
+-------------------------------------------------------------------+
| - Cross-functional team maps work backwards from milestone       |
| - Each trade commits to deliverables and dates                   |
| - Daily adjustments based on actual progress                      |
| - Visual board shows status (To Do / In Progress / Done)          |
| Agile connection: Similar to sprint planning and kanban           |
+-------------------------------------------------------------------+

TECHNIQUE 2: LAST PLANNER SYSTEM
+-------------------------------------------------------------------+
| - 6-week lookahead (rolling wave planning)                        |
| - Weekly work plans (commitments from each trade)                 |
| - Daily huddles (stand-ups)                                       |
| - Percent plan complete (PPC) metric (velocity analog)            |
| Agile connection: Iterative planning with commitment and tracking |
+-------------------------------------------------------------------+

TECHNIQUE 3: SET-BASED DESIGN
+-------------------------------------------------------------------+
| - Develop multiple design alternatives in parallel                |
| - Narrow options as information emerges                           |
| - Delay irreversible decisions                                    |
| Example: Design three growing rack layouts, build mockups, test   |
| with growers, select best                                         |
| Agile connection: Options-based thinking, rapid prototyping       |
+-------------------------------------------------------------------+

TECHNIQUE 4: INTEGRATED PROJECT DELIVERY (IPD)
+-------------------------------------------------------------------+
| - Contractual model aligning all parties (owner, designer,        |
|   contractor, key trades)                                         |
| - Shared risk/reward                                              |
| - Collaborative decision-making                                   |
| - Early involvement of all parties                                |
| Agile connection: Cross-functional teams, collaboration over      |
| contracts                                                         |
+-------------------------------------------------------------------+

TECHNIQUE 5: DESIGN SPRINTS FOR KEY DECISIONS
+-------------------------------------------------------------------+
| - Time-boxed collaborative sessions (2-5 days)                    |
| - Prototype, test, decide quickly                                 |
| Example: 3-day sprint to finalize growing rack configuration      |
|   Day 1: Review requirements, brainstorm options                  |
|   Day 2: Build full-scale mockup of top 2 options                 |
|   Day 3: Test with growers, select winner, document decision      |
| Agile connection: Sprint format, rapid iteration                  |
+-------------------------------------------------------------------+
```

---

## 6. Metrics for Agile/Hybrid Projects

### Tracking Progress in Hybrid Projects

```
HYBRID PROJECT METRICS DASHBOARD
+===================================================================+
| TRADITIONAL METRICS (Waterfall Components)                        |
+-------------------------------------------------------------------+
| - Schedule Performance Index (SPI): 0.98                          |
| - Cost Performance Index (CPI): 1.02                              |
| - Milestones on-time: 92%                                         |
| - Budget variance: -1.5%                                          |
+-------------------------------------------------------------------+
| AGILE METRICS (Iterative Components)                              |
+-------------------------------------------------------------------+
| - Velocity: 45 story points/sprint (trending up)                  |
| - Sprint burndown: On track                                       |
| - Product backlog health: 3 sprints ready                         |
| - Stakeholder satisfaction: 8.5/10                                |
| - Working features delivered: 85% of planned                      |
+-------------------------------------------------------------------+
| LEAN CONSTRUCTION METRICS (If Using)                              |
+-------------------------------------------------------------------+
| - Percent Plan Complete (PPC): 87% (target >80%)                  |
| - Reasons for non-completion: Weather (40%), RFI delays (35%),    |
|   Material delays (25%)                                           |
| - Constraint removal rate: 92%                                    |
+-------------------------------------------------------------------+
| INTEGRATED HEALTH INDICATORS                                      |
+-------------------------------------------------------------------+
| - Team morale: 8/10 (monthly pulse survey)                        |
| - Collaboration index: High (cross-team communication frequency)  |
| - Issue resolution time: 2.3 days average                         |
| - Change request cycle time: 5 days (down from 12)                |
+===================================================================+
```

---

## Key Takeaways

1. **Agile and waterfall are not mutually exclusive** - Hybrid approaches leverage strengths of both.

2. **CEA projects benefit from flexibility** - Technology evolves, user needs emerge, agile helps adapt.

3. **Use the right tool for the job** - Building: waterfall. R&D: agile. Most CEA: hybrid.

4. **Agile practices enhance traditional PM** - Daily stand-ups, visual management, retrospectives add value.

5. **Changing requirements are not failures** - They're opportunities to optimize when managed well.

6. **Integration requires intentionality** - Agile and construction can coexist with proper interfaces.

7. **Culture matters** - Agile requires trust, transparency, and willingness to adapt.

---

## Course Conclusion

Congratulations on completing **Course 413: CEA Project Management**!

You have gained comprehensive knowledge and practical skills across:
- Project initiation, planning, and control
- Stakeholder, scope, schedule, cost, and risk management
- Quality, procurement, and vendor management
- Construction management and commissioning
- Post-project evaluation and continuous improvement
- Agile and hybrid methodologies

**Next Steps:**
1. Apply these concepts to real projects
2. Pursue PMP or CAPM certification
3. Join professional PM communities (PMI, CMAA)
4. Continue learning through practice and reflection
5. Share your knowledge with others

**Remember:** Great project managers are made, not born. Continue developing your skills through deliberate practice, learning from both successes and failures, and always putting people first.

Thank you for your commitment to excellence in CEA project management!

---

*Module 14 of 14 - CEA Project Management - Course Complete*
