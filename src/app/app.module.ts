import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RiverraftFormComponent } from './riverraft-form/riverraft-form.component';
import { RowingFormComponent } from './rowing-form/rowing-form.component';
import { ElectricalFormComponent } from './electrical-form/electrical-form.component';
import { GuestFormComponent } from './guest-form/guest-form.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { MainComponent } from './main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    RiverraftFormComponent,
    RowingFormComponent,
    ElectricalFormComponent,
    GuestFormComponent,
    ReservationFormComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
