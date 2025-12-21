# Module 2: Recirculating Systems Design
## Course 212: Water Conservation & Recirculation

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design basic recirculating system architecture
2. Size components for proper flow rates and retention times
3. Calculate system volume and turnover requirements
4. Identify critical control points in recirculation loops
5. Select appropriate system configurations for different scales

---

## Introduction

Effective recirculating systems are more than just connecting pipes in a loop. They require careful design of flow patterns, retention times, treatment capacity, and control points to achieve high water efficiency while maintaining optimal growing conditions and preventing pathogen buildup.

This module covers the fundamental principles and practical design considerations for recirculating agricultural systems.

---

## System Architecture Fundamentals

### Basic Recirculation Loop

```
┌─────────────────────────────────────────────────────────────────────┐
│                  BASIC RECIRCULATION ARCHITECTURE                   │
└─────────────────────────────────────────────────────────────────────┘

                      MAIN RECIRCULATION LOOP
    ┌────────────────────────────────────────────────────────┐
    │                                                        │
    │                                                        │
┌───▼─────────┐      ┌──────────┐      ┌──────────────┐    │
│             │      │          │      │              │    │
│  RESERVOIR  ├─────►│  PUMPS   ├─────►│   GROWING    │    │
│   (Sump)    │      │          │      │    ZONES     │    │
│             │      │          │      │              │    │
└───▲─────────┘      └──────────┘      └──────┬───────┘    │
    │                                         │            │
    │                                         │ Gravity    │
    │        ┌──────────────┐                 │ Return     │
    │        │              │                 │            │
    │        │  TREATMENT   │◄────────────────┘            │
    │        │              │                              │
    │        │ • Filtration │                              │
    └────────┤ • UV/Ozone   │                              │
             │ • pH Adjust  │──────────────────────────────┘
             │              │     (Optional bypass)
             └──────────────┘
```

### System Configuration Types

**1. Centralized System**
```
┌────────────────────────────────────────────────────┐
│     CENTRALIZED RECIRCULATION                      │
│                                                    │
│     ┌────────┐  ┌────────┐  ┌────────┐            │
│     │ Zone 1 │  │ Zone 2 │  │ Zone 3 │            │
│     └───┬────┘  └───┬────┘  └───┬────┘            │
│         │           │           │                  │
│         └───────────┼───────────┘                  │
│                     │                              │
│              ┌──────▼──────┐                       │
│              │             │                       │
│              │  CENTRAL    │                       │
│              │  TREATMENT  │                       │
│              │  & STORAGE  │                       │
│              │             │                       │
│              └─────────────┘                       │
│                                                    │
│  Advantages:                                       │
│  • Single treatment system                         │
│  • Lower capital cost                              │
│  • Simplified monitoring                           │
│  • Easier automation                               │
│                                                    │
│  Disadvantages:                                    │
│  • Disease can spread system-wide                  │
│  • No crop-specific management                     │
│  • Large water volume at risk                      │
│                                                    │
└────────────────────────────────────────────────────┘
```

**2. Zoned/Modular System**
```
┌────────────────────────────────────────────────────┐
│     ZONED/MODULAR RECIRCULATION                    │
│                                                    │
│  ┌──────────────┐    ┌──────────────┐             │
│  │   Zone A     │    │   Zone B     │             │
│  │ ┌──────────┐ │    │ ┌──────────┐ │             │
│  │ │ Growing  │ │    │ │ Growing  │ │             │
│  │ └────┬─────┘ │    │ └────┬─────┘ │             │
│  │      │       │    │      │       │             │
│  │ ┌────▼─────┐ │    │ ┌────▼─────┐ │             │
│  │ │Treatment │ │    │ │Treatment │ │             │
│  │ └──────────┘ │    │ └──────────┘ │             │
│  └──────────────┘    └──────────────┘             │
│                                                    │
│  Advantages:                                       │
│  • Disease isolation                               │
│  • Crop-specific management                        │
│  • Risk distribution                               │
│  • Phased expansion possible                       │
│                                                    │
│  Disadvantages:                                    │
│  • Higher capital cost                             │
│  • More monitoring points                          │
│  • More maintenance                                │
│                                                    │
└────────────────────────────────────────────────────┘
```

**3. Hybrid System**
```
┌────────────────────────────────────────────────────┐
│     HYBRID RECIRCULATION                           │
│                                                    │
│  Individual zones with optional connection         │
│  for water sharing/backup                          │
│                                                    │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐        │
│  │ Zone 1  │    │ Zone 2  │    │ Zone 3  │        │
│  │ (Local  │    │ (Local  │    │ (Local  │        │
│  │  recir) │    │  recir) │    │  recir) │        │
│  └────┬────┘    └────┬────┘    └────┬────┘        │
│       │              │              │              │
│       └──────┬───────┴───────┬──────┘              │
│              │ Valved        │                     │
│              │ Connections   │                     │
│         ┌────▼───────────────▼────┐                │
│         │                         │                │
│         │  SHARED RESOURCE        │                │
│         │  • Backup reservoir     │                │
│         │  • Emergency treatment  │                │
│         │                         │                │
│         └─────────────────────────┘                │
│                                                    │
│  Best of both approaches for medium-large systems  │
│                                                    │
└────────────────────────────────────────────────────┘
```

---

## Flow Rate and System Sizing

### Calculating Flow Requirements

**1. Growing System Flow Rate**
```
Flow Rate (GPM) = System Volume (gal) ÷ Target Turnover Time (min)

Example - DWC System:
System volume: 2,000 gallons
Target turnover: 2 hours (120 min)
Required flow: 2,000 ÷ 120 = 16.7 GPM

Recommended: 17-20 GPM pump for headroom
```

**2. Treatment Capacity Sizing**
```
Treatment Flow Rate ≥ System Flow Rate

BUT effective treatment time matters:

UV Example:
Required dose: 100 mJ/cm²
UV unit rating: 100 mJ/cm² at 20 GPM
System flow: 20 GPM
Result: Properly sized

If system requires 40 GPM:
- Use 2× 20 GPM units in parallel, OR
- Use larger unit rated for 40 GPM
```

### System Volume Calculations

| Component | Volume Formula | Example |
|-----------|----------------|---------|
| **DWC Channels** | Length × Width × Depth × 7.48 | 100' × 2' × 0.5' × 7.48 = 748 gal |
| **NFT Channels** | Length × Channel Area × 7.48 | Minimal (10-50 gal typical) |
| **Media Beds** | Volume × Porosity × 7.48 | 8' × 4' × 1' × 0.4 × 7.48 = 95 gal |
| **Fish Tanks** | π × r² × h × 7.48 | 3.14 × 4² × 4 × 7.48 = 1,507 gal |
| **Reservoir/Sump** | System Volume × 20-30% | For 2,000 gal system: 400-600 gal |

### Retention Time Requirements

```
╔════════════════════════════════════════════════════════════╗
║           RETENTION TIME REQUIREMENTS                      ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║ Component         Retention Purpose        Typical Time   ║
║ ───────────────────────────────────────────────────────   ║
║ Settling Basin    Solids settling          15-30 min      ║
║ Sand Filter       Filtration depth         4-8 min        ║
║ UV Chamber        Pathogen exposure        4-10 seconds   ║
║ Ozone Contact     Oxidation reaction       2-5 min        ║
║ pH Mixing         Chemical distribution    2-5 min        ║
║ Reservoir         Buffer/monitoring        30-60 min      ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Component Selection and Sizing

### Pumps

**Pump Selection Criteria:**

```
┌──────────────────────────────────────────────────────┐
│  PUMP SIZING CALCULATION                             │
├──────────────────────────────────────────────────────┤
│                                                      │
│  1. Calculate Required Flow (GPM)                    │
│     • System volume ÷ turnover time                  │
│                                                      │
│  2. Determine Total Dynamic Head (TDH)               │
│     • Vertical lift (ft)                             │
│     • Friction losses in pipe (ft)                   │
│     • Fitting losses (ft)                            │
│     • Elevation changes (ft)                         │
│                                                      │
│  3. Add Safety Factor                                │
│     • 20-30% oversizing recommended                  │
│                                                      │
│  Example:                                            │
│  Required flow: 20 GPM                               │
│  Vertical lift: 8 ft                                 │
│  Friction loss: 4 ft (150' of 2" pipe)               │
│  Fittings: 3 ft (6 elbows, 2 valves)                 │
│  ────────────────────────────                        │
│  TDH: 15 ft                                          │
│                                                      │
│  Select pump: 25 GPM @ 20' head                      │
│  (Provides safety margin)                            │
│                                                      │
└──────────────────────────────────────────────────────┘
```

**Pump Types for Recirculation:**

| Pump Type | Best Use | Advantages | Disadvantages |
|-----------|----------|------------|---------------|
| **Submersible** | Sumps, fish tanks | Quiet, self-priming, low maintenance | Heat transfer to water, harder to service |
| **Inline Centrifugal** | Main circulation | Energy efficient, high flow | Requires priming, more noise |
| **Mag-Drive** | Chemical dosing, sterile loops | No seal, no leaks | Lower flow, higher cost |
| **Variable Speed** | Large systems | Energy savings, flow control | Higher upfront cost |

### Reservoirs and Sumps

**Sizing Guidelines:**
```
Minimum Reservoir Volume = System Volume × 20%
Recommended = System Volume × 25-30%

Purpose:
• Water level buffering
• Treatment chemical mixing
• Monitoring point
• Emergency water supply
• Temperature stability
```

**Design Considerations:**
- Opaque material (prevent algae)
- Accessible for cleaning
- Level sensor/float switch
- Drain valve at bottom
- Baffles to prevent short-circuiting

---

## Water Distribution Design

### Distribution Manifolds

```
MANIFOLD DESIGN - EQUAL DISTRIBUTION

    Inlet                        Each outlet should
      │                          receive equal flow
      ▼
    ┌─────────────────────────────────────────┐
    │█████████████████████████████████████████│  Main Header
    └──┬────┬────┬────┬────┬────┬────┬────┬──┘  (Large diameter)
       │    │    │    │    │    │    │    │
       ▼    ▼    ▼    ▼    ▼    ▼    ▼    ▼
      Out  Out  Out  Out  Out  Out  Out  Out
       1    2    3    4    5    6    7    8

DESIGN RULES:
1. Header diameter > Sum of outlet diameters
2. Velocity in header: 2-5 feet/second
3. Equal-length outlet pipes when possible
4. Valves on each outlet for balancing
5. Consider reverse-flow header for perfect balance

REVERSE-FLOW BALANCED HEADER:

    Inlet                                    End Cap
      │                                          │
      ▼                                          ▼
    ┌─────────────────────────────────────────┐
    │████████████►►►►►►►►►►►►►►►►►►►►►››►►││
    │◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄◄████████████│
    └──┬────┬────┬────┬────┬────┬────┬────┬──┘
       │    │    │    │    │    │    │    │
       ▼    ▼    ▼    ▼    ▼    ▼    ▼    ▼

Flow in both directions creates equal pressure at each outlet
```

### Pipe Sizing

**Flow Velocity Guidelines:**
- Gravity drains: 2-4 ft/s
- Pressure systems: 3-7 ft/s
- Avoid: <2 ft/s (settling) or >8 ft/s (erosion, noise)

**Friction Loss Table:**

| Pipe Diameter | Flow (GPM) | Velocity (ft/s) | Friction (ft/100ft) |
|---------------|------------|-----------------|---------------------|
| 1" | 10 | 5.1 | 12.8 |
| 1.5" | 20 | 4.5 | 7.2 |
| 2" | 40 | 5.1 | 8.4 |
| 3" | 100 | 5.7 | 6.8 |
| 4" | 200 | 6.4 | 7.2 |

---

## Critical Control Points

### Monitoring and Control Locations

```
┌───────────────────────────────────────────────────────────┐
│        CRITICAL CONTROL POINTS IN RECIRCULATION           │
├───────────────────────────────────────────────────────────┤
│                                                           │
│  ① SYSTEM INLET (Fresh Water)                             │
│     Monitor: EC, pH, temperature                          │
│     Control: Flow rate, quality                           │
│                                                           │
│  ② POST-GROWING ZONE (Return Water)                       │
│     Monitor: Temperature, DO, debris                      │
│     Purpose: Assess plant impact on water                 │
│                                                           │
│  ③ POST-FILTRATION                                        │
│     Monitor: Turbidity, pressure differential             │
│     Purpose: Verify filtration effectiveness              │
│                                                           │
│  ④ POST-STERILIZATION                                     │
│     Monitor: UV intensity, ORP (for ozone)                │
│     Purpose: Verify pathogen control                      │
│                                                           │
│  ⑤ RESERVOIR/PRE-DISTRIBUTION                             │
│     Monitor: Full water quality panel                     │
│     Control: pH, EC, nutrient injection                   │
│     Purpose: Final adjustment before plants               │
│                                                           │
│  ⑥ END OF LINE (Furthest point)                           │
│     Monitor: pH, EC, temperature                          │
│     Purpose: Verify distribution uniformity               │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

### Instrumentation Placement

**Essential Sensors:**
- pH probe: Reservoir (temperature compensated)
- EC meter: Reservoir
- Temperature: Multiple zones
- Flow meter: Main circulation pump
- Level sensor: Reservoir
- Pressure gauge: After pump, filter

**Advanced Monitoring:**
- DO probes: Growing zones
- ORP probe: Post-sterilization
- Turbidity: Post-filtration
- Individual zone flow meters

---

## Scale-Specific Designs

### Small System (< 1,000 sq ft)

```
SMALL-SCALE RECIRCULATION DESIGN

┌─────────────────────────────────────────┐
│  System Volume: 500-1,000 gallons       │
│  Flow Rate: 5-10 GPM                    │
│  Configuration: Single loop             │
└─────────────────────────────────────────┘

Components:
• 100-200 gal reservoir
• Single 10 GPM pump
• Simple mechanical filter (bag/cartridge)
• 10-15 GPM UV unit
• Manual pH/nutrient adjustment
• Basic monitoring (pH, EC, temp)

Advantages:
✓ Low capital cost ($3,000-8,000)
✓ Simple operation
✓ Easy troubleshooting
✓ Suitable for single crop type

Limitations:
✗ Limited expansion capability
✗ Manual management intensive
✗ Higher labor per unit production
```

### Medium System (1,000-10,000 sq ft)

```
MEDIUM-SCALE RECIRCULATION DESIGN

┌─────────────────────────────────────────┐
│  System Volume: 2,000-8,000 gallons     │
│  Flow Rate: 20-80 GPM                   │
│  Configuration: Zoned or hybrid         │
└─────────────────────────────────────────┘

Components:
• 500-1,500 gal central reservoir
• Multiple pumps (20-40 GPM each)
• Automated backwash sand filters
• Commercial UV or ozone
• Automated pH/nutrient dosing
• Comprehensive monitoring system
• SCADA or PLC control

Advantages:
✓ Zone isolation possible
✓ Automation reduces labor
✓ Multiple crop types
✓ Scalable design

Typical Cost: $15,000-50,000

Recommended for commercial operations
```

### Large System (> 10,000 sq ft)

```
LARGE-SCALE RECIRCULATION DESIGN

┌─────────────────────────────────────────┐
│  System Volume: 10,000+ gallons         │
│  Flow Rate: 100+ GPM                    │
│  Configuration: Modular/distributed     │
└─────────────────────────────────────────┘

Components:
• Multiple zone reservoirs (1,000+ gal ea)
• VFD pumps for energy efficiency
• Multi-stage filtration
• Commercial ozone + UV backup
• Fully automated control system
• Real-time monitoring/alerts
• Redundant critical systems

Design Principles:
• Redundancy (backup pumps, power)
• N+1 capacity (can lose one unit)
• Remote monitoring capability
• Automated failover systems
• Professional engineering required

Investment: $75,000-300,000+
```

---

## Design Checklist

```
□ SYSTEM CONFIGURATION
  □ Centralized vs. zoned approach selected
  □ Flow pattern designed for efficiency
  □ Critical control points identified

□ SIZING CALCULATIONS
  □ System volume calculated
  □ Flow rates determined
  □ Pump TDH calculated
  □ Reservoir sized appropriately
  □ Pipe diameters selected

□ COMPONENT SELECTION
  □ Pumps specified with safety margin
  □ Filtration capacity matches flow
  □ UV/sterilization properly sized
  □ Materials compatible with water chemistry

□ MONITORING & CONTROL
  □ Sensor locations identified
  □ Control strategy defined
  □ Alarm/alert system planned
  □ Data logging capability

□ SAFETY & BACKUP
  □ Overflow protection
  □ Low water level cutoffs
  □ Power failure handling
  □ Emergency procedures documented

□ MAINTENANCE ACCESS
  □ Filters accessible
  □ Pumps serviceable
  □ Valves clearly labeled
  □ Drains for system cleaning
```

---

## Module Summary

### Key Takeaways

1. **System architecture matters** - centralized, zoned, or hybrid configurations each have trade-offs in cost, complexity, and risk management

2. **Proper sizing is critical** - flow rates, retention times, and component capacities must be calculated, not guessed

3. **Critical control points** - strategic placement of monitoring and control equipment ensures system performance and early problem detection

4. **Scale determines complexity** - small systems can be simple and manual; large systems require automation and redundancy

5. **Design for maintenance** - accessible components and clear labeling reduce downtime and operating costs

### Action Items

Before proceeding to Module 3:
- [ ] Sketch your system configuration
- [ ] Calculate system volume and flow requirements
- [ ] Size major components (pumps, reservoir, treatment)
- [ ] Identify critical control point locations
- [ ] Consider your monitoring strategy

---

*EcoFusion Academy - Course 212, Module 2*
