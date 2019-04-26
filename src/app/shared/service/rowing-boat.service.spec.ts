import { TestBed } from '@angular/core/testing';

import { RowingBoatService } from './rowing-boat.service';

describe('RowingBoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RowingBoatService = TestBed.get(RowingBoatService);
    expect(service).toBeTruthy();
  });
});
