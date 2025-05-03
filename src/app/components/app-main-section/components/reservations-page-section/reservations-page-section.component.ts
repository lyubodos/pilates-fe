import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {ReservationService} from "../../../../services/reservation.service";
import {TranslateService} from "@ngx-translate/core";
import {TransmitionData} from "../../../shared/data/transmition-data.data";
import {NzStatus} from "ng-zorro-antd/core/types";


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
  public minTime: string = '08:00';
  public maxTime: string = '18:00';
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
      phoneNumber: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      date: this.fb.control('', [Validators.required, this.noPastDateValidator]),
      reservationTime: [null, [Validators.required, this.dynamicTimeValidator.bind(this)]],
      option: this.fb.control(null, Validators.required)
    });

    this.userForm.get('date')?.valueChanges.subscribe(dateStr => {
      const day = new Date(dateStr).getDay();
      this.updateAvailableTimes(day);
      this.userForm.get('reservationTime')?.setValue(null);
    });
  }

  public getStatus(): NzStatus {
    const status: NzStatus = '';

    if (this.userForm.get('date')?.invalid && this.userForm.get('date')?.touched) {
      return 'error';
    }
    return status;
  }

  public disableBeforeMinDate = (current: Date): boolean => {
    return current < this.minDate;
  };

  public onSubmit(): void {
    if (this.userForm.valid) {

      const transmitionData: TransmitionData = {
        firstName: this.userForm.get('firstName')?.value.trim(),
        secondName: this.userForm.get('secondName')?.value.trim(),
        phoneNumber: this.userForm.get('phoneNumber')?.value.trim(),
        email: this.userForm.get('email')?.value.trim(),
        date: this.userForm.get('date')?.value,
        reservationTime: this.userForm.get('reservationTime')?.value,
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

  private noPastDateValidator(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate < today ? {pastDate: true} : null;
  }

  private dynamicTimeValidator(control: AbstractControl): ValidationErrors | null {
    const time = control.value;
    if (!time) return null;

    const [hour, minute] = time.split(':').map(Number);
    const totalMinutes = hour * 60 + minute;

    const [minHour, minMin] = this.minTime.split(':').map(Number);
    const [maxHour, maxMin] = this.maxTime.split(':').map(Number);
    const minMinutes = minHour * 60 + minMin;
    const maxMinutes = maxHour * 60 + maxMin;

    return totalMinutes < minMinutes || totalMinutes > maxMinutes
      ? {outOfTimeRange: true}
      : null;
  }

  private setInitialDate() {
    const now = new Date();

    const gmtPlus2 = new Date(now.getTime() + 2 * 60 * 60 * 1000);
    gmtPlus2.setDate(gmtPlus2.getDate() + 1);
    gmtPlus2.setHours(0, 0, 0, 0); // Start of "tomorrow" in GMT+2

    this.minDate = gmtPlus2;
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
