import { Component } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  standalone: true,
  imports: [],
  templateUrl: './product-banner.html',
  styleUrl: './product-banner.css'
})
export class ProductBanner {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  BannerTitle: string = 'Healthy Pets, Happy Lives';
  BannerSubtitle: string = 'Formulated with natural ingredients to support joint health, digestion, and stress relief.';
  btnText: string = 'Explore Products';
  productsLink: string = '/products';

bannerImages = {
    pawImage: 'assets/paw-large.png',
    hipMobility: 'assets/hip-mobility-product.png',
    calmingStress: 'assets/calming-stress-product.png',
  };
  
}
