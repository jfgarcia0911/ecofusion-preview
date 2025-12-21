# Master Grower Troubleshooting Decision Trees

## Professional Handout - Quick Diagnostic Reference

---

## How to Use This Handout

1. **Observe symptoms** carefully (take photos if possible)
2. **Follow the decision tree** for the observed problem
3. **Gather data** (environmental logs, measurements, tests)
4. **Confirm diagnosis** before implementing solution
5. **Document** findings and corrective actions
6. **Monitor** to verify problem resolution

---

## Decision Tree 1: Leaf Yellowing (Chlorosis)

```
START: Observe leaf yellowing/chlorosis
│
├─ WHERE IS YELLOWING OCCURRING?
│
├─── OLDER LEAVES (Lower canopy, mature leaves yellow first)
│    │
│    ├─ PATTERN: Uniform yellowing across entire leaf
│    │  └─→ DIAGNOSIS: Nitrogen (N) Deficiency
│    │      Action: Check EC (is it too low?)
│    │      Solution: Increase N in fertilizer, raise EC
│    │      Prevention: Regular tissue analysis, adequate EC for growth stage
│    │
│    ├─ PATTERN: Interveinal (yellow between veins, veins stay green)
│    │  └─→ DIAGNOSIS: Magnesium (Mg) Deficiency
│    │      Action: Check pH, check Mg levels in solution
│    │      Solution: Add Mg sulfate (Epsom salt), adjust pH if needed
│    │      Prevention: Balanced nutrition, monitor Ca:Mg ratio (3-5:1)
│    │
│    └─ PATTERN: Marginal necrosis (leaf edges burning/dying)
│       └─→ DIAGNOSIS: Potassium (K) Deficiency
│           Action: Check K levels, check EC
│           Solution: Increase K in solution
│           Prevention: Adequate K, especially during fruiting
│
├─── YOUNGER LEAVES (Upper canopy, new growth affected)
│    │
│    ├─ PATTERN: Interveinal chlorosis (yellow between veins)
│    │  └─→ DIAGNOSIS: Iron (Fe) Deficiency (MOST COMMON)
│    │      Action: CHECK pH FIRST (primary cause if pH >6.5)
│    │      Solution:
│    │        - If pH high: Lower to 5.5-6.0 (fixes 90% of cases)
│    │        - If pH OK: Add chelated Fe (Fe-DTPA or Fe-EDDHA)
│    │      Prevention: Monitor and maintain pH 5.5-6.0 in hydroponics
│    │
│    ├─ PATTERN: Uniform yellowing
│    │  └─→ DIAGNOSIS: Sulfur (S) Deficiency OR Overwatering
│    │      Action: Check S levels, check substrate moisture
│    │      Solution: Add S (usually sulfate form), improve drainage
│    │      Prevention: Balanced nutrition, proper irrigation
│    │
│    └─ PATTERN: Growing point death, necrosis
│       └─→ DIAGNOSIS: Calcium (Ca) or Boron (B) Deficiency
│           Action: Check transpiration (VPD), check Ca/B levels
│           Solution: Improve VPD (reduce humidity), ensure adequate Ca/B
│           Prevention: VPD management 0.8-1.2 kPa, consistent irrigation
│
└─── RANDOM PATTERN (Not age-specific, scattered)
     │
     ├─ WITH MOTTLING/MOSAIC PATTERN
     │  └─→ DIAGNOSIS: Possible VIRAL INFECTION
     │      Action: Isolate plant, inspect for vectors (aphids, thrips)
     │      Solution: Remove infected plant, control vectors
     │      Prevention: Sanitation, vector control, resistant varieties
     │
     └─ WITH WILTING
        └─→ DIAGNOSIS: Root Disease (Pythium, Fusarium) OR Water Stress
            Action: Examine roots (brown, mushy = disease; white, healthy = water stress)
            Solution:
              - Disease: Remove plant, improve aeration, consider biocontrol
              - Water stress: Adjust irrigation, check system function
            Prevention: Proper aeration, avoid overwatering, biosecurity
```

---

## Decision Tree 2: Slow or Stunted Growth

```
START: Plants growing slower than expected
│
├─ RECENT CHANGES?
│  (New seeds, environment change, system modifications)
│  │
│  ├─ YES → Identify recent change and revert/adjust
│  └─ NO → Continue diagnosis
│
├─ CHECK ENVIRONMENTAL CONDITIONS
│
├─── LIGHT
│    └─ Measure PPFD at canopy
│        ├─ Below target DLI → Increase light intensity or duration
│        ├─ Excessive (bleaching, necrosis) → Reduce intensity
│        └─ Adequate → Check next factor
│
├─── TEMPERATURE
│    └─ Review temperature logs
│        ├─ Below optimal range → Increase heating
│        ├─ Above optimal (heat stress) → Improve cooling
│        ├─ High variability (±5°C swings) → Stabilize control system
│        └─ Optimal → Check next factor
│
├─── NUTRITION
│    └─ Check EC and pH
│        ├─ EC too low → Increase fertilizer concentration
│        ├─ EC too high → Dilute solution, flush substrate
│        ├─ pH out of range → Adjust to 5.5-6.5
│        └─ EC and pH OK → Check nutrient balance (tissue analysis)
│
├─── CO₂
│    └─ Measure CO₂ during photoperiod
│        ├─ Below 600 ppm → Check injection system, add/increase CO₂
│        └─ Adequate → Check next factor
│
├─── WATER/ROOTS
│    └─ Check substrate moisture and root health
│        ├─ Overwatering (roots brown, mushy) → Improve aeration, reduce irrigation
│        ├─ Underwatering (wilting, dry substrate) → Increase irrigation
│        ├─ Root disease (brown, foul smell) → Treat disease, improve conditions
│        └─ Healthy roots → Check next factor
│
└─── GENETIC/SEED QUALITY
     └─ If all environmental factors optimal:
         ├─ Poor germination → Check seed lot quality, storage conditions
         ├─ Weak seedlings → Evaluate seed source, consider variety change
         └─ Consistent slow growth → May be normal for variety (compare to baseline)

SOLUTION PRIORITY:
1. Fix pH (if out of range) - affects everything
2. Optimize light (DLI) - primary driver of photosynthesis
3. Adjust temperature - within optimal range for species
4. Ensure adequate CO₂ - 800-1200 ppm for CEA
5. Balance nutrition - EC and complete nutrient profile
6. Check water/roots - healthy root system essential
```

---

## Decision Tree 3: Quality Issues

```
START: Quality problem observed
│
├─ WHAT TYPE OF QUALITY ISSUE?
│
├─── TIP BURN (Necrotic leaf margins, lettuce especially)
│    │
│    └─ ROOT CAUSE: Calcium deficiency at growing tips
│        │
│        ├─ CHECK: Humidity/VPD
│        │  └─ High humidity (>75%, VPD <0.8) → MOST COMMON CAUSE
│        │      Solution: Reduce humidity to 60-70% RH, increase air circulation
│        │
│        ├─ CHECK: Calcium in solution
│        │  └─ Low Ca (<100 ppm) → Increase Ca in nutrient solution
│        │
│        ├─ CHECK: Rapid growth
│        │  └─ Very rapid growth (large plants) → May need higher Ca, reduce growth rate slightly
│        │
│        └─ PREVENTION:
│            - Maintain VPD 0.8-1.2 kPa
│            - Adequate Ca (100-150 ppm)
│            - Consistent moisture (avoid stress)
│            - Good air circulation
│
├─── BLOSSOM END ROT (Dark, sunken spot on fruit bottom - tomato, pepper)
│    │
│    └─ Same as tip burn (Ca deficiency)
│        Solution: Improve VPD, consistent irrigation, adequate Ca
│
├─── BITTERNESS (Lettuce, herbs)
│    │
│    └─ CAUSES:
│        ├─ Bolting (flowering initiation) → Harvest before bolting, control photoperiod
│        ├─ Heat stress (>26°C) → Improve cooling, harvest earlier
│        ├─ Water stress → Consistent irrigation
│        └─ Over-maturity → Harvest at proper stage
│
├─── POOR COLOR (Pale lettuce, insufficient red in colored varieties)
│    │
│    └─ CAUSES:
│        ├─ Insufficient light (DLI too low) → Increase light intensity
│        ├─ Wrong spectrum (lack of UV/blue) → Adjust spectrum (more blue for red varieties)
│        ├─ Temperature (too warm) → Cool temperatures enhance color (16-18°C final week)
│        └─ Nutrition (excessive N) → Reduce N in final week
│
├─── SMALL SIZE (Undersized heads or fruit)
│    │
│    └─ CAUSES:
│        ├─ Insufficient light (DLI) → Increase to target DLI for crop
│        ├─ Short cycle time (harvested too early) → Extend growth period
│        ├─ High density (competition) → Reduce plant spacing
│        ├─ Nutrient deficiency → Check EC, ensure balanced nutrition
│        └─ Pest/disease stress → Implement IPM, resolve health issues
│
├─── POOR TEXTURE (Soft, wilted, not crisp)
│    │
│    └─ CAUSES:
│        ├─ Excessive N (soft tissue) → Reduce N, increase K
│        ├─ Ca deficiency → Ensure adequate Ca
│        ├─ Post-harvest (slow cooling) → Cool within 1 hour to 2°C
│        ├─ Water stress at harvest → Ensure turgid at harvest (morning)
│        └─ Over-maturity → Harvest at peak quality
│
└─── PEST/DISEASE DAMAGE (Visible damage)
     │
     └─ See Pest/Disease Decision Tree (below)
```

---

## Decision Tree 4: Pest & Disease Diagnosis

```
START: Observe plant damage or abnormality
│
├─ TYPE OF SYMPTOM?
│
├─── INSECT DAMAGE (Holes, stippling, honeydew, visible insects)
│    │
│    ├─ STIPPLING (Small yellow/white dots on leaves)
│    │  └─→ SPIDER MITES
│    │      Check: Look for webbing, tiny moving dots (use magnification)
│    │      Solution: Phytoseiulus persimilis (predatory mite), horticultural oil
│    │      Prevention: Increase humidity (>60%), regular scouting
│    │
│    ├─ HONEYDEW (Sticky substance on leaves, sooty mold)
│    │  └─→ APHIDS, WHITEFLIES, or SCALE
│    │      Check: Look on underside of leaves for insects
│    │      Aphids: Soft-bodied, clustered, various colors
│    │      Whiteflies: Small white flying insects (disturb plant to see)
│    │      Scale: Brown bumps on stems/leaves
│    │      Solutions:
│    │        - Aphids: Aphidius colemani, Aphidoletes, insecticidal soap
│    │        - Whiteflies: Encarsia formosa, yellow sticky traps
│    │        - Scale: Horticultural oil, manual removal
│    │
│    ├─ SCARRING/SILVERING (Surface damage, silvery appearance)
│    │  └─→ THRIPS
│    │      Check: Blue sticky traps, shake flowers onto white paper
│    │      Solution: Amblyseius cucumeris, Orius, spinosad
│    │      Prevention: Screens on vents, remove flowers, beneficial mite releases
│    │
│    ├─ CHEWING DAMAGE (Holes in leaves, ragged edges)
│    │  └─→ CATERPILLARS, BEETLES
│    │      Check: Look for larvae, frass (droppings), eggs
│    │      Solution: Bacillus thuringiensis (Bt), manual removal
│    │      Prevention: Exclusion (screens), monitoring
│    │
│    └─ DISTORTED GROWTH (Curled, twisted leaves)
│       └─→ APHIDS or VIRAL (transmitted by aphids/thrips)
│           Check: Look for aphids, test for virus if widespread
│           Solution: Control vectors, remove infected plants if virus confirmed
│
└─── DISEASE SYMPTOMS (Wilting, spots, mold, rot)
     │
     ├─ WILTING (Without obvious water stress)
     │  └─→ ROOT DISEASE (Pythium, Fusarium)
     │      Check: Examine roots (brown, mushy, foul smell)
     │      Solution:
     │        - Remove infected plants immediately
     │        - Improve aeration (reduce watering, increase oxygen)
     │        - Apply beneficial microbes (Trichoderma, beneficial bacteria)
     │        - Hydrogen peroxide treatment (curative but stressful)
     │      Prevention: Avoid overwatering, good drainage, biocontrol
     │
     ├─ LEAF SPOTS (Brown, black, or yellow spots)
     │  │
     │  ├─ Water-soaked, angular spots → BACTERIAL LEAF SPOT
     │  │  Solution: Remove infected tissue, copper bactericide, reduce humidity
     │  │
     │  └─ Circular, dry spots with rings → FUNGAL LEAF SPOT
     │     Solution: Remove infected leaves, improve air circulation, fungicide if severe
     │
     ├─ POWDERY WHITE COATING (White powder on leaves)
     │  └─→ POWDERY MILDEW
     │      Solution: Reduce humidity (<65%), air circulation, sulfur, potassium bicarbonate
     │      Prevention: Resistant varieties, environmental control
     │
     ├─ GRAY FUZZY MOLD (On leaves, stems, fruit)
     │  └─→ BOTRYTIS (Gray Mold)
     │      Solution: Remove infected tissue immediately, reduce humidity, air circulation
     │      Prevention: Avoid leaf wetness, humidity <70%, remove dead tissue promptly
     │
     └─ YELLOWING + WILTING + VASCULAR BROWNING (Cut stem shows brown streaks)
        └─→ FUSARIUM WILT or VERTICILLIUM WILT
            Solution: No cure - remove and destroy plant
            Prevention: Resistant varieties, avoid substrate reuse, sanitation
```

---

## Quick Reference: When to Escalate

**IMMEDIATE ACTION REQUIRED** (Don't wait):
- Widespread disease outbreak (>20% of plants showing symptoms)
- Equipment failure affecting multiple zones (HVAC, irrigation, lights)
- Food safety concern (contamination, pest in harvested product)
- Injury or safety incident

**URGENT** (Address within 24 hours):
- Environmental parameter out of range for >4 hours
- Moderate pest pressure (above threshold, spreading)
- Quality issues affecting >15% of production
- Team member reports significant problem

**IMPORTANT** (Address within 1 week):
- Isolated plant health issues (<5% of crop)
- Minor equipment malfunction (non-critical)
- Quality concerns on small batch
- Improvement opportunities identified

---

## Documentation Template

**For each diagnosed problem, document**:

```
Date: _______________
Problem: _______________
Location/Batch: _______________
Symptom Description: _______________
Decision Tree Used: _______________
Diagnosis: _______________
Root Cause: _______________
Corrective Action: _______________
Person Responsible: _______________
Expected Resolution: _______________
Follow-up Date: _______________
Actual Outcome: _______________
Lessons Learned: _______________
Prevention Measures: _______________
```

---

## Master Grower Tips

1. **Don't Jump to Conclusions**: Follow the decision tree systematically
2. **Data First**: Measure and test before diagnosing (pH, EC, PPFD, etc.)
3. **Look for Patterns**: Is it one plant, one zone, or facility-wide?
4. **Check Recent Changes**: Often problems trace to something that changed recently
5. **Consider Interactions**: Multiple factors often combine (e.g., high temp + low humidity + high light = stress)
6. **Fix Root Causes**: Addressing symptoms without fixing causes = recurrence
7. **Document Everything**: Build institutional knowledge, track trends
8. **When in Doubt**: Ask for help (peers, extension services, consultants) - no shame in second opinions

---

*Laminate this handout for use in production areas. Update based on your specific facility's common issues.*

**Version 1.0** | Master Grower Certification Program | EcoFusion Academy
