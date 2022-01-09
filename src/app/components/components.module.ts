import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from "@/components/layout/layout.component";
import {HeaderComponent} from "@/components/header/header.component";
import {MaterialModule} from "../material/material.module";
import {RouterModule} from '@angular/router';
import {SidenavComponent} from "@/components/sidenav/sidenav.component";
import {ProductItemComponent} from "@/components/product-item/product-item.component";
import {ProductListComponent} from "@/components/product-list/product-list.component";
import {CarouselComponent} from "@/components/carousel/carousel.component";
import {HomeComponent} from "@/pages/home/home.component";
import {AuthRedirectComponent} from "@/components/auth-redirect/auth-redirect.component";
import {PageNotFoundComponent} from "@/pages/page-not-found/page-not-found.component";
import {LoginComponent} from "@/pages/login/login.component";
import {RegisterComponent} from "@/pages/register/register.component";
import {ConfirmPasswordDirective} from "../shared/confirm-password.directive";
import {CreateShopComponent} from "@/pages/shops/create-shop/create-shop.component";
import {ListShopsComponent} from "@/pages/shops/list-shops/list-shops.component";
import {EditShopComponent} from "@/pages/shops/edit-shop/edit-shop.component";
import {DeleteShopDialogComponent} from "@/components/delete-shop-dialog/delete-shop-dialog.component";
import {ManageShopComponent} from "@/pages/shops/manage/manage-shop.component";
import {ClickStopPropagationDirective} from "../directives/click-stop-propagation.directive";
import {SwiperModule} from "swiper/angular";

const components = [
  LayoutComponent, HeaderComponent, SidenavComponent, ProductItemComponent, ProductListComponent,
  CarouselComponent, ConfirmPasswordDirective,
  DeleteShopDialogComponent, ClickStopPropagationDirective,
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
