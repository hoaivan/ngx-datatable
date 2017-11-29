"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../utils");
var services_1 = require("../services");
var types_1 = require("../types");
var body_1 = require("./body");
<<<<<<< HEAD
var columns_1 = require("./columns");
var row_detail_1 = require("./row-detail");
var footer_1 = require("./footer");
var DatatableComponent = (function () {
    function DatatableComponent(scrollbarHelper, element, differs) {
        this.scrollbarHelper = scrollbarHelper;
=======
var body_group_header_directive_1 = require("./body/body-group-header.directive");
var columns_1 = require("./columns");
var row_detail_1 = require("./row-detail");
var footer_1 = require("./footer");
var header_1 = require("./header");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(scrollbarHelper, cd, element, differs) {
        this.scrollbarHelper = scrollbarHelper;
        this.cd = cd;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
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
        this.selected = [];
        /**
         * Enable vertical scrollbars
<<<<<<< HEAD
         *
         * @type {boolean}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.scrollbarV = false;
        /**
         * Enable horz scrollbars
<<<<<<< HEAD
         *
         * @type {boolean}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.scrollbarH = false;
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
        this.rowHeight = 30;
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
        this.columnMode = types_1.ColumnMode.standard;
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
        this.headerHeight = 30;
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
        this.footerHeight = 0;
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
        this.externalPaging = false;
        /**
         * If the table should use external sorting or
         * the built-in basic sorting.
<<<<<<< HEAD
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.externalSorting = false;
        /**
         * The page size to be shown.
         * Default value: `undefined`
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.limit = undefined;
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         *
         * @type {number}
         * @memberOf DatatableComponent
         */
        this.offset = 0;
        /**
         * Show the linear loading bar.
         * Default value: `false`
         *
         * @type {boolean}
         * @memberOf DatatableComponent
=======
         */
        this.externalSorting = false;
        /**
         * Show the linear loading bar.
         * Default value: `false`
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.loadingIndicator = false;
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
        this.reorderable = true;
        /**
         * The type of sorting
<<<<<<< HEAD
         *
         * @type {SortType}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.sortType = types_1.SortType.single;
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
        this.sorts = [];
        /**
         * Css class overrides
<<<<<<< HEAD
         *
         * @type {*}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.cssClasses = {
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
        this.messages = {
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
         */
        this.rowIdentity = (function (x) { return x; });
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
         */
        this.scroll = new core_1.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
         */
        this.rowIdentity = (function (x) { return x; });
        /**
         * A boolean you can use to set the detault behaviour of rows and groups
         * whether they will start expanded or not. If ommited the default is NOT expanded.
         *
         */
        this.groupExpansionDefault = false;
        /**
         * Property to which you can use for determining select all
         * rows on current page or not.
         *
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        this.selectAllRowsOnPage = false;
        /**
         * Body was scrolled typically in a `scrollbarV:true` scenario.
         */
        this.scroll = new core_1.EventEmitter();
        /**
         * A cell or row was focused via keyboard or mouse click.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.activate = new core_1.EventEmitter();
        /**
         * A cell or row was selected.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.select = new core_1.EventEmitter();
        /**
         * Column sort was invoked.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.sort = new core_1.EventEmitter();
        /**
         * The table was paged either triggered by the pager or the body scroll.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.page = new core_1.EventEmitter();
        /**
         * Columns were re-ordered.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.reorder = new core_1.EventEmitter();
        /**
         * Column was resized.
<<<<<<< HEAD
         *
         * @type {EventEmitter<any>}
         * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        this.resize = new core_1.EventEmitter();
        /**
         * The context menu was invoked on the table.
         * type indicates whether the header or the body was clicked.
         * content contains either the column or the row that was clicked.
<<<<<<< HEAD
         *
         * @memberOf DatatableComponent
         */
        this.tableContextmenu = new core_1.EventEmitter(false);
        this.rowCount = 0;
        this.offsetX = 0;
        this._count = 0;
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create(null);
=======
         */
        this.tableContextmenu = new core_1.EventEmitter(false);
        this.rowCount = 0;
        this._offsetX = new BehaviorSubject_1.BehaviorSubject(0);
        this._count = 0;
        this._offset = 0;
        // get ref to elm for measuring
        this.element = element.nativeElement;
        this.rowDiffer = differs.find({}).create();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    }
    Object.defineProperty(DatatableComponent.prototype, "rows", {
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
        get: function () {
            return this._rows;
        },
        /**
         * Rows that are displayed in the table.
<<<<<<< HEAD
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            // auto sort on new updates
            if (!this.externalSorting) {
                val = utils_1.sortRows(val, this.columns, this.sorts);
            }
            this._rows = val;
            // recalculate sizes/etc
            this.recalculate();
=======
         */
        set: function (val) {
            this._rows = val;
            // auto sort on new updates
            if (!this.externalSorting) {
                this._internalRows = utils_1.sortRows(val, this._internalColumns, this.sorts);
            }
            else {
                this._internalRows = val.slice();
            }
            // recalculate sizes/etc
            this.recalculate();
            if (this._rows && this._groupRowsBy) {
                // If a column has been specified in _groupRowsBy created a new array with the data grouped by that row
                this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
            }
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "groupRowsBy", {
        get: function () {
            return this._groupRowsBy;
        },
        /**
         * This attribute allows the user to set the name of the column to group the data with
         */
        set: function (val) {
            if (val) {
                this._groupRowsBy = val;
                if (this._rows && this._groupRowsBy) {
                    // cretes a new array with the data grouped
                    this.groupedRows = this.groupArrayBy(this._rows, this._groupRowsBy);
                }
            }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columns", {
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
        get: function () {
            return this._columns;
        },
        /**
         * Columns to be displayed.
<<<<<<< HEAD
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            if (val) {
                utils_1.setColumnDefaults(val);
                this.recalculateColumns(val);
=======
         */
        set: function (val) {
            if (val) {
                this._internalColumns = val.slice();
                utils_1.setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
            }
            this._columns = val;
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
         *
         * @readonly
         * @type {number}
         * @memberOf DatatableComponent
=======
    Object.defineProperty(DatatableComponent.prototype, "limit", {
        /**
         * Gets the limit.
         */
        get: function () {
            return this._limit;
        },
        /**
         * The page size to be shown.
         * Default value: `undefined`
         */
        set: function (val) {
            this._limit = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "count", {
        /**
         * Gets the count.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        get: function () {
            return this._count;
        },
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
        set: function (val) {
            this._count = val;
            // recalculate sizes/etc
            this.recalculate();
        },
        enumerable: true,
        configurable: true
    });
<<<<<<< HEAD
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
         *
         * @readonly
         * @type {boolean}
         * @memberOf DatatableComponent
=======
    Object.defineProperty(DatatableComponent.prototype, "offset", {
        get: function () {
            return Math.max(Math.min(this._offset, Math.ceil(this.rowCount / this.pageSize) - 1), 0);
        },
        /**
         * The current offset ( page - 1 ) shown.
         * Default value: `0`
         */
        set: function (val) {
            this._offset = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedHeader", {
        /**
         * CSS class applied if the header height if fixed height.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
         */
        get: function () {
            var headerHeight = this.headerHeight;
            return (typeof headerHeight === 'string') ?
                headerHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isFixedRow", {
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
        get: function () {
            var rowHeight = this.rowHeight;
            return (typeof rowHeight === 'string') ?
                rowHeight !== 'auto' : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isVertScroll", {
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
        get: function () {
            return this.scrollbarV;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isHorScroll", {
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
        get: function () {
            return this.scrollbarH;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSelectable", {
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
        get: function () {
            return this.selectionType !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCheckboxSelection", {
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
        get: function () {
            return this.selectionType === types_1.SelectionType.checkbox;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isCellSelection", {
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
        get: function () {
            return this.selectionType === types_1.SelectionType.cell;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isSingleSelection", {
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
        get: function () {
            return this.selectionType === types_1.SelectionType.single;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiSelection", {
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
        get: function () {
            return this.selectionType === types_1.SelectionType.multi;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "isMultiClickSelection", {
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
        get: function () {
            return this.selectionType === types_1.SelectionType.multiClick;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "columnTemplates", {
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
        get: function () {
            return this._columnTemplates;
        },
        /**
         * Column templates gathered from `ContentChildren`
         * if described in your markup.
<<<<<<< HEAD
         *
         * @memberOf DatatableComponent
         */
        set: function (val) {
            this._columnTemplates = val;
            if (val) {
                // only set this if results were brought back
                var arr = val.toArray();
                if (arr.length) {
                    // translate them to normal objects
                    this.columns = utils_1.translateTemplates(arr);
                }
            }
=======
         */
        set: function (val) {
            this._columnTemplates = val;
            this.translateColumns(val);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DatatableComponent.prototype, "allRowsSelected", {
        /**
         * Returns if all rows are selected.
<<<<<<< HEAD
         *
         * @readonly
         * @private
         * @type {boolean}
         * @memberOf DatatableComponent
         */
        get: function () {
            return this.selected &&
                this.rows &&
                this.rows.length !== 0 &&
                this.selected.length === this.rows.length;
=======
         */
        get: function () {
            var allRowsSelected = (this.selected.length === this.rows.length);
            if (this.selectAllRowsOnPage) {
                var indexes = this.bodyComponent.indexes;
                var rowsOnPage = indexes.last - indexes.first;
                allRowsSelected = (this.selected.length === rowsOnPage);
            }
            return this.selected && this.rows &&
                this.rows.length !== 0 && allRowsSelected;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Lifecycle hook that is called after data-bound
     * properties of a directive are initialized.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.ngOnInit = function () {
        // need to call this immediatly to size
        // if the table is hidden the visibility
        // listener will invoke this itself upon show
        this.recalculate();
    };
    /**
     * Lifecycle hook that is called after a component's
     * view has been fully initialized.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.externalSorting) {
<<<<<<< HEAD
            var val = utils_1.sortRows(this._rows, this.columns, this.sorts);
            this._rows = val;
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        setTimeout(function () {
=======
            this._internalRows = utils_1.sortRows(this._rows, this._internalColumns, this.sorts);
        }
        // this has to be done to prevent the change detection
        // tree from freaking out because we are readjusting
        requestAnimationFrame(function () {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
            _this.recalculate();
            // emit page for virtual server-side kickoff
            if (_this.externalPaging && _this.scrollbarV) {
                _this.page.emit({
                    count: _this.count,
                    pageSize: _this.pageSize,
                    limit: _this.limit,
                    offset: 0
                });
            }
        });
    };
    /**
<<<<<<< HEAD
     * Lifecycle hook that is called when Angular dirty checks a directive.
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.rows)) {
            this.recalculatePages();
=======
     * Lifecycle hook that is called after a component's
     * content has been fully initialized.
     */
    DatatableComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.columnTemplates.changes.subscribe(function (v) {
            return _this.translateColumns(v);
        });
    };
    /**
     * Translates the templates to the column objects
     */
    DatatableComponent.prototype.translateColumns = function (val) {
        if (val) {
            var arr = val.toArray();
            if (arr.length) {
                this._internalColumns = utils_1.translateTemplates(arr);
                utils_1.setColumnDefaults(this._internalColumns);
                this.recalculateColumns();
                this.cd.markForCheck();
            }
        }
    };
    /**
     * Creates a map with the data grouped by the user choice of grouping index
     *
     * @param originalArray the original array passed via parameter
     * @param groupByIndex  the index of the column to group the data by
     */
    DatatableComponent.prototype.groupArrayBy = function (originalArray, groupBy) {
        // create a map to hold groups with their corresponding results
        var map = new Map();
        var i = 0;
        originalArray.forEach(function (item) {
            var key = item[groupBy];
            if (!map.has(key)) {
                map.set(key, [item]);
            }
            else {
                map.get(key).push(item);
            }
            i++;
        });
        var addGroup = function (key, value) {
            return { key: key, value: value };
        };
        // convert map back to a simple array of objects
        return Array.from(map, function (x) { return addGroup(x[0], x[1]); });
    };
    /*
    * Lifecycle hook that is called when Angular dirty checks a directive.
    */
    DatatableComponent.prototype.ngDoCheck = function () {
        if (this.rowDiffer.diff(this.rows)) {
            if (!this.externalSorting) {
                this._internalRows = utils_1.sortRows(this._rows, this._internalColumns, this.sorts);
            }
            else {
                this._internalRows = this.rows.slice();
            }
            this.recalculatePages();
            this.cd.markForCheck();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
    };
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
    DatatableComponent.prototype.recalculate = function () {
        this.recalculateDims();
        this.recalculateColumns();
    };
    /**
     * Window resize handler to update sizes.
<<<<<<< HEAD
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.onWindowResize = function () {
        this.recalculate();
    };
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
    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this.columns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return;
        var width = this.innerWidth;
=======
     */
    DatatableComponent.prototype.recalculateColumns = function (columns, forceIdx, allowBleed) {
        if (columns === void 0) { columns = this._internalColumns; }
        if (forceIdx === void 0) { forceIdx = -1; }
        if (allowBleed === void 0) { allowBleed = this.scrollbarH; }
        if (!columns)
            return undefined;
        var width = this._innerWidth;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        if (this.scrollbarV) {
            width = width - this.scrollbarHelper.width;
        }
        if (this.columnMode === types_1.ColumnMode.force) {
            utils_1.forceFillColumnWidths(columns, width, forceIdx, allowBleed);
        }
        else if (this.columnMode === types_1.ColumnMode.flex) {
            utils_1.adjustColumnWidths(columns, width);
        }
        return columns;
    };
    /**
     * Recalculates the dimensions of the table size.
     * Internally calls the page size and row count calcs too.
     *
<<<<<<< HEAD
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.recalculateDims = function () {
        var dims = this.element.getBoundingClientRect();
        this.innerWidth = Math.floor(dims.width);
=======
     */
    DatatableComponent.prototype.recalculateDims = function () {
        var dims = this.element.getBoundingClientRect();
        this._innerWidth = Math.floor(dims.width);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        if (this.scrollbarV) {
            var height = dims.height;
            if (this.headerHeight)
                height = height - this.headerHeight;
            if (this.footerHeight)
                height = height - this.footerHeight;
            this.bodyHeight = height;
        }
        this.recalculatePages();
    };
    /**
     * Recalculates the pages after a update.
<<<<<<< HEAD
     *
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.recalculatePages = function () {
        this.pageSize = this.calcPageSize();
        this.rowCount = this.calcRowCount();
    };
    /**
     * Body triggered a page event.
<<<<<<< HEAD
     *
     * @param {*} { offset }
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.onBodyPage = function (_a) {
        var offset = _a.offset;
        this.offset = offset;
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
    };
    /**
     * The body triggered a scroll event.
<<<<<<< HEAD
     *
     * @param {MouseEvent} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onBodyScroll = function (event) {
        this.offsetX = event.offsetX;
        this.scroll.emit(event);
    };
    /**
     * The footer triggered a page event.
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
=======
     */
    DatatableComponent.prototype.onBodyScroll = function (event) {
        this._offsetX.next(event.offsetX);
        this.scroll.emit(event);
        this.cd.detectChanges();
    };
    /**
     * The footer triggered a page event.
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.onFooterPage = function (event) {
        this.offset = event.page - 1;
        this.bodyComponent.updateOffsetY(this.offset);
        this.page.emit({
            count: this.count,
            pageSize: this.pageSize,
            limit: this.limit,
            offset: this.offset
        });
<<<<<<< HEAD
    };
    /**
     * Recalculates the sizes of the page
     *
     * @param {any[]} [val=this.rows]
     * @returns {number}
     *
     * @memberOf DatatableComponent
=======
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
    };
    /**
     * Recalculates the sizes of the page
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.calcPageSize = function (val) {
        if (val === void 0) { val = this.rows; }
        // Keep the page size constant even if the row has been expanded.
        // This is because an expanded row is still considered to be a child of
        // the original row.  Hence calculation would use rowHeight only.
        if (this.scrollbarV) {
            var size = Math.ceil(this.bodyHeight / this.rowHeight);
            return Math.max(size, 0);
        }
        // if limit is passed, we are paging
<<<<<<< HEAD
        if (this.limit !== undefined)
            return this.limit;
        // otherwise use row length
        if (val)
            return val.length;
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
    };
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
    DatatableComponent.prototype.calcRowCount = function (val) {
        if (val === void 0) { val = this.rows; }
        if (!this.externalPaging) {
            if (!val)
                return 0;
<<<<<<< HEAD
            return val.length;
=======
            if (this.groupedRows) {
                return this.groupedRows.length;
            }
            else {
                return val.length;
            }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
        return this.count;
    };
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
    DatatableComponent.prototype.onColumnContextmenu = function (_a) {
        var event = _a.event, column = _a.column;
        this.tableContextmenu.emit({ event: event, type: types_1.ContextmenuType.header, content: column });
    };
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
    DatatableComponent.prototype.onRowContextmenu = function (_a) {
        var event = _a.event, row = _a.row;
        this.tableContextmenu.emit({ event: event, type: types_1.ContextmenuType.body, content: row });
    };
    /**
     * The header triggered a column resize event.
<<<<<<< HEAD
     *
     * @param {*} { column, newValue }
     *
     * @memberOf DatatableComponent
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.onColumnResize = function (_a) {
        var column = _a.column, newValue = _a.newValue;
        /* Safari/iOS 10.2 workaround */
        if (column === undefined) {
            return;
        }
        var idx;
<<<<<<< HEAD
        var cols = this.columns.map(function (c, i) {
=======
        var cols = this._internalColumns.map(function (c, i) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
            c = __assign({}, c);
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
            column: column,
            newValue: newValue
        });
    };
    /**
     * The header triggered a column re-order event.
<<<<<<< HEAD
     *
     * @param {*} { column, newValue, prevValue }
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onColumnReorder = function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        var cols = this.columns.map(function (c) {
=======
     */
    DatatableComponent.prototype.onColumnReorder = function (_a) {
        var column = _a.column, newValue = _a.newValue, prevValue = _a.prevValue;
        var cols = this._internalColumns.map(function (c) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
            return __assign({}, c);
        });
        var prevCol = cols[newValue];
        cols[newValue] = column;
        cols[prevValue] = prevCol;
<<<<<<< HEAD
        this.columns = cols;
=======
        this._internalColumns = cols;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        this.reorder.emit({
            column: column,
            newValue: newValue,
            prevValue: prevValue
        });
    };
    /**
     * The header triggered a column sort event.
<<<<<<< HEAD
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onColumnSort = function (event) {
=======
     */
    DatatableComponent.prototype.onColumnSort = function (event) {
        // clean selected rows
        if (this.selectAllRowsOnPage) {
            this.selected = [];
            this.select.emit({
                selected: this.selected
            });
        }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        var sorts = event.sorts;
        // this could be optimized better since it will resort
        // the rows again on the 'push' detection...
        if (this.externalSorting === false) {
            // don't use normal setter so we don't resort
<<<<<<< HEAD
            this._rows = utils_1.sortRows(this.rows, this.columns, sorts);
=======
            this._internalRows = utils_1.sortRows(this.rows, this._internalColumns, sorts);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
        this.sorts = sorts;
        // Always go to first page when sorting to see the newly sorted data
        this.offset = 0;
        this.bodyComponent.updateOffsetY(this.offset);
        this.sort.emit(event);
    };
    /**
     * Toggle all row selection
<<<<<<< HEAD
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
     */
    DatatableComponent.prototype.onHeaderSelect = function (event) {
        // before we splice, chk if we currently have all selected
        var allSelected = this.selected.length === this.rows.length;
        // remove all existing either way
        this.selected = [];
        // do the opposite here
        if (!allSelected) {
            (_a = this.selected).push.apply(_a, this.rows);
=======
     */
    DatatableComponent.prototype.onHeaderSelect = function (event) {
        if (this.selectAllRowsOnPage) {
            // before we splice, chk if we currently have all selected
            var first = this.bodyComponent.indexes.first;
            var last = this.bodyComponent.indexes.last;
            var allSelected = this.selected.length === (last - first);
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_a = this.selected).push.apply(_a, this._internalRows.slice(first, last));
            }
        }
        else {
            // before we splice, chk if we currently have all selected
            var allSelected = this.selected.length === this.rows.length;
            // remove all existing either way
            this.selected = [];
            // do the opposite here
            if (!allSelected) {
                (_b = this.selected).push.apply(_b, this.rows);
            }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        }
        this.select.emit({
            selected: this.selected
        });
<<<<<<< HEAD
        var _a;
    };
    /**
     * A row was selected from body
     *
     * @param {*} event
     *
     * @memberOf DatatableComponent
=======
        var _a, _b;
    };
    /**
     * A row was selected from body
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
     */
    DatatableComponent.prototype.onBodySelect = function (event) {
        this.select.emit(event);
    };
<<<<<<< HEAD
    DatatableComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ngx-datatable',
                    template: "\n    <div\n      visibilityObserver\n      (visible)=\"recalculate()\">\n      <datatable-header\n        *ngIf=\"headerHeight\"\n        [sorts]=\"sorts\"\n        [sortType]=\"sortType\"\n        [scrollbarH]=\"scrollbarH\"\n        [innerWidth]=\"innerWidth\"\n        [offsetX]=\"offsetX\"\n        [columns]=\"columns\"\n        [headerHeight]=\"headerHeight\"\n        [reorderable]=\"reorderable\"\n        [sortAscendingIcon]=\"cssClasses.sortAscending\"\n        [sortDescendingIcon]=\"cssClasses.sortDescending\"\n        [allRowsSelected]=\"allRowsSelected\"\n        [selectionType]=\"selectionType\"\n        (sort)=\"onColumnSort($event)\"\n        (resize)=\"onColumnResize($event)\"\n        (reorder)=\"onColumnReorder($event)\"\n        (select)=\"onHeaderSelect($event)\"\n        (columnContextmenu)=\"onColumnContextmenu($event)\">\n      </datatable-header>\n      <datatable-body\n        [rows]=\"rows\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [externalPaging]=\"externalPaging\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowCount\"\n        [offset]=\"offset\"\n        [trackByProp]=\"trackByProp\"\n        [columns]=\"columns\"\n        [pageSize]=\"pageSize\"\n        [offsetX]=\"offsetX\"\n        [rowDetail]=\"rowDetail\"\n        [selected]=\"selected\"\n        [innerWidth]=\"innerWidth\"\n        [bodyHeight]=\"bodyHeight\"\n        [selectionType]=\"selectionType\"\n        [emptyMessage]=\"messages.emptyMessage\"\n        [rowIdentity]=\"rowIdentity\"\n        [rowClass]=\"rowClass\"\n        [selectCheck]=\"selectCheck\"\n        (page)=\"onBodyPage($event)\"\n        (activate)=\"activate.emit($event)\"\n        (rowContextmenu)=\"onRowContextmenu($event)\"\n        (select)=\"onBodySelect($event)\"\n        (scroll)=\"onBodyScroll($event)\">\n      </datatable-body>\n      <datatable-footer\n        *ngIf=\"footerHeight\"\n        [rowCount]=\"rowCount\"\n        [pageSize]=\"pageSize\"\n        [offset]=\"offset\"\n        [footerHeight]=\"footerHeight\"\n        [footerTemplate]=\"footer\"\n        [totalMessage]=\"messages.totalMessage\"\n        [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n        [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n        [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n        [selectedCount]=\"selected.length\"\n        [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n        [pagerNextIcon]=\"cssClasses.pagerNext\"\n        (page)=\"onFooterPage($event)\">\n      </datatable-footer>\n    </div>\n  ",
                    encapsulation: core_1.ViewEncapsulation.None,
                    styleUrls: ['./datatable.component.css'],
                    host: {
                        class: 'ngx-datatable'
                    }
                },] },
    ];
    /** @nocollapse */
    DatatableComponent.ctorParameters = function () { return [
        { type: services_1.ScrollbarHelper, },
        { type: core_1.ElementRef, },
        { type: core_1.KeyValueDiffers, },
    ]; };
    DatatableComponent.propDecorators = {
        'rows': [{ type: core_1.Input },],
        'columns': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'scrollbarV': [{ type: core_1.Input },],
        'scrollbarH': [{ type: core_1.Input },],
        'rowHeight': [{ type: core_1.Input },],
        'columnMode': [{ type: core_1.Input },],
        'headerHeight': [{ type: core_1.Input },],
        'footerHeight': [{ type: core_1.Input },],
        'externalPaging': [{ type: core_1.Input },],
        'externalSorting': [{ type: core_1.Input },],
        'limit': [{ type: core_1.Input },],
        'count': [{ type: core_1.Input },],
        'offset': [{ type: core_1.Input },],
        'loadingIndicator': [{ type: core_1.Input },],
        'selectionType': [{ type: core_1.Input },],
        'reorderable': [{ type: core_1.Input },],
        'sortType': [{ type: core_1.Input },],
        'sorts': [{ type: core_1.Input },],
        'cssClasses': [{ type: core_1.Input },],
        'messages': [{ type: core_1.Input },],
        'rowIdentity': [{ type: core_1.Input },],
        'rowClass': [{ type: core_1.Input },],
        'selectCheck': [{ type: core_1.Input },],
        'trackByProp': [{ type: core_1.Input },],
        'scroll': [{ type: core_1.Output },],
        'activate': [{ type: core_1.Output },],
        'select': [{ type: core_1.Output },],
        'sort': [{ type: core_1.Output },],
        'page': [{ type: core_1.Output },],
        'reorder': [{ type: core_1.Output },],
        'resize': [{ type: core_1.Output },],
        'tableContextmenu': [{ type: core_1.Output },],
        'isFixedHeader': [{ type: core_1.HostBinding, args: ['class.fixed-header',] },],
        'isFixedRow': [{ type: core_1.HostBinding, args: ['class.fixed-row',] },],
        'isVertScroll': [{ type: core_1.HostBinding, args: ['class.scroll-vertical',] },],
        'isHorScroll': [{ type: core_1.HostBinding, args: ['class.scroll-horz',] },],
        'isSelectable': [{ type: core_1.HostBinding, args: ['class.selectable',] },],
        'isCheckboxSelection': [{ type: core_1.HostBinding, args: ['class.checkbox-selection',] },],
        'isCellSelection': [{ type: core_1.HostBinding, args: ['class.cell-selection',] },],
        'isSingleSelection': [{ type: core_1.HostBinding, args: ['class.single-selection',] },],
        'isMultiSelection': [{ type: core_1.HostBinding, args: ['class.multi-selection',] },],
        'isMultiClickSelection': [{ type: core_1.HostBinding, args: ['class.multi-click-selection',] },],
        'columnTemplates': [{ type: core_1.ContentChildren, args: [columns_1.DataTableColumnDirective,] },],
        'rowDetail': [{ type: core_1.ContentChild, args: [row_detail_1.DatatableRowDetailDirective,] },],
        'footer': [{ type: core_1.ContentChild, args: [footer_1.DatatableFooterDirective,] },],
        'bodyComponent': [{ type: core_1.ViewChild, args: [body_1.DataTableBodyComponent,] },],
        'onWindowResize': [{ type: core_1.HostListener, args: ['window:resize',] },],
    };
    __decorate([
=======
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DatatableComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DatatableComponent.prototype, "groupRowsBy", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "groupedRows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DatatableComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "selected", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "scrollbarV", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "scrollbarH", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "columnMode", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "headerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DatatableComponent.prototype, "footerHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "externalPaging", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "externalSorting", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "limit", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "count", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DatatableComponent.prototype, "offset", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "loadingIndicator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "selectionType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "reorderable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "sortType", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], DatatableComponent.prototype, "sorts", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "cssClasses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "messages", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DatatableComponent.prototype, "rowIdentity", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "rowClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "selectCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DatatableComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "groupExpansionDefault", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DatatableComponent.prototype, "trackByProp", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "selectAllRowsOnPage", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "scroll", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "select", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "sort", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "page", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "reorder", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DatatableComponent.prototype, "resize", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "tableContextmenu", void 0);
    __decorate([
        core_1.HostBinding('class.fixed-header'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isFixedHeader", null);
    __decorate([
        core_1.HostBinding('class.fixed-row'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isFixedRow", null);
    __decorate([
        core_1.HostBinding('class.scroll-vertical'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isVertScroll", null);
    __decorate([
        core_1.HostBinding('class.scroll-horz'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isHorScroll", null);
    __decorate([
        core_1.HostBinding('class.selectable'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isSelectable", null);
    __decorate([
        core_1.HostBinding('class.checkbox-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isCheckboxSelection", null);
    __decorate([
        core_1.HostBinding('class.cell-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isCellSelection", null);
    __decorate([
        core_1.HostBinding('class.single-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isSingleSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isMultiSelection", null);
    __decorate([
        core_1.HostBinding('class.multi-click-selection'),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], DatatableComponent.prototype, "isMultiClickSelection", null);
    __decorate([
        core_1.ContentChildren(columns_1.DataTableColumnDirective),
        __metadata("design:type", core_1.QueryList),
        __metadata("design:paramtypes", [core_1.QueryList])
    ], DatatableComponent.prototype, "columnTemplates", null);
    __decorate([
        core_1.ContentChild(row_detail_1.DatatableRowDetailDirective),
        __metadata("design:type", row_detail_1.DatatableRowDetailDirective)
    ], DatatableComponent.prototype, "rowDetail", void 0);
    __decorate([
        core_1.ContentChild(body_group_header_directive_1.DatatableGroupHeaderDirective),
        __metadata("design:type", body_group_header_directive_1.DatatableGroupHeaderDirective)
    ], DatatableComponent.prototype, "groupHeader", void 0);
    __decorate([
        core_1.ContentChild(footer_1.DatatableFooterDirective),
        __metadata("design:type", footer_1.DatatableFooterDirective)
    ], DatatableComponent.prototype, "footer", void 0);
    __decorate([
        core_1.ViewChild(body_1.DataTableBodyComponent),
        __metadata("design:type", body_1.DataTableBodyComponent)
    ], DatatableComponent.prototype, "bodyComponent", void 0);
    __decorate([
        core_1.ViewChild(header_1.DataTableHeaderComponent),
        __metadata("design:type", header_1.DataTableHeaderComponent)
    ], DatatableComponent.prototype, "headerComponent", void 0);
    __decorate([
        core_1.HostListener('window:resize'),
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        utils_1.throttleable(5),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DatatableComponent.prototype, "onWindowResize", null);
<<<<<<< HEAD
=======
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'ngx-datatable',
            template: "\n    <div\n      visibilityObserver\n      (visible)=\"recalculate()\">\n      <datatable-header\n        *ngIf=\"headerHeight\"\n        [sorts]=\"sorts\"\n        [sortType]=\"sortType\"\n        [scrollbarH]=\"scrollbarH\"\n        [innerWidth]=\"_innerWidth\"\n        [offsetX]=\"_offsetX | async\"\n        [dealsWithGroup]=\"groupedRows\"\n        [columns]=\"_internalColumns\"\n        [headerHeight]=\"headerHeight\"\n        [reorderable]=\"reorderable\"\n        [sortAscendingIcon]=\"cssClasses.sortAscending\"\n        [sortDescendingIcon]=\"cssClasses.sortDescending\"\n        [allRowsSelected]=\"allRowsSelected\"\n        [selectionType]=\"selectionType\"\n        (sort)=\"onColumnSort($event)\"\n        (resize)=\"onColumnResize($event)\"\n        (reorder)=\"onColumnReorder($event)\"\n        (select)=\"onHeaderSelect($event)\"\n        (columnContextmenu)=\"onColumnContextmenu($event)\">\n      </datatable-header>\n      <datatable-body\n        [groupRowsBy]=\"groupRowsBy\"\n        [groupedRows]=\"groupedRows\"\n        [rows]=\"_internalRows\"\n        [groupExpansionDefault]=\"groupExpansionDefault\"\n        [scrollbarV]=\"scrollbarV\"\n        [scrollbarH]=\"scrollbarH\"\n        [loadingIndicator]=\"loadingIndicator\"\n        [externalPaging]=\"externalPaging\"\n        [rowHeight]=\"rowHeight\"\n        [rowCount]=\"rowCount\"\n        [offset]=\"offset\"\n        [trackByProp]=\"trackByProp\"\n        [columns]=\"_internalColumns\"\n        [pageSize]=\"pageSize\"\n        [offsetX]=\"_offsetX | async\"\n        [rowDetail]=\"rowDetail\"\n        [groupHeader]=\"groupHeader\"\n        [selected]=\"selected\"\n        [innerWidth]=\"_innerWidth\"\n        [bodyHeight]=\"bodyHeight\"\n        [selectionType]=\"selectionType\"\n        [emptyMessage]=\"messages.emptyMessage\"\n        [rowIdentity]=\"rowIdentity\"\n        [rowClass]=\"rowClass\"\n        [selectCheck]=\"selectCheck\"\n        [displayCheck]=\"displayCheck\"\n        (page)=\"onBodyPage($event)\"\n        (activate)=\"activate.emit($event)\"\n        (rowContextmenu)=\"onRowContextmenu($event)\"\n        (select)=\"onBodySelect($event)\"\n        (scroll)=\"onBodyScroll($event)\">\n      </datatable-body>\n      <datatable-footer\n        *ngIf=\"footerHeight\"\n        [rowCount]=\"rowCount\"\n        [pageSize]=\"pageSize\"\n        [offset]=\"offset\"\n        [footerHeight]=\"footerHeight\"\n        [footerTemplate]=\"footer\"\n        [totalMessage]=\"messages.totalMessage\"\n        [pagerLeftArrowIcon]=\"cssClasses.pagerLeftArrow\"\n        [pagerRightArrowIcon]=\"cssClasses.pagerRightArrow\"\n        [pagerPreviousIcon]=\"cssClasses.pagerPrevious\"\n        [selectedCount]=\"selected.length\"\n        [selectedMessage]=\"!!selectionType && messages.selectedMessage\"\n        [pagerNextIcon]=\"cssClasses.pagerNext\"\n        (page)=\"onFooterPage($event)\">\n      </datatable-footer>\n    </div>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            encapsulation: core_1.ViewEncapsulation.None,
            styleUrls: ['./datatable.component.css'],
            host: {
                class: 'ngx-datatable'
            }
        }),
        __metadata("design:paramtypes", [services_1.ScrollbarHelper,
            core_1.ChangeDetectorRef,
            core_1.ElementRef,
            core_1.KeyValueDiffers])
    ], DatatableComponent);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map