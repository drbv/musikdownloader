import { TestBed } from '@angular/core/testing';

import { FileReaderService } from './file-reader.service';

describe('FileReaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileReaderService = TestBed.get(FileReaderService);
    expect(service).toBeTruthy();
  });
});
