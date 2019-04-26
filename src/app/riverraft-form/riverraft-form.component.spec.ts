import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiverraftFormComponent } from './riverraft-form.component';

describe('RiverraftFormComponent', () => {
  let component: RiverraftFormComponent;
  let fixture: ComponentFixture<RiverraftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RiverraftFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiverraftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
