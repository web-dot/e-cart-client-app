import { TestBed } from '@angular/core/testing';

import { AppuserserviceService } from './appuserservice.service';

describe('AppuserserviceService', () => {
  let service: AppuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
