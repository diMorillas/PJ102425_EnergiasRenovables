import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-media-notas',
  templateUrl: './equipo-emparejar.component.html',
  styleUrls: ['./equipo-emparejar.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class emparejarEquipo {
  equipos1: String[] = ['Equipo A', 'Equipo B', 'Equipo C', 'Equipo D'];
  equipos2: String[] = ['Equipo X', 'Equipo Y', 'Equipo Z', 'Equipo W'];
  equipo1: String | null = null;
  equipo2: String | null = null;

  agregarEquipos() {
    if (this.equipo1 != null && this.equipo2 != null) {
      console.log('Equipo 1: ', this.equipo1);
      console.log('Equipo 2: ', this.equipo2);
      // Logic to handle the teams (add them to another array, etc.)
      this.equipo1 = null;
      this.equipo2 = null;
    } else {
      console.log('Selecciona ambos equipos.');
    }
  }
}
