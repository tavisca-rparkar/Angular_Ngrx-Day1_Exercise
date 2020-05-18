import { TestBed } from '@angular/core/testing';

import { App.CommunicatorService } from './app.communicator.service';

describe('App.CommunicatorService', () => {
  let service: App.CommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(App.CommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
