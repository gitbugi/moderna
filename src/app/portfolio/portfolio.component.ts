import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Grid from 'muuri';
import Muuri from 'muuri/src/index'

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.grid = new Muuri('.grid', {
      layout: {
        fillGaps: true
      }
    });
  }

  @ViewChild("nav") nav: ElementRef;

  img = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  grid: Grid;

  changeClass(z: MouseEvent) {
    //Farben von auswahlfeld setzen
    for (let i = 0; i < this.nav.nativeElement.children.length; i++) {
      this.nav.nativeElement.children[i].children[0].classList.remove("active");
    }
    (z.currentTarget as HTMLElement).classList.add("active")
    
    //Images filtern
    if ((z.currentTarget as HTMLElement).innerHTML === "All") {
      this.grid.filter('.item');
    }

    if ((z.currentTarget as HTMLElement).innerHTML === "App") {
      this.grid.filter(function (item) {        
        return item.getElement().hasAttribute("data-app");
      });
    }

    if ((z.currentTarget as HTMLElement).innerHTML === "Card") {
      this.grid.filter(function (item) {        
        return item.getElement().hasAttribute("data-card");
      });
    }

    if ((z.currentTarget as HTMLElement).innerHTML === "Web") {
      this.grid.filter(function (item) {        
        return item.getElement().hasAttribute("data-web");
      });
    }
  }

}
