import { TestBed, inject } from '@angular/core/testing';

import { ScriptloaderService } from './scriptloader.service';

describe('ScriptloaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScriptloaderService]
    });
  });

  it('should be created', inject([ScriptloaderService], (service: ScriptloaderService) => {
    expect(service).toBeTruthy();
  }));
});
