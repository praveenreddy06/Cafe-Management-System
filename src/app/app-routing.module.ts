import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{path:' ',component:LoginComponent},
{path:'login',component:LoginComponent},
{path:'home',component:HomePageComponent},
{path:'registration',component:RegisterComponent},
{path:'product',component:ProductDetailsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
