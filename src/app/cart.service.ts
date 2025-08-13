import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import { Product } from "./models/product.model";

@Injectable({
    providedIn: 'root',
})

export class cartService {

    // Using BehaviorSubject to hold the cart items
    public cartItemsSubject = new BehaviorSubject<{ product: Product; quantity: number }[]>([]);
    cartItems$ = this.cartItemsSubject.asObservable();

    // Using BehaviorSubject to hold the cart item count
    private cartItemCountSubject = new BehaviorSubject<number>(0);
    cartItemCount$ = this.cartItemCountSubject.asObservable();

    shippingCharge = 0;

    // Method to add items to the cart
    // It takes a product and a quantity as parameters
    addToCart(product: Product, quantity: number ):void {

        const currentItems = [...this.cartItemsSubject.value];
        const existingItem = currentItems.find(item => item.product.id == product.id);

        if (existingItem) {

            // Prevent exceeding 5 globally
            if(existingItem.quantity >= 5) {
                alert(`${existingItem.quantity}x is added for "${product.name}" in your cart already! You can only add up to 5 of this product.`);
                return;
            }
             // Calculate new quantity but do not exceed 5
             let newQuantity = existingItem.quantity + quantity;
             if (newQuantity > 5) {   
                newQuantity = 5; // Ensure maximum quantity is 5
                alert(`${newQuantity}x is added for "${product.name}" in your cart already! You can only add up to 5 of this product.`);
            }
            // Update the existing item's quantity
            existingItem.quantity = newQuantity;

        } else {
            // If adding new product, make sure quantity is within 1–5
            const validQuantity = Math.min(quantity, 5);
            currentItems.push({ product, quantity: validQuantity });
        }

        this.cartItemsSubject.next(currentItems);
        this.updateCartCount(currentItems);
    }

    //for updating cart item quantity in cart page
    updateCartItemQuantity(productId: number, changeQty: number): void {
        const currentItems = [...this.cartItemsSubject.value];
        const item = currentItems.find(item => item.product.id === productId);

        if (item) {
            let newQuantity = item.quantity + changeQty;
            if (newQuantity < 1) {
                newQuantity = 1; // Ensure minimum quantity is 1
            }
            if (newQuantity > 5) {
                newQuantity = 5; // Ensure maximum quantity is 5
            }
            
            item.quantity = newQuantity;

            // Update the cart items subject with the modified array
            // This will trigger the subscribers to get the updated cart items
            this.cartItemsSubject.next(currentItems);
            this.updateCartCount(currentItems);
        }
    }   


    // Method to remove items from the cart
    removeFromCart(productId: number): void {
        const currentItems = this.cartItemsSubject.value.filter(item => item.product.id !== productId);
        this.cartItemsSubject.next(currentItems);
        this.updateCartCount(currentItems);
    }

    // Method to get total price of each items in the cart
    getTotalPrice(): number {
        return this.cartItemsSubject.value.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }

    getGrandTotalPrice(): number {
        return this.getTotalPrice() + (this.cartItemsSubject.value.length > 0 ? this.shippingCharge : 0 ); 
    }


    // Method to update the cart item count
    // It calculates the total quantity of items in the cart
    private updateCartCount(currentItems: {product: Product; quantity: number}[]): void {
        const total = currentItems.reduce((acc, item) => acc + item.quantity, 0);
        this.cartItemCountSubject.next(total);
    }

    clearCart() {
        this.cartItemsSubject.next([]);
        this.cartItemCountSubject.next(0); 
    }
}