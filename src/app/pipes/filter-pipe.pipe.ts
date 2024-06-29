import { Pipe, PipeTransform } from '@angular/core';
import { Work } from '../models/work';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Work[], filterText: string): Work[] {
    filterText=filterText?filterText.toLocaleLowerCase():"";
    return filterText!=""?value.filter((x:Work)=>x.description.indexOf(filterText)!==-1):value;
  }

}
