import { Component, OnInit } from '@angular/core';
import { ElectricalBoatData } from '../shared/model/electricalBoat.model';
import { ElectricalBoatService } from '../shared/service/electrical-boat.service';
import { AddFormElectrical } from './electrical-add-form';
import { DeleteFormElectrical } from './electrical-delete-form';
import { EditFormElectrical } from './electrical-edit-form';
import { SetPriceElectrical } from './electrical-setPrice-form';

@Component({
  selector: 'app-electrical-form',
  templateUrl: './electrical-form.component.html',
  styleUrls: ['./electrical-form.component.css']
})
export class ElectricalFormComponent implements OnInit {
  public addboat: boolean = false;
  public editboat: boolean = false;
  public deleteboat: boolean = false;
  public setpriceboat: boolean = false;
  public showMs: boolean = false;
  public showMs1: boolean = false;
  public showMs2: boolean = false;
  public showMs3: boolean = false;
  public addForm: AddFormElectrical = new AddFormElectrical();
  public deleteForm: DeleteFormElectrical = new DeleteFormElectrical();
  public editForm: EditFormElectrical = new EditFormElectrical();
  public setPriceForm: SetPriceElectrical = new SetPriceElectrical();
  public eBoats: ElectricalBoatData[];

  constructor(private electricalBoatService: ElectricalBoatService) {}

  ngOnInit() {
    this.electricalBoatService
      .getAllBoats()
      .subscribe(eBoats => (this.eBoats = eBoats));
  }

  public onFormSubmit() {
    const boat: ElectricalBoatData = this.addForm.getModel();
    this.electricalBoatService.saveBoat(boat).subscribe(() => {
      this.electricalBoatService
        .getAllBoats()
        .subscribe(eBoats => (this.eBoats = eBoats));
    });
    this.showMs = true;
    this.addForm.reset();
  }

  public onFormSubmit1() {
    const boat1: ElectricalBoatData = this.deleteForm.getModel();
    this.electricalBoatService.deleteBoat(boat1.id).subscribe(() => {
      this.electricalBoatService
        .getAllBoats()
        .subscribe(eBoats => (this.eBoats = eBoats));
    });
    this.showMs1 = true;
    this.deleteForm.reset();
  }
  public onFormSubmit2() {
    const boat2: ElectricalBoatData = this.editForm.getModel();
    this.electricalBoatService.editBoat(boat2).subscribe(() => {
      this.electricalBoatService
        .getAllBoats()
        .subscribe(eBoats => (this.eBoats = eBoats));
    });
    this.showMs2 = true;
    this.editForm.reset();
  }
  public onFormSubmit3() {
    const boat3: ElectricalBoatData = this.setPriceForm.getModel();
    this.electricalBoatService.setprice(boat3.price).subscribe(() => {
      this.electricalBoatService
        .getAllBoats()
        .subscribe(eBoats => (this.eBoats = eBoats));
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
