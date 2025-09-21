import { TestBed } from '@angular/core/testing';

import { AutomotoresService } from './automotores';

describe('Automotores', () => {
  let service: AutomotoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutomotoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
