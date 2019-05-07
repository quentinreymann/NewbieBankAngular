import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisincresumeComponent } from './fraisincresume.component';

describe('FraisincresumeComponent', () => {
  let component: FraisincresumeComponent;
  let fixture: ComponentFixture<FraisincresumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisincresumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisincresumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
