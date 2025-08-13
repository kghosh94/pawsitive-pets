import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../models/product.model';

// interface featuredProducts {
//   id: string;
//   ProductSubtitle: string;
//   ProductTitle: string;
//   ProductImage: string;
//   url: string;
//   btnlabel: string;
// }

@Component({
  selector: 'app-featured-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-product.html',
  styleUrl: './featured-product.css'
})
export class FeaturedProduct {
  @Input({required: true}) featuredProducts!: Product;

  // get ProductImagePath() {
  //   return "assets/" + this.featuredProducts.ProductImage;
  // }
}
