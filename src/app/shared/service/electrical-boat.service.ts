import { Injectable } from '@angular/core';
import { ElectricalBoatData } from '../model/electricalBoat.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ElectricalBoatService {
  private readonly endpoint1 =
    'http://localhost:8080/api/electricaboat/all-boat';
  private readonly endpoint2 =
    'http://localhost:8080/api/electricaboat/add-one-boat';
  private readonly endpoint3 =
    'http://localhost:8080/api/electricaboat/get-one-boat';
  private readonly endpoint4 =
    'http://localhost:8080/api/electricaboat/delete-one-boat';
  private readonly endpoint5 =
    'http://localhost:8080/api/electricaboat/edit-boat';
  private readonly endpoint6 =
    'http://localhost:8080/api/electricaboat/set-price';

  constructor(private readonly http: HttpClient) {}

  public getAllBoats(): Observable<ElectricalBoatData[]> {
    return this.http.get<ElectricalBoatData[]>(this.endpoint1);
  }

  public saveBoat(boat: ElectricalBoatData): Observable<ElectricalBoatData> {
    return this.http.post<ElectricalBoatData>(this.endpoint2, boat);
  }

  public getSingleBoat(id: number): Observable<ElectricalBoatData> {
    return this.http.get<ElectricalBoatData>(this.endpoint3 + '/' + id);
  }

  public deleteBoat(id: number): Observable<void> {
    return this.http.delete<void>(this.endpoint4 + '/' + id);
  }

  public editBoat(boat: ElectricalBoatData): Observable<ElectricalBoatData> {
    return this.http.post<ElectricalBoatData>(this.endpoint5, boat);
  }

  public setprice(price: number): Observable<void> {
    return this.http.get<void>(this.endpoint6 + '/' + price);
  }
}
