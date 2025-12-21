# Module 12: Biological Troubleshooting

## Overview
When biological systems malfunction, systematic diagnosis and targeted intervention are essential. This module provides decision trees, diagnostic protocols, and solutions for common biological problems in aquaponic systems.

**Duration:** 1 hour
**Learning Objectives:**
- Diagnose biological system failures systematically
- Differentiate between microbial, chemical, and physical causes
- Apply targeted solutions to biological problems
- Prevent recurring biological failures
- Document and learn from system incidents

---

## Systematic Troubleshooting Approach

### The OBSERVE Framework

```
O - OBSERVE symptoms carefully
B - BASELINE parameters (compare to normal)
S - SYSTEMATIC testing (don't guess)
E - ELIMINATE variables (change one thing at a time)
R - RECORD findings (document for future)
V - VERIFY solution (confirm problem solved)
E - EVALUATE prevention (avoid recurrence)
```

---

## Problem Category 1: Nitrification Failures

### Symptom: Sudden Ammonia Spike in Established System

**Observation Checklist:**
- [ ] Ammonia level (test actual value)
- [ ] Nitrite level (may also spike)
- [ ] Nitrate level (may drop if nitrification stopped)
- [ ] pH (may have dropped)
- [ ] Alkalinity (may be depleted)
- [ ] Temperature (check for extremes)
- [ ] Recent system changes (chemicals, treatments, water source changes)

**Decision Tree:**

```
Ammonia Spike (Established System)
        │
        ├─→ pH < 6.0?
        │   YES → Acidic crash
        │          └→ Add buffer (potassium carbonate)
        │             Partial water change
        │             Reduce feeding
        │             Monitor recovery (may take 1-2 weeks)
        │
        ├─→ Recent chemical addition (chlorine, meds, cleaners)?
        │   YES → Chemical poisoning of nitrifiers
        │          └→ Massive water change (50-75%)
        │             Dechlorinate new water thoroughly
        │             Add commercial nitrifying bacteria
        │             Cease feeding for 24-48 hrs
        │             Expect 2-4 week recovery
        │
        ├─→ Temperature extreme (<50°F or >95°F)?
        │   YES → Temperature stress/kill
        │          └→ Correct temperature immediately
        │             Reduce feeding
        │             Add commercial nitrifiers (insurance)
        │             Gradual recovery over 1-2 weeks
        │
        ├─→ Massive feeding increase or dead fish?
        │   YES → Overload of biofilter capacity
        │          └→ Remove dead organisms immediately
        │             Reduce feeding to 50%
        │             Increase aeration (DO >6 mg/L)
        │             Partial water change (25%)
        │             System should stabilize in 3-7 days
        │
        └─→ None of above?
            → Check DO (must be >4 mg/L in biofilter)
               Check alkalinity (needs 80+ mg/L)
               Check for flow blockages (biofilter bypassed?)
               Test for unknown toxins (contact water authority)
```

---

### Symptom: Persistent Nitrite (Weeks After Cycling Started)

**Typical in Week 3-5 of New System**

**Checklist:**
- [ ] Nitrite level (actual value)
- [ ] Ammonia level (should be declining or near zero)
- [ ] pH (needs >6.5 for NOB)
- [ ] Temperature (optimal 75-85°F)
- [ ] Free ammonia calculation (high pH + ammonia = toxic free NH3, inhibits NOB)

**Solutions:**

```
If pH < 6.5:
└→ Raise pH to 7.0-7.5 using buffer
   NOB activity improves

If pH > 8.5 AND ammonia present:
└→ Free ammonia inhibiting NOB
   Reduce feeding (lower ammonia)
   Dilute with water change
   pH will naturally drop as nitrification proceeds

If pH normal (6.5-7.5):
└→ Patience (NOB slower to establish than AOB)
   Continue light feeding
   Add Nitrospira-specific inoculant (if available)
   Expect resolution in 1-2 weeks

If persistent beyond 6 weeks:
└→ Review all parameters
   Consider media type (some inhibit bacteria)
   Check for recurring chemical contamination
   Restart with fresh media if necessary
```

---

## Problem Category 2: Biofilm Issues

### Symptom: Excessive Biofilm Causing Clogging

**Observation:**
- Reduced flow through media beds
- Water backs up or overflows
- Anaerobic odors (H2S)
- Black deposits on media

**Root Causes:**
```
Overfeeding → Excess organics → Heterotroph explosion → Thick biofilm
              or
Insufficient pre-filtration → Solids accumulate → Organic buildup → Clogging
```

**Solutions:**

**Immediate (Emergency):**
```
1. Reduce feeding to 25-50% immediately
2. Increase aeration dramatically
3. If overflow risk, bypass problem bed temporarily
4. Backwash if system designed for it (gently!)
```

**Short-Term (Days-Weeks):**
```
1. Add mechanical filtration upstream (swirl filter, settling tank)
2. Gradually restore feeding over 2-3 weeks
3. Monitor flow rates daily
4. Consider media replacement if severely clogged (extreme cases)
```

**Long-Term (Prevention):**
```
1. Balance feeding rate to biofilter capacity
2. Improve solids removal (clarifiers, screens)
3. Design with backwash capability if high-solids system
4. Regular maintenance schedule
```

---

### Symptom: Insufficient Biofilm (New System Not Cycling)

**Observation:**
- Week 4+ and still no nitrite peak
- Very low or no nitrate production
- Ammonia accumulates
- Media looks clean (no tan/brown film)

**Causes:**
```
1. No bacterial source (sterile system, chlorinated water)
2. Toxic environment (chemicals, heavy metals)
3. Extreme pH (< 5.5 or > 9.0)
4. Very low temperature (< 50°F)
5. UV or ozone killing bacteria
```

**Solutions:**

```
Verify Environment:
├─ Dechlorinate ALL water (test for chlorine/chloramine)
├─ Test pH (adjust to 7.0-7.5)
├─ Test temperature (heat to 65-75°F minimum)
├─ Check DO (>4 mg/L in biofilter)
└─ Turn off UV/ozone if present

Inoculate:
├─ Add commercial nitrifying bacteria (high-quality product)
├─ Add established media from healthy system (1/4 volume best)
├─ Add "dirty" pond or aquarium water (if pathogen-free source)
└─ Repeat inoculation weekly for 3 weeks

Feed Lightly:
├─ Small fish load (10-20% of target)
├─ OR ghost feeding (add pure ammonia to 2-3 ppm)
└─ Patient monitoring

Expected: Cycling should begin within 1-2 weeks of inoculation
```

---

## Problem Category 3: Root Zone Problems

### Symptom: Brown, Mushy Roots (Pythium/Phytophthora)

**Observation:**
- Roots brown to black (healthy = white/cream)
- Mushy texture (healthy = firm)
- Foul odor from roots
- Plants wilting despite adequate water
- Stunted growth

**Diagnosis:**

```
Root Examination:
├─ Color: Brown/black = likely pathogen or anoxia
├─ Texture: Mushy = pathogen; firm but brown = anoxia (low DO)
├─ Smell: Foul = anaerobic decomposition; odorless = may be Pythium
└─ Pattern: All plants = environmental; scattered = pathogen spreading

DO Test (Critical):
└─ Measure DO in root zone
   < 3 mg/L = anoxia likely primary cause
   > 5 mg/L = pathogen more likely
```

**Solutions:**

**If Low DO (Anoxia):**
```
1. Increase aeration to root zone immediately
   • Add air stones to media beds
   • Increase water flow (oxygen-rich water)
2. Reduce organic load (less feeding)
3. Clean out accumulated solids
4. Implement flood-and-drain (gas exchange)
5. Roots may recover if damage not too severe
```

**If Pathogen (Pythium/Phytophthora):**
```
1. Isolate affected plants (if few)
2. Remove and dispose of severely affected plants (don't compost in system!)
3. Apply biocontrol:
   • Trichoderma harzianum root drench (2-3x per week)
   • Bacillus subtilis drench (weekly)
4. Increase DO to >5 mg/L (inhibits oomycetes)
5. Reduce water temperature if >75°F (favors pathogen)
6. H2O2 treatment (last resort):
   • 30-second root dip in 3% H2O2
   • Careful to avoid fish tank contamination
7. Inoculate neighboring plants preventively
```

---

### Symptom: Slow Plant Growth, Nutrient Deficiency Symptoms

**Could be root microbiome issue or nutrient issue (diagnose carefully!)**

**Checklist:**
- [ ] Test water for N, P, K (are nutrients present?)
- [ ] Inspect roots (healthy-looking roots but slow growth = uptake issue)
- [ ] Check pH (6.0-6.5 optimal for nutrient availability)
- [ ] Review fish feeding (adequate nutrients going in?)

**If nutrients present but poor growth:**

```
Likely Root Microbiome or Root Health Issue:

Solutions:
1. Apply PGPR (root inoculation)
   • Bacillus subtilis
   • Pseudomonas fluorescens
   • Azospirillum (auxin production)
2. Apply mycorrhizae (if media system)
   • At transplant or drench
3. Check DO in root zone (>5 mg/L needed)
4. Review for root pathogens (see above)
5. Verify pH in optimal range (6.0-6.5)

Response time: 2-4 weeks if microbial intervention successful
```

---

## Problem Category 4: Fish Health Related to Microbiology

### Symptom: Poor Fish Growth/High FCR Despite Adequate Feeding

**Possible Gut Microbiome Issue**

**Checklist:**
- [ ] Fish eating normally? (appetite check)
- [ ] Fecal characteristics? (firm and brown = healthy; stringy/white = dysbiosis)
- [ ] Water quality OK? (stress affects gut)
- [ ] Recent antibiotic treatment? (microbiome disrupted)
- [ ] Feed quality? (fresh, not rancid)

**If Suspected Dysbiosis:**

```
Probiotic Intervention:
1. Implement daily probiotic feeding
   • Bacillus subtilis 10^8 CFU/g feed
   • Top-coat existing feed or use probiotic feed
2. Continue for 3-4 weeks minimum
3. Add prebiotic (optional):
   • FOS or MOS at 0.5-1% of feed
4. Ensure excellent water quality (reduce stress)

Expected: Improved FCR within 2-3 weeks if gut issue
```

---

### Symptom: Disease Outbreak (Bacterial)

**Post-Treatment Microbiome Restoration is CRITICAL**

**After Antibiotic Treatment:**

```
Recovery Protocol:
1. Complete full antibiotic course (don't stop early)
2. Move treated fish back to main system (or vice versa)
3. IMMEDIATELY begin probiotic feeding:
   • Daily for first 2 weeks
   • Twice daily if severe dysbiosis expected
   • High dose: 10^8-10^9 CFU/g feed
4. Water probiotics (optional):
   • Add to tank weekly for 4 weeks
   • 10^6 CFU/mL
5. Monitor closely:
   • Appetite, behavior
   • Feces quality
   • Growth resumption
6. Expect:
   • Reduced growth for 2-4 weeks (recovery period)
   • Gradual return to normal by week 4-6
   • May have increased disease susceptibility during recovery

Prevention:
└─ Treat in hospital tank if possible (preserve main system microbiome)
```

---

## Problem Category 5: System-Wide Microbial Imbalances

### Symptom: Chronic Bacterial Blooms (Cloudy Water)

**Observation:**
- Persistent white/gray cloudy water
- Cleared temporarily, returns quickly
- Not algae (green) or sediment

**Causes:**
```
Organic Overload → Free-Floating Heterotrophs → Cloudy Water

Sources of excess organics:
• Overfeeding
• Dead fish/plant material
• Poor solids removal
• Overstocked system
```

**Solutions:**

**Immediate:**
```
1. Reduce feeding to 50% for 1 week
2. Increase aeration (support bacterial respiration)
3. Check for and remove any dead fish/snails
4. Remove decaying plant matter
```

**Systematic:**
```
1. Improve mechanical filtration:
   • Add/upgrade swirl filter, settling tank, or screens
   • Radial flow separator for fine particles
2. Review feeding practices:
   • Reduce to match actual fish needs
   • Better quality feed (less dust, better water stability)
3. Allow protozoan population to establish:
   • Protozoa graze free-floating bacteria
   • Takes 1-3 weeks
   • DO NOT use UV during this period (kills protozoa)
   • Result: Clear water naturally

Long-term:
• Maintain feeding discipline
• Regular filter maintenance
• Monitor fish biomass (don't overstock)
```

---

### Symptom: Anaerobic Smell (H2S) from System

**DANGER SIGNAL - Address Immediately**

**Sources:**
```
Sulfate-Reducing Bacteria (Desulfovibrio, Desulfotomaculum)
Active in:
• Deep sediment accumulations
• Dead zones (no flow)
• Clogged media beds
• Inside pipes or plumbing dead-ends
```

**Emergency Response:**

```
1. INCREASE AERATION TO MAXIMUM
   • H2S is toxic to fish (even at low ppm)
   • Oxidize H2S to sulfate (harmless)
   • Target DO >7-8 mg/L

2. IDENTIFY AND REMOVE SOURCE
   • Inspect for sediment accumulation (vacuum out)
   • Check all plumbing for stagnant zones
   • Backwash or clean clogged media beds
   • Check sump bottoms

3. IMPROVE CIRCULATION
   • Eliminate dead zones
   • Add circulation pumps if needed
   • Ensure all areas of system have flow

4. REDUCE ORGANIC LOAD
   • Cease feeding for 24 hours
   • Improve solids removal
   • Reduce stocking density if chronic issue

5. MONITOR FISH CLOSELY
   • H2S exposure symptoms: gasping, erratic swimming, red gills
   • Partial water change if fish distressed
   • Recovery usually quick once source removed
```

**Prevention:**
```
• No dead zones in system design
• Regular cleaning schedule (don't let sediment accumulate)
• Adequate circulation to all areas
• Aerobic conditions maintained (DO >3 mg/L everywhere)
```

---

## Diagnostic Tools and Tests

### Visual Inspection

| Observation | Normal | Problem | Likely Cause |
|-------------|--------|---------|--------------|
| **Water color** | Clear to slight tint | Cloudy white | Bacterial bloom |
| | | Green | Algae |
| | | Brown/yellow | Tannins, organics |
| **Biofilm on media** | Thin tan/brown | Thick, slimy | Organic overload |
| | | None (week 4+) | No colonization |
| **Root color** | White to cream | Brown, mushy | Pathogen or anoxia |
| **Fish feces** | Firm, brownish | Stringy, white | Dysbiosis |
| **Smell** | Earthy, clean | Rotten eggs (H2S) | Anaerobic zones |
| | | Ammonia | Nitrification failure |

---

### Water Quality Testing (Microbiology-Related)

**Essential Tests:**
- Ammonia (0-0.5 mg/L normal)
- Nitrite (0-0.5 mg/L normal)
- Nitrate (40-100 mg/L normal for aquaponics)
- pH (6.8-7.2 optimal)
- Dissolved oxygen (>5 mg/L)

**Supplemental:**
- Alkalinity (100-200 mg/L)
- Temperature (species-specific, generally 68-78°F)

---

### Microscopy (Advanced)

**Useful for:**
- Protozoa observation (indicates mature, balanced system)
- Biofilm structure examination
- Pathogen identification (requires expertise)

**Simple Protocol:**
```
1. Collect biofilm or water sample
2. Place drop on slide
3. Low power (40-100x)
4. Look for:
   • Swimming protozoa (ciliates, flagellates) = healthy
   • Bacteria (hard to see without staining, but clumps visible)
   • Filamentous bacteria (long chains) = may indicate bulking
```

---

## Prevention Strategies

### Maintain Baseline Documentation

**Record Keeping:**
```
Weekly Log:
• Ammonia, nitrite, nitrate
• pH, alkalinity
• Temperature
• Feeding amount
• Fish health observations
• Plant health observations
• Any interventions or changes

Benefit: Trend analysis, early problem detection
```

---

### Regular Maintenance Schedule

**Daily:**
- Visual inspection (fish, plants, water)
- Feed fish (observe appetite)
- Check aerators functioning

**Weekly:**
- Test ammonia, nitrite, nitrate, pH
- Remove dead plant material
- Check biofilter flow

**Monthly:**
- Test alkalinity
- Clean mechanical filters
- Inspect system for accumulation (sediment, algae)
- Review growth rates (fish and plants)

**Quarterly:**
- Deep system inspection
- Evaluate overall performance
- Plan improvements

---

### Proactive Microbial Management

**Inoculation Schedule (Preventive):**
```
New System:
• Nitrifying bacteria at startup + Week 2, 4, 6

Established System:
• PGPR to root zones monthly
• Fish probiotics in feed 3-5x per week (ongoing)
• Biocontrol agents preventively (if disease-prone crops)

Post-Disturbance:
• Re-inoculate after any chemical treatments
• After system downtime (winter shutdown)
• After major cleanings
```

---

## Case Study Examples

### Case 1: The pH Crash

**Situation:**
- Established system, 6 months old
- Sudden ammonia spike (5 mg/L)
- Fish gasping
- pH 5.8 (was 7.0)

**Diagnosis:**
- Alkalinity depleted → pH crashed → Nitrification stopped

**Solution:**
```
1. Emergency: 50% water change (new water pH 7.5, dechlorinated)
2. Added potassium carbonate to raise pH to 7.0
3. Reduced feeding to 25%
4. Monitored daily

Recovery:
• pH stabilized at 7.0 (maintained with buffer)
• Ammonia declined over 5 days
• Nitrite spiked briefly (day 3-5) then declined
• Full recovery by day 10

Lesson: Monitor alkalinity! Prevented with routine alkalinity testing.
```

---

### Case 2: The Chlorine Catastrophe

**Situation:**
- Large water change (40%) from municipal source
- Forgot to dechlorinate
- Next day: ammonia 8 mg/L, fish stressed, plants wilting

**Diagnosis:**
- Chlorine killed biofilter bacteria

**Solution:**
```
1. Emergency: 75% water change (dechlorinated!)
2. Added massive dose (3x normal) of commercial nitrifying bacteria
3. Ceased feeding for 48 hours
4. Daily water changes 25% for 5 days
5. Re-inoculated nitrifiers at Week 1, 2, 3

Recovery:
• Slow (4 weeks to full stability)
• Lost 20% of fish
• Plants recovered faster (direct water source after initial shock)

Lesson: ALWAYS DECHLORINATE. No exceptions!
```

---

### Case 3: The Mysterious Root Rot

**Situation:**
- Plants showing brown roots, wilting
- Water quality perfect (ammonia 0, nitrite 0, nitrate 80, pH 6.8)
- DO in fish tank 7 mg/L

**Investigation:**
- Tested DO in media bed: 2 mg/L!
- Problem: Media bed water flow too slow

**Solution:**
```
1. Increased flow rate to media beds (improved pump)
2. Added air stone to media bed
3. Applied Trichoderma to all plants (preventive)
4. Removed worst-affected plants

Recovery:
• New plants showed healthy white roots
• Existing plants slowly recovered over 3 weeks

Lesson: Don't assume DO is uniform - test in root zones!
```

---

## Summary

Systematic biological troubleshooting prevents trial-and-error and accelerates solutions:

**Key Takeaways:**
1. OBSERVE systematically before acting (don't guess!)
2. Most biological problems have environmental causes (temp, pH, DO, toxins)
3. Nitrification failures: Check pH, alkalinity, temperature, toxins in that order
4. Biofilm problems: Balance feeding, improve solids removal, maintain aerobic conditions
5. Root diseases: Verify DO in root zone first, then apply biocontrol
6. Fish gut health: Probiotics post-antibiotic treatment essential
7. Anaerobic smells (H2S): Emergency - increase aeration, find and remove source
8. Document baseline parameters and changes (enable trend analysis)
9. Prevention cheaper and easier than cure (routine maintenance)
10. Learn from each incident (improve system design and management)

**Next Module:** Advanced Monitoring - tools and techniques for tracking biological system performance.

---

*Module 12 of 14 - Course 311: Advanced Biological Systems*
*EcoFusion Academy*
