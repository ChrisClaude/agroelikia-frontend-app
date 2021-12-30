import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateProductComponent} from "@/pages/products/create-product/create-product.component";
import {EditProductComponent} from "@/pages/products/edit-product/edit-product.component";
import {ViewComponent} from "@/pages/products/view/view.component";

const routes: Routes = [
  {
    path: 'create',
    component: CreateProductComponent
  },
  {
    path: 'edit/:id',
    component: EditProductComponent
  },
  {
    path: 'view/:id',
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
