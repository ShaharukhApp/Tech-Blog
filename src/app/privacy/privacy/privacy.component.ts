import { Component, OnInit } from '@angular/core';
import {ScrolltopService} from '../../scrolltop.service';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {

  constructor(private scrolltop: ScrolltopService) { }

  ngOnInit() {
    this.scrolltop.setScrollTop();
  }

}
