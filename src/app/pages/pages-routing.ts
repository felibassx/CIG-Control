import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalleIngresosComponent } from './detalle-ingresos/detalle-ingresos.component';
import { DetalleEgresosComponent } from './detalle-egresos/detalle-egresos.component';
import { BalanceComponent } from './balance/balance.component';
import { ReportsComponent } from './reports/reports.component';
import { ProfileComponent } from './profile/profile.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const pagesRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'home' }
    },
    {
        path: 'detalle-egresos',
        component: DetalleEgresosComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Detalle de Gastos' }
    },
    {
        path: 'detalle-ingresos',
        component: DetalleIngresosComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Detalle de Ingresos' }
    },
    {
        path: 'balance',
        component: BalanceComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Balances' }
    },
    {
        path: 'reports',
        component: ReportsComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Reportes' }
    },
    {
        path: 'profile',
        component: ProfileComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Mi Perfil' }
    },
    {
        path: 'account-settings',
        component: AccountSettingsComponent,
        // canActivate: [VerifyRoleGuard],
        data: { titulo: 'Configuración de la Cuenta' }
    },
    // { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

// se usa el forchild cuando es una router dentro de otro router
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
