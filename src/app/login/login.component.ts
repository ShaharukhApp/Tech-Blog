import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder , Validators} from '@angular/forms';

import {LoginService} from '../services/login.service';
import { Router } from '@angular/router';
import {AuthService, GoogleLoginProvider, SocialUser, FacebookLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private FormSubmittedAttempt: boolean;

  public user: SocialUser;
  public loggedIn: boolean;

  public GoogleResponsedata = {
    firstname: '',
    lastname: '',
    email: '',
    id: '',
    photoUrl: ''
  };

  public FacebookResponseData= {
    firstname: '',
    lastname: '',
    email: '',
    id: ''
  }

  constructor(private fb: FormBuilder, public loginservice: LoginService, private authService: AuthService) {

    this.createForm();
   }


  createForm(){

    this.loginForm = this.fb.group({
      email: [null ,Validators.required],
      password : [null, Validators.required]
  });

  }

  getEmail(){
    return this.loginForm.controls.email.hasError('required') ? 'email required' :
    this.loginForm.controls.email.hasError('pattern') ? 'Not a valid email address' :
     '' ;
  }

  isFieldInvalid(field: string) {
    return(
      (this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.FormSubmittedAttempt)
    );
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(userdata => {
      this.GoogleResponsedata.email = userdata.email;
      this.GoogleResponsedata.firstname = userdata.firstName;
      this.GoogleResponsedata.lastname = userdata.lastName;
      this.GoogleResponsedata.id = userdata.id;
      this.GoogleResponsedata.photoUrl = userdata.photoUrl;
     })
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then(facebookdata => {
      this.FacebookResponseData.firstname = facebookdata.firstName;
      this.FacebookResponseData.lastname =  facebookdata.lastName;
      this.FacebookResponseData.email = facebookdata.email;
      this.FacebookResponseData.id = facebookdata.id;


    })
  }


  signOut(): void {
    this.authService.signOut().then(success => {
       console.log('user succesfully logout')
    },(error => {
      console.log(error);
    }))
  }


  GetToken(){

    var obj;
    obj= JSON.parse(localStorage.getItem('session_id'));
    console.log(obj.token);
  }

  ngOnInit() {

  }

    Login(email, password){

    if(this.loginForm.valid){
      this.loginservice.Login(email, password);
    }

    this.FormSubmittedAttempt = true;

  }

}
