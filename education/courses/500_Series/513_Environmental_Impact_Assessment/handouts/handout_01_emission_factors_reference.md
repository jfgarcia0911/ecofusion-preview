# Emission Factors Reference Guide

**Course:** 513 - Environmental Impact Assessment
**Purpose:** Quick reference for common emission factors used in carbon and environmental footprinting

---

## Global Warming Potentials (GWP₁₀₀)

**Source:** IPCC Sixth Assessment Report (AR6), 100-year time horizon

### Common Greenhouse Gases

| Gas | Chemical Formula | GWP₁₀₀ | Typical CEA Source |
|-----|------------------|---------|-------------------|
| **Carbon dioxide** | CO₂ | **1** | All combustion, baseline |
| **Methane (fossil)** | CH₄ | **29.8** | Natural gas leaks, combustion |
| **Methane (biogenic)** | CH₄ | **27.2** | Organic waste decomposition |
| **Nitrous oxide** | N₂O | **273** | Combustion, fertilizer use |

### Refrigerants (HFCs, CFCs)

| Refrigerant | Common Name | GWP₁₀₀ | Application |
|-------------|-------------|---------|-------------|
| R-22 | HCFC-22 | 1,924 | Older HVAC (being phased out) |
| R-134a | HFC-134a | 1,530 | Chillers, automotive AC |
| R-404A | — | 3,922 | Commercial refrigeration |
| R-410A | — | 2,256 | Residential/commercial HVAC |
| R-32 | — | 771 | Newer HVAC (lower GWP alternative) |
| R-407C | — | 1,922 | HVAC blend |
| R-507A | — | 4,273 | Low-temp refrigeration |
| CO₂ | R-744 | 1 | Natural refrigerant |
| Ammonia | R-717 | 0 | Industrial refrigeration |

### Other Industrial Gases

| Gas | GWP₁₀₀ | Source |
|-----|---------|--------|
| SF₆ (Sulfur hexafluoride) | 25,200 | Electrical switchgear |
| NF₃ (Nitrogen trifluoride) | 17,400 | Electronics manufacturing |
| HFC-23 | 14,600 | Refrigerant byproduct |

---

## Fuel Combustion Emission Factors

**Source:** EPA AP-42, GHG Inventory Guidance

### Natural Gas

| Parameter | Value | Unit |
|-----------|-------|------|
| CO₂ | 53.1 | kg/mmBtu |
| CO₂ | 1.91 | kg/m³ |
| CO₂ | 0.18 | kg/kWh_thermal |
| CH₄ | 0.001 | kg/mmBtu |
| N₂O | 0.0001 | kg/mmBtu |
| **Total CO₂eq** | **53.16** | **kg/mmBtu** |
| Energy content | 0.1 | mmBtu/therm |
| Energy content | 0.0373 | mmBtu/m³ |

### Liquid Fuels

| Fuel | CO₂ (kg/L) | CO₂ (kg/gal) | Energy (mmBtu/L) |
|------|------------|--------------|------------------|
| Diesel | 2.68 | 10.15 | 0.0383 |
| Gasoline | 2.32 | 8.78 | 0.0345 |
| Propane (LPG) | 1.51 | 5.72 | 0.0255 |
| Kerosene | 2.53 | 9.57 | 0.0370 |
| Jet fuel | 2.55 | 9.65 | 0.0376 |
| Fuel oil (#2) | 2.78 | 10.52 | 0.0393 |

### Solid Fuels

| Fuel | CO₂ (kg/kg) | Energy (mmBtu/kg) |
|------|-------------|-------------------|
| Coal (bituminous) | 2.23 | 0.0248 |
| Wood pellets | 1.53 | 0.0169 |
| Wood chips (dry) | 1.67 | 0.0186 |

---

## Electricity Emission Factors

**Source:** EPA eGRID 2021 (most recent available)

### United States - By State (kg CO₂eq/kWh)

| State | Factor | Notes |
|-------|--------|-------|
| **National Average** | **0.386** | All sources weighted average |
| California | 0.202 | High renewable penetration |
| New York | 0.150 | Nuclear + hydro + renewables |
| Texas | 0.448 | Gas + coal dominant |
| Washington | 0.087 | Hydropower dominant |
| West Virginia | 0.732 | Coal-heavy grid |
| Vermont | 0.008 | Nuclear + hydro |
| Florida | 0.403 | Natural gas majority |
| Pennsylvania | 0.332 | Nuclear + natural gas |
| Illinois | 0.260 | Nuclear significant |
| North Dakota | 0.746 | Coal-dominant |

### U.S. Regional Grids (eGRID subregions - examples)

| Subregion | Factor (kg CO₂/kWh) |
|-----------|---------------------|
| NYUP (Upstate NY) | 0.091 |
| NYLI (Long Island) | 0.235 |
| CANO (Northern California) | 0.159 |
| CASO (Southern California) | 0.235 |
| ERCT (Texas) | 0.397 |

### By Generation Type

| Source | kg CO₂eq/kWh | Water (L/kWh) |
|--------|--------------|---------------|
| Coal | 0.95 | 1.9 |
| Natural gas (combined cycle) | 0.41 | 0.8 |
| Natural gas (simple cycle) | 0.62 | 0.4 |
| Oil | 0.84 | 1.5 |
| Nuclear | 0.012 | 2.5 |
| Hydropower | 0.024 | 17-22 (reservoir evap) |
| Wind | 0.011 | 0.01 |
| Solar PV (utility) | 0.048 | 0.03 |
| Solar PV (rooftop) | 0.041 | 0.03 |
| Geothermal | 0.038 | 0.15 |
| Biomass | 0.23 | 1.1 |

### International Examples

| Country | kg CO₂/kWh | Year |
|---------|------------|------|
| Global Average | 0.475 | 2021 |
| China | 0.555 | 2021 |
| India | 0.708 | 2021 |
| Germany | 0.348 | 2022 |
| France | 0.057 | 2021 |
| UK | 0.233 | 2022 |
| Japan | 0.447 | 2021 |
| Canada | 0.120 | 2021 |
| Australia | 0.630 | 2021 |
| Brazil | 0.075 | 2021 |
| Norway | 0.013 | 2021 |

**Note:** Use most recent regional factors from national inventories or IEA data.

---

## Transportation Emission Factors

**Source:** EPA, DEFRA, ecoinvent

### Road Transport (kg CO₂eq per unit)

| Mode | Per tonne·km | Per vehicle·km | Notes |
|------|-------------|----------------|-------|
| **Freight Truck (Diesel)** | | | |
| Light truck (<3.5 tonnes) | 0.171 | 0.257 (1.5t load) | Van, pickup |
| Medium truck (3.5-7.5t) | 0.088 | 0.440 (5t load) | Box truck |
| Heavy truck (>7.5t) | 0.062 | 0.930 (15t load) | Semi-trailer |
| Refrigerated truck | 0.182 | — | +50% vs standard |
| **Passenger Vehicle** | — | | |
| Average car | — | 0.170 | Gasoline, per km |
| Small car | — | 0.120 | |
| Large car | — | 0.220 | |
| SUV | — | 0.250 | |
| Electric vehicle | — | 0.050 | Based on grid mix |
| **Delivery Van** | 0.171 | 0.257 | Urban delivery |

### Rail Transport

| Mode | kg CO₂eq/tonne·km |
|------|-------------------|
| Freight rail (diesel) | 0.022 |
| Freight rail (electric) | 0.008 |
| Passenger rail (diesel) | 0.041 per passenger·km |
| Passenger rail (electric) | 0.015 per passenger·km |

### Marine Transport

| Mode | kg CO₂eq/tonne·km |
|------|-------------------|
| Container ship | 0.008 |
| Bulk carrier | 0.005 |
| Tanker | 0.005 |
| Ferry (passenger) | 0.113 per passenger·km |

### Air Transport

| Mode | kg CO₂eq per unit |
|------|-------------------|
| Air freight | 0.602 per tonne·km |
| Passenger (short-haul <1,500 km) | 0.158 per passenger·km |
| Passenger (long-haul >1,500 km) | 0.113 per passenger·km |

---

## Materials and Products

**Source:** ecoinvent, GaBi, ICE Database

### Agricultural Inputs

| Material | kg CO₂eq/kg | Notes |
|----------|-------------|-------|
| **Nitrogen Fertilizers** | | |
| Urea | 1.9 | As kg N |
| Ammonium nitrate | 2.3 | As kg N |
| Ammonium sulfate | 1.3 | As kg N |
| Calcium ammonium nitrate (CAN) | 1.6 | As kg N |
| **Phosphate Fertilizers** | | |
| Single superphosphate | 0.4 | As kg P₂O₅ |
| Triple superphosphate | 0.7 | As kg P₂O₅ |
| Diammonium phosphate (DAP) | 1.5 | As kg product |
| **Potassium Fertilizers** | | |
| Potassium chloride (MOP) | 0.5 | As kg K₂O |
| Potassium sulfate (SOP) | 0.6 | As kg K₂O |
| **Other** | | |
| Lime (calcium carbonate) | 0.14 | Includes CO₂ release |
| Pesticides (average) | 10-20 | High variability |
| Seeds (average) | 1.5 | Varies by crop |

### Growing Media

| Material | kg CO₂eq/kg |
|----------|-------------|
| Rockwool | 1.8 |
| Peat moss | 0.5 |
| Coconut coir | 0.3 |
| Perlite | 0.15 |
| Vermiculite | 1.2 |

### Packaging Materials

| Material | kg CO₂eq/kg |
|----------|-------------|
| PET plastic | 3.5 |
| HDPE plastic | 2.0 |
| PP plastic (polypropylene) | 2.2 |
| PVC | 2.8 |
| LDPE film | 2.2 |
| PS (polystyrene) | 3.4 |
| Corrugated cardboard | 0.9 |
| Paperboard | 1.1 |
| Glass | 0.85 |
| Aluminum | 8.5 |
| Steel can | 2.9 |

### Construction Materials

| Material | kg CO₂eq/kg | kg CO₂eq/m³ | Notes |
|----------|-------------|-------------|-------|
| **Concrete** | 0.15 | 360 | Ready-mix, average |
| Concrete (low-carbon) | 0.08 | 190 | 30% replacement |
| **Steel** | | | |
| Virgin steel | 1.8 | 14,100 | Primary production |
| Recycled steel | 0.5 | 3,900 | EAF process |
| Stainless steel | 2.9 | 22,700 | |
| **Aluminum** | | | |
| Virgin aluminum | 8.5 | 22,950 | Primary smelting |
| Recycled aluminum | 0.6 | 1,620 | 93% less than virgin |
| **Wood** | | | |
| Sawn lumber | 0.3 | 150 | Softwood, kiln-dried |
| Plywood | 0.5 | 250 | |
| Engineered lumber | 0.4 | 200 | LVL, glulam |
| **Glass** | 0.85 | 2,100 | Float glass |
| **Insulation** | | | |
| Fiberglass | 1.2 | 40 | Batt |
| Mineral wool | 1.5 | 60 | |
| Polyurethane foam | 3.5 | 100 | |
| Polystyrene (XPS) | 6.2 | 220 | |
| **Plastics** | | | |
| PVC pipe | 2.8 | 3,920 | |
| HDPE pipe | 2.0 | 1,900 | |
| Polycarbonate glazing | 6.1 | 7,320 | |

---

## Water Footprint Factors

### Electricity Generation (L water/kWh)

| Source | Consumption (L/kWh) | Notes |
|--------|---------------------|-------|
| Coal (wet-cooled) | 2.3 | Evaporative cooling |
| Coal (dry-cooled) | 0.3 | Air-cooled |
| Natural gas (CCGT, wet) | 0.8 | Combined cycle |
| Nuclear | 2.5 | Large cooling needs |
| Hydropower | 17-22 | Reservoir evaporation |
| Solar PV | 0.03 | Panel cleaning only |
| Wind | 0.01 | Minimal |
| Geothermal | 0.15 | Flash steam |

### Materials (L water/kg)

| Material | L/kg | Notes |
|----------|------|-------|
| Steel | 50 | Including mining, processing |
| Aluminum | 150 | Bauxite mining + smelting |
| Concrete | 1.0 | Mixing + curing |
| Plastic (average) | 8 | Polymerization process |
| Glass | 2.5 | Melting + forming |
| Fertilizers | 1-2 | Chemical synthesis |

---

## Emission Factor Uncertainty

### Typical Uncertainty Ranges (95% Confidence)

| Factor Type | Uncertainty |
|-------------|-------------|
| Direct combustion (Scope 1) | ±5% |
| Electricity (grid average) | ±10-15% |
| Transportation (fuel-based) | ±5% |
| Refrigerant GWPs | ±15-25% |
| Materials (database average) | ±30-50% |
| Economic input-output | ±50-100% |
| Waste disposal | ±50% |

**Best Practice:** Document uncertainty and conduct sensitivity analysis on key factors.

---

## Regional Grid Factor Resources

### United States
- **EPA eGRID:** www.epa.gov/egrid
  - Updated every 2 years
  - State and subregion factors
  - Power profiler tool

### International
- **IEA Emissions Factors:** www.iea.org
  - Country-level factors
  - Annual updates
  - Electricity and heat

- **DEFRA (UK):** www.gov.uk/government/collections/government-conversion-factors-for-company-reporting
  - Comprehensive factors (all categories)
  - Annual updates
  - Widely used internationally

### LCA Databases
- **ecoinvent:** www.ecoinvent.org
  - 18,000+ processes
  - Country-specific electricity
  - Materials, transport, energy

- **USDA LCI:** www.lcacommons.gov
  - Free, U.S.-focused
  - Agricultural products
  - Electricity generation

---

## Usage Notes

1. **Always cite source and vintage** of emission factors in reports
2. **Use regional factors** where available (e.g., state electricity vs. national average)
3. **Update annually** - factors change as grids decarbonize
4. **Document assumptions** for transparency
5. **Check consistency** - ensure all factors use same GWP basis (AR5 vs. AR6)
6. **Consider uncertainty** - vary factors in sensitivity analysis
7. **Hierarchy:** Site-specific > Supplier-specific > Regional > National > Proxy

---

## Conversion Factors

### Energy
- 1 mmBtu = 1,000,000 Btu = 293.1 kWh
- 1 therm = 100,000 Btu = 0.1 mmBtu = 29.31 kWh
- 1 m³ natural gas = 0.0373 mmBtu = 10.9 kWh
- 1 gallon diesel = 0.138 mmBtu = 40.7 kWh
- 1 tonne coal = 24.8 mmBtu (bituminous)

### Mass
- 1 tonne = 1,000 kg = 1 metric ton
- 1 short ton = 2,000 lbs = 907 kg
- 1 long ton = 2,240 lbs = 1,016 kg

### Volume
- 1 gallon (U.S.) = 3.785 L
- 1 m³ = 1,000 L = 264.2 gallons

### GHG
- CO₂ to C: Divide by 3.67 (or multiply by 0.273)
- C to CO₂: Multiply by 3.67
- CH₄ to CO₂eq: Multiply by GWP (29.8 for AR6)

---

**Keep this reference handy for all carbon footprint and LCA calculations!**

**Last Updated:** December 2025
**Next Update:** Review emission factors annually, especially electricity grid factors

