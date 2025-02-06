import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aboutus',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule],
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'], 
})
export class AboutUsComponent {
  title = 'aboutus'; 
}
