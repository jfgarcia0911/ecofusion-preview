# Module 6: Water Adaptation

## Learning Objectives
By the end of this module, you will be able to:
- Assess water scarcity risks and impacts
- Implement advanced water conservation techniques
- Design recirculation and recovery systems
- Plan for drought resilience
- Navigate water regulations and restrictions

---

## 6.1 Water and Climate Change

### Global Water Stress Trends

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  WATER STRESS PROJECTIONS BY 2050                            ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  U.S. REGIONAL WATER STRESS (Population under high stress)                  ║
║                                                                              ║
║  SOUTHWEST          Current: 75%    ███████████████                          ║
║  (AZ, NM, NV, UT)   2050:    95%    ███████████████████ ▲                   ║
║                                                                              ║
║  CALIFORNIA         Current: 60%    ████████████                             ║
║                     2050:    85%    █████████████████ ▲                      ║
║                                                                              ║
║  GREAT PLAINS       Current: 40%    ████████                                 ║
║  (High Plains       2050:    70%    ██████████████ ▲                         ║
║   Aquifer)                                                                   ║
║                                                                              ║
║  SOUTHEAST          Current: 25%    █████                                    ║
║  (Growing demand)   2050:    45%    █████████ ▲                              ║
║                                                                              ║
║  MIDWEST            Current: 15%    ███                                      ║
║                     2050:    25%    █████ ▲                                  ║
║                                                                              ║
║  NORTHEAST          Current: 10%    ██                                       ║
║                     2050:    15%    ███ ▲                                    ║
║                                                                              ║
║  ▲ = Increasing stress    █ = 5% of population                               ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### Climate Impacts on Water Supply

**Changing Hydrology:**

| Impact | Mechanism | Agricultural Effect | CEA Response |
|--------|-----------|-------------------|--------------|
| **Reduced snowpack** | Earlier melt, less storage | Summer water shortages | Year-round minimal use |
| **More variable precipitation** | Feast or famine cycles | Drought/flood cycles | Independent of rainfall |
| **Increased evaporation** | Higher temperatures | Higher irrigation needs | Closed systems, low loss |
| **Groundwater depletion** | Overpumping + less recharge | Well failures, restrictions | Minimal demand, efficiency |
| **Saltwater intrusion** | Sea level rise + pumping | Contaminated wells | Treatment or alternate source |

---

## 6.2 CEA Water Efficiency

### Water Use Comparison

**Water Requirements by System:**

```
WATER USE: FIELD AGRICULTURE vs CEA
═══════════════════════════════════════════════════════════════
(Gallons per pound of lettuce produced)

FIELD AGRICULTURE (Lettuce, California):
████████████████████████████████████████████ 25-50 gal/lb
├─► Evapotranspiration: 60-70%
├─► Evaporation from soil: 20-30%
├─► Runoff/leaching: 10-15%
└─► Plant uptake: 5-10%

GREENHOUSE (Soil/Drip Irrigation):
████████████ 8-12 gal/lb
├─► Evapotranspiration: 60-70%
├─► Evaporation: 15-25%
├─► Runoff/leaching: 10-15%
└─► Plant uptake: 5-10%

HYDROPONIC (NFT, Recirculating):
████ 2-4 gal/lb
├─► Evapotranspiration: 80-90%
├─► System losses: 5-10%
├─► Plant uptake: 5-10%
└─► Wastewater: <5%

AQUAPONICS (Recirculating):
██ 1-2 gal/lb
├─► Evapotranspiration: 85-92%
├─► Fish water exchange: 3-10%
├─► System losses: 2-5%
└─► Plant uptake: 3-5%

AEROPONICS (Mist-based):
█ 0.5-1.5 gal/lb
├─► Evapotranspiration: 90-95%
├─► Misting losses: 3-7%
└─► Plant uptake: 2-3%

WATER SAVINGS: 90-98% compared to field production
```

### Water Efficiency Mechanisms

**Why CEA Uses Less Water:**

1. **Recirculation**
   - Water captured and reused
   - 90-95%+ recirculation rate
   - Minimal discharge

2. **Controlled Environment**
   - Reduced evaporation (enclosed, humid)
   - No wind (major evaporation driver)
   - Optimized transpiration

3. **Precision Delivery**
   - Water delivered directly to roots
   - No soil surface evaporation
   - No overspray or drift

4. **No Leaching**
   - Closed systems contain all water
   - No percolation to groundwater
   - No nutrient runoff

5. **Optimized Growth**
   - Faster growth = more efficient water use per pound
   - Higher density = more production per water unit

---

## 6.3 Advanced Water Conservation

### Recirculation System Design

**Closed-Loop Hydroponic System:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                  RECIRCULATING HYDROPONIC SYSTEM                             ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   ┌────────────────────────────────────────────────────────────┐            ║
║   │              GROWING ZONES (NFT channels)                   │            ║
║   │  [Plants] [Plants] [Plants] [Plants] [Plants] [Plants]     │            ║
║   │    │  │      │  │      │  │      │  │      │  │      │  │   │            ║
║   └────┼──┼──────┼──┼──────┼──┼──────┼──┼──────┼──┼──────┼──┼───┘            ║
║        │  │      │  │      │  │      │  │      │  │      │  │                ║
║        │  └──────┼──┴──────┼──┴──────┼──┴──────┼──┴──────┼──┘                ║
║        │         │         │         │         │         │                   ║
║        ▼         ▼         ▼         ▼         ▼         ▼                   ║
║   ┌────────────────────────────────────────────────────────────┐            ║
║   │              COLLECTION TANK / SUMP                         │            ║
║   │  • Collects all runoff                                      │            ║
║   │  • Monitors EC, pH, temperature                             │            ║
║   └──────────────────────────┬─────────────────────────────────┘            ║
║                              │                                               ║
║                              ▼                                               ║
║   ┌────────────────────────────────────────────────────────────┐            ║
║   │              FILTRATION                                     │            ║
║   │  ├─► Particle filter (remove debris)                       │            ║
║   │  ├─► Biofilter (optional, nitrification)                   │            ║
║   │  └─► UV sterilization (pathogen control)                   │            ║
║   └──────────────────────────┬─────────────────────────────────┘            ║
║                              │                                               ║
║                              ▼                                               ║
║   ┌────────────────────────────────────────────────────────────┐            ║
║   │         NUTRIENT ADJUSTMENT & DOSING                        │            ║
║   │  ├─► pH adjustment (up/down)                                │            ║
║   │  ├─► EC adjustment (nutrient concentration)                │            ║
║   │  └─► Automated dosing pumps                                │            ║
║   └──────────────────────────┬─────────────────────────────────┘            ║
║                              │                                               ║
║                              ▼                                               ║
║   ┌────────────────────────────────────────────────────────────┐            ║
║   │              PUMP STATION                                   │            ║
║   │  • Pumps solution back to growing zones                     │            ║
║   │  • Circulation: continuous or intermittent                  │            ║
║   └──────────────────────────┬─────────────────────────────────┘            ║
║                              │                                               ║
║                              └──────────────► (Back to top)                  ║
║                                                                              ║
║   MAKEUP WATER: Only to replace evapotranspiration + minor losses (5-10%)   ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

**Recirculation Rate:** 90-98% of water reused

### Condensate Recovery

**HVAC Dehumidification Water Capture:**

| Climate/Season | Dehumidification Load | Water Recovery (gal/day per 1000 sq ft) | % of Total Needs |
|----------------|---------------------|--------------------------------------|-----------------|
| **Hot, humid summer** | High | 15-30 | 10-25% |
| **Moderate** | Medium | 8-15 | 5-15% |
| **Cool, dry winter** | Low | 2-8 | 2-8% |
| **Arid (year-round)** | High (cooling) | 10-20 | 8-18% |

**Condensate System:**
```
Dehumidifier/AC → Condensate drip pan → Collection tank →
Filtration (carbon, UV) → Storage tank → Irrigation system
```

**Water Quality:** Generally high quality (distilled by evaporation), but:
- Test for contaminants (HVAC system materials)
- UV or other treatment recommended
- May need pH adjustment
- Excellent for non-food uses (cleaning, etc.)

### Rainwater Harvesting

**Greenhouse Roof Collection:**

```
RAINWATER HARVEST POTENTIAL
═══════════════════════════════════════════════════════════════

Example: 10,000 sq ft greenhouse, 30 inches annual rainfall

Annual rainfall on roof:
10,000 sq ft × (30 in / 12 in/ft) × 7.48 gal/cu ft = 187,000 gallons

With 80% collection efficiency: ~150,000 gallons/year

Typical CEA water use:
10,000 sq ft × 0.3 gal/sq ft/day × 365 days = 109,500 gal/year

RESULT: Rainwater can meet 100%+ of needs in many climates

────────────────────────────────────────────────────────────────

SYSTEM COMPONENTS:
├─► Gutters and downspouts (clean, food-grade materials)
├─► First flush diverters (discard initial dirty water)
├─► Storage tanks (sized for 30-90 days capacity)
├─► Filtration (sediment, carbon, UV)
├─► Backup municipal connection (drought periods)
└─► Overflow management
```

**Regional Suitability:**

| Region | Annual Rainfall | Rainwater as % of Needs | Suitability |
|--------|----------------|----------------------|-------------|
| **Pacific Northwest** | 40-80 inches | 150-300%+ | Excellent - surplus to sell/use elsewhere |
| **Northeast** | 35-50 inches | 120-200% | Excellent - can meet full needs |
| **Southeast** | 40-60 inches | 150-250% | Excellent - but seasonally variable |
| **Midwest** | 30-40 inches | 100-150% | Good - meets most/all needs |
| **California** | 15-25 inches | 50-90% | Good supplement, but not full supply |
| **Southwest** | 8-15 inches | 25-60% | Supplement only, backup needed |

---

## 6.4 Drought Resilience Planning

### Water Source Diversification

**Multi-Source Strategy:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                   DIVERSIFIED WATER SUPPLY STRATEGY                          ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║   SOURCE 1: Municipal Water (Primary - Normal Operations)                   ║
║   ├─► Reliable, treated, year-round                                         ║
║   ├─► Provides 70-100% of needs                                             ║
║   └─► Risk: Drought restrictions, price increases                           ║
║                                                                              ║
║   SOURCE 2: Rainwater Harvest (Supplemental - Seasonal)                     ║
║   ├─► Free, reduces municipal demand                                        ║
║   ├─► Provides 20-60% of needs (depending on climate)                       ║
║   └─► Risk: Dry periods, storage limits                                     ║
║                                                                              ║
║   SOURCE 3: Condensate Recovery (Continuous - Small)                        ║
║   ├─► Byproduct of climate control                                          ║
║   ├─► Provides 5-20% of needs                                               ║
║   └─► Risk: Minimal, always producing when operating                        ║
║                                                                              ║
║   SOURCE 4: Well Water (Backup - Emergency)                                 ║
║   ├─► Independent of municipal supply                                       ║
║   ├─► Can provide 100% if needed                                            ║
║   └─► Risk: Aquifer depletion, quality variability, drilling cost           ║
║                                                                              ║
║   SOURCE 5: Greywater/Recycled (Future - Non-food uses)                     ║
║   ├─► Clean non-food areas, cooling towers                                  ║
║   ├─► Provides 5-15% offset                                                 ║
║   └─► Risk: Regulations, treatment costs                                    ║
║                                                                              ║
║   TOTAL RESILIENCE: If any 1-2 sources fail, operation continues            ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

### Water Storage Strategy

**Storage Sizing:**

| Scenario | Storage Target | Rationale |
|----------|---------------|-----------|
| **Municipal water only** | 3-7 days usage | Covers short outages, pressure issues |
| **+ Rainwater harvest** | 30-90 days | Bridge dry periods between rain events |
| **+ Well backup** | 1-3 days | Minimal, well provides ongoing |
| **Drought-prone region** | 60-180 days | Survive extended restrictions |

**Calculation Example:**
- 10,000 sq ft production
- 0.3 gal/sq ft/day water use = 3,000 gal/day
- 30-day storage target = 90,000 gallons
- Storage: (3) 30,000-gallon tanks

**Storage Types:**

| Type | Capacity Range | Cost | Pros | Cons |
|------|---------------|------|------|------|
| **Above-ground plastic** | 1,000-50,000 gal | Low-Medium | Easy install, modular | Space, aesthetics |
| **Underground cisterns** | 5,000-100,000 gal | High | Hidden, protected | Excavation cost, access |
| **Flexible bladders** | 1,000-30,000 gal | Medium | Space-efficient, portable | Limited lifespan |
| **Concrete/steel** | 10,000-500,000 gal | Very High | Durable, large capacity | Major infrastructure |

---

## 6.5 Water Quality Management

### Treatment Requirements by Source

| Water Source | Treatment Needed | Purpose | Cost |
|-------------|-----------------|---------|------|
| **Municipal** | Minimal (may dechlorinate) | Remove chlorine/chloramine | Low |
| **Well** | Testing, possible filtration, UV | Remove minerals, pathogens | Medium |
| **Rainwater** | Filtration, UV sterilization | Remove debris, bacteria | Medium |
| **Condensate** | Carbon filter, UV | Remove contaminants, sterilize | Low-Medium |
| **Surface water** | NOT RECOMMENDED | Too variable, high treatment cost | N/A |

### Monitoring and Testing

**Water Quality Parameters:**

```
╔══════════════════════════════════════════════════════════════════════════════╗
║                    WATER QUALITY MONITORING SCHEDULE                         ║
╠══════════════════════════════════════════════════════════════════════════════╣
║                                                                              ║
║  Parameter           Frequency    Target Range       Action if Out of Range  ║
║  ═══════════════════════════════════════════════════════════════════════    ║
║                                                                              ║
║  pH                  Daily        5.5-6.5 (hydro)    Adjust with acid/base   ║
║                                   6.0-7.0 (aqua)                             ║
║                                                                              ║
║  EC (Electrical      Daily        1.5-2.5 mS/cm      Dilute or add nutrients ║
║  Conductivity)                    (crop-dependent)                           ║
║                                                                              ║
║  Temperature         Daily        65-75°F            Heat or cool            ║
║                                                                              ║
║  Dissolved Oxygen    Daily        >5 mg/L (plants)   Increase aeration       ║
║  (DO)                             >6 mg/L (fish)                             ║
║                                                                              ║
║  Turbidity           Weekly       <5 NTU             Filter, settle          ║
║                                                                              ║
║  Total Dissolved     Monthly      <500 ppm ideal     Dilute, reverse osmosis ║
║  Solids (TDS)                                                                ║
║                                                                              ║
║  Nitrate-N           Weekly       100-200 ppm        Adjust fertilizer       ║
║                                   (hydroponics)                              ║
║                                                                              ║
║  Bacteria (E. coli)  Monthly      0 CFU/100mL        UV, sanitize system    ║
║                                                                              ║
║  Heavy metals        Annually     Below EPA limits   Source investigation    ║
║  (source water)                                                              ║
║                                                                              ║
╚══════════════════════════════════════════════════════════════════════════════╝
```

---

## 6.6 Regulatory Landscape

### Water Use Restrictions

**Drought Response Levels:**

| Stage | Trigger | Typical Restrictions | CEA Impact |
|-------|---------|---------------------|------------|
| **Normal** | Adequate supply | None | None |
| **Stage 1: Watch** | Below-average supply | Voluntary conservation | Minimal (already efficient) |
| **Stage 2: Warning** | Significant shortage | Outdoor irrigation limits, specific days/times | Possible exemption as food production |
| **Stage 3: Alert** | Severe shortage | Mandatory reductions (20-30%) | CEA often exempt, but pressure to conserve |
| **Stage 4: Critical** | Extreme shortage | Mandatory cuts (50%+), agriculture restrictions | May face cuts, but lower priority than field ag |

**Agricultural Exemptions:**
- Most regions prioritize food production
- Commercial food growers often exempt from residential restrictions
- Document production and water efficiency
- May need to justify usage
- **CEA advantage:** Dramatically lower use makes compliance easy

### Water Rights and Permitting

**Groundwater Use:**

| Jurisdiction Type | Permit Required | Use Limits | CEA Considerations |
|------------------|----------------|-----------|-------------------|
| **Prior appropriation** (Western states) | Yes | Based on water rights | May need to purchase rights; expensive |
| **Riparian rights** (Eastern states) | Sometimes | "Reasonable use" | Easier access, but still regulated |
| **Groundwater districts** | Varies | May have caps | Research local rules before drilling |

**Rainwater Harvesting:**

| State | Legal Status | Restrictions |
|-------|-------------|--------------|
| **Most Eastern states** | Fully legal | None |
| **Most Western states** | Legal (recently changed) | May have limits on storage, use type |
| **Colorado** | Limited legal (as of 2016) | Rooftop only, two barrels max (residential) |
| **Commercial ag** | Generally more permissive | Check state law |

### Discharge Regulations

**Wastewater Management:**

```
CEA WASTEWATER DISCHARGE OPTIONS
═══════════════════════════════════════════════════════════════

OPTION 1: Zero Discharge (Best for CEA)
├─► 100% recirculation
├─► Evapotranspiration is only water loss
├─► Periodic system cleanout (minimal volume)
├─► No discharge permit needed
└─► RECOMMENDED for climate resilience

OPTION 2: Municipal Sewer (If occasional discharge)
├─► Requires sewer discharge permit
├─► Must meet pretreatment standards (pH, solids, nutrients)
├─► Fees based on volume and strength
└─► Not cost-effective for CEA

OPTION 3: On-Site Treatment (Rare for CEA)
├─► Constructed wetlands, evaporation ponds
├─► Requires permits, monitoring
├─► Land area needed
└─► Rarely justified given CEA's low discharge

OPTION 4: Land Application (Nutrient solution)
├─► Irrigate landscaping, non-food crops
├─► May require permit if large volumes
├─► Beneficial use of nutrients
└─► Seasonal, weather-dependent
```

---

## 6.7 Economic Analysis of Water Systems

### Cost-Benefit of Water Efficiency

**Investment vs. Savings:**

| Investment | Upfront Cost (10K sq ft) | Annual Savings | Payback Period | Climate Benefit |
|------------|------------------------|---------------|----------------|----------------|
| **Recirculation (baseline)** | Included in system | $5,000-8,000 (vs. drip) | N/A | Essential |
| **Rainwater harvest** | $15,000-40,000 | $2,000-4,000 | 4-10 years | High |
| **Condensate recovery** | $2,000-5,000 | $500-1,500 | 2-5 years | Medium |
| **Well drilling** | $10,000-30,000 | Varies (backup) | N/A (insurance) | High (drought resilience) |
| **Advanced filtration** | $5,000-15,000 | Water quality benefits | Indirect | Medium |

### Water Pricing Trends

**Increasing Water Costs:**

| Region | Current Avg ($/1000 gal) | Projected 2030 | Trend |
|--------|------------------------|---------------|-------|
| **Southwest** | $3-8 | $6-15 | Rapidly increasing |
| **California** | $4-12 | $8-20 | Increasing |
| **Southeast** | $2-5 | $3-8 | Moderate increase |
| **Midwest** | $2-4 | $3-6 | Slow increase |
| **Northeast** | $3-7 | $4-10 | Moderate increase |

**CEA Water Cost Example:**
- 10,000 sq ft, uses 3,000 gal/day = 1.1 million gal/year
- At $5/1,000 gal: $5,500/year
- At $10/1,000 gal: $11,000/year
- **Compared to field irrigation:** 10-20x less total cost

---

## 6.8 Key Takeaways

### Water Efficiency is CEA's Climate Superpower

1. **90-98% Water Reduction**
   - Recirculating systems use 1/10 to 1/50 the water of field
   - Makes CEA viable in drought-stressed regions
   - Positions CEA as climate adaptation leader

2. **Multiple Water Sources = Resilience**
   - Municipal + rainwater + condensate + well
   - Diversification prevents single point of failure
   - Rainwater can meet 100%+ needs in many climates

3. **Storage Provides Buffer**
   - 30-90 days storage recommended
   - Survives restrictions, outages, dry periods
   - Modest cost for major resilience gain

4. **Quality Management is Critical**
   - Test all sources regularly
   - Treat as needed (filtration, UV, pH)
   - Maintain system cleanliness

5. **Regulations Generally Favorable**
   - Food production often exempt from restrictions
   - Recirculation avoids discharge regulations
   - Rainwater harvesting increasingly legal

6. **Economics Improve with Climate Change**
   - Water costs rising
   - Efficiency advantage grows
   - Drought resilience has value beyond cost savings

### Action Items

- [ ] Audit current water use and efficiency
- [ ] Assess feasibility of rainwater harvest (ROI calculation)
- [ ] Install condensate recovery if not already
- [ ] Plan water storage (size, location, budget)
- [ ] Identify backup water source (well, alternate connection)
- [ ] Develop drought contingency plan
- [ ] Review local water regulations and exemptions
- [ ] Implement water quality monitoring protocol

---

## Additional Resources

### Water Efficiency
- USDA NRCS Irrigation Guides
- Alliance for Water Efficiency
- WaterSense (EPA program)
- American Rainwater Catchment Systems Association

### Rainwater Harvesting
- Rainwater Harvesting for Drylands and Beyond (Brad Lancaster)
- Harvest H2O (calculators and guides)
- State rainwater harvesting guides

### Water Quality
- EPA Safe Drinking Water Act standards
- State water quality labs (testing)
- Hydroponics nutrient management guides

---

## Next Module
**Module 7: Energy & Climate** - Optimize energy systems for climate resilience and carbon footprint reduction in CEA operations.

---

*Module 6 | Course 312: Climate Change Adaptation | EcoFusion Academy*
