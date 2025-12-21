# Activity 1: Robot Kinematics Simulation Lab

## Objective
Implement forward and inverse kinematics for a 2-DOF planar robot arm and validate through simulation.

**Duration:** 3-4 hours
**Difficulty:** Intermediate
**Prerequisites:** Python programming, basic trigonometry

---

## Part 1: Setup (15 minutes)

### Required Software
```bash
# Install dependencies
pip install numpy matplotlib

# Optional: Install robotics toolbox
pip install robotics-toolbox-python
```

### Robot Specifications
```
Robot Type: 2-DOF Planar Arm (RR configuration)
Link 1 Length (L1): 400 mm
Link 2 Length (L2): 300 mm
Joint 1 Range: -180° to +180°
Joint 2 Range: -135° to +135°
```

---

## Part 2: Forward Kinematics (45 minutes)

### Task 2.1: Implement Forward Kinematics Function

Create a Python function that calculates end-effector position from joint angles.

```python
import numpy as np
import matplotlib.pyplot as plt

def forward_kinematics(theta1, theta2, L1=0.4, L2=0.3):
    """
    Calculate end-effector position for 2-DOF planar arm

    Args:
        theta1: Joint 1 angle (radians)
        theta2: Joint 2 angle (radians)
        L1: Link 1 length (meters)
        L2: Link 2 length (meters)

    Returns:
        (x, y): End-effector position
    """
    # TODO: Implement forward kinematics
    # x = L1 * cos(theta1) + L2 * cos(theta1 + theta2)
    # y = L1 * sin(theta1) + L2 * sin(theta1 + theta2)

    pass  # Replace with your implementation

# Test cases
test_cases = [
    (0, 0),                    # Both joints straight → x=0.7, y=0
    (np.pi/2, 0),             # Joint1 up, Joint2 straight → x=0, y=0.7
    (np.pi/4, np.pi/4),       # Both 45° → calculate expected
]

for theta1, theta2 in test_cases:
    x, y = forward_kinematics(theta1, theta2)
    print(f"θ1={np.degrees(theta1):.1f}°, θ2={np.degrees(theta2):.1f}° → x={x:.3f}m, y={y:.3f}m")
```

**Expected Output:**
```
θ1=0.0°, θ2=0.0° → x=0.700m, y=0.000m
θ1=90.0°, θ2=0.0° → x=0.000m, y=0.700m
θ1=45.0°, θ2=45.0° → x=0.000m, y=0.700m
```

### Task 2.2: Visualize Robot Configuration

Create a visualization function to draw the robot.

```python
def plot_robot(theta1, theta2, L1=0.4, L2=0.3):
    """
    Plot the robot configuration

    Args:
        theta1, theta2: Joint angles (radians)
        L1, L2: Link lengths (meters)
    """
    # Joint positions
    x0, y0 = 0, 0  # Base
    x1 = L1 * np.cos(theta1)
    y1 = L1 * np.sin(theta1)
    x2 = x1 + L2 * np.cos(theta1 + theta2)
    y2 = y1 + L2 * np.sin(theta1 + theta2)

    # Plot
    plt.figure(figsize=(8, 8))
    plt.plot([x0, x1], [y0, y1], 'b-o', linewidth=3, markersize=10, label='Link 1')
    plt.plot([x1, x2], [y1, y2], 'r-o', linewidth=3, markersize=10, label='Link 2')
    plt.plot(x2, y2, 'g*', markersize=20, label='End-effector')

    # Workspace circle
    circle = plt.Circle((0, 0), L1+L2, fill=False, linestyle='--', label='Max reach')
    plt.gca().add_patch(circle)

    plt.xlim(-0.8, 0.8)
    plt.ylim(-0.8, 0.8)
    plt.grid(True)
    plt.axis('equal')
    plt.xlabel('X (m)')
    plt.ylabel('Y (m)')
    plt.title(f'Robot Configuration: θ1={np.degrees(theta1):.1f}°, θ2={np.degrees(theta2):.1f}°')
    plt.legend()
    plt.show()

# Test visualization
plot_robot(np.pi/4, np.pi/6)
```

---

## Part 3: Inverse Kinematics (60 minutes)

### Task 3.1: Implement Inverse Kinematics Function

```python
def inverse_kinematics(x_target, y_target, L1=0.4, L2=0.3, elbow_up=True):
    """
    Calculate joint angles for desired end-effector position

    Args:
        x_target, y_target: Desired position (meters)
        L1, L2: Link lengths (meters)
        elbow_up: True for elbow-up configuration

    Returns:
        (theta1, theta2): Joint angles (radians) or None if unreachable
    """
    # TODO: Implement inverse kinematics
    # 1. Check if target is reachable
    # 2. Calculate theta2 using law of cosines
    # 3. Calculate theta1 using geometry

    r = np.sqrt(x_target**2 + y_target**2)

    # Check reachability
    if r > (L1 + L2) or r < abs(L1 - L2):
        print(f"Target ({x_target}, {y_target}) is unreachable!")
        return None

    # Calculate theta2
    # cos(theta2) = (x² + y² - L1² - L2²) / (2*L1*L2)
    # TODO: Complete implementation

    pass  # Replace with your implementation

# Test cases
targets = [
    (0.5, 0.3),
    (0.0, 0.7),
    (0.6, 0.0),
    (1.0, 0.0),  # Should fail (unreachable)
]

for x, y in targets:
    result = inverse_kinematics(x, y)
    if result:
        theta1, theta2 = result
        print(f"Target ({x}, {y}) → θ1={np.degrees(theta1):.1f}°, θ2={np.degrees(theta2):.1f}°")
        # Verify with forward kinematics
        x_fk, y_fk = forward_kinematics(theta1, theta2)
        error = np.sqrt((x - x_fk)**2 + (y - y_fk)**2)
        print(f"  Verification: FK gives ({x_fk:.3f}, {y_fk:.3f}), error = {error:.6f}m\n")
```

---

## Part 4: Workspace Analysis (30 minutes)

### Task 4.1: Plot Reachable Workspace

```python
def plot_workspace(L1=0.4, L2=0.3, n_samples=1000):
    """
    Plot the reachable workspace by sampling random configurations

    Args:
        L1, L2: Link lengths
        n_samples: Number of random configurations to sample
    """
    x_points, y_points = [], []

    for _ in range(n_samples):
        theta1 = np.random.uniform(-np.pi, np.pi)
        theta2 = np.random.uniform(-3*np.pi/4, 3*np.pi/4)  # -135° to +135°
        x, y = forward_kinematics(theta1, theta2, L1, L2)
        x_points.append(x)
        y_points.append(y)

    plt.figure(figsize=(8, 8))
    plt.scatter(x_points, y_points, s=1, alpha=0.5)
    plt.xlim(-0.8, 0.8)
    plt.ylim(-0.8, 0.8)
    plt.grid(True)
    plt.axis('equal')
    plt.xlabel('X (m)')
    plt.ylabel('Y (m)')
    plt.title('Reachable Workspace')
    plt.show()

plot_workspace()
```

### Task 4.2: Calculate Workspace Area

```python
def calculate_workspace_area(L1=0.4, L2=0.3):
    """
    Calculate theoretical workspace area (annulus)

    Returns:
        area: Workspace area in m²
    """
    R_outer = L1 + L2
    R_inner = abs(L1 - L2)
    area = np.pi * (R_outer**2 - R_inner**2)
    return area

area = calculate_workspace_area()
print(f"Theoretical workspace area: {area:.4f} m²")
print(f"Outer radius: {0.4 + 0.3:.1f} m")
print(f"Inner radius: {abs(0.4 - 0.3):.1f} m")
```

---

## Part 5: Trajectory Planning (45 minutes)

### Task 5.1: Point-to-Point Motion with Cubic Polynomial

```python
def cubic_trajectory(q0, qf, v0, vf, t, tf):
    """
    Cubic polynomial trajectory

    Args:
        q0: Initial position
        qf: Final position
        v0: Initial velocity
        vf: Final velocity
        t: Current time
        tf: Final time

    Returns:
        q, v: Position and velocity at time t
    """
    a0 = q0
    a1 = v0
    a2 = (3*(qf - q0) - (2*v0 + vf)*tf) / tf**2
    a3 = (-2*(qf - q0) + (v0 + vf)*tf) / tf**3

    q = a0 + a1*t + a2*t**2 + a3*t**3
    v = a1 + 2*a2*t + 3*a3*t**2

    return q, v

# Plan trajectory from (0.3, 0.4) to (0.5, 0.2)
start = (0.3, 0.4)
goal = (0.5, 0.2)

# Get joint angles for start and goal
theta_start = inverse_kinematics(*start)
theta_goal = inverse_kinematics(*goal)

if theta_start and theta_goal:
    # Generate trajectory
    tf = 5.0  # 5 seconds
    dt = 0.1  # 10 Hz
    times = np.arange(0, tf + dt, dt)

    theta1_traj, theta2_traj = [], []
    for t in times:
        theta1, _ = cubic_trajectory(theta_start[0], theta_goal[0], 0, 0, t, tf)
        theta2, _ = cubic_trajectory(theta_start[1], theta_goal[1], 0, 0, t, tf)
        theta1_traj.append(theta1)
        theta2_traj.append(theta2)

    # Plot trajectories
    plt.figure(figsize=(12, 4))

    plt.subplot(1, 2, 1)
    plt.plot(times, np.degrees(theta1_traj), label='θ1')
    plt.plot(times, np.degrees(theta2_traj), label='θ2')
    plt.xlabel('Time (s)')
    plt.ylabel('Joint Angle (deg)')
    plt.title('Joint Space Trajectory')
    plt.legend()
    plt.grid(True)

    # Convert to Cartesian space
    x_traj, y_traj = [], []
    for theta1, theta2 in zip(theta1_traj, theta2_traj):
        x, y = forward_kinematics(theta1, theta2)
        x_traj.append(x)
        y_traj.append(y)

    plt.subplot(1, 2, 2)
    plt.plot(x_traj, y_traj, 'b-', linewidth=2)
    plt.plot(start[0], start[1], 'go', markersize=10, label='Start')
    plt.plot(goal[0], goal[1], 'ro', markersize=10, label='Goal')
    plt.xlabel('X (m)')
    plt.ylabel('Y (m)')
    plt.title('Cartesian Space Path')
    plt.legend()
    plt.grid(True)
    plt.axis('equal')

    plt.tight_layout()
    plt.show()
```

---

## Deliverables

Submit the following:

1. **Code:** Complete Python script with all implementations
2. **Plots:**
   - Robot configuration visualization
   - Workspace plot
   - Trajectory plots (joint space and Cartesian space)
3. **Report:** Short document (1-2 pages) answering:
   - What is the workspace area?
   - How does joint 2 range affect workspace shape?
   - What happens at workspace boundaries (singularities)?
   - Compare computational cost of FK vs. IK

---

## Bonus Challenges

1. **Multiple Solutions:** Modify IK to return both elbow-up and elbow-down solutions
2. **3-DOF Arm:** Extend to 3-DOF planar arm (RRR)
3. **Obstacle Avoidance:** Add circular obstacle and plan trajectory around it
4. **Animation:** Create animated visualization of robot following trajectory

---

## Solution Hints

**Forward Kinematics:**
```python
x = L1 * np.cos(theta1) + L2 * np.cos(theta1 + theta2)
y = L1 * np.sin(theta1) + L2 * np.sin(theta1 + theta2)
```

**Inverse Kinematics:**
```python
cos_theta2 = (x_target**2 + y_target**2 - L1**2 - L2**2) / (2 * L1 * L2)
theta2 = np.arccos(cos_theta2) if elbow_up else -np.arccos(cos_theta2)
k1 = L1 + L2 * np.cos(theta2)
k2 = L2 * np.sin(theta2)
theta1 = np.arctan2(y_target, x_target) - np.arctan2(k2, k1)
```

---

**Good luck!**
