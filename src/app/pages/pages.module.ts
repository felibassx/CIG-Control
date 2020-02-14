import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages-routing';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
