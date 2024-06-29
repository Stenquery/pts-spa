import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
  standalone: true
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number { // value bizim asıl değerimiz rate ise ilk parametre. Başka olursa onları da alırız
    return value+(value*rate/100);
  }

}
