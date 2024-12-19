import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavegatorComponent } from './app/nav.app.component';
import { FormComponent } from './app/form.app.component';


bootstrapApplication(FormComponent, appConfig)
  .catch((err) => console.error('Error al inicializar la aplicación:', err));
