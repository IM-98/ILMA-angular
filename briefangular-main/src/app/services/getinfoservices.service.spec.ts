import { TestBed } from '@angular/core/testing';

import { GetinfoservicesService } from './getinfoservices.service';

describe('GetinfoservicesService', () => {
  let service: GetinfoservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetinfoservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
