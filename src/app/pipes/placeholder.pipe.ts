import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceHolderPipe implements PipeTransform {
  transform(value: string, valorDefault:string):string {  
       return ( value )? value : valorDefault;
  }
}
