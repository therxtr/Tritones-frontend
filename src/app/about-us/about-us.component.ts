import { Component, OnInit,Renderer2,ElementRef } from '@angular/core';
import { MemberService } from '../members.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  members: any[] = [];
  boards: any[] = [];
  sopranos: any[] = [];
  mezzos: any[] = [];
  altos: any[] = [];
  tenors: any[] = [];
  baritonesAndbass:any[] = [];
  

  voicePartGroups: { [key: string]: any[] } = {};

  constructor(private memberService: MemberService,private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
      this.sopranos = this.members.filter(member => member.voicePart.toLowerCase().includes('soprano'));
      this.mezzos = this.members.filter(member => member.voicePart.toLowerCase().includes('mezzo'));
      this.altos = this.members.filter(member => member.voicePart.toLowerCase().includes('alto'));
      this.tenors = this.members.filter(member => member.voicePart.toLowerCase().includes('tenor'));
      this.baritonesAndbass = this.members.filter(member => 
        member.voicePart.toLowerCase().includes('baritone') || 
        member.voicePart.toLowerCase().includes('bass')
      );
      

    });

    this.memberService.getBoards().subscribe((data) => {
      this.boards = data;
    });

    this.voicePartGroups = {
      sopranos: this.sopranos,
      mezzos: this.mezzos,
      altos: this.altos,
      tenors: this.tenors,
      baritonesbass: this.baritonesAndbass
    };
  }

  getMembersByVoicePart(voicePart: string): any[] {
    return this.voicePartGroups[voicePart];
  }

  getDisplayName(voicePart: string): string {
    const displayNames: { [key: string]: string } = {
      sopranos: 'Sopranos',
      mezzos: 'Mezzos',
      altos: 'Altos',
      tenors: 'Tenors',
      baritonesandbass: 'Baritones & Bass'
    };
    return displayNames[voicePart];
  }
  

  scrollToSection(sectionId: string): void {
    const element = this.el.nativeElement.querySelector(`#${sectionId}`);
    element.scrollIntoView({ behavior: 'smooth' });
  }
}


