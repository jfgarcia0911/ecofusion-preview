# Quiz 9: Statistical Software

**Course:** 309 - Research Methodology for Agriculture
**Module:** 9 - Statistical Software
**Time Limit:** 15 minutes
**Points:** 10 points
**Passing Score:** 80%

---

## Multiple Choice (1 point each)

**1. Which statistical software is free, open-source, and considered the standard for advanced statistical analysis?**

a) SPSS
b) R/RStudio
c) SAS
d) JMP

**Answer:** b

---

**2. What is the main advantage of using R Markdown for data analysis?**

a) It's faster than other methods
b) It creates reproducible research documents combining code, output, and narrative
c) It doesn't require learning R syntax
d) It automatically corrects statistical errors

**Answer:** b

---

**3. In R, what operator is used for assignment?**

a) =
b) ==
c) <-
d) ->

**Answer:** c

---

**4. Which R function would you use to import a CSV file?**

a) import.csv()
b) read.csv()
c) load.csv()
d) get.csv()

**Answer:** b

---

**5. To create a publication-quality boxplot comparing yield across 4 treatments in R, which package is most recommended?**

a) base R graphics
b) lattice
c) ggplot2
d) plotly

**Answer:** c

---

**6. What is the primary limitation of using Excel for agricultural research statistics?**

a) Cannot perform t-tests
b) Limited advanced statistical methods and difficult to ensure reproducibility
c) Cannot create graphs
d) Cannot import data

**Answer:** b

---

## Short Answer (2 points each)

**7. Explain the concept of a "reproducible workflow" in statistical analysis and why it's important for agricultural research.**

**Example Answer:**

**Reproducible workflow** means documenting all steps from raw data to final results in a way that others (or future you) can exactly recreate the analysis. This involves:
- Saving raw data unchanged
- Documenting all data cleaning/transformation steps
- Using scripts (not point-and-click) for analysis
- Version controlling analysis files
- Providing clear documentation

**Importance:**
- **Transparency:** Others can verify your methods and results
- **Error detection:** Easier to find and fix mistakes
- **Reusability:** Can reanalyze with new data or different parameters
- **Collaboration:** Team members can understand and build on work
- **Publication:** Increasingly required by journals
- **Future reference:** Can remember what you did months/years later

R Markdown, RStudio projects, and version control (Git) support reproducibility.

---

**8. Compare Excel and R for analyzing a factorial experiment with 3 factors and 50 replicates. What are 2 advantages of each software for this task?**

**Example Answer:**

**Excel Advantages:**
1. **Ease of data entry:** Familiar spreadsheet interface, easy to enter and view data, quick manual corrections
2. **Simple calculations:** Can quickly calculate means, SDs, and create simple graphs for initial data exploration

**R Advantages:**
1. **Proper factorial ANOVA:** Can easily handle complex factorial designs with appropriate analysis (three-way ANOVA, interaction plots) that Excel cannot properly perform
2. **Automation and reproducibility:** Can write a script to analyze data, then reuse for similar experiments or updated data, ensuring consistent analysis methods and reducing errors

**Best practice:** Use Excel for data entry and initial exploration, then import to R for proper statistical analysis.

---

## Application (3 points)

**9. A colleague emails you their research data in an Excel file with the following problems: (1) data and calculations mixed together, (2) no clear data dictionary, (3) missing values coded as 0 instead of blank/NA, (4) multiple worksheets with different formats. Before you can analyze this data in R, what steps would you take to prepare it? List and explain at least 4 data cleaning steps.**

**Example Answer:**

**Data Preparation Steps:**

1. **Separate data from calculations:**
   - Create new worksheet with only raw data
   - Remove all formulas and calculated columns
   - Keep only measured values in clean format

2. **Standardize missing value coding:**
   - Replace all 0s that represent missing data with blank cells or "NA"
   - Verify that remaining 0s are true zero measurements
   - Document missing data reasons if known

3. **Create single consolidated dataset:**
   - Combine data from multiple worksheets into one structured table
   - Ensure consistent column names and data types across all merged data
   - Add a column identifying original worksheet/source if needed

4. **Develop and document data dictionary:**
   - Create separate sheet defining each variable (name, units, acceptable range, meaning)
   - Standardize variable names (no spaces, consistent naming convention like snake_case)
   - Document treatment codes, abbreviations, and experimental design structure

5. **Validate data ranges:**
   - Check for impossible values (negative weights, pH > 14, etc.)
   - Flag outliers for investigation
   - Confirm units are consistent

6. **Structure for R import:**
   - One row per observation
   - One column per variable
   - Column headers in first row only
   - Save as CSV for easy R import
   - Keep original Excel file unchanged (always preserve raw data)

---

## Critical Thinking (2 points)

**10. A student ran a t-test in Excel and got p = 0.048. They then ran the same analysis in R and got p = 0.052. The data is identical. What could explain this discrepancy, and what should the student do?**

**Example Answer:**

**Possible Explanations:**

1. **Different test types:**
   - Excel may have run two-tailed vs. one-tailed test
   - Different assumptions about equal variances (Student's vs. Welch's t-test)

2. **Rounding/precision differences:**
   - Excel and R use different internal precision for calculations
   - Small differences in calculation can push p-value across 0.05 threshold

3. **Data import issues:**
   - Possible that not all data imported correctly to R
   - Hidden characters or formatting affecting some values

**What Student Should Do:**

1. **Verify exact test settings:** Confirm both used same test type (two-tailed, equal/unequal variance assumptions)

2. **Check sample sizes and descriptive stats:** Compare means, SDs, and n between Excel and R to ensure data is identical

3. **Report appropriately:** Since p-values are very close to 0.05 threshold, report exact p-value and note it's near the boundary. Avoid dichotomous "significant/not significant" interpretation.

4. **Consider the broader picture:** With p ≈ 0.05, the evidence is marginal. Report effect size, confidence intervals, and practical significance rather than relying solely on p-value

5. **Use R going forward:** R is more reliable for statistical analysis and provides better documentation of exact methods used

**Key lesson:** Results very close to α = 0.05 boundary are unreliable indicators; focus on effect sizes and confidence intervals.

---

## Scoring Guide

| Question | Points | Topic |
|----------|--------|-------|
| 1-6 | 1 each (6 total) | Software knowledge |
| 7-8 | 2 each (4 total) | Concepts and comparison |
| 9 | 3 | Data preparation |
| 10 | 2 | Critical analysis |
| **Total** | **15 points** | |

**Note:** Quiz is out of 15 points, scaled to 10 points for gradebook.

---

*Quiz 9 | Course 309: Research Methodology for Agriculture*
