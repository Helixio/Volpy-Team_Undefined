import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraFrontComponent } from './camera-front.component';

describe('CameraFrontComponent', () => {
  let component: CameraFrontComponent;
  let fixture: ComponentFixture<CameraFrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraFrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
