import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HerokuService {

  //https://visionrosetta.herokuapp.com/savvy
  uri='https://visionrosetta.herokuapp.com/savvy';
  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(`${this.uri}`);
  }

}
