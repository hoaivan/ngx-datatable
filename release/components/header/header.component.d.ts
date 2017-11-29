<<<<<<< HEAD
import { EventEmitter } from '@angular/core';
import { SortType, SelectionType } from '../../types';
import { DataTableColumnDirective } from '../columns';
export declare class DataTableHeaderComponent {
    sortAscendingIcon: any;
    sortDescendingIcon: any;
    scrollbarH: boolean;
    innerWidth: number;
    offsetX: number;
=======
import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SortType, SelectionType } from '../../types';
import { DataTableColumnDirective } from '../columns';
export declare class DataTableHeaderComponent {
    private cd;
    sortAscendingIcon: any;
    sortDescendingIcon: any;
    scrollbarH: boolean;
    dealsWithGroup: boolean;
    innerWidth: number;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    sorts: any[];
    sortType: SortType;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    reorderable: boolean;
    dragEventTarget: any;
    headerHeight: any;
    columns: any[];
<<<<<<< HEAD
=======
    offsetX: number;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    sort: EventEmitter<any>;
    reorder: EventEmitter<any>;
    resize: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
<<<<<<< HEAD
    columnsByPin: any;
    columnGroupWidths: any;
    _columns: any[];
    _headerHeight: string;
=======
    _columnsByPin: any;
    _columnGroupWidths: any;
    _innerWidth: number;
    _offsetX: number;
    _columns: any[];
    _headerHeight: string;
    _styleByGroup: {
        left: {};
        center: {};
        right: {};
    };
    constructor(cd: ChangeDetectorRef);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    onLongPressStart({event, model}: {
        event: any;
        model: any;
    }): void;
    onLongPressEnd({event, model}: {
        event: any;
        model: any;
    }): void;
    readonly headerWidth: string;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    onColumnResized(width: number, column: DataTableColumnDirective): void;
    onColumnReordered({prevIndex, newIndex, model}: any): void;
    onSort({column, prevValue, newValue}: any): void;
    calcNewSorts(column: any, prevValue: number, newValue: number): any[];
<<<<<<< HEAD
    stylesByGroup(group: string): any;
=======
    setStylesByGroup(): void;
    calcStylesByGroup(group: string): any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
