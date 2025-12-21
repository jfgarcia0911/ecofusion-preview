# Quiz 7: Introduction to Machine Learning

## Course 304: Precision Agriculture & Data Analytics

**Module:** 7 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
What is the fundamental difference between supervised and unsupervised learning?

A) Supervised learning is more accurate
B) Supervised learning uses labeled training data, unsupervised does not
C) Supervised learning requires more data
D) Supervised learning is faster

**Correct Answer:** B

**Explanation:** Supervised learning trains on labeled examples (input → known output), like predicting yield from environmental data. Unsupervised learning finds patterns in unlabeled data, like clustering days by weather patterns without pre-defined categories. The presence/absence of labels determines which approach to use.

---

### Question 2
Which machine learning task is classification?

A) Predicting tomorrow's harvest weight in pounds
B) Grouping plants by growth characteristics
C) Determining if a plant has disease (yes/no)
D) Forecasting next week's temperature

**Correct Answer:** C

**Explanation:** Classification predicts discrete categories (disease/healthy, Grade A/B/C). Options A and D are regression (predicting continuous numbers). Option B is clustering (unsupervised). Classification requires labeled training data with known categories to learn decision boundaries.

---

### Question 3
What is the purpose of splitting data into training and testing sets?

A) To have backup data
B) To evaluate model performance on unseen data
C) To reduce data size
D) To increase accuracy

**Correct Answer:** B

**Explanation:** Training set teaches the model, testing set evaluates generalization to new data. Typical split: 70-80% training, 20-30% testing. Testing on training data gives falsely optimistic results. The test set simulates real-world deployment where the model encounters previously unseen observations.

---

### Question 4
What does overfitting mean in machine learning?

A) Model is too simple
B) Model memorizes training data but performs poorly on new data
C) Model is perfectly accurate
D) Model trains too slowly

**Correct Answer:** B

**Explanation:** Overfitting occurs when a model learns noise and peculiarities of training data rather than general patterns. It achieves high training accuracy but poor test accuracy. Prevented by: sufficient training data, regularization, cross-validation, and avoiding excessive model complexity relative to data quantity.

---

### Question 5
Which algorithm is most interpretable for agricultural decision-making?

A) Deep neural network
B) Decision tree
C) Support vector machine
D) Ensemble of 100 models

**Correct Answer:** B

**Explanation:** Decision trees provide clear if-then rules: "IF temperature > 28°C AND humidity < 60% THEN yield = low." Operators can understand and verify the logic. Neural networks and ensembles are "black boxes" with higher accuracy but no human-interpretable reasoning, making them harder to trust in agricultural applications.

---

### Question 6
What is a feature in machine learning?

A) A bug in the code
B) An input variable used for prediction
C) The output prediction
D) A type of algorithm

**Correct Answer:** B

**Explanation:** Features are input variables (predictors) used by the model. For yield prediction, features might include temperature, light, humidity, CO₂, and day-of-year. Feature engineering—creating new features from raw data (e.g., VPD from temp and humidity)—often improves model performance more than algorithm choice.

---

### Question 7
What is the bias-variance tradeoff?

A) Choosing between two datasets
B) Balance between model simplicity and flexibility
C) Choosing training vs. testing data size
D) Trade-off between speed and accuracy

**Correct Answer:** B

**Explanation:** Bias: error from oversimplified models (underfitting). Variance: error from overly complex models sensitive to training data noise (overfitting). The sweet spot minimizes total error. Simple models (high bias) miss patterns. Complex models (high variance) fit noise. Cross-validation helps find the balance.

---

### Question 8
Which metric is most appropriate for evaluating a binary classifier detecting plant disease when disease is rare (5% prevalence)?

A) Accuracy
B) F1-score
C) Mean squared error
D) R²

**Correct Answer:** B

**Explanation:** With 5% disease prevalence, a classifier predicting "healthy" for everything achieves 95% accuracy but is useless. F1-score balances precision (of predicted diseases, how many are real?) and recall (of actual diseases, how many did we catch?). It's robust to class imbalance.

---

### Question 9
What is ensemble learning?

A) Using one very large model
B) Combining multiple models for better performance
C) Training on multiple datasets
D) Using multiple computers

**Correct Answer:** B

**Explanation:** Ensemble learning combines multiple models (e.g., Random Forest uses many decision trees). Individual models may err differently, but aggregating their predictions (voting or averaging) reduces overall error. The wisdom of crowds often beats single expert. Trade-off: higher accuracy for lower interpretability.

---

### Question 10
In agricultural applications, what is transfer learning?

A) Transferring data between databases
B) Using a model trained on one crop/farm for another with fine-tuning
C) Moving equipment between facilities
D) Sharing data with competitors

**Correct Answer:** B

**Explanation:** Transfer learning adapts models trained on large datasets to new contexts with limited data. For example, a lettuce disease detector trained on 10,000 images can be fine-tuned for spinach with only 500 images. This is especially valuable in agriculture where collecting large labeled datasets is expensive.

---

**End of Quiz 7**
