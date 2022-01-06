import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Product[] = [];

  constructor() {
  }

  get cart(): Product[] {
    return this._cart;
  }

  public addProductToCart(product: Product): boolean {
    if (this._cart.some(item => item.id === product.id)) {
      return false;
    }

    this._cart.push(product);

    return true;
  }

}
