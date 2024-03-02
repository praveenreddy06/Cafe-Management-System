import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private emp:EmpService){


}
logout(){
  return this.emp.setUserLoggedOut();
}
}
