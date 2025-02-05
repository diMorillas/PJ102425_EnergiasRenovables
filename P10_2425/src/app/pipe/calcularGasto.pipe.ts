import { Pipe, PipeTransform } from '@angular/core';
import { Energy } from '../card.component';

@Pipe({
  name: 'calcularGasto',
  standalone: true
})
export class CalcularGastoPipe implements PipeTransform {

  transform(energy: Energy): string {
    // Extraemos el coste de uso por kWh (en €/kWh), y lo convertimos a número
    const costePorKWh = parseFloat(energy.costOfUse.split(' €/kWh')[0]);

    // Extraemos los años de duración (en el formato "X - Y años"), y tomamos el valor promedio
    const [minYears, maxYears] = energy.duration.split(' - ').map(y => parseInt(y, 10));
    const promedioAnios = (minYears + maxYears) / 2;

    const horasPorDia = 12;
    const consumoAnual = horasPorDia * 365 * costePorKWh;

    const gastoTotal = consumoAnual * promedioAnios;

    return `${gastoTotal.toFixed(2)} €`;
  }
}