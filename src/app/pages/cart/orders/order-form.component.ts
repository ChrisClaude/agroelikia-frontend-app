import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CartService } from "@/services/cart.service";
import { OrdersService } from "@/services/orders.service";

@Component({
  selector: 'app-orders',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent implements OnInit {

  total = 0;
  itemsCount = 0;

  constructor(private cartService: CartService, private ordersService: OrdersService) { }

  orderForm = new FormGroup({
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('^[a-zA-Z][a-zA-Z]+.+')]),
    telephone: new FormControl('', [Validators.required,
      Validators.minLength(8),
      Validators.pattern('[a-zA-Z0-9]+.+')]),
  });

  ngOnInit(): void {
    this.total = this.cartService.totalCost;
    this.itemsCount = this.cartService.cart.length;
  }

}
