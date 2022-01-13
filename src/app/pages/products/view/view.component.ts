import { Component, OnInit } from '@angular/core';
import {ProductService} from "@/services/product.service";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinnerService} from "ngx-spinner";
import {CartService} from "@/services/cart.service";
import {SnackbarService} from "@/services/snackbar.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  product: Product | null = null;
  shop: Shop | null = null;

  constructor(private cartService: CartService, private productService: ProductService, private snackbarService: SnackbarService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

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
    const cartItem: CartItem = {
      product: this.product as Product,
      quantity: 1
    };
    const result = this.cartService.addProductToCart(cartItem);

    if (result) {
      this.snackbarService.showSnackbar(`${(this.product as Product).name} ajouté au panier`, 'OK', 2000);
    }
  }
}
