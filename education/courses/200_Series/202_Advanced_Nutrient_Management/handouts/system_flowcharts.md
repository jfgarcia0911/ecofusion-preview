# System Flowcharts & Diagrams

**Course 202: Advanced Nutrient Management**

---

## Diagram 1: Two-Part Mixing System

```
═══════════════════════════════════════════════════════════════════════════════
           TWO-PART NUTRIENT SOLUTION MIXING PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

STOCK SOLUTIONS                    MIXING RESERVOIR

┌─────────────────────┐           ┌──────────────────────────────┐
│   PART A (100x)     │           │                              │
│  ┌──────────────┐   │           │      WATER (80-90L)          │
│  │ Calcium      │   │           │                              │
│  │ Nitrate      │   │    ①      │         pH: ~7               │
│  │              │   │────────►  │         EC: low              │
│  │  941 g/10L   │   │   1 L     │                              │
│  └──────────────┘   │           │  ┌────────────────────┐      │
│                     │           │  │ MIXING (5 min)     │      │
└─────────────────────┘           │  └────────────────────┘      │
                                  │                              │
                                  │          ↓                   │
┌─────────────────────┐           │                              │
│   PART B (100x)     │           │     Part A Dissolved         │
│  ┌──────────────┐   │    ②      │                              │
│  │ KNO₃         │   │────────►  │                              │
│  │ MKP          │   │   1 L     │  ┌────────────────────┐      │
│  │ MgSO₄        │   │           │  │ MIXING (5 min)     │      │
│  │ Micros       │   │           │  └────────────────────┘      │
│  └──────────────┘   │           │                              │
│                     │           │          ↓                   │
└─────────────────────┘           │                              │
                                  │     Both Parts Mixed         │
                                  │                              │
                                  │    ③ Add water to 100L       │
                                  │                              │
                                  │  ┌────────────────────┐      │
                                  │  │ FINAL MIXING       │      │
                                  │  │ CHECK pH & EC      │      │
                                  │  └────────────────────┘      │
                                  │                              │
                                  │   ④ ADJUST pH if needed      │
                                  │                              │
                                  └──────────────────────────────┘
                                             ↓
                                  ┌──────────────────────────────┐
                                  │  READY TO USE                │
                                  │  pH: 5.8-6.2                 │
                                  │  EC: 1.8-2.2 mS/cm           │
                                  └──────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

⚠️ CRITICAL RULES:
1. NEVER mix Part A and Part B concentrates directly together
2. ALWAYS add each part to water separately
3. ALWAYS wait 5 minutes between adding Part A and Part B
4. ALWAYS bring to final volume before testing pH/EC

═══════════════════════════════════════════════════════════════════════════════
```

---

## Diagram 2: Troubleshooting Flowchart

```
═══════════════════════════════════════════════════════════════════════════════
              NUTRIENT PROBLEM TROUBLESHOOTING FLOWCHART
═══════════════════════════════════════════════════════════════════════════════

                        Plant showing symptoms?
                                  │
                                 YES
                                  │
                                  ▼
                          Test pH and EC
                                  │
                    ┌─────────────┴─────────────┐
                    │                           │
                 pH OK?                      EC OK?
                5.8-6.5                    Appropriate
                    │                        for crop?
            ┌───────┴───────┐                  │
           NO              YES          ┌──────┴──────┐
            │                │         NO            YES
            ▼                │          │              │
    Adjust pH first          │          ▼              ▼
    Wait 24-48 hours     ────┴────►  Adjust EC   Diagnose
    Did symptoms             │       (add water    specific
    resolve?                 │        or nutes)   deficiency
        │                    │           │             │
    ┌───┴───┐                │           │         ┌───┴───┐
   YES     NO                │           │        Use      │
    │       │                │           │      deficiency │
    ▼       │                │           │      ID charts  │
  SOLVED    │                │           │          │      │
            │                │           │          ▼      │
            │                │           │    Identify     │
            │                │           │    nutrient     │
            └────────────────┴───────────┴──────┐          │
                                                │          │
                                                ▼          │
                                        Check if nutrient  │
                                        is in solution     │
                                        (test if possible) │
                                                │          │
                                    ┌───────────┴────────┐ │
                                   YES                  NO │
                                    │                    │ │
                                    ▼                    ▼ │
                            Availability issue      Add    │
                            (pH, chelation,      nutrient  │
                             root health)                  │
                                    │                    │ │
                                    ▼                    ▼ │
                              Fix root cause       Monitor │
                              (pH, aeration,    response   │
                               disease)        (3-7 days)  │
                                    │                    │ │
                                    └────────┬───────────┘ │
                                             │             │
                                             ▼             │
                                       Improved?           │
                                             │             │
                                      ┌──────┴──────┐      │
                                     YES           NO     │
                                      │             │     │
                                      ▼             ▼     │
                                   SOLVED    Re-evaluate  │
                                             diagnosis    │
                                             and try  ◄───┘
                                             different
                                             approach

═══════════════════════════════════════════════════════════════════════════════
```

---

## Diagram 3: Aquaponic Supplementation Protocol

```
═══════════════════════════════════════════════════════════════════════════════
         AQUAPONIC NUTRIENT SUPPLEMENTATION WEEKLY PROTOCOL
═══════════════════════════════════════════════════════════════════════════════

MONDAY - Testing & Assessment

┌──────────────────────────────────────────────┐
│  1. Test System Parameters                    │
│     □ pH:  _____                              │
│     □ EC:  _____ mS/cm                        │
│     □ Temp: _____ °C                          │
│     □ Fish health: ___________                │
│                                               │
│  2. Visual Plant Inspection                   │
│     □ Iron deficiency? (new leaf chlorosis)   │
│     □ Other symptoms? _______________         │
│                                               │
│  3. Review Last Week's Consumption            │
│     □ Fe added: _____ g                       │
│     □ K added: _____ g                        │
│     □ Other: _______________                  │
└──────────────────────────────────────────────┘
                     │
                     ▼
TUESDAY - Iron Supplementation

┌──────────────────────────────────────────────┐
│  Calculate Iron Need (1000L system example)   │
│                                               │
│  Target: 2 ppm Fe                             │
│  Using Fe-DTPA (10% Fe)                       │
│  Amount: 2 mg/L × 1000L ÷ 0.10 = 20 g        │
│                                               │
│  Application:                                 │
│  1. Dissolve 20g Fe-DTPA in 2L warm water     │
│  2. Add slowly to sump (NOT fish tank)        │
│  3. Mix thoroughly                            │
│  4. Monitor fish for 2 hours                  │
└──────────────────────────────────────────────┘
                     │
                     ▼
WEDNESDAY - Potassium Supplementation

┌──────────────────────────────────────────────┐
│  Calculate Potassium Need (if low)            │
│                                               │
│  Current K: ~30 ppm (from fish)               │
│  Target: 180 ppm (for leafy greens)           │
│  Need: 150 ppm                                │
│                                               │
│  Using K₂SO₄ (44.9% K):                       │
│  Amount: 150 × 1000 ÷ 0.449 = 334 g          │
│                                               │
│  Application (GRADUAL!):                      │
│  Day 1: Add 110 g (1/3) to sump               │
│  Wait 24h, monitor fish                       │
└──────────────────────────────────────────────┘
                     │
                     ▼
THURSDAY - Continue K Supplementation

┌──────────────────────────────────────────────┐
│  If fish healthy after Day 1:                 │
│  Day 2: Add 110 g (1/3) to sump               │
│  Wait 24h, monitor fish                       │
└──────────────────────────────────────────────┘
                     │
                     ▼
FRIDAY - Complete K Supplementation

┌──────────────────────────────────────────────┐
│  If fish healthy after Day 2:                 │
│  Day 3: Add 114 g (final 1/3) to sump         │
│  Test K level (if possible)                   │
│  Monitor plant response                       │
└──────────────────────────────────────────────┘
                     │
                     ▼
WEEKEND - Calcium (If needed, bi-weekly)

┌──────────────────────────────────────────────┐
│  Calculate Calcium Need (every 2 weeks)       │
│                                               │
│  Current Ca: ~40 ppm (from fish)              │
│  Target: 140 ppm                              │
│  Need: 100 ppm                                │
│                                               │
│  Using Ca(OH)₂ (48% Ca):                      │
│  Amount: 100 × 1000 ÷ 0.48 = 208 g           │
│                                               │
│  Application:                                 │
│  1. Mix 208g Ca(OH)₂ in 5L water              │
│  2. Add slowly over 6 hours to sump           │
│  3. Monitor pH (will rise!)                   │
│  4. Check fish every 2 hours                  │
└──────────────────────────────────────────────┘
                     │
                     ▼
RECORD ALL DATA

┌──────────────────────────────────────────────┐
│  Weekly Log:                                  │
│  □ Start pH/EC: _____/_____                   │
│  □ End pH/EC: _____/_____                     │
│  □ Fe added: _____ g                          │
│  □ K added: _____ g                           │
│  □ Ca added: _____ g (if applicable)          │
│  □ Plant observations: _______________        │
│  □ Fish observations: _______________         │
│  □ Adjustments for next week: _________       │
└──────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

⚠️ SAFETY REMINDERS:
• ALWAYS add supplements to plant side (sump/beds), NEVER directly to fish tank
• ADD GRADUALLY over days when supplementing large amounts
• MONITOR FISH BEHAVIOR closely for 24-48 hours after any addition
• STOP if fish show stress (gasping, erratic swimming, hiding)
• KEEP RECORDS to track consumption patterns and optimize schedule

═══════════════════════════════════════════════════════════════════════════════
```

---

*Use these flowcharts as quick-reference guides for daily operations!*

*EcoFusion Academy - Course 202: Advanced Nutrient Management*
