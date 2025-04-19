import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from "@angular/forms";

@Injectable(
  { providedIn: 'root'
  }
  )
export class ReservationService {
  private readonly API_PORT = 3000;
  private baseUrl = `http://localhost:${this.API_PORT}/api`;

  constructor(private http: HttpClient) {}

  public sendReservationEmail(data: any) {
    return this.http.post(`${this.baseUrl}/send-email`, data);
  }

  public sendReviewEmail(data: any) {
    return this.http.post(`${this.baseUrl}/send-review`, data);
  }

  public trimFormValues(form: FormGroup): any {
    const raw = form.getRawValue();
    let trimmed: { [x: string]: any; } = {};

    Object.keys(raw).forEach(key => {
      const value = raw[key];
      trimmed[key] = typeof value === 'string' ? value.trim() : value;
    });

    return trimmed;
  }
}
