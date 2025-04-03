import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page-section',
  templateUrl: './app-main-page-section.component.html',
  styleUrl: './app-main-page-section.component.scss'
})
export class AppMainPageSectionComponent {
  private readonly contactsLink = "/contacts";
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

  constructor(private router: Router) {
  }

  public toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  public navigateToContacts() {

    this.router.navigate([this.contactsLink]);
  }
}
