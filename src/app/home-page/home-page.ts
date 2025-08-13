import { Component } from '@angular/core';
import { HeroBanner } from './hero-banner/hero-banner';
import { FeaturedCategory } from './featured-category/featured-category';
import { ProductBanner } from "./product-banner/product-banner";
import {  ProductCard } from './product-card/product-card';
import { OfferBanner } from "./offer-banner/offer-banner";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroBanner, FeaturedCategory, ProductBanner, ProductCard, OfferBanner],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
