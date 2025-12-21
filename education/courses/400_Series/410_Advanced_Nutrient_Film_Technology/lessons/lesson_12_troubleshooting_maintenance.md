# Lesson 12: Troubleshooting and Preventive Maintenance

## Introduction

Systematic troubleshooting and preventive maintenance are essential for reliable NFT system operation. This lesson provides diagnostic frameworks, common problem solutions, maintenance schedules, and emergency response protocols to minimize downtime and prevent crop losses.

## Systematic Troubleshooting Methodology

### Diagnostic Framework

```
TROUBLESHOOTING PROCESS:

Step 1: OBSERVE
- Document symptoms precisely
- Note when problem started
- Identify affected area/plants
- Check recent changes

Step 2: GATHER DATA
- Measure all key parameters
- Review sensor logs
- Check equipment status
- Photograph issues

Step 3: ANALYZE
- Compare to normal ranges
- Identify patterns
- List possible causes
- Prioritize by likelihood

Step 4: HYPOTHESIZE
- Develop theory of root cause
- Predict test outcomes
- Plan diagnostic tests

Step 5: TEST
- Verify hypothesis
- Make single change
- Observe results
- Document findings

Step 6: CORRECT
- Implement solution
- Monitor response
- Verify resolution
- Document permanently

Step 7: PREVENT
- Update procedures
- Train staff
- Add monitoring
- Schedule maintenance
```

## Common Problems and Solutions

### Problem Category: Poor Plant Growth

```
SYMPTOM: Stunted growth, small leaves, pale color

DIAGNOSTIC TREE:

Check solution parameters
├─> pH out of range (not 5.5-6.5)?
│   └─> YES: Adjust pH, verify calibration
│       ├─> pH sensor drift? → Calibrate/replace
│       ├─> Excessive acid/base consumption? → Check water quality
│       └─> Rapid pH swings? → Increase solution volume
│
├─> EC too low (<1.4) or too high (>2.5)?
│   └─> YES: Adjust EC to target
│       ├─> EC falling rapidly? → Increase feeding, check consumption rate
│       ├─> EC rising? → Check evaporation, reduce nutrient concentration
│       └─> Unbalanced ratios? → Replace solution completely
│
├─> Temperature suboptimal (<18°C or >24°C)?
│   └─> YES: Adjust temperature
│       ├─> Solution too cold? → Add heater, insulate
│       ├─> Solution too warm? → Add chiller, increase circulation, shade
│       └─> Poor temperature control? → Upgrade HVAC
│
├─> Dissolved oxygen low (<6 mg/L)?
│   └─> YES: Increase oxygenation
│       ├─> Aeration equipment not working? → Repair/replace
│       ├─> Temperature too high? → Cool solution first
│       ├─> Root mat too dense? → Thin roots, increase flow
│       └─> Flow rate inadequate? → Increase pump capacity
│
├─> Light insufficient (<200 μmol/m²/s)?
│   └─> YES: Increase light intensity or photoperiod
│       ├─> Fixture failure? → Replace lamps/drivers
│       ├─> Dirty fixtures? → Clean regularly
│       ├─> Shading from structure? → Adjust layout
│       └─> Incorrect spectrum? → Verify light type for crop
│
└─> Root health issues?
    └─> YES: See Root Disease section
        ├─> Brown, slimy roots? → Pathogen likely (pythium)
        ├─> Stubby, stunted roots? → Temperature, DO, or toxicity
        └─> Excessive root mat? → Management issue, increase maintenance
```

### Problem Category: Nutrient Disorders

```
DEFICIENCY SYMPTOMS AND CORRECTIONS:

NITROGEN DEFICIENCY
Symptoms: Yellowing of older leaves first, slow growth
Verify: NO₃⁻ <100 ppm in solution
Solution:
- Add calcium nitrate or potassium nitrate
- Target N: 180-220 ppm
- Retest in 24 hours
- Check for rapid uptake (very fast growth phase)

IRON DEFICIENCY (Chlorosis)
Symptoms: Yellowing between veins on new growth
Verify: pH >6.5 (iron precipitates) or Fe <1.5 ppm
Solution:
- Adjust pH to 5.8-6.2 immediately
- Add chelated iron (Fe-EDTA or DTPA)
- Target Fe: 2-3 ppm
- Improvement in 3-5 days on new growth

CALCIUM DEFICIENCY (Tip Burn)
Symptoms: Brown/dead leaf margins, especially new growth
Verify: Ca²⁺ <140 ppm or high EC preventing uptake
Solution:
- Verify Ca²⁺ concentration (should be 160-200 ppm)
- If adequate Ca but symptoms persist:
  * Reduce EC by 0.3-0.5 mS/cm
  * Increase humidity (improves transpiration)
  * Ensure adequate air circulation
  * Lower temperature (high temp reduces Ca uptake)
- Foliar spray: 150 ppm Ca (emergency measure)

POTASSIUM DEFICIENCY
Symptoms: Marginal yellowing/browning on older leaves
Verify: K⁺ <180 ppm
Solution:
- Add potassium nitrate or potassium sulfate
- Target K⁺: 240-300 ppm
- Monitor pH (K₂SO₄ can lower pH slightly)

MAGNESIUM DEFICIENCY
Symptoms: Interveinal chlorosis on older leaves
Verify: Mg²⁺ <30 ppm
Solution:
- Add magnesium sulfate (Epsom salt)
- Target Mg²⁺: 40-50 ppm
- Dissolve completely before adding to reservoir

PHOSPHORUS DEFICIENCY
Symptoms: Purple/red coloration, stunted growth
Verify: PO₄³⁻ <30 ppm or pH outside 5.5-6.5
Solution:
- Check and adjust pH first
- Add monopotassium phosphate (MKP)
- Target P: 40-50 ppm
- Rare in well-managed systems
```

### Problem Category: Root Disease

```
PYTHIUM ROOT ROT

Symptoms:
- Brown, slimy roots
- Musty odor
- Wilting despite adequate water
- Rapid spread through system

Immediate actions:
1. Isolate affected plants (remove if severe)
2. Reduce solution temperature <22°C (critical)
3. Increase dissolved oxygen >8 mg/L
4. Verify pH 5.8-6.0
5. Stop feeding (reduce EC to 1.0-1.2 temporarily)

Treatment options:
Chemical:
- Hydrogen peroxide: 100 ppm, 2-3 applications 48hr apart
- Chlorine dioxide: 0.5-2 ppm continuous (requires dosing system)

Biological:
- Bacillus subtilis: 10⁸ CFU/mL, drench application
- Trichoderma harzianum: 10⁶ spores/mL, root zone application

Prevention (after recovery):
- Sanitize entire system between crops
- Use only disease-free transplants
- Maintain solution temperature <22°C always
- Keep DO >8 mg/L continuously
- UV sterilization of recirculating solution
- Avoid introducing contaminated water
- Clean and disinfect all tools between systems

FUSARIUM WILT

Symptoms:
- Yellowing on one side of plant
- Vascular browning if stem cut
- Wilting despite adequate water
- Does not spread as rapidly as pythium

Actions:
- Remove and destroy affected plants immediately
- No effective chemical treatment in hydroponics
- Focus on prevention:
  * Use resistant varieties
  * Sanitation between crops
  * Avoid contaminated transplants
  * Consider steam sterilization of system
```

### Problem Category: System Failures

```
FLOW CESSATION (No water flow)

Diagnosis:
1. Check pump operation
   - Power on? → Check circuit breaker, fuses
   - Running but no flow? → Impeller failure, blockage
   - Making unusual noise? → Bearing failure imminent

2. Check for blockages
   - Intake filter clogged? → Clean or replace
   - Channel blocked by roots? → Clear blockage, thin root mat
   - Valves closed? → Open as needed

3. Check for leaks
   - Visible water loss? → Locate and repair leak
   - Air in lines? → Bleed air, check fittings

Emergency response:
- Hand water plants immediately (prevent wilting)
- Repair/replace pump within 2-4 hours
- Have backup pump on hand (critical spare)
- Consider redundant pump installation

pH CONTROLLER MALFUNCTION

Symptoms:
- pH not responding to adjustments
- Excessive acid/base consumption
- Rapid pH swings

Diagnosis:
1. Sensor issues
   - Verify with handheld meter → If different, calibrate/replace
   - Check reference junction → Clean or replace if clogged
   - Age >18 months? → Replace as preventive measure

2. Dosing system
   - Pump running? → Check power, replace if failed
   - Acid/base empty? → Refill reservoirs
   - Lines blocked? → Clear tubing, check injection points

3. Controller settings
   - Deadband too narrow? → Increase to ±0.2 pH
   - Dose time too long? → Reduce dose duration
   - Logic errors? → Reset controller, verify programming

EC READING ANOMALIES

Symptoms:
- EC reading constant despite additions
- Reading higher/lower than handheld meter
- Erratic readings

Diagnosis:
1. Sensor fouling
   - Electrodes coated? → Clean with mild acid, rinse
   - Biofilm formation? → Soak in 10% bleach, rinse thoroughly
   - Physical damage? → Replace sensor

2. Calibration drift
   - Verify with fresh calibration solutions
   - 2-point calibration (1.41 mS/cm and 12.88 mS/cm standard)
   - Recalibrate or replace if >5% error

3. Wiring issues
   - Check connections → Tighten, clean corrosion
   - Cable damage? → Replace sensor cable
```

## Preventive Maintenance Schedule

### Daily Tasks (5-10 minutes)

```
DAILY CHECKLIST:

Visual inspection:
□ Plant appearance (color, vigor, no stress signs)
□ Root health (white, healthy, no discoloration)
□ Film flow continuity (no dry spots or flooding)
□ System leaks (check fittings, connections)
□ Equipment operation (pumps, fans, lights running)

Parameter verification:
□ pH reading (5.5-6.5 target)
□ EC reading (target range for crop)
□ Solution temperature (<22°C)
□ Dissolved oxygen (>6 mg/L minimum, >8 preferred)
□ Solution level (maintain consistent volume)

Actions:
□ Top off reservoir with fresh solution
□ Adjust pH if outside range
□ Adjust EC if outside range
□ Remove dead/damaged leaves
□ Note any irregularities in log
```

### Weekly Tasks (30-60 minutes)

```
WEEKLY MAINTENANCE:

System inspection:
□ Check all channels for root accumulation
□ Inspect and clean filters (pump intake, irrigation)
□ Verify flow rate in each channel (spot check 20%)
□ Check channel slope (use level, correct as needed)
□ Inspect electrical connections (tight, no corrosion)

Sensor maintenance:
□ Clean pH electrode (gentle rinse)
□ Clean EC sensor (wipe electrodes)
□ Clean DO sensor (wipe optical window)
□ Verify sensors against handheld meters (±5% acceptable)

Equipment check:
□ Inspect pump operation (noise, vibration, leaks)
□ Check air stones for clogging (replace if flow reduced)
□ Verify timer/controller operation
□ Check lighting operation (all fixtures, brightness)
□ Inspect dosing pumps (tubing condition, flow)

Solution management:
□ Measure individual nutrients (if equipment available)
□ Send solution sample to lab (every 2-4 weeks)
□ Adjust nutrient ratios based on results
□ Check solution clarity (should be clear, not cloudy)

Documentation:
□ Update maintenance log
□ Record sensor readings
□ Note any issues or repairs
□ Update inventory (nutrients, supplies)
```

### Monthly Tasks (2-4 hours)

```
MONTHLY DEEP MAINTENANCE:

Calibration:
□ Calibrate pH sensor (2-point calibration)
□ Calibrate EC sensor (2-point calibration)
□ Calibrate DO sensor (zero and span)
□ Verify timer accuracy
□ Check flow meters against bucket test

Deep cleaning:
□ Clean entire reservoir (drain, scrub, sanitize)
□ Clean channels (remove biofilm, algae)
□ Descale or clean any mineral deposits
□ Clean air stones (soak in vinegar if needed)
□ Wash light fixtures and reflectors (improves output)

Mechanical:
□ Inspect and clean pump impeller
□ Lubricate pump bearings if applicable
□ Check all valves (operation, no leaks)
□ Inspect tubing (replace if degraded)
□ Tighten all fittings and connections

Preventive replacement:
□ Replace air stones (every 2-3 months)
□ Replace inline filters
□ Replace dosing pump tubing (every 3-6 months)
□ Replace any worn components

System testing:
□ Test backup systems (generator, alarms)
□ Verify alert system (send test notifications)
□ Check emergency procedures (staff training)
```

### Quarterly Tasks (4-8 hours)

```
QUARTERLY INTENSIVE MAINTENANCE:

Major component inspection:
□ Disassemble and inspect pumps thoroughly
□ Check HVAC system (filters, coils, operation)
□ Inspect all plumbing for wear or degradation
□ Structural inspection (racks, supports, channels)
□ Electrical system check (all connections, breakers)

Replace scheduled items:
□ pH sensor (every 12-18 months)
□ DO sensor membrane (every 6-12 months)
□ UV lamp (if using sterilization, every 12 months)
□ Water filters (RO membranes, carbon, etc.)

Performance analysis:
□ Review production metrics (3-month average)
□ Analyze efficiency trends
□ Identify improvement opportunities
□ Update SOPs based on learnings

Planning:
□ Order replacement parts (keep inventory)
□ Schedule major maintenance (coordinate with production)
□ Budget for upcoming replacements
□ Update equipment maintenance records
```

## Emergency Response Protocols

### Power Failure

```
IMMEDIATE ACTIONS (within 15 minutes):

1. Assess situation
   - How long expected? (short vs. extended)
   - Generator available?
   - Battery backup functioning?

2. Prioritize critical systems
   - Dissolved oxygen (highest priority)
   - Solution circulation (high priority)
   - Cooling (if temperature rising)
   - Lighting (lower priority, plants tolerate dark periods)

3. Short-term measures (<4 hours expected)
   - Start generator if available
   - Manual aeration (stir solution, splash)
   - Open greenhouse vents (temperature control)
   - No immediate action needed for lighting

4. Extended outage (>4 hours)
   - Hand water plants if flow stopped
   - Set up battery-powered air pumps for DO
   - Cover plants if temperature extreme
   - Consider harvesting mature plants (prevent loss)
   - Plan for solution recovery (may need replacement)

5. Recovery
   - Restore power to critical systems first
   - Check all sensors (may need recalibration)
   - Verify solution parameters (pH, EC, DO, temp)
   - Monitor plant response for 48 hours
   - Document event and recovery actions

Prevention:
- Install generator with automatic transfer switch
- UPS for control systems and critical sensors
- Battery backup for DO system (air pumps)
- Maintain emergency supplies (manual pumps, meters)
```

### Contamination Event

```
RESPONSE TO SUSPECTED CONTAMINATION:

Identify source:
□ Chemical spill? (cleaning supplies, wrong nutrient)
□ Pathogen introduction? (contaminated water, transplants)
□ Physical contamination? (debris, pests)

Immediate containment:
1. Stop circulation to prevent spread
2. Isolate affected area/system
3. Document contamination (photos, samples)
4. Notify staff (safety protocols)

Assessment:
- Severity? (minor surface vs. systemic)
- Affected area? (single channel vs. whole system)
- Plant impact? (visible symptoms, immediate danger)

Actions based on type:

Chemical:
- Drain and dispose contaminated solution properly
- Triple rinse entire system
- Test before refilling
- May need to discard plants (depending on chemical)

Biological:
- Remove symptomatic plants
- Treat remaining (see disease protocols)
- Sanitize system thoroughly
- Monitor closely for 1-2 weeks

Physical:
- Remove contamination
- Clean thoroughly
- Resume operation if no systemic issue

Prevention:
- Proper storage of chemicals (separate from nutrients)
- Clear labeling of all containers
- Quarantine new plants
- Restrict access to authorized personnel
- Training on handling procedures
```

## Spare Parts Inventory

```
CRITICAL SPARES (Must Have On-Hand):

Essential (System-critical, immediate need):
- Backup circulation pump (same model)
- Fuses and circuit breakers (all sizes)
- pH sensor (calibrated and ready)
- Air stones (6-12 depending on system size)
- Tubing (various sizes, 10m each)
- Fittings assortment (elbows, tees, couplers)
- Teflon tape and PVC cement
- Zip ties and clamps (various sizes)

Important (Can wait 24-48 hours but disruptive):
- EC sensor
- DO sensor
- Dosing pump (or rebuild kit)
- Timer/controller backup
- Water pump rebuild kit
- Air pump
- Inline filters
- Check valves

Convenience (Minimize downtime, can order if needed):
- Channels or channel sections
- Net pots and supports
- pH calibration solutions
- EC calibration solutions
- Cleaning supplies
- Basic hand tools

Storage:
- Organized storage area
- Labeled bins/shelves
- Inventory list (track usage)
- Reorder triggers (when stock low)
- Keep critical spares in factory sealed packaging

Budget: $1,000-$3,000 for initial spare parts kit
Annual replenishment: $500-$1,000
```

## Diagnostic Tools

```
ESSENTIAL DIAGNOSTIC EQUIPMENT:

Handheld meters:
- pH meter: $100-$300 (must have for verification)
- EC meter: $50-$200 (essential)
- DO meter: $400-$800 (important for NFT)
- Temperature: $20-$50 (thermometer)
- Light meter: $300-$800 (PPFD measurement)

Visual inspection:
- Magnifying glass (10-20×) for pests, disease
- Flashlight (bright LED) for inspecting roots
- Camera for documentation
- Bucket and measuring cup (flow rate verification)

Testing:
- Graduated cylinders (volume measurement)
- Stopwatch (timing flow, dosing)
- Level (channel slope verification)
- Multimeter (electrical diagnostics)
- Water test kit (backup to sensors)

Documentation:
- Notebook/tablet for records
- Labels and markers
- Forms/checklists (printed)
```

## Conclusion

Systematic troubleshooting requires observation, data gathering, methodical analysis, and targeted correction. Preventive maintenance schedules prevent most problems before they impact production. Emergency protocols ensure rapid response to critical failures. Well-maintained spare parts inventory and diagnostic tools enable quick problem resolution.

## Key Takeaways

1. Use systematic 7-step troubleshooting process for all problems
2. Most growth issues trace to pH, EC, temperature, DO, or light
3. Root diseases require immediate action and focus on prevention
4. Daily inspections (5-10 min) catch problems early
5. Weekly maintenance (30-60 min) prevents equipment failures
6. Monthly deep cleaning essential for long-term system health
7. Emergency protocols for power failure and contamination critical
8. Maintain spare parts inventory for system-critical components
9. Calibrate sensors monthly, replace on schedule (pH: 12-18 months)
10. Documentation of issues and solutions improves future troubleshooting

---

*Next Lesson: Module 13 - Economic Analysis and Financial Optimization*
