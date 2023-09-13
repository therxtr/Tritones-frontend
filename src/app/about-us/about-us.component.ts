import { Component, OnInit } from '@angular/core';
import { MemberService } from '../members.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  members: any[] = [];
  boards: any[] = [];

  constructor(private memberService: MemberService) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
    });

    this.memberService.getBoards().subscribe((data) => {
      this.boards = data;
    });
  }
}