import { TableColumn } from '../types';
import { DataTableColumnDirective } from '../components/columns';
import { camelCase, deCamelCase } from './camel-case';
import { id } from './id';
import { getterForProp } from './column-prop-getters';

/**
 * Sets the column defaults
<<<<<<< HEAD
 * 
 * @export
 * @param {any[]} columns
 * @returns
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function setColumnDefaults(columns: TableColumn[]) {
  if(!columns) return;

  for(const column of columns) {
    if(!column.$$id) {
      column.$$id = id();
    }

    // prop can be numeric; zero is valid not a missing prop
    // translate name => prop
<<<<<<< HEAD
    if(column.prop == null && column.name) {
=======
    if(isNullOrUndefined(column.prop) && column.name) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      column.prop = camelCase(column.name);
    }

    if (!column.$$valueGetter) {
      column.$$valueGetter = getterForProp(column.prop);
    }

    // format props if no name passed
<<<<<<< HEAD
    if(column.prop != null && !column.name) {
      column.name = deCamelCase(String(column.prop));
    }
=======
    if(!isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = deCamelCase(String(column.prop));
    }
    
    if(isNullOrUndefined(column.prop) && isNullOrUndefined(column.name)) {
      column.name = ''; // Fixes IE and Edge displaying `null`
    }
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    if(!column.hasOwnProperty('resizeable')) {
      column.resizeable = true;
    }

    if(!column.hasOwnProperty('sortable')) {
      column.sortable = true;
    }

    if(!column.hasOwnProperty('draggable')) {
      column.draggable = true;
    }

    if(!column.hasOwnProperty('canAutoResize')) {
      column.canAutoResize = true;
    }

    if(!column.hasOwnProperty('width')) {
      column.width = 150;
    }
  }
}

<<<<<<< HEAD
/**
 * Translates templates definitions to objects
 * 
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
=======
export function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined {
    return value === null || value === undefined;
}

/**
 * Translates templates definitions to objects
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function translateTemplates(templates: DataTableColumnDirective[]): any[] {
  const result: any[] = [];

  for(const temp of templates) {
    const col: any = {};

    const props = Object.getOwnPropertyNames(temp);
    for(const prop of props) {
      col[prop] = temp[prop];
    }

    if(temp.headerTemplate) {
      col.headerTemplate = temp.headerTemplate;
    }

    if(temp.cellTemplate) {
      col.cellTemplate = temp.cellTemplate;
    }

    result.push(col);
  }

  return result;
}
