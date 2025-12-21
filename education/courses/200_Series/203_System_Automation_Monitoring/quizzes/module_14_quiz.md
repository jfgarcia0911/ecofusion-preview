# Module 14 Quiz: Capstone Project Planning
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What should be identified FIRST when designing an automation system?**
   - a) The budget available
   - b) Critical parameters for crop/livestock survival and production quality
   - c) The specific brands of equipment to purchase
   - d) The color of the controller enclosure

**2. What is the difference between critical and important parameters?**
   - a) Critical parameters cost more to monitor
   - b) Critical parameters must be monitored and controlled (life-threatening); important parameters should be monitored (affect quality/yield)
   - c) There is no difference
   - d) Important parameters are measured more frequently

**3. When selecting between DIY (Arduino/RPi) and commercial controllers, what factor should guide the decision?**
   - a) Always choose the cheaper option
   - b) Risk level, technical skill, budget, and required reliability/support
   - c) Always choose commercial for any application
   - d) Brand reputation only

**4. What should be included in a component selection justification?**
   - a) Just the price
   - b) Why this specific component was chosen, including accuracy needs, interface compatibility, cost, maintenance requirements
   - c) Only the manufacturer name
   - d) The color and size

**5. What is the recommended system architecture for most CEA operations?**
   - a) 100% cloud-based with no local control
   - b) Completely local with no internet connectivity
   - c) Hybrid: local control for reliability + cloud sync for monitoring and alerts
   - d) Manual control with no automation

**6. In an ROI calculation, what should be included in annual benefits?**
   - a) Only labor savings
   - b) Labor savings, loss prevention (reduced risk), and yield improvements
   - c) Just the equipment resale value
   - d) Only energy savings

**7. What is a "payback period" and what makes it good?**
   - a) The warranty period; longer is better
   - b) Time until cumulative savings equal initial investment; shorter is better (excellent: <6 months)
   - c) The time to pay off a loan; doesn't matter
   - d) Installation time; faster is always better

**8. What is the purpose of phased implementation?**
   - a) To spread out costs over multiple years
   - b) To allow gradual deployment, testing, and optimization while minimizing risk
   - c) To keep installers employed longer
   - d) It serves no purpose; install everything at once

**9. What should happen during the "bench testing" phase of implementation?**
   - a) Install everything in final location immediately
   - b) Test each sensor and controller individually in a controlled setting before field installation
   - c) Order components but don't test them
   - d) Skip testing and go directly to installation

**10. What is the most important deliverable of a capstone project?**
   - a) The fanciest presentation slides
   - b) The longest written report
   - c) A complete, implementable system design with justified component selections, realistic budget, and clear ROI
   - d) The most expensive proposed system

---

## Answer Key

1. **b) Critical parameters for crop/livestock survival and production quality** - Requirements analysis starts by identifying what MUST be controlled for survival (fish DO, water temp) versus what SHOULD be optimized for quality (DLI, VPD). This drives all subsequent design decisions.

2. **b) Critical parameters must be monitored and controlled (life-threatening); important parameters should be monitored (affect quality/yield)** - Critical parameters (fish tank DO, temperature) require monitoring, control, AND redundancy because failure causes catastrophic loss. Important parameters (DLI, VPD) affect yield but aren't immediately life-threatening.

3. **b) Risk level, technical skill, budget, and required reliability/support** - DIY is great for learning and lower-risk applications with technical users. Commercial is better for critical systems, high-value operations, or when professional support is needed. Budget and skills also factor in.

4. **b) Why this specific component was chosen, including accuracy needs, interface compatibility, cost, maintenance requirements** - Good justifications explain the decision criteria: "DS18B20 chosen because ±0.5°C accuracy is sufficient for fish, 1-Wire interface works with Arduino, costs only $8, and requires no maintenance."

5. **c) Hybrid: local control for reliability + cloud sync for monitoring and alerts** - Hybrid systems provide the best of both worlds: local control is fast and reliable (works even if internet fails), while cloud sync enables remote monitoring, mobile alerts, and data backup.

6. **b) Labor savings, loss prevention (reduced risk), and yield improvements** - Complete ROI includes: labor savings (reduced monitoring time), loss prevention (probability of loss × value at risk), and yield improvements (better control = better growth). Don't forget to subtract annual recurring costs.

7. **b) Time until cumulative savings equal initial investment; shorter is better (excellent: <6 months)** - Payback period = Initial Cost ÷ Annual Net Benefit. Excellent: <6 months, Good: 6-12 months, Fair: 12-24 months. It measures how quickly the investment pays for itself.

8. **b) To allow gradual deployment, testing, and optimization while minimizing risk** - Phased implementation (planning → bench testing → installation → integration → go-live → optimization) reduces risk by catching problems early, allows learning and adjustment, and prevents catastrophic failures from deploying untested systems.

9. **b) Test each sensor and controller individually in a controlled setting before field installation** - Bench testing verifies all components work correctly before installation. Test sensors on breadboard, verify controller reads them, confirm communication and logging. Catch problems on the bench, not in the field.

10. **c) A complete, implementable system design with justified component selections, realistic budget, and clear ROI** - The capstone should be a blueprint you could actually implement: detailed component selections with justifications, accurate budget, realistic ROI calculation, and complete implementation plan. Treat it as a real proposal.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 14 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 14 Quiz*
