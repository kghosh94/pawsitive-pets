import { Component, Input } from '@angular/core';

interface FooterMenuItem {
    label: string; 
    link: string;
    id: string;
}

@Component({
  selector: 'app-footer-menu',
  standalone: true,
  imports: [],
  templateUrl: './footer-menu.html',
  styleUrl: './footer-menu.css'
})
export class FooterMenu {
  @Input({required: true}) footerMenu!: FooterMenuItem;
}