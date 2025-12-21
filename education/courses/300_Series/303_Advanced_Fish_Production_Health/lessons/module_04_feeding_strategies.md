# Module 4: Feeding Strategies & Automation

**Duration:** 1 hour
**Course:** 303 - Advanced Fish Production & Health

---

## Learning Objectives

By the end of this module, you will be able to:
1. Calculate optimal feeding rates and schedules
2. Implement demand feeders and automated systems
3. Adjust feeding strategies for different conditions
4. Monitor and optimize feed conversion ratio (FCR)
5. Troubleshoot feeding-related problems

---

## 1. Feeding Rate Calculations

### Percentage Body Weight Method

```
DAILY FEED RATE

Feed Rate (%) = (Daily Feed ÷ Total Biomass) × 100

Typical Ranges by Temperature and Size:

TILAPIA (25-30°C):
  Fry (1-5g):         10-15% BW/day
  Fingerling (5-20g): 6-10% BW/day
  Juvenile (20-100g): 3-6% BW/day
  Grow-out (100-500g): 1.5-3% BW/day

TROUT (12-16°C):
  Fry (1-5g):         8-12% BW/day
  Fingerling (5-20g): 5-8% BW/day
  Juvenile (20-100g): 3-5% BW/day
  Grow-out (100-500g): 1-2% BW/day
```

### Temperature Adjustment Factor

**Feeding Tables by Temperature:**

```
TILAPIA FEEDING RATE (% BW/day)

Fish      │  20°C │  24°C │  28°C │  32°C
Weight    │       │       │       │
──────────┼───────┼───────┼───────┼───────
10g       │  3.5  │  5.0  │  7.0  │  6.0
50g       │  2.5  │  3.5  │  5.0  │  4.5
100g      │  2.0  │  3.0  │  4.0  │  3.8
250g      │  1.5  │  2.2  │  3.0  │  2.8
500g      │  1.0  │  1.5  │  2.0  │  1.8

Note: Rates decrease above 30°C due to stress


TROUT FEEDING RATE (% BW/day)

Fish      │   8°C │  12°C │  16°C │  20°C
Weight    │       │       │       │
──────────┼───────┼───────┼───────┼───────
10g       │  2.0  │  4.0  │  6.0  │  5.0
50g       │  1.5  │  3.0  │  4.5  │  3.5
100g      │  1.2  │  2.5  │  3.5  │  2.5
250g      │  0.8  │  1.8  │  2.5  │  1.8
500g      │  0.5  │  1.2  │  1.8  │  1.2

Note: Rates decrease above 18°C (stress)
```

### Practical Feeding Calculation

```
EXAMPLE: 1,000 Tilapia, Average 150g, 28°C

Step 1: Calculate biomass
  Biomass = 1,000 fish × 0.15 kg = 150 kg

Step 2: Find feeding rate from table
  150g fish at 28°C = ~3.5% BW/day

Step 3: Calculate daily ration
  Daily feed = 150 kg × 0.035 = 5.25 kg/day

Step 4: Divide into meals (3× daily)
  Morning (30%): 1.58 kg
  Midday (40%):  2.10 kg
  Evening (30%): 1.58 kg
```

---

## 2. Feeding Frequency

### Frequency by Life Stage

| Life Stage | Meals/Day | Timing | Rationale |
|------------|-----------|--------|-----------|
| **Larvae** | 6-8 | Every 2-3 hours | Small stomach |
| **Fry** | 4-6 | Every 3-4 hours | High metabolism |
| **Fingerling** | 3-4 | 6am, 12pm, 6pm, 10pm | Active growth |
| **Juvenile** | 2-3 | 8am, 2pm, 8pm | Maintenance |
| **Adult** | 1-2 | 9am, 5pm | Lower demand |

### Meal Distribution

**Optimal Ration Split:**

```
2 Meals/Day:
  Morning: 50%
  Evening: 50%

3 Meals/Day:
  Morning: 30%
  Midday:  40% (peak metabolism)
  Evening: 30%

4 Meals/Day:
  6am:  25%
  11am: 30%
  4pm:  30%
  9pm:  15%

Principles:
  ✓ Largest meal during peak activity
  ✓ Never feed >2% BW in single meal
  ✓ Allow 4+ hours between meals
  ✓ Last meal 2-3 hours before dark
```

### Feeding Response Monitoring

**Observation Checklist:**

```
GOOD FEEDING RESPONSE:
  ✓ Fish surface within 30 seconds
  ✓ Vigorous competition
  ✓ Feed consumed in 15-30 minutes
  ✓ No pellets sinking uneaten
  ✓ Normal swimming after feeding

POOR RESPONSE:
  ✗ Slow to surface (>2 minutes)
  ✗ Lethargic behavior
  ✗ Feed uneaten after 30 minutes
  ✗ Pellets accumulating on bottom
  ✗ Only some fish feeding

Actions if Poor Response:
  1. Stop feeding
  2. Check water quality (DO, NH₃, temp)
  3. Observe for disease signs
  4. Reduce next ration by 50%
  5. Investigate root cause
```

---

## 3. Feeding Methods

### Hand Feeding

**Advantages:**
- Direct observation
- Immediate response adjustment
- Disease detection
- Behavioral monitoring

**Disadvantages:**
- Labor intensive
- Inconsistent timing
- Human error
- Limited scalability

**Best Practices:**
```
Hand Feeding Protocol:

1. Check water quality BEFORE feeding
2. Observe fish behavior
3. Start with small amount
4. Add gradually based on response
5. Stop when activity slows
6. Record amount fed
7. Note unusual behavior
8. Clean up any spills
```

### Automatic Feeders

**Timer-Based Feeders:**

```
Types:
  ┌─────────────────────────┐
  │  BELT/AUGER FEEDERS     │
  │  - Precise portions     │
  │  - Multiple daily feeds │
  │  - Programmable timing  │
  └─────────────────────────┘

  ┌─────────────────────────┐
  │  ROTATING DISC FEEDERS  │
  │  - Continuous delivery  │
  │  - Adjustable rate      │
  │  - Good for fry         │
  └─────────────────────────┘

Configuration Example:
  Feed Schedule: 6am, 10am, 2pm, 6pm, 10pm
  Total Daily: 5.0 kg
  Per Feeding: 1.0 kg
  Duration: 15 minutes/feeding
  Rate: 66.7 g/minute
```

### Demand Feeders

**Sensor-Activated Feeding:**

```
DEMAND FEEDER SYSTEM

    ┌──────────────┐
    │  Feed Hopper │
    └──────┬───────┘
           │
           v
    ┌──────────────┐
    │   Trigger    │◄── Fish activate
    │   Pendulum   │    (bump/pull)
    └──────┬───────┘
           │
           v
    ┌──────────────┐
    │ Feed Drops   │
    │  Into Tank   │
    └──────────────┘

Benefits:
  ✓ Self-regulation by fish
  ✓ Reduced waste
  ✓ Improved FCR
  ✓ Lower labor

Considerations:
  - Training period (1-2 weeks)
  - Monitor consumption daily
  - Set maximum daily limits
  - Check for dominant fish monopolizing
```

---

## 4. Advanced Feeding Technologies

### Acoustic Feeding

**Underwater Microphone Systems:**

```
Technology:
  - Hydrophone detects feeding sounds
  - Computer analyzes intensity
  - Adjusts feed delivery in real-time

Advantages:
  ✓ Precise feeding to appetite
  ✓ Reduces waste
  ✓ Improves FCR by 10-15%
  ✓ Real-time monitoring

Cost: $5,000-15,000 per tank
Best for: High-value species, RAS
```

### Video/AI Feeding Systems

**Computer Vision Monitoring:**

```
SMART FEEDING SYSTEM

   ┌─────────────┐
   │   Camera    │
   └──────┬──────┘
          │
          v
   ┌─────────────┐
   │ AI Software │ ──> Analyzes:
   │ (Computer)  │     - Fish appetite
   └──────┬──────┘     - Body condition
          │            - Pellet waste
          v            - Swimming behavior
   ┌─────────────┐
   │   Feeder    │
   │ Controller  │
   └─────────────┘

Metrics Tracked:
  • Feed consumption rate
  • Pellet waste percentage
  • Fish biomass estimation
  • Growth rate prediction
  • Disease early warning

Investment: $10,000-30,000
ROI: 1-3 years (FCR improvement)
```

### Paste/Moist Feeding

**For Larvae and Special Needs:**

```
Applications:
  - Larval fish (first feeding)
  - Broodstock conditioning
  - Disease recovery
  - Research/experimental

Formulations:
  Ingredients         Percentage
  ────────────────────────────
  Fish meal/protein   40-50%
  Binder (gelatin)    2-5%
  Oil                 10-15%
  Vitamins/minerals   2-3%
  Water               30-40%

Delivery:
  - Slow-sinking particles
  - High palatability
  - 6-12 feedings/day
  - Labor intensive
```

---

## 5. Feed Conversion Optimization

### Calculating FCR

```
FEED CONVERSION RATIO

FCR = Total Feed Fed (kg) ÷ Total Weight Gain (kg)


Example Calculation:

Initial biomass:  100 kg (1,000 fish × 100g)
Final biomass:    500 kg (950 fish × 526g)
Survival:         95%
Feed used:        600 kg
Days:             120

Weight gain: 500 - 100 = 400 kg

FCR = 600 kg ÷ 400 kg = 1.50


Economic FCR (eFCR):
Includes mortality losses

eFCR = Total Feed ÷ (Harvested Weight - Stocked Weight)

In this example, same result (1.50) because we calculated
gain correctly with survivor biomass.
```

### FCR Improvement Strategies

**Target FCR by Species:**

| Species | Poor FCR | Good FCR | Excellent FCR |
|---------|----------|----------|---------------|
| **Tilapia** | >1.8 | 1.4-1.6 | <1.3 |
| **Catfish** | >2.0 | 1.5-1.8 | <1.5 |
| **Trout** | >1.5 | 1.1-1.3 | <1.1 |
| **Barramundi** | >1.8 | 1.2-1.5 | <1.2 |
| **Bass** | >2.0 | 1.5-1.8 | <1.5 |

**Improvement Methods:**

```
1. FEED QUALITY (Impact: 20-30%)
   ✓ High digestibility ingredients
   ✓ Optimal protein:energy ratio
   ✓ Fresh feed (<3 months)
   ✓ Proper storage

2. FEEDING RATE (Impact: 15-25%)
   ✓ Avoid overfeeding
   ✓ Match to appetite
   ✓ Adjust for temperature
   ✓ Multiple daily meals

3. PELLET SIZE (Impact: 10-15%)
   ✓ Appropriate for fish size
   ✓ Easy consumption
   ✓ Reduce waste

4. WATER QUALITY (Impact: 15-20%)
   ✓ Optimal temperature
   ✓ High DO (>6 mg/L)
   ✓ Low ammonia
   ✓ Stable pH

5. FEEDING METHOD (Impact: 10-15%)
   ✓ Demand feeding
   ✓ Acoustic monitoring
   ✓ Reduce competition
   ✓ Consistent timing

6. FISH HEALTH (Impact: 20-30%)
   ✓ Disease-free stock
   ✓ Low parasite load
   ✓ Minimal stress
   ✓ Good genetics
```

---

## 6. Seasonal Feeding Adjustments

### Temperature-Based Strategies

**Cold Water Species (Trout):**

```
Season    Temperature   Feeding Strategy
────────────────────────────────────────
Spring    8-12°C        Increase gradually
                        2-3% BW/day

Summer    14-18°C       Peak feeding
                        3-4% BW/day
                        Monitor DO closely

Fall      10-14°C       Maintain feeding
                        2-3% BW/day
                        Build fat reserves

Winter    4-8°C         Minimal feeding
                        0.5-1% BW/day
                        1-2× weekly
```

**Warm Water Species (Tilapia):**

```
Season    Temperature   Feeding Strategy
────────────────────────────────────────
Spring    20-24°C       Increase feeding
                        2-3% BW/day

Summer    26-30°C       Peak growth
                        3-4% BW/day
                        Maximum ration

Fall      22-26°C       Maintain
                        2-3% BW/day

Winter    18-22°C       Reduce feeding
                        1-2% BW/day
                        Monitor closely
```

### Pre-Harvest Feeding

```
WITHDRAWAL PERIOD

Purpose: Empty digestive tract for processing

Timeline:
  Small fish (<100g):    24 hours
  Medium fish (100-300g): 36-48 hours
  Large fish (>300g):     48-72 hours

Temperature Effect:
  Warmer = Faster digestion
  At 28°C: 24-36 hours sufficient
  At 15°C: 48-72 hours needed

Benefits:
  ✓ Cleaner processing
  ✓ Extended shelf life
  ✓ Reduced contamination
  ✓ Easier evisceration
```

---

## 7. Troubleshooting Feeding Problems

### Common Issues

**Problem: Feed Floating Uneaten**

```
Possible Causes:
  1. Overfeeding
     → Reduce ration by 25-50%
     → Monitor consumption

  2. Low oxygen
     → Check DO immediately
     → Increase aeration
     → Reduce feeding

  3. Disease
     → Inspect fish closely
     → Check for symptoms
     → May need treatment

  4. Temperature stress
     → Verify optimal range
     → Adjust feeding rate
     → Wait for acclimation

  5. Poor palatability
     → Check feed freshness
     → Verify species-appropriate
     → Try different brand
```

**Problem: Aggressive Feeding Competition**

```
Issues:
  - Size variation increases
  - Dominant fish grow faster
  - Smaller fish starved
  - Poor overall FCR

Solutions:
  1. Grade fish by size (3-4 size classes)
  2. Increase feeding points
  3. Use multiple feeders
  4. Extend feeding duration
  5. Add environmental enrichment
  6. Consider demand feeders
```

**Problem: Sinking Pellets Wasted**

```
Assessment:
  - Count pellets on bottom
  - Calculate waste percentage
  - Determine cause

Causes & Solutions:

Fast-sinking pellets:
  → Use floating or slow-sink
  → Reduce amount per feeding
  → Extend feeding time

Low appetite:
  → Check water quality
  → Inspect for disease
  → Reduce ration temporarily

Feeding too fast:
  → Slow delivery rate
  → Use automatic feeder
  → Spread feed more evenly
```

---

## 8. Feed Management Systems

### Inventory Control

```
FEED STORAGE MANAGEMENT

Rotation System (FIFO):

  ┌──────────┐  ┌──────────┐  ┌──────────┐
  │  Batch 1 │→ │  Batch 2 │→ │  Batch 3 │
  │  Jan 15  │  │  Feb 10  │  │  Mar 5   │
  └────┬─────┘  └──────────┘  └──────────┘
       │
       v
   USE FIRST


Inventory Tracking:

Date     │ Received │ Used  │ Balance │ Age (days)
─────────┼──────────┼───────┼─────────┼──────────
Jan 15   │  2,000   │   -   │  2,000  │    0
Jan 30   │    -     │  500  │  1,500  │   15
Feb 10   │  2,000   │   -   │  3,500  │   26/0
Feb 28   │    -     │ 1,500 │  2,000  │    0
Mar 5    │  2,000   │   -   │  4,000  │    5/23

Action Items:
  ⚠ Batch from Jan 15 now 49 days old
  → Use within 2 weeks
  → Check for rancidity
```

### Feed Cost Analysis

```
COST PER KG GAIN

Calculation:
  Cost/kg gain = (Feed Cost × FCR) + (Other Costs/kg produced)

Example:
  Feed cost:     $1.00/kg
  FCR:           1.50
  Other costs:   $0.30/kg (labor, utilities)

  Feed cost component: $1.00 × 1.50 = $1.50/kg
  Total cost/kg:       $1.50 + $0.30 = $1.80/kg

  If selling at $4.00/kg:
    Gross margin: $4.00 - $1.80 = $2.20/kg
    Margin %: ($2.20 ÷ $4.00) × 100 = 55%


Impact of FCR on Profitability:

FCR   │ Feed Cost/kg │ Total Cost │ Margin
──────┼──────────────┼────────────┼────────
1.2   │   $1.20      │   $1.50    │  $2.50
1.4   │   $1.40      │   $1.70    │  $2.30
1.6   │   $1.60      │   $1.90    │  $2.10
1.8   │   $1.80      │   $2.10    │  $1.90
2.0   │   $2.00      │   $2.30    │  $1.70

Improving FCR from 1.8 to 1.4 increases margin by $0.40/kg!
```

---

## 9. Specialized Feeding Strategies

### Broodstock Conditioning

```
REPRODUCTIVE DIET

Modifications:
  - Higher lipid (12-18%)
  - Enhanced vitamins (Vit E 2-3×)
  - More frequent feeding (3-4×/day)
  - Supplement EFA (EPA/DHA)
  - Specific pigments (carotenoids)

Feeding Schedule:
  6-8 weeks before spawning: Increase ration
  Feed rate: 2-3% BW/day
  Enrichment: Live feeds (brine shrimp, worms)

Expected Results:
  ✓ Higher egg quality
  ✓ Better fertilization rate
  ✓ Improved larval survival
  ✓ More spawns per season
```

### Fry First Feeding

```
LARVAL FEEDING PROGRESSION

Day 0-3: Yolk sac absorption
  - No external feed
  - Maintain water quality
  - Minimize disturbance

Day 3-7: First feeding (critical period)
  - Live food (Artemia, rotifers)
  - 8-12 feedings/day
  - Small amounts continuously

Day 7-14: Weaning transition
  - Mix live + microparticle
  - Reduce live food gradually
  - 6-8 feedings/day

Day 14-21: Dry feed acceptance
  - Microparticle (200-400μm)
  - 4-6 feedings/day
  - Monitor acceptance

Day 21+: Standard fry feed
  - Commercial fry crumbles
  - 4 feedings/day
  - Increase size as fish grow
```

### Finishing Diets

```
PRE-MARKET ENHANCEMENT

Goals:
  - Improve flesh quality
  - Enhance color
  - Firm texture
  - Reduce off-flavors

Diet Modifications:
  - Lower fat (6-8%)
  - Add pigments (astaxanthin for salmonids)
  - Purge diet (clean water, reduced feed)
  - Herbs/spices (experimental)

Duration: 2-4 weeks before harvest

Example (Trout):
  Weeks -4 to -2: Astaxanthin (60 mg/kg)
  Weeks -2 to 0:  Purge diet (low fat, clean flavor)
  Last 48 hours:  No feed (gut clearance)
```

---

## 10. Feed Waste Management

### Calculating Feed Waste

```
WASTE ESTIMATION

Sources of Waste:
  1. Uneaten feed (5-15% in good management)
  2. Feces (20-30% of feed intake)
  3. Dissolved nutrients (N, P)

Solid Waste Production:
  Waste (kg) = Feed (kg) × 0.30

Example:
  Daily feed: 100 kg
  Solid waste: 100 × 0.30 = 30 kg/day
  Annual waste: 30 × 365 = 10,950 kg/year


Nutrient Load:
  Nitrogen: 3-5% of feed → 3-5 kg N per 100 kg feed
  Phosphorus: 0.5-1% of feed → 0.5-1 kg P per 100 kg feed
```

### Waste Reduction Strategies

```
BEST MANAGEMENT PRACTICES

1. Optimize Feeding (Target: <5% waste)
   □ Match ration to appetite
   □ Appropriate pellet size
   □ Proper delivery rate
   □ Monitor consumption

2. High-Quality Feed (Digestibility >85%)
   □ Digestible ingredients
   □ Balanced formulation
   □ Proper processing
   □ Fresh product

3. Efficient Collection (Remove quickly)
   □ Settling basins
   □ Drum filters
   □ Screen filters
   □ Regular cleaning

4. Waste Utilization (Circular economy)
   □ Aquaponics integration
   □ Compost production
   □ Biogas generation
   □ Agricultural fertilizer


AQUAPONICS INTEGRATION:

Fish Waste → Plants → Clean Water → Fish

Nutrient Recovery:
  - Nitrate: 80-95% removal
  - Phosphorus: 60-80% uptake
  - Reduced discharge
  - Additional revenue stream
```

---

## Summary

Effective feeding strategies require:

1. **Accurate calculations** - Body weight, temperature, growth stage
2. **Appropriate frequency** - Match to fish size and species
3. **Quality feed** - Fresh, well-formulated, properly stored
4. **Right technology** - Automated, demand, or acoustic systems
5. **Constant monitoring** - FCR, waste, fish behavior
6. **Flexible adjustment** - Season, temperature, health status

Success Metrics:
- FCR < 1.5 for most species
- Feed waste < 5%
- Consistent growth rates
- Healthy fish behavior
- Economic profitability

---

## Key Takeaways

1. **Temperature** is the primary feeding rate driver
2. **Multiple meals** improve FCR in intensive systems
3. **Automation** increases consistency and efficiency
4. **Monitoring** prevents waste and health issues
5. **FCR optimization** is the key to profitability
6. **Flexibility** in strategy improves outcomes

---

## Module Quiz

Test your knowledge in Quiz 4 before proceeding to Module 5.

---

**Next Module:** Module 5 - Growth Modeling & Prediction

---

*EcoFusion Academy - Course 303: Advanced Fish Production & Health*
