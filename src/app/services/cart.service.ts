import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Product[];
  private LOCAL_STORAGE_CART_KEY = 'cart';

  constructor() {
    localStorage.getItem(this.LOCAL_STORAGE_CART_KEY)
      ? this._cart = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CART_KEY) as string)
      : this._cart = [];
  }

  get cart(): Product[] {
    return this._cart;
  }

  public addProductToCart(product: Product): boolean {
    if (this._cart.some(item => item.id === product.id)) {
      return false;
    }

    this._cart.push(product);
    localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));

    return true;
  }

}
