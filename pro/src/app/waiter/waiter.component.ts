import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
products:any;
waiter:any;

  constructor(private pser:ProductService,private wser:WaiterService,private route:Router) { }

  ngOnInit(): void {
    this.getAllorders();
  }
  
  getAllorders(){
    this.wser.getOrders().subscribe((data:any)=>{
      this.waiter=data;
      console.log(data);
    })
  }

  neworder(){
    this.route.navigate(['addorder']);
  }
  bill(){
    this.route.navigate(['bill']);
  }

  delorder(sno:number){
    this.wser.deleteOrder(sno).subscribe((data:any)=>{
      console.log(data);
      this.getAllorders();
    })

  }
  editorder(sno:number){
    this.route.navigate(['editorder/'+sno])
  }
 
}
