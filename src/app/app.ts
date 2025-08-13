import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header";
import { Footer } from './footer/footer';
import { RouterModule, Router, ActivatedRoute, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonBanner } from './common-banner/common-banner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent,CommonBanner, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pawsitive-pets';

  bannerHeading = '';
  bannerSubheading = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const child = this.route.firstChild;
        if (child?.snapshot.data) {
          this.bannerHeading = child.snapshot.data['heading'] || '';
          this.bannerSubheading = child.snapshot.data['subheading'] || '';
        } else {
          this.bannerHeading = '';
          this.bannerSubheading = '';
        }
      });
  }

}
