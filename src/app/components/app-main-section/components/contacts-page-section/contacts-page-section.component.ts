import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-contacts-page-section',
  templateUrl: './contacts-page-section.component.html',
  styleUrl: './contacts-page-section.component.scss',
  animations: [
    trigger('expandCollapse', [
      state('closed', style({height: '0px', opacity: 0, overflow: 'hidden'})),
      state('open', style({height: '*', opacity: 1})),
      transition('closed <=> open', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class ContactsPageSectionComponent {
  public faqs = [
    {
      question: 'What is the best time for training?',
      answer: 'The best time depends on your schedule, but morning workouts boost metabolism, while evening sessions may improve performance.',
      isOpen: false
    },
    {
      question: 'How often should I work out?',
      answer: 'For general fitness, aim for at least 3-5 sessions per week, balancing cardio and strength training.',
      isOpen: false
    },
    {
      question: 'Is weightlifting good for weight loss?',
      answer: 'Yes! Strength training boosts metabolism, burns fat, and builds muscle, which helps with long-term weight management.',
      isOpen: false
    }
  ];

  public contactInfo = {
    phone: '+1 (123) 456-7890',
    email: 'info@studiotraining.com',
    location: '123 Fitness Ave, New York, NY 10001'
  };

  public toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }


  public onSubmit(form: any) {
    if (form.valid) {
      alert(`Thank you, ${form.value.name}! We will get back to you soon.`);
      form.reset();
    }
  }
}
