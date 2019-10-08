import { Component, OnInit } from '@angular/core';
import {ScrolltopService} from '../../scrolltop.service';
@Component({
  selector: 'app-putty',
  templateUrl: './putty.component.html',
  styleUrls: ['./putty.component.css']
})
export class PuttyComponent implements OnInit {

  constructor(private scrolltop: ScrolltopService) {

   }

  ngOnInit() {
    this.scrolltop.setScrollTop();
  }

}
