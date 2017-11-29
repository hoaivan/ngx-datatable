/**
 * Returns the columns by pin.
<<<<<<< HEAD
 * @param {array} cols
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function columnsByPin(cols: any[]): {
    left: any;
    center: any;
    right: any;
};
/**
 * Returns the widths of all group sets of a column
<<<<<<< HEAD
 * @param {object} groups
 * @param {array} all
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function columnGroupWidths(groups: any, all: any): {
    left: number;
    center: number;
    right: number;
    total: number;
};
/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} prop width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function columnTotalWidth(columns: any[], prop?: string): number;
/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} property width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function columnsTotalWidth(columns: any, prop?: any): number;
export declare function columnsByPinArr(val: any): {
    type: string;
    columns: any;
}[];
<<<<<<< HEAD
=======
export declare function allColumnsByPinArr(val: any): {
    type: string;
    columns: any;
}[];
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
