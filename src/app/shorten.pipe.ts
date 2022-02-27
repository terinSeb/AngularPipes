import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',
})
export class shortenPipe implements PipeTransform {
  transform(value: any, limit: any) {
    if (value.length > limit) {
      return value.substr(0, limit) + '...';
    } else {
      return value;
    }
  }
}
