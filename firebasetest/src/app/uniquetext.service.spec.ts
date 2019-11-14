import { TestBed } from '@angular/core/testing';

import { UniquetextService } from './uniquetext.service';

describe('UniquetextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniquetextService = TestBed.get(UniquetextService);
    expect(service).toBeTruthy();
  });
});
