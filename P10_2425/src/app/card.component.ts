import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenarCostePipe } from './pipe/ordenarCoste.pipe';

export interface Energia {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  costoDeUso: string;
  costoDeInstalacion: string;
  duracion: string;
  emisionesCo2: string;
  continenteMaxProduccion: string;
  continenteMinProduccion: string;
  imagen: string;
}


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, OrdenarCostePipe],
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {
  filterKeys: (keyof Energia)[] = [
    'titulo', 'subtitulo', 'costoDeUso', 'costoDeInstalacion',
    'duracion', 'emisionesCo2', 'continenteMaxProduccion', 'continenteMinProduccion'
  ];
  
  selectedFilter: keyof Energia = 'titulo';
  filterValue: string = '';

  renewableEnergies: Energia[] = [
    {
      titulo: 'Energía Solar',
      subtitulo: 'Aprovecha la energía del sol',
      descripcion: 'La energía solar es una de las fuentes renovables más limpias y abundantes.',
      costoDeUso: '0.05 €/kWh',
      costoDeInstalacion: '1,200 € - 3,000 €',
      duracion: '25 - 30 años',
      emisionesCo2: '0 g/kWh',
      continenteMaxProduccion: 'Asia',
      continenteMinProduccion: 'Europa',
      imagen: 'solar.jpg'
    },
    {
      titulo: 'Energía Eólica',
      subtitulo: 'Aprovecha el viento para generar electricidad',
      descripcion: 'La energía eólica es una fuente renovable que aprovecha el viento.',
      costoDeUso: '0.03 €/kWh',
      costoDeInstalacion: '1,500 € - 4,000 €',
      duracion: '20 - 25 años',
      emisionesCo2: '0 g/kWh',
      continenteMaxProduccion: 'Europa',
      continenteMinProduccion: 'África',
      imagen: 'eolica.jpg'
    }
  ];
  
  nonRenewableEnergies: Energia[] = [
    {
      titulo: 'Petróleo',
      subtitulo: 'Fuente no renovable',
      descripcion: 'El petróleo es un recurso no renovable utilizado para generar energía.',
      costoDeUso: '0.10 €/kWh',
      costoDeInstalacion: '5,000 € - 10,000 €',
      duracion: '15 - 20 años',
      emisionesCo2: '700 - 800 g/kWh',
      continenteMaxProduccion: 'Asia',
      continenteMinProduccion: 'Europa',
      imagen: 'petroleo.jpg'
    },
    {
      titulo: 'Gas',
      subtitulo: 'Energía fósil',
      descripcion: 'El gas natural es una fuente fósil de energía que se utiliza en calefacción y electricidad.',
      costoDeUso: '0.08 €/kWh',
      costoDeInstalacion: '3,000 € - 8,000 €',
      duracion: '20 - 30 años',
      emisionesCo2: '450 - 500 g/kWh',
      continenteMaxProduccion: 'Asia',
      continenteMinProduccion: 'África',
      imagen: 'gas.webp'
    }
  ];
  
  filteredEnergies(): Energia[] {
    const allEnergies = [...this.renewableEnergies, ...this.nonRenewableEnergies];

    if (!this.filterValue.trim()) {
      return allEnergies; // Si no hay filtro, mostrar todas
    }

    return allEnergies.filter(energy =>
      energy[this.selectedFilter]?.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}