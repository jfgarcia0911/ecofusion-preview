# Quiz 4: Database Design

## Course 304: Precision Agriculture & Data Analytics

**Module:** 4 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
What is the primary key for a time-series sensor reading table?

A) Reading ID (auto-increment)
B) Timestamp only
C) Sensor ID only
D) Composite key (sensor_id, timestamp)

**Correct Answer:** D

**Explanation:** A composite key of (sensor_id, timestamp) uniquely identifies each reading and enables efficient queries by sensor and time range. This structure supports the most common query pattern: "get all readings from sensor X between time Y and Z" with optimal index performance.

---

### Question 2
Which normal form is most appropriate for operational agricultural databases?

A) First Normal Form (1NF)
B) Second Normal Form (2NF)
C) Third Normal Form (3NF)
D) Sixth Normal Form (6NF)

**Correct Answer:** C

**Explanation:** Third Normal Form (3NF) eliminates data redundancy while maintaining query performance. It ensures data integrity and reduces storage waste without the complexity of higher normal forms. For sensor data, 3NF provides the right balance between normalization and practical performance.

---

### Question 3
What is the recommended data retention policy for raw sensor data in aquaponics?

A) Keep forever
B) 90 days, then delete
C) 2 years raw, then downsample to hourly aggregates
D) 30 days maximum

**Correct Answer:** C

**Explanation:** Keep 2 years of raw data for detailed analysis, then downsample to hourly or daily aggregates for long-term trends. This balances analytical capability with storage costs. Recent data needs fine granularity for troubleshooting, while older data is used for seasonal trends where aggregates suffice.

---

### Question 4
Which index type improves query performance on timestamp ranges?

A) Hash index
B) B-tree index
C) Full-text index
D) Spatial index

**Correct Answer:** B

**Explanation:** B-tree indexes excel at range queries (WHERE timestamp BETWEEN x AND y), which are the most common pattern for time-series data. B-trees maintain sorted order, enabling efficient range scans. Hash indexes only support equality lookups, not ranges.

---

### Question 5
How should calculated values like VPD be stored in the database?

A) Store raw values (temp, humidity), calculate VPD on query
B) Store both raw values and pre-calculated VPD
C) Store only VPD, discard raw values
D) Calculate once and never recalculate

**Correct Answer:** A

**Explanation:** Store raw sensor values and calculate derived metrics on query or in views. This is the "single source of truth" principle: if the VPD formula is updated or corrected, you can recalculate from raw data. Pre-calculating trades storage for CPU, but most systems are storage-limited, not CPU-limited.

---

### Question 6
What is the purpose of a data warehouse separate from the operational database?

A) Backup storage
B) Optimized for complex analytical queries
C) Stores deleted data
D) Required by law

**Correct Answer:** B

**Explanation:** Data warehouses are optimized for analytical queries (OLAP) with denormalized schemas and pre-aggregated data, while operational databases are optimized for transactional operations (OLTP). Separating them prevents analytical queries from slowing down real-time operations.

---

### Question 7
Which data type is most appropriate for storing pH values in a database?

A) INTEGER
B) FLOAT
C) DECIMAL(3,2)
D) VARCHAR

**Correct Answer:** C

**Explanation:** DECIMAL(3,2) stores pH as fixed-point with two decimal places (e.g., 6.75), avoiding floating-point rounding errors. pH ranges 0-14 with precision to 0.01, making DECIMAL(3,2) perfect. FLOAT introduces rounding errors that accumulate in calculations. INTEGER lacks precision. VARCHAR wastes space and prevents arithmetic.

---

### Question 8
What is the recommended approach for handling sensor reading outliers in the database?

A) Delete them immediately
B) Flag with an outlier boolean, keep original value
C) Replace with interpolated values
D) Ignore them

**Correct Answer:** B

**Explanation:** Flag outliers but preserve original data. Add an is_outlier boolean and outlier_reason text field. This allows excluding outliers from analytics while maintaining data integrity for auditing. You may later determine the "outlier" was a real event. Never delete raw sensor data.

---

### Question 9
How should equipment event logs (pump on/off, dosing events) be structured?

A) Update a status field in the equipment table
B) Insert a new event record for each state change
C) Store in a text file
D) Don't track equipment events

**Correct Answer:** B

**Explanation:** Event-sourcing pattern: create an immutable event record for each state change. This provides a complete audit trail, enables time-based queries ("Was the pump running at 3 AM last Tuesday?"), and supports root cause analysis. Status fields only show current state, losing historical information.

---

### Question 10
What is the benefit of partitioning time-series tables by date?

A) Improves query performance on recent data
B) Enables easy archival of old data
C) Reduces backup time
D) All of the above

**Correct Answer:** D

**Explanation:** Table partitioning divides data into separate physical tables by time period (e.g., monthly partitions). Queries on recent data only scan relevant partitions (faster). Old partitions can be archived or dropped atomically. Backups can be incremental by partition. Most time-series databases support automatic partitioning.

---

**End of Quiz 4**
