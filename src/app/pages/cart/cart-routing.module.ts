import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from "./view/view.component";
import { OrderFormComponent } from "@/pages/cart/orders/order-form.component";
import { OrderConfirmationComponent } from "@/pages/cart/orders/order-confirmation/order-confirmation.component";
import { OrderPaymentComponent } from "@/pages/cart/order-payment/order-payment.component";

const routes: Routes = [
  {path: '', component: ViewComponent},
  {path: 'orders/form', component: OrderFormComponent},
  {path: 'orders/payment', component: OrderPaymentComponent},
  {path: 'orders/success', component: OrderConfirmationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
