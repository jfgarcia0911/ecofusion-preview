# Architecture Frameworks Reference Guide

## TOGAF Architecture Development Method (ADM)

### ADM Cycle Overview

```
                    Preliminary
                        |
                   Requirements
                    Management
                        |
            +-----------+-----------+
            |                       |
     Architecture Vision    Architecture Change
            |                   Management
            v
      Business Architecture
            |
            v
   Information Systems
      Architecture
    (Data + Application)
            |
            v
    Technology Architecture
            |
            v
   Opportunities & Solutions
            |
            v
     Migration Planning
            |
            v
  Implementation Governance
```

### Phase Descriptions

**Preliminary Phase**: Establish architecture capability
- Define architecture framework
- Define architecture principles
- Set up architecture repository
- Select tools and techniques

**Architecture Vision** (Phase A):
- Define scope
- Identify stakeholders
- Create architecture vision
- Obtain approval to proceed

**Business Architecture** (Phase B):
- Develop baseline business architecture
- Develop target business architecture
- Perform gap analysis
- Define roadmap components

**Information Systems Architecture** (Phase C):
- Data Architecture: Develop baseline and target
- Application Architecture: Develop baseline and target
- Perform gap analysis
- Define roadmap

**Technology Architecture** (Phase D):
- Develop baseline technology architecture
- Develop target technology architecture
- Perform gap analysis
- Define roadmap components

**Opportunities & Solutions** (Phase E):
- Identify delivery vehicles (projects)
- Determine business value of each
- Assess readiness for transformation
- Formulate implementation strategy

**Migration Planning** (Phase F):
- Prioritize projects
- Confirm readiness
- Generate implementation roadmap
- Document lessons learned

**Implementation Governance** (Phase G):
- Provide architectural oversight
- Handle change requests
- Ensure compliance

**Architecture Change Management** (Phase H):
- Monitor technology changes
- Monitor business changes
- Assess architecture performance
- Manage governance process

---

## Zachman Framework

### Framework Structure

| | What (Data) | How (Function) | Where (Network) | Who (People) | When (Time) | Why (Motivation) |
|---|---|---|---|---|---|---|
| **Contextual (Planner)** | List of entities | List of processes | List of locations | List of organizations | List of events | List of goals |
| **Conceptual (Owner)** | Semantic model | Business process model | Logistics network | Work flow model | Master schedule | Business plan |
| **Logical (Designer)** | Logical data model | Application architecture | Distributed system architecture | Human interface architecture | Processing structure | Business rule model |
| **Physical (Builder)** | Physical data model | System design | Technology architecture | Presentation architecture | Control structure | Rule design |
| **Detailed (Implementer)** | Data definition | Program | Network architecture | Security architecture | Timing definition | Rule specification |
| **Functioning (User)** | Data | Function | Network | Organization | Schedule | Strategy |

### How to Use Zachman

1. **Start with Business Context**: Define what, how, where, who, when, why from business perspective
2. **Progress Through Levels**: Move from conceptual to physical detail
3. **Use as Checklist**: Ensure all cells are addressed for comprehensive architecture
4. **Maintain Traceability**: Link artifacts across levels
5. **Adapt to Context**: Not all cells required for all projects

### CEA Example: Growing Batch Entity

| Level | What (Data) | How (Function) |
|-------|-------------|----------------|
| **Conceptual** | Growing batch is a cohort of plants | Batches are seeded, grown, and harvested |
| **Logical** | Batch entity with ID, variety, dates | Create batch, update status, harvest batch |
| **Physical** | PostgreSQL table: growing_batches | RESTful API: POST /batches, PUT /batches/{id} |
| **Detailed** | SQL schema with constraints | Python/Django service implementation |

---

## C4 Model for Software Architecture

### Level 1: System Context Diagram

**Purpose**: Show how your system fits in the world
**Audience**: Everyone (technical and non-technical)

**Elements**:
- Your system (single box)
- Users (people)
- External systems

**Example**:
```
       [Grower]           [Manager]
           |                  |
           v                  v
    +----------------------------+
    | CEA Operations Platform    |
    +----------------------------+
               |        |
               v        v
           [ERP]    [Weather API]
```

### Level 2: Container Diagram

**Purpose**: Show high-level technology choices
**Audience**: Technical people

**Elements**:
- Containers (apps, databases, file systems)
- Technology stack visible

**Example**:
```
[CEA Operations Platform]
    |
    +-- [Web App] (React)
    +-- [API] (Node.js)
    +-- [Database] (PostgreSQL)
    +-- [Cache] (Redis)
```

### Level 3: Component Diagram

**Purpose**: Show components within a container
**Audience**: Architects and developers

**Example** (API container):
```
[API Container]
    |
    +-- [Authentication Component]
    +-- [Production Service]
    +-- [Environmental Service]
    +-- [Data Access Layer]
```

### Level 4: Code (Optional)

**Purpose**: Show how components are implemented
**Audience**: Developers only

**Elements**: Class diagrams, ERDs

---

## ArchiMate 3.1 Notation

### Business Layer (Yellow/Tan)

| Element | Symbol | Description |
|---------|--------|-------------|
| Actor | Mask icon | Person or organization |
| Business Process | Rounded rectangle with gear | Sequence of activities |
| Business Service | Rounded rectangle | Service offered to customers |
| Business Event | Lightning bolt | Something that happens |

### Application Layer (Blue)

| Element | Symbol | Description |
|---------|--------|-------------|
| Application Component | Rectangle | Modular software component |
| Application Service | Rounded rectangle | Automated behavior |
| Data Object | Rectangle with folded corner | Data used by applications |

### Technology Layer (Green)

| Element | Symbol | Description |
|---------|--------|-------------|
| Node | 3D box | Computational/physical resource |
| Device | Computer icon | Physical machine |
| System Software | Stack of rectangles | Environment for software |
| Technology Service | Rounded rectangle | Infrastructure capability |

### Relationships

- **Serving**: → (solid arrow) - One serves another
- **Assignment**: ○ (circle with line) - Allocated to
- **Realization**: - -> (dashed arrow) - Realizes or implements
- **Access**: --> (arrow with R or W) - Reads or writes
- **Flow**: ⇢ (thick arrow) - Exchange or transfer
- **Triggering**: ⤑ (arrow with trigger) - Temporal or causal

### Example ArchiMate Diagram

```
[Business Layer]
    [Grower] (Actor)
        |
        | uses
        v
    [Production Management] (Business Service)
        |
        | realized by
        v
[Application Layer]
    [Production App] (Application Component)
        |
        | runs on
        v
[Technology Layer]
    [Application Server] (Node)
```

---

## IEEE 1471-2000 / ISO/IEC/IEEE 42010

### Architecture Description Framework

**Key Concepts**:

1. **Stakeholder**: Individual or organization with interests/concerns
2. **Concern**: Interest in a system (performance, security, cost, etc.)
3. **Viewpoint**: Conventions for creating views (what to show, how to show it)
4. **View**: Representation of system from viewpoint perspective
5. **Architecture Description**: Collection of architecture views

### Standard Viewpoints

**4+1 View Model** (Philippe Kruchten):

1. **Logical View**: Functionality for end users
   - Class diagrams, state diagrams
   - Concerns: Functionality, behavior

2. **Process View**: System processes
   - Activity diagrams, sequence diagrams
   - Concerns: Concurrency, distribution, performance

3. **Development View**: Programmer's perspective
   - Component diagrams, package diagrams
   - Concerns: Software management, reuse

4. **Physical View**: System engineer's perspective
   - Deployment diagrams
   - Concerns: Topology, communication, installation

5. **Scenarios** (+1): Use cases tying views together
   - Use case diagrams, test cases
   - Concerns: Validation

### Applying to CEA

**Logical View**:
- Domain model: Facilities, Zones, Batches, Crops
- Business logic: Growing algorithms, quality rules

**Process View**:
- Real-time sensor data processing
- Batch job scheduling (ETL)
- Event-driven alert processing

**Development View**:
- Microservices structure
- API contracts
- Shared libraries

**Physical View**:
- Cloud infrastructure (AWS regions, VPCs)
- Edge devices at facilities
- Network topology

---

## Comparison Matrix

| Framework | Best For | Complexity | Time to Implement | Governance Support |
|-----------|----------|------------|-------------------|-------------------|
| **TOGAF** | Enterprise-wide EA | High | Months | Excellent |
| **Zachman** | Comprehensive documentation | Very High | Months | Good |
| **C4 Model** | Software architecture | Low | Days | Minimal |
| **ArchiMate** | Modeling and communication | Medium | Weeks | Good |
| **IEEE 42010** | Standards compliance | Medium | Weeks | Good |

---

## Selecting the Right Framework

### Decision Tree

```
IS THIS FOR ENTIRE ENTERPRISE?
    YES → Use TOGAF
          Need comprehensive documentation? → Add Zachman
          Need visual modeling? → Add ArchiMate

    NO → IS THIS FOR SOFTWARE SYSTEM?
        YES → Use C4 Model
              Need formal standards? → Add IEEE 42010
              Need enterprise alignment? → Light TOGAF

        NO → IS THIS FOR SPECIFIC DOMAIN?
            YES → Domain-specific framework
            NO → Consult enterprise architect
```

### Combination Strategies

**Common Combinations**:

1. **TOGAF + ArchiMate**: Strategic planning with visual modeling
2. **TOGAF + C4**: Enterprise strategy with software detail
3. **C4 + ADRs**: Software architecture with decision tracking
4. **Zachman + TOGAF**: Comprehensive documentation with process

---

## Quick Reference: When to Use What

| Situation | Recommended Framework |
|-----------|----------------------|
| Large enterprise transformation | TOGAF ADM |
| Software product architecture | C4 Model |
| Regulatory compliance documentation | Zachman Framework |
| Cross-functional communication | ArchiMate |
| Vendor RFP response | IEEE 42010 + C4 |
| Merger/acquisition | TOGAF + Zachman |
| Cloud migration | TOGAF (subset) + C4 |
| Microservices design | C4 Model |
| Legacy modernization | TOGAF + Strangler Pattern |

---

*Use this reference guide when selecting and applying architecture frameworks to your projects.*
