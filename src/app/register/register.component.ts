import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import {RegisterService} from '../services/register.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;

constructor(private fb: FormBuilder,private registerservice: RegisterService, private SnackBar: MatSnackBar) {
  this.createForm();
}


createForm() {
  this.registerForm=this.fb.group({
  firstname: [null , Validators.required],
  lastname: [null, Validators.required],
  email: [null, Validators.required],
  password: [null, Validators.required],
  mobile : [null, Validators.required]

  })

}

getFirstname(){
  return this.registerForm.controls.firstname.hasError('required') ? 'Firstname required' :
  this.registerForm.controls.firstname.hasError('pattern') ? 'Not a valid Firstname' :
   '' ;
}

getLastname(){
  return this.registerForm.controls.lastname.hasError('required') ? 'Lastname required' :
  this.registerForm.controls.lastname.hasError('pattern') ? 'Not a valid Lastname' :
   '' ;
}

getEmail(){
  return this.registerForm.controls.email.hasError('required') ? 'email required' :
  this.registerForm.controls.email.hasError('pattern') ? 'Not a valid email address' :
   '' ;
}

getPassword(){
  return this.registerForm.controls.password.hasError('required') ? 'Password required' :
   '' ;
}

getMobile(){
  return this.registerForm.controls.mobile.hasError('required') ? 'Mobile required' :
  this.registerForm.controls.mobile.hasError('pattern') ? 'Mobile Number Must be 10 digit' :
   '' ;
}



addUser(firstname,lastname,email,password,mobile){
  if(this.registerForm.valid){

    this.SnackBar.open('Registration', 'Successfull',{
      duration: 2000,
    })
  };
  this.registerservice.addUser(firstname,lastname,email,password,mobile).subscribe((res)=>{
    console.log(res);
  },(error)=>{
    console.log(error);
  })


  }

  ngOnInit() {
  }

}
