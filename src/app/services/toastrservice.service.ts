import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrserviceService {

  constructor(private toastr: ToastrService) { }

  OnSuccess(){
    this.toastr.success('Mail has been sent to entered email address');

}
  OnError(){
    this.toastr.error('email address your entered not exist with account');

  }

}
