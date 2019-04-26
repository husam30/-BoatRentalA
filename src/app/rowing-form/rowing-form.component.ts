import { Component, OnInit } from '@angular/core';
import { AddFormRowing } from './rowing-add-form';
import { DeleteFormRowing } from './rowing-delete-form';
import { EditFormRowing } from './rowing-edit-form';
import { SetPriceRowing } from './rowing-setPrice-form';
import { RowingBoatData } from '../shared/model/rowingBoat.model';
import { RowingBoatService } from '../shared/service/rowing-boat.service';

@Component({
  selector: 'app-rowing-form',
  templateUrl: './rowing-form.component.html',
  styleUrls: ['./rowing-form.component.css']
})
export class RowingFormComponent implements OnInit {
  public addboat: boolean = false;
  public editboat: boolean = false;
  public deleteboat: boolean = false;
  public setpriceboat: boolean = false;
  public showMs: boolean = false;
  public showMs1: boolean = false;
  public showMs2: boolean = false;
  public showMs3: boolean = false;
  public addForm: AddFormRowing = new AddFormRowing();
  public deleteForm: DeleteFormRowing = new DeleteFormRowing();
  public editForm: EditFormRowing = new EditFormRowing();
  public setPriceForm: SetPriceRowing = new SetPriceRowing();
  public rBoats: RowingBoatData[];

  constructor(private rowingBoatService: RowingBoatService) {}

  ngOnInit() {
    this.rowingBoatService
      .getAllBoats()
      .subscribe(rBoats => (this.rBoats = rBoats));
  }

  public onFormSubmit() {
    const boat: RowingBoatData = this.addForm.getModel();
    this.rowingBoatService.saveBoat(boat).subscribe(() => {
      this.rowingBoatService
        .getAllBoats()
        .subscribe(rBoats => (this.rBoats = rBoats));
    });
    this.showMs = true;
    this.addForm.reset();
  }

  public onFormSubmit1() {
    const boat1: RowingBoatData = this.deleteForm.getModel();
    this.rowingBoatService.deleteBoat(boat1.id).subscribe(() => {
      this.rowingBoatService
        .getAllBoats()
        .subscribe(rBoats => (this.rBoats = rBoats));
    });
    this.showMs1 = true;
    this.deleteForm.reset();
  }
  public onFormSubmit2() {
    const boat2: RowingBoatData = this.editForm.getModel();
    this.rowingBoatService.editBoat(boat2).subscribe(() => {
      this.rowingBoatService
        .getAllBoats()
        .subscribe(rBoats => (this.rBoats = rBoats));
    });
    this.showMs2 = true;
    this.editForm.reset();
  }
  public onFormSubmit3() {
    const boat3: RowingBoatData = this.setPriceForm.getModel();
    this.rowingBoatService.setprice(boat3.price).subscribe(() => {
      this.rowingBoatService
        .getAllBoats()
        .subscribe(rBoats => (this.rBoats = rBoats));
    });
    this.showMs3 = true;
    this.setPriceForm.reset();
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
  public boatsetPrice() {
    this.setpriceboat = !this.setpriceboat;
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
  public showMessage3() {
    this.showMs3 = !this.showMs3;
  }
}
