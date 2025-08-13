import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [],
  templateUrl: './order-summary.html',
  styleUrl: './order-summary.css'
})
export class OrderSummary {
  @Input({required: true}) orderItems: {products: Product; quantity: number} [] = [];
  // @Input() totalAmount: number = 0;
  @Input({required: true}) shippingCost: number = 0;

  getTotalPrice(): number {
    return this.orderItems.reduce((sum, item) => sum + (item.products.price * item.quantity), 0) + this.shippingCost;
  }
}
