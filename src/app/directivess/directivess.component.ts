import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directivess',
  templateUrl: './directivess.component.html',
  styleUrls: ['./directivess.component.css']
})
export class DirectivessComponent implements OnInit {
 postArray:Array<string>=['post1','post2','post3','post4','post5'];
 objArray:Array<object>=[
  {id:1,postTitle:'Post 1'},
  {id:2,postTitle:'Post 2'},
  {id:3,postTitle:'Post 3'},
  {id:4,postTitle:'Post 4'},
  {id:5,postTitle:'Post 5'},
  {id:6,postTitle:'Post 6'},

 ] 
 stepForm:string;
 pos:Array<object>=[
  {
    id:1,
    title:"Title-1",
    content:"Lorem Ipsum is simply dummy test of the printing and typing the data"
  },
  {
    id:2,
    title:"Title-2",
    content:"Lorem Ipsum is simply dummy test of the printing and typing the data"
  },{
    id:3,
    title:"Title-3",
    content:"Lorem Ipsum is simply dummy test of the printing and typing the data"
  },{
    id:4,
    title:"Title-4",
    content:"Lorem Ipsum is simply dummy test of the printing and typing the data"
  },
 ]
 constructor(private route:ActivatedRoute) { 
    for(let i=0;i<this.postArray.length;i++){
      console.log(this.postArray[i]);
    }
  }

  ngOnInit(): void{
  this.route.queryParamMap.subscribe(value=>{
    console.log(value);
  })
  }
  addNew(){
    this.objArray.push({id:7,postTitle:'post 7'});
  }
  onDelete(post){
  let index=this.objArray.indexOf(post);
  this.objArray.splice(index,1);
  }
  onClick(status){
    this.stepForm=status;
  }
  }


