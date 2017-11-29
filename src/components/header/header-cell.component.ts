import {
<<<<<<< HEAD
  Component, Input, EventEmitter, Output, HostBinding, HostListener
=======
  Component, Input, EventEmitter, Output, HostBinding, 
  HostListener, ChangeDetectionStrategy, ChangeDetectorRef
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';
import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
import { nextSortDir } from '../../utils';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-header-cell',
  template: `
    <div>
      <label
<<<<<<< HEAD
        *ngIf="isCheckboxable" 
        class="datatable-checkbox">
        <input 
          type="checkbox"
          [checked]="allRowsSelected"
          (change)="select.emit(!allRowsSelected)" 
        />
      </label>
      <span 
=======
        *ngIf="isCheckboxable"
        class="datatable-checkbox">
        <input
          type="checkbox"
          [checked]="allRowsSelected"
          (change)="select.emit(!allRowsSelected)"
        />
      </label>
      <span
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        *ngIf="!column.headerTemplate"
        class="datatable-header-cell-wrapper">
        <span
          class="datatable-header-cell-label draggable"
          (click)="onSort()"
          [innerHTML]="name">
        </span>
      </span>
      <ng-template
        *ngIf="column.headerTemplate"
        [ngTemplateOutlet]="column.headerTemplate"
<<<<<<< HEAD
        [ngOutletContext]="{ 
          column: column, 
          sortDir: sortDir,
          sortFn: sortFn,
          allRowsSelected: allRowsSelected,
          selectFn: selectFn
        }">
=======
        [ngTemplateOutletContext]="cellContext">
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      </ng-template>
      <span
        (click)="onSort()"
        [class]="sortClass">
      </span>
    </div>
  `,
  host: {
    class: 'datatable-header-cell'
<<<<<<< HEAD
  }
=======
  },
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
})

export class DataTableHeaderCellComponent {

  @Input() sortType: SortType;
<<<<<<< HEAD
  @Input() column: TableColumn;
  @Input() sortAscendingIcon: string;
  @Input() sortDescendingIcon: string;
  @Input() allRowsSelected: boolean;
  @Input() selectionType: SelectionType;

=======
  @Input() sortAscendingIcon: string;
  @Input() sortDescendingIcon: string;
  
  _allRowsSelected: boolean;
  
  @Input() set allRowsSelected(value) {
    this._allRowsSelected = value;
    this.cellContext.allRowsSelected = value;
  }
  get allRowsSelected() {
    return this._allRowsSelected;
  }
  
  @Input() selectionType: SelectionType;

  @Input() set column(column: TableColumn) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }

  get column(): TableColumn {
    return this._column;
  }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @HostBinding('style.height.px')
  @Input() headerHeight: number;

  @Input() set sorts(val: any[]) {
    this._sorts = val;
    this.sortDir = this.calcSortDir(val);
    this.sortClass = this.calcSortClass(this.sortDir);
<<<<<<< HEAD
=======
    this.cd.markForCheck();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  get sorts(): any[] {
    return this._sorts;
  }

  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() columnContextmenu = new EventEmitter<{ event: MouseEvent, column: any }>(false);

  @HostBinding('class')
  get columnCssClasses(): any {
    let cls = 'datatable-header-cell';

<<<<<<< HEAD
    if(this.column.sortable) cls += ' sortable';
    if(this.column.resizeable) cls += ' resizeable';
    if(this.column.headerClass) {
      if(typeof this.column.headerClass === 'string') {
        cls += ' ' + this.column.headerClass;
      } else if(typeof this.column.headerClass === 'function') {
        const res = this.column.headerClass({ 
          column: this.column
        });

        if(typeof res === 'string') {
          cls += res;
        } else if(typeof res === 'object') {
          const keys = Object.keys(res);
          for(const k of keys) {
            if(res[k] === true) cls += ` ${k}`;
=======
    if (this.column.sortable) cls += ' sortable';
    if (this.column.resizeable) cls += ' resizeable';
    if (this.column.headerClass) {
      if (typeof this.column.headerClass === 'string') {
        cls += ' ' + this.column.headerClass;
      } else if (typeof this.column.headerClass === 'function') {
        const res = this.column.headerClass({
          column: this.column
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

    const sortDir = this.sortDir;
<<<<<<< HEAD
    if(sortDir) {
=======
    if (sortDir) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      cls += ` sort-active sort-${sortDir}`;
    }

    return cls;
  }

  @HostBinding('attr.title')
  get name(): string {
    // guaranteed to have a value by setColumnDefaults() in column-helper.ts
    return this.column.headerTemplate === undefined ? this.column.name : undefined;
  }

  @HostBinding('style.minWidth.px')
  get minWidth(): number {
    return this.column.minWidth;
  }

  @HostBinding('style.maxWidth.px')
  get maxWidth(): number {
    return this.column.maxWidth;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return this.column.width;
  }

  get isCheckboxable(): boolean {
<<<<<<< HEAD
    return this.column.checkboxable && 
      this.column.headerCheckboxable && 
=======
    return this.column.checkboxable &&
      this.column.headerCheckboxable &&
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      this.selectionType === SelectionType.checkbox;
  }

  sortFn = this.onSort.bind(this);
  sortClass: string;
  sortDir: SortDirection;
<<<<<<< HEAD
  _sorts: any[];
  selectFn = this.select.emit.bind(this.select);

=======
  selectFn = this.select.emit.bind(this.select);

  cellContext: any = {
    column: this.column,
    sortDir: this.sortDir,
    sortFn: this.sortFn,
    allRowsSelected: this.allRowsSelected,
    selectFn: this.selectFn
  };

  private _column: TableColumn;
  private _sorts: any[];

  constructor(private cd: ChangeDetectorRef) { }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @HostListener('contextmenu', ['$event'])
  onContextmenu($event: MouseEvent): void {
    this.columnContextmenu.emit({ event: $event, column: this.column });
  }

  calcSortDir(sorts: any[]): any {
<<<<<<< HEAD
    if(sorts && this.column) {
=======
    if (sorts && this.column) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      const sort = sorts.find((s: any) => {
        return s.prop === this.column.prop;
      });

<<<<<<< HEAD
      if(sort) return sort.dir;
=======
      if (sort) return sort.dir;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }
  }

  onSort(): void {
<<<<<<< HEAD
    if(!this.column.sortable) return;
=======
    if (!this.column.sortable) return;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const newValue = nextSortDir(this.sortType, this.sortDir);
    this.sort.emit({
      column: this.column,
      prevValue: this.sortDir,
      newValue
    });
  }

  calcSortClass(sortDir: SortDirection): string {
<<<<<<< HEAD
    if(sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if(sortDir === SortDirection.desc) {
=======
    if (sortDir === SortDirection.asc) {
      return `sort-btn sort-asc ${this.sortAscendingIcon}`;
    } else if (sortDir === SortDirection.desc) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      return `sort-btn sort-desc ${this.sortDescendingIcon}`;
    } else {
      return `sort-btn`;
    }
  }

}
