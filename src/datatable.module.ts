import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'rxjs/add/observable/fromEvent';

import {
  DatatableComponent,
  DataTableColumnDirective,
  DataTableHeaderComponent,
  DataTableBodyComponent,
  DataTableFooterComponent,
  DataTableHeaderCellComponent,
  DataTablePagerComponent,
<<<<<<< HEAD
  DataTableBodyRowComponent,
=======
  DataTableBodyRowComponent,  
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  DataTableRowWrapperComponent,
  ProgressBarComponent,
  DataTableBodyCellComponent,
  DatatableRowDetailDirective,
<<<<<<< HEAD
=======
  DatatableGroupHeaderDirective,
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  ScrollerComponent,
  DataTableSelectionComponent,
  DataTableColumnHeaderDirective,
  DataTableColumnCellDirective,
  DatatableRowDetailTemplateDirective,
  DataTableFooterTemplateDirective,
<<<<<<< HEAD
  DatatableFooterDirective
=======
  DatatableFooterDirective,
  DatatableGroupHeaderTemplateDirective
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
} from './components';

import {
  VisibilityDirective,
  LongPressDirective,
  ResizeableDirective,
  OrderableDirective,
  DraggableDirective
} from './directives';

import { ScrollbarHelper } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ScrollbarHelper
  ],
  declarations: [
    DataTableFooterTemplateDirective,
    VisibilityDirective,
    DraggableDirective,
    ResizeableDirective,
    OrderableDirective,
    LongPressDirective,
    ScrollerComponent,
    DatatableComponent,
    DataTableColumnDirective,
    DataTableHeaderComponent,
    DataTableHeaderCellComponent,
    DataTableBodyComponent,
    DataTableFooterComponent,
    DataTablePagerComponent,
<<<<<<< HEAD
    ProgressBarComponent,
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
=======
    ProgressBarComponent,    
    DataTableBodyRowComponent,
    DataTableRowWrapperComponent,
    DatatableRowDetailDirective,
    DatatableGroupHeaderDirective,
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    DatatableRowDetailTemplateDirective,
    DataTableBodyCellComponent,
    DataTableSelectionComponent,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
<<<<<<< HEAD
    DatatableFooterDirective
=======
    DatatableFooterDirective,
    DatatableGroupHeaderTemplateDirective
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  ],
  exports: [
    DatatableComponent,
    DatatableRowDetailDirective,
<<<<<<< HEAD
=======
    DatatableGroupHeaderDirective,
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    DatatableRowDetailTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnHeaderDirective,
    DataTableColumnCellDirective,
    DataTableFooterTemplateDirective,
    DatatableFooterDirective,
<<<<<<< HEAD
    DataTablePagerComponent
=======
    DataTablePagerComponent,
    DatatableGroupHeaderTemplateDirective
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  ]
})
export class NgxDatatableModule { }
