import { TestBed } from '@angular/core/testing';

import { EmailGeneratorService } from './email-generator.service';

describe('EmailGeneratoService', () => {
  let service: EmailGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
