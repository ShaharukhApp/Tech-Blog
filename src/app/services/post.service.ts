import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 

@Injectable({
providedIn: 'root'
})

export class PostService{

  uri = 'http://localhost:8080/user';

  private postCollection = [];
  POST_ID: string;
  constructor(private http: HttpClient){}

  User_Post(body: any) {


    const postObject = {
      Message: body
    };

// tslint:disable-next-line: max-line-length
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjI4MjQ1ODYsImV4cCI6MTU2MjkxMDk4Nn0.cQWzDj2PnxzmE42sFqZuRWA6zgi3xIg97sMQasUYtJw';
    //const token= localStorage.getItem('session_id');
    //console.log(token);


    this.http.post(`${this.uri}/post`, postObject)
    .subscribe((issuccess) => {

      console.log(issuccess);

    }, (error => {

      console.log(error);

    }));
  }

  Get_User_Post_Collection(){
   return this.http.get(`${this.uri}/post`);
  }


  Get_User_Post_Likes(){
    return this.http.get(`${this.uri}/post`);
   }


  User_Post_Likes(id: any){
     console.log('control reached here');
     console.log(id);
     const POST_ID_OBJECT = {
       post_id : id
     };

     const likesuri = 'http://localhost:8080/user/post/likes/'+id;

     this.http.post(`${likesuri}`, id)
     .subscribe(isdone => {
       console.log(isdone);

     },(error) => {
        console.log(error);
     });
  }


}
