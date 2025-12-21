# Quick Reference: Robot Kinematics & Dynamics

## DH Parameters

| Parameter | Description | Type |
|-----------|-------------|------|
| θᵢ | Joint angle about zᵢ₋₁ | Variable (R) |
| dᵢ | Link offset along zᵢ₋₁ | Variable (P) |
| aᵢ | Link length along xᵢ | Fixed |
| αᵢ | Link twist about xᵢ | Fixed |

## DH Transformation Matrix

```
T[i-1,i] = [ cos(θ) -sin(θ)cos(α)  sin(θ)sin(α)  a·cos(θ) ]
           [ sin(θ)  cos(θ)cos(α) -cos(θ)sin(α)  a·sin(θ) ]
           [   0        sin(α)        cos(α)         d     ]
           [   0          0              0          1     ]
```

## Forward Kinematics
- **Input:** Joint angles/positions q = [q₁, q₂, ..., qₙ]
- **Output:** End-effector pose T₀ⁿ
- **Method:** T₀ⁿ = T₀¹ × T₁² × ... × Tⁿ⁻¹ⁿ

## Inverse Kinematics
- **Input:** Desired end-effector pose
- **Output:** Required joint angles
- **Methods:** Analytical (geometric) or Numerical (Jacobian-based)

## Jacobian
- **Relates:** Joint velocities to end-effector velocities
- **Equation:** ẋ = J(q) · q̇
- **Dimensions:** 6×n (6 DOF end-effector, n joints)
- **Singularity:** det(J) = 0

## Common Robot Configurations

### 2-DOF Planar (RR)
```
Forward Kinematics:
x = L₁cos(θ₁) + L₂cos(θ₁+θ₂)
y = L₁sin(θ₁) + L₂sin(θ₁+θ₂)

Inverse Kinematics:
θ₂ = ±arccos((x²+y² - L₁²-L₂²)/(2L₁L₂))
θ₁ = atan2(y,x) - atan2(L₂sin(θ₂), L₁+L₂cos(θ₂))
```

### 3-DOF SCARA (RRP)
```
x = L₁cos(θ₁) + L₂cos(θ₁+θ₂)
y = L₁sin(θ₁) + L₂sin(θ₁+θ₂)
z = d₃
```

## Dynamics

### Equation of Motion
```
τ = M(q)q̈ + C(q,q̇)q̇ + G(q) + F(q̇)

Where:
M(q) = Inertia matrix
C(q,q̇) = Coriolis and centrifugal terms
G(q) = Gravity terms
F(q̇) = Friction
```

## Trajectory Planning

### Trapezoidal Velocity Profile
```
Phases: Acceleration → Constant → Deceleration
Time: t_f = 2·t_a + t_c
Distance: d = v_max·(t_f - t_a)
```

### Cubic Polynomial
```
q(t) = a₀ + a₁t + a₂t² + a₃t³
Boundary conditions:
  q(0) = q₀, q̇(0) = v₀
  q(t_f) = q_f, q̇(t_f) = v_f
```

### Quintic Polynomial
```
q(t) = a₀ + a₁t + a₂t² + a₃t³ + a₄t⁴ + a₅t⁵
Additional boundary conditions:
  q̈(0) = a₀, q̈(t_f) = a_f
Benefit: Continuous acceleration (smoother)
```

## Python Quick Reference

```python
import numpy as np

# DH Transform
def dh_matrix(theta, d, a, alpha):
    ct, st = np.cos(theta), np.sin(theta)
    ca, sa = np.cos(alpha), np.sin(alpha)
    return np.array([
        [ct, -st*ca,  st*sa, a*ct],
        [st,  ct*ca, -ct*sa, a*st],
        [0,   sa,     ca,    d   ],
        [0,   0,      0,     1   ]
    ])

# Forward Kinematics
def forward_kinematics(joint_angles, dh_params):
    T = np.eye(4)
    for i, (theta, d, a, alpha) in enumerate(dh_params):
        T = T @ dh_matrix(joint_angles[i] + theta, d, a, alpha)
    return T

# 2-DOF IK (planar)
def inverse_kinematics_2dof(x, y, L1, L2):
    c2 = (x**2 + y**2 - L1**2 - L2**2) / (2*L1*L2)
    theta2 = np.arccos(c2)  # Elbow up
    theta1 = np.arctan2(y, x) - np.arctan2(L2*np.sin(theta2), L1+L2*np.cos(theta2))
    return theta1, theta2
```

## Key Formulas Summary

| Concept | Formula |
|---------|---------|
| Homogeneous transform | T = [R p; 0 1] |
| Forward kinematics | x = f(q) |
| Inverse kinematics | q = f⁻¹(x) |
| Jacobian | J = ∂x/∂q |
| Velocity kinematics | ẋ = J·q̇ |
| Singularity | det(J) = 0 |
| Dynamics | τ = M·q̈ + C·q̇ + G |
| Workspace (2-DOF) | r ∈ [|L₁-L₂|, L₁+L₂] |

---

**Pro Tips:**
- Always check IK solution exists before executing
- Near singularities, use damped least squares
- Validate forward kinematics output with physical measurement
- Use simulation (Gazebo, V-REP) before hardware testing
- Log joint positions for debugging kinematic issues
