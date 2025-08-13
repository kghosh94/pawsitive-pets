import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { ProductDetail } from './product-detail/product-detail';
import { CartPage } from './cart-page/cart-page';
import { CheckoutPage } from './checkout-page/checkout-page';
import { ConfirmationPage } from './confirmation-page/confirmation-page';

export const routes: Routes = [
    {
        path: '', 
        component: HomePage
    },
    {
        path: 'product-detail/:id', 
        component: ProductDetail,
        data: { 
            heading: 'Daily Care for Happy Pets',
            subheading: 'Built for better movement'
        }
    },
    {
        path: 'cart-page', 
        component: CartPage,
        data: { 
            heading: 'Your Pawsitive Picks',
            subheading: 'Review your items before checkout.'
        }
    },
    {
        path: 'checkout-page', 
        component: CheckoutPage,
        data: { 
            heading: 'Secure Checkout – Almost There!',
            subheading: 'Pawsitive wellness is just a click away.'
        }
    },
    {
        path: 'confirmation-page', 
        component: ConfirmationPage
    }
];
