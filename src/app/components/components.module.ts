import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "@/components/layout/layout.component";
import {HeaderComponent} from "@/components/header/header.component";
import {MaterialModule} from "@/material/material.module";
import {RouterModule} from '@angular/router';
import {SidenavComponent} from "@/components/sidenav/sidenav.component";
import {ProductItemComponent} from "@/components/product-item/product-item.component";
import {ProductListComponent} from "@/components/product-list/product-list.component";
import {CarouselComponent} from "@/components/carousel/carousel.component";
import {ConfirmPasswordDirective} from "../shared/confirm-password.directive";
import {DeleteShopDialogComponent} from "@/components/delete-shop-dialog/delete-shop-dialog.component";
import {ClickStopPropagationDirective} from "../directives/click-stop-propagation.directive";
import {SwiperModule} from "swiper/angular";
import { AvatarComponent } from "@/components/avatar/avatar.component";
import { FloatActionButtonComponent } from "@/components/float-action-button/float-action-button.component";

const components = [
  LayoutComponent, HeaderComponent, SidenavComponent, ProductItemComponent, ProductListComponent,
  CarouselComponent, ConfirmPasswordDirective, DeleteShopDialogComponent, ClickStopPropagationDirective,
  AvatarComponent, FloatActionButtonComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    SwiperModule
  ],
  exports: components
})
export class ComponentsModule {
}
