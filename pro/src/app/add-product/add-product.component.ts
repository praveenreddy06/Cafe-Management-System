import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private proser:ProductService,private route:Router) { }

  ngOnInit(): void {
  }

  addItem(addprodform:any){
    this.proser.addProduct(addprodform).subscribe((data:any)=>{
      console.log(data);
      this.route.navigate(['owner'])

    })
  }

}
