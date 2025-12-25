# Quiz 5: Cloud Architecture for CEA

## Course 511: CEA Systems Architecture

**Module**: 5 - Cloud Architecture for CEA
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
Which cloud service model provides the MOST control over the underlying infrastructure?

A) Software as a Service (SaaS)
B) Platform as a Service (PaaS)
C) Infrastructure as a Service (IaaS)
D) Function as a Service (FaaS)

**Correct Answer**: C

**Explanation**: IaaS provides virtual machines and infrastructure resources, giving organizations maximum control over operating systems, middleware, and applications while the provider manages physical hardware.

---

### Question 2
What is the primary advantage of a hybrid cloud architecture for CEA operations?

A) It's always cheaper than other options
B) It balances on-premises control for sensitive operations with cloud scalability for analytics
C) It eliminates all security concerns
D) It requires no internet connectivity

**Correct Answer**: B

**Explanation**: Hybrid cloud allows CEA operators to keep time-critical control systems on-premises while leveraging cloud resources for analytics, reporting, and scalable workloads.

---

### Question 3
In cloud-native architecture, what does "immutable infrastructure" mean?

A) Infrastructure that never changes
B) Infrastructure components are replaced rather than modified when updates are needed
C) Infrastructure that costs nothing
D) Infrastructure managed manually

**Correct Answer**: B

**Explanation**: Immutable infrastructure treats servers and components as disposable—when updates are needed, new instances are deployed and old ones destroyed, rather than modifying existing systems.

---

### Question 4
Which cloud design pattern helps ensure application availability across multiple data centers?

A) Multi-region deployment with failover
B) Single server in one location
C) Desktop-only applications
D) Manual backup to USB drives

**Correct Answer**: A

**Explanation**: Multi-region deployment distributes applications across geographically separated data centers, ensuring availability even if an entire region experiences outages.

---

### Question 5
What is "FinOps" in the context of cloud architecture?

A) Financial services APIs
B) Cloud financial management practices optimizing cost, usage, and business value
C) Automated trading systems
D) Banking software

**Correct Answer**: B

**Explanation**: FinOps (Financial Operations) is a practice combining financial accountability, operational optimization, and business value maximization for cloud spending and resource utilization.

---

### Question 6
In a multi-cloud strategy, what is the primary benefit of avoiding vendor lock-in?

A) Avoiding all cloud services
B) Flexibility to choose best services and negotiate better terms with competitive options
C) Eliminating cloud costs entirely
D) Using only open-source software

**Correct Answer**: B

**Explanation**: Multi-cloud strategies provide leverage in negotiations, access to best-of-breed services across providers, and migration options if one vendor becomes unsuitable.

---

### Question 7
Which cloud architecture pattern is best for handling unpredictable traffic spikes in CEA customer portals?

A) Fixed capacity that never changes
B) Auto-scaling based on demand metrics
C) Manual server provisioning when needed
D) Turning off the application during high traffic

**Correct Answer**: B

**Explanation**: Auto-scaling automatically adjusts compute resources based on demand metrics (CPU, requests/sec), ensuring performance during spikes while minimizing costs during low traffic.

---

### Question 8
What is a "cloud-native" application?

A) Applications that only run in the cloud and never on-premises
B) Applications designed with microservices, containers, and cloud infrastructure in mind
C) Applications written in a specific programming language
D) Applications that are free to use

**Correct Answer**: B

**Explanation**: Cloud-native applications are architected to leverage cloud capabilities—containerized, dynamically orchestrated, microservices-based, and designed for elasticity and resilience.

---

### Question 9
Which service model would a CEA operator use if they want managed Kubernetes without managing the control plane?

A) IaaS - managing everything themselves
B) PaaS - managed Kubernetes service (e.g., EKS, AKS, GKE)
C) SaaS - complete application with no customization
D) On-premises hardware only

**Correct Answer**: B

**Explanation**: Managed Kubernetes services (PaaS) provide container orchestration capabilities without requiring management of the Kubernetes control plane infrastructure.

---

### Question 10
What is the "shared responsibility model" in cloud security?

A) All security is the cloud provider's responsibility
B) Security responsibilities are divided between cloud provider (infrastructure) and customer (data/applications)
C) All security is the customer's responsibility
D) Security is not important in cloud environments

**Correct Answer**: B

**Explanation**: The shared responsibility model clarifies that providers secure infrastructure (physical, network, host) while customers secure their data, applications, access controls, and configurations.

---

## Answer Key

1. C - Infrastructure as a Service (IaaS)
2. B - Balance on-premises control with cloud scalability
3. B - Components replaced rather than modified
4. A - Multi-region deployment with failover
5. B - Cloud financial management practices
6. B - Flexibility and competitive leverage
7. B - Auto-scaling based on demand
8. B - Microservices, containers, cloud-designed
9. B - PaaS managed Kubernetes service
10. B - Divided responsibilities between provider and customer

---

## Scoring Guide

- 10/10: Excellent! Cloud architecture mastery
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 6: Edge Computing and Local Processing
3. Complete the cloud architecture design exercise
