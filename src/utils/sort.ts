import { SortType, SortDirection, SortPropDir } from '../types';
import { getterForProp } from './column-prop-getters';
/**
 * Gets the next sort direction
<<<<<<< HEAD
 * @param  {SortType}      sortType
 * @param  {SortDirection} currentSort
 * @return {SortDirection}
 */
export function nextSortDir(sortType: SortType, current: SortDirection): SortDirection {
=======
 */
export function nextSortDir(sortType: SortType, current: SortDirection): SortDirection | undefined {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  if (sortType === SortType.single) {
    if(current === SortDirection.asc) {
      return SortDirection.desc;
    } else {
      return SortDirection.asc;
    }
  } else {
    if(!current) {
      return SortDirection.asc;
    } else if(current === SortDirection.asc) {
      return SortDirection.desc;
    } else if(current === SortDirection.desc) {
      return undefined;
    }
<<<<<<< HEAD
=======
    // avoid TS7030: Not all code paths return a value.
    return undefined;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }
}

/**
 * Adapted from fueld-ui on 6/216
 * https://github.com/FuelInteractive/fuel-ui/tree/master/src/pipes/OrderBy
<<<<<<< HEAD
 * @param  {any}    a
 * @param  {any}    b
 * @return {number} position
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function orderByComparator(a: any, b: any): number {
  if (a === null || typeof a === 'undefined') a = 0;
  if (b === null || typeof b === 'undefined') b = 0;
  if (a instanceof Date && b instanceof Date) {
    if (a < b) return -1;
    if (a > b) return 1;
  } else if ((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))) {
    // Convert to string in case of a=0 or b=0
    a = String(a);
    b = String(b);
    // Isn't a number so lowercase the string to properly compare
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  } else {
    // Parse strings as numbers to compare properly
    if (parseFloat(a) < parseFloat(b)) return -1;
    if (parseFloat(a) > parseFloat(b)) return 1;
  }

  // equal each other
  return 0;
}

/**
 * Sorts the rows
<<<<<<< HEAD
 * 
 * @export
 * @param {any[]} rows
 * @param {any[]} columns
 * @param {any[]} dirs
 * @returns
 */
export function sortRows(rows: any[], columns: any[], dirs: SortPropDir[]): any[] {
  if(!rows || !dirs || !dirs.length || !columns) return rows;
=======
 */
export function sortRows(rows: any[], columns: any[], dirs: SortPropDir[]): any[] {
  if(!rows) return [];
  if(!dirs || !dirs.length || !columns) return [...rows];

  /**
   * create a mapping from each row to its row index prior to sorting
   */
  const rowToIndexMap = new Map<any, number>();
  rows.forEach((row, index) => rowToIndexMap.set(row, index));
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  const temp = [...rows];
  const cols = columns.reduce((obj, col) => {
    if(col.comparator && typeof col.comparator === 'function') {
      obj[col.prop] = col.comparator;
    }
    return obj;
  }, {});

  // cache valueGetter and compareFn so that they
  // do not need to be looked-up in the sort function body
  const cachedDirs = dirs.map(dir => {
    const prop = dir.prop;
    return {
      prop,
      dir: dir.dir,
      valueGetter: getterForProp(prop),
      compareFn: cols[prop] || orderByComparator
    };
  });

<<<<<<< HEAD
  return temp.sort(function(a: any, b: any) {

    for(const cachedDir of cachedDirs) {
      const { prop, valueGetter } = cachedDir;
      const propA = valueGetter(a, prop);
      const propB = valueGetter(b, prop);

      const comparison = cachedDir.dir !== SortDirection.desc ?
        cachedDir.compareFn(propA, propB) :
        -cachedDir.compareFn(propA, propB);
=======
  return temp.sort(function(rowA: any, rowB: any) {

    for(const cachedDir of cachedDirs) {
      // Get property and valuegetters for column to be sorted
      const { prop, valueGetter } = cachedDir;
      // Get A and B cell values from rows based on properties of the columns
      const propA = valueGetter(rowA, prop);
      const propB = valueGetter(rowB, prop);

      // Compare function gets five parameters:
      // Two cell values to be compared as propA and propB
      // Two rows corresponding to the cells as rowA and rowB
      // Direction of the sort for this column as SortDirection
      // Compare can be a standard JS comparison function (a,b) => -1|0|1
      // as additional parameters are silently ignored. The whole row and sort
      // direction enable more complex sort logic.
      const comparison = cachedDir.dir !== SortDirection.desc ?
        cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir) :
        -cachedDir.compareFn(propA, propB, rowA, rowB, cachedDir.dir);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

      // Don't return 0 yet in case of needing to sort by next property
      if (comparison !== 0) return comparison;
    }

<<<<<<< HEAD
    // equal each other
    return 0;
=======
    /**
     * all else being equal, preserve original order of the rows (stable sort)
     */
    return rowToIndexMap.get(rowA) < rowToIndexMap.get(rowB) ? -1 : 1;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  });
}
