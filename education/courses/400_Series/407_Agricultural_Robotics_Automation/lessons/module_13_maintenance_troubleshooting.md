# Module 13: Maintenance and Troubleshooting

## Overview

Reliable operation of robotic systems requires systematic maintenance, rapid troubleshooting, and continuous monitoring. This module covers preventive maintenance schedules, predictive maintenance using sensor data, and common failure modes.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

1. Develop comprehensive preventive maintenance schedules
2. Implement predictive maintenance using sensor data and ML
3. Diagnose common mechanical, electrical, and software failures
4. Manage spare parts inventory and procurement
5. Perform calibration and alignment procedures
6. Plan and execute software updates safely
7. Implement emergency stop and recovery procedures

---

## Key Topics

### 1. Preventive Maintenance Programs
- Daily checks (visual inspection, sensors, safety systems)
- Weekly tasks (lubrication, cleaning, consumables)
- Monthly procedures (calibration, alignment, wear components)
- Annual overhauls (deep cleaning, major replacements)
- Documentation and CMMS integration

### 2. Predictive Maintenance
- Vibration analysis (motor bearings, gearboxes)
- Thermal monitoring (overheating detection)
- Current monitoring (motor load, anomalies)
- Performance degradation tracking (cycle time increases)
- Machine learning models for failure prediction

### 3. Common Failure Modes

**Mechanical:**
- Bearing wear (noise, vibration, temperature increase)
- Belt/chain stretch or breakage
- Gripper wear (reduced grip force, vacuum leaks)
- Collision damage (misalignment, bent components)

**Electrical:**
- Connector corrosion (high humidity environments)
- Cable fatigue (repeated flexing in moving parts)
- Power supply failures (overload, aging capacitors)
- Sensor drift or failure (calibration loss)

**Software:**
- Communication timeouts (network issues)
- Deadlocks in multi-threaded code
- Memory leaks (long-term operation)
- Version incompatibilities (after updates)

### 4. Troubleshooting Methodology

```
1. Identify Symptoms
   - Error codes/messages
   - Abnormal behaviors
   - Performance degradation

2. Isolate Problem Domain
   - Mechanical, electrical, or software?
   - Which subsystem?
   - Intermittent or consistent?

3. Generate Hypotheses
   - Most likely causes based on symptoms
   - Check recent changes (updates, adjustments)
   - Review historical data (has this happened before?)

4. Test Hypotheses
   - Systematically eliminate causes
   - Use diagnostic tools (multimeter, oscilloscope, logs)
   - Swap suspected components (if available)

5. Implement Fix
   - Address root cause, not just symptoms
   - Test thoroughly before returning to production
   - Document solution in knowledge base

6. Prevent Recurrence
   - Update maintenance schedules if needed
   - Add monitoring for early detection
   - Training for operators if user error involved
```

### 5. Spare Parts Management

**Critical Spares:**
- Motors and actuators
- Sensors (vision, proximity, force)
- Controllers and compute modules
- Grippers and end effectors
- Cables and connectors

**Inventory Strategy:**
- Stock levels based on failure rates and lead times
- Vendor relationships for rapid procurement
- 3D printing for custom mechanical parts
- Standardization to reduce SKU count

### 6. Calibration Procedures

**Camera Calibration:**
```
Frequency: Monthly or after any camera movement
Procedure:
1. Print calibration pattern (checkerboard)
2. Capture 20-50 images from various angles
3. Run calibration algorithm (OpenCV)
4. Validate with test images
5. Save calibration parameters
6. Document calibration date and results
```

**Robot TCP (Tool Center Point) Calibration:**
```
Frequency: After end effector changes or collisions
Procedure:
1. Attach precision calibration tool
2. Teach several poses pointing to same fixed point
3. Calculate TCP offset from robot flange
4. Validate with precision positioning task
5. Update robot configuration
```

**Force Sensor Calibration:**
```
Frequency: Quarterly
Procedure:
1. Zero sensor (no load)
2. Apply known weights/forces
3. Record sensor readings
4. Calculate calibration curve
5. Update software parameters
6. Test with actual workpiece
```

### 7. Software Updates

**Update Procedure:**
```
Pre-Update:
1. Backup current configuration
2. Document current performance metrics
3. Review release notes for breaking changes
4. Test update in simulation/dev system
5. Schedule downtime during low-activity period

Update:
6. Disable automatic restarts
7. Apply software update
8. Update configuration files if needed
9. Restart system components in correct order

Post-Update:
10. Run system checks (sensors, actuators, communications)
11. Execute test routines (motion, vision, picking)
12. Monitor for 24-48 hours
13. Compare performance to pre-update baseline
14. Document any issues or improvements
```

### 8. Emergency Procedures

**E-Stop Recovery:**
```
Checklist:
□ Identify cause of e-stop (safety hazard, operator error, fault)
□ Resolve underlying issue
□ Visually inspect robot for collision damage
□ Clear error in HMI/controller
□ Perform homing sequence if required
□ Test safety systems before resuming
□ Log incident and root cause
```

**Data Recovery:**
```
Backup Strategy:
- Real-time replication to redundant storage
- Daily backups of configuration and databases
- Weekly full system backups
- Offsite/cloud backup for disaster recovery

Recovery Time Objectives:
- Critical systems: <1 hour
- Production data: <4 hours
- Full system: <24 hours
```

---

## 9. Performance Monitoring Dashboard

```python
class RobotHealthMonitor:
    """
    Real-time monitoring and alerting for robot system health
    """
    def __init__(self):
        self.metrics = {
            'uptime': 0,
            'cycle_time': deque(maxlen=1000),
            'error_count': 0,
            'temperature': deque(maxlen=100),
            'vibration': deque(maxlen=100)
        }
        self.thresholds = {
            'cycle_time_max': 6.0,  # seconds
            'temperature_max': 65,   # Celsius
            'vibration_max': 5.0     # m/s²
        }

    def update(self, sensor_data):
        """
        Process latest sensor data and check for anomalies
        """
        self.metrics['uptime'] += 1
        self.metrics['cycle_time'].append(sensor_data['cycle_time'])
        self.metrics['temperature'].append(sensor_data['motor_temp'])
        self.metrics['vibration'].append(sensor_data['vibration'])

        # Check thresholds
        alerts = []

        if sensor_data['motor_temp'] > self.thresholds['temperature_max']:
            alerts.append({
                'severity': 'high',
                'message': f"Motor temperature {sensor_data['motor_temp']}°C exceeds limit",
                'action': 'Reduce duty cycle or inspect cooling system'
            })

        # Detect performance degradation
        recent_cycle_times = list(self.metrics['cycle_time'])[-100:]
        if len(recent_cycle_times) > 50:
            avg_recent = np.mean(recent_cycle_times)
            if avg_recent > self.thresholds['cycle_time_max']:
                alerts.append({
                    'severity': 'medium',
                    'message': f"Cycle time degraded to {avg_recent:.2f}s",
                    'action': 'Schedule maintenance check'
                })

        return alerts

    def generate_report(self):
        """
        Generate performance summary report
        """
        return {
            'uptime_hours': self.metrics['uptime'] / 3600,
            'avg_cycle_time': np.mean(self.metrics['cycle_time']),
            'error_count': self.metrics['error_count'],
            'max_temperature': max(self.metrics['temperature']),
            'availability': self.calculate_availability()
        }
```

---

## 10. Training Programs

**Technician Levels:**

**Level 1: Operator**
- Basic system operation
- Daily checks and cleaning
- Error recognition and reporting
- Emergency stop procedures
- Duration: 1-2 days

**Level 2: Maintenance Technician**
- Preventive maintenance execution
- Basic troubleshooting
- Component replacement (mechanical, electrical)
- Calibration procedures
- Duration: 1 week + ongoing OJT

**Level 3: System Engineer**
- Advanced diagnostics
- Software configuration and updates
- Performance optimization
- Integration with other systems
- Duration: 2-4 weeks + certification

---

## Summary

Effective maintenance strategies are critical for maximizing robot uptime and ROI. Preventive maintenance schedules prevent failures before they occur, while predictive maintenance using sensor data enables proactive intervention. Systematic troubleshooting methodology minimizes downtime. Proper training ensures personnel can maintain systems effectively. Comprehensive monitoring and documentation support continuous improvement.

---

## Key Takeaways

1. Preventive maintenance schedules prevent 70-80% of potential failures
2. Predictive maintenance detects issues before they cause downtime
3. Systematic troubleshooting methodology reduces MTTR (mean time to repair)
4. Spare parts inventory critical for rapid repairs (target <4 hour restoration)
5. Regular calibration maintains precision and product quality
6. Software updates require careful planning and testing
7. Performance monitoring enables data-driven maintenance decisions

---

*Continue to Module 14: ROI Analysis and Implementation Strategy*
