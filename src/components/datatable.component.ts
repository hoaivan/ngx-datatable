import {
  Component, Input, Output, ElementRef, EventEmitter, ViewChild,
  HostListener, ContentChildren, OnInit, QueryList, AfterViewInit,
  HostBinding, ContentChild, TemplateRef, IterableDiffer,
<<<<<<< HEAD
  DoCheck, KeyValueDiffers, KeyValueDiffer, ViewEncapsulation
=======
  DoCheck, KeyValueDiffers, KeyValueDiffer, ViewEncapsulation,
  ChangeDetectionStrategy, ChangeDetectorRef
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from '@angular/core';

import {
  forceFillColumnWidths, adjustColumnWidths, sortRows,
  setColumnDefaults, throttleable, translateTemplates
} from '../utils';
import { ScrollbarHelper } from '../services';
import { ColumnMode, SortType, SelectionType, TableColumn, ContextmenuType } from '../types';
import { DataTableBodyComponent } from './body';
<<<<<<< HEAD
import { DataTableColumnDirective } from './columns';
import { DatatableRowDetailDirective } from './row-detail';
import { DatatableFooterDirective } from './footer';
import { MouseEvent } from '../events';
=======
import { DatatableGroupHeaderDirective } from './body/body-group-header.directive';
import { DataTableColumnDirective } from './columns';
import { DatatableRowDetailDirective } from './row-detail';
import { DatatableFooterDirective } from './footer';
import { DataTableHeaderComponent } from './header';
import { MouseEvent } from '../events';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

@Component({
  selector: 'ngx-datatable',
  template: `
    <div
      visibilityObserver
      (visible)="recalculate()">
      <datatable-header
        *ngIf="headerHeight"
        [sorts]="sorts"
        [sortType]="sortType"
        [scrollbarH]="scrollbarH"
<<<<<<< HEAD
        [innerWidth]="innerWidth"
        [offsetX]="offsetX"
        [columns]="columns"
=======
        [innerWidth]="_innerWidth"
        [offsetX]="_offsetX | async"
        [dealsWithGroup]="groupedRows"
        [columns]="_internalColumns"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        [headerHeight]="headerHeight"
        [reorderable]="reorderable"
        [sortAscendingIcon]="cssClasses.sortAscending"
        [sortDescendingIcon]="cssClasses.sortDescending"
        [allRowsSelected]="allRowsSelected"
        [selectionType]="selectionType"
        (sort)="onColumnSort($event)"
        (resize)="onColumnResize($event)"
        (reorder)="onColumnReorder($event)"
        (select)="onHeaderSelect($event)"
        (columnContextmenu)="onColumnContextmenu($event)">
      </datatable-header>
      <datatable-body
<<<<<<< HEAD
        [rows]="rows"
=======
        [groupRowsBy]="groupRowsBy"
        [groupedRows]="groupedRows"
        [rows]="_internalRows"
        [groupExpansionDefault]="groupExpansionDefault"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        [scrollbarV]="scrollbarV"
        [scrollbarH]="scrollbarH"
        [loadingIndicator]="loadingIndicator"
        [externalPaging]="externalPaging"
        [rowHeight]="rowHeight"
        [rowCount]="rowCount"
        [offset]="offset"
        [trackByProp]="trackByProp"
<<<<<<< HEAD
        [columns]="columns"
        [pageSize]="pageSize"
        [offsetX]="offsetX"
        [rowDetail]="rowDetail"
        [selected]="selected"
        [innerWidth]="innerWidth"
=======
        [columns]="_internalColumns"
        [pageSize]="pageSize"
        [offsetX]="_offsetX | async"
        [rowDetail]="rowDetail"
        [groupHeader]="groupHeader"
        [selected]="selected"
        [innerWidth]="_innerWidth"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        [bodyHeight]="bodyHeight"
        [selectionType]="selectionType"
        [emptyMessage]="messages.emptyMessage"
        [rowIdentity]="rowIdentity"
        [rowClass]="rowClass"
        [selectCheck]="selectCheck"
<<<<<<< HEAD
=======
        [displayCheck]="displayCheck"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        (page)="onBodyPage($event)"
        (activate)="activate.emit($event)"
        (rowContextmenu)="onRowContextmenu($event)"
        (select)="onBodySelect($event)"
        (scroll)="onBodyScroll($event)">
      </datatable-body>
      <datatable-footer
        *ngIf="footerHeight"
        [rowCount]="rowCount"
        [pageSize]="pageSize"
        [offset]="offset"
        [footerHeight]="footerHeight"
        [footerTemplate]="footer"
        [totalMessage]="messages.totalMessage"
        [pagerLeftArrowIcon]="cssClasses.pagerLeftArrow"
        [pagerRightArrowIcon]="cssClasses.pagerRightArrow"
        [pagerPreviousIcon]="cssClasses.pagerPrevious"
        [selectedCount]="selected.length"
        [selectedMessage]="!!selectionType && messages.selectedMessage"
        [pagerNextIcon]="cssClasses.pagerNext"
        (page)="onFooterPage($event)">
      </datatable-footer>
    </div>
  `,
<<<<<<< HEAD
=======
  changeDetection: ChangeDetectionStrategy.OnPush,
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datatable.component.scss'],
  host: {
    class: 'ngx-datatable'
  }
})
<<<<<<< HEAD
export class DatatableComponent implements OnInit, AfterViewInit, DoCheck {

  /**
   * Rows that are displayed in the table.
   *
   * @memberOf DatatableComponent
   */
  @Input() set rows(val: any) {
    // auto sort on new updates
    if (!this.externalSorting) {
      val = sortRows(val, this.columns, this.sorts);
    }

    this._rows = val;
    // recalculate sizes/etc
    this.recalculate();
=======
export class DatatableComponent implements OnInit, DoCheck, AfterViewInit {

  /**
   * Rows that are displayed in the table.
   */
  @Input() set rows(val: any) {
    this._rows = val;

    // auto sort on new updates
    if (!this.externalSorting) {
      this._internalRows = sortRows(val, this._internalColumns, this.sorts);
    } else {
      this._internalRows = [...val];
    }

    // recalculate sizes/etc
    this.recalculate();

    if (this._rows && this._groupRowsBy) {
      // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
      this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
    }

    this.cd.markForCheck();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  /**
   * Gets the rows.
<<<<<<< HEAD
   *
   * @readonly
   * @type {*}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  get rows(): any {
    return this._rows;
  }

  /**
<<<<<<< HEAD
   * Columns to be displayed.
   *
   * @memberOf DatatableComponent
   */
  @Input() set columns(val: TableColumn[]) {
    if(val) {
      setColumnDefaults(val);
      this.recalculateColumns(val);
=======
   * This attribute allows the user to set the name of the column to group the data with
   */
  @Input() set groupRowsBy(val: string) {
    if (val) {
      this._groupRowsBy = val;
      if (this._rows && this._groupRowsBy) {
        // cretes a new array with the data grouped
        this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
      }
    }
  }

  get groupRowsBy() {
    return this._groupRowsBy;
  }

  /**
   * This attribute allows the user to set a grouped array in the following format:
   *  [
   *    {groupid=1} [
   *      {id=1 name="test1"},
   *      {id=2 name="test2"},
   *      {id=3 name="test3"}
   *    ]},
   *    {groupid=2>[
   *      {id=4 name="test4"},
   *      {id=5 name="test5"},
   *      {id=6 name="test6"}
   *    ]}
   *  ]
   */
  @Input() groupedRows: any[];

  /**
   * Columns to be displayed.
   */
  @Input() set columns(val: TableColumn[]) {
    if (val) {
      this._internalColumns = [...val];
      setColumnDefaults(this._internalColumns);
      this.recalculateColumns();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }

    this._columns = val;
  }

  /**
   * Get the columns.
<<<<<<< HEAD
   *
   * @readonly
   * @type {any[]}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  get columns(): TableColumn[] {
    return this._columns;
  }

  /**
   * List of row objects that should be
   * represented as selected in the grid.
   * Default value: `[]`
<<<<<<< HEAD
   *
   * @type {any[]}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() selected: any[] = [];

  /**
   * Enable vertical scrollbars
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() scrollbarV: boolean = false;

  /**
   * Enable horz scrollbars
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() scrollbarH: boolean = false;

  /**
   * The row height; which is necessary
   * to calculate the height for the lazy rendering.
<<<<<<< HEAD
   *
   * @type {number}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() rowHeight: number = 30;

  /**
   * Type of column width distribution formula.
   * Example: flex, force, standard
<<<<<<< HEAD
   *
   * @type {ColumnMode}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() columnMode: ColumnMode = ColumnMode.standard;

  /**
   * The minimum header height in pixels.
   * Pass a falsey for no header
<<<<<<< HEAD
   *
   * @type {*}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() headerHeight: any = 30;

  /**
   * The minimum footer height in pixels.
   * Pass falsey for no footer
<<<<<<< HEAD
   *
   * @type {number}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() footerHeight: number = 0;

  /**
   * If the table should use external paging
   * otherwise its assumed that all data is preloaded.
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() externalPaging: boolean = false;

  /**
   * If the table should use external sorting or
   * the built-in basic sorting.
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() externalSorting: boolean = false;

  /**
   * The page size to be shown.
   * Default value: `undefined`
<<<<<<< HEAD
   *
   * @type {number}
   * @memberOf DatatableComponent
   */
  @Input() limit: number = undefined;
=======
   */
  @Input() set limit(val: number | undefined) {
    this._limit = val;

    // recalculate sizes/etc
    this.recalculate();
  }

  /**
   * Gets the limit.
   */
  get limit(): number | undefined {
    return this._limit;
  }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  /**
   * The total count of all rows.
   * Default value: `0`
<<<<<<< HEAD
   *
   * @type {number}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() set count(val: number) {
    this._count = val;

    // recalculate sizes/etc
    this.recalculate();
  }

  /**
   * Gets the count.
<<<<<<< HEAD
   *
   * @readonly
   * @type {number}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  get count(): number {
    return this._count;
  }

  /**
   * The current offset ( page - 1 ) shown.
   * Default value: `0`
<<<<<<< HEAD
   *
   * @type {number}
   * @memberOf DatatableComponent
   */
  @Input() offset: number = 0;
=======
   */
  @Input() set offset(val: number) {
    this._offset = val;
  }
  get offset(): number {
    return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
  }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

  /**
   * Show the linear loading bar.
   * Default value: `false`
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() loadingIndicator: boolean = false;

  /**
   * Type of row selection. Options are:
   *
   *  - `single`
   *  - `multi`
   *  - `chkbox`
   *  - `multiClick`
   *  - `cell`
   *
   * For no selection pass a `falsey`.
   * Default value: `undefined`
<<<<<<< HEAD
   *
   * @type {SelectionType}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() selectionType: SelectionType;

  /**
   * Enable/Disable ability to re-order columns
   * by dragging them.
<<<<<<< HEAD
   *
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() reorderable: boolean = true;

  /**
   * The type of sorting
<<<<<<< HEAD
   *
   * @type {SortType}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() sortType: SortType = SortType.single;

  /**
   * Array of sorted columns by property and type.
   * Default value: `[]`
<<<<<<< HEAD
   *
   * @type {any[]}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() sorts: any[] = [];

  /**
   * Css class overrides
<<<<<<< HEAD
   *
   * @type {*}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() cssClasses: any = {
    sortAscending: 'datatable-icon-up',
    sortDescending: 'datatable-icon-down',
    pagerLeftArrow: 'datatable-icon-left',
    pagerRightArrow: 'datatable-icon-right',
    pagerPrevious: 'datatable-icon-prev',
    pagerNext: 'datatable-icon-skip'
  };

  /**
   * Message overrides for localization
   *
   * emptyMessage     [default] = 'No data to display'
   * totalMessage     [default] = 'total'
   * selectedMessage  [default] = 'selected'
<<<<<<< HEAD
   *
   * @type {*}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() messages: any = {
    // Message to show when array is presented
    // but contains no values
    emptyMessage: 'No data to display',

    // Footer total message
    totalMessage: 'total',

    // Footer selected message
    selectedMessage: 'selected'
  };

  /**
   * This will be used when displaying or selecting rows.
   * when tracking/comparing them, we'll use the value of this fn,
   *
   * (`fn(x) === fn(y)` instead of `x === y`)
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() rowIdentity: (x: any) => any = ((x: any) => x);

  /**
<<<<<<< HEAD
   * Row specific classes. 
   * Similar implementation to ngClass.
   * 
   *  [rowClass]="'first second'"
   *  [rowClass]="{ 'first': true, 'second': true, 'third': false }"
   * 
   * @type {*}
   * @memberOf DatatableComponent
=======
   * Row specific classes.
   * Similar implementation to ngClass.
   *
   *  [rowClass]="'first second'"
   *  [rowClass]="{ 'first': true, 'second': true, 'third': false }"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() rowClass: any;

  /**
   * A boolean/function you can use to check whether you want
   * to select a particular row based on a criteria. Example:
   *
<<<<<<< HEAD
   *    (selection) => { 
   *      return selection !== 'Ethel Price'; 
   *    }
   *
   * @type {*}
   * @memberOf DatatableComponent
=======
   *    (selection) => {
   *      return selection !== 'Ethel Price';
   *    }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() selectCheck: any;

  /**
<<<<<<< HEAD
   * Property to which you can use for custom tracking of rows.
   * Example: 'name'
   *
   * @type {string}
   * @memberOf DatatableComponent
=======
   * A function you can use to check whether you want
   * to show the checkbox for a particular row based on a criteria. Example:
   *
   *    (row, column, value) => {
   *      return row.name !== 'Ethel Price';
   *    }
   */
  @Input() displayCheck: (row: any, column?: any, value?: any) => boolean;

  /**
   * A boolean you can use to set the detault behaviour of rows and groups
   * whether they will start expanded or not. If ommited the default is NOT expanded.
   *
   */
  @Input() groupExpansionDefault: boolean = false;

  /**
   * Property to which you can use for custom tracking of rows.
   * Example: 'name'
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Input() trackByProp: string;

  /**
<<<<<<< HEAD
   * Body was scrolled typically in a `scrollbarV:true` scenario.
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
   */
=======
   * Property to which you can use for determining select all
   * rows on current page or not.
   *
   * @type {boolean}
   * @memberOf DatatableComponent
   */
  @Input() selectAllRowsOnPage = false;

  /**
   * Body was scrolled typically in a `scrollbarV:true` scenario.
   */
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  @Output() scroll: EventEmitter<any> = new EventEmitter();

  /**
   * A cell or row was focused via keyboard or mouse click.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() activate: EventEmitter<any> = new EventEmitter();

  /**
   * A cell or row was selected.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() select: EventEmitter<any> = new EventEmitter();

  /**
   * Column sort was invoked.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() sort: EventEmitter<any> = new EventEmitter();

  /**
   * The table was paged either triggered by the pager or the body scroll.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() page: EventEmitter<any> = new EventEmitter();

  /**
   * Columns were re-ordered.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() reorder: EventEmitter<any> = new EventEmitter();

  /**
   * Column was resized.
<<<<<<< HEAD
   *
   * @type {EventEmitter<any>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() resize: EventEmitter<any> = new EventEmitter();

  /**
   * The context menu was invoked on the table.
   * type indicates whether the header or the body was clicked.
   * content contains either the column or the row that was clicked.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @Output() tableContextmenu = new EventEmitter<{ event: MouseEvent, type: ContextmenuType, content: any }>(false);

  /**
   * CSS class applied if the header height if fixed height.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.fixed-header')
  get isFixedHeader(): boolean {
    const headerHeight: number | string = this.headerHeight;
    return (typeof headerHeight === 'string') ?
      (<string>headerHeight) !== 'auto' : true;
  }

  /**
   * CSS class applied to the root element if
   * the row heights are fixed heights.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.fixed-row')
  get isFixedRow(): boolean {
    const rowHeight: number | string = this.rowHeight;
    return (typeof rowHeight === 'string') ?
      (<string>rowHeight) !== 'auto' : true;
  }

  /**
   * CSS class applied to root element if
   * vertical scrolling is enabled.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.scroll-vertical')
  get isVertScroll(): boolean {
    return this.scrollbarV;
  }

  /**
   * CSS class applied to the root element
   * if the horziontal scrolling is enabled.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.scroll-horz')
  get isHorScroll(): boolean {
    return this.scrollbarH;
  }

  /**
   * CSS class applied to root element is selectable.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.selectable')
  get isSelectable(): boolean {
    return this.selectionType !== undefined;
  }

  /**
   * CSS class applied to root is checkbox selection.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.checkbox-selection')
  get isCheckboxSelection(): boolean {
    return this.selectionType === SelectionType.checkbox;
  }

  /**
   * CSS class applied to root if cell selection.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.cell-selection')
  get isCellSelection(): boolean {
    return this.selectionType === SelectionType.cell;
  }

  /**
   * CSS class applied to root if single select.
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.single-selection')
  get isSingleSelection(): boolean {
    return this.selectionType === SelectionType.single;
  }

  /**
   * CSS class added to root element if mulit select
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.multi-selection')
  get isMultiSelection(): boolean {
    return this.selectionType === SelectionType.multi;
  }

  /**
   * CSS class added to root element if mulit click select
<<<<<<< HEAD
   *
   * @readonly
   * @type {boolean}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostBinding('class.multi-click-selection')
  get isMultiClickSelection(): boolean {
    return this.selectionType === SelectionType.multiClick;
  }

  /**
   * Column templates gathered from `ContentChildren`
   * if described in your markup.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @ContentChildren(DataTableColumnDirective)
  set columnTemplates(val: QueryList<DataTableColumnDirective>) {
    this._columnTemplates = val;
<<<<<<< HEAD

    if (val) {
      // only set this if results were brought back
      const arr = val.toArray();

      if (arr.length) {
        // translate them to normal objects
        this.columns = translateTemplates(arr);
      }
    }
=======
    this.translateColumns(val);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  /**
   * Returns the column templates.
<<<<<<< HEAD
   *
   * @readonly
   * @type {QueryList<DataTableColumnDirective>}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  get columnTemplates(): QueryList<DataTableColumnDirective> {
    return this._columnTemplates;
  }

  /**
   * Row Detail templates gathered from the ContentChild
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @ContentChild(DatatableRowDetailDirective)
  rowDetail: DatatableRowDetailDirective;

  /**
<<<<<<< HEAD
   * Footer template gathered from the ContentChild
   * 
   * @type {DatatableFooterDirective}
   * @memberOf DatatableComponent
=======
   * Group Header templates gathered from the ContentChild
   */
  @ContentChild(DatatableGroupHeaderDirective)
  groupHeader: DatatableGroupHeaderDirective;

  /**
   * Footer template gathered from the ContentChild
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @ContentChild(DatatableFooterDirective)
  footer: DatatableFooterDirective;

  /**
   * Reference to the body component for manually
   * invoking functions on the body.
<<<<<<< HEAD
   *
   * @private
   * @type {DataTableBodyComponent}
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @ViewChild(DataTableBodyComponent)
  bodyComponent: DataTableBodyComponent;

  /**
<<<<<<< HEAD
   * Returns if all rows are selected.
   *
   * @readonly
   * @private
   * @type {boolean}
   * @memberOf DatatableComponent
   */
  get allRowsSelected(): boolean {
    return this.selected &&
      this.rows &&
      this.rows.length !== 0 &&
      this.selected.length === this.rows.length;
  }

  element: HTMLElement;
  innerWidth: number;
  pageSize: number;
  bodyHeight: number;
  rowCount: number = 0;
  offsetX: number = 0;
  rowDiffer: KeyValueDiffer<{}, {}>;
  _count: number = 0;

  _rows: any[];
=======
   * Reference to the header component for manually
   * invoking functions on the header.
   *
   * @private
   * @type {DataTableHeaderComponent}
   * @memberOf DatatableComponent
   */
  @ViewChild(DataTableHeaderComponent)
  headerComponent: DataTableHeaderComponent;

  /**
   * Returns if all rows are selected.
   */
  get allRowsSelected(): boolean {
    let allRowsSelected = (this.selected.length === this.rows.length);

    if (this.selectAllRowsOnPage) {
      const indexes = this.bodyComponent.indexes;
      const rowsOnPage = indexes.last - indexes.first;
      allRowsSelected = (this.selected.length === rowsOnPage);
    }

    return this.selected && this.rows &&
      this.rows.length !== 0 && allRowsSelected;
  }

  element: HTMLElement;
  _innerWidth: number;
  pageSize: number;
  bodyHeight: number;
  rowCount: number = 0;
  rowDiffer: KeyValueDiffer<{}, {}>;

  _offsetX = new BehaviorSubject(0);
  _limit: number | undefined;
  _count: number = 0;
  _offset: number = 0;
  _rows: any[];
  _groupRowsBy: string;
  _internalRows: any[];
  _internalColumns: TableColumn[];
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  _columns: TableColumn[];
  _columnTemplates: QueryList<DataTableColumnDirective>;

  constructor(
<<<<<<< HEAD
    private scrollbarHelper: ScrollbarHelper, 
    element: ElementRef, 
=======
    private scrollbarHelper: ScrollbarHelper,
    private cd: ChangeDetectorRef,
    element: ElementRef,
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    differs: KeyValueDiffers) {

    // get ref to elm for measuring
    this.element = element.nativeElement;
<<<<<<< HEAD
    this.rowDiffer = differs.find({}).create(null);
=======
    this.rowDiffer = differs.find({}).create();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  /**
   * Lifecycle hook that is called after data-bound
   * properties of a directive are initialized.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  ngOnInit(): void {
    // need to call this immediatly to size
    // if the table is hidden the visibility
    // listener will invoke this itself upon show
    this.recalculate();
  }

  /**
   * Lifecycle hook that is called after a component's
   * view has been fully initialized.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
   */
  ngAfterViewInit(): void {
    if (!this.externalSorting) {
      const val = sortRows(this._rows, this.columns, this.sorts);
      this._rows = val;
=======
   */
  ngAfterViewInit(): void {
    if (!this.externalSorting) {
      this._internalRows = sortRows(this._rows, this._internalColumns, this.sorts);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }

    // this has to be done to prevent the change detection
    // tree from freaking out because we are readjusting
<<<<<<< HEAD
    setTimeout(() => {
      this.recalculate();

      // emit page for virtual server-side kickoff
      if(this.externalPaging && this.scrollbarV) {
=======
    requestAnimationFrame(() => {
      this.recalculate();

      // emit page for virtual server-side kickoff
      if (this.externalPaging && this.scrollbarV) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        this.page.emit({
          count: this.count,
          pageSize: this.pageSize,
          limit: this.limit,
          offset: 0
        });
      }
    });
  }

  /**
<<<<<<< HEAD
   * Lifecycle hook that is called when Angular dirty checks a directive.
   *
   * @memberOf DatatableComponent
   */
  ngDoCheck(): void {
    if (this.rowDiffer.diff(this.rows)) {
      this.recalculatePages();
=======
   * Lifecycle hook that is called after a component's
   * content has been fully initialized.
   */
  ngAfterContentInit() {
    this.columnTemplates.changes.subscribe(v =>
      this.translateColumns(v));
  }

  /**
   * Translates the templates to the column objects
   */
  translateColumns(val: any) {
    if (val) {
      const arr = val.toArray();
      if (arr.length) {
        this._internalColumns = translateTemplates(arr);
        setColumnDefaults(this._internalColumns);
        this.recalculateColumns();
        this.cd.markForCheck();
      }
    }
  }

  /**
   * Creates a map with the data grouped by the user choice of grouping index
   * 
   * @param originalArray the original array passed via parameter
   * @param groupByIndex  the index of the column to group the data by
   */
  groupArrayBy(originalArray: any, groupBy: any) {
    // create a map to hold groups with their corresponding results
    const map = new Map();
    let i: number = 0;

    originalArray.forEach((item: any) => {
      const key = item[groupBy];
      if (!map.has(key)) {
        map.set(key, [item]);
      } else {
        map.get(key).push(item);
      }
      i++;
    });

    const addGroup = (key: any, value: any) => {
      return {key, value};
    };

    // convert map back to a simple array of objects
    return Array.from(map, x => addGroup(x[0], x[1]));
  }

  /*
  * Lifecycle hook that is called when Angular dirty checks a directive.
  */
  ngDoCheck(): void {
    if (this.rowDiffer.diff(this.rows)) {
      if (!this.externalSorting) {
        this._internalRows = sortRows(this._rows, this._internalColumns, this.sorts);
      } else {
        this._internalRows = [...this.rows];
      }

      this.recalculatePages();
      this.cd.markForCheck();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }
  }

  /**
   * Recalc's the sizes of the grid.
   *
   * Updated automatically on changes to:
   *
   *  - Columns
   *  - Rows
   *  - Paging related
   *
   * Also can be manually invoked or upon window resize.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  recalculate(): void {
    this.recalculateDims();
    this.recalculateColumns();
  }

  /**
   * Window resize handler to update sizes.
<<<<<<< HEAD
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  @HostListener('window:resize')
  @throttleable(5)
  onWindowResize(): void {
    this.recalculate();
  }

  /**
   * Recalulcates the column widths based on column width
   * distribution mode and scrollbar offsets.
<<<<<<< HEAD
   *
   * @param {any[]} [columns=this.columns]
   * @param {number} [forceIdx=-1]
   * @param {boolean} [allowBleed=this.scrollH]
   * @returns {any[]}
   *
   * @memberOf DatatableComponent
   */
  recalculateColumns(
    columns: any[] = this.columns,
    forceIdx: number = -1,
    allowBleed: boolean = this.scrollbarH): any[] {

    if (!columns) return;

    let width = this.innerWidth;
=======
   */
  recalculateColumns(
    columns: any[] = this._internalColumns,
    forceIdx: number = -1,
    allowBleed: boolean = this.scrollbarH): any[] | undefined {

    if (!columns) return undefined;

    let width = this._innerWidth;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    if (this.scrollbarV) {
      width = width - this.scrollbarHelper.width;
    }

    if (this.columnMode === ColumnMode.force) {
      forceFillColumnWidths(columns, width, forceIdx, allowBleed);
    } else if (this.columnMode === ColumnMode.flex) {
      adjustColumnWidths(columns, width);
    }

    return columns;
  }

  /**
   * Recalculates the dimensions of the table size.
   * Internally calls the page size and row count calcs too.
   *
<<<<<<< HEAD
   * @memberOf DatatableComponent
   */
  recalculateDims(): void {
    const dims = this.element.getBoundingClientRect();
    this.innerWidth = Math.floor(dims.width);
=======
   */
  recalculateDims(): void {
    const dims = this.element.getBoundingClientRect();
    this._innerWidth = Math.floor(dims.width);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    if (this.scrollbarV) {
      let height = dims.height;
      if (this.headerHeight) height = height - this.headerHeight;
      if (this.footerHeight) height = height - this.footerHeight;
      this.bodyHeight = height;
    }

    this.recalculatePages();
  }

  /**
   * Recalculates the pages after a update.
<<<<<<< HEAD
   *
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  recalculatePages(): void {
    this.pageSize = this.calcPageSize();
    this.rowCount = this.calcRowCount();
  }

  /**
   * Body triggered a page event.
<<<<<<< HEAD
   *
   * @param {*} { offset }
   *
   * @memberOf DatatableComponent
   */
  onBodyPage({offset}: any): void {
=======
   */
  onBodyPage({ offset }: any): void {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    this.offset = offset;

    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
  }

  /**
   * The body triggered a scroll event.
<<<<<<< HEAD
   *
   * @param {MouseEvent} event
   *
   * @memberOf DatatableComponent
   */
  onBodyScroll(event: MouseEvent): void {
    this.offsetX = event.offsetX;
    this.scroll.emit(event);
=======
   */
  onBodyScroll(event: MouseEvent): void {
    this._offsetX.next(event.offsetX);
    this.scroll.emit(event);
    this.cd.detectChanges();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  /**
   * The footer triggered a page event.
<<<<<<< HEAD
   *
   * @param {*} event
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  onFooterPage(event: any) {
    this.offset = event.page - 1;
    this.bodyComponent.updateOffsetY(this.offset);

    this.page.emit({
      count: this.count,
      pageSize: this.pageSize,
      limit: this.limit,
      offset: this.offset
    });
<<<<<<< HEAD
=======

    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  /**
   * Recalculates the sizes of the page
<<<<<<< HEAD
   *
   * @param {any[]} [val=this.rows]
   * @returns {number}
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  calcPageSize(val: any[] = this.rows): number {
    // Keep the page size constant even if the row has been expanded.
    // This is because an expanded row is still considered to be a child of
    // the original row.  Hence calculation would use rowHeight only.
    if (this.scrollbarV) {
      const size = Math.ceil(this.bodyHeight / this.rowHeight);
      return Math.max(size, 0);
    }

    // if limit is passed, we are paging
<<<<<<< HEAD
    if (this.limit !== undefined) return this.limit;

    // otherwise use row length
    if (val) return val.length;
=======
    if (this.limit !== undefined) {
      return this.limit;
    }

    // otherwise use row length
    if (val) {
      return val.length;
    }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    // other empty :(
    return 0;
  }

  /**
   * Calculates the row count.
<<<<<<< HEAD
   *
   * @param {any[]} [val=this.rows]
   * @returns {number}
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  calcRowCount(val: any[] = this.rows): number {
    if (!this.externalPaging) {
      if (!val) return 0;
<<<<<<< HEAD
      return val.length;
=======

      if (this.groupedRows) {
        return this.groupedRows.length;
      } else {
        return val.length;
      }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }

    return this.count;
  }

  /**
   * The header triggered a contextmenu event.
<<<<<<< HEAD
   *
   * @param {*} { event, column }
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  onColumnContextmenu({ event, column }: any): void {
    this.tableContextmenu.emit({ event, type: ContextmenuType.header, content: column });
  }

  /**
   * The body triggered a contextmenu event.
<<<<<<< HEAD
   *
   * @param {*} { event, row }
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  onRowContextmenu({ event, row }: any): void {
    this.tableContextmenu.emit({ event, type: ContextmenuType.body, content: row });
  }

  /**
   * The header triggered a column resize event.
<<<<<<< HEAD
   *
   * @param {*} { column, newValue }
   *
   * @memberOf DatatableComponent
   */
  onColumnResize({column, newValue}: any): void {
=======
   */
  onColumnResize({ column, newValue }: any): void {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    /* Safari/iOS 10.2 workaround */
    if (column === undefined) {
      return;
    }

    let idx: number;
<<<<<<< HEAD
    const cols = this.columns.map((c, i) => {
=======
    const cols = this._internalColumns.map((c, i) => {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      c = { ...c };

      if (c.$$id === column.$$id) {
        idx = i;
        c.width = newValue;

        // set this so we can force the column
        // width distribution to be to this value
        c.$$oldWidth = newValue;
      }

      return c;
    });

    this.recalculateColumns(cols, idx);
<<<<<<< HEAD
    this._columns = cols;
=======
    this._internalColumns = cols;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    this.resize.emit({
      column,
      newValue
    });
  }

  /**
   * The header triggered a column re-order event.
<<<<<<< HEAD
   *
   * @param {*} { column, newValue, prevValue }
   *
   * @memberOf DatatableComponent
   */
  onColumnReorder({column, newValue, prevValue}: any): void {
    const cols = this.columns.map(c => {
=======
   */
  onColumnReorder({ column, newValue, prevValue }: any): void {
    const cols = this._internalColumns.map(c => {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      return { ...c };
    });

    const prevCol = cols[newValue];
    cols[newValue] = column;
    cols[prevValue] = prevCol;

<<<<<<< HEAD
    this.columns = cols;
=======
    this._internalColumns = cols;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    this.reorder.emit({
      column,
      newValue,
      prevValue
    });
  }

  /**
   * The header triggered a column sort event.
<<<<<<< HEAD
   *
   * @param {*} event
   *
   * @memberOf DatatableComponent
   */
  onColumnSort(event: any): void {
    const {sorts} = event;
=======
   */
  onColumnSort(event: any): void {
    // clean selected rows
    if (this.selectAllRowsOnPage) {
      this.selected = [];
      this.select.emit({
        selected: this.selected
      });
    }

    const { sorts } = event;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    // this could be optimized better since it will resort
    // the rows again on the 'push' detection...
    if (this.externalSorting === false) {
      // don't use normal setter so we don't resort
<<<<<<< HEAD
      this._rows = sortRows(this.rows, this.columns, sorts);
=======
      this._internalRows = sortRows(this.rows, this._internalColumns, sorts);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }

    this.sorts = sorts;
    // Always go to first page when sorting to see the newly sorted data
    this.offset = 0;
    this.bodyComponent.updateOffsetY(this.offset);
    this.sort.emit(event);
  }

  /**
   * Toggle all row selection
<<<<<<< HEAD
   *
   * @param {*} event
   *
   * @memberOf DatatableComponent
   */
  onHeaderSelect(event: any): void {
    // before we splice, chk if we currently have all selected
    const allSelected = this.selected.length === this.rows.length;

    // remove all existing either way
    this.selected = [];

    // do the opposite here
    if (!allSelected) {
      this.selected.push(...this.rows);
=======
   */
  onHeaderSelect(event: any): void {

    if (this.selectAllRowsOnPage) {
      // before we splice, chk if we currently have all selected
      const first = this.bodyComponent.indexes.first;
      const last = this.bodyComponent.indexes.last;
      const allSelected = this.selected.length === (last - first);

      // remove all existing either way
      this.selected = [];

      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this._internalRows.slice(first, last));
      }
    } else {
      // before we splice, chk if we currently have all selected
      const allSelected = this.selected.length === this.rows.length;
      // remove all existing either way
      this.selected = [];
      // do the opposite here
      if (!allSelected) {
        this.selected.push(...this.rows);
      }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }

    this.select.emit({
      selected: this.selected
    });
  }

  /**
   * A row was selected from body
<<<<<<< HEAD
   *
   * @param {*} event
   *
   * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
   */
  onBodySelect(event: any): void {
    this.select.emit(event);
  }
<<<<<<< HEAD

=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
}
