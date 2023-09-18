import { Component, OnInit,Renderer2,ElementRef } from '@angular/core';
import { MemberService } from '../members.service';
import { Member } from '../member';
import { VoicePart } from '../member';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent implements OnInit {
  members: Member[] = [];
  sopranos: Member[] = [];
  mezzos: Member[] = [];    
  altos: Member[] = []; 
  tenors: Member[] = []; 
  baritonesAndbass: Member[] = [];

  voicePartGroups: { [key: string]: any[] } = {};

  constructor(private memberService: MemberService, private el: ElementRef) {}

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((data) => {
      this.members = data;
      this.sopranos = this.members.filter(member => member.voicePart === VoicePart.SOPRANO);
      this.mezzos = this.members.filter(member => member.voicePart === VoicePart.MEZZO);
      this.altos = this.members.filter(member => member.voicePart === VoicePart.ALTO);
      this.tenors = this.members.filter(member => member.voicePart === VoicePart.TENOR);
      this.baritonesAndbass = this.members.filter(member => 
        member.voicePart === VoicePart.BARITONE || member.voicePart === VoicePart.BASS
      );
  
      this.voicePartGroups = {
        sopranos: this.sopranos,
        mezzos: this.mezzos,
        altos: this.altos,
        tenors: this.tenors,
        baritonesbass: this.baritonesAndbass
      };
    });
  }
  
  get voicePartKeys(): string[] {
    return Object.keys(this.voicePartGroups);
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


