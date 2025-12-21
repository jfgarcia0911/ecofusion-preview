# Module 10: Real-Time Decision Support

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Design automated alert systems
2. Implement rule-based control logic
3. Build decision trees for operations
4. Balance automation with human oversight
5. Create effective notification strategies

---

## 1. Alert System Design

### Multi-Level Alert Framework

```
┌──────────────────────────────────────────────────────────┐
│           ALERT SEVERITY LEVELS                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  CRITICAL (Immediate action required)                    │
│  • DO < 4 mg/L (fish mortality risk)                     │
│  • Temperature > 32°C or < 10°C                          │
│  • Power failure                                         │
│  • Pump failure                                          │
│  Action: SMS + Phone call + Email                        │
│  Response: < 15 minutes                                  │
│                                                          │
│  WARNING (Prompt attention needed)                       │
│  • DO < 5.5 mg/L                                         │
│  • pH outside 6.0-7.5                                    │
│  • Ammonia > 0.5 mg/L                                    │
│  • Equipment runtime exceeding normal                    │
│  Action: Email + Dashboard alert                         │
│  Response: < 2 hours                                     │
│                                                          │
│  INFO (Monitor situation)                                │
│  • Parameter approaching thresholds                      │
│  • Trending away from optimal                            │
│  • Maintenance due soon                                  │
│  Action: Dashboard notification                          │
│  Response: Next business day                             │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### Alert Implementation

```python
import smtplib
from email.mime.text import MIMEText
from datetime import datetime, timedelta

class AlertSystem:
    def __init__(self):
        self.alert_history = []
        self.cooldown_period = timedelta(hours=1)  # Prevent alert spam

    def check_parameters(self, current_data):
        """Check all parameters and generate alerts."""

        alerts = []

        # Critical: Dissolved Oxygen
        if current_data['do'] < 4.0:
            alerts.append({
                'severity': 'CRITICAL',
                'parameter': 'Dissolved Oxygen',
                'value': current_data['do'],
                'threshold': 4.0,
                'message': f"CRITICAL: DO at {current_data['do']:.1f} mg/L. Fish mortality risk!",
                'actions': ['Increase aeration', 'Check aerator status', 'Reduce feeding']
            })
        elif current_data['do'] < 5.5:
            alerts.append({
                'severity': 'WARNING',
                'parameter': 'Dissolved Oxygen',
                'value': current_data['do'],
                'threshold': 5.5,
                'message': f"WARNING: DO at {current_data['do']:.1f} mg/L. Below optimal.",
                'actions': ['Monitor closely', 'Consider increasing aeration']
            })

        # pH check
        if current_data['ph'] < 6.0 or current_data['ph'] > 7.5:
            alerts.append({
                'severity': 'WARNING',
                'parameter': 'pH',
                'value': current_data['ph'],
                'threshold': '6.0-7.5',
                'message': f"WARNING: pH at {current_data['ph']:.2f}. Outside optimal range.",
                'actions': ['Test water', 'Adjust if needed', 'Check biofilter']
            })

        # Temperature check
        if current_data['temperature'] > 32 or current_data['temperature'] < 10:
            alerts.append({
                'severity': 'CRITICAL',
                'parameter': 'Temperature',
                'value': current_data['temperature'],
                'threshold': '10-32°C',
                'message': f"CRITICAL: Temperature at {current_data['temperature']:.1f}°C. Extreme!",
                'actions': ['Check heater/chiller', 'Emergency cooling/heating']
            })

        return alerts

    def send_alert(self, alert):
        """Send alert based on severity."""

        # Check cooldown (prevent spam)
        if self._in_cooldown(alert):
            return

        if alert['severity'] == 'CRITICAL':
            self._send_sms(alert)
            self._send_email(alert)
            self._log_alert(alert)
        elif alert['severity'] == 'WARNING':
            self._send_email(alert)
            self._log_alert(alert)
        else:  # INFO
            self._log_alert(alert)

        self.alert_history.append({
            'timestamp': datetime.now(),
            'alert': alert
        })

    def _in_cooldown(self, alert):
        """Check if similar alert was sent recently."""
        recent_alerts = [a for a in self.alert_history
                        if datetime.now() - a['timestamp'] < self.cooldown_period]

        for recent in recent_alerts:
            if (recent['alert']['parameter'] == alert['parameter'] and
                recent['alert']['severity'] == alert['severity']):
                return True
        return False

    def _send_email(self, alert):
        """Send email alert."""
        msg = MIMEText(f"""
Alert: {alert['severity']}
Parameter: {alert['parameter']}
Current Value: {alert['value']}
Threshold: {alert['threshold']}

Message: {alert['message']}

Recommended Actions:
{chr(10).join(['• ' + action for action in alert['actions']])}

Timestamp: {datetime.now()}
        """)

        msg['Subject'] = f"[{alert['severity']}] {alert['parameter']} Alert"
        msg['From'] = 'alerts@farm.com'
        msg['To'] = 'operator@farm.com'

        # Send email (configure SMTP server)
        # smtp = smtplib.SMTP('smtp.gmail.com', 587)
        # smtp.send_message(msg)

    def _send_sms(self, alert):
        """Send SMS for critical alerts."""
        # Integrate with Twilio, AWS SNS, or similar service
        pass

    def _log_alert(self, alert):
        """Log alert to database."""
        # Insert into alerts table
        pass

# Usage
alert_system = AlertSystem()

current_reading = {
    'do': 4.8,
    'ph': 6.5,
    'temperature': 24.5,
    'ec': 1200
}

alerts = alert_system.check_parameters(current_reading)

for alert in alerts:
    alert_system.send_alert(alert)
```

---

## 2. Automated Control Logic

### PID Controller for Temperature

```python
class PIDController:
    """PID controller for maintaining setpoint."""

    def __init__(self, kp, ki, kd, setpoint):
        self.kp = kp  # Proportional gain
        self.ki = ki  # Integral gain
        self.kd = kd  # Derivative gain
        self.setpoint = setpoint

        self.last_error = 0
        self.integral = 0

    def update(self, current_value, dt):
        """Calculate control output."""

        # Error
        error = self.setpoint - current_value

        # Proportional term
        p_term = self.kp * error

        # Integral term
        self.integral += error * dt
        i_term = self.ki * self.integral

        # Derivative term
        derivative = (error - self.last_error) / dt
        d_term = self.kd * derivative

        # Total output
        output = p_term + i_term + d_term

        # Save for next iteration
        self.last_error = error

        return output

# Example: Control water heater
temp_controller = PIDController(kp=5.0, ki=0.1, kd=1.0, setpoint=24.0)

# In control loop
current_temp = 23.5
dt = 1.0  # 1 second

heater_power = temp_controller.update(current_temp, dt)

# Clamp to 0-100%
heater_power = max(0, min(100, heater_power))

print(f"Set heater to {heater_power:.1f}% power")
```

### Rule-Based Climate Control

```python
class ClimateController:
    """Rule-based control for greenhouse climate."""

    def __init__(self):
        self.temp_setpoint = 24.0
        self.humidity_setpoint = 65.0
        self.vpd_target = 1.0

    def get_actions(self, current_conditions):
        """Determine control actions based on current state."""

        actions = []
        temp = current_conditions['temperature']
        humidity = current_conditions['humidity']
        vpd = current_conditions['vpd']

        # Temperature control
        if temp > self.temp_setpoint + 2:
            actions.append({'device': 'cooling', 'state': 'on', 'level': 100})
            actions.append({'device': 'heating', 'state': 'off'})
            actions.append({'device': 'ventilation', 'state': 'on', 'level': 80})
        elif temp > self.temp_setpoint + 1:
            actions.append({'device': 'cooling', 'state': 'on', 'level': 50})
            actions.append({'device': 'ventilation', 'state': 'on', 'level': 60})
        elif temp < self.temp_setpoint - 2:
            actions.append({'device': 'heating', 'state': 'on', 'level': 100})
            actions.append({'device': 'cooling', 'state': 'off'})
            actions.append({'device': 'ventilation', 'state': 'on', 'level': 20})
        elif temp < self.temp_setpoint - 1:
            actions.append({'device': 'heating', 'state': 'on', 'level': 50})
        else:
            # In deadband - maintain current state
            pass

        # Humidity control
        if humidity > self.humidity_setpoint + 10:
            actions.append({'device': 'dehumidifier', 'state': 'on', 'level': 80})
            actions.append({'device': 'ventilation', 'state': 'on', 'level': 60})
        elif humidity < self.humidity_setpoint - 10:
            actions.append({'device': 'humidifier', 'state': 'on', 'level': 80})
            actions.append({'device': 'misting', 'state': 'on'})

        # VPD-based override
        if vpd > 1.6:  # Too dry
            actions.append({'device': 'misting', 'state': 'on'})
        elif vpd < 0.4:  # Too humid
            actions.append({'device': 'dehumidifier', 'state': 'on', 'level': 100})

        return actions

# Usage
controller = ClimateController()

conditions = {
    'temperature': 26.5,
    'humidity': 75,
    'vpd': 0.8
}

actions = controller.get_actions(conditions)

for action in actions:
    print(f"{action['device']}: {action['state']}", end='')
    if 'level' in action:
        print(f" at {action['level']}%")
    else:
        print()
```

---

## 3. Decision Trees for Operations

### Fertilization Decision Tree

```python
from sklearn.tree import DecisionTreeClassifier, export_text

# Example: Decide fertilization action based on conditions
# Features: pH, EC, Nitrate, Phosphate, Plant_Stage
# Target: Fertilization_Action (0=None, 1=Half, 2=Full, 3=Supplement)

# Training data (example)
X = [
    [6.5, 1200, 150, 40, 1],  # Seedling
    [6.8, 1500, 180, 45, 2],  # Vegetative
    [6.7, 1800, 200, 50, 3],  # Mature
    # ... more examples
]

y = [1, 2, 2]  # Actions

# Train decision tree
tree = DecisionTreeClassifier(max_depth=4)
tree.fit(X, y)

# Export readable rules
feature_names = ['pH', 'EC', 'Nitrate', 'Phosphate', 'Plant_Stage']
rules = export_text(tree, feature_names=feature_names)
print(rules)

# Predict action for new conditions
new_conditions = [[6.6, 1400, 160, 42, 2]]
action = tree.predict(new_conditions)[0]

actions_map = {
    0: "No fertilization needed",
    1: "Apply half-strength solution",
    2: "Apply full-strength solution",
    3: "Supplement with micronutrients"
}

print(f"Recommended action: {actions_map[action]}")
```

---

## 4. Human-in-the-Loop Systems

### Approval Workflow for Critical Actions

```python
class DecisionSupport:
    """Decision support system with human oversight."""

    def __init__(self):
        self.pending_decisions = []
        self.auto_approved_actions = ['adjust_light', 'adjust_fan']
        self.requires_approval_actions = ['add_chemicals', 'harvest', 'stock_fish']

    def recommend_action(self, situation, proposed_action):
        """Recommend action and handle approval if needed."""

        confidence = self._calculate_confidence(situation)

        if proposed_action in self.auto_approved_actions:
            # Auto-execute low-risk actions
            self._execute_action(proposed_action)
            return "Executed automatically"

        elif proposed_action in self.requires_approval_actions:
            # Request human approval for high-risk actions
            decision_id = self._request_approval(situation, proposed_action, confidence)
            return f"Approval requested (ID: {decision_id})"

        else:
            # Medium confidence - provide recommendation
            if confidence > 0.8:
                return "Recommended (high confidence) - proceed"
            else:
                return "Recommended (moderate confidence) - verify before proceeding"

    def _calculate_confidence(self, situation):
        """Calculate confidence in recommendation."""
        # Based on data quality, model uncertainty, etc.
        return 0.85

    def _request_approval(self, situation, action, confidence):
        """Send approval request to operator."""
        decision = {
            'id': len(self.pending_decisions) + 1,
            'timestamp': datetime.now(),
            'situation': situation,
            'proposed_action': action,
            'confidence': confidence,
            'status': 'pending'
        }

        self.pending_decisions.append(decision)

        # Send notification
        print(f"Approval requested: {action}")
        print(f"Confidence: {confidence:.0%}")
        print(f"Reason: {situation}")

        return decision['id']

    def approve_decision(self, decision_id):
        """Operator approves decision."""
        decision = self.pending_decisions[decision_id - 1]
        decision['status'] = 'approved'
        self._execute_action(decision['proposed_action'])

    def _execute_action(self, action):
        """Execute approved action."""
        print(f"Executing: {action}")
        # Implementation of actual control

# Usage
ds = DecisionSupport()

situation = "EC dropping below 1000 µS/cm in grow bed"
action = "add_nutrients"

result = ds.recommend_action(situation, action)
print(result)
```

---

## 5. Dashboard Integration

### Real-Time Monitoring Dashboard

```python
# Using Dash (Plotly) for web-based dashboard

import dash
from dash import dcc, html
from dash.dependencies import Input, Output
import plotly.graph_objs as go

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Aquaponics Monitoring Dashboard"),

    html.Div([
        html.Div([
            html.H3("Dissolved Oxygen"),
            dcc.Graph(id='do-gauge')
        ], className='four columns'),

        html.Div([
            html.H3("Temperature"),
            dcc.Graph(id='temp-gauge')
        ], className='four columns'),

        html.Div([
            html.H3("pH"),
            dcc.Graph(id='ph-gauge')
        ], className='four columns'),
    ], className='row'),

    html.Div([
        html.H3("Historical Trends"),
        dcc.Graph(id='trends-chart')
    ]),

    html.Div([
        html.H3("Active Alerts"),
        html.Div(id='alerts-list')
    ]),

    dcc.Interval(
        id='interval-component',
        interval=5*1000,  # Update every 5 seconds
        n_intervals=0
    )
])

@app.callback(
    [Output('do-gauge', 'figure'),
     Output('temp-gauge', 'figure'),
     Output('ph-gauge', 'figure'),
     Output('alerts-list', 'children')],
    [Input('interval-component', 'n_intervals')]
)
def update_dashboard(n):
    """Update all dashboard components."""

    # Fetch latest data
    current_data = get_latest_readings()  # Your data fetch function

    # DO gauge
    do_gauge = go.Figure(go.Indicator(
        mode="gauge+number+delta",
        value=current_data['do'],
        domain={'x': [0, 1], 'y': [0, 1]},
        title={'text': "mg/L"},
        delta={'reference': 7.0},
        gauge={'axis': {'range': [None, 12]},
               'bar': {'color': "darkblue"},
               'steps': [
                   {'range': [0, 5], 'color': "red"},
                   {'range': [5, 6], 'color': "yellow"},
                   {'range': [6, 12], 'color': "lightgreen"}],
               'threshold': {'line': {'color': "red", 'width': 4},
                           'thickness': 0.75, 'value': 5.0}}
    ))

    # Similar for temp and pH gauges...

    # Alerts
    alerts = get_active_alerts()  # Your function
    alert_items = [html.Li(f"{a['severity']}: {a['message']}") for a in alerts]

    return do_gauge, temp_gauge, ph_gauge, html.Ul(alert_items)

# if __name__ == '__main__':
#     app.run_server(debug=True)
```

---

## Key Takeaways

1. **Multi-level alerts prevent notification fatigue** - Critical, warning, info
2. **PID control is industry standard** - Smooth, stable control
3. **Rule-based logic is interpretable** - Easy to understand and modify
4. **Human oversight for high-stakes decisions** - Balance automation with judgment
5. **Dashboards provide situational awareness** - Real-time visibility
6. **Test alerts thoroughly** - Ensure reliable notifications

---

## Practical Exercise

1. **Design alert system** for your 5 most critical parameters
2. **Implement PID controller** for temperature control
3. **Create decision tree** for fertilization decisions
4. **Build approval workflow** for high-risk actions
5. **Develop monitoring dashboard** with key metrics
6. **Test alert escalation** and notification paths

---

## Next Module Preview

**Module 11: Fertigation Optimization** covers:
- Nutrient delivery strategies
- EC/pH control automation
- Dosing system design
- Fertilizer formulation
- Water quality management

---

*EcoFusion Academy - Course 304 - Module 10*
*Precision Agriculture & Data Analytics*
