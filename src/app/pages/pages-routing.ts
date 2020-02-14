import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const pagesRoutes: Routes = [
    // {
        // path: '',
        // component: PagesComponent,
        // canActivate: [ LoginGuardGuard ],
        // children: [
            {
                path: 'home',
                component: HomeComponent,
                // canActivate: [VerificaTokenGuard],
                data: { titulo: 'home' }
            },
            // { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' }
        // ]
    // }
];

// se usa el forchild cuando es una router dentro de otro router
export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
