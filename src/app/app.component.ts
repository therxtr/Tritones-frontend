import { Component, OnInit } from '@angular/core';
import { ThemeService } from './theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDarkTheme!: Observable<boolean>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;

    this.isDarkTheme.subscribe((theme: boolean) => {
      const body = document.body;
      theme ? body.classList.add('dark') : body.classList.remove('dark');
    });
    
  }
}
