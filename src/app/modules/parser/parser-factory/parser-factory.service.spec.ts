import { TestBed } from '@angular/core/testing';

import { ParserFactoryService } from './parser-factory.service';

describe('ParserFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParserFactoryService = TestBed.get(ParserFactoryService);
    expect(service).toBeTruthy();
  });
});
