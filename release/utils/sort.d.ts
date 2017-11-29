import { SortType, SortDirection, SortPropDir } from '../types';
/**
 * Gets the next sort direction
<<<<<<< HEAD
 * @param  {SortType}      sortType
 * @param  {SortDirection} currentSort
 * @return {SortDirection}
 */
export declare function nextSortDir(sortType: SortType, current: SortDirection): SortDirection;
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
 * @param  {any}    a
 * @param  {any}    b
 * @return {number} position
=======
 */
export declare function nextSortDir(sortType: SortType, current: SortDirection): SortDirection | undefined;
/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function orderByComparator(a: any, b: any): number;
/**
 * Sorts the rows
<<<<<<< HEAD
 *
 * @export
 * @param {any[]} rows
 * @param {any[]} columns
 * @param {any[]} dirs
 * @returns
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function sortRows(rows: any[], columns: any[], dirs: SortPropDir[]): any[];
