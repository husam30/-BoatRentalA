import { LocaleDataIndex } from '@angular/common/src/i18n/locale_data';
import { GuestData } from './guest.model';
import { BoatData } from './boat.model';

export class ReservationData {
  public id: number;
  public numberOfPerson: number;
  public startDate: string;
  public endDate: string;
  public tripStatus: string;
  public guest: GuestData;
  public boats: BoatData[];
}
