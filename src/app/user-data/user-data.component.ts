import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
name:string;
email:string;
address:string;
action:boolean;
userArray:Array<any>=[];
  constructor() { }

  ngOnInit() {
  }
onClick(){
this.userArray.push({
  "name":this.name,
  "email":this.email,
  "address":this.address
});
console.log(this.userArray);
}
onDelete(index){
  this.userArray.splice(index,1);
}
}
