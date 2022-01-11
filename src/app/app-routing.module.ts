import { HomeComponent } from "@/pages/home/home.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { LoginComponent } from "@/pages/login/login.component";
import { RegisterComponent } from "@/pages/register/register.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shops', loadChildren: () => import('./pages/shops/shops.module').then(m => m.ShopsModule)},
  {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule) },
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
