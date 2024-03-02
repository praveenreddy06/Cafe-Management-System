import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddorderComponent } from './addorder/addorder.component';
import { BillComponent } from './bill/bill.component';
import { EditorderComponent } from './editorder/editorder.component';
import { LoginComponent } from './login/login.component';
import { OwnerComponent } from './owner/owner.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { WaiterComponent } from './waiter/waiter.component';

const routes: Routes = [{path:"",component:SuccessComponent},
{path:"login",component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"owner",component:OwnerComponent},
{path:"addproduct",component:AddProductComponent},
{path:"waiter",component:WaiterComponent},
{path:"addorder",component:AddorderComponent},
{path:"updateproduct/:id",component:UpdateproductComponent},
{path:"editorder/:sno",component:EditorderComponent},
{path:"bill",component:BillComponent},
{path:"success",component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
