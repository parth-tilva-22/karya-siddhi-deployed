import { TestBed } from '@angular/core/testing';

import { RemoteTaskService } from './remote-task.service';

describe('RemoteTaskService', () => {
  let service: RemoteTaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteTaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
