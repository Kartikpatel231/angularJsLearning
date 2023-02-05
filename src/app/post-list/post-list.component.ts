import { Component, OnInit,Input } from '@angular/core';
import { PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
name:string="hello";
  @Input() fromPostParent:string;
  title:string="hi kartik";
  numb:number=123456789;
  numbe:number=12221.121212;
  price:number=9845;
  today:Date=new Date();
  postObject:object={
    id:1,
    postTitle:"post is one"
  }
  postsArray:Array<string>=[
    "post1",
    "post1",
    "post1",
    "post1",
    "post1",
  ]
  userDetails={
    name:"user 1",
    country:"Indore",
    mobileNumber:"7999301948"
  }
  postList:Array<any>;
  dumyText:string="Currency List ; GBP, United Kingdom Pound ; GEL, Georgia Lari ; GGP, Guernsey Pound ; GHS, Ghana Cedi.";
  constructor(private postService:PostServiceService) { 
 this.postList=postService.postList;

  }

  ngOnInit() {
  }
addNewData(){
  let newData={
    id:1,
    PostTitle:"Post 8"
  }
  this.postService.addPostData(newData);
}
}
