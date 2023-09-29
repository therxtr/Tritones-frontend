import { Component, OnInit, HostListener } from '@angular/core';
import { SpotifytracksService } from '../spotifytracks.service';
import { Track } from '../spotify-tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tracks: Track[] = [];
  introFlex = false

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenWidth();
  }

  constructor(private spotifyService: SpotifytracksService) {}

  ngOnInit(): void {
    this.getTracks();
    this.checkScreenWidth();
  }

  getTracks(): void {
    this.spotifyService.getTracks().subscribe(
      (data) => {
        this.tracks = data;
      },
      (error) => {
        console.error('Error fetching tracks', error);
      }
    );
  }

  private checkScreenWidth(): void {
    const screenWidth = window.innerWidth;
    this.introFlex = screenWidth >= 769; // change this
  }
}
