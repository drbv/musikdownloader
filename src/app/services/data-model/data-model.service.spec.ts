import { TestBed } from '@angular/core/testing';

import { DataModelService } from './data-model.service';

describe('DataModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataModelService = TestBed.get(DataModelService);
    expect(service).toBeTruthy();
  });
});
