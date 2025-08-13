import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { cartService } from '../../cart.service';

@Component({
  selector: 'app-product-summary',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './product-summary.html',
  styleUrl: './product-summary.css'
})
export class ProductSummary {
  @Input({required: true}) productSummary!: Product; // Input property to receive product data
  @Output() addToCart = new EventEmitter<{ product: Product; quantity: number}>(); // Output event to notify parent component

  constructor(private cartService: cartService) {}

  getCartItems() {
    return this.cartService.cartItemsSubject.value.find(item => item.product.id === this.productSummary.id);
  }

  getQuantity(): number {
    const item = this.getCartItems();
    if (item) {
      return item.quantity;
    } else {
      return 0;
    }
  }

  quantity: number = 1; // Local state for product quantity

  // Prevent input box from manually exceeding limit
  onQuantityChange(value: number) {
    value = this.getQuantity() + value; // Adjust based on current quantity
    if (value > 5) {
      this.quantity = 5;
    } else if (value < 1) {
      this.quantity = 1;
    }
  }

  onAddToCart() {
    this.addToCart.emit({ product: this.productSummary, quantity: this.quantity });
  }

  incrementQty() {
    if(this.quantity < 5)
    {
      this.quantity++;
    }
  } 
  
  decrementQty() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  getStarImage(rate: number): string {
    if (rate < 4) {
      return '../../assets/star-red.svg';
    } else if (rate < 4.5) {
      return '../../assets/star-yellow.svg';
    } else {
      return '../../assets/green-review-star.svg';
    }
  }

}
