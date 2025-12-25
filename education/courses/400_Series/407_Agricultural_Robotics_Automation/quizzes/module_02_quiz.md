# Module 2 Quiz: Robot Kinematics and Dynamics

## Instructions
- Total Questions: 10
- Passing Score: 80% (8/10 correct)
- Time Limit: 20 minutes
- Select the best answer for each question

---

### Question 1
What does the Denavit-Hartenberg (DH) convention provide?

A) A method for programming robot control systems
B) A standardized way to assign coordinate frames to robot links
C) A safety protocol for human-robot interaction
D) A power calculation method for motors

**Correct Answer: B**

---

### Question 2
How many parameters are required in the DH convention to describe each joint?

A) 2 parameters
B) 3 parameters
C) 4 parameters
D) 6 parameters

**Correct Answer: C**

---

### Question 3
What is the primary purpose of inverse kinematics?

A) Calculate joint angles from desired end-effector position
B) Calculate end-effector position from joint angles
C) Optimize robot energy consumption
D) Detect collisions in the workspace

**Correct Answer: A**

---

### Question 4
A 6-DOF manipulator working in 3D space typically has how many inverse kinematic solutions?

A) Always exactly one solution
B) Multiple solutions (often 8 or 16)
C) No analytical solution possible
D) Infinite solutions

**Correct Answer: B**

---

### Question 5
What does the Jacobian matrix relate?

A) Force to torque
B) Joint velocities to end-effector velocities
C) Acceleration to power
D) Position to orientation

**Correct Answer: B**

---

### Question 6
What condition occurs when the Jacobian matrix becomes singular?

A) Maximum velocity is achieved
B) The robot loses one or more degrees of freedom
C) Energy efficiency is optimized
D) Gripper force is maximized

**Correct Answer: B**

---

### Question 7
For a planar 2-link manipulator, the workspace is typically:

A) A complete circle
B) An annulus (ring-shaped region)
C) A square
D) A straight line

**Correct Answer: B**

---

### Question 8
In trajectory planning, what does a "quintic polynomial" provide?

A) 3rd-order continuity (continuous jerk)
B) 2nd-order continuity (continuous acceleration)
C) 1st-order continuity (continuous velocity)
D) 0-order continuity (continuous position only)

**Correct Answer: A**

---

### Question 9
What is the typical accuracy of industrial robotic manipulators?

A) ±0.01 mm
B) ±0.05-0.1 mm
C) ±1-5 mm
D) ±10-20 mm

**Correct Answer: B**

---

### Question 10
Which factor is MOST critical in determining the dynamic payload capacity of a manipulator?

A) End-effector weight only
B) Joint torque limits and acceleration requirements
C) Cable routing design
D) Controller processing speed

**Correct Answer: B**

---

## Answer Key

1. B - DH provides standardized coordinate frame assignment
2. C - Four DH parameters: θ (theta), d, a, α (alpha)
3. A - Inverse kinematics calculates joint angles from desired position
4. B - Multiple solutions typical (configuration choices)
5. B - Jacobian relates joint velocities to end-effector velocities
6. B - Singularity causes loss of degrees of freedom
7. B - Annular workspace between minimum and maximum reach
8. A - Quintic provides continuous jerk (3rd derivative)
9. B - Typical industrial robot accuracy ±0.05-0.1 mm
10. B - Joint torques and accelerations determine dynamic capacity

---

**Passing Score: 8/10 (80%)**
