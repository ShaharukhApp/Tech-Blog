import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

   isCollapsed = true;

  isLoggedIn$: Observable<boolean>;

  constructor() { }

  toggle_bar(){
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {

  }




}
