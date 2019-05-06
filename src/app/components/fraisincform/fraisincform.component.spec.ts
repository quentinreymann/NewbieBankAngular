import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraisincformComponent } from './fraisincform.component';

describe('FraisincformComponent', () => {
  let component: FraisincformComponent;
  let fixture: ComponentFixture<FraisincformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraisincformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraisincformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
