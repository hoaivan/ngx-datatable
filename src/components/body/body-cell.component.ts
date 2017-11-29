import {
<<<<<<< HEAD
  Component, Input, PipeTransform, HostBinding, ViewChild,
  Output, EventEmitter, HostListener, ElementRef, ViewContainerRef, OnDestroy
=======
  Component, Input, PipeTransform, HostBinding, ViewChild, ChangeDetectorRef,
  Output, EventEmitter, HostListener, ElementRef, ViewContainerRef, OnDestroy, DoCheck,
  ChangeDetectionStrategy
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';

import { Keys } from '../../utils';
import { SortDirection } from '../../types';
import { TableColumn } from '../../types/table-column.type';
import { MouseEvent, KeyboardEvent } from '../../events';

@Component({
  selector: 'datatable-body-cell',
<<<<<<< HEAD
  template: `
    <div class="datatable-body-cell-label">
      <label
        *ngIf="column.checkboxable" 
        class="datatable-checkbox">
        <input 
          type="checkbox"
          [checked]="isSelected"
          (click)="onCheckboxChange($event)" 
=======
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="datatable-body-cell-label">
      <label
        *ngIf="column.checkboxable && (!displayCheck || displayCheck(row, column, value))"
        class="datatable-checkbox">
        <input
          type="checkbox"
          [checked]="isSelected"
          (click)="onCheckboxChange($event)"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        />
      </label>
      <span
        *ngIf="!column.cellTemplate"
<<<<<<< HEAD
        [title]="value"
=======
        [title]="sanitizedValue"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        [innerHTML]="value">
      </span>
      <ng-template #cellTemplate
        *ngIf="column.cellTemplate"
        [ngTemplateOutlet]="column.cellTemplate"
<<<<<<< HEAD
        [ngOutletContext]="{
          value: value,
          row: row,
          column: column,
          isSelected: isSelected,
          onCheckboxChangeFn: onCheckboxChangeFn,
          activateFn: activateFn
        }">
      </ng-template>
    </div>
  `,
  host: {
    class: 'datatable-body-cell'
  }
})
export class DataTableBodyCellComponent implements OnDestroy {

  @Input() row: any;
  @Input() column: TableColumn;
  @Input() rowHeight: number;
  @Input() isSelected: boolean;
=======
        [ngTemplateOutletContext]="cellContext">
      </ng-template>
    </div>
  `
})
export class DataTableBodyCellComponent implements DoCheck, OnDestroy {
  @Input() displayCheck: any;

  @Input() set group(group: any) {
    this._group = group;
    this.cellContext.group = group;
    this.checkValueUpdates();
    this.cd.markForCheck();    
  }

  get group() {
    return this._group;
  }

  @Input() set rowHeight(val: number) {
    this._rowHeight = val;
    this.cellContext.rowHeight = val;
    this.checkValueUpdates();
    this.cd.markForCheck();        
  }

  get rowHeight() {
    return this._rowHeight;
  }

  @Input() set isSelected(val: boolean) {
    this._isSelected = val;
    this.cellContext.isSelected = val;
    this.cd.markForCheck();
  }

  get isSelected(): boolean {
    return this._isSelected;
  }
  
  @Input() set expanded(val: boolean) {
    this._expanded = val;
    this.cellContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded(): boolean {
    return this._expanded;
  }

  @Input() set rowIndex(val: number) {
    this._rowIndex = val;
    this.cellContext.rowIndex = val;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  @Input() set column(column: TableColumn) {
    this._column = column;
    this.cellContext.column = column;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get column(): TableColumn {
    return this._column;
  }

  @Input() set row(row: any) {
    this._row = row;
    this.cellContext.row = row;
    this.checkValueUpdates();
    this.cd.markForCheck();
  }

  get row(): any {
    return this._row;
  }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  @Input() set sorts(val: any[]) {
    this._sorts = val;
    this.calcSortDir = this.calcSortDir(val);
  }

  get sorts(): any[] {
    return this._sorts;
  }

  @Output() activate: EventEmitter<any> = new EventEmitter();

  @ViewChild('cellTemplate', { read: ViewContainerRef }) cellTemplate: ViewContainerRef;
<<<<<<< HEAD
   
  @HostBinding('class')
  get columnCssClasses(): any {
    let cls = 'datatable-body-cell';
    if(this.column.cellClass) {
      if(typeof this.column.cellClass === 'string') {
=======

  @HostBinding('class')
  get columnCssClasses(): any {    
    let cls = 'datatable-body-cell';
    if (this.column.cellClass) {
      if (typeof this.column.cellClass === 'string') {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        cls += ' ' + this.column.cellClass;
      } else if(typeof this.column.cellClass === 'function') {
        const res = this.column.cellClass({ 
          row: this.row, 
<<<<<<< HEAD
          column: this.column, 
          value: this.value 
        });

        if(typeof res === 'string') {
          cls += res;
        } else if(typeof res === 'object') {
          const keys = Object.keys(res);
          for(const k of keys) {
            if(res[k] === true) cls += ` ${k}`;
=======
          group: this.group, 
          column: this.column, 
          value: this.value ,
          rowHeight: this.rowHeight
        });

        if (typeof res === 'string') {
          cls += res;
        } else if (typeof res === 'object') {
          const keys = Object.keys(res);
          for (const k of keys) {
            if (res[k] === true) cls += ` ${k}`;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
          }
        }
      }
    }
<<<<<<< HEAD
    if(!this.sortDir) cls += ' sort-active';
    if(this.isFocused) cls += ' active';
    if(this.sortDir === SortDirection.asc) cls += ' sort-asc';
    if(this.sortDir === SortDirection.desc) cls += ' sort-desc';
=======
    if (!this.sortDir) cls += ' sort-active';
    if (this.isFocused) cls += ' active';
    if (this.sortDir === SortDirection.asc) cls += ' sort-asc';
    if (this.sortDir === SortDirection.desc) cls += ' sort-desc';

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return cls;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return this.column.width;
  }

  @HostBinding('style.height')
<<<<<<< HEAD
  get height(): string|number {
    const height = this.rowHeight;
    if(isNaN(height)) return height;
    return height + 'px';
  }

  get value(): any {
    if (!this.row || !this.column) return '';
    const val = this.column.$$valueGetter(this.row, this.column.prop);
    const userPipe: PipeTransform = this.column.pipe;

    if(userPipe) return userPipe.transform(val);
    if(val !== undefined) return val;
    return '';
  }

  sortDir: SortDirection;
  element: any;
  _sorts: any[];
=======
  get height(): string | number {
    const height = this.rowHeight;
    if (isNaN(height)) return height;
    return height + 'px';
  }

  sanitizedValue: any;
  value: any;
  sortDir: SortDirection;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  isFocused: boolean = false;
  onCheckboxChangeFn = this.onCheckboxChange.bind(this);
  activateFn = this.activate.emit.bind(this.activate);

<<<<<<< HEAD
  constructor(element: ElementRef) {
    this.element = element.nativeElement;
=======
  cellContext: any = {
    onCheckboxChangeFn: this.onCheckboxChangeFn,
    activateFn: this.activateFn,
    row: this.row,
    group: this.group,
    value: this.value,
    column: this.column,
    rowHeight: this.rowHeight,
    isSelected: this.isSelected,
    rowIndex: this.rowIndex
  };

  private _isSelected: boolean;
  private _sorts: any[];
  private _column: TableColumn;
  private _row: any;
  private _group: any;
  private _rowHeight: number;
  private _rowIndex: number;
  private _expanded: boolean;
  private _element: any;

  constructor(element: ElementRef, private cd: ChangeDetectorRef) {
    this._element = element.nativeElement;
  }
  
  ngDoCheck(): void {
    this.checkValueUpdates();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  ngOnDestroy(): void {
    if (this.cellTemplate) {
      this.cellTemplate.clear();
    }
  }

<<<<<<< HEAD
=======
  checkValueUpdates(): void {
    let value = '';

    if (!this.row || !this.column) {
      value = '';
    } else {
      const val = this.column.$$valueGetter(this.row, this.column.prop);
      const userPipe: PipeTransform = this.column.pipe;

      if (userPipe) {
        value = userPipe.transform(val);
      } else if (value !== undefined) {
        value = val;
      }
    }

    if(this.value !== value) {
      this.value = value;
      this.cellContext.value = value;
      this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
      this.cd.markForCheck();
    }
  }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @HostListener('focus')
  onFocus(): void {
    this.isFocused = true;
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused = false;
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    this.activate.emit({
      type: 'click',
      event,
      row: this.row,
<<<<<<< HEAD
      column: this.column,
      value: this.value,
      cellElement: this.element
=======
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    });
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event: MouseEvent): void {
    this.activate.emit({
      type: 'dblclick',
      event,
      row: this.row,
<<<<<<< HEAD
      column: this.column,
      value: this.value,
      cellElement: this.element
=======
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,      
      cellElement: this._element
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    });
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
<<<<<<< HEAD
    const isTargetCell = event.target === this.element;
=======
    const isTargetCell = event.target === this._element;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const isAction =
      keyCode === Keys.return ||
      keyCode === Keys.down ||
      keyCode === Keys.up ||
      keyCode === Keys.left ||
      keyCode === Keys.right;

<<<<<<< HEAD
    if(isAction && isTargetCell) {
=======
    if (isAction && isTargetCell) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      event.preventDefault();
      event.stopPropagation();

      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
<<<<<<< HEAD
        column: this.column,
        value: this.value,
        cellElement: this.element
=======
        group: this.group,
        rowHeight: this.rowHeight,
        column: this.column,
        value: this.value,
        cellElement: this._element
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      });
    }
  }

  onCheckboxChange(event: any): void {
    this.activate.emit({
      type: 'checkbox',
      event,
      row: this.row,
<<<<<<< HEAD
      column: this.column,
      value: this.value,
      cellElement: this.element
=======
      group: this.group,
      rowHeight: this.rowHeight,
      column: this.column,
      value: this.value,
      cellElement: this._element
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    });
  }

  calcSortDir(sorts: any[]): any {
<<<<<<< HEAD
    if(!sorts) return;
=======
    if (!sorts) return;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const sort = sorts.find((s: any) => {
      return s.prop === this.column.prop;
    });

<<<<<<< HEAD
    if(sort) return sort.dir;
=======
    if (sort) return sort.dir;
  }

  stripHtml(html: string): string {
    if(!html.replace) return html;
    return html.replace(/<\/?[^>]+(>|$)/g, '');
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

}
