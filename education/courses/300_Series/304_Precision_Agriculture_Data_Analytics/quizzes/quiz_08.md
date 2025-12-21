# Quiz 8: Predictive Modeling

## Course 304: Precision Agriculture & Data Analytics

**Module:** 8 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
What is the primary goal of predictive modeling in agriculture?

A) Explain what happened in the past
B) Forecast future outcomes to enable proactive decisions
C) Visualize current data
D) Store historical data

**Correct Answer:** B

**Explanation:** Predictive modeling forecasts future states (yield in 2 weeks, disease probability tomorrow) enabling proactive intervention rather than reactive response. This shifts from "Why did yield drop last week?" (diagnostic) to "Will yield drop next week?" (predictive) to "What should we do?" (prescriptive).

---

### Question 2
Which algorithm is most suitable for predicting continuous numeric outcomes like harvest weight?

A) Logistic regression
B) K-means clustering
C) Linear regression or Random Forest regression
D) Support vector classifier

**Correct Answer:** C

**Explanation:** Regression algorithms predict continuous values. Linear regression models linear relationships. Random Forest regression handles non-linear relationships and interactions. Logistic regression is for binary classification. K-means is unsupervised clustering. SVM classifier is for classification, not regression.

---

### Question 3
You build a yield prediction model with R² = 0.73 on training data and R² = 0.45 on test data. What does this indicate?

A) Excellent model performance
B) Overfitting—model doesn't generalize well
C) Data collection error
D) Perfect prediction

**Correct Answer:** B

**Explanation:** Large gap between training (0.73) and test (0.45) performance indicates overfitting. The model learned training data specifics rather than generalizable patterns. Solutions: simplify model, get more training data, use regularization, or try different feature selection. Acceptable models have similar train/test performance.

---

### Question 4
What is feature engineering and why is it important?

A) Building physical sensors
B) Creating new input variables from raw data to improve predictions
C) Selecting which ML algorithm to use
D) Cleaning the dataset

**Correct Answer:** B

**Explanation:** Feature engineering creates informative predictors from raw data. Examples: calculate VPD from temp/humidity, create "days since transplant," extract day-of-week from timestamps, compute 7-day moving averages. Good features often improve model performance more than algorithm choice. Domain expertise guides feature engineering.

---

### Question 5
What does RMSE (Root Mean Squared Error) measure in a predictive model?

A) Classification accuracy
B) Average prediction error in the same units as the target variable
C) Training time
D) Number of features used

**Correct Answer:** B

**Explanation:** RMSE = √[Σ(actual - predicted)²/n]. If predicting lettuce weight in ounces, RMSE = 0.8 oz means predictions are typically ±0.8 oz from actual. RMSE is in original units (unlike R²), penalizes large errors more than MAE, and is widely used for model comparison.

---

### Question 6
In time series forecasting for weekly harvests, what is the "horizon"?

A) The time period in the past used for training
B) How far into the future you're predicting
C) The geographic area covered
D) The accuracy threshold

**Correct Answer:** B

**Explanation:** Forecast horizon is the future timespan predicted. 1-week horizon predicts next week, 4-week horizon predicts a month ahead. Accuracy typically decreases with longer horizons. Choose horizon based on decision-making needs: harvest planning (1 week), production scheduling (4 weeks), strategic planning (6+ months).

---

### Question 7
What is the purpose of regularization in predictive models?

A) Make predictions more regular
B) Prevent overfitting by penalizing model complexity
C) Speed up training
D) Handle missing data

**Correct Answer:** B

**Explanation:** Regularization (L1/Lasso, L2/Ridge) adds a penalty for complex models with many or large coefficients. This prevents overfitting by favoring simpler models. L1 can zero out unimportant features (feature selection). L2 shrinks all coefficients. Both improve generalization when data is limited relative to features.

---

### Question 8
When predicting plant growth stages, what type of cross-validation is most appropriate?

A) Random k-fold
B) Time-series cross-validation (forward chaining)
C) Leave-one-out
D) Bootstrap

**Correct Answer:** B

**Explanation:** Time-series data has temporal dependencies—future depends on past. Random splitting leaks future information into training. Time-series CV trains on past data, tests on future data, mimicking real deployment. For example, train on weeks 1-8, test on week 9; train on weeks 1-9, test on week 10, etc.

---

### Question 9
What indicates that a predictive model is production-ready for agricultural deployment?

A) 100% accuracy on training data
B) Stable performance on validation data, acceptable error for business needs
C) Uses the most complex algorithm available
D) Runs on the fastest computer

**Correct Answer:** B

**Explanation:** Production readiness requires: consistent validation performance (not just training), prediction errors acceptable for operational decisions (e.g., ±5% yield forecast acceptable for planning), robustness to realistic data variations, and maintainability. Perfect training accuracy suggests overfitting. Complexity and speed are secondary to reliable performance.

---

### Question 10
What is the "cold start problem" in agricultural predictive systems?

A) Equipment freezing in winter
B) Lack of historical data when first deploying sensors
C) System startup delays
D) Refrigeration issues

**Correct Answer:** B

**Explanation:** New facilities lack historical data to train predictive models. Solutions: transfer learning from similar operations, start with physics-based models and transition to data-driven models as data accumulates, or collect intensive data during a brief baseline period. Many operators delay analytics until 6-12 months of data is collected.

---

**End of Quiz 8**
