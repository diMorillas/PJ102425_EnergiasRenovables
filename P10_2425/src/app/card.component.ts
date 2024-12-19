import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `

    <!-- Sección de Energías Renovables -->
    <h2>Energías Renovables</h2>
    <div class="card-container">
      <!-- Energía Solar -->
      <div class="card">
        <img src="solar.jpg" alt="Energía Solar" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Energía Solar</h5>
          <h6 class="card-subtitle mb-2 text-muted">Aprovecha la energía del sol</h6>
          <p class="card-text">La energía solar es una de las fuentes renovables más limpias y abundantes.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.05 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 1,200 € - 3,000 €</li>
            <li><strong>Años de duración:</strong> 25 - 30 años</li>
            <li><strong>Emisiones de CO2:</strong> 0 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> Asia</li>
            <li><strong>Continente con menor producción:</strong> Europa</li>
          </ul>
        </div>
      </div>

      <!-- Energía Eólica -->
      <div class="card">
        <img src="eolica.jpg" alt="Energía Eólica" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Energía Eólica</h5>
          <h6 class="card-subtitle mb-2 text-muted">Aprovecha el viento para generar electricidad</h6>
          <p class="card-text">La energía eólica es una fuente renovable que aprovecha el viento.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.03 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 1,500 € - 4,000 €</li>
            <li><strong>Años de duración:</strong> 20 - 25 años</li>
            <li><strong>Emisiones de CO2:</strong> 0 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> Europa</li>
            <li><strong>Continente con menor producción:</strong> África</li>
          </ul>
        </div>
      </div>

      <!-- Energía Hidráulica -->
      <div class="card">
        <img src="hidraulica.jpg" alt="Energía Hidráulica" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Energía Hidráulica</h5>
          <h6 class="card-subtitle mb-2 text-muted">Genera energía con el agua</h6>
          <p class="card-text">La energía hidráulica utiliza el flujo de agua para generar electricidad.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.04 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 1,000 € - 2,500 €</li>
            <li><strong>Años de duración:</strong> 30 - 40 años</li>
            <li><strong>Emisiones de CO2:</strong> 0 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> América del Sur</li>
            <li><strong>Continente con menor producción:</strong> África</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sección de Energías No Renovables -->
    <h2>Energías No Renovables</h2>
    <div class="card-container">
      <!-- Petróleo -->
      <div class="card">
        <img src="petroleo.jpg" alt="Petróleo" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Petróleo</h5>
          <h6 class="card-subtitle mb-2 text-muted">Fuente no renovable</h6>
          <p class="card-text">El petróleo es un recurso no renovable utilizado para generar energía.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.10 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 5,000 € - 10,000 €</li>
            <li><strong>Años de duración:</strong> 15 - 20 años</li>
            <li><strong>Emisiones de CO2:</strong> 700 - 800 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> Asia</li>
            <li><strong>Continente con menor producción:</strong> Europa</li>
          </ul>
        </div>
      </div>

      <!-- Gas -->
      <div class="card">
        <img src="gas.webp" alt="Gas" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Gas</h5>
          <h6 class="card-subtitle mb-2 text-muted">Energía fósil</h6>
          <p class="card-text">El gas natural es una fuente fósil de energía que se utiliza en calefacción y electricidad.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.08 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 3,000 € - 8,000 €</li>
            <li><strong>Años de duración:</strong> 20 - 30 años</li>
            <li><strong>Emisiones de CO2:</strong> 450 - 500 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> Asia</li>
            <li><strong>Continente con menor producción:</strong> África</li>
          </ul>
        </div>
      </div>

      <!-- Carbón -->
      <div class="card">
        <img src="carbon.webp" alt="Carbón" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">Carbón</h5>
          <h6 class="card-subtitle mb-2 text-muted">Energía fósil</h6>
          <p class="card-text">El carbón es un recurso no renovable utilizado ampliamente para generar electricidad.</p>
          <ul>
            <li><strong>Coste de uso promedio:</strong> 0.09 €/kWh</li>
            <li><strong>Coste de instalación:</strong> 4,000 € - 12,000 €</li>
            <li><strong>Años de duración:</strong> 25 - 40 años</li>
            <li><strong>Emisiones de CO2:</strong> 800 - 1,100 g/kWh</li>
            <li><strong>Continente con mayor producción:</strong> Asia</li>
            <li><strong>Continente con menor producción:</strong> Oceanía</li>
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
export class CardComponent {}
