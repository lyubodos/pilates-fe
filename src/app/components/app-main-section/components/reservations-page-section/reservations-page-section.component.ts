import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators
} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";
import {TranslateService} from "@ngx-translate/core";
import {TransmitionData} from "../../../shared/data/transmition-data.data";


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
  public date = new Date();
  public availableTimes: string[] = [];
  public isLoading: boolean = false;
  public showModal = false;
  public modalSuccess = false;
  public minDate: Date = new Date();

  constructor(private fb: UntypedFormBuilder, private reservationService: ReservationService, private translate: TranslateService) {
  }

  public ngOnInit() {
    this.setInitialDate();

    this.userForm = this.fb.group({
      firstName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      secondName: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: this.fb.control('', [Validators.required, this.phoneNumberValidator()]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      date: this.fb.control('', [Validators.required, this.noPastDateValidator]),
      reservationTime: [null, [Validators.required, this.dynamicTimeValidator.bind(this)]],
      option: this.fb.control(null, Validators.required)
    });

    this.userForm.get('date')?.valueChanges.subscribe(dateStr => {
      const day = new Date(dateStr).getDay();
      const timeControl = this.userForm.get('reservationTime');

      this.updateAvailableTimes(day);
      this.userForm.get('reservationTime')?.setValue(null);

      if (!dateStr) {
        timeControl?.reset(); // clear time if date is cleared
      } else {
        timeControl?.updateValueAndValidity(); // re-validate time when date changes
      }
    });

    this.userForm.get('reservationTime')?.valueChanges.subscribe((time: Date) => {
      if (!(time instanceof Date)) return;

      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const milliseconds = time.getMilliseconds();

      if (minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
        const corrected = new Date(time);
        corrected.setMinutes(0, 0, 0);

        this.userForm.get('reservationTime')?.setValue(corrected, {emitEvent: false});
        this.userForm.get('reservationTime')?.updateValueAndValidity({onlySelf: true});
      }
    });
  }

  public getNzStatus(controlName: string): '' | 'error' | 'warning' {
    const control = this.userForm.get(controlName);
    if (!control) return '';
    return control.invalid && (control.dirty || control.touched) ? 'error' : '';
  }

  public disableBeforeMinDate = (current: Date): boolean => {
    return current < this.minDate;
  };

  public getDisabledHours = (): number[] => {
    const dateControl = this.userForm.get('date');
    if (!dateControl || !dateControl.value) return [];

    const selectedDate = new Date(dateControl.value);
    const day = selectedDate.getDay(); // 0 = Sunday, 6 = Saturday

    const hoursToDisable: number[] = [];

    const startHour = (day === 0 || day === 6) ? 10 : 8;
    const endHour = (day === 0 || day === 6) ? 16 : 17;

    for (let h = 0; h < 24; h++) {
      if (h < startHour || h > endHour) {
        hoursToDisable.push(h);
      }
    }

    return hoursToDisable;
  };

  public onSubmit(): void {
    if (this.userForm.valid) {
      const time: Date = this.userForm.get('reservationTime')?.value;
      const hours = String(time.getHours()).padStart(2, '0');
      const minutes = String(time.getMinutes()).padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;

      const transmitionData: TransmitionData = {
        firstName: this.userForm.get('firstName')?.value.trim(),
        secondName: this.userForm.get('secondName')?.value.trim(),
        phoneNumber: this.userForm.get('phoneNumber')?.value.trim(),
        email: this.userForm.get('email')?.value.trim(),
        date: this.userForm.get('date')?.value,
        reservationTime: formattedTime,
        option: this.userForm.get('option')?.value,
        lang: this.translate.currentLang
      }

      this.isLoading = true;
      this.reservationService.sendReservationEmail(transmitionData).subscribe({
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

  private phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value) return null;

      const phoneRegex = /^\+\d{10,15}$/;

      return phoneRegex.test(value)
        ? null
        : {invalidPhoneNumber: true};
    };
  }

  private setInitialDate() {
    const now = new Date();

    const gmtPlus2 = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    gmtPlus2.setDate(gmtPlus2.getDate() + 1);
    gmtPlus2.setHours(0, 0, 0, 0); // Start of "tomorrow" in GMT+2

    this.minDate = gmtPlus2;
  }

  private noPastDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today ? {pastDate: true} : null;
  }


  private dynamicTimeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const time = control.value;
      if (!(time instanceof Date)) return {invalidTimeFormat: true};

      const hour = time.getHours();
      const minute = time.getMinutes();

      if (minute !== 0) return {notRoundHour: true};

      const date = this.userForm?.get('date')?.value;
      const day = date instanceof Date ? date.getDay() : null;
      const minHour = day === 0 || day === 6 ? 10 : 8;
      const maxHour = day === 0 || day === 6 ? 16 : 17;

      if (hour < minHour || hour > maxHour) return {outOfTimeRange: true};

      return null;
    };
  }

  private updateAvailableTimes(day: number) {
    const start = day === 0 || day === 6 ? 9 : 8;
    const end = day === 0 || day === 6 ? 15 : 18;

    this.availableTimes = [];
    for (let hour = start; hour <= end; hour++) {
      const timeStr = `${hour.toString().padStart(2, '0')}:00`;
      this.availableTimes.push(timeStr);
    }
  }
}
