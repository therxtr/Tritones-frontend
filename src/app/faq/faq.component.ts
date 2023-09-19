import { Component } from '@angular/core';
import { Faqitem } from '../faqitem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent {
  faqItems: Faqitem[] = [
    {
      question: 'What is the audition process?',
      answer: "Don't fret! We will guide you through the audition process! After signing up for your reserved audition time slot, make sure to note the time and location on campus. When you arrive at your assigned room, some of the Tritones will chat with you and answer any last questions. Once you have been checked in, you are welcome into the audition room, where we will run through some provided singing and rhythm exercises. When it is time to sing your 60 second solo for us, we will ask if we may record it for reference later. If the audition panel request to hear more, you may be asked to sing the Star Spangled Banner (U.S. National Anthem). After that we will give you additional callbacks details and then you are free to go - thank you for taking the time to audition!",
      isOpen: false
    },
    {
      question: 'How does AcaRush at UC San Diego work?',
      answer: "A Cappella Recruitment at UC San Diego commences on the same week of A Capella Wants You. During this a cappella extravaganza all eight groups at UCSD will perform 2 songs. Post-concert you will be able to meet with representatives from each group and get a feel of what it's like to be in a cappella group! Afterward, sign up for audition slots for as many groups as you want. Auditions are September 22nd - September 29th, callbacks are Sunday morning October 2nd 9:00am-12:00pm. Callback times are coordinated among all a cappella groups, so you will NEVER have to worry about missing a callback because of another group's audition/callback. AUDITIONEES will be notified of acceptance by ALL groups between 6-9pm on the Monday (October 3rd) following callbacks.",
      isOpen: false
    },
    {
      question: 'How many people will you be taking? Is it hard to get in?',
      answer: "It's complicated. The UCSD Tritones does not have a set number of members. We like to average around 14-16 members at once, but we've had as little as 11 members, to as much as 20. Generally, if you audition for us, and we feel that you are fully qualified to be in the group, we would love to have you on board. With that being said, earning a spot in any of UC San Diego's a cappella groups is extremely competitive. All groups participate in the same recruitment process. This is not to say that you have to be a musical genius or be the next American Idol! Everyone should audition, because you never know what we're looking for in any particular year!",
      isOpen: false
    },
    {
      question: 'What song should I choose for my audition?',
      answer: "Something fitting. Please audition with any song that will highlight your capabilities as a soloist. Although we appreciate all genres of music, we do recommend auditioning with a contemporary pop, R&B, or jazz song since this is the style of music that the group typically performs. Regardless of genre, please choose a song that accentuates your range and stylistic abilities. If you have trouble choosing an audition song, please reference our YouTube channel for song ideas.",
      isOpen: false
    },
    {
      question: 'What makes someone stand out?',
      answer: "Your voice, your character, and your energy. In order to stand out during a cappella rush, it is important for the auditionee to have fun and be transparrent during the audition. At the same time that you perform for us, be yourself! We want you to communicate to us about your vocal talent and your personality.",
      isOpen: false
    },
    {
      question: 'Can I audition for more than one group?',
      answer: "YES! In fact, we recommend that you audition for every single group that you can possibly audition for in order to determine which group is the best fit for you. Since membership in an a cappella group spans a college career, it is of utmost importance that you decide if a group's 'vibe' is the right one for you.",
      isOpen: false
    },
  ]

  toggleAnswer(item: Faqitem) {
    item.isOpen = !item.isOpen;
  }
}
