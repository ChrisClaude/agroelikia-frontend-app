import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ManageShopComponent} from "./manage/manage-shop.component";
import {AuthenticationGuard} from "@/auth/guards/authentication.guard";
import {CreateShopComponent} from "./create-shop/create-shop.component";
import {EditShopComponent} from "./edit-shop/edit-shop.component";
import {ListShopsComponent} from "./list-shops/list-shops.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {path: 'manage', component: ManageShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'view/:id', component: ViewComponent},
  {path: 'create', component: CreateShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'edit/:id', component: EditShopComponent, canActivate: [AuthenticationGuard]},
  {path: 'list', component: ListShopsComponent, canActivate: [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopsRoutingModule {
}
