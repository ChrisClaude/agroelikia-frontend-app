import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  get totalCost(): number {
    return this._totalCost;
  }

  private _cart: CartItem[];
  private LOCAL_STORAGE_CART_KEY = 'cart';
  private _totalCost: number;

  constructor() {
    localStorage.getItem(this.LOCAL_STORAGE_CART_KEY)
      ? this._cart = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CART_KEY) as string)
      : this._cart = [];

    this._totalCost = 0;
    this._cart.forEach(item => {
      this._totalCost += item.product.price * item.quantity;
    });
  }

  get cart(): CartItem[] {
    return this._cart;
  }

  /**
   * Add product to cart
   * @param cartItem to add
   */
  public addProductToCart(cartItem: CartItem): boolean {
    if (this._cart.some(item => item.product.id === cartItem.product.id)) {
      return false;
    }

    this._cart.push(cartItem);
    localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));

    return true;
  }

  /**
   * Increase quantity of product in cart
   * @param productId to increase
   */
  public incrementProductQuantity(productId: number) {
    const item = this._cart.find(item => item.product.id === productId);
    if (item) {
      item.quantity++;
      this._totalCost += item.product.price;
    }
    localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));
  }

  /**
   * Decrease quantity of product in cart
   * @param productId to decrease
   */
  public decrementProductQuantity(productId: number) {
    const item = this._cart.find(item => item.product.id === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this._totalCost -= item.product.price;
    }
    localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));
  }

  /**
   * Remove product from cart
   * @param cartItem Product to remove
   */
  public removeProductFromCart(cartItem: CartItem): boolean {
    const index = this._cart.findIndex(item => item.product.id === cartItem.product.id);
    if (index === -1) {
      return false;
    }

    this._cart.splice(index, 1);
    localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));

    return true;
  }

}
