import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {
  AbstractControl,
  FormGroup,
  UntypedFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";
import {TranslateService} from "@ngx-translate/core";
import {TestimonialsText} from "../../../shared/data/testimonials-text.data";
import {TranslatedText} from "../../../shared/data/translated-text.data";
import {TranslatingService} from "../../../../services/translating.service";
import {Subscription} from "rxjs";
import {TestimonialsService} from "../../../../services/testimonials.service";

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
export class ContactsPageSectionComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});
  public isLoading: boolean = false;
  public showModal = false;
  public modalSuccess = false;
  public lang: keyof TranslatedText = 'en';
  private langSub!: Subscription;

  public testimonials: TestimonialsText[] = []

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService, private translate: TranslateService, private translatingService: TranslatingService,
              private testimonialsService: TestimonialsService) {
  }

  public ngOnInit() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      secondName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required, this.phoneValidator()]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      feedback: this.fb.control('', Validators.required)
    });

    this.langSub = this.translatingService.lang$.subscribe((lang) => {
      this.lang = lang;
    });

    this.testimonials = this.testimonialsService.getAllTestimonials();
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
        feedback: this.userForm.get('feedback')?.value.trim(),
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

  private phoneValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) return null;

      // Accept optional spaces between groups
      const phoneRegex = /^(?:\+359\s?|0)(?:88\d|89\d|7\d{2})\s?\d{2}\s?\d{2}\s?\d{2}$/;

      const compactValue = value.replace(/\s+/g, '');
      const compactRegex = /^(?:\+359|0)(88\d{6}|89\d{6}|7\d{7})$/;

      const valid = phoneRegex.test(value) || compactRegex.test(compactValue);
      return valid ? null : { invalidPhone: true };
    };
  }
}
