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
