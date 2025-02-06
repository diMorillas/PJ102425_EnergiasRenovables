import { Pipe, PipeTransform } from '@angular/core';
import { Energy } from '../card.component';

@Pipe({
  name: 'calcularAhorroCo2',
  standalone: true
})
export class CalcularAhorroCo2Pipe implements PipeTransform {
  transform(energy: Energy, tipo: string): string {
    if (!energy || !energy.co2Emissions || energy.co2Emissions.trim() === '') {
      return '0 g/kWh';
    }
    const valores = energy.co2Emissions.match(/\d+/g);
    
    if (!valores || valores.length === 0) {
      return '0 g/kWh';
    }

    const valoresNum = valores.map(Number);

    const co2Promedio = valoresNum.reduce((a, b) => a + b, 0) / valoresNum.length;

    const co2Anual = co2Promedio * 15 * 365;

    if (tipo === 'renovable') {
      return `${co2Anual.toFixed(0)} g/kWh (sin emisiones)`;
    } else {
      return `${co2Anual.toFixed(0)} g/kWh`;
    }
  }
}