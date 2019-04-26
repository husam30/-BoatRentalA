import { TestBed } from '@angular/core/testing';

import { ElectricalBoatService } from './electrical-boat.service';

describe('ElectricalBoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectricalBoatService = TestBed.get(ElectricalBoatService);
    expect(service).toBeTruthy();
  });
});
