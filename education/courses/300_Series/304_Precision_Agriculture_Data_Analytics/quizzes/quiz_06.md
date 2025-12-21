# Quiz 6: Advanced Analytics Methods

## Course 304: Precision Agriculture & Data Analytics

**Module:** 6 | **Points:** 3 | **Passing Score:** 2/3

---

### Question 1
What is the primary purpose of principal component analysis (PCA) in agricultural data analytics?

A) Predict future yields
B) Reduce dimensionality while preserving variance
C) Classify plant diseases
D) Test hypotheses

**Correct Answer:** B

**Explanation:** PCA reduces many correlated variables into fewer uncorrelated principal components while retaining most variance in the data. For example, instead of analyzing temperature, humidity, and VPD separately (which are correlated), PCA creates a "climate factor" that captures their combined effect, simplifying analysis.

---

### Question 2
In time series decomposition, what does the seasonal component represent?

A) Random fluctuations
B) Long-term trend
C) Regular periodic patterns
D) Outliers

**Correct Answer:** C

**Explanation:** The seasonal component captures regular, predictable patterns that repeat over fixed periods (daily, weekly, seasonally). For example, temperature peaks daily at 2 PM and harvest volumes peak weekly on Fridays. Isolating seasonality reveals the underlying trend and makes forecasting more accurate.

---

### Question 3
What is autocorrelation in time series data?

A) Correlation between different sensors
B) Correlation of a variable with itself at previous time points
C) Correlation between temperature and humidity
D) Correlation errors

**Correct Answer:** B

**Explanation:** Autocorrelation measures how today's value relates to previous days' values. High autocorrelation means the past predicts the future (e.g., today's temperature correlates with yesterday's). This violates assumptions of standard statistical tests and enables time series forecasting methods like ARIMA.

---

### Question 4
When would you use a multivariate regression model instead of simple linear regression?

A) When you have only one predictor variable
B) When multiple factors jointly influence the outcome
C) When data is normally distributed
D) When sample size is small

**Correct Answer:** B

**Explanation:** Multivariate (multiple) regression models yield as a function of several predictors simultaneously: Yield = β₀ + β₁(Temp) + β₂(Light) + β₃(CO₂). This accounts for interactions and identifies each factor's independent effect, unlike simple regression which ignores other influential variables.

---

### Question 5
What is the purpose of cross-validation in predictive modeling?

A) Clean outliers from data
B) Assess model performance on unseen data
C) Transform variables to normal distribution
D) Calculate correlation coefficients

**Correct Answer:** B

**Explanation:** Cross-validation splits data into training and testing sets (often multiple times via k-fold CV) to evaluate how well the model generalizes to new data. This prevents overfitting, where a model performs well on training data but poorly on new observations—a critical concern in production agriculture.

---

### Question 6
Which analytical technique is best for identifying optimal growing conditions across multiple variables simultaneously?

A) t-test
B) Response surface methodology (RSM)
C) Histogram analysis
D) Pie charts

**Correct Answer:** B

**Explanation:** RSM systematically varies multiple factors (temperature, light, nutrients) to map the "response surface" and find the optimal combination maximizing yield or quality. It's more efficient than one-factor-at-a-time experimentation and captures interaction effects (e.g., optimal light intensity depends on temperature).

---

### Question 7
What does a residual plot revealing a funnel pattern indicate?

A) Perfect model fit
B) Heteroscedasticity (non-constant variance)
C) Normal distribution
D) Strong correlation

**Correct Answer:** B

**Explanation:** A funnel-shaped residual plot shows heteroscedasticity: prediction errors increase as predicted values increase. This violates regression assumptions and suggests the model is less reliable at certain ranges. Solutions include data transformation (log, sqrt) or weighted regression that accounts for changing variance.

---

### Question 8
In A/B testing of two fertilizer regimes, what is the minimum detectable effect size that can be identified?

A) It depends on sample size and variance
B) Always 5%
C) Exactly one standard deviation
D) It's impossible to determine

**Correct Answer:** A

**Explanation:** The minimum detectable effect depends on sample size, variance, and desired statistical power. Larger samples and lower variance enable detection of smaller effects. Power analysis (before the experiment) determines required sample size for detecting a meaningful difference (e.g., 10% yield increase) with acceptable confidence.

---

### Question 9
What is the "curse of dimensionality" in agricultural analytics?

A) Too much data storage space needed
B) Model performance degrades with too many variables relative to samples
C) Sensors are too expensive
D) Data collection takes too long

**Correct Answer:** B

**Explanation:** With limited samples, adding more predictor variables reduces model reliability. For example, 100 observations and 50 predictors leads to overfitting—the model fits noise rather than signal. Rule of thumb: need 10-20 observations per predictor variable for reliable models. Use feature selection or dimensionality reduction (PCA).

---

### Question 10
Which technique is most appropriate for detecting change points in time series data (e.g., when system performance degrades)?

A) Mean calculation
B) CUSUM (Cumulative Sum) control charts
C) Bar charts
D) Correlation analysis

**Correct Answer:** B

**Explanation:** CUSUM charts accumulate deviations from a target value, making subtle shifts visible that individual data points might miss. For example, gradual biofilter performance decline shows as rising CUSUM before individual readings alarm. This enables proactive intervention before system failure.

---

**End of Quiz 6**
