import { EventEmitter, TemplateRef } from '@angular/core';
export declare class DatatableRowDetailDirective {
    /**
     * The detail row height is required especially
     * when virtual scroll is enabled.
<<<<<<< HEAD
     *
     * @type {number|function(row?:any,index?:number): number}
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    rowHeight: (number | ((row?: any, index?: number) => number));
    template: TemplateRef<any>;
    /**
     * Row detail row visbility was toggled.
<<<<<<< HEAD
     *
     * @type {EventEmitter<any>}
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    toggle: EventEmitter<any>;
    /**
     * Toggle the expansion of the row
<<<<<<< HEAD
     *
     * @param rowIndex
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    toggleExpandRow(row: any): void;
    /**
     * API method to expand all the rows.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    expandAllRows(): void;
    /**
     * API method to collapse all the rows.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    collapseAllRows(): void;
}
