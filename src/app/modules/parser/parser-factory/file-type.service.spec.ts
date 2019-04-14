import { TestBed } from '@angular/core/testing';

import { FileTypeService } from './file-type.service';

describe('FileTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileTypeService = TestBed.get(FileTypeService);
    expect(service).toBeTruthy();
  });
});
