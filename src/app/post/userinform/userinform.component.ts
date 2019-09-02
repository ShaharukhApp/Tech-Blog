import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-userinform',
  templateUrl: './userinform.component.html',
  styleUrls: ['./userinform.component.css']
})
export class UserinformComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  Navigates(){
    this.route.navigate(['Angular7']);

  }

}
