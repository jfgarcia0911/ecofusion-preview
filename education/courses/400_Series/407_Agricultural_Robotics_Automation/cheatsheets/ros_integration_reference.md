# Quick Reference: ROS Integration for Agricultural Robots

## ROS Basics

### Core Concepts
```
Node: Independent process (sensor driver, controller, etc.)
Topic: Named bus for message passing (pub/sub pattern)
Service: Request/response communication (synchronous)
Action: Long-running tasks with feedback (asynchronous)
Parameter Server: Shared configuration storage
```

### Common Commands
```bash
# List nodes
rosnode list

# List topics
rostopic list

# Echo topic data
rostopic echo /robot/status

# Show topic info
rostopic info /camera/image_raw

# Publish to topic
rostopic pub /cmd_vel geometry_msgs/Twist "linear: {x: 0.5}"

# Show node info
rosnode info /my_robot_node

# Check parameter
rosparam get /robot/max_speed

# Set parameter
rosparam set /robot/max_speed 1.5
```

## ROS Node Template

```python
#!/usr/bin/env python3
import rospy
from std_msgs.msg import String
from geometry_msgs.msg import Twist

class MyRobotNode:
    def __init__(self):
        rospy.init_node('my_robot_node')

        # Publishers
        self.cmd_pub = rospy.Publisher('/cmd_vel', Twist, queue_size=10)
        self.status_pub = rospy.Publisher('/robot/status', String, queue_size=10)

        # Subscribers
        rospy.Subscriber('/target_position', Twist, self.target_callback)

        # Parameters
        self.max_speed = rospy.get_param('~max_speed', 1.0)

        # Timer (10 Hz)
        self.timer = rospy.Timer(rospy.Duration(0.1), self.timer_callback)

        rospy.loginfo("My Robot Node initialized")

    def target_callback(self, msg):
        """Handle incoming target position"""
        rospy.loginfo(f"Received target: {msg}")
        # Process and send command
        cmd = Twist()
        cmd.linear.x = min(msg.linear.x, self.max_speed)
        self.cmd_pub.publish(cmd)

    def timer_callback(self, event):
        """Periodic update (10 Hz)"""
        status = String()
        status.data = "Running"
        self.status_pub.publish(status)

if __name__ == '__main__':
    try:
        node = MyRobotNode()
        rospy.spin()
    except rospy.ROSInterruptException:
        pass
```

## Navigation Stack

### move_base Configuration
```yaml
# base_local_planner_params.yaml
TrajectoryPlannerROS:
  max_vel_x: 0.5
  min_vel_x: 0.1
  max_vel_theta: 1.0
  min_vel_theta: -1.0
  min_in_place_vel_theta: 0.4

  acc_lim_x: 2.5
  acc_lim_theta: 3.2

  holonomic_robot: false

# costmap_common_params.yaml
obstacle_range: 2.5
raytrace_range: 3.0
footprint: [[0.3, 0.3], [-0.3, 0.3], [-0.3, -0.3], [0.3, -0.3]]
inflation_radius: 0.55

observation_sources: laser_scan_sensor
laser_scan_sensor: {sensor_frame: laser, data_type: LaserScan, topic: /scan, marking: true, clearing: true}
```

### Sending Navigation Goals
```python
import actionlib
from move_base_msgs.msg import MoveBaseAction, MoveBaseGoal

def navigate_to(x, y, theta):
    client = actionlib.SimpleActionClient('move_base', MoveBaseAction)
    client.wait_for_server()

    goal = MoveBaseGoal()
    goal.target_pose.header.frame_id = "map"
    goal.target_pose.header.stamp = rospy.Time.now()
    goal.target_pose.pose.position.x = x
    goal.target_pose.pose.position.y = y
    goal.target_pose.pose.orientation.z = np.sin(theta/2)
    goal.target_pose.pose.orientation.w = np.cos(theta/2)

    client.send_goal(goal)
    wait = client.wait_for_result()
    if not wait:
        rospy.logerr("Action server not available!")
    else:
        return client.get_result()
```

## MoveIt (Motion Planning)

### Move Group Interface
```python
import moveit_commander

# Initialize
moveit_commander.roscpp_initialize(sys.argv)
robot = moveit_commander.RobotCommander()
scene = moveit_commander.PlanningSceneInterface()
group = moveit_commander.MoveGroupCommander("arm")

# Set target
group.set_pose_target([0.3, 0.2, 0.5, 0, 0, 0])  # x,y,z,r,p,y

# Plan and execute
plan = group.plan()
group.execute(plan, wait=True)

# Or: plan + execute in one step
group.go(wait=True)
group.stop()
group.clear_pose_targets()
```

### Add Collision Objects
```python
from geometry_msgs.msg import PoseStamped

# Add box obstacle
box_pose = PoseStamped()
box_pose.header.frame_id = "world"
box_pose.pose.position.x = 0.5
box_pose.pose.position.y = 0.0
box_pose.pose.position.z = 0.25
scene.add_box("obstacle1", box_pose, size=(0.1, 0.1, 0.5))
```

## TF (Transform) System

### Publishing Transforms
```python
import tf2_ros
from geometry_msgs.msg import TransformStamped

def publish_transform():
    br = tf2_ros.TransformBroadcaster()
    t = TransformStamped()

    t.header.stamp = rospy.Time.now()
    t.header.frame_id = "world"
    t.child_frame_id = "robot"
    t.transform.translation.x = 1.0
    t.transform.translation.y = 2.0
    t.transform.translation.z = 0.0
    t.transform.rotation.w = 1.0  # No rotation

    br.sendTransform(t)
```

### Looking Up Transforms
```python
import tf2_ros

tfBuffer = tf2_ros.Buffer()
listener = tf2_ros.TransformListener(tfBuffer)

try:
    # Get transform from 'world' to 'robot' frame
    trans = tfBuffer.lookup_transform('world', 'robot', rospy.Time(0), rospy.Duration(1.0))
    x = trans.transform.translation.x
    y = trans.transform.translation.y
except (tf2_ros.LookupException, tf2_ros.ConnectivityException, tf2_ros.ExtrapolationException):
    rospy.logerr("Transform lookup failed")
```

## Launch Files

```xml
<launch>
  <!-- Parameters -->
  <param name="robot_description" textfile="$(find my_robot)/urdf/robot.urdf"/>
  <param name="max_speed" value="1.5"/>

  <!-- Nodes -->
  <node name="robot_state_publisher" pkg="robot_state_publisher" type="robot_state_publisher"/>

  <node name="my_robot_node" pkg="my_robot" type="my_robot_node.py" output="screen">
    <param name="frequency" value="10.0"/>
    <remap from="/cmd_vel" to="/mobile_base/cmd_vel"/>
  </node>

  <!-- Include other launch files -->
  <include file="$(find my_robot)/launch/sensors.launch"/>

  <!-- Conditional nodes -->
  <group if="$(arg use_simulation)">
    <node name="gazebo" pkg="gazebo_ros" type="gazebo"/>
  </group>
</launch>
```

## Common Message Types

```python
# geometry_msgs
from geometry_msgs.msg import Twist, Pose, PoseStamped, Point, Quaternion

# sensor_msgs
from sensor_msgs.msg import Image, LaserScan, JointState, PointCloud2

# std_msgs
from std_msgs.msg import String, Int32, Float64, Bool

# Example: Twist (velocity command)
cmd = Twist()
cmd.linear.x = 0.5   # m/s forward
cmd.angular.z = 0.3  # rad/s turn

# Example: Pose
pose = Pose()
pose.position.x = 1.0
pose.position.y = 2.0
pose.position.z = 0.5
pose.orientation.w = 1.0  # No rotation
```

## Image Processing with ROS

```python
from sensor_msgs.msg import Image
from cv_bridge import CvBridge
import cv2

class ImageProcessor:
    def __init__(self):
        self.bridge = CvBridge()
        rospy.Subscriber('/camera/image_raw', Image, self.image_callback)
        self.image_pub = rospy.Publisher('/processed_image', Image, queue_size=1)

    def image_callback(self, msg):
        # Convert ROS Image to OpenCV
        cv_image = self.bridge.imgmsg_to_cv2(msg, desired_encoding='bgr8')

        # Process
        processed = cv2.cvtColor(cv_image, cv2.COLOR_BGR2GRAY)

        # Convert back and publish
        out_msg = self.bridge.cv2_to_imgmsg(processed, encoding='mono8')
        self.image_pub.publish(out_msg)
```

## Debugging Tips

```bash
# Visualize TF tree
rosrun tf view_frames

# Check for errors in messages
rostopic echo /rosout

# Record data for later playback
rosbag record -a  # Record all topics
rosbag record /camera/image_raw /odom  # Specific topics

# Playback recorded data
rosbag play mybag.bag

# RViz visualization
rosrun rviz rviz

# RQT tools
rqt_graph  # Node/topic graph
rqt_plot  # Plot numeric data
rqt_image_view  # View images
```

## Performance Optimization

```python
# Use nodelets for zero-copy image transport
<node pkg="nodelet" type="nodelet" name="my_nodelet" args="load my_pkg/MyNodelet manager"/>

# Adjust queue sizes
pub = rospy.Publisher('/topic', Msg, queue_size=1)  # Latest only
pub = rospy.Publisher('/topic', Msg, queue_size=100)  # Buffer more

# Use compressed images for network efficiency
from sensor_msgs.msg import CompressedImage
rospy.Subscriber('/camera/image_raw/compressed', CompressedImage, callback)

# Throttle high-rate topics
rostopic hz /camera/image_raw  # Check current rate
rosrun topic_tools throttle messages /camera/image_raw 10.0 /camera/image_throttled
```

## Integration with Industrial Hardware

```python
# Modbus TCP example
from pymodbus.client.sync import ModbusTcpClient

class ModbusInterface:
    def __init__(self, ip='192.168.1.10'):
        self.client = ModbusTcpClient(ip, port=502)
        rospy.Subscriber('/robot/command', Int32, self.command_callback)

    def command_callback(self, msg):
        # Write to PLC
        self.client.write_register(100, msg.data)

    def read_sensors(self):
        # Read from PLC
        result = self.client.read_holding_registers(0, 10)
        return result.registers
```

---

**Pro Tips:**
- Use `roslaunch` for complex multi-node systems
- Always check `/rosout` for error messages
- Record bags during testing for offline debugging
- Use namespaces to avoid topic name conflicts in multi-robot systems
- Set queue_size=1 for sensor data (latest only matters)
- Use tf2 (not deprecated tf) for transforms
- Leverage RViz for visualization and debugging
