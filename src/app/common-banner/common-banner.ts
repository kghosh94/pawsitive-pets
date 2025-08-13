import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-banner',
  standalone: true,
  imports: [],
  templateUrl: './common-banner.html',
  styleUrl: './common-banner.css'
})
export class CommonBanner {

  @Input() heading : string = '';
  @Input() subheading : string = '';
  @Input() bannerShow: boolean = true;
  bannerImage: string = '../assets/common-banner-product.png'; // Default image path
}
