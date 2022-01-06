import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    SwiperModule
  ],
  exports: [
    AboutComponent
  ]
})
export class AboutModule { }
