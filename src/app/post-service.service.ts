import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
postList:Array<any>=[
  {
    id:1,PostTitle:"Post1"
  },
  {
    id:2,PostTitle:"Post2"
  },{
    id:3,PostTitle:"Post3"
  },{
    id:4,PostTitle:"Post4"
  },{
    id:5,PostTitle:"Post5"
  },{
    id:6,PostTitle:"Post6"
  },{
    id:7,PostTitle:"Post7"
  },
]
addPostData(data){
  this.postList.push(data);
}
  constructor() { }
}
