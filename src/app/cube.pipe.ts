import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cube'
})
export class CubePipe implements PipeTransform {

  transform(value: any): any {
    return value*value*value;
  }

}
