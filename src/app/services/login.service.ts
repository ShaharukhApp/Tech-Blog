import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  public userCrdential: string;

  public logResponse: any[];

  uri = 'http://localhost:8080/user';

  Login(email, password) {

    const obj = {
        email: email,
        password: password
      };

    localStorage.setItem('session_id', 'Shaharukh');
    this.loggedIn.next(true);
    this.router.navigate(['']);

  }

  isLogggedin(){
        return localStorage.getItem('session_id');
      }

   logout() {
    this.http.get(`${this.uri}/logout`).subscribe((res) => {
    localStorage.removeItem('session_id');
    this.router.navigate(['']);
    this.loggedIn.next(false);

  });

}

}

