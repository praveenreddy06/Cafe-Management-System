import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Waiter } from '../waiter';
import { WaiterService } from '../waiter.service';

@Component({
  selector: 'app-editorder',
  templateUrl: './editorder.component.html',
  styleUrls: ['./editorder.component.css']
})
export class EditorderComponent implements OnInit {
  sno:any;
  orders:any;
order:Waiter=new Waiter();
  constructor(private service:WaiterService, private aroute:ActivatedRoute, 
    private route:Router,private pser:ProductService) { }

  ngOnInit(): void {
    this.sno=this.aroute.snapshot.params['sno'];
    this.service.getOrderById(this.sno).subscribe((data:Waiter)=>{
      this.order=data;
    }, error =>console.log(error));
    this.pser.getAllProducts().subscribe((data:any)=>{
      this.orders=data;
      console.log(data);
      
    })
  }
  onSubmit(){
    this.service.editorders(this.sno,this.order).subscribe(data=>{
      this.route.navigate(['waiter'])
    })
   

  }

}
