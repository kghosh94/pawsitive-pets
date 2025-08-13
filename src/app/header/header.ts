import { Component, OnInit } from '@angular/core';
import { NavMenu } from './nav-menu/nav-menu';
import { cartService } from '../cart.service';
import { RouterLink } from '@angular/router';
import { Router, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavMenu, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

export class HeaderComponent implements OnInit {
  title = 'Pawsitive Pets';
  subtitle = 'Your pet’s best friend';
  isNavOpen = false;
  cartItemCount = 0;
  currentUrl = '';

  constructor(
    private cartService: cartService,
    private router: Router
  ) {
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      this.currentUrl = event.url;
    });
  }

  get showCartIcon(): boolean {
    return this.currentUrl !== '/confirmation-page' && this.currentUrl !== '/checkout-page';
  }

  ngOnInit(): void {
    this.cartService.cartItemCount$.subscribe(count =>{
      this.cartItemCount = count;
    })
  }

  NavMenu = [
    { 
      label: "Home", 
      link: "index.html", 
      id: "home-page",
      active: true
    },
    { 
      label: "Contact Us", 
      link: "#", 
      id: "contact-us-page",
      active: false
    },
    { 
      label: "About Us", 
      link: "#", 
      id: "about-us-page",
      active: false
    },
    { 
      label: "Return Policy", 
      link: "#", 
      id: "return-policy-page",
      active: false
  },
    { 
      label: "Privacy policy", 
      link: "#", 
      id: "privacy-policy-page",
      active: false
    },
    { 
      label: "Temrs & Condition", 
      link: "#", 
      id: "temrs-page",
      active: false
    }
  ];

  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  closeNav() {
    this.isNavOpen = false;
  }
  
}