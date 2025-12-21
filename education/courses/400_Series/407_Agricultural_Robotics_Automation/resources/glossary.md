# Agricultural Robotics & Automation - Glossary

## A

**A* Algorithm** - Heuristic path planning algorithm that finds the shortest path from start to goal using cost function f(n) = g(n) + h(n).

**Accuracy** - In computer vision, the ratio of correct predictions to total predictions; in robotics, how close the robot's actual position is to the commanded position.

**Actuator** - Device that converts energy (electrical, pneumatic, hydraulic) into mechanical motion (motors, cylinders, solenoids).

**AGV (Automated Guided Vehicle)** - Mobile robot that follows fixed paths (magnetic tape, wires) for material transport.

**AMR (Autonomous Mobile Robot)** - Self-navigating mobile robot that uses sensors and software to navigate without fixed paths.

**Articulated Arm** - Robot with rotational joints arranged in series, resembling a human arm; provides high flexibility.

---

## B

**BOM (Bill of Materials)** - Complete list of parts, components, and quantities needed to build a system.

**Breaker Stage** - Tomato ripeness stage when fruit begins color change from green to yellow/orange.

---

## C

**CAGR (Compound Annual Growth Rate)** - Measure of growth rate over multiple years; agricultural robotics market growing at ~18.5% CAGR.

**Calibration** - Process of determining and correcting sensor/actuator parameters for accurate measurements and control.

**Cartographer** - Google's SLAM algorithm for real-time 2D/3D mapping using LiDAR and IMU data.

**CEA (Controlled Environment Agriculture)** - Indoor farming methods (greenhouses, vertical farms) with regulated environmental conditions.

**Cobot (Collaborative Robot)** - Robot designed to work safely alongside humans, typically with force limiting and safety monitoring.

**Computer Vision** - Field of AI enabling computers to extract information from images and video.

**Costmap** - Grid-based representation of environment where each cell has cost value (0=free, 255=obstacle), used for path planning.

---

## D

**Delta Robot** - Parallel robot with three arms connected to universal joints at base; extremely fast for pick-and-place operations.

**DH Parameters (Denavit-Hartenberg)** - Standardized method for describing robot link geometry with 4 parameters: θ (joint angle), d (offset), a (length), α (twist).

**DOF (Degrees of Freedom)** - Number of independent motions a robot can make; 6 DOF allows full position and orientation control.

**DWA (Dynamic Window Approach)** - Local path planning algorithm that considers robot dynamics (velocity, acceleration limits).

---

## E

**Edge Computing** - Processing data locally on device rather than sending to cloud; reduces latency, improves privacy.

**EKF (Extended Kalman Filter)** - Algorithm for fusing multiple sensor measurements to estimate robot state (position, velocity).

**End Effector** - Tool or gripper attached to robot's end for interacting with environment (gripper, cutter, vacuum, camera).

---

## F

**False Positive** - Incorrect detection (e.g., detecting ripe tomato where there is none); reduces precision.

**False Negative** - Missed detection (e.g., failing to detect ripe tomato that exists); reduces recall.

**Forward Kinematics** - Calculating end-effector position from given joint angles; straightforward matrix multiplication.

---

## G

**Gantry System** - Robot mounted on overhead framework spanning large area; common in vertical farms for accessing entire growing space.

**Gazebo** - Open-source 3D robot simulator with physics engine; commonly used with ROS for testing before hardware deployment.

**GMapping** - SLAM algorithm using Rao-Blackwellized particle filter for building 2D maps from laser scans.

**GPU (Graphics Processing Unit)** - Specialized processor for parallel computation; essential for deep learning and computer vision.

---

## H

**Harvesting Robot** - Autonomous system that detects, grasps, and picks mature crops; current success rates 80-90% for leafy greens, 40-60% for fruiting crops.

**HSV (Hue, Saturation, Value)** - Color space more intuitive than RGB for color-based segmentation in computer vision.

**Hyperspectral Imaging** - Capturing 100-1000 spectral bands beyond visible range; used for nutrient deficiency and early disease detection.

---

## I

**ICP (Iterative Closest Point)** - Algorithm for aligning point clouds by minimizing distance between corresponding points; used in SLAM.

**IMU (Inertial Measurement Unit)** - Sensor measuring acceleration and angular velocity; used for robot orientation estimation.

**Instance Segmentation** - Computer vision task that identifies and delineates each object instance with pixel-level masks (vs. bounding boxes).

**Inverse Kinematics** - Calculating required joint angles to achieve desired end-effector position; often multiple solutions or no solution.

**IRR (Internal Rate of Return)** - Discount rate at which NPV equals zero; measures profitability of investment (target >15-18% for agriculture).

**ISO 10218** - International safety standard for industrial robots covering design and integration requirements.

**ISO/TS 15066** - Technical specification for collaborative robot safety, defining force and pressure limits for human contact.

---

## J

**Jacobian Matrix** - Matrix relating joint velocities to end-effector velocities; size 6×n for n-joint robot.

---

## K

**Kalman Filter** - Optimal estimator for linear systems; combines predictions with noisy measurements to estimate state.

**Kinematics** - Study of motion without considering forces; forward kinematics (FK) and inverse kinematics (IK).

**KPI (Key Performance Indicator)** - Measurable value demonstrating system effectiveness (e.g., uptime, throughput, accuracy).

---

## L

**LiDAR (Light Detection and Ranging)** - Sensor measuring distance by emitting laser pulses and measuring return time; used for navigation and mapping.

**LiFePO4 (Lithium Iron Phosphate)** - Battery chemistry preferred for agricultural robotics due to safety, long cycle life (2000-5000 cycles), and stability.

---

## M

**mAP (mean Average Precision)** - Primary metric for object detection models; mAP@50 means average precision at 50% IoU threshold.

**Mask R-CNN** - Deep learning architecture for instance segmentation producing bounding boxes and pixel-level masks.

**Mecanum Wheel** - Omnidirectional wheel with rollers at 45° angle; enables lateral movement without rotation.

**MoveIt** - ROS framework for motion planning, manipulation, 3D perception, and collision checking.

**MTBF (Mean Time Between Failures)** - Average time between system failures; target >200 hours for production robots.

**MTTR (Mean Time To Repair)** - Average time to restore system after failure; target <2 hours for commercial operations.

---

## N

**NPV (Net Present Value)** - Present value of future cash flows minus initial investment; positive NPV indicates profitable investment.

**Navigation Stack** - ROS software package for autonomous navigation including localization, path planning, and obstacle avoidance.

---

## O

**Occupancy Grid** - 2D representation of environment where each cell indicates probability of occupation; used for path planning.

**Odometry** - Estimating position by integrating velocity over time; accumulates error requiring correction from absolute sensors.

**OEE (Overall Equipment Effectiveness)** - Metric combining availability, performance, and quality; world-class >85%.

**OMPL (Open Motion Planning Library)** - Library of sampling-based motion planning algorithms used by MoveIt.

**ONNX (Open Neural Network Exchange)** - Open format for representing machine learning models; enables portability between frameworks.

**ORB-SLAM** - Visual SLAM algorithm using ORB (Oriented FAST and Rotated BRIEF) features for tracking and mapping.

---

## P

**Payload** - Maximum weight a robot can carry; typical agricultural manipulators: 1-25 kg, AMRs: 50-500 kg.

**Peduncle** - Stem connecting fruit to plant; robotic harvesters must cut peduncle without damaging fruit.

**Phenotyping** - Measuring plant characteristics (height, leaf area, color) for research or breeding; increasingly automated with vision systems.

**PLC (Programmable Logic Controller)** - Industrial computer for machine control; interfaces with robots via Modbus, Profinet, EtherCAT protocols.

**Point Cloud** - Set of 3D points representing surface of objects; generated from depth cameras or LiDAR.

**Precision** - In object detection, ratio TP/(TP+FP); how many detections are correct.

---

## Q

**Quantization** - Reducing numerical precision of model weights (e.g., FP32 to INT8); reduces size 4-8× with minimal accuracy loss.

---

## R

**RealSense** - Intel's family of depth cameras using stereo or ToF technology; popular for robotic vision.

**Recall** - In object detection, ratio TP/(TP+FN); what fraction of actual objects are detected.

**Repeatability** - Robot's ability to return to the same position; industrial robots achieve ±0.05-0.5 mm.

**RGB-D** - Image containing both color (RGB) and depth (D) information; enables 3D perception.

**ROI (Return on Investment)** - Profitability measure: (Gain - Cost) / Cost; typical agricultural robots: 2-4 year payback.

**ROS (Robot Operating System)** - Open-source middleware providing tools and libraries for robot software development.

**RRT (Rapidly-exploring Random Tree)** - Sampling-based path planning algorithm for high-dimensional spaces; fast but produces suboptimal paths.

---

## S

**SCARA (Selective Compliance Assembly Robot Arm)** - Robot with two parallel rotary joints and one prismatic joint; fast horizontal motion, common in transplanting.

**Singularity** - Robot configuration where Jacobian matrix becomes singular (det(J)=0); loses mobility in certain directions.

**SLAM (Simultaneous Localization and Mapping)** - Creating map of unknown environment while simultaneously tracking robot's location.

**Soft Robotics** - Robots made from compliant materials (silicone, rubber); safer interaction with delicate objects and humans.

---

## T

**TCP (Tool Center Point)** - Reference point at end effector tip; used for defining robot motions and calculating kinematics.

**TensorRT** - NVIDIA's SDK for optimizing and deploying deep learning models on GPUs; provides 5-10× speedup over standard frameworks.

**tf/tf2** - ROS library for tracking coordinate frame transformations over time.

**ToF (Time-of-Flight)** - Depth sensing technology measuring time for light to travel to object and back.

**Transplanter** - Automated system for moving seedlings from propagation trays to final growing containers; achieves 4,000-12,000 plants/hour.

**TRL (Technology Readiness Level)** - 1-9 scale indicating technology maturity; 1=basic research, 9=proven in production.

---

## U

**Uptime** - Percentage of time system is operational; target >90% for commercial agricultural robots.

---

## V

**Vacuum Gripper** - End effector using suction to grasp smooth objects; holding force F = A × ΔP × η.

**Vision System** - Camera-based perception for object detection, quality inspection, or robot guidance.

---

## W

**Workspace** - Volume of space robot's end effector can reach; for 2-DOF planar arm: annulus from |L₁-L₂| to L₁+L₂.

---

## Y

**YOLO (You Only Look Once)** - Real-time object detection algorithm processing entire image in single pass; popular for agricultural applications achieving >80% mAP.

---

## Acronyms Quick Reference

| Acronym | Full Term |
|---------|-----------|
| AI | Artificial Intelligence |
| AMR | Autonomous Mobile Robot |
| API | Application Programming Interface |
| CAD | Computer-Aided Design |
| CAGR | Compound Annual Growth Rate |
| CEA | Controlled Environment Agriculture |
| CNN | Convolutional Neural Network |
| DH | Denavit-Hartenberg |
| DOF | Degrees of Freedom |
| DWA | Dynamic Window Approach |
| EKF | Extended Kalman Filter |
| FEA | Finite Element Analysis |
| FK | Forward Kinematics |
| FPS | Frames Per Second |
| GPU | Graphics Processing Unit |
| HIL | Hardware-in-the-Loop |
| HSV | Hue Saturation Value |
| IK | Inverse Kinematics |
| IMU | Inertial Measurement Unit |
| IoU | Intersection over Union |
| IRR | Internal Rate of Return |
| KPI | Key Performance Indicator |
| LiDAR | Light Detection and Ranging |
| mAP | mean Average Precision |
| MES | Manufacturing Execution System |
| ML | Machine Learning |
| MTBF | Mean Time Between Failures |
| MTTR | Mean Time To Repair |
| NIR | Near-Infrared |
| NPV | Net Present Value |
| OEE | Overall Equipment Effectiveness |
| PLC | Programmable Logic Controller |
| RGB | Red Green Blue |
| RGB-D | RGB-Depth |
| RMS | Root Mean Square |
| ROI | Return on Investment |
| ROS | Robot Operating System |
| RRT | Rapidly-exploring Random Tree |
| SCADA | Supervisory Control and Data Acquisition |
| SCARA | Selective Compliance Assembly Robot Arm |
| SLAM | Simultaneous Localization and Mapping |
| TCO | Total Cost of Ownership |
| TCP | Tool Center Point |
| ToF | Time-of-Flight |
| TRL | Technology Readiness Level |
| URDF | Unified Robot Description Format |
| WMS | Warehouse Management System |
| YOLO | You Only Look Once |

---

*EcoFusion Academy - Course 407: Agricultural Robotics & Automation*
