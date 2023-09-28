import { Component, OnInit, HostListener } from '@angular/core';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme!: Observable<boolean>;
  isMobileNavOpen = false;
  logoSrc!: string;
  displayPaths = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.isDarkTheme.subscribe((theme: boolean) => {
      const body = document.body;
      theme ? body.classList.add('dark') : body.classList.remove('dark');
      this.logoSrc = theme ? 'assets/images/logo/logolight.png' : 'assets/images/logo/logodark.png';
    });

    this.checkScreenWidth();
  }

  private checkScreenWidth(): void {
    const screenWidth = window.innerWidth;
    this.displayPaths = screenWidth >= 769;
  }

  closeMobileNav(): void {
    this.isMobileNavOpen = false;
  }

  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }


}
