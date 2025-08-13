import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkout-form.html',
  styleUrl: './checkout-fom.css'
})
export class CheckoutForm {
  checkoutForm!: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      state: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      district: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5,6}$/)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]]
    });
  }

  get firstName() { return this.checkoutForm.get('firstName')!; }
  get lastName() { return this.checkoutForm.get('lastName')!; }
  get phone() { return this.checkoutForm.get('phone')!; }
  get email() { return this.checkoutForm.get('email')!; }
  get address1() { return this.checkoutForm.get('address1')!; }
  get address2() { return this.checkoutForm.get('address2')!; }
  get city() { return this.checkoutForm.get('city')!; }
  get state() { return this.checkoutForm.get('state')!; }
  get district() { return this.checkoutForm.get('district')!; }
  get zip() { return this.checkoutForm.get('zip')!; }
  get cardNumber() { return this.checkoutForm.get('cardNumber')!; }
  get expiryDate() { return this.checkoutForm.get('expiryDate')!; }
  get cvv() { return this.checkoutForm.get('cvv')!; }


  onSubmit(): void {
    this.formSubmitted = true;
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }
    // console.log('Order submitted', this.checkoutForm.value);
    // alert('Payment successful!');
    this.router.navigate(['confirmation-page']); // redirect to confirmation page
    // this.checkoutForm.reset();
    // this.formSubmitted = false;
  }
}
