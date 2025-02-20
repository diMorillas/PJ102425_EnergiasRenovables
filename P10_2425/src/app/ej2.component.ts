import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';  
import { CognomPipe } from './pipe/cognomPipe.pipe';

@Component({
  selector: 'app-media-notas',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, CognomPipe]  
})

export class Persona {
  nom: string = '';
  cognom1: string = ''; 
  cognom2: string = ''; 
  persones: { nom: string, cognom1: string, cognom2: string }[] = [];


  afegirPersona() {
    if (this.nom && this.cognom1 && this.cognom2) {
      this.persones.push({ nom: this.nom, cognom1: this.cognom1, cognom2: this.cognom2 });

     
      this.nom = '';
      this.cognom1 = '';
      this.cognom2 = '';
    }
  }


  eliminarPersona(index: number) {
    this.persones.splice(index, 1);  
  }
}
