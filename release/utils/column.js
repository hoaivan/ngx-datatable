"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the columns by pin.
<<<<<<< HEAD
 * @param {array} cols
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
function columnsByPin(cols) {
    var ret = {
        left: [],
        center: [],
        right: []
    };
    if (cols) {
        for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
            var col = cols_1[_i];
            if (col.frozenLeft) {
                ret.left.push(col);
            }
            else if (col.frozenRight) {
                ret.right.push(col);
            }
            else {
                ret.center.push(col);
            }
        }
    }
    return ret;
}
exports.columnsByPin = columnsByPin;
/**
 * Returns the widths of all group sets of a column
<<<<<<< HEAD
 * @param {object} groups
 * @param {array} all
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
function columnGroupWidths(groups, all) {
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
exports.columnGroupWidths = columnGroupWidths;
/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} prop width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
function columnTotalWidth(columns, prop) {
    var totalWidth = 0;
    if (columns) {
        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
            var c = columns_1[_i];
            var has = prop && c[prop];
            var width = has ? c[prop] : c.width;
            totalWidth = totalWidth + parseFloat(width);
        }
    }
    return totalWidth;
}
exports.columnTotalWidth = columnTotalWidth;
/**
 * Calculates the total width of all columns and their groups
<<<<<<< HEAD
 * @param {array} columns
 * @param {string} property width to get
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
function columnsTotalWidth(columns, prop) {
    var totalWidth = 0;
    for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
        var column = columns_2[_i];
        var has = prop && column[prop];
        totalWidth = totalWidth + (has ? column[prop] : column.width);
    }
    return totalWidth;
}
exports.columnsTotalWidth = columnsTotalWidth;
function columnsByPinArr(val) {
    var colsByPinArr = [];
    var colsByPin = columnsByPin(val);
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
exports.columnsByPinArr = columnsByPinArr;
<<<<<<< HEAD
=======
function allColumnsByPinArr(val) {
    var colsByPinArr = [];
    var colsByPin = columnsByPin(val);
    var colsTest = [];
    colsByPinArr.push({ type: 'left', columns: colsByPin['left'] });
    colsByPinArr.push({ type: 'center', columns: colsByPin['center'] });
    colsByPinArr.push({ type: 'right', columns: colsByPin['right'] });
    return colsByPinArr;
}
exports.allColumnsByPinArr = allColumnsByPinArr;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
//# sourceMappingURL=column.js.map