import {
<<<<<<< HEAD
  Component, Output, EventEmitter, Input, HostBinding
=======
  Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';
import { SortType, SelectionType } from '../../types';
import { columnsByPin, columnGroupWidths, columnsByPinArr, translateXY } from '../../utils';
import { DataTableColumnDirective } from '../columns';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-header',
  template: `
    <div
      orderable
      (reorder)="onColumnReordered($event)"
<<<<<<< HEAD
      [style.width.px]="columnGroupWidths.total"
      class="datatable-header-inner">
      <div
        *ngFor="let colGroup of columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="stylesByGroup(colGroup.type)">
=======
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-header-inner">
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]">
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        <datatable-header-cell
          *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn"
          resizeable
          [resizeEnabled]="column.resizeable"
          (resize)="onColumnResized($event, column)"
          long-press
          [pressModel]="column"
          [pressEnabled]="reorderable && column.draggable"
          (longPressStart)="onLongPressStart($event)"
          (longPressEnd)="onLongPressEnd($event)"
          draggable
          [dragX]="reorderable && column.draggable && column.dragging"
          [dragY]="false"
          [dragModel]="column"
          [dragEventTarget]="dragEventTarget"
          [headerHeight]="headerHeight"
          [column]="column"
          [sortType]="sortType"
          [sorts]="sorts"
          [selectionType]="selectionType"
          [sortAscendingIcon]="sortAscendingIcon"
          [sortDescendingIcon]="sortDescendingIcon"
          [allRowsSelected]="allRowsSelected"
          (sort)="onSort($event)"
          (select)="select.emit($event)"
          (columnContextmenu)="columnContextmenu.emit($event)">
        </datatable-header-cell>
      </div>
    </div>
  `,
  host: {
    class: 'datatable-header'
<<<<<<< HEAD
  }
=======
  },
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
})
export class DataTableHeaderComponent {

  @Input() sortAscendingIcon: any;
  @Input() sortDescendingIcon: any;
  @Input() scrollbarH: boolean;
<<<<<<< HEAD
  @Input() innerWidth: number;
  @Input() offsetX: number;
=======
  @Input() dealsWithGroup: boolean;

  @Input() set innerWidth(val: number) {
    this._innerWidth = val;

    if (this._columns) {    
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
      this.setStylesByGroup();
    }
  }
    
  get innerWidth(): number {
    return this._innerWidth;
  }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @Input() sorts: any[];
  @Input() sortType: SortType;
  @Input() allRowsSelected: boolean;
  @Input() selectionType: SelectionType;
  @Input() reorderable: boolean;

  dragEventTarget: any;

  @HostBinding('style.height')
  @Input() set headerHeight(val: any) {
    if (val !== 'auto') {
      this._headerHeight = `${val}px`;
    } else {
      this._headerHeight = val;
    }
  }

  get headerHeight(): any {
    return this._headerHeight;
  }

  @Input() set columns(val: any[]) {
<<<<<<< HEAD
    this._columns = val;

    const colsByPin = columnsByPin(val);
    this.columnsByPin = columnsByPinArr(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
=======
    this._columns = val;    

    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    this._columnGroupWidths = columnGroupWidths(colsByPin, val);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  get columns(): any[] {
    return this._columns;
  }

<<<<<<< HEAD
=======
  @Input()
  set offsetX(val: number) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() { return this._offsetX; }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @Output() sort: EventEmitter<any> = new EventEmitter();
  @Output() reorder: EventEmitter<any> = new EventEmitter();
  @Output() resize: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();
  @Output() columnContextmenu = new EventEmitter<{ event: MouseEvent, column: any }>(false);

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
  _styleByGroup = {
    left: {},
    center: {},
    right: {}
  };

  constructor(private cd: ChangeDetectorRef) { }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  onLongPressStart({ event, model }: { event: any, model: any }) {
    model.dragging = true;
    this.dragEventTarget = event;
  }

  onLongPressEnd({ event, model }: { event: any, model: any }) {
    this.dragEventTarget = event;

<<<<<<< HEAD
    // delay resetting so sort can be 
    // prevented if we were dragging
    setTimeout(() => { 
=======
    // delay resetting so sort can be
    // prevented if we were dragging
    setTimeout(() => {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      model.dragging = false;
    }, 5);
  }

  @HostBinding('style.width')
  get headerWidth(): string {
    if (this.scrollbarH) {
      return this.innerWidth + 'px';
    }

    return '100%';
  }

<<<<<<< HEAD
  trackByGroups(index: number, colGroup: any): any {
=======
  trackByGroups(index: number, colGroup: any): any {    
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }

  onColumnResized(width: number, column: DataTableColumnDirective): void {
    if (width <= column.minWidth) {
      width = column.minWidth;
    } else if (width >= column.maxWidth) {
      width = column.maxWidth;
    }

    this.resize.emit({
      column,
      prevValue: column.width,
      newValue: width
    });
  }

  onColumnReordered({ prevIndex, newIndex, model }: any): void {
    this.reorder.emit({
      column: model,
      prevValue: prevIndex,
      newValue: newIndex
    });
  }

  onSort({ column, prevValue, newValue }: any): void {
    // if we are dragging don't sort!
<<<<<<< HEAD
    if(column.dragging) return;
=======
    if (column.dragging) return;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const sorts = this.calcNewSorts(column, prevValue, newValue);
    this.sort.emit({
      sorts,
      column,
      prevValue,
      newValue
    });
  }

  calcNewSorts(column: any, prevValue: number, newValue: number): any[] {
    let idx = 0;

<<<<<<< HEAD
    if(!this.sorts) {
=======
    if (!this.sorts) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      this.sorts = [];
    }

    const sorts = this.sorts.map((s, i) => {
      s = { ...s };
      if (s.prop === column.prop) idx = i;
      return s;
    });

    if (newValue === undefined) {
      sorts.splice(idx, 1);
    } else if (prevValue) {
<<<<<<< HEAD
      sorts[ idx ].dir = newValue;
=======
      sorts[idx].dir = newValue;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    } else {
      if (this.sortType === SortType.single) {
        sorts.splice(0, this.sorts.length);
      }

      sorts.push({ dir: newValue, prop: column.prop });
    }

    return sorts;
  }

<<<<<<< HEAD
  stylesByGroup(group: string): any {
    const widths = this.columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[ group ]}px`
=======
  setStylesByGroup() {
    this._styleByGroup['left'] = this.calcStylesByGroup('left');
    this._styleByGroup['center'] = this.calcStylesByGroup('center');
    this._styleByGroup['right'] = this.calcStylesByGroup('right');
    this.cd.detectChanges();
  }

  calcStylesByGroup(group: string): any {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    };

    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }
<<<<<<< HEAD

=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
