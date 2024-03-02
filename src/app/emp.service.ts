import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
userLoggedIn:any;
  constructor(private pro:HttpClient) {
    this.userLoggedIn = false;
   }
   setUserLoggedIn(){
    this.userLoggedIn=true;

   }
   getUserLoggedIn(){
    return this.userLoggedIn;
   }
   setUserLoggedOut(){
    this.userLoggedIn=false;
   }
   getProducts(){
    return this.pro.get('/products/list')
   }
}
