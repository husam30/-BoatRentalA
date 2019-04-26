import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElectricalBoatData } from '../shared/model/electricalBoat.model';

export class EditFormElectrical extends FormGroup {
  constructor() {
    super({
      BoatNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      numberOfSeats: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      id: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  /** Gets the model of this form */
  public getModel(): ElectricalBoatData {
    return {
      bootNumber: this.controls.BoatNumber.value,
      numberOfSeats: this.controls.numberOfSeats.value,
      id: this.controls.id.value,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
