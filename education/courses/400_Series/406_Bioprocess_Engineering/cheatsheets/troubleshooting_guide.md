# Bioprocess Troubleshooting Guide - Quick Reference

## Nitrification Problems

### Problem: High Effluent Ammonia

**Symptoms:** NH₃-N >2 mg/L in effluent

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Low DO | Measure DO in biofilter | Increase aeration, clean diffusers |
| Low temperature | Check water temp | Increase HRT, heat water if viable |
| Low pH/alkalinity | Measure pH, alkalinity | Add NaHCO₃ or CaCO₃ buffer |
| Insufficient capacity | Calculate actual vs. design OLR | Expand biofilter, reduce loading |
| Toxic inhibition | Check for chlorine, medications | Dilute, flush system, review inputs |
| Insufficient biofilm | Visual inspection, startup status | Allow more maturation time, seed |

### Problem: Nitrite Accumulation

**Symptoms:** NO₂⁻-N >1 mg/L, NO₃⁻-N low

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Low DO in zones | DO profile throughout biofilter | Improve mixing, increase aeration |
| High free ammonia | Calculate NH₃ from pH, temp, TAN | Lower pH to <8.0, dilute with freshwater |
| Incomplete startup | Days since startup, NO₃⁻ trend | Continue maturation, reduce loading |
| Nitrobacter inhibition | pH, temperature, organics | Optimize conditions, reduce organics |

---

## Denitrification Problems

### Problem: Incomplete Denitrification

**Symptoms:** NO₃⁻-N >10 mg/L in effluent, low BOD

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Insufficient carbon | COD:N ratio, carbon dose | Increase carbon source 10-20% |
| Oxygen intrusion | DO in anoxic zone (should be <0.5) | Check for air leaks, improve sealing |
| Short HRT | Calculate actual HRT | Increase reactor volume, reduce flow |
| Low temperature | Measure temperature | Increase HRT proportionally |
| High nitrite | NO₂⁻-N concentration | Address upstream nitrification |

### Problem: Excess BOD in Effluent

**Symptoms:** BOD >5 mg/L, NO₃⁻-N near zero

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Carbon overdose | Compare dose to theoretical need | Reduce carbon addition 10-20% |
| Low nitrate load | Measure influent NO₃⁻-N | Reduce carbon proportionally |
| Short-circuiting | Tracer study, flow patterns | Improve mixing, add baffles |

---

## Anaerobic Digestion Problems

### Problem: Low Biogas Production

**Symptoms:** <70% of expected biogas yield

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Low temperature | Digester temperature | Heat to 35-37°C (mesophilic) |
| Overloading | OLR vs. design | Reduce feed rate 20-30% |
| Inhibition | VFA, ammonia, pH | See specific inhibition solutions below |
| Poor mixing | Visual/flow patterns | Increase mixing intensity |
| Substrate quality | VS content, biodegradability | Improve feedstock quality, co-digest |

### Problem: VFA Accumulation

**Symptoms:** VFA >2000 mg/L, pH dropping

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Overloading | OLR, feeding rate | Reduce feed 30-50%, dilute with water |
| Low alkalinity | Alkalinity <2000 mg/L CaCO₃ | Add NaHCO₃ or lime |
| Temperature shock | Temperature history | Stabilize temp, reduce feed temporarily |
| Toxic compounds | Review inputs (disinfectants, etc.) | Identify and eliminate source |

### Problem: Ammonia Inhibition

**Symptoms:** TAN >3000 mg/L, low biogas, VFA accumulation

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| High-protein substrate | Substrate composition, TAN trend | Co-digest with C-rich materials |
| Low C:N ratio | Calculate C:N | Add carbohydrate-rich substrates |
| High pH | pH >8.0 increases free NH₃ | Lower pH slightly (avoid rapid changes) |

---

## Composting Problems

### Problem: Low Temperature (<40°C)

**Symptoms:** Pile not heating, slow decomposition

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Pile too small | Volume calculation | Increase pile size (>1 m³) |
| Insufficient N | C:N ratio >40:1 | Add N-rich materials (manure, food waste) |
| Too wet/dry | Squeeze test, moisture | Adjust to 50-60% moisture |
| Insufficient O₂ | Odor (anaerobic smell?) | Turn pile, increase aeration |
| Cold weather | Ambient temperature | Insulate pile, increase size |

### Problem: Excessive Temperature (>70°C)

**Symptoms:** Very hot pile, possibly smoking

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| High N content | C:N ratio <20:1 | Add C-rich bulking agents |
| Insufficient aeration | Air flow, pile density | Increase turning, forced aeration |
| Large pile | Dimensions | Reduce pile size, spread out |

### Problem: Ammonia Odor

**Symptoms:** Strong ammonia smell

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Low C:N ratio | Calculate from inputs | Add carbon-rich materials immediately |
| Anaerobic zones | Turn pile, check interior | Increase aeration/turning frequency |
| High pH | Measure pH | Add acidic amendments or turn |

### Problem: Putrid/Sulfur Odor

**Symptoms:** Rotten egg smell, black/gray material

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Anaerobic conditions | Moisture >70%, compaction | Add dry bulking agents, turn immediately |
| Too wet | Squeeze test | Mix in dry materials (wood chips, straw) |
| Poor structure | Particle size, compaction | Add coarse bulking agents |

---

## Algae Cultivation Problems

### Problem: Low Productivity

**Symptoms:** <50% of expected growth rate

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Light limitation | Light intensity, self-shading | Increase lighting, reduce density, clean walls |
| Nutrient depletion | N, P, trace metals | Supplement nutrients based on analysis |
| CO₂ limitation | pH drift high, CO₂ supply | Increase CO₂ injection, check pH |
| Temperature | Suboptimal (<20°C or >35°C) | Heat or cool to optimal range (25-30°C) |
| Contamination | Microscopy, culture appearance | Restart with axenic culture, improve sterility |

### Problem: Culture Crash

**Symptoms:** Sudden death, clearing of culture

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Viral infection | Sudden onset, clear supernatant | Discard, sterilize equipment, restart |
| Grazing (zooplankton) | Microscopy | Filter harvest, reduce nutrient loading |
| Toxin accumulation | O₂ supersaturation, high pH | Increase gas exchange, dilute culture |
| Chemical shock | Recent chemical additions | Review protocols, dilute if possible |

---

## Fermentation Problems

### Problem: Low Product Yield

**Symptoms:** <80% of expected yield

**Possible Causes & Solutions:**

| Cause | Check | Solution |
|-------|-------|----------|
| Contamination | Microscopy, plate count | Improve sterilization, check air filters |
| Suboptimal conditions | pH, temp, DO vs. optimal | Adjust to optimal for organism/product |
| Substrate limitation | Residual substrate, feeding | Increase substrate or feeding rate |
| Product inhibition | Product concentration | Implement fed-batch, product removal |
| Genetic instability | Compare to frozen stock | Restart from master cell bank |

---

## General Diagnostic Flow

```
1. OBSERVE symptoms
   ↓
2. MEASURE key parameters (pH, temp, DO, concentrations)
   ↓
3. COMPARE to normal/design values
   ↓
4. HYPOTHESIZE causes (use this guide)
   ↓
5. TEST hypothesis (change one variable)
   ↓
6. MONITOR response (24-72 hours typically)
   ↓
7. DOCUMENT findings and actions
```

---

## Emergency Response

### Immediate Actions for System Failure:

1. **STOP FEEDING** - Halt substrate/waste input
2. **DILUTE** - Add clean water if possible
3. **AERATE** - Maximize oxygen (if aerobic process)
4. **SAMPLE** - Collect samples before corrective action
5. **DOCUMENT** - Record timeline, observations, measurements
6. **NOTIFY** - Alert supervisor/management
7. **CORRECT** - Implement gradual corrections
8. **MONITOR** - Intensive monitoring until stable

### Recovery Protocol:

- **DO NOT** make multiple large changes simultaneously
- **DO** allow time for microbial response (1-7 days typical)
- **DO** reduce loading to 50% during recovery
- **DO** maintain optimal environmental conditions
- **DOCUMENT** recovery progress daily

---

**When in Doubt:**
1. Reduce loading rate
2. Optimize environmental conditions (T, pH, DO)
3. Increase monitoring frequency
4. Consult process experts
5. Review operational logs for patterns
