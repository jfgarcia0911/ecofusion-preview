# Architecture Patterns Quick Reference

## Integration Patterns

### Point-to-Point
```
A ←→ B
```
**Use When**: 2-3 systems, simple integration
**Avoid When**: Many systems (doesn't scale)

### Hub-and-Spoke
```
     HUB
    / | \
   A  B  C
```
**Use When**: Centralized integration, 5-20 systems
**Avoid When**: Need distributed processing

### Event-Driven
```
Producer → Event Bus → Consumer(s)
```
**Use When**: Real-time, asynchronous, decoupled
**Avoid When**: Need synchronous responses

### API Gateway
```
Client → Gateway → Microservices
```
**Use When**: Microservices, external APIs
**Avoid When**: Simple internal integration

---

## Data Architecture Patterns

### Lambda Architecture
```
Batch Layer  }
Speed Layer  } → Serving Layer
```
**Use When**: Need both historical and real-time
**Avoid When**: Pure batch or pure stream sufficient

### Star Schema
```
    Dim_Date
        |
Dim_Product - FACT - Dim_Customer
        |
    Dim_Store
```
**Use When**: Data warehousing, BI
**Avoid When**: Operational transactions

---

## Scalability Patterns

### Horizontal Scaling
```
LB → [Server 1, Server 2, Server 3, ...]
```
**Best For**: Stateless applications
**Strategy**: Add more servers

### Vertical Scaling
```
Server: 4 CPU → 16 CPU
```
**Best For**: Databases, stateful apps
**Strategy**: Bigger server
**Limit**: Hardware constraints

### Database Sharding
```
DB1 (Facility 1-5)
DB2 (Facility 6-10)
DB3 (Facility 11-15)
```
**Best For**: Very large datasets
**Strategy**: Partition by key

---

## Cloud Patterns

### Multi-Region
```
Region A (Active) ←→ Region B (Standby)
```
**Purpose**: Disaster recovery, low latency

### Hybrid Cloud
```
On-Prem ←→ Cloud
```
**Purpose**: Critical systems on-prem, scale in cloud

### Serverless
```
Event → Lambda/Function → Response
```
**Best For**: Event-driven, variable load
**Avoid When**: Long-running, predictable load

---

## Security Patterns

### Defense in Depth
```
Layer 7: Policies
Layer 6: Awareness
Layer 5: Application
Layer 4: Data
Layer 3: Network
Layer 2: Host
Layer 1: Physical
```

### Zero Trust
```
Never Trust + Always Verify
```
**Principles**:
- Authenticate everything
- Least privilege access
- Micro-segmentation

---

## Deployment Patterns

### Blue-Green Deployment
```
Blue (Current)  }
Green (New)     } → Switch traffic
```
**Benefit**: Zero-downtime, easy rollback

### Canary Deployment
```
90% → Old Version
10% → New Version → Monitor → Gradual rollout
```
**Benefit**: Test in production safely

### Rolling Deployment
```
Update 1 server at a time
```
**Benefit**: No downtime, low risk

---

## Quick Decision Matrix

| Need | Pattern |
|------|---------|
| Real-time alerts | Event-Driven |
| External API | API Gateway |
| Historical + Real-time | Lambda Architecture |
| Many systems | ESB or API Gateway |
| High availability | Multi-region, Load Balancing |
| Scale for growth | Horizontal Scaling, Cloud |
| Disaster recovery | Backup, Replication, Multi-region |
| Fast deployment | Blue-Green, Canary |

---

## Common Anti-Patterns to Avoid

❌ **Big Ball of Mud**: No clear architecture, everything coupled
❌ **Golden Hammer**: Using same pattern for everything
❌ **Premature Optimization**: Optimizing before measuring
❌ **Not Invented Here**: Rebuilding everything custom
❌ **Vendor Lock-in**: Single vendor dependency without escape plan
❌ **No Monitoring**: Deploying without observability

---

## Key Metrics

### Performance
- **Latency**: Response time (ms)
- **Throughput**: Requests/second
- **Concurrency**: Simultaneous users

### Reliability
- **Uptime**: 99.9% = 43.2 min downtime/month
- **MTBF**: Mean time between failures
- **MTTR**: Mean time to repair

### Scalability
- **Horizontal**: Add more instances
- **Vertical**: Bigger instances
- **Elasticity**: Auto-scale up/down

---

*Keep this cheatsheet handy during architecture design sessions and exams!*
