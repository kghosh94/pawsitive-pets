export interface Product {
  find(arg0: (p: any) => boolean): any;
  id: number;
  name: string;
  Shipping: string;
  productSubTitle: string;
  price: number;
  rating: number;
  noOfReview: number;
  availability: boolean;
  image: string;
  productSlider: string[];
  description: string;
}