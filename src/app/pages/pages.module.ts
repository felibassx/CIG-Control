import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PAGES_ROUTES } from './pages-routing';
import { SharedModule } from '../shared/shared.module';
import { DetalleIngresosComponent } from './detalle-ingresos/detalle-ingresos.component';
import { DetalleEgresosComponent } from './detalle-egresos/detalle-egresos.component';
import { BalanceComponent } from './balance/balance.component';
import { ReportsComponent } from './reports/reports.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetalleIngresosComponent,
    DetalleEgresosComponent,
    BalanceComponent,
    ReportsComponent,
    AccountSettingsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PAGES_ROUTES,
    SharedModule
  ],
  exports: [
    HomeComponent,
    DetalleIngresosComponent,
    DetalleEgresosComponent,
    BalanceComponent,
    ReportsComponent,
    AccountSettingsComponent,
    ProfileComponent
  ]
})
export class PagesModule { }
