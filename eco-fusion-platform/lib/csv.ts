/**
 * Writing CSV that is safe to open in a spreadsheet.
 *
 * Every cell is quoted, so a comma or a line break in a customer's name cannot
 * shift the columns. A cell that begins with = + - @ tab or carriage return is
 * read by Excel, Sheets and LibreOffice as a formula, so a customer named
 * `=HYPERLINK("http://evil", "Click")` would run in the spreadsheet of whoever
 * opened the export. Those cells are prefixed with a single quote, which the
 * spreadsheet shows as text.
 */

const FORMULA_START = /^[=+\-@\t\r]/;
const PLAIN_NUMBER = /^-\d+(\.\d+)?$/;

/** One cell, quoted, with embedded quotes doubled and formulas defused. */
export function csvCell(value: unknown): string {
  let text: string;
  if (value === null || value === undefined) text = '';
  else if (value instanceof Date) text = value.toISOString();
  else text = String(value);

  // A plain number such as -12.50 cannot be a formula, and is left readable.
  if (FORMULA_START.test(text) && !PLAIN_NUMBER.test(text)) text = `'${text}`;
  return `"${text.replace(/"/g, '""')}"`;
}

/** One row. */
export function csvRow(values: readonly unknown[]): string {
  return values.map(csvCell).join(',');
}
