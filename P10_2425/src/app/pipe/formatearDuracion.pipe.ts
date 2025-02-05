import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatearDuracion'
})
export class FormatearDuracionPipe implements PipeTransform {
  transform(value: string): string {
    return value ? `De ${value.split(' - ')[0]} a ${value.split(' - ')[1]} años` : 'Información no disponible';
  }
}