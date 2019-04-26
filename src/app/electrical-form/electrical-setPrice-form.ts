import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ElectricalBoatData } from '../shared/model/electricalBoat.model';

export class SetPriceElectrical extends FormGroup {
  constructor() {
    super({
      price: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): ElectricalBoatData {
    return {
      id: 0,
      bootNumber: 0,
      numberOfSeats: 0,
      price: this.controls.price.value,
      boatStatus: 'Avalible'
    };
  }
}
