import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewComponent} from "./view/view.component";
import { OrderFormComponent } from "@/pages/cart/orders/order-form.component";

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'orders/form', component: OrderFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
