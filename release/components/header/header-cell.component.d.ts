<<<<<<< HEAD
import { EventEmitter } from '@angular/core';
import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
export declare class DataTableHeaderCellComponent {
    sortType: SortType;
    column: TableColumn;
    sortAscendingIcon: string;
    sortDescendingIcon: string;
    allRowsSelected: boolean;
    selectionType: SelectionType;
=======
import { EventEmitter, ChangeDetectorRef } from '@angular/core';
import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
export declare class DataTableHeaderCellComponent {
    private cd;
    sortType: SortType;
    sortAscendingIcon: string;
    sortDescendingIcon: string;
    _allRowsSelected: boolean;
    allRowsSelected: boolean;
    selectionType: SelectionType;
    column: TableColumn;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    headerHeight: number;
    sorts: any[];
    sort: EventEmitter<any>;
    select: EventEmitter<any>;
    columnContextmenu: EventEmitter<{
        event: MouseEvent;
        column: any;
    }>;
    readonly columnCssClasses: any;
    readonly name: string;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly width: number;
    readonly isCheckboxable: boolean;
    sortFn: any;
    sortClass: string;
    sortDir: SortDirection;
<<<<<<< HEAD
    _sorts: any[];
    selectFn: any;
=======
    selectFn: any;
    cellContext: any;
    private _column;
    private _sorts;
    constructor(cd: ChangeDetectorRef);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    onContextmenu($event: MouseEvent): void;
    calcSortDir(sorts: any[]): any;
    onSort(): void;
    calcSortClass(sortDir: SortDirection): string;
}
