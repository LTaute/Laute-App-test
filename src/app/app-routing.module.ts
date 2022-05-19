import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { BusinessDevelopmentComponent } from './services-page/business-development/business-development.component';
import { WebDevelopmentComponent } from './services-page/web-development/web-development.component';
import { DigitalMarketingComponent } from './services-page/digital-marketing/digital-marketing.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'services-page', component: ServicesPageComponent },
  { path: 'business-development', component: BusinessDevelopmentComponent },
  { path: 'digital-marketing', component: DigitalMarketingComponent },
  { path: 'web-development', component: WebDevelopmentComponent },
  { path: 'gallery-page', component: GalleryPageComponent },
  { path: 'contact-page', component: ContactPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
