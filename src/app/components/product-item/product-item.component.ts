import { CartService } from '@/services/cart.service';
import { SnackbarService } from '@/services/snackbar.service';
import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;
  @Input() showEditProductButton: boolean = false;

  constructor(private cartService: CartService, private snackbarService: SnackbarService, private router: Router) { }

  ngOnInit(): void {
  }

  addToCart() {
    const cartItem: CartItem = {
      product: this.product,
      quantity: 1
    };
    const result = this.cartService.addProductToCart(cartItem);

    if (result) {
      this.snackbarService.showSnackbar(`${this.product.name} a été ajouté au panier`, 'OK', 2000);
    } else {
      this.snackbarService.showSnackbar(`${this.product.name} est déjà dans le panier`, 'OK', 2000);
    }
  }

  navigateToProduct() {
    this.router.navigate(['/products/view', this.product.id]);
  }
}
