import { Component, OnInit } from '@angular/core';
import {ScrolltopService} from '../../scrolltop.service';
@Component({
  selector: 'app-nmap',
  templateUrl: './nmap.component.html',
  styleUrls: ['./nmap.component.css']
})
export class NmapComponent implements OnInit {

  constructor(private scrolltop: ScrolltopService) { }

  ngOnInit() {
    this.scrolltop.setScrollTop();
  }

}
