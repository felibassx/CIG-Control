import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { AuthGuardService } from './auth/auth-guard.service';
import { PagesComponent } from './pages/pages.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: PagesComponent,
        loadChildren: './pages/pages.module#PagesModule',
        canLoad: [ AuthGuard ]
    },
    // { path: '**', redirectTo: '/nopagefound' },
];


export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
