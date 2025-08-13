import { Component, OnInit } from '@angular/core';
import { CheckoutForm } from './checkout-form/checkout-form';
import { cartService } from '../cart.service';
import { OrderSummary } from './order-summary/order-summary';

@Component({
  selector: 'app-checkout-page',
  standalone: true,
  imports: [CheckoutForm, OrderSummary],
  templateUrl: './checkout-page.html',
  styleUrl: './checkout-page.css'
})
export class CheckoutPage implements OnInit {
  cartItems: { products: any; quantity: number }[] = [];
  shippingCharge!: number;

  constructor(private cartService: cartService) {}

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items.map(item => ({
        products: item.product,
        quantity: item.quantity
      }));
      // Assuming shippingCharge is a property in cartService 
      this.shippingCharge = this.cartService.shippingCharge;
    });
  }
}
