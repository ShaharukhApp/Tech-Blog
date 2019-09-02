import { Component, OnInit } from '@angular/core';
import {PostService} from '../services/post.service';
import {Postformat} from '../postformat';

@Component({
  selector: 'app-publicq',
  templateUrl: './publicq.component.html',
  styleUrls: ['./publicq.component.css']
})
export class PublicqComponent implements OnInit {

  public post_collection = [];
  public POST_NOT: string;

   
  constructor(private postservice: PostService) { }

  Post_Like(postid){
     
     this.postservice.User_Post_Likes(postid).subscribe((isliked)=> {

      console.log(isliked);
     },(error) => {
        console.log(error)
     })
      

     this.Fetch_POST();
  }
 
  ngOnInit() {
    this.Fetch_POST();
  }


  Fetch_POST(){
    this.postservice.Get_User_Post_Collection().subscribe((post: any[]) => {
      this.post_collection = post;
      console.log(this.post_collection)
    },error=> {
      console.log(error);
    });
  }

}
