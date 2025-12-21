# Final Examination: Course 511 - CEA Systems Architecture

**Course**: CEA Systems Architecture (Master Level)
**Total Questions**: 50
**Time Limit**: 3 hours
**Passing Score**: 75% (38/50 correct)
**Exam Type**: Multiple choice, scenario-based, and diagram interpretation

---

## Instructions

1. This is a comprehensive examination covering all 14 modules
2. Select the BEST answer for each question
3. Some questions may have multiple correct answers, but select the MOST appropriate
4. Scenario questions require analysis and application of concepts
5. You may use the cheatsheets provided during the exam
6. No internet access or external resources permitted

---

## Section 1: Enterprise Architecture Fundamentals (Questions 1-5)

### Question 1
Your CEA organization is experiencing rapid growth from 2 to 10 facilities. Which enterprise architecture framework would be MOST appropriate for establishing comprehensive architecture governance?

A) C4 Model only
B) TOGAF ADM with Architecture Review Board
C) Zachman Framework only
D) Agile development methodology

**Answer**: B

---

### Question 2
In a multi-facility CEA operation, which architecture pattern BEST supports autonomous facility operation during network outages while enabling centralized analytics?

A) Fully centralized cloud architecture
B) Hybrid edge-cloud architecture with local autonomy
C) Point-to-point integration between facilities
D) Manual data collection and reporting

**Answer**: B

---

## Section 2: Technology Stack and Data Architecture (Questions 6-15)

### Question 3
When conducting a build vs. buy analysis for a growing recipe optimization engine, which factor would MOST strongly favor building a custom solution?

A) The feature is available in commercial software
B) It represents core competitive differentiation with proprietary algorithms
C) The team lacks development capacity
D) Budget constraints limit investment

**Answer**: B

---

### Question 4
For storing 50 billion sensor readings with frequent time-range queries and hourly aggregations, which database technology is MOST appropriate?

A) MongoDB (document database)
B) Neo4j (graph database)
C) TimescaleDB or InfluxDB (time-series database)
D) MySQL (relational database)

**Answer**: C

---

### Question 5
In a dimensional data warehouse model for production analytics, which table type stores the measurements and metrics?

A) Dimension tables
B) Fact tables
C) Staging tables
D) Lookup tables

**Answer**: B

---

### Question 6 - Scenario Question
Your data governance team discovered that the term "yield" is defined differently across three departments:
- Growing Operations: Total harvest weight
- Quality: Marketable weight only
- Finance: Revenue per square foot

What is the MOST appropriate first step to address this?

A) Force all departments to use the Growing Operations definition
B) Create separate databases for each department
C) Establish master data management with agreed-upon definitions and data stewardship
D) Ignore the differences as they don't affect operations

**Answer**: C

---

## Section 3: Integration and API Architecture (Questions 16-25)

### Question 7
Which integration pattern is BEST suited for connecting 15+ heterogeneous systems with complex transformation requirements and orchestration needs?

A) Point-to-point integration
B) Shared database
C) Enterprise Service Bus (ESB)
D) File transfer

**Answer**: C

---

### Question 8
For a public API exposing production data to retail customers, which components should be implemented for security and performance? (Select the MOST comprehensive answer)

A) Authentication only
B) Authentication and rate limiting only
C) API Gateway with authentication, authorization, rate limiting, caching, and monitoring
D) Direct database access with SSL

**Answer**: C

---

### Question 9
In an event-driven architecture for sensor alerts, why is Apache Kafka often preferred over a traditional message queue like RabbitMQ for high-volume scenarios?

A) Kafka is easier to operate
B) Kafka provides better throughput, log-based persistence, and event replay capabilities
C) Kafka is always cheaper
D) RabbitMQ cannot handle any production workloads

**Answer**: B

---

### Question 10 - Diagram Interpretation

```
System A --REST API--> API Gateway --MQTT--> IoT Platform
                            |
                       [Transform]
                            |
                       Message Queue
                            |
                    +--------------+
                    |              |
              Service B      Service C
```

This architecture implements which pattern?

A) Point-to-point integration
B) Hub-and-spoke with protocol transformation
C) Shared database
D) File-based integration

**Answer**: B

---

## Section 4: Cloud and Edge Computing (Questions 26-32)

### Question 11
For a CEA facility's real-time climate control system requiring <100ms response time, where should the control logic execute?

A) Public cloud (AWS/Azure/GCP)
B) Edge computing at the facility
C) Mobile devices
D) Hybrid cloud with failover

**Answer**: B

---

### Question 12
Which cloud cost optimization strategy would provide the GREATEST savings for a predictable, 24/7 production database workload?

A) On-demand instances
B) Spot instances
C) Reserved instances (3-year)
D) Serverless computing

**Answer**: C

---

### Question 13
In a hybrid cloud architecture, what is the PRIMARY purpose of Direct Connect / ExpressRoute?

A) To provide internet access
B) To establish dedicated, low-latency, secure connection between on-premise and cloud
C) To replace all networking equipment
D) To eliminate the need for VPNs entirely

**Answer**: B

---

### Question 14 - Scenario Question
Your computer vision system processes 100 camera feeds at 30 FPS for plant disease detection. Sending all images to cloud would require 3 GB/s bandwidth. What architecture approach is MOST cost-effective?

A) Upgrade internet to 3 GB/s and process in cloud
B) Use edge computing to run inference locally and only send detection results to cloud
C) Reduce camera resolution to minimize bandwidth
D) Process images manually

**Answer**: B

---

## Section 5: IoT and Security (Questions 33-38)

### Question 15
For device authentication in an IoT platform with 100,000 sensors, which approach provides the BEST security?

A) Shared API key for all devices
B) Username/password per device
C) X.509 certificates with unique device identity
D) No authentication required for internal sensors

**Answer**: C

---

### Question 16
What is the foundational principle of zero-trust security architecture?

A) Trust all internal users and devices
B) Never trust, always verify - authenticate and authorize every request
C) Only verify external users
D) Trust after first successful authentication

**Answer**: B

---

### Question 17
In OT/IT security convergence, why is network segmentation critical?

A) To save on networking costs
B) To isolate operational technology from potential IT security threats and limit blast radius
C) It is not critical
D) To eliminate the need for firewalls

**Answer**: B

---

## Section 6: Scalability and Resilience (Questions 39-44)

### Question 18
Which database scaling strategy partitions data across multiple database instances based on a key (e.g., facility_id)?

A) Vertical scaling
B) Read replicas
C) Sharding
D) Caching

**Answer**: C

---

### Question 19
For a system with RTO of 1 hour and RPO of 15 minutes, which backup and recovery strategy is MOST appropriate?

A) Daily full backups only
B) Weekly backups with cold standby
C) Continuous replication with warm standby database
D) No backups needed

**Answer**: C

---

### Question 20
What is the primary purpose of a Horizontal Pod Autoscaler (HPA) in Kubernetes?

A) To upgrade pods to new versions
B) To automatically scale the number of pod replicas based on metrics like CPU utilization
C) To restart failed pods
D) To manage pod storage

**Answer**: B

---

### Question 21 - Scenario Question
Your production API experiences traffic patterns: 100 req/s during day, 500 req/s during harvest times. Current deployment: 10 fixed servers. What optimization should you implement?

A) Increase to 50 fixed servers to handle peak
B) Reduce to 2 fixed servers to save costs
C) Implement auto-scaling: 2-15 instances based on request rate
D) Manually add/remove servers as needed

**Answer**: C

---

## Section 7: Architecture Governance and Modernization (Questions 45-48)

### Question 22
What is the primary purpose of an Architecture Decision Record (ADR)?

A) To track all code changes
B) To document and communicate significant architecture decisions, rationale, and consequences
C) To replace all other documentation
D) To schedule architecture meetings

**Answer**: B

---

### Question 23
In the Strangler Pattern for legacy system modernization, what approach is taken?

A) Immediately shut down the legacy system
B) Gradually build new functionality around legacy, incrementally routing traffic, until legacy can be retired
C) Run both systems forever in parallel
D) Rebuild the entire system before deployment

**Answer**: B

---

### Question 24
Which of the "7 Rs" of modernization involves moving an application to cloud VMs without code changes?

A) Retire
B) Refactor
C) Rehost (Lift-and-Shift)
D) Repurchase

**Answer**: C

---

## Section 8: Emerging Technologies and Documentation (Questions 49-50)

### Question 25
In a digital twin architecture for a growing zone, what is the primary value?

A) It replaces the need for physical sensors
B) It enables simulation, optimization, and what-if analysis in a virtual environment
C) It is only useful for visualization
D) It eliminates the need for control systems

**Answer**: B

---

### Question 26 - Comprehensive Scenario

You are designing architecture for a new 20-facility CEA network. Requirements:
- Real-time environmental control (<100ms latency)
- Centralized production analytics
- Offline operation capability per facility
- Scalable to 50 facilities in 3 years
- Compliance with SOC 2 and food safety regulations

Which architecture approach is MOST appropriate?

A) Fully cloud-based architecture with all logic in AWS
B) Hybrid edge-cloud: Edge computing for control, cloud for analytics, API gateway for integration
C) On-premise only architecture at each facility
D) Manual processes with Excel-based reporting

**Answer**: B

**Rationale**:
- Edge computing addresses <100ms latency requirement
- Cloud enables centralized analytics and scalability
- Local edge enables offline operation
- Hybrid approach supports compliance and security requirements
- API gateway provides integration layer for heterogeneous systems

---

## Additional Scenario Questions (Questions 27-50)

[Due to length, questions 27-50 would follow similar patterns covering:]
- Advanced integration scenarios
- Cloud cost optimization decisions
- Data architecture trade-offs
- Security architecture choices
- Performance optimization strategies
- Disaster recovery planning
- Technical debt prioritization
- Communication and documentation scenarios

---

## Answer Key Summary

**Section 1 (EA Fundamentals)**: Questions 1-5
1. B | 2. B | 3. B | 4. C | 5. B

**Section 2 (Technology & Data)**: Questions 6-15
6. C | 7. C | 8. C | 9. B | 10. B

**Section 3 (Integration)**: Questions 16-25
11. B | 12. C | 13. B | 14. B | 15. C

**Section 4 (Cloud & Edge)**: Questions 26-32
16. B | 17. B | 18. C | 19. C | 20. B

**Section 5 (Scalability)**: Questions 33-38
21. C | 22. B | 23. B | 24. C | 25. B

**Section 6 (Comprehensive)**: Question 26
26. B

---

## Grading Rubric

**50-45 correct (90-100%)**: Excellent - Demonstrated mastery of CEA systems architecture
**44-41 correct (82-88%)**: Very Good - Strong understanding with minor gaps
**40-38 correct (76-80%)**: Good - Passing, meets competency requirements
**37 or fewer (<75%)**: Below Passing - Review material and retake

---

## Post-Exam

### If you pass:
1. Congratulations! You've completed CEA Systems Architecture
2. Certificate of completion will be issued
3. Consider capstone project to apply knowledge
4. Explore advanced certifications (TOGAF, AWS Solutions Architect)

### If you don't pass:
1. Review questions you missed
2. Revisit corresponding module materials
3. Schedule office hours with instructor
4. Retake exam after 1-week waiting period

---

## Final Notes

This exam tests your ability to:
- Apply architecture frameworks to CEA contexts
- Make informed technology decisions with trade-off analysis
- Design comprehensive, scalable solutions
- Consider security, performance, and resilience
- Communicate architecture effectively

Good luck!
