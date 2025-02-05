import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrdenarCostePipe } from './pipe/ordenarCoste.pipe';

export interface Energy {
  title: string;
  subtitle: string;
  description: string;
  costOfUse: string;
  installationCost: string;
  duration: string;
  co2Emissions: string;
  continentMaxProduction: string;
  continentMinProduction: string;
  img: string;
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule, OrdenarCostePipe],
  templateUrl: 'card.component.html',
  styleUrls: ['card.component.css']
})
export class CardComponent {
  filterKeys: (keyof Energy)[] = [
    'title', 'subtitle', 'costOfUse', 'installationCost', 
    'duration', 'co2Emissions', 'continentMaxProduction', 'continentMinProduction'
  ];
  
  selectedFilter: keyof Energy = 'title';
  filterValue: string = '';

  renewableEnergies: Energy[] = [
    {
      title: 'Energía Solar',
      subtitle: 'Aprovecha la energía del sol',
      description: 'La energía solar es una de las fuentes renovables más limpias y abundantes.',
      costOfUse: '0.05 €/kWh',
      installationCost: '1,200 € - 3,000 €',
      duration: '25 - 30 años',
      co2Emissions: '0 g/kWh',
      continentMaxProduction: 'Asia',
      continentMinProduction: 'Europa',
      img: 'solar.jpg'
    },
    {
      title: 'Energía Eólica',
      subtitle: 'Aprovecha el viento para generar electricidad',
      description: 'La energía eólica es una fuente renovable que aprovecha el viento.',
      costOfUse: '0.03 €/kWh',
      installationCost: '1,500 € - 4,000 €',
      duration: '20 - 25 años',
      co2Emissions: '0 g/kWh',
      continentMaxProduction: 'Europa',
      continentMinProduction: 'África',
      img: 'eolica.jpg'
    }
  ];

  nonRenewableEnergies: Energy[] = [
    {
      title: 'Petróleo',
      subtitle: 'Fuente no renovable',
      description: 'El petróleo es un recurso no renovable utilizado para generar energía.',
      costOfUse: '0.10 €/kWh',
      installationCost: '5,000 € - 10,000 €',
      duration: '15 - 20 años',
      co2Emissions: '700 - 800 g/kWh',
      continentMaxProduction: 'Asia',
      continentMinProduction: 'Europa',
      img: 'petroleo.jpg'
    },
    {
      title: 'Gas',
      subtitle: 'Energía fósil',
      description: 'El gas natural es una fuente fósil de energía que se utiliza en calefacción y electricidad.',
      costOfUse: '0.08 €/kWh',
      installationCost: '3,000 € - 8,000 €',
      duration: '20 - 30 años',
      co2Emissions: '450 - 500 g/kWh',
      continentMaxProduction: 'Asia',
      continentMinProduction: 'África',
      img: 'gas.webp'
    }
  ];

  filteredEnergies(): Energy[] {
    const allEnergies = [...this.renewableEnergies, ...this.nonRenewableEnergies];

    if (!this.filterValue.trim()) {
      return allEnergies; // Si no hay filtro, mostrar todas
    }

    return allEnergies.filter(energy =>
      energy[this.selectedFilter]?.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}