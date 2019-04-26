import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RowingBoatData } from '../shared/model/rowingBoat.model';

export class SetPriceRowing extends FormGroup {
  constructor() {
    super({
      price: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): RowingBoatData {
    return {
      id: 0,
      bootNumber: 0,
      numberOfSeats: 0,
      price: this.controls.price.value,
      boatStatus: 'Avalible'
    };
  }
}
