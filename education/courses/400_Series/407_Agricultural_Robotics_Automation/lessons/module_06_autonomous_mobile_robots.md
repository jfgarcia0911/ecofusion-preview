# Module 6: Autonomous Mobile Robots (AMRs)

## Overview

Autonomous Mobile Robots transport materials, carry sensors for inspection, and serve as mobile platforms for manipulation tasks in CEA facilities. This module covers AMR platforms, fleet management, battery systems, and integration with facility infrastructure.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

1. Select appropriate AMR platforms for agricultural applications
2. Design wheel configurations for different terrain and maneuverability needs
3. Implement fleet management and traffic control systems
4. Optimize battery sizing and charging infrastructure
5. Integrate AMRs with facility automation systems
6. Ensure safe human-robot interaction in shared workspaces
7. Calculate ROI for AMR deployments

---

## 1. AMR Platform Types

### Drive Configurations

**A. Differential Drive:**
```
     ╔═══════════╗
     ║    AMR    ║
     ╠═══════════╣
     ║ ○       ○ ║  ← Driven wheels (independent motors)
     ╚═══╤═══╤═══╝
         │   │
       Caster Caster

Kinematics:
v = r(ωR + ωL) / 2      Linear velocity
ω = r(ωR - ωL) / L      Angular velocity

Where:
r = wheel radius
ωR, ωL = right/left wheel angular velocities
L = wheelbase

Advantages:
✓ Simple mechanics
✓ Low cost
✓ Reliable
✓ Zero turning radius (rotate in place)

Disadvantages:
✗ Cannot move sideways
✗ Requires multi-point turns in tight spaces
✗ Casters can get stuck in debris

Agricultural Applications:
- Row crop inspection
- Bin transport between zones
- Long-distance hauling
```

**B. Mecanum Wheels:**
```
    ╔═══╗═══╗
    ║╱╲ ║╱╲ ║  ← Rollers at 45° angle
    ║  ●║  ●║
    ╠═══╬═══╣
    ║  ●║  ●║
    ║╲╱ ║╲╱ ║
    ╚═══╩═══╝

Motion capabilities (4-wheel):
- Forward/backward
- Strafe left/right
- Rotate in place
- Diagonal motion
- Combined motions

Force vectors:
  Each wheel contributes force at 45° to roller axis

Advantages:
✓ Holonomic motion (move any direction without rotating)
✓ Excellent maneuverability in tight spaces
✓ Precise positioning

Disadvantages:
✗ Complex control
✗ Expensive
✗ Reduced traction (only ~70% of normal wheel)
✗ Sensitive to floor irregularities
✗ Higher maintenance (roller bearings)

Agricultural Applications:
- Dense vertical farm racks
- Precise docking to workstations
- Confined greenhouse aisles
```

**C. Omnidirectional (Omni) Wheels:**
```
    Similar to Mecanum but rollers perpendicular to main wheel
    Provides true omnidirectional motion

Trade-offs:
+ Simpler than Mecanum
+ Better traction than Mecanum
- Still complex control
- Floor condition sensitive
```

**D. Ackermann Steering:**
```
         ╔═══════╗
         ║  AMR  ║
    ┌────╫───────╫────┐
    │    ║       ║    │
    └○───╨───────╨───○┘
     └─Steered   └─Steered
      Front       Front

Like a car: front wheels steer, rear wheels drive

Advantages:
✓ High speed capability
✓ Good outdoor traction
✓ Efficient for long distances

Disadvantages:
✗ Large turning radius
✗ Complex mechanism
✗ Not suitable for tight spaces

Agricultural Applications:
- Outdoor field robotics
- Large greenhouse logistics
- Inter-facility transport
```

### Comparison Matrix

```
Configuration     Maneuverability  Speed   Cost   Complexity  CEA Suitability
===============================================================================
Differential      Medium          High    Low    Low         High (general)
Mecanum          Very High       Medium  High   High        Very High (VF)
Omnidirectional  Very High       Medium  High   High        High (VF)
Ackermann        Low             Very High Medium Medium    Low (outdoors)
```

---

## 2. AMR System Components

### Hardware Architecture

```
    ┌─────────────────────────────────────────┐
    │         Main Computer (SBC/PC)          │
    │  - Navigation stack                     │
    │  - Perception processing                │
    │  - Fleet communication                  │
    └──────────┬──────────────────────────────┘
               │ (Ethernet, CAN, Serial)
    ┌──────────┴──────────┬────────────┬──────────┐
    │                     │            │          │
┌───▼───┐           ┌─────▼────┐  ┌───▼───┐  ┌──▼───┐
│ Motor │           │ Sensors  │  │ Safety│  │Power │
│Control│           │ - LiDAR  │  │- E-stop  │ BMS  │
│  MCU  │           │ - Cameras│  │- Bumpers│      │
└───┬───┘           │ - IMU    │  └───────┘  └──────┘
    │               │ - Encoders│
┌───▼───────┐       └──────────┘
│ Motors    │
│ (4× BLDC) │
└───────────┘
```

**Single Board Computer Options:**
```
Platform          CPU              RAM    GPU    Power   Cost    Use Case
=============================================================================
Raspberry Pi 4    4× Cortex-A72   4GB    None   15W     $55     Basic AMR
Jetson Nano       4× Cortex-A57   4GB    128c   10W     $99     +Vision
Jetson Xavier NX  6× Carmel       8GB    384c   15W     $399    Advanced
Intel NUC         4× i7           16GB   Iris   65W     $600    Full nav
```

### Safety Systems

**Hierarchical Safety:**
```
Level 1: Mechanical Bumpers
    - Physical contact switches
    - Trigger immediate stop
    - Last line of defense

Level 2: Safety-Rated Laser Scanners
    - Define protective and warning fields
    - Speeds reduction in warning zone
    - Stop in protective zone
    - Compliant with ISO 13849 (PLd or PLe)

Level 3: Navigational Sensors
    - Standard LiDAR, cameras
    - Object detection and avoidance
    - Path planning around obstacles

Level 4: Software Watchdogs
    - Monitor system health
    - Detect frozen processes
    - Enforce timeout limits
```

**Safety Field Configuration:**
```
    Robot center
         ●
         │
    ┌────┼────┐  ← Protective field (0.5m)
    │    │    │    STOP if intrusion
    │ ┌──┼──┐ │
    │ │  │  │ │  ← Warning field (1.0m)
    │ │  ●  │ │    SLOW if intrusion
    │ └─────┘ │
    └─────────┘

Detection: Safety-rated 2D LiDAR (e.g., SICK S300)
Response time: <100 ms
Fail-safe: Default to STOP on sensor failure
```

---

## 3. Battery and Power Management

### Battery Technologies

```
Chemistry    Energy Density  Cycle Life  Cost  C-Rate  Safety  Agriculture Use
=================================================================================
Lead-Acid    30-50 Wh/kg    300-500     Low   0.2C    Good    Legacy systems
NiMH         60-120 Wh/kg   500-1000    Med   1C      Good    Rare
Li-ion       150-250 Wh/kg  500-2000    Med   1-3C    Fair    Standard
LiFePO4      90-160 Wh/kg   2000-5000   Med   1-3C    Excel   Preferred (CEA)
```

**LiFePO4 Advantages for Agriculture:**
- Intrinsically safer (no thermal runaway)
- Long cycle life (10+ years)
- Stable performance across temperatures
- Fast charging capability
- Good calendar life (low self-discharge)

### Battery Sizing

**Energy Requirement Calculation:**
```
Example: Transport AMR in 50,000 sq ft facility

Operating Profile:
- Duty cycle: 8 hours/day
- Speed: 1.0 m/s average
- Distance: 8 hr × 3600 s/hr × 1 m/s = 28,800 m/day
- Payload: 100 kg average

Power Consumption:
1. Drivetrain: P_drive = (m + m_payload) × g × μ × v / η
   = (50 + 100) × 9.81 × 0.05 × 1.0 / 0.85
   = 86.7 W

2. Electronics (computer, sensors, etc.): 50 W
3. Total average: ~140 W

Energy Required:
E_required = P_avg × t_operation
= 140 W × 8 hr
= 1,120 Wh = 1.12 kWh

Safety Factor: 1.5× (account for aging, cold, etc.)
E_battery = 1.12 × 1.5 = 1.68 kWh

Battery Selection:
- Voltage: 48V (common for AMRs)
- Capacity: 1680 Wh / 48 V = 35 Ah
- Configuration: 15S2P (15 series × 2 parallel, 3.3V cells)
- Total cells: 30 × 3.2V, 70Ah → 48V, 35Ah
- Approximate cost: $600-900
```

### Charging Infrastructure

**Charging Methods:**

**A. Manual Plug-In:**
```
Pros:
✓ Simple, low cost
✓ Flexible charging location
✓ Easy maintenance

Cons:
✗ Requires human intervention
✗ Robot downtime during charging
✗ Scheduling complexity

Suitable for:
- Small fleets (<5 robots)
- Single-shift operations
- Low utilization
```

**B. Automatic Docking Station:**
```
    Wall-Mounted Charger
         ║ ║
    ┌────╬─╬────┐
    │    ║ ║    │  ← Contact plates
    │  ┌─╨─╨─┐  │
    │  │     │  │
    │  │ AMR │  │  ← Docking alignment
    │  │     │  │
    │  └─────┘  │
    └───────────┘

Docking Sequence:
1. Navigate to charging area (visual markers or RF beacon)
2. Fine alignment (camera or sensors)
3. Reverse into dock
4. Verify electrical contact
5. Begin charging
6. Monitor progress
7. Undock when complete or needed

Pros:
✓ Fully autonomous
✓ Opportunity charging (quick top-ups)
✓ Scalable to large fleets

Cons:
✗ Higher cost ($1,000-3,000 per station)
✗ Requires precision docking
✗ Maintenance of contacts

Suitable for:
- Medium to large fleets
- 24/7 operations
- High utilization
```

**C. Wireless (Inductive) Charging:**
```
    Floor-Mounted Coil          Robot-Mounted Coil
         ═══════                      ═══════
            ║                            ║
         Ground                       Battery

Principle: Electromagnetic induction (like Qi phone charging)

Pros:
✓ No physical contacts (wear-free)
✓ Moisture/dirt tolerant
✓ Simple docking (less precision needed)

Cons:
✗ Lower efficiency (~85-90% vs 95%+ wired)
✗ Higher cost ($2,000-5,000 per station)
✗ EMI considerations
✗ Slower charging rate

Suitable for:
- Harsh/wet environments
- High-reliability needs
- Premium deployments
```

**Charging Strategy:**

```python
class ChargingManager:
    def __init__(self, fleet):
        self.fleet = fleet
        self.charge_threshold_low = 20  # % battery
        self.charge_threshold_high = 80  # % battery (for battery longevity)

    def update(self):
        """
        Monitor fleet and dispatch charging as needed

        Strategy:
        - Opportunistic charging during idle periods
        - Force charging below threshold
        - Rotate fleet to balance battery aging
        """
        for robot in self.fleet:
            soc = robot.get_battery_soc()  # State of charge (%)

            if robot.is_idle():
                if soc < self.charge_threshold_high:
                    # Opportunity charge
                    self.send_to_charger(robot, priority='low')

            elif soc < self.charge_threshold_low:
                # Critical: interrupt current task
                self.send_to_charger(robot, priority='high')

            elif robot.has_pending_tasks():
                # Predict if charge sufficient for next task
                next_task = robot.get_next_task()
                energy_needed = self.estimate_energy(next_task)
                energy_available = robot.get_battery_energy()

                if energy_available < energy_needed * 1.2:  # 20% margin
                    self.send_to_charger(robot, priority='medium')

    def send_to_charger(self, robot, priority):
        """Send robot to nearest available charger"""
        charger = self.find_nearest_free_charger(robot.position)
        if charger is None:
            # No free charger, queue
            self.queue_for_charging(robot, priority)
        else:
            robot.navigate_to(charger.position)
            robot.dock_and_charge()
            charger.occupied = True
```

---

## 4. Fleet Management

### Task Allocation

**Multi-Robot Task Assignment Problem:**

```
Given:
- N robots with positions {r1, r2, ..., rN}
- M tasks with locations {t1, t2, ..., tM}
- Cost matrix C[i,j] = cost for robot i to do task j

Objective:
Minimize total cost while assigning each task to exactly one robot

Approaches:

1. Greedy Assignment (simple, fast):
   - Assign nearest available robot to each task
   - O(N×M), suboptimal

2. Hungarian Algorithm (optimal):
   - Solve assignment problem optimally
   - O(N³), works for moderate fleet sizes

3. Market-Based (distributed):
   - Robots "bid" on tasks
   - Iterative auction process
   - Scalable, handles dynamics
```

**Implementation:**
```python
from scipy.optimize import linear_sum_assignment
import numpy as np

class FleetManager:
    def __init__(self, robots):
        self.robots = robots
        self.task_queue = []

    def assign_tasks(self):
        """
        Optimally assign queued tasks to available robots

        Uses Hungarian algorithm for minimum cost assignment
        """
        available_robots = [r for r in self.robots if r.is_idle()]
        pending_tasks = self.task_queue

        if not available_robots or not pending_tasks:
            return

        n_robots = len(available_robots)
        n_tasks = len(pending_tasks)

        # Build cost matrix
        cost_matrix = np.zeros((n_robots, n_tasks))
        for i, robot in enumerate(available_robots):
            for j, task in enumerate(pending_tasks):
                # Cost = travel time + task duration
                travel_time = self.estimate_travel_time(robot.position, task.location)
                task_time = task.estimated_duration
                cost_matrix[i, j] = travel_time + task_time

        # Solve assignment problem
        robot_indices, task_indices = linear_sum_assignment(cost_matrix)

        # Assign tasks
        for r_idx, t_idx in zip(robot_indices, task_indices):
            robot = available_robots[r_idx]
            task = pending_tasks[t_idx]
            robot.assign_task(task)
            self.task_queue.remove(task)

        print(f"Assigned {len(robot_indices)} tasks to {len(robot_indices)} robots")
```

### Traffic Management

**Collision Prevention:**

```
Strategies:

1. Temporal Coordination (Time-based):
   - Pre-plan when each robot uses each zone
   - Reserve time slots
   - Requires accurate timing

2. Spatial Coordination (Zone-based):
   - Divide facility into zones
   - Only one robot per zone
   - Simple but inefficient

3. Velocity Tuning:
   - Slow down when robots approach
   - Speed up when clear
   - Smooth traffic flow

4. Priority-Based:
   - Higher priority robots have right-of-way
   - Emergency/critical tasks get priority
   - Prevent deadlocks
```

**Deadlock Prevention:**

```
Scenario: Two robots face-to-face in narrow aisle

    Robot A →     ← Robot B
    ════════════════════════
         Narrow Aisle

Solutions:

A. Priority-Based:
   - Robot with lower priority reverses
   - Based on task urgency, battery level, etc.

B. Alternate Access:
   - Odd-numbered robots use aisle during odd minutes
   - Even-numbered robots during even minutes
   - Simple but may reduce efficiency

C. Reservation System:
   - Robot requests aisle access
   - Granted only if no opposite-direction robot
   - Release when exiting aisle

D. Replanning:
   - Detect potential deadlock
   - One robot replans alternate route
   - May increase travel distance
```

---

## 5. Integration with Facility Systems

### Communication Protocols

**MQTT for Fleet Coordination:**
```python
import paho.mqtt.client as mqtt
import json

class RobotMQTTClient:
    def __init__(self, robot_id, broker_address="192.168.1.100"):
        self.robot_id = robot_id
        self.client = mqtt.Client(client_id=f"robot_{robot_id}")
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.client.connect(broker_address, port=1883)

    def on_connect(self, client, userdata, flags, rc):
        print(f"Robot {self.robot_id} connected to MQTT broker")

        # Subscribe to relevant topics
        client.subscribe(f"fleet/robot/{self.robot_id}/command")
        client.subscribe("fleet/broadcast")

    def on_message(self, client, userdata, msg):
        payload = json.loads(msg.payload.decode())

        if msg.topic.endswith("/command"):
            self.handle_command(payload)
        elif msg.topic == "fleet/broadcast":
            self.handle_broadcast(payload)

    def publish_status(self, status_data):
        """Publish robot status to fleet manager"""
        topic = f"fleet/robot/{self.robot_id}/status"
        payload = json.dumps({
            "robot_id": self.robot_id,
            "timestamp": time.time(),
            "position": status_data['position'],
            "battery": status_data['battery'],
            "state": status_data['state'],
            "current_task": status_data.get('task_id', None)
        })
        self.client.publish(topic, payload, qos=1)

    def handle_command(self, command):
        """Execute command from fleet manager"""
        cmd_type = command.get('type')

        if cmd_type == 'goto':
            destination = command['destination']
            self.navigate_to(destination)

        elif cmd_type == 'pickup':
            item_id = command['item_id']
            location = command['location']
            self.pickup_item(item_id, location)

        elif cmd_type == 'charge':
            self.goto_charging_station()

    def start(self):
        """Start MQTT client loop"""
        self.client.loop_start()
```

### Interfacing with Warehouse Management Systems (WMS)

```
AMR Fleet ←→ Fleet Management System (FMS) ←→ WMS/MES

Data Flow:

WMS → FMS:
- Transport orders (pick from A, deliver to B)
- Inventory requests
- Priority updates

FMS → WMS:
- Task completion confirmations
- Transport status updates
- Robot availability

FMS → AMRs:
- Task assignments
- Route waypoints
- Priority adjustments

AMRs → FMS:
- Position updates
- Battery status
- Task progress
- Fault reports
```

---

## 6. Case Study: MiR Robots in Vertical Farm

**Deployment:**
- Facility: 30,000 sq ft vertical farm
- Fleet: 3× MiR100 AMRs
- Tasks: Rack-to-processing transport, harvest bin logistics
- Operating hours: 18 hours/day

**Results:**
```
Metric                    Before AMRs    With AMRs    Improvement
========================================================================
Labor (FTE)               2.5            1.0          60% reduction
Transport time (avg)      15 min         8 min        47% reduction
Daily transport volume    80 racks       120 racks    50% increase
Incidents                 ~monthly       None         100% reduction
ROI period                -              18 months    -
```

**Lessons Learned:**
- Floor cleanliness critical (debris jams wheels)
- Wireless coverage must be continuous
- Human training reduces initial skepticism
- Predictive maintenance reduces downtime

---

## Summary

Autonomous Mobile Robots transform material handling in CEA facilities, providing flexible, scalable, and efficient transport. Platform selection depends on maneuverability needs, with differential drive suitable for most applications and Mecanum wheels for tight spaces. Robust safety systems ensure safe operation alongside humans. Fleet management software optimizes task allocation and prevents collisions. Proper battery sizing and charging infrastructure ensure continuous operation.

---

## Key Takeaways

1. Differential drive offers simplicity and reliability for most CEA applications
2. Mecanum/omnidirectional wheels provide superior maneuverability in confined vertical farms
3. Multi-layered safety systems (mechanical, sensors, software) ensure safe operation
4. LiFePO4 batteries preferred for agricultural use (safety, longevity)
5. Automatic charging stations enable 24/7 operations with minimal human intervention
6. Fleet management software is essential for multi-robot deployments
7. Integration with WMS/MES creates end-to-end automation

---

*Continue to Module 7: Harvesting Robots*
