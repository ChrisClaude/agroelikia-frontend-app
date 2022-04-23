import { Injectable } from "@angular/core";
import { AuthService } from "@/auth/services/auth.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "@/environments/environment";
import { catchError } from "rxjs/operators";
import { ErrorService } from "@/services/error.service";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: CartItem[] = [];
  private _totalCost: number = 0;
  private LOCAL_STORAGE_CART_KEY = 'cart';

  constructor(private authService: AuthService, private http: HttpClient, private errorService: ErrorService) {
    // initialize cart
    if (this.authService.isAuthenticated()) {
      this.mergeCartState();
    } else {
      localStorage.getItem(this.LOCAL_STORAGE_CART_KEY)
        ? this._cart = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_CART_KEY) as string)
        : this._cart = [];

      if (this._cart.length > 0) {
        this._cart.forEach(item => {
          this._totalCost += item.product.price * item.quantity;
        });
      }
    }
  }

  private mergeCartState() {
    this.http.get<CartItem[]>(`${environment.apiUrl}/carts/me`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
      .pipe(catchError(this.errorService.handleError<CartItem[]>('getCartItems')))
      .subscribe(cart => {
        if (cart !== undefined) {
          this._cart = cart;
          this._totalCost = 0;
          this._cart.forEach(item => {
            this._totalCost += item.product.price * item.quantity;
          });
          localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));
        }
      });
  }

  get cart(): CartItem[] {
    return this._cart;
  }

  get totalCost(): number {
    return this._totalCost;
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
    this._totalCost += cartItem.product.price * cartItem.quantity;

    if (this.authService.isAuthenticated()) {
      this.http.post<CartItem>(`${environment.apiUrl}/carts`, cartItem, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
        .pipe(
          catchError(this.errorService.handleError<CartItem>('createCartItem', cartItem))
        ).subscribe(cartItem => {
        this._cart = this._cart.map(item => item.product.id === cartItem.product.id ? cartItem : item);
      });
    }

    return true;
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
    this._totalCost -= cartItem.product.price * cartItem.quantity;

    if (this.authService.isAuthenticated()) {
      this.http.delete<CartItem>(`${environment.apiUrl}/carts/${cartItem.id}`, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
        .pipe(
          catchError(this.errorService.handleError<CartItem>('deleteProduct'))
        ).subscribe(cartItem => {
        this._cart = this._cart.filter(item => item.product.id !== cartItem.product.id);
      });
    }

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

      localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));

      if (this.authService.isAuthenticated()) {
        this.http.put<CartItem>(`${environment.apiUrl}/carts/${item.id}`, item, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
          .pipe(
            catchError(this.errorService.handleError<CartItem>('deleteProduct'))
          ).subscribe(cartItem => {
          this._cart = this._cart.map(item => item.product.id === cartItem.product.id ? cartItem : item);
        });
      }
    }
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

      localStorage.setItem(this.LOCAL_STORAGE_CART_KEY, JSON.stringify(this._cart));

      if (this.authService.isAuthenticated()) {
        this.http.put<CartItem>(`${environment.apiUrl}/carts/${item.id}`, item, {headers: {Authorization: `bearer ${this.authService.getToken()}`}})
          .pipe(
            catchError(this.errorService.handleError<CartItem>('deleteProduct'))
          ).subscribe(cartItem => {
          this._cart = this._cart.map(item => item.product.id === cartItem.product.id ? cartItem : item);
        });
      }
    }
  }

}
