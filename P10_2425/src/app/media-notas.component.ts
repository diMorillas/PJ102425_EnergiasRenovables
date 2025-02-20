import { Component } from '@angular/core';
import { MediaNotasPipe } from './pipe/media-notas.pipe';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-media-notas',
  templateUrl: './media-notas.component.html',
  styleUrls: ['./media-notas.component.css'],
  standalone: true,
  imports: [MediaNotasPipe, FormsModule]
})
export class MediaNotasComponent {
  notas: number[] = [];
  nuevaNota: number | null = null;


  agregarNota() {
    if (this.nuevaNota !== null && this.nuevaNota <=10  && this.nuevaNota >=0) {
      this.notas = [...this.notas, + this.nuevaNota];
      this.nuevaNota = null; 
    }else{
        console.log("nota incorrecta, inténtalo de nuevo máquina");
        alert("uuups, la nota es incorrecta");
    }
  }

}