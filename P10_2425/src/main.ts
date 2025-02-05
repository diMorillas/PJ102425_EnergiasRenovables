import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavegatorComponent } from './app/nav.app.component';
import { FormComponent } from './app/form.app.component';
import { FooterComponent } from './app/footer.app.component';
import { AboutUsComponent } from './app/aboutus.app.component';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error('Error al inicializar la aplicación:', err));
