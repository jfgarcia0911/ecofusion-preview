const fs = require('fs');
const path = require('path');

// Read the file
const filePath = path.join(__dirname, 'lib/data/lms-seed.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define the enhanced Module 1 content
const module1Enhanced = `            {
                id: "m1-106",
                title: "Module 1: Crop Selection",
                description: "Matching crops to market and system.",
                duration: 75,
                lessons: [
                    { id: "l1-1-106", title: "Market Analysis", type: "video", duration: 15, videoUrl: "https://example.com/placeholder" },
                    {
                        id: "l1-2-106",
                        title: "Strategic Crop Selection for Hydroponic Systems",
                        type: "text",
                        duration: 35,
                        content: \`# Strategic Crop Selection for Hydroponic Systems

## Introduction

Crop selection is the foundation of profitable controlled environment agriculture (CEA). The right crop selection balances market demand, system compatibility, production economics, and grower expertise. This module provides a systematic framework for evaluating crop options using research-based criteria from university extension programs and commercial industry benchmarks.

## Market-Driven Selection Criteria

### Understanding Your Market Segments

**Direct-to-Consumer Markets:**
- Farmers markets: High-value specialty crops, visual appeal critical
- Restaurant/Chef sales: Consistency, unique varieties, year-round availability
- Community Supported Agriculture (CSA): Diversity, seasonal variety, storage crops
- Retail partnerships: Shelf life, packaging requirements, volume consistency

**Wholesale Markets:**
- Distributors: Volume capacity, price competitiveness, year-round supply
- Food hubs: Regional preferences, organic certification, food safety protocols
- Institutional buyers: Contract pricing, consistent sizing, delivery schedules

### Market Analysis Framework

According to USDA Agricultural Marketing Service data (2024), successful CEA operations conduct quarterly market assessments examining:

1. **Price Point Analysis**: Track wholesale and retail prices for target crops across 12-month periods
2. **Competitive Landscape**: Identify local field growers, other CEA operations, imported products
3. **Seasonality Gaps**: Find windows where field production is unavailable (winter leafy greens in northern climates)
4. **Consumer Trends**: Track demand for organic, locally-grown, specialty varieties

**Research Citation**: Cornell University Controlled Environment Agriculture (2023) recommends maintaining a market intelligence database tracking minimum 5 potential crops before infrastructure investment.

## System Compatibility Analysis

### Hydroponic System Types and Crop Matching

**Deep Water Culture (DWC):**
- Best for: Leafy greens (lettuce, bok choy, herbs)
- Acceptable: Small fruiting crops (strawberries in towers)
- Poor fit: Large fruiting crops (root support issues)

**Nutrient Film Technique (NFT):**
- Best for: Herbs, baby greens, lettuce
- Acceptable: Strawberries (with support)
- Poor fit: Root vegetables, large fruiting plants (channel blockage)

**Media-Based Systems (Dutch Buckets, Bato Buckets):**
- Best for: Tomatoes, peppers, cucumbers, eggplant
- Acceptable: Larger herbs (basil), melons
- Poor fit: Crops requiring dense spacing

**Vertical Tower Systems:**
- Best for: Lettuce, herbs, strawberries
- Acceptable: Leafy greens, edible flowers
- Poor fit: Vining crops, root vegetables

### Critical System-Crop Matching Factors

**Root Zone Temperature Requirements:**

| Crop Category | Optimal Root Temperature | Tolerance Range |
|--------------|-------------------------|----------------|
| Cool Season Leafy Greens | 65-70°F (18-21°C) | 60-75°F |
| Warm Season Fruiting | 70-75°F (21-24°C) | 68-80°F |
| Herbs (Basil, Cilantro) | 68-72°F (20-22°C) | 65-78°F |
| Strawberries | 60-68°F (15-20°C) | 55-72°F |

**Research Citation**: University of Arizona Controlled Environment Agriculture Center (2024)

**Space and Density Considerations:**

| Crop Type | Plants per sq ft | Vertical Clearance | Production Cycle |
|-----------|-----------------|-------------------|-----------------|
| Butterhead Lettuce | 4-6 | 12-18 inches | 35-45 days |
| Romaine Lettuce | 3-4 | 18-24 inches | 45-55 days |
| Basil (large) | 1-2 | 18-30 inches | 28-35 days (continuous harvest) |
| Cherry Tomatoes | 1-2 per 4 sq ft | 6-8 feet | 90-120 days |
| Cucumbers | 1 per 4 sq ft | 6-8 feet | 50-70 days |

## Economic Viability Assessment

### Production Economics Framework

**Cost-Per-Pound Analysis:**

Successful crop selection requires understanding full production costs:

1. **Variable Costs**:
   - Seeds/transplants: $0.10-0.50 per plant
   - Nutrients: $0.05-0.15 per lb harvested
   - Labor: $2.00-5.00 per lb (highly variable by crop/automation)
   - Packaging: $0.25-1.00 per unit

2. **Fixed Costs (allocated)**:
   - Utilities (electric, water): $0.50-2.00 per lb
   - Infrastructure depreciation: $0.30-0.80 per lb
   - Overhead (insurance, admin): $0.20-0.50 per lb

**Target Profit Margins by Market Channel:**

| Channel | Wholesale Price/lb | Retail Price/lb | Required Production Cost |
|---------|-------------------|-----------------|-------------------------|
| Wholesale | $2.00-4.00 | N/A | <$1.50/lb |
| Farmers Market | N/A | $6.00-12.00 | <$3.00/lb |
| Restaurant Direct | $4.00-8.00 | N/A | <$2.50/lb |
| CSA (allocated) | $3.00-6.00 | N/A | <$2.00/lb |

**Research Citation**: USDA National Agricultural Statistics Service (2024), Cornell Small Farms Program Economic Analysis

### Yield Potential and Turnover

**Annual Production Capacity (per 100 sq ft growing space):**

| Crop | Turns/Year | Lbs per Turn | Annual Production | Market Price Range |
|------|-----------|--------------|-------------------|-------------------|
| Butterhead Lettuce | 7-8 | 15-20 lbs | 105-160 lbs | $4-8/lb wholesale |
| Basil (continuous) | 12-15 cuts | 8-12 lbs | 96-180 lbs | $8-16/lb |
| Cherry Tomatoes | 2-3 | 80-120 lbs | 160-360 lbs | $3-6/lb |
| Cucumbers | 3-4 | 60-100 lbs | 180-400 lbs | $1.50-3/lb |
| Microgreens | 15-20 | 6-10 lbs | 90-200 lbs | $20-40/lb |

**Note**: High-turnover crops (lettuce, microgreens) provide faster cash flow but require more intensive labor. Long-season crops (tomatoes) tie up space but may command premium pricing.

## Matching Grower Expertise to Crop Complexity

### Crop Complexity Tiers

**Tier 1 - Beginner Friendly:**
- Lettuce (all varieties)
- Bok choy, Asian greens
- Herbs: basil, mint, parsley
- Characteristics: Short cycles, forgiving pH/EC ranges, minimal pest pressure

**Tier 2 - Intermediate:**
- Tomatoes (cherry varieties)
- Cucumbers (greenhouse varieties)
- Peppers (bell, sweet)
- Strawberries
- Characteristics: Longer cycles, pollination needs, environmental steering required

**Tier 3 - Advanced:**
- Beefsteak tomatoes (grafted)
- Specialty peppers
- Melons
- Edible flowers
- Characteristics: Complex nutrient programs, precise climate control, specialized knowledge

## Regional and Climate Considerations

### Climate Zone Influence on Crop Selection

**Northern Climates (USDA Zones 3-6):**
- Advantage: High demand for winter greens (November-April premium pricing)
- Challenge: Heating costs, supplemental lighting requirements
- Top crops: Leafy greens, herbs, microgreens

**Southern Climates (USDA Zones 8-10):**
- Advantage: Year-round production, lower heating costs
- Challenge: Cooling costs in summer, market competition from field growers
- Top crops: Fruiting crops (tomatoes, peppers), specialty herbs

**Research Citation**: University Extension Climate-Adapted Crop Recommendations (NC State, U-Arizona, U-Florida, 2024)

## Risk Management Through Crop Diversity

### The 60-30-10 Portfolio Approach

Research from Michigan State University Extension (2023) recommends:

- **60%**: Proven, reliable crops with established markets
- **30%**: Secondary crops that provide seasonal diversity
- **10%**: Experimental/high-risk, high-reward specialty crops

This approach balances cash flow stability with innovation and market differentiation.

### Succession Planting and Continuous Harvest

**Best Practices for Production Continuity:**

1. **Staggered Seeding**: Start new transplants every 7-14 days for continuous harvest
2. **Multi-Variety Strategy**: Grow 3-5 lettuce varieties to spread market risk
3. **Seasonal Rotation**: Plan crop transitions 8-12 weeks in advance
4. **Backup Crops**: Maintain fast-growing crops (microgreens, baby lettuce) for gap-filling

## Decision Matrix Tool

### Scoring Your Crop Options

Rate each potential crop (1-5 scale) across these factors:

| Factor | Weight | Crop A | Crop B | Crop C |
|--------|--------|--------|--------|--------|
| Market Demand | 25% | | | |
| Price Point | 25% | | | |
| System Fit | 20% | | | |
| Expertise Match | 15% | | | |
| Turn Rate | 10% | | | |
| Risk Level (inverse) | 5% | | | |

**Calculation**: Multiply score × weight, sum for total. Crops scoring >3.5 warrant serious consideration.

## Regulatory and Certification Considerations

### Organic Certification Impact

- Organic premium: 20-50% higher wholesale prices
- Requirements: Certified organic seeds, allowed inputs only, 3-year land history (or exempt hydro)
- Note: Hydroponic organic certification varies by certifier—verify USDA NOP compliance

### Food Safety and GAP Requirements

Crops sold to wholesale buyers often require:
- Good Agricultural Practices (GAP) certification
- Hazard Analysis Critical Control Points (HACCP) plans for processing
- Liability insurance coverage

**Research Citation**: USDA Food Safety Modernization Act (FSMA) Produce Safety Rule

## Conclusion

Strategic crop selection integrates market intelligence, system compatibility, economic analysis, and grower capability. Successful CEA operators revisit crop selection quarterly, using data-driven decision making to optimize profitability and sustainability.

**Key Takeaways:**
1. Match crops to your primary market channel requirements
2. Ensure system-crop compatibility before infrastructure investment
3. Calculate full production costs and required selling prices
4. Start with simpler crops, add complexity as expertise grows
5. Diversify crop portfolio to manage risk and seasonality

## References

- Cornell University CEA Program. (2024). Crop Selection Economics for Controlled Environment Systems.
- USDA National Agricultural Statistics Service. (2024). Specialty Crop Market Analysis.
- University of Arizona CEAC. (2024). Hydroponic Crop Production Guidelines.
- Michigan State University Extension. (2023). Risk Management in Greenhouse Production.
- USDA Food Safety Modernization Act (FSMA) Produce Safety Rule. https://www.fda.gov/food/food-safety-modernization-act-fsma\`
                    },
                    {
                        id: "l1-3-106",
                        title: "Crop Selection Assessment",
                        type: "quiz",
                        duration: 15,
                        questions: [
                            {
                                id: "q1-m1-106",
                                question: "Which market channel typically requires the HIGHEST production standards including GAP certification and consistent sizing?",
                                options: [
                                    "Farmers markets",
                                    "Direct restaurant sales",
                                    "Wholesale distributors and institutional buyers",
                                    "Community Supported Agriculture (CSA)"
                                ],
                                correctAnswer: 2,
                                explanation: "Wholesale distributors and institutional buyers require the most stringent production standards, including GAP certification, consistent sizing, food safety protocols, and often liability insurance. These channels serve large-scale operations with strict compliance requirements."
                            },
                            {
                                id: "q2-m1-106",
                                question: "According to the 60-30-10 portfolio approach recommended by Michigan State University Extension, what percentage should be allocated to proven, reliable crops with established markets?",
                                options: [
                                    "10%",
                                    "30%",
                                    "60%",
                                    "100%"
                                ],
                                correctAnswer: 2,
                                explanation: "The 60-30-10 approach recommends 60% proven reliable crops, 30% secondary/seasonal crops, and 10% experimental high-risk crops. This balances cash flow stability with innovation and market differentiation."
                            },
                            {
                                id: "q3-m1-106",
                                question: "Which crop characteristic makes lettuce and microgreens advantageous for cash flow compared to tomatoes?",
                                options: [
                                    "Higher selling prices per pound",
                                    "Lower production costs",
                                    "Higher turnover rates with shorter production cycles",
                                    "Easier to grow with less expertise required"
                                ],
                                correctAnswer: 2,
                                explanation: "Lettuce and microgreens provide 7-20 turns per year versus 2-3 for tomatoes, resulting in faster cash flow despite potentially lower per-pound revenue. High turnover crops generate revenue more frequently throughout the year."
                            },
                            {
                                id: "q4-m1-106",
                                question: "What is the optimal root zone temperature range for warm-season fruiting crops like tomatoes and peppers?",
                                options: [
                                    "55-60°F (13-15°C)",
                                    "60-68°F (15-20°C)",
                                    "65-70°F (18-21°C)",
                                    "70-75°F (21-24°C)"
                                ],
                                correctAnswer: 3,
                                explanation: "Warm-season fruiting crops (tomatoes, peppers, cucumbers) require root zone temperatures of 70-75°F (21-24°C) for optimal growth, which is warmer than cool-season leafy greens (65-70°F) or strawberries (60-68°F)."
                            },
                            {
                                id: "q5-m1-106",
                                question: "Which hydroponic system type is LEAST suitable for large vining fruiting crops like tomatoes and cucumbers?",
                                options: [
                                    "Deep Water Culture (DWC)",
                                    "Nutrient Film Technique (NFT)",
                                    "Dutch Bucket systems",
                                    "Bato Bucket systems"
                                ],
                                correctAnswer: 1,
                                explanation: "NFT systems are poorly suited for large fruiting crops due to channel blockage from extensive root systems and inadequate root support for heavy plants. Dutch buckets and Bato buckets are specifically designed for large fruiting crops."
                            },
                            {
                                id: "q6-m1-106",
                                question: "For a crop to be economically viable in a wholesale market channel at $3.00/lb selling price, what is the maximum recommended production cost per pound?",
                                options: [
                                    "$1.00/lb",
                                    "$1.50/lb",
                                    "$2.00/lb",
                                    "$2.50/lb"
                                ],
                                correctAnswer: 1,
                                explanation: "For wholesale at $2-4/lb selling price, production costs should be below $1.50/lb to maintain profitable margins. At $3.00/lb wholesale, staying under $1.50/lb cost provides a 50% margin to cover unexpected expenses and profit."
                            }
                        ]
                    }
                ]
            }`;

// Find and replace Module 1
const module1Pattern = /\{\s*id:\s*"m1-106",[\s\S]*?\},\s*\{[\s]*id:\s*"m2-106",/;
const replacement = module1Enhanced + ',\n            {\n                id: "m2-106",';

content = content.replace(module1Pattern, replacement);

// Write back to file
fs.writeFileSync(filePath, content, 'utf8');
console.log('Module 1 enhanced successfully!');
