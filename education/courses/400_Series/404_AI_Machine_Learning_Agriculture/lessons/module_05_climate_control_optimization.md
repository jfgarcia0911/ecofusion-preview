# Module 5: Climate Control Optimization Algorithms

## Module Overview

This module explores the application of reinforcement learning and optimization algorithms to intelligent climate control in controlled environment agriculture. Students will learn to design, implement, and deploy autonomous systems that optimize temperature, humidity, CO2, and lighting parameters for maximum crop performance while minimizing energy consumption.

**Duration:** 8-10 hours
**Level:** Expert (400-level)
**Prerequisites:** Modules 1-4, understanding of control systems and optimization

---

## Learning Objectives

By the end of this module, you will be able to:

1. Explain reinforcement learning fundamentals and their application to climate control
2. Design reward functions that balance crop performance and energy efficiency
3. Implement Deep Q-Networks (DQN) for HVAC control optimization
4. Apply model-based and model-free RL approaches to CEA systems
5. Develop multi-objective optimization strategies for competing goals
6. Evaluate and compare different climate control algorithms
7. Deploy RL-based control systems in production environments
8. Monitor and improve autonomous climate control performance

---

## Timed Lesson Outline

### Part 1: Introduction to RL for Climate Control (90 minutes)
- Reinforcement learning fundamentals (30 min)
- Climate control as an RL problem (20 min)
- State, action, and reward spaces (25 min)
- Exploration vs. exploitation strategies (15 min)

### Part 2: Model-Free Approaches (120 minutes)
- Q-Learning basics (30 min)
- Deep Q-Networks (DQN) architecture (35 min)
- Policy gradient methods (30 min)
- Hands-on: Implementing simple RL controller (25 min)

### Part 3: Model-Based Approaches (90 minutes)
- Environmental modeling techniques (25 min)
- Model Predictive Control (MPC) (30 min)
- Hybrid RL-MPC approaches (20 min)
- Simulation environments (15 min)

### Part 4: Multi-Objective Optimization (120 minutes)
- Competing objectives in CEA (20 min)
- Pareto optimization concepts (25 min)
- Energy-productivity tradeoffs (30 min)
- Advanced reward function design (25 min)
- Case studies (20 min)

### Part 5: Implementation & Deployment (120 minutes)
- Safety constraints and fail-safes (25 min)
- Sim-to-real transfer strategies (30 min)
- A/B testing and gradual rollout (20 min)
- Monitoring and continuous learning (25 min)
- Production deployment best practices (20 min)

**Total Time:** 540 minutes (9 hours)

---

## 1. Reinforcement Learning Fundamentals

### 1.1 What is Reinforcement Learning?

**Reinforcement Learning (RL)** is a machine learning paradigm where an agent learns to make decisions by interacting with an environment to maximize cumulative rewards.

```
RL Framework Components:
┌────────────────────────────────────────────────────┐
│                                                    │
│    ┌─────────┐                    ┌─────────┐    │
│    │  AGENT  │◄───────state───────│  ENV    │    │
│    │   (AI)  │                    │ (CEA)   │    │
│    └────┬────┘                    └────▲────┘    │
│         │                              │         │
│         │                              │         │
│         └──────────action──────────────┘         │
│                      │                           │
│                   reward                         │
│                      │                           │
│                      ▼                           │
│              Learning & Improvement              │
└────────────────────────────────────────────────────┘

Key Concepts:
• State (s): Current condition of the environment
• Action (a): Decision made by the agent
• Reward (r): Feedback signal for the action
• Policy (π): Strategy for selecting actions
• Value Function (V): Expected future rewards
```

### 1.2 Climate Control as an RL Problem

**State Space (Observations):**
```
Environmental Sensors:
├── Temperature (°C): [18, 28]
├── Humidity (%RH): [50, 85]
├── CO2 (ppm): [400, 1500]
├── Light intensity (μmol/m²/s): [0, 1000]
├── VPD (kPa): [0.4, 1.2]
└── Time features: hour, day, season

Plant Metrics:
├── Growth rate (cm/day)
├── Leaf temperature (°C)
├── Transpiration rate
├── Photosynthesis rate (estimated)
└── Stress indicators

System Status:
├── HVAC power consumption (kW)
├── Equipment status (on/off)
├── Outside weather conditions
└── Energy prices ($/kWh)
```

**Action Space (Controls):**
```
Discrete Actions (simplified):
├── Temperature setpoint: {decrease, maintain, increase}
├── Humidity setpoint: {decrease, maintain, increase}
├── CO2 injection: {off, low, medium, high}
├── Supplemental lighting: {off, 25%, 50%, 75%, 100%}
└── Ventilation: {closed, low, medium, high}

Continuous Actions (advanced):
├── Temperature setpoint: [18.0, 28.0] °C
├── Humidity setpoint: [50.0, 85.0] %RH
├── CO2 target: [400, 1500] ppm
├── Light intensity: [0, 1000] μmol/m²/s
└── Vent opening: [0.0, 1.0] (0-100%)
```

**Reward Function Design:**
```python
def calculate_reward(state, action, next_state):
    """
    Multi-objective reward function balancing
    crop performance and energy efficiency.
    """
    # Crop performance metrics
    growth_rate = next_state['growth_rate']
    optimal_growth = 0.8  # cm/day target
    growth_reward = -abs(growth_rate - optimal_growth)

    # Environmental comfort (VPD-based)
    vpd = next_state['vpd']
    optimal_vpd = 0.85  # kPa target for leafy greens
    vpd_penalty = -10 * abs(vpd - optimal_vpd)

    # Energy efficiency
    energy_used = action['hvac_power'] + action['light_power']
    energy_penalty = -0.5 * energy_used  # $/kWh cost

    # Stability bonus (avoid rapid changes)
    action_change = calculate_action_change(action, previous_action)
    stability_bonus = -2 * action_change

    # Constraint violations
    temp = next_state['temperature']
    if temp < 16 or temp > 30:
        constraint_penalty = -100  # Severe penalty
    else:
        constraint_penalty = 0

    total_reward = (
        10 * growth_reward +      # Weight: crop performance
        5 * vpd_penalty +         # Weight: environment
        1 * energy_penalty +      # Weight: efficiency
        stability_bonus +
        constraint_penalty
    )

    return total_reward
```

### 1.3 Exploration vs. Exploitation

**The Exploration-Exploitation Dilemma:**
```
EXPLOITATION                    EXPLORATION
(Use known best)               (Try new options)
      │                              │
      ├─> Maximize short-term        ├─> Discover better
      │   rewards                    │   long-term strategies
      │                              │
      ├─> Low risk                   ├─> Higher risk
      │                              │
      ├─> May miss better            ├─> May perform poorly
      │   options                    │   initially
      │                              │
      └─> Stable performance         └─> Learning opportunity

STRATEGIES:
┌──────────────────────────────────────────────┐
│ 1. ε-Greedy:                                 │
│    • Exploit with probability (1-ε)          │
│    • Explore with probability ε              │
│    • Typically ε = 0.1 to 0.3                │
│                                              │
│ 2. ε-Decay:                                  │
│    • Start with high ε (exploration)         │
│    • Gradually reduce ε over time            │
│    • Example: ε = 1.0 → 0.01                │
│                                              │
│ 3. Upper Confidence Bound (UCB):             │
│    • Balance between value and uncertainty   │
│    • Select actions with high potential      │
│                                              │
│ 4. Thompson Sampling:                        │
│    • Probabilistic exploration               │
│    • Bayesian approach                       │
└──────────────────────────────────────────────┘
```

**Safety Considerations for CEA:**
```python
# Safe exploration strategy
def safe_epsilon_greedy(state, q_values, epsilon=0.1, safe_actions=None):
    """
    Modified ε-greedy with safety constraints.
    """
    if safe_actions is None:
        safe_actions = get_safe_actions(state)

    if random.random() < epsilon:
        # Explore: randomly select from SAFE actions only
        action = random.choice(safe_actions)
    else:
        # Exploit: choose best action from safe set
        safe_q_values = {a: q_values[a] for a in safe_actions}
        action = max(safe_q_values, key=safe_q_values.get)

    return action

def get_safe_actions(state):
    """
    Filter actions to ensure plant safety.
    """
    safe_actions = []
    current_temp = state['temperature']

    for action in all_possible_actions:
        predicted_temp = predict_temperature(state, action)

        # Safety bounds for lettuce
        if 16 <= predicted_temp <= 28:
            safe_actions.append(action)

    return safe_actions if safe_actions else [default_safe_action]
```

---

## 2. Deep Q-Networks for Climate Control

### 2.1 Q-Learning Review

**Q-Value Definition:**
```
Q(s, a) = Expected cumulative reward for taking action 'a' in state 's'

Q-Learning Update Rule:
Q(s, a) ← Q(s, a) + α[r + γ·max Q(s', a') - Q(s, a)]
                        a'

Where:
• α = learning rate (0.001 - 0.1)
• γ = discount factor (0.9 - 0.99)
• r = immediate reward
• s' = next state
• max Q(s', a') = best future value
    a'
```

**Tabular Q-Learning Limitations:**
- Cannot handle continuous state spaces
- Requires discretization (loss of precision)
- Memory scales with state-action combinations
- No generalization to unseen states

### 2.2 Deep Q-Network Architecture

**DQN Solution:**
Use neural network to approximate Q-function for continuous states.

```
DQN Architecture for Climate Control
=====================================

INPUT LAYER (State Features)
┌─────────────────────────────────┐
│ Temperature, Humidity, CO2,     │
│ Light, VPD, Time, Power, etc.   │
│ Dimension: 20 features          │
└──────────────┬──────────────────┘
               │
    ┌──────────▼──────────┐
    │  Dense Layer (128)  │
    │  ReLU Activation    │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │  Dense Layer (128)  │
    │  ReLU Activation    │
    └──────────┬──────────┘
               │
    ┌──────────▼──────────┐
    │  Dense Layer (64)   │
    │  ReLU Activation    │
    └──────────┬──────────┘
               │
OUTPUT LAYER (Q-Values)
┌──────────────▼──────────────────┐
│ Q(s, temp↓), Q(s, temp→),       │
│ Q(s, temp↑), Q(s, humid↓), ...  │
│ Dimension: # of discrete actions│
└─────────────────────────────────┘
```

**Implementation Example:**

```python
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
from collections import deque

class ClimateControlDQN(nn.Module):
    def __init__(self, state_dim, action_dim):
        super(ClimateControlDQN, self).__init__()

        self.network = nn.Sequential(
            nn.Linear(state_dim, 128),
            nn.ReLU(),
            nn.Dropout(0.2),

            nn.Linear(128, 128),
            nn.ReLU(),
            nn.Dropout(0.2),

            nn.Linear(128, 64),
            nn.ReLU(),

            nn.Linear(64, action_dim)
        )

    def forward(self, state):
        return self.network(state)

class DQNAgent:
    def __init__(self, state_dim, action_dim):
        self.state_dim = state_dim
        self.action_dim = action_dim

        # Main network
        self.q_network = ClimateControlDQN(state_dim, action_dim)
        # Target network (for stability)
        self.target_network = ClimateControlDQN(state_dim, action_dim)
        self.target_network.load_state_dict(self.q_network.state_dict())

        self.optimizer = optim.Adam(self.q_network.parameters(), lr=0.001)
        self.loss_fn = nn.MSELoss()

        # Replay buffer
        self.replay_buffer = deque(maxlen=10000)

        # Hyperparameters
        self.gamma = 0.99  # Discount factor
        self.epsilon = 1.0  # Exploration rate
        self.epsilon_decay = 0.995
        self.epsilon_min = 0.01
        self.batch_size = 64
        self.update_target_every = 100
        self.steps = 0

    def select_action(self, state, safe_actions=None):
        """
        ε-greedy action selection with safety constraints.
        """
        if np.random.random() < self.epsilon:
            # Explore
            if safe_actions:
                return np.random.choice(safe_actions)
            return np.random.randint(self.action_dim)
        else:
            # Exploit
            with torch.no_grad():
                state_tensor = torch.FloatTensor(state).unsqueeze(0)
                q_values = self.q_network(state_tensor).numpy()[0]

                if safe_actions:
                    # Mask unsafe actions
                    safe_q_values = {a: q_values[a] for a in safe_actions}
                    return max(safe_q_values, key=safe_q_values.get)

                return np.argmax(q_values)

    def store_transition(self, state, action, reward, next_state, done):
        """
        Store experience in replay buffer.
        """
        self.replay_buffer.append((state, action, reward, next_state, done))

    def train(self):
        """
        Train the Q-network using experience replay.
        """
        if len(self.replay_buffer) < self.batch_size:
            return

        # Sample mini-batch
        batch = np.random.choice(
            len(self.replay_buffer),
            self.batch_size,
            replace=False
        )

        states = []
        actions = []
        rewards = []
        next_states = []
        dones = []

        for idx in batch:
            s, a, r, s_next, d = self.replay_buffer[idx]
            states.append(s)
            actions.append(a)
            rewards.append(r)
            next_states.append(s_next)
            dones.append(d)

        states = torch.FloatTensor(states)
        actions = torch.LongTensor(actions)
        rewards = torch.FloatTensor(rewards)
        next_states = torch.FloatTensor(next_states)
        dones = torch.FloatTensor(dones)

        # Current Q-values
        current_q_values = self.q_network(states).gather(1, actions.unsqueeze(1))

        # Target Q-values
        with torch.no_grad():
            next_q_values = self.target_network(next_states).max(1)[0]
            target_q_values = rewards + (1 - dones) * self.gamma * next_q_values

        # Compute loss and update
        loss = self.loss_fn(current_q_values.squeeze(), target_q_values)

        self.optimizer.zero_grad()
        loss.backward()
        # Gradient clipping for stability
        torch.nn.utils.clip_grad_norm_(self.q_network.parameters(), 1.0)
        self.optimizer.step()

        # Update target network periodically
        self.steps += 1
        if self.steps % self.update_target_every == 0:
            self.target_network.load_state_dict(self.q_network.state_dict())

        # Decay epsilon
        self.epsilon = max(self.epsilon_min, self.epsilon * self.epsilon_decay)

        return loss.item()
```

### 2.3 Experience Replay

**Why Experience Replay?**
```
PROBLEM: Sequential Data Correlation
├── Consecutive samples are highly correlated
├── Violates i.i.d. assumption of SGD
└── Leads to unstable learning

SOLUTION: Experience Replay Buffer
┌─────────────────────────────────────┐
│  Store transitions: (s, a, r, s')  │
│  Sample random mini-batches         │
│  Break temporal correlations        │
│  Improve data efficiency            │
└─────────────────────────────────────┘

Replay Buffer Structure:
┌───┬──────────┬────────┬────────┬──────────┬──────┐
│ t │  State   │ Action │ Reward │ Next St. │ Done │
├───┼──────────┼────────┼────────┼──────────┼──────┤
│ 1 │ [22, 65] │   2    │  0.5   │ [22.5,64]│False │
│ 2 │ [22.5,64]│   1    │  0.3   │ [23, 63] │False │
│...│   ...    │  ...   │  ...   │   ...    │ ...  │
│1k │ [21, 70] │   0    │  -0.2  │ [20.5,71]│False │
└───┴──────────┴────────┴────────┴──────────┴──────┘
       ↓ Sample random batch
    Train network
```

### 2.4 Training Process

```python
def train_climate_controller(env, agent, episodes=1000):
    """
    Train DQN agent for climate control.
    """
    episode_rewards = []
    losses = []

    for episode in range(episodes):
        state = env.reset()
        episode_reward = 0
        done = False
        step = 0

        while not done and step < 288:  # 24 hours (5-min steps)
            # Select action
            safe_actions = env.get_safe_actions(state)
            action = agent.select_action(state, safe_actions)

            # Take action in environment
            next_state, reward, done, info = env.step(action)

            # Store transition
            agent.store_transition(state, action, reward, next_state, done)

            # Train agent
            loss = agent.train()
            if loss is not None:
                losses.append(loss)

            episode_reward += reward
            state = next_state
            step += 1

        episode_rewards.append(episode_reward)

        # Logging
        if (episode + 1) % 10 == 0:
            avg_reward = np.mean(episode_rewards[-10:])
            avg_loss = np.mean(losses[-100:]) if losses else 0
            print(f"Episode {episode+1}/{episodes}")
            print(f"  Avg Reward: {avg_reward:.2f}")
            print(f"  Avg Loss: {avg_loss:.4f}")
            print(f"  Epsilon: {agent.epsilon:.3f}")

        # Save checkpoint
        if (episode + 1) % 100 == 0:
            torch.save(agent.q_network.state_dict(),
                      f'checkpoints/dqn_episode_{episode+1}.pth')

    return episode_rewards, losses
```

---

## 3. Model-Based Approaches

### 3.1 Environmental Modeling

**Physics-Based Models:**
```
Greenhouse Climate Model Components:

1. Energy Balance:
   Q_solar + Q_heating = Q_ventilation + Q_conduction + Q_crop

2. Temperature Dynamics:
   dT/dt = (Q_net - Q_loss) / (m·c_p)

3. Humidity Dynamics:
   dH/dt = (Transpiration + Evaporation - Ventilation) / V

4. CO2 Dynamics:
   dC/dt = Injection - Photosynthesis - Ventilation

State Space Model:
┌────────────────────────────────┐
│ x(t+1) = Ax(t) + Bu(t) + w(t)  │
│ y(t) = Cx(t) + v(t)            │
└────────────────────────────────┘

Where:
• x = state vector [T, H, CO2]
• u = control inputs [heating, vent, injection]
• w = process noise (weather, disturbances)
• v = measurement noise
```

**Data-Driven Models:**
```python
import torch.nn as nn

class GreenhouseSimulator(nn.Module):
    """
    LSTM-based greenhouse environment simulator.
    """
    def __init__(self, state_dim, action_dim, hidden_dim=64):
        super().__init__()

        self.lstm = nn.LSTM(
            input_size=state_dim + action_dim,
            hidden_size=hidden_dim,
            num_layers=2,
            batch_first=True
        )

        self.fc = nn.Sequential(
            nn.Linear(hidden_dim, 32),
            nn.ReLU(),
            nn.Linear(32, state_dim)
        )

    def forward(self, state, action, hidden=None):
        """
        Predict next state given current state and action.
        """
        # Concatenate state and action
        x = torch.cat([state, action], dim=-1)

        # LSTM forward pass
        lstm_out, hidden = self.lstm(x.unsqueeze(1), hidden)

        # Predict next state
        next_state = self.fc(lstm_out.squeeze(1))

        return next_state, hidden

# Training the simulator
def train_simulator(model, real_data, epochs=100):
    """
    Train environment model on historical data.
    """
    optimizer = torch.optim.Adam(model.parameters(), lr=0.001)
    criterion = nn.MSELoss()

    for epoch in range(epochs):
        total_loss = 0

        for batch in real_data:
            states = batch['states']
            actions = batch['actions']
            next_states = batch['next_states']

            # Predict
            predicted_next_states, _ = model(states, actions)

            # Calculate loss
            loss = criterion(predicted_next_states, next_states)

            # Backprop
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()

            total_loss += loss.item()

        if (epoch + 1) % 10 == 0:
            print(f"Epoch {epoch+1}: Loss = {total_loss:.4f}")
```

### 3.2 Model Predictive Control (MPC)

**MPC Concept:**
```
Model Predictive Control Framework
===================================

At each timestep:
1. Use model to predict future states
2. Optimize control sequence over horizon
3. Execute first control action
4. Repeat at next timestep

Time Horizon:
t     t+1   t+2   t+3   t+4   t+5
│─────│─────│─────│─────│─────│
│ Now │ Predicted Future States │
│     │                         │
└─────┴─────────────────────────┘
  ↑
Execute this action only

Optimization Problem:
minimize  Σ [cost(x_k, u_k)]
  u_0...u_N
subject to:
  x_{k+1} = f(x_k, u_k)  [dynamics]
  u_min ≤ u_k ≤ u_max    [control limits]
  x_min ≤ x_k ≤ x_max    [state limits]
```

**Implementation:**
```python
from scipy.optimize import minimize

class MPCController:
    def __init__(self, model, horizon=12, dt=300):
        """
        Model Predictive Controller for climate control.

        Args:
            model: Dynamics model (physics or learned)
            horizon: Prediction horizon (timesteps)
            dt: Timestep duration (seconds)
        """
        self.model = model
        self.horizon = horizon
        self.dt = dt

    def cost_function(self, u_sequence, x0, target_state, energy_weight=0.1):
        """
        Cost function for MPC optimization.
        """
        x = x0
        total_cost = 0

        # Reshape control sequence
        u_seq = u_sequence.reshape(self.horizon, -1)

        for k in range(self.horizon):
            u = u_seq[k]

            # Predict next state
            x_next = self.model.predict(x, u)

            # State tracking cost
            state_error = np.linalg.norm(x_next - target_state)

            # Control effort cost
            control_cost = np.linalg.norm(u)

            # Energy cost
            energy_cost = u[0]**2 + u[1]**2  # HVAC power

            total_cost += (
                state_error +
                0.01 * control_cost +
                energy_weight * energy_cost
            )

            x = x_next

        return total_cost

    def optimize(self, current_state, target_state):
        """
        Solve MPC optimization problem.
        """
        # Initial guess (maintain current controls)
        u0 = np.zeros(self.horizon * self.action_dim)

        # Bounds on control actions
        bounds = [
            (0, 10),      # Heating (kW)
            (0, 1),       # Ventilation (0-1)
            (0, 500),     # CO2 injection (L/hr)
            (0, 1000)     # Lights (μmol/m²/s)
        ] * self.horizon

        # Solve optimization
        result = minimize(
            self.cost_function,
            u0,
            args=(current_state, target_state),
            method='SLSQP',
            bounds=bounds
        )

        # Extract first control action
        optimal_controls = result.x.reshape(self.horizon, -1)
        return optimal_controls[0]

    def control(self, state, target):
        """
        Compute control action using MPC.
        """
        return self.optimize(state, target)
```

### 3.3 Hybrid RL-MPC Approaches

**Combining Strengths:**
```
RL Advantages:              MPC Advantages:
├── Learns from experience  ├── Explicit constraints
├── Adapts to dynamics      ├── Predictive planning
├── Handles complexity      ├── Safety guarantees
└── No model required       └── Interpretable

HYBRID APPROACH:
┌────────────────────────────────────────┐
│  RL learns reward function / policy    │
│          ↓                             │
│  MPC uses learned model for planning   │
│          ↓                             │
│  Safety layer verifies actions        │
│          ↓                             │
│  Execute safe, optimal control         │
└────────────────────────────────────────┘
```

---

## 4. Multi-Objective Optimization

### 4.1 Competing Objectives

**CEA Optimization Goals:**
```
┌─────────────────────────────────────────────┐
│         COMPETING OBJECTIVES                │
├─────────────────────────────────────────────┤
│                                             │
│ 1. CROP PERFORMANCE                         │
│    ├── Maximize growth rate                │
│    ├── Optimize quality (nutrition, taste) │
│    ├── Minimize stress and disease         │
│    └── Achieve target harvest timing       │
│                                             │
│ 2. ENERGY EFFICIENCY                        │
│    ├── Minimize electricity consumption    │
│    ├── Reduce HVAC runtime                 │
│    ├── Optimize lighting schedules         │
│    └── Leverage off-peak energy rates      │
│                                             │
│ 3. OPERATIONAL COSTS                        │
│    ├── Minimize labor requirements         │
│    ├── Reduce equipment wear               │
│    ├── Lower maintenance needs             │
│    └── Optimize resource usage             │
│                                             │
│ 4. ENVIRONMENTAL IMPACT                     │
│    ├── Minimize carbon emissions           │
│    ├── Reduce water consumption            │
│    ├── Optimize nutrient recycling         │
│    └── Decrease waste generation           │
│                                             │
└─────────────────────────────────────────────┘

TRADEOFFS:
High productivity ⟷ Low energy use
Fast growth ⟷ High quality
Consistency ⟷ Flexibility
Automation ⟷ Control
```

### 4.2 Pareto Optimization

**Pareto Front Concept:**
```
Yield (kg/m²)
     ▲
     │     ● Pareto Optimal Solutions
     │    ●   (cannot improve one objective
     │   ●     without worsening another)
  Y2 ├  ●
     │ ●    ● Dominated Solutions
     │●    ●  (inferior on all objectives)
  Y1 ├   ●
     │  ●
     │
     └─────┬──────┬──────────► Energy (kWh/kg)
           E1     E2

SOLUTION SELECTION:
Depends on business priorities:
• Premium market → prioritize yield/quality
• Cost-sensitive → prioritize efficiency
• Balanced → middle of Pareto front
```

**Multi-Objective Reward Function:**
```python
def multi_objective_reward(state, action, weights):
    """
    Weighted sum of multiple objectives.

    weights: dict with objective weights summing to 1.0
    """
    objectives = {}

    # Objective 1: Crop Performance
    growth_rate = state['growth_rate']
    target_growth = 0.8
    objectives['growth'] = -abs(growth_rate - target_growth)

    # Objective 2: Energy Efficiency
    energy_used = action['hvac_power'] + action['light_power']
    energy_baseline = 15.0  # kW baseline
    objectives['energy'] = -(energy_used / energy_baseline)

    # Objective 3: Quality Metrics
    vpd = state['vpd']
    optimal_vpd = 0.85
    objectives['quality'] = -abs(vpd - optimal_vpd)

    # Objective 4: Stability
    action_change = calculate_smoothness(action)
    objectives['stability'] = -action_change

    # Weighted combination
    total_reward = sum(
        weights[obj] * objectives[obj]
        for obj in objectives
    )

    return total_reward, objectives

# Example usage with different priorities
weights_premium = {
    'growth': 0.5,
    'energy': 0.1,
    'quality': 0.3,
    'stability': 0.1
}

weights_efficiency = {
    'growth': 0.3,
    'energy': 0.5,
    'quality': 0.1,
    'stability': 0.1
}
```

### 4.3 Energy-Productivity Tradeoffs

**Dynamic Energy Pricing:**
```python
class DynamicEnergyPricing:
    """
    Adjust control strategy based on time-of-use electricity rates.
    """
    def __init__(self):
        self.rates = {
            'peak': 0.25,      # $/kWh (2pm-8pm)
            'shoulder': 0.15,  # $/kWh (6am-2pm, 8pm-10pm)
            'off_peak': 0.08   # $/kWh (10pm-6am)
        }

    def get_energy_weight(self, hour):
        """
        Return energy cost weight based on time of day.
        """
        if 14 <= hour < 20:
            return self.rates['peak']
        elif (6 <= hour < 14) or (20 <= hour < 22):
            return self.rates['shoulder']
        else:
            return self.rates['off_peak']

    def adjust_setpoints(self, hour, base_temp, base_light):
        """
        Adjust temperature and light setpoints for energy arbitrage.
        """
        rate = self.get_energy_weight(hour)

        if rate == self.rates['peak']:
            # Reduce energy during peak hours
            temp_setpoint = base_temp - 1.0  # Lower temp slightly
            light_intensity = base_light * 0.8  # Reduce lighting
        elif rate == self.rates['off_peak']:
            # Increase energy during off-peak
            temp_setpoint = base_temp + 0.5  # Pre-heat
            light_intensity = base_light * 1.0  # Full lighting
        else:
            temp_setpoint = base_temp
            light_intensity = base_light

        return temp_setpoint, light_intensity
```

---

## 5. Implementation & Deployment

### 5.1 Safety Constraints

**Multi-Layer Safety System:**
```
┌─────────────────────────────────────────────┐
│        SAFETY LAYER ARCHITECTURE            │
├─────────────────────────────────────────────┤
│                                             │
│ Layer 1: RL Policy                          │
│ └─> Proposes optimal action                │
│         ↓                                   │
│ Layer 2: Safety Filter                     │
│ └─> Checks against hard constraints        │
│         ↓                                   │
│ Layer 3: Predictive Safety                 │
│ └─> Simulates outcome, rejects if unsafe   │
│         ↓                                   │
│ Layer 4: Manual Override                   │
│ └─> Operator can intervene anytime         │
│         ↓                                   │
│ Execute Action                              │
│                                             │
└─────────────────────────────────────────────┘
```

**Safe RL Implementation:**
```python
class SafeRLController:
    def __init__(self, rl_agent, safety_bounds):
        self.rl_agent = rl_agent
        self.safety_bounds = safety_bounds
        self.override_active = False

    def is_safe_action(self, state, action):
        """
        Check if action satisfies safety constraints.
        """
        # Predict next state
        predicted_state = self.predict_next_state(state, action)

        # Check hard constraints
        if not (self.safety_bounds['temp_min'] <=
                predicted_state['temperature'] <=
                self.safety_bounds['temp_max']):
            return False

        if not (self.safety_bounds['humidity_min'] <=
                predicted_state['humidity'] <=
                self.safety_bounds['humidity_max']):
            return False

        # Check rate of change limits
        temp_change = abs(predicted_state['temperature'] -
                         state['temperature'])
        if temp_change > self.safety_bounds['max_temp_change']:
            return False

        return True

    def get_safe_action(self, state):
        """
        Get action from RL agent with safety verification.
        """
        if self.override_active:
            return self.get_manual_action()

        # Get RL proposed action
        proposed_action = self.rl_agent.select_action(state)

        # Verify safety
        if self.is_safe_action(state, proposed_action):
            return proposed_action
        else:
            # Fallback to safe conservative action
            logging.warning("RL action rejected - using safe fallback")
            return self.get_conservative_action(state)

    def get_conservative_action(self, state):
        """
        Return known-safe conservative action.
        """
        # Maintain current setpoints with minimal change
        safe_action = {
            'temp_setpoint': state['temperature'],
            'humidity_setpoint': state['humidity'],
            'co2_injection': 0,
            'light_intensity': state['light_intensity']
        }
        return safe_action
```

### 5.2 Sim-to-Real Transfer

**Domain Randomization:**
```python
class RandomizedGreenhouse:
    """
    Simulated greenhouse with randomized parameters
    for robust sim-to-real transfer.
    """
    def __init__(self):
        self.randomize_parameters()

    def randomize_parameters(self):
        """
        Randomize physical parameters within realistic ranges.
        """
        # Thermal properties (±20% variation)
        self.thermal_mass = np.random.uniform(0.8, 1.2) * 1000  # kJ/K
        self.heat_loss_coeff = np.random.uniform(0.8, 1.2) * 0.5  # kW/K

        # Crop parameters (±15% variation)
        self.transpiration_rate = np.random.uniform(0.85, 1.15) * 0.02
        self.photosynthesis_efficiency = np.random.uniform(0.85, 1.15) * 0.05

        # Sensor noise
        self.temp_noise_std = np.random.uniform(0.1, 0.5)  # °C
        self.humidity_noise_std = np.random.uniform(1.0, 3.0)  # %

        # Actuator delays
        self.hvac_delay = np.random.randint(1, 5)  # timesteps
        self.light_delay = np.random.randint(0, 2)

    def step(self, action):
        """
        Simulate one timestep with randomized dynamics.
        """
        # Apply actuator delays
        delayed_action = self.apply_delay(action)

        # Update state with randomized dynamics
        next_state = self.dynamics(self.state, delayed_action)

        # Add sensor noise
        noisy_observation = self.add_sensor_noise(next_state)

        reward = self.calculate_reward(next_state, action)

        return noisy_observation, reward, False, {}
```

**Progressive Real-World Deployment:**
```
STAGE 1: Pure Simulation
├── Train in randomized sim
├── Test in diverse scenarios
└── Validate safety

STAGE 2: Shadow Mode
├── RL runs in parallel with existing controller
├── Actions logged but not executed
├── Compare performance offline
└── Identify failure modes

STAGE 3: Limited Deployment
├── RL controls small zone (1-10% of facility)
├── Monitor crop health and metrics
├── Compare to control zones
└── Iterate and improve

STAGE 4: Expanded Deployment
├── Gradually increase controlled area
├── Continuous monitoring
├── A/B testing different strategies
└── Performance optimization

STAGE 5: Full Production
├── RL controls entire facility
├── Human oversight and override capability
├── Continuous learning and adaptation
└── Regular performance audits
```

### 5.3 Monitoring & Continuous Learning

**Performance Tracking:**
```python
class PerformanceMonitor:
    """
    Monitor and log RL controller performance.
    """
    def __init__(self):
        self.metrics = {
            'energy_usage': [],
            'crop_growth': [],
            'environmental_stability': [],
            'safety_violations': [],
            'manual_overrides': []
        }

    def log_timestep(self, state, action, reward, info):
        """
        Log metrics for each timestep.
        """
        # Energy metrics
        energy = action['hvac_power'] + action['light_power']
        self.metrics['energy_usage'].append(energy)

        # Crop metrics
        self.metrics['crop_growth'].append(state['growth_rate'])

        # Environmental stability
        stability = self.calculate_stability(state)
        self.metrics['environmental_stability'].append(stability)

        # Safety
        if info.get('safety_violation', False):
            self.metrics['safety_violations'].append(1)
        else:
            self.metrics['safety_violations'].append(0)

    def generate_report(self, period='daily'):
        """
        Generate performance report.
        """
        report = {
            'period': period,
            'avg_energy': np.mean(self.metrics['energy_usage']),
            'avg_growth_rate': np.mean(self.metrics['crop_growth']),
            'stability_score': np.mean(self.metrics['environmental_stability']),
            'safety_violation_rate': np.mean(self.metrics['safety_violations']),
            'override_rate': np.mean(self.metrics['manual_overrides'])
        }

        return report

    def detect_drift(self):
        """
        Detect performance drift indicating need for retraining.
        """
        recent_performance = np.mean(self.metrics['crop_growth'][-100:])
        baseline_performance = np.mean(self.metrics['crop_growth'][:100])

        drift = (baseline_performance - recent_performance) / baseline_performance

        if drift > 0.1:  # 10% degradation
            return True, drift
        return False, drift
```

**Online Learning:**
```python
class OnlineLearningAgent(DQNAgent):
    """
    DQN agent with continuous online learning capability.
    """
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.online_buffer = deque(maxlen=1000)
        self.performance_threshold = 0.8

    def online_update(self):
        """
        Perform online learning update using recent experience.
        """
        if len(self.online_buffer) < self.batch_size:
            return

        # Train on recent experiences
        for _ in range(5):  # Multiple updates
            loss = self.train_on_buffer(self.online_buffer)

        # Periodically evaluate and potentially rollback
        if self.should_evaluate():
            performance = self.evaluate()
            if performance < self.performance_threshold:
                self.rollback_to_checkpoint()

    def evaluate(self):
        """
        Evaluate current policy performance.
        """
        # Run evaluation episodes
        rewards = []
        for _ in range(10):
            episode_reward = self.run_evaluation_episode()
            rewards.append(episode_reward)

        return np.mean(rewards)
```

---

## Summary

This module covered advanced climate control optimization using reinforcement learning and model-based approaches:

**Key Takeaways:**
1. RL provides a framework for learning optimal control policies through environmental interaction
2. Deep Q-Networks enable handling of complex, high-dimensional state spaces
3. Safety constraints are critical and must be enforced at multiple levels
4. Model-based approaches (MPC) complement RL by providing predictive planning
5. Multi-objective optimization balances competing goals (productivity, efficiency, quality)
6. Careful sim-to-real transfer and gradual deployment ensure safety and reliability
7. Continuous monitoring and online learning maintain performance over time

**Practical Implementation:**
- Start with simulation and extensive testing
- Deploy in shadow mode before actual control
- Implement robust safety layers and manual overrides
- Monitor performance continuously
- Be prepared to fall back to conventional control if needed

---

## Discussion Questions

1. How would you design a reward function for a specific crop and business model?
2. What are the key safety considerations when deploying RL in production agriculture?
3. How can we balance exploration in RL while ensuring crop safety?
4. What advantages does MPC offer over pure RL approaches?
5. How should multi-objective weights be determined for different market segments?
6. What metrics would you use to evaluate the success of an RL climate controller?

---

## Vocabulary

**Reinforcement Learning Terms:**
- **Agent:** The learning system making decisions
- **Environment:** The system being controlled (greenhouse)
- **State:** Current condition of the environment
- **Action:** Control decision made by agent
- **Reward:** Feedback signal guiding learning
- **Policy:** Strategy for selecting actions
- **Q-Function:** Estimated value of taking an action in a state
- **Exploration:** Trying new actions to discover better strategies
- **Exploitation:** Using known best actions
- **Experience Replay:** Storing and reusing past experiences

**Control Terms:**
- **MPC (Model Predictive Control):** Optimization-based control using predictive models
- **VPD (Vapor Pressure Deficit):** Difference between actual and saturated vapor pressure
- **Setpoint:** Target value for controlled variable
- **Actuator:** Device that executes control actions
- **Disturbance:** Uncontrolled external influence

---

## Activity Reference

**Hands-On Activity 5: Building a Simple RL Climate Controller**
- Implement basic Q-learning for temperature control
- Design and test reward functions
- Compare RL performance to rule-based control
- Visualize learning progress and policy behavior

See: `/activities/activity_05_rl_climate_control.md`

---

## Quiz Preview

The Module 5 quiz will cover:
- RL fundamentals and terminology (20%)
- DQN architecture and training (25%)
- Safety constraints and deployment (20%)
- Model-based approaches (20%)
- Multi-objective optimization (15%)

**Sample Questions:**
1. Explain the exploration-exploitation tradeoff in RL
2. Describe the purpose of experience replay in DQN
3. How would you implement safety constraints for RL in CEA?
4. Compare model-free and model-based RL approaches
5. Design a multi-objective reward function for your greenhouse

---

## Next Module Preview

**Module 6: Yield Prediction Models**

In the next module, we'll explore:
- Feature engineering for yield prediction
- Regression models and ensemble methods
- Deep learning architectures for forecasting
- Uncertainty quantification
- Multi-crop modeling strategies
- Integrating predictions into operations

Preparation:
- Review regression analysis concepts
- Familiarize yourself with ensemble methods
- Consider what factors influence crop yield
- Think about how predictions could improve operations

---

## Resources

### Academic Papers
- Mnih, V. et al. (2015). "Human-level control through deep reinforcement learning" Nature
- Silver, D. et al. (2016). "Mastering the game of Go with deep neural networks" Nature
- Zhang, Y. et al. (2020). "Deep reinforcement learning for greenhouse climate control" Computers and Electronics in Agriculture

### Software & Tools
- OpenAI Gym: Create custom RL environments
- Stable Baselines3: RL algorithms implementation
- PyTorch/TensorFlow: Deep learning frameworks
- CoolProp: Thermodynamic property library

### Industry Applications
- Alphabet X Greenhouse Project
- Priva AI-powered climate control
- Blue Radix Crop Controller
- 30MHz sensing and automation platform

---

*End of Module 5*
