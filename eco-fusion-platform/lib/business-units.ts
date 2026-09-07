/**
 * Business units are rows now, not a hardcoded list, so the icon each one
 * shows arrives as a name. This maps those names onto the components the UI
 * renders, falling back to a neutral icon for a unit an operator invented.
 */

import {
  Fish, Leaf, Wind, Droplets, GraduationCap, ChefHat, Sun, Layers,
  Sprout, Beef, Factory, Warehouse, Truck, Package,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  Fish, Leaf, Wind, Droplets, GraduationCap, ChefHat, Sun, Layers,
  Sprout, Beef, Factory, Warehouse, Truck, Package,
};

/** Icon names an operator can choose from when defining a unit. */
export const ICON_NAMES = Object.keys(ICONS);

export function iconFor(name: string): LucideIcon {
  return ICONS[name] ?? Layers;
}

/** Shape the client receives from /api/business-units. */
export interface BusinessUnitView {
  id: string;
  key: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  keywords: string[];
  sortOrder: number;
}

/**
 * What a new farm starts with: EcoFusion's seven silos, matching the values
 * the organizations migration seeded for existing accounts. An operator can
 * disable, reorder or replace any of them afterwards.
 */
export const DEFAULT_BUSINESS_UNITS = [
  { key: 'aquaculture',      title: '1. Aquaculture',        description: 'Fish production and rearing (Tilapia, Catfish)',    icon: 'Fish',          color: 'from-blue-400 to-blue-600',     accent: 'text-blue-400',   keywords: ['fish', 'tilapia', 'catfish', 'seafood'] },
  { key: 'plant-production', title: '2. Plant Production',   description: 'Hydroponic vegetation using aquaponic nutrients',   icon: 'Leaf',          color: 'from-green-400 to-emerald-600', accent: 'text-green-400',  keywords: ['plants', 'vegetables', 'herbs', 'lettuce', 'greens', 'produce'] },
  { key: 'methane-gas',      title: '3. Methane Gas',        description: 'Biodigestion for methane energy production',        icon: 'Wind',          color: 'from-gray-400 to-gray-600',     accent: 'text-gray-400',   keywords: ['methane', 'biogas', 'gas'] },
  { key: 'fertilizer',       title: '4. Bio-Fertilizer',     description: 'Organic fertilizer production from digestive waste', icon: 'Droplets',     color: 'from-amber-600 to-yellow-600',  accent: 'text-amber-500',  keywords: ['fertilizer', 'compost', 'organic'] },
  { key: 'training-center',  title: '5. Training Center',    description: 'Event space rental and educational programs',       icon: 'GraduationCap', color: 'from-purple-400 to-purple-600', accent: 'text-purple-400', keywords: ['training', 'event', 'education', 'workshop'] },
  { key: 'restaurant',       title: '6. Farm-to-Table',      description: 'On-site restaurant using fresh produce',            icon: 'ChefHat',       color: 'from-orange-400 to-red-500',    accent: 'text-orange-400', keywords: ['food', 'meal', 'restaurant', 'dining'] },
  { key: 'solar-energy',     title: '7. Solar & Efficiency', description: 'Renewable energy and greenhouse temp regulation',   icon: 'Sun',           color: 'from-yellow-300 to-orange-400', accent: 'text-yellow-300', keywords: ['solar', 'power', 'energy'] },
];
