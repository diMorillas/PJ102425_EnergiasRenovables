import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomePage } from './app/homepage.app.component';

bootstrapApplication(HomePage, appConfig)
  .catch((err) => console.error(err));
