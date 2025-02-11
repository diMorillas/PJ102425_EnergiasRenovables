import { Pipe, PipeTransform } from '@angular/core';
import { Energia } from '../models/energia.model';

@Pipe({
  name: 'emisionesCo2',
  standalone: true
})
export class emisionesCo2Pipe implements PipeTransform {
  transform(energia: Energia, tipo: string): string {
    if (!energia || !energia.emisionesCo2  || energia.emisionesCo2.trim() === '') {
      return '0 g/kWh';
    }
    const valores = energia.emisionesCo2.match(/\d+/g);

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