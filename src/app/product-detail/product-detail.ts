import { Component, inject  } from '@angular/core';
import { ProductSlider } from './product-slider/product-slider';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductService } from '../product.service';
import { AsyncPipe } from '@angular/common';
import { map, switchMap  } from 'rxjs/operators';
import { ProductSummary } from "./product-summary/product-summary";
import { cartService } from '../cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, ProductSlider, AsyncPipe, ProductSummary],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  constructor(private cartService: cartService) {}

  private productService = inject(ProductService);
  private route = inject(ActivatedRoute);

  product$ = this.route.params.pipe(
  map(params => Number(params['id'])),
  switchMap(id =>
    this.productService.getProductById(id).pipe(
      map(products => {
        console.log('Received from service:', products);  // <-- See what it is
        return products;
      })
    )
  )
);

successMessage: string = '';

handleAddToCart(event: { product: Product; quantity: number }) {

  if (event.quantity < 1 || event.quantity > 5) {
    console.warn('Invalid quantity attempted:', event.quantity);
    return;
  } 
  console.log('Product added to cart:', event.product, 'Quantity:', event.quantity);

  this.successMessage = `${event.quantity} x ${event.product.name} added to cart`;

  setTimeout(() => this.successMessage = '', 3000);

  this.cartService.addToCart(event.product, event.quantity)
  
}
  
}
