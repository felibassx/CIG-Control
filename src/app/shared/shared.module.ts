import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent
  ]
})
export class SharedModule {}
