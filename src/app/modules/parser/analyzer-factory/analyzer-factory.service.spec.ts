import { TestBed } from '@angular/core/testing';

import { AnalyzerFactoryService } from './analyzer-factory.service';

describe('AnalyzerFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnalyzerFactoryService = TestBed.get(AnalyzerFactoryService);
    expect(service).toBeTruthy();
  });
});
