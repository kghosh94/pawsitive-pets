import { Component } from '@angular/core';

interface BannerContent {
  sectionTitle: string;
  sectionDescription: string;
  bannerImage: string;
  buttonText: string;
  buttonLink: string;
}

@Component({
  selector: 'app-offer-banner',
  standalone: true,
  imports: [],
  templateUrl: './offer-banner.html',
  styleUrl: './offer-banner.css'
})
export class OfferBanner {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  bannerContent: BannerContent = {
    sectionTitle: '<span class="main-theme-color">Save 20%</span> on Pet Wellness!',
    sectionDescription: 'Give your furry friend the care they deserve—natural, effective supplements made for everyday comfort and vitality.',
    bannerImage: 'assets/offer-banner-img.png',
    buttonText: 'Shop Now',
    buttonLink: '/shop'
  };
  
}
