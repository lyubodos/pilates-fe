import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
}
