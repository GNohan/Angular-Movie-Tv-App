import { TestBed } from '@angular/core/testing';

import { MovieTVServiceService } from './movie-tvservice.service';

describe('MovieTVServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieTVServiceService = TestBed.get(MovieTVServiceService);
    expect(service).toBeTruthy();
  });
});
