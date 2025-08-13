import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { cartService } from '../../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: '[app-cart-item]',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.css'
})
export class CartItem {
  @Input({required: true}) itemCart!: {product: Product, quantity: number};

  constructor( private cartService: cartService){}

  quantitySelectMessage: string = '';

  // increaseQuantity(): void {
  //   this.cartService.updateCartItemQuantity(this.itemCart.product.id, +1);
  // }

  // decreaseQuantity(): void {
  //   this.cartService.updateCartItemQuantity(this.itemCart.product.id, -1);
  // }
  decreaseQuantity(): void {
    if (this.itemCart.quantity > 1) {
      this.cartService.updateCartItemQuantity(this.itemCart.product.id, -1);
      this.quantitySelectMessage = "";
    }
    else {
      this.cartService.removeFromCart(this.itemCart.product.id);
    }
  }

  increaseQuantity(): void {
    if (this.itemCart.quantity < 5) {
      this.cartService.updateCartItemQuantity(this.itemCart.product.id, +1);
      this.quantitySelectMessage = "";
    }
    else {
      this.quantitySelectMessage = `Maximum quantity of 5 reached for ${this.itemCart.product.name}`;
      setTimeout(() => this.quantitySelectMessage = '', 3000);
    }
  }

  removeItem(): void {
    this.cartService.removeFromCart(this.itemCart.product.id);
  }

  get totalPrice(): number {
    return this.itemCart.product.price * this.itemCart.quantity;
  }
}
