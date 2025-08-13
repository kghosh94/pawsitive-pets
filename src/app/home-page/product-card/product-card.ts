import { Component, OnInit } from '@angular/core';
import { ProductList } from './product-list/product-list';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductList, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard implements OnInit {
  sectionTitle: string = 'Daily Care for Happy Pets'; 

  products: Product[] = []; // Array to hold products

  constructor( private productService: ProductService) {}
  
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }

}
