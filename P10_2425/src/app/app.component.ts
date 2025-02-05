import { Component } from '@angular/core';
import { NavegatorComponent } from './nav.app.component';
import { CardComponent } from './card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavegatorComponent, CardComponent],
  template: `
    <app-nav></app-nav> 
    <main>
      <app-card></app-card>
    </main>
  `
})
export class AppComponent {}
