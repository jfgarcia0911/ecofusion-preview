# Hands-On Activity: Enterprise Architecture Design Exercise

## Activity Overview

**Activity**: Design a comprehensive enterprise architecture for a growing CEA organization
**Duration**: 4-6 hours (can be completed over multiple sessions)
**Level**: Master
**Individual/Group**: Can be completed individually or in teams of 2-3

---

## Scenario: GreenLeaf Farms Expansion

### Company Background

**GreenLeaf Farms** is a successful vertical farming operation currently running 3 facilities in the Midwest US, producing leafy greens and herbs. They are planning significant expansion and modernization.

**Current State**:
- 3 facilities (Chicago, Detroit, Indianapolis)
- Each facility operates independently with different systems
- Total production: 500,000 lbs/year
- 50 employees
- Revenue: $5M/year
- Technology: Mix of legacy and modern systems, minimal integration

**Business Goals (Next 3 Years)**:
1. Expand to 10 facilities (add 7 new locations)
2. Double production capacity
3. Enter new markets (berries, microgreens)
4. Implement data-driven optimization
5. Achieve SOC 2 compliance
6. Reduce operating costs by 20%

### Current Technology Landscape

**Facility 1 (Chicago)** - Oldest facility:
- SCADA: Siemens (10 years old)
- Database: SQL Server 2012 (on-premise)
- ERP: QuickBooks
- Environmental monitoring: Custom Excel macros
- No APIs or integrations

**Facility 2 (Detroit)** - Mid-age:
- SCADA: Rockwell FactoryTalk
- Database: MySQL (on-premise)
- Production tracking: Custom Access database
- Some manual integrations via CSV export/import

**Facility 3 (Indianapolis)** - Newest:
- SCADA: Ignition by Inductive Automation
- IoT Platform: AWS IoT Core
- Database: PostgreSQL (RDS)
- Some modern APIs

**Corporate Systems**:
- Accounting: QuickBooks Desktop
- CRM: Spreadsheets
- HR: ADP (SaaS)
- No centralized data warehouse or BI platform

### Pain Points

1. **No Visibility**: Management has no real-time view across facilities
2. **Manual Reporting**: Weekly reports take 2 people 20 hours to compile
3. **Inconsistent Data**: Same metrics calculated differently at each facility
4. **No Integration**: Systems don't talk to each other
5. **Slow Deployment**: Adding new facility takes 6+ months for IT setup
6. **High Costs**: Maintaining 3 different SCADA systems is expensive
7. **Security Concerns**: No formal cybersecurity program
8. **Scaling Challenge**: Current architecture won't support 10 facilities

---

## Your Assignment

As the newly hired Enterprise Architect, you must design a comprehensive target architecture that addresses the pain points and supports business goals.

### Deliverables

You will create:

1. **Current State Architecture Diagram** (C4 Level 1 & 2)
2. **Target State Architecture Diagram** (C4 Level 1 & 2)
3. **Technology Stack Recommendation Document**
4. **Data Architecture Design**
5. **Integration Architecture**
6. **Migration Roadmap** (phased approach over 24 months)
7. **Architecture Decision Records** (ADRs) for major decisions
8. **Cost Estimate** (3-year TCO comparison)

---

## Part 1: Assessment and Analysis (1 hour)

### Task 1.1: Stakeholder Analysis

Identify key stakeholders and their concerns:

```
STAKEHOLDER          ROLE                 CONCERNS/REQUIREMENTS
-----------          ----                 ---------------------
CEO                  Strategic vision     ROI, growth support, competitive advantage
CFO                  Financial            Cost control, budget visibility
COO                  Operations           Operational efficiency, facility autonomy
CTO (you)            Technology           Technical debt, scalability, security
Head Grower          Production           Reliable systems, easy to use
Facilities Manager   Infrastructure       Standardization, supportability
Customers            Buyers               Traceability, quality consistency
```

**Your Task**: Complete this stakeholder analysis and identify top 3 priorities for each.

### Task 1.2: Current State Assessment

Create a Current State Architecture diagram showing:
- All systems at each facility
- Data flows (or lack thereof)
- Integration points
- Pain points highlighted

**Tool**: Use Draw.io, Lucidchart, or PowerPoint

### Task 1.3: Requirements Gathering

Document requirements across categories:

**Functional Requirements**:
- Real-time environmental monitoring across all facilities
- Centralized production reporting
- Automated quality tracking
- Supply chain integration (order to fulfillment)
- Customer portal for order status

**Non-Functional Requirements**:
- **Performance**: Dashboard load time <2 seconds
- **Scalability**: Support 10-50 facilities
- **Availability**: 99.9% uptime for critical systems
- **Security**: SOC 2 compliance
- **Recovery**: RTO <2 hours, RPO <15 minutes

**Business Requirements**:
- Total budget: $2M for first year, $1M/year ongoing
- Timeline: 24 months to complete modernization
- Must not disrupt current production
- Standardize on common platforms where possible

---

## Part 2: Target Architecture Design (2-3 hours)

### Task 2.1: Select Architecture Patterns

For each requirement domain, select appropriate patterns:

**Integration Pattern**:
- [ ] Point-to-Point
- [ ] Hub-and-Spoke
- [ ] API Gateway + Microservices
- [ ] Event-Driven Architecture
- [ ] ESB
- [ ] Hybrid (specify)

**Data Architecture Pattern**:
- [ ] Centralized Data Warehouse
- [ ] Data Lake + Lakehouse
- [ ] Lambda Architecture (batch + stream)
- [ ] Federated (distributed)

**Deployment Pattern**:
- [ ] On-Premise Only
- [ ] Cloud Only
- [ ] Hybrid (Edge + Cloud)
- [ ] Multi-Cloud

**Your Task**: Select patterns and justify each choice in an ADR.

### Task 2.2: Design Target State Architecture

Create comprehensive architecture diagrams:

**C4 Level 1: System Context**
```
Example structure:
- Users (Growers, Managers, Customers)
- GreenLeaf Enterprise Platform (your solution)
- External Systems (Weather Services, Suppliers, Customers)
```

**C4 Level 2: Container Diagram**
```
Example components:
- Web Applications
- Mobile Apps
- API Gateway
- Microservices (Production, Environmental, Quality, etc.)
- Data Platform (Warehouse, Time-Series DB)
- Integration Layer
- IoT Platform
- SCADA Systems (edge)
```

### Task 2.3: Technology Stack Selection

For each layer, select specific technologies:

| Layer | Component | Technology Choice | Rationale |
|-------|-----------|-------------------|-----------|
| Presentation | Web UI | React | Modern, component-based |
| | Mobile | React Native | Code reuse with web |
| | BI/Dashboards | Tableau / Power BI / Looker | |
| Application | API Gateway | Kong / AWS API Gateway | |
| | Microservices | Node.js / Python / Java | |
| | Container Orchestration | Kubernetes / ECS | |
| Data | OLTP Database | PostgreSQL / MySQL | |
| | Time-Series DB | TimescaleDB / InfluxDB | |
| | Data Warehouse | Snowflake / Redshift / BigQuery | |
| | Cache | Redis | |
| Integration | Message Queue | RabbitMQ / Kafka | |
| | Event Streaming | Kafka / Kinesis | |
| Infrastructure | Cloud Provider | AWS / Azure / GCP | |
| | Edge Compute | Industrial PC / AWS Greengrass | |
| | Networking | SD-WAN, VPN | |
| IoT | IoT Platform | AWS IoT / Azure IoT | |
| | Protocols | MQTT, OPC-UA | |
| SCADA | Standard Platform | Ignition (all facilities) | |

**Your Task**: Complete this table with your choices and justification.

### Task 2.4: Data Architecture Design

Design the data architecture including:

**Conceptual Data Model**: Key entities and relationships
```
Example:
Facility → Growing Zone → Growing Batch → Harvest
Facility → Equipment → Maintenance Records
Growing Batch → Quality Tests
```

**Logical Data Model**: Tables and fields for production domain

**Data Flow Diagram**: How data moves from sensors to dashboards

**Master Data Management**: Strategy for facility, crop varieties, recipes

### Task 2.5: Integration Architecture

Design how systems will integrate:

**Integration Patterns by Use Case**:
- SCADA to IoT Platform: MQTT protocol
- IoT Platform to Data Warehouse: Event streaming (Kafka)
- ERP to Production System: REST APIs
- Mobile App to Backend: API Gateway

**API Strategy**:
- API-first design
- RESTful APIs with OpenAPI spec
- OAuth 2.0 authentication
- Rate limiting and monitoring

**Event-Driven Components**:
- Events: SensorReadingReceived, HarvestCompleted, AlertGenerated
- Event Bus: Kafka with topics per domain
- Event Consumers: Alert Service, Analytics Service, Audit Log

---

## Part 3: Migration Planning (1 hour)

### Task 3.1: Create Migration Roadmap

Design a 24-month phased migration:

**Phase 1 (Months 1-6): Foundation**
- Set up cloud infrastructure (VPC, networking, security)
- Deploy data lake and warehouse
- Implement API gateway
- Migrate non-critical workloads (dev/test environments)
- Select and standardize on SCADA platform (Ignition)

**Phase 2 (Months 7-12): Integration Layer**
- Deploy IoT platform
- Integrate existing SCADA systems via adapters
- Build microservices for production, quality, environmental
- Implement real-time dashboards
- Launch pilot at 1 facility (Indianapolis - most modern)

**Phase 3 (Months 13-18): Facility Modernization**
- Upgrade SCADA at Chicago and Detroit facilities
- Full integration of all 3 facilities
- Launch business intelligence platform
- Implement advanced analytics

**Phase 4 (Months 19-24): Expansion Ready**
- Template new facility setup
- Automation and CI/CD maturity
- SOC 2 certification achieved
- Machine learning pilots (yield prediction)
- Ready to add new facilities in <4 weeks

### Task 3.2: Risk Assessment and Mitigation

Identify risks and mitigation strategies:

| Risk | Probability | Impact | Mitigation Strategy |
|------|-------------|--------|---------------------|
| Integration failures | Medium | High | POC testing, phased rollout, rollback plan |
| Cost overruns | Medium | High | Detailed budgeting, monthly reviews, contingency |
| Production disruptions | Low | Critical | Parallel run, off-hours deployment, quick rollback |
| Skills gaps | High | Medium | Training program, hire specialists, managed services |
| Data migration issues | Medium | High | Test migrations, data quality checks, reconciliation |

---

## Part 4: Documentation and Communication (1 hour)

### Task 4.1: Write Architecture Decision Records

Create ADRs for your major decisions. Example:

```markdown
# ADR-001: Use Hybrid Edge-Cloud Architecture

## Status
Accepted

## Context
Need to support real-time control (<100ms latency) while enabling centralized analytics and multi-facility management.

## Decision
Implement hybrid architecture:
- Edge computing at each facility for SCADA and real-time control
- Cloud platform (AWS) for data warehouse, analytics, business applications
- SD-WAN and API gateway for integration

## Consequences
[Document positive and negative consequences]

## Alternatives Considered
1. Cloud-only: Rejected due to latency and offline requirements
2. On-premise only: Rejected due to scalability limitations
[etc.]
```

**Your Task**: Write ADRs for at least 5 major decisions.

### Task 4.2: Cost Estimation

Create 3-year TCO estimate:

**Year 1** (Implementation):
- Cloud infrastructure setup: $X
- Software licenses: $X
- Professional services: $X
- Training: $X
- SCADA upgrades: $X

**Year 2-3** (Operations):
- Cloud operating costs: $X/year
- Software maintenance: $X/year
- Support and managed services: $X/year
- Staff: $X/year

**Total 3-Year TCO**: $X

**Comparison to Current State**:
- Current annual IT costs: $X
- Projected savings: $X (or additional investment justified by value)

### Task 4.3: Executive Presentation

Create a 15-slide PowerPoint presentation for the CEO and board:

**Suggested Outline**:
1. Title
2. Executive Summary (1 slide)
3. Business Drivers (1 slide)
4. Current State Challenges (2 slides)
5. Proposed Architecture (3 slides)
6. Key Benefits (2 slides - quantified)
7. Migration Roadmap (2 slides)
8. Investment and ROI (2 slides)
9. Risks and Mitigation (1 slide)
10. Next Steps (1 slide)

---

## Evaluation Criteria

Your submission will be evaluated on:

### Technical Design (40%)
- [ ] Architecture patterns appropriately applied
- [ ] Technology selections justified
- [ ] Scalability and performance considered
- [ ] Security and compliance addressed
- [ ] Integration strategy comprehensive

### Business Alignment (25%)
- [ ] Addresses stated pain points
- [ ] Supports business goals
- [ ] Cost is realistic and justified
- [ ] ROI clearly articulated

### Feasibility (20%)
- [ ] Migration approach is practical
- [ ] Risks identified and mitigated
- [ ] Timeline is reasonable
- [ ] Resource requirements realistic

### Documentation and Communication (15%)
- [ ] Diagrams are clear and professional
- [ ] ADRs follow standard template
- [ ] Technical documentation is comprehensive
- [ ] Executive presentation is clear and compelling

---

## Submission

Submit the following files:
1. `current_state_architecture.pdf` (diagrams)
2. `target_state_architecture.pdf` (diagrams)
3. `technology_stack_recommendation.md`
4. `data_architecture.md`
5. `integration_architecture.md`
6. `migration_roadmap.md`
7. `adrs/` (folder with ADR files)
8. `cost_estimate.xlsx`
9. `executive_presentation.pptx`

---

## Bonus Challenges

For advanced students:

1. **Multi-Cloud Strategy**: Design with AWS primary, Azure backup/DR
2. **ML/AI Integration**: Add computer vision for quality inspection
3. **Blockchain Traceability**: Add supply chain traceability
4. **Digital Twin**: Design digital twin architecture for optimization
5. **FinOps**: Detailed cloud cost optimization strategy

---

## Resources

- Course module materials (Modules 1-14)
- Cheatsheets provided
- Cloud provider reference architectures (AWS, Azure, GCP)
- Open-source project examples
- Instructor office hours for questions

---

**Good luck! This is your opportunity to demonstrate comprehensive systems architecture skills for CEA enterprises.**
