# Module 8: Seeding and Transplanting Automation

## Overview

Seeding and transplanting are critical early-stage operations that determine crop uniformity and productivity. Automation provides precision, consistency, and throughput far exceeding manual methods. This module covers automated seeding mechanisms, transplanting robots, and quality control systems.

**Duration:** 1 week
**Level:** Expert

---

## Learning Objectives

1. Design precision seeding mechanisms for different seed types
2. Implement automated transplanting systems for plugs and seedlings
3. Optimize spacing, depth, and substrate compaction parameters
4. Integrate vision systems for quality control and verification
5. Calculate throughput requirements and cycle time optimization
6. Evaluate commercial seeding/transplanting equipment
7. Develop automation strategies for nursery operations

---

## 1. Precision Seeding Systems

### Seed Singulation Methods

**A. Vacuum-Based:**
```
Principle: Individual seed held on nozzle by vacuum

    Vacuum ↓
         ┌──┐
         │ o│ ← Seed adheres to tip
         └──┘

Advantages:
✓ High accuracy (>98%)
✓ Gentle handling
✓ Works with coated/pelleted seeds
✓ Fast (4,000-15,000 seeds/hour)

Disadvantages:
✗ Requires consistent seed size
✗ Dust can clog nozzles
✗ Air consumption

Suitable for: Lettuce, tomato, herbs, flowers
```

**B. Mechanical (Drum/Disk):**
```
Principle: Seeds fall into pockets in rotating drum

        ↓ Seed hopper
    ┌─────────────┐
    │  o  o  o  o │ ← Drum with sized pockets
    └─────────────┘
         ↓ Singulated seeds

Advantages:
✓ No air required
✓ Simple mechanism
✓ Low cost
✓ Handles irregular seeds

Disadvantages:
✗ Lower accuracy (~90-95%)
✗ Potential seed damage
✗ Requires pocket size changes for different seeds

Suitable for: Large seeds (cucumbers, squash, beans)
```

**C. Needle/Pin Dibbler:**
```
Principle: Pin creates hole, seed dropped or placed

    Pin ↓
    ┌──┐
    │  │ → Creates precise depth hole
    └──┘
    ════  ← Substrate

Advantages:
✓ Precise depth control (±1mm)
✓ Consistent compaction
✓ Integrated dibbling + seeding

Disadvantages:
✗ Slower than other methods
✗ Pin wear/cleaning required

Suitable for: Direct seeding to final containers
```

### Seeding Head Design

```python
class SeedingHead:
    """
    Multi-needle vacuum seeding head for tray seeding

    Typical configuration: 128-392 needles (matches plug tray)
    """
    def __init__(self, pattern="128-cell"):
        self.patterns = {
            "128-cell": (8, 16),   # 8 rows × 16 cols
            "200-cell": (10, 20),
            "288-cell": (12, 24)
        }
        self.rows, self.cols = self.patterns[pattern]
        self.needle_spacing = 0.0254  # 1 inch (25.4mm)

    def seed_tray(self, tray_position):
        """
        Complete seeding cycle for one tray

        Sequence:
        1. Move to seed drum
        2. Lower needles to pick seeds
        3. Apply vacuum
        4. Raise (seeds adhere to needle tips)
        5. Move to tray
        6. Lower into dibbled holes
        7. Release vacuum (seeds drop)
        8. Raise
        """
        # Move to seed station
        self.move_to(SEED_DRUM_POSITION)
        self.lower(depth=5)  # mm
        self.vacuum_on()
        time.sleep(0.2)  # Allow seeds to adhere
        self.raise()

        # Verify seed pickup
        pickup_rate = self.verify_seeds()  # Vision check
        if pickup_rate < 0.95:
            self.log_warning(f"Low pickup rate: {pickup_rate}")

        # Move to tray
        self.move_to(tray_position)
        self.lower(depth=8)  # Seed depth
        self.vacuum_off()
        time.sleep(0.1)
        self.raise()

        # Log metrics
        self.log_cycle_complete(pickup_rate)

    def verify_seeds(self):
        """
        Vision-based verification of seed pickup

        Returns: Fraction of needles with seeds (0.0-1.0)
        """
        image = self.camera.capture()
        seeds_detected = detect_seeds_on_needles(image)
        return seeds_detected / (self.rows * self.cols)
```

---

## 2. Automated Transplanting

### Plug Handling

**Gripper Design for Plugs:**
```
      ┌────┐
      │ ╱╲ │  ← Expandable gripper
      │ ╲╱ │     Inserted into plug center
      └─┬──┘
        │
    ┌───▼───┐
    │███████│  ← Plug with seedling
    └───────┘

Mechanism:
1. Gripper inserts in compressed state
2. Expands to grip plug sides
3. Extracts plug from tray
4. Transports to final container
5. Compresses to release

Alternative: Vacuum from below (pull plug out)
```

**Ejection Systems:**
```
Configuration: Pusher from below

Plug Tray (top view)
┌─┬─┬─┬─┐
│o│o│o│o│  ← Plugs
└─┴─┴─┴─┘
  ↑
Pusher array aligns below target plug, pushes up

Advantages:
✓ Fast (simultaneous multi-plug ejection)
✓ No top-side gripper needed
✓ Gentle (uniform pressure)

Disadvantages:
✗ Requires tray support structure
✗ Plug may break if weak roots
```

### Placement Precision

**Target Specifications:**
```
Parameter           Tolerance       Impact if Exceeded
=============================================================
XY position         ±5 mm          Crowding, irregular rows
Depth               ±3 mm          Poor root establishment
Verticality         ±10°           Stunted growth
Compaction          ±20%           Water retention issues
Cycle time          3-5 s/plant    Throughput
```

**Vision-Guided Placement:**
```python
def transplant_with_vision_correction(robot, plug, target_tray):
    """
    Vision-corrected transplanting for high precision

    Corrects for:
    - Tray position variation
    - Cell location tolerance
    - Plug orientation
    """
    # 1. Locate tray precisely
    tray_image = robot.camera.capture()
    tray_corners = detect_tray_corners(tray_image)
    tray_pose = estimate_tray_pose(tray_corners)

    # 2. Identify target cell
    cell_centers = compute_cell_grid(tray_pose, tray_size=(4, 8))
    target_cell = cell_centers[target_tray.next_cell_index]

    # 3. Adjust for plug orientation (if needed)
    plug_orientation = estimate_plug_orientation(plug)
    placement_pose = compute_placement_pose(
        target_cell,
        plug_orientation,
        desired_depth=25  # mm
    )

    # 4. Execute placement
    robot.move_to(placement_pose)
    robot.release_plug()
    robot.compact_substrate(force=5.0)  # Newtons

    # 5. Verify
    verify_image = robot.camera.capture()
    success = verify_transplant(verify_image, target_cell)

    return success
```

---

## 3. Commercial Systems Overview

### High-Speed Transplanters

**Visser Horti Systems:**
```
Specifications:
- Throughput: 4,000-8,000 plants/hour
- Tray formats: 72-392 cell
- Accuracy: >99%
- Integration: Conveyor input/output
- Cost: $150,000-$400,000

Features:
- Multiple gripper heads (parallel processing)
- Vision verification
- Automatic tray handling
- Reject sorting
```

**ISO Group:**
```
Specifications:
- Throughput: 5,000-12,000 plants/hour (top models)
- Modular design (seeders, transplanters, labelers)
- PLC controlled
- Cost: $100,000-$500,000

Applications:
- Large nursery operations
- Ornamental production
- Vegetable transplants
```

---

## 4. Quality Control and Verification

### Visual Inspection

**Defect Detection:**
```python
class SeedlingQualityInspector:
    """
    AI-based seedling quality assessment
    """
    def __init__(self, model_path):
        self.model = load_yolo_model(model_path)
        self.criteria = {
            'min_height': 30,      # mm
            'max_height': 100,
            'min_leaf_count': 2,
            'max_leaf_count': 8,
            'stem_thickness': (1, 4),  # mm
            'color_score': 0.6     # Greenness threshold
        }

    def inspect(self, image):
        """
        Evaluate seedling quality

        Returns: {'pass': bool, 'defects': list, 'score': float}
        """
        # Run detection
        detections = self.model(image)

        if len(detections) == 0:
            return {'pass': False, 'defects': ['no_seedling'], 'score': 0.0}

        seedling = detections[0]  # Primary seedling

        # Measurements
        height = seedling.bbox[3]  # Assume calibrated pixels→mm
        leaf_count = count_leaves(seedling.mask)
        color_score = assess_color_health(image, seedling.mask)

        # Evaluate criteria
        defects = []
        if height < self.criteria['min_height']:
            defects.append('too_short')
        if height > self.criteria['max_height']:
            defects.append('too_tall')
        if leaf_count < self.criteria['min_leaf_count']:
            defects.append('insufficient_leaves')
        if color_score < self.criteria['color_score']:
            defects.append('poor_color')

        # Multiple seedlings in one plug
        if len(detections) > 1:
            defects.append('multiple_seedlings')

        quality_pass = (len(defects) == 0)
        score = 1.0 - (len(defects) * 0.2)  # Each defect -20%

        return {'pass': quality_pass, 'defects': defects, 'score': max(0, score)}
```

### Reject Handling

```
Inspection Result → Sort →
  Pass (98%) → Continue to production
  Fail (2%) → Reject bin → Analysis/discard

Reject Categories:
- Empty plugs (no germination): 0.5-1%
- Weak/stunted: 0.5-1%
- Multiple seedlings: 0.2-0.5%
- Disease/damage: 0.1-0.3%
- Other defects: 0.2-0.5%
```

---

## 5. Throughput Optimization

### Cycle Time Analysis

```
Single Transplant Cycle:

Operation                     Time (s)    Bottleneck?
=========================================================
Pick plug from source tray    1.0
Visual inspection             0.3
Transport to target           1.5         ✓ (motion)
Position over cell            0.5
Lower and release             0.8
Compact substrate             0.4
Retract                       0.5
---------------------------------------------------------
TOTAL                         5.0 s/plant
Throughput                    720 plants/hour
```

**Optimization Strategies:**

**A. Parallel Processing:**
```
Single head: 720 plants/hr
Dual head (independent): 1,440 plants/hr (2× throughput)
Quad head: 2,880 plants/hr (4× throughput)

Diminishing returns due to:
- Increased system complexity
- Larger footprint
- Potential collisions
```

**B. Motion Optimization:**
```python
def optimize_pick_sequence(source_tray, target_tray):
    """
    Minimize travel distance by optimizing pick order

    Uses traveling salesman problem (TSP) solver
    """
    # Get all source and target positions
    source_positions = source_tray.get_filled_cells()
    target_positions = target_tray.get_empty_cells()

    # Build distance matrix
    n = len(source_positions)
    dist_matrix = np.zeros((n, n))
    for i in range(n):
        for j in range(n):
            # Distance = pick i → place i → pick j
            d1 = distance(source_positions[i], target_positions[i])
            d2 = distance(target_positions[i], source_positions[j])
            dist_matrix[i, j] = d1 + d2

    # Solve TSP (nearest neighbor heuristic for speed)
    tour = solve_tsp_greedy(dist_matrix)

    # Reorder operations
    optimized_sequence = [source_positions[i] for i in tour]

    # Typical improvement: 10-30% reduction in travel time
    return optimized_sequence
```

**C. Reduce Compaction Time:**
```
Standard: Pause for 0.4s to compact substrate
Optimized: Continuous motion with force control
  - Approach with velocity limit
  - Contact detected by force sensor
  - Brief force hold (0.1s)
  - Immediate retraction

Time saved: 0.3s per plant → 6% cycle time reduction
```

---

## 6. Integration with Nursery Workflows

### Material Flow

```
Seeding Line:
Empty Trays → Filling → Dibbling → Seeding → Covering → Watering → Germination

Transplanting Line:
Seedling Trays → Inspection → Transplanter → Final Containers → Watering → Growing

Automation Benefits:
- Consistent spacing (improves light distribution)
- Uniform depth (improves germination/establishment)
- Reduced handling damage
- Traceability (each tray/plant logged)
- Predictable throughput
```

### Data Collection

```python
class NurseryDataLogger:
    """
    Track seeding/transplanting operations for analytics
    """
    def __init__(self):
        self.db = connect_to_database()

    def log_seeding_batch(self, batch_data):
        """
        Record seeding operation details
        """
        record = {
            'timestamp': datetime.now(),
            'batch_id': batch_data['batch_id'],
            'seed_lot': batch_data['seed_lot'],
            'tray_count': batch_data['tray_count'],
            'cells_per_tray': batch_data['cells_per_tray'],
            'fill_rate': batch_data['fill_rate'],  # % cells seeded
            'cycle_time_avg': batch_data['cycle_time_avg'],
            'rejects': batch_data['rejects'],
            'operator': batch_data['operator']
        }
        self.db.insert('seeding_batches', record)

    def log_transplant_batch(self, batch_data):
        """
        Record transplanting operation details
        """
        record = {
            'timestamp': datetime.now(),
            'batch_id': batch_data['batch_id'],
            'source_batch_id': batch_data['source_batch_id'],  # Link to seedlings
            'plants_transplanted': batch_data['plants_transplanted'],
            'quality_pass_rate': batch_data['quality_pass_rate'],
            'cycle_time_avg': batch_data['cycle_time_avg'],
            'downtime': batch_data['downtime'],
            'operator': batch_data['operator']
        }
        self.db.insert('transplant_batches', record)

    def generate_performance_report(self, start_date, end_date):
        """
        Analytics: throughput, quality trends, bottlenecks
        """
        # Query database for date range
        batches = self.db.query(
            f"SELECT * FROM seeding_batches WHERE timestamp BETWEEN '{start_date}' AND '{end_date}'"
        )

        # Calculate KPIs
        total_cells_seeded = sum(b['tray_count'] * b['cells_per_tray'] for b in batches)
        avg_fill_rate = np.mean([b['fill_rate'] for b in batches])
        avg_cycle_time = np.mean([b['cycle_time_avg'] for b in batches])

        report = {
            'total_cells_seeded': total_cells_seeded,
            'avg_fill_rate': avg_fill_rate,
            'avg_cycle_time': avg_cycle_time,
            'theoretical_max_throughput': 3600 / avg_cycle_time,  # per hour
            'utilization': calculate_utilization(batches)
        }

        return report
```

---

## 7. ROI Calculation

```
Example: Medium-Scale Nursery (200,000 plants/year)

Manual Operations:
- Transplanting rate: 300 plants/hour per person
- Labor required: 200,000 / 300 = 667 hours/year
- At $20/hour: $13,340/year
- Plus benefits (×1.3): $17,342/year
- Quality issues (5% loss): $5,000/year

Automated System:
- Capital cost: $180,000 (mid-range transplanter)
- Throughput: 2,000 plants/hour
- Operating time: 200,000 / 2,000 = 100 hours/year
- Operator needed (supervision): 100 hours @ $25/hour = $2,500
- Maintenance: $8,000/year
- Energy: $1,200/year
- Quality improvement (2% loss vs 5%): $3,000 savings/year

Annual Savings:
Labor: $17,342 - $2,500 = $14,842
Quality: $3,000
Total: $17,842/year

Annual Costs:
Maintenance + Energy: $9,200

Net Benefit: $8,642/year

Payback Period: $180,000 / $8,642 = 20.8 years (not attractive)

HOWEVER, for larger operations (1M plants/year):
Labor savings: $86,710/year
Quality savings: $15,000/year
Net benefit: ~$92,510/year
Payback: 1.9 years ✓

Conclusion: Automation economically viable at >500k plants/year
```

---

## Summary

Seeding and transplanting automation delivers precision, consistency, and throughput advantages in nursery operations. Vacuum-based singulation and multi-head transplanting systems achieve >95% accuracy at speeds of 4,000-12,000 plants/hour. Vision-based quality control ensures only vigorous seedlings proceed to production. Economic viability depends on operation scale, with payback periods of 2-4 years for facilities producing >500,000 plants annually.

---

## Key Takeaways

1. Vacuum seeding provides highest accuracy (>98%) for small seeds
2. Vision-guided transplanting achieves ±5mm positioning precision
3. Commercial systems range from 4,000-12,000 plants/hour throughput
4. Quality inspection catches 95%+ of defects before transplanting
5. Parallel processing and motion optimization key to throughput
6. Economic viability requires scale (>500k plants/year typically)
7. Data collection enables continuous improvement and traceability

---

*Continue to Module 9: Inspection and Monitoring Robots*
