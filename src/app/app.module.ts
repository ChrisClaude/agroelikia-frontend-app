import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SwiperModule} from "swiper/angular";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from "./material/material.module";
import {HeaderComponent} from './components/header/header.component';
import {CarouselWithTranslateComponent} from './components/carousel-with-translate/carousel-with-translate.component';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthRedirectComponent} from './components/auth-redirect/auth-redirect.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ConfirmPasswordDirective} from './shared/confirm-password.directive';
import {CreateShopComponent} from './pages/shops/create-shop/create-shop.component';
import {ListShopsComponent} from './pages/shops/list-shops/list-shops.component';
import {EditShopComponent} from './pages/shops/edit-shop/edit-shop.component';
import {DeleteShopDialogComponent} from '@/components/delete-shop-dialog/delete-shop-dialog.component';
import {CarouselComponent} from "@/components/carousel/carousel.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    CarouselWithTranslateComponent,
    LayoutComponent,
    HomeComponent,
    AuthRedirectComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPasswordDirective,
    CreateShopComponent,
    ListShopsComponent,
    EditShopComponent,
    DeleteShopDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    SwiperModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
