import { Component, OnInit } from "@angular/core";
import { ShopService } from "@/services/shop.service";
import { ProductService } from "@/services/product.service";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"]
})
export class ViewComponent implements OnInit {

  shop: Shop | undefined;
  products: Product[] | undefined;

  constructor(private shopService: ShopService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.shopService.getUsersShops().subscribe(shops => {
      this.shop = shops[0];

      if (this.shop) {
        this.productService.getProductsByShopId(this.shop.id as number)
          .subscribe(products => {
            this.products = products;
          });
      }
    });
  }

}
