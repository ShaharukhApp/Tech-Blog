import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class PostService{

  uri ='https://visionrosetta.herokuapp.com';

  private postCollection = [];
  POST_ID: string;
  constructor(private http: HttpClient){}
 
  User_Post(body: any) {
 
  return this.http.post(`${this.uri}/post/publicQ&A`, body);
 
   }

  Get_User_Post_Collection(){
   return this.http.get(`${this.uri}/post/retrive`);
  }

  User_Post_Likes(id){
     const POST_ID_OBJECT = {
       post_id : id
     };

     return this.http.put(`${this.uri}/post/likes/${id}`, id);
     
  }


}
