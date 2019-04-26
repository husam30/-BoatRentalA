import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RowingBoatData } from '../shared/model/rowingBoat.model';

export class DeleteFormRowing extends FormGroup {
  constructor() {
    super({
      boatid: new FormControl('', [
        Validators.maxLength(100),
        Validators.required
      ])
    });
  }

  /** Gets the model of this form */
  public getModel(): RowingBoatData {
    return {
      id: this.controls.boatid.value,
      bootNumber: 0,
      numberOfSeats: 0,
      price: 0,
      boatStatus: 'Avalible'
    };
  }
}
