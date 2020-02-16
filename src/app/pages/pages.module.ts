import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
