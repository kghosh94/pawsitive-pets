import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-slider.html',
  styleUrl: './product-slider.css'
})
export class ProductSlider implements AfterViewInit, OnChanges {

  @Input() product!: Product;
  uniqueId = Math.floor(Math.random() * 100000); // ensures multiple sliders don't conflict

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product']) {
      setTimeout(() => this.initSwiper(), 0);
    }
  }

  private initSwiper(): void {
    const thumbsSwiper = new Swiper(`.thumbs-swiper-${this.uniqueId}`, {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(`.main-swiper-${this.uniqueId}`, {
      loop: true,
      spaceBetween: 20,
      navigation: {
        nextEl: `.main-swiper-next-${this.uniqueId}`,
        prevEl: `.main-swiper-prev-${this.uniqueId}`,
      },
      thumbs: {
        swiper: thumbsSwiper,
      },
    });
  }

}
