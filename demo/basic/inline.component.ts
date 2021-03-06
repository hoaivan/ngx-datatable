import { Component } from '@angular/core';

@Component({
  selector: 'inline-edit-demo',
  template: `
    <div>
      <h3>
        Inline Editing
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/inline.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        #mydatatable
        class="material"
        [headerHeight]="50"
        [limit]="5"
        [columnMode]="'force'"
        [footerHeight]="50"
        [rowHeight]="'auto'"
        [rows]="rows">
        <ngx-datatable-column name="Name">
<<<<<<< HEAD
          <ng-template ngx-datatable-cell-template let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[row.$$index + '-name'] = true"
              *ngIf="!editing[row.$$index + '-name']">
=======
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-value="value" let-row="row">
            <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-name'] = true"
              *ngIf="!editing[rowIndex + '-name']">
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
              {{value}}
            </span>
            <input
              autofocus
<<<<<<< HEAD
              (blur)="updateValue($event, 'name', value, row)"
              *ngIf="editing[row.$$index + '-name']"
=======
              (blur)="updateValue($event, 'name', rowIndex)"
              *ngIf="editing[rowIndex+ '-name']"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
              type="text"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Gender">
<<<<<<< HEAD
          <ng-template ngx-datatable-cell-template let-row="row" let-value="value">
             <span
              title="Double click to edit"
              (dblclick)="editing[row.$$index + '-gender'] = true"
              *ngIf="!editing[row.$$index + '-gender']">
              {{value}}
            </span>
            <select
              *ngIf="editing[row.$$index + '-gender']"
              (change)="updateValue($event, 'gender', value, row)"
=======
          <ng-template ngx-datatable-cell-template let-rowIndex="rowIndex" let-row="row" let-value="value">
             <span
              title="Double click to edit"
              (dblclick)="editing[rowIndex + '-gender'] = true"
              *ngIf="!editing[rowIndex + '-gender']">
              {{value}}
            </span>
            <select
              *ngIf="editing[rowIndex + '-gender']"
              (change)="updateValue($event, 'gender', rowIndex)"
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
              [value]="value">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </ng-template>
        </ngx-datatable-column>
        <ngx-datatable-column name="Age">
          <ng-template ngx-datatable-cell-template let-value="value">
            {{value}}
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `
})
export class InlineEditComponent {

  editing = {};
  rows = [];

  constructor() {
    this.fetch((data) => {
      this.rows = data;
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

<<<<<<< HEAD
  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    this.rows[row.$$index][cell] = event.target.value;
=======
  updateValue(event, cell, rowIndex) {
    console.log('inline editing rowIndex', rowIndex)
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log('UPDATED!', this.rows[rowIndex][cell]);
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
  }

}
