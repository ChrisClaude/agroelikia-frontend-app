import { CartService } from '@/services/cart.service';
import { SnackbarService } from '@/services/snackbar.service';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  // @ts-ignore
  @Input() product: Product;
  @Input() showEditProductButton: boolean = false;

  constructor(private cartService: CartService, private snackbarService: SnackbarService) { }

  ngOnInit(): void {
  }

  addToCart(event: MouseEvent) {
    event.stopPropagation();
    const result = this.cartService.addProductToCart(this.product);

    if (result) {
      this.snackbarService.showSnackbar(`${this.product.name} ajoute au panier`, 'OK');
    }
  }
}
