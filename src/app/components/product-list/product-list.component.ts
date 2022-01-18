import { Component, OnInit } from "@angular/core";
import { ProductService } from "@/services/product.service";
import { Observable, of } from "rxjs";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  isProductsLoading: boolean = true;
  placeholderArray = Array(7).fill(0);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.products.subscribe(products => {
      this.isProductsLoading = false;
      this.products = products;
    });
  }

}
