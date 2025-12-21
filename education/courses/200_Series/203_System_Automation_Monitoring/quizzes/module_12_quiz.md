# Module 12 Quiz: System Integration & Networking
**Course 203: System Automation & Monitoring**

---

## Instructions
- 10 questions total
- Passing score: 70% (7/10 correct)
- Time limit: 20 minutes
- Open book allowed

---

## Questions

**1. What is the difference between a static IP address and a dynamic IP address?**
   - a) Static IPs are faster than dynamic IPs
   - b) Static IPs are manually assigned and don't change; dynamic IPs are automatically assigned and may change
   - c) Dynamic IPs are more secure than static IPs
   - d) There is no practical difference

**2. Why should critical automation devices use static IP addresses?**
   - a) Static IPs are cheaper
   - b) To prevent devices from becoming unreachable when IP addresses change
   - c) Dynamic IPs don't work with automation
   - d) It's required by electrical code

**3. What are the advantages of RS485 for sensor communication?**
   - a) Extremely high speed data transfer
   - b) Wireless connectivity
   - c) Multi-drop capability (up to 32 devices), long distance (1200m), and reliability
   - d) Plug-and-play with no configuration needed

**4. When should you choose LoRa over Wi-Fi for wireless sensors?**
   - a) When you need high-speed video streaming
   - b) For remote field sensors 2-10 km away with low power consumption
   - c) For indoor applications under 30 meters
   - d) LoRa is never better than Wi-Fi

**5. What is a hybrid (local + cloud) system architecture?**
   - a) A system that uses both Arduino and Raspberry Pi
   - b) A system where critical control runs locally for reliability, but data syncs to cloud for remote monitoring
   - c) A system that runs half in the greenhouse and half in the office
   - d) A backup controller that takes over if the primary fails

**6. What is an API (Application Programming Interface)?**
   - a) A type of sensor
   - b) A method that allows different software systems to communicate and exchange data
   - c) An advanced programming language
   - d) A security protocol for networks

**7. What is MQTT and what is it good for?**
   - a) A database system for large datasets
   - b) A lightweight publish/subscribe messaging protocol ideal for IoT sensor networks
   - c) A programming language for microcontrollers
   - d) A type of network cable

**8. What is the FIRST step in securing an automation system?**
   - a) Install antivirus software
   - b) Change all default passwords to strong, unique passwords
   - c) Disable all network access
   - d) Hire a cybersecurity consultant

**9. Why is network segmentation (VLANs) important for security?**
   - a) It makes the network faster
   - b) It limits the blast radius - if one network is compromised, automation systems on separate networks remain protected
   - c) It's required for Wi-Fi to work
   - d) It reduces equipment costs

**10. What is the recommended remote access method for automation systems?**
   - a) Expose the controller directly to the internet with port forwarding
   - b) Use VPN (Virtual Private Network) for secure encrypted remote access
   - c) Share passwords with cloud services
   - d) Allow anyone to connect for convenience

---

## Answer Key

1. **b) Static IPs are manually assigned and don't change; dynamic IPs are automatically assigned and may change** - Controllers, sensors with network interfaces, and cameras should have static IPs so they remain at the same address and don't become unreachable when DHCP reassigns addresses.

2. **b) To prevent devices from becoming unreachable when IP addresses change** - If a controller's IP changes from 192.168.1.10 to 192.168.1.50, dashboards and monitoring systems configured to access the old address will fail. Static IPs ensure consistent addressing.

3. **c) Multi-drop capability (up to 32 devices), long distance (1200m), and reliability** - RS485 is an industrial serial protocol that allows multiple sensors on one bus, works over long distances, and is noise-immune. It's commonly used with Modbus RTU for sensor communication.

4. **b) For remote field sensors 2-10 km away with low power consumption** - LoRa provides ultra-long-range wireless (2-10 km) with very low power consumption (years on batteries). It's ideal for remote field sensors, weather stations, or large farm sensor networks where Wi-Fi won't reach.

5. **b) A system where critical control runs locally for reliability, but data syncs to cloud for remote monitoring** - Hybrid systems get the best of both: local control is fast and reliable (works even if internet fails), while cloud sync enables remote monitoring, alerts, and backup.

6. **b) A method that allows different software systems to communicate and exchange data** - APIs define how software can request and receive data. REST APIs commonly use HTTP requests to get data (e.g., GET /api/temperature returns current temperature as JSON).

7. **b) A lightweight publish/subscribe messaging protocol ideal for IoT sensor networks** - MQTT uses a broker where sensors publish data to topics and subscribers receive updates automatically. It's lightweight, supports many subscribers, and is perfect for distributed sensor networks.

8. **b) Change all default passwords to strong, unique passwords** - Default passwords (admin/admin, root/root) are the #1 security vulnerability. Attackers know these and try them first. Always change defaults immediately to strong passwords (12+ characters, mixed types).

9. **b) It limits the blast radius - if one network is compromised, automation systems on separate networks remain protected** - Network segmentation isolates different functions (office Wi-Fi, automation, cameras) on separate VLANs. If office Wi-Fi is compromised, hackers can't reach the isolated automation network.

10. **b) Use VPN (Virtual Private Network) for secure encrypted remote access** - VPNs create secure encrypted tunnels for remote access. Only authorized users with VPN credentials can access the local network. This is far more secure than exposing controllers directly to the internet.

---

**Scoring:**
- 9-10 correct: Excellent (90-100%)
- 7-8 correct: Passing (70-80%)
- Below 7: Review Module 12 material and retake quiz

---

*EcoFusion Academy - Course 203, Module 12 Quiz*
