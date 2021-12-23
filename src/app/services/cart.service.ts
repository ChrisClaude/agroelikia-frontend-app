import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Product[] = [];

  constructor() { }

  get cart(): Product[] {
    return this._cart;
  }

}
