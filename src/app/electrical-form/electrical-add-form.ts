import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElectricalBoatData } from '../shared/model/electricalBoat.model';

export class AddFormElectrical extends FormGroup {
  constructor() {
    super({
      bootNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ]),
      numberOfSeats: new FormControl('', [
        Validators.required,
        Validators.maxLength(100)
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): ElectricalBoatData {
    return {
      bootNumber: this.controls.bootNumber.value,
      numberOfSeats: this.controls.numberOfSeats.value,
      id: 0,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
