import {
  Pipe,
  PipeTransform,
  ɵclearResolutionOfComponentResourcesQueue,
} from '@angular/core';

@Pipe({
  name: 'sortPipe',
})
export class SortPipePipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a, b) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}
