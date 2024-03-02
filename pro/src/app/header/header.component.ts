import { Component, OnInit } from '@angular/core';
import { PostmanService } from '../postman.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private poser:PostmanService) { }

  ngOnInit(): void {
  }
  logout(){
    this.poser.setUerLoggedOut();
  }
  

}
