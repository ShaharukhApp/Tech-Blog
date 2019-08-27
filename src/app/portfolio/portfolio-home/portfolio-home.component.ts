import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  online_preparation(){
   this.router.navigate(['/portfolio/online-preparation']);

  }

}
