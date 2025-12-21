# Final Exam: System Automation & Monitoring
**Course 203: System Automation & Monitoring**

**Instructions:**
- 50 multiple choice questions
- Passing score: 80% (40/50 correct)
- Time limit: 90 minutes
- Closed book exam
- Select the BEST answer for each question

---

## Part 1: Fundamentals & ROI (Questions 1-10)

**1. What is the primary goal of automation in CEA systems?**
- A) To eliminate all human labor
- B) To improve reliability, reduce labor costs, and optimize production
- C) To comply with regulations
- D) To increase equipment complexity

**2. Calculate the simple payback period: Initial cost $2,000, Annual benefit $6,000, Annual cost $1,000.**
- A) 0.33 years (4 months)
- B) 0.40 years (5 months)
- C) 2 years
- D) 3 years

**3. What is hysteresis in temperature control?**
- A) The time delay between measurement and action
- B) The difference between on and off setpoints to prevent rapid cycling
- C) The accuracy specification of a sensor
- D) A type of temperature sensor

**4. Which function should be automated FIRST in a fish tank?**
- A) Automated feeding
- B) Temperature and DO monitoring with alerts
- C) Water quality data logging
- D) Lighting schedules

**5. What is a fail-safe design?**
- A) A system with backup components
- B) A system that defaults to a safe state when power is lost
- C) A system that never fails
- D) A system with alarms

**6. When is DIY automation (Arduino/RPi) most appropriate?**
- A) Critical life-support systems with high-value livestock
- B) Learning projects and non-critical monitoring
- C) Systems requiring regulatory compliance
- D) Never - always use commercial systems

**7. What does ROI stand for?**
- A) Rate of Investment
- B) Return on Investment
- C) Risk of Implementation
- D) Ratio of Improvement

**8. What percentage of manual tasks can typically be automated in CEA?**
- A) 10-20%
- B) 30-40%
- C) 60-80%
- D) 100%

**9. What is the recommended payback period for most automation investments?**
- A) Less than 12-24 months
- B) 5-10 years
- C) Any payback is acceptable
- D) Immediate (zero cost)

**10. What is alert fatigue?**
- A) Operators becoming tired from walking to check alarms
- B) Operators ignoring alerts due to too many false or redundant notifications
- C) Equipment wearing out from too many alarms
- D) Batteries dying in alert systems

---

## Part 2: Sensors & Instrumentation (Questions 11-20)

**11. How does a pH sensor work?**
- A) Measures light absorption
- B) Measures electrical resistance
- C) Generates voltage based on H+ ion concentration across glass membrane
- D) Counts hydrogen atoms

**12. What is the proper storage for a pH probe?**
- A) Dry in a sealed bag
- B) Distilled water
- C) pH 4.0 buffer or storage solution
- D) Tap water

**13. What is the typical calibration frequency for pH sensors in commercial operations?**
- A) Daily
- B) Weekly
- C) Monthly
- D) Annually

**14. What type of temperature sensor is best for Arduino projects?**
- A) Thermocouple
- B) DS18B20 digital sensor
- C) RTD (Pt100)
- D) Infrared sensor

**15. What does PAR measure?**
- A) Plant absorption rate
- B) Photosynthetically active radiation (400-700nm light)
- C) Pressure and resistance
- D) pH and redox

**16. What is DLI?**
- A) Daily Light Integral (total photons per day)
- B) Direct Light Intensity
- C) Digital Light Interface
- D) Daylight Integration

**17. How does an NDIR CO2 sensor work?**
- A) Chemical reaction
- B) Infrared light absorption by CO2 molecules
- C) Electrical conductivity
- D) Magnetic field detection

**18. What is the advantage of capacitive over resistive soil moisture sensors?**
- A) Lower cost
- B) No direct soil contact, corrosion-resistant
- C) Faster response
- D) Works in all media types without calibration

**19. Why use 4-20mA output instead of 0-20mA?**
- A) Uses less power
- B) 4mA distinguishes working sensor at 0% from broken wire (0mA)
- C) Faster transmission
- D) Industry standard for no technical reason

**20. What is sensor drift?**
- A) Physical movement of the sensor
- B) Gradual change in accuracy over time due to aging or fouling
- C) Electromagnetic interference
- D) Temperature effects

---

## Part 3: Controllers & Automation (Questions 21-30)

**21. What is the main difference between Arduino and Raspberry Pi?**
- A) Arduino is a computer, Raspberry Pi is a microcontroller
- B) Arduino is a microcontroller, Raspberry Pi is a computer
- C) They are identical platforms
- D) Arduino uses Python, Raspberry Pi uses C++

**22. What is ladder logic?**
- A) A programming language for web development
- B) A visual programming method for PLCs resembling electrical diagrams
- C) A type of network protocol
- D) A sensor calibration technique

**23. What is a relay used for?**
- A) To measure current
- B) To isolate and switch high-voltage/current loads using low-voltage control signals
- C) To convert AC to DC
- D) To communicate between devices

**24. What is PWM (Pulse Width Modulation) used for?**
- A) Measuring sensor frequency
- B) Controlling variable outputs like LED brightness or motor speed
- C) Network communication
- D) Power supply filtering

**25. What is a watchdog timer?**
- A) A clock for time-of-day control
- B) A safety mechanism that detects if controller has frozen and forces reset
- C) A timer for irrigation scheduling
- D) A countdown to maintenance

**26. What is an analog input?**
- A) An on/off signal
- B) A continuous range of voltage or current representing a value
- C) A digital communication protocol
- D) A type of sensor

**27. What is normally closed (NC) vs. normally open (NO) in valves?**
- A) NC is closed when powered, NO is open when powered
- B) NC is closed when NOT powered, NO is open when NOT powered
- C) They refer to installation orientation
- D) NC is for cold water, NO is for hot water

**28. Why use VFDs (variable frequency drives)?**
- A) To measure frequency
- B) To control motor/pump speed and save energy
- C) To filter power
- D) To communicate with devices

**29. What is a PID controller?**
- A) A type of sensor
- B) An advanced control algorithm using Proportional-Integral-Derivative
- C) A network protocol
- D) A power supply

**30. What is the purpose of anti-short-cycle protection for pumps?**
- A) To prevent water from flowing backwards
- B) To prevent rapid on/off cycling that damages motors
- C) To protect against low voltage
- D) To filter debris

---

## Part 4: Integration & Networking (Questions 31-40)

**31. What is an API?**
- A) Automated Programming Interface
- B) Application Programming Interface for software to communicate
- C) Advanced Process Indicator
- D) Analog Power Input

**32. What is the advantage of MQTT over HTTP for IoT?**
- A) Higher security
- B) Lightweight, publish/subscribe model, better for many sensors
- C) Faster speed
- D) Works without internet

**33. What is a static IP address?**
- A) An IP that never changes, manually assigned
- B) An IP assigned automatically by DHCP that may change
- C) An encrypted IP address
- D) A temporary IP

**34. What protocol is commonly used for industrial sensors (Modbus)?**
- A) HTTP
- B) RS485 serial communication
- C) Bluetooth
- D) Wi-Fi

**35. What is the advantage of a hybrid (local + cloud) system?**
- A) Lower cost
- B) Local control remains functional if internet fails, cloud provides remote access
- C) Faster than either alone
- D) No maintenance needed

**36. What is LoRa wireless best suited for?**
- A) High-speed video streaming
- B) Long-range (km), low-power sensor networks in rural areas
- C) Indoor Wi-Fi replacement
- D) Real-time control signals

**37. What is the first rule of cybersecurity for automation systems?**
- A) Use the latest technology
- B) Change default passwords immediately
- C) Connect everything to the internet
- D) Disable all firewalls

**38. What is a VPN used for?**
- A) Increasing internet speed
- B) Secure remote access to local network over internet
- C) Measuring voltage
- D) Controlling valves

**39. What is the purpose of network segmentation (VLANs)?**
- A) To increase internet speed
- B) To isolate different device types for security and traffic management
- C) To reduce equipment costs
- D) To eliminate the need for routers

**40. Why use HTTPS instead of HTTP for dashboards?**
- A) Faster loading
- B) Encryption prevents password sniffing and data interception
- C) Required by all browsers
- D) Uses less bandwidth

---

## Part 5: Practical Application & Troubleshooting (Questions 41-50)

**41. A pH sensor reads 12.5 (impossible for your system). What's the likely cause?**
- A) The solution really is pH 12.5
- B) Sensor failure (open circuit, broken glass)
- C) Calibration is slightly off
- D) Temperature compensation error

**42. Your system randomly resets. What should you check first?**
- A) Software bugs
- B) Power supply capacity and voltage under load
- C) Network settings
- D) Sensor calibration

**43. What is the systematic troubleshooting first step?**
- A) Replace all components
- B) Observe and define the problem clearly
- C) Call technical support
- D) Restart the system

**44. A temperature reading is 10°F higher than actual. What's a possible cause?**
- A) Sensor in direct sunlight (solar heating) or near a heat source
- B) Low battery
- C) Network interference
- D) Incorrect time setting

**45. What is the purpose of time-based alert suppression?**
- A) To silence all alarms at night
- B) To filter brief transient spikes and reduce false alarms
- C) To save battery power
- D) To comply with regulations

**46. How often should you test backup systems (UPS, alarms)?**
- A) Never - they'll work when needed
- B) Monthly
- C) Annually
- D) Only after they fail once

**47. What should be included in a troubleshooting log?**
- A) Only the final solution
- B) Problem, symptoms, diagnosis, solution, and verification
- C) Just the date and operator name
- D) Only error codes

**48. What is the target DLI for lettuce?**
- A) 5-8 mol/m²/day
- B) 12-16 mol/m²/day
- C) 25-30 mol/m²/day
- D) 40-50 mol/m²/day

**49. What is VPD (Vapor Pressure Deficit)?**
- A) Variable Power Distribution
- B) A measure of atmospheric drying power based on temp and humidity
- C) Vertical Plant Density
- D) Valve Pressure Differential

**50. In a capstone project, what is the MOST important consideration?**
- A) Using the most expensive equipment
- B) Matching automation to actual needs, risks, and budget with clear ROI
- C) Automating everything possible
- D) Using only DIY components

---

## Answer Key

### Part 1: Fundamentals & ROI
1. B | 2. A (2000/(6000-1000)=0.4 years) | 3. B | 4. B | 5. B | 6. B | 7. B | 8. C | 9. A | 10. B

### Part 2: Sensors & Instrumentation
11. C | 12. C | 13. B | 14. B | 15. B | 16. A | 17. B | 18. B | 19. B | 20. B

### Part 3: Controllers & Automation
21. B | 22. B | 23. B | 24. B | 25. B | 26. B | 27. B | 28. B | 29. B | 30. B

### Part 4: Integration & Networking
31. B | 32. B | 33. A | 34. B | 35. B | 36. B | 37. B | 38. B | 39. B | 40. B

### Part 5: Practical Application
41. B | 42. B | 43. B | 44. A | 45. B | 46. B | 47. B | 48. B | 49. B | 50. B

---

## Scoring

**Points:** Each question worth 2 points, Total: 100 points

**Grading Scale:**
- 90-100 points (45-50 correct): A - Excellent
- 80-89 points (40-44 correct): B - Good (PASSING)
- 70-79 points (35-39 correct): C - Fair (NOT PASSING)
- Below 70 points (<35 correct): Review material and retake

**Passing Requirement:** 80% (40/50 questions correct)

---

**Note to Students:**

This final exam tests your comprehensive understanding of automation and monitoring for CEA systems. Topics span all 14 modules:
- Modules 1-2: Fundamentals, sensors overview
- Modules 3-4: Specific sensor types
- Modules 5-8: Controllers and actuation
- Modules 9-10: Climate control and alerts
- Modules 11-12: Data and integration
- Modules 13-14: Troubleshooting and application

Study all modules thoroughly. Good luck!

---

*End of Final Exam*
