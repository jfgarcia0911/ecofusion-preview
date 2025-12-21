# Integrated System Design Cheatsheet

**Course 405: Regenerative Agriculture Systems**

---

## System Integration Principles

1. **Functional Complementarity** - Each output serves as input elsewhere
2. **Temporal Complementarity** - Different time scales provide stability
3. **Spatial Optimization** - Minimize transport, maximize adjacencies
4. **Scale Matching** - Balance flows, prevent bottlenecks

---

## Material Flow Optimization

### Key Metrics

```
Nutrient Use Efficiency (NUE)
= (Nutrients in Products / Total Nutrients Input) × 100%
Target: >80%

Recycling Efficiency (RE)
= (Nutrients Recycled / Nutrients Available) × 100%
Target: >85%

System Closure
= (Internal Cycling / Total Throughput) × 100%
Target: >75%
```

### Integration Points

```
CEA → OUTDOOR
=============
Spent growing media → Soil amendment
Plant waste → Compost feedstock
Treated water → Irrigation
CO₂ (from respiration) → Field enhancement
Seedlings → Transplants

OUTDOOR → CEA
=============
Compost → Media amendment
Fish waste (outdoor ponds) → Nutrients
Cover crop biomass → Compost carbon source
Beneficial insects → IPM
Rainwater → Irrigation
```

---

## Sizing Guidelines

### Water Storage
```
Method 1: Supply vs. Demand
Storage = Monthly Demand - Monthly Harvest

Method 2: Drought Period
Storage = Daily Use × Longest Dry Spell

Rule of Thumb:
- Small (<1 acre): 1,000-5,000 gal
- Medium (1-5 acres): 5,000-25,000 gal
- Large (5+ acres): 25,000-100,000+ gal
```

### Composting Capacity
```
Daily Waste × 365 / Finished Compost Yield = Annual Need

Volume = Annual Waste / (Bulk Density × Turns per Year)

Example:
100 kg/day waste × 365 = 36,500 kg/year
Bulk density: 300 kg/m³
3 turns/year
Volume needed: 36,500 / (300 × 3) = 40 m³
```

### CEA-to-Outdoor Ratio
```
Temperate Climate: 1:4 to 1:10
- Example: 0.5 acre CEA + 2-4 acres outdoor

Benefits of Balance:
- Risk diversification
- Year-round production
- Cost optimization
- Complementary products
```

---

## Seasonal Production Planning

### Complementary Crop Calendar

| Season | Outdoor Focus | CEA Focus | Integration |
|--------|---------------|-----------|-------------|
| **Spring** | Cool crops, transplanting | Propagation, greens | CEA provides transplants |
| **Summer** | Warm crops, peak production | Heat-sensitive crops | CEA fills market gaps |
| **Fall** | Storage crops, cover crops | Greens, herbs | CEA extends season |
| **Winter** | Dormant/minimal | Maximum production | CEA maintains cash flow |

---

## Waste Processing Capacity Sizing

### BSFL (Black Soldier Fly Larvae)
- **Capacity:** 15 kg waste/m²/day
- **Area needed:** Daily waste (kg) / 15
- **Example:** 30 kg/day ÷ 15 = 2 m² rearing area

### Vermicomposting
- **Capacity:** 2 kg waste/m²/day
- **Area needed:** Daily waste (kg) / 2
- **Example:** 20 kg/day ÷ 2 = 10 m² bed area

### Aerobic Composting
- **Ratio:** 1:10 daily input to total windrow volume
- **Example:** 50 kg/day = need 500 kg (0.5 m³) capacity

---

## Climate Adaptation Strategies

### By Climate Zone

**Hot-Arid**
- Outdoor: Drought-tolerant, desert-adapted
- CEA: Cool crops, maximum water efficiency
- Water: Maximize harvest, greywater reuse

**Hot-Humid**
- Outdoor: Tropical crops, heat-tolerant
- CEA: Disease-free with dehumidification
- Water: Drainage management, wetlands

**Cold-Humid**
- Outdoor: Cool-season, short season, storage
- CEA: Warm crops, winter production
- Energy: Solar thermal, biomass heating

**Temperate**
- Outdoor: Four-season diversity
- CEA: Complementary gap-filling
- Integration: Maximum synergy potential

---

## Risk Management Matrix

| Risk Type | Outdoor Impact | CEA Impact | Integrated Mitigation |
|-----------|----------------|------------|----------------------|
| **Weather** | HIGH | Low-Med | CEA backup production |
| **Pests** | Med-High | Low-Med | Isolation, biocontrol |
| **Equipment failure** | Low-Med | HIGH | Redundancy, manual backup |
| **Market** | HIGH | Low-Med | Diversification |

---

## Quick Design Checklist

### Site Analysis
- [ ] Climate zone and microclimate
- [ ] Topography and drainage patterns
- [ ] Soil conditions and depth
- [ ] Water availability (sources, quality, quantity)
- [ ] Energy access (grid, solar potential, wind)
- [ ] Market proximity and access

### Production Planning
- [ ] Market research (demand, pricing, competition)
- [ ] Crop selection (outdoor + CEA)
- [ ] Year-round production calendar
- [ ] Labor requirements (peak periods)
- [ ] Equipment and infrastructure needs

### Material Flow Design
- [ ] Map all inputs and outputs
- [ ] Identify integration opportunities
- [ ] Calculate recycling efficiencies
- [ ] Size processing infrastructure
- [ ] Design waste handling systems

### Infrastructure Layout
- [ ] Spatial arrangement for efficiency
- [ ] Shared facilities (water, energy, processing)
- [ ] Utility routing and connections
- [ ] Access roads and pathways
- [ ] Future expansion areas

### Financial Modeling
- [ ] Phased investment plan (3-5 years)
- [ ] Revenue projections by product/quarter
- [ ] Operating cost estimates
- [ ] Cash flow analysis
- [ ] Sensitivity analysis (revenue ±20%, costs ±15%)

### Risk Assessment
- [ ] Identify major risks (production, market, financial)
- [ ] Design mitigation strategies
- [ ] Build in redundancy and flexibility
- [ ] Develop contingency plans
- [ ] Insurance and reserves

---

## Integration Success Metrics

**Measure Progress:**
- [ ] % of waste recycled (target: >90%)
- [ ] % of nutrients from on-farm sources (target: >70%)
- [ ] % of water reused (target: >80%)
- [ ] Number of revenue streams (target: 5-7)
- [ ] Net energy ratio (output/input, target: >3:1)
- [ ] Biodiversity index increasing (monitor annually)
- [ ] Soil organic matter trending up (test annually)
- [ ] Profitability per acre (should exceed separate systems)

---

## Common Integration Mistakes

❌ **Over-complexity in Year 1**
✅ Phase implementation over 3-5 years

❌ **Mismatched scales (bottlenecks)**
✅ Size processing to match production

❌ **Ignoring seasonal variations**
✅ Plan for peak and low periods

❌ **Single revenue stream dependence**
✅ Diversify income sources (5-7 streams)

❌ **Inadequate water storage**
✅ Size for drought periods (30-90 days)

❌ **No monitoring/feedback loops**
✅ Track metrics, adapt continuously

---

## Example: 5-Acre Integrated Farm

```
LAYOUT
======
CEA (greenhouse): 0.5 acres
Outdoor vegetables: 2 acres
Pasture/silvopasture: 1.5 acres
Agroforestry: 0.5 acres
Wetland/habitat: 0.5 acres

FLOWS
=====
Waste: 100 kg/day
→ Compost (60%), BSFL (20%), Vermicompost (20%)

Water: 500,000 gal/year needed
→ Rainwater (180,000 gal)
→ Greywater reuse (25,000 gal)
→ Municipal/well (295,000 gal)

ECONOMICS
=========
Revenue: $200,000/year (Year 5)
- CEA: $50,000
- Outdoor vegetables: $80,000
- Pasture products: $30,000
- Value-added: $20,000
- Ecosystem services: $10,000
- Education/agritourism: $10,000

Costs: $140,000/year
Net: $60,000 (30% margin)

Investment: $280,000
ROI: 21% annually (Year 5)
Payback: 4-5 years
```

---

*Integrated System Design Cheatsheet | Course 405 | EcoFusion Academy*
