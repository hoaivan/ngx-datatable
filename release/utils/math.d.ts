/**
 * Calculates the Total Flex Grow
<<<<<<< HEAD
 * @param {array}
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function getTotalFlexGrow(columns: any[]): number;
/**
 * Adjusts the column widths.
 * Inspired by: https://github.com/facebook/fixed-data-table/blob/master/src/FixedDataTableWidthHelper.js
<<<<<<< HEAD
 * @param {array} all columns
 * @param {int} width
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function adjustColumnWidths(allColumns: any, expectedWidth: any): void;
/**
 * Forces the width of the columns to
 * distribute equally but overflowing when necessary
 *
 * Rules:
 *
 *  - If combined withs are less than the total width of the grid,
 *    proportion the widths given the min / max / normal widths to fill the width.
 *
 *  - If the combined widths, exceed the total width of the grid,
 *    use the standard widths.
 *
 *  - If a column is resized, it should always use that width
 *
 *  - The proportional widths should never fall below min size if specified.
 *
 *  - If the grid starts off small but then becomes greater than the size ( + / - )
 *    the width should use the original width; not the newly proportioned widths.
<<<<<<< HEAD
 *
 * @param {array} allColumns
 * @param {int} expectedWidth
 * @param {int} startIdx
 * @param {boolean} allowBleed
 * @param {int} defaultColWidth
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function forceFillColumnWidths(allColumns: any[], expectedWidth: number, startIdx: number, allowBleed: boolean, defaultColWidth?: number): void;
