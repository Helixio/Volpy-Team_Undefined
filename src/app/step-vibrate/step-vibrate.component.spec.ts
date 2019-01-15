import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepVibrateComponent } from './step-vibrate.component';

describe('StepVibrateComponent', () => {
  let component: StepVibrateComponent;
  let fixture: ComponentFixture<StepVibrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepVibrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepVibrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
