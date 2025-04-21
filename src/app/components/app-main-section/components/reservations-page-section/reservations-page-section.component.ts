import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";

interface ContactFormGroup {
  firstName: FormControl<string>;
  secondName: FormControl<string>;
  phoneNumber: FormControl<string>;
  email: FormControl<string>;
  date: FormControl<string>;
}

@Component({
  selector: 'app-reservations-page-section',
  templateUrl: './reservations-page-section.component.html',
  styleUrl: './reservations-page-section.component.scss'
})
export class ReservationsPageSectionComponent implements OnInit {
  public userForm: FormGroup = new FormGroup({});
  public tomorrow: string = "";
  public date = new Date();
  public isLoading: boolean = false;
  public showModal = false;
  public modalSuccess = false;

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService) {
  }

  public ngOnInit() {
    this.date.setDate(this.date.getDate() + 1);
    this.tomorrow = this.date.toISOString().split('T')[0];

    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      secondName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      date: this.fb.control('', [Validators.required]),
      option: this.fb.control(null , Validators.required)
    });

  }

  public onSubmit(): void {
    if (this.userForm.valid) {
      this.isLoading = true;

      const cleanData = this.reservationService.trimFormValues(this.userForm)
      console.log('Form Submitted', this.userForm.value);
      this.reservationService.sendReservationEmail(cleanData).subscribe({
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
