# Activity 1: Biofilter Design Project

## Objective
Design a complete nitrification biofilter system for an aquaponic facility

## Duration
4-6 hours (can be completed over multiple sessions)

## Prerequisites
- Completion of Modules 2-4
- Understanding of Monod kinetics, bioreactor design, and nitrification

## Scenario

**GreenLeaf Aquaponics** is expanding their facility and needs a new biofilter system.

**Facility Specifications:**
- Fish species: Tilapia
- Fish biomass: 3,000 kg (steady state)
- Feed rate: 1.5% body weight per day = 45 kg feed/day
- Feed protein content: 40%
- Water recirculation rate: 50 m³/hour
- Target water quality: <1 mg/L NH₃-N, <0.5 mg/L NO₂⁻-N
- Operating temperature: 24-26°C
- Available footprint: 50 m² maximum
- Budget: $30,000-50,000

## Part 1: Waste Load Calculation (30 minutes)

### Task 1.1: Calculate TAN Production

Fish excrete approximately 3% of feed weight as Total Ammonia Nitrogen (TAN).

**Calculate:**
1. Daily feed input (kg/day)
2. Protein input (kg protein/day)
3. Nitrogen input (kg N/day) - protein is 16% N
4. TAN excretion (kg N/day) - assume 3% of feed
5. Hourly TAN production (g N/hour)

### Task 1.2: Determine Required Removal Rate

**Calculate:**
1. TAN concentration increase if no biofilter (mg/L/hour)
   - Hint: Use recirculation rate
2. Required removal rate to maintain <1 mg/L effluent
3. Design removal rate with 20% safety factor

**Deliverable:** Summary table of waste loads

---

## Part 2: Kinetic Analysis (45 minutes)

### Task 2.1: Select Nitrifier Kinetic Parameters

Research and select appropriate values for Nitrosomonas and Nitrobacter:

| Parameter | Nitrosomonas | Nitrobacter | Units |
|-----------|--------------|-------------|-------|
| μmax (25°C) | | | h⁻¹ |
| Ks (NH₃ or NO₂⁻) | | | mg N/L |
| KO₂ | | | mg/L |
| YX/N | | | g cells/g N |

### Task 2.2: Calculate Required Biomass

Using surface loading approach:
- k = 0.4 m/day at 25°C (given)
- Influent NH₃-N: varies with system (estimate 10-40 mg/L)
- Effluent NH₃-N: <1 mg/L

**Calculate:**
1. Required biofilter surface area (m²)
2. Select carrier media (specify type and surface area/volume)
3. Calculate biofilter volume (m³)
4. Estimate biomass concentration (g/m²)

**Deliverable:** Kinetic parameter table and calculations

---

## Part 3: Reactor Design (60 minutes)

### Task 3.1: Select Reactor Configuration

Choose ONE configuration and justify:

**Option A: Moving Bed Biofilm Reactor (MBBR)**
- Carrier media in suspension (40-70% fill)
- Requires aeration for mixing and O₂
- Compact, reliable

**Option B: Trickling Filter**
- Fixed media with water trickling over
- Natural or forced air
- Larger footprint, simpler

**Option C: Fluidized Bed**
- Fine media (sand) fluidized by upflow
- Very compact, high efficiency
- Higher complexity, more expensive

**Justify selection based on:**
- Capital cost
- Footprint
- Complexity
- Reliability
- O&M requirements

### Task 3.2: Size the Selected Reactor

**For MBBR (if selected):**
1. Volume from Part 2
2. Tank dimensions (H/D ratio 1:1 to 2:1)
3. Carrier media quantity and type
4. Screen size and placement

**For Trickling Filter (if selected):**
1. Surface area from Part 2
2. Media depth (1.5-3 m)
3. Footprint dimensions
4. Recirculation ratio (1:1 to 4:1)
5. Distribution system (rotating arm or fixed)

**For Fluidized Bed (if selected):**
1. Cross-sectional area for desired flux
2. Bed height and expansion
3. Media type and size
4. Upflow velocity

**Deliverable:** Reactor drawings (can be hand-sketched) with dimensions

---

## Part 4: Aeration System Design (45 minutes)

### Task 4.1: Calculate Oxygen Demand

**Nitrification oxygen requirement:**
- 4.57 g O₂ per g NH₄⁺-N oxidized

**Calculate:**
1. Theoretical O₂ demand (kg/day and g/hour)
2. Add 30% for biomass respiration and safety
3. Total O₂ demand (g/hour)

### Task 4.2: Size Aeration System

**For MBBR or other aerated systems:**

Assuming:
- Oxygen transfer efficiency: 8-12%
- Air density: 1.2 kg/m³
- O₂ in air: 23% by weight

**Calculate:**
1. Required air flow (m³/hour)
2. Specific aeration rate (m³ air/m³ reactor/hour)
3. Number and size of diffusers
4. Blower capacity (m³/min)
5. Blower power requirement (assume 0.2 kWh/m³ air)

**Deliverable:** Aeration system specifications and power requirement

---

## Part 5: Process Control and Monitoring (30 minutes)

### Task 5.1: Identify Critical Control Points

List parameters to monitor and control:

| Parameter | Target Range | Measurement Frequency | Control Action |
|-----------|--------------|----------------------|----------------|
| pH | 7.0-8.0 | Continuous | Add buffer if <7.0 |
| Temperature | 24-26°C | Continuous | Heater on/off |
| DO | >4 mg/L | Continuous | Adjust blower VFD |
| Effluent NH₃-N | <1 mg/L | Daily | Reduce loading if high |
| Effluent NO₂⁻-N | <0.5 mg/L | Daily | Check DO, reduce loading |
| Alkalinity | >100 mg/L CaCO₃ | Weekly | Add NaHCO₃ |

### Task 5.2: Develop Startup Protocol

Create a timeline for biofilter startup (6-8 weeks):

**Week-by-week plan:**
- Week 1-2: ?
- Week 3-4: ?
- Week 5-6: ?
- Week 7-8: ?

Include:
- Loading rates (% of design)
- Expected water quality
- Actions to take
- Success criteria

**Deliverable:** Monitoring table and startup timeline

---

## Part 6: Economic Analysis (45 minutes)

### Task 6.1: Estimate Capital Costs

Research or estimate costs for:

| Item | Quantity | Unit Cost | Total |
|------|----------|-----------|-------|
| Tank/vessel | | | |
| Carrier media | | | |
| Aeration system | | | |
| Blower | | | |
| Piping and valves | | | |
| Instrumentation | | | |
| Installation (30% of equipment) | | | |
| **TOTAL CAPITAL** | | | |

### Task 6.2: Estimate Operating Costs

**Annual operating costs:**

| Item | Calculation | Annual Cost |
|------|-------------|-------------|
| Electricity (blower) | kWh/year × $0.10/kWh | |
| Labor (allocated) | 0.25 FTE × $50,000 | |
| Maintenance (2% capital) | | |
| Alkalinity supplementation | kg/year × $0.80/kg | |
| **TOTAL ANNUAL O&M** | | |

### Task 6.3: Compare to Alternatives

**Alternative: Increase water exchange rate**

Calculate:
- Water exchange needed to maintain <1 mg/L NH₃-N
- Water cost (municipal: $2/m³)
- Heating cost for makeup water
- Discharge fees

**Compare:**
- Biofilter: Higher capital, lower operating
- Water exchange: Low/no capital, high operating

**Deliverable:** Economic comparison table with recommendation

---

## Part 7: Final Report (60 minutes)

### Compile all sections into a design report:

**Report Structure:**
1. **Executive Summary** (1 page)
   - Facility overview
   - Design approach
   - Key specifications
   - Total cost

2. **Design Basis** (1-2 pages)
   - Waste load calculations
   - Kinetic analysis
   - Design criteria

3. **System Design** (2-3 pages)
   - Reactor configuration and sizing
   - Aeration system
   - Process flow diagram
   - Drawings/sketches

4. **Operation and Control** (1-2 pages)
   - Monitoring plan
   - Control strategy
   - Startup protocol

5. **Economic Analysis** (1 page)
   - Capital and operating costs
   - Comparison to alternatives
   - Recommendation

6. **Appendices**
   - Detailed calculations
   - Equipment specifications
   - References

**Deliverable:** Complete design report (8-12 pages)

---

## Evaluation Criteria

| Category | Points | Criteria |
|----------|--------|----------|
| Technical Accuracy | 30 | Correct calculations, appropriate assumptions |
| Design Justification | 20 | Well-reasoned equipment selection |
| Completeness | 20 | All tasks completed thoroughly |
| Economic Analysis | 15 | Realistic costs, valid comparisons |
| Presentation | 15 | Clear, professional documentation |
| **TOTAL** | **100** | |

---

## Resources

- Module 4 lecture notes
- Bioprocess Equations Cheatsheet
- Equipment vendor websites (pricing)
- Technical papers on MBBR/biofilter design
- Instructor office hours for questions

---

## Submission

- Due date: As specified by instructor
- Format: PDF report + Excel calculation spreadsheet
- Submit via course management system

---

## Extension Challenges (Optional)

For advanced students:

1. **Model the dynamic response** of the biofilter to a 50% increase in fish feeding using differential equations
2. **Design a backup/redundancy system** for biofilter failure
3. **Optimize for minimum lifecycle cost** (20-year NPV)
4. **Include denitrification** to remove excess nitrate
5. **Design control algorithms** (PID parameters for DO control)

---

**Learning Outcomes:**

Upon completion, students will have:
- Applied bioprocess engineering principles to real-world design
- Integrated multiple concepts (kinetics, mass transfer, economics)
- Developed professional engineering documentation skills
- Gained practical sizing and costing experience
- Practiced decision-making with trade-offs
