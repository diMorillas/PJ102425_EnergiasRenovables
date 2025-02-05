import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NavegatorComponent } from './app/nav.app.component';
import { FormComponent } from './app/form.app.component';
import { FooterComponent } from './app/footer.app.component';
import { AboutUsComponent } from './app/aboutus.app.component';
import { AppComponent } from './app/app.component';
import { CardComponent } from './app/card.component';
import { importProvidersFrom } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule
    ), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync()
  ],
}).catch((err) => console.error(err));