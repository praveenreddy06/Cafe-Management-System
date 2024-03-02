import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PostmanService } from '../postman.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  
loger:any;
  constructor(private pser:PostmanService, private route:Router, ) { 
    this.loger=null;
  }

  ngOnInit(): void {
    
    this.pser.getAllUsers().subscribe((data:any)=>{
      this.loger=data;
      console.log(data);
    });
  }
  register(){
    this.route.navigate(['register'])
  }
  userType(loginForm:any){
   console.log(loginForm);
   
    if(loginForm.username=="cashier" && loginForm.password=="cashier"){
      this.route.navigate(['owner'])
      
    }else{
      let i=0;
        for(i=0;i<this.loger.length;i++){
          if(loginForm.username==this.loger[i].username && loginForm.password==this.loger[i].password){
            this.pser.setUserLoggedIn();
            this.pser.setUserDetails(this.loger[i]);
            alert("Welcome "+this.loger[i].name)
            this.route.navigate(['waiter']);
            break;
          }
        }
        if(i==this.loger.length)
          alert("Invalid Creds");
      
    }
   
   

  }
}
