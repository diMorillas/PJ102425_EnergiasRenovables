import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-media-notas',
  templateUrl: './equipo-add.component.html',
  styleUrls: ['./equipo-add.component.css'],
  standalone: true,
  imports: [FormsModule]
})
export class añadirEquipo {
  partidos: String[] = [];
  equipos1:String[] = [];
  equipos2:String[] = [];
  equipo1: String | null = null;
  equipo2:String | null = null;


  agregarEquipos() {
    if (this.equipo1 !=null && this.equipo2 !=null ) {
      this.equipos1.push(this.equipo1);
      this.equipos2.push(this.equipo2);
      console.log(this.equipos1);
      console.log(this.equipos2);
      this.equipo1 = null;
      this.equipo2 = null; 
    }else{
        console.log("algo ha ido mal");
        
    }
  }

}