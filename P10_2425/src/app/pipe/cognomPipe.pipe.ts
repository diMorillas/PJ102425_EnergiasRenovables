import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mayus',
  standalone: true
})
export class CognomPipe implements PipeTransform {

  transform(value: string): string {
    return value ? value.toUpperCase() : value;
  }
}
