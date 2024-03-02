import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id:any;
product:Product=new Product();
  constructor(private prdser:ProductService, private aroute:ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.id=this.aroute.snapshot.params['id'];
    this.prdser.getprodByid(this.id).subscribe((data:Product)=>{
      this.product=data;
    }, error =>console.log(error));
  }
  onSubmit(){
    this.prdser.updateProductById(this.id,this.product).subscribe(data=>{
      this.route.navigate(['owner']);
    })

  }

}
