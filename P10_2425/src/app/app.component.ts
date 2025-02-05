import { Component } from '@angular/core';
import { FooterComponent } from './footer.app.component';  
import { NavegatorComponent } from './nav.app.component';  
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FooterComponent, NavegatorComponent, RouterModule],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
