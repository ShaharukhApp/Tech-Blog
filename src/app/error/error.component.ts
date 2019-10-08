import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HerokuService} from '../heroku.service';
import {RegisterService} from '../services/register.service';
import {ScrolltopService} from '../scrolltop.service';
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router, private heroku: HerokuService, private register: RegisterService, 
              private scrolltop: ScrolltopService) { }

  ngOnInit() {
    this.scrolltop.setScrollTop();
  }
  getResponse(){

    this.heroku.getData().subscribe((res) =>{
       console.log(res);
    }, (error => {
      console.log(error);
    }));
  }
  
  NavigateHomepage(){
    this.router.navigate(['']);
  }

  NavigateToContact(){
  this.router.navigate(['contact_us']);
  }
}
