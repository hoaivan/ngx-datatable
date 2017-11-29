<<<<<<< HEAD
import { EventEmitter, ElementRef, ViewContainerRef, OnDestroy } from '@angular/core';
import { SortDirection } from '../../types';
import { TableColumn } from '../../types/table-column.type';
export declare class DataTableBodyCellComponent implements OnDestroy {
    row: any;
    column: TableColumn;
    rowHeight: number;
    isSelected: boolean;
=======
import { ChangeDetectorRef, EventEmitter, ElementRef, ViewContainerRef, OnDestroy, DoCheck } from '@angular/core';
import { SortDirection } from '../../types';
import { TableColumn } from '../../types/table-column.type';
export declare class DataTableBodyCellComponent implements DoCheck, OnDestroy {
    private cd;
    displayCheck: any;
    group: any;
    rowHeight: number;
    isSelected: boolean;
    expanded: boolean;
    rowIndex: number;
    column: TableColumn;
    row: any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    sorts: any[];
    activate: EventEmitter<any>;
    cellTemplate: ViewContainerRef;
    readonly columnCssClasses: any;
    readonly width: number;
    readonly height: string | number;
<<<<<<< HEAD
    readonly value: any;
    sortDir: SortDirection;
    element: any;
    _sorts: any[];
    isFocused: boolean;
    onCheckboxChangeFn: any;
    activateFn: any;
    constructor(element: ElementRef);
    ngOnDestroy(): void;
=======
    sanitizedValue: any;
    value: any;
    sortDir: SortDirection;
    isFocused: boolean;
    onCheckboxChangeFn: any;
    activateFn: any;
    cellContext: any;
    private _isSelected;
    private _sorts;
    private _column;
    private _row;
    private _group;
    private _rowHeight;
    private _rowIndex;
    private _expanded;
    private _element;
    constructor(element: ElementRef, cd: ChangeDetectorRef);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    checkValueUpdates(): void;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    onFocus(): void;
    onBlur(): void;
    onClick(event: MouseEvent): void;
    onDblClick(event: MouseEvent): void;
    onKeyDown(event: KeyboardEvent): void;
    onCheckboxChange(event: any): void;
    calcSortDir(sorts: any[]): any;
<<<<<<< HEAD
=======
    stripHtml(html: string): string;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
