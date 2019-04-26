import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RiverRaftBoatData } from '../shared/model/riverRaftBoat.model';

export class SetPriceRiverraft extends FormGroup {
  constructor() {
    super({
      price: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): RiverRaftBoatData {
    return {
      id: 0,
      bootNumber: 0,
      numberOfSeats: 0,
      price: this.controls.price.value,
      boatStatus: 'Avalible'
    };
  }
}
