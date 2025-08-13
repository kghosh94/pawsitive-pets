import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.model';
import { RouterLink } from '@angular/router';
import { cartService } from '../../../cart.service';

@Component({
  selector: '[product-list]',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

 @Input({required: true}) products!: Product; // Input property to receive 

  CartSuccessMsg = '';
  quantity: number = 0;

  // Prevent input box from manually exceeding limit

 constructor(private cartService: cartService){}

 getCartItems() {
   return this.cartService.cartItemsSubject.value.find(item => item.product.id === this.products.id);
 }

 getQuantity(): number {
   const item = this.getCartItems();
   if (item) {
      return item.quantity;
    } else {
      return 0;
    }
 }
 
 addToCart(product: Product) {
  const quantity = 1;
  this.cartService.addToCart(product, quantity)
  const item = this.getCartItems();
  if (this.getQuantity() >= 5) {
    this.CartSuccessMsg = `Maximum quantity of 5 reached for ${product.name}, Please check your cart.`;
    setTimeout(() => this.CartSuccessMsg = '', 10000 );
  } else {
    this.CartSuccessMsg = `${item?.quantity} x ${product.name} added to cart successfully!`;
    setTimeout(()=> this.CartSuccessMsg = '', 10000)
  }
 }

}
