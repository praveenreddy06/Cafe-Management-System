import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Waiter } from './waiter';

@Injectable({
  providedIn: 'root'
})
export class WaiterService {

  constructor(private httpClient:HttpClient) { }

  getOrders(){
    return this.httpClient.get('getAllOrders');
  }

  addOrder(order:any){
    return this.httpClient.post('createOrder',order);

  }
  
  
  editorders(sno:number,order:Waiter):Observable<object>{
    return this.httpClient.put('updateOrder/'+sno,order)


  }
  getOrderById(sno:number):Observable<Waiter>{
    return this.httpClient.get<Waiter>('getOrderById/'+sno);

  }

deleteOrder(sno:number){
  return this.httpClient.delete('deleteOrder/'+sno);
}

getOrderByOid(orderId:number):Observable<Waiter>{
  return this.httpClient.get<Waiter>('OrderByOrderId/'+orderId);
}
updateStatus(orderno:number,waiter:any){
  return this.httpClient.put('updatePayment/'+orderno,waiter)

}

}
