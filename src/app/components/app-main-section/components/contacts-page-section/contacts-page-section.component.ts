import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";
import {TranslateService} from "@ngx-translate/core";
import {TestimonialsText} from "../../../shared/data/testimonials-text.data";
import {TranslatedText} from "../../../shared/data/translated-text.data";
import {TranslatingService} from "../../../../services/translating.service";
import {Subscription} from "rxjs";

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
export class ContactsPageSectionComponent implements OnInit{
  public userForm: FormGroup = new FormGroup({});
  public isLoading: boolean = false;
  public showModal = false;
  public modalSuccess = false;
  public lang: keyof TranslatedText = 'en';
  private langSub!: Subscription;

  public testimonials: TestimonialsText[]  = [
    {
      name: {
        en: 'Minko Cvetanov',
        bg: "Минко Цветанов"
      },
      image: 'assets/images/testimonials/Screenshot 2025-04-24 at 22.36.14.png',
      info: {
        en: "It is worth it! You won't regret it!",
        bg: "Заслужава си! Няма да съжалявате!"
      },
      role: {
        en: 'Body instructor/Gym trainer',
        bg: "Фитнес инструктор"
      },
      message: {
        en: "After visiting ReformFlow Studio, my focus shifted not only to fitness but also to the Pilates Reformer, which helps with perfect recovery and further improvement of physical form.",
        bg: "След като посетих ReformFlow Studio моят поглед се фокусира не само върху фитнеса, но и пилатес реформъра, който спомага за перфектното възстановяване и доусъвършенстване на физическата форма."
      }
    },
    {
      name: {
        en: 'Martina Karakoleva',
        bg: "Мартина Караколева"
      },
      image: 'assets/images/testimonials/IMG_2189.jpeg',
      info: {
        en: "I can't wait to visit again!",
        bg: "Нямам търпение за следващата ми тренировка!"
      },
      role: {
        en: 'Marketing expert',
        bg: "Маркетингов експерт"
      },
      message: {
        en: "The instructors are exceptional professionals, working with great precision and paying attention to their clients with every single movement. I was very satisfied and can't wait for my next workout.",
        bg: "Инструкторите са изключителни професионалисти, работещи с огромна прецизност и обръщат внимание на своите клиенти при всяко едно движение. Останах много доволна и нямам търпение за следващата ми тренировка. "
      }
    },
    {
      name: {
        en: 'Daniela Mezeklieva',
        bg: "Даниела Мезеклиева"
      },
      image: 'assets/images/testimonials/anonymous.jpeg',
      info: {
        en: 'These trainings improved my life!',
        bg: "Тези тренировки подобриха живота ми!"
      },
      role: {
        en: 'Receptionist',
        bg: "Рецепционист"
      },
      message: {
        en: "ReformFlow showed me exercising can be both intensive and fun. Professional team, driven to provide the best care for your body. I am always looking forward to my sessions.",
        bg: "ReformFlow ми показа как упражненията могат да бъдат и натоварващи, и завабни. Професионален екип, който е посветен да предостави най-добрата гриьа за тялото ви. Винаги очаквам с нетърпение следващите сесии."
      }
    }
  ];

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService, private translate: TranslateService, private translatingService: TranslatingService) {
  }

  public ngOnInit() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      secondName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      feedback: this.fb.control('', Validators.required)
    });

    this.langSub = this.translatingService.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }

  public getNzStatus(controlName: string): '' | 'error' | 'warning' {
    const control = this.userForm.get(controlName);
    if (!control) return '';
    return control.invalid && (control.dirty || control.touched) ? 'error' : '';
  }

  public onSubmit(): void {
    if (this.userForm.valid) {
      const transmitionData = {
        firstName: this.userForm.get('firstName')?.value.trim(),
        secondName: this.userForm.get('secondName')?.value.trim(),
        phoneNumber: this.userForm.get('phoneNumber')?.value.trim(),
        email: this.userForm.get('email')?.value.trim(),
        feedback: this.userForm.get('option')?.value,
        lang: this.translate.currentLang
      }

      this.isLoading = true;
      this.reservationService.sendReviewEmail(transmitionData).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.showModal = true;
          this.modalSuccess = true;
        },
        error: (err) => {
          this.isLoading = false;
          this.showModal = true;
        }
      });
      this.userForm.reset();
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}
