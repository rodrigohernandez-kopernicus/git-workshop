import {Component} from '@angular/core';

export interface Person {
  name: string;
  surname: string;
  email: string;
}

const ELEMENT_DATA: Person[] = [
  {name: "Rodrigo", surname: "Hernandez", email: "rodrigoenzohernandez@gmail.com"},
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  displayedColumns: string[] = ['name', 'surname', 'email'];
  dataSource = ELEMENT_DATA;
}


/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */