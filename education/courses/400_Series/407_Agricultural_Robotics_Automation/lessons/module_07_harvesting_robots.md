# Module 7: Harvesting Robots

## Overview

Harvesting is the most labor-intensive operation in CEA, making it a prime target for automation. This module examines robotic harvesting systems, including crop detection, selective picking, damage prevention, and throughput optimization.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

1. Analyze crop-specific harvesting requirements and constraints
2. Design vision systems for fruit/vegetable detection and maturity assessment
3. Implement cutting mechanisms for different peduncle types
4. Develop damage prevention strategies through force control
5. Optimize multi-arm coordination for increased throughput
6. Calculate harvesting system ROI and break-even points
7. Evaluate commercial harvesting robots and their performance

---

## 1. Harvesting Challenges

### Biological Variability
- Size variation: ±20-50% within same variety
- Irregular shapes and orientations
- Occlusion by leaves, stems, neighboring fruit
- Variable ripeness stages in same plant

### Damage Prevention
- Bruising from excessive grip force
- Stem tearing during cutting
- Fruit-to-fruit impacts during transport
- Damage target: <2-5% (human: ~1-3%)

### Speed Requirements
```
Crop Type        Human Rate      Robot Target    Current Best
==================================================================
Cherry tomatoes  6-10 kg/hr     5-8 kg/hr       3-5 kg/hr
Strawberries     8-12 kg/hr     6-10 kg/hr      2-4 kg/hr
Lettuce heads    100-150/hr     80-120/hr       60-80/hr
Peppers          40-60/hr       30-50/hr        20-30/hr
```

---

## 2. Detection and Localization

### Computer Vision Pipeline

```
RGB-D Camera → Fruit Detection → Pose Estimation → Grasp Planning → Motion Execution
     |              (YOLO)         (PnP/ICP)        (Quality Score)
     |
  Depth Map → 3D Reconstruction → Occlusion Analysis → Reachability Check
```

### Ripeness Assessment

**Color-Based (Tomatoes, Peppers):**
```python
def assess_tomato_ripeness(hsv_image, fruit_mask):
    """
    Classify tomato ripeness from color

    Stages:
    - Green: H=60-90, S=40-100, V=40-100
    - Breaker: H=30-60, S=40-100, V=50-100
    - Turning: H=10-30, S=50-100, V=60-100
    - Pink/Light Red: H=0-10, S=60-100, V=70-100
    - Red Ripe: H=0-10 or 170-180, S=80-100, V=80-100
    """
    fruit_pixels = hsv_image[fruit_mask > 0]

    h_mean = np.mean(fruit_pixels[:, 0])
    s_mean = np.mean(fruit_pixels[:, 1])
    v_mean = np.mean(fruit_pixels[:, 2])

    if h_mean > 60:
        return "green", 0
    elif h_mean > 30:
        return "breaker", 1
    elif h_mean > 10:
        return "turning", 2
    elif (h_mean < 10 or h_mean > 170) and s_mean > 80 and v_mean > 80:
        return "ripe", 4
    else:
        return "pink", 3
```

**Texture-Based (Strawberries):**
- Seeds (achenes) contrast with flesh
- Smooth red surface indicates ripeness
- Deep learning: CNN trained on labeled ripeness dataset

**Hyperspectral (Advanced):**
- NIR reflectance correlates with sugar content
- Chlorophyll fluorescence indicates maturity
- Requires specialized cameras ($$$)

---

## 3. Grasping Strategies

### Approach Vectors

```
Top Approach (Overhead):
     Gripper
        ↓
       ●  ← Fruit
     /━━╲
    Plant

Advantages:
✓ Clear view (less occlusion)
✓ Simple grasp
Disadvantages:
✗ May not reach lower fruit
✗ Interferes with overhead lighting

Side Approach:
    Gripper → ●  ← Fruit
            /━━╲
           Plant

Advantages:
✓ Natural stem access
✓ Reaches all heights
Disadvantages:
✗ More occlusion
✗ Risk hitting adjacent fruit
```

### Grasp Quality Metrics

```python
def score_grasp(fruit_pose, gripper_pose, environment):
    """
    Evaluate grasp candidate quality

    Returns: score 0.0-1.0
    """
    score = 0.0

    # 1. Reachability (IK solution exists)
    reachable = check_inverse_kinematics(gripper_pose)
    score += 0.3 if reachable else 0.0

    # 2. Collision-free approach
    collision_free = check_path_collision(gripper_pose, environment)
    score += 0.25 if collision_free else 0.0

    # 3. Stem accessibility (for cutting)
    stem_accessible = check_stem_access(fruit_pose, gripper_pose)
    score += 0.2 if stem_accessible else 0.0

    # 4. Grasp stability (force closure)
    stable = check_force_closure(fruit_pose, gripper_pose)
    score += 0.15 if stable else 0.0

    # 5. Proximity to home (minimize travel)
    distance = np.linalg.norm(gripper_pose[:3] - HOME_POSITION)
    score += 0.1 * max(0, 1 - distance / MAX_REACH)

    return score
```

---

## 4. Cutting Mechanisms

### Peduncle Properties

```
Crop         Diameter    Tensile Strength   Preferred Method
================================================================
Tomato       3-5 mm      2-4 MPa           Scissor/blade
Cucumber     5-8 mm      3-6 MPa           Rotary/scissor
Pepper       4-6 mm      2-5 MPa           Scissor
Strawberry   2-4 mm      1-3 MPa           Wire/blade
Eggplant     6-10 mm     4-8 MPa           Rotary saw
```

### Cutting System Design

**Scissor Mechanism:**
```
     ╱╲   ← Blades (stainless steel)
    ╱  ╲
   ╱────╲ ← Actuator (servo/pneumatic)
     ══   ← Peduncle

Force required: F = σ × A × SF
                = 3 MPa × π(2.5mm)² × 2
                = 117 N

Actuation options:
- Servo motor (0.5-2 s cycle)
- Pneumatic cylinder (0.1-0.5 s cycle)
- Linear actuator (0.2-1 s cycle)
```

**Integration with Gripper:**
```python
class GripAndCutEffector:
    """
    Combined gripper and cutting tool
    """
    def __init__(self):
        self.gripper = SoftGripper(max_force=5.0)  # Newtons
        self.cutter = ScissorCutter(max_force=150.0)
        self.force_sensor = ForceTorqueSensor()

    def harvest(self, fruit_pose):
        """
        Complete harvest sequence
        """
        # 1. Approach fruit
        self.move_to_pre_grasp(fruit_pose)

        # 2. Close gripper gently
        self.gripper.close(target_force=2.0, max_force=5.0)

        # 3. Verify grasp
        if self.force_sensor.read() < 1.0:
            print("Grasp failed - insufficient contact")
            return False

        # 4. Position cutter at stem
        stem_pose = self.estimate_stem_location(fruit_pose)
        self.align_cutter(stem_pose)

        # 5. Cut stem
        self.cutter.cut()
        time.sleep(0.5)  # Allow cut to complete

        # 6. Retract with fruit
        self.move_to_basket()

        # 7. Release
        self.gripper.open()

        return True
```

---

## 5. Multi-Arm Coordination

### Parallel Harvesting

```
Configuration: 4-6 arms on gantry or mobile platform

        Arm1  Arm2  Arm3  Arm4
          │    │    │    │
          ↓    ↓    ↓    ↓
      ████████████████████████  ← Plant row

Challenges:
- Workspace overlap (collision risk)
- Task allocation (which arm picks which fruit)
- Synchronization (avoid vibrations)
```

**Task Allocation Algorithm:**
```python
import numpy as np
from scipy.optimize import linear_sum_assignment

def allocate_fruits_to_arms(arms, detected_fruits):
    """
    Assign fruits to arms to minimize total harvest time

    Args:
        arms: List of arm positions
        detected_fruits: List of fruit positions

    Returns:
        assignments: Dict {arm_id: [fruit_ids]}
    """
    n_arms = len(arms)
    n_fruits = len(detected_fruits)

    # Cost matrix: harvest time for each arm-fruit pair
    cost_matrix = np.zeros((n_arms, n_fruits))

    for i, arm in enumerate(arms):
        for j, fruit in enumerate(detected_fruits):
            # Time = travel + grasp + cut + return
            travel_time = estimate_travel_time(arm.position, fruit.position)
            cycle_time = 3.0  # seconds (grasp, cut, place)
            cost_matrix[i, j] = travel_time + cycle_time

    # Solve assignment problem
    arm_indices, fruit_indices = linear_sum_assignment(cost_matrix)

    # Build assignment dictionary
    assignments = {i: [] for i in range(n_arms)}
    for arm_idx, fruit_idx in zip(arm_indices, fruit_indices):
        assignments[arm_idx].append(fruit_idx)

    return assignments
```

### Throughput Optimization

```
Serial Harvesting:
Arm1: Pick → Cut → Place → Pick → ...
Time per fruit: 5-8 seconds
Rate: 450-720 fruits/hour per arm

Pipelined Harvesting:
Arm1: Pick (fruit 1)
Arm2:         Cut (fruit 1), Pick (fruit 2)
Arm3:                        Cut (fruit 2), Pick (fruit 3)
Arm4:                                       Cut (fruit 3)

Time per fruit: ~2-3 seconds (with 4 arms)
Rate: 1200-1800 fruits/hour total (4 arms)
Efficiency: 75-90% vs. 4× serial
```

---

## 6. Bin Management and Logistics

### Harvest Container Design

```
Requirements:
- Minimize fruit stacking (prevent crushing)
- Easy robot placement (large opening)
- Human-compatible (ergonomic handles)
- Stackable for storage
- Cleanable (smooth surfaces)

Example: Shallow bin with dividers
    ┌─────────────────┐
    │  ○  │  ○  │  ○  │  ← Individual compartments
    ├─────┼─────┼─────┤
    │  ○  │  ○  │  ○  │
    └─────────────────┘

Capacity: 12-24 fruit per bin
Weight: 2-5 kg loaded
```

### Automated Bin Swapping

```python
class BinManagementSystem:
    """
    Coordinates bin swapping for continuous harvesting
    """
    def __init__(self, harvester, amr_fleet):
        self.harvester = harvester
        self.amr_fleet = amr_fleet
        self.current_bin_fullness = 0
        self.bin_capacity = 20  # fruits

    def update(self):
        """
        Monitor bin status and request swap if needed
        """
        self.current_bin_fullness = self.harvester.get_bin_count()

        if self.current_bin_fullness >= self.bin_capacity * 0.9:
            # Request AMR to bring empty bin and take full bin
            amr = self.get_available_amr()
            if amr:
                self.request_bin_swap(amr)
            else:
                # No AMR available, pause harvesting
                self.harvester.pause()
                print("Waiting for bin swap...")

    def request_bin_swap(self, amr):
        """
        Coordinate bin exchange
        """
        # AMR brings empty bin to harvester
        amr.load_empty_bin()
        amr.navigate_to(self.harvester.position)

        # Wait for AMR arrival
        while not amr.at_destination():
            time.sleep(0.5)

        # Harvester swaps bins (or human assists)
        self.harvester.pause()
        self.perform_bin_swap()
        self.harvester.resume()

        # AMR transports full bin to processing
        amr.navigate_to(PROCESSING_AREA)
        amr.unload_full_bin()

        self.current_bin_fullness = 0
```

---

## 7. Performance Metrics and ROI

### Key Performance Indicators (KPIs)

```
Metric                  Unit            Target         World-Class
====================================================================
Pick success rate       %               >85%           >95%
Damage rate            %               <5%            <2%
Cycle time             s/fruit         3-6            2-4
Uptime                 %               >90%           >95%
Harvest completeness   % of ripe fruit >80%           >90%
False positives        %               <10%           <5%
```

### ROI Calculation

```
Example: Tomato Greenhouse Harvesting Robot

Capital Investment:
- Robot system: $250,000
- Integration: $50,000
- Training: $10,000
Total: $310,000

Operating Costs (Annual):
- Maintenance: $15,000
- Electricity: $2,000
- Software licenses: $5,000
Total: $22,000/year

Labor Savings:
- Human harvesters: 3 FTE @ $35,000/year = $105,000
- Robot displaces: 2 FTE (1 FTE for oversight) = $70,000 savings

Additional Benefits:
- Harvest window extension (night operation): $15,000/year
- Reduced crop damage (1% → 0.5%): $8,000/year
- Data collection value: $5,000/year

Net Annual Benefit: $70,000 + $15,000 + $8,000 + $5,000 - $22,000
                  = $76,000

Payback Period: $310,000 / $76,000 = 4.1 years
NPV (10 years, 8% discount): $200,000+
IRR: ~22%
```

---

## 8. Case Studies

### Case Study 1: Root AI Virgo (Tomato Harvester)

**System Specs:**
- Vision: 3D cameras with AI detection
- Gripper: Vacuum-based gentle grasp
- Cutter: Heated wire
- Mobility: Gantry-mounted (greenhouse rows)
- Throughput: ~1 tomato per 8-10 seconds

**Performance:**
- Success rate: ~85% (as of 2023)
- Damage rate: ~3%
- Operating hours: 20+ hours/day potential
- ROI: ~3-4 years for large operations

**Key Innovations:**
- Deep learning for peduncle detection
- Force-limited approach for damage prevention
- Integration with existing greenhouse infrastructure

### Case Study 2: FFRobotics Fresh Fruit Harvester

**System Specs:**
- Arms: 4-12 independently operating arms
- Vision: Cameras + depth sensors per arm
- End effector: Soft gripper + rotary cutter
- Platform: Mobile (wheels) or gantry

**Performance:**
- Throughput: Up to 10,000 apples/hour (multi-arm)
- Success rate: ~90%
- Adaptable to multiple crops (apples, citrus, stone fruit)

---

## Summary

Robotic harvesting represents the frontier of agricultural automation, combining advanced computer vision, delicate manipulation, and real-time decision-making. While challenges remain in matching human speed and adaptability, modern systems achieve 80-90% success rates with low damage. Economic viability is improving as technology matures and labor costs rise. Multi-arm systems and continuous improvement through machine learning promise to close the performance gap with human harvesters.

---

## Key Takeaways

1. Harvesting is the most complex agricultural robotic task due to biological variability
2. Computer vision for detection and ripeness assessment is foundational
3. Damage prevention requires force sensing and compliant grippers
4. Multi-arm coordination can significantly increase throughput
5. ROI improves with larger facilities and higher labor costs (currently 3-5 years typical)
6. Current systems achieve 80-90% of human performance and improving rapidly
7. Integration with facility logistics (bin management, AMRs) is critical

---

*Continue to Module 8: Seeding and Transplanting Automation*
