import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { ShopsRoutingModule} from './shops-routing.module';
import {ManageShopComponent} from "./manage/manage-shop.component";
import {CreateShopComponent} from "./create-shop/create-shop.component";
import {EditShopComponent} from "./edit-shop/edit-shop.component";
import {ListShopsComponent} from "./list-shops/list-shops.component";
import {MaterialModule} from "../../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ComponentsModule} from "@/components/components.module";
import { ViewComponent } from './view/view.component';



@NgModule({
  declarations: [
    ManageShopComponent,
    CreateShopComponent,
    EditShopComponent,
    ListShopsComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ShopsRoutingModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class ShopsModule {
}
