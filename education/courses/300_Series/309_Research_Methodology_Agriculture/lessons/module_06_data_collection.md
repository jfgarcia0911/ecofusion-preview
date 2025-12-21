# Module 6: Data Collection

## Learning Objectives

By the end of this module, you will be able to:
1. Design effective data collection instruments
2. Implement quality control procedures
3. Calibrate and maintain measurement equipment
4. Organize and document data systematically
5. Prevent common data collection errors
6. Ensure data security and integrity

---

## Data Collection Planning

### Pre-Collection Checklist

```
┌─────────────────────────────────────────────────────────────────────┐
│              DATA COLLECTION PREPARATION                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ☐ Define what data to collect (variables)                         │
│  ☐ Determine measurement units and precision                       │
│  ☐ Select measurement instruments                                  │
│  ☐ Develop data collection forms/protocols                         │
│  ☐ Train personnel on procedures                                   │
│  ☐ Calibrate all equipment                                         │
│  ☐ Pilot test the protocol                                         │
│  ☐ Establish data recording system                                 │
│  ☐ Plan quality control checks                                     │
│  ☐ Set up data backup procedures                                   │
│  ☐ Prepare contingency plans                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Data Collection Protocol Components

| Component | Purpose | Example |
|-----------|---------|---------|
| **Objective** | Why collecting data | Measure effect of light on growth |
| **Variables** | What to measure | Plant height, leaf number, fresh weight |
| **Frequency** | When to collect | Daily, weekly, at harvest |
| **Methods** | How to measure | Ruler, counting, scale |
| **Personnel** | Who collects | Trained technician A |
| **Equipment** | Tools needed | Digital caliper, balance, datasheet |
| **Procedures** | Step-by-step instructions | Measure from base to apical meristem |
| **Quality control** | Verification steps | Calibrate scale daily, duplicate measurements |
| **Documentation** | Recording method | Excel template, lab notebook |

---

## Measurement Instruments

### Types of Instruments

**1. Direct Measurement Instruments**
- Rulers, calipers, tape measures (length)
- Balances, scales (mass)
- Thermometers (temperature)
- pH meters (acidity)
- EC/TDS meters (conductivity)
- DO meters (dissolved oxygen)

**2. Sensors and Monitors**
- Temperature sensors (thermocouples, RTD, thermistors)
- Humidity sensors
- Light sensors (PAR meters, spectrometers)
- Flow meters
- Pressure gauges

**3. Analytical Instruments**
- Spectrophotometers (nutrient analysis)
- Chromatography (chemical analysis)
- Microscopes (biological assessment)
- Colorimeters (water quality)

### Instrument Selection Criteria

| Criterion | Considerations |
|-----------|----------------|
| **Accuracy** | How close to true value? Required precision? |
| **Range** | Covers expected values? Appropriate scale? |
| **Resolution** | Smallest detectable change adequate? |
| **Response time** | Fast enough for application? |
| **Durability** | Withstands environmental conditions? |
| **Maintenance** | Calibration frequency? Ease of cleaning? |
| **Cost** | Within budget? Operating costs? |
| **Compatibility** | Works with data system? Standard outputs? |

---

## Measurement Quality in CEA

### Common Measurements and Standards

| Parameter | Instrument | Range | Precision | Calibration Frequency |
|-----------|------------|-------|-----------|----------------------|
| **Water Temperature** | Digital thermometer | 32-95°F | ±0.5°F | Monthly |
| **Air Temperature** | RTD sensor | 40-100°F | ±0.5°F | Quarterly |
| **pH** | pH meter | 0-14 | ±0.1 pH | Daily |
| **EC** | EC meter | 0-5 mS/cm | ±0.01 mS/cm | Weekly |
| **Dissolved Oxygen** | DO meter | 0-20 mg/L | ±0.1 mg/L | Weekly |
| **Light (PAR)** | Quantum sensor | 0-2000 μmol/m²/s | ±5% | Annually |
| **Ammonia** | Test kit/probe | 0-8 mg/L | ±0.25 mg/L | Per manufacturer |
| **Nitrate** | Test kit/probe | 0-200 mg/L | ±5 mg/L | Per manufacturer |
| **Plant height** | Ruler | 0-200 cm | ±0.5 cm | N/A (verified) |
| **Fresh weight** | Balance | 0-5000 g | ±1 g | Monthly |

### Accuracy vs. Precision

```
┌────────────────────────────────────────────────────────────────┐
│           ACCURACY AND PRECISION                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  HIGH ACCURACY          LOW ACCURACY         HIGH ACCURACY     │
│  LOW PRECISION          HIGH PRECISION       HIGH PRECISION    │
│                                                                │
│       •                     • • •                 • • •        │
│     •   •                   • • •                 • • •        │
│   •   ✖   •                 • • •                 •✖• •        │
│     •   •                   • • •                 • • •        │
│       •                     • • •                 • • •        │
│                                                                │
│  Scattered around       Precise but biased    Ideal: Both      │
│  true value (✖)         away from true        accurate and     │
│                         value                 precise          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Accuracy:** Closeness to true value (systematic error)
**Precision:** Repeatability of measurements (random error)

---

## Calibration Procedures

### Why Calibrate?

- Ensure measurement accuracy
- Detect instrument drift
- Maintain data quality
- Meet regulatory requirements
- Enable valid comparisons over time

### General Calibration Process

```
1. PREPARE
   └─► Gather standards, clean instrument, stabilize conditions

2. ZERO/BASELINE
   └─► Set instrument to zero or baseline reading

3. SPAN/SLOPE
   └─► Adjust using known reference standards

4. VERIFY
   └─► Test with additional standard(s)

5. DOCUMENT
   └─► Record calibration date, standards used, adjustments made

6. LABEL
   └─► Attach calibration sticker with next due date
```

### pH Meter Calibration Example

**Frequency:** Daily before use

**Materials:**
- pH 4.0, 7.0, and 10.0 buffer solutions (fresh)
- Rinse water (DI or distilled)
- Soft tissue

**Procedure:**

1. **Rinse** probe with distilled water, blot dry

2. **First buffer (pH 7.0):**
   - Immerse probe in pH 7.0 buffer
   - Wait for stable reading
   - Calibrate to 7.0
   - Rinse and blot

3. **Second buffer (pH 4.0 or 10.0):**
   - Choose based on expected sample range
   - For aquaponics (pH 6-7): use pH 4.0
   - Immerse probe
   - Wait for stable reading
   - Calibrate slope
   - Rinse and blot

4. **Verify:**
   - Test third buffer (optional but recommended)
   - Should read within ±0.1 pH
   - If not, repeat calibration or replace probe

5. **Document:**
   ```
   Date: 2024-05-15
   Instrument: pH meter #3
   Buffers: 7.0, 4.0
   Slope: 98.5% (acceptable 95-105%)
   Verified with pH 10.0: Read 10.02
   Technician: JD
   Next calibration: 2024-05-16
   ```

### EC Meter Calibration

**Frequency:** Weekly or per manufacturer

**Standard solutions:**
- 1.413 mS/cm (or 1000 ppm)
- 12.88 mS/cm (optional for high range)

**Procedure:**
1. Rinse probe
2. Immerse in standard
3. Adjust to match standard value
4. Verify with second standard
5. Document

### Balance Calibration

**Frequency:** Monthly or when moved

**Materials:**
- Certified calibration weights
- Level surface

**Procedure:**
1. Level balance (check bubble)
2. Zero/tare
3. Place calibration weight
4. Verify reading matches weight (±tolerance)
5. Adjust if needed per manual
6. Test multiple weights across range
7. Document

---

## Data Collection Forms

### Paper Data Sheets

**Essential Elements:**

| Element | Purpose |
|---------|---------|
| **Header** | Project name, date, researcher |
| **Unique identifiers** | Treatment, replicate, unit ID |
| **Variable fields** | Clearly labeled with units |
| **Observations/notes** | Space for qualitative data |
| **Signature** | Accountability |

**Design Principles:**
- Clear, logical layout
- Adequate space for entries
- Units specified for each variable
- Checkboxes for categorical data
- Pre-printed when possible to reduce errors

### Sample Data Sheet

```
╔════════════════════════════════════════════════════════════════╗
║  AQUAPONIC NUTRIENT TRIAL - PLANT MEASUREMENTS                 ║
╠════════════════════════════════════════════════════════════════╣
║                                                                ║
║  Date: ____________  Week: ____  Technician: ________________  ║
║  Weather: ☐ Sunny  ☐ Cloudy  ☐ Rainy                          ║
║                                                                ║
╠════════════════════════════════════════════════════════════════╣
║  Treatment: __________  Replicate: ____  Plant ID: ________    ║
║                                                                ║
║  HEIGHT (cm): __________   (measure from base to apical tip)   ║
║                                                                ║
║  LEAF COUNT: __________    (count fully expanded leaves)       ║
║                                                                ║
║  STEM DIAMETER (mm): __________  (measure at base)             ║
║                                                                ║
║  COLOR: ☐ Dark green  ☐ Green  ☐ Light green  ☐ Yellow        ║
║                                                                ║
║  HEALTH: ☐ Excellent  ☐ Good  ☐ Fair  ☐ Poor                  ║
║                                                                ║
║  NOTES/OBSERVATIONS:                                           ║
║  _____________________________________________________________  ║
║  _____________________________________________________________  ║
║                                                                ║
║  Signature: _______________________                            ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

### Digital Data Entry

**Options:**
- Spreadsheet (Excel, Google Sheets)
- Database (Access, FileMaker)
- Data collection apps (KoBoToolbox, ODK)
- Custom software
- Laboratory Information Management System (LIMS)

**Advantages of Digital:**
- Reduces transcription errors
- Automatic calculations
- Data validation rules
- Timestamp tracking
- Easy backup
- Direct integration with analysis software

**Validation Rules:**
- Range checks (e.g., pH must be 0-14)
- Required fields
- Data type restrictions (numeric, date, text)
- Logical checks (harvest weight > 0)

---

## Quality Control Procedures

### Quality Assurance vs. Quality Control

**Quality Assurance (QA):** Proactive system to prevent errors
- Standard operating procedures (SOPs)
- Training programs
- Equipment maintenance
- Protocol development

**Quality Control (QC):** Reactive checks to detect errors
- Duplicate measurements
- Blind samples
- Control charts
- Cross-checks

### QC Strategies

```
┌─────────────────────────────────────────────────────────────────────┐
│                  QUALITY CONTROL METHODS                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  REPLICATION                                                        │
│  └─► Measure same unit multiple times                              │
│      Calculate coefficient of variation (CV)                       │
│      CV = (SD / Mean) × 100%                                        │
│      Acceptable if CV < 5-10% (depends on parameter)               │
│                                                                     │
│  BLANKS                                                             │
│  └─► Known zero samples                                            │
│      Detect contamination or baseline drift                        │
│      Should read at or near zero                                   │
│                                                                     │
│  STANDARDS                                                          │
│  └─► Known concentration/value samples                             │
│      Verify accuracy                                               │
│      Should read within certified range                            │
│                                                                     │
│  SPIKES                                                             │
│  └─► Add known amount to sample                                    │
│      Calculate recovery %                                          │
│      Recovery = [(Spiked - Original) / Added] × 100%               │
│      Acceptable: 90-110% recovery                                  │
│                                                                     │
│  BLIND DUPLICATES                                                   │
│  └─► Re-measure sample without technician knowing                  │
│      Assess measurement repeatability                              │
│      Check for bias or drift                                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Control Charts

**Purpose:** Monitor measurement process over time

**Example: pH Control Chart**

```
pH
 │
8├                                           UCL (7.5)
 │
7├──────●───●───●───●───●───●───●───●────── Target (7.0)
 │
6├                                           LCL (6.5)
 │
 └───────────────────────────────────────────────→
    M   T   W   Th  F   M   T   W          Day

UCL = Upper Control Limit
LCL = Lower Control Limit
● = Daily reading

Action required if:
- Point outside control limits
- Trend of 7+ points in one direction
- 2 out of 3 points near control limit
```

---

## Standard Operating Procedures (SOPs)

### SOP Components

1. **Title and ID number**
2. **Purpose**
3. **Scope** (when to use)
4. **Responsibilities** (who does what)
5. **Materials and equipment**
6. **Safety considerations**
7. **Procedure** (step-by-step)
8. **Quality control**
9. **Data recording**
10. **References**
11. **Revision history**

### Example SOP: Measuring Plant Height

```
═══════════════════════════════════════════════════════════════
SOP-003: LETTUCE HEIGHT MEASUREMENT
Revision 2.1 | Effective Date: 2024-05-01
═══════════════════════════════════════════════════════════════

PURPOSE:
Standardize measurement of lettuce plant height to ensure
consistency and comparability across technicians and time.

EQUIPMENT:
- 30 cm rigid ruler with mm markings
- Clipboard and data sheet
- Pen/pencil

PROCEDURE:

1. TIMING:
   - Measure weekly on Mondays at 10:00 AM
   - Minimum 2 hours after lights on

2. MEASUREMENT:
   - Place ruler vertically next to plant
   - Zero point at growth media surface
   - Measure to tip of tallest fully extended leaf
   - Do NOT pull leaf upward
   - Round to nearest 0.5 cm

3. RECORDING:
   - Record immediately on data sheet
   - Include plant ID, date, height, technician initials
   - Note any abnormalities (damage, disease)

4. QUALITY CONTROL:
   - Technician B verifies 10% of measurements
   - Maximum acceptable difference: ±1 cm
   - If exceeded, re-measure all plants in that session

SAFETY:
- None (minimal hazard)

DOCUMENTATION:
- Form: Plant_Height_Data_Sheet_v2
- Enter into Excel template same day

APPROVED BY: Research Director         DATE: 2024-05-01
═══════════════════════════════════════════════════════════════
```

---

## Data Organization and Management

### File Naming Conventions

**Consistent Structure:**
```
[Project]_[DataType]_[Date]_[Version].extension

Examples:
AquaTrial_PlantHeight_2024-05-15_v1.xlsx
AquaTrial_WaterQuality_2024-05-15_v1.csv
AquaTrial_Protocol_2024-05-01_Final.pdf

Guidelines:
- No spaces (use underscores)
- ISO date format (YYYY-MM-DD)
- Descriptive but concise
- Version numbers or dates
- Avoid special characters
```

### Folder Structure

```
Project_Name/
├── 01_Planning/
│   ├── Proposal.docx
│   ├── Protocol_v3.pdf
│   └── IRB_Approval.pdf
├── 02_Data/
│   ├── Raw_Data/
│   │   ├── 2024-05/
│   │   └── 2024-06/
│   ├── Processed_Data/
│   │   └── Combined_Dataset.xlsx
│   └── Metadata/
│       └── Variable_Codebook.docx
├── 03_Analysis/
│   ├── Scripts/
│   └── Output/
├── 04_Results/
│   ├── Figures/
│   └── Tables/
├── 05_Reports/
│   └── Draft_Manuscript.docx
└── 06_Archive/
    └── Old_Versions/
```

### Metadata Documentation

**What is Metadata?**
Data about data - information describing dataset

**Essential Metadata:**

| Element | Example |
|---------|---------|
| **Variable names** | temp_water, pH, plant_height_cm |
| **Variable definitions** | "Water temperature measured at 10 AM daily" |
| **Units** | °F, pH units, cm |
| **Data type** | Numeric, categorical, date |
| **Valid range** | 60-90°F, 5.5-8.5 pH |
| **Missing data codes** | -999 = not measured, -888 = equipment failure |
| **Collection method** | YSI ProDSS multiparameter meter |
| **Collection dates** | 2024-05-01 to 2024-06-30 |
| **Collector** | Jane Doe, Agricultural Technician |
| **Project** | Aquaponic Nutrient Trial 2024 |

### Data Backup Strategy

**3-2-1 Rule:**
- **3** copies of data
- **2** different media types (e.g., hard drive + cloud)
- **1** copy off-site

**Backup Schedule:**
- Daily: Critical active data (automatic cloud sync)
- Weekly: Full project backup (external drive)
- Monthly: Archive to long-term storage

**Cloud Options:**
- University/institution servers
- Google Drive, OneDrive, Dropbox
- Specialized research data repositories (e.g., Dryad, Figshare)

---

## Common Data Collection Errors

### Types of Errors

| Error Type | Description | Example | Prevention |
|------------|-------------|---------|------------|
| **Transcription** | Copying error | 6.5 written as 5.6 | Digital entry, verification |
| **Measurement** | Incorrect reading | Reading wrong scale | Training, SOPs |
| **Timing** | Wrong collection time | Measuring before equilibration | Scheduled reminders, timers |
| **Equipment** | Malfunctioning instrument | Uncalibrated pH meter | Regular calibration, QC |
| **Missing data** | Forgetting to record | Skipped plant | Checklists, complete forms |
| **Transposition** | Switched values | Plant A data in Plant B row | Double-check, ID verification |
| **Unit confusion** | Wrong units | Recording cm as mm | Clear labeling, templates |
| **Contamination** | Sample contamination | Dirty probe | Cleaning protocols |

### Error Detection

**During Collection:**
- Double-check entries
- Verify calculations
- Look for outliers
- Cross-check related variables (e.g., EC and TDS)

**After Collection:**
- Data range checks
- Graphical inspection (plots)
- Statistical outlier tests
- Comparison to previous data

**Example Range Checks:**
```
IF pH < 4 OR pH > 9 THEN FLAG
IF water_temp < 50 OR water_temp > 100 THEN FLAG
IF plant_height_week2 < plant_height_week1 THEN FLAG
```

---

## Data Security and Ethics

### Data Security

**Protect Research Data:**
- Password-protected files
- Encrypted storage for sensitive data
- Access controls (who can view/edit)
- Regular backups
- Secure disposal of drafts/hard copies

### Data Integrity

**Maintain Honesty:**
- Never fabricate data
- Never falsify data
- Record all data (including unexpected results)
- Document data cleaning steps
- Preserve original raw data (never overwrite)
- Track all changes (audit trail)

### Data Sharing

**Considerations:**
- Institutional policies
- Funder requirements (many require data sharing)
- Intellectual property
- Privacy/confidentiality
- Embargo periods
- Data repositories (make data FAIR: Findable, Accessible, Interoperable, Reusable)

---

## Practical Exercise

### Design a Data Collection Protocol

**Scenario:**
"You are conducting a 6-week trial comparing 3 nutrient formulations on basil growth in hydroponics. You have 5 replicate systems per treatment (15 total systems), each with 10 plants."

**Tasks:**

1. **List all variables** to collect (plant, system, environment)

2. **Specify measurement instruments** and precision

3. **Define measurement frequency** for each variable

4. **Create a data sheet** for one week's measurements

5. **Develop a calibration schedule** for all instruments

6. **Outline QC procedures** to ensure data quality

7. **Describe data backup plan**

---

## Key Takeaways

1. **Planning is critical:** Develop detailed protocols before data collection begins

2. **Calibrate regularly:** Ensures measurement accuracy and data quality

3. **Standardize procedures:** SOPs enable consistency across personnel and time

4. **Implement QC:** Use replicates, standards, and blanks to verify data quality

5. **Organize systematically:** Consistent file naming and folder structure saves time

6. **Document thoroughly:** Metadata ensures data are understandable and usable

7. **Backup religiously:** 3-2-1 rule prevents catastrophic data loss

8. **Maintain integrity:** Never alter or fabricate data; document all changes

---

## Next Module Preview

**Module 7: Statistical Analysis I - Foundations**

Learn about:
- Descriptive statistics
- Probability distributions
- Hypothesis testing framework
- t-tests
- Assumptions and diagnostics

---

*Module 6 Complete | Course 309: Research Methodology for Agriculture*
