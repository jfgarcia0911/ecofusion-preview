# Module 8: Risk Identification & Quantitative Analysis

## Learning Objectives

By the end of this module, you will be able to:
- Identify risks systematically using multiple techniques
- Assess risks qualitatively using probability/impact matrices
- Perform quantitative risk analysis using Monte Carlo simulation
- Develop risk response strategies (avoid, transfer, mitigate, accept)
- Create and maintain effective risk registers
- Monitor and control risks throughout project lifecycle

---

## 1. Risk Identification Techniques

### Risk Categories for CEA Projects

```
CEA PROJECT RISK BREAKDOWN STRUCTURE (RBS)
+===================================================================+
|                                                                   |
| 1.0 TECHNICAL RISKS                                               |
|     1.1 Design Risks                                              |
|         - Inadequate HVAC capacity                                |
|         - Lighting system performance                             |
|         - Integration complexity                                  |
|     1.2 Technology Risks                                          |
|         - Unproven equipment                                      |
|         - Automation system failures                              |
|         - Software bugs/compatibility                             |
|     1.3 Performance Risks                                         |
|         - Production capacity shortfall                           |
|         - Energy consumption above model                          |
|         - Crop quality issues                                     |
|                                                                   |
| 2.0 PROJECT MANAGEMENT RISKS                                      |
|     2.1 Schedule Risks                                            |
|         - Permitting delays                                       |
|         - Long-lead equipment delays                              |
|         - Weather delays                                          |
|     2.2 Cost Risks                                                |
|         - Cost escalation                                         |
|         - Scope creep                                             |
|         - Unforeseen conditions                                   |
|     2.3 Resource Risks                                            |
|         - Labor shortages                                         |
|         - Key personnel turnover                                  |
|         - Subcontractor failure                                   |
|                                                                   |
| 3.0 ORGANIZATIONAL RISKS                                          |
|     3.1 Funding Risks                                             |
|         - Financing delays                                        |
|         - Cash flow shortfall                                     |
|         - Investor withdrawal                                     |
|     3.2 Governance Risks                                          |
|         - Decision-making delays                                  |
|         - Stakeholder conflicts                                   |
|         - Organizational restructuring                            |
|                                                                   |
| 4.0 EXTERNAL RISKS                                                |
|     4.1 Market Risks                                              |
|         - Demand lower than projected                             |
|         - Price compression                                       |
|         - New competition                                         |
|     4.2 Regulatory Risks                                          |
|         - Code changes mid-project                                |
|         - Permit denial/conditions                                |
|         - Food safety requirements                                |
|     4.3 Environmental Risks                                       |
|         - Natural disasters                                       |
|         - Extreme weather                                         |
|         - Utility outages                                         |
|                                                                   |
| 5.0 OPERATIONAL RISKS                                             |
|     5.1 Commissioning Risks                                       |
|         - System integration failures                             |
|         - Performance shortfalls                                  |
|         - Extended startup period                                 |
|     5.2 Handover Risks                                            |
|         - Inadequate training                                     |
|         - Documentation gaps                                      |
|         - Warranty exclusions                                     |
|                                                                   |
+===================================================================+
```

### Risk Identification Techniques

**1. Brainstorming Sessions**
```
STRUCTURED BRAINSTORMING PROCESS
+-------------------------------------------------------------------+
| STEP 1: Assemble diverse team (8-12 people)                       |
| - Project manager, designers, contractors, operators              |
| - Include subject matter experts                                  |
|                                                                   |
| STEP 2: Present project scope and context                         |
| - Review WBS, schedule, budget                                    |
| - Highlight unique/complex elements                               |
|                                                                   |
| STEP 3: Generate risks (divergent phase - no criticism)           |
| - Use RBS categories as prompts                                   |
| - Capture all ideas (quantity over quality)                       |
| - Build on others' contributions                                  |
| - 30-45 minutes                                                   |
|                                                                   |
| STEP 4: Consolidate and clarify (convergent phase)                |
| - Group similar risks                                             |
| - Clarify vague risks                                             |
| - Eliminate duplicates                                            |
| - 15-20 minutes                                                   |
|                                                                   |
| STEP 5: Initial assessment                                        |
| - Quick rating of probability and impact                          |
| - Identify top 10-15 for detailed analysis                        |
|                                                                   |
| TYPICAL OUTPUT: 50-100 risks identified                           |
+-------------------------------------------------------------------+
```

**2. Delphi Technique**
- Anonymous expert surveys
- Multiple rounds to reach consensus
- Minimizes bias and groupthink
- Good for estimating risk probabilities

**3. SWOT Analysis**
```
SWOT ANALYSIS FOR RISK IDENTIFICATION
+-------------------------------------------------------------------+
| STRENGTHS (Internal Positive)  | WEAKNESSES (Internal Negative)  |
| - How can they fail us?        | - How will they cause problems? |
| - What risks if we lose them?  | - What risks do they create?    |
+--------------------------------+---------------------------------+
| Example:                       | Example:                        |
| - Experienced team             | - Limited CEA project history   |
|   Risk: Key person leaves      |   Risk: Underestimate complexity|
| - Strong financial backing     | - Tight timeline                |
|   Risk: Complacency on costs   |   Risk: Schedule pressure       |
+--------------------------------+---------------------------------+
| OPPORTUNITIES (External +)     | THREATS (External Negative)     |
| - What could prevent capture?  | - How likely? How bad?          |
+--------------------------------+---------------------------------+
| Example:                       | Example:                        |
| - Growing market demand        | - Regulatory uncertainty        |
|   Risk: Delay misses window    |   Risk: New permit requirements |
| - Technology cost declining    | - Skilled labor shortage        |
|   Risk: Wait too long?         |   Risk: Can't find electricians |
+-------------------------------------------------------------------+
```

**4. Checklist Analysis**
- Use lessons learned from past projects
- Industry-specific risk checklists
- Regulatory compliance checklists

**5. Root Cause Analysis**
- Identify underlying causes, not just symptoms
- "5 Whys" technique
- Fishbone (Ishikawa) diagrams

---

## 2. Qualitative Risk Assessment

### Probability and Impact Matrix

```
PROBABILITY-IMPACT MATRIX
+===================================================================+
|                                                                   |
| PROBABILITY        IMPACT (Cost, Schedule, or Performance)        |
|                 Very Low  Low    Medium   High   Very High        |
|                 (<$100K)  ($100-  ($500K-  ($1.5- (>$3M)          |
|                 (<1 wk)   $500K)  $1.5M)   $3M)   (>8 wks)        |
|                                                                   |
| VERY HIGH       |   🟡   |   🟡   |  🟠   |  🔴  |   🔴   |         |
| (>70%)          | Medium | Medium |  High | V.High| V.High |         |
|                 +--------+--------+-------+------+--------+         |
| HIGH            |   🟢   |   🟡   |  🟡   |  🟠  |   🔴   |         |
| (50-70%)        |   Low  | Medium | Medium|  High| V.High |         |
|                 +--------+--------+-------+------+--------+         |
| MEDIUM          |   🟢   |   🟡   |  🟡   |  🟠  |   🟠   |         |
| (30-50%)        |   Low  | Medium | Medium|  High|  High  |         |
|                 +--------+--------+-------+------+--------+         |
| LOW             |   🟢   |   🟢   |  🟡   |  🟡  |   🟠   |         |
| (10-30%)        |   Low  |   Low  | Medium| Medium|  High  |         |
|                 +--------+--------+-------+------+--------+         |
| VERY LOW        |   🟢   |   🟢   |  🟢   |  🟡  |   🟡   |         |
| (<10%)          |   Low  |   Low  |   Low | Medium| Medium |         |
|                 +--------+--------+-------+------+--------+         |
|                                                                   |
+===================================================================+

RISK RATING SCALE:
🔴 Very High (15-25): Immediate action required, escalate to sponsor
🟠 High (10-14): Develop detailed mitigation plan, active management
🟡 Medium (5-9): Monitor closely, mitigation plan recommended
🟢 Low (1-4): Monitor periodically, accept or minimal mitigation
```

### Risk Register Structure

```
RISK REGISTER - GREENLEAF VERTICAL FARM PROJECT
+====================================================================================+
| Risk | Category    | Description       | Prob. | Impact | Rating | Owner        |
| ID   |             |                   |       |        |        |              |
+======+=============+===================+=======+========+========+==============+
| R001 | Technical   | HVAC system under-| Medium| V.High | 🔴 20  | Design Eng.  |
|      | Design      | sized for heat    | 40%   | $2.5M  |        |              |
|      |             | load, can't main- |       | 12 wks |        |              |
|      |             | tain temp setpoint|       |        |        |              |
+------+-------------+-------------------+-------+--------+--------+--------------+
| R008 | Schedule    | Chiller delivery  | High  | High   | 🟠 12  | Procurement  |
|      | Procurement | delayed beyond    | 60%   | $1.2M  |        | Manager      |
|      |             | 24-week lead time |       | 6 wks  |        |              |
+------+-------------+-------------------+-------+--------+--------+--------------+
| R015 | Regulatory  | Permitting process| Medium| High   | 🟡 9   | PM           |
|      | Permitting  | takes >6 months   | 30%   | $800K  |        |              |
|      |             | (vs 4 month plan) |       | 8 wks  |        |              |
+------+-------------+-------------------+-------+--------+--------+--------------+
| R023 | Market      | Customer demand   | Low   | V.High | 🟡 8   | Sales Dir.   |
|      | Demand      | 25% below         | 20%   | $5M NPV|        |              |
|      |             | projections       |       |        |        |              |
+------+-------------+-------------------+-------+--------+--------+--------------+
| R031 | Resources   | Skilled HVAC      | High  | Medium | 🟡 8   | Const. Mgr   |
|      | Labor       | technicians not   | 50%   | $400K  |        |              |
|      |             | available locally |       | 3 wks  |        |              |
+====================================================================================+

RISK REGISTER DETAILS (Example - R001):
+-------------------------------------------------------------------+
| RISK ID: R001                                                     |
| RISK TITLE: HVAC System Undersized for Heat Load                  |
| CATEGORY: Technical - Design                                      |
| IDENTIFIED BY: Commissioning Agent (design review)                |
| DATE IDENTIFIED: February 10, 2025                                |
+-------------------------------------------------------------------+
| DESCRIPTION:                                                      |
| Preliminary heat load calculations may underestimate actual       |
| cooling requirements from LED lighting systems. If actual heat    |
| gain is 20%+ higher than design, HVAC system will be unable to    |
| maintain temperature setpoints, especially during summer.         |
+-------------------------------------------------------------------+
| PROBABILITY: 40% (Medium)                                         |
| RATIONALE: New LED fixture model with limited field data. Vendor  |
| heat output specs may be optimistic. Similar projects experienced |
| 10-15% higher heat loads than expected.                           |
+-------------------------------------------------------------------+
| IMPACT: Very High                                                 |
| COST: $2.5M (chiller upgrade + installation modifications)        |
| SCHEDULE: 12 weeks (re-engineering, equipment procurement)        |
| PERFORMANCE: Cannot meet production targets if temps too high     |
+-------------------------------------------------------------------+
| ROOT CAUSE:                                                       |
| - LED fixture heat output data based on lab conditions, not field |
| - Conservative design factor (1.15x) may be insufficient          |
| - Lighting controls may not function as modeled                   |
+-------------------------------------------------------------------+
| RESPONSE STRATEGY: MITIGATE                                       |
+-------------------------------------------------------------------+
| RESPONSE ACTIONS:                                                 |
| 1. Conduct detailed heat load analysis with lighting vendor       |
|    (Responsible: Mechanical Engineer, By: March 1, Cost: $8K)     |
| 2. Increase design safety factor to 1.25x                         |
|    (Responsible: Design Team, By: March 15, Cost: $50K addl.)     |
| 3. Include chiller staging for future expansion                   |
|    (Responsible: Mechanical Engineer, By: March 15, Cost: $15K)   |
| 4. Specify chillers with 10% overcapacity option                  |
|    (Responsible: Procurement, By: April 1, Cost: $0 - option)     |
| 5. Measure actual heat load during commissioning                  |
|    (Responsible: Comm. Agent, By: Dec 2026, Cost: included)       |
+-------------------------------------------------------------------+
| RESIDUAL RISK (After Mitigation):                                 |
| PROBABILITY: 15% (Low)                                            |
| IMPACT: Medium ($500K for supplemental cooling if needed)         |
| RATING: 🟡 4 (Acceptable)                                          |
+-------------------------------------------------------------------+
| CONTINGENCY ALLOCATION: $100,000 (from project contingency)       |
+-------------------------------------------------------------------+
| TRIGGER EVENTS (Monitor):                                         |
| - Final lighting fixture selection diverges from preliminary      |
| - Heat load calculations show >10% increase                       |
| - Vendor unable to guarantee heat output specifications           |
+-------------------------------------------------------------------+
| STATUS: ACTIVE - Mitigation in progress                           |
| LAST UPDATED: February 25, 2025                                   |
| NEXT REVIEW: March 15, 2025                                       |
+-------------------------------------------------------------------+
```

---

## 3. Quantitative Risk Analysis

### Monte Carlo Simulation for Cost Risk

```
MONTE CARLO SIMULATION APPROACH
+===================================================================+
|                                                                   |
| STEP 1: Identify Variable Cost Elements                          |
| Select cost categories with significant uncertainty:              |
| - Equipment costs (5-15% variance)                                |
| - Labor productivity (10-25% variance)                            |
| - Material costs (5-20% variance)                                |
| - Contingency events (0-100% of allocated amount)                 |
|                                                                   |
| STEP 2: Define Probability Distributions                          |
| For each variable element, define distribution:                   |
| - Triangular: (Min, Most Likely, Max)                             |
| - Normal: (Mean, Standard Deviation)                              |
| - Uniform: (Min, Max)                                             |
| - Discrete: (Scenarios with probabilities)                        |
|                                                                   |
| STEP 3: Run Simulation                                            |
| - Randomly sample from each distribution                          |
| - Calculate total project cost                                    |
| - Repeat 10,000+ times                                            |
| - Aggregate results                                               |
|                                                                   |
| STEP 4: Analyze Results                                           |
| - Probability distribution of total cost                          |
| - Confidence intervals (P50, P75, P90)                            |
| - Sensitivity analysis (which variables drive risk)               |
|                                                                   |
+===================================================================+

EXAMPLE: GREENLEAF VERTICAL FARM COST RISK MODEL
+-------------------------------------------------------------------+
| Cost Element        | Distribution Type | Parameters            |
+=====================+===================+=======================+
| Base Construction   | Fixed             | $7,500,000            |
| HVAC Equipment      | Triangular        | Min: $5.2M            |
|                     |                   | Most Likely: $6.0M    |
|                     |                   | Max: $6.9M            |
| Lighting Systems    | Triangular        | Min: $5.0M            |
|                     |                   | Most Likely: $5.5M    |
|                     |                   | Max: $6.5M            |
| Labor Productivity  | Normal            | Mean: 1.0 (baseline)  |
|                     |                   | Std Dev: 0.15         |
|                     |                   | Affects: $8M labor    |
| Material Escalation | Triangular        | Min: 0%               |
|                     |                   | Most Likely: 3%       |
|                     |                   | Max: 12%              |
|                     |                   | Affects: $6M materials|
| Weather Delays      | Discrete          | 0 days: 40%           |
|                     |                   | 10 days: 35%          |
|                     |                   | 20 days: 20%          |
|                     |                   | 30 days: 5%           |
|                     |                   | Cost: $15K/day        |
| Permit Delays       | Discrete          | 0 weeks: 60%          |
|                     |                   | 4 weeks: 25%          |
|                     |                   | 8 weeks: 12%          |
|                     |                   | 16 weeks: 3%          |
|                     |                   | Cost: $50K/week       |
+-------------------------------------------------------------------+

SIMULATION RESULTS (10,000 iterations):
+-------------------------------------------------------------------+
| Statistic                    | Value                            |
+==============================+==================================+
| Mean (Expected Value)        | $30,850,000                      |
| Median (P50)                 | $30,600,000                      |
| Standard Deviation           | $1,420,000                       |
|                              |                                  |
| CONFIDENCE INTERVALS:                                            |
| P10 (10% chance under)       | $28,900,000                      |
| P25 (25% chance under)       | $29,800,000                      |
| P50 (50% chance under)       | $30,600,000                      |
| P75 (75% chance under)       | $31,850,000                      |
| P90 (90% chance under)       | $33,200,000                      |
|                              |                                  |
| Probability of exceeding current budget ($30M):  58%             |
| Probability of exceeding $31M: 38%                               |
| Probability of exceeding $32M: 18%                               |
| Probability of exceeding $33M: 9%                                |
+-------------------------------------------------------------------+

SENSITIVITY ANALYSIS (Contribution to Variance):
+-------------------------------------------------------------------+
| Risk Factor              | Contribution to Total Variance     |
+==========================+====================================+
| HVAC Equipment           | 32%  (Largest driver)              |
| Lighting Systems         | 24%                                |
| Labor Productivity       | 18%                                |
| Permit Delays            | 12%                                |
| Material Escalation      | 8%                                 |
| Weather Delays           | 6%                                 |
+-------------------------------------------------------------------+

DECISION SUPPORT:
+-------------------------------------------------------------------+
| CURRENT BUDGET: $30,000,000                                       |
| RECOMMENDED BUDGET (P75 confidence): $31,850,000                  |
|                                                                   |
| RATIONALE:                                                        |
| - 75% confidence of staying under budget                          |
| - Accounts for identified risks                                   |
| - Provides reasonable contingency                                 |
|                                                                   |
| ALTERNATIVE: Keep $30M budget but:                                |
| - Accept 58% probability of overrun                               |
| - Focus mitigation on top 3 drivers (HVAC, Lighting, Labor)       |
| - Have backup funding source identified                           |
+-------------------------------------------------------------------+
```

### Schedule Risk Analysis

```
SCHEDULE MONTE CARLO SIMULATION
+===================================================================+
| Use same approach for schedule uncertainty:                       |
|                                                                   |
| Variable Durations:                                               |
| - Design: 24-28 weeks (triangular)                                |
| - Permitting: 16-24 weeks (triangular)                            |
| - Foundation: 5-8 weeks (weather dependent)                       |
| - Structural: 6-10 weeks (productivity variance)                  |
| - MEP: 12-18 weeks (complexity, integration)                      |
| - Commissioning: 6-10 weeks (performance issues)                  |
|                                                                   |
| Simulation Results:                                               |
| - P50 completion: 106 weeks (vs. 102 baseline)                    |
| - P75 completion: 112 weeks                                       |
| - P90 completion: 118 weeks                                       |
|                                                                   |
| Recommendation: Set deadline at P75 (112 weeks = 26 months)       |
+===================================================================+
```

---

## 4. Risk Response Strategies

### The Four T's of Risk Response

```
RISK RESPONSE STRATEGIES
+===================================================================+
|                                                                   |
| THREATS (Negative Risks):                                         |
|                                                                   |
| 1. AVOID - Eliminate the risk                                     |
|    - Change project plan to bypass risky activity                 |
|    - Example: Use proven technology instead of cutting-edge       |
|    - Effectiveness: 100% (risk eliminated)                        |
|    - Cost: Often high (may limit benefits)                        |
|                                                                   |
| 2. TRANSFER - Shift risk to third party                           |
|    - Insurance, warranties, guarantees, contracts                 |
|    - Example: Performance bond from contractor                    |
|    - Effectiveness: Risk impact transferred (not probability)     |
|    - Cost: Premium/fee for transfer                               |
|                                                                   |
| 3. MITIGATE - Reduce probability or impact                        |
|    - Take action to make risk less likely or less severe          |
|    - Example: Add safety factor to HVAC design                    |
|    - Effectiveness: Partial (reduces to acceptable level)         |
|    - Cost: Incremental cost of mitigation actions                 |
|                                                                   |
| 4. ACCEPT - Acknowledge and budget for risk                       |
|    - Active: Allocate contingency reserve                         |
|    - Passive: Deal with it if it happens                          |
|    - Example: Accept weather delay risk, plan buffer              |
|    - Effectiveness: N/A (accepting consequences)                  |
|    - Cost: Contingency allocation                                 |
|                                                                   |
+-------------------------------------------------------------------+
|                                                                   |
| OPPORTUNITIES (Positive Risks):                                   |
|                                                                   |
| 1. EXPLOIT - Ensure opportunity occurs                            |
|    - Example: Assign best resources to maximize quality           |
|                                                                   |
| 2. ENHANCE - Increase probability or impact                       |
|    - Example: Offer bonus for early completion                    |
|                                                                   |
| 3. SHARE - Partner with others to maximize benefit                |
|    - Example: Joint venture to spread investment                  |
|                                                                   |
| 4. ACCEPT - Take advantage if it occurs                           |
|    - Example: If prices drop, don't lock in early                 |
|                                                                   |
+===================================================================+
```

### Risk Response Plan Examples

```
RISK RESPONSE PLAN - R008: Chiller Delivery Delay
+-------------------------------------------------------------------+
| RISK: Chiller delivery delayed beyond 24-week lead time           |
| PROBABILITY: 60% (High)    IMPACT: $1.2M, 6 weeks (High)          |
| RISK RATING: 🟠 12 (High)                                          |
+-------------------------------------------------------------------+
| PRIMARY STRATEGY: MITIGATE                                        |
|                                                                   |
| Mitigation Actions:                                               |
| 1. ORDER EARLY (Proactive)                                        |
|    - Place order during design phase (vs. after permits)          |
|    - Cost: $0 | Schedule impact: +6 weeks buffer                  |
|    - Effectiveness: Reduces probability to 25%                    |
|                                                                   |
| 2. IDENTIFY BACKUP VENDOR (Preparedness)                          |
|    - Pre-qualify second chiller manufacturer                      |
|    - Obtain budgetary quote and lead time                         |
|    - Cost: $5K engineering | Effectiveness: Enables fast switch   |
|                                                                   |
| 3. NEGOTIATE LIQUIDATED DAMAGES (Transfer)                        |
|    - Include late delivery penalties in contract                  |
|    - $5K/week penalty after 24 weeks                              |
|    - Cost: May increase price 2-3% | Effectiveness: Motivates    |
|      vendor performance, offsets our delay costs                  |
+-------------------------------------------------------------------+
| CONTINGENCY STRATEGY: ACCEPT (Backup plan)                        |
| If delay occurs despite mitigation:                               |
| - Use rental chillers temporarily ($75K/month)                    |
| - Re-sequence work to delay need for cooling (3-4 weeks max)      |
| - Accelerate other activities to compress schedule                |
|                                                                   |
| CONTINGENCY BUDGET: $150,000 allocated                            |
+-------------------------------------------------------------------+
| TRIGGER FOR CONTINGENCY PLAN:                                     |
| - Vendor notifies delay >2 weeks beyond promised date             |
| - Manufacturing issues discovered                                 |
| - Shipping delays reported                                        |
+-------------------------------------------------------------------+
| RESPONSIBILITY:                                                   |
| - Risk Owner: Procurement Manager                                 |
| - Mitigation execution: PM (early order), Procurement (backup)    |
| - Contingency execution: Construction Manager                     |
+-------------------------------------------------------------------+
```

---

## Key Takeaways

1. **Identify risks early and systematically** - Use multiple techniques to ensure comprehensive coverage.

2. **Qualitative analysis prioritizes efforts** - Focus on high-probability, high-impact risks first.

3. **Quantitative analysis supports decisions** - Monte Carlo provides data for budget and schedule confidence.

4. **All risks need owners** - Someone must be accountable for monitoring and response.

5. **Response strategies must be proactive** - Don't wait for risks to materialize.

6. **Risk management is continuous** - Risks evolve throughout project lifecycle.

7. **Contingency must be managed carefully** - It's for identified risks, not poor performance.

---

## Practical Exercise

**Risk Analysis Workshop**

For your project:
1. Conduct brainstorming session (identify 25+ risks)
2. Create risk register with top 15 risks
3. Complete detailed risk response plan for top 3 risks
4. Build simple Monte Carlo model (Excel or @Risk) for cost
5. Present findings and recommendations to stakeholders

---

## Next Module

In **Module 9: Quality Management & Technical Assurance**, we will explore quality planning, inspection and testing protocols, and ensuring technical performance in CEA facilities.

---

*Module 8 of 14 - CEA Project Management*
