import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPrefix'
})
export class MyPrefixPipe implements PipeTransform {
  transform(value: string, customPrefix?: string): string {
    if(customPrefix){
      return `${customPrefix} - ${value}`;
    }

    return `AKA- ${value}`;
  }
}
