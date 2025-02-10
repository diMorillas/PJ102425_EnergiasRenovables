import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Energia } from './models/energia.model';
import { energies } from './data/energia.data';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { OrdenarCostePipe } from './pipe/ordenarCoste.pipe';
import { CalcularGastoPipe } from './pipe/calcularGasto.pipe';
import { CalcularAhorroCo2Pipe } from './pipe/calcularAhorro.pipe';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    OrdenarCostePipe,
    CalcularAhorroCo2Pipe,
    CalcularGastoPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Array completo de energías importado
  energies: Energia[] = energies;
  filterKeys: string[] = [
    'titulo',
    'subtitulo',
    'descripcion',
    'costoDeUso',
    'costoDeInstalacion',
    'duracion',
    'emisionesCo2',
    'continenteMaxProduction',
    'continenteMinProduction',
    'paisMaxProduction',
    'paisMinProduction' 
  ];

  // Propiedades para el filtrado, por ejemplo, filtrar por título
  filterTitle: string = '';
  selectedFilter: keyof Energia = 'titulo';

  // Método getter que filtra las energías en función del filtro
  get filteredEnergies(): Energia[] {
    if (!this.filterTitle.trim()) {
      return this.energies;
    }
    return this.energies.filter(energy =>
      energy.titulo.toLowerCase().includes(this.filterTitle.toLowerCase())
    );
  }
}
