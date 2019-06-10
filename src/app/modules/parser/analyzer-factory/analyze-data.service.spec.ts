import { TestBed } from '@angular/core/testing';

import { AnalyzeDataService } from './analyze-data.service';

describe('AnalyzeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzeDataService = TestBed.get(AnalyzeDataService);
    expect(service).toBeTruthy();
  });
});
