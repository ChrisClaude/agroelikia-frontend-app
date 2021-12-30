import { Component, OnInit } from '@angular/core';
import {ProductService} from "@/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  product: Product | null = null;
  shop: Shop | null = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    const id = +(this.route.snapshot.paramMap.get('id') as string);
    this.spinner.show();
    this.productService.getProductById(id).subscribe(product => {
      console.log(product);
      this.spinner.hide();
      this.product = product;
      this.shop = product.shop as Shop;
    });
  }

  addToCart() {
    console.log("add to cart")
  }
}
