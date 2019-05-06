import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeclientComponent } from './resumeclient.component';

describe('ResumeclientComponent', () => {
  let component: ResumeclientComponent;
  let fixture: ComponentFixture<ResumeclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
