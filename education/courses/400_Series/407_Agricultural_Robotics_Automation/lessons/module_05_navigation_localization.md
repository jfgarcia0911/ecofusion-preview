# Module 5: Navigation and Localization

## Overview

Autonomous mobile robots (AMRs) require accurate localization (knowing where they are) and effective navigation (planning and following paths) to operate safely and efficiently in agricultural environments. This module covers SLAM algorithms, sensor fusion, path planning, and obstacle avoidance strategies.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

1. Implement SLAM algorithms for map building and localization
2. Fuse data from multiple sensors (LiDAR, cameras, IMU, encoders)
3. Plan collision-free paths using various algorithms
4. Detect and avoid dynamic obstacles in real-time
5. Integrate GPS/RTK for outdoor and large greenhouse operations
6. Optimize navigation parameters for agricultural environments
7. Deploy navigation stacks in ROS

---

## 1. Localization Fundamentals

### State Estimation

**Robot Pose:**
```
State vector: x = [x, y, θ]ᵀ

Where:
x, y = position in global frame (meters)
θ = heading angle (radians)

For 3D navigation (rare in CEA):
x = [x, y, z, roll, pitch, yaw]ᵀ
```

**Coordinate Frames:**
```
    Global Frame {G}          Robot Frame {R}
         ↑ y                       ↑ x_R
         │                         │
         │                         │
    ─────┼─────→ x             ────┼────→ y_R
         │                         │
         Origin                   Robot

Transform: P_G = R(θ) × P_R + t

R(θ) = [cos(θ) -sin(θ)]     t = [x]
       [sin(θ)  cos(θ)]         [y]
```

### Dead Reckoning (Odometry)

**Differential Drive Kinematics:**
```
    Left Wheel              Right Wheel
        ○                        ○
        │                        │
    ────┴────── L ──────────────┴────
              (wheelbase)

Given:
- v_L, v_R = left and right wheel velocities (m/s)
- L = wheelbase (m)

Robot velocities:
v = (v_R + v_L) / 2          (linear velocity)
ω = (v_R - v_L) / L          (angular velocity)

Pose update (discrete time):
x_{k+1} = x_k + v × cos(θ_k) × Δt
y_{k+1} = y_k + v × sin(θ_k) × Δt
θ_{k+1} = θ_k + ω × Δt
```

**Error Accumulation:**
```python
import numpy as np
import matplotlib.pyplot as plt

def simulate_odometry_drift():
    """
    Demonstrate odometry error accumulation

    Errors from:
    - Wheel slip
    - Uneven floors
    - Encoder noise
    - Wheel diameter variation
    """
    # True path: 10m square
    true_x = [0, 10, 10, 0, 0]
    true_y = [0, 0, 10, 10, 0]

    # Simulated odometry with 1% per-wheel error
    x, y, theta = 0, 0, 0
    odom_x, odom_y = [x], [y]

    for segment in range(4):
        # Intended: 10m straight, 90° turn
        for step in range(100):
            v = 0.1  # m/s
            dt = 0.1  # s

            # Add noise (1% std dev on velocity)
            v_noisy = v * (1 + np.random.normal(0, 0.01))

            x += v_noisy * np.cos(theta) * dt
            y += v_noisy * np.sin(theta) * dt
            odom_x.append(x)
            odom_y.append(y)

        # Turn
        theta += np.pi/2 + np.random.normal(0, 0.01)

    plt.figure(figsize=(8, 8))
    plt.plot(true_x, true_y, 'g--', linewidth=2, label='True Path')
    plt.plot(odom_x, odom_y, 'r-', linewidth=1, label='Odometry (with drift)')
    plt.xlabel('X (m)')
    plt.ylabel('Y (m)')
    plt.title('Odometry Drift Over Time')
    plt.legend()
    plt.axis('equal')
    plt.grid(True)
    plt.show()

simulate_odometry_drift()
```

**Result:** After 40m travel, odometry error typically 0.5-2m (1-5%)

**Solution:** Fuse odometry with absolute position sensors (GPS, landmarks, SLAM)

---

## 2. SLAM (Simultaneous Localization and Mapping)

### Concept

```
SLAM Problem: Without a map, how do you localize?
              Without a pose, how do you map?

Solution: Jointly estimate both!

    Robot with Sensors
           │
           ├─→ Scan Environment
           │
      ┌────▼────┐
      │  SLAM   │
      │Algorithm│
      └────┬────┘
           │
      ┌────┴────┐
      │         │
   Map ←──→  Pose
   (Landmarks,  (x, y, θ)
    occupancy)
```

### 2D LiDAR SLAM

**Scan Matching Algorithms:**

**A. ICP (Iterative Closest Point):**
```
Goal: Align current scan with previous scan or map

Algorithm:
1. For each point in current scan, find nearest point in reference
2. Compute transformation (rotation + translation) to minimize distance
3. Apply transformation
4. Repeat until convergence

Pros: Simple, accurate for small motions
Cons: Slow, local minima, requires good initial guess
```

**B. Cartographer (Google):**
```
Key Innovations:
- Submap-based approach (local submaps + loop closure)
- Scan-to-submap matching
- Branch-and-bound scan matching
- Pose graph optimization

Performance:
- Real-time on CPU
- Large-scale maps (>10,000 m²)
- Robust loop closure

ROS Integration: cartographer_ros package
```

**C. GMapping:**
```
Algorithm: Rao-Blackwellized Particle Filter

Maintains:
- Multiple pose hypotheses (particles)
- Map for each particle
- Resample based on scan likelihood

Pros: Probabilistically sound, handles uncertainty
Cons: Computationally expensive, particle depletion

ROS Integration: gmapping package
```

**ROS Implementation - Cartographer:**
```python
# Install: sudo apt install ros-noetic-cartographer-ros

# Launch file: cartographer_2d.launch
"""
<launch>
  <node name="cartographer_node" pkg="cartographer_ros"
        type="cartographer_node" args="
            -configuration_directory $(find my_robot_config)/configuration_files
            -configuration_basename my_robot_2d.lua">
    <remap from="scan" to="/lidar/scan" />
    <remap from="odom" to="/wheel_odometry" />
  </node>

  <node name="cartographer_occupancy_grid_node"
        pkg="cartographer_ros"
        type="cartographer_occupancy_grid_node" />
</launch>
"""

# Configuration: my_robot_2d.lua
configuration = """
include "map_builder.lua"
include "trajectory_builder.lua"

options = {
  map_builder = MAP_BUILDER,
  trajectory_builder = TRAJECTORY_BUILDER,
  map_frame = "map",
  tracking_frame = "base_link",
  published_frame = "odom",
  odom_frame = "odom",
  provide_odom_frame = false,
  publish_frame_projected_to_2d = true,
  use_odometry = true,
  use_nav_sat = false,
  use_landmarks = false,
  num_laser_scans = 1,
  num_multi_echo_laser_scans = 0,
  num_subdivisions_per_laser_scan = 1,
  num_point_clouds = 0,
  lookup_transform_timeout_sec = 0.2,
  submap_publish_period_sec = 0.3,
  pose_publish_period_sec = 5e-3,
  trajectory_publish_period_sec = 30e-3,
}

TRAJECTORY_BUILDER_2D.min_range = 0.1
TRAJECTORY_BUILDER_2D.max_range = 10.0
TRAJECTORY_BUILDER_2D.use_imu_data = false

MAP_BUILDER.use_trajectory_builder_2d = true

return options
"""
```

### Visual SLAM

**ORB-SLAM3:**
```
Features:
- Monocular, stereo, RGB-D, and multi-camera
- Real-time performance
- Loop closure and relocalization
- Map reuse across sessions

Pipeline:
    Camera
      ↓
  Extract ORB features (keypoints)
      ↓
  Track features frame-to-frame
      ↓
  Triangulate 3D points
      ↓
  Bundle adjustment (optimize poses and points)
      ↓
  Loop detection and correction
      ↓
  Map (sparse 3D points + camera poses)
```

**Advantages for Agriculture:**
```
✓ Works indoors without GPS
✓ No additional sensors (camera only)
✓ Rich visual information
✓ Lower cost than LiDAR

Challenges:
✗ Lighting sensitivity
✗ Repetitive textures (plant rows)
✗ Occlusions from moving leaves
✗ Computational load
```

---

## 3. Sensor Fusion

### Extended Kalman Filter (EKF)

**Fusing Odometry + IMU + GPS:**

```
State: x = [x, y, θ, v, ω]ᵀ
       (position, heading, velocities)

Prediction Step (from odometry):
x̂_{k|k-1} = f(x_{k-1}, u_k)  (motion model)
P_{k|k-1} = F_k P_{k-1} F_k^T + Q_k  (covariance prediction)

Update Step (from GPS/IMU):
K_k = P_{k|k-1} H_k^T (H_k P_{k|k-1} H_k^T + R_k)^{-1}  (Kalman gain)
x̂_{k|k} = x̂_{k|k-1} + K_k(z_k - h(x̂_{k|k-1}))  (state update)
P_{k|k} = (I - K_k H_k) P_{k|k-1}  (covariance update)

Where:
F_k = Jacobian of motion model
H_k = Jacobian of measurement model
Q_k = process noise covariance
R_k = measurement noise covariance
```

**ROS robot_localization Package:**
```yaml
# ekf_localization.yaml
ekf_localization_node:
  frequency: 30
  sensor_timeout: 0.1
  two_d_mode: true

  # Frame configuration
  map_frame: map
  odom_frame: odom
  base_link_frame: base_link
  world_frame: odom

  # Odometry source
  odom0: /wheel_odom
  odom0_config: [false, false, false,    # x, y, z
                 false, false, false,    # roll, pitch, yaw
                 true,  true,  false,    # vx, vy, vz
                 false, false, true,     # vroll, vpitch, vyaw
                 false, false, false]    # ax, ay, az

  # IMU source
  imu0: /imu/data
  imu0_config: [false, false, false,     # x, y, z
                false, false, true,      # roll, pitch, yaw
                false, false, false,     # vx, vy, vz
                false, false, true,      # vroll, vpitch, vyaw
                true,  true,  true]      # ax, ay, az

  # GPS source (converted to odometry)
  odom1: /gps/odom
  odom1_config: [true,  true,  false,    # x, y, z
                 false, false, false,    # roll, pitch, yaw
                 false, false, false,    # velocities
                 false, false, false,    # angular velocities
                 false, false, false]    # accelerations

  # Process noise covariance
  process_noise_covariance: [0.05, 0,    0,    ...]  # Tuning required

  # Initial estimate covariance
  initial_estimate_covariance: [1e-9, 0, 0, ...]
```

---

## 4. Path Planning

### Global Planners

**A. A* Algorithm:**
```
Heuristic search in occupancy grid

Cost function: f(n) = g(n) + h(n)
  g(n) = actual cost from start to n
  h(n) = heuristic cost from n to goal (e.g., Euclidean distance)

Algorithm:
1. Add start to open list
2. While open list not empty:
   a. Select node with lowest f(n)
   b. If goal reached, reconstruct path
   c. For each neighbor:
      - Calculate g(neighbor)
      - If better path found, update
      - Add to open list
3. Return path or failure

Complexity: O(b^d) where b=branching, d=depth
Optimality: Yes (with admissible heuristic)
```

**Python Implementation:**
```python
import heapq
import numpy as np

class AStarPlanner:
    def __init__(self, occupancy_grid, resolution):
        """
        A* path planner

        Args:
            occupancy_grid: 2D array (0=free, 1=occupied)
            resolution: meters per cell
        """
        self.grid = occupancy_grid
        self.resolution = resolution
        self.height, self.width = occupancy_grid.shape

    def plan(self, start, goal):
        """
        Find shortest path from start to goal

        Args:
            start: (x, y) in meters
            goal: (x, y) in meters

        Returns:
            path: List of (x, y) waypoints or None if no path
        """
        # Convert to grid coordinates
        start_cell = self.world_to_grid(start)
        goal_cell = self.world_to_grid(goal)

        # Check validity
        if not self.is_valid(start_cell) or not self.is_valid(goal_cell):
            return None

        # A* search
        open_set = []
        heapq.heappush(open_set, (0, start_cell))
        came_from = {}
        g_score = {start_cell: 0}

        while open_set:
            _, current = heapq.heappop(open_set)

            if current == goal_cell:
                # Reconstruct path
                path = [current]
                while current in came_from:
                    current = came_from[current]
                    path.append(current)
                path.reverse()
                # Convert back to world coordinates
                return [self.grid_to_world(p) for p in path]

            # Check neighbors (8-connected)
            for dx, dy in [(-1,-1), (-1,0), (-1,1), (0,-1), (0,1), (1,-1), (1,0), (1,1)]:
                neighbor = (current[0] + dx, current[1] + dy)

                if not self.is_valid(neighbor):
                    continue

                # Diagonal move cost: sqrt(2), else 1
                move_cost = 1.414 if (dx != 0 and dy != 0) else 1.0
                tentative_g = g_score[current] + move_cost

                if neighbor not in g_score or tentative_g < g_score[neighbor]:
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score = tentative_g + self.heuristic(neighbor, goal_cell)
                    heapq.heappush(open_set, (f_score, neighbor))

        return None  # No path found

    def heuristic(self, a, b):
        """Euclidean distance heuristic"""
        return np.sqrt((a[0] - b[0])**2 + (a[1] - b[1])**2)

    def is_valid(self, cell):
        """Check if cell is in bounds and free"""
        i, j = cell
        if i < 0 or i >= self.height or j < 0 or j >= self.width:
            return False
        return self.grid[i, j] == 0  # 0 = free

    def world_to_grid(self, pos):
        """Convert world (x, y) to grid (i, j)"""
        x, y = pos
        i = int(y / self.resolution)
        j = int(x / self.resolution)
        return (i, j)

    def grid_to_world(self, cell):
        """Convert grid (i, j) to world (x, y)"""
        i, j = cell
        x = j * self.resolution
        y = i * self.resolution
        return (x, y)
```

**B. RRT (Rapidly-exploring Random Tree):**
```
Sampling-based planner for high-dimensional spaces

Algorithm:
1. Initialize tree with start node
2. For k iterations:
   a. Sample random configuration q_rand
   b. Find nearest node in tree q_near
   c. Extend from q_near toward q_rand by step size
   d. If collision-free, add to tree
   e. If goal reached, return path

Advantages:
- Handles complex, high-dimensional spaces
- Probabilistically complete
- Fast for large spaces

Disadvantages:
- Paths are not optimal (jagged)
- Requires post-processing (smoothing)
```

### Local Planners

**Dynamic Window Approach (DWA):**
```
Considers robot dynamics (velocity, acceleration limits)

Algorithm:
1. Sample velocities (v, ω) within dynamic window
   - Respects max acceleration
   - Respects current velocity limits
2. For each sample, simulate trajectory (1-2 seconds)
3. Score trajectories:
   score = α·heading(v,ω) + β·dist(v,ω) + γ·velocity(v,ω)
     heading: alignment with goal
     dist: clearance to obstacles
     velocity: prefer higher speeds
4. Select highest-scoring admissible trajectory

Cycle: 10-20 Hz for real-time obstacle avoidance
```

**ROS move_base Configuration:**
```yaml
# dwa_local_planner_params.yaml
DWAPlannerROS:
  # Robot configuration
  max_vel_x: 0.5  # m/s
  min_vel_x: -0.1
  max_vel_theta: 1.0  # rad/s
  min_vel_theta: -1.0

  acc_lim_x: 1.0  # m/s²
  acc_lim_theta: 2.0  # rad/s²

  # Goal tolerance
  xy_goal_tolerance: 0.05  # m
  yaw_goal_tolerance: 0.05  # rad
  latch_xy_goal_tolerance: true

  # Forward simulation
  sim_time: 1.5  # seconds
  sim_granularity: 0.025  # seconds
  vx_samples: 10
  vtheta_samples: 20

  # Trajectory scoring
  path_distance_bias: 32.0  # Prefer staying on global path
  goal_distance_bias: 20.0  # Prefer moving toward goal
  occdist_scale: 0.02  # Prefer clearance from obstacles

  # Oscillation prevention
  oscillation_reset_dist: 0.05  # m
```

---

## 5. Obstacle Avoidance

### Static Obstacles

**Costmap Layers:**
```
    Static Layer (from map)
           +
    Obstacle Layer (from sensors)
           +
    Inflation Layer (safety margin)
           =
    Combined Costmap

Cost values:
  0-127:   Free space
  128-252: Inflated (cost increases near obstacles)
  253:     Inscribed (robot would collide)
  254:     Lethal (actual obstacle)
  255:     Unknown
```

### Dynamic Obstacles

**Tracking and Prediction:**
```python
class ObstacleTracker:
    """Track moving obstacles for prediction"""

    def __init__(self):
        self.tracks = {}  # id: {positions, velocities, timestamps}

    def update(self, detections):
        """
        Update tracks with new detections

        Args:
            detections: List of (x, y, timestamp)
        """
        # Simple nearest-neighbor data association
        for det in detections:
            matched = self.find_nearest_track(det)
            if matched is not None:
                self.tracks[matched].append(det)
            else:
                # New track
                new_id = len(self.tracks)
                self.tracks[new_id] = [det]

        # Prune old tracks
        self.prune_old_tracks(max_age=2.0)

    def predict_positions(self, t_horizon):
        """
        Predict obstacle positions at future time

        Args:
            t_horizon: Time horizon (seconds)

        Returns:
            predictions: List of (x, y) positions
        """
        predictions = []
        for track in self.tracks.values():
            if len(track) < 2:
                continue

            # Estimate velocity from recent positions
            p1, p2 = track[-2], track[-1]
            dt = p2[2] - p1[2]  # timestamp difference
            vx = (p2[0] - p1[0]) / dt
            vy = (p2[1] - p1[1]) / dt

            # Constant velocity prediction
            x_pred = p2[0] + vx * t_horizon
            y_pred = p2[1] + vy * t_horizon
            predictions.append((x_pred, y_pred))

        return predictions
```

---

## Summary

Navigation and localization enable autonomous mobile robots to operate safely in agricultural facilities. SLAM provides simultaneous mapping and localization without prior knowledge. Sensor fusion combines multiple imperfect sensors for robust state estimation. Path planning algorithms find collision-free routes, while local planners handle real-time obstacle avoidance. Proper tuning of navigation parameters is critical for reliable performance in the dynamic agricultural environment.

---

## Key Takeaways

1. Dead reckoning (odometry) accumulates error; requires correction from absolute sensors
2. SLAM jointly estimates robot pose and environment map
3. Sensor fusion (EKF, particle filter) combines multiple sensors for robust localization
4. Global planners (A*, RRT) find routes; local planners (DWA) handle real-time control
5. Costmaps encode obstacle information with safety margins
6. Dynamic obstacle tracking and prediction improves safety around humans
7. ROS provides mature navigation stacks (move_base, Nav2) for rapid deployment

---

*Continue to Module 6: Autonomous Mobile Robots (AMRs)*
