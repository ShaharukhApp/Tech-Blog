import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uri = 'http://localhost:8080/user/register';

  constructor(private http : HttpClient, private router: Router) { }

  addUser(firstname, lastname, email, password, mobile){
    const userobject = {

     Firstname: firstname,
     Lastname : lastname,
     Email    : email,
     Password : password,
     Mobile   : mobile
    };

    this.http.post(`${this.uri}`, userobject).subscribe((response : any[])=> {
      console.log(response);
      this.router.navigate(['home']);
    },error => {
      console.log(error);
      this.router.navigate(['register']);
    });


}

}
