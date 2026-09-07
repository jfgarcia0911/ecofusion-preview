/**
 * Shared phase/product matching.
 *
 * Sales are not tagged with a phase, so a sale item counts toward a business
 * unit when its product name mentions one of that unit's keywords. The
 * Business Units overview and the per-phase revenue API both read from here so
 * the totals on the two screens cannot drift apart.
 */

// Map phase IDs to product types for revenue calculation
export const PHASE_PRODUCT_MAPPING: Record<string, string[]> = {
  'aquaculture': ['fish', 'tilapia', 'catfish', 'seafood'],
  'plant-production': ['plants', 'vegetables', 'herbs', 'lettuce', 'greens', 'produce'],
  'methane-gas': ['energy', 'gas', 'methane'],
  'fertilizer': ['fertilizer', 'compost', 'organic'],
  'training-center': ['training', 'event', 'education', 'workshop'],
  'restaurant': ['food', 'meal', 'restaurant', 'dining'],
  'solar-energy': ['solar', 'energy', 'power'],
};

export interface PhaseRevenueItem {
  productName: string;
  total: number;
}

/** A phase with no keyword mapping matches everything, as it always has. */
export function matchesPhase(productName: string, phaseId: string): boolean {
  const productTypes = PHASE_PRODUCT_MAPPING[phaseId] || [];
  if (productTypes.length === 0) return true;

  const nameLower = productName.toLowerCase();
  return productTypes.some((type) => nameLower.includes(type));
}

/** Sum the items belonging to a phase, rounded to cents. */
export function sumPhaseRevenue(items: PhaseRevenueItem[], phaseId: string): number {
  const total = items.reduce(
    (sum, item) => (matchesPhase(item.productName, phaseId) ? sum + item.total : sum),
    0
  );
  return Math.round(total * 100) / 100;
}

/** First and last instant of the month containing `now`. */
export function monthRange(now: Date = new Date()) {
  return {
    startOfMonth: new Date(now.getFullYear(), now.getMonth(), 1),
    endOfMonth: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59),
  };
}
