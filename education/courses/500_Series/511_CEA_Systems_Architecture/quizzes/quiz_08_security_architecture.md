# Quiz 8: Security Architecture and Compliance

## Course 511: CEA Systems Architecture

**Module**: 8 - Security Architecture and Compliance
**Time Limit**: 15 minutes
**Passing Score**: 70% (7/10 correct)

---

## Questions

### Question 1
What is the fundamental principle of "Zero Trust" security architecture?

A) Trust all internal network traffic by default
B) Never verify, always trust
C) Never trust, always verify - regardless of network location
D) Only verify external traffic

**Correct Answer**: C

**Explanation**: Zero Trust assumes no implicit trust based on network location, requiring continuous verification of all users, devices, and connections whether inside or outside the network perimeter.

---

### Question 2
In the context of OT/IT convergence, what unique security challenge do CEA facilities face?

A) No security challenges exist
B) Operational systems require real-time performance but traditionally lacked security features
C) IT systems are completely isolated from OT
D) Security is only needed for office computers

**Correct Answer**: B

**Explanation**: OT systems (SCADA, PLCs) were designed for reliability and real-time performance in isolated networks, often lacking modern security features, creating vulnerabilities when connected to IT networks.

---

### Question 3
What is the purpose of network segmentation in CEA security architecture?

A) To increase network complexity
B) To isolate different security zones, limiting breach propagation and protecting critical systems
C) To eliminate all firewalls
D) To slow down network performance

**Correct Answer**: B

**Explanation**: Network segmentation divides infrastructure into isolated zones (e.g., control systems, business network, guest WiFi), containing breaches and protecting critical systems through controlled access points.

---

### Question 4
Which authentication method provides the STRONGEST security for privileged system access?

A) Shared passwords written on sticky notes
B) Multi-factor authentication (MFA) with hardware tokens or biometrics
C) Single password for all users
D) No authentication required

**Correct Answer**: B

**Explanation**: MFA requires multiple verification factors (something you know, have, or are), dramatically reducing breach risk compared to passwords alone, especially for privileged accounts.

---

### Question 5
What is "defense in depth" security strategy?

A) Using only one strong security measure
B) Multiple overlapping security layers so failure of one doesn't compromise the entire system
C) Focusing only on perimeter security
D) No security measures needed

**Correct Answer**: B

**Explanation**: Defense in depth employs multiple security layers (firewalls, encryption, access controls, monitoring) so attackers must breach multiple defenses, providing redundancy if one layer fails.

---

### Question 6
In compliance with SOC 2 Type II, what must organizations demonstrate?

A) Financial profitability only
B) Security controls are designed appropriately AND operating effectively over time
C) Marketing effectiveness
D) Employee satisfaction

**Correct Answer**: B

**Explanation**: SOC 2 Type II audits verify that security controls are not only designed correctly (Type I) but have operated effectively over an extended audit period (typically 6-12 months).

---

### Question 7
What is the primary purpose of encryption "at rest" vs "in transit"?

A) They are the same thing
B) At rest protects stored data, in transit protects data moving across networks
C) At rest is for cloud only, in transit for on-premises
D) Neither provides security

**Correct Answer**: B

**Explanation**: Encryption at rest protects stored data (databases, files) from unauthorized access, while encryption in transit (TLS/SSL) protects data moving between systems from interception.

---

### Question 8
What is the principle of "least privilege" in identity and access management?

A) Give everyone full administrative access
B) Grant users minimum access rights necessary to perform their job functions
C) Revoke all access for everyone
D) Only executives get access to systems

**Correct Answer**: B

**Explanation**: Least privilege limits user access to only what's necessary for their role, reducing attack surface and limiting damage if credentials are compromised.

---

### Question 9
Which security practice is MOST important for detecting and responding to security incidents?

A) Ignoring all security alerts
B) Continuous monitoring, logging, and Security Information and Event Management (SIEM)
C) Only checking security once per year
D) Disabling all monitoring to improve performance

**Correct Answer**: B

**Explanation**: Continuous monitoring with centralized logging and SIEM enables rapid detection of anomalies, security events, and breaches, allowing quick response before significant damage occurs.

---

### Question 10
Under GDPR compliance, what must CEA organizations do when collecting personal data from EU citizens?

A) Collect as much data as possible without notification
B) Obtain explicit consent, provide transparency, and enable data deletion rights
C) Sell data to third parties freely
D) Store data indefinitely without protection

**Correct Answer**: B

**Explanation**: GDPR requires informed consent, transparency about data use, right to access/deletion, data protection measures, and breach notification—applicable to any organization processing EU citizen data.

---

## Answer Key

1. C - Never trust, always verify regardless of location
2. B - OT systems lack security features despite connectivity needs
3. B - Isolate security zones and limit breach propagation
4. B - Multi-factor authentication with hardware/biometrics
5. B - Multiple overlapping security layers
6. B - Controls designed and operating effectively over time
7. B - At rest protects stored data, in transit protects network data
8. B - Minimum necessary access for job functions
9. B - Continuous monitoring and SIEM
10. B - Consent, transparency, and deletion rights

---

## Scoring Guide

- 10/10: Excellent! Security architecture mastery
- 8-9/10: Very Good! Strong understanding
- 7/10: Passing. Review missed concepts
- <7/10: Please review the module material and retake

---

## Next Steps

After passing this quiz:
1. Review any questions you missed
2. Proceed to Module 9: Scalability and Performance Architecture
3. Complete the security architecture design exercise
