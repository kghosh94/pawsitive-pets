import { Component } from '@angular/core';
import { FooterMenu } from './footer-menu/footer-menu';

interface FooterContent {
    logo: string; 
    link: string;
    phoneNo: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FooterMenu],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
    footerMenu = [
    {
        label: "Contact Us",
        link: "/contact.html",
        id: "contact-us-page"
    },
    {
        label: "About Us",
        link: "/about-us.html",
        id: "about-us-page"
    },
    {
        label: "Return Policy",
        link: "/return.html",
        id: "return-page"
    },
    {
        label: "Privacy policy",
        link: "/privacy.html",
        id: "privacy-page"
    },
    {
        label: "Temrs & Condition",
        link: "/temrs.html",
        id: "terms-page"
    }
]

footerContent: FooterContent = {
    logo: '../../assets/large-Logo.svg',
    phoneNo: '+1 1800 1200 1200',
    link: '/home'
  }

  currentYear: number = new Date().getFullYear();
}
