import { Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus.app.component';
import { FormComponent } from './form.app.component';
import { CardComponent } from './card.component';

export const routes: Routes = [
  { path: '', component: CardComponent  },  // Página principal
  { path: 'about-us', component: AboutUsComponent },
  { path: 'form', component: FormComponent },
  {path: 'card', component: AboutUsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta 404
];
