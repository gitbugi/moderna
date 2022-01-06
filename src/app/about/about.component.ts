import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import PureCounter from '@srexi/purecounterjs/js/purecounter.js'

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AboutComponent implements OnInit {

  constructor() {
    
  }

  ngOnInit(): void {
    const pure = new PureCounter;
  }  

  @ViewChild('success') success: ElementRef;
  @ViewChild('info') info: ElementRef;
  @ViewChild('warning') warning: ElementRef;
  @ViewChild('danger') danger: ElementRef;

  progressScroll(){
    if(window.scrollY >= 700){
      this.success.nativeElement.style.width = "100%";
      this.info.nativeElement.style.width = "90%";
      this.warning.nativeElement.style.width = "75%";
      this.danger.nativeElement.style.width = "55%";
    }
  }
}
