<<<<<<< HEAD
import { 
  Component, Input, Output, EventEmitter, HostListener 
=======
import {
  Component, Input, Output, EventEmitter, HostListener, DoCheck,
  ChangeDetectionStrategy, KeyValueDiffer, ChangeDetectorRef, KeyValueDiffers
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-row-wrapper',
<<<<<<< HEAD
  template: `
    <ng-content></ng-content>
    <div 
      *ngIf="expanded"
      [style.height.px]="detailRowHeight" 
=======
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div 
      *ngIf="groupHeader && groupHeader.template"
      class="datatable-group-header"
      [ngStyle]="getGroupHeaderStyle()">
      <ng-template
        *ngIf="groupHeader && groupHeader.template"
        [ngTemplateOutlet]="groupHeader.template"
        [ngTemplateOutletContext]="groupContext">
      </ng-template>
    </div>
    <ng-content 
      *ngIf="(groupHeader && groupHeader.template && expanded) || 
             (!groupHeader || !groupHeader.template)">
    </ng-content>
    <div
      *ngIf="rowDetail && rowDetail.template && expanded"
      [style.height.px]="detailRowHeight"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      class="datatable-row-detail">
      <ng-template
        *ngIf="rowDetail && rowDetail.template"
        [ngTemplateOutlet]="rowDetail.template"
<<<<<<< HEAD
        [ngOutletContext]="{ row: row }">
=======
        [ngTemplateOutletContext]="rowContext">
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      </ng-template>
    </div>
  `,
  host: {
    class: 'datatable-row-wrapper'
  }
})
<<<<<<< HEAD
export class DataTableRowWrapperComponent {

  @Input() rowDetail: any;
  @Input() detailRowHeight: any;
  @Input() expanded: boolean = false;
  @Input() row: any;
  
  @Output() rowContextmenu = new EventEmitter<{event: MouseEvent, row: any}>(false);

=======
export class DataTableRowWrapperComponent implements DoCheck {

  @Input() innerWidth: number;
  @Input() rowDetail: any;
  @Input() groupHeader: any;
  @Input() offsetX: number;
  @Input() detailRowHeight: any;
  @Input() row: any;
  @Input() groupedRows: any;  
  @Output() rowContextmenu = new EventEmitter<{event: MouseEvent, row: any}>(false);

  @Input() set rowIndex(val: number) {
    this._rowIndex = val;
    this.rowContext.rowIndex = val;
    this.groupContext.rowIndex = val;
    this.cd.markForCheck();
  }

  get rowIndex(): number {
    return this._rowIndex;
  }

  @Input() set expanded(val: boolean) {
    this._expanded = val;
    this.groupContext.expanded = val;
    this.rowContext.expanded = val;
    this.cd.markForCheck();
  }

  get expanded(): boolean {
    return this._expanded;
  }

  groupContext: any = {
    group: this.row,
    expanded: this.expanded,
    rowIndex: this.rowIndex
  };

  rowContext: any = {
    row: this.row,
    expanded: this.expanded,
    rowIndex: this.rowIndex
  };

  private rowDiffer: KeyValueDiffer<{}, {}>;
  private _expanded: boolean = false;
  private _rowIndex: number;
  
  constructor(private cd: ChangeDetectorRef, private differs: KeyValueDiffers) {
    this.rowDiffer = differs.find({}).create();
  }

  ngDoCheck(): void {
    if (this.rowDiffer.diff(this.row)) {
      this.rowContext.row = this.row;
      this.groupContext.group = this.row;
      this.cd.markForCheck();
    }
  }

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @HostListener('contextmenu', ['$event'])
  onContextmenu($event: MouseEvent): void {
    this.rowContextmenu.emit({ event: $event, row: this.row });
  }
<<<<<<< HEAD
=======

  getGroupHeaderStyle(group: any): any {
    const styles = {};

    styles['transform'] = 'translate3d(' + this.offsetX + 'px, 0px, 0px)';
    styles['backface-visibility'] = 'hidden';
    styles['width'] = this.innerWidth;

    return styles; 
  }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
