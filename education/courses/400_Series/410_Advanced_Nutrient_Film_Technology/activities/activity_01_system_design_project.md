# Activity 1: Complete NFT System Design Project

## Objective
Design a complete commercial NFT system based on specific requirements, applying principles from Lessons 1-7. This hands-on activity integrates hydraulic engineering, environmental control, and economic analysis.

## Scenario

**Client:** Urban Greens LLC
**Location:** Denver, Colorado (elevation 1,600m, semi-arid climate)
**Facility:** 300 m² available growing space in climate-controlled warehouse
**Target crop:** Premium butterhead lettuce for local restaurants
**Production goal:** 75,000 plants per year
**Budget:** $120,000 capital investment

---

## Part 1: Production Planning (15 points)

### Task 1.1: Calculate System Capacity
**Given:**
- Growing area: 300 m²
- Lettuce spacing: 20cm × 20cm
- Cycle time: 35 days transplant to harvest

**Calculate:**
1. Plants per growing cycle
2. Number of cycles per year
3. Total annual production capacity
4. Percentage utilization to meet 75,000 plant goal

**Show your work:**
```
Plants per cycle = Area / spacing² = 300 m² / 0.04 m² = _______

Cycles per year = 365 days / 35 days = _______

Annual capacity = Plants per cycle × Cycles per year = _______

Utilization = (75,000 / Annual capacity) × 100% = _______%
```

### Task 1.2: Production Schedule
Create a rolling planting schedule that delivers consistent weekly harvests.

---

## Part 2: Hydraulic Design (25 points)

### Task 2.1: Channel Configuration
**Design specifications:**
- Channel width: 100mm
- Target flow rate: 1.5 L/min per channel
- Slope: 1%
- Maximum channel length: 12m

**Calculate:**
1. Number of channels needed for 300 m²
2. Channel layout configuration
3. Aisle requirements (assume 0.6m aisles)
4. Actual growing area after aisles

**Design:**
Sketch your channel layout (can be ASCII art or describe in detail)

### Task 2.2: Pump Sizing
**Given:**
- Total flow requirement: (number of channels) × 1.5 L/min
- Vertical lift: 1.5m
- Friction losses: Estimate 0.4m
- Channel slope drop: 0.12m (for 12m channel)

**Calculate:**
1. Total Dynamic Head (TDH)
2. Required pump capacity (L/min @ TDH)
3. Estimated pump power (use efficiency = 60%)
4. Backup pump specifications

**Calculations:**
```
Total flow = _____ channels × 1.5 L/min = _____ L/min

TDH = Static (1.5) + Friction (0.4) + Channel (0.12) + Safety 20%
TDH = _____ m

Pump power = (ρ × g × Q × TDH) / η
           = (1000 × 9.81 × _____ × _____) / 0.60
           = _____ W
```

### Task 2.3: Reservoir Sizing
Calculate appropriate reservoir volume (recommend 0.75-1.0 L per plant).

---

## Part 3: Environmental Control (20 points)

### Task 3.1: Climate Control Requirements
**Denver climate challenges:**
- Low humidity (average 30-40%)
- High altitude (lower atmospheric pressure affects DO)
- Temperature swings (daily and seasonal)

**Design solutions for:**
1. Humidity management
2. Temperature control (heating and cooling needs)
3. Dissolved oxygen management (adjusted for altitude)

### Task 3.2: Lighting Design
**Calculate:**
- Target PPFD: 250 μmol/m²/s
- Photoperiod: 16 hours/day
- LED efficiency: 2.7 μmol/J

**Requirements:**
1. Total photon flux needed (μmol/s)
2. Total electrical power (kW)
3. Number of fixtures (assume 200W each)
4. Daily energy consumption (kWh/day)

**Calculations:**
```
Total flux = Area × PPFD = 300 m² × 250 μmol/m²/s = _____ μmol/s

Power = Flux / Efficiency = _____ / 2.7 = _____ W = _____ kW

Fixtures = Power / 200W each = _____ fixtures

Daily energy = Power × Hours = _____ kW × 16 hr = _____ kWh/day
```

---

## Part 4: Solution Management (15 points)

### Task 4.1: Nutrient Formulation
Design a complete nutrient formulation for butterhead lettuce:
- Specify concentrations for N, P, K, Ca, Mg, S (ppm)
- Calculate stock solution concentrations (100× concentrate)
- Determine Tank A and Tank B composition (avoid precipitation)

### Task 4.2: Monitoring System
Specify sensors and monitoring equipment:
- Essential sensors (must have)
- Important sensors (should have)
- Optional sensors (nice to have)
- Estimated cost for monitoring system

---

## Part 5: Economic Analysis (25 points)

### Task 5.1: Capital Budget
Allocate $120,000 budget across:
- NFT system equipment (channels, pumps, tanks)
- Environmental control (HVAC, lights, fans)
- Monitoring and automation
- Post-harvest equipment
- Installation and contingency

Create detailed budget breakdown with justification.

### Task 5.2: Operating Cost Projection
**Calculate annual operating costs:**
- Seedlings: $0.10 × 75,000
- Nutrients: $0.05 × 75,000
- Packaging: $0.15 × 75,000
- Labor: Estimate FTE needed and costs
- Electricity: From lighting + HVAC calculations
- Facility costs: Estimate
- Other: Marketing, maintenance, admin

**Total operating costs:** $_______

### Task 5.3: Break-Even Analysis
**Calculate:**
1. Cost per plant (operating cost / 75,000)
2. Break-even price (including capital payback over 5 years)
3. Target selling price for 25% profit margin
4. Required market price for viability assessment

### Task 5.4: ROI Projection
Create 3-year financial projection:
- Year 1: Ramp-up (assume 80% of target production)
- Year 2: Target production achieved
- Year 3: Optimization (assume 5% efficiency gain)

Calculate:
- Annual revenue (at your target price)
- Annual profit
- Cumulative cash flow
- Return on investment

---

## Part 6: Risk Assessment (10 points)

### Task 6.1: Identify Risks
List the top 5 risks for this operation and mitigation strategies:

1. Risk: __________
   Likelihood: Low / Medium / High
   Impact: Low / Medium / High
   Mitigation: __________

[Repeat for 5 risks]

### Task 6.2: Contingency Planning
Describe contingency plans for:
- Power outage
- Pump failure
- Disease outbreak
- Market disruption
- Equipment failure

---

## Part 7: Innovation Component (Bonus 10 points)

Propose ONE innovative feature or approach for this system:
- Could be technology integration
- Novel system design element
- Sustainability innovation
- Market differentiation strategy

**Description:**
- What is the innovation?
- How does it improve the system?
- What are the costs and benefits?
- Implementation timeline

---

## Deliverables

Submit a professional design report including:

1. **Executive Summary** (1 page)
   - Project overview
   - Key specifications
   - Economic summary

2. **Technical Design** (5-8 pages)
   - All calculations from Parts 1-4
   - System diagrams (can be hand-drawn and scanned)
   - Equipment specifications
   - Justifications for design choices

3. **Economic Analysis** (2-3 pages)
   - Detailed budget
   - Operating cost breakdown
   - Break-even and ROI analysis
   - 3-year financial projection

4. **Risk and Implementation** (2 pages)
   - Risk assessment
   - Contingency plans
   - Implementation timeline
   - Success metrics

5. **Appendices**
   - Detailed calculations
   - Vendor quotes (research real equipment)
   - References

---

## Evaluation Rubric

| Category | Points | Criteria |
|----------|--------|----------|
| Production Planning | 15 | Accurate calculations, realistic schedule |
| Hydraulic Design | 25 | Correct formulas, appropriate specifications |
| Environmental Control | 20 | Climate-appropriate solutions, valid calculations |
| Solution Management | 15 | Complete formulation, adequate monitoring |
| Economic Analysis | 25 | Realistic budget, thorough financial projections |
| Risk Assessment | 10 | Comprehensive risks, practical mitigations |
| Professional Presentation | 10 | Clear, organized, well-documented |
| Innovation (Bonus) | +10 | Creative, feasible, valuable addition |
| **Total** | **120** | (110 points + 10 bonus possible) |

**Grading Scale:**
- 100-120: Excellent (A)
- 90-99: Very Good (B)
- 80-89: Good (C)
- 70-79: Satisfactory (D)
- <70: Needs Improvement (F)

---

## Tips for Success

1. **Show all calculations** - Partial credit available for methodology
2. **Research real equipment** - Use actual vendor specifications and pricing
3. **Be realistic** - Design should be buildable with stated budget
4. **Consider trade-offs** - Explain why you made specific choices
5. **Think holistically** - System components must work together
6. **Document assumptions** - State any assumptions clearly
7. **Professional presentation** - This could be a real client proposal

---

## Learning Outcomes

Upon completion, you will be able to:
- Design complete NFT systems from scratch
- Perform hydraulic and environmental engineering calculations
- Create realistic financial projections
- Assess and mitigate operational risks
- Present professional design proposals
- Integrate multiple technical considerations
- Make evidence-based design decisions

---

## Submission

Submit as PDF via course platform.
Due: End of Week 8
Questions: Office hours or discussion forum

---

*This activity represents a real-world design scenario. Treat it as professional work.*

*EcoFusion Academy - Course 410*
