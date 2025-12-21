# Module 19: Design Review Process

## Introduction

Design review is a systematic evaluation of engineering design before construction. Peer review catches errors, validates assumptions, and improves designs before costly mistakes are built. This module covers formal design review processes, checklists, and collaboration methods.

**Duration:** 1 hour

---

## Learning Objectives

1. Organize and conduct formal design reviews
2. Apply systematic review checklists
3. Identify and resolve design conflicts
4. Incorporate peer feedback effectively
5. Manage design review documentation
6. Know when to engage external reviewers

---

## 1. Design Review Types

### 1.1 Internal Reviews

**Conceptual Design Review (30% design):**
```
Purpose: Validate approach before detailed design
Attendees: Design team, stakeholders, subject matter experts

Review Focus:
- System configuration appropriate?
- Major equipment selections reasonable?
- Site layout feasible?
- Budget realistic?
- Timeline achievable?
- Regulatory requirements identified?

Deliverables:
- Conceptual drawings
- Preliminary equipment list
- Order-of-magnitude cost estimate
- Project schedule outline

Outcome: Proceed, revise, or abandon
```

**Design Development Review (60% design):**
```
Purpose: Validate detailed design before final documentation

Review Focus:
- All calculations complete and correct?
- Equipment specifications appropriate?
- Drawings coordinated (no conflicts)?
- Materials specified correctly?
- Safety features adequate?
- Maintenance access provided?
- Cost estimate refined?

Deliverables:
- Complete calculations
- Equipment specifications
- Coordinated drawings
- Material specifications
- Refined cost estimate

Outcome: Approve for final design or identify corrections
```

**Final Design Review (100% design):**
```
Purpose: Final check before construction documents issued

Review Focus:
- All previous comments addressed?
- Drawings complete and buildable?
- Specifications clear and complete?
- Cost estimate final?
- Permitting requirements met?
- Procurement strategy defined?

Deliverables:
- Complete construction documents
- Specifications
- Final cost estimate
- Permitting package

Outcome: Approve for construction or hold for corrections
```

---

## 2. Review Checklists

### 2.1 Hydraulic Systems Checklist

```
☐ Flow rates calculated for all circuits?
☐ Pump curves and system curves matched?
☐ Total dynamic head calculations shown?
☐ Pipe sizes appropriate for velocities (3-6 ft/s)?
☐ Pressure ratings adequate for operating pressure + safety?
☐ Valve locations allow isolation for maintenance?
☐ Check valves prevent backflow?
☐ Unions provided for equipment removal?
☐ Drains sized with safety factor (2× minimum)?
☐ Overflows protected against siphon?
☐ All pipes properly supported?
☐ Pipe slopes shown for drainage?
☐ Materials compatible with water chemistry?
☐ Expansion/contraction accounted for?
☐ NPSH available > NPSH required + 3 ft?
```

### 2.2 Electrical Systems Checklist

```
☐ Load calculations complete and documented?
☐ Service size adequate with growth margin?
☐ Circuit breaker sizes match wire ampacity?
☐ Voltage drop <3% on branch circuits?
☐ GFCI protection provided where required?
☐ Equipment grounding shown on all circuits?
☐ Motor starters sized correctly?
☐ Disconnects provided per code?
☐ Emergency stops accessible?
☐ Panels labeled clearly?
☐ Wire types rated for wet locations?
☐ Conduit properly sized?
☐ Backup power for critical loads?
☐ Lightning protection considered?
☐ Arc flash analysis completed (if required)?
```

### 2.3 Structural Systems Checklist

```
☐ Dead loads calculated correctly (water weight)?
☐ Live loads included (maintenance access)?
☐ Load combinations per building code?
☐ Member sizing calculations shown?
☐ Safety factors appropriate (3× minimum for water)?
☐ Beam deflection acceptable (L/240 or L/360)?
☐ Column buckling checked for tall members?
☐ Foundation bearing pressure < soil capacity?
☐ Floor loading < slab rating?
☐ Seismic requirements addressed (if applicable)?
☐ Wind loads calculated (greenhouses)?
☐ Snow loads included (roof design)?
☐ Materials specified correctly?
☐ Connections detailed adequately?
☐ Corrosion protection specified?
```

### 2.4 Biological Systems Checklist

```
☐ Fish stocking density appropriate for species?
☐ Biofilter sized for maximum TAN load + safety factor?
☐ Oxygenation adequate for fish respiration + nitrification?
☐ Water turnover rate meets minimum (1-2× per hour)?
☐ Temperature control maintains species range?
☐ pH control maintains 6.5-7.5 range?
☐ Backup aeration provided for power outage?
☐ Quarantine/hospital tank included?
☐ Solids removal adequate for feeding rate?
☐ UV or ozone specified for pathogen control?
☐ Water quality monitoring comprehensive?
☐ Alarm systems cover critical parameters?
☐ Grow area matches nutrient production?
☐ Lighting intensity/spectrum appropriate for crops?
```

---

## 3. Conflict Resolution

### 3.1 Common Design Conflicts

**Plumbing vs. Electrical:**
```
Problem: Electrical conduit routed through pipe chase
Solution: Coordinate in 3D model, relocate conduit or pipe

Problem: Electrical panel blocks access to plumbing valve
Solution: Relocate panel or valve to maintain clearances
```

**Structural vs. Plumbing:**
```
Problem: Main drain line conflicts with support beam
Solution: Reroute drain or provide beam penetration with reinforcement

Problem: Tank support columns block maintenance access
Solution: Revise column layout or use cantilevered support
```

**HVAC vs. Grow Systems:**
```
Problem: Ductwork shades grow beds
Solution: Relocate ducts to perimeter or use under-bench supply

Problem: Dehumidifier discharge conflicts with grow bed plumbing
Solution: Coordinate drain locations in 3D
```

### 3.2 Resolution Process

```
1. Identify conflict (during coordination review)
2. Assess impact of each option
3. Consult discipline leads
4. Evaluate alternatives:
   - Cost impact
   - Performance impact
   - Schedule impact
   - Constructability
5. Select best solution
6. Document decision and rationale
7. Update all affected drawings
8. Notify team of change
```

---

## 4. Peer Review

### 4.1 Calculation Review

**Independent Check:**
```
Reviewer performs independent calculation:
- Uses same inputs
- May use different method
- Should get same results within 5%

Example: Pump sizing
Designer calculation: 120 GPM @ 32 ft TDH
Reviewer calculation: 118 GPM @ 33 ft TDH
Difference: <5% ✓ Acceptable

If difference >10%: Investigate error

Common errors caught:
- Unit conversions (GPM vs. ft³/s)
- Decimal place errors
- Wrong formula application
- Incorrect chart reading
- Assumption errors
```

### 4.2 Drawing Review

**Systematic Approach:**
```
1. Check titleblock information (project name, date, sheet number)
2. Review drawing index (all sheets referenced)
3. Check general notes (applicable and correct)
4. Review each drawing systematically:
   - Dimensioning complete and clear
   - Details referenced correctly
   - Symbols match legend
   - Call-outs clear
   - Scale appropriate
   - No overlapping lines/text
5. Cross-reference between drawings:
   - Floor plan matches details
   - Elevations match floor plan
   - Sections match elevations
6. Check for buildability:
   - Can contractor interpret?
   - Any missing information?
   - Any ambiguities?
```

---

## 5. External Reviews

### 5.1 When to Engage External Reviewers

**Licensed Professional Engineer (PE):**
```
Required for:
- Buildings >3,600 ft² (varies by jurisdiction)
- Structural modifications
- Public facilities
- Permit applications
- Liability protection

Typical cost: $5,000-50,000 depending on scope
Timeline: 2-6 weeks for review

Process:
1. Engage PE early (conceptual phase)
2. Provide complete design package
3. PE reviews and stamps drawings
4. Address any comments/corrections
5. PE provides final stamped set for permit
```

**Building Department Plan Review:**
```
Required for:
- All commercial construction
- Building permits
- Electrical permits
- Plumbing permits
- Mechanical permits

Submit:
- Complete drawing set
- Calculations (if required)
- Specifications
- Energy compliance forms
- Other jurisdiction-specific forms

Timeline: 2-8 weeks typical
Fees: $500-5,000+ based on project value

Common comments:
- Missing fire suppression (if required)
- Inadequate emergency exits
- Accessibility (ADA) violations
- Energy code compliance
- Structural concerns
```

### 5.2 Third-Party Technical Review

**Value Engineering:**
```
Purpose: Optimize cost without sacrificing performance

Typical savings: 10-20% of construction cost

Common findings:
- Oversized equipment (reduce to actual need)
- Expensive materials where cheaper OK (SS vs. PVC)
- Complex details that can be simplified
- Features that don't add value

Cost: 1-2% of construction cost
ROI: 5:1 to 10:1 typical
```

---

## 6. Review Documentation

### 6.1 Review Comments

**Comment Format:**
```
Drawing: A-101 (Floor Plan)
Item: 1
Location: Grid B-3, main pump room
Discipline: Plumbing
Severity: Major
Comment: Main recirculation pump location blocks access to electrical panel.
         NEC requires 3 ft clearance in front of panel.
Recommendation: Relocate pump 4 ft east or relocate electrical panel.
Reviewer: J. Smith, PE
Date: 2025-05-15

Response: Pump relocated 4 ft east. See revised drawing A-101 Rev. B.
Designer: A. Johnson
Date: 2025-05-20
Status: CLOSED
```

**Severity Levels:**
```
Critical: Safety issue, code violation, system won't work
Major: Significant cost impact, performance impact
Minor: Improvement suggestion, clarification needed
Informational: Note only, no action required
```

### 6.2 Comment Tracking

**Review Log:**
```
Comment# | Drawing | Severity | Status | Assigned | Due Date
---------|---------|----------|--------|----------|----------
001      | A-101   | Major    | Closed | A.J.     | 2025-05-20
002      | P-201   | Minor    | Open   | A.J.     | 2025-05-25
003      | E-301   | Critical | Closed | B.K.     | 2025-05-18
004      | S-401   | Major    | Open   | C.L.     | 2025-05-27

Track all comments to closure
No drawing approved until all critical and major comments addressed
```

---

## Summary

Design review ensures quality and constructability:

1. Conduct reviews at 30%, 60%, and 100% design
2. Use comprehensive checklists for each discipline
3. Identify and resolve conflicts systematically
4. Perform peer review of calculations and drawings
5. Engage external reviewers (PE, plan review) when required
6. Document all comments and track to closure

Thorough design review prevents costly field changes and ensures successful projects.

---

## Check Your Understanding

1. Develop a design review checklist for a biofilter system including sizing, aeration, and performance verification.

2. Create a review comment for this issue: "Pump discharge pipe (3") transitions to 2" header without reducer shown." Include location, severity, and recommendation.

3. Design a review process for a commercial facility requiring PE stamp. Include timeline and deliverables at each stage.

4. Identify three potential conflicts between lighting system and plumbing in a greenhouse. Propose resolution for each.

5. Write a calculation review procedure for hydraulic system TDH calculations. Include acceptance criteria.

6. Create a comment tracking log template with appropriate fields for managing design review.

7. Develop a constructability review checklist focusing on maintenance access requirements.

8. Specify when external PE review is required for your jurisdiction. Include building size thresholds and permit types.

9. Design a drawing coordination review procedure to identify conflicts between disciplines.

10. Create a design review presentation outline for 60% design review meeting. Include key topics and required backup data.

---

**Next Module:** Module 20 - Capstone Design Project
