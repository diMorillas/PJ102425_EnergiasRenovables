import { Pipe, PipeTransform } from '@angular/core';
import { Energy } from '../card.component';  // Asegúrate de usar la ruta correcta

@Pipe({
  name: 'ordenarCoste',
  standalone: true
})
export class OrdenarCostePipe implements PipeTransform {
  transform(energias: Energy[], orden: 'asc' | 'desc' = 'asc'): Energy[] {
    return energias.sort((a, b) => {
      const costA = parseFloat(a.costOfUse.replace(' €/kWh', '').replace(',', '.'));
      const costB = parseFloat(b.costOfUse.replace(' €/kWh', '').replace(',', '.'));
      if (orden === 'asc') {
        return costA - costB;
      } else {
        return costB - costA;
      }
    });
  }
}