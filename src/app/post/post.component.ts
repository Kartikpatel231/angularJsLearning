import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { PostServiceService } from '../post-service.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
postParentMessage:string='Message coming from parents';
outputChildMessage:string='childMessages';
childMessage:string='From Child Component';
postTitle:string;
postDetails:string;
imageURL:string;
postURL:string;
addBackground:boolean;
posts:Array<any>;
@Output() messageEvent=new EventEmitter<string>();

constructor(private postService:PostServiceService) {
    this.posts=postService.postList;
   }

  ngOnInit() {
  }
  sendMessage(){
    console.log('clicked');
    this.messageEvent.emit(this.outputChildMessage);
  }
addNewData(){
  let newPost: Post={
    id:7,
    PostTitle:"Post 7"
  }
  this.postService.addPostData(newPost);
}
}
