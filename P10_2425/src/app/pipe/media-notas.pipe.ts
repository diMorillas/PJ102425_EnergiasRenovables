import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mediaNotas',
  standalone: true,
  pure: false
})
export class MediaNotasPipe implements PipeTransform {
  transform(value: number[]): number {
    if (value.length === 0) {
      return 0;
    }
    const suma = value.reduce((acc, nota) => acc + nota, 0);
    return suma / value.length;
  }
}