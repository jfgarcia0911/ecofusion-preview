/**
 * Unit conversion for display and input.
 *
 * The database always stores canonical units - temperatures in Celsius and
 * weights in grams - regardless of what the user has chosen to see. Conversion
 * happens only at the edges: `toDisplay` when rendering a stored value, and
 * `toCanonical` when accepting one from a form. Nothing else in the app should
 * convert, so a value can never be stored in the wrong scale.
 */

export type TemperatureUnit = 'C' | 'F'
export type WeightUnit = 'metric' | 'imperial'

export interface UnitPreferences {
  temperature: TemperatureUnit
  weight: WeightUnit
}

export const DEFAULT_UNITS: UnitPreferences = {
  temperature: 'C',
  weight: 'metric',
}

/* -------------------------------------------------------------- temperature */

export const cToF = (c: number) => c * 9 / 5 + 32
export const fToC = (f: number) => (f - 32) * 5 / 9

/** Stored Celsius -> the unit the user picked. */
export function temperatureToDisplay(celsius: number, unit: TemperatureUnit) {
  return unit === 'F' ? cToF(celsius) : celsius
}

/** A value typed in the user's unit -> Celsius for storage. */
export function temperatureToCanonical(value: number, unit: TemperatureUnit) {
  return unit === 'F' ? fToC(value) : value
}

export const temperatureLabel = (unit: TemperatureUnit) => (unit === 'F' ? '°F' : '°C')

/* ------------------------------------------------------------------- weight */

export const gToOz = (g: number) => g / 28.349523125
export const ozToG = (oz: number) => oz * 28.349523125

/**
 * Stored grams -> a display value plus its label. Scales up to kg/lb once the
 * number gets large, so a harvest does not read as "45000 g".
 */
export function weightToDisplay(grams: number, unit: WeightUnit): { value: number; label: string } {
  if (unit === 'imperial') {
    const oz = gToOz(grams)
    return oz >= 16 ? { value: oz / 16, label: 'lb' } : { value: oz, label: 'oz' }
  }
  return grams >= 1000 ? { value: grams / 1000, label: 'kg' } : { value: grams, label: 'g' }
}

/** A weight typed in the user's base unit (g or oz) -> grams for storage. */
export function weightToCanonical(value: number, unit: WeightUnit) {
  return unit === 'imperial' ? ozToG(value) : value
}

/** The base unit a form should ask for, matching `weightToCanonical`. */
export const weightInputLabel = (unit: WeightUnit) => (unit === 'imperial' ? 'oz' : 'g')

/* ----------------------------------------------------------------- rounding */

/**
 * Floats carry binary drift (7.300000000000001), and conversion adds more.
 * Round at the point of display.
 */
export const round = (value: number, decimals = 1) => value.toFixed(decimals)
