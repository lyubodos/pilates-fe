import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";

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

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService) {
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
      console.log('Form Submitted', this.userForm.value);
      const cleanData = this.reservationService.trimFormValues(this.userForm)
      this.reservationService.sendReviewEmail(cleanData).subscribe();
      this.userForm.reset(); // Reset form after submission
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}
