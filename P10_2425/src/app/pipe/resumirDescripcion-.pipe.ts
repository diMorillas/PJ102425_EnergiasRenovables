import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumirDescripcion'
})
export class ResumirDescripcionPipe implements PipeTransform {
  transform(value: string, limite: number = 100): string {
    if (!value) return '';
    return value.length > limite ? `${value.substring(0, limite)}...` : value;
  }
}