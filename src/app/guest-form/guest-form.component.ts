import { Component, OnInit } from '@angular/core';
import { AddGuest } from './guest-add-form';
import { DeleteFormGuest } from './guest-delete-form';
import { EditFormGuest } from './guest-edit-form';
import { GuestData } from '../shared/model/guest.model';
import { GuestService } from '../shared/service/guest.service';

@Component({
  selector: 'app-guest-form',
  templateUrl: './guest-form.component.html',
  styleUrls: ['./guest-form.component.css']
})
export class GuestFormComponent implements OnInit {
  public addboat: boolean = false;
  public editboat: boolean = false;
  public deleteboat: boolean = false;

  public showMs: boolean = false;
  public showMs1: boolean = false;
  public showMs2: boolean = false;

  public addForm: AddGuest = new AddGuest();
  public deleteForm: DeleteFormGuest = new DeleteFormGuest();
  public editForm: EditFormGuest = new EditFormGuest();

  public guest: GuestData[];

  constructor(private guestService: GuestService) {}

  ngOnInit() {
    this.guestService.getAllGuest().subscribe(guest => (this.guest = guest));
  }

  public onFormSubmit() {
    const guest1: GuestData = this.addForm.getModel();
    this.guestService.saveGuest(guest1).subscribe(() => {
      this.guestService.getAllGuest().subscribe(guest => (this.guest = guest));
    });
    this.showMs = true;
    this.addForm.reset();
  }

  public onFormSubmit1() {
    const guest2: GuestData = this.deleteForm.getModel();
    this.guestService.deleteGuest(guest2.id).subscribe(() => {
      this.guestService.getAllGuest().subscribe(guest => (this.guest = guest));
    });
    this.showMs1 = true;
    this.deleteForm.reset();
  }
  public onFormSubmit2() {
    const guest3: GuestData = this.editForm.getModel();
    this.guestService.editGuest(guest3).subscribe(() => {
      this.guestService.getAllGuest().subscribe(guest => (this.guest = guest));
    });
    this.showMs2 = true;
    this.editForm.reset();
  }

  public boatAdd() {
    this.addboat = !this.addboat;
  }
  public boatEdit() {
    this.editboat = !this.editboat;
  }
  public boatDelete() {
    this.deleteboat = !this.deleteboat;
  }

  public showMessage() {
    this.showMs = !this.showMs;
  }
  public showMessage1() {
    this.showMs1 = !this.showMs1;
  }
  public showMessage2() {
    this.showMs2 = !this.showMs2;
  }
}
