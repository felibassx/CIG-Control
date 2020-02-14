import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
// import { AuthGuardService } from './auth/auth-guard.service';
import { PagesComponent } from './pages/pages.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        loadChildren: './pages/pages.module#PagesModule'
    },
    { path: '**', redirectTo: '#' },
];


export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true } );
