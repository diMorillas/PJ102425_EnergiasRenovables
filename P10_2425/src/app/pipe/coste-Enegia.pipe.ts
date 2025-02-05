import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'costeEnergia',
    standalone: true
})
export class CosteEnergiaPipe implements PipeTransform{
    transform(consumoKWh: number, precioKWh: number = 0.15): number{
        if(!consumoKWh || isNaN(consumoKWh)){
            return 0;
        }

        return consumoKWh * precioKWh;
    }
}