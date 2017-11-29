import { Input, Output, EventEmitter, Directive, TemplateRef, ContentChild } from '@angular/core';
import { DatatableRowDetailTemplateDirective } from './row-detail-template.directive';

@Directive({ selector: 'ngx-datatable-row-detail' })
export class DatatableRowDetailDirective {

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
  @Input() rowHeight: (number | ((row?: any, index?: number) => number)) = 0;

  @Input()
  @ContentChild(DatatableRowDetailTemplateDirective, { read: TemplateRef }) 
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
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  /**
   * Toggle the expansion of the row
<<<<<<< HEAD
   *
   * @param rowIndex
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  toggleExpandRow(row: any): void {
    this.toggle.emit({
      type: 'row',
      value: row
    });
  }

  /**
   * API method to expand all the rows.
<<<<<<< HEAD
   * 
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  expandAllRows(): void {
    this.toggle.emit({
      type: 'all',
      value: true
    });
  }

  /**
   * API method to collapse all the rows.
<<<<<<< HEAD
   * 
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  collapseAllRows(): void {
    this.toggle.emit({
      type: 'all',
      value: false
    });
  }

}
