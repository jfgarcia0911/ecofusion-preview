# Cloud Services Comparison Cheatsheet

## Compute Services

| Service Type | AWS | Azure | GCP | Use Case |
|--------------|-----|-------|-----|----------|
| **Virtual Machines** | EC2 | Virtual Machines | Compute Engine | Traditional apps, full control |
| **Containers** | ECS/EKS | AKS | GKE | Microservices, cloud-native |
| **Serverless Functions** | Lambda | Functions | Cloud Functions | Event-driven, variable load |
| **Platform as a Service** | Elastic Beanstalk | App Service | App Engine | Web apps, quick deployment |

---

## Storage Services

| Service Type | AWS | Azure | GCP | Use Case |
|--------------|-----|-------|-----|----------|
| **Object Storage** | S3 | Blob Storage | Cloud Storage | Files, backups, data lakes |
| **Block Storage** | EBS | Managed Disks | Persistent Disk | VM storage, databases |
| **File Storage** | EFS | Files | Filestore | Shared file systems |
| **Archive** | Glacier | Archive Storage | Coldline/Archive | Long-term backup |

**Storage Tiers Example (S3)**:
- **Standard**: $0.023/GB (frequent access)
- **Infrequent Access**: $0.0125/GB (monthly access)
- **Glacier**: $0.004/GB (archival)

---

## Database Services

| Database Type | AWS | Azure | GCP | Best For |
|---------------|-----|-------|-----|----------|
| **Relational** | RDS (PostgreSQL, MySQL) | SQL Database | Cloud SQL | OLTP, transactions |
| **NoSQL Document** | DynamoDB | Cosmos DB | Firestore | Flexible schema, scale |
| **Data Warehouse** | Redshift | Synapse Analytics | BigQuery | Analytics, OLAP |
| **Time-Series** | Timestream | Time Series Insights | (Use managed TimescaleDB) | IoT sensor data |
| **Cache** | ElastiCache (Redis) | Cache for Redis | Memorystore | Performance, sessions |
| **Graph** | Neptune | Cosmos DB (Graph API) | (Use managed Neo4j) | Relationships, networks |

---

## Networking Services

| Service | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **Virtual Network** | VPC | Virtual Network | VPC |
| **Load Balancer** | ELB (ALB, NLB) | Load Balancer | Cloud Load Balancing |
| **CDN** | CloudFront | CDN | Cloud CDN |
| **DNS** | Route 53 | DNS | Cloud DNS |
| **Direct Connection** | Direct Connect | ExpressRoute | Interconnect |
| **API Gateway** | API Gateway | API Management | API Gateway/Apigee |

---

## Analytics & Big Data

| Service Type | AWS | Azure | GCP |
|--------------|-----|-------|-----|
| **Data Warehouse** | Redshift | Synapse | BigQuery |
| **ETL** | Glue | Data Factory | Dataflow |
| **Stream Processing** | Kinesis | Event Hubs | Dataflow |
| **Data Lake** | S3 + Athena | Data Lake Storage | Cloud Storage + BigQuery |
| **Business Intelligence** | QuickSight | Power BI | Looker |

---

## IoT Services

| Component | AWS | Azure | GCP |
|-----------|-----|-------|-----|
| **IoT Platform** | IoT Core | IoT Hub | Cloud IoT Core |
| **Device Management** | IoT Device Management | IoT Hub Device Provisioning | Cloud IoT Device Manager |
| **Edge Computing** | IoT Greengrass | IoT Edge | (Partner solutions) |
| **Time-Series DB** | Timestream | Time Series Insights | (Managed alternatives) |

---

## Machine Learning

| Service | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **ML Platform** | SageMaker | Machine Learning | Vertex AI |
| **Pre-trained Models** | Rekognition, Comprehend | Cognitive Services | Vision AI, Natural Language |
| **ML Ops** | SageMaker Pipelines | MLflow on Databricks | Vertex AI Pipelines |
| **GPU Instances** | P3, P4 instances | NC-series | A2 instances |

---

## Security & Identity

| Service | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **Identity Management** | IAM | Active Directory | IAM |
| **Secrets Management** | Secrets Manager | Key Vault | Secret Manager |
| **Encryption** | KMS | Key Vault | Cloud KMS |
| **Security Monitoring** | GuardDuty, SecurityHub | Security Center | Security Command Center |
| **DDoS Protection** | Shield | DDoS Protection | Cloud Armor |

---

## Monitoring & Logging

| Service | AWS | Azure | GCP |
|---------|-----|-------|-----|
| **Metrics** | CloudWatch | Monitor | Cloud Monitoring |
| **Logging** | CloudWatch Logs | Monitor Logs | Cloud Logging |
| **Tracing** | X-Ray | Application Insights | Cloud Trace |
| **Dashboards** | CloudWatch Dashboards | Monitor Dashboards | Cloud Monitoring Dashboards |

---

## Cost Optimization Cheatsheet

### Reserved Instances Savings
```
On-Demand vs Reserved (3-year):
- Compute: ~50-70% savings
- Database: ~50-60% savings
- Cache: ~50% savings

Example:
m5.2xlarge on-demand: $0.768/hr
m5.2xlarge reserved: ~$0.35/hr
Annual savings: ~$3,600 per instance
```

### Auto-Scaling Best Practices
```
1. Set minimum to baseline load
2. Set maximum with buffer (20%)
3. Scale on CPU or custom metrics
4. Use predictive scaling if possible
5. Test scaling policies
```

### Storage Cost Optimization
```
1. Lifecycle policies (hot → warm → cold)
2. Compress before upload
3. Delete unnecessary data
4. Use appropriate storage tier
```

---

## Service Selection Decision Tree

```
NEED COMPUTE?
    Full control needed? → VM (EC2, Azure VM, Compute Engine)
    Containers? → ECS/EKS, AKS, GKE
    Event-driven? → Lambda, Functions, Cloud Functions
    Web app only? → Elastic Beanstalk, App Service, App Engine

NEED STORAGE?
    Files/objects? → S3, Blob, Cloud Storage
    Shared filesystem? → EFS, Files, Filestore
    VM storage? → EBS, Managed Disks, Persistent Disk

NEED DATABASE?
    Transactions (OLTP)? → RDS, SQL Database, Cloud SQL
    Analytics (OLAP)? → Redshift, Synapse, BigQuery
    Time-series? → Timestream, Time Series Insights, TimescaleDB
    Flexible schema? → DynamoDB, Cosmos DB, Firestore
    Cache? → ElastiCache, Cache for Redis, Memorystore

NEED INTEGRATION?
    APIs? → API Gateway, API Management, Apigee
    Messaging? → SQS/SNS, Service Bus, Pub/Sub
    Stream processing? → Kinesis, Event Hubs, Dataflow
```

---

## Pricing Comparison (Approximate)

**Compute (m5.2xlarge equivalent)**
| Provider | On-Demand | 3-Year Reserved |
|----------|-----------|-----------------|
| AWS | $0.768/hr | ~$0.35/hr |
| Azure | $0.768/hr | ~$0.35/hr |
| GCP | $0.768/hr | ~$0.35/hr (committed use) |

**Storage (per GB/month)**
| Provider | Standard | Archive |
|----------|----------|---------|
| AWS S3 | $0.023 | $0.004 |
| Azure Blob | $0.018 | $0.002 |
| GCP Cloud Storage | $0.020 | $0.004 |

*Prices vary by region and are subject to change*

---

*Use this cheatsheet for quick cloud service selection and cost estimation!*
