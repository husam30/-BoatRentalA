import { TestBed } from '@angular/core/testing';

import { RiverRaftBoatService } from './river-raft-boat.service';

describe('RiverRaftBoatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RiverRaftBoatService = TestBed.get(RiverRaftBoatService);
    expect(service).toBeTruthy();
  });
});
