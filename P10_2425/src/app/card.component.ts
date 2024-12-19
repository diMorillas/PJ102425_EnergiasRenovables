import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  template: `
    <!-- Sección de Energías Renovables -->
    <h2>Energías Renovables</h2>
    <div class="card-container">
      <div class="card" *ngFor="let energy of renewableEnergies">
        <img [src]="energy.img" [alt]="energy.title" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ energy.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ energy.subtitle }}</h6>
          <p class="card-text">{{ energy.description }}</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> {{ energy.costOfUse }}</li>
            <li><strong>Coste de instalación:</strong> {{ energy.installationCost }}</li>
            <li><strong>Años de duración:</strong> {{ energy.duration }}</li>
            <li><strong>Emisiones de CO2:</strong> {{ energy.co2Emissions }}</li>
            <li><strong>Continente con mayor producción:</strong> {{ energy.continentMaxProduction }}</li>
            <li><strong>Continente con menor producción:</strong> {{ energy.continentMinProduction }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sección de Energías No Renovables -->
    <h2>Energías No Renovables</h2>
    <div class="card-container">
      <div class="card" *ngFor="let energy of nonRenewableEnergies">
        <img [src]="energy.img" [alt]="energy.title" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ energy.title }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ energy.subtitle }}</h6>
          <p class="card-text">{{ energy.description }}</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> {{ energy.costOfUse }}</li>
            <li><strong>Coste de instalación:</strong> {{ energy.installationCost }}</li>
            <li><strong>Años de duración:</strong> {{ energy.duration }}</li>
            <li><strong>Emisiones de CO2:</strong> {{ energy.co2Emissions }}</li>
            <li><strong>Continente con mayor producción:</strong> {{ energy.continentMaxProduction }}</li>
            <li><strong>Continente con menor producción:</strong> {{ energy.continentMinProduction }}</li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
    }

    .card {
      flex: 1 1 calc(20% - 20px);
      margin: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
      box-sizing: border-box;
    }

    .card-img-top {
      width: 100%;
      height: auto;
      object-fit: contain;
    }

    .card-body {
      text-align: center;
    }

    .card-title {
      font-size: 1.25rem;
      font-weight: bold;
    }

    .card-subtitle {
      font-size: 1rem;
      color: #6c757d;
    }

    .card-text {
      font-size: 0.875rem;
      color: #333;
    }

    h2 {
      text-align: center;
      font-size: 1.5rem;
      margin-top: 30px;
      margin-bottom: 20px;
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    ul li {
      font-size: 0.875rem;
      color: #333;
      margin-bottom: 5px;
    }

    ul li strong {
      font-weight: bold;
    }
  `]
})
export class CardComponent {

  renewableEnergies = [
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
    },
    {
      title: 'Energía Hidráulica',
      subtitle: 'Genera energía con el agua',
      description: 'La energía hidráulica utiliza el flujo de agua para generar electricidad.',
      costOfUse: '0.04 €/kWh',
      installationCost: '1,000 € - 2,500 €',
      duration: '30 - 40 años',
      co2Emissions: '0 g/kWh',
      continentMaxProduction: 'América del Sur',
      continentMinProduction: 'África',
      img: 'hidraulica.jpg'
    }
  ];

  nonRenewableEnergies = [
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
    },
    {
      title: 'Carbón',
      subtitle: 'Energía fósil',
      description: 'El carbón es un recurso no renovable utilizado ampliamente para generar electricidad.',
      costOfUse: '0.09 €/kWh',
      installationCost: '4,000 € - 12,000 €',
      duration: '25 - 40 años',
      co2Emissions: '800 - 1,100 g/kWh',
      continentMaxProduction: 'Asia',
      continentMinProduction: 'Oceanía',
      img: 'carbon.jpg'
    }
  ];

}
