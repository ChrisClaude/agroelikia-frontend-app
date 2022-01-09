import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {ViewComponent} from './view/view.component';
import {ComponentsModule} from "@/components/components.module";
import {MaterialModule} from 'app/material/material.module';


@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class CartModule {
}
