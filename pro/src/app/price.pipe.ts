import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {
  
  transform(value: number,price:number): number{
    return value * price;
  }

}
