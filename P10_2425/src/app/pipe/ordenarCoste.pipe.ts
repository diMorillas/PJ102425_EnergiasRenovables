import { Pipe, PipeTransform } from '@angular/core';
import { Energia } from '../models/energia.model';

@Pipe({
  name: 'ordenarCoste',
  standalone: true
})
export class OrdenarCostePipe implements PipeTransform {
  transform(energias: Energia[], orden: 'asc' | 'desc' = 'asc'): Energia[] {
    return energias.sort((a, b) => {
      const costA = parseFloat(a.costoDeUso.replace(' €/kWh', '').replace(',', '.'));
      const costB = parseFloat(b.costoDeUso.replace(' €/kWh', '').replace(',', '.'));
      if (orden === 'asc') {
        return costA - costB;
      } else {
        return costB - costA;
      }
    });
  }
}