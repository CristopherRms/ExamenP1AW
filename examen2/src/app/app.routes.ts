import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetallesComponent } from './components/detalles/detalles.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "detalles/:id", component: DetallesComponent },
    { path: "", redirectTo: "home", pathMatch: "full"}
];

