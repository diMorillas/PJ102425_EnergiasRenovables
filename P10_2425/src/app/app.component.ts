/* No tocar */
import { Component } from '@angular/core';
import { FooterComponent } from './footer.app.component';  
import { NavegatorComponent } from './nav.app.component';  
import { RouterModule } from '@angular/router';
/* No tocar */

/*Cambiar para ir probando, tambien añadair en imports*/
import { CardComponent } from "./card.component";  


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavegatorComponent, RouterModule, CardComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
