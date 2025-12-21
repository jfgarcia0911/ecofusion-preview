# Module 10: Alert Systems & Notifications
**Course 203: System Automation & Monitoring**
Duration: 1 hour

---

## Learning Objectives

By the end of this module, you will be able to:
1. Design effective alert threshold strategies
2. Implement SMS/text and email notifications
3. Configure push notifications for mobile apps
4. Create escalation procedures for critical alarms
5. Prevent alert fatigue through intelligent alerting
6. Test and maintain notification systems

---

## 10.1 Alert Threshold Design

### Defining Alert Levels

**Three-Tier Alert System:**

```
╔═══════════════════════════════════════════════════════════════╗
║                  ALERT LEVEL HIERARCHY                        ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   LEVEL 1: WARNING (Informational)                            ║
║   ────────────────────────────────────────────────────────    ║
║   • Condition approaching limits                              ║
║   • No immediate danger                                       ║
║   • Log event, no notification                                ║
║   Example: pH 6.3 (target 6.5, acceptable range 6.0-7.0)      ║
║                                                               ║
║   LEVEL 2: ALERT (Attention Required)                         ║
║   ────────────────────────────────────────────────────────    ║
║   • Outside acceptable range                                  ║
║   • Requires attention within hours                           ║
║   • Send email or app notification                            ║
║   Example: pH 5.8 (below acceptable range)                    ║
║                                                               ║
║   LEVEL 3: CRITICAL (Urgent Action Required)                  ║
║   ────────────────────────────────────────────────────────    ║
║   • Life-threatening or crop-damaging condition               ║
║   • Requires immediate response                               ║
║   • SMS/text AND phone call AND loud local alarm              ║
║   Example: pH 5.0 (dangerous for plants) or DO <2 mg/L (fish) ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Example Threshold Tables

**Water Temperature (Aquaponics Tilapia):**

| Condition | Temperature | Alert Level | Action |
|-----------|-------------|-------------|--------|
| Optimal | 75-82°F | None | Normal operation |
| Warning | 73-75°F or 82-84°F | Level 1 | Log event |
| Alert | 70-73°F or 84-87°F | Level 2 | Email notification |
| Critical Low | <70°F | Level 3 | SMS + call + activate backup heater |
| Critical High | >87°F | Level 3 | SMS + call + emergency cooling |

**Dissolved Oxygen (Fish Tank):**

| Condition | DO Level | Alert Level | Action |
|-----------|----------|-------------|--------|
| Optimal | >6 mg/L | None | Normal |
| Warning | 5-6 mg/L | Level 1 | Log, monitor closely |
| Alert | 4-5 mg/L | Level 2 | Email + increase aeration |
| Critical | <4 mg/L | Level 3 | SMS + call + emergency oxygen |

### Time-Based Alert Suppression

**Prevent Nuisance Alarms:**

```
Rule: Don't alert on brief excursions

Example: Temperature spike during feeding

Implementation:
  IF Temp > Alert_Threshold THEN
    Start 5-minute timer
    IF STILL over threshold after 5 minutes THEN
      Send alert
    ELSE
      Cancel timer (false alarm)
    END IF
  END IF

Benefit: Filters transient spikes, reduces false alarms
```

**Hysteresis for Alerts:**

```
Turn ON alert at one threshold
Turn OFF alert at different threshold (prevents flapping)

Example:
  Alert ON: pH < 6.0
  Alert OFF: pH > 6.3

If pH bounces between 5.9 and 6.1:
  Without hysteresis: Alert ON/OFF/ON/OFF (annoying!)
  With hysteresis: Alert ON, stays ON until pH > 6.3 (stable)
```

---

## 10.2 SMS/Text Notifications

### Implementation Methods

#### Option 1: Twilio (Commercial Service)

**How it works:**
- Cloud-based SMS API
- Send text messages from your controller via internet
- Reliable, professional

**Setup:**
```python
# Python example (Raspberry Pi)
from twilio.rest import Client

account_sid = 'your_account_sid'
auth_token = 'your_auth_token'
client = Client(account_sid, auth_token)

def send_alert(message):
    client.messages.create(
        body=message,
        from_='+1234567890',  # Your Twilio number
        to='+1987654321'      # Your cell phone
    )

# Usage:
if pH < 5.8:
    send_alert("ALERT: pH critically low at 5.7. Check nutrient tank immediately.")
```

**Cost:**
- ~$1/month for phone number
- ~$0.0075 per SMS sent
- Very affordable for occasional alerts

**Pros:**
- Extremely reliable
- Works from anywhere with internet
- Supports international numbers

**Cons:**
- Requires internet connection
- Recurring cost (minimal)

#### Option 2: Email-to-SMS Gateway

**How it works:**
- Send email to special address
- Carrier converts to SMS
- Free but less reliable

**Carrier Gateways:**
```
AT&T: 5551234567@txt.att.net
Verizon: 5551234567@vtext.com
T-Mobile: 5551234567@tmomail.net
Sprint: 5551234567@messaging.springtpcs.com
```

**Python Example:**
```python
import smtplib

def send_sms_via_email(message):
    from_email = "your_email@gmail.com"
    password = "your_app_password"
    to_sms = "5551234567@vtext.com"  # Your number + carrier gateway

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(from_email, password)
    server.sendmail(from_email, to_sms, message)
    server.quit()
```

**Pros:**
- Free
- No third-party service

**Cons:**
- Less reliable (emails can be delayed or blocked)
- Character limits
- Carrier-dependent

#### Option 3: GSM/Cellular Module

**Hardware Solution:**
- SIM800/SIM900 GSM module
- Insert SIM card
- Send SMS directly (no internet needed)

**Cost:**
- Module: $20-40
- SIM card: ~$10-20/month (prepaid plan)

**Pros:**
- Works without internet
- Independent backup communication

**Cons:**
- Requires cellular coverage
- Hardware complexity
- Ongoing SIM cost

---

## 10.3 Email Alerts

### Configuration

**Python Example (SMTP):**

```python
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email_alert(subject, body):
    sender = "greenhouse@yourfarm.com"
    recipient = "farmer@yourfarm.com"
    password = "your_email_password"

    msg = MIMEMultipart()
    msg['From'] = sender
    msg['To'] = recipient
    msg['Subject'] = subject

    msg.attach(MIMEText(body, 'plain'))

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(sender, password)
    server.send_message(msg)
    server.quit()

# Usage:
if temperature > 85:
    send_email_alert(
        subject="Temperature Alert: Greenhouse Overheating",
        body=f"Temperature has reached {temperature}°F. Ventilation may be insufficient."
    )
```

### HTML Emails with Data Tables

**Enhanced alerts with formatting:**

```python
html_body = f"""
<html>
  <body>
    <h2 style="color: red;">CRITICAL ALERT</h2>
    <p><strong>Location:</strong> Fish Tank #1</p>
    <p><strong>Parameter:</strong> Dissolved Oxygen</p>
    <p><strong>Current Value:</strong> {do_level} mg/L</p>
    <p><strong>Threshold:</strong> 4.0 mg/L</p>
    <p><strong>Time:</strong> {timestamp}</p>

    <h3>Recent History:</h3>
    <table border="1">
      <tr><th>Time</th><th>DO (mg/L)</th></tr>
      <tr><td>14:00</td><td>6.2</td></tr>
      <tr><td>14:15</td><td>5.1</td></tr>
      <tr><td>14:30</td><td>3.8</td></tr>
    </table>

    <p style="color: blue;"><strong>Action Taken:</strong> Emergency aeration activated.</p>
  </body>
</html>
"""

msg.attach(MIMEText(html_body, 'html'))
```

**Benefits:**
- Clear, formatted information
- Easy to read on mobile
- Can include graphs (embedded images)

---

## 10.4 Push Notifications

### Mobile App Notifications

**Options:**

#### 1. Blynk (IoT Platform)

**Features:**
- Drag-and-drop mobile app builder
- Push notifications built-in
- Supports Arduino, Raspberry Pi

**Setup:**
```cpp
// Arduino example
#include <BlynkSimpleEsp8266.h>

char auth[] = "YourAuthToken";

void setup() {
  Blynk.begin(auth, ssid, pass);
}

void loop() {
  Blynk.run();

  if (temperature > 85) {
    Blynk.notify("Alert: Temperature high!");
  }
}
```

**Cost:**
- Free for basic use
- $5-15/month for more features

#### 2. Pushover

**Dedicated push notification service:**
```python
import requests

def send_pushover(message):
    requests.post("https://api.pushover.net/1/messages.json", data={
        "token": "YOUR_APP_TOKEN",
        "user": "YOUR_USER_KEY",
        "message": message,
        "priority": 1  # High priority
    })

send_pushover("Critical: Fish tank DO level low!")
```

**Cost:**
- One-time $5 purchase per platform
- Unlimited notifications

**Pros:**
- Reliable
- Customizable (sounds, priority, retry)
- Works on iOS and Android

#### 3. Custom App (Advanced)

**Build your own app:**
- React Native, Flutter, or native iOS/Android
- Integrate with Firebase Cloud Messaging (FCM)
- Full control over features

**Effort:**
- High (requires development skills)
- Best for commercial operations with budget

---

## 10.5 Escalation Procedures

### Multi-Level Escalation

**Example: Fish Tank DO Critical**

```
╔═══════════════════════════════════════════════════════════════╗
║                  ALERT ESCALATION SEQUENCE                    ║
╠═══════════════════════════════════════════════════════════════╣
║                                                               ║
║   TIME 0: DO drops below 4.0 mg/L                             ║
║   ────────────────────────────────────────────────────────    ║
║   • Activate emergency aeration                               ║
║   • Log event                                                 ║
║   • Send push notification to primary contact                 ║
║                                                               ║
║   TIME +5 minutes: Still below threshold                      ║
║   ────────────────────────────────────────────────────────    ║
║   • Send SMS to primary contact                               ║
║   • Send email with detailed data                             ║
║                                                               ║
║   TIME +10 minutes: Still below threshold                     ║
║   ────────────────────────────────────────────────────────    ║
║   • Call primary contact (automated voice call)               ║
║   • Require acknowledgment                                    ║
║                                                               ║
║   TIME +15 minutes: Not acknowledged                          ║
║   ────────────────────────────────────────────────────────    ║
║   • Send SMS to secondary contact                             ║
║   • Call secondary contact                                    ║
║   • Sound loud local alarm                                    ║
║                                                               ║
║   TIME +20 minutes: Still not resolved                        ║
║   ────────────────────────────────────────────────────────    ║
║   • Alert entire emergency contact list                       ║
║   • Activate backup systems (if available)                    ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

### Acknowledgment Systems

**Why Acknowledge Alerts:**
- Confirms operator received alert
- Stops escalation if being handled
- Logs response time

**Implementation Methods:**

**1. Reply to SMS:**
```
System sends: "ALERT: DO low. Reply 'ACK' to acknowledge."
Operator texts back: "ACK"
System: "Alert acknowledged by John at 14:35. Thank you."
```

**2. Web Dashboard Button:**
```
Alert displays on dashboard
Operator clicks "Acknowledge" button
Enters brief note: "On site, checking aerator"
Stops further escalation
```

**3. Phone Keypress:**
```
Automated call: "This is an alert for low dissolved oxygen. Press 1 to acknowledge."
Operator presses 1
System logs acknowledgment
```

---

## 10.6 Preventing Alert Fatigue

### What is Alert Fatigue?

**Problem:**
Too many alerts → Operators ignore them → Critical alerts missed

**Causes:**
- Thresholds set too sensitive
- Alerts for non-critical conditions
- Repeated alerts for same issue
- No prioritization (everything seems critical)

### Solutions

#### 1. Tune Thresholds Carefully

**Start conservative, tighten over time:**

```
Week 1: Broad thresholds (learn normal behavior)
  pH Alert: < 5.5 or > 7.5

Week 2-4: Observe data, adjust
  Rarely goes below 6.0 or above 7.0
  Tighten: pH Alert: < 5.8 or > 7.2

Month 2: Fine-tune based on crop response
  Final: pH Alert: < 6.0 or > 7.0
```

**Rule:** Only alert if operator should take action.

#### 2. Suppress Redundant Alerts

**Don't repeat the same alert every 5 minutes:**

```
Send alert ONCE when condition first occurs
Don't send again unless:
  • Condition resolves then recurs, OR
  • Escalation timer expires (see escalation procedures), OR
  • Condition worsens significantly

Example:
  pH drops to 5.9 → Send alert
  pH still 5.9 five minutes later → DON'T send again
  pH drops to 5.5 → Send new alert (worsened)
  pH returns to 6.2 → Send "resolved" notification
  pH drops to 5.9 again → Send new alert (recurrence)
```

#### 3. Use "Quiet Hours" (if appropriate)

**For non-critical alerts:**

```
Suppress Level 1 (Warning) alerts during night:
  10:00 PM to 6:00 AM → No warnings sent

Level 2 (Alert) and Level 3 (Critical):
  Always sent regardless of time

Rationale: Don't wake operator for minor issues
  They can review warning logs in morning
```

**Caution:** Only use for truly non-urgent alerts!

#### 4. Summary Reports Instead of Individual Alerts

**For frequent minor events:**

```
Instead of: 50 separate "Temperature warning" alerts per day

Send: Daily summary email at 8:00 AM
  "Temperature exceeded 80°F 47 times yesterday
   Average duration: 12 minutes
   Max temperature: 82.3°F at 2:15 PM"

Operator can review trends, adjust system
Not overwhelmed by individual alerts
```

#### 5. Require Periodic Check-In

**"Dead man's switch" for critical systems:**

```
Operator must check in daily (view dashboard, press button)

If no check-in within 24 hours:
  Send alert: "No system check-in. Is everything OK?"

Ensures:
  • Operator monitoring system regularly
  • Detects if operator unable to respond
```

---

## 10.7 Testing and Maintenance

### Regular Testing

**Monthly Test Schedule:**

```
Test 1: Simulate sensor failure
  - Disconnect temperature sensor
  - Verify "sensor error" alert sent within expected time

Test 2: Trigger threshold alert
  - Manually adjust setpoint to force alert condition
  - Verify SMS, email, push notification all work

Test 3: Verify contact information
  - Confirm phone numbers, email addresses current
  - Test secondary and emergency contacts

Test 4: Check acknowledgment system
  - Send test alert
  - Practice acknowledging (SMS reply, dashboard, etc.)
  - Time how long it takes

Test 5: Verify automated voice calls (if used)
  - Place test call
  - Confirm audio quality, message clarity
```

**Document test results:**
- Date, time, tester name
- What was tested
- Pass/fail
- Issues found and corrected

### Backup Communication

**Don't rely on single method:**

| Scenario | Primary | Backup | Last Resort |
|----------|---------|--------|-------------|
| **Normal** | Push notification | SMS | Email |
| **Internet down** | Cellular SMS (GSM module) | Local alarm (siren) | Physical inspection |
| **Power outage** | Battery-powered cellular SMS | Neighbor call (prearranged) | Generator auto-start alarm |

**Maintain:**
- Updated contact list (multiple people)
- Multiple communication methods
- Local alarms (don't require external communication)

### Alert Log Review

**Weekly review:**
```
Questions to ask:
1. How many alerts were triggered?
2. Were they all actionable (required operator response)?
3. Were any false alarms (threshold too sensitive)?
4. Were any alerts missed or delayed?
5. Were response times acceptable?
6. Any trends indicating systemic issues?

Use data to continuously improve alert thresholds and strategies.
```

---

## Summary

Effective alert systems ensure timely responses to problems without overwhelming operators:

**Key Takeaways:**

1. **Tiered Alerts:** Warning, Alert, Critical with appropriate actions
2. **Thoughtful Thresholds:** Only alert if action needed
3. **Multiple Methods:** SMS, email, push, calls for redundancy
4. **Escalation:** Automatically escalate if not acknowledged
5. **Prevent Fatigue:** Suppress redundant alerts, tune thresholds carefully
6. **Regular Testing:** Monthly tests ensure system works when needed
7. **Acknowledge System:** Confirms receipt, stops unnecessary escalation
8. **Log and Review:** Continuously improve based on alert history

**Alert Design Checklist:**
- [ ] Defined three alert levels (warning, alert, critical)
- [ ] Thresholds based on crop/livestock requirements
- [ ] Time delays to filter transients
- [ ] Hysteresis to prevent flapping
- [ ] Multiple notification methods
- [ ] Escalation procedures documented
- [ ] Acknowledgment system implemented
- [ ] Regular testing schedule
- [ ] Backup contacts and methods
- [ ] Alert logs reviewed monthly

---

## Review Questions

1. What are the three levels of alerts and how do they differ?
2. Why use time-based alert suppression?
3. What is alert hysteresis and why is it important?
4. What are the pros and cons of SMS via Twilio vs. email-to-SMS?
5. What is an escalation procedure and when should it be used?
6. What is alert fatigue and how can it be prevented?
7. What should be included in a monthly alert system test?
8. Why have multiple communication methods for alerts?

---

## Practical Exercise

**Exercise: Design an Alert System**

Design a complete alert system for a 1,000 gallon aquaponics system:

**Critical Parameters:**
- Water temperature (target 76°F)
- Dissolved oxygen (target >6 mg/L)
- pH (target 7.0)
- Water level
- Power status

**Your tasks:**

1. **Define alert thresholds:**
   - Create tables with warning, alert, and critical levels for each parameter
   - Justify thresholds based on fish/plant requirements

2. **Select notification methods:**
   - Choose primary and backup methods
   - Specify technologies (Twilio, email, etc.)
   - Estimate costs

3. **Design escalation procedures:**
   - Document step-by-step escalation for critical DO alarm
   - Include timing, contacts, automated actions

4. **Implement alert suppression:**
   - Define time delays to filter transients
   - Identify which alerts should have "quiet hours"

5. **Create testing protocol:**
   - Monthly test checklist
   - Documentation template

**Deliverable:** Complete alert system specification with thresholds, notification methods, escalation procedures, and testing protocol.

---

*End of Module 10*
