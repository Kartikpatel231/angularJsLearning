import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
SalesPersonList : SalesPerson[]=[
  new SalesPerson("kartik","patel","Kartik072002@gmail.com",800000),
  new SalesPerson("Hariom","Patel","Hariom@gmail.com",7000000),
  new SalesPerson("Pawan","chudahary","pawn@gmail.com",89990989),
  new SalesPerson("Hardik","Pandya","Hardic@gmail.com",9830000)
];
  constructor() { }

  ngOnInit() {
  }

}
