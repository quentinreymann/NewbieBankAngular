import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableaufraisComponent } from './tableaufrais.component';

describe('TableaufraisComponent', () => {
  let component: TableaufraisComponent;
  let fixture: ComponentFixture<TableaufraisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableaufraisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaufraisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
