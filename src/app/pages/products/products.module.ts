import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {CreateProductComponent} from './create-product/create-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {ComponentsModule} from "@/components/components.module";
import { MaterialModule } from 'app/material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    CreateProductComponent,
    EditProductComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ProductsModule {
}
