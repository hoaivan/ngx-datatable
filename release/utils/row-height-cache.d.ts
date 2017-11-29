/**
 * This object contains the cache of the various row heights that are present inside
 * the data table.   Its based on Fenwick tree data structure that helps with
 * querying sums that have time complexity of log n.
 *
 * Fenwick Tree Credits: http://petr-mitrichev.blogspot.com/2013/05/fenwick-tree-range-updates.html
 * https://github.com/mikolalysenko/fenwick-tree
 *
 */
export declare class RowHeightCache {
    /**
     * Tree Array stores the cumulative information of the row heights to perform efficient
     * range queries and updates.  Currently the tree is initialized to the base row
     * height instead of the detail row height.
     */
    private treeArray;
    /**
     * Clear the Tree array.
     */
    clearCache(): void;
    /**
     * Initialize the Fenwick tree with row Heights.
     *
     * @param rows The array of rows which contain the expanded status.
     * @param rowHeight The row height.
     * @param detailRowHeight The detail row height.
     */
    initCache(details: any): void;
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.  Below handles edge cases.
<<<<<<< HEAD
     *
     * @param scrollY - The scrollY position.
     * @returns {number} - Index representing the first row visible in the viewport
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    getRowIndex(scrollY: number): number;
    /**
     * When a row is expanded or rowHeight is changed, update the height.  This can
     * be utilized in future when Angular Data table supports dynamic row heights.
<<<<<<< HEAD
     *
     *
     * @param atRowIndex Update the data at this index row in the grid.
     * @param byRowHeight Update by the rowHeight provided.
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    update(atRowIndex: number, byRowHeight: number): void;
    /**
     * Range Sum query from 1 to the rowIndex
<<<<<<< HEAD
     *
     * @param atIndex The row index until which the total height needs to be obtained.
     * @returns {number} The total height from row 1 to the rowIndex.
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    query(atIndex: number): number;
    /**
     * Find the total height between 2 row indexes
<<<<<<< HEAD
     * @param atIndexA The row index from
     * @param atIndexB The row index to
     * @returns {number} total pixel height between 2 row indexes.
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    queryBetween(atIndexA: number, atIndexB: number): number;
    /**
     * Given the ScrollY position i.e. sum, provide the rowIndex
     * that is present in the current view port.
<<<<<<< HEAD
     *
     * @param sum - The scrollY position.
     * @returns {number} - Index representing the first row visible in the viewport
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    private calcRowIndex(sum);
}
