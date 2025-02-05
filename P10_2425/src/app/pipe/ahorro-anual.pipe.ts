import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ahorroEnergiaRenovable',
  standalone: true
})
export class AhorroEnergiaRenovablePipe implements PipeTransform {
    transform(consumoAnual: number, precioEnergía: number, tipoEnergia: string): number {
        const preciosRenovables: { [key: string]: number } = {
            solar: 0.05,
            eolica: 0.04,
            hidro: 0.03,
            biomasa: 0.06
          };          
      
        if (!preciosRenovables[tipoEnergia]) {
          return 0;
        }
      
        const costoRenovableAnual = consumoAnual * preciosRenovables[tipoEnergia];
        const costoNoRenovableAnual = consumoAnual * precioEnergía;
        return costoNoRenovableAnual - costoRenovableAnual;      
    }
}
