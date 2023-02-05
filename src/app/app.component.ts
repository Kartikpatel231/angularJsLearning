import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string;
  lastName:string;
  title = 'sales-project';
  reciveMessage($event){
    console.log('myMessagechild');
  }
  constructor(private router:Router){

  }
  onKeyup(){
    console.log(this.name);
    console.log(this.lastName);

  }
  onSubmit(){
    this.router.navigate(['/post'])
  }
}

