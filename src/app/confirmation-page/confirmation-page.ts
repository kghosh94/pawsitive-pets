import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './confirmation-page.html',
  styleUrl: './confirmation-page.css'
})
export class ConfirmationPage {
  confirmationMessage: string = 'Your order has been confirmed';
  confirmationSubtitle: string = 'Thank you for shopping with us!';
}
