# Module 10: Disaster Recovery and Business Continuity

## Overview
Design resilient systems with disaster recovery capabilities, business continuity planning, backup strategies, and high availability architectures.

**Duration**: 4 hours | **Level**: Master

## Learning Objectives
- Design disaster recovery architectures
- Implement backup and restoration strategies
- Create business continuity plans
- Design for high availability
- Conduct chaos engineering experiments

## Content Summary

### 1. DR/BC Fundamentals

**Key Metrics**:
- **RTO (Recovery Time Objective)**: Maximum acceptable downtime
- **RPO (Recovery Point Objective)**: Maximum acceptable data loss
- **MTTR (Mean Time To Repair)**: Average time to restore service
- **MTBF (Mean Time Between Failures)**: Reliability metric

**Example Requirements**:
```
System              RTO         RPO         Strategy
------              ---         ---         --------
Climate Control     5 minutes   0 (none)    Hot standby, local redundancy
Production DB       1 hour      15 minutes  Warm standby, continuous backup
Analytics           24 hours    24 hours    Cold standby, daily backup
```

### 2. Backup Strategies

**3-2-1 Backup Rule**:
- **3** copies of data
- **2** different storage media
- **1** copy off-site

**Backup Types**:
```
FULL BACKUP (Weekly)
    - Complete copy of all data
    - Longest time, most storage
    - Fastest restore

INCREMENTAL BACKUP (Daily)
    - Only changes since last backup
    - Fast, minimal storage
    - Slower restore (need full + all incrementals)

DIFFERENTIAL BACKUP
    - Changes since last full backup
    - Medium time/storage
    - Medium restore (full + latest differential)
```

**Implementation**:
```bash
#!/bin/bash
# PostgreSQL backup script

BACKUP_DIR="/backups/postgres"
DB_NAME="production_db"
DATE=$(date +%Y%m%d_%H%M%S)

# Full backup
pg_dump $DB_NAME | gzip > $BACKUP_DIR/full_$DATE.sql.gz

# Upload to S3 (off-site)
aws s3 cp $BACKUP_DIR/full_$DATE.sql.gz s3://cea-backups/postgres/

# Retention: Keep last 7 daily, 4 weekly, 12 monthly
# Delete backups older than 90 days
find $BACKUP_DIR -name "full_*.sql.gz" -mtime +90 -delete
```

### 3. High Availability Architecture

**Active-Active Configuration**:
```
            Load Balancer
                 |
        +--------+--------+
        |                 |
    Region A          Region B
    (Active)          (Active)
        |                 |
    App Servers       App Servers
        |                 |
    Database          Database
    (Primary)         (Replica)
```

**Active-Passive Configuration**:
```
    Region A (Active)
        |
    App Servers
        |
    Database (Primary)
        |
        | (Replication)
        |
    Region B (Passive)
        |
    Standby Servers
        |
    Database (Replica)

    Failover on primary failure
```

### 4. Database HA Solutions

**PostgreSQL HA**:
```yaml
# Patroni configuration for PostgreSQL HA

scope: postgres-cluster
name: node1

restapi:
  listen: 0.0.0.0:8008
  connect_address: node1.example.com:8008

etcd:
  hosts: etcd1:2379,etcd2:2379,etcd3:2379

bootstrap:
  dcs:
    ttl: 30
    loop_wait: 10
    retry_timeout: 10
    maximum_lag_on_failover: 1048576

postgresql:
  listen: 0.0.0.0:5432
  connect_address: node1.example.com:5432
  data_dir: /var/lib/postgresql/data
  parameters:
    max_connections: 100
    shared_buffers: 256MB
```

**Multi-Region Replication**:
```
PRIMARY REGION (us-east-1)
    PostgreSQL Primary
        |
        +-- Synchronous Replication (within region)
        |       |
        |   Read Replica 1
        |       |
        +-- Asynchronous Replication (cross-region)
                |
SECONDARY REGION (us-west-2)
    PostgreSQL Replica
        |
    Read Replica 2
```

### 5. Disaster Recovery Procedures

**DR Runbook Example**:
```
DISASTER: PRIMARY DATABASE FAILURE

DETECTION (< 5 minutes):
    1. Monitoring alerts trigger
    2. On-call engineer paged
    3. Confirm failure (not false alarm)

ASSESSMENT (< 10 minutes):
    4. Determine failure scope
    5. Estimate recovery time
    6. Activate DR team

FAILOVER (< 30 minutes):
    7. Promote standby database to primary
    8. Update DNS records
    9. Redirect application traffic
    10. Verify services operational

COMMUNICATION (Ongoing):
    11. Notify stakeholders
    12. Update status page
    13. Post-incident report

RECOVERY (Hours to days):
    14. Investigate root cause
    15. Restore original primary
    16. Re-establish replication
    17. Plan failback
```

### 6. Chaos Engineering

**Netflix Chaos Monkey Principles**:
- Randomly terminate instances to test resilience
- Introduce latency to test timeouts
- Simulate network partitions
- Test backup and restore procedures

**Chaos Experiment Example**:
```python
# Chaos experiment using Chaos Toolkit

{
  "title": "Database Failover Test",
  "description": "Verify application handles database failover",
  "steady-state-hypothesis": {
    "title": "Application is healthy",
    "probes": [
      {
        "type": "probe",
        "name": "app-responds-200",
        "tolerance": 200,
        "provider": {
          "type": "http",
          "url": "https://app.example.com/health"
        }
      }
    ]
  },
  "method": [
    {
      "type": "action",
      "name": "terminate-primary-database",
      "provider": {
        "type": "python",
        "module": "chaosaws.rds.actions",
        "func": "stop_instance",
        "arguments": {
          "instance_id": "prod-db-primary"
        }
      }
    },
    {
      "type": "probe",
      "name": "verify-failover-completed",
      "provider": {
        "type": "python",
        "module": "custom_probes",
        "func": "check_database_available"
      }
    }
  ],
  "rollbacks": [
    {
      "type": "action",
      "name": "restore-primary-database",
      "provider": {
        "type": "python",
        "module": "chaosaws.rds.actions",
        "func": "start_instance",
        "arguments": {
          "instance_id": "prod-db-primary"
        }
      }
    }
  ]
}
```

### 7. Business Continuity Planning

**BCP Components**:
```
1. BUSINESS IMPACT ANALYSIS
    - Identify critical functions
    - Determine acceptable downtime
    - Prioritize recovery

2. RISK ASSESSMENT
    - Natural disasters
    - Cyber attacks
    - Equipment failure
    - Human error

3. RECOVERY STRATEGIES
    - Technology recovery
    - Facility recovery
    - Personnel recovery

4. PLAN DEVELOPMENT
    - Document procedures
    - Assign responsibilities
    - Resource allocation

5. TESTING AND MAINTENANCE
    - Annual DR drills
    - Quarterly reviews
    - Update after changes
```

---

## Next Module
**Module 11: Architecture Governance and Standards**
