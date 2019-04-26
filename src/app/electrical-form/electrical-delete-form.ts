import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElectricalBoatData } from '../shared/model/electricalBoat.model';

export class DeleteFormElectrical extends FormGroup {
  constructor() {
    super({
      boatid: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): ElectricalBoatData {
    return {
      id: this.controls.boatid.value,
      bootNumber: 0,
      numberOfSeats: 0,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
