import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn : 'root'
})

export class TestService{

  constructor(private _HTTP: HttpClient){ }

  uri = 'http://localhost:8080/user/test';

  Test_Submission(TEST_BODY) {

  console.log(TEST_BODY);

  this._HTTP.post(`${this.uri}`, {Test_Body : TEST_BODY})
  .subscribe((response: string) => {
    console.log(response);


   }, (error => {
      console.log('Test yet not submitted', error);
   }));
  }
}
