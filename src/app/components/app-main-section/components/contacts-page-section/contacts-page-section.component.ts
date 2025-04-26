import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";
import {TranslateService} from "@ngx-translate/core";

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

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService, private translate: TranslateService) {
  }

  public ngOnInit() {
    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      secondName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      feedback: this.fb.control('', Validators.required)
    });

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
