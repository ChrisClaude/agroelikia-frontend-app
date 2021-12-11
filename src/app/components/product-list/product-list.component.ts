import { Component, OnInit } from '@angular/core';
import {ProductService} from "@/services/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  isProductsLoading: boolean = true;
  placeholderArray = Array(7).fill(0);

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      console.log(products);
      this.isProductsLoading = false;
      this.products = products;
    });
  }

}
