# Quiz 6: Edge Computing and Local Processing

## Course 511: CEA Systems Architecture

**Module**: 6 - Edge Computing and Local Processing
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What is the primary advantage of edge computing for CEA facility control systems?

A) Lower hardware costs
B) Reduced latency and continued operation during internet outages
C) Unlimited storage capacity
D) Elimination of all cloud services

**Correct Answer**: B

**Explanation**: Edge computing processes data locally, providing sub-millisecond response times for control systems and ensuring critical operations continue even if cloud connectivity is lost.

---

### Question 2
In the edge-to-cloud continuum, which layer is closest to the physical sensors and actuators?

A) Cloud data center
B) Regional edge
C) Local edge / fog layer
D) Mobile devices

**Correct Answer**: C

**Explanation**: The local edge (fog layer) sits closest to physical devices, processing data with minimal latency before selectively forwarding aggregated information to cloud services.

---

### Question 3
What is "offline-first" architecture in edge computing?

A) Systems that never connect to the internet
B) Systems designed to function fully without connectivity, synchronizing when available
C) Systems that are always offline
D) Systems that require constant internet connection

**Correct Answer**: B

**Explanation**: Offline-first design ensures systems operate independently during connectivity loss, storing data locally and synchronizing with central systems when connections are restored.

---

### Question 4
Which protocol is most commonly used for edge device management and orchestration?

A) HTTP/REST only
B) MQTT or other lightweight IoT protocols
C) FTP
D) Telnet

**Correct Answer**: B

**Explanation**: MQTT and similar IoT protocols are designed for resource-constrained devices, providing efficient publish-subscribe messaging with minimal bandwidth and overhead.

---

### Question 5
What is "data decimation" in edge computing?

A) Deleting all data
B) Reducing data volume by aggregating or filtering at the edge before sending to cloud
C) Encrypting data
D) Duplicating all data

**Correct Answer**: B

**Explanation**: Data decimation intelligently reduces data volume at the edge through aggregation, averaging, or filtering, sending only relevant information to the cloud to reduce bandwidth and costs.

---

### Question 6
In CEA facilities, which type of processing is MOST appropriate for the edge layer?

A) Annual financial reports
B) Real-time environmental control and safety-critical decisions
C) Marketing campaign analysis
D) Long-term strategic planning

**Correct Answer**: B

**Explanation**: Time-critical control decisions (HVAC adjustments, irrigation triggers, safety alerts) must happen at the edge with minimal latency, while analytics can occur in the cloud.

---

### Question 7
What is "eventual consistency" in distributed edge-cloud architectures?

A) Data is immediately synchronized everywhere
B) Different nodes may have different data temporarily but will converge to consistent state
C) Data is never consistent
D) Only cloud data matters

**Correct Answer**: B

**Explanation**: Eventual consistency accepts temporary data differences across distributed systems, acknowledging that synchronization takes time but will eventually occur.

---

### Question 8
Which edge computing pattern is best for a multi-facility CEA operation needing centralized analytics?

A) Each facility operates completely independently with no data sharing
B) Hierarchical edge with facility-level processing and regional/cloud aggregation
C) All processing in a single cloud region
D) Manual data collection with spreadsheets

**Correct Answer**: B

**Explanation**: Hierarchical edge architecture processes data locally for control, aggregates at facility level for local insights, and sends summarized data to central cloud for cross-facility analytics.

---

### Question 9
What is a key security consideration for edge devices in CEA facilities?

A) Edge devices don't need security
B) Physical security, secure boot, and encrypted communication channels
C) Only password protection is needed
D) Security is only needed in the cloud

**Correct Answer**: B

**Explanation**: Edge devices require comprehensive security including physical tamper protection, secure boot to prevent unauthorized firmware, and encrypted communications to protect data in transit.

---

### Question 10
Which edge computing deployment model allows processing on network infrastructure between devices and cloud?

A) Device edge only
B) Fog computing / intermediate processing nodes
C) Cloud-only processing
D) Manual processing

**Correct Answer**: B

**Explanation**: Fog computing places processing capabilities on network infrastructure (switches, gateways, local servers) between IoT devices and cloud, balancing latency and resource availability.

---

## Answer Key

1. B - Reduced latency and offline operation capability
2. C - Local edge / fog layer
3. B - Full function without connectivity, sync when available
4. B - MQTT or lightweight IoT protocols
5. B - Reducing data volume through aggregation/filtering
6. B - Real-time control and safety decisions
7. B - Temporary differences converging to consistency
8. B - Hierarchical edge with multi-level processing
9. B - Physical security, secure boot, encrypted comms
10. B - Fog computing / intermediate nodes

---

## Scoring Guide

- 10/10: Excellent! Edge computing mastery
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 7: IoT Platform Architecture
3. Complete the edge architecture design exercise
