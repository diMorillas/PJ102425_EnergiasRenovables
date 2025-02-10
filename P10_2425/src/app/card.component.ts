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
import { emisionesCo2Pipe } from './pipe/calcularAhorro.pipe';

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
    emisionesCo2Pipe,
    CalcularGastoPipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // Array de datos importado
  energies: Energia[] = energies;

  // Definición de filtros
  filterTitle: string = '';
  selectedFilter: keyof Energia = 'titulo';  // Por defecto, filtrar por 'titulo'
  filterKeys: (keyof Energia)[] = [
    'titulo',
    'subtitulo',
    'descripcion',
    'costoDeUso',
    'costoDeInstalacion',
    'duracion',
    'emisionesCo2',
    'continenteMaxProduccion',
    'continenteMinProduccion',
    'paisMaxProduccion',
    'paisMinProduccion'
  ];

  // Getter para filtrar el array de energías, se usa sin el ()
  get filteredEnergies(): Energia[] {
    if (!this.filterTitle.trim()) {
      return this.energies;
    }
    return this.energies.filter(energy => {
      const value = energy[this.selectedFilter] as string;
      return value && value.toLowerCase().includes(this.filterTitle.toLowerCase());
    });
  }
}