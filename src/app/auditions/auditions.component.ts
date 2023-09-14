import { Component } from '@angular/core';

@Component({
  selector: 'app-auditions',
  templateUrl: './auditions.component.html',
  styleUrls: ['./auditions.component.css']
})
export class AuditionsComponent {

  scrollToSection(sectionId: string): void {
    document.querySelector('#' + sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
  
}
