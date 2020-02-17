import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages-routing';
import { SharedModule } from '../shared/shared.module';
import { DetalleIngresosComponent } from './detalle-ingresos/detalle-ingresos.component';
import { DetalleEgresosComponent } from './detalle-egresos/detalle-egresos.component';
import { BalanceComponent } from './balance/balance.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleIngresosComponent,
    DetalleEgresosComponent,
    BalanceComponent
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
