import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus',  // Asegúrate de que el nombre de la pipe sea 'mayus'
  standalone: true
})
export class CognomPipe implements PipeTransform {  // Renombrada a 'CognomPipe' por convención

  transform(value: string): string {
    return value ? value.toUpperCase() : value;
  }
}
