import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
function _window() : any {
  
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class PostmanService {
  get nativeWindow() : any {
    return _window();
 }

  userLoggedIn:any;
  userDetails:any;
user:User=new User();
  constructor(private httpClient:HttpClient) { }
  setUserLoggedIn(){
    this.userLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.userLoggedIn;
  }
  setUserDetails(userDetails:any){
    this.userDetails=userDetails;
  }
  setUerLoggedOut(){
    this.userLoggedIn=false;
  }

  registerUser(user:any){
    return this.httpClient.post('createUser',user);

  }

  getAllUsers(){
    return this.httpClient.get('displayUsers')
  }
}
