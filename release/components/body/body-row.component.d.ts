<<<<<<< HEAD
import { ElementRef, EventEmitter } from '@angular/core';
import { ScrollbarHelper } from '../../services';
export declare class DataTableBodyRowComponent {
    private scrollbarHelper;
    columns: any[];
    innerWidth: number;
    rowClass: any;
    row: any;
    offsetX: number;
    isSelected: boolean;
=======
import { ElementRef, KeyValueDiffers, EventEmitter, ChangeDetectorRef, DoCheck } from '@angular/core';
import { ScrollbarHelper } from '../../services';
export declare class DataTableBodyRowComponent implements DoCheck {
    private differs;
    private scrollbarHelper;
    private cd;
    columns: any[];
    innerWidth: number;
    expanded: boolean;
    rowClass: any;
    row: any;
    group: any;
    isSelected: boolean;
    rowIndex: number;
    displayCheck: any;
    offsetX: number;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    readonly cssClass: string;
    rowHeight: number;
    readonly columnsTotalWidths: string;
    activate: EventEmitter<any>;
<<<<<<< HEAD
    element: any;
    columnGroupWidths: any;
    columnsByPin: any;
    _columns: any[];
    _innerWidth: number;
    constructor(scrollbarHelper: ScrollbarHelper, element: ElementRef);
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    stylesByGroup(group: string): {
=======
    _element: any;
    _columnGroupWidths: any;
    _columnsByPin: any;
    _offsetX: number;
    _columns: any[];
    _innerWidth: number;
    _groupStyles: {
        left: {};
        center: {};
        right: {};
    };
    private _rowDiffer;
    constructor(differs: KeyValueDiffers, scrollbarHelper: ScrollbarHelper, cd: ChangeDetectorRef, element: ElementRef);
    ngDoCheck(): void;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
    buildStylesByGroup(): void;
    calcStylesByGroup(group: string): {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        width: string;
    };
    onActivate(event: any, index: number): void;
    onKeyDown(event: KeyboardEvent): void;
<<<<<<< HEAD
=======
    onMouseenter(event: any): void;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    recalculateColumns(val?: any[]): void;
}
