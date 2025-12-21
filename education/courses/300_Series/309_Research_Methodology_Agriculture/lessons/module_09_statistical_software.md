# Module 9: Statistical Software

## Learning Objectives

By the end of this module, you will be able to:
1. Choose appropriate statistical software for analysis needs
2. Perform basic analyses in R/RStudio
3. Use Excel for statistical calculations
4. Create publication-quality graphs
5. Ensure reproducible analysis workflows
6. Export and report statistical results

---

## Statistical Software Comparison

### Overview of Options

| Software | Cost | Learning Curve | Best For | Limitations |
|----------|------|----------------|----------|-------------|
| **R/RStudio** | Free | Steep | Advanced analysis, reproducibility, graphics | Programming required |
| **Excel** | $-$$  | Easy | Basic statistics, quick calculations | Limited advanced methods |
| **SPSS** | $$$ | Moderate | Point-and-click interface, social sciences | Expensive, less flexible |
| **SAS** | $$$$ | Steep | Industry standard, large datasets | Very expensive |
| **JMP** | $$$ | Easy-Moderate | Interactive visualization, DOE | Expensive |
| **Minitab** | $$ | Easy | Quality control, teaching | Limited customization |
| **Python (statsmodels, scipy)** | Free | Steep | Integration with data science | Less stats-focused than R |
| **GraphPad Prism** | $$ | Easy | Biostatistics, publication graphs | Limited to specific analyses |
| **JASP** | Free | Easy | Bayesian statistics, teaching | Fewer advanced features |
| **jamovi** | Free | Easy | User-friendly R interface | Limited compared to R |

---

## R and RStudio Basics

### Why R?

**Advantages:**
- Free and open-source
- Comprehensive statistical packages
- Excellent graphics (ggplot2)
- Reproducible research (R Markdown)
- Active community support
- Industry and academic standard

**Challenges:**
- Requires programming
- Steep initial learning curve
- Multiple ways to do same thing (confusing for beginners)

### Installation

```
1. Install R:
   Download from: https://cran.r-project.org/

2. Install RStudio (recommended IDE):
   Download from: https://posit.co/products/open-source/rstudio/

3. Install packages (in R console):
   install.packages("tidyverse")    # Data manipulation & viz
   install.packages("agricolae")    # Agricultural statistics
   install.packages("car")          # Companion to Applied Regression
   install.packages("lme4")         # Mixed models
```

### RStudio Interface

```
┌────────────────────────────────────────────────────────────────┐
│  File  Edit  Code  View  Plots  Tools  Help                   │
├──────────────────────┬─────────────────────────────────────────┤
│                      │                                         │
│   SOURCE EDITOR      │        ENVIRONMENT/HISTORY             │
│   (write scripts)    │        (variables, objects)            │
│                      │                                         │
│                      │                                         │
├──────────────────────┼─────────────────────────────────────────┤
│                      │                                         │
│   CONSOLE            │        FILES/PLOTS/HELP                │
│   (run commands)     │        (output, graphs)                │
│                      │                                         │
└──────────────────────┴─────────────────────────────────────────┘
```

### Basic R Syntax

**Assignment:**
```r
# Create variables
x <- 5                    # Assign value
yield <- c(120, 125, 130, 118, 122)  # Vector
```

**Data Structures:**
```r
# Vector (one dimension)
temps <- c(72, 75, 73, 74, 76)

# Data frame (like spreadsheet)
data <- data.frame(
  treatment = c("A", "A", "B", "B"),
  yield = c(120, 125, 135, 140)
)

# View data
head(data)      # First 6 rows
str(data)       # Structure
summary(data)   # Summary statistics
```

**Importing Data:**
```r
# CSV file
mydata <- read.csv("experiment_data.csv")

# Excel file (requires readxl package)
library(readxl)
mydata <- read_excel("experiment_data.xlsx")

# From clipboard
mydata <- read.table("clipboard", header=TRUE)
```

### Descriptive Statistics

```r
# Summary statistics
mean(yield)
median(yield)
sd(yield)              # Standard deviation
var(yield)             # Variance
range(yield)
quantile(yield)        # Quartiles

# By group
library(dplyr)
data %>%
  group_by(treatment) %>%
  summarise(
    n = n(),
    mean = mean(yield),
    sd = sd(yield),
    se = sd / sqrt(n)
  )
```

### t-Test

```r
# Independent samples t-test
t.test(yield ~ treatment, data = data)

# Paired t-test
t.test(before, after, paired = TRUE)

# One-sample t-test
t.test(yield, mu = 100)  # Test if mean = 100

# Output interpretation:
# t = test statistic
# df = degrees of freedom
# p-value = probability
# 95% confidence interval
```

### ANOVA

```r
# One-way ANOVA
model <- aov(yield ~ treatment, data = data)
summary(model)

# Check assumptions
plot(model)  # Diagnostic plots
shapiro.test(residuals(model))  # Normality
library(car)
leveneTest(yield ~ treatment, data = data)  # Equal variance

# Post-hoc tests
TukeyHSD(model)  # Tukey's HSD

# Using agricolae package
library(agricolae)
HSD.test(model, "treatment", console = TRUE)
```

### Two-Way ANOVA

```r
# Factorial design
model2 <- aov(yield ~ light * nutrient, data = data)
summary(model2)

# Interaction plot
interaction.plot(
  x.factor = data$nutrient,
  trace.factor = data$light,
  response = data$yield
)
```

### Regression

```r
# Simple linear regression
model <- lm(yield ~ days, data = data)
summary(model)

# Coefficients
coef(model)

# Confidence intervals
confint(model)

# Predictions
new_data <- data.frame(days = c(25, 30, 35))
predict(model, newdata = new_data, interval = "prediction")

# Diagnostic plots
par(mfrow = c(2, 2))
plot(model)
```

### Correlation

```r
# Pearson correlation
cor(x, y)
cor.test(x, y)  # With significance test

# Spearman correlation
cor(x, y, method = "spearman")

# Correlation matrix
cor(data[, c("temp", "pH", "yield")])
```

---

## Data Visualization in R

### Base R Graphics

```r
# Histogram
hist(yield,
     main = "Distribution of Yield",
     xlab = "Yield (g)",
     col = "lightblue",
     breaks = 10)

# Boxplot
boxplot(yield ~ treatment,
        data = data,
        main = "Yield by Treatment",
        ylab = "Yield (g)",
        col = c("red", "blue", "green"))

# Scatterplot
plot(days, yield,
     main = "Yield vs. Days",
     xlab = "Days",
     ylab = "Yield (g)",
     pch = 19,  # Point type
     col = "blue")
abline(lm(yield ~ days), col = "red")  # Add regression line

# Bar plot
means <- tapply(data$yield, data$treatment, mean)
barplot(means,
        main = "Mean Yield by Treatment",
        ylab = "Yield (g)",
        col = "steelblue")
```

### ggplot2 Graphics

```r
library(ggplot2)

# Boxplot
ggplot(data, aes(x = treatment, y = yield, fill = treatment)) +
  geom_boxplot() +
  labs(title = "Yield by Treatment",
       x = "Treatment",
       y = "Yield (g)") +
  theme_classic()

# Scatterplot with regression line
ggplot(data, aes(x = days, y = yield)) +
  geom_point(size = 3, alpha = 0.6) +
  geom_smooth(method = "lm", se = TRUE, color = "blue") +
  labs(title = "Yield over Time",
       x = "Days",
       y = "Yield (g)") +
  theme_minimal()

# Bar plot with error bars
summary_data <- data %>%
  group_by(treatment) %>%
  summarise(mean = mean(yield),
            se = sd(yield) / sqrt(n()))

ggplot(summary_data, aes(x = treatment, y = mean, fill = treatment)) +
  geom_bar(stat = "identity") +
  geom_errorbar(aes(ymin = mean - se, ymax = mean + se),
                width = 0.2) +
  labs(title = "Mean Yield by Treatment",
       x = "Treatment",
       y = "Mean Yield (g)") +
  theme_bw()

# Interaction plot
ggplot(data, aes(x = nutrient, y = yield, color = light, group = light)) +
  stat_summary(fun = mean, geom = "line", size = 1) +
  stat_summary(fun = mean, geom = "point", size = 3) +
  labs(title = "Light × Nutrient Interaction",
       x = "Nutrient Level",
       y = "Mean Yield (g)",
       color = "Light Level") +
  theme_minimal()
```

### Exporting Graphs

```r
# Save as PNG
png("figure1.png", width = 6, height = 4, units = "in", res = 300)
plot(your_graph)
dev.off()

# Save as PDF
pdf("figure1.pdf", width = 6, height = 4)
plot(your_graph)
dev.off()

# Save ggplot
ggsave("figure1.png", width = 6, height = 4, dpi = 300)
```

---

## Excel for Statistics

### Basic Functions

```
Descriptive Statistics:
=AVERAGE(range)         Mean
=MEDIAN(range)          Median
=STDEV.S(range)         Standard deviation (sample)
=VAR.S(range)           Variance (sample)
=COUNT(range)           Count of values
=MIN(range)             Minimum
=MAX(range)             Maximum
=QUARTILE(range, k)     Quartile (k=1,2,3)
```

### t-Test in Excel

**Data Analysis ToolPak:**
1. Data → Data Analysis → t-Test
2. Select type (Two-Sample, Paired, etc.)
3. Input ranges
4. Set alpha level
5. Output shows t-statistic, p-value, critical values

**Manual Calculation:**
```
Two-sample t-test:
=T.TEST(range1, range2, tails, type)
  tails: 1 or 2 (one-tailed or two-tailed)
  type: 1=paired, 2=equal variance, 3=unequal variance
```

### ANOVA in Excel

**One-Way ANOVA:**
1. Data → Data Analysis → Anova: Single Factor
2. Input range (all groups in columns)
3. Grouped by: Columns
4. Alpha: 0.05
5. Output: ANOVA table with F-statistic and p-value

**Two-Way ANOVA:**
1. Data → Data Analysis → Anova: Two-Factor With/Without Replication
2. Input range
3. Output includes main effects and interaction (if replication)

### Regression in Excel

**Linear Regression:**
1. Data → Data Analysis → Regression
2. Input Y range (dependent variable)
3. Input X range (independent variable)
4. Optional: Residuals, Line Fit Plots
5. Output: Coefficients, R², ANOVA table, residuals

**Regression Functions:**
```
=SLOPE(y_range, x_range)       Slope
=INTERCEPT(y_range, x_range)   Intercept
=RSQ(y_range, x_range)         R-squared
=FORECAST(x, y_range, x_range) Predicted value
```

### Correlation in Excel

```
=CORREL(range1, range2)     Pearson correlation

Or:
Data → Data Analysis → Correlation
  Input range with multiple variables
  Output: Correlation matrix
```

### Creating Charts

**Scatter Plot:**
1. Select X and Y data
2. Insert → Charts → Scatter
3. Add trendline: Right-click points → Add Trendline
4. Display equation and R² on chart

**Box Plot:**
- Not native in Excel
- Use Insert → Statistical Chart → Box and Whisker (Excel 2016+)

**Bar Chart with Error Bars:**
1. Calculate means and SE
2. Insert → Bar Chart
3. Select bars → Add Error Bars → Custom → Specify SE range

### Pivot Tables for Summary Statistics

1. Insert → PivotTable
2. Drag variables to Rows/Columns/Values
3. Summarize by mean, count, SD, etc.
4. Quick way to get group statistics

---

## Reproducible Research

### Why Reproducibility Matters

- **Verify results:** Others can check your work
- **Transparency:** Methods are clear
- **Efficiency:** Easy to re-run with updated data
- **Collaboration:** Others can build on your work
- **Publication:** Increasingly required by journals

### R Markdown

**Create Reproducible Reports:**

````markdown
---
title: "Aquaponic Nutrient Trial Analysis"
author: "Your Name"
date: "2024-05-15"
output: html_document
---

## Introduction

This analysis compares three nutrient formulations.

## Data Import

```{r}
data <- read.csv("nutrient_trial.csv")
head(data)
```

## Descriptive Statistics

```{r}
library(dplyr)
data %>%
  group_by(treatment) %>%
  summarise(mean = mean(yield), sd = sd(yield))
```

## ANOVA

```{r}
model <- aov(yield ~ treatment, data = data)
summary(model)
```

## Visualization

```{r}
boxplot(yield ~ treatment, data = data)
```

## Conclusion

Treatment C produced significantly higher yields than A and B.
````

**Output:** HTML, PDF, or Word document with code, results, and narrative

### Best Practices

1. **Use scripts:** Save all commands in .R or .Rmd files
2. **Comment code:** Explain what each section does
3. **Set seed:** For random processes (`set.seed(123)`)
4. **Document versions:** Note R version, package versions
5. **Organize files:** Consistent folder structure
6. **Version control:** Use Git for tracking changes
7. **Avoid hard-coded paths:** Use relative paths or `here` package

---

## Reporting Statistical Results

### In Text

**t-Test:**
"Treatment B produced significantly higher yields than Treatment A (t₁₈ = 3.45, p = 0.003)."

**ANOVA:**
"Nutrient formula significantly affected lettuce yield (F₃,₁₆ = 47.6, p < 0.001). Post-hoc comparisons using Tukey's HSD revealed that Formula C (141.6 ± 2.9 g) produced higher yields than Formula A (120.0 ± 4.0 g, p < 0.001) and Formula D (128.4 ± 2.7 g, p = 0.002)."

**Regression:**
"Days of growth significantly predicted yield (F₁,₁₈ = 45.2, p < 0.001, R² = 0.72). The regression equation was: Yield = -43 + 6.0(Days)."

**Correlation:**
"Temperature was strongly correlated with growth rate (r = 0.78, n = 15, p = 0.001)."

### In Tables

**Table 1. Mean yields (g) by nutrient formula**

| Formula | n | Mean ± SD | Range |
|---------|---|-----------|-------|
| A | 5 | 120.0 ± 4.0ᵃ | 115-125 |
| B | 5 | 138.4 ± 3.0ᵇ | 135-142 |
| C | 5 | 141.6 ± 2.9ᵇ | 138-145 |
| D | 5 | 128.4 ± 2.7ᶜ | 125-132 |

*Different superscripts indicate significant differences (Tukey's HSD, p < 0.05)*

### In Figures

**Requirements for Publication Quality:**
- Clear axis labels with units
- Appropriate scale (not truncated unless noted)
- Legible font size (≥10 pt)
- High resolution (300+ dpi for print)
- Color-blind friendly palette
- Error bars defined in caption
- Statistical annotations (significance letters or asterisks)

---

## Practical Exercise

### Tasks

**1. Install and Set Up R:**
- Install R and RStudio
- Install tidyverse package
- Create new R script

**2. Import and Explore Data:**
```r
# Use built-in dataset
data(PlantGrowth)
head(PlantGrowth)
summary(PlantGrowth)
```

**3. Descriptive Statistics:**
```r
# Calculate mean and SD by group
# Hint: Use dplyr or tapply()
```

**4. Statistical Test:**
```r
# Conduct one-way ANOVA
# Check assumptions
# Perform post-hoc test
```

**5. Visualization:**
```r
# Create boxplot
# Create bar plot with error bars
```

**6. Export:**
```r
# Save plot as PNG
# Export results to CSV
```

---

## Software Selection Guide

### Choose Based on Needs

**For Basic Analysis (t-tests, ANOVA, regression):**
→ Excel (quick), JASP (user-friendly), or R (reproducible)

**For Advanced Statistics (mixed models, multivariate):**
→ R, SAS, or SPSS

**For Agricultural-Specific Analyses:**
→ R (agricolae, FielDHub packages)

**For Publication Graphics:**
→ R (ggplot2), GraphPad Prism

**For Teaching/Learning:**
→ JASP, jamovi, R (with RStudio)

**For Industry/Regulatory:**
→ SAS, Minitab

---

## Key Takeaways

1. **R is powerful and free** but requires programming; Excel is accessible but limited
2. **RStudio** provides user-friendly interface for R
3. **ggplot2** creates publication-quality graphics
4. **Reproducible research** practices ensure transparency and verifiability
5. **Report statistics completely:** test statistic, df, p-value, effect size
6. **Choose software** based on analysis needs, budget, and reproducibility requirements

---

## Additional Resources

**R Learning:**
- R for Data Science: https://r4ds.had.co.nz/
- RStudio Cheatsheets: https://posit.co/resources/cheatsheets/
- Cookbook for R: http://www.cookbook-r.com/

**Agricultural Statistics:**
- agricolae package documentation
- Experimental Design book by Cochran & Cox

**Visualization:**
- R Graphics Cookbook
- ggplot2 documentation: https://ggplot2.tidyverse.org/

---

## Next Module Preview

**Module 10: Data Interpretation**

Learn about:
- Statistical vs. practical significance
- Interpreting confidence intervals
- Effect sizes and power
- Common interpretation errors
- Communicating uncertainty

---

*Module 9 Complete | Course 309: Research Methodology for Agriculture*
