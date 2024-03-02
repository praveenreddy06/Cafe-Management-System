import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  details:any;
  constructor(private pro:EmpService){

  }
  ngOnInit(): void {
  }
    getno(){
      this.pro.getProducts().subscribe((data:any)=>{
        console.log(data);
        this.details=data;
      })
    }
  }


