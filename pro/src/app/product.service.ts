import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  getAllProducts(){
    return this.httpClient.get('getAllProducts');
  }

  deleteProduct(id:number){
    return this.httpClient.delete('deleteProduct/'+id)
  }

  addProduct(prod:any){
   return  this.httpClient.post('insertProduct',prod);
  }

  updateProductById(id:number,product:Product){
    return this.httpClient.put('updateProduct/'+id,product)

  }
  getprodByid(id:number):Observable<Product>{
    return this.httpClient.get<Product>('getProduct/'+id);

  }
}
