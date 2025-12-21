# Module 5: Cloud Architecture for CEA

## Overview
This module explores cloud computing architectures for CEA operations, covering cloud service models, deployment patterns, cloud-native design, multi-cloud strategies, and cost optimization.

**Duration**: 4 hours
**Level**: Master

## Learning Objectives
- Design cloud architectures for CEA workloads
- Select appropriate cloud service models (IaaS, PaaS, SaaS)
- Implement hybrid cloud patterns
- Design for cloud-native principles
- Optimize cloud costs and performance
- Implement cloud migration strategies

---

## 1. Cloud Service Models

### IaaS, PaaS, SaaS Comparison

```
RESPONSIBILITY MATRIX:

                    On-Premise    IaaS        PaaS        SaaS
                    ----------    ----        ----        ----
Applications        You           You         You         Vendor
Data                You           You         You         Vendor
Runtime             You           You         Vendor      Vendor
Middleware          You           You         Vendor      Vendor
OS                  You           You         Vendor      Vendor
Virtualization      You           Vendor      Vendor      Vendor
Servers             You           Vendor      Vendor      Vendor
Storage             You           Vendor      Vendor      Vendor
Networking          You           Vendor      Vendor      Vendor
```

**CEA Use Cases**:

| Workload | Model | Example | Rationale |
|----------|-------|---------|-----------|
| Analytics Platform | PaaS | Snowflake, BigQuery | Focus on analytics, not infrastructure |
| Custom Control System | IaaS | EC2, Azure VM | Full control needed for real-time systems |
| Business Applications | SaaS | Salesforce, NetSuite | Standard functionality, fast deployment |
| Data Processing | PaaS | AWS Lambda, Azure Functions | Serverless, event-driven processing |
| Development Environment | PaaS | Heroku, App Engine | Rapid development, managed platform |

---

## 2. Cloud Deployment Models

### Public, Private, Hybrid Cloud

**Public Cloud**:
```
                  INTERNET
                      |
           +----------+----------+
           |          |          |
        AWS         Azure       GCP

Pros:
+ No capital expense
+ Elastic scaling
+ Global reach
+ Managed services

Cons:
- Data sovereignty concerns
- Internet dependency
- Potential vendor lock-in
```

**Hybrid Cloud Architecture**:
```
              CORPORATE DATA CENTER
              +-------------------+
              | Private Cloud     |
              | - Critical control|
              | - Sensitive data  |
              | - Legacy systems  |
              +--------+----------+
                       |
              Dedicated Connection
              (Direct Connect/ExpressRoute)
                       |
              +--------+----------+
              | Public Cloud      |
              | - Analytics       |
              | - Development     |
              | - Burst capacity  |
              +-------------------+
```

**CEA Hybrid Architecture**:
```
ON-PREMISE (Facility)          CLOUD (AWS/Azure/GCP)
---------------------          ---------------------

Real-time Control              Analytics & BI
  +-- SCADA                      +-- Data Warehouse
  +-- PLC/Controllers            +-- Business Intelligence
  +-- Edge Compute               +-- Machine Learning

Operational Systems            Business Systems
  +-- MES/MOM                    +-- ERP (SaaS)
  +-- Local Databases            +-- CRM (SaaS)
                                 +-- Supply Chain

IoT Gateway                    IoT Platform
  +-- Protocol conversion        +-- Device management
  +-- Local processing           +-- Data ingestion
  +-- Offline capability         +-- Rules engine

        |                             |
        +-----------------------------+
              Hybrid Integration
        (VPN, Direct Connect, APIs)
```

---

## 3. Cloud-Native Architecture

### 12-Factor App Principles (Applied to CEA)

```
I.    CODEBASE      One codebase, many deploys (Git repo per service)
II.   DEPENDENCIES  Explicitly declare (requirements.txt, package.json)
III.  CONFIG        Store in environment (not in code)
IV.   BACKING       Treat as attached resources (databases, queues)
      SERVICES
V.    BUILD/RELEASE Separate build and run stages (CI/CD)
      /RUN
VI.   PROCESSES     Stateless processes (session in Redis, not memory)
VII.  PORT BINDING  Export via port (app listens on port, reverse proxy)
VIII. CONCURRENCY   Scale out via process model (horizontal scaling)
IX.   DISPOSABILITY Fast startup/graceful shutdown
X.    DEV/PROD      Keep dev/prod similar (Docker consistency)
      PARITY
XI.   LOGS          Treat logs as event streams (stdout, log aggregation)
XII.  ADMIN         Run admin tasks as one-off processes
      PROCESSES
```

**Example: Environmental Monitoring Service**:

```python
# config.py - Configuration from environment
import os

class Config:
    # Database
    DATABASE_URL = os.getenv('DATABASE_URL')

    # Message Queue
    RABBITMQ_URL = os.getenv('RABBITMQ_URL')

    # Service Configuration
    PORT = int(os.getenv('PORT', 8000))
    LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')

    # Feature Flags
    ENABLE_ALERTS = os.getenv('ENABLE_ALERTS', 'true').lower() == 'true'

# app.py - Stateless application
from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/api/environmental/{zone_id}")
def get_environmental_data(zone_id: str):
    # Fetch from database (backing service)
    # No session state in app memory
    pass

if __name__ == "__main__":
    config = Config()
    uvicorn.run(app, host="0.0.0.0", port=config.PORT)

# Dockerfile - Consistent environments
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]

# docker-compose.yml - Local development parity
version: '3.8'
services:
  app:
    build: .
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=postgresql://db:5432/cea
      - RABBITMQ_URL=amqp://rabbitmq:5672
    depends_on:
      - db
      - rabbitmq
```

### Microservices on Kubernetes

```yaml
# Kubernetes deployment for environmental service

apiVersion: apps/v1
kind: Deployment
metadata:
  name: environmental-service
spec:
  replicas: 3  # Horizontal scaling
  selector:
    matchLabels:
      app: environmental-service
  template:
    metadata:
      labels:
        app: environmental-service
    spec:
      containers:
      - name: app
        image: cea-registry/environmental-service:v1.2.0
        ports:
        - containerPort: 8000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
        - name: LOG_LEVEL
          value: "INFO"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /health
            port: 8000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 8000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: v1
kind: Service
metadata:
  name: environmental-service
spec:
  selector:
    app: environmental-service
  ports:
  - port: 80
    targetPort: 8000
  type: ClusterIP

---
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: environmental-service-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: environmental-service
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
```

---

## 4. Multi-Cloud and Cloud Migration

### Multi-Cloud Strategy

```
WHY MULTI-CLOUD?

Risk Mitigation
    - Avoid single vendor dependency
    - Geographic redundancy

Best-of-Breed
    - AWS for ML (SageMaker)
    - Azure for Microsoft integration
    - GCP for data analytics (BigQuery)

Regulatory Compliance
    - Data residency requirements
    - Industry-specific regulations

CHALLENGES:

Complexity
    - Different APIs, tools, processes
    - Cross-cloud networking
    - Unified monitoring

Cost
    - Data transfer between clouds
    - Multiple skill sets required
    - Tool proliferation
```

**Multi-Cloud Reference Architecture**:

```
                   MULTI-CLOUD CONTROL PLANE
                   (Terraform, CloudFormation)
                            |
        +-------------------+-------------------+
        |                   |                   |
    AWS REGION          AZURE REGION        GCP REGION
        |                   |                   |
    IoT Core            IoT Hub             IoT Core
    Lambda              Functions           Cloud Functions
    S3                  Blob Storage        Cloud Storage
    RDS                 SQL Database        Cloud SQL
        |                   |                   |
        +-------------------+-------------------+
                            |
                   UNIFIED MONITORING
                   (Datadog, New Relic)
```

### Cloud Migration Strategies (6 Rs)

```
1. REHOST (Lift-and-Shift)
   - Move as-is to cloud VMs
   - Fastest, least transformation
   - CEA Use: Legacy MES system → EC2

2. REPLATFORM (Lift-and-Reshape)
   - Minor optimizations
   - Swap DB for RDS, etc.
   - CEA Use: App server → Elastic Beanstalk

3. REPURCHASE (Drop-and-Shop)
   - Switch to SaaS
   - CEA Use: On-prem ERP → NetSuite

4. REFACTOR (Re-architect)
   - Cloud-native rebuild
   - Microservices, serverless
   - CEA Use: Monolith → Lambda functions

5. RETIRE
   - Decommission unused systems
   - CEA Use: Deprecated reporting tools

6. RETAIN
   - Keep on-premise
   - CEA Use: Real-time control systems
```

**Migration Roadmap Example**:

```
PHASE 1 (Months 1-3): Foundation
    - Set up cloud accounts, networking
    - Establish security baseline
    - Deploy monitoring/logging
    - Proof of concept migrations

PHASE 2 (Months 4-6): Quick Wins
    - Migrate development environments
    - Move non-critical workloads
    - Repurchase: Adopt SaaS where appropriate

PHASE 3 (Months 7-12): Core Systems
    - Migrate data warehouse (Replatform)
    - Move business applications (Rehost)
    - Establish hybrid connectivity

PHASE 4 (Months 13-18): Optimization
    - Refactor monoliths to microservices
    - Implement auto-scaling
    - Cost optimization

PHASE 5 (Months 19-24): Advanced
    - Edge computing integration
    - Multi-cloud for specific workloads
    - FinOps maturity
```

---

## 5. Cloud Cost Optimization (FinOps)

### Cost Optimization Strategies

**Rightsizing**:
```
BEFORE:
Production Service: 10 × m5.4xlarge (16 vCPU, 64 GB)
    Cost: $1.536/hr × 10 × 730 hrs = $11,213/month

AFTER (Analysis shows 30% CPU utilization):
Production Service: 10 × m5.2xlarge (8 vCPU, 32 GB)
    Cost: $0.768/hr × 10 × 730 hrs = $5,606/month

SAVINGS: $5,607/month (50%)
```

**Reserved Instances / Savings Plans**:
```
ON-DEMAND vs RESERVED INSTANCES:

Database Server: m5.2xlarge running 24/7
    On-Demand: $0.768/hr × 8760 hrs/year = $6,727/year
    1-Year Reserved: $4,438/year (34% savings)
    3-Year Reserved: $3,144/year (53% savings)

STRATEGY:
    - Reserve baseline capacity (70%)
    - Use on-demand for variable load (30%)
```

**Auto-Scaling**:
```python
# AWS Auto Scaling Policy

{
    "AutoScalingGroupName": "production-service-asg",
    "PolicyName": "scale-on-cpu",
    "PolicyType": "TargetTrackingScaling",
    "TargetTrackingConfiguration": {
        "PredefinedMetricSpecification": {
            "PredefinedMetricType": "ASGAverageCPUUtilization"
        },
        "TargetValue": 70.0
    }
}

# Scale from 5 to 15 instances based on CPU
# Cost savings during off-hours: ~40%
```

**Storage Tiering**:
```
S3 STORAGE CLASSES:

Sensor Data Lifecycle:
    Day 0-90:    S3 Standard ($0.023/GB)
    Day 91-365:  S3 Infrequent Access ($0.0125/GB)
    Day 366+:    S3 Glacier ($0.004/GB)

For 10 TB over 2 years:
    All Standard: $276/month × 24 = $6,624
    With Lifecycle: $230/month × 12 + $50/month × 12 = $3,360

SAVINGS: $3,264 (49%)
```

### FinOps Governance

```
COST ALLOCATION:

TAG STRATEGY:
    - Environment: prod, dev, test
    - Facility: facility-001, facility-002
    - Department: operations, r&d, sales
    - Project: sensor-upgrade, ml-optimization
    - Owner: team-name

CHARGEBACK MODEL:

Monthly Cost Allocation:
+-----------+-----------+-----------+-----------+
| Facility  | Compute   | Storage   | Total     |
+-----------+-----------+-----------+-----------+
| FAC-001   | $2,450    | $890      | $3,340    |
| FAC-002   | $2,120    | $750      | $2,870    |
| FAC-003   | $3,100    | $1,200    | $4,300    |
| Corporate | $5,500    | $3,200    | $8,700    |
+-----------+-----------+-----------+-----------+

BUDGET ALERTS:
    - 50% of budget: Notification
    - 80% of budget: Alert to manager
    - 100% of budget: Auto-approval required
```

**Cost Anomaly Detection**:
```python
# CloudWatch Anomaly Detection for Cost

import boto3

ce = boto3.client('ce')

# Detect cost anomalies
response = ce.get_anomalies(
    MonitorArn='arn:aws:ce::123456789:anomalymonitor/monitor-id',
    DateInterval={
        'StartDate': '2024-01-01',
        'EndDate': '2024-01-31'
    }
)

for anomaly in response['Anomalies']:
    if anomaly['Impact']['TotalImpact'] > 100:  # $100 threshold
        # Alert team
        send_alert(
            f"Cost anomaly detected: {anomaly['RootCauses']}"
            f"Impact: ${anomaly['Impact']['TotalImpact']}"
        )
```

---

## 6. Cloud Security Architecture

### Shared Responsibility Model

```
CLOUD PROVIDER                     CUSTOMER
(AWS/Azure/GCP)                    (CEA Organization)
----------------                   ------------------

Physical security                  Identity & Access Management
Network infrastructure             Application security
Compute/storage hardware           Data encryption
Managed service security           Network configuration
                                   OS & patch management
                                   Firewall configuration
                                   Data classification
```

### Zero-Trust Cloud Architecture

```
                    USER/DEVICE
                         |
                  [Authentication]
                  (MFA, SSO)
                         |
                  [Device Health]
                  (Managed, Patched)
                         |
              +----------+----------+
              |                     |
         [Identity]            [Network]
         Verification          Micro-segmentation
              |                     |
         [Authorization]       [Encryption]
         Least Privilege       In Transit
              |                     |
              +----------+----------+
                         |
                   [Application]
                         |
                [Continuous Monitoring]
                [Behavior Analytics]
```

**Implementation Example**:

```yaml
# AWS Security Architecture

VPC:
  CIDR: 10.0.0.0/16

  Subnets:
    Public:
      - 10.0.1.0/24  # Load Balancer
    Private:
      - 10.0.10.0/24 # Application Tier
      - 10.0.20.0/24 # Database Tier

  Security Groups:
    LB-SG:
      Inbound:
        - Port 443 from 0.0.0.0/0 (HTTPS)
      Outbound:
        - Port 8000 to App-SG

    App-SG:
      Inbound:
        - Port 8000 from LB-SG
      Outbound:
        - Port 5432 to DB-SG
        - Port 443 to 0.0.0.0/0 (API calls)

    DB-SG:
      Inbound:
        - Port 5432 from App-SG
      Outbound:
        - None

  Network ACLs:
    - Deny all by default
    - Allow specific traffic

Encryption:
  At Rest:
    - EBS: KMS encryption
    - RDS: Transparent Data Encryption
    - S3: SSE-KMS
  In Transit:
    - TLS 1.3 for all communication
    - Certificate management via ACM

IAM:
  Principles:
    - No root account usage
    - MFA for all users
    - Roles for services (not access keys)
    - Least privilege policies
```

---

## 7. Case Study: Cloud Migration for AgriCloud Inc.

### Background

AgriCloud operates 15 vertical farms with on-premise infrastructure:
- 200 physical servers across facilities
- $1.2M annual infrastructure costs
- Limited disaster recovery capability
- Slow provisioning (weeks for new environments)

### Migration Strategy

**Assessment**:
```
APPLICATION PORTFOLIO (50 applications):

Rehost (Lift-and-Shift): 20 apps (40%)
    - Legacy MES systems
    - Custom monitoring tools
    - Migration: EC2, RDS

Replatform: 15 apps (30%)
    - Web applications
    - Batch processing
    - Migration: Elastic Beanstalk, Lambda

Repurchase: 10 apps (20%)
    - ERP: NetSuite
    - CRM: Salesforce
    - BI: Looker

Retain (On-Premise): 5 apps (10%)
    - Real-time SCADA
    - Legacy compliance systems
```

**Architecture Design**:

```
           MULTI-REGION ARCHITECTURE

PRIMARY REGION (us-east-1)      DR REGION (us-west-2)
---------------------------     ---------------------------

Production VPC                  DR VPC
    +-- Web Tier (ECS)              +-- Standby (Cold)
    +-- App Tier (ECS)
    +-- Data Tier (RDS)         Replicated RDS (Read Replica)

S3 Buckets                      S3 Buckets (Cross-Region Repl)

CloudFront (Global CDN)

Route 53 (DNS with failover)
```

### Implementation

**Phase 1: Landing Zone** (Months 1-2)
```
Set up:
    - AWS Organizations (multi-account strategy)
    - Networking (VPCs, Direct Connect)
    - Security baseline (IAM, GuardDuty, Config)
    - Logging (CloudTrail, CloudWatch)
    - Cost management (Budgets, Cost Explorer)

Result: Secure foundation ready
```

**Phase 2: Pilot Migration** (Months 3-4)
```
Migrate:
    - Development environment (5 apps)
    - Non-production databases
    - Static website to S3/CloudFront

Learn:
    - Migration process
    - Performance benchmarking
    - Cost modeling
```

**Phase 3: Production Migration** (Months 5-12)
```
Wave 1: Analytics Platform
    - Data warehouse → Redshift
    - ETL jobs → AWS Glue
    - BI dashboards → QuickSight

Wave 2: Web Applications
    - App servers → ECS Fargate
    - Databases → RDS Multi-AZ
    - Load balancers → ALB

Wave 3: Batch Processing
    - Cron jobs → EventBridge + Lambda
    - Heavy processing → Batch

Wave 4: Integration Layer
    - API Gateway
    - SQS/SNS for messaging
```

### Results

**After 12 Months**:

**Cost**:
- Infrastructure costs: $1.2M → $780K (35% reduction)
- TCO includes cloud + operations + training
- ROI achieved in 18 months

**Performance**:
- Server provisioning: weeks → minutes
- Deployment frequency: monthly → daily
- Application uptime: 99.5% → 99.95%

**Capabilities**:
- Disaster recovery: manual/days → automated/hours
- Geographic expansion: months → weeks
- Auto-scaling: none → automatic
- Analytics: delayed → real-time

**Lessons Learned**:
1. Start with non-critical workloads
2. Invest in cloud skills training
3. Use managed services where possible
4. Implement FinOps from day 1
5. Automate everything (IaC with Terraform)

---

## Summary

Cloud architecture enables CEA organizations to scale, innovate, and optimize costs. Key principles:

1. **Service Model Selection**: Choose IaaS/PaaS/SaaS based on control vs. convenience
2. **Hybrid Approach**: Keep critical control on-premise, analytics in cloud
3. **Cloud-Native Design**: 12-factor apps, microservices, containers
4. **Cost Optimization**: Rightsizing, reserved capacity, auto-scaling
5. **Security**: Shared responsibility, zero-trust, encryption everywhere
6. **Migration Planning**: Phased approach, pilot before production

---

## Next Module
**Module 6: Edge Computing and Local Processing** - Learn edge computing architectures, edge-to-cloud patterns, offline-first design, and edge device management for CEA operations.
