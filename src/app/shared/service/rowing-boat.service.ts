import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RowingBoatData } from '../model/rowingBoat.model';

@Injectable({
  providedIn: 'root'
})
export class RowingBoatService {
  private readonly endpoint1 = 'http://localhost:8080/api/rowingboat/all-boat';
  private readonly endpoint2 =
    'http://localhost:8080/api/rowingboat/add-one-boat';
  private readonly endpoint3 =
    'http://localhost:8080/api/rowingboat/get-one-boat';
  private readonly endpoint4 =
    'http://localhost:8080/api/rowingboat/delete-one-boat';
  private readonly endpoint5 = 'http://localhost:8080/api/rowingboat/edit-boat';
  private readonly endpoint6 = 'http://localhost:8080/api/rowingboat/set-price';

  constructor(private readonly http: HttpClient) {}

  public getAllBoats(): Observable<RowingBoatData[]> {
    return this.http.get<RowingBoatData[]>(this.endpoint1);
  }

  public saveBoat(boat: RowingBoatData): Observable<RowingBoatData> {
    return this.http.post<RowingBoatData>(this.endpoint2, boat);
  }

  public getSingleBoat(id: number): Observable<RowingBoatData> {
    return this.http.get<RowingBoatData>(this.endpoint3 + '/' + id);
  }

  public deleteBoat(id: number): Observable<void> {
    return this.http.delete<void>(this.endpoint4 + '/' + id);
  }

  public editBoat(boat: RowingBoatData): Observable<RowingBoatData> {
    return this.http.post<RowingBoatData>(this.endpoint5, boat);
  }

  public setprice(price: number): Observable<void> {
    return this.http.get<void>(this.endpoint6 + '/' + price);
  }
}
