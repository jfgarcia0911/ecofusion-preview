# Additional Hands-On Activities

## Activity 2: Computer Vision for Plant Disease Detection

### Objective
Build a CNN-based plant disease detection system using transfer learning.

### Tasks:
1. **Data Collection** (2 hours)
   - Download PlantVillage dataset or use provided images
   - Organize into train/validation/test folders
   - Perform data augmentation

2. **Model Development** (3 hours)
   - Implement transfer learning with ResNet50/EfficientNet
   - Fine-tune on plant disease dataset
   - Evaluate with confusion matrix and classification report

3. **Deployment** (2 hours)
   - Convert model to TFLite for edge deployment
   - Create mobile-friendly API
   - Test on real plant images

4. **Visualization** (1 hour)
   - Implement Grad-CAM for model interpretability
   - Create visual disease detection pipeline
   - Generate report with examples

### Deliverables:
- Trained CNN model with >90% accuracy
- TFLite model for mobile deployment
- API with image upload functionality
- Report with Grad-CAM visualizations

**Estimated Time:** 8 hours
**Points:** 100 (with 20 bonus points for mobile app)

---

## Activity 3: Reinforcement Learning for Climate Control

### Objective
Develop an RL agent to optimize greenhouse climate control.

### Tasks:
1. **Environment Setup** (2 hours)
   - Create greenhouse simulation environment
   - Define state space (temperature, humidity, CO2, etc.)
   - Define action space (HVAC, vents, CO2 injection)
   - Implement reward function (growth + energy efficiency)

2. **Agent Development** (4 hours)
   - Implement DQN or PPO agent
   - Train agent in simulation
   - Track learning progress and rewards
   - Compare to baseline (rule-based control)

3. **Optimization** (2 hours)
   - Tune hyperparameters
   - Implement experience replay
   - Add target networks for stability

4. **Evaluation** (2 hours)
   - Test on various scenarios (seasons, crop types)
   - Calculate energy savings vs baseline
   - Generate performance visualizations

### Deliverables:
- Working RL agent outperforming baseline
- Training curves and performance metrics
- Energy efficiency analysis
- Simulation environment code

**Estimated Time:** 10 hours
**Points:** 100 (with 20 bonus for digital twin integration)

---

## Grading Rubric for All Activities

| Category | Excellent (90-100%) | Good (80-89%) | Satisfactory (70-79%) | Needs Work (<70%) |
|----------|-------------------|---------------|---------------------|-------------------|
| **Code Quality** | Clean, documented, follows best practices | Mostly clean, some documentation | Works but messy, minimal docs | Poor quality, unclear |
| **Technical Implementation** | Advanced techniques, optimized | Solid implementation | Basic implementation works | Incomplete or buggy |
| **Results** | Exceeds requirements, excellent metrics | Meets requirements | Acceptable results | Poor performance |
| **Documentation** | Comprehensive, professional | Clear and complete | Basic but adequate | Insufficient |
| **Creativity** | Innovative solutions, extras | Some creative elements | Standard approach | No innovation |

---

## Activity Support

**Getting Help:**
- Weekly lab sessions: Fridays 1-3 PM
- Online forum: Available 24/7
- Code review: Submit draft for feedback
- Office hours: Book 1-on-1 sessions

**Common Issues & Solutions:**
- Environment setup problems: Use Docker container
- Dataset access: Provided on course platform
- Computational resources: Cloud credits available
- Model training time: Use pre-trained checkpoints

---

*Activities 2-3 Summary - Course 404*
