<<<<<<< HEAD
import { Component, Input, Output, EventEmitter } from '@angular/core';
=======
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
import { Keys, selectRows, selectRowsBetween } from '../../utils';
import { SelectionType } from '../../types';
import { MouseEvent, KeyboardEvent } from '../../events';

export interface Model {
  type: string;
  event: MouseEvent | KeyboardEvent;
  row: any;
  rowElement: any;
  cellElement: any;
  cellIndex: number;
}

@Component({
  selector: 'datatable-selection',
  template: `
    <ng-content></ng-content>
<<<<<<< HEAD
  `
=======
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
})
export class DataTableSelectionComponent {

  @Input() rows: any[];
  @Input() selected: any[];
  @Input() selectEnabled: boolean;
  @Input() selectionType: SelectionType;
  @Input() rowIdentity: any;
  @Input() selectCheck: any;

  @Output() activate: EventEmitter<any> = new EventEmitter();
  @Output() select: EventEmitter<any> = new EventEmitter();

  prevIndex: number;

  selectRow(event: KeyboardEvent | MouseEvent, index: number, row: any): void {
    if (!this.selectEnabled) return;

    const chkbox = this.selectionType === SelectionType.checkbox;
    const multi = this.selectionType === SelectionType.multi;
    const multiClick = this.selectionType === SelectionType.multiClick;
    let selected: any[] = [];

    if (multi || chkbox || multiClick) {
      if (event.shiftKey) {
        selected = selectRowsBetween(
<<<<<<< HEAD
          [], 
          this.rows, 
          index, 
          this.prevIndex, 
          this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
          selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
=======
          [],
          this.rows,
          index,
          this.prevIndex,
          this.getRowSelectedIdx.bind(this));
      } else if (event.ctrlKey || event.metaKey || multiClick || chkbox) {
        selected = selectRows([...this.selected], row, this.getRowSelectedIdx.bind(this));
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      } else {
        selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
      }
    } else {
      selected = selectRows([], row, this.getRowSelectedIdx.bind(this));
    }

<<<<<<< HEAD
    if(typeof this.selectCheck === 'function') {
=======
    if (typeof this.selectCheck === 'function') {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      selected = selected.filter(this.selectCheck.bind(this));
    }

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
<<<<<<< HEAD
    
=======

>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    this.prevIndex = index;

    this.select.emit({
      selected
    });
  }

  onActivate(model: Model, index: number): void {
    const { type, event, row } = model;
    const chkbox = this.selectionType === SelectionType.checkbox;
<<<<<<< HEAD
    const select = (!chkbox && (type === 'click' || type === 'dblclick')) || 
      (chkbox && type === 'checkbox');

    if(select) {
      this.selectRow(event, index, row);
    } else if(type === 'keydown') {
=======
    const select = (!chkbox && (type === 'click' || type === 'dblclick')) ||
      (chkbox && type === 'checkbox');

    if (select) {
      this.selectRow(event, index, row);
    } else if (type === 'keydown') {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
      if ((<KeyboardEvent>event).keyCode === Keys.return) {
        this.selectRow(event, index, row);
      } else {
        this.onKeyboardFocus(model);
      }
    }
    this.activate.emit(model);
  }

  onKeyboardFocus(model: Model): void {
    const { keyCode } = <KeyboardEvent>model.event;
    const shouldFocus =
      keyCode === Keys.up ||
      keyCode === Keys.down ||
      keyCode === Keys.right ||
      keyCode === Keys.left;

<<<<<<< HEAD
    if(shouldFocus) {
      const isCellSelection =
        this.selectionType === SelectionType.cell;

      if(!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if(isCellSelection) {
=======
    if (shouldFocus) {
      const isCellSelection =
        this.selectionType === SelectionType.cell;

      if (!model.cellElement || !isCellSelection) {
        this.focusRow(model.rowElement, keyCode);
      } else if (isCellSelection) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        this.focusCell(model.cellElement, model.rowElement, keyCode, model.cellIndex);
      }
    }
  }

  focusRow(rowElement: any, keyCode: number): void {
    const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
<<<<<<< HEAD
    if(nextRowElement) nextRowElement.focus();
=======
    if (nextRowElement) nextRowElement.focus();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  getPrevNextRow(rowElement: any, keyCode: number): any {
    const parentElement = rowElement.parentElement;

<<<<<<< HEAD
    if(parentElement) {
      let focusElement: HTMLElement;
      if(keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if(keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }

      if(focusElement && focusElement.children.length) {
=======
    if (parentElement) {
      let focusElement: HTMLElement;
      if (keyCode === Keys.up) {
        focusElement = parentElement.previousElementSibling;
      } else if (keyCode === Keys.down) {
        focusElement = parentElement.nextElementSibling;
      }

      if (focusElement && focusElement.children.length) {
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
        return focusElement.children[0];
      }
    }
  }

  focusCell(cellElement: any, rowElement: any, keyCode: number, cellIndex: number): void {
    let nextCellElement: HTMLElement;

<<<<<<< HEAD
    if(keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if(keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if(keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if(nextRowElement) {
        const children = nextRowElement.getElementsByClassName('datatable-body-cell');
        if(children.length) nextCellElement = children[cellIndex];
      }
    }

    if(nextCellElement) nextCellElement.focus();
=======
    if (keyCode === Keys.left) {
      nextCellElement = cellElement.previousElementSibling;
    } else if (keyCode === Keys.right) {
      nextCellElement = cellElement.nextElementSibling;
    } else if (keyCode === Keys.up || keyCode === Keys.down) {
      const nextRowElement = this.getPrevNextRow(rowElement, keyCode);
      if (nextRowElement) {
        const children = nextRowElement.getElementsByClassName('datatable-body-cell');
        if (children.length) nextCellElement = children[cellIndex];
      }
    }

    if (nextCellElement) nextCellElement.focus();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

  getRowSelected(row: any): boolean {
    return this.getRowSelectedIdx(row, this.selected) > -1;
  }

  getRowSelectedIdx(row: any, selected: any[]): number {
<<<<<<< HEAD
    if(!selected || !selected.length) return -1;
=======
    if (!selected || !selected.length) return -1;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2

    const rowId = this.rowIdentity(row);
    return selected.findIndex((r) => {
      const id = this.rowIdentity(r);
      return id === rowId;
    });
  }

}
