<<<<<<< HEAD
import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
=======
import { EventEmitter, ChangeDetectorRef, OnInit, OnDestroy } from '@angular/core';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
import { RowHeightCache } from '../../utils';
import { SelectionType } from '../../types';
import { ScrollerComponent } from './scroller.component';
export declare class DataTableBodyComponent implements OnInit, OnDestroy {
<<<<<<< HEAD
=======
    private cd;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    scrollbarV: boolean;
    scrollbarH: boolean;
    loadingIndicator: boolean;
    externalPaging: boolean;
    rowHeight: number;
    offsetX: number;
    emptyMessage: string;
    selectionType: SelectionType;
    selected: any[];
    rowIdentity: any;
    rowDetail: any;
<<<<<<< HEAD
    selectCheck: any;
    trackByProp: string;
    rowClass: any;
=======
    groupHeader: any;
    selectCheck: any;
    displayCheck: any;
    trackByProp: string;
    rowClass: any;
    groupedRows: any;
    groupExpansionDefault: boolean;
    innerWidth: number;
    groupRowsBy: string;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    pageSize: number;
    rows: any[];
    columns: any[];
    offset: number;
    rowCount: number;
<<<<<<< HEAD
    innerWidth: number;
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    readonly bodyWidth: string;
    bodyHeight: any;
    scroll: EventEmitter<any>;
    page: EventEmitter<any>;
    activate: EventEmitter<any>;
    select: EventEmitter<any>;
    detailToggle: EventEmitter<any>;
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
    scroller: ScrollerComponent;
    /**
     * Returns if selection is enabled.
<<<<<<< HEAD
     *
     * @readonly
     * @type {boolean}
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    readonly selectEnabled: boolean;
    /**
     * Property that would calculate the height of scroll bar
     * based on the row heights cache for virtual scroll. Other scenarios
     * calculate scroll height automatically (as height will be undefined).
<<<<<<< HEAD
     *
     * @readonly
     * @type {number}
     * @memberOf DataTableBodyComponent
     */
    readonly scrollHeight: number;
=======
     */
    readonly scrollHeight: number | undefined;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    rowHeightsCache: RowHeightCache;
    temp: any[];
    offsetY: number;
    indexes: any;
    columnGroupWidths: any;
<<<<<<< HEAD
    rowTrackingFn: any;
    listener: any;
=======
    columnGroupWidthsWithoutGroup: any;
    rowTrackingFn: any;
    listener: any;
    rowIndexes: any;
    rowExpansions: any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    _rows: any[];
    _bodyHeight: any;
    _columns: any[];
    _rowCount: number;
    _offset: number;
    _pageSize: number;
    /**
     * Creates an instance of DataTableBodyComponent.
<<<<<<< HEAD
     *
     * @memberOf DataTableBodyComponent
     */
    constructor();
    /**
     * Called after the constructor, initializing input properties
     *
     * @memberOf DataTableBodyComponent
=======
     */
    constructor(cd: ChangeDetectorRef);
    /**
     * Called after the constructor, initializing input properties
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    ngOnInit(): void;
    /**
     * Called once, before the instance is destroyed.
<<<<<<< HEAD
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    ngOnDestroy(): void;
    /**
     * Updates the Y offset given a new offset.
<<<<<<< HEAD
     *
     * @param {number} [offset]
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    updateOffsetY(offset?: number): void;
    /**
     * Body was scrolled, this is mainly useful for
     * when a user is server-side pagination via virtual scroll.
<<<<<<< HEAD
     *
     * @param {*} event
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    onBodyScroll(event: any): void;
    /**
     * Updates the page given a direction.
<<<<<<< HEAD
     *
     * @param {string} direction
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    updatePage(direction: string): void;
    /**
     * Updates the rows in the view port
<<<<<<< HEAD
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    updateRows(): void;
    /**
     * Get the row height
<<<<<<< HEAD
     *
     * @param {*} row
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
     */
    getRowHeight(row: any): number;
    /**
     * Calculate row height based on the expanded state of the row.
     *
     * @param {*} row the row for which the height need to be calculated.
     * @returns {number} height of the row.
     *
     * @memberOf DataTableBodyComponent
=======
     */
    getRowHeight(row: any): number;
    /**
     * @param group the group with all rows
     */
    getGroupHeight(group: any): number;
    /**
     * Calculate row height based on the expanded state of the row.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    getRowAndDetailHeight(row: any): number;
    /**
     * Get the height of the detail row.
<<<<<<< HEAD
     *
     * @param {*} [row]
     * @param {*} [index]
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    getDetailRowHeight: (row?: any, index?: any) => number;
    /**
     * Calculates the styles for the row so that the rows can be moved in 2D space
     * during virtual scroll inside the DOM.   In the below case the Y position is
     * manipulated.   As an example, if the height of row 0 is 30 px and row 1 is
     * 100 px then following styles are generated:
     *
     * transform: translate3d(0px, 0px, 0px);    ->  row0
     * transform: translate3d(0px, 30px, 0px);   ->  row1
     * transform: translate3d(0px, 130px, 0px);  ->  row2
     *
     * Row heights have to be calculated based on the row heights cache as we wont
     * be able to determine which row is of what height before hand.  In the above
     * case the positionY of the translate3d for row2 would be the sum of all the
     * heights of the rows before it (i.e. row0 and row1).
     *
<<<<<<< HEAD
     * @param {*} row The row that needs to be placed in the 2D space.
=======
     * @param {*} rows The row that needs to be placed in the 2D space.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     * @returns {*} Returns the CSS3 style to be applied
     *
     * @memberOf DataTableBodyComponent
     */
<<<<<<< HEAD
    getRowsStyles(row: any): any;
    /**
     * Hides the loading indicator
     *
     *
     * @memberOf DataTableBodyComponent
=======
    getRowsStyles(rows: any): any;
    /**
     * Hides the loading indicator
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    hideIndicator(): void;
    /**
     * Updates the index of the rows in the viewport
<<<<<<< HEAD
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    updateIndexes(): void;
    /**
     * Refreshes the full Row Height cache.  Should be used
     * when the entire row array state has changed.
<<<<<<< HEAD
     *
     * @returns {void}
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    refreshRowHeightCache(): void;
    /**
     * Gets the index for the view port
<<<<<<< HEAD
     *
     * @returns {number}
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    getAdjustedViewPortIndex(): number;
    /**
     * Toggle the Expansion of the row i.e. if the row is expanded then it will
     * collapse and vice versa.   Note that the expanded status is stored as
     * a part of the row object itself as we have to preserve the expanded row
     * status in case of sorting and filtering of the row set.
<<<<<<< HEAD
     *
     * @param {*} row The row for which the expansion needs to be toggled.
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    toggleRowExpansion(row: any): void;
    /**
     * Expand/Collapse all the rows no matter what their state is.
<<<<<<< HEAD
     *
     * @param {boolean} expanded When true, all rows are expanded and when false, all rows will be collapsed.
     *
     * @memberOf DataTableBodyComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    toggleAllRows(expanded: boolean): void;
    /**
     * Recalculates the table
<<<<<<< HEAD
     *
     * @memberOf DataTableBodyComponent
     */
    recalcLayout(): void;
=======
     */
    recalcLayout(): void;
    /**
     * Tracks the column
     */
    columnTrackingFn(index: number, column: any): any;
    /**
     * Gets the row pinning group styles
     */
    stylesByGroup(group: string): {
        width: string;
    };
    /**
     * Returns if the row was expanded and set default row expansion when row expansion is empty
     */
    getRowExpanded(row: any): boolean;
    /**
     * Gets the row index given a row
     */
    getRowIndex(row: any): number;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
