import { Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus.app.component';
import { FormComponent } from './form.app.component';

export const routes: Routes = [
  { path: '', component: AboutUsComponent },  // Página principal
  { path: 'about-us', component: AboutUsComponent },
  { path: 'form', component: FormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta 404
];
