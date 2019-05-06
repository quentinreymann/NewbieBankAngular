import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Acceuil2Component } from './acceuil2.component';

describe('Acceuil2Component', () => {
  let component: Acceuil2Component;
  let fixture: ComponentFixture<Acceuil2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Acceuil2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Acceuil2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
