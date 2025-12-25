# Quiz 2: CEA Technology Stack Design

## Course 511: CEA Systems Architecture

**Module**: 2 - CEA Technology Stack Design
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What is the primary advantage of adopting an "API-first" approach in CEA technology stack design?

A) It reduces hardware costs
B) It enables system integration, flexibility, and future extensibility
C) It eliminates the need for databases
D) It only works with cloud-based systems

**Correct Answer**: B

**Explanation**: API-first architecture ensures that all system components can communicate effectively, enabling easier integration of new technologies and third-party systems as the organization evolves.

---

### Question 2
In a typical CEA technology stack, which layer is responsible for data persistence and storage?

A) Presentation Layer
B) Application Layer
C) Data Layer
D) Infrastructure Layer

**Correct Answer**: C

**Explanation**: The Data Layer manages data storage, databases, data warehouses, and persistence mechanisms that support both operational and analytical workloads.

---

### Question 3
When evaluating "Build vs. Buy" decisions for CEA technology, which factor should be considered FIRST?

A) Cost of commercial licenses
B) Strategic differentiation and competitive advantage
C) Available programming languages
D) Vendor office locations

**Correct Answer**: B

**Explanation**: The primary consideration should be whether the capability provides strategic differentiation. Core competitive advantages should be built, while commoditized functions can be purchased.

---

### Question 4
What is the main risk of vendor lock-in when selecting commercial CEA software?

A) Higher initial costs
B) Reduced flexibility and difficulty migrating to alternative solutions
C) Better customer support
D) Automatic software updates

**Correct Answer**: B

**Explanation**: Vendor lock-in restricts an organization's ability to change vendors or technologies, potentially limiting innovation and increasing long-term costs.

---

### Question 5
Which open-source database is most commonly used for time-series data in CEA IoT applications?

A) MySQL
B) MongoDB
C) InfluxDB
D) Oracle

**Correct Answer**: C

**Explanation**: InfluxDB is specifically designed for time-series data, making it ideal for storing sensor readings, environmental conditions, and other time-stamped CEA operational data.

---

### Question 6
In technology portfolio management, what does "technical debt" refer to?

A) Money owed to technology vendors
B) The implied cost of rework caused by choosing expedient solutions over better approaches
C) Annual software licensing fees
D) Hardware depreciation

**Correct Answer**: B

**Explanation**: Technical debt represents the future cost of maintaining and reworking systems built with shortcuts or suboptimal solutions, requiring eventual refactoring or replacement.

---

### Question 7
When conducting vendor evaluations for CEA systems, which criterion is MOST critical for long-term success?

A) Vendor's marketing materials quality
B) Vendor stability, roadmap alignment, and support capabilities
C) Lowest initial price
D) Vendor location proximity

**Correct Answer**: B

**Explanation**: Vendor viability, product roadmap alignment with business needs, and quality support are essential for long-term partnership success, often outweighing short-term cost considerations.

---

### Question 8
What is the primary benefit of containerization (e.g., Docker) in CEA technology stacks?

A) Eliminates all security vulnerabilities
B) Provides consistent deployment environments across development, testing, and production
C) Replaces the need for operating systems
D) Automatically writes application code

**Correct Answer**: B

**Explanation**: Containers package applications with their dependencies, ensuring consistency across environments and simplifying deployment, scaling, and maintenance.

---

### Question 9
In a microservices architecture for CEA systems, each service should ideally:

A) Share the same database with all other services
B) Be independently deployable with its own data store
C) Require manual deployment coordination
D) Use only proprietary protocols

**Correct Answer**: B

**Explanation**: Microservices architecture principles emphasize loose coupling, where each service can be developed, deployed, and scaled independently with its own data persistence.

---

### Question 10
Which technology stack component is responsible for message queuing and asynchronous communication between CEA systems?

A) Web server (e.g., Nginx)
B) Database (e.g., PostgreSQL)
C) Message broker (e.g., RabbitMQ, Kafka)
D) Container orchestrator (e.g., Kubernetes)

**Correct Answer**: C

**Explanation**: Message brokers facilitate asynchronous, decoupled communication between system components, enabling reliable message delivery and system resilience.

---

## Answer Key

1. B - Enables integration, flexibility, and extensibility
2. C - Data Layer
3. B - Strategic differentiation and competitive advantage
4. B - Reduced flexibility and migration difficulty
5. C - InfluxDB
6. B - Implied cost of rework from expedient solutions
7. B - Vendor stability, roadmap, and support
8. B - Consistent deployment environments
9. B - Independently deployable with own data store
10. C - Message broker

---

## Scoring Guide

- 10/10: Excellent! Complete mastery of technology stack design
- 8-9/10: Very Good! Strong understanding with minor gaps
- 7/10: Passing. Review concepts you missed
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 3: Data Architecture and Management
3. Complete the technology stack assessment exercise
