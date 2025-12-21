# Technical Glossary: AI & ML in Agriculture

## A

**Accuracy**
The proportion of correct predictions (both true positives and true negatives) among all predictions. Used as a metric for classification models.

**Activation Function**
A mathematical function applied to neurons in a neural network that introduces non-linearity. Common types include ReLU, sigmoid, and tanh.

**Adam Optimizer**
Adaptive Moment Estimation - an optimization algorithm that adapts the learning rate for each parameter. Widely used for training deep learning models.

**Aggregation**
The process of combining multiple data points into summary statistics (mean, sum, max, etc.). Used in data preprocessing and ensemble methods.

**Algorithm**
A step-by-step procedure for solving a problem or performing a computation. In ML, algorithms learn patterns from data.

**Anomaly Detection**
The identification of rare items, events, or observations that differ significantly from the majority of the data. Used for detecting sensor failures or unusual plant conditions.

**API (Application Programming Interface)**
A set of protocols and tools for building software applications. RESTful APIs are commonly used to serve ML model predictions.

**ARIMA (AutoRegressive Integrated Moving Average)**
A statistical model for analyzing and forecasting time-series data. Used for environmental condition prediction.

**Artificial Intelligence (AI)**
Computer systems able to perform tasks that typically require human intelligence, including visual perception, speech recognition, and decision-making.

**Autoencoder**
A neural network that learns to compress data into a lower-dimensional representation and then reconstruct it. Used for dimensionality reduction and anomaly detection.

**Autonomous System**
A system capable of performing tasks with minimal human intervention, using sensors, AI, and robotics for decision-making and action.

## B

**Backpropagation**
The algorithm used to train neural networks by calculating gradients and updating weights based on the error between predicted and actual outputs.

**Batch**
A subset of training data used in one iteration of model training. Batch size affects training speed and memory usage.

**Batch Normalization**
A technique to normalize inputs to each layer in a neural network, improving training stability and speed.

**Bias (Statistical)**
Systematic error introduced by approximations in the learning algorithm. High bias leads to underfitting.

**Bias (Neural Network)**
A parameter added to neurons that allows shifting the activation function, helping the model fit data better.

**Binary Classification**
A classification task with only two possible outcomes (e.g., diseased/healthy, ripe/unripe).

**Bounding Box**
A rectangle drawn around an object in an image, defined by coordinates. Used in object detection tasks.

## C

**Classification**
A supervised learning task where the goal is to predict categorical labels (e.g., disease type, quality grade).

**CNN (Convolutional Neural Network)**
A deep learning architecture designed for processing grid-like data such as images. Widely used for computer vision tasks in agriculture.

**Clustering**
An unsupervised learning technique that groups similar data points together based on their features.

**Computer Vision**
A field of AI that enables computers to derive meaningful information from digital images and videos.

**Confusion Matrix**
A table showing the performance of a classification model, comparing predicted vs. actual classifications.

**Convolutional Layer**
A layer in a CNN that applies learnable filters to input data to extract features like edges, textures, and patterns.

**Cross-Validation**
A technique for assessing model performance by partitioning data into multiple folds and training/testing on different combinations.

## D

**Data Augmentation**
Techniques to artificially increase training data by applying transformations (rotation, flipping, cropping) to existing data, especially images.

**Data Drift**
Changes in data distribution over time that can degrade model performance. Requires monitoring and model retraining.

**Data Lake**
A centralized repository that stores structured and unstructured data at any scale in its raw format.

**Data Pipeline**
An automated workflow that collects, processes, and stores data for analysis or ML model training.

**DBSCAN (Density-Based Spatial Clustering)**
A clustering algorithm that groups points close together while marking outliers in low-density regions.

**Decision Tree**
A model that makes predictions by learning decision rules from features, represented as a tree structure.

**Deep Learning**
A subset of machine learning using neural networks with multiple layers to learn hierarchical representations from data.

**Deep Q-Network (DQN)**
A reinforcement learning algorithm combining Q-learning with deep neural networks for handling complex state spaces.

**Deployment**
The process of making a trained ML model available for use in production environments.

**Digital Twin**
A virtual replica of a physical system (like a greenhouse) that is continuously updated with real-time data for simulation and optimization.

**Dimensionality Reduction**
Techniques to reduce the number of features while preserving important information (e.g., PCA, autoencoders).

**Dropout**
A regularization technique where random neurons are ignored during training to prevent overfitting.

## E

**EC (Electrical Conductivity)**
A measure of nutrient concentration in water, measured in mS/cm or dS/m. Critical parameter for precision agriculture.

**Edge Computing**
Processing data near the source (edge devices) rather than in centralized cloud servers, reducing latency and bandwidth requirements.

**Embedding**
A learned representation that maps discrete variables (like words or categories) to continuous vectors in a lower-dimensional space.

**Ensemble Method**
Combining predictions from multiple models to improve overall performance (e.g., Random Forest, Gradient Boosting).

**Epoch**
One complete pass through the entire training dataset during neural network training.

**Error Function / Loss Function**
A function that measures the difference between predicted and actual values, guiding model optimization.

**ETL (Extract, Transform, Load)**
A data integration process: extracting data from sources, transforming it into usable format, and loading into destination systems.

**Explainability**
The ability to understand and interpret how an ML model makes decisions. Important for trust and regulatory compliance.

## F

**F1-Score**
The harmonic mean of precision and recall, providing a single metric that balances both. Ranges from 0 to 1.

**Feature**
An individual measurable property or characteristic used as input to a machine learning model (e.g., temperature, humidity).

**Feature Engineering**
The process of creating new features or transforming existing ones to improve model performance.

**Feature Importance**
A measure of how much each feature contributes to the model's predictions. Helps understand which variables matter most.

**Feature Store**
A centralized repository for storing, managing, and serving features for ML models in production.

**Federated Learning**
A distributed ML approach where models are trained across multiple decentralized devices or servers without sharing raw data.

**Fine-Tuning**
Further training a pre-trained model on a specific dataset to adapt it to a particular task.

**Flux Query Language**
The query language used with InfluxDB for analyzing time-series data.

## G

**Generalization**
A model's ability to perform well on new, unseen data. Good generalization indicates the model has learned underlying patterns rather than memorizing training data.

**Generative AI**
AI systems that can create new content (text, images, code) based on learned patterns from training data.

**GPU (Graphics Processing Unit)**
Specialized hardware that accelerates parallel computations, essential for training deep learning models efficiently.

**Grad-CAM (Gradient-weighted Class Activation Mapping)**
A technique for visualizing which parts of an image a CNN focuses on when making predictions.

**Gradient**
The direction and rate of change of a function. Used in optimization algorithms to update model parameters.

**Gradient Boosting**
An ensemble technique that builds models sequentially, with each new model correcting errors from previous ones.

**Gradient Descent**
An optimization algorithm that iteratively adjusts model parameters to minimize the loss function.

**Ground Truth**
The actual, correct answer or label for data, used to train and evaluate ML models.

## H

**Hyperparameter**
Configuration settings for ML algorithms that are set before training (e.g., learning rate, number of trees). Distinguished from model parameters that are learned.

**Hyperparameter Tuning**
The process of finding optimal hyperparameter values, often using grid search or random search.

**Hyperspectral Imaging**
Capturing image data across many narrow spectral bands (100+), enabling detailed chemical analysis of plants.

## I

**Image Classification**
Assigning a label to an entire image (e.g., identifying the disease present in a leaf photo).

**Image Segmentation**
Partitioning an image into multiple segments or objects, labeling each pixel with a class.

**Inference**
Using a trained model to make predictions on new data.

**InfluxDB**
An open-source time-series database optimized for handling high write and query loads, commonly used for IoT sensor data.

**Instance Segmentation**
Detecting and delineating each distinct object in an image, combining object detection and semantic segmentation.

**IoT (Internet of Things)**
Network of physical devices embedded with sensors and connectivity, enabling data collection and exchange.

**IPM (Integrated Pest Management)**
An ecosystem-based strategy that focuses on long-term prevention of pests through biological control, habitat manipulation, and resistant varieties.

## K

**K-Fold Cross-Validation**
A cross-validation technique that divides data into k subsets, training on k-1 and testing on the remaining subset k times.

**K-Means Clustering**
An unsupervised algorithm that partitions data into k clusters by minimizing within-cluster variance.

**Keras**
A high-level neural network API, now integrated into TensorFlow, providing an easy interface for building deep learning models.

**Knowledge Graph**
A structured representation of knowledge as entities and relationships, enabling reasoning and inference.

## L

**Label**
The target variable or output that a supervised learning model tries to predict.

**Learning Rate**
A hyperparameter that controls how much model parameters are adjusted during training. Too high causes instability, too low slows learning.

**LiDAR (Light Detection and Ranging)**
A remote sensing method using laser light to measure distances, creating precise 3D maps of environments.

**LIME (Local Interpretable Model-agnostic Explanations)**
A technique for explaining individual predictions of any ML model by approximating it locally with an interpretable model.

**Linear Regression**
A statistical model that predicts a continuous output by fitting a linear relationship between inputs and output.

**Logistic Regression**
A classification algorithm that models the probability of a binary outcome using a logistic function.

**LoRaWAN (Long Range Wide Area Network)**
A low-power, long-range wireless protocol ideal for IoT devices in agricultural applications.

**Loss Function**
A function that quantifies how wrong a model's predictions are. Training aims to minimize this function.

**LSTM (Long Short-Term Memory)**
A type of recurrent neural network capable of learning long-term dependencies, ideal for time-series and sequential data.

## M

**MAE (Mean Absolute Error)**
Average absolute difference between predicted and actual values. A regression metric measured in the same units as the target variable.

**Machine Learning (ML)**
A subset of AI where systems learn from data to improve performance on tasks without explicit programming.

**MAPE (Mean Absolute Percentage Error)**
MAE expressed as a percentage of actual values, providing scale-independent error measurement.

**MaxPooling**
A downsampling operation in CNNs that reduces spatial dimensions by taking the maximum value in each region.

**Metric**
A quantitative measure used to evaluate model performance (e.g., accuracy, precision, recall, MAE).

**MLflow**
An open-source platform for managing the ML lifecycle, including experimentation, reproducibility, and deployment.

**MLOps (Machine Learning Operations)**
Practices for collaboration and communication between data scientists and operations teams to manage ML models in production.

**Model**
A mathematical representation learned from data that makes predictions or decisions.

**Model Drift**
Degradation of model performance over time as real-world data distribution changes from training data.

**MQTT (Message Queuing Telemetry Transport)**
A lightweight messaging protocol for IoT devices, enabling efficient communication in agricultural sensor networks.

**Multi-class Classification**
Classification with more than two possible categories (e.g., identifying specific disease types).

**Multispectral Imaging**
Capturing image data in multiple discrete spectral bands (typically 3-10), beyond visible light.

## N

**Natural Language Processing (NLP)**
Branch of AI focused on interaction between computers and human language, enabling text analysis and generation.

**Neural Network**
A computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) that process information.

**Normalization**
Scaling features to a standard range (e.g., 0-1) to ensure all features contribute equally to model training.

**NumPy**
A fundamental Python library for numerical computing, providing support for multi-dimensional arrays and mathematical operations.

## O

**Object Detection**
Identifying and locating objects within images by drawing bounding boxes and classifying contents.

**Optimizer**
An algorithm that adjusts model parameters during training to minimize the loss function (e.g., SGD, Adam).

**Outlier**
A data point that significantly differs from other observations, which may indicate errors or rare events.

**Overfitting**
When a model learns training data too well, including noise and outliers, resulting in poor performance on new data.

## P

**Pandas**
A Python library providing data structures and tools for data manipulation and analysis, especially tabular data.

**PAR (Photosynthetically Active Radiation)**
Light in the 400-700nm wavelength range that plants use for photosynthesis, measured in µmol/m²/s.

**Phenotyping**
Measuring observable plant characteristics (phenotypes) such as height, leaf area, and growth rate.

**Pooling Layer**
A layer in CNNs that reduces spatial dimensions by aggregating values in regions, reducing computation and overfitting.

**PPO (Proximal Policy Optimization)**
A reinforcement learning algorithm that maintains a balance between exploration and exploitation while ensuring stable training.

**Precision**
The proportion of positive predictions that are actually correct. Important when false positives are costly.

**Prediction**
The output of a trained model when given new input data.

**Pre-trained Model**
A model trained on a large dataset that can be fine-tuned for specific tasks, saving time and computational resources.

**Prophet**
Facebook's time-series forecasting library designed to handle seasonality, holidays, and missing data.

**PyTorch**
An open-source deep learning framework known for dynamic computation graphs and ease of use.

## Q

**Q-Learning**
A model-free reinforcement learning algorithm that learns the value of actions in states to maximize cumulative reward.

**Quantile Regression**
A regression method that predicts quantiles of the target distribution, providing uncertainty estimates.

**Quantization**
Reducing the precision of model weights (e.g., from 32-bit to 8-bit) to decrease model size and increase inference speed.

## R

**R² (R-squared / Coefficient of Determination)**
A statistical measure indicating how well predictions approximate actual data. Ranges from 0 to 1, with 1 being perfect.

**Random Forest**
An ensemble learning method that builds multiple decision trees and averages their predictions for improved accuracy and robustness.

**Recall (Sensitivity)**
The proportion of actual positives correctly identified. Important when false negatives are costly.

**Recurrent Neural Network (RNN)**
A neural network architecture designed for sequential data, where connections between nodes form cycles.

**Regression**
A supervised learning task where the goal is to predict continuous numerical values (e.g., yield, temperature).

**Regularization**
Techniques to prevent overfitting by penalizing complex models (e.g., L1, L2 regularization, dropout).

**Reinforcement Learning (RL)**
A type of machine learning where an agent learns to make decisions by receiving rewards or penalties for actions.

**ReLU (Rectified Linear Unit)**
An activation function that outputs the input if positive, otherwise zero. Most common activation in modern neural networks.

**ResNet (Residual Network)**
A deep CNN architecture using skip connections to enable training of very deep networks without degradation.

**REST API (Representational State Transfer API)**
A web service architecture for creating APIs that interact with resources using HTTP methods.

**RMSE (Root Mean Squared Error)**
Square root of the average squared differences between predicted and actual values. Penalizes large errors more than MAE.

**ROC Curve (Receiver Operating Characteristic)**
A graph showing classifier performance across different threshold settings, plotting true positive rate vs. false positive rate.

**ROS (Robot Operating System)**
A flexible framework for writing robot software, providing tools and libraries for robotic applications.

## S

**SARIMA (Seasonal ARIMA)**
An extension of ARIMA that explicitly models seasonal patterns in time-series data.

**Scikit-learn**
A comprehensive Python library for machine learning, providing tools for classification, regression, clustering, and more.

**Segmentation**
Dividing images or data into meaningful regions or segments for analysis.

**Semi-supervised Learning**
A learning approach using both labeled and unlabeled data, reducing the need for extensive labeling.

**Sensor Fusion**
Combining data from multiple sensors to produce more accurate and reliable information than individual sensors.

**SHAP (SHapley Additive exPlanations)**
A method for explaining individual predictions by computing the contribution of each feature based on game theory.

**Sigmoid Function**
An S-shaped activation function that maps inputs to values between 0 and 1, often used in binary classification.

**SLAM (Simultaneous Localization and Mapping)**
A technique for robots to build maps of unknown environments while tracking their location within them.

**Softmax**
An activation function that converts a vector of numbers into probabilities that sum to 1, used in multi-class classification output layers.

**Standardization**
Transforming features to have zero mean and unit variance, improving model training stability.

**State Space**
In reinforcement learning, the set of all possible situations or configurations the environment can be in.

**Stochastic Gradient Descent (SGD)**
An optimization algorithm that updates parameters using gradients computed from random subsets of data.

**Supervised Learning**
Machine learning where models are trained on labeled data with known inputs and outputs.

**Support Vector Machine (SVM)**
A supervised learning algorithm that finds the optimal hyperplane to separate classes in feature space.

## T

**TensorFlow**
An open-source deep learning framework developed by Google, widely used for building and deploying ML models.

**TFLite (TensorFlow Lite)**
TensorFlow's lightweight solution for deploying models on mobile and edge devices with limited resources.

**Time-Series**
Data points indexed in time order, common in agricultural sensor data (temperature, humidity over time).

**TimescaleDB**
An open-source time-series database built on PostgreSQL, optimized for time-series workloads.

**Training**
The process of teaching a machine learning model by showing it examples and adjusting parameters to minimize error.

**Transfer Learning**
Using a model trained on one task as a starting point for a different but related task, reducing training time and data requirements.

**Transformer**
A neural network architecture using self-attention mechanisms, revolutionizing NLP and increasingly used in computer vision.

## U

**Underfitting**
When a model is too simple to capture the underlying patterns in data, resulting in poor performance on both training and test data.

**Unsupervised Learning**
Machine learning on unlabeled data to discover hidden patterns or structures (e.g., clustering, dimensionality reduction).

## V

**Validation Set**
A subset of data used during training to tune hyperparameters and prevent overfitting, separate from test set.

**Vanishing Gradient**
A problem in deep networks where gradients become extremely small, preventing effective learning in early layers.

**Variance**
The amount by which model predictions vary for different training sets. High variance leads to overfitting.

**VPD (Vapor Pressure Deficit)**
The difference between actual water vapor pressure and saturation pressure, indicating atmospheric demand for water. Critical for irrigation management.

## W

**Weights**
Parameters in neural networks that are learned during training, determining the strength of connections between neurons.

## X

**XGBoost (Extreme Gradient Boosting)**
An optimized gradient boosting library known for speed and performance, widely used in structured data problems.

## Y

**Yield Prediction**
Forecasting crop yield based on environmental conditions, growth data, and historical patterns using ML models.

**YOLO (You Only Look Once)**
A real-time object detection system that processes entire images in a single pass, enabling fast inference.

## Z

**Zero-shot Learning**
The ability of a model to correctly make predictions for classes it has never seen during training.

**Z-score**
A statistical measure indicating how many standard deviations a data point is from the mean, used for outlier detection.

---

## Acronyms Quick Reference

- **AI** - Artificial Intelligence
- **API** - Application Programming Interface
- **ARIMA** - AutoRegressive Integrated Moving Average
- **CEA** - Controlled Environment Agriculture
- **CNN** - Convolutional Neural Network
- **CPU** - Central Processing Unit
- **DBSCAN** - Density-Based Spatial Clustering of Applications with Noise
- **DLI** - Daily Light Integral
- **DQN** - Deep Q-Network
- **EC** - Electrical Conductivity
- **ETL** - Extract, Transform, Load
- **GPU** - Graphics Processing Unit
- **HVAC** - Heating, Ventilation, and Air Conditioning
- **IoT** - Internet of Things
- **IPM** - Integrated Pest Management
- **LIME** - Local Interpretable Model-agnostic Explanations
- **LSTM** - Long Short-Term Memory
- **MAE** - Mean Absolute Error
- **MAPE** - Mean Absolute Percentage Error
- **ML** - Machine Learning
- **MLOps** - Machine Learning Operations
- **MQTT** - Message Queuing Telemetry Transport
- **NLP** - Natural Language Processing
- **PAR** - Photosynthetically Active Radiation
- **PCA** - Principal Component Analysis
- **PPO** - Proximal Policy Optimization
- **ReLU** - Rectified Linear Unit
- **REST** - Representational State Transfer
- **RL** - Reinforcement Learning
- **RMSE** - Root Mean Squared Error
- **RNN** - Recurrent Neural Network
- **ROC** - Receiver Operating Characteristic
- **ROS** - Robot Operating System
- **SARIMA** - Seasonal ARIMA
- **SGD** - Stochastic Gradient Descent
- **SHAP** - SHapley Additive exPlanations
- **SLAM** - Simultaneous Localization and Mapping
- **SVM** - Support Vector Machine
- **TFLite** - TensorFlow Lite
- **VPD** - Vapor Pressure Deficit
- **XGBoost** - Extreme Gradient Boosting
- **YOLO** - You Only Look Once

---

*Comprehensive Technical Glossary - Course 404: AI & ML in Agriculture*

**Last Updated:** December 2025
**Version:** 2.0
