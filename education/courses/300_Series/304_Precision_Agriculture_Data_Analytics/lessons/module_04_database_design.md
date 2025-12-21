# Module 4: Database Design

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

By the end of this module, you will be able to:
1. Compare time-series and relational database architectures
2. Design optimal schemas for agricultural data
3. Implement indexing strategies for query performance
4. Create data retention and aggregation policies
5. Plan for database scaling and performance
6. Manage data lifecycle from collection to archival

---

## 1. Time-Series vs. Relational Databases

### Database Type Comparison

```
┌────────────────────────────────────────────────────────────┐
│         DATABASE ARCHITECTURE COMPARISON                   │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  TIME-SERIES DATABASE (TSDB)                               │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Optimized for: Sequential time-stamped data      │     │
│  │                                                  │     │
│  │ Structure:                                       │     │
│  │ timestamp | measurement | tags | fields          │     │
│  │ ──────────┼─────────────┼──────┼────────         │     │
│  │ 14:00:00  | temp        │ zone_a| 23.5          │     │
│  │ 14:00:00  | humidity    │ zone_a| 65.2          │     │
│  │ 14:05:00  | temp        │ zone_a| 23.7          │     │
│  │                                                  │     │
│  │ Best for:                                        │     │
│  │ • Sensor readings                                │     │
│  │ • Equipment telemetry                            │     │
│  │ • Environmental monitoring                       │     │
│  │ • High-frequency data                            │     │
│  │                                                  │     │
│  │ Examples: InfluxDB, TimescaleDB, Prometheus      │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  RELATIONAL DATABASE (RDBMS)                               │
│  ┌──────────────────────────────────────────────────┐     │
│  │ Optimized for: Structured, related data          │     │
│  │                                                  │     │
│  │ Structure:                                       │     │
│  │ Tables with foreign key relationships            │     │
│  │                                                  │     │
│  │ Customers → Orders → OrderItems → Products       │     │
│  │                                                  │     │
│  │ Best for:                                        │     │
│  │ • Operational data (users, inventory)            │     │
│  │ • Transactional records                          │     │
│  │ • Master data                                    │     │
│  │ • Business logic                                 │     │
│  │                                                  │     │
│  │ Examples: PostgreSQL, MySQL, SQL Server          │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Performance Characteristics

| Operation | Time-Series DB | Relational DB |
|-----------|----------------|---------------|
| **Insert rate** | Millions/sec | Thousands/sec |
| **Time-range queries** | Extremely fast | Moderate |
| **Aggregations** | Optimized | Good with indexes |
| **Joins** | Limited | Excellent |
| **Data compression** | Automatic, high | Manual, moderate |
| **Downsampling** | Built-in | Custom code |

### Hybrid Approach (Recommended)

```
┌────────────────────────────────────────────────────────────┐
│              HYBRID DATABASE ARCHITECTURE                  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  TIME-SERIES DATABASE (InfluxDB)                           │
│  ┌──────────────────────────────────────────────────┐     │
│  │ • Sensor readings (temp, pH, EC, DO, etc.)       │     │
│  │ • Equipment telemetry (power, flow, pressure)    │     │
│  │ • Environmental data (climate control)           │     │
│  │ • High-frequency measurements (seconds-minutes)  │     │
│  └──────────────────────────────────────────────────┘     │
│                           ↕                                │
│              (Sync aggregated data daily)                  │
│                           ↕                                │
│  RELATIONAL DATABASE (PostgreSQL)                          │
│  ┌──────────────────────────────────────────────────┐     │
│  │ • Facility master data (zones, equipment)        │     │
│  │ • Crop cycles and batches                        │     │
│  │ • Fish inventory and health records              │     │
│  │ • Harvest and production records                 │     │
│  │ • User accounts and permissions                  │     │
│  │ • Alerts and maintenance logs                    │     │
│  │ • Daily/weekly aggregated metrics                │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

## 2. Time-Series Database Design (InfluxDB)

### InfluxDB Data Model

```
┌────────────────────────────────────────────────────────────┐
│              INFLUXDB DATA MODEL                           │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  DATABASE: farm_data                                       │
│                                                            │
│  RETENTION POLICIES:                                       │
│  ├─ autogen (infinite retention, raw data)                 │
│  ├─ one_week (7 days, 10-second resolution)                │
│  ├─ one_month (30 days, 1-minute aggregates)               │
│  ├─ one_year (365 days, 15-minute aggregates)              │
│  └─ infinite (forever, hourly aggregates)                  │
│                                                            │
│  MEASUREMENTS (like tables):                               │
│  ├─ environment                                            │
│  ├─ water_quality                                          │
│  ├─ plant_health                                           │
│  ├─ fish_health                                            │
│  └─ equipment_status                                       │
│                                                            │
│  DATA POINT STRUCTURE:                                     │
│  ┌────────────────────────────────────────────────┐       │
│  │ Measurement: environment                       │       │
│  │ Tags (indexed):                                │       │
│  │   facility = "farm_north"                      │       │
│  │   zone = "greenhouse_a"                        │       │
│  │   location = "canopy_center"                   │       │
│  │   sensor_id = "temp_001"                       │       │
│  │ Fields (values):                               │       │
│  │   temperature = 23.5                           │       │
│  │   humidity = 65.2                              │       │
│  │   vpd = 1.12                                   │       │
│  │ Timestamp: 2025-12-10T14:30:00Z                │       │
│  └────────────────────────────────────────────────┘       │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Schema Design Example

```sql
-- MEASUREMENT: environment
-- Stores all environmental sensor readings

Tags (indexed, low cardinality):
  facility      STRING    -- farm_north, farm_south
  system        STRING    -- greenhouse, aquaponics
  zone          STRING    -- zone_a, zone_b, zone_c
  sensor_id     STRING    -- temp_001, rh_002
  location      STRING    -- canopy, root_zone, ambient

Fields (values, high cardinality):
  temperature   FLOAT     -- °C
  humidity      FLOAT     -- %
  vpd           FLOAT     -- kPa
  co2           INTEGER   -- ppm
  light_ppfd    FLOAT     -- µmol/m²/s
  dli           FLOAT     -- mol/m²/day

-- Example query
SELECT mean("temperature"), mean("humidity")
FROM "environment"
WHERE "facility" = 'farm_north'
  AND "zone" = 'zone_a'
  AND time > now() - 24h
GROUP BY time(10m), "sensor_id"

---

-- MEASUREMENT: water_quality
-- Stores all water quality parameters

Tags:
  facility      STRING
  system        STRING
  location      STRING    -- fish_tank, biofilter, sump, grow_bed
  sensor_id     STRING

Fields:
  ph            FLOAT
  ec            FLOAT     -- µS/cm
  tds           FLOAT     -- ppm
  do            FLOAT     -- mg/L
  temperature   FLOAT     -- °C
  orp           FLOAT     -- mV
  ammonia       FLOAT     -- mg/L
  nitrite       FLOAT     -- mg/L
  nitrate       FLOAT     -- mg/L

---

-- MEASUREMENT: equipment_status
-- Tracks equipment performance and status

Tags:
  facility      STRING
  equipment_id  STRING    -- pump_001, heater_002
  equipment_type STRING   -- pump, heater, light, fan

Fields:
  status        STRING    -- on, off, fault
  power_watts   FLOAT     -- W
  runtime_hours FLOAT     -- hours
  flow_rate     FLOAT     -- L/min (for pumps)
  temperature   FLOAT     -- °C (for heaters)
```

### Tag vs. Field Decision

**Use TAGS for:**
- Metadata (sensor ID, location, facility)
- Low cardinality (< 100,000 unique values)
- Data you'll GROUP BY or filter on
- Categorical data

**Use FIELDS for:**
- Measured values
- High cardinality data
- Numeric data you'll aggregate
- Values that change frequently

---

## 3. Relational Database Design (PostgreSQL)

### Schema for Aquaponics Operations

```sql
-- FACILITIES TABLE
CREATE TABLE facilities (
    facility_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(200),
    size_sqft INTEGER,
    type VARCHAR(50), -- greenhouse, indoor, outdoor
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- SYSTEMS TABLE
CREATE TABLE systems (
    system_id SERIAL PRIMARY KEY,
    facility_id INTEGER REFERENCES facilities(facility_id),
    name VARCHAR(100) NOT NULL,
    type VARCHAR(50), -- aquaponics, hydroponics, soil
    fish_tank_volume_gallons INTEGER,
    grow_bed_area_sqft FLOAT,
    status VARCHAR(20) DEFAULT 'active',
    commissioned_date DATE
);

-- FISH BATCHES TABLE
CREATE TABLE fish_batches (
    batch_id SERIAL PRIMARY KEY,
    system_id INTEGER REFERENCES systems(system_id),
    species VARCHAR(100),
    stocking_date DATE NOT NULL,
    initial_count INTEGER,
    current_count INTEGER,
    average_weight_grams FLOAT,
    total_biomass_kg FLOAT,
    harvest_date DATE,
    status VARCHAR(20) -- stocked, growing, harvesting, harvested
);

-- CROP CYCLES TABLE
CREATE TABLE crop_cycles (
    cycle_id SERIAL PRIMARY KEY,
    system_id INTEGER REFERENCES systems(system_id),
    crop_variety VARCHAR(100) NOT NULL,
    planting_date DATE NOT NULL,
    transplant_date DATE,
    first_harvest_date DATE,
    final_harvest_date DATE,
    plant_count INTEGER,
    expected_yield_lbs FLOAT,
    actual_yield_lbs FLOAT,
    status VARCHAR(20) -- seeding, growing, harvesting, completed
);

-- HARVESTS TABLE
CREATE TABLE harvests (
    harvest_id SERIAL PRIMARY KEY,
    cycle_id INTEGER REFERENCES crop_cycles(cycle_id),
    harvest_date DATE NOT NULL,
    quantity_lbs FLOAT NOT NULL,
    quality_grade VARCHAR(20), -- A, B, C
    waste_lbs FLOAT,
    revenue_dollars FLOAT,
    notes TEXT
);

-- WATER TESTS TABLE (Manual lab tests)
CREATE TABLE water_tests (
    test_id SERIAL PRIMARY KEY,
    system_id INTEGER REFERENCES systems(system_id),
    test_date TIMESTAMP NOT NULL,
    location VARCHAR(50),
    ph FLOAT,
    ammonia_mg_l FLOAT,
    nitrite_mg_l FLOAT,
    nitrate_mg_l FLOAT,
    alkalinity_mg_l FLOAT,
    hardness_mg_l FLOAT,
    phosphate_mg_l FLOAT,
    tested_by VARCHAR(100),
    notes TEXT
);

-- MAINTENANCE LOGS TABLE
CREATE TABLE maintenance_logs (
    log_id SERIAL PRIMARY KEY,
    system_id INTEGER REFERENCES systems(system_id),
    equipment_id VARCHAR(50),
    maintenance_date TIMESTAMP NOT NULL,
    maintenance_type VARCHAR(50), -- routine, repair, replacement
    description TEXT,
    parts_cost FLOAT,
    labor_hours FLOAT,
    performed_by VARCHAR(100),
    next_maintenance_due DATE
);

-- ALERTS TABLE
CREATE TABLE alerts (
    alert_id SERIAL PRIMARY KEY,
    system_id INTEGER REFERENCES systems(system_id),
    alert_timestamp TIMESTAMP NOT NULL,
    alert_type VARCHAR(50), -- critical, warning, info
    parameter VARCHAR(50),
    threshold_value FLOAT,
    actual_value FLOAT,
    message TEXT,
    acknowledged BOOLEAN DEFAULT false,
    acknowledged_by VARCHAR(100),
    acknowledged_at TIMESTAMP,
    resolved BOOLEAN DEFAULT false,
    resolved_at TIMESTAMP
);

-- INDEXES for performance
CREATE INDEX idx_fish_batches_system ON fish_batches(system_id);
CREATE INDEX idx_fish_batches_status ON fish_batches(status);
CREATE INDEX idx_crop_cycles_system ON crop_cycles(system_id);
CREATE INDEX idx_crop_cycles_status ON crop_cycles(status);
CREATE INDEX idx_harvests_date ON harvests(harvest_date);
CREATE INDEX idx_alerts_timestamp ON alerts(alert_timestamp);
CREATE INDEX idx_alerts_unresolved ON alerts(resolved) WHERE resolved = false;
```

### Useful Views

```sql
-- CURRENT SYSTEM STATUS VIEW
CREATE VIEW v_system_status AS
SELECT
    s.system_id,
    s.name AS system_name,
    f.name AS facility_name,
    -- Fish data
    fb.species,
    fb.current_count AS fish_count,
    fb.total_biomass_kg,
    -- Crop data
    COUNT(DISTINCT cc.cycle_id) AS active_crop_cycles,
    SUM(cc.plant_count) AS total_plants,
    -- Recent alerts
    COUNT(a.alert_id) FILTER (WHERE a.resolved = false) AS unresolved_alerts
FROM systems s
LEFT JOIN facilities f ON s.facility_id = f.facility_id
LEFT JOIN fish_batches fb ON s.system_id = fb.system_id AND fb.status = 'growing'
LEFT JOIN crop_cycles cc ON s.system_id = cc.system_id AND cc.status IN ('growing', 'harvesting')
LEFT JOIN alerts a ON s.system_id = a.system_id AND a.alert_timestamp > NOW() - INTERVAL '24 hours'
WHERE s.status = 'active'
GROUP BY s.system_id, s.name, f.name, fb.species, fb.current_count, fb.total_biomass_kg;

---

-- PRODUCTION SUMMARY VIEW
CREATE VIEW v_production_summary AS
SELECT
    DATE_TRUNC('month', h.harvest_date) AS month,
    cc.crop_variety,
    COUNT(h.harvest_id) AS harvest_count,
    SUM(h.quantity_lbs) AS total_yield_lbs,
    SUM(h.waste_lbs) AS total_waste_lbs,
    AVG(h.quantity_lbs) AS avg_yield_per_harvest,
    SUM(h.revenue_dollars) AS total_revenue
FROM harvests h
JOIN crop_cycles cc ON h.cycle_id = cc.cycle_id
GROUP BY DATE_TRUNC('month', h.harvest_date), cc.crop_variety
ORDER BY month DESC, total_yield_lbs DESC;
```

---

## 4. Indexing and Query Optimization

### Understanding Indexes

```
┌────────────────────────────────────────────────────────────┐
│                  INDEX TYPES                               │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  B-TREE INDEX (Default, most common)                       │
│  ├─ Best for: Equality and range queries                   │
│  ├─ Use on: Foreign keys, date ranges, numeric ranges      │
│  └─ Example: WHERE created_at > '2025-01-01'               │
│                                                            │
│  HASH INDEX                                                │
│  ├─ Best for: Equality comparisons only                    │
│  ├─ Use on: Lookup tables, enum-like fields                │
│  └─ Example: WHERE status = 'active'                       │
│                                                            │
│  GIN INDEX (Generalized Inverted Index)                    │
│  ├─ Best for: Array and JSON data, full-text search        │
│  ├─ Use on: JSONB columns, array columns                   │
│  └─ Example: WHERE tags @> ARRAY['organic']                │
│                                                            │
│  PARTIAL INDEX                                             │
│  ├─ Best for: Subset of rows                               │
│  ├─ Use on: Common filtered queries                        │
│  └─ Example: WHERE status = 'active' (index only active)   │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Index Strategy Examples

```sql
-- Good: Index on frequently filtered column
CREATE INDEX idx_alerts_system_date
ON alerts(system_id, alert_timestamp DESC);

-- Query that benefits
SELECT * FROM alerts
WHERE system_id = 5
  AND alert_timestamp > NOW() - INTERVAL '7 days'
ORDER BY alert_timestamp DESC;

---

-- Good: Partial index for common query
CREATE INDEX idx_unresolved_alerts
ON alerts(system_id, alert_timestamp)
WHERE resolved = false;

-- Much faster for this common query
SELECT * FROM alerts
WHERE system_id = 5 AND resolved = false;

---

-- Good: Covering index (includes all needed columns)
CREATE INDEX idx_harvest_summary
ON harvests(cycle_id, harvest_date, quantity_lbs, revenue_dollars);

-- Can be answered entirely from index
SELECT SUM(quantity_lbs), SUM(revenue_dollars)
FROM harvests
WHERE cycle_id = 100;

---

-- Bad: Too many indexes
-- Don't create indexes you won't use
-- Each index slows down INSERT/UPDATE/DELETE

-- Bad: Index on high-cardinality, unqueried column
CREATE INDEX idx_bad ON water_tests(notes); -- Don't do this
```

### Query Performance Analysis

```sql
-- Use EXPLAIN ANALYZE to understand query performance
EXPLAIN ANALYZE
SELECT
    cc.crop_variety,
    AVG(h.quantity_lbs) AS avg_yield
FROM crop_cycles cc
JOIN harvests h ON cc.cycle_id = h.cycle_id
WHERE cc.planting_date > '2025-01-01'
GROUP BY cc.crop_variety;

-- Look for:
-- • Seq Scan → Add index
-- • High cost estimates → Query too complex
-- • Nested loops → Check join conditions
```

---

## 5. Data Retention and Aggregation

### Retention Policy Strategy

```
┌────────────────────────────────────────────────────────────┐
│           DATA RETENTION LIFECYCLE                         │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  RAW DATA (Full resolution)                                │
│  ├─ Resolution: 10 seconds                                 │
│  ├─ Retention: 7 days                                      │
│  ├─ Storage: ~100 GB for medium facility                   │
│  └─ Use: Real-time monitoring, recent troubleshooting      │
│          ↓                                                 │
│       AGGREGATE                                            │
│          ↓                                                 │
│  1-MINUTE AGGREGATES                                       │
│  ├─ Resolution: 1 minute (mean, min, max, count)           │
│  ├─ Retention: 30 days                                     │
│  ├─ Storage: ~15 GB                                        │
│  └─ Use: Daily analysis, trend identification              │
│          ↓                                                 │
│       AGGREGATE                                            │
│          ↓                                                 │
│  15-MINUTE AGGREGATES                                      │
│  ├─ Resolution: 15 minutes                                 │
│  ├─ Retention: 1 year                                      │
│  ├─ Storage: ~8 GB                                         │
│  └─ Use: Monthly reports, seasonal comparisons             │
│          ↓                                                 │
│       AGGREGATE                                            │
│          ↓                                                 │
│  HOURLY AGGREGATES                                         │
│  ├─ Resolution: 1 hour                                     │
│  ├─ Retention: Forever                                     │
│  ├─ Storage: ~5 GB/year                                    │
│  └─ Use: Historical analysis, multi-year trends            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### InfluxDB Continuous Queries

```sql
-- Create downsampled data automatically

-- 1-minute aggregates
CREATE CONTINUOUS QUERY "cq_1min"
ON "farm_data"
BEGIN
  SELECT
    mean("temperature") AS "temp_mean",
    min("temperature") AS "temp_min",
    max("temperature") AS "temp_max",
    mean("humidity") AS "rh_mean"
  INTO "one_month"."environment_1min"
  FROM "environment"
  GROUP BY time(1m), "facility", "zone", "sensor_id"
END;

-- 15-minute aggregates
CREATE CONTINUOUS QUERY "cq_15min"
ON "farm_data"
BEGIN
  SELECT
    mean("temp_mean") AS "temperature",
    mean("rh_mean") AS "humidity"
  INTO "one_year"."environment_15min"
  FROM "one_month"."environment_1min"
  GROUP BY time(15m), "facility", "zone"
END;

-- Hourly aggregates
CREATE CONTINUOUS QUERY "cq_hourly"
ON "farm_data"
BEGIN
  SELECT
    mean("temperature") AS "temperature",
    mean("humidity") AS "humidity"
  INTO "infinite"."environment_hourly"
  FROM "one_year"."environment_15min"
  GROUP BY time(1h), "facility", "zone"
END;
```

### PostgreSQL Partitioning (for large tables)

```sql
-- Partition alerts table by month
CREATE TABLE alerts (
    alert_id BIGSERIAL,
    system_id INTEGER,
    alert_timestamp TIMESTAMP NOT NULL,
    -- other columns...
) PARTITION BY RANGE (alert_timestamp);

-- Create partitions
CREATE TABLE alerts_2025_01 PARTITION OF alerts
    FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');

CREATE TABLE alerts_2025_02 PARTITION OF alerts
    FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');

-- Benefits:
-- • Faster queries (only scan relevant partition)
-- • Easy archival (detach old partitions)
-- • Better vacuum performance
```

---

## 6. Scaling Strategies

### Vertical vs. Horizontal Scaling

```
┌────────────────────────────────────────────────────────────┐
│              SCALING APPROACHES                            │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  VERTICAL SCALING (Scale Up)                               │
│  ┌──────────────────────────────────────────────────┐     │
│  │  Single Server                                   │     │
│  │  ┌────────────────────────────────────────┐      │     │
│  │  │ More CPU, RAM, Faster Disks            │      │     │
│  │  │ 8 cores → 32 cores                     │      │     │
│  │  │ 32 GB RAM → 128 GB RAM                 │      │     │
│  │  │ HDD → SSD → NVMe                       │      │     │
│  │  └────────────────────────────────────────┘      │     │
│  │                                                  │     │
│  │ Pros: Simple, no code changes                    │     │
│  │ Cons: Hardware limits, expensive, single point   │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
│  HORIZONTAL SCALING (Scale Out)                            │
│  ┌──────────────────────────────────────────────────┐     │
│  │  Multiple Servers                                │     │
│  │  ┌─────────┐  ┌─────────┐  ┌─────────┐          │     │
│  │  │Server 1 │  │Server 2 │  │Server 3 │          │     │
│  │  │ (Read)  │  │ (Read)  │  │ (Write) │          │     │
│  │  └─────────┘  └─────────┘  └─────────┘          │     │
│  │                                                  │     │
│  │ Pros: Nearly unlimited scale, redundancy         │     │
│  │ Cons: Complex, application changes needed        │     │
│  └──────────────────────────────────────────────────┘     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Performance Optimization Checklist

**Hardware:**
- [ ] Use SSD/NVMe for database storage
- [ ] Allocate sufficient RAM (50-75% of data size for cache)
- [ ] Use multiple cores (databases are multi-threaded)
- [ ] Separate disk for write-ahead log (PostgreSQL)

**Configuration:**
- [ ] Tune PostgreSQL shared_buffers (25% of RAM)
- [ ] Set appropriate work_mem (RAM / connections / 4)
- [ ] Configure InfluxDB cache sizes
- [ ] Enable query logging for slow queries

**Schema:**
- [ ] Normalize to reduce redundancy
- [ ] Denormalize for frequent joins
- [ ] Use appropriate data types (INTEGER vs BIGINT)
- [ ] Add constraints (NOT NULL, CHECK, FOREIGN KEY)

**Queries:**
- [ ] Use EXPLAIN ANALYZE
- [ ] Add indexes on WHERE/JOIN columns
- [ ] Limit result sets
- [ ] Use connection pooling
- [ ] Cache frequent queries

---

## Key Takeaways

1. **Use the right tool for the job** - Time-series databases for sensor data, relational databases for operational data.

2. **Design for scale from the start** - Partitioning, indexing, and retention policies are easier to implement early.

3. **Aggregate and downsample** - Raw data is valuable short-term, aggregates are sufficient long-term.

4. **Index strategically** - Too few indexes slow queries, too many slow writes. Profile your workload.

5. **Monitor performance** - Use EXPLAIN, track slow queries, and optimize based on real usage patterns.

6. **Plan for growth** - Storage is cheap, but retrieval performance degrades. Archive old data.

7. **Backup everything** - Databases are critical infrastructure. Test your backups regularly.

---

## Practical Exercise

### Database Design Project

1. **Design InfluxDB schema** for your facility:
   - Define 5 measurements
   - Specify tags and fields for each
   - Create retention policies

2. **Design PostgreSQL schema**:
   - Create ERD with at least 8 tables
   - Define foreign key relationships
   - Add appropriate indexes

3. **Write queries**:
   - Complex join (3+ tables)
   - Time-series aggregation
   - Dashboard summary query

4. **Calculate storage needs**:
   - Sensors × sampling rate × days = rows
   - Rows × bytes per row = storage
   - Project 1 year

5. **Create retention policy**:
   - Define aggregation levels
   - Set retention periods
   - Estimate storage savings

---

## Next Module Preview

**Module 5: Statistical Analysis Basics** will cover:
- Descriptive statistics for agricultural data
- Distributions and normality testing
- Correlation and regression analysis
- Statistical process control
- Experimental design and A/B testing

---

*EcoFusion Academy - Course 304 - Module 4*
*Precision Agriculture & Data Analytics*
