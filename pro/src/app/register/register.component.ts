import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostmanService } from '../postman.service';
// import { UserService } from '../service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
users:any;
  constructor(private service:PostmanService,private route:Router) { }

  ngOnInit(): void {
    this.service.getAllUsers().subscribe((data:any)=>{
      this.users=data;
    })
    
  }

  submitUser(userForm:any){
    for(let i=0;i<this.users.length;i++){
      if(userForm.username==this.users[i].username){
        alert("Username already registered")
      }else{
        this.service.registerUser(userForm).subscribe((data)=>{
          console.log(data);
          alert("registration successful...!!!")
          this.route.navigate(['login'])
        })

      }
    }
     
  }
}
