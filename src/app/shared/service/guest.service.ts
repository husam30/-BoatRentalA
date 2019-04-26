import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GuestData } from '../model/guest.model';
@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private readonly endpoint1 = 'http://localhost:8080/api/guest/all-guest';
  private readonly endpoint2 = 'http://localhost:8080/api/guest/add-one-guest';
  private readonly endpoint3 = 'http://localhost:8080/api/guest/get-one-guest';
  private readonly endpoint4 =
    'http://localhost:8080/api/guest/delete-one-guest';
  private readonly endpoint5 = 'http://localhost:8080/api/guest/edit-guest';

  constructor(private readonly http: HttpClient) {}

  public getAllGuest(): Observable<GuestData[]> {
    return this.http.get<GuestData[]>(this.endpoint1);
  }

  public saveGuest(guest: GuestData): Observable<GuestData> {
    return this.http.post<GuestData>(this.endpoint2, guest);
  }

  public getSingleGuest(id: number): Observable<GuestData> {
    return this.http.get<GuestData>(this.endpoint3 + '/' + id);
  }

  public deleteGuest(id: number): Observable<void> {
    return this.http.delete<void>(this.endpoint4 + '/' + id);
  }

  public editGuest(guest: GuestData): Observable<GuestData> {
    return this.http.post<GuestData>(this.endpoint5, guest);
  }
}
