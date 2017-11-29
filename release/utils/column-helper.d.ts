import { TableColumn } from '../types';
import { DataTableColumnDirective } from '../components/columns';
/**
 * Sets the column defaults
<<<<<<< HEAD
 *
 * @export
 * @param {any[]} columns
 * @returns
 */
export declare function setColumnDefaults(columns: TableColumn[]): void;
/**
 * Translates templates definitions to objects
 *
 * @export
 * @param {DataTableColumnDirective[]} templates
 * @returns {any[]}
=======
 */
export declare function setColumnDefaults(columns: TableColumn[]): void;
export declare function isNullOrUndefined<T>(value: T | null | undefined): value is null | undefined;
/**
 * Translates templates definitions to objects
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export declare function translateTemplates(templates: DataTableColumnDirective[]): any[];
