import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, UntypedFormBuilder, Validators} from "@angular/forms";

interface ContactFormGroup {
  name: FormControl<string>;
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

  constructor(private fb: UntypedFormBuilder) {
  }

  public ngOnInit() {
    this.userForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      date: this.fb.control('', [Validators.required])
    });

  }


  public onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form Submitted', this.userForm.value);
      alert('Form Submitted Successfully!');
      this.userForm.reset(); // Reset form after submission
    } else {
      alert('Please fill out the form correctly!');
    }
  }
}
