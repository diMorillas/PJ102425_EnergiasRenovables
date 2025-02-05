import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amortizacion',
  standalone: true
})
export class AmortizacionPipe implements PipeTransform {
  transform(costoInstalacion: number, duracion: number): number {
    if (!costoInstalacion || !duracion || duracion <= 0) {
      return 0;
    }
    return costoInstalacion / duracion;
  }
}