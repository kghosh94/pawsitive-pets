import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css'
})

export class HeroBanner {

  // Using string interpolation for the title and subtitle
    HeroBannerTitle:string = '<h1>Your <span class="main-theme-color">Pawsitive</span> care Starts Here</h1>';
    HeroBannerSubTitle:string = 'Vet-formulated supplements for dogs and cats — made to support a longer, healthier, tail-wagging life.';
    btntxt:string = 'Shop Now';
    shopLink:string = '/products/pawsitive-supplements';

    // Using an object to store image paths for better organization
    HeroBannerImages = {
        hipMobility: 'assets/hip-mobility-product.png',
        bannerCatImg: 'assets/main-banner-cat.png',
        bannerDogImg: 'assets/main-banner-dog.png',
        calmingStress: 'assets/banner-product-bottle.png',
    }

    scrollToSection(sectionId: string) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

}
