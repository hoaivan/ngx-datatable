"use strict";
<<<<<<< HEAD
=======
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var column_header_directive_1 = require("./column-header.directive");
var column_cell_directive_1 = require("./column-cell.directive");
<<<<<<< HEAD
var DataTableColumnDirective = (function () {
    function DataTableColumnDirective() {
    }
    DataTableColumnDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'ngx-datatable-column' },] },
    ];
    /** @nocollapse */
    DataTableColumnDirective.ctorParameters = function () { return []; };
    DataTableColumnDirective.propDecorators = {
        'name': [{ type: core_1.Input },],
        'prop': [{ type: core_1.Input },],
        'frozenLeft': [{ type: core_1.Input },],
        'frozenRight': [{ type: core_1.Input },],
        'flexGrow': [{ type: core_1.Input },],
        'resizeable': [{ type: core_1.Input },],
        'comparator': [{ type: core_1.Input },],
        'pipe': [{ type: core_1.Input },],
        'sortable': [{ type: core_1.Input },],
        'draggable': [{ type: core_1.Input },],
        'canAutoResize': [{ type: core_1.Input },],
        'minWidth': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'maxWidth': [{ type: core_1.Input },],
        'checkboxable': [{ type: core_1.Input },],
        'headerCheckboxable': [{ type: core_1.Input },],
        'headerClass': [{ type: core_1.Input },],
        'cellClass': [{ type: core_1.Input },],
        'cellTemplate': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [column_cell_directive_1.DataTableColumnCellDirective, { read: core_1.TemplateRef },] },],
        'headerTemplate': [{ type: core_1.Input }, { type: core_1.ContentChild, args: [column_header_directive_1.DataTableColumnHeaderDirective, { read: core_1.TemplateRef },] },],
    };
=======
var DataTableColumnDirective = /** @class */ (function () {
    function DataTableColumnDirective() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DataTableColumnDirective.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "prop", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "frozenLeft", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "frozenRight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "flexGrow", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "resizeable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "comparator", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "pipe", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "draggable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "canAutoResize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "minWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "width", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DataTableColumnDirective.prototype, "maxWidth", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "checkboxable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DataTableColumnDirective.prototype, "headerCheckboxable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "headerClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DataTableColumnDirective.prototype, "cellClass", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_cell_directive_1.DataTableColumnCellDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "cellTemplate", void 0);
    __decorate([
        core_1.Input(),
        core_1.ContentChild(column_header_directive_1.DataTableColumnHeaderDirective, { read: core_1.TemplateRef }),
        __metadata("design:type", core_1.TemplateRef)
    ], DataTableColumnDirective.prototype, "headerTemplate", void 0);
    DataTableColumnDirective = __decorate([
        core_1.Directive({ selector: 'ngx-datatable-column' })
    ], DataTableColumnDirective);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    return DataTableColumnDirective;
}());
exports.DataTableColumnDirective = DataTableColumnDirective;
//# sourceMappingURL=column.directive.js.map