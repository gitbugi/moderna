import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AboutModule } from './about/about.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactusModule } from './contactus/contactus.module';
import { ServiceModule } from './service/service.module';

import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './Home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'contactus', component: ContactusComponent},
  {path: '**', component: PagenotfoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FontAwesomeModule,
    PortfolioModule,
    ContactusModule,
    AboutModule,
    ServiceModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
