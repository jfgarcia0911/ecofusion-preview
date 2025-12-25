# Module 7: Industrial Symbiosis & Network Design

## Module Overview

Explore industrial symbiosis principles and design collaborative resource-sharing networks that create value from waste streams across multiple agricultural and industrial operations.

**Duration:** 8 hours | **Level:** Expert (400-level)

---

## Learning Objectives

1. Define industrial symbiosis and its application to agriculture
2. Analyze successful industrial symbiosis case studies
3. Design resource exchange networks using GIS and network analysis
4. Develop collaboration models and governance structures
5. Create contractual frameworks for resource sharing
6. Optimize logistics and transportation
7. Assess economic and environmental benefits
8. Implement industrial symbiosis projects

---

## 1. Industrial Symbiosis Fundamentals

### 1.1 Core Concepts

**Definition:**
> Industrial symbiosis is a collaborative approach where traditionally separate industries engage in resource exchange—including materials, energy, water, and byproducts—to generate collective economic and environmental benefits.

**Key Principles:**
```
┌─────────────────────────────────────────────┐
│    INDUSTRIAL SYMBIOSIS PRINCIPLES          │
├─────────────────────────────────────────────┤
│                                             │
│ 1. WASTE = RESOURCE                         │
│    └─> One facility's output becomes        │
│        another's input                      │
│                                             │
│ 2. GEOGRAPHIC PROXIMITY                     │
│    └─> Minimize transportation costs        │
│        and impacts                          │
│                                             │
│ 3. DIVERSITY OF PARTICIPANTS                │
│    └─> Different industries create          │
│        synergistic opportunities            │
│                                             │
│ 4. MUTUAL BENEFIT                           │
│    └─> Economic value for all parties       │
│                                             │
│ 5. TRUST & COLLABORATION                    │
│    └─> Shared information and               │
│        long-term commitment                 │
│                                             │
└─────────────────────────────────────────────┘
```

### 1.2 Agricultural Symbiosis Opportunities

**Resource Exchange Examples:**
```
AGRICULTURAL OPERATION → PARTNER INDUSTRIES
═══════════════════════════════════════════

CEA FACILITY OUTPUTS:
├─ Organic waste → Composting facility
├─ CO2-enriched air → Algae production
├─ Waste heat → Aquaculture facility
├─ Nutrient-rich water → Constructed wetlands
└─ Plant biomass → Biogas plant

CEA FACILITY INPUTS:
├─ CO2 → Brewery fermentation
├─ Waste heat → Data center / industrial facility
├─ Treated wastewater → Municipal treatment plant
├─ Nutrients → Fish processing waste
└─ Growing media → Mushroom farm spent substrate
```

---

## 2. Case Studies

### 2.1 Kalundborg Symbiosis (Denmark)

**The World's First Industrial Symbiosis:**
```
KALUNDBORG NETWORK (Established 1970s)
══════════════════════════════════════

PARTICIPANTS:
• Asnæs Power Station
• Novo Nordisk (pharmaceuticals)
• Novozymes (enzymes)
• Gyproc (plasterboard)
• Municipality of Kalundborg
• Local farms and greenhouses

RESOURCE EXCHANGES:
┌──────────────────────────────────────┐
│ Power Station → Novo Nordisk         │
│   └─ Steam for heating/processing    │
│                                      │
│ Power Station → Greenhouses          │
│   └─ Waste heat (130,000 m²)        │
│                                      │
│ Novo Nordisk → Farms                 │
│   └─ Biomass sludge as fertilizer    │
│                                      │
│ Gyproc → Power Station               │
│   └─ Gypsum from flue gas            │
│                                      │
│ Municipality → All Facilities        │
│   └─ Water supply coordination       │
└──────────────────────────────────────┘

ANNUAL BENEFITS:
• CO2 reduction: 240,000 tonnes
• Water savings: 3 million m³
• Economic value: €24 million
• Materials reused: 3.6 million tonnes
```

### 2.2 Agricultural Eco-Industrial Park

**Integrated CEA Complex:**
```python
class AgriculturalEcopark:
    """
    Model an integrated agricultural industrial symbiosis network.
    """
    def __init__(self):
        self.facilities = {
            'vertical_farm': {
                'outputs': {
                    'plant_waste': 50,    # tonnes/year
                    'water_runoff': 10000, # m³/year
                    'heat_excess': 500     # MWh/year
                },
                'inputs': {
                    'co2': 100,           # tonnes/year
                    'water': 12000,       # m³/year
                    'electricity': 2000   # MWh/year
                }
            },
            'anaerobic_digester': {
                'outputs': {
                    'biogas': 150000,     # m³/year
                    'digestate': 45,      # tonnes/year
                    'heat': 300          # MWh/year
                },
                'inputs': {
                    'organic_waste': 50,  # tonnes/year
                    'water': 500          # m³/year
                }
            },
            'fish_farm': {
                'outputs': {
                    'fish_waste': 20,     # tonnes/year
                    'warm_water': 8000    # m³/year
                },
                'inputs': {
                    'heat': 200,          # MWh/year
                    'water': 10000        # m³/year
                }
            },
            'brewery': {
                'outputs': {
                    'co2': 120,           # tonnes/year
                    'spent_grain': 100,   # tonnes/year
                    'heat': 400           # MWh/year
                },
                'inputs': {
                    'water': 15000,       # m³/year
                    'grain': 200          # tonnes/year
                }
            }
        }

    def identify_synergies(self):
        """
        Map potential resource exchanges between facilities.
        """
        synergies = []

        # Brewery CO2 → Vertical Farm
        synergies.append({
            'from': 'brewery',
            'to': 'vertical_farm',
            'resource': 'co2',
            'quantity': 100,  # tonnes/year
            'value': 50000    # $/year
        })

        # Vertical Farm waste → Anaerobic Digester
        synergies.append({
            'from': 'vertical_farm',
            'to': 'anaerobic_digester',
            'resource': 'plant_waste',
            'quantity': 50,
            'value': 5000
        })

        # Anaerobic Digester biogas → Electricity/Heat
        synergies.append({
            'from': 'anaerobic_digester',
            'to': 'vertical_farm',
            'resource': 'electricity',
            'quantity': 300,  # MWh/year
            'value': 45000
        })

        # Waste heat cascading
        synergies.append({
            'from': 'brewery',
            'to': 'fish_farm',
            'resource': 'heat',
            'quantity': 200,
            'value': 20000
        })

        return synergies

    def calculate_benefits(self, synergies):
        """
        Calculate economic and environmental benefits.
        """
        total_economic = sum(s['value'] for s in synergies)

        # Environmental benefits (simplified)
        co2_avoided = sum(s['quantity'] for s in synergies if s['resource'] == 'co2') * 0.8
        waste_diverted = sum(s['quantity'] for s in synergies if 'waste' in s['resource'])

        return {
            'economic_value': total_economic,
            'co2_reduction_tonnes': co2_avoided,
            'waste_diverted_tonnes': waste_diverted
        }
```

---

## 3. Network Design & Analysis

### 3.1 GIS-Based Resource Matching

```python
import geopandas as gpd
from shapely.geometry import Point
import pandas as pd
import networkx as nx

class SymbiosisNetworkDesigner:
    """
    Design industrial symbiosis networks using GIS and network analysis.
    """
    def __init__(self):
        self.facilities = gpd.GeoDataFrame()
        self.resource_flows = []

    def add_facility(self, name, lat, lon, resources_available, resources_needed):
        """
        Add facility to network.
        """
        facility = {
            'name': name,
            'geometry': Point(lon, lat),
            'resources_available': resources_available,
            'resources_needed': resources_needed
        }

        self.facilities = pd.concat([
            self.facilities,
            gpd.GeoDataFrame([facility])
        ], ignore_index=True)

    def find_matches(self, max_distance_km=50):
        """
        Find potential resource matches within distance threshold.
        """
        matches = []

        for i, facility_a in self.facilities.iterrows():
            for j, facility_b in self.facilities.iterrows():
                if i >= j:
                    continue

                # Calculate distance
                distance = facility_a.geometry.distance(facility_b.geometry) * 111  # Rough km conversion

                if distance > max_distance_km:
                    continue

                # Check for resource matches
                resources_a = set(facility_a['resources_available'].keys())
                needs_b = set(facility_b['resources_needed'].keys())

                common = resources_a.intersection(needs_b)

                for resource in common:
                    quantity_available = facility_a['resources_available'][resource]
                    quantity_needed = facility_b['resources_needed'][resource]

                    match_quantity = min(quantity_available, quantity_needed)

                    if match_quantity > 0:
                        matches.append({
                            'from': facility_a['name'],
                            'to': facility_b['name'],
                            'resource': resource,
                            'quantity': match_quantity,
                            'distance_km': distance,
                            'transport_cost': self.estimate_transport_cost(resource, match_quantity, distance)
                        })

                # Check reverse direction
                resources_b = set(facility_b['resources_available'].keys())
                needs_a = set(facility_a['resources_needed'].keys())

                common = resources_b.intersection(needs_a)

                for resource in common:
                    quantity_available = facility_b['resources_available'][resource]
                    quantity_needed = facility_a['resources_needed'][resource]

                    match_quantity = min(quantity_available, quantity_needed)

                    if match_quantity > 0:
                        matches.append({
                            'from': facility_b['name'],
                            'to': facility_a['name'],
                            'resource': resource,
                            'quantity': match_quantity,
                            'distance_km': distance,
                            'transport_cost': self.estimate_transport_cost(resource, match_quantity, distance)
                        })

        return matches

    def estimate_transport_cost(self, resource, quantity, distance_km):
        """
        Estimate transportation cost.
        """
        # Cost parameters ($/tonne/km)
        cost_factors = {
            'solid': 0.15,    # Plant waste, compost
            'liquid': 0.20,   # Water, liquid nutrients
            'gas': 0.50       # CO2, biogas
        }

        # Categorize resource
        if 'waste' in resource or 'compost' in resource:
            factor = cost_factors['solid']
        elif 'water' in resource or 'liquid' in resource:
            factor = cost_factors['liquid']
        elif 'co2' in resource or 'gas' in resource:
            factor = cost_factors['gas']
        else:
            factor = 0.20  # Default

        return quantity * distance_km * factor

    def create_network_graph(self, matches):
        """
        Create network graph for visualization and optimization.
        """
        G = nx.DiGraph()

        for match in matches:
            G.add_edge(
                match['from'],
                match['to'],
                resource=match['resource'],
                quantity=match['quantity'],
                cost=match['transport_cost']
            )

        return G

    def optimize_network(self, matches):
        """
        Optimize network for maximum benefit.
        """
        # Filter out uneconomical exchanges
        economical_matches = [
            m for m in matches
            if self.calculate_net_benefit(m) > 0
        ]

        # Prioritize by benefit
        economical_matches.sort(
            key=lambda m: self.calculate_net_benefit(m),
            reverse=True
        )

        return economical_matches

    def calculate_net_benefit(self, match):
        """
        Calculate net benefit of resource exchange.
        """
        # Resource value (simplified)
        resource_values = {
            'co2': 500,           # $/tonne
            'plant_waste': 50,    # $/tonne
            'compost': 100,       # $/tonne
            'heat': 100,          # $/MWh
            'water': 2            # $/m³
        }

        resource = match['resource']
        quantity = match['quantity']
        transport_cost = match['transport_cost']

        # Value
        value_per_unit = resource_values.get(resource, 50)
        total_value = quantity * value_per_unit

        # Net benefit
        net_benefit = total_value - transport_cost

        return net_benefit
```

---

## 4. Governance & Collaboration

### 4.1 Governance Structures

**Symbiosis Organization Models:**
```
┌────────────────────────────────────────────┐
│     GOVERNANCE MODEL OPTIONS               │
├────────────────────────────────────────────┤
│                                            │
│ 1. INFORMAL NETWORK                        │
│    ├─ Bilateral agreements                │
│    ├─ No central coordination             │
│    └─ Flexible but less structured        │
│                                            │
│ 2. FACILITATED NETWORK                     │
│    ├─ Third-party facilitator             │
│    ├─ Matchmaking services                │
│    └─ Low commitment required             │
│                                            │
│ 3. COORDINATING ORGANIZATION               │
│    ├─ Dedicated management entity         │
│    ├─ Strategic planning                  │
│    ├─ Shared services                     │
│    └─ Membership fees                     │
│                                            │
│ 4. JOINT VENTURE                           │
│    ├─ Shared ownership of assets          │
│    ├─ Integrated operations               │
│    ├─ High commitment                     │
│    └─ Maximum integration                 │
│                                            │
└────────────────────────────────────────────┘
```

### 4.2 Contractual Frameworks

**Resource Exchange Agreement Template:**
```
INDUSTRIAL SYMBIOSIS RESOURCE EXCHANGE AGREEMENT
═════════════════════════════════════════════════

PARTIES:
• Provider: [Facility Name]
• Receiver: [Facility Name]

RESOURCE SPECIFICATION:
• Type: [e.g., CO2, plant waste, heat]
• Quantity: [Amount per time period]
• Quality: [Specifications and standards]
• Delivery Schedule: [Frequency and timing]

TERMS:
• Duration: [Years with renewal options]
• Pricing: [Fixed, indexed, or cost-sharing model]
• Liability: [Responsibility for quality and delivery]
• Force Majeure: [Conditions for suspension]
• Termination: [Notice period and conditions]

RESPONSIBILITIES:
Provider:
├─ Quality assurance and testing
├─ Storage and handling
├─ Delivery coordination
└─ Documentation and reporting

Receiver:
├─ Acceptance testing
├─ Transportation (or specify provider)
├─ Payment processing
└─ Feedback and communication

PERFORMANCE METRICS:
• Delivery reliability: [Target %]
• Quality standards: [Specifications]
• Response time: [Hours for issues]
• Reporting frequency: [Monthly/Quarterly]

RISK MANAGEMENT:
• Insurance requirements
• Backup supply arrangements
• Dispute resolution process
• Intellectual property protections
```

---

## 5. Implementation Framework

### 5.1 Stepwise Approach

**Phased Implementation:**
```
PHASE 1: ASSESSMENT (Months 1-3)
├─ Identify potential partners
├─ Characterize waste streams
├─ Conduct feasibility analysis
└─ Develop preliminary business case

PHASE 2: PLANNING (Months 4-6)
├─ Detailed engineering design
├─ Finalize agreements and contracts
├─ Secure financing and permits
└─ Establish governance structure

PHASE 3: PILOT (Months 7-12)
├─ Implement initial exchanges
├─ Test logistics and operations
├─ Monitor and optimize
└─ Demonstrate value

PHASE 4: SCALE-UP (Year 2+)
├─ Expand to additional resources
├─ Add new partners
├─ Optimize network
└─ Share knowledge and best practices
```

### 5.2 Economic Analysis

```python
class SymbiosisEconomicModel:
    """
    Economic analysis for industrial symbiosis projects.
    """
    def __init__(self, project_lifetime=10):
        self.lifetime = project_lifetime
        self.discount_rate = 0.08

    def calculate_npv(self, initial_investment, annual_benefits, annual_costs):
        """
        Calculate Net Present Value of symbiosis project.
        """
        npv = -initial_investment

        for year in range(1, self.lifetime + 1):
            net_benefit = annual_benefits - annual_costs
            discount_factor = (1 + self.discount_rate) ** year
            npv += net_benefit / discount_factor

        return npv

    def payback_period(self, initial_investment, annual_net_benefit):
        """
        Calculate simple payback period.
        """
        if annual_net_benefit <= 0:
            return float('inf')

        return initial_investment / annual_net_benefit

    def sensitivity_analysis(self, base_case, variables):
        """
        Analyze sensitivity to key variables.
        """
        results = {}

        for var_name, variations in variables.items():
            var_results = []

            for variation in variations:
                modified_case = base_case.copy()
                modified_case[var_name] *= variation

                npv = self.calculate_npv(
                    modified_case['investment'],
                    modified_case['annual_benefits'],
                    modified_case['annual_costs']
                )

                var_results.append({
                    'variation': variation,
                    'npv': npv
                })

            results[var_name] = var_results

        return results
```

---

## Summary

Industrial symbiosis creates value through:
1. Collaborative resource sharing
2. Geographic clustering
3. Diverse partner networks
4. Mutual economic benefits
5. Robust governance structures
6. Long-term commitments

**Implementation requires:**
- Careful partner selection
- Technical feasibility analysis
- Economic modeling
- Legal/contractual frameworks
- Phased rollout approach

---

## Discussion Questions

1. What barriers prevent industrial symbiosis adoption?
2. How can trust be built between competing organizations?
3. What role should government play in facilitating symbiosis?
4. How do you balance economic and environmental objectives?
5. What happens when a key partner exits the network?

---

## Vocabulary

- **Industrial Symbiosis:** Collaborative resource exchange
- **Eco-Industrial Park:** Geographic cluster of symbiotic industries
- **Facilitation:** Third-party matching and coordination
- **Anchor Tenant:** Large facility anchoring symbiosis network
- **Resource Cascading:** Sequential use at decreasing value
- **Network Resilience:** Ability to withstand partner changes

---

## Activity Reference

**Activity 7: Design a Symbiosis Network**
See: `/activities/activity_07_symbiosis_design.md`

---

## Next Module Preview

**Module 8: Measuring & Scaling Circular Systems**
- Circularity metrics and KPIs
- Life cycle assessment
- Certification and reporting
- Scaling circular models
- Policy and advocacy

---

*End of Module 7*
