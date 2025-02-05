import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './aboutus.app.component';
import { FormComponent } from './form.app.component';
import { CardComponent } from './card.component';
import { NavegatorComponent } from './nav.app.component';
import { FooterComponent } from './footer.app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavegatorComponent, FooterComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `
})
export class AppComponent {}
