# Module 2: Robot Kinematics and Dynamics

## Overview

This module covers the mathematical foundations of robot motion, including forward and inverse kinematics, Jacobian analysis, dynamics, and trajectory planning. Understanding these concepts is essential for programming, controlling, and optimizing robotic manipulators used in agricultural applications.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

By the end of this module, you will be able to:

1. Derive forward kinematic equations using Denavit-Hartenberg (DH) parameters
2. Solve inverse kinematics problems for agricultural manipulators
3. Calculate Jacobian matrices for velocity and force analysis
4. Apply dynamics equations for trajectory planning
5. Analyze manipulator workspace and identify singularities
6. Optimize motion profiles for agricultural tasks
7. Implement kinematic solutions in code (Python/MATLAB)

---

## 1. Coordinate Frames and Transformations

### Homogeneous Transformation Matrices

A 4×4 matrix representing position and orientation:

```
    ┌                    ┐
    │ r11  r12  r13  px  │
T = │ r21  r22  r23  py  │
    │ r31  r32  r33  pz  │
    │  0    0    0    1  │
    └                    ┘

Where:
- R = [rij] is the 3×3 rotation matrix
- p = [px, py, pz]ᵀ is the position vector
```

### Basic Transformations

**Translation along x-axis by distance a:**
```
        ┌                ┐
        │ 1  0  0  a     │
Trans = │ 0  1  0  0     │
        │ 0  0  1  0     │
        │ 0  0  0  1     │
        └                ┘
```

**Rotation about z-axis by angle θ:**
```
       ┌                        ┐
       │ cos(θ) -sin(θ)  0  0   │
Rot_z =│ sin(θ)  cos(θ)  0  0   │
       │   0       0     1  0   │
       │   0       0     0  1   │
       └                        ┘
```

### Composition of Transformations

Multiple transformations are combined by matrix multiplication:

```
T_final = T₁ × T₂ × T₃ × ... × Tₙ

Note: Order matters! Matrix multiplication is NOT commutative
```

**Example: Agricultural Gantry Robot**
```
Base Frame {0} → X-axis carriage {1} → Y-axis carriage {2} → Z-axis tool {3}

T₀³ = T₀¹ × T₁² × T₂³

Position of tool tip in base frame = T₀³ × [0, 0, 0, 1]ᵀ
```

---

## 2. Denavit-Hartenberg (DH) Parameters

### Standard DH Convention

Each joint is described by 4 parameters:

| Parameter | Description                           | Type        |
|-----------|---------------------------------------|-------------|
| θᵢ        | Joint angle about zᵢ₋₁               | Variable (R)|
| dᵢ        | Link offset along zᵢ₋₁               | Variable (P)|
| aᵢ        | Link length along xᵢ                 | Fixed       |
| αᵢ        | Link twist about xᵢ                  | Fixed       |

R = Revolute joint, P = Prismatic joint

### DH Transformation Matrix

```
      ┌                                                        ┐
      │ cos(θ) -sin(θ)cos(α)  sin(θ)sin(α)   a·cos(θ)        │
Tⁱ⁻¹ᵢ │ sin(θ)  cos(θ)cos(α) -cos(θ)sin(α)   a·sin(θ)        │
      │   0        sin(α)         cos(α)          d           │
      │   0          0              0            1           │
      └                                                        ┘
```

### Example: 3-DOF Transplanting Robot

```
Joint Layout (SCARA-type):

         Joint 2
           ║
    Link 2 ║
           ║
     Joint 1 ─── Link 1 ─── Joint 0
           │                   │
           │                   │
         Base                Base

```

**DH Parameter Table:**

| Joint | θ        | d    | a    | α   |
|-------|----------|------|------|-----|
| 1     | θ₁*      | 0    | L₁   | 0   |
| 2     | θ₂*      | 0    | L₂   | 0   |
| 3     | 0        | d₃*  | 0    | 0   |

*Variable parameters (joint angles or displacements)

**Forward Kinematics:**

```
T₀³ = T₀¹(θ₁) × T₁²(θ₂) × T₂³(d₃)

End-effector position:
x = L₁cos(θ₁) + L₂cos(θ₁+θ₂)
y = L₁sin(θ₁) + L₂sin(θ₁+θ₂)
z = d₃
```

---

## 3. Forward Kinematics

### Definition

Given joint angles/positions → Calculate end-effector pose

**General Procedure:**
1. Establish DH parameters
2. Form individual transformation matrices
3. Multiply matrices: T₀ⁿ = T₀¹ × T₁² × ... × Tⁿ⁻¹ⁿ
4. Extract position and orientation from final matrix

### Example: 6-DOF Articulated Arm (Common in Agricultural Applications)

```
Robot Configuration:

         ╔═══╗ ← Tool (end-effector)
         ║   ║
      6──╫───╫──
         ║   ║
      5──╫───╫──
         ║   ║
      4──╨───╨──
         │
      3──┼──
         │
      2──┼──
         │
      1──┴── Base

```

**DH Parameter Table:**

| Joint | θ      | d    | a    | α      |
|-------|--------|------|------|--------|
| 1     | θ₁*    | d₁   | 0    | 90°    |
| 2     | θ₂*    | 0    | a₂   | 0°     |
| 3     | θ₃*    | 0    | a₃   | 0°     |
| 4     | θ₄*    | d₄   | 0    | 90°    |
| 5     | θ₅*    | 0    | 0    | -90°   |
| 6     | θ₆*    | d₆   | 0    | 0°     |

**Python Implementation:**

```python
import numpy as np

def dh_transform(theta, d, a, alpha):
    """Create DH transformation matrix"""
    ct = np.cos(theta)
    st = np.sin(theta)
    ca = np.cos(alpha)
    sa = np.sin(alpha)

    return np.array([
        [ct, -st*ca,  st*sa, a*ct],
        [st,  ct*ca, -ct*sa, a*st],
        [0,   sa,     ca,    d   ],
        [0,   0,      0,     1   ]
    ])

def forward_kinematics(joint_angles, dh_params):
    """Calculate end-effector pose from joint angles"""
    T = np.eye(4)

    for i, (theta, d, a, alpha) in enumerate(dh_params):
        # Use joint angle for revolute, or d for prismatic
        theta_actual = joint_angles[i] + theta
        T = T @ dh_transform(theta_actual, d, a, alpha)

    return T

# Example usage for 3-DOF SCARA
dh_params = [
    (0, 0, 0.4, 0),      # Link 1: 400mm
    (0, 0, 0.3, 0),      # Link 2: 300mm
    (0, 0, 0, 0)         # Prismatic joint
]

joint_angles = [np.pi/4, np.pi/6, -0.1]  # θ₁, θ₂, d₃
T = forward_kinematics(joint_angles, dh_params)

print(f"End-effector position: {T[0:3, 3]}")
print(f"End-effector orientation:\n{T[0:3, 0:3]}")
```

---

## 4. Inverse Kinematics

### Definition

Given desired end-effector pose → Calculate required joint angles

**Challenges:**
- May have multiple solutions
- May have no solution (outside workspace)
- Analytical solutions only for certain geometries
- Numerical methods often required

### Analytical Approach: Geometric Method

**Example: 2-DOF Planar Arm (Simplified Harvesting Arm)**

```
Given: Target position (x, y)
Find: Joint angles (θ₁, θ₂)

      y
      ↑
      │    Target (x,y)
      │      ●
      │     /│
   L₂ │    / │
      │   /  │
      │  /   │
      │ /θ₂  │
Joint 2●──────┤
      │╲      │
   L₁ │ ╲     │
      │  ╲    │
      │   ╲θ₁ │
      └────●──┴──→ x
        Joint 1
```

**Solution:**

```
Step 1: Find θ₂ using law of cosines
  r² = L₁² + L₂² - 2·L₁·L₂·cos(180° - θ₂)
  where r = √(x² + y²)

  cos(θ₂) = (x² + y² - L₁² - L₂²) / (2·L₁·L₂)
  θ₂ = ±arccos(...)  [Two solutions: elbow up/down]

Step 2: Find θ₁
  θ₁ = atan2(y, x) - atan2(L₂·sin(θ₂), L₁ + L₂·cos(θ₂))
```

**Python Implementation:**

```python
def inverse_kinematics_2dof(x, y, L1, L2, elbow_up=True):
    """
    Analytical IK for 2-DOF planar arm

    Args:
        x, y: Target position
        L1, L2: Link lengths
        elbow_up: True for elbow-up configuration

    Returns:
        (theta1, theta2) or None if unreachable
    """
    r_squared = x**2 + y**2

    # Check if target is reachable
    if r_squared > (L1 + L2)**2 or r_squared < (L1 - L2)**2:
        return None  # Target outside workspace

    # Calculate θ₂
    cos_theta2 = (r_squared - L1**2 - L2**2) / (2 * L1 * L2)

    if elbow_up:
        theta2 = np.arccos(cos_theta2)
    else:
        theta2 = -np.arccos(cos_theta2)

    # Calculate θ₁
    k1 = L1 + L2 * np.cos(theta2)
    k2 = L2 * np.sin(theta2)
    theta1 = np.arctan2(y, x) - np.arctan2(k2, k1)

    return theta1, theta2

# Example
L1, L2 = 0.4, 0.3  # meters
x, y = 0.5, 0.4
angles = inverse_kinematics_2dof(x, y, L1, L2)
print(f"Joint angles: θ₁={np.degrees(angles[0]):.1f}°, θ₂={np.degrees(angles[1]):.1f}°")
```

### Numerical Approach: Jacobian Inverse Method

For complex geometries, use iterative numerical methods:

```
Algorithm: Jacobian Transpose Method

1. Start with initial guess q₀
2. Repeat until convergence:
   a. Calculate current position: x_current = FK(q)
   b. Calculate error: e = x_desired - x_current
   c. Calculate Jacobian: J = J(q)
   d. Update joints: q_new = q + α·Jᵀ·e
   e. Check convergence: ||e|| < ε

Where:
- α is step size (learning rate)
- ε is convergence threshold
- Jᵀ is Jacobian transpose
```

---

## 5. Jacobian Analysis

### Definition

The Jacobian matrix relates joint velocities to end-effector velocities:

```
ẋ = J(q) · q̇

Where:
- ẋ = [vₓ, vᵧ, vᵧ, ωₓ, ωᵧ, ωᵧ]ᵀ  (end-effector velocity, 6×1)
- q̇ = [q̇₁, q̇₂, ..., q̇ₙ]ᵀ           (joint velocities, n×1)
- J(q) is the Jacobian matrix (6×n)
```

### Calculating the Jacobian

**Analytical Method:**

For revolute joint i:
```
Jᵥᵢ = zᵢ₋₁ × (pₙ - pᵢ₋₁)    (linear velocity contribution)
Jωᵢ = zᵢ₋₁                   (angular velocity contribution)
```

For prismatic joint i:
```
Jᵥᵢ = zᵢ₋₁                   (linear velocity contribution)
Jωᵢ = 0                      (angular velocity contribution)
```

Where:
- zᵢ₋₁ = unit vector along joint i axis
- pₙ = end-effector position
- pᵢ₋₁ = position of joint i

### Example: 3-DOF SCARA Jacobian

```
For the SCARA robot:
x = L₁cos(θ₁) + L₂cos(θ₁+θ₂)
y = L₁sin(θ₁) + L₂sin(θ₁+θ₂)
z = d₃

Jacobian (3×3):
    ┌                                                              ┐
    │ -L₁sin(θ₁)-L₂sin(θ₁+θ₂)  -L₂sin(θ₁+θ₂)   0                │
J = │  L₁cos(θ₁)+L₂cos(θ₁+θ₂)   L₂cos(θ₁+θ₂)   0                │
    │           0                      0         1                │
    └                                                              ┘
```

**Python Implementation:**

```python
def jacobian_scara(theta1, theta2, L1, L2):
    """Calculate Jacobian for 3-DOF SCARA robot"""
    s1 = np.sin(theta1)
    c1 = np.cos(theta1)
    s12 = np.sin(theta1 + theta2)
    c12 = np.cos(theta1 + theta2)

    J = np.array([
        [-L1*s1 - L2*s12,  -L2*s12,  0],
        [ L1*c1 + L2*c12,   L2*c12,  0],
        [       0,              0,    1]
    ])

    return J
```

### Applications of Jacobian

**1. Velocity Control:**
```
Given desired end-effector velocity ẋ_desired,
Calculate required joint velocities: q̇ = J⁻¹ · ẋ_desired
```

**2. Force Transformation:**
```
Joint torques τ required to produce end-effector force F:
τ = Jᵀ · F
```

**3. Singularity Detection:**
```
Singularity occurs when: det(J) = 0

At singularities:
- Robot loses one or more DOF
- Infinite joint velocities may be required
- Control becomes unstable
```

---

## 6. Workspace Analysis

### Reachable Workspace

The set of all points the end-effector can reach with at least one orientation.

**2-DOF Planar Arm Workspace:**

```
      ╔═══════════════════════════╗
      ║                           ║  Outer boundary: r = L₁ + L₂
      ║         ┌─────┐           ║
      ║         │     │           ║  Inner void: r = |L₁ - L₂|
      ║         │  ●  │           ║  (if L₁ ≠ L₂)
      ║         └─────┘           ║
      ║                           ║
      ╚═══════════════════════════╝
              Base
```

**Calculation:**
```
Outer radius: R_max = L₁ + L₂
Inner radius: R_min = |L₁ - L₂|
Workspace area = π(R_max² - R_min²)
```

### Dexterous Workspace

The set of points the end-effector can reach with all possible orientations.

**3-DOF Spherical Wrist Workspace:**

```
            ╱╲
          ╱    ╲
        ╱   ●    ╲   Full orientation capability
      ╱            ╲  within sphere of radius r
     ╲              ╱
      ╲            ╱
        ╲        ╱
          ╲____╱
```

### Workspace Optimization for Agricultural Tasks

**Transplanting Station Design:**

```
Robot workspace overlay on tray grid:

     Tray positions (200×200mm spacing)
    ┌──┬──┬──┬──┬──┬──┬──┬──┐
    │  │  │  │  │  │  │  │  │
    ├──┼──┼──┼──┼──┼──┼──┼──┤
    │  │  │██│██│██│██│  │  │  ██ = Optimal workspace
    ├──┼──┼──┼──┼──┼──┼──┼──┤      (minimal reach, fast cycle)
    │  │  │██│██│██│██│  │  │
    ├──┼──┼──┼──┼──┼──┼──┼──┤
    │  │  │██│██│██│██│  │  │
    ├──┼──┼──┼──┼──┼──┼──┼──┤
    │  │  │  │●│  │  │  │  │  ● = Robot base
    └──┴──┴──┴──┴──┴──┴──┴──┘

Strategy: Position robot to maximize coverage of optimal workspace
```

---

## 7. Singularities

### Types of Singularities

**1. Workspace Boundary Singularities**
- Occur at maximum reach
- One or more joints fully extended
- Loss of mobility in certain directions

**2. Interior Singularities**
- Occur within workspace
- Two or more joint axes become collinear
- Robot configuration becomes ambiguous

**3. Wrist Singularities**
- Two wrist axes align
- Loss of orientation control

### Example: SCARA Singularity

```
Configuration 1: Elbow Singularity

    Joint 1 ───────── Joint 2 ────────● End-effector

    Links are collinear (θ₂ = 0 or ±180°)
    Cannot move perpendicular to arm direction
    det(J) = 0

Configuration 2: Normal Operation

    Joint 1 ─────┐
                 │ Link 2
                 └──────● End-effector

    Elbow bent (θ₂ ≠ 0, ±180°)
    Full mobility
    det(J) ≠ 0
```

### Singularity Avoidance Strategies

**1. Path Planning:**
```
- Plan trajectories that avoid singular configurations
- Add intermediate waypoints to steer clear of singularities
- Use configuration-space planning
```

**2. Damped Least Squares:**
```
Instead of: q̇ = J⁻¹ẋ
Use: q̇ = Jᵀ(JJᵀ + λ²I)⁻¹ẋ

Where λ is damping factor (small constant)
Prevents joint velocities from becoming infinite near singularities
```

**3. Redundancy:**
```
Use robot with more DOF than required (e.g., 7-DOF for 6-DOF task)
Extra DOF provides alternative configurations
Can optimize secondary criteria (avoid singularities, obstacles, joint limits)
```

---

## 8. Robot Dynamics

### Equations of Motion

The dynamic model describes forces/torques required for motion:

```
τ = M(q)q̈ + C(q,q̇)q̇ + G(q) + F(q̇)

Where:
- τ = joint torques/forces (n×1)
- M(q) = inertia matrix (n×n)
- C(q,q̇) = Coriolis and centrifugal terms (n×1)
- G(q) = gravity terms (n×1)
- F(q̇) = friction (n×1)
```

### Lagrangian Formulation

```
L = K - P

Where:
- K = total kinetic energy
- P = total potential energy

Equations of motion:
d/dt(∂L/∂q̇ᵢ) - ∂L/∂qᵢ = τᵢ
```

### Example: 2-Link Planar Arm Dynamics

```
Kinetic Energy:
K = ½m₁v₁² + ½I₁ω₁² + ½m₂v₂² + ½I₂ω₂²

Potential Energy:
P = m₁g·y_c1 + m₂g·y_c2

Where:
- mᵢ = link mass
- Iᵢ = link moment of inertia
- y_ci = height of link center of mass
```

**Resulting Inertia Matrix:**

```
M(q) = ┌                                                              ┐
       │ M₁₁                            M₁₂                           │
       │ m₁L_c1² + m₂(L₁² + L_c2² +    m₂(L_c2² + L₁L_c2cos(θ₂))   │
       │ 2L₁L_c2cos(θ₂)) + I₁ + I₂                                   │
       │                                                              │
       │ M₂₁                            M₂₂                           │
       │ m₂(L_c2² + L₁L_c2cos(θ₂))     m₂L_c2² + I₂                 │
       └                                                              ┘
```

### Applications in Agricultural Robotics

**1. Feedforward Control:**
```
Calculate required torque for desired trajectory
Compensate for gravity, inertia, Coriolis effects
Improve tracking accuracy
```

**2. Energy Optimization:**
```
Minimize ∫τᵀq̇ dt over trajectory
Select energy-efficient paths
Important for battery-powered AMRs
```

**3. Safe Speed Limits:**
```
Ensure available actuator torque > required torque
Account for worst-case dynamics
Prevent stalling or loss of control
```

---

## 9. Trajectory Planning

### Point-to-Point Motion

**Trapezoidal Velocity Profile:**

```
Velocity
  ↑
  │      ┌──────────┐  v_max
  │     ╱│          │╲
  │    ╱ │          │ ╲
  │   ╱  │          │  ╲
  │  ╱   │          │   ╲
  │ ╱    │          │    ╲
  └─────────────────────────→ Time
    t_a   t_c        t_d  t_f

Phases:
- Acceleration (0 to t_a)
- Constant velocity (t_a to t_c)
- Deceleration (t_c to t_f)
```

**Equations:**

```
Given: Initial position q₀, final position q_f, max velocity v_max, max acceleration a_max

Calculate:
- Acceleration time: t_a = v_max / a_max
- Total distance: d = |q_f - q₀|
- Distance during accel/decel: d_ad = ½a_max·t_a²
- Constant velocity distance: d_c = d - 2·d_ad
- Constant velocity time: t_c = d_c / v_max
- Total time: t_f = 2·t_a + t_c
```

### Continuous Path Motion

**Cubic Polynomial Trajectory:**

```
q(t) = a₀ + a₁t + a₂t² + a₃t³

Boundary conditions:
q(0) = q₀,  q̇(0) = v₀
q(t_f) = q_f,  q̇(t_f) = v_f

Solve for coefficients: a₀, a₁, a₂, a₃
```

**Quintic Polynomial (smoother):**

```
q(t) = a₀ + a₁t + a₂t² + a₃t³ + a₄t⁴ + a₅t⁵

Additional boundary conditions:
q̈(0) = a₀,  q̈(t_f) = a_f

Provides smoother acceleration profiles
Reduces jerk and vibration
```

### Multi-Point Trajectories

**Via Points with Cubic Splines:**

```python
from scipy.interpolate import CubicSpline

def plan_trajectory(waypoints, times):
    """
    Plan smooth trajectory through waypoints

    Args:
        waypoints: List of [q1, q2, ..., qn] positions
        times: Time to reach each waypoint

    Returns:
        Trajectory function q(t)
    """
    cs = CubicSpline(times, waypoints, bc_type='clamped')
    return cs

# Example: Harvesting robot path
waypoints = [
    [0, 0, 0.5],      # Home position
    [0.3, 0.2, 0.3],  # Approach fruit
    [0.3, 0.2, 0.15], # Grasp fruit
    [0.3, 0.2, 0.3],  # Retract
    [-0.2, 0.4, 0.4], # Move to bin
    [-0.2, 0.4, 0.2], # Release
    [0, 0, 0.5]       # Return home
]

times = [0, 1, 2, 3, 4, 5, 6]  # seconds
trajectory = plan_trajectory(waypoints, times)

# Sample trajectory at 100 Hz
dt = 0.01
t_samples = np.arange(0, 6, dt)
positions = trajectory(t_samples)
```

### Agricultural-Specific Considerations

**1. Vibration Minimization:**
```
- Use higher-order polynomials (quintic or higher)
- Smooth acceleration profiles
- Avoid exciting structural resonances
- Critical for delicate fruit handling
```

**2. Speed Optimization:**
```
- Maximize velocity within constraints
- Account for crop spacing and density
- Balance speed vs. accuracy requirements
- Minimize non-productive motion
```

**3. Collision Avoidance:**
```
- Plan paths clear of plants, structures
- Include safety margins
- Real-time obstacle detection integration
- Emergency stop trajectories
```

---

## 10. Practical Implementation

### ROS Integration Example

```python
#!/usr/bin/env python3
import rospy
from trajectory_msgs.msg import JointTrajectory, JointTrajectoryPoint

class TrajectoryPlanner:
    def __init__(self):
        self.pub = rospy.Publisher(
            '/arm_controller/command',
            JointTrajectory,
            queue_size=10
        )

    def execute_trajectory(self, waypoints, duration=5.0):
        """Send trajectory to robot controller"""
        traj = JointTrajectory()
        traj.joint_names = ['joint1', 'joint2', 'joint3', 'joint4', 'joint5', 'joint6']

        n_points = len(waypoints)
        dt = duration / (n_points - 1)

        for i, waypoint in enumerate(waypoints):
            point = JointTrajectoryPoint()
            point.positions = waypoint
            point.time_from_start = rospy.Duration(i * dt)
            traj.points.append(point)

        self.pub.publish(traj)
        rospy.loginfo(f"Trajectory with {n_points} points sent")

# Usage
if __name__ == '__main__':
    rospy.init_node('trajectory_planner')
    planner = TrajectoryPlanner()

    # Define pick-and-place waypoints (joint angles in radians)
    waypoints = [
        [0, 0, 0, 0, 0, 0],           # Home
        [0.5, -0.3, 0.8, 0, 0.5, 0],  # Above plant
        [0.5, -0.3, 1.2, 0, 0.5, 0],  # Lower to plant
        # Gripper closes (separate command)
        [0.5, -0.3, 0.8, 0, 0.5, 0],  # Lift
        [-0.8, 0.4, 0.6, 0, 0.3, 0],  # Move to tray
        [-0.8, 0.4, 1.0, 0, 0.3, 0],  # Lower to tray
        # Gripper opens
        [0, 0, 0, 0, 0, 0]            # Return home
    ]

    planner.execute_trajectory(waypoints, duration=10.0)
    rospy.spin()
```

---

## Summary

Robot kinematics and dynamics provide the mathematical foundation for all robotic motion. Forward kinematics allows prediction of end-effector position from joint angles, while inverse kinematics solves the reverse problem—essential for path planning. The Jacobian connects joint and task spaces, enabling velocity control and singularity analysis. Dynamics equations describe the forces and torques required for motion, critical for accurate control and energy optimization.

In agricultural robotics, these concepts are applied to:
- Design efficient manipulator configurations
- Plan smooth, vibration-free trajectories for delicate handling
- Optimize workspace coverage for crop layouts
- Ensure safe, predictable motion in human-robot collaborative environments

---

## Key Takeaways

1. DH parameters provide a systematic method for describing robot geometry
2. Forward kinematics is straightforward (matrix multiplication); inverse kinematics is challenging (often multiple solutions or no solution)
3. The Jacobian is central to velocity control, force transformation, and singularity analysis
4. Singularities cause loss of mobility and must be avoided in trajectory planning
5. Workspace analysis ensures robots can reach required positions for agricultural tasks
6. Dynamics models are necessary for accurate control and energy optimization
7. Trajectory planning balances speed, smoothness, and accuracy requirements

---

## Practice Problems

1. **DH Parameters:** Derive the DH parameter table for a 4-DOF selective compliance assembly robot arm (SCARA) with the following geometry:
   - Joint 1: Revolute, vertical axis
   - Joint 2: Revolute, vertical axis, offset 300mm from Joint 1
   - Joint 3: Prismatic, vertical motion
   - Joint 4: Revolute, vertical axis (wrist rotation)

2. **Inverse Kinematics:** For a 2-DOF planar arm with L₁ = 400mm and L₂ = 300mm, calculate the joint angles required to reach position (500mm, 300mm). Verify your solution using forward kinematics.

3. **Jacobian:** Calculate the Jacobian matrix for the 2-DOF arm at configuration θ₁ = 30°, θ₂ = 45°. If the end-effector must move at velocity ẋ = [0.1, 0.05]ᵀ m/s, what joint velocities are required?

4. **Workspace:** Sketch the reachable workspace for a 3-DOF cylindrical robot with:
   - Joint 1: Revolute (0° to 180°)
   - Joint 2: Prismatic (0 to 500mm)
   - Joint 3: Prismatic vertical (-200mm to +200mm)

5. **Trajectory Planning:** Design a quintic polynomial trajectory for a transplanting operation that moves from q₀ = 0° to q_f = 90° in 2 seconds, with zero velocity and acceleration at both endpoints.

---

## Additional Resources

### Software Tools
- **MATLAB Robotics Toolbox** (Peter Corke): Comprehensive kinematic and dynamic modeling
- **ROS MoveIt:** Motion planning framework with IK solvers
- **PyBullet:** Physics simulation with dynamics
- **V-REP/CoppeliaSim:** Robot simulation environment

### Online Resources
- Peter Corke's Robotics Toolbox documentation
- ROS Industrial training materials
- MIT OpenCourseWare: Introduction to Robotics (2.12)
- Stanford CS223A: Introduction to Robotics

### Recommended Reading
- "Robotics: Modelling, Planning and Control" - Siciliano et al. (Chapters 2-4)
- "Introduction to Robotics: Mechanics and Control" - Craig (Chapters 2-6)
- "A Mathematical Introduction to Robotic Manipulation" - Murray, Li, Sastry

---

*Continue to Module 3: End Effectors for Plant Handling*
