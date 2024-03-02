import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { OwnerComponent } from './owner/owner.component';
import { WaiterComponent } from './waiter/waiter.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddorderComponent } from './addorder/addorder.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { EditorderComponent } from './editorder/editorder.component';
import { PricePipe } from './price.pipe';
import { BillComponent } from './bill/bill.component';
import { SuccessComponent } from './success/success.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    OwnerComponent,
    WaiterComponent,
    AddProductComponent,
    AddorderComponent,
    UpdateproductComponent,
    EditorderComponent,
    PricePipe,
    BillComponent,
    SuccessComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    RouterModule,
    HttpClientModule,
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
