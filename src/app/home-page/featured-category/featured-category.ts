import { Component, OnInit } from '@angular/core';
import { FeaturedProduct } from './featured-product/featured-product';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-featured-category',
  standalone: true,
  imports: [FeaturedProduct, CommonModule],
  templateUrl: './featured-category.html',
  styleUrl: './featured-category.css'
})
export class FeaturedCategory implements OnInit {
    // Title for the featured category section
    sectionTitle = "Featured Category";

    products: Product[] = []; // Array to hold featured products

    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: (data) => {
                this.products = data;
            },
            error: (err) => {
                console.error('Error fetching featured products:', err);
            }
        });
    }
    // List of featured products
    // AvailableProducts = [
    //   { 
    //     id: 'product-hip-mobility',
    //     ProductSubtitle: 'Premium Quality', 
    //     ProductTitle: 'Hip & Mobility',
    //     ProductImage: 'hip-mobility-product.png',
    //     url: '/products/hip-mobility',
    //     btnlabel: 'Learn More'
    //   },
    //   { 
    //     id: 'claming-stress',
    //     ProductSubtitle: 'Premium Quality', 
    //     ProductTitle: 'Claming & Stress',
    //     ProductImage: 'calming-stress-product.png',
    //     url: '/products/calming-stress',
    //     btnlabel: 'Learn More',
    //   }
    // ];
}
