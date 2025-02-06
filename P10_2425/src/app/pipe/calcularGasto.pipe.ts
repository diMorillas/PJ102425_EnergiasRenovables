import { Pipe, PipeTransform } from '@angular/core';
import { Energy } from '../card.component';

@Pipe({
  name: 'calcularGasto',
  standalone: true
})
export class CalcularGastoPipe implements PipeTransform {

  transform(energy: Energy): string {
    const costePorKWh = parseFloat(energy.costOfUse.split(' €/kWh')[0]); //aqui se cambia el valor string a numerico

    const [minYears, maxYears] = energy.duration.split(' - ').map(y => parseInt(y, 10));
    const promedioAnios = (minYears + maxYears) / 2;

    const horasPorDia = 12;
    const consumoAnual = horasPorDia * 365 * costePorKWh;

    const gastoTotal = consumoAnual * promedioAnios;

    return `${gastoTotal.toFixed(2)} €`;
  }
}