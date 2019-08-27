import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  NavigateHomepage(){
    this.router.navigate(['home']);
  }

  NavigateToContact(){
  this.router.navigate(['contact_us']);
  }
}
