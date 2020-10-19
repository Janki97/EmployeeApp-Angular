import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, input: string, searchableList: any) {
    if(!value || !input)  {
        return value;
    }
    return value.filter(item =>
         item.name.toLowerCase().indexOf(input) > -1 ||
         item.position.toLowerCase().indexOf(input) > -1 ||
         item.phone.toString().toLowerCase().indexOf(input) > -1 
         );
    }

}
