# Cheatsheet: Risk Assessment Matrix

## Quick Reference Guide for CEA Project Risk Management

### Probability-Impact Matrix

```
RISK ASSESSMENT MATRIX
+===================================================================+
|                                                                   |
| PROBABILITY    IMPACT (Cost, Schedule, or Technical Performance)  |
|             Very Low   Low    Medium    High   Very High          |
|             (<$100K)  ($100K- ($500K-  ($1.5M- (>$3M)             |
|             (<1 wk)   $500K)  $1.5M)   $3M)    (>8 wks)           |
|                                                                   |
| VERY HIGH   |    5    |   10  |   15   |   20  |    25   |        |
| (>70%)      | 🟡 MED  | 🟡 MED| 🟠 HIGH| 🔴 V.H| 🔴 V.HIGH|        |
|             +---------+-------+--------+-------+---------+        |
| HIGH        |    4    |    8  |   12   |   16  |    20   |        |
| (50-70%)    | 🟢 LOW  | 🟡 MED| 🟠 HIGH| 🟠 HIGH|🔴 V.HIGH|        |
|             +---------+-------+--------+-------+---------+        |
| MEDIUM      |    3    |    6  |    9   |   12  |    15   |        |
| (30-50%)    | 🟢 LOW  | 🟡 MED| 🟡 MED | 🟠 HIGH| 🟠 HIGH |        |
|             +---------+-------+--------+-------+---------+        |
| LOW         |    2    |    4  |    6   |    8  |    10   |        |
| (10-30%)    | 🟢 LOW  | 🟢 LOW| 🟡 MED | 🟡 MED | 🟠 HIGH |        |
|             +---------+-------+--------+-------+---------+        |
| VERY LOW    |    1    |    2  |    3   |    4  |     5   |        |
| (<10%)      | 🟢 LOW  | 🟢 LOW| 🟢 LOW | 🟡 MED | 🟡 MED  |        |
|             +---------+-------+--------+-------+---------+        |
|                                                                   |
+===================================================================+

RISK RATING SCALE:
🔴 20-25: VERY HIGH - Immediate action required, escalate to sponsor
🟠 12-19: HIGH - Develop detailed mitigation plan, active management
🟡 5-11: MEDIUM - Monitor closely, mitigation plan recommended
🟢 1-4: LOW - Monitor periodically, accept or minimal mitigation
```

### Common CEA Project Risks (Pre-Populated Checklist)

**TECHNICAL RISKS:**
- [ ] HVAC system undersized for actual heat load
- [ ] LED fixtures underperform or fail prematurely
- [ ] Automation system integration failures
- [ ] Growing system design inadequate for crop requirements
- [ ] Water quality or treatment system issues
- [ ] Structural inadequate for equipment loads

**SCHEDULE RISKS:**
- [ ] Permitting delays (unfamiliar regulators)
- [ ] Long-lead equipment delivery delays (chillers, LEDs)
- [ ] Weather delays during construction
- [ ] Labor shortages (specialized trades)
- [ ] Design changes mid-construction
- [ ] Utility connection delays

**COST RISKS:**
- [ ] Cost escalation (materials, labor)
- [ ] Scope creep and change orders
- [ ] Unforeseen site conditions
- [ ] Currency fluctuation (international equipment)
- [ ] Productivity lower than estimated
- [ ] Extended commissioning period

**MARKET/BUSINESS RISKS:**
- [ ] Demand lower than projected
- [ ] Product pricing compression
- [ ] New competition enters market
- [ ] Customer contract cancellations
- [ ] Energy costs higher than modeled

**REGULATORY/EXTERNAL RISKS:**
- [ ] Code changes during project
- [ ] Permit denial or onerous conditions
- [ ] Community opposition
- [ ] Utility capacity insufficient
- [ ] Natural disaster or extreme weather

### Risk Response Strategies (The 4 T's)

```
┌──────────────────────────────────────────────────────────┐
│ THREAT RISKS (Negative)                                  │
├──────────────────────────────────────────────────────────┤
│ AVOID - Eliminate the threat entirely                    │
│ Example: Use proven technology instead of cutting-edge   │
│ When: High risk, viable alternative exists               │
│                                                          │
│ TRANSFER - Shift risk to third party                     │
│ Example: Performance bond, insurance, guarantees         │
│ When: Can't eliminate, but can shift impact              │
│                                                          │
│ MITIGATE - Reduce probability or impact                  │
│ Example: Add safety factor to design, order early        │
│ When: Can reduce to acceptable level cost-effectively    │
│                                                          │
│ ACCEPT - Acknowledge, plan for it                        │
│ Example: Allocate contingency, develop backup plan       │
│ When: Low risk, or mitigation not cost-effective         │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│ OPPORTUNITY RISKS (Positive)                             │
├──────────────────────────────────────────────────────────┤
│ EXPLOIT - Ensure opportunity occurs                      │
│ Example: Assign best team to maximize quality            │
│                                                          │
│ ENHANCE - Increase probability or impact                 │
│ Example: Offer incentive for early completion            │
│                                                          │
│ SHARE - Partner to maximize benefit                      │
│ Example: Joint venture to spread investment              │
│                                                          │
│ ACCEPT - Take advantage if it occurs                     │
│ Example: Don't lock pricing if market might drop         │
└──────────────────────────────────────────────────────────┘
```

### Risk Register Template (One-Page Format)

```
PROJECT: _________________ DATE: _________

┌───┬──────────────┬────┬────────┬──────┬────────┬─────────────┐
│ID │ RISK         │Prob│ Impact │Score │Response│ Owner       │
├───┼──────────────┼────┼────────┼──────┼────────┼─────────────┤
│R01│Chiller delay │ H  │   H    │ 16🟠 │Mitigate│Procurement  │
│   │8+ weeks      │60% │ $1.2M  │      │Order   │Manager      │
│   │              │    │ 6 wks  │      │early   │             │
├───┼──────────────┼────┼────────┼──────┼────────┼─────────────┤
│R02│HVAC under-   │ M  │   VH   │ 20🔴 │Mitigate│Design Eng.  │
│   │sized         │40% │ $2.5M  │      │Add 25% │             │
│   │              │    │ 12 wks │      │capacity│             │
├───┼──────────────┼────┼────────┼──────┼────────┼─────────────┤
│R03│Permit delay  │ M  │   H    │  9🟡 │Mitigate│PM           │
│   │>6 months     │30% │ $800K  │      │Pre-app │             │
│   │              │    │ 8 wks  │      │meeting │             │
├───┼──────────────┼────┼────────┼──────┼────────┼─────────────┤
│R04│              │    │        │      │        │             │
├───┼──────────────┼────┼────────┼──────┼────────┼─────────────┤
│R05│              │    │        │      │        │             │
└───┴──────────────┴────┴────────┴──────┴────────┴─────────────┘

Probability: VL<10% L:10-30% M:30-50% H:50-70% VH>70%
Impact: VL<$100K L:$100-500K M:$500K-1.5M H:$1.5-3M VH>$3M
```

### Quick Decision Tree

```
RISK IDENTIFIED
      ↓
Is probability >50% OR impact >$1M?
      ↓              ↓
     YES            NO
      ↓              ↓
Can we avoid it?   Monitor
      ↓
     YES → Avoid (change plan)
     NO
      ↓
Can we transfer it?
      ↓
     YES → Transfer (insurance, contract)
     NO
      ↓
Can we mitigate cost-effectively?
      ↓
     YES → Mitigate (reduce P or I)
     NO
      ↓
Accept & allocate contingency
```

### Contingency Allocation Guide

| Risk Rating | Contingency Allocation |
|-------------|------------------------|
| 🔴 Very High (20-25) | 15-20% of affected cost |
| 🟠 High (12-19) | 10-15% of affected cost |
| 🟡 Medium (5-11) | 5-10% of affected cost |
| 🟢 Low (1-4) | 0-5% of affected cost |

**Total Project Contingency:** 10-20% of base cost typical for CEA

### Risk Monitoring Triggers

**Review Frequency:**
- 🔴 Very High: Weekly review, daily monitoring
- 🟠 High: Weekly review
- 🟡 Medium: Bi-weekly review
- 🟢 Low: Monthly review

**Escalation Triggers:**
- Risk probability increases >20%
- Risk impact increases >50%
- Risk moves from Medium to High or High to Very High
- Mitigation actions fail or delayed
- New risks identified >High rating

### Monte Carlo Simulation Quick Guide

**When to Use:**
- Project budget >$10M
- High uncertainty in multiple cost/schedule elements
- Need confidence intervals for decisions (P50, P75, P90)
- Significant risks identified

**Basic Steps:**
1. Identify variable cost/schedule elements (5-15 key items)
2. Define probability distributions (triangular common)
3. Run simulation (10,000 iterations minimum)
4. Analyze results (mean, P-values, sensitivities)
5. Make decisions based on acceptable confidence level

**Software:**
- @RISK (Excel add-in)
- Crystal Ball (Oracle)
- Primavera Risk Analysis
- Python (for advanced users)

---

## Pocket Reference Card

```
┌─────────────────────────────────────────────────┐
│   CEA PROJECT RISK MANAGEMENT POCKET GUIDE      │
├─────────────────────────────────────────────────┤
│ TOP 5 CEA PROJECT RISKS (Manage These First)   │
│                                                 │
│ 1. HVAC CAPACITY - Mitigate: Add 20-25% buffer │
│ 2. EQUIPMENT DELAYS - Mitigate: Order early    │
│ 3. PERMIT DELAYS - Mitigate: Early engagement  │
│ 4. COST ESCALATION - Monitor: Market tracking  │
│ 5. SCOPE CREEP - Control: Formal change process│
│                                                 │
│ RISK REVIEW SCHEDULE:                           │
│ □ Weekly: Review top 5 risks + new risks       │
│ □ Monthly: Full risk register review           │
│ □ Quarterly: Risk reassessment with team       │
│                                                 │
│ CONTINGENCY MANAGEMENT:                         │
│ □ Total: 10-20% of base cost                   │
│ □ Track drawdown monthly                       │
│ □ Require approval for >10% of contingency     │
│ □ Replenish from savings where possible        │
│                                                 │
│ REMEMBER:                                       │
│ • All projects have risks - identify early      │
│ • Proactive > Reactive                          │
│ • Risk management is continuous, not one-time   │
│ • Document everything (lessons learned)         │
└─────────────────────────────────────────────────┘
```

---

*For detailed risk management training, see Module 8*
