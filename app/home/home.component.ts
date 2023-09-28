import { Component, OnInit } from '@angular/core';
import { SpotifytracksService } from '../spotifytracks.service';
import { Track } from '../spotify-tracks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tracks: Track[] = [];

  constructor(private spotifyService: SpotifytracksService) {}

  ngOnInit(): void {
    this.getTracks();
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
}
