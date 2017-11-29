/**
 * Returns the columns by pin.
<<<<<<< HEAD
 * @param {array} cols
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function columnsByPin(cols: any[]) {
  const ret: {left: any, center: any, right: any} = {
    left: [],
    center: [],
    right: []
  };

  if(cols) {
    for(const col of cols) {
      if(col.frozenLeft) {
        ret.left.push(col);
      } else if(col.frozenRight) {
        ret.right.push(col);
      } else {
        ret.center.push(col);
      }
    }
  }

  return ret;
}

/**
 * Returns the widths of all group sets of a column
<<<<<<< HEAD
 * @param {object} groups
 * @param {array} all
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function columnGroupWidths(groups: any, all: any) {
  return {
    left: columnTotalWidth(groups.left),
    center: columnTotalWidth(groups.center),
    right: columnTotalWidth(groups.right),
<<<<<<< HEAD
    total: columnTotalWidth(all)
=======
    total: Math.floor(columnTotalWidth(all))
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  };
}

/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} prop width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function columnTotalWidth(columns: any[], prop?: string) {
  let totalWidth = 0;

  if(columns) {
    for(const c of columns) {
      const has = prop && c[prop];
      const width = has ? c[prop] : c.width;
      totalWidth = totalWidth + parseFloat(width);
    }
  }

  return totalWidth;
}

/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} property width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function columnsTotalWidth(columns: any, prop?: any) {
  let totalWidth = 0;

  for(const column of columns) {
    const has = prop && column[prop];
    totalWidth = totalWidth + (has ? column[prop] : column.width);
  }

  return totalWidth;
}

export function columnsByPinArr(val: any) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);

  colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
  colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
  colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });

  return colsByPinArr;
}
<<<<<<< HEAD
=======

export function allColumnsByPinArr(val: any) {
  const colsByPinArr = [];
  const colsByPin = columnsByPin(val);
  const colsTest = [];

  colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
  colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
  colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });

  return colsByPinArr;
}
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
