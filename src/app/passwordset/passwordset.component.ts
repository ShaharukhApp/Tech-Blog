import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResetpasswordService} from '../services/resetpassword.service';
import {FormGroup, FormBuilder,Validators, RequiredValidator}  from '@angular/forms';
@Component({
  selector: 'app-passwordset',
  templateUrl: './passwordset.component.html',
  styleUrls: ['./passwordset.component.css']
})
export class PasswordsetComponent implements OnInit {

  public id: string;

  PasswordSet : FormGroup;

  private FormSubmittedAttempt: boolean;


  constructor(private fb: FormBuilder, private activatedroute: ActivatedRoute, private resetpassword : ResetpasswordService) {
    this.createForm();
   }

   createForm(){
     this.PasswordSet=this.fb.group({
       newPassword: [null, Validators.required],
       reenterPassword: [null ,Validators.required]
     });
   }

   isFieldInvalid(field: string) {
    return(
      (this.PasswordSet.get(field).valid && this.PasswordSet.get(field).touched) ||
      (this.PasswordSet.get(field).untouched && this.FormSubmittedAttempt)
    );
  }


  PasswordStore(password){
    console.log(this.activatedroute.snapshot.paramMap.get('token'));
    this.resetpassword.PasswordStore(password);
    //this.resetpassword.PasswordStore(password, this.activatedroute.snapshot.paramMap.get('token'));
  }
  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('token');

    this.resetpassword.tokenVerification(this.id);

  }

}
