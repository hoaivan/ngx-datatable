import {
<<<<<<< HEAD
  Component, Input, HostBinding, ElementRef, Output, EventEmitter, HostListener
} from '@angular/core';

import {
  columnsByPin, columnGroupWidths, columnsByPinArr, translateXY, Keys
=======
  Component, Input, HostBinding, ElementRef, Output, KeyValueDiffers, KeyValueDiffer,
  EventEmitter, HostListener, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck
} from '@angular/core';

import {
  allColumnsByPinArr, columnsByPin, columnGroupWidths, columnsByPinArr, translateXY, Keys
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '../../utils';
import { ScrollbarHelper } from '../../services';
import { MouseEvent, KeyboardEvent } from '../../events';

@Component({
  selector: 'datatable-body-row',
<<<<<<< HEAD
  template: `
    <div
      *ngFor="let colGroup of columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{colGroup.type}} datatable-row-group"
      [ngStyle]="stylesByGroup(colGroup.type)">
=======
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div
      *ngFor="let colGroup of _columnsByPin; let i = index; trackBy: trackByGroups"
      class="datatable-row-{{colGroup.type}} datatable-row-group"
      [ngStyle]="_groupStyles[colGroup.type]">
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      <datatable-body-cell
        *ngFor="let column of colGroup.columns; let ii = index; trackBy: columnTrackingFn"
        tabindex="-1"
        [row]="row"
<<<<<<< HEAD
        [isSelected]="isSelected"
        [column]="column"
        [rowHeight]="rowHeight"
        (activate)="onActivate($event, ii)">
      </datatable-body-cell>
    </div>
  `
})
export class DataTableBodyRowComponent {
=======
        [group]="group"
        [expanded]="expanded"
        [isSelected]="isSelected"
        [rowIndex]="rowIndex"
        [column]="column"
        [rowHeight]="rowHeight"
        [displayCheck]="displayCheck"
        (activate)="onActivate($event, ii)">
      </datatable-body-cell>
    </div>      
  `
})
export class DataTableBodyRowComponent implements DoCheck {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  @Input() set columns(val: any[]) {
    this._columns = val;
    this.recalculateColumns(val);
  }

  get columns(): any[] {
    return this._columns;
  }

  @Input() set innerWidth(val: number) {
<<<<<<< HEAD
    this._innerWidth = val;
    this.recalculateColumns();
=======
    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, colByPin);  
    }

    this._innerWidth = val;
    this.recalculateColumns();
    this.buildStylesByGroup();    
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  get innerWidth(): number {
    return this._innerWidth;
  }

<<<<<<< HEAD
  @Input() rowClass: any;
  @Input() row: any;
  @Input() offsetX: number;
  @Input() isSelected: boolean;
=======
  @Input() expanded: boolean;
  @Input() rowClass: any;
  @Input() row: any;
  @Input() group: any;
  @Input() isSelected: boolean;
  @Input() rowIndex: number;
  @Input() displayCheck: any;

  @Input()
  set offsetX(val: number) {
    this._offsetX = val;
    this.buildStylesByGroup();
  }
  get offsetX() { return this._offsetX; }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  @HostBinding('class')
  get cssClass() {
    let cls = 'datatable-body-row';
<<<<<<< HEAD
    if(this.isSelected) cls += ' active';
    if(this.row.$$index % 2 !== 0) cls += ' datatable-row-odd';
    if(this.row.$$index % 2 === 0) cls += ' datatable-row-even';

    if(this.rowClass) {
      const res = this.rowClass(this.row);
      if(typeof res === 'string') {
        cls += ` ${res}`;
      } else if(typeof res === 'object') {
        const keys = Object.keys(res);
        for(const k of keys) {
          if(res[k] === true) cls += ` ${k}`;
=======
    if (this.isSelected) cls += ' active';
    if (this.rowIndex % 2 !== 0) cls += ' datatable-row-odd';
    if (this.rowIndex % 2 === 0) cls += ' datatable-row-even';

    if (this.rowClass) {
      const res = this.rowClass(this.row);
      if (typeof res === 'string') {
        cls += ` ${res}`;
      } else if (typeof res === 'object') {
        const keys = Object.keys(res);
        for (const k of keys) {
          if (res[k] === true) cls += ` ${k}`;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
      }
    }

    return cls;
  }

  @HostBinding('style.height.px')
  @Input() rowHeight: number;

  @HostBinding('style.width.px')
  get columnsTotalWidths(): string {
<<<<<<< HEAD
    return this.columnGroupWidths.total;
=======
    return this._columnGroupWidths.total;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  @Output() activate: EventEmitter<any> = new EventEmitter();

<<<<<<< HEAD
  element: any;
  columnGroupWidths: any;
  columnsByPin: any;
  _columns: any[];
  _innerWidth: number;

  constructor(private scrollbarHelper: ScrollbarHelper, element: ElementRef) {
    this.element = element.nativeElement;
  }

=======
  _element: any;
  _columnGroupWidths: any;
  _columnsByPin: any;
  _offsetX: number;
  _columns: any[];
  _innerWidth: number;
  _groupStyles = {
    left: {},
    center: {},
    right: {}
  };

  private _rowDiffer: KeyValueDiffer<{}, {}>;

  constructor(
      private differs: KeyValueDiffers,
      private scrollbarHelper: ScrollbarHelper,
      private cd: ChangeDetectorRef, 
      element: ElementRef) {
    this._element = element.nativeElement;
    this._rowDiffer = differs.find({}).create();
  }

  ngDoCheck(): void {
    if (this._rowDiffer.diff(this.row)) {
      this.cd.markForCheck();
    }
  }
  
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  trackByGroups(index: number, colGroup: any): any {
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }

<<<<<<< HEAD
  stylesByGroup(group: string) {
    const widths = this.columnGroupWidths;
=======
  buildStylesByGroup() {
    this._groupStyles['left'] = this.calcStylesByGroup('left');
    this._groupStyles['center'] = this.calcStylesByGroup('center');
    this._groupStyles['right'] = this.calcStylesByGroup('right');
    this.cd.markForCheck();
  }

  calcStylesByGroup(group: string) {
    const widths = this._columnGroupWidths;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
    };

<<<<<<< HEAD
    if(group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if(group === 'right') {
=======
    if (group === 'left') {
      translateXY(styles, offsetX, 0);
    } else if (group === 'right') {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      const bodyWidth = parseInt(this.innerWidth + '', 0);
      const totalDiff = widths.total - bodyWidth;
      const offsetDiff = totalDiff - offsetX;
      const offset = (offsetDiff + this.scrollbarHelper.width) * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

<<<<<<< HEAD
  onActivate(event: any, index: number) {
    event.cellIndex = index;
    event.rowElement = this.element;
=======
  onActivate(event: any, index: number): void {
    event.cellIndex = index;
    event.rowElement = this._element;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    this.activate.emit(event);
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
<<<<<<< HEAD
    const isTargetRow = event.target === this.element;
=======
    const isTargetRow = event.target === this._element;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const isAction =
      keyCode === Keys.return ||
      keyCode === Keys.down ||
      keyCode === Keys.up ||
      keyCode === Keys.left ||
      keyCode === Keys.right;

<<<<<<< HEAD
    if(isAction && isTargetRow) {
=======
    if (isAction && isTargetRow) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      event.preventDefault();
      event.stopPropagation();

      this.activate.emit({
        type: 'keydown',
        event,
        row: this.row,
<<<<<<< HEAD
        rowElement: this.element
=======
        rowElement: this._element
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      });
    }
  }

<<<<<<< HEAD
  recalculateColumns(val: any[] = this.columns): void {
    const colsByPin = columnsByPin(val);
    this.columnsByPin = columnsByPinArr(val);
    this.columnGroupWidths = columnGroupWidths(colsByPin, val);
=======
  @HostListener('mouseenter', ['$event'])
  onMouseenter(event: any): void {
    this.activate.emit({
        type: 'mouseenter',
        event,
        row: this.row,
        rowElement: this._element
      });
  }

  recalculateColumns(val: any[] = this.columns): void {
    this._columns = val;
    const colsByPin = columnsByPin(this._columns);
    this._columnsByPin = allColumnsByPinArr(this._columns);        
    this._columnGroupWidths = columnGroupWidths(colsByPin, this._columns);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

}
