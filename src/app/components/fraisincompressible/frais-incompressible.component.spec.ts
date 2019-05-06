import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisIncompressibleComponent } from './frais-incompressible.component';

describe('FraisIncompressibleComponent', () => {
  let component: FraisIncompressibleComponent;
  let fixture: ComponentFixture<FraisIncompressibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisIncompressibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisIncompressibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
