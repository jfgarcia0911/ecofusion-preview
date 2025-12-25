# Quiz 3: Data Architecture and Management

## Course 511: CEA Systems Architecture

**Module**: 3 - Data Architecture and Management
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What is the primary difference between a data lake and a data warehouse?

A) Data lakes are always smaller than data warehouses
B) Data lakes store raw, unprocessed data while data warehouses store structured, processed data
C) Data lakes only store text files
D) There is no difference between them

**Correct Answer**: B

**Explanation**: Data lakes store raw data in its native format for flexibility, while data warehouses store structured, schema-defined data optimized for specific analytical queries.

---

### Question 2
In the context of CEA operations, what does "master data management" (MDM) primarily address?

A) Managing employee passwords
B) Ensuring consistent, accurate definitions of critical business entities across systems
C) Storing historical sensor data
D) Managing software licenses

**Correct Answer**: B

**Explanation**: MDM provides a single source of truth for critical entities (crops, facilities, equipment, etc.) ensuring consistency across all systems and preventing data discrepancies.

---

### Question 3
Which data modeling approach is most appropriate for operational transaction systems in CEA?

A) Star schema
B) Snowflake schema
C) Third normal form (3NF)
D) Graph model

**Correct Answer**: C

**Explanation**: Normalized models like 3NF are optimized for transactional systems (OLTP), minimizing redundancy and ensuring data integrity during frequent updates.

---

### Question 4
What is the primary purpose of a data catalog in enterprise data architecture?

A) To replace all databases
B) To provide metadata management and data discovery capabilities
C) To generate reports automatically
D) To eliminate the need for data governance

**Correct Answer**: B

**Explanation**: Data catalogs provide searchable inventories of data assets with metadata, lineage, and quality information, enabling users to discover and understand available data.

---

### Question 5
In real-time stream processing for CEA sensor data, which processing pattern is most appropriate for detecting equipment failures?

A) Batch processing with daily aggregation
B) Complex Event Processing (CEP) with pattern detection
C) Monthly data warehouse queries
D) Manual spreadsheet analysis

**Correct Answer**: B

**Explanation**: Complex Event Processing analyzes real-time data streams to detect patterns and anomalies, enabling immediate identification of equipment failures or unusual conditions.

---

### Question 6
What is the "Lambda Architecture" designed to address?

A) Cloud security requirements
B) Combining batch processing for completeness with stream processing for low latency
C) Database backup strategies
D) User interface design patterns

**Correct Answer**: B

**Explanation**: Lambda Architecture provides both comprehensive batch views (historical accuracy) and real-time stream views (low latency), addressing different analytical needs simultaneously.

---

### Question 7
In a CEA data governance framework, who typically serves as a "Data Steward"?

A) External consultants only
B) Subject matter experts responsible for data quality in specific domains
C) Database administrators exclusively
D) Anyone with database access

**Correct Answer**: B

**Explanation**: Data Stewards are domain experts (e.g., head grower for crop data) who ensure data quality, define standards, and make decisions about data within their area of expertise.

---

### Question 8
Which storage strategy is most appropriate for high-frequency sensor data (e.g., readings every second) over multiple years?

A) Relational database with no compression
B) Time-series database with data retention policies and compression
C) Spreadsheet files on local drives
D) Email attachments

**Correct Answer**: B

**Explanation**: Time-series databases are optimized for temporal data, offering efficient storage with compression, automatic data retention policies, and fast queries for time-range analysis.

---

### Question 9
What does "data lineage" track in an enterprise data architecture?

A) The physical location of database servers
B) The origin, movement, and transformation of data throughout its lifecycle
C) Employee access to data
D) Database backup schedules

**Correct Answer**: B

**Explanation**: Data lineage provides visibility into how data flows through systems, where it originates, how it's transformed, and where it's consumed—critical for debugging, compliance, and trust.

---

### Question 10
For CEA analytics combining operational data with external weather, market, and research data, which architecture pattern is most suitable?

A) Single monolithic database
B) Data lake with schema-on-read capabilities
C) No data storage (query external sources directly each time)
D) Printed reports only

**Correct Answer**: B

**Explanation**: Data lakes support diverse data types and sources with schema-on-read, allowing flexible integration of internal operational data with external datasets for advanced analytics.

---

## Answer Key

1. B - Data lakes store raw data, warehouses store structured data
2. B - Ensuring consistent definitions across systems
3. C - Third normal form (3NF)
4. B - Metadata management and data discovery
5. B - Complex Event Processing with pattern detection
6. B - Combining batch and stream processing
7. B - Subject matter experts for specific domains
8. B - Time-series database with retention policies
9. B - Origin, movement, and transformation tracking
10. B - Data lake with schema-on-read

---

## Scoring Guide

- 10/10: Excellent! Mastery of data architecture concepts
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 4: Integration Architecture Patterns
3. Complete the data architecture design exercise
