import { TestBed } from '@angular/core/testing';
import { CrudService } from '@app/core/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { CrudServiceStub } from '@app/core/mocks/crud-stub.service';


describe('CrudService', () => {
  let service: CrudService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: CrudServiceStub },
      ],
    });
    service = TestBed.inject(CrudService);
  });


  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method service read should be work', () => {
    expect(service.read());
    expect(service.read('', {}, 'https://test.com'));
  });

  it('method service create should be work', () => {
    expect(service.create(''));
  });

  it('method service update should be work', () => {
    expect(service.update('put', '/test', { name: 'test' }));
    expect(service.update('patch', '/test', { name: 'test' }));
  });

});
