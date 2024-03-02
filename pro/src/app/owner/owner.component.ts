import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostmanService } from '../postman.service';
import { ProductService } from '../product.service';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.css']
})
export class OwnerComponent implements OnInit {
  products:any;
  isCollapsed:boolean=true;
  orderCollapsed:boolean=true;
  userCollapsed:boolean=true;
  waiter:any;
  users:any;
  constructor(private pser:ProductService,private route:Router,
    private wser:WaiterService,private logser:PostmanService) { }

  ngOnInit(): void {
    this.getProducts();
    this. getAllorders();
    this.getuser();
  }
  showprod(){
    this.isCollapsed=!this.isCollapsed;
  }
  showorder(){
    this. orderCollapsed=!this. orderCollapsed;
  }
  showusers(){
    this.userCollapsed=!this.userCollapsed;
  }
  getProducts(){
    this.pser.getAllProducts().subscribe((data:any)=>{
      this.products=data;
      console.log(data);
    })
  }
  delprod(id:number){
    this.pser.deleteProduct(id).subscribe((data:any)=>{
      console.log(data);
      this.getProducts();
    })
  }
  addprod(){
    this.route.navigate(['addproduct']);

  }
  editprod(id:number){
    this.route.navigate(['updateproduct/'+id]);
  }

  getAllorders(){
    this.wser.getOrders().subscribe((data:any)=>{
      this.waiter=data;
      console.log(data);
    })
  }
  getuser(){
    this.logser.getAllUsers().subscribe((data:any)=>{
      this.users=data;
      console.log(data);
    });
  }

 
}
