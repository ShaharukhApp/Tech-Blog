import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uri = 'http://localhost:5000/register';

  constructor(private http : HttpClient, private router: Router) { }

  addUser(firstname, lastname, email, password, mobile){
    const userobject = {

     Firstname: firstname,
     Lastname : lastname,
     Email    : email,
     Password : password,
     Mobile   : mobile
    };

    console.log(userobject);

    return this.http.post(`${this.uri}`, userobject);
 
}

}
