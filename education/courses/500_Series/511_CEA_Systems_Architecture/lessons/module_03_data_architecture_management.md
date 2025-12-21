# Module 3: Data Architecture and Management

## Overview
This module provides comprehensive coverage of data architecture for CEA enterprises, including data modeling, governance, warehousing, real-time processing, and master data management strategies.

**Duration**: 5 hours
**Level**: Master

## Learning Objectives
By the end of this module, you will be able to:
- Design enterprise data architectures for CEA operations
- Implement data governance frameworks and policies
- Model data for operational and analytical systems
- Architect data lakes, warehouses, and lakehouse solutions
- Design real-time and batch data processing architectures
- Implement master data management strategies
- Select appropriate data storage technologies

## Table of Contents
1. [Enterprise Data Architecture Fundamentals](#fundamentals)
2. [Data Modeling for CEA](#modeling)
3. [Data Governance Framework](#governance)
4. [Data Warehousing and Analytics](#warehousing)
5. [Real-Time vs. Batch Processing](#processing)
6. [Master Data Management](#master-data)
7. [Data Quality and Observability](#quality)
8. [Case Study](#case-study)

---

## 1. Enterprise Data Architecture Fundamentals {#fundamentals}

### Data Architecture Layers

```
+================================================================+
|                   CONSUMPTION LAYER                            |
|  Dashboards | Reports | ML Models | APIs | Data Apps          |
+================================================================+
                              |
+================================================================+
|                   PRESENTATION LAYER                           |
|  Data Marts | OLAP Cubes | Feature Stores | Semantic Layer    |
+================================================================+
                              |
+================================================================+
|                   ANALYTICS LAYER                              |
|  Data Warehouse | Data Lakehouse | OLAP Database              |
+================================================================+
                              |
+================================================================+
|                   INTEGRATION LAYER                            |
|  ETL/ELT | Change Data Capture | Stream Processing            |
+================================================================+
                              |
+================================================================+
|                   STORAGE LAYER                                |
|  Data Lake | Operational DB | Time-Series DB | File Storage   |
+================================================================+
                              |
+================================================================+
|                   SOURCE LAYER                                 |
|  IoT Sensors | ERP | MES | SCADA | External APIs              |
+================================================================+
```

### CEA Data Domains

**Production Data Domain**:
```
Production Data
    |
    +-- Growing Cycles
    |   +-- Seeding date and source
    |   +-- Growing parameters and timeline
    |   +-- Harvest date and yield
    |   +-- Quality metrics
    |
    +-- Environmental Data
    |   +-- Temperature, humidity, CO2
    |   +-- Light intensity and spectrum
    |   +-- Air flow and circulation
    |   +-- Water quality parameters
    |
    +-- Resource Consumption
    |   +-- Water usage
    |   +-- Nutrient usage
    |   +-- Energy consumption
    |   +-- Growing media and consumables
    |
    +-- Equipment Performance
        +-- Operational status
        +-- Performance metrics
        +-- Maintenance records
        +-- Failure events
```

**Supply Chain Data Domain**:
```
Supply Chain Data
    |
    +-- Inventory
    |   +-- Raw materials (seeds, nutrients)
    |   +-- Work in progress (growing crops)
    |   +-- Finished goods
    |   +-- Packaging materials
    |
    +-- Orders
    |   +-- Customer orders
    |   +-- Purchase orders
    |   +-- Fulfillment status
    |   +-- Delivery tracking
    |
    +-- Traceability
        +-- Batch/lot genealogy
        +-- Material sourcing
        +-- Chain of custody
        +-- Recall capability
```

**Quality Data Domain**:
```
Quality Data
    |
    +-- Sampling and Testing
    |   +-- Sample collection records
    |   +-- Test results (micro, chemical)
    |   +-- Specification compliance
    |   +-- Certificate of analysis
    |
    +-- Inspections
    |   +-- Visual quality checks
    |   +-- Pest and disease monitoring
    |   +-- Equipment calibration
    |   +-- Facility inspections
    |
    +-- Non-Conformance
        +-- Defect tracking
        +-- Root cause analysis
        +-- Corrective actions
        +-- Preventive measures
```

### Data Architecture Patterns

#### Pattern 1: Lambda Architecture

```
                    Data Sources
                         |
        +----------------+----------------+
        |                                 |
   Batch Layer                      Speed Layer
   (Historical)                     (Real-time)
        |                                 |
        v                                 v
   Batch Views                      Real-time Views
   (S3 + Spark)                     (Kafka + Flink)
        |                                 |
        +----------------+----------------+
                         |
                   Serving Layer
                   (Query API)
                         |
                 Analytics & Apps
```

**CEA Use Cases**:
- Batch: Daily production reports, weekly analytics
- Speed: Live environmental monitoring, alert generation
- Serving: Unified API for dashboards

#### Pattern 2: Kappa Architecture

```
    Data Sources
         |
         v
   Event Stream (Kafka)
         |
    +----+----+
    |         |
    v         v
  Stream   Stream
  Process  Process
  (Recent) (Historical)
    |         |
    +----+----+
         |
    Serving Layer
```

**CEA Use Cases**:
- All data treated as streams
- Reprocess historical data through same pipelines
- Simpler than Lambda (single processing paradigm)

#### Pattern 3: Data Mesh

```
         Data Platform (Shared Infrastructure)
                         |
        +----------------+----------------+
        |                |                |
   Growing Ops      Quality Dept     Supply Chain
   Data Product     Data Product     Data Product
        |                |                |
   Self-serve       Self-serve       Self-serve
   Analytics        Analytics        Analytics
```

**CEA Application**:
- Domain-oriented data ownership
- Each department owns their data products
- Federated governance with central standards
- Reduces central bottleneck

### Data Storage Technologies by Use Case

| Use Case | Data Type | Volume | Technology Options |
|----------|-----------|--------|-------------------|
| Transactional (OLTP) | Structured | GB-TB | PostgreSQL, MySQL, SQL Server |
| Analytics (OLAP) | Structured | TB-PB | Snowflake, Redshift, BigQuery |
| Time-series | Semi-structured | TB-PB | InfluxDB, TimescaleDB, Prometheus |
| Document/JSON | Semi-structured | GB-TB | MongoDB, Cosmos DB, DynamoDB |
| Graph | Structured | GB-TB | Neo4j, Neptune |
| Object/Files | Unstructured | TB-PB | S3, Azure Blob, GCS |
| Cache | Structured | GB | Redis, Memcached |
| Search | Semi-structured | GB-TB | Elasticsearch, Solr |

---

## 2. Data Modeling for CEA {#modeling}

### Conceptual Data Model

**Core Entities and Relationships**:

```
    FACILITY
        |
        +-- has --> GROWING ZONE
                       |
                       +-- contains --> GROWING BATCH
                                            |
                                            +-- produces --> HARVEST
                                            |
                                            +-- consumes --> RESOURCES
                                            |
                                            +-- monitored by --> SENSORS
                                            |
                                            +-- controlled by --> EQUIPMENT
```

### Logical Data Model - Production Domain

**Key Entities**:

```
FACILITY
--------
facility_id (PK)
facility_name
facility_type
location
operational_date
capacity_sqft

GROWING_ZONE
------------
zone_id (PK)
facility_id (FK)
zone_name
zone_type (tower, rack, bench)
area_sqft
max_capacity

GROWING_BATCH
-------------
batch_id (PK)
zone_id (FK)
crop_variety_id (FK)
seeding_date
transplant_date
expected_harvest_date
actual_harvest_date
batch_status
recipe_id (FK)

CROP_VARIETY
------------
variety_id (PK)
common_name
botanical_name
variety_name
avg_growing_days
target_yield_per_sqft

GROWING_RECIPE
--------------
recipe_id (PK)
recipe_name
crop_variety_id (FK)
temperature_range
humidity_range
co2_target
light_recipe_id (FK)
nutrient_recipe_id (FK)

ENVIRONMENTAL_DATA
------------------
reading_id (PK)
zone_id (FK)
timestamp
temperature
humidity
co2_ppm
vpd
light_intensity
```

### Physical Data Model Considerations

**Time-Series Data Tables**:

```sql
-- Optimized for time-series database (TimescaleDB, InfluxDB)

-- Measurement (InfluxDB style)
measurement: environmental_data
tags:
  - facility_id
  - zone_id
  - sensor_id
  - sensor_type
fields:
  - temperature
  - humidity
  - co2_ppm
  - vpd
timestamp: nanosecond precision

-- Hypertable (TimescaleDB style)
CREATE TABLE environmental_readings (
    time TIMESTAMPTZ NOT NULL,
    zone_id INTEGER NOT NULL,
    sensor_id INTEGER NOT NULL,
    temperature DECIMAL(5,2),
    humidity DECIMAL(5,2),
    co2_ppm INTEGER,
    vpd DECIMAL(4,2)
);

-- Create hypertable partitioned by time
SELECT create_hypertable('environmental_readings', 'time');

-- Create indexes
CREATE INDEX idx_zone_time
    ON environmental_readings (zone_id, time DESC);
```

**Transactional Data Tables**:

```sql
-- Normalized for OLTP (PostgreSQL, MySQL)

CREATE TABLE facilities (
    facility_id SERIAL PRIMARY KEY,
    facility_name VARCHAR(100) NOT NULL,
    facility_type VARCHAR(50),
    city VARCHAR(100),
    state VARCHAR(2),
    country VARCHAR(2),
    operational_date DATE,
    capacity_sqft DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE growing_zones (
    zone_id SERIAL PRIMARY KEY,
    facility_id INTEGER REFERENCES facilities(facility_id),
    zone_name VARCHAR(100) NOT NULL,
    zone_type VARCHAR(50),
    area_sqft DECIMAL(10,2),
    active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE growing_batches (
    batch_id SERIAL PRIMARY KEY,
    zone_id INTEGER REFERENCES growing_zones(zone_id),
    crop_variety_id INTEGER REFERENCES crop_varieties(variety_id),
    recipe_id INTEGER REFERENCES growing_recipes(recipe_id),
    seeding_date DATE NOT NULL,
    transplant_date DATE,
    expected_harvest_date DATE,
    actual_harvest_date DATE,
    batch_status VARCHAR(20) CHECK (batch_status IN
        ('seeded', 'germinating', 'growing', 'harvested', 'closed')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

**Analytical Data Model (Star Schema)**:

```
               DIM_DATE
                  |
                  |
DIM_FACILITY -- FACT_PRODUCTION -- DIM_CROP_VARIETY
                  |
                  |
              DIM_ZONE
```

```sql
-- Fact table: Production
CREATE TABLE fact_production (
    production_key BIGINT PRIMARY KEY,
    date_key INTEGER REFERENCES dim_date(date_key),
    facility_key INTEGER REFERENCES dim_facility(facility_key),
    zone_key INTEGER REFERENCES dim_zone(zone_key),
    variety_key INTEGER REFERENCES dim_crop_variety(variety_key),

    -- Measures
    harvest_weight_kg DECIMAL(10,2),
    marketable_weight_kg DECIMAL(10,2),
    waste_weight_kg DECIMAL(10,2),
    quality_score DECIMAL(3,2),
    water_used_liters DECIMAL(10,2),
    nutrient_used_liters DECIMAL(10,2),
    energy_used_kwh DECIMAL(10,2),

    -- Calculated metrics
    yield_per_sqft DECIMAL(10,4),
    growing_days INTEGER,
    water_use_efficiency DECIMAL(10,4)
);

-- Dimension: Date
CREATE TABLE dim_date (
    date_key INTEGER PRIMARY KEY,
    full_date DATE UNIQUE,
    day_of_week INTEGER,
    day_name VARCHAR(10),
    week_of_year INTEGER,
    month INTEGER,
    month_name VARCHAR(10),
    quarter INTEGER,
    year INTEGER,
    is_weekend BOOLEAN
);
```

### Data Modeling Best Practices for CEA

1. **Separate OLTP from OLAP**: Use normalized models for transactions, denormalized for analytics
2. **Time-series optimization**: Use time-series databases for sensor data (billions of points)
3. **Batch genealogy**: Track lineage from seed to harvest to customer
4. **Soft deletes**: Never hard-delete data for traceability; use status flags
5. **Audit trails**: Track all changes to critical production data
6. **Versioning**: Version recipes and setpoints for historical analysis

---

## 3. Data Governance Framework {#governance}

### Data Governance Operating Model

```
                GOVERNANCE COUNCIL
                (Executive Sponsors)
                         |
        +----------------+----------------+
        |                                 |
   DATA STEWARDS                    DATA GOVERNANCE
   (Domain Owners)                  OFFICE (DGO)
        |                                 |
        |                          Policies & Standards
        |                          Tools & Processes
        |                          Training & Support
        |                                 |
        +----------------+----------------+
                         |
                  DATA USERS
              (Entire Organization)
```

### Data Governance Domains

#### Domain 1: Data Quality

**Data Quality Dimensions**:

```
ACCURACY      - Data correctly represents reality
COMPLETENESS  - All required data is present
CONSISTENCY   - Data is consistent across systems
TIMELINESS    - Data is available when needed
VALIDITY      - Data conforms to defined formats
UNIQUENESS    - No unintended duplication
```

**Data Quality Rules**:

| Entity | Attribute | Rule | Action |
|--------|-----------|------|--------|
| Environmental Data | Temperature | -10°C to 50°C | Reject out of range |
| Environmental Data | Timestamp | Not in future | Reject |
| Growing Batch | Harvest Date | >= Seeding Date | Validation error |
| Sensor Reading | Value | Not NULL | Alert if missing |

**Data Quality Metrics**:

```sql
-- Calculate data quality score

SELECT
    'environmental_data' as table_name,
    COUNT(*) as total_records,

    -- Completeness
    SUM(CASE WHEN temperature IS NULL THEN 1 ELSE 0 END) as missing_temp,
    (1 - SUM(CASE WHEN temperature IS NULL THEN 1 ELSE 0 END)::float / COUNT(*))
        as completeness_score,

    -- Validity
    SUM(CASE WHEN temperature < -10 OR temperature > 50 THEN 1 ELSE 0 END)
        as invalid_temp,
    (1 - SUM(CASE WHEN temperature < -10 OR temperature > 50 THEN 1 ELSE 0 END)::float / COUNT(*))
        as validity_score,

    -- Timeliness (data within last 5 minutes)
    SUM(CASE WHEN timestamp < NOW() - INTERVAL '5 minutes' THEN 1 ELSE 0 END)
        as stale_records,
    (1 - SUM(CASE WHEN timestamp < NOW() - INTERVAL '5 minutes' THEN 1 ELSE 0 END)::float / COUNT(*))
        as timeliness_score

FROM environmental_data
WHERE timestamp >= NOW() - INTERVAL '1 day';
```

#### Domain 2: Data Security and Privacy

**Data Classification**:

| Classification | Examples | Security Controls |
|----------------|----------|------------------|
| Public | Marketing materials, public reports | None required |
| Internal | Production metrics, dashboards | Authentication required |
| Confidential | Customer data, pricing, recipes | Encryption, access controls |
| Restricted | Financial records, IP | Encryption, strict access, audit |

**Access Control Model**:

```
ROLE-BASED ACCESS CONTROL (RBAC):

Role: Grower
    - Read: Environmental data for assigned zones
    - Write: Batch notes, observations
    - Deny: Financial data, other facilities

Role: Quality Manager
    - Read: All quality data, production data
    - Write: Quality records, test results
    - Deny: System configuration

Role: Data Analyst
    - Read: All data (anonymized customer data)
    - Write: Analytics datasets, reports
    - Deny: Production control systems

Role: Administrator
    - Read: All data
    - Write: All data, system configuration
    - Audit: All changes logged
```

#### Domain 3: Master Data Management

**Golden Records**:

```
MASTER DATA DOMAINS:

Facility Master
    - Single source of truth for facility information
    - Managed by: Facilities team
    - Steward: Operations Director

Crop Variety Master
    - Definitive catalog of crops grown
    - Managed by: Research team
    - Steward: Head Grower

Recipe Master
    - Authoritative growing recipes
    - Managed by: Research and Operations
    - Steward: Head Grower

Customer Master
    - Single view of customer
    - Managed by: Sales team
    - Steward: Sales Director
```

**MDM Process**:

```
1. Data Sourcing
   - Identify source systems
   - Define data lineage

2. Data Standardization
   - Apply naming conventions
   - Standardize formats

3. Data Matching
   - Identify duplicates
   - Match across systems

4. Data Merging
   - Create golden record
   - Resolve conflicts

5. Data Governance
   - Assign stewards
   - Define workflows
   - Monitor quality
```

#### Domain 4: Metadata Management

**Metadata Types**:

```
BUSINESS METADATA
    - Business names and definitions
    - Data ownership
    - Business rules
    - Data quality requirements

TECHNICAL METADATA
    - Table and column names
    - Data types and constraints
    - Primary/foreign keys
    - Indexes

OPERATIONAL METADATA
    - Data lineage
    - ETL job schedules
    - Data refresh frequency
    - Storage locations
```

**Data Catalog Example**:

```yaml
# Data Asset: Growing Batch

business_name: Growing Batch
technical_name: growing_batches
description: Represents a cohort of plants grown together
database: production_db
schema: public
table_type: transactional

business_owner: Head Grower
technical_owner: Data Engineering Team
data_steward: Operations Manager

update_frequency: Real-time
retention_period: 10 years
data_classification: Internal

columns:
  - name: batch_id
    business_name: Batch Identifier
    type: INTEGER
    primary_key: true
    nullable: false
    description: Unique identifier for growing batch

  - name: seeding_date
    business_name: Seeding Date
    type: DATE
    nullable: false
    description: Date seeds were planted
    quality_rules:
      - Cannot be in the future
      - Must be within 180 days of current date

  - name: expected_harvest_date
    business_name: Expected Harvest Date
    type: DATE
    nullable: true
    description: Projected harvest date based on crop variety
    quality_rules:
      - Must be after seeding_date
      - Typically 21-60 days after seeding
```

### Data Governance Policies

**Example Policy: Data Retention**:

```
POLICY: Data Retention

SCOPE: All production and operational data

REQUIREMENTS:

1. Sensor Data (Environmental, Equipment)
   - Real-time: 90 days at full resolution
   - Aggregated (hourly): 2 years
   - Aggregated (daily): 10 years
   - Rationale: Support real-time operations, enable long-term analytics

2. Production Transactions
   - Active batches: Indefinite
   - Completed batches: 10 years
   - Rationale: Traceability, compliance, historical analysis

3. Quality Records
   - Test results: 10 years minimum
   - Certificates of Analysis: Indefinite
   - Rationale: Regulatory compliance, recall capability

4. Financial Data
   - Transactions: 7 years (tax requirement)
   - Reports: 7 years
   - Rationale: Legal and tax compliance

5. Personal Data
   - Active employees/customers: Duration of relationship + 1 year
   - Inactive: 3 years unless required by law
   - Rationale: Privacy regulations (GDPR, CCPA)

IMPLEMENTATION:
    - Automated archival processes
    - Quarterly review of compliance
    - Exception approval process for extensions
```

---

## 4. Data Warehousing and Analytics {#warehousing}

### Data Warehouse Architecture

**Modern Data Warehouse**:

```
                  DATA SOURCES
                       |
        +--------------+--------------+
        |              |              |
     ERP/MES      IoT Platform    External
        |              |              |
        v              v              v
                  STAGING AREA
                  (S3, Azure Data Lake)
                       |
                  ETL / ELT
                  (Airflow, dbt)
                       |
                       v
              +------------------+
              | DATA WAREHOUSE   |
              | (Snowflake,      |
              |  Redshift,       |
              |  BigQuery)       |
              +------------------+
                       |
        +--------------+--------------+
        |              |              |
    DATA MARTS    OLAP CUBES    SEMANTIC LAYER
        |              |              |
        v              v              v
    Dashboards     Power BI        ML Models
```

### Data Warehouse Design - Dimensional Modeling

**Production Analytics Schema**:

```
                      DIM_DATE
                         |
    DIM_FACILITY ---+    |    +--- DIM_CROP_VARIETY
                    |    |    |
    DIM_ZONE -------+----+----+--- FACT_DAILY_PRODUCTION
                    |    |    |
    DIM_RECIPE -----+    |    +--- DIM_QUALITY_GRADE
                         |
                    DIM_CUSTOMER
```

**Sample Fact Table**:

```sql
CREATE TABLE fact_daily_production (
    -- Surrogate key
    production_key BIGINT PRIMARY KEY,

    -- Foreign keys (dimensions)
    date_key INTEGER NOT NULL,
    facility_key INTEGER NOT NULL,
    zone_key INTEGER NOT NULL,
    variety_key INTEGER NOT NULL,
    recipe_key INTEGER NOT NULL,
    quality_grade_key INTEGER NOT NULL,

    -- Degenerate dimensions (attributes with no dimension table)
    batch_number VARCHAR(50),
    shift VARCHAR(20),

    -- Measures (additive)
    harvest_weight_kg DECIMAL(10,2),
    marketable_weight_kg DECIMAL(10,2),
    waste_weight_kg DECIMAL(10,2),
    water_used_liters DECIMAL(10,2),
    nutrients_used_ml DECIMAL(10,2),
    energy_used_kwh DECIMAL(10,2),

    -- Measures (non-additive)
    avg_temperature_c DECIMAL(5,2),
    avg_humidity_pct DECIMAL(5,2),
    avg_co2_ppm INTEGER,
    quality_score DECIMAL(3,2),

    -- Measures (semi-additive - can sum across some dimensions)
    ending_inventory_kg DECIMAL(10,2),

    -- Metadata
    loaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source_system VARCHAR(50)
);
```

### Data Lake vs. Data Warehouse vs. Data Lakehouse

| Aspect | Data Lake | Data Warehouse | Data Lakehouse |
|--------|-----------|----------------|----------------|
| **Data Type** | Raw, unstructured | Structured, curated | Both raw and curated |
| **Schema** | Schema-on-read | Schema-on-write | Both approaches |
| **Processing** | Batch and stream | Primarily batch | Both |
| **Users** | Data scientists | Business analysts | Both |
| **Cost** | Low storage cost | Higher storage cost | Medium |
| **Query Performance** | Slower | Fast | Fast with optimization |
| **Data Quality** | Variable | High | Managed |
| **Example Tech** | S3 + Athena | Snowflake, Redshift | Databricks, Delta Lake |

**CEA Recommendation**: Data Lakehouse approach
- Raw sensor data in lake (S3, ADLS)
- Curated production data in warehouse format
- Analytics layer provides unified query interface

### ELT vs. ETL

**ETL (Extract, Transform, Load)**:
```
Source --> [Extract] --> [Transform] --> [Load] --> Warehouse
           (Copy)        (Process)       (Write)

Pros:
    - Transform before loading (cleaner warehouse)
    - Less storage in warehouse

Cons:
    - Transformations can't leverage warehouse power
    - Harder to iterate on transformations
```

**ELT (Extract, Load, Transform)**:
```
Source --> [Extract] --> [Load] --> [Transform] --> Marts
           (Copy)        (Write)    (In-warehouse)

Pros:
    - Leverage warehouse compute for transformations
    - Raw data available for re-processing
    - Faster initial load

Cons:
    - More storage required
    - Warehouse costs for compute
```

**CEA Recommendation**: ELT with modern cloud warehouses
- Take advantage of warehouse scalability
- Maintain raw data for reprocessing
- Use tools like dbt for transformations

### Analytics Processing Layers

**Bronze-Silver-Gold Pattern**:

```
BRONZE LAYER (Raw)
    - Exact copy of source data
    - Minimal transformation
    - All data retained
    - Example: Raw sensor JSON files

    --> SILVER LAYER (Cleaned)
        - Standardized formats
        - Data quality applied
        - Deduplicated
        - Example: Cleaned sensor readings in tables

        --> GOLD LAYER (Business-Ready)
            - Aggregated metrics
            - Business calculations
            - Denormalized for performance
            - Example: Daily production summaries
```

**Example Transformations**:

```sql
-- BRONZE to SILVER: Clean sensor data

CREATE TABLE silver.environmental_readings AS
SELECT
    -- Standardize timestamp to UTC
    timestamp AT TIME ZONE 'UTC' as reading_time_utc,

    -- Validate and clean temperature
    CASE
        WHEN temperature < -10 OR temperature > 50 THEN NULL
        ELSE temperature
    END as temperature_c,

    -- Calculate VPD if missing
    COALESCE(
        vpd,
        calculate_vpd(temperature, humidity)
    ) as vpd_kpa,

    -- Deduplicate using ROW_NUMBER
    zone_id,
    sensor_id
FROM bronze.sensor_raw_data
WHERE timestamp >= CURRENT_DATE - INTERVAL '90 days'
QUALIFY ROW_NUMBER() OVER (
    PARTITION BY zone_id, sensor_id, timestamp
    ORDER BY ingestion_time DESC
) = 1;

-- SILVER to GOLD: Daily production summary

CREATE TABLE gold.daily_production_summary AS
SELECT
    DATE(harvest_date) as production_date,
    f.facility_name,
    z.zone_name,
    cv.crop_variety_name,

    COUNT(DISTINCT batch_id) as batches_harvested,
    SUM(harvest_weight_kg) as total_harvest_kg,
    SUM(marketable_weight_kg) as marketable_kg,
    SUM(waste_weight_kg) as waste_kg,
    AVG(quality_score) as avg_quality_score,

    SUM(harvest_weight_kg) / SUM(z.area_sqft) as yield_per_sqft,
    SUM(marketable_weight_kg) / SUM(harvest_weight_kg) as marketable_pct

FROM silver.harvests h
JOIN silver.growing_batches b ON h.batch_id = b.batch_id
JOIN silver.growing_zones z ON b.zone_id = z.zone_id
JOIN silver.facilities f ON z.facility_id = f.facility_id
JOIN silver.crop_varieties cv ON b.variety_id = cv.variety_id

WHERE harvest_date >= CURRENT_DATE - INTERVAL '2 years'
GROUP BY 1, 2, 3, 4;
```

---

## 5. Real-Time vs. Batch Processing {#processing}

### Processing Patterns Comparison

| Aspect | Batch Processing | Stream Processing | Micro-Batch |
|--------|------------------|-------------------|-------------|
| **Latency** | Minutes to hours | Milliseconds to seconds | Seconds to minutes |
| **Data Volume** | Large datasets | Individual events | Small batches |
| **Complexity** | Lower | Higher | Medium |
| **Cost** | Lower | Higher | Medium |
| **Use Case** | Historical analysis | Real-time alerts | Near real-time dashboards |

### Batch Processing Architecture

```
                  SCHEDULER (Apache Airflow)
                           |
        +------------------+------------------+
        |                  |                  |
    EXTRACT            TRANSFORM            LOAD
        |                  |                  |
    Pull from          Process in         Write to
    Sources            Spark/Python       Warehouse
        |                  |                  |
    [ERP, MES]        [Aggregation]      [Snowflake]
                      [Validation]
                      [Enrichment]
```

**Batch Job Example (Airflow DAG)**:

```python
from airflow import DAG
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

dag = DAG(
    'daily_production_etl',
    default_args=default_args,
    description='Daily production data ETL',
    schedule_interval='0 2 * * *',  # 2 AM daily
    start_date=datetime(2024, 1, 1),
    catchup=False,
)

# Task 1: Extract production data
extract_production = PythonOperator(
    task_id='extract_production',
    python_callable=extract_production_data,
    dag=dag,
)

# Task 2: Extract environmental data
extract_environmental = PythonOperator(
    task_id='extract_environmental',
    python_callable=extract_environmental_data,
    dag=dag,
)

# Task 3: Transform and load
transform_load = PythonOperator(
    task_id='transform_load',
    python_callable=transform_and_load,
    dag=dag,
)

# Task 4: Data quality checks
quality_check = PythonOperator(
    task_id='quality_check',
    python_callable=run_quality_checks,
    dag=dag,
)

# Define dependencies
[extract_production, extract_environmental] >> transform_load >> quality_check
```

### Stream Processing Architecture

```
            IoT Sensors / Equipment
                     |
                     v
            MQTT / Kafka Ingestion
                     |
                     v
        +------------+------------+
        |            |            |
    Stream       Stream       Stream
    Processor    Processor    Processor
    (Alerts)     (Aggregation) (Storage)
        |            |            |
        v            v            v
    Alert        Time-Series   Data Lake
    Service         DB         (S3)
```

**Stream Processing Example (Kafka + Flink)**:

```python
from pyflink.datastream import StreamExecutionEnvironment
from pyflink.datastream.connectors import FlinkKafkaConsumer
from pyflink.common.serialization import SimpleStringSchema

# Set up execution environment
env = StreamExecutionEnvironment.get_execution_environment()

# Kafka consumer properties
kafka_props = {
    'bootstrap.servers': 'kafka-broker:9092',
    'group.id': 'environmental-processor'
}

# Create Kafka source
kafka_consumer = FlinkKafkaConsumer(
    topics='sensor-readings',
    deserialization_schema=SimpleStringSchema(),
    properties=kafka_props
)

# Read from Kafka
sensor_stream = env.add_source(kafka_consumer)

# Transform: Parse JSON and filter anomalies
def check_anomaly(reading):
    import json
    data = json.loads(reading)

    if data['temperature'] > 35 or data['temperature'] < 10:
        return {
            'zone_id': data['zone_id'],
            'alert_type': 'temperature_anomaly',
            'value': data['temperature'],
            'timestamp': data['timestamp']
        }
    return None

anomalies = sensor_stream.map(check_anomaly).filter(lambda x: x is not None)

# Window aggregation: 5-minute averages
def extract_zone_id(reading):
    import json
    return json.loads(reading)['zone_id']

windowed_avg = sensor_stream \
    .key_by(extract_zone_id) \
    .time_window(Time.minutes(5)) \
    .aggregate(CalculateAverageTemperature())

# Execute
env.execute("Environmental Monitoring Stream")
```

### Lambda Architecture Implementation

**Batch Layer (Historical Data)**:

```python
# Airflow DAG for batch layer
@task
def calculate_historical_metrics(start_date, end_date):
    """Calculate production metrics for date range"""
    query = f"""
    INSERT INTO batch_views.production_metrics
    SELECT
        date,
        facility_id,
        zone_id,
        SUM(harvest_kg) as total_harvest,
        AVG(quality_score) as avg_quality,
        SUM(water_liters) as water_used
    FROM production_data
    WHERE date BETWEEN '{start_date}' AND '{end_date}'
    GROUP BY 1, 2, 3
    """
    execute_snowflake_query(query)
```

**Speed Layer (Real-time Data)**:

```python
# Kafka Streams for speed layer
from kafka import KafkaConsumer, KafkaProducer
import json
from collections import defaultdict

consumer = KafkaConsumer('harvest-events',
                          bootstrap_servers=['kafka:9092'])
producer = KafkaProducer(bootstrap_servers=['kafka:9092'])

# Maintain in-memory state for today
today_metrics = defaultdict(lambda: {
    'harvest_kg': 0,
    'quality_sum': 0,
    'count': 0
})

for message in consumer:
    event = json.loads(message.value)

    key = (event['facility_id'], event['zone_id'])
    today_metrics[key]['harvest_kg'] += event['harvest_kg']
    today_metrics[key]['quality_sum'] += event['quality_score']
    today_metrics[key]['count'] += 1

    # Publish real-time view
    realtime_view = {
        'facility_id': event['facility_id'],
        'zone_id': event['zone_id'],
        'total_harvest': today_metrics[key]['harvest_kg'],
        'avg_quality': today_metrics[key]['quality_sum'] / today_metrics[key]['count']
    }

    producer.send('realtime-production-metrics',
                  value=json.dumps(realtime_view).encode())
```

**Serving Layer (Query Both)**:

```python
# API endpoint that merges batch and speed layer
@app.get("/api/production-metrics")
def get_production_metrics(facility_id: int, start_date: str, end_date: str):
    """Get production metrics merging batch and real-time data"""

    # Get historical data from batch layer
    batch_data = query_batch_views(facility_id, start_date, end_date)

    # Get today's data from speed layer (Redis cache)
    if end_date == today():
        realtime_data = redis_client.get(f"realtime:{facility_id}:{today()}")
        if realtime_data:
            batch_data.append(json.loads(realtime_data))

    return {
        'facility_id': facility_id,
        'metrics': batch_data
    }
```

### Processing Technology Selection

**Batch Processing**:
- **Apache Airflow**: Workflow orchestration, complex dependencies
- **Apache Spark**: Large-scale data transformation
- **dbt**: SQL-based transformations in warehouse
- **AWS Glue**: Serverless ETL on AWS

**Stream Processing**:
- **Apache Kafka**: Event streaming platform
- **Apache Flink**: Complex stream processing, exactly-once semantics
- **Spark Streaming**: Micro-batch processing
- **AWS Kinesis**: Managed streaming on AWS
- **Kafka Streams**: Lightweight stream processing

**CEA Recommendations**:
- Batch: Airflow + dbt for most CEA use cases
- Stream: Kafka + simple consumers for real-time alerts
- Hybrid: Use batch for analytics, stream for operational monitoring

---

## 6. Master Data Management {#master-data}

### MDM Architecture

```
                SOURCE SYSTEMS
                      |
        +-------------+-------------+
        |             |             |
    ERP (SAP)    MES (Custom)   CRM (Salesforce)
        |             |             |
        v             v             v
              MDM PLATFORM
              (Informatica MDM)
                      |
        +-------------+-------------+
        |             |             |
    Golden        Data          Workflow
    Records       Quality       Engine
        |             |             |
        v             v             v
              CONSUMING SYSTEMS
          (Analytics, Operations, APIs)
```

### Key Master Data Domains for CEA

**1. Facility Master**

```yaml
facility_master:
  master_id: FAC-001
  facility_name: "Springfield Vertical Farm"
  facility_code: "SVF"
  facility_type: "Vertical Farm"

  location:
    address: "123 Farm Lane"
    city: "Springfield"
    state: "IL"
    zip: "62701"
    country: "USA"
    coordinates:
      latitude: 39.7817
      longitude: -89.6501

  operational:
    operational_date: "2020-01-15"
    status: "Active"
    capacity_sqft: 50000
    annual_capacity_kg: 500000

  certifications:
    - type: "USDA Organic"
      issued: "2020-03-01"
      expires: "2025-03-01"
    - type: "GAP Certified"
      issued: "2020-06-15"
      expires: "2024-06-15"

  source_systems:
    - system: "ERP"
      id: "PLANT-001"
    - system: "MES"
      id: "SITE-SPR"

  data_steward: "operations@company.com"
  last_updated: "2024-12-01T10:30:00Z"
```

**2. Crop Variety Master**

```yaml
crop_variety_master:
  master_id: CV-10045
  botanical_name: "Lactuca sativa"
  common_name: "Lettuce"
  variety_name: "Rex Butterhead"
  variety_code: "REX-BH"

  supplier:
    name: "Premium Seeds Inc"
    variety_code: "PS-REX-01"

  growing_parameters:
    avg_growing_days: 28
    germination_days: 3
    transplant_days: 14
    min_temperature_c: 16
    max_temperature_c: 24
    optimal_ppfd: 200
    co2_ppm: 800

  yield:
    avg_yield_per_plant_g: 180
    plants_per_sqft: 4
    avg_yield_per_sqft_kg: 0.72

  quality_specs:
    min_head_weight_g: 150
    max_head_weight_g: 220
    color: "Green to dark green"
    shelf_life_days: 14

  source_systems:
    - system: "Seed_Catalog"
      id: "SEED-45678"
    - system: "R&D_Database"
      id: "TRIAL-2023-045"

  status: "Active"
  data_steward: "research@company.com"
  last_updated: "2024-11-15T14:22:00Z"
```

**3. Recipe Master**

```yaml
recipe_master:
  master_id: RCP-2024-015
  recipe_name: "Rex Butterhead - High Yield"
  recipe_version: "2.1"
  crop_variety_id: CV-10045
  status: "Approved"

  environmental_parameters:
    day_temperature_c: 22
    night_temperature_c: 18
    humidity_pct: 65
    co2_ppm: 900
    air_circulation_cfm: 500

  light_recipe:
    photoperiod_hours: 16
    ppfd_target: 210
    spectrum:
      red_660nm: 40%
      blue_450nm: 30%
      green_520nm: 20%
      far_red_730nm: 10%

  nutrient_recipe:
    ec_target: 1.8
    ph_target: 6.0
    formulation_id: NUT-2024-08

  irrigation:
    frequency_hours: 4
    duration_minutes: 10

  approval:
    approved_by: "Head Grower"
    approved_date: "2024-10-01"
    trial_batches: ["BATCH-2024-231", "BATCH-2024-232"]

  performance:
    avg_yield_improvement: "+12%"
    avg_quality_score: 9.2
    resource_efficiency: "+8% water"

  data_steward: "growing@company.com"
  last_updated: "2024-10-01T09:15:00Z"
```

### MDM Processes

**1. New Master Data Creation**:

```
STEP 1: Request Submission
    - User submits request via form/API
    - Required fields validated
    - Supporting documentation attached

STEP 2: Data Validation
    - Automated checks (format, duplicates)
    - Business rule validation
    - Reference data validation

STEP 3: Steward Review
    - Data steward reviews request
    - Validates business justification
    - Checks for existing matches

STEP 4: Approval
    - Manager approves if required
    - Compliance review for regulated data

STEP 5: Golden Record Creation
    - Master ID assigned
    - Record created in MDM system
    - Published to consuming systems

STEP 6: Notification
    - Requester notified
    - Stakeholders notified
    - Documentation updated
```

**2. Master Data Update**:

```
STEP 1: Change Request
    - User requests update
    - Reason for change documented

STEP 2: Impact Analysis
    - Systems affected identified
    - Downstream impacts assessed

STEP 3: Approval
    - Steward approves change
    - Manager approval if material

STEP 4: Update Execution
    - Golden record updated
    - Version history maintained
    - Audit trail created

STEP 5: Propagation
    - Changes pushed to source systems
    - Consuming systems notified
    - Cache invalidation if needed
```

### MDM Data Quality Rules

```python
# Example MDM data quality rules

class FacilityMasterQualityRules:

    @staticmethod
    def validate_facility(facility):
        errors = []

        # Completeness checks
        required_fields = ['facility_name', 'facility_code', 'location']
        for field in required_fields:
            if not facility.get(field):
                errors.append(f"Missing required field: {field}")

        # Uniqueness checks
        if exists_facility_code(facility['facility_code']):
            errors.append(f"Facility code {facility['facility_code']} already exists")

        # Validity checks
        if facility.get('operational_date'):
            if facility['operational_date'] > datetime.now():
                errors.append("Operational date cannot be in future")

        if facility.get('capacity_sqft'):
            if facility['capacity_sqft'] <= 0:
                errors.append("Capacity must be positive")

        # Consistency checks
        if facility.get('location'):
            if not is_valid_coordinates(facility['location']['coordinates']):
                errors.append("Invalid GPS coordinates")

        return len(errors) == 0, errors
```

---

## 7. Data Quality and Observability {#quality}

### Data Quality Framework

**Data Quality Dimensions**:

```
                    DATA QUALITY
                         |
        +----------------+----------------+
        |                |                |
    INTRINSIC       CONTEXTUAL       REPRESENTATIONAL
        |                |                |
    Accuracy        Relevance           Format
    Completeness    Timeliness       Consistency
    Validity         Completeness    Interpretability
```

### Data Quality Monitoring

**Automated Data Quality Checks**:

```python
# Great Expectations example

import great_expectations as ge

# Load data
df = ge.read_csv('production_data.csv')

# Define expectations
df.expect_column_values_to_not_be_null('batch_id')
df.expect_column_values_to_be_unique('batch_id')
df.expect_column_values_to_be_between('temperature', min_value=10, max_value=35)
df.expect_column_values_to_match_regex('batch_id', regex=r'^BATCH-\d{4}-\d{3}$')
df.expect_column_values_to_be_in_set('batch_status',
                                       ['seeded', 'germinating', 'growing', 'harvested'])

# Run validation
results = df.validate()

# Alert on failures
if not results['success']:
    send_alert("Data quality check failed", results)
```

### Data Observability

**Observable Data Platform**:

```
                DATA SOURCES
                      |
                      v
              +--------------+
              | OBSERVABILITY|
              |   LAYER      |
              +--------------+
                      |
        +-------------+-------------+
        |             |             |
    Metadata      Lineage       Quality
    Collection    Tracking      Monitoring
        |             |             |
        v             v             v
              OBSERVABILITY
                PLATFORM
              (Monte Carlo,
               Datadog, etc.)
                      |
        +-------------+-------------+
        |             |             |
    Dashboards    Alerts      Incident Mgmt
```

**Data Observability Pillars**:

1. **Freshness**: Is data up-to-date?
```sql
-- Check data freshness
SELECT
    table_name,
    MAX(updated_at) as last_update,
    CURRENT_TIMESTAMP - MAX(updated_at) as staleness
FROM information_schema.tables
WHERE table_schema = 'production'
HAVING staleness > INTERVAL '1 hour';
```

2. **Volume**: Is data volume as expected?
```sql
-- Check daily data volume
SELECT
    DATE(timestamp) as date,
    COUNT(*) as record_count,
    COUNT(*) - LAG(COUNT(*)) OVER (ORDER BY DATE(timestamp)) as volume_change_pct
FROM sensor_readings
WHERE timestamp >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY 1
HAVING ABS(volume_change_pct) > 20; -- Alert if >20% change
```

3. **Schema**: Has the schema changed?
```python
# Monitor schema changes
def check_schema_drift(table_name):
    current_schema = get_table_schema(table_name)
    expected_schema = load_expected_schema(table_name)

    if current_schema != expected_schema:
        differences = compare_schemas(current_schema, expected_schema)
        alert(f"Schema drift detected in {table_name}: {differences}")
```

4. **Distribution**: Are data distributions expected?
```sql
-- Check distribution of values
WITH stats AS (
    SELECT
        AVG(temperature) as mean_temp,
        STDDEV(temperature) as stddev_temp
    FROM sensor_readings
    WHERE timestamp >= CURRENT_TIMESTAMP - INTERVAL '7 days'
)
SELECT
    COUNT(*) as outlier_count
FROM sensor_readings, stats
WHERE timestamp >= CURRENT_TIMESTAMP - INTERVAL '1 hour'
  AND (temperature < mean_temp - 3*stddev_temp
       OR temperature > mean_temp + 3*stddev_temp);
```

5. **Lineage**: Can we trace data origins?
```yaml
# Data lineage example
source:
  system: IoT Platform
  table: raw_sensor_data
  columns: [timestamp, sensor_id, temperature, humidity]

transformations:
  - step: 1
    type: filter
    logic: WHERE timestamp >= CURRENT_DATE - 90

  - step: 2
    type: clean
    logic: Remove outliers beyond 3 sigma

  - step: 3
    type: aggregate
    logic: 5-minute rolling average

destination:
  system: Data Warehouse
  table: environmental_readings_clean
  columns: [timestamp, zone_id, avg_temperature, avg_humidity]
```

---

## 8. Case Study: VerdantCrop Data Platform {#case-study}

### Background

VerdantCrop operates 8 vertical farming facilities producing leafy greens and herbs. They faced significant data challenges:

**Problems**:
- Sensor data scattered across facility-level databases
- No unified view of production across facilities
- Manual Excel-based reporting (40 hours/week)
- Inconsistent data definitions (what is "yield"?)
- Unable to do cross-facility analytics
- Data quality issues causing wrong decisions

### Solution Architecture

**Target Data Architecture**:

```
           DATA SOURCES (8 Facilities)
                      |
        +-------------+-------------+
        |             |             |
    Facility 1-3  Facility 4-6  Facility 7-8
    Edge Platforms Edge Platforms Edge Platforms
        |             |             |
        v             v             v
              AWS IoT Core
                      |
                      v
              Kinesis Data Streams
                      |
        +-------------+-------------+
        |             |             |
    Real-time     Batch ETL     Data Lake
    Processing    (Glue)        (S3)
    (Lambda)                         |
        |             |              |
        +-------------+--------------+
                      |
                  Snowflake
                (Data Warehouse)
                      |
        +-------------+-------------+
        |             |             |
    Power BI      ML Models     APIs
   Dashboards    (SageMaker)   (GraphQL)
```

### Implementation

**Phase 1: Data Lake Foundation** (Months 1-2)

```python
# AWS Glue job to ingest sensor data to S3

import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job

args = getResolvedOptions(sys.argv, ['JOB_NAME'])
sc = SparkContext()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
job.init(args['JOB_NAME'], args)

# Read from IoT data stream
datasource = glueContext.create_dynamic_frame.from_catalog(
    database = "iot_database",
    table_name = "sensor_streams"
)

# Transform: Add partition columns
transformed = datasource.apply_mapping([
    ("timestamp", "timestamp", "timestamp", "timestamp"),
    ("facility_id", "string", "facility_id", "string"),
    ("zone_id", "string", "zone_id", "string"),
    ("sensor_id", "string", "sensor_id", "string"),
    ("temperature", "double", "temperature", "double"),
    ("humidity", "double", "humidity", "double"),
    ("co2_ppm", "int", "co2_ppm", "int")
])

# Add partitions
partitioned = transformed.apply_mapping([
    ("*", "*", "*", "*"),
    ("year", "extract_year(timestamp)", "year", "int"),
    ("month", "extract_month(timestamp)", "month", "int"),
    ("day", "extract_day(timestamp)", "day", "int")
])

# Write to S3 in Parquet format, partitioned
glueContext.write_dynamic_frame.from_options(
    frame = partitioned,
    connection_type = "s3",
    connection_options = {
        "path": "s3://verdantcrop-datalake/bronze/sensor_data",
        "partitionKeys": ["year", "month", "day", "facility_id"]
    },
    format = "parquet"
)

job.commit()
```

**Phase 2: Data Warehouse** (Months 3-4)

Implemented dimensional model in Snowflake:

```sql
-- Dimension: Facility
CREATE OR REPLACE TABLE dim_facility (
    facility_key INTEGER AUTOINCREMENT PRIMARY KEY,
    facility_id VARCHAR(50) UNIQUE NOT NULL,
    facility_name VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(2),
    operational_date DATE,
    effective_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expiration_date TIMESTAMP DEFAULT '9999-12-31',
    is_current BOOLEAN DEFAULT TRUE
);

-- Fact: Environmental Metrics (Hourly)
CREATE OR REPLACE TABLE fact_environmental_hourly (
    metric_key INTEGER AUTOINCREMENT PRIMARY KEY,
    date_key INTEGER NOT NULL,
    facility_key INTEGER NOT NULL,
    zone_key INTEGER NOT NULL,
    hour_of_day INTEGER,

    avg_temperature DECIMAL(5,2),
    min_temperature DECIMAL(5,2),
    max_temperature DECIMAL(5,2),
    avg_humidity DECIMAL(5,2),
    avg_co2_ppm INTEGER,
    avg_vpd DECIMAL(4,2),

    reading_count INTEGER,
    data_quality_score DECIMAL(3,2),

    loaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (date_key) REFERENCES dim_date(date_key),
    FOREIGN KEY (facility_key) REFERENCES dim_facility(facility_key),
    FOREIGN KEY (zone_key) REFERENCES dim_zone(zone_key)
);

-- ELT transformation using dbt
-- models/marts/fact_environmental_hourly.sql

{{ config(materialized='incremental', unique_key='metric_key') }}

WITH hourly_readings AS (
    SELECT
        DATE_TRUNC('hour', reading_time) as hour,
        facility_id,
        zone_id,

        AVG(temperature) as avg_temperature,
        MIN(temperature) as min_temperature,
        MAX(temperature) as max_temperature,
        AVG(humidity) as avg_humidity,
        AVG(co2_ppm) as avg_co2_ppm,
        AVG(calculate_vpd(temperature, humidity)) as avg_vpd,

        COUNT(*) as reading_count

    FROM {{ ref('stg_sensor_readings') }}
    WHERE reading_time >= DATEADD('day', -7, CURRENT_DATE)
    {% if is_incremental() %}
        AND reading_time > (SELECT MAX(hour) FROM {{ this }})
    {% endif %}
    GROUP BY 1, 2, 3
)

SELECT
    {{ dbt_utils.surrogate_key(['hour', 'facility_id', 'zone_id']) }} as metric_key,
    dd.date_key,
    df.facility_key,
    dz.zone_key,
    EXTRACT(HOUR FROM hour) as hour_of_day,

    avg_temperature,
    min_temperature,
    max_temperature,
    avg_humidity,
    avg_co2_ppm,
    avg_vpd,

    reading_count,
    CASE
        WHEN reading_count >= 12 THEN 1.0  -- Expect 1/5min = 12/hr
        ELSE reading_count / 12.0
    END as data_quality_score,

    CURRENT_TIMESTAMP as loaded_at

FROM hourly_readings hr
JOIN {{ ref('dim_date') }} dd ON DATE(hr.hour) = dd.full_date
JOIN {{ ref('dim_facility') }} df ON hr.facility_id = df.facility_id
JOIN {{ ref('dim_zone') }} dz ON hr.zone_id = dz.zone_id
WHERE df.is_current = TRUE
  AND dz.is_current = TRUE;
```

**Phase 3: Data Governance** (Months 5-6)

Implemented data catalog and governance:

```yaml
# Data catalog entry example (Alation, Collibra, etc.)

asset_type: table
database: VERDANTCROP_DW
schema: MARTS
table_name: FACT_ENVIRONMENTAL_HOURLY

business_metadata:
  name: "Hourly Environmental Metrics"
  description: "Aggregated environmental data by facility, zone, and hour"
  data_domain: "Production"
  business_owner: "Head of Operations"
  technical_owner: "Data Engineering Team"
  data_steward: "Production Analytics Team"

  sensitivity: "Internal"
  contains_pii: false
  retention_period: "10 years"

  update_frequency: "Hourly"
  sla: "Data available within 15 minutes of hour end"

columns:
  - name: avg_temperature
    business_name: "Average Temperature"
    description: "Average temperature in Celsius for the hour"
    data_type: DECIMAL(5,2)
    nullable: true
    business_rules:
      - "Valid range: 10-35°C"
      - "NULL indicates sensor malfunction"
    example_values: [22.5, 23.1, 21.8]

quality_rules:
  - rule: "Completeness Check"
    logic: "avg_temperature IS NOT NULL for 95% of records"
    severity: "High"

  - rule: "Validity Check"
    logic: "avg_temperature BETWEEN 10 AND 35"
    severity: "Critical"

  - rule: "Freshness Check"
    logic: "Latest record within last 2 hours"
    severity: "Critical"

lineage:
  upstream:
    - database: VERDANTCROP_DW
      schema: STAGING
      table: STG_SENSOR_READINGS
      transformation: "Hourly aggregation using AVG()"

  downstream:
    - type: Dashboard
      name: "Operations Dashboard"
      tool: "Power BI"

    - type: ML Model
      name: "Temperature Prediction Model"
      tool: "SageMaker"
```

### Results

**After 6 Months**:

**Business Impact**:
- 95% reduction in reporting time (40hrs → 2hrs per week)
- Real-time dashboards for all facilities
- Cross-facility benchmarking enabled
- Data-driven optimization improved yields by 8%

**Data Quality**:
- 98% data completeness (up from 75%)
- Consistent definitions across all facilities
- Automated quality monitoring catches issues before impact

**Technical Achievements**:
- 50TB of historical data in data lake
- 500GB actively queried in warehouse
- <15 second query response times
- 99.9% data pipeline uptime

**Lessons Learned**:
1. Start with data lake for flexibility
2. Invest in data governance from day 1
3. Involve business users in data model design
4. Automate data quality checks
5. Use managed services to reduce operational burden

---

## Summary

This module covered enterprise data architecture and management for CEA:

1. **Data Architecture**: Layered approach from sources to consumption
2. **Data Modeling**: Conceptual, logical, and physical models for OLTP and OLAP
3. **Data Governance**: Policies, stewardship, and quality frameworks
4. **Data Warehousing**: Dimensional modeling and cloud warehouse implementation
5. **Processing Patterns**: Batch, stream, and hybrid architectures
6. **Master Data**: Golden records and MDM processes
7. **Data Quality**: Monitoring, observability, and continuous improvement

Key Takeaways:
- Data architecture is foundation for analytics and AI
- Governance is critical for data quality and compliance
- Modern cloud platforms enable scalable data warehousing
- Balance batch and real-time processing based on needs
- Invest in master data management for consistency
- Automate data quality monitoring

---

## Additional Resources

### Books
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "The Data Warehouse Toolkit" by Ralph Kimball
- "Data Governance" by John Ladley

### Online Resources
- dbt (Data Build Tool): getdbt.com
- Snowflake Documentation: docs.snowflake.com
- Great Expectations: greatexpectations.io
- Apache Airflow: airflow.apache.org

### Tools
- Data Modeling: ERwin, DBSchema
- ETL/ELT: Airflow, dbt, Fivetran
- Data Quality: Great Expectations, Monte Carlo
- Data Catalog: Alation, Collibra, DataHub

---

## Next Module
**Module 4: Integration Architecture Patterns** - Explore integration patterns including point-to-point, hub-and-spoke, API-first, microservices, and event-driven architectures for CEA systems.
