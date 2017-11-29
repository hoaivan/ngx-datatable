<<<<<<< HEAD
import { EventEmitter } from '@angular/core';
export declare class DataTableRowWrapperComponent {
    rowDetail: any;
    detailRowHeight: any;
    expanded: boolean;
    row: any;
=======
import { EventEmitter, DoCheck, ChangeDetectorRef, KeyValueDiffers } from '@angular/core';
export declare class DataTableRowWrapperComponent implements DoCheck {
    private cd;
    private differs;
    innerWidth: number;
    rowDetail: any;
    groupHeader: any;
    offsetX: number;
    detailRowHeight: any;
    row: any;
    groupedRows: any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    rowContextmenu: EventEmitter<{
        event: MouseEvent;
        row: any;
    }>;
<<<<<<< HEAD
    onContextmenu($event: MouseEvent): void;
=======
    rowIndex: number;
    expanded: boolean;
    groupContext: any;
    rowContext: any;
    private rowDiffer;
    private _expanded;
    private _rowIndex;
    constructor(cd: ChangeDetectorRef, differs: KeyValueDiffers);
    ngDoCheck(): void;
    onContextmenu($event: MouseEvent): void;
    getGroupHeaderStyle(group: any): any;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
