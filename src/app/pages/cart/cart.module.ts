import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {ViewComponent} from './view/view.component';
import {ComponentsModule} from "@/components/components.module";
import {MaterialModule} from 'app/material/material.module';
import { OrderFormComponent } from '@/pages/cart/orders/order-form.component';
import { OrderConfirmationComponent } from "./orders/order-confirmation/order-confirmation.component";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderPaymentComponent} from './order-payment/order-payment.component';


@NgModule({
  declarations: [
    ViewComponent,
    OrderFormComponent,
    OrderConfirmationComponent,
    OrderPaymentComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CartModule {
}
