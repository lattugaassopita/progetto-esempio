import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateEventComponent } from './pages/create-event/create-event.component';

export const routes: Routes = [
    {path: '', redirectTo: "home", pathMatch: 'full'},

    {path: "home", component: HomeComponent},
    {path: "login", component: LoginComponent},
    {path: "createEvent", component: CreateEventComponent}
];
