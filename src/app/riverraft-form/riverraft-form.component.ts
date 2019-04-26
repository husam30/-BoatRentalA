import { Component, OnInit } from '@angular/core';
import { AddFormRiverraft } from './riverrafat-add-form';
import { RiverRaftBoatService } from '../shared/service/river-raft-boat.service';
import { RiverRaftBoatData } from '../shared/model/riverRaftBoat.model';
import { DeleteFormRiverraft } from './riverraft-delete-form';
import { EditFormRiverraft } from './riverrafat-edit-form';
import { SetPriceRiverraft } from './riverraft-setPrice-form';

@Component({
  selector: 'app-riverraft-form',
  templateUrl: './riverraft-form.component.html',
  styleUrls: ['./riverraft-form.component.css']
})
export class RiverraftFormComponent implements OnInit {
  public addboat: boolean = false;
  public editboat: boolean = false;
  public deleteboat: boolean = false;
  public setpriceboat: boolean = false;
  public showMs: boolean = false;
  public showMs1: boolean = false;
  public showMs2: boolean = false;
  public showMs3: boolean = false;
  public addForm: AddFormRiverraft = new AddFormRiverraft();
  public deleteForm: DeleteFormRiverraft = new DeleteFormRiverraft();
  public editForm: EditFormRiverraft = new EditFormRiverraft();
  public setPriceForm: SetPriceRiverraft = new SetPriceRiverraft();
  public rrBoats: RiverRaftBoatData[];

  constructor(private riverRaftBoatService: RiverRaftBoatService) {}

  ngOnInit() {
    this.riverRaftBoatService
      .getAllBoats()
      .subscribe(rrBoats => (this.rrBoats = rrBoats));
  }

  public onFormSubmit() {
    const boat: RiverRaftBoatData = this.addForm.getModel();
    this.riverRaftBoatService.saveBoat(boat).subscribe(() => {
      this.riverRaftBoatService
        .getAllBoats()
        .subscribe(rrBoats => (this.rrBoats = rrBoats));
    });
    this.showMs = true;
    this.addForm.reset();
  }

  public onFormSubmit1() {
    const boat1: RiverRaftBoatData = this.deleteForm.getModel();
    this.riverRaftBoatService.deleteBoat(boat1.id).subscribe(() => {
      this.riverRaftBoatService
        .getAllBoats()
        .subscribe(rrBoats => (this.rrBoats = rrBoats));
    });
    this.showMs1 = true;
    this.deleteForm.reset();
  }
  public onFormSubmit2() {
    const boat2: RiverRaftBoatData = this.editForm.getModel();
    this.riverRaftBoatService.editBoat(boat2).subscribe(() => {
      this.riverRaftBoatService
        .getAllBoats()
        .subscribe(rrBoats => (this.rrBoats = rrBoats));
    });
    this.showMs2 = true;
    this.editForm.reset();
  }
  public onFormSubmit3() {
    const boat3: RiverRaftBoatData = this.setPriceForm.getModel();
    this.riverRaftBoatService.setprice(boat3.price).subscribe(() => {
      this.riverRaftBoatService
        .getAllBoats()
        .subscribe(rrBoats => (this.rrBoats = rrBoats));
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
