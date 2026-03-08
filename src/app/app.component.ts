import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'terraria-modded-random-weapon'; 
  toRevealDetails: boolean = false;
  currentRouteName: string = 'Weapon Selector';

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.getUrlReadableName(event.urlAfterRedirects);
    });
  }

  ngOnInit() {
    this.router.navigate(['/main']);
  }

  revealDetails(){
    this.toRevealDetails = !this.toRevealDetails;
  }

  getUrlReadableName(url: string) {
    if (url.includes('/main')) this.currentRouteName = 'Weapon Selector';
    else if (url.includes('/config')) this.currentRouteName = 'Weapons';
    else if (url.includes('/prog')) this.currentRouteName = 'Progression';
    else if (url.includes('/webconfig')) this.currentRouteName = 'Config';
    else this.currentRouteName = 'Screen';
  }
}
