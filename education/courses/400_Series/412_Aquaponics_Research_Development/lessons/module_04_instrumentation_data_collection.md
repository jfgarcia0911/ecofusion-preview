# Module 4: Instrumentation and Data Collection

## Learning Objectives

By the end of this module, you will be able to:
- Select appropriate sensors and instrumentation for research applications
- Implement calibration protocols to ensure measurement accuracy
- Design data logging systems for continuous monitoring
- Apply quality assurance and quality control (QA/QC) procedures
- Calculate and report measurement uncertainty
- Set up automated data acquisition systems

## 4.1 Sensor Selection and Calibration

### Key Water Quality Parameters

```
┌────────────────────────────────────────────────────────┐
│        CRITICAL MEASUREMENTS IN AQUAPONICS RESEARCH    │
└────────────────────────────────────────────────────────┘

PARAMETER         │ RANGE        │ ACCURACY    │ FREQUENCY
──────────────────┼──────────────┼─────────────┼──────────
Temperature       │ 10-35°C      │ ±0.1°C      │ Continuous
pH                │ 4-9          │ ±0.05 units │ Hourly
Dissolved Oxygen  │ 0-20 mg/L    │ ±0.2 mg/L   │ Continuous
EC/TDS            │ 0-3 mS/cm    │ ±1%         │ Daily
ORP               │ -500-500 mV  │ ±5 mV       │ Continuous
TAN (NH₃+NH₄⁺)   │ 0-5 mg/L     │ ±0.1 mg/L   │ Daily
Nitrite (NO₂⁻)   │ 0-5 mg/L     │ ±0.05 mg/L  │ Daily
Nitrate (NO₃⁻)   │ 0-200 mg/L   │ ±2 mg/L     │ Weekly
Phosphate (PO₄³⁻) │ 0-50 mg/L    │ ±0.5 mg/L   │ Weekly
```

### Sensor Technologies

**pH Sensors:**

```
TYPES:
├── Glass electrode (most common)
│   ├── Pros: Accurate, wide range
│   ├── Cons: Fragile, requires maintenance
│   └── Cost: $100-500
│
├── ISFET (Ion-Sensitive Field Effect Transistor)
│   ├── Pros: Durable, fast response
│   ├── Cons: More expensive, temperature sensitive
│   └── Cost: $300-1000
│
└── Optical pH
    ├── Pros: No drift, maintenance-free
    ├── Cons: Expensive, limited availability
    └── Cost: $1000+

CALIBRATION:
┌──────────────────────────────────────────┐
│    TWO-POINT CALIBRATION PROCEDURE       │
└──────────────────────────────────────────┘

1. Prepare buffer solutions (pH 4.0, 7.0, 10.0)
2. Rinse probe with DI water
3. Immerse in pH 7.0 buffer
4. Allow stabilization (1-2 minutes)
5. Adjust to read 7.00
6. Rinse and immerse in pH 4.0 or 10.0
7. Adjust slope if needed
8. Verify with third buffer

Frequency: Weekly or when drift >0.1 units
Record all calibrations in logbook
```

**Dissolved Oxygen Sensors:**

```
POLAROGRAPHIC (Clark-type):
┌────────────────────┐
│    ┌──────┐        │
│    │ Anode│        │  Working Principle:
│    └───┬──┘        │  O₂ diffuses through membrane
│        │           │  Electrochemical reduction
│    ┌───▼──┐        │  Current proportional to [O₂]
│    │Cathode│       │
│    └───┬──┘        │
│        │           │  Pros: Accurate, proven
│    ┌───▼────┐      │  Cons: Consumes O₂, stirring dependent
│    │Membrane│      │  Cost: $500-1500
│    └────────┘      │
└────────────────────┘

OPTICAL (Luminescent):
┌────────────────────┐
│  LED    Detector   │  Working Principle:
│   │        ▲       │  Fluorescence quenching by O₂
│   ▼        │       │  No O₂ consumption
│  ┌──────────┐      │
│  │Luminophore│     │  Pros: No drift, low maintenance
│  └──────────┘      │  Cons: More expensive initially
└────────────────────┘  Cost: $1000-2500

CALIBRATION:
├── Zero Point: Sodium sulfite solution (0% sat)
├── Span: Air-saturated water (100% sat)
└── Frequency: Monthly or before experiments
```

**Ion-Selective Electrodes (ISE):**

```
AVAILABLE FOR:
├── Ammonia (NH₃)
├── Nitrate (NO₃⁻)
├── Potassium (K⁺)
├── Sodium (Na⁺)
└── Calcium (Ca²⁺)

ADVANTAGES:
├── Real-time measurement
├── No sample preparation
└── Can be automated

LIMITATIONS:
├── Ionic strength effects
├── Temperature dependence
├── Interference from other ions
└── Regular calibration needed

CALIBRATION CURVE:
mV Reading
    ↑
    │     ●
  0 │       ●
    │         ●
-50 │           ●
    │             ●
-100│               ●
    │
    └───────────────────→ log[Concentration]
      -3  -2  -1   0   1

Nernstian slope ≈ 59 mV/decade at 25°C
```

### Spectrophotometric Methods

**Colorimetric Analysis:**

```
BEER-LAMBERT LAW:
A = ε × b × c

Where:
A = Absorbance (no units)
ε = Molar absorptivity (L/mol/cm)
b = Path length (cm)
c = Concentration (mol/L)

PROCEDURE FOR NITRATE:
┌──────────────────────────────────────────┐
│                                          │
│  1. Sample + Reagent → Colored Complex  │
│                                          │
│  2. Measure absorbance at λ = 540 nm    │
│                                          │
│  3. Compare to standard curve           │
│                                          │
└──────────────────────────────────────────┘

STANDARD CURVE:
Absorbance
    ↑
1.0 │                     ●
    │                   ●
0.8 │                 ●
    │               ●
0.6 │             ●
    │           ●
0.4 │         ●
    │       ●
0.2 │     ●
    │   ●
  0 └───────────────────────→ Concentration
      0  10  20  30  40  50 mg/L NO₃-N

Equation: y = 0.0198x + 0.015
R² = 0.9995

Detection Limit: 0.1 mg/L
Quantification Limit: 0.5 mg/L
```

### Environmental Sensors

```
LIGHT MEASUREMENT:

PAR (Photosynthetically Active Radiation)
├── Units: μmol photons/m²/s
├── Wavelength: 400-700 nm
├── Sensor: Quantum sensor
├── Accuracy: ±5%
└── Cost: $300-800

PPFD Distribution Mapping:
Grid measurements at canopy level

  ┌─────────────────────┐
  │ 180  195  185  190  │  Numbers = μmol/m²/s
  │ 192  210  205  198  │
  │ 188  208  212  195  │  Identify hot spots
  │ 185  198  192  188  │  and shaded areas
  └─────────────────────┘

  Mean: 195 μmol/m²/s
  CV: 5.6% (acceptable uniformity <10%)

AIR QUALITY:
├── CO₂: NDIR sensor (0-2000 ppm, ±50 ppm)
├── Relative Humidity: Capacitive (0-100%, ±2%)
├── Temperature: Thermistor (±0.2°C)
└── Air velocity: Hot-wire anemometer (±0.1 m/s)
```

## 4.2 Data Logging Systems

### Data Logger Components

```
┌────────────────────────────────────────────────────────┐
│              DATA ACQUISITION SYSTEM                   │
└────────────────────────────────────────────────────────┘

                 ┌──────────────┐
                 │   SENSORS    │
                 └──────┬───────┘
                        │ Analog/Digital Signals
                        ▼
            ┌───────────────────────┐
            │   SIGNAL CONDITIONING │
            │  (Amplification, etc) │
            └───────────┬───────────┘
                        │
                        ▼
              ┌─────────────────┐
              │  DATA LOGGER    │
              │  - ADC          │
              │  - Memory       │
              │  - Clock        │
              └────────┬────────┘
                       │
         ┌─────────────┼─────────────┐
         │             │             │
         ▼             ▼             ▼
    ┌────────┐   ┌─────────┐   ┌────────┐
    │  USB   │   │ Wireless│   │  Cloud │
    │ Drive  │   │ (WiFi)  │   │ Server │
    └────────┘   └─────────┘   └────────┘
         │             │             │
         └─────────────┴─────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  DATA ANALYSIS  │
              │   & STORAGE     │
              └─────────────────┘
```

### Commercial Data Loggers

```
HOBO SERIES (Onset):
├── Models: UX120-006M (4-channel)
├── Inputs: Analog, digital, pulse
├── Sampling: 1 second to 18 hours
├── Memory: 1.9 million measurements
├── Power: Battery (3-5 years)
├── Cost: $200-600
└── Software: HOBOware (free)

CAMPBELL SCIENTIFIC:
├── Models: CR1000X, CR6
├── Professional-grade
├── Programmable (CRBasic)
├── Extensive I/O options
├── Telecommunication capable
├── Cost: $2000-5000
└── Learning curve: Moderate-High

ARDUINO/RASPBERRY PI (DIY):
├── Highly customizable
├── Open-source
├── Community support
├── Lower cost ($50-200)
├── Requires programming
└── Best for custom applications
```

### Sampling Frequency Decisions

```
┌────────────────────────────────────────────────────────┐
│         SAMPLING FREQUENCY GUIDELINES                  │
└────────────────────────────────────────────────────────┘

PARAMETER          │ RATE OF CHANGE │ SAMPLING FREQUENCY
───────────────────┼────────────────┼───────────────────
Temperature        │ Moderate       │ 5-15 minutes
Dissolved Oxygen   │ Fast           │ 1-5 minutes
pH                 │ Moderate       │ 15-60 minutes
EC                 │ Slow           │ 1-24 hours
Nutrients (ISE)    │ Slow           │ 1-6 hours
Light intensity    │ Fast           │ 1-5 minutes
Flow rate          │ Moderate       │ 5-15 minutes

NYQUIST CRITERION:
Sample at ≥2× the highest frequency of interest

Example: To detect hourly DO fluctuations
         Minimum sampling: Every 30 minutes
         Recommended: Every 10-15 minutes

STORAGE CONSIDERATIONS:
├── 1 sensor, 5-min intervals, 30 days
│   └── 8,640 measurements
│
├── 10 sensors, 5-min intervals, 30 days
│   └── 86,400 measurements
│
└── Storage needs:
    Text file: ~2-5 MB
    Binary: ~500 KB
```

## 4.3 Quality Assurance and Quality Control

### QA/QC Framework

```
┌────────────────────────────────────────────────────────┐
│               QA/QC HIERARCHY                          │
└────────────────────────────────────────────────────────┘

QUALITY ASSURANCE (QA):
├── Planned activities to ensure quality
├── Standard Operating Procedures (SOPs)
├── Training and certification
├── Equipment maintenance schedules
├── Documentation protocols
└── Audits and reviews

QUALITY CONTROL (QC):
├── Activities to verify quality
├── Calibration checks
├── Blank samples
├── Duplicate samples
├── Spike recoveries
├── Reference standards
└── Control charts

QUALITY INDICATORS:
├── Accuracy: Closeness to true value
├── Precision: Reproducibility
├── Sensitivity: Smallest detectable difference
├── Linearity: Proportional response
└── Range: Working concentration range
```

### Calibration Verification

```
CALIBRATION CHECK STANDARDS:

TYPES:
├── Certified Reference Materials (CRM)
│   └── NIST traceable standards
│
├── Secondary Standards
│   └── Prepared from CRM
│
└── Quality Control Samples
    └── Known concentration, unknown to analyst

FREQUENCY:
├── Before each analytical batch
├── After every 10-20 samples
├── If suspect results
└── Daily for continuous monitoring

ACCEPTANCE CRITERIA:
┌──────────────────┬────────────────┐
│   Parameter      │  Acceptance    │
├──────────────────┼────────────────┤
│ pH               │ ±0.1 units     │
│ DO               │ ±0.3 mg/L      │
│ Nutrients        │ ±10% of true   │
│ Temperature      │ ±0.2°C         │
└──────────────────┴────────────────┘

If outside limits:
1. Re-calibrate instrument
2. Repeat check standard
3. If still failing, troubleshoot/repair
4. Document corrective actions
```

### Sample Handling Protocols

```
CHAIN OF CUSTODY:

Water Sample Collection:
┌──────────────────────────────────────────┐
│ 1. Container Preparation                 │
│    ├── Acid-washed (trace metals)       │
│    ├── Pre-rinsed (general chemistry)   │
│    └── Labeled (ID, date, time)         │
│                                          │
│ 2. Collection Technique                  │
│    ├── Rinse 3× with sample water       │
│    ├── Fill to shoulder (no headspace)  │
│    ├── Avoid contamination              │
│    └── Record conditions (T, pH, DO)    │
│                                          │
│ 3. Preservation                          │
│    ├── Nutrients: H₂SO₄, freeze         │
│    ├── Metals: HNO₃, pH <2              │
│    ├── Organics: 4°C, dark              │
│    └── Microbial: Ice, <24h analysis    │
│                                          │
│ 4. Transportation                        │
│    ├── Cooler with ice                  │
│    ├── Maintain 4°C                     │
│    └── Deliver within holding time      │
└──────────────────────────────────────────┘

HOLDING TIMES:
├── Ammonia: 28 days (acidified, frozen)
├── Nitrate: 48 hours (refrigerated)
├── Phosphate: 48 hours (refrigerated)
└── Total coliforms: 6 hours (on ice)
```

### Replicate Samples

```
TYPES OF REPLICATES:

1. FIELD DUPLICATES
   Purpose: Assess sampling variability
   Frequency: 1 per 10 samples

   Procedure:
   ├── Collect two samples from same location
   ├── Treat as independent samples
   ├── Analyze separately
   └── Calculate Relative Percent Difference

   RPD = |C₁ - C₂| / [(C₁ + C₂)/2] × 100%

   Acceptance: RPD < 20%

2. ANALYTICAL DUPLICATES
   Purpose: Assess laboratory precision
   Frequency: 1 per 10 samples

   Procedure:
   ├── Split single sample
   ├── Analyze both portions
   └── Calculate precision

   Acceptance: RPD < 10%

3. MATRIX SPIKES
   Purpose: Assess accuracy and matrix effects
   Frequency: 1 per 20 samples

   Procedure:
   ├── Add known amount to sample
   ├── Analyze spiked and unspiked
   ├── Calculate percent recovery

   % Recovery = [(Cspiked - Cunspiked) / Cadded] × 100%

   Acceptance: 85-115% recovery
```

### Control Charts

```
SHEWHART CONTROL CHART:

Calibration Check Standard (10 mg/L Nitrate)

Measured
Concentration
(mg/L)
    ↑
11.0│                                  UCL (Upper Control Limit)
    │- - - - - - - - - - - - - - - - - - - - - - -
10.5│
    │                 ●           ●
10.0├─────────●───────●───●───────●───●────  Target
    │     ●       ●           ●
 9.5│                                   ●
    │- - - - - - - - - - - - - - - - - - - - - - -
 9.0│                                  LCL (Lower Control Limit)
    │
    └───────────────────────────────────────────→ Time
        1   2   3   4   5   6   7   8   9  10

CONTROL LIMITS:
UCL = Target + 3σ
LCL = Target - 3σ

WARNING LIMITS:
UWL = Target + 2σ
LWL = Target - 2σ

OUT-OF-CONTROL INDICATORS:
├── 1 point beyond control limits
├── 2 of 3 consecutive points beyond warning limits
├── 7 consecutive points on one side of target
├── 7 consecutive increasing or decreasing points
└── Unusual patterns (cycles, trends)

CORRECTIVE ACTIONS:
└── Investigate cause, recalibrate, reanalyze samples
```

## 4.4 Measurement Uncertainty

### Sources of Uncertainty

```
TOTAL MEASUREMENT UNCERTAINTY:

u_total = √(u₁² + u₂² + u₃² + ... + uₙ²)

COMPONENT UNCERTAINTIES:

1. SAMPLING UNCERTAINTY (u_sampling)
   ├── Spatial variability
   ├── Temporal variability
   └── Sample collection technique

2. INSTRUMENT UNCERTAINTY (u_instrument)
   ├── Resolution (±0.01 mg/L)
   ├── Calibration accuracy
   └── Drift between calibrations

3. METHOD UNCERTAINTY (u_method)
   ├── Reagent preparation
   ├── Reaction time/temperature
   └── Analyst technique

4. ENVIRONMENTAL UNCERTAINTY (u_environment)
   ├── Temperature effects
   ├── Pressure effects
   └── Humidity effects
```

### Uncertainty Calculation Example

```
NITRATE ANALYSIS UNCERTAINTY:

Given:
├── Instrument precision: ±0.2 mg/L
├── Calibration uncertainty: ±0.15 mg/L
├── Method repeatability: ±0.3 mg/L
└── Sample preparation: ±0.1 mg/L

CALCULATION:
u_total = √(0.2² + 0.15² + 0.3² + 0.1²)
        = √(0.04 + 0.0225 + 0.09 + 0.01)
        = √0.1625
        = 0.40 mg/L

EXPANDED UNCERTAINTY (95% CI):
U = k × u_total
  = 2 × 0.40
  = 0.80 mg/L

REPORTING:
Measured concentration: 15.3 ± 0.8 mg/L NO₃-N
(95% confidence level, n=3)

Or: 15.3 mg/L (14.5 - 16.1 mg/L)
```

### Propagation of Uncertainty

```
DERIVED CALCULATIONS:

Example: Ammonia removal rate

Removal Rate = (C_in - C_out) × Flow / Volume

Given uncertainties:
├── C_in: 2.5 ± 0.2 mg/L
├── C_out: 0.3 ± 0.2 mg/L
├── Flow: 100 ± 5 L/h
└── Volume: 1000 ± 10 L

PROPAGATION:
For function f(x,y,z):

u_f² = (∂f/∂x)²u_x² + (∂f/∂y)²u_y² + (∂f/∂z)²u_z²

Result: 0.22 ± 0.03 mg/L/h

Relative uncertainty: 13.6%
```

## 4.5 Automated Data Acquisition

### Arduino-Based System Example

```
HARDWARE CONFIGURATION:

┌─────────────────────────────────────────┐
│        Arduino Mega 2560                │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │ Digital Pins  │ Analog Pins      │  │
│  ├──────────────────────────────────┤  │
│  │ D2: pH sensor │ A0: Temperature  │  │
│  │ D3: DO sensor │ A1: EC sensor    │  │
│  │ D4: Relay     │ A2: Light sensor │  │
│  │ D5: SD card   │ A3: Flow meter   │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  RTC Module (DS3231)             │  │
│  │  (Real-time clock)               │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  SD Card Module                  │  │
│  │  (Data storage)                  │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  LCD Display (16×2)              │  │
│  │  (Real-time readout)             │  │
│  └──────────────────────────────────┘  │
└─────────────────────────────────────────┘

SAMPLE CODE STRUCTURE:

```cpp
#include <SD.h>
#include <RTClib.h>

RTC_DS3231 rtc;

void setup() {
  // Initialize sensors
  // Initialize SD card
  // Set sampling interval
}

void loop() {
  // Read sensors
  float temp = readTemperature();
  float pH = readpH();
  float DO = readDO();

  // Timestamp
  DateTime now = rtc.now();

  // Log to SD card
  logData(now, temp, pH, DO);

  // Display on LCD
  displayValues(temp, pH, DO);

  // Wait until next sample
  delay(300000); // 5 minutes
}
```

### IoT Integration

```
CLOUD-BASED MONITORING:

        ┌───────────────┐
        │   SENSORS     │
        └───────┬───────┘
                │
                ▼
        ┌───────────────┐
        │  ESP32/WiFi   │
        │  Microcontroller│
        └───────┬───────┘
                │ MQTT/HTTP
                ▼
        ┌───────────────┐
        │  Cloud Server │
        │  (ThingSpeak, │
        │   Blynk, AWS) │
        └───────┬───────┘
                │
        ┌───────┴───────┐
        │               │
        ▼               ▼
   ┌─────────┐    ┌──────────┐
   │  Web    │    │  Mobile  │
   │Dashboard│    │   App    │
   └─────────┘    └──────────┘

FEATURES:
├── Real-time visualization
├── Historical data access
├── Alerts and notifications
├── Remote control
├── Multi-user access
└── Data export
```

## Key Takeaways

1. **Calibrate Regularly** - Maintain calibration schedules and document all procedures
2. **Implement QA/QC** - Use blanks, duplicates, and standards to ensure data quality
3. **Calculate Uncertainty** - Report measurements with appropriate uncertainty estimates
4. **Standardize Protocols** - Develop and follow SOPs for consistency
5. **Automate Wisely** - Balance automation benefits with maintenance requirements

## Practical Application

**Sensor Network Design Challenge:**

Design a comprehensive monitoring system for a 1000 m² commercial aquaponics facility with:
- 4 fish tanks (5000 L each)
- 8 deep water culture units
- 2 biofilters

Your design should include:
1. List of all sensors needed (with specifications)
2. Sampling frequencies for each parameter
3. Data logging strategy
4. QA/QC protocols
5. Budget estimate
6. Maintenance schedule

## Further Reading

- APHA (2017). *Standard Methods for the Examination of Water and Wastewater* (23rd ed.)
- EPA (2002). *Guidance on Environmental Data Verification and Data Validation* (QA/G-8)
- Taylor, J.R. (1997). *An Introduction to Error Analysis* (2nd ed.)
- Omega Engineering. *Temperature Measurement Handbook*

---

**Next Module:** [Module 5: System Modeling and Simulation](module_05_system_modeling.md)
