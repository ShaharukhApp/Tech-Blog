import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import {ResetpasswordService} from '../services/resetpassword.service';
import {ToastrserviceService } from '../services/toastrservice.service';
@Component({
  selector: 'app-passwordrecovery',
  templateUrl: './passwordrecovery.component.html',
  styleUrls: ['./passwordrecovery.component.css']
})
export class PasswordrecoveryComponent implements OnInit {

  Forget: FormGroup;
  successmessage: boolean =false;

  constructor(private fb: FormBuilder, public resetpassword: ResetpasswordService, private toast: ToastrserviceService) {
    this.createForm();
  }


  createForm(){
    this.Forget = this.fb.group({
      email: [null, Validators.required]
    });


  }

  resetLink(email){

    this.resetpassword.resetLink(email);
    this.successmessage = true;
  }
  ngOnInit() {

  }

}
