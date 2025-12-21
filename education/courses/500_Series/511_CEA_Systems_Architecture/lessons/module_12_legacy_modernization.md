# Module 12: Legacy System Modernization

## Overview
Strategies and patterns for modernizing legacy CEA systems, including assessment methodologies, migration patterns, and risk management.

**Duration**: 4 hours | **Level**: Master

## Learning Objectives
- Assess legacy systems for modernization
- Apply modernization strategies (rehost, refactor, replace)
- Implement strangler pattern for incremental migration
- Design data migration architectures
- Manage risks in modernization projects

## Content Summary

### 1. Legacy System Assessment

**Assessment Framework**:
```
TECHNICAL ASSESSMENT
    - Technology stack (age, support status)
    - Code quality and maintainability
    - Performance and scalability
    - Security vulnerabilities
    - Integration complexity

BUSINESS ASSESSMENT
    - Business criticality
    - User satisfaction
    - Total cost of ownership
    - Alignment with strategy
    - Regulatory compliance

SCORING MATRIX:
                    Low Business    Medium Business  High Business
                    Value           Value            Value
High Technical Fit  Maintain        Enhance          Invest
Medium Tech Fit     Tolerate        Migrate          Modernize
Low Technical Fit   Retire          Replace          Re-architect
```

### 2. Modernization Strategies

**7 R's of Modernization**:
```
1. RETIRE
    - Decommission unused system
    - Example: Deprecated reporting tool → Retired

2. RETAIN
    - Keep as-is (for now)
    - Example: Legacy SCADA → Too risky to change

3. REHOST (Lift-and-Shift)
    - Move to cloud VMs without changes
    - Example: Windows app → EC2 instance

4. RELOCATE
    - Move to new infrastructure with minimal change
    - Example: VMware → AWS VMware Cloud

5. REPLATFORM (Lift-and-Reshape)
    - Minor optimizations during migration
    - Example: App + SQL Server → App + RDS

6. REPURCHASE
    - Switch to SaaS
    - Example: On-prem ERP → NetSuite

7. REFACTOR / RE-ARCHITECT
    - Significant code changes
    - Example: Monolith → Microservices
```

### 3. Strangler Pattern

**Concept**: Gradually replace legacy system by building new functionality around it.

```
PHASE 1: LEGACY SYSTEM (All traffic)
    +-------------------+
    | Legacy System     |
    +-------------------+

PHASE 2: FACADE INTRODUCED
                 Routing Layer
                      |
        +-------------+-------------+
        |                           |
    Legacy System              New System
    (most features)            (new features)

PHASE 3: INCREMENTAL MIGRATION
                 Routing Layer
                      |
        +-------------+-------------+
        |                           |
    Legacy System              New System
    (some features)            (most features)

PHASE 4: COMPLETE MIGRATION
                 Routing Layer
                      |
                  New System
                 (all features)

    Legacy System (decommissioned)
```

**Implementation Example**:
```python
# Routing layer (Facade)

from flask import Flask, request
import requests

app = Flask(__name__)

# Feature flags determine routing
FEATURE_FLAGS = {
    'production_api': 'new',  # Route to new system
    'quality_api': 'legacy',  # Still on legacy
    'inventory_api': 'new'    # Route to new system
}

@app.route('/api/<path:path>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def route_request(path):
    """Route requests to legacy or new system based on feature flags"""

    # Determine which system handles this path
    feature = path.split('/')[0] + '_api'
    system = FEATURE_FLAGS.get(feature, 'legacy')

    if system == 'new':
        target_url = f'http://new-system:8000/api/{path}'
    else:
        target_url = f'http://legacy-system:8080/api/{path}'

    # Forward request
    response = requests.request(
        method=request.method,
        url=target_url,
        headers={key: value for key, value in request.headers if key != 'Host'},
        data=request.get_data(),
        cookies=request.cookies,
        allow_redirects=False
    )

    return (response.content, response.status_code, response.headers.items())

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8888)
```

### 4. Data Migration Strategies

**Migration Patterns**:
```
1. BIG BANG MIGRATION
    - Migrate all data at once
    - System downtime required
    - Risky but fast

2. TRICKLE MIGRATION
    - Migrate data incrementally
    - Run systems in parallel
    - Sync data between systems
    - Lower risk, longer timeline

3. DUAL WRITES
    - Write to both old and new systems
    - Read from new system (after validation)
    - Allows rollback
```

**Data Migration Pipeline**:
```
LEGACY SYSTEM → EXTRACT → TRANSFORM → VALIDATE → LOAD → NEW SYSTEM
                    |          |          |         |
                 ETL Tool   Data       Quality    Target
                           Mapping     Checks     Schema

POST-MIGRATION:
    - Reconciliation (old vs new)
    - Performance testing
    - User acceptance testing
    - Rollback plan ready
```

**Example ETL Script**:
```python
# Data migration with validation

import pandas as pd
from sqlalchemy import create_engine

# Connect to databases
legacy_db = create_engine('postgresql://legacy-db/production')
new_db = create_engine('postgresql://new-db/production')

def migrate_production_data():
    """Migrate production data from legacy to new system"""

    # EXTRACT
    query = """
        SELECT
            batch_id,
            seeding_date,
            harvest_date,
            crop_code,
            yield_kg,
            zone_code
        FROM legacy_production
        WHERE migrated = false
        LIMIT 10000
    """
    df = pd.read_sql(query, legacy_db)

    # TRANSFORM
    df_transformed = df.copy()

    # Map crop codes to new system
    crop_mapping = {
        'LET-ROM': 'CV-10001',  # Romaine lettuce
        'LET-BUT': 'CV-10002',  # Butterhead lettuce
        # ... more mappings
    }
    df_transformed['variety_id'] = df['crop_code'].map(crop_mapping)

    # Calculate growing days
    df_transformed['growing_days'] = (
        pd.to_datetime(df['harvest_date']) -
        pd.to_datetime(df['seeding_date'])
    ).dt.days

    # VALIDATE
    validation_errors = []

    # Check for nulls
    if df_transformed['variety_id'].isnull().any():
        validation_errors.append("Unmapped crop codes found")

    # Check for negative growing days
    if (df_transformed['growing_days'] < 0).any():
        validation_errors.append("Negative growing days found")

    # Check for unrealistic yields
    if (df_transformed['yield_kg'] > 500).any():
        validation_errors.append("Unrealistic yield values found")

    if validation_errors:
        print(f"Validation failed: {validation_errors}")
        return False

    # LOAD
    df_transformed[['batch_id', 'seeding_date', 'harvest_date',
                    'variety_id', 'yield_kg', 'growing_days']].to_sql(
        'production_batches',
        new_db,
        if_exists='append',
        index=False
    )

    # Mark as migrated in legacy system
    legacy_db.execute(f"""
        UPDATE legacy_production
        SET migrated = true
        WHERE batch_id IN ({','.join(map(str, df['batch_id']))})
    """)

    print(f"Migrated {len(df)} records successfully")
    return True

# Run migration in batches
while migrate_production_data():
    pass

print("Migration complete")
```

### 5. Risk Management

**Common Risks and Mitigations**:
```
RISK: Data loss during migration
MITIGATION:
    - Full backup before migration
    - Reconciliation after migration
    - Parallel run period

RISK: Downtime exceeds window
MITIGATION:
    - Practice migration in test environment
    - Automate migration scripts
    - Have rollback plan ready

RISK: Performance degradation
MITIGATION:
    - Load testing before cutover
    - Performance monitoring during transition
    - Capacity buffer in new system

RISK: User resistance to change
MITIGATION:
    - Early user involvement
    - Comprehensive training
    - Support during transition
    - Gradual rollout

RISK: Unknown dependencies discovered
MITIGATION:
    - Dependency mapping exercise
    - Strangler pattern (incremental migration)
    - Monitoring and alerting
```

### 6. Case Study: Legacy MES Modernization

**Background**:
- 15-year-old Manufacturing Execution System
- Visual Basic 6.0 application
- SQL Server 2008 database
- No vendor support
- Security vulnerabilities

**Modernization Approach**:
```
STRATEGY: Strangler Pattern over 18 months

PHASE 1 (Months 1-3): Foundation
    - New microservices platform (Python/Django)
    - New database (PostgreSQL)
    - API facade in front of legacy system
    - Data replication: Legacy → New (one-way)

PHASE 2 (Months 4-9): Incremental Migration
    - Migrate production tracking (read-only)
    - Migrate inventory management
    - Migrate quality recording
    - Legacy still handles core production execution

PHASE 3 (Months 10-15): Critical Functions
    - Migrate production execution
    - Migrate equipment integration
    - Parallel run: Write to both systems

PHASE 4 (Months 16-18): Cutover
    - Switch all users to new system
    - Decommission legacy (keep for reference)
    - Archive historical data
```

**Results**:
- Zero downtime during migration
- Modern web-based UI (vs. thick client)
- API-enabled for integration
- Cloud-ready architecture
- Reduced license costs by 40%

---

## Next Module
**Module 13: Emerging Technology Integration**
