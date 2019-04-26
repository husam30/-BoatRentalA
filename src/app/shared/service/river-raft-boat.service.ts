import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RiverRaftBoatData } from '../model/riverRaftBoat.model';

@Injectable({
  providedIn: 'root'
})
export class RiverRaftBoatService {
  private readonly endpoint1 =
    'http://localhost:8080/api/riverraftboat/all-boat';
  private readonly endpoint2 =
    'http://localhost:8080/api/riverraftboat/add-one-boat';
  private readonly endpoint3 =
    'http://localhost:8080/api/riverraftboat/get-one-boat';
  private readonly endpoint4 =
    'http://localhost:8080/api/riverraftboat/delete-one-boat';
  private readonly endpoint5 =
    'http://localhost:8080/api/riverraftboat/edit-boat';
  private readonly endpoint6 =
    'http://localhost:8080/api/riverraftboat/set-price';

  constructor(private readonly http: HttpClient) {}

  public getAllBoats(): Observable<RiverRaftBoatData[]> {
    return this.http.get<RiverRaftBoatData[]>(this.endpoint1);
  }

  public saveBoat(boat: RiverRaftBoatData): Observable<RiverRaftBoatData> {
    return this.http.post<RiverRaftBoatData>(this.endpoint2, boat);
  }

  public getSingleBoat(id: number): Observable<RiverRaftBoatData> {
    return this.http.get<RiverRaftBoatData>(this.endpoint3 + '/' + id);
  }

  public deleteBoat(id: number): Observable<void> {
    return this.http.delete<void>(this.endpoint4 + '/' + id);
  }

  public editBoat(boat: RiverRaftBoatData): Observable<RiverRaftBoatData> {
    return this.http.post<RiverRaftBoatData>(this.endpoint5, boat);
  }
  public setprice(price: number): Observable<void> {
    return this.http.get<void>(this.endpoint6 + '/' + price);
  }
}
