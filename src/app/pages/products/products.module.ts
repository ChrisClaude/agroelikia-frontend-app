import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ComponentsModule} from "@/components/components.module";


@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ComponentsModule
  ]
})
export class ProductsModule {
}
