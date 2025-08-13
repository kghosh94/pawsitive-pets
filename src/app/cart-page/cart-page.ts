import { Component, inject } from '@angular/core';
import { CartItem } from './cart-item/cart-item';
import { cartService } from '../cart.service';
import { Product } from '../models/product.model';
import { AsyncPipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [CartItem, AsyncPipe, CurrencyPipe, RouterLink],
  templateUrl: './cart-page.html',
  styleUrl: './cart-page.css'
})
export class CartPage {
  products: Product[] = []; // Array to hold products
  cartService = inject(cartService);
  cartItems$ = this.cartService.cartItems$;
  shippingCharge = 0;
  
  get grandTotalPrice() {
    return this.cartService.getGrandTotalPrice();
  }

}
