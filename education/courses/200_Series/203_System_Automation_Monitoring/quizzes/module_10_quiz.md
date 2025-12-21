# Module 10 Quiz: Alert Systems & Notifications
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What are the three levels in a properly designed alert hierarchy?**
   - a) Low, Medium, High
   - b) Warning, Alert, Critical
   - c) Yellow, Orange, Red
   - d) Minor, Major, Emergency

**2. For a Level 3 (Critical) alert, which notification methods should be used?**
   - a) Email only
   - b) Push notification only
   - c) SMS/text AND phone call AND loud local alarm
   - d) Log to database only

**3. What is the purpose of time-based alert suppression?**
   - a) To save money on SMS costs
   - b) To filter transient spikes and prevent false alarms from brief excursions
   - c) To delay all alerts until the end of the day
   - d) To test the alert system

**4. What is hysteresis in alert systems?**
   - a) The delay between measurement and alert
   - b) Turning ON alert at one threshold and OFF at a different threshold to prevent flapping
   - c) The time between repeated alerts
   - d) A type of sensor failure

**5. Which SMS implementation method is most reliable for critical alerts?**
   - a) Email-to-SMS gateway (free, carrier-dependent)
   - b) Twilio commercial service (reliable, low cost)
   - c) Posting to social media
   - d) Text file on the server

**6. What is alert escalation?**
   - a) Making alerts louder over time
   - b) Automatically increasing alert severity and notification methods if not acknowledged
   - c) Sending alerts to more people simultaneously
   - d) Converting warnings to critical alerts

**7. What is "alert fatigue"?**
   - a) When the alert system runs out of battery power
   - b) When too many alerts cause operators to ignore them, potentially missing critical issues
   - c) When alerts stop working after extended use
   - d) When the alert system needs recalibration

**8. How can you prevent redundant alerts?**
   - a) Send the same alert every 5 minutes until resolved
   - b) Send alert once when condition first occurs, then only if it worsens or recurs after resolution
   - c) Only send alerts during business hours
   - d) Disable alerts on weekends

**9. What should be included in a monthly alert system test?**
   - a) Only test email notifications
   - b) Simulate sensor failure, trigger threshold alert, verify all notification methods work, check acknowledgment system
   - c) Just review alert logs
   - d) Only test during system maintenance windows

**10. Why have multiple communication methods for critical alerts?**
   - a) To annoy the operator
   - b) To ensure redundancy - if one method fails (e.g., internet down), backup methods still work
   - c) To justify higher automation costs
   - d) It's not necessary - one method is sufficient

---

## Answer Key

1. **b) Warning, Alert, Critical** - Level 1 (Warning) is informational with no immediate danger, Level 2 (Alert) requires attention within hours, and Level 3 (Critical) requires immediate urgent action for life-threatening or crop-damaging conditions.

2. **c) SMS/text AND phone call AND loud local alarm** - Critical alerts require immediate attention and should use multiple simultaneous notification methods to ensure the operator is reached quickly. Email alone is too slow for emergencies.

3. **b) To filter transient spikes and prevent false alarms from brief excursions** - For example, if temperature briefly spikes during feeding, waiting 5 minutes before alerting prevents false alarms. Only alert if the condition persists beyond the suppression period.

4. **b) Turning ON alert at one threshold and OFF at a different threshold to prevent flapping** - Example: Alert ON when pH < 6.0, Alert OFF when pH > 6.3. This prevents the alert from rapidly toggling on/off if pH bounces between 5.9 and 6.1.

5. **b) Twilio commercial service (reliable, low cost)** - Twilio is a professional SMS API service that is extremely reliable and costs approximately $1/month for a phone number plus ~$0.0075 per SMS. Email-to-SMS gateways are free but less reliable.

6. **b) Automatically increasing alert severity and notification methods if not acknowledged** - Example: Time 0 = push notification, Time +5 min = SMS, Time +10 min = phone call, Time +15 min = call secondary contact. This ensures critical issues get attention.

7. **b) When too many alerts cause operators to ignore them, potentially missing critical issues** - Too many false alarms or non-actionable alerts lead to operators becoming desensitized and ignoring all alerts, including critical ones. This is prevented by tuning thresholds carefully.

8. **b) Send alert once when condition first occurs, then only if it worsens or recurs after resolution** - Don't send the same alert repeatedly every few minutes. Send once, send "resolved" notification when fixed, send new alert if condition worsens or recurs later.

9. **b) Simulate sensor failure, trigger threshold alert, verify all notification methods work, check acknowledgment system** - Monthly testing should comprehensively verify the entire alert system including all notification paths, contact information accuracy, and acknowledgment mechanisms.

10. **b) To ensure redundancy - if one method fails (e.g., internet down), backup methods still work** - Critical systems need backup communication: push notification (primary), SMS (backup), email (last resort). If internet fails, GSM module can send SMS independently. Multiple methods ensure alerts get through.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 10 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 10 Quiz*
