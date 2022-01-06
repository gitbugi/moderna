import { Component, ElementRef, ViewChild } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "moderna";
  faBars = faBars;

  constructor(private Router: Router) {
    Router.events.subscribe({
      next: (v) => {this.checkURLforNAV(); this.toHeader()},
      error: (e) => console.error(e),
      complete: () => console.info('complete') 
  })
    AOS.init({
      duration: 1000
    });
  }

  @ViewChild('nav') nav!: ElementRef;
  @ViewChild('backtoheader') backtoheader!: ElementRef;
  onScroll() {
    if (window.scrollY >= 60) {
      this.nav.nativeElement.style.backgroundColor = "rgba(30, 67, 86, 0.8)";
      this.nav.nativeElement.children[0].style = "padding: 10px 20px"
      this.backtoheader.nativeElement.style = "display: block"
    }
    else {
      this.checkURLforNAV()
      this.nav.nativeElement.children[0].style = "padding: 20px 20px"
      this.backtoheader.nativeElement.style = "display: none"
    }
  }

  toHeader() {
    window.scrollTo(0, 0);
  }

  checkURLforNAV() {
    if(this.Router.url === "/"){
      this.nav.nativeElement.style.backgroundColor = "Transparent";
    }
    else {
      this.nav.nativeElement.style.backgroundColor = "#1e4356";
    } 
  }
}
