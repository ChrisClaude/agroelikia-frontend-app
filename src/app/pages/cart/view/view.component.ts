import { CartService } from '@/services/cart.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProduct(item: Product) {
    this.router.navigate(['/products/view', item.id]);
  }

  deleteItem(item: CartItem) {
    this.cartService.removeProductFromCart(item);
  }

  incrementProductQuantity(cartItem: CartItem) {
    this.cartService.incrementProductQuantity(cartItem.product.id as number);
  }

  decrementProductQuantity(cartItem: CartItem) {
    this.cartService.decrementProductQuantity(cartItem.product.id as number);
  }
}
