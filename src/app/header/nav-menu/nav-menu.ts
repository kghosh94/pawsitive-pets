import { Component, Input } from '@angular/core';

interface NavMenuItem {
  label: string;
  link: string;
  id: string;
  active: boolean;
}
@Component({
  selector: 'app-nav-menu',
  standalone: true,
  imports: [],
  templateUrl: './nav-menu.html',
  styleUrl: './nav-menu.css'
})
export class NavMenu {
  @Input({required: true}) Navmenu!:NavMenuItem;
}
