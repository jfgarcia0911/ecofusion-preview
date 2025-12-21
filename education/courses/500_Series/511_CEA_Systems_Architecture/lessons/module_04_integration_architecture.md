# Module 4: Integration Architecture Patterns

## Overview
This module covers integration architecture patterns for connecting heterogeneous CEA systems, including APIs, microservices, event-driven architectures, and enterprise integration patterns.

**Duration**: 5 hours
**Level**: Master

## Learning Objectives
- Design integration architectures for CEA enterprises
- Implement API-first strategies and microservices
- Apply event-driven architecture patterns
- Select appropriate integration patterns for different scenarios
- Implement enterprise service bus and message-oriented middleware

## Table of Contents
1. [Integration Architecture Fundamentals](#fundamentals)
2. [Integration Patterns](#patterns)
3. [API-First Architecture](#api-first)
4. [Microservices Architecture](#microservices)
5. [Event-Driven Architecture](#event-driven)
6. [Enterprise Service Bus](#esb)
7. [Integration Platform Selection](#selection)
8. [Case Study](#case-study)

---

## 1. Integration Architecture Fundamentals {#fundamentals}

### Integration Challenges in CEA

```
SYSTEM LANDSCAPE:
+------------------+     +------------------+     +------------------+
| ERP System       |     | SCADA/Control    |     | Quality Mgmt     |
| (Business logic) |     | (Real-time ops)  |     | (Compliance)     |
+------------------+     +------------------+     +------------------+
         |                       |                        |
         +-------------+---------+------------------------+
                       |
              INTEGRATION LAYER
                       |
         +-------------+---------+------------------------+
         |                       |                        |
+------------------+     +------------------+     +------------------+
| IoT Platform     |     | Data Warehouse   |     | Customer Portal  |
| (Sensors/Edge)   |     | (Analytics)      |     | (B2B/B2C)        |
+------------------+     +------------------+     +------------------+

CHALLENGES:
- Different protocols (REST, MQTT, OPC-UA, Modbus)
- Different data formats (JSON, XML, binary)
- Different timing (real-time, batch, event-driven)
- Different security models
- Different availability requirements
```

### Integration Architecture Patterns Overview

```
PATTERN                 USE CASE                           COMPLEXITY
-------                 --------                           ----------
Point-to-Point          Simple, few systems                Low
File Transfer           Batch data exchange                Low
Shared Database         Tightly coupled systems            Medium
Remote Procedure Call   Synchronous request/response       Medium
Messaging               Asynchronous, decoupled            Medium
Publish-Subscribe       One-to-many communication          Medium
API Gateway             Centralized API management         High
ESB                     Complex transformations            High
Event-Driven            Real-time, reactive systems        High
```

---

## 2. Integration Patterns {#patterns}

### Pattern 1: Point-to-Point Integration

```
System A ←→ System B

Pros:
+ Simple to implement
+ Direct communication
+ Low latency

Cons:
- Doesn't scale (N systems = N*(N-1)/2 connections)
- Tight coupling
- Hard to maintain

CEA Use Case: Single facility, SCADA to IoT gateway
```

### Pattern 2: Hub-and-Spoke (Centralized Integration)

```
           Integration Hub
                 |
    +-----+------+------+-----+
    |     |      |      |     |
  ERP  SCADA   IoT   MES   BI

Pros:
+ Centralized management
+ Reduces connections (N systems = N connections)
+ Single point for transformation/routing

Cons:
- Single point of failure
- Can become bottleneck
- Hub complexity grows

CEA Use Case: Multi-system environment with central data warehouse
```

### Pattern 3: Enterprise Service Bus (ESB)

```
System A --> |            | --> System D
System B --> | ESB        | --> System E
System C --> | (Routing,  | --> System F
             | Transform, |
             | Mediation) |

Components:
- Message broker
- Transformation engine
- Routing rules
- Adapter framework
- Monitoring

CEA Use Case: Large enterprise with many legacy systems
```

### Pattern 4: API Gateway Pattern

```
Mobile App  -->  |               |
Web App     -->  | API Gateway   | --> Microservices
Partner API -->  | - Auth        |     (Environmental,
                 | - Rate limit  |      Production,
                 | - Transform   |      Quality, etc.)
                 | - Cache       |
                 | - Monitor     |

Benefits:
+ Single entry point
+ Cross-cutting concerns centralized
+ Protocol translation
+ Security enforcement

CEA Use Case: Exposing internal systems to partners and mobile apps
```

### Pattern 5: Event-Driven Architecture

```
Event Producers          Event Broker          Event Consumers
----------------        --------------        -----------------
Sensors            -->                   -->  Alert Service
Equipment          -->  Event Bus        -->  Analytics
User Actions       -->  (Kafka, etc.)    -->  Audit Log
Schedule           -->                   -->  Automation

Characteristics:
- Asynchronous
- Loosely coupled
- Scalable
- Event sourcing possible

CEA Use Case: Real-time monitoring and reactive automation
```

---

## 3. API-First Architecture {#api-first}

### API Design Principles

**RESTful API Design**:

```
RESOURCE-ORIENTED:

GET    /api/v1/facilities
GET    /api/v1/facilities/{id}
POST   /api/v1/facilities
PUT    /api/v1/facilities/{id}
DELETE /api/v1/facilities/{id}

GET    /api/v1/facilities/{facility_id}/zones
GET    /api/v1/facilities/{facility_id}/zones/{zone_id}

GET    /api/v1/growing-batches?status=active
GET    /api/v1/growing-batches/{batch_id}/environmental-data

BEST PRACTICES:
- Use nouns, not verbs
- Use plural resources
- Use sub-resources for relationships
- Support filtering, sorting, pagination
- Version APIs
```

**API Specification Example (OpenAPI/Swagger)**:

```yaml
openapi: 3.0.0
info:
  title: CEA Operations API
  version: 1.0.0
  description: API for controlling environment agriculture operations

paths:
  /facilities/{facilityId}/zones/{zoneId}/environmental-data:
    get:
      summary: Get environmental data for a zone
      parameters:
        - name: facilityId
          in: path
          required: true
          schema:
            type: string
        - name: zoneId
          in: path
          required: true
          schema:
            type: string
        - name: startTime
          in: query
          schema:
            type: string
            format: date-time
        - name: endTime
          in: query
          schema:
            type: string
            format: date-time
        - name: metrics
          in: query
          schema:
            type: array
            items:
              type: string
              enum: [temperature, humidity, co2, vpd]
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  zoneId:
                    type: string
                  timeRange:
                    type: object
                    properties:
                      start:
                        type: string
                        format: date-time
                      end:
                        type: string
                        format: date-time
                  data:
                    type: array
                    items:
                      type: object
                      properties:
                        timestamp:
                          type: string
                          format: date-time
                        temperature:
                          type: number
                        humidity:
                          type: number
                        co2:
                          type: integer
                        vpd:
                          type: number
```

### API Gateway Implementation

```python
# API Gateway with Kong (configuration)

services:
  - name: production-service
    url: http://production-api:8000
    routes:
      - name: production-route
        paths:
          - /api/v1/production
        methods:
          - GET
          - POST
        plugins:
          - name: rate-limiting
            config:
              minute: 100
              hour: 1000
          - name: cors
            config:
              origins:
                - https://dashboard.company.com
          - name: jwt
            config:
              claims_to_verify:
                - exp
          - name: request-transformer
            config:
              add:
                headers:
                  - X-Facility-Context:$(FACILITY_ID)

  - name: environmental-service
    url: http://env-api:8000
    routes:
      - name: env-route
        paths:
          - /api/v1/environmental
        plugins:
          - name: prometheus
            config:
              per_consumer: true
```

---

## 4. Microservices Architecture {#microservices}

### Microservices Pattern

```
API Gateway
     |
     +-- Environmental Service (Node.js)
     |   +-- Environmental DB (TimescaleDB)
     |
     +-- Production Service (Python/Django)
     |   +-- Production DB (PostgreSQL)
     |
     +-- Quality Service (Java/Spring)
     |   +-- Quality DB (PostgreSQL)
     |
     +-- Notification Service (Node.js)
     |   +-- Message Queue (RabbitMQ)
     |
     +-- Analytics Service (Python/Flask)
         +-- Data Warehouse (Snowflake)

CHARACTERISTICS:
- Independently deployable
- Technology diversity
- Organized around business capabilities
- Decentralized data management
```

### Service Communication Patterns

**Synchronous (REST/gRPC)**:

```python
# Production Service calling Environmental Service

import requests

def get_zone_environment(zone_id, start_time, end_time):
    """Synchronous call to Environmental Service"""
    response = requests.get(
        f'http://environmental-service/api/zones/{zone_id}/data',
        params={
            'start_time': start_time,
            'end_time': end_time
        },
        timeout=5
    )
    response.raise_for_status()
    return response.json()

# Usage
try:
    env_data = get_zone_environment('ZONE-001', '2024-01-01', '2024-01-02')
except requests.exceptions.Timeout:
    # Handle timeout
    logging.error("Environmental service timeout")
    env_data = None
```

**Asynchronous (Message Queue)**:

```python
# Production Service publishing harvest event

import pika
import json

def publish_harvest_event(batch_id, harvest_data):
    """Publish harvest event for other services to consume"""
    connection = pika.BlockingConnection(
        pika.ConnectionParameters('rabbitmq')
    )
    channel = connection.channel()

    channel.exchange_declare(
        exchange='cea-events',
        exchange_type='topic',
        durable=True
    )

    event = {
        'event_type': 'harvest.completed',
        'batch_id': batch_id,
        'timestamp': datetime.now().isoformat(),
        'data': harvest_data
    }

    channel.basic_publish(
        exchange='cea-events',
        routing_key='production.harvest.completed',
        body=json.dumps(event),
        properties=pika.BasicProperties(delivery_mode=2)  # Persistent
    )

    connection.close()

# Quality Service consuming harvest events

def consume_harvest_events():
    """Listen for harvest events to trigger quality checks"""
    connection = pika.BlockingConnection(
        pika.ConnectionParameters('rabbitmq')
    )
    channel = connection.channel()

    channel.queue_declare(queue='quality-harvest-queue', durable=True)
    channel.queue_bind(
        exchange='cea-events',
        queue='quality-harvest-queue',
        routing_key='production.harvest.*'
    )

    def callback(ch, method, properties, body):
        event = json.loads(body)
        batch_id = event['batch_id']

        # Schedule quality testing
        schedule_quality_test(batch_id)

        ch.basic_ack(delivery_tag=method.delivery_tag)

    channel.basic_consume(
        queue='quality-harvest-queue',
        on_message_callback=callback
    )

    channel.start_consuming()
```

### Service Discovery and Registration

```yaml
# Consul service registration

{
  "service": {
    "name": "production-service",
    "tags": ["v1", "production", "api"],
    "port": 8000,
    "check": {
      "http": "http://localhost:8000/health",
      "interval": "10s"
    }
  }
}
```

---

## 5. Event-Driven Architecture {#event-driven}

### Event Streaming with Kafka

```
KAFKA TOPICS:

sensor-readings          (High volume, short retention)
equipment-status         (Medium volume, 30-day retention)
production-events        (Low volume, indefinite retention)
alerts                   (Low volume, 90-day retention)

PARTITIONING STRATEGY:
- Partition by facility_id for parallelism
- Ensures ordering within facility
- Scales with number of facilities
```

**Producer Example**:

```python
from kafka import KafkaProducer
import json

producer = KafkaProducer(
    bootstrap_servers=['kafka:9092'],
    value_serializer=lambda v: json.dumps(v).encode('utf-8'),
    acks='all',  # Wait for all replicas
    retries=3
)

def publish_sensor_reading(reading):
    """Publish sensor reading to Kafka"""
    topic = 'sensor-readings'
    key = reading['facility_id']  # Partition key

    producer.send(
        topic,
        key=key.encode('utf-8'),
        value=reading
    )
    producer.flush()

# Usage
reading = {
    'timestamp': '2024-01-15T10:30:00Z',
    'facility_id': 'FAC-001',
    'zone_id': 'ZONE-A1',
    'sensor_id': 'TEMP-001',
    'temperature': 22.5,
    'humidity': 65.2,
    'co2_ppm': 850
}
publish_sensor_reading(reading)
```

**Consumer Example**:

```python
from kafka import KafkaConsumer
import json

consumer = KafkaConsumer(
    'sensor-readings',
    bootstrap_servers=['kafka:9092'],
    group_id='alert-processor',
    value_deserializer=lambda m: json.loads(m.decode('utf-8')),
    auto_offset_reset='latest',
    enable_auto_commit=True
)

def process_sensor_readings():
    """Process sensor readings for alerting"""
    for message in consumer:
        reading = message.value

        # Check for anomalies
        if reading['temperature'] > 35:
            trigger_alert(
                reading['facility_id'],
                reading['zone_id'],
                'HIGH_TEMPERATURE',
                reading['temperature']
            )

        if reading['co2_ppm'] < 400:
            trigger_alert(
                reading['facility_id'],
                reading['zone_id'],
                'LOW_CO2',
                reading['co2_ppm']
            )
```

### Event Sourcing Pattern

```
COMMAND:              EVENT:                 STATE:
AdjustTemperature --> TemperatureAdjusted --> CurrentSetpoints
HarvestBatch      --> BatchHarvested      --> BatchStatus
AddNutrients      --> NutrientsAdded      --> NutrientLevels

BENEFITS:
- Complete audit trail
- Time travel (reconstruct state at any point)
- Event replay for debugging
- Event-driven projections
```

**Implementation Example**:

```python
# Event Store
class EventStore:
    def __init__(self):
        self.events = []

    def append(self, event):
        event['version'] = len(self.events)
        event['timestamp'] = datetime.now()
        self.events.append(event)

    def get_events(self, aggregate_id):
        return [e for e in self.events if e['aggregate_id'] == aggregate_id]

# Aggregate
class GrowingBatch:
    def __init__(self, batch_id):
        self.batch_id = batch_id
        self.status = 'initialized'
        self.seeding_date = None
        self.harvest_date = None
        self.version = 0

    def apply_event(self, event):
        """Apply event to update state"""
        if event['type'] == 'BatchSeeded':
            self.status = 'seeded'
            self.seeding_date = event['data']['seeding_date']
        elif event['type'] == 'BatchHarvested':
            self.status = 'harvested'
            self.harvest_date = event['data']['harvest_date']
        self.version += 1

    @staticmethod
    def from_events(batch_id, events):
        """Reconstruct state from events"""
        batch = GrowingBatch(batch_id)
        for event in events:
            batch.apply_event(event)
        return batch

# Usage
event_store = EventStore()

# Record event
event_store.append({
    'aggregate_id': 'BATCH-001',
    'type': 'BatchSeeded',
    'data': {
        'batch_id': 'BATCH-001',
        'variety': 'Rex Lettuce',
        'seeding_date': '2024-01-15'
    }
})

# Reconstruct state
events = event_store.get_events('BATCH-001')
batch = GrowingBatch.from_events('BATCH-001', events)
print(batch.status)  # 'seeded'
```

---

## 6. Enterprise Service Bus {#esb}

### ESB Architecture

```
             Enterprise Service Bus
                      |
     +---------+------+------+---------+
     |         |      |      |         |
  Adapter   Router  Transform  Monitor  Orchestration
     |         |      |      |         |
  Connects  Routes  Converts Tracks   Coordinates
  to any    messages  formats  messages  workflows
  protocol
```

### Message Transformation

```xml
<!-- MuleSoft transformation example -->

<flow name="production-to-warehouse">
  <!-- Receive from MES -->
  <http:listener path="/production-data" />

  <!-- Transform MES format to warehouse format -->
  <dw:transform-message>
    <dw:set-payload><![CDATA[
      %dw 2.0
      output application/json
      ---
      {
        facilityId: payload.plant_id,
        productionDate: payload.prod_date,
        batches: payload.lots map {
          batchId: $.lot_number,
          cropVariety: $.product_code,
          harvestWeight: $.weight_kg,
          qualityGrade: $.grade
        }
      }
    ]]></dw:set-payload>
  </dw:transform-message>

  <!-- Send to data warehouse -->
  <http:request method="POST" url="https://warehouse-api/production" />
</flow>
```

### Content-Based Routing

```python
# Apache Camel (Python DSL) routing

from camel import CamelContext, RouteBuilder

class ProductionRouter(RouteBuilder):
    def configure(self):
        # Route based on event type
        self.from_('kafka:production-events') \
            .choice() \
                .when(self.body()['event_type'] == 'harvest') \
                    .to('direct:process-harvest') \
                .when(self.body()['event_type'] == 'quality-test') \
                    .to('direct:process-quality') \
                .when(self.body()['event_type'] == 'shipment') \
                    .to('direct:process-shipment') \
                .otherwise() \
                    .to('log:unknown-event')

        # Process harvest events
        self.from_('direct:process-harvest') \
            .log('Processing harvest: ${body}') \
            .to('http://inventory-service/api/harvests')

        # Process quality events
        self.from_('direct:process-quality') \
            .log('Processing quality test: ${body}') \
            .to('http://quality-service/api/tests')
```

---

## 7. Integration Platform Selection {#selection}

### Integration Platform Comparison

| Platform | Type | Best For | Cost |
|----------|------|----------|------|
| **MuleSoft** | ESB/iPaaS | Enterprise, complex integrations | $$$$ |
| **Dell Boomi** | iPaaS | Cloud integrations, SaaS apps | $$$ |
| **Apache Camel** | ESB Framework | Custom, on-premise | $ (open source) |
| **AWS App Flow** | iPaaS | AWS-native integrations | $$ |
| **Zapier/Make** | Low-code iPaaS | Simple automations | $ |
| **Kafka + Custom** | Event Streaming | High-volume, real-time | $$ |

### Selection Criteria

```
EVALUATION FRAMEWORK:

Technical Requirements (40%)
    [ ] Supported protocols (REST, MQTT, OPC-UA, Modbus)
    [ ] Transformation capabilities
    [ ] Performance/throughput
    [ ] Error handling and retry
    [ ] Monitoring and logging

Integration Complexity (25%)
    [ ] Number of systems to integrate
    [ ] Legacy system support
    [ ] Real-time requirements
    [ ] Data volume

Cost (20%)
    [ ] License/subscription fees
    [ ] Implementation costs
    [ ] Operating costs
    [ ] Training costs

Organization (15%)
    [ ] Skills availability
    [ ] Vendor relationship
    [ ] Support quality
    [ ] Roadmap alignment
```

---

## 8. Case Study: FarmTech Integration Modernization {#case-study}

### Background

FarmTech operates 12 vertical farms with fragmented integration:
- 47 point-to-point integrations
- Custom code for each integration
- Frequent failures, hard to troubleshoot
- 3 months to add new integration

### Solution Design

**Architecture**:

```
                    API Gateway (Kong)
                           |
         +-----------------+------------------+
         |                 |                  |
    Legacy Systems    Modern Services    External APIs
         |                 |                  |
    (Adapters)        (REST/gRPC)        (REST)
         |                 |                  |
         +--------+--------+--------+---------+
                  |                 |
           Message Broker      Event Stream
           (RabbitMQ)          (Kafka)
```

**Integration Patterns Used**:

1. **API Gateway**: Single entry point, authentication
2. **Message Queue**: Asynchronous order processing
3. **Event Streaming**: Real-time sensor data
4. **Adapters**: Legacy SCADA integration

### Implementation

**Phase 1: API Gateway**:
```yaml
# Kong declarative configuration
services:
  - name: mes-service
    url: http://mes.internal:8000
    routes:
      - name: mes-api
        paths: [/api/v1/production]
    plugins:
      - name: jwt
      - name: rate-limiting
        config:
          minute: 500
```

**Phase 2: Event Streaming**:
```python
# Sensor data streaming
from kafka import KafkaProducer

class SensorDataPublisher:
    def __init__(self):
        self.producer = KafkaProducer(
            bootstrap_servers=['kafka:9092'],
            compression_type='snappy'
        )

    def publish_reading(self, facility_id, reading):
        topic = f'facility-{facility_id}-sensors'
        self.producer.send(topic, value=reading)
```

### Results

**After 12 Months**:
- Reduced integrations from 47 to 12 (via API gateway)
- New integration time: 3 months → 2 weeks
- Integration failures: 30/month → 3/month
- Real-time data latency: minutes → seconds

---

## Summary

Integration architecture is critical for CEA enterprises with multiple systems. Key takeaways:

1. **Pattern Selection**: Choose patterns based on requirements (sync/async, coupling, complexity)
2. **API-First**: Design APIs as first-class products
3. **Event-Driven**: Use events for real-time, reactive systems
4. **Platform Approach**: Centralize integration management
5. **Monitoring**: Instrument integrations for observability

---

## Next Module
**Module 5: Cloud Architecture for CEA** - Learn cloud service models, deployment patterns, cloud-native architecture, and cloud cost optimization.
