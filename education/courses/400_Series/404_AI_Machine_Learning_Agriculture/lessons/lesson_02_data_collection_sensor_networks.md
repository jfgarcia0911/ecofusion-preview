# Lesson 2: Data Collection & Sensor Networks

## Learning Objectives

By the end of this lesson, you will be able to:
- Design IoT sensor networks for agricultural data acquisition
- Build robust data pipelines with ETL processes
- Manage time-series data effectively for CEA applications
- Implement data quality assessment and cleaning procedures
- Deploy edge computing solutions for distributed data collection

---

## 1. IoT Sensor Systems for Agriculture

### Sensor Types and Applications

#### Environmental Sensors

```
┌──────────────────────────────────────────────────────────┐
│           Agricultural Sensor Categories                  │
└──────────────────────────────────────────────────────────┘

CLIMATE SENSORS
├── Temperature (Air, Surface, Root Zone)
│   ├── Thermocouples: ±0.1°C accuracy
│   ├── RTDs (Pt100/Pt1000): ±0.05°C accuracy
│   └── Digital (DHT22, SHT31): ±0.2°C accuracy
│
├── Humidity
│   ├── Capacitive: ±2% RH
│   ├── Resistive: ±3% RH
│   └── Dewpoint sensors: ±0.2°C dewpoint
│
├── Light
│   ├── PAR sensors: 400-700nm
│   ├── Lux meters: Human-visible spectrum
│   ├── Spectroradiometers: Full spectrum
│   └── UV sensors: UV-A, UV-B bands
│
└── CO2
    ├── NDIR sensors: ±30ppm + 3%
    └── Electrochemical: ±50ppm

GROWTH MEDIA SENSORS
├── Soil/Substrate Moisture
│   ├── Capacitive: Volumetric water content
│   ├── Tensiometers: Water tension (kPa)
│   └── TDR: Time-domain reflectometry
│
├── EC (Electrical Conductivity)
│   ├── 2-electrode: ±5% accuracy
│   └── 4-electrode: ±2% accuracy
│
├── pH
│   ├── Glass electrode: ±0.1 pH
│   └── ISFET: ±0.2 pH
│
└── Nutrient-specific
    ├── Ion-selective electrodes
    └── Spectroscopy-based

IMAGING SENSORS
├── RGB cameras: Visual spectrum
├── Multispectral: 3-10 discrete bands
├── Hyperspectral: 100+ continuous bands
├── Thermal infrared: Plant temperature
└── 3D depth cameras: Structure analysis

ADDITIONAL SENSORS
├── Airflow/Velocity
├── Pressure (atmospheric, water)
├── Water flow meters
├── Energy meters
└── Sound/vibration (pest detection)
```

### Sensor Network Architecture

```
┌────────────────────────────────────────────────────────────┐
│                    Sensor Network Topology                  │
└────────────────────────────────────────────────────────────┘

                    ┌─────────────┐
                    │  Cloud/ML   │
                    │  Platform   │
                    └──────┬──────┘
                           │
                    ┌──────┴──────┐
                    │   Gateway   │
                    │  (Edge PC)  │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
       ┌────┴────┐    ┌────┴────┐   ┌────┴────┐
       │  Zone 1  │    │  Zone 2  │   │  Zone 3  │
       │   Hub    │    │   Hub    │   │   Hub    │
       └────┬────┘    └────┬────┘   └────┬────┘
            │              │              │
    ┌───┬───┼───┬──   ┬───┼───┬──   ┬───┼───┬───┐
    │   │   │   │     │   │   │     │   │   │   │
  ┌─┴┐┌─┴┐┌─┴┐┌─┴┐  ┌─┴┐┌─┴┐┌─┴┐  ┌─┴┐┌─┴┐┌─┴┐┌─┴┐
  │S1││S2││S3││S4│  │S5││S6││S7│  │S8││S9││10││11│
  └──┘└──┘└──┘└──┘  └──┘└──┘└──┘  └──┘└──┘└──┘└──┘

Legend:
S = Sensor node
Hub = Zone controller/aggregator
Gateway = Central data collector and edge processor
```

### Communication Protocols

#### Wired Protocols
```
Protocol     | Speed      | Distance | Power | Cost | Use Case
─────────────|────────────|──────────|───────|──────|──────────
I2C          | 3.4 Mbps   | <5m      | Low   | $    | Short range
SPI          | 10+ Mbps   | <3m      | Low   | $    | High speed
UART/RS232   | 115 kbps   | 15m      | Low   | $    | Legacy
RS485        | 10 Mbps    | 1200m    | Low   | $$   | Industrial
Ethernet     | 1 Gbps     | 100m     | Med   | $$   | Backbone
Modbus       | Variable   | 1000m+   | Low   | $$   | Industrial
```

#### Wireless Protocols
```
Protocol     | Range    | Power    | Data Rate | Use Case
─────────────|──────────|──────────|───────────|────────────
WiFi         | 50-100m  | High     | 1+ Gbps   | High bandwidth
Bluetooth    | 10-100m  | Low      | 2 Mbps    | Short range
BLE          | 10-50m   | V.Low    | 1 Mbps    | Sensors
Zigbee       | 10-100m  | Low      | 250 kbps  | Mesh networks
LoRa/LoRaWAN | 2-15km   | V.Low    | 50 kbps   | Long range
NB-IoT       | 1-10km   | Low      | 250 kbps  | Cellular IoT
Thread       | 10-30m   | Low      | 250 kbps  | Smart home
```

---

## 2. Data Pipeline Design

### ETL Architecture

```
┌────────────────────────────────────────────────────────────┐
│                  Data Pipeline Components                   │
└────────────────────────────────────────────────────────────┘

EXTRACT (Data Sources)
  │
  ├─> Sensor Networks
  ├─> Manual Inputs
  ├─> Third-party APIs (weather, market)
  ├─> Legacy Systems
  └─> Image/Video feeds
  │
  ▼
BUFFER/QUEUE
  │
  ├─> Message Queue (MQTT, RabbitMQ, Kafka)
  ├─> Time-series buffer
  └─> Fault tolerance
  │
  ▼
TRANSFORM (Processing)
  │
  ├─> Data Validation
  │   ├─> Range checks
  │   ├─> Type validation
  │   └─> Completeness checks
  │
  ├─> Data Cleaning
  │   ├─> Outlier detection
  │   ├─> Missing value imputation
  │   └─> Noise filtering
  │
  ├─> Data Enrichment
  │   ├─> Feature engineering
  │   ├─> Aggregation
  │   └─> Join with metadata
  │
  └─> Data Normalization
      ├─> Unit conversion
      ├─> Scaling
      └─> Formatting
  │
  ▼
LOAD (Storage)
  │
  ├─> Time-series Database (InfluxDB, TimescaleDB)
  ├─> Data Warehouse (PostgreSQL, BigQuery)
  ├─> Data Lake (S3, MinIO)
  ├─> Cache (Redis)
  └─> ML Feature Store
  │
  ▼
SERVE (Consumption)
  │
  ├─> Real-time dashboards
  ├─> ML model training
  ├─> Analytics & reporting
  └─> API endpoints
```

### Implementation Example: MQTT-based Pipeline

```python
"""
Agricultural IoT Data Pipeline
Using MQTT for sensor data collection
"""

import paho.mqtt.client as mqtt
import json
import pandas as pd
from datetime import datetime
from influxdb_client import InfluxDBClient, Point
from influxdb_client.client.write_api import SYNCHRONOUS
import logging

# Configuration
MQTT_BROKER = "localhost"
MQTT_PORT = 1883
MQTT_TOPICS = [
    "greenhouse/zone1/climate/#",
    "greenhouse/zone1/soil/#",
    "greenhouse/zone2/climate/#",
    "greenhouse/zone2/soil/#"
]

INFLUXDB_URL = "http://localhost:8086"
INFLUXDB_TOKEN = "your-token"
INFLUXDB_ORG = "agriculture"
INFLUXDB_BUCKET = "sensor-data"

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SensorDataPipeline:
    """Data pipeline for agricultural sensor data"""

    def __init__(self):
        # Initialize MQTT client
        self.mqtt_client = mqtt.Client()
        self.mqtt_client.on_connect = self.on_connect
        self.mqtt_client.on_message = self.on_message

        # Initialize InfluxDB client
        self.influx_client = InfluxDBClient(
            url=INFLUXDB_URL,
            token=INFLUXDB_TOKEN,
            org=INFLUXDB_ORG
        )
        self.write_api = self.influx_client.write_api(write_options=SYNCHRONOUS)

        # Data validation rules
        self.validation_rules = {
            'temperature': {'min': -10, 'max': 50, 'unit': 'C'},
            'humidity': {'min': 0, 'max': 100, 'unit': '%'},
            'co2': {'min': 200, 'max': 5000, 'unit': 'ppm'},
            'light_par': {'min': 0, 'max': 2000, 'unit': 'umol/m2/s'},
            'soil_moisture': {'min': 0, 'max': 100, 'unit': '%'},
            'ec': {'min': 0, 'max': 10, 'unit': 'mS/cm'},
            'ph': {'min': 3, 'max': 10, 'unit': 'pH'}
        }

    def on_connect(self, client, userdata, flags, rc):
        """Callback for MQTT connection"""
        logger.info(f"Connected to MQTT broker with result code {rc}")

        # Subscribe to topics
        for topic in MQTT_TOPICS:
            client.subscribe(topic)
            logger.info(f"Subscribed to {topic}")

    def on_message(self, client, userdata, msg):
        """Callback for MQTT message receipt"""
        try:
            # Parse message
            payload = json.loads(msg.payload.decode())
            topic_parts = msg.topic.split('/')

            # Extract metadata
            zone = topic_parts[1]
            sensor_type = topic_parts[2]
            sensor_id = payload.get('sensor_id', 'unknown')

            # Process each measurement
            timestamp = payload.get('timestamp', datetime.utcnow().isoformat())
            measurements = payload.get('measurements', {})

            for metric, value in measurements.items():
                # Validate data
                if self.validate_measurement(metric, value):
                    # Clean data
                    cleaned_value = self.clean_measurement(metric, value)

                    # Write to InfluxDB
                    self.write_to_influxdb(
                        measurement=metric,
                        value=cleaned_value,
                        zone=zone,
                        sensor_type=sensor_type,
                        sensor_id=sensor_id,
                        timestamp=timestamp
                    )
                else:
                    logger.warning(
                        f"Invalid {metric} value: {value} from {sensor_id}"
                    )

        except Exception as e:
            logger.error(f"Error processing message: {e}")

    def validate_measurement(self, metric, value):
        """Validate sensor measurement against rules"""
        if metric not in self.validation_rules:
            return True  # No validation rule, accept

        rules = self.validation_rules[metric]

        # Range check
        if value < rules['min'] or value > rules['max']:
            return False

        # Type check
        if not isinstance(value, (int, float)):
            return False

        return True

    def clean_measurement(self, metric, value):
        """Clean and normalize measurement"""
        # Round to appropriate precision
        precision = {
            'temperature': 1,
            'humidity': 1,
            'co2': 0,
            'light_par': 0,
            'soil_moisture': 1,
            'ec': 2,
            'ph': 2
        }

        decimals = precision.get(metric, 2)
        return round(value, decimals)

    def write_to_influxdb(self, measurement, value, zone,
                          sensor_type, sensor_id, timestamp):
        """Write data point to InfluxDB"""
        point = Point(measurement) \
            .tag("zone", zone) \
            .tag("sensor_type", sensor_type) \
            .tag("sensor_id", sensor_id) \
            .field("value", value) \
            .time(timestamp)

        self.write_api.write(bucket=INFLUXDB_BUCKET, record=point)

        logger.debug(
            f"Written: {measurement}={value} from {sensor_id} in {zone}"
        )

    def run(self):
        """Start the data pipeline"""
        logger.info("Starting sensor data pipeline...")

        # Connect to MQTT broker
        self.mqtt_client.connect(MQTT_BROKER, MQTT_PORT, 60)

        # Start MQTT loop
        self.mqtt_client.loop_forever()

    def shutdown(self):
        """Gracefully shutdown the pipeline"""
        logger.info("Shutting down pipeline...")
        self.mqtt_client.disconnect()
        self.influx_client.close()

# Usage
if __name__ == "__main__":
    pipeline = SensorDataPipeline()
    try:
        pipeline.run()
    except KeyboardInterrupt:
        pipeline.shutdown()
```

### Data Quality Monitoring

```python
"""
Data Quality Monitoring System
Tracks data completeness, validity, and freshness
"""

import pandas as pd
from datetime import datetime, timedelta
from influxdb_client import InfluxDBClient
import smtplib
from email.mime.text import MIMEText

class DataQualityMonitor:
    """Monitor data quality metrics"""

    def __init__(self, influx_client):
        self.client = influx_client
        self.quality_thresholds = {
            'completeness': 0.95,  # 95% data points present
            'freshness': 300,       # Data < 5 minutes old
            'validity': 0.98,       # 98% valid values
            'accuracy': 0.02        # Within 2% of expected
        }

    def check_completeness(self, zone, timeframe_minutes=60):
        """Check if expected data points are present"""
        query = f'''
        from(bucket: "sensor-data")
            |> range(start: -{timeframe_minutes}m)
            |> filter(fn: (r) => r.zone == "{zone}")
            |> count()
        '''

        result = self.client.query_api().query(query)

        # Expected data points (depends on sensor configuration)
        expected_sensors = 10  # 10 sensors per zone
        sample_rate = 60  # 1 sample per minute
        expected_points = expected_sensors * timeframe_minutes / sample_rate

        actual_points = sum([record.get_value() for table in result
                           for record in table.records])

        completeness = actual_points / expected_points

        return {
            'metric': 'completeness',
            'zone': zone,
            'value': completeness,
            'status': 'OK' if completeness >= self.quality_thresholds['completeness'] else 'ALERT',
            'expected': expected_points,
            'actual': actual_points
        }

    def check_freshness(self, zone):
        """Check if data is recent"""
        query = f'''
        from(bucket: "sensor-data")
            |> range(start: -1h)
            |> filter(fn: (r) => r.zone == "{zone}")
            |> last()
        '''

        result = self.client.query_api().query(query)

        alerts = []
        for table in result:
            for record in table.records:
                sensor_id = record.values.get('sensor_id')
                timestamp = record.get_time()
                age_seconds = (datetime.now(timestamp.tzinfo) - timestamp).total_seconds()

                if age_seconds > self.quality_thresholds['freshness']:
                    alerts.append({
                        'sensor_id': sensor_id,
                        'age_seconds': age_seconds,
                        'last_seen': timestamp
                    })

        return {
            'metric': 'freshness',
            'zone': zone,
            'status': 'OK' if len(alerts) == 0 else 'ALERT',
            'stale_sensors': alerts
        }

    def check_validity(self, zone, timeframe_minutes=60):
        """Check for values within valid ranges"""
        # This would compare against validation rules
        # Implementation depends on specific requirements
        pass

    def generate_report(self, zones):
        """Generate comprehensive data quality report"""
        report = {
            'timestamp': datetime.now().isoformat(),
            'zones': {}
        }

        for zone in zones:
            report['zones'][zone] = {
                'completeness': self.check_completeness(zone),
                'freshness': self.check_freshness(zone)
            }

        return report

    def send_alert(self, report):
        """Send email alert for data quality issues"""
        issues = []
        for zone, metrics in report['zones'].items():
            for metric_name, metric_data in metrics.items():
                if metric_data['status'] == 'ALERT':
                    issues.append(f"{zone} - {metric_name}: {metric_data}")

        if issues:
            # Send email notification
            msg = MIMEText('\n'.join(issues))
            msg['Subject'] = 'Data Quality Alert'
            msg['From'] = 'alerts@greenhouse.com'
            msg['To'] = 'operations@greenhouse.com'

            # Send email (configure SMTP server)
            # smtp.send_message(msg)
            print(f"ALERT: {len(issues)} data quality issues detected")
```

---

## 3. Time-Series Data Management

### Time-Series Database Selection

```
Database Comparison for Agricultural IoT
=========================================

InfluxDB
--------
Pros: Purpose-built for time-series, high write throughput,
      built-in retention policies, Flux query language
Cons: Memory intensive, commercial license for clustering
Best for: High-frequency sensor data, real-time dashboards
Performance: 1M+ points/second write, millisecond queries

TimescaleDB
-----------
Pros: PostgreSQL extension (SQL familiar), ACID compliant,
      excellent for complex joins, good compression
Cons: Requires PostgreSQL knowledge, tuning needed
Best for: Complex queries, regulatory compliance, mixed workloads
Performance: 100K+ points/second write, sub-second queries

Prometheus
----------
Pros: Excellent for metrics, pull-based model, built-in alerting
Cons: Limited data types, retention challenges, no long-term storage
Best for: System monitoring, short-term metrics
Performance: Very high read/write, 15-30 day retention typical

MongoDB (Time-Series)
---------------------
Pros: Flexible schema, horizontal scaling, document model
Cons: Higher storage usage, complex aggregation queries
Best for: Irregular data, flexible schemas, document storage
Performance: 50K+ points/second, variable query performance
```

### Data Retention Strategy

```python
"""
Time-series data retention and downsampling
Balances storage costs with data resolution needs
"""

from influxdb_client import InfluxDBClient

class DataRetentionManager:
    """Manage data retention and downsampling policies"""

    def __init__(self, client):
        self.client = client

    def create_retention_policies(self, bucket):
        """Create tiered retention and downsampling"""

        # Policy 1: Raw data - 30 days
        # Full resolution (e.g., 1-minute intervals)
        raw_retention = {
            'name': 'raw_data',
            'duration': '30d',
            'resolution': 'original'
        }

        # Policy 2: Hourly aggregates - 1 year
        # Downsample to hourly averages
        hourly_task = '''
        option task = {name: "downsample_hourly", every: 1h}

        from(bucket: "sensor-data")
            |> range(start: -1h)
            |> filter(fn: (r) => r._measurement != "")
            |> aggregateWindow(every: 1h, fn: mean)
            |> set(key: "_measurement", value: "${r._measurement}_hourly")
            |> to(bucket: "sensor-data-hourly", org: "agriculture")
        '''

        # Policy 3: Daily aggregates - 5 years
        # Downsample to daily statistics
        daily_task = '''
        option task = {name: "downsample_daily", every: 1d}

        from(bucket: "sensor-data-hourly")
            |> range(start: -1d)
            |> filter(fn: (r) => r._measurement =~ /_hourly$/)
            |> aggregateWindow(
                every: 1d,
                fn: (column, tables=<-) => tables
                    |> mean()
                    |> set(key: "stat", value: "mean")
                    |> yield(name: "mean")

                    tables
                    |> min()
                    |> set(key: "stat", value: "min")
                    |> yield(name: "min")

                    tables
                    |> max()
                    |> set(key: "stat", value: "max")
                    |> yield(name: "max")
            )
            |> to(bucket: "sensor-data-daily", org: "agriculture")
        '''

        return {
            'raw': raw_retention,
            'hourly_task': hourly_task,
            'daily_task': daily_task
        }

    def calculate_storage_requirements(self, config):
        """Estimate storage requirements"""

        # Input parameters
        sensors = config['num_sensors']
        sample_rate_seconds = config['sample_rate_seconds']
        bytes_per_point = 50  # Average for InfluxDB

        # Calculate points per day
        points_per_day = sensors * (86400 / sample_rate_seconds)

        # Storage by tier
        raw_30days = points_per_day * 30 * bytes_per_point
        hourly_1year = (points_per_day / (3600 / sample_rate_seconds)) * 365 * bytes_per_point
        daily_5years = (points_per_day / (86400 / sample_rate_seconds)) * 365 * 5 * bytes_per_point

        total_bytes = raw_30days + hourly_1year + daily_5years
        total_gb = total_bytes / (1024**3)

        return {
            'raw_30days_gb': raw_30days / (1024**3),
            'hourly_1year_gb': hourly_1year / (1024**3),
            'daily_5years_gb': daily_5years / (1024**3),
            'total_gb': total_gb,
            'total_tb': total_gb / 1024
        }

# Example usage
config = {
    'num_sensors': 100,
    'sample_rate_seconds': 60  # 1 sample per minute
}

manager = DataRetentionManager(None)
storage = manager.calculate_storage_requirements(config)

print(f"Estimated Storage Requirements:")
print(f"  Raw data (30 days): {storage['raw_30days_gb']:.2f} GB")
print(f"  Hourly (1 year): {storage['hourly_1year_gb']:.2f} GB")
print(f"  Daily (5 years): {storage['daily_5years_gb']:.2f} GB")
print(f"  Total: {storage['total_gb']:.2f} GB ({storage['total_tb']:.2f} TB)")
```

### Output Example:
```
Estimated Storage Requirements:
  Raw data (30 days): 21.36 GB
  Hourly (1 year): 30.13 GB
  Daily (5 years): 10.62 GB
  Total: 62.11 GB (0.06 TB)
```

---

## 4. Data Quality Assessment

### Automated Data Cleaning Pipeline

```python
"""
Automated data cleaning for agricultural sensor data
Handles outliers, missing values, and noise
"""

import pandas as pd
import numpy as np
from scipy import stats
from sklearn.preprocessing import RobustScaler

class SensorDataCleaner:
    """Clean and prepare sensor data for ML"""

    def __init__(self, config=None):
        self.config = config or {}
        self.scaler = RobustScaler()

    def detect_outliers_zscore(self, df, column, threshold=3):
        """Detect outliers using Z-score method"""
        z_scores = np.abs(stats.zscore(df[column].dropna()))
        outliers = z_scores > threshold
        return outliers

    def detect_outliers_iqr(self, df, column, factor=1.5):
        """Detect outliers using IQR method"""
        Q1 = df[column].quantile(0.25)
        Q3 = df[column].quantile(0.75)
        IQR = Q3 - Q1

        lower_bound = Q1 - factor * IQR
        upper_bound = Q3 + factor * IQR

        outliers = (df[column] < lower_bound) | (df[column] > upper_bound)
        return outliers

    def detect_stuck_sensors(self, df, column, window=10, threshold=0.01):
        """Detect sensors reporting constant values (stuck)"""
        rolling_std = df[column].rolling(window=window).std()
        stuck = rolling_std < threshold
        return stuck

    def handle_missing_values(self, df, method='interpolate'):
        """Handle missing values in time-series data"""
        if method == 'interpolate':
            # Linear interpolation for time-series
            df_clean = df.interpolate(method='time', limit=5)
        elif method == 'forward_fill':
            # Forward fill (carry last observation)
            df_clean = df.fillna(method='ffill', limit=3)
        elif method == 'backward_fill':
            # Backward fill
            df_clean = df.fillna(method='bfill', limit=3)
        elif method == 'mean':
            # Rolling mean imputation
            df_clean = df.fillna(df.rolling(window=5, min_periods=1).mean())
        else:
            df_clean = df

        return df_clean

    def remove_sensor_drift(self, df, column, baseline_window=100):
        """Correct for sensor drift using baseline calibration"""
        # Calculate rolling baseline
        baseline = df[column].rolling(
            window=baseline_window,
            min_periods=1
        ).mean()

        # Calculate expected value (could be from calibration data)
        expected_mean = df[column].iloc[:baseline_window].mean()

        # Adjust for drift
        drift_correction = expected_mean - baseline
        df[f'{column}_corrected'] = df[column] + drift_correction

        return df

    def denoise_signal(self, df, column, method='rolling_mean', window=5):
        """Remove noise from sensor signals"""
        if method == 'rolling_mean':
            # Simple moving average
            df[f'{column}_denoised'] = df[column].rolling(
                window=window,
                min_periods=1,
                center=True
            ).mean()

        elif method == 'exponential':
            # Exponential weighted moving average
            df[f'{column}_denoised'] = df[column].ewm(
                span=window,
                adjust=False
            ).mean()

        elif method == 'savgol':
            # Savitzky-Golay filter
            from scipy.signal import savgol_filter
            df[f'{column}_denoised'] = savgol_filter(
                df[column].fillna(method='ffill'),
                window_length=window,
                polyorder=2
            )

        return df

    def clean_pipeline(self, df, sensor_column):
        """Complete cleaning pipeline for a sensor column"""
        df_clean = df.copy()

        # Step 1: Detect and flag outliers
        outliers_z = self.detect_outliers_zscore(df_clean, sensor_column)
        outliers_iqr = self.detect_outliers_iqr(df_clean, sensor_column)
        outliers = outliers_z | outliers_iqr

        # Step 2: Detect stuck sensors
        stuck = self.detect_stuck_sensors(df_clean, sensor_column)

        # Step 3: Remove flagged points (set to NaN)
        df_clean.loc[outliers | stuck, sensor_column] = np.nan

        # Step 4: Handle missing values
        df_clean = self.handle_missing_values(df_clean, method='interpolate')

        # Step 5: Denoise signal
        df_clean = self.denoise_signal(df_clean, sensor_column, method='exponential')

        # Step 6: Correct for drift (if needed)
        # df_clean = self.remove_sensor_drift(df_clean, sensor_column)

        # Create quality metrics
        df_clean[f'{sensor_column}_quality'] = 1.0
        df_clean.loc[outliers, f'{sensor_column}_quality'] = 0.5
        df_clean.loc[stuck, f'{sensor_column}_quality'] = 0.3

        return df_clean

    def generate_quality_report(self, df_original, df_clean, sensor_column):
        """Generate data quality report"""
        report = {
            'sensor': sensor_column,
            'total_points': len(df_original),
            'missing_original': df_original[sensor_column].isna().sum(),
            'outliers_removed': (
                (df_clean[sensor_column].isna().sum() -
                 df_original[sensor_column].isna().sum())
            ),
            'missing_after_imputation': df_clean[sensor_column].isna().sum(),
            'quality_score': df_clean[f'{sensor_column}_quality'].mean()
        }

        report['data_completeness'] = (
            (report['total_points'] - report['missing_after_imputation']) /
            report['total_points']
        )

        return report

# Example usage
if __name__ == "__main__":
    # Load sample data
    df = pd.DataFrame({
        'timestamp': pd.date_range('2024-01-01', periods=1000, freq='1min'),
        'temperature': np.random.normal(23, 2, 1000)
    })

    # Add some outliers and missing values
    df.loc[100:105, 'temperature'] = 50  # Outliers
    df.loc[200:202, 'temperature'] = np.nan  # Missing
    df.loc[300:350, 'temperature'] = 23.0  # Stuck sensor

    # Clean data
    cleaner = SensorDataCleaner()
    df_clean = cleaner.clean_pipeline(df, 'temperature')

    # Generate report
    report = cleaner.generate_quality_report(df, df_clean, 'temperature')

    print("Data Quality Report:")
    for key, value in report.items():
        print(f"  {key}: {value}")
```

---

## 5. Edge Computing for Distributed Systems

### Edge vs. Cloud Processing

```
┌────────────────────────────────────────────────────────────┐
│          Edge Computing Architecture for Agriculture        │
└────────────────────────────────────────────────────────────┘

                        CLOUD TIER
                    ┌────────────────┐
                    │  Cloud ML      │
                    │  Platform      │
                    │  - Training    │
                    │  - Analytics   │
                    │  - Storage     │
                    └────────┬───────┘
                             │ (Intermittent)
                             │
                      FOG/GATEWAY TIER
                    ┌────────┴───────┐
                    │  Edge Gateway  │
                    │  - Aggregation │
                    │  - Filtering   │
                    │  - Inference   │
                    │  - Local DB    │
                    └────────┬───────┘
                             │ (Continuous)
                    ┌────────┴────────┐
                    │                 │
              DEVICE/SENSOR TIER      │
            ┌───────┴───────┐    ┌────┴─────┐
            │ Smart Sensors │    │ Cameras  │
            │ - Pre-process │    │ - Edge   │
            │ - Filter      │    │   Vision │
            └───────────────┘    └──────────┘

Processing Distribution:
========================

EDGE DEVICES (Sensors, Cameras)
├─> Data acquisition
├─> Basic filtering
├─> Protocol conversion
└─> Immediate response (<10ms)

FOG/GATEWAY (Local Server)
├─> Data aggregation
├─> ML inference
├─> Complex processing
├─> Local storage
├─> Control decisions
└─> Response time: <100ms

CLOUD (Remote Datacenter)
├─> Model training
├─> Long-term storage
├─> Complex analytics
├─> Reporting
├─> Model updates
└─> Response time: >1s acceptable
```

### Edge ML Implementation

```python
"""
Edge ML inference for real-time plant disease detection
Runs on edge device (Raspberry Pi, NVIDIA Jetson, etc.)
"""

import cv2
import numpy as np
import tensorflow as tf
from threading import Thread
from queue import Queue
import time

class EdgePlantMonitor:
    """Real-time plant monitoring on edge device"""

    def __init__(self, model_path, camera_id=0):
        # Load TFLite model for edge inference
        self.interpreter = tf.lite.Interpreter(model_path=model_path)
        self.interpreter.allocate_tensors()

        # Get model details
        self.input_details = self.interpreter.get_input_details()
        self.output_details = self.interpreter.get_output_details()

        # Camera setup
        self.camera = cv2.VideoCapture(camera_id)
        self.camera.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
        self.camera.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

        # Processing queue
        self.frame_queue = Queue(maxsize=10)
        self.result_queue = Queue(maxsize=10)

        # Disease classes
        self.classes = [
            'healthy',
            'powdery_mildew',
            'downy_mildew',
            'nutrient_deficiency',
            'pest_damage'
        ]

        # Statistics
        self.stats = {
            'frames_processed': 0,
            'inference_time_ms': [],
            'detections': {cls: 0 for cls in self.classes}
        }

    def preprocess_frame(self, frame):
        """Prepare frame for model input"""
        # Resize to model input size
        input_shape = self.input_details[0]['shape']
        height, width = input_shape[1], input_shape[2]

        # Resize and normalize
        img = cv2.resize(frame, (width, height))
        img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
        img = img.astype(np.float32) / 255.0

        # Add batch dimension
        img = np.expand_dims(img, axis=0)

        return img

    def inference(self, preprocessed_frame):
        """Run model inference"""
        start_time = time.time()

        # Set input tensor
        self.interpreter.set_tensor(
            self.input_details[0]['index'],
            preprocessed_frame
        )

        # Run inference
        self.interpreter.invoke()

        # Get output
        output = self.interpreter.get_tensor(self.output_details[0]['index'])

        inference_time = (time.time() - start_time) * 1000  # ms
        self.stats['inference_time_ms'].append(inference_time)

        return output[0], inference_time

    def postprocess_output(self, output):
        """Process model output"""
        # Get predicted class and confidence
        predicted_class_idx = np.argmax(output)
        confidence = output[predicted_class_idx]
        predicted_class = self.classes[predicted_class_idx]

        # Update statistics
        self.stats['detections'][predicted_class] += 1

        return {
            'class': predicted_class,
            'confidence': float(confidence),
            'all_scores': {
                cls: float(score)
                for cls, score in zip(self.classes, output)
            }
        }

    def capture_thread(self):
        """Thread for continuous frame capture"""
        while True:
            ret, frame = self.camera.read()
            if ret:
                if not self.frame_queue.full():
                    self.frame_queue.put(frame)
            time.sleep(0.01)  # 100 FPS capture attempt

    def inference_thread(self):
        """Thread for model inference"""
        while True:
            if not self.frame_queue.empty():
                frame = self.frame_queue.get()

                # Preprocess
                preprocessed = self.preprocess_frame(frame)

                # Inference
                output, inf_time = self.inference(preprocessed)

                # Postprocess
                result = self.postprocess_output(output)
                result['frame'] = frame
                result['inference_time_ms'] = inf_time

                # Store result
                if not self.result_queue.full():
                    self.result_queue.put(result)

                self.stats['frames_processed'] += 1

    def trigger_alert(self, result):
        """Send alert if disease detected"""
        if result['class'] != 'healthy' and result['confidence'] > 0.8:
            # Send MQTT message, email, etc.
            alert = {
                'timestamp': time.time(),
                'disease': result['class'],
                'confidence': result['confidence'],
                'camera_id': 0
            }
            print(f"ALERT: {alert}")

    def run(self, duration_seconds=60):
        """Run edge monitoring"""
        # Start threads
        capture = Thread(target=self.capture_thread, daemon=True)
        inference = Thread(target=self.inference_thread, daemon=True)

        capture.start()
        inference.start()

        # Main loop
        start_time = time.time()
        while (time.time() - start_time) < duration_seconds:
            if not self.result_queue.empty():
                result = self.result_queue.get()

                # Check for alerts
                self.trigger_alert(result)

                # Display (optional)
                frame = result['frame']
                cv2.putText(
                    frame,
                    f"{result['class']}: {result['confidence']:.2f}",
                    (10, 30),
                    cv2.FONT_HERSHEY_SIMPLEX,
                    1,
                    (0, 255, 0),
                    2
                )
                cv2.imshow('Plant Monitor', frame)
                cv2.waitKey(1)

        # Cleanup
        self.camera.release()
        cv2.destroyAllWindows()

        # Print statistics
        self.print_stats()

    def print_stats(self):
        """Print performance statistics"""
        avg_inference = np.mean(self.stats['inference_time_ms'])
        fps = self.stats['frames_processed'] / sum(self.stats['inference_time_ms']) * 1000

        print("\n=== Performance Statistics ===")
        print(f"Frames processed: {self.stats['frames_processed']}")
        print(f"Average inference time: {avg_inference:.2f} ms")
        print(f"Effective FPS: {fps:.2f}")
        print("\nDetections:")
        for cls, count in self.stats['detections'].items():
            print(f"  {cls}: {count}")

# Example usage
if __name__ == "__main__":
    monitor = EdgePlantMonitor(
        model_path='plant_disease_model.tflite',
        camera_id=0
    )
    monitor.run(duration_seconds=300)  # Run for 5 minutes
```

---

## 6. Summary

Key concepts covered:
- IoT sensor networks for agricultural data collection
- Data pipeline architecture with ETL processes
- Time-series database selection and management
- Data quality assessment and cleaning techniques
- Edge computing for real-time processing

### Best Practices

1. **Sensor Networks:**
   - Choose appropriate communication protocols
   - Implement redundancy for critical sensors
   - Plan for sensor calibration and maintenance

2. **Data Pipelines:**
   - Design for fault tolerance
   - Implement comprehensive validation
   - Monitor pipeline health continuously

3. **Data Quality:**
   - Automate quality checks
   - Document cleaning procedures
   - Track data lineage

4. **Edge Computing:**
   - Process data close to source when latency matters
   - Optimize models for edge devices
   - Implement fail-safes for connectivity loss

---

## Practical Exercise

### Build a Complete Data Pipeline

**Objectives:**
1. Set up MQTT broker and sensors (simulated)
2. Implement data validation and cleaning
3. Store data in time-series database
4. Create data quality dashboard
5. Implement edge processing for alerts

**Deliverables:**
- Working MQTT data pipeline
- Data quality monitoring system
- Performance benchmarks
- Documentation

---

## Next Lesson Preview

**Lesson 3: Computer Vision for Plant Monitoring**

Topics:
- Image acquisition systems
- CNN architectures for agriculture
- Object detection and segmentation
- Plant phenotyping techniques
- Real-time vision processing

---

*End of Lesson 2*
