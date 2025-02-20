import { Routes } from '@angular/router';
import { AboutUsComponent } from './aboutus.app.component';
import { FormComponent } from './form.app.component';
import { CardComponent } from './card.component';
import { TableComponent } from './table.component';
import { añadirEquipo } from './equipo-add.component';
import { emparejarEquipo } from './equipo-emparejamiento.component';
import { Persona } from './ej2.component';


export const routes: Routes = [
  { path: '', component:añadirEquipo  },  // Página principal
  { path: 'emparejamiento', component: emparejarEquipo},
  { path: 'form', component: FormComponent },
  {path:'table',component: TableComponent},
  {path:'addEquipos',component:añadirEquipo},
  {path:'ejercicio2',component:Persona},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Ruta 404
];
