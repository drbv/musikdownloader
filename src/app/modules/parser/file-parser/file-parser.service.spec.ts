import { TestBed } from '@angular/core/testing';

import { FileParserService } from './file-parser.service';

describe('FileParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileParserService = TestBed.get(FileParserService);
    expect(service).toBeTruthy();
  });
});
