import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emisiones',
    standalone: true
})
export class EmisionesPipe implements PipeTransform {
    transform(consumoKWh: number, CO2NoRenovable: number = 0.4, CO2Renovable: number = 0.02): number {
        if (!consumoKWh || isNaN(consumoKWh) || consumoKWh <= 0) {
            return 0;
        }
        const emisionesNoRenovable = consumoKWh * CO2NoRenovable;
        const emisionesRenovable = consumoKWh * CO2Renovable;
        return emisionesNoRenovable - emisionesRenovable;
    }
}