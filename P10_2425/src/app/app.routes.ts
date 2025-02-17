import { Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus.app.component';
import { FormComponent } from './form.app.component';
import { CardComponent } from './card.component';
import { TableComponent } from './table.component';

export const routes: Routes = [
  { path: '', component: CardComponent  },  // Página principal
  { path: 'about-us', component: AboutUsComponent },
  { path: 'form', component: FormComponent },
  {path:'table',component: TableComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta 404
];
