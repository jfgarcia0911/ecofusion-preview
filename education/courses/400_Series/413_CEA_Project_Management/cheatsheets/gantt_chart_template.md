# Cheatsheet: Gantt Chart Template for CEA Projects

## Quick Reference Guide

### Basic Gantt Chart Structure

```
CEA FACILITY PROJECT GANTT CHART TEMPLATE
+==================================================================================+
| WBS | Activity                  | Duration | Start  | Finish | Q1 | Q2 | Q3 | Q4 |
+==================================================================================+
| 1.0 | PROJECT INITIATION        |  12 wks  |        |        |    |    |    |    |
| 1.1 | Feasibility Study         |   8 wks  | Week 1 | Week 8 |####|    |    |    |
| 1.2 | Business Case Approval    |   4 wks  | Week 9 | Week12 |    |####|    |    |
+==================================================================================+
| 2.0 | DESIGN & ENGINEERING      |  32 wks  |        |        |    |    |    |    |
| 2.1 | Schematic Design (SD)     |   6 wks  | Week13 | Week18 |    |  ##|##  |    |
| 2.2 | Design Development (DD)   |   8 wks  | Week19 | Week26 |    |    |####|##  |
| 2.3 | Construction Docs (CD)    |  12 wks  | Week27 | Week38 |    |    |    |####|
| 2.4 | Design Reviews            |   6 wks  | Week33 | Week38 |    |    |    |  ##|
+==================================================================================+
| 3.0 | PERMITTING                |  20 wks  |        |        |    |    |    |    |
| 3.1 | Permit Applications       |   2 wks  | Week39 | Week40 |    |    |    |    |
| 3.2 | Plan Review               |  16 wks  | Week41 | Week56 |    |    |    |    |
| 3.3 | Permit Issuance           |   2 wks  | Week57 | Week58 |    |    |    |    |
+==================================================================================+
| 4.0 | PROCUREMENT               |  24 wks  |        |        |    |    |    |    |
| 4.1 | Equipment RFPs            |   4 wks  | Week39 | Week42 |    |    |    |    |
| 4.2 | Vendor Selection          |   4 wks  | Week43 | Week46 |    |    |    |    |
| 4.3 | Chiller Fabrication       |  24 wks  | Week47 | Week70 |    |    |    |    |
| 4.4 | LED Fabrication           |  18 wks  | Week51 | Week68 |    |    |    |    |
+==================================================================================+
| 5.0 | CONSTRUCTION              |  52 wks  |        |        |    |    |    |    |
| 5.1 | Site Preparation          |   4 wks  | Week59 | Week62 |    |    |    |    |
| 5.2 | Foundation                |   6 wks  | Week63 | Week68 |    |    |    |    |
| 5.3 | Structural Frame          |   8 wks  | Week69 | Week76 |    |    |    |    |
| 5.4 | Building Envelope         |  12 wks  | Week77 | Week88 |    |    |    |    |
| 5.5 | MEP Rough-In              |  14 wks  | Week89 | Week102|    |    |    |    |
| 5.6 | Equipment Installation    |  16 wks  | Week103| Week118|    |    |    |    |
+==================================================================================+
| 6.0 | COMMISSIONING             |  10 wks  |        |        |    |    |    |    |
| 6.1 | Pre-Functional Testing    |   3 wks  | Week119| Week121|    |    |    |    |
| 6.2 | Functional Testing (SAT)  |   4 wks  | Week122| Week125|    |    |    |    |
| 6.3 | Integrated Testing        |   3 wks  | Week126| Week128|    |    |    |    |
+==================================================================================+

Legend:
#### = Critical Path Activity
##   = Non-Critical Activity
```

### Key Milestones

| Milestone | Target Week | Description |
|-----------|-------------|-------------|
| M1 | Week 12 | Business Case Approved |
| M2 | Week 38 | Design Complete (100% CD) |
| M3 | Week 58 | Building Permit Issued |
| M4 | Week 70 | Long-Lead Equipment Delivered |
| M5 | Week 88 | Building Envelope Complete |
| M6 | Week 118 | Equipment Installation Complete |
| M7 | Week 128 | Commissioning Complete (Substantial Completion) |

### Creating Your Gantt Chart

**Step 1: List All Activities from WBS**
- Break project into phases/deliverables
- Decompose to appropriate level (2-4 week activities typical)

**Step 2: Estimate Durations**
- Use analogous estimating (past projects)
- Use parametric estimating (productivity rates)
- Use three-point estimating for uncertainty
- Add contingency for risk

**Step 3: Sequence Activities**
- Identify dependencies (FS, SS, FF, SF)
- Add lead/lag as needed
- Note constraints (must-start, must-finish dates)

**Step 4: Assign Resources**
- Identify responsible parties
- Load resources (labor hours, equipment)
- Check for over-allocation

**Step 5: Calculate Critical Path**
- Forward pass (Early Start, Early Finish)
- Backward pass (Late Start, Late Finish)
- Calculate float (LS - ES)
- Identify critical path (zero float)

**Step 6: Optimize**
- Resource leveling (within float)
- Crash critical path if needed
- Fast-track where appropriate
- Review and refine

### Software Tools

**Microsoft Project:**
- Industry standard
- Robust features, resource management
- Steep learning curve

**Primavera P6:**
- Enterprise-level, large projects
- Superior resource management
- Complex, expensive

**SmartSheet:**
- Cloud-based, collaborative
- Easier to learn
- Limited advanced features

**Excel:**
- Simple, accessible
- Manual calculations
- Good for small projects

### Common Mistakes to Avoid

❌ **Too Much Detail:** Don't plan every hour - focus on 2-4 week activities
❌ **No Dependencies:** Activities rarely happen in isolation
❌ **Ignoring Float:** Float is a resource - use it wisely
❌ **Static Schedule:** Update regularly (weekly minimum)
❌ **No Baseline:** Always save baseline before starting
❌ **Optimistic Durations:** Add contingency, account for risks
❌ **No Resource Loading:** Schedule without resources is unrealistic

### Best Practices

✓ **Update Weekly:** Review progress, adjust forecast
✓ **Focus on Critical Path:** This drives completion
✓ **Communicate Visually:** Gantt charts are for communication
✓ **Use Color Coding:** Red (behind), Yellow (at risk), Green (on track)
✓ **Track Milestones:** Flag key decision points
✓ **Document Changes:** Maintain change log
✓ **Share Widely:** Post in project area, website

### CEA-Specific Considerations

**Long-Lead Equipment:**
- Chillers: 20-28 weeks
- LEDs: 16-20 weeks
- Growing systems: 18-24 weeks
- Automation systems: 12-16 weeks

**Permitting Buffers:**
- Add 50% to initial estimate
- Typical: 16-24 weeks for CEA (unfamiliar to many jurisdictions)

**Commissioning:**
- Don't underestimate (6-10 weeks minimum)
- Plan for iterative testing and optimization

**Crop Cycles:**
- First harvest: 4-6 weeks after commissioning starts
- Allow 6-12 months to reach full production

---

**Quick Tips Card (Print & Laminate)**

```
┌─────────────────────────────────────────────┐
│    CEA PROJECT GANTT CHART QUICK TIPS       │
├─────────────────────────────────────────────┤
│ CRITICAL PATH:                              │
│ □ Focus management attention here           │
│ □ Any delay = project delay                 │
│ □ Crash or fast-track if needed             │
│                                             │
│ FLOAT MANAGEMENT:                           │
│ □ Float = schedule contingency              │
│ □ Protect it - once gone, can't get back    │
│ □ Don't let non-critical become critical    │
│                                             │
│ TYPICAL CEA DURATIONS:                      │
│ □ Design: 6-10 months                       │
│ □ Permitting: 4-6 months (add buffer!)      │
│ □ Construction: 12-18 months                │
│ □ Commissioning: 2-3 months                 │
│ □ TOTAL: 24-30 months typical               │
│                                             │
│ UPDATE FREQUENCY:                           │
│ □ Weekly progress updates minimum           │
│ □ Bi-weekly detailed review with team       │
│ □ Monthly baseline comparison               │
│ □ Quarterly rebaseline if major changes     │
└─────────────────────────────────────────────┘
```

---

*For detailed schedule management training, see Module 6*
