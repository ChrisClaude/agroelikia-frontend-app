import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ComponentsModule} from "@/components/components.module";
import { MaterialModule } from 'app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    MaterialModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule {
}
