import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-addorder',
  templateUrl: './addorder.component.html',
  styleUrls: ['./addorder.component.css']
})
export class AddorderComponent implements OnInit {
productlist:any;
isCollapsed:boolean=true;
tables:any
products:any;
  constructor(private wser:WaiterService,private route:Router,private pser:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
    this.pser.getAllProducts().subscribe((data:any)=>{
      this.productlist=data;
      console.log(data);
    })
   

  }

  neworder(addorderform:any){
    console.log(addorderform);
    this.wser.addOrder(addorderform).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['waiter'])
    })
  }
  showprod(){
    this.isCollapsed=!this.isCollapsed;
  }
  getProducts(){
    this.pser.getAllProducts().subscribe((data:any)=>{
      this.products=data;
      console.log(data);
    })
  }

}
