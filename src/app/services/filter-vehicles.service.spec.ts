import { TestBed } from '@angular/core/testing';

import { FilterVehiclesService } from './filter-vehicles.service';

describe('FilterVehiclesService', () => {
  let service: FilterVehiclesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterVehiclesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
