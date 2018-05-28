import { TestBed, inject } from '@angular/core/testing';

import { AtmserviceService } from './atmservice.service';

describe('AtmserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmserviceService]
    });
  });

  it('should be created', inject([AtmserviceService], (service: AtmserviceService) => {
    expect(service).toBeTruthy();
  }));
});
