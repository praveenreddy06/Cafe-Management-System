import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private emp:EmpService) { }
  registrationok(regForm:any){
    console.log(regForm)
      }

}
