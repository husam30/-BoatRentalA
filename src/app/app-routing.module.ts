import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricalFormComponent } from './electrical-form/electrical-form.component';
import { RiverraftFormComponent } from './riverraft-form/riverraft-form.component';
import { RowingFormComponent } from './rowing-form/rowing-form.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: '1',
    component: ElectricalFormComponent
  },
  {
    path: '2',
    component: RiverraftFormComponent
  },
  {
    path: '3',
    component: RowingFormComponent
  },
  {
    path: '4',
    component: GuestFormComponent
  },
  {
    path: '5',
    component: ReservationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
