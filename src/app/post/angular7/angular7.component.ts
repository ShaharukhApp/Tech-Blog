import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PostService} from '../../services/post.service';
@Component({
  selector: 'app-angular7',
  templateUrl: './angular7.component.html',
  styleUrls: ['./angular7.component.css']
})
export class Angular7Component implements OnInit {

  PostForm: FormGroup;
  constructor(private fb: FormBuilder, private postservice: PostService) {
    this.createForm();
   }


  createForm(){
    this.PostForm = this.fb.group({
      question_heading: [null, Validators.required],
      post_body: [null, Validators.required]
    });
  }

  User_Post(){
 
    const POST_OBJECT = {
      Subject: this.PostForm.get('question_heading').value,
      Message: this.PostForm.get('post_body').value

    };
    this.postservice.User_Post(POST_OBJECT).subscribe((IS_POST) => {
     alert('Post has been Published');
    },(error)=> {
      console.log(error)
    });
    }
   
  ngOnInit() {
  }

}
