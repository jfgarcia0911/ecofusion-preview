# Module 14: Data Visualization

## Course 304: Precision Agriculture & Data Analytics
**Duration:** 1 hour | **Level:** Advanced

---

## Learning Objectives

1. Design effective dashboards for operations
2. Create actionable visualizations
3. Build real-time monitoring displays
4. Generate automated reports
5. Communicate insights to stakeholders

---

## 1. Dashboard Design Principles

### Key Principles

```
┌──────────────────────────────────────────────────────────┐
│         EFFECTIVE DASHBOARD DESIGN                       │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  1. HIERARCHY OF INFORMATION                             │
│     Critical metrics → Larger, top-left                  │
│     Supporting details → Smaller, lower-right            │
│                                                          │
│  2. COLOR CODING                                         │
│     Green = Good/Normal                                  │
│     Yellow = Warning                                     │
│     Red = Critical/Action needed                         │
│                                                          │
│  3. REAL-TIME vs HISTORICAL                              │
│     Current status → Gauges, numbers                     │
│     Trends → Line charts                                 │
│                                                          │
│  4. ACTIONABLE INSIGHTS                                  │
│     Not just data → Recommendations                      │
│                                                          │
│  5. RESPONSIVE DESIGN                                    │
│     Works on desktop, tablet, mobile                     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 2. Essential Visualizations

### Gauge Charts (Current Status)

```python
import plotly.graph_objects as go

def create_gauge(value, title, range_max=100, thresholds=[50, 75, 100]):
    """Create gauge chart with color zones."""

    fig = go.Figure(go.Indicator(
        mode = "gauge+number+delta",
        value = value,
        title = {'text': title},
        delta = {'reference': thresholds[1]},  # Compare to middle threshold
        gauge = {
            'axis': {'range': [None, range_max]},
            'bar': {'color': "darkblue"},
            'steps': [
                {'range': [0, thresholds[0]], 'color': "red"},
                {'range': [thresholds[0], thresholds[1]], 'color': "yellow"},
                {'range': [thresholds[1], range_max], 'color': "lightgreen"}
            ],
            'threshold': {
                'line': {'color': "red", 'width': 4},
                'thickness': 0.75,
                'value': thresholds[0]
            }
        }
    ))

    return fig

# Example: DO gauge
fig = create_gauge(value=6.5, title="Dissolved Oxygen (mg/L)",
                    range_max=12, thresholds=[5, 6, 12])
# fig.show()
```

### Time Series Charts

```python
def create_trend_chart(df, columns, title):
    """Create multi-line trend chart."""

    fig = go.Figure()

    for col in columns:
        fig.add_trace(go.Scatter(
            x=df.index,
            y=df[col],
            mode='lines',
            name=col
        ))

    fig.update_layout(
        title=title,
        xaxis_title="Time",
        yaxis_title="Value",
        hovermode='x unified',
        template='plotly_white'
    )

    return fig
```

### Heatmaps (Spatial/Temporal Patterns)

```python
import seaborn as sns

def create_hourly_heatmap(df, parameter):
    """Create hour-of-day vs day-of-week heatmap."""

    df['hour'] = df.index.hour
    df['day_of_week'] = df.index.dayofweek

    pivot = df.pivot_table(values=parameter, index='hour',
                           columns='day_of_week', aggfunc='mean')

    plt.figure(figsize=(10, 6))
    sns.heatmap(pivot, cmap='RdYlGn', annot=True, fmt='.1f')
    plt.xlabel('Day of Week')
    plt.ylabel('Hour of Day')
    plt.title(f'{parameter} - Daily Pattern')
    plt.show()
```

---

## 3. Complete Dashboard Example

### Aquaponics Operations Dashboard

```python
import dash
from dash import dcc, html
import plotly.graph_objs as go

app = dash.Dash(__name__)

app.layout = html.Div([
    # Header
    html.H1("Aquaponics Command Center",
            style={'textAlign': 'center', 'color': '#2C3E50'}),

    # Key Metrics Row
    html.Div([
        html.Div([
            html.H3("System Status"),
            dcc.Graph(id='do-gauge'),
        ], className='four columns'),

        html.Div([
            html.H3("Water Quality"),
            dcc.Graph(id='ph-gauge'),
        ], className='four columns'),

        html.Div([
            html.H3("Environment"),
            dcc.Graph(id='temp-gauge'),
        ], className='four columns'),
    ], className='row'),

    # Trends Row
    html.Div([
        html.Div([
            html.H3("24-Hour Trends"),
            dcc.Graph(id='trends-chart'),
        ], className='twelve columns'),
    ], className='row'),

    # Alerts and Actions Row
    html.Div([
        html.Div([
            html.H3("Active Alerts"),
            html.Div(id='alerts-list'),
        ], className='six columns'),

        html.Div([
            html.H3("Production Summary"),
            html.Div(id='production-summary'),
        ], className='six columns'),
    ], className='row'),

    # Auto-refresh
    dcc.Interval(
        id='interval-component',
        interval=30*1000,  # 30 seconds
        n_intervals=0
    )
])

# Add callbacks for updates...
```

---

## 4. Automated Reporting

### Weekly Summary Report

```python
from datetime import datetime, timedelta

def generate_weekly_report(start_date, end_date):
    """Generate automated weekly report."""

    # Fetch data
    data = fetch_data_for_period(start_date, end_date)

    report = f"""
    ========================================
    WEEKLY OPERATIONS REPORT
    Period: {start_date.date()} to {end_date.date()}
    ========================================

    PRODUCTION SUMMARY
    ------------------
    Total Harvest: {data['total_harvest']:.1f} lbs
    Number of Harvests: {data['harvest_count']}
    Average per Harvest: {data['total_harvest']/data['harvest_count']:.1f} lbs

    SYSTEM HEALTH
    -------------
    Average DO: {data['avg_do']:.2f} mg/L
    Average pH: {data['avg_ph']:.2f}
    Average Temperature: {data['avg_temp']:.1f}°C

    DO below 5.5 mg/L: {data['do_warnings']} times ({data['do_warnings']*100/data['total_readings']:.1f}%)
    pH outside 6.0-7.5: {data['ph_warnings']} times ({data['ph_warnings']*100/data['total_readings']:.1f}%)

    ALERTS
    ------
    Critical Alerts: {data['critical_alerts']}
    Warnings: {data['warnings']}
    Average Response Time: {data['avg_response_time_mins']:.0f} minutes

    RESOURCE USE
    ------------
    Power Consumption: {data['total_kwh']:.1f} kWh
    Water Added: {data['water_added_gal']:.0f} gallons
    Fertilizer Used: {data['fertilizer_kg']:.2f} kg

    EFFICIENCY METRICS
    ------------------
    Power per pound: {data['total_kwh']/data['total_harvest']:.2f} kWh/lb
    Water Use Efficiency: {data['total_harvest']/data['water_added_gal']:.3f} lbs/gal
    Feed Conversion Ratio: {data['fcr']:.2f}

    TOP ISSUES THIS WEEK
    --------------------
    1. {data['top_issue_1']}
    2. {data['top_issue_2']}
    3. {data['top_issue_3']}

    RECOMMENDATIONS
    ---------------
    • {data['recommendation_1']}
    • {data['recommendation_2']}
    • {data['recommendation_3']}

    ========================================
    Report generated: {datetime.now()}
    """

    return report

# Generate and email
# report = generate_weekly_report(datetime.now() - timedelta(days=7), datetime.now())
# email_report(report, to='manager@farm.com')
```

---

## 5. Mobile-Friendly Views

### Simplified Mobile Dashboard

```python
# Mobile-optimized layout (simplified)
mobile_layout = html.Div([
    # Single column for mobile
    html.Div([
        html.H2("Quick Status"),

        # Critical parameters only
        html.Div([
            html.H4(id='do-status', style={'color': 'green'}),
            html.H4(id='ph-status'),
            html.H4(id='temp-status'),
        ]),

        # Recent alerts
        html.Div([
            html.H3("Alerts (Last 24h)"),
            html.Ul(id='recent-alerts')
        ]),

        # Quick actions
        html.Div([
            html.Button('Acknowledge Alerts', id='ack-btn'),
            html.Button('View Full Dashboard', id='full-dash-btn')
        ])
    ])
])
```

---

## Key Takeaways

1. **Dashboards should inform action** - Not just display data
2. **Use color meaningfully** - Red/yellow/green for status
3. **Mobile matters** - Operators check from anywhere
4. **Automate reporting** - Weekly/monthly summaries
5. **Visualize trends, not just snapshots** - Context is critical

---

## Practical Exercise

1. Design dashboard for your facility (sketch layout)
2. Identify 8-10 critical metrics to display
3. Create 3 key visualizations (gauge, trend, heatmap)
4. Write automated weekly report template
5. Build mobile-friendly alert view

---

*EcoFusion Academy - Course 304 - Module 14*
