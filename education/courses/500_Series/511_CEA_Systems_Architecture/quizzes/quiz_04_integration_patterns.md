# Quiz 4: Integration Architecture Patterns

## Course 511: CEA Systems Architecture

**Module**: 4 - Integration Architecture Patterns
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What is the primary disadvantage of point-to-point integration as the number of systems increases?

A) It's too fast
B) Integration complexity grows exponentially (N*(N-1)/2 connections)
C) It requires cloud infrastructure
D) It's too secure

**Correct Answer**: B

**Explanation**: Point-to-point integration creates a web of connections that becomes unmanageable as systems grow. With 10 systems, you'd need 45 unique integrations to connect everything.

---

### Question 2
In a hub-and-spoke integration pattern, what role does the "hub" play?

A) Stores all business data permanently
B) Acts as a central integration point managing communication between systems
C) Replaces all existing applications
D) Provides user interface only

**Correct Answer**: B

**Explanation**: The hub serves as a centralized integration broker, transforming and routing messages between spoke systems, reducing point-to-point complexity.

---

### Question 3
Which integration pattern is most appropriate for real-time event notification when crop conditions change in a CEA facility?

A) Nightly batch file transfer
B) Event-driven architecture with publish-subscribe messaging
C) Weekly manual data entry
D) Annual data synchronization

**Correct Answer**: B

**Explanation**: Event-driven architecture with pub-sub messaging enables real-time notification of interested systems when events occur, perfect for time-sensitive crop condition changes.

---

### Question 4
What is a key principle of RESTful API design?

A) APIs must use SOAP protocol
B) Resources are identified by URLs and manipulated using standard HTTP methods
C) All data must be stored in XML format
D) APIs can only be used internally

**Correct Answer**: B

**Explanation**: REST uses resource-based URLs (e.g., /api/crops/123) with standard HTTP methods (GET, POST, PUT, DELETE) for intuitive, stateless API interactions.

---

### Question 5
In microservices architecture, what does "bounded context" mean?

A) Geographic limitations on where services run
B) Clear boundaries defining each service's responsibilities and data ownership
C) Budget constraints for each service
D) Time limits on service execution

**Correct Answer**: B

**Explanation**: Bounded context (from Domain-Driven Design) defines explicit boundaries for each microservice's domain model, responsibilities, and data, preventing overlap and coupling.

---

### Question 6
Which messaging pattern is best suited for guaranteed message delivery when integrating critical CEA control systems?

A) Fire-and-forget UDP broadcasts
B) Message queues with acknowledgments and retry logic
C) Email notifications
D) Shared file system polling

**Correct Answer**: B

**Explanation**: Message queues with acknowledgments ensure reliable delivery, with automatic retries if consumers fail, critical for important control system communications.

---

### Question 7
What is the primary advantage of an API Gateway in a microservices architecture?

A) It eliminates all security concerns
B) It provides a single entry point with cross-cutting concerns like authentication, rate limiting, and routing
C) It replaces all microservices
D) It only works with monolithic applications

**Correct Answer**: B

**Explanation**: API Gateways centralize cross-cutting concerns (auth, logging, rate limiting, routing) providing a unified interface to clients while protecting backend microservices.

---

### Question 8
In event-driven architecture, what is "eventual consistency"?

A) Data is never consistent
B) All systems will reach a consistent state after event propagation, though not immediately
C) Data must be consistent before any operation
D) Consistency is not important

**Correct Answer**: B

**Explanation**: Eventual consistency accepts temporary inconsistencies across distributed systems, knowing they'll synchronize after events propagate—a tradeoff for availability and performance.

---

### Question 9
Which integration pattern is most appropriate for synchronizing product catalog data between an ERP system and e-commerce platform?

A) Real-time event streaming for every keystroke
B) Scheduled batch integration with change data capture
C) Manual copy-paste monthly
D) No synchronization needed

**Correct Answer**: B

**Explanation**: Catalog data changes infrequently and doesn't require sub-second updates, making scheduled batch processing with CDC (Change Data Capture) efficient and cost-effective.

---

### Question 10
What is the purpose of an Enterprise Service Bus (ESB)?

A) Physical transportation within facilities
B) Centralized integration platform providing message routing, transformation, and orchestration
C) Storage for video files
D) Replacement for all application servers

**Correct Answer**: B

**Explanation**: ESBs provide comprehensive integration capabilities including message routing, protocol translation, data transformation, and service orchestration for enterprise-wide integration.

---

## Answer Key

1. B - Exponential complexity growth (N*(N-1)/2)
2. B - Central integration point managing communication
3. B - Event-driven pub-sub messaging
4. B - Resources via URLs with HTTP methods
5. B - Clear service boundaries and responsibilities
6. B - Message queues with acknowledgments
7. B - Single entry point with cross-cutting concerns
8. B - Systems reach consistency after propagation
9. B - Scheduled batch with change data capture
10. B - Message routing, transformation, orchestration

---

## Scoring Guide

- 10/10: Excellent! Integration pattern mastery
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 5: Cloud Architecture for CEA
3. Complete the integration design exercise
