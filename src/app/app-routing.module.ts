import {HomeComponent} from '@/pages/home/home.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {LoginComponent} from "@/pages/login/login.component";
import {RegisterComponent} from "@/pages/register/register.component";
import {CreateShopComponent} from "@/pages/shops/create-shop/create-shop.component";
import {ListShopsComponent} from "@/pages/shops/list-shops/list-shops.component";
import {EditShopComponent} from './pages/shops/edit-shop/edit-shop.component';
import {AuthenticationGuard} from "./auth/guards/authentication.guard";
import {ManageShopComponent} from "@/pages/shops/manage/manage-shop.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'shop/manage', component: ManageShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'shop/create', component: CreateShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'shop/edit/:id', component: EditShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'shop/list', component: ListShopsComponent, canActivate: [AuthenticationGuard]},
  {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
