import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./material/material.module";
import { ComponentsModule } from "@/components/components.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { LoginComponent } from "@/pages/login/login.component";
import { PageNotFoundComponent } from "@/pages/page-not-found/page-not-found.component";
import { HomeComponent } from "@/pages/home/home.component";
import { AuthRedirectComponent } from "@/components/auth-redirect/auth-redirect.component";
import { RegisterComponent } from "@/pages/register/register.component";
import { OrderFormComponent } from '@/pages/cart/orders/order-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HomeComponent,
    AuthRedirectComponent,
    RegisterComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
