# Course 301: Advanced System Design & Engineering
## Assignment 03: P&ID Development Workshop

---

## Assignment Overview

| **Attribute** | **Details** |
|---------------|-------------|
| **Assignment Type** | In-Class Activity |
| **Duration** | 30-45 minutes |
| **Points** | 30 points |
| **Completed During** | Module 9: Plumbing Detailed Design |
| **Submission** | Submit completed P&ID before leaving class |

---

## Learning Objectives

By completing this assignment, you will:
1. Create a professional Process & Instrumentation Diagram (P&ID)
2. Apply industry-standard symbols correctly
3. Show all major system flows and connections
4. Integrate instrumentation and control points
5. Communicate system design effectively through drawings

---

## Scenario

You will create a P&ID for a small-scale commercial aquaponics system with the following components:

### System Components

**Fish Production:**
- 1 × Fish tank (500 gallons)
- 1 × Mechanical filter (drum or clarifier)
- 1 × Biofilter (moving bed or media-based)

**Plant Production:**
- 2 × Deep water culture (DWC) grow beds (200 gallons each)
- 1 × Sump tank (200 gallons)

**Equipment:**
- 1 × Main circulation pump
- 1 × Return pump (sump to fish tank)
- 1 × Air blower for fish tank and biofilter
- 1 × Heater in sump

**Instrumentation:**
- Temperature sensors (fish tank, sump)
- Water level sensors (fish tank, sump)
- Pressure gauge (pump outlet)
- Flow meter (main circulation line)

---

## Part 1: System Flow Diagram (12 points)

### Requirements:

1. **Draw all major tanks/vessels** as rectangles with labels and volumes
2. **Show all piping connections** with arrows indicating flow direction
3. **Include all pumps** with standard pump symbols
4. **Label flow rates** on major lines (estimate if needed)
5. **Show pipe sizes** on main circulation lines

### Flow Path Requirements:

Your P&ID must show:
- Main circulation: Fish tank → Mechanical filter → Biofilter → Grow beds → Sump → Fish tank
- Aeration lines to fish tank and biofilter
- Drain/overflow lines
- Makeup water connection

### Standard Symbols to Use:

```
Tank/Vessel:     ┌────────┐
                 │        │
                 │  TANK  │
                 └────────┘

Pump:            →⊕→  or  ─⊗─

Valve:           ─▶◀─  (gate)  or  ╫  (ball)

Flow direction:  ───────►

Flow meter:      ─⊂⊃─  or  ─⊕─

Sensor:          ─●─

Heater:          ─╫╫╫─  or  [H]
```

---

## Part 2: Instrumentation Integration (8 points)

### Add the following instrumentation to your P&ID:

#### Temperature Measurement
- **TT-01:** Temperature transmitter on fish tank
- **TT-02:** Temperature transmitter on sump
- **TC-01:** Temperature controller for heater

#### Level Measurement
- **LT-01:** Level transmitter on fish tank (high level alarm)
- **LT-02:** Level transmitter on sump (low level alarm)

#### Flow and Pressure
- **FT-01:** Flow transmitter on main circulation line
- **PI-01:** Pressure indicator after main pump

### Labeling Convention:
```
First Letter = Measurement type (T=Temperature, L=Level, F=Flow, P=Pressure)
Second Letter = Function (T=Transmitter, I=Indicator, C=Controller)
Number = Sequential (01, 02, etc.)
```

---

## Part 3: Annotations and Details (10 points)

### Required Annotations:

1. **Equipment List Table** (include on drawing)
```
Tag     | Description              | Specifications
--------|--------------------------|------------------
FT-01   | Fish Tank               | 500 gal, HDPE
MF-01   | Mechanical Filter       | 100 micron
BF-01   | Biofilter               | MBBR, 200 gal
GB-01   | DWC Grow Bed #1         | 200 gal
GB-02   | DWC Grow Bed #2         | 200 gal
ST-01   | Sump Tank               | 200 gal
P-01    | Main Circulation Pump   | 100 GPM, 15 ft TDH
P-02    | Return Pump             | 50 GPM, 10 ft TDH
AB-01   | Air Blower              | 60 CFM
H-01    | Immersion Heater        | 2 kW, 240V
```

2. **Flow Rates** on major lines:
   - Main circulation: _____ GPM
   - Return to fish tank: _____ GPM
   - Aeration: _____ CFM

3. **Pipe Sizes** for all major runs:
   - Main circulation: _____ inches
   - Return lines: _____ inches
   - Drains: _____ inches

4. **Design Conditions:**
   - Operating temperature: 75-80°F
   - Target pH: 6.8-7.2
   - Flow turnover rate: 2× per hour

---

## Submission Requirements

### Format:
- **Hand-drawn** (neat, professional quality) OR **CAD software** (if you prefer)
- **Minimum size:** 11" × 17" preferred, 8.5" × 11" acceptable
- **Clear labels:** All components must be legible
- **Professional appearance:** Use straight edges, clean lines

### Must Include:
1. Title block with your name, date, and drawing title
2. All components from Parts 1-3
3. Flow direction arrows
4. Instrumentation with proper tags
5. Equipment list table
6. Legend of symbols used (if space permits)

---

## Grading Rubric

| Criteria | Excellent (26-30) | Proficient (21-25) | Developing (15-20) | Needs Improvement (0-14) |
|----------|-------------------|-------------------|------------------|------------------------|
| **Component Identification** | All components correctly placed | 1-2 components missing | 3-4 issues | Many components missing |
| **Flow Direction** | All flows correctly indicated | 1-2 flow errors | Multiple flow errors | Incorrect flow logic |
| **Symbols & Standards** | Industry standard symbols | Minor symbol issues | Several non-standard | Incorrect symbols |
| **Instrumentation** | All instruments properly tagged | Some tags missing | Incomplete | Poor integration |
| **Clarity & Organization** | Professional, easy to follow | Generally clear | Somewhat confusing | Difficult to interpret |

### Point Breakdown:
- System flow diagram: 12 points
- Instrumentation integration: 8 points
- Annotations and details: 10 points

---

## Tips for Success

1. **Start with a rough sketch** in pencil before final drawing
2. **Use standard symbols** - don't invent your own
3. **Keep it organized** - components should be arranged logically
4. **Flow left to right or top to bottom** when possible
5. **Don't overcrowd** - leave white space for clarity
6. **Label everything** - if it's on the drawing, it needs a label
7. **Check your work** - trace the flow path to verify completeness

---

## Common Mistakes to Avoid

- Forgetting to show flow direction arrows
- Missing overflow/drain lines
- Incorrect piping connections
- Unlabeled components
- Inconsistent symbols
- Missing instrumentation tags
- No equipment list
- Illegible handwriting or poor line quality

---

## P&ID Best Practices

### Industry Standards:
- Use ISA (Instrument Society of America) symbols
- Maintain consistent line weights (thick for main process, thin for instrumentation)
- Group similar equipment
- Show control logic with dashed lines
- Include revision box for updates

### Information Hierarchy:
1. **Primary process flow** (most prominent)
2. **Major equipment** (clearly identified)
3. **Instrumentation** (consistent tagging)
4. **Support systems** (utilities, drains)
5. **Annotations** (flow rates, sizes, conditions)

---

## Real-World Application

Professional P&IDs are used for:
- **Construction:** Contractors build from these drawings
- **Operations:** Operators understand system function
- **Maintenance:** Technicians locate components
- **Troubleshooting:** Engineers diagnose problems
- **Modifications:** Changes are planned and documented
- **Training:** New staff learn the system

**Quality matters:** A well-executed P&ID can prevent costly construction errors, improve system operation, and serve as a valuable reference for years.

---

## Advanced Challenge (Optional)

If you finish early, consider adding:

1. **Backup systems:** Show backup pump with isolation valves
2. **Drain system:** Complete drainage paths for maintenance
3. **Control logic:** Simple control loops (dashed lines connecting sensors to actuators)
4. **Utility connections:** Incoming water, electrical power
5. **Safety features:** Emergency shutoffs, alarms

---

## Reference Resources

### Provided in Class:
- Symbol library handout
- Example P&ID from similar system
- Equipment tag numbering guide
- ISA symbol standards reference

### Key Symbols Quick Reference:

```
Process Lines:
─────────    Main process (thick line)
─ ─ ─ ─ ─    Instrument/signal (thin dashed)
━━━━━━━━━    Existing equipment (double line)

Equipment:
⊕ or ⊗       Pump/compressor
─▶◀─         Valve
┌─────┐
│     │      Tank/vessel
└─────┘
─⊂⊃─         Inline instrument

Control:
●            Instrument on main line
◐            Instrument on panel
□            Controller
```

---

## Time Management

Suggested time allocation for 30-45 minute assignment:

- 5 minutes: Review requirements and plan layout
- 15 minutes: Draw main process flow and equipment
- 10 minutes: Add instrumentation and labels
- 5 minutes: Create equipment list and annotations
- 5 minutes: Review and polish

---

*EcoFusion Academy - Course 301, Assignment 03*
