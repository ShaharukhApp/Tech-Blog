import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { BlockScrollStrategy } from '@angular/cdk/overlay';
import {ToastrserviceService} from '../services/toastrservice.service';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private http: HttpClient, private router: Router, private toast: ToastrserviceService) { }

  uri = 'http://localhost:8080/user';

  public tokenurl : string;

  public token: string;

  public passwordChangeUri : string;


  emailstatus = "";


  resetLink(email){

    const object = {email:email};

    this.http.post(`${this.uri}/forget`, object).subscribe((success) => {
        this.toast.OnSuccess();
        console.log(success);
     }, (error =>{
       this.toast.OnError();
       //this.emailstatus='Entered Email not exist with account';
     }));
  }

  tokenVerification(token){
    this.token=token;
    this.tokenurl = 'http://localhost:8080/user/reset/'+token;

    console.log(token);

    this.http.post(`${this.tokenurl}`,token).subscribe((tokenvaidated) => {

        this.router.navigate(['reset/ ']);
    },(error => {

         this.router.navigate(['forget']);
    }));
  }


  PasswordStore(password) {

    this.passwordChangeUri='http://localhost:8080/user/passwordchange/' + this.token;
    console.log(this.token);
    console.log('password is'+ password);
    this.http.post(`${this.passwordChangeUri}`,{password:password, token:this.token}).subscribe((ismatched) =>{
        console.log(ismatched)
    },(error =>{
        console.log(error);
    }));

  }


}
