import { Routes, RouterModule } from '@angular/router';

import { AutRequestFormComponent } from './AUTRequest/aut.form.component';
import { AppCenterComponent } from './UI/center/app.center.component';
import { AppComponent } from './UI/main/app.component';
import { AppNavigationBarComponent } from './UI/navbar/app.navbar.component';
import { AppSidebarComponent } from './UI/sidebar/app.sidebar.component';

const appRoutes: Routes = [
    { path: '', component: AutRequestFormComponent },
    { path: 'login', component: AppCenterComponent },
    { path: 'register', component: AppComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);