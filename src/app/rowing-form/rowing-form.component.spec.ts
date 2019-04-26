import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowingFormComponent } from './rowing-form.component';

describe('RowingFormComponent', () => {
  let component: RowingFormComponent;
  let fixture: ComponentFixture<RowingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
