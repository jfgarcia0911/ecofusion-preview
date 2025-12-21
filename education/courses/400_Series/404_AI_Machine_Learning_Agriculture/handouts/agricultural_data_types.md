# Agricultural Data Types & Collection Methods

## Data Categories in Controlled Environment Agriculture

### 1. Environmental Data

```
┌────────────────────────────────────────────────────────────────┐
│                    CLIMATE & ENVIRONMENT                        │
└────────────────────────────────────────────────────────────────┘

SENSOR TYPE          MEASUREMENT          UNIT         FREQUENCY    USE CASE
───────────          ───────────          ────         ─────────    ────────
Temperature          Air, leaf, root      °C / °F      1-5 min      Growth control
Humidity             Relative humidity    %RH          1-5 min      VPD calculation
Light                PAR, DLI             µmol/m²/s    1-5 min      Photoperiod
CO2                  Concentration        ppm          1-5 min      Photosynthesis
Airflow              Velocity             m/s          5-15 min     Circulation
Pressure             Atmospheric          kPa          15-60 min    Weather correlation

Typical Data Volume: ~8,640 readings/sensor/day (5-min intervals)
Storage: 50 bytes/reading → ~400 KB/sensor/day
```

### 2. Irrigation & Nutrients

```
┌────────────────────────────────────────────────────────────────┐
│                    WATER & NUTRIENT DATA                        │
└────────────────────────────────────────────────────────────────┘

PARAMETER            MEASUREMENT          UNIT         FREQUENCY    IMPORTANCE
─────────            ───────────          ────         ─────────    ──────────
pH                   Acidity/alkalinity   pH           Continuous   Critical
EC                   Electrical           mS/cm        Continuous   Critical
                    conductivity
Water temp           Solution temp        °C           Continuous   Important
Flow rate            Volume/time          L/min        Continuous   Monitoring
DO                   Dissolved oxygen     mg/L         Hourly       Health
Nutrients            NPK, Ca, Mg, etc.    ppm          Daily        Precision

Typical Events: ~100-500 irrigation events/day
Data per event: Time, volume, EC, pH, duration
Storage: ~200 bytes/event → 100 KB/day
```

### 3. Growth & Phenotype Data

```
┌────────────────────────────────────────────────────────────────┐
│                    PLANT GROWTH METRICS                         │
└────────────────────────────────────────────────────────────────┘

METRIC               METHOD               UNIT         FREQUENCY    ML APPLICATION
──────               ──────               ────         ─────────    ──────────────
Height               Manual/vision        cm           Weekly       Growth models
Width/diameter       Vision/calipers      cm           Weekly       Uniformity
Leaf area            Vision/sensors       cm²          Weekly       LAI calculation
Stem diameter        Calipers             mm           Weekly       Health indicator
Internode length     Manual               cm           Weekly       Stretch analysis
Leaf count           Manual/vision        count        Weekly       Stage detection
Flowering stage      Manual/vision        category     Daily        Harvest timing
Fruit count          Vision               count        Daily        Yield prediction
Fruit size           Vision/manual        mm, g        Daily        Quality grading

Data Collection Methods:
- Manual measurement: Labor-intensive, accurate
- Computer vision: Automated, scalable, requires ML
- 3D sensors: Precise, expensive
- Multispectral: Non-contact, specialized
```

### 4. Image Data

```
┌────────────────────────────────────────────────────────────────┐
│                    VISUAL DATA COLLECTION                       │
└────────────────────────────────────────────────────────────────┘

IMAGE TYPE           RESOLUTION           SIZE         CAPTURE RATE APPLICATIONS
──────────           ──────────           ────         ──────────── ────────────
RGB                  1920×1080            1-5 MB       Hourly       Disease detect
Multispectral        1280×960 ×5          5-15 MB      Daily        Stress analysis
Thermal IR           640×480              500 KB       Hourly       Water stress
Depth/3D             640×480              1-2 MB       Weekly       Structure
Hyperspectral        1024×768×100+        50-200 MB    Weekly       Chemical analysis
Microscope           4096×3072            10-20 MB     On-demand    Pathogen ID

Daily Data Volume (1000 plants, 1 image/plant/day):
- RGB: 1-5 GB/day
- Multispectral: 5-15 GB/day
- Total: 10-30 GB/day

Storage Considerations:
- Raw images: High storage, full information
- Compressed (JPEG): 10× smaller, some loss
- Features only: 100× smaller, limited reuse
```

### 5. Operational Data

```
┌────────────────────────────────────────────────────────────────┐
│                    OPERATIONS & ACTIVITIES                      │
└────────────────────────────────────────────────────────────────┘

DATA TYPE            EXAMPLES             FORMAT       FREQUENCY    VALUE
─────────            ────────             ──────       ─────────    ─────
Planting             Date, variety, qty   Structured   Per batch    Planning
Transplanting        Date, location       Structured   Per batch    Tracking
Pest scouting        Type, count, loc     Mixed        Weekly       IPM
Disease events       Type, severity       Mixed        As-needed    Prevention
Harvesting           Date, weight, grade  Structured   Daily        Yield analysis
Labor hours          Task, time, cost     Structured   Daily        Efficiency
Input usage          Fert, pesticides     Structured   Per appl.    Cost tracking
Maintenance          Equipment, repairs   Text         As-needed    Reliability

Database Schema Example:
┌──────────────┬──────────────┬──────────────┬──────────────┐
│  timestamp   │  event_type  │   details    │   location   │
├──────────────┼──────────────┼──────────────┼──────────────┤
│ 2024-01-15   │  planting    │  {variety,   │   Zone A     │
│ 08:30:00     │              │   quantity}  │   Bench 1    │
└──────────────┴──────────────┴──────────────┴──────────────┘
```

### 6. External Data

```
┌────────────────────────────────────────────────────────────────┐
│                    EXTERNAL DATA SOURCES                        │
└────────────────────────────────────────────────────────────────┘

SOURCE               DATA PROVIDED        UPDATE FREQ   INTEGRATION   COST
──────               ─────────────        ───────────   ───────────   ────
Weather API          Forecast, history    Hourly        REST API      Free-Paid
Energy provider      Usage, price         15-min        API/CSV       Free
Market data          Prices, demand       Daily         API/Scraping  Free-Paid
Academic databases   Research, cultivars  Static        Manual        Free
Supply chain         Inputs, logistics    Real-time     EDI/API       Paid
Satellite            NDVI, weather        Daily         API           Paid

Example Integration:
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  Weather     │ ───► │  Data        │ ───► │  ML Model    │
│  Service API │      │  Pipeline    │      │  Training    │
└──────────────┘      └──────────────┘      └──────────────┘
      │                      │                      │
   Forecast           Enrichment              Better predictions
```

---

## Data Collection Architecture

### Hierarchical Data Structure

```
FACILITY LEVEL
│
├── ZONE LEVEL (e.g., Zone A, Zone B)
│   │
│   ├── BENCH/ROW LEVEL
│   │   │
│   │   ├── PLANT LEVEL
│   │   │   │
│   │   │   ├── Sensor readings (environment)
│   │   │   ├── Growth measurements
│   │   │   ├── Images
│   │   │   └── Events (pest, disease, harvest)
│   │   │
│   │   └── Aggregate metrics
│   │       ├── Average environment
│   │       ├── Total yield
│   │       └── Uniformity coefficients
│   │
│   └── Zone-wide sensors
│       ├── Climate sensors
│       ├── HVAC status
│       └── Energy meters
│
└── Facility metadata
    ├── Equipment inventory
    ├── Layout/design
    └── Standard operating procedures
```

### Data Flow Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│                    DATA COLLECTION PIPELINE                      │
└─────────────────────────────────────────────────────────────────┘

LAYER 1: COLLECTION
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Sensors  │  │ Cameras  │  │ Manual   │  │ External │
│  (IoT)   │  │          │  │  Entry   │  │   APIs   │
└────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘
     │             │             │             │
     └─────────────┴─────────────┴─────────────┘
                   │
LAYER 2: TRANSMISSION
                   │
          ┌────────▼────────┐
          │  Message Queue  │
          │  (MQTT, Kafka)  │
          └────────┬────────┘
                   │
LAYER 3: PROCESSING
                   │
     ┌─────────────┼─────────────┐
     │             │             │
┌────▼────┐  ┌────▼────┐  ┌────▼────┐
│Validate │  │ Clean   │  │ Enrich  │
└────┬────┘  └────┬────┘  └────┬────┘
     │             │             │
     └─────────────┴─────────────┘
                   │
LAYER 4: STORAGE
                   │
     ┌─────────────┼─────────────┐
     │             │             │
┌────▼────┐  ┌────▼────┐  ┌────▼────┐
│ Time-   │  │  Data   │  │  Data   │
│ Series  │  │  Lake   │  │  Mart   │
│   DB    │  │ (Raw)   │  │(Processed)│
└─────────┘  └─────────┘  └─────────┘
                   │
LAYER 5: CONSUMPTION
                   │
     ┌─────────────┼─────────────┐
     │             │             │
┌────▼────┐  ┌────▼────┐  ┌────▼────┐
│   ML    │  │Dashboard│  │ Reports │
│Training │  │         │  │         │
└─────────┘  └─────────┘  └─────────┘
```

---

## Data Quality Framework

### Quality Dimensions

```
DIMENSION          DEFINITION                      CHECK METHOD
─────────          ──────────                      ────────────
Completeness       All expected data present       Row/column counts
Validity           Values within acceptable range   Range checks
Accuracy           Values match reality            Calibration tests
Consistency        No contradictions               Cross-validation
Timeliness         Data is current                 Timestamp checks
Uniqueness         No duplicates                   Duplicate detection
```

### Quality Checks Implementation

```python
# Example quality check functions

def check_completeness(df, expected_rows):
    """Check if expected number of rows present"""
    actual_rows = len(df)
    completeness = actual_rows / expected_rows
    return completeness >= 0.95  # 95% threshold

def check_validity(df, column, min_val, max_val):
    """Check if values in valid range"""
    invalid = df[(df[column] < min_val) | (df[column] > max_val)]
    validity = 1 - (len(invalid) / len(df))
    return validity >= 0.98  # 98% threshold

def check_timeliness(df, timestamp_col, max_age_hours=1):
    """Check if data is recent"""
    from datetime import datetime, timedelta
    latest = pd.to_datetime(df[timestamp_col]).max()
    age = datetime.now() - latest
    return age < timedelta(hours=max_age_hours)

def check_consistency(df):
    """Check for logical consistency"""
    # Example: VPD should be calculated consistently
    calculated_vpd = calculate_vpd(df['temp'], df['humidity'])
    diff = abs(df['vpd'] - calculated_vpd)
    consistency = (diff < 0.1).mean()  # Within 0.1 kPa
    return consistency >= 0.95

# Quality scoring
quality_score = {
    'completeness': check_completeness(df, 1440),  # Expected daily
    'validity': check_validity(df, 'temp', 10, 40),
    'timeliness': check_timeliness(df, 'timestamp'),
    'consistency': check_consistency(df)
}

overall_score = sum(quality_score.values()) / len(quality_score)
```

---

## Data Annotation Guidelines

### Image Annotation for ML

```
TASK                 ANNOTATION TYPE       TOOLS               TIME/IMAGE
────                 ───────────────       ─────               ──────────
Classification       Class label           LabelImg            10-30 sec
Object Detection     Bounding boxes        CVAT, Labelbox      1-5 min
Segmentation         Pixel masks           Labelme, CVAT       5-15 min
Keypoint Detection   Point coordinates     Custom tools        2-5 min

Quality Standards:
✓ Consistent labeling across annotators
✓ Clear annotation guidelines documented
✓ Inter-annotator agreement >90%
✓ Regular validation and feedback
✓ Difficult cases reviewed by experts

Annotation Team Structure:
- Lead annotator: Define guidelines, quality control
- Annotators: Perform labeling (3-5 people)
- Domain expert: Validate difficult cases
- ML engineer: Verify format, integrate pipeline
```

### Structured Data Labeling

```
EVENT TYPE           REQUIRED FIELDS              OPTIONAL FIELDS
──────────           ───────────────              ───────────────
Disease Detection    - Date/time                  - Images
                    - Disease type                - Severity score
                    - Location                    - Treatment applied
                    - Confidence                  - Notes

Pest Scouting        - Date/time                  - Images
                    - Pest species                - Count/density
                    - Location                    - Life stage
                    - Action taken                - Weather conditions

Harvest              - Date/time                  - Quality grade
                    - Weight                      - Defect types
                    - Plant ID                    - Market destination
                    - Variety                     - Price

Quality Grading      - Grade (A/B/C)              - Size measurements
                    - Weight                      - Color score
                    - Visual defects              - Brix/firmness
                    - Images                      - Notes
```

---

## Data Privacy & Security

### Sensitive Data Categories

```
CATEGORY             EXAMPLES                     PROTECTION NEEDED
────────             ────────                     ─────────────────
Personal Data        Employee records             Encryption, access control
Financial            Sales, costs, pricing        Encryption, limited access
Trade Secrets        Proprietary methods          Confidentiality agreements
Customer Data        Orders, contacts             GDPR/CCPA compliance
Location Data        GPS coordinates              Anonymization
Operational          Production volumes           Aggregation
```

### Data Retention Policy

```
DATA TYPE            RETENTION PERIOD    ARCHIVE AFTER    DELETE AFTER
─────────            ────────────────    ─────────────    ────────────
Raw sensor data      30 days             N/A              30 days
Aggregated hourly    1 year              N/A              1 year
Daily aggregates     5 years             1 year           5 years
Images (raw)         90 days             1 year           5 years
Annotations          Indefinite          5 years          N/A
Models               Indefinite          1 year           Obsolete only
Financial records    7 years             1 year           7 years
Employee data        Active + 3 years    N/A              On termination +3

Compliance: GDPR, CCPA, industry standards
Backup: 3-2-1 rule (3 copies, 2 media, 1 offsite)
```

---

## Data Collection Best Practices

### Sensor Installation

```
BEST PRACTICE                    RATIONALE
─────────────                    ─────────
Representative locations         Avoid microclimates
Height considerations            Match plant canopy
Avoid direct sun/water          Prevent damage, accurate readings
Regular calibration              Maintain accuracy
Redundancy for critical sensors  Prevent data loss
Document installation            Reproducibility
```

### Data Collection Schedule

```
DAILY TASKS
- Download sensor data
- Backup databases
- Check data quality alerts
- Review anomalies

WEEKLY TASKS
- Verify sensor operation
- Calibrate as needed
- Review data completeness
- Clean/maintain sensors

MONTHLY TASKS
- Full system audit
- Storage optimization
- Performance review
- Update documentation

QUARTERLY TASKS
- Sensor recalibration
- System upgrades
- Archive old data
- Compliance audit
```

---

*Agricultural Data Types Handout - Course 404*
