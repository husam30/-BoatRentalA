import { Component, OnInit } from '@angular/core';
import { AddReservation } from './reservation-add-form';
import { ReservationData } from '../shared/model/reservation.model';
import { ReservationService } from '../shared/service/reservation.service';
import { GuestData } from '../shared/model/guest.model';
import { GuestService } from '../shared/service/guest.service';
import { BoatData } from '../shared/model/boat.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  public addboat: boolean = false;
  public type: string = 'Electrical';
  public typech: string[] = ['Electrical', 'Rowing', 'RiverRaft'];

  public showMs: boolean = false;

  public addForm: AddReservation = new AddReservation();

  public reservation: ReservationData[];

  public guest: GuestData[];

  public boats: BoatData[];

  constructor(
    private reservationService: ReservationService,
    private guestService: GuestService
  ) {}

  ngOnInit() {
    this.guestService.getAllGuest().subscribe(guest => (this.guest = guest));
  }

  public changeType() {
    this.type = (<HTMLInputElement>document.getElementById('BoatType')).value;
    this.reservationService.getAllBoat(this.type).subscribe(boats => {
      this.boats = boats;
    });
  }
  public onFormSubmit() {
    const reservation1: ReservationData = this.addForm.getModel();
    this.reservationService.saveReservation(reservation1).subscribe(() => {
      this.reservationService
        .getAllBoat(this.type)
        .subscribe(boats => (this.boats = boats));
    });
    this.showMs = true;
    this.addForm.reset();
  }

  public boatAdd() {
    this.addboat = !this.addboat;
  }

  public showMessage() {
    this.showMs = !this.showMs;
  }
}
