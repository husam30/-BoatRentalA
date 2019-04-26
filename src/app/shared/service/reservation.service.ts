import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReservationData } from '../model/reservation.model';
import { BoatData } from '../model/boat.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private readonly endpoint1 =
    'http://localhost:8080/api/reservation/all-boats';
  private readonly endpoint2 =
    'http://localhost:8080/api/reservation/add-reservation';

  constructor(private readonly http: HttpClient) {}

  public getAllBoat(type: string): Observable<BoatData[]> {
    return this.http.get<BoatData[]>(this.endpoint1 + '/' + type);
  }

  public saveReservation(
    reservation: ReservationData
  ): Observable<ReservationData> {
    return this.http.post<ReservationData>(this.endpoint2, reservation);
  }
}
